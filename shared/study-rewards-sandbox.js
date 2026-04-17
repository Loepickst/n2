(function(global) {
    'use strict';

    const REWARD_STATE_KEY = 'kiki_study_rewards_sandbox_v1';
    const PET_STATE_KEY = 'kiki_pet_state_sandbox_v1';
    const COLLECTION_KEY = 'omikujiCollection_sandbox';
    const COLLECTION_META_KEY = 'omikujiCollectionMeta_sandbox_v1';
    const LAST_OBTAINED_KEY = 'omikujiLastObtained_sandbox_v1';

    function getRoot() {
        const root = global.KikiStudyRewardsSandbox = global.KikiStudyRewardsSandbox || {};
        root.adapters = root.adapters || {};
        return root;
    }

    function safeParseJSON(rawValue, fallbackValue) {
        if (typeof rawValue !== 'string' || !rawValue.trim()) {
            return fallbackValue;
        }

        try {
            return JSON.parse(rawValue);
        } catch (error) {
            return fallbackValue;
        }
    }

    function clampNumber(value, minValue, maxValue) {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) {
            return minValue;
        }

        return Math.min(maxValue, Math.max(minValue, numericValue));
    }

    function normalizeString(value) {
        return String(value || '').trim();
    }

    function createDefaultRewardState() {
        return {
            version: 1,
            economy: {
                studyXp: 0,
                petXp: 0,
                shards: 0,
                tickets: 0,
                totalRunsRewarded: 0
            },
            pity: {
                practiceWithoutCardHit: 0
            },
            missions: {
                daily: {},
                weekly: {},
                streak: {}
            },
            collection: {
                unlockedIds: [],
                duplicateCounts: {}
            },
            practiceLedger: {
                rewardedRunKeys: []
            },
            meta: {
                lastRewardAt: '',
                lastModule: '',
                lastRunKey: '',
                lastCardId: ''
            }
        };
    }

    function getRewardState() {
        const parsed = safeParseJSON(global.localStorage.getItem(REWARD_STATE_KEY), null);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
            return createDefaultRewardState();
        }

        const defaults = createDefaultRewardState();
        return {
            ...defaults,
            ...parsed,
            economy: {
                ...defaults.economy,
                ...(parsed.economy || {})
            },
            pity: {
                ...defaults.pity,
                ...(parsed.pity || {})
            },
            missions: {
                ...defaults.missions,
                ...(parsed.missions || {})
            },
            collection: {
                ...defaults.collection,
                ...(parsed.collection || {})
            },
            practiceLedger: {
                ...defaults.practiceLedger,
                ...(parsed.practiceLedger || {})
            },
            meta: {
                ...defaults.meta,
                ...(parsed.meta || {})
            }
        };
    }

    function saveRewardState(state) {
        global.localStorage.setItem(REWARD_STATE_KEY, JSON.stringify(state));
        return state;
    }

    function resetRewardState() {
        global.localStorage.removeItem(REWARD_STATE_KEY);
        return createDefaultRewardState();
    }

    function hasRewardedRun(runKey) {
        if (!normalizeString(runKey)) {
            return false;
        }

        const state = getRewardState();
        return Array.isArray(state.practiceLedger.rewardedRunKeys)
            && state.practiceLedger.rewardedRunKeys.includes(runKey);
    }

    function normalizeRunKeySegment(value, fieldName) {
        const normalizedValue = normalizeString(value);
        if (!normalizedValue) {
            throw new Error(`sandbox runKey is missing ${fieldName}`);
        }

        return normalizedValue.replace(/\s+/g, '-').replace(/[\\/]+/g, '-');
    }

    function createRunKey(descriptor) {
        const source = descriptor && typeof descriptor === 'object' ? descriptor : {};
        const attemptStartedAt = normalizeString(source.attemptStartedAt || source.startedAt || new Date().toISOString());
        const segments = [
            normalizeRunKeySegment(source.module, 'module'),
            normalizeRunKeySegment(source.subType, 'subType'),
            normalizeRunKeySegment(source.mode, 'mode'),
            normalizeRunKeySegment(source.scopeKey, 'scopeKey'),
            attemptStartedAt
        ];

        return segments.join(':');
    }

    function normalizePracticeResult(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const answeredCount = clampNumber(source.answeredCount, 0, Number.MAX_SAFE_INTEGER);
        const correctCount = clampNumber(source.correctCount, 0, answeredCount || Number.MAX_SAFE_INTEGER);
        const computedAccuracy = answeredCount > 0 ? correctCount / answeredCount : 0;
        const normalizedResult = {
            runKey: normalizeString(source.runKey),
            module: normalizeString(source.module),
            subType: normalizeString(source.subType),
            mode: normalizeString(source.mode),
            level: normalizeString(source.level),
            sourcePage: normalizeString(source.sourcePage),
            questionCount: clampNumber(source.questionCount, 0, Number.MAX_SAFE_INTEGER),
            answeredCount,
            correctCount,
            accuracy: clampNumber(
                Number.isFinite(Number(source.accuracy)) ? Number(source.accuracy) : computedAccuracy,
                0,
                1
            ),
            bestStreak: clampNumber(source.bestStreak, 0, Number.MAX_SAFE_INTEGER),
            usedHints: clampNumber(source.usedHints, 0, Number.MAX_SAFE_INTEGER),
            challengeCleared: Boolean(source.challengeCleared),
            cleared: Boolean(source.cleared),
            finishedAt: normalizeString(source.finishedAt || new Date().toISOString()),
            extra: source.extra && typeof source.extra === 'object' && !Array.isArray(source.extra)
                ? source.extra
                : {}
        };

        if (!normalizedResult.runKey) {
            throw new Error('sandbox practice result is missing runKey');
        }

        return normalizedResult;
    }

    function getCompletedQuestionCount(result) {
        return result.answeredCount > 0 ? result.answeredCount : result.questionCount;
    }

    function isEffectivePracticeRun(result) {
        if (!result.cleared) {
            return false;
        }

        const completedQuestionCount = getCompletedQuestionCount(result);
        if (result.module === 'vocabulary') {
            return completedQuestionCount >= 8;
        }

        if (result.module === 'grammar') {
            return completedQuestionCount >= 5;
        }

        return completedQuestionCount > 0;
    }

    function calculateBaseRewards(result) {
        const completedQuestionCount = getCompletedQuestionCount(result);
        const studyXp = 5
            + Math.floor(completedQuestionCount / 5)
            + (result.accuracy >= 0.9 ? 4 : result.accuracy >= 0.75 ? 2 : 0);
        const petXp = 2 + (result.challengeCleared ? 2 : 0);
        const shards = 1 + ((result.challengeCleared || result.accuracy >= 1) ? 1 : 0);

        return { studyXp, petXp, shards };
    }

    function getScopeLabel(result) {
        const extra = result.extra || {};
        const day = Number(extra.day);
        const stage = Number(extra.stage);

        if (result.mode === 'day' && Number.isFinite(day) && day > 0) {
            return `Day ${String(day).padStart(2, '0')}`;
        }

        if (result.mode === 'stage' && Number.isFinite(stage) && stage > 0) {
            return `Stage ${String(stage).padStart(2, '0')}`;
        }

        if (result.mode === 'final') {
            return 'Final';
        }

        return normalizeString(extra.scopeKey || result.mode || 'Practice');
    }

    function getSubTypeLabel(result) {
        if (result.subType === 'n1_verbs') {
            return 'N1 动词';
        }

        return normalizeString(result.subType || result.module || 'Study');
    }

    function createCardIdSegment(value) {
        return normalizeString(value)
            .toLowerCase()
            .replace(/[^a-z0-9_-]+/g, '-')
            .replace(/-{2,}/g, '-')
            .replace(/^-|-$/g, '');
    }

    function buildSandboxCardDescriptor(result, rarity) {
        const scopeLabel = getScopeLabel(result);
        const scopeSegment = createCardIdSegment(result.extra && result.extra.scopeKey ? result.extra.scopeKey : scopeLabel);
        const raritySegment = createCardIdSegment(rarity);
        const difficulty = normalizeString(result.extra && result.extra.selectedDifficulty);
        const typeLabel = getSubTypeLabel(result);
        const difficultySuffix = difficulty ? ` · ${difficulty.toUpperCase()}` : '';

        return {
            cardId: [
                'sandbox',
                createCardIdSegment(result.module),
                createCardIdSegment(result.subType),
                createCardIdSegment(result.mode),
                scopeSegment,
                raritySegment
            ].filter(Boolean).join('_'),
            rarity,
            title: `${typeLabel} ${scopeLabel} 奖励卡${difficultySuffix}`,
            source: 'study_rewards_sandbox'
        };
    }

    function evaluateSandboxCardPlan(result, rewardState) {
        const nextRunIndex = Number(rewardState.economy.totalRunsRewarded || 0) + 1;
        const pityBefore = clampNumber(rewardState.pity.practiceWithoutCardHit, 0, Number.MAX_SAFE_INTEGER);
        const difficulty = normalizeString(result.extra && result.extra.selectedDifficulty).toLowerCase();
        let granted = false;
        let rarity = '';
        let trigger = 'no_hit';

        if (nextRunIndex === 1) {
            granted = true;
            rarity = 'R';
            trigger = 'first_run';
        } else if (result.challengeCleared && difficulty === 'hell') {
            granted = true;
            rarity = 'SSR';
            trigger = 'hell_clear';
        } else if (result.challengeCleared) {
            granted = true;
            rarity = 'SR';
            trigger = 'challenge_clear';
        } else if (result.mode === 'final' && result.accuracy >= 0.85) {
            granted = true;
            rarity = 'SR';
            trigger = 'final_bonus';
        } else if (result.accuracy >= 1) {
            granted = true;
            rarity = 'SR';
            trigger = 'perfect_clear';
        } else if (pityBefore >= 2) {
            granted = true;
            rarity = 'R';
            trigger = 'pity_grant';
        } else if (result.accuracy >= 0.9 && nextRunIndex % 2 === 0) {
            granted = true;
            rarity = 'R';
            trigger = 'high_score_bonus';
        }

        return {
            granted,
            rarity,
            trigger,
            pityBefore,
            pityAfter: granted ? 0 : pityBefore + 1,
            note: granted ? '' : `本轮未触发卡片掉落，当前未命中累计 ${pityBefore + 1} 次。`,
            cardDescriptor: granted ? buildSandboxCardDescriptor(result, rarity) : null
        };
    }

    function buildSummaryHighlight(rewards, cardReward) {
        const baseText = `+${rewards.studyXp} 学习经验 · +${rewards.shards} 星砂`;
        if (!cardReward || !cardReward.granted) {
            return `本轮未掉卡 · ${baseText}`;
        }

        return `获得 ${cardReward.rarity} 卡片 · ${baseText}`;
    }

    function getSandboxStorageKeys() {
        return [
            REWARD_STATE_KEY,
            PET_STATE_KEY,
            COLLECTION_KEY,
            COLLECTION_META_KEY,
            LAST_OBTAINED_KEY
        ];
    }

    function captureSandboxStorageSnapshot() {
        return getSandboxStorageKeys().reduce((accumulator, storageKey) => {
            accumulator[storageKey] = global.localStorage.getItem(storageKey);
            return accumulator;
        }, {});
    }

    function restoreSandboxStorageSnapshot(snapshot) {
        getSandboxStorageKeys().forEach((storageKey) => {
            if (!snapshot || !(storageKey in snapshot) || snapshot[storageKey] === null) {
                global.localStorage.removeItem(storageKey);
                return;
            }

            global.localStorage.setItem(storageKey, snapshot[storageKey]);
        });
    }

    function getRequiredAdapter(name) {
        const root = getRoot();
        const adapter = root.adapters && root.adapters[name];
        if (!adapter) {
            throw new Error(`sandbox adapter "${name}" is unavailable`);
        }
        return adapter;
    }

    function evaluatePracticeRewards(payload) {
        const result = normalizePracticeResult(payload);

        if (hasRewardedRun(result.runKey)) {
            return {
                accepted: false,
                wasDuplicateRun: true,
                reason: 'duplicate_run'
            };
        }

        if (!isEffectivePracticeRun(result)) {
            return {
                accepted: false,
                wasDuplicateRun: false,
                reason: 'not_effective'
            };
        }

        const storageSnapshot = captureSandboxStorageSnapshot();

        try {
            const rewardState = getRewardState();
            const rewards = calculateBaseRewards(result);
            const lotteryAdapter = getRequiredAdapter('lottery');
            const cardPlan = evaluateSandboxCardPlan(result, rewardState);

            rewardState.economy.studyXp += rewards.studyXp;
            rewardState.economy.petXp += rewards.petXp;
            rewardState.economy.shards += rewards.shards;
            rewardState.economy.totalRunsRewarded += 1;
            rewardState.practiceLedger.rewardedRunKeys = Array.isArray(rewardState.practiceLedger.rewardedRunKeys)
                ? rewardState.practiceLedger.rewardedRunKeys.concat(result.runKey)
                : [result.runKey];
            rewardState.meta.lastRewardAt = result.finishedAt;
            rewardState.meta.lastModule = result.module;
            rewardState.meta.lastRunKey = result.runKey;

            const petResult = getRequiredAdapter('pet').awardPetXp(rewards.petXp, {
                petId: 'shiba',
                source: 'study_rewards_sandbox',
                runKey: result.runKey
            });
            let cardReward = {
                granted: false,
                isDuplicate: false,
                rarity: '',
                cardId: '',
                title: '',
                count: 0,
                trigger: cardPlan.trigger,
                pityBefore: cardPlan.pityBefore,
                pityAfter: cardPlan.pityAfter,
                note: cardPlan.note
            };

            if (cardPlan.granted && cardPlan.cardDescriptor) {
                const recordedCard = lotteryAdapter.recordObtainedCard(cardPlan.cardDescriptor);
                rewardState.pity.practiceWithoutCardHit = 0;
                rewardState.meta.lastCardId = recordedCard.cardId;
                cardReward = {
                    granted: true,
                    isDuplicate: recordedCard.isDuplicate,
                    rarity: recordedCard.rarity,
                    cardId: recordedCard.cardId,
                    title: cardPlan.cardDescriptor.title,
                    count: recordedCard.count,
                    trigger: cardPlan.trigger,
                    pityBefore: cardPlan.pityBefore,
                    pityAfter: 0,
                    note: recordedCard.isDuplicate
                        ? `重复卡已累计到 ${recordedCard.count} 次。`
                        : '新卡已写入 sandbox 图鉴。'
                };
            } else {
                rewardState.pity.practiceWithoutCardHit = cardPlan.pityAfter;
            }

            const lotterySnapshot = lotteryAdapter.getCollectionSnapshot();

            rewardState.collection.unlockedIds = lotterySnapshot.unlockedIds.slice();
            rewardState.collection.duplicateCounts = Object.keys(lotterySnapshot.meta).reduce((accumulator, cardId) => {
                const entry = lotterySnapshot.meta[cardId];
                if (entry && Number(entry.count) > 1) {
                    accumulator[cardId] = Number(entry.count) - 1;
                }
                return accumulator;
            }, {});

            saveRewardState(rewardState);

            return {
                accepted: true,
                wasDuplicateRun: false,
                practice: result,
                rewards: {
                    ...rewards,
                    card: cardReward
                },
                pet: petResult,
                lottery: lotterySnapshot,
                summary: {
                    title: 'Sandbox 奖励已结算',
                    highlight: buildSummaryHighlight(rewards, cardReward)
                }
            };
        } catch (error) {
            restoreSandboxStorageSnapshot(storageSnapshot);
            throw error;
        }
    }

    const root = getRoot();
    root.storageKeys = Object.freeze({
        rewardState: REWARD_STATE_KEY,
        petState: PET_STATE_KEY,
        collectionIds: COLLECTION_KEY,
        collectionMeta: COLLECTION_META_KEY,
        lastObtained: LAST_OBTAINED_KEY
    });
    root.createRunKey = createRunKey;
    root.recordPracticeResult = evaluatePracticeRewards;
    root.getRewardState = getRewardState;
    root.resetRewardState = resetRewardState;
})(typeof window !== 'undefined' ? window : globalThis);
