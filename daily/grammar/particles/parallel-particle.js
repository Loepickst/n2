(function () {
    "use strict";

    const particleOrder = ["と", "や", "に", "とか", "やら", "たり", "か", "なり", "だの"];

    const particleData = {
        "と": {
            desc: "把列举范围内的项目<strong class='usage-key'>完整列出</strong>，相当于“……和……”",
            usages: [
                {
                    title: "完整列举相关项目",
                    definition: "连接两个以上的名词性成分，表示说话人把当前范围内的项目<strong class='usage-key'>全部列出</strong>。",
                    connection: "名词＋と＋名词",
                    note: "由「と」连接的部分整体作为一个名词性成分使用，表示该语境中的<strong class='usage-key'>封闭、完整的列举范围</strong>；格助词通常放在整个并列结构之后。",
                    examples: [
                        { text: "机の上に本<strong class='target-particle'>と</strong>ノート<strong class='target-particle'>と</strong>辞書があります。", translation: "桌子上有书、笔记本和词典。" },
                        { text: "父<strong class='target-particle'>と</strong>母<strong class='target-particle'>と</strong>一緒に京都へ旅行しました。", translation: "我和父亲、母亲一起去了京都旅行。" }
                    ]
                }
            ]
        },
        "や": {
            desc: "从同类项目中选出几个代表进行<strong class='usage-key'>部分列举</strong>，暗示还有其他项目",
            usages: [
                {
                    title: "列举部分代表项目",
                    definition: "连接两个以上的名词性成分，只举出其中几个代表，表示<strong class='usage-key'>列举尚未结束</strong>。",
                    connection: "名词＋や＋名词",
                    note: "「や」后的项目不是全部。整个并列结构后常接「など」，进一步表明<strong class='usage-key'>还有未说出的同类项目</strong>。",
                    examples: [
                        { text: "休日は本<strong class='target-particle'>や</strong>雑誌を読みます。", translation: "休息日会读书、杂志之类的东西。" },
                        { text: "机の上に鉛筆<strong class='target-particle'>や</strong>消しゴムがあります。", translation: "桌子上有铅笔、橡皮等物品。" }
                    ],
                    related: {
                        lead: "部分列举的「や」可以与「など」组成明确的列举结构，也可以接「何か」笼统表示与前项同类的事物。",
                        items: [
                            grammar("N5", "〜や〜など", "……和……等", "名词A＋や＋名词B＋など", "列举两个以上的代表项目，并用「など」明确表示<strong class='usage-key'>此外还存在其他同类成员</strong>。整个结构后再接句中所需的格助词。", [
                                ["旅行には着替え<strong class='target-particle'>や</strong>薬<strong class='target-particle'>など</strong>を持っていきます。", "旅行时会带换洗衣物、药品等。"],
                                ["この地域では米<strong class='target-particle'>や</strong>野菜<strong class='target-particle'>など</strong>が作られています。", "这一地区种植水稻、蔬菜等作物。"]
                            ]),
                            grammar("基础", "〜や何か", "……什么的／……之类的", "名词＋や何か", "先提出一个有代表性的事物，再用「何か」含糊地指代<strong class='usage-key'>与前项相近的其他事物</strong>。常用于口语中的提议、询问或不需要明确列出具体项目的场合。", [
                                ["疲れたでしょう。お茶<strong class='target-particle'>や何か</strong>飲みませんか。", "累了吧。要不要喝点茶什么的？"],
                                ["週末は映画<strong class='target-particle'>や何か</strong>を見て、ゆっくり過ごしたいです。", "周末想看看电影什么的，悠闲地度过。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "に": {
            desc: "把同一场景中的多个项目逐项叠加，表现<strong class='usage-key'>各种成分共同构成一个整体</strong>",
            usages: [
                {
                    title: "叠加列举同一场景中的项目",
                    definition: "连续列出某一场景中同时存在的事物、任务或配置，强调<strong class='usage-key'>一项又一项地叠加起来</strong>。",
                    connection: "名词＋に＋名词（＋に＋名词）",
                    note: "常用于服装搭配、饮食搭配、随身物品或生活中同时要处理的事情。与单纯连接项目的「と」相比，「に」更突出<strong class='usage-key'>各项累积后形成的整体印象</strong>。",
                    examples: [
                        { text: "仕事<strong class='target-particle'>に</strong>家事<strong class='target-particle'>に</strong>育児で、毎日とても忙しいです。", translation: "工作、家务再加上育儿，每天都非常忙。" },
                        { text: "コート<strong class='target-particle'>に</strong>マフラー<strong class='target-particle'>に</strong>手袋で、冬の準備は万全です。", translation: "大衣、围巾再加上手套，过冬的准备十分齐全。" }
                    ]
                }
            ]
        },
        "とか": {
            desc: "以较口语的方式举出若干例子，表示<strong class='usage-key'>……之类的／……什么的</strong>",
            usages: [
                {
                    title: "口语中列举若干例子",
                    definition: "从相关范围中随意举出一个或多个例子，表示这些只是<strong class='usage-key'>可能项目中的一部分</strong>。",
                    connection: "名词／普通形＋とか（＋名词／普通形＋とか）",
                    note: "「とか」比「や」更口语，可以连接名词，也可以列举动作、状态或发言内容。重复使用时常带有<strong class='usage-key'>选择尚未确定或只是随口举例</strong>的语气。",
                    examples: [
                        { text: "週末は映画を見る<strong class='target-particle'>とか</strong>、買い物に行く<strong class='target-particle'>とか</strong>して過ごします。", translation: "周末会看看电影、逛逛街之类的。" },
                        { text: "飲み物はお茶<strong class='target-particle'>とか</strong>コーヒーがいいです。", translation: "饮料的话，茶或者咖啡之类的比较好。" }
                    ]
                }
            ]
        },
        "やら": {
            desc: "把性质不同或难以整理的项目并列起来，表示<strong class='usage-key'>又是……又是……</strong>",
            usages: [
                {
                    title: "杂乱地列举多个项目",
                    definition: "列举同时出现的事物、动作或感情，表示项目较多，且说话人<strong class='usage-key'>难以逐一整理或说明</strong>。",
                    connection: "名词／普通形＋やら＋名词／普通形＋やら",
                    note: "常用于忙乱、复杂或情绪交织的场景。与中性的「や」相比，「やら」更容易带有<strong class='usage-key'>困惑、感慨或不知如何概括</strong>的语气。",
                    examples: [
                        { text: "引っ越しで荷造り<strong class='target-particle'>やら</strong>手続き<strong class='target-particle'>やら</strong>に追われています。", translation: "因为搬家，又要打包又要办手续，忙得不可开交。" },
                        { text: "合格の知らせを聞いて、うれしい<strong class='target-particle'>やら</strong>驚く<strong class='target-particle'>やら</strong>で言葉が出ませんでした。", translation: "听到合格的消息，又高兴又惊讶，一时说不出话来。" }
                    ],
                    related: {
                        lead: "无法完整说清所有事项时，可以使用固定组合「〜やら何やら」笼统概括其他相关内容。",
                        items: [
                            grammar("N2", "〜やら何やら", "……以及其他种种／……什么的", "名词／普通形＋やら何やら", "先提出一个代表事项，再用「何やら」笼统概括其他内容，表示<strong class='usage-key'>相关事情很多，难以或无须逐项说明</strong>。", [
                                ["引っ越しの準備<strong class='target-particle'>やら何やら</strong>で、今週はずっと忙しいです。", "因为搬家准备以及其他各种事情，这周一直很忙。"],
                                ["書類の確認<strong class='target-particle'>やら何やら</strong>をしていたら、夕方になりました。", "核对文件以及处理其他事情时，不知不觉就到了傍晚。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "たり": {
            desc: "列举具有代表性的动作或状态，或表示它们<strong class='usage-key'>反复、交替出现</strong>",
            usages: [
                {
                    title: "列举代表性的动作或状态",
                    definition: "从实际发生的动作或状态中举出若干代表，表示除此以外<strong class='usage-key'>还可能有其他同类情况</strong>。",
                    connection: "动词た形＋り／い形容词：〜かったり／な形容词・名词：〜だったり（＋する／です）",
                    note: "基本形式是「〜たり〜たりする／です」。列举的内容只是代表，<strong class='usage-key'>不表示全部</strong>；句末的「する／です」决定整句的时态和礼貌程度。",
                    examples: [
                        { text: "休日は本を読ん<strong class='target-particle'>だり</strong>、映画を見<strong class='target-particle'>たり</strong>して過ごします。", translation: "休息日会看看书、看看电影之类的。" },
                        { text: "この店の客は学生だっ<strong class='target-particle'>たり</strong>、会社員だっ<strong class='target-particle'>たり</strong>します。", translation: "这家店的顾客有学生、公司职员等。" }
                    ],
                    related: {
                        lead: "句末的「〜たりして」可由列举一种可能性的用法发展为较轻松的推测表达。",
                        items: [
                            grammar("N3", "〜たりして", "说不定……／也许……", "动词た形＋りして／い形容词：〜かったりして／な形容词・名词：〜だったりして", "把某种情况作为一种可能性轻轻提出，表示<strong class='usage-key'>带有意外感、期待或调侃的推测</strong>。语气比「〜かもしれない」更加口语，常放在句末，并与「もしかして」等表达搭配。", [
                                ["もしかして、田中さんも参加し<strong class='target-particle'>たりして</strong>。", "说不定田中也会参加呢。"],
                                ["あんなに詳しいなんて、彼は専門家だっ<strong class='target-particle'>たりして</strong>。", "了解得那么详细，他说不定是专家呢。"]
                            ])
                        ]
                    }
                },
                {
                    title: "表示动作或状态反复交替",
                    definition: "把方向相反或性质不同的动作、状态并列起来，表示它们<strong class='usage-key'>交替出现或反复变化</strong>。",
                    connection: "动词た形＋り／い形容词：〜かったり／な形容词・名词：〜だったり（＋する／です）",
                    note: "这一用法常连接「行く／来る」「降る／やむ」「暖かい／寒い」等具有对照关系的内容，重点不是举例，而是<strong class='usage-key'>变化在两个状态之间反复发生</strong>。",
                    examples: [
                        { text: "雨が降っ<strong class='target-particle'>たり</strong>、やん<strong class='target-particle'>だり</strong>しています。", translation: "雨下下停停。" },
                        { text: "春の天気は暖かかっ<strong class='target-particle'>たり</strong>、寒かっ<strong class='target-particle'>たり</strong>です。", translation: "春天的天气时暖时冷。" }
                    ]
                }
            ]
        },
        "か": {
            desc: "列出两个以上的候选项，要求或提示从中<strong class='usage-key'>作出选择</strong>",
            usages: [
                {
                    title: "列出可供选择的项目",
                    definition: "连接两个以上的候选项，表示后面的判断、提问或行动需要<strong class='usage-key'>从这些选项中确定一个</strong>。",
                    connection: "名词／普通形＋か＋名词／普通形（＋か）",
                    note: "各选项后都可以使用「か」，使选择范围更加明确。疑问句中也常用「それとも」连接后一个选项；书面语或较正式的表达可使用<strong class='usage-key'>「または・あるいは・もしくは」</strong>。",
                    examples: [
                        { text: "今夜は寿司<strong class='target-particle'>か</strong>ラーメン<strong class='target-particle'>か</strong>、どちらがいいですか。", translation: "今晚吃寿司还是拉面，哪个好？" },
                        { text: "電車で行く<strong class='target-particle'>か</strong>、バスで行く<strong class='target-particle'>か</strong>、早く決めましょう。", translation: "坐电车去还是坐公交车去，我们尽快决定吧。" }
                    ]
                }
            ]
        },
        "なり": {
            desc: "提出两个以上可采用的选择，表示<strong class='usage-key'>任选其中一种即可</strong>",
            usages: [
                {
                    title: "列出可供选择的方案",
                    definition: "列举两个具有代表性的选择，表示听话人可以根据情况<strong class='usage-key'>采用其中任意一种</strong>。",
                    connection: "名词／动词辞书形＋なり＋名词／动词辞书形＋なり",
                    note: "后项常使用建议、请求、命令或表示方法的句子。列出的通常只是代表方案，暗示<strong class='usage-key'>采用其他合适的方法也可以</strong>。",
                    examples: [
                        { text: "分からないことは先生に聞く<strong class='target-particle'>なり</strong>、辞書で調べる<strong class='target-particle'>なり</strong>してください。", translation: "不明白的地方可以问老师，或者查词典。" },
                        { text: "電話<strong class='target-particle'>なり</strong>メール<strong class='target-particle'>なり</strong>で、早めに連絡してください。", translation: "请通过电话或邮件等方式尽早联系。" }
                    ]
                }
            ]
        },
        "だの": {
            desc: "列举多项言论或事物，并附带<strong class='usage-key'>厌烦、批评或强调杂多</strong>的语气",
            usages: [
                {
                    title: "带着评价反复列举",
                    definition: "列举多个事物、理由或他人的说法，同时表明说话人认为这些内容<strong class='usage-key'>琐碎、麻烦或不值得认同</strong>。",
                    connection: "名词／普通形＋だの＋名词／普通形＋だの",
                    note: "常与「言う」「文句を言う」「理由をつける」等表达搭配。与「や」相比，通常含有更明确的<strong class='usage-key'>负面评价或不耐烦语气</strong>。",
                    examples: [
                        { text: "忙しい<strong class='target-particle'>だの</strong>時間がない<strong class='target-particle'>だの</strong>と言って、彼は手伝おうとしません。", translation: "他一会儿说忙，一会儿说没时间，就是不肯帮忙。" },
                        { text: "部屋には服<strong class='target-particle'>だの</strong>雑誌<strong class='target-particle'>だの</strong>が散らかっています。", translation: "房间里衣服、杂志之类的东西散得到处都是。" }
                    ],
                    related: {
                        lead: "不想逐项复述对方的借口或抱怨时，可以用「〜だのなんだの」把其余内容一并概括。",
                        items: [
                            grammar("N1", "〜だのなんだの", "又说……又说别的／诸如此类", "名词／普通形＋だのなんだの（と）", "提出一个有代表性的说法，再用「なんだの」概括其他类似内容，表示对方<strong class='usage-key'>借口、要求或抱怨很多</strong>。常与「言う」「文句をつける」搭配。", [
                                ["忙しい<strong class='target-particle'>だのなんだの</strong>と言って、彼は会議に出ませんでした。", "他又说忙又说这说那的，没有参加会议。"],
                                ["値段が高い<strong class='target-particle'>だのなんだの</strong>と、客から文句を言われました。", "顾客又说价格贵又说这说那地抱怨了一通。"]
                            ])
                        ]
                    }
                }
            ]
        }
    };

    function grammar(level, title, meaning, connection, explanation, examples) {
        return { level, title, meaning, connection, explanation, examples: examples.map(([text, translation]) => ({ text, translation })) };
    }

    const specialGrammarItems = [
        grammar("N2", "〜といった", "诸如……之类的", "名词A・名词B＋といった＋上位类别名词", "列举一个或多个有代表性的项目，再用后面的名词说明它们所属的<strong class='usage-key'>共同类别</strong>。这里的「と」参与引用、概括前项内容，不表示完整并列。", [
            ["京都や奈良<strong class='target-particle'>といった</strong>古い町には、多くの文化財があります。", "京都、奈良等古城拥有许多文化遗产。"],
            ["地震や台風<strong class='target-particle'>といった</strong>自然災害への備えが必要です。", "需要为地震、台风等自然灾害做好准备。"]
        ]),
        grammar("N1", "〜といい〜といい", "无论……还是……都……", "名词A＋といい＋名词B＋といい", "以「言う」构成固定句型，从同一对象中提出两个有代表性的方面，并表示两者都符合后项评价。后项通常是对整体作出的<strong class='usage-key'>肯定或否定评价</strong>。", [
            ["色<strong class='target-particle'>といい</strong>、デザイン<strong class='target-particle'>といい</strong>、申し分のない商品です。", "无论颜色还是设计，这件商品都无可挑剔。"],
            ["味<strong class='target-particle'>といい</strong>、香り<strong class='target-particle'>といい</strong>、このお茶はすばらしいです。", "无论味道还是香气，这种茶都非常出色。"]
        ]),
        grammar("N1", "〜といわず〜といわず", "不分……还是……／到处都……", "名词A＋といわず＋名词B＋といわず", "以「言わず」构成固定句型，列出两个具有代表性的范围，表示<strong class='usage-key'>不对二者加以区分，相关范围无一例外</strong>。后项常描写状态遍及各处或持续出现在各个时间。", [
            ["顔<strong class='target-particle'>といわず</strong>、手<strong class='target-particle'>といわず</strong>、泥だらけでした。", "不论脸还是手，全都沾满了泥。"],
            ["平日<strong class='target-particle'>といわず</strong>、休日<strong class='target-particle'>といわず</strong>、彼は研究室にいます。", "不分工作日还是休息日，他都在研究室。"]
        ]),
        grammar("N1", "〜わ〜わ", "又是……又是……", "普通形＋わ＋普通形＋わ（で）", "连续列举多个状况，并把它们作为产生某种感受或评价的原因。常用于<strong class='usage-key'>困扰、抱怨、惊讶或感叹</strong>等情绪较强的场景；后项常出现「大変だ」「困る」「散々だ」等评价。", [
            ["この店は料理がまずい<strong class='target-particle'>わ</strong>、値段が高い<strong class='target-particle'>わ</strong>で、もう来たくありません。", "这家店饭菜又难吃，价格又贵，我不想再来了。"],
            ["雨には降られる<strong class='target-particle'>わ</strong>、電車は遅れる<strong class='target-particle'>わ</strong>で、散々な一日でした。", "又被雨淋，电车又晚点，真是糟糕的一天。"]
        ]),
        grammar("N2", "〜ては〜ては", "反复……又……／一再……", "动词て形＋は＋动作B（同一组动作反复出现）", "表示前项动作发生后接着进行后项动作，并且<strong class='usage-key'>同一组动作反复出现</strong>。常用于描述习惯、反复尝试或难以改变的循环；与惯用性较强的「〜つ〜つ」相比，「〜ては〜ては」更常用于具体、日常的动作过程。", [
            ["文章を<strong class='target-particle'>書いては消し</strong>、<strong class='target-particle'>書いては消し</strong>を繰り返しました。", "文章写了又删、删了又写，反复了很多次。"],
            ["休日は<strong class='target-particle'>食べては寝</strong>、<strong class='target-particle'>食べては寝</strong>の生活になっています。", "休息日总是吃了睡、睡了吃，反复过着这样的生活。"]
        ]),
        grammar("N1", "〜つ〜つ", "时而……时而……／彼此交替", "动词第一连用形＋つ＋动词第一连用形＋つ", "连接意义相反或相互对应的动作，表示<strong class='usage-key'>两个动作反复、交替进行</strong>。多见于书面语或固定搭配，如「持ちつ持たれつ」「抜きつ抜かれつ」「行きつ戻りつ」。", [
            ["選手たちは<strong class='target-particle'>抜きつ抜かれつ</strong>の接戦を続けました。", "选手们展开了你追我赶的激烈比赛。"],
            ["彼は部屋の前を<strong class='target-particle'>行きつ戻りつ</strong>しながら、返事を待っていました。", "他在房间前来回踱步，等待答复。"]
        ]),
        grammar("N1", "〜であれ〜であれ", "无论是……还是……", "名词／な形容词词干＋であれ＋名词／な形容词词干＋であれ", "列举两个具有代表性的情况，表示<strong class='usage-key'>无论属于哪一种，后项的结论都不会改变</strong>。后项常使用「変わらない」「関係ない」「認められない」「〜なければならない」等表达；也可使用「〜であろうと」「〜であろうが」「〜だろうと」。", [
            ["正社員<strong class='target-particle'>であれ</strong>、アルバイト<strong class='target-particle'>であれ</strong>、仕事への責任は変わりません。", "无论是正式员工还是兼职员工，对工作的责任都不会改变。"],
            ["晴れ<strong class='target-particle'>であれ</strong>、雨<strong class='target-particle'>であれ</strong>、試合は予定どおり行います。", "无论晴天还是雨天，比赛都会按计划举行。"]
        ]),
        grammar("N1", "〜というか〜というか", "该说是……还是……", "普通形／名词／な形容词＋というか＋普通形／名词／な形容词＋というか", "提出两个意思相近或相关的说法，表示说话人<strong class='usage-key'>难以决定用哪个词概括最准确</strong>，并借此逐步说明自己的评价。较正式时也可说「〜と言おうか〜と言おうか」「〜と言いましょうか〜と言いましょうか」。", [
            ["彼は純粋<strong class='target-particle'>というか</strong>、幼い<strong class='target-particle'>というか</strong>、人を疑うことを知りません。", "该说他纯真还是幼稚呢，总之他不懂得怀疑别人。"],
            ["この映画は不思議<strong class='target-particle'>というか</strong>、独特<strong class='target-particle'>というか</strong>、言葉では説明しにくいです。", "这部电影该说是不可思议还是独特呢，很难用语言说明。"]
        ])
    ];

    function usageAnchor(particle, index) {
        return `parallel-${encodeURIComponent(particle)}-usage-${index + 1}`;
    }

    function grammarAnchor(particle, usageIndex, grammarIndex) {
        return `${usageAnchor(particle, usageIndex)}-grammar-${grammarIndex + 1}`;
    }

    function specialGrammarAnchor(index) {
        return `parallel-special-grammar-${index + 1}`;
    }

    function renderExamples(examples, related = false) {
        if (related) {
            return examples.map((example) => `
                <div class="particle-related-example-pair">
                    <p class="particle-related-example-jp" lang="ja">${example.text}</p>
                    <p class="particle-related-example-cn">${example.translation}</p>
                </div>`).join("");
        }
        return examples.map((example, index) => `
            <div class="${index ? "particle-example-secondary" : "particle-example-primary"}">
                <p class="particle-example-label">例句 ${index + 1}</p>
                <p class="particle-example particle-example-japanese" lang="ja">${example.text}</p>
                <p class="particle-example-translation">${example.translation}</p>
            </div>`).join("");
    }

    function renderGrammarEntry(item, id, number, category = "相关语法") {
        return `
            <article id="${id}" class="particle-related-entry" tabindex="-1">
                <header class="particle-related-entry-heading">
                    <span class="particle-related-number">${number}</span>
                    <div class="particle-related-title-block">
                        <p class="particle-related-meta"><span>${item.level}</span> ${category}</p>
                        <div class="particle-related-title-line">
                            <h5 lang="ja">${item.title}</h5>
                            <span class="particle-related-heading-meaning">${item.meaning}</span>
                        </div>
                    </div>
                </header>
                <div class="particle-related-body">
                    <div class="particle-related-meta-block">
                        <span class="particle-related-label">接续</span>
                        <p class="particle-related-connection">${item.connection}</p>
                    </div>
                    <div class="particle-related-explanation">
                        <span class="particle-related-label">用法说明</span>
                        <p>${item.explanation}</p>
                    </div>
                    <div class="particle-related-example-block">
                        <span class="particle-related-label">例句</span>
                        ${renderExamples(item.examples, true)}
                    </div>
                </div>
            </article>`;
    }

    function renderRelated(related, particle, usageIndex) {
        if (!related || !related.items.length) return "";
        const items = related.items.map((item, grammarIndex) => renderGrammarEntry(
            item,
            grammarAnchor(particle, usageIndex, grammarIndex),
            `${String(usageIndex + 1).padStart(2, "0")}-${grammarIndex + 1}`
        )).join("");

        return `
            <section class="particle-related">
                <header class="particle-related-heading">
                    <p>RELATED GRAMMAR</p>
                    <h4>从这一用法形成的相关语法</h4>
                    <span>${related.lead}</span>
                </header>
                <div class="particle-related-list">${items}</div>
            </section>`;
    }

    function renderSpecialGrammar() {
        const list = document.getElementById("parallel-special-grammar-list");
        if (!list) return;
        list.innerHTML = specialGrammarItems.map((item, index) => renderGrammarEntry(
            item,
            specialGrammarAnchor(index),
            `S-${String(index + 1).padStart(2, "0")}`,
            "特殊语法"
        )).join("");
    }

    function renderUsage(usage, particle, index) {
        return `
            <section id="${usageAnchor(particle, index)}" class="particle-usage" tabindex="-1">
                <header class="particle-usage-header">
                    <span class="particle-usage-number">${String(index + 1).padStart(2, "0")}</span>
                    <div><p class="particle-usage-kicker">用法</p><h3 class="particle-usage-title">${usage.title}</h3></div>
                </header>
                <div class="particle-usage-body">
                    <div class="particle-usage-guide">
                        <div class="particle-guide-row"><span class="particle-guide-label">作用</span><p>${usage.definition}</p></div>
                        <div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--connection">接续</span><p><strong>${usage.connection}</strong></p></div>
                        <div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--judgment">说明</span><p>${usage.note}</p></div>
                    </div>
                    <div class="particle-examples">${renderExamples(usage.examples)}</div>
                </div>
                ${renderRelated(usage.related, particle, index)}
            </section>`;
    }

    function renderParticle(particle) {
        const data = particleData[particle];
        const detail = document.getElementById("particle-detail");
        if (!data || !detail) return;
        detail.innerHTML = `
            <header id="parallel-${encodeURIComponent(particle)}-top" class="particle-heading" tabindex="-1">
                <strong lang="ja">${particle}</strong>
                <div><span>COORDINATING PARTICLE</span><p>${data.desc}</p></div>
            </header>
            <div class="particle-usages">${data.usages.map((usage, index) => renderUsage(usage, particle, index)).join("")}</div>`;
    }

    function setActivePanel(id) {
        document.querySelectorAll(".case-panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === id));
    }

    function setActiveIndex(section) {
        document.querySelectorAll(".case-index-button").forEach((button) => {
            const active = button.dataset.section === section;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
    }

    function setActiveTab(view) {
        document.querySelectorAll(".case-tab").forEach((tab) => {
            const active = tab.dataset.view === view;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
        });
    }

    function updateHash(route, push) {
        const url = `${location.pathname}${location.search}#${encodeURIComponent(route)}`;
        history[push ? "pushState" : "replaceState"]({}, "", url);
    }

    function showConcept(push = true) {
        setActivePanel("concept-panel");
        setActiveIndex("concept");
        setActiveTab("concept");
        updateHash("concept", push);
    }

    function showSpecial(push = true) {
        setActivePanel("special-panel");
        setActiveIndex("special");
        setActiveTab("concept");
        updateHash("special", push);
    }

    function showComparison(push = true) {
        setActivePanel("comparison-panel");
        setActiveIndex("comparison");
        setActiveTab("concept");
        updateHash("comparison-toka-yara-tari", push);
    }

    function showSpecialGrammar(push = true, targetId = "") {
        setActivePanel("special-grammar-panel");
        setActiveIndex("special-grammar");
        setActiveTab("concept");
        updateHash(targetId ? `special-grammar-${targetId}` : "special-grammar", push);
        if (targetId) requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }

    function showParticle(particle, push = true, targetId = "") {
        if (!particleData[particle]) return;
        renderParticle(particle);
        setActivePanel("particle-detail");
        setActiveIndex(particle);
        setActiveTab("concept");
        updateHash(targetId ? `detail-${particle}-${targetId}` : `particle-${particle}`, push);
        if (targetId) requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }

    function countRelated(data) {
        return data.usages.reduce((sum, usage) => sum + (usage.related?.items.length || 0), 0);
    }

    function renderMapNavigation(activeParticle) {
        const nav = document.getElementById("grammar-map-particle-nav");
        nav.innerHTML = particleOrder.map((particle) => {
            const relatedCount = countRelated(particleData[particle]);
            return `
                <button type="button" class="grammar-map-particle-button${particle === activeParticle ? " is-active" : ""}" data-map-select="${particle}"${particle === activeParticle ? " aria-current='true'" : ""}>
                    <strong lang="ja">${particle}</strong><span>${relatedCount ? `${relatedCount} 项关联` : "基础用法"}</span>
                </button>`;
        }).join("");
    }

    function renderGrammarMap(particle) {
        const data = particleData[particle];
        const map = document.getElementById("focus-grammar-map");
        renderMapNavigation(particle);
        const branches = data.usages.map((usage, usageIndex) => {
            const related = usage.related?.items || [];
            const nodes = related.map((item, grammarIndex) => `
                <button type="button" class="grammar-map-grammar-node" data-particle="${particle}" data-target="${grammarAnchor(particle, usageIndex, grammarIndex)}">
                    <span class="grammar-map-node-meta">${item.level}</span><strong lang="ja">${item.title}</strong>
                </button>`).join("");
            return `
                <div class="grammar-map-branch${nodes ? "" : " is-basic-only"}">
                    <button type="button" class="grammar-map-usage-node" data-particle="${particle}" data-target="${usageAnchor(particle, usageIndex)}">
                        <span>${String(usageIndex + 1).padStart(2, "0")}</span><strong>${usage.title}</strong>
                    </button>
                    ${nodes ? `<span class="grammar-map-connector" aria-hidden="true"><i></i></span><div class="grammar-map-related-nodes">${nodes}</div>` : ""}
                </div>`;
        }).join("");
        map.innerHTML = `
            <div class="grammar-map-root-column">
                <button type="button" class="grammar-map-root" data-particle="${particle}" data-target="parallel-${encodeURIComponent(particle)}-top">
                    <span>并列助词</span><strong lang="ja">${particle}</strong><em>查看完整讲解 →</em>
                </button>
            </div>
            <div class="grammar-map-branches">${branches}</div>`;
    }

    let activeMapParticle = particleOrder[0];

    function showMap(particle = activeMapParticle, push = true) {
        if (!particleData[particle]) particle = particleOrder[0];
        activeMapParticle = particle;
        renderGrammarMap(particle);
        setActivePanel("atlas-panel");
        setActiveIndex("");
        setActiveTab("atlas");
        updateHash(`grammar-map-${particle}`, push);
    }

    function openRoute() {
        const route = decodeURIComponent(location.hash.slice(1) || "concept");
        if (route === "concept") showConcept(false);
        else if (route === "comparison-toka-yara-tari") showComparison(false);
        else if (route === "special-grammar") showSpecialGrammar(false);
        else if (route.startsWith("special-grammar-parallel-special-grammar-")) showSpecialGrammar(false, route.slice(16));
        else if (route === "special") showSpecial(false);
        else if (route.startsWith("grammar-map-")) showMap(route.slice(12), false);
        else if (route.startsWith("particle-")) showParticle(route.slice(9), false);
        else if (route.startsWith("detail-")) {
            const remainder = route.slice(7);
            const separator = remainder.indexOf("-parallel-");
            if (separator > 0) showParticle(remainder.slice(0, separator), false, remainder.slice(separator + 1));
            else showConcept(false);
        } else showConcept(false);
    }

    function setupIndexToggle() {
        const button = document.getElementById("focus-index-toggle");
        const layout = document.querySelector(".case-study-layout");
        if (!button || !layout) return;
        button.addEventListener("click", () => {
            const collapsed = layout.classList.toggle("is-index-collapsed");
            button.setAttribute("aria-expanded", String(!collapsed));
            button.setAttribute("aria-label", collapsed ? "向右展开学习目录" : "向左收起学习目录");
            button.querySelector(".adverbial-index-toggle-icon").textContent = collapsed ? "→" : "←";
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        setupIndexToggle();
        renderGrammarMap(activeMapParticle);
        renderSpecialGrammar();

        document.querySelectorAll(".case-index-button").forEach((button) => button.addEventListener("click", () => {
            const section = button.dataset.section;
            if (section === "concept") showConcept();
            else if (section === "comparison") showComparison();
            else if (section === "special-grammar") showSpecialGrammar();
            else if (section === "special") showSpecial();
            else showParticle(section);
        }));

        document.querySelectorAll(".case-tab").forEach((tab) => tab.addEventListener("click", () => {
            if (tab.dataset.view === "atlas") showMap();
            else showConcept();
        }));

        document.getElementById("grammar-map-particle-nav").addEventListener("click", (event) => {
            const button = event.target.closest("[data-map-select]");
            if (button) showMap(button.dataset.mapSelect);
        });

        document.getElementById("focus-grammar-map").addEventListener("click", (event) => {
            const button = event.target.closest("[data-target]");
            if (!button) return;
            showParticle(button.dataset.particle, true, button.dataset.target);
        });

        window.addEventListener("popstate", openRoute);
        openRoute();
    });
})();
