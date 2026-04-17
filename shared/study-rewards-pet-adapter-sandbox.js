(function(global) {
    'use strict';

    const PET_STATE_KEY = 'kiki_pet_state_sandbox_v1';
    const LOTTERY_COLLECTION_KEY = 'omikujiCollection_sandbox';
    const LOTTERY_COLLECTION_META_KEY = 'omikujiCollectionMeta_sandbox_v1';
    const LOTTERY_LAST_OBTAINED_KEY = 'omikujiLastObtained_sandbox_v1';
    const DEFAULT_PET_ID = 'shiba';
    const DEFAULT_UNLOCKED_PET_IDS = ['shiba', 'cat'];
    const DEFAULT_UNLOCKED_INTERACTION_IDS = [];
    const LEVEL_XP_THRESHOLDS = [0, 5, 12, 22, 35, 51, 70, 92, 117, 145];
    const PET_MAX_REWARD_IDS = {
        shiba: 'pet_shiba_max',
        cat: 'pet_cat_max'
    };
    const SHIBA_LEVEL_TITLES = [
        '散歩初心者',
        '摇尾陪跑生',
        '陪学小柴',
        '词卡巡逻员',
        '专注犬见习',
        '进度小跟班',
        '复习番犬',
        '自律番犬',
        '学习冲刺官',
        '学習守り神'
    ];
    const CAT_LEVEL_TITLES = [
        '午睡见习生',
        '窗边观察员',
        '陪学小猫',
        '纸页巡查员',
        '安静读书猫',
        '笔记踩点师',
        '复习守夜猫',
        '专注陪跑猫',
        '灵感捕手',
        '月影学伴神'
    ];
    const PET_PROFILES = {
        shiba: {
            id: 'shiba',
            label: '柴犬',
            defaultName: '木木',
            levelTitles: SHIBA_LEVEL_TITLES
        },
        cat: {
            id: 'cat',
            label: '猫猫',
            defaultName: '咪咪',
            levelTitles: CAT_LEVEL_TITLES
        }
    };

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

    function clamp(value, minValue, maxValue) {
        return Math.min(maxValue, Math.max(minValue, value));
    }

    function normalizeId(value) {
        return String(value || '').trim();
    }

    function normalizeIdList(rawValue) {
        if (!Array.isArray(rawValue)) {
            return [];
        }

        return rawValue
            .map((item) => normalizeId(item))
            .filter(Boolean);
    }

    function getPetIds() {
        return Object.keys(PET_PROFILES);
    }

    function getPetProfile(petId) {
        return PET_PROFILES[normalizeId(petId)] || PET_PROFILES[DEFAULT_PET_ID];
    }

    function createDefaultPersistentPetState() {
        return {
            progressVersion: 2,
            lastVisitDate: '',
            visitStreak: 0,
            bondXp: 0,
            totalVisits: 0,
            totalStudyLaunches: 0,
            lastOpenedSection: '',
            lastClickedHref: '',
            lastClickedLabel: '',
            lastStudyDate: '',
            lastStudyXpDate: '',
            lastInteractionDate: '',
            lastWelcomedAt: 0,
            lastSleepStartedAt: 0,
            claimedMilestoneIds: []
        };
    }

    function getVisitMilestoneDaysUpTo(streakDays) {
        const days = Math.max(0, Number(streakDays || 0));
        const milestoneDays = [];
        if (days >= 3) {
            milestoneDays.push(3);
        }
        for (let current = 7; current <= days; current += 7) {
            milestoneDays.push(current);
        }
        return milestoneDays;
    }

    function getStudyMilestonesUpTo(totalLaunches) {
        const launches = Math.max(0, Number(totalLaunches || 0));
        const studyMilestones = [
            { count: 10 },
            { count: 25 },
            { count: 50 }
        ];
        return studyMilestones.filter((milestone) => launches >= milestone.count);
    }

    function migrateLegacyBondXp(oldXp) {
        const normalizedXp = Math.max(0, Number(oldXp || 0));
        if (normalizedXp <= 16) {
            return Math.round((normalizedXp / 16) * 51);
        }
        return Math.min(92, 51 + Math.round((normalizedXp - 16) * 0.5));
    }

    function migrateLegacyPersistentPetState(normalizedState) {
        const migratedState = {
            ...createDefaultPersistentPetState(),
            ...normalizedState
        };
        migratedState.bondXp = migrateLegacyBondXp(normalizedState.bondXp);
        migratedState.lastStudyXpDate = typeof normalizedState.lastStudyDate === 'string' ? normalizedState.lastStudyDate : '';
        migratedState.claimedMilestoneIds = Array.from(new Set([
            ...getVisitMilestoneDaysUpTo(normalizedState.visitStreak).map((days) => `visit-streak-${days}`),
            ...getStudyMilestonesUpTo(normalizedState.totalStudyLaunches).map((milestone) => `study-launch-${milestone.count}`)
        ]));
        migratedState.progressVersion = 2;
        return migratedState;
    }

    function normalizePersistentPetState(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        const normalizedState = {
            ...createDefaultPersistentPetState(),
            ...source,
            lastStudyXpDate: typeof source.lastStudyXpDate === 'string' ? source.lastStudyXpDate : '',
            claimedMilestoneIds: Array.from(new Set(normalizeIdList(source.claimedMilestoneIds)))
        };

        if (Number(source.progressVersion) === 2) {
            return normalizedState;
        }

        return migrateLegacyPersistentPetState(normalizedState);
    }

    function createDefaultPersistentPetCollection() {
        return {
            unlockedPetIds: DEFAULT_UNLOCKED_PET_IDS.slice(),
            unlockedInteractionIds: DEFAULT_UNLOCKED_INTERACTION_IDS.slice()
        };
    }

    function normalizePersistentPetCollection(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return {
            unlockedPetIds: Array.from(new Set([
                ...DEFAULT_UNLOCKED_PET_IDS,
                ...normalizeIdList(source.unlockedPetIds)
            ])),
            unlockedInteractionIds: Array.from(new Set(normalizeIdList(source.unlockedInteractionIds)))
        };
    }

    function ensurePetStateBucket(wrapper, petId) {
        if (!wrapper.petStates || typeof wrapper.petStates !== 'object' || Array.isArray(wrapper.petStates)) {
            wrapper.petStates = {};
        }

        if (!wrapper.petStates[petId] || typeof wrapper.petStates[petId] !== 'object' || Array.isArray(wrapper.petStates[petId])) {
            wrapper.petStates[petId] = createDefaultPersistentPetState();
        }

        return wrapper.petStates[petId];
    }

    function ensurePetCollectionBucket(wrapper) {
        if (!wrapper.petCollection || typeof wrapper.petCollection !== 'object' || Array.isArray(wrapper.petCollection)) {
            wrapper.petCollection = createDefaultPersistentPetCollection();
        }

        wrapper.petCollection = normalizePersistentPetCollection(wrapper.petCollection);
        return wrapper.petCollection;
    }

    function loadPetState() {
        const parsed = safeParseJSON(global.localStorage.getItem(PET_STATE_KEY), {});
        const petStates = {};

        getPetIds().forEach((petId) => {
            petStates[petId] = createDefaultPersistentPetState();
        });

        if (parsed && parsed.petStates && typeof parsed.petStates === 'object' && !Array.isArray(parsed.petStates)) {
            getPetIds().forEach((petId) => {
                petStates[petId] = normalizePersistentPetState(parsed.petStates[petId]);
            });
            return {
                petStates,
                petCollection: normalizePersistentPetCollection(parsed.petCollection)
            };
        }

        petStates.shiba = normalizePersistentPetState(parsed);
        return {
            petStates,
            petCollection: normalizePersistentPetCollection(parsed.petCollection)
        };
    }

    function savePetState(state) {
        const payload = {
            petStates: getPetIds().reduce((accumulator, petId) => {
                accumulator[petId] = normalizePersistentPetState(ensurePetStateBucket(state, petId));
                return accumulator;
            }, {}),
            petCollection: normalizePersistentPetCollection(ensurePetCollectionBucket(state))
        };

        global.localStorage.setItem(PET_STATE_KEY, JSON.stringify(payload));
        return payload;
    }

    function getTodayKey() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }

    function getLevelInfo(xp, levelTitles) {
        const normalizedXp = Math.max(0, Number(xp || 0));
        let level = 1;

        for (let index = 0; index < LEVEL_XP_THRESHOLDS.length; index += 1) {
            if (normalizedXp >= LEVEL_XP_THRESHOLDS[index]) {
                level = index + 1;
            } else {
                break;
            }
        }

        const titles = Array.isArray(levelTitles) && levelTitles.length ? levelTitles : SHIBA_LEVEL_TITLES;
        const cappedLevel = Math.min(titles.length, level);
        const currentLevelXp = LEVEL_XP_THRESHOLDS[cappedLevel - 1] || 0;
        const nextLevelXp = LEVEL_XP_THRESHOLDS[cappedLevel] ?? currentLevelXp;
        const isMax = cappedLevel >= titles.length;
        const progressRatio = isMax
            ? 1
            : clamp((normalizedXp - currentLevelXp) / Math.max(1, nextLevelXp - currentLevelXp), 0, 1);

        return {
            level: cappedLevel,
            title: titles[cappedLevel - 1] || titles[0],
            xp: normalizedXp,
            xpIntoLevel: Math.max(0, normalizedXp - currentLevelXp),
            xpNeededForNext: isMax ? 0 : Math.max(0, nextLevelXp - normalizedXp),
            currentLevelXp,
            nextLevelXp,
            isMax,
            progressRatio
        };
    }

    function getLotteryCollectionMeta() {
        const rawMeta = safeParseJSON(global.localStorage.getItem(LOTTERY_COLLECTION_META_KEY), {});
        if (!rawMeta || typeof rawMeta !== 'object' || Array.isArray(rawMeta)) {
            return {};
        }

        return Object.keys(rawMeta).reduce((accumulator, id) => {
            const entry = rawMeta[id];
            if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
                return accumulator;
            }

            const normalizedId = normalizeId(id);
            const count = Number.parseInt(entry.count, 10);
            if (!normalizedId || !Number.isInteger(count) || count <= 0) {
                return accumulator;
            }

            accumulator[normalizedId] = {
                count,
                firstObtainedAt: Number.isFinite(Number(entry.firstObtainedAt)) ? Number(entry.firstObtainedAt) : null,
                lastObtainedAt: Number.isFinite(Number(entry.lastObtainedAt)) ? Number(entry.lastObtainedAt) : null,
                isNew: Boolean(entry.isNew),
                rarity: normalizeId(entry.rarity) || 'R',
                title: normalizeId(entry.title),
                source: normalizeId(entry.source)
            };
            return accumulator;
        }, {});
    }

    function saveLotteryCollectionMeta(meta) {
        global.localStorage.setItem(LOTTERY_COLLECTION_META_KEY, JSON.stringify(meta));
    }

    function saveLotteryCollectionIds(meta) {
        const unlockedIds = Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
        global.localStorage.setItem(LOTTERY_COLLECTION_KEY, JSON.stringify(unlockedIds));
    }

    function unlockPetMaxRewardCard(petId) {
        const rewardId = PET_MAX_REWARD_IDS[petId];
        if (!rewardId) {
            return false;
        }

        const meta = getLotteryCollectionMeta();
        if (meta[rewardId] && Number(meta[rewardId].count) > 0) {
            return false;
        }

        const now = Date.now();
        meta[rewardId] = {
            count: 1,
            firstObtainedAt: now,
            lastObtainedAt: now,
            isNew: true,
            rarity: 'SSR',
            title: `${getPetProfile(petId).label} 满级奖励`,
            source: 'pet_max_reward'
        };

        saveLotteryCollectionMeta(meta);
        saveLotteryCollectionIds(meta);
        global.localStorage.setItem(LOTTERY_LAST_OBTAINED_KEY, JSON.stringify({ id: rewardId, obtainedAt: now }));
        return true;
    }

    function getPetSnapshot(petId = DEFAULT_PET_ID) {
        const normalizedPetId = getPetProfile(petId).id;
        const state = loadPetState();
        const petState = normalizePersistentPetState(ensurePetStateBucket(state, normalizedPetId));
        const levelInfo = getLevelInfo(petState.bondXp, getPetProfile(normalizedPetId).levelTitles);

        return {
            petId: normalizedPetId,
            state: JSON.parse(JSON.stringify(petState)),
            levelInfo,
            collection: JSON.parse(JSON.stringify(ensurePetCollectionBucket(state)))
        };
    }

    function getPetLevelInfo(petId = DEFAULT_PET_ID) {
        const snapshot = getPetSnapshot(petId);
        return {
            petId: snapshot.petId,
            ...snapshot.levelInfo
        };
    }

    function awardPetXp(amount, options) {
        const xpGain = Math.max(0, Number(amount || 0));
        const sourceOptions = options && typeof options === 'object' ? options : {};
        const petId = getPetProfile(sourceOptions.petId || DEFAULT_PET_ID).id;
        const state = loadPetState();
        const petState = ensurePetStateBucket(state, petId);
        const petProfile = getPetProfile(petId);
        const before = getLevelInfo(petState.bondXp, petProfile.levelTitles);

        if (xpGain > 0) {
            petState.bondXp = Math.max(0, Number(petState.bondXp || 0) + xpGain);
            petState.lastStudyXpDate = getTodayKey();
        }

        const after = getLevelInfo(petState.bondXp, petProfile.levelTitles);
        const rewardUnlocked = after.isMax ? unlockPetMaxRewardCard(petId) : false;
        savePetState(state);

        return {
            petId,
            gained: xpGain,
            didLevelUp: after.level > before.level,
            rewardUnlocked,
            beforeLevel: before.level,
            afterLevel: after.level,
            before,
            after
        };
    }

    const root = getRoot();
    root.adapters.pet = {
        getPetSnapshot,
        getPetLevelInfo,
        awardPetXp
    };
})(typeof window !== 'undefined' ? window : globalThis);
