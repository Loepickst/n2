(function (global) {
    'use strict';

    const QUESTION_KEY_PREFIX = 'kiki_n2_vocab_sentence_review_questions::';
    const COUNT_KEY_PREFIX = 'kiki_n2_vocab_sentence_review_counts::';
    const TYPED_WORD_KEY_PREFIX = 'kiki_n2_vocab_review_words::';
    const TYPED_COUNT_KEY_PREFIX = 'kiki_n2_vocab_review_counts::';
    const DISMISSED_KEYWORD_KEY_PREFIX = 'kiki_n2_vocab_review_dismissed_keywords::';
    const SUPPORTED_TYPED_REVIEW_TYPES = new Set(['reading', 'meaning']);

    function resolveStorage() {
        try {
            return global.localStorage || null;
        } catch (error) {
            return null;
        }
    }

    function readJson(key, fallback) {
        const storage = resolveStorage();
        if (!storage) return fallback;
        try {
            const raw = storage.getItem(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' ? parsed : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function writeJson(key, value) {
        const storage = resolveStorage();
        if (!storage) return false;
        try {
            storage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            return false;
        }
    }

    function normalizeModuleKey(moduleKey) {
        return String(moduleKey || '').trim();
    }

    function normalizeWordId(wordId) {
        return String(wordId || '').trim();
    }

    function normalizeTypedReviewType(type) {
        const normalized = String(type || '').trim().toLowerCase();
        return SUPPORTED_TYPED_REVIEW_TYPES.has(normalized) ? normalized : '';
    }

    function getQuestionKey(moduleKey) {
        return `${QUESTION_KEY_PREFIX}${normalizeModuleKey(moduleKey)}`;
    }

    function getCountKey(moduleKey) {
        return `${COUNT_KEY_PREFIX}${normalizeModuleKey(moduleKey)}`;
    }

    function getTypedWordKey(moduleKey, type) {
        return `${TYPED_WORD_KEY_PREFIX}${normalizeModuleKey(moduleKey)}::${normalizeTypedReviewType(type)}`;
    }

    function getTypedCountKey(moduleKey, type) {
        return `${TYPED_COUNT_KEY_PREFIX}${normalizeModuleKey(moduleKey)}::${normalizeTypedReviewType(type)}`;
    }

    function getDismissedKeywordKey(moduleKey) {
        return `${DISMISSED_KEYWORD_KEY_PREFIX}${normalizeModuleKey(moduleKey)}`;
    }

    function getQuestionBucket(moduleKey) {
        return readJson(getQuestionKey(moduleKey), {});
    }

    function setQuestionBucket(moduleKey, bucket) {
        return writeJson(getQuestionKey(moduleKey), bucket && typeof bucket === 'object' ? bucket : {});
    }

    function getCountBucket(moduleKey) {
        return readJson(getCountKey(moduleKey), {});
    }

    function setCountBucket(moduleKey, bucket) {
        return writeJson(getCountKey(moduleKey), bucket && typeof bucket === 'object' ? bucket : {});
    }

    function listQuestions(moduleKey) {
        return Object.values(getQuestionBucket(moduleKey))
            .filter(Boolean)
            .sort((left, right) => {
                const leftStamp = Number(left && left.lastWrongAt) || 0;
                const rightStamp = Number(right && right.lastWrongAt) || 0;
                return rightStamp - leftStamp;
            });
    }

    function saveQuestion(moduleKey, snapshot) {
        const questionId = String(snapshot && snapshot.questionId || '').trim();
        if (!questionId) return false;
        const snapshotWord = snapshot && snapshot.word;
        const snapshotWordId = snapshot && (
            snapshot.wordId ||
            snapshot.id ||
            (snapshotWord && (snapshotWord.wordId || snapshotWord.id || snapshotWord.word))
        );
        restoreKeyword(moduleKey, snapshotWordId);
        restoreKeyword(moduleKey, snapshot && snapshot.wordLabel);
        restoreKeyword(moduleKey, snapshotWord && snapshotWord.word);
        const bucket = getQuestionBucket(moduleKey);
        bucket[questionId] = {
            ...snapshot,
            questionId,
            lastWrongAt: Date.now()
        };
        return setQuestionBucket(moduleKey, bucket);
    }

    function removeQuestion(moduleKey, questionId) {
        const normalizedQuestionId = String(questionId || '').trim();
        if (!normalizedQuestionId) return false;
        const bucket = getQuestionBucket(moduleKey);
        if (!Object.prototype.hasOwnProperty.call(bucket, normalizedQuestionId)) {
            return false;
        }
        delete bucket[normalizedQuestionId];
        return setQuestionBucket(moduleKey, bucket);
    }

    function clearQuestions(moduleKey) {
        return setQuestionBucket(moduleKey, {});
    }

    function getQuestionCount(moduleKey) {
        return listQuestions(moduleKey).length;
    }

    function incrementWordMistakeCount(moduleKey, wordId, amount) {
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedWordId) return 0;
        const bucket = getCountBucket(moduleKey);
        const safeAmount = Number.isFinite(amount) ? amount : 1;
        const nextCount = Math.max(0, (Number(bucket[normalizedWordId]) || 0) + safeAmount);
        bucket[normalizedWordId] = nextCount;
        setCountBucket(moduleKey, bucket);
        return nextCount;
    }

    function getWordMistakeCount(moduleKey, wordId) {
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedWordId) return 0;
        const bucket = getCountBucket(moduleKey);
        return Math.max(0, Number(bucket[normalizedWordId]) || 0);
    }

    function getWordMistakeCounts(moduleKey) {
        return getCountBucket(moduleKey);
    }

    function listTrackedWordIds(moduleKey) {
        const counts = getCountBucket(moduleKey);
        return Object.keys(counts).filter((wordId) => (Number(counts[wordId]) || 0) > 0);
    }

    function getTypedWordBucket(moduleKey, type) {
        const normalizedType = normalizeTypedReviewType(type);
        return normalizedType ? readJson(getTypedWordKey(moduleKey, normalizedType), {}) : {};
    }

    function setTypedWordBucket(moduleKey, type, bucket) {
        const normalizedType = normalizeTypedReviewType(type);
        if (!normalizedType) return false;
        return writeJson(getTypedWordKey(moduleKey, normalizedType), bucket && typeof bucket === 'object' ? bucket : {});
    }

    function getTypedCountBucket(moduleKey, type) {
        const normalizedType = normalizeTypedReviewType(type);
        return normalizedType ? readJson(getTypedCountKey(moduleKey, normalizedType), {}) : {};
    }

    function setTypedCountBucket(moduleKey, type, bucket) {
        const normalizedType = normalizeTypedReviewType(type);
        if (!normalizedType) return false;
        return writeJson(getTypedCountKey(moduleKey, normalizedType), bucket && typeof bucket === 'object' ? bucket : {});
    }

    function getDismissedKeywordBucket(moduleKey) {
        return readJson(getDismissedKeywordKey(moduleKey), {});
    }

    function setDismissedKeywordBucket(moduleKey, bucket) {
        return writeJson(getDismissedKeywordKey(moduleKey), bucket && typeof bucket === 'object' ? bucket : {});
    }

    function dismissKeyword(moduleKey, wordId) {
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedWordId) return false;
        const bucket = getDismissedKeywordBucket(moduleKey);
        bucket[normalizedWordId] = Date.now();
        return setDismissedKeywordBucket(moduleKey, bucket);
    }

    function restoreKeyword(moduleKey, wordId) {
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedWordId) return false;
        const bucket = getDismissedKeywordBucket(moduleKey);
        if (!Object.prototype.hasOwnProperty.call(bucket, normalizedWordId)) return false;
        delete bucket[normalizedWordId];
        return setDismissedKeywordBucket(moduleKey, bucket);
    }

    function isKeywordDismissed(moduleKey, wordId) {
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedWordId) return false;
        const bucket = getDismissedKeywordBucket(moduleKey);
        return Object.prototype.hasOwnProperty.call(bucket, normalizedWordId);
    }

    function saveTypedWord(moduleKey, type, wordSnapshot) {
        const normalizedType = normalizeTypedReviewType(type);
        const wordId = normalizeWordId(wordSnapshot && (wordSnapshot.wordId || wordSnapshot.id || wordSnapshot.word));
        if (!normalizedType || !wordId) return false;
        restoreKeyword(moduleKey, wordId);
        restoreKeyword(moduleKey, wordSnapshot && wordSnapshot.wordLabel);
        restoreKeyword(moduleKey, wordSnapshot && wordSnapshot.word);
        const bucket = getTypedWordBucket(moduleKey, normalizedType);
        bucket[wordId] = {
            ...wordSnapshot,
            wordId,
            kind: normalizedType,
            lastWrongAt: Date.now()
        };
        return setTypedWordBucket(moduleKey, normalizedType, bucket);
    }

    function removeTypedWord(moduleKey, type, wordId) {
        const normalizedType = normalizeTypedReviewType(type);
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedType || !normalizedWordId) return false;
        const bucket = getTypedWordBucket(moduleKey, normalizedType);
        if (!Object.prototype.hasOwnProperty.call(bucket, normalizedWordId)) {
            return false;
        }
        delete bucket[normalizedWordId];
        return setTypedWordBucket(moduleKey, normalizedType, bucket);
    }

    function listTypedWords(moduleKey, type) {
        return Object.values(getTypedWordBucket(moduleKey, type))
            .filter(Boolean)
            .sort((left, right) => {
                const leftStamp = Number(left && left.lastWrongAt) || 0;
                const rightStamp = Number(right && right.lastWrongAt) || 0;
                return rightStamp - leftStamp;
            });
    }

    function getTypedCount(moduleKey, type) {
        return listTypedWords(moduleKey, type).length;
    }

    function incrementTypedMistakeCount(moduleKey, type, wordId, amount) {
        const normalizedType = normalizeTypedReviewType(type);
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedType || !normalizedWordId) return 0;
        const bucket = getTypedCountBucket(moduleKey, normalizedType);
        const safeAmount = Number.isFinite(amount) ? amount : 1;
        const nextCount = Math.max(0, (Number(bucket[normalizedWordId]) || 0) + safeAmount);
        bucket[normalizedWordId] = nextCount;
        setTypedCountBucket(moduleKey, normalizedType, bucket);
        return nextCount;
    }

    function getTypedMistakeCount(moduleKey, type, wordId) {
        const normalizedType = normalizeTypedReviewType(type);
        const normalizedWordId = normalizeWordId(wordId);
        if (!normalizedType || !normalizedWordId) return 0;
        const bucket = getTypedCountBucket(moduleKey, normalizedType);
        return Math.max(0, Number(bucket[normalizedWordId]) || 0);
    }

    global.VocabularySentenceReviewStore = Object.freeze({
        listQuestions,
        saveQuestion,
        removeQuestion,
        clearQuestions,
        getQuestionCount,
        incrementWordMistakeCount,
        getWordMistakeCount,
        getWordMistakeCounts,
        listTrackedWordIds
    });

    global.VocabularyReviewStore = Object.freeze({
        saveTypedWord,
        removeTypedWord,
        listTypedWords,
        getTypedCount,
        incrementTypedMistakeCount,
        getTypedMistakeCount,
        dismissKeyword,
        restoreKeyword,
        isKeywordDismissed
    });
})(window);
