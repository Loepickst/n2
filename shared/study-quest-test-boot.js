(function() {
    'use strict';

    const currentScript = document.currentScript;
    const sharedBase = new URL('./', currentScript.src);
    const siteRoot = new URL('../', sharedBase);
    const STYLE_ID = 'study-quest-test-boot-style';
    const DRAW_REVEAL_IMAGE = 'https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/chouqian.png';
    const DRAW_AFFORDANCE_ICON = `
        <span class="lab-draw-affordance-icon lab-draw-affordance-emoji" aria-hidden="true">🎴</span>
    `;
    const autoAchievementDrawRunKeys = new Set();

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .lab-draw-affordance {
                position: relative;
                width: 52px;
                height: 52px;
                padding: 0;
                border: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background:
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.92), rgba(255,255,255,0.58) 42%, rgba(246,238,226,0.96) 100%),
                    linear-gradient(160deg, rgba(194,157,103,0.18), rgba(147,66,55,0.08));
                cursor: pointer;
                flex: 0 0 auto;
                border-radius: 18px;
                border: 1px solid rgba(144, 87, 63, 0.18);
                animation: labDrawAffordanceIdle 2.8s ease-in-out infinite;
                box-shadow:
                    0 12px 24px rgba(112, 69, 47, 0.14),
                    0 1px 0 rgba(255,255,255,0.72) inset;
                color: #8c4538;
                transition: box-shadow 180ms ease, opacity 180ms ease, transform 180ms ease, border-color 180ms ease, color 180ms ease;
            }
            .lab-draw-affordance::before {
                content: "";
                position: absolute;
                inset: 6px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(215, 174, 82, 0.24), transparent 72%);
                opacity: 0.68;
                transform: scale(0.92);
                transition: opacity 180ms ease, transform 180ms ease;
                pointer-events: none;
            }
            .lab-draw-affordance::after {
                content: "";
                position: absolute;
                inset: 3px;
                border-radius: 15px;
                border: 1px solid rgba(255,255,255,0.48);
                pointer-events: none;
            }
            .lab-draw-affordance:hover::before,
            .lab-draw-affordance:focus-visible::before {
                opacity: 0.96;
                transform: scale(1);
            }
            .lab-draw-affordance:hover,
            .lab-draw-affordance:focus-visible {
                color: #7e3427;
                border-color: rgba(144, 87, 63, 0.28);
                box-shadow:
                    0 16px 28px rgba(112, 69, 47, 0.18),
                    0 1px 0 rgba(255,255,255,0.86) inset;
                transform: translateY(-1px);
            }
            .lab-draw-affordance:focus-visible {
                outline: 2px solid rgba(143, 47, 49, 0.32);
                outline-offset: 4px;
            }
            .lab-draw-affordance-icon {
                position: relative;
                z-index: 1;
                width: 31px;
                height: 31px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: transform 180ms ease, filter 180ms ease;
            }
            .lab-draw-affordance-emoji {
                width: auto;
                height: auto;
                font-size: 28px;
                line-height: 1;
                font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
            }
            .lab-draw-affordance-svg {
                width: 100%;
                height: 100%;
                display: block;
                overflow: visible;
            }
            .lab-draw-affordance-svg path {
                fill: none;
                stroke: currentColor;
                stroke-width: 1.7;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .lab-draw-affordance:hover .lab-draw-affordance-icon,
            .lab-draw-affordance:focus-visible .lab-draw-affordance-icon {
                transform: scale(1.06);
                filter: saturate(1.05);
            }
            .lab-draw-affordance.is-activating {
                animation: labDrawAffordanceBurst 360ms cubic-bezier(.18,.78,.24,1) forwards;
            }
            .lab-draw-affordance.is-activating::before {
                animation: labDrawAffordanceGlow 360ms ease forwards;
            }
            .lab-result-heading-row,
            .lab-result-copy-row {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 14px;
                flex-wrap: wrap;
                text-align: center;
                max-width: 100%;
            }
            .lab-result-heading-row > :first-child,
            .lab-result-copy-row > :first-child {
                margin: 0;
            }
            .sq-practice-test-tools {
                position: fixed;
                left: max(14px, env(safe-area-inset-left));
                bottom: max(14px, env(safe-area-inset-bottom));
                z-index: 11000;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            .sq-practice-test-tools.is-hidden {
                display: none;
            }
            .sq-practice-test-toggle,
            .sq-practice-test-action {
                appearance: none;
                border: 1px solid rgba(33, 31, 28, 0.12);
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.96);
                color: #31271f;
                box-shadow: 0 10px 24px rgba(33, 31, 28, 0.12);
                font: inherit;
            }
            .sq-practice-test-toggle {
                padding: 11px 14px;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.04em;
                cursor: pointer;
                transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
            }
            .sq-practice-test-toggle:hover,
            .sq-practice-test-toggle:focus-visible {
                transform: translateY(-1px);
                border-color: rgba(33, 31, 28, 0.2);
                box-shadow: 0 14px 28px rgba(33, 31, 28, 0.16);
            }
            .sq-practice-test-toggle:focus-visible,
            .sq-practice-test-action:focus-visible {
                outline: 2px solid rgba(165, 87, 52, 0.28);
                outline-offset: 3px;
            }
            .sq-practice-test-panel {
                width: min(240px, calc(100vw - 28px));
                display: none;
                flex-direction: column;
                gap: 12px;
                padding: 14px;
                border-radius: 18px;
                background: rgba(255, 252, 247, 0.98);
                border: 1px solid rgba(33, 31, 28, 0.08);
                box-shadow: 0 16px 36px rgba(33, 31, 28, 0.16);
                backdrop-filter: blur(10px);
            }
            .sq-practice-test-tools.is-open .sq-practice-test-panel {
                display: flex;
            }
            .sq-practice-test-title {
                font-size: 14px;
                font-weight: 800;
                color: #2d241d;
                letter-spacing: 0.04em;
            }
            .sq-practice-test-note {
                font-size: 12px;
                line-height: 1.5;
                color: rgba(66, 55, 46, 0.74);
            }
            .sq-practice-test-action {
                width: 100%;
                padding: 11px 14px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 800;
                color: #fffaf5;
                background: linear-gradient(135deg, #514238, #2f241d);
                border-color: rgba(33, 31, 28, 0.18);
                transition: transform 160ms ease, opacity 160ms ease, box-shadow 160ms ease;
            }
            .sq-practice-test-action:hover,
            .sq-practice-test-action:focus-visible {
                transform: translateY(-1px);
                box-shadow: 0 12px 26px rgba(33, 31, 28, 0.2);
            }
            .sq-practice-test-action:disabled {
                opacity: 0.58;
                cursor: wait;
                transform: none;
                box-shadow: none;
            }
            .sq-inline-draw-overlay {
                position: fixed;
                inset: 0;
                z-index: 12000;
                display: none;
                align-items: center;
                justify-content: center;
                padding: max(24px, env(safe-area-inset-top)) 20px max(24px, env(safe-area-inset-bottom));
                background: rgba(253, 250, 245, 0.96);
                backdrop-filter: blur(10px);
            }
            .sq-inline-draw-overlay.is-active {
                display: flex;
            }
            .sq-inline-draw-shell {
                width: min(100%, 680px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 26px;
            }
            .sq-inline-omikuji-container {
                position: relative;
                cursor: default;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: sqInlineFloatIn 0.8s ease-out forwards;
            }
            .sq-inline-omikuji-img {
                width: 280px;
                max-width: 80vw;
                height: auto;
                object-fit: contain;
                background-color: #fff;
                padding: 12px;
                border: 2px solid rgba(179, 62, 62, 0.25);
                border-radius: 12px;
                box-shadow:
                    0 0 0 10px #fff,
                    0 0 0 11px rgba(0,0,0,0.05),
                    0 20px 40px rgba(0,0,0,0.18);
                z-index: 2;
            }
            .sq-inline-magic-glow {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, rgba(255, 255, 255, 0) 65%);
                opacity: 0;
                pointer-events: none;
                z-index: 1;
            }
            .sq-inline-omikuji-container.shake .sq-inline-omikuji-img {
                animation: sqInlineHardShake 0.8s cubic-bezier(.36,.07,.19,.97) both;
            }
            .sq-inline-omikuji-container.shake .sq-inline-magic-glow {
                animation: sqInlineGlowPulse 0.8s ease-in-out;
            }
            .sq-inline-result-card {
                display: none;
                width: 300px;
                max-width: min(86vw, 300px);
                background: white;
                border-radius: 16px;
                border: 8px solid #333;
                box-shadow: 0 15px 40px rgba(0,0,0,0.3);
                text-align: center;
                position: relative;
                overflow: hidden;
                animation: sqInlineEpicEnter 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                padding: 0;
            }
            .sq-inline-rarity-badge {
                position: absolute;
                top: 10px;
                left: 10px;
                background: #e6b422;
                color: #fff;
                padding: 4px 10px;
                font-weight: bold;
                font-size: 14px;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                z-index: 10;
            }
            .sq-inline-new-badge {
                position: absolute;
                top: 50px;
                left: 5px;
                background: #ff1744;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: none;
                align-items: center;
                justify-content: center;
                font-weight: 900;
                font-size: 12px;
                box-shadow: 0 4px 10px rgba(255, 23, 68, 0.5);
                animation: sqInlinePopBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
                animation-delay: 0.3s;
                z-index: 12;
                transform: rotate(-15deg);
            }
            .sq-inline-result-inner {
                width: 100%;
                position: relative;
            }
            .sq-inline-result-title {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(255, 255, 255, 0.95);
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 18px;
                font-weight: bold;
                color: #333;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                z-index: 10;
                font-family: "Yu Mincho", serif;
                border: 2px solid currentColor;
            }
            .sq-inline-result-icon {
                width: 100%;
                height: 320px;
                background-color: #fafafa;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .sq-inline-result-icon img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .sq-inline-result-desc-container {
                padding: 15px 20px;
                background: white;
                border-top: 1px solid #eee;
                display: block;
            }
            .sq-inline-result-desc {
                font-size: 15px;
                color: #555;
                line-height: 1.6;
                margin: 0;
            }
            .sq-inline-result-meta {
                margin-top: 10px;
                font-size: 13px;
                color: #888;
                letter-spacing: 0.04em;
                display: none;
            }
            .sq-inline-close-btn {
                display: none;
                background-color: #b33e3e;
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 10px rgba(179, 62, 62, 0.3);
                transition: transform 0.2s ease, opacity 0.2s ease;
            }
            .sq-inline-close-btn:hover {
                opacity: 0.92;
            }
            .sq-inline-close-btn:active {
                transform: scale(0.95);
            }
            .sq-inline-close-btn:focus-visible {
                outline: 2px solid rgba(179, 62, 62, 0.35);
                outline-offset: 4px;
            }
            .sq-inline-close-btn.is-visible {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes labDrawAffordanceIdle {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                20% { transform: translateY(-1px) rotate(-4deg); }
                40% { transform: translateY(0) rotate(4deg); }
                60% { transform: translateY(-1px) rotate(-3deg); }
                80% { transform: translateY(0) rotate(3deg); }
            }
            @keyframes sqInlineFloatIn {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes sqInlineHardShake {
                0%, 100% { transform: translate3d(0, 0, 0) rotate(0); }
                10%, 30%, 50%, 70%, 90% { transform: translate3d(-6px, -4px, 0) rotate(-4deg); }
                20%, 40%, 60%, 80% { transform: translate3d(6px, 4px, 0) rotate(4deg); }
            }
            @keyframes sqInlineGlowPulse {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(2.2); }
            }
            @keyframes sqInlineEpicEnter {
                0% { opacity: 0; transform: scale(0.6) translateY(60px); filter: brightness(1.5); }
                100% { opacity: 1; transform: scale(1) translateY(0); filter: brightness(1); }
            }
            @keyframes sqInlinePopBounce {
                0% { transform: scale(0); }
                100% { transform: scale(1) rotate(15deg); }
            }
            @keyframes labDrawAffordanceBurst {
                0% { transform: scale(1) rotate(0deg); }
                18% { transform: scale(1.05) rotate(-9deg); }
                38% { transform: scale(1.08) rotate(10deg); }
                60% { transform: scale(1.02) rotate(-8deg); }
                82% { transform: scale(1.04) rotate(6deg); }
                100% { transform: scale(1.08) rotate(0deg); }
            }
            @keyframes labDrawAffordanceGlow {
                0% { opacity: 0.72; transform: scale(0.92); }
                50% { opacity: 1; transform: scale(1.16); }
                100% { opacity: 0.24; transform: scale(1.28); }
            }
            @media (max-width: 640px) {
                .lab-draw-affordance {
                    width: 44px;
                    height: 44px;
                    border-radius: 16px;
                }
                .lab-draw-affordance-icon {
                    width: 26px;
                    height: 26px;
                }
                .sq-practice-test-tools {
                    left: max(10px, env(safe-area-inset-left));
                    bottom: max(10px, env(safe-area-inset-bottom));
                }
                .sq-practice-test-toggle {
                    padding: 10px 12px;
                    font-size: 12px;
                }
                .sq-practice-test-panel {
                    width: min(220px, calc(100vw - 20px));
                    padding: 12px;
                }
                .sq-practice-test-action {
                    padding: 10px 12px;
                    font-size: 13px;
                }
                .sq-inline-result-card {
                    width: min(84vw, 300px);
                }
                .sq-inline-result-icon {
                    height: 280px;
                }
            }
            @media (prefers-reduced-motion: reduce) {
                .lab-draw-affordance,
                .lab-draw-affordance.is-activating,
                .lab-draw-affordance.is-activating::before,
                .sq-practice-test-toggle,
                .sq-practice-test-action,
                .sq-inline-omikuji-container,
                .sq-inline-omikuji-container.shake .sq-inline-omikuji-img,
                .sq-inline-omikuji-container.shake .sq-inline-magic-glow,
                .sq-inline-result-card,
                .sq-inline-new-badge {
                    animation: none !important;
                }
                .lab-draw-affordance::before,
                .lab-draw-affordance-icon {
                    transition: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function loadScriptOnce(src) {
        const existing = Array.from(document.querySelectorAll('script[src]')).find((node) => {
            const nodeSrc = node.src || node.getAttribute('src') || '';
            return node.dataset.studyQuestTestAsset === src || nodeSrc === src;
        });
        if (existing) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            script.dataset.studyQuestTestAsset = src;
            script.addEventListener('load', resolve, { once: true });
            script.addEventListener('error', reject, { once: true });
            document.head.appendChild(script);
        });
    }

    function escapeAttribute(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function normalizeRunKey(value) {
        return String(value == null ? '' : value).trim();
    }

    function getLocalDateKey(input) {
        const source = input instanceof Date ? input : new Date(input || Date.now());
        const year = source.getFullYear();
        const month = String(source.getMonth() + 1).padStart(2, '0');
        const day = String(source.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function buildDrawHref(runKey, returnHref) {
        const url = new URL('./lottery.html', siteRoot);
        if (runKey) {
            url.searchParams.set('runKey', runKey);
        }
        if (returnHref) {
            url.searchParams.set('return', returnHref);
        }
        return url.href;
    }

    function canOpenDrawForRunKey(runKey) {
        const normalizedRunKey = normalizeRunKey(runKey);
        if (!normalizedRunKey) {
            return false;
        }
        const runtime = window.StudyQuestTestServer;
        if (!runtime || typeof runtime.getLabState !== 'function') {
            return true;
        }
        const state = runtime.getLabState();
        const pendingDraws = state && state.rewardFlow && state.rewardFlow.pendingDraws
            ? state.rewardFlow.pendingDraws
            : {};
        const record = pendingDraws[normalizedRunKey];
        if (!record || record.claimedAt) {
            return false;
        }
        const practiceDrawDaily = state && state.practiceLedger && state.practiceLedger.practiceDrawDaily
            ? state.practiceLedger.practiceDrawDaily
            : {};
        const dailyRecord = record.module ? practiceDrawDaily[record.module] : null;
        const claimedToday = Boolean(
            dailyRecord
            && normalizeRunKey(dailyRecord.dateKey) === getLocalDateKey()
            && normalizeRunKey(dailyRecord.claimedAt)
        );
        return !claimedToday;
    }

    function getDrawAffordanceMarkup(runKey) {
        const normalizedRunKey = normalizeRunKey(runKey);
        if (!normalizedRunKey || !canOpenDrawForRunKey(normalizedRunKey)) {
            return '';
        }
        return `
            <button class="lab-draw-affordance" type="button" data-lab-draw-affordance data-draw-run-key="${escapeAttribute(normalizedRunKey)}" aria-label="打开🐶抽签结果">
                ${DRAW_AFFORDANCE_ICON}
            </button>
        `;
    }

    function lockBodyScroll() {
        const previousOverflow = document.body.style.overflow;
        const previousTouchAction = document.body.style.touchAction;
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        return function unlockBodyScroll() {
            document.body.style.overflow = previousOverflow;
            document.body.style.touchAction = previousTouchAction;
        };
    }

    function ensureInlineDrawOverlay() {
        if (window.__studyQuestTestInlineDrawOverlay) {
            return window.__studyQuestTestInlineDrawOverlay;
        }

        const root = document.createElement('div');
        root.className = 'sq-inline-draw-overlay';
        root.setAttribute('aria-hidden', 'true');
        root.innerHTML = `
            <div class="sq-inline-draw-shell" role="dialog" aria-modal="true" aria-label="抽卡结果">
                <div class="sq-inline-omikuji-container" data-inline-draw-stage>
                    <img src="${DRAW_REVEAL_IMAGE}"
                         alt="点击抽签"
                         class="sq-inline-omikuji-img"
                         data-inline-draw-img
                         onerror="this.src='https://images.unsplash.com/photo-1601362694738-f947e4eb1bc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'; this.style.borderRadius='15px';">
                    <div class="sq-inline-magic-glow"></div>
                </div>
                <div class="sq-inline-result-card" data-inline-draw-result-card>
                    <div class="sq-inline-rarity-badge" data-inline-draw-rarity>SSR</div>
                    <div class="sq-inline-new-badge" data-inline-draw-new>NEW!</div>
                    <div class="sq-inline-result-inner">
                        <div class="sq-inline-result-icon" data-inline-draw-icon></div>
                        <div class="sq-inline-result-title" data-inline-draw-title>大吉</div>
                    </div>
                    <div class="sq-inline-result-desc-container">
                        <div class="sq-inline-result-desc" data-inline-draw-desc></div>
                        <div class="sq-inline-result-meta" data-inline-draw-meta></div>
                    </div>
                </div>
                <button type="button" class="sq-inline-close-btn" data-inline-draw-close>关闭</button>
            </div>
        `;
        document.body.appendChild(root);

        const refs = {
            root,
            shell: root.querySelector('.sq-inline-draw-shell'),
            omikujiContainer: root.querySelector('[data-inline-draw-stage]'),
            magicGlow: root.querySelector('.sq-inline-magic-glow'),
            resultCard: root.querySelector('[data-inline-draw-result-card]'),
            rarityBadge: root.querySelector('[data-inline-draw-rarity]'),
            newBadge: root.querySelector('[data-inline-draw-new]'),
            resultTitle: root.querySelector('[data-inline-draw-title]'),
            resultIcon: root.querySelector('[data-inline-draw-icon]'),
            resultDesc: root.querySelector('[data-inline-draw-desc]'),
            resultMeta: root.querySelector('[data-inline-draw-meta]'),
            closeBtn: root.querySelector('[data-inline-draw-close]'),
            resolve: null,
            unlockScroll: null,
            activeTrigger: null
        };

        refs.closeBtn.addEventListener('click', () => {
            if (refs.root.dataset.phase !== 'revealed') {
                return;
            }
            refs.root.classList.remove('is-active');
            refs.root.setAttribute('aria-hidden', 'true');
            refs.root.dataset.phase = 'idle';
            refs.root.dataset.busy = 'false';
            refs.omikujiContainer.classList.remove('shake');
            refs.omikujiContainer.style.display = 'none';
            refs.resultCard.style.display = 'none';
            refs.newBadge.style.display = 'none';
            refs.closeBtn.classList.remove('is-visible');
            refs.closeBtn.blur();
            if (typeof refs.unlockScroll === 'function') {
                refs.unlockScroll();
                refs.unlockScroll = null;
            }
            if (typeof refs.resolve === 'function') {
                refs.resolve({ accepted: true, action: 'close' });
                refs.resolve = null;
            }
            refs.activeTrigger = null;
        });

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') {
                return;
            }
            if (!refs.root.classList.contains('is-active') || refs.root.dataset.phase !== 'revealed') {
                return;
            }
            refs.closeBtn.click();
        });

        window.__studyQuestTestInlineDrawOverlay = refs;
        return refs;
    }

    function populateInlineDrawResult(claimResult) {
        const refs = ensureInlineDrawOverlay();
        const card = claimResult && claimResult.card ? claimResult.card : {};
        refs.resultCard.style.borderColor = card.color || '#333';
        refs.resultTitle.style.color = card.color || '#333';
        refs.resultTitle.style.borderColor = card.color || '#333';
        refs.resultTitle.textContent = card.title || '奖励卡';
        refs.rarityBadge.textContent = card.rarity || 'MAX';
        refs.rarityBadge.style.background = card.color || '#e6b422';
        refs.resultIcon.innerHTML = `<img src="${escapeAttribute(card.icon || '')}" alt="${escapeAttribute(card.title || '奖励卡')}">`;
        refs.resultDesc.textContent = card.desc || card.flavor || '';
        if (card.isNew && !card.isDuplicate) {
            refs.newBadge.style.display = 'flex';
            refs.resultMeta.style.display = 'none';
            refs.resultMeta.textContent = '';
        } else {
            refs.newBadge.style.display = 'none';
            refs.resultMeta.style.display = 'block';
            refs.resultMeta.textContent = card.isDuplicate ? `已获得 ${Number(card.count) || 1} 次` : '';
        }
    }

    function openInlineDrawResultOverlay(options) {
        const source = options && typeof options === 'object' ? options : {};
        const refs = ensureInlineDrawOverlay();
        if (refs.root.dataset.busy === 'true' || refs.root.dataset.phase === 'revealing') {
            return Promise.resolve({ accepted: false, reason: 'overlay_busy' });
        }

        refs.root.dataset.busy = 'true';
        refs.root.dataset.phase = 'revealing';
        refs.root.classList.add('is-active');
        refs.root.setAttribute('aria-hidden', 'false');
        refs.omikujiContainer.style.display = 'flex';
        refs.omikujiContainer.classList.remove('shake');
        refs.resultCard.style.display = 'none';
        refs.newBadge.style.display = 'none';
        refs.closeBtn.classList.remove('is-visible');
        refs.activeTrigger = source.trigger || null;
        if (typeof refs.unlockScroll === 'function') {
            refs.unlockScroll();
        }
        refs.unlockScroll = lockBodyScroll();

        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const preludeDelay = prefersReducedMotion ? 80 : 800;

        return new Promise((resolve) => {
            refs.resolve = resolve;
            window.setTimeout(() => {
                refs.omikujiContainer.classList.add('shake');
                window.setTimeout(() => {
                    refs.omikujiContainer.classList.remove('shake');
                    refs.omikujiContainer.style.display = 'none';

                    let claimResult = { accepted: false, reason: 'missing_claim_handler' };
                    try {
                        claimResult = typeof source.getClaimResult === 'function'
                            ? source.getClaimResult()
                            : claimResult;
                    } catch (error) {
                        claimResult = {
                            accepted: false,
                            reason: 'claim_failed',
                            error: error && error.message ? error.message : String(error)
                        };
                    }

                    if (refs.activeTrigger && typeof refs.activeTrigger.remove === 'function') {
                        refs.activeTrigger.remove();
                    }

                    if (!claimResult || !claimResult.accepted || !claimResult.card) {
                        refs.root.classList.remove('is-active');
                        refs.root.setAttribute('aria-hidden', 'true');
                        refs.root.dataset.phase = 'idle';
                        refs.root.dataset.busy = 'false';
                        if (typeof refs.unlockScroll === 'function') {
                            refs.unlockScroll();
                            refs.unlockScroll = null;
                        }
                        refs.activeTrigger = null;
                        resolve(claimResult || { accepted: false, reason: 'draw_failed' });
                        refs.resolve = null;
                        return;
                    }

                    populateInlineDrawResult(claimResult);
                    refs.resultCard.style.display = 'block';
                    refs.closeBtn.classList.add('is-visible');
                    refs.root.dataset.phase = 'revealed';
                    refs.root.dataset.busy = 'false';
                    window.setTimeout(() => {
                        refs.closeBtn.focus({ preventScroll: true });
                    }, prefersReducedMotion ? 0 : 120);
                }, preludeDelay);
            }, prefersReducedMotion ? 0 : 40);
        });
    }

    function openInlineDrawOverlay(runKey, options) {
        const normalizedRunKey = normalizeRunKey(runKey);
        if (!normalizedRunKey) {
            return Promise.resolve({ accepted: false, reason: 'missing_run_key' });
        }
        if (!canOpenDrawForRunKey(normalizedRunKey)) {
            const trigger = options && options.trigger;
            if (trigger && typeof trigger.remove === 'function') {
                trigger.remove();
            }
            return Promise.resolve({ accepted: false, reason: 'draw_unavailable' });
        }

        return openInlineDrawResultOverlay({
            trigger: options && options.trigger ? options.trigger : null,
            getClaimResult() {
                const runtime = window.StudyQuestTestServer;
                return runtime && typeof runtime.claimPendingDraw === 'function'
                    ? runtime.claimPendingDraw(normalizedRunKey)
                    : { accepted: false, reason: 'runtime_unavailable' };
            }
        });
    }

    function openInlineAchievementDrawOverlay(achievementDraw) {
        const source = achievementDraw && typeof achievementDraw === 'object' ? achievementDraw : {};
        const card = source.card && typeof source.card === 'object' ? source.card : null;
        if (!source.available || !card || !card.cardId) {
            return Promise.resolve({ accepted: false, reason: 'missing_achievement_draw' });
        }
        return openInlineDrawResultOverlay({
            getClaimResult() {
                return {
                    accepted: true,
                    reason: source.reason || 'achievement_draw',
                    runKey: source.runKey || '',
                    card
                };
            }
        });
    }

    function ensurePracticeTestToolsShell() {
        if (window.__studyQuestPracticeTestTools) {
            return window.__studyQuestPracticeTestTools;
        }

        const root = document.createElement('div');
        root.className = 'sq-practice-test-tools is-hidden';
        root.setAttribute('aria-hidden', 'true');
        root.innerHTML = `
            <button type="button" class="sq-practice-test-toggle" data-practice-test-toggle>测试工具</button>
            <div class="sq-practice-test-panel" data-practice-test-panel>
                <div class="sq-practice-test-title">测试工具</div>
                <div class="sq-practice-test-note">仅测试服可见，点击后会直接按满分结算当前练习。</div>
                <button type="button" class="sq-practice-test-action" data-practice-test-action>一键全对</button>
            </div>
        `;
        document.body.appendChild(root);

        const refs = {
            root,
            toggle: root.querySelector('[data-practice-test-toggle]'),
            action: root.querySelector('[data-practice-test-action]'),
            key: '',
            onPerfectClear: null,
            busy: false
        };

        refs.toggle.addEventListener('click', () => {
            if (refs.root.classList.contains('is-hidden')) {
                return;
            }
            refs.root.classList.toggle('is-open');
        });

        refs.action.addEventListener('click', () => {
            if (refs.busy || typeof refs.onPerfectClear !== 'function') {
                return;
            }
            refs.busy = true;
            refs.action.disabled = true;
            const previousText = refs.action.textContent;
            refs.action.textContent = '处理中...';
            Promise.resolve()
                .then(() => refs.onPerfectClear())
                .finally(() => {
                    refs.busy = false;
                    refs.action.disabled = false;
                    refs.action.textContent = previousText;
                    refs.root.classList.remove('is-open');
                });
        });

        window.__studyQuestPracticeTestTools = refs;
        return refs;
    }

    function ensureDrawAffordanceUi() {
        const ui = window.StudyQuestTestUi = window.StudyQuestTestUi || {};
        ui.drawAffordanceIconMarkup = DRAW_AFFORDANCE_ICON;
        ui.getDrawAffordanceMarkup = getDrawAffordanceMarkup;
        ui.buildDrawHref = buildDrawHref;
        ui.openInlineDrawOverlay = openInlineDrawOverlay;
        ui.openInlineAchievementDrawOverlay = openInlineAchievementDrawOverlay;
        ui.canOpenDrawForRunKey = canOpenDrawForRunKey;
        ui.mountPracticeTestTools = function mountPracticeTestTools(config = {}) {
            const refs = ensurePracticeTestToolsShell();
            refs.key = config.key || refs.key || 'default';
            refs.onPerfectClear = typeof config.onPerfectClear === 'function' ? config.onPerfectClear : null;
            const visible = config.visible !== false;
            refs.root.classList.toggle('is-hidden', !visible);
            refs.root.setAttribute('aria-hidden', visible ? 'false' : 'true');
            if (!visible) {
                refs.root.classList.remove('is-open');
            }
            return refs;
        };
        ui.hidePracticeTestTools = function hidePracticeTestTools() {
            const refs = ensurePracticeTestToolsShell();
            refs.root.classList.add('is-hidden');
            refs.root.classList.remove('is-open');
            refs.root.setAttribute('aria-hidden', 'true');
        };
        ui.removeClaimedDrawAffordances = function removeClaimedDrawAffordances(container) {
            if (!container || typeof container.querySelectorAll !== 'function') {
                return;
            }
            container.querySelectorAll('[data-lab-draw-affordance], [data-lab-draw-button]').forEach((element) => element.remove());
        };
        ui.dispatchPracticeState = function dispatchPracticeState(detail) {
            if (typeof window.dispatchEvent !== 'function' || typeof window.CustomEvent !== 'function') {
                return;
            }
            window.dispatchEvent(new window.CustomEvent('studyquestlab:practice-state', {
                detail: detail && typeof detail === 'object' ? detail : {}
            }));
        };
        ui.triggerDrawAffordance = function triggerDrawAffordance(trigger, href) {
            if (!trigger || trigger.dataset.labDrawBusy === 'true') {
                return;
            }
            const runKey = normalizeRunKey(href || trigger.getAttribute('data-draw-run-key'));
            if (!runKey) {
                return;
            }
            trigger.dataset.labDrawBusy = 'true';
            trigger.classList.add('is-activating');
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.setTimeout(() => {
                openInlineDrawOverlay(runKey, { trigger }).finally(() => {
                    delete trigger.dataset.labDrawBusy;
                    trigger.classList.remove('is-activating');
                });
            }, prefersReducedMotion ? 80 : 360);
        };

        if (window.__studyQuestTestDrawAffordanceBound) {
            return;
        }
        window.__studyQuestTestDrawAffordanceBound = true;
        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('[data-lab-draw-affordance]');
            if (!trigger) {
                return;
            }
            event.preventDefault();
            ui.triggerDrawAffordance(trigger);
        });
    }

    function scheduleAchievementDrawReveal(achievementDraw) {
        const source = achievementDraw && typeof achievementDraw === 'object' ? achievementDraw : {};
        const runKey = normalizeRunKey(source.runKey);
        if (!source.available || !runKey || autoAchievementDrawRunKeys.has(runKey)) {
            return;
        }
        autoAchievementDrawRunKeys.add(runKey);
        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.setTimeout(() => {
            openInlineAchievementDrawOverlay(source).then((result) => {
                if (!result || !result.accepted) {
                    autoAchievementDrawRunKeys.delete(runKey);
                }
            });
        }, prefersReducedMotion ? 120 : 640);
    }

    function bindPracticeRewardEvents() {
        if (window.__studyQuestTestRewardEventsBound) {
            return;
        }
        window.__studyQuestTestRewardEventsBound = true;

        window.addEventListener('studyquestlab:practice-reward', (event) => {
            const detail = event && event.detail ? event.detail : {};
            scheduleAchievementDrawReveal(detail.achievementDraw);
        });
    }

    async function init() {
        ensureStyle();
        await loadScriptOnce(new URL('./study-quest-test-runtime.js', sharedBase).href);
        ensureDrawAffordanceUi();
        bindPracticeRewardEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
