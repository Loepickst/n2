(function(global) {
    'use strict';

    const currentScript = typeof document !== 'undefined' ? document.currentScript : null;
    const runtimeBaseUrl = currentScript && currentScript.src
        ? new URL('./', currentScript.src)
        : (typeof location !== 'undefined' ? new URL('./', location.href) : null);
    const siteRootUrl = runtimeBaseUrl ? new URL('../', runtimeBaseUrl) : null;

    const STORAGE_KEY = 'study_quest_test_v1_state';
    const COLLECTION_KEY = 'study_quest_test_v1_omikujiCollection';
    const COLLECTION_META_KEY = 'study_quest_test_v1_omikujiCollectionMeta_v1';
    const LAST_OBTAINED_KEY = 'study_quest_test_v1_omikujiLastObtained_v1';
    const LOTTERY_COLLECTION_KEY = 'omikujiCollection';
    const LOTTERY_COLLECTION_META_KEY = 'omikujiCollectionMeta_v1';
    const LOTTERY_LAST_OBTAINED_KEY = 'omikujiLastObtained_v1';
    const LOTTERY_COLLECTION_SYNC_KEY = 'study_quest_test_v1_omikujiCollectionLotterySync_v1';
    const PRACTICE_DRAW_DAILY_MODULES = Object.freeze(['vocabulary', 'grammar', 'reading', 'listening']);
    const PRACTICE_DRAW_PITY_THRESHOLD = 20;
    const PRACTICE_DRAW_PITY_MIN_ACCURACY = 0.6;
    const N1_PRACTICE_ACHIEVEMENT_CARD_ID = 'sp_yingji1';
    const N1_PRACTICE_ACHIEVEMENT_THRESHOLD = 30;

    const FORTUNES = Object.freeze([
        { id: 'sp1', rarity: 'SP', title: '感谢祭', desc: '感谢你一直以来的支持，谢谢。', weight: 1, color: '#9c27b0', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/ganxieji.png', isSpecial: true },
        { id: 'f1', rarity: 'KR', title: '旺吉', desc: '🎉你就是最帅（美）的气运之子🎉！kiki祝福你，旺！', weight: 3, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/wangji.png' },
        { id: 'f19', rarity: 'KR', title: '乐吉', desc: '喝上一口肥宅水，快乐一整天！', weight: 7, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/keleji.png' },
        { id: 'f34', rarity: 'KR', title: '肯吉', desc: '疯狂星期四，V你50。真要啊！不行，我要自己吃。', weight: 2, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/kenji.png' },
        { id: 'f21', rarity: 'KR', title: '桃吉', desc: '学习上的不如意，说不定会带来其他方面的好运哦～', weight: 3, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/taoji.png' },
        { id: 'f37', rarity: 'KR', title: '画吉', desc: '快看～，我成为一幅画了，啊啊啊啊啊啊', weight: 3, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huaji.png' },
        { id: 'f32', rarity: 'KR', title: '天吉', desc: '知识中的私语，细细聆听，那是日语之神对你的回应。', weight: 3, color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/tianji.png' },
        { id: 'f8', rarity: 'UR', title: '神吉', desc: '⛩️考神附体！今天直觉准得可怕，做阅读题一抓一个准，就算蒙的也全对！', weight: 1, color: '#d4af37', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shenji.png' },
        { id: 'f7', rarity: 'UR', title: '玉吉', desc: '一尾便是一重境界。熬过漫长的沉淀与枯燥的练习，终能修得灵动的语感。', weight: 3, color: '#F44336', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huji.png' },
        { id: 'f16', rarity: 'UR', title: '鹿吉', desc: '步履从容，一步一印，语感自然如影随形。', weight: 1, color: '#e6b422', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/luji2.png' },
        { id: 'f22', rarity: 'UR', title: '友吉', desc: '切磋琢磨之友，乃求学路上的不灭之光。', weight: 1, color: '#d4af37', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xueji.png' },
        { id: 'f30', rarity: 'UR', title: '狮吉', desc: '即使是幼小的“可爱”，终有一天也可成为草原的王！（😆）', weight: 1, color: '#d4af37', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shiji.png' },
        { id: 'f35', rarity: 'UR', title: '绯吉', desc: '软软的狗耳朵，可是为听八卦而生的哦！', weight: 1, color: '#d4af37', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/feiji.png' },
        { id: 'f2', rarity: 'SSR', title: '虎吉', desc: '运气爆棚！干什么都是如虎添翼，チョロいもんだぜ！', weight: 5, color: '#d32f2f', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huyan.png' },
        { id: 'f9', rarity: 'SSR', title: '猫吉', desc: '明确内心，不被外界所迷惑，直取自己的“目标”，走最优雅的“猫步”。', weight: 5, color: '#ec407a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/maoji2.png' },
        { id: 'f12', rarity: 'SSR', title: '鸽吉', desc: '咕咕咕，咕咕咕咕咕咕咕，咕咕？咕！', weight: 3, color: '#d32f2f', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/geji.png' },
        { id: 'f13', rarity: 'SSR', title: '蛇吉', desc: '褪下“舒适”的旧壳，灵动的语感方能重获新生。', weight: 5, color: '#ec407a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/sheji.png' },
        { id: 'f20', rarity: 'SSR', title: '憨吉', desc: '狗狗我啊，今天，指定是不行了。（不行！）', weight: 4, color: '#1976d2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/cheemsji.png' },
        { id: 'f23', rarity: 'SSR', title: '猪吉', desc: '猪突猛进，猪突猛进，猪突猛劲！冲！', weight: 4, color: '#ec407a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/zhuji.png' },
        { id: 'f26', rarity: 'SSR', title: '羊吉', desc: '昨天已成过去，明天无人能知，那就好好享受只属于我们的今天吧！', weight: 5, color: '#ec407a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yangji.png' },
        { id: 'f27', rarity: 'SSR', title: '鸭吉', desc: '累了吗，渴了吗，饿了吗，再坚持坚持，就差一点了，冲鸭！', weight: 5, color: '#1976d2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yaji.png' },
        { id: 'f28', rarity: 'SSR', title: '豹吉', desc: '他人的光辉不属于自己，正视自己的一切，扎实走好每一步才是真。', weight: 5, color: '#d32f2f', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/baoji.png' },
        { id: 'f38', rarity: 'SSR', title: '象吉', desc: '只有真正的硬实力，才会让一切“臣服”与你。', weight: 5, color: '#d32f2f', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xiangji.png' },
        { id: 'f10', rarity: 'SR', title: '蝴吉', desc: '飞舞的思绪！如蝶一般，“漂亮”的拿下今天的知识吧。', weight: 10, color: '#00897b', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/chongji.png' },
        { id: 'f3', rarity: 'SR', title: '猴吉', desc: '做不了真“大圣”，也能拥有“大圣”心，先得敢想，才能真成！', weight: 10, color: '#388e3c', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/houji.png' },
        { id: 'f36', rarity: 'SR', title: '挠吉', desc: '是玩还是学，this is a question！', weight: 10, color: '#388e3c', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/naoji.png' },
        { id: 'f6', rarity: 'SR', title: '熊吉', desc: '学饿了就吃点，吃饱了就休息，那学习呢？学习就明天再说吧。', weight: 10, color: '#7b1fa2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xiongji.png' },
        { id: 'f14', rarity: 'SR', title: '燕吉', desc: '每天只衔一个词，日积月累，也能筑起坚不可摧的语言之巢。', weight: 10, color: '#7b1fa2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yanji.png' },
        { id: 'f17', rarity: 'SR', title: '牛吉', desc: '纵使当下如对牛弹琴般不得要领，耐下性子温故知新，笨功夫自有回响。', weight: 10, color: '#546e7a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/niuji.png' },
        { id: 'f24', rarity: 'SR', title: '兔吉', desc: '兔起鹘落般的进步，恰恰蕴藏在从一到十、踏踏实实的研磨之中。', weight: 10, color: '#00897b', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/tuji.png' },
        { id: 'f29', rarity: 'SR', title: '狈吉', desc: '他人眼中的“奸”，也可以是真正的“友”。', weight: 10, color: '#546e7a', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/beiji.png' },
        { id: 'f33', rarity: 'SR', title: '碌吉', desc: '答完你的，答你的，一个一个来。', weight: 10, color: '#7b1fa2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/luji3.png' },
        { id: 'f5', rarity: 'R', title: '犬吉', desc: '温故而知新。比起新内容，今天更适合把之前的错题翻出来‘叙叙旧’哦！', weight: 30, color: '#f57c00', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/quanji.png' },
        { id: 'f4', rarity: 'R', title: '鼠吉', desc: '一点一滴地搬运，终能囤满语言的粮仓。', weight: 30, color: '#1976d2', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shuji.png' },
        { id: 'f11', rarity: 'R', title: '狐吉', desc: '🍵普普通通、平平淡淡的一天。按部就班地背单词吧，没有波澜也是一种幸福。', weight: 30, color: '#8d6e63', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/pingji.png' },
        { id: 'f15', rarity: 'R', title: '龟吉', desc: '要想“快”，先得“慢”，只有学会了放平心态去细细打磨，“快”便会自然出现。', weight: 30, color: '#8d6e63', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/guiji.png' },
        { id: 'f18', rarity: 'R', title: '鼬吉', desc: '思维若如鼬般柔软，再凶狠的学习障碍，也能轻盈越过。', weight: 30, color: '#8d6e63', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/youji.png' },
        { id: 'f31', rarity: 'R', title: '鬼吉', desc: '好意的显现，不一定是笑容，有时候也可能会是某种“恐怖😱”哦', weight: 30, color: '#8d6e63', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/eji.png' },
        { id: 'f25', rarity: 'R', title: '鵺吉', desc: '困难，即是机遇，不要畏惧不要害怕，解题之法就在其中！', weight: 30, color: '#8d6e63', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/nueji.png' },
        { id: 'f39', rarity: 'R', title: '鹰吉', desc: '日复一日的练习，必然让你练就锐利的“鹰眼”，一箭正中要害！', weight: 30, color: '#5C4A3D', icon: 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yingji.png' }
    ]);
    const ACHIEVEMENT_REWARD_FORTUNES = Object.freeze([
        { id: 'sp_yingji1', rarity: 'SP', title: '赢吉', desc: '相信自己，会赢的！', color: '#9c27b0', icon: 'takarakuji/yingji1.png', isRewardOnly: true, acquireMode: 'achievement' }
    ]);
    const PRACTICE_REWARD_FORTUNES = Object.freeze([
        { id: 'practice_anji_max', rarity: 'MR', title: '安吉', desc: '天気がいいから、散歩しましょう', color: '#4E5FA8', icon: 'takarakuji/anji.png', isRewardOnly: true },
        { id: 'practice_yaji_max', rarity: 'MR', title: '丫吉', desc: '去背你的单词，别抢我的肉啦。', color: '#8A5A35', icon: 'takarakuji/yaji2.png', isRewardOnly: true },
        { id: 'practice_geji_max', rarity: 'MR', title: '🐦吉', desc: '读到关键句时，线索像小鸟一样轻轻落回掌心，整篇文章也会突然明朗。', color: '#2F7B67', icon: 'takarakuji/geji2.png', isRewardOnly: true },
        { id: 'practice_gaoji_max', rarity: 'MR', title: '高吉', desc: '文字里的故事，就如怀中的手办一样温暖。', color: '#7A5C9E', icon: 'takarakuji/gaoji.png', isRewardOnly: true },
        { id: 'practice_shengji_max', rarity: 'MR', title: '胜吉', desc: '烟火在夜空里炸开的时候，努力终于有了形状。一步一步走到最后，也会迎来属于自己的合格时刻。', color: '#C96A2A', icon: 'takarakuji/shengji.png', isRewardOnly: true },
        { id: 'practice_ciji_past_vocab', rarity: 'MR', title: '词吉', desc: '指尖跃动的假名，是对你努力的回应', color: '#A85A3D', icon: 'takarakuji/ciji.png', isRewardOnly: true }
    ]);
    const COLLECTION_CATALOG = Object.freeze([...ACHIEVEMENT_REWARD_FORTUNES, ...PRACTICE_REWARD_FORTUNES, ...FORTUNES]);
    const RARITY_ORDER = Object.freeze(['MR', 'SP', 'KR', 'UR', 'SSR', 'SR', 'R']);
    const RARITY_COLORS = Object.freeze({
        MR: '#B7282E',
        SP: '#9c27b0',
        KR: '#000000',
        UR: '#d4af37',
        SSR: '#d32f2f',
        SR: '#00897b',
        R: '#f57c00'
    });
    const LEGACY_PRACTICE_REWARD_IDS = Object.freeze([
        'growth_vocabulary_max',
        'growth_grammar_max',
        'growth_reading_max',
        'growth_listening_max'
    ]);
    const NORMALIZED_PRACTICE_REWARD_CARD_ID_BY_ID = Object.freeze({
        growth_vocabulary_max: 'practice_yaji_max',
        growth_grammar_max: 'practice_gaoji_max',
        growth_reading_max: 'practice_geji_max',
        growth_listening_max: 'practice_anji_max',
        practice_tingji_max: 'practice_anji_max'
    });
    const PRIMARY_PRACTICE_REWARD_CARD_BY_MODULE = Object.freeze({
        vocabulary: 'practice_yaji_max',
        grammar: 'practice_gaoji_max',
        reading: 'practice_geji_max',
        listening: 'practice_anji_max'
    });
    const PRIMARY_PRACTICE_REWARD_CARD_BY_TRACK = Object.freeze({
        listening_random_exam: 'practice_anji_max'
    });
    const PRACTICE_CARD_WEIGHTS_BY_SOURCE = Object.freeze({
        n1_past_vocab: Object.freeze({
            practice_yaji_max: 7,
            practice_gaoji_max: 1,
            practice_geji_max: 1,
            practice_anji_max: 1,
            practice_ciji_past_vocab: 1
        }),
        vocabulary: Object.freeze({
            practice_yaji_max: 7,
            practice_gaoji_max: 1,
            practice_geji_max: 1,
            practice_anji_max: 1
        }),
        grammar: Object.freeze({
            practice_gaoji_max: 7,
            practice_yaji_max: 1,
            practice_geji_max: 1,
            practice_anji_max: 1
        }),
        reading: Object.freeze({
            practice_geji_max: 7,
            practice_yaji_max: 1,
            practice_gaoji_max: 1,
            practice_anji_max: 1
        }),
        listening: Object.freeze({
            practice_anji_max: 7,
            practice_yaji_max: 1,
            practice_gaoji_max: 1,
            practice_geji_max: 1
        }),
        listening_random_exam: Object.freeze({
            practice_anji_max: 7,
            practice_yaji_max: 1,
            practice_gaoji_max: 1,
            practice_geji_max: 1
        })
    });

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

    function toCatalogCard(definition) {
        if (!definition) {
            return null;
        }
        return {
            ...definition,
            icon: resolveAssetUrl(definition.icon)
        };
    }

    function getRoot() {
        return global.StudyQuestTestServer = global.StudyQuestTestServer || {};
    }

    function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
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

    function normalizeString(value) {
        return String(value == null ? '' : value).trim();
    }

    function getLocalDateKey(input) {
        const source = input instanceof Date ? input : new Date(input || Date.now());
        const year = source.getFullYear();
        const month = String(source.getMonth() + 1).padStart(2, '0');
        const day = String(source.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function normalizePracticeDrawModuleKey(value) {
        const normalizedValue = normalizeString(value);
        if (!normalizedValue || !PRACTICE_DRAW_DAILY_MODULES.includes(normalizedValue)) {
            return '';
        }
        return normalizedValue;
    }

    function clampNumber(value, minValue, maxValue) {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) {
            return minValue;
        }
        return Math.min(maxValue, Math.max(minValue, numericValue));
    }

    function normalizeRunKeySegment(value, fieldName) {
        const normalizedValue = normalizeString(value);
        if (!normalizedValue) {
            throw new Error(`StudyQuestTestServer runKey 缺少 ${fieldName}`);
        }
        return normalizedValue.replace(/\s+/g, '-').replace(/[\\/]+/g, '-');
    }

    function createRunKey(descriptor) {
        const source = descriptor && typeof descriptor === 'object' ? descriptor : {};
        const attemptStartedAt = normalizeString(source.attemptStartedAt || source.startedAt || new Date().toISOString());
        return [
            normalizeRunKeySegment(source.module, 'module'),
            normalizeRunKeySegment(source.subType, 'subType'),
            normalizeRunKeySegment(source.mode, 'mode'),
            normalizeRunKeySegment(source.scopeKey, 'scopeKey'),
            attemptStartedAt
        ].join(':');
    }

    function createDefaultState() {
        return {
            version: 2,
            economy: {
                studyXp: 0,
                shards: 0,
                totalRewardedRuns: 0
            },
            practiceLedger: {
                rewardedRunKeys: [],
                practiceDrawDaily: {},
                practiceDrawPity: {}
            },
            rewardFlow: {
                pendingDraws: {}
            },
            progress: {
                firstClearTracks: {},
                recentRewards: [],
                lastSummary: null,
                levelPracticeCounts: {},
                achievementRewards: {}
            }
        };
    }

    function isLegacyPracticeRewardCardId(cardId) {
        return LEGACY_PRACTICE_REWARD_IDS.includes(normalizeString(cardId));
    }

    function normalizePracticeRewardCardId(cardId) {
        const normalizedCardId = normalizeString(cardId);
        return NORMALIZED_PRACTICE_REWARD_CARD_ID_BY_ID[normalizedCardId] || normalizedCardId;
    }

    function normalizeLevelPracticeCounts(value) {
        const source = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
        return ['N1', 'N2', 'N3'].reduce((accumulator, level) => {
            const count = Number.parseInt(source[level], 10);
            accumulator[level] = Number.isInteger(count) && count > 0 ? count : 0;
            return accumulator;
        }, {});
    }

    function normalizeAchievementRewards(value) {
        const source = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
        return Object.keys(source).reduce((accumulator, cardId) => {
            const normalizedCardId = normalizePracticeRewardCardId(cardId);
            const record = source[cardId];
            if (!normalizedCardId || !record || typeof record !== 'object' || Array.isArray(record)) {
                return accumulator;
            }
            accumulator[normalizedCardId] = {
                cardId: normalizedCardId,
                level: normalizeString(record.level),
                threshold: clampNumber(record.threshold, 0, Number.MAX_SAFE_INTEGER),
                count: clampNumber(record.count, 0, Number.MAX_SAFE_INTEGER),
                claimedAt: normalizeString(record.claimedAt)
            };
            return accumulator;
        }, {});
    }

    function getExplicitPracticeLevel(value) {
        const normalizedLevel = normalizeString(value).toUpperCase();
        return ['N1', 'N2', 'N3'].includes(normalizedLevel) ? normalizedLevel : '';
    }

    function inferPracticeLevelFromText(value) {
        const text = normalizeString(value).toLowerCase();
        if (!text) {
            return '';
        }
        if (/(^|[^a-z0-9])n1([^a-z0-9]|$)/.test(text)
            || text.includes('textbook_n1')
            || text.includes('try-n1')
            || text.includes('text_1.html')) {
            return 'N1';
        }
        if (/(^|[^a-z0-9])n2([^a-z0-9]|$)/.test(text)
            || text.includes('textbook_n2')
            || text.includes('try-n2')
            || text.includes('text_2.html')) {
            return 'N2';
        }
        if (/(^|[^a-z0-9])n3([^a-z0-9]|$)/.test(text)) {
            return 'N3';
        }
        return '';
    }

    function inferPracticeLevel(source) {
        const explicitLevel = getExplicitPracticeLevel(source && source.level);
        if (explicitLevel) {
            return explicitLevel;
        }
        const haystack = [
            source && source.subType,
            source && source.scopeKey,
            source && source.sourcePage,
            source && source.runKey
        ].map(normalizeString).join(' ');
        return inferPracticeLevelFromText(haystack);
    }

    function mergeCollectionMetaEntry(baseEntry, incomingEntry) {
        const count = Number.parseInt(incomingEntry && incomingEntry.count, 10);
        if (!Number.isInteger(count) || count <= 0) {
            return baseEntry || null;
        }

        const nextEntry = baseEntry
            ? { ...baseEntry }
            : {
                count: 0,
                firstObtainedAt: null,
                lastObtainedAt: null,
                isNew: false,
                rarity: 'R',
                title: '',
                source: 'lab'
            };

        const firstObtainedAt = Number(incomingEntry.firstObtainedAt);
        const lastObtainedAt = Number(incomingEntry.lastObtainedAt);
        nextEntry.count += count;
        if (Number.isFinite(firstObtainedAt) && firstObtainedAt > 0) {
            nextEntry.firstObtainedAt = nextEntry.firstObtainedAt
                ? Math.min(nextEntry.firstObtainedAt, firstObtainedAt)
                : firstObtainedAt;
        }
        if (Number.isFinite(lastObtainedAt) && lastObtainedAt > 0) {
            nextEntry.lastObtainedAt = nextEntry.lastObtainedAt
                ? Math.max(nextEntry.lastObtainedAt, lastObtainedAt)
                : lastObtainedAt;
        }
        nextEntry.isNew = Boolean(nextEntry.isNew || incomingEntry.isNew);
        nextEntry.rarity = normalizeString(incomingEntry.rarity) || nextEntry.rarity;
        nextEntry.title = normalizeString(incomingEntry.title) || nextEntry.title;
        nextEntry.source = normalizeString(incomingEntry.source || nextEntry.source);
        return nextEntry;
    }

    function normalizePendingDrawRecord(record) {
        const source = record && typeof record === 'object' ? record : {};
        return {
            runKey: normalizeString(source.runKey),
            module: normalizeString(source.module),
            subType: normalizeString(source.subType),
            rewardTrack: normalizeString(source.rewardTrack),
            scopeKey: normalizeString(source.scopeKey),
            cardId: normalizePracticeRewardCardId(source.cardId),
            rarity: normalizeString(source.rarity),
            preparedAt: normalizeString(source.preparedAt),
            claimedAt: normalizeString(source.claimedAt),
            sourcePage: normalizeString(source.sourcePage)
        };
    }

    function normalizePracticeDrawDailyRecord(record) {
        const source = record && typeof record === 'object' && !Array.isArray(record) ? record : {};
        return {
            dateKey: normalizeString(source.dateKey),
            runKey: normalizeString(source.runKey),
            triggeredAt: normalizeString(source.triggeredAt),
            claimedAt: normalizeString(source.claimedAt)
        };
    }

    function normalizePracticeDrawPityRecord(record) {
        const source = record && typeof record === 'object' && !Array.isArray(record) ? record : {};
        return {
            count: Math.floor(clampNumber(source.count, 0, Number.MAX_SAFE_INTEGER)),
            lastRunKey: normalizeString(source.lastRunKey),
            updatedAt: normalizeString(source.updatedAt)
        };
    }

    function readState() {
        const parsed = safeParseJSON(global.localStorage.getItem(STORAGE_KEY), null);
        const defaults = createDefaultState();
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
            return defaults;
        }

        const nextState = {
            ...defaults,
            ...parsed,
            economy: {
                ...defaults.economy,
                ...(parsed.economy || {})
            },
            practiceLedger: {
                ...defaults.practiceLedger,
                ...(parsed.practiceLedger || {})
            },
            rewardFlow: {
                ...defaults.rewardFlow,
                ...(parsed.rewardFlow || {})
            },
            progress: {
                ...defaults.progress,
                ...(parsed.progress || {})
            }
        };

        nextState.practiceLedger.rewardedRunKeys = Array.from(new Set(
            Array.isArray(nextState.practiceLedger.rewardedRunKeys)
                ? nextState.practiceLedger.rewardedRunKeys.map((runKey) => normalizeString(runKey)).filter(Boolean)
                : []
        ));
        nextState.progress.levelPracticeCounts = normalizeLevelPracticeCounts(nextState.progress.levelPracticeCounts);
        nextState.progress.achievementRewards = normalizeAchievementRewards(nextState.progress.achievementRewards);
        const practiceDrawDaily = nextState.practiceLedger.practiceDrawDaily
            && typeof nextState.practiceLedger.practiceDrawDaily === 'object'
            && !Array.isArray(nextState.practiceLedger.practiceDrawDaily)
            ? nextState.practiceLedger.practiceDrawDaily
            : {};
        nextState.practiceLedger.practiceDrawDaily = Object.keys(practiceDrawDaily).reduce((accumulator, moduleKey) => {
            const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
            if (!normalizedModule) {
                return accumulator;
            }
            const normalizedRecord = normalizePracticeDrawDailyRecord(practiceDrawDaily[moduleKey]);
            if (!normalizedRecord.dateKey) {
                return accumulator;
            }
            accumulator[normalizedModule] = normalizedRecord;
            return accumulator;
        }, {});

        const practiceDrawPity = nextState.practiceLedger.practiceDrawPity
            && typeof nextState.practiceLedger.practiceDrawPity === 'object'
            && !Array.isArray(nextState.practiceLedger.practiceDrawPity)
            ? nextState.practiceLedger.practiceDrawPity
            : {};
        nextState.practiceLedger.practiceDrawPity = Object.keys(practiceDrawPity).reduce((accumulator, moduleKey) => {
            const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
            if (!normalizedModule) {
                return accumulator;
            }
            const normalizedRecord = normalizePracticeDrawPityRecord(practiceDrawPity[moduleKey]);
            if (normalizedRecord.count <= 0 && !normalizedRecord.lastRunKey && !normalizedRecord.updatedAt) {
                return accumulator;
            }
            accumulator[normalizedModule] = normalizedRecord;
            return accumulator;
        }, {});

        const pendingDraws = nextState.rewardFlow.pendingDraws && typeof nextState.rewardFlow.pendingDraws === 'object'
            ? nextState.rewardFlow.pendingDraws
            : {};
        nextState.rewardFlow.pendingDraws = Object.keys(pendingDraws).reduce((accumulator, runKey) => {
            const normalizedRunKey = normalizeString(runKey);
            if (!normalizedRunKey) {
                return accumulator;
            }
            const normalizedRecord = normalizePendingDrawRecord(pendingDraws[runKey]);
            if (!normalizedRecord.runKey) {
                normalizedRecord.runKey = normalizedRunKey;
            }
            accumulator[normalizedRunKey] = normalizedRecord;
            return accumulator;
        }, {});

        return nextState;
    }

    function saveState(state) {
        global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return state;
    }

    function getCollectionMeta() {
        const rawMeta = safeParseJSON(global.localStorage.getItem(COLLECTION_META_KEY), {});
        if (!rawMeta || typeof rawMeta !== 'object' || Array.isArray(rawMeta)) {
            return {};
        }

        return Object.keys(rawMeta).reduce((accumulator, id) => {
            const entry = rawMeta[id];
            const normalizedId = normalizePracticeRewardCardId(id);
            if (!normalizedId || !entry || typeof entry !== 'object' || Array.isArray(entry)) {
                return accumulator;
            }
            if (isLegacyPracticeRewardCardId(normalizedId)) {
                return accumulator;
            }
            if (!getCardDefinition(normalizedId)) {
                return accumulator;
            }

            const mergedEntry = mergeCollectionMetaEntry(accumulator[normalizedId], entry);
            if (mergedEntry) {
                accumulator[normalizedId] = mergedEntry;
            }
            return accumulator;
        }, {});
    }

    function saveCollectionMeta(meta) {
        global.localStorage.setItem(COLLECTION_META_KEY, JSON.stringify(meta));
        return meta;
    }

    function getUnlockedIdsFromMeta(meta) {
        return Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0 && Boolean(getCardDefinition(id));
        });
    }

    function saveCollectionIds(ids) {
        const normalizedIds = Array.from(new Set(
            Array.isArray(ids) ? ids.map((id) => normalizePracticeRewardCardId(id)).filter(Boolean) : []
        ));
        global.localStorage.setItem(COLLECTION_KEY, JSON.stringify(normalizedIds));
        return normalizedIds;
    }

    function getLastObtained() {
        const parsed = safeParseJSON(global.localStorage.getItem(LAST_OBTAINED_KEY), null);
        if (!parsed || typeof parsed !== 'object') {
            return null;
        }

        const id = normalizePracticeRewardCardId(parsed.id);
        if (!id || isLegacyPracticeRewardCardId(id) || !getCardDefinition(id)) {
            return null;
        }

        return {
            id,
            obtainedAt: Number(parsed.obtainedAt) || null
        };
    }

    function saveLastObtained(id, obtainedAt) {
        const normalizedId = normalizePracticeRewardCardId(id);
        if (!normalizedId) {
            global.localStorage.removeItem(LAST_OBTAINED_KEY);
            return null;
        }

        const payload = {
            id: normalizedId,
            obtainedAt: Number(obtainedAt) || Date.now()
        };
        global.localStorage.setItem(LAST_OBTAINED_KEY, JSON.stringify(payload));
        return payload;
    }

    function getLotteryCollectionMeta() {
        const rawMeta = safeParseJSON(global.localStorage.getItem(LOTTERY_COLLECTION_META_KEY), {});
        if (!rawMeta || typeof rawMeta !== 'object' || Array.isArray(rawMeta)) {
            return {};
        }

        return Object.keys(rawMeta).reduce((accumulator, id) => {
            const entry = rawMeta[id];
            const normalizedId = normalizePracticeRewardCardId(id);
            if (!normalizedId || !entry || typeof entry !== 'object' || Array.isArray(entry)) {
                return accumulator;
            }
            const mergedEntry = mergeCollectionMetaEntry(accumulator[normalizedId], entry);
            if (mergedEntry) {
                accumulator[normalizedId] = mergedEntry;
            }
            return accumulator;
        }, {});
    }

    function saveLotteryCollectionMeta(meta) {
        global.localStorage.setItem(LOTTERY_COLLECTION_META_KEY, JSON.stringify(meta));
        return meta;
    }

    function saveLotteryCollectionIds(ids) {
        const normalizedIds = Array.from(new Set(
            Array.isArray(ids) ? ids.map((id) => normalizePracticeRewardCardId(id)).filter(Boolean) : []
        ));
        global.localStorage.setItem(LOTTERY_COLLECTION_KEY, JSON.stringify(normalizedIds));
        return normalizedIds;
    }

    function saveLotteryLastObtained(id, obtainedAt) {
        const normalizedId = normalizePracticeRewardCardId(id);
        if (!normalizedId) {
            global.localStorage.removeItem(LOTTERY_LAST_OBTAINED_KEY);
            return null;
        }

        const payload = {
            id: normalizedId,
            obtainedAt: Number(obtainedAt) || Date.now()
        };
        global.localStorage.setItem(LOTTERY_LAST_OBTAINED_KEY, JSON.stringify(payload));
        return payload;
    }

    function getLotteryCollectionSyncMeta() {
        const rawMeta = safeParseJSON(global.localStorage.getItem(LOTTERY_COLLECTION_SYNC_KEY), {});
        if (!rawMeta || typeof rawMeta !== 'object' || Array.isArray(rawMeta)) {
            return {};
        }

        return Object.keys(rawMeta).reduce((accumulator, id) => {
            const normalizedId = normalizePracticeRewardCardId(id);
            const entry = rawMeta[id];
            const count = Number.parseInt(entry && entry.count, 10);
            if (!normalizedId || !Number.isInteger(count) || count <= 0) {
                return accumulator;
            }

            accumulator[normalizedId] = {
                count,
                lastSyncedAt: Number(entry.lastSyncedAt) || null,
                lastObtainedAt: Number(entry.lastObtainedAt) || null
            };
            return accumulator;
        }, {});
    }

    function saveLotteryCollectionSyncMeta(meta) {
        global.localStorage.setItem(LOTTERY_COLLECTION_SYNC_KEY, JSON.stringify(meta));
        return meta;
    }

    function markLotteryCollectionSynced(cardId, increment, obtainedAt) {
        const normalizedId = normalizePracticeRewardCardId(cardId);
        const countIncrement = Number.parseInt(increment, 10);
        if (!normalizedId || !Number.isInteger(countIncrement) || countIncrement <= 0) {
            return null;
        }

        const syncMeta = getLotteryCollectionSyncMeta();
        const existing = syncMeta[normalizedId] || { count: 0 };
        syncMeta[normalizedId] = {
            count: Number(existing.count || 0) + countIncrement,
            lastSyncedAt: Date.now(),
            lastObtainedAt: Number(obtainedAt) || Date.now()
        };
        saveLotteryCollectionSyncMeta(syncMeta);
        return syncMeta[normalizedId];
    }

    function syncPracticeRewardToLotteryCollection(cardDefinition, obtainedAt, increment) {
        const normalizedId = normalizePracticeRewardCardId(cardDefinition && cardDefinition.id);
        const countIncrement = Number.parseInt(increment, 10);
        const definition = normalizedId ? getCardDefinition(normalizedId) || cardDefinition : null;
        if (!definition || !normalizedId || !Number.isInteger(countIncrement) || countIncrement <= 0) {
            return false;
        }

        const now = Number(obtainedAt) || Date.now();
        const meta = getLotteryCollectionMeta();
        const existingRecord = meta[normalizedId] || null;
        const nextRecord = existingRecord
            ? { ...existingRecord }
            : {
                count: 0,
                firstObtainedAt: now,
                lastObtainedAt: now,
                isNew: true,
                rarity: definition.rarity,
                title: definition.title,
                source: 'practice'
            };

        nextRecord.count = Number(nextRecord.count || 0) + countIncrement;
        nextRecord.firstObtainedAt = nextRecord.firstObtainedAt || now;
        nextRecord.lastObtainedAt = now;
        nextRecord.isNew = existingRecord ? Boolean(existingRecord.isNew) : true;
        nextRecord.rarity = definition.rarity;
        nextRecord.title = definition.title;
        nextRecord.source = 'practice';
        meta[normalizedId] = nextRecord;

        saveLotteryCollectionMeta(meta);
        saveLotteryCollectionIds(getUnlockedIdsFromMeta(meta));
        saveLotteryLastObtained(normalizedId, now);
        markLotteryCollectionSynced(normalizedId, countIncrement, now);
        return true;
    }

    function resetLabState() {
        [
            STORAGE_KEY,
            COLLECTION_KEY,
            COLLECTION_META_KEY,
            LAST_OBTAINED_KEY
        ].forEach((key) => global.localStorage.removeItem(key));
        return createDefaultState();
    }

    function getCardDefinition(cardId) {
        const normalizedId = normalizePracticeRewardCardId(cardId);
        if (!normalizedId) {
            return null;
        }
        const catalogApi = global.OmikujiCatalog;
        if (catalogApi && typeof catalogApi.getFortuneById === 'function') {
            const catalogCard = catalogApi.getFortuneById(normalizedId);
            if (catalogCard) {
                return catalogCard;
            }
        }
        return COLLECTION_CATALOG.find((card) => card.id === normalizedId) || null;
    }

    function buildCollectionState(options) {
        const source = options && typeof options === 'object' ? options : {};
        const highlightId = normalizeString(source.highlightId);
        const meta = getCollectionMeta();
        const unlockedIds = saveCollectionIds(getUnlockedIdsFromMeta(meta));
        const lastObtained = getLastObtained();

        return {
            catalog: COLLECTION_CATALOG.map((card) => deepClone(toCatalogCard(card))),
            meta: deepClone(meta),
            unlockedIds: unlockedIds.slice(),
            totalUnlocked: unlockedIds.length,
            totalCards: COLLECTION_CATALOG.length,
            lastObtained: lastObtained ? { ...lastObtained } : null,
            highlightId
        };
    }

    function getCollectionState(options) {
        return buildCollectionState(options);
    }

    function markCardPreviewed(cardId) {
        const normalizedId = normalizeString(cardId);
        if (!normalizedId) {
            return false;
        }

        const meta = getCollectionMeta();
        if (!meta[normalizedId] || !meta[normalizedId].isNew) {
            return false;
        }

        meta[normalizedId].isNew = false;
        saveCollectionMeta(meta);
        return true;
    }

    function getLabState() {
        const state = readState();
        return {
            ...deepClone(state),
            collection: buildCollectionState()
        };
    }

    function getState() {
        return getLabState();
    }

    function resetState() {
        return resetLabState();
    }

    function getAnsweredCount(result) {
        return result.answeredCount > 0 ? result.answeredCount : result.questionCount;
    }

    function hasClaimedPracticeDrawForModuleToday(state, moduleKey) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) {
            return false;
        }
        const ledger = state && state.practiceLedger && state.practiceLedger.practiceDrawDaily
            ? state.practiceLedger.practiceDrawDaily
            : {};
        const record = normalizePracticeDrawDailyRecord(ledger[normalizedModule]);
        return record.dateKey === getLocalDateKey() && Boolean(record.claimedAt);
    }

    function markPracticeDrawClaimedForModuleToday(state, moduleKey, runKey, claimedAt) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) {
            return;
        }
        const claimedAtValue = normalizeString(claimedAt || new Date().toISOString());
        state.practiceLedger.practiceDrawDaily[normalizedModule] = {
            dateKey: getLocalDateKey(),
            runKey: normalizeString(runKey),
            triggeredAt: claimedAtValue,
            claimedAt: claimedAtValue
        };
    }

    function getPracticeDrawPityRecord(state, moduleKey) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule) {
            return normalizePracticeDrawPityRecord(null);
        }
        const ledger = state && state.practiceLedger && state.practiceLedger.practiceDrawPity
            ? state.practiceLedger.practiceDrawPity
            : {};
        return normalizePracticeDrawPityRecord(ledger[normalizedModule]);
    }

    function setPracticeDrawPityRecord(state, moduleKey, record) {
        const normalizedModule = normalizePracticeDrawModuleKey(moduleKey);
        if (!normalizedModule || !state || !state.practiceLedger) {
            return normalizePracticeDrawPityRecord(null);
        }
        if (!state.practiceLedger.practiceDrawPity || typeof state.practiceLedger.practiceDrawPity !== 'object') {
            state.practiceLedger.practiceDrawPity = {};
        }
        const normalizedRecord = normalizePracticeDrawPityRecord(record);
        state.practiceLedger.practiceDrawPity[normalizedModule] = normalizedRecord;
        return normalizedRecord;
    }

    function incrementPracticeDrawPity(state, moduleKey, result) {
        const previousRecord = getPracticeDrawPityRecord(state, moduleKey);
        const nextRecord = {
            count: previousRecord.count + 1,
            lastRunKey: normalizeString(result && result.runKey),
            updatedAt: normalizeString(result && result.finishedAt) || new Date().toISOString()
        };
        return setPracticeDrawPityRecord(state, moduleKey, nextRecord);
    }

    function resetPracticeDrawPity(state, moduleKey, result) {
        return setPracticeDrawPityRecord(state, moduleKey, {
            count: 0,
            lastRunKey: normalizeString(result && result.runKey),
            updatedAt: normalizeString(result && result.finishedAt) || new Date().toISOString()
        });
    }

    function syncHistoricalLevelPracticeCounts(state) {
        if (!state || !state.progress || !state.practiceLedger) {
            return false;
        }
        const rewardedRunKeys = Array.isArray(state.practiceLedger.rewardedRunKeys)
            ? state.practiceLedger.rewardedRunKeys
            : [];
        const historicalN1Count = rewardedRunKeys.reduce((count, runKey) => {
            return inferPracticeLevel({ runKey }) === 'N1' ? count + 1 : count;
        }, 0);
        const currentN1Count = Number(state.progress.levelPracticeCounts.N1) || 0;
        if (historicalN1Count > currentN1Count) {
            state.progress.levelPracticeCounts.N1 = historicalN1Count;
            return true;
        }
        return false;
    }

    function addLevelPracticeProgress(state, result) {
        const level = inferPracticeLevel(result);
        if (!level) {
            return { level: '', didChange: false };
        }
        const currentCount = Number(state.progress.levelPracticeCounts[level]) || 0;
        state.progress.levelPracticeCounts[level] = currentCount + 1;
        return { level, didChange: true };
    }

    function maybeGrantN1PracticeAchievement(state, obtainedAt) {
        const count = Number(state && state.progress && state.progress.levelPracticeCounts
            ? state.progress.levelPracticeCounts.N1
            : 0) || 0;
        if (count < N1_PRACTICE_ACHIEVEMENT_THRESHOLD) {
            return { didChange: false, achievement: null };
        }

        const achievements = state.progress.achievementRewards || {};
        const existingAchievement = achievements[N1_PRACTICE_ACHIEVEMENT_CARD_ID];
        if (existingAchievement && existingAchievement.claimedAt) {
            return { didChange: false, achievement: null };
        }

        const cardDefinition = getCardDefinition(N1_PRACTICE_ACHIEVEMENT_CARD_ID);
        if (!cardDefinition) {
            return { didChange: false, achievement: null };
        }

        const now = Number(obtainedAt) || Date.now();
        const meta = getCollectionMeta();
        const existingCardRecord = meta[N1_PRACTICE_ACHIEVEMENT_CARD_ID];
        const alreadyOwned = Boolean(existingCardRecord && Number(existingCardRecord.count) > 0);
        const cardResult = alreadyOwned
            ? createCardSnapshot(N1_PRACTICE_ACHIEVEMENT_CARD_ID)
            : recordCard(cardDefinition, now);

        achievements[N1_PRACTICE_ACHIEVEMENT_CARD_ID] = {
            cardId: N1_PRACTICE_ACHIEVEMENT_CARD_ID,
            level: 'N1',
            threshold: N1_PRACTICE_ACHIEVEMENT_THRESHOLD,
            count,
            claimedAt: new Date(now).toISOString()
        };
        state.progress.achievementRewards = achievements;

        if (alreadyOwned) {
            return { didChange: true, achievement: null };
        }

        return {
            didChange: true,
            achievement: {
                type: 'level_practice_count',
                level: 'N1',
                threshold: N1_PRACTICE_ACHIEVEMENT_THRESHOLD,
                count,
                card: cardResult
            }
        };
    }

    function syncPracticeAchievements(state, result, obtainedAt) {
        const changedByHistory = syncHistoricalLevelPracticeCounts(state);
        let changedByRun = false;
        const resultLevel = result ? inferPracticeLevel(result) : '';
        const runAlreadyRecorded = Boolean(result && Array.isArray(state.practiceLedger.rewardedRunKeys)
            && state.practiceLedger.rewardedRunKeys.includes(result.runKey));
        if (result && !runAlreadyRecorded) {
            changedByRun = addLevelPracticeProgress(state, result).didChange;
        }
        const achievementGrant = resultLevel === 'N1'
            ? maybeGrantN1PracticeAchievement(state, obtainedAt)
            : { didChange: false, achievement: null };
        const achievement = achievementGrant.achievement;
        return {
            didChange: changedByHistory || changedByRun || achievementGrant.didChange,
            achievements: achievement ? [achievement] : []
        };
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

    function calculateBaseRewards(result) {
        const answeredCount = getAnsweredCount(result);
        return {
            studyXp: 6
                + Math.floor(answeredCount / 4)
                + (result.accuracy >= 1 ? 4 : result.accuracy >= 0.9 ? 3 : result.accuracy >= 0.75 ? 2 : 0)
                + (result.challengeCleared ? 2 : 0),
            shards: 1
                + (result.accuracy >= 1 ? 1 : 0)
                + (result.mode === 'final' ? 1 : 0)
        };
    }

    function normalizePracticePayload(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const answeredCount = clampNumber(source.answeredCount, 0, Number.MAX_SAFE_INTEGER);
        const correctCount = clampNumber(source.correctCount, 0, answeredCount || Number.MAX_SAFE_INTEGER);
        const computedAccuracy = answeredCount > 0 ? correctCount / answeredCount : 0;
        const result = {
            runKey: normalizeString(source.runKey),
            module: normalizeString(source.module),
            subType: normalizeString(source.subType),
            rewardTrack: normalizeString(source.rewardTrack),
            mode: normalizeString(source.mode),
            scopeKey: normalizeString(source.scopeKey),
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
            challengeCleared: Boolean(source.challengeCleared),
            cleared: Boolean(source.cleared),
            bestStreak: clampNumber(source.bestStreak, 0, Number.MAX_SAFE_INTEGER),
            usedHints: clampNumber(source.usedHints, 0, Number.MAX_SAFE_INTEGER),
            finishedAt: normalizeString(source.finishedAt || new Date().toISOString()),
            extra: source.extra && typeof source.extra === 'object' && !Array.isArray(source.extra)
                ? deepClone(source.extra)
                : {}
        };

        if (!result.runKey) {
            throw new Error('StudyQuestTestServer completeRun 缺少 runKey');
        }
        return result;
    }

    function getTrackKey(result) {
        return `${result.module}:${result.subType}`;
    }

    function getPracticeRewardSourceKey(result) {
        const rewardTrack = normalizeString(result && result.rewardTrack);
        if (rewardTrack && (
            PRIMARY_PRACTICE_REWARD_CARD_BY_TRACK[rewardTrack]
            || PRACTICE_CARD_WEIGHTS_BY_SOURCE[rewardTrack]
        )) {
            return rewardTrack;
        }
        return normalizeString(result && result.module);
    }

    function rollFromChance(chance) {
        return Math.random() < chance;
    }

    function getPracticeDrawAccuracy(result) {
        return result && Number.isFinite(Number(result.accuracy)) ? Number(result.accuracy) : 0;
    }

    function canAccruePracticeDrawPity(result) {
        return getPracticeDrawAccuracy(result) >= PRACTICE_DRAW_PITY_MIN_ACCURACY;
    }

    function getDrawOfferChance(accuracy) {
        if (accuracy >= 0.9) {
            return 0.12;
        }
        if (accuracy >= 0.7) {
            return 0.05;
        }
        if (accuracy >= 0.5) {
            return 0.015;
        }
        return 0.003;
    }

    function createDrawOffer(result, state) {
        const moduleKey = normalizePracticeDrawModuleKey(result && result.module);
        const accuracy = getPracticeDrawAccuracy(result);
        const canAccruePity = moduleKey && canAccruePracticeDrawPity(result);
        const pityRecord = canAccruePity
            ? incrementPracticeDrawPity(state, moduleKey, result)
            : getPracticeDrawPityRecord(state, moduleKey);
        if (moduleKey && hasClaimedPracticeDrawForModuleToday(state, moduleKey)) {
            return {
                available: false,
                chance: 0,
                runKey: result && result.runKey ? result.runKey : '',
                entryLabel: '🐶',
                blockedByDailyLimit: true,
                guaranteedByPity: false,
                reason: 'daily_limit',
                pityCount: pityRecord.count,
                pityThreshold: PRACTICE_DRAW_PITY_THRESHOLD
            };
        }
        const chance = getDrawOfferChance(accuracy);
        const guaranteedByPity = canAccruePity && pityRecord.count >= PRACTICE_DRAW_PITY_THRESHOLD;
        const available = guaranteedByPity || rollFromChance(chance);
        if (available && moduleKey) {
            resetPracticeDrawPity(state, moduleKey, result);
        }
        return {
            available,
            chance,
            runKey: result && result.runKey ? result.runKey : '',
            entryLabel: '🐶',
            blockedByDailyLimit: false,
            guaranteedByPity: Boolean(guaranteedByPity),
            reason: guaranteedByPity ? 'pity' : (available ? 'random' : 'chance_miss'),
            pityCount: available ? 0 : pityRecord.count,
            pityThreshold: PRACTICE_DRAW_PITY_THRESHOLD
        };
    }

    function createSuppressedDrawOffer(result, reason, state) {
        const moduleKey = normalizePracticeDrawModuleKey(result && result.module);
        const canAccruePity = state && moduleKey && canAccruePracticeDrawPity(result);
        const pityRecord = canAccruePity
            ? incrementPracticeDrawPity(state, moduleKey, result)
            : getPracticeDrawPityRecord(state, moduleKey);
        return {
            available: false,
            chance: 0,
            runKey: result && result.runKey ? result.runKey : '',
            entryLabel: '🐶',
            blockedByDailyLimit: false,
            blockedByAchievement: reason === 'achievement_draw',
            guaranteedByPity: false,
            reason: reason || 'suppressed',
            pityCount: pityRecord.count,
            pityThreshold: PRACTICE_DRAW_PITY_THRESHOLD
        };
    }

    function createAchievementDraw(result, achievementResult) {
        const achievements = achievementResult && Array.isArray(achievementResult.achievements)
            ? achievementResult.achievements
            : [];
        const achievement = achievements.find((entry) => entry && entry.card && entry.card.cardId);
        if (!achievement) {
            return {
                available: false,
                runKey: result && result.runKey ? result.runKey : '',
                card: null
            };
        }
        return {
            available: true,
            runKey: result && result.runKey ? result.runKey : '',
            type: achievement.type || 'level_practice_count',
            level: achievement.level || 'N1',
            threshold: achievement.threshold || N1_PRACTICE_ACHIEVEMENT_THRESHOLD,
            count: achievement.count || N1_PRACTICE_ACHIEVEMENT_THRESHOLD,
            reason: 'n1_practice_30',
            card: achievement.card
        };
    }

    function getGrowthCardChance(accuracy) {
        if (accuracy >= 0.9) {
            return 0.38;
        }
        if (accuracy >= 0.7) {
            return 0.22;
        }
        if (accuracy >= 0.5) {
            return 0.12;
        }
        return 0.05;
    }

    function pickWeightedPracticeRewardCardId(result) {
        const weights = PRACTICE_CARD_WEIGHTS_BY_SOURCE[getPracticeRewardSourceKey(result)];
        const pool = weights && typeof weights === 'object'
            ? weights
            : {
                practice_gaoji_max: 1,
                practice_yaji_max: 1,
                practice_geji_max: 1
            };
        const entries = Object.entries(pool).filter((entry) => {
            return Number(entry[1]) > 0;
        });
        if (!entries.length) {
            return '';
        }
        const totalWeight = entries.reduce((sum, entry) => sum + Number(entry[1]), 0);
        let cursor = Math.random() * totalWeight;
        for (const [cardId, weight] of entries) {
            cursor -= Number(weight);
            if (cursor <= 0) {
                return cardId;
            }
        }
        return entries[entries.length - 1][0];
    }

    function pickGrowthCardDefinition(result) {
        if (!rollFromChance(getGrowthCardChance(result.accuracy))) {
            return null;
        }

        return getCardDefinition(pickWeightedPracticeRewardCardId(result));
    }

    function pickPreparedDrawCardDefinition(result, state) {
        const rewardSourceKey = getPracticeRewardSourceKey(result);
        const growthCard = pickGrowthCardDefinition(result);
        return growthCard || pickCardDefinition(result, state, pickDrawRarity(result.accuracy));
    }

    function pickDrawRarity(accuracy) {
        const roll = Math.random();
        if (accuracy >= 0.9) {
            if (roll < 0.03) {
                return 'KR';
            }
            if (roll < 0.12) {
                return 'UR';
            }
            if (roll < 0.32) {
                return 'SSR';
            }
            if (roll < 0.58) {
                return 'SR';
            }
            return 'R';
        }
        if (accuracy >= 0.7) {
            if (roll < 0.03) {
                return 'UR';
            }
            if (roll < 0.17) {
                return 'SSR';
            }
            if (roll < 0.43) {
                return 'SR';
            }
            return 'R';
        }
        if (accuracy >= 0.5) {
            if (roll < 0.08) {
                return 'SR';
            }
            if (roll < 0.18) {
                return 'SSR';
            }
            return 'R';
        }
        return 'R';
    }

    function pickCardDefinition(result, state, rarity) {
        const pool = FORTUNES.filter((card) => card.rarity === rarity && !card.isSpecial);
        if (!pool.length) {
            throw new Error(`没有可用的 ${rarity} 卡池`);
        }

        const meta = getCollectionMeta();
        const rotationSeed = Number(state.economy.totalRewardedRuns || 0)
            + Object.keys(meta).length
            + getAnsweredCount(result)
            + Math.floor(result.accuracy * 10);

        return pool[rotationSeed % pool.length];
    }

    function createCardSnapshot(cardId) {
        const definition = getCardDefinition(cardId);
        if (!definition) {
            return null;
        }

        const meta = getCollectionMeta();
        const record = meta[cardId];
        const count = record ? Number(record.count || 0) : 0;

        return {
            granted: count > 0,
            cardId: definition.id,
            rarity: definition.rarity,
            title: definition.title,
            subtitle: '',
            flavor: definition.desc,
            desc: definition.desc,
            color: definition.color,
            icon: resolveAssetUrl(definition.icon),
            sourceModule: 'lottery',
            sourceLabel: '图鉴',
            art: {
                accent: definition.color,
                glow: definition.color
            },
            isDuplicate: count > 1,
            count,
            isNew: record ? Boolean(record.isNew) : false
        };
    }

    function recordCard(cardDefinition, obtainedAt) {
        const meta = getCollectionMeta();
        const existingRecord = meta[cardDefinition.id] || null;
        const now = Number(obtainedAt) || Date.now();
        const isDuplicate = Boolean(existingRecord && existingRecord.count > 0);

        meta[cardDefinition.id] = {
            count: existingRecord ? Number(existingRecord.count || 0) + 1 : 1,
            firstObtainedAt: existingRecord && existingRecord.firstObtainedAt ? existingRecord.firstObtainedAt : now,
            lastObtainedAt: now,
            isNew: true,
            rarity: cardDefinition.rarity,
            title: cardDefinition.title,
            source: 'practice'
        };

        saveCollectionMeta(meta);
        saveCollectionIds(getUnlockedIdsFromMeta(meta));
        saveLastObtained(cardDefinition.id, now);
        syncPracticeRewardToLotteryCollection(cardDefinition, now, 1);

        return {
            granted: true,
            cardId: cardDefinition.id,
            rarity: cardDefinition.rarity,
            title: cardDefinition.title,
            subtitle: '',
            flavor: cardDefinition.desc,
            desc: cardDefinition.desc,
            color: cardDefinition.color,
            icon: resolveAssetUrl(cardDefinition.icon),
            sourceModule: 'lottery',
            sourceLabel: '图鉴',
            art: {
                accent: cardDefinition.color,
                glow: cardDefinition.color
            },
            isDuplicate,
            count: meta[cardDefinition.id].count,
            isNew: true
        };
    }

    function buildSummary(result, summaryContext, reason) {
        if (reason === 'duplicate_run') {
            return {
                headline: '这一轮已经领过奖励了',
                detail: '同一轮不会重复发奖。'
            };
        }
        if (reason === 'not_effective') {
            if (result.mode === 'challenge' && !result.challengeCleared) {
                return {
                    headline: '挑战未通过',
                    detail: '本轮挑战失败，不进入奖励结算。'
                };
            }
            return {
                headline: '这轮没有进入奖励结算',
                detail: '当前题量还没达到奖励门槛。'
            };
        }
        if (summaryContext && summaryContext.achievementDraw && summaryContext.achievementDraw.available) {
            return {
                headline: '赢吉来了',
                detail: 'N1 练习累计 30 次，特别抽签将在结算界面自动开启。'
            };
        }
        if (summaryContext && summaryContext.drawOffer && summaryContext.drawOffer.available) {
            return {
                headline: '🐶来了',
                detail: '本轮出现了一次练习抽签机会。'
            };
        }
        return {
            headline: '本轮完成',
            detail: '继续下一轮练习。'
        };
    }

    function buildClaimSummary(cardResult) {
        return {
            headline: cardResult.isDuplicate ? '重复卡已入账' : '新卡已入藏',
            detail: `${cardResult.rarity} · ${cardResult.title} 已收入图鉴。`
        };
    }

    function dispatchLabEvent(name, detail) {
        if (typeof global.dispatchEvent !== 'function' || typeof global.CustomEvent !== 'function') {
            return;
        }
        global.dispatchEvent(new global.CustomEvent(name, { detail }));
    }

    function startRun(descriptor) {
        const source = descriptor && typeof descriptor === 'object' ? descriptor : {};
        const attemptStartedAt = normalizeString(source.attemptStartedAt || new Date().toISOString());
        const runKey = createRunKey({
            module: source.module,
            subType: source.subType,
            mode: source.mode,
            scopeKey: source.scopeKey,
            attemptStartedAt
        });

        return {
            runKey,
            attemptStartedAt,
            descriptor: {
                module: normalizeString(source.module),
                subType: normalizeString(source.subType),
                rewardTrack: normalizeString(source.rewardTrack),
                mode: normalizeString(source.mode),
                scopeKey: normalizeString(source.scopeKey)
            }
        };
    }

    function completeRun(payload) {
        const result = normalizePracticePayload(payload);
        const existingState = readState();
        if (existingState.practiceLedger.rewardedRunKeys.includes(result.runKey)) {
            return {
                accepted: false,
                reason: 'duplicate_run',
                summary: buildSummary(result, {}, 'duplicate_run')
            };
        }

        if (!isEffectivePractice(result)) {
            return {
                accepted: false,
                reason: 'not_effective',
                summary: buildSummary(result, {}, 'not_effective')
            };
        }

        const state = existingState;
        const rewards = calculateBaseRewards(result);
        const trackKey = getTrackKey(result);
        state.economy.studyXp += rewards.studyXp;
        state.economy.shards += rewards.shards;
        state.economy.totalRewardedRuns += 1;
        state.progress.firstClearTracks[trackKey] = true;
        const achievementResult = syncPracticeAchievements(state, result, result.finishedAt);
        state.practiceLedger.rewardedRunKeys.push(result.runKey);
        const achievementDraw = createAchievementDraw(result, achievementResult);
        const drawOffer = achievementDraw.available
            ? createSuppressedDrawOffer(result, 'achievement_draw', state)
            : createDrawOffer(result, state);
        const cardResult = {
            granted: false,
            cardId: '',
            rarity: '',
            title: '',
            subtitle: '',
            flavor: '',
            desc: '',
            color: '',
            icon: '',
            sourceModule: '',
            sourceLabel: '',
            art: null,
            isDuplicate: false,
            count: 0,
            isNew: false,
            reason: achievementDraw.available
                ? 'achievement_draw'
                : (drawOffer.available ? 'pending_draw' : 'no_draw_offer')
        };

        if (drawOffer.available) {
            const preparedCard = pickPreparedDrawCardDefinition(result, state);
            state.rewardFlow.pendingDraws[result.runKey] = {
                runKey: result.runKey,
                module: result.module,
                subType: result.subType,
                rewardTrack: result.rewardTrack,
                scopeKey: result.scopeKey,
                cardId: preparedCard.id,
                rarity: preparedCard.rarity,
                preparedAt: result.finishedAt,
                claimedAt: '',
                sourcePage: result.sourcePage
            };
        }

        state.progress.lastSummary = {
            runKey: result.runKey,
            module: result.module,
            rewardTrack: result.rewardTrack,
            mode: result.mode,
            scopeKey: result.scopeKey,
            finishedAt: result.finishedAt,
            rewards: deepClone(rewards),
            drawOffer: {
                available: drawOffer.available,
                runKey: result.runKey,
                reason: drawOffer.reason || '',
                guaranteedByPity: Boolean(drawOffer.guaranteedByPity),
                pityCount: Number.isFinite(Number(drawOffer.pityCount)) ? Number(drawOffer.pityCount) : 0,
                pityThreshold: PRACTICE_DRAW_PITY_THRESHOLD
            },
            achievementDraw: {
                available: achievementDraw.available,
                runKey: result.runKey,
                cardId: achievementDraw.card && achievementDraw.card.cardId ? achievementDraw.card.cardId : ''
            },
            card: {
                granted: false,
                cardId: '',
                rarity: '',
                title: '',
                isDuplicate: false,
                count: 0
            },
            achievements: achievementResult.achievements.map((achievement) => ({
                type: achievement.type,
                level: achievement.level,
                threshold: achievement.threshold,
                count: achievement.count,
                cardId: achievement.card && achievement.card.cardId ? achievement.card.cardId : ''
            }))
        };
        state.progress.recentRewards = [
            deepClone(state.progress.lastSummary),
            ...(Array.isArray(state.progress.recentRewards) ? state.progress.recentRewards : [])
        ].slice(0, 8);

        saveState(state);
        dispatchLabEvent('studyquestlab:practice-reward', {
            runKey: result.runKey,
            rewards: deepClone(rewards),
            practice: deepClone(result),
            achievements: deepClone(achievementResult.achievements),
            achievementDraw: deepClone(achievementDraw)
        });

        return {
            accepted: true,
            practice: deepClone(result),
            rewards: deepClone(rewards),
            card: deepClone(cardResult),
            achievements: deepClone(achievementResult.achievements),
            achievementDraw: deepClone(achievementDraw),
            drawOffer: deepClone(drawOffer),
            summary: buildSummary(result, { drawOffer, achievementDraw }, ''),
            collection: buildCollectionState(),
            state: getState(),
            labState: getLabState()
        };
    }

    function claimPendingDraw(runKey) {
        const normalizedRunKey = normalizeString(runKey);
        if (!normalizedRunKey) {
            throw new Error('StudyQuestTestServer claimPendingDraw 缺少 runKey');
        }

        const state = readState();
        const pendingDraw = state.rewardFlow.pendingDraws[normalizedRunKey];
        if (!pendingDraw) {
            return {
                accepted: false,
                reason: 'no_pending_draw'
            };
        }

        if (pendingDraw.claimedAt) {
            return {
                accepted: false,
                reason: 'draw_already_claimed',
                card: createCardSnapshot(pendingDraw.cardId),
                collection: buildCollectionState({ highlightId: pendingDraw.cardId })
            };
        }

        if (hasClaimedPracticeDrawForModuleToday(state, pendingDraw.module)) {
            return {
                accepted: false,
                reason: 'daily_draw_already_claimed'
            };
        }

        const cardDefinition = getCardDefinition(pendingDraw.cardId);
        if (!cardDefinition) {
            return {
                accepted: false,
                reason: 'missing_card_definition'
            };
        }

        const claimedAt = Date.now();
        const cardResult = recordCard(cardDefinition, claimedAt);
        const claimedAtIso = new Date(claimedAt).toISOString();
        state.rewardFlow.pendingDraws[normalizedRunKey].claimedAt = String(claimedAt);
        markPracticeDrawClaimedForModuleToday(state, pendingDraw.module, normalizedRunKey, claimedAtIso);
        saveState(state);

        dispatchLabEvent('studyquestlab:draw-claimed', {
            runKey: normalizedRunKey,
            card: deepClone(cardResult)
        });

        return {
            accepted: true,
            runKey: normalizedRunKey,
            card: {
                ...cardResult,
                reason: 'draw_claimed'
            },
            summary: buildClaimSummary(cardResult),
            collection: buildCollectionState({ highlightId: cardResult.cardId }),
            state: getState(),
            labState: getLabState()
        };
    }

    function initializePracticeAchievements() {
        const state = readState();
        const didChange = syncHistoricalLevelPracticeCounts(state);
        if (didChange) {
            saveState(state);
        }
        return {
            didChange,
            achievements: []
        };
    }

    initializePracticeAchievements();
    const root = getRoot();
    root.storageKeys = Object.freeze({
        state: STORAGE_KEY,
        collection: COLLECTION_KEY,
        collectionMeta: COLLECTION_META_KEY,
        lastObtained: LAST_OBTAINED_KEY,
        lotteryCollection: LOTTERY_COLLECTION_KEY,
        lotteryCollectionMeta: LOTTERY_COLLECTION_META_KEY,
        lotteryLastObtained: LOTTERY_LAST_OBTAINED_KEY,
        lotteryCollectionSync: LOTTERY_COLLECTION_SYNC_KEY
    });
    root.rarityOrder = deepClone(RARITY_ORDER);
    root.rarityColors = deepClone(RARITY_COLORS);
    root.startRun = startRun;
    root.completeRun = completeRun;
    root.getState = getState;
    root.getLabState = getLabState;
    root.getCollectionState = getCollectionState;
    root.getCardCatalog = function() {
        return COLLECTION_CATALOG.map((card) => deepClone(toCatalogCard(card)));
    };
    root.getCardDefinition = function(cardId) {
        const definition = getCardDefinition(cardId);
        return definition ? deepClone(toCatalogCard(definition)) : null;
    };
    root.claimPendingDraw = claimPendingDraw;
    root.markCardPreviewed = markCardPreviewed;
    root.resetState = resetState;
    root.resetLabState = resetLabState;
    global.StudyQuestLab = root;
})(typeof window !== 'undefined' ? window : globalThis);
