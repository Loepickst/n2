(function () {
  window.GrammarShared = window.GrammarShared || {};

  const LEGACY_TRY_CENTER_ENTRIES = [
  {
    "id": 3001,
    "lesson": "第1课",
    "macro": "时间与顺序",
    "category": "动作起止",
    "point": "～始める / ～終わる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ 始める / 終わる",
    "meaning": "开始... / 结束...",
    "explanation": "接在动词第一连用形后构成复合动词，表示某个动作或变化的<span class='font-bold text-[#8a3324]'>开始与结束</span>。",
    "example": {
      "jp": "やっと勇気を出して、好きな人にラブレターを書き<span class='grammar-highlight'>始めた</span>。",
      "cn": "终于鼓起勇气，开始给暗恋的人写情书了。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "动作开始/结束",
    "book": "N3",
    "sourceId": 1,
    "lessonNumber": 1,
    "sourceMacro": "时间与场景",
    "sourceCategory": "动作起止"
  },
  {
    "id": 3002,
    "lesson": "第1课",
    "macro": "传闻与引用",
    "category": "间接传达",
    "point": "～ように言う / ～ように頼む",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ように言う / 頼む",
    "meaning": "告诉...做... / 拜托...做...",
    "explanation": "用于<span class='font-bold text-[#8a3324]'>间接引用</span>他人的指示、要求或请求，表示传达某种指令。",
    "example": {
      "jp": "お母さんに、お見合いの時はスマホばかり見ない<span class='grammar-highlight'>ように言われた</span>。",
      "cn": "老妈嘱咐我，相亲的时候千万别老是盯着手机看。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "间接传达指示",
    "book": "N3",
    "sourceId": 2,
    "lessonNumber": 1,
    "sourceMacro": "传闻与引用",
    "sourceCategory": "间接传达"
  },
  {
    "id": 3003,
    "lesson": "第1课",
    "macro": "传闻与引用",
    "category": "传闻・解释",
    "point": "～ということだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ ということだ",
    "meaning": "据说... / 也就是说...",
    "explanation": "既可表示<span class='font-bold text-[#8a3324]'>传闻</span>（据说/听说），也可用于对前述情况进行<span class='font-bold text-[#8a3324]'>总结与解释说明</span>（也就是说）。",
    "example": {
      "jp": "いつもサボってばかりいるあの同僚は、なんと社長の親戚だ<span class='grammar-highlight'>ということだ</span>。",
      "cn": "听说那个整天摸鱼的同事，居然是老板的亲戚。"
    },
    "similarGrammar": [
      3029
    ],
    "firstKana": "と",
    "keyword": "传闻或解释说明",
    "book": "N3",
    "sourceId": 3,
    "lessonNumber": 1,
    "sourceMacro": "传闻与说明",
    "sourceCategory": "传闻・解释"
  },
  {
    "id": 3004,
    "lesson": "第1课",
    "macro": "可能性",
    "category": "个人推测",
    "point": "～だろうと思う",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ だろうと思う",
    "meaning": "我想大概会...吧",
    "explanation": "表示说话人并不十分确定的<span class='font-bold text-[#8a3324]'>个人推测</span>，语气比直接断定更为委婉柔和。",
    "example": {
      "jp": "毎日こんなにケーキを食べていたら、いつか太る<span class='grammar-highlight'>だろうと思う</span>。",
      "cn": "我想，每天吃这么多蛋糕，总有一天会变胖的吧。"
    },
    "similarGrammar": [],
    "firstKana": "だ",
    "keyword": "委婉的个人推测",
    "book": "N3",
    "sourceId": 4,
    "lessonNumber": 1,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "个人推测"
  },
  {
    "id": 3005,
    "lesson": "第1课",
    "macro": "主张与评价",
    "category": "样貌否定",
    "point": "～なさそうだ",
    "connection": "い形容词（去掉い） / な形容词干 ＋ なさそうだ",
    "meaning": "看起来不像... / 似乎不...",
    "explanation": "「〜そうだ」的否定形式。表示通过观察外观或当前状况，推测某事物<span class='font-bold text-[#8a3324]'>似乎并不具备某种属性</span>。",
    "example": {
      "jp": "今月の小遣いは、月末まで持ち<span class='grammar-highlight'>なさそうだ</span>。",
      "cn": "这个月的零花钱，看样子似乎撑不到月底了。"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "看起来不像",
    "book": "N3",
    "sourceId": 5,
    "lessonNumber": 1,
    "sourceMacro": "评价与视角",
    "sourceCategory": "样貌否定"
  },
  {
    "id": 3006,
    "lesson": "第1课",
    "macro": "时间与顺序",
    "category": "尝试与契机",
    "point": "～てみると / ～たら",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ みると / 动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ ら",
    "meaning": "试着做...结果发现...",
    "explanation": "表示在尝试进行前项动作之后，紧接着<span class='font-bold text-[#8a3324]'>发现了某种新情况或新事实</span>。后项多伴随意外之感。",
    "example": {
      "jp": "元カノにメッセージを送っ<span class='grammar-highlight'>てみると</span>、すでにブロックされていた。",
      "cn": "试着给前女友发了条消息，结果发现竟然已经被拉黑了。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "尝试后发现",
    "book": "N3",
    "sourceId": 6,
    "lessonNumber": 1,
    "sourceMacro": "时间与发现",
    "sourceCategory": "尝试与契机"
  },
  {
    "id": 3007,
    "lesson": "第1课",
    "macro": "限定与程度",
    "category": "极端比喻",
    "point": "～ほど",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> / 名词 ＋ ほど",
    "meaning": "简直到了...的程度 / 像...那样",
    "explanation": "通过列举一个<span class='font-bold text-[#8a3324]'>极端的例子</span>来进行比喻，以此强调前项事物的程度之高。",
    "example": {
      "jp": "お腹が空いて、牛一頭食べられる<span class='grammar-highlight'>ほど</span>だ。",
      "cn": "肚子饿得简直能吃下一整头牛。"
    },
    "similarGrammar": [],
    "firstKana": "ほ",
    "keyword": "举例说明程度",
    "book": "N3",
    "sourceId": 7,
    "lessonNumber": 1,
    "sourceMacro": "限定与程度",
    "sourceCategory": "极端比喻"
  },
  {
    "id": 3008,
    "lesson": "第1课",
    "macro": "状态与结果",
    "category": "推移方向",
    "point": "～ていく / ～てくる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ いく / くる",
    "meaning": "渐渐去... / 渐渐来...",
    "explanation": "表示动作或状态在时间或空间上的推移。「〜ていく」表示<span class='font-bold text-[#8a3324]'>由近及远或从现在向未来</span>发展；「〜てくる」则相反。",
    "example": {
      "jp": "子猫は毎日ミルクを飲んで、どんどん大きく成長し<span class='grammar-highlight'>ていく</span>。",
      "cn": "小猫每天喝奶，正在渐渐地长大。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "时间或空间的推移",
    "book": "N3",
    "sourceId": 8,
    "lessonNumber": 1,
    "sourceMacro": "状态与变化",
    "sourceCategory": "推移方向"
  },
  {
    "id": 3009,
    "lesson": "第1课",
    "macro": "状态与结果",
    "category": "持续动作",
    "point": "～続ける",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ 続ける",
    "meaning": "一直... / 持续...",
    "explanation": "接在动词第一连用形后，表示某个动作或状态在一段时间内<span class='font-bold text-[#8a3324]'>一直不间断地持续</span>。",
    "example": {
      "jp": "振られても、彼は彼女にアプローチし<span class='grammar-highlight'>続けた</span>。",
      "cn": "尽管被拒绝了，他还是继续对她展开追求。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "动作持续不断",
    "book": "N3",
    "sourceId": 9,
    "lessonNumber": 1,
    "sourceMacro": "状态与变化",
    "sourceCategory": "持续动作"
  },
  {
    "id": 3010,
    "lesson": "第1课",
    "macro": "条件与假定",
    "category": "承接给建议",
    "point": "～なら",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ なら",
    "meaning": "如果是...的话 / 如果要...",
    "explanation": "承接对方的话题或当前的状况作为假定条件，从而在后半句提出说话人的<span class='font-bold text-[#8a3324]'>建议、主张或判断</span>。",
    "example": {
      "jp": "ダイエットしたい<span class='grammar-highlight'>なら</span>、まずはそのタピオカミルクティーを置いたほうがいい。",
      "cn": "如果想减肥的话，最好先把手里的珍珠奶茶放下。"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "承接话题给建议",
    "book": "N3",
    "sourceId": 10,
    "lessonNumber": 1,
    "sourceMacro": "条件与假定",
    "sourceCategory": "承接给建议"
  },
  {
    "id": 3011,
    "lesson": "第2课",
    "macro": "传闻与引用",
    "category": "提示话题",
    "point": "～って",
    "connection": "名词 / <span class='text-[#8a3324] mx-1'>普通体</span> ＋ って",
    "meaning": "叫做...的 / 所谓的...",
    "explanation": "是「という」或「というのは」的<span class='font-bold text-[#8a3324]'>口语形式</span>，用来提示话题或传达听来的事情。",
    "example": {
      "jp": "あの行列ができるラーメン屋が潰れた<span class='grammar-highlight'>って</span>、本当？",
      "cn": "听说那家大排长龙的拉面店倒闭了，真的假的？"
    },
    "similarGrammar": [
      3038
    ],
    "firstKana": "っ",
    "keyword": "提示话题或传达",
    "book": "N3",
    "sourceId": 11,
    "lessonNumber": 2,
    "sourceMacro": "传闻与引用",
    "sourceCategory": "提示话题"
  },
  {
    "id": 3012,
    "lesson": "第2课",
    "macro": "对象与关联",
    "category": "获得许可",
    "point": "～させてもらう / ～させてくれる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>使役态て形</span> ＋ もらう / くれる",
    "meaning": "请允许我... / （某人）让我...",
    "explanation": "表达获得了他人的许可而做某事，并对此怀有<span class='font-bold text-[#8a3324]'>感激之情</span>。",
    "example": {
      "jp": "大好きなアイドルのライブに行くため、今日は早退<span class='grammar-highlight'>させてもらった</span>。",
      "cn": "为了去看最爱偶像的演唱会，今天请允许我早退了。"
    },
    "similarGrammar": [
      3078
    ],
    "firstKana": "さ",
    "keyword": "获得许可感怀",
    "book": "N3",
    "sourceId": 12,
    "lessonNumber": 2,
    "sourceMacro": "授受与使役",
    "sourceCategory": "获得许可"
  },
  {
    "id": 3013,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "被迫行为",
    "point": "～させられる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>使役被动态</span>",
    "meaning": "被迫... / 不得不...",
    "explanation": "表示并非出于自身意愿，而是受他人指示或迫于外界情况而<span class='font-bold text-[#8a3324]'>不得不采取</span>某种行动。",
    "example": {
      "jp": "子どもの頃、母に嫌いなピーマンを無理やり食べ<span class='grammar-highlight'>させられました</span>。",
      "cn": "小时候，经常被老妈逼着吃讨厌的青椒。"
    },
    "similarGrammar": [],
    "firstKana": "さ",
    "keyword": "被迫或不得不",
    "book": "N3",
    "sourceId": 13,
    "lessonNumber": 2,
    "sourceMacro": "授受与使役",
    "sourceCategory": "被迫行为"
  },
  {
    "id": 3014,
    "lesson": "第2课",
    "macro": "情感与决心",
    "category": "第三人称愿望",
    "point": "～たがる / ～たがっている",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ たがる",
    "meaning": "（第三人称）想要...",
    "explanation": "用来客观描述<span class='font-bold text-[#8a3324]'>第三人称</span>表现出来的愿望或欲望，通常不用于直接描述自己。",
    "example": {
      "jp": "弟は、私が買った新しいゲームをずっとやり<span class='grammar-highlight'>たがって</span>いる。",
      "cn": "弟弟一直很想玩我刚买的新游戏。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "第三人称愿望",
    "book": "N3",
    "sourceId": 14,
    "lessonNumber": 2,
    "sourceMacro": "情感与思考",
    "sourceCategory": "第三人称愿望"
  },
  {
    "id": 3015,
    "lesson": "第2课",
    "macro": "时间与顺序",
    "category": "瞬间发生",
    "point": "～たとたん（に）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ とたん（に）",
    "meaning": "刚一...就...",
    "explanation": "表示前项动作发生后，紧接着瞬间发生了后项的动作或变化。后项多为让人感到<span class='font-bold text-[#8a3324]'>意外或不受控制</span>的情况。",
    "example": {
      "jp": "新しいスマホを箱から出し<span class='grammar-highlight'>たとたん</span>、床に落として画面が割れた。",
      "cn": "新手机刚从盒子里拿出来，就掉在地上把屏幕摔碎了。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "瞬间发生意外",
    "book": "N3",
    "sourceId": 15,
    "lessonNumber": 2,
    "sourceMacro": "时间与场景",
    "sourceCategory": "瞬间发生"
  },
  {
    "id": 3016,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "突然开始",
    "point": "～出す",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ 出す",
    "meaning": "突然开始... / ...起来",
    "explanation": "表示某个动作、现象突然开始发生。与「〜始める」相比，更侧重于<span class='font-bold text-[#8a3324]'>突然性与不可预见性</span>。",
    "example": {
      "jp": "静かな図書館で、彼が突然大声で笑い<span class='grammar-highlight'>出した</span>のでびっくりした。",
      "cn": "在安静的图书馆里，他突然大声笑了起来，吓了我一跳。"
    },
    "similarGrammar": [],
    "firstKana": "だ",
    "keyword": "突然发生不可预见",
    "book": "N3",
    "sourceId": 16,
    "lessonNumber": 2,
    "sourceMacro": "状态与变化",
    "sourceCategory": "突然开始"
  },
  {
    "id": 3017,
    "lesson": "第2课",
    "macro": "情感与决心",
    "category": "动作瞬间",
    "point": "～ようとする / ～ようとしている",
    "connection": "动词<span class='text-[#8a3324] mx-1'>意志形</span> ＋ とする",
    "meaning": "正打算... / 想要...",
    "explanation": "表示<span class='font-bold text-[#8a3324]'>正准备做某个动作的瞬间</span>，或者尝试去做某事。常与「としたとき」等连用表示动作被中断。",
    "example": {
      "jp": "冷蔵庫のケーキをこっそり食べ<span class='grammar-highlight'>ようとした</span>とき、妹に見つかった。",
      "cn": "正打算偷偷吃掉冰箱里的蛋糕时，被妹妹发现了。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "正打算的瞬间",
    "book": "N3",
    "sourceId": 17,
    "lessonNumber": 2,
    "sourceMacro": "意愿与动作",
    "sourceCategory": "动作瞬间"
  },
  {
    "id": 3018,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "偶尔发生",
    "point": "～ことがある / ～こともある",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ことがある",
    "meaning": "有时会... / 也有...的时候",
    "explanation": "表示某种情况或动作虽然频率不高，但<span class='font-bold text-[#8a3324]'>偶尔会发生</span>。",
    "example": {
      "jp": "どんなに気をつけていても、人間だからミスをする<span class='grammar-highlight'>こともある</span>よ。",
      "cn": "无论多么小心，毕竟是人，偶尔也会有犯错的时候哦。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "偶尔会发生",
    "book": "N3",
    "sourceId": 18,
    "lessonNumber": 2,
    "sourceMacro": "状态与倾向",
    "sourceCategory": "偶尔发生"
  },
  {
    "id": 3019,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "事先准备",
    "point": "～ておく",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ おく",
    "meaning": "事先做好... / 让...保持原样",
    "explanation": "表示为了某种目的而<span class='font-bold text-[#8a3324]'>事先做好准备</span>，或者将某种状态维持原样。口语中常缩略为「〜とく」。",
    "example": {
      "jp": "彼女がいつ来てもいいように、部屋をきれいに片付け<span class='grammar-highlight'>ておいた</span>。",
      "cn": "为了方便女朋友随时过来，我已经提前把房间打扫干净了。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "事先准备或维持",
    "book": "N3",
    "sourceId": 19,
    "lessonNumber": 2,
    "sourceMacro": "状态与处置",
    "sourceCategory": "事先准备"
  },
  {
    "id": 3020,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "彻底完成・遗憾",
    "point": "～てしまう / ～ちゃう",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ しまう",
    "meaning": "（遗憾地）把...做完了 / 不小心...了",
    "explanation": "表示动作彻底完成，或者某事发生了导致<span class='font-bold text-[#8a3324]'>遗憾、后悔、无可挽回</span>的心情。",
    "example": {
      "jp": "徹夜で書いたレポートのデータを、間違えて全部消し<span class='grammar-highlight'>てしまった</span>。",
      "cn": "熬夜写的报告数据，竟然一不小心全给删了。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "彻底完成或遗憾",
    "book": "N3",
    "sourceId": 20,
    "lessonNumber": 2,
    "sourceMacro": "状态与结果",
    "sourceCategory": "彻底完成・遗憾"
  },
  {
    "id": 3021,
    "lesson": "第3课",
    "macro": "对象与关联",
    "category": "手段・原因",
    "point": "～によって / ～による",
    "connection": "名词 ＋ によって / による",
    "meaning": "通过... / 由于...",
    "explanation": "表示采用某种<span class='font-bold text-[#8a3324]'>方法、手段</span>来进行后项动作。或者是表示某种结果的原因。",
    "example": {
      "jp": "毎日の地道な努力<span class='grammar-highlight'>によって</span>、ついにN3の試験に合格した。",
      "cn": "通过每天脚踏实地的努力，我终于通过了N3考试。"
    },
    "similarGrammar": [
      3026
    ],
    "firstKana": "に",
    "keyword": "方法手段或原因",
    "book": "N3",
    "sourceId": 21,
    "lessonNumber": 3,
    "sourceMacro": "方法与媒介",
    "sourceCategory": "手段・原因"
  },
  {
    "id": 3022,
    "lesson": "第3课",
    "macro": "对象与关联",
    "category": "动作指向",
    "point": "～に対して",
    "connection": "名词 ＋ に対して",
    "meaning": "对... / 针对...",
    "explanation": "表示动作、态度所<span class='font-bold text-[#8a3324]'>指向的对象</span>。后项常伴随某种行为或感情。",
    "example": {
      "jp": "あの店員は、理不尽なクレーム<span class='grammar-highlight'>に対して</span>も笑顔で対応した。",
      "cn": "那位店员对毫不讲理的投诉也依然笑脸相迎。"
    },
    "similarGrammar": [
      3030
    ],
    "firstKana": "に",
    "keyword": "针对的对象",
    "book": "N3",
    "sourceId": 22,
    "lessonNumber": 3,
    "sourceMacro": "对象与关联",
    "sourceCategory": "动作指向"
  },
  {
    "id": 3023,
    "lesson": "第3课",
    "macro": "原因与理由",
    "category": "客观原因",
    "point": "～ため（に）",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词+の ＋ ため（に）",
    "meaning": "因为... / 由于...",
    "explanation": "表示<span class='font-bold text-[#8a3324]'>客观存在的原因或理由</span>，导致了后项的结果。常用于书面或较为郑重的场合。",
    "example": {
      "jp": "夜中にラーメンを食べた<span class='grammar-highlight'>ため</span>、翌朝顔がパンパンに腫れてしまった。",
      "cn": "因为大半夜吃了拉面，第二天早上脸肿得像个包子。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "客观原因(偏正式)",
    "book": "N3",
    "sourceId": 23,
    "lessonNumber": 3,
    "sourceMacro": "原因与理由",
    "sourceCategory": "客观原因"
  },
  {
    "id": 3024,
    "lesson": "第3课",
    "macro": "限定与程度",
    "category": "基准分配",
    "point": "～につき",
    "connection": "数量词 ＋ につき",
    "meaning": "每...",
    "explanation": "表示分配、计算的<span class='font-bold text-[#8a3324]'>基准或比例</span>，即“每出现这个数量，就如何”。",
    "example": {
      "jp": "この食べ放題は、お一人様<span class='grammar-highlight'>につき</span>高級アイスが3個までです。",
      "cn": "这家自助餐，每位顾客最多只能拿3个高级冰淇淋。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "分配计算基准",
    "book": "N3",
    "sourceId": 24,
    "lessonNumber": 3,
    "sourceMacro": "数量与比例",
    "sourceCategory": "基准分配"
  },
  {
    "id": 3025,
    "lesson": "第3课",
    "macro": "依据与视角",
    "category": "顺应保持",
    "point": "～とおり（に） / ～どおり（に）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>た形</span> / 名词+の ＋ とおり / 名词 ＋ どおり",
    "meaning": "正如... / 按照...",
    "explanation": "表示以后项的动作与前项的内容或状态保持一致，<span class='font-bold text-[#8a3324]'>按照那个样子进行</span>。",
    "example": {
      "jp": "YouTubeのレシピ<span class='grammar-highlight'>どおりに</span>作ったのに、なぜか黒焦げになった。",
      "cn": "明明是完全按照YouTube上的菜谱做的，不知道为什么却烧焦了。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "保持一致按照原样",
    "book": "N3",
    "sourceId": 25,
    "lessonNumber": 3,
    "sourceMacro": "依据与基准",
    "sourceCategory": "顺应保持"
  },
  {
    "id": 3026,
    "lesson": "第3课",
    "macro": "对象与关联",
    "category": "通过媒介",
    "point": "～を通して / ～を通じて",
    "connection": "名词 ＋ を通して / を通じて",
    "meaning": "通过... / 贯穿...",
    "explanation": "表示以某人或某事物为<span class='font-bold text-[#8a3324]'>媒介、手段</span>来做某事，或者表示在整个期间内伴随某种状态。",
    "example": {
      "jp": "私たちはオンラインゲーム<span class='grammar-highlight'>を通じて</span>知り合い、恋に落ちた。",
      "cn": "我们通过网络游戏相识，并坠入了爱河。"
    },
    "similarGrammar": [
      3021
    ],
    "firstKana": "を",
    "keyword": "通过媒介手段",
    "book": "N3",
    "sourceId": 26,
    "lessonNumber": 3,
    "sourceMacro": "方法与媒介",
    "sourceCategory": "通过媒介"
  },
  {
    "id": 3027,
    "lesson": "第3课",
    "macro": "举例与递进",
    "category": "典型比喻",
    "point": "～のように / ～のような / ～みたい",
    "connection": "名词 ＋ のように / のような / みたい",
    "meaning": "像...一样",
    "explanation": "举出<span class='font-bold text-[#8a3324]'>典型的例子</span>来说明事物，或者进行直观的比喻。“みたい”多用于口语。",
    "example": {
      "jp": "彼はまるで魔法使い<span class='grammar-highlight'>のように</span>、冷蔵庫の残り物で美味しいご飯を作ってくれる。",
      "cn": "他简直就像魔法师一样，能用冰箱里的剩菜做出美味的饭菜。"
    },
    "similarGrammar": [
      3039
    ],
    "firstKana": "の",
    "keyword": "典型例子直观比喻",
    "book": "N3",
    "sourceId": 27,
    "lessonNumber": 3,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "典型比喻"
  },
  {
    "id": 3028,
    "lesson": "第3课",
    "macro": "传闻与引用",
    "category": "信息来源",
    "point": "～によれば / ～によると",
    "connection": "名词 ＋ によれば / によると",
    "meaning": "根据...",
    "explanation": "用来提示传闻、<span class='font-bold text-[#8a3324]'>信息的来源</span>。后项通常接续“〜そうだ”、“〜ということだ”等表示传闻的表达。",
    "example": {
      "jp": "ネットの噂<span class='grammar-highlight'>によると</span>、あのイケメン俳優が近々結婚するらしい。",
      "cn": "根据网上的传闻，那位帅哥演员似乎最近就要结婚了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "传闻的信息来源",
    "book": "N3",
    "sourceId": 28,
    "lessonNumber": 3,
    "sourceMacro": "传闻与引用",
    "sourceCategory": "信息来源"
  },
  {
    "id": 3029,
    "lesson": "第3课",
    "macro": "传闻与引用",
    "category": "转达信息",
    "point": "～ということだ / ～とのことだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ ということだ / とのことだ",
    "meaning": "听说... / 据说...",
    "explanation": "将从别处得到的<span class='font-bold text-[#8a3324]'>信息传达给他人</span>。“とのことだ”常用于传达某人具体的留言。",
    "example": {
      "jp": "幹事からの連絡によると、今日の飲み会は部長のおごりだ<span class='grammar-highlight'>ということだ</span>。",
      "cn": "根据聚会干事的通知，据说今天的酒局是部长请客。"
    },
    "similarGrammar": [
      3003
    ],
    "firstKana": "と",
    "keyword": "传达得来的信息",
    "book": "N3",
    "sourceId": 29,
    "lessonNumber": 3,
    "sourceMacro": "传闻与引用",
    "sourceCategory": "转达信息"
  },
  {
    "id": 3030,
    "lesson": "第3课",
    "macro": "对象与关联",
    "category": "提示话题",
    "point": "～について（は）",
    "connection": "名词 ＋ について",
    "meaning": "关于...",
    "explanation": "提示<span class='font-bold text-[#8a3324]'>与之相关的话题内容</span>，后项多为思考、调查、说明等相关的动作。",
    "example": {
      "jp": "「きのこの山」と「たけのこの里」、どちらが美味しいか<span class='grammar-highlight'>について</span>、友人と真剣に議論した。",
      "cn": "关于“蘑菇山”和“竹笋乡”哪一种更好吃，我和朋友进行了认真的讨论。"
    },
    "similarGrammar": [
      3022
    ],
    "firstKana": "に",
    "keyword": "提示相关话题",
    "book": "N3",
    "sourceId": 30,
    "lessonNumber": 3,
    "sourceMacro": "对象与关联",
    "sourceCategory": "提示话题"
  },
  {
    "id": 3031,
    "lesson": "第4课",
    "macro": "原因与理由",
    "category": "强调・解释",
    "point": "～んだ / ～のだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ んだ / のだ",
    "meaning": "是因为... / 就是...",
    "explanation": "用于说明原因、理由，或者对某事进行<span class='font-bold text-[#8a3324]'>强调和解释</span>。口语中常用「〜んだ」。",
    "example": {
      "jp": "最近ずっと寝不足な<span class='grammar-highlight'>んだ</span>。毎晩遅くまで残業しているからね。",
      "cn": "最近一直睡眠不足。因为我每晚都要加班到很晚嘛。"
    },
    "similarGrammar": [],
    "firstKana": "ん",
    "keyword": "说明原因/强调",
    "book": "N3",
    "sourceId": 31,
    "lessonNumber": 4,
    "sourceMacro": "原因与理由",
    "sourceCategory": "强调・解释"
  },
  {
    "id": 3032,
    "lesson": "第4课",
    "macro": "状态与结果",
    "category": "必须・义务",
    "point": "～なきゃ / ～なくちゃ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span>（去掉ない） ＋ なきゃ / なくちゃ",
    "meaning": "不...不行 / 应当...",
    "explanation": "是「〜なければならない」等句型的<span class='font-bold text-[#8a3324]'>口语缩略形式</span>，表示客观上或常理上应当去做某事。",
    "example": {
      "jp": "やばい、もうすぐ終電の時間だ。早く駅に向かわ<span class='grammar-highlight'>なきゃ</span>！",
      "cn": "糟了，马上就到末班车的时间了。我得赶紧去车站才行！"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "口语必须做",
    "book": "N3",
    "sourceId": 32,
    "lessonNumber": 4,
    "sourceMacro": "状态与强制",
    "sourceCategory": "必须・义务"
  },
  {
    "id": 3033,
    "lesson": "第4课",
    "macro": "主张与评价",
    "category": "确认记忆",
    "point": "～だっけ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ っけ",
    "meaning": "...来着？ / 是不是...",
    "explanation": "用于向对方或自己<span class='font-bold text-[#8a3324]'>确认有些模糊的记忆</span>，或者回想过去的事情。",
    "example": {
      "jp": "明日のプレゼンの会議室は、3階の第2会議室<span class='grammar-highlight'>だっけ</span>？",
      "cn": "明天发表用的会议室，是3楼的第2会议室来着？"
    },
    "similarGrammar": [],
    "firstKana": "だ",
    "keyword": "确认模糊记忆",
    "book": "N3",
    "sourceId": 33,
    "lessonNumber": 4,
    "sourceMacro": "评价与视角",
    "sourceCategory": "确认记忆"
  },
  {
    "id": 3034,
    "lesson": "第4课",
    "macro": "可能性",
    "category": "意外推测",
    "point": "～たりして",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ りして",
    "meaning": "说不定会... / 也许会...",
    "explanation": "表达一种<span class='font-bold text-[#8a3324]'>带有意外感或轻微期待的推测</span>。相当于「〜かもしれない」的口语表达。",
    "example": {
      "jp": "いつも冷たい彼だけど、本当は私のことが好きだっ<span class='grammar-highlight'>たりして</span>？",
      "cn": "虽然他平时总是很冷淡，但说不定其实心里暗恋我呢？"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "意外或期待的推测",
    "book": "N3",
    "sourceId": 34,
    "lessonNumber": 4,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "意外推测"
  },
  {
    "id": 3035,
    "lesson": "第4课",
    "macro": "逆接与让步",
    "category": "让步条件",
    "point": "～たって / ～だって",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ って / だって",
    "meaning": "即使...也...",
    "explanation": "是「〜ても / 〜でも」的口语形式。表示<span class='font-bold text-[#8a3324]'>即使在前项的条件下</span>，后项的结果也不会改变。",
    "example": {
      "jp": "一日だけケーキを我慢し<span class='grammar-highlight'>たって</span>、すぐには痩せないよ。",
      "cn": "就算只忍住一天不吃蛋糕，也是不会马上瘦下来的哦。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "口语即使也",
    "book": "N3",
    "sourceId": 35,
    "lessonNumber": 4,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "让步条件"
  },
  {
    "id": 3036,
    "lesson": "第4课",
    "macro": "主张与评价",
    "category": "主观确信",
    "point": "～に決まっている",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ に決まっている",
    "meaning": "肯定是... / 注定...",
    "explanation": "表达说话人具有<span class='font-bold text-[#8a3324]'>强烈的主观确信</span>，认为事情理应如此发展。",
    "example": {
      "jp": "毎日ゲームばかりしていたら、試験に落ちる<span class='grammar-highlight'>に決まっている</span>。",
      "cn": "要是每天只顾着打游戏，考试肯定会不及格的啊。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "主观确信必然",
    "book": "N3",
    "sourceId": 36,
    "lessonNumber": 4,
    "sourceMacro": "主张与评价",
    "sourceCategory": "主观确信"
  },
  {
    "id": 3037,
    "lesson": "第4课",
    "macro": "主张与评价",
    "category": "确认・反问",
    "point": "～じゃない / ～じゃん",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ じゃない / じゃん",
    "meaning": "不是...嘛 / ...嘛",
    "explanation": "用于向对方确认显而易见的事实，或带有<span class='font-bold text-[#8a3324]'>轻微的反问、责备、惊喜</span>等语气。",
    "example": {
      "jp": "ほら、傘を持っていかないから、ずぶ濡れになった<span class='grammar-highlight'>じゃない</span>。",
      "cn": "你看，我就说让你带伞你不带，现在淋成落汤鸡了吧。"
    },
    "similarGrammar": [],
    "firstKana": "じ",
    "keyword": "口语确认事实",
    "book": "N3",
    "sourceId": 37,
    "lessonNumber": 4,
    "sourceMacro": "主张与评价",
    "sourceCategory": "确认・反问"
  },
  {
    "id": 3038,
    "lesson": "第4课",
    "macro": "主张与评价",
    "category": "提示话题",
    "point": "～って",
    "connection": "名词 ＋ って",
    "meaning": "所谓的...",
    "explanation": "在口语中用来<span class='font-bold text-[#8a3324]'>提示话题或进行定义</span>，相当于书面语的「〜というのは」。",
    "example": {
      "jp": "満員電車<span class='grammar-highlight'>って</span>、本当に疲れるしストレスが溜まるよね。",
      "cn": "满载的电车啊，真是让人疲惫又积攒压力呢。"
    },
    "similarGrammar": [
      3011
    ],
    "firstKana": "っ",
    "keyword": "口语提示话题",
    "book": "N3",
    "sourceId": 38,
    "lessonNumber": 4,
    "sourceMacro": "评价与视角",
    "sourceCategory": "提示话题"
  },
  {
    "id": 3039,
    "lesson": "第4课",
    "macro": "举例与递进",
    "category": "主观比喻・推测",
    "point": "～みたいだ / ～みたいに / ～みたいな",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ みたいだ / みたいに / みたいな",
    "meaning": "好像... / 宛如...",
    "explanation": "既可以表示基于自身感觉的<span class='font-bold text-[#8a3324]'>主观推测</span>，也可以用于举例或比喻。",
    "example": {
      "jp": "初めて彼に会ったとき、まるで漫画の王子様<span class='grammar-highlight'>みたいだ</span>と思った。",
      "cn": "第一次见到他的时候，我觉得他简直就像漫画里的王子一样。"
    },
    "similarGrammar": [
      3027
    ],
    "firstKana": "み",
    "keyword": "主观推测或比喻",
    "book": "N3",
    "sourceId": 39,
    "lessonNumber": 4,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "主观比喻・推测"
  },
  {
    "id": 3040,
    "lesson": "第4课",
    "macro": "情感与决心",
    "category": "后悔・遗憾",
    "point": "～ばよかった / ～たらよかった",
    "connection": "动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) / 动词<span class='text-[#8a3324] mx-1'>ない形</span>(なければ) ＋ よかった",
    "meaning": "要是...就好了 / 早知道就...了",
    "explanation": "表示对过去未做某事或做了某事感到<span class='font-bold text-[#8a3324]'>后悔与遗憾</span>。",
    "example": {
      "jp": "セールで焦って買わずに、もっと他の店も見ておけ<span class='grammar-highlight'>ばよかった</span>。",
      "cn": "真不该在打折时脑热就买了，要是当时多去几家店转转看就好了。"
    },
    "similarGrammar": [],
    "firstKana": "ば",
    "keyword": "后悔遗憾",
    "book": "N3",
    "sourceId": 40,
    "lessonNumber": 4,
    "sourceMacro": "情感与思考",
    "sourceCategory": "后悔・遗憾"
  },
  {
    "id": 3041,
    "lesson": "第4课",
    "macro": "限定与程度",
    "category": "反复・偏向",
    "point": "～ばかり / ～てばかり",
    "connection": "名词 ＋ ばかり / 动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ ばかりいる",
    "meaning": "光是... / 总是...",
    "explanation": "表示在众多事物中偏偏只做某一项，或动作反复发生，常带有<span class='font-bold text-[#8a3324]'>消极、批评</span>的语感。",
    "example": {
      "jp": "試験が近いのに、弟はゲームをし<span class='grammar-highlight'>てばかりいる</span>。",
      "cn": "明明快考试了，弟弟却总是在打游戏。"
    },
    "similarGrammar": [],
    "firstKana": "ば",
    "keyword": "总是光做某事",
    "book": "N3",
    "sourceId": 41,
    "lessonNumber": 4,
    "sourceMacro": "限定与程度",
    "sourceCategory": "反复・偏向"
  },
  {
    "id": 3042,
    "lesson": "第5课",
    "macro": "举例与递进",
    "category": "直观比喻",
    "point": "～のように / ～みたい（に）",
    "connection": "名词 ＋ のように / みたいに",
    "meaning": "像...一样",
    "explanation": "举出一个<span class='font-bold text-[#8a3324]'>典型的事物</span>进行比喻，说明其状态或性质。口语中常使用「〜みたい」。",
    "example": {
      "jp": "彼はまるでプロの歌手<span class='grammar-highlight'>のように</span>歌が上手だ。",
      "cn": "他唱歌好听得简直就像专业歌手一样。"
    },
    "similarGrammar": [
      3027,
      3039
    ],
    "firstKana": "の",
    "keyword": "典型事物直观比喻",
    "book": "N3",
    "sourceId": 42,
    "lessonNumber": 5,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "直观比喻"
  },
  {
    "id": 3043,
    "lesson": "第5课",
    "macro": "举例与递进",
    "category": "理所当然",
    "point": "～はもちろん",
    "connection": "名词 ＋ はもちろん",
    "meaning": "...自不必说；不用说...也...",
    "explanation": "提示一个<span class='font-bold text-[#8a3324]'>理所当然</span>的事物，并表示不仅如此，其他事物也是同理。",
    "example": {
      "jp": "彼は英語<span class='grammar-highlight'>はもちろん</span>、フランス語や中国語もペラペラだ。",
      "cn": "他英语好自不必说，连法语和中文也非常流利。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "理所当然不仅如此",
    "book": "N3",
    "sourceId": 43,
    "lessonNumber": 5,
    "sourceMacro": "添加与递进",
    "sourceCategory": "理所当然"
  },
  {
    "id": 3044,
    "lesson": "第5课",
    "macro": "比较与伴随",
    "category": "程度不及",
    "point": "～ほど〜ない",
    "connection": "名词 ＋ ほど ＋ 否定",
    "meaning": "不如...那样...；没有...那么...",
    "explanation": "将两者进行比较，表示后者的程度<span class='font-bold text-[#8a3324]'>不及前者</span>。",
    "example": {
      "jp": "実写版の映画は、アニメ版<span class='grammar-highlight'>ほど</span>面白く<span class='grammar-highlight'>なかった</span>。",
      "cn": "真人版电影没有动画版那么好看。"
    },
    "similarGrammar": [],
    "firstKana": "ほ",
    "keyword": "程度比较不及",
    "book": "N3",
    "sourceId": 44,
    "lessonNumber": 5,
    "sourceMacro": "比较与基准",
    "sourceCategory": "程度不及"
  },
  {
    "id": 3045,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "代替・交换",
    "point": "～のかわりに",
    "connection": "名词 ＋ のかわりに / 动词<span class='text-[#8a3324] mx-1'>普通体</span> ＋ かわりに",
    "meaning": "代替...；作为...的交换",
    "explanation": "表示不使用通常的人或事物，而是<span class='font-bold text-[#8a3324]'>用其他的人或事物来替代</span>。也可以表示补偿或交换。",
    "example": {
      "jp": "今日は病気の山田さん<span class='grammar-highlight'>のかわりに</span>、私が会議に出席します。",
      "cn": "今天我代替生病的山田先生去参加会议。"
    },
    "similarGrammar": [],
    "firstKana": "の",
    "keyword": "替代或交换",
    "book": "N3",
    "sourceId": 45,
    "lessonNumber": 5,
    "sourceMacro": "状态与处置",
    "sourceCategory": "代替・交换"
  },
  {
    "id": 3046,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "不伴随动作",
    "point": "～ずに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span>（去掉ない） ＋ ずに （※する变为せずに）",
    "meaning": "不...而...；没有...就...",
    "explanation": "相当于「〜ないで」，表示在<span class='font-bold text-[#8a3324]'>不进行前项动作</span>的状态下，进行了后项动作。属于书面偏硬的表达。",
    "example": {
      "jp": "昨夜は残業で疲れすぎて、お風呂に入ら<span class='grammar-highlight'>ずに</span>寝てしまった。",
      "cn": "昨晚加班太累了，没洗澡就睡着了。"
    },
    "similarGrammar": [],
    "firstKana": "ず",
    "keyword": "不伴随动作",
    "book": "N3",
    "sourceId": 46,
    "lessonNumber": 5,
    "sourceMacro": "状态与附带",
    "sourceCategory": "不伴随动作"
  },
  {
    "id": 3047,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "保持原样",
    "point": "～まま",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 名词＋の / 动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ まま",
    "meaning": "保持...的状态；就那样...",
    "explanation": "表示前一个动作产生的结果或状态<span class='font-bold text-[#8a3324]'>一直保持不变</span>，在此状态下进行了后项动作。",
    "example": {
      "jp": "寝ぼけていて、眼鏡をかけた<span class='grammar-highlight'>まま</span>顔を洗おうとしてしまった。",
      "cn": "睡得迷迷糊糊的，戴着眼镜就打算洗脸。"
    },
    "similarGrammar": [],
    "firstKana": "ま",
    "keyword": "状态保持不变",
    "book": "N3",
    "sourceId": 47,
    "lessonNumber": 5,
    "sourceMacro": "状态与附带",
    "sourceCategory": "保持原样"
  },
  {
    "id": 3048,
    "lesson": "第5课",
    "macro": "时间与顺序",
    "category": "中顿顺接",
    "point": "～（中顿） / ～て",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span>（中顿）",
    "meaning": "...并且...；...然后...",
    "explanation": "使用动词的<span class='font-bold text-[#8a3324]'>第一连用形</span>直接停顿，起连接前后分句的作用。比「〜て」更为正式、书面化。",
    "example": {
      "jp": "申込書に必要事項を<span class='grammar-highlight'>記入し</span>、窓口に提出してください。",
      "cn": "在申请表上填写必要事项后，请提交至窗口。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "动作顺接中顿",
    "book": "N3",
    "sourceId": 48,
    "lessonNumber": 5,
    "sourceMacro": "时间与场景",
    "sourceCategory": "中顿顺接"
  },
  {
    "id": 3049,
    "lesson": "第5课",
    "macro": "时间与顺序",
    "category": "特定阶段",
    "point": "～ところ（へ / に / を / で）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / <span class='text-[#8a3324] mx-1'>ている形</span> / <span class='text-[#8a3324] mx-1'>た形</span> ＋ ところ",
    "meaning": "正要...时 / 正在...时 / 刚刚...时",
    "explanation": "表示动作处于某个<span class='font-bold text-[#8a3324]'>特定的时间点或阶段</span>。后面接续的助词（へ、に、を、で）取决于后项动词的要求。",
    "example": {
      "jp": "授業中にこっそり弁当を食べている<span class='grammar-highlight'>ところを</span>、先生に見つかってしまった。",
      "cn": "上课偷偷吃便当的时候，被老师逮了个正着。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "特定时间阶段",
    "book": "N3",
    "sourceId": 49,
    "lessonNumber": 5,
    "sourceMacro": "时间与场景",
    "sourceCategory": "特定阶段"
  },
  {
    "id": 3050,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "到达极限",
    "point": "～きる / 〜きれる / 〜きれない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ きる",
    "meaning": "完全... / 彻底... / 到最后",
    "explanation": "表示动作或状态达到了极限，<span class='font-bold text-[#8a3324]'>彻底地做完了某事</span>，毫无保留。否定形「〜きれない」表示无法做到最后。",
    "example": {
      "jp": "こんなにたくさんの料理、一人では絶対に食べ<span class='grammar-highlight'>きれない</span>よ！",
      "cn": "这么多菜，我一个人绝对吃不完啊！"
    },
    "similarGrammar": [],
    "firstKana": "き",
    "keyword": "彻底做完达极限",
    "book": "N3",
    "sourceId": 50,
    "lessonNumber": 5,
    "sourceMacro": "状态与结果",
    "sourceCategory": "到达极限"
  },
  {
    "id": 3051,
    "lesson": "第6课",
    "macro": "原因与理由",
    "category": "积极原因",
    "point": "～おかげで / ～おかげだ",
    "connection": "名词＋の / <span class='text-[#8a3324] mx-1'>普通体</span>（な形容词＋な） ＋ おかげで",
    "meaning": "多亏了... / 幸亏...",
    "explanation": "表示因为某人或某事的帮助，得到了好的结果。带有<span class='font-bold text-[#8a3324]'>感激的心情</span>。",
    "example": {
      "jp": "毎日推しの動画を見ている<span class='grammar-highlight'>おかげで</span>、仕事の辛いストレスを乗り越えられている。",
      "cn": "多亏了每天看偶像的视频，我才能熬过工作的痛苦压力。"
    },
    "similarGrammar": [],
    "firstKana": "お",
    "keyword": "感激的积极原因",
    "book": "N3",
    "sourceId": 51,
    "lessonNumber": 6,
    "sourceMacro": "原因与理由",
    "sourceCategory": "积极原因"
  },
  {
    "id": 3052,
    "lesson": "第6课",
    "macro": "时间与顺序",
    "category": "期间贯穿",
    "point": "～を通じて / ～を通して",
    "connection": "名词 ＋ を通じて / を通して",
    "meaning": "贯穿... / 整个...",
    "explanation": "表示在某个相对较长的期间内<span class='font-bold text-[#8a3324]'>一直保持某种状态</span>。也可用于表示“以...为媒介”。",
    "example": {
      "jp": "オンラインゲーム<span class='grammar-highlight'>を通して</span>、国籍も年齢も違うたくさんの友達ができた。",
      "cn": "通过网络游戏，我交到了许多国籍和年龄都不同的朋友。"
    },
    "similarGrammar": [
      3026
    ],
    "firstKana": "を",
    "keyword": "期间一直贯穿",
    "book": "N3",
    "sourceId": 52,
    "lessonNumber": 6,
    "sourceMacro": "时间与场景",
    "sourceCategory": "期间贯穿"
  },
  {
    "id": 3053,
    "lesson": "第6课",
    "macro": "主张与评价",
    "category": "委婉呼吁",
    "point": "～ませんか / ～ないですか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ か",
    "meaning": "难道不...吗？ / 试着...怎么样？",
    "explanation": "用疑问的形式，委婉地表达自己的看法，或是呼吁对方<span class='font-bold text-[#8a3324]'>产生共鸣与赞同</span>。",
    "example": {
      "jp": "今日は仕事なんか忘れて、一緒に美味しい焼肉を食べに行き<span class='grammar-highlight'>ませんか</span>。",
      "cn": "今天就把工作什么的都抛到脑后，一起去吃顿美味的烤肉怎么样？"
    },
    "similarGrammar": [],
    "firstKana": "ま",
    "keyword": "呼吁产生共鸣",
    "book": "N3",
    "sourceId": 53,
    "lessonNumber": 6,
    "sourceMacro": "主张与评价",
    "sourceCategory": "委婉呼吁"
  },
  {
    "id": 3054,
    "lesson": "第6课",
    "macro": "主张与评价",
    "category": "代表性联想",
    "point": "～というと / ～といえば / ～といったら",
    "connection": "名词 ＋ というと / といえば / といったら",
    "meaning": "提起... / 说到...",
    "explanation": "接在名词之后，用来引出与该话题最相关、最具有<span class='font-bold text-[#8a3324]'>代表性的联想事物</span>。",
    "example": {
      "jp": "日本の夏<span class='grammar-highlight'>といえば</span>、やっぱり花火大会と冷たいスイカですよね。",
      "cn": "提起日本的夏天，那当然还得是烟火大会和冰镇西瓜对吧。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "提出代表性联想",
    "book": "N3",
    "sourceId": 54,
    "lessonNumber": 6,
    "sourceMacro": "评价与视角",
    "sourceCategory": "代表性联想"
  },
  {
    "id": 3055,
    "lesson": "第6课",
    "macro": "主张与评价",
    "category": "理所应当",
    "point": "～べきだ / ～べきではない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ べきだ （※する 变为 すべき）",
    "meaning": "应当... / 不该...",
    "explanation": "基于社会常识或普遍道理，认为这样做是<span class='font-bold text-[#8a3324]'>理所应当的</span>。通常不用于直接对长辈提出要求。",
    "example": {
      "jp": "ダイエット中なら、夜中の12時にカップラーメンを食べる<span class='grammar-highlight'>べきではない</span>。",
      "cn": "既然在减肥，就不该在半夜12点吃泡面。"
    },
    "similarGrammar": [],
    "firstKana": "べ",
    "keyword": "社会常识理所应当",
    "book": "N3",
    "sourceId": 55,
    "lessonNumber": 6,
    "sourceMacro": "主张与评价",
    "sourceCategory": "理所应当"
  },
  {
    "id": 3056,
    "lesson": "第6课",
    "macro": "依据与视角",
    "category": "特定立场",
    "point": "～にとって（は / も）",
    "connection": "名词 ＋ にとって",
    "meaning": "对...来说",
    "explanation": "站在某个<span class='font-bold text-[#8a3324]'>特定的立场或视角</span>上来看待问题，后项多为评价性的表达（如“重要、困难”等）。",
    "example": {
      "jp": "猫<span class='grammar-highlight'>にとって</span>、高いおもちゃよりも、ただの段ボール箱のほうが魅力的らしい。",
      "cn": "对猫咪来说，跟昂贵的玩具相比，似乎普通的纸皮箱更有吸引力。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "特定视角评价",
    "book": "N3",
    "sourceId": 56,
    "lessonNumber": 6,
    "sourceMacro": "评价与视角",
    "sourceCategory": "特定立场"
  },
  {
    "id": 3057,
    "lesson": "第6课",
    "macro": "条件与假定",
    "category": "同向改变",
    "point": "～ば〜ほど",
    "connection": "动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) ＋ 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ ほど",
    "meaning": "越...越...",
    "explanation": "表示随着前项程度的加深，后项的程度也随之发生<span class='font-bold text-[#8a3324]'>同向的改变</span>。",
    "example": {
      "jp": "この曲は、聞け<span class='grammar-highlight'>ば</span>聞く<span class='grammar-highlight'>ほど</span>頭から離れなくなる中毒性がある。",
      "cn": "这首歌有一种魔力，越听越让人上头（在脑海里挥之不去）。"
    },
    "similarGrammar": [],
    "firstKana": "ば",
    "keyword": "程度随之同向加深",
    "book": "N3",
    "sourceId": 57,
    "lessonNumber": 6,
    "sourceMacro": "条件与假定",
    "sourceCategory": "同向改变"
  },
  {
    "id": 3058,
    "lesson": "第6课",
    "macro": "原因与理由",
    "category": "客观重大原因",
    "point": "～による / ～によって",
    "connection": "名词 ＋ による ＋ 名词 / 名词 ＋ によって",
    "meaning": "由于... / 因为...",
    "explanation": "表示引起某种结果的原因，这种结果往往是<span class='font-bold text-[#8a3324]'>客观的重大事件</span>（如灾害、事故等）。",
    "example": {
      "jp": "人身事故<span class='grammar-highlight'>による</span>電車の遅延で、大事な会議に遅刻してしまった。",
      "cn": "由于人员伤亡事故导致电车晚点，结果重要的会议迟到了。"
    },
    "similarGrammar": [
      3021
    ],
    "firstKana": "に",
    "keyword": "客观重大事件原因",
    "book": "N3",
    "sourceId": 58,
    "lessonNumber": 6,
    "sourceMacro": "原因与理由",
    "sourceCategory": "客观重大原因"
  },
  {
    "id": 3059,
    "lesson": "第6课",
    "macro": "举例与递进",
    "category": "波及其他",
    "point": "～ばかりでなく / ～ばかりか",
    "connection": "名词 / <span class='text-[#8a3324] mx-1'>普通体</span> ＋ ばかりでなく / ばかりか",
    "meaning": "不仅...而且...",
    "explanation": "举出一个例子，表示<span class='font-bold text-[#8a3324]'>不仅限于此</span>，范围还波及到其他同类事物。语气比「〜だけでなく」稍硬。",
    "example": {
      "jp": "彼は遅刻した<span class='grammar-highlight'>ばかりか</span>、謝りもせずに堂々と席に座った。",
      "cn": "他不仅迟到了，而且连句道歉都没有就理直气壮地坐下了。"
    },
    "similarGrammar": [],
    "firstKana": "ば",
    "keyword": "波及不仅限于",
    "book": "N3",
    "sourceId": 59,
    "lessonNumber": 6,
    "sourceMacro": "添加与递进",
    "sourceCategory": "波及其他"
  },
  {
    "id": 3060,
    "lesson": "第6课",
    "macro": "时间与顺序",
    "category": "每当伴随",
    "point": "～たびに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词＋の ＋ たびに",
    "meaning": "每当...就...",
    "explanation": "表示每次发生前项时，往往伴随着后项。不用于理所当然的日常琐事，带有<span class='font-bold text-[#8a3324]'>强调每次都如此</span>的语感。",
    "example": {
      "jp": "コンビニの新作スイーツを見る<span class='grammar-highlight'>たびに</span>、ついダイエットを忘れて買ってしまう。",
      "cn": "每当看到便利店出新款甜点，总是忍不住把减肥抛到脑后买下来。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "强调每次伴随",
    "book": "N3",
    "sourceId": 60,
    "lessonNumber": 6,
    "sourceMacro": "时间与场景",
    "sourceCategory": "每当伴随"
  },
  {
    "id": 3061,
    "lesson": "第6课",
    "macro": "可能性",
    "category": "逻辑合理推断",
    "point": "～はずだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词＋の / な形容词＋な） ＋ はずだ",
    "meaning": "按理说会... / 理应...",
    "explanation": "基于某种客观理由或确凿的根据，在逻辑上得出的<span class='font-bold text-[#8a3324]'>理应如此的推断</span>。",
    "example": {
      "jp": "毎日あんなに遅くまで残業しているのだから、彼は疲れている<span class='grammar-highlight'>はずだ</span>。",
      "cn": "他每天加班到那么晚，身体肯定很累了。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "客观根据推断",
    "book": "N3",
    "sourceId": 61,
    "lessonNumber": 6,
    "sourceMacro": "可能性与推測",
    "sourceCategory": "逻辑合理推断"
  },
  {
    "id": 3114,
    "lesson": "第6课",
    "macro": "可能性",
    "category": "强烈否定推测",
    "point": "～はずがない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词＋の / な形容词＋な） ＋ はずがない",
    "meaning": "按理不可能... / 不会...",
    "explanation": "基于某种应有状态、客观根据或常识，从反面推断某事不可能成立，带有<span class='font-bold text-[#8a3324]'>理应不会如此</span>的语气。",
    "example": {
      "jp": "あんなにまじめな彼が、約束を忘れる<span class='grammar-highlight'>はずがない</span>。",
      "cn": "那么认真的他，按理不可能忘记约定。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "应有状态反推不可能",
    "book": "N3",
    "sourceId": 61,
    "lessonNumber": 6,
    "sourceMacro": "可能性与推測",
    "sourceCategory": "逻辑合理推断"
  },
  {
    "id": 3062,
    "lesson": "第7课",
    "macro": "条件与假定",
    "category": "礼貌假定",
    "point": "～と（ですと・ますと）",
    "connection": "<span class='text-[#8a3324] mx-1'>礼貌体</span>（です / ます） ＋ と",
    "meaning": "如果...的话",
    "explanation": "接在礼貌体后面，用于礼貌地提出<span class='font-bold text-[#8a3324]'>假定条件</span>。",
    "example": {
      "jp": "金曜日の夜<span class='grammar-highlight'>ですと</span>、どこの居酒屋も満席かもしれません。",
      "cn": "如果是星期五晚上的话，估计哪家小酒馆都客满了。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "礼貌的假定",
    "book": "N3",
    "sourceId": 62,
    "lessonNumber": 7,
    "sourceMacro": "条件与假定",
    "sourceCategory": "礼貌假定"
  },
  {
    "id": 3063,
    "lesson": "第7课",
    "macro": "条件与假定",
    "category": "基于现状假定",
    "point": "～ようなら / ～ようだったら",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词+の / な形容词+な） ＋ ようなら",
    "meaning": "如果...的话",
    "explanation": "基于<span class='font-bold text-[#8a3324]'>当前的状况</span>进行假定，后项通常接续建议、判断或请求。",
    "example": {
      "jp": "熱が下がらない<span class='grammar-highlight'>ようなら</span>、無理しないで会社を休んだほうがいいですよ。",
      "cn": "如果烧还是退不下来，你最好别勉强，直接向公司请个假吧。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "基于现状的假定",
    "book": "N3",
    "sourceId": 63,
    "lessonNumber": 7,
    "sourceMacro": "条件与假定",
    "sourceCategory": "基于现状假定"
  },
  {
    "id": 3064,
    "lesson": "第7课",
    "macro": "原因与理由",
    "category": "铺垫・说明",
    "point": "～んです / ～んだけれど",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ んです",
    "meaning": "是因为... / 就是...",
    "explanation": "用于说明情况或原因，比「〜のです」更口语化。在句末时常用于<span class='font-bold text-[#8a3324]'>铺垫或解释</span>。",
    "example": {
      "jp": "実は、パソコンの調子がおかしい<span class='grammar-highlight'>んです</span>。ちょっと見てもらえませんか。",
      "cn": "其实是我的电脑出了点毛病。能不能麻烦你帮我看一下？"
    },
    "similarGrammar": [
      3031
    ],
    "firstKana": "ん",
    "keyword": "说明情况/铺垫",
    "book": "N3",
    "sourceId": 64,
    "lessonNumber": 7,
    "sourceMacro": "原因与理由",
    "sourceCategory": "铺垫・说明"
  },
  {
    "id": 3065,
    "lesson": "第7课",
    "macro": "原因与理由",
    "category": "辩解原因",
    "point": "～ものですから / ～もんだから",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词+な / な形容词+な） ＋ ものですから",
    "meaning": "因为...",
    "explanation": "用于说明某种不得已的原因，常带有<span class='font-bold text-[#8a3324]'>辩解或抱歉</span>的语气。",
    "example": {
      "jp": "電車が遅れた<span class='grammar-highlight'>ものですから</span>、会議に間に合いませんでした。申し訳ありません。",
      "cn": "因为电车晚点了，所以没赶上开会。实在是非常抱歉。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "辩解的理由",
    "book": "N3",
    "sourceId": 65,
    "lessonNumber": 7,
    "sourceMacro": "原因与理由",
    "sourceCategory": "辩解原因"
  },
  {
    "id": 3066,
    "lesson": "第7课",
    "macro": "举例与递进",
    "category": "例举・轻视",
    "point": "～なんか / ～なんて / ～など",
    "connection": "名词 ＋ なんか",
    "meaning": "...之类的",
    "explanation": "举出一个例子。在向对方提出建议时使用，显得不那么强硬；有时也带有一种<span class='font-bold text-[#8a3324]'>轻视、谦逊</span>的语气。",
    "example": {
      "jp": "誕生日のプレゼントに、おしゃれなワイヤレスイヤホン<span class='grammar-highlight'>なんか</span>どうですか。",
      "cn": "生日礼物送个时尚的无线耳机之类的怎么样？"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "举例/轻视",
    "book": "N3",
    "sourceId": 66,
    "lessonNumber": 7,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "例举・轻视"
  },
  {
    "id": 3067,
    "lesson": "第7课",
    "macro": "主张与评价",
    "category": "委婉看法",
    "point": "～かと思う",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 疑问词 ＋ かと思う",
    "meaning": "我想... / 我觉得大概...",
    "explanation": "作为一种<span class='font-bold text-[#8a3324]'>委婉地表达自己看法</span>的说法，避免过于断定。",
    "example": {
      "jp": "こちらのデザインのほうが、若者に人気が出る<span class='grammar-highlight'>かと思います</span>。",
      "cn": "我觉得这款设计应该会更受年轻人的欢迎。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "委婉表达看法",
    "book": "N3",
    "sourceId": 67,
    "lessonNumber": 7,
    "sourceMacro": "评价与视角",
    "sourceCategory": "委婉看法"
  },
  {
    "id": 3068,
    "lesson": "第7课",
    "macro": "时间与顺序",
    "category": "期间・趁着",
    "point": "～うちに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ている形</span> / 动词<span class='text-[#8a3324] mx-1'>原形</span> / 动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ うちに",
    "meaning": "在...的过程中 / 趁着...",
    "explanation": "表示在某个持续的状态期间内，<span class='font-bold text-[#8a3324]'>不知不觉发生了某种变化</span>；或表示趁着状态未改变前做某事。",
    "example": {
      "jp": "アイスクリームが溶けない<span class='grammar-highlight'>うちに</span>、早く食べてしまいましょう。",
      "cn": "趁着冰淇淋还没化，咱们赶紧吃掉吧。"
    },
    "similarGrammar": [],
    "firstKana": "う",
    "keyword": "过程中的变化/趁着",
    "book": "N3",
    "sourceId": 68,
    "lessonNumber": 7,
    "sourceMacro": "时间与场景",
    "sourceCategory": "期间・趁着"
  },
  {
    "id": 3069,
    "lesson": "第7课",
    "macro": "时间与顺序",
    "category": "主观刚完成",
    "point": "～たばかりだ / ～たばかりの",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ ばかりだ",
    "meaning": "刚刚...",
    "explanation": "表示从动作发生到现在<span class='font-bold text-[#8a3324]'>主观上感觉时间很短</span>。",
    "example": {
      "jp": "先週買っ<span class='grammar-highlight'>たばかりの</span>スマホを落として、画面を割ってしまった。",
      "cn": "我把上周刚买的手机掉在地上，屏幕都摔碎了。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "主观上刚完成",
    "book": "N3",
    "sourceId": 69,
    "lessonNumber": 7,
    "sourceMacro": "时间与场景",
    "sourceCategory": "主观刚完成"
  },
  {
    "id": 3070,
    "lesson": "第7课",
    "macro": "情感与决心",
    "category": "遗憾・责备",
    "point": "～ばいいのに / ～たらいいのに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) / 动词<span class='text-[#8a3324] mx-1'>た形</span>(たら) ＋ いいのに",
    "meaning": "要是...就好了 / 明明...就好了",
    "explanation": "表示对没有按期望发生的事情感到<span class='font-bold text-[#8a3324]'>遗憾或惋惜</span>，有时也用于对对方的责备或轻微建议。",
    "example": {
      "jp": "困った時は、もっと早く私に相談すれ<span class='grammar-highlight'>ばいいのに</span>。",
      "cn": "遇到困难的时候，你早点找我商量就好了呀。"
    },
    "similarGrammar": [
      3040
    ],
    "firstKana": "ば",
    "keyword": "遗憾/责备/建议",
    "book": "N3",
    "sourceId": 70,
    "lessonNumber": 7,
    "sourceMacro": "情感与思考",
    "sourceCategory": "遗憾・责备"
  },
  {
    "id": 3071,
    "lesson": "第7课",
    "macro": "授受与敬语",
    "category": "请求恩惠",
    "point": "～てもらってもいいですか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ もらってもいいですか",
    "meaning": "能请您（为我）做...吗？",
    "explanation": "用于委婉地请求对方为自己做某事。比「～てください」更具有<span class='font-bold text-[#8a3324]'>商量和请求</span>的客观语气。",
    "example": {
      "jp": "すみません、午後の会議の資料作りを手伝っ<span class='grammar-highlight'>てもらってもいいですか</span>。",
      "cn": "不好意思，能不能麻烦你帮我一起准备下午开会用的资料呢？"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "委婉请求对方",
    "book": "N3",
    "sourceId": 71,
    "lessonNumber": 7,
    "sourceMacro": "授受与使役",
    "sourceCategory": "请求恩惠"
  },
  {
    "id": 3072,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "接受恩惠",
    "point": "～ていただく",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ いただく",
    "meaning": "得到您（为我）做...",
    "explanation": "表示得到长辈或上级的恩惠。是「てもらう」的<span class='font-bold text-[#8a3324]'>谦让语</span>。",
    "example": {
      "jp": "先輩に、駅前の安くて美味しいレストランを紹介し<span class='grammar-highlight'>ていただきました</span>。",
      "cn": "承蒙前辈关照，给我推荐了一家车站前物美价廉的餐厅。"
    },
    "similarGrammar": [
      3071
    ],
    "firstKana": "て",
    "keyword": "谦让接受恩惠",
    "book": "N3",
    "sourceId": 72,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "接受恩惠"
  },
  {
    "id": 3073,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "谦让自身动作",
    "point": "お～する / ご～する",
    "connection": "お ＋ 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ する / ご ＋ 汉字词 ＋ する",
    "meaning": "我来（为您）...",
    "explanation": "用于涉及对方的自身动作，通过<span class='font-bold text-[#8a3324]'>降低自己</span>来表达对对方的敬意。",
    "example": {
      "jp": "お客様の荷物が重そうなので、私が駅まで<span class='grammar-highlight'>お持ちしましょう</span>か。",
      "cn": "您的行李看起来很重，我来帮您拿到车站吧。"
    },
    "similarGrammar": [],
    "firstKana": "お",
    "keyword": "谦让降低自己",
    "book": "N3",
    "sourceId": 73,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "谦让自身动作"
  },
  {
    "id": 3074,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "丁重陈述状态",
    "point": "～ておる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ おる",
    "meaning": "正在... / 一直...",
    "explanation": "是「～ている」的<span class='font-bold text-[#8a3324]'>丁重语（谦让语Ⅱ）</span>，用于郑重地陈述自身的状态或持续的动作。",
    "example": {
      "jp": "私は現在、都内のIT企業でシステムエンジニアをし<span class='grammar-highlight'>ております</span>。",
      "cn": "我目前在东京的一家IT企业担任系统工程师。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "郑重陈述状态",
    "book": "N3",
    "sourceId": 74,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "丁重陈述状态"
  },
  {
    "id": 3075,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "尊敬对方状态",
    "point": "お～だ / ご～だ",
    "connection": "お ＋ 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ だ / ご ＋ 汉字词 ＋ だ",
    "meaning": "（您）正在... / 拥有...",
    "explanation": "是「～ている」的<span class='font-bold text-[#8a3324]'>尊敬语</span>表现，用于描述尊长的持续状态或拥有的事物。",
    "example": {
      "jp": "社長はすでに第1会議室で<span class='grammar-highlight'>お待ちです</span>。",
      "cn": "总经理已经在第1会议室等候您了。"
    },
    "similarGrammar": [],
    "firstKana": "お",
    "keyword": "尊长持续状态",
    "book": "N3",
    "sourceId": 75,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "尊敬对方状态"
  },
  {
    "id": 3076,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "郑重委婉请求",
    "point": "～ていただけますでしょうか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ いただけますでしょうか",
    "meaning": "能否请您...？",
    "explanation": "用于非常<span class='font-bold text-[#8a3324]'>郑重、委婉地请求</span>对方做某事。比「～てください」更加客气。",
    "example": {
      "jp": "お手数ですが、こちらの契約書にご署名と捺印をし<span class='grammar-highlight'>ていただけますでしょうか</span>。",
      "cn": "麻烦您在这份合同上签名并盖章好吗？"
    },
    "similarGrammar": [
      3071
    ],
    "firstKana": "て",
    "keyword": "极度委婉请求",
    "book": "N3",
    "sourceId": 76,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "郑重委婉请求"
  },
  {
    "id": 3077,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "尊敬语断定",
    "point": "～でいらっしゃる",
    "connection": "名词 ＋ でいらっしゃる",
    "meaning": "（您）是...",
    "explanation": "是「～だ / ～である」的<span class='font-bold text-[#8a3324]'>尊敬语</span>。用于抬高对方的身份、职业或状态。",
    "example": {
      "jp": "あちらでワインを飲んでいる方が、有名な作家の田中先生<span class='grammar-highlight'>でいらっしゃいます</span>。",
      "cn": "在那边喝葡萄酒的那位，就是著名作家田中老师。"
    },
    "similarGrammar": [],
    "firstKana": "で",
    "keyword": "抬高对方身份",
    "book": "N3",
    "sourceId": 77,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "尊敬语断定"
  },
  {
    "id": 3078,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "请求许可与感激",
    "point": "～させていただく",
    "connection": "动词<span class='text-[#8a3324] mx-1'>使役态て形</span> ＋ いただく",
    "meaning": "请允许我...",
    "explanation": "表示请求对方的许可让自己做某事，或者在得到许可后表达<span class='font-bold text-[#8a3324]'>感激之情</span>。是「～させてもらう」的谦让语。",
    "example": {
      "jp": "熱があって体調が悪いので、本日はこれで早退<span class='grammar-highlight'>させていただきます</span>。",
      "cn": "我今天发烧身体不舒服，请允许我先下班回家。"
    },
    "similarGrammar": [
      3012
    ],
    "firstKana": "さ",
    "keyword": "谦让请求许可",
    "book": "N3",
    "sourceId": 78,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "请求许可与感激"
  },
  {
    "id": 3079,
    "lesson": "第9课",
    "macro": "条件与假定",
    "category": "必要前提",
    "point": "～てからでなければ / ～てからでないと",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ からでなければ / からでないと",
    "meaning": "如果不...之后，就（不能）... / 只有在...之后，才...",
    "explanation": "表示前项动作是后项动作成立的<span class='font-bold text-[#8a3324]'>必要前提</span>。后项多接续难以实现或消极的表达。",
    "example": {
      "jp": "上司に確認し<span class='grammar-highlight'>てからでなければ</span>、この件についてはお答えできません。",
      "cn": "如果事先不向上司请示确认，我是无法回复您这件事的。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "必要前提",
    "book": "N3",
    "sourceId": 79,
    "lessonNumber": 9,
    "sourceMacro": "条件与假定",
    "sourceCategory": "必要前提"
  },
  {
    "id": 3080,
    "lesson": "第9课",
    "macro": "举例与递进",
    "category": "宛如比喻",
    "point": "～かのように / ～かのような",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词＋である） ＋ かのように",
    "meaning": "宛如...一般 / 就像...一样",
    "explanation": "使用比喻的手法，表示虽然实际并非如此，但<span class='font-bold text-[#8a3324]'>给人的感觉宛如就是那样</span>。常与「まるで」搭配。",
    "example": {
      "jp": "彼はまるで自分が社長である<span class='grammar-highlight'>かのように</span>、偉そうに部下に命令している。",
      "cn": "他那副高高在上使唤下属的样子，简直就像他自己是公司老板一样。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "宛如一般的比喻",
    "book": "N3",
    "sourceId": 80,
    "lessonNumber": 9,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "宛如比喻"
  },
  {
    "id": 3081,
    "lesson": "第9课",
    "macro": "时间与顺序",
    "category": "期间・趁着",
    "point": "～うちに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ている形</span> / 动词<span class='text-[#8a3324] mx-1'>ない形</span> / 动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词＋の / 形容词 ＋ うちに",
    "meaning": "趁着... / 在...期间",
    "explanation": "表示在某个状态发生改变之前，抓紧时间做某事。带有<span class='font-bold text-[#8a3324]'>错过就来不及</span>的语感。",
    "example": {
      "jp": "雨がひどくならない<span class='grammar-highlight'>うちに</span>、早く家に帰りましょう。",
      "cn": "趁着雨还没下大，我们赶紧回家吧。"
    },
    "similarGrammar": [],
    "firstKana": "う",
    "keyword": "趁状态未变",
    "book": "N3",
    "sourceId": 81,
    "lessonNumber": 9,
    "sourceMacro": "时间与场景",
    "sourceCategory": "期间・趁着"
  },
  {
    "id": 3082,
    "lesson": "第9课",
    "macro": "对象与关联",
    "category": "面向・适合",
    "point": "～向け（に） / ～向き",
    "connection": "名词 ＋ 向け / 向き",
    "meaning": "面向... / 适合...",
    "explanation": "「～向け」表示特意<span class='font-bold text-[#8a3324]'>为了某个对象而设计、制作</span>；「～向き」表示客观上<span class='font-bold text-[#8a3324]'>适合该对象</span>。",
    "example": {
      "jp": "このマンションは、一人暮らしの学生<span class='grammar-highlight'>向けに</span>設計されている。",
      "cn": "这栋公寓是专门为独居学生设计的。"
    },
    "similarGrammar": [],
    "firstKana": "む",
    "keyword": "特意面向/客观适合",
    "book": "N3",
    "sourceId": 82,
    "lessonNumber": 9,
    "sourceMacro": "对象与关联",
    "sourceCategory": "面向・适合"
  },
  {
    "id": 3083,
    "lesson": "第9课",
    "macro": "原因与理由",
    "category": "因...而异",
    "point": "～によって",
    "connection": "名词 ＋ によって",
    "meaning": "根据...的不同而有所不同 / 因...而异",
    "explanation": "表示前项条件不同，后项的情况也会<span class='font-bold text-[#8a3324]'>随之呈现出差异</span>。常与「違う、さまざまだ」等词连用。",
    "example": {
      "jp": "朝ご飯にご飯を食べるかパンを食べるかは、人<span class='grammar-highlight'>によって</span>違う。",
      "cn": "早餐吃米饭还是吃面包，这完全因人而异。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "随之呈现差异",
    "book": "N3",
    "sourceId": 83,
    "lessonNumber": 9,
    "sourceMacro": "原因与情况",
    "sourceCategory": "因...而异"
  },
  {
    "id": 3084,
    "lesson": "第9课",
    "macro": "时间与顺序",
    "category": "正当此时",
    "point": "～最中に / ～最中だ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ている形</span> / 名词＋の ＋ 最中に",
    "meaning": "正在...的正中间 / 正在...的高潮时",
    "explanation": "强调某个动作或状态正处于<span class='font-bold text-[#8a3324]'>最激烈或正进行到一半</span>的时候。后项常伴随突发事件。",
    "example": {
      "jp": "いい気分でシャワーを浴びている<span class='grammar-highlight'>最中に</span>、突然水が止まってしまった。",
      "cn": "正舒舒服服洗着澡的时候，竟然突然停水了。"
    },
    "similarGrammar": [],
    "firstKana": "さ",
    "keyword": "正进行到一半",
    "book": "N3",
    "sourceId": 84,
    "lessonNumber": 9,
    "sourceMacro": "时间与场景",
    "sourceCategory": "正当此时"
  },
  {
    "id": 3085,
    "lesson": "第9课",
    "macro": "状态与结果",
    "category": "中途状态",
    "point": "～かけだ / ～かける / ～かけの",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ かける",
    "meaning": "做了一半... / 刚开始做...",
    "explanation": "表示某个动作已经开始，但<span class='font-bold text-[#8a3324]'>尚未彻底完成</span>，处于中途的状态。",
    "example": {
      "jp": "テーブルの上に、飲み<span class='grammar-highlight'>かけの</span>コーヒーが置いたままになっている。",
      "cn": "桌子上一直放着一杯喝了一半的咖啡。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "处于中途未完成",
    "book": "N3",
    "sourceId": 85,
    "lessonNumber": 9,
    "sourceMacro": "状态与处置",
    "sourceCategory": "中途状态"
  },
  {
    "id": 3086,
    "lesson": "第9课",
    "macro": "情感与决心",
    "category": "难以自控",
    "point": "～ずにはいられない / ～ないではいられない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span>（去掉ない） ＋ ずにはいられない （※する变为せずに） / 动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ないではいられない",
    "meaning": "忍不住... / 无法克制...",
    "explanation": "表达说话人从心底涌起的某种情感或冲动，<span class='font-bold text-[#8a3324]'>难以自控地</span>采取了某个动作。通常用于描述主观情感。",
    "example": {
      "jp": "深夜のグルメ番組を見ていると、どうしても夜食を食べ<span class='grammar-highlight'>ずにはいられない</span>。",
      "cn": "一看深夜的美食节目，我就怎么也忍不住想吃顿宵夜。"
    },
    "similarGrammar": [],
    "firstKana": "ず",
    "keyword": "难以自控采取动作",
    "book": "N3",
    "sourceId": 86,
    "lessonNumber": 9,
    "sourceMacro": "情感与思考",
    "sourceCategory": "难以自控"
  },
  {
    "id": 3087,
    "lesson": "第10课",
    "macro": "可能性",
    "category": "强烈否定推测",
    "point": "～わけがない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词＋な / の / な形容词＋な） ＋ わけがない",
    "meaning": "绝不可能... / 哪会...",
    "explanation": "基于某种客观事实或常理，说话人作出<span class='font-bold text-[#8a3324]'>强硬的否定判断</span>，语气比「～はずがない」更直接、更斩钉截铁。",
    "example": {
      "jp": "毎日遊んでばかりいる彼が、N3の試験に合格できる<span class='grammar-highlight'>わけがない</span>。",
      "cn": "他每天只顾着玩，绝对不可能考过N3的。"
    },
    "similarGrammar": [],
    "firstKana": "わ",
    "keyword": "常理上的绝对否定",
    "book": "N3",
    "sourceId": 87,
    "lessonNumber": 10,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "强烈否定推测"
  },
  {
    "id": 3088,
    "lesson": "第10课",
    "macro": "限定与程度",
    "category": "唯一选择",
    "point": "～しかない / ～ほか（は）ない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词 ＋ しかない / ほか（は）ない",
    "meaning": "只能... / 只好...",
    "explanation": "表示除此之外没有别的选择或可能性，带有<span class='font-bold text-[#8a3324]'>消极妥协或毫无办法</span>的语感。",
    "example": {
      "jp": "終電を逃してしまったので、高いタクシーで帰る<span class='grammar-highlight'>しかない</span>。",
      "cn": "不小心错过了末班车，现在只能花高价打车回去了。"
    },
    "similarGrammar": [],
    "firstKana": "し",
    "keyword": "别无选择的妥协",
    "book": "N3",
    "sourceId": 88,
    "lessonNumber": 10,
    "sourceMacro": "限定与程度",
    "sourceCategory": "唯一选择"
  },
  {
    "id": 3089,
    "lesson": "第10课",
    "macro": "原因与理由",
    "category": "强调特定原因",
    "point": "～からこそ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ からこそ",
    "meaning": "正因为...才...",
    "explanation": "强调前面的原因。表示<span class='font-bold text-[#8a3324]'>正是因为这个特定的理由</span>，而不是其他原因，才导致了后项的结果（多为好的结果或主观评价）。",
    "example": {
      "jp": "本当にあなたのことが好きだ<span class='grammar-highlight'>からこそ</span>、こんなに怒っているのよ！",
      "cn": "正是因为真心喜欢你，我才会发这么大的火呀！"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "正因为特定理由",
    "book": "N3",
    "sourceId": 89,
    "lessonNumber": 10,
    "sourceMacro": "原因与理由",
    "sourceCategory": "强调特定原因"
  },
  {
    "id": 3090,
    "lesson": "第10课",
    "macro": "举例与递进",
    "category": "极端例举・轻视",
    "point": "～なんか / ～なんて",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>普通体</span> ＋ なんか / なんて",
    "meaning": "...之类的 / 竟然...",
    "explanation": "用于举出某个极端或不起眼的例子，常带有<span class='font-bold text-[#8a3324]'>轻视、意外或自谦</span>的语气。",
    "example": {
      "jp": "私<span class='grammar-highlight'>なんか</span>が、あんな優秀でイケメンな先輩と付き合えるわけがないよ。",
      "cn": "像我这种普通人，怎么可能和那么优秀又帅气的前辈交往啊。"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "轻视或意外的举例",
    "book": "N3",
    "sourceId": 90,
    "lessonNumber": 10,
    "sourceMacro": "比喻与例举",
    "sourceCategory": "极端例举・轻视"
  },
  {
    "id": 3091,
    "lesson": "第10课",
    "macro": "可能性",
    "category": "极低可能性",
    "point": "～っこない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / 动词能动态 ＋ っこない",
    "meaning": "绝不可能... / 不会...",
    "explanation": "口语中表达强烈的否定推测，认为某事<span class='font-bold text-[#8a3324]'>发生的可能性极低</span>。常用于熟人之间的随便交谈。",
    "example": {
      "jp": "こんなにたくさんの仕事を、一日で終わり<span class='grammar-highlight'>っこない</span>よ。",
      "cn": "这么多工作，一天之内绝对做不完啊。"
    },
    "similarGrammar": [],
    "firstKana": "っ",
    "keyword": "口语极低可能性",
    "book": "N3",
    "sourceId": 91,
    "lessonNumber": 10,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "极低可能性"
  },
  {
    "id": 3092,
    "lesson": "第10课",
    "macro": "逆接与让步",
    "category": "否定充足理由",
    "point": "～からといって",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ からといって",
    "meaning": "虽说... / 不能因为...就...",
    "explanation": "承认前项的事实，但表示<span class='font-bold text-[#8a3324]'>这并不能成为后项的充足理由</span>。后项常伴随否定或不赞同的表达。",
    "example": {
      "jp": "値段が安い<span class='grammar-highlight'>からといって</span>、たくさん買いすぎるのはよくない。",
      "cn": "不能因为价格便宜，就毫无节制地买太多。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "不能成为充足理由",
    "book": "N3",
    "sourceId": 92,
    "lessonNumber": 10,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "否定充足理由"
  },
  {
    "id": 3093,
    "lesson": "第10课",
    "macro": "主张与评价",
    "category": "存在例外",
    "point": "～とは限らない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ とは限らない",
    "meaning": "未必... / 不一定...",
    "explanation": "表示在一般认为理所当然的情况中，也存在<span class='font-bold text-[#8a3324]'>例外的情况</span>，不能一概而论。",
    "example": {
      "jp": "値段が高いものが、必ずしも品質が良い<span class='grammar-highlight'>とは限らない</span>。",
      "cn": "价格昂贵的东西，品质未必就一定好。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "不能一概而论的例外",
    "book": "N3",
    "sourceId": 93,
    "lessonNumber": 10,
    "sourceMacro": "主张与评价",
    "sourceCategory": "存在例外"
  },
  {
    "id": 3094,
    "lesson": "第10课",
    "macro": "主张与评价",
    "category": "程度极深感叹",
    "point": "～ことといったら",
    "connection": "い形容词 / な形容词＋な / 名词＋の ＋ ことといったら",
    "meaning": "说到... / 提起...（那可是...）",
    "explanation": "提出一个具有强烈特征的事物，表示其程度<span class='font-bold text-[#8a3324]'>超乎寻常、难以言表</span>。多用于表达惊讶、感叹等情绪。",
    "example": {
      "jp": "残業明けに飲むビールの美味しい<span class='grammar-highlight'>ことといったら</span>、言葉にできない。",
      "cn": "熬夜加班后喝下的那口啤酒，简直美味得无法用语言形容。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "超乎寻常难以言表",
    "book": "N3",
    "sourceId": 94,
    "lessonNumber": 10,
    "sourceMacro": "评价与视角",
    "sourceCategory": "程度极深感叹"
  },
  {
    "id": 3095,
    "lesson": "第10课",
    "macro": "逆接与让步",
    "category": "责备不满",
    "point": "～くせに",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词＋の / な形容词＋な） ＋ くせに",
    "meaning": "明明...却...",
    "explanation": "表示后项与根据前项理应预想到的情况不符。包含说话人<span class='font-bold text-[#8a3324]'>强烈的责备、不满或鄙视</span>的情感（通常不用于自己）。",
    "example": {
      "jp": "彼は自分から食事に誘った<span class='grammar-highlight'>くせに</span>、財布を忘れたと言って一円も払わなかった。",
      "cn": "明明是他主动请客吃饭，却借口忘带钱包，结果一分钱都没掏。"
    },
    "similarGrammar": [],
    "firstKana": "く",
    "keyword": "强烈责备或不满",
    "book": "N3",
    "sourceId": 95,
    "lessonNumber": 10,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "责备不满"
  },
  {
    "id": 3096,
    "lesson": "第10课",
    "macro": "状态与结果",
    "category": "性质倾向",
    "point": "～っぽい",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / い形容词（去掉い） ＋ っぽい",
    "meaning": "带有...倾向的 / 给人...感觉的",
    "explanation": "表示从性质或感觉上<span class='font-bold text-[#8a3324]'>带有很强的某种成分</span>，常用于消极的评价（如孩子气、容易忘事等）。",
    "example": {
      "jp": "彼はすぐ怒るし、わがままで本当に子ども<span class='grammar-highlight'>っぽい</span>性格だ。",
      "cn": "他动不动就生气，做人又任性，性格真是幼稚得很。"
    },
    "similarGrammar": [],
    "firstKana": "っ",
    "keyword": "带有很强的某种倾向",
    "book": "N3",
    "sourceId": 96,
    "lessonNumber": 10,
    "sourceMacro": "状态与倾向",
    "sourceCategory": "性质倾向"
  },
  {
    "id": 3097,
    "lesson": "第10课",
    "macro": "原因与理由",
    "category": "归咎责任",
    "point": "～せいだ / ～せいで",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词＋の / な形容词＋な） ＋ せいだ / せいで",
    "meaning": "都怪... / 因为...（导致不好结果）",
    "explanation": "将某个不好的结果归咎于前项的原因，带有<span class='font-bold text-[#8a3324]'>埋怨、推卸责任</span>的语气。",
    "example": {
      "jp": "目覚まし時計が鳴らなかった<span class='grammar-highlight'>せいで</span>、大事な面接に遅刻してしまった。",
      "cn": "都怪闹钟没响，害得我错过了重要的面试。"
    },
    "similarGrammar": [],
    "firstKana": "せ",
    "keyword": "埋怨归咎责任",
    "book": "N3",
    "sourceId": 97,
    "lessonNumber": 10,
    "sourceMacro": "原因与理由",
    "sourceCategory": "归咎责任"
  },
  {
    "id": 3098,
    "lesson": "第10课",
    "macro": "原因与理由",
    "category": "基于性格推断",
    "point": "～のことだから",
    "connection": "名词 ＋ のことだから",
    "meaning": "正因为是...",
    "explanation": "基于说话人对某个特定人物性格、习惯的了解，从而做出<span class='font-bold text-[#8a3324]'>理所当然的推断</span>。",
    "example": {
      "jp": "いつも真面目な山田さん<span class='grammar-highlight'>のことだから</span>、きっと今回も完璧な資料を作ってくるだろう。",
      "cn": "山田先生一向做事认真，这次肯定也会提前准备好完美的资料。"
    },
    "similarGrammar": [],
    "firstKana": "の",
    "keyword": "基于人物特性的推断",
    "book": "N3",
    "sourceId": 98,
    "lessonNumber": 10,
    "sourceMacro": "原因与理由",
    "sourceCategory": "基于性格推断"
  },
  {
    "id": 3099,
    "lesson": "第11课",
    "macro": "状态与结果",
    "category": "消极倾向",
    "point": "～気味（ぎみ）",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ 気味",
    "meaning": "有点... / 稍微感到...",
    "explanation": "表示在生理或心理上感觉<span class='font-bold text-[#8a3324]'>稍微有某种倾向</span>，通常多用于消极或不好的状态（如感冒、发胖、疲劳等）。",
    "example": {
      "jp": "最近運動不足で太り<span class='grammar-highlight'>気味</span>なので、明日からジョギングを始めるつもりだ。",
      "cn": "最近缺乏运动感觉身体有点发胖，我打算从明天起开始跑步。"
    },
    "similarGrammar": [],
    "firstKana": "ぎ",
    "keyword": "稍有消极倾向",
    "book": "N3",
    "sourceId": 99,
    "lessonNumber": 11,
    "sourceMacro": "状态与倾向",
    "sourceCategory": "消极倾向"
  },
  {
    "id": 3100,
    "lesson": "第11课",
    "macro": "可能性",
    "category": "无法维持状态",
    "point": "～てなんかいられない / ～てはいられない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ なんかいられない",
    "meaning": "哪能... / 不能一直...",
    "explanation": "表示由于某种紧迫的情况或心理上的焦急，<span class='font-bold text-[#8a3324]'>无法继续保持</span>当前的悠闲状态。",
    "example": {
      "jp": "明日はN3の試験だから、のんびりテレビを見<span class='grammar-highlight'>てなんかいられない</span>。",
      "cn": "明天就是N3考试了，我可没闲工夫坐在这里悠哉地看电视。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "紧迫而无法保持",
    "book": "N3",
    "sourceId": 100,
    "lessonNumber": 11,
    "sourceMacro": "可能性与能力",
    "sourceCategory": "无法维持状态"
  },
  {
    "id": 3101,
    "lesson": "第11课",
    "macro": "限定与程度",
    "category": "极端举例",
    "point": "～さえ",
    "connection": "名词（＋助词） ＋ さえ",
    "meaning": "甚至连... / 哪怕是...",
    "explanation": "举出一个<span class='font-bold text-[#8a3324]'>极端的例子</span>，暗示其他的理应更不必说。常与否定表达连用，表示程度之低或情况之糟。",
    "example": {
      "jp": "今日は忙しすぎて、水を飲む時間<span class='grammar-highlight'>さえ</span>なかった。",
      "cn": "今天实在太忙了，连喝口水的时间都没有。"
    },
    "similarGrammar": [],
    "firstKana": "さ",
    "keyword": "极端举例暗示其余",
    "book": "N3",
    "sourceId": 101,
    "lessonNumber": 11,
    "sourceMacro": "限定与程度",
    "sourceCategory": "极端举例"
  },
  {
    "id": 3102,
    "lesson": "第11课",
    "macro": "限定与程度",
    "category": "程度说明",
    "point": "～くらい / ～ぐらい",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ くらい",
    "meaning": "...得简直... / 至少...",
    "explanation": "通过举出一个具体的状态来说明事物的<span class='font-bold text-[#8a3324]'>程度</span>，或者表示程度很低（如“至少做...”）。",
    "example": {
      "jp": "お腹が痛くなる<span class='grammar-highlight'>くらい</span>、昨日のコメディ映画は面白かった。",
      "cn": "昨天的喜剧电影太好笑了，我笑得肚子都疼了。"
    },
    "similarGrammar": [],
    "firstKana": "く",
    "keyword": "举例说明程度",
    "book": "N3",
    "sourceId": 102,
    "lessonNumber": 11,
    "sourceMacro": "限定与程度",
    "sourceCategory": "程度说明"
  },
  {
    "id": 3103,
    "lesson": "第11课",
    "macro": "状态与结果",
    "category": "放置不管",
    "point": "～っぱなし",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ っぱなし",
    "meaning": "一直... / 放任...不管",
    "explanation": "表示某个动作发生后，本该做后续处理却没有做，<span class='font-bold text-[#8a3324]'>任凭其保持原状</span>。常带有不满或责备的语气。",
    "example": {
      "jp": "昨夜は疲れていて、テレビをつけ<span class='grammar-highlight'>っぱなし</span>で寝てしまった。",
      "cn": "昨晚实在太累了，竟然开着电视直接睡着了。"
    },
    "similarGrammar": [],
    "firstKana": "っ",
    "keyword": "放任保持原状",
    "book": "N3",
    "sourceId": 103,
    "lessonNumber": 11,
    "sourceMacro": "状态与处置",
    "sourceCategory": "放置不管"
  },
  {
    "id": 3104,
    "lesson": "第11课",
    "macro": "状态与结果",
    "category": "充满・遍布",
    "point": "～だらけ",
    "connection": "名词 ＋ だらけ",
    "meaning": "满是... / 都是...",
    "explanation": "表示表面上<span class='font-bold text-[#8a3324]'>沾满了或遍布着</span>某种不理想的东西（如泥、灰尘、垃圾、错误等），多用于消极评价。",
    "example": {
      "jp": "公園で遊んでいた息子が、泥<span class='grammar-highlight'>だらけ</span>になって帰ってきた。",
      "cn": "在公园玩的儿子弄得浑身是泥跑了回来。"
    },
    "similarGrammar": [],
    "firstKana": "だ",
    "keyword": "遍布不理想的事物",
    "book": "N3",
    "sourceId": 104,
    "lessonNumber": 11,
    "sourceMacro": "状态与倾向",
    "sourceCategory": "充满・遍布"
  },
  {
    "id": 3105,
    "lesson": "第11课",
    "macro": "可能性",
    "category": "意外推测",
    "point": "～たりして",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ りして",
    "meaning": "说不定会... / 也许会...",
    "explanation": "表示对某种状态的轻微推测或调侃，认为<span class='font-bold text-[#8a3324]'>说不定变成了那样</span>。相当于「〜かもしれない」的口语。",
    "example": {
      "jp": "今日はやけにおしゃれだけど、もしかしてデートだっ<span class='grammar-highlight'>たりして</span>？",
      "cn": "你今天打扮得这么漂亮，该不会是要去约会吧？"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "意外或期待的推测",
    "book": "N3",
    "sourceId": 105,
    "lessonNumber": 11,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "意外推测"
  },
  {
    "id": 3106,
    "lesson": "第11课",
    "macro": "主张与评价",
    "category": "典型特征",
    "point": "～らしい",
    "connection": "名词 ＋ らしい",
    "meaning": "像...的样子 / 有...的风格",
    "explanation": "表示事物充分具备了其应有的<span class='font-bold text-[#8a3324]'>典型特征或风格</span>，非常符合人们的印象。",
    "example": {
      "jp": "今日は涼しくて、すっかり秋<span class='grammar-highlight'>らしい</span>天気になりましたね。",
      "cn": "今天很凉爽，天气已经完全有了秋天的感觉呢。"
    },
    "similarGrammar": [],
    "firstKana": "ら",
    "keyword": "符合典型特征",
    "book": "N3",
    "sourceId": 106,
    "lessonNumber": 11,
    "sourceMacro": "评价与视角",
    "sourceCategory": "典型特征"
  },
  {
    "id": 3107,
    "lesson": "第11课",
    "macro": "情感与决心",
    "category": "错觉・误以为",
    "point": "～かと思った",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ かと思った",
    "meaning": "我还以为是...呢",
    "explanation": "表示说话人基于第一印象产生的<span class='font-bold text-[#8a3324]'>瞬间错觉或误会</span>，实际情况并非如此。",
    "example": {
      "jp": "カバンに財布がないので、てっきり落とした<span class='grammar-highlight'>かと思いました</span>。",
      "cn": "包里找不到钱包，我还以为肯定是弄丢了呢。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "瞬间错觉或误会",
    "book": "N3",
    "sourceId": 107,
    "lessonNumber": 11,
    "sourceMacro": "情感与思考",
    "sourceCategory": "错觉・误以为"
  },
  {
    "id": 3108,
    "lesson": "第11课",
    "macro": "举例与递进",
    "category": "随便列举",
    "point": "～とか～とか",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ とか",
    "meaning": "...啦...啦",
    "explanation": "从同类事物中<span class='font-bold text-[#8a3324]'>随意列举出几个例子</span>，暗示还有其他的。比「や」更口语化。",
    "example": {
      "jp": "最近は残業<span class='grammar-highlight'>とか</span>出張<span class='grammar-highlight'>とか</span>で、ゆっくり休む暇がない。",
      "cn": "最近又是加班又是出差的，根本没空好好休息。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "随意列举同类事物",
    "book": "N3",
    "sourceId": 108,
    "lessonNumber": 11,
    "sourceMacro": "并列与列举",
    "sourceCategory": "随便列举"
  },
  {
    "id": 3109,
    "lesson": "第11课",
    "macro": "时间与顺序",
    "category": "顺便利用",
    "point": "～ついでに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>た形</span> / 名词＋の ＋ ついでに",
    "meaning": "顺便...",
    "explanation": "表示在做本来要做的某事时，<span class='font-bold text-[#8a3324]'>顺便利用这个机会</span>兼做了另一件事。",
    "example": {
      "jp": "コンビニへ行く<span class='grammar-highlight'>ついでに</span>、私のコーヒーも買ってきてくれない？",
      "cn": "你去便利店的时候，能不能顺便帮我也带杯咖啡？"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "顺便利用机会",
    "book": "N3",
    "sourceId": 109,
    "lessonNumber": 11,
    "sourceMacro": "时间与场景",
    "sourceCategory": "顺便利用"
  },
  {
    "id": 3110,
    "lesson": "第11课",
    "macro": "可能性",
    "category": "强烈确信",
    "point": "～に違いない / ～に相違ない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ に違いない",
    "meaning": "一定是... / 肯定是...",
    "explanation": "基于一定的客观依据或直觉，表达说话人<span class='font-bold text-[#8a3324]'>非常强烈的主观确信</span>。相违ない是较生硬的书面语。",
    "example": {
      "jp": "あの嬉しそうな笑顔を見ると、面接に合格した<span class='grammar-highlight'>に違いない</span>。",
      "cn": "看他笑得那么开心，肯定是顺利通过面试了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "非常强烈的主观确信",
    "book": "N3",
    "sourceId": 110,
    "lessonNumber": 11,
    "sourceMacro": "可能性与推测",
    "sourceCategory": "强烈确信"
  },
  {
    "id": 3111,
    "lesson": "第11课",
    "macro": "比较与伴随",
    "category": "最高程度",
    "point": "～ほど～はない / ～くらい～はない",
    "connection": "名词 ＋ ほど / くらい ＋ 名词 ＋ はない",
    "meaning": "没有比...更...的了",
    "explanation": "带有强烈的主观色彩，说话人认为该事物在某种范围内处于<span class='font-bold text-[#8a3324]'>最高的程度</span>。",
    "example": {
      "jp": "金曜日の仕事終わりに飲む生ビール<span class='grammar-highlight'>ほど</span>、美味しいもの<span class='grammar-highlight'>はない</span>。",
      "cn": "没有什么能比星期五下班后喝的那杯生啤更美味的了。"
    },
    "similarGrammar": [],
    "firstKana": "ほ",
    "keyword": "主观认为的最高程度",
    "book": "N3",
    "sourceId": 111,
    "lessonNumber": 11,
    "sourceMacro": "比较与基准",
    "sourceCategory": "最高程度"
  },
  {
    "id": 3112,
    "lesson": "第11课",
    "macro": "状态与结果",
    "category": "排除在外",
    "point": "～ぬきで（は） / ～ぬきに（は）",
    "connection": "名词 ＋ ぬきで / ぬきに / ぬきの",
    "meaning": "省去... / 撇开... / 如果没有...",
    "explanation": "表示<span class='font-bold text-[#8a3324]'>排除通常应该包含在内的事物</span>。后接否定时，表示如果没有该事物就无法成立。",
    "example": {
      "jp": "山田さんの手厚いサポート<span class='grammar-highlight'>ぬきでは</span>、このプロジェクトは絶対に成功しなかった。",
      "cn": "如果没有山田先生的鼎力相助，这个项目是绝对不可能成功的。"
    },
    "similarGrammar": [],
    "firstKana": "ぬ",
    "keyword": "排除应包含的事物",
    "book": "N3",
    "sourceId": 112,
    "lessonNumber": 11,
    "sourceMacro": "状态与附带",
    "sourceCategory": "排除在外"
  },
  {
    "id": 3113,
    "lesson": "第11课",
    "macro": "情感与决心",
    "category": "情感极深",
    "point": "～てしょうがない / ～てしかたがない / ～てたまらない",
    "connection": "动词・形容词<span class='text-[#8a3324] mx-1'>て形</span> ＋ しょうがない / しかたがない / たまらない",
    "meaning": "...得不得了 / 非常...",
    "explanation": "表示某种感情、欲望或身体感觉极其强烈，到了<span class='font-bold text-[#8a3324]'>难以抑制的程度</span>。多用于第一人称的主观感受。",
    "example": {
      "jp": "昨夜は一睡もしていないので、今は眠く<span class='grammar-highlight'>てたまらない</span>。",
      "cn": "昨晚一整宿都没合眼，现在真是困得要命。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "情感身体感觉极其强烈",
    "book": "N3",
    "sourceId": 113,
    "lessonNumber": 11,
    "sourceMacro": "情感与思考",
    "sourceCategory": "情感极深"
  },
  {
    "id": 2001,
    "lesson": "第1课",
    "macro": "原因与理由",
    "category": "正式告示",
    "point": "～につき",
    "connection": "名词 + につき",
    "meaning": "因为...；由于...",
    "explanation": "带有正式语气，多出现在告示、贴纸或公文的<span class='font-bold text-[#8a3324]'>原因说明</span>中。日常口语中较少使用。",
    "example": {
      "jp": "<ruby>強<rt>きょう</rt></ruby><ruby>風<rt>ふう</rt></ruby><span class='grammar-highlight'>につき</span>、<ruby>本<rt>ほん</rt></ruby><ruby>日<rt>じつ</rt></ruby>の<ruby>観<rt>かん</rt></ruby><ruby>覧<rt>らん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>行<rt>こう</rt></ruby>は<ruby>中<rt>ちゅう</rt></ruby><ruby>止<rt>し</rt></ruby>とさせていただきます。",
      "cn": "由于现场风力过大，今天的摩天轮将暂停运行。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "正式原因",
    "book": "N2",
    "sourceId": 1,
    "lessonNumber": 1,
    "sourceMacro": "原因与理由",
    "sourceCategory": "正式告示"
  },
  {
    "id": 2002,
    "lesson": "第1课",
    "macro": "条件与假定",
    "category": "条件・无关",
    "point": "～を問わず",
    "connection": "名词 + を問わず",
    "meaning": "不论...；不管...",
    "explanation": "表示<span class='font-bold text-[#8a3324]'>不受前项条件的限制</span>。常接“男女、年齢、国籍、昼夜”等包含多个维度或对立概念的词汇。",
    "example": {
      "jp": "このオーディションは、プロアマ<span class='grammar-highlight'>を<ruby>問<rt>と</rt></ruby>わず</span>、どなたでも<ruby>応<rt>おう</rt></ruby><ruby>募<rt>ぼ</rt></ruby>できます。",
      "cn": "这场选拔赛不分专业还是业余，任何人都可以报名参加。"
    },
    "similarGrammar": [
      2005,
      2021
    ],
    "firstKana": "を",
    "keyword": "不受限",
    "book": "N2",
    "sourceId": 2,
    "lessonNumber": 1,
    "sourceMacro": "条件与假定",
    "sourceCategory": "条件・无关"
  },
  {
    "id": 2003,
    "lesson": "第1课",
    "macro": "限定与程度",
    "category": "限定・特例",
    "point": "～に限り",
    "connection": "名词 + に限り",
    "meaning": "仅限...；只有...",
    "explanation": "对<span class='font-bold text-[#8a3324]'>特定对象给出特殊对待</span>，多用于针对公众的通知中。属于“～だけ”的书面正式表达。",
    "example": {
      "jp": "<ruby>初<rt>はじ</rt></ruby>めてご<ruby>登<rt>とう</rt></ruby><ruby>録<rt>ろく</rt></ruby>いただくお<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>に<span class='grammar-highlight'><ruby>限<rt>かぎ</rt></ruby>り</span>、<ruby>初<rt>しょ</rt></ruby><ruby>月<rt>げつ</rt></ruby>の<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby><ruby>料<rt>りょう</rt></ruby>が<ruby>無<rt>む</rt></ruby><ruby>料<rt>りょう</rt></ruby>になります。",
      "cn": "仅限首次注册的新客户，可以享受首月免收使用费的优惠。"
    },
    "similarGrammar": [
      2058
    ],
    "firstKana": "に",
    "keyword": "特殊对待",
    "book": "N2",
    "sourceId": 3,
    "lessonNumber": 1,
    "sourceMacro": "限定",
    "sourceCategory": "限定・特例"
  },
  {
    "id": 2004,
    "lesson": "第1课",
    "macro": "比较与伴随",
    "category": "对应・关联",
    "point": "～に応じ",
    "connection": "名词 + に応じ（て）",
    "meaning": "根据...；与...相适应",
    "explanation": "表示后项的动作或状态会<span class='font-bold text-[#8a3324]'>随着前项的变化而做出调整</span>。常接“体力、年齢、天候、希望”等词。",
    "example": {
      "jp": "<ruby>当<rt>とう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>では、<ruby>個<rt>こ</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>や<ruby>実<rt>じっ</rt></ruby><ruby>績<rt>せき</rt></ruby><span class='grammar-highlight'>に<ruby>応<rt>おう</rt></ruby>じ</span>て<ruby>最<rt>さい</rt></ruby><ruby>終<rt>しゅう</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>給<rt>きゅう</rt></ruby><ruby>与<rt>よ</rt></ruby>を<ruby>決<rt>けっ</rt></ruby><ruby>定<rt>てい</rt></ruby>しております。",
      "cn": "本公司会根据个人的能力和实际业绩来制定最终的薪酬。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "相适应",
    "book": "N2",
    "sourceId": 4,
    "lessonNumber": 1,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "对应・关联"
  },
  {
    "id": 2005,
    "lesson": "第1课",
    "macro": "条件与假定",
    "category": "条件・无关",
    "point": "～にかかわらず",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> + にかかわらず",
    "meaning": "不管...；不论...",
    "explanation": "强调<span class='font-bold text-[#8a3324]'>不受某种情况或条件的左右</span>。与“～を問わず”类似，但接续更广，可接动词“做与不做”等表达形式。",
    "example": {
      "jp": "<ruby>業<rt>ぎょう</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>の<ruby>有<rt>う</rt></ruby><ruby>無<rt>む</rt></ruby><span class='grammar-highlight'>にかかわらず</span>、やる<ruby>気<rt>き</rt></ruby>のある<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>を<ruby>大<rt>だい</rt></ruby><ruby>募<rt>ぼ</rt></ruby><ruby>集<rt>しゅう</rt></ruby>しています。",
      "cn": "无论有无行业经验，我们都热烈欢迎充满干劲的新员工加入。"
    },
    "similarGrammar": [
      2002,
      2021
    ],
    "firstKana": "に",
    "keyword": "不受条件左右",
    "book": "N2",
    "sourceId": 5,
    "lessonNumber": 1,
    "sourceMacro": "条件与假定",
    "sourceCategory": "条件・无关"
  },
  {
    "id": 2006,
    "lesson": "第1课",
    "macro": "时间与顺序",
    "category": "场所・时间",
    "point": "～において",
    "connection": "名词 + において",
    "meaning": "在...（地方、时代、领域等）",
    "explanation": "相当于助词“で”，但属于<span class='font-bold text-[#8a3324]'>非常正式的书面语</span>，用于指示动作发生的场所、时间或状况。",
    "example": {
      "jp": "グローバル<ruby>化<rt>か</rt></ruby>が<ruby>進<rt>すす</rt></ruby>む<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby><span class='grammar-highlight'>において</span>、<ruby>確<rt>たし</rt></ruby>かな<ruby>語<rt>ご</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>力<rt>りょく</rt></ruby>は<ruby>強<rt>きょう</rt></ruby><ruby>力<rt>りょく</rt></ruby>な<ruby>武<rt>ぶ</rt></ruby><ruby>器<rt>き</rt></ruby>となる。",
      "cn": "在全球化不断深入的现代社会中，扎实的语言能力将成为极其有利的武器。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "正式场合",
    "book": "N2",
    "sourceId": 6,
    "lessonNumber": 1,
    "sourceMacro": "时间与场景",
    "sourceCategory": "场所・时间"
  },
  {
    "id": 2007,
    "lesson": "第1课",
    "macro": "时间与顺序",
    "category": "时间・场合",
    "point": "～際に / ～に際して",
    "connection": "名词+の / 动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>た形</span> + 際に (に際して前接名词/动词<span class='text-[#8a3324] mx-1'>原形</span>)",
    "meaning": "在...之际；当...的时候",
    "explanation": "多用于<span class='font-bold text-[#8a3324]'>重大的事件开始之前或发生时</span>。属于正式场合的客套话，一般不用于日常琐事。",
    "example": {
      "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>産<rt>さん</rt></ruby>の<ruby>賃<rt>ちん</rt></ruby><ruby>貸<rt>たい</rt></ruby><ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>を<ruby>結<rt>むす</rt></ruby>ぶ<span class='grammar-highlight'>に<ruby>際<rt>さい</rt></ruby>して</span>、<ruby>必<rt>かなら</rt></ruby>ずこちらの<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>項<rt>こう</rt></ruby><ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby><ruby>書<rt>しょ</rt></ruby>をお<ruby>読<rt>よ</rt></ruby>みください。",
      "cn": "在签署房地产租赁合同时，请务必仔细阅读这份重要事项说明书。"
    },
    "similarGrammar": [
      2116,
      2135
    ],
    "firstKana": "さ / に",
    "keyword": "重大事件前",
    "book": "N2",
    "sourceId": 7,
    "lessonNumber": 1,
    "sourceMacro": "时间与场景",
    "sourceCategory": "时间・场合"
  },
  {
    "id": 2008,
    "lesson": "第1课",
    "macro": "指示与忠告",
    "category": "指示・命令",
    "point": "～こと",
    "connection": "名词+の / 动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> + こと",
    "meaning": "应当...；请...",
    "explanation": "作为句尾，用于<span class='font-bold text-[#8a3324]'>传达规定、指示或要求</span>。常出现在告示牌、规章制度或注意事项中。",
    "example": {
      "jp": "<ruby>毎<rt>まい</rt></ruby><ruby>月<rt>つき</rt></ruby>の<ruby>経<rt>けい</rt></ruby><ruby>費<rt>ひ</rt></ruby><ruby>精<rt>せい</rt></ruby><ruby>算<rt>さん</rt></ruby><ruby>書<rt>しょ</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ず<ruby>翌<rt>よく</rt></ruby><ruby>月<rt>げつ</rt></ruby>の5<ruby>日<rt>いつか</rt></ruby>までに<ruby>経<rt>けい</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>部<rt>ぶ</rt></ruby>へ<ruby>提<rt>てい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>する<span class='grammar-highlight'>こと</span>。",
      "cn": "每月的费用报销单务必在次月5号之前提交给财务部。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "规章指示",
    "book": "N2",
    "sourceId": 8,
    "lessonNumber": 1,
    "sourceMacro": "指示与忠告",
    "sourceCategory": "指示・命令"
  },
  {
    "id": 2009,
    "lesson": "第2课",
    "macro": "时间与顺序",
    "category": "起点・终点",
    "point": "～て以来",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> + 以来",
    "meaning": "自从...之后，就一直...",
    "explanation": "强调过去发生某事之后，其后的状态<span class='font-bold text-[#8a3324]'>一直持续到现在</span>。多用于描述较长一段时间的状态，较少接表示一次性动作的词语。",
    "example": {
      "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>にリモートワークが<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>され<span class='grammar-highlight'>て<ruby>以<rt>い</rt></ruby><ruby>来<rt>らい</rt></ruby></span>、<ruby>同<rt>どう</rt></ruby><ruby>僚<rt>りょう</rt></ruby>と<ruby>直<rt>ちょく</rt></ruby><ruby>接<rt>せつ</rt></ruby><ruby>顔<rt>かお</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせる<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>がすっかり<ruby>減<rt>へ</rt></ruby>ってしまった。",
      "cn": "自从公司引入远程办公模式之后，我和同事面对面交流的机会就大幅减少了。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "持续至今",
    "book": "N2",
    "sourceId": 9,
    "lessonNumber": 2,
    "sourceMacro": "时间与场景",
    "sourceCategory": "起点・终点"
  },
  {
    "id": 2010,
    "lesson": "第2课",
    "macro": "举例与递进",
    "category": "举例・代表",
    "point": "～をはじめ（として）",
    "connection": "名词 + をはじめ（として）",
    "meaning": "以...为首；以及...",
    "explanation": "举出一个<span class='font-bold text-[#8a3324]'>具有代表性的事物</span>，暗示此外还有很多同类事物。属于较为正式的书面表达。",
    "example": {
      "jp": "この<ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>には、ゴッホの「ひまわり」<span class='grammar-highlight'>をはじめとする</span><ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>名<rt>めい</rt></ruby><ruby>画<rt>が</rt></ruby>が<ruby>多<rt>た</rt></ruby><ruby>数<rt>すう</rt></ruby><ruby>展<rt>てん</rt></ruby><ruby>示<rt>じ</rt></ruby>されている。",
      "cn": "这家美术馆里展出了以梵高《向日葵》为首的众多世界级名画。"
    },
    "similarGrammar": [],
    "firstKana": "を",
    "keyword": "举出代表",
    "book": "N2",
    "sourceId": 10,
    "lessonNumber": 2,
    "sourceMacro": "资格与举例",
    "sourceCategory": "举例・代表"
  },
  {
    "id": 2011,
    "lesson": "第2课",
    "macro": "条件与假定",
    "category": "条件・环境",
    "point": "～のもとで / ～のもとに",
    "connection": "名词 + のもとで",
    "meaning": "在...之下（在某影响或条件下）",
    "explanation": "表示在某个<span class='font-bold text-[#8a3324]'>人物的指导、影响或某种条件</span>下进行某事。“～のもとで”多接人物，“～のもとに”多接状态或条件。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しいマネージャーの<ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><span class='grammar-highlight'>のもとで</span>、チームの<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きく<ruby>向<rt>こう</rt></ruby><ruby>上<rt>じょう</rt></ruby>した。",
      "cn": "在新经理的管理下，团队的业绩有了大幅提升。"
    },
    "similarGrammar": [],
    "firstKana": "の",
    "keyword": "某影响下",
    "book": "N2",
    "sourceId": 11,
    "lessonNumber": 2,
    "sourceMacro": "条件与假定",
    "sourceCategory": "条件・环境"
  },
  {
    "id": 2012,
    "lesson": "第2课",
    "macro": "举例与递进",
    "category": "添加・递进",
    "point": "～はもとより",
    "connection": "名词 + はもとより",
    "meaning": "...自不必说，连...也...",
    "explanation": "前项是<span class='font-bold text-[#8a3324]'>理所应当的事物</span>，后项引出程度更深或其他方面的事物。与“～はもちろん”意思相近，但常用于书面语或演讲。",
    "example": {
      "jp": "この<ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>は、<ruby>国<rt>こく</rt></ruby><ruby>内<rt>ない</rt></ruby><span class='grammar-highlight'>はもとより</span>、<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>の<ruby>市<rt>し</rt></ruby><ruby>場<rt>じょう</rt></ruby>でも<ruby>高<rt>たか</rt></ruby>く<ruby>評<rt>ひょう</rt></ruby><ruby>価<rt>か</rt></ruby>されている。",
      "cn": "这款产品在国内市场广受好评自不必说，在海外市场也获得了极高的评价。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "理所当然",
    "book": "N2",
    "sourceId": 12,
    "lessonNumber": 2,
    "sourceMacro": "资格与举例",
    "sourceCategory": "添加・递进"
  },
  {
    "id": 2013,
    "lesson": "第2课",
    "macro": "主张与评价",
    "category": "主张・断定",
    "point": "～ものだ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> / 形容词 / 名词修饰型 + ものだ",
    "meaning": "理应...；本来就是...的",
    "explanation": "讲述社会普遍认同的<span class='font-bold text-[#8a3324]'>常识、真理或人类本性</span>，带有轻微的说教语气。通常不用于对特定的个人进行要求。",
    "example": {
      "jp": "どんなに<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>を<ruby>積<rt>つ</rt></ruby>んでも、<ruby>大<rt>おお</rt></ruby>きな<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>は<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>する<span class='grammar-highlight'>ものだ</span>。",
      "cn": "无论积累了多少经验，在大型发表会之前人总归是会紧张的。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "普遍常识",
    "book": "N2",
    "sourceId": 13,
    "lessonNumber": 2,
    "sourceMacro": "主张与评价",
    "sourceCategory": "主张・断定"
  },
  {
    "id": 2014,
    "lesson": "第2课",
    "macro": "条件与假定",
    "category": "条件・范围",
    "point": "～上で",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词+の + 上で",
    "meaning": "在...方面；在...过程中",
    "explanation": "表示在<span class='font-bold text-[#8a3324]'>做某事的过程中，或者为了达到某个目的</span>而面临的条件、困难等。后项常接“重要、必要、注意”等词。",
    "example": {
      "jp": "<ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>を<ruby>結<rt>むす</rt></ruby>ぶ<span class='grammar-highlight'><ruby>上<rt>うえ</rt></ruby>で</span>、お<ruby>互<rt>たが</rt></ruby>いの<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>が<ruby>何<rt>なに</rt></ruby>よりも<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>になる。",
      "cn": "在签订合同的过程中，双方的信任关系比什么都重要。"
    },
    "similarGrammar": [],
    "firstKana": "う",
    "keyword": "过程中",
    "book": "N2",
    "sourceId": 14,
    "lessonNumber": 2,
    "sourceMacro": "条件与假定",
    "sourceCategory": "条件・范围"
  },
  {
    "id": 2015,
    "lesson": "第2课",
    "macro": "逆接与让步",
    "category": "逆接・让步",
    "point": "～ながら（も）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / 形容词 / 名词 + ながら",
    "meaning": "虽然...但是...",
    "explanation": "表达前项与后项存在<span class='font-bold text-[#8a3324]'>对立或矛盾的关系</span>。常和“残念、狭い、知る”等词连用，形成惯用搭配。",
    "example": {
      "jp": "<ruby>体<rt>からだ</rt></ruby>に<ruby>悪<rt>わる</rt></ruby>いと<ruby>分<rt>わ</rt></ruby>かってい<span class='grammar-highlight'>ながらも</span>、つい<ruby>夜<rt>や</rt></ruby><ruby>食<rt>しょく</rt></ruby>のラーメンを<ruby>食<rt>た</rt></ruby>べてしまう。",
      "cn": "明知道对身体不好，却还是忍不住吃了当宵夜的拉面。"
    },
    "similarGrammar": [
      2039
    ],
    "firstKana": "な",
    "keyword": "逆接转折",
    "book": "N2",
    "sourceId": 15,
    "lessonNumber": 2,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "逆接・让步"
  },
  {
    "id": 2016,
    "lesson": "第2课",
    "macro": "举例与递进",
    "category": "视作・作为",
    "point": "～を～として（に） / ～を～とする",
    "connection": "名词 + を + 名词 + として（に） / とする + 名词",
    "meaning": "把...作为...；以...为...",
    "explanation": "表示把前项事物<span class='font-bold text-[#8a3324]'>当作或认定为后项的身份、资格、目的等</span>。常与“目的、中心、対象、前提”等词搭配使用。",
    "example": {
      "jp": "この<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は<ruby>再<rt>さい</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby>エネルギーの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby><span class='grammar-highlight'>を<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>とした</span><ruby>事<rt>じ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<ruby>展<rt>てん</rt></ruby><ruby>開<rt>かい</rt></ruby>している。",
      "cn": "这家企业正在开展以普及可再生能源为目的的业务。"
    },
    "similarGrammar": [
      2022
    ],
    "firstKana": "を",
    "keyword": "把…作为…",
    "book": "N2",
    "sourceId": 16,
    "lessonNumber": 2,
    "sourceMacro": "资格与举例",
    "sourceCategory": "视作・作为"
  },
  {
    "id": 2017,
    "lesson": "第2课",
    "macro": "时间与顺序",
    "category": "契机・起点",
    "point": "～をきっかけに / ～を契機に",
    "connection": "名词 + をきっかけに / 动词<span class='text-[#8a3324] mx-1'>た形</span>・<span class='text-[#8a3324] mx-1'>原形</span>+の + をきっかけに",
    "meaning": "以...为契机；因为...的机缘",
    "explanation": "表示某件事成为发生变化或开始新事物的<span class='font-bold text-[#8a3324]'>直接原因或动机</span>。“契機”比“きっかけ”更加书面化和正式。",
    "example": {
      "jp": "<ruby>大<rt>おお</rt></ruby>きな<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>をしたこと<span class='grammar-highlight'>をきっかけに</span>、お<ruby>酒<rt>さけ</rt></ruby>とタバコをやめて<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>な<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>るようになった。",
      "cn": "经历了一场大病后，我以此为契机戒了烟酒，开始过上了健康的生活。"
    },
    "similarGrammar": [],
    "firstKana": "を",
    "keyword": "成为转折点",
    "book": "N2",
    "sourceId": 17,
    "lessonNumber": 2,
    "sourceMacro": "时间与场景",
    "sourceCategory": "契机・起点"
  },
  {
    "id": 2018,
    "lesson": "第2课",
    "macro": "情感与决心",
    "category": "觉悟・决心",
    "point": "～からには / ～以上（は） / ～上は",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> + からには / 以上は ； 动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>た形</span> + 上は",
    "meaning": "既然...就...",
    "explanation": "基于前项的事实，产生后项的<span class='font-bold text-[#8a3324]'>决心、义务或理所应当的做法</span>。后项常接判断、决心等表达。“上は”语气最为郑重。",
    "example": {
      "jp": "プロジェクトの<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた<span class='grammar-highlight'><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby></span>、<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>までやり<ruby>遂<rt>と</rt></ruby>げる<ruby>覚<rt>かく</rt></ruby><ruby>悟<rt>ご</rt></ruby>です。",
      "cn": "既然接下了项目负责人的重任，我就已经做好了坚持到底的觉悟。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "顺理成章的决心",
    "book": "N2",
    "sourceId": 18,
    "lessonNumber": 2,
    "sourceMacro": "情感与决心",
    "sourceCategory": "觉悟・决心"
  },
  {
    "id": 2019,
    "lesson": "第2课",
    "macro": "否定",
    "category": "部分否定",
    "point": "～わけではない / ～というわけではない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通形</span> + わけではない（※ ナ形ーな / 名ーの + わけではない）<br><span class='text-[#8a3324] mx-1'>普通形</span> + というわけではない（※ ナ形（だ） / 名（だ） + というわけではない）",
    "meaning": "并不是说...；并非...",
    "explanation": "表示对某种从常理推断出的结论进行<span class='font-bold text-[#8a3324]'>部分或委婉的否定</span>，说明实际情况并非完全如此。",
    "example": {
      "jp": "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>残<rt>ざん</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>しているからといって、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>の<ruby>能<rt>のう</rt></ruby><ruby>率<rt>りつ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い<span class='grammar-highlight'>というわけではない</span>。",
      "cn": "天天加班并不代表工作效率就一定高。"
    },
    "similarGrammar": [
      2025,
      2054
    ],
    "firstKana": "と",
    "keyword": "委婉否定",
    "book": "N2",
    "sourceId": 19,
    "lessonNumber": 2,
    "sourceMacro": "否定",
    "sourceCategory": "部分否定"
  },
  {
    "id": 2020,
    "lesson": "第2课",
    "macro": "状态与结果",
    "category": "状态・附带",
    "point": "～ことなく",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> + ことなく",
    "meaning": "不...；没有...",
    "explanation": "相当于“～ないで”的书面表达。表示在<span class='font-bold text-[#8a3324]'>不伴随某动作或状态的情况下</span>，一直持续做后续的事情。",
    "example": {
      "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>諦<rt>あきら</rt></ruby>める<span class='grammar-highlight'>ことなく</span><ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>け、ついに<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>に<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>した。",
      "cn": "总经理从未放弃，历经无数次尝试，终于成功研发出了新产品。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "不伴随动作",
    "book": "N2",
    "sourceId": 20,
    "lessonNumber": 2,
    "sourceMacro": "状态与强制",
    "sourceCategory": "状态・附带"
  },
  {
    "id": 2021,
    "lesson": "第2课",
    "macro": "逆接与让步",
    "category": "逆接・转折",
    "point": "～にもかかわらず",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である）+ にもかかわらず",
    "meaning": "尽管...却...",
    "explanation": "表示后项出现了与前项常理推断<span class='font-bold text-[#8a3324]'>相反或意料之外</span>的结果。常带有惊讶、意外或不满的感情色彩。",
    "example": {
      "jp": "<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>な<ruby>不<rt>ふ</rt></ruby><ruby>況<rt>きょう</rt></ruby><span class='grammar-highlight'>にもかかわらず</span>、あの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>売<rt>う</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げは<ruby>伸<rt>の</rt></ruby>び<ruby>続<rt>つづ</rt></ruby>けている。",
      "cn": "尽管经济如此不景气，那家公司的销售额却依然在持续增长。"
    },
    "similarGrammar": [
      2002,
      2005
    ],
    "firstKana": "に",
    "keyword": "意料之外",
    "book": "N2",
    "sourceId": 21,
    "lessonNumber": 2,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "逆接・转折"
  },
  {
    "id": 2022,
    "lesson": "第3课",
    "macro": "举例与递进",
    "category": "资格・立场",
    "point": "～として（の）",
    "connection": "名词 + として（の）",
    "meaning": "作为...",
    "explanation": "表示具备某种<span class='font-bold text-[#8a3324]'>资格、身份或立场</span>。后接名词时使用“としての”。",
    "example": {
      "jp": "<ruby>彼<rt>かれ</rt></ruby>はチームのリーダー<span class='grammar-highlight'>として</span>、<ruby>大<rt>おお</rt></ruby>きな<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>負<rt>お</rt></ruby>っている。",
      "cn": "作为团队的负责人，他肩负着重大的责任。"
    },
    "similarGrammar": [
      2016
    ],
    "firstKana": "と",
    "keyword": "身份立场",
    "book": "N2",
    "sourceId": 22,
    "lessonNumber": 3,
    "sourceMacro": "资格与举例",
    "sourceCategory": "资格・立场"
  },
  {
    "id": 2023,
    "lesson": "第3课",
    "macro": "条件与假定",
    "category": "期间・条件",
    "point": "～限り（は）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ている形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> / 名词+である / な形容词干+な・である + 限り",
    "meaning": "只要...就...；在...期间",
    "explanation": "表示在<span class='font-bold text-[#8a3324]'>某个状态持续的期间</span>，后项状态也会随之持续。常用于表达某种条件限制。",
    "example": {
      "jp": "<ruby>私<rt>わたし</rt></ruby>がこの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>である<span class='grammar-highlight'><ruby>限<rt>かぎ</rt></ruby>り</span>、そのような<ruby>不<rt>ふ</rt></ruby><ruby>正<rt>せい</rt></ruby>は<ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby>に<ruby>許<rt>ゆる</rt></ruby>さない。",
      "cn": "只要我还是这家公司的总经理，就绝对不允许发生那种徇私舞弊的事情。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "只要…就",
    "book": "N2",
    "sourceId": 23,
    "lessonNumber": 3,
    "sourceMacro": "条件与假定",
    "sourceCategory": "期间・条件"
  },
  {
    "id": 2140,
    "lesson": "第3课",
    "macro": "依据与视角",
    "category": "所见判断",
    "point": "～限りでは",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词 + の + 限りでは",
    "meaning": "据...所知；就...范围来看",
    "explanation": "表示根据<span class='font-bold text-[#8a3324]'>自己目前掌握的范围、知识或观察</span>来做判断。",
    "example": {
      "jp": "<ruby>私<rt>わたし</rt></ruby>が<ruby>知<rt>し</rt></ruby>る<span class='grammar-highlight'><ruby>限<rt>かぎ</rt></ruby>りでは</span>、<ruby>彼<rt>かれ</rt></ruby>はこれまで<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>ったことがない。",
      "cn": "据我所知，他至今一次也没有违背过约定。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "据…所知",
    "book": "N2",
    "sourceId": 23,
    "lessonNumber": 3,
    "sourceMacro": "条件与假定",
    "sourceCategory": "期间・条件"
  },
  {
    "id": 2024,
    "lesson": "第3课",
    "macro": "状态与结果",
    "category": "强制・无可奈何",
    "point": "～ざるを得ない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span>（去掉ない） + ざるを得ない （※する变为せざるを得ない）",
    "meaning": "不得不...；只能...",
    "explanation": "表达虽然内心不情愿，但迫于情况或常理<span class='font-bold text-[#8a3324]'>没有其他选择</span>，只好这么做。偏书面语。",
    "example": {
      "jp": "<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby>が<ruby>底<rt>そこ</rt></ruby>をついてしまったため、この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>は<ruby>中<rt>ちゅう</rt></ruby><ruby>止<rt>し</rt></ruby>せ<span class='grammar-highlight'>ざるを<ruby>得<rt>え</rt></ruby>ない</span>。",
      "cn": "由于资金已经彻底见底，这个计划不得不被迫中止。"
    },
    "similarGrammar": [],
    "firstKana": "ざ",
    "keyword": "迫不得已",
    "book": "N2",
    "sourceId": 24,
    "lessonNumber": 3,
    "sourceMacro": "状态与强制",
    "sourceCategory": "强制・无可奈何"
  },
  {
    "id": 2025,
    "lesson": "第3课",
    "macro": "否定",
    "category": "部分否定",
    "point": "～というものではない",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> + というものではない / というものでもない",
    "meaning": "并不是说...就...",
    "explanation": "对某种普遍看法或单方面断定进行<span class='font-bold text-[#8a3324]'>部分否定</span>，说明“虽然可能那样，但也不尽然”。",
    "example": {
      "jp": "お<ruby>金<rt>かね</rt></ruby>があれば<ruby>必<rt>かなら</rt></ruby>ずしも<ruby>幸<rt>しあわ</rt></ruby>せになれる<span class='grammar-highlight'>というものではない</span>。",
      "cn": "并不是说有钱就一定能获得幸福。"
    },
    "similarGrammar": [
      2019,
      2054
    ],
    "firstKana": "と",
    "keyword": "并非绝对",
    "book": "N2",
    "sourceId": 25,
    "lessonNumber": 3,
    "sourceMacro": "否定",
    "sourceCategory": "部分否定"
  },
  {
    "id": 2026,
    "lesson": "第3课",
    "macro": "主张与评价",
    "category": "评价・保留",
    "point": "～はともかく（として）",
    "connection": "名词 / <span class='text-[#8a3324] mx-1'>普通体</span>+かどうか + はともかく（として）",
    "meaning": "...姑且不论；暂且不说...",
    "explanation": "表示<span class='font-bold text-[#8a3324]'>先把前项事情搁置一边</span>，重点强调后项的事情更为关键或重要。常伴随对比。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しいオフィスの<ruby>内<rt>ない</rt></ruby><ruby>装<rt>そう</rt></ruby><span class='grammar-highlight'>はともかくとして</span>、この<ruby>高<rt>たか</rt></ruby>い<ruby>家<rt>や</rt></ruby><ruby>賃<rt>ちん</rt></ruby>は<ruby>決<rt>けっ</rt></ruby>して<ruby>承<rt>しょう</rt></ruby><ruby>認<rt>にん</rt></ruby>されない。",
      "cn": "新办公室的内部装修姑且不论，这么昂贵的租金是绝对无法获得批准的。"
    },
    "similarGrammar": [],
    "firstKana": "は",
    "keyword": "姑且不论",
    "book": "N2",
    "sourceId": 26,
    "lessonNumber": 3,
    "sourceMacro": "主张与评价",
    "sourceCategory": "评价・保留"
  },
  {
    "id": 2027,
    "lesson": "第3课",
    "macro": "可能性",
    "category": "推测",
    "point": "～かねない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> + かねない",
    "meaning": "有可能...；说不定会...",
    "explanation": "表示有发生<span class='font-bold text-[#8a3324]'>不良后果的危险性</span>，即有可能导致糟糕的结果。",
    "example": {
      "jp": "ほんのわずかな<ruby>計<rt>けい</rt></ruby><ruby>算<rt>さん</rt></ruby>ミスが、<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>損<rt>そん</rt></ruby><ruby>害<rt>がい</rt></ruby>を<ruby>与<rt>あた</rt></ruby>え<span class='grammar-highlight'>かねない</span>。",
      "cn": "哪怕只是极微小的计算错误，也有可能会给公司造成巨大的损失。"
    },
    "similarGrammar": [
      2034
    ],
    "firstKana": "か",
    "keyword": "可能发生坏事",
    "book": "N2",
    "sourceId": 27,
    "lessonNumber": 3,
    "sourceMacro": "可能性",
    "sourceCategory": "推测"
  },
  {
    "id": 2028,
    "lesson": "第3课",
    "macro": "比较与伴随",
    "category": "比较・重说",
    "point": "～というより（も）",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 / な形容词干 + というより",
    "meaning": "与其说...不如说...",
    "explanation": "表示纠正前面的说法，认为<span class='font-bold text-[#8a3324]'>后面的说法更准确、更贴切</span>。",
    "example": {
      "jp": "あの<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby><ruby>交<rt>こう</rt></ruby><ruby>換<rt>かん</rt></ruby><span class='grammar-highlight'>というより</span>、<ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>一<rt>いっ</rt></ruby><ruby>方<rt>ぽう</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>説<rt>せっ</rt></ruby><ruby>教<rt>きょう</rt></ruby>だった。",
      "cn": "那场会议与其说是交换意见，不如说是部长单方面的说教。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "说法更正",
    "book": "N2",
    "sourceId": 28,
    "lessonNumber": 3,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "比较・重说"
  },
  {
    "id": 2029,
    "lesson": "第3课",
    "macro": "情感与决心",
    "category": "状态・情感",
    "point": "～てはいられない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> + は（い）られない",
    "meaning": "不能（再这样）...下去；没有闲暇...",
    "explanation": "表示因为时间紧迫、心理焦急或情况不允许，而<span class='font-bold text-[#8a3324]'>无法继续保持某种状态</span>。",
    "example": {
      "jp": "<ruby>競<rt>きょう</rt></ruby><ruby>合<rt>ごう</rt></ruby><ruby>他<rt>た</rt></ruby><ruby>社<rt>しゃ</rt></ruby>が<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>を<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>したから、のんびりし<span class='grammar-highlight'>てはいられない</span>。",
      "cn": "竞争对手已经发售了新产品，我们可不能再这么悠哉地坐以待毙了。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "情况不允许",
    "book": "N2",
    "sourceId": 29,
    "lessonNumber": 3,
    "sourceMacro": "情感与决心",
    "sourceCategory": "状态・情感"
  },
  {
    "id": 2030,
    "lesson": "第4课",
    "macro": "逆接与让步",
    "category": "同时・逆接",
    "point": "～つつ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> + つつ",
    "meaning": "一边...一边... / 虽然...但是...",
    "explanation": "表示前后两件事<span class='font-bold text-[#8a3324]'>同时进行</span>（类似于“ながら”的书面语），也可表示明知如此却做出<span class='font-bold text-[#8a3324]'>相反行动</span>（逆接）。",
    "example": {
      "jp": "この<ruby>投<rt>とう</rt></ruby><ruby>資<rt>し</rt></ruby>は<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>だと<ruby>知<rt>し</rt></ruby>り<span class='grammar-highlight'>つつ</span>も、<ruby>多<rt>た</rt></ruby><ruby>額<rt>がく</rt></ruby>の<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby>をつぎ<ruby>込<rt>こ</rt></ruby>んでしまった。",
      "cn": "明知道这项投资充满风险，却还是没忍住投入了巨额资金。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "同时进行/逆接",
    "book": "N2",
    "sourceId": 30,
    "lessonNumber": 4,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "同时・逆接"
  },
  {
    "id": 2031,
    "lesson": "第4课",
    "macro": "时间与顺序",
    "category": "范围・期间",
    "point": "～にわたって",
    "connection": "名词 + にわたって",
    "meaning": "历经...；跨越...",
    "explanation": "表示某个状态或动作涉及了<span class='font-bold text-[#8a3324]'>整个范围</span>（时间、地点、次数等）。多用于描述较长的时间或较广的区域。",
    "example": {
      "jp": "5<ruby>年<rt>ねん</rt></ruby><ruby>間<rt>かん</rt></ruby><span class='grammar-highlight'>にわたって</span><ruby>進<rt>すす</rt></ruby>められてきた<ruby>新<rt>しん</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>屋<rt>おく</rt></ruby>の<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>が、ついに<ruby>完<rt>かん</rt></ruby><ruby>了<rt>りょう</rt></ruby>した。",
      "cn": "历时五年推进的新办公大楼建设终于顺利完工了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "涉及全范围",
    "book": "N2",
    "sourceId": 31,
    "lessonNumber": 4,
    "sourceMacro": "时间与场景",
    "sourceCategory": "范围・期间"
  },
  {
    "id": 2032,
    "lesson": "第4课",
    "macro": "时间与顺序",
    "category": "范围・期间",
    "point": "～から～にかけて",
    "connection": "名词 + から + 名词 + にかけて",
    "meaning": "从...到...",
    "explanation": "表示时间或空间的<span class='font-bold text-[#8a3324]'>大概范围</span>，起点和终点的界限通常不如“から～まで”那样明确。",
    "example": {
      "jp": "<ruby>明<rt>あす</rt></ruby>の<ruby>夜<rt>よる</rt></ruby><span class='grammar-highlight'>から</span><ruby>明<rt>あさ</rt></ruby><ruby>後<rt>っ</rt></ruby><ruby>日<rt>て</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby><span class='grammar-highlight'>にかけて</span>、<ruby>大<rt>おお</rt></ruby><ruby>型<rt>がた</rt></ruby><ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>が<ruby>関<rt>かん</rt></ruby><ruby>東<rt>とう</rt></ruby><ruby>地<rt>ち</rt></ruby><ruby>方<rt>ほう</rt></ruby>に<ruby>接<rt>せっ</rt></ruby><ruby>近<rt>きん</rt></ruby>する<ruby>見<rt>み</rt></ruby><ruby>込<rt>こ</rt></ruby>みです。",
      "cn": "预计明晚到后天清晨这段时间，大型台风将持续逼近关东地区。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "大概范围",
    "book": "N2",
    "sourceId": 32,
    "lessonNumber": 4,
    "sourceMacro": "时间与场景",
    "sourceCategory": "范围・期间"
  },
  {
    "id": 2033,
    "lesson": "第4课",
    "macro": "比较与伴随",
    "category": "伴随・对应",
    "point": "～にともなって / ～にともない",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> + にともなって",
    "meaning": "伴随着...",
    "explanation": "表示由于前项发生变化，后项也<span class='font-bold text-[#8a3324]'>随之发生变化</span>。多用于书面语或客观情况的描述。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby>システムの<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby><span class='grammar-highlight'>にともない</span>、<ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>の<ruby>業<rt>ぎょう</rt></ruby><ruby>務<rt>む</rt></ruby>フローが<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>へん</rt></ruby><ruby>更<rt>こう</rt></ruby>される。",
      "cn": "伴随着新系统的引进，公司内部的业务流程将发生重大调整。"
    },
    "similarGrammar": [
      2035,
      2065
    ],
    "firstKana": "に",
    "keyword": "伴随发生",
    "book": "N2",
    "sourceId": 33,
    "lessonNumber": 4,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "伴随・对应"
  },
  {
    "id": 2034,
    "lesson": "第4课",
    "macro": "可能性",
    "category": "推测",
    "point": "～おそれがある",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> / 名词+の + おそれがある",
    "meaning": "恐怕会...；有...的危险",
    "explanation": "表示有发生某种<span class='font-bold text-[#8a3324]'>不良事态的可能性</span>，常出现在新闻播报或天气预报等客观警告中。",
    "example": {
      "jp": "このまま<ruby>円<rt>えん</rt></ruby><ruby>安<rt>やす</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>けば、<ruby>多<rt>おお</rt></ruby>くの<ruby>中<rt>ちゅう</rt></ruby><ruby>小<rt>しょう</rt></ruby><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>が<ruby>倒<rt>とう</rt></ruby><ruby>産<rt>さん</rt></ruby>する<span class='grammar-highlight'>おそれがある</span>。",
      "cn": "如果日元贬值持续下去，恐怕会有许多中小企业面临破产的危机。"
    },
    "similarGrammar": [
      2027
    ],
    "firstKana": "お",
    "keyword": "发生危险的可能性",
    "book": "N2",
    "sourceId": 34,
    "lessonNumber": 4,
    "sourceMacro": "可能性",
    "sourceCategory": "推测"
  },
  {
    "id": 2035,
    "lesson": "第4课",
    "macro": "比较与伴随",
    "category": "伴随・添加",
    "point": "～とともに",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> / い形容词 / な形容词干+である + とともに",
    "meaning": "和...一起；同时；伴随着...",
    "explanation": "可以表示共同行动，或是两件事<span class='font-bold text-[#8a3324]'>同时发生</span>，也可以表示随着一方变化另一方也变化。偏书面表达。",
    "example": {
      "jp": "インターネットの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby><span class='grammar-highlight'>とともに</span>、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>は<ruby>劇<rt>げき</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>になった。",
      "cn": "伴随着互联网的普及，我们的日常生活变得前所未有地便利。"
    },
    "similarGrammar": [
      2033,
      2065
    ],
    "firstKana": "と",
    "keyword": "同时伴随",
    "book": "N2",
    "sourceId": 35,
    "lessonNumber": 4,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "伴随・添加"
  },
  {
    "id": 2036,
    "lesson": "第4课",
    "macro": "时间与顺序",
    "category": "前后顺序",
    "point": "～次第",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / 名词 + 次第",
    "meaning": "一...就...",
    "explanation": "表示某事<span class='font-bold text-[#8a3324]'>一旦完成或实现</span>，立刻进行接下来的动作。后项常接说话人的意向或请求，较少接过去式。",
    "example": {
      "jp": "スケジュールの<ruby>詳<rt>しょう</rt></ruby><ruby>細<rt>さい</rt></ruby>が<ruby>決<rt>き</rt></ruby>まり<span class='grammar-highlight'><ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby></span>、<ruby>改<rt>あらた</rt></ruby>めてご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>いたします。",
      "cn": "行程细节一旦敲定，我会立刻再次与您联系。"
    },
    "similarGrammar": [],
    "firstKana": "し",
    "keyword": "一完成立刻",
    "book": "N2",
    "sourceId": 36,
    "lessonNumber": 4,
    "sourceMacro": "时间与场景",
    "sourceCategory": "前后顺序"
  },
  {
    "id": 2037,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "状态・结果",
    "point": "～たきり",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 名词 + きり",
    "meaning": "...之后就一直没...；仅限...",
    "explanation": "表示前一个动作发生后，其状态一直持续，且期待的下一个动作<span class='font-bold text-[#8a3324]'>迟迟没有发生</span>。多带有遗憾或意外的语气。",
    "example": {
      "jp": "<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>遊<rt>あそ</rt></ruby>びに<ruby>出<rt>で</rt></ruby>かけ<span class='grammar-highlight'>たきり</span>、<ruby>夕<rt>ゆう</rt></ruby><ruby>方<rt>がた</rt></ruby>になっても<ruby>帰<rt>かえ</rt></ruby>ってこない。",
      "cn": "儿子一大早出门去玩，结果到了傍晚连个人影都没见着。"
    },
    "similarGrammar": [],
    "firstKana": "き",
    "keyword": "之后再也没",
    "book": "N2",
    "sourceId": 37,
    "lessonNumber": 5,
    "sourceMacro": "状态与强制",
    "sourceCategory": "状态・结果"
  },
  {
    "id": 2038,
    "lesson": "第5课",
    "macro": "否定",
    "category": "强烈否定",
    "point": "～どころではない / ～どころじゃない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ている形</span> / 名词 + どころではない",
    "meaning": "根本不是...的时候；哪谈得上...",
    "explanation": "表示由于时间、金钱、心理等方面的客观限制，<span class='font-bold text-[#8a3324]'>很难抽出余力</span>去做某事。常用于否定当前具备做某事的条件。",
    "example": {
      "jp": "<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>は<ruby>期<rt>き</rt></ruby><ruby>末<rt>まつ</rt></ruby><ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>なので、ゲームをして<ruby>遊<rt>あそ</rt></ruby>ぶ<span class='grammar-highlight'>どころではない</span>。",
      "cn": "下周就要期末考试了，现在哪还有闲工夫打游戏啊。"
    },
    "similarGrammar": [],
    "firstKana": "ど",
    "keyword": "根本没余力",
    "book": "N2",
    "sourceId": 38,
    "lessonNumber": 5,
    "sourceMacro": "否定",
    "sourceCategory": "强烈否定"
  },
  {
    "id": 2039,
    "lesson": "第5课",
    "macro": "逆接与让步",
    "category": "逆接・让步",
    "point": "～ものの",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である/な） + ものの",
    "meaning": "虽然...但是...",
    "explanation": "承认前项是事实，但后项往往出现了与前项常理推断<span class='font-bold text-[#8a3324]'>不符或不如意</span>的结果。偏书面语。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しいパソコンを<ruby>買<rt>か</rt></ruby>っ<span class='grammar-highlight'>たものの</span>、<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が<ruby>複<rt>ふく</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>すぎて<ruby>全<rt>まった</rt></ruby>く<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>できない。",
      "cn": "虽然买了新电脑，但操作方式实在太复杂了，我到现在都没搞明白。"
    },
    "similarGrammar": [
      2015
    ],
    "firstKana": "も",
    "keyword": "虽然但没如愿",
    "book": "N2",
    "sourceId": 39,
    "lessonNumber": 5,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "逆接・让步"
  },
  {
    "id": 2040,
    "lesson": "第5课",
    "macro": "情感与决心",
    "category": "情感・评价",
    "point": "～ことに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / い形容词 / な形容词干+な + ことに",
    "meaning": "令人...的是...",
    "explanation": "常放在句首，用来强调说话人对后续事项的<span class='font-bold text-[#8a3324]'>某种强烈情感或评价</span>（如惊讶、困扰、高兴等）。",
    "example": {
      "jp": "<ruby>嬉<rt>うれ</rt></ruby>しい<span class='grammar-highlight'>ことに</span>、<ruby>第<rt>だい</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>志<rt>し</rt></ruby><ruby>望<rt>ぼう</rt></ruby>の<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>から<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby><ruby>通<rt>つう</rt></ruby><ruby>知<rt>ち</rt></ruby>が<ruby>届<rt>とど</rt></ruby>いた。",
      "cn": "让人高兴的是，我收到了第一志愿大学的录取通知书。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "强调情感评价",
    "book": "N2",
    "sourceId": 40,
    "lessonNumber": 5,
    "sourceMacro": "情感与决心",
    "sourceCategory": "情感・评价"
  },
  {
    "id": 2041,
    "lesson": "第5课",
    "macro": "主张与评价",
    "category": "评价・对比",
    "point": "～にしては",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干） + にしては",
    "meaning": "照...来说却...；就...而言却...",
    "explanation": "表示后项的事实与根据前项标准做出的<span class='font-bold text-[#8a3324]'>一般性预期不符</span>。常带有惊讶、意外或批评的语气。通常不接没有明确标准的词。",
    "example": {
      "jp": "<ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>１<ruby>年<rt>ねん</rt></ruby><ruby>目<rt>め</rt></ruby><span class='grammar-highlight'>にしては</span>、<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>な<ruby>営<rt>えい</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>収<rt>おさ</rt></ruby>めている。",
      "cn": "就一个刚入职一年的新人而言，他取得了非常优异的销售业绩。"
    },
    "similarGrammar": [
      2095
    ],
    "firstKana": "に",
    "keyword": "与预期标准不符",
    "book": "N2",
    "sourceId": 41,
    "lessonNumber": 5,
    "sourceMacro": "主张与评价",
    "sourceCategory": "评价・对比"
  },
  {
    "id": 2042,
    "lesson": "第5课",
    "macro": "限定与程度",
    "category": "程度・咏叹",
    "point": "～ことか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span>・<span class='text-[#8a3324] mx-1'>原形</span> / い形容词 / な形容词干+な + ことか",
    "meaning": "多么...啊；到底...啊",
    "explanation": "常与疑问词（如“何回、どんなに、どれほど”等）呼应，表示程度比较深，带有<span class='font-bold text-[#8a3324]'>强烈的咏叹或感慨</span>语气。",
    "example": {
      "jp": "<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>の<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いたとき、どんなに<ruby>喜<rt>よろこ</rt></ruby>ん<span class='grammar-highlight'>だことか</span>。",
      "cn": "听到合格通知的那一刻，我简直高兴得无法用语言形容。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "强烈感慨多么",
    "book": "N2",
    "sourceId": 42,
    "lessonNumber": 5,
    "sourceMacro": "程度",
    "sourceCategory": "程度・咏叹"
  },
  {
    "id": 2043,
    "lesson": "第5课",
    "macro": "条件与假定",
    "category": "假定・条件",
    "point": "～さえ～ば",
    "connection": "名词+さえ + 动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) / 动词<span class='text-[#8a3324] mx-1'>第一连用形</span>+さえすれば",
    "meaning": "只要...就...",
    "explanation": "提示某一个<span class='font-bold text-[#8a3324]'>唯一的、最低限度</span>的条件。只要满足了这个条件，就能达成后项的结果。",
    "example": {
      "jp": "スマホ<span class='grammar-highlight'>さえあれば</span>、<ruby>見<rt>み</rt></ruby><ruby>知<rt>し</rt></ruby>らぬ<ruby>街<rt>まち</rt></ruby>でも<ruby>迷<rt>まよ</rt></ruby>うことなく<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>地<rt>ち</rt></ruby>に<ruby>着<rt>つ</rt></ruby>くことができる。",
      "cn": "只要有智能手机，即使在陌生的城市也绝对不会迷路，能顺利到达目的地。"
    },
    "similarGrammar": [],
    "firstKana": "さ",
    "keyword": "最低限度的唯一条件",
    "book": "N2",
    "sourceId": 43,
    "lessonNumber": 5,
    "sourceMacro": "条件与假定",
    "sourceCategory": "假定・条件"
  },
  {
    "id": 2044,
    "lesson": "第5课",
    "macro": "可能性",
    "category": "不可能",
    "point": "～ようがない / ～ようもない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> + ようがない",
    "meaning": "没法...；无法...",
    "explanation": "表示虽然想做某事，但是因为<span class='font-bold text-[#8a3324]'>缺乏方法、手段</span>或客观条件不允许，所以无法做到。",
    "example": {
      "jp": "パソコンのデータがすべて<ruby>消<rt>き</rt></ruby>えてしまい、どうにも<ruby>復<rt>ふく</rt></ruby><ruby>旧<rt>きゅう</rt></ruby>のし<span class='grammar-highlight'>ようがない</span>。",
      "cn": "电脑里的数据全丢了，现在想恢复都毫无办法。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "缺乏方法手段",
    "book": "N2",
    "sourceId": 44,
    "lessonNumber": 5,
    "sourceMacro": "可能性",
    "sourceCategory": "不可能"
  },
  {
    "id": 2045,
    "lesson": "第5课",
    "macro": "状态与结果",
    "category": "过程后结果",
    "point": "～あげく（に）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 名词+の + あげく",
    "meaning": "经过一番...最后却...",
    "explanation": "表示经历了长时间的纠结、烦恼或辛苦的过程，最终却得到了一个<span class='font-bold text-[#8a3324]'>多为消极或不尽如人意</span>的结果。",
    "example": {
      "jp": "<ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も<ruby>迷<rt>まよ</rt></ruby>っ<span class='grammar-highlight'>たあげく</span>、<ruby>結<rt>けっ</rt></ruby><ruby>局<rt>きょく</rt></ruby><ruby>何<rt>なに</rt></ruby>も<ruby>買<rt>か</rt></ruby>わずに<ruby>店<rt>みせ</rt></ruby>を<ruby>出<rt>で</rt></ruby>てしまった。",
      "cn": "纠结了好几个小时，最后竟然什么都没买就离开商店了。"
    },
    "similarGrammar": [
      2124
    ],
    "firstKana": "あ",
    "keyword": "辛苦后的遗憾结果",
    "book": "N2",
    "sourceId": 45,
    "lessonNumber": 5,
    "sourceMacro": "状态与强制",
    "sourceCategory": "状态・结果"
  },
  {
    "id": 2046,
    "lesson": "第5课",
    "macro": "指示与忠告",
    "category": "忠告・禁止",
    "point": "～ものではない / ～もんじゃない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> + ものではない",
    "meaning": "不应该...；不该...",
    "explanation": "基于社会常识、道德伦理或长者的经验，用来告诫别人<span class='font-bold text-[#8a3324]'>不应当做某事</span>。带有轻微的说教语气。",
    "example": {
      "jp": "<ruby>目<rt>め</rt></ruby><ruby>上<rt>うえ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって、そんな<ruby>失<rt>しつ</rt></ruby><ruby>礼<rt>れい</rt></ruby>な<ruby>口<rt>くち</rt></ruby>の<ruby>利<rt>き</rt></ruby>き<ruby>方<rt>かた</rt></ruby>をする<span class='grammar-highlight'>ものではない</span>。",
      "cn": "绝对不能用那种没礼貌的口气跟长辈说话。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "基于常识的告诫",
    "book": "N2",
    "sourceId": 46,
    "lessonNumber": 5,
    "sourceMacro": "指示与忠告",
    "sourceCategory": "忠告・禁止"
  },
  {
    "id": 2047,
    "lesson": "第5课",
    "macro": "限定与程度",
    "category": "程度・尝试",
    "point": "～だけ～",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / <span class='text-[#8a3324] mx-1'>可能形</span>式 + だけ + 同一动词",
    "meaning": "尽量...；能...就...多少",
    "explanation": "表示达到某种能力的极限。也常与“～てみる”连用（如：～だけ～てみる），表示<span class='font-bold text-[#8a3324]'>虽然没把握，但姑且试一试</span>。",
    "example": {
      "jp": "<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>できるかどうかは<ruby>分<rt>わ</rt></ruby>からないが、やれる<span class='grammar-highlight'>だけ</span>のことはやってみよう。",
      "cn": "虽然不知道能不能考上，但至少要尽我所能拼一把试试看。"
    },
    "similarGrammar": [
      2055
    ],
    "firstKana": "だ",
    "keyword": "达到极限/姑且一试",
    "book": "N2",
    "sourceId": 47,
    "lessonNumber": 5,
    "sourceMacro": "程度",
    "sourceCategory": "程度・尝试"
  },
  {
    "id": 2048,
    "lesson": "第6课",
    "macro": "原因与理由",
    "category": "负面结果",
    "point": "～ばかりに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / い形容词 / な形容词干+な / 名词+である + ばかりに",
    "meaning": "仅仅因为...（导致了不好的结果）",
    "explanation": "表示仅仅因为某个小原因，却导致了<span class='font-bold text-[#8a3324]'>令人遗憾的负面结果</span>。常带有后悔的语气。",
    "example": {
      "jp": "<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>を<ruby>怠<rt>おこた</rt></ruby>っ<span class='grammar-highlight'>たばかりに</span>、<ruby>取<rt>とり</rt></ruby><ruby>引<rt>ひき</rt></ruby><ruby>先<rt>さき</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>損<rt>そん</rt></ruby><ruby>害<rt>がい</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えてしまった。",
      "cn": "仅仅因为疏忽了确认，竟然给客户造成了如此巨大的损失。"
    },
    "similarGrammar": [
      2128
    ],
    "firstKana": "ば",
    "keyword": "仅因…致坏结果",
    "book": "N2",
    "sourceId": 48,
    "lessonNumber": 6,
    "sourceMacro": "原因与理由",
    "sourceCategory": "负面结果"
  },
  {
    "id": 2049,
    "lesson": "第6课",
    "macro": "指示与忠告",
    "category": "忠告・建议",
    "point": "～ことはない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> + ことはない",
    "meaning": "没必要...；用不着...",
    "explanation": "用来劝解或安慰对方，告知对方某种担心或特定的行为是<span class='font-bold text-[#8a3324]'>不必要的</span>。多用于口语对话。",
    "example": {
      "jp": "<ruby>初<rt>はじ</rt></ruby>めてのプレゼンで<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>するのは<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だから、そんなに<ruby>落<rt>お</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>む<span class='grammar-highlight'>ことはない</span>よ。",
      "cn": "第一次做演示失败是很正常的，你完全没必要这么垂头丧气。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "没必要",
    "book": "N2",
    "sourceId": 49,
    "lessonNumber": 6,
    "sourceMacro": "指示与忠告",
    "sourceCategory": "忠告・建议"
  },
  {
    "id": 2050,
    "lesson": "第6课",
    "macro": "比较与伴随",
    "category": "比较・基准",
    "point": "～に比べて / ～に比べ",
    "connection": "名词 + に比べて",
    "meaning": "与...相比",
    "explanation": "将两个或多个事物放在一起进行<span class='font-bold text-[#8a3324]'>对照、比较</span>，说明两者在程度或状态上的差异。",
    "example": {
      "jp": "<ruby>今<rt>こと</rt></ruby><ruby>年<rt>とし</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>は<ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby><span class='grammar-highlight'>に<ruby>比<rt>くら</rt></ruby>べて</span>、<ruby>異<rt>い</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<ruby>気<rt>き</rt></ruby><ruby>温<rt>おん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い<ruby>日<rt>ひ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。",
      "cn": "相比于去年，今年夏天异常高温的日子持续得也太久了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "对照比较",
    "book": "N2",
    "sourceId": 50,
    "lessonNumber": 6,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "比较・基准"
  },
  {
    "id": 2051,
    "lesson": "第6课",
    "macro": "否定",
    "category": "强烈否定",
    "point": "～ものか / ～もんか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / い形容词 / な形容词干+な / 名词+な + ものか",
    "meaning": "怎么会...；绝不...",
    "explanation": "带有强烈感情色彩的<span class='font-bold text-[#8a3324]'>否定表达</span>，表示说话人内心的强烈反驳或坚定的决心。",
    "example": {
      "jp": "あんなブラック<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>で<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と<ruby>働<rt>はたら</rt></ruby>く<span class='grammar-highlight'>ものか</span>。",
      "cn": "我绝对不会再去那种无良黑心企业上班了。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "强烈反驳/决心",
    "book": "N2",
    "sourceId": 51,
    "lessonNumber": 6,
    "sourceMacro": "否定",
    "sourceCategory": "强烈否定"
  },
  {
    "id": 2052,
    "lesson": "第6课",
    "macro": "主张与评价",
    "category": "主张・评价",
    "point": "～というものだ / ～というものよ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干） + というものだ",
    "meaning": "这才叫...；这就是...",
    "explanation": "针对某一事物或现象，基于一般常识或自身价值观给出<span class='font-bold text-[#8a3324]'>感叹或总结性的评价</span>。",
    "example": {
      "jp": "<ruby>困<rt>こま</rt></ruby>った<ruby>時<rt>とき</rt></ruby>に<ruby>助<rt>たす</rt></ruby>け<ruby>合<rt>あ</rt></ruby>うのが、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>の<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby><span class='grammar-highlight'>というものだ</span>。",
      "cn": "在困难时期互相拉一把，这才叫真正的朋友。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "感叹或总结评价",
    "book": "N2",
    "sourceId": 52,
    "lessonNumber": 6,
    "sourceMacro": "主张与评价",
    "sourceCategory": "主张・评价"
  },
  {
    "id": 2053,
    "lesson": "第6课",
    "macro": "原因与理由",
    "category": "强调原因",
    "point": "～ばこそ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) / い形容词ければ / な形容词・名词+であれば + こそ",
    "meaning": "正是因为...才...",
    "explanation": "强调某个原因，表示<span class='font-bold text-[#8a3324]'>正是因为有这个特定的原因</span>，才会有后项的结果。后项多带有积极意义或说话人的主张。",
    "example": {
      "jp": "このサービスを<ruby>愛<rt>あい</rt></ruby>していれ<span class='grammar-highlight'>ばこそ</span>、あえて<ruby>厳<rt>きび</rt></ruby>しい<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<ruby>言<rt>い</rt></ruby>わせてもらいます。",
      "cn": "正是因为我深爱着这款产品，才会特意提出这么严厉的批评意见。"
    },
    "similarGrammar": [
      2139
    ],
    "firstKana": "ば",
    "keyword": "正是因为",
    "book": "N2",
    "sourceId": 53,
    "lessonNumber": 6,
    "sourceMacro": "原因与理由",
    "sourceCategory": "强调原因"
  },
  {
    "id": 2054,
    "lesson": "第6课",
    "macro": "否定",
    "category": "部分否定",
    "point": "～ないことはない / ～ないこともない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span> / い形容词く・な形容词/名词+で + ないことはない",
    "meaning": "也不是不...；并非不...",
    "explanation": "表示一种<span class='font-bold text-[#8a3324]'>委婉的肯定</span>，即并不是完全否定，说明在某种条件下是有可能成立的。",
    "example": {
      "jp": "お<ruby>酒<rt>さけ</rt></ruby>は<ruby>飲<rt>の</rt></ruby>め<span class='grammar-highlight'>ないことはない</span>ですが、グラス<ruby>一<rt>いっ</rt></ruby><ruby>杯<rt>ぱい</rt></ruby>で<ruby>顔<rt>かお</rt></ruby>が<ruby>真<rt>まっ</rt></ruby><ruby>赤<rt>か</rt></ruby>になるんです。",
      "cn": "喝酒倒也不是完全不能喝，只是喝一杯脸就会立刻变得通红。"
    },
    "similarGrammar": [
      2019,
      2025
    ],
    "firstKana": "な",
    "keyword": "委婉肯定",
    "book": "N2",
    "sourceId": 54,
    "lessonNumber": 6,
    "sourceMacro": "否定",
    "sourceCategory": "部分否定"
  },
  {
    "id": 2055,
    "lesson": "第6课",
    "macro": "限定与程度",
    "category": "程度・极限",
    "point": "～だけ",
    "connection": "能动形式 / 动词<span class='text-[#8a3324] mx-1'>原形</span> / たい / ほしい + だけ",
    "meaning": "尽可能...；能...就...",
    "explanation": "表示发挥自身能力的<span class='font-bold text-[#8a3324]'>最大极限</span>去做某事。与之前学过的“～だけ～てみる”同源，这里更强调尽其所能的程度。",
    "example": {
      "jp": "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>が<ruby>奢<rt>おご</rt></ruby>るから、<ruby>好<rt>す</rt></ruby>きなものを<ruby>食<rt>た</rt></ruby>べたい<span class='grammar-highlight'>だけ</span><ruby>頼<rt>たの</rt></ruby>んでいいよ。",
      "cn": "这次我请客，喜欢吃什么你们就敞开肚皮尽情点吧。"
    },
    "similarGrammar": [
      2047
    ],
    "firstKana": "だ",
    "keyword": "尽最大极限",
    "book": "N2",
    "sourceId": 55,
    "lessonNumber": 6,
    "sourceMacro": "程度",
    "sourceCategory": "程度・极限"
  },
  {
    "id": 2056,
    "lesson": "第6课",
    "macro": "原因与理由",
    "category": "口语辩解",
    "point": "～もの / ～もん",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> + もの / もん",
    "meaning": "因为...嘛",
    "explanation": "多用于女性或儿童的口语中，表示<span class='font-bold text-[#8a3324]'>撒娇、辩解或说明原因</span>。属于非常口语化的表达。",
    "example": {
      "jp": "だって、あの<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>、すごく<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>したんだ<span class='grammar-highlight'>もん</span>。",
      "cn": "人家忍不住哭也是因为那部电影实在是太感人了嘛。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "口语辩解撒娇",
    "book": "N2",
    "sourceId": 56,
    "lessonNumber": 6,
    "sourceMacro": "原因与理由",
    "sourceCategory": "口语辩解"
  },
  {
    "id": 2057,
    "lesson": "第6课",
    "macro": "状态与结果",
    "category": "社会常识・心理",
    "point": "～わけにはいかない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 动词<span class='text-[#8a3324] mx-1'>ない形</span> + わけにはいかない",
    "meaning": "不能...；没法...",
    "explanation": "表示由于<span class='font-bold text-[#8a3324]'>社会常识、道德或心理上的顾虑</span>，感觉很难去做某事，或者不得不做某事（接否定时）。",
    "example": {
      "jp": "<ruby>熱<rt>ねつ</rt></ruby>があるからといって、この<ruby>大<rt>だい</rt></ruby><ruby>事<rt>じ</rt></ruby>な<ruby>商<rt>しょう</rt></ruby><ruby>談<rt>だん</rt></ruby>を<ruby>休<rt>やす</rt></ruby>む<span class='grammar-highlight'>わけにはいかない</span>。",
      "cn": "就算发着高烧，这场至关重要的商务谈判我也绝对不能缺席。"
    },
    "similarGrammar": [],
    "firstKana": "わ",
    "keyword": "常识/心理上不能",
    "book": "N2",
    "sourceId": 57,
    "lessonNumber": 6,
    "sourceMacro": "状态与强制",
    "sourceCategory": "社会常识・心理"
  },
  {
    "id": 2058,
    "lesson": "第6课",
    "macro": "限定与程度",
    "category": "限定・书面",
    "point": "～のみ / ～のみだ",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> + のみ",
    "meaning": "只有...；唯有...",
    "explanation": "相当于“だけ”的<span class='font-bold text-[#8a3324]'>正式书面语</span>。用来限定事物或动作仅限于此，不再有其他选项。",
    "example": {
      "jp": "この<ruby>職<rt>しょく</rt></ruby><ruby>種<rt>しゅ</rt></ruby>は、<ruby>実<rt>じつ</rt></ruby><ruby>務<rt>む</rt></ruby><ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が３<ruby>年<rt>ねん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>ある<ruby>方<rt>かた</rt></ruby><span class='grammar-highlight'>のみ</span>ご<ruby>応<rt>おう</rt></ruby><ruby>募<rt>ぼ</rt></ruby>いただけます。",
      "cn": "本职位仅限拥有三年以上实际工作经验的人士报名应聘。"
    },
    "similarGrammar": [
      2003
    ],
    "firstKana": "の",
    "keyword": "书面限定仅限",
    "book": "N2",
    "sourceId": 58,
    "lessonNumber": 6,
    "sourceMacro": "限定",
    "sourceCategory": "限定・书面"
  },
  {
    "id": 2059,
    "lesson": "第6课",
    "macro": "条件与假定",
    "category": "假定・心态",
    "point": "～つもりで",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 动词<span class='text-[#8a3324] mx-1'>ている形</span> / 名词+の / い形容词・な形容词+な + つもりで",
    "meaning": "就当做是...；权当是...",
    "explanation": "表示实际上并非如此，但在<span class='font-bold text-[#8a3324]'>心里将其假想为那种状态</span>来做某事。",
    "example": {
      "jp": "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby><ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>行<rt>い</rt></ruby>った<span class='grammar-highlight'>つもりで</span>、<ruby>思<rt>おも</rt></ruby>い<ruby>切<rt>き</rt></ruby>って<ruby>高<rt>こう</rt></ruby><ruby>級<rt>きゅう</rt></ruby>なブランド<ruby>品<rt>ひん</rt></ruby>を<ruby>買<rt>か</rt></ruby>った。",
      "cn": "我权当自己去了一趟海外旅行，一咬牙狠心买下了这件奢侈品。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "权当做是",
    "book": "N2",
    "sourceId": 59,
    "lessonNumber": 6,
    "sourceMacro": "条件与假定",
    "sourceCategory": "假定・心态"
  },
  {
    "id": 2060,
    "lesson": "第7课",
    "macro": "依据与视角",
    "category": "判断・立场",
    "point": "～から見ると / ～からいうと / ～からすると",
    "connection": "名词 + から見ると / からいうと / からすると 等",
    "meaning": "从...来看；从...立场来看",
    "explanation": "表示以此作为判断的依据或立场。<span class='font-bold text-[#8a3324]'>从某个角度得出相应的结论</span>。",
    "example": {
      "jp": "<ruby>消<rt>しょう</rt></ruby><ruby>費<rt>ひ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>立<rt>たち</rt></ruby><ruby>場<rt>ば</rt></ruby><span class='grammar-highlight'>からすると</span>、<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>価<rt>か</rt></ruby><ruby>格<rt>かく</rt></ruby>は<ruby>安<rt>やす</rt></ruby>ければ<ruby>安<rt>やす</rt></ruby>いほどありがたい。",
      "cn": "站在消费者的立场来看，商品的价格自然是越便宜越好。"
    },
    "similarGrammar": [],
    "firstKana": "か",
    "keyword": "判断的立场角度",
    "book": "N2",
    "sourceId": 60,
    "lessonNumber": 7,
    "sourceMacro": "评价与视角",
    "sourceCategory": "判断・立场"
  },
  {
    "id": 2061,
    "lesson": "第7课",
    "macro": "比较与伴随",
    "category": "对比・两面性",
    "point": "～一方で / その一方で",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である/な） + 一方で / 接续词：その一方で",
    "meaning": "另一方面；与此相对",
    "explanation": "表示同一个事物具有<span class='font-bold text-[#8a3324]'>相反的两个方面</span>，或者同时存在两种不同的对比情况。",
    "example": {
      "jp": "<ruby>在<rt>ざい</rt></ruby><ruby>宅<rt>たく</rt></ruby><ruby>勤<rt>きん</rt></ruby><ruby>務<rt>む</rt></ruby>は<ruby>通<rt>つう</rt></ruby><ruby>勤<rt>きん</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れを<ruby>軽<rt>けい</rt></ruby><ruby>減<rt>げん</rt></ruby>できる<span class='grammar-highlight'><ruby>一<rt>いっ</rt></ruby><ruby>方<rt>ぽう</rt></ruby>で</span>、オンとオフの<ruby>切<rt>き</rt></ruby>り<ruby>替<rt>か</rt></ruby>えが<ruby>難<rt>むずか</rt></ruby>しい。",
      "cn": "居家办公在减轻通勤疲劳的同时，也让人很难在工作与生活之间自由切换。"
    },
    "similarGrammar": [
      2069,
      2115
    ],
    "firstKana": "い",
    "keyword": "相反的两面",
    "book": "N2",
    "sourceId": 61,
    "lessonNumber": 7,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "对比・两面性"
  },
  {
    "id": 2062,
    "lesson": "第7课",
    "macro": "原因与理由",
    "category": "判断依据・起因",
    "point": "～ことから",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である/な） + ことから",
    "meaning": "因为...；由于...（推断出...）",
    "explanation": "说明导致某个结果的<span class='font-bold text-[#8a3324]'>客观原因或判断依据</span>，也常用于说明名字的由来。",
    "example": {
      "jp": "<ruby>顔<rt>かお</rt></ruby>が<ruby>母<rt>はは</rt></ruby><ruby>親<rt>おや</rt></ruby>にそっくりな<span class='grammar-highlight'>ことから</span>、すぐにあの子が<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんの<ruby>娘<rt>むすめ</rt></ruby>だと<ruby>分<rt>わ</rt></ruby>かった。",
      "cn": "凭着那张和母亲长得一模一样的脸，我一眼就认出那是田中先生的女儿。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "客观原因/命名由来",
    "book": "N2",
    "sourceId": 62,
    "lessonNumber": 7,
    "sourceMacro": "原因与理由",
    "sourceCategory": "判断依据・起因"
  },
  {
    "id": 2063,
    "lesson": "第7课",
    "macro": "举例与递进",
    "category": "不仅・而且",
    "point": "～のみならず",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である） + のみならず",
    "meaning": "不仅...而且...",
    "explanation": "属于“～だけでなく”的<span class='font-bold text-[#8a3324]'>较正式书面语</span>。表示不局限于前项，还波及到其他范围。",
    "example": {
      "jp": "あのアイドルは<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby><span class='grammar-highlight'>のみならず</span>、<ruby>中<rt>ちゅう</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>でも<ruby>絶<rt>ぜつ</rt></ruby><ruby>大<rt>だい</rt></ruby>な<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>誇<rt>ほこ</rt></ruby>っている。",
      "cn": "那位偶像不仅深受年轻人的喜爱，在中老年群体中也享有极高的人气。"
    },
    "similarGrammar": [],
    "firstKana": "の",
    "keyword": "正式的不仅而且",
    "book": "N2",
    "sourceId": 63,
    "lessonNumber": 7,
    "sourceMacro": "添加与递进",
    "sourceCategory": "不仅・而且"
  },
  {
    "id": 2064,
    "lesson": "第7课",
    "macro": "举例与递进",
    "category": "例举・代表",
    "point": "～といった",
    "connection": "名词（多个例举） + といった + 概括性名词",
    "meaning": "...之类的...",
    "explanation": "列举几个有代表性的例子，然后在后面接续一个<span class='font-bold text-[#8a3324]'>总括性的名词</span>。",
    "example": {
      "jp": "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>はスマートフォンやタブレット<span class='grammar-highlight'>といった</span>モバイル<ruby>端<rt>たん</rt></ruby><ruby>末<rt>まつ</rt></ruby>で<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>を<ruby>見<rt>み</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えた。",
      "cn": "最近越来越多的人开始用智能手机和平板电脑之类的移动终端来观看电影。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "列举代表性事物",
    "book": "N2",
    "sourceId": 64,
    "lessonNumber": 7,
    "sourceMacro": "资格与举例",
    "sourceCategory": "例举・代表"
  },
  {
    "id": 2065,
    "lesson": "第7课",
    "macro": "比较与伴随",
    "category": "伴随变化",
    "point": "～につれて",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词 + につれて",
    "meaning": "随着...",
    "explanation": "表示前项事物逐步发生变化时，后项也<span class='font-bold text-[#8a3324]'>随之发生单向变化</span>。多用于自然发展、程度递进等场景。",
    "example": {
      "jp": "<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づく<span class='grammar-highlight'>につれて</span>、だんだん<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>な<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちが<ruby>強<rt>つよ</rt></ruby>くなってきた。",
      "cn": "随着考试日期的临近，我内心的焦虑感也变得越来越强烈。"
    },
    "similarGrammar": [
      2033,
      2035
    ],
    "firstKana": "に",
    "keyword": "随之发生变化",
    "book": "N2",
    "sourceId": 65,
    "lessonNumber": 7,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "伴随・对应"
  },
  {
    "id": 2141,
    "lesson": "第7课",
    "macro": "比较与伴随",
    "category": "伴随・对应",
    "point": "～にしたがって",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 名词 + にしたがって",
    "meaning": "随着...；按照...",
    "explanation": "表示前项变化时后项也<span class='font-bold text-[#8a3324]'>相应发生变化</span>，也可表示依照某种方针、顺序或标准展开。接续范围比「～につれて」更广。",
    "example": {
      "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby><ruby>針<rt>しん</rt></ruby><span class='grammar-highlight'>にしたがって</span>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>予<rt>よ</rt></ruby><ruby>算<rt>さん</rt></ruby><ruby>案<rt>あん</rt></ruby>が<ruby>作<rt>さく</rt></ruby><ruby>成<rt>せい</rt></ruby>された。",
      "cn": "按照公司的方针，新的预算方案已经制定出来了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "依照方针并随之展开",
    "book": "N2",
    "sourceId": 65,
    "lessonNumber": 7,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "伴随・对应"
  },
  {
    "id": 2066,
    "lesson": "第7课",
    "macro": "可能性",
    "category": "可能性",
    "point": "～得る（うる/える） / ～得ない（えない）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ 得る",
    "meaning": "有可能... / 能够...",
    "explanation": "表示某事在客观上是有可能发生的，或者具备某种客观能力。通常不用于表达个人的日常技能（如会游泳、会外语等）。",
    "example": {
      "jp": "このまま<ruby>対<rt>たい</rt></ruby><ruby>策<rt>さく</rt></ruby>を<ruby>怠<rt>おこた</rt></ruby>れば、<ruby>顧<rt>こ</rt></ruby><ruby>客<rt>きゃく</rt></ruby><ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>が<ruby>外<rt>がい</rt></ruby><ruby>部<rt>ぶ</rt></ruby>に<ruby>漏<rt>ろう</rt></ruby><ruby>洩<rt>えい</rt></ruby>し<span class='grammar-highlight'><ruby>得<rt>う</rt></ruby>る</span>。",
      "cn": "如果继续疏忽防范，客户信息就有可能泄露出去。"
    },
    "similarGrammar": [],
    "firstKana": "う / え",
    "keyword": "客观可能性",
    "book": "N2",
    "sourceId": 66,
    "lessonNumber": 7,
    "sourceMacro": "可能性",
    "sourceCategory": "可能性"
  },
  {
    "id": 2067,
    "lesson": "第7课",
    "macro": "逆接与让步",
    "category": "逆接・转折",
    "point": "～に反して / ～に反する",
    "connection": "名词 ＋ に反して",
    "meaning": "与...相反 / 违背...",
    "explanation": "表示后项出现了与前项的预测、期待、规则、常理等<span class='font-bold text-[#8a3324]'>完全相反的结果</span>。",
    "example": {
      "jp": "<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>の<ruby>予<rt>よ</rt></ruby><ruby>想<rt>そう</rt></ruby><span class='grammar-highlight'>に<ruby>反<rt>はん</rt></ruby>して</span>、<ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>の<ruby>景<rt>けい</rt></ruby><ruby>気<rt>き</rt></ruby>は<ruby>一<rt>いっ</rt></ruby><ruby>向<rt>こう</rt></ruby>に<ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>していない。",
      "cn": "与专家们的预测完全相反，今年的经济状况根本没有丝毫好转的迹象。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "与预期相反",
    "book": "N2",
    "sourceId": 67,
    "lessonNumber": 7,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "逆接・转折"
  },
  {
    "id": 2068,
    "lesson": "第7课",
    "macro": "对象与关联",
    "category": "对象・关联",
    "point": "～に関して / ～に関する",
    "connection": "名词 ＋ に関して",
    "meaning": "关于... / 有关...",
    "explanation": "提示某个话题或焦点，相当于“について”的<span class='font-bold text-[#8a3324]'>正式书面表达</span>。后项常接说明、调查、讨论等相关的动作。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby><ruby>日<rt>び</rt></ruby><span class='grammar-highlight'>に<ruby>関<rt>かん</rt></ruby>して</span>、<ruby>多<rt>おお</rt></ruby>くのお<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>からお<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせをいただいております。",
      "cn": "关于新产品的发售日期，我们收到了许多顾客的咨询。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "关于(正式)",
    "book": "N2",
    "sourceId": 68,
    "lessonNumber": 7,
    "sourceMacro": "对象与关联",
    "sourceCategory": "对象・关联"
  },
  {
    "id": 2069,
    "lesson": "第7课",
    "macro": "比较与伴随",
    "category": "对比・两面性",
    "point": "～反面 / ～半面",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词/な形容词干+である/な） ＋ 反面",
    "meaning": "另一方面... / 相反的一面是...",
    "explanation": "表示同一事物同时具备<span class='font-bold text-[#8a3324]'>性质完全相反的两个方面</span>。常用于客观评价事物的好坏两面。",
    "example": {
      "jp": "ネットショッピングは<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>な<span class='grammar-highlight'><ruby>反<rt>はん</rt></ruby><ruby>面<rt>めん</rt></ruby></span>、<ruby>実<rt>じつ</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>できないという<ruby>欠<rt>けっ</rt></ruby><ruby>点<rt>てん</rt></ruby>がある。",
      "cn": "网购在提供极大便利的同时，也存在无法亲眼确认实物这种缺陷。"
    },
    "similarGrammar": [
      2061,
      2115
    ],
    "firstKana": "は",
    "keyword": "同一事物的反面",
    "book": "N2",
    "sourceId": 69,
    "lessonNumber": 7,
    "sourceMacro": "对比与伴随",
    "sourceCategory": "对比・两面性"
  },
  {
    "id": 2070,
    "lesson": "第7课",
    "macro": "依据与视角",
    "category": "范围・立场",
    "point": "～上（じょう） / ～上は / ～上の",
    "connection": "名词 ＋ 上（じょう）",
    "meaning": "在...上 / 从...方面来看",
    "explanation": "表示从某个特定的<span class='font-bold text-[#8a3324]'>角度、立场或范围</span>来进行评价或判断。常接“理論、歴史、法律、教育”等词。",
    "example": {
      "jp": "<ruby>未<rt>み</rt></ruby><ruby>成<rt>せい</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>飲<rt>いん</rt></ruby><ruby>酒<rt>しゅ</rt></ruby>は、<ruby>法<rt>ほう</rt></ruby><ruby>律<rt>りつ</rt></ruby><span class='grammar-highlight'><ruby>上<rt>じょう</rt></ruby></span><ruby>固<rt>かた</rt></ruby>く<ruby>禁<rt>きん</rt></ruby>じられている。",
      "cn": "未成年人饮酒在法律层面上是被严令禁止的。"
    },
    "similarGrammar": [],
    "firstKana": "じ",
    "keyword": "从某角度/方面",
    "book": "N2",
    "sourceId": 70,
    "lessonNumber": 7,
    "sourceMacro": "评价与视角",
    "sourceCategory": "范围・立场"
  },
  {
    "id": 2071,
    "lesson": "第7课",
    "macro": "状态与结果",
    "category": "状态・变化",
    "point": "～つつある",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ つつある",
    "meaning": "正在逐渐...",
    "explanation": "表示某事物正在朝着某个方向<span class='font-bold text-[#8a3324]'>不断发生变化</span>。通常接续表示变化的动词，偏书面语。",
    "example": {
      "jp": "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby>は、テレワークの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby>によって<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わり<span class='grammar-highlight'>つつある</span>。",
      "cn": "随着远程办公的普及，日本的工作方式正在发生着巨大的改变。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "变化正在进行",
    "book": "N2",
    "sourceId": 71,
    "lessonNumber": 7,
    "sourceMacro": "状态与强制",
    "sourceCategory": "状态・变化"
  },
  {
    "id": 2072,
    "lesson": "第7课",
    "macro": "限定与程度",
    "category": "范围扩张",
    "point": "～に限らず",
    "connection": "名词 ＋ に限らず",
    "meaning": "不仅...（而且...） / 不限于...",
    "explanation": "表示不把范围限定在前项之中，而是<span class='font-bold text-[#8a3324]'>扩展到了更广的范围</span>。相当于“〜だけでなく”。",
    "example": {
      "jp": "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<ruby>先<rt>せん</rt></ruby><ruby>進<rt>しん</rt></ruby><ruby>国<rt>こく</rt></ruby><span class='grammar-highlight'>に<ruby>限<rt>かぎ</rt></ruby>らず</span>、<ruby>地<rt>ち</rt></ruby><ruby>球<rt>きゅう</rt></ruby><ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>で<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>すべき<ruby>課<rt>か</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。",
      "cn": "环境问题不仅仅是发达国家的事，更是需要在全球范围内共同解决的课题。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "不限于此",
    "book": "N2",
    "sourceId": 72,
    "lessonNumber": 7,
    "sourceMacro": "限定与程度",
    "sourceCategory": "范围扩张"
  },
  {
    "id": 2073,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "尊敬语",
    "point": "お見えになる",
    "connection": "固定词汇（作为「来る」等的尊敬语）",
    "meaning": "来；到（尊敬语）",
    "explanation": "是「来る」的尊敬语。用于尊长来到某处的场景，表现出对来访者的<span class='font-bold text-[#8a3324]'>敬意</span>。",
    "example": {
      "jp": "<ruby>本<rt>ほん</rt></ruby><ruby>日<rt>じつ</rt></ruby>の<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>に<ruby>出<rt>しゅっ</rt></ruby><ruby>席<rt>せき</rt></ruby>されるお<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>が<ruby>応<rt>おう</rt></ruby><ruby>接<rt>せつ</rt></ruby><ruby>室<rt>しつ</rt></ruby>に<span class='grammar-highlight'>お<ruby>見<rt>み</rt></ruby>えになりました</span>。",
      "cn": "参加今天会议的客户已经抵达会客室了。"
    },
    "similarGrammar": [],
    "firstKana": "お",
    "keyword": "来访的尊敬语",
    "book": "N2",
    "sourceId": 73,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "尊敬语"
  },
  {
    "id": 2074,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "请求・拜托",
    "point": "お/ご～願えますでしょうか",
    "connection": "お ＋ 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / ご ＋ 汉字词 ＋ 願えますでしょうか",
    "meaning": "能否请您...呢？",
    "explanation": "是请求对方做某事时的<span class='font-bold text-[#8a3324]'>非常郑重、委婉</span>的表达方式。多用于商务场合或对长辈。",
    "example": {
      "jp": "<ruby>誠<rt>まこと</rt></ruby>に<ruby>恐<rt>おそ</rt></ruby>れ<ruby>入<rt>い</rt></ruby>りますが、こちらの<ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby><ruby>書<rt>しょ</rt></ruby>にサインをご<ruby>記<rt>き</rt></ruby><ruby>入<rt>にゅう</rt></ruby><span class='grammar-highlight'><ruby>願<rt>ねが</rt></ruby>えますでしょうか</span>。",
      "cn": "实在是不好意思，能否劳烦您在这份合同上签个字呢？"
    },
    "similarGrammar": [],
    "firstKana": "お / ご",
    "keyword": "郑重委婉请求",
    "book": "N2",
    "sourceId": 74,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "请求・拜托"
  },
  {
    "id": 2075,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "谦让语",
    "point": "お/ご～申し上げる",
    "connection": "お ＋ 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / ご ＋ 汉字词 ＋ 申し上げる",
    "meaning": "我来为您...（谦让语）",
    "explanation": "用于<span class='font-bold text-[#8a3324]'>降低自己的动作</span>以表示对对方的敬意。常用于向对方提供信息、说明或表达感谢、致歉等。",
    "example": {
      "jp": "<ruby>大<rt>おお</rt></ruby><ruby>勢<rt>ぜい</rt></ruby>の<ruby>皆<rt>みな</rt></ruby><ruby>様<rt>さま</rt></ruby>にご<ruby>来<rt>らい</rt></ruby><ruby>場<rt>じょう</rt></ruby>いただき、<ruby>心<rt>こころ</rt></ruby>より<ruby>感<rt>かん</rt></ruby><ruby>謝<rt>しゃ</rt></ruby><span class='grammar-highlight'><ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます</span>。",
      "cn": "衷心感谢各位今天能够莅临现场。"
    },
    "similarGrammar": [],
    "firstKana": "お / ご",
    "keyword": "降低自身动作",
    "book": "N2",
    "sourceId": 75,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "谦让语"
  },
  {
    "id": 2076,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "意愿・请求",
    "point": "～ばと思います / ～いただければと思います",
    "connection": "动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば) ＋ と思います / 动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ いただければと思います",
    "meaning": "我想... / 如果能得到您的...就好了",
    "explanation": "表达自己温和的想法，或者<span class='font-bold text-[#8a3324]'>委婉地提出请求</span>，给人一种柔和、不强加于人的感觉。",
    "example": {
      "jp": "<ruby>企<rt>き</rt></ruby><ruby>画<rt>かく</rt></ruby><ruby>書<rt>しょ</rt></ruby>についてご<ruby>不<rt>ふ</rt></ruby><ruby>明<rt>めい</rt></ruby>な<ruby>点<rt>てん</rt></ruby>がございましたら、ご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby><span class='grammar-highlight'>いただければと<ruby>思<rt>おも</rt></ruby>います</span>。",
      "cn": "如果您对企划书有任何疑问，希望能随时与我们联系。"
    },
    "similarGrammar": [],
    "firstKana": "ば / い",
    "keyword": "柔和表达想法请求",
    "book": "N2",
    "sourceId": 76,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "意愿・请求"
  },
  {
    "id": 2077,
    "lesson": "第8课",
    "macro": "授受与敬语",
    "category": "对象・关联",
    "point": "～につきまして（は）",
    "connection": "名词 ＋ につきまして（は）",
    "meaning": "关于...",
    "explanation": "是「～について」的<span class='font-bold text-[#8a3324]'>更加郑重</span>的表达方式。多用于商务邮件、正式会议或致辞中引出话题。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby><ruby>規<rt>き</rt></ruby>プロジェクトの<ruby>詳<rt>しょう</rt></ruby><ruby>細<rt>さい</rt></ruby><span class='grammar-highlight'>につきましては</span>、<ruby>後<rt>のち</rt></ruby>ほど<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からご<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>いたします。",
      "cn": "关于新项目的详细情况，稍后将由负责人为您进行说明。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "关于(极为郑重)",
    "book": "N2",
    "sourceId": 77,
    "lessonNumber": 8,
    "sourceMacro": "敬语",
    "sourceCategory": "对象・关联"
  },
  {
    "id": 2078,
    "lesson": "第9课",
    "macro": "限定与程度",
    "category": "程度极高",
    "point": "～のなんのって",
    "connection": "动词/形容词<span class='text-[#8a3324] mx-1'>普通体</span> ＋ のなんのって",
    "meaning": "非常...；...得不得了",
    "explanation": "带有夸张语气的口语表达，表示程度极高，<span class='font-bold text-[#8a3324]'>超乎寻常</span>。常用于表达惊讶或强烈的感受。",
    "example": {
      "jp": "<ruby>連<rt>れん</rt></ruby><ruby>休<rt>きゅう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<ruby>遊<rt>ゆう</rt></ruby><ruby>園<rt>えん</rt></ruby><ruby>地<rt>ち</rt></ruby>が<ruby>混<rt>こ</rt></ruby>んでいた<span class='grammar-highlight'>のなんのって</span>、<ruby>歩<rt>ある</rt></ruby>くことすらできなかった。",
      "cn": "小长假期间的游乐园简直挤得要命，连正常走路都没法走。"
    },
    "similarGrammar": [],
    "firstKana": "の",
    "keyword": "口语夸张极高",
    "book": "N2",
    "sourceId": 78,
    "lessonNumber": 9,
    "sourceMacro": "限定与程度",
    "sourceCategory": "程度极高"
  },
  {
    "id": 2079,
    "lesson": "第9课",
    "macro": "时间与顺序",
    "category": "刚完成",
    "point": "～たて（の）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ たて",
    "meaning": "刚...完",
    "explanation": "表示动作刚刚结束，还保留着刚完成时的<span class='font-bold text-[#8a3324]'>新鲜、良好状态</span>。多用于食物、新人等积极语境。",
    "example": {
      "jp": "<ruby>免<rt>めん</rt></ruby><ruby>許<rt>きょ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<span class='grammar-highlight'>たて</span>で、まだ<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>するのは<ruby>怖<rt>こわ</rt></ruby>い。",
      "cn": "毕竟刚考出驾照，自己一个人开车还是觉得有些害怕。"
    },
    "similarGrammar": [],
    "firstKana": "た",
    "keyword": "刚完成的新鲜状态",
    "book": "N2",
    "sourceId": 79,
    "lessonNumber": 9,
    "sourceMacro": "时间与场景",
    "sourceCategory": "刚完成"
  },
  {
    "id": 2080,
    "lesson": "第9课",
    "macro": "主张与评价",
    "category": "提示话题",
    "point": "～ったら / ～ってば",
    "connection": "名词 ＋ ったら / ってば",
    "meaning": "提起...；说到...",
    "explanation": "比较随便的口语表达。多用来提起身边亲近的人或事物，后续常伴随说话人的惊讶、责备或无奈等情感。",
    "example": {
      "jp": "うちの<ruby>夫<rt>おっと</rt></ruby><span class='grammar-highlight'>ったら</span>、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>中<rt>じゅう</rt></ruby>ゲームばかりしているのよ。",
      "cn": "提起我家那位啊，一到休息日就整天只顾着打游戏。"
    },
    "similarGrammar": [],
    "firstKana": "っ",
    "keyword": "亲近者的责备无奈",
    "book": "N2",
    "sourceId": 80,
    "lessonNumber": 9,
    "sourceMacro": "评价与视角",
    "sourceCategory": "提示话题"
  },
  {
    "id": 2081,
    "lesson": "第9课",
    "macro": "状态与结果",
    "category": "机制・构造",
    "point": "～ようになっている",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ようになっている",
    "meaning": "构造是...；机制是...",
    "explanation": "表示机械、系统或某种规则在<span class='font-bold text-[#8a3324]'>设计上</span>就具备这样的功能或特性。",
    "example": {
      "jp": "このアプリは<ruby>悪<rt>あく</rt></ruby><ruby>質<rt>しつ</rt></ruby>なメッセージを<ruby>自<rt>じ</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>的<rt>てき</rt></ruby>にブロックする<span class='grammar-highlight'>ようになっている</span>。",
      "cn": "这款应用程序在设计上具备自动拦截恶意信息的功能。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "机器系统的设定机制",
    "book": "N2",
    "sourceId": 81,
    "lessonNumber": 9,
    "sourceMacro": "状态与强制",
    "sourceCategory": "机制・构造"
  },
  {
    "id": 2082,
    "lesson": "第9课",
    "macro": "原因与理由",
    "category": "顺理成章",
    "point": "～わけだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ わけだ",
    "meaning": "难怪...；理所当然...",
    "explanation": "在了解了前因后果之后，对产生的结果表示信服和理解，<span class='font-bold text-[#8a3324]'>认为该结果是合乎逻辑的</span>。",
    "example": {
      "jp": "ああ、この<ruby>先<rt>さき</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きな<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>があったのか。だから<ruby>道<rt>みち</rt></ruby>が<ruby>渋<rt>じゅう</rt></ruby><ruby>滞<rt>たい</rt></ruby>している<span class='grammar-highlight'>わけだ</span>。",
      "cn": "啊，原来是前面发生了重大交通事故，难怪这条路会堵成这样。"
    },
    "similarGrammar": [],
    "firstKana": "わ",
    "keyword": "了解原因后的难怪",
    "book": "N2",
    "sourceId": 82,
    "lessonNumber": 9,
    "sourceMacro": "原因与理由",
    "sourceCategory": "顺理成章"
  },
  {
    "id": 2083,
    "lesson": "第9课",
    "macro": "否定",
    "category": "强烈否定",
    "point": "～どころか",
    "connection": "名词 / <span class='text-[#8a3324] mx-1'>普通体</span> ＋ どころか",
    "meaning": "别说...就连...；哪里是...简直是...",
    "explanation": "举出<span class='font-bold text-[#8a3324]'>极端例子进行强烈否定</span>，后项通常会提出与前项程度差异很大，或完全相反的事实。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しいシステムは、<ruby>業<rt>ぎょう</rt></ruby><ruby>務<rt>む</rt></ruby><ruby>効<rt>こう</rt></ruby><ruby>率<rt>りつ</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる<span class='grammar-highlight'>どころか</span>、<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby><ruby>量<rt>りょう</rt></ruby>が<ruby>二<rt>に</rt></ruby><ruby>倍<rt>ばい</rt></ruby>になってしまった。",
      "cn": "引入新系统后别提什么提高业务效率了，反而让我们的工作量整整翻了一倍。"
    },
    "similarGrammar": [],
    "firstKana": "ど",
    "keyword": "别说A连B都",
    "book": "N2",
    "sourceId": 83,
    "lessonNumber": 9,
    "sourceMacro": "否定",
    "sourceCategory": "强烈否定"
  },
  {
    "id": 2084,
    "lesson": "第9课",
    "macro": "条件与假定",
    "category": "消极假定",
    "point": "～ようでは / ～ようじゃ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ ようでは",
    "meaning": "如果是...这样的话（就不行）",
    "explanation": "对当前的某种不理想状态进行假定，表示如果这种状态持续下去，将会<span class='font-bold text-[#8a3324]'>导致消极的结果</span>。“ようじゃ”是口语形式。",
    "example": {
      "jp": "これくらいのプレッシャーで<ruby>文<rt>もん</rt></ruby><ruby>句<rt>く</rt></ruby>を<ruby>言<rt>い</rt></ruby>っている<span class='grammar-highlight'>ようでは</span>、この<ruby>業<rt>ぎょう</rt></ruby><ruby>界<rt>かい</rt></ruby>で<ruby>生<rt>い</rt></ruby>き<ruby>残<rt>のこ</rt></ruby>れないよ。",
      "cn": "如果面对这点压力都要抱怨的话，你是绝对无法在这个行业里立足的。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "导致消极结果的假定",
    "book": "N2",
    "sourceId": 84,
    "lessonNumber": 9,
    "sourceMacro": "条件与假定",
    "sourceCategory": "消极假定"
  },
  {
    "id": 2085,
    "lesson": "第9课",
    "macro": "状态与结果",
    "category": "装模作样",
    "point": "～ぶる",
    "connection": "名词 / 形容词词干 ＋ ぶる",
    "meaning": "故意装出...的样子",
    "explanation": "表示明明不是那样，却故意做出那副姿态。常带有<span class='font-bold text-[#8a3324]'>贬义或嘲讽</span>的语气。接续动词时当作五段动词使用。",
    "example": {
      "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>実<rt>じつ</rt></ruby><ruby>務<rt>む</rt></ruby><ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>がまったくないのに、いつも<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby><span class='grammar-highlight'>ぶって</span><ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<ruby>言<rt>い</rt></ruby>いたがる。",
      "cn": "他明明毫无实际工作经验，却总是喜欢装出一副专家的派头来发表意见。"
    },
    "similarGrammar": [],
    "firstKana": "ぶ",
    "keyword": "带有贬义的装作",
    "book": "N2",
    "sourceId": 85,
    "lessonNumber": 9,
    "sourceMacro": "状态与强制",
    "sourceCategory": "装模作样"
  },
  {
    "id": 2086,
    "lesson": "第9课",
    "macro": "限定与程度",
    "category": "偏偏・唯独",
    "point": "～に限って",
    "connection": "名词 ＋ に限って",
    "meaning": "偏偏...；唯独...",
    "explanation": "表示在平常不会发生的情况下，<span class='font-bold text-[#8a3324]'>偏偏</span>在那时发生了不好的事；或者表达“唯独某人不会做某事”的主观信任。",
    "example": {
      "jp": "<ruby>急<rt>いそ</rt></ruby>いでいる<ruby>時<rt>とき</rt></ruby><span class='grammar-highlight'>に<ruby>限<rt>かぎ</rt></ruby>って</span>、いつも<ruby>乗<rt>の</rt></ruby>る<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れてしまう。",
      "cn": "偏偏在赶时间的时候，平时坐的那趟电车总会晚点。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "偏偏或唯独不会",
    "book": "N2",
    "sourceId": 86,
    "lessonNumber": 9,
    "sourceMacro": "限定与程度",
    "sourceCategory": "偏偏・唯独"
  },
  {
    "id": 2087,
    "lesson": "第9课",
    "macro": "指示与忠告",
    "category": "建议・忠告",
    "point": "～ことだ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ことだ",
    "meaning": "应该...；最好...",
    "explanation": "用于对他人提出忠告或建议，表示这是<span class='font-bold text-[#8a3324]'>最理想的做法</span>。不用于强制规定。",
    "example": {
      "jp": "N2に<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>したいなら、スマートフォンを<ruby>見<rt>み</rt></ruby>る<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らす<span class='grammar-highlight'>ことだ</span>。",
      "cn": "想要顺利考过N2的话，最好还是少花点时间看手机。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "口语建议最好",
    "book": "N2",
    "sourceId": 87,
    "lessonNumber": 9,
    "sourceMacro": "指示与忠告",
    "sourceCategory": "建议・忠告"
  },
  {
    "id": 2088,
    "lesson": "第9课",
    "macro": "限定与程度",
    "category": "全部涵盖",
    "point": "～という～",
    "connection": "名词 ＋ という ＋ 同一名词",
    "meaning": "所有的...",
    "explanation": "前后使用同一个名词，表示涵盖了该范围内的<span class='font-bold text-[#8a3324]'>所有事物，一个不落</span>。",
    "example": {
      "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>が<ruby>接<rt>せっ</rt></ruby><ruby>近<rt>きん</rt></ruby>しているため、この<ruby>町<rt>まち</rt></ruby>のスーパー<span class='grammar-highlight'>という</span>スーパーから<ruby>水<rt>みず</rt></ruby>が<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れてしまった。",
      "cn": "由于台风逼近，这座城市里所有超市的矿泉水都被抢购一空了。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "同一名词涵盖全部",
    "book": "N2",
    "sourceId": 88,
    "lessonNumber": 9,
    "sourceMacro": "限定与程度",
    "sourceCategory": "全部涵盖"
  },
  {
    "id": 2089,
    "lesson": "第9课",
    "macro": "状态与结果",
    "category": "险些发生",
    "point": "～ところだった",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / <span class='text-[#8a3324] mx-1'>ない形</span> ＋ ところだった",
    "meaning": "差一点就...；险些...",
    "explanation": "表示某事在<span class='font-bold text-[#8a3324]'>差一点就发生</span>的边缘，但最终避免了。常与“もう少しで、危なく”等副词呼应使用。",
    "example": {
      "jp": "<ruby>朝<rt>あさ</rt></ruby>の<ruby>目<rt>め</rt></ruby><ruby>覚<rt>ざ</rt></ruby>まし<ruby>時<rt>と</rt></ruby><ruby>計<rt>けい</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>らず、もう<ruby>少<rt>すこ</rt></ruby>しで<ruby>大<rt>だい</rt></ruby><ruby>事<rt>じ</rt></ruby>な<ruby>面<rt>めん</rt></ruby><ruby>接<rt>せつ</rt></ruby>に<ruby>遅<rt>ち</rt></ruby><ruby>刻<rt>こく</rt></ruby>する<span class='grammar-highlight'>ところだった</span>。",
      "cn": "早上闹钟没响，差一点就错过了那场重要的面试。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "差一点就发生",
    "book": "N2",
    "sourceId": 89,
    "lessonNumber": 9,
    "sourceMacro": "状态与强制",
    "sourceCategory": "险些发生"
  },
  {
    "id": 2090,
    "lesson": "第9课",
    "macro": "主张与评价",
    "category": "主观比较",
    "point": "～くらいなら / ～ぐらいなら",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ くらいなら",
    "meaning": "与其...不如...",
    "explanation": "带有强烈的个人主观色彩，认为前项的情况<span class='font-bold text-[#8a3324]'>极其糟糕</span>，相比之下后项还能稍微好受一点。",
    "example": {
      "jp": "あんな<ruby>傲<rt>ごう</rt></ruby><ruby>慢<rt>まん</rt></ruby>な<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>に<ruby>頭<rt>あたま</rt></ruby>を<ruby>下<rt>さ</rt></ruby>げる<span class='grammar-highlight'>くらいなら</span>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>で<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めたほうがましだ。",
      "cn": "与其向那种傲慢的上司低头认错，我还不如直接辞职走人。"
    },
    "similarGrammar": [],
    "firstKana": "く",
    "keyword": "与其极其糟糕的前项",
    "book": "N2",
    "sourceId": 90,
    "lessonNumber": 9,
    "sourceMacro": "评价与视角",
    "sourceCategory": "主观比较"
  },
  {
    "id": 2091,
    "lesson": "第9课",
    "macro": "主张与评价",
    "category": "相对较好",
    "point": "～ましだ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ ましだ",
    "meaning": "...更好一些；还是...比较好",
    "explanation": "表示虽然两者都不算理想，但相比之下<span class='font-bold text-[#8a3324]'>某一方稍微好一点</span>。常与“～ほうが、～より”连用。",
    "example": {
      "jp": "<ruby>終<rt>しゅう</rt></ruby><ruby>電<rt>でん</rt></ruby>を<ruby>逃<rt>のが</rt></ruby>して<ruby>歩<rt>ある</rt></ruby>いて<ruby>帰<rt>かえ</rt></ruby>るのは<ruby>疲<rt>つか</rt></ruby>れるが、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていないだけまだ<span class='grammar-highlight'>ましだ</span>。",
      "cn": "错过了末班车走回家固然很累，但好在没下雨，这已经算是不幸中的万幸了。"
    },
    "similarGrammar": [],
    "firstKana": "ま",
    "keyword": "相对算好的妥协",
    "book": "N2",
    "sourceId": 91,
    "lessonNumber": 9,
    "sourceMacro": "评价与视角",
    "sourceCategory": "相对较好"
  },
  {
    "id": 2092,
    "lesson": "第10课",
    "macro": "主张与评价",
    "category": "主观感受",
    "point": "～ものがある",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 形容词 / な形容词干+な ＋ ものがある",
    "meaning": "有令人...的感觉；确实有...的一面",
    "explanation": "表示说话人对某事物抱有强烈的某种实际感受，<span class='font-bold text-[#8a3324]'>客观存在这种特质</span>。",
    "example": {
      "jp": "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しながらも、<ruby>決<rt>けっ</rt></ruby>して<ruby>諦<rt>あきら</rt></ruby>めない<ruby>彼<rt>かれ</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>には、<ruby>人<rt>ひと</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>を<ruby>打<rt>う</rt></ruby>つ<span class='grammar-highlight'>ものがある</span>。",
      "cn": "他虽然屡战屡败却依然绝不放弃的身影，确实有一种直击人心的力量。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "确实有...的感觉",
    "book": "N2",
    "sourceId": 92,
    "lessonNumber": 10,
    "sourceMacro": "评价与视角",
    "sourceCategory": "主观感受"
  },
  {
    "id": 2093,
    "lesson": "第10课",
    "macro": "否定",
    "category": "否定推测・意志",
    "point": "～まい",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span>（一段动词） / 动词<span class='text-[#8a3324] mx-1'>第一连用形</span>或<span class='text-[#8a3324] mx-1'>未然形</span>（其他） ＋ まい",
    "meaning": "绝不...；大概不会...",
    "explanation": "偏书面语。表示说话人强烈的否定意志（绝不），或表示否定的推测（大概不会）。",
    "example": {
      "jp": "あんな<ruby>無<rt>む</rt></ruby><ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>とは、<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をす<span class='grammar-highlight'>まい</span>と<ruby>心<rt>こころ</rt></ruby>に<ruby>誓<rt>ちか</rt></ruby>った。",
      "cn": "我在心里暗暗发誓，绝对不要再和那种毫无责任感的人共事。"
    },
    "similarGrammar": [],
    "firstKana": "ま",
    "keyword": "绝不/大概不",
    "book": "N2",
    "sourceId": 93,
    "lessonNumber": 10,
    "sourceMacro": "否定",
    "sourceCategory": "否定推测・意志"
  },
  {
    "id": 2094,
    "lesson": "第10课",
    "macro": "时间与顺序",
    "category": "契机・每次",
    "point": "～につけ（て）",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ につけ",
    "meaning": "每当...就...",
    "explanation": "表示每当发生前项的情况时，自然而然就会产生后项的某种情感或心情。后项常伴随感情色彩。",
    "example": {
      "jp": "<ruby>悲<rt>ひ</rt></ruby><ruby>惨<rt>さん</rt></ruby>な<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>のニュースを<ruby>見<rt>み</rt></ruby>る<span class='grammar-highlight'>につけ</span>、<ruby>心<rt>こころ</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>む。",
      "cn": "每当在新闻里看到那些悲惨的案件，我的内心都会感到无比痛楚。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "每当...就引发情感",
    "book": "N2",
    "sourceId": 94,
    "lessonNumber": 10,
    "sourceMacro": "时间与场景",
    "sourceCategory": "契机・每次"
  },
  {
    "id": 2095,
    "lesson": "第10课",
    "macro": "主张与评价",
    "category": "评价・对比",
    "point": "～わりに（は）",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词+の ＋ わりに（は）",
    "meaning": "虽说...却...；比起...来却...",
    "explanation": "表示后项的事实与根据前项设定的标准或一般预期<span class='font-bold text-[#8a3324]'>不相符</span>。类似于“〜にしては”。",
    "example": {
      "jp": "このレストランは<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い<span class='grammar-highlight'>わりに</span>、サービスが<ruby>全<rt>まった</rt></ruby>く<ruby>良<rt>よ</rt></ruby>くない。",
      "cn": "这家餐厅卖得那么贵，服务态度却差得离谱。"
    },
    "similarGrammar": [
      2041
    ],
    "firstKana": "わ",
    "keyword": "与预期标准不符",
    "book": "N2",
    "sourceId": 95,
    "lessonNumber": 10,
    "sourceMacro": "主张与评价",
    "sourceCategory": "评价・对比"
  },
  {
    "id": 2096,
    "lesson": "第10课",
    "macro": "时间与顺序",
    "category": "前后顺序",
    "point": "～か～ないかのうちに",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ か ＋ 动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ かのうちに",
    "meaning": "刚一...就...",
    "explanation": "表示前一个动作刚发生，或者说还没完全结束时，后一个动作紧接着就发生了。强调时间间隔极短。",
    "example": {
      "jp": "<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わる<span class='grammar-highlight'>か</span><ruby>終<rt>お</rt></ruby>わら<span class='grammar-highlight'>ないかのうちに</span>、<ruby>厳<rt>きび</rt></ruby>しい<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>が<ruby>飛<rt>と</rt></ruby>んできた。",
      "cn": "演示刚一结束，极其严厉的提问就劈头盖脸地抛了过来。"
    },
    "similarGrammar": [
      2099
    ],
    "firstKana": "か",
    "keyword": "间隔极短的紧接着",
    "book": "N2",
    "sourceId": 96,
    "lessonNumber": 10,
    "sourceMacro": "时间与场景",
    "sourceCategory": "前后顺序"
  },
  {
    "id": 2097,
    "lesson": "第10课",
    "macro": "主张与评价",
    "category": "样貌推测",
    "point": "～げ",
    "connection": "形容词词干 / 动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ げ",
    "meaning": "看起来好像...；显得...",
    "explanation": "用于描述从外表上观察到的某种情绪或状态，好像带有这种感觉。相当于“〜そう”。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>は<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby><span class='grammar-highlight'>げ</span>な<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>で<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>室<rt>しつ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>立<rt>た</rt></ruby>っている。",
      "cn": "新员工带着看似忐忑不安的神情站在会议室门前。"
    },
    "similarGrammar": [],
    "firstKana": "げ",
    "keyword": "看起来似乎带有...情绪",
    "book": "N2",
    "sourceId": 97,
    "lessonNumber": 10,
    "sourceMacro": "评价与视角",
    "sourceCategory": "样貌推测"
  },
  {
    "id": 2098,
    "lesson": "第10课",
    "macro": "举例与递进",
    "category": "例举・并列",
    "point": "～やら～やら",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / い形容词 / 名词 ＋ やら",
    "meaning": "又是...又是...；...啦...啦",
    "explanation": "用于列举同类或相反的事物、情感，表示有很多事情交织在一起，常常带有不知所措或心情复杂的语感。",
    "example": {
      "jp": "<ruby>期<rt>き</rt></ruby><ruby>末<rt>まつ</rt></ruby>は<ruby>決<rt>けっ</rt></ruby><ruby>算<rt>さん</rt></ruby>の<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby><span class='grammar-highlight'>やら</span><ruby>来<rt>らい</rt></ruby><ruby>期<rt>き</rt></ruby>の<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby><span class='grammar-highlight'>やら</span>で、<ruby>目<rt>め</rt></ruby>が<ruby>回<rt>まわ</rt></ruby>るほど<ruby>忙<rt>いそが</rt></ruby>しい。",
      "cn": "到了期末，又是准备财务结算又是制定下期计划，简直忙得晕头转向。"
    },
    "similarGrammar": [],
    "firstKana": "や",
    "keyword": "诸多事物/情感交织",
    "book": "N2",
    "sourceId": 98,
    "lessonNumber": 10,
    "sourceMacro": "资格与举例",
    "sourceCategory": "例举・并列"
  },
  {
    "id": 2099,
    "lesson": "第10课",
    "macro": "时间与顺序",
    "category": "前后顺序",
    "point": "～かと思うと / ～かと思ったら",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> ＋ かと思うと",
    "meaning": "刚一...就...；原以为...却...",
    "explanation": "表示前一项动作刚刚完成，紧接着发生了出乎意料的下一项动作。多用于描述客观发生的事情，<span class='font-bold text-[#8a3324]'>通常不用于描述自己的行为</span>。",
    "example": {
      "jp": "<ruby>赤<rt>あか</rt></ruby>ちゃんはさっきまで<ruby>大<rt>おお</rt></ruby><ruby>泣<rt>な</rt></ruby>きしていた<span class='grammar-highlight'>かと<ruby>思<rt>おも</rt></ruby>ったら</span>、もうすやすや<ruby>眠<rt>ねむ</rt></ruby>っている。",
      "cn": "那个婴儿刚才还在嚎啕大哭，一转眼的工夫竟然已经香甜地睡着了。"
    },
    "similarGrammar": [
      2096
    ],
    "firstKana": "か",
    "keyword": "刚一发生就出现意外结果",
    "book": "N2",
    "sourceId": 99,
    "lessonNumber": 10,
    "sourceMacro": "时间与场景",
    "sourceCategory": "前后顺序"
  },
  {
    "id": 2100,
    "lesson": "第11课",
    "macro": "主张与评价",
    "category": "断定・强调",
    "point": "～にほかならない",
    "connection": "名词 ＋ にほかならない",
    "meaning": "正是...；无非是...",
    "explanation": "表示“不是别的，正是这个”。常用于书面语，带有强烈的断定语气，用来指出事物的<span class='font-bold text-[#8a3324]'>核心原因或结论</span>。",
    "example": {
      "jp": "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>の<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby><ruby>悪<rt>あっ</rt></ruby><ruby>化<rt>か</rt></ruby>は、<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby><ruby>陣<rt>じん</rt></ruby>の<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>ミス<span class='grammar-highlight'>にほかならない</span>。",
      "cn": "这次业绩的严重恶化，正是管理层决策失误所致的必然结果。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "不是别的正是",
    "book": "N2",
    "sourceId": 100,
    "lessonNumber": 11,
    "sourceMacro": "评价与视角",
    "sourceCategory": "断定・强调"
  },
  {
    "id": 2101,
    "lesson": "第11课",
    "macro": "限定与程度",
    "category": "程度低",
    "point": "～にすぎない",
    "connection": "动词<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ にすぎない",
    "meaning": "只不过是...；仅仅是...",
    "explanation": "表达程度很低，或者客观上仅仅处于某种状态，含有“<span class='font-bold text-[#8a3324]'>并不重要</span>”或“仅此而已”的语感。",
    "example": {
      "jp": "<ruby>私<rt>わたし</rt></ruby>は<ruby>一<rt>いち</rt></ruby><ruby>介<rt>かい</rt></ruby>の<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby><span class='grammar-highlight'>にすぎない</span>ので、そんな<ruby>大<rt>おお</rt></ruby>きな<ruby>決<rt>けっ</rt></ruby><ruby>定<rt>てい</rt></ruby><ruby>権<rt>けん</rt></ruby>はありません。",
      "cn": "我只不过是个普通的上班族，根本没有那么大的决定权。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "只不过是",
    "book": "N2",
    "sourceId": 101,
    "lessonNumber": 11,
    "sourceMacro": "限定与程度",
    "sourceCategory": "程度低"
  },
  {
    "id": 2102,
    "lesson": "第11课",
    "macro": "举例与递进",
    "category": "递进・叠加",
    "point": "～上に（うえに）",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词+の / な形容词+な・である） ＋ 上に",
    "meaning": "而且...；不仅...还...",
    "explanation": "表示在原本的某种状态或属性上，<span class='font-bold text-[#8a3324]'>叠加了同样倾向</span>（同为积极或同为消极）的另一种状态。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しく<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>された<ruby>会<rt>かい</rt></ruby><ruby>計<rt>けい</rt></ruby>ソフトは、<ruby>操<rt>そう</rt></ruby><ruby>作<rt>さ</rt></ruby>が<ruby>複<rt>ふく</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>な<span class='grammar-highlight'><ruby>上<rt>うえ</rt></ruby>に</span>、エラーも<ruby>多<rt>おお</rt></ruby>い。",
      "cn": "新引进的财务软件不仅操作复杂，而且还经常报错。"
    },
    "similarGrammar": [],
    "firstKana": "う",
    "keyword": "同向叠加",
    "book": "N2",
    "sourceId": 102,
    "lessonNumber": 11,
    "sourceMacro": "添加与递进",
    "sourceCategory": "递进・叠加"
  },
  {
    "id": 2103,
    "lesson": "第11课",
    "macro": "逆接与让步",
    "category": "实际与预期不符",
    "point": "～といっても",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ といっても",
    "meaning": "虽说...但是...",
    "explanation": "承认前项事实，但紧接着说明实际情况并没有人们通常<span class='font-bold text-[#8a3324]'>预想的那么高或那么好</span>。属于让步表达。",
    "example": {
      "jp": "<ruby>残<rt>ざん</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>代<rt>だい</rt></ruby>が<ruby>出<rt>で</rt></ruby>る<span class='grammar-highlight'>といっても</span>、<ruby>月<rt>つき</rt></ruby>に<ruby>二<rt>に</rt></ruby><ruby>十<rt>じゅう</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>までしか<ruby>認<rt>みと</rt></ruby>められていない。",
      "cn": "虽说会发加班费，但每个月最多只给报销二十个小时。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "虽说但不及预期",
    "book": "N2",
    "sourceId": 103,
    "lessonNumber": 11,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "实际与预期不符"
  },
  {
    "id": 2104,
    "lesson": "第11课",
    "macro": "主张与评价",
    "category": "主观最佳",
    "point": "～に限る",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span>・<span class='text-[#8a3324] mx-1'>ない形</span> ＋ に限る",
    "meaning": "最好是...；只有...最合适",
    "explanation": "带有个人的主观色彩，表示说话人认为在众多选项中，这种做法或选择是<span class='font-bold text-[#8a3324]'>最为理想的</span>。",
    "example": {
      "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>で<ruby>疲<rt>つか</rt></ruby>れた<ruby>夜<rt>よる</rt></ruby>は、<ruby>温<rt>あたた</rt></ruby>かいお<ruby>風<rt>ふ</rt></ruby><ruby>呂<rt>ろ</rt></ruby>にゆっくり<ruby>浸<rt>つか</rt></ruby>かる<span class='grammar-highlight'>に<ruby>限<rt>かぎ</rt></ruby>る</span>。",
      "cn": "结束了一天疲惫的工作，晚上舒舒服服地泡个热水澡绝对是最佳选择。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "个人主观认为最好",
    "book": "N2",
    "sourceId": 104,
    "lessonNumber": 11,
    "sourceMacro": "评价与视角",
    "sourceCategory": "主观最佳"
  },
  {
    "id": 2105,
    "lesson": "第11课",
    "macro": "原因与理由",
    "category": "符合期待",
    "point": "～だけあって / ～だけに",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span>（名词 / な形容词+な） ＋ だけあって",
    "meaning": "正因为...；不愧是...",
    "explanation": "表示正因为具备前项的条件或地位，所以产生了后项这种<span class='font-bold text-[#8a3324]'>符合期待的好结果</span>。通常带有钦佩、赞赏的感情。",
    "example": {
      "jp": "<ruby>一<rt>いち</rt></ruby><ruby>流<rt>りゅう</rt></ruby>ホテル<span class='grammar-highlight'>だけあって</span>、スタッフのサービスは<ruby>申<rt>もう</rt></ruby>し<ruby>分<rt>ぶん</rt></ruby>がない。",
      "cn": "不愧是一流酒店，员工的服务态度简直无可挑剔。"
    },
    "similarGrammar": [],
    "firstKana": "だ",
    "keyword": "不愧是/正因为",
    "book": "N2",
    "sourceId": 105,
    "lessonNumber": 11,
    "sourceMacro": "原因与理由",
    "sourceCategory": "符合期待"
  },
  {
    "id": 2106,
    "lesson": "第11课",
    "macro": "举例与递进",
    "category": "并列・例举",
    "point": "～にしろ～にしろ / ～にせよ～にせよ",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ にしろ ＋ <span class='text-[#8a3324] mx-1'>普通体</span> / 名词 ＋ にしろ",
    "meaning": "不管是...还是...",
    "explanation": "举出两个同类或相反的例子，表示无论遇到哪种情况，后项的结论或结果都<span class='font-bold text-[#8a3324]'>普遍适用</span>。",
    "example": {
      "jp": "<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>の<ruby>内<rt>ない</rt></ruby><ruby>容<rt>よう</rt></ruby><span class='grammar-highlight'>にしろ</span><ruby>予算<rt>よさん</rt></ruby><span class='grammar-highlight'>にしろ</span>、もっと<ruby>細<rt>こま</rt></ruby>かく<ruby>検討<rt>けんとう</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。",
      "cn": "不管是计划内容还是预算分配，都有必要进行更加细致的讨论。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "不管A还是B都",
    "book": "N2",
    "sourceId": 106,
    "lessonNumber": 11,
    "sourceMacro": "资格 with 举例",
    "sourceCategory": "并列・例举"
  },
  {
    "id": 2107,
    "lesson": "第12课",
    "macro": "传闻与引用",
    "category": "不确定传闻",
    "point": "～とか",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ とか",
    "meaning": "听说...；好像是...",
    "explanation": "表示基于传闻或某种不确定的信息来源。相当于“〜そうだ”或“〜ということだ”的口语表达。",
    "example": {
      "jp": "<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>人事<rt>じんじ</rt></ruby><ruby>異動<rt>いどう</rt></ruby>で、<ruby>佐藤<rt>さとう</rt></ruby>さんが<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>昇進<rt>しょうしん</rt></ruby>する<span class='grammar-highlight'>とか</span>。",
      "cn": "听说在下个月的人事调动中，佐藤先生要晋升为部长了。"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "听说/好像是",
    "book": "N2",
    "sourceId": 107,
    "lessonNumber": 12,
    "sourceMacro": "传闻与引用",
    "sourceCategory": "不确定传闻"
  },
  {
    "id": 2108,
    "lesson": "第12课",
    "macro": "依据与视角",
    "category": "顺应・按照",
    "point": "～にそって / ～に沿って",
    "connection": "名词 ＋ にそって",
    "meaning": "沿着...；顺着...；按照...",
    "explanation": "表示不偏离某条基准线（如河流、道路、方针、计划、期待等）进行后续动作。",
    "example": {
      "jp": "<ruby>契約書<rt>けいやくしょ</rt></ruby>の<ruby>条項<rt>じょうこう</rt></ruby><span class='grammar-highlight'>にそって</span>、<ruby>適切<rt>てきせつ</rt></ruby>に<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>遂行<rt>すいこう</rt></ruby>いたします。",
      "cn": "我们将严格按照合同条款，妥善地执行相关业务。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "顺应基准/沿线",
    "book": "N2",
    "sourceId": 108,
    "lessonNumber": 12,
    "sourceMacro": "依据与基准",
    "sourceCategory": "顺应・按照"
  },
  {
    "id": 2109,
    "lesson": "第12课",
    "macro": "依据与视角",
    "category": "最强领域",
    "point": "～にかけては",
    "connection": "名词 ＋ にかけては",
    "meaning": "在...方面（是最棒的）",
    "explanation": "表示在某个特定的领域或技术上，具有最高水平的自信或评价。后项通常接续积极的、评价极高的词语。",
    "example": {
      "jp": "<ruby>省<rt>しょう</rt></ruby>エネ<ruby>技術<rt>ぎじゅつ</rt></ruby><span class='grammar-highlight'>にかけては</span>、<ruby>世界<rt>せかい</rt></ruby>一<rt>いち</rt></ruby>だという<ruby>自負<rt>じふ</rt></ruby>がある。",
      "cn": "在节能技术这方面，我们有着世界第一的强烈自信。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "某方面最强",
    "book": "N2",
    "sourceId": 109,
    "lessonNumber": 12,
    "sourceMacro": "评价与视角",
    "sourceCategory": "最强领域"
  },
  {
    "id": 2110,
    "lesson": "第12课",
    "macro": "条件与假定",
    "category": "必要条件",
    "point": "～ないことには",
    "connection": "动词<span class='text-[#8a3324] mx-1'>ない形</span> / 各种词的<span class='text-[#8a3324] mx-1'>否定形</span> ＋ ことには",
    "meaning": "如果不...就无法...",
    "explanation": "表示前项是后项成立的必要条件。如果不满足前项，后项（多为否定或消极的结果）就无法实现。",
    "example": {
      "jp": "<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>会<rt>あ</rt></ruby>って<ruby>話<rt>はな</rt></ruby>さ<span class='grammar-highlight'>ないことには</span>、<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>交渉<rt>こうしょう</rt></ruby>は<ruby>進<rt>すす</rt></ruby>められない。",
      "cn": "如果不直接见面面谈的话，具体的谈判工作是无法推进的。"
    },
    "similarGrammar": [],
    "firstKana": "な",
    "keyword": "不...就无法...",
    "book": "N2",
    "sourceId": 110,
    "lessonNumber": 12,
    "sourceMacro": "条件与假定",
    "sourceCategory": "必要条件"
  },
  {
    "id": 2111,
    "lesson": "第12课",
    "macro": "状态与结果",
    "category": "消极倾向",
    "point": "～がち",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> / 名词 ＋ がち",
    "meaning": "往往容易...；常常...",
    "explanation": "表示某种现象或动作有容易发生的倾向，且这种倾向多为消极的或不理想的。",
    "example": {
      "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れていない<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>は、こういった<ruby>単純<rt>たんじゅん</rt></ruby>なミスをし<span class='grammar-highlight'>がち</span>です。",
      "cn": "还没适应工作的新员工往往容易犯这类简单的错误。"
    },
    "similarGrammar": [],
    "firstKana": "が",
    "keyword": "容易发生(消极)",
    "book": "N2",
    "sourceId": 111,
    "lessonNumber": 12,
    "sourceMacro": "状态与倾向",
    "sourceCategory": "消极倾向"
  },
  {
    "id": 2112,
    "lesson": "第12课",
    "macro": "逆接与让步",
    "category": "心理与行动矛盾",
    "point": "～つつも",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ つつも",
    "meaning": "虽然...但是...；心里想着...却...",
    "explanation": "表示内心的想法与实际行动不一致，带有遗憾、反省或矛盾的语感。属于书面语表达。",
    "example": {
      "jp": "<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りが<ruby>近<rt>ちか</rt></ruby>づいていると<ruby>分<rt>わ</rt></ruby>かり<span class='grammar-highlight'>つつも</span>、ついダラダラと<ruby>過<rt>す</rt></ruby>ごしてしまう。",
      "cn": "心里明明清楚截稿日期就要到了，却还是忍不住磨磨蹭蹭虚度光阴。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "想着却没做",
    "book": "N2",
    "sourceId": 112,
    "lessonNumber": 12,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "心理与行动矛盾"
  },
  {
    "id": 2113,
    "lesson": "第12课",
    "macro": "条件与假定",
    "category": "纯粹假定",
    "point": "～としたら / ～とすれば / ～とすると",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ としたら",
    "meaning": "如果...的话；假如...",
    "explanation": "提出一个假定的情况（往往是发生概率较低或纯属假设的情况），然后陈述在该假定下会采取的行动或得出的结论。",
    "example": {
      "jp": "もしもう<ruby>一<rt>いっ</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>人生<rt>じんせい</rt></ruby>をやり<ruby>直<rt>なお</rt></ruby>せると<span class='grammar-highlight'>したら</span>、あなたはどんな<ruby>職業<rt>しょくぎょう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びますか。",
      "cn": "假如人生真的可以重来一次，你会选择什么样的职业呢？"
    },
    "similarGrammar": [],
    "firstKana": "と",
    "keyword": "如果/假设",
    "book": "N2",
    "sourceId": 113,
    "lessonNumber": 12,
    "sourceMacro": "条件与假定",
    "sourceCategory": "纯粹假定"
  },
  {
    "id": 2114,
    "lesson": "第12课",
    "macro": "依据与视角",
    "category": "决定因素",
    "point": "～次第で / ～次第だ",
    "connection": "名词 ＋ 次第で",
    "meaning": "取决于...；全凭...",
    "explanation": "表示前项事物的情况 or 结果，会决定后项事物如何发展。暗示有多种可能的变化。",
    "example": {
      "jp": "<ruby>今<rt>こん</rt></ruby><ruby>期<rt>き</rt></ruby>のボーナスがいくらもらえるかは、これからの<ruby>努力<rt>どりょく</rt></ruby><span class='grammar-highlight'>次第で</span><ruby>決<rt>き</rt></ruby>まる。",
      "cn": "这学期能拿到多少奖金，全凭你接下来的努力程度来决定。"
    },
    "similarGrammar": [],
    "firstKana": "し",
    "keyword": "取决于",
    "book": "N2",
    "sourceId": 114,
    "lessonNumber": 12,
    "sourceMacro": "依据与基准",
    "sourceCategory": "决定因素"
  },
  {
    "id": 2115,
    "lesson": "第12课",
    "macro": "状态与结果",
    "category": "单向变化",
    "point": "～一方だ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ 一方だ",
    "meaning": "不断...；越来越...",
    "explanation": "表示某种状态朝着某一个方向单向持续发展，没有停止的迹象。多用于消极的趋势。",
    "example": {
      "jp": "<ruby>同<rt>どう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>他社<rt>たしゃ</rt></ruby>との<ruby>競争<rt>きょうそう</rt></ruby>は<ruby>激<rt>はげ</rt></ruby>しくなる<span class='grammar-highlight'>一方だ</span>が、<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けるわけにはいかない。",
      "cn": "虽然与同行的竞争变得越来越激烈，但我们绝对不能认输。"
    },
    "similarGrammar": [
      2061,
      2069
    ],
    "firstKana": "い",
    "keyword": "单向发展(多消极)",
    "book": "N2",
    "sourceId": 115,
    "lessonNumber": 12,
    "sourceMacro": "状态与变化",
    "sourceCategory": "单向变化"
  },
  {
    "id": 2116,
    "lesson": "第12课",
    "macro": "时间与顺序",
    "category": "正式事前准备",
    "point": "～に先立って / ～に先立ち",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ の ＋ に先立って",
    "meaning": "在...之前；先于...",
    "explanation": "表示在进行某项重要、正式的活动之前，预先做好某些准备工作。属于正式的书面语。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby><ruby>店<rt>てん</rt></ruby>の<ruby>開<rt>かい</rt></ruby><ruby>店<rt>てん</rt></ruby><span class='grammar-highlight'>に<ruby>先<rt>さき</rt></ruby><ruby>立<rt>だ</rt></ruby>って</span>、<ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>によるテープカットが<ruby>行<rt>おこな</rt></ruby>われた。",
      "cn": "在新店正式开业之前，由相关负责人举行了剪彩仪式。"
    },
    "similarGrammar": [
      2007,
      2135
    ],
    "firstKana": "に",
    "keyword": "正式事前准备",
    "book": "N2",
    "sourceId": 116,
    "lessonNumber": 12,
    "sourceMacro": "时间与场景",
    "sourceCategory": "正式事前准备"
  },
  {
    "id": 2117,
    "lesson": "第12课",
    "macro": "时间与顺序",
    "category": "前提基础",
    "point": "～上で（は） / ～上の",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 名词 ＋ の ＋ 上で",
    "meaning": "在...之后（再做...）",
    "explanation": "表示前项行为是后项行为的前提或基础。在完成了前项之后，再在此基础上进行后项动作。",
    "example": {
      "jp": "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>としっかり<ruby>相<rt>そう</rt></ruby><ruby>談<rt>だん</rt></ruby>し<span class='grammar-highlight'>た<ruby>上<rt>うえ</rt></ruby>で</span>、<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby><ruby>赴<rt>ふ</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けることにした。",
      "cn": "在与家人充分商量并取得一致后，我决定接受调往海外赴任的安排。"
    },
    "similarGrammar": [],
    "firstKana": "う",
    "keyword": "在...之后/基础上",
    "book": "N2",
    "sourceId": 117,
    "lessonNumber": 12,
    "sourceMacro": "前后顺序",
    "sourceCategory": "前提基础"
  },
  {
    "id": 2118,
    "lesson": "第12课",
    "macro": "对象与关联",
    "category": "响应期待",
    "point": "～にこたえて / ～に応えて",
    "connection": "名词 ＋ にこたえて",
    "meaning": "响应...；顺应...；满足...",
    "explanation": "表示为了回报或满足对方的期待、要求、呼声等，采取了积极的行动。",
    "example": {
      "jp": "<ruby>視<rt>し</rt></ruby><ruby>聴<rt>ちょう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>熱<rt>あつ</rt></ruby>い<ruby>要<rt>よう</rt></ruby><ruby>望<rt>ぼう</rt></ruby><span class='grammar-highlight'>に<ruby>応<rt>こた</rt></ruby>えて</span>、あのドラマの<ruby>再<rt>さい</rt></ruby><ruby>放<rt>ほう</rt></ruby><ruby>送<rt>そう</rt></ruby>が<ruby>決<rt>き</rt></ruby>まった。",
      "cn": "为了响应观众的热切期盼，那部电视剧已经确定要重播了。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "响应/回报期待",
    "book": "N2",
    "sourceId": 118,
    "lessonNumber": 12,
    "sourceMacro": "目的与动机",
    "sourceCategory": "响应期待"
  },
  {
    "id": 2119,
    "lesson": "第13课",
    "macro": "状态与结果",
    "category": "主观决定・假装",
    "point": "～ことにする",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / <span class='text-[#8a3324] mx-1'>ない形</span> ＋ ことにする",
    "meaning": "就当做...；决定...",
    "explanation": "表示与客观事实无关，基于主观意愿将某事当作某状态处理。常用于“就当没发生过”等场景。",
    "example": {
      "jp": "<ruby>先<rt>せん</rt></ruby><ruby>日<rt>じつ</rt></ruby>の<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>での<ruby>失<rt>しっ</rt></ruby><ruby>言<rt>げん</rt></ruby>は、なかった<span class='grammar-highlight'>ことにしてください</span>。",
      "cn": "前几天在会议上的失言，就请大家当做没发生过吧。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "主观当做",
    "book": "N2",
    "sourceId": 119,
    "lessonNumber": 13,
    "sourceMacro": "状态与处置",
    "sourceCategory": "主观决定・假装"
  },
  {
    "id": 2120,
    "lesson": "第13课",
    "macro": "主张与评价",
    "category": "主观认为",
    "point": "～つもりだ / ～つもりだった",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / <span class='text-[#8a3324] mx-1'>ている形</span> / 形容词 / 名词+の ＋ つもりだ",
    "meaning": "原以为...；自己觉得...",
    "explanation": "表示说话人主观上是这么认为的，但客观事实可能并非如此。带有“与实际情况有出入”的语感。",
    "example": {
      "jp": "<ruby>若<rt>わか</rt></ruby>い<span class='grammar-highlight'>つもりだった</span>が、<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>走<rt>はし</rt></ruby>っただけで<ruby>息<rt>いき</rt></ruby>が<ruby>切<rt>き</rt></ruby>れる。",
      "cn": "我自己原以为还挺年轻的，可最近哪怕只是稍微跑两步就喘不上气来。"
    },
    "similarGrammar": [],
    "firstKana": "つ",
    "keyword": "主观原以为",
    "book": "N2",
    "sourceId": 120,
    "lessonNumber": 13,
    "sourceMacro": "评价与视角",
    "sourceCategory": "主观认为"
  },
  {
    "id": 2121,
    "lesson": "第13课",
    "macro": "情感与决心",
    "category": "情感极深",
    "point": "～てならない",
    "connection": "动词/形容词<span class='text-[#8a3324] mx-1'>て形</span> ＋ ならない",
    "meaning": "...得不得了；非常...",
    "explanation": "表示某种感情或感觉极其强烈，到了无法抑制的程度。通常用于消极的情感或身体感觉。",
    "example": {
      "jp": "<ruby>初<rt>はじ</rt></ruby>めての<ruby>大<rt>おお</rt></ruby>きなプロジェクトを<ruby>任<rt>まか</rt></ruby>され、<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>で<span class='grammar-highlight'>ならない</span>。",
      "cn": "被委以生平第一个大型项目的重任，我现在真的是不安到了极点。"
    },
    "similarGrammar": [],
    "firstKana": "て",
    "keyword": "感情强烈无法抑制",
    "book": "N2",
    "sourceId": 121,
    "lessonNumber": 13,
    "sourceMacro": "情感与思考",
    "sourceCategory": "情感极深"
  },
  {
    "id": 2122,
    "lesson": "第13课",
    "macro": "条件与假定",
    "category": "难以实现的假定",
    "point": "～ものなら / ～もんなら",
    "connection": "动词能动态 / 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ ものなら",
    "meaning": "如果能...的话",
    "explanation": "假设一个客观上较难实现或不太可能发生的事情。后项多接续希望、期待（如“想做...”）。",
    "example": {
      "jp": "タイムマシンで<ruby>戻<rt>もど</rt></ruby>れる<span class='grammar-highlight'>ものなら</span>、あの<ruby>日<rt>ひ</rt></ruby>のプレゼンの<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>をやり<ruby>直<rt>なお</rt></ruby>したい。",
      "cn": "哪怕只有一丝可能，如果真能坐时光机回到过去的话，我一定要去挽回那天搞砸的演示报告。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "如果能(较难实现)",
    "book": "N2",
    "sourceId": 122,
    "lessonNumber": 13,
    "sourceMacro": "条件与假定",
    "sourceCategory": "难以实现的假定"
  },
  {
    "id": 2123,
    "lesson": "第13课",
    "macro": "情感与决心",
    "category": "犹豫不决",
    "point": "～（よ）うか～まいか",
    "connection": "动词<span class='text-[#8a3324] mx-1'>意志形</span> ＋ か ＋ 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ まいか",
    "meaning": "是...好呢，还是不...好呢",
    "explanation": "表示在做与不做之间犹豫不决的心情。后项常接续表示迷茫、思考的词汇。",
    "example": {
      "jp": "<ruby>今<rt>いま</rt></ruby>の<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めて<ruby>新<rt>あたら</rt></ruby>しい<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>しよ<span class='grammar-highlight'>うか</span>する<span class='grammar-highlight'>まいか</span>、ずっと<ruby>悩<rt>なや</rt></ruby>んでいる。",
      "cn": "我一直在纠结，到底是辞掉现在的去尝试新工作好呢，还是干脆打消这个念头。"
    },
    "similarGrammar": [],
    "firstKana": "よ",
    "keyword": "做与不做犹豫",
    "book": "N2",
    "sourceId": 123,
    "lessonNumber": 13,
    "sourceMacro": "情感与思考",
    "sourceCategory": "犹豫不决"
  },
  {
    "id": 2124,
    "lesson": "第13课",
    "macro": "状态与结果",
    "category": "过程后结果",
    "point": "～末（に） / ～末の",
    "connection": "动词<span class='text-[#8a3324] mx-1'>た形</span> / 名词 ＋ の ＋ 末（に）",
    "meaning": "经过...之后，最终...",
    "explanation": "表示经历了一个较长、较辛苦的过程或状态，最后得出了某个结果。多用于重大的决定或结果。",
    "example": {
      "jp": "<ruby>何<rt>なん</rt></ruby>ヶ<ruby>月<rt>げつ</rt></ruby>も<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねた<span class='grammar-highlight'><ruby>末<rt>すえ</rt></ruby>に</span>、ようやく<ruby>大<rt>おお</rt></ruby><ruby>型<rt>がた</rt></ruby><ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>を<ruby>勝<rt>か</rt></ruby>ち<ruby>取<rt>と</rt></ruby>った。",
      "cn": "经历了长达好几个月的反复谈判，我们最终终于拿下了这份大合同。"
    },
    "similarGrammar": [
      2045
    ],
    "firstKana": "す",
    "keyword": "经过长久过程最终",
    "book": "N2",
    "sourceId": 124,
    "lessonNumber": 13,
    "sourceMacro": "状态与结果",
    "sourceCategory": "经过之后"
  },
  {
    "id": 2125,
    "lesson": "第13课",
    "macro": "逆接与让步",
    "category": "极端让步",
    "point": "たとえ～ても / たとえ～にしても",
    "connection": "たとえ ＋ 动词/形容词<span class='text-[#8a3324] mx-1'>て形</span> ＋ も",
    "meaning": "即使...也...；哪怕...也...",
    "explanation": "提出一个极端的假定情况，表示即使在该假定条件下，后项的结论或事实也不会改变。",
    "example": {
      "jp": "<span class='grammar-highlight'>たとえ</span><ruby>周<rt>しゅう</rt></ruby><ruby>囲<rt>い</rt></ruby>の<ruby>全<rt>ぜん</rt></ruby><ruby>員<rt>いん</rt></ruby>に<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>され<span class='grammar-highlight'>ても</span>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦<rt>あきら</rt></ruby>めるつもりはない。",
      "cn": "哪怕周围所有人都站出来反对，我也绝不打算放弃自己的梦想。"
    },
    "similarGrammar": [
      2137
    ],
    "firstKana": "た",
    "keyword": "即使/哪怕",
    "book": "N2",
    "sourceId": 125,
    "lessonNumber": 13,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "极端让步"
  },
  {
    "id": 2126,
    "lesson": "第13课",
    "macro": "可能性",
    "category": "心理上难",
    "point": "～がたい",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ がたい",
    "meaning": "难以...；很难...",
    "explanation": "表示在心理、情感或常理上感觉难以做到。常接“信じる、許す、理解する”等心理活动动词，不用于客观能力的不足。",
    "example": {
      "jp": "<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>苦<rt>く</rt></ruby><ruby>労<rt>ろう</rt></ruby>を<ruby>共<rt>とも</rt></ruby>にしてきた<ruby>彼<rt>かれ</rt></ruby>が<ruby>裏<rt>うら</rt></ruby><ruby>切<rt>ぎ</rt></ruby>るなんて、<ruby>到<rt>とう</rt></ruby><ruby>底<rt>てい</rt></ruby><ruby>信<rt>しん</rt></ruby>じ<span class='grammar-highlight'>がたい</span>。",
      "cn": "那个与我们同甘共苦多年的他竟然会做出背叛的举动，这实在是让人难以置信。"
    },
    "similarGrammar": [],
    "firstKana": "が",
    "keyword": "心理/情感上难以",
    "book": "N2",
    "sourceId": 126,
    "lessonNumber": 13,
    "sourceMacro": "可能性",
    "sourceCategory": "心理上难"
  },
  {
    "id": 2127,
    "lesson": "第13课",
    "macro": "逆接与让步",
    "category": "无视・不顾",
    "point": "～もかまわず",
    "connection": "名词 / <span class='text-[#8a3324] mx-1'>普通体</span>＋の ＋ もかまわず",
    "meaning": "不顾...；不在乎...",
    "explanation": "表示不顾及通常应该顾及的情况（如周围人的眼光、体面、危险等），而采取某种行动。",
    "example": {
      "jp": "<ruby>突<rt>とつ</rt></ruby><ruby>然<rt>ぜん</rt></ruby>の<ruby>土<rt>ど</rt></ruby><ruby>砂<rt>しゃ</rt></ruby><ruby>降<rt>ぶ</rt></ruby>りの<ruby>中<rt>なか</rt></ruby>、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>服<rt>ふく</rt></ruby>が<ruby>濡<rt>ぬ</rt></ruby>れる<span class='grammar-highlight'>のもかまわず</span>、<ruby>迷<rt>まい</rt></ruby><ruby>子<rt>ご</rt></ruby>の<ruby>犬<rt>いぬ</rt></ruby>を<ruby>追<rt>お</rt></ruby>いかけた。",
      "cn": "面对突如其来的倾盆大雨，她完全顾不上自己的衣服被淋透，奋不顾身地去追赶那只走失的小狗。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "不顾/不在乎",
    "book": "N2",
    "sourceId": 127,
    "lessonNumber": 13,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "无视・不顾"
  },
  {
    "id": 2128,
    "lesson": "第13课",
    "macro": "原因与理由",
    "category": "极端原因",
    "point": "～あまり（に）",
    "connection": "名词＋の / 动词<span class='text-[#8a3324] mx-1'>普通体</span> ＋ あまり",
    "meaning": "因为过于...；过度...而...",
    "explanation": "表示由于某种感情或状态的程度过于极端，从而导致了通常不常见的后项结果。",
    "example": {
      "jp": "<ruby>納<rt>のう</rt></ruby><ruby>期<rt>き</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせようと<ruby>焦<rt>あせ</rt></ruby>る<span class='grammar-highlight'>あまり</span>、<ruby>致<rt>ち</rt></ruby><ruby>命<rt>めい</rt></ruby><ruby>的<rt>てき</rt></ruby>なミスを<ruby>犯<rt>おか</rt></ruby>してしまった。",
      "cn": "为了赶上交货期急得团团转，结果由于过度焦虑，竟然犯下了一个极其致命的错误。"
    },
    "similarGrammar": [
      2048
    ],
    "firstKana": "あ",
    "keyword": "过于极端导致",
    "book": "N2",
    "sourceId": 128,
    "lessonNumber": 13,
    "sourceMacro": "原因与理由",
    "sourceCategory": "极端原因"
  },
  {
    "id": 2129,
    "lesson": "第13课",
    "macro": "状态与结果",
    "category": "包含感情",
    "point": "～を込めて（こめて）",
    "connection": "名词 ＋ を込めて",
    "meaning": "满怀着...；倾注...",
    "explanation": "表示将强烈的感情、心意或力量注入到某事物中。前项常接“愛、心、祈り、気持ち”等词语。",
    "example": {
      "jp": "<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>お<ruby>世<rt>せ</rt></ruby><ruby>話<rt>わ</rt></ruby>になった<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>へ、クラス<ruby>全<rt>ぜん</rt></ruby><ruby>員<rt>いん</rt></ruby>で<ruby>感<rt>かん</rt></ruby><ruby>謝<rt>しゃ</rt></ruby>の<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ち<span class='grammar-highlight'>を<ruby>込<rt>こ</rt></ruby>めて</span><ruby>花<rt>はな</rt></ruby><ruby>束<rt>たば</rt></ruby>を<ruby>贈<rt>おく</rt></ruby>った。",
      "cn": "我们全班同学满怀着感激之情，向多年来悉心教导我们的老师献上了花束。"
    },
    "similarGrammar": [],
    "firstKana": "を",
    "keyword": "倾注感情/心意",
    "book": "N2",
    "sourceId": 129,
    "lessonNumber": 13,
    "sourceMacro": "状态与处置",
    "sourceCategory": "包含感情"
  },
  {
    "id": 2130,
    "lesson": "第13课",
    "macro": "举例与递进",
    "category": "双重并列",
    "point": "～も～ば～も / ～も～なら～も",
    "connection": "名词 ＋ も ＋ 动词<span class='text-[#8a3324] mx-1'>假定形</span>(ば)/形容词<span class='text-[#8a3324] mx-1'>假定形</span> ＋ 名词 ＋ も",
    "meaning": "既...又...；不仅...而且...",
    "explanation": "举出同类的两个事物，表示不仅有前者，还有后者。用于对事物进行全面的积极或消极评价。",
    "example": {
      "jp": "この<ruby>地<rt>ち</rt></ruby><ruby>方<rt>ほう</rt></ruby>は、<ruby>気<rt>き</rt></ruby><ruby>候<rt>こう</rt></ruby><span class='grammar-highlight'>も</span><ruby>穏<rt>おだ</rt></ruby>やかであれ<span class='grammar-highlight'>ば</span>、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby><span class='grammar-highlight'>も</span><ruby>美<rt>おい</rt></ruby>味しいので、<ruby>移<rt>い</rt></ruby><ruby>住<rt>じゅう</rt></ruby><ruby>先<rt>さき</rt></ruby>として<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>がある。",
      "cn": "这个地区不仅气候十分温和，而且当地的美食也非常可口，因此作为宜居移居地深受大家欢迎。"
    },
    "similarGrammar": [],
    "firstKana": "も",
    "keyword": "既A又B",
    "book": "N2",
    "sourceId": 130,
    "lessonNumber": 13,
    "sourceMacro": "并列与列举",
    "sourceCategory": "双重并列"
  },
  {
    "id": 2131,
    "lesson": "第13课",
    "macro": "状态与结果",
    "category": "坚持到底",
    "point": "～ぬく",
    "connection": "动词<span class='text-[#8a3324] mx-1'>第一连用形</span> ＋ ぬく",
    "meaning": "到底...；坚持完成...",
    "explanation": "表示克服困难，坚持将某事做到最后。常带有强烈的意志和成就感。",
    "example": {
      "jp": "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>挫<rt>ざ</rt></ruby><ruby>折<rt>せつ</rt></ruby>しそうになったが、この<ruby>難<rt>むずか</rt></ruby>しいプロジェクトを<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>までやり<span class='grammar-highlight'>ぬいた</span>。",
      "cn": "尽管好几次都差点遭遇挫折想要放弃，但我还是把这个艰难的项目坚持做到了最后。"
    },
    "similarGrammar": [],
    "firstKana": "ぬ",
    "keyword": "坚持完成到底",
    "book": "N2",
    "sourceId": 131,
    "lessonNumber": 13,
    "sourceMacro": "状态与结果",
    "sourceCategory": "坚持到底"
  },
  {
    "id": 2132,
    "lesson": "第14课",
    "macro": "限定与程度",
    "category": "全范围・举全体",
    "point": "～をあげて",
    "connection": "名词 ＋ をあげて",
    "meaning": "全...；举...",
    "explanation": "举出国家、公司、家庭等整个组织或集团的名称，表示“<span class='font-bold text-[#8a3324]'>全体成员一起</span>”做某事。",
    "example": {
      "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><span class='grammar-highlight'>をあげて</span>、この<ruby>新<rt>あたら</rt></ruby>しいプロジェクトの<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>んでいる。",
      "cn": "全公司上下都在齐心协力地致力于促成这个新项目的成功。"
    },
    "similarGrammar": [],
    "firstKana": "を",
    "keyword": "全体一同",
    "book": "N2",
    "sourceId": 132,
    "lessonNumber": 14,
    "sourceMacro": "范围与限定",
    "sourceCategory": "全范围・举全体"
  },
  {
    "id": 2133,
    "lesson": "第14课",
    "macro": "对象与关联",
    "category": "围绕・焦点",
    "point": "～をめぐって / ～をめぐる",
    "connection": "名词 ＋ をめぐって",
    "meaning": "围绕着...",
    "explanation": "表示以某事物为<span class='font-bold text-[#8a3324]'>中心或焦点</span>，发生争论、对立、讨论等（后项常为争论、对抗的动词）。",
    "example": {
      "jp": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>人<rt>じん</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>制<rt>せい</rt></ruby><ruby>度<rt>ど</rt></ruby>の<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby><span class='grammar-highlight'>をめぐって</span>、<ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>組<rt>くみ</rt></ruby><ruby>合<rt>あい</rt></ruby>と<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby><ruby>側<rt>がわ</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>が<ruby>激<rt>はげ</rt></ruby>しく<ruby>対<rt>たい</rt></ruby><ruby>立<rt>りつ</rt></ruby>している。",
      "cn": "围绕着新的人事制度的引入问题，工会与管理层双方的意见产生了激烈的冲突。"
    },
    "similarGrammar": [],
    "firstKana": "を",
    "keyword": "围绕焦点争论",
    "book": "N2",
    "sourceId": 133,
    "lessonNumber": 14,
    "sourceMacro": "对象与关联",
    "sourceCategory": "围绕・焦点"
  },
  {
    "id": 2134,
    "lesson": "第14课",
    "macro": "状态与结果",
    "category": "客观决定・意味",
    "point": "～ことになる",
    "connection": "动词<span class='text-[#8a3324] mx-1'>原形</span> / 动词<span class='text-[#8a3324] mx-1'>ない形</span> ＋ ことになる",
    "meaning": "决定...；（顺理成章）意味着...",
    "explanation": "除了表示客观上定下来的计划或规定外，也可表示按照某种逻辑推导，<span class='font-bold text-[#8a3324]'>最终会导致（或意味着）</span>某结果。",
    "example": {
      "jp": "<ruby>今<rt>いま</rt></ruby><ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>を<ruby>解<rt>かい</rt></ruby><ruby>除<rt>じょ</rt></ruby>すると、<ruby>高<rt>こう</rt></ruby><ruby>額<rt>がく</rt></ruby>な<ruby>違<rt>い</rt></ruby><ruby>約<rt>やく</rt></ruby><ruby>金<rt>きん</rt></ruby>を<ruby>支<rt>し</rt></ruby><ruby>払<rt>はら</rt></ruby>う<span class='grammar-highlight'>ことになる</span>。",
      "cn": "如果现在单方面解除合同的话，就意味着必须支付高额的违约金。"
    },
    "similarGrammar": [],
    "firstKana": "こ",
    "keyword": "意味着导致某结果",
    "book": "N2",
    "sourceId": 134,
    "lessonNumber": 14,
    "sourceMacro": "状态与结果",
    "sourceCategory": "客观决定・意味"
  },
  {
    "id": 2135,
    "lesson": "第14课",
    "macro": "时间与顺序",
    "category": "正式事前准备",
    "point": "～にあたって / ～にあたり",
    "connection": "名词 / 动词<span class='text-[#8a3324] mx-1'>原形</span> ＋ にあたって",
    "meaning": "在...之际；当...之时",
    "explanation": "与“〜に際して”类似，表示在进行某项<span class='font-bold text-[#8a3324]'>具有积极意义的重大活动</span>之前（如结婚、开业等），偏正式书面语。",
    "example": {
      "jp": "<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby><span class='grammar-highlight'>にあたり</span>、<ruby>大<rt>だい</rt></ruby><ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>な<ruby>消<rt>しょう</rt></ruby><ruby>費<rt>ひ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>アンケートを<ruby>実<rt>じっ</rt></ruby><ruby>施<rt>し</rt></ruby>した。",
      "cn": "在着手开发新产品之际，我们事先实施了一场大规模的消费者问卷调查。"
    },
    "similarGrammar": [
      2007,
      2116
    ],
    "firstKana": "に",
    "keyword": "积极重大活动之前",
    "book": "N2",
    "sourceId": 135,
    "lessonNumber": 14,
    "sourceMacro": "时间与场景",
    "sourceCategory": "正式事前准备"
  },
  {
    "id": 2136,
    "lesson": "第14课",
    "macro": "举例与递进",
    "category": "附加・叠加",
    "point": "～に加えて / ～に加え",
    "connection": "名词 ＋ に加えて",
    "meaning": "加上...；除了...还...",
    "explanation": "表示在前项事物的基础上，<span class='font-bold text-[#8a3324]'>进一步叠加</span>后项事物。",
    "example": {
      "jp": "このプロジェクトは、<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby><span class='grammar-highlight'>に<ruby>加<rt>くわ</rt></ruby>えて</span>、<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>な<ruby>人<rt>ひと</rt></ruby><ruby>手<rt>で</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>という<ruby>大<rt>おお</rt></ruby><ruby>き</rt></ruby>な<ruby>課<rt>か</rt></ruby><ruby>題<rt>だい</rt></ruby>を<ruby>抱<rt>かか</rt></ruby>えている。",
      "cn": "这个项目除了资金捉襟见肘之外，还面临着严重的人手短缺这一重大难题。"
    },
    "similarGrammar": [],
    "firstKana": "に",
    "keyword": "在某基础上添加",
    "book": "N2",
    "sourceId": 136,
    "lessonNumber": 14,
    "sourceMacro": "添加与递进",
    "sourceCategory": "附加・叠加"
  },
  {
    "id": 2137,
    "lesson": "第14课",
    "macro": "逆接与让步",
    "category": "假定让步",
    "point": "～としても / ～としたって",
    "connection": "<span class='text-[#8a3324] mx-1'>普通体</span> ＋ としても",
    "meaning": "即使...也...；就算...也...",
    "explanation": "提出一个假设或既定事实，表示<span class='font-bold text-[#8a3324]'>退一步说，即使承认前项</span>，后项的结论或评价也不会受影响。",
    "example": {
      "jp": "お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>の<ruby>要<rt>よう</rt></ruby><ruby>望<rt>ぼう</rt></ruby>だ<span class='grammar-highlight'>としても</span>、こんなに<ruby>短<rt>みじか</rt></ruby>い<ruby>納<rt>のう</rt></ruby><ruby>期<rt>き</rt></ruby>で<ruby>納<rt>のう</rt></ruby><ruby>品<rt>ひん</rt></ruby>するのは<ruby>物<rt>ぶつ</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>不<rt>ふ</rt></ruby><ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby>だ。",
      "cn": "就算那是客户提出的强烈要求，要在这么短的期限内完成交货，在物理上也是绝对不可能做到的。"
    },
    "similarGrammar": [
      2125
    ],
    "firstKana": "と",
    "keyword": "即使承认前项也",
    "book": "N2",
    "sourceId": 137,
    "lessonNumber": 14,
    "sourceMacro": "逆接与让步",
    "sourceCategory": "假定让步"
  },
  {
    "id": 2138,
    "lesson": "第14课",
    "macro": "依据与视角",
    "category": "基础・根据",
    "point": "～に基づいて / ～をもとに",
    "connection": "名词 ＋ に基づいて / をもとにして",
    "meaning": "基于...；以...为基础",
    "explanation": "“〜に基づいて”表示以某种<span class='font-bold text-[#8a3324]'>基准、法律、数据、理念</span>为依据。“〜をもとに”多表示以具体的素材或经验为基础。",
    "example": {
      "jp": "ユーザーから<ruby>集<rt>あつ</rt></ruby>めた<ruby>膨<rt>ぼう</rt></ruby><ruby>大<rt>だい</rt></ruby>なデータ<span class='grammar-highlight'>に<ruby>基<rt>もと</rt></ruby>づいて</span>、<ruby>新<rt>あたら</rt></rubyしいアプリの<ruby>機<rt>き</rt></ruby><ruby>能<rt>のう</rt></ruby>を<ruby>設<rt>せっ</rt></ruby><ruby>計<rt>けい</rt></ruby>しました。",
      "cn": "我们以从用户那里收集来的海量数据为基准，精心设计了这款新应用程序的各项功能。"
    },
    "similarGrammar": [],
    "firstKana": "に / を",
    "keyword": "作为事实基准素材",
    "book": "N2",
    "sourceId": 138,
    "lessonNumber": 14,
    "sourceMacro": "依据与基准",
    "sourceCategory": "基础・根据"
  },
  {
    "id": 2139,
    "lesson": "第14课",
    "macro": "条件与假定",
    "category": "唯一必要条件",
    "point": "～てこそ",
    "connection": "动词<span class='text-[#8a3324] mx-1'>て形</span> ＋ こそ",
    "meaning": "只有...才...",
    "explanation": "强调前项是后项成立的<span class='font-bold text-[#8a3324]'>不可或缺的条件</span>。没有前项，后项的意义或价值就很难体现。通常用于表达个人的主张或评价。",
    "example": {
      "jp": "どんなに<ruby>良<rt>よ</rt></ruby>いアドバイスでも、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>実<rt>じっ</rt></ruby><ruby>体<rt>たい</rt></ruby><ruby>験<rt>けん</rt></ruby>を<ruby>伴<rt>ともな</rt></ruby>っ<span class='grammar-highlight'>てこそ</span>、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>で<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>できるものだ。",
      "cn": "再怎么好的建议，只有伴随着自己真真切切的亲身经历，才能在真正意义上被理解和消化。"
    },
    "similarGrammar": [
      2053
    ],
    "firstKana": "て",
    "keyword": "不可或缺的条件",
    "book": "N2",
    "sourceId": 139,
    "lessonNumber": 14,
    "sourceMacro": "条件与假定",
    "sourceCategory": "唯一必要条件"
  }
];
  const TRY_N2_LESSON_CARDS = [
  {
    "sourceId": 1,
    "slug": "nitsuki",
    "title": "〜につき",
    "meaning": "因……；由于……（郑重）。",
    "connection": "N ＋ につき",
    "context": "表示因果关系，多用于书面语、正式通知或告示中。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>因……；由于……（郑重）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ につき</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示因果关系，多用于书面语、正式通知或告示中。</div>",
    "example": {
      "jp": "改装中<strong>につき</strong>、休業いたします。",
      "cn": "因正在装修，暂停营业。"
    }
  },
  {
    "sourceId": 2,
    "slug": "otowazu",
    "title": "〜を問わず",
    "meaning": "不管……；不问……。",
    "connection": "N ＋ を問わず",
    "context": "表示后项内容不受前项条件的限制，任何情况都适用。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不管……；不问……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ を問わず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后项内容不受前项条件的限制，任何情况都适用。</div>",
    "example": {
      "jp": "経験の有無<strong>を問わず</strong>、募集します。",
      "cn": "不问经验有无，均可应聘。"
    }
  },
  {
    "sourceId": 3,
    "slug": "nikagiri",
    "title": "〜に限り",
    "meaning": "仅限……；只有……。",
    "connection": "N ＋ に限って／に限り／に限る",
    "context": "表示后项内容仅在前项条件下适用，其他情况都不适用。多用于通知或规定。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>仅限……；只有……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に限って／に限り／に限る</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后项内容仅在前项条件下适用，其他情况都不适用。多用于通知或规定。</div>",
    "example": {
      "jp": "女性<strong>に限り</strong>、入場料は無料です。",
      "cn": "仅限女性入场免费。"
    }
  },
  {
    "sourceId": 4,
    "slug": "nioji",
    "title": "〜に応じ",
    "meaning": "根据……；按照……。",
    "connection": "N ＋ に応じて／に応じ／に応じたN",
    "context": "表示根据前者的情况相应的采取后项的行动。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>根据……；按照……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に応じて／に応じ／に応じたN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示根据前者的情况相应的采取后项的行动。</div>",
    "example": {
      "jp": "予算<strong>に応じて</strong>、旅行のプランを決めます。",
      "cn": "根据预算决定旅行计划。"
    }
  },
  {
    "sourceId": 5,
    "slug": "nikakawarazu",
    "title": "〜にかかわらず",
    "meaning": "不管……；无论……。",
    "connection": "N ＋ にかかわらず",
    "context": "表示后项内容不受前项情况影响，结果都一样。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不管……；无论……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にかかわらず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后项内容不受前项情况影响，结果都一样。</div>",
    "example": {
      "jp": "理由<strong>にかかわらず</strong>、遅刻は認めません。",
      "cn": "无论理由如何，都不允许迟到。"
    }
  },
  {
    "sourceId": 6,
    "slug": "nioite",
    "title": "〜において",
    "meaning": "在……；于……（郑重）。",
    "connection": "N ＋ において／におけるN",
    "context": "「で」的郑重书面语。表示动作进行的场所、时间或领域。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……；于……（郑重）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ において／におけるN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「で」的郑重书面语。表示动作进行的场所、时间或领域。</div>",
    "example": {
      "jp": "入学式は講堂<strong>において</strong>行われます。",
      "cn": "入学典礼在礼堂举行。"
    }
  },
  {
    "sourceId": 7,
    "slug": "sai",
    "title": "〜際",
    "meaning": "……的时候；……之际。",
    "connection": "Vる・Vた／Nの ＋ 際（に）",
    "context": "「とき」的郑重书面语。常用于说明或介绍，后面常搭配请求描述。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……的时候；……之际。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vた／Nの ＋ 際（に）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「とき」的郑重书面语。常用于说明或介绍，后面常搭配请求描述。</div>",
    "example": {
      "jp": "お降りの<strong>際</strong>は、足元にご注意ください。",
      "cn": "下车时请注意脚下。"
    }
  },
  {
    "sourceId": 8,
    "slug": "koto",
    "title": "〜こと",
    "meaning": "请……；要求……。",
    "connection": "Vる・Vない／Nの ＋ こと",
    "context": "接于句尾，用于解释规则、注意事项或指示，多用于书面等正式场景。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>请……；要求……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vない／Nの ＋ こと</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>接于句尾，用于解释规则、注意事项或指示，多用于书面等正式场景。</div>",
    "example": {
      "jp": "試験中は携帯電話の電源を切る<strong>こと</strong>。",
      "cn": "考试期间请关闭手机电源。"
    }
  },
  {
    "sourceId": 9,
    "slug": "irai_l2",
    "title": "〜て以来",
    "meaning": "自……以来（一直）；……以后一直。",
    "connection": "Vて／N ＋ 以来",
    "context": "表示从过去某时起，某种状态一直持续到现在。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>自……以来（一直）；……以后一直。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vて／N ＋ 以来</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示从过去某时起，某种状态一直持续到现在。</div>",
    "example": {
      "jp": "日本に来て<strong>以来</strong>、母の料理を食べていない。",
      "cn": "来日本以后，就一直没吃过妈妈做的菜。"
    }
  },
  {
    "sourceId": 10,
    "slug": "wohajime",
    "title": "〜をはじめ",
    "meaning": "以……为首；以及……。",
    "connection": "N ＋ をはじめ／をはじめとして／をはじめとするN",
    "context": "举出一个代表性例子，暗示还有其他同类事物。多用于郑重场合。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>以……为首；以及……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ をはじめ／をはじめとして／をはじめとするN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>举出一个代表性例子，暗示还有其他同类事物。多用于郑重场合。</div>",
    "example": {
      "jp": "会議には中国<strong>をはじめ</strong>、アジアの国々が参加した。",
      "cn": "以中国为首，亚洲各国都参加了会议。"
    }
  },
  {
    "sourceId": 11,
    "slug": "nomoto",
    "title": "〜のもと（で）",
    "meaning": "在……之下；在……的条件下。",
    "connection": "N ＋ の ＋ もとで／もとに",
    "context": "表示在某人的影响、指导、保护或某种条件下进行某动作。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……之下；在……的条件下。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ の ＋ もとで／もとに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示在某人的影响、指导、保护或某种条件下进行某动作。</div>",
    "example": {
      "jp": "先生の指導<strong>のもとで</strong>、試験に合格できた。",
      "cn": "在老师的指导下，通过了考试。"
    }
  },
  {
    "sourceId": 12,
    "slug": "hamotoyori",
    "title": "〜はもとより",
    "meaning": "……自不必说；……是当然的。",
    "connection": "N ＋ はもとより",
    "context": "郑重说法，相当于「〜はもちろん」。表示前项理所当然，后项（通常程度更深）也如此。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……自不必说；……是当然的。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ はもとより</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>郑重说法，相当于「〜はもちろん」。表示前项理所当然，后项（通常程度更深）也如此。</div>",
    "example": {
      "jp": "彼は英語<strong>はもとより</strong>、フランス語も話せる。",
      "cn": "英语自不必说，他连法语也会说。"
    }
  },
  {
    "sourceId": 13,
    "slug": "monoda_l2",
    "title": "〜ものだ（本質）",
    "meaning": "本来就……；理应……。",
    "connection": "Vる／Vない ＋ ものだ",
    "context": "表示说话人认为事情就该是某种模样的，用于陈述社会常识、自然规律或事物本质等。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>本来就……；理应……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない ＋ ものだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示说话人认为事情就该是某种模样的，用于陈述社会常识、自然规律或事物本质等。</div>",
    "example": {
      "jp": "困っている時は助け合う<strong>ものだ</strong>。",
      "cn": "困难时理应互相帮助。"
    }
  },
  {
    "sourceId": 14,
    "slug": "uede_l2",
    "title": "〜上で（は）",
    "meaning": "在……方面；在……过程中。",
    "connection": "Vる ＋ 上で／上でのN",
    "context": "表示为了达到某目的，什么东西是必要或重要的。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……方面；在……过程中。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ 上で／上でのN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示为了达到某目的，什么东西是必要或重要的。</div>",
    "example": {
      "jp": "外国語を勉強する<strong>上で</strong>、辞書はなくてはならない。",
      "cn": "在学习外语的过程中，字典是必不可少的。"
    }
  },
  {
    "sourceId": 15,
    "slug": "nagara",
    "title": "〜ながら（も）",
    "meaning": "虽然……但是……；尽管……。",
    "connection": "V（ます形）／イAい／ナA／N ＋ ながら（も）",
    "context": "表示转折，常用搭配如「残念ながら」（很遗憾）、「狭いながら」（虽然狭窄）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽然……但是……；尽管……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形）／イAい／ナA／N ＋ ながら（も）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示转折，常用搭配如「残念ながら」（很遗憾）、「狭いながら」（虽然狭窄）。</div>",
    "example": {
      "jp": "狭い<strong>ながら（も）</strong>、楽しい我が家。",
      "cn": "虽然很狭窄，却是我快乐的家。"
    }
  },
  {
    "sourceId": 16,
    "slug": "wotoshita",
    "title": "〜を〜とした",
    "meaning": "以……为……；把……作为……。",
    "connection": "N１ ＋ を ＋ N２ ＋ として／に",
    "context": "表示“把前者当作，视为后者来对待”。常与「目的・中心・対象・手本・前提」等词汇搭配使用。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>以……为……；把……作为……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span><span class=\"desc-text\">N１ ＋ を ＋ N２ ＋ として／に</span></div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span><span class=\"desc-text\">表示“把前者当作，视为后者来对待”。常与<strong>「目的・中心・対象・手本・前提」</strong>等词汇搭配使用。</span></div>",
    "example": {
      "jp": "彼<b>を</b>対象<b>として</b>、研究を行った。",
      "cn": "以他为对象，进行了实验。"
    }
  },
  {
    "sourceId": 17,
    "slug": "kikkake",
    "title": "きっかけ",
    "meaning": "契机；起因；开端。",
    "connection": "",
    "context": "表示导致新事物或新局面开始的直接原因或动机。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>契机；起因；开端。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【用法】</span><span class=\"desc-text\">作为名词使用。常见句型：<br>1. <strong>〜をきっかけに（して）</strong>：以……为契机（开始做某事）。<br>2. <strong>〜がきっかけで</strong>：……是（做某事的）起因。</span></div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span><span class=\"desc-text\">表示导致新事物或新局面开始的直接原因或动机。</span></div>\n                       <div class=\"desc-row supplement\"><span class=\"desc-label supplement-label\">【辨析】</span><span class=\"desc-text\"><strong>契機（けいき）</strong>：<br>意思与「きっかけ」相同，但属于<strong>郑重书面语</strong>。<br>● <strong>きっかけ</strong>：通俗、口语化。可用于日常琐事（如：喧嘩のきっかけ / 吵架的起因）。<br>● <strong>契機</strong>：生硬、书面化。多用于历史事件、社会改革、企业发展等重大转折（如：<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>契機<rt>けいき</rt></ruby>となる / 成为重要契机）。</span></div>",
    "example": {
      "jp": "この転勤<strong>をきっかけに</strong>、新しいことに挑戦したい。",
      "cn": "我想以这次调职为契机，挑战新事物。"
    }
  },
  {
    "sourceId": 18,
    "slug": "karaniwa",
    "title": "〜からには",
    "meaning": "既然……就……。",
    "connection": "普通形（ナAである／Nである） ＋ からには",
    "context": "表示基于前者的事实/情况，理应进行后续的动作或保持某种决心。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>既然……就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAである／Nである） ＋ からには</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示基于前者的事实/情况，理应进行后续的动作或保持某种决心。</div>",
    "example": {
      "jp": "約束した<b>からには</b>、守るべきだ。",
      "cn": "既然约好了，就应该遵守。"
    }
  },
  {
    "sourceId": 19,
    "slug": "wakedahearimasen",
    "title": "〜わけではありません",
    "meaning": "并非……；并不是说……。",
    "connection": "普通形（ナAな／Nの） ＋ わけではない",
    "context": "用于部分否定，委婉地纠正对方可能产生的误解。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>并非……；并不是说……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nの） ＋ わけではない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>用于部分否定，委婉地纠正对方可能产生的误解。</div>",
    "example": {
      "jp": "嫌いな<b>わけではない</b>が、食べたくない。",
      "cn": "并不是讨厌，只是不想吃。"
    }
  },
  {
    "sourceId": 20,
    "slug": "kotonaku",
    "title": "〜ことなく",
    "meaning": "不……（地）；没有……。",
    "connection": "Vる ＋ ことなく",
    "context": "「ないで」的书面语。表示在没有进行前项动作的状态下，进行了后项动作。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不……（地）；没有……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ ことなく</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「ないで」的书面语。表示在没有进行前项动作的状态下，进行了后项动作。</div>",
    "example": {
      "jp": "彼は休む<b>ことなく</b>働き続けた。",
      "cn": "他没有休息，持续工作。"
    }
  },
  {
    "sourceId": 21,
    "slug": "nimokakawarazu",
    "title": "〜にもかかわらず",
    "meaning": "虽然……但是……；尽管……。",
    "connection": "N／普通形（ナAである／Nである） ＋ にもかかわらず",
    "context": "表示后项出现了与前项预想相反的结果。带有惊讶、感动或不满的语气。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽然……但是……；尽管……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N／普通形（ナAである／Nである） ＋ にもかかわらず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后项出现了与前项预想相反的结果。带有惊讶、感动或不满的语气。</div>",
    "example": {
      "jp": "悪天候<b>にもかかわらず</b>、試合は行われた。",
      "cn": "尽管天气恶劣，比赛还是进行了。"
    }
  },
  {
    "sourceId": 22,
    "slug": "toshite",
    "title": "〜として",
    "meaning": "作为……；以……身份。",
    "connection": "N ＋ として／としてのN",
    "context": "表示某人或某物的立场、资格、名义或作用。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>作为……；以……身份。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ として／としてのN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某人或某物的立场、资格、名义或作用。</div>",
    "example": {
      "jp": "彼は医者<strong>として</strong>働いている。",
      "cn": "他作为医生在工作。"
    }
  },
  {
    "sourceId": 23,
    "slug": "kagiri",
    "title": "〜限り",
    "meaning": "只要……就……；在……期间内。",
    "connection": "普通形（非过去式）（ナＡな・ナＡである／Ｎである） ＋ 限り（は）",
    "context": "表示在前项条件持续的期间内，后项状态也一直持续。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>只要……就……；在……期间内。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（非过去式）（ナＡな・ナＡである／Ｎである） ＋ 限り（は）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示在前项条件持续的期间内，后项状态也一直持续。</div>",
    "example": {
      "jp": "生きている<strong>限り</strong>、勉強し続けたい。",
      "cn": "只要活着，就想继续学习。"
    }
  },
  {
    "sourceId": 24,
    "slug": "zaruwoenai",
    "title": "〜ざるを得ない",
    "meaning": "不得不……；只好……；不能不……。",
    "connection": "V（ない形） ＋ ざるを得ない（※する→せざるを得ない）",
    "context": "表示虽然本意不想做，但受某种情况迫使而不得不做。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不得不……；只好……；不能不……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ない形） ＋ ざるを得ない（※する→せざるを得ない）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示虽然本意不想做，但受某种情况迫使而不得不做。</div>",
    "example": {
      "jp": "中止せ<strong>ざるを得ない</strong>。",
      "cn": "不得不中止。"
    }
  },
  {
    "sourceId": 25,
    "slug": "toiumonodewaarimasen",
    "title": "〜というものではない",
    "meaning": "并不是说……；不一定……。",
    "connection": "普通形 ＋ というものではない",
    "context": "对某种看法进行部分否定，表示“虽然有那种倾向，但也不绝对”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>并不是说……；不一定……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形 ＋ というものではない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>对某种看法进行部分否定，表示“虽然有那种倾向，但也不绝对”。</div>",
    "example": {
      "jp": "お金があれば幸せだ<strong>というものではない</strong>。",
      "cn": "并不是说有钱就幸福。"
    }
  },
  {
    "sourceId": 26,
    "slug": "watomokaku",
    "title": "〜はともかく",
    "meaning": "姑且不论……；……先不说。",
    "connection": "N ＋ はともかく（として）",
    "context": "表示先把前项搁置一边，重点强调后项。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>姑且不论……；……先不说。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ はともかく（として）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示先把前项搁置一边，重点强调后项。</div>",
    "example": {
      "jp": "味<strong>はともかく</strong>、量は多い。",
      "cn": "味道暂且不说，分量是很足的。"
    }
  },
  {
    "sourceId": 27,
    "slug": "kanemasen",
    "title": "〜かねない",
    "meaning": "有可能……；说不定会……。",
    "connection": "V（ます形） ＋ かねない",
    "context": "表示有发生某种坏结果的可能性。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>有可能……；说不定会……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ かねない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示有发生某种坏结果的可能性。</div>",
    "example": {
      "jp": "大きな事故になり<strong>かねない</strong>。",
      "cn": "搞不好会变成大事故。"
    }
  },
  {
    "sourceId": 28,
    "slug": "toiuyori",
    "title": "〜というより",
    "meaning": "与其说……不如说……。",
    "connection": "普通形（ナA／N） ＋ というより",
    "context": "表示后者比前者更贴切、更准确。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>与其说……不如说……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナA／N） ＋ というより</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后者比前者更贴切、更准确。</div>",
    "example": {
      "jp": "彼は先生<strong>というより</strong>、友達のようだ。",
      "cn": "与其说他是老师，不如说像朋友。"
    }
  },
  {
    "sourceId": 29,
    "slug": "tewairaremasen",
    "title": "〜てはいられない",
    "meaning": "不能……；不能一直……。",
    "connection": "Vて／Nで ＋ （は）いられない",
    "context": "表示由于某种紧迫的情况或心理状态，不能继续保持某种状态。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不能……；不能一直……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vて／Nで ＋ （は）いられない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示由于某种紧迫的情况或心理状态，不能继续保持某种状态。</div>",
    "example": {
      "jp": "もう待っ<strong>てはいられない</strong>。",
      "cn": "已经不能再等了。"
    }
  },
  {
    "sourceId": 30,
    "slug": "tsutsu",
    "title": "〜つつ",
    "meaning": "一边……一边……；在……的同时。",
    "connection": "V（ます形） ＋ つつ",
    "context": "「ながら」的书面语。表示两个动作同时进行。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>一边……一边……；在……的同时。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ つつ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「ながら」的书面语。表示两个动作同时进行。</div>",
    "example": {
      "jp": "将来のことを考え<strong>つつ</strong>、進路を決める。",
      "cn": "一边思考将来，一边决定出路。"
    }
  },
  {
    "sourceId": 31,
    "slug": "niwatatte",
    "title": "〜にわたって",
    "meaning": "涉及……；长达……；遍及……。",
    "connection": "N ＋ にわたって／にわたり／にわたるN／にわたったN",
    "context": "表示时间或空间的范围很广。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>涉及……；长达……；遍及……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にわたって／にわたり／にわたるN／にわたったN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示时间或空间的范围很广。</div>",
    "example": {
      "jp": "会議は5日間<strong>にわたって</strong>行われた。",
      "cn": "会议持续进行了5天。"
    }
  },
  {
    "sourceId": 32,
    "slug": "karanikakete",
    "title": "〜から〜にかけて",
    "meaning": "从……到……。",
    "connection": "N ＋ から ＋ N ＋ にかけて",
    "context": "表示大致的时间或空间范围。与「〜から〜まで」相比，界限比较模糊。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>从……到……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ から ＋ N ＋ にかけて</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示大致的时间或空间范围。与「〜から〜まで」相比，界限比较模糊。</div>",
    "example": {
      "jp": "夕方<strong>から</strong>夜<strong>にかけて</strong>雨が降るでしょう。",
      "cn": "从傍晚到夜里大概会下雨吧。"
    }
  },
  {
    "sourceId": 33,
    "slug": "nitomonai",
    "title": "〜にともない",
    "meaning": "伴随着……；随着……。",
    "connection": "N ＋ にともなって／にともない／にともなうN",
    "context": "书面语。表示随着前项的变化，后项也一起发生变化。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>伴随着……；随着……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にともなって／にともない／にともなうN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>书面语。表示随着前项的变化，后项也一起发生变化。</div>",
    "example": {
      "jp": "人口の増加<strong>にともない</strong>、ゴミも増えている。",
      "cn": "随着人口增加，垃圾也在增加。"
    }
  },
  {
    "sourceId": 34,
    "slug": "osoregaarimasu",
    "title": "〜おそれがある",
    "meaning": "恐怕……；有……的危险/风险。",
    "connection": "Vる・Vない／Nの ＋ おそれがある",
    "context": "多用于新闻报道，表示有发生坏事情的可能性。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>恐怕……；有……的危险/风险。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vない／Nの ＋ おそれがある</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>多用于新闻报道，表示有发生坏事情的可能性。</div>",
    "example": {
      "jp": "台風が上陸する<strong>おそれがある</strong>。",
      "cn": "台风有登陆的风险。"
    }
  },
  {
    "sourceId": 35,
    "slug": "totomoni",
    "title": "〜とともに",
    "meaning": "和……一起；与此同时。",
    "connection": "Vる／N ＋ とともに",
    "context": "书面语。表示共同进行某事或两件事同时发生。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>和……一起；与此同时。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／N ＋ とともに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>书面语。表示共同进行某事或两件事同时发生。</div>",
    "example": {
      "jp": "家族<strong>とともに</strong>日本へ来た。",
      "cn": "和家人一起来到了日本。"
    }
  },
  {
    "sourceId": 36,
    "slug": "shidai_l2",
    "title": "〜次第",
    "meaning": "一……就……；立即……。",
    "connection": "V（ます形）／N ＋ 次第",
    "context": "表示前项动作结束后，立刻有意识地进行后项动作。多用于商务场合。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>一……就……；立即……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形）／N ＋ 次第</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示前项动作结束后，立刻有意识地进行后项动作。多用于商务场合。</div>",
    "example": {
      "jp": "決まり<strong>次第</strong>、ご連絡します。",
      "cn": "一决定好就联系您。"
    }
  },
  {
    "sourceId": 37,
    "slug": "kiri",
    "title": "〜きり",
    "meaning": "自……以后（一直没有……）；就……。",
    "connection": "Vた＋きり／きりのN",
    "context": "表示自从做了某动作后，就再也没有发生预期的后续动作。后项多为否定意义。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>自……以后（一直没有……）；就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた＋きり／きりのN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示自从做了某动作后，就再也没有发生预期的后续动作。后项多为否定意义。</div>",
    "example": {
      "jp": "息子は朝、出かけた<strong>きり</strong>、まだ帰ってこない。",
      "cn": "儿子早上出去后，就一直没回来。"
    }
  },
  {
    "sourceId": 38,
    "slug": "dokorojanai",
    "title": "〜どころではない",
    "meaning": "哪是……的时候；根本谈不上……。",
    "connection": "Vる／N＋どころではない / どころじゃない",
    "context": "表示因为有更重要或更糟糕的情况，根本无法进行某事。强烈否定。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>哪是……的时候；根本谈不上……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／N＋どころではない / どころじゃない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示因为有更重要或更糟糕的情况，根本无法进行某事。强烈否定。</div>",
    "example": {
      "jp": "忙しくて、テレビを見る<strong>どころではない</strong>。",
      "cn": "太忙了，哪有时间看电视。"
    }
  },
  {
    "sourceId": 39,
    "slug": "monono",
    "title": "〜ものの",
    "meaning": "虽然……但是……；虽说……。",
    "connection": "普通形（ナAな・ナAである／Nである）＋ものの",
    "context": "表示承认前项事实，但后项出现了与前项不符或相反的结果。书面语。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽然……但是……；虽说……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・ナAである／Nである）＋ものの</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示承认前项事实，但后项出现了与前项不符或相反的结果。书面语。</div>",
    "example": {
      "jp": "申し込みはした<strong>ものの</strong>、試験を受けるかどうか未定だ。",
      "cn": "虽然报了名，但不确定参不参加考试。"
    }
  },
  {
    "sourceId": 40,
    "slug": "kotoni",
    "title": "〜ことに",
    "meaning": "令人……的是……。",
    "connection": "Vた／イAい／ナAな＋ことに",
    "context": "接在表示感情的词语后，强调说话人对接下来要叙述的事情的某种心情。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>令人……的是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた／イAい／ナAな＋ことに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>接在表示感情的词语后，强调说话人对接下来要叙述的事情的某种心情。</div>",
    "example": {
      "jp": "うれしい<strong>ことに</strong>、スピーチ大会で優勝した。",
      "cn": "令人高兴的是，我在演讲比赛中夺冠了。"
    }
  },
  {
    "sourceId": 41,
    "slug": "nishitewa",
    "title": "〜にしては",
    "meaning": "照……来说（却……）；作为……（却……）。",
    "connection": "N／普通形（ナAである／Nである）＋にしては",
    "context": "表示后项的结果与根据前项所预想的标准不符，带有意外或评价的语气。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>照……来说（却……）；作为……（却……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N／普通形（ナAである／Nである）＋にしては</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示后项的结果与根据前项所预想的标准不符，带有意外或评价的语气。</div>",
    "example": {
      "jp": "彼は歌手<strong>にしては</strong>、歌が下手だ。",
      "cn": "作为一个歌手，他唱得太差了。"
    }
  },
  {
    "sourceId": 42,
    "slug": "kotoka",
    "title": "〜ことか",
    "meaning": "多么……啊；不知道……啊。",
    "connection": "Vた／イAい／ナAな＋ことに",
    "context": "与「どんなに」「どれほど」等疑问词呼应，表示强烈的感叹。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>多么……啊；不知道……啊。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた／イAい／ナAな＋ことに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>与「どんなに」「どれほど」等疑问词呼应，表示强烈的感叹。</div>",
    "example": {
      "jp": "合格できて、どんなにうれしい<strong>ことか</strong>。",
      "cn": "能合格，我是多么高兴啊。"
    }
  },
  {
    "sourceId": 43,
    "slug": "saeba",
    "title": "〜さえ〜ば",
    "meaning": "只要……就……。",
    "connection": "N＋さえ＋～ば；Ｎで＋さえ＋あれば／なければ；Vます＋さえ＋すれば／しなければ；イAく／ナAで＋さえ＋あれば／なければ",
    "context": "表示只要满足这一个最低条件，其他问题都能解决或结果就会成立。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>只要……就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N＋さえ＋～ば；Ｎで＋さえ＋あれば／なければ；Vます＋さえ＋すれば／しなければ；イAく／ナAで＋さえ＋あれば／なければ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示只要满足这一个最低条件，其他问题都能解决或结果就会成立。</div>",
    "example": {
      "jp": "お金<strong>さえ</strong>あれ<strong>ば</strong>、幸せになれるのだろうか。",
      "cn": "只要有钱就能变得幸福吗？"
    }
  },
  {
    "sourceId": 44,
    "slug": "youganai",
    "title": "〜ようがない",
    "meaning": "无法……；没办法……。",
    "connection": "V（ます形） ＋ ようがない",
    "context": "表示虽然想做，但因为没有手段或方法而做不到。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>无法……；没办法……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ ようがない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示虽然想做，但因为没有手段或方法而做不到。</div>",
    "example": {
      "jp": "連絡先がわからず、連絡し<strong>ようがない</strong>。",
      "cn": "不知道联系方式，没办法联系。"
    }
  },
  {
    "sourceId": 45,
    "slug": "ageku",
    "title": "〜あげく",
    "meaning": "……的结果（最后还是……）。",
    "connection": "Vた＋あげく（に）",
    "context": "表示经历了很长时间的努力，最终得到了某样的结果（多为不好结果）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……的结果（最后还是……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた＋あげく（に）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示经历了很长时间的努力，最终得到了某样的结果（多为不好结果）。</div>",
    "example": {
      "jp": "迷った<strong>あげく</strong>、何も買わなかった。",
      "cn": "犹豫了半天，结果什么都没买。"
    }
  },
  {
    "sourceId": 46,
    "slug": "monjanai",
    "title": "〜もんじゃない",
    "meaning": "不应该……；不是……的（东西）。",
    "connection": "Vる ＋ ものではない（もんじゃない）",
    "context": "「ものではない」的口语形式。用于告诫对方不应做某事，或陈述一般的道理。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不应该……；不是……的（东西）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ ものではない（もんじゃない）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「ものではない」的口语形式。用于告诫对方不应做某事，或陈述一般的道理。</div>",
    "example": {
      "jp": "人の悪口を言う<strong>もんじゃない</strong>。",
      "cn": "不应该说别人的坏话。"
    }
  },
  {
    "sourceId": 47,
    "slug": "dake_l3",
    "title": "〜だけ",
    "meaning": "尽量……；做做看……（不保证结果）。",
    "connection": "Vる ＋ だけ ＋ 同V",
    "context": "常用「VるだけはVてみる」的形式。表示虽然不抱太大希望，但既然值得一试，就做到那个程度。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>尽量……；做做看……（不保证结果）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ だけ ＋ 同V</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>常用「VるだけはVてみる」的形式。表示虽然不抱太大希望，但既然值得一试，就做到那个程度。</div>",
    "example": {
      "jp": "頼む<strong>だけ</strong>は頼んでみよう。",
      "cn": "不管行不行，先试着拜托一下吧。"
    }
  },
  {
    "sourceId": 48,
    "slug": "bakarini",
    "title": "〜ばかりに",
    "meaning": "正因为……（才导致了不好的结果）。",
    "connection": "普通形（ナAな・である／Nな・である） ＋ ばかりに",
    "context": "表示因为某一个原因，导致了出乎意料的坏结果，带有后悔或遗憾的心情。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>正因为……（才导致了不好的结果）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・である／Nな・である） ＋ ばかりに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示因为某一个原因，导致了出乎意料的坏结果，带有后悔或遗憾的心情。</div>",
    "example": {
      "jp": "住所を書かなかった<strong>ばかりに</strong>、返事が来なかった。",
      "cn": "正因为没写地址，才没收到回信。"
    }
  },
  {
    "sourceId": 49,
    "slug": "kotowanai",
    "title": "〜ことはない",
    "meaning": "没必要……；用不着……。",
    "connection": "Vる ＋ ことはない",
    "context": "用于鼓励或安慰对方“不必那样做”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>没必要……；用不着……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ ことはない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>用于鼓励或安慰对方“不必那样做”。</div>",
    "example": {
      "jp": "君が謝る<strong>ことはない</strong>よ。",
      "cn": "你没必要道歉哦。"
    }
  },
  {
    "sourceId": 50,
    "slug": "nikurabete",
    "title": "〜に比べて",
    "meaning": "与……相比。",
    "connection": "N ＋ に比べて／と比べて",
    "context": "表示两个事物的比较。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>与……相比。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に比べて／と比べて</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示两个事物的比较。</div>",
    "example": {
      "jp": "兄<strong>に比べて</strong>、弟は活発だ。",
      "cn": "和哥哥相比，弟弟很活泼。"
    }
  },
  {
    "sourceId": 51,
    "slug": "monoka",
    "title": "〜ものか",
    "meaning": "怎么能……；决不……；哪会……。",
    "connection": "Vる／イAい／ナAな／Nな＋ものか／もんか",
    "context": "表示强烈的否定或决心。口语中常说「もんか」。此处表示“怎么能认输呢（我决不认输）”的决心。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>怎么能……；决不……；哪会……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／イAい／ナAな／Nな＋ものか／もんか</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示强烈的否定或决心。口语中常说「もんか」。此处表示“怎么能认输呢（我决不认输）”的决心。</div>",
    "example": {
      "jp": "あんな店、二度と行く<strong>ものか</strong>。",
      "cn": "那种店，我决不再去第二次。"
    }
  },
  {
    "sourceId": 52,
    "slug": "toiumonoda",
    "title": "〜というものだ",
    "meaning": "（这才）是……；这就叫……。",
    "connection": "普通形（ナA／ N）＋というものだ",
    "context": "表示依据常理或说话人的确信，认为某事“本来就是这样的”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>（这才）是……；这就叫……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナA／ N）＋というものだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示依据常理或说话人的确信，认为某事“本来就是这样的”。</div>",
    "example": {
      "jp": "それが愛<strong>というものだ</strong>。",
      "cn": "这就叫爱。"
    }
  },
  {
    "sourceId": 53,
    "slug": "bakoso",
    "title": "〜ばこそ",
    "meaning": "正因为……（才……）。",
    "connection": "Vば／イＡければ／ナAであれば／Nであれば ＋ こそ",
    "context": "强调唯一的原因。与「ばかりに」不同，多用于积极的结果，或表示“爱之深责之切”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>正因为……（才……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vば／イＡければ／ナAであれば／Nであれば ＋ こそ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>强调唯一的原因。与「ばかりに」不同，多用于积极的结果，或表示“爱之深责之切”。</div>",
    "example": {
      "jp": "愛していれ<strong>ばこそ</strong>、厳しく育てるのです。",
      "cn": "正因为爱，才严格养育。"
    }
  },
  {
    "sourceId": 54,
    "slug": "naikotowanakatta",
    "title": "〜ないことはない",
    "meaning": "并不是不……；也不是不……。",
    "connection": "Vない／イAくない／ナAでない ＋ ことはない",
    "context": "双重否定表示消极的肯定。表示“虽然不完全是那样，但某种程度上可以这么说”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>并不是不……；也不是不……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vない／イAくない／ナAでない ＋ ことはない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>双重否定表示消极的肯定。表示“虽然不完全是那样，但某种程度上可以这么说”。</div>",
    "example": {
      "jp": "走れば間に合わ<strong>ないことはない</strong>。",
      "cn": "跑的话也不是赶不上。"
    }
  },
  {
    "sourceId": 55,
    "slug": "dake_l9",
    "title": "〜だけ",
    "meaning": "尽……；……多少就……多少。",
    "connection": "V能动态 ＋ だけ；Vたい／ほしい／好きな ＋ だけ",
    "context": "表示达到某种界限或最大限度。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>尽……；……多少就……多少。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V能动态 ＋ だけ；Vたい／ほしい／好きな ＋ だけ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示达到某种界限或最大限度。</div>",
    "example": {
      "jp": "食べたい<strong>だけ</strong>食べてください。",
      "cn": "想吃多少就吃多少。"
    }
  },
  {
    "sourceId": 56,
    "slug": "mon",
    "title": "〜もん",
    "meaning": "……嘛；因为……嘛。",
    "connection": "普通形 ＋ もん",
    "context": "「もの」的口语。用于陈述理由、辩解或撒娇。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……嘛；因为……嘛。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形 ＋ もん</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「もの」的口语。用于陈述理由、辩解或撒娇。</div>",
    "example": {
      "jp": "だって、知らなかったんだ<strong>もん</strong>。",
      "cn": "可是，人家不知道嘛。"
    }
  },
  {
    "sourceId": 57,
    "slug": "wakeniwaikanai",
    "title": "〜わけにはいかない",
    "meaning": "不能……；不可以……。",
    "connection": "Vる／Vない ＋ わけにはいかない",
    "context": "表示受社会常识、心理因素或责任感的约束，不能做某事（虽然在能力上是做得到的）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不能……；不可以……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない ＋ わけにはいかない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示受社会常识、心理因素或责任感的约束，不能做某事（虽然在能力上是做得到的）。</div>",
    "example": {
      "jp": "親友を裏切る<strong>わけにはいかない</strong>。",
      "cn": "不能背叛好朋友。"
    }
  },
  {
    "sourceId": 58,
    "slug": "nomi",
    "title": "〜のみ",
    "meaning": "只；仅；只有。",
    "connection": "Vる／N ＋ のみ",
    "context": "「だけ」的书面语。表示限定。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>只；仅；只有。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／N ＋ のみ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「だけ」的书面语。表示限定。</div>",
    "example": {
      "jp": "あとは結果を待つ<strong>のみ</strong>だ。",
      "cn": "剩下的只有等待结果了。"
    }
  },
  {
    "sourceId": 59,
    "slug": "tsumori",
    "title": "〜つもり",
    "meaning": "当作……；权当……；自以为……。",
    "connection": "Vた／イAい／ナAな／Nの ＋ つもりだ",
    "context": "表示实际上可能不是那样，但在心理上把它当作那样来处理。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>当作……；权当……；自以为……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた／イAい／ナAな／Nの ＋ つもりだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示实际上可能不是那样，但在心理上把它当作那样来处理。</div>",
    "example": {
      "jp": "旅行に行った<strong>つもり</strong>で、貯金する。",
      "cn": "权当去旅行了，把钱存起来。"
    }
  },
  {
    "sourceId": 60,
    "slug": "karamiruto",
    "title": "〜から見ると",
    "meaning": "从……来看；从……立场出发。",
    "connection": "N ＋ から見ると／から見れば／から見たら／から見て",
    "context": "表示站在某人或某组织的立场进行评价或判断。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>从……来看；从……立场出发。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ から見ると／から見れば／から見たら／から見て</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示站在某人或某组织的立场进行评价或判断。</div>",
    "example": {
      "jp": "親<strong>から見ると</strong>、彼はまだ子供だ。",
      "cn": "在父母眼里，他还只是个孩子。"
    }
  },
  {
    "sourceId": 61,
    "slug": "ippou",
    "title": "〜一方（で）",
    "meaning": "另一方面；……的同时。",
    "connection": "普通形（ナAな・ナAである／Nの・Nである） ＋ 一方（で）",
    "context": "对比同一事物的两个不同方面，或两个截然不同的事物。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>另一方面；……的同时。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・ナAである／Nの・Nである） ＋ 一方（で）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>对比同一事物的两个不同方面，或两个截然不同的事物。</div>",
    "example": {
      "jp": "彼は厳しい<strong>一方</strong>、優しいところもある。",
      "cn": "他既严厉，也有温柔的一面。"
    }
  },
  {
    "sourceId": 62,
    "slug": "kotokara",
    "title": "〜ことから",
    "meaning": "由于……；因为……；从……来看。",
    "connection": "普通形（ナAな・ナAである／Nである） ＋ ことから",
    "context": "表示判断的根据、理由，或命名的由来。书面语。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>由于……；因为……；从……来看。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・ナAである／Nである） ＋ ことから</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示判断的根据、理由，或命名的由来。书面语。</div>",
    "example": {
      "jp": "道がぬれている<strong>ことから</strong>、雨が降ったとわかった。",
      "cn": "从地面湿了这点来看，知道下过雨了。"
    }
  },
  {
    "sourceId": 63,
    "slug": "nominarazu",
    "title": "〜のみならず",
    "meaning": "不仅……而且……。",
    "connection": "普通形（ナAである／N(である)） ＋ のみならず",
    "context": "「だけでなく」的郑重书面语。后项常用「も」等助词呼应。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不仅……而且……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAである／N(である)） ＋ のみならず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「だけでなく」的郑重书面语。后项常用「も」等助词呼应。</div>",
    "example": {
      "jp": "日本<strong>のみならず</strong>、世界中で人気がある。",
      "cn": "不仅在日本，在全世界都很受欢迎。"
    }
  },
  {
    "sourceId": 64,
    "slug": "toitta",
    "title": "〜といった",
    "meaning": "……之类的；像……这样的。",
    "connection": "N ＋ といったN",
    "context": "举出典型的例子来说明一类事物。相当于「～などの」。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……之类的；像……这样的。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ といったN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>举出典型的例子来说明一类事物。相当于「～などの」。</div>",
    "example": {
      "jp": "京都や奈良<strong>といった</strong>古い町が好きだ。",
      "cn": "喜欢像京都、奈良这样的古城。"
    }
  },
  {
    "sourceId": 65,
    "slug": "nishitagatte",
    "title": "〜にしたがって",
    "meaning": "随着……；伴随着……。",
    "connection": "Vる／N ＋ にしたがって／にしたがい",
    "context": "表示随着前项的变化，后项也发生相应的变化。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>随着……；伴随着……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／N ＋ にしたがって／にしたがい</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示随着前项的变化，后项也发生相应的变化。</div>",
    "example": {
      "jp": "高く登る<strong>にしたがって</strong>、寒くなる。",
      "cn": "越往高处爬，越觉得冷。"
    }
  },
  {
    "sourceId": 66,
    "slug": "uru",
    "title": "〜得る",
    "meaning": "能够……；可能……。",
    "connection": "V（ます形） ＋ 得る（うる / える）",
    "context": "表示某种可能性。也经常会以否定形式「得ない」来表示不存在某种可能性。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>能够……；可能……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ 得る（うる / える）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种可能性。也经常会以否定形式「得ない」来表示不存在某种可能性。</div>",
    "example": {
      "jp": "そういう事故もあり<strong>得る</strong>。",
      "cn": "那种事故也是可能发生的。"
    }
  },
  {
    "sourceId": 67,
    "slug": "nihanshite",
    "title": "〜に反して",
    "meaning": "与……相反；违背……。",
    "connection": "N ＋ に反して／に反し／に反するN／に反したN",
    "context": "表示结果与预想、期待或规则完全不同。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>与……相反；违背……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に反して／に反し／に反するN／に反したN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示结果与预想、期待或规则完全不同。</div>",
    "example": {
      "jp": "予想<strong>に反して</strong>、試験は難しかった。",
      "cn": "与预想相反，考试很难。"
    }
  },
  {
    "sourceId": 68,
    "slug": "nikanshite",
    "title": "〜に関して",
    "meaning": "关于……；就……。",
    "connection": "N ＋ に関して／に関するN",
    "context": "「について」的郑重书面语。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>关于……；就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に関して／に関するN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「について」的郑重书面语。</div>",
    "example": {
      "jp": "この件<strong>に関して</strong>、ご意見をお願いします。",
      "cn": "关于这件事，请发表意见。"
    }
  },
  {
    "sourceId": 69,
    "slug": "hanmen",
    "title": "〜反面",
    "meaning": "另一方面；（虽然……）但同时也……。",
    "connection": "普通形（ナAな・ナAである／Nである） ＋ 反面／半面",
    "context": "表示同一事物具有性质完全相反的两个方面（如优缺点）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>另一方面；（虽然……）但同时也……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・ナAである／Nである） ＋ 反面／半面</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示同一事物具有性质完全相反的两个方面（如优缺点）。</div>",
    "example": {
      "jp": "便利な<strong>反面</strong>、コストがかかる。",
      "cn": "虽然方便，但另一方面成本也高。"
    }
  },
  {
    "sourceId": 70,
    "slug": "jou",
    "title": "〜上",
    "meaning": "在……上；从……方面看。",
    "connection": "N ＋ 上（じょう）",
    "context": "表示某种观点或范围，如「理論上（理论上）」「教育上（教育上）」。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……上；从……方面看。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ 上（じょう）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种观点或范围，如「理論上（理论上）」「教育上（教育上）」。</div>",
    "example": {
      "jp": "書類<strong>上</strong>は問題ない。",
      "cn": "文件上没有问题。"
    }
  },
  {
    "sourceId": 71,
    "slug": "tsutsuaru",
    "title": "〜つつある",
    "meaning": "正在……；不断……。",
    "connection": "V（ます形） ＋ つつある",
    "context": "书面语。表示某种变化正在持续进行中。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>正在……；不断……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ つつある</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>书面语。表示某种变化正在持续进行中。</div>",
    "example": {
      "jp": "景気は回復し<strong>つつある</strong>。",
      "cn": "经济正在复苏。"
    }
  },
  {
    "sourceId": 72,
    "slug": "nikagirazu",
    "title": "〜に限らず",
    "meaning": "不限于……；不仅……。",
    "connection": "N ＋ に限らず",
    "context": "表示范围不局限于前项，范围更广。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不限于……；不仅……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に限らず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示范围不局限于前项，范围更广。</div>",
    "example": {
      "jp": "平日<strong>に限らず</strong>、週末も忙しい。",
      "cn": "不仅平日，周末也很忙。"
    }
  },
  {
    "sourceId": 73,
    "slug": "omieninarimashita",
    "title": "お見えになる",
    "meaning": "来了；到了（尊他语）。",
    "connection": "お ＋ 見え ＋ になる",
    "context": "「来る」的尊他形式。比「いらっしゃる」更侧重于“出现、到达”的语感。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>来了；到了（尊他语）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>お ＋ 見え ＋ になる</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「来る」的尊他形式。比「いらっしゃる」更侧重于“出现、到达”的语感。</div>",
    "example": {
      "jp": "社長が<strong>お見えになりました</strong>。",
      "cn": "社长来了。"
    }
  },
  {
    "sourceId": 74,
    "slug": "gonegaemasu",
    "title": "ご〜願えます",
    "meaning": "能请您……吗？",
    "connection": "お ＋ VⅠ（ます形）／VⅡ（ます）形＋願う、ご ＋ サ变动词词干  ＋ 願う",
    "context": "非常有礼貌的请求表达。相当于「～していただけますか」。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>能请您……吗？</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>お ＋ VⅠ（ます形）／VⅡ（ます）形＋願う、ご ＋ サ变动词词干  ＋ 願う</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>非常有礼貌的请求表达。相当于「～していただけますか」。</div>",
    "example": {
      "jp": "<strong>ご</strong>協力<strong>願えます</strong>か。",
      "cn": "能请您协助吗？"
    }
  },
  {
    "sourceId": 75,
    "slug": "gomoushiage",
    "title": "ご〜申し上げる",
    "meaning": "（我）向您……（自谦语）。",
    "connection": "お ＋ VⅠ（ます形）／VⅡ（ます）形＋申し上げる、ご ＋ サ变动词词干  ＋ 申し上げる",
    "context": "表示自己向对方进行某种言语活动。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>（我）向您……（自谦语）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>お ＋ VⅠ（ます形）／VⅡ（ます）形＋申し上げる、ご ＋ サ变动词词干  ＋ 申し上げる</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示自己向对方进行某种言语活动。</div>",
    "example": {
      "jp": "心より<strong>お</strong>詫び<strong>申し上げます</strong>。",
      "cn": "衷心向您道歉。"
    }
  },
  {
    "sourceId": 76,
    "slug": "batoomoimasu",
    "title": "〜ばと思います",
    "meaning": "希望能……；如果……就好了。",
    "connection": "Vば／イAければ／ナAであれば ＋ と思う",
    "context": "委婉地表达自己的愿望或请求。避免直接命令对方。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>希望能……；如果……就好了。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vば／イAければ／ナAであれば ＋ と思う</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>委婉地表达自己的愿望或请求。避免直接命令对方。</div>",
    "example": {
      "jp": "ご参加いただけれ<strong>ばと思います</strong>。",
      "cn": "希望能请您参加。"
    }
  },
  {
    "sourceId": 77,
    "slug": "nitsukimashite",
    "title": "〜につきまして",
    "meaning": "关于……；就……。",
    "connection": "名詞 ＋ につきまして（は）",
    "context": "「について」的郑重礼貌形式（丁重語）。多用于商务场合。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>关于……；就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>名詞 ＋ につきまして（は）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>「について」的郑重礼貌形式（丁重語）。多用于商务场合。</div>",
    "example": {
      "jp": "詳細<strong>につきまして</strong>は、後ほど説明します。",
      "cn": "关于详情，稍后说明。"
    }
  },
  {
    "sourceId": 78,
    "slug": "nonannotte",
    "title": "〜のなんのって",
    "meaning": "……得不得了；极其……。",
    "connection": "简体句子（ナAな／Nだ） ＋ のなんのって",
    "context": "口语表达。表示程度非常惊人，带有夸张或强调的语气。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……得不得了；极其……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>简体句子（ナAな／Nだ） ＋ のなんのって</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>口语表达。表示程度非常惊人，带有夸张或强调的语气。</div>",
    "example": {
      "jp": "痛い<strong>のなんのって</strong>、涙が出たよ。",
      "cn": "疼得不得了，眼泪都出来了。"
    }
  },
  {
    "sourceId": 79,
    "slug": "tate",
    "title": "〜たて",
    "meaning": "刚……的（新鲜状态）。",
    "connection": "V（ます形） ＋ たて／たてのＮ",
    "context": "表示动作刚完成不久，且保持着新鲜、热乎的状态。常用于食品（焼きたて、炊きたて）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>刚……的（新鲜状态）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ たて／たてのＮ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示动作刚完成不久，且保持着新鲜、热乎的状态。常用于食品（焼きたて、炊きたて）。</div>",
    "example": {
      "jp": "焼き<strong>たて</strong>のパンはおいしい。",
      "cn": "刚烤好的面包很好吃。"
    }
  },
  {
    "sourceId": 80,
    "slug": "ttara",
    "title": "〜ったら",
    "meaning": "说起……；哎呀这个……。",
    "connection": "N ＋ ったら",
    "context": "提示话题。常用于亲密关系中，带有惊讶、责备或亲昵的语气。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>说起……；哎呀这个……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ ったら</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>提示话题。常用于亲密关系中，带有惊讶、责备或亲昵的语气。</div>",
    "example": {
      "jp": "うちの犬<strong>ったら</strong>、また靴を噛んだのよ。",
      "cn": "我家那只狗呀，又把鞋给咬了。"
    }
  },
  {
    "sourceId": 81,
    "slug": "youninatteiru",
    "title": "〜ようになっている",
    "meaning": "（构造/机制上）设计成……；变成……。",
    "connection": "Vる／Vない　＋　ようになっている",
    "context": "表示机器的构造、身体的机制或系统的规定等“自然会变成那样”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>（构造/机制上）设计成……；变成……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない　＋　ようになっている</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示机器的构造、身体的机制或系统的规定等“自然会变成那样”。</div>",
    "example": {
      "jp": "このドアは自動で閉まる<strong>ようになっている</strong>。",
      "cn": "这扇门设计成会自动关闭。"
    }
  },
  {
    "sourceId": 82,
    "slug": "wakeda",
    "title": "〜わけだ",
    "meaning": "难怪……；当然……。",
    "connection": "普通形（ナAな／Nの）　＋　わけだ／というわけだ",
    "context": "表示接受了某种理由后，对结果表示理解，“怪不得是那样”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>难怪……；当然……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nの）　＋　わけだ／というわけだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示接受了某种理由后，对结果表示理解，“怪不得是那样”。</div>",
    "example": {
      "jp": "暑い<strong>わけだ</strong>。気温が35度もある。",
      "cn": "难怪这么热。气温有35度呢。"
    }
  },
  {
    "sourceId": 83,
    "slug": "dokoroka",
    "title": "〜どころか",
    "meaning": "别说……反而……；哪里是……根本是……。",
    "connection": "普通形（ナA／N）　＋　どころか",
    "context": "表示事实与预想相反，程度更甚。常表示“不但没达到预期（A），反而变成了相反的坏结果（B）”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>别说……反而……；哪里是……根本是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナA／N）　＋　どころか</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示事实与预想相反，程度更甚。常表示“不但没达到预期（A），反而变成了相反的坏结果（B）”。</div>",
    "example": {
      "jp": "貯金<strong>どころか</strong>、借金だらけだ。",
      "cn": "别说存钱了，全是欠债。"
    }
  },
  {
    "sourceId": 84,
    "slug": "youja",
    "title": "〜ようじゃ",
    "meaning": "如果（像这样）……的话（就不会有好结果）。",
    "connection": "Vる／Vない　＋　ようでは／ようじゃ",
    "context": "强调前者情况，后项通常接消极的判断或结果。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>如果（像这样）……的话（就不会有好结果）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない　＋　ようでは／ようじゃ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>强调前者情况，后项通常接消极的判断或结果。</div>",
    "example": {
      "jp": "こんな問題が解けない<strong>ようじゃ</strong>、合格できない。",
      "cn": "如果连这种问题都解不开，是考不过的。"
    }
  },
  {
    "sourceId": 85,
    "slug": "butte",
    "title": "〜ぶる",
    "meaning": "装作……样子；摆出……架子。",
    "connection": "N／イA／ナA ＋ ぶる",
    "context": "表示故意装出某种样子（通常带有负面评价）。如：上品ぶる（装高雅）、偉ぶる（摆架子）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>装作……样子；摆出……架子。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N／イA／ナA ＋ ぶる</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示故意装出某种样子（通常带有负面评价）。如：上品ぶる（装高雅）、偉ぶる（摆架子）。</div>",
    "example": {
      "jp": "彼はいつも学者<strong>ぶっている</strong>。",
      "cn": "他总是装出一副学者的样子。"
    }
  },
  {
    "sourceId": 86,
    "slug": "nikagitte",
    "title": "〜に限って",
    "meaning": "偏偏……；唯独……。",
    "connection": "N ＋ に限って",
    "context": "表示唯独在某种情况下，发生了不希望发生的事；或表示对某人的特别信任（唯独他不会……）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>偏偏……；唯独……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に限って</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示唯独在某种情况下，发生了不希望发生的事；或表示对某人的特别信任（唯独他不会……）。</div>",
    "example": {
      "jp": "急いでいる時<strong>に限って</strong>、バスが来ない。",
      "cn": "偏偏在赶时间的时候，公交车不来。"
    }
  },
  {
    "sourceId": 87,
    "slug": "kotoda",
    "title": "〜ことだ",
    "meaning": "应该……；最好……。",
    "connection": "Vる／Vない ＋ ことだ",
    "context": "向对方提出建议或忠告。带有间接命令的语气。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>应该……；最好……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない ＋ ことだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>向对方提出建议或忠告。带有间接命令的语气。</div>",
    "example": {
      "jp": "合格したければ、勉強する<strong>ことだ</strong>。",
      "cn": "想合格的话，就该学习。"
    }
  },
  {
    "sourceId": 88,
    "slug": "toiu",
    "title": "〜という〜",
    "meaning": "所有的……；凡是……的……。",
    "connection": "N ＋ という ＋ 同N",
    "context": "强调毫无遗漏，包括该范围内的全部。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>所有的……；凡是……的……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ という ＋ 同N</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>强调毫无遗漏，包括该范围内的全部。</div>",
    "example": {
      "jp": "家中の壁<strong>という</strong>壁に絵が描いてある。",
      "cn": "家里所有的墙壁上都画着画。"
    }
  },
  {
    "sourceId": 89,
    "slug": "tokorodatta",
    "title": "〜ところだった",
    "meaning": "差点就……；险些……。",
    "connection": "Vる／Vない ＋ ところだった",
    "context": "表示某种状态差点发生，但实际上幸免了。常与「危うく」搭配。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>差点就……；险些……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vない ＋ ところだった</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种状态差点发生，但实际上幸免了。常与「危うく」搭配。</div>",
    "example": {
      "jp": "危うく階段から落ちる<strong>ところだった</strong>。",
      "cn": "差点从楼梯上掉下来。"
    }
  },
  {
    "sourceId": 90,
    "slug": "kurainara",
    "title": "〜くらいなら",
    "meaning": "与其……不如……。",
    "connection": "Vる ＋ くらいなら",
    "context": "表示“如果要做这种糟糕的事，那还不如做后项（虽然也不太好，但比前项强）”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>与其……不如……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ くらいなら</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示“如果要做这种糟糕的事，那还不如做后项（虽然也不太好，但比前项强）”。</div>",
    "example": {
      "jp": "彼と結婚する<strong>くらいなら</strong>、死んだほうがましだ。",
      "cn": "与其和他结婚，不如死了算了。"
    }
  },
  {
    "sourceId": 91,
    "slug": "mashi",
    "title": "〜まし",
    "meaning": "好一点；强一点；胜于……。",
    "connection": "普通形（な形だ-な） ＋ まし",
    "context": "表示虽然不完美，但相比之下还是这个更好。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>好一点；强一点；胜于……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（な形だ-な） ＋ まし</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示虽然不完美，但相比之下还是这个更好。</div>",
    "example": {
      "jp": "遅れても行かないよりは<strong>まし</strong>だ。",
      "cn": "迟到也比不去强。"
    }
  },
  {
    "sourceId": 92,
    "slug": "monogaaru",
    "title": "〜ものがある",
    "meaning": "确实感到……；有……的一面。",
    "connection": "普通形（ナAな／Nだ） ＋ ものがある",
    "context": "表示在事物中感受到某种无法忽视的特征或性质，“让人觉得……”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>确实感到……；有……的一面。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nだ） ＋ ものがある</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示在事物中感受到某种无法忽视的特征或性质，“让人觉得……”。</div>",
    "example": {
      "jp": "彼の話には説得力がある<strong>ものがある</strong>。",
      "cn": "他的话里有让人信服的地方。"
    }
  },
  {
    "sourceId": 93,
    "slug": "mai",
    "title": "〜まい",
    "meaning": "大概不……吧（否定推测）。",
    "connection": "Vる ＋ まい",
    "context": "书面语。表示否定的推测（＝ないだろう）或否定的意志（＝ないつもりだ）。此处为“应该没有人会……吧”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>大概不……吧（否定推测）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ まい</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>书面语。表示否定的推测（＝ないだろう）或否定的意志（＝ないつもりだ）。此处为“应该没有人会……吧”。</div>",
    "example": {
      "jp": "二度と行く<strong>まい</strong>。",
      "cn": "我决不再去了。"
    }
  },
  {
    "sourceId": 94,
    "slug": "nitsuke",
    "title": "〜につけ",
    "meaning": "每当……就……。",
    "connection": "Vる ＋ につけ／につけて",
    "context": "表示每次看到或听到某事，都会引发某种感想。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>每当……就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ につけ／につけて</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示每次看到或听到某事，都会引发某种感想。</div>",
    "example": {
      "jp": "その写真を見る<strong>につけ</strong>、昔を思い出す。",
      "cn": "每当看到那张照片，就会想起往事。"
    }
  },
  {
    "sourceId": 95,
    "slug": "wariniwa",
    "title": "〜わりには",
    "meaning": "虽然……但是……；以……来说却……。",
    "connection": "普通形（ナAな／Nの） ＋ わりに（は）",
    "context": "表示结果与根据前项所预想的标准不符（出乎意料）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽然……但是……；以……来说却……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nの） ＋ わりに（は）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示结果与根据前项所预想的标准不符（出乎意料）。</div>",
    "example": {
      "jp": "値段の<strong>わりには</strong>おいしい。",
      "cn": "虽说价格便宜，但挺好吃的。"
    }
  },
  {
    "sourceId": 96,
    "slug": "kakanouchini",
    "title": "〜か〜ないかのうちに",
    "meaning": "刚……就……；还没……的时候就……。",
    "connection": "Vる／Vた ＋ か ＋ Vない ＋ かのうちに",
    "context": "表示前项动作刚发生，或者几乎同时，后项动作就发生了。强调时间间隔极短。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>刚……就……；还没……的时候就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／Vた ＋ か ＋ Vない ＋ かのうちに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示前项动作刚发生，或者几乎同时，后项动作就发生了。强调时间间隔极短。</div>",
    "example": {
      "jp": "布団に入る<strong>か</strong>入らない<strong>かのうちに</strong>眠ってしまった。",
      "cn": "刚钻进被窝就睡着了。"
    }
  },
  {
    "sourceId": 97,
    "slug": "ge",
    "title": "〜げ",
    "meaning": "……的样子；……的神情。",
    "connection": "A词干 ＋ げ",
    "context": "接尾词。表示从外观看感觉是那样的。如：楽しげ（快乐的样子）、悲しげ（悲伤的样子）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……的样子；……的神情。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>A词干 ＋ げ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>接尾词。表示从外观看感觉是那样的。如：楽しげ（快乐的样子）、悲しげ（悲伤的样子）。</div>",
    "example": {
      "jp": "彼は得意<strong>げ</strong>に笑った。",
      "cn": "他得意洋洋地笑了。"
    }
  },
  {
    "sourceId": 98,
    "slug": "yarayara",
    "title": "〜やら〜やら",
    "meaning": "……啦……啦；又是……又是……。",
    "connection": "Vる／イAい／N ＋ やら",
    "context": "列举事物。常用于列举让说话人感到混乱、心情复杂或不知所措的多个事物。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……啦……啦；又是……又是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／イAい／N ＋ やら</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>列举事物。常用于列举让说话人感到混乱、心情复杂或不知所措的多个事物。</div>",
    "example": {
      "jp": "うれしい<strong>やら</strong>恥ずかしい<strong>やら</strong>で、顔が赤くなった。",
      "cn": "又高兴又害羞，脸都红了。"
    }
  },
  {
    "sourceId": 99,
    "slug": "katoumouto",
    "title": "〜かと思うと",
    "meaning": "刚一……马上就……；原以为……却……。",
    "connection": "Vた ＋ （か）と思うと／（か）と思ったら／かと思えば",
    "context": "表示前项动作发生后，紧接着发生了意想不到的后项变化。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>刚一……马上就……；原以为……却……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた ＋ （か）と思うと／（か）と思ったら／かと思えば</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示前项动作发生后，紧接着发生了意想不到的后项变化。</div>",
    "example": {
      "jp": "赤ちゃんが泣いた<strong>かと思うと</strong>、もう笑っている。",
      "cn": "婴儿刚哭完，马上又笑了。"
    }
  },
  {
    "sourceId": 100,
    "slug": "nihokanaranai",
    "title": "〜にほかならない",
    "meaning": "正是……；无非是……；不外乎……。",
    "connection": "N ＋ にほかならない",
    "context": "表示断定，“除此之外别无其他”。语气较强。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>正是……；无非是……；不外乎……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にほかならない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示断定，“除此之外别无其他”。语气较强。</div>",
    "example": {
      "jp": "成功は努力の結果<strong>にほかならない</strong>。",
      "cn": "成功无非是努力的结果。"
    }
  },
  {
    "sourceId": 101,
    "slug": "nisuginakatta",
    "title": "〜にすぎない",
    "meaning": "只不过是……；仅仅是……。",
    "connection": "Vる・Vた／N ＋ にすぎない",
    "context": "表示程度很低，“只不过是那种程度而已”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>只不过是……；仅仅是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vた／N ＋ にすぎない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示程度很低，“只不过是那种程度而已”。</div>",
    "example": {
      "jp": "私は事務員<strong>にすぎない</strong>。",
      "cn": "我只不过是个办事员。"
    }
  },
  {
    "sourceId": 102,
    "slug": "ueni",
    "title": "〜上に",
    "meaning": "而且；加上；不仅……。",
    "connection": "普通形（ナAな・である／Nである） ＋ 上（に）",
    "context": "表示累加。好事加好事，或坏事加坏事。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>而且；加上；不仅……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな・である／Nである） ＋ 上（に）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示累加。好事加好事，或坏事加坏事。</div>",
    "example": {
      "jp": "道に迷った<strong>上に</strong>、雨も降ってきた。",
      "cn": "不仅迷路了，还下起了雨。"
    }
  },
  {
    "sourceId": 103,
    "slug": "toittemo",
    "title": "〜といっても",
    "meaning": "虽说……（但是……）；即使说……。",
    "connection": "N／普通形 ＋ といっても／といいましても",
    "context": "表示实际情况并不像根据前项词语所想象的那样。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽说……（但是……）；即使说……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N／普通形 ＋ といっても／といいましても</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示实际情况并不像根据前项词语所想象的那样。</div>",
    "example": {
      "jp": "料理ができる<strong>といっても</strong>、卵焼きぐらいだ。",
      "cn": "虽说会做饭，但也就会做个煎鸡蛋。"
    }
  },
  {
    "sourceId": 104,
    "slug": "nikagiru",
    "title": "〜に限る",
    "meaning": "……最好；最好是……。",
    "connection": "Vる・Vない／N ＋ に限る",
    "context": "表示说话人主观认为这是最好的选择。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……最好；最好是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vない／N ＋ に限る</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示说话人主观认为这是最好的选择。</div>",
    "example": {
      "jp": "夏はビール<strong>に限る</strong>。",
      "cn": "夏天喝啤酒最棒了。"
    }
  },
  {
    "sourceId": 105,
    "slug": "dakeatte",
    "title": "〜だけあって",
    "meaning": "不愧是……；正因为……（所以果然……）。",
    "connection": "N／普通形（ナＡな） ＋ だけあって／だけに",
    "context": "表示因为具备某种条件，所以产生了相符的（好的）结果。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不愧是……；正因为……（所以果然……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N／普通形（ナＡな） ＋ だけあって／だけに</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示因为具备某种条件，所以产生了相符的（好的）结果。</div>",
    "example": {
      "jp": "安い<strong>だけあって</strong>、品質が悪い。",
      "cn": "正因为便宜，所以质量很差。）\n※通常用于褒义，此处为特例。本文中指“不愧是人气店，果然排长队”。"
    }
  },
  {
    "sourceId": 106,
    "slug": "nishironishiro",
    "title": "〜にしろ〜にしろ",
    "meaning": "无论……还是……；……也好……也好。",
    "connection": "普通形（ナA・ナAである／N・Nである） ＋ にしろ／にしても／にせよ",
    "context": "列举同类事物，表示无论哪种情况都一样。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>无论……还是……；……也好……也好。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナA・ナAである／N・Nである） ＋ にしろ／にしても／にせよ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>列举同类事物，表示无论哪种情况都一样。</div>",
    "example": {
      "jp": "行く<strong>にしろ</strong>行かない<strong>にしろ</strong>、連絡してください。",
      "cn": "不管去不去，都请联系我。"
    }
  },
  {
    "sourceId": 107,
    "slug": "toka",
    "title": "〜とか",
    "meaning": "听说……；据说……。",
    "connection": "普通形 ＋ とか",
    "context": "表示从别人那里听来的传闻，但不确定情报的准确性。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>听说……；据说……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形 ＋ とか</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示从别人那里听来的传闻，但不确定情报的准确性。</div>",
    "example": {
      "jp": "彼は来月結婚する<strong>とか</strong>。",
      "cn": "听说他下个月要结婚。"
    }
  },
  {
    "sourceId": 108,
    "slug": "nisotte",
    "title": "〜に沿って",
    "meaning": "沿着……；顺应……；按照……。",
    "connection": "N ＋ にそって／にそうN／にそったN",
    "context": "表示顺着线状物移动，或遵循规则、方针、流程等。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>沿着……；顺应……；按照……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にそって／にそうN／にそったN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示顺着线状物移动，或遵循规则、方针、流程等。</div>",
    "example": {
      "jp": "計画<strong>に沿って</strong>進める。",
      "cn": "按照计划进行。"
    }
  },
  {
    "sourceId": 109,
    "slug": "nikaketeha",
    "title": "〜にかけては",
    "meaning": "在……方面；论……的话。",
    "connection": "N ＋ にかけては",
    "context": "后项通常接评价极高的话，表示在该领域无人能敌或非常有自信。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……方面；论……的话。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にかけては</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>后项通常接评价极高的话，表示在该领域无人能敌或非常有自信。</div>",
    "example": {
      "jp": "料理<strong>にかけては</strong>、彼にかなう人はいない。",
      "cn": "论做菜，没人比得过他。"
    }
  },
  {
    "sourceId": 110,
    "slug": "naikotoniwa",
    "title": "〜ないことには",
    "meaning": "如果不……就（不）……。",
    "connection": "動詞（ない形） ＋ ことには",
    "context": "表示前项是后项成立的必要条件。后项通常是否定意思。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>如果不……就（不）……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>動詞（ない形） ＋ ことには</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示前项是后项成立的必要条件。后项通常是否定意思。</div>",
    "example": {
      "jp": "やってみ<strong>ないことには</strong>、できるかどうかわからない。",
      "cn": "不试一下的话，不知道能不能行。"
    }
  },
  {
    "sourceId": 111,
    "slug": "gachi",
    "title": "〜がち",
    "meaning": "容易……；往往会……。",
    "connection": "V（ます形） / N ＋ がち",
    "context": "表示某种消极的倾向或状态经常发生。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>容易……；往往会……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） / N ＋ がち</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种消极的倾向或状态经常发生。</div>",
    "example": {
      "jp": "最近、病気<strong>がち</strong>だ。",
      "cn": "最近老是生病。"
    }
  },
  {
    "sourceId": 112,
    "slug": "tsutsumo",
    "title": "〜つつ（も）",
    "meaning": "虽然……但是……。",
    "connection": "V（ます形） ＋ つつ（も）",
    "context": "表示逆接。心里想着A，行动却是B。常用于反省或内心矛盾。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>虽然……但是……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ つつ（も）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示逆接。心里想着A，行动却是B。常用于反省或内心矛盾。</div>",
    "example": {
      "jp": "体に悪いと知り<strong>つつ</strong>、タバコを吸っている。",
      "cn": "虽然知道对身体不好，但还是在吸烟。"
    }
  },
  {
    "sourceId": 113,
    "slug": "toshitara",
    "title": "〜としたら",
    "meaning": "如果……的话；假设……。",
    "connection": "普通形 ＋ としたら／とすると／とすれば",
    "context": "提出一个假定条件，思考在这种情况下会怎么做或会发生什么。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>如果……的话；假设……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形 ＋ としたら／とすると／とすれば</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>提出一个假定条件，思考在这种情况下会怎么做或会发生什么。</div>",
    "example": {
      "jp": "生まれ変われる<strong>としたら</strong>、何になりたいですか。",
      "cn": "如果能重生，你想变成什么？"
    }
  },
  {
    "sourceId": 114,
    "slug": "shidai",
    "title": "〜次第",
    "meaning": "全凭……；取决于……；要看……而定。",
    "connection": "N ＋ 次第で／次第だ",
    "context": "表示结果如何完全由该因素决定。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>全凭……；取决于……；要看……而定。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ 次第で／次第だ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示结果如何完全由该因素决定。</div>",
    "example": {
      "jp": "成功するかどうかは、君の努力<strong>次第</strong>だ。",
      "cn": "能否成功，全凭你的努力。"
    }
  },
  {
    "sourceId": 115,
    "slug": "ippou_l19",
    "title": "〜一方だ",
    "meaning": "越来越……；不断……。",
    "connection": "Vる ＋ 一方だ",
    "context": "表示某种状态朝着一个方向不断发展。多用于消极变化，但也可用于中性。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>越来越……；不断……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる ＋ 一方だ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种状态朝着一个方向不断发展。多用于消极变化，但也可用于中性。</div>\n                       <div class=\"desc-row supplement\"><span class=\"desc-label supplement-label\">【辨析】</span><span class=\"desc-text\"><strong>〜ばかりだ</strong>：也表示“越来越……”，但<strong>仅限于消极、不好</strong>的变化（如：悪くなるばかりだ）。而「一方だ」适用范围稍广，但在表示“竞争激烈、物价上涨”等语境下两者常可互换。</span></div>",
    "example": {
      "jp": "最近、残業が増える<strong>一方だ</strong>。",
      "cn": "最近加班越来越多了。"
    }
  },
  {
    "sourceId": 116,
    "slug": "nisakidatte",
    "title": "〜に先立って",
    "meaning": "在……之前；先于……。",
    "connection": "N ＋ に先立って／に先立ち／に先立つN",
    "context": "郑重的书面语。表示在进行重要活动或事件之前，先做准备工作。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……之前；先于……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に先立って／に先立ち／に先立つN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>郑重的书面语。表示在进行重要活动或事件之前，先做准备工作。</div>",
    "example": {
      "jp": "会議<strong>に先立って</strong>、資料を配ります。",
      "cn": "在会议开始前，分发资料。"
    }
  },
  {
    "sourceId": 117,
    "slug": "uede",
    "title": "〜上で",
    "meaning": "在……（基础）之上；……之后（再……）。",
    "connection": "Vた／Nの ＋ 上（で）／上（で）のN",
    "context": "表示以前项动作为前提或基础，然后再进行后项动作。强调顺序和前提。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……（基础）之上；……之后（再……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた／Nの ＋ 上（で）／上（で）のN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示以前项动作为前提或基础，然后再进行后项动作。强调顺序和前提。</div>",
    "example": {
      "jp": "よく考えた<strong>上で</strong>、返事をします。",
      "cn": "深思熟虑之后，再给您答复。"
    }
  },
  {
    "sourceId": 118,
    "slug": "nikotaeta",
    "title": "〜にこたえて",
    "meaning": "响应……；应……（要求/期待）。",
    "connection": "N ＋ にこたえて／にこたえたN",
    "context": "表示顺应对方的期待、要求、呼声等，做出相应的行动。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>响应……；应……（要求/期待）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ にこたえて／にこたえたN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示顺应对方的期待、要求、呼声等，做出相应的行动。</div>",
    "example": {
      "jp": "アンコール<strong>にこたえて</strong>、もう一曲歌った。",
      "cn": "应观众要求，又唱了一首歌。"
    }
  },
  {
    "sourceId": 119,
    "slug": "kotonisuru",
    "title": "〜ことにする",
    "meaning": "当做……；当作……。",
    "connection": "Vた・Vなかった ＋ ことにする",
    "context": "表示违背事实，人为地当做某种情况处理。文中「なかったことにする」意为“当做没发生过”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>当做……；当作……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた・Vなかった ＋ ことにする</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示违背事实，人为地当做某种情况处理。文中「なかったことにする」意为“当做没发生过”。</div>",
    "example": {
      "jp": "聞かなかった<strong>ことにする</strong>。",
      "cn": "当做没听到。"
    }
  },
  {
    "sourceId": 120,
    "slug": "tsumori_l20",
    "title": "〜つもり",
    "meaning": "自以为……；觉得是……（但实际可能不是）。",
    "connection": "Vる・Vた・Vている／Nの ＋ つもりだ",
    "context": "表示主观的认定，常带有“实际上别人不这么认为”或“结果并非如此”的含意。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>自以为……；觉得是……（但实际可能不是）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる・Vた・Vている／Nの ＋ つもりだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示主观的认定，常带有“实际上别人不这么认为”或“结果并非如此”的含意。</div>",
    "example": {
      "jp": "わかっている<strong>つもり</strong>だが、実はわかっていない。",
      "cn": "自以为懂了，其实没懂。"
    }
  },
  {
    "sourceId": 121,
    "slug": "tenaranai",
    "title": "〜てならない",
    "meaning": "……得不得了；不由得……。",
    "connection": "Vて／イAくて／ナAで ＋ ならない",
    "context": "表示某种感情或感觉非常强烈，无法控制。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……得不得了；不由得……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vて／イAくて／ナAで ＋ ならない</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示某种感情或感觉非常强烈，无法控制。</div>",
    "example": {
      "jp": "故郷が恋しくて<strong>ならない</strong>。",
      "cn": "思乡之情难以抑制。"
    }
  },
  {
    "sourceId": 122,
    "slug": "mononara",
    "title": "〜ものなら",
    "meaning": "如果能……的话（真想……）。",
    "connection": "Vる（含有可能意义的动词） ＋ ものなら",
    "context": "假设一种难以实现的愿望。后项常接“希望、命令”等表达。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>如果能……的话（真想……）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる（含有可能意义的动词） ＋ ものなら</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>假设一种难以实现的愿望。后项常接“希望、命令”等表达。</div>",
    "example": {
      "jp": "帰れる<strong>ものなら</strong>、今すぐ帰りたい。",
      "cn": "如果能回去的话，真想现在就回去。"
    }
  },
  {
    "sourceId": 123,
    "slug": "ukamaika",
    "title": "〜うか〜まいか",
    "meaning": "（做）还是不（做）；……呢还是不……呢。",
    "connection": "V（よ）う ＋ か ＋ Vるまい ＋ か",
    "context": "表示在做与不做之间犹豫不决。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>（做）还是不（做）；……呢还是不……呢。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（よ）う ＋ か ＋ Vるまい ＋ か</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示在做与不做之间犹豫不决。</div>",
    "example": {
      "jp": "食べよう<strong>か</strong>食べ<strong>まいか</strong>迷っている。",
      "cn": "正在犹豫吃还是不吃。"
    }
  },
  {
    "sourceId": 124,
    "slug": "sue",
    "title": "〜末（に）",
    "meaning": "经过……之后；……的结果。",
    "connection": "Vた／Nの ＋ 末（に）",
    "context": "表示经过很长时间或艰难的过程后，最终得出的结果。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>经过……之后；……的结果。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vた／Nの ＋ 末（に）</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示经过很长时间或艰难的过程后，最终得出的结果。</div>",
    "example": {
      "jp": "考えた<strong>末</strong>、辞職することにした。",
      "cn": "经过深思熟虑，决定辞职。"
    }
  },
  {
    "sourceId": 125,
    "slug": "tatoetemo",
    "title": "たとえ〜ても",
    "meaning": "即使……也……；纵使……也……。",
    "connection": "たとえ ＋ Vても／イAくても／ナAでも／Nでも",
    "context": "表示假定条件下的让步。即使前项条件再极端，后项的结果或决心也不会改变。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>即使……也……；纵使……也……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>たとえ ＋ Vても／イAくても／ナAでも／Nでも</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示假定条件下的让步。即使前项条件再极端，后项的结果或决心也不会改变。</div>",
    "example": {
      "jp": "<strong>たとえ</strong>反対され<strong>ても</strong>、私は行く。",
      "cn": "即使被反对，我也要去。"
    }
  },
  {
    "sourceId": 126,
    "slug": "gatai",
    "title": "〜がたい",
    "meaning": "难以……；很难……。",
    "connection": "V（ます形） ＋ がたい",
    "context": "多表示心理上、情感上或立场上感觉很难做某事。常搭配：許しがたい（难辞其咎/不可原谅）、信じがたい（难以置信）、理解しがたい（难以理解）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>难以……；很难……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ がたい</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>多表示心理上、情感上或立场上感觉很难做某事。常搭配：許しがたい（难辞其咎/不可原谅）、信じがたい（难以置信）、理解しがたい（难以理解）。</div>",
    "example": {
      "jp": "それは想像し<strong>がたい</strong>ことだ。",
      "cn": "那是难以想象的事。"
    }
  },
  {
    "sourceId": 127,
    "slug": "mokamawazu",
    "title": "〜もかまわず",
    "meaning": "不顾……；不管……。",
    "connection": "N ＋ もかまわず",
    "context": "表示不在意周围的眼光或状况，做某事。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>不顾……；不管……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ もかまわず</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示不在意周围的眼光或状况，做某事。</div>",
    "example": {
      "jp": "人目<strong>もかまわず</strong>泣いた。",
      "cn": "不顾旁人的眼光哭了起来。"
    }
  },
  {
    "sourceId": 128,
    "slug": "amari",
    "title": "〜あまり",
    "meaning": "因过于……而……。",
    "connection": "Vる／ナAな／Nの ＋ あまり",
    "context": "表示由于某种情感或状态的程度过甚，导致了某种（通常是消极的或意外的）结果。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>因过于……而……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／ナAな／Nの ＋ あまり</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示由于某种情感或状态的程度过甚，导致了某种（通常是消极的或意外的）结果。</div>",
    "example": {
      "jp": "驚きの<strong>あまり</strong>、声が出なかった。",
      "cn": "因过度惊讶而说不出话来。"
    }
  },
  {
    "sourceId": 129,
    "slug": "okomete",
    "title": "〜を込めて",
    "meaning": "倾注……；饱含……；带着……（心情）。",
    "connection": "N ＋ を込めて",
    "context": "表示做某事时投入了某种感情或力量。常搭配：愛、感謝、祈り、気持ち。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>倾注……；饱含……；带着……（心情）。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ を込めて</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示做某事时投入了某种感情或力量。常搭配：愛、感謝、祈り、気持ち。</div>",
    "example": {
      "jp": "感謝の気持ち<strong>を込めて</strong>歌う。",
      "cn": "饱含感激之情歌唱。"
    }
  },
  {
    "sourceId": 130,
    "slug": "mobamo",
    "title": "〜も〜ば〜も",
    "meaning": "既……又……；有……也有……。",
    "connection": "N ＋ も ＋ Vば／イAけれ／ナAなら（ば） ＋ N ＋ も",
    "context": "列举两个并列的事物或情况。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>既……又……；有……也有……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ も ＋ Vば／イAけれ／ナAなら（ば） ＋ N ＋ も</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>列举两个并列的事物或情况。</div>",
    "example": {
      "jp": "彼は英語<strong>も</strong>話せれ<strong>ば</strong>、中国語<strong>も</strong>話せる。",
      "cn": "他既会说英语，也会说中文。"
    }
  },
  {
    "sourceId": 131,
    "slug": "nuku",
    "title": "〜ぬく",
    "meaning": "……到底；坚持到最后；非常……。",
    "connection": "V（ます形） ＋ ぬく",
    "context": "表示克服困难坚持做完某事，或表示程度之深。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>……到底；坚持到最后；非常……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>V（ます形） ＋ ぬく</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示克服困难坚持做完某事，或表示程度之深。</div>",
    "example": {
      "jp": "最後まで走り<strong>ぬく</strong>。",
      "cn": "坚持跑到底。"
    }
  },
  {
    "sourceId": 132,
    "slug": "monoda",
    "title": "〜ものだ",
    "meaning": "（过去）常常……；曾经……。",
    "connection": "普通形（ナAな／Nだ） ＋ ものだ",
    "context": "表示怀念过去经常发生的事情或状态。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>（过去）常常……；曾经……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nだ） ＋ ものだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示怀念过去经常发生的事情或状态。</div>",
    "example": {
      "jp": "子供のころ、よくこの川で遊んだ<strong>ものだ</strong>。",
      "cn": "小时候经常在这条河里玩耍。"
    }
  },
  {
    "sourceId": 133,
    "slug": "womegutte",
    "title": "〜をめぐって",
    "meaning": "围绕……；就……。",
    "connection": "N ＋ をめぐって／をめぐるN",
    "context": "表示以后项动作（争论、对立、讨论等）为中心或焦点。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>围绕……；就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ をめぐって／をめぐるN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示以后项动作（争论、对立、讨论等）为中心或焦点。</div>",
    "example": {
      "jp": "遺産<strong>をめぐって</strong>争う。",
      "cn": "围绕遗产进行争夺。"
    }
  },
  {
    "sourceId": 134,
    "slug": "wakeda_l22",
    "title": "〜わけだ",
    "meaning": "当然……；难怪……；自然就……。",
    "connection": "普通形（ナAな／Nの） ＋ わけだ／というわけだ",
    "context": "表示从事物的发展趋势来看，得出某种结果是理所当然的。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>当然……；难怪……；自然就……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形（ナAな／Nの） ＋ わけだ／というわけだ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示从事物的发展趋势来看，得出某种结果是理所当然的。</div>",
    "example": {
      "jp": "円高だから、輸入品が安くなる<strong>わけだ</strong>。",
      "cn": "日元升值，进口商品自然就便宜了。"
    }
  },
  {
    "sourceId": 135,
    "slug": "niatatte",
    "title": "〜にあたって",
    "meaning": "在……之际；正当……的时候。",
    "connection": "Vる／N ＋ にあたって／にあたり",
    "context": "书面语。表示在进行某项重要活动或面临某个重要阶段时。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>在……之际；正当……的时候。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vる／N ＋ にあたって／にあたり</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>书面语。表示在进行某项重要活动或面临某个重要阶段时。</div>",
    "example": {
      "jp": "開会<strong>にあたって</strong>、一言ご挨拶申し上げます。",
      "cn": "值此开会之际，请允许我讲几句话。"
    }
  },
  {
    "sourceId": 136,
    "slug": "nikuwaete",
    "title": "〜に加えて",
    "meaning": "加上……；除了……之外还……。",
    "connection": "N ＋ に加えて／に加え",
    "context": "表示在某事物的基础上，又增加了新的事物（累加）。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>加上……；除了……之外还……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に加えて／に加え</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示在某事物的基础上，又增加了新的事物（累加）。</div>",
    "example": {
      "jp": "風<strong>に加えて</strong>、雨も激しくなった。",
      "cn": "风加上雨，变得更猛烈了。"
    }
  },
  {
    "sourceId": 137,
    "slug": "toshitemo",
    "title": "〜としても",
    "meaning": "即使……也……；就算……也……。",
    "connection": "普通形 ＋ としても／としたって",
    "context": "表示让步假定。即使前项假设成立，后项结果也不会受影响，或者后项情况依然困难。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>即使……也……；就算……也……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>普通形 ＋ としても／としたって</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示让步假定。即使前项假设成立，后项结果也不会受影响，或者后项情况依然困难。</div>",
    "example": {
      "jp": "謝った<strong>としても</strong>、許さない。",
      "cn": "即使道歉了，我也不会原谅。"
    }
  },
  {
    "sourceId": 138,
    "slug": "nimotozuite",
    "title": "〜に基づいて",
    "meaning": "基于……；根据……。",
    "connection": "N ＋ に基づいて／に基づき／に基づくN／に基づいたN",
    "context": "表示以此为基础、依据或根基。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>基于……；根据……。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>N ＋ に基づいて／に基づき／に基づくN／に基づいたN</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>表示以此为基础、依据或根基。</div>",
    "example": {
      "jp": "法律<strong>に基づいて</strong>判断する。",
      "cn": "根据法律进行判断。"
    }
  },
  {
    "sourceId": 139,
    "slug": "tekoso",
    "title": "〜てこそ",
    "meaning": "只有……才……；非……不可。",
    "connection": "Vて ＋ こそ",
    "context": "强调前项是后项成立的必要条件。“只有做了这件事，才有意义/才明白”。",
    "descHtml": "<div class=\"desc-row\"><span class=\"desc-label\">【含义】</span>只有……才……；非……不可。</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【接续】</span>Vて ＋ こそ</div>\n                       <div class=\"desc-row\"><span class=\"desc-label\">【语境】</span>强调前项是后项成立的必要条件。“只有做了这件事，才有意义/才明白”。</div>",
    "example": {
      "jp": "健康であっ<strong>てこそ</strong>、仕事ができる。",
      "cn": "只有身体健康，才能工作。"
    }
  }
];

  function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function normalizeLevels(options) {
    const levels = options && Array.isArray(options.levels) && options.levels.length ? options.levels : ['N2', 'N3'];
    return new Set(levels);
  }

  const core = Array.isArray(window.GrammarShared.core) ? window.GrammarShared.core : [];
  const tags = Array.isArray(window.GrammarShared.tags) ? window.GrammarShared.tags : [];
  const collections = window.GrammarShared.collections || { specialCollections: [], similarityGroups: [] };

  const coreById = new Map(core.map((item) => [item.id, item]));
  const tryIdToCanonicalId = new Map();
  const canonicalIdToTryId = new Map();

  core.forEach((item) => {
    if (item && item.legacy && item.legacy.tryCenterId != null && !canonicalIdToTryId.has(item.id)) {
      canonicalIdToTryId.set(item.id, item.legacy.tryCenterId);
    }
  });

  tags.forEach((item) => {
    if (item && item.legacy && item.legacy.tryCenterId != null) {
      tryIdToCanonicalId.set(item.legacy.tryCenterId, item.id);
      if (!canonicalIdToTryId.has(item.id)) {
        canonicalIdToTryId.set(item.id, item.legacy.tryCenterId);
      }
    }
  });

  const n2CardsBySourceId = new Map(TRY_N2_LESSON_CARDS.map((item) => [item.sourceId, item]));

  function buildTryCenterEntry(entry) {
    const view = clone(entry);
    if (view.book !== 'N2') {
      return view;
    }

    const card = n2CardsBySourceId.get(view.sourceId);
    if (!card) {
      return view;
    }

    view.meaning = card.meaning || view.meaning || '';
    view.connection = card.connection || view.connection || '';
    view.explanation = card.context || card.meaning || view.explanation || '';
    view.example = clone(card.example || view.example || {});
    return view;
  }

  const tryCenterDataset = LEGACY_TRY_CENTER_ENTRIES.map((entry) => buildTryCenterEntry(entry));

  const repo = {
    getCanonicalGrammar(options) {
      const levels = normalizeLevels(options);
      return clone(core.filter((item) => levels.has(item.level)));
    },

    getGrammarById(id) {
      return clone(coreById.get(id) || null);
    },

    getTryCenterDataset(options) {
      const levels = normalizeLevels(options);
      return clone(tryCenterDataset.filter((item) => levels.has(item.book)));
    },

    getTryCenterSpecialCollections() {
      return clone((collections.specialCollections || []).map((family) => {
        const view = { familyKey: family.familyKey, groups: [] };
        (family.groups || []).forEach((group) => {
          view.groups.push({ groupKey: group.groupKey, ids: clone(group.legacyTryIds || []) });
        });
        return view;
      }));
    },

    getTryCenterSimilarityGroups() {
      return clone((collections.similarityGroups || []).map((group) => clone(group.legacyTryIds || [])));
    },

    resolveCanonicalIdFromTryId(tryCenterId) {
      return tryIdToCanonicalId.get(tryCenterId) || null;
    },

    resolveTryIdFromCanonicalId(id) {
      return canonicalIdToTryId.get(id) || null;
    },
  };

  window.GrammarShared.repo = repo;
})();
