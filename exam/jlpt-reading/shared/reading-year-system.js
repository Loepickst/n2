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
        if (type === 'l') {
            return 'long';
        }
        return type;
    }

    function normalizeExamKey(value) {
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

    function buildReadingMarksKey(level, type, examKey) {
        return `reading_marks::${level}::${normalizeReadingType(type)}::${examKey}`;
    }

    function buildReadingLastPracticeKey(level, type) {
        return `reading_last_practice::${level}::${normalizeReadingType(type)}`;
    }

    function parseNumberArray(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || '[]');
            if (!Array.isArray(parsed)) {
                return [];
            }

            return Array.from(new Set(
                parsed
                    .map((item) => Number.parseInt(item, 10))
                    .filter((item) => Number.isInteger(item) && item > 0)
            )).sort((a, b) => a - b);
        } catch (error) {
            return [];
        }
    }

    function getReadingMarks(level, type, examKey) {
        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedType = normalizeReadingType(type);
        const marks = parseNumberArray(localStorage.getItem(buildReadingMarksKey(level, normalizedType, normalizedExamKey)));
        if (marks.length > 0 || normalizedType !== 'middle') {
            return marks;
        }

        return parseNumberArray(localStorage.getItem(`reading_marks::${level}::mid::${normalizedExamKey}`));
    }

    function saveReadingMarks(level, type, examKey, marks) {
        const normalized = Array.from(new Set(
            (marks || [])
                .map((item) => Number.parseInt(item, 10))
                .filter((item) => Number.isInteger(item) && item > 0)
        )).sort((a, b) => a - b);

        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedType = normalizeReadingType(type);
        const key = buildReadingMarksKey(level, normalizedType, normalizedExamKey);
        const legacyMiddleKey = normalizedType === 'middle'
            ? `reading_marks::${level}::mid::${normalizedExamKey}`
            : null;
        if (normalized.length === 0) {
            localStorage.removeItem(key);
            if (legacyMiddleKey) {
                localStorage.removeItem(legacyMiddleKey);
            }
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
        if (legacyMiddleKey && legacyMiddleKey !== key) {
            localStorage.removeItem(legacyMiddleKey);
        }
    }

    function collectReadingReviewItems(level, type) {
        const items = [];
        const normalizedType = normalizeReadingType(type);
        const prefixes = [`reading_marks::${level}::${normalizedType}::`];
        if (normalizedType === 'middle') {
            prefixes.push(`reading_marks::${level}::mid::`);
        }
        const seenExamKeys = new Set();

        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (!key) {
                continue;
            }

            const matchedPrefix = prefixes.find((prefix) => key.startsWith(prefix));
            if (!matchedPrefix) {
                continue;
            }

            const examKey = key.slice(matchedPrefix.length);
            if (seenExamKeys.has(examKey)) {
                continue;
            }
            const marks = parseNumberArray(localStorage.getItem(key));
            if (marks.length === 0) {
                continue;
            }

            seenExamKeys.add(examKey);
            items.push({
                examKey,
                count: marks.length
            });
        }

        items.sort((left, right) => right.examKey.localeCompare(left.examKey));
        return items;
    }

    function createReadingYearSession(config) {
        const level = config.level;
        const type = normalizeReadingType(config.type);
        const examKey = normalizeExamKey(config.examKey);
        const totalPages = Number.parseInt(config.totalPages, 10);
        const indexPath = config.indexPath || '../index.html';
        const params = config.urlParams || new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        const readingMode = params.get('readingMode');
        const isReviewMode = mode === 'review' || mode === 'mistake';

        localStorage.setItem(buildReadingLastPracticeKey(level, type), examKey);

        function getReviewPages() {
            return getReadingMarks(level, type, examKey).filter((page) => page >= 1 && page <= totalPages);
        }

        function recordAnswer(page, isCorrect) {
            const currentPage = Number.parseInt(page, 10);
            let marks = getReviewPages();

            if (!isCorrect) {
                if (!marks.includes(currentPage)) {
                    marks.push(currentPage);
                }
            } else {
                marks = marks.filter((item) => item !== currentPage);
            }

            saveReadingMarks(level, type, examKey, marks);
        }

        function getInitialPage(requestedPage) {
            const fallbackPage = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= totalPages
                ? requestedPage
                : 1;

            if (!isReviewMode) {
                return fallbackPage;
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return fallbackPage;
            }

            return reviewPages.includes(fallbackPage) ? fallbackPage : reviewPages[0];
        }

        function buildPageUrl(page) {
            const nextParams = new URLSearchParams();
            nextParams.set('page', String(page));
            nextParams.set('examKey', examKey);
            if (isReviewMode) {
                nextParams.set('mode', 'review');
            } else if (readingMode) {
                nextParams.set('readingMode', readingMode);
            }
            return `${window.location.pathname}?${nextParams.toString()}`;
        }

        function replacePageUrl(page) {
            const nextUrl = buildPageUrl(page);
            try {
                window.history.replaceState({ path: nextUrl }, '', nextUrl);
            } catch (error) {
                console.warn('History API is restricted in this environment.');
            }
        }

        function getNavState(page) {
            if (!isReviewMode) {
                return {
                    prevDisabled: page <= 1,
                    nextDisabled: page >= totalPages
                };
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { prevDisabled: true, nextDisabled: true };
            }

            const currentIndex = reviewPages.indexOf(page);
            if (currentIndex === -1) {
                return { prevDisabled: true, nextDisabled: true };
            }

            return {
                prevDisabled: currentIndex === 0,
                nextDisabled: currentIndex === reviewPages.length - 1
            };
        }

        function getMoveTarget(currentPage, direction) {
            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { done: true };
            }

            const currentIndex = reviewPages.indexOf(currentPage);
            if (currentIndex !== -1) {
                const nextIndex = currentIndex + direction;
                if (nextIndex < 0) {
                    return { edge: 'start' };
                }
                if (nextIndex >= reviewPages.length) {
                    return { done: true };
                }
                return { page: reviewPages[nextIndex] };
            }

            if (direction > 0) {
                const nextPage = reviewPages.find((page) => page > currentPage);
                return nextPage ? { page: nextPage } : { done: true };
            }

            const previousPages = reviewPages.filter((page) => page < currentPage);
            if (previousPages.length === 0) {
                return { edge: 'start' };
            }
            return { page: previousPages[previousPages.length - 1] };
        }

        function buildIndexUrl() {
            const nextParams = new URLSearchParams();
            nextParams.set('level', level);
            nextParams.set('type', type);
            nextParams.set('browse', 'year');
            return `${indexPath}?${nextParams.toString()}`;
        }

        function redirectToIndex() {
            window.location.href = buildIndexUrl();
        }

        return {
            level,
            type,
            examKey,
            isReviewMode,
            getReviewPages,
            recordAnswer,
            getInitialPage,
            buildPageUrl,
            replacePageUrl,
            getNavState,
            getMoveTarget,
            buildIndexUrl,
            redirectToIndex
        };
    }

    window.ReadingYearSystem = {
        normalizeReadingType,
        normalizeExamKey,
        buildReadingMarksKey,
        buildReadingLastPracticeKey,
        getReadingMarks,
        saveReadingMarks,
        collectReadingReviewItems,
        createReadingYearSession
    };
})();
