(function() {
    const STYLE_ID = 'listening-random-entry-style';
    const STORAGE_PREFIX = 'listening_random_range::';

    function normalizeType(value) {
        return String(value || '').trim().toLowerCase().replace(/-/g, '_');
    }

    function normalizeLevel(value) {
        return String(value || '').trim().toUpperCase();
    }

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .listening-random-entry {
                background: var(--card-bg, #ffffff);
                border: 1px solid rgba(0, 0, 0, 0.05);
                border-radius: 12px;
                padding: 20px 22px;
                margin: 0 0 28px;
                display: flex;
                flex-direction: column;
                gap: 14px;
                box-shadow: var(--shadow, 0 4px 12px rgba(0, 0, 0, 0.05));
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }
            .listening-random-entry:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            }
            .listening-random-entry__head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
            }
            .listening-random-entry__title {
                margin: 0;
                font-size: 18px;
                font-weight: 700;
                color: var(--accent-color, #b33e3e);
                letter-spacing: 0;
            }
            .listening-random-entry__badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 4px 10px;
                border-radius: 999px;
                background: rgba(179, 62, 62, 0.1);
                color: var(--accent-color, #b33e3e);
                font-size: 12px;
                font-weight: 700;
                line-height: 1;
            }
            .listening-random-entry__copy {
                margin: 0;
                color: var(--sub-color, #787878);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.75;
            }
            .listening-random-entry__actions {
                display: flex;
                align-items: center;
                gap: 14px;
                flex-wrap: wrap;
            }
            .listening-random-entry__button,
            .listening-random-modal__action {
                appearance: none;
                border: 1px solid #eee;
                background: #f8f8f8;
                color: #444;
                border-radius: 8px;
                padding: 10px 16px;
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .listening-random-entry__button:hover,
            .listening-random-modal__action:hover {
                background: var(--accent-color, #b33e3e);
                color: #ffffff;
                border-color: var(--accent-color, #b33e3e);
            }
            .listening-random-entry__button[disabled],
            .listening-random-modal__action[disabled] {
                background: #f0f0f0;
                color: #aaa;
                border-color: #eee;
                cursor: not-allowed;
                transform: none;
            }
            .listening-random-modal__action--primary {
                background: #2c3e50;
                color: #ffffff;
                border-color: #2c3e50;
            }
            .listening-random-modal__action--primary:hover {
                background: var(--accent-color, #b33e3e);
                border-color: var(--accent-color, #b33e3e);
            }
            .listening-random-entry__hint {
                font-size: 12px;
                color: var(--sub-color, #787878);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-weight: 600;
            }
            .listening-random-modal {
                position: fixed;
                inset: 0;
                z-index: 1800;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(0, 0, 0, 0.24);
            }
            .listening-random-modal.is-open {
                display: flex;
            }
            .listening-random-modal__dialog {
                width: min(100%, 500px);
                max-height: min(88vh, 720px);
                overflow-y: auto;
                background: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.06);
                border-radius: 16px;
                padding: 22px 24px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
            }
            .listening-random-modal__title {
                margin: 0;
                font-size: 20px;
                font-weight: 700;
                color: var(--text-color, #2c2c2c);
            }
            .listening-random-modal__subtitle {
                margin: 0;
                color: var(--sub-color, #787878);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-size: 14px;
                line-height: 1.75;
                font-weight: 500;
            }
            .listening-random-modal__grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 14px;
            }
            .listening-random-modal__field {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .listening-random-modal__label {
                font-size: 12px;
                font-weight: 700;
                color: var(--text-color, #2c2c2c);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
            }
            .listening-random-modal__select {
                appearance: none;
                width: 100%;
                border: 1px solid #e0e0e0;
                border-radius: 10px;
                background: #ffffff;
                color: var(--text-color, #2c2c2c);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 600;
                padding: 10px 12px;
            }
            .listening-random-modal__count {
                display: flex;
                flex-direction: column;
                gap: 8px;
                border-radius: 12px;
                border: 1px solid #eee;
                background: #faf7f2;
                padding: 14px 16px;
            }
            .listening-random-modal__count strong {
                font-size: 24px;
                color: var(--accent-color, #b33e3e);
                font-weight: 700;
            }
            .listening-random-modal__note {
                margin: 0;
                color: var(--sub-color, #787878);
                font-family: "Hiragino Sans", "Meiryo", "Microsoft YaHei", -apple-system, sans-serif;
                font-size: 13px;
                font-weight: 500;
                line-height: 1.7;
            }
            .listening-random-modal__note.is-warning {
                color: var(--accent-color, #b33e3e);
            }
            .listening-random-modal__actions {
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                flex-wrap: wrap;
            }
            @media (max-width: 720px) {
                .listening-random-entry {
                    padding: 16px 18px;
                    margin-bottom: 20px;
                    gap: 12px;
                }
                .listening-random-entry__title {
                    font-size: 16px;
                }
                .listening-random-entry__badge {
                    font-size: 11px;
                    padding: 2px 7px;
                }
                .listening-random-entry__copy {
                    font-size: 13px;
                    line-height: 1.6;
                }
                .listening-random-entry__button {
                    padding: 7px 12px;
                    font-size: 12px;
                }
                .listening-random-entry__hint {
                    font-size: 11px;
                }
                .listening-random-modal {
                    padding: 14px;
                }
                .listening-random-modal__dialog {
                    width: min(100%, 500px);
                    padding: 18px 18px 16px;
                    gap: 14px;
                }
                .listening-random-modal__title {
                    font-size: 18px;
                }
                .listening-random-modal__subtitle {
                    font-size: 13px;
                    line-height: 1.6;
                }
                .listening-random-modal__grid {
                    gap: 12px;
                }
                .listening-random-modal__label {
                    font-size: 11px;
                }
                .listening-random-modal__select {
                    font-size: 13px;
                    padding: 9px 11px;
                }
                .listening-random-modal__count {
                    padding: 12px 14px;
                }
                .listening-random-modal__count strong {
                    font-size: 21px;
                }
                .listening-random-modal__note {
                    font-size: 12px;
                }
                .listening-random-modal__action {
                    font-size: 12px;
                    padding: 8px 14px;
                }
            }
            @media (max-width: 520px) {
                .listening-random-entry {
                    padding: 14px;
                    gap: 10px;
                }
                .listening-random-entry__title {
                    font-size: 15px;
                }
                .listening-random-entry__badge {
                    font-size: 10px;
                    padding: 2px 6px;
                }
                .listening-random-entry__copy {
                    font-size: 12px;
                }
                .listening-random-entry__button {
                    padding: 6px 10px;
                    font-size: 11px;
                }
                .listening-random-entry__hint {
                    font-size: 10px;
                }
                .listening-random-modal__dialog {
                    width: 100%;
                    padding: 16px 14px 14px;
                }
                .listening-random-modal__grid {
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
                .listening-random-modal__title {
                    font-size: 16px;
                }
                .listening-random-modal__subtitle,
                .listening-random-modal__note {
                    font-size: 11px;
                }
                .listening-random-modal__select {
                    font-size: 12px;
                    padding: 8px 10px;
                }
                .listening-random-modal__count strong {
                    font-size: 18px;
                }
                .listening-random-modal__action {
                    font-size: 11px;
                    padding: 8px 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function buildStorageKey(type, level) {
        return `${STORAGE_PREFIX}${normalizeType(type)}::${normalizeLevel(level)}`;
    }

    function getRandomExamConfig(type, level) {
        const normalizedType = normalizeType(type);
        const normalizedLevel = normalizeLevel(level);
        if (normalizedType === 'task_comprehension') {
            return {
                questionCount: 6,
                autoAdvanceSeconds: 5
            };
        }
        if (normalizedType === 'immediate_response' && normalizedLevel === 'N3') {
            return {
                questionCount: 9,
                autoAdvanceSeconds: 3
            };
        }
        return {
            questionCount: 11,
            autoAdvanceSeconds: 3
        };
    }

    function buildRandomExamHref(type, level, fromYear, toYear) {
        const config = getRandomExamConfig(type, level);
        const url = new URL('../../shared/random-exam.html', window.location.href);
        url.searchParams.set('type', normalizeType(type));
        url.searchParams.set('level', normalizeLevel(level));
        url.searchParams.set('fromYear', String(fromYear));
        url.searchParams.set('toYear', String(toYear));
        url.searchParams.set('count', String(config.questionCount));
        url.searchParams.set('autoAdvanceSeconds', String(config.autoAdvanceSeconds));
        return `${url.pathname.replace(window.location.origin, '')}${url.search}${url.hash}`;
    }

    function mount(config) {
        const mountNode = config && config.mount
            ? (typeof config.mount === 'string' ? document.querySelector(config.mount) : config.mount)
            : null;
        if (!mountNode || !window.ListeningQuestionPools) {
            return null;
        }

        ensureStyles();

        const type = normalizeType(config.type);
        const level = normalizeLevel(config.level);
        const examConfig = getRandomExamConfig(type, level);
        const years = window.ListeningQuestionPools.getAvailableYears(type, level);
        const totalCount = years.length > 0
            ? window.ListeningQuestionPools.countQuestionsInRange(type, level, years[0], years[years.length - 1])
            : 0;
        const storageKey = buildStorageKey(type, level);

        const root = document.createElement('section');
        root.className = 'listening-random-entry';
        root.innerHTML = `
            <div class="listening-random-entry__head">
                <h2 class="listening-random-entry__title">随机考试</h2>
                <span class="listening-random-entry__badge">${examConfig.questionCount} 题挑战</span>
            </div>
            <p class="listening-random-entry__copy">
                从你选定的年份范围里随机抽取 ${examConfig.questionCount} 题，按考试节奏完整做完后再统一查看解析。
            </p>
            <div class="listening-random-entry__actions">
                <button type="button" class="listening-random-entry__button" data-random-open>设置年份范围</button>
                <span class="listening-random-entry__hint">当前题库共 ${totalCount} 题可用于随机考试</span>
            </div>
        `;

        const modal = document.createElement('div');
        modal.className = 'listening-random-modal';
        modal.innerHTML = `
            <div class="listening-random-modal__dialog" role="dialog" aria-modal="true" aria-label="设置随机考试范围">
                <h3 class="listening-random-modal__title">随机考试设置</h3>
                <p class="listening-random-modal__subtitle">
                    选择一个闭区间年份范围。系统会自动纳入该范围内所有已存在的 7 月 / 12 月题目，并从中随机抽取 ${examConfig.questionCount} 题。
                </p>
                <div class="listening-random-modal__grid">
                    <label class="listening-random-modal__field">
                        <span class="listening-random-modal__label">起始年份</span>
                        <select class="listening-random-modal__select" data-random-from></select>
                    </label>
                    <label class="listening-random-modal__field">
                        <span class="listening-random-modal__label">结束年份</span>
                        <select class="listening-random-modal__select" data-random-to></select>
                    </label>
                </div>
                <div class="listening-random-modal__count">
                    <div class="listening-random-modal__label">当前范围题量</div>
                    <strong data-random-count>0</strong>
                    <p class="listening-random-modal__note" data-random-note>将从所选年份范围随机抽取 ${examConfig.questionCount} 题。</p>
                </div>
                <div class="listening-random-modal__actions">
                    <button type="button" class="listening-random-modal__action" data-random-cancel>取消</button>
                    <button type="button" class="listening-random-modal__action listening-random-modal__action--primary" data-random-start>开始随机考试</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const fromSelect = modal.querySelector('[data-random-from]');
        const toSelect = modal.querySelector('[data-random-to]');
        const note = modal.querySelector('[data-random-note]');
        const countValue = modal.querySelector('[data-random-count]');
        const startButton = modal.querySelector('[data-random-start]');
        const openButton = root.querySelector('[data-random-open]');
        const cancelButton = modal.querySelector('[data-random-cancel]');

        years.forEach((year) => {
            const optionA = document.createElement('option');
            optionA.value = String(year);
            optionA.textContent = `${year}年`;
            fromSelect.appendChild(optionA);

            const optionB = document.createElement('option');
            optionB.value = String(year);
            optionB.textContent = `${year}年`;
            toSelect.appendChild(optionB);
        });

        const storedRange = (() => {
            try {
                return JSON.parse(localStorage.getItem(storageKey) || 'null');
            } catch (error) {
                return null;
            }
        })();

        const defaultFrom = storedRange && years.includes(Number(storedRange.fromYear))
            ? Number(storedRange.fromYear)
            : years[0];
        const defaultTo = storedRange && years.includes(Number(storedRange.toYear))
            ? Number(storedRange.toYear)
            : years[years.length - 1];

        if (defaultFrom != null) fromSelect.value = String(defaultFrom);
        if (defaultTo != null) toSelect.value = String(defaultTo);

        function lockBody(lock) {
            document.body.style.overflow = lock ? 'hidden' : '';
        }

        function closeModal() {
            modal.classList.remove('is-open');
            lockBody(false);
        }

        function openModal() {
            modal.classList.add('is-open');
            lockBody(true);
        }

        function syncRange() {
            let fromYear = Number(fromSelect.value);
            let toYear = Number(toSelect.value);
            if (fromYear > toYear) {
                toYear = fromYear;
                toSelect.value = String(toYear);
            }
            const count = window.ListeningQuestionPools.countQuestionsInRange(type, level, fromYear, toYear);
            countValue.textContent = `${count} 题`;
            const enough = count >= examConfig.questionCount;
            note.classList.toggle('is-warning', !enough);
            note.textContent = enough
                ? `将从所选年份范围随机抽取 ${examConfig.questionCount} 题。`
                : `当前范围题量不足 ${examConfig.questionCount} 题，请扩大年份范围。`;
            startButton.disabled = !enough;
            startButton.dataset.fromYear = String(fromYear);
            startButton.dataset.toYear = String(toYear);
            try {
                localStorage.setItem(storageKey, JSON.stringify({ fromYear, toYear }));
            } catch (error) {
                console.warn('Failed to persist listening random range:', error);
            }
        }

        openButton.addEventListener('click', openModal);
        cancelButton.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        fromSelect.addEventListener('change', syncRange);
        toSelect.addEventListener('change', syncRange);
        startButton.addEventListener('click', () => {
            if (startButton.disabled) {
                return;
            }
            const href = buildRandomExamHref(
                type,
                level,
                startButton.dataset.fromYear,
                startButton.dataset.toYear
            );
            window.location.href = href;
        });

        if (years.length === 0) {
            openButton.disabled = true;
            countValue.textContent = '0 题';
            note.classList.add('is-warning');
            note.textContent = '当前题型暂无可用年份，暂时无法创建随机考试。';
            startButton.disabled = true;
        } else {
            syncRange();
        }

        mountNode.appendChild(root);
        return { root, modal };
    }

    window.ListeningRandomEntry = {
        mount,
        buildRandomExamHref
    };
})();
