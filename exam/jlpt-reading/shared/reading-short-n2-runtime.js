(function () {
    const params = new URLSearchParams(window.location.search);
    const reviewMode = (params.get('mode') || '').toLowerCase();
    const readingMode = (params.get('readingMode') || 'study').toLowerCase();
    const isReviewMode = reviewMode === 'review' || reviewMode === 'mistake';
    const hasCategoryPractice = Boolean(params.get('practiceMode'));
    const isTestMode = !isReviewMode && !hasCategoryPractice && readingMode === 'test';
    const isStudyLikeMode = !isTestMode;

    const articleLevel = typeof ARTICLE_LEVEL !== 'undefined' ? ARTICLE_LEVEL : 'N2';
    const articleType = typeof ARTICLE_TYPE !== 'undefined' ? ARTICLE_TYPE : 'short';
    const articleYear = typeof ARTICLE_YEAR !== 'undefined' ? ARTICLE_YEAR : '';
    const articleId = typeof ARTICLE_ID !== 'undefined' ? ARTICLE_ID : `n2-${articleYear}-short`;
    const total = typeof totalPages !== 'undefined'
        ? totalPages
        : document.querySelectorAll('.page-container').length;
    const category = typeof categorySession !== 'undefined' ? categorySession : null;
    const originalSubmitAnswer = typeof window.submitAnswer === 'function' ? window.submitAnswer : null;
    const originalSwitchPage = typeof window.switchPage === 'function' ? window.switchPage : null;
    const originalToggleTranslation = typeof window.toggleTranslation === 'function' ? window.toggleTranslation : null;

    if (!originalSubmitAnswer || !originalSwitchPage || !window.ReadingYearSystem || !total) {
        return;
    }

    const readingSession = window.ReadingYearSystem.createReadingYearSession({
        level: articleLevel,
        type: articleType,
        examKey: params.get('examKey') || articleYear,
        totalPages: total,
        indexPath: '../../index.html',
        urlParams: params
    });
    const isCategoryMode = Boolean(category && category.isCategoryMode);
    const testSelectedState = {};
    const testGradedState = {};
    const resultState = {
        submitted: false,
        correctCount: 0,
        incorrectCount: 0,
        unansweredCount: 0,
        accuracy: 0
    };

    function getCurrentPageNumber() {
        return Number(window.currentPage) || 1;
    }

    function setCurrentPageNumber(page) {
        window.currentPage = page;
        try {
            currentPage = page;
        } catch (error) {
            // Some browsers keep top-level let/const bindings read-only from later scripts.
        }
    }

    function getPage(page) {
        return document.getElementById(`page-${page}`);
    }

    function getAnswerData(page) {
        if (typeof answersData === 'undefined') {
            return null;
        }
        return answersData[page] || null;
    }

    function getCorrectValue(page) {
        const data = getAnswerData(page);
        return data ? String(data.correct) : '';
    }

    function getSelectedInput(page) {
        const container = getPage(page);
        return container ? container.querySelector(`input[name="q${page}"]:checked`) : null;
    }

    function getIndexUrl() {
        if (readingSession && typeof readingSession.buildIndexUrl === 'function') {
            return readingSession.buildIndexUrl();
        }
        return `../../index.html?level=${encodeURIComponent(articleLevel)}&type=${encodeURIComponent(articleType)}&browse=year`;
    }

    function buildRetryUrl() {
        const retryParams = new URLSearchParams();
        retryParams.set('page', '1');
        retryParams.set('examKey', articleYear);
        retryParams.set('readingMode', 'test');
        return `${window.location.pathname}?${retryParams.toString()}`;
    }

    function formatYearLabel() {
        const match = String(articleYear).match(/^(\d{4})[.-](\d{1,2})$/);
        if (!match) {
            return articleYear;
        }
        return `${match[1]}年${Number.parseInt(match[2], 10)}月`;
    }

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function displayPage(page) {
        originalSwitchPage(page);
        setCurrentPageNumber(page);
        if (isReviewMode) {
            syncReviewNavigation();
        }
        if (isTestMode) {
            syncTestNavigation();
        }
    }

    function switchPageRuntime(page) {
        if (isReviewMode) {
            const current = getCurrentPageNumber();
            const direction = page > current ? 1 : -1;
            const target = readingSession.getMoveTarget(current, direction);
            if (target && Number.isInteger(target.page)) {
                displayPage(target.page);
            } else if (target && target.done) {
                window.location.href = getIndexUrl();
            }
            return;
        }

        displayPage(page);
    }

    function syncReviewNavigation() {
        if (!isReviewMode) {
            return;
        }
        const page = getCurrentPageNumber();
        const activePage = getPage(page);
        if (!activePage) {
            return;
        }
        const buttons = Array.from(activePage.querySelectorAll('.action-bar .nav-btn'));
        const navState = readingSession.getNavState(page);
        const prevButton = buttons[0];
        const nextButton = buttons[1];

        if (prevButton) {
            prevButton.disabled = navState.prevDisabled;
            prevButton.style.visibility = navState.prevDisabled ? 'hidden' : '';
        }
        if (nextButton) {
            nextButton.disabled = navState.nextDisabled;
            nextButton.style.visibility = navState.nextDisabled ? 'hidden' : '';
        }
    }

    function syncTestNavigation() {
        if (!isTestMode) {
            return;
        }
        document.querySelectorAll('.submit-btn').forEach((button) => {
            button.disabled = resultState.submitted;
            button.textContent = resultState.submitted ? '已交卷' : '交卷';
            button.style.background = '';
            button.style.color = '';
        });
    }

    function recordYearAnswer(page, isCorrect) {
        if (!readingSession || isCategoryMode) {
            return;
        }
        readingSession.recordAnswer(page, isCorrect);
    }

    function notifyFeedback(page, isCorrect, mode) {
        if (!window.N2PracticeFeedback) {
            return;
        }
        window.N2PracticeFeedback.trackAnswer({
            module: 'jlpt-reading',
            subType: articleType,
            mode,
            isCorrect,
            questionId: `${articleId}-q${page}`,
            questionIndex: page,
            questionCount: total
        });
    }

    function revealPageReview(page, selectedValue) {
        const container = getPage(page);
        const data = getAnswerData(page);
        if (!container || !data) {
            return;
        }

        const correctValue = String(data.correct);
        const userValue = selectedValue === null || selectedValue === undefined ? '' : String(selectedValue);
        const isCorrect = userValue && userValue === correctValue;

        container.querySelectorAll('.option-input').forEach((input) => {
            input.disabled = true;
            const label = input.closest('.option-label');
            if (!label) {
                return;
            }
            const optValue = String(input.value);
            const radio = label.querySelector('.custom-radio');
            const detail = label.querySelector('.option-detail-analysis');

            label.classList.add('disabled');
            label.classList.toggle('is-correct', optValue === correctValue);
            label.classList.toggle('is-wrong', Boolean(userValue) && optValue === userValue && userValue !== correctValue);
            if (radio && optValue === correctValue) {
                radio.innerHTML = '✔';
            } else if (radio && optValue === userValue && userValue !== correctValue) {
                radio.innerHTML = '✖';
            }
            if (detail && data.optAnalysis && data.optAnalysis[optValue]) {
                detail.innerText = data.optAnalysis[optValue];
            }
        });

        const optionsGroup = container.querySelector('.options-group');
        const articleContent = container.querySelector('.article-content');
        const questionCard = container.querySelector('.question-card');
        if (optionsGroup) {
            optionsGroup.classList.add('reviewed');
        }
        if (articleContent) {
            articleContent.classList.add('reviewed');
        }
        if (questionCard) {
            questionCard.classList.add('reviewed');
        }

        const expBox = container.querySelector('.explanation-box');
        if (expBox) {
            const keyText = expBox.querySelector('.ks-text');
            const expContent = expBox.querySelector('.explanation-content');
            if (keyText) {
                keyText.innerText = data.keySentence || '';
            }
            if (expContent) {
                expContent.innerText = data.explanation || '';
            }
            expBox.classList.add('show');
        }

        container.querySelectorAll('.ks-target').forEach((span) => {
            span.classList.add('revealed');
        });

        const keySentenceBox = container.querySelector('.key-sentence-box');
        if (keySentenceBox) {
            keySentenceBox.classList.add('clickable');
            keySentenceBox.onclick = function () {
                const targets = Array.from(container.querySelectorAll('.ks-target'));
                if (!targets.length) {
                    return;
                }
                targets[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                targets.forEach((span) => {
                    span.classList.remove('flash-focus');
                    void span.offsetWidth;
                    span.classList.add('flash-focus');
                });
            };
        }

        const submitButton = container.querySelector('.submit-btn');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = isCorrect ? '正解！素晴らしい！' : (userValue ? '残念！解説をチェックしよう' : '未回答');
            submitButton.style.background = isCorrect ? 'var(--marker-mint)' : 'var(--marker-peach)';
            submitButton.style.color = isCorrect ? 'var(--green-pencil)' : 'var(--red-pencil)';
        }
    }

    function submitStudyAnswer(page) {
        const container = getPage(page);
        if (!container) {
            return;
        }
        originalSubmitAnswer(page);
        const selected = getSelectedInput(page);
        const reviewed = Boolean(container.querySelector('.options-group.reviewed'));
        if (!selected || !reviewed) {
            return;
        }
        const isCorrect = String(selected.value) === getCorrectValue(page);
        recordYearAnswer(page, isCorrect);
        syncReviewNavigation();
    }

    function submitTest() {
        if (!isTestMode || resultState.submitted) {
            return;
        }

        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        for (let page = 1; page <= total; page += 1) {
            const selected = getSelectedInput(page);
            const selectedValue = selected ? String(selected.value) : '';
            const correctValue = getCorrectValue(page);
            const hasAnswer = Boolean(selectedValue);
            const isCorrect = hasAnswer && selectedValue === correctValue;

            testGradedState[page] = { selectedValue, correctValue, hasAnswer, isCorrect };
            revealPageReview(page, hasAnswer ? selectedValue : null);
            recordYearAnswer(page, isCorrect);
            notifyFeedback(page, isCorrect, 'test');

            if (!hasAnswer) {
                unansweredCount += 1;
            } else if (isCorrect) {
                correctCount += 1;
            } else {
                incorrectCount += 1;
            }
        }

        resultState.submitted = true;
        resultState.correctCount = correctCount;
        resultState.incorrectCount = incorrectCount;
        resultState.unansweredCount = unansweredCount;
        resultState.accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

        if (window.StudyQuestReadingMode && typeof window.StudyQuestReadingMode.completeTest === 'function') {
            window.StudyQuestReadingMode.completeTest({ timedOut: false });
        }
        showResultOverlay();
        syncTestNavigation();
    }

    function showResultOverlay() {
        if (document.getElementById('n2-reading-test-result')) {
            return;
        }
        const timerInfo = window.StudyQuestReadingMode && typeof window.StudyQuestReadingMode.getResultTimerInfo === 'function'
            ? window.StudyQuestReadingMode.getResultTimerInfo()
            : { seconds: 0, timedOut: false };
        const overlay = document.createElement('div');
        overlay.id = 'n2-reading-test-result';
        overlay.className = 'reading-test-result-overlay';
        overlay.innerHTML = `
            <section class="reading-test-result-card" role="dialog" aria-modal="true" aria-labelledby="reading-test-result-title">
                <h2 class="reading-test-result-title" id="reading-test-result-title">${resultState.accuracy === 100 ? '満点通過' : '测试完成'}</h2>
                <p class="reading-test-result-desc">
                    你完成了 <strong>${articleLevel} ${formatYearLabel()}</strong> 短文阅读测试。${timerInfo.timedOut ? '<br>时间结束，本轮已自动交卷。' : ''}
                </p>
                <div class="reading-test-result-grid">
                    <div class="reading-test-result-stat">
                        <div class="reading-test-result-value">${resultState.correctCount}</div>
                        <div class="reading-test-result-label">正确</div>
                    </div>
                    <div class="reading-test-result-stat">
                        <div class="reading-test-result-value">${resultState.incorrectCount}</div>
                        <div class="reading-test-result-label">错误</div>
                    </div>
                    <div class="reading-test-result-stat">
                        <div class="reading-test-result-value">${resultState.unansweredCount}</div>
                        <div class="reading-test-result-label">未答</div>
                    </div>
                </div>
                <div class="reading-test-result-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
                    <div class="reading-test-result-stat">
                        <div class="reading-test-result-value">${resultState.accuracy}%</div>
                        <div class="reading-test-result-label">正确率</div>
                    </div>
                    <div class="reading-test-result-stat">
                        <div class="reading-test-result-value">${formatTime(timerInfo.seconds || 0)}</div>
                        <div class="reading-test-result-label">本次用时</div>
                    </div>
                </div>
                <div class="reading-test-result-actions">
                    <button type="button" data-result-action="analysis">查看解析</button>
                    <button type="button" data-result-action="retry">再来一轮</button>
                    <button type="button" data-result-action="index">返回阅读</button>
                </div>
            </section>
        `;
        document.body.appendChild(overlay);
    }

    function closeResultOverlay() {
        const overlay = document.getElementById('n2-reading-test-result');
        if (overlay) {
            overlay.remove();
        }
    }

    function openAnalysisFromResult() {
        if (window.StudyQuestReadingMode && typeof window.StudyQuestReadingMode.unlockAnalysis === 'function') {
            window.StudyQuestReadingMode.unlockAnalysis();
        }
        closeResultOverlay();
        displayPage(1);
    }

    function handleResultAction(event) {
        const button = event.target.closest('[data-result-action]');
        if (!button) {
            return;
        }
        const action = button.dataset.resultAction;
        if (action === 'analysis') {
            openAnalysisFromResult();
        } else if (action === 'retry') {
            window.location.href = buildRetryUrl();
        } else if (action === 'index') {
            window.location.href = getIndexUrl();
        }
    }

    function syncBackLink() {
        const backLink = document.getElementById('back-to-reading-index');
        if (!backLink || isCategoryMode) {
            return;
        }
        backLink.href = getIndexUrl();
    }

    function initReviewMode() {
        if (!isReviewMode) {
            return;
        }
        const reviewPages = readingSession.getReviewPages();
        if (!reviewPages.length) {
            window.alert('当前年份还没有错题记录，先去正常练习一轮吧。');
            readingSession.redirectToIndex();
            return;
        }
        const requestedPage = Number.parseInt(params.get('page'), 10);
        const initialPage = readingSession.getInitialPage(requestedPage);
        displayPage(initialPage);
    }

    function initTestMode() {
        if (!isTestMode) {
            return;
        }
        document.querySelectorAll('.option-input').forEach((input) => {
            input.disabled = false;
        });
        syncTestNavigation();
    }

    document.addEventListener('click', handleResultAction);
    document.addEventListener('studyquest:reading-test-timeout', () => {
        if (!resultState.submitted) {
            submitTest();
        }
    });

    window.submitAnswer = function submitAnswerRuntime(page) {
        if (isTestMode) {
            submitTest();
            return;
        }
        submitStudyAnswer(page);
    };

    window.switchPage = switchPageRuntime;
    window.openReadingAnalysisFromResult = openAnalysisFromResult;
    if (originalToggleTranslation) {
        window.toggleTranslation = originalToggleTranslation;
    }

    try {
        submitAnswer = window.submitAnswer;
        switchPage = window.switchPage;
        openReadingAnalysisFromResult = window.openReadingAnalysisFromResult;
    } catch (error) {
        // Function declarations are global properties in these pages; this is only a safety net.
    }

    syncBackLink();
    initReviewMode();
    initTestMode();
})();
