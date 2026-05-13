(function() {
    const TARGET_SELECTOR = '[data-explain], [data-tooltip], .explain-correct, .explain-wrong, .keyword';
    const STYLE_ID = 'listening-tooltip-bridge-style';
    let activeTarget = null;

    function getTooltipNode() {
        return document.getElementById('wordTooltip') || document.getElementById('keywordTooltip');
    }

    function getTooltipText(target) {
        if (!target) return '';
        const explicitText = target.dataset.explain || target.dataset.tooltip || target.getAttribute('aria-label') || '';
        if (explicitText) return explicitText;
        const inlineHandler = target.getAttribute('onclick') || '';
        const match = inlineHandler.match(/showTooltip\s*\(\s*event\s*,\s*(['"])([\s\S]*?)\1\s*\)/);
        return match ? match[2].replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
    }

    function getTarget(node) {
        return node && node.closest ? node.closest(TARGET_SELECTOR) : null;
    }

    function hideTooltip() {
        const tooltip = getTooltipNode();
        if (tooltip) {
            tooltip.style.display = 'none';
        }
        activeTarget = null;
    }

    function placeTooltip(tooltip, target) {
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - tooltip.offsetHeight - 12;
        let left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2;
        if (left < 10) left = 10;
        if (left + tooltip.offsetWidth > window.innerWidth - 10) {
            left = window.innerWidth - tooltip.offsetWidth - 10;
        }
        const targetCenterX = rect.left + window.scrollX + rect.width / 2;
        tooltip.style.setProperty('--arrow-left', `${targetCenterX - left}px`);
        tooltip.style.top = `${Math.max(10, top)}px`;
        tooltip.style.left = `${left}px`;
    }

    function showTooltipForTarget(target) {
        const text = getTooltipText(target);
        const tooltip = getTooltipNode();
        if (!target || !text || !tooltip) return false;
        activeTarget = target;
        tooltip.textContent = text;
        tooltip.style.display = 'block';
        window.requestAnimationFrame(() => placeTooltip(tooltip, target));
        return true;
    }

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            [data-explain],
            [data-tooltip],
            .explain-correct,
            .explain-wrong,
            .keyword {
                cursor: help;
            }
        `;
        document.head.appendChild(style);
    }

    function enhanceTargets() {
        document.querySelectorAll(TARGET_SELECTOR).forEach((target) => {
            if (getTooltipText(target) && !target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '0');
            }
        });
    }

    function init() {
        ensureStyle();
        enhanceTargets();

        document.addEventListener('pointerover', (event) => {
            const target = getTarget(event.target);
            if (!target || target === activeTarget) return;
            showTooltipForTarget(target);
        });

        document.addEventListener('pointerout', (event) => {
            if (!activeTarget) return;
            const related = event.relatedTarget;
            if (related && activeTarget.contains(related)) return;
            const nextTarget = getTarget(related);
            if (nextTarget === activeTarget) return;
            hideTooltip();
        });

        document.addEventListener('focusin', (event) => {
            const target = getTarget(event.target);
            if (target) showTooltipForTarget(target);
        });

        document.addEventListener('focusout', (event) => {
            const target = getTarget(event.target);
            if (target && target === activeTarget) hideTooltip();
        });

        document.addEventListener('click', (event) => {
            const target = getTarget(event.target);
            if (target && showTooltipForTarget(target)) {
                return;
            }
            hideTooltip();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') hideTooltip();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
