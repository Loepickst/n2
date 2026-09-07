(() => {
    const page = document.body;
    const index = document.getElementById("sentence-index");
    const list = document.getElementById("sentence-index-list");
    const toggle = document.getElementById("sentence-index-toggle");
    const links = Array.from(document.querySelectorAll(".ss-index-link"));
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);
    if (!index || !list) return;

    const setCollapsed = (collapsed) => {
        page.classList.toggle("ss-index-collapsed", collapsed);
        if (!toggle) return;
        toggle.setAttribute("aria-expanded", String(!collapsed));
        toggle.setAttribute("aria-label", collapsed ? "向右展开学习目录" : "向左收起学习目录");
        const label = toggle.querySelector(".ss-index-toggle-label");
        if (label) label.textContent = collapsed ? "展开" : "收起";
    };

    setCollapsed(false);

    toggle?.addEventListener("click", () => {
        const collapsed = !page.classList.contains("ss-index-collapsed");
        setCollapsed(collapsed);
    });

    const activate = (sectionId) => {
        links.forEach((link) => {
            const active = link.getAttribute("href") === `#${sectionId}`;
            link.classList.toggle("is-active", active);
            if (active) {
                link.setAttribute("aria-current", "location");
                if (window.matchMedia("(max-width: 980px)").matches) {
                    link.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    links.forEach((link) => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href").slice(1);
            activate(id);
        });
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) activate(visible[0].target.id);
        }, {
            rootMargin: "-18% 0px -64% 0px",
            threshold: [0.08, 0.2, 0.4]
        });
        sections.forEach((section) => observer.observe(section));
    }

    const initialId = window.location.hash.slice(1);
    if (initialId && sections.some((section) => section.id === initialId)) {
        activate(initialId);
    } else if (sections[0]) {
        activate(sections[0].id);
    }

    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 980px)").matches) {
            page.classList.remove("ss-index-collapsed");
        } else {
            setCollapsed(false);
        }
    });

    index.setAttribute("data-side-index-ready", "true");
})();

(() => {
    const root = document.getElementById("long-sentence-practice");
    const bank = Array.isArray(window.SENTENCE_STRUCTURE_PRACTICE)
        ? window.SENTENCE_STRUCTURE_PRACTICE
        : [];
    if (!root || bank.length === 0) return;

    const levelLabels = {
        basic: "基础",
        intermediate: "进阶",
        advanced: "综合"
    };
    const levelButtons = Array.from(root.querySelectorAll("[data-practice-level]"));
    const stage = root.querySelector(".ss-practice-stage");
    const levelLabel = document.getElementById("ss-practice-level-label");
    const sourceType = document.getElementById("ss-practice-source-type");
    const progress = document.getElementById("ss-practice-progress");
    const source = document.getElementById("ss-practice-source");
    const sourceNote = document.getElementById("ss-practice-source-note");
    const sentence = document.getElementById("ss-practice-sentence");
    const reveal = document.getElementById("ss-practice-reveal");
    const analysis = document.getElementById("ss-practice-analysis");
    const previous = document.getElementById("ss-practice-prev");
    const next = document.getElementById("ss-practice-next");
    const dots = document.getElementById("ss-practice-dots");
    const revealLabel = reveal?.querySelector("span");
    const revealIcon = reveal?.querySelector("i");
    const viewedStorageKey = "kiki-sentence-structure-practice-viewed";
    let viewed = new Set();
    let activeLevel = "basic";
    const activeIndexes = { basic: 0, intermediate: 0, advanced: 0 };

    try {
        viewed = new Set(JSON.parse(window.localStorage.getItem(viewedStorageKey) || "[]"));
    } catch (error) {
        viewed = new Set();
    }

    const escapeHtml = (value) => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");

    const getGroup = () => bank.filter((item) => item.level === activeLevel);
    const getCurrent = () => getGroup()[activeIndexes[activeLevel]];

    const buildAnalysis = (item) => `
        <div class="ss-practice-annotated">
            <small>结构标记后的原句</small>
            <p class="ss-jp" lang="ja">${item.annotated}</p>
        </div>
        <div class="ss-practice-analysis-steps">
            <section>
                <header><span>01</span><b>最终谓语</b></header>
                <p class="ss-jp" lang="ja">${item.predicate}</p>
                <small>${escapeHtml(item.predicateNote)}</small>
            </section>
            <section>
                <header><span>02</span><b>分句边界</b></header>
                <div class="ss-practice-chunks">
                    ${item.chunks.map((chunk) => `<span class="ss-jp" lang="ja">${escapeHtml(chunk)}</span>`).join("<i aria-hidden=\"true\">／</i>")}
                </div>
                <small>先按谓语和接续形式划分，再判断各分句之间的关系。</small>
            </section>
            <section>
                <header><span>03</span><b>修饰关系</b></header>
                <p class="ss-jp" lang="ja">${escapeHtml(item.modifier)}</p>
                <small>${escapeHtml(item.modifierNote)}</small>
            </section>
            <section>
                <header><span>04</span><b>省略与逻辑</b></header>
                <p>${escapeHtml(item.relation)}</p>
            </section>
            <section>
                <header><span>05</span><b>还原主干</b></header>
                <p class="ss-jp" lang="ja">${escapeHtml(item.trunk)}</p>
                <small>${escapeHtml(item.trunkNote)}</small>
            </section>
            <section class="ss-practice-meaning">
                <header><span>06</span><b>整句理解</b></header>
                <p>${escapeHtml(item.meaning)}</p>
            </section>
        </div>
    `;

    const saveViewed = () => {
        try {
            window.localStorage.setItem(viewedStorageKey, JSON.stringify(Array.from(viewed)));
        } catch (error) {
            // Storage is optional; the exercise remains fully usable without it.
        }
    };

    const setRevealed = (isRevealed, shouldMarkViewed = false) => {
        const item = getCurrent();
        if (!item || !analysis || !reveal) return;

        analysis.hidden = !isRevealed;
        reveal.setAttribute("aria-expanded", String(isRevealed));
        reveal.classList.toggle("is-open", isRevealed);
        if (revealLabel) revealLabel.textContent = isRevealed ? "收起解析" : "查看解析";
        if (revealIcon) revealIcon.textContent = isRevealed ? "−" : "＋";

        if (isRevealed && shouldMarkViewed) {
            viewed.add(item.id);
            saveViewed();
            renderDots();
        }
    };

    const renderDots = () => {
        if (!dots) return;
        const group = getGroup();
        const currentIndex = activeIndexes[activeLevel];
        dots.innerHTML = group.map((item, index) => `
            <button
                type="button"
                class="${index === currentIndex ? "is-active" : ""} ${viewed.has(item.id) ? "is-viewed" : ""}"
                data-practice-index="${index}"
                aria-label="前往${levelLabels[activeLevel]}第${index + 1}题"
                ${index === currentIndex ? "aria-current=\"true\"" : ""}
            ></button>
        `).join("");
    };

    const render = () => {
        const group = getGroup();
        const currentIndex = Math.min(activeIndexes[activeLevel], Math.max(group.length - 1, 0));
        activeIndexes[activeLevel] = currentIndex;
        const item = group[currentIndex];
        if (!item) return;

        levelButtons.forEach((button) => {
            const active = button.dataset.practiceLevel === activeLevel;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-selected", String(active));
        });

        if (levelLabel) levelLabel.textContent = levelLabels[activeLevel];
        if (sourceType) sourceType.textContent = item.sourceType;
        if (progress) progress.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(group.length).padStart(2, "0")}`;
        if (source) {
            source.textContent = item.sourceTitle;
            source.href = item.sourceUrl;
        }
        if (sourceNote) {
            sourceNote.textContent = item.sourceNote || "";
            sourceNote.hidden = !item.sourceNote;
        }
        if (sentence) sentence.textContent = item.sentence;
        if (analysis) analysis.innerHTML = buildAnalysis(item);
        if (previous) previous.disabled = currentIndex === 0;
        if (next) next.disabled = currentIndex === group.length - 1;

        setRevealed(false);
        renderDots();
    };

    const moveTo = (index, shouldScroll = true) => {
        const group = getGroup();
        activeIndexes[activeLevel] = Math.max(0, Math.min(index, group.length - 1));
        render();
        if (shouldScroll && stage) {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
    };

    levelButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeLevel = button.dataset.practiceLevel;
            moveTo(activeIndexes[activeLevel]);
        });
    });

    reveal?.addEventListener("click", () => {
        const willOpen = reveal.getAttribute("aria-expanded") !== "true";
        setRevealed(willOpen, willOpen);
    });

    previous?.addEventListener("click", () => moveTo(activeIndexes[activeLevel] - 1));
    next?.addEventListener("click", () => moveTo(activeIndexes[activeLevel] + 1));

    dots?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-practice-index]");
        if (!button) return;
        moveTo(Number(button.dataset.practiceIndex));
    });

    render();
})();
