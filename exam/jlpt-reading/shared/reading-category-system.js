(function() {
    function normalizeReadingType(value) {
        const type = String(value || '').trim();
        if (type === 'mid') {
            return 'middle';
        }
        if (type === 'd') {
            return 'integrated';
        }
        if (type === 't') {
            return 'search';
        }
        return type;
    }

    function normalizeExamKey(value) {
        if (window.ReadingYearSystem && typeof window.ReadingYearSystem.normalizeExamKey === 'function') {
            return window.ReadingYearSystem.normalizeExamKey(value);
        }

        const text = String(value || '').trim();
        if (!text) {
            return '';
        }

        let match = text.match(/^(\d{4})[.\-](\d{1,2})$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        match = text.match(/^(\d{4})年(\d{1,2})月$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        return text.replace('.', '-');
    }

    function getCatalog() {
        return Array.isArray(window.ReadingCategoryCatalog) ? window.ReadingCategoryCatalog : [];
    }

    function formatDisplayYear(examKey) {
        const normalized = normalizeExamKey(examKey);
        const match = normalized.match(/^(\d{4})-(\d{2})$/);
        if (!match) {
            return normalized || '';
        }

        return `${match[1]}年${parseInt(match[2], 10)}月`;
    }

    function buildFallbackLabel(examKey, page) {
        return `${formatDisplayYear(examKey)} / 第${page}篇`;
    }

    function normalizeCategoryItem(item) {
        if (!item) {
            return null;
        }

        const examKey = normalizeExamKey(item.examKey);
        const page = Number.parseInt(item.page, 10);

        if (!examKey || !Number.isInteger(page) || page < 1) {
            return null;
        }

        return {
            examKey,
            page,
            label: item.label ? String(item.label).trim() : ''
        };
    }

    function getCategories(level, type) {
        const normalizedType = normalizeReadingType(type);
        return getCatalog().filter((category) => {
            return category && category.level === level && category.type === normalizedType;
        });
    }

    function getCategory(level, type, categoryId) {
        return getCategories(level, type).find((category) => category.id === categoryId) || null;
    }

    function buildFileName(examKey) {
        const normalized = normalizeExamKey(examKey);
        const match = normalized.match(/^(\d{4})-(\d{2})$/);
        if (!match) {
            return '';
        }

        return `${match[1]}.${parseInt(match[2], 10)}.html`;
    }

    function buildArticleBasePath(type, examKey, pathContext, level) {
        const normalizedType = normalizeReadingType(type);
        const fileName = buildFileName(examKey);
        if (!fileName) {
            return null;
        }
        const levelSegment = String(level || 'N2').trim().toLowerCase() || 'n2';

        if (normalizedType === 'short') {
            if (pathContext === 'year') {
                return fileName;
            }
            return `s/${levelSegment}/${fileName}`;
        }

        return null;
    }

    function buildCategoryBrowseUrl(level, type, categoryId) {
        const params = new URLSearchParams();
        params.set('level', level);
        params.set('type', type);
        params.set('browse', 'category');
        if (categoryId) {
            params.set('category', categoryId);
        }
        const parts = window.location.pathname.split('/').filter(Boolean);
        const fileName = parts[parts.length - 1] || '';
        const parent = parts[parts.length - 2] || '';
        const grandParent = parts[parts.length - 3] || '';
        const isLevelArticle = /^n2$/i.test(parent);
        const isLongLevelArticle = /^n2$/i.test(grandParent) && parent === '10';
        const indexPath = fileName === 'index.html' && parent === 'jlpt-reading'
            ? 'index.html'
            : isLongLevelArticle
                ? '../../../index.html'
                : isLevelArticle
                    ? '../../index.html'
                    : '../index.html';
        return `${indexPath}?${params.toString()}`;
    }

    function buildCategoryLastArticleKey(level, type, categoryId) {
        return `reading_category_last_article::${level}::${normalizeReadingType(type)}::${categoryId}`;
    }

    function parseStoredLastArticle(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || 'null');
            if (!parsed || typeof parsed !== 'object') {
                return null;
            }

            const examKey = normalizeExamKey(parsed.examKey);
            const page = Number.parseInt(parsed.page, 10);
            if (!examKey || !Number.isInteger(page) || page < 1) {
                return null;
            }

            return { examKey, page };
        } catch (error) {
            return null;
        }
    }

    function getCategoryLastArticle(level, type, categoryId) {
        return parseStoredLastArticle(
            localStorage.getItem(buildCategoryLastArticleKey(level, type, categoryId))
        );
    }

    function saveCategoryLastArticle(level, type, categoryId, article) {
        const normalized = parseStoredLastArticle(JSON.stringify(article || null));
        const key = buildCategoryLastArticleKey(level, type, categoryId);

        if (!normalized) {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
    }

    function buildCategoryArticleUrl(config) {
        const examKey = normalizeExamKey(config.examKey);
        const page = Number.parseInt(config.page, 10);
        const basePath = buildArticleBasePath(config.type, examKey, config.pathContext || 'index', config.level);

        if (!basePath || !Number.isInteger(page) || page < 1) {
            return null;
        }

        const params = new URLSearchParams();
        params.set('page', String(page));
        params.set('examKey', examKey);
        params.set('practiceMode', 'category');
        params.set('category', config.categoryId);

        return `${basePath}?${params.toString()}`;
    }

    function getCategoryPracticeItems(config) {
        const category = getCategory(config.level, config.type, config.categoryId);
        if (!category) {
            return [];
        }

        const seen = new Set();

        return (category.items || [])
            .map(normalizeCategoryItem)
            .filter(Boolean)
            .filter((item) => {
                const signature = `${item.examKey}::${item.page}`;
                if (seen.has(signature)) {
                    return false;
                }
                seen.add(signature);
                return true;
            })
            .map((item) => {
                const href = buildCategoryArticleUrl({
                    level: config.level,
                    type: config.type,
                    categoryId: config.categoryId,
                    examKey: item.examKey,
                    page: item.page,
                    pathContext: config.pathContext || 'index'
                });

                return {
                    ...item,
                    href,
                    displayYear: formatDisplayYear(item.examKey),
                    displayLabel: item.label || buildFallbackLabel(item.examKey, item.page)
                };
            })
            .filter((item) => Boolean(item.href));
    }

    function createCategorySession(config) {
        const level = config.level;
        const type = normalizeReadingType(config.type);
        const currentExamKey = normalizeExamKey(config.examKey);
        const categoryId = String(config.categoryId || '').trim();
        const practiceMode = String(config.practiceMode || '').trim();
        const category = practiceMode === 'category'
            ? getCategory(level, type, categoryId)
            : null;

        const sequence = category
            ? getCategoryPracticeItems({
                level,
                type,
                categoryId,
                pathContext: 'year'
            })
            : [];

        function findIndex(page) {
            const numericPage = Number.parseInt(page, 10);
            return sequence.findIndex((item) => item.examKey === currentExamKey && item.page === numericPage);
        }

        function resolveFallbackItem(page) {
            const exactIndex = findIndex(page);
            if (exactIndex !== -1) {
                return sequence[exactIndex];
            }

            const sameExamItem = sequence.find((item) => item.examKey === currentExamKey);
            if (sameExamItem) {
                return sameExamItem;
            }

            return sequence[0] || null;
        }

        function getInitialTarget(requestedPage) {
            if (!category) {
                return { empty: false };
            }

            if (sequence.length === 0) {
                return { empty: true };
            }

            const targetItem = resolveFallbackItem(requestedPage);
            if (!targetItem) {
                return { empty: true };
            }

            if (targetItem.examKey !== currentExamKey) {
                return {
                    empty: false,
                    redirectUrl: targetItem.href
                };
            }

            return {
                empty: false,
                page: targetItem.page
            };
        }

        function buildCurrentPageUrl(page) {
            return buildCategoryArticleUrl({
                type: config.type,
                categoryId,
                examKey: currentExamKey,
                page,
                pathContext: 'year'
            });
        }

        function replacePageUrl(page) {
            const nextUrl = buildCurrentPageUrl(page);
            if (!nextUrl) {
                return;
            }

            try {
                window.history.replaceState({ path: nextUrl }, '', nextUrl);
            } catch (error) {
                console.warn('History API is restricted in this environment.');
            }
        }

        function getNavState(page) {
            const index = findIndex(page);
            if (index === -1) {
                return {
                    prevDisabled: true,
                    nextDisabled: true
                };
            }

            return {
                prevDisabled: index === 0,
                nextDisabled: index === sequence.length - 1
            };
        }

        function getMoveTarget(page, direction) {
            const index = findIndex(page);
            if (index === -1) {
                return direction > 0 ? { done: true, currentIndex: -1 } : { edge: 'start', currentIndex: -1 };
            }

            const nextItem = sequence[index + direction];
            if (!nextItem) {
                return direction > 0 ? { done: true, currentIndex: index } : { edge: 'start', currentIndex: index };
            }

            return {
                currentIndex: index,
                targetIndex: index + direction,
                item: nextItem,
                examKey: nextItem.examKey,
                page: nextItem.page,
                href: nextItem.href,
                sameExamKey: nextItem.examKey === currentExamKey
            };
        }

        function rememberProgress(page) {
            if (!category) {
                return;
            }

            saveCategoryLastArticle(level, type, categoryId, {
                examKey: currentExamKey,
                page
            });
        }

        return {
            isCategoryMode: Boolean(category),
            category,
            sequence,
            getInitialTarget,
            getNavState,
            getMoveTarget,
            buildCurrentPageUrl,
            replacePageUrl,
            rememberProgress,
            buildBackUrl() {
                return buildCategoryBrowseUrl(level, type, categoryId);
            }
        };
    }

    window.ReadingCategorySystem = {
        normalizeReadingType,
        normalizeExamKey,
        formatDisplayYear,
        buildFallbackLabel,
        buildCategoryLastArticleKey,
        getCategoryLastArticle,
        saveCategoryLastArticle,
        getCategories,
        getCategory,
        buildCategoryBrowseUrl,
        buildCategoryArticleUrl,
        getCategoryPracticeItems,
        createCategorySession
    };
})();
