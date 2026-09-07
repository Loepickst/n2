(function () {
    "use strict";

    const data = window.AFFIX_LEARNING_DATA;
    if (!data) return;

    const escapeHtml = (value) =>
        String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    const normalize = (value) =>
        String(value ?? "")
            .normalize("NFKC")
            .toLocaleLowerCase("ja-JP")
            .replace(/\s+/g, "");

    const naturalTitle = (value) => String(value ?? "").replace(/・/g, "、");
    const twoDigits = (value) => String(value).padStart(2, "0");

    function displayExpression(value) {
        const expression = String(value ?? "").trim();
        const match = expression.match(/^(.*?)[（(]([^（）()]*)[）)]$/);
        if (!match) return expression;

        const base = match[1].trim();
        const reading = match[2].trim();
        const normalizedBase = base.replace(/[〜～~\s]/g, "");
        const normalizedReading = reading.replace(/[〜～~\s]/g, "");

        return normalizedBase === normalizedReading ? base : expression;
    }

    function meaningMarkup(value) {
        const meaning = String(value ?? "").trim();

        if (meaning.startsWith("表示")) {
            return `表示<strong>${escapeHtml(meaning.slice(2))}</strong>`;
        }

        const marker = meaning.indexOf("，表示");
        if (marker !== -1) {
            const lead = meaning.slice(0, marker + 3);
            const focus = meaning.slice(marker + 3);
            return `${escapeHtml(lead)}<strong>${escapeHtml(focus)}</strong>`;
        }

        return `<strong>${escapeHtml(meaning)}</strong>`;
    }

    const typeConfig = {
        prefix: {
            label: "接头词",
            groups: data.prefixGroups,
            contentTarget: document.getElementById("prefixGroups"),
            indexTarget: document.getElementById("prefixIndexLinks")
        },
        suffix: {
            label: "接尾词",
            groups: data.suffixGroups,
            contentTarget: document.getElementById("suffixGroups"),
            indexTarget: document.getElementById("suffixIndexLinks")
        },
        expression: {
            label: "接尾表达",
            groups: data.expressionGroups,
            contentTarget: document.getElementById("expressionGroups"),
            indexTarget: document.getElementById("expressionIndexLinks")
        }
    };

    function displayNumber(type, group, index) {
        return type === "expression" ? twoDigits(index + 1) : group.number;
    }

    function groupId(type, group, index) {
        return `${type}-group-${displayNumber(type, group, index)}`;
    }

    function exampleMarkup(examples) {
        return String(examples)
            .split("・")
            .map((example) => example.trim())
            .filter(Boolean)
            .map((example) => {
                const match = example.match(/^(.*?)(（[^（）]*）)$/);
                if (!match) {
                    return `<span class="affix-example"><b lang="ja">${escapeHtml(example)}</b></span>`;
                }

                return `
                    <span class="affix-example">
                        <b lang="ja">${escapeHtml(match[1])}</b>
                        <em>${escapeHtml(match[2])}</em>
                    </span>
                `;
            })
            .join("");
    }

    function itemMarkup(type, item) {
        const searchText = normalize(
            `${item.expression} ${item.meaning} ${item.examples} ${typeConfig[type].label}`
        );
        const favoriteButton = type === "expression"
            ? `
                <button
                    class="grammar-learning-favorite affix-expression-favorite"
                    type="button"
                    data-grammar-local-id="${escapeHtml(item.expression)}"
                    data-grammar-source-key="affix-expressions"
                    data-grammar-title="${escapeHtml(displayExpression(item.expression))}"
                ></button>
            `
            : "";
        return `
            <article class="affix-item${type === "expression" ? " affix-item--expression" : ""}" data-affix-item data-affix-type="${type}" data-affix-search="${escapeHtml(searchText)}">
                <b lang="ja">${escapeHtml(displayExpression(item.expression))}</b>
                ${favoriteButton}
                <p>${meaningMarkup(item.meaning)}</p>
                <div class="affix-example-list">${exampleMarkup(item.examples)}</div>
            </article>
        `;
    }

    function groupMarkup(type, group, index) {
        const number = displayNumber(type, group, index);
        const id = groupId(type, group, index);
        return `
            <section class="affix-group" id="${id}" data-affix-group data-affix-type="${type}">
                <header>
                    <span>${number}</span>
                    <div>
                        <small>${typeConfig[type].label}</small>
                        <h3>${escapeHtml(naturalTitle(group.title))}</h3>
                    </div>
                    <b>${group.items.length} 条</b>
                </header>
                <div class="affix-column-head" aria-hidden="true">
                    <span>表达</span><span>用法</span><span>例词</span>
                </div>
                <div>${group.items.map((item) => itemMarkup(type, item)).join("")}</div>
            </section>
        `;
    }

    function indexMarkup(type, group, index) {
        const number = displayNumber(type, group, index);
        const id = groupId(type, group, index);
        return `
            <a class="wc-index-link wc-index-link--sub" href="#${id}" data-affix-index-link="${id}">
                <span>${number}</span><b>${escapeHtml(naturalTitle(group.title))}</b>
            </a>
        `;
    }

    Object.entries(typeConfig).forEach(([type, config]) => {
        config.contentTarget.innerHTML = config.groups
            .map((group, index) => groupMarkup(type, group, index))
            .join("");
        config.indexTarget.innerHTML = config.groups
            .map((group, index) => indexMarkup(type, group, index))
            .join("");
    });

    const indexCollapseStorageKey = "kikiAffixIndexCollapse";
    const indexMobileQuery = window.matchMedia("(max-width: 860px)");
    const indexSections = [...document.querySelectorAll("[data-affix-index-section]")];
    let indexCollapseState = {};

    try {
        const stored = JSON.parse(window.localStorage.getItem(indexCollapseStorageKey) || "{}");
        if (stored && typeof stored === "object") indexCollapseState = stored;
    } catch (_error) {
        indexCollapseState = {};
    }

    function saveIndexCollapseState() {
        try {
            window.localStorage.setItem(indexCollapseStorageKey, JSON.stringify(indexCollapseState));
        } catch (_error) {
            // Collapsing still works when local storage is unavailable.
        }
    }

    function setIndexSectionCollapsed(section, collapsed, persist = true) {
        if (!section) return;
        const type = section.dataset.affixIndexSection;
        const toggle = section.querySelector("[data-affix-index-toggle]");
        const panel = toggle ? document.getElementById(toggle.getAttribute("aria-controls")) : null;
        if (!toggle || !panel) return;

        const requestedState = Boolean(collapsed);
        const visuallyCollapsed = requestedState && !indexMobileQuery.matches;
        toggle.setAttribute("aria-expanded", String(!visuallyCollapsed));
        panel.hidden = visuallyCollapsed;
        section.classList.toggle("is-collapsed", visuallyCollapsed);

        if (persist) {
            indexCollapseState[type] = requestedState;
            saveIndexCollapseState();
        }
    }

    function expandIndexSectionForHash(hash, persist = false) {
        if (!hash || hash === "#") return;
        const link = [...document.querySelectorAll("#affixesIndexList a[href^='#']")]
            .find((item) => item.getAttribute("href") === hash);
        const section = link?.closest("[data-affix-index-section]");
        if (section) setIndexSectionCollapsed(section, false, persist);
    }

    indexSections.forEach((section) => {
        const type = section.dataset.affixIndexSection;
        const toggle = section.querySelector("[data-affix-index-toggle]");
        setIndexSectionCollapsed(section, indexCollapseState[type] === true, false);
        toggle?.addEventListener("click", () => {
            const collapsed = toggle.getAttribute("aria-expanded") === "true";
            setIndexSectionCollapsed(section, collapsed);
        });
    });

    indexMobileQuery.addEventListener("change", () => {
        indexSections.forEach((section) => {
            const type = section.dataset.affixIndexSection;
            setIndexSectionCollapsed(section, indexCollapseState[type] === true, false);
        });
    });

    window.addEventListener("hashchange", () => {
        expandIndexSectionForHash(window.location.hash);
    });
    expandIndexSectionForHash(window.location.hash);

    const input = document.getElementById("affixSearchInput");
    const count = document.getElementById("affixResultCount");
    const empty = document.getElementById("affixEmptyState");
    const filterButtons = [...document.querySelectorAll("[data-affix-filter]")];
    const sections = [...document.querySelectorAll("[data-affix-section]")];
    const groups = [...document.querySelectorAll("[data-affix-group]")];
    const items = [...document.querySelectorAll("[data-affix-item]")];
    const indexLinks = [...document.querySelectorAll("[data-affix-index-link]")];
    const guideChapters = [...document.querySelectorAll("[data-affix-guide]")];
    const guideLinks = [...document.querySelectorAll("[data-affix-guide-link]")];
    let activeType = "all";

    function applyFilters() {
        const query = normalize(input.value);
        let visibleCount = 0;

        items.forEach((item) => {
            const typeMatches = activeType === "all" || item.dataset.affixType === activeType;
            const textMatches = !query || item.dataset.affixSearch.includes(query);
            const visible = typeMatches && textMatches;
            item.hidden = !visible;
            if (visible) visibleCount += 1;
        });

        groups.forEach((group) => {
            const hasVisibleItem = [...group.querySelectorAll("[data-affix-item]")].some(
                (item) => !item.hidden
            );
            group.hidden = !hasVisibleItem;
        });

        sections.forEach((section) => {
            const hasVisibleGroup = [...section.querySelectorAll("[data-affix-group]")].some(
                (group) => !group.hidden
            );
            section.hidden = !hasVisibleGroup;
        });

        indexLinks.forEach((link) => {
            const group = document.getElementById(link.dataset.affixIndexLink);
            link.hidden = !group || group.hidden;
        });

        guideChapters.forEach((guide) => {
            const typeMatches = activeType === "all" || activeType === "expression";
            const textMatches = !query || normalize(guide.textContent).includes(query);
            guide.hidden = !(typeMatches && textMatches);
        });

        guideLinks.forEach((link) => {
            const guide = document.getElementById(link.dataset.affixGuideLink);
            link.hidden = !guide || guide.hidden;
        });

        count.textContent = `共 ${visibleCount} 条`;
        empty.hidden = visibleCount !== 0;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeType = button.dataset.affixFilter;
            if (activeType !== "all") {
                const relatedSection = document.querySelector(
                    `[data-affix-index-section="${activeType}"]`
                );
                setIndexSectionCollapsed(relatedSection, false);
            }
            filterButtons.forEach((current) => {
                const selected = current === button;
                current.classList.toggle("is-active", selected);
                current.setAttribute("aria-pressed", String(selected));
            });
            applyFilters();
        });
    });

    input.addEventListener("input", applyFilters);
    applyFilters();
})();
