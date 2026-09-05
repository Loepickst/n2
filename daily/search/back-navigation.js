(function () {
    const LEGACY_DIRECTORY_HASH = {
        "daily/grammar/index.html": "#daily/daily-grammar",
        "daily/light-read/index.html": "#daily/daily-light-read",
        "daily/light-read/daily/read_daily.html": "#daily/daily-light-read",
        "daily/light-read/folklore/read_folklore.html": "#daily/daily-light-read",
        "exam/vocabulary/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n1/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n2/index.html": "#exam/exam-vocabulary",
        "exam/grammar/index.html": "#exam/exam-grammar",
        "exam/jlpt-reading/index.html": "#exam/exam-reading",
        "exam/listening/index.html": "#exam/exam-listening",
        "exam/listening/full-practice/index.html": "#exam/exam-listening/exam-listening-full",
        "exam/listening/task-comprehension/index.html": "#exam/exam-listening/exam-listening-task",
        "exam/listening/point-comprehension/index.html": "#exam/exam-listening/exam-listening-point",
        "exam/listening/summary-comprehension/index.html": "#exam/exam-listening/exam-listening-summary",
        "exam/listening/immediate-response/index.html": "#exam/exam-listening/exam-listening-response"
    };

    function getProjectRelativePath(url) {
        let pathname = "";
        try {
            pathname = decodeURIComponent(url.pathname || "");
        } catch (error) {
            pathname = url.pathname || "";
        }

        const segments = pathname.split("/").filter(Boolean);
        const markerIndex = segments.findIndex((segment) => segment === "daily" || segment === "exam");
        if (markerIndex >= 0) {
            return segments.slice(markerIndex).join("/");
        }

        return segments.join("/");
    }

    function getRootPrefixFromCurrentPath() {
        let pathname = "";
        try {
            pathname = decodeURIComponent(window.location.pathname || "");
        } catch (error) {
            pathname = window.location.pathname || "";
        }

        const segments = pathname.split("/").filter(Boolean);
        const markerIndex = segments.findIndex((segment) => segment === "daily" || segment === "exam");
        const depth = markerIndex >= 0
            ? Math.max(0, segments.length - markerIndex - 1)
            : Math.max(0, segments.length - 1);

        return depth ? "../".repeat(depth) : "";
    }

    function hasFunctionalSearch(url) {
        const params = new URLSearchParams(url.search || "");
        const meaningfulKeys = Array.from(params.keys()).filter((key) => key !== "return");
        return meaningfulKeys.length > 0;
    }

    function getHomeHashForPath(relativePath, options) {
        const path = String(relativePath || "").replace(/^\/+/, "");
        const allowDirectoryWithSearch = Boolean(options && options.allowDirectoryWithSearch);

        if (LEGACY_DIRECTORY_HASH[path] && allowDirectoryWithSearch) {
            return LEGACY_DIRECTORY_HASH[path];
        }

        if (path === "daily/light-read/daily/read_daily.html") {
            return "#daily/daily-light-read";
        }

        if (/^daily\/light-read\/daily\/(?!read_daily\.html)[^/]+\.html$/.test(path)) {
            return "#daily/daily-light-read";
        }

        if (/^daily\/light-read\/folklore\/(?!read_folklore\.html)[^/]+\.html$/.test(path)) {
            return "#daily/daily-light-read";
        }

        if (/^daily\/grammar\/(?:foundation|particles|expressions)\/[^/]+\.html$/.test(path)
            || /^daily\/grammar\/(change|kakujyo|kakujyo_practice|敬语)\.html$/.test(path)) {
            return "#daily/daily-grammar";
        }

        if (path === "daily/search/Try.html") {
            return "#daily";
        }

        if (/^exam\/textbook\/(try-n1|text_1)\.html$/.test(path)) {
            return "#daily/exam-textbook/textbook-try-n1";
        }

        if (/^exam\/textbook\/(try-n2|text_2)\.html$/.test(path)) {
            return "#daily/exam-textbook/textbook-try-n2";
        }

        if (/^exam\/vocabulary\/n1\/(?!index\.html)[^/]+\.html$/.test(path)) {
            return "#exam/exam-vocabulary";
        }

        if (/^exam\/vocabulary\/n2\/(?!index\.html)[^/]+\.html$/.test(path)) {
            return "#exam/exam-vocabulary";
        }

        if (/^exam\/grammar\/grammar\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-choice";
        }

        if (/^exam\/grammar\/sort\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-sort";
        }

        if (/^exam\/grammar\/cloze\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-cloze";
        }

        if (/^exam\/jlpt-reading\/s\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-short";
        }

        if (/^exam\/jlpt-reading\/m\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-middle";
        }

        if (/^exam\/jlpt-reading\/l\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-long";
        }

        if (/^exam\/jlpt-reading\/d\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-integrated";
        }

        if (/^exam\/jlpt-reading\/t\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-search";
        }

        if (/^exam\/jlpt-reading\/s\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-short";
        }

        if (/^exam\/jlpt-reading\/m\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-middle";
        }

        if (/^exam\/jlpt-reading\/l\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-long";
        }

        if (/^exam\/listening\/full-practice\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-full/exam-listening-full-n2";
        }

        if (/^exam\/listening\/task-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-task/exam-listening-task-comprehension-n1";
        }

        if (/^exam\/listening\/task-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-task/exam-listening-task-comprehension-n2";
        }

        if (/^exam\/listening\/point-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-point/exam-listening-point-comprehension-n1";
        }

        if (/^exam\/listening\/point-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-point/exam-listening-point-comprehension-n2";
        }

        if (/^exam\/listening\/summary-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-summary/exam-listening-summary-comprehension-n1";
        }

        if (/^exam\/listening\/summary-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-summary/exam-listening-summary-comprehension-n2";
        }

        if (/^exam\/listening\/immediate-response\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-response/exam-listening-immediate-response-n1";
        }

        if (/^exam\/listening\/immediate-response\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-response/exam-listening-immediate-response-n2";
        }

        return "";
    }

    function getCanonicalHomeUrl(url, options) {
        const targetUrl = url instanceof URL ? url : new URL(url || window.location.href, window.location.href);
        const relativePath = getProjectRelativePath(targetUrl);
        const isLegacyDirectory = Boolean(LEGACY_DIRECTORY_HASH[relativePath]);
        const allowDirectoryWithSearch = Boolean(options && options.allowDirectoryWithSearch);

        if (isLegacyDirectory && hasFunctionalSearch(targetUrl) && !allowDirectoryWithSearch) {
            return null;
        }

        const hash = getHomeHashForPath(relativePath, {
            allowDirectoryWithSearch: isLegacyDirectory
        });

        if (!hash) {
            return null;
        }

        return new URL(`${getRootPrefixFromCurrentPath()}index.html${hash}`, window.location.href);
    }

    function getElement(selector) {
        if (!selector) {
            return null;
        }

        if (typeof selector === "string") {
            return document.querySelector(selector);
        }

        if (selector instanceof Element) {
            return selector;
        }

        return null;
    }

    function getSameOriginReferrer() {
        if (!document.referrer) {
            return null;
        }

        try {
            const referrer = new URL(document.referrer, window.location.href);
            if (referrer.origin !== window.location.origin) {
                return null;
            }
            return referrer;
        } catch (error) {
            return null;
        }
    }

    function getReturnParam() {
        return new URLSearchParams(window.location.search).get("return");
    }

    function resolveTargetUrl(options) {
        const element = getElement(options && options.selector);
        const returnParam = getReturnParam();
        const rawTarget = returnParam
            || (options && options.fallback)
            || (options && options.defaultHref)
            || (element && element.getAttribute("href"))
            || window.location.href;

        try {
            const targetUrl = new URL(rawTarget, window.location.href);
            if (returnParam) {
                return targetUrl;
            }

            return getCanonicalHomeUrl(window.location.href, {
                allowDirectoryWithSearch: true
            }) || getCanonicalHomeUrl(targetUrl) || targetUrl;
        } catch (error) {
            return new URL(window.location.href);
        }
    }

    function normalizePathSearch(url) {
        return `${url.pathname}${url.search}`;
    }

    function shouldUseHierarchicalHistory(targetUrl) {
        const referrer = getSameOriginReferrer();
        if (!referrer || window.history.length <= 1) {
            return false;
        }

        return normalizePathSearch(referrer) === normalizePathSearch(targetUrl);
    }

    function shouldUseStatefulHistory() {
        return !!getSameOriginReferrer() && window.history.length > 1;
    }

    function syncElementTarget(element, targetUrl) {
        if (!element || !targetUrl) {
            return;
        }

        if (element.tagName === "A") {
            element.setAttribute("href", targetUrl.href);
        } else {
            element.dataset.backHref = targetUrl.href;
        }
    }

    function navigateHierarchical(options) {
        const targetUrl = resolveTargetUrl(options || {});
        if (shouldUseHierarchicalHistory(targetUrl)) {
            window.history.back();
            return "history";
        }

        window.location.href = targetUrl.href;
        return "fallback";
    }

    function navigateStateful(options) {
        const targetUrl = resolveTargetUrl(options || {});
        if (shouldUseStatefulHistory()) {
            window.history.back();
            return "history";
        }

        window.location.href = targetUrl.href;
        return "fallback";
    }

    function bindHandler(kind, options) {
        const element = getElement(options && options.selector);
        if (!element) {
            return null;
        }

        const targetUrl = resolveTargetUrl(options || {});
        syncElementTarget(element, targetUrl);

        const attrName = kind === "hierarchical" ? "backNavHierarchicalBound" : "backNavStatefulBound";
        if (element.dataset[attrName] === "true") {
            return element;
        }

        element.dataset[attrName] = "true";
        element.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (kind === "hierarchical") {
                navigateHierarchical({
                    selector: element,
                    fallback: targetUrl.href
                });
                return;
            }

            navigateStateful({
                selector: element,
                fallback: targetUrl.href
            });
        }, true);

        return element;
    }

    window.backNavigation = {
        navigateHierarchical: navigateHierarchical,
        navigateStateful: navigateStateful,
        resolveTargetUrl: resolveTargetUrl,
        getCanonicalHomeUrl: getCanonicalHomeUrl
    };

    window.bindHierarchicalBack = function (options) {
        return bindHandler("hierarchical", options || {});
    };

    window.bindStatefulBack = function (options) {
        return bindHandler("stateful", options || {});
    };
})();
