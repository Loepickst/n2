(function () {
    'use strict';

    const CATEGORY_ID = 'k02-compound-case-particles';
    const LEVEL_KEY = 'compound_particle_practice_level';
    const WRONG_RECORDS_KEY = 'compound_particle_wrong_records_v1';
    const STATUS_PREFIX = 'compound_particle_status_';

    const QUESTION_GRAMMAR_MAP = {
        q_n2_c_201007_01: ['ni_oujite'],
        q_n2_c_201007_03: ['ni_watatte'],
        q_n2_c_201112_05: ['ni_kotaete'],
        q_n2_c_201112_07: ['ni_yotte'],
        q_n2_c_201207_02: ['wo_towazu'],
        q_n2_c_201212_06: ['ni_kakawarazu'],
        q_n2_c_201212_08: ['ni_yotte'],
        q_n2_c_201312_02: ['ni_oite'],
        q_n2_c_201407_02: ['ni_kakete_wa'],
        q_n2_c_201412_01: ['ni_watatte'],
        q_n2_c_201507_01: ['ni_yotte'],
        q_n2_c_201512_03: ['ni_kakete_wa'],
        q_n2_c_201607_01: [],
        q_n2_c_201607_09: ['ni_taishite'],
        q_n2_c_201612_03: ['ni_oite'],
        q_n2_c_201712_01: ['wo_tsuujite'],
        q_n2_c_201807_01: ['ni_shite_wa'],
        q_n2_c_201812_04: ['ni_shitagatte'],
        q_n2_c_201907_03: ['ni_atatte'],
        q_n2_c_201907_08: ['toshite'],
        q_n2_c_201912_04: ['ni_sonaete'],
        q_n2_c_201912_08: ['ni_yotte'],
        q_n3_c_201007_10: ['ni_tsuite'],
        q_n3_c_201112_01: ['toshite'],
        q_n3_c_201112_05: ['ni_kurabete'],
        q_n3_c_201207_01: ['ni_totte'],
        q_n3_c_201212_01: ['wo_ni_toshite_group'],
        q_n3_c_201307_03: ['ni_kurabete'],
        q_n3_c_201312_04: ['ni_totte'],
        q_n3_c_201407_01: ['ni_yotte'],
        q_n3_c_201412_02: ['ni_kurabete'],
        q_n3_c_201507_03: ['ni_yotte'],
        q_n3_c_201512_01: ['ni_kuwaete'],
        q_n3_c_201607_02: ['ni_taishite'],
        q_n3_c_201612_01: ['toshite'],
        q_n3_c_201707_02: ['ni_shitagatte'],
        q_n3_c_201807_02: ['ni_taishite'],
        q_n3_c_201812_04: ['ni_kurabete'],
        q_n3_c_201907_02: ['wo_ni_toshite_group'],
        q_n3_c_201907_04: ['ni_kuwaete'],
        q_n3_c_202107_03: ['ni_totte'],
        q_n3_c_202112_04: ['ni_oite'],
        q_n3_c_202207_04: ['ni_kuwaete'],
        q_n3_c_202212_02: ['ni_oite'],
        q_n3_c_202307_01: ['wo_ni_toshite_group'],
        q_n3_c_202307_02: ['ni_shitagatte'],
        q_n3_c_202312_03: ['ni_yotte']
    };

    const GRAMMAR_TITLES = {
        ni_oujite: '〜に応じて',
        ni_watatte: '〜にわたって',
        ni_kotaete: '〜にこたえて',
        ni_yotte: '〜によって',
        wo_towazu: '〜を問わず',
        ni_kakawarazu: '〜にかかわらず',
        ni_oite: '〜において',
        ni_kakete_wa: '〜にかけては',
        ni_taishite: '〜に対して',
        wo_tsuujite: '〜を通じて',
        ni_shite_wa: '〜にしては',
        ni_shitagatte: '〜にしたがって',
        ni_atatte: '〜にあたって',
        toshite: '〜として',
        ni_sonaete: '〜に備えて',
        ni_tsuite: '〜について',
        ni_kurabete: '〜にくらべて',
        ni_totte: '〜にとって',
        wo_ni_toshite_group: '〜を〜に（として）',
        ni_kuwaete: '〜にくわえて'
    };

    const state = {
        level: normalizeLevel(localStorage.getItem(LEVEL_KEY) || 'N2'),
        view: 'practice',
        source: 'category',
        wrongTab: 'active',
        queue: [],
        index: 0,
        selectedId: null,
        answered: false,
        correct: 0,
        incorrect: 0
    };

    function normalizeLevel(level) {
        return ['N2', 'N3', 'ALL'].includes(level) ? level : 'N2';
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatPlainText(value) {
        return escapeHtml(value).replace(/\n/g, '<br>');
    }

    function getQuestionDatabase() {
        return Array.isArray(window.grammarChoiceQuestionDatabase)
            ? window.grammarChoiceQuestionDatabase
            : [];
    }

    function getQuestionById(questionId) {
        return getQuestionDatabase().find(question => question.id === questionId) || null;
    }

    function getGrammarIds(question) {
        return Array.isArray(QUESTION_GRAMMAR_MAP[question?.id])
            ? QUESTION_GRAMMAR_MAP[question.id].filter(Boolean)
            : [];
    }

    function getPool(level) {
        const levels = level === 'ALL' ? ['N2', 'N3'] : [level];
        const catalog = window.grammarChoiceCategoryCatalog || {};
        const questionById = new Map(getQuestionDatabase().map(question => [question.id, question]));
        const seen = new Set();
        const questions = [];

        levels.forEach(sourceLevel => {
            const categories = Array.isArray(catalog[sourceLevel]) ? catalog[sourceLevel] : [];
            const category = categories.find(item => item?.id === CATEGORY_ID);
            const questionIds = Array.isArray(category?.questionIds) ? category.questionIds : [];
            questionIds.forEach(questionId => {
                const question = questionById.get(questionId);
                if (!question || question.level !== sourceLevel || seen.has(question.id)) return;
                seen.add(question.id);
                questions.push(question);
            });
        });

        return questions;
    }

    function shuffle(questions) {
        const result = [...questions];
        for (let index = result.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
        }
        return result;
    }

    function getWrongRecords() {
        try {
            const parsed = JSON.parse(localStorage.getItem(WRONG_RECORDS_KEY) || '{}');
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
        } catch (error) {
            return {};
        }
    }

    function getWrongRecordList(status = null) {
        const records = Object.values(getWrongRecords());
        const filtered = status ? records.filter(record => record.status === status) : records;
        return filtered.sort((a, b) => String(b.lastWrongAt || b.lastCorrectAt || '').localeCompare(String(a.lastWrongAt || a.lastCorrectAt || '')));
    }

    function saveWrongRecords(records) {
        localStorage.setItem(WRONG_RECORDS_KEY, JSON.stringify(records));
        updateWrongCount();
    }

    function recordResult(question, selectedOptionId, isCorrect) {
        if (!question?.id) return;
        const records = getWrongRecords();
        const existing = records[question.id] || {};
        const now = new Date().toISOString();
        const grammarIds = getGrammarIds(question);

        if (isCorrect) {
            if (existing.status === 'active') {
                records[question.id] = {
                    ...existing,
                    questionId: question.id,
                    level: question.level,
                    year: question.year,
                    label: question.label,
                    selectedOptionId,
                    correctOptionId: question.correctOptionId,
                    grammarIds,
                    status: 'resolved',
                    lastCorrectAt: now
                };
                saveWrongRecords(records);
            }
            return;
        }

        records[question.id] = {
            ...existing,
            questionId: question.id,
            level: question.level,
            year: question.year,
            label: question.label,
            selectedOptionId,
            correctOptionId: question.correctOptionId,
            grammarIds,
            wrongCount: (Number(existing.wrongCount) || 0) + 1,
            status: 'active',
            lastWrongAt: now,
            lastCorrectAt: existing.lastCorrectAt || null
        };

        grammarIds.forEach(grammarId => {
            localStorage.setItem(STATUS_PREFIX + grammarId, 'confused');
        });
        saveWrongRecords(records);
    }

    function getActiveLevels() {
        if (state.level === 'ALL') return new Set(['N2', 'N3']);
        return new Set([state.level]);
    }

    function levelFromSet(levelSet) {
        if (levelSet.has('N2') && levelSet.has('N3')) return 'ALL';
        return levelSet.has('N3') ? 'N3' : 'N2';
    }

    function renderLevelButtons() {
        const activeLevels = getActiveLevels();
        document.querySelectorAll('[data-practice-level]').forEach(button => {
            const active = activeLevels.has(button.dataset.practiceLevel);
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function updateWrongCount() {
        const target = document.getElementById('compoundWrongActiveCount');
        if (target) target.textContent = getWrongRecordList('active').length;
    }

    function updateStatus() {
        const target = document.getElementById('compoundPracticeStatus');
        if (!target) return;
        if (state.view === 'wrong') {
            target.textContent = `错题 · ${getWrongRecordList('active').length}`;
            return;
        }
        const levelLabel = state.level === 'ALL' ? 'N2 / N3' : state.level;
        const current = Math.min(state.index + 1, state.queue.length);
        target.textContent = `${levelLabel} · ${current} / ${state.queue.length}`;
    }

    function resetPractice(level = state.level) {
        state.level = normalizeLevel(level);
        state.view = 'practice';
        state.source = 'category';
        state.queue = shuffle(getPool(state.level));
        state.index = 0;
        state.selectedId = null;
        state.answered = false;
        state.correct = 0;
        state.incorrect = 0;
        localStorage.setItem(LEVEL_KEY, state.level);
        render();
    }

    function startWrongPractice() {
        const questions = getWrongRecordList('active')
            .map(record => getQuestionById(record.questionId))
            .filter(Boolean);
        if (!questions.length) return;
        state.view = 'practice';
        state.source = 'wrong';
        state.queue = shuffle(questions);
        state.index = 0;
        state.selectedId = null;
        state.answered = false;
        state.correct = 0;
        state.incorrect = 0;
        render();
    }

    function restartCurrentPractice() {
        if (state.source !== 'wrong') {
            resetPractice(state.level);
            return;
        }
        state.view = 'practice';
        state.queue = shuffle(state.queue);
        state.index = 0;
        state.selectedId = null;
        state.answered = false;
        state.correct = 0;
        state.incorrect = 0;
        render();
    }

    function renderQuestion(root) {
        const question = state.queue[state.index];
        if (!question) {
            root.innerHTML = '<div class="compound-practice-empty">暂无题目。</div>';
            return;
        }

        const options = question.options.map(option => {
            const selectedClass = option.id === state.selectedId ? ' is-selected' : '';
            const correctClass = state.answered && option.id === question.correctOptionId ? ' is-correct' : '';
            const wrongClass = state.answered && option.id === state.selectedId && option.id !== question.correctOptionId ? ' is-wrong' : '';
            return `
                <button class="compound-practice-choice${selectedClass}${correctClass}${wrongClass}" type="button" data-option-id="${escapeHtml(option.id)}" ${state.answered ? 'disabled' : ''}>
                    <span class="compound-practice-choice-index">${escapeHtml(option.id)}</span>
                    <span>${escapeHtml(option.text)}</span>
                </button>
            `;
        }).join('');

        const isCorrect = state.selectedId === question.correctOptionId;
        const result = state.answered
            ? `<span class="compound-practice-result${isCorrect ? '' : ' is-wrong'}">${isCorrect ? '正解' : '不正解'} · ${escapeHtml(question.correctOptionId)}</span>`
            : '';
        const action = state.answered
            ? `<button class="compound-practice-primary-button" type="button" data-action="next">${state.index === state.queue.length - 1 ? '查看结果' : '下一题'}</button>`
            : `<button class="compound-practice-primary-button" type="button" data-action="check" ${state.selectedId ? '' : 'disabled'}>确认答案</button>`;
        const sourcePill = state.source === 'wrong'
            ? '<span class="compound-practice-pill is-accent">错题重练</span>'
            : '';
        const explanation = state.answered
            ? `
                <div class="compound-practice-explanation">
                    <section>
                        <h2>中文翻译</h2>
                        <p>${formatPlainText(question.translation)}</p>
                    </section>
                    <section>
                        <h2>答案解析</h2>
                        <div>${question.grammar || ''}</div>
                    </section>
                </div>
            `
            : '';

        root.innerHTML = `
            <article class="compound-practice-card">
                <div class="compound-practice-meta">
                    <span class="compound-practice-pill is-accent">${escapeHtml(question.level)}</span>
                    <span class="compound-practice-pill">${escapeHtml(question.year)}</span>
                    <span class="compound-practice-pill">${state.index + 1} / ${state.queue.length}</span>
                    ${sourcePill}
                </div>
                <p class="compound-practice-sentence">${formatPlainText(question.sentence)}</p>
                <div class="compound-practice-options">${options}</div>
                <div class="compound-practice-actions">${result}${action}</div>
                ${explanation}
            </article>
        `;
    }

    function renderSummary(root) {
        const total = state.queue.length;
        const rate = total ? Math.round((state.correct / total) * 100) : 0;
        root.innerHTML = `
            <section class="compound-practice-summary">
                <h2>练习完成</h2>
                <div class="compound-practice-summary-grid">
                    <div class="compound-practice-summary-stat"><strong>${total}</strong><span>总题数</span></div>
                    <div class="compound-practice-summary-stat"><strong>${state.correct}</strong><span>正解</span></div>
                    <div class="compound-practice-summary-stat"><strong>${rate}%</strong><span>正确率</span></div>
                </div>
                <div class="compound-practice-actions">
                    ${state.source === 'wrong'
                        ? '<button class="compound-practice-secondary-button" type="button" data-action="open-wrongs">返回错题</button>'
                        : ''}
                    <button class="compound-practice-primary-button" type="button" data-action="restart">再练一次</button>
                </div>
            </section>
        `;
    }

    function renderWrongView(root) {
        const activeRecords = getWrongRecordList('active');
        const resolvedRecords = getWrongRecordList('resolved');
        const records = state.wrongTab === 'resolved' ? resolvedRecords : activeRecords;
        const list = records.map(record => {
            const question = getQuestionById(record.questionId);
            if (!question) return '';
            const correctOption = question.options.find(option => option.id === question.correctOptionId);
            const grammarLinks = getGrammarIds(question).map(grammarId => `
                <a class="compound-wrong-link" href="复合格助词.html#compound-${escapeHtml(grammarId)}">${escapeHtml(GRAMMAR_TITLES[grammarId] || grammarId)}</a>
            `).join('');
            return `
                <article class="compound-wrong-item">
                    <div class="compound-wrong-item-meta">
                        <span class="compound-practice-pill is-accent">${escapeHtml(question.level)}</span>
                        <span class="compound-practice-pill">${escapeHtml(question.year)}</span>
                        <span class="compound-practice-pill">${state.wrongTab === 'resolved' ? '已解决' : `错误 ${Number(record.wrongCount) || 1} 次`}</span>
                    </div>
                    <p class="compound-wrong-sentence">${formatPlainText(question.sentence)}</p>
                    <p class="compound-wrong-answer">正确答案：${escapeHtml(question.correctOptionId)}　${escapeHtml(correctOption?.text || '')}</p>
                    ${grammarLinks ? `<div class="compound-wrong-actions">${grammarLinks}</div>` : ''}
                </article>
            `;
        }).join('');

        root.innerHTML = `
            <section class="compound-wrong-panel">
                <div class="compound-wrong-head">
                    <div class="compound-wrong-tabs">
                        <button class="compound-wrong-tab${state.wrongTab === 'active' ? ' is-active' : ''}" type="button" data-action="wrong-tab" data-wrong-tab="active">待复习 ${activeRecords.length}</button>
                        <button class="compound-wrong-tab${state.wrongTab === 'resolved' ? ' is-active' : ''}" type="button" data-action="wrong-tab" data-wrong-tab="resolved">历史 ${resolvedRecords.length}</button>
                    </div>
                    <div class="compound-wrong-actions">
                        <button class="compound-practice-secondary-button" type="button" data-action="back-practice">返回练习</button>
                        <button class="compound-practice-primary-button" type="button" data-action="practice-wrongs" ${activeRecords.length ? '' : 'disabled'}>重练错题</button>
                    </div>
                </div>
                ${list ? `<div class="compound-wrong-list">${list}</div>` : '<div class="compound-practice-empty">暂无错题。</div>'}
            </section>
        `;
    }

    function render() {
        const root = document.getElementById('compoundPracticeQuestion');
        if (!root) return;
        renderLevelButtons();
        updateWrongCount();
        updateStatus();

        if (state.view === 'wrong') {
            renderWrongView(root);
            return;
        }
        if (state.index >= state.queue.length && state.queue.length) {
            renderSummary(root);
            return;
        }
        renderQuestion(root);
    }

    function handleRootClick(event) {
        const optionButton = event.target.closest('[data-option-id]');
        if (optionButton && !state.answered) {
            state.selectedId = optionButton.dataset.optionId;
            render();
            return;
        }

        const actionButton = event.target.closest('[data-action]');
        if (!actionButton) return;
        const action = actionButton.dataset.action;

        if (action === 'check') {
            const question = state.queue[state.index];
            if (!question || !state.selectedId || state.answered) return;
            const isCorrect = state.selectedId === question.correctOptionId;
            if (isCorrect) state.correct += 1;
            else state.incorrect += 1;
            recordResult(question, state.selectedId, isCorrect);
            state.answered = true;
            render();
            return;
        }

        if (action === 'next') {
            state.index += 1;
            state.selectedId = null;
            state.answered = false;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (action === 'restart') {
            restartCurrentPractice();
            return;
        }

        if (action === 'open-wrongs') {
            state.view = 'wrong';
            state.wrongTab = 'active';
            render();
            return;
        }

        if (action === 'wrong-tab') {
            state.wrongTab = actionButton.dataset.wrongTab === 'resolved' ? 'resolved' : 'active';
            render();
            return;
        }

        if (action === 'practice-wrongs') {
            startWrongPractice();
            return;
        }

        if (action === 'back-practice') resetPractice(state.level);
    }

    function init() {
        document.querySelectorAll('[data-practice-level]').forEach(button => {
            button.addEventListener('click', () => {
                const level = button.dataset.practiceLevel;
                if (!['N2', 'N3'].includes(level)) return;
                const activeLevels = getActiveLevels();
                if (activeLevels.has(level) && activeLevels.size > 1) activeLevels.delete(level);
                else activeLevels.add(level);
                resetPractice(levelFromSet(activeLevels));
            });
        });

        document.getElementById('restartCompoundPracticeBtn')?.addEventListener('click', restartCurrentPractice);
        document.getElementById('openCompoundWrongReviewBtn')?.addEventListener('click', () => {
            state.view = 'wrong';
            state.wrongTab = 'active';
            render();
        });
        document.getElementById('compoundPracticeQuestion')?.addEventListener('click', handleRootClick);
        resetPractice(state.level);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
