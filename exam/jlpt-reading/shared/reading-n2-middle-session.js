(function () {
    if (!window.ReadingYearSystem || typeof window.ReadingYearSystem.createReadingYearSession !== 'function') {
        return;
    }

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const fileName = pathParts[pathParts.length - 1] || '';
    const levelSegment = pathParts[pathParts.length - 2] || '';
    const typeSegment = pathParts[pathParts.length - 3] || '';

    if (typeSegment !== 'm' || !/^n2$/i.test(levelSegment)) {
        return;
    }

    const levelLabel = 'N2';
    const articleType = 'middle';
    const indexPath = '../../index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const examKey = urlParams.get('examKey') || fileName.replace(/\.html$/i, '');
    const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
    const isTestMode = readingMode === 'test';
    const testServer = window.StudyQuestTestServer;
    const pageDefinitions = collectPageDefinitions();
    const totalPages = Math.max(1, pageDefinitions.length);
    const readingSession = window.ReadingYearSystem.createReadingYearSession({
        level: levelLabel,
        type: articleType,
        examKey,
        totalPages,
        indexPath,
        urlParams
    });

    let currentPage = getCurrentPageNumber();
    let testRunMeta = null;
    const submittedPages = new Set();
    const recordedPages = new Set();
    const timedOutUnansweredByPage = new Map();
    const testState = {
        started: false,
        submitted: false,
        timedOut: false,
        selectedMinutes: 12,
        remainingSeconds: 12 * 60,
        elapsedSeconds: 0,
        timerId: null
    };

    document.body.classList.toggle('reading-mode-study', !readingSession.isReviewMode && !isTestMode);
    document.body.classList.toggle('reading-mode-test', !readingSession.isReviewMode && isTestMode);

    if (readingSession.isReviewMode && readingSession.getReviewPages().length === 0) {
        window.setTimeout(() => {
            alert('当前年份还没有错题记录，先去正常练习一轮吧。');
            readingSession.redirectToIndex();
        }, 0);
        return;
    }

    bindStableBackButton();
    wrapPageSwitching();
    wrapSubmitFunctions();
    restoreInitialPage();

    if (isTestMode && !readingSession.isReviewMode) {
        injectTestController();
    }

    window.ReadingN2MiddleSession = {
        articleType,
        examKey: readingSession.examKey,
        isReviewMode: readingSession.isReviewMode,
        readingMode,
        isTestMode
    };

    function collectPageDefinitions() {
        const definitions = new Map();
        document.querySelectorAll('.submit-btn').forEach((button) => {
            const onclick = button.getAttribute('onclick') || '';
            const match = onclick.match(/\b(submitAllAnswers|submitAnswers)\s*\(\s*(\d+)\s*,\s*\[([^\]]*)\]/);
            if (!match) {
                return;
            }
            const page = Number.parseInt(match[2], 10);
            const ids = match[3]
                .split(',')
                .map((item) => Number.parseInt(item.trim(), 10))
                .filter((item) => Number.isInteger(item));
            if (Number.isInteger(page) && page > 0 && ids.length > 0) {
                definitions.set(page, {
                    page,
                    ids,
                    functionName: match[1],
                    button
                });
            }
        });

        if (definitions.size === 0) {
            document.querySelectorAll('.page-container[id^="page-"]').forEach((pageNode) => {
                const pageMatch = String(pageNode.id || '').match(/page-(\d+)/);
                if (!pageMatch) {
                    return;
                }
                const page = Number.parseInt(pageMatch[1], 10);
                const ids = Array.from(pageNode.querySelectorAll('[id^="qcard-"]'))
                    .map((card) => Number.parseInt(String(card.id).replace(/^qcard-/, ''), 10))
                    .filter((item) => Number.isInteger(item));
                if (ids.length > 0) {
                    definitions.set(page, { page, ids, functionName: '', button: null });
                }
            });
        }

        return Array.from(definitions.values()).sort((left, right) => left.page - right.page);
    }

    function getDefinition(page) {
        return pageDefinitions.find((definition) => definition.page === Number.parseInt(page, 10)) || null;
    }

    function getPageContainer(page) {
        return document.getElementById(`page-${page}`);
    }

    function getCurrentPageNumber() {
        const activePage = document.querySelector('.page-container.active[id^="page-"]');
        const match = activePage && activePage.id.match(/page-(\d+)/);
        return match ? Number.parseInt(match[1], 10) : 1;
    }

    function getAnswerData() {
        try {
            return Function('return typeof answersData !== "undefined" ? answersData : (typeof answerData !== "undefined" ? answerData : null)')();
        } catch (error) {
            return null;
        }
    }

    function getQuestionCard(qId) {
        return document.getElementById(`qcard-${qId}`);
    }

    function getSelectedInput(qId) {
        const card = getQuestionCard(qId);
        return card ? card.querySelector(`input[name="q${qId}"]:checked`) : null;
    }

    function getOptionInputs(qId) {
        const card = getQuestionCard(qId);
        return Array.from(card ? card.querySelectorAll(`input[name="q${qId}"]`) : []);
    }

    function isPageSubmitted(page) {
        const container = getPageContainer(page);
        return Boolean(container && container.querySelector('.question-card.reviewed, .qcard.reviewed, .options.reviewed, .options-group.reviewed'));
    }

    function getPageScore(page, unansweredOverride) {
        const definition = getDefinition(page);
        const data = getAnswerData() || {};
        const ids = definition ? definition.ids : [];
        const totalQuestions = ids.length;
        const unansweredCount = Number.isInteger(unansweredOverride)
            ? unansweredOverride
            : ids.filter((qId) => !getSelectedInput(qId)).length;
        const correctCount = ids.filter((qId) => {
            const selected = getSelectedInput(qId);
            const answer = data[qId] || data[`q${qId}`];
            return Boolean(selected && answer && String(selected.value) === String(answer.correct));
        }).length;
        const incorrectCount = Math.max(0, totalQuestions - correctCount - unansweredCount);

        return {
            totalQuestions,
            correctCount,
            incorrectCount,
            unansweredCount,
            accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
        };
    }

    function getTotalScore() {
        const total = pageDefinitions.reduce((sum, definition) => {
            const score = getPageScore(definition.page, timedOutUnansweredByPage.get(definition.page));
            sum.totalQuestions += score.totalQuestions;
            sum.correctCount += score.correctCount;
            sum.incorrectCount += score.incorrectCount;
            sum.unansweredCount += score.unansweredCount;
            return sum;
        }, {
            totalQuestions: 0,
            correctCount: 0,
            incorrectCount: 0,
            unansweredCount: 0,
            accuracy: 0
        });
        total.accuracy = total.totalQuestions > 0 ? Math.round((total.correctCount / total.totalQuestions) * 100) : 0;
        return total;
    }

    function recordPageResult(page) {
        if (recordedPages.has(page)) {
            return;
        }
        const score = getPageScore(page, timedOutUnansweredByPage.get(page));
        recordedPages.add(page);
        submittedPages.add(page);
        readingSession.recordAnswer(page, score.incorrectCount === 0 && score.unansweredCount === 0);

        if (readingSession.isReviewMode && score.incorrectCount === 0 && score.unansweredCount === 0 && readingSession.getReviewPages().length === 0) {
            window.setTimeout(() => {
                alert('🎉 太棒了！这一年的错题已经复习完毕！');
                readingSession.redirectToIndex();
            }, 160);
        }
    }

    function bindStableBackButton() {
        const backButton = document.getElementById('back-to-reading-index') || document.querySelector('header .header-btn');
        if (!backButton) {
            return;
        }
        backButton.setAttribute('href', readingSession.buildIndexUrl());
        backButton.removeAttribute('onclick');
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.location.href = readingSession.buildIndexUrl();
        }, true);
    }

    function wrapPageSwitching() {
        const originalSwitchPage = window.switchPage;
        window.switchPage = function switchPageWithReadingSession(pageNumber, ...rest) {
            const requestedPage = Number.parseInt(pageNumber, 10);
            if (!Number.isInteger(requestedPage)) {
                return typeof originalSwitchPage === 'function'
                    ? originalSwitchPage.apply(this, [pageNumber, ...rest])
                    : undefined;
            }

            const targetPage = resolveReviewPage(requestedPage);
            if (!targetPage) {
                return undefined;
            }

            const result = typeof originalSwitchPage === 'function'
                ? originalSwitchPage.apply(this, [targetPage, ...rest])
                : activatePage(targetPage);
            currentPage = targetPage;
            readingSession.replacePageUrl(targetPage);
            return result;
        };
    }

    function resolveReviewPage(requestedPage) {
        if (!readingSession.isReviewMode) {
            return requestedPage;
        }
        const reviewPages = readingSession.getReviewPages();
        if (reviewPages.includes(requestedPage)) {
            return requestedPage;
        }
        const direction = requestedPage > currentPage ? 1 : -1;
        const moveTarget = readingSession.getMoveTarget(currentPage, direction);
        if (moveTarget.done) {
            readingSession.redirectToIndex();
            return null;
        }
        if (moveTarget.page) {
            return moveTarget.page;
        }
        return currentPage;
    }

    function activatePage(page) {
        document.querySelectorAll('.page-container').forEach((container) => container.classList.remove('active'));
        const targetPage = getPageContainer(page);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function restoreInitialPage() {
        const requestedPage = Number.parseInt(urlParams.get('page'), 10);
        const initialPage = readingSession.getInitialPage(requestedPage);
        if (initialPage !== getCurrentPageNumber()) {
            window.setTimeout(() => {
                window.switchPage(initialPage);
            }, 0);
        } else {
            readingSession.replacePageUrl(initialPage);
        }
        currentPage = initialPage;
    }

    function wrapSubmitFunctions() {
        const originalSubmitAnswers = window.submitAnswers;
        const originalSubmitAllAnswers = window.submitAllAnswers;

        if (typeof originalSubmitAnswers === 'function') {
            window.submitAnswers = function submitAnswersWithReadingSession(page, ids, ...rest) {
                return handleSubmit(originalSubmitAnswers, this, page, ids, rest);
            };
        }

        if (typeof originalSubmitAllAnswers === 'function') {
            window.submitAllAnswers = function submitAllAnswersWithReadingSession(page, ids, ...rest) {
                return handleSubmit(originalSubmitAllAnswers, this, page, ids, rest);
            };
        }
    }

    function handleSubmit(originalFunction, context, page, ids, rest) {
        const pageNumber = Number.parseInt(page, 10);
        if (!Number.isInteger(pageNumber)) {
            return originalFunction.apply(context, [page, ids, ...rest]);
        }

        if (isTestMode && !readingSession.isReviewMode && !testState.started) {
            alert('请先点击「开始考试」再作答。');
            document.getElementById('n2-middle-test-backdrop')?.classList.add('is-open');
            document.getElementById('n2-middle-test-panel')?.classList.add('is-open');
            return undefined;
        }

        if (isTestMode && testState.submitted) {
            return undefined;
        }

        const wasSubmitted = isPageSubmitted(pageNumber);
        const result = originalFunction.apply(context, [page, ids, ...rest]);

        if (!wasSubmitted && isPageSubmitted(pageNumber)) {
            recordPageResult(pageNumber);
            if (isTestMode && submittedPages.size >= pageDefinitions.length) {
                completeTest();
            }
        }

        return result;
    }

    function setAnswerInputsDisabled(disabled) {
        document.querySelectorAll('.option-input, .qcard input[type="radio"], .question-card input[type="radio"]').forEach((input) => {
            if (!input.closest('.reviewed')) {
                input.disabled = disabled;
            }
        });
        document.querySelectorAll('.submit-btn').forEach((button) => {
            const pageMatch = String(button.id || '').match(/(\d+)$/);
            const page = pageMatch ? Number.parseInt(pageMatch[1], 10) : null;
            if (!page || !isPageSubmitted(page)) {
                button.disabled = disabled;
            }
        });
    }

    function countPageUnanswered(page) {
        const definition = getDefinition(page);
        return definition ? definition.ids.filter((qId) => !getSelectedInput(qId)).length : 0;
    }

    function ensureSelectionsForTimedSubmit() {
        const data = getAnswerData() || {};
        pageDefinitions.forEach((definition) => {
            if (isPageSubmitted(definition.page)) {
                return;
            }
            timedOutUnansweredByPage.set(definition.page, countPageUnanswered(definition.page));
            definition.ids.forEach((qId) => {
                if (getSelectedInput(qId)) {
                    return;
                }
                const answer = data[qId] || data[`q${qId}`];
                const correctValue = answer ? String(answer.correct) : '';
                const fallback = getOptionInputs(qId).find((input) => String(input.value) !== correctValue) || getOptionInputs(qId)[0];
                if (!fallback) {
                    return;
                }
                fallback.checked = true;
                const label = fallback.closest('.option-label, .option');
                if (label) {
                    label.classList.add('selected');
                }
            });
        });
    }

    function submitAllUnsubmittedPages() {
        pageDefinitions.forEach((definition) => {
            if (isPageSubmitted(definition.page)) {
                return;
            }
            const fn = definition.functionName && typeof window[definition.functionName] === 'function'
                ? window[definition.functionName]
                : null;
            if (fn) {
                fn(definition.page, definition.ids);
            }
        });
    }

    function injectTestController() {
        if (document.getElementById('n2-middle-test-panel')) {
            return;
        }

        const style = document.createElement('style');
        style.textContent = `
            body.n2-middle-test-awaiting .layout-container,
            body.n2-middle-test-awaiting .wrap {
                opacity: 0;
                pointer-events: none;
                user-select: none;
            }
            .n2-middle-test-backdrop {
                position: fixed;
                inset: 0;
                z-index: 1250;
                display: none;
                background: rgba(248, 246, 240, 0.92);
                backdrop-filter: blur(8px);
            }
            .n2-middle-test-backdrop.is-open { display: block; }
            .n2-middle-test-panel {
                position: fixed;
                z-index: 1260;
                top: 50%;
                left: 50%;
                width: min(420px, calc(100vw - 32px));
                transform: translate(-50%, -50%);
                box-sizing: border-box;
                display: none;
                padding: 24px;
                border: 2px solid #2c2c2a;
                border-radius: 18px;
                background: #fff;
                box-shadow: 0 18px 42px rgba(44, 44, 42, 0.14);
                font-family: "Noto Sans JP", "Noto Sans SC", sans-serif;
            }
            .n2-middle-test-panel.is-open { display: block; }
            .n2-middle-test-panel h2 {
                margin: 0 0 14px;
                font-size: 20px;
                font-weight: 900;
                color: #2c2c2a;
                letter-spacing: 0.08em;
            }
            .n2-middle-test-copy {
                margin: 0 0 18px;
                font-size: 13px;
                line-height: 1.8;
                color: #6f6b63;
            }
            .n2-middle-test-display {
                display: block;
                margin: 0 0 18px;
                padding: 16px;
                border: 1px solid #d8d2c3;
                border-radius: 14px;
                background: #faf7f0;
                font-size: 36px;
                line-height: 1;
                font-weight: 900;
                color: #2c2c2a;
                text-align: center;
                font-variant-numeric: tabular-nums;
            }
            .n2-middle-test-controls {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
                justify-content: center;
                margin-bottom: 18px;
            }
            .n2-middle-test-preset,
            .n2-middle-test-start {
                appearance: none;
                border: 1.5px solid #2c2c2a;
                border-radius: 10px;
                background: #fff;
                color: #2c2c2a;
                font-size: 14px;
                font-weight: 800;
                padding: 8px 12px;
                cursor: pointer;
            }
            .n2-middle-test-preset.is-selected { background: rgba(255, 213, 79, 0.4); }
            .n2-middle-test-minutes {
                width: 74px;
                box-sizing: border-box;
                border: 1.5px solid #2c2c2a;
                border-radius: 10px;
                padding: 8px 10px;
                font-size: 14px;
                font-weight: 800;
                text-align: center;
            }
            .n2-middle-test-start {
                width: 100%;
                padding: 12px 16px;
                background: rgba(16, 185, 129, 0.2);
            }
            .n2-middle-floating-timer {
                position: fixed;
                right: 18px;
                bottom: 18px;
                z-index: 1240;
                display: none;
                padding: 10px 14px;
                border: 1.5px solid #2c2c2a;
                border-radius: 999px;
                background: #fff;
                box-shadow: 0 10px 28px rgba(44, 44, 42, 0.12);
                font-size: 14px;
                font-weight: 900;
                color: #2c2c2a;
                font-variant-numeric: tabular-nums;
            }
            .n2-middle-floating-timer.is-visible { display: block; }
            @media (max-width: 560px) {
                .n2-middle-test-panel { padding: 20px; }
                .n2-middle-test-display { font-size: 30px; }
                .n2-middle-floating-timer {
                    right: 12px;
                    bottom: 12px;
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);

        const backdrop = document.createElement('div');
        backdrop.className = 'n2-middle-test-backdrop is-open';
        backdrop.id = 'n2-middle-test-backdrop';

        const panel = document.createElement('div');
        panel.className = 'n2-middle-test-panel is-open';
        panel.id = 'n2-middle-test-panel';
        panel.innerHTML = `
            <h2>挑战计时</h2>
            <p class="n2-middle-test-copy">请先设定考试时间。开始后题面会解锁，倒计时结束时会自动交卷。</p>
            <span class="n2-middle-test-display" id="n2-middle-test-display">${formatTime(testState.remainingSeconds)}</span>
            <div class="n2-middle-test-controls">
                <button type="button" class="n2-middle-test-preset is-selected" data-n2-middle-minutes="12">12分</button>
                <button type="button" class="n2-middle-test-preset" data-n2-middle-minutes="15">15分</button>
                <button type="button" class="n2-middle-test-preset" data-n2-middle-minutes="20">20分</button>
                <input type="number" class="n2-middle-test-minutes" id="n2-middle-test-minutes" min="1" max="180" step="1" value="12" aria-label="考试分钟数">
            </div>
            <button type="button" class="n2-middle-test-start" id="n2-middle-test-start">开始考试</button>
        `;

        const floatingTimer = document.createElement('div');
        floatingTimer.className = 'n2-middle-floating-timer';
        floatingTimer.id = 'n2-middle-floating-timer';
        floatingTimer.textContent = formatTime(testState.remainingSeconds);

        document.body.appendChild(backdrop);
        document.body.appendChild(panel);
        document.body.appendChild(floatingTimer);
        document.body.classList.add('n2-middle-test-awaiting');
        setAnswerInputsDisabled(true);

        const display = document.getElementById('n2-middle-test-display');
        const input = document.getElementById('n2-middle-test-minutes');
        const presetButtons = Array.from(document.querySelectorAll('.n2-middle-test-preset'));

        function syncTimerDisplay() {
            const text = formatTime(testState.remainingSeconds);
            if (display) display.textContent = text;
            floatingTimer.textContent = text;
        }

        function setMinutes(minutes) {
            const safeMinutes = Math.max(1, Math.min(180, Number.parseInt(minutes, 10) || 12));
            testState.selectedMinutes = safeMinutes;
            testState.remainingSeconds = safeMinutes * 60;
            input.value = String(safeMinutes);
            presetButtons.forEach((button) => {
                button.classList.toggle('is-selected', Number.parseInt(button.dataset.n2MiddleMinutes, 10) === safeMinutes);
            });
            syncTimerDisplay();
        }

        presetButtons.forEach((button) => {
            button.addEventListener('click', () => setMinutes(button.dataset.n2MiddleMinutes));
        });

        input.addEventListener('input', () => setMinutes(input.value));
        document.getElementById('n2-middle-test-start').addEventListener('click', startTestTimer);

        window.ReadingN2MiddleSessionSyncTimer = syncTimerDisplay;
    }

    function startTestTimer() {
        if (testState.started || testState.submitted) {
            return;
        }

        testState.started = true;
        testState.remainingSeconds = testState.selectedMinutes * 60;
        testState.elapsedSeconds = 0;
        testState.timedOut = false;
        testRunMeta = testServer && typeof testServer.startRun === 'function'
            ? testServer.startRun({
                module: 'reading',
                subType: 'n2_middle',
                mode: 'year',
                scopeKey: normalizeScopeKey(examKey),
                sourcePage: window.location.pathname
            })
            : null;

        document.body.classList.remove('n2-middle-test-awaiting');
        document.getElementById('n2-middle-test-backdrop')?.classList.remove('is-open');
        document.getElementById('n2-middle-test-panel')?.classList.remove('is-open');
        document.getElementById('n2-middle-floating-timer')?.classList.add('is-visible');
        setAnswerInputsDisabled(false);
        syncInjectedTimerDisplay();

        testState.timerId = window.setInterval(() => {
            testState.elapsedSeconds += 1;
            testState.remainingSeconds = Math.max(0, testState.remainingSeconds - 1);
            syncInjectedTimerDisplay();
            if (testState.remainingSeconds <= 0) {
                submitTimedOutTest();
            }
        }, 1000);
    }

    function submitTimedOutTest() {
        if (testState.submitted) {
            return;
        }
        testState.timedOut = true;
        ensureSelectionsForTimedSubmit();
        submitAllUnsubmittedPages();
        completeTest();
    }

    function completeTest() {
        if (!isTestMode || testState.submitted) {
            return;
        }
        testState.submitted = true;
        stopTestTimer();
        setAnswerInputsDisabled(true);
        showTestResultOverlay(getTotalScore());
    }

    function stopTestTimer() {
        if (testState.timerId) {
            window.clearInterval(testState.timerId);
            testState.timerId = null;
        }
    }

    function syncInjectedTimerDisplay() {
        if (typeof window.ReadingN2MiddleSessionSyncTimer === 'function') {
            window.ReadingN2MiddleSessionSyncTimer();
        }
    }

    function completeRewardRun(score) {
        if (!isTestMode || !testRunMeta || !testServer || typeof testServer.completeRun !== 'function') {
            return null;
        }
        return testServer.completeRun({
            runKey: testRunMeta.runKey,
            module: 'reading',
            subType: 'n2_middle',
            mode: 'year',
            scopeKey: normalizeScopeKey(examKey),
            questionCount: score.totalQuestions,
            answeredCount: Math.max(0, score.totalQuestions - score.unansweredCount),
            correctCount: score.correctCount,
            accuracy: score.totalQuestions > 0 ? score.correctCount / score.totalQuestions : 0,
            bestStreak: score.correctCount,
            cleared: true,
            sourcePage: window.location.pathname
        });
    }

    function buildDrawMarkup(reward) {
        if (!reward || !reward.accepted || !reward.drawOffer || !reward.drawOffer.available) {
            return '';
        }
        const runKey = reward.drawOffer.runKey || (testRunMeta && testRunMeta.runKey) || '';
        if (window.StudyQuestTestUi && typeof window.StudyQuestTestUi.getDrawAffordanceMarkup === 'function') {
            return window.StudyQuestTestUi.getDrawAffordanceMarkup(runKey);
        }
        const safeRunKey = String(runKey).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
        return safeRunKey
            ? `<button class="lab-draw-affordance" type="button" data-lab-draw-affordance data-draw-run-key="${safeRunKey}" aria-label="打开抽签结果"><span class="lab-draw-affordance-icon" aria-hidden="true">🐶</span></button>`
            : '';
    }

    function showTestResultOverlay(score) {
        if (!isTestMode || document.getElementById('study-quest-n2-middle-result')) {
            return;
        }
        const reward = completeRewardRun(score);
        const drawMarkup = buildDrawMarkup(reward);
        const overlay = document.createElement('div');
        overlay.id = 'study-quest-n2-middle-result';
        overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;overflow-y:auto;padding:24px;background:rgba(248,244,236,0.94);backdrop-filter:blur(18px);';
        overlay.innerHTML = `
            <div style="max-width:620px;width:100%;box-sizing:border-box;background:#fff;border:1px solid #e6e4df;border-radius:18px;padding:34px 28px 28px;text-align:center;box-shadow:0 1px 8px rgba(0,0,0,0.04);">
                <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
                    <h2 style="margin:0;font-size:32px;line-height:1.2;font-weight:700;color:#2c2c2a;letter-spacing:0.05em;">${score.accuracy === 100 ? '满分通关' : '测试完成'}</h2>
                    ${drawMarkup}
                </div>
                <p style="margin:0 auto 22px;max-width:460px;font-size:14px;line-height:1.9;color:#73736e;">
                    你已经完成了 <strong style="color:#2c2c2a;">[N2] ${formatExamLabel(examKey)}</strong> 中篇挑战。<br>
                    本次共完成 ${score.totalQuestions} 题，提交后可以直接进入解析复盘。
                </p>
                <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:0 auto 24px;max-width:560px;">
                    <div style="padding:18px 14px;border:1px solid #d7eadc;border-radius:12px;background:#f4fcf6;"><div style="font-size:34px;line-height:1;font-weight:700;color:#4aa55d;">${score.correctCount}</div><div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#6e7d72;">正确</div></div>
                    <div style="padding:18px 14px;border:1px solid #f0d1cf;border-radius:12px;background:#fff7f6;"><div style="font-size:34px;line-height:1;font-weight:700;color:#d6453d;">${score.incorrectCount}</div><div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8a7777;">错误</div></div>
                    <div style="padding:18px 14px;border:1px solid #eee0bf;border-radius:12px;background:#fffaf0;"><div style="font-size:34px;line-height:1;font-weight:700;color:#a07a3c;">${score.unansweredCount}</div><div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8c826f;">未答</div></div>
                    <div style="padding:18px 14px;border:1px solid #e7e1d7;border-radius:12px;background:#faf7f2;"><div style="font-size:34px;line-height:1;font-weight:700;color:#2c2c2a;">${score.accuracy}%</div><div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8c826f;">正确率</div></div>
                </div>
                <div style="margin:0 auto 22px;max-width:420px;padding:14px 16px;border:1px solid #e6e4df;border-radius:12px;background:#fff;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;color:#aba9a4;">本次用时</div>
                    <div style="margin-top:8px;font-size:26px;line-height:1.1;font-weight:700;color:#2c2c2a;">${formatTime(testState.elapsedSeconds)}</div>
                </div>
                ${testState.timedOut ? '<p style="margin:0 0 20px;font-size:14px;line-height:1.7;font-weight:700;color:#b63a30;">时间结束，本轮已自动交卷。</p>' : ''}
                <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;width:100%;max-width:430px;box-sizing:border-box;margin:0 auto;">
                    <button type="button" data-n2-middle-result-action="analysis" style="padding:13px 18px;border-radius:10px;border:1px solid #2c2c2a;background:#2c2c2a;color:#fff;font-size:14px;font-weight:700;letter-spacing:0.08em;">查看解析</button>
                    <button type="button" data-n2-middle-result-action="retry" style="padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#fff;color:#2c2c2a;font-size:14px;font-weight:700;letter-spacing:0.08em;">再挑战</button>
                    <button type="button" data-n2-middle-result-action="index" style="grid-column:1 / -1;padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#f7f6f2;color:#73736e;font-size:14px;font-weight:700;letter-spacing:0.08em;">返回目录</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    document.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-n2-middle-result-action]');
        if (!actionButton) {
            return;
        }
        const overlay = document.getElementById('study-quest-n2-middle-result');
        if (actionButton.dataset.n2MiddleResultAction === 'analysis') {
            if (overlay) overlay.remove();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (actionButton.dataset.n2MiddleResultAction === 'retry') {
            const nextParams = new URLSearchParams();
            nextParams.set('readingMode', 'test');
            nextParams.set('examKey', examKey);
            window.location.href = `${window.location.pathname}?${nextParams.toString()}`;
            return;
        }
        if (actionButton.dataset.n2MiddleResultAction === 'index') {
            window.location.href = readingSession.buildIndexUrl();
        }
    });

    function normalizeScopeKey(value) {
        return String(value || '').trim().replace(/\./g, '-').replace(/\s+/g, '');
    }

    function formatExamLabel(value) {
        const match = String(value || '').trim().match(/^(\d{4})[.\-](\d{1,2})$/);
        return match ? `${match[1]}年${Number.parseInt(match[2], 10)}月` : String(value || '').trim();
    }

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
})();
