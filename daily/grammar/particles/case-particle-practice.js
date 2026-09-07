(() => {
    const FALLBACK_BANK = {
        meta: { questionCount: 4 },
        questions: [
            {
                id: 'mock-mcq-1',
                type: 'mcq',
                sourceDay: 1,
                sentence: '学校＿行きます。',
                translation: '去学校。',
                blankCount: 1,
                options: ['に', 'で', 'を', 'が'],
                acceptedAnswers: ['に'],
                answerRationales: { 'に': '表示移动的目的地。' },
                focusLabel: '目的地',
                particles: ['に']
            },
            {
                id: 'mock-mcq-2',
                type: 'mcq',
                sourceDay: 1,
                sentence: '図書館＿本を読みます。',
                translation: '在图书馆读书。',
                blankCount: 1,
                options: ['に', 'で', 'を', 'は'],
                acceptedAnswers: ['で'],
                answerRationales: { 'で': '表示动作发生的场所。' },
                focusLabel: '场所',
                particles: ['で']
            },
            {
                id: 'mock-fill-1',
                type: 'fill',
                sourceDay: 1,
                sentence: 'ご飯＿食べます。',
                translation: '吃饭。',
                blankCount: 1,
                wordBank: ['が', 'を', 'に', 'で'],
                acceptedAnswers: ['を'],
                answerRationales: { 'を': '表示动作的直接对象。' },
                focusLabel: '对象',
                particles: ['を']
            },
            {
                id: 'mock-fill-2',
                type: 'fill',
                sourceDay: 1,
                sentence: '雨＿降っています。',
                translation: '正在下雨。',
                blankCount: 1,
                wordBank: ['が', 'を', 'は', 'で'],
                acceptedAnswers: ['が'],
                answerRationales: { 'が': '表示自然现象的主体。' },
                focusLabel: '主体',
                particles: ['が']
            }
        ]
    };

    const BANK = window.kakujyoQuestionBank || FALLBACK_BANK;
    const WRONG_BANK_KEY = 'kakujyo-wrong-bank-v1';
    const HISTORY_KEY = 'kikiCaseParticlePracticeHistoryV1';
    const QUESTIONS_PER_BASIC_SESSION = 20;
    const SCORE_PER_QUESTION = 5;
    const EMPTY_WRONG_BANK = { mcq: [], fill: [] };
    const questionMap = new Map((BANK.questions || []).map((question) => [question.id, question]));
    const $ = (id) => document.getElementById(id);

    let wrongBank = { ...EMPTY_WRONG_BANK };
    let practiceHistory = [];
    let currentQ = null;
    let selectedMcqAnswer = null;
    let noticeTimer = 0;
    let practicePetController = null;
    let petAssetsPromise = null;
    let session = createIdleSession();

    document.addEventListener('DOMContentLoaded', init);

    function createIdleSession() {
        return {
            type: 'mcq',
            source: 'basic',
            queue: [],
            total: 0,
            index: 0,
            correct: 0,
            startedAt: 0,
            locked: false,
            completed: false
        };
    }

    function init() {
        if (!BANK.questions || BANK.questions.length === 0) {
            showNotice('题库加载失败，请检查题库文件。');
            return;
        }

        wrongBank = loadWrongBank();
        practiceHistory = loadPracticeHistory();
        bindBackLink();
        bindEvents();
        renderWrongBank();
        renderHistory();
        switchView('dashboard');
        activateDashboardTab('basic');
        // The main-site companion is not mounted on the N2 learning pages.
        runSelfTests();
    }

    function bindBackLink() {
        if (window.bindStatefulBack) {
            window.bindStatefulBack({
                selector: '#back-link',
                fallback: 'kakujyo.html'
            });
        }
    }

    function bindEvents() {
        document.querySelectorAll('[data-dashboard-tab]').forEach((button) => {
            button.addEventListener('click', () => activateDashboardTab(button.dataset.dashboardTab));
        });

        document.querySelectorAll('[data-start-type][data-start-source]').forEach((button) => {
            button.addEventListener('click', () => {
                if (button.disabled) return;
                startPractice(button.dataset.startType, button.dataset.startSource);
            });
        });

        $('practice-exit-btn').addEventListener('click', exitPractice);
        $('mcq-check-btn').addEventListener('click', checkMcqAnswer);
        $('fill-check-btn').addEventListener('click', checkFillAnswer);
        $('practice-next-btn').addEventListener('click', moveToNextQuestion);
        $('result-again-btn').addEventListener('click', () => startPractice(session.type, session.source));
        $('result-history-btn').addEventListener('click', () => {
            switchView('dashboard');
            activateDashboardTab('history');
        });
        $('result-home-btn').addEventListener('click', () => {
            switchView('dashboard');
            activateDashboardTab('basic');
        });

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' || event.isComposing || event.keyCode === 229) return;
            if (!$('view-practice').classList.contains('active')) return;

            if (!$('practice-next-btn').classList.contains('hidden')) {
                event.preventDefault();
                moveToNextQuestion();
                return;
            }

            if (session.type === 'mcq' && !$('mcq-check-btn').disabled) {
                event.preventDefault();
                checkMcqAnswer();
            } else if (session.type === 'fill') {
                event.preventDefault();
                checkFillAnswer();
            }
        });
    }

    function switchView(viewName) {
        document.querySelectorAll('.practice-view').forEach((view) => {
            view.classList.toggle('active', view.id === `view-${viewName}`);
        });
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function activateDashboardTab(tabName) {
        document.querySelectorAll('[data-dashboard-tab]').forEach((button) => {
            const active = button.dataset.dashboardTab === tabName;
            button.classList.toggle('active', active);
            button.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        document.querySelectorAll('.dashboard-panel').forEach((panel) => {
            panel.classList.toggle('active', panel.id === `dashboard-${tabName}`);
        });

        if (tabName === 'wrong') renderWrongBank();
        if (tabName === 'history') renderHistory();
    }

    function isSingleChoiceQuestion(question) {
        return question.type === 'mcq'
            && Number(question.blankCount) === 1
            && Array.isArray(question.acceptedAnswers)
            && question.acceptedAnswers.length === 1;
    }

    function isEligibleQuestion(question, type) {
        return type === 'mcq' ? isSingleChoiceQuestion(question) : question.type === 'fill';
    }

    function getQuestionPool(type, source) {
        const wrongSet = new Set(wrongBank[type] || []);
        return BANK.questions.filter((question) => {
            if (!isEligibleQuestion(question, type)) return false;
            return source !== 'wrong' || wrongSet.has(question.id);
        });
    }

    function startPractice(type, source = 'basic') {
        const pool = getQuestionPool(type, source);
        if (pool.length === 0) {
            switchView('dashboard');
            activateDashboardTab(source === 'wrong' ? 'wrong' : 'basic');
            showNotice(source === 'wrong' ? '当前题型还没有错题。' : '当前题型没有可用题目。');
            return;
        }

        const limit = source === 'basic'
            ? QUESTIONS_PER_BASIC_SESSION
            : Math.min(QUESTIONS_PER_BASIC_SESSION, pool.length);
        const queue = shuffle(pool).slice(0, limit);

        session = {
            type,
            source,
            queue,
            total: queue.length,
            index: 0,
            correct: 0,
            startedAt: Date.now(),
            locked: false,
            completed: false
        };
        currentQ = null;
        switchView('practice');
        renderCurrentQuestion();
        reactPet('enter');
    }

    function renderCurrentQuestion() {
        currentQ = session.queue[session.index];
        selectedMcqAnswer = null;
        session.locked = false;

        $('practice-feedback').className = 'practice-feedback hidden';
        $('practice-feedback').innerHTML = '';
        $('practice-next-btn').classList.add('hidden');
        $('mcq-check-btn').classList.add('hidden');
        $('fill-check-btn').classList.add('hidden');
        $('practice-interactive-area').innerHTML = '';

        const typeLabel = session.type === 'mcq' ? '选择题' : '填空题';
        const sourceLabel = session.source === 'wrong' ? '错题复习' : '基础练习';
        $('practice-context').textContent = `${sourceLabel} · ${typeLabel}`;
        $('practice-instruction').textContent = session.type === 'mcq'
            ? '选择最合适的格助词'
            : '填写最合适的格助词';
        $('practice-live-score').textContent = String(session.correct * SCORE_PER_QUESTION);

        if (session.type === 'mcq') {
            renderMcqQuestion();
        } else {
            renderFillQuestion();
        }

        updateProgress(false);
    }

    function renderMcqQuestion() {
        $('practice-text').innerHTML = renderSentenceWithBlanks(
            currentQ.sentence,
            '<span class="question-blank" aria-hidden="true">＿</span>'
        );

        const container = $('practice-interactive-area');
        container.innerHTML = '<div id="mcq-options" class="practice-options-grid"></div>';
        const optionsContainer = $('mcq-options');

        shuffle(currentQ.options || []).forEach((option, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'option-btn';
            button.dataset.answer = option;
            button.innerHTML = `
                <span class="option-index">${index + 1}</span>
                <span class="option-label">${escapeHtml(option)}</span>
            `;
            button.addEventListener('click', () => {
                if (session.locked) return;
                selectedMcqAnswer = { answer: option, button };
                optionsContainer.querySelectorAll('.option-btn').forEach((item) => {
                    item.classList.toggle('selected', item === button);
                });
                $('mcq-check-btn').disabled = false;
            });
            optionsContainer.appendChild(button);
        });

        $('mcq-check-btn').disabled = true;
        $('mcq-check-btn').classList.remove('hidden');
    }

    function renderFillQuestion() {
        $('practice-text').innerHTML = renderSentenceWithBlanks(
            currentQ.sentence,
            '<input id="fill-input" class="blank-input" type="text" maxlength="4" autocomplete="off" aria-label="填写格助词">'
        );

        const wordBank = currentQ.wordBank || currentQ.options || [];
        const container = $('practice-interactive-area');
        container.innerHTML = `
            <div class="word-bank-panel">
                <p class="word-bank-label">WORD BANK</p>
                <div id="fill-word-bank-items" class="word-bank-grid"></div>
            </div>
        `;

        const input = $('fill-input');
        let isComposing = false;
        input.addEventListener('compositionstart', () => { isComposing = true; });
        input.addEventListener('compositionend', () => { isComposing = false; });
        input.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' || event.isComposing || isComposing || event.keyCode === 229) return;
            event.preventDefault();
            checkFillAnswer();
        });

        const wordBankContainer = $('fill-word-bank-items');
        wordBank.forEach((word) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'bank-chip';
            button.textContent = word;
            button.addEventListener('click', () => {
                if (session.locked) return;
                input.value = word;
                input.focus();
            });
            wordBankContainer.appendChild(button);
        });

        $('fill-check-btn').classList.remove('hidden');
        window.setTimeout(() => input.focus({ preventScroll: true }), 60);
    }

    function checkMcqAnswer() {
        if (!currentQ || !selectedMcqAnswer || session.locked) return;
        const isCorrect = currentQ.acceptedAnswers.includes(selectedMcqAnswer.answer);
        $('mcq-options').querySelectorAll('.option-btn').forEach((button) => {
            button.disabled = true;
            if (currentQ.acceptedAnswers.includes(button.dataset.answer)) {
                button.classList.add('correct');
            }
        });
        if (!isCorrect) selectedMcqAnswer.button.classList.add('wrong');
        completeCurrentAnswer(isCorrect, selectedMcqAnswer.answer);
    }

    function checkFillAnswer() {
        const input = $('fill-input');
        if (!currentQ || !input || session.locked) return;
        const answer = normalizeAnswer(input.value);
        if (!answer) {
            input.classList.remove('is-empty');
            void input.offsetWidth;
            input.classList.add('is-empty');
            return;
        }

        input.disabled = true;
        const isCorrect = currentQ.acceptedAnswers.includes(answer);
        input.style.color = isCorrect ? 'var(--practice-green-dark)' : 'var(--practice-red)';
        completeCurrentAnswer(isCorrect, answer);
    }

    function completeCurrentAnswer(isCorrect, userAnswer) {
        session.locked = true;
        if (isCorrect) {
            session.correct += 1;
            if (session.source === 'wrong') removeWrongQuestion(session.type, currentQ.id);
        } else {
            addWrongQuestion(session.type, currentQ.id);
        }

        $('practice-live-score').textContent = String(session.correct * SCORE_PER_QUESTION);
        $('mcq-check-btn').classList.add('hidden');
        $('fill-check-btn').classList.add('hidden');
        $('practice-next-btn').classList.remove('hidden');
        renderFeedback(isCorrect, userAnswer);
        updateProgress(true);
        reactPet(isCorrect ? 'answer_correct' : 'answer_wrong', {
            questionId: currentQ.id,
            questionLabel: currentQ.focusLabel
        });
    }

    function renderFeedback(isCorrect, userAnswer) {
        const feedback = $('practice-feedback');
        const answers = currentQ.acceptedAnswers || [];
        const rationales = currentQ.answerRationales || {};
        const rationale = answers
            .map((answer) => rationales[answer])
            .filter(Boolean)
            .join(' ');

        feedback.className = `practice-feedback${isCorrect ? '' : ' is-wrong'}`;
        feedback.innerHTML = `
            <p class="feedback-title">${isCorrect ? '回答正确' : '回答错误'}</p>
            <p class="feedback-answer">正确答案：<strong>${answers.map(escapeHtml).join(' / ')}</strong>${isCorrect ? '' : ` · 你的答案：${escapeHtml(userAnswer)}`}</p>
            ${currentQ.translation ? `<p class="feedback-translation">译文：${escapeHtml(currentQ.translation)}</p>` : ''}
            ${rationale ? `<p class="feedback-rationale">解析：${escapeHtml(rationale)}</p>` : ''}
        `;
    }

    function moveToNextQuestion() {
        if (!session.locked) return;
        session.index += 1;
        if (session.index >= session.total) {
            finishSession();
            return;
        }
        renderCurrentQuestion();
    }

    function updateProgress(answeredCurrent) {
        const completed = session.index + (answeredCurrent ? 1 : 0);
        const percent = session.total ? (completed / session.total) * 100 : 0;
        $('practice-progress').style.width = `${Math.max(0, Math.min(100, percent))}%`;
        $('practice-progress-count').textContent = `${Math.min(session.index + 1, session.total)} / ${session.total}`;
    }

    function finishSession() {
        if (session.completed) return;
        session.completed = true;

        const durationSeconds = Math.max(1, Math.round((Date.now() - session.startedAt) / 1000));
        const score = session.correct * SCORE_PER_QUESTION;
        const maxScore = session.total * SCORE_PER_QUESTION;
        const historyEntry = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            type: session.type,
            source: session.source,
            score,
            maxScore,
            correct: session.correct,
            total: session.total,
            durationSeconds,
            completedAt: new Date().toISOString()
        };

        practiceHistory = [historyEntry, ...practiceHistory].slice(0, 80);
        savePracticeHistory();
        renderWrongBank();
        renderHistory();

        $('result-score').textContent = String(score);
        $('result-max-score').textContent = `/ ${maxScore}`;
        $('result-correct').textContent = String(session.correct);
        $('result-wrong').textContent = String(session.total - session.correct);
        $('result-duration').textContent = formatDuration(durationSeconds);
        $('result-comment').textContent = getResultComment(score, maxScore);

        switchView('result');
        reactPet(session.correct === session.total ? 'perfect_clear' : 'clear', {
            totalQuestions: session.total,
            correctCount: session.correct,
            wrongCount: session.total - session.correct
        });
    }

    function exitPractice() {
        if (session.index > 0 || session.locked) {
            const shouldExit = window.confirm('退出后，本次未完成的练习不会计入历史。确定退出吗？');
            if (!shouldExit) return;
        }
        switchView('dashboard');
        activateDashboardTab('basic');
    }

    function renderWrongBank() {
        const mcqCount = (wrongBank.mcq || []).length;
        const fillCount = (wrongBank.fill || []).length;
        $('wrong-mcq-count').textContent = String(mcqCount);
        $('wrong-fill-count').textContent = String(fillCount);
        $('wrong-tab-count').textContent = String(mcqCount + fillCount);
        $('wrong-mcq-entry').disabled = mcqCount === 0;
        $('wrong-fill-entry').disabled = fillCount === 0;

        const previewIds = [...(wrongBank.mcq || []), ...(wrongBank.fill || [])].slice(-6).reverse();
        const preview = $('wrong-bank-preview');
        if (previewIds.length === 0) {
            preview.innerHTML = '<div class="practice-empty-state">还没有错题。完成基础练习后，答错的题目会出现在这里。</div>';
            return;
        }

        preview.innerHTML = `
            <div class="wrong-preview-heading"><span>最近归档</span><span>共 ${mcqCount + fillCount} 题</span></div>
            ${previewIds.map((id, index) => {
                const question = questionMap.get(id);
                if (!question) return '';
                return `
                    <div class="wrong-preview-row">
                        <span>${String(index + 1).padStart(2, '0')}</span>
                        <p>${escapeHtml(question.sentence.replace(/＿/g, '（　）'))}</p>
                        <small>${question.type === 'mcq' ? '选择题' : '填空题'}</small>
                    </div>
                `;
            }).join('')}
        `;
    }

    function renderHistory() {
        const summary = $('history-summary');
        const list = $('history-list');
        const points = $('history-points');

        if (practiceHistory.length === 0) {
            summary.innerHTML = `
                <div class="history-summary-item"><small>练习次数</small><strong>0</strong></div>
                <div class="history-summary-item"><small>最高得分</small><strong>—</strong></div>
                <div class="history-summary-item"><small>最近得分</small><strong>—</strong></div>
            `;
            points.innerHTML = '';
            list.innerHTML = '<div class="practice-empty-state">完成一次练习后，这里会记录你的得分和答题速度。</div>';
            return;
        }

        const normalizedScores = practiceHistory.map((entry) => Math.round((entry.score / entry.maxScore) * 100));
        const bestScore = Math.max(...normalizedScores);
        const latestScore = normalizedScores[0];
        summary.innerHTML = `
            <div class="history-summary-item"><small>练习次数</small><strong>${practiceHistory.length}</strong></div>
            <div class="history-summary-item"><small>最高得分</small><strong>${bestScore}</strong></div>
            <div class="history-summary-item"><small>最近得分</small><strong>${latestScore}</strong></div>
        `;

        points.innerHTML = practiceHistory.slice(0, 16).map((entry, index) => {
            const scoreRate = entry.maxScore ? entry.score / entry.maxScore : 0;
            const averageSeconds = entry.total ? entry.durationSeconds / entry.total : 50;
            const x = mapSpeedToPosition(averageSeconds);
            const y = 92 - clamp(scoreRate, 0, 1) * 84;
            const typeLabel = entry.type === 'mcq' ? '选择题' : '填空题';
            const sourceLabel = entry.source === 'wrong' ? '错题复习' : '基础练习';
            const label = `${sourceLabel} · ${typeLabel} · ${entry.score}/${entry.maxScore}分 · 平均${averageSeconds.toFixed(1)}秒/题`;
            return `<button class="history-point${index === 0 ? ' latest' : ''}" type="button" style="left:${x}%;top:${y}%" title="${escapeHtml(label)}" aria-label="${escapeHtml(label)}"></button>`;
        }).join('');

        list.innerHTML = practiceHistory.slice(0, 10).map((entry) => {
            const typeLabel = entry.type === 'mcq' ? '选择题' : '填空题';
            const sourceLabel = entry.source === 'wrong' ? '错题复习' : '基础练习';
            return `
                <div class="history-list-row">
                    <span class="history-list-copy">
                        <strong>${sourceLabel} · ${typeLabel}</strong>
                        <small>${formatHistoryDate(entry.completedAt)} · ${entry.total}题 · ${formatDuration(entry.durationSeconds)}</small>
                    </span>
                    <span class="history-list-score">${entry.score}<small> / ${entry.maxScore}</small></span>
                </div>
            `;
        }).join('');
    }

    function mapSpeedToPosition(averageSeconds) {
        const bounded = clamp(averageSeconds, 8, 50);
        return 8 + ((50 - bounded) / 42) * 84;
    }

    function getResultComment(score, maxScore) {
        const rate = maxScore ? score / maxScore : 0;
        if (rate >= 0.9) return '格助词关系的判断已经很稳定。';
        if (rate >= 0.75) return '基础掌握得不错，再复习几道错题会更稳。';
        if (rate >= 0.6) return '已经形成判断思路，建议从错题中确认容易混淆的关系。';
        return '先回到基础理解确认谓语与前项的关系，再完成一轮练习。';
    }

    function addWrongQuestion(type, questionId) {
        if (!(wrongBank[type] || []).includes(questionId)) {
            wrongBank[type] = [...(wrongBank[type] || []), questionId];
            saveWrongBank();
        }
    }

    function removeWrongQuestion(type, questionId) {
        wrongBank[type] = (wrongBank[type] || []).filter((id) => id !== questionId);
        saveWrongBank();
    }

    function loadWrongBank() {
        try {
            const parsed = JSON.parse(localStorage.getItem(WRONG_BANK_KEY) || '{}');
            return {
                mcq: (Array.isArray(parsed.mcq) ? parsed.mcq : []).filter((id) => {
                    const question = questionMap.get(id);
                    return question && isSingleChoiceQuestion(question);
                }),
                fill: (Array.isArray(parsed.fill) ? parsed.fill : []).filter((id) => {
                    const question = questionMap.get(id);
                    return question && question.type === 'fill';
                })
            };
        } catch (error) {
            return { ...EMPTY_WRONG_BANK };
        }
    }

    function saveWrongBank() {
        localStorage.setItem(WRONG_BANK_KEY, JSON.stringify(wrongBank));
    }

    function loadPracticeHistory() {
        try {
            const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
            if (!Array.isArray(parsed)) return [];
            return parsed.filter((entry) => (
                entry
                && (entry.type === 'mcq' || entry.type === 'fill')
                && Number.isFinite(Number(entry.score))
                && Number.isFinite(Number(entry.maxScore))
                && entry.completedAt
            )).slice(0, 80);
        } catch (error) {
            return [];
        }
    }

    function savePracticeHistory() {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(practiceHistory));
    }

    function renderSentenceWithBlanks(sentence, replacement) {
        return escapeHtml(sentence).replace(/＿/g, replacement);
    }

    function formatDuration(seconds) {
        const value = Math.max(0, Number(seconds) || 0);
        const minutes = Math.floor(value / 60);
        const rest = Math.round(value % 60);
        return `${minutes}:${String(rest).padStart(2, '0')}`;
    }

    function formatHistoryDate(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat('zh-CN', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(date);
    }

    function normalizeAnswer(value) {
        return String(value || '').trim();
    }

    function shuffle(list) {
        const copy = [...list];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
        }
        return copy;
    }

    function clamp(value, minimum, maximum) {
        return Math.min(maximum, Math.max(minimum, value));
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function showNotice(message) {
        const notice = $('practice-notice');
        window.clearTimeout(noticeTimer);
        notice.textContent = message;
        notice.classList.remove('hidden');
        noticeTimer = window.setTimeout(() => notice.classList.add('hidden'), 2600);
    }

    function ensurePetAssets() {
        if (window.HomePetSystem) return Promise.resolve(window.HomePetSystem);
        if (petAssetsPromise) return petAssetsPromise;

        petAssetsPromise = new Promise((resolve, reject) => {
            const cssHref = '../../../shared/home-pet.css';
            const jsSrc = '../../../shared/home-pet.js';
            if (!document.querySelector(`link[href="${cssHref}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssHref;
                document.head.appendChild(link);
            }

            const existingScript = document.querySelector(`script[src="${jsSrc}"]`);
            if (existingScript) {
                if (window.HomePetSystem) resolve(window.HomePetSystem);
                else {
                    existingScript.addEventListener('load', () => resolve(window.HomePetSystem), { once: true });
                    existingScript.addEventListener('error', reject, { once: true });
                }
                return;
            }

            const script = document.createElement('script');
            script.src = jsSrc;
            script.onload = () => resolve(window.HomePetSystem);
            script.onerror = reject;
            document.body.appendChild(script);
        });

        return petAssetsPromise;
    }

    function ensurePetMounted() {
        return ensurePetAssets()
            .then((petSystem) => {
                if (!petSystem || practicePetController) return practicePetController;
                practicePetController = petSystem.initNonHomeSurface({
                    mountSelector: '#home-pet-root',
                    pageShellSelector: '.practice-main, body',
                    surfaceType: 'practice',
                    activeSection: 'daily',
                    practiceDetail: { module: 'grammar', subType: 'kakujyo' }
                });
                return practicePetController;
            })
            .catch((error) => {
                console.warn('Kakujyo pet mount failed:', error);
                return null;
            });
    }

    function reactPet(phase, extra = {}) {
        if (!practicePetController || typeof practicePetController.reactToPractice !== 'function') return;
        practicePetController.reactToPractice({
            module: 'grammar',
            subType: 'kakujyo',
            phase,
            mode: session.source,
            questionIndex: session.index,
            questionType: session.type,
            ...extra
        });
    }

    function runSelfTests() {
        if (!window.kakujyoQuestionBank) return;
        const questions = BANK.questions || [];
        console.assert(questions.length === 198, '题库总数必须是 198');
        console.assert(questions.filter(isSingleChoiceQuestion).length === 118, '选择题必须是 118');
        console.assert(questions.filter((question) => question.type === 'fill').length === 80, '填空题必须是 80');
        console.assert(new Set(questions.map((question) => question.id)).size === questions.length, '题目 id 必须唯一');
        console.assert(questions.filter(isSingleChoiceQuestion).length >= QUESTIONS_PER_BASIC_SESSION, '选择题必须足够抽取20题');
        console.assert(questions.filter((question) => question.type === 'fill').length >= QUESTIONS_PER_BASIC_SESSION, '填空题必须足够抽取20题');
    }
})();
