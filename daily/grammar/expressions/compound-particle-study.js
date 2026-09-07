(function () {
    'use strict';

    const GROUPS = [
        {
            id: 'object',
            number: '01',
            label: '对象・立场',
            entries: ['ni_tsuite', 'ni_taishite', 'ni_totte', 'ni_kotaete', 'toshite', 'toshitemo']
        },
        {
            id: 'basis',
            number: '02',
            label: '依据・关联',
            entries: ['ni_yotte', 'ni_oujite', 'wo_ukete', 'ni_sotte', 'ni_motozuite', 'wo_motoni', 'no_motode', 'wo_tsuujite']
        },
        {
            id: 'time',
            number: '03',
            label: '时间・范围',
            entries: ['ni_atatte', 'ni_oite', 'ni_saishite', 'ni_sakidatte', 'ni_watatte', 'ni_kakete', 'ni_sonaete', 'ni_tsuki', 'wo_maeni']
        },
        {
            id: 'change',
            number: '04',
            label: '变化・方向',
            entries: ['ni_itaru', 'ni_shitagatte', 'ni_tsurete', 'ni_tomonai', 'ni_mukatte', 'ni_mukete', 'ni_menshite', 'ni_kawatte']
        },
        {
            id: 'limit',
            number: '05',
            label: '限定・比较',
            entries: ['ni_kakawarazu', 'wo_towazu', 'ni_kagiru', 'ni_kagitte', 'ni_kagiri', 'ni_kakete_wa', 'ni_kurabete', 'ni_shite_wa', 'ni_hanshite', 'ni_kagirazu', 'ni_todomarazu', 'wo_nozoite']
        },
        {
            id: 'other',
            number: '06',
            label: '其他构式',
            entries: ['ni_kuwaete', 'wo_kanete', 'ni_shitatte', 'ni_tsuke', 'wo_komete', 'wo_ni_toshite_group']
        }
    ];

    const CONFUSION_FAMILIES = [
        {
            title: '〜について・〜に対して・〜にとって',
            description: '分别从“话题对象”“动作或态度的指向对象”“评价所依据的立场”进行判断。',
            entries: ['ni_tsuite', 'ni_taishite', 'ni_totte']
        },
        {
            title: '〜によって・〜に基づいて・〜をもとに',
            description: '重点区分原因或手段、作为判断依据，以及以材料为基础重新加工。',
            entries: ['ni_yotte', 'ni_motozuite', 'wo_motoni']
        },
        {
            title: '〜にしたがって・〜につれて・〜にともなって',
            description: '都可表示伴随变化，但前项的性质、变化是否自然以及书面语程度不同。',
            entries: ['ni_shitagatte', 'ni_tsurete', 'ni_tomonai']
        },
        {
            title: '〜にかかわらず・〜を問わず・〜に限らず',
            description: '分别关注“不受影响”“不把条件当作问题”和“不只限定于某一范围”。',
            entries: ['ni_kakawarazu', 'wo_towazu', 'ni_kagirazu']
        },
        {
            title: '〜にあたって・〜に際して・〜において',
            description: '区分面对重要事项、处于特殊时机，以及单纯指出事件发生的场所或场面。',
            entries: ['ni_atatte', 'ni_saishite', 'ni_oite']
        },
        {
            title: '〜に応じて・〜にこたえて・〜を受けて',
            description: '分别表示根据条件作出调整、积极回应期待，以及承接要求或受到事件影响后采取行动。',
            entries: ['ni_oujite', 'ni_kotaete', 'wo_ukete']
        }
    ];

    const state = {
        mode: 'study',
        entryId: null,
        groupId: 'concept'
    };

    const entryToGroup = new Map();
    GROUPS.forEach(group => group.entries.forEach(entryId => entryToGroup.set(entryId, group.id)));

    function getCard(entryId) {
        return document.querySelector(`.grammar-learning-favorite[data-id="${CSS.escape(entryId)}"]`)?.closest('.grammar-card') || null;
    }

    function getCardTitle(entryId) {
        return getCard(entryId)?.querySelector('h3')?.textContent?.trim() || entryId;
    }

    function getCardMeaning(entryId) {
        const card = getCard(entryId);
        return card?.querySelector('.compound-entry-meaning')?.textContent?.trim()
            || card?.querySelector(':scope > div:first-child h3 + span')?.textContent?.trim()
            || '';
    }

    function prepareCards() {
        const list = document.getElementById('grammarList');
        if (!list) return;

        list.querySelectorAll('.grammar-category-title').forEach(title => title.remove());

        const orderedIds = GROUPS.flatMap(group => group.entries);
        orderedIds.forEach(entryId => {
            const card = getCard(entryId);
            if (!card) return;
            const group = GROUPS.find(item => item.entries.includes(entryId));
            const entryIndex = Math.max(0, group?.entries.indexOf(entryId) ?? 0);
            card.dataset.studyGroup = entryToGroup.get(entryId) || 'other';
            card.id = `compound-${entryId}`;
            card.tabIndex = -1;
            card.querySelectorAll('.verb-origin-box').forEach(block => block.remove());
            list.appendChild(card);

            const heading = Array.from(card.children).find(child => child.matches('div.flex'));
            const body = Array.from(card.children).find(child => child.matches('div.grid'));
            if (heading) {
                heading.classList.add('compound-entry-heading');
                const title = heading.querySelector('h3');
                const meaning = heading.querySelector('h3 + span');
                title?.classList.add('compound-entry-title');
                meaning?.classList.add('compound-entry-meaning');

                if (!heading.querySelector('.compound-entry-sequence')) {
                    const sequence = document.createElement('span');
                    sequence.className = 'compound-entry-sequence';
                    sequence.textContent = `${group?.number || '06'}-${entryIndex + 1}`;
                    heading.prepend(sequence);
                }

                if (title && meaning && !heading.querySelector('.compound-entry-title-line')) {
                    const titleLine = document.createElement('div');
                    titleLine.className = 'compound-entry-title-line';
                    title.before(titleLine);
                    titleLine.append(title, meaning);
                }
            }
            if (body) {
                body.classList.add('compound-entry-body');
                body.children[0]?.classList.add('compound-entry-meta');
                body.children[1]?.classList.add('compound-entry-usages');
                body.children[0]?.children[0]?.classList.add('compound-connection-block');
            }
        });
    }

    function createGroupButton(number, label, hasEntries) {
        const button = document.createElement('button');
        button.className = 'compound-index-group-button';
        button.type = 'button';
        button.innerHTML = `
            <span class="compound-index-group-number">${number}</span>
            <span class="compound-index-group-label">${label}</span>
            <span class="compound-index-group-arrow" aria-hidden="true">${hasEntries ? '›' : '→'}</span>
        `;
        return button;
    }

    function buildIndex() {
        const root = document.getElementById('compoundIndexList');
        if (!root) return;
        root.textContent = '';

        const concept = document.createElement('div');
        concept.className = 'compound-index-group';
        concept.dataset.indexGroup = 'concept';
        const conceptButton = createGroupButton('00', '基础概念', false);
        conceptButton.addEventListener('click', () => showConcept({ updateHash: true, focus: true }));
        concept.appendChild(conceptButton);
        root.appendChild(concept);

        GROUPS.forEach(group => {
            const wrapper = document.createElement('div');
            wrapper.className = 'compound-index-group';
            wrapper.dataset.indexGroup = group.id;

            const groupButton = createGroupButton(group.number, group.label, true);
            groupButton.setAttribute('aria-expanded', 'false');
            groupButton.addEventListener('click', () => selectEntry(group.entries[0], { updateHash: true, focus: true }));

            const list = document.createElement('ul');
            list.className = 'compound-index-entries';
            group.entries.forEach(entryId => {
                const item = document.createElement('li');
                const button = document.createElement('button');
                button.className = 'compound-index-entry-button';
                button.type = 'button';
                button.dataset.entryId = entryId;
                button.textContent = getCardTitle(entryId);
                button.addEventListener('click', () => selectEntry(entryId, { updateHash: true, focus: true }));
                item.appendChild(button);
                list.appendChild(item);
            });

            wrapper.append(groupButton, list);
            root.appendChild(wrapper);
        });

        const special = document.createElement('div');
        special.className = 'compound-index-group';
        special.dataset.indexGroup = 'special';
        const specialButton = createGroupButton('07', '特别说明', false);
        specialButton.addEventListener('click', () => setMode('confusions', { updateHash: true, focus: true }));
        special.appendChild(specialButton);
        root.appendChild(special);
    }

    function syncIndex() {
        document.querySelectorAll('[data-index-group]').forEach(wrapper => {
            const isOpen = wrapper.dataset.indexGroup === state.groupId;
            wrapper.classList.toggle('is-open', isOpen);
            wrapper.querySelector('.compound-index-group-button')?.setAttribute('aria-expanded', String(isOpen));
        });
        document.querySelectorAll('.compound-index-entry-button').forEach(button => {
            const isActive = button.dataset.entryId === state.entryId;
            button.classList.toggle('is-active', isActive);
            if (isActive) button.setAttribute('aria-current', 'page');
            else button.removeAttribute('aria-current');
        });
    }

    function setLocationHash(hash, replace) {
        const url = `${window.location.pathname}${window.location.search}${hash}`;
        if (replace) window.history.replaceState(null, '', url);
        else window.history.pushState(null, '', url);
    }

    function updateModeUI() {
        document.querySelectorAll('[data-compound-mode]').forEach(button => {
            const active = button.dataset.compoundMode === state.mode;
            button.classList.toggle('is-active', active);
            if (active) button.setAttribute('aria-current', 'page');
            else button.removeAttribute('aria-current');
        });
        document.querySelectorAll('[data-compound-view]').forEach(view => {
            view.classList.toggle('is-active', view.dataset.compoundView === state.mode);
        });
    }

    function setMode(mode, options = {}) {
        if (!['study', 'atlas', 'confusions'].includes(mode)) mode = 'study';
        state.mode = mode;
        updateModeUI();

        if (mode === 'atlas') refreshAtlas();
        if (options.updateHash) {
            const hash = mode === 'atlas'
                ? '#compound-atlas'
                : mode === 'confusions'
                    ? '#compound-confusions'
                    : state.entryId ? `#compound-${state.entryId}` : '#compound-concept';
            setLocationHash(hash, false);
        }
        if (options.focus) {
            const view = document.querySelector(`[data-compound-view="${mode}"]`);
            view?.focus({ preventScroll: true });
            window.scrollTo({ top: Math.max(0, document.querySelector('.compound-mode-bar')?.offsetTop - 78), behavior: 'smooth' });
        }
    }

    function showConcept(options = {}) {
        state.mode = 'study';
        state.entryId = null;
        state.groupId = 'concept';
        updateModeUI();
        document.getElementById('compoundConceptPanel')?.classList.add('is-active');
        document.getElementById('compoundEntryPanel')?.classList.remove('is-active');
        document.querySelectorAll('.grammar-card.compound-card-active, .grammar-card.compound-group-active').forEach(card => {
            card.classList.remove('compound-card-active', 'compound-group-active');
            card.setAttribute('aria-hidden', 'true');
        });
        syncIndex();
        if (options.updateHash) setLocationHash('#compound-concept', false);
        if (options.focus) document.getElementById('compoundConceptPanel')?.focus({ preventScroll: false });
    }

    function selectEntry(entryId, options = {}) {
        const card = getCard(entryId);
        if (!card) return;

        state.mode = 'study';
        state.entryId = entryId;
        state.groupId = entryToGroup.get(entryId) || 'other';
        updateModeUI();

        document.getElementById('compoundConceptPanel')?.classList.remove('is-active');
        document.getElementById('compoundEntryPanel')?.classList.add('is-active');
        document.querySelectorAll('.grammar-card').forEach(item => {
            const isInGroup = item.dataset.studyGroup === state.groupId;
            item.classList.toggle('compound-group-active', isInGroup);
            item.classList.remove('compound-card-active');
            if (isInGroup) item.removeAttribute('aria-hidden');
            else item.setAttribute('aria-hidden', 'true');
        });
        card.classList.add('compound-card-active');
        syncIndex();

        if (options.updateHash !== false) setLocationHash(`#compound-${entryId}`, false);
        if (options.highlight) {
            card.classList.add('is-highlighted');
            window.setTimeout(() => card.classList.remove('is-highlighted'), 1800);
        }
        if (options.focus || options.locate) {
            const header = document.querySelector('.kiki-unified-header, .compound-topbar, .sort-page-header');
            const headerBottom = header?.getBoundingClientRect().bottom || 64;
            const targetTop = Math.max(0, window.scrollY + card.getBoundingClientRect().top - headerBottom - 16);
            if (options.focus) card.focus({ preventScroll: true });
            window.scrollTo({ top: targetTop, behavior: options.behavior || 'smooth' });
        }
    }

    function getFavoriteId(entryId) {
        return window.GrammarLearningCatalog?.resolve?.('compound-particles', entryId) || '';
    }

    function isFavorited(entryId) {
        const favoriteId = getFavoriteId(entryId);
        return Boolean(favoriteId && window.GrammarFavorites?.has?.(favoriteId));
    }

    function matchesCurrentFilter(entryId, favorited) {
        const activeFilter = typeof currentGrammarFilter === 'string' ? currentGrammarFilter : 'all';
        if (activeFilter === 'all') return true;
        if (activeFilter === 'wrong') {
            return typeof getActiveWrongGrammarIdSet === 'function' && getActiveWrongGrammarIdSet().has(entryId);
        }
        if (activeFilter === 'favorited') return favorited;
        if (activeFilter === 'unfavorited') return !favorited;
        return true;
    }

    function refreshAtlas() {
        const body = document.getElementById('compoundAtlasBody');
        if (!body) return;
        body.textContent = '';

        GROUPS.forEach(group => {
            group.entries.forEach(entryId => {
                const favorited = isFavorited(entryId);
                if (!matchesCurrentFilter(entryId, favorited)) return;
                const row = document.createElement('tr');
                row.className = 'compound-atlas-row';
                row.tabIndex = 0;
                row.innerHTML = `
                    <td>${group.label}</td>
                    <td class="compound-atlas-expression">${getCardTitle(entryId)}</td>
                    <td>${getCardMeaning(entryId)}</td>
                    <td><span class="compound-status-label" data-status="${favorited ? 'favorited' : 'unfavorited'}">${favorited ? '★ 已收藏' : '☆ 未收藏'}</span></td>
                `;
                const open = () => selectEntry(entryId, { updateHash: true, focus: true });
                row.addEventListener('click', open);
                row.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        open();
                    }
                });
                body.appendChild(row);
            });
        });

        if (!body.children.length) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4">当前筛选条件下没有词条。</td>';
            body.appendChild(row);
        }
    }

    function buildConfusions() {
        const root = document.getElementById('compoundConfusionFamilies');
        if (!root) return;
        root.textContent = '';

        CONFUSION_FAMILIES.forEach((family, index) => {
            const section = document.createElement('section');
            section.className = 'compound-confusion-family';
            const number = document.createElement('span');
            number.className = 'compound-confusion-family-number';
            number.textContent = String(index + 1).padStart(2, '0');
            const title = document.createElement('h3');
            title.textContent = family.title;
            const description = document.createElement('p');
            description.textContent = family.description;
            const links = document.createElement('div');
            links.className = 'compound-confusion-links';
            family.entries.forEach(entryId => {
                const button = document.createElement('button');
                button.className = 'compound-confusion-link';
                button.type = 'button';
                button.textContent = getCardTitle(entryId);
                button.addEventListener('click', () => selectEntry(entryId, { updateHash: true, focus: true }));
                links.appendChild(button);
            });
            section.append(number, title, description, links);
            root.appendChild(section);
        });
    }

    function restoreFromHash(replaceEmptyHash) {
        const raw = window.location.hash.replace(/^#/, '');
        if (raw === 'compound-atlas') {
            setMode('atlas');
            return;
        }
        if (raw === 'compound-confusions') {
            setMode('confusions');
            return;
        }
        if (raw.startsWith('compound-')) {
            const entryId = raw.slice('compound-'.length);
            if (entryToGroup.has(entryId)) {
                selectEntry(entryId, { updateHash: false, locate: true, behavior: 'auto' });
                return;
            }
        }
        showConcept();
        if (replaceEmptyHash) setLocationHash('#compound-concept', true);
    }

    function bindEvents() {
        document.querySelectorAll('[data-compound-mode]').forEach(button => {
            button.addEventListener('click', () => setMode(button.dataset.compoundMode, { updateHash: true, focus: true }));
        });

        window.addEventListener('popstate', () => restoreFromHash(false));

        document.addEventListener('click', event => {
            if (event.target.closest('.grammar-learning-favorite') || event.target.closest('.grammar-filter-chip')) {
                window.setTimeout(refreshAtlas, 0);
            }
        });
    }

    function init() {
        prepareCards();
        buildIndex();
        buildConfusions();
        bindEvents();
        restoreFromHash(!window.location.hash);
    }

    window.openCompoundGrammar = selectEntry;
    window.refreshCompoundAtlas = refreshAtlas;
    document.addEventListener('DOMContentLoaded', init);
})();
