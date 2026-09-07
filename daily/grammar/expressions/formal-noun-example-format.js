(function () {
    "use strict";

    const KANJI_PATTERN = /[\u3400-\u9fff々〆ヵヶ]/;

    // Each reading is aligned with one kanji in the term. Kana already present in
    // the term is kept as normal text, so okurigana never gets duplicated in rt.
    const TERM_READING_ROWS = [
        // Multi-kanji ruby already present in the shared grammar database.
        ["素晴", "す ば"], ["反対", "はん たい"], ["予告", "よ こく"],
        ["計画", "けい かく"], ["変更", "へん こう"], ["場合", "ば あい"],
        ["過去", "か こ"], ["事例", "じ れい"], ["未来", "み らい"],
        ["試験", "し けん"], ["同僚", "どう りょう"], ["社長", "しゃ ちょう"],
        ["親戚", "しん せき"], ["人間", "にん げん"], ["幹事", "かん じ"],
        ["連絡", "れん らく"], ["今日", "きょ う"], ["部長", "ぶ ちょう"],
        ["残業明", "ざん ぎょう あ"], ["美味", "お い"], ["言葉", "こと ば"],
        ["真面目", "ま じ め"], ["山田", "やま だ"], ["今回", "こん かい"],
        ["完璧", "かん ぺき"], ["資料", "し りょう"], ["未満", "み まん"],
        ["飲ん", "の"], ["電車", "でん しゃ"], ["遅れ", "おく"],
        ["会議", "かい ぎ"], ["間に合わ", "ま あ"], ["毎日", "まい にち"],
        ["体力", "たい りょく"], ["維持", "い じ"], ["出かけ", "で"],
        ["面白", "おも しろ"], ["仲間", "なか ま"], ["協力", "きょう りょく"],
        ["倒す", "たお"], ["病院", "びょう いん"], ["周囲", "しゅう い"],
        ["批判", "ひ はん"], ["地震", "じ しん"], ["時間", "じ かん"],
        ["早く", "はや"], ["平和", "へい わ"], ["世界", "せ かい"],
        ["授業中", "じゅ ぎょう ちゅう"], ["弁当", "べん とう"], ["先生", "せん せい"],
        ["検査", "けん さ"], ["受け", "う"], ["特に", "とく"],
        ["異常", "い じょう"], ["黒い", "くろ"], ["名前", "な まえ"],
        ["濡れ", "ぬ"], ["昨夜", "さく や"], ["降っ", "ふ"],
        ["思わ", "おも"], ["成功", "せい こう"], ["全員", "ぜん いん"],
        ["大きい", "おお"], ["合格", "ごう かく"], ["残業", "ざん ぎょう"],
        ["約束", "やく そく"], ["参加", "さん か"], ["急用", "きゅう よう"],
        ["夜中", "よ なか"], ["翌朝", "よく あさ"], ["家族", "か ぞく"],
        ["相談", "そう だん"], ["返事", "へん じ"], ["立地", "りっ ち"],
        ["重要", "じゅう よう"], ["条件", "じょう けん"], ["眼鏡", "め がね"],
        ["目覚", "め ざ"], ["時計", "と けい"], ["大事", "だい じ"],
        ["面接", "めん せつ"], ["遅刻", "ち こく"], ["動画", "どう が"],
        ["仕事", "し ごと"], ["病気", "びょう き"], ["出席", "しゅっ せき"],
        ["夏休み", "なつ やす"], ["図書", "と しょ"], ["勉強", "べん きょう"],
        ["留守", "る す"], ["友達", "とも だち"], ["訪ね", "たず"],
        ["見合", "み あ"], ["魔法使", "ま ほう つか"], ["冷蔵庫", "れい ぞう こ"],
        ["歌手", "か しゅ"], ["上手", "じょう ず"], ["無理", "む り"],
        ["会社", "かい しゃ"], ["自分", "じ ぶん"], ["部下", "ぶ か"],
        ["命令", "めい れい"], ["説明", "せつ めい"], ["書い", "か"],
        ["家具", "か ぐ"], ["組み立てる", "く た"], ["健康", "けん こう"],
        ["過ごせ", "す"], ["野菜", "や さい"], ["食べる", "た"],
        ["最近", "さい きん"], ["寝不足", "ね ぶ そく"], ["毎晩", "まい ばん"],
        ["調子", "ちょう し"],

        // Words and inflected forms used by the page-specific extra examples.
        ["天気予報", "てん き よ ほう"], ["週末", "しゅう まつ"], ["雪", "ゆき"],
        ["寮", "りょう"], ["夜", "よる"], ["十一時", "じゅう いち じ"],
        ["戻る", "もど"], ["相手", "あい て"], ["迷惑", "めい わく"],
        ["声", "こえ"], ["出して", "だ"], ["読む", "よ"],
        ["発音", "はつ おん"], ["自然", "し ぜん"], ["忙しい", "いそが"],
        ["時", "とき"], ["朝", "あさ"], ["飯", "はん"], ["食べない", "た"],
        ["三時", "さん じ"], ["真夏", "ま なつ"], ["満員", "まん いん"],
        ["暑い", "あつ"], ["息", "いき"], ["旅行", "りょ こう"],
        ["好き", "す"], ["彼女", "かの じょ"], ["彼", "かれ"],
        ["休み", "やす"], ["海外", "かい がい"], ["行く", "い"],
        ["金曜日", "きん よう び"], ["提出", "てい しゅつ"], ["語学学習", "ご がく がく しゅう"],
        ["大切", "たい せつ"], ["続ける", "つづ"], ["一度", "いち ど"],
        ["振り返る", "ふ かえ"], ["駅", "えき"], ["向かった", "む"],
        ["驚いた", "おどろ"], ["難問", "なん もん"], ["五分", "ご ふん"],
        ["解いた", "と"], ["知らせ", "し"], ["待った", "ま"],
        ["失敗", "しっ ぱい"], ["落ち込む", "お こ"], ["手伝えない", "て つだ"],
        ["体", "からだ"], ["本人", "ほん にん"], ["確認", "かく にん"],
        ["本当", "ほん とう"], ["直そう", "なお"], ["英語", "えい ご"],
        ["中国語", "ちゅう ごく ご"], ["流暢", "りゅう ちょう"], ["親", "おや"],
        ["子", "こ"], ["元気", "げん き"], ["遊ん", "あそ"], ["夜更かし", "よ ふ"], ["越した", "こ"],
        ["許し", "ゆる"], ["道", "みち"], ["迷った", "まよ"],
        ["到着", "とう ちゃく"], ["見て", "み"], ["高い", "たか"],
        ["商品", "しょう ひん"], ["必ず", "かなら"], ["良い", "よ"],
        ["薬", "くすり"], ["飲んだ", "の"], ["熱", "ねつ"],
        ["下がら", "さ"], ["遅れる", "おく"], ["危険", "き けん"],
        ["山", "やま"], ["登る", "のぼ"], ["困って", "こま"],
        ["人", "ひと"], ["助ける", "たす"], ["人情", "にん じょう"],
        ["行き", "い"], ["絵", "え"], ["見る", "み"],
        ["心", "こころ"], ["引きつける", "ひ"], ["会える", "あ"],
        ["祖父", "そ ふ"], ["無茶", "む ちゃ"], ["要求", "よう きゅう"],
        ["受け入れられる", "う い"], ["秘密", "ひ みつ"], ["他人", "た にん"],
        ["話そう", "はな"], ["信用", "しん よう"], ["失う", "うしな"],
        ["少し", "すこ"], ["簡単", "かん たん"], ["助けられた", "たす"],
        ["禁煙", "きん えん"], ["体調", "たい ちょう"], ["一週間", "いっ しゅう かん"],
        ["雨", "あめ"], ["日", "ひ"], ["続いて", "つづ"],
        ["数々", "かず かず"], ["困難", "こん なん"], ["研究", "けん きゅう"],
        ["完成", "かん せい"], ["実際", "じっ さい"], ["使って", "つか"],
        ["思った", "おも"], ["操作", "そう さ"], ["電話", "でん わ"],
        ["城", "しろ"], ["形", "かたち"], ["鶴", "つる"],
        ["似て", "に"], ["町", "まち"], ["呼ば", "よ"],
        ["鶴城", "つる じょう"], ["表情", "ひょう じょう"], ["明るい", "あか"],
        ["判断", "はん だん"], ["飛び乗って", "と の"], ["危うく", "あや"],
        ["転ぶ", "ころ"], ["売り上げ", "う あ"], ["伸びた", "の"],
        ["新しい", "あたら"], ["広告", "こう こく"], ["戦略", "せん りゃく"],
        ["申し", "もう"], ["訳", "わけ"], ["今", "いま"],
        ["謝った", "あやま"], ["信頼", "しん らい"], ["戻ら", "もど"],
        ["私", "わたし"], ["答え", "こた"], ["問題", "もん だい"],
        ["一日", "いち にち"], ["終え", "お"], ["日本語", "に ほん ご"],
        ["日本", "に ほん"], ["住んで", "す"], ["明日", "あ した"],
        ["遊んで", "あそ"], ["荷物", "に もつ"], ["昨日", "き のう"],
        ["届く", "とど"], ["来て", "き"], ["十分前", "じゅっ ぷん まえ"],
        ["着く", "つ"], ["予約", "よ やく"], ["入れない", "はい"],
        ["大雪", "おお ゆき"], ["運休", "うん きゅう"], ["国", "くに"],
        ["守ら", "まも"], ["多く", "おお"], ["立ち上がった", "た あ"],
        ["最後", "さい ご"], ["責任", "せき にん"], ["果たす", "は"],
        ["法律上", "ほう りつ じょう"], ["持ち出せ", "も だ"], ["風", "かぜ"],
        ["強い", "つよ"], ["降って", "ふ"], ["冗談", "じょう だん"],
        ["言った", "い"], ["怒らせ", "おこ"], ["窓", "まど"],
        ["開けた", "あ"], ["寝て", "ね"], ["店", "みせ"],
        ["開く", "あ"], ["客", "きゃく"], ["並び始めた", "なら はじ"],
        ["若い", "わか"], ["挑戦", "ちょう せん"], ["忘れない", "わす"],
        ["夜更かし", "よ ふ"], ["朝寝坊", "あさ ね ぼう"], ["苦手", "にが て"],
        ["文法", "ぶん ぽう"], ["理解", "り かい"], ["車", "くるま"],
        ["修理", "しゅう り"], ["昼", "ひる"], ["母", "はは"],
        ["入院", "にゅう いん"], ["通った", "かよ"], ["外", "そと"],
        ["暗く", "くら"], ["医者", "い しゃ"], ["運動", "うん どう"],
        ["言われた", "い"], ["試合", "し あい"], ["勝て", "か"],
        ["予定", "よ てい"], ["手帳", "て ちょう"], ["書く", "か"],
        ["京都", "きょう と"], ["寺", "てら"], ["神社", "じん じゃ"], ["古い", "ふる"], ["建物", "たて もの"],
        ["多い", "おお"], ["鳥", "とり"], ["軽やか", "かろ"],
        ["踊った", "おど"], ["参加者", "さん か しゃ"], ["少ない", "すく"],
        ["日程", "にっ てい"], ["何", "なに"], ["知ら", "し"],
        ["平然", "へい ぜん"], ["証拠", "しょう こ"], ["責め", "せ"],
        ["入力", "にゅう りょく"], ["自動", "じ どう"], ["保存", "ほ ぞん"],
        ["帰る", "かえ"], ["会員", "かい いん"], ["限り", "かぎ"],
        ["入場料", "にゅう じょう りょう"], ["無料", "む りょう"], ["命", "いのち"],
        ["希望", "き ぼう"], ["捨て", "す"], ["長年", "なが ねん"],
        ["夢", "ゆめ"],

        // Revised examples separating conclusion, hearsay and 「ことにある」.
        ["締め切り", "し き"], ["料金", "りょう きん"], ["一人", "ひと り"],
        ["三千円", "さん ぜん えん"], ["二人分", "ふた り ぶん"], ["六千円", "ろく せん えん"],
        ["制度", "せい ど"], ["目的", "もく てき"], ["子育て", "こ そだ"],
        ["支援", "し えん"],

        // Contexts found during the rendered-page completeness audit.
        ["遅い", "おそ"], ["遅く", "おそ"], ["会いたい", "あ"],
        ["失った", "うしな"], ["出た", "で"], ["法律", "ほう りつ"],
        ["開かない", "あ"], ["挨拶", "あい さつ"], ["間", "あいだ"],

        // The two page-only supplemental grammar entries are plain text in core.
        ["契約書", "けい やく しょ"], ["署名", "しょ めい"], ["紙", "かみ"],
        ["描いた", "か"], ["細かな", "こま"], ["必要", "ひつ よう"],
        ["無口", "む くち"], ["親しい", "した"], ["友人", "ゆう じん"],
        ["前", "まえ"], ["話す", "はな"], ["言われる", "い"],
        ["思う", "おも"], ["大きな", "おお"], ["絵", "え"],

        // Remaining bare target kanji in shared examples.
        ["越", "こ"], ["決", "けっ"], ["上", "うえ"], ["味", "あじ"]
    ];

    const TERM_READINGS = new Map();
    TERM_READING_ROWS.forEach(([term, readings]) => {
        const normalizedReadings = String(readings).trim().split(/\s+/).filter(Boolean);
        const kanjiCount = Array.from(term).filter((character) => KANJI_PATTERN.test(character)).length;
        if (normalizedReadings.length !== kanjiCount) {
            console.warn(`[formal-nouns] Furigana mapping mismatch: ${term}`);
            return;
        }
        TERM_READINGS.set(term, normalizedReadings);
    });

    const SORTED_TERMS = Array.from(TERM_READINGS.keys())
        .sort((left, right) => Array.from(right).length - Array.from(left).length);

    const RUBY_READING_OVERRIDES = new Map([
        ["時計|どけい", ["ど", "けい"]]
    ]);

    function createAnnotatedTerm(documentRef, term, readings) {
        const fragment = documentRef.createDocumentFragment();
        let readingIndex = 0;

        Array.from(term).forEach((character) => {
            if (!KANJI_PATTERN.test(character)) {
                fragment.appendChild(documentRef.createTextNode(character));
                return;
            }

            const ruby = documentRef.createElement("ruby");
            ruby.appendChild(documentRef.createTextNode(character));
            const rt = documentRef.createElement("rt");
            rt.textContent = readings[readingIndex] || "";
            readingIndex += 1;
            ruby.appendChild(rt);
            fragment.appendChild(ruby);
        });

        return fragment;
    }

    function getRubyBase(ruby) {
        return Array.from(ruby.childNodes)
            .filter((node) => node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && !["RT", "RP"].includes(node.tagName)))
            .map((node) => node.textContent || "")
            .join("");
    }

    function splitExistingRuby(root) {
        root.querySelectorAll("ruby").forEach((ruby) => {
            const base = getRubyBase(ruby);
            const rt = ruby.querySelector("rt")?.textContent || "";
            const kanjiCount = Array.from(base).filter((character) => KANJI_PATTERN.test(character)).length;

            if (kanjiCount === 0) {
                ruby.replaceWith(root.ownerDocument.createTextNode(base));
                return;
            }
            if (kanjiCount === 1 && Array.from(base).length === 1) return;

            const readings = RUBY_READING_OVERRIDES.get(`${base}|${rt}`) || TERM_READINGS.get(base);
            if (!readings || readings.length !== kanjiCount) return;
            ruby.replaceWith(createAnnotatedTerm(root.ownerDocument, base, readings));
        });
    }

    function findTermAt(text, offset) {
        return SORTED_TERMS.find((term) => text.startsWith(term, offset)) || "";
    }

    function annotateBareText(root) {
        const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (parent?.closest("ruby, rt, script, style")) return NodeFilter.FILTER_REJECT;
                return KANJI_PATTERN.test(node.nodeValue || "")
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        });
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        textNodes.forEach((textNode) => {
            const text = textNode.nodeValue || "";
            const fragment = root.ownerDocument.createDocumentFragment();
            let offset = 0;
            let changed = false;

            while (offset < text.length) {
                const term = findTermAt(text, offset);
                if (term) {
                    fragment.appendChild(createAnnotatedTerm(root.ownerDocument, term, TERM_READINGS.get(term)));
                    offset += term.length;
                    changed = true;
                    continue;
                }
                fragment.appendChild(root.ownerDocument.createTextNode(text[offset]));
                offset += 1;
            }

            if (changed) textNode.replaceWith(fragment);
        });
    }

    function normalizeGrammarHighlight(root) {
        root.querySelectorAll("span.text-accentRed, span[style*='color']").forEach((span) => {
            span.classList.remove("text-accentRed");
            span.classList.add("formal-grammar-highlight");
            span.removeAttribute("style");

            // 「法律上」uses the suffix reading 「じょう」; the other formal-noun
            // entries on this page use the independent reading 「うえ」.
            const previousText = span.previousSibling?.textContent || "";
            if (span.textContent.trim() === "上" && previousText.endsWith("法律")) {
                span.textContent = "";
                span.appendChild(createAnnotatedTerm(root.ownerDocument, "上", ["じょう"]));
            }
        });
    }

    function format(html) {
        const template = document.createElement("template");
        template.innerHTML = String(html || "");
        normalizeGrammarHighlight(template.content);
        splitExistingRuby(template.content);
        annotateBareText(template.content);
        return template.innerHTML;
    }

    function audit(root = document) {
        const missing = [];
        const grouped = [];
        root.querySelectorAll(".compound-example-jp").forEach((example, exampleIndex) => {
            const walker = document.createTreeWalker(example, NodeFilter.SHOW_TEXT, {
                acceptNode(node) {
                    if (node.parentElement?.closest("ruby, rt")) return NodeFilter.FILTER_REJECT;
                    return KANJI_PATTERN.test(node.nodeValue || "")
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_REJECT;
                }
            });
            while (walker.nextNode()) {
                missing.push({ exampleIndex, text: walker.currentNode.nodeValue });
            }
            example.querySelectorAll("ruby").forEach((ruby) => {
                const base = getRubyBase(ruby);
                if (Array.from(base).filter((character) => KANJI_PATTERN.test(character)).length !== 1) {
                    grouped.push({ exampleIndex, base });
                }
            });
        });
        return { missing, grouped };
    }

    window.FormalNounExampleFormatter = Object.freeze({ format, audit });
}());
