(function (global) {
    const DAYS_PER_STAGE = 2;
    const CATEGORY_DAYS = [
    {
        "id": "01",
        "title": "整理・收纳・积累",
        "fullTitle": "01 整理・收纳・积累"
    },
    {
        "id": "02",
        "title": "物体操作・手部动作",
        "fullTitle": "02 物体操作・手部动作"
    },
    {
        "id": "03",
        "title": "移动・方向・位置关系",
        "fullTitle": "03 移动・方向・位置关系"
    },
    {
        "id": "04",
        "title": "姿势・接触・身体动作",
        "fullTitle": "04 姿势・接触・身体动作"
    },
    {
        "id": "05",
        "title": "准备・确认・决定・努力・达成",
        "fullTitle": "05 准备・确认・决定・努力・达成"
    },
    {
        "id": "06",
        "title": "工作・职责・经济活动",
        "fullTitle": "06 工作・职责・经济活动"
    },
    {
        "id": "07",
        "title": "授受・给予・邀请・请求",
        "fullTitle": "07 授受・给予・邀请・请求"
    },
    {
        "id": "08",
        "title": "感情・心理・态度",
        "fullTitle": "08 感情・心理・态度"
    },
    {
        "id": "09",
        "title": "语言・认知・调查・判断",
        "fullTitle": "09 语言・认知・调查・判断"
    },
    {
        "id": "10",
        "title": "自然现象・状态变化",
        "fullTitle": "10 自然现象・状态变化"
    },
    {
        "id": "11",
        "title": "破损・恶化・异常状态",
        "fullTitle": "11 破损・恶化・异常状态"
    },
    {
        "id": "12",
        "title": "对立・竞争・阻碍・控制",
        "fullTitle": "12 对立・竞争・阻碍・控制"
    },
    {
        "id": "13",
        "title": "抽象关系・范围・程度",
        "fullTitle": "13 抽象关系・范围・程度"
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
                return surface && surface !== '（準備中）' && surface !== '---' && entry.word.scheduleKind !== 'compound';
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
            groupSummary: `围绕第 ${dayId} 天「${category.title}」推进背诵与练习。`,
            title: category.title,
            displayTitle: `第 ${dayId} 天 · ${category.title}`,
            categoryId: category.id,
            categoryTitle: category.title,
            categoryFullTitle: category.fullTitle,
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
            summary: `围绕 ${titleRange} 的分类词汇推进背诵与练习。`
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

    global.LAB_N2_VERB_GROUPS = groups;
    global.LAB_N2_VERB_DAYS = days;
    global.LAB_N2_VERB_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
