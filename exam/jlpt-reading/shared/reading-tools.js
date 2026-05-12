(function () {
    const topBar = document.querySelector('.top-bar');
    const actionContainer = document.querySelector('.top-actions');
    const hasShortPages = Boolean(document.querySelector('.page-container'));

    if (!topBar || !actionContainer || !hasShortPages) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const reviewMode = (params.get('mode') || '').toLowerCase();
    const readingMode = (params.get('readingMode') || 'study').toLowerCase();
    const hasCategoryPractice = Boolean(params.get('practiceMode'));
    const isReviewMode = reviewMode === 'review' || reviewMode === 'mistake';
    const isTestMode = !isReviewMode && !hasCategoryPractice && readingMode === 'test';
    const isStudyMode = !isReviewMode && !hasCategoryPractice && !isTestMode;
    const presets = [2, 3, 5];
    const timerParam = Number.parseInt(params.get('timer') || params.get('readingTimer') || '', 10);
    const initialMinutes = Number.isFinite(timerParam) ? Math.min(180, Math.max(1, timerParam)) : presets[0];

    const state = {
        timerMode: isTestMode ? 'countdown' : 'countup',
        timerStatus: 'idle',
        elapsedSeconds: 0,
        remainingSeconds: initialMinutes * 60,
        selectedMinutes: initialMinutes,
        timerId: null,
        isPanelOpen: false,
        displayHidden: false,
        testStarted: !isTestMode,
        testSubmitted: false,
        analysisUnlocked: !isTestMode,
        resultSeconds: 0,
        resultTimedOut: false
    };

    document.body.classList.add('reading-tools-enabled');
    document.body.classList.toggle('reading-mode-study', isStudyMode);
    document.body.classList.toggle('reading-mode-test', isTestMode);
    document.body.classList.toggle('reading-test-awaiting-timer', isTestMode && !state.testStarted);

    const timerButton = document.createElement('button');
    timerButton.type = 'button';
    timerButton.id = 'timer-panel-toggle-btn';
    timerButton.className = 'reading-tool-btn timer-tool-btn';
    timerButton.innerHTML = '<span>计时</span><span class="reading-tool-indicator" id="timer-tool-indicator" hidden>00:00</span>';
    actionContainer.appendChild(timerButton);

    const backdrop = document.createElement('div');
    backdrop.className = 'timer-panel-backdrop';

    const panel = document.createElement('div');
    panel.className = 'timer-panel';
    panel.id = 'reading-timer-panel';
    panel.innerHTML = `
        <div class="timer-panel-header">
            <div class="timer-panel-title">计时设定</div>
            <button type="button" class="timer-panel-close" id="timer-panel-close" aria-label="关闭">×</button>
        </div>
        <div class="timer-panel-section">
            <span class="timer-display-pill" id="reading-timer-display">00:00</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">模式</span>
            <button type="button" class="timer-panel-btn is-selected" data-timer-mode="countup">正计时</button>
            <button type="button" class="timer-panel-btn" data-timer-mode="countdown">倒计时</button>
        </div>
        <div class="timer-panel-section timer-countdown-section" id="timer-countdown-group">
            <span class="timer-panel-label">预设时长</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">控制</span>
            <button type="button" class="timer-panel-btn" id="timer-start-btn">开始</button>
            <button type="button" class="timer-panel-btn" id="timer-pause-btn">暂停</button>
            <button type="button" class="timer-panel-btn" id="timer-reset-btn">重置</button>
            <button type="button" class="timer-panel-btn" id="timer-hide-btn">隐藏时间</button>
        </div>
        <div class="timer-panel-status" id="timer-panel-status"></div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    const timerDisplay = document.getElementById('reading-timer-display');
    const timerIndicator = document.getElementById('timer-tool-indicator');
    const countdownGroup = document.getElementById('timer-countdown-group');
    const startButton = document.getElementById('timer-start-btn');
    const pauseButton = document.getElementById('timer-pause-btn');
    const resetButton = document.getElementById('timer-reset-btn');
    const hideButton = document.getElementById('timer-hide-btn');
    const closeButton = document.getElementById('timer-panel-close');
    const statusEl = document.getElementById('timer-panel-status');
    const modeButtons = Array.from(panel.querySelectorAll('[data-timer-mode]'));

    countdownGroup.insertAdjacentHTML(
        'beforeend',
        `${presets.map((minute) => `
            <button type="button" class="timer-panel-btn timer-preset-btn${minute === initialMinutes ? ' is-selected' : ''}" data-preset-minute="${minute}">
                ${minute}分
            </button>
        `).join('')}
        <label class="timer-custom-wrap">
            自定义
            <input type="number" min="1" max="180" step="1" class="timer-custom-input" id="timer-custom-input" value="${initialMinutes}">
            分
        </label>`
    );

    const presetButtons = Array.from(countdownGroup.querySelectorAll('[data-preset-minute]'));
    const customInput = document.getElementById('timer-custom-input');

    function formatClock(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function getCountdownSeconds() {
        const customValue = Number.parseInt(customInput.value, 10);
        const minutes = Number.isFinite(customValue) && customValue > 0 ? customValue : state.selectedMinutes;
        return Math.max(1, minutes) * 60;
    }

    function getUsedSeconds() {
        if (state.timerMode === 'countup') {
            return Math.max(0, state.elapsedSeconds);
        }
        return Math.max(0, getCountdownSeconds() - state.remainingSeconds);
    }

    function setStatus(message, tone) {
        statusEl.textContent = message || '';
        statusEl.classList.toggle('is-warning', tone === 'warning');
        statusEl.classList.toggle('is-danger', tone === 'danger');
    }

    function stopTimer() {
        if (state.timerId) {
            window.clearInterval(state.timerId);
            state.timerId = null;
        }
    }

    function updateDisplay() {
        const value = state.timerMode === 'countup'
            ? formatClock(state.elapsedSeconds)
            : formatClock(state.remainingSeconds);
        timerDisplay.textContent = value;
        timerIndicator.textContent = value;
    }

    function syncPresetSelection(value) {
        presetButtons.forEach((button) => {
            button.classList.toggle('is-selected', Number(button.dataset.presetMinute) === value);
        });
    }

    function syncModeUi() {
        panel.classList.toggle('countdown-mode', state.timerMode === 'countdown');
        modeButtons.forEach((button) => {
            const selected = button.dataset.timerMode === state.timerMode;
            button.classList.toggle('is-selected', selected);
            button.disabled = isTestMode && !selected;
        });
    }

    function syncControls() {
        const lockTestSettings = isTestMode && (state.testStarted || state.testSubmitted);
        presetButtons.forEach((button) => {
            button.disabled = lockTestSettings;
        });
        customInput.disabled = lockTestSettings;
        startButton.disabled = state.timerStatus === 'running' || state.testSubmitted || (isTestMode && state.testStarted);
        pauseButton.disabled = state.timerStatus !== 'running' || isTestMode || state.testSubmitted;
        resetButton.disabled = isTestMode || state.timerStatus === 'idle' || state.testSubmitted;
        startButton.textContent = isTestMode ? '开始考试' : (state.timerStatus === 'paused' ? '继续' : '开始');
        hideButton.classList.toggle('is-active', state.displayHidden);
    }

    function syncButton() {
        const showIndicator = !state.displayHidden && (state.timerStatus === 'running' || state.timerStatus === 'paused' || state.testSubmitted);
        timerIndicator.hidden = !showIndicator;
        timerButton.classList.toggle('is-open', state.isPanelOpen);
        timerButton.classList.toggle('is-running', state.timerStatus === 'running' || state.timerStatus === 'paused');
    }

    function syncTestGate() {
        document.body.classList.toggle('reading-test-awaiting-timer', isTestMode && !state.testStarted);
    }

    function positionPanel() {
        if (!state.isPanelOpen && !(isTestMode && !state.testStarted)) {
            return;
        }
        const mobile = window.matchMedia('(max-width: 768px)').matches;

        if (isTestMode && !state.testStarted) {
            panel.style.left = '50%';
            panel.style.right = 'auto';
            panel.style.top = '50%';
            panel.style.transform = 'translate(-50%, -50%)';
            panel.style.width = `${Math.min(320, window.innerWidth - 24)}px`;
            return;
        }

        panel.style.transform = '';
        if (mobile) {
            const topRect = topBar.getBoundingClientRect();
            panel.style.top = `${Math.round(topRect.bottom + 10)}px`;
            panel.style.left = '12px';
            panel.style.right = '12px';
            panel.style.width = 'auto';
            return;
        }

        const buttonRect = timerButton.getBoundingClientRect();
        const rightSpace = Math.max(12, window.innerWidth - buttonRect.right);
        panel.style.top = `${Math.round(buttonRect.bottom + 10)}px`;
        panel.style.left = 'auto';
        panel.style.right = `${rightSpace}px`;
        panel.style.width = `${Math.min(320, window.innerWidth - 24)}px`;
    }

    function openPanel() {
        state.isPanelOpen = true;
        backdrop.classList.add('is-open');
        panel.classList.add('is-open');
        positionPanel();
        syncButton();
    }

    function closePanel() {
        if (isTestMode && !state.testStarted) {
            return;
        }
        state.isPanelOpen = false;
        backdrop.classList.remove('is-open');
        panel.classList.remove('is-open');
        syncButton();
    }

    function startTimer() {
        if (state.testSubmitted || state.timerStatus === 'running') {
            return;
        }

        if (isTestMode) {
            state.timerMode = 'countdown';
            state.remainingSeconds = getCountdownSeconds();
            state.testStarted = true;
            document.dispatchEvent(new CustomEvent('studyquest:reading-test-start', {
                detail: { seconds: state.remainingSeconds }
            }));
            closePanel();
            syncTestGate();
        } else if (state.timerMode === 'countdown' && state.timerStatus !== 'paused') {
            state.remainingSeconds = getCountdownSeconds();
        }

        stopTimer();
        state.timerStatus = 'running';
        setStatus(isTestMode ? '考试开始，时间到会自动交卷。' : '正在记录本次用时。', isTestMode ? 'warning' : '');
        syncModeUi();
        syncControls();
        syncButton();
        updateDisplay();

        state.timerId = window.setInterval(() => {
            if (state.timerMode === 'countup') {
                state.elapsedSeconds += 1;
            } else {
                state.remainingSeconds -= 1;
                if (state.remainingSeconds <= 0) {
                    state.remainingSeconds = 0;
                    updateDisplay();
                    finishCountdown();
                    return;
                }
            }
            updateDisplay();
            syncButton();
        }, 1000);
    }

    function pauseTimer() {
        if (isTestMode || state.timerStatus !== 'running') {
            return;
        }
        stopTimer();
        state.timerStatus = 'paused';
        setStatus('计时已暂停。');
        syncControls();
        syncButton();
    }

    function resetTimer() {
        if (isTestMode) {
            return;
        }
        stopTimer();
        state.timerStatus = 'idle';
        state.elapsedSeconds = 0;
        state.remainingSeconds = getCountdownSeconds();
        setStatus('');
        updateDisplay();
        syncControls();
        syncButton();
    }

    function finishCountdown() {
        completeTest({ timedOut: true });
        document.dispatchEvent(new CustomEvent('studyquest:reading-test-timeout', {
            detail: { seconds: state.resultSeconds, timedOut: true }
        }));
    }

    function completeTest(options = {}) {
        if (!isTestMode || state.testSubmitted) {
            return;
        }
        stopTimer();
        state.resultSeconds = options.timedOut ? getCountdownSeconds() : getUsedSeconds();
        state.resultTimedOut = Boolean(options.timedOut);
        state.testSubmitted = true;
        state.timerStatus = 'finished';
        if (options.timedOut) {
            state.remainingSeconds = 0;
        }
        updateDisplay();
        setStatus(options.timedOut ? '时间结束，本轮已自动交卷。' : '已交卷。', options.timedOut ? 'danger' : '');
        closePanel();
        syncControls();
        syncButton();
    }

    timerButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (state.isPanelOpen) {
            closePanel();
        } else {
            openPanel();
        }
    });

    closeButton.addEventListener('click', closePanel);
    backdrop.addEventListener('click', closePanel);
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
    hideButton.addEventListener('click', () => {
        state.displayHidden = !state.displayHidden;
        syncButton();
        syncControls();
    });

    modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (isTestMode || state.timerStatus === 'running') {
                return;
            }
            state.timerMode = button.dataset.timerMode;
            state.timerStatus = 'idle';
            state.elapsedSeconds = 0;
            state.remainingSeconds = getCountdownSeconds();
            setStatus('');
            syncModeUi();
            updateDisplay();
            syncControls();
            syncButton();
        });
    });

    presetButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.disabled) {
                return;
            }
            state.selectedMinutes = Number.parseInt(button.dataset.presetMinute, 10);
            customInput.value = state.selectedMinutes;
            state.remainingSeconds = state.selectedMinutes * 60;
            syncPresetSelection(state.selectedMinutes);
            updateDisplay();
        });
    });

    customInput.addEventListener('input', () => {
        if (customInput.disabled) {
            return;
        }
        const value = Number.parseInt(customInput.value, 10);
        if (Number.isFinite(value) && value > 0) {
            state.selectedMinutes = value;
            state.remainingSeconds = value * 60;
            syncPresetSelection(value);
            updateDisplay();
        }
    });

    window.addEventListener('resize', positionPanel);
    window.addEventListener('scroll', positionPanel, { passive: true });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && state.isPanelOpen) {
            event.preventDefault();
            closePanel();
        }
    });

    window.StudyQuestReadingMode = {
        mode: isTestMode ? 'test' : (isStudyMode ? 'study' : 'default'),
        isStudyMode,
        isTestMode,
        isStarted() {
            return state.testStarted;
        },
        isSubmitted() {
            return state.testSubmitted;
        },
        isAnalysisUnlocked() {
            return state.analysisUnlocked;
        },
        unlockAnalysis() {
            state.analysisUnlocked = true;
            document.body.classList.add('reading-test-analysis-unlocked');
        },
        completeTest,
        getResultTimerInfo() {
            return {
                hasResult: state.testSubmitted || state.timerStatus !== 'idle',
                seconds: state.testSubmitted ? state.resultSeconds : getUsedSeconds(),
                timedOut: state.resultTimedOut
            };
        },
        openTimerPanel: openPanel,
        closeTimerPanel: closePanel
    };

    syncPresetSelection(state.selectedMinutes);
    syncModeUi();
    updateDisplay();
    syncControls();
    syncButton();

    if (isTestMode) {
        state.isPanelOpen = true;
        backdrop.classList.add('is-open');
        panel.classList.add('is-open');
        syncButton();
        positionPanel();
        setStatus('请先设定考试时长并开始，未开始前不会显示原文和题面。', 'warning');
        window.setTimeout(() => {
            try {
                customInput.focus({ preventScroll: true });
                customInput.select();
            } catch (error) {
                customInput.focus();
            }
        }, 80);
    }
})();
