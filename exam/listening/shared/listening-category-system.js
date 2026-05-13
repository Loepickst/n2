(function() {
    const STORAGE_PREFIX = 'listening_category_last_question::';

    function normalizeType(value) {
        return String(value || '').trim().toLowerCase().replace(/-/g, '_');
    }

    function normalizeLevel(value) {
        return String(value || '').trim().toUpperCase();
    }

    function normalizeExamKey(value) {
        if (window.ListeningProgress && typeof window.ListeningProgress.normalizeExamKey === 'function') {
            return window.ListeningProgress.normalizeExamKey(value);
        }

        const text = String(value || '').trim();
        if (!text) return '';

        const normalizedText = text
            .replace(/[．。]/g, '.')
            .replace(/\./g, '-');

        let match = normalizedText.match(/^(?:N[123]-)?(\d{4})-(\d{1,2})$/i);
        if (match) {
            return `${match[1]}-${String(parseInt(match[2], 10)).padStart(2, '0')}`;
        }

        match = text.match(/^(?:N[123]-)?(\d{4})年(\d{1,2})月$/i);
        if (match) {
            return `${match[1]}-${String(parseInt(match[2], 10)).padStart(2, '0')}`;
        }

        return normalizedText;
    }

    function formatDisplayYear(examKey) {
        const normalized = normalizeExamKey(examKey);
        const match = normalized.match(/^(\d{4})-(\d{2})$/);
        if (!match) return normalized;
        return `${match[1]}年${parseInt(match[2], 10)}月`;
    }

    function getCatalog() {
        return Array.isArray(window.ListeningCategoryCatalog) ? window.ListeningCategoryCatalog : [];
    }

    function getPool(type, level) {
        if (!window.ListeningQuestionPools || typeof window.ListeningQuestionPools.getPool !== 'function') {
            return [];
        }
        return window.ListeningQuestionPools.getPool(normalizeType(type), normalizeLevel(level));
    }

    function normalizeQuestionId(value) {
        const text = String(value == null ? '' : value).trim();
        return text;
    }

    function createQuestionMap(type, level) {
        const map = new Map();
        getPool(type, level).forEach((question) => {
            const examKey = normalizeExamKey(question.sourceExamKey);
            const questionId = normalizeQuestionId(question.questionId || question.displayQuestionId || question.id);
            if (!examKey || !questionId) return;
            map.set(`${examKey}::${questionId}`, {
                ...question,
                sourceExamKey: examKey,
                questionId
            });
        });
        return map;
    }

    function normalizeItem(item) {
        if (!item) return null;
        const sourceExamKey = normalizeExamKey(item.sourceExamKey || item.examKey);
        const questionId = normalizeQuestionId(item.questionId || item.id || item.displayQuestionId);
        if (!sourceExamKey || !questionId) {
            return null;
        }
        return {
            sourceExamKey,
            questionId,
            label: item.label ? String(item.label).trim() : ''
        };
    }

    function normalizeCategory(category) {
        if (!category || !category.id) return null;
        return {
            ...category,
            id: String(category.id).trim(),
            type: normalizeType(category.type),
            level: normalizeLevel(category.level),
            name: String(category.name || category.id).trim(),
            description: String(category.description || '').trim()
        };
    }

    function getRawCategories(type, level) {
        const normalizedType = normalizeType(type);
        const normalizedLevel = normalizeLevel(level);
        return getCatalog()
            .map(normalizeCategory)
            .filter(Boolean)
            .filter((category) => category.type === normalizedType && category.level === normalizedLevel);
    }

    function shouldIncludeAll(category) {
        return category.includeAll === true || category.source === 'all' || category.id === 'all';
    }

    function getFilteredPoolItems(category, type, level) {
        const source = String(category && category.source || '').trim();
        if (source !== 'integrated-double-question' && source !== 'integrated-single-question') {
            return null;
        }

        return getPool(type, level)
            .filter((question) => {
                const questionId = normalizeQuestionId(question.questionId || question.displayQuestionId || question.id);
                const isDoubleQuestion = questionId.includes('-');
                return source === 'integrated-double-question' ? isDoubleQuestion : !isDoubleQuestion;
            })
            .map((question) => normalizeItem({
                sourceExamKey: question.sourceExamKey,
                questionId: question.questionId || question.displayQuestionId || question.id,
                label: question.sourceLabel && (question.displayQuestionId || question.questionId)
                    ? `${question.sourceLabel} · 第 ${question.displayQuestionId || question.questionId} 题`
                    : ''
            }))
            .filter(Boolean);
    }

    function buildItemRefs(category, type, level) {
        const explicitItems = Array.isArray(category.items)
            ? category.items.map(normalizeItem).filter(Boolean)
            : [];

        if (explicitItems.length > 0) {
            return explicitItems;
        }

        const filteredItems = getFilteredPoolItems(category, type, level);
        if (filteredItems) {
            return filteredItems;
        }

        if (!shouldIncludeAll(category)) {
            return [];
        }

        return getPool(type, level).map((question) => normalizeItem({
            sourceExamKey: question.sourceExamKey,
            questionId: question.questionId
        })).filter(Boolean);
    }

    function dedupeItems(items) {
        const seen = new Set();
        return items.filter((item) => {
            const signature = `${item.sourceExamKey}::${item.questionId}`;
            if (seen.has(signature)) return false;
            seen.add(signature);
            return true;
        });
    }

    function getCategoryItemRefs(category, type, level) {
        return dedupeItems(buildItemRefs(category, type, level));
    }

    function getCategoryStatsForCategory(category, type, level) {
        const itemRefs = getCategoryItemRefs(category, type, level);
        const questionMap = createQuestionMap(type, level);
        const itemCount = itemRefs.reduce((count, item) => {
            const signature = `${item.sourceExamKey}::${item.questionId}`;
            return questionMap.has(signature) ? count + 1 : count;
        }, 0);

        return {
            sourceItemCount: itemRefs.length,
            itemCount,
            missingCount: Math.max(itemRefs.length - itemCount, 0)
        };
    }

    function getCategoryItems(type, level, categoryId) {
        const category = getCategory(type, level, categoryId);
        if (!category) return [];

        const questionMap = createQuestionMap(type, level);
        return getCategoryItemRefs(category, type, level)
            .map((item) => {
                const signature = `${item.sourceExamKey}::${item.questionId}`;
                const question = questionMap.get(signature);
                if (!question) return null;

                return {
                    ...item,
                    question,
                    displayYear: formatDisplayYear(item.sourceExamKey),
                    displayLabel: item.label || `${formatDisplayYear(item.sourceExamKey)} · 第 ${item.questionId} 题`
                };
            })
            .filter(Boolean)
            .map((item, index) => ({
                ...item,
                index
            }));
    }

    function normalizeSetNumber(value) {
        const number = Number.parseInt(value, 10);
        return Number.isInteger(number) && number > 0 ? number : 0;
    }

    function normalizeSetSize(value) {
        const size = Number.parseInt(value, 10);
        return Number.isInteger(size) && size > 0 ? size : 6;
    }

    function getCategorySetItems(type, level, categoryId, setNumber, setSize = 6) {
        const normalizedSet = normalizeSetNumber(setNumber);
        if (!normalizedSet) return [];

        const size = normalizeSetSize(setSize);
        const allItems = getCategoryItems(type, level, categoryId);
        const startIndex = (normalizedSet - 1) * size;

        return allItems.slice(startIndex, startIndex + size).map((item, index) => ({
            ...item,
            originalIndex: item.index,
            index
        }));
    }

    function getCategories(type, level) {
        return getRawCategories(type, level).map((category) => {
            const stats = getCategoryStatsForCategory(category, type, level);
            return {
                ...category,
                ...stats
            };
        });
    }

    function getCategory(type, level, categoryId) {
        const id = String(categoryId || '').trim();
        if (!id) return null;
        return getRawCategories(type, level).find((category) => category.id === id) || null;
    }

    function getCategoryStats(type, level, categoryId) {
        const category = getCategory(type, level, categoryId);
        if (!category) {
            return { sourceItemCount: 0, itemCount: 0, missingCount: 0 };
        }
        return getCategoryStatsForCategory(category, type, level);
    }

    function getSharedPracticePath() {
        const pathname = window.location && window.location.pathname ? window.location.pathname : '';
        if (/\/exam\/listening\/shared\//.test(pathname)) {
            return 'category-practice.html';
        }
        return '../../shared/category-practice.html';
    }

    function buildCategoryPracticeUrl(config) {
        const params = new URLSearchParams();
        params.set('type', normalizeType(config && config.type));
        params.set('level', normalizeLevel(config && config.level));
        params.set('category', String(config && config.categoryId || '').trim());

        if (config && config.sourceExamKey) {
            params.set('examKey', normalizeExamKey(config.sourceExamKey));
        }
        if (config && config.questionId) {
            params.set('questionId', normalizeQuestionId(config.questionId));
        }
        if (config && config.setNumber) {
            const setNumber = normalizeSetNumber(config.setNumber);
            if (setNumber) params.set('set', String(setNumber));
        }

        return `${getSharedPracticePath()}?${params.toString()}`;
    }

    function buildLastQuestionKey(type, level, categoryId) {
        return `${STORAGE_PREFIX}${normalizeType(type)}::${normalizeLevel(level)}::${String(categoryId || '').trim()}`;
    }

    function buildCategorySetBaseKey(type, level, categoryId, setNumber) {
        return `${normalizeType(type)}::${normalizeLevel(level)}::${String(categoryId || '').trim()}::set-${normalizeSetNumber(setNumber)}`;
    }

    function buildLastSetQuestionKey(type, level, categoryId, setNumber) {
        return `${STORAGE_PREFIX}${buildCategorySetBaseKey(type, level, categoryId, setNumber)}`;
    }

    function buildSetAnsweredKey(type, level, categoryId, setNumber) {
        return `listening_category_set_answered::${buildCategorySetBaseKey(type, level, categoryId, setNumber)}`;
    }

    function buildSetCompletedKey(type, level, categoryId, setNumber) {
        return `listening_category_set_completed::${buildCategorySetBaseKey(type, level, categoryId, setNumber)}`;
    }

    function parseStoredQuestion(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || 'null');
            if (!parsed || typeof parsed !== 'object') return null;
            const sourceExamKey = normalizeExamKey(parsed.sourceExamKey || parsed.examKey);
            const questionId = normalizeQuestionId(parsed.questionId || parsed.id || parsed.displayQuestionId);
            if (!sourceExamKey || !questionId) {
                return null;
            }
            const index = Number.parseInt(parsed.index, 10);
            return {
                sourceExamKey,
                questionId,
                ...(Number.isInteger(index) && index >= 0 ? { index } : {})
            };
        } catch (error) {
            return null;
        }
    }

    function getLastQuestion(type, level, categoryId) {
        return parseStoredQuestion(localStorage.getItem(buildLastQuestionKey(type, level, categoryId)));
    }

    function saveLastQuestion(type, level, categoryId, question) {
        const key = buildLastQuestionKey(type, level, categoryId);
        const normalized = parseStoredQuestion(JSON.stringify(question || null));

        if (!normalized) {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
    }

    function getLastSetQuestion(type, level, categoryId, setNumber) {
        return parseStoredQuestion(localStorage.getItem(buildLastSetQuestionKey(type, level, categoryId, setNumber)));
    }

    function saveLastSetQuestion(type, level, categoryId, setNumber, question) {
        const key = buildLastSetQuestionKey(type, level, categoryId, setNumber);
        const normalized = parseStoredQuestion(JSON.stringify(question || null));

        if (!normalizeSetNumber(setNumber) || !normalized) {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
    }

    function getAnsweredSetSignatures(type, level, categoryId, setNumber) {
        try {
            const parsed = JSON.parse(localStorage.getItem(buildSetAnsweredKey(type, level, categoryId, setNumber)) || '[]');
            return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
        } catch (error) {
            return [];
        }
    }

    function saveAnsweredSetSignatures(type, level, categoryId, setNumber, signatures) {
        const unique = Array.from(new Set((Array.isArray(signatures) ? signatures : []).filter(Boolean).map(String)));
        localStorage.setItem(buildSetAnsweredKey(type, level, categoryId, setNumber), JSON.stringify(unique));
    }

    function createQuestionSignature(question) {
        const sourceExamKey = normalizeExamKey(question && (question.sourceExamKey || question.examKey));
        const questionId = normalizeQuestionId(question && (question.questionId || question.id || question.displayQuestionId));
        if (!sourceExamKey || !questionId) return '';
        return `${sourceExamKey}::${questionId}`;
    }

    function markCategorySetQuestionAnswered(type, level, categoryId, setNumber, question) {
        const signature = createQuestionSignature(question);
        if (!normalizeSetNumber(setNumber) || !signature) return;

        const signatures = getAnsweredSetSignatures(type, level, categoryId, setNumber);
        if (!signatures.includes(signature)) {
            signatures.push(signature);
            saveAnsweredSetSignatures(type, level, categoryId, setNumber, signatures);
        }

        const setItems = getCategorySetItems(type, level, categoryId, setNumber);
        const isComplete = setItems.length > 0 && setItems.every((item) => signatures.includes(createQuestionSignature(item)));
        if (isComplete) {
            markCategorySetCompleted(type, level, categoryId, setNumber);
        }
    }

    function markCategorySetCompleted(type, level, categoryId, setNumber) {
        if (!normalizeSetNumber(setNumber)) return;
        localStorage.setItem(buildSetCompletedKey(type, level, categoryId, setNumber), 'true');
    }

    function isCategorySetCompleted(type, level, categoryId, setNumber) {
        return localStorage.getItem(buildSetCompletedKey(type, level, categoryId, setNumber)) === 'true';
    }

    function getCategorySetProgress(type, level, categoryId, setNumber, setSize = 6) {
        const items = getCategorySetItems(type, level, categoryId, setNumber, setSize);
        const answeredSignatures = getAnsweredSetSignatures(type, level, categoryId, setNumber);
        const totalCount = items.length;
        const answeredCount = answeredSignatures.filter((signature) => {
            return items.some((item) => createQuestionSignature(item) === signature);
        }).length;
        const lastQuestion = getLastSetQuestion(type, level, categoryId, setNumber);
        const lastIndex = lastQuestion
            ? items.findIndex((item) => item.sourceExamKey === lastQuestion.sourceExamKey && item.questionId === lastQuestion.questionId)
            : -1;
        const completed = totalCount > 0 && (isCategorySetCompleted(type, level, categoryId, setNumber) || answeredCount >= totalCount);

        return {
            totalCount,
            answeredCount,
            lastQuestion,
            lastIndex,
            completed
        };
    }

    function getCategorySets(type, level, categoryId, setSize = 6) {
        const size = normalizeSetSize(setSize);
        const items = getCategoryItems(type, level, categoryId);
        const setCount = Math.ceil(items.length / size);
        const sets = [];

        for (let index = 0; index < setCount; index += 1) {
            const setNumber = index + 1;
            const start = index * size + 1;
            const end = Math.min((index + 1) * size, items.length);
            const progress = getCategorySetProgress(type, level, categoryId, setNumber, size);
            sets.push({
                setNumber,
                start,
                end,
                itemCount: end - start + 1,
                ...progress
            });
        }

        return sets;
    }

    window.ListeningCategorySystem = {
        normalizeType,
        normalizeLevel,
        normalizeExamKey,
        formatDisplayYear,
        getCategories,
        getCategory,
        getCategoryStats,
        getCategoryItems,
        getCategorySets,
        getCategorySetItems,
        getCategorySetProgress,
        buildCategoryPracticeUrl,
        getLastQuestion,
        saveLastQuestion,
        getLastSetQuestion,
        saveLastSetQuestion,
        markCategorySetQuestionAnswered,
        markCategorySetCompleted,
        isCategorySetCompleted,
        buildLastQuestionKey,
        buildLastSetQuestionKey
    };
})();
