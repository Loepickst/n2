(function () {
    if (!window.ReadingYearSystem || typeof window.ReadingYearSystem.createReadingYearSession !== 'function') {
        return;
    }

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const section = pathParts[pathParts.length - 2];
    const parentSection = pathParts[pathParts.length - 3];
    const grandParentSection = pathParts[pathParts.length - 4];
    const fileName = pathParts[pathParts.length - 1] || '';
    const isLevelSegment = /^(?:n1|n2|n3)$/i.test(section);
    const parentIsLevelSegment = /^(?:n1|n2|n3)$/i.test(parentSection);
    const isLongTenPage = grandParentSection === 'l' && parentIsLevelSegment && section === '10';
    const isLongLevelPage = parentSection === 'l' && isLevelSegment;
    const isLongPage = isLongTenPage || isLongLevelPage;
    const typeSection = isLongPage ? 'l' : (isLevelSegment ? parentSection : section);
    const levelSegment = isLongTenPage ? parentSection : isLongLevelPage ? section : (isLevelSegment ? section : 'n1');
    const levelLabel = String(levelSegment || 'n1').toUpperCase();

    if (typeSection !== 'd' && typeSection !== 't' && !isLongPage) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
    const isTestMode = readingMode === 'test';
    const sharedReadingTools = window.StudyQuestReadingMode;
    const useSharedReadingTools = Boolean(
        isTestMode &&
        document.body.classList.contains('reading-article-tools-page') &&
        sharedReadingTools &&
        sharedReadingTools.isTestMode
    );
    const articleType = isLongPage ? 'long' : typeSection === 'd' ? 'integrated' : 'search';
    const articleLabel = isLongPage ? '長文読解' : typeSection === 'd' ? '統合理解' : '情報検索';
    const indexPath = isLongTenPage ? '../../../index.html' : '../../index.html';
    const fileExamKey = fileName.replace(/\.html$/i, '');
    const examKey = urlParams.get('examKey') || fileExamKey;
    const readingSession = window.ReadingYearSystem.createReadingYearSession({
        level: levelLabel,
        type: articleType,
        examKey,
        totalPages: 1,
        indexPath,
        urlParams
    });
    const testServer = window.StudyQuestTestServer;
    let testRunMeta = null;
    const testState = {
        started: false,
        submitted: false,
        timedOut: false,
        selectedMinutes: 8,
        remainingSeconds: 8 * 60,
        elapsedSeconds: 0,
        timerId: null,
        unansweredAtSubmit: 0
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

    function isSubmitted() {
        const mainArticle = document.getElementById('mainArticleContent');
        return Boolean(
            (mainArticle && mainArticle.classList.contains('reviewed')) ||
            document.querySelector('.question-card.reviewed') ||
            document.querySelector('.qcard.reviewed') ||
            document.querySelector('.options.reviewed') ||
            document.querySelector('.options-group.reviewed')
        );
    }

    function isPageAllCorrect(score = getPageScore()) {
        return score.incorrectCount === 0 && score.unansweredCount === 0;
    }

    function getPageScore(unansweredOverride) {
        const questionCards = getQuestionCards();
        if (!questionCards.length) {
            return {
                totalQuestions: 0,
                correctCount: 0,
                incorrectCount: 0,
                unansweredCount: 0,
                accuracy: 0
            };
        }

        const unansweredCount = Number.isInteger(unansweredOverride)
            ? unansweredOverride
            : questionCards.filter((card) => !getSelectedInput(card)).length;
        const correctCount = questionCards.filter((card) => {
            const selected = getSelectedInput(card);
            const wrongOption = card.querySelector('.option-label.is-wrong, .option.wrong');
            return Boolean(selected) && !wrongOption;
        }).length;
        const totalQuestions = questionCards.length;
        const incorrectCount = Math.max(0, totalQuestions - correctCount - unansweredCount);

        return {
            totalQuestions,
            correctCount,
            incorrectCount,
            unansweredCount,
            accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
        };
    }

    function recordPageResult(pageAllCorrect) {
        readingSession.recordAnswer(1, pageAllCorrect);

        if (readingSession.isReviewMode && pageAllCorrect && readingSession.getReviewPages().length === 0) {
            window.setTimeout(() => {
                alert('🎉 太棒了！这一年的错题已经复习完毕！');
                readingSession.redirectToIndex();
            }, 160);
        }
    }

    function normalizeScopeKey(value) {
        return String(value || '').trim().replace(/\./g, '-').replace(/\s+/g, '');
    }

    function formatExamLabel(value) {
        const match = String(value || '').trim().match(/^(\d{4})[.\-](\d{1,2})$/);
        if (!match) {
            return String(value || '').trim();
        }
        return `${match[1]}年${Number.parseInt(match[2], 10)}月`;
    }

    function buildModeUrl(mode) {
        const nextParams = new URLSearchParams();
        nextParams.set('readingMode', mode);
        nextParams.set('examKey', examKey);
        return `${window.location.pathname}?${nextParams.toString()}`;
    }

    function buildIndexUrl() {
        return `${indexPath}?level=${encodeURIComponent(levelLabel)}&type=${encodeURIComponent(articleType)}&browse=year`;
    }

    function bindStableIndexBackButton() {
        const backButton = document.querySelector('header .header-btn');
        if (!backButton) {
            return;
        }

        backButton.removeAttribute('onclick');
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.location.href = buildIndexUrl();
        }, true);
    }

    function ensureLegacyLongSubmitScope() {
        if (!isLongPage || document.getElementById('page-1')) {
            return;
        }

        const hasPagedSubmit = Boolean(document.querySelector('[onclick*="submitAnswers(1"]'));
        if (!hasPagedSubmit) {
            return;
        }

        const pageRoot = document.querySelector('.wrap') || document.querySelector('.layout-container');
        if (!pageRoot) {
            return;
        }

        const originalId = pageRoot.id;
        pageRoot.id = 'page-1';

        if (originalId && originalId !== 'page-1' && !document.getElementById(originalId)) {
            const anchor = document.createElement('span');
            anchor.id = originalId;
            anchor.setAttribute('aria-hidden', 'true');
            anchor.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);';
            pageRoot.parentNode.insertBefore(anchor, pageRoot);
        }
    }

    bindStableIndexBackButton();
    ensureLegacyLongSubmitScope();

    function completeRewardRun(score) {
        if (!isTestMode || !testRunMeta || !testServer || typeof testServer.completeRun !== 'function') {
            return null;
        }

        return testServer.completeRun({
            runKey: testRunMeta.runKey,
            module: 'reading',
            subType: `${levelLabel.toLowerCase()}_${articleType}`,
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
        if (!isTestMode || document.getElementById('study-quest-dt-result')) {
            return;
        }

        const reward = completeRewardRun(score);
        const drawMarkup = buildDrawMarkup(reward);
        const overlay = document.createElement('div');
        overlay.id = 'study-quest-dt-result';
        overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;overflow-y:auto;padding:24px;background:rgba(248,244,236,0.94);backdrop-filter:blur(18px);';
        overlay.innerHTML = `
            <div style="max-width:620px;width:100%;box-sizing:border-box;background:#fff;border:1px solid #e6e4df;border-radius:18px;padding:34px 28px 28px;text-align:center;box-shadow:0 1px 8px rgba(0,0,0,0.04);">
                <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
                    <h2 style="margin:0;font-size:32px;line-height:1.2;font-weight:700;color:#2c2c2a;letter-spacing:0.05em;">${score.accuracy === 100 ? '满分通关' : '测试完成'}</h2>
                    ${drawMarkup}
                </div>
                <p style="margin:0 auto 22px;max-width:460px;font-size:14px;line-height:1.9;color:#73736e;">
                    你已经完成了 <strong style="color:#2c2c2a;">[${levelLabel}] ${formatExamLabel(examKey)}</strong> ${articleLabel}挑战。<br>
                    本次共完成 ${score.totalQuestions} 题，提交后可以直接进入解析复盘。
                </p>
                <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:0 auto 24px;max-width:560px;">
                    <div style="padding:18px 14px;border:1px solid #d7eadc;border-radius:12px;background:#f4fcf6;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#4aa55d;">${score.correctCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#6e7d72;">正确</div>
                    </div>
                    <div style="padding:18px 14px;border:1px solid #f0d1cf;border-radius:12px;background:#fff7f6;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#d6453d;">${score.incorrectCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8a7777;">错误</div>
                    </div>
                    <div style="padding:18px 14px;border:1px solid #eee0bf;border-radius:12px;background:#fffaf0;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#a07a3c;">${score.unansweredCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8c826f;">未答</div>
                    </div>
                    <div style="padding:18px 14px;border:1px solid #e7e1d7;border-radius:12px;background:#faf7f2;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#2c2c2a;">${score.accuracy}%</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8c826f;">正确率</div>
                    </div>
                </div>
                <div style="margin:0 auto 22px;max-width:420px;padding:14px 16px;border:1px solid #e6e4df;border-radius:12px;background:#fff;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;color:#aba9a4;">本次用时</div>
                    <div style="margin-top:8px;font-size:26px;line-height:1.1;font-weight:700;color:#2c2c2a;">${formatTime(testState.elapsedSeconds)}</div>
                </div>
                ${testState.timedOut ? '<p style="margin:0 0 20px;font-size:14px;line-height:1.7;font-weight:700;color:#b63a30;">时间结束，本轮已自动交卷。</p>' : ''}
                <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;width:100%;max-width:430px;box-sizing:border-box;margin:0 auto;">
                    <button type="button" data-dt-result-action="analysis" style="padding:13px 18px;border-radius:10px;border:1px solid #2c2c2a;background:#2c2c2a;color:#fff;font-size:14px;font-weight:700;letter-spacing:0.08em;">查看解析</button>
                    <button type="button" data-dt-result-action="retry" style="padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#fff;color:#2c2c2a;font-size:14px;font-weight:700;letter-spacing:0.08em;">再挑战</button>
                    <button type="button" data-dt-result-action="index" style="grid-column:1 / -1;padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#f7f6f2;color:#73736e;font-size:14px;font-weight:700;letter-spacing:0.08em;">返回目录</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    document.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-dt-result-action]');
        if (!actionButton) {
            return;
        }

        const overlay = document.getElementById('study-quest-dt-result');
        if (actionButton.dataset.dtResultAction === 'analysis') {
            if (overlay) {
                overlay.remove();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (actionButton.dataset.dtResultAction === 'retry') {
            window.location.href = buildModeUrl('test');
            return;
        }

        if (actionButton.dataset.dtResultAction === 'index') {
            window.location.href = buildIndexUrl();
        }
    });

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function getAnswerData() {
        try {
            return Function('return typeof answerData !== "undefined" ? answerData : (typeof answersData !== "undefined" ? answersData : null)')();
        } catch (error) {
            return null;
        }
    }

    function getQuestionCards() {
        const standardCards = Array.from(document.querySelectorAll('.question-card[data-question]'));
        if (standardCards.length) {
            return standardCards;
        }
        return Array.from(document.querySelectorAll('.qcard[id^="qcard-"]'));
    }

    function getQuestionKey(card) {
        if (!card) {
            return '';
        }
        if (card.dataset && card.dataset.question) {
            return card.dataset.question;
        }
        const match = String(card.id || '').match(/^qcard-(.+)$/);
        return match ? match[1] : '';
    }

    function getSelectedInput(card) {
        return card ? card.querySelector('.option-input:checked, input[type="radio"]:checked') : null;
    }

    function getOptionInputs(card) {
        return Array.from(card ? card.querySelectorAll('.option-input, input[type="radio"]') : []);
    }

    function getSubmitButtons() {
        return Array.from(document.querySelectorAll('#submitBtn, [id^="submitBtn"], .submit-btn'));
    }

    function setAnswerInputsDisabled(disabled) {
        document.querySelectorAll('.option-input, .qcard input[type="radio"]').forEach((input) => {
            input.disabled = disabled;
        });
        getSubmitButtons().forEach((submitButton) => {
            submitButton.disabled = disabled;
        });
    }

    function countUnansweredQuestions() {
        return getQuestionCards().filter((card) => !getSelectedInput(card)).length;
    }

    function ensureSelectionsForTimedSubmit() {
        const data = getAnswerData() || {};
        getQuestionCards().forEach((card) => {
            if (getSelectedInput(card)) {
                return;
            }

            const qName = getQuestionKey(card);
            const qData = data[qName] || data[`q${qName}`] || null;
            const correctValue = qData ? String(qData.correct) : '';
            const options = getOptionInputs(card);
            const fallback = options.find((input) => String(input.value) !== correctValue) || options[0];
            if (!fallback) {
                return;
            }

            fallback.checked = true;
            const label = fallback.closest('.option-label, .option');
            if (label) {
                label.classList.add('selected');
            }
        });
    }

    function submitCurrentPage() {
        const button = getSubmitButtons().find((item) => !item.disabled);
        if (button) {
            button.click();
            return;
        }
        if (typeof originalSubmitAnswers === 'function') {
            originalSubmitAnswers.call(window);
        }
    }

    function injectTestController() {
        if (!isTestMode || readingSession.isReviewMode || document.getElementById('dt-test-timer-panel')) {
            return;
        }

        const style = document.createElement('style');
        style.textContent = `
            body.dt-test-awaiting-timer .layout-container,
            body.dt-test-awaiting-timer .wrap,
            body.dt-test-awaiting-timer .quick-nav {
                opacity: 0;
                pointer-events: none;
                user-select: none;
            }
            .dt-test-backdrop {
                position: fixed;
                inset: 0;
                z-index: 1250;
                display: none;
                background: rgba(248, 246, 240, 0.92);
                backdrop-filter: blur(8px);
            }
            .dt-test-backdrop.is-open { display: block; }
            .dt-test-panel {
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
            .dt-test-panel.is-open { display: block; }
            .dt-test-panel-title {
                margin: 0 0 14px;
                font-size: 20px;
                font-weight: 900;
                color: #2c2c2a;
                letter-spacing: 0.08em;
            }
            .dt-test-panel-copy {
                margin: 0 0 18px;
                font-size: 13px;
                line-height: 1.8;
                color: #6f6b63;
            }
            .dt-test-display {
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
            .dt-test-controls {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
                justify-content: center;
                margin-bottom: 18px;
            }
            .dt-test-preset,
            .dt-test-start {
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
            .dt-test-preset.is-selected {
                background: rgba(255, 213, 79, 0.4);
            }
            .dt-test-minutes {
                width: 74px;
                box-sizing: border-box;
                border: 1.5px solid #2c2c2a;
                border-radius: 10px;
                padding: 8px 10px;
                font-size: 14px;
                font-weight: 800;
                text-align: center;
            }
            .dt-test-start {
                width: 100%;
                padding: 12px 16px;
                background: rgba(16, 185, 129, 0.2);
            }
            .dt-test-floating-timer {
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
            .dt-test-floating-timer.is-visible { display: block; }
            @media (max-width: 560px) {
                .dt-test-panel { padding: 20px; }
                .dt-test-display { font-size: 30px; }
                .dt-test-floating-timer {
                    right: 12px;
                    bottom: 12px;
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);

        const backdrop = document.createElement('div');
        backdrop.className = 'dt-test-backdrop is-open';
        backdrop.id = 'dt-test-backdrop';

        const panel = document.createElement('div');
        panel.className = 'dt-test-panel is-open';
        panel.id = 'dt-test-timer-panel';
        panel.innerHTML = `
            <h2 class="dt-test-panel-title">挑战计时</h2>
            <p class="dt-test-panel-copy">请先设定考试时间。开始后题面会解锁，倒计时结束时会自动交卷。</p>
            <span class="dt-test-display" id="dt-test-display">${formatTime(testState.remainingSeconds)}</span>
            <div class="dt-test-controls">
                <button type="button" class="dt-test-preset is-selected" data-dt-minutes="8">8分</button>
                <button type="button" class="dt-test-preset" data-dt-minutes="10">10分</button>
                <button type="button" class="dt-test-preset" data-dt-minutes="15">15分</button>
                <input type="number" class="dt-test-minutes" id="dt-test-minutes" min="1" max="180" step="1" value="8" aria-label="考试分钟数">
            </div>
            <button type="button" class="dt-test-start" id="dt-test-start">开始考试</button>
        `;

        const floatingTimer = document.createElement('div');
        floatingTimer.className = 'dt-test-floating-timer';
        floatingTimer.id = 'dt-test-floating-timer';
        floatingTimer.textContent = formatTime(testState.remainingSeconds);

        document.body.appendChild(backdrop);
        document.body.appendChild(panel);
        document.body.appendChild(floatingTimer);
        document.body.classList.add('dt-test-awaiting-timer');
        setAnswerInputsDisabled(true);

        const display = document.getElementById('dt-test-display');
        const input = document.getElementById('dt-test-minutes');
        const presetButtons = Array.from(document.querySelectorAll('.dt-test-preset'));

        function setMinutes(minutes) {
            const safeMinutes = Math.max(1, Math.min(180, Number.parseInt(minutes, 10) || 8));
            testState.selectedMinutes = safeMinutes;
            testState.remainingSeconds = safeMinutes * 60;
            input.value = String(safeMinutes);
            presetButtons.forEach((button) => {
                button.classList.toggle('is-selected', Number.parseInt(button.dataset.dtMinutes, 10) === safeMinutes);
            });
            syncTimerDisplay();
        }

        presetButtons.forEach((button) => {
            button.addEventListener('click', () => {
                setMinutes(button.dataset.dtMinutes);
            });
        });

        input.addEventListener('input', () => {
            setMinutes(input.value);
        });

        document.getElementById('dt-test-start').addEventListener('click', () => {
            startTestTimer();
        });

        function syncTimerDisplay() {
            const text = formatTime(testState.remainingSeconds);
            if (display) {
                display.textContent = text;
            }
            floatingTimer.textContent = text;
        }

        window.ReadingDtYearSessionSyncTimer = syncTimerDisplay;
    }

    function syncInjectedTimerDisplay() {
        if (typeof window.ReadingDtYearSessionSyncTimer === 'function') {
            window.ReadingDtYearSessionSyncTimer();
        }
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
                subType: `${levelLabel.toLowerCase()}_${articleType}`,
                mode: 'year',
                scopeKey: normalizeScopeKey(examKey),
                sourcePage: window.location.pathname
            })
            : null;

        document.body.classList.remove('dt-test-awaiting-timer');
        document.getElementById('dt-test-backdrop')?.classList.remove('is-open');
        document.getElementById('dt-test-timer-panel')?.classList.remove('is-open');
        document.getElementById('dt-test-floating-timer')?.classList.add('is-visible');
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

    function startSharedReadingToolsRun(detail = {}) {
        if (!useSharedReadingTools || testState.started || testState.submitted) {
            return;
        }

        const seconds = Number.parseInt(detail.seconds, 10);
        const minutes = Number.parseInt(detail.minutes, 10);
        testState.started = true;
        testState.selectedMinutes = Number.isFinite(minutes) && minutes > 0
            ? minutes
            : Math.max(1, Math.round((Number.isFinite(seconds) ? seconds : testState.remainingSeconds) / 60));
        testState.remainingSeconds = Number.isFinite(seconds) && seconds > 0
            ? seconds
            : testState.selectedMinutes * 60;
        testState.elapsedSeconds = 0;
        testState.timedOut = false;
        testRunMeta = testServer && typeof testServer.startRun === 'function'
            ? testServer.startRun({
                module: 'reading',
                subType: `${levelLabel.toLowerCase()}_${articleType}`,
                mode: 'year',
                scopeKey: normalizeScopeKey(examKey),
                sourcePage: window.location.pathname
            })
            : null;
        setAnswerInputsDisabled(false);
    }

    function syncSharedReadingToolsResult() {
        if (!useSharedReadingTools || !sharedReadingTools || typeof sharedReadingTools.getResultTimerInfo !== 'function') {
            return;
        }

        const timerInfo = sharedReadingTools.getResultTimerInfo() || {};
        if (Number.isFinite(timerInfo.seconds)) {
            testState.elapsedSeconds = timerInfo.seconds;
        }
        testState.timedOut = Boolean(timerInfo.timedOut || testState.timedOut);
    }

    if (useSharedReadingTools) {
        setAnswerInputsDisabled(true);
        document.addEventListener('studyquest:reading-test-start', (event) => {
            startSharedReadingToolsRun(event.detail || {});
        });
        document.addEventListener('studyquest:reading-test-timeout', () => {
            if (testState.submitted) {
                return;
            }
            testState.timedOut = true;
            testState.unansweredAtSubmit = countUnansweredQuestions();
            ensureSelectionsForTimedSubmit();
            submitCurrentPage();
        });
    }

    function stopTestTimer() {
        if (testState.timerId) {
            window.clearInterval(testState.timerId);
            testState.timerId = null;
        }
    }

    function submitTimedOutTest() {
        if (testState.submitted) {
            return;
        }

        testState.timedOut = true;
        testState.unansweredAtSubmit = countUnansweredQuestions();
        ensureSelectionsForTimedSubmit();
        submitCurrentPage();
    }

    const originalSubmitAnswers = window.submitAnswers;
    if (typeof originalSubmitAnswers !== 'function') {
        return;
    }

    let hasRecorded = false;
    window.submitAnswers = function submitAnswersWithReadingSession(...args) {
        if (isTestMode && !readingSession.isReviewMode && !testState.started) {
            alert('请先点击「开始考试」再作答。');
            document.getElementById('dt-test-backdrop')?.classList.add('is-open');
            document.getElementById('dt-test-timer-panel')?.classList.add('is-open');
            return undefined;
        }

        if (isTestMode && testState.submitted) {
            return undefined;
        }

        const wasSubmitted = isSubmitted();
        const result = originalSubmitAnswers.apply(this, args);

        if (!hasRecorded && !wasSubmitted && isSubmitted()) {
            hasRecorded = true;
            testState.submitted = true;
            stopTestTimer();
            syncSharedReadingToolsResult();
            if (useSharedReadingTools && sharedReadingTools && typeof sharedReadingTools.completeTest === 'function') {
                sharedReadingTools.completeTest({ timedOut: testState.timedOut });
                syncSharedReadingToolsResult();
            }
            setAnswerInputsDisabled(true);
            const score = getPageScore(testState.timedOut ? testState.unansweredAtSubmit : undefined);
            recordPageResult(isPageAllCorrect(score));
            showTestResultOverlay(score);
        }

        return result;
    };

    if (!useSharedReadingTools) {
        injectTestController();
    }

    window.ReadingDtYearSession = {
        articleType,
        examKey: readingSession.examKey,
        isReviewMode: readingSession.isReviewMode,
        readingMode,
        isTestMode
    };
})();
