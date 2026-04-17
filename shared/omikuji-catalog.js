(function (window) {
    const COLLECTION_KEY = "omikujiCollection";
    const COLLECTION_META_KEY = "omikujiCollectionMeta_v1";

    const fortunes = [
        { id: "sp1", rarity: "SP", title: "感谢祭", desc: "感谢你一直以来的支持，谢谢。", weight: 1, color: "#9c27b0", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/ganxieji.png", isSpecial: true },
        { id: "f1", rarity: "KR", title: "旺吉", desc: "🎉你就是最帅（美）的气运之子🎉！kiki祝福你，旺！", weight: 3, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/wangji.png" },
        { id: "f19", rarity: "KR", title: "乐吉", desc: "喝上一口肥宅水，快乐一整天！", weight: 7, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/keleji.png" },
        { id: "f34", rarity: "KR", title: "肯吉", desc: "疯狂星期四，V你50。真要啊！不行，我要自己吃。", weight: 2, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/kenji.png" },
        { id: "f21", rarity: "KR", title: "桃吉", desc: "学习上的不如意，说不定会带来其他方面的好运哦～", weight: 3, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/taoji.png" },
        { id: "f37", rarity: "KR", title: "画吉", desc: "快看～，我成为一幅画了，啊啊啊啊啊啊", weight: 3, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huaji.png" },
        { id: "f32", rarity: "KR", title: "天吉", desc: "知识中的私语，细细聆听，那是日语之神对你的回应。", weight: 3, color: "#000000", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/tianji.png" },
        { id: "f8", rarity: "UR", title: "神吉", desc: "⛩️考神附体！今天直觉准得可怕，做阅读题一抓一个准，就算蒙的也全对！", weight: 1, color: "#d4af37", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shenji.png" },
        { id: "f7", rarity: "UR", title: "玉吉", desc: "一尾便是一重境界。熬过漫长的沉淀与枯燥的练习，终能修得灵动的语感。", weight: 3, color: "#F44336", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huji.png" },
        { id: "f16", rarity: "UR", title: "鹿吉", desc: "步履从容，一步一印，语感自然如影随形。", weight: 1, color: "#e6b422", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/luji2.png" },
        { id: "f22", rarity: "UR", title: "友吉", desc: "切磋琢磨之友，乃求学路上的不灭之光。", weight: 1, color: "#d4af37", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xueji.png" },
        { id: "f30", rarity: "UR", title: "狮吉", desc: "即使是幼小的“可爱”，终有一天也可成为草原的王！（😆）", weight: 1, color: "#d4af37", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shiji.png" },
        { id: "f35", rarity: "UR", title: "绯吉", desc: "软软的狗耳朵，可是为听八卦而生的哦！", weight: 1, color: "#d4af37", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/feiji.png" },
        { id: "f2", rarity: "SSR", title: "虎吉", desc: "运气爆棚！干什么都是如虎添翼，チョロいもんだぜ！", weight: 5, color: "#d32f2f", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/huyan.png" },
        { id: "f9", rarity: "SSR", title: "猫吉", desc: "明确内心，不被外界所迷惑，直取自己的“目标”，走最优雅的“猫步”。", weight: 5, color: "#ec407a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/maoji2.png" },
        { id: "f12", rarity: "SSR", title: "鸽吉", desc: "咕咕咕，咕咕咕咕咕咕咕，咕咕？咕！", weight: 3, color: "#d32f2f", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/geji.png" },
        { id: "f13", rarity: "SSR", title: "蛇吉", desc: "褪下“舒适”的旧壳，灵动的语感方能重获新生。", weight: 5, color: "#ec407a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/sheji.png" },
        { id: "f20", rarity: "SSR", title: "憨吉", desc: "狗狗我啊，今天，指定是不行了。（不行！）", weight: 4, color: "#1976d2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/cheemsji.png" },
        { id: "f23", rarity: "SSR", title: "猪吉", desc: "猪突猛进，猪突猛进，猪突猛劲！冲！", weight: 4, color: "#ec407a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/zhuji.png" },
        { id: "f26", rarity: "SSR", title: "羊吉", desc: "昨天已成过去，明天无人能知，那就好好享受只属于我们的今天吧！", weight: 5, color: "#ec407a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yangji.png" },
        { id: "f27", rarity: "SSR", title: "鸭吉", desc: "累了吗，渴了吗，饿了吗，再坚持坚持，就差一点了，冲鸭！", weight: 5, color: "#1976d2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yaji.png" },
        { id: "f28", rarity: "SSR", title: "豹吉", desc: "他人的光辉不属于自己，正视自己的一切，扎实走好每一步才是真。", weight: 5, color: "#d32f2f", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/baoji.png" },
        { id: "f38", rarity: "SSR", title: "象吉", desc: "只有真正的硬实力，才会让一切“臣服”与你。", weight: 5, color: "#d32f2f", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xiangji.png" },
        { id: "f10", rarity: "SR", title: "蝴吉", desc: "飞舞的思绪！如蝶一般，“漂亮”的拿下今天的知识吧。", weight: 10, color: "#00897b", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/chongji.png" },
        { id: "f3", rarity: "SR", title: "猴吉", desc: "做不了真“大圣”，也能拥有“大圣”心，先得敢想，才能真成！", weight: 10, color: "#388e3c", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/houji.png" },
        { id: "f36", rarity: "SR", title: "挠吉", desc: "是玩还是学，this is a question！", weight: 10, color: "#388e3c", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/naoji.png" },
        { id: "f6", rarity: "SR", title: "熊吉", desc: "学饿了就吃点，吃饱了就休息，那学习呢？学习就明天再说吧。", weight: 10, color: "#7b1fa2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/xiongji.png" },
        { id: "f14", rarity: "SR", title: "燕吉", desc: "每天只衔一个词，日积月累，也能筑起坚不可摧的语言之巢。", weight: 10, color: "#7b1fa2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yanji.png" },
        { id: "f17", rarity: "SR", title: "牛吉", desc: "纵使当下如对牛弹琴般不得要领，耐下性子温故知新，笨功夫自有回响。", weight: 10, color: "#546e7a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/niuji.png" },
        { id: "f24", rarity: "SR", title: "兔吉", desc: "兔起鹘落般的进步，恰恰蕴藏在从一到十、踏踏实实的研磨之中。", weight: 10, color: "#00897b", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/tuji.png" },
        { id: "f29", rarity: "SR", title: "狈吉", desc: "他人眼中的“奸”，也可以是真正的“友”。", weight: 10, color: "#546e7a", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/beiji.png" },
        { id: "f33", rarity: "SR", title: "碌吉", desc: "答完你的，答你的，一个一个来。", weight: 10, color: "#7b1fa2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/luji3.png" },
        { id: "f5", rarity: "R", title: "犬吉", desc: "温故而知新。比起新内容，今天更适合把之前的错题翻出来‘叙叙旧’哦！", weight: 30, color: "#f57c00", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/quanji.png" },
        { id: "f4", rarity: "R", title: "鼠吉", desc: "一点一滴地搬运，终能囤满语言的粮仓。", weight: 30, color: "#1976d2", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/shuji.png" },
        { id: "f11", rarity: "R", title: "狐吉", desc: "🍵普普通通、平平淡淡的一天。按部就班地背单词吧，没有波澜也是一种幸福。", weight: 30, color: "#8d6e63", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/pingji.png" },
        { id: "f15", rarity: "R", title: "龟吉", desc: "要想“快”，先得“慢”，只有学会了放平心态去细细打磨，“快”便会自然出现。", weight: 30, color: "#8d6e63", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/guiji.png" },
        { id: "f18", rarity: "R", title: "鼬吉", desc: "思维若如鼬般柔软，再凶狠的学习障碍，也能轻盈越过。", weight: 30, color: "#8d6e63", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/youji.png" },
        { id: "f31", rarity: "R", title: "鬼吉", desc: "好意的显现，不一定是笑容，有时候也可能会是某种“恐怖😱”哦", weight: 30, color: "#8d6e63", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/eji.png" },
        { id: "f25", rarity: "R", title: "鵺吉", desc: "困难，即是机遇，不要畏惧不要害怕，解题之法就在其中！", weight: 30, color: "#8d6e63", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/nueji.png" },
        { id: "f39", rarity: "R", title: "鹰吉", desc: "日复一日的练习，必然让你练就锐利的“鹰眼”，一箭正中要害！", weight: 30, color: "#5C4A3D", icon: "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/yingji.png" }
    ];

    const petRewardFortunes = [
        { id: "pet_shiba_max", rarity: "MAX", title: "守护柴犬", desc: "把柴犬一路陪到满级后获得的成长纪念卡。它会继续守在你身边，提醒你一点点向前。", color: "#B7282E", icon: "kiki2.png", isRewardOnly: true },
        { id: "pet_cat_max", rarity: "MAX", title: "月影猫伴", desc: "把猫猫一路陪到满级后获得的成长纪念卡。它会在安静的夜里，继续陪你把学习走稳。", color: "#6D6A8B", icon: "takarakuji/nekoji.png", isRewardOnly: true }
    ];

    const collectionCatalog = [...petRewardFortunes, ...fortunes];
    const catalogById = collectionCatalog.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    function safeParseJSON(rawValue, fallback) {
        try {
            const parsed = JSON.parse(rawValue);
            return parsed === null || parsed === undefined ? fallback : parsed;
        } catch (error) {
            return fallback;
        }
    }

    function getCollectionMeta() {
        const raw = safeParseJSON(window.localStorage.getItem(COLLECTION_META_KEY), {});
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
            return {};
        }

        return Object.keys(raw).reduce((acc, id) => {
            const entry = raw[id];
            if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
                return acc;
            }

            const count = Number.parseInt(entry.count, 10);
            if (!Number.isInteger(count) || count <= 0) {
                return acc;
            }

            const firstObtainedAt = Number(entry.firstObtainedAt);
            const lastObtainedAt = Number(entry.lastObtainedAt);
            acc[id] = {
                count,
                firstObtainedAt: Number.isFinite(firstObtainedAt) && firstObtainedAt > 0 ? firstObtainedAt : null,
                lastObtainedAt: Number.isFinite(lastObtainedAt) && lastObtainedAt > 0 ? lastObtainedAt : null,
                isNew: Boolean(entry.isNew)
            };
            return acc;
        }, {});
    }

    function getUnlockedFortuneIds() {
        const meta = getCollectionMeta();
        const metaIds = Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
        const legacyCollection = safeParseJSON(window.localStorage.getItem(COLLECTION_KEY), []);
        const legacyIds = Array.isArray(legacyCollection)
            ? legacyCollection.filter((id) => typeof id === "string" && id.trim())
            : [];
        return Array.from(new Set([...legacyIds, ...metaIds]));
    }

    function getUnlockedCatalog(options = {}) {
        const includeRewardOnly = options.includeRewardOnly !== false;
        const unlockedIds = new Set(getUnlockedFortuneIds());
        return collectionCatalog.filter((item) => {
            if (!unlockedIds.has(item.id)) return false;
            if (!includeRewardOnly && item.isRewardOnly) return false;
            return true;
        });
    }

    function getFortuneById(id) {
        const normalizedId = String(id || "").trim();
        return normalizedId && catalogById[normalizedId] ? catalogById[normalizedId] : null;
    }

    window.OmikujiCatalog = {
        COLLECTION_KEY,
        COLLECTION_META_KEY,
        fortunes,
        petRewardFortunes,
        collectionCatalog,
        safeParseJSON,
        getCollectionMeta,
        getUnlockedFortuneIds,
        getUnlockedCatalog,
        getFortuneById
    };
})(window);
