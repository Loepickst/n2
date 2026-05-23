(function (global) {
    const DAYS_PER_STAGE = 2;
    const CATEGORY_DAYS = [
    {
        "id": "i-01",
        "adjectiveType": "i",
        "title": "主观情绪与内心感受",
        "displayTitle": "一类 · 主观情绪与内心感受",
        "standard": "常用于表达说话人或主体的心理活动、情感起伏，以及面对特定情境时产生的内在情绪。",
        "words": [
            "悔しい",
            "惜しい",
            "恋しい",
            "懐かしい",
            "照れくさい",
            "情けない",
            "心強い",
            "心細い",
            "虚しい",
            "痛ましい",
            "恐ろしい",
            "有難い"
        ]
    },
    {
        "id": "i-02",
        "adjectiveType": "i",
        "title": "人的性格、品行与行事作风",
        "displayTitle": "一类 · 人的性格、品行与行事作风",
        "standard": "常用于形容人物的内在秉性、气质风貌、行事习惯或待人接物的态度。",
        "words": [
            "優しい",
            "大人しい",
            "狡い",
            "賢い",
            "鈍い",
            "偉い",
            "幼い",
            "逞しい",
            "勇ましい",
            "図々しい",
            "厚かましい",
            "頼もしい",
            "用心深い",
            "そそっかしい",
            "だらしない",
            "飽きっぽい",
            "若々しい",
            "弱々しい"
        ]
    },
    {
        "id": "i-03",
        "adjectiveType": "i",
        "title": "物理感官、外观形态与材质",
        "displayTitle": "一类 · 物理感官、外观形态与材质",
        "standard": "常用于表达通过视觉、嗅觉、味觉、触觉等直接感知到的客观物理属性。",
        "words": [
            "辛い",
            "淡い",
            "清い",
            "煙い",
            "渋い",
            "濃い",
            "臭い",
            "生臭い",
            "硬い",
            "柔らかい",
            "分厚い",
            "細かい",
            "薄暗い",
            "眩しい",
            "荒い",
            "鋭い",
            "緩い",
            "瑞々しい",
            "湿っぽい"
        ]
    },
    {
        "id": "i-04",
        "adjectiveType": "i",
        "title": "客观状态、变化程度与处境",
        "displayTitle": "一类 · 客观状态、变化程度与处境",
        "standard": "常用于刻画事物所处的阶段、环境的严峻程度、变化的猛烈程度或事物间的客观联系。",
        "words": [
            "凄い",
            "物凄い",
            "酷い",
            "著しい",
            "甚だしい",
            "乏しい",
            "厳しい",
            "激しい",
            "慌ただしい",
            "珍しい",
            "等しい",
            "詳しい",
            "険しい",
            "危うい",
            "素早い",
            "容易い",
            "きつい",
            "限りない"
        ]
    },
    {
        "id": "i-05",
        "adjectiveType": "i",
        "title": "主观评价、定性与人际氛围",
        "displayTitle": "一类 · 主观评价、定性与人际氛围",
        "standard": "带有明确的主观价值判断，常用于评价某件事物的优劣、合理性，或描述人际交往中的氛围与感观。",
        "words": [
            "快い",
            "憎い",
            "親しい",
            "好ましい",
            "望ましい",
            "輝かしい",
            "相応しい",
            "力強い",
            "鬱陶しい",
            "騒々しい",
            "騒がしい",
            "喧しい",
            "重苦しい",
            "怪しい",
            "貧しい",
            "憎たらしい",
            "馬鹿らしい",
            "勿体ない",
            "おめでたい",
            "思いがけない",
            "くどい",
            "しつこい",
            "辿々しい",
            "頼りない",
            "とんでもない",
            "物足りない",
            "やむを得ない",
            "みっともない"
        ]
    },
    {
        "id": "na-01",
        "adjectiveType": "na",
        "title": "人的性格、气质与作风",
        "displayTitle": "二类 · 人的性格、气质与作风",
        "standard": "用于形容人的内在脾气、外在气质、行事作风或对待他人的态度。",
        "words": [
            "温厚",
            "率直",
            "頑固",
            "強引",
            "真剣",
            "必死",
            "無口",
            "短気",
            "活発",
            "機敏",
            "陽気",
            "鈍感",
            "器用",
            "下品",
            "上品",
            "素直",
            "呑気",
            "卑怯",
            "皮肉",
            "意地悪",
            "大雑把",
            "生意気",
            "穏やか",
            "朗らか",
            "欲張り",
            "わがまま",
            "勝手"
        ]
    },
    {
        "id": "na-02",
        "adjectiveType": "na",
        "title": "人的内心情感与感受",
        "displayTitle": "二类 · 人的内心情感与感受",
        "standard": "用于形容个体的内心体验、情绪波动，或是对他人的遭遇产生的共情与心理负担。",
        "words": [
            "夢中",
            "退屈",
            "面倒",
            "快適",
            "厄介",
            "感心",
            "可哀想",
            "惨め",
            "気の毒",
            "爽やか"
        ]
    },
    {
        "id": "na-03",
        "adjectiveType": "na",
        "title": "事物的物理感官与外观",
        "displayTitle": "二类 · 事物的物理感官与外观",
        "standard": "用于客观描述事物的形状、色彩、触感、清晰度等视觉或直接感官属性。",
        "words": [
            "小柄",
            "濃厚",
            "地味",
            "派手",
            "鮮明",
            "粗末",
            "明らか",
            "鮮やか",
            "滑らか",
            "緩やか",
            "きれい",
            "なだらか",
            "清潔"
        ]
    },
    {
        "id": "na-04",
        "adjectiveType": "na",
        "title": "事物的状态、程度与趋势",
        "displayTitle": "二类 · 事物的状态、程度与趋势",
        "standard": "用于形容事物所处的阶段、进展状况、变化的剧烈程度、数量的多少或相互之间的联系。",
        "words": [
            "稀",
            "密接",
            "豊富",
            "余計",
            "好調",
            "適度",
            "極端",
            "柔軟",
            "円満",
            "順調",
            "安易",
            "大変",
            "過剰",
            "無力",
            "単純",
            "急激",
            "過激",
            "莫大",
            "深刻",
            "わずか",
            "豊か"
        ]
    },
    {
        "id": "na-05",
        "adjectiveType": "na",
        "title": "综合定性、评价与判断",
        "displayTitle": "二类 · 综合定性、评价与判断",
        "standard": "带有较强的主观评判色彩，用于定性某件事物的合理性、真伪、优劣或整体社会氛围。",
        "words": [
            "変",
            "妙",
            "簡略",
            "対等",
            "無理",
            "贅沢",
            "質素",
            "簡潔",
            "立派",
            "曖昧",
            "案外",
            "偉大",
            "的確",
            "物騒",
            "見事",
            "不都合",
            "不思議",
            "出鱈目",
            "和やか"
        ]
    }
];

    const entries = Array.isArray(global.FULL_WORD_LIST)
        ? global.FULL_WORD_LIST
            .map((word, index) => ({
                index,
                word,
                order: Number(word && word.sourceOrder) || index + 1,
                categoryId: String(word && word.sourceCategoryId ? word.sourceCategoryId : '').trim()
            }))
            .filter((entry) => {
                const surface = String(entry.word && entry.word.word ? entry.word.word : '').trim();
                return surface && surface !== '（準備中）' && surface !== '---' && entry.word.scheduleKind !== 'duplicate';
            })
        : [];

    function categoryEntries(categoryId) {
        return entries
            .filter((entry) => entry.categoryId === categoryId)
            .sort((left, right) => left.order - right.order || left.index - right.index);
    }

    const days = CATEGORY_DAYS.map((category, index) => {
        const dayId = index + 1;
        const groupId = Math.floor((dayId - 1) / DAYS_PER_STAGE) + 1;
        const slice = categoryEntries(category.id);
        return {
            id: dayId,
            groupId,
            groupTitle: `阶段 ${groupId}`,
            groupSummary: `围绕第 ${dayId} 天「${category.displayTitle}」推进背诵与练习。`,
            title: category.displayTitle,
            displayTitle: `第 ${dayId} 天 · ${category.displayTitle}`,
            categoryId: category.id,
            categoryTitle: category.title,
            categoryDisplayTitle: category.displayTitle,
            categoryStandard: category.standard,
            adjectiveType: category.adjectiveType,
            scheduleIndex: dayId,
            sourceRange: slice.length ? [slice[0].order, slice[slice.length - 1].order] : [],
            wordCount: slice.length,
            wordIds: slice.map((entry) => entry.index)
        };
    }).filter((day) => day.wordIds.length > 0);

    const totalDays = days.length;
    const totalStages = Math.ceil(totalDays / DAYS_PER_STAGE);

    const groups = Array.from({ length: totalStages }, (_, index) => {
        const groupId = index + 1;
        const dayIds = days.slice(index * DAYS_PER_STAGE, index * DAYS_PER_STAGE + DAYS_PER_STAGE).map((day) => day.id);
        const titleRange = dayIds.length === 1 ? `第 ${dayIds[0]} 天` : `第 ${dayIds[0]}-${dayIds[dayIds.length - 1]} 天`;
        return {
            id: groupId,
            title: `阶段 ${groupId}`,
            summary: `围绕 ${titleRange} 的分类形容词推进背诵与练习。`
        };
    });

    const stages = groups.map((group, index) => {
        const dayIds = days.slice(index * DAYS_PER_STAGE, index * DAYS_PER_STAGE + DAYS_PER_STAGE).map((day) => day.id);
        if (dayIds.length === 0) return null;
        const dayRange = dayIds.length === 1 ? `第 ${dayIds[0]} 天` : `第 ${dayIds[0]}-${dayIds[dayIds.length - 1]} 天`;
        return {
            id: group.id,
            groupId: group.id,
            groupTitle: group.title,
            title: `阶段 ${group.id} · ${dayRange}`,
            dayIds
        };
    }).filter(Boolean);

    global.LAB_N2_ADJECTIVE_GROUPS = groups;
    global.LAB_N2_ADJECTIVE_DAYS = days;
    global.LAB_N2_ADJECTIVE_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);

if (typeof window !== "undefined") {
    window.LAB_ADJECTIVE_GROUPS = window.LAB_N2_ADJECTIVE_GROUPS;
    window.LAB_ADJECTIVE_DAYS = window.LAB_N2_ADJECTIVE_DAYS;
    window.LAB_ADJECTIVE_STAGES = window.LAB_N2_ADJECTIVE_STAGES;
}
