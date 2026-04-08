(function () {
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
        const rawTarget = getReturnParam()
            || (options && options.fallback)
            || (element && element.getAttribute("href"))
            || window.location.href;

        try {
            return new URL(rawTarget, window.location.href);
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
        });

        return element;
    }

    window.backNavigation = {
        navigateHierarchical: navigateHierarchical,
        navigateStateful: navigateStateful,
        resolveTargetUrl: resolveTargetUrl
    };

    window.bindHierarchicalBack = function (options) {
        return bindHandler("hierarchical", options || {});
    };

    window.bindStatefulBack = function (options) {
        return bindHandler("stateful", options || {});
    };
})();
