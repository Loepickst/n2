(function () {
    "use strict";

    if (window.__kikiUnifiedHeaderLoaded) {
        return;
    }
    window.__kikiUnifiedHeaderLoaded = true;

    const script = document.currentScript;
    const sharedBase = script && script.src ? new URL(".", script.src) : new URL("shared/", window.location.href);
    const homeUrl = new URL("../index.html", sharedBase);
    const logoUrl = new URL("../assets/home-redesign/kiji-logo-maple-header-v3.webp?v=20260810-no-tagline", sharedBase);

    function ensureStylesheet() {
        if (document.querySelector("link[data-kiki-unified-header-style]")) {
            return;
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("unified-header.css?v=20260811-listening-jp", sharedBase).href;
        link.dataset.kikiUnifiedHeaderStyle = "true";
        document.head.appendChild(link);
    }

    function projectPath(url) {
        return decodeURIComponent(url.pathname)
            .replace(/^\/+/, "")
            .replace(/^.*?(?=(?:daily|exam|designs)\/)/, "")
            .toLowerCase();
    }

    function normalizedPath() {
        return projectPath(window.location);
    }

    function listeningSectionConfig(path) {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const pathLevel = path.match(/\/(n[123])(?:\/|$)/i);
        const level = (pathLevel ? pathLevel[1] : params.get("level") || "").toUpperCase();
        const base = {
            title: level ? `${level} 聴解特訓` : "聴解特訓",
            backLabel: "試験対策へ戻る",
            hash: "#exam/exam-listening",
            type: "practice"
        };

        if (/\/years\/[^/]+\.html$/i.test(path)) {
            return {
                ...base,
                backLabel: "年度一覧へ戻る",
                href: "../index.html?browse=year",
                freshBack: true
            };
        }

        if (path === "exam/listening/shared/category-practice.html") {
            const folderByType = {
                task_comprehension: "task-comprehension",
                point_comprehension: "point-comprehension",
                overview_comprehension: "summary-comprehension",
                summary_comprehension: "summary-comprehension",
                immediate_response: "immediate-response",
                integrated_comprehension: "integrated-comprehension"
            };
            const folder = folderByType[String(params.get("type") || "").toLowerCase()];
            const category = params.get("category");
            const categoryQuery = category ? `&category=${encodeURIComponent(category)}` : "";
            return {
                ...base,
                backLabel: "分類一覧へ戻る",
                freshBack: true,
                href: folder && level
                    ? `../${folder}/${level.toLowerCase()}/index.html?browse=category${categoryQuery}`
                    : "../index.html"
            };
        }

        if (path === "exam/listening/shared/random-exam.html") {
            const folderByType = {
                task_comprehension: "task-comprehension",
                point_comprehension: "point-comprehension",
                overview_comprehension: "summary-comprehension",
                summary_comprehension: "summary-comprehension",
                immediate_response: "immediate-response",
                integrated_comprehension: "integrated-comprehension"
            };
            const folder = folderByType[String(params.get("type") || "").toLowerCase()];
            return {
                ...base,
                backLabel: "練習メニューへ戻る",
                freshBack: true,
                href: folder && level
                    ? `../${folder}/${level.toLowerCase()}/index.html`
                    : "../index.html"
            };
        }

        if (path === "exam/listening/full-practice/practice.html") {
            return {
                ...base,
                backLabel: "模擬試験一覧へ戻る",
                href: "./index.html?browse=year",
                freshBack: true
            };
        }

        if (/^exam\/listening\/[^/]+\/n[123]\/index\.html$/i.test(path)) {
            const browse = params.get("browse");
            if (["year", "category", "mistakes"].includes(browse)) {
                return {
                    ...base,
                    backLabel: "練習メニューへ戻る",
                    href: "./index.html"
                };
            }
            return {
                ...base,
                backLabel: "聴解メニューへ戻る"
            };
        }

        if (/^exam\/listening\/[^/]+\/index\.html$/i.test(path)
            || path === "exam/listening/full-practice/index.html") {
            return {
                ...base,
                backLabel: "聴解メニューへ戻る"
            };
        }

        return base;
    }

    function readingSectionConfig(path) {
        const url = new URL(window.location.href);
        const params = url.searchParams;
        const pathLevel = path.match(/\/(n[12])(?:\/|$)/i);
        const level = (pathLevel ? pathLevel[1] : params.get("level") || "").toUpperCase();
        const pathTypeMap = {
            "/s/": "short",
            "/m/": "middle",
            "/l/": "long",
            "/d/": "integrated",
            "/t/": "search"
        };
        const typeTitleMap = {
            short: "短文読解",
            middle: "中篇読解",
            long: "長文読解",
            integrated: "統合理解",
            search: "情報検索"
        };
        const pathType = Object.keys(pathTypeMap).find((key) => path.includes(key));
        const readingType = pathType ? pathTypeMap[pathType] : String(params.get("type") || "").toLowerCase();
        const typeTitle = typeTitleMap[readingType] || "読解特訓";

        const readingIndex = new URL("../exam/jlpt-reading/index.html", sharedBase);
        readingIndex.searchParams.set("level", level || "N1");
        if (readingType) readingIndex.searchParams.set("type", readingType);

        let backLabel = "返回备考专区";
        let href = `${readingIndex.pathname}${readingIndex.search}`;
        if (params.get("mode") === "review") {
            backLabel = "返回错题目录";
            readingIndex.searchParams.set("browse", "mistakes");
            href = `${readingIndex.pathname}${readingIndex.search}`;
        } else if (params.get("practiceMode") === "category" && params.get("category")) {
            backLabel = "返回分类目录";
            readingIndex.searchParams.set("browse", "category");
            readingIndex.searchParams.set("category", params.get("category"));
            href = `${readingIndex.pathname}${readingIndex.search}`;
        } else if (readingType) {
            backLabel = "返回年度目录";
            readingIndex.searchParams.set("browse", "year");
            href = `${readingIndex.pathname}${readingIndex.search}`;
        }

        return {
            title: level ? `${level} · ${typeTitle}` : typeTitle,
            backLabel,
            href,
            canonicalBack: true,
            type: "practice"
        };
    }

    function sectionConfig(path) {
        if (path.endsWith("lottery.html")) {
            return { title: "御神签", backLabel: "返回首页", hash: "", type: "practice" };
        }
        if (path.startsWith("test/keigo") || path.includes("敬语练习")) {
            return { title: "敬語練習", backLabel: "返回敬语学习", hash: "#daily/daily-grammar", type: "practice" };
        }
        if (path.startsWith("test/vocal")) {
            return { title: "語彙練習", backLabel: "返回词汇特训", hash: "#exam/exam-vocabulary", type: "practice" };
        }
        if (path.startsWith("daily/light-read/")) {
            return { title: "日常阅读", backLabel: "返回目录", hash: "#daily/daily-light-read", type: "reading" };
        }
        if (path.startsWith("daily/culture/music/")) {
            return { title: "歌曲里的日语", backLabel: "返回日本文化", hash: "#daily/daily-culture", type: "reading" };
        }
        if (path.startsWith("daily/culture/anime/") || path.startsWith("daily/culture/mahjong/")) {
            return { title: "二次元の世界", backLabel: "返回二次元の世界", hash: "#daily/daily-culture/culture-anime-world", type: "reading" };
        }
        if (path.startsWith("daily/culture/")) {
            return { title: "日本文化", backLabel: "返回日常学习", hash: "#daily", type: "reading" };
        }
        if (path.startsWith("daily/search/")) {
            return { title: path.endsWith("try.html") ? "Try! 思维导图" : "语法搜索", backLabel: "返回日常学习", hash: "#daily", type: "study" };
        }
        if (path.includes("复合格助词")) {
            return { title: "复合格助词", backLabel: "返回语法学习", hash: "#daily/daily-grammar", type: "study" };
        }
        if (path.startsWith("daily/grammar/")) {
            const grammarTitles = {
                "change.html": "動詞の活用",
                "word-classes.html": "文法理解",
                "particle-concept.html": "文法理解",
                "kakujyo.html": "文法理解",
                "fukujoshi.html": "文法理解",
                "heiretsujoshi.html": "文法理解",
                "teijijyoshi.html": "文法理解",
                "setsuzokujoshi.html": "文法理解",
                "shujoshi.html": "文法理解",
                "sentence-structure.html": "文法理解",
                "sentence-structure-practice.html": "文法理解",
                "conjunction.html": "文法理解",
                "formal-nouns.html": "文法理解",
                "te-auxiliary.html": "文法理解",
                "appearance-expressions.html": "文法理解",
                "demonstratives.html": "文法理解",
                "affixes.html": "文法理解",
                "kakujyo_practice.html": "格助詞練習",
                "敬语.html": "敬語学習",
                "conditional-comparison.html": "仮定表現"
            };
            const fileName = path.split("/").pop();
            return { title: grammarTitles[fileName] || "语法学习", backLabel: "返回语法学习", hash: "#daily/daily-grammar", type: "study" };
        }
        if (path.startsWith("daily/try-n1/") || path.startsWith("daily/try-n2/")) {
            const level = path.startsWith("daily/try-n1/") ? "N1" : "N2";
            return { title: `TRY! ${level} 教材学习`, backLabel: "返回教材学习", hash: "#daily/exam-textbook", type: "study" };
        }
        if (path === "exam/vocabulary/n1/comprehensive_practice_n1_verbs.html") {
            return {
                title: "N1 综合练习",
                backLabel: "返回动词目录",
                href: "./verbs_n1.html",
                type: "practice"
            };
        }
        if (path === "exam/vocabulary/n1/practice_n1_verbs.html") {
            return {
                title: "N1 語彙特訓",
                backLabel: "返回单词背诵页面",
                href: "./verbs_n1.html",
                type: "practice"
            };
        }
        if (path === "exam/vocabulary/n1/practice_n1_adjectives.html") {
            return {
                title: "N1 語彙特訓",
                backLabel: "返回单词背诵页面",
                href: "./adjectives_n1.html",
                type: "practice"
            };
        }
        if (path.startsWith("exam/vocabulary/")) {
            const level = path.includes("/n1/") ? "N1" : (path.includes("/n2/") ? "N2" : "");
            return { title: level ? `${level} 語彙特訓` : "語彙暗記", backLabel: "返回备考专区", hash: "#exam/exam-vocabulary", type: "practice" };
        }
        if (path.startsWith("exam/grammar/")) {
            let title = "文法练习";
            if (path.includes("/sort/")) title = "文法排序题";
            if (path.includes("/cloze/")) title = "文法完形填空";
            return { title, backLabel: "返回备考专区", hash: "#exam/exam-grammar", type: "practice" };
        }
        if (path.startsWith("exam/jlpt-reading/")) {
            return readingSectionConfig(path);
        }
        if (path.startsWith("exam/listening/")) {
            return listeningSectionConfig(path);
        }
        return { title: "日语学习", backLabel: "返回首页", hash: "", type: "study" };
    }

    function returnTarget(config) {
        if (config.href) {
            return new URL(config.href, window.location.href).href;
        }
        const params = new URL(window.location.href).searchParams;
        const returnValue = params.get("return");
        if (returnValue) {
            try {
                return new URL(returnValue, window.location.href).href;
            } catch (error) {
                // Fall through to the canonical homepage section.
            }
        }
        const target = new URL(homeUrl.href);
        target.hash = config.hash;
        return target.href;
    }

    function hasReturnSource() {
        return new URL(window.location.href).searchParams.has("return");
    }

    function currentPageReturnValue() {
        return `${window.location.pathname}${window.location.search}${window.location.hash}`;
    }

    function shouldCarryGrammarReturn(anchor) {
        if (!(anchor instanceof HTMLAnchorElement)) return false;
        if (anchor.closest(".kiki-unified-header, [data-kiki-header-source-hidden='true']")) return false;
        if (anchor.matches(".reading-head-back, .reading-site-back, .compound-back-link, .compound-header-back, .header-back-control, .ss-back, .wc-back, .te-aux-back, #back-to-reading-index, .back-btn, .header-btn")) return false;
        if (anchor.hasAttribute("download")) return false;

        const rawHref = anchor.getAttribute("href") || "";
        if (!rawHref || rawHref.startsWith("#") || /^(?:javascript:|mailto:|tel:)/i.test(rawHref)) return false;

        let target;
        try {
            target = new URL(rawHref, window.location.href);
        } catch (error) {
            return false;
        }

        if (target.origin !== window.location.origin) return false;

        const sourcePath = normalizedPath();
        const targetPath = projectPath(target);
        if (!sourcePath.startsWith("daily/grammar/")) return false;
        if (!/^daily\/grammar\/(?:foundation|particles|expressions)\/.+\.html$/i.test(targetPath)) return false;
        if (target.pathname === window.location.pathname) return false;
        return true;
    }

    function carryGrammarReturn(anchor) {
        if (!shouldCarryGrammarReturn(anchor)) return;
        const target = new URL(anchor.getAttribute("href"), window.location.href);
        target.searchParams.set("return", currentPageReturnValue());
        anchor.href = target.href;
    }

    function enableGrammarReturnChain(path) {
        if (!path.startsWith("daily/grammar/")) return;

        document.querySelectorAll("a[href]").forEach(carryGrammarReturn);
        document.addEventListener("click", (event) => {
            const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
            if (anchor) carryGrammarReturn(anchor);
        }, true);
    }

    function findSourceHeader() {
        const selectors = [
            ".reading-site-header",
            ".sort-page-header",
            ".page-topbar",
            "body > .nav-bar",
            "body > .top-bar",
            "body > header"
        ];
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element && !element.closest(".modal-overlay") && !element.classList.contains("kiki-unified-header")) {
                return element;
            }
        }
        return null;
    }

    function findBackElement(source) {
        const selectors = [
            "[data-kiki-unified-back]",
            "[data-reading-back]",
            ".reading-site-back",
            ".reading-head-back",
            ".compound-header-back",
            ".header-back-control",
            ".ss-back",
            "#back-to-reading-index",
            "#backBtn",
            "[data-back-nav]",
            ".back-btn",
            ".header-btn"
        ];
        for (const selector of selectors) {
            const scopeMatch = source ? source.querySelector(selector) : null;
            if (scopeMatch) return scopeMatch;
            const documentMatch = document.querySelector(selector);
            if (documentMatch) return documentMatch;
        }
        return null;
    }

    function findActionContainer(source) {
        if (!source) return null;
        const selectors = [
            ".reading-site-actions",
            ".reading-head-tools",
            ".reading-editorial-actions",
            ".top-actions",
            ".top-bar-controls",
            ".header-actions",
            ".header-right-slot",
            ".topbar-actions"
        ];
        for (const selector of selectors) {
            const element = source.querySelector(selector);
            if (element) return element;
        }
        const navItems = Array.from(source.querySelectorAll(":scope > .nav-item"));
        if (navItems.length) {
            const wrapper = document.createElement("div");
            wrapper.className = "kiki-unified-nav-actions";
            navItems.forEach((item) => wrapper.appendChild(item));
            return wrapper;
        }
        const directControls = Array.from(source.children).filter((element) => {
            if (!(element instanceof HTMLElement)) return false;
            if (!element.matches("a, button")) return false;
            return !element.matches("[data-kiki-unified-back], .reading-head-back, .reading-site-back, .compound-header-back, .header-back-control, .ss-back, #back-to-reading-index, .back-btn, .header-btn");
        });
        if (directControls.length) {
            const wrapper = document.createElement("div");
            wrapper.className = "kiki-unified-direct-actions";
            directControls.forEach((item) => wrapper.appendChild(item));
            return wrapper;
        }
        return null;
    }

    function arrowMarkup() {
        return '<svg class="kiki-unified-back-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"></path></svg>';
    }

    function normalizeBackLabel(value, fallback) {
        const label = String(value || "")
            .replace(/^[\s\u2039\u203A\u276E\u276F\u3008\u3009\u300A\u300B\u2190\u2192\u21A9\u21AA<>]+/u, "")
            .trim();
        return label || fallback;
    }

    function prepareBackElement(existing, config) {
        let back = existing || document.createElement("a");
        if (config.freshBack && existing && !existing.hasAttribute("data-kiki-dynamic-back")) {
            const replacement = document.createElement("a");
            replacement.id = existing.id;
            replacement.className = existing.className;
            existing.replaceWith(replacement);
            back = replacement;
        }
        const isDynamicBack = back.hasAttribute("data-kiki-dynamic-back");
        const currentBackLabel = normalizeBackLabel(
            back.getAttribute("aria-label") || back.textContent,
            config.backLabel
        );
        const backLabel = config.canonicalBack
            ? config.backLabel
            : (isDynamicBack
                ? (currentBackLabel || config.backLabel)
                : (hasReturnSource() ? "返回上一学习页" : config.backLabel));
        if (back.tagName !== "A") {
            const replacement = document.createElement("a");
            replacement.id = back.id;
            replacement.href = returnTarget(config);
            back = replacement;
        }
        back.classList.add("kiki-unified-back");
        if (!isDynamicBack || config.canonicalBack) {
            back.href = returnTarget(config);
        }
        const mobileBackLabel = /聴解/.test(config.title) ? "戻る" : "返回";
        back.setAttribute("aria-label", backLabel);
        back.innerHTML = `${arrowMarkup()}<span class="kiki-unified-back-label">${backLabel}</span><span class="kiki-unified-back-label-mobile" aria-hidden="true">${mobileBackLabel}</span>`;
        return back;
    }

    function isPracticeAction(control) {
        if (!(control instanceof HTMLElement)) return false;
        const text = (control.textContent || "").replace(/\s+/g, "");
        if (text.includes("练习") || text.includes("練習")) return true;

        if (control instanceof HTMLAnchorElement) {
            const href = control.getAttribute("href") || "";
            return /(?:practice|练习|練習|\/test\/)/i.test(href);
        }
        return false;
    }

    function keepOnlyGrammarPracticeActions(container, path) {
        if (!container || !path.startsWith("daily/grammar/")) return;
        if (container.matches("[data-kiki-header-utility]")) return;

        container.querySelectorAll("a, button, .nav-item").forEach((control) => {
            if (!isPracticeAction(control)) {
                control.remove();
            }
        });
    }

    function removeListeningLegacyActions(container, path) {
        if (!container || !path.startsWith("exam/listening/")) return;
        container.querySelectorAll("a, button, .nav-item").forEach((control) => {
            const text = (control.textContent || "").replace(/\s+/g, "");
            if (/^(?:主页|ホーム|返回题型页|返回练习目录|返回年度目录|練習メニューへ戻る|年度一覧へ戻る)/.test(text)) {
                control.remove();
            }
        });
    }

    function mobileActionLabel(control) {
        const explicit = control.getAttribute("data-mobile-label");
        if (explicit) return explicit;

        const text = (control.textContent || "").replace(/[→←]/g, "").trim();
        if (!text) return "";
        if (text.includes("练习")) return "练习";
        if (text.includes("讲解") || text.includes("理解")) return "讲解";
        if (text.includes("语句构造")) return "构造";
        if (text.includes("复合格助词")) return "练习";
        if (text.includes("进入")) return text.replace("进入", "").slice(0, 4) || "进入";
        return text.slice(0, 4);
    }

    function prepareActionLabels(container) {
        if (!container) return;
        if (container.matches("[data-kiki-header-utility]")) return;
        container.querySelectorAll("a, button, .nav-item").forEach((control) => {
            if (!(control instanceof HTMLElement)) return;
            if (control.closest(".reading-settings-popover")) return;
            if (control.matches("[data-reading-action='favorite'], .reading-settings-trigger, .reading-immersive-trigger")) {
                control.removeAttribute("data-kiki-mobile-label");
                return;
            }
            const label = mobileActionLabel(control);
            if (label) {
                control.setAttribute("data-kiki-mobile-label", label);
            }
        });
    }

    function setupGrammarTextSizeControl(path, rightSlot) {
        if (!path.startsWith("daily/grammar/") || !rightSlot) return;

        const storageKey = "kikiGrammarTextSize";
        const validSizes = new Set(["small", "standard", "large"]);
        const textSelector = [
            "h1", "h2", "h3", "h4", "h5", "h6",
            "p", "li", "dt", "dd", "th", "td",
            "figcaption", "blockquote", "label", "summary", "small",
            "a", "button", "span", "b", "strong", "em", "i", "mark", "time",
            "input", "select", "textarea"
        ].join(",");

        function readStoredSize() {
            try {
                const stored = window.localStorage.getItem(storageKey);
                return validSizes.has(stored) ? stored : "standard";
            } catch (_error) {
                return "standard";
            }
        }

        function writeStoredSize(size) {
            try {
                window.localStorage.setItem(storageKey, size);
            } catch (_error) {
                // The setting remains active for the current page.
            }
        }

        function hasOwnText(element) {
            if (element.matches("input, select, textarea")) return true;
            return Array.from(element.childNodes).some((node) =>
                node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );
        }

        function isDocumentText(element) {
            if (!(element instanceof HTMLElement)) return false;
            if (!hasOwnText(element)) return false;
            if (element.closest(".kiki-unified-header, [data-kiki-header-source-hidden='true'], .kiki-grammar-text-size-control")) return false;
            return true;
        }

        function registerTextNodes(root) {
            if (!(root instanceof Element || root instanceof Document)) return;
            const candidates = [];
            if (root instanceof Element && root.matches(textSelector)) candidates.push(root);
            candidates.push(...root.querySelectorAll(textSelector));

            candidates.forEach((element) => {
                if (!isDocumentText(element) || element.hasAttribute("data-kiki-grammar-font-node")) return;
                const fontSize = Number.parseFloat(window.getComputedStyle(element).fontSize);
                if (!Number.isFinite(fontSize) || fontSize <= 0) return;
                element.style.setProperty("--kiki-grammar-base-font-size", `${fontSize}px`);
                element.style.setProperty("--kiki-grammar-small-font-size", `${(fontSize * 0.9).toFixed(2)}px`);
                element.style.setProperty("--kiki-grammar-large-font-size", `${(fontSize * 1.14).toFixed(2)}px`);
                element.setAttribute("data-kiki-grammar-font-node", "");
            });
        }

        const control = document.createElement("div");
        control.className = "kiki-grammar-text-size-control";
        control.dataset.kikiHeaderUtility = "true";
        control.innerHTML = `
            <button class="kiki-grammar-text-size-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="kikiGrammarTextSizeDrawer" data-kiki-mobile-label="字号">
                <span>字号</span>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"></path></svg>
            </button>
            <div class="kiki-grammar-text-size-drawer" id="kikiGrammarTextSizeDrawer" role="group" aria-label="文字大小" hidden>
                <span>文字大小</span>
                <div>
                    <button type="button" data-kiki-grammar-text-size="small" aria-pressed="false">小</button>
                    <button type="button" data-kiki-grammar-text-size="standard" aria-pressed="true">标准</button>
                    <button type="button" data-kiki-grammar-text-size="large" aria-pressed="false">大</button>
                </div>
            </div>
        `;

        const toggle = control.querySelector(".kiki-grammar-text-size-toggle");
        const drawer = control.querySelector(".kiki-grammar-text-size-drawer");
        const sizeButtons = [...control.querySelectorAll("[data-kiki-grammar-text-size]")];

        function applySize(size, persist = true) {
            const nextSize = validSizes.has(size) ? size : "standard";
            document.body.dataset.kikiGrammarTextSize = nextSize;
            sizeButtons.forEach((button) => {
                const selected = button.dataset.kikiGrammarTextSize === nextSize;
                button.classList.toggle("is-active", selected);
                button.setAttribute("aria-pressed", String(selected));
            });
            if (persist) writeStoredSize(nextSize);
        }

        function setOpen(open, restoreFocus = false) {
            drawer.hidden = !open;
            toggle.setAttribute("aria-expanded", String(open));
            toggle.classList.toggle("is-open", open);
            if (restoreFocus) toggle.focus({ preventScroll: true });
        }

        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            setOpen(drawer.hidden);
        });
        drawer.addEventListener("click", (event) => event.stopPropagation());
        sizeButtons.forEach((button) => {
            button.addEventListener("click", () => {
                applySize(button.dataset.kikiGrammarTextSize);
                setOpen(false, true);
            });
        });
        document.addEventListener("click", () => {
            if (!drawer.hidden) setOpen(false);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !drawer.hidden) setOpen(false, true);
        });

        rightSlot.appendChild(control);
        document.querySelectorAll("main, [role='main']").forEach(registerTextNodes);
        if (!document.querySelector("main, [role='main']")) registerTextNodes(document.body);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof Element) registerTextNodes(node);
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        applySize(readStoredSize(), false);
    }

    function shouldHideSource(source) {
        if (!source) return false;
        if (source.matches(".reading-site-header, .sort-page-header, .page-topbar, body > .nav-bar, body > .top-bar")) {
            return true;
        }
        if (source.matches("body > header")) {
            const height = source.getBoundingClientRect().height;
            const textLength = (source.textContent || "").trim().length;
            return height <= 126 && textLength <= 240;
        }
        return false;
    }

    function initUnifiedHeader() {
        const headerHost = document.querySelector("[data-kiki-unified-header-host]");
        if (document.querySelector(".kiki-unified-header:not([data-kiki-unified-header-host])") || document.querySelector('meta[http-equiv="refresh"]')) {
            return;
        }

        ensureStylesheet();
        const path = normalizedPath();
        const config = sectionConfig(path);
        enableGrammarReturnChain(path);
        const source = headerHost || findSourceHeader();
        const existingBack = findBackElement(source);
        const actionContainer = findActionContainer(source);
        keepOnlyGrammarPracticeActions(actionContainer, path);
        removeListeningLegacyActions(actionContainer, path);
        const header = headerHost || document.createElement("header");
        if (headerHost) header.replaceChildren();
        header.className = `kiki-unified-header kiki-unified-header--${config.type}`;
        if (path.startsWith("exam/listening/")) {
            header.classList.add("kiki-unified-header--listening");
        }
        header.setAttribute("data-kiki-unified-header", config.type);

        const left = document.createElement("div");
        left.className = "kiki-unified-header-left";

        const brand = document.createElement("a");
        brand.className = "kiki-unified-brand";
        brand.href = homeUrl.href;
        brand.setAttribute("aria-label", "返回 kiji 首页");
        brand.innerHTML = `<img src="${logoUrl.href}" alt="kiji">`;

        const divider = document.createElement("span");
        divider.className = "kiki-unified-divider";
        divider.setAttribute("aria-hidden", "true");

        const back = prepareBackElement(existingBack, config);
        left.append(brand, divider, back);

        const title = document.createElement("h1");
        title.className = "kiki-unified-header-title";
        title.textContent = config.title;

        const right = document.createElement("div");
        right.className = "kiki-unified-header-right";
        if (actionContainer) {
            prepareActionLabels(actionContainer);
            right.appendChild(actionContainer);
        }
        setupGrammarTextSizeControl(path, right);

        header.append(left, title, right);

        if (headerHost) {
            // The reading practice pages ship one canonical header node in the
            // initial HTML. Hydrate that same node instead of replacing a
            // legacy header after first paint.
        } else if (source) {
            source.insertAdjacentElement("beforebegin", header);
            if (document.body.classList.contains("reading-content-page")
                && source.matches(".reading-editorial-header, .top-bar")) {
                source.remove();
            } else if (shouldHideSource(source)) {
                source.dataset.kikiHeaderSourceHidden = "true";
                source.setAttribute("aria-hidden", "true");
            }
        } else {
            document.body.insertAdjacentElement("afterbegin", header);
        }

        document.body.classList.add("kiki-unified-header-enabled");
        window.dispatchEvent(new CustomEvent("kiki-unified-header:ready", { detail: { type: config.type } }));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initUnifiedHeader, { once: true });
    } else {
        initUnifiedHeader();
    }
})();
