(function () {
    "use strict";

    function setCollapsed(button, collapsed) {
        const layout = document.getElementById(button.dataset.sideIndexLayout || "");
        const panel = document.getElementById(button.dataset.sideIndexPanel || "");
        if (!layout || !panel) return;

        layout.classList.toggle("is-index-collapsed", collapsed);
        panel.classList.toggle("is-index-collapsed", collapsed);
        button.setAttribute("aria-expanded", String(!collapsed));
        button.setAttribute("aria-label", collapsed ? "向右展开学习目录" : "向左收起学习目录");
        button.title = collapsed ? "展开学习目录" : "收起学习目录";

        const label = button.querySelector(".grammar-side-index-toggle-label");
        const icon = button.querySelector(".grammar-side-index-toggle-icon");
        if (label) label.textContent = collapsed ? "展开" : "收起";
        if (icon) icon.textContent = collapsed ? "→" : "←";
    }

    function initializeToggle(button) {
        const layout = document.getElementById(button.dataset.sideIndexLayout || "");
        if (!layout) return;

        setCollapsed(button, false);
        button.addEventListener("click", () => {
            setCollapsed(button, !layout.classList.contains("is-index-collapsed"));
        });

        const resetQuery = button.dataset.sideIndexReset;
        if (!resetQuery || !window.matchMedia) return;
        const media = window.matchMedia(resetQuery);
        const resetForCompactView = event => {
            if (event.matches) setCollapsed(button, false);
        };
        resetForCompactView(media);
        if (typeof media.addEventListener === "function") media.addEventListener("change", resetForCompactView);
        else if (typeof media.addListener === "function") media.addListener(resetForCompactView);
    }

    const CONTENT_CONTROL_SELECTOR = [
        ".wc-index-link",
        ".ss-index-link",
        ".case-index-button",
        ".compound-index-entry-button",
        ".compound-index-group-button"
    ].join(", ");

    function isDesktopView() {
        return !window.matchMedia || window.matchMedia("(min-width: 861px)").matches;
    }

    function cssEscape(value) {
        if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(String(value));
        return String(value).replace(/["\\]/g, "\\$&");
    }

    function samePageAnchor(control) {
        if (!(control instanceof HTMLAnchorElement)) return null;
        const href = control.getAttribute("href") || "";
        if (!href || href === "#" || href.startsWith("javascript:")) return null;

        let url;
        try {
            url = new URL(href, window.location.href);
        } catch (_) {
            return null;
        }
        if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return null;

        const id = decodeURIComponent(url.hash.slice(1));
        return id ? document.getElementById(id) : null;
    }

    function entryTarget(entryId) {
        if (!entryId) return null;
        const escaped = cssEscape(entryId);
        return document.querySelector(
            `[data-formal-entry="${escaped}"], ` +
            `[data-te-aux-entry="${escaped}"], ` +
            `[data-compound-entry="${escaped}"], ` +
            `#formal-${escaped}, #te-aux-${escaped}, #compound-${escaped}`
        );
    }

    function sectionTarget(sectionId) {
        if (!sectionId) return null;
        if (sectionId === "concept") {
            return document.querySelector(
                "#concept-panel.is-active, #compoundConceptPanel.is-active, #formalConceptPanel.is-active, " +
                "#teAuxConceptPanel.is-active, #concept-panel, #compoundConceptPanel, #formalConceptPanel, #teAuxConceptPanel"
            );
        }
        if (sectionId === "special") {
            return document.querySelector("#special-panel.is-active, #special-panel, #particle-detail.is-active");
        }

        const encoded = encodeURIComponent(sectionId);
        const plain = cssEscape(sectionId);
        return document.getElementById(`particle-${sectionId}-top`) ||
            document.getElementById(`particle-${encoded}-top`) ||
            document.getElementById(`connection-${encoded}-top`) ||
            document.getElementById(`focus-${encoded}-top`) ||
            document.querySelector(`#particle-${plain}-top, #connection-${plain}-top, #focus-${plain}-top`) ||
            document.querySelector("#particle-detail.is-active .particle-heading, #particle-detail.is-active, #particle-detail");
    }

    function activeContentTarget() {
        const activeEntry = document.querySelector(
            ".compound-index-entry-button.is-active[data-entry-id], " +
            ".compound-index-entry-button[aria-current='page'][data-entry-id]"
        );
        const entry = entryTarget(activeEntry?.dataset.entryId);
        if (entry) return entry;

        return document.querySelector(
            ".compound-panel.is-active .compound-card-active, " +
            ".compound-panel.is-active, .case-panel.is-active, " +
            ".wc-content section:target, .ss-content section:target"
        );
    }

    function resolveContentTarget(control) {
        const anchor = samePageAnchor(control);
        if (anchor) return anchor;

        if (control.classList.contains("compound-index-entry-button")) {
            return entryTarget(control.dataset.entryId) || activeContentTarget();
        }

        if (control.classList.contains("compound-index-group-button")) {
            // 有 aria-controls 的分组按钮只负责展开或收起目录，不切换正文。
            if (control.hasAttribute("aria-controls")) return null;
            const groupId = control.closest("[data-index-group]")?.dataset.indexGroup;
            if (groupId === "concept") return sectionTarget("concept");
            return activeContentTarget();
        }

        if (control.classList.contains("case-index-button")) {
            return sectionTarget(control.dataset.section) || activeContentTarget();
        }

        return activeContentTarget();
    }

    function fixedHeaderOffset() {
        const header = document.querySelector(
            ".kiki-unified-header, [data-kiki-unified-header], .wc-topbar, .compound-topbar, .case-topbar, .ss-topbar"
        );
        if (!header) return 16;
        const rect = header.getBoundingClientRect();
        return rect.top <= 2 && rect.bottom > 0 ? Math.ceil(rect.bottom) + 16 : 16;
    }

    function scrollTargetToTop(target) {
        if (!target || !target.isConnected) return;
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - fixedHeaderOffset());
        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    }

    function initializeContentNavigation() {
        document.addEventListener("click", (event) => {
            if (!isDesktopView()) return;
            const control = event.target.closest(CONTENT_CONTROL_SELECTOR);
            if (!control || control.closest("[data-grammar-side-index-toggle], .adverbial-index-toggle")) return;

            // 先让页面完成正文切换和动态渲染，再把所选内容贴近正文顶部。
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    scrollTargetToTop(resolveContentTarget(control));
                });
            });
        });
    }

    function initialize() {
        document.querySelectorAll("[data-grammar-side-index-toggle]").forEach(initializeToggle);
        initializeContentNavigation();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
    else initialize();
})();
