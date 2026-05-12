(function attachVocabularyPracticeCore(global) {
    'use strict';

    function asArray(value) {
        return Array.isArray(value) ? value : [];
    }

    function asText(value) {
        return String(value == null ? '' : value).trim();
    }

    function unique(values) {
        const seen = new Set();
        const result = [];
        asArray(values).forEach((value) => {
            const text = asText(value);
            if (!text || seen.has(text)) return;
            seen.add(text);
            result.push(text);
        });
        return result;
    }

    function toHiragana(text) {
        return String(text == null ? '' : text)
            .replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
    }

    function normalizeOptionValue(value) {
        return typeof value === 'string' ? value.trim() : '';
    }

    function normalizeLookupValue(value) {
        const normalized = normalizeOptionValue(value);
        return normalized ? toHiragana(normalized) : '';
    }

    function normalizeSentenceForMatch(value) {
        return String(value || '')
            .replace(/<rt[^>]*>[\s\S]*?<\/rt>/g, '')
            .replace(/<rp[^>]*>[\s\S]*?<\/rp>/g, '')
            .replace(/<span class=['"][^'"]*\bblank-space\b[^'"]*['"]>\s*<\/span>/g, '[[BLANK]]')
            .replace(/<span class=['"]ex-highlight['"]>[\s\S]*?<\/span>/g, '[[BLANK]]')
            .replace(/____|_{2,}|＿{2,}|________/g, '[[BLANK]]')
            .replace(/<[^>]+>/g, '')
            .replace(/[「」『』"'\s。！？、，,.!！?？]/g, '')
            .replace(/\[\[BLANK\]\]/g, 'BLANK')
            .trim();
    }

    function defaultEscapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function create(config = {}) {
        const analysisHelper = global.VocabularySentenceAnalysis || null;
        const sentenceReviewStore = global.VocabularySentenceReviewStore || null;
        const reviewStore = global.VocabularyReviewStore || null;
        const readingHelper = global.VocabularyReadingHelper || null;
        const moduleKey = asText(config.moduleKey || config.sentenceReviewModuleKey);
        const starKeyPrefix = asText(config.starKeyPrefix || 'kiki_n2_vocab_star::');
        const typeLabels = config.practiceTypeLabels || config.typeLabels || {};
        const limits = {
            day: Number(config.limits && config.limits.day) || 10,
            stage: Number(config.limits && config.limits.stage) || 20,
            final: Number(config.limits && config.limits.final) || 20
        };
        const supportText = {
            sentence: '结合语境，选择最合适的词汇。',
            reading: '请准确拼写出该词的读音。',
            meaning: '它的核心释义是什么？请仔细辨析。',
            ...(config.supportText || {})
        };
        let sentenceAnswerLookupCache = null;

        function getFullWordList() {
            if (typeof config.getFullWordList === 'function') return asArray(config.getFullWordList());
            return asArray(config.fullWordList);
        }

        function getAllDefinedWords() {
            if (typeof config.getAllDefinedWords === 'function') return asArray(config.getAllDefinedWords());
            const explicit = asArray(config.allDefinedWords);
            if (explicit.length) return explicit;
            return getFullWordList().filter((word) => word && word.word !== '（準備中）');
        }

        function getDays() {
            if (typeof config.getDays === 'function') return asArray(config.getDays());
            return asArray(config.days);
        }

        function getStages() {
            if (typeof config.getStages === 'function') return asArray(config.getStages());
            return asArray(config.stages);
        }

        function getGroups() {
            if (typeof config.getGroups === 'function') return asArray(config.getGroups());
            return asArray(config.groups);
        }

        function getPracticeType() {
            return asText(typeof config.getPracticeType === 'function' ? config.getPracticeType() : config.practiceType) || 'sentence';
        }

        function getSelectedDifficulty() {
            return typeof config.getSelectedDifficulty === 'function' ? config.getSelectedDifficulty() : config.selectedDifficulty;
        }

        function shuffleArray(array) {
            if (typeof config.shuffleArray === 'function') return config.shuffleArray(array);
            const next = [...asArray(array)];
            for (let i = next.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [next[i], next[j]] = [next[j], next[i]];
            }
            return next;
        }

        function getVocabStarKey(wordId) {
            return `${starKeyPrefix}${asText(wordId)}`;
        }

        function getWordStorageId(word) {
            return asText(word && (word.id || word.word));
        }

        function getWordDisplayText(word) {
            if (typeof config.getWordDisplayText === 'function') {
                return asText(config.getWordDisplayText(word));
            }
            if (analysisHelper && typeof analysisHelper.getWordLabel === 'function') {
                return asText(analysisHelper.getWordLabel(word));
            }
            return asText(word && word.word);
        }

        function cloneLiteWord(word) {
            if (!word) return null;
            return {
                id: word.id || '',
                word: word.word || '',
                word_html: word.word_html || word.word || '',
                reading: word.reading || '',
                tone: word.tone || '',
                pos: word.pos || '',
                mean: word.mean || '',
                nuance: word.nuance || '',
                usage: word.usage || '',
                collocation: word.collocation || '',
                examples: asArray(word.examples).slice(0, 2).map((example) => ({
                    jp: example && example.jp ? example.jp : '',
                    cn: example && example.cn ? example.cn : ''
                }))
            };
        }

        function restoreReviewKeyword(word) {
            if (!reviewStore || !word || typeof reviewStore.restoreKeyword !== 'function') return;
            const storageId = getWordStorageId(word);
            const surface = asText(word && word.word);
            if (storageId) reviewStore.restoreKeyword(moduleKey, storageId);
            if (surface && surface !== storageId) reviewStore.restoreKeyword(moduleKey, surface);
        }

        function collectWordsByIndexes(indexes) {
            const fullWords = getFullWordList();
            const collected = [];
            const seen = new Set();
            asArray(indexes).forEach((index) => {
                const word = fullWords[index];
                if (!word || word.word === '（準備中）') return;
                const key = asText(word.word || index);
                if (seen.has(key)) return;
                seen.add(key);
                collected.push(word);
            });
            return collected;
        }

        function getCurriculumDay(dayId) {
            return getDays().find((day) => Number(day.id) === Number(dayId)) || null;
        }

        function getCurriculumStage(stageId) {
            return getStages().find((stage) => Number(stage.id) === Number(stageId)) || null;
        }

        function getCurriculumGroup(groupId) {
            return getGroups().find((group) => Number(group.id) === Number(groupId)) || null;
        }

        function getDayWords(dayId) {
            const day = getCurriculumDay(dayId);
            if (day) return collectWordsByIndexes(day.wordIds);
            const wordsPerDay = Number(config.wordsPerDay) || 20;
            const start = (Number(dayId) - 1) * wordsPerDay;
            return getFullWordList().slice(start, start + wordsPerDay).filter((word) => word && word.word !== '（準備中）');
        }

        function getStageWords(stageId) {
            const stage = getCurriculumStage(stageId);
            if (!stage) return [];
            const indexes = asArray(stage.dayIds).flatMap((dayId) => {
                const day = getCurriculumDay(dayId);
                return day ? asArray(day.wordIds) : [];
            });
            return collectWordsByIndexes(indexes);
        }

        function getFinalWords() {
            const indexes = getDays().flatMap((day) => asArray(day.wordIds));
            return collectWordsByIndexes(indexes);
        }

        function getStarredWords() {
            try {
                return getFullWordList().filter((word) => {
                    return word && word.word !== '（準備中）' && global.localStorage.getItem(getVocabStarKey(word.word)) === 'true';
                });
            } catch (error) {
                return [];
            }
        }

        function getPracticeTypeLabel(type = getPracticeType()) {
            return typeLabels[type] || '句子填空';
        }

        function getQuestionLimitForContext(context, eligiblePool) {
            if (!context) return 0;
            if (context.mode === 'review') return asArray(eligiblePool).length;
            if (context.mode === 'final') return limits.final;
            if (context.mode === 'stage' || context.mode === 'challenge') return limits.stage;
            return limits.day;
        }

        function extractPrimaryMeaning(word) {
            if (analysisHelper && typeof analysisHelper.getPrimaryMeaning === 'function') {
                return asText(analysisHelper.getPrimaryMeaning(word));
            }
            return asText(word && word.mean).split(/[；;]/).map((part) => part.trim()).find(Boolean) || '';
        }

        function extractPrimaryUsage(word) {
            if (analysisHelper && typeof analysisHelper.getPrimaryUsage === 'function') {
                return asText(analysisHelper.getPrimaryUsage(word));
            }
            const nuance = asText(word && word.nuance).split('\n').map((line) => line.trim().replace(/^\d+\.\s*/, '')).find(Boolean);
            return nuance || extractPrimaryMeaning(word);
        }

        function extractCommonCollocation(word) {
            if (analysisHelper && typeof analysisHelper.getCollocation === 'function') {
                return asText(analysisHelper.getCollocation(word));
            }
            return '';
        }

        function getKanaDisplayText(wordHtml, fallbackText = '') {
            if (typeof config.getKanaDisplayText === 'function') {
                return asText(config.getKanaDisplayText(wordHtml, fallbackText));
            }
            if (readingHelper && typeof readingHelper.getKanaDisplayText === 'function') {
                return asText(readingHelper.getKanaDisplayText(wordHtml, fallbackText));
            }
            return '';
        }

        function getReadingPromptForWord(word) {
            if (typeof config.getReadingPromptForWord === 'function') return config.getReadingPromptForWord(word);
            if (readingHelper && typeof readingHelper.buildPrompt === 'function') {
                return readingHelper.buildPrompt(word && word.word_html, word && word.word);
            }
            return null;
        }

        function getSentencePracticeItems(word) {
            if (asArray(word && word.practiceItems).length > 0) {
                return word.practiceItems.map((item, sourceIndex) => {
                    const sentence = asText(item && (item.sentence || item.question));
                    const answer = normalizeOptionValue(item && item.answer);
                    const options = asArray(item && item.options).map(normalizeOptionValue).filter(Boolean);
                    if (!sentence || !answer) return null;
                    return {
                        sourceKind: 'practiceItem',
                        sourceIndex,
                        sentence,
                        cn: asText(item && item.cn),
                        answer,
                        options,
                        analysis: asText(item && item.analysis),
                        optionWordIds: asArray(item && item.optionWordIds).map((wordId) => wordId == null ? null : asText(wordId)),
                        optionDetails: asArray(item && item.optionDetails).map((detail) => detail && typeof detail === 'object' ? { ...detail } : null)
                    };
                }).filter(Boolean);
            }

            const practice = word && word.practice;
            const sentence = asText(practice && (practice.sentence || practice.question));
            if (!sentence) return [];
            const answer = normalizeOptionValue(practice && practice.answer);
            if (!answer) return [];
            return [{
                sourceKind: 'practice',
                sourceIndex: 0,
                sentence,
                cn: asText(practice && practice.cn),
                answer,
                options: asArray(practice && practice.options).map(normalizeOptionValue).filter(Boolean),
                analysis: asText(practice && practice.analysis),
                optionWordIds: asArray(practice && practice.optionWordIds).map((wordId) => wordId == null ? null : asText(wordId)),
                optionDetails: asArray(practice && practice.optionDetails).map((detail) => detail && typeof detail === 'object' ? { ...detail } : null)
            }];
        }

        function isSentencePracticeDisabled(word) {
            return Boolean(word && word.sentencePracticeDisabled);
        }

        function getSentenceCorrectAnswer(word, practiceItem = null) {
            const practiceAnswer = normalizeOptionValue(practiceItem && practiceItem.answer)
                || normalizeOptionValue(word && word.practice && word.practice.answer);
            if (practiceAnswer) return practiceAnswer;
            const kana = normalizeOptionValue(getKanaDisplayText(word && word.word_html, word && word.word));
            return kana || normalizeOptionValue(word && word.word);
        }

        function getSentenceSourceMeta(word, practiceItem = null) {
            const item = practiceItem || getSentencePracticeItems(word)[0];
            if (item) {
                return {
                    sourceKind: item.sourceKind || 'practice',
                    sourceIndex: Number.isFinite(Number(item.sourceIndex)) ? Number(item.sourceIndex) : 0,
                    sentence: item.sentence || '',
                    cn: item.cn || '',
                    analysis: item.analysis || '',
                    options: asArray(item.options),
                    optionWordIds: asArray(item.optionWordIds),
                    optionDetails: asArray(item.optionDetails)
                };
            }
            if (isSentencePracticeDisabled(word)) {
                return {
                    sourceKind: 'disabled',
                    sourceIndex: 0,
                    sentence: '',
                    cn: '',
                    analysis: '',
                    options: [],
                    optionWordIds: [],
                    optionDetails: []
                };
            }
            const example = asArray(word && word.examples)[0] || { jp: '例文がありません。', cn: '' };
            return {
                sourceKind: 'example',
                sourceIndex: 0,
                sentence: example.jp || '例文がありません。',
                cn: example.cn || '',
                analysis: '',
                options: [],
                optionWordIds: [],
                optionDetails: []
            };
        }

        function normalizeSentencePresetOptions(rawOptions, correctAnswer) {
            const normalized = [];
            const seen = new Set();
            asArray(rawOptions).forEach((option) => {
                const value = normalizeOptionValue(option);
                if (!value || seen.has(value)) return;
                seen.add(value);
                normalized.push(value);
            });
            if (!correctAnswer || !seen.has(correctAnswer) || normalized.length < 4) return null;
            return normalized.slice(0, 4);
        }

        function getAllSentenceAnswersForWord(word) {
            const items = getSentencePracticeItems(word);
            if (items.length > 0) return items.map((item) => normalizeOptionValue(item && item.answer)).filter(Boolean);
            return [];
        }

        function buildSentenceFallbackOptions(correctWord, correctAnswer) {
            const options = [];
            const seen = new Set();
            const normalizedCorrect = normalizeOptionValue(correctAnswer);
            if (normalizedCorrect) {
                seen.add(normalizedCorrect);
                options.push(normalizedCorrect);
            }
            const answerPool = shuffleArray(
                getAllDefinedWords()
                    .filter((candidate) => candidate && candidate.word !== (correctWord && correctWord.word))
                    .flatMap((candidate) => getAllSentenceAnswersForWord(candidate))
                    .filter((value) => value && !seen.has(value))
            );
            answerPool.forEach((value) => {
                if (options.length >= 4 || seen.has(value)) return;
                seen.add(value);
                options.push(value);
            });
            const fallbackWordPool = shuffleArray(
                getAllDefinedWords()
                    .filter((candidate) => candidate && candidate.word !== (correctWord && correctWord.word))
                    .map((candidate) => getKanaDisplayText(candidate && candidate.word_html, candidate && candidate.word) || normalizeOptionValue(candidate && candidate.word))
                    .filter((value) => value && !seen.has(value))
            );
            fallbackWordPool.forEach((value) => {
                if (options.length >= 4 || seen.has(value)) return;
                seen.add(value);
                options.push(value);
            });
            const fallbackSelf = normalizeOptionValue(getKanaDisplayText(correctWord && correctWord.word_html, correctWord && correctWord.word));
            if (options.length < 4 && fallbackSelf && !seen.has(fallbackSelf)) {
                seen.add(fallbackSelf);
                options.push(fallbackSelf);
            }
            const surfaceSelf = normalizeOptionValue(correctWord && correctWord.word);
            if (options.length < 4 && surfaceSelf && !seen.has(surfaceSelf)) {
                seen.add(surfaceSelf);
                options.push(surfaceSelf);
            }
            return options.slice(0, 4);
        }

        function getSentenceLookupValuesForWord(word) {
            const values = [
                getWordStorageId(word),
                word && word.word,
                getWordDisplayText(word),
                getKanaDisplayText(word && word.word_html, word && word.word)
            ];
            getSentencePracticeItems(word).forEach((item) => values.push(item && item.answer));
            if (analysisHelper && typeof analysisHelper.getLookupValuesForWord === 'function') {
                values.push(...analysisHelper.getLookupValuesForWord(word, {
                    getKanaDisplayText: (candidate) => getKanaDisplayText(candidate && candidate.word_html, candidate && candidate.word),
                    getPracticeItems: getSentencePracticeItems
                }));
            }
            return unique(values);
        }

        function buildSentenceAnswerLookup() {
            if (sentenceAnswerLookupCache) return sentenceAnswerLookupCache;
            const lookup = new Map();
            getAllDefinedWords().forEach((candidate) => {
                getSentenceLookupValuesForWord(candidate).forEach((value) => {
                    const key = normalizeLookupValue(value);
                    if (!key) return;
                    if (!lookup.has(key)) lookup.set(key, []);
                    const list = lookup.get(key);
                    const candidateId = getWordStorageId(candidate);
                    if (!list.some((item) => getWordStorageId(item) === candidateId)) list.push(candidate);
                });
            });
            sentenceAnswerLookupCache = lookup;
            return lookup;
        }

        function findWordByStorageId(wordId) {
            const normalized = asText(wordId);
            if (!normalized) return null;
            return getAllDefinedWords().find((candidate) => {
                return getWordStorageId(candidate) === normalized || asText(candidate && candidate.word) === normalized;
            }) || null;
        }

        function extractWordIdFromSentenceQuestionId(questionId) {
            const parts = asText(questionId).split('::');
            if (parts.length < 4) return '';
            const sourceKind = parts[parts.length - 2];
            if (!['practice', 'practiceItem', 'example'].includes(sourceKind)) return '';
            return parts.slice(1, -2).join('::').trim();
        }

        function findWordBySentenceSnapshot(snapshot) {
            const directIds = [
                snapshot && snapshot.wordId,
                snapshot && snapshot.wordLabel,
                snapshot && snapshot.word && snapshot.word.wordId,
                snapshot && snapshot.word && snapshot.word.id,
                snapshot && snapshot.word && snapshot.word.word,
                extractWordIdFromSentenceQuestionId(snapshot && snapshot.questionId)
            ];
            for (const id of directIds) {
                const word = findWordByStorageId(id);
                if (word) return word;
            }
            const snapshotQuestion = normalizeSentenceForMatch(
                (snapshot && (snapshot.questionHtml || snapshot.sentence || snapshot.question || snapshot.typingText)) || ''
            );
            if (snapshotQuestion) {
                const byQuestion = getAllDefinedWords().find((candidate) => {
                    return getSentencePracticeItems(candidate).some((item) => {
                        const current = normalizeSentenceForMatch(item && item.sentence);
                        return current === snapshotQuestion
                            || (current && snapshotQuestion.includes(current))
                            || (snapshotQuestion && current.includes(snapshotQuestion));
                    });
                });
                if (byQuestion) return byQuestion;
            }
            const correctAnswer = normalizeLookupValue(snapshot && (snapshot.correctAnswer || snapshot.answer));
            if (correctAnswer) {
                const matches = getAllDefinedWords().filter((candidate) => {
                    return getSentencePracticeItems(candidate).some((item) => normalizeLookupValue(item && item.answer) === correctAnswer);
                });
                if (matches.length === 1) return matches[0];
            }
            return snapshot && snapshot.word ? snapshot.word : { word: snapshot && snapshot.wordLabel || '' };
        }

        function findCurrentPracticeSourceForSnapshot(snapshot, baseWord) {
            const practiceItems = getSentencePracticeItems(baseWord);
            if (!practiceItems.length) return null;
            const sourceKind = asText(snapshot && snapshot.sourceKind) || 'practice';
            const parsedIndex = parseInt(snapshot && snapshot.sourceIndex, 10);
            const sourceIndex = Number.isFinite(parsedIndex) ? parsedIndex : 0;
            const bySource = practiceItems.find((item) => {
                return asText(item && item.sourceKind || 'practice') === sourceKind
                    && Number(item && item.sourceIndex || 0) === sourceIndex;
            });
            if (bySource) return bySource;
            const questionId = asText(snapshot && snapshot.questionId);
            const byQuestionId = practiceItems.find((item) => {
                const marker = '::' + asText(item && item.sourceKind || 'practice') + '::' + Number(item && item.sourceIndex || 0);
                return questionId.endsWith(marker);
            });
            if (byQuestionId) return byQuestionId;
            const snapshotQuestion = normalizeSentenceForMatch(
                (snapshot && (snapshot.questionHtml || snapshot.sentence || snapshot.question || snapshot.typingText)) || ''
            );
            if (snapshotQuestion) {
                const bySentence = practiceItems.find((item) => {
                    const current = normalizeSentenceForMatch(item && item.sentence);
                    return current === snapshotQuestion
                        || (current && snapshotQuestion.includes(current))
                        || (snapshotQuestion && current.includes(snapshotQuestion));
                });
                if (bySentence) return bySentence;
            }
            const correctAnswer = normalizeOptionValue(snapshot && (snapshot.correctAnswer || snapshot.answer));
            if (correctAnswer) {
                const byAnswer = practiceItems.find((item) => normalizeOptionValue(item && item.answer) === correctAnswer);
                if (byAnswer) return byAnswer;
            }
            return practiceItems.length === 1 ? practiceItems[0] : null;
        }

        function getCurrentSentenceTranslationForSnapshot(snapshot, baseWord) {
            const practiceItem = findCurrentPracticeSourceForSnapshot(snapshot, baseWord);
            if (practiceItem && practiceItem.cn) return getSentenceSourceMeta(baseWord, practiceItem).cn || '';
            const sourceKind = asText(snapshot && snapshot.sourceKind) || 'practice';
            const parsedIndex = parseInt(snapshot && snapshot.sourceIndex, 10);
            const sourceIndex = Number.isFinite(parsedIndex) ? parsedIndex : 0;
            if (sourceKind === 'example') {
                const examples = asArray(baseWord && baseWord.examples);
                return asText(examples[sourceIndex] && examples[sourceIndex].cn);
            }
            const savedAnalysis = snapshot && snapshot.reviewAnalysis ? snapshot.reviewAnalysis : null;
            return asText(savedAnalysis && savedAnalysis.sentenceTranslation) || getSentenceSourceMeta(baseWord).cn || '';
        }

        function pickUniqueSentenceCandidate(candidates, optionValue) {
            const uniqueCandidates = [];
            asArray(candidates).forEach((candidate) => {
                const candidateId = getWordStorageId(candidate);
                if (!candidateId || uniqueCandidates.some((item) => getWordStorageId(item) === candidateId)) return;
                uniqueCandidates.push(candidate);
            });
            if (uniqueCandidates.length <= 1) return uniqueCandidates[0] || null;
            const optionKey = normalizeLookupValue(optionValue);
            const exactMatches = uniqueCandidates.filter((candidate) => {
                return getSentenceLookupValuesForWord(candidate).some((value) => normalizeLookupValue(value) === optionKey);
            });
            return exactMatches.length === 1 ? exactMatches[0] : null;
        }

        function resolveSentenceOptionWord(word, optionValue, correctAnswer, optionWordIds, optionIndex) {
            const explicitWordId = asArray(optionWordIds)[optionIndex];
            if (explicitWordId) {
                const explicitWord = findWordByStorageId(explicitWordId);
                if (explicitWord) return explicitWord;
            }
            if (normalizeLookupValue(optionValue) === normalizeLookupValue(correctAnswer)) return word;
            const candidates = buildSentenceAnswerLookup().get(normalizeLookupValue(optionValue)) || [];
            return pickUniqueSentenceCandidate(candidates, optionValue);
        }

        function alignSentenceMetaToOptions(sourceOptions, sourceValues, targetOptions) {
            if (!Array.isArray(sourceOptions) || !Array.isArray(sourceValues) || !Array.isArray(targetOptions)) return [];
            const usedIndexes = new Set();
            return targetOptions.map((optionValue) => {
                const optionKey = normalizeLookupValue(optionValue);
                const sourceIndex = sourceOptions.findIndex((sourceValue, index) => {
                    return !usedIndexes.has(index) && normalizeLookupValue(sourceValue) === optionKey;
                });
                if (sourceIndex < 0) return null;
                usedIndexes.add(sourceIndex);
                return sourceValues[sourceIndex] == null ? null : sourceValues[sourceIndex];
            });
        }

        function formatSourceCollocation(value) {
            if (!value) return '';
            if (typeof value === 'object') {
                const jp = asText(value.jp || value.phrase);
                const cn = asText(value.cn);
                if (jp && cn) return `${jp}（${cn}）`;
                return jp || cn;
            }
            return asText(value);
        }

        function mergeSourceOptionDetail(baseDetail, sourceDetail, optionValue, isCorrect, resolvedWord) {
            const source = sourceDetail && typeof sourceDetail === 'object' ? sourceDetail : null;
            if (!source) return baseDetail;
            const meaning = asText(source.meaning);
            const usage = asText(source.usage);
            const collocation = formatSourceCollocation(source.collocation);
            const baseForm = asText(source.baseForm);
            if (!meaning && !usage && !collocation && !baseForm) return baseDetail;
            return {
                value: optionValue,
                wordId: baseDetail && baseDetail.wordId ? baseDetail.wordId : getWordStorageId(resolvedWord),
                wordLabel: baseForm || (baseDetail && baseDetail.wordLabel) || optionValue,
                baseForm: baseForm || (baseDetail && baseDetail.baseForm) || (resolvedWord ? getWordDisplayText(resolvedWord) : '没有'),
                meaning: meaning || (baseDetail && baseDetail.meaning) || '没有',
                usage: usage || (baseDetail && baseDetail.usage) || meaning || '',
                collocation: collocation || (baseDetail && baseDetail.collocation) || '',
                isResolved: Boolean(resolvedWord || baseForm || meaning || (baseDetail && baseDetail.isResolved)),
                isCorrect
            };
        }

        function buildSentenceOptionDetails(word, options, correctAnswer, optionWordIds, sourceOptionDetails = []) {
            return asArray(options).map((optionValue, optionIndex) => {
                const resolvedWord = resolveSentenceOptionWord(word, optionValue, correctAnswer, optionWordIds, optionIndex);
                const isCorrect = normalizeLookupValue(optionValue) === normalizeLookupValue(correctAnswer);
                const sourceDetail = asArray(sourceOptionDetails)[optionIndex] || null;
                let detail;
                if (analysisHelper && typeof analysisHelper.buildOptionDetail === 'function') {
                    detail = analysisHelper.buildOptionDetail({
                        optionValue,
                        resolvedWord,
                        isCorrect,
                        getWordId: getWordStorageId
                    });
                } else {
                    const meaning = resolvedWord ? extractPrimaryMeaning(resolvedWord) : '';
                    const usage = resolvedWord ? extractPrimaryUsage(resolvedWord) : meaning;
                    const collocation = resolvedWord ? extractCommonCollocation(resolvedWord) : '';
                    detail = {
                        value: optionValue,
                        wordId: getWordStorageId(resolvedWord),
                        wordLabel: resolvedWord ? getWordDisplayText(resolvedWord) : optionValue,
                        baseForm: resolvedWord ? getWordDisplayText(resolvedWord) : '没有',
                        meaning: meaning || '没有',
                        usage,
                        collocation,
                        isResolved: Boolean(resolvedWord),
                        isCorrect
                    };
                }
                return mergeSourceOptionDetail(detail, sourceDetail, optionValue, isCorrect, resolvedWord);
            });
        }

        function createSentenceQuestionId(word, sourceKind, sourceIndex) {
            return `${moduleKey}::${getWordStorageId(word)}::${sourceKind}::${sourceIndex}`;
        }

        function buildSentenceReviewAnalysis(word, sentenceTranslation, explicitAnalysis, optionDetails) {
            if (analysisHelper && typeof analysisHelper.buildReviewAnalysis === 'function') {
                return analysisHelper.buildReviewAnalysis({
                    word,
                    sentenceTranslation,
                    questionAnalysis: explicitAnalysis,
                    optionDetails,
                    getWordId: getWordStorageId
                });
            }
            return {
                sentenceTranslation: sentenceTranslation || '',
                questionAnalysis: explicitAnalysis || '',
                options: asArray(optionDetails)
            };
        }

        function formatQuestionHtml(bodyHtml, type) {
            const support = supportText[type] || '';
            if (typeof config.formatQuestionHtml === 'function') {
                return config.formatQuestionHtml(bodyHtml, support, type);
            }
            const esc = typeof config.escapeHtml === 'function' ? config.escapeHtml : defaultEscapeHtml;
            return `「${bodyHtml}」<br><br><span class="question-sub-text">${esc(support)}</span>`;
        }

        function formatTypingText(text) {
            if (typeof config.formatTypingText === 'function') return config.formatTypingText(text);
            return `「${asText(text)}」`;
        }

        function buildSentenceQuestionSpec(word, practiceItem = null) {
            if (!practiceItem && isSentencePracticeDisabled(word) && getSentencePracticeItems(word).length === 0) return null;
            const sourceMeta = getSentenceSourceMeta(word, practiceItem);
            if (sourceMeta.sourceKind === 'disabled') return null;
            let richSentence = sourceMeta.sentence || '例文がありません。';
            const questionCn = sourceMeta.cn || '';
            const highlightRegex = /<span class=['"]ex-highlight['"]>(.*?)<\/span>/g;
            const renderedBlankRegex = /<span class=['"][^'"]*\bblank-space\b[^'"]*['"]>\s*<\/span>/g;
            const existingBlankRegex = /(_{2,}|＿{2,}|\(\s*\)|（\s*）)/g;
            if (richSentence.match(renderedBlankRegex)) {
                richSentence = richSentence.replace(renderedBlankRegex, '[[BLANK]]');
            } else if (richSentence.match(highlightRegex)) {
                richSentence = richSentence.replace(highlightRegex, '[[BLANK]]');
            } else if (richSentence.match(existingBlankRegex)) {
                richSentence = richSentence.replace(existingBlankRegex, '[[BLANK]]');
            } else {
                const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const surface = asText(word && word.word);
                const stem = surface.length > 1 ? surface.slice(0, -1) : surface;
                const surfaceRegex = surface ? new RegExp(escapeRegExp(surface)) : null;
                const stemRegex = new RegExp(`${escapeRegExp(stem)}[ぁ-ん]*`);
                richSentence = surfaceRegex && surfaceRegex.test(richSentence)
                    ? richSentence.replace(surfaceRegex, '[[BLANK]]')
                    : stemRegex.test(richSentence)
                    ? richSentence.replace(stemRegex, '[[BLANK]]')
                    : `${richSentence} [[BLANK]]`;
            }
            const plainSentence = richSentence.replace(/<[^>]+>/g, '').replace(/\[\[BLANK\]\]/g, '________');
            richSentence = richSentence.replace(/\[\[BLANK\]\]/g, '<span class="blank-space"></span>');
            const correctAnswer = getSentenceCorrectAnswer(word, practiceItem);
            const presetOptions = normalizeSentencePresetOptions(sourceMeta.options, correctAnswer);
            const optionPool = presetOptions || buildSentenceFallbackOptions(word, correctAnswer);
            if (!correctAnswer || optionPool.length < 2) return null;
            const options = shuffleArray(optionPool.slice());
            const alignedOptionWordIds = alignSentenceMetaToOptions(optionPool, sourceMeta.optionWordIds, options);
            const alignedSourceOptionDetails = alignSentenceMetaToOptions(optionPool, sourceMeta.optionDetails, options);
            const optionDetails = buildSentenceOptionDetails(word, options, correctAnswer, alignedOptionWordIds, alignedSourceOptionDetails);
            const reviewAnalysis = buildSentenceReviewAnalysis(word, questionCn, sourceMeta.analysis, optionDetails);
            return {
                kind: 'sentence',
                answerMode: 'choice',
                questionId: createSentenceQuestionId(word, sourceMeta.sourceKind, sourceMeta.sourceIndex),
                sourceKind: sourceMeta.sourceKind,
                sourceIndex: sourceMeta.sourceIndex,
                word,
                questionHtml: formatQuestionHtml(richSentence, 'sentence'),
                cn: questionCn,
                sentenceCn: questionCn,
                correctAnswer,
                options,
                optionDetails,
                optionWordIds: alignedOptionWordIds,
                reviewAnalysis,
                analysis: sourceMeta.analysis || '',
                hintText: '',
                typingText: formatTypingText(plainSentence)
            };
        }

        function buildReadingQuestionSpec(word) {
            const prompt = getReadingPromptForWord(word);
            if (!prompt || !prompt.surfaceText || !prompt.fullKana || prompt.editableCount <= 0) return null;
            const esc = typeof config.escapeHtml === 'function' ? config.escapeHtml : defaultEscapeHtml;
            return {
                kind: 'reading',
                answerMode: 'input',
                word,
                questionHtml: formatQuestionHtml(esc(prompt.surfaceText), 'reading'),
                cn: '',
                correctAnswer: prompt.fullKana,
                options: [],
                readingSegments: prompt.segments,
                editableCount: prompt.editableCount,
                inputLength: prompt.editableCount,
                hintText: prompt.firstHint,
                firstHint: prompt.firstHint,
                typingText: formatTypingText(prompt.surfaceText)
            };
        }

        function buildMeaningDistractors(correctWord, sourcePool) {
            const correctMeaning = extractPrimaryMeaning(correctWord);
            const pool = [];
            const seen = new Set([correctMeaning]);
            const candidates = shuffleArray([...asArray(sourcePool), ...getAllDefinedWords()]);
            candidates.forEach((word) => {
                if (!word || word.word === (correctWord && correctWord.word)) return;
                const meaning = extractPrimaryMeaning(word);
                if (!meaning || seen.has(meaning)) return;
                seen.add(meaning);
                pool.push(meaning);
            });
            return pool.slice(0, 3);
        }

        function buildMeaningQuestionSpec(word, sourcePool) {
            const kanaText = getKanaDisplayText(word && word.word_html, word && word.word);
            const primaryMeaning = extractPrimaryMeaning(word);
            if (!kanaText || !primaryMeaning) return null;
            const distractors = buildMeaningDistractors(word, sourcePool);
            if (distractors.length < 3) return null;
            const esc = typeof config.escapeHtml === 'function' ? config.escapeHtml : defaultEscapeHtml;
            return {
                kind: 'meaning',
                answerMode: 'choice',
                word,
                questionHtml: formatQuestionHtml(esc(kanaText), 'meaning'),
                cn: '',
                correctAnswer: primaryMeaning,
                options: shuffleArray([primaryMeaning, ...distractors]),
                hintText: '',
                typingText: formatTypingText(kanaText)
            };
        }

        function getEligibleWordsForPracticeType(words, type = getPracticeType()) {
            const pool = asArray(words);
            if (type === 'reading') {
                return pool.filter((word) => {
                    const prompt = getReadingPromptForWord(word);
                    return Boolean(prompt && prompt.surfaceText && prompt.fullKana && prompt.editableCount > 0);
                });
            }
            if (type === 'meaning') {
                return pool.filter((word) => {
                    return Boolean(getKanaDisplayText(word && word.word_html, word && word.word) && extractPrimaryMeaning(word));
                });
            }
            return pool.filter((word) => !isSentencePracticeDisabled(word) && getSentenceCorrectAnswer(word));
        }

        function createSentenceQuestionSnapshot(question) {
            if (!question || question.kind !== 'sentence') return null;
            return {
                questionId: question.questionId,
                moduleKey,
                wordId: getWordStorageId(question.word),
                wordLabel: question.word && question.word.word ? question.word.word : '',
                sourceKind: question.sourceKind || 'practice',
                sourceIndex: Number.isFinite(Number(question.sourceIndex)) ? Number(question.sourceIndex) : 0,
                kind: 'sentence',
                answerMode: 'choice',
                questionHtml: question.questionHtml,
                sentenceCn: question.sentenceCn || '',
                cn: question.cn || '',
                correctAnswer: question.correctAnswer,
                options: asArray(question.options).slice(),
                optionWordIds: asArray(question.optionWordIds).slice(),
                optionDetails: asArray(question.optionDetails).map((item) => ({ ...item })),
                reviewAnalysis: question.reviewAnalysis ? {
                    sentenceTranslation: question.reviewAnalysis.sentenceTranslation || '',
                    questionAnalysis: question.reviewAnalysis.questionAnalysis || '',
                    correct: question.reviewAnalysis.correct ? { ...question.reviewAnalysis.correct } : null,
                    distractors: asArray(question.reviewAnalysis.distractors).map((item) => ({ ...item })),
                    correctAnalysis: question.reviewAnalysis.correctAnalysis || '',
                    options: asArray(question.reviewAnalysis.options).map((item) => ({ ...item }))
                } : null,
                typingText: question.typingText || '',
                hintText: question.hintText || '',
                word: cloneLiteWord(question.word)
            };
        }

        function recordSentenceQuestionWrong(question) {
            if (!sentenceReviewStore || !question || question.kind !== 'sentence') return false;
            const snapshot = createSentenceQuestionSnapshot(question);
            if (!snapshot || !snapshot.questionId || !snapshot.wordId) return false;
            sentenceReviewStore.saveQuestion(moduleKey, snapshot);
            sentenceReviewStore.incrementWordMistakeCount(moduleKey, snapshot.wordId, 1);
            return true;
        }

        function removeSentenceReviewQuestion(question) {
            if (!sentenceReviewStore || !question || !question.questionId) return false;
            return sentenceReviewStore.removeQuestion(moduleKey, question.questionId);
        }

        function recordTypedReviewWord(question, type = getPracticeType()) {
            if (!reviewStore || !question || !question.word || !['reading', 'meaning'].includes(type)) return false;
            const word = question.word;
            const wordId = getWordStorageId(word);
            reviewStore.saveTypedWord(moduleKey, type, {
                ...cloneLiteWord(word),
                wordId,
                wordLabel: word.word || getWordDisplayText(word)
            });
            reviewStore.incrementTypedMistakeCount(moduleKey, type, wordId, 1);
            return true;
        }

        function removeTypedReviewWord(question, type = getPracticeType()) {
            if (!reviewStore || !question || !question.word || !['reading', 'meaning'].includes(type)) return false;
            return reviewStore.removeTypedWord(moduleKey, type, getWordStorageId(question.word));
        }

        function getTypedReviewWords(type = getPracticeType()) {
            if (!reviewStore || !['reading', 'meaning'].includes(type)) return [];
            return asArray(reviewStore.listTypedWords(moduleKey, type));
        }

        function handleCorrectAnswer(question, type = getPracticeType()) {
            if (!question) return;
            if (question.kind === 'sentence' || type === 'sentence') {
                removeSentenceReviewQuestion(question);
                return;
            }
            removeTypedReviewWord(question, type);
        }

        function handleWrongAnswer(question, type = getPracticeType()) {
            if (!question || !question.word) return { starred: false };
            const word = question.word;
            restoreReviewKeyword(word);
            const wordId = word.word || getWordDisplayText(word);
            let starred = false;
            try {
                const key = getVocabStarKey(wordId);
                if (global.localStorage.getItem(key) !== 'true') {
                    global.localStorage.setItem(key, 'true');
                    starred = true;
                }
            } catch (error) {
                starred = false;
            }
            if (question.kind === 'sentence' || type === 'sentence') {
                recordSentenceQuestionWrong(question);
            } else {
                recordTypedReviewWord(question, type);
            }
            return { starred, wordId };
        }

        function shouldRebuildSentenceReviewQuestion(snapshot, baseWord, practiceItem) {
            if (!practiceItem) return false;
            const snapshotKind = asText(snapshot && snapshot.sourceKind) || 'practice';
            const snapshotIndex = Number.isFinite(parseInt(snapshot && snapshot.sourceIndex, 10))
                ? parseInt(snapshot && snapshot.sourceIndex, 10)
                : 0;
            const currentKind = asText(practiceItem && practiceItem.sourceKind) || 'practice';
            const currentIndex = Number(practiceItem && practiceItem.sourceIndex || 0);
            if (snapshotKind !== currentKind || snapshotIndex !== currentIndex) return true;
            const snapshotQuestion = normalizeSentenceForMatch(
                (snapshot && (snapshot.questionHtml || snapshot.sentence || snapshot.question || snapshot.typingText)) || ''
            );
            const currentSentence = normalizeSentenceForMatch(practiceItem && practiceItem.sentence);
            if (currentSentence && snapshotQuestion && !snapshotQuestion.includes(currentSentence) && !currentSentence.includes(snapshotQuestion)) return true;
            const sourceTranslation = asText(practiceItem && practiceItem.cn);
            return Boolean(sourceTranslation && asText(snapshot && snapshot.questionHtml).includes(sourceTranslation));
        }

        function getSentenceReviewQuestions() {
            if (!sentenceReviewStore) return [];
            return sentenceReviewStore.listQuestions(moduleKey).map((snapshot) => {
                if (!snapshot || snapshot.kind !== 'sentence' || !snapshot.questionId) return null;
                const baseWord = findWordBySentenceSnapshot(snapshot);
                const practiceItem = findCurrentPracticeSourceForSnapshot(snapshot, baseWord);
                const rebuiltQuestion = shouldRebuildSentenceReviewQuestion(snapshot, baseWord, practiceItem)
                    ? buildSentenceQuestionSpec(baseWord, practiceItem)
                    : null;
                const sourceMeta = getSentenceSourceMeta(baseWord, practiceItem);
                const correctAnswer = rebuiltQuestion ? rebuiltQuestion.correctAnswer : snapshot.correctAnswer;
                const options = asArray(snapshot.options).length
                    ? asArray(snapshot.options).slice()
                    : (rebuiltQuestion && asArray(rebuiltQuestion.options).length ? rebuiltQuestion.options.slice() : []);
                const alignedWordIds = alignSentenceMetaToOptions(sourceMeta.options, sourceMeta.optionWordIds, options);
                const alignedDetails = alignSentenceMetaToOptions(sourceMeta.options, sourceMeta.optionDetails, options);
                const optionWordIds = alignedWordIds.length ? alignedWordIds : asArray(snapshot.optionWordIds);
                const optionDetails = buildSentenceOptionDetails(baseWord, options, correctAnswer, optionWordIds, alignedDetails);
                const savedAnalysis = snapshot.reviewAnalysis || {};
                const savedCorrectAnalysis = asText(savedAnalysis.correctAnalysis);
                const explicitAnalysis = sourceMeta.analysis || (savedCorrectAnalysis && !/^释义：/m.test(savedCorrectAnalysis) ? savedCorrectAnalysis : '');
                const currentSentenceTranslation = getCurrentSentenceTranslationForSnapshot(snapshot, baseWord);
                const reviewAnalysis = buildSentenceReviewAnalysis(baseWord, currentSentenceTranslation, explicitAnalysis, optionDetails);
                return {
                    ...snapshot,
                    ...(rebuiltQuestion ? {
                        sourceKind: rebuiltQuestion.sourceKind,
                        sourceIndex: rebuiltQuestion.sourceIndex,
                        questionHtml: rebuiltQuestion.questionHtml,
                        cn: rebuiltQuestion.cn || '',
                        sentenceCn: rebuiltQuestion.sentenceCn || '',
                        typingText: rebuiltQuestion.typingText || ''
                    } : {}),
                    questionId: snapshot.questionId,
                    kind: 'sentence',
                    answerMode: 'choice',
                    word: baseWord,
                    correctAnswer,
                    options,
                    optionWordIds,
                    optionDetails,
                    reviewAnalysis
                };
            }).filter(Boolean);
        }

        function prepareQuestionSet(context, type = getPracticeType()) {
            if (context && context.mode === 'review' && type === 'sentence') {
                const reviewQuestions = getSentenceReviewQuestions();
                return {
                    targetWords: reviewQuestions.map((question) => question.word).filter(Boolean),
                    questions: reviewQuestions
                };
            }
            if (context && context.mode === 'review' && ['reading', 'meaning'].includes(type)) {
                const typedWords = getTypedReviewWords(type);
                const questions = typedWords.map((word) => {
                    if (type === 'reading') return buildReadingQuestionSpec(word);
                    return buildMeaningQuestionSpec(word, typedWords);
                }).filter(Boolean);
                return { targetWords: typedWords, questions };
            }
            const eligiblePool = getEligibleWordsForPracticeType(context && context.pool, type);
            const limit = getQuestionLimitForContext(context, eligiblePool);
            const targetWords = shuffleArray(eligiblePool).slice(0, Math.min(limit, eligiblePool.length));
            const questions = targetWords.map((word) => {
                if (type === 'reading') return buildReadingQuestionSpec(word);
                if (type === 'meaning') return buildMeaningQuestionSpec(word, eligiblePool);
                return buildSentenceQuestionSpec(word);
            }).filter(Boolean);
            return {
                targetWords,
                questions: questions.length > 0 ? shuffleArray(questions) : []
            };
        }

        function getReviewSummaryReading(word) {
            const reading = asText(word && word.reading);
            if (reading) return reading;
            return getKanaDisplayText(word && word.word_html, word && word.word);
        }

        function getQuestionTypeLabel(question) {
            if (!question) return '错题';
            if (question.kind === 'sentence') return '句子选词';
            if (question.kind === 'meaning') return '假名选义';
            if (question.kind === 'reading' || question.answerMode === 'input') return '读音填空';
            return '错题';
        }

        function buildReviewSummaryItems(questions) {
            const seen = new Set();
            return asArray(questions).map((question) => {
                const word = question && question.word;
                if (!word) return null;
                const wordId = getWordStorageId(word) || getWordDisplayText(word) || asText(word.word || question.correctAnswer);
                if (!wordId || seen.has(wordId)) return null;
                seen.add(wordId);
                const correct = question.kind === 'sentence' && question.reviewAnalysis && question.reviewAnalysis.correct
                    ? question.reviewAnalysis.correct
                    : null;
                const meaning = asText((correct && correct.meaning) || extractPrimaryMeaning(word));
                const usage = asText((correct && correct.usage) || extractPrimaryUsage(word));
                const collocation = asText((correct && correct.collocation) || extractCommonCollocation(word));
                return {
                    term: getWordDisplayText(word) || asText(word.word || question.correctAnswer),
                    reading: getReviewSummaryReading(word),
                    typeLabel: getQuestionTypeLabel(question),
                    meaning,
                    usage,
                    collocation
                };
            }).filter(Boolean);
        }

        function buildReviewSummaryMarkup(questions) {
            const items = buildReviewSummaryItems(questions);
            const esc = typeof config.escapeHtml === 'function' ? config.escapeHtml : defaultEscapeHtml;
            if (!items.length) return '<div class="review-summary-empty">本次没有待回顾的考点词汇。</div>';
            const renderLine = (label, value) => value
                ? '<div class="review-summary-line"><strong>' + esc(label) + '</strong>' + esc(value) + '</div>'
                : '';
            return '<div class="review-summary-list">' + items.map((item) => {
                const metaParts = [item.reading, item.typeLabel].filter(Boolean);
                return '<article class="review-summary-item">'
                    + '<div class="review-summary-term"><span>' + esc(item.term) + '</span>'
                    + (metaParts.length ? '<span class="review-summary-meta">' + esc(metaParts.join(' · ')) + '</span>' : '')
                    + '</div>'
                    + renderLine('用法', item.usage)
                    + renderLine('搭配', item.collocation)
                    + '</article>';
            }).join('') + '</div>';
        }

        return Object.freeze({
            getVocabStarKey,
            getWordStorageId,
            cloneLiteWord,
            restoreReviewKeyword,
            collectWordsByIndexes,
            getCurriculumDay,
            getCurriculumStage,
            getCurriculumGroup,
            getDayWords,
            getStageWords,
            getFinalWords,
            getStarredWords,
            getPracticeTypeLabel,
            getQuestionLimitForContext,
            getReadingPromptForWord,
            extractPrimaryMeaning,
            extractPrimaryUsage,
            extractCommonCollocation,
            getEligibleWordsForPracticeType,
            getSentencePracticeItems,
            getSentenceCorrectAnswer,
            getSentenceSourceMeta,
            normalizeSentenceForTranslationMatch: normalizeSentenceForMatch,
            findCurrentPracticeSourceForSnapshot,
            getCurrentSentenceTranslationForSnapshot,
            normalizeSentencePresetOptions,
            buildSentenceFallbackOptions,
            findWordBySentenceSnapshot,
            buildSentenceOptionDetails,
            buildSentenceReviewAnalysis,
            createSentenceQuestionSnapshot,
            recordSentenceQuestionWrong,
            removeSentenceReviewQuestion,
            recordTypedReviewWord,
            removeTypedReviewWord,
            handleCorrectAnswer,
            handleWrongAnswer,
            getSentenceReviewQuestions,
            buildSentenceQuestionSpec,
            buildReadingQuestionSpec,
            buildMeaningQuestionSpec,
            prepareQuestionSet,
            buildReviewSummaryItems,
            buildReviewSummaryMarkup,
            isReviewPracticeMode(context) {
                return Boolean(context && context.mode === 'review');
            },
            shouldUseManualReview(context) {
                return Boolean(context && context.mode === 'review');
            }
        });
    }

    global.VocabularyPracticeCore = Object.freeze({ create });
})(typeof window !== 'undefined' ? window : globalThis);
