(function () {
    const configRoot = document.querySelector("[data-reading-highlight-root]");
    const rootSelector = configRoot ? configRoot.getAttribute("data-reading-highlight-root") : "#mainArticleContent";
    const articleRoot = document.querySelector(rootSelector || "#mainArticleContent");
    if (!articleRoot) {
        return;
    }

    const colorKeys = ["yellow", "blue", "green", "pink"];
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const section = pathParts[pathParts.length - 2] || "";
    const parentSection = pathParts[pathParts.length - 3] || "";
    const grandParentSection = pathParts[pathParts.length - 4] || "";
    const fileName = pathParts[pathParts.length - 1] || "";
    const examKey = fileName.replace(/\.html$/i, "") || "unknown";
    const configuredLevel = configRoot ? configRoot.getAttribute("data-reading-highlight-level") : "";
    const configuredType = configRoot ? configRoot.getAttribute("data-reading-highlight-type") : "";
    const sectionIsLevel = /^n2$/i.test(section);
    const parentIsLevel = /^n2$/i.test(parentSection);
    const inferredLevel = sectionIsLevel ? section.toUpperCase() : parentIsLevel ? parentSection.toUpperCase() : "N2";
    const inferredTypeSegment = parentIsLevel && section === "10" && grandParentSection === "l"
        ? "l"
        : sectionIsLevel
            ? parentSection
            : section;
    const level = configuredLevel || inferredLevel;
    const type = configuredType || (inferredTypeSegment === "d" ? "integrated" : inferredTypeSegment === "t" ? "search" : inferredTypeSegment === "l" ? "long" : inferredTypeSegment);
    const isClozeMode = type === "cloze" || articleRoot.matches(".cloze-passage");
    const rootPrefix = rootSelector || "#mainArticleContent";
    const storageKey = `reading_user_highlights::${level}::${type}::${examKey}`;

    const blockedSelector = [
        ".article-translation",
        ".passage-translation",
        ".cloze-blank-inline",
        ".cloze-blank-num",
        ".blank-text",
        ".q-text-trans",
        ".option-detail-analysis",
        ".detail-block",
        ".explanation-box",
        ".result-panel",
        ".test-result-panel",
        ".dt-test-gate",
        ".dt-test-floating-timer",
        ".submit-area",
        ".quick-nav",
        "button",
        "nav",
        "header"
    ].join(",");

    const dTargetSelector = [
        "#mainArticleContent .article-part p",
        ".question-card .q-text",
        ".question-card .option-content"
    ].join(",");

    const tTargetSelector = [
        "#mainArticleContent .poster-main-title",
        "#mainArticleContent .poster-title",
        "#mainArticleContent .poster-subtitle",
        "#mainArticleContent .poster-section-title",
        "#mainArticleContent .poster-text-block",
        "#mainArticleContent .poster-list li",
        "#mainArticleContent .poster-definition",
        "#mainArticleContent .poster-definition-title",
        "#mainArticleContent .poster-footer",
        "#mainArticleContent .section-title",
        "#mainArticleContent .section-heading",
        "#mainArticleContent .section-content",
        "#mainArticleContent .subsection-title",
        "#mainArticleContent .section-number-title",
        "#mainArticleContent .note-text",
        "#mainArticleContent .note-line",
        "#mainArticleContent .note-list li",
        "#mainArticleContent .indent-text",
        "#mainArticleContent .indent-list li",
        "#mainArticleContent .numbered",
        "#mainArticleContent .numbered-section",
        "#mainArticleContent .dl-term",
        "#mainArticleContent .dl-desc",
        "#mainArticleContent .info-label",
        "#mainArticleContent .info-value",
        "#mainArticleContent .event-title",
        "#mainArticleContent .event-label",
        "#mainArticleContent .event-value",
        "#mainArticleContent .event-details",
        "#mainArticleContent .event-item",
        "#mainArticleContent .course-header",
        "#mainArticleContent .course-date",
        "#mainArticleContent .course-desc",
        "#mainArticleContent .course-details",
        "#mainArticleContent .method-title",
        "#mainArticleContent .method-desc",
        "#mainArticleContent .campaign-title",
        "#mainArticleContent .campaign-note",
        "#mainArticleContent .notice-title",
        "#mainArticleContent .contact-info",
        "#mainArticleContent .outline-title",
        "#mainArticleContent th",
        "#mainArticleContent td",
        ".question-card .q-text",
        ".question-card .option-content"
    ].join(",");

    const clozeTargetSelector = [
        `${rootPrefix} p:not(.passage-translation)`
    ].join(",");

    const shortTargetSelector = [
        `${rootPrefix} .article-content p:not(.article-translation)`,
        `${rootPrefix} .article-content li`,
        `${rootPrefix} .article-content .notice-intro`,
        `${rootPrefix} .article-content .info-list > div`,
        `${rootPrefix} .article-content .info-label`,
        `${rootPrefix} .article-content .info-value`,
        `${rootPrefix} .article-content th`,
        `${rootPrefix} .article-content td`
    ].join(",");

    const targetSelector = isClozeMode
        ? clozeTargetSelector
        : type === "short"
            ? shortTargetSelector
            : (section === "t" ? tTargetSelector : dTargetSelector);

    let selectedColor = "yellow";
    let currentDraft = null;
    let activeHighlightId = "";
    let selectionTimer = 0;

    function cssEscape(value) {
        if (window.CSS && typeof window.CSS.escape === "function") {
            return window.CSS.escape(value);
        }
        return String(value).replace(/["\\]/g, "\\$&");
    }

    function safeParseRecords() {
        try {
            const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    function saveRecords(records) {
        window.localStorage.setItem(storageKey, JSON.stringify(records));
    }

    function getElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE ? node : node && node.parentElement;
    }

    function isAnalysisVisible() {
        return articleRoot.classList.contains("reviewed") ||
            Boolean(document.querySelector(".question-card.reviewed, .options-group.reviewed"));
    }

    function isOptionTarget(target) {
        return Boolean(target && target.matches(".option-content"));
    }

    function isBlockedTarget(target) {
        return !target || Boolean(target.closest(blockedSelector));
    }

    function hasUsableText(target) {
        return Boolean((target.textContent || "").trim());
    }

    function uniqueElements(nodes) {
        return Array.from(new Set(nodes));
    }

    function getHighlightTargets() {
        return uniqueElements(Array.from(document.querySelectorAll(targetSelector))).filter((target) => {
            return !isBlockedTarget(target) && hasUsableText(target);
        });
    }

    function getClosestTarget(node) {
        const element = getElementNode(node);
        if (element && element.closest(blockedSelector)) {
            return null;
        }
        const target = element ? element.closest(targetSelector) : null;
        if (!target || isBlockedTarget(target) || !hasUsableText(target)) {
            return null;
        }
        if (isOptionTarget(target) && isAnalysisVisible()) {
            return null;
        }
        return target;
    }

    function getTargetType(target) {
        if (target.matches("th, td")) {
            return "table-cell";
        }
        if (target.matches(".q-text")) {
            return "question";
        }
        if (target.matches(".option-content")) {
            return "option";
        }
        if (target.matches(".article-part p")) {
            return "article";
        }
        return section === "t" ? "prompt" : "article";
    }

    function getTableMeta(target) {
        if (!target.matches("th, td")) {
            return {};
        }
        const table = target.closest("table");
        const row = target.closest("tr");
        const tables = Array.from(articleRoot.querySelectorAll("table"));
        const rows = table ? Array.from(table.querySelectorAll("tr")) : [];
        const cells = row ? Array.from(row.children).filter((cell) => cell.matches("th, td")) : [];
        return {
            tableIndex: table ? tables.indexOf(table) : -1,
            rowIndex: row ? rows.indexOf(row) : -1,
            columnIndex: cells.indexOf(target)
        };
    }

    function getLegacyParagraphTarget(record) {
        if (!record || typeof record.articleId !== "string") {
            return null;
        }
        const article = record.articleId ? document.getElementById(record.articleId) : articleRoot;
        if (!article) {
            return null;
        }
        const paragraphs = Array.from(article.querySelectorAll("p")).filter((paragraph) => {
            return !isBlockedTarget(paragraph) && hasUsableText(paragraph);
        });
        const paragraphIndex = Number.parseInt(record.paragraphIndex, 10);
        return Number.isFinite(paragraphIndex) ? paragraphs[paragraphIndex] || null : null;
    }

    function getTargetMeta(target) {
        const targets = getHighlightTargets();
        const questionCard = target.closest(".question-card");
        const optionLabel = target.closest(".option-label");
        const options = questionCard ? Array.from(questionCard.querySelectorAll(".option-content")) : [];
        const articlePart = target.closest(".article-part");
        const tableMeta = getTableMeta(target);

        return {
            targetType: getTargetType(target),
            targetIndex: targets.indexOf(target),
            targetId: target.id || "",
            articleId: articlePart ? articlePart.id || "" : "",
            questionId: questionCard ? questionCard.id || questionCard.dataset.question || "" : "",
            optionIndex: optionLabel ? Number.parseInt(optionLabel.dataset.opt || "", 10) : options.indexOf(target),
            tableIndex: tableMeta.tableIndex,
            rowIndex: tableMeta.rowIndex,
            columnIndex: tableMeta.columnIndex
        };
    }

    function resolveTarget(record) {
        if (!record) {
            return null;
        }

        const targetType = String(record.targetType || "");
        if (targetType === "table-cell") {
            const tableIndex = Number.parseInt(record.tableIndex, 10);
            const rowIndex = Number.parseInt(record.rowIndex, 10);
            const columnIndex = Number.parseInt(record.columnIndex, 10);
            const table = articleRoot.querySelectorAll("table")[tableIndex];
            const row = table ? table.querySelectorAll("tr")[rowIndex] : null;
            const cell = row ? Array.from(row.children).filter((node) => node.matches("th, td"))[columnIndex] : null;
            if (cell && !isBlockedTarget(cell)) {
                return cell;
            }
        }

        if (record.targetId) {
            const byId = document.getElementById(String(record.targetId));
            if (byId && byId.matches(targetSelector) && !isBlockedTarget(byId)) {
                return byId;
            }
        }

        const targetIndex = Number.parseInt(record.targetIndex, 10);
        const targets = getHighlightTargets();
        if (Number.isFinite(targetIndex) && targets[targetIndex]) {
            return targets[targetIndex];
        }

        return getLegacyParagraphTarget(record);
    }

    function getOffsetWithinTarget(target, container, offset) {
        const range = document.createRange();
        range.selectNodeContents(target);
        range.setEnd(container, offset);
        return getVisibleText(range.cloneContents()).length;
    }

    function rangeIntersectsHighlight(range) {
        return Array.from(document.querySelectorAll(".user-highlight")).some((node) => {
            try {
                return range.intersectsNode(node);
            } catch (error) {
                return false;
            }
        });
    }

    function rangeIntersectsBlockedTarget(range) {
        return Array.from(articleRoot.querySelectorAll(blockedSelector)).some((node) => {
            try {
                return range.intersectsNode(node);
            } catch (error) {
                return false;
            }
        });
    }

    function getTextNodes(target) {
        const nodes = [];
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.length) {
                    return NodeFilter.FILTER_REJECT;
                }
                const parent = node.parentElement;
                if (parent && parent.closest(blockedSelector)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        let current = walker.nextNode();
        while (current) {
            nodes.push(current);
            current = walker.nextNode();
        }
        return nodes;
    }

    function getVisibleText(target) {
        return getTextNodes(target).map((node) => node.nodeValue || "").join("");
    }

    function wrapTextNodeSegment(textNode, start, end, record) {
        if (!textNode || start >= end || start < 0 || end > textNode.nodeValue.length) {
            return;
        }

        textNode.splitText(end);
        const selectedNode = start === 0 ? textNode : textNode.splitText(start);
        const wrapper = document.createElement("span");
        wrapper.className = "user-highlight";
        wrapper.dataset.highlightId = record.id;
        wrapper.dataset.highlightColor = record.color;
        selectedNode.parentNode.insertBefore(wrapper, selectedNode);
        wrapper.appendChild(selectedNode);
    }

    function applyRecord(record) {
        const target = resolveTarget(record);
        if (!target) {
            return false;
        }

        const start = Number.parseInt(record.start, 10);
        const end = Number.parseInt(record.end, 10);
        const text = String(record.text || "");
        const targetText = getVisibleText(target);
        if (
            !Number.isFinite(start) ||
            !Number.isFinite(end) ||
            start < 0 ||
            end <= start ||
            end > targetText.length ||
            targetText.slice(start, end) !== text
        ) {
            return false;
        }

        const nodes = getTextNodes(target);
        const segments = [];
        let cursor = 0;
        nodes.forEach((node) => {
            const nodeStart = cursor;
            const nodeEnd = cursor + node.nodeValue.length;
            if (start < nodeEnd && end > nodeStart) {
                segments.push({
                    node,
                    start: Math.max(0, start - nodeStart),
                    end: Math.min(node.nodeValue.length, end - nodeStart)
                });
            }
            cursor = nodeEnd;
        });

        segments.reverse().forEach((segment) => {
            wrapTextNodeSegment(segment.node, segment.start, segment.end, record);
        });
        return segments.length > 0;
    }

    function unwrapHighlightSpan(span) {
        const parent = span.parentNode;
        if (!parent) {
            return;
        }
        while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
        parent.normalize();
    }

    function clearRenderedHighlights() {
        Array.from(document.querySelectorAll(".user-highlight")).forEach(unwrapHighlightSpan);
        articleRoot.normalize();
        document.querySelectorAll(".question-card").forEach((card) => card.normalize());
    }

    function normalizeRecord(record) {
        return {
            id: String(record.id || ""),
            color: colorKeys.includes(record.color) ? record.color : "yellow",
            targetType: String(record.targetType || ""),
            targetIndex: Number.parseInt(record.targetIndex, 10),
            targetId: String(record.targetId || ""),
            articleId: String(record.articleId || ""),
            questionId: String(record.questionId || ""),
            optionIndex: Number.parseInt(record.optionIndex, 10),
            tableIndex: Number.parseInt(record.tableIndex, 10),
            rowIndex: Number.parseInt(record.rowIndex, 10),
            columnIndex: Number.parseInt(record.columnIndex, 10),
            start: Number.parseInt(record.start, 10),
            end: Number.parseInt(record.end, 10),
            text: String(record.text || ""),
            paragraphIndex: Number.parseInt(record.paragraphIndex, 10)
        };
    }

    function restoreHighlights() {
        clearRenderedHighlights();
        const records = safeParseRecords();
        const restoredRecords = [];
        records.forEach((record) => {
            const normalizedRecord = normalizeRecord(record);
            if (normalizedRecord.id && applyRecord(normalizedRecord)) {
                restoredRecords.push(normalizedRecord);
            }
        });

        if (restoredRecords.length !== records.length) {
            saveRecords(restoredRecords);
        }
    }

    function removeOptionHighlightsAfterAnalysis() {
        if (!isAnalysisVisible()) {
            return;
        }

        const records = safeParseRecords();
        const filteredRecords = records.filter((record) => String(record.targetType || "") !== "option");
        if (filteredRecords.length === records.length) {
            return;
        }

        saveRecords(filteredRecords);
        restoreHighlights();
        hideToolbar();
    }

    function buildToolbar() {
        const toolbar = document.createElement("div");
        toolbar.className = "reading-highlight-toolbar";
        toolbar.id = "readingUserHighlightToolbar";
        toolbar.setAttribute("aria-hidden", "true");
        toolbar.innerHTML = `
            <button type="button" data-highlight-action="add">高亮</button>
            <button type="button" data-highlight-action="remove">删除高亮</button>
            <span class="reading-highlight-colors" aria-label="高亮颜色">
                ${colorKeys.map((color) => `<button type="button" class="reading-highlight-color-chip" data-highlight-action="color" data-color="${color}" aria-label="${color}"></button>`).join("")}
            </span>
        `;
        document.body.appendChild(toolbar);

        toolbar.addEventListener("mousedown", (event) => {
            event.preventDefault();
        });

        toolbar.addEventListener("click", (event) => {
            const button = event.target.closest("[data-highlight-action]");
            if (!button) {
                return;
            }

            const action = button.dataset.highlightAction;
            if (action === "add") {
                addCurrentDraftHighlight();
            } else if (action === "remove") {
                removeActiveHighlight();
            } else if (action === "color") {
                setColor(button.dataset.color);
            }
        });

        return toolbar;
    }

    const toolbar = buildToolbar();

    function syncColorButtons() {
        toolbar.querySelectorAll(".reading-highlight-color-chip").forEach((button) => {
            button.classList.toggle("is-selected", button.dataset.color === selectedColor);
        });
    }

    function syncToolbarMode() {
        const addButton = toolbar.querySelector('[data-highlight-action="add"]');
        const removeButton = toolbar.querySelector('[data-highlight-action="remove"]');
        addButton.disabled = !currentDraft;
        removeButton.disabled = !activeHighlightId;
        syncColorButtons();
    }

    function isUsableRect(rect) {
        return rect &&
            Number.isFinite(rect.left) &&
            Number.isFinite(rect.top) &&
            Number.isFinite(rect.right) &&
            Number.isFinite(rect.bottom) &&
            (rect.width > 0 || rect.height > 0);
    }

    function positionToolbar(rect) {
        if (!isUsableRect(rect)) {
            return;
        }

        toolbar.classList.add("is-visible");
        toolbar.setAttribute("aria-hidden", "false");
        syncToolbarMode();

        window.requestAnimationFrame(() => {
            const width = toolbar.offsetWidth;
            const height = toolbar.offsetHeight;
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;
            const viewportWidth = document.documentElement.clientWidth;
            let left = scrollX + rect.left + rect.width / 2 - width / 2;
            let top = scrollY + rect.top - height - 10;

            left = Math.max(scrollX + 8, Math.min(left, scrollX + viewportWidth - width - 8));
            if (top < scrollY + 8) {
                top = scrollY + rect.bottom + 10;
            }

            toolbar.style.left = `${left}px`;
            toolbar.style.top = `${top}px`;
        });
    }

    function hideToolbar() {
        toolbar.classList.remove("is-visible");
        toolbar.setAttribute("aria-hidden", "true");
        currentDraft = null;
        activeHighlightId = "";
    }

    function getRangeRect(range) {
        const rects = Array.from(range.getClientRects()).filter((rect) => rect.width > 1 && rect.height > 1);
        if (rects.length) {
            return rects.reduce((best, rect) => (
                rect.width * rect.height > best.width * best.height ? rect : best
            ), rects[0]);
        }
        return range.getBoundingClientRect();
    }

    function getActiveSelectionRange() {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
            return null;
        }
        return selection.getRangeAt(0);
    }

    function hasValidArticleSelection() {
        const range = getActiveSelectionRange();
        if (!range || rangeIntersectsBlockedTarget(range)) {
            return false;
        }

        const startTarget = getClosestTarget(range.startContainer);
        const endTarget = getClosestTarget(range.endContainer);
        return Boolean(startTarget && startTarget === endTarget && range.toString().trim());
    }

    function updateSelectionDraft() {
        const range = getActiveSelectionRange();
        if (!range) {
            return;
        }

        if (rangeIntersectsBlockedTarget(range)) {
            hideToolbar();
            return;
        }
        const startTarget = getClosestTarget(range.startContainer);
        const endTarget = getClosestTarget(range.endContainer);
        if (!startTarget || startTarget !== endTarget) {
            hideToolbar();
            return;
        }

        const selectedText = range.toString();
        if (!selectedText || !selectedText.trim()) {
            hideToolbar();
            return;
        }

        const start = getOffsetWithinTarget(startTarget, range.startContainer, range.startOffset);
        const end = getOffsetWithinTarget(startTarget, range.endContainer, range.endOffset);
        const normalizedStart = Math.min(start, end);
        const normalizedEnd = Math.max(start, end);
        const meta = getTargetMeta(startTarget);

        if (meta.targetIndex < 0) {
            hideToolbar();
            return;
        }

        currentDraft = {
            target: startTarget,
            meta,
            start: normalizedStart,
            end: normalizedEnd,
            text: getVisibleText(startTarget).slice(normalizedStart, normalizedEnd),
            range: range.cloneRange()
        };
        activeHighlightId = "";
        positionToolbar(getRangeRect(range));
    }

    function scheduleSelectionUpdate() {
        window.clearTimeout(selectionTimer);
        selectionTimer = window.setTimeout(updateSelectionDraft, 80);
    }

    function scheduleSelectionRefresh() {
        [0, 80, 180, 320, 650].forEach((delay) => {
            window.setTimeout(updateSelectionDraft, delay);
        });
    }

    function addCurrentDraftHighlight() {
        if (!currentDraft) {
            return;
        }

        if (rangeIntersectsHighlight(currentDraft.range)) {
            alert("这段文字里已经包含高亮，请先删除已有高亮后再重新选择。");
            hideToolbar();
            return;
        }

        const record = {
            id: `uh-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
            color: selectedColor,
            targetType: currentDraft.meta.targetType,
            targetIndex: currentDraft.meta.targetIndex,
            targetId: currentDraft.meta.targetId,
            articleId: currentDraft.meta.articleId,
            questionId: currentDraft.meta.questionId,
            optionIndex: Number.isFinite(currentDraft.meta.optionIndex) ? currentDraft.meta.optionIndex : -1,
            tableIndex: Number.isFinite(currentDraft.meta.tableIndex) ? currentDraft.meta.tableIndex : -1,
            rowIndex: Number.isFinite(currentDraft.meta.rowIndex) ? currentDraft.meta.rowIndex : -1,
            columnIndex: Number.isFinite(currentDraft.meta.columnIndex) ? currentDraft.meta.columnIndex : -1,
            start: currentDraft.start,
            end: currentDraft.end,
            text: currentDraft.text
        };

        const records = safeParseRecords();
        records.push(record);
        saveRecords(records);
        restoreHighlights();
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
        }
        hideToolbar();
    }

    function removeActiveHighlight() {
        if (!activeHighlightId) {
            return;
        }

        const records = safeParseRecords().filter((record) => record.id !== activeHighlightId);
        saveRecords(records);
        restoreHighlights();
        hideToolbar();
    }

    function setColor(color) {
        if (!colorKeys.includes(color)) {
            return;
        }

        selectedColor = color;
        if (activeHighlightId) {
            const records = safeParseRecords().map((record) => (
                record.id === activeHighlightId ? { ...record, color } : record
            ));
            saveRecords(records);
            document.querySelectorAll(`.user-highlight[data-highlight-id="${cssEscape(activeHighlightId)}"]`).forEach((span) => {
                span.dataset.highlightColor = color;
            });
        }
        syncToolbarMode();
    }

    document.addEventListener("click", (event) => {
        const highlight = event.target.closest(".user-highlight");
        if (!highlight || (!articleRoot.contains(highlight) && !document.querySelector(".question-section")?.contains(highlight))) {
            if (!toolbar.contains(event.target)) {
                if (hasValidArticleSelection()) {
                    scheduleSelectionRefresh();
                } else {
                    hideToolbar();
                }
            }
            return;
        }

        const highlightId = highlight.dataset.highlightId || "";
        const records = safeParseRecords();
        const record = records.find((item) => item.id === highlightId);
        activeHighlightId = highlightId;
        currentDraft = null;
        selectedColor = record && colorKeys.includes(record.color) ? record.color : (highlight.dataset.highlightColor || selectedColor);
        positionToolbar(highlight.getBoundingClientRect());
    }, true);

    document.addEventListener("selectionchange", scheduleSelectionUpdate);
    document.addEventListener("pointerup", scheduleSelectionRefresh);
    document.addEventListener("mouseup", scheduleSelectionRefresh);
    document.addEventListener("touchend", scheduleSelectionRefresh, { passive: true });
    document.addEventListener("keyup", (event) => {
        if (event.key === "Shift" || event.key.startsWith("Arrow") || event.key === "Meta" || event.key === "Control") {
            scheduleSelectionRefresh();
        }
    });
    document.addEventListener("click", (event) => {
        if (!toolbar.contains(event.target) && !event.target.closest(".user-highlight")) {
            if (hasValidArticleSelection()) {
                scheduleSelectionRefresh();
            } else {
                hideToolbar();
            }
        }
    });
    window.addEventListener("scroll", hideToolbar, { passive: true });
    window.addEventListener("resize", hideToolbar);

    const reviewObserver = new MutationObserver(removeOptionHighlightsAfterAnalysis);
    [articleRoot, ...Array.from(document.querySelectorAll(".question-card, .options-group"))].forEach((node) => {
        reviewObserver.observe(node, { attributes: true, attributeFilter: ["class"] });
    });

    restoreHighlights();
    removeOptionHighlightsAfterAnalysis();

    window.ReadingUserHighlights = {
        storageKey,
        restore: restoreHighlights,
        removeOptionHighlightsAfterAnalysis,
        getRecords: safeParseRecords,
        getTargets: getHighlightTargets
    };
})();
