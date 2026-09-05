(() => {
  "use strict";

  const catalog = Array.isArray(window.tryN2LessonCatalog) ? window.tryN2LessonCatalog : [];
  const dictData = window.tryN2DictData || {};
  const vocabData = window.tryN2VocabData || Object.create(null);
  const vocabExampleRubyMap = window.tryN2VocabExampleRubyMap || Object.create(null);
  const bundles = window.tryN2LessonBundles = window.tryN2LessonBundles || {};
  const practiceBundles = window.tryN2PracticeBundles = window.tryN2PracticeBundles || {};
  const SHADOWING_TIMELINES = window.tryN2ShadowingTimelines || Object.create(null);
  const SHADOWING_DIALOGUE_LESSONS = new Set([5, 6, 8, 9, 12]);
  const LESSON_THIRTEEN_SHADOWING_GROUPS = {
    0: [
      ["「あれ？", "悲鳴が聞こえた。"],
      ["そして男女の争う声。", "黙れ！」"],
      ["そしてその家のドアの前まで来たとき", "という低い男の声。"],
      ["そして「助けてー！」", "という女性の声——。"],
    ],
    1: [
      ["眩しい光の中で「誰だ、お前は！", "と低い声の男が俺に問いかけた。"],
      ["「あれ？", "これって、映画？」"],
      ["「違う！", "…そうだ、いいぞ」"],
    ],
  };
  const localDictData = {};
  const loadedScripts = new Map();
  const patternPracticeStates = new Map();
  const practiceStates = new Map();
  const collapsedLessonSections = new Set();
  const mobileQuery = window.matchMedia("(max-width: 980px)");
  const lessonSections = [
    ["text", "课文"],
    ["vocab", "語彙"],
    ["patterns", "文型"],
    ["practice", "練習問題"],
  ];
  const VOCAB_POS_GROUPS = Object.freeze([
    ["noun", "名词"],
    ["noun-verb", "名词・サ变"],
    ["verb", "动词"],
    ["i-adjective", "い形容词"],
    ["na-adjective", "な形容词"],
    ["adverb", "副词"],
    ["adnominal", "连体词"],
    ["pronoun", "代词"],
    ["word-forming", "构词成分"],
    ["expression", "惯用表达"],
    ["unclassified", "待分类"],
  ]);
  const VOCAB_POS_LABELS = Object.freeze(Object.fromEntries(VOCAB_POS_GROUPS));
  const VOCAB_POS_ORDER = Object.freeze(Object.fromEntries(VOCAB_POS_GROUPS.map(([key], index) => [key, index])));
  const WORD_BANK_STORAGE_KEY = "kikiWordBankEntriesV1";
  const WORD_BANK_MAX_ENTRIES = 600;
  const PATTERN_MISTAKE_STORAGE_KEY = "tryN2PatternPracticeMistakesV1";
  const PRACTICE_SUBMISSION_STORAGE_KEY = "tryN2PracticeSubmissionsV1";
  const LEGACY_PATTERN_MISTAKE_STORAGE_KEYS = ["n2_mistakes"];
  const CONTENT_VERSION = "20260831-example-audio-sprites2";
  const TEXTBOOK_EXAMPLE_AUDIO_SOURCES = window.tryN2TextbookExampleAudioSources || Object.freeze({});
  const TEXTBOOK_EXAMPLE_AUDIO_RATES = Object.freeze([0.8, 1]);
  const TEXTBOOK_EXAMPLE_CONTINUOUS_GAP_MS = 550;
  const GRAMMAR_SEQUENCE_SYMBOLS = [
    "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿",
    "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴",
  ];
  const GRAMMAR_LIBRARY_TITLE_ALIASES = {
    nomoto: "～のもとで / ～のもとに",
    wotoshita: "～を～として / ～を～とする / ～を～とした",
    wakedahearimasen: "～わけではない / ～わけではありません",
    kagiri: "～限り（は）",
    zaruwoenai: "～ざるを得ない",
    nitomonai: "～にともない / ～にともなって",
    dokorojanai: "～どころじゃない / ～どころではない",
    monjanai: "～もんじゃない / ～ものではない",
    mon: "～もん / ～もの",
    nishitagatte: "～にしたがって / ～にしたがい",
    lesson7_ni_tsurete: "～につれて / ～につれ",
    uru: "～得（う）る / ～得（え）ない",
    hanmen: "～反面 / ～半面",
    gonegaemasu: "ご～願います / お～願います",
    gomoushiage: "ご～申し上げる / お～申し上げる",
    batoomoimasu: "～ばと思う / ～たらと思う",
    kakanouchini: "～か～かのうちに",
    nikagiru: "～に限る",
    nishironishiro: "～にしろ～にしろ / ～にせよ～にせよ",
    nisotte: "～に沿って / ～に沿い",
    tsutsumo: "～つつ / ～つつも",
    toshitara: "～としたら / ～とすれば / ～とすると",
    uede: "～上で",
    tsumori_l20: "～つもりだ / ～つもりで",
    tenaranai: "〜てならなかった",
    mononara: "〜れるものなら",
    ukamaika: "〜こうか〜まいか",
    monoda: "～ものだ",
    wakeda_l22: "～わけだ",
    niatatte: "〜にあたって / 〜に際して",
  };
  const QUICK_GRAMMAR_USAGE_OVERRIDES = {
    wohajime: "先举出最有代表性的前项对象，并暗示还包括其他同类对象。",
    hamotoyori: "先把前项作为理所当然的内容，再补充范围更广或程度更高的后项。",
    sai: "表示进行某事或处于某个特定时点，后项常接注意、请求或说明。",
    nikanshite: "用于正式提出话题，说明调查、讨论或说明所针对的对象。",
    nitsukimashite: "用于商务等正式场合，礼貌地提出接下来要说明或处理的话题。",
    nominarazu: "在前项之外追加同类且范围更广或程度更高的后项，后项常与「も」呼应。",
    nomi: "把范围严格限定为前项，语气比「だけ」正式，常见于公告或书面说明。",
    kotonaku: "表示前项动作始终没有发生，并在这种状态下进行后项动作。",
    niatatte: "表示面临重要活动或阶段时，说明为此采取的准备、态度或行动。",
    omieninarimashita: "用于尊敬地表达主语一方来到现场或出现在某处。",
    gonegaemasu: "用于郑重请求对方完成前接动作，常见于正式服务或商务场合。",
    nonannotte: "用于强调前项程度非常高，带有强烈的惊讶、感叹或评价。",
    ttara: "提起某人或某事作为话题，并接着表达惊讶、不满等强烈评价。",
    yarayara: "列举多个同类事物或情况，并暗示此外还有其他内容。",
    ueni: "在前项情况的基础上，再追加同方向的后项情况。",
    tsutsumo: "先承认前项事实，再引出与前项相反或不一致的后项。",
    mononara: "提出一个难以实现的假设，后项常表达愿望、命令或希望采取的行动。",
    tatoetemo: "即使前项假设成立，后项的判断、决定或结果也不会改变。",
    toshitemo: "暂且承认前项假设成立，再说明后项结论仍然不变。",
  };

  const dom = {
    app: document.querySelector(".app"),
    sidebar: document.getElementById("lesson-sidebar"),
    catalog: document.getElementById("lesson-catalog"),
    catalogToggles: document.querySelectorAll('[data-action="toggle-catalog"]'),
    mobileSectionMenu: document.getElementById("mobile-section-menu"),
    workspace: document.querySelector(".workspace"),
    reader: document.querySelector(".reader"),
    readerTitle: document.getElementById("reader-title"),
    readerBody: document.getElementById("article-start"),
    textPanel: document.querySelector('[data-section-panel="text"]'),
    vocabPanel: document.querySelector('[data-section-panel="vocab"]'),
    vocabList: document.getElementById("vocab-list"),
    vocabSort: document.getElementById("vocab-sort"),
    vocabSelfCheck: document.querySelector('[data-action="toggle-vocab-self-check"]'),
    patternPanel: document.querySelector('[data-section-panel="patterns"]'),
    patternList: document.getElementById("pattern-list"),
    patternPracticeToggle: document.querySelector("[data-pattern-practice-toggle]"),
    patternPracticeShell: document.getElementById("pattern-practice-shell"),
    practicePanel: document.querySelector('[data-section-panel="practice"]'),
    practiceContent: document.getElementById("practice-content"),
    audioDock: document.querySelector("[data-audio-dock]"),
    audio: document.querySelector("[data-lesson-audio]"),
    audioPlay: document.querySelector("[data-audio-play]"),
    audioRewind: document.querySelector("[data-audio-rewind]"),
    audioForward: document.querySelector("[data-audio-forward]"),
    audioLabel: document.querySelector("[data-audio-label]"),
    audioCurrent: document.querySelector("[data-audio-current]"),
    audioDuration: document.querySelector("[data-audio-duration]"),
    audioTrack: document.querySelector("[data-audio-track]"),
    audioProgress: document.querySelector("[data-audio-progress]"),
    audioPart: document.querySelector("[data-audio-part]"),
    audioSpeed: document.querySelector("[data-audio-speed]"),
    audioLoop: document.querySelector("[data-audio-loop]"),
    shadowingToggle: document.querySelector(".shadowing-toggle"),
    shadowingPanel: document.querySelector("[data-shadowing-panel]"),
    shadowingProgress: document.querySelector("[data-shadowing-progress]"),
    shadowingStatus: document.querySelector("[data-shadowing-status]"),
    shadowingPrev: document.querySelector("[data-shadowing-prev]"),
    shadowingNext: document.querySelector("[data-shadowing-next]"),
    shadowingOriginal: document.querySelector("[data-shadowing-original]"),
    shadowingSpeed: document.querySelector("[data-shadowing-speed]"),
    shadowingRecord: document.querySelector("[data-shadowing-record]"),
    shadowingPlayback: document.querySelector("[data-shadowing-playback]"),
    shadowingRecording: document.querySelector("[data-shadowing-recording]"),
    detailPopover: document.getElementById("detail-popover"),
    detailSummary: document.getElementById("detail-summary"),
    grammarModal: document.getElementById("grammar-modal"),
    grammarModalTitle: document.getElementById("grammar-modal-title"),
    grammarModalBadges: document.getElementById("grammar-modal-badges"),
    grammarModalBody: document.getElementById("grammar-modal-body"),
  };

  let activeLesson = getLessonFromUrl();
  let activeSection = "text";
  let activeBundle = null;
  let activeDetailAnchor = null;
  let lastGrammarTrigger = null;
  let textbookExampleAudio = null;
  let activeTextbookExampleAudioButton = null;
  let activeTextbookExampleAudioStart = 0;
  let activeTextbookExampleAudioEnd = 0;
  let textbookExampleAudioFrame = 0;
  let textbookExamplePlaybackRateIndex = 1;
  let textbookExampleContinuous = false;
  let textbookExampleTranslationsVisible = false;
  let textbookExampleContinuousTimer = 0;
  let isVocabSelfCheck = false;
  let vocabSortMode = "lesson";
  let lessonLoadToken = 0;
  let audioSources = [];
  let audioPartIndex = 0;
  let audioRateIndex = 1;
  let audioScrubPointerId = null;
  let lessonAudioSentenceIndex = -1;
  let mobileCatalogMenuOpen = false;
  let patternAlignmentFrame = 0;
  let shadowingActive = false;
  let shadowingSentenceIndex = 0;
  let shadowingSegmentEnd = null;
  let shadowingRecorder = null;
  let shadowingRecorderStream = null;
  let shadowingRecordingIndex = -1;
  let shadowingChunks = [];
  let shadowingDiscardOnStop = false;
  const shadowingRecordingUrls = new Map();
  const audioRates = [0.75, 1, 1.25];
  const lessonPageHeaders = {
    1: { genre: "お知らせを読む", titles: ["求人情報"] },
    2: { genre: "スピーチをする", titles: ["転任のあいさつ（１）", "転任のあいさつ（２）"] },
    3: { genre: "説明を聞く", titles: ["ホテルの仕事"] },
    4: { genre: "ニュースを聞く", titles: ["台風情報"] },
    5: { genre: "友達同士の会話", titles: ["就職活動（１）", "就職活動（２）"] },
    6: { genre: "友達同士の会話", titles: ["苦労した5年間（１）", "苦労した5年間（２）"] },
    7: { genre: "論説文を読む", titles: ["オオカミと生態系（１）", "オオカミと生態系（２）"] },
    8: { genre: "ビジネス場面の会話", titles: ["取引先で"] },
    9: { genre: "友達同士の会話", titles: ["食べ放題（１）", "食べ放題（２）"] },
    10: { genre: "エッセーを読む", titles: ["満員電車（１）", "満員電車（２）"] },
    11: { genre: "記事を読む", titles: ["ラーメンの紹介"] },
    12: { genre: "ビジネス場面の会話", titles: ["ウォーキングシューズの開発（１）", "ウォーキングシューズの開発（２）"] },
    13: { genre: "ストーリーを読む", titles: ["人生の転機（１）", "人生の転機（２）"] },
    14: { genre: "社説を読む", titles: ["オリンピックの開催について"] }
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizeText(value, limit = 800) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function syncCatalogToggle() {
    if (!dom.catalogToggles?.length) return;
    const collapsed = mobileQuery.matches
      ? dom.sidebar?.classList.contains("mobile-collapsed")
      : dom.app?.classList.contains("catalog-collapsed");
    const collapseLabel = mobileQuery.matches ? "收起课程目录" : "向左收起课程目录";
    dom.catalogToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.setAttribute("aria-label", collapsed ? "展开课程目录" : collapseLabel);
      toggle.title = collapsed ? "展开课程目录" : "收起课程目录";
    });
  }

  function toggleCatalog() {
    if (mobileQuery.matches) {
      dom.sidebar?.classList.toggle("mobile-collapsed");
      if (dom.sidebar?.classList.contains("mobile-collapsed")) mobileCatalogMenuOpen = false;
      renderMobileSectionMenu();
    } else {
      dom.app?.classList.toggle("catalog-collapsed");
    }
    syncCatalogToggle();
  }

  function htmlToText(markup, limit = 800) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "").replace(/<br\s*\/?>/gi, "\n");
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function htmlWithoutRubyReadings(markup, limit = 800) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    template.content.querySelectorAll("rt, rp").forEach((node) => node.remove());
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function htmlToFuriganaAnnotation(markup, limit = 1200) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    Array.from(template.content.querySelectorAll("ruby")).forEach((ruby) => {
      const reading = Array.from(ruby.querySelectorAll("rt"))
        .map((node) => node.textContent || "")
        .join("");
      const base = ruby.cloneNode(true);
      base.querySelectorAll("rt, rp").forEach((node) => node.remove());
      const text = String(base.textContent || "").trim();
      ruby.replaceWith(document.createTextNode(reading && text ? `${text}[${reading}]` : text));
    });
    template.content.querySelectorAll("rt, rp").forEach((node) => node.remove());
    return normalizeText(template.content.textContent, limit);
  }

  function formatAudioTime(value) {
    const seconds = Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : 0;
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function getAudioPartName(index = audioPartIndex) {
    if (audioSources.length <= 1) return "";
    if (audioSources.length === 2) return index === 0 ? "上篇" : "下篇";
    return `第${index + 1}篇`;
  }

  function setAudioPlaying(isPlaying) {
    const use = dom.audioPlay?.querySelector("use");
    use?.setAttribute("href", isPlaying ? "#icon-pause" : "#icon-play");
    dom.audioPlay?.setAttribute("aria-label", isPlaying ? "暂停课文音频" : "播放课文音频");
  }

  function syncAudioUi() {
    if (!dom.audio) return;
    const duration = Number.isFinite(dom.audio.duration) ? dom.audio.duration : 0;
    const current = Number.isFinite(dom.audio.currentTime) ? dom.audio.currentTime : 0;
    const progress = duration > 0 ? Math.min(100, Math.max(0, current / duration * 100)) : 0;
    if (dom.audioCurrent) dom.audioCurrent.textContent = formatAudioTime(current);
    if (dom.audioDuration) dom.audioDuration.textContent = formatAudioTime(duration);
    if (dom.audioProgress) dom.audioProgress.style.width = `${progress}%`;
    if (dom.audioTrack) {
      dom.audioTrack.setAttribute("aria-valuenow", String(Math.round(progress)));
      dom.audioTrack.setAttribute("aria-valuetext", `${formatAudioTime(current)} / ${formatAudioTime(duration)}`);
    }
  }

  function updateAudioControls() {
    const partName = getAudioPartName();
    if (dom.audioLabel) dom.audioLabel.textContent = partName ? `课文音频 · ${partName}` : "课文音频";
    if (dom.audioPart) {
      dom.audioPart.hidden = audioSources.length <= 1;
      dom.audioPart.textContent = partName;
      dom.audioPart.setAttribute("aria-label", audioSources.length > 1 ? `当前${partName}，点击切换篇章` : "课文音频");
    }
    if (dom.audioSpeed) dom.audioSpeed.textContent = `${audioRates[audioRateIndex]}×`;
    if (dom.shadowingSpeed) {
      const rate = audioRates[audioRateIndex];
      dom.shadowingSpeed.textContent = `${rate}×`;
      dom.shadowingSpeed.setAttribute("aria-label", `当前跟读原音速度${rate}倍，点击切换`);
    }
  }

  function cycleAudioRate() {
    audioRateIndex = (audioRateIndex + 1) % audioRates.length;
    if (dom.audio) dom.audio.playbackRate = audioRates[audioRateIndex];
    updateAudioControls();
    if (shadowingActive) setShadowingStatus(`原音速度已切换为 ${audioRates[audioRateIndex]} 倍。`);
  }

  function skipAudioBy(seconds) {
    if (!dom.audio || !audioSources.length || !Number.isFinite(dom.audio.duration)) return;
    clearShadowingAudioSegment();
    dom.audio.currentTime = Math.max(0, Math.min(dom.audio.duration, dom.audio.currentTime + seconds));
    syncAudioUi();
    syncLessonAudioSentenceHighlight({ scroll: !dom.audio.paused });
  }

  function seekAudioFromClientX(clientX) {
    if (!dom.audioTrack || !dom.audio || !Number.isFinite(dom.audio.duration) || dom.audio.duration <= 0) return false;
    const rect = dom.audioTrack.getBoundingClientRect();
    if (rect.width <= 0) return false;
    clearShadowingAudioSegment();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    dom.audio.currentTime = ratio * dom.audio.duration;
    syncAudioUi();
    syncLessonAudioSentenceHighlight({ scroll: !dom.audio.paused });
    return true;
  }

  function loadAudioPart(index, { autoplay = false } = {}) {
    if (!dom.audio || !audioSources.length) return;
    audioPartIndex = Math.max(0, Math.min(audioSources.length - 1, Number(index) || 0));
    dom.audio.pause();
    shadowingSegmentEnd = null;
    clearLessonAudioSentenceHighlight();
    dom.audioPlay.disabled = false;
    dom.audio.src = new URL(audioSources[audioPartIndex], window.location.href).href;
    dom.audio.playbackRate = audioRates[audioRateIndex];
    dom.audio.load();
    setAudioPlaying(false);
    syncAudioUi();
    updateAudioControls();
    if (autoplay) dom.audio.play().catch(() => showToast("课文音频播放失败。"));
  }

  function configureLessonAudio(item) {
    if (!dom.audio) return;
    dom.audio.pause();
    clearLessonAudioSentenceHighlight();
    dom.audio.removeAttribute("src");
    dom.audio.load();
    audioSources = (Array.isArray(item?.audioSrc) ? item.audioSrc : item?.audioSrc ? [item.audioSrc] : [])
      .map((source) => String(source || "").trim())
      .filter(Boolean);
    audioPartIndex = 0;
    audioRateIndex = 1;
    dom.audio.loop = false;
    if (dom.audioLoop) {
      dom.audioLoop.classList.remove("active");
      dom.audioLoop.setAttribute("aria-pressed", "false");
    }
    if (dom.audioDock) dom.audioDock.hidden = !audioSources.length;
    setAudioPlaying(false);
    syncAudioUi();
    updateAudioControls();
    if (audioSources.length) loadAudioPart(0);
  }

  function normalizeGrammarTitle(value) {
    return String(value || "")
      .replace(/[\s\u3000・･〜~～／/（）()\[\]【】。．、,，:：;；\-—―]/g, "")
      .replace(/N|V|A/g, "")
      .toLowerCase();
  }

  function ensureGrammarWaveText(value) {
    return `～${String(value || "").replace(/^\s*[～〜~]+\s*/, "").trim()}`;
  }

  function ensureGrammarWaveMarkup(value) {
    return `～${String(value || "").replace(/^\s*[～〜~]+\s*/, "").trim()}`;
  }

  function formatPatternTitleHtml(markup) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    const plainTitle = htmlWithoutRubyReadings(template.innerHTML);
    if (plainTitle && !/^[～〜~]/.test(plainTitle)) {
      template.content.insertBefore(document.createTextNode("～"), template.content.firstChild);
    }
    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      if (textNode.parentElement?.tagName !== "RT") {
        textNode.nodeValue = textNode.nodeValue.replace(
          /([/／])(\s*)[～〜~]?/g,
          (_, slash, spacing) => `${slash}${spacing}～`,
        );
      }
      textNode = walker.nextNode();
    }
    return template.innerHTML;
  }

  function normalizeGrammarExample(example) {
    if (!example) return null;
    if (typeof example === "string") {
      const split = splitInlineExample(example);
      return split.original ? { ja: split.original, zh: split.translation } : null;
    }
    const ja = String(example.jp || example.ja || example.original || "").trim();
    const zh = String(example.cn || example.zh || example.translation || "").trim();
    return ja ? { ja, zh } : null;
  }

  function getLessonFromUrl() {
    const requested = Number(new URLSearchParams(window.location.search).get("lesson"));
    return catalog.some((item) => item.lesson === requested) ? requested : 1;
  }

  function getCatalogItem(lesson = activeLesson) {
    return catalog.find((item) => item.lesson === Number(lesson)) || catalog[0];
  }

  function formatLessonNumber(lesson) {
    const numerals = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四"];
    return `第${numerals[Number(lesson) - 1] || lesson}课`;
  }

  function loadScript(src, marker) {
    const sourceUrl = new URL(src, window.location.href);
    sourceUrl.searchParams.set("v", CONTENT_VERSION);
    const absolute = sourceUrl.href;
    if (loadedScripts.has(absolute)) return loadedScripts.get(absolute);
    const existing = document.querySelector(`script[data-bundle-src="${CSS.escape(marker || absolute)}"]`);
    const promise = new Promise((resolve, reject) => {
      const script = existing || document.createElement("script");
      const onLoad = () => resolve();
      const onError = () => {
        loadedScripts.delete(absolute);
        if (!existing) script.remove();
        reject(new Error("内容加载失败，请稍后重试。"));
      };
      script.addEventListener("load", onLoad, { once: true });
      script.addEventListener("error", onError, { once: true });
      if (!existing) {
        script.src = absolute;
        script.async = true;
        script.dataset.bundleSrc = marker || absolute;
        document.head.appendChild(script);
      }
    });
    loadedScripts.set(absolute, promise);
    return promise;
  }

  function renderCatalog() {
    if (!dom.catalog) return;
    dom.catalog.innerHTML = catalog.map((item) => {
      const isActive = item.lesson === activeLesson;
      const isExpanded = isActive && (mobileQuery.matches ? mobileCatalogMenuOpen : !collapsedLessonSections.has(item.lesson));
      return `
        <div class="lesson-catalog-item${isActive ? " is-active" : ""}${collapsedLessonSections.has(item.lesson) ? " is-sections-collapsed" : ""}" data-catalog-lesson="${item.lesson}">
          <button class="lesson-catalog-button" type="button" data-open-lesson="${item.lesson}" aria-expanded="${isExpanded}">
            <span class="lesson-catalog-number">${formatLessonNumber(item.lesson)}：</span>
            <span class="lesson-catalog-name">${escapeHtml(item.title)}</span>
            <svg class="icon lesson-catalog-chevron"><use href="#icon-chevron-right"></use></svg>
          </button>
          <div class="lesson-catalog-sections">
            ${lessonSections.map(([section, label]) => `
              <button type="button" data-section="${section}" class="${section === activeSection ? "active" : ""}">${label}</button>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
    renderMobileSectionMenu();
    if (mobileQuery.matches) {
      requestAnimationFrame(() => {
        dom.catalog?.querySelector(`[data-open-lesson="${activeLesson}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      });
    }
  }

  function renderMobileSectionMenu() {
    if (!dom.mobileSectionMenu) return;
    const visible = mobileQuery.matches && mobileCatalogMenuOpen && !dom.sidebar?.classList.contains("mobile-collapsed");
    dom.mobileSectionMenu.hidden = !visible;
    if (!visible) return;
    dom.mobileSectionMenu.innerHTML = lessonSections.map(([section, label]) => `
      <button type="button" data-section="${section}" class="${section === activeSection ? "active" : ""}">${label}</button>
    `).join("");
  }

  function setDocumentTitle() {
    const item = getCatalogItem();
    if (!item) return;
    document.title = `Try! N2 ${formatLessonNumber(item.lesson)}：${item.title}`;
    if (dom.readerTitle) dom.readerTitle.textContent = item.title;
  }

  function setLessonLoading(message, isError = false) {
    if (!dom.textPanel) return;
    dom.textPanel.innerHTML = isError
      ? `<div class="lesson-load-error">${escapeHtml(message)}<button type="button" data-retry-lesson>重新加载</button></div>`
      : `<div class="lesson-loading">${escapeHtml(message)}</div>`;
  }

  function decorateLessonPages(item) {
    if (!dom.textPanel || !item) return;
    const pageHeader = lessonPageHeaders[item.lesson];
    if (!pageHeader) return;
    dom.textPanel.querySelectorAll(".lesson-fragment").forEach((fragment, index) => {
      const article = fragment.querySelector("article");
      if (!article || article.querySelector(":scope > .lesson-header")) return;
      const header = document.createElement("div");
      header.className = "lesson-header";
      header.innerHTML = `<span>${escapeHtml(pageHeader.genre)}</span><span>${escapeHtml(pageHeader.titles[index] || item.title)}</span>`;
      const holes = document.createElement("div");
      holes.className = "paper-holes";
      holes.setAttribute("aria-hidden", "true");
      article.prepend(holes);
      article.prepend(header);
    });
  }

  function getShadowingTimeline() {
    return SHADOWING_TIMELINES[activeLesson] || [];
  }

  function getShadowingSentences() {
    return Array.from(dom.textPanel?.querySelectorAll("[data-shadowing-sentence]") || []);
  }

  function clearLessonAudioSentenceHighlight() {
    getShadowingSentences().forEach((sentence) => sentence.classList.remove("is-audio-current"));
    lessonAudioSentenceIndex = -1;
  }

  function getLessonAudioSentenceIndex() {
    if (!dom.audio || activeSection !== "text") return -1;
    const timeline = getShadowingTimeline();
    const current = Number(dom.audio.currentTime);
    if (!timeline.length || !Number.isFinite(current)) return -1;
    const partSegments = timeline
      .map((segment, index) => ({ segment, index }))
      .filter(({ segment }) => Number(segment.part || 0) === audioPartIndex);
    if (!partSegments.length || current < Number(partSegments[0].segment.start)) return -1;
    for (let index = partSegments.length - 1; index >= 0; index -= 1) {
      const item = partSegments[index];
      const start = Number(item.segment.start);
      const nextStart = Number(partSegments[index + 1]?.segment.start);
      const end = Number.isFinite(nextStart) ? nextStart : Number(item.segment.end) + 0.25;
      if (current >= start && current < end) return item.index;
    }
    return -1;
  }

  function scrollAudioSentenceIntoView(sentence) {
    if (!sentence || document.hidden) return;
    sentence.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  function syncLessonAudioSentenceHighlight({ scroll = false, forceScroll = false } = {}) {
    const sentences = getShadowingSentences();
    const timeline = getShadowingTimeline();
    if (!sentences.length || sentences.length !== timeline.length) {
      clearLessonAudioSentenceHighlight();
      return;
    }
    const nextIndex = getLessonAudioSentenceIndex();
    const sentenceChanged = nextIndex !== lessonAudioSentenceIndex;
    if (sentenceChanged) {
      sentences.forEach((sentence, index) => sentence.classList.toggle("is-audio-current", index === nextIndex));
      lessonAudioSentenceIndex = nextIndex;
    }
    if (scroll && nextIndex >= 0 && (sentenceChanged || forceScroll)) {
      scrollAudioSentenceIntoView(sentences[nextIndex]);
    }
  }

  function setShadowingStatus(message) {
    if (dom.shadowingStatus) dom.shadowingStatus.textContent = message;
  }

  function revokeShadowingRecordings() {
    shadowingRecordingUrls.forEach((url) => URL.revokeObjectURL(url));
    shadowingRecordingUrls.clear();
    if (!dom.shadowingRecording) return;
    dom.shadowingRecording.pause();
    dom.shadowingRecording.removeAttribute("src");
    dom.shadowingRecording.load();
  }

  function stopShadowingRecorder({ discard = false } = {}) {
    if (!shadowingRecorder || shadowingRecorder.state === "inactive") return;
    shadowingDiscardOnStop = discard;
    shadowingRecorder.stop();
  }

  function clearShadowingAudioSegment() {
    shadowingSegmentEnd = null;
    updateAudioControls();
  }

  function syncShadowingUi({ scroll = false } = {}) {
    const timeline = getShadowingTimeline();
    const sentences = getShadowingSentences();
    const count = Math.min(timeline.length, sentences.length);
    if (!count) return;
    shadowingSentenceIndex = Math.max(0, Math.min(count - 1, shadowingSentenceIndex));
    sentences.forEach((sentence, index) => {
      const selected = index === shadowingSentenceIndex;
      sentence.classList.toggle("is-shadowing-current", selected);
      sentence.setAttribute("aria-current", selected ? "true" : "false");
    });
    if (dom.shadowingProgress) dom.shadowingProgress.textContent = `第 ${shadowingSentenceIndex + 1} / ${count} 句`;
    const isRecording = shadowingRecorder?.state === "recording";
    if (dom.shadowingPrev) dom.shadowingPrev.disabled = isRecording || shadowingSentenceIndex === 0;
    if (dom.shadowingNext) dom.shadowingNext.disabled = isRecording || shadowingSentenceIndex === count - 1;
    if (dom.shadowingPlayback) dom.shadowingPlayback.disabled = isRecording || !shadowingRecordingUrls.has(shadowingSentenceIndex);
    if (dom.shadowingRecord) {
      dom.shadowingRecord.classList.toggle("is-recording", Boolean(isRecording));
      dom.shadowingRecord.setAttribute("aria-pressed", String(Boolean(isRecording)));
      const label = dom.shadowingRecord.querySelector("span");
      if (label) label.textContent = isRecording ? "结束录音" : "录音";
    }
    if (scroll) sentences[shadowingSentenceIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function selectShadowingSentence(index, { scroll = true } = {}) {
    const timeline = getShadowingTimeline();
    if (!timeline.length || shadowingRecorder?.state === "recording") return;
    dom.audio?.pause();
    dom.shadowingRecording?.pause();
    clearShadowingAudioSegment();
    shadowingSentenceIndex = Math.max(0, Math.min(timeline.length - 1, Number(index) || 0));
    setShadowingStatus(shadowingRecordingUrls.has(shadowingSentenceIndex)
      ? "这一句已有录音，可以回听或重新录制。"
      : "先听原音，再录下自己的跟读。");
    syncShadowingUi({ scroll });
  }

  function shadowingText(markup) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    template.content.querySelectorAll("rt, .translation").forEach((node) => node.remove());
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim();
  }

  function isShadowingMarker(value) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    return !text || text.startsWith("（イラスト") || text.startsWith("（出典");
  }

  function createShadowingSentence(markup, sentenceIndex, partIndex, tagName = "span") {
    const sentence = document.createElement(tagName);
    sentence.className = "shadowing-sentence";
    sentence.dataset.shadowingSentence = String(sentenceIndex);
    sentence.dataset.shadowingPart = String(partIndex);
    sentence.tabIndex = -1;
    sentence.innerHTML = markup;
    return sentence;
  }

  function markShadowingSentence(element, sentenceIndex, partIndex) {
    element.classList.add("shadowing-sentence");
    element.dataset.shadowingSentence = String(sentenceIndex);
    element.dataset.shadowingPart = String(partIndex);
    element.tabIndex = -1;
  }

  function mergeShadowingProseChunks(chunks, partIndex) {
    if (activeLesson !== 13) return chunks;
    return (LESSON_THIRTEEN_SHADOWING_GROUPS[partIndex] || []).reduce((grouped, range) => {
      const texts = grouped.map((chunk) => shadowingText(chunk).replace(/\s+/g, ""));
      const startIndex = texts.findIndex((text) => text.startsWith(range[0]));
      const endIndex = texts.findIndex((text, index) => index >= startIndex && text.includes(range[1]));
      if (startIndex < 0 || endIndex < startIndex) return grouped;
      return [
        ...grouped.slice(0, startIndex),
        grouped.slice(startIndex, endIndex + 1).join(""),
        ...grouped.slice(endIndex + 1),
      ];
    }, chunks);
  }

  function directTextGroups(fragment) {
    return Array.from(fragment.querySelectorAll(".text-group")).filter((group) => {
      const parentGroup = group.parentElement?.closest(".text-group");
      return !parentGroup || !fragment.contains(parentGroup);
    });
  }

  function decorateShadowingSentences() {
    if (!dom.textPanel) return false;
    let sentenceIndex = 0;
    dom.textPanel.querySelectorAll(".lesson-fragment").forEach((fragment, partIndex) => {
      directTextGroups(fragment).forEach((group) => {
        const salaryRows = Array.from(group.querySelectorAll(".salary-row"));
        if (salaryRows.length) {
          salaryRows.forEach((row) => {
            if (isShadowingMarker(row.textContent)) return;
            markShadowingSentence(row, sentenceIndex, partIndex);
            sentenceIndex += 1;
          });
          return;
        }

        const translation = Array.from(group.children).find((child) => child.classList.contains("translation"));
        const sourceNodes = Array.from(group.childNodes).filter((node) => (
          !(node.nodeType === Node.ELEMENT_NODE && node.classList.contains("translation"))
        ));
        const staging = document.createElement("div");
        sourceNodes.forEach((node) => staging.appendChild(node.cloneNode(true)));
        const markup = staging.innerHTML;
        if (isShadowingMarker(shadowingText(markup))) return;

        sourceNodes.forEach((node) => node.remove());
        if (SHADOWING_DIALOGUE_LESSONS.has(activeLesson)) {
          group.insertBefore(createShadowingSentence(markup, sentenceIndex, partIndex, "div"), translation || group.firstChild);
          sentenceIndex += 1;
          return;
        }

        const chunks = mergeShadowingProseChunks(
          (markup.match(/[\s\S]*?[。！？](?:[」』”])?|[\s\S]+$/g) || [])
            .filter((chunk) => !isShadowingMarker(shadowingText(chunk))),
          partIndex,
        );
        const sentenceFragment = document.createDocumentFragment();
        chunks.forEach((chunk) => {
          sentenceFragment.appendChild(createShadowingSentence(chunk, sentenceIndex, partIndex));
          sentenceIndex += 1;
        });
        group.insertBefore(sentenceFragment, translation || group.firstChild);
      });
    });
    const matched = sentenceIndex === getShadowingTimeline().length;
    if (!matched) console.warn(`Try! N2 第${activeLesson}课跟读句数不一致：页面 ${sentenceIndex}，时间轴 ${getShadowingTimeline().length}`);
    return matched;
  }

  function syncShadowingAvailability() {
    const available = activeSection === "text"
      && getShadowingTimeline().length > 0
      && getShadowingSentences().length === getShadowingTimeline().length
      && audioSources.length > 0;
    if (dom.shadowingToggle) dom.shadowingToggle.hidden = !available;
    if (!available && shadowingActive) {
      shadowingActive = false;
      stopShadowingRecorder({ discard: true });
      dom.audio?.pause();
      clearShadowingAudioSegment();
    }
    document.body.classList.toggle("shadowing-mode", available && shadowingActive);
    dom.textPanel?.classList.toggle("is-shadowing", available && shadowingActive);
    getShadowingSentences().forEach((sentence) => {
      const interactive = available && shadowingActive;
      sentence.tabIndex = interactive ? 0 : -1;
      if (interactive) {
        sentence.setAttribute("role", "button");
        sentence.setAttribute("aria-label", `选择第${Number(sentence.dataset.shadowingSentence) + 1}句进行跟读`);
      } else {
        sentence.removeAttribute("role");
        sentence.removeAttribute("aria-label");
      }
    });
    if (dom.shadowingPanel) dom.shadowingPanel.hidden = !(available && shadowingActive);
    if (dom.audioDock) {
      dom.audioDock.classList.toggle("is-shadowing-mode", available && shadowingActive);
      dom.audioDock.setAttribute("aria-label", available && shadowingActive ? "逐句跟读控制台" : "课文音频播放器");
    }
    if (dom.shadowingToggle) {
      dom.shadowingToggle.classList.toggle("active", available && shadowingActive);
      dom.shadowingToggle.setAttribute("aria-pressed", String(available && shadowingActive));
    }
  }

  function toggleShadowing() {
    if (!getShadowingTimeline().length || activeSection !== "text") return;
    shadowingActive = !shadowingActive;
    if (shadowingActive) {
      dom.audio?.pause();
      clearShadowingAudioSegment();
      setShadowingStatus(shadowingRecordingUrls.has(shadowingSentenceIndex)
        ? "这一句已有录音，可以回听或重新录制。"
        : "先听原音，再录下自己的跟读。");
    } else {
      stopShadowingRecorder();
      dom.audio?.pause();
      dom.shadowingRecording?.pause();
      clearShadowingAudioSegment();
      setShadowingStatus("先听原音，再录下自己的跟读。");
    }
    syncShadowingAvailability();
    syncShadowingUi();
  }

  function resetShadowing({ clearRecordings = true } = {}) {
    shadowingActive = false;
    shadowingSentenceIndex = 0;
    shadowingSegmentEnd = null;
    stopShadowingRecorder({ discard: clearRecordings });
    if (clearRecordings) revokeShadowingRecordings();
    document.body.classList.remove("shadowing-mode");
    dom.textPanel?.classList.remove("is-shadowing");
    if (dom.shadowingPanel) dom.shadowingPanel.hidden = true;
    if (dom.shadowingToggle) {
      dom.shadowingToggle.hidden = true;
      dom.shadowingToggle.classList.remove("active");
      dom.shadowingToggle.setAttribute("aria-pressed", "false");
    }
    if (dom.audioDock) dom.audioDock.classList.remove("is-shadowing-mode");
    setShadowingStatus("先听原音，再录下自己的跟读。");
  }

  function playShadowingOriginal() {
    const segment = getShadowingTimeline()[shadowingSentenceIndex];
    if (!segment || !dom.audio) return;
    dom.shadowingRecording?.pause();
    dom.audio.pause();
    const targetPart = Math.max(0, Math.min(audioSources.length - 1, Number(segment.part) || 0));
    const startPlayback = () => {
      dom.audio.currentTime = segment.start;
      dom.audio.playbackRate = audioRates[audioRateIndex];
      shadowingSegmentEnd = segment.end;
      if (dom.audioLabel) dom.audioLabel.textContent = `原音 · 第${shadowingSentenceIndex + 1}句`;
      setShadowingStatus("正在播放原音，请注意语速、停顿和语调。");
      dom.audio.play().catch(() => {
        clearShadowingAudioSegment();
        showToast("当前句原音播放失败。");
      });
    };
    if (targetPart !== audioPartIndex) {
      dom.audio.addEventListener("loadedmetadata", startPlayback, { once: true });
      loadAudioPart(targetPart);
      return;
    }
    if (dom.audio.readyState >= 1) startPlayback();
    else dom.audio.addEventListener("loadedmetadata", startPlayback, { once: true });
  }

  async function startShadowingRecording() {
    if (!shadowingActive || !navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      showToast("当前浏览器无法使用录音功能。");
      return;
    }
    try {
      dom.audio?.pause();
      dom.shadowingRecording?.pause();
      clearShadowingAudioSegment();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeCandidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];
      const mimeType = mimeCandidates.find((candidate) => MediaRecorder.isTypeSupported(candidate)) || "";
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      shadowingRecorder = recorder;
      shadowingRecorderStream = stream;
      shadowingRecordingIndex = shadowingSentenceIndex;
      shadowingChunks = [];
      shadowingDiscardOnStop = false;
      recorder.addEventListener("dataavailable", (event) => {
        if (event.data?.size) shadowingChunks.push(event.data);
      });
      recorder.addEventListener("stop", () => {
        const recordedIndex = shadowingRecordingIndex;
        if (!shadowingDiscardOnStop && shadowingChunks.length) {
          const previousUrl = shadowingRecordingUrls.get(recordedIndex);
          if (previousUrl) URL.revokeObjectURL(previousUrl);
          const blob = new Blob(shadowingChunks, { type: recorder.mimeType || "audio/webm" });
          shadowingRecordingUrls.set(recordedIndex, URL.createObjectURL(blob));
          if (recordedIndex === shadowingSentenceIndex) setShadowingStatus("录音完成。现在可以回听，或再录一次。");
        }
        stream.getTracks().forEach((track) => track.stop());
        shadowingRecorder = null;
        shadowingRecorderStream = null;
        shadowingChunks = [];
        shadowingRecordingIndex = -1;
        shadowingDiscardOnStop = false;
        syncShadowingUi();
      }, { once: true });
      recorder.start();
      setShadowingStatus("录音中。读完后再次点击录音按钮结束。");
      syncShadowingUi();
    } catch (error) {
      shadowingRecorderStream?.getTracks().forEach((track) => track.stop());
      shadowingRecorderStream = null;
      shadowingRecorder = null;
      showToast("无法使用麦克风，请检查浏览器录音权限。");
      setShadowingStatus("麦克风未开启，仍可继续听原音练习。");
      syncShadowingUi();
    }
  }

  function toggleShadowingRecording() {
    if (shadowingRecorder?.state === "recording") stopShadowingRecorder();
    else startShadowingRecording();
  }

  function playShadowingRecording() {
    const url = shadowingRecordingUrls.get(shadowingSentenceIndex);
    if (!url || !dom.shadowingRecording) return;
    dom.audio?.pause();
    clearShadowingAudioSegment();
    dom.shadowingRecording.src = url;
    dom.shadowingRecording.currentTime = 0;
    setShadowingStatus("正在回听你的跟读录音。");
    dom.shadowingRecording.play().catch(() => showToast("录音回放失败。"));
  }

  function resetLessonViews() {
    resetShadowing();
    isVocabSelfCheck = false;
    if (dom.vocabSelfCheck) {
      dom.vocabSelfCheck.textContent = "自检";
      dom.vocabSelfCheck.setAttribute("aria-pressed", "false");
    }
    if (dom.vocabSort) dom.vocabSort.value = vocabSortMode;
    if (dom.vocabList) {
      dom.vocabList.innerHTML = "";
      delete dom.vocabList.dataset.lesson;
      delete dom.vocabList.dataset.sort;
    }
    if (dom.patternList) {
      dom.patternList.innerHTML = "";
      delete dom.patternList.dataset.lesson;
      dom.patternList.hidden = false;
    }
    if (dom.patternPracticeShell) {
      dom.patternPracticeShell.hidden = true;
      dom.patternPracticeShell.innerHTML = "";
    }
    if (dom.practiceContent) dom.practiceContent.innerHTML = "";
    closeDetail();
    closeGrammarModal(false);
  }

  function indexBundleExtras(bundle) {
    Object.keys(localDictData).forEach((key) => delete localDictData[key]);
    (bundle.patterns || []).forEach((pattern) => {
      if (pattern.extraDict) localDictData[pattern.key] = pattern.extraDict;
    });
  }

  async function loadLesson(lesson, { history = "push", section = "text" } = {}) {
    const item = getCatalogItem(lesson);
    if (!item) return;
    const token = ++lessonLoadToken;
    activeLesson = item.lesson;
    collapsedLessonSections.delete(item.lesson);
    activeSection = section;
    activeBundle = null;
    configureLessonAudio(item);
    setDocumentTitle();
    renderCatalog();
    resetLessonViews();
    showSectionShell("text");
    setLessonLoading(`正在加载第${item.lesson}课...`);
    if (history !== "none") {
      const url = new URL(window.location.href);
      url.searchParams.set("lesson", String(item.lesson));
      window.history[history === "replace" ? "replaceState" : "pushState"]({ lesson: item.lesson }, "", url);
    }
    try {
      if (!bundles[item.lesson]) await loadScript(item.lessonSrc, `lesson-${item.lesson}`);
      if (token !== lessonLoadToken) return;
      activeBundle = bundles[item.lesson];
      if (!activeBundle) throw new Error("当前课程数据不存在。");
      indexBundleExtras(activeBundle);
      dom.textPanel.innerHTML = activeBundle.articleHtml || '<div class="lesson-loading">本课暂时没有课文。</div>';
      decorateLessonPages(item);
      decorateShadowingSentences();
      setDocumentTitle();
      showSection(activeSection, false);
      if (dom.readerBody) dom.readerBody.scrollTop = 0;
      if (dom.reader) dom.reader.scrollTop = 0;
      if (mobileQuery.matches) syncCatalogToggle();
    } catch (error) {
      if (token !== lessonLoadToken) return;
      setLessonLoading(error && error.message ? error.message : "课程加载失败。", true);
    }
  }

  function showSectionShell(section) {
    document.querySelectorAll("[data-section-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.sectionPanel !== section;
    });
    if (dom.workspace) dom.workspace.classList.toggle("is-text-section", section === "text");
  }

  function scrollWorkspaceIntoMobileView() {
    if (!dom.workspace) return;
    const headerHeight = document.querySelector(".classic-page-header")?.getBoundingClientRect().height || 0;
    const catalogHeight = document.querySelector(".left-nav:not(.mobile-collapsed)")?.getBoundingClientRect().height || 0;
    const workspaceTop = window.scrollY + dom.workspace.getBoundingClientRect().top;
    window.scrollTo({
      top: Math.max(0, workspaceTop - headerHeight - catalogHeight),
      behavior: "smooth",
    });
  }

  function showSection(section, focusContent = true) {
    activeSection = section;
    if (!activeBundle) {
      renderCatalog();
      return;
    }
    if (section !== "text") dom.audio?.pause();
    closeDetail();
    closeGrammarModal(false);
    showSectionShell(section);
    if (section === "vocab") buildVocabList();
    if (section === "patterns") buildPatternList();
    if (section === "practice") ensurePracticeContent();
    syncShadowingAvailability();
    renderCatalog();
    if (dom.readerBody) dom.readerBody.scrollTop = 0;
    if (dom.reader) dom.reader.scrollTop = 0;
    if (focusContent && !mobileQuery.matches && section !== "text" && dom.reader) {
      dom.reader.focus({ preventScroll: true });
    }
    if (focusContent && mobileQuery.matches && dom.workspace) {
      scrollWorkspaceIntoMobileView();
    }
  }

  function moveResourceReader(delta) {
    if (!dom.reader || activeSection === "text" || mobileQuery.matches) return false;
    const maximum = Math.max(0, dom.reader.scrollHeight - dom.reader.clientHeight);
    if (!maximum) return false;
    const previous = dom.reader.scrollTop;
    dom.reader.scrollTop = Math.max(0, Math.min(maximum, previous + delta));
    return dom.reader.scrollTop !== previous;
  }

  dom.reader?.addEventListener("wheel", (event) => {
    const multiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? dom.reader.clientHeight : 1;
    if (moveResourceReader(event.deltaY * multiplier)) event.preventDefault();
  }, { passive: false });

  dom.reader?.addEventListener("keydown", (event) => {
    if (event.target !== dom.reader || activeSection === "text" || mobileQuery.matches) return;
    const distances = {
      ArrowDown: 48,
      ArrowUp: -48,
      PageDown: dom.reader.clientHeight * 0.82,
      PageUp: -dom.reader.clientHeight * 0.82,
      Home: -dom.reader.scrollHeight,
      End: dom.reader.scrollHeight,
    };
    if (!(event.key in distances)) return;
    if (moveResourceReader(distances[event.key])) event.preventDefault();
  });

  function getDictItem(key) {
    return localDictData[key] || vocabData[key] || dictData[key] || null;
  }

  function getVocabLessons(item) {
    if (Array.isArray(item?.lessons) && item.lessons.length) return item.lessons;
    return Number.isFinite(Number(item?.lesson)) ? [Number(item.lesson)] : [];
  }

  function getVocabLessonOrder(item) {
    const lessonOrder = item?.lessonOrders?.[String(activeLesson)];
    return Number.isFinite(Number(lessonOrder)) ? Number(lessonOrder) : Number(item?.order || 0);
  }

  function getActiveVocabEntries() {
    if (!activeBundle) return [];
    const bundled = activeBundle.vocab || [];
    const seen = new Set(bundled.map((entry) => entry.key));
    const supplemental = Object.values(vocabData)
      .filter((item) => item?.type === "vocab"
        && getVocabLessons(item).includes(activeLesson)
        && !seen.has(item.key))
      .sort((left, right) => getVocabLessonOrder(left) - getVocabLessonOrder(right))
      .map((item) => ({ key: item.key, data: item }));
    const baseEntries = bundled.map((entry) => ({ ...entry, data: getDictItem(entry.key) || {} }))
      .concat(supplemental)
      .map((entry) => {
        const data = entry.data || {};
        const word = String(data.word || entry.title || data.title || entry.key || "");
        const reading = String(data.reading || entry.speakText || "");
        return {
          ...entry,
          title: word,
          titleHtml: data.titleHtml || entry.titleHtml || (reading
            ? `<ruby>${escapeHtml(word)}<rt>${escapeHtml(reading)}</rt></ruby>`
            : escapeHtml(word)),
          speakText: reading || word,
          pos: data.partOfSpeech || entry.pos || "",
          pitch: data.pitch || entry.pitch || "",
          data,
        };
      });
    return baseEntries.flatMap((entry) => {
      const parts = Array.isArray(entry.data?.focusParts) ? entry.data.focusParts : [];
      const focusEntries = parts.map((part, index) => {
        const word = String(part.word || "");
        const reading = String(part.reading || "");
        return {
          key: `${entry.key}--focus-${index + 1}`,
          title: word,
          titleHtml: part.titleHtml || (reading
            ? `<ruby>${escapeHtml(word)}<rt>${escapeHtml(reading)}</rt></ruby>`
            : escapeHtml(word)),
          speakText: reading || word,
          pos: part.partOfSpeech || "",
          pitch: part.pitch || "",
          data: part,
          isFocusPart: true,
          parentWord: entry.title,
        };
      });
      return [entry, ...focusEntries];
    });
  }

  function findBundleEntry(key) {
    if (!activeBundle) return null;
    return [...getActiveVocabEntries(), ...getActivePatternEntries()]
      .find((entry) => entry.key === key) || null;
  }

  function getActivePatternEntries() {
    const entries = Array.isArray(activeBundle?.patterns) ? activeBundle.patterns : [];
    return entries.flatMap((entry, index) => {
      const grammarCode = `${String(activeLesson).padStart(2, "0")}-${index + 1}`;
      const isLessonOneNikagiri = activeLesson === 1 && entry.key === "nikagiri";
      const examples = Array.isArray(entry.examples) ? entry.examples : [];
      const primaryEntry = {
        ...entry,
        grammarCode,
        grammarSequence: index + 1,
        examples: isLessonOneNikagiri ? examples.slice(0, 5) : examples,
      };
      if (!isLessonOneNikagiri) return [primaryEntry];
      return [
        primaryEntry,
        {
          key: "nikagitte_nai",
          title: "〜に限って〜ない",
          titleHtml: "〜に限って〜ない",
          grammarCode: `${grammarCode} 补充`,
          grammarSequence: index + 1,
          grammarFavoriteId: "n2-217",
          libraryId: "n2-217",
          libraryUsageKey: "trusted-exception",
          meaning: "唯独……绝不会……",
          connection: "表示受到信任的人或组织的名词（短语）＋に限って＋否定表达",
          descHtml: "表示说话人非常信任前项所指的人或组织，坚信<b>唯独该对象不会做出后项所说的负面行为</b>。后项通常使用否定形式。",
          examples: examples.slice(5),
          cardExamples: [
            {
              ja: "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby><ruby>感<rt>かん</rt></ruby>の<ruby>強<rt>つよ</rt></ruby>い<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さん<strong>に<ruby>限<rt>かぎ</rt></ruby>って</strong>、<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>もせずに<ruby>休<rt>やす</rt></ruby>むはずがない。",
              zh: "像田中这样责任心强的人，绝不会不联系就请假。",
            },
            {
              ja: "<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>引<rt>ひ</rt></ruby>きしているあの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><strong>に<ruby>限<rt>かぎ</rt></ruby>って</strong>、<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>るはずがない。",
              zh: "唯独那家合作多年的公司，绝不会违背约定。",
            },
          ],
          preferEntryExamples: true,
          isSupplement: true,
          supplementalOf: entry.key,
        },
      ];
    });
  }

  function getDescRows(markup) {
    const rows = {};
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    template.content.querySelectorAll(".desc-row").forEach((row) => {
      const labelNode = row.querySelector(".desc-label");
      const raw = labelNode ? labelNode.textContent : "";
      const label = raw.replace(/[【】\[\]\s]/g, "");
      const value = normalizeText(String(row.textContent || "").replace(raw, ""), 600);
      if (label && value) rows[label] = value;
    });
    return rows;
  }

  function splitExample(markup) {
    const parts = String(markup || "").split(/<br\s*\/?>/i);
    if (parts.length > 1) return { original: parts[0].trim(), translation: parts.slice(1).join(" ").trim() };
    const text = String(markup || "");
    const index = text.lastIndexOf(" （");
    return index >= 0
      ? { original: text.slice(0, index).trim(), translation: text.slice(index).trim() }
      : { original: text.trim(), translation: "" };
  }

  function getVocabContent(data, key) {
    const source = data || {};
    const rows = getDescRows(source.desc);
    const legacyExample = splitExample(source.ex);
    const structuredExample = Array.isArray(source.examples) && source.examples[0]
      ? source.examples[0]
      : {};
    const jaHtml = String(
      structuredExample.jaHtml
      || vocabExampleRubyMap[key]
      || legacyExample.original
      || "",
    ).trim();
    const ja = normalizeText(
      structuredExample.ja || htmlWithoutRubyReadings(jaHtml, 520),
      520,
    );
    const zh = normalizeText(
      structuredExample.zh || htmlToText(legacyExample.translation, 520),
      520,
    ).replace(/^[（(]\s*/, "").replace(/\s*[）)]$/, "");
    return {
      meaning: normalizeText(
        source.meaning || rows["含义"] || rows["中文"] || htmlToText(source.desc, 800),
        800,
      ),
      usage: normalizeText(
        source.usage || source.context || rows["场景"] || rows["用法"] || rows["补充"] || rows["搭配"] || rows["注意"],
        800,
      ),
      example: { ja, jaHtml, zh },
    };
  }

  function rowMarkup(label, value, valueClass = "", htmlValue = false) {
    if (!value) return "";
    const content = htmlValue ? value : escapeHtml(value);
    return `<div class="word-bank-entry-line"><strong>${escapeHtml(label)}</strong><span class="${escapeHtml(valueClass)}">${content}</span></div>`;
  }

  function getWordBankEntries() {
    try {
      const entries = JSON.parse(localStorage.getItem(WORD_BANK_STORAGE_KEY) || "[]");
      return Array.isArray(entries) ? entries : [];
    } catch (error) {
      return [];
    }
  }

  function saveWordBankEntries(entries, detail) {
    const normalized = entries.slice(0, WORD_BANK_MAX_ENTRIES);
    localStorage.setItem(WORD_BANK_STORAGE_KEY, JSON.stringify(normalized));
    window.dispatchEvent(new CustomEvent("kiki-word-bank:changed", { detail: { entries: normalized, ...detail } }));
  }

  function getVocabBankId(key) {
    return `try-n2-l${activeLesson}-vocab-${key}`;
  }

  function isVocabSaved(key) {
    const id = getVocabBankId(key);
    return getWordBankEntries().some((entry) => entry && entry.id === id);
  }

  function makeVocabBankEntry(entry) {
    const data = entry.data || getDictItem(entry.key) || {};
    const content = getVocabContent(data, entry.key);
    const meaningZh = content.meaning || "解释整理中";
    const contextZh = content.usage;
    const meaning = contextZh && !meaningZh.includes(contextZh)
      ? `${meaningZh}${/[。！？!?；;]$/.test(meaningZh) ? "" : "。"}${contextZh}`
      : meaningZh;
    const exampleMarkup = content.example.jaHtml || escapeHtml(content.example.ja);
    const example = content.example.ja;
    const exampleRuby = htmlToFuriganaAnnotation(exampleMarkup, 1200);
    const exampleZh = content.example.zh;
    const now = new Date().toISOString();
    return {
      id: getVocabBankId(entry.key),
      word: htmlWithoutRubyReadings(entry.titleHtml || data.title || entry.key, 90),
      reading: entry.speakText || "",
      partOfSpeech: entry.pos || "",
      accent: entry.pitch || "",
      jlptLevel: "N2",
      meaning,
      meaningZh: "",
      meaningJa: "",
      nuance: "",
      usage: "",
      collocations: [],
      example,
      exampleRuby,
      exampleZh,
      relatedWords: [],
      note: entry.parentWord ? `词内拆解自：${entry.parentWord}` : "",
      tags: ["教材"],
      sourceTitle: `Try! N2 第${activeLesson}課 ${activeBundle.title}`,
      sourceUrl: `daily/try-n2/lesson-content-redesign.html?lesson=${activeLesson}`,
      sourceCategory: "textbook",
      sourceText: [meaning, example, exampleZh].filter(Boolean).join(" "),
      createdAt: now,
      updatedAt: now,
      origin: "textbook",
    };
  }

  function syncLegacyVocabFavorites() {
    const entries = getWordBankEntries();
    let changed = false;
    getActiveVocabEntries().forEach((entry) => {
      const index = entries.findIndex((item) => item && item.id === getVocabBankId(entry.key));
      if (index < 0) return;
      const previous = entries[index];
      const updated = makeVocabBankEntry(entry);
      const isLegacy = !previous.meaning
        || !("partOfSpeech" in previous)
        || !("accent" in previous)
        || !("exampleZh" in previous)
        || previous.partOfSpeech !== updated.partOfSpeech
        || previous.accent !== updated.accent
        || (updated.meaning !== "解释整理中" && previous.meaning === "解释整理中")
        || (updated.example && !previous.example)
        || (updated.exampleZh && !previous.exampleZh);
      if (!isLegacy) return;
      entries[index] = {
        ...previous,
        ...updated,
        collocations: Array.isArray(previous.collocations) && previous.collocations.length
          ? previous.collocations
          : updated.collocations,
        relatedWords: Array.isArray(previous.relatedWords) && previous.relatedWords.length
          ? previous.relatedWords
          : updated.relatedWords,
        note: previous.note || updated.note,
        tags: Array.isArray(previous.tags) && previous.tags.length ? previous.tags : updated.tags,
        createdAt: previous.createdAt || updated.createdAt,
      };
      changed = true;
    });
    if (changed) {
      saveWordBankEntries(entries, { action: "migrate", source: `try-n2-l${activeLesson}` });
    }
  }

  function toggleVocabFavorite(key) {
    const entry = getActiveVocabEntries().find((item) => item.key === key);
    if (!entry) return;
    const wordBankEntry = makeVocabBankEntry(entry);
    const entries = getWordBankEntries();
    const index = entries.findIndex((item) => item && item.id === wordBankEntry.id);
    if (index >= 0) {
      entries.splice(index, 1);
      saveWordBankEntries(entries, { action: "delete", id: wordBankEntry.id });
      showToast("已取消收藏。");
    } else {
      entries.unshift(wordBankEntry);
      saveWordBankEntries(entries, { action: "create", entry: wordBankEntry });
      showToast("已收藏到我推の単語。");
    }
    buildVocabList();
  }

  function showToast(message) {
    let toast = document.getElementById("kiki-word-bank-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "kiki-word-bank-toast";
      toast.className = "kiki-word-bank-toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function speakVocab(key, button) {
    const entry = getActiveVocabEntries().find((item) => item.key === key);
    if (!entry || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showToast("当前浏览器不支持发音。");
      return;
    }
    window.speechSynthesis.cancel();
    document.querySelectorAll(".vocab-pronounce-button.is-speaking").forEach((item) => item.classList.remove("is-speaking"));
    const utterance = new SpeechSynthesisUtterance(entry.speakText || entry.title || key);
    utterance.lang = "ja-JP";
    utterance.rate = 0.95;
    button?.classList.add("is-speaking");
    utterance.onend = () => button?.classList.remove("is-speaking");
    utterance.onerror = () => button?.classList.remove("is-speaking");
    window.speechSynthesis.speak(utterance);
  }

  function getVocabPosGroup(data) {
    const group = String(data?.partOfSpeechGroup || "unclassified");
    return Object.prototype.hasOwnProperty.call(VOCAB_POS_LABELS, group) ? group : "unclassified";
  }

  function buildVocabList() {
    if (!activeBundle || !dom.vocabList) return;
    syncLegacyVocabFavorites();
    if (dom.vocabList.dataset.lesson === String(activeLesson)
      && dom.vocabList.dataset.sort === vocabSortMode
      && dom.vocabList.childElementCount) {
      dom.vocabList.classList.toggle("is-self-check", isVocabSelfCheck);
      return;
    }
    dom.vocabList.dataset.lesson = String(activeLesson);
    dom.vocabList.dataset.sort = vocabSortMode;
    dom.vocabList.className = "resource-list word-bank-list lesson-vocab-bank";
    dom.vocabList.classList.toggle("is-self-check", isVocabSelfCheck);
    dom.vocabList.classList.toggle("is-pos-sorted", vocabSortMode === "pos");
    const records = getActiveVocabEntries().map((entry, lessonIndex) => {
      const data = entry.data || getDictItem(entry.key) || {};
      return { entry, data, lessonIndex, posGroup: getVocabPosGroup(data) };
    });
    if (vocabSortMode === "pos") {
      records.sort((left, right) => {
        const groupDifference = VOCAB_POS_ORDER[left.posGroup] - VOCAB_POS_ORDER[right.posGroup];
        return groupDifference || left.lessonIndex - right.lessonIndex;
      });
    }
    let previousGroup = "";
    dom.vocabList.innerHTML = records.map(({ entry, data, posGroup }) => {
      const content = getVocabContent(data, entry.key);
      const exampleOriginal = content.example.jaHtml || (content.example.ja ? escapeHtml(content.example.ja) : "");
      const saved = isVocabSaved(entry.key);
      const meta = [entry.pos, entry.pitch].filter(Boolean).join("・");
      const meaning = content.meaning;
      const context = content.usage;
      const groupHeading = vocabSortMode === "pos" && previousGroup !== posGroup
        ? `<div class="vocab-pos-group-heading" role="heading" aria-level="3"><span>${escapeHtml(VOCAB_POS_LABELS[posGroup])}</span></div>`
        : "";
      previousGroup = posGroup;
      return `${groupHeading}
        <article class="word-bank-entry-card vocab-bank-card${entry.isFocusPart ? " is-focus-entry" : ""}${saved ? " is-saved" : ""}">
          <div class="word-bank-entry-head">
            <div class="word-bank-entry-word">
              <span class="vocab-word-title">${entry.titleHtml || escapeHtml(data.title || entry.key)}</span>
              ${meta ? `<span class="vocab-word-meta">${escapeHtml(meta)}</span>` : ""}
            </div>
            <div class="word-bank-entry-actions">
              <button type="button" class="word-bank-icon-button vocab-pronounce-button" data-vocab-speak-key="${escapeHtml(entry.key)}" aria-label="发音">
                <svg class="icon"><use href="#icon-sound"></use></svg>
              </button>
              <button type="button" class="vocab-save-status" data-vocab-favorite-key="${escapeHtml(entry.key)}" aria-pressed="${saved}">${saved ? "已收藏" : "收藏"}</button>
            </div>
          </div>
          <div class="word-bank-entry-body">
            ${rowMarkup("说明", meaning, "vocab-answer-content")}
            ${rowMarkup("场景", context, "vocab-answer-content")}
            ${exampleOriginal ? rowMarkup("例句", `<span class="vocab-example-original">${exampleOriginal}</span>${content.example.zh ? `<span class="vocab-example-translation vocab-answer-content">${escapeHtml(content.example.zh)}</span>` : ""}`, "", true) : ""}
          </div>
        </article>`;
    }).join("");
  }

  function getGrammarSearchDataset({ allLessons = false } = {}) {
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (!repo || typeof repo.getSearchDataset !== "function") return [];
    const filters = { level: "N2", bookKey: "try-n2" };
    if (!allLessons) filters.lessonNumber = activeLesson;
    return repo.getSearchDataset(filters) || [];
  }

  function findGrammarSearchItem(entry) {
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (entry.libraryId && repo && typeof repo.getGrammarById === "function") {
      const libraryItem = repo.getGrammarById(entry.libraryId);
      if (libraryItem) return libraryItem;
    }
    const alias = GRAMMAR_LIBRARY_TITLE_ALIASES[entry.key];
    if (alias) {
      const normalizedAlias = normalizeGrammarTitle(alias);
      const aliasedItem = getGrammarSearchDataset({ allLessons: true })
        .find((item) => normalizeGrammarTitle(item.title) === normalizedAlias);
      if (aliasedItem) return aliasedItem;
    }
    const target = normalizeGrammarTitle(entry.title || htmlToText(entry.titleHtml));
    const items = getGrammarSearchDataset();
    let best = null;
    let bestScore = 0;
    items.forEach((item) => {
      const candidate = normalizeGrammarTitle(item.title);
      if (!candidate || !target) return;
      const score = candidate === target ? 1000
        : target.includes(candidate) || candidate.includes(target) ? Math.min(candidate.length, target.length) + 100
          : 0;
      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    });
    if (best) return best;
    return getGrammarSearchDataset({ allLessons: true }).find((item) => {
      const candidate = normalizeGrammarTitle(item.title);
      return candidate === target || (candidate && target && (target.includes(candidate) || candidate.includes(target)));
    }) || null;
  }

  function resolveGrammarDetailData(entry) {
    const data = getDictItem(entry.key) || {};
    const rows = getDescRows(data.desc);
    const library = findGrammarSearchItem(entry);
    const usageSection = entry.libraryUsageKey && Array.isArray(library?.usageSections)
      ? library.usageSections.find((section) => section.key === entry.libraryUsageKey) || null
      : null;
    const libraryExamples = library && Array.isArray(library.examples)
      ? library.examples.map((example) => ({ ja: example.jp || "", zh: example.cn || "" })).filter((example) => example.ja)
      : [];
    const entryExamples = Array.isArray(entry.examples)
      ? entry.examples.map((example) => ({ ja: example.ja || "", zh: example.zh || "" })).filter((example) => example.ja)
      : [];
    const legacyExample = splitExample(data.ex);
    const examples = entry.preferEntryExamples && entryExamples.length
      ? entryExamples
      : libraryExamples.length
        ? libraryExamples
        : entryExamples.length
        ? entryExamples
        : legacyExample.original
          ? [{ ja: legacyExample.original, zh: htmlToText(legacyExample.translation) }]
          : [];
    return { data, rows, library, usageSection, examples };
  }

  function clearPatternCardAlignment() {
    if (!dom.patternList) return;
    dom.patternList.querySelectorAll(".word-bank-entry-head, .word-bank-entry-line").forEach((element) => {
      element.style.minHeight = "";
    });
  }

  function alignPatternCardPairs() {
    cancelAnimationFrame(patternAlignmentFrame);
    patternAlignmentFrame = 0;
    if (!dom.patternList) return;
    clearPatternCardAlignment();
    if (mobileQuery.matches || dom.patternList.hidden) return;
    const cards = Array.from(dom.patternList.querySelectorAll(".pattern-bank-card"));
    if (cards.length < 2) return;
    const columnCount = Math.max(1, getComputedStyle(dom.patternList).gridTemplateColumns.split(/\s+/).filter(Boolean).length);
    const selectors = [
      ".word-bank-entry-head",
      ".word-bank-entry-line:nth-child(1)",
      ".word-bank-entry-line:nth-child(2)",
      ".word-bank-entry-line:nth-child(3)",
      ".word-bank-entry-line:nth-child(4)",
    ];
    for (let start = 0; start < cards.length; start += columnCount) {
      const rowCards = cards.slice(start, start + columnCount);
      selectors.forEach((selector) => {
        const elements = rowCards.map((card) => card.querySelector(selector)).filter(Boolean);
        const maxHeight = Math.max(0, ...elements.map((element) => element.getBoundingClientRect().height));
        elements.forEach((element) => {
          element.style.minHeight = `${Math.ceil(maxHeight)}px`;
        });
      });
    }
  }

  function schedulePatternCardAlignment() {
    cancelAnimationFrame(patternAlignmentFrame);
    patternAlignmentFrame = requestAnimationFrame(() => {
      patternAlignmentFrame = requestAnimationFrame(alignPatternCardPairs);
    });
  }

  function buildPatternList() {
    if (!activeBundle || !dom.patternList) return;
    if (dom.patternList.dataset.lesson === String(activeLesson) && dom.patternList.childElementCount) {
      schedulePatternCardAlignment();
      return;
    }
    dom.patternList.dataset.lesson = String(activeLesson);
    dom.patternList.className = "resource-list word-bank-list lesson-pattern-bank";
    dom.patternList.innerHTML = getActivePatternEntries().map((entry, index) => {
      const { data, rows, library, usageSection, examples } = resolveGrammarDetailData(entry);
      const rawTitleMarkup = entry.titleHtml || escapeHtml(library?.title || data.title || entry.key);
      const patternTitleMarkup = formatPatternTitleHtml(rawTitleMarkup);
      const patternTitle = htmlWithoutRubyReadings(patternTitleMarkup);
      const patternTitleLength = Array.from(patternTitle).length;
      const patternTitleSizeClass = patternTitleLength >= 18 ? " is-compact" : patternTitleLength >= 14 ? " is-long" : "";
      const cardExamples = [];
      const seenExamples = new Set();
      const exampleSources = Array.isArray(entry.cardExamples)
        ? entry.cardExamples
        : entry.preferEntryExamples
          ? examples
          : [...(library?.examples || []), ...getGrammarExtraExamples(library), ...examples];
      exampleSources.forEach((example) => {
        const normalized = normalizeGrammarExample(example);
        const exampleKey = normalized ? htmlToText(normalized.ja) : "";
        if (!normalized || !exampleKey || seenExamples.has(exampleKey) || cardExamples.length >= 2) return;
        seenExamples.add(exampleKey);
        cardExamples.push(normalized);
      });
      const grammarCode = entry.grammarCode || `${String(activeLesson).padStart(2, "0")}-${index + 1}`;
      const grammarFavoriteId = String(
        entry.grammarFavoriteId || {
          lesson7_kara_iuto: "supp-try-n2-kara-iuto",
          omieninarimashita: "supp-try-n2-special-keigo",
        }[entry.key] || library?.canonicalId || library?.id || "",
      ).trim();
      const meaning = entry.meaning || usageSection?.meaning || library?.meaning || rows["含义"] || "";
      const connection = entry.connection || usageSection?.connection || library?.connection || rows["接续"] || "";
      const usageMarkup = entry.descHtml || usageSection?.desc || library?.desc || escapeHtml(rows["语境"] || "");
      const cardClass = entry.isSupplement ? " is-supplement" : "";
      return `
        <article class="word-bank-entry-card pattern-bank-card grammar-study-card${cardClass}">
          <header class="grammar-study-head">
            <span class="grammar-study-code${cardClass}" aria-label="${escapeHtml(grammarCode)}">${escapeHtml(grammarCode)}</span>
            <div class="grammar-study-title-block">
              <div class="grammar-study-title-line">
                <h3 class="pattern-word-title${patternTitleSizeClass}" lang="ja">${patternTitleMarkup}</h3>
                <span class="grammar-study-meaning">${escapeHtml(meaning)}</span>
              </div>
            </div>
            <div class="grammar-study-actions grammar-learning-favorite-slot">
              <button class="grammar-textbook-open grammar-study-textbook" type="button" data-grammar-textbook-key="${escapeHtml(entry.key)}" aria-label="更多例句" title="更多例句">
                <svg class="grammar-study-textbook-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3Z"></path>
                  <path d="M21 18a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2h-5a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3Z"></path>
                </svg>
                <span class="grammar-study-textbook-label">更多例句</span>
              </button>
              <button class="grammar-learning-favorite" type="button" data-grammar-favorite="${escapeHtml(grammarFavoriteId)}" data-grammar-title="${escapeHtml(patternTitle)}">
                <span class="grammar-learning-favorite-icon" aria-hidden="true">☆</span>
                <span class="grammar-learning-favorite-label">收藏</span>
              </button>
            </div>
          </header>
          <div class="grammar-study-body">
            <section class="grammar-study-section grammar-study-connection">
              <h4>接续</h4>
              <p>${escapeHtml(connection)}</p>
            </section>
            <section class="grammar-study-section grammar-study-explanation">
              <h4>用法说明</h4>
              <p>${usageMarkup}</p>
            </section>
            <section class="grammar-study-section grammar-study-examples">
              <h4>例句</h4>
              ${cardExamples.map((example) => `<div class="grammar-study-example-pair">
                <p class="pattern-example-original" lang="ja">${example.ja}</p>
                ${example.zh ? `<p class="pattern-example-translation">${escapeHtml(example.zh)}</p>` : ""}
              </div>`).join("")}
            </section>
          </div>
        </article>`;
    }).join("");
    window.GrammarLearningFavorites?.refresh?.(dom.patternList);
    const state = getPatternPracticeState();
    dom.patternList.hidden = Boolean(state.active);
    dom.patternPracticeShell.hidden = !state.active;
    updatePatternPracticeToggle();
    schedulePatternCardAlignment();
    document.fonts?.ready.then(schedulePatternCardAlignment);
  }

  function openGrammarModal() {
    dom.grammarModal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => {
      const selector = dom.grammarModal.classList.contains("textbook-example-mode")
        ? ".textbook-review-title"
        : ".grammar-modal-close";
      dom.grammarModal.querySelector(selector)?.focus({ preventScroll: true });
    });
  }

  function setTextbookExampleAudioButtonState(button, playing) {
    if (!button) return;
    button.classList.toggle("is-playing", playing);
    button.closest(".grammar-example-card")?.classList.toggle("is-audio-active", playing);
    button.setAttribute("aria-pressed", String(playing));
    button.setAttribute("aria-label", playing ? "暂停本句音频" : "播放本句音频");
    button.title = playing ? "暂停" : "播放本句";
    button.querySelector("use")?.setAttribute("href", playing ? "#icon-pause" : "#icon-sound");
  }

  function updateTextbookExampleControls() {
    const speedButton = dom.grammarModalBody?.querySelector("[data-textbook-example-speed]");
    if (speedButton) {
      const rate = TEXTBOOK_EXAMPLE_AUDIO_RATES[textbookExamplePlaybackRateIndex];
      speedButton.textContent = `${rate}×`;
      speedButton.setAttribute("aria-label", `播放速度 ${rate} 倍，点击切换`);
    }
    const continuousButton = dom.grammarModalBody?.querySelector("[data-textbook-example-continuous]");
    if (continuousButton) {
      continuousButton.classList.toggle("is-active", textbookExampleContinuous);
      continuousButton.setAttribute("aria-pressed", String(textbookExampleContinuous));
      continuousButton.setAttribute("aria-label", textbookExampleContinuous ? "停止连续播放" : "连续播放全部例句");
      continuousButton.querySelector("use")?.setAttribute("href", textbookExampleContinuous ? "#icon-pause" : "#icon-play");
    }
    const translationButton = dom.grammarModalBody?.querySelector("[data-textbook-example-translations]");
    if (translationButton) {
      translationButton.classList.toggle("is-active", textbookExampleTranslationsVisible);
      translationButton.setAttribute("aria-pressed", String(textbookExampleTranslationsVisible));
      translationButton.setAttribute("aria-label", textbookExampleTranslationsVisible ? "隐藏全部译文" : "显示全部译文");
    }
  }

  function setTextbookExampleContinuous(active) {
    textbookExampleContinuous = Boolean(active);
    updateTextbookExampleControls();
  }

  function setTextbookExampleTranslationsVisible(visible) {
    textbookExampleTranslationsVisible = Boolean(visible);
    dom.grammarModalBody?.querySelectorAll("[data-textbook-translation-toggle]").forEach((translation) => {
      translation.classList.toggle("is-hidden", !textbookExampleTranslationsVisible);
      translation.setAttribute("aria-pressed", String(textbookExampleTranslationsVisible));
    });
    updateTextbookExampleControls();
  }

  function stopTextbookExampleAudio({ reset = true, stopContinuous = true } = {}) {
    clearTimeout(textbookExampleContinuousTimer);
    textbookExampleContinuousTimer = 0;
    cancelAnimationFrame(textbookExampleAudioFrame);
    textbookExampleAudioFrame = 0;
    if (textbookExampleAudio) {
      textbookExampleAudio.pause();
      if (reset) textbookExampleAudio.currentTime = activeTextbookExampleAudioStart;
    }
    setTextbookExampleAudioButtonState(activeTextbookExampleAudioButton, false);
    activeTextbookExampleAudioButton = null;
    activeTextbookExampleAudioStart = 0;
    activeTextbookExampleAudioEnd = 0;
    if (stopContinuous) setTextbookExampleContinuous(false);
  }

  function getTextbookExampleAudioSegment(button) {
    const source = button?.dataset.textbookExampleAudio;
    const start = Number(button?.dataset.textbookExampleAudioStart);
    const end = Number(button?.dataset.textbookExampleAudioEnd);
    if (!source || !Number.isFinite(start) || !Number.isFinite(end) || end <= start) return null;
    return { source, start, end };
  }

  function finishTextbookExampleAudioSegment() {
    const finishedButton = activeTextbookExampleAudioButton;
    if (!finishedButton) return;
    cancelAnimationFrame(textbookExampleAudioFrame);
    textbookExampleAudioFrame = 0;
    textbookExampleAudio?.pause();
    const buttons = [...(dom.grammarModalBody?.querySelectorAll("[data-textbook-example-audio]") || [])];
    const nextButton = textbookExampleContinuous
      ? buttons[buttons.indexOf(finishedButton) + 1]
      : null;
    setTextbookExampleAudioButtonState(finishedButton, false);
    activeTextbookExampleAudioButton = null;
    if (nextButton) {
      textbookExampleContinuousTimer = window.setTimeout(() => {
        textbookExampleContinuousTimer = 0;
        if (textbookExampleContinuous) playTextbookExampleAudio(nextButton, { locate: true });
      }, TEXTBOOK_EXAMPLE_CONTINUOUS_GAP_MS);
      return;
    }
    if (textbookExampleAudio) textbookExampleAudio.currentTime = activeTextbookExampleAudioStart;
    activeTextbookExampleAudioStart = 0;
    activeTextbookExampleAudioEnd = 0;
    setTextbookExampleContinuous(false);
  }

  function monitorTextbookExampleAudioSegment() {
    cancelAnimationFrame(textbookExampleAudioFrame);
    textbookExampleAudioFrame = 0;
    if (!textbookExampleAudio || !activeTextbookExampleAudioButton || textbookExampleAudio.paused) return;
    if (textbookExampleAudio.currentTime >= activeTextbookExampleAudioEnd - 0.025) {
      textbookExampleAudio.currentTime = activeTextbookExampleAudioEnd;
      finishTextbookExampleAudioSegment();
      return;
    }
    textbookExampleAudioFrame = requestAnimationFrame(monitorTextbookExampleAudioSegment);
  }

  function getTextbookExampleAudio() {
    if (textbookExampleAudio) return textbookExampleAudio;
    textbookExampleAudio = new Audio();
    textbookExampleAudio.preload = "metadata";
    textbookExampleAudio.addEventListener("ended", finishTextbookExampleAudioSegment);
    textbookExampleAudio.addEventListener("error", () => {
      stopTextbookExampleAudio();
      showToast("本句音频播放失败。");
    });
    return textbookExampleAudio;
  }

  function playTextbookExampleAudio(button, { locate = false } = {}) {
    const segment = getTextbookExampleAudioSegment(button);
    if (!segment) return;
    const audio = getTextbookExampleAudio();
    const resolvedSource = new URL(segment.source, window.location.href).href;
    const buttonChanged = activeTextbookExampleAudioButton !== button;
    const sourceChanged = audio.src !== resolvedSource;
    if (buttonChanged) {
      setTextbookExampleAudioButtonState(activeTextbookExampleAudioButton, false);
      audio.pause();
      activeTextbookExampleAudioButton = button;
    }
    activeTextbookExampleAudioStart = segment.start;
    activeTextbookExampleAudioEnd = segment.end;
    if (sourceChanged) {
      audio.src = resolvedSource;
      audio.load();
    }
    dom.audio?.pause();
    dom.shadowingRecording?.pause();
    window.speechSynthesis?.cancel();
    const startPlayback = () => {
      if (activeTextbookExampleAudioButton !== button) return;
      const outsideSegment = audio.currentTime < segment.start || audio.currentTime >= segment.end - 0.05;
      if (buttonChanged || sourceChanged || outsideSegment) audio.currentTime = segment.start;
      audio.playbackRate = TEXTBOOK_EXAMPLE_AUDIO_RATES[textbookExamplePlaybackRateIndex];
      setTextbookExampleAudioButtonState(button, true);
      if (locate) button.closest(".grammar-example-card")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      audio.play().then(monitorTextbookExampleAudioSegment).catch(() => {
        stopTextbookExampleAudio();
        showToast("本句音频播放失败。");
      });
    };
    if (audio.readyState >= HTMLMediaElement.HAVE_METADATA) startPlayback();
    else audio.addEventListener("loadedmetadata", startPlayback, { once: true });
  }

  function toggleTextbookExampleAudio(button) {
    const audio = getTextbookExampleAudio();
    const segment = getTextbookExampleAudioSegment(button);
    if (!segment) return;
    const isCurrent = activeTextbookExampleAudioButton === button
      && audio.src === new URL(segment.source, window.location.href).href;
    setTextbookExampleContinuous(false);
    if (isCurrent && !audio.paused) {
      audio.pause();
      cancelAnimationFrame(textbookExampleAudioFrame);
      textbookExampleAudioFrame = 0;
      setTextbookExampleAudioButtonState(button, false);
      return;
    }
    playTextbookExampleAudio(button);
  }

  function toggleTextbookExampleContinuous() {
    if (textbookExampleContinuous) {
      stopTextbookExampleAudio();
      return;
    }
    const firstButton = dom.grammarModalBody?.querySelector("[data-textbook-example-audio]");
    if (!firstButton) return;
    stopTextbookExampleAudio({ stopContinuous: false });
    setTextbookExampleContinuous(true);
    playTextbookExampleAudio(firstButton, { locate: true });
  }

  function cycleTextbookExampleSpeed() {
    textbookExamplePlaybackRateIndex = (textbookExamplePlaybackRateIndex + 1) % TEXTBOOK_EXAMPLE_AUDIO_RATES.length;
    if (textbookExampleAudio) textbookExampleAudio.playbackRate = TEXTBOOK_EXAMPLE_AUDIO_RATES[textbookExamplePlaybackRateIndex];
    updateTextbookExampleControls();
  }

  function closeGrammarModal(restoreFocus = true) {
    if (!dom.grammarModal) return;
    stopTextbookExampleAudio();
    dom.grammarModal.hidden = true;
    dom.grammarModal.classList.remove("textbook-example-mode");
    document.body.classList.remove("modal-open");
    if (restoreFocus && lastGrammarTrigger && document.contains(lastGrammarTrigger)) lastGrammarTrigger.focus({ preventScroll: true });
    lastGrammarTrigger = null;
  }

  function getGrammarExtraExamples(library) {
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (!repo || typeof repo.getExtraExamples !== "function" || !Number.isFinite(Number(library?.id))) return [];
    const extraExampleData = repo.getExtraExamples() || {};
    const items = extraExampleData[String(Number(library.id))] || extraExampleData[Number(library.id)];
    return Array.isArray(items) ? items.map((example) => ({ ja: example.jp || "", zh: example.cn || "" })) : [];
  }

  function renderTextbookExampleAudioButton(audioSegment) {
    if (!audioSegment?.src) return "";
    const start = Number(audioSegment.start);
    const end = Number(audioSegment.end);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return "";
    return `<button class="textbook-example-audio" type="button"
      data-textbook-example-audio="${escapeHtml(audioSegment.src)}"
      data-textbook-example-audio-start="${start}"
      data-textbook-example-audio-end="${end}"
      aria-label="播放本句音频" aria-pressed="false" title="播放本句">
      <svg class="icon" aria-hidden="true"><use href="#icon-sound"></use></svg>
    </button>`;
  }

  function renderTextbookExamples(key) {
    const entry = getActivePatternEntries().find((item) => item.key === key);
    if (!entry) return;
    stopTextbookExampleAudio();
    const exampleAudioSources = TEXTBOOK_EXAMPLE_AUDIO_SOURCES[key] || [];
    const examples = Array.isArray(entry.examples) ? entry.examples : [];
    const hasTranslations = examples.some((example) => example.zh);
    const hasAudio = examples.some((example, index) => Boolean(exampleAudioSources[index]));
    const titleMarkup = entry.titleHtml || escapeHtml(entry.title || key);
    textbookExampleTranslationsVisible = false;
    dom.grammarModal.classList.add("textbook-example-mode");
    dom.grammarModalTitle.textContent = "";
    dom.grammarModalBadges.innerHTML = "";
    dom.grammarModalBody.innerHTML = examples.length
      ? `<section class="textbook-review" aria-label="${escapeHtml(entry.title || key)}课文例句">
          <header class="textbook-review-header">
            <div class="textbook-review-heading">
              <h2 class="textbook-review-title" lang="ja" tabindex="-1">${titleMarkup}</h2>
              <p class="textbook-review-subtitle">课文例句 · ${examples.length}句</p>
            </div>
            <div class="textbook-review-tools" aria-label="例句复习工具">
              ${hasTranslations ? `<button class="textbook-review-tool" type="button" data-textbook-example-translations aria-pressed="false">
                <svg class="icon" aria-hidden="true"><use href="#icon-eye"></use></svg><span>译文</span>
              </button>` : ""}
              ${hasAudio ? `<button class="textbook-review-tool textbook-review-speed" type="button" data-textbook-example-speed>1×</button>
              <button class="textbook-review-tool" type="button" data-textbook-example-continuous aria-pressed="false">
                <svg class="icon" aria-hidden="true"><use href="#icon-play"></use></svg><span>连续播放</span>
              </button>` : ""}
            </div>
          </header>
          <div class="grammar-example-list">${examples.map((example, index) => `
            <article class="grammar-example-card" data-textbook-example-index="${index}">
              <span class="textbook-example-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
              <div class="textbook-example-content">
                <div class="grammar-example-jp-line">
                  <span class="grammar-example-jp" lang="ja">${example.ja}</span>
                  ${renderTextbookExampleAudioButton(exampleAudioSources[index])}
                </div>
                ${example.zh ? `<button class="textbook-example-translation is-hidden" type="button" data-textbook-translation-toggle aria-label="显示或隐藏第${index + 1}条译文" aria-pressed="false"><span class="textbook-example-cn">${escapeHtml(example.zh)}</span></button>` : ""}
              </div>
            </article>`).join("")}</div>
        </section>`
      : '<div class="textbook-example-empty">这里还没有添加课文例句。</div>';
    setTextbookExampleTranslationsVisible(false);
    openGrammarModal();
  }

  function positionDetailPopover(anchor) {
    if (!dom.detailPopover || !anchor) return;
    const isMobile = mobileQuery.matches;
    const margin = isMobile ? 10 : 14;
    dom.detailPopover.style.removeProperty("right");
    dom.detailPopover.style.removeProperty("bottom");
    const headerHeight = parseFloat(getComputedStyle(document.body).getPropertyValue("--site-header-height")) || 0;
    let boundary = headerHeight + margin;
    if (isMobile) {
      const stickyElements = [dom.sidebar, document.querySelector(".classic-page-header")];
      boundary = stickyElements.reduce((current, element) => {
        if (!element || element.hidden || getComputedStyle(element).display === "none") return current;
        const rect = element.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return current;
        return Math.max(current, Math.min(rect.bottom + 8, window.innerHeight * 0.32));
      }, margin);
    }
    const audioRect = dom.audioDock && !dom.audioDock.hidden ? dom.audioDock.getBoundingClientRect() : null;
    const bottomBoundary = isMobile && audioRect && audioRect.height > 0 ? audioRect.height + 14 : margin;
    const anchorRect = anchor.getBoundingClientRect();
    const popoverRect = dom.detailPopover.getBoundingClientRect();
    let left = anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2;
    left = Math.max(margin, Math.min(window.innerWidth - popoverRect.width - margin, left));
    let top = anchorRect.top - popoverRect.height - 12;
    let placement = "top";
    if (top < boundary) {
      top = anchorRect.bottom + 12;
      placement = "bottom";
    }
    top = Math.max(boundary, Math.min(window.innerHeight - popoverRect.height - bottomBoundary, top));
    dom.detailPopover.style.left = `${left}px`;
    dom.detailPopover.style.top = `${top}px`;
    dom.detailPopover.style.setProperty(
      "--popover-arrow-x",
      `${Math.max(18, Math.min(popoverRect.width - 18, anchorRect.left + anchorRect.width / 2 - left))}px`
    );
    dom.detailPopover.dataset.placement = placement;
  }

  function firstQuickSentence(value) {
    const text = htmlToText(value, 240)
      .replace(/^[【\[]?[^】\]]{1,8}[】\]]?[：:]\s*/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return "";
    const match = text.match(/^.*?[。！？]|^.*$/);
    return (match?.[0] || text).trim();
  }

  function isGrammarUsageLabel(value) {
    const text = String(value || "")
      .replace(/[。！？；，、：:\s]/g, "")
      .trim();
    if (!text) return true;
    const hasUsageSignal = /表示|用于|用来|强调|限定|列举|提示|说明|接在|后项|前项|常接|表达|描述/.test(text);
    const isRegisterOnly = /相当于|平替|的(?:郑重|正式|礼貌)?(?:口语|书面语|说法|形式)|属于(?:口语|书面语)|丁重語/.test(text);
    return /^(?:口语|书面语?|正式|非正式|常用|固定|惯用|强调|委婉|郑重|文学性)(?:表达|用法|句型|语法)?$/.test(text)
      || /^[「『“\"].+[」』”\"](?:的)?(?:口语|书面语?|正式|非正式)(?:表达|说法|形式)?$/.test(text)
      || /^(?:多|常)?用于(?:郑重|正式|商务|口语|书面)(?:场合|场景|语境)?$/.test(text)
      || /^(?:表示)?(?:逆接|累加|限定|并列|转折|让步假定|口语表达|提示话题)$/.test(text)
      || (isRegisterOnly && !hasUsageSignal);
  }

  function firstContextualUsageSentence(value) {
    const text = htmlToText(value, 320)
      .replace(/^[【\[]?[^】\]]{1,8}[】\]]?[：:]\s*/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return "";
    const sentences = (text.match(/[^。！？]+[。！？]?/g) || [text])
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence && !isGrammarUsageLabel(sentence));
    const usageSentence = sentences.find((sentence) => /表示|用于|用来|强调|限定|列举|提示|说明|接在|后项|前项|常接|描述/.test(sentence));
    return usageSentence || sentences[0] || "";
  }

  function inferQuickGrammarUsageFromMeaning(value) {
    const meaning = firstQuickSentence(value)
      .replace(/[。！？]+$/, "")
      .trim();
    if (!meaning) return "";
    if (/不管|不问|无论/.test(meaning)) return "表示后项不受前项条件影响，无论前项如何都成立。";
    if (/仅限|只有|仅仅|只不过|只/.test(meaning)) return "把后项成立或适用的范围限定在前项。";
    if (/关于|就……|对于/.test(meaning)) return "提出后续说明、调查或讨论所针对的对象。";
    if (/虽然|尽管|即使/.test(meaning)) return "先承认前项，再说明后项仍成立或出现相反结果。";
    if (/随着|伴随/.test(meaning)) return "表示前项发生变化时，后项也随之发生相应变化。";
    if (/因为|由于|原因/.test(meaning)) return "以前项作为原因，说明后项结果成立。";
    if (/一……就|立刻|马上/.test(meaning)) return "表示前项一完成，后项动作随即发生。";
    if (/如果|假如|要是/.test(meaning)) return "先提出假设条件，再说明该条件下的判断或结果。";
    if (/作为|以……为/.test(meaning)) return "说明人或事物在后项中的身份、资格、立场或作用。";
    if (/之前|事先/.test(meaning)) return "表示在前项活动开始前，先完成后项准备或相关动作。";
    if (/之后|以后|末/.test(meaning)) return "表示经过前项过程后，再出现后项结果或采取后项行动。";
    return "";
  }

  function getAnchorSentenceContext(anchor) {
    const group = anchor?.closest?.(".text-group") || anchor?.closest?.("p") || anchor?.parentElement;
    if (!group) return { japanese: "", translation: "" };
    const translation = group.querySelector?.(".translation")?.textContent || "";
    const copy = group.cloneNode(true);
    copy.querySelectorAll?.(".translation, rt").forEach((node) => node.remove());
    return {
      japanese: copy.textContent.replace(/\s+/g, " ").trim(),
      translation: translation.replace(/\s+/g, " ").trim(),
    };
  }

  function resolveContextualGrammarUsage(item, anchor) {
    const context = getAnchorSentenceContext(anchor);
    if (item.key === "tsutsu") {
      return "表示两个动作同时进行；这里指一边加快速度，一边向东移动。";
    }
    if (item.key === "totomoni") {
      if (/\u968f\u7740|\u968f\u4e4b/.test(context.translation)) {
        return "\u8868\u793a\u968f\u7740\u524d\u9879\u53d8\u5316\uff0c\u540e\u9879\u4e5f\u76f8\u5e94\u53d8\u5316\u3002";
      }
      if (/\u4e00\u8d77|\u4e00\u9053|\u5171\u540c|\u4e0e.+\u4e00\u540c/.test(context.translation)) {
        return "\u8868\u793a\u548c\u524d\u9879\u5bf9\u8c61\u4e00\u8d77\u8fdb\u884c\u540e\u9879\u52a8\u4f5c\u3002";
      }
      if (/\u540c\u65f6|\u8fd8\u9700|\u4e5f\u8981|\u4e5f\u9700|\u517c\u987e|\u4e0d\u4ec5/.test(context.translation)
        || /\u3068\u3068\u3082\u306b.+\u306b\u3082/.test(context.japanese)) {
        return "\u8868\u793a\u5e76\u5217\u8865\u5145\uff1a\u5728\u5904\u7406\u524d\u9879\u7684\u540c\u65f6\uff0c\u4e5f\u8981\u517c\u987e\u540e\u9879\u3002";
      }
    }
    return "";
  }

  function resolveQuickGrammarUsage(item, anchor) {
    const contextualUsage = resolveContextualGrammarUsage(item, anchor);
    if (contextualUsage) return contextualUsage;
    if (QUICK_GRAMMAR_USAGE_OVERRIDES[item.key]) return QUICK_GRAMMAR_USAGE_OVERRIDES[item.key];
    const candidates = [
      item.contextZh,
      item.usageZh,
    ];
    for (const candidate of candidates) {
      const usage = firstContextualUsageSentence(candidate);
      if (usage) return usage;
    }
    return inferQuickGrammarUsageFromMeaning(item.meaningZh)
      || "用于连接前后内容，说明两者之间的条件、范围或结果关系。";
  }

  function shortenQuickRecall(value, limit = 54) {
    const text = String(value || "").trim();
    if (text.length <= limit) return text;
    const punctuation = Math.max(
      text.lastIndexOf("，", limit),
      text.lastIndexOf("；", limit),
      text.lastIndexOf("、", limit)
    );
    const end = punctuation >= 28 ? punctuation : limit;
    return `${text.slice(0, end).replace(/[，；、：:\s]+$/, "")}。`;
  }

  function getQuickInsightItem(key, anchor) {
    const entry = findBundleEntry(key);
    const data = getDictItem(key) || {};
    const rows = getDescRows(data.desc);
    const content = getVocabContent(data, key);
    const isGrammar = data.type === "grammar"
      || Boolean((activeBundle?.patterns || []).some((item) => item.key === key))
      || Boolean(anchor?.classList?.contains("grammar-point"));
    const title = htmlToText(data.title || data.word || entry?.titleHtml || entry?.title || key, 80);
    return {
      key,
      type: isGrammar ? "grammar" : "vocab",
      title,
      titleHtml: entry?.titleHtml || escapeHtml(title),
      reading: isGrammar ? "" : entry?.speakText || "",
      pos: isGrammar ? "" : entry?.pos || data.partOfSpeech || "",
      meaningZh: isGrammar ? rows["含义"] || rows["中文"] || "" : content.meaning,
      contextZh: isGrammar ? rows["语境"] || rows["场景"] || rows["用法"] || "" : content.usage,
      usageZh: isGrammar ? rows["语境"] || rows["用法"] || rows["场景"] || "" : content.usage,
    };
  }

  function buildQuickRecallSummary(item, anchor) {
    const title = htmlToText(item.title || item.key, 80);
    const meaning = firstQuickSentence(item.meaningZh);
    const usage = item.type === "grammar"
      ? resolveQuickGrammarUsage(item, anchor)
      : firstQuickSentence(item.contextZh);
    if (item.type === "vocab") {
      const reading = htmlToText(item.reading, 40);
      const readingLabel = reading && reading !== title ? `（${reading}）` : "";
      const posLabel = item.pos ? `${item.pos}。` : "";
      return shortenQuickRecall(`${title}${readingLabel}：${posLabel}${meaning || usage || "用于确认课文中的基本词义。"}`);
    }
    const grammarTitle = `～${title.replace(/^[～〜~]+/, "")}`;
    return shortenQuickRecall(`${grammarTitle}：${usage}`);
  }

  function renderInsight(key, anchor) {
    if (!dom.detailPopover || !dom.detailSummary) return;
    const item = getQuickInsightItem(key, anchor);
    dom.detailSummary.textContent = buildQuickRecallSummary(item, anchor);
    dom.detailPopover.hidden = false;
    activeDetailAnchor = anchor;
    document.querySelectorAll(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point").forEach((point) => point.classList.toggle("active", point === anchor));
    requestAnimationFrame(() => positionDetailPopover(anchor));
  }

  function closeDetail() {
    if (!dom.detailPopover) return;
    dom.detailPopover.hidden = true;
    dom.detailPopover.style.removeProperty("left");
    dom.detailPopover.style.removeProperty("top");
    dom.detailPopover.style.removeProperty("--popover-arrow-x");
    dom.detailPopover.removeAttribute("data-placement");
    activeDetailAnchor = null;
    document.querySelectorAll(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point").forEach((point) => point.classList.remove("active"));
  }

  function toggleFeature(type) {
    if (type === "ruby") document.body.classList.toggle("hide-ruby");
    if (type === "trans") document.body.classList.toggle("show-trans");
    document.querySelectorAll(`[data-toggle="${type}"]`).forEach((button) => {
      const active = type === "ruby" ? !document.body.classList.contains("hide-ruby") : document.body.classList.contains("show-trans");
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function getPatternPracticeState() {
    if (!patternPracticeStates.has(activeLesson)) {
      patternPracticeStates.set(activeLesson, {
        active: false,
        pool: [],
        queue: [],
        wrong: [],
        index: 0,
        score: 0,
        selected: null,
        answered: false,
        complete: false,
        label: "随机练习",
        emptyMessage: "",
        loading: false,
        error: "",
      });
    }
    return patternPracticeStates.get(activeLesson);
  }

  function shuffled(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function beginPatternRound(items, label = "随机练习") {
    const state = getPatternPracticeState();
    state.queue = items.map((item) => ({ ...item, options: item.options.slice() }));
    state.wrong = [];
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.complete = false;
    state.active = true;
    state.label = label;
    state.emptyMessage = "";
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    updatePatternPracticeToggle();
    renderPatternPractice();
  }

  function updatePatternPracticeToggle() {
    const state = getPatternPracticeState();
    if (!dom.patternPracticeToggle) return;
    dom.patternPracticeToggle.disabled = state.loading;
    dom.patternPracticeToggle.setAttribute("aria-expanded", String(state.active));
    dom.patternPracticeToggle.textContent = state.loading ? "加载中..."
      : state.active ? "返回文型"
        : state.error ? "重试加载"
          : "练习一下";
  }

  async function openPatternPractice() {
    const state = getPatternPracticeState();
    if (state.active) {
      state.active = false;
      dom.patternList.hidden = false;
      dom.patternPracticeShell.hidden = true;
      updatePatternPracticeToggle();
      schedulePatternCardAlignment();
      return;
    }
    if (state.pool.length) {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
      return;
    }
    state.loading = true;
    state.error = "";
    updatePatternPracticeToggle();
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    dom.patternPracticeShell.innerHTML = '<div class="pattern-practice-loading">正在加载本课语法选择练习...</div>';
    try {
      if (!window.tryN2QuestionData) {
        await loadScript("data/practice/question-data-n2.js", "pattern-question-data-n2-v1");
      }
      const pool = window.tryN2QuestionData?.[activeLesson]?.choice || [];
      state.pool = pool.filter((item) => (
        item
        && Array.isArray(item.options)
        && item.options.length === 4
        && Number.isInteger(Number(item.answer))
      ));
      if (!state.pool.length) throw new Error("本课暂时没有可用的选择题。");
      state.loading = false;
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    } catch (error) {
      state.loading = false;
      state.error = error?.message || "题库加载失败。";
      dom.patternList.hidden = false;
      dom.patternPracticeShell.innerHTML = `<div class="pattern-practice-error">${escapeHtml(state.error)}<button type="button" data-pattern-practice-action="retry-load">重新加载</button></div>`;
      updatePatternPracticeToggle();
    }
  }

  function emptyPatternMistakeStore() {
    return { version: 1, lessons: {} };
  }

  function readPatternMistakeStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(PATTERN_MISTAKE_STORAGE_KEY) || "null");
      if (!saved || saved.version !== 1 || !saved.lessons || typeof saved.lessons !== "object") {
        return emptyPatternMistakeStore();
      }
      return saved;
    } catch (error) {
      return emptyPatternMistakeStore();
    }
  }

  function writePatternMistakeStore(store) {
    try {
      localStorage.setItem(PATTERN_MISTAKE_STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      // The practice remains usable if local storage is unavailable.
    }
  }

  function clearLegacyPatternMistakeStorage() {
    try {
      LEGACY_PATTERN_MISTAKE_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      // Ignore blocked storage; the new practice never reads legacy keys.
    }
  }

  function getStoredPatternMistakeIds(lesson = activeLesson) {
    const store = readPatternMistakeStore();
    const ids = store.lessons[String(lesson)];
    return new Set(Array.isArray(ids) ? ids.map((value) => String(value)) : []);
  }

  function setPatternMistake(questionId, shouldStore, lesson = activeLesson) {
    const id = String(questionId || "").trim();
    if (!id) return;
    const store = readPatternMistakeStore();
    const lessonKey = String(lesson);
    const ids = new Set(Array.isArray(store.lessons[lessonKey]) ? store.lessons[lessonKey].map(String) : []);
    if (shouldStore) ids.add(id);
    else ids.delete(id);
    if (ids.size) store.lessons[lessonKey] = Array.from(ids);
    else delete store.lessons[lessonKey];
    writePatternMistakeStore(store);
  }

  function getPatternMistakeItems(state) {
    const ids = getStoredPatternMistakeIds();
    return state.pool.filter((item) => ids.has(String(item.id || "")));
  }

  function openPatternMistakes() {
    const state = getPatternPracticeState();
    const mistakes = getPatternMistakeItems(state);
    if (mistakes.length) {
      beginPatternRound(shuffled(mistakes).slice(0, Math.min(10, mistakes.length)), "错题库");
      return;
    }
    state.queue = [];
    state.wrong = [];
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.complete = false;
    state.active = true;
    state.label = "错题库";
    state.emptyMessage = "本课错题库目前为空。";
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    updatePatternPracticeToggle();
    renderPatternPractice();
  }

  function patternTopbar(state) {
    const progress = state.queue.length
      ? `<span>进度 <strong>${Math.min(state.index + 1, state.queue.length)} / ${state.queue.length}</strong></span><span>得分 <strong>${state.score}</strong></span>`
      : "";
    const mistakeCount = getPatternMistakeItems(state).length;
    return `<div class="pattern-practice-topbar"><div class="pattern-practice-meta"><span>${escapeHtml(state.label)}</span>${progress}</div><div class="pattern-practice-tools"><button class="pattern-practice-restart" type="button" data-pattern-practice-action="restart"><span aria-hidden="true">↻</span><span>重新开始</span></button><button class="pattern-practice-mistakes${state.label === "错题库" ? " is-active" : ""}" type="button" data-pattern-practice-action="mistakes" aria-pressed="${state.label === "错题库"}"><span>错题库</span><strong>${mistakeCount}</strong></button></div></div>`;
  }

  function formatPatternExplanation(item) {
    return String(item.explanation || "暂无解析。").split(/\n+/).map((line) => line.trim()).filter(Boolean).map((line) => {
      const translation = line.match(/^(翻译|句意)[：:]\s*(.*)$/);
      return translation
        ? `<p><span class="pattern-practice-explanation-label">句意：</span>${escapeHtml(translation[2])}</p>`
        : `<p>${escapeHtml(line)}</p>`;
    }).join("");
  }

  function renderPatternPractice() {
    const state = getPatternPracticeState();
    if (!state.active || !dom.patternPracticeShell) return;
    if (state.emptyMessage) {
      dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<section class="pattern-practice-result pattern-practice-empty"><h3>错题库</h3><p class="pattern-practice-result-score">${escapeHtml(state.emptyMessage)}</p><div class="pattern-practice-result-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="retry-random">开始随机练习</button></div></section>`;
      return;
    }
    if (state.index >= state.queue.length) {
      state.complete = true;
      const percent = state.queue.length ? Math.round(state.score / state.queue.length * 100) : 0;
      dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<section class="pattern-practice-result"><h3>练习完成</h3><p class="pattern-practice-result-score">本轮答对 <strong>${state.score}</strong> / ${state.queue.length} 题，正确率 ${percent}%。</p><div class="pattern-practice-result-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="retry-random">再练一次</button>${state.wrong.length ? '<button class="pattern-practice-secondary" type="button" data-pattern-practice-action="retry-wrong">错题再练</button>' : ""}</div></section>`;
      updatePatternPracticeToggle();
      return;
    }
    const item = state.queue[state.index];
    const answer = Number(item.answer);
    const options = item.options.map((option, index) => {
      const correct = state.answered && index === answer;
      const wrong = state.answered && index === state.selected && index !== answer;
      return `<button class="pattern-practice-option${correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}" type="button" data-pattern-practice-choice="${index}" ${state.answered ? "disabled" : ""}><span class="pattern-practice-option-number">${index + 1}</span><span>${escapeHtml(option)}</span><span class="pattern-practice-option-status">${correct ? "正确" : wrong ? "错误" : ""}</span></button>`;
    }).join("");
    const feedback = state.answered ? `<div class="pattern-practice-feedback"><div class="pattern-practice-verdict ${state.selected === answer ? "is-correct" : "is-wrong"}">${state.selected === answer ? "回答正确" : `回答错误，正确答案是 ${answer + 1} ${escapeHtml(item.options[answer])}`}</div><div class="pattern-practice-explanation">${formatPatternExplanation(item)}</div><div class="pattern-practice-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="next">${state.index === state.queue.length - 1 ? "查看结果" : "下一题"}</button></div></div>` : "";
    dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<article class="pattern-practice-card"><div class="pattern-practice-question-label">选择最合适的文型</div><h3 class="pattern-practice-question">${item.question || ""}</h3><div class="pattern-practice-options">${options}</div>${feedback}</article>`;
  }

  function answerPatternPractice(index) {
    const state = getPatternPracticeState();
    if (state.answered) return;
    const item = state.queue[state.index];
    state.selected = index;
    state.answered = true;
    if (index === Number(item.answer)) {
      state.score += 1;
      setPatternMistake(item.id, false);
    } else {
      state.wrong.push(item);
      setPatternMistake(item.id, true);
    }
    renderPatternPractice();
  }

  function readPracticeSubmissionStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(PRACTICE_SUBMISSION_STORAGE_KEY) || "{}");
      return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    } catch (_error) {
      return {};
    }
  }

  function normalizePracticeSelection(selected) {
    if (!selected || typeof selected !== "object" || Array.isArray(selected)) return {};
    return Object.fromEntries(Object.entries(selected)
      .filter(([questionId, choice]) => questionId && Number.isInteger(Number(choice)) && Number(choice) >= 0)
      .map(([questionId, choice]) => [questionId, Number(choice)]));
  }

  function loadPracticeSubmission(lesson) {
    const record = readPracticeSubmissionStore()[String(lesson)];
    if (!record || record.submitted !== true) return null;
    return { selected: normalizePracticeSelection(record.selected), submitted: true };
  }

  function savePracticeSubmission() {
    const state = getPracticeState();
    if (!state.submitted) return;
    try {
      const store = readPracticeSubmissionStore();
      store[String(activeLesson)] = {
        submitted: true,
        selected: normalizePracticeSelection(state.selected),
        submittedAt: Date.now(),
      };
      localStorage.setItem(PRACTICE_SUBMISSION_STORAGE_KEY, JSON.stringify(store));
    } catch (_error) {
      // The submitted result remains available for the current session if storage is unavailable.
    }
  }

  function clearPracticeSubmission() {
    try {
      const store = readPracticeSubmissionStore();
      delete store[String(activeLesson)];
      if (Object.keys(store).length) localStorage.setItem(PRACTICE_SUBMISSION_STORAGE_KEY, JSON.stringify(store));
      else localStorage.removeItem(PRACTICE_SUBMISSION_STORAGE_KEY);
    } catch (_error) {
      // Resetting the in-memory state still lets the learner start again.
    }
  }

  function getPracticeState() {
    if (!practiceStates.has(activeLesson)) {
      const saved = loadPracticeSubmission(activeLesson);
      practiceStates.set(activeLesson, {
        selected: saved?.selected || {},
        submitted: Boolean(saved?.submitted),
        loading: false,
        error: "",
      });
    }
    return practiceStates.get(activeLesson);
  }

  function submitPractice() {
    const state = getPracticeState();
    state.submitted = true;
    savePracticeSubmission();
    renderPractice();
  }

  function removeFirstPracticeLabel(markup, pattern) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode && !textNode.nodeValue.trim()) textNode = walker.nextNode();
    if (textNode && pattern.test(textNode.nodeValue)) textNode.nodeValue = textNode.nodeValue.replace(pattern, "");
    return template.innerHTML;
  }

  function normalizePracticePrompt(markup, isStarQuestion) {
    const cleaned = removeFirstPracticeLabel(markup, /^\s*Q\s*\d+[\s\u3000、.．:：)]*\s*/i);
    if (!isStarQuestion) return cleaned;
    const template = document.createElement("template");
    template.innerHTML = cleaned;
    const buttons = Array.from(template.content.querySelectorAll("button"));
    if (buttons.length >= 4) {
      const slotGroup = buttons[0].parentElement;
      if (slotGroup && buttons.every((button) => slotGroup.contains(button))) {
        slotGroup.replaceWith(document.createTextNode("（　　　）（　　　）（　★　）（　　　）"));
      } else {
        buttons[0].before(document.createTextNode("（　　　）（　　　）（　★　）（　　　）"));
        buttons.forEach((button) => button.remove());
      }
    }
    return template.innerHTML;
  }

  function separateLegacyPassageTranslation(group) {
    if (group.translationHtml || !group.introHtml) return;
    const template = document.createElement("template");
    template.innerHTML = group.introHtml;
    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_COMMENT);
    let marker = walker.nextNode();
    while (marker && !/全文翻译|全文翻譯/.test(marker.nodeValue || "")) marker = walker.nextNode();
    if (!marker) return;
    let translationNode = marker.nextSibling;
    while (translationNode && translationNode.nodeType !== Node.ELEMENT_NODE) translationNode = translationNode.nextSibling;
    if (!translationNode) return;
    group.translationHtml = translationNode.innerHTML;
    translationNode.remove();
    marker.remove();
    group.introHtml = template.innerHTML;
  }

  function normalizePracticeBundle(bundle) {
    if (!bundle || bundle.__contentVersion === CONTENT_VERSION) return bundle;
    bundle.groups.forEach((group) => {
      separateLegacyPassageTranslation(group);
      const isStarGroup = group.problem === "問題2" || group.title === "文の組み立て";
      if (isStarGroup) {
        group.introHtml = '次の文の <span>★</span> に入る最もよいものを1・2・3・4から一つ選びなさい。';
      }
      group.questions.forEach((question) => {
        question.starQuestion = Boolean(question.starQuestion || isStarGroup);
        question.prompt = normalizePracticePrompt(question.prompt, question.starQuestion);
        question.options = question.options.map((option) => removeFirstPracticeLabel(
          option,
          /^\s*(?:[1-4１-４]|[A-DＡ-Ｄ])[\s\u3000、.．:：)]+\s*/i,
        ));
        question.explanationHtml = normalizePracticeExplanation(question.explanationHtml);
      });
    });
    bundle.__contentVersion = CONTENT_VERSION;
    return bundle;
  }

  function normalizePracticeExplanation(markup) {
    if (!markup) return "";
    const template = document.createElement("template");
    template.innerHTML = markup;

    template.content.querySelectorAll("h4").forEach((heading) => {
      const label = normalizeText(heading.textContent, 80);
      if (/句意翻译|考点剖析/.test(label)) heading.classList.add("practice-explanation-emphasis");
    });

    template.content.querySelectorAll("li").forEach((item) => {
      const number = item.querySelector(":scope > strong:first-child, :scope > span:first-child");
      const explanation = item.querySelector(":scope > div");
      if (!number || !explanation) return;
      const inlineNumber = document.createElement("span");
      inlineNumber.className = "practice-other-option-number";
      inlineNumber.textContent = normalizeText(number.textContent, 8);
      explanation.classList.add("practice-other-option-line");
      explanation.prepend(inlineNumber, document.createTextNode(" "));
      item.replaceChildren(explanation);
      item.classList.add("practice-other-option");
    });

    return template.innerHTML;
  }

  async function ensurePracticeContent() {
    const item = getCatalogItem();
    const state = getPracticeState();
    if (practiceBundles[activeLesson]) {
      renderPractice();
      return;
    }
    if (state.loading) return;
    state.loading = true;
    dom.practiceContent.innerHTML = '<div class="practice-loading">正在加载本课练习...</div>';
    try {
      await loadScript(item.practiceSrc, `practice-${activeLesson}`);
      state.loading = false;
      if (!practiceBundles[activeLesson]) throw new Error("当前练习数据不存在。");
      renderPractice();
    } catch (error) {
      state.loading = false;
      state.error = error.message || "练习加载失败。";
      dom.practiceContent.innerHTML = `<div class="practice-loading">${escapeHtml(state.error)}<button type="button" data-retry-practice>重新加载</button></div>`;
    }
  }

  function markPracticeBlankNumbers(markup) {
    return String(markup || "").replace(
      /<strong>\s*(\d+)\s*<\/strong>/g,
      '<strong class="practice-blank-number">$1</strong>',
    );
  }

  function renderPractice() {
    const bundle = normalizePracticeBundle(practiceBundles[activeLesson]);
    const state = getPracticeState();
    if (!bundle || !dom.practiceContent) return;
    const answered = Object.keys(state.selected).length;
    let runningIndex = 0;
    const groups = bundle.groups.map((group) => `
      <section class="practice-group">
        <div class="practice-group-title"><span class="practice-problem-label">${escapeHtml(group.problem)}</span><h3>${escapeHtml(group.title)}</h3></div>
        ${group.introHtml ? `<div class="practice-group-intro">${markPracticeBlankNumbers(group.introHtml)}</div>` : ""}
        ${state.submitted && group.translationHtml ? `<div class="practice-passage-translation">${group.translationHtml}</div>` : ""}
        ${group.questions.map((question) => {
          runningIndex += 1;
          const selected = state.selected[question.id];
          const options = question.options.map((option, optionIndex) => {
            const correct = state.submitted && optionIndex === Number(question.answer);
            const wrong = state.submitted && Number(selected) === optionIndex && optionIndex !== Number(question.answer);
            return `<button type="button" class="practice-option${Number(selected) === optionIndex ? " is-selected" : ""}${correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}" data-practice-question="${escapeHtml(question.id)}" data-practice-choice="${optionIndex}" ${state.submitted ? "disabled" : ""}><span class="practice-option-mark"><span class="practice-option-number">${optionIndex + 1}</span><span class="practice-option-text">${option}</span></span></button>`;
          }).join("");
          return `<article class="practice-question${question.starQuestion ? " is-star-question" : ""}" data-practice-id="${escapeHtml(question.id)}"><span class="practice-question-number">${runningIndex}</span><div><div class="practice-question-prompt">${question.prompt}</div><div class="practice-question-options">${options}</div></div>${state.submitted ? `<div class="practice-explanation">${question.explanationHtml || "暂无解析。"}</div>` : ""}</article>`;
        }).join("")}
      </section>`).join("");
    dom.practiceContent.innerHTML = `<div class="practice-sheet"><div class="practice-control-row"><span class="practice-status">${state.submitted ? `已完成 ${bundle.questionCount} / ${bundle.questionCount}` : `已答 ${answered} / ${bundle.questionCount}`}</span><button type="button" data-practice-reset>重新练习</button><button class="practice-submit" type="button" data-practice-submit ${state.submitted ? "disabled" : ""}>${state.submitted ? "已完成交卷" : "提交试卷并查看解析"}</button></div>${groups}<div class="practice-submit-confirm" data-practice-submit-confirm role="dialog" aria-label="确认提交试卷" hidden><strong>确认提交试卷？</strong><span>提交后将显示答案与解析。</span><div class="practice-submit-confirm-actions"><button type="button" data-practice-submit-cancel>取消</button><button type="button" data-practice-submit-confirm-action>确认提交</button></div></div><button class="practice-floating-submit" type="button" data-practice-submit-request aria-label="提交试卷并查看解析" aria-haspopup="dialog" aria-expanded="false" title="提交试卷" ${state.submitted ? "disabled" : ""}><svg class="icon" aria-hidden="true"><use href="#icon-submit"></use></svg></button></div>`;
    requestAnimationFrame(updatePracticeFloatingSubmit);
  }

  function closePracticeSubmitConfirm({ restoreFocus = false } = {}) {
    const panel = dom.practiceContent?.querySelector("[data-practice-submit-confirm]");
    const trigger = dom.practiceContent?.querySelector("[data-practice-submit-request]");
    if (!panel || panel.hidden) return false;
    panel.hidden = true;
    trigger?.setAttribute("aria-expanded", "false");
    trigger?.classList.remove("is-confirming");
    if (restoreFocus && trigger?.classList.contains("is-visible")) trigger.focus();
    return true;
  }

  function openPracticeSubmitConfirm() {
    const panel = dom.practiceContent?.querySelector("[data-practice-submit-confirm]");
    const trigger = dom.practiceContent?.querySelector("[data-practice-submit-request]");
    if (!panel || !trigger || getPracticeState().submitted) return;
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    trigger.classList.add("is-confirming");
    requestAnimationFrame(() => panel.querySelector("[data-practice-submit-confirm-action]")?.focus());
  }

  function updatePracticeFloatingSubmit() {
    const button = dom.practiceContent?.querySelector(".practice-floating-submit");
    if (!button) return;
    const state = getPracticeState();
    const hasStarted = Object.keys(state.selected).length > 0;
    const visible = mobileQuery.matches
      && activeSection === "practice"
      && !state.submitted
      && hasStarted;
    if (!visible) closePracticeSubmitConfirm();
    button.classList.toggle("is-visible", visible);
    button.setAttribute("aria-hidden", String(!visible));
    button.tabIndex = visible ? 0 : -1;
  }

  function resetPractice() {
    const state = getPracticeState();
    state.selected = {};
    state.submitted = false;
    clearPracticeSubmission();
    renderPractice();
  }

  function handlePatternPracticeAction(action) {
    const state = getPatternPracticeState();
    if (action === "back") openPatternPractice();
    if (action === "next" && state.answered) {
      state.index += 1;
      state.selected = null;
      state.answered = false;
      renderPatternPractice();
    }
    if (action === "retry-random") {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    }
    if (action === "retry-wrong" && state.wrong.length) {
      beginPatternRound(state.wrong.slice(), "错题再练");
    }
    if (action === "restart" && state.pool.length) {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    }
    if (action === "mistakes") openPatternMistakes();
    if (action === "retry-load") openPatternPractice();
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-practice-submit-confirm], [data-practice-submit-request]")) {
      closePracticeSubmitConfirm();
    }

    const openLessonButton = event.target.closest("[data-open-lesson]");
    if (openLessonButton) {
      const lesson = Number(openLessonButton.dataset.openLesson);
      if (mobileQuery.matches) {
        if (lesson === activeLesson) {
          mobileCatalogMenuOpen = !mobileCatalogMenuOpen;
          renderCatalog();
        } else {
          mobileCatalogMenuOpen = true;
          loadLesson(lesson, { history: "push", section: "text" });
        }
        return;
      }
      if (lesson === activeLesson) {
        if (collapsedLessonSections.has(lesson)) collapsedLessonSections.delete(lesson);
        else collapsedLessonSections.add(lesson);
        renderCatalog();
      } else {
        loadLesson(lesson, { history: "push", section: "text" });
      }
      return;
    }

    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      if (mobileQuery.matches) mobileCatalogMenuOpen = false;
      showSection(sectionButton.dataset.section);
      return;
    }

    const toggle = event.target.closest("[data-toggle]");
    if (toggle) {
      toggleFeature(toggle.dataset.toggle);
      return;
    }

    const speak = event.target.closest("[data-vocab-speak-key]");
    if (speak) {
      event.preventDefault();
      event.stopPropagation();
      speakVocab(speak.dataset.vocabSpeakKey, speak);
      return;
    }

    const favorite = event.target.closest("[data-vocab-favorite-key]");
    if (favorite) {
      event.preventDefault();
      event.stopPropagation();
      toggleVocabFavorite(favorite.dataset.vocabFavoriteKey);
      return;
    }

    const textbookButton = event.target.closest("[data-grammar-textbook-key]");
    if (textbookButton) {
      lastGrammarTrigger = textbookButton;
      renderTextbookExamples(textbookButton.dataset.grammarTextbookKey);
      return;
    }

    const textbookExampleAudioButton = event.target.closest("[data-textbook-example-audio]");
    if (textbookExampleAudioButton) {
      event.preventDefault();
      event.stopPropagation();
      toggleTextbookExampleAudio(textbookExampleAudioButton);
      return;
    }

    if (event.target.closest("[data-textbook-example-continuous]")) {
      toggleTextbookExampleContinuous();
      return;
    }

    if (event.target.closest("[data-textbook-example-speed]")) {
      cycleTextbookExampleSpeed();
      return;
    }

    if (event.target.closest("[data-textbook-example-translations]")) {
      setTextbookExampleTranslationsVisible(!textbookExampleTranslationsVisible);
      return;
    }

    const translation = event.target.closest("[data-textbook-translation-toggle]");
    if (translation) {
      const hidden = translation.classList.toggle("is-hidden");
      translation.setAttribute("aria-pressed", String(!hidden));
      textbookExampleTranslationsVisible = [...dom.grammarModalBody.querySelectorAll("[data-textbook-translation-toggle]")]
        .every((item) => !item.classList.contains("is-hidden"));
      updateTextbookExampleControls();
      return;
    }

    const practiceChoice = event.target.closest("[data-practice-choice]");
    if (practiceChoice) {
      const state = getPracticeState();
      if (!state.submitted) {
        state.selected[practiceChoice.dataset.practiceQuestion] = Number(practiceChoice.dataset.practiceChoice);
        renderPractice();
      }
      return;
    }

    if (event.target.closest("[data-practice-submit-request]")) {
      openPracticeSubmitConfirm();
      return;
    }

    if (event.target.closest("[data-practice-submit-cancel]")) {
      closePracticeSubmitConfirm({ restoreFocus: true });
      return;
    }

    if (event.target.closest("[data-practice-submit-confirm-action]")) {
      submitPractice();
      return;
    }

    if (event.target.closest("[data-practice-submit]")) {
      submitPractice();
      return;
    }

    if (event.target.closest("[data-practice-reset]")) {
      resetPractice();
      return;
    }

    if (event.target.closest("[data-retry-practice]")) {
      ensurePracticeContent();
      return;
    }

    const patternChoice = event.target.closest("[data-pattern-practice-choice]");
    if (patternChoice) {
      answerPatternPractice(Number(patternChoice.dataset.patternPracticeChoice));
      return;
    }

    const patternAction = event.target.closest("[data-pattern-practice-action]");
    if (patternAction) {
      handlePatternPracticeAction(patternAction.dataset.patternPracticeAction);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "toggle-vocab-self-check") {
        isVocabSelfCheck = !isVocabSelfCheck;
        dom.vocabList?.classList.toggle("is-self-check", isVocabSelfCheck);
        action.textContent = isVocabSelfCheck ? "退出自检" : "自检";
        action.setAttribute("aria-pressed", String(isVocabSelfCheck));
      }
      if (action.dataset.action === "close-detail") closeDetail();
      if (action.dataset.action === "close-grammar-detail") closeGrammarModal();
      if (action.dataset.action === "toggle-catalog") toggleCatalog();
      if (action.dataset.action === "toggle-shadowing") toggleShadowing();
      return;
    }

    if (event.target.closest("[data-retry-lesson]")) {
      loadLesson(activeLesson, { history: "none", section: "text" });
      return;
    }

    const shadowingSentence = event.target.closest("[data-shadowing-sentence]");
    if (shadowingSentence && shadowingActive) {
      selectShadowingSentence(Number(shadowingSentence.dataset.shadowingSentence));
      return;
    }

    const point = event.target.closest(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point");
    if (point && point.dataset.key && activeSection === "text") {
      renderInsight(point.dataset.key, point);
      return;
    }

    if (dom.grammarModal && event.target === dom.grammarModal) {
      closeGrammarModal();
      return;
    }
    if (!event.target.closest("#detail-popover")) closeDetail();
  });

  dom.patternPracticeToggle?.addEventListener("click", openPatternPractice);
  dom.vocabSort?.addEventListener("change", () => {
    vocabSortMode = dom.vocabSort.value === "pos" ? "pos" : "lesson";
    buildVocabList();
  });

  dom.audioPlay?.addEventListener("click", () => {
    if (!dom.audio || !audioSources.length) return;
    clearShadowingAudioSegment();
    if (dom.audio.paused) {
      if (Number.isFinite(dom.audio.duration) && dom.audio.currentTime >= dom.audio.duration) dom.audio.currentTime = 0;
      dom.audio.play().catch(() => showToast("课文音频播放失败。"));
    } else {
      dom.audio.pause();
    }
  });

  dom.audioRewind?.addEventListener("click", () => skipAudioBy(-5));
  dom.audioForward?.addEventListener("click", () => skipAudioBy(5));

  dom.audioTrack?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !seekAudioFromClientX(event.clientX)) return;
    event.preventDefault();
    audioScrubPointerId = event.pointerId;
    dom.audioTrack.classList.add("is-scrubbing");
    dom.audioTrack.setPointerCapture?.(event.pointerId);
  });

  dom.audioTrack?.addEventListener("pointermove", (event) => {
    if (audioScrubPointerId !== event.pointerId) return;
    event.preventDefault();
    seekAudioFromClientX(event.clientX);
  });

  const finishAudioScrub = (event) => {
    if (audioScrubPointerId !== event.pointerId) return;
    if (event.type === "pointerup") seekAudioFromClientX(event.clientX);
    if (dom.audioTrack.hasPointerCapture?.(event.pointerId)) dom.audioTrack.releasePointerCapture(event.pointerId);
    audioScrubPointerId = null;
    dom.audioTrack.classList.remove("is-scrubbing");
  };

  dom.audioTrack?.addEventListener("pointerup", finishAudioScrub);
  dom.audioTrack?.addEventListener("pointercancel", finishAudioScrub);
  dom.audioTrack?.addEventListener("lostpointercapture", () => {
    audioScrubPointerId = null;
    dom.audioTrack.classList.remove("is-scrubbing");
  });

  dom.audioTrack?.addEventListener("click", (event) => {
    if (!event.detail) return;
    seekAudioFromClientX(event.clientX);
  });

  dom.audioTrack?.addEventListener("keydown", (event) => {
    if (!dom.audio || !Number.isFinite(dom.audio.duration)) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    clearShadowingAudioSegment();
    if (event.key === "Home") dom.audio.currentTime = 0;
    if (event.key === "End") dom.audio.currentTime = dom.audio.duration;
    if (event.key === "ArrowLeft") skipAudioBy(-5);
    if (event.key === "ArrowRight") skipAudioBy(5);
    syncAudioUi();
  });

  dom.audioSpeed?.addEventListener("click", cycleAudioRate);
  dom.shadowingSpeed?.addEventListener("click", cycleAudioRate);

  dom.audioLoop?.addEventListener("click", () => {
    if (!dom.audio) return;
    dom.audio.loop = !dom.audio.loop;
    dom.audioLoop.classList.toggle("active", dom.audio.loop);
    dom.audioLoop.setAttribute("aria-pressed", String(dom.audio.loop));
  });

  dom.audioPart?.addEventListener("click", () => {
    if (!dom.audio || audioSources.length < 2) return;
    clearShadowingAudioSegment();
    const autoplay = !dom.audio.paused;
    loadAudioPart((audioPartIndex + 1) % audioSources.length, { autoplay });
  });

  dom.audio?.addEventListener("loadedmetadata", syncAudioUi);
  dom.audio?.addEventListener("durationchange", syncAudioUi);
  dom.audio?.addEventListener("seeking", () => {
    syncLessonAudioSentenceHighlight({ scroll: !dom.audio.paused });
  });
  dom.audio?.addEventListener("timeupdate", () => {
    syncAudioUi();
    syncLessonAudioSentenceHighlight({ scroll: !dom.audio.paused });
    if (shadowingSegmentEnd !== null && dom.audio.currentTime >= shadowingSegmentEnd) {
      const end = shadowingSegmentEnd;
      shadowingSegmentEnd = null;
      dom.audio.pause();
      dom.audio.currentTime = end;
      syncAudioUi();
      updateAudioControls();
      setShadowingStatus("原音播放完成。现在可以开始录音。");
    }
  });
  dom.audio?.addEventListener("play", () => {
    setAudioPlaying(true);
    syncLessonAudioSentenceHighlight({ scroll: true, forceScroll: true });
  });
  dom.audio?.addEventListener("pause", () => setAudioPlaying(false));
  dom.audio?.addEventListener("ended", () => {
    shadowingSegmentEnd = null;
    if (!dom.audio.loop && audioPartIndex < audioSources.length - 1) {
      loadAudioPart(audioPartIndex + 1, { autoplay: true });
      return;
    }
    clearLessonAudioSentenceHighlight();
    setAudioPlaying(false);
  });
  dom.audio?.addEventListener("error", () => {
    if (dom.audioLabel) dom.audioLabel.textContent = "课文音频加载失败";
    if (dom.audioPlay) dom.audioPlay.disabled = true;
    clearLessonAudioSentenceHighlight();
    setAudioPlaying(false);
  });

  dom.shadowingPrev?.addEventListener("click", () => selectShadowingSentence(shadowingSentenceIndex - 1));
  dom.shadowingNext?.addEventListener("click", () => selectShadowingSentence(shadowingSentenceIndex + 1));
  dom.shadowingOriginal?.addEventListener("click", playShadowingOriginal);
  dom.shadowingRecord?.addEventListener("click", toggleShadowingRecording);
  dom.shadowingPlayback?.addEventListener("click", playShadowingRecording);
  dom.shadowingRecording?.addEventListener("ended", () => setShadowingStatus("回听完成。可以重新录制，或进入下一句。"));
  dom.textPanel?.addEventListener("keydown", (event) => {
    const sentence = event.target.closest("[data-shadowing-sentence]");
    if (!sentence || !shadowingActive || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    selectShadowingSentence(Number(sentence.dataset.shadowingSentence));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (closePracticeSubmitConfirm({ restoreFocus: true })) {
        return;
      } else if (mobileCatalogMenuOpen) {
        mobileCatalogMenuOpen = false;
        renderCatalog();
      } else if (shadowingActive) {
        toggleShadowing();
      } else if (dom.grammarModal && !dom.grammarModal.hidden) closeGrammarModal();
      else closeDetail();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideSidebar = event.composedPath().includes(dom.sidebar);
    if (mobileQuery.matches && mobileCatalogMenuOpen && !clickedInsideSidebar) {
      mobileCatalogMenuOpen = false;
      renderCatalog();
    }
  });

  window.addEventListener("popstate", () => loadLesson(getLessonFromUrl(), { history: "none", section: "text" }));
  window.addEventListener("resize", () => {
    if (activeDetailAnchor && !dom.detailPopover.hidden) positionDetailPopover(activeDetailAnchor);
    if (activeSection === "patterns") schedulePatternCardAlignment();
    updatePracticeFloatingSubmit();
  });
  window.addEventListener("scroll", updatePracticeFloatingSubmit, { passive: true });
  dom.readerBody?.addEventListener("scroll", () => {
    if (activeDetailAnchor && !dom.detailPopover.hidden) positionDetailPopover(activeDetailAnchor);
    updatePracticeFloatingSubmit();
  });
  window.addEventListener("kiki-word-bank:changed", () => {
    if (activeSection === "vocab") {
      dom.vocabList.dataset.lesson = "";
      buildVocabList();
    }
  });
  mobileQuery.addEventListener?.("change", (event) => {
    mobileCatalogMenuOpen = false;
    if (event.matches) {
      dom.app?.classList.remove("catalog-collapsed");
      dom.sidebar?.classList.remove("mobile-collapsed");
    } else {
      dom.sidebar?.classList.remove("mobile-collapsed");
    }
    syncCatalogToggle();
    renderCatalog();
    schedulePatternCardAlignment();
    updatePracticeFloatingSubmit();
  });

  document.body.classList.remove("hide-ruby", "show-trans");
  clearLegacyPatternMistakeStorage();
  document.querySelectorAll('[data-toggle="ruby"]').forEach((button) => button.classList.add("active"));
  syncCatalogToggle();
  renderCatalog();
  loadLesson(activeLesson, { history: "replace", section: "text" });
})();
