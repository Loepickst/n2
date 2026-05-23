(function attachN2VerbConjugations(global) {
    'use strict';

    const FORM_MODES = Object.freeze([
        Object.freeze({ id: 'ta', label: 'た形' }),
        Object.freeze({ id: 'te', label: 'て形' }),
        Object.freeze({ id: 'masu', label: 'ます形' }),
        Object.freeze({ id: 'nai', label: 'ない形' }),
        Object.freeze({ id: 'pot', label: '能动形' }),
        Object.freeze({ id: 'vol', label: '意志形' }),
        Object.freeze({ id: 'pas', label: '被动形' }),
        Object.freeze({ id: 'cau', label: '使役形' }),
        Object.freeze({ id: 'cpas', label: '使役被动' }),
        Object.freeze({ id: 'imp', label: '命令形' }),
        Object.freeze({ id: 'ba', label: '假定形(ば)' })
    ]);

    const TYPE_LABELS = Object.freeze({
        godan: '五段',
        ichidan: '一段',
        suru: '不规则'
    });

    const GODAN_RU_OVERRIDES = Object.freeze({
        'n2-verb-64': true,   // 握る
        'n2-verb-200': true,  // 弄る
        'n2-verb-217': true,  // 締め切る
        'n2-verb-247': true,  // 遮る
        'n2-verb-72': true,   // 湿る
        'n2-verb-186': true,  // 混じる
        'n2-verb-184': true,  // 飛び散る
        'n2-verb-7': true,    // 焦る
        'n2-verb-15': true    // 限る
    });

    const ENTRY_OVERRIDES = Object.freeze({});

    const GODAN_ENDINGS = Object.freeze({
        'う': Object.freeze({ a: 'わ', i: 'い', e: 'え', o: 'お', te: 'って', ta: 'った' }),
        'つ': Object.freeze({ a: 'た', i: 'ち', e: 'て', o: 'と', te: 'って', ta: 'った' }),
        'る': Object.freeze({ a: 'ら', i: 'り', e: 'れ', o: 'ろ', te: 'って', ta: 'った' }),
        'む': Object.freeze({ a: 'ま', i: 'み', e: 'め', o: 'も', te: 'んで', ta: 'んだ' }),
        'ぶ': Object.freeze({ a: 'ば', i: 'び', e: 'べ', o: 'ぼ', te: 'んで', ta: 'んだ' }),
        'ぬ': Object.freeze({ a: 'な', i: 'に', e: 'ね', o: 'の', te: 'んで', ta: 'んだ' }),
        'く': Object.freeze({ a: 'か', i: 'き', e: 'け', o: 'こ', te: 'いて', ta: 'いた' }),
        'ぐ': Object.freeze({ a: 'が', i: 'ぎ', e: 'げ', o: 'ご', te: 'いで', ta: 'いだ' }),
        'す': Object.freeze({ a: 'さ', i: 'し', e: 'せ', o: 'そ', te: 'して', ta: 'した' })
    });

    const ICHIDAN_PREVIOUS_KANA = 'いきぎしじちにひびぴみりえけげせぜてでねへべぺめれ';

    const FORM_OVERRIDES = Object.freeze({
        'n2-verb-123': Object.freeze({
            pot: Object.freeze({ show: '<ruby>面<rt>めん</rt></ruby>される', kana: 'めんされる' }),
            pas: Object.freeze({ show: '<ruby>面<rt>めん</rt></ruby>される', kana: 'めんされる' })
        }),
        'n2-verb-175': Object.freeze({
            pot: Object.freeze({
                show: '<ruby>達<rt>たっ</rt></ruby>せられる',
                kana: ['たっせられる', 'たっしられる', 'たっせる']
            }),
            pas: Object.freeze({
                show: '<ruby>達<rt>たっ</rt></ruby>せられる',
                kana: ['たっせられる', 'たっしられる']
            }),
            cau: Object.freeze({
                show: '<ruby>達<rt>たっ</rt></ruby>しさせる',
                kana: ['たっしさせる', 'たっしさす']
            }),
            cpas: Object.freeze({
                show: '<ruby>達<rt>たっ</rt></ruby>しさせられる',
                kana: 'たっしさせられる'
            })
        })
    });

    function asText(value) {
        return String(value == null ? '' : value).trim();
    }

    function toHiragana(text) {
        return String(text == null ? '' : text)
            .replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
    }

    function cloneForm(form) {
        if (!form) return null;
        return {
            show: form.show,
            kana: Array.isArray(form.kana) ? form.kana.slice() : form.kana
        };
    }

    function replaceEnding(value, ending, replacement) {
        const text = asText(value);
        if (!ending || !text.endsWith(ending)) return `${text}${replacement}`;
        return `${text.slice(0, -ending.length)}${replacement}`;
    }

    function getWordEntry(word) {
        const override = ENTRY_OVERRIDES[word && word.id] || null;
        const reading = toHiragana(asText((override && override.reading) || (word && word.reading) || (word && word.word)));
        const wordHtml = asText((override && override.word_html) || (word && word.word_html) || (word && word.word));
        return {
            id: asText(word && (word.id || word.word)),
            word: asText(word && word.word),
            reading,
            wordHtml,
            overrideNote: override && override.note ? override.note : ''
        };
    }

    function inferConjugationType(word) {
        const entry = getWordEntry(word);
        const reading = entry.reading;
        if (!reading) return '';
        if (reading.endsWith('する')) return 'suru';
        if (GODAN_RU_OVERRIDES[entry.id]) return 'godan';
        if (reading.endsWith('る')) {
            const previous = reading.slice(-2, -1);
            return ICHIDAN_PREVIOUS_KANA.includes(previous) ? 'ichidan' : 'godan';
        }
        return GODAN_ENDINGS[reading.slice(-1)] ? 'godan' : '';
    }

    function formFromSuffix(entry, dictionaryEnding, kanaSuffix, showSuffix) {
        return {
            show: replaceEnding(entry.wordHtml, dictionaryEnding, showSuffix || kanaSuffix),
            kana: replaceEnding(entry.reading, dictionaryEnding, kanaSuffix)
        };
    }

    function makeForm(entry, dictionaryEnding, kanaSuffix, showSuffix, alternateKana) {
        const primaryKana = replaceEnding(entry.reading, dictionaryEnding, kanaSuffix);
        const kana = Array.isArray(alternateKana) && alternateKana.length > 0
            ? [primaryKana, ...alternateKana.map((suffix) => replaceEnding(entry.reading, dictionaryEnding, suffix))]
            : primaryKana;
        return {
            show: replaceEnding(entry.wordHtml, dictionaryEnding, showSuffix || kanaSuffix),
            kana
        };
    }

    function conjugateGodan(entry) {
        const ending = entry.reading.slice(-1);
        const row = GODAN_ENDINGS[ending];
        if (!row) return null;

        const teSuffix = entry.reading === 'いく' ? 'って' : row.te;
        const taSuffix = entry.reading === 'いく' ? 'った' : row.ta;
        const cpasPrimarySuffix = ending === 'す'
            ? `${row.a}せられる`
            : `${row.a}される`;
        const cpasSuffixes = ending === 'す' ? [] : [`${row.a}せられる`];

        return {
            ta: formFromSuffix(entry, ending, taSuffix),
            te: formFromSuffix(entry, ending, teSuffix),
            masu: formFromSuffix(entry, ending, `${row.i}ます`),
            nai: formFromSuffix(entry, ending, `${row.a}ない`),
            pot: formFromSuffix(entry, ending, `${row.e}る`),
            vol: formFromSuffix(entry, ending, `${row.o}う`),
            pas: formFromSuffix(entry, ending, `${row.a}れる`),
            cau: formFromSuffix(entry, ending, `${row.a}せる`),
            cpas: makeForm(entry, ending, cpasPrimarySuffix, null, cpasSuffixes),
            imp: formFromSuffix(entry, ending, row.e),
            ba: formFromSuffix(entry, ending, `${row.e}ば`)
        };
    }

    function conjugateIchidan(entry) {
        return {
            ta: formFromSuffix(entry, 'る', 'た'),
            te: formFromSuffix(entry, 'る', 'て'),
            masu: formFromSuffix(entry, 'る', 'ます'),
            nai: formFromSuffix(entry, 'る', 'ない'),
            pot: formFromSuffix(entry, 'る', 'られる'),
            vol: formFromSuffix(entry, 'る', 'よう'),
            pas: formFromSuffix(entry, 'る', 'られる'),
            cau: formFromSuffix(entry, 'る', 'させる'),
            cpas: formFromSuffix(entry, 'る', 'させられる'),
            imp: formFromSuffix(entry, 'る', 'ろ'),
            ba: formFromSuffix(entry, 'る', 'れば')
        };
    }

    function conjugateSuru(entry) {
        if (entry.reading === 'する') {
            return {
                ta: { show: 'した', kana: 'した' },
                te: { show: 'して', kana: 'して' },
                masu: { show: 'します', kana: 'します' },
                nai: { show: 'しない', kana: 'しない' },
                pot: { show: 'できる', kana: 'できる' },
                vol: { show: 'しよう', kana: 'しよう' },
                pas: { show: 'される', kana: 'される' },
                cau: { show: 'させる', kana: 'させる' },
                cpas: { show: 'させられる', kana: 'させられる' },
                imp: { show: 'しろ', kana: ['しろ', 'せよ'] },
                ba: { show: 'すれば', kana: 'すれば' }
            };
        }

        const stemKana = replaceEnding(entry.reading, 'する', '');
        const stemShow = replaceEnding(entry.wordHtml, 'する', '');
        const show = (suffix) => `${stemShow}${suffix}`;
        const kana = (suffix) => `${stemKana}${suffix}`;

        return {
            ta: { show: show('した'), kana: kana('した') },
            te: { show: show('して'), kana: kana('して') },
            masu: { show: show('します'), kana: kana('します') },
            nai: { show: show('しない'), kana: kana('しない') },
            pot: { show: show('できる'), kana: kana('できる') },
            vol: { show: show('しよう'), kana: kana('しよう') },
            pas: { show: show('される'), kana: kana('される') },
            cau: { show: show('させる'), kana: kana('させる') },
            cpas: { show: show('させられる'), kana: kana('させられる') },
            imp: { show: show('しろ'), kana: [kana('しろ'), kana('せよ')] },
            ba: { show: show('すれば'), kana: kana('すれば') }
        };
    }

    function conjugateWord(word) {
        const entry = getWordEntry(word);
        const conjugationType = inferConjugationType(word);
        let forms = null;
        if (conjugationType === 'godan') forms = conjugateGodan(entry);
        if (conjugationType === 'ichidan') forms = conjugateIchidan(entry);
        if (conjugationType === 'suru') forms = conjugateSuru(entry);
        if (!forms) return null;

        const formOverrides = FORM_OVERRIDES[entry.id] || null;
        const mergedForms = formOverrides ? { ...forms, ...formOverrides } : forms;

        return {
            id: entry.id,
            wordId: entry.id,
            word: entry.word,
            reading: entry.reading,
            pos: word && word.pos ? word.pos : '',
            mean: word && word.mean ? word.mean : '',
            category: word && word.category ? word.category : '',
            sourceOrder: Number(word && word.sourceOrder) || 0,
            conjugationType,
            overrideNote: entry.overrideNote,
            basic: {
                show: entry.wordHtml,
                kana: entry.reading,
                type: TYPE_LABELS[conjugationType] || conjugationType
            },
            forms: Object.fromEntries(Object.entries(mergedForms).map(([key, form]) => [key, cloneForm(form)]))
        };
    }

    function buildVerbConjugations(words) {
        return (Array.isArray(words) ? words : [])
            .map((word) => conjugateWord(word))
            .filter(Boolean)
            .sort((left, right) => {
                const leftOrder = Number(left.sourceOrder) || Number.MAX_SAFE_INTEGER;
                const rightOrder = Number(right.sourceOrder) || Number.MAX_SAFE_INTEGER;
                return leftOrder - rightOrder;
            });
    }

    function validateVerbConjugations(words) {
        const sourceWords = Array.isArray(words) ? words : [];
        const conjugations = buildVerbConjugations(sourceWords);
        const warnings = [];
        const byId = new Set(conjugations.map((item) => item.id));
        sourceWords.forEach((word) => {
            const id = asText(word && (word.id || word.word));
            if (id && !byId.has(id)) warnings.push(`未能生成变形：${id} ${word && word.word ? word.word : ''}`);
            const override = ENTRY_OVERRIDES[id];
            if (override && override.note) warnings.push(`${id}: ${override.note}`);
        });
        conjugations.forEach((item) => {
            FORM_MODES.forEach((mode) => {
                const form = item.forms && item.forms[mode.id];
                if (!form || !form.kana || !form.show) warnings.push(`缺少 ${mode.label}：${item.id} ${item.word}`);
            });
        });
        return {
            sourceCount: sourceWords.length,
            generatedCount: conjugations.length,
            warnings
        };
    }

    const api = Object.freeze({
        formModes: FORM_MODES,
        typeLabels: TYPE_LABELS,
        entryOverrides: ENTRY_OVERRIDES,
        formOverrides: FORM_OVERRIDES,
        godanRuOverrides: GODAN_RU_OVERRIDES,
        inferConjugationType,
        conjugateWord,
        buildVerbConjugations,
        validateVerbConjugations
    });

    global.N2VerbConjugations = api;
    if (Array.isArray(global.FULL_WORD_LIST)) {
        global.N2_VERB_CONJUGATION_LIST = buildVerbConjugations(global.FULL_WORD_LIST);
        global.N2_VERB_CONJUGATION_DIAGNOSTICS = validateVerbConjugations(global.FULL_WORD_LIST);
    }
})(typeof window !== 'undefined' ? window : globalThis);
