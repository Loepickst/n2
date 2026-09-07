(function () {
    "use strict";

    function initializeMobileGrammarMapNav() {
        const sourceNav = document.getElementById("grammar-map-particle-nav");
        const studyLayout = document.querySelector(".case-study-layout");
        const learningIndex = studyLayout?.querySelector(".case-index");
        const learningIndexList = learningIndex?.querySelector(".case-index-list");
        const atlasPanel = document.getElementById("atlas-panel");
        const mobileViewport = window.matchMedia("(max-width: 640px)");

        if (!sourceNav || !studyLayout || !learningIndex || !learningIndexList || !atlasPanel) return;

        const mobileNav = document.createElement("nav");
        mobileNav.className = "mobile-grammar-map-nav";
        mobileNav.setAttribute("aria-label", sourceNav.getAttribute("aria-label") || "选择语法关联分类");
        mobileNav.setAttribute("aria-hidden", "true");
        learningIndex.insertBefore(mobileNav, learningIndexList);

        function centerActiveItem() {
            const activeButton = mobileNav.querySelector(".grammar-map-particle-button.is-active");
            if (!activeButton || mobileNav.clientWidth === 0) return;

            mobileNav.scrollLeft = Math.max(
                0,
                activeButton.offsetLeft - (mobileNav.clientWidth - activeButton.offsetWidth) / 2
            );
        }

        function synchronizeNavigation() {
            mobileNav.innerHTML = sourceNav.innerHTML;
            window.requestAnimationFrame(centerActiveItem);
        }

        function synchronizeMode() {
            const isGrammarMapMode = atlasPanel.classList.contains("is-active");
            const useReplacementNavigation = isGrammarMapMode && mobileViewport.matches;
            studyLayout.classList.toggle("is-grammar-map-mode", isGrammarMapMode);
            mobileNav.setAttribute("aria-hidden", String(!useReplacementNavigation));
            learningIndexList.setAttribute("aria-hidden", String(useReplacementNavigation));

            if (useReplacementNavigation) window.requestAnimationFrame(centerActiveItem);
        }

        mobileNav.addEventListener("click", (event) => {
            const selectedButton = event.target.closest("[data-map-select]");
            if (!selectedButton) return;

            const sourceButton = Array.from(sourceNav.querySelectorAll("[data-map-select]")).find(
                (button) => button.dataset.mapSelect === selectedButton.dataset.mapSelect
            );
            sourceButton?.click();
        });

        new MutationObserver(synchronizeNavigation).observe(sourceNav, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class", "aria-current"]
        });

        new MutationObserver(synchronizeMode).observe(atlasPanel, {
            attributes: true,
            attributeFilter: ["class"]
        });

        if (mobileViewport.addEventListener) {
            mobileViewport.addEventListener("change", synchronizeMode);
        } else {
            mobileViewport.addListener(synchronizeMode);
        }

        synchronizeNavigation();
        synchronizeMode();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeMobileGrammarMapNav);
    } else {
        initializeMobileGrammarMapNav();
    }
})();
