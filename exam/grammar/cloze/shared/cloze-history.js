(function () {
    const STORAGE_KEY = 'kiki_n2_cloze_history_v1';
    const MAX_RECORDS = 120;

    function safeParse(raw, fallback) {
        try {
            const parsed = JSON.parse(raw);
            return parsed == null ? fallback : parsed;
        } catch (error) {
            return fallback;
        }
    }

    function getFileNameFromHref(href) {
        return String(href || '')
            .split('?')[0]
            .split('#')[0]
            .split('/')
            .pop() || '';
    }

    function getEntryIdFromHref(href) {
        return getFileNameFromHref(href).replace(/\.html$/i, '');
    }

    function getCurrentEntryId() {
        return getEntryIdFromHref(window.location.pathname);
    }

    function getCurrentEntryHref() {
        const fileName = getFileNameFromHref(window.location.pathname);
        return fileName ? `./n2/${fileName}` : '';
    }

    function getYearFromEntryId(entryId) {
        const match = String(entryId || '').match(/^(\d{4})\.(\d{1,2})$/);
        if (!match) return '';
        return `${match[1]}年${Number(match[2])}月`;
    }

    function loadRecords() {
        const parsed = safeParse(localStorage.getItem(STORAGE_KEY), []);
        return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    }

    function saveRecords(records) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, MAX_RECORDS)));
    }

    function normalizeMode() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('mode') === 'review') return 'review';
        return params.get('readingMode') === 'test' ? 'test' : 'study';
    }

    function normalizeRecord(record) {
        const total = Math.max(0, Number(record.total) || 0);
        const correct = Math.max(0, Math.min(total, Number(record.correct) || 0));
        const completedAt = Number(record.completedAt) || Date.now();
        const entryId = String(record.entryId || getEntryIdFromHref(record.href) || '').trim();
        const wrongQuestions = Array.isArray(record.wrongQuestions) ? record.wrongQuestions : [];

        return {
            id: record.id || `${completedAt}-${Math.random().toString(36).slice(2, 8)}`,
            level: record.level || 'N2',
            entryId,
            href: record.href || (entryId ? `./n2/${entryId}.html` : ''),
            title: record.title || '文章の文法',
            year: record.year || '',
            mode: record.mode || 'study',
            correct,
            total,
            accuracy: total ? correct / total : 0,
            wrongCount: wrongQuestions.length,
            wrongQuestions,
            completedAt
        };
    }

    function recordAttempt(record) {
        const normalized = normalizeRecord(record);
        if (!normalized.entryId || normalized.total <= 0) return null;
        const next = [normalized, ...loadRecords()];
        saveRecords(next);
        return normalized;
    }

    function recordCurrentAttempt({ clozeData, answers, correct, total, year, href, level } = {}) {
        if (!clozeData || !Array.isArray(clozeData.questions)) return null;
        const resolvedAnswers = answers || {};
        const wrongQuestions = clozeData.questions
            .filter((question) => resolvedAnswers[question.id] !== question.correctIndex)
            .map((question) => ({
                id: question.id,
                blankNum: question.blankNum,
                userIndex: resolvedAnswers[question.id],
                correctIndex: question.correctIndex
            }));

        return recordAttempt({
            level: level || 'N2',
            entryId: getCurrentEntryId() || clozeData.id,
            href: href || getCurrentEntryHref(),
            title: clozeData.title || document.title || '文章の文法',
            year: year || getYearFromEntryId(getCurrentEntryId()),
            mode: normalizeMode(),
            correct,
            total,
            wrongQuestions
        });
    }

    function getRecords(filter = {}) {
        const level = filter.level ? String(filter.level) : '';
        const entryId = filter.entryId || (filter.entry ? getEntryIdFromHref(filter.entry.href) : '');
        return loadRecords()
            .filter((record) => !level || record.level === level)
            .filter((record) => !entryId || record.entryId === entryId)
            .sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0));
    }

    function getLatestByEntry(entry) {
        const records = getRecords({ entry });
        return records[0] || null;
    }

    function getBestByEntry(entry) {
        const records = getRecords({ entry }).sort((a, b) => {
            if ((b.accuracy || 0) !== (a.accuracy || 0)) return (b.accuracy || 0) - (a.accuracy || 0);
            return (b.correct || 0) - (a.correct || 0);
        });
        return records[0] || null;
    }

    function getStatsByEntry(entry) {
        const records = getRecords({ entry });
        return {
            attempts: records.length,
            latest: records[0] || null,
            best: getBestByEntry(entry)
        };
    }

    function formatDate(timestamp) {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        if (Number.isNaN(date.getTime())) return '';
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        const hour = `${date.getHours()}`.padStart(2, '0');
        const minute = `${date.getMinutes()}`.padStart(2, '0');
        return `${month}/${day} ${hour}:${minute}`;
    }

    function modeLabel(mode) {
        if (mode === 'test') return '测试';
        if (mode === 'review') return '复习';
        return '学习';
    }

    window.ClozeHistory = {
        STORAGE_KEY,
        getEntryIdFromHref,
        loadRecords,
        getRecords,
        getLatestByEntry,
        getBestByEntry,
        getStatsByEntry,
        recordAttempt,
        recordCurrentAttempt,
        formatDate,
        modeLabel
    };
})();
