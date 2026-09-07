(() => {
    "use strict";

    const buttons = Array.from(document.querySelectorAll(".keigo-index-button"));
    const panels = Array.from(document.querySelectorAll(".keigo-panel"));
    const validSections = new Set(panels.map((panel) => panel.dataset.panel));
    const titleBar = document.querySelector(".keigo-title-bar");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function normalizeSection(section) {
        return validSections.has(section) ? section : "concept";
    }

    function updateSection(section, options = {}) {
        const { historyMode = "none", scroll = false, focus = false } = options;
        const activeSection = normalizeSection(section);

        buttons.forEach((button) => {
            const active = button.dataset.section === activeSection;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });

        panels.forEach((panel) => {
            const active = panel.dataset.panel === activeSection;
            panel.hidden = !active;
            panel.classList.toggle("is-active", active);
            panel.setAttribute("aria-hidden", String(!active));
        });

        const activePanel = panels.find((panel) => panel.dataset.panel === activeSection);
        if (historyMode === "push") history.pushState({ keigoSection: activeSection }, "", `#${activeSection}`);
        if (historyMode === "replace") history.replaceState({ keigoSection: activeSection }, "", `#${activeSection}`);

        if (scroll && titleBar) {
            const headerHeight = Number.parseFloat(
                getComputedStyle(document.documentElement).getPropertyValue("--site-header-height")
            ) || 64;
            const targetTop = titleBar.getBoundingClientRect().bottom + window.scrollY - headerHeight;
            if (window.scrollY > targetTop + 16) {
                window.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
            }
        }

        if (focus && activePanel) {
            activePanel.setAttribute("tabindex", "-1");
            activePanel.focus({ preventScroll: true });
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            updateSection(button.dataset.section, { historyMode: "push", scroll: true });
        });
    });

    document.querySelectorAll("[data-keigo-jump]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            updateSection(link.dataset.keigoJump, { historyMode: "push", scroll: true, focus: true });
        });
    });

    window.addEventListener("popstate", () => {
        updateSection(location.hash.slice(1), { historyMode: "none" });
    });
    window.addEventListener("hashchange", () => {
        updateSection(location.hash.slice(1), { historyMode: "none" });
    });

    function buildSpecialMobileCards() {
        const table = document.getElementById("special-keigo-table");
        const container = document.getElementById("special-keigo-cards");
        if (!table || !container || container.children.length) return;

        table.querySelectorAll("tbody tr").forEach((row) => {
            if (row.classList.contains("keigo-table-group")) {
                const heading = document.createElement("h3");
                heading.className = "keigo-card-group-title";
                heading.textContent = row.textContent.trim();
                container.appendChild(heading);
                return;
            }

            const cells = Array.from(row.children);
            if (cells.length !== 6) return;

            const card = document.createElement("article");
            card.className = "keigo-special-card";
            card.innerHTML = `
                <header>
                    <h4 lang="ja">${cells[0].innerHTML}</h4>
                    <span>${cells[1].innerHTML}</span>
                </header>
                <dl>
                    <div><dt>尊他</dt><dd lang="ja">${cells[2].innerHTML}</dd></div>
                    <div><dt>自谦Ⅰ</dt><dd lang="ja">${cells[3].innerHTML}</dd></div>
                    <div><dt>自谦Ⅱ</dt><dd lang="ja">${cells[4].innerHTML}</dd></div>
                </dl>
                <p>${cells[5].innerHTML}</p>
            `;
            container.appendChild(card);
        });
    }

    buildSpecialMobileCards();

    const initialSection = normalizeSection(location.hash.slice(1));
    updateSection(initialSection, {
        historyMode: location.hash.slice(1) === initialSection ? "none" : "replace"
    });
})();
