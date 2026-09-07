(function () {
    "use strict";

    const particleOrder = ["だけ", "のみ", "ばかり", "まで", "くらい", "ほど", "ずつ", "きり", "か", "やら", "など"];

    const particleData = {
        "だけ": {
            desc: "把范围<strong class='usage-key'>限定在前项</strong>，或表示能够达到的<strong class='usage-key'>全部程度</strong>",
            usages: [
                {
                    title: "限定人、事物或数量的范围",
                    definition: "表示范围<strong class='usage-key'>只限于前项</strong>，其他同类的人或事物不包括在内。",
                    connection: "名词／动词普通形＋だけ",
                    note: "「だけ」<strong class='usage-key'>本身只负责限定范围</strong>，通常不包含说话人的负面评价。",
                    examples: [
                        { text: "必要な資料<strong class='target-particle'>だけ</strong>を机の上に置いてください。", translation: "请只把必要的资料放在桌上。" },
                        { text: "今日は水<strong class='target-particle'>だけ</strong>を飲みました。", translation: "今天只喝了水。" }
                    ],
                    relatedGrammar: {
                        lead: "「只限于前项」这一限定意义与其他形式结合后，可以进一步表示<strong class='usage-key'>条件不足、最低限度、范围追加</strong>或<strong class='usage-key'>行为徒劳</strong>。",
                        items: [
                            {
                                sourceId: "supp-n1-review-016",
                                relation: "把前项限定为唯一条件，并说明<strong class='usage-key'>仅凭这一条件仍不充分</strong>。",
                                explanation: "表示如果仅仅具备前项的单一条件或程度，<strong class='usage-key'>仍然无法达到期望的结果</strong>，说明目前的条件尚不充分。后项多使用<strong class='usage-key'>「〜ない」「〜できない」「〜とは言えない」</strong>等否定、不能或不足的表达。",
                                note: "后项通常使用<strong class='usage-key'>否定、不能、困难或不足</strong>等表达。",
                                examples: [
                                    { text: "知識がある<strong class='target-particle'>だけでは</strong>、この仕事はうまくできません。", translation: "光有知识是做不好这份工作的。" },
                                    { text: "単語を覚える<strong class='target-particle'>だけでは</strong>、自然な会話ができるようにはなりません。", translation: "只记住单词，还无法做到自然地进行会话。" }
                                ]
                            },
                            {
                                sourceId: "supp-n1-review-018",
                                relation: "把前项作为<strong class='usage-key'>最低限度</strong>提出，或表示<strong class='usage-key'>仅有前项就足以产生后项</strong>。",
                                explanation: "表示即使只具备<strong class='usage-key'>最低限度的条件、动作或数量</strong>，也可以接受，或已经足以产生后项的结果和情感。提出最低要求时，后项常用<strong class='usage-key'>「〜てください」「〜てほしい」</strong>；表示仅凭前项便产生感受时，常接「うれしい」「怖い」「安心だ」等情感或评价表达。",
                                note: "根据语境，可理解为“<strong class='usage-key'>哪怕只是……</strong>”或“<strong class='usage-key'>光是……就……</strong>”。",
                                examples: [
                                    { text: "その事故のことは、想像する<strong class='target-particle'>だけでも</strong>恐ろしいです。", translation: "关于那场事故，光是想象一下就觉得可怕。" },
                                    { text: "全部は無理でも、名前<strong class='target-particle'>だけでも</strong>覚えてください。", translation: "即使无法全部记住，至少请记住名字。" }
                                ]
                            },
                            {
                                sourceId: "supp-n1-review-035",
                                relation: "否定范围只限于前项，并在后项<strong class='usage-key'>继续追加同类内容</strong>。",
                                explanation: "表示事物的范围<strong class='usage-key'>不只限于前项</strong>，还会继续包含后项所说的内容，用于追加或递进说明。后项通常用<strong class='usage-key'>「も」</strong>承接；需要突出意外项目时，也常使用「まで」「さえ」。",
                                note: "后项经常使用「も」，构成<strong class='usage-key'>“不仅……而且……”</strong>的递进关系。",
                                examples: [
                                    { text: "このレストランは料理がおいしい<strong class='target-particle'>だけでなく</strong>、サービスもすばらしいです。", translation: "这家餐厅不仅菜品好吃，服务也很出色。" },
                                    { text: "留学では、言葉<strong class='target-particle'>だけでなく</strong>、その国の文化も学べます。", translation: "留学时，不仅能学习语言，也能了解那个国家的文化。" }
                                ]
                            },
                            {
                                sourceId: "supp-n1-review-017",
                                relation: "把结果限定为“无益”，表示实施前项动作也<strong class='usage-key'>不会产生有效结果</strong>。",
                                explanation: "表示即使实施前项动作，最终也只是徒劳，强调该行为<strong class='usage-key'>不会带来有效结果</strong>，继续进行也<strong class='usage-key'>没有实际意义</strong>。",
                                note: "用于表达说话人认为继续该行为<strong class='usage-key'>没有意义或不值得</strong>。",
                                examples: [
                                    { text: "彼は話を聞かないので、これ以上説得する<strong class='target-particle'>だけ無駄</strong>です。", translation: "他根本听不进去，再继续说服也是徒劳。" },
                                    { text: "今から急いでも間に合わないので、走る<strong class='target-particle'>だけ無駄</strong>です。", translation: "现在再着急也赶不上了，跑过去也只是白费力气。" }
                                ]
                            }
                        ]
                    }
                },
                {
                    title: "表示能力、条件或愿望所允许的程度范围",
                    definition: "表示在能力、愿望或条件允许的范围内，<strong class='usage-key'>尽可能达到相应程度</strong>。",
                    connection: "动词普通形＋だけ",
                    note: "常见于<strong class='usage-key'>表示能力、需要或愿望范围</strong>的「できるだけ」「必要なだけ」「〜たいだけ」等形式。",
                    examples: [
                        { text: "食べたい<strong class='target-particle'>だけ</strong>食べてください。", translation: "想吃多少就请吃多少。" },
                        { text: "できる<strong class='target-particle'>だけ</strong>早く返事してください。", translation: "请尽可能早些回复。" }
                    ],
                    relatedGrammar: {
                        lead: "「达到相应程度」的意义进一步发展后，可以表示姑且进行尝试，或说明后项结果与前项的条件、身份及特殊性具有紧密联系。",
                        items: [
                            {
                                sourceId: "n2-178",
                                displayTitle: "VるだけVてみる",
                                relation: "即使未必能够得到理想结果，也先在可行范围内<strong class='usage-key'>姑且实施前项动作</strong>。",
                                explanation: "在预想到可能无法成功的情况下，仍把前项动作作为<strong class='usage-key'>最低限度的尝试</strong>先实施一次，表示姑且试试看。前后通常重复同一个动词，后半使用<strong class='usage-key'>「Vてみる」</strong>，句末常见「〜てみよう」「〜てみます」。",
                                note: "前后使用<strong class='usage-key'>同一个动词</strong>，后项常与表示尝试的「〜てみる」搭配。",
                                examples: [
                                    { text: "行く<strong class='target-particle'>だけ</strong>行ってみましょう。", translation: "我们姑且去看看吧。" },
                                    { text: "断られるかもしれませんが、頼む<strong class='target-particle'>だけ</strong>頼んでみます。", translation: "虽然可能会被拒绝，但我还是姑且试着拜托一下。" }
                                ]
                            },
                            {
                                sourceId: "learn-dake-ni",
                                displayTitle: "〜だけあって／〜だけのことがある",
                                displayMeaning: "不愧是……／确实值得……",
                                displayConnection: "动词普通形／い形容词普通形／な形容词词干＋な／名词＋（である）＋だけあって・だけのことがある",
                                relation: "后项的结果或评价与前项所具有的身份、经历或条件<strong class='usage-key'>十分相称</strong>。",
                                explanation: "「Aだけあって、B」以前项作为理由，说明后项的良好结果或评价<strong class='usage-key'>符合A所具有的身份、经历或客观条件</strong>；后项多为称赞、能力或良好结果，也常与「さすが」「やはり」呼应。「B。Aだけのことがある」则常放在评价之后，表示前项的努力、费用或条件<strong class='usage-key'>确实产生了相应价值，并没有白费</strong>。",
                                note: "两种形式通常用于相称的正面结果。「だけのことはある」是教材中更常见的固定形式；使用「だけのことがある」时，也表示前项确实具有与结果相称的价值。",
                                examples: [
                                    { text: "彼はスポーツ選手<strong class='target-particle'>だけあって</strong>、体格がいいです。", translation: "他不愧是运动员，体格很好。" },
                                    { text: "この料理は本当においしい。三時間かけて作った<strong class='target-particle'>だけのことがある</strong>。", translation: "这道菜确实很好吃，花三个小时制作果然没有白费。" }
                                ]
                            },
                            {
                                sourceId: "n2-236",
                                displayTitle: "〜だけに",
                                displayMeaning: "正因为……／正因为如此更……",
                                displayConnection: "动词普通形／い形容词普通形／な形容词词干＋な／名词＋（である）＋だけに",
                                relation: "把前项已经成立的事实或条件作为理由，使后项的结果或感情进一步加强。",
                                explanation: "以前项已经成立的事实或客观条件为理由，表示<strong class='usage-key'>正因为存在这一条件</strong>，后项的结果、感情或评价表现得更加明显或强烈。后项常出现<strong class='usage-key'>「残念だ」「うれしい」「説得力がある」</strong>等评价，既可为正面结果，也可为遗憾、失望等负面反应。",
                                note: "后项既可以是正面的相称结果，也可以是失望、遗憾等负面结果。还常用「それだけに」承接上文。下一项「AがAだけに」则是重复同一名词的特殊构式。",
                                examples: [
                                    { text: "長い間楽しみにしていた<strong class='target-particle'>だけに</strong>、試合が中止になって本当に残念です。", translation: "正因为期待了很久，比赛取消后才格外遗憾。" },
                                    { text: "彼は十年間この分野を研究してきた<strong class='target-particle'>だけに</strong>、説明には説得力があります。", translation: "正因为他研究这个领域已有十年，所以讲解很有说服力。" }
                                ]
                            },
                            {
                                sourceId: "supp-dake-sufficient-n1",
                                sourceMeta: {
                                    level: "N1",
                                    title: "〜だけの",
                                    meaning: "足以……的……／够……的……",
                                    connection: "动词辞书形／可能形＋だけの＋名词"
                                },
                                relation: "以前项动作作为程度基准，说明后面的名词达到了完成该动作所需的程度。",
                                explanation: "表示后面的名词具有<strong class='usage-key'>足以完成前项动作的数量、能力或条件</strong>。前项常使用可能形，后面多接<strong class='usage-key'>「勇気」「力」「能力」「時間」「収入」</strong>等表示条件或程度的名词。",
                                examples: [
                                    { text: "海外で一人で暮らせる<strong class='target-particle'>だけの</strong>日本語力を身につけたいです。", translation: "我想掌握足以独自在海外生活的日语能力。" },
                                    { text: "この計画を最後まで進める<strong class='target-particle'>だけの</strong>時間がありません。", translation: "没有足够的时间把这项计划推进到最后。" }
                                ]
                            },
                            {
                                sourceId: "supp-dake-corresponding-degree-n1",
                                sourceMeta: {
                                    level: "N1",
                                    title: "〜分だけ",
                                    meaning: "与……相应／……多少就……多少",
                                    connection: "动词た形／名词＋の＋分だけ"
                                },
                                relation: "以前项所表示的行动、数量或程度为基准，说明后项产生与之相应的结果。",
                                explanation: "表示前项的行动、数量或程度<strong class='usage-key'>会相应反映在后项的结果或变化上</strong>。后项常使用<strong class='usage-key'>「成果が出る」「上手になる」「増える」「遅くなる」</strong>等表示结果或变化的谓语；会话中也可只说「〜分」。",
                                examples: [
                                    { text: "毎日練習した<strong class='target-particle'>分だけ</strong>、発音が自然になってきました。", translation: "每天练习了多少，发音也就相应变得自然了。" },
                                    { text: "工事が遅れた<strong class='target-particle'>分だけ</strong>、開業の日も遅くなりました。", translation: "工程推迟了多少，开业日期也相应推迟了多少。" }
                                ]
                            },
                            {
                                sourceId: "n1-056",
                                displayTitle: "AがAだけに",
                                relation: "通过重复同一个名词，强调前项情况<strong class='usage-key'>具有特殊性或重要性</strong>，因此后项反应更加明显。",
                                explanation: "通过重复同一个名词，强调该对象或情况<strong class='usage-key'>具有不同于一般情况的特殊性</strong>，因此后项需要更加慎重或产生更明显的反应。后项常用<strong class='usage-key'>「すぐには〜ない」「〜たほうがいい」「慎重に〜」</strong>等表达，说明不能按通常方式处理。",
                                note: "不能用于普通原因说明。前项通常是交谈双方已经知道，并认为<strong class='usage-key'>需要特别考虑</strong>的对象或情况。",
                                examples: [
                                    { text: "問題が問題<strong class='target-particle'>だけに</strong>、すぐには結論を出せません。", translation: "正因为问题比较特殊，不能马上得出结论。" },
                                    { text: "場所が場所<strong class='target-particle'>だけに</strong>、大声で話すのは控えたほうがいいです。", translation: "正因为场合特殊，最好不要大声说话。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "のみ": {
            desc: "把范围<strong class='usage-key'>严格限定在前项</strong>，主要用于<strong class='usage-key'>正式的书面表达</strong>",
            usages: [
                {
                    title: "表示正式、严格的限定",
                    definition: "表示范围<strong class='usage-key'>只限于前项</strong>，排除其他对象或可能性。意义接近「だけ」，但语气更加正式、客观。",
                    connection: "名词＋のみ／动词・い形容词普通形＋のみ／な形容词词干＋である＋のみ",
                    note: "常用于<strong class='usage-key'>公告、公文、规则、新闻和正式说明</strong>。日常会话中表示普通限定时，通常使用「だけ」。",
                    examples: [
                        { text: "本日の受付は予約された方<strong class='target-particle'>のみ</strong>です。", translation: "今天仅接待已经预约的人。" },
                        { text: "この資料は社内で<strong class='target-particle'>のみ</strong>閲覧できます。", translation: "这份资料只能在公司内部查阅。" }
                    ],
                    relatedGrammar: {
                        lead: "在正式语体中否定“范围只限于前项”后，可以进一步说明<strong class='usage-key'>后项也包括在内</strong>。",
                        items: [
                            {
                                sourceId: "n2-194",
                                displayTitle: "〜のみならず",
                                displayMeaning: "不仅……而且……",
                                displayConnection: "名词＋（である）＋のみならず／动词・い形容词普通形＋のみならず／な形容词词干＋である＋のみならず",
                                relation: "否定范围只限于前项，并把范围进一步扩展到后项。",
                                explanation: "表示事物的范围<strong class='usage-key'>不只限于前项，还进一步包括后项</strong>，属于正式的书面语。后项常用<strong class='usage-key'>「も」「まで」「さえ」</strong>承接，形成递进关系。",
                                examples: [
                                    { text: "この制度は学生<strong class='target-particle'>のみならず</strong>、社会人にも利用されています。", translation: "这项制度不仅有学生使用，社会人士也在使用。" },
                                    { text: "彼女は英語が話せる<strong class='target-particle'>のみならず</strong>、フランス語も流暢です。", translation: "她不仅会说英语，法语也很流利。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ばかり": {
            desc: "基本作用是把内容加以<strong class='usage-key'>限定</strong>，或表示大致的<strong class='usage-key'>程度</strong>；其他意义由固定句型进一步发展",
            usages: [
                {
                    title: "限定",
                    definition: "把范围集中在前项，表示同类内容中<strong class='usage-key'>主要是前项，其他内容很少或不在考虑范围内</strong>。",
                    connection: "名词／名词性成分＋ばかり",
                    note: "与中性限定的「だけ」相比，「ばかり」较容易带出数量偏多、内容偏向或说话人的评价。会话中也常说「ばっかり」。",
                    examples: [
                        { text: "この店の客は若い人<strong class='target-particle'>ばかり</strong>です。", translation: "这家店的顾客几乎都是年轻人。" },
                        { text: "机の上には仕事の資料<strong class='target-particle'>ばかり</strong>置かれています。", translation: "桌上放的几乎全是工作资料。" }
                    ],
                    relatedGrammar: {
                        lead: "以“范围只集中在前项”为基础，可以进一步表示<strong class='usage-key'>动作反复、只剩最后一步、唯一原因</strong>或否定限制并追加范围。",
                        items: [
                            {
                                sourceId: "n3-041",
                                displayTitle: "〜てばかりいる",
                                displayMeaning: "总是……／光做……",
                                displayConnection: "动词て形＋ばかりいる",
                                relation: "把进行的动作限定在同一项上。",
                                explanation: "表示某个动作<strong class='usage-key'>反复进行或占据了大部分时间</strong>，常用于说明行为有所偏向，并带有批评、不满或担忧的语气。句中常与<strong class='usage-key'>「いつも」「一日中」「最近」</strong>等时间表达搭配，突出动作反复或持续偏向。",
                                note: "表示状态向同一方向持续变化时，不用这一形式，而用「V辞书形＋ばかりだ」。",
                                examples: [
                                    { text: "弟はゲームをして<strong class='target-particle'>ばかりいます</strong>。", translation: "弟弟总是在玩游戏。" },
                                    { text: "兄は休みになると寝て<strong class='target-particle'>ばかりいます</strong>。", translation: "哥哥一到休息日就总在睡觉。" }
                                ]
                            },
                            {
                                sourceId: "supp-bakari-final-step",
                                sourceMeta: {
                                    level: "N3",
                                    title: "〜ばかりだ／〜ばかりになっている",
                                    meaning: "只剩……／万事俱备只待……",
                                    connection: "动词辞书形＋ばかりだ／ばかりになっている"
                                },
                                relation: "把尚未完成的内容限定为最后一个动作。",
                                explanation: "表示必要的准备或条件已经具备，当前<strong class='usage-key'>只剩下实施前项这一动作</strong>，说明事情已经到达随时可以进入最后一步的状态。句中常以<strong class='usage-key'>「あとは」「もう」</strong>提示准备已经结束，也常使用「〜ばかりになっている」「〜ばかりにしてある」说明完成后的准备状态。",
                                note: "常与「あとは」「もう」呼应，也常用「〜ばかりにしてある」。这里不表示事态持续变化。",
                                examples: [
                                    { text: "荷物の準備は終わり、あとは出発する<strong class='target-particle'>ばかりです</strong>。", translation: "行李已经准备好，接下来只等出发了。" },
                                    { text: "会場の設営は完了し、もう参加者を迎える<strong class='target-particle'>ばかりになっています</strong>。", translation: "会场已经布置完毕，只等迎接参加者了。" }
                                ]
                            },
                            {
                                sourceId: "n2-179",
                                relation: "把原因限定为前项这一点，并说明它导致了不理想的结果。",
                                explanation: "表示<strong class='usage-key'>仅仅因为前项这一原因</strong>，就产生了出乎意料的负面结果，常带有后悔、遗憾或自责的语气。后项容易出现<strong class='usage-key'>「〜てしまう」「〜ことになる」「〜羽目になる」</strong>等表达，用来说明已经发生的不理想结果。",
                                note: "动词虽经常使用た形，但这里表示原因已经成立，并不表示“刚刚完成”；后项也不用于命令或劝诱。",
                                examples: [
                                    { text: "一度うそをついた<strong class='target-particle'>ばかりに</strong>、誰にも信じてもらえなくなりました。", translation: "只因为说过一次谎，就变得得不到任何人的信任了。" },
                                    { text: "確認を怠った<strong class='target-particle'>ばかりに</strong>、会社に大きな損失を与えてしまいました。", translation: "只因为疏于确认，给公司造成了巨大损失。" }
                                ]
                            },
                            {
                                sourceId: "n3-059",
                                displayTitle: "〜ばかりでなく／〜ばかりか",
                                displayConnection: "名词／动词普通形／い形容词普通形／な形容词词干＋な・である ＋ ばかりでなく／ばかりか",
                                relation: "否定范围只限于前项，并继续加入后项内容。",
                                explanation: "表示范围<strong class='usage-key'>不仅限于前项</strong>，还会进一步追加后项内容。「ばかりか」通常比「ばかりでなく」更强调程度的发展或出乎意料。后项常与<strong class='usage-key'>「も」「まで」「さえ」</strong>呼应，其中「まで」「さえ」更能突出追加内容超出预想。",
                                note: "后项常与「も」「まで」「さえ」呼应，通常不使用命令、请求或劝诱等表达。",
                                examples: [
                                    { text: "彼は英語<strong class='target-particle'>ばかりでなく</strong>、中国語も話せます。", translation: "他不仅会说英语，还会说中文。" },
                                    { text: "その店は値段が高い<strong class='target-particle'>ばかりか</strong>、サービスまで悪いです。", translation: "那家店不仅价格高，连服务也很差。" }
                                ]
                            }
                        ]
                    }
                },
                {
                    title: "程度",
                    definition: "以前项作为估计的基准，表示数量、时间或状态处于<strong class='usage-key'>大致相当于前项的程度</strong>。",
                    connection: "数量词＋ばかり",
                    note: "通常放在数量词之后，语体略显书面；不能像「くらい」那样自由表示抽象程度或最低限度。",
                    examples: [
                        { text: "会場には百人<strong class='target-particle'>ばかり</strong>集まりました。", translation: "会场里聚集了大约一百人。" },
                        { text: "駅で一時間<strong class='target-particle'>ばかり</strong>待ちました。", translation: "在车站等了大约一个小时。" }
                    ],
                    relatedGrammar: {
                        lead: "以“接近某个时间或程度”为基础，可以进一步表示<strong class='usage-key'>完成不久、变化持续</strong>，或状态几乎达到某个动作发生的界限。",
                        items: [
                            {
                                sourceId: "n3-069",
                                displayTitle: "〜たばかりだ／〜たばかりの",
                                displayConnection: "动词た形＋ばかりだ／ばかりの＋名词",
                                relation: "把动作完成后的时间理解为距离现在很短。",
                                explanation: "表示前项动作<strong class='usage-key'>完成后尚未经过很长时间</strong>。「Vたばかりだ」用于句末说明状态，「Vたばかりの＋名词」则直接修饰后面的名词。继续说明完成后的状态时，常用<strong class='usage-key'>「〜たばかりなので、まだ〜」「〜たばかりなのに〜」</strong>等形式。",
                                note: "「Vたところ」着重动作刚刚发生的客观时点；「Vたばかり」依据说话人的认识判断，实际可以已经经过数日或数月。",
                                examples: [
                                    { text: "この靴は昨日買っ<strong class='target-particle'>たばかりなので</strong>、まだ足になじんでいません。", translation: "这双鞋昨天才买，还不太合脚。" },
                                    { text: "入社し<strong class='target-particle'>たばかりの</strong>社員を対象に、研修を行います。", translation: "面向刚入职的员工开展培训。" }
                                ]
                            },
                            {
                                sourceId: "n2-246",
                                relation: "表示变化不断向同一方向发展。",
                                explanation: "表示事态<strong class='usage-key'>持续朝同一方向发展</strong>，而且没有好转、停止或逆转的迹象，常带有遗憾或无能为力的语气。常与<strong class='usage-key'>「増える」「悪くなる」「高くなる」「減る」</strong>等变化动词搭配，也可以用「ますます」进一步强调变化的发展。",
                                note: "前接变化性动词的辞书形。若要说明同一动作反复发生，应使用「Vて＋ばかりいる」。",
                                examples: [
                                    { text: "何も対策をしなければ、状況は悪化する<strong class='target-particle'>ばかりです</strong>。", translation: "如果不采取任何措施，情况只会不断恶化。" },
                                    { text: "人口の減少に伴い、空き家は増える<strong class='target-particle'>ばかりです</strong>。", translation: "随着人口减少，空置房只会不断增加。" }
                                ]
                            },
                            {
                                sourceId: "n1-074",
                                relation: "表示程度已经接近前项动作实际发生的界限。",
                                explanation: "表示某种神态、动作或状态的程度<strong class='usage-key'>高到几乎要发生前项动作</strong>，但该动作实际上尚未发生。句中常用<strong class='usage-key'>「今にも」</strong>加强临近发生的感觉，并根据句中位置使用「〜んばかりだ／に／の」修饰状态、动作或名词。",
                                note: "「する」采用「せんばかり」这一特殊形式。多见于书面描写，通常不用于说话人的意志行为。",
                                examples: [
                                    { text: "彼女は今にも泣き出さ<strong class='target-particle'>んばかりの</strong>顔をしていました。", translation: "她露出一副眼看就要哭出来的表情。" },
                                    { text: "会場には、あふれ<strong class='target-particle'>んばかりの</strong>人が集まりました。", translation: "会场里聚集了多得几乎要溢出来的人。" }
                                ]
                            },
                            {
                                sourceId: "n1-075",
                                displayTitle: "〜とばかりに",
                                relation: "把没有实际说出口的内容当作动作或神态所传达的信息。",
                                explanation: "表示人物虽然没有实际说出前项内容，但随后的动作或神态<strong class='usage-key'>看起来仿佛正在表达那句话</strong>，用于生动描写非语言表现。后项通常是<strong class='usage-key'>点头、看表、挥手、跑过去</strong>等能够被观察到的动作，而不是再次说明人物实际说了什么。",
                                note: "可以理解为「〜と言わんばかりに」的固定形式。前项常是简短话语，也有「ここぞとばかりに」等惯用搭配。",
                                examples: [
                                    { text: "彼は「もう帰れ」<strong class='target-particle'>とばかりに</strong>、時計を何度も見ました。", translation: "他反复看表，仿佛在说“快回去吧”。" },
                                    { text: "ケーキが運ばれると、子どもたちは「待ってました」<strong class='target-particle'>とばかりに</strong>駆け寄りました。", translation: "蛋糕一端上来，孩子们便像在说“等了好久”一样跑了过去。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "まで": {
            desc: "表示<strong class='usage-key'>范围的终点</strong>，或把<strong class='usage-key'>意外的项目</strong>也包括在内",
            usages: [
                {
                    title: "表示时间、空间或数量范围的终点",
                    definition: "标明动作、状态或范围<strong class='usage-key'>到前项为止</strong>。",
                    connection: "表示时间、场所或数量的名词＋まで",
                    note: "常与表示起点的「から」配合，形成<strong class='usage-key'>起点到终点的范围</strong>。",
                    examples: [
                        { text: "図書館は夜九時<strong class='target-particle'>まで</strong>開いています。", translation: "图书馆开放到晚上九点。" },
                        { text: "東京から京都<strong class='target-particle'>まで</strong>新幹線で行きました。", translation: "从东京乘新干线到了京都。" }
                    ],
                    relatedGrammar: {
                        lead: "把时间、状态或行动的边界设为终点后，可以进一步表示<strong class='usage-key'>完成期限、发展所达到的程度</strong>，或说明事情到此结束及最后可采取的行动。",
                        items: [
                            {
                                sourceId: "supp-made-deadline",
                                sourceMeta: {
                                    level: "N4",
                                    title: "〜までに",
                                    meaning: "在……之前／最晚到……",
                                    connection: "时间名词／动词辞书形＋までに"
                                },
                                relation: "把前项时点设为动作完成的最后期限。",
                                explanation: "表示某个动作需要在前项所示的时间<strong class='usage-key'>到来以前完成</strong>，重点是期限内出现一次完成点。后项常使用<strong class='usage-key'>「提出する」「返す」「連絡する」「終える」</strong>等能够完成的动作；表示一直持续到该时点时，应使用「まで」而不是「までに」。",
                                examples: [
                                    { text: "申込書は金曜日<strong class='target-particle'>までに</strong>提出してください。", translation: "请最晚在星期五之前提交申请表。" },
                                    { text: "出発する<strong class='target-particle'>までに</strong>、必要な資料を確認しておきます。", translation: "出发前会事先确认好必要资料。" }
                                ]
                            },
                            {
                                sourceId: "supp-n1-review-037",
                                relation: "表示经过变化后达到前项所示的程度。",
                                explanation: "表示经过一段时间的发展、努力或变化，状态<strong class='usage-key'>最终到达前项所示的程度</strong>。前项常用可能形或表示能力、状态的动词，并常与<strong class='usage-key'>「練習を重ねて」「成長して」「今では」</strong>等过程表达呼应。",
                                examples: [
                                    { text: "毎日練習を続け、専門書も読める<strong class='target-particle'>までになりました</strong>。", translation: "坚持每天练习后，已经到了能阅读专业书籍的程度。" },
                                    { text: "入社当初は補助係でしたが、今では大きな企画を任される<strong class='target-particle'>までになりました</strong>。", translation: "刚进公司时只是辅助人员，如今已经成长到能负责大型项目了。" }
                                ]
                            },
                            {
                                sourceId: "n1-076",
                                displayTitle: "〜たら／〜ば、それまでだ",
                                displayMeaning: "一旦……就全完了",
                                displayConnection: "动词た形＋ら／动词ば形＋それまでだ",
                                relation: "把某种情况视为使此前一切失去意义的终点。",
                                explanation: "表示一旦前项情况发生，此前的努力、价值或可能性就<strong class='usage-key'>到此结束并全部失去意义</strong>。前面常先用<strong class='usage-key'>「どんなに〜ても」「いくら〜ても」</strong>承认已有努力或条件，再指出足以使一切归零的情况。",
                                examples: [
                                    { text: "どんなに準備しても、当日に遅刻し<strong class='target-particle'>たらそれまでです</strong>。", translation: "无论准备得多充分，如果当天迟到就全完了。" },
                                    { text: "高価な機械でも、使いこなせなけれ<strong class='target-particle'>ばそれまでです</strong>。", translation: "即使是昂贵的机器，如果不会使用也就没有意义了。" }
                                ]
                            },
                            {
                                sourceId: "n1-084",
                                displayTitle: "〜までだ／〜までのことだ",
                                displayMeaning: "只好……／只是……而已",
                                displayConnection: "动词辞书形／动词た形＋までだ・までのことだ",
                                relation: "把能够采取的行动或行为的意义限定在最后一点。",
                                explanation: "接动词辞书形时，表示其他办法行不通就<strong class='usage-key'>采取前项这一最后手段</strong>，前面常出现「〜なら」「〜たら」「〜ば」等条件表达。接动词た形时，表示自己<strong class='usage-key'>只是做了前项而没有特殊意图</strong>，常用「〜から／ので、〜たまでだ」说明行动理由。",
                                examples: [
                                    { text: "誰も手伝ってくれないなら、一人でやる<strong class='target-particle'>までのことです</strong>。", translation: "如果没有人帮忙，我只好一个人做。" },
                                    { text: "質問されたので、知っていることを答えた<strong class='target-particle'>までです</strong>。", translation: "因为有人问，我只是回答了自己知道的内容而已。" }
                                ]
                            }
                        ]
                    }
                },
                {
                    title: "表示“极端”的事例或者行为",
                    definition: "把一般不会列入范围的人、事物或行为作为极端事例，表示<strong class='usage-key'>连这种情况也包括在内</strong>。",
                    connection: "名词＋まで",
                    note: "常译为<strong class='usage-key'>“连……也……”</strong>。前项是为强调范围或程度而举出的<strong class='usage-key'>极端事例</strong>，不表示时间或场所的终点。",
                    examples: [
                        { text: "その話は子ども<strong class='target-particle'>まで</strong>知っています。", translation: "那件事连孩子都知道。" },
                        { text: "引っ越しのとき、大切な資料<strong class='target-particle'>まで</strong>捨ててしまいました。", translation: "搬家时连重要资料也误扔了。" }
                    ],
                    relatedGrammar: {
                        lead: "「まで」可以把超出通常预想的对象或行为作为<strong class='usage-key'>极端事例</strong>。接在动作后形成「〜てまで／〜までして」，表示为了某个目的甚至采取不寻常的手段。",
                        items: [
                            {
                                sourceId: "supp-te-made-made-shite",
                                sourceMeta: {
                                    level: "N1",
                                    title: "〜てまで／〜までして",
                                    meaning: "甚至不惜……／甚至做到……",
                                    connection: "动词て形＋まで／名词＋までして"
                                },
                                relation: "把为实现后项而采取的手段作为极端行为。",
                                explanation: "表示为了实现后项，<strong class='usage-key'>甚至采取了前项这种超出一般程度的手段</strong>。「〜てまで」前接动作，「〜までして」常前接能够表示行为的名词，也常说「そこまでして」。该表达常带有<strong class='usage-key'>惊讶、批评或认为做得过度</strong>的语气；后项容易出现「〜必要はない」「〜のか」等判断或质问。",
                                examples: [
                                    { text: "健康を害し<strong class='target-particle'>てまで</strong>働く必要はありません。", translation: "没有必要甚至以损害健康为代价去工作。" },
                                    { text: "彼は借金<strong class='target-particle'>までして</strong>、高価な車を買いました。", translation: "他甚至不惜借钱，买了一辆高价汽车。" }
                                ]
                            },
                            {
                                sourceId: "n1-005",
                                relation: "把范围延伸到作为上限的极端项目。",
                                explanation: "表示某一范围非常广，最终<strong class='usage-key'>连前项所示的极端项目也包括在内</strong>。常用<strong class='usage-key'>「AからBに至るまで」</strong>明确起点与上限，后项则说明整个范围内共同成立的状态或行为。",
                                examples: [
                                    { text: "企画から販売<strong class='target-particle'>に至るまで</strong>、すべて自社で行っています。", translation: "从策划到销售，全部都由本公司完成。" },
                                    { text: "社長から新入社員<strong class='target-particle'>に至るまで</strong>、全員が研修に参加しました。", translation: "从社长到新员工，所有人都参加了培训。" }
                                ]
                            },
                            {
                                sourceId: "n1-043",
                                displayTitle: "〜までもない／〜までもなく",
                                displayMeaning: "没有必要……／不必特意……",
                                displayConnection: "动词辞书形＋までもない／までもなく",
                                relation: "表示事情没有达到必须实施前项动作的程度。",
                                explanation: "表示前项动作<strong class='usage-key'>没有必要特意实施</strong>，因为事情十分明显，或使用更简单的方法便足够。常见搭配有<strong class='usage-key'>「言うまでもなく」「疑うまでもない」</strong>；使用「〜までもなく」连接后项时，后面常说明「当然だ」「明らかだ」等无需该动作即可成立的内容。",
                                examples: [
                                    { text: "この程度の傷なら、病院へ行く<strong class='target-particle'>までもありません</strong>。", translation: "这种程度的伤没有必要特意去医院。" },
                                    { text: "言う<strong class='target-particle'>までもなく</strong>、安全の確認が最優先です。", translation: "不用说，确认安全是最优先事项。" }
                                ]
                            },
                            {
                                sourceId: "n1-045",
                                displayConnection: "动词ない形＋までも／名词＋とは言わないまでも",
                                relation: "承认没有达到较高程度，同时提出较低的可接受范围。",
                                explanation: "表示虽然没有达到前项所示的较高程度，但<strong class='usage-key'>至少仍达到后项这一较低程度</strong>。后项常与<strong class='usage-key'>「少なくとも」「せめて」「〜くらいは」</strong>呼应，用来提出最低期待、较现实的目标或有限度的判断。",
                                examples: [
                                    { text: "毎日とは言わ<strong class='target-particle'>ないまでも</strong>、週に一度は運動したほうがいいです。", translation: "即使不要求每天，至少每周也应该运动一次。" },
                                    { text: "海外旅行とは言わ<strong class='target-particle'>ないまでも</strong>、せめて近県へ出かけたいです。", translation: "即使不去海外旅行，至少也想去附近的县走走。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "くらい": {
            desc: "表示<strong class='usage-key'>大致数量、达到的程度</strong>，或把前项作为<strong class='usage-key'>最低限度</strong>；口语中也说「ぐらい」",
            topic: "degree-kurai-hodo",
            usages: [
                {
                    title: "表示大致的数量或范围",
                    definition: "接在数量词或指示词之后，表示<strong class='usage-key'>大约的数值、大小或范围</strong>。",
                    connection: "数量词／これ・それ・あれ＋くらい",
                    note: "「ぐらい」是<strong class='usage-key'>常见的口语形式</strong>。表示大致数量时，「くらい／ぐらい」比「ほど」更常用于日常会话。",
                    examples: [
                        { text: "駅まで三十分<strong class='target-particle'>くらい</strong>かかります。", translation: "到车站大约需要三十分钟。" },
                        { text: "これ<strong class='target-particle'>くらい</strong>の大きさで十分です。", translation: "这么大的尺寸就足够了。" }
                    ]
                },
                {
                    title: "举例说明达到的程度",
                    definition: "举出前项这一具体状态，说明后项<strong class='usage-key'>已经达到与之相当的程度</strong>。",
                    connection: "动词普通形／い形容词普通形／な形容词词干＋な／名词＋くらい",
                    note: "常用于<strong class='usage-key'>感情、身体状态或明显变化</strong>。在单纯程度句中多可换成「ほど」，但「くらい／ぐらい」更常见于日常会话。",
                    examples: [
                        { text: "声が出ない<strong class='target-particle'>くらい</strong>緊張しました。", translation: "紧张到了说不出话的程度。" },
                        { text: "泣きたい<strong class='target-particle'>くらい</strong>うれしかったです。", translation: "高兴得几乎想哭。" }
                    ],
                    relatedGrammar: {
                        lead: "把某个人或事物作为具有代表性的程度基准时，「くらい／ぐらい」还可以表示说话人认为<strong class='usage-key'>几乎只有该对象符合条件</strong>。",
                        items: [
                            {
                                sourceId: "supp-n1-review-071",
                                displayTitle: "〜のはNくらいだ／ぐらいだ",
                                displayMeaning: "只有……／也就……",
                                displayConnection: "动词普通形＋のは／のが＋名词＋くらいだ・ぐらいだ",
                                relation: "把前项作为具有代表性的唯一对象。",
                                explanation: "在某个范围内选出一个代表对象，表示说话人认为<strong class='usage-key'>几乎只有前项符合条件</strong>。常用「〜のはNくらいだ」「〜のがNぐらいだ」的形式作出带有主观判断的限定，句末也常用「〜でしょう」缓和语气。",
                                examples: [
                                    { text: "この難しい仕事を任せられるのは、田中さん<strong class='target-particle'>くらいです</strong>。", translation: "能够胜任这项高难度工作的，也就只有田中了。" },
                                    { text: "そんな冗談を本気にするのは、弟<strong class='target-particle'>ぐらいでしょう</strong>。", translation: "会把那种玩笑当真的，恐怕也就只有弟弟了。" }
                                ]
                            }
                        ]
                    }
                },
                {
                    title: "表示最低限度或较轻的评价",
                    definition: "把前项作为最低限度，表示<strong class='usage-key'>至少这一点应该做到</strong>，或认为前项并不困难。",
                    connection: "名词／动词普通形＋くらい",
                    note: "这里的「くらい」不是单纯说明程度，而是表示说话人认为前项<strong class='usage-key'>很容易、不重要或至少应该做到</strong>，因此可能带有提醒、轻视或不满。",
                    examples: [
                        { text: "自分の名前<strong class='target-particle'>くらい</strong>は書いてください。", translation: "至少请写上自己的名字。" },
                        { text: "部屋の掃除<strong class='target-particle'>くらい</strong>自分でできます。", translation: "打扫房间这种事我自己能做。" }
                    ],
                    relatedGrammar: {
                        lead: "把前项评价为不想接受的选择后，「〜くらいなら」可以用它反衬<strong class='usage-key'>后项才是说话人更愿意选择的做法</strong>。",
                        items: [
                            {
                                sourceId: "n2-221",
                                relation: "把前项作为最不想接受的选择，与后项进行对比。",
                                explanation: "提出一个说话人<strong class='usage-key'>不想选择或认为难以接受的做法</strong>，然后表示与其如此，还不如选择后项。后项常用<strong class='usage-key'>「〜ほうがいい」「〜ほうがましだ」「むしろ〜」</strong>明确给出更可取的选择。",
                                examples: [
                                    { text: "そんな会社で無理をして働く<strong class='target-particle'>くらいなら</strong>、転職したほうがいいです。", translation: "与其在那种公司勉强自己工作，不如换一份工作。" },
                                    { text: "嫌なことを我慢し続ける<strong class='target-particle'>ぐらいなら</strong>、むしろ断ったほうがましです。", translation: "与其一直忍受不喜欢的事，倒不如拒绝还更好。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ほど": {
            desc: "把前项作为<strong class='usage-key'>程度或比较的基准</strong>，也可表示<strong class='usage-key'>随条件变化而同步发生的变化</strong>",
            topic: "degree-kurai-hodo",
            usages: [
                {
                    title: "举例说明达到的程度",
                    definition: "以前项作为程度的基准，说明后项<strong class='usage-key'>已经达到与之相当的程度</strong>。",
                    connection: "动词普通形／い形容词普通形／な形容词词干＋な／名词＋ほど",
                    note: "后项通常是<strong class='usage-key'>能够体现程度的状态、变化或评价</strong>。与「くらい／ぐらい」相比，「ほど」较容易给人以按照明确尺度说明程度的感觉。",
                    examples: [
                        { text: "立っていられない<strong class='target-particle'>ほど</strong>疲れました。", translation: "累到了站不住的程度。" },
                        { text: "会場は驚く<strong class='target-particle'>ほど</strong>静かでした。", translation: "会场安静得令人吃惊。" }
                    ],
                    relatedGrammar: {
                        lead: "「ほど」以程度为基准，可以形成<strong class='usage-key'>程度判断、同步变化、比较</strong>以及限度评价等相关语法。",
                        items: [
                            {
                                sourceId: "n3-007",
                                displayTitle: "〜ほどだ／〜ほどです",
                                displayMeaning: "达到……的程度",
                                displayConnection: "动词普通形／い形容词普通形／な形容词词干＋な＋ほどだ",
                                relation: "把前项所示的程度直接作为句子的结论。",
                                explanation: "当「ほど」后面使用「だ／です」结句时，前面的内容用来说明主题<strong class='usage-key'>已经达到什么程度</strong>。句中不再另外出现被修饰的谓语，而是由「〜ほどだ」直接对前面的主题作出程度判断。",
                                examples: [
                                    { text: "その景色の美しさは、言葉では表せない<strong class='target-particle'>ほどです</strong>。", translation: "那片景色美到无法用语言形容的程度。" },
                                    { text: "会場の歓声は、外まで聞こえる<strong class='target-particle'>ほどでした</strong>。", translation: "会场的欢呼声大到从外面都能听见。" }
                                ]
                            },
                            {
                                sourceId: "supp-hodo-proportional",
                                sourceMeta: {
                                    level: "N3",
                                    title: "〜ほど（程度变化）",
                                    meaning: "越……越……／随着……",
                                    connection: "动词辞书形／い形容词普通形／な形容词词干＋な＋ほど"
                                },
                                relation: "不重复前项，直接表示随着条件发展，后项也发生变化。",
                                explanation: "此时前项不是用来举出一个极端事例，而是表示<strong class='usage-key'>会逐渐变化的动作、状态或条件</strong>。前项的程度越深，后项也相应变化。这种形式不需要使用「ば」，也不重复同一个词；后项则必须说明随之产生的变化。",
                                examples: [
                                    { text: "この問題は考える<strong class='target-particle'>ほど</strong>分からなくなります。", translation: "这个问题越思考越搞不懂。" },
                                    { text: "駅に近い<strong class='target-particle'>ほど</strong>、家賃が高くなる傾向があります。", translation: "一般越靠近车站，房租就越高。" }
                                ]
                            },
                            {
                                sourceId: "n3-057",
                                relation: "通过重复同一个词，明确表示前后程度的同步变化。",
                                explanation: "表示前项的程度增加时，后项也<strong class='usage-key'>随之向同一方向发生变化</strong>，常译为“越……越……”。动词使用<strong class='usage-key'>「VばVるほど」</strong>并重复同一动词，形容词则使用与其活用相应的形式。",
                                examples: [
                                    { text: "この本は読め<strong class='target-particle'>ば</strong>読む<strong class='target-particle'>ほど</strong>面白くなります。", translation: "这本书越读越有意思。" },
                                    { text: "部屋は広けれ<strong class='target-particle'>ば</strong>広い<strong class='target-particle'>ほど</strong>使いやすいとは限りません。", translation: "房间并不是越宽敞就越好用。" }
                                ]
                            },
                            {
                                sourceId: "n3-044",
                                relation: "以B作为比较基准，说明A的程度没有达到B。",
                                explanation: "在「AはBほど〜ない」中，以B作为比较基准，表示<strong class='usage-key'>A的程度不如B</strong>。后项必须使用否定形式，但整句表达的是A与B的程度差，不是单纯否定A具有该性质。",
                                examples: [
                                    { text: "この町は東京<strong class='target-particle'>ほど</strong>人が多くありません。", translation: "这座城市的人没有东京那么多。" },
                                    { text: "実写版の映画はアニメ版<strong class='target-particle'>ほど</strong>面白くなかったです。", translation: "真人版电影没有动画版那么好看。" }
                                ]
                            },
                            {
                                sourceId: "n3-111",
                                relation: "把前项作为比较范围内的最高程度。",
                                explanation: "表示在说话人所设定的范围内，<strong class='usage-key'>没有其他人或事物能够超过前项</strong>，因而将前项评价为最高程度。「〜ほど〜はない」较常用于中性的比较判断；「〜くらい／ぐらい〜はない」也可使用，语气较主观、口语化。",
                                examples: [
                                    { text: "金曜日の仕事終わりに飲むビール<strong class='target-particle'>ほど</strong>おいしいもの<strong class='target-particle'>はありません</strong>。", translation: "没有什么能比周五下班后喝的啤酒更好喝了。" },
                                    { text: "私にとって、家族<strong class='target-particle'>くらい</strong>大切な存在<strong class='target-particle'>はいません</strong>。", translation: "对我来说，没有比家人更重要的人了。" }
                                ]
                            },
                            {
                                sourceId: "supp-n1-review-067",
                                relation: "以前项作为较高尺度，说明实际情况尚未达到该程度。",
                                explanation: "承认某种状态或问题确实存在，但表示它<strong class='usage-key'>还没有达到前项所示的较高程度</strong>。前面常先说明当前的实际情况，再用「〜が／けれど、〜ほどではない」作出程度上的保留判断。",
                                examples: [
                                    { text: "風邪で咳が出ますが、病院へ行く<strong class='target-particle'>ほどではありません</strong>。", translation: "感冒后虽然有些咳嗽，但还没有到需要去医院的程度。" },
                                    { text: "この仕事は忙しいですが、家に帰れない<strong class='target-particle'>ほどではありません</strong>。", translation: "这份工作虽然忙，但还没有忙到不能回家的程度。" }
                                ]
                            },
                            {
                                sourceId: "n1-052",
                                relation: "把应有的限度作为基准，批评前项已经超出该程度。",
                                explanation: "表示某种行为、状态或评价<strong class='usage-key'>已经严重到超出可以接受的限度</strong>，用于强烈批评、责备或表示无法容忍。句子常直接以「〜にもほどがある」结束，也可以在前面用「いくら〜ても」先承认某种情况，再指出行为过度。",
                                examples: [
                                    { text: "冗談<strong class='target-particle'>にもほどがあります</strong>。", translation: "开玩笑也该有个限度。" },
                                    { text: "いくら忙しいといっても、一週間連絡しないのは無責任<strong class='target-particle'>にもほどがあります</strong>。", translation: "再怎么忙，整整一周不联系也未免太不负责了。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ずつ": {
            desc: "表示<strong class='usage-key'>相同数量的分配</strong>，或变化按<strong class='usage-key'>小单位逐步进行</strong>",
            usages: [
                {
                    title: "表示相同数量的分配",
                    definition: "表示把相同的数量<strong class='usage-key'>分别分配给多个对象</strong>。",
                    connection: "数量词＋ずつ",
                    note: "前项表示<strong class='usage-key'>每个对象所得到或承担的数量</strong>。",
                    examples: [
                        { text: "資料を一人に二枚<strong class='target-particle'>ずつ</strong>配りました。", translation: "给每个人发了两张资料。" },
                        { text: "箱にりんごを三個<strong class='target-particle'>ずつ</strong>入れてください。", translation: "请在每个箱子里放三个苹果。" }
                    ]
                },
                {
                    title: "表示变化逐步进行",
                    definition: "表示动作或变化按照较小单位<strong class='usage-key'>一点一点地推进</strong>。",
                    connection: "表示小量或阶段的词＋ずつ",
                    note: "常与表示<strong class='usage-key'>小量或阶段</strong>的「少し」「一歩」「一つ」等表达搭配。",
                    examples: [
                        { text: "春が近づき、少し<strong class='target-particle'>ずつ</strong>暖かくなりました。", translation: "随着春天临近，天气一点点变暖了。" },
                        { text: "問題を一つ<strong class='target-particle'>ずつ</strong>確認しましょう。", translation: "我们逐个确认问题吧。" }
                    ]
                }
            ]
        },
        "きり": {
            desc: "把范围<strong class='usage-key'>封闭在前项</strong>，或表示某动作之后<strong class='usage-key'>状态一直没有改变</strong>",
            usages: [
                {
                    title: "限定人数、数量或范围",
                    definition: "表示范围<strong class='usage-key'>完全限定在前项</strong>，常带有“除此以外没有”的封闭感。",
                    connection: "名词／数量词＋きり",
                    note: "与「だけ」相比，「きり」更容易强调<strong class='usage-key'>范围封闭或数量极少</strong>。",
                    examples: [
                        { text: "二人<strong class='target-particle'>きり</strong>でゆっくり話しました。", translation: "两个人单独慢慢谈了话。" },
                        { text: "残っている席は一つ<strong class='target-particle'>きり</strong>です。", translation: "剩下的座位只有一个。" }
                    ],
                    relatedGrammar: {
                        lead: "「きり」的范围封闭意义，可以进一步形成<strong class='usage-key'>某次动作以后没有后续</strong>以及<strong class='usage-key'>以某处为界到此结束</strong>的表达。",
                        items: [
                            {
                                sourceId: "n2-168",
                                displayTitle: "〜たきり／〜たっきり",
                                displayMeaning: "自从……以后再也没有……",
                                displayConnection: "动词た形＋きり／っきり",
                                relation: "以前项动作为界，说明之后一直没有出现预期的变化。",
                                explanation: "表示前项动作发生以后，状态<strong class='usage-key'>一直停留在当时，没有出现预期的后续动作</strong>。后项常使用「戻ってこない」「連絡がない」「会っていない」等否定表达；「〜たっきり」是较口语化的形式。",
                                examples: [
                                    { text: "兄は朝家を出た<strong class='target-particle'>きり</strong>、まだ戻っていません。", translation: "哥哥早上出门后，到现在还没回来。" },
                                    { text: "彼とは卒業式で会った<strong class='target-particle'>っきり</strong>、一度も連絡を取っていません。", translation: "毕业典礼上见过他以后，就再也没有联系过。" }
                                ]
                            },
                            {
                                sourceId: "supp-kore-sore-kiri",
                                sourceMeta: {
                                    level: "N2",
                                    title: "これきり／それきり／あれきり",
                                    meaning: "到此为止／从那以后再也没有",
                                    connection: "これ／それ／あれ＋きり"
                                },
                                relation: "用指示词指出界限，表示事情在该处结束。",
                                explanation: "「これきり」通常表示<strong class='usage-key'>以现在为界到此结束</strong>；「それきり／あれきり」通常回指前面提到的事情，表示<strong class='usage-key'>从那以后没有后续</strong>。后项可直接结束，也可继续说明之后没有发生什么。",
                                examples: [
                                    { text: "この件について話すのは、これ<strong class='target-particle'>きり</strong>にします。", translation: "关于这件事就谈到这里。" },
                                    { text: "彼から連絡があったのは去年の春で、それ<strong class='target-particle'>きり</strong>何の便りもありません。", translation: "他上次联系是在去年春天，从那以后再也没有任何消息。" }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "か": {
            desc: "接在<strong class='usage-key'>疑问词后</strong>，把人、事物、场所或数量表示为<strong class='usage-key'>不特定</strong>",
            usages: [
                {
                    title: "表示不特定的人、事物、场所或数量",
                    definition: "接在疑问词之后，表示存在某个人或某一项，但说话人<strong class='usage-key'>没有具体指出</strong>。",
                    connection: "疑问词＋か",
                    note: "「誰か」「何か」「どこか」「いくつか」「何度か」等<strong class='usage-key'>整体作为不定表达</strong>使用。",
                    examples: [
                        { text: "教室に誰<strong class='target-particle'>か</strong>います。", translation: "教室里有人。" },
                        { text: "この問題について、いくつ<strong class='target-particle'>か</strong>質問があります。", translation: "关于这个问题，我有几个问题。" }
                    ]
                }
            ],
            supplement: {
                title: "与其他表达结合的「か」",
                lead: "「か」还可以接在<strong class='usage-key'>原因、传闻或目的表达</strong>之后，表示说话人不能完全确定；接在句子之后时，则可以把疑问内容组成<strong class='usage-key'>嵌入疑问</strong>。",
                items: [
                    {
                        title: "表示原因不确定",
                        definition: "说话人根据已经观察到的结果推测原因，但<strong class='usage-key'>不能断定该原因一定成立</strong>。",
                        connection: "普通形＋からか／名词＋の＋せいか",
                        note: "「せいか」常用于<strong class='usage-key'>不理想的结果</strong>；「からか」用于从后项结果推测前项原因，语气较为中性。",
                        examples: [
                            { text: "風邪の<strong class='target-particle'>せいか</strong>、頭が重いです。", translation: "也许是因为感冒，觉得头很沉。" },
                            { text: "この団地はペットを飼っている人が多い<strong class='target-particle'>からか</strong>、住民同士の交流が盛んです。", translation: "也许是因为这个小区养宠物的人很多，居民之间的交流很活跃。" }
                        ]
                    },
                    {
                        title: "表示传闻来源或目的不确定",
                        definition: "把听到的内容或推测的目的作为说明依据，但<strong class='usage-key'>不把它作为已经确认的事实</strong>。",
                        connection: "普通形＋とかで／动词辞书形＋ためか",
                        note: "「とかで」表示<strong class='usage-key'>传闻中的原因或情况</strong>；「ためか」表示根据行为推测其<strong class='usage-key'>目的</strong>。",
                        examples: [
                            { text: "人身事故があった<strong class='target-particle'>とかで</strong>、現在、電車が止まっています。", translation: "听说是发生了人身事故，现在列车停运了。" },
                            { text: "彼は日本語を勉強する<strong class='target-particle'>ためか</strong>、日本へ来たようです。", translation: "他似乎是为了学习日语而来到了日本。" }
                        ]
                    },
                    {
                        title: "构成嵌入疑问",
                        definition: "用「句子＋か」把疑问内容组成<strong class='usage-key'>名词性从句</strong>，作为「知る」「聞く」「決める」等谓语的对象。",
                        connection: "含疑问词的句子＋か／一般疑问句＋かどうか",
                        note: "句中有疑问词时使用「か」；不含疑问词、需要表示<strong class='usage-key'>“是否”</strong>时，通常使用「かどうか」。",
                        examples: [
                            { text: "どこへ行った<strong class='target-particle'>か</strong>教えてください。", translation: "请告诉我去了哪里。" },
                            { text: "明日雨が降る<strong class='target-particle'>かどうか</strong>知りたいです。", translation: "我想知道明天是否会下雨。" }
                        ]
                    }
                ]
            }
        },
        "やら": {
            desc: "接在疑问词之后，表示<strong class='usage-key'>对象或内容不明确</strong>",
            usages: [
                {
                    title: "表示不确定的事物或情况",
                    definition: "接在疑问词之后，表示存在某种事物或情况，但说话人<strong class='usage-key'>无法明确指出具体内容</strong>。",
                    connection: "疑问词＋やら（常见形式：何やら）",
                    note: "现代日语中以「何やら」最为常见，常用来表示<strong class='usage-key'>听到、看到或感觉到某事，却不能确认内容</strong>。这一用法不同于并列助词「AやらBやら」。",
                    examples: [
                        { text: "先生は学生に何<strong class='target-particle'>やら</strong>小声で話しています。", translation: "老师正在小声地对学生说着什么。" },
                        { text: "廊下で何<strong class='target-particle'>やら</strong>大きな音がしました。", translation: "走廊里传来了某种很大的声音。" }
                    ]
                }
            ]
        },
        "など": {
            desc: "<strong class='usage-key'>列举代表项目</strong>，或把前项作为<strong class='usage-key'>评价对象</strong>提出",
            usages: [
                {
                    title: "列举一个或几个代表项目",
                    definition: "举出前项作为同类事物中的代表，表示<strong class='usage-key'>除此以外还存在其他项目</strong>。",
                    connection: "名词／动词普通形＋など",
                    note: "既可以<strong class='usage-key'>单独举例</strong>，也可用于「AやBなど」的形式。",
                    examples: [
                        { text: "会議では予算や日程<strong class='target-particle'>など</strong>について話し合いました。", translation: "会议讨论了预算、日程等事项。" },
                        { text: "冷蔵庫には卵や牛乳<strong class='target-particle'>など</strong>があります。", translation: "冰箱里有鸡蛋、牛奶等。" }
                    ],
                    relatedGrammar: {
                        lead: "「など」的列举作用与「する」结合后，可以把前项作为<strong class='usage-key'>实现后项的一种代表性手段</strong>提出。",
                        items: [
                            {
                                sourceId: "supp-n1-review-034",
                                displayTitle: "〜などして",
                                displayMeaning: "采取……等方式／通过……等手段",
                                displayConnection: "名词＋などして／动词普通形＋などして",
                                relation: "把前项动作列举为实现后项的代表性手段。",
                                explanation: "举出为了解决问题、完成任务或达到目的而采取的<strong class='usage-key'>一种代表性行动或方法</strong>，同时暗示还可以采用其他办法。前项说明具体手段，后项常接<strong class='usage-key'>「調べる」「解決する」「過ごす」「改善する」</strong>等表示调查、处理、度过或改善结果的谓语。",
                                examples: [
                                    { text: "分からない言葉は、辞書を引く<strong class='target-particle'>などして</strong>自分で調べてください。", translation: "不懂的词语请通过查字典等方式自行确认。" },
                                    { text: "週末は散歩<strong class='target-particle'>などして</strong>気分転換をしています。", translation: "周末会通过散步等方式转换心情。" }
                                ]
                            }
                        ]
                    }
                },
                {
                    title: "表示轻视、谦逊或强烈排除",
                    definition: "把前项作为不重要、能力不足或不值得考虑的项目提出，体现说话人的<strong class='usage-key'>主观评价</strong>。",
                    connection: "名词／动词普通形＋など",
                    note: "用于自己时可表示<strong class='usage-key'>谦逊</strong>；用于他人时可能显得<strong class='usage-key'>轻视</strong>，应注意语境。",
                    examples: [
                        { text: "私<strong class='target-particle'>など</strong>には、その仕事はまだできません。", translation: "像我这样的人还做不了那项工作。" },
                        { text: "今は忙しくて、旅行<strong class='target-particle'>など</strong>考えられません。", translation: "现在很忙，根本无暇考虑旅行之类的事。" }
                    ]
                }
            ],
            supplement: {
                title: "会话中的「なんか」与「なんて」",
                lead: "「なんか」「なんて」都与「など」存在意义上的联系，但它们的<strong class='usage-key'>接续范围</strong>和<strong class='usage-key'>说话人的态度</strong>并不相同，应作为补充形式分别掌握。",
                items: [
                    {
                        form: "なんか",
                        title: "「なんか」：后置于名词，表示举例或评价",
                        definition: "以较为随意的方式<strong class='usage-key'>举出前项作为例子</strong>，也可以表示轻视、谦逊等评价。",
                        connection: "名词＋なんか（＋格助词）",
                        note: "<strong class='usage-key'>主要用于会话</strong>。表示举例时与「など」意思相近；句首的「なんか変だ」表示“总觉得有些奇怪”，<strong class='usage-key'>不属于这里讲解的副助词用法</strong>。",
                        examples: [
                            { text: "休日は映画<strong class='target-particle'>なんか</strong>を見て過ごします。", translation: "休息日会看看电影之类的来度过。" },
                            { text: "私<strong class='target-particle'>なんか</strong>には、そんな大切な仕事はできません。", translation: "像我这样的人，做不了那么重要的工作。" }
                        ]
                    },
                    {
                        form: "なんて",
                        title: "「なんて」：后置于名词或句子，提出内容并表示评价",
                        definition: "把名词或前面的整个内容作为话题提出，并表示<strong class='usage-key'>惊讶、批评、轻视或谦逊</strong>等态度。",
                        connection: "名词／普通形＋なんて",
                        note: "「なんて」可以<strong class='usage-key'>接在完整句子之后</strong>，对前项事实作出评价，因此<strong class='usage-key'>并非所有场合都能直接换成「など」</strong>。",
                        examples: [
                            { text: "彼が約束を忘れる<strong class='target-particle'>なんて</strong>、信じられません。", translation: "真不敢相信他竟然忘记了约定。" },
                            { text: "私<strong class='target-particle'>なんて</strong>、まだ経験が足りません。", translation: "像我这样的人，经验还远远不够。" }
                        ]
                    },
                    {
                        form: "なんて＋名词",
                        title: "「なんて＋名词」：放在名词前作修饰语",
                        definition: "「なんて」放在名词或名词短语之前，作为前置修饰语使用，相当于口语中的「なんという」，用于<strong class='usage-key'>询问名称、种类</strong>或表达<strong class='usage-key'>强烈感叹</strong>。",
                        connection: "なんて＋名词／なんて＋形容表达＋名词",
                        note: "询问名称时常用于「なんて名前」「なんて花」；表示感叹时常与「〜でしょう／〜だろう」等句末形式配合。<strong class='usage-key'>这一用法不是「など」的直接替换形式</strong>。",
                        examples: [
                            { text: "この植物は<strong class='target-particle'>なんて</strong>名前ですか。", translation: "这种植物叫什么名字？" },
                            { text: "<strong class='target-particle'>なんて</strong>美しい景色でしょう。", translation: "多么美丽的景色啊！" }
                        ]
                    }
                ]
            }
        }
    };

    function setActiveTab(tabId) {
        document.querySelectorAll(".case-tab").forEach((tab) => {
            tab.classList.toggle("is-active", tab.id === tabId);
            if (tab.id === tabId) tab.setAttribute("aria-current", "page");
            else tab.removeAttribute("aria-current");
        });
    }

    function setActiveIndex(sectionId) {
        document.querySelectorAll(".case-index-button").forEach((button) => {
            const active = button.dataset.section === sectionId;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
    }

    function showStudyPanel(panelId) {
        document.getElementById("mode-study").classList.add("is-active");
        document.querySelectorAll(".case-panel").forEach((panel) => {
            panel.classList.toggle("is-active", panel.id === panelId);
        });
    }

    function updateRoute(route, push) {
        const nextHash = `#${encodeURIComponent(route)}`;
        if (window.location.hash === nextHash) return;
        const method = push ? "pushState" : "replaceState";
        window.history[method](null, "", nextHash);
    }

    function showConcept(push = true) {
        showStudyPanel("concept-panel");
        setActiveTab("tab-concept");
        setActiveIndex("concept");
        updateRoute("concept", push);
    }

    function showAtlas(push = true) {
        showStudyPanel("atlas-panel");
        setActiveTab("tab-particles");
        setActiveIndex("");
        renderGrammarMap(activeGrammarMapParticle);
        updateRoute(`grammar-map-${activeGrammarMapParticle}`, push);
    }

    function showSpecial(push = true) {
        showStudyPanel("special-panel");
        setActiveTab("tab-concept");
        setActiveIndex("special");
        updateRoute("special", push);
    }

    function setupLearningIndexToggle() {
        const layout = document.querySelector(".case-study-layout");
        const button = document.getElementById("adverbial-index-toggle");
        const content = document.getElementById("adverbial-index-list");
        if (!layout || !button || !content) return;

        const desktopQuery = typeof window.matchMedia === "function"
            ? window.matchMedia("(min-width: 861px)")
            : { matches: true };
        let collapsed = false;

        const sync = () => {
            const isCollapsed = collapsed && desktopQuery.matches;
            const label = button.querySelector(".adverbial-index-toggle-label");
            const icon = button.querySelector(".adverbial-index-toggle-icon");

            layout.classList.toggle("is-index-collapsed", isCollapsed);
            button.setAttribute("aria-expanded", String(!isCollapsed));
            button.setAttribute("aria-label", isCollapsed ? "向右展开学习目录" : "向左收起学习目录");
            button.title = isCollapsed ? "展开学习目录" : "收起学习目录";
            content.setAttribute("aria-hidden", String(isCollapsed));
            if (label) label.textContent = isCollapsed ? "展开" : "收起";
            if (icon) icon.textContent = isCollapsed ? "→" : "←";
        };

        button.addEventListener("click", () => {
            collapsed = !collapsed;
            sync();
        });

        if (typeof desktopQuery.addEventListener === "function") {
            desktopQuery.addEventListener("change", () => sync());
        }

        sync();
    }

    const grammarSourceById = new Map(
        ((window.GrammarDB && window.GrammarDB.core) || []).map((item) => [item.id, item])
    );

    const grammarLevelOrder = { N5: 1, N4: 2, N3: 3, N2: 4, N1: 5 };

    function getOrderedRelatedItems(relatedGrammar) {
        if (!relatedGrammar || !Array.isArray(relatedGrammar.items)) return [];
        return relatedGrammar.items
            .map((item, originalIndex) => ({ item, originalIndex }))
            .sort((a, b) => {
                const sourceA = grammarSourceById.get(a.item.sourceId) || a.item.sourceMeta || {};
                const sourceB = grammarSourceById.get(b.item.sourceId) || b.item.sourceMeta || {};
                const rankA = grammarLevelOrder[sourceA.level] || 99;
                const rankB = grammarLevelOrder[sourceB.level] || 99;
                return rankA - rankB || a.originalIndex - b.originalIndex;
            })
            .map(({ item }) => item);
    }

    function getUsageAnchor(particle, usageIndex, section = "usage") {
        return `particle-${particle}-${section}-${usageIndex + 1}`;
    }

    function getGrammarAnchor(particle, usageIndex, grammarIndex) {
        return `${getUsageAnchor(particle, usageIndex)}-grammar-${grammarIndex + 1}`;
    }

    function normalizeGrammarMarkup(text) {
        return String(text || "")
            .replace(/<b>/g, "<strong class='usage-key'>")
            .replace(/<\/b>/g, "</strong>");
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function renderExample(example, label, secondary) {
        return `
            <div class="${secondary ? "particle-example-secondary" : "particle-example-primary"}">
                <p class="particle-example-label">${label}</p>
                <p class="particle-example particle-example-japanese">${example.text}</p>
                <p class="particle-example-translation">${example.translation}</p>
            </div>
        `;
    }

    function renderRelatedGrammar(relatedGrammar, usageIndex, particle) {
        if (!relatedGrammar || !Array.isArray(relatedGrammar.items)) return "";

        const orderedItems = getOrderedRelatedItems(relatedGrammar);

        const entries = orderedItems.map((item, itemIndex) => {
            const source = grammarSourceById.get(item.sourceId) || item.sourceMeta;
            if (!source) return "";

            const title = item.displayTitle || source.title;
            const meaning = item.displayMeaning || source.meaning;
            const connection = item.displayConnection || source.connection;
            const number = `${String(usageIndex + 1).padStart(2, "0")}-${itemIndex + 1}`;
            const anchor = getGrammarAnchor(particle, usageIndex, itemIndex);
            if (window.GrammarLearningCatalog?.updateSourceAnchor) {
                window.GrammarLearningCatalog.updateSourceAnchor(
                    item.sourceId,
                    "adverbial-particles",
                    anchor
                );
            }
            const examplePairs = item.examples.map((example) => `
                <div class="particle-related-example-pair">
                    <p class="particle-related-example-jp" lang="ja">${example.text}</p>
                    <p class="particle-related-example-cn">${example.translation}</p>
                </div>
            `).join("");

            return `
                <article id="${anchor}" class="particle-related-entry" data-grammar-source="${item.sourceId}" tabindex="-1">
                    <header class="particle-related-entry-heading">
                        <span class="particle-related-number">${number}</span>
                        <div class="particle-related-title-block">
                            <div class="particle-related-title-line">
                                <h5 lang="ja">${title}</h5>
                                <span class="particle-related-heading-meaning">${meaning}</span>
                            </div>
                        </div>
                        <button
                            class="grammar-learning-favorite particle-related-favorite"
                            type="button"
                            data-grammar-favorite="${escapeHtml(item.sourceId)}"
                            data-grammar-title="${escapeHtml(title)}"
                        ></button>
                    </header>
                    <div class="particle-related-body">
                        <div class="particle-related-meta-block">
                            <span class="particle-related-label">接续</span>
                            <p class="particle-related-connection">${connection}</p>
                        </div>
                        <div class="particle-related-explanation">
                            <span class="particle-related-label">用法说明</span>
                            <p>${normalizeGrammarMarkup(item.explanation || source.desc)}</p>
                        </div>
                        <div class="particle-related-example-block">
                            <span class="particle-related-label">例句</span>
                            ${examplePairs}
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        if (!entries) return "";

        return `
            <section class="particle-related" aria-labelledby="particle-related-${particle}-${usageIndex + 1}">
                <header class="particle-related-heading">
                    <p>RELATED GRAMMAR</p>
                    <h4 id="particle-related-${particle}-${usageIndex + 1}">从这一用法形成的相关语法</h4>
                    <span>${relatedGrammar.lead}</span>
                </header>
                <div class="particle-related-list">${entries}</div>
            </section>
        `;
    }

    function renderUsage(usage, index, kicker = "用法", particle = "", section = "usage") {
        return `
            <section id="${getUsageAnchor(particle, index, section)}" class="particle-usage" tabindex="-1">
                <header class="particle-usage-header">
                    <span class="particle-usage-number">${String(index + 1).padStart(2, "0")}</span>
                    <div>
                        <p class="particle-usage-kicker">${kicker}</p>
                        <h3 class="particle-usage-title">${usage.title}</h3>
                    </div>
                </header>
                <div class="particle-usage-body">
                    <div class="particle-usage-guide">
                        <div class="particle-guide-row">
                            <span class="particle-guide-label">作用</span>
                            <p>${usage.definition}</p>
                        </div>
                        <div class="particle-guide-row">
                            <span class="particle-guide-label particle-guide-label--connection">接续</span>
                            <p><strong class="usage-key">${usage.connection}</strong></p>
                        </div>
                        <div class="particle-guide-row">
                            <span class="particle-guide-label particle-guide-label--judgment">说明</span>
                            <p>${usage.note}</p>
                        </div>
                    </div>
                    <div class="particle-examples">
                        ${renderExample(usage.examples[0], "例句 1", false)}
                        ${renderExample(usage.examples[1], "例句 2", true)}
                    </div>
                </div>
                ${renderRelatedGrammar(usage.relatedGrammar, index, particle)}
            </section>
        `;
    }

    function renderSupplement(supplement, particle) {
        if (!supplement) return "";
        const items = supplement.items.map((item, index) => renderUsage(item, index, "补充用法", particle, "supplement")).join("");

        return `
            <section class="particle-supplement" aria-labelledby="particle-supplement-${particle}-title">
                <header class="particle-supplement-heading">
                    <p>SUPPLEMENT</p>
                    <h3 id="particle-supplement-${particle}-title">${supplement.title}</h3>
                    <span>${supplement.lead}</span>
                </header>
                <div class="particle-usages particle-supplement-usages">${items}</div>
            </section>
        `;
    }

    function renderDegreeLesson() {
        return `
            <section id="degree-kurai-hodo" class="particle-degree-lesson" aria-labelledby="degree-lesson-title">
                <header class="particle-degree-lesson-heading">
                    <span>专题</span>
                    <div>
                        <p>DEGREE CLAUSE</p>
                        <h3 id="degree-lesson-title">程度句的构成</h3>
                    </div>
                </header>

                <section class="particle-degree-section">
                    <h4><span>01</span>作用</h4>
                    <p>「くらい／ほど」接在表示程度的小句后，用前项说明后项的动作或状态<strong class="usage-key">达到什么程度</strong>。</p>
                </section>

                <section class="particle-degree-section">
                    <h4><span>02</span>基本结构</h4>
                    <div class="particle-degree-structure">
                        <span>表示程度的小句</span>
                        <b>＋</b>
                        <strong lang="ja">くらい／ほど</strong>
                        <b>＋</b>
                        <span>主要内容</span>
                    </div>
                </section>

                <section class="particle-degree-section">
                    <h4><span>03</span>造句方法</h4>
                    <ol class="particle-degree-steps">
                        <li><span>先确定主要内容</span><p lang="ja">緊張しました。</p><small>我很紧张。</small></li>
                        <li><span>补充具体程度</span><p lang="ja">声が出ない</p><small>紧张到说不出话。</small></li>
                        <li><span>用「ほど」连接</span><p lang="ja">声が出ない<strong>ほど</strong>緊張しました。</p><small>我紧张得说不出话。</small></li>
                    </ol>
                </section>

                <section class="particle-degree-section">
                    <h4><span>04</span>接续</h4>
                    <div class="particle-degree-rule-list">
                        <p><b>修饰谓语</b><span>前项使用<strong class="usage-key">普通形</strong>：声が出ないほど／泣きたいくらい。</span></p>
                        <p><b>修饰名词</b><span>使用<strong class="usage-key">ほどの／くらいの＋名词</strong>：驚くほどの速さ。</span></p>
                    </div>
                </section>

                <section class="particle-degree-section">
                    <h4><span>05</span>例句</h4>
                    <div class="particle-degree-example-list">
                        <div><p lang="ja">涙が出る<strong>くらい</strong>うれしかったです。</p><span>高兴到了要流泪的程度。</span></div>
                        <div><p lang="ja">みんなが驚く<strong>ほどの</strong>速さで走りました。</p><span>以令所有人吃惊的速度奔跑。</span></div>
                    </div>
                </section>
            </section>
        `;
    }

    function renderParticle(particle) {
        const data = particleData[particle];
        const detail = document.getElementById("particle-detail");
        if (!data || !detail) return;

        const usages = data.usages.map((usage, index) => renderUsage(usage, index, "用法", particle)).join("");

        detail.innerHTML = `
            <header id="particle-${particle}-top" class="particle-heading" tabindex="-1">
                <strong>${particle}</strong>
                <div>
                    <span>ADVERBIAL PARTICLE</span>
                    <p>${data.desc}</p>
                </div>
            </header>
            <div class="particle-usages">${usages}</div>
            ${renderSupplement(data.supplement, particle)}
        `;
    }

    function activateParticle(particle) {
        if (!particleData[particle]) return;
        showStudyPanel("particle-detail");
        setActiveTab("tab-concept");
        setActiveIndex(particle);
        renderParticle(particle);
    }

    function showParticle(particle, push = true) {
        if (!particleData[particle]) return;
        activateParticle(particle);
        updateRoute(`particle-${particle}`, push);
    }

    function showParticleTarget(particle, targetId, route, push = true) {
        if (!particleData[particle]) return;
        activateParticle(particle);
        updateRoute(route, push);
        window.requestAnimationFrame(() => {
            const target = document.getElementById(targetId);
            if (!target) return;
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    function showDegreeTopic(push = true) {
        const detail = document.getElementById("particle-detail");
        showStudyPanel("particle-detail");
        setActiveTab("tab-concept");
        setActiveIndex("degree-topic");
        detail.innerHTML = renderDegreeLesson();
        updateRoute("degree-kurai-hodo", push);
    }

    let activeGrammarMapParticle = particleOrder[0];

    function getGrammarMapCount(data) {
        const relatedCount = data.usages.reduce((total, usage) => {
            return total + getOrderedRelatedItems(usage.relatedGrammar).length;
        }, 0);
        const supplementCount = data.supplement && Array.isArray(data.supplement.items)
            ? data.supplement.items.length
            : 0;
        return relatedCount + supplementCount;
    }

    function renderGrammarMapNavigation(activeParticle) {
        const navigation = document.getElementById("grammar-map-particle-nav");
        if (!navigation) return;

        navigation.innerHTML = particleOrder.map((particle) => {
            const count = getGrammarMapCount(particleData[particle]);
            const current = particle === activeParticle;
            return `
                <button type="button" class="grammar-map-particle-button${current ? " is-active" : ""}" data-map-select="${particle}"${current ? " aria-current=\"true\"" : ""}>
                    <strong lang="ja">${particle}</strong>
                    <span>${count > 0 ? `${count} 项关联` : "基础用法"}</span>
                </button>
            `;
        }).join("");
    }

    function renderGrammarMapTargetButton({ particle, targetId, route, title, meaning, level, kind = "grammar" }) {
        return `
            <button type="button" class="grammar-map-${kind}-node" data-map-particle="${particle}" data-map-target="${targetId}" data-map-route="${route}">
                <span class="grammar-map-node-meta">${level}</span>
                <strong lang="ja">${title}</strong>
            </button>
        `;
    }

    function renderGrammarMap(particle) {
        const map = document.getElementById("adverbial-grammar-map");
        const data = particleData[particle];
        if (!map || !data) return;

        activeGrammarMapParticle = particle;
        renderGrammarMapNavigation(particle);

        const branches = data.usages.map((usage, usageIndex) => {
            const usageAnchor = getUsageAnchor(particle, usageIndex);
            const orderedItems = getOrderedRelatedItems(usage.relatedGrammar);
            const grammarNodes = orderedItems.map((item, grammarIndex) => {
                const source = grammarSourceById.get(item.sourceId) || item.sourceMeta || {};
                return renderGrammarMapTargetButton({
                    particle,
                    targetId: getGrammarAnchor(particle, usageIndex, grammarIndex),
                    route: `detail-${particle}-usage-${usageIndex + 1}-grammar-${grammarIndex + 1}`,
                    title: item.displayTitle || source.title || "相关语法",
                    meaning: item.displayMeaning || source.meaning || item.relation || "查看详细讲解",
                    level: source.level || "语法"
                });
            }).join("");

            return `
                <div class="grammar-map-branch${grammarNodes ? "" : " is-basic-only"}">
                    <button type="button" class="grammar-map-usage-node" data-map-particle="${particle}" data-map-target="${usageAnchor}" data-map-route="detail-${particle}-usage-${usageIndex + 1}">
                        <span>${String(usageIndex + 1).padStart(2, "0")}</span>
                        <strong>${usage.title}</strong>
                    </button>
                    ${grammarNodes ? `
                        <span class="grammar-map-connector" aria-hidden="true"><i></i></span>
                        <div class="grammar-map-related-nodes">${grammarNodes}</div>
                    ` : ""}
                </div>
            `;
        });

        if (data.supplement && Array.isArray(data.supplement.items) && data.supplement.items.length) {
            const supplementNodes = data.supplement.items.map((item, supplementIndex) => {
                return renderGrammarMapTargetButton({
                    particle,
                    targetId: getUsageAnchor(particle, supplementIndex, "supplement"),
                    route: `detail-${particle}-supplement-${supplementIndex + 1}`,
                    title: item.form || item.title,
                    meaning: item.title,
                    level: "补充",
                    kind: "supplement"
                });
            }).join("");

            branches.push(`
                <div class="grammar-map-branch is-supplement">
                    <div class="grammar-map-usage-node is-static">
                        <span>补充</span>
                        <strong>${data.supplement.title}</strong>
                    </div>
                    <span class="grammar-map-connector" aria-hidden="true"><i></i></span>
                    <div class="grammar-map-related-nodes">${supplementNodes}</div>
                </div>
            `);
        }

        map.innerHTML = `
            <div class="grammar-map-root-column">
                <button type="button" class="grammar-map-root" data-map-particle="${particle}" data-map-target="particle-${particle}-top" data-map-route="particle-${particle}">
                    <span>副助词</span>
                    <strong lang="ja">${particle}</strong>
                    <em>查看完整讲解&nbsp; →</em>
                </button>
            </div>
            <div class="grammar-map-branches">${branches.join("")}</div>
        `;
    }

    function showGrammarMap(particle, push = true) {
        if (!particleData[particle]) return;
        activeGrammarMapParticle = particle;
        showStudyPanel("atlas-panel");
        setActiveTab("tab-particles");
        setActiveIndex("");
        renderGrammarMap(particle);
        updateRoute(`grammar-map-${particle}`, push);
    }

    function openDetailRoute(route) {
        const parts = route.split("-");
        const particle = parts[1];
        const section = parts[2];
        const itemIndex = Number(parts[3]) - 1;
        if (!particleData[particle] || itemIndex < 0) return false;

        if (section === "usage") {
            const grammarMarker = parts[4];
            const grammarIndex = Number(parts[5]) - 1;
            const targetId = grammarMarker === "grammar" && grammarIndex >= 0
                ? getGrammarAnchor(particle, itemIndex, grammarIndex)
                : getUsageAnchor(particle, itemIndex);
            showParticleTarget(particle, targetId, route, false);
            return true;
        }

        if (section === "supplement") {
            showParticleTarget(particle, getUsageAnchor(particle, itemIndex, "supplement"), route, false);
            return true;
        }

        return false;
    }

    function openCurrentRoute() {
        const route = decodeURIComponent(window.location.hash.slice(1) || "concept");
        if (route === "atlas" || route === "grammar-map") showGrammarMap(activeGrammarMapParticle, false);
        else if (route.startsWith("grammar-map-")) showGrammarMap(route.slice(12), false);
        else if (route.startsWith("detail-") && openDetailRoute(route)) return;
        else if (route === "degree-kurai-hodo") showDegreeTopic(false);
        else if (route === "special") showSpecial(false);
        else if (route.startsWith("particle-")) showParticle(route.slice(9), false);
        else showConcept(false);
    }

    document.addEventListener("DOMContentLoaded", () => {
        setupLearningIndexToggle();
        renderGrammarMap(activeGrammarMapParticle);

        const grammarMapNavigation = document.getElementById("grammar-map-particle-nav");
        const grammarMap = document.getElementById("adverbial-grammar-map");

        if (grammarMapNavigation) {
            grammarMapNavigation.addEventListener("click", (event) => {
                const button = event.target.closest("[data-map-select]");
                if (!button) return;
                showGrammarMap(button.dataset.mapSelect);
            });
        }

        if (grammarMap) {
            grammarMap.addEventListener("click", (event) => {
                const button = event.target.closest("[data-map-target]");
                if (!button) return;
                showParticleTarget(
                    button.dataset.mapParticle,
                    button.dataset.mapTarget,
                    button.dataset.mapRoute
                );
            });
        }

        document.querySelectorAll(".case-tab").forEach((tab) => {
            tab.addEventListener("click", () => {
                if (tab.dataset.view === "atlas") showAtlas();
                else showConcept();
            });
        });

        document.querySelectorAll(".case-index-button").forEach((button) => {
            button.addEventListener("click", () => {
                const section = button.dataset.section;
                if (section === "concept") showConcept();
                else if (section === "special") showSpecial();
                else if (section === "degree-topic") showDegreeTopic();
                else showParticle(section);
            });
        });

        window.addEventListener("popstate", openCurrentRoute);
        openCurrentRoute();
    });
})();
