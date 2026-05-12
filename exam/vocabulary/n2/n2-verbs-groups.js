(function (global) {
    const WORDS_PER_DAY = 20;
    const DAYS_PER_STAGE = 2;
    const COMPOUND_SOURCE_ORDERS = new Set([
        24, 65, 71, 73, 74, 75, 76, 105, 111, 116, 124, 135, 145, 146, 147, 148,
        162, 163, 164, 165, 182, 183, 184, 185, 190, 195, 201, 205, 216, 217,
        218, 221, 222, 223, 224, 227, 229, 230, 232, 233, 243, 244, 246
    ]);

    const entries = Array.isArray(global.FULL_WORD_LIST)
        ? global.FULL_WORD_LIST
            .map((word, index) => ({
                index,
                word,
                order: Number(word && word.sourceOrder) || index + 1
            }))
            .filter((entry) => {
                const surface = String(entry.word && entry.word.word ? entry.word.word : '').trim();
                return surface && surface !== '（準備中）' && surface !== '---';
            })
            .sort((left, right) => left.order - right.order || left.index - right.index)
        : [];

    const normalEntries = entries.filter((entry) => !COMPOUND_SOURCE_ORDERS.has(entry.order));
    const compoundEntries = entries.filter((entry) => COMPOUND_SOURCE_ORDERS.has(entry.order));

    function collectDaySlices(sourceEntries, kind) {
        const slices = [];
        for (let start = 0; start < sourceEntries.length; start += WORDS_PER_DAY) {
            const slice = sourceEntries.slice(start, start + WORDS_PER_DAY);
            if (slice.length === 0) continue;
            slices.push({
                kind,
                sequence: slices.length + 1,
                entries: slice
            });
        }
        return slices;
    }

    // 复合动词数据仍保留在词库中，当前 N2 站的动词背诵目录先只展示普通动词日程。
    const daySlices = collectDaySlices(normalEntries, 'normal');
    const totalDays = daySlices.length;
    const totalStages = Math.ceil(totalDays / DAYS_PER_STAGE);

    const groups = Array.from({ length: totalStages }, (_, index) => {
        const groupId = index + 1;
        const startDay = index * DAYS_PER_STAGE + 1;
        const endDay = Math.min(totalDays, startDay + DAYS_PER_STAGE - 1);
        const dayRange = startDay === endDay ? `第 ${startDay} 天` : `第 ${startDay}-${endDay} 天`;
        return {
            id: groupId,
            title: `阶段 ${groupId}`,
            summary: `围绕 ${dayRange} 的 N2 动词日程推进背诵与练习。`
        };
    });

    const days = daySlices.map((daySlice, index) => {
        const dayId = index + 1;
        const groupId = Math.floor((dayId - 1) / DAYS_PER_STAGE) + 1;
        const group = groups[groupId - 1] || { title: `阶段 ${groupId}`, summary: '' };
        const slice = daySlice.entries;
        const firstOrder = slice[0].order;
        const lastOrder = slice[slice.length - 1].order;
        const isCompound = daySlice.kind === 'compound';
        const displayTitle = isCompound
            ? `复合动词专训 ${daySlice.sequence}`
            : `第 ${dayId} 天`;

        return {
            id: dayId,
            groupId,
            groupTitle: group.title,
            groupSummary: group.summary,
            title: displayTitle,
            displayTitle,
            subtitle: isCompound
                ? `${slice.length} 词汇 · 复合动词`
                : `${slice.length} 词汇 · ${firstOrder}-${lastOrder}`,
            scheduleKind: daySlice.kind,
            scheduleIndex: daySlice.sequence,
            sourceRange: [firstOrder, lastOrder],
            wordIds: slice.map((entry) => entry.index)
        };
    });

    const stages = groups
        .map((group, index) => {
            const stageId = index + 1;
            const startDay = index * DAYS_PER_STAGE + 1;
            const dayIds = days.slice(index * DAYS_PER_STAGE, index * DAYS_PER_STAGE + DAYS_PER_STAGE).map((day) => day.id);
            if (dayIds.length === 0) return null;
            const endDay = dayIds[dayIds.length - 1];
            const dayRange = startDay === endDay ? `第 ${startDay} 天` : `第 ${startDay}-${endDay} 天`;
            return {
                id: stageId,
                groupId: group.id,
                groupTitle: group.title,
                title: `阶段 ${stageId} · ${dayRange}`,
                dayIds
            };
        })
        .filter(Boolean);

    global.LAB_N2_VERB_GROUPS = groups;
    global.LAB_N2_VERB_DAYS = days;
    global.LAB_N2_VERB_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
