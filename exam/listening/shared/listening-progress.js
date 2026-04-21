(function() {
    function normalizeSegment(value) {
        return String(value || '').trim().toLowerCase();
    }

    function normalizeExamKey(value) {
        const text = String(value || '').trim();
        if (!text) {
            return '';
        }

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

    function normalizeIdList(value) {
        if (!Array.isArray(value)) {
            return [];
        }

        const result = [];
        const seen = new Set();

        value.forEach((item) => {
            const numeric = Number.parseInt(item, 10);
            if (Number.isInteger(numeric) && numeric > 0 && !seen.has(numeric)) {
                seen.add(numeric);
                result.push(numeric);
            }
        });

        return result;
    }

    function parseStoredIdList(rawValue) {
        try {
            return normalizeIdList(JSON.parse(rawValue || '[]'));
        } catch (error) {
            return [];
        }
    }

    function buildLastPracticeKey(type, level) {
        return `listening_last_practice::${normalizeSegment(type)}::${normalizeSegment(level)}`;
    }

    function buildMistakeKey(type, level, examKey) {
        return `listening_mistakes::${normalizeSegment(type)}::${normalizeSegment(level)}::${normalizeExamKey(examKey)}`;
    }

    function getLegacyLastPracticeKeys(type, level) {
        const normalizedType = normalizeSegment(type);
        const normalizedLevel = normalizeSegment(level);

        if (normalizedType === 'task-comprehension') {
            if (normalizedLevel === 'n1') return ['last_n1_listening1_practice'];
            if (normalizedLevel === 'n2') return ['last_n2_listening1_practice'];
            if (normalizedLevel === 'n3') return ['last_n3_listening1_practice'];
        }

        if (normalizedType === 'immediate-response') {
            if (normalizedLevel === 'n1') return ['last_n1_practice'];
            if (normalizedLevel === 'n2') return ['last_n2_practice'];
            if (normalizedLevel === 'n3') return ['last_n3_practice'];
        }

        return [];
    }

    function getLegacyMistakeKeys(type, level, examKey) {
        const normalizedType = normalizeSegment(type);
        const normalizedLevel = normalizeSegment(level);
        const normalizedExamKey = normalizeExamKey(examKey);

        if (!normalizedExamKey) {
            return [];
        }

        if (normalizedType === 'task-comprehension') {
            if (normalizedLevel === 'n1') {
                return [
                    `jlpt_listen1_marks_N1-${normalizedExamKey}`,
                    `jlpt_listen1_marks_${normalizedExamKey}`
                ];
            }

            if (normalizedLevel === 'n2') {
                return [`jlpt_listen1_marks_${normalizedExamKey}`];
            }

            if (normalizedLevel === 'n3') {
                return [
                    `jlpt_listen1_marks_N3-${normalizedExamKey}`,
                    `jlpt_listen1_marks_${normalizedExamKey}`
                ];
            }
        }

        if (normalizedType === 'immediate-response') {
            return [`jlpt_marks_${normalizedExamKey}`];
        }

        return [];
    }

    function getLastPractice(type, level) {
        const storageKey = buildLastPracticeKey(type, level);
        const currentValue = normalizeExamKey(localStorage.getItem(storageKey));
        if (currentValue) {
            return currentValue;
        }

        const legacyKeys = getLegacyLastPracticeKeys(type, level);
        for (const legacyKey of legacyKeys) {
            const legacyValue = normalizeExamKey(localStorage.getItem(legacyKey));
            if (legacyValue) {
                localStorage.setItem(storageKey, legacyValue);
                return legacyValue;
            }
        }

        return '';
    }

    function setLastPractice(type, level, examKey) {
        const normalizedExamKey = normalizeExamKey(examKey);
        const storageKey = buildLastPracticeKey(type, level);

        if (!normalizedExamKey) {
            localStorage.removeItem(storageKey);
            return;
        }

        localStorage.setItem(storageKey, normalizedExamKey);
    }

    function getMistakeIds(type, level, examKey) {
        const normalizedExamKey = normalizeExamKey(examKey);
        if (!normalizedExamKey) {
            return [];
        }

        const storageKey = buildMistakeKey(type, level, normalizedExamKey);
        const currentValue = parseStoredIdList(localStorage.getItem(storageKey));
        if (currentValue.length > 0) {
            return currentValue;
        }

        const legacyKeys = getLegacyMistakeKeys(type, level, normalizedExamKey);
        for (const legacyKey of legacyKeys) {
            const legacyValue = parseStoredIdList(localStorage.getItem(legacyKey));
            if (legacyValue.length > 0) {
                localStorage.setItem(storageKey, JSON.stringify(legacyValue));
                return legacyValue;
            }
        }

        return [];
    }

    function setMistakeIds(type, level, examKey, ids) {
        const normalizedExamKey = normalizeExamKey(examKey);
        if (!normalizedExamKey) {
            return;
        }

        const storageKey = buildMistakeKey(type, level, normalizedExamKey);
        const legacyKeys = getLegacyMistakeKeys(type, level, normalizedExamKey);
        const normalizedIds = normalizeIdList(ids);

        legacyKeys.forEach((legacyKey) => {
            localStorage.removeItem(legacyKey);
        });

        if (normalizedIds.length === 0) {
            localStorage.removeItem(storageKey);
            return;
        }

        localStorage.setItem(storageKey, JSON.stringify(normalizedIds));
    }

    window.ListeningProgress = {
        normalizeExamKey,
        getLastPractice,
        setLastPractice,
        getMistakeIds,
        setMistakeIds
    };
})();
