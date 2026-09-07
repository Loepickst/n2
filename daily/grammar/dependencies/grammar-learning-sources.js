(function () {
  "use strict";

  window.GrammarDB = window.GrammarDB || {};
  const core = Array.isArray(window.GrammarDB.core) ? window.GrammarDB.core : [];

  const SOURCES = {
    "formal-nouns": {
      key: "formal-nouns",
      label: "形式名词",
      href: "daily/grammar/expressions/formal-nouns.html"
    },
    "compound-particles": {
      key: "compound-particles",
      label: "复合格助词",
      href: "daily/grammar/expressions/复合格助词.html"
    },
    "te-auxiliary": {
      key: "te-auxiliary",
      label: "补助动词",
      href: "daily/grammar/foundation/te-auxiliary.html"
    },
    "appearance-expressions": {
      key: "appearance-expressions",
      label: "样态表达",
      href: "daily/grammar/expressions/appearance-expressions.html"
    },
    "adverbial-particles": {
      key: "adverbial-particles",
      label: "副助词",
      href: "daily/grammar/particles/fukujoshi.html"
    },
    "conditional-expressions": {
      key: "conditional-expressions",
      label: "假定表达",
      href: "daily/grammar/expressions/conditional-comparison.html"
    },
    "affix-expressions": {
      key: "affix-expressions",
      label: "接头接尾词",
      href: "daily/grammar/foundation/affixes.html"
    }
  };

  const LOCAL_MAP = {
    "compound-particles": {
      ni_tsuite: "n3-030",
      ni_taishite: "n3-022",
      ni_yotte: "n3-021",
      ni_totte: "n3-056",
      ni_atatte: "n2-262",
      ni_itaru: "learn-compound-ni-itaru",
      ni_oite: "n2-133",
      ni_oujite: "n2-131",
      ni_kakawarazu: "n2-132",
      wo_towazu: "n2-129",
      ni_kagiru: "n2-235",
      ni_kagitte: "n2-217",
      ni_kagiri: "n2-130",
      ni_kakete: "n2-163",
      ni_kakete_wa: "n2-240",
      ni_kawatte: "learn-compound-ni-kawatte",
      ni_kurabete: "n2-181",
      ni_kuwaete: "n2-263",
      ni_kotaete: "n2-248",
      ni_saishite: "n2-135",
      ni_sakidatte: "n2-247",
      ni_shitagatte: "n2-196",
      ni_shite_wa: "n2-172",
      ni_watatte: "n2-162",
      ni_sonaete: "learn-compound-ni-sonaete",
      ni_shitatte: "learn-compound-ni-shitatte",
      ni_sotte: "n2-239",
      ni_tsuki: "n2-128",
      ni_tsuke: "n2-225",
      ni_tsurete: "n2-197",
      ni_tomonai: "n2-164",
      ni_hanshite: "n2-199",
      ni_mukatte: "learn-compound-ni-mukatte",
      ni_mukete: "supp-n1-review-066",
      ni_menshite: "learn-compound-ni-menshite",
      ni_motozuite: "n2-265",
      ni_kagirazu: "n2-204",
      ni_todomarazu: "learn-compound-ni-todomarazu",
      wo_komete: "n2-258",
      wo_nozoite: "learn-compound-wo-nozoite",
      wo_tsuujite: "n3-026",
      wo_ni_toshite_group: "n2-144",
      toshite: "n2-153",
      toshitemo: "n2-264",
      wo_motoni: "n2-266",
      no_motode: "n2-139",
      wo_maeni: "learn-compound-wo-maeni",
      wo_ukete: "supp-n1-review-022",
      wo_kanete: "learn-compound-wo-kanete"
    },
    "te-auxiliary": {
      "te-iru": "learn-te-iru",
      "te-aru": "learn-te-aru",
      "te-oku": "n3-019",
      "te-shimau": "n3-020",
      "te-miru": "learn-te-miru",
      "te-miseru": "n1-089",
      "te-iku": "learn-te-iku",
      "te-kuru": "learn-te-kuru",
      "te-ageru": "learn-te-ageru",
      "te-sashiageru": "learn-te-sashiageru",
      "te-yaru": "n1-036",
      "te-kureru": "learn-te-kureru",
      "te-morau": "learn-te-morau"
    },
    "appearance-expressions": {
      "sou-appearance": "learn-sou-appearance",
      "sou-hearsay": "learn-sou-hearsay",
      "toiu-koto-desu": "n3-029",
      "tono-koto-desu": "n3-003",
      "you-inference": "learn-you-inference",
      "you-simile": "n3-027",
      gotoku: "n1-101",
      mitai: "n3-039",
      "rashii-hearsay": "supp-n1-review-072",
      "rashii-typical": "n3-106"
    },
    "conditional-expressions": {
      to: "learn-conditional-to",
      ba: "learn-conditional-ba",
      tara: "learn-conditional-tara",
      nara: "learn-conditional-nara"
    },
    "affix-expressions": {
      "〜かけ（かけ）": "n3-085",
      "〜立て（たて）": "learn-affix-tate",
      "〜っぱなし（っぱなし）": "n3-103",
      "〜やすい（やすい）": "learn-affix-yasui",
      "〜にくい（にくい）": "learn-affix-nikui",
      "〜づらい（づらい）": "learn-affix-zurai",
      "〜がたい（がたい）": "learn-affix-gatai",
      "〜かねる": "n1-106",
      "〜がち（がち）": "learn-affix-gachi",
      "〜気味（ぎみ）": "n3-099",
      "〜げ": "learn-affix-ge",
      "〜っぽい": "n3-096",
      "〜ぶる": "learn-affix-buru",
      "〜ぶり（ぶり / っぷり）": "learn-affix-buri",
      "〜深い（ぶかい）": "learn-affix-bukai",
      "〜だらけ（だらけ）": "n3-104",
      "〜まみれ": "n1-017",
      "〜ずくめ": "n1-023"
    }
  };

  const FORMAL_IDS = `
    n1-039 n1-047 n1-050 n1-051 n1-061 n1-063 n1-064 n1-068 n1-070 n1-072
    n1-077 n1-079 n1-084 n1-088 n1-093 n1-094 n1-103 n1-107 n1-126
    n2-136 n2-141 n2-142 n2-149 n2-150 n2-151 n2-154 n2-156 n2-170
    n2-171 n2-173 n2-175 n2-177 n2-180 n2-182 n2-183 n2-185 n2-187 n2-188
    n2-190 n2-193 n2-202 n2-212 n2-213 n2-218 n2-220 n2-223 n2-227 n2-233
    n2-241 n2-249 n2-251 n3-002 n3-003 n3-018 n3-023 n3-027 n3-029 n3-031
    n3-045 n3-047 n3-049 n3-051 n3-061 n3-063 n3-064 n3-065 n3-068
    n3-080 n3-081 n3-087 n3-094 n3-097 n3-098 n3-114 supp-formal-noun-001
    supp-formal-noun-002 supp-n1-review-001 supp-n1-review-002 supp-n1-review-010
    supp-n1-review-014 supp-n1-review-020 supp-n1-review-021 supp-n1-review-023
    supp-n1-review-024 supp-n1-review-025 supp-n1-review-026 supp-n1-review-031
    supp-n1-review-044 supp-n1-review-053 supp-n1-review-054 supp-n1-review-056
    supp-n1-review-079
  `.trim().split(/\s+/);

  const ADVERBIAL_IDS = `
    n1-005 n1-043 n1-045 n1-052 n1-056 n1-074 n1-075 n1-076 n1-084
    n2-168 n2-178 n2-179 n2-194 n2-221 n2-236 n2-246 n3-007 n3-041
    n3-044 n3-057 n3-059 n3-069 n3-111 supp-bakari-final-step
    supp-dake-corresponding-degree-n1 supp-dake-sufficient-n1 supp-hodo-proportional
    supp-kore-sore-kiri supp-made-deadline supp-n1-review-016 supp-n1-review-017
    supp-n1-review-018 supp-n1-review-034 supp-n1-review-035 supp-n1-review-037
    supp-n1-review-067 supp-n1-review-071 supp-te-made-made-shite
  `.trim().split(/\s+/);

  const SUPPLEMENT_MERGES = {
    "learn-te-shimau": "n3-020"
  };

  let nextSearchId = 900001;

  function sourceRecord(sourceKey, anchor) {
    const source = SOURCES[sourceKey];
    return source ? {
      key: source.key,
      label: source.label,
      href: source.href,
      anchor: anchor || ""
    } : null;
  }

  function appendSource(item, sourceKey, anchor) {
    const source = sourceRecord(sourceKey, anchor);
    if (!item || !source) return;
    const list = Array.isArray(item.learningSources) ? item.learningSources : [];
    const existing = list.find((entry) => entry && entry.key === source.key);
    if (existing) {
      if (!existing.anchor && source.anchor) existing.anchor = source.anchor;
    } else {
      list.push(source);
    }
    item.learningSources = list;
  }

  function getLocalSourceAnchor(sourceKey, localId) {
    if (sourceKey === "compound-particles") return `compound-${localId}`;

    if (sourceKey === "appearance-expressions") {
      const anchors = {
        "sou-appearance": "sou",
        "sou-hearsay": "sou-hearsay",
        "toiu-koto-desu": "toiu-koto-desu",
        "tono-koto-desu": "tono-koto-desu",
        "you-inference": "you-inference",
        "you-simile": "you-simile",
        gotoku: "gotoku",
        mitai: "mitai",
        "rashii-hearsay": "rashii-hearsay",
        "rashii-typical": "rashii-typical"
      };
      return anchors[localId] || localId;
    }

    if (sourceKey === "affix-expressions") {
      const group16 = new Set([
        "〜やすい（やすい）",
        "〜にくい（にくい）",
        "〜づらい（づらい）",
        "〜がたい（がたい）",
        "〜かねる"
      ]);
      const group17 = new Set([
        "〜がち（がち）",
        "〜気味（ぎみ）",
        "〜げ",
        "〜っぽい",
        "〜ぶる",
        "〜ぶり（ぶり / っぷり）",
        "〜深い（ぶかい）",
        "〜だらけ（だらけ）",
        "〜まみれ",
        "〜ずくめ"
      ]);
      if (group16.has(localId)) return "affix-expression-16";
      if (group17.has(localId)) return "affix-expression-17";
      return "affix-expression-15";
    }

    return localId;
  }

  function updateSourceAnchor(grammarId, sourceKey, anchor) {
    const item = core.find((entry) => entry && entry.id === grammarId);
    const source = SOURCES[sourceKey];
    if (!item || !source) return false;
    appendSource(item, sourceKey, anchor || "");
    const record = Array.isArray(item.learningSources)
      ? item.learningSources.find((entry) => entry && entry.key === sourceKey)
      : null;
    if (record) record.anchor = anchor || "";
    return Boolean(record);
  }

  function addSupplement(config) {
    if (!config) return;
    const mergeTargetId = SUPPLEMENT_MERGES[config.id];
    const mergeTarget = mergeTargetId
      ? core.find((item) => item && item.id === mergeTargetId)
      : null;
    if (mergeTarget) {
      const reservedSearchId = nextSearchId++;
      appendSource(mergeTarget, config.sourceKey, config.anchor);
      mergeTarget.legacy = mergeTarget.legacy || {};
      mergeTarget.legacy.aliasCanonicalIds = [...new Set([
        ...(Array.isArray(mergeTarget.legacy.aliasCanonicalIds) ? mergeTarget.legacy.aliasCanonicalIds : []),
        config.id
      ])];
      mergeTarget.legacy.aliasSearchIds = [...new Set([
        ...(Array.isArray(mergeTarget.legacy.aliasSearchIds) ? mergeTarget.legacy.aliasSearchIds : []),
        reservedSearchId
      ])];
      return;
    }
    if (core.some((item) => item.id === config.id)) return;
    const source = SOURCES[config.sourceKey];
    const examples = Array.isArray(config.examples) && config.examples.length
      ? config.examples
      : [{ jp: config.example || "この表現の使い方を確認します。", cn: config.exampleCn || "确认这一表达的用法。" }];
    const item = {
      id: config.id,
      level: config.level || "基础",
      bookKey: "grammar-learning",
      bookLabel: "语法学习",
      lesson: source ? source.label : "语法学习",
      lessonNumber: 0,
      title: config.title,
      meaning: config.meaning,
      connection: config.connection,
      desc: config.desc,
      examples: examples,
      related: [],
      kana: config.kana || String(config.title || "").replace(/[～〜]/g, ""),
      romaji: config.romaji || "",
      learningSources: source ? [sourceRecord(config.sourceKey, config.anchor)] : [],
      legacy: {
        searchId: nextSearchId++,
        sourcePage: source ? source.href : null
      }
    };
    core.push(item);
  }

  const supplements = [
    ["learn-compound-ni-itaru", "N2", "～に至る", "发展到……／达到……", "名词／动词辞书形＋に至る", "表示事态经过某个过程，最终发展到某一阶段或结果。", "compound-particles", "ni_itaru", ["長い交渉の末、両社は合意に至りました。", "经过长期谈判，两家公司最终达成一致。"]],
    ["learn-compound-ni-kawatte", "N3", "～にかわって／～にかわり", "代替……", "名词＋にかわって／にかわり", "表示某人或某物代替原来的对象，承担相应的动作或作用。", "compound-particles", "ni_kawatte", ["社長にかわって、私がご挨拶申し上げます。", "我代替社长向大家致辞。"]],
    ["learn-compound-ni-sonaete", "N2", "～に備えて", "为……做准备／防备……", "名词＋に備えて", "表示为了应对将来的事件或可能出现的问题，提前采取准备措施。", "compound-particles", "ni_sonaete", ["台風に備えて、水や食料を買っておきます。", "为防备台风，提前买好水和食物。"]],
    ["learn-compound-ni-shitatte", "N2", "～にしたって／～にしたら", "从……的立场来看", "名词＋にしたって／にしたら", "以某人或某一方的立场为判断基准，说明其感受、认识或处境。", "compound-particles", "ni_shitatte", ["親にしたら、子供の将来は心配なものです。", "在父母看来，孩子的未来总让人担心。"]],
    ["learn-compound-ni-mukatte", "N3", "～に向かって", "朝向……／面向……", "名词＋に向かって", "表示动作朝着具体方向、对象或目标发出。", "compound-particles", "ni_mukatte", ["選手たちはゴールに向かって走り出しました。", "运动员们朝终点跑了出去。"]],
    ["learn-compound-ni-menshite", "N2", "～に面して", "面向……／临着……", "名词＋に面して", "说明建筑物或场所正对着、临接某个道路、水域或空间。", "compound-particles", "ni_menshite", ["私の家は海に面しています。", "我家面朝大海。"]],
    ["learn-compound-ni-todomarazu", "N1", "～にとどまらず", "不止于……／不限于……", "名词／动词辞书形＋にとどまらず", "表示范围或影响没有停留在前项，而是进一步扩展到更广的领域。", "compound-particles", "ni_todomarazu", ["彼の活躍は国内にとどまらず、海外にも広がっています。", "他的活跃范围不止国内，也扩展到了海外。"]],
    ["learn-compound-wo-nozoite", "N3", "～を除いて", "除了……之外", "名词＋を除いて", "把前项从整体范围中排除，再说明剩余部分的共同情况。", "compound-particles", "wo_nozoite", ["彼を除いて、全員が会議に参加しました。", "除他以外，所有人都参加了会议。"]],
    ["learn-compound-wo-maeni", "N2", "～を前に（して）", "面临……／在……之前", "名词＋を前に（して）", "表示重要事件即将到来，并说明处于这一时刻时的行动、状态或心情。", "compound-particles", "wo_maeni", ["卒業式を前に、みんなで記念写真を撮りました。", "临近毕业典礼，大家一起拍了纪念照。"]],
    ["learn-compound-wo-kanete", "N2", "～を兼ねて", "兼作……／同时为了……", "名词＋を兼ねて", "表示一个行动同时具有两项目的，前项是附加目的，后项是实际进行的行动。", "compound-particles", "wo_kanete", ["健康づくりを兼ねて、毎朝歩いて通勤しています。", "我每天步行上班，也顺便锻炼身体。"]],

    ["learn-te-iru", "N5", "～ている", "动作进行、习惯持续或结果状态", "动词て形＋いる", "根据前项动词的实际含义，表示动作正在进行、反复习惯、变化后的结果状态，或延续到现在的知识与经历。", "te-auxiliary", "te-iru", ["弟は今、宿題をしています。", "弟弟现在正在做作业。"]],
    ["learn-te-aru", "N4", "～てある", "人为动作完成后留下的状态", "意志性他动词て形＋ある", "表示有人有意做了某事，完成后的状态或准备仍然保留着。", "te-auxiliary", "te-aru", ["入口に案内の紙が貼ってあります。", "入口处贴着说明纸。"]],
    ["learn-te-shimau", "N4", "～てしまう", "彻底完成；遗憾或意外", "动词て形＋しまう", "表示动作完全结束；结合语境也可表达结果不合预期而产生的遗憾、意外或无奈。", "te-auxiliary", "te-shimau", ["大切な財布をなくしてしまいました。", "我把重要的钱包弄丢了。"]],
    ["learn-te-miru", "N4", "～てみる", "试着做……", "意志性动词て形＋みる", "表示亲自试着做前项动作，以确认结果、感受或可行性。", "te-auxiliary", "te-miru", ["この服を着てみてもいいですか。", "我可以试穿一下这件衣服吗？"]],
    ["learn-te-iku", "N4", "～ていく", "从基准点向外／向未来发展", "动词て形＋いく", "表示动作或变化从当前基准点向外延伸，或从现在开始持续到将来。", "te-auxiliary", "te-iku", ["これから利用者が増えていくでしょう。", "今后使用者会逐渐增加吧。"]],
    ["learn-te-kuru", "N4", "～てくる", "向基准点接近／从过去发展到现在", "动词て形＋くる", "表示动作朝说话人或当前基准点接近，或变化从过去逐渐发展到现在。", "te-auxiliary", "te-kuru", ["最近、利用者が増えてきました。", "最近使用者逐渐增多了。"]],
    ["learn-te-ageru", "N4", "～てあげる", "为别人做某事", "施事者は／が＋受益者に＋动词て形＋あげる", "从给予帮助的一方叙述，表示主语为他人完成有益的动作。", "te-auxiliary", "te-ageru", ["私は弟に宿題を教えてあげました。", "我教弟弟做了作业。"]],
    ["learn-te-sashiageru", "N3", "～て差し上げる", "恭敬地为对方做某事", "动词て形＋差し上げる", "「～てあげる」的自谦形式，用于对地位较高者说明己方为其提供帮助；应注意避免给人强加恩惠的感觉。", "te-auxiliary", "te-sashiageru", ["お荷物をお持ちして差し上げます。", "我来为您拿行李。"]],
    ["learn-te-kureru", "N4", "～てくれる", "别人为说话人一方做某事", "施事者が＋说话人一方に＋动词て形＋くれる", "从说话人或其关系一方受益的角度叙述。结合语气也可反讽地表示他人的行为给说话人造成困扰。", "te-auxiliary", "te-kureru", ["友達が駅まで送ってくれました。", "朋友把我送到了车站。"]],
    ["learn-te-morau", "N4", "～てもらう", "请别人做某事并得到帮助", "受益者は／が＋施事者に＋动词て形＋もらう", "从得到帮助的一方叙述，表示请别人完成某动作并接受其结果；在反语语境中也可表示被迫承受困扰。", "te-auxiliary", "te-morau", ["先生に作文を直してもらいました。", "我请老师帮我修改了作文。"]],

    ["learn-sou-appearance", "N4", "～そうだ（样态）", "看起来……／眼看要……", "动词第一连用形／形容词词干＋そうだ", "根据眼前可以直接观察到的外观、迹象或变化趋势，描述事物呈现的样子。", "appearance-expressions", "sou", ["空が暗くなって、雨が降りそうです。", "天色变暗，看起来要下雨了。"]],
    ["learn-sou-hearsay", "N4", "～そうだ（传闻）", "听说……", "普通形＋そうだ", "转述从他人、新闻或其他信息来源获得的内容，不表示说话人根据迹象作出的判断。", "appearance-expressions", "sou-hearsay", ["天気予報によると、明日は雨だそうです。", "据天气预报说，明天会下雨。"]],
    ["learn-you-inference", "N4", "～ようだ（推断）", "似乎……／好像……", "普通形＋ようだ", "根据观察到的多个线索，对未直接确认的原因、事实或状态作出较有依据的判断。", "appearance-expressions", "you", ["電気が消えています。誰もいないようです。", "灯关着，似乎没有人在。"]],

    ["learn-conditional-to", "N5", "～と（条件）", "一……就……／只要……就……", "普通形＋と", "表示前项一成立，后项就自然、规律或反复地出现，常用于自然现象、习惯和固定操作。", "conditional-expressions", "to", ["春になると、暖かくなります。", "一到春天，天气就会变暖。"]],
    ["learn-conditional-ba", "N5", "～ば", "如果……／只要……", "动词ば形／形容词ければ／名词・ナ形容词なら（ば）", "把前项作为后项成立所需要满足的条件，常用于一般法则、方法和必要条件。", "conditional-expressions", "ba", ["このボタンを押せば、ドアが開きます。", "只要按这个按钮，门就会打开。"]],
    ["learn-conditional-tara", "N5", "～たら", "如果……／等……以后", "普通形过去式＋ら", "把前项看作已经成立的时间节点，再说明其后发生的结果，可用于具体假设、请求、命令和发现。", "conditional-expressions", "tara", ["駅に着いたら、電話してください。", "到车站以后，请给我打电话。"]],
    ["learn-conditional-nara", "N5", "～なら", "如果是……／既然谈到……", "普通形＋なら；名词・ナ形容词＋なら", "把对话中的信息、计划或判断设为前提，再给出建议、评价、请求或反应。", "conditional-expressions", "nara", ["京都へ行くなら、秋がおすすめです。", "如果要去京都，推荐秋天去。"]],

    ["learn-dake-ni", "N2", "～だけに", "正因为……／正因为如此更……", "动词普通形／い形容词普通形／な形容词词干＋な／名词＋（である）＋だけに", "以前项已经成立的事实或客观条件为理由，表示正因为存在这一条件，后项的结果、感情或评价表现得更加明显或强烈。", "adverbial-particles", "", ["長い間楽しみにしていただけに、試合が中止になって本当に残念です。", "正因为期待了很久，比赛取消后才格外遗憾。"]],
    ["supp-dake-sufficient-n1", "N1", "～だけの", "足以……的……／够……的……", "动词辞书形／可能形＋だけの＋名词", "表示后面的名词具有足以完成前项动作的数量、能力或条件。前项常使用可能形，后面多接表示能力、时间或资源的名词。", "adverbial-particles", "", ["海外で一人で暮らせるだけの日本語力を身につけたいです。", "我想掌握足以独自在海外生活的日语能力。"]],
    ["supp-dake-corresponding-degree-n1", "N1", "～分だけ", "与……相应／……多少就……多少", "动词た形／名词＋の＋分だけ", "把前项所付出的数量、程度或产生的变化作为基准，表示后项也出现与之相应的结果或差异。", "adverbial-particles", "", ["毎日練習した分だけ、発音が自然になってきました。", "每天练习了多少，发音也就相应变得自然了。"]],

    ["learn-affix-tate", "N3", "～たて", "刚刚完成", "动词第一连用形＋たて", "表示动作刚完成不久，结果仍带有明显的新鲜状态。", "affix-expressions", "affix-expression-15", ["焼きたてのパンを買いました。", "买了刚烤好的面包。"]],
    ["learn-affix-yasui", "N4", "～やすい", "容易……", "动词第一连用形＋やすい", "表示动作容易进行，或事物具有容易发生某种变化的性质。", "affix-expressions", "affix-expression-16", ["この説明は分かりやすいです。", "这个说明很容易理解。"]],
    ["learn-affix-nikui", "N4", "～にくい", "难以……", "动词第一连用形＋にくい", "表示受事物性质、结构或客观条件限制，动作不容易进行。", "affix-expressions", "affix-expression-16", ["この字は小さくて読みにくいです。", "这个字太小，很难读。"]],
    ["learn-affix-zurai", "N3", "～づらい", "做……很难受／难以……", "动词第一连用形＋づらい", "表示由于心理压力、身体感受或处境而觉得难以实施某动作。", "affix-expressions", "affix-expression-16", ["本人には少し言いづらいです。", "这件事有些难以对本人开口。"]],
    ["learn-affix-gatai", "N2", "～がたい", "难以……／无法轻易……", "动词第一连用形＋がたい", "多用于书面语，表示从心理、情感或价值判断上难以接受、实现或想象。", "affix-expressions", "affix-expression-16", ["彼の行為は許しがたいです。", "他的行为难以原谅。"]],
    ["learn-affix-gachi", "N3", "～がち", "容易……／往往……", "名词／动词第一连用形＋がち", "表示某种情况经常出现或容易偏向某一状态，多用于负面倾向。", "affix-expressions", "affix-expression-17", ["忙しいと、食事が不規則になりがちです。", "一忙起来，饮食往往会变得不规律。"]],
    ["learn-affix-ge", "N2", "～げ", "显得……／带着……的样子", "形容词词干等＋げ", "从外观、表情或态度观察到某种情绪或状态。", "affix-expressions", "affix-expression-17", ["彼は不安げな表情をしていました。", "他露出了不安的神情。"]],
    ["learn-affix-buru", "N2", "～ぶる", "故意装出……的样子", "名词／形容词词干＋ぶる", "表示刻意表现得仿佛具备某种身份、性格或态度，常含批评意味。", "affix-expressions", "affix-expression-17", ["彼は人前で大人ぶっています。", "他在人前装成熟。"]],
    ["learn-affix-buri", "N2", "～ぶり／～っぷり", "……的样子／表现", "名词／动词第一连用形＋ぶり（っぷり）", "把动作或行为呈现出来的方式、状态和程度作为整体加以评价。", "affix-expressions", "affix-expression-17", ["彼の仕事ぶりは高く評価されています。", "他的工作表现受到高度评价。"]],
    ["learn-affix-bukai", "N2", "～深い", "具有深厚的……色彩", "名词＋深い", "表示带有浓厚的某种性质、感受或意义。", "affix-expressions", "affix-expression-17", ["とても興味深い研究です。", "这是一项非常有趣的研究。"]]
  ];

  supplements.forEach((entry) => addSupplement({
    id: entry[0],
    level: entry[1],
    title: entry[2],
    meaning: entry[3],
    connection: entry[4],
    desc: entry[5],
    sourceKey: entry[6],
    anchor: entry[7],
    examples: [{ jp: entry[8][0], cn: entry[8][1] }]
  }));

  const byId = new Map(core.map((item) => [item.id, item]));

  function annotateIds(ids, sourceKey, anchorFactory) {
    ids.forEach((id) => appendSource(
      byId.get(id),
      sourceKey,
      typeof anchorFactory === "function" ? anchorFactory(id) : anchorFactory
    ));
  }

  annotateIds(FORMAL_IDS, "formal-nouns", (id) => `formal-${id}`);
  annotateIds(ADVERBIAL_IDS, "adverbial-particles", "");

  Object.keys(LOCAL_MAP).forEach((sourceKey) => {
    Object.entries(LOCAL_MAP[sourceKey]).forEach(([localId, grammarId]) => {
      appendSource(byId.get(grammarId), sourceKey, getLocalSourceAnchor(sourceKey, localId));
    });
  });

  window.GrammarLearningCatalog = {
    sources: SOURCES,
    localMap: LOCAL_MAP,
    getSource(sourceKey) {
      return SOURCES[sourceKey] ? JSON.parse(JSON.stringify(SOURCES[sourceKey])) : null;
    },
    resolve(sourceKey, localId) {
      const sourceMap = LOCAL_MAP[sourceKey] || {};
      return sourceMap[localId] || null;
    },
    updateSourceAnchor,
    getLearningSources(grammarId) {
      const item = byId.get(grammarId);
      return item && Array.isArray(item.learningSources)
        ? JSON.parse(JSON.stringify(item.learningSources))
        : [];
    }
  };
})();
