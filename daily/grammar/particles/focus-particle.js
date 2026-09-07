(function () {
    "use strict";

    const particleOrder = ["は", "こそ", "も", "でも", "さえ", "すら", "なら", "しか"];

    const particleData = {
        "は": {
            desc: "在对话中提示语言交流的<strong class='usage-key'>主题</strong>，并可表示<strong class='usage-key'>对比、强调或部分否定</strong>",
            usages: [
                {
                    title: "提示话题中心",
                    definition: "把前项作为后续说明所围绕的对象，相当于先提出<strong class='usage-key'>“说到前项”</strong>，再对它作出叙述。",
                    connection: "名词／名词性成分＋は",
                    note: "「は」提示的是<strong class='usage-key'>描述内容所对应的话题中心</strong>，并不单纯表示动作的主体。",
                    examples: [
                        { text: "私<strong class='target-particle'>は</strong>来年、日本へ留学します。", translation: "我明年要去日本留学。" },
                        { text: "この町<strong class='target-particle'>は</strong>冬になると雪が多いです。", translation: "这座城市一到冬天雪就很多。" }
                    ],
                    related: {
                        lead: "「は」提示并说明前项的作用，可以发展为对词语作出定义，也可以把意外内容作为话题提出。",
                        items: [
                            grammar("N3", "〜とは", "所谓……是……", "名词＋とは", "把前项作为需要说明的概念提出，并在后项给出<strong class='usage-key'>定义、解释或概括</strong>。后项常使用「〜ことだ」「〜という意味だ」「〜ものだ」等说明形式。", [
                                ["「共生」<strong class='target-particle'>とは</strong>、異なる人々が互いを認めながら暮らすことです。", "所谓“共生”，是指不同的人彼此认同并共同生活。"],
                                ["防災訓練<strong class='target-particle'>とは</strong>、災害に備えて行う練習のことです。", "所谓防灾训练，是为应对灾害而进行的训练。"]
                            ]),
                            grammar("N1", "〜とは／〜とは思わなかった", "竟然……／没想到……", "普通形＋とは／普通形＋とは思わなかった", "「～とは」可在句末省略后续内容，把前项作为令人意外的事实强烈提出；「～とは思わなかった」则明确表示<strong class='usage-key'>没有预想到前项会发生或成立</strong>。两者都用于表达<strong class='usage-key'>惊讶、意外或难以置信</strong>。", [
                                ["あの静かな木村さんが歌手だった<strong class='target-particle'>とは</strong>。", "没想到那么安静的木村以前竟然是歌手。"],
                                ["この計画が一週間で完成する<strong class='target-particle'>とは思ってもいませんでした</strong>。", "完全没想到这个计划一周就能完成。"]
                            ])
                        ]
                    }
                },
                {
                    title: "凸显前项并表示对比",
                    definition: "把前项与句中明说或语境中隐含的其他对象对照，说明<strong class='usage-key'>前项的情况与其他项不同</strong>。",
                    connection: "名词／格助词＋は",
                    note: "对比项可以成对出现，也可以只说其中一项。「は」可接在其他助词后形成<strong class='usage-key'>「には・では・とは・へは・からは」</strong>；「が・を」通常被「は」替换。",
                    examples: [
                        { text: "コーヒー<strong class='target-particle'>は</strong>飲みますが、紅茶<strong class='target-particle'>は</strong>飲みません。", translation: "咖啡我喝，但红茶不喝。" },
                        { text: "東京に<strong class='target-particle'>は</strong>行きましたが、大阪に<strong class='target-particle'>は</strong>まだ行っていません。", translation: "东京去过了，但大阪还没去。" }
                    ],
                    related: {
                        lead: "把前项作为对比项提出后，可以进一步说明该事物自有其情况或立场。",
                        items: [
                            grammar("N2", "〜は〜で", "……自有……的情况／道理", "名词＋は＋同一名词＋で", "前后重复同一个名词，把前项单独作为一个立场提出，表示该事物<strong class='usage-key'>本身也有独特的情况、价值、优点或苦衷</strong>。后项常接「事情がある」「良さがある」「大変だ」等评价。", [
                                ["都会は便利ですが、田舎<strong class='target-particle'>は田舎で</strong>良さがあります。", "城市固然方便，但乡下自有乡下的好处。"],
                                ["子ども<strong class='target-particle'>は子どもで</strong>、いろいろな悩みを抱えています。", "孩子也有孩子自己的各种烦恼。"]
                            ]),
                            grammar("基础", "〜では", "在……条件下／用……的话", "名词＋では", "把前项所表示的地点、方法或情况作为<strong class='usage-key'>后项判断成立的前提</strong>提出。后项通常是针对这一前提作出的评价、判断或结论。", [
                                ["この方法<strong class='target-particle'>では</strong>、時間がかかりすぎます。", "采用这种方法的话，会花费太多时间。"],
                                ["雨<strong class='target-particle'>では</strong>、試合は中止になるでしょう。", "如果下雨，比赛大概会取消。"]
                            ]),
                            grammar("基础", "〜ては", "如果……就……", "动词て形＋は＋评价／反应", "把前项动作作为<strong class='usage-key'>后项评价或反应成立的条件</strong>。后项常使用「困る」「大変だ」「いけない」「無理だ」等，表示不希望出现的结果。", [
                                ["毎日遅れて<strong class='target-particle'>は</strong>困ります。", "如果每天都迟到，那可不行。"],
                                ["けが人が出て<strong class='target-particle'>は</strong>大変です。", "如果出现伤员，那就麻烦了。"]
                            ]),
                            grammar("基础", "VてはV", "反复……／每当……就……", "动词て形＋は＋动词", "表示同一动作或相互关联的两个动作<strong class='usage-key'>反复发生</strong>。叙述过去的习惯时，后项常使用「〜ていた」。", [
                                ["子どもの頃は、電車を見て<strong class='target-particle'>は</strong>喜んでいました。", "小时候，每当看到电车都会很高兴。"],
                                ["母は古い写真を取り出して<strong class='target-particle'>は</strong>、昔の話をしてくれました。", "母亲每次拿出老照片，都会给我讲过去的事情。"]
                            ])
                        ]
                    }
                },
                {
                    title: "强调前项并表示部分否定",
                    definition: "将需要否定、保留或让步的部分特别提出，表示<strong class='usage-key'>并非全面否定，而是只否定或保留其中一部分</strong>。",
                    connection: "名词／格助词／动词连用形式＋は",
                    note: "常见于「全部は〜ない」「动词第一连用形＋はしない」以及<strong class='usage-key'>先承认事实、后作转折</strong>的句式。",
                    examples: [
                        { text: "料理はたくさんありますが、全部<strong class='target-particle'>は</strong>食べません。", translation: "虽然有很多菜，但并不会全部吃完。" },
                        { text: "内容は理解できましたが、完全に<strong class='target-particle'>は</strong>納得していません。", translation: "内容虽然理解了，但并没有完全接受。" }
                    ],
                    related: {
                        lead: "「は」用于强调否定或让步时，可以形成强烈否认、承认事实后转折以及部分否定等表达。",
                        items: [
                            grammar("N3", "〜とは限らない", "未必……／不一定……", "普通形＋とは限らない", "否定某个判断必然成立，表示<strong class='usage-key'>仍然存在例外或其他可能</strong>。前面常出现一般认识，句中也常与「必ずしも」呼应。", [
                                ["有名な店だからといって、必ずしもおいしい<strong class='target-particle'>とは限りません</strong>。", "有名的店也未必就好吃。"],
                                ["経験が長い人が、いつも判断を誤らない<strong class='target-particle'>とは限りません</strong>。", "经验丰富的人也不一定永远不会判断失误。"]
                            ]),
                            grammar("N2", "〜は〜したが", "确实……了，但是……", "动词第一连用形／动词辞书形＋こと＋は＋同一动词的た形＋が", "先强调并承认前项动作<strong class='usage-key'>确实已经进行</strong>，随后用「が」说明结果未达预期，或补充与前项相反的情况。", [
                                ["話し合い<strong class='target-particle'>はしましたが</strong>、合意には至りませんでした。", "商量确实商量过了，但没有达成一致。"],
                                ["準備すること<strong class='target-particle'>は準備しましたが</strong>、まだ不安が残っています。", "准备确实准备了，但心里仍然不安。"]
                            ]),
                            grammar("N1", "〜はしない", "绝不会……／并不会……", "动词第一连用形＋はしない", "在普通否定「〜ない」中加入「は」，对动作不发生这一点作出<strong class='usage-key'>强烈否认或明确保证</strong>。常用于表达决心、保证或发生可能性极低。", [
                                ["どんなに困っても、約束を破り<strong class='target-particle'>はしません</strong>。", "无论多么困难，我都绝不会违背约定。"],
                                ["この程度の失敗で、彼が諦め<strong class='target-particle'>はしない</strong>でしょう。", "他不会因为这种程度的失败就放弃。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "も": {
            desc: "在对话中补充或凸显某种要素，并可表示<strong class='usage-key'>全面范围、数量语气或极端项目</strong>",
            usages: [
                {
                    title: "补充同样成立的内容",
                    definition: "在已有的人、事物或情况之外加入前项，表示前项<strong class='usage-key'>也具有相同情况</strong>。",
                    connection: "名词／格助词＋も",
                    note: "使用「も」时，语境中通常已经存在一个<strong class='usage-key'>与前项并列的对象或情况</strong>。",
                    examples: [
                        { text: "田中さんは参加します。佐藤さん<strong class='target-particle'>も</strong>参加します。", translation: "田中参加，佐藤也参加。" },
                        { text: "将来は日本に<strong class='target-particle'>も</strong>行きたいです。", translation: "将来也想去日本。" }
                    ]
                },
                {
                    title: "列举多个项目或相反可能",
                    definition: "在两个以上的项目后分别使用「も」，表示这些项目<strong class='usage-key'>都符合后项内容或都包含在判断范围内</strong>。",
                    connection: "A＋も＋B＋も",
                    note: "A、B可以是同类项目，也可以是<strong class='usage-key'>肯定与否定等相反可能</strong>，如「行くも行かないも自由だ」。",
                    examples: [
                        { text: "彼は英語<strong class='target-particle'>も</strong>フランス語<strong class='target-particle'>も</strong>話せます。", translation: "他英语和法语都会说。" },
                        { text: "参加する<strong class='target-particle'>も</strong>参加しない<strong class='target-particle'>も</strong>、あなたの自由です。", translation: "参加还是不参加，都是你的自由。" }
                    ],
                    related: {
                        lead: "「も」把两个项目并列后，可以说明两种情况都存在，也可以指出相关双方都具有相似的问题。",
                        items: [
                            grammar("N1", "〜も〜ば／〜も〜なら、〜も〜", "既……也……／有……也有……", "Aも＋ば形／なら、Bも＋谓语", "并列两个情况，表示<strong class='usage-key'>前项成立的同时，后项所表示的情况也成立</strong>。两项通常性质相近，也可以形成“有好的方面，也有不好的方面”等对照。", [
                                ["人生には楽しいこと<strong class='target-particle'>もあれば</strong>、苦しいこと<strong class='target-particle'>もあります</strong>。", "人生中既有快乐的事情，也有痛苦的事情。"],
                                ["この仕事は経験<strong class='target-particle'>も必要なら</strong>、専門知識<strong class='target-particle'>も必要です</strong>。", "这项工作既需要经验，也需要专业知识。"]
                            ]),
                            grammar("N1", "〜も〜だ", "……也有……的问题／……也一样", "名词＋も＋同一名词＋だ／AがAなら、BもBだ", "承认一方存在问题后，进一步指出与其相关的另一方<strong class='usage-key'>同样负有责任或同样存在问题</strong>。多用于批评、责备或表示双方都不值得肯定。", [
                                ["子どもにそんなに怒るなんて、あなた<strong class='target-particle'>もあなたです</strong>よ。", "对孩子发那么大的火，你也有你的问题。"],
                                ["店員<strong class='target-particle'>が店員なら</strong>、責任者<strong class='target-particle'>も責任者です</strong>。", "店员有店员的问题，负责人也有负责人的问题。"]
                            ])
                        ]
                    }
                },
                {
                    title: "与疑问词组合表示全部范围",
                    definition: "「疑问词＋も」把疑问词所代表的对象扩展到<strong class='usage-key'>全部范围</strong>；具体结果由后面的肯定或否定谓语决定。",
                    connection: "疑问词＋も＋肯定／否定谓语",
                    note: "与否定谓语搭配时表示<strong class='usage-key'>全部否定</strong>；「どれも」等与肯定谓语搭配时表示全部包含。",
                    examples: [
                        { text: "昨日は誰<strong class='target-particle'>も</strong>来ませんでした。", translation: "昨天谁都没来。" },
                        { text: "この店の料理はどれ<strong class='target-particle'>も</strong>おいしいです。", translation: "这家店的菜每一道都很好吃。" }
                    ]
                },
                {
                    title: "为数量添加说话人的语气",
                    definition: "接在数量词后，可强调数量<strong class='usage-key'>比预想更多、更长或更大</strong>；与条件形式组合时，也可表示足以完成后项的大致数量。",
                    connection: "数量词＋も／数量词＋もあれば・もすれば",
                    note: "应结合谓语判断语气：「三千円もする」表示惊讶；「一週間もあれば」表示<strong class='usage-key'>大约有该数量就足够</strong>。",
                    examples: [
                        { text: "この本は三千円<strong class='target-particle'>も</strong>するそうです。", translation: "听说这本书竟然要三千日元。" },
                        { text: "一週間<strong class='target-particle'>もあれば</strong>、修理できます。", translation: "大约有一周时间就能修好。" }
                    ]
                },
                {
                    title: "举出极端或最低限度的项目",
                    definition: "提出通常认为最不容易成立或最低限度的项目，强调<strong class='usage-key'>连前项也成立或连前项都没有进行</strong>。",
                    connection: "名词＋も／动词第一连用形＋もしない",
                    note: "名词后使用「も」时接近“连……也……”；动词后使用「もしない」时，通常带有<strong class='usage-key'>批评、惊讶或强烈否定</strong>。",
                    examples: [
                        { text: "これは子ども<strong class='target-particle'>も</strong>分かる問題です。", translation: "这是连孩子都明白的问题。" },
                        { text: "彼は理由を説明し<strong class='target-particle'>も</strong>しませんでした。", translation: "他甚至连理由都没有说明。" }
                    ],
                    related: {
                        lead: "把最低限度的动作作为极端项目提出后，可以形成强调否定的「〜もしない」。",
                        items: [
                            grammar("N1", "〜もしない", "连……都不……", "动词第一连用形＋もしない", "表示连通常应该进行的最低限度动作<strong class='usage-key'>都完全没有做</strong>，常用于批评疏忽、轻率或缺乏应有态度。", [
                                ["彼は説明を読み<strong class='target-particle'>もしない</strong>で、使い方が分からないと言っています。", "他连说明都不看，就说不知道怎么使用。"],
                                ["担当者は確認<strong class='target-particle'>もしない</strong>で、その資料を送ってしまいました。", "负责人连确认都没确认，就把资料发出去了。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "こそ": {
            desc: "把前项作为最符合当前判断的对象<strong class='usage-key'>强烈提示</strong>，相当于“正是……”",
            usages: [
                {
                    title: "强烈突出前项",
                    definition: "强调前项正是当前最需要关注、最符合判断或最具有决定性意义的对象。",
                    connection: "名词／格助词＋こそ",
                    note: "「こそ」比「は」的提示更强，常用于<strong class='usage-key'>纠正认识、表达决心、强调原因或条件</strong>。",
                    examples: [
                        { text: "今度<strong class='target-particle'>こそ</strong>、最後までやり遂げます。", translation: "这一次一定要坚持做到最后。" },
                        { text: "こちら<strong class='target-particle'>こそ</strong>、ありがとうございました。", translation: "哪里哪里，应该是我感谢您。" }
                    ],
                    related: {
                        lead: "「こそ」与原因、条件、动作经历或时间对比组合后，会把前项强调为后项理解的关键。",
                        items: [
                            grammar("N3", "〜からこそ", "正因为……才……", "普通形＋からこそ", "强调前项是后项成立的<strong class='usage-key'>重要原因</strong>，说话人借此纠正表面的理解，或说明该原因带来了有意义的结果。", [
                                ["失敗した<strong class='target-particle'>からこそ</strong>、次に注意すべき点が分かりました。", "正因为失败过，才明白下次该注意什么。"],
                                ["互いを信頼している<strong class='target-particle'>からこそ</strong>、率直に意見を言えるのです。", "正因为彼此信任，才能坦率地说出意见。"]
                            ]),
                            grammar("N2", "〜てこそ", "只有……才……", "动词て形＋こそ", "把前项动作或经历作为后项成立的<strong class='usage-key'>必要前提</strong>，强调只有实际完成前项，才能真正得到后项结果。", [
                                ["自分で経験し<strong class='target-particle'>てこそ</strong>、その難しさが分かります。", "只有亲自经历，才能明白其中的困难。"],
                                ["毎日続け<strong class='target-particle'>てこそ</strong>、力が身につきます。", "只有每天坚持，才能掌握能力。"]
                            ]),
                            grammar("N2", "〜ばこそ", "正因为……才……", "假定形＋こそ", "使用假定形提出前项，并把它强调为后项行为或判断的<strong class='usage-key'>根本动机</strong>。常用于表达重视、关心或责任。", [
                                ["大切に思え<strong class='target-particle'>ばこそ</strong>、厳しいことも言うのです。", "正因为重视你，才会说严格的话。"],
                                ["責任があれ<strong class='target-particle'>ばこそ</strong>、最後まで現場に残りました。", "正因为负有责任，才留在现场直到最后。"]
                            ]),
                            grammar("N2", "〜こそ〜が", "确实……，但是……", "名词／动词第一连用形＋こそ＋谓语＋が", "用「こそ」强烈承认前项事实<strong class='usage-key'>确实成立</strong>，再用「が」引出与期待不同的结果、限制或保留意见。常见「名词＋こそ〜が」「动词第一连用形＋こそしたが」。", [
                                ["形<strong class='target-particle'>こそ</strong>違います<strong class='target-particle'>が</strong>、基本的な考え方は同じです。", "形式确实不同，但基本思路相同。"],
                                ["努力<strong class='target-particle'>こそしましたが</strong>、目標の達成には至りませんでした。", "确实努力过了，但没能实现目标。"]
                            ]),
                            grammar("N1", "今でこそ〜が", "现在虽然……，但过去……", "今でこそ＋普通形＋が／けれど（も）", "用「今でこそ」突出<strong class='usage-key'>现在已经成立的状态</strong>，再通过「が／けれど（も）」与过去完全不同的情况形成对比。常用于回顾变化或成长；根据上下文，「今でこそ」后也可以不立即出现转折助词。", [
                                ["<strong class='target-particle'>今でこそ</strong>一人で発表できます<strong class='target-particle'>が</strong>、以前は人前に立つだけで緊張していました。", "现在虽然已经能独自发表，但以前光是站在人前就会紧张。"],
                                ["この地域は<strong class='target-particle'>今でこそ</strong>観光地として有名です<strong class='target-particle'>が</strong>、十年前は訪れる人がほとんどいませんでした。", "这一地区现在虽然已是著名景点，但十年前几乎没有游客。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "さえ": {
            desc: "提出最出乎预想或最低限度的项目，表示<strong class='usage-key'>连……都……</strong>",
            usages: [
                {
                    title: "提出极端或意外的项目",
                    definition: "从相关范围中选出最不容易想到或程度最极端的一项，强调<strong class='usage-key'>连这一项也成立</strong>。",
                    connection: "名词／名词＋格助词＋さえ",
                    note: "理解「さえ」时，应从语境中补出其他更普通的项目：<strong class='usage-key'>既然连极端项都成立，普通项当然也成立</strong>。",
                    examples: [
                        { text: "この問題は子どもで<strong class='target-particle'>さえ</strong>解けます。", translation: "这道题连小孩子都会做。" },
                        { text: "忙しくて、昼ご飯を食べる時間<strong class='target-particle'>さえ</strong>ありませんでした。", translation: "忙得连吃午饭的时间都没有。" }
                    ],
                    related: {
                        lead: "「さえ」既可以把前项作为最低条件提出，也可以强调原有情况已经十分明显，并在其上追加其他因素。",
                        items: [
                            grammar("N2", "〜さえ〜ば／〜さえ〜なら", "只要……就……", "名词＋さえ＋条件形／动词第一连用形＋さえすれば", "把前项作为实现后项所需的<strong class='usage-key'>最低条件</strong>，表示只要这一条件得到满足，其他条件即使不完全具备也没有问题。", [
                                ["必要な資料<strong class='target-particle'>さえ</strong>そろえ<strong class='target-particle'>ば</strong>、すぐに作業を始められます。", "只要备齐必要资料，就能立即开始工作。"],
                                ["健康で<strong class='target-particle'>さえあれば</strong>、何度でも挑戦できます。", "只要身体健康，就能一次次挑战。"]
                            ]),
                            grammar("N1", "ただでさえ〜", "本来就已经……，再加上……", "ただでさえ＋普通形", "表示原有情况<strong class='usage-key'>本来就已经达到较高程度</strong>，又出现新的因素，使这种情况进一步加重。多用于负担、困难等不理想的情况，后文常见「〜のに」「〜うえに」「〜まで／〜さえ」等追加表达。", [
                                ["<strong class='target-particle'>ただでさえ</strong>人手が足りない<strong class='target-particle'>のに</strong>、今月は二人も退職しました。", "本来人手就不足，这个月又有两个人辞职了。"],
                                ["<strong class='target-particle'>ただでさえ</strong>道が混む時間帯に、事故<strong class='target-particle'>まで</strong>起きてしまいました。", "本来就是道路拥堵的时段，甚至还发生了事故。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "すら": {
            desc: "书面语中提出极端或最低限度的项目，表示<strong class='usage-key'>连……都……</strong>",
            usages: [
                {
                    title: "提出极端项目",
                    definition: "从相关范围中提出通常认为最不可能成立的一项，借此强调<strong class='usage-key'>连这一项也符合后项内容</strong>。",
                    connection: "名词／名词＋格助词＋すら",
                    note: "「すら」多用于<strong class='usage-key'>书面语或较正式的表达</strong>，现代口语通常使用「さえ」。它可以与肯定谓语搭配，也常与否定谓语呼应。",
                    examples: [
                        { text: "専門家<strong class='target-particle'>すら</strong>判断を誤ることがあります。", translation: "就连专家也有判断错误的时候。" },
                        { text: "彼は家族に<strong class='target-particle'>すら</strong>本当のことを話しませんでした。", translation: "他甚至连家人都没有告诉实情。" }
                    ],
                    related: {
                        lead: "名词后使用「ですら」时，同样把前项作为极端事例提出，语气较为正式。",
                        items: [
                            grammar("N1", "〜ですら", "就连……也……", "名词＋ですら", "把名词所表示的人或事物作为<strong class='usage-key'>通常最不容易符合后项的极端项目</strong>提出，从而强调实际情况超出一般预想。", [
                                ["この問題は経験豊富な技術者<strong class='target-particle'>ですら</strong>解決できませんでした。", "这个问题就连经验丰富的技术人员也没能解决。"],
                                ["当時は安全な飲み水<strong class='target-particle'>ですら</strong>簡単には手に入りませんでした。", "当时就连安全的饮用水也无法轻易获得。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "しか": {
            desc: "把范围限定在前项并排除其他项目，必须与<strong class='usage-key'>否定谓语</strong>搭配",
            usages: [
                {
                    title: "限定并排除其他范围",
                    definition: "表示符合后项情况的只有前项，前项以外的人、事物或方法<strong class='usage-key'>全部被排除</strong>。",
                    connection: "名词／格助词＋しか＋否定谓语",
                    note: "「しか」后面必须使用否定形式。与中性的「だけ」相比，它更突出<strong class='usage-key'>除此之外没有其他选择</strong>。",
                    examples: [
                        { text: "財布には千円<strong class='target-particle'>しか</strong>ありません。", translation: "钱包里只有一千日元。" },
                        { text: "このことは家族に<strong class='target-particle'>しか</strong>話していません。", translation: "这件事只跟家人说过。" }
                    ],
                    related: {
                        lead: "排除其他范围后，可以进一步表示没有别的方法、说明某事物的性质仅限于前项，或强调只有一种说法能够准确概括当前情况。",
                        items: [
                            grammar("N3", "〜しかない", "只好……／只能……", "动词辞书形＋しかない", "表示在当前情况下其他办法都不可行，因此<strong class='usage-key'>只能选择前项动作</strong>。常带有不得已作出判断的语气。", [
                                ["終電が出たので、タクシーで帰る<strong class='target-particle'>しかありません</strong>。", "末班车已经开走，只能坐出租车回去。"],
                                ["資料が足りないなら、もう一度調査する<strong class='target-particle'>しかありません</strong>。", "资料不足的话，只能重新调查。"]
                            ]),
                            grammar("N1", "〜でしかない", "只不过是……", "名词＋でしかない", "把前项限定为事物的实际性质，表示它<strong class='usage-key'>并没有达到更高或更重要的程度</strong>。常用于客观判断或降低评价。", [
                                ["それは現時点での仮説<strong class='target-particle'>でしかありません</strong>。", "那只不过是现阶段的假设。"],
                                ["この数字は全体の一部を示す目安<strong class='target-particle'>でしかありません</strong>。", "这个数字只不过是显示整体一部分的参考。"]
                            ]),
                            grammar("N1", "〜としか言いようがない", "只能说是……／除了……无法形容", "引用内容＋としか言いようがない", "表示说话人认为只有前项说法能够准确概括当前情况，<strong class='usage-key'>除此之外找不到更合适的表达</strong>。常用于强烈评价，也可表达惊讶、感叹、批评或无奈。", [
                                ["この景色は、人の手では作れない芸術<strong class='target-particle'>としか言いようがありません</strong>。", "这片景色只能说是人力无法创造的艺术。"],
                                ["あれだけの証拠を前にすれば、彼の説明は不自然だ<strong class='target-particle'>としか言いようがありません</strong>。", "面对那么多证据，只能说他的说明很不自然。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "でも": {
            desc: "提出一个代表性或极端的项目，也可与疑问词组合表示<strong class='usage-key'>不限对象</strong>",
            usages: [
                {
                    title: "举出代表性选项，使语气更柔和",
                    definition: "从可选择的范围中随意举出前项作为代表，表示<strong class='usage-key'>前项或其他类似项目都可以</strong>。",
                    connection: "名词＋でも",
                    note: "常用于建议、邀请或临时选择，使表达不显得把选项<strong class='usage-key'>严格限定为前项</strong>。",
                    examples: [
                        { text: "少し休んで、お茶<strong class='target-particle'>でも</strong>飲みませんか。", translation: "稍微休息一下，喝杯茶什么的吧。" },
                        { text: "週末は映画<strong class='target-particle'>でも</strong>見に行きましょう。", translation: "周末去看个电影什么的吧。" }
                    ],
                    related: {
                        lead: "代表性举例用于选择时，可以明确表示前项也属于可接受范围。",
                        items: [
                            grammar("N4", "〜でもいい", "……也可以", "名词＋でもいい", "表示前项虽然未必是唯一或最佳选择，但属于<strong class='usage-key'>可以接受的选项</strong>。也可用于询问对方是否接受该选择。", [
                                ["ペンがなければ、鉛筆<strong class='target-particle'>でもいいです</strong>。", "没有钢笔的话，铅笔也可以。"],
                                ["時間は午後<strong class='target-particle'>でも大丈夫です</strong>。", "时间安排在下午也没问题。"]
                            ])
                        ]
                    }
                },
                {
                    title: "提出极端项目",
                    definition: "举出通常认为条件不足或不容易成立的项目，强调<strong class='usage-key'>连前项也能够成立</strong>。",
                    connection: "名词／名词＋格助词＋でも",
                    note: "这一用法接近「さえ」，但「でも」更像从范围中<strong class='usage-key'>举出一个有代表性的极端例子</strong>。",
                    examples: [
                        { text: "この漢字は小学生<strong class='target-particle'>でも</strong>読めます。", translation: "这个汉字连小学生都能读。" },
                        { text: "忙しい人に<strong class='target-particle'>でも</strong>続けられる方法です。", translation: "这是连忙碌的人也能坚持的方法。" }
                    ],
                    related: {
                        lead: "把极端项目扩展到行动方式时，可以表示即使采取非常手段也要实现目标。",
                        items: [
                            grammar("N2", "〜てでも", "即使……也要……", "动词て形＋でも", "表示为了实现后项的强烈目标，<strong class='usage-key'>即使采取通常不会选择的手段也在所不惜</strong>。后项常出现愿望、决心或必要性表达。", [
                                ["多少無理をし<strong class='target-particle'>てでも</strong>、この仕事を今日中に終わらせたいです。", "哪怕勉强一些，也想在今天之内完成这项工作。"],
                                ["時間がかかっ<strong class='target-particle'>てでも</strong>、正確な記録を残すべきです。", "即使花费时间，也应该留下准确记录。"]
                            ])
                        ]
                    }
                },
                {
                    title: "与疑问词组合表示不限对象",
                    definition: "「疑问词＋でも」表示疑问词所代表的范围中<strong class='usage-key'>任何一项都可以成立</strong>。",
                    connection: "疑问词＋でも",
                    note: "常见「誰でも・何でも・どこでも・いつでも」等形式，表示<strong class='usage-key'>人、事物、地点或时间均不受限制</strong>。",
                    examples: [
                        { text: "この図書館は誰<strong class='target-particle'>でも</strong>利用できます。", translation: "这座图书馆任何人都可以使用。" },
                        { text: "困ったときは、いつ<strong class='target-particle'>でも</strong>連絡してください。", translation: "遇到困难时，随时都可以联系我。" }
                    ]
                }
            ]
        },
        "なら": {
            desc: "承接对话中已经出现或能够想到的话题，并据此提出<strong class='usage-key'>判断、需要、建议或请求</strong>",
            usages: [
                {
                    title: "承接话题并提出相应内容",
                    definition: "把前项作为当前谈话的范围或前提，表示<strong class='usage-key'>说到前项这种情况</strong>，后项便作出与之相应的说明。",
                    connection: "名词・な形容词词干／动词普通形・い形容词普通形＋なら",
                    note: "前项常来自对方刚刚说过的内容或现场语境。后项通常是针对该话题提出的<strong class='usage-key'>看法、需要、建议、请求或相关信息</strong>。",
                    examples: [
                        { text: "日本に行く<strong class='target-particle'>なら</strong>、五月がいいですよ。", translation: "如果要去日本，五月比较好。" },
                        { text: "木村さん<strong class='target-particle'>なら</strong>、さっき会議室へ行きましたよ。", translation: "你说木村的话，他刚才去会议室了。" }
                    ],
                    related: {
                        lead: "「なら」承接某种情况后，可以进一步说明该情况下应有的做法，或把两个情况对照起来作出评价。",
                        items: [
                            grammar("N1", "〜なら〜で", "如果是……，就按……的情况……", "普通形＋なら＋同一内容＋で", "重复前项内容，表示<strong class='usage-key'>既然是这种情况，就应采取与之相应的做法</strong>。后项常出现命令、建议、批评或对结果的评价，并经常带有不满语气。", [
                                ["仕事をする<strong class='target-particle'>ならするで</strong>、最後まで責任を持ってください。", "既然要做这份工作，就请负责到底。"],
                                ["行きたくない<strong class='target-particle'>なら行きたくないで</strong>、早めにそう言えばよかったのに。", "既然不想去，早点这样说不就好了吗。"]
                            ]),
                            grammar("N1", "〜ならともかく", "如果是……尚且另当别论", "名词／普通形＋ならともかく", "先承认前项在某种程度上还可以理解或接受，再指出实际讨论的后项<strong class='usage-key'>不能用同样标准看待</strong>。后项常使用批评、否定或疑问表达。", [
                                ["一度<strong class='target-particle'>ならともかく</strong>、二度も同じミスをするのは問題です。", "如果只犯一次还另当别论，同样的错误犯两次就有问题了。"],
                                ["子ども<strong class='target-particle'>ならともかく</strong>、大人がその規則を守らないのは困ります。", "如果是孩子尚且另当别论，成年人不遵守那项规定就令人困扰了。"]
                            ]),
                            grammar("N1", "〜ならまだしも", "如果是……还勉强可以接受", "名词／普通形＋ならまだしも", "表示前项情况尚可理解或勉强接受，但实际的后项<strong class='usage-key'>程度更严重，难以接受</strong>。语气通常比「〜ならともかく」更强。", [
                                ["一日<strong class='target-particle'>ならまだしも</strong>、一週間も連絡がないのは心配です。", "如果只有一天还勉强可以，但一周都没有联系就让人担心了。"],
                                ["初心者<strong class='target-particle'>ならまだしも</strong>、経験者がこの間違いをするのは問題です。", "如果是初学者还情有可原，但有经验的人犯这种错误就有问题了。"]
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

    function usageAnchor(particle, index) {
        return `particle-${encodeURIComponent(particle)}-usage-${index + 1}`;
    }

    function grammarAnchor(particle, usageIndex, grammarIndex) {
        return `${usageAnchor(particle, usageIndex)}-grammar-${grammarIndex + 1}`;
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

    function renderRelated(related, particle, usageIndex) {
        if (!related || !related.items.length) return "";
        const items = related.items.map((item, grammarIndex) => `
            <article id="${grammarAnchor(particle, usageIndex, grammarIndex)}" class="particle-related-entry" tabindex="-1">
                <header class="particle-related-entry-heading">
                    <span class="particle-related-number">${String(usageIndex + 1).padStart(2, "0")}-${grammarIndex + 1}</span>
                    <div class="particle-related-title-block">
                        <p class="particle-related-meta"><span>${item.level}</span> 相关语法</p>
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
            </article>`).join("");

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
            <header id="particle-${encodeURIComponent(particle)}-top" class="particle-heading" tabindex="-1">
                <strong lang="ja">${particle}</strong>
                <div><span>FOCUS PARTICLE</span><p>${data.desc}</p></div>
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
        nav.innerHTML = particleOrder.map((particle) => `
            <button type="button" class="grammar-map-particle-button${particle === activeParticle ? " is-active" : ""}" data-map-select="${particle}"${particle === activeParticle ? " aria-current='true'" : ""}>
                <strong lang="ja">${particle}</strong><span>${countRelated(particleData[particle]) ? `${countRelated(particleData[particle])} 项关联` : "基础用法"}</span>
            </button>`).join("");
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
                <button type="button" class="grammar-map-root" data-particle="${particle}" data-target="particle-${encodeURIComponent(particle)}-top">
                    <span>提示助词</span><strong lang="ja">${particle}</strong><em>查看完整讲解 →</em>
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
        else if (route === "special") showSpecial(false);
        else if (route.startsWith("grammar-map-")) showMap(route.slice(12), false);
        else if (route.startsWith("particle-")) showParticle(route.slice(9), false);
        else if (route.startsWith("detail-")) {
            const remainder = route.slice(7);
            const separator = remainder.indexOf("-particle-");
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

        document.querySelectorAll(".case-index-button").forEach((button) => button.addEventListener("click", () => {
            const section = button.dataset.section;
            if (section === "concept") showConcept();
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
