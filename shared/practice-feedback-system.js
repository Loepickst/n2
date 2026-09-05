(function(global) {
    'use strict';

    const STYLE_ID = 'n2-practice-feedback-system-style';
    let lastSignalKey = '';
    let lastSignalAt = 0;
    let rewardRuntimePromise = null;
    const recentRewardSignals = new Map();

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .n2-feedback-card {
                border: 1px solid rgba(44, 44, 42, 0.14);
                background: rgba(255, 255, 255, 0.94);
                border-radius: 14px;
                padding: 14px 16px;
                box-shadow: 0 10px 24px rgba(44, 44, 42, 0.08);
                color: #343432;
                font-family: "Hiragino Sans", "Noto Sans SC", "Noto Sans JP", "Microsoft YaHei", sans-serif;
            }
            .n2-feedback-card.is-correct {
                border-color: rgba(67, 143, 91, 0.28);
                background: #f7fcf7;
            }
            .n2-feedback-card.is-wrong,
            .n2-feedback-card.is-empty {
                border-color: rgba(190, 73, 64, 0.24);
                background: #fff8f7;
            }
            .n2-feedback-title {
                margin: 0 0 6px;
                font-size: 0.98rem;
                font-weight: 800;
                letter-spacing: 0.02em;
            }
            .n2-feedback-copy {
                margin: 0;
                font-size: 0.9rem;
                line-height: 1.75;
                color: #66625f;
            }
        `;
        document.head.appendChild(style);
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getCurrentScriptUrl() {
        const script = document.currentScript || document.querySelector('script[src$="practice-feedback-system.js"]');
        return script && script.src ? script.src : '';
    }

    function resolveSharedAsset(path) {
        try {
            return new URL(path, getCurrentScriptUrl() || document.baseURI).href;
        } catch (error) {
            return path;
        }
    }

    function loadSharedScript(path, datasetKey) {
        const scriptSrc = resolveSharedAsset(path);
        const existingScript = Array.from(document.querySelectorAll('script[src]'))
            .find((script) => script.src === scriptSrc);
        if (existingScript) return Promise.resolve(true);
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = scriptSrc;
            if (datasetKey) script.dataset[datasetKey] = 'true';
            script.addEventListener('load', () => resolve(true), { once: true });
            script.addEventListener('error', () => resolve(false), { once: true });
            document.head.appendChild(script);
        });
    }

    function ensureRewardRuntime() {
        if (global.KikiPracticeRewardRuntime) return Promise.resolve(global.KikiPracticeRewardRuntime);
        if (rewardRuntimePromise) return rewardRuntimePromise;
        rewardRuntimePromise = Promise.resolve()
            .then(() => global.OmikujiCatalog
                ? true
                : loadSharedScript('omikuji-catalog.js', 'n2OmikujiCatalog'))
            .then(() => loadSharedScript('practice-reward-runtime.js', 'n2PracticeRewardRuntime'))
            .then(() => global.KikiPracticeRewardRuntime || null)
            .catch(() => null);
        return rewardRuntimePromise;
    }

    function detectRewardModule(payload = {}) {
        const moduleName = String(payload.module || '').toLowerCase();
        const subType = String(payload.subType || '').toLowerCase();
        const path = String(global.location && global.location.pathname ? global.location.pathname : '').toLowerCase();
        const tokens = `${moduleName} ${subType} ${path}`;
        if (tokens.includes('vocabulary') || tokens.includes('vocab') || tokens.includes('/vocabulary/')) return 'vocabulary';
        if (tokens.includes('listening') || tokens.includes('immediate') || tokens.includes('/listening/')) return 'listening';
        if (tokens.includes('reading') || tokens.includes('jlpt-reading') || tokens.includes('/jlpt-reading/')) return 'reading';
        if (tokens.includes('grammar') || tokens.includes('textbook') || tokens.includes('try-n2') || tokens.includes('/grammar/') || tokens.includes('/daily/grammar/') || tokens.includes('/textbook/') || tokens.includes('/test/')) return 'grammar';
        return '';
    }

    function detectPracticeSubType(payload = {}) {
        if (payload.subType) return String(payload.subType);
        const path = String(global.location && global.location.pathname ? global.location.pathname : '').toLowerCase();
        if (path.includes('/immediate-response/')) return 'immediate';
        if (path.includes('/sort/')) return 'sort';
        if (path.includes('/cloze/')) return 'cloze';
        if (path.includes('/vocabulary/')) return 'n2_verbs';
        return '';
    }

    function normalizeRewardAccuracy(payload = {}) {
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        if (Number.isFinite(Number(payload.accuracy))) {
            const accuracy = Number(payload.accuracy);
            return accuracy > 1 ? accuracy / 100 : accuracy;
        }
        return total > 0 ? correct / total : 0;
    }

    function shouldSignalPracticeReward(payload = {}) {
        const phase = String(payload.phase || payload.type || '').trim();
        return phase === 'summary' || phase === 'clear' || phase === 'perfect_clear';
    }

    function shouldThrottleRewardSignal(payload = {}) {
        const moduleKey = detectRewardModule(payload);
        if (!moduleKey) return true;
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const key = [
            moduleKey,
            payload.runKey || '',
            payload.phase || '',
            payload.scopeKey || '',
            global.location && global.location.pathname ? global.location.pathname : '',
            correct,
            total
        ].join(':');
        const now = Date.now();
        const previous = recentRewardSignals.get(key) || 0;
        if (previous && now - previous < 3000) return true;
        recentRewardSignals.set(key, now);
        recentRewardSignals.forEach((timestamp, signalKey) => {
            if (now - timestamp > 15000) recentRewardSignals.delete(signalKey);
        });
        return false;
    }

    function trackPracticeReward(payload = {}) {
        if (!shouldSignalPracticeReward(payload) || shouldThrottleRewardSignal(payload)) return;
        const moduleKey = detectRewardModule(payload);
        if (!moduleKey) return;
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const sourcePage = global.location ? `${global.location.pathname}${global.location.search || ''}` : '';
        ensureRewardRuntime().then((runtime) => {
            if (!runtime || typeof runtime.completeRun !== 'function') return;
            const result = runtime.completeRun({
                ...payload,
                module: moduleKey,
                subType: detectPracticeSubType(payload),
                sourcePage,
                scopeKey: payload.scopeKey || sourcePage,
                total,
                questionCount: total,
                answeredCount: Number(payload.answeredCount ?? total),
                correct,
                correctCount: correct,
                accuracy: normalizeRewardAccuracy(payload),
                cleared: payload.cleared !== false,
                finishedAt: payload.finishedAt || new Date().toISOString()
            });
            if (result && result.accepted && result.drawOffer && result.drawOffer.available
                && typeof runtime.renderDrawOffer === 'function') {
                runtime.renderDrawOffer(result, payload);
            }
        }).catch(() => {});
    }

    function getAnswerMessage(payload = {}) {
        if (payload.skipped || payload.isEmpty || payload.isCorrect === null) {
            return '这一题先留作复盘，回头补上也算前进。';
        }
        if (payload.isCorrect === true) {
            return Number(payload.streak) >= 3 ? '已经连续答对，保持现在的节奏。' : '答对了，继续下一题。';
        }
        return '这题先看解析并记下关键点，之后再回来复盘。';
    }

    function getSummaryMessage(payload = {}) {
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const accuracy = Number.isFinite(Number(payload.accuracy))
            ? Number(payload.accuracy)
            : (total > 0 ? correct / total : 0);
        const percent = accuracy > 1 ? accuracy : accuracy * 100;
        if (percent >= 95) return '这一轮完成得很稳，继续保持。';
        if (percent >= 80) return '整体状态不错，把剩余错题复盘一遍会更扎实。';
        if (percent >= 60) return '基础已经站稳，下一轮重点处理错题。';
        if (total > 0) return '先把薄弱点标出来，再逐项复盘。';
        return '准备好后开始第一题。';
    }

    function getTone(payload = {}) {
        if (payload.skipped || payload.isEmpty || payload.isCorrect === null) return 'empty';
        if (payload.isCorrect === true) return 'correct';
        if (payload.isCorrect === false) return 'wrong';
        return 'summary';
    }

    function emitFeedback(payload, message) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const phase = String(source.phase || source.type || 'answer');
        const key = [phase, source.module || '', source.questionId || source.questionIndex || '', source.isCorrect].join(':');
        const now = Date.now();
        if (key === lastSignalKey && now - lastSignalAt < 700) return message;
        lastSignalKey = key;
        lastSignalAt = now;
        try {
            global.dispatchEvent(new CustomEvent('n2-practice-feedback', {
                detail: { ...source, message }
            }));
        } catch (error) {}
        return message;
    }

    function trackAnswer(payload = {}) {
        const message = String(payload.message || getAnswerMessage(payload)).trim();
        return message ? emitFeedback(payload, message) : '';
    }

    function trackSummary(payload = {}) {
        const source = { ...payload, phase: payload.phase || 'summary' };
        const message = String(payload.message || getSummaryMessage(payload)).trim();
        trackPracticeReward(source);
        return message ? emitFeedback(source, message) : '';
    }

    function renderAnswerFeedback(target, payload = {}) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return null;
        injectStyles();
        const tone = getTone(payload);
        const title = tone === 'correct' ? '答对了' : tone === 'empty' ? '先留作复盘' : '这题要复盘';
        const copy = String(payload.copy || getAnswerMessage(payload));
        element.innerHTML = `
            <div class="n2-feedback-card is-${tone}">
                <p class="n2-feedback-title">${escapeHtml(title)}</p>
                <p class="n2-feedback-copy">${escapeHtml(copy)}</p>
            </div>
        `;
        trackAnswer({ ...payload, message: copy });
        return element;
    }

    function renderSummaryFeedback(target, payload = {}) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return null;
        injectStyles();
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const copy = String(payload.copy || getSummaryMessage(payload));
        element.innerHTML = `
            <div class="n2-feedback-card">
                <p class="n2-feedback-title">练习总结</p>
                <p class="n2-feedback-copy">共完成 ${escapeHtml(total)} 题，答对 ${escapeHtml(correct)} 题。${escapeHtml(copy)}</p>
            </div>
        `;
        trackSummary({ ...payload, message: copy });
        return element;
    }

    function dispatchPracticeState(payload = {}) {
        const phase = String(payload.phase || '').trim();
        if (/answer_(correct|wrong)/.test(phase)) {
            return trackAnswer({ ...payload, isCorrect: payload.isCorrect, phase });
        }
        if (phase === 'streak') {
            return emitFeedback(payload, `已经连对 ${Math.max(0, Number(payload.streak || 0))} 题，保持节奏。`);
        }
        if (phase === 'clear' || phase === 'perfect_clear') {
            return trackSummary({
                ...payload,
                phase,
                correct: payload.correct ?? payload.correctCount,
                total: payload.total ?? payload.questionCount
            });
        }
        return '';
    }

    const api = {
        showAnswerFeedback: renderAnswerFeedback,
        showSummaryFeedback: renderSummaryFeedback,
        trackAnswer,
        trackSummary,
        dispatchPracticeState
    };

    global.N2PracticeFeedback = api;

    const existingUi = global.StudyQuestTestUi || {};
    const originalDispatch = typeof existingUi.dispatchPracticeState === 'function'
        ? existingUi.dispatchPracticeState.bind(existingUi)
        : null;
    existingUi.dispatchPracticeState = function(payload) {
        if (originalDispatch) {
            try {
                originalDispatch(payload);
            } catch (error) {
                console.warn('StudyQuestTestUi.dispatchPracticeState failed:', error);
            }
        }
        return api.dispatchPracticeState(payload);
    };
    existingUi.mountPracticeTestTools = existingUi.mountPracticeTestTools || function() {};
    existingUi.hidePracticeTestTools = existingUi.hidePracticeTestTools || function() {};
    existingUi.getDrawAffordanceMarkup = existingUi.getDrawAffordanceMarkup || function(runKey) {
        return global.KikiPracticeRewardRuntime && typeof global.KikiPracticeRewardRuntime.getDrawAffordanceMarkup === 'function'
            ? global.KikiPracticeRewardRuntime.getDrawAffordanceMarkup(runKey)
            : '';
    };
    existingUi.canOpenDrawForRunKey = existingUi.canOpenDrawForRunKey || function(runKey) {
        return global.KikiPracticeRewardRuntime && typeof global.KikiPracticeRewardRuntime.canOpenDrawForRunKey === 'function'
            ? global.KikiPracticeRewardRuntime.canOpenDrawForRunKey(runKey)
            : false;
    };
    global.StudyQuestTestUi = existingUi;
})(typeof window !== 'undefined' ? window : globalThis);
