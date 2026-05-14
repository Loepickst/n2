(function(global) {
    'use strict';

    const currentScript = typeof document !== 'undefined' ? document.currentScript : null;
    const runtimeBaseUrl = currentScript && currentScript.src
        ? new URL('./', currentScript.src)
        : (typeof location !== 'undefined' ? new URL('./', location.href) : null);
    const siteRootUrl = runtimeBaseUrl ? new URL('../', runtimeBaseUrl) : null;

    const STORAGE_KEY = 'kiki_practice_rewards_v1';
    const COLLECTION_KEY = 'omikujiCollection';
    const COLLECTION_META_KEY = 'omikujiCollectionMeta_v1';
    const LAST_OBTAINED_KEY = 'omikujiLastObtained_v1';
    const DRAW_DAILY_MODULES = Object.freeze(['vocabulary', 'grammar', 'reading', 'listening']);
    const DRAW_PITY_THRESHOLD = 20;
    const DRAW_PITY_MIN_ACCURACY = 0.6;
    const SEASON_CARD_IDS = Object.freeze([
        'practice_chunji_vocabulary',
        'practice_xiaji_grammar',
        'practice_qiuji_reading',
        'practice_dongji_listening'
    ]);
    const N2_PASS_CARD_ID = 'practice_n2_pass_complete';
    const PRACTICE_ACHIEVEMENT_CARD_ID = 'practice_shengji_max';
    const PRACTICE_ACHIEVEMENT_THRESHOLD = 30;
    const REVEAL_IMAGE = 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/chouqian.png';
    const STYLE_ID = 'kiki-practice-reward-runtime-style';
    let sessionRunCounter = 0;

    const PRACTICE_CARD_WEIGHTS_BY_SOURCE = Object.freeze({
        vocabulary: Object.freeze({
            practice_chunji_vocabulary: 7,
            practice_xiaji_grammar: 1,
            practice_qiuji_reading: 1,
            practice_dongji_listening: 1
        }),
        grammar: Object.freeze({
            practice_xiaji_grammar: 7,
            practice_chunji_vocabulary: 1,
            practice_qiuji_reading: 1,
            practice_dongji_listening: 1
        }),
        reading: Object.freeze({
            practice_qiuji_reading: 7,
            practice_chunji_vocabulary: 1,
            practice_xiaji_grammar: 1,
            practice_dongji_listening: 1
        }),
        listening: Object.freeze({
            practice_dongji_listening: 7,
            practice_chunji_vocabulary: 1,
            practice_xiaji_grammar: 1,
            practice_qiuji_reading: 1
        }),
        listening_random_exam: Object.freeze({
            practice_dongji_listening: 7,
            practice_chunji_vocabulary: 1,
            practice_xiaji_grammar: 1,
            practice_qiuji_reading: 1
        })
    });

    function normalizeString(value) {
        return String(value == null ? '' : value).trim();
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

    function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function getLocalDateKey(input) {
        const source = input instanceof Date ? input : new Date(input || Date.now());
        const year = source.getFullYear();
        const month = String(source.getMonth() + 1).padStart(2, '0');
        const day = String(source.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function resolveAssetUrl(value) {
        const rawValue = normalizeString(value);
        if (!rawValue) {
            return '';
        }
        if (/^(?:https?:|data:|blob:|file:)/i.test(rawValue)) {
            return rawValue;
        }
        if (!siteRootUrl) {
            return rawValue;
        }
        return new URL(rawValue, siteRootUrl).href;
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function clampNumber(value, minValue, maxValue) {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) {
            return minValue;
        }
        return Math.min(maxValue, Math.max(minValue, numericValue));
    }

    function getCatalogApi() {
        return global.OmikujiCatalog || null;
    }

    function getCardDefinition(cardId) {
        const normalizedId = normalizeString(cardId);
        const api = getCatalogApi();
        if (!normalizedId || !api || typeof api.getFortuneById !== 'function') {
            return null;
        }
        const definition = api.getFortuneById(normalizedId);
        if (!definition) {
            return null;
        }
        return {
            ...definition,
            icon: resolveAssetUrl(definition.icon)
        };
    }

    function getNormalFortunes() {
        const api = getCatalogApi();
        const fortunes = api && Array.isArray(api.fortunes) ? api.fortunes : [];
        return fortunes
            .filter((card) => card && !card.isRewardOnly)
            .map((card) => ({ ...card, icon: resolveAssetUrl(card.icon) }));
    }

    function getDefaultState() {
        return {
            version: 1,
            practiceLedger: {
                rewardedRunKeys: [],
                practiceDrawDaily: {},
                practiceDrawPity: {}
            },
            rewardFlow: {
                pendingDraws: {}
            },
            progress: {
                lastSummary: null,
                recentRewards: [],
                effectivePracticeCount: 0,
                achievementRewards: {}
            }
        };
    }

    function normalizeDailyRecord(record) {
        const source = record && typeof record === 'object' && !Array.isArray(record) ? record : {};
        return {
            dateKey: normalizeString(source.dateKey),
            runKey: normalizeString(source.runKey),
            claimedAt: normalizeString(source.claimedAt)
        };
    }

    function normalizePityRecord(record) {
        const source = record && typeof record === 'object' && !Array.isArray(record) ? record : {};
        return {
            count: Math.max(0, Number.parseInt(source.count, 10) || 0),
            lastRunKey: normalizeString(source.lastRunKey),
            updatedAt: normalizeString(source.updatedAt)
        };
    }

    function normalizePendingDraw(record) {
        const source = record && typeof record === 'object' && !Array.isArray(record) ? record : {};
        return {
            runKey: normalizeString(source.runKey),
            module: normalizePracticeDrawModuleKey(source.module),
            subType: normalizeString(source.subType),
            rewardTrack: normalizeString(source.rewardTrack),
            scopeKey: normalizeString(source.scopeKey),
            cardId: normalizeString(source.cardId),
            rarity: normalizeString(source.rarity),
            preparedAt: normalizeString(source.preparedAt),
            claimedAt: normalizeString(source.claimedAt),
            sourcePage: normalizeString(source.sourcePage)
        };
    }

    function normalizeState(value) {
        const source = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
        const state = getDefaultState();
        state.version = 1;

        const ledger = source.practiceLedger && typeof source.practiceLedger === 'object' && !Array.isArray(source.practiceLedger)
            ? source.practiceLedger
            : {};
        state.practiceLedger.rewardedRunKeys = Array.isArray(ledger.rewardedRunKeys)
            ? Array.from(new Set(ledger.rewardedRunKeys.map(normalizeString).filter(Boolean))).slice(-500)
            : [];
        const daily = ledger.practiceDrawDaily && typeof ledger.practiceDrawDaily === 'object' && !Array.isArray(ledger.practiceDrawDaily)
            ? ledger.practiceDrawDaily
            : {};
        state.practiceLedger.practiceDrawDaily = Object.keys(daily).reduce((acc, moduleKey) => {
            const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
            if (!normalizedModule) return acc;
            acc[normalizedModule] = normalizeDailyRecord(daily[moduleKey]);
            return acc;
        }, {});
        const pity = ledger.practiceDrawPity && typeof ledger.practiceDrawPity === 'object' && !Array.isArray(ledger.practiceDrawPity)
            ? ledger.practiceDrawPity
            : {};
        state.practiceLedger.practiceDrawPity = Object.keys(pity).reduce((acc, moduleKey) => {
            const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
            if (!normalizedModule) return acc;
            acc[normalizedModule] = normalizePityRecord(pity[moduleKey]);
            return acc;
        }, {});

        const rewardFlow = source.rewardFlow && typeof source.rewardFlow === 'object' && !Array.isArray(source.rewardFlow)
            ? source.rewardFlow
            : {};
        const pendingDraws = rewardFlow.pendingDraws && typeof rewardFlow.pendingDraws === 'object' && !Array.isArray(rewardFlow.pendingDraws)
            ? rewardFlow.pendingDraws
            : {};
        state.rewardFlow.pendingDraws = Object.keys(pendingDraws).reduce((acc, runKey) => {
            const normalized = normalizePendingDraw(pendingDraws[runKey]);
            if (normalized.runKey && normalized.cardId) {
                acc[normalized.runKey] = normalized;
            }
            return acc;
        }, {});

        const progress = source.progress && typeof source.progress === 'object' && !Array.isArray(source.progress)
            ? source.progress
            : {};
        state.progress.lastSummary = progress.lastSummary && typeof progress.lastSummary === 'object' && !Array.isArray(progress.lastSummary)
            ? deepClone(progress.lastSummary)
            : null;
        state.progress.recentRewards = Array.isArray(progress.recentRewards)
            ? progress.recentRewards.filter((entry) => entry && typeof entry === 'object').slice(0, 12)
            : [];
        state.progress.effectivePracticeCount = Math.max(0, Number.parseInt(progress.effectivePracticeCount, 10) || 0);
        state.progress.achievementRewards = progress.achievementRewards && typeof progress.achievementRewards === 'object' && !Array.isArray(progress.achievementRewards)
            ? Object.keys(progress.achievementRewards).reduce((acc, cardId) => {
                const entry = progress.achievementRewards[cardId];
                if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return acc;
                acc[normalizeString(cardId)] = {
                    cardId: normalizeString(entry.cardId || cardId),
                    threshold: Math.max(0, Number.parseInt(entry.threshold, 10) || 0),
                    count: Math.max(0, Number.parseInt(entry.count, 10) || 0),
                    claimedAt: normalizeString(entry.claimedAt),
                    pendingRunKey: normalizeString(entry.pendingRunKey)
                };
                return acc;
            }, {})
            : {};
        return state;
    }

    function readState() {
        try {
            return normalizeState(safeParseJSON(global.localStorage.getItem(STORAGE_KEY), getDefaultState()));
        } catch (error) {
            return getDefaultState();
        }
    }

    function saveState(state) {
        try {
            global.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
        } catch (error) {}
    }

    function normalizePracticeDrawModuleKey(value) {
        const normalizedValue = normalizeString(value);
        if (!normalizedValue || !DRAW_DAILY_MODULES.includes(normalizedValue)) {
            return '';
        }
        return normalizedValue;
    }

    function inferPracticeModule(source) {
        const explicit = normalizeString(source.module).toLowerCase();
        const subType = normalizeString(source.subType).toLowerCase();
        const rewardTrack = normalizeString(source.rewardTrack).toLowerCase();
        const path = normalizeString(source.sourcePage || (global.location && global.location.pathname) || '').toLowerCase();
        const tokens = [explicit, subType, rewardTrack, path].join(' ');

        if (tokens.includes('vocabulary') || tokens.includes('vocab') || tokens.includes('n2_verbs') || tokens.includes('/vocabulary/')) {
            return 'vocabulary';
        }
        if (tokens.includes('listening') || tokens.includes('immediate') || tokens.includes('/listening/')) {
            return 'listening';
        }
        if (tokens.includes('reading') || tokens.includes('jlpt-reading') || tokens.includes('/jlpt-reading/')) {
            return 'reading';
        }
        if (
            tokens.includes('grammar')
            || tokens.includes('textbook')
            || tokens.includes('try-n2')
            || tokens.includes('keigo')
            || tokens.includes('kakujyo')
            || tokens.includes('/grammar/')
            || tokens.includes('/daily/grammar/')
            || tokens.includes('/textbook/')
            || tokens.includes('/test/')
        ) {
            return 'grammar';
        }
        return normalizePracticeDrawModuleKey(explicit) || 'grammar';
    }

    function normalizePracticePayload(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const total = Math.max(0, Number(source.total ?? source.questionCount ?? source.answeredCount ?? 0));
        const correct = Math.max(0, Number(source.correct ?? source.correctCount ?? 0));
        const answeredCount = Math.max(0, Number(source.answeredCount ?? source.total ?? source.questionCount ?? total));
        const correctCount = Math.min(answeredCount || Number.MAX_SAFE_INTEGER, Math.max(0, Number(source.correctCount ?? source.correct ?? correct)));
        const computedAccuracy = answeredCount > 0 ? correctCount / answeredCount : 0;
        const accuracy = Number.isFinite(Number(source.accuracy))
            ? clampNumber(Number(source.accuracy) > 1 ? Number(source.accuracy) / 100 : Number(source.accuracy), 0, 1)
            : clampNumber(computedAccuracy, 0, 1);
        const module = inferPracticeModule(source);
        const finishedAt = normalizeString(source.finishedAt || new Date().toISOString());
        const sourcePage = normalizeString(source.sourcePage || (global.location && `${global.location.pathname}${global.location.search || ''}`) || '');
        const runKey = normalizeString(source.runKey) || createRunKey({
            module,
            subType: source.subType,
            mode: source.mode,
            scopeKey: source.scopeKey || sourcePage,
            finishedAt
        });

        return {
            runKey,
            module,
            subType: normalizeString(source.subType),
            rewardTrack: normalizeString(source.rewardTrack),
            mode: normalizeString(source.mode || source.phase || 'practice'),
            scopeKey: normalizeString(source.scopeKey || sourcePage),
            level: normalizeString(source.level),
            sourcePage,
            questionCount: total,
            answeredCount,
            correctCount,
            accuracy,
            challengeCleared: Boolean(source.challengeCleared),
            cleared: source.cleared !== false,
            bestStreak: Math.max(0, Number(source.bestStreak ?? source.streak ?? 0)),
            usedHints: Math.max(0, Number(source.usedHints ?? 0)),
            finishedAt,
            extra: source.extra && typeof source.extra === 'object' && !Array.isArray(source.extra) ? deepClone(source.extra) : {}
        };
    }

    function createRunKey(source) {
        sessionRunCounter += 1;
        const parts = [
            normalizeString(source.module || 'practice'),
            normalizeString(source.subType || 'general'),
            normalizeString(source.mode || 'practice'),
            normalizeString(source.scopeKey || 'scope').replace(/[^a-z0-9\u4e00-\u9fff_-]+/gi, '-').slice(-80),
            Date.now(),
            sessionRunCounter
        ];
        return parts.filter(Boolean).join(':');
    }

    function getAnsweredCount(result) {
        return Math.max(0, Number(result.answeredCount || result.questionCount || 0));
    }

    function isEffectivePractice(result) {
        const answeredCount = getAnsweredCount(result);
        if (!result.cleared) {
            return false;
        }
        if (result.mode === 'challenge' && !result.challengeCleared) {
            return false;
        }
        if (result.module === 'vocabulary') {
            return answeredCount >= 8;
        }
        if (result.module === 'grammar') {
            return answeredCount >= 5;
        }
        return answeredCount > 0;
    }

    function getDrawOfferChance(accuracy) {
        if (accuracy >= 0.9) return 0.12;
        if (accuracy >= 0.7) return 0.05;
        if (accuracy >= 0.5) return 0.015;
        return 0.003;
    }

    function getGrowthCardChance(accuracy) {
        if (accuracy >= 0.9) return 0.38;
        if (accuracy >= 0.7) return 0.22;
        if (accuracy >= 0.5) return 0.12;
        return 0.05;
    }

    function canAccruePracticeDrawPity(result) {
        return result && Number(result.accuracy) >= DRAW_PITY_MIN_ACCURACY;
    }

    function getPracticeDrawPityRecord(state, moduleKey) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) {
            return { count: 0, lastRunKey: '', updatedAt: '' };
        }
        return normalizePityRecord(state.practiceLedger.practiceDrawPity[normalizedModule]);
    }

    function setPracticeDrawPityRecord(state, moduleKey, record) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) return;
        state.practiceLedger.practiceDrawPity[normalizedModule] = normalizePityRecord(record);
    }

    function incrementPracticeDrawPity(state, moduleKey, result) {
        const record = getPracticeDrawPityRecord(state, moduleKey);
        record.count += 1;
        record.lastRunKey = result && result.runKey ? result.runKey : record.lastRunKey;
        record.updatedAt = result && result.finishedAt ? result.finishedAt : new Date().toISOString();
        setPracticeDrawPityRecord(state, moduleKey, record);
        return record;
    }

    function resetPracticeDrawPity(state, moduleKey, result) {
        setPracticeDrawPityRecord(state, moduleKey, {
            count: 0,
            lastRunKey: result && result.runKey ? result.runKey : '',
            updatedAt: result && result.finishedAt ? result.finishedAt : new Date().toISOString()
        });
    }

    function hasClaimedPracticeDrawForModuleToday(state, moduleKey) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) return false;
        const record = normalizeDailyRecord(state.practiceLedger.practiceDrawDaily[normalizedModule]);
        return Boolean(record.dateKey === getLocalDateKey() && record.claimedAt);
    }

    function markPracticeDrawClaimedForModuleToday(state, moduleKey, runKey, claimedAt) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) return;
        state.practiceLedger.practiceDrawDaily[normalizedModule] = {
            dateKey: getLocalDateKey(),
            runKey: normalizeString(runKey),
            claimedAt: normalizeString(claimedAt || new Date().toISOString())
        };
    }

    function createDrawOffer(result, state) {
        const moduleKey = normalizePracticeDrawModuleKey(result && result.module);
        const canAccruePity = moduleKey && canAccruePracticeDrawPity(result);
        const pityRecord = canAccruePity
            ? incrementPracticeDrawPity(state, moduleKey, result)
            : getPracticeDrawPityRecord(state, moduleKey);

        if (moduleKey && hasClaimedPracticeDrawForModuleToday(state, moduleKey)) {
            return {
                available: false,
                chance: 0,
                runKey: result && result.runKey ? result.runKey : '',
                blockedByDailyLimit: true,
                guaranteedByPity: false,
                reason: 'daily_limit',
                pityCount: pityRecord.count,
                pityThreshold: DRAW_PITY_THRESHOLD
            };
        }

        const chance = getDrawOfferChance(result.accuracy);
        const guaranteedByPity = canAccruePity && pityRecord.count >= DRAW_PITY_THRESHOLD;
        const available = guaranteedByPity || Math.random() < chance;
        if (available && moduleKey) {
            resetPracticeDrawPity(state, moduleKey, result);
        }
        return {
            available,
            chance,
            runKey: result && result.runKey ? result.runKey : '',
            blockedByDailyLimit: false,
            guaranteedByPity: Boolean(guaranteedByPity),
            reason: guaranteedByPity ? 'pity' : (available ? 'random' : 'chance_miss'),
            pityCount: available ? 0 : pityRecord.count,
            pityThreshold: DRAW_PITY_THRESHOLD
        };
    }

    function pickDrawRarity(accuracy) {
        const roll = Math.random();
        if (accuracy >= 0.9) {
            if (roll < 0.03) return 'KR';
            if (roll < 0.12) return 'UR';
            if (roll < 0.32) return 'SSR';
            if (roll < 0.58) return 'SR';
            return 'R';
        }
        if (accuracy >= 0.7) {
            if (roll < 0.03) return 'UR';
            if (roll < 0.17) return 'SSR';
            if (roll < 0.43) return 'SR';
            return 'R';
        }
        if (accuracy >= 0.5) {
            if (roll < 0.08) return 'SR';
            if (roll < 0.18) return 'SSR';
            return 'R';
        }
        return 'R';
    }

    function pickWeightedPracticeRewardCardId(result) {
        const sourceKey = normalizeString(result.rewardTrack && PRACTICE_CARD_WEIGHTS_BY_SOURCE[result.rewardTrack] ? result.rewardTrack : result.module);
        const weights = PRACTICE_CARD_WEIGHTS_BY_SOURCE[sourceKey] || PRACTICE_CARD_WEIGHTS_BY_SOURCE.grammar;
        const entries = Object.entries(weights).filter((entry) => Number(entry[1]) > 0);
        const totalWeight = entries.reduce((sum, entry) => sum + Number(entry[1]), 0);
        let cursor = Math.random() * totalWeight;
        for (const [cardId, weight] of entries) {
            cursor -= Number(weight);
            if (cursor <= 0) return cardId;
        }
        return entries[entries.length - 1][0];
    }

    function pickPracticeRewardCardDefinition(result) {
        if (Math.random() >= getGrowthCardChance(result.accuracy)) {
            return null;
        }
        return getCardDefinition(pickWeightedPracticeRewardCardId(result));
    }

    function pickNormalCardDefinition(result, rarity) {
        const pool = getNormalFortunes().filter((card) => card.rarity === rarity && !card.isSpecial);
        if (!pool.length) {
            return null;
        }
        const totalWeight = pool.reduce((sum, card) => sum + Math.max(1, Number(card.weight) || 1), 0);
        let cursor = Math.random() * totalWeight;
        for (const card of pool) {
            cursor -= Math.max(1, Number(card.weight) || 1);
            if (cursor <= 0) return card;
        }
        return pool[pool.length - 1];
    }

    function getCollectionMeta() {
        return safeParseJSON(global.localStorage.getItem(COLLECTION_META_KEY), {});
    }

    function getCollectionIds() {
        const ids = safeParseJSON(global.localStorage.getItem(COLLECTION_KEY), []);
        return Array.isArray(ids) ? ids.map(normalizeString).filter(Boolean) : [];
    }

    function getUnlockedIdsFromMeta(meta) {
        return Object.keys(meta || {}).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
    }

    function saveCollection(meta, lastObtained) {
        const ids = getUnlockedIdsFromMeta(meta);
        global.localStorage.setItem(COLLECTION_META_KEY, JSON.stringify(meta));
        global.localStorage.setItem(COLLECTION_KEY, JSON.stringify(Array.from(new Set([...getCollectionIds(), ...ids]))));
        if (lastObtained && lastObtained.id) {
            global.localStorage.setItem(LAST_OBTAINED_KEY, JSON.stringify(lastObtained));
        }
    }

    function createCardSnapshot(cardId) {
        const definition = getCardDefinition(cardId);
        if (!definition) {
            return null;
        }
        const meta = getCollectionMeta();
        const entry = meta[cardId] || {};
        return {
            granted: true,
            cardId,
            rarity: definition.rarity || '',
            title: definition.title || '',
            desc: definition.desc || '',
            color: definition.color || '',
            icon: definition.icon || '',
            isDuplicate: Number(entry.count) > 1,
            count: Math.max(0, Number(entry.count) || 0),
            isNew: Boolean(entry.isNew)
        };
    }

    function recordCard(cardDefinition, obtainedAt, source) {
        const card = cardDefinition || {};
        const cardId = normalizeString(card.id);
        if (!cardId) {
            return null;
        }
        const now = Number(obtainedAt) || Date.now();
        const meta = getCollectionMeta();
        const existing = meta[cardId];
        const isNew = !existing || Number(existing.count) <= 0;
        meta[cardId] = {
            count: (existing && Number(existing.count) > 0 ? Number(existing.count) : 0) + 1,
            firstObtainedAt: existing && Number(existing.firstObtainedAt) > 0 ? Number(existing.firstObtainedAt) : now,
            lastObtainedAt: now,
            isNew: true,
            rarity: card.rarity || '',
            title: card.title || '',
            source: normalizeString(source),
            acquireMode: card.acquireMode || (card.isRewardOnly ? 'practice_reward' : 'practice_draw')
        };
        saveCollection(meta, { id: cardId, obtainedAt: now });

        return {
            granted: true,
            cardId,
            rarity: card.rarity || '',
            title: card.title || '',
            desc: card.desc || '',
            color: card.color || '',
            icon: card.icon || '',
            isDuplicate: !isNew,
            count: meta[cardId].count,
            isNew
        };
    }

    function hasCard(cardId) {
        const meta = getCollectionMeta();
        const entry = meta[cardId];
        return Boolean(entry && Number(entry.count) > 0);
    }

    function maybeUnlockN2Pass() {
        const hasAllSeasons = SEASON_CARD_IDS.every(hasCard);
        if (!hasAllSeasons || hasCard(N2_PASS_CARD_ID)) {
            return null;
        }
        const passCard = getCardDefinition(N2_PASS_CARD_ID);
        return passCard ? recordCard(passCard, Date.now(), 'practice_set_complete') : null;
    }

    function hasPracticeAchievementRecord(state) {
        const record = state
            && state.progress
            && state.progress.achievementRewards
            ? state.progress.achievementRewards[PRACTICE_ACHIEVEMENT_CARD_ID]
            : null;
        return Boolean(
            hasCard(PRACTICE_ACHIEVEMENT_CARD_ID)
            || (record && (record.claimedAt || record.pendingRunKey))
        );
    }

    function createPracticeAchievementDraw(result, state) {
        state.progress.effectivePracticeCount = Math.max(0, Number(state.progress.effectivePracticeCount) || 0) + 1;
        if (state.progress.effectivePracticeCount < PRACTICE_ACHIEVEMENT_THRESHOLD || hasPracticeAchievementRecord(state)) {
            return {
                available: false,
                runKey: result && result.runKey ? result.runKey : '',
                reason: 'not_reached',
                count: state.progress.effectivePracticeCount,
                threshold: PRACTICE_ACHIEVEMENT_THRESHOLD
            };
        }

        const cardDefinition = getCardDefinition(PRACTICE_ACHIEVEMENT_CARD_ID);
        if (!cardDefinition) {
            return {
                available: false,
                runKey: result && result.runKey ? result.runKey : '',
                reason: 'missing_card_definition',
                count: state.progress.effectivePracticeCount,
                threshold: PRACTICE_ACHIEVEMENT_THRESHOLD
            };
        }

        state.progress.achievementRewards[PRACTICE_ACHIEVEMENT_CARD_ID] = {
            cardId: PRACTICE_ACHIEVEMENT_CARD_ID,
            threshold: PRACTICE_ACHIEVEMENT_THRESHOLD,
            count: state.progress.effectivePracticeCount,
            claimedAt: '',
            pendingRunKey: result.runKey
        };
        state.rewardFlow.pendingDraws[result.runKey] = {
            runKey: result.runKey,
            module: '',
            subType: result.subType,
            rewardTrack: 'practice_achievement_30',
            scopeKey: result.scopeKey,
            cardId: cardDefinition.id,
            rarity: cardDefinition.rarity || '',
            preparedAt: result.finishedAt,
            claimedAt: '',
            sourcePage: result.sourcePage
        };

        return {
            available: true,
            chance: 1,
            runKey: result.runKey,
            blockedByDailyLimit: false,
            guaranteedByPity: true,
            reason: 'practice_achievement_30',
            count: state.progress.effectivePracticeCount,
            threshold: PRACTICE_ACHIEVEMENT_THRESHOLD,
            pityCount: 0,
            pityThreshold: DRAW_PITY_THRESHOLD
        };
    }

    function buildCollectionState(highlightId) {
        const api = getCatalogApi();
        const catalog = api && Array.isArray(api.collectionCatalog) ? api.collectionCatalog : [];
        const meta = getCollectionMeta();
        return {
            highlightId: normalizeString(highlightId),
            unlockedIds: getUnlockedIdsFromMeta(meta),
            cards: catalog.map((card) => {
                const entry = meta[card.id];
                return {
                    id: card.id,
                    title: card.title,
                    rarity: card.rarity,
                    icon: resolveAssetUrl(card.icon),
                    isRewardOnly: Boolean(card.isRewardOnly),
                    unlocked: Boolean(entry && Number(entry.count) > 0),
                    count: entry && Number(entry.count) > 0 ? Number(entry.count) : 0
                };
            })
        };
    }

    function getState() {
        return readState();
    }

    function startRun(descriptor = {}) {
        const payload = normalizePracticePayload({
            ...descriptor,
            cleared: false,
            total: descriptor.total || descriptor.questionCount || 0,
            answeredCount: descriptor.answeredCount || 0,
            correctCount: descriptor.correctCount || 0
        });
        return {
            runKey: payload.runKey,
            practice: deepClone(payload)
        };
    }

    function completeRun(payload = {}) {
        const result = normalizePracticePayload(payload);
        const state = readState();
        if (state.practiceLedger.rewardedRunKeys.includes(result.runKey)) {
            return {
                accepted: false,
                reason: 'duplicate_run',
                practice: deepClone(result),
                state: getState()
            };
        }
        if (!isEffectivePractice(result)) {
            return {
                accepted: false,
                reason: 'ineffective_practice',
                practice: deepClone(result),
                state: getState()
            };
        }

        const achievementDraw = createPracticeAchievementDraw(result, state);
        const drawOffer = achievementDraw.available ? achievementDraw : createDrawOffer(result, state);
        if (drawOffer.available && drawOffer.reason !== 'practice_achievement_30') {
            const practiceRewardCard = pickPracticeRewardCardDefinition(result);
            const normalCard = practiceRewardCard ? null : pickNormalCardDefinition(result, pickDrawRarity(result.accuracy));
            const preparedCard = practiceRewardCard || normalCard;
            if (preparedCard) {
                state.rewardFlow.pendingDraws[result.runKey] = {
                    runKey: result.runKey,
                    module: result.module,
                    subType: result.subType,
                    rewardTrack: result.rewardTrack,
                    scopeKey: result.scopeKey,
                    cardId: preparedCard.id,
                    rarity: preparedCard.rarity || '',
                    preparedAt: result.finishedAt,
                    claimedAt: '',
                    sourcePage: result.sourcePage
                };
            } else {
                drawOffer.available = false;
                drawOffer.reason = 'missing_card_pool';
            }
        }

        state.practiceLedger.rewardedRunKeys = [
            ...state.practiceLedger.rewardedRunKeys,
            result.runKey
        ].slice(-500);
        state.progress.lastSummary = {
            runKey: result.runKey,
            module: result.module,
            mode: result.mode,
            scopeKey: result.scopeKey,
            finishedAt: result.finishedAt,
            drawOffer: {
                available: Boolean(drawOffer.available),
                runKey: result.runKey,
                reason: drawOffer.reason || '',
                guaranteedByPity: Boolean(drawOffer.guaranteedByPity),
                pityCount: Number(drawOffer.pityCount) || 0,
                pityThreshold: DRAW_PITY_THRESHOLD,
                achievementCount: Number(drawOffer.count) || Number(state.progress.effectivePracticeCount) || 0,
                achievementThreshold: PRACTICE_ACHIEVEMENT_THRESHOLD
            }
        };
        state.progress.recentRewards = [
            deepClone(state.progress.lastSummary),
            ...(Array.isArray(state.progress.recentRewards) ? state.progress.recentRewards : [])
        ].slice(0, 12);
        saveState(state);

        return {
            accepted: true,
            practice: deepClone(result),
            drawOffer: deepClone(drawOffer),
            summary: buildSummary(result, drawOffer),
            collection: buildCollectionState(),
            state: getState()
        };
    }

    function claimPendingDraw(runKey) {
        const normalizedRunKey = normalizeString(runKey);
        if (!normalizedRunKey) {
            return { accepted: false, reason: 'missing_run_key' };
        }
        const state = readState();
        const pendingDraw = normalizePendingDraw(state.rewardFlow.pendingDraws[normalizedRunKey]);
        if (!pendingDraw.runKey || !pendingDraw.cardId) {
            return { accepted: false, reason: 'no_pending_draw' };
        }
        if (pendingDraw.claimedAt) {
            return {
                accepted: false,
                reason: 'draw_already_claimed',
                card: createCardSnapshot(pendingDraw.cardId),
                collection: buildCollectionState(pendingDraw.cardId)
            };
        }
        const isPracticeAchievement = pendingDraw.cardId === PRACTICE_ACHIEVEMENT_CARD_ID;
        if (!isPracticeAchievement && hasClaimedPracticeDrawForModuleToday(state, pendingDraw.module)) {
            return { accepted: false, reason: 'daily_draw_already_claimed' };
        }

        const cardDefinition = getCardDefinition(pendingDraw.cardId);
        if (!cardDefinition) {
            return { accepted: false, reason: 'missing_card_definition' };
        }
        const claimedAt = Date.now();
        const cardSource = isPracticeAchievement ? 'practice_achievement_30' : `practice_${pendingDraw.module}`;
        const card = recordCard(cardDefinition, claimedAt, cardSource);
        const bonusCard = maybeUnlockN2Pass();
        state.rewardFlow.pendingDraws[normalizedRunKey].claimedAt = String(claimedAt);
        if (isPracticeAchievement) {
            state.progress.achievementRewards[PRACTICE_ACHIEVEMENT_CARD_ID] = {
                cardId: PRACTICE_ACHIEVEMENT_CARD_ID,
                threshold: PRACTICE_ACHIEVEMENT_THRESHOLD,
                count: Math.max(PRACTICE_ACHIEVEMENT_THRESHOLD, Number(state.progress.effectivePracticeCount) || 0),
                claimedAt: new Date(claimedAt).toISOString(),
                pendingRunKey: normalizedRunKey
            };
        } else {
            markPracticeDrawClaimedForModuleToday(state, pendingDraw.module, normalizedRunKey, new Date(claimedAt).toISOString());
        }
        saveState(state);

        return {
            accepted: true,
            runKey: normalizedRunKey,
            card: {
                ...card,
                reason: 'draw_claimed'
            },
            bonusCard,
            summary: buildClaimSummary(card, bonusCard),
            collection: buildCollectionState(card && card.cardId),
            state: getState()
        };
    }

    function canOpenDrawForRunKey(runKey) {
        const normalizedRunKey = normalizeString(runKey);
        if (!normalizedRunKey) return false;
        const state = readState();
        const pendingDraw = normalizePendingDraw(state.rewardFlow.pendingDraws[normalizedRunKey]);
        if (!pendingDraw.runKey || pendingDraw.claimedAt) return false;
        return !hasClaimedPracticeDrawForModuleToday(state, pendingDraw.module);
    }

    function getDrawAffordanceMarkup(runKey) {
        const normalizedRunKey = normalizeString(runKey);
        if (!normalizedRunKey || !canOpenDrawForRunKey(normalizedRunKey)) {
            return '';
        }
        return `
            <button class="kiki-practice-draw-affordance" type="button" data-kiki-practice-draw data-run-key="${escapeHtml(normalizedRunKey)}" aria-label="打开练习抽卡结果">
                <span class="kiki-practice-draw-affordance__icon">抽</span>
                <span class="kiki-practice-draw-affordance__text">获得抽卡机会</span>
            </button>
        `;
    }

    function buildSummary(result, drawOffer) {
        return {
            runKey: result.runKey,
            module: result.module,
            accuracy: result.accuracy,
            drawOffer: {
                available: Boolean(drawOffer && drawOffer.available),
                reason: drawOffer && drawOffer.reason ? drawOffer.reason : '',
                guaranteedByPity: Boolean(drawOffer && drawOffer.guaranteedByPity),
                pityCount: drawOffer && Number(drawOffer.pityCount) ? Number(drawOffer.pityCount) : 0,
                pityThreshold: DRAW_PITY_THRESHOLD,
                achievementCount: drawOffer && Number(drawOffer.count) ? Number(drawOffer.count) : 0,
                achievementThreshold: PRACTICE_ACHIEVEMENT_THRESHOLD
            }
        };
    }

    function buildClaimSummary(card, bonusCard) {
        const title = card && card.title ? card.title : '练习签卡';
        const bonusTitle = bonusCard && bonusCard.title ? bonusCard.title : '';
        return {
            title,
            copy: bonusTitle
                ? `获得「${title}」，并解锁「${bonusTitle}」。`
                : `获得「${title}」。`
        };
    }

    function injectStyles() {
        if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .kiki-practice-draw-slot {
                margin-top: 16px;
                display: flex;
                justify-content: center;
            }
            .kiki-practice-draw-affordance {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 9px;
                border: 2px solid #2f2f2d;
                border-radius: 999px;
                background: #fff7cf;
                color: #2d2d2b;
                min-height: 44px;
                padding: 0 20px;
                font: 800 14px/1 "Hiragino Sans", "Noto Sans SC", "Noto Sans JP", "Microsoft YaHei", sans-serif;
                box-shadow: 4px 5px 0 rgba(47, 47, 45, 0.14);
                cursor: pointer;
            }
            .kiki-practice-draw-affordance__icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: #2f2f2d;
                color: #fff7cf;
                font-size: 12px;
                letter-spacing: 0.04em;
            }
            .kiki-practice-draw-overlay {
                position: fixed;
                inset: 0;
                z-index: 5400;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 24px;
                background: rgba(29, 29, 27, 0.5);
            }
            .kiki-practice-draw-overlay.is-open {
                display: flex;
            }
            .kiki-practice-draw-shell {
                width: min(420px, calc(100vw - 32px));
                border: 2px solid #2f2f2d;
                border-radius: 24px;
                background: #fffdf8;
                color: #302f2d;
                padding: 24px;
                box-shadow: 12px 16px 0 rgba(47, 47, 45, 0.16);
                font-family: "Hiragino Sans", "Noto Sans SC", "Noto Sans JP", "Microsoft YaHei", sans-serif;
                text-align: center;
            }
            .kiki-practice-draw-prelude {
                display: grid;
                gap: 16px;
                justify-items: center;
            }
            .kiki-practice-draw-prelude img {
                width: min(210px, 58vw);
                max-height: 260px;
                object-fit: contain;
                filter: drop-shadow(0 12px 22px rgba(47,47,45,0.16));
            }
            .kiki-practice-draw-card {
                display: none;
                gap: 12px;
                justify-items: center;
            }
            .kiki-practice-draw-card.is-visible {
                display: grid;
            }
            .kiki-practice-draw-rarity {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 54px;
                min-height: 28px;
                padding: 0 12px;
                border-radius: 999px;
                background: #2f2f2d;
                color: #fff;
                font-size: 12px;
                font-weight: 900;
                letter-spacing: 0.08em;
            }
            .kiki-practice-draw-card img {
                width: min(220px, 62vw);
                aspect-ratio: 1 / 1;
                object-fit: cover;
                border-radius: 18px;
                border: 1px solid rgba(47, 47, 45, 0.18);
                background: #f7f3ea;
            }
            .kiki-practice-draw-title {
                margin: 4px 0 0;
                font-size: 1.75rem;
                line-height: 1.18;
                font-weight: 900;
                letter-spacing: 0.04em;
            }
            .kiki-practice-draw-desc,
            .kiki-practice-draw-meta {
                margin: 0;
                color: #65615c;
                line-height: 1.72;
                font-size: 0.95rem;
            }
            .kiki-practice-draw-meta {
                color: #a15f42;
                font-weight: 800;
            }
            .kiki-practice-draw-actions {
                margin-top: 18px;
                display: flex;
                gap: 10px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .kiki-practice-draw-button {
                border: 1px solid #2f2f2d;
                border-radius: 999px;
                background: #fff;
                color: #2f2f2d;
                min-height: 38px;
                padding: 0 16px;
                font-weight: 800;
                cursor: pointer;
            }
            .kiki-practice-draw-button.is-primary {
                background: #2f2f2d;
                color: #fff;
            }
            @media (max-width: 560px) {
                .kiki-practice-draw-shell {
                    padding: 20px 18px;
                    border-radius: 20px;
                }
                .kiki-practice-draw-title {
                    font-size: 1.45rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function ensureOverlay() {
        injectStyles();
        let overlay = document.querySelector('.kiki-practice-draw-overlay');
        if (overlay) {
            return overlay;
        }
        overlay = document.createElement('div');
        overlay.className = 'kiki-practice-draw-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
            <div class="kiki-practice-draw-shell" role="dialog" aria-modal="true" aria-label="练习抽卡结果">
                <div class="kiki-practice-draw-prelude" data-draw-prelude>
                    <img src="${escapeHtml(REVEAL_IMAGE)}" alt="抽签">
                    <p class="kiki-practice-draw-desc">练习之风吹来了一枚签卡。打开看看吧。</p>
                </div>
                <div class="kiki-practice-draw-card" data-draw-card>
                    <span class="kiki-practice-draw-rarity" data-draw-rarity></span>
                    <img src="" alt="" data-draw-image>
                    <h3 class="kiki-practice-draw-title" data-draw-title></h3>
                    <p class="kiki-practice-draw-desc" data-draw-desc></p>
                    <p class="kiki-practice-draw-meta" data-draw-meta></p>
                </div>
                <div class="kiki-practice-draw-actions">
                    <button type="button" class="kiki-practice-draw-button is-primary" data-draw-open>抽卡</button>
                    <button type="button" class="kiki-practice-draw-button" data-draw-close>关闭</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay || event.target.closest('[data-draw-close]')) {
                closeDrawOverlay(overlay);
            }
        });
        return overlay;
    }

    function closeDrawOverlay(overlay) {
        const root = overlay || document.querySelector('.kiki-practice-draw-overlay');
        if (!root) return;
        root.classList.remove('is-open');
        root.setAttribute('aria-hidden', 'true');
    }

    function openDrawOverlay(runKey, trigger) {
        const overlay = ensureOverlay();
        const prelude = overlay.querySelector('[data-draw-prelude]');
        const cardPanel = overlay.querySelector('[data-draw-card]');
        const openButton = overlay.querySelector('[data-draw-open]');
        const rarity = overlay.querySelector('[data-draw-rarity]');
        const image = overlay.querySelector('[data-draw-image]');
        const title = overlay.querySelector('[data-draw-title]');
        const desc = overlay.querySelector('[data-draw-desc]');
        const meta = overlay.querySelector('[data-draw-meta]');
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        prelude.style.display = '';
        cardPanel.classList.remove('is-visible');
        openButton.style.display = '';
        openButton.disabled = false;
        openButton.textContent = '抽卡';

        openButton.onclick = () => {
            openButton.disabled = true;
            openButton.textContent = '抽卡中...';
            const result = claimPendingDraw(runKey);
            if (!result.accepted) {
                meta.textContent = result.reason === 'daily_draw_already_claimed'
                    ? '今天这个板块的练习抽卡已经领取过啦。'
                    : '这次抽卡机会暂时不可领取。';
                prelude.style.display = 'none';
                cardPanel.classList.add('is-visible');
                rarity.textContent = 'INFO';
                image.removeAttribute('src');
                image.alt = '';
                title.textContent = '没有可领取的签卡';
                desc.textContent = '';
                openButton.style.display = 'none';
                return;
            }
            const card = result.card || {};
            prelude.style.display = 'none';
            cardPanel.classList.add('is-visible');
            rarity.textContent = card.rarity || 'R';
            image.src = card.icon || '';
            image.alt = card.title || '练习签卡';
            title.textContent = card.title || '练习签卡';
            desc.textContent = card.desc || '';
            meta.textContent = result.bonusCard && result.bonusCard.title
                ? `四季集齐，已解锁「${result.bonusCard.title}」。`
                : (card.isDuplicate ? `已拥有，现在共有 ${card.count || 1} 张。` : 'NEW! 已加入御神签图鉴。');
            openButton.style.display = 'none';
            if (trigger) {
                trigger.remove();
            }
        };
    }

    function findDrawSlotTarget(source = {}) {
        const selector = normalizeString(source.rewardTargetSelector);
        if (selector) {
            const explicitTarget = document.querySelector(selector);
            if (explicitTarget) return explicitTarget;
        }
        const selectors = [
            '.summary-actions',
            '.result-actions',
            '.result-footer',
            '.score-actions',
            '.practice-summary-actions',
            '.summary-card',
            '.result-card',
            '.completion-card',
            '.finish-card',
            '.result-panel',
            '.n2-feedback-card',
            'main'
        ];
        for (const item of selectors) {
            const target = document.querySelector(item);
            if (target) return target;
        }
        return document.body;
    }

    function renderDrawOffer(result, source = {}) {
        if (!result || !result.drawOffer || !result.drawOffer.available || !result.drawOffer.runKey || typeof document === 'undefined') {
            return null;
        }
        injectStyles();
        const runKey = result.drawOffer.runKey;
        const escapedRunKey = typeof CSS !== 'undefined' && CSS.escape
            ? CSS.escape(runKey)
            : runKey.replace(/["\\]/g, '\\$&');
        if (document.querySelector(`[data-kiki-practice-draw][data-run-key="${escapedRunKey}"]`)) {
            return null;
        }
        const wrapper = document.createElement('div');
        wrapper.className = 'kiki-practice-draw-slot';
        wrapper.innerHTML = getDrawAffordanceMarkup(runKey);
        if (!wrapper.firstElementChild) {
            return null;
        }
        const target = findDrawSlotTarget(source);
        if (target === document.body || target.tagName === 'MAIN') {
            document.body.appendChild(wrapper);
            wrapper.style.position = 'fixed';
            wrapper.style.left = '50%';
            wrapper.style.bottom = 'calc(env(safe-area-inset-bottom, 0px) + 24px)';
            wrapper.style.transform = 'translateX(-50%)';
            wrapper.style.zIndex = '3400';
        } else {
            target.appendChild(wrapper);
        }
        return wrapper;
    }

    if (typeof document !== 'undefined') {
        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('[data-kiki-practice-draw]');
            if (!trigger) return;
            event.preventDefault();
            openDrawOverlay(trigger.getAttribute('data-run-key'), trigger);
        });
    }

    const api = {
        STORAGE_KEY,
        COLLECTION_KEY,
        COLLECTION_META_KEY,
        LAST_OBTAINED_KEY,
        startRun,
        completeRun,
        claimPendingDraw,
        getDrawAffordanceMarkup,
        canOpenDrawForRunKey,
        renderDrawOffer,
        getState,
        getCardDefinition,
        getCollectionState: buildCollectionState,
        probabilities: Object.freeze({
            drawOffer: Object.freeze({ 90: 0.12, 70: 0.05, 50: 0.015, low: 0.003 }),
            practiceCard: Object.freeze({ 90: 0.38, 70: 0.22, 50: 0.12, low: 0.05 }),
            pityThreshold: DRAW_PITY_THRESHOLD,
            pityMinAccuracy: DRAW_PITY_MIN_ACCURACY,
            achievementThreshold: PRACTICE_ACHIEVEMENT_THRESHOLD
        })
    };

    global.KikiPracticeRewardRuntime = api;
    global.StudyQuestTestUi = global.StudyQuestTestUi || {};
    global.StudyQuestTestUi.getDrawAffordanceMarkup = global.StudyQuestTestUi.getDrawAffordanceMarkup || getDrawAffordanceMarkup;
    global.StudyQuestTestUi.canOpenDrawForRunKey = global.StudyQuestTestUi.canOpenDrawForRunKey || canOpenDrawForRunKey;
})(typeof window !== 'undefined' ? window : globalThis);
