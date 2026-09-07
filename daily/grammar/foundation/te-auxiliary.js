(function () {
    "use strict";

    const GROUPS = [
        {
            id: "state",
            number: "01",
            label: "进行与状态",
            entries: [
                {
                    id: "te-iru",
                    title: "～ている",
                    meaning: "进行、持续、反复与结果状态",
                    connection: "Vて／Vで＋いる",
                    origin: "「いる」原本表示有生命的人或事物存在。",
                    role: "说明前面的动作正在进行、经常发生，或者动作结束后留下的状态仍在继续。",
                    forms: "～ている／～ていない／～ていた／～ています",
                    usages: [
                        {
                            title: "动作正在进行",
                            description: "表示说话时，或者句中所说的那个时间，动作<strong>已经开始但还没有结束</strong>。通常接在能够持续一段时间的动作动词后面。",
                            examples: [
                                ["今、図書館で本を<strong>読んでいます</strong>。", "现在正在图书馆看书。"],
                                ["電話したとき、田中さんは夕食を<strong>作っていた</strong>。", "打电话时，田中正在做晚饭。"]
                            ]
                        },
                        {
                            title: "持续、习惯或反复",
                            description: "表示某项动作在一段时间内<strong>持续进行，或作为习惯反复发生</strong>。常和「毎日・いつも・よく」等时间词、频率副词一起使用。",
                            examples: [
                                ["私は毎朝、公園を<strong>走っています</strong>。", "我每天早晨都在公园跑步。"],
                                ["姉は大学で経済を<strong>勉強している</strong>。", "姐姐在大学读经济学。"]
                            ]
                        },
                        {
                            title: "变化后的结果状态",
                            description: "表示变化已经发生，而且<strong>变化后的状态还保持着</strong>。常接在「開く・結婚する・行く」等瞬间完成的变化动词后面。",
                            examples: [
                                ["窓が<strong>開いています</strong>。", "窗户开着。"],
                                ["父は今、東京へ<strong>行っています</strong>。", "父亲去东京了，现在还在那里。"]
                            ]
                        },
                        {
                            title: "知识、经历或记录延续到现在",
                            description: "表示过去获得的<strong>知识、经历或成绩到现在仍然保留着</strong>。常见于「知る・覚える・経験する・優勝する」等动词，不能理解为动作正在进行。",
                            examples: [
                                ["私はその人の名前を<strong>知っています</strong>。", "我知道那个人的名字。"],
                                ["この選手は世界大会で三回<strong>優勝している</strong>。", "这位选手曾三次赢得世界大赛冠军。"]
                            ]
                        }
                    ],
                    note: {
                        id: "te-iru-judgement",
                        tone: "caution",
                        title: "判断重点",
                        items: [
                            {
                                title: "根据前面动词在句中的具体含义来判断",
                                description: "「～ている」表示哪一种用法，要看前面的动词在句中表示的是动作、变化还是状态。例如「結婚する・死ぬ・知る・着る」都带有状态变化，接「～ている」后通常表示<strong>变化后的状态</strong>。同一个「する」意思不同时，接「～ている」后的理解也会不同。",
                                meaningMap: [
                                    ["做、进行", "宿題をする", "宿題をしている", "动作正在进行：正在做作业"],
                                    ["从事、担任", "教師をする", "教師をしている", "持续状态：目前从事教师工作"],
                                    ["佩戴", "ネクタイをする", "ネクタイをしている", "佩戴状态：系着领带"],
                                    ["价格、价值为", "この時計は十万円もする", "この時計は十万円もしている", "价格状态：这块表现在竟值十万日元"]
                                ]
                            },
                            {
                                title: "口语中的缩约形式",
                                description: "口语中常省略「い」，说成「～てる／～でる」，例如「何してる？」。正式书写时一般使用完整形式。"
                            }
                        ]
                    }
                },
                {
                    id: "te-aru",
                    title: "～てある",
                    meaning: "有人做过某事后留下的状态",
                    connection: "他动词Vて／Vで＋ある",
                    origin: "「ある」原本表示没有生命的事物存在，或某种状态存在。",
                    role: "表示有人为了某个目的做了前面的动作，而且做完后的状态或准备仍然保留着。",
                    forms: "～てある／～てあった／～てあります",
                    usages: [
                        {
                            title: "有人有意做完后留下的状态",
                            description: "表示某人有意做了某个动作，而<strong>做完后的状态一直保留到现在</strong>。重点在动作对象目前的状态，做这件事的人通常不用说出来。",
                            examples: [
                                ["会議室には椅子がきれいに<strong>並べてあります</strong>。", "会议室里的椅子已经摆整齐了。"],
                                ["入口に案内の紙が<strong>貼ってある</strong>。", "入口处贴着一张说明纸。"]
                            ]
                        },
                        {
                            title: "为之后的需要提前做好",
                            description: "表示需要的准备已经提前做好，而且<strong>之后可以直接使用这个结果</strong>。动作对象常用「は」提示，也可以保留「を」。",
                            examples: [
                                ["旅行のホテルはもう<strong>予約してあります</strong>。", "旅行时住的酒店已经订好了。"],
                                ["必要な資料を人数分<strong>コピーしてあります</strong>。", "需要的资料已经按人数复印好了。"]
                            ]
                        }
                    ],
                    note: {
                        tone: "caution",
                        title: "助词与动词限制",
                        paragraphs: [
                            "描述做完后的状态时，原来用「を」表示的动作对象，常改用「が／は」：<strong>窓を閉める → 窓が閉めてある</strong>。",
                            "这种用法通常接在<strong>表示人为操作的意志性他动词</strong>后面。单纯表示状态的动词，或没有人参与的自然变化，一般不用「～てある」。"
                        ]
                    },
                    contrast: {
                        title: "「～ている」与「～てある」的区别",
                        description: "两种形式都能描述眼前的状态，但是否强调人为操作及其目的不同。",
                        rows: [
                            ["窓が開いている", "只说明窗户开着，不强调是谁打开的，也不说明目的。"],
                            ["窓が開けてある", "说明有人为了通风等目的把窗户打开，并一直保持这个状态。"]
                        ]
                    }
                }
            ]
        },
        {
            id: "preparation",
            number: "02",
            label: "准备与完成",
            entries: [
                {
                    id: "te-oku",
                    title: "～ておく",
                    meaning: "预先处理或让状态保持不变",
                    connection: "Vて／Vで＋おく",
                    origin: "「置く」原本表示把事物放置在某处。",
                    role: "表示为了之后的需要提前做某事，或者有意让现在的状态继续保持。",
                    forms: "～ておく／～ておかない／～ておいた／～ておきます",
                    usages: [
                        {
                            title: "为之后的需要提前做好",
                            description: "在某件事发生以前，先把之后需要的事情做好。句中常出现目的、期限或之后要发生的事，用来说明<strong>为什么现在要提前做</strong>。",
                            examples: [
                                ["出発する前に、切符を<strong>買っておきます</strong>。", "出发前先把票买好。"],
                                ["会議までに資料を<strong>読んでおいてください</strong>。", "请在开会前提前把资料看一遍。"]
                            ]
                        },
                        {
                            title: "让现在的状态保持下去",
                            description: "表示说话人有意<strong>让现在的状态保持不变</strong>，或者决定暂时不处理某件事。「～ないでおく」表示目前先不做。",
                            examples: [
                                ["暑いので、窓は<strong>開けておいてください</strong>。", "因为很热，请让窗户继续开着。"],
                                ["この問題には、今は<strong>答えないでおこう</strong>。", "这个问题现在先不回答。"]
                            ]
                        }
                    ],
                    note: {
                        title: "口语缩约",
                        paragraphs: [
                            "口语中，「～ておく」常缩成「～とく」，「～でおく」常缩成「～どく」：<strong>買っておく → 買っとく／読んでおく → 読んどく</strong>。",
                            "「～てある」说明<strong>准备完成后呈现的状态</strong>；「～ておく」说明某人<strong>主动提前准备，或有意保持现状</strong>。"
                        ]
                    }
                },
                {
                    id: "te-shimau",
                    title: "～てしまう",
                    meaning: "动作完全结束，或表达遗憾和意外",
                    connection: "Vて／Vで＋しまう",
                    origin: "「しまう」原本可以表示把东西收好，或把事情处理完。",
                    role: "表示动作已经完全做完；如果结果并非说话人所愿，还会带出遗憾、意外或无奈的语气。",
                    forms: "～てしまう／～てしまった／～てしまいます",
                    usages: [
                        {
                            title: "动作全部完成或彻底结束",
                            description: "表示动作已经全部做完，常和「全部・すっかり・一気に」等词一起使用。这里可以只是<strong>客观说明完成</strong>，不一定带有负面情绪。",
                            examples: [
                                ["この本は一晩で<strong>読んでしまった</strong>。", "这本书我一个晚上就全部读完了。"],
                                ["料理が冷める前に全部<strong>食べてしまいましょう</strong>。", "趁菜还没凉，把它全部吃完吧。"]
                            ]
                        },
                        {
                            title: "表示遗憾、意外或无意发生",
                            description: "如果结果不符合说话人的期待，「～てしまう」会表达<strong>事情已经发生、很难挽回</strong>的遗憾、意外或无奈。",
                            examples: [
                                ["大切な財布を<strong>なくしてしまいました</strong>。", "我把重要的钱包弄丢了。"],
                                ["電車で寝て、駅を<strong>乗り過ごしてしまった</strong>。", "我在电车上睡着，结果坐过站了。"]
                            ]
                        }
                    ],
                    note: {
                        tone: "caution",
                        title: "完成意义和感情色彩要分开判断",
                        paragraphs: [
                            "先看句子是不是只在说明<strong>动作全部完成</strong>，再根据上下文判断有没有遗憾或意外的语气。不能一看到「～てしまう」就按负面含义理解。",
                            "口语中，「～てしまう」常缩成「～ちゃう」，「～でしまう」常缩成「～じゃう」：<strong>忘れちゃった／飲んじゃった</strong>。"
                        ]
                    }
                }
            ]
        },
        {
            id: "attempt",
            number: "03",
            label: "尝试",
            entries: [
                {
                    id: "te-miru",
                    title: "～てみる",
                    meaning: "亲自试着做一次，看看结果如何",
                    connection: "意志性动词Vて／Vで＋みる",
                    origin: "「見る」原本表示用眼睛看。",
                    role: "表示亲自试着做前面的动作，借此确认结果、感受，或判断这种做法是否可行。",
                    forms: "～てみる／～てみたい／～てみた／～てみます",
                    usages: [
                        {
                            title: "试着做一次，看看结果",
                            description: "说话人还不知道结果，所以决定<strong>先实际做一次看看</strong>。通常接在可以主动控制的意志性动词后面。",
                            examples: [
                                ["この服を<strong>着てみてもいいですか</strong>。", "我可以试穿一下这件衣服吗？"],
                                ["分からなければ、先生に<strong>聞いてみよう</strong>。", "如果不明白，就试着问问老师吧。"]
                            ]
                        },
                        {
                            title: "委婉表达愿望、建议或邀请",
                            description: "「～てみたい・～てみてください・～てみませんか」都保留“试着做”的意思，同时能让愿望、建议或邀请听起来<strong>更自然、更委婉</strong>。",
                            examples: [
                                ["いつか屋久島へ<strong>行ってみたいです</strong>。", "以后想去屋久岛看看。"],
                                ["一度この方法を<strong>試してみてください</strong>。", "请试试这个方法。"]
                            ]
                        }
                    ],
                    note: {
                        tone: "caution",
                        title: "搭配限制",
                        paragraphs: [
                            "「～てみる」通常表示主体主动尝试，所以不适合直接接单纯的状态，或人无法控制的自然现象。",
                            "使用「～てみる」时，重点是通过尝试确认结果。因此「少し飲んでみる」很自然；如果只是把某件事全部做完，并没有尝试的意思，直接使用原动词更合适。"
                        ]
                    }
                },
                {
                    id: "te-miseru",
                    title: "～てみせる",
                    meaning: "实际做给别人看，或表示一定要做到",
                    connection: "意志性动词Vて／Vで＋みせる",
                    origin: "「見せる」原本表示把某样东西展示给别人看。",
                    role: "表示主体实际完成前面的动作并把过程或结果展示出来，也可以把实现结果作为向自己或他人证明决心的方式。",
                    forms: "～てみせる／～てみせた／～てみせます",
                    usages: [
                        {
                            title: "实际做一遍给别人看",
                            description: "主体亲自完成前面的动作，让别人看到<strong>做法、过程或完成后的结果</strong>，常用于示范、教学或证明能力。",
                            examples: [
                                ["やり方が分からないなら、私が一度<strong>やってみせます</strong>。", "如果你不知道做法，我就实际做一遍给你看。"],
                                ["職人は目の前で見事な技を<strong>披露してみせた</strong>。", "工匠在大家眼前展示了精湛的技艺。"]
                            ]
                        },
                        {
                            title: "表示一定要实现的强烈决心",
                            description: "说话人把未来实现某个结果视为对自己或他人的证明，表示<strong>无论如何都要做到</strong>。常与「必ず・きっと・今度こそ」等词搭配。",
                            examples: [
                                ["今度の試合は必ず<strong>勝ってみせる</strong>。", "下次比赛我一定要赢给你看。"],
                                ["来年こそ試験に<strong>合格してみせます</strong>。", "明年我一定要通过考试。"]
                            ]
                        }
                    ],
                    note: {
                        title: "与「～てみる」的区别",
                        paragraphs: [
                            "「～てみる」的重点是<strong>先尝试，再确认结果</strong>；「～てみせる」的重点是<strong>把行动或实现的结果展示出来</strong>。",
                            "「食べてみる」表示试着吃吃看；「全部食べてみせる」则表示要把它全部吃完，以此表现自己的能力或决心。"
                        ]
                    }
                }
            ]
        },
        {
            id: "direction",
            number: "04",
            label: "方向与变化",
            entries: [
                {
                    id: "te-iku",
                    title: "～ていく",
                    meaning: "向远处移动，或从现在继续发展下去",
                    connection: "Vて／Vで＋いく",
                    origin: "「行く」原本表示离开当前地点，前往别处。",
                    role: "空间上表示动作向远处移动；时间上表示某种动作或变化从现在继续发展下去。",
                    forms: "～ていく／～ていった／～ていきます",
                    usages: [
                        {
                            title: "以某种方式前往，或把东西带走",
                            description: "前面的动词说明移动方式或随身携带的物品；后面的「いく」表示<strong>离开这里，向别处移动</strong>。",
                            examples: [
                                ["駅まで<strong>歩いていきます</strong>。", "我走路去车站。"],
                                ["雨が降りそうだから、傘を<strong>持っていってください</strong>。", "看起来要下雨，请带把伞去。"]
                            ]
                        },
                        {
                            title: "从现在起继续或发生变化",
                            description: "表示某个动作、状态或变化从现在开始，<strong>继续向以后发展</strong>。常和「これから・今後」等词一起使用。",
                            examples: [
                                ["これからも日本語の勉強を<strong>続けていきます</strong>。", "今后也会继续学习日语。"],
                                ["この町の人口は少しずつ<strong>減っていくでしょう</strong>。", "这座城市的人口今后可能会逐渐减少。"]
                            ]
                        }
                    ],
                    note: {
                        title: "与动作先后顺序的区别",
                        paragraphs: [
                            "「ここでコーヒーを飲んでいく」「途中でお弁当を買っていく」表示先“喝／买”，然后再离开或前往目的地。这里的「いく」仍然是独立的移动动作，所以只是<strong>用て形连接两个先后发生的动作</strong>，不属于补助用法。"
                        ]
                    }
                },
                {
                    id: "te-kuru",
                    title: "～てくる",
                    meaning: "向说话人所在处靠近，或从过去发展到现在",
                    connection: "Vて／Vで＋くる",
                    origin: "「来る」原本表示从别处来到说话人所在的地方。",
                    role: "空间上表示动作向这里靠近；时间上表示某种变化从过去一直发展到现在。",
                    forms: "～てくる／～てきた／～てきます",
                    usages: [
                        {
                            title: "以某种方式过来，或把东西带来",
                            description: "前面的动词说明移动方式或携带的物品；后面的「くる」表示人或物<strong>从别处向这里移动</strong>。",
                            examples: [
                                ["子どもがこちらへ<strong>走ってきた</strong>。", "孩子朝这边跑过来了。"],
                                ["友達がお土産を<strong>持ってきました</strong>。", "朋友给我带来了特产。"]
                            ]
                        },
                        {
                            title: "从过去逐渐发展到现在",
                            description: "表示变化从过去开始，一直发展到现在，重点在<strong>目前已经发生了多少变化</strong>。",
                            examples: [
                                ["最近、だんだん暖かく<strong>なってきました</strong>。", "最近渐渐暖和起来了。"],
                                ["日本語が少しずつ<strong>分かってきた</strong>。", "渐渐开始懂日语了。"]
                            ]
                        },
                        {
                            title: "某种现象开始出现",
                            description: "表示某种现象刚刚出现，并开始被说话人察觉，常用来说明<strong>变化开始发生或正在靠近</strong>。",
                            examples: [
                                ["急に雨が<strong>降ってきた</strong>。", "突然下起雨来了。"],
                                ["台所からいい匂いが<strong>してきました</strong>。", "从厨房飘来了香味。"]
                            ]
                        }
                    ],
                    note: {
                        title: "与动作先后顺序的区别",
                        paragraphs: [
                            "「ちょっと飲み物を買ってきます」「外で手を洗ってきてください」表示先去做「買う／洗う」，然后再回来。这里的「くる」仍然是独立的移动动作，所以只是<strong>用て形连接两个先后发生的动作</strong>，不属于补助用法。"
                        ]
                    },
                    contrast: {
                        title: "同一变化的时间方向",
                        description: "以说话的现在为基准，「～てくる」回看变化如何发展到现在；「～ていく」则说明变化今后如何继续。",
                        rows: [
                            ["増えてきた", "从过去开始增加，到现在已经看得出数量变多了。"],
                            ["増えていく", "从现在开始，今后还会继续增加。"]
                        ]
                    }
                }
            ]
        },
        {
            id: "benefactive",
            number: "05",
            label: "授受关系",
            entries: [
                {
                    id: "te-ageru",
                    title: "～てあげる",
                    meaning: "表示主语为别人做某事",
                    connection: "做动作的人は＋接受帮助的人に／のために＋Vて＋あげる",
                    connectionParts: [
                        ["actor", "提供帮助的人（施事者）", "A は／が"],
                        ["beneficiary", "接受帮助的人（受益者）", "B に／のために"],
                        ["action", "为对方做的动作", "Vて"],
                        ["form", "授受形式", "あげる"]
                    ],
                    origin: "「あげる」原本表示把物品给予别人。",
                    role: "主语为别人做某件有帮助的事，句子从提供帮助的一方来叙述。",
                    forms: "～てあげる／～てあげた／～てあげます",
                    usages: [
                        {
                            title: "主语为别人做有帮助的事",
                            description: "主语是实际做动作的人，接受帮助的人通常用「に」「のために」表示，也可能沿用原动词所需的助词。重点是<strong>主语主动为对方做了某事</strong>。",
                            examples: [
                                ["私は妹に数学を<strong>教えてあげました</strong>。", "我给妹妹辅导了数学。"],
                                ["旅行中の友達に代わって、猫の世話を<strong>してあげた</strong>。", "我替正在旅行的朋友照顾了猫。"]
                            ]
                        },
                        {
                            title: "～て差し上げる：我方为需要尊敬的人做某事",
                            description: "「～て差し上げる」是「～てあげる」的<strong>谦让形式</strong>，表示我方为地位较高或需要尊敬的人做某事。它虽然降低了我方，但仍保留“我方给予帮助”的视角，因此直接对受益者本人使用时要注意语气。",
                            examples: [
                                ["困っていらっしゃる方を、駅まで<strong>案内して差し上げました</strong>。", "我把一位遇到困难的人带到了车站。"],
                                ["祖母の荷物を部屋まで<strong>運んで差し上げました</strong>。", "我帮祖母把行李搬到了房间。"]
                            ]
                        },
                        {
                            title: "～てやる：为晚辈或动植物做某事",
                            description: "「～てやる」表示说话人一方为晚辈、关系很近的人或动植物做某事，带有<strong>由上到下、直率而不客气</strong>的语气。对成年人或不熟悉的人使用容易显得傲慢，普通会话中常改用较柔和的「～てあげる」。",
                            examples: [
                                ["毎朝、犬を散歩に<strong>連れて行ってやります</strong>。", "我每天早晨带狗去散步。"],
                                ["弟が困っていたので、宿題を<strong>手伝ってやった</strong>。", "弟弟遇到了困难，所以我帮他做了作业。"]
                            ]
                        }
                    ],
                    note: {
                        tone: "caution",
                        title: "谦让形式不等于可以随时对本人使用",
                        paragraphs: [
                            "「～てあげる」和「～て差し上げる」都保留“我方给予对方帮助”的视角。即使使用了谦让形式，直接对听话人说，有时仍会显得<strong>把自己放在施恩的一方</strong>。",
                            "面对老师、上司或顾客本人时，通常直接使用「お／ご～する」更自然。例如与其说「先生、持って差し上げます」，不如说<strong>「先生、お持ちします」</strong>。"
                        ]
                    }
                },
                {
                    id: "te-kureru",
                    title: "～てくれる",
                    meaning: "别人为我或我方的人做某事",
                    connection: "做动作的人が／は＋我或我方的人に＋Vて＋くれる",
                    connectionParts: [
                        ["actor", "提供帮助的人（施事者）", "A は／が"],
                        ["beneficiary", "我或我方的人（受益者）", "私／私の身内 に"],
                        ["action", "为我方做的动作", "Vて"],
                        ["form", "授受形式", "くれる"]
                    ],
                    origin: "「くれる」原本表示别人把物品给说话人一方。",
                    role: "主语是实际做动作的人，得到帮助的是说话人、说话人的家人或被视为同一方的人。",
                    forms: "～てくれる／～てくれた／～てくれます／～てくださる",
                    usages: [
                        {
                            title: "别人为我或我方的人做某事",
                            description: "主语是实际做动作的人，得到帮助的是说话人、家人或被说话人视为自己一方的人。对象很明确时常被省略，句子通常带有<strong>“我方得到帮助”的语气</strong>。",
                            examples: [
                                ["友達が駅まで<strong>迎えに来てくれました</strong>。", "朋友到车站来接我了。"],
                                ["母が子どもの写真を<strong>送ってくれた</strong>。", "母亲把孩子的照片发给我了。"]
                            ]
                        },
                        {
                            title: "用于请求对方做某事",
                            description: "「～てくれる？／～てくれない？／～てくれませんか」都可以用来请对方帮忙。形式越长、否定和礼貌成分越多，请求通常<strong>越委婉</strong>。",
                            examples: [
                                ["ちょっとこの荷物を<strong>持ってくれる</strong>？", "能帮我拿一下这件行李吗？"],
                                ["もう少しゆっくり<strong>話してくれませんか</strong>。", "能不能再说慢一点？"]
                            ]
                        },
                        {
                            title: "他人的行为给我方造成困扰",
                            description: "在负面语境中，「～てくれる」可以反过来表示对方的行为<strong>影响到了说话人一方，并给我方造成了麻烦</strong>。这种说法常带有反语、讽刺或责怪的语气，多见于「よくも～てくれた」「～てくれたね／な」等形式。",
                            examples: [
                                ["よくも私の秘密をみんなに<strong>話してくれたね</strong>。", "你居然把我的秘密告诉了所有人。"],
                                ["大事なファイルを<strong>消してくれたな</strong>。", "你竟然把重要文件删掉了。"]
                            ]
                        }
                    ],
                    note: {
                        title: "敬语形式",
                        paragraphs: [
                            "做动作的人是需要尊敬的对象时，使用尊敬形式<strong>「～てくださる／～てくださいました」</strong>。",
                            "「～てくれる」以做动作的人为主语，强调对方为我提供了帮助；如果要以得到帮助的人为主语，则使用「～てもらう」。"
                        ]
                    }
                },
                {
                    id: "te-morau",
                    title: "～てもらう",
                    meaning: "表示请别人做某事，或得到别人的帮助",
                    connection: "得到帮助的人は＋做动作的人に／から＋Vて＋もらう",
                    connectionParts: [
                        ["beneficiary", "得到帮助的人（主语）", "A は／が"],
                        ["actor", "实际做动作的人（施事者）", "B に／から"],
                        ["action", "对方完成的动作", "Vて"],
                        ["form", "授受形式", "もらう"]
                    ],
                    origin: "「もらう」原本表示从别人那里得到物品。",
                    role: "主语是得到帮助的人，实际动作由「に／から」前面的人完成；也可以表示主语请别人或安排别人做某事。",
                    forms: "～てもらう／～てもらった／～てもらいます／～ていただく",
                    usages: [
                        {
                            title: "得到别人提供的帮助",
                            description: "句子以得到帮助的人为主语，实际做动作的人通常用「に」表示；表示传递、告知或信息来源时也可以用「から」。重点是<strong>主语因为别人的动作而得到帮助</strong>。",
                            examples: [
                                ["私は先生に作文を<strong>直してもらいました</strong>。", "我请老师帮我修改了作文。"],
                                ["友達から空港までの行き方を<strong>教えてもらった</strong>。", "朋友告诉了我去机场怎么走。"]
                            ]
                        },
                        {
                            title: "请别人或安排别人做某事",
                            description: "如果主语主动请对方做事，「～てもらう」不仅表示接受帮助，也可以表示<strong>请对方按照要求或安排完成某件事</strong>。",
                            examples: [
                                ["明日は全員に少し早く<strong>来てもらいます</strong>。", "明天请所有人稍微早点来。"],
                                ["店員に別のサイズを<strong>持ってきてもらった</strong>。", "我请店员拿了另一个尺码。"]
                            ]
                        },
                        {
                            title: "表示不希望对方这样做",
                            description: "「～てもらう」与「困る」「迷惑だ」等负面表达结合时，不表示接受帮助，而是说明对方的行为<strong>会使说话人受到影响或感到困扰</strong>。常用「～てもらっては困る／迷惑だ」委婉但明确地制止对方。",
                            examples: [
                                ["勝手に予定を<strong>変えてもらっては困ります</strong>。", "请不要擅自更改计划，这会给我造成困扰。"],
                                ["こんな時間に大声で<strong>話してもらっては迷惑です</strong>。", "这个时间大声说话会打扰到别人。"]
                            ]
                        }
                    ],
                    note: {
                        title: "敬语和实际做动作的人",
                        paragraphs: [
                            "请需要尊敬的人做某事，或说明自己得到了对方的帮助时，通常使用<strong>「～ていただく／～ていただきました」</strong>。它比「～てくださる」更突出“我方接受帮助”。",
                            "实际做动作的人通常用「に」表示。发送、教授、传达等带有来源含义的动作也可以用「から」；如果前面只是地点，一般只能用「から」。"
                        ]
                    },
                    contrast: {
                        title: "主语与关注点的区别",
                        description: "同一件受惠行为，可以从帮助者一方叙述，也可以从接受帮助者一方叙述。",
                        rows: [
                            ["先生が直してくれた", "老师是主语，强调老师主动帮我修改。"],
                            ["私は先生に直してもらった", "我是主语，强调我请老师修改，并得到了老师的帮助。"]
                        ]
                    }
                },
                {
                    kind: "topic",
                    id: "double-benefactive",
                    title: "双重授受",
                    meaning: "当动作行为的受益关系涉及三个人时所使用的授受表达",
                    topicContent: {
                        concept: "当动作行为的受益关系涉及三个人的时候所用到的授受表达。",
                        generalForm: "人物A 委托 人物B 去找 人物C 进行某行为。",
                        image: "../assets/double-benefactive-bus-manga-pencil-v1.png",
                        dialogue: [
                            "あそこから、子供が走ってきますよ。",
                            "このバスに乗りたいんだ。",
                            "運転手さん、ちょっと、待ってあげてください。"
                        ],
                        people: [
                            ["女性A", "说话人（请求方，不参与行为的进行）"],
                            ["司机B", "听话人（请求接受方，行为进行者）"],
                            ["小孩C", "第三方（行为接收者）"]
                        ],
                        action: "女性A 请求 司机B，请求内容“司机B 为了 小孩C 进行等待行为”，即“说话人在请求听话人为第三方做某事”。",
                        structure: "司机为小孩进行「待つ」，构成「待ってあげる」，而这个行为是属于女性的请求，则在后面搭配请求表达，构成「待ってあげてください」。",
                        summary: "双重授受的本质，其实就是“请求他人去做一个授受行为，且说话人本人不参与行为的进行”，所以基本都是以“Vてあげる（もらう）＋请求表达”来体现的。",
                        forms: [
                            ["①、听话人进行行为", "Vてあげる＋请求表达"],
                            ["②、第三方进行行为", "Vてもらう＋请求表达"]
                        ],
                        requestIntro: "如在双重授受这个概念中提及到的“请求表达”，实际上是通过授受搭配疑问表达的方式，来体现“请求”之意的表达，主要涉及到「てもらう」「てくれる」。",
                        kureruRequests: "「てくれる」——「～てくれない？」「～てくれませんか？」「～てくださいませんか？」",
                        morauRequests: "「てもらう」——「～てもらえない？」「～てもらえませんか？」「～ていただけませんか？」",
                        specialRequests: "特殊请求表达：～てください、～てもらいたい。",
                        requestCaution: "但要注意的是：「～てもらわない」「ていただかない？」并非“请求”表达。",
                        formalRequest: "在正式场景中，可以通过「ご/お＋N/V R＋いただき/ください」等方式体现“对对方所进行的行为”的尊敬，具体用法见“敬语”部分。"
                    }
                }
            ]
        }
    ];

    const state = {
        groupId: null,
        entryId: null,
        concept: true
    };

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function statusMarkup(id, title) {
        return `
            <button
                class="grammar-learning-favorite te-aux-status-button"
                type="button"
                data-grammar-local-id="${escapeHtml(id)}"
                data-grammar-source-key="te-auxiliary"
                data-grammar-title="${escapeHtml(title || id)}"
            ></button>
        `;
    }

    function renderExamples(examples) {
        return `
            <div class="te-aux-example-block">
                <span class="te-aux-example-label">例句</span>
                ${examples.map((example, index) => `
                    <div class="te-aux-example">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <div>
                            <p class="te-aux-example-jp" lang="ja">${example[0]}</p>
                            <p class="te-aux-example-cn">${escapeHtml(example[1])}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    }

    function renderUsages(entry) {
        return entry.usages.map((usage, index) => `
            <article class="te-aux-usage">
                <header class="te-aux-usage-heading">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div>
                        <small>用法说明</small>
                        <h4>${escapeHtml(usage.title)}</h4>
                    </div>
                </header>
                <p class="te-aux-usage-copy">${usage.description}</p>
                ${renderExamples(usage.examples)}
            </article>
        `).join("");
    }

    function renderNote(note) {
        if (!note) return "";
        const body = note.items?.length
            ? `
                <div class="te-aux-note-list">
                    ${note.items.map((item) => `
                        <section class="te-aux-note-item">
                            <span aria-hidden="true">•</span>
                            <div>
                                <h5>${escapeHtml(item.title)}</h5>
                                <p>${item.description}</p>
                                ${item.meaningMap?.length ? `
                                    <div class="te-aux-meaning-map" aria-label="する的词义与ている用法对照">
                                        <div class="te-aux-meaning-map-heading">
                                            <span>「する」的词汇含义</span>
                                            <span>基本搭配</span>
                                            <span>接「～ている」</span>
                                            <span>表达作用</span>
                                        </div>
                                        ${item.meaningMap.map((row) => `
                                            <div class="te-aux-meaning-map-row">
                                                <b>${escapeHtml(row[0])}</b>
                                                <span lang="ja">${escapeHtml(row[1])}</span>
                                                <span lang="ja">${escapeHtml(row[2])}</span>
                                                <span>${escapeHtml(row[3])}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                ` : ""}
                            </div>
                        </section>
                    `).join("")}
                </div>
            `
            : note.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
        return `
            <aside class="te-aux-note"${note.id ? ` id="${escapeHtml(note.id)}"` : ""} data-tone="${escapeHtml(note.tone || "info")}">
                <b>${escapeHtml(note.title)}</b>
                ${body}
            </aside>
        `;
    }

    function renderContrast(contrast) {
        if (!contrast) return "";
        const rows = Array.isArray(contrast) ? contrast : contrast.rows;
        if (!rows?.length) return "";
        const title = Array.isArray(contrast) ? "对比理解" : contrast.title;
        const description = Array.isArray(contrast) ? "" : contrast.description;
        return `
            <section class="te-aux-contrast" aria-label="${escapeHtml(title || "表达对比")}">
                <header class="te-aux-contrast-heading">
                    <b>${escapeHtml(title || "对比理解")}</b>
                    ${description ? `<p>${escapeHtml(description)}</p>` : ""}
                </header>
                ${rows.map((row) => `
                    <div class="te-aux-contrast-row">
                        <b lang="ja">${escapeHtml(row[0])}</b>
                        <span>${escapeHtml(row[1])}</span>
                    </div>
                `).join("")}
            </section>
        `;
    }

    function renderConnection(entry, group) {
        if (group.id !== "benefactive" || !entry.connectionParts?.length) {
            return `<p lang="ja">${escapeHtml(entry.connection)}</p>`;
        }
        return `
            <div class="te-aux-relation-formula" aria-label="${escapeHtml(entry.connection)}">
                ${entry.connectionParts.map((part, index) => `
                    ${index ? `<span class="te-aux-relation-plus" aria-hidden="true">＋</span>` : ""}
                    <span class="te-aux-relation-token" data-role="${escapeHtml(part[0])}">
                        <small>${escapeHtml(part[1])}</small>
                        <strong lang="ja">${escapeHtml(part[2])}</strong>
                    </span>
                `).join("")}
            </div>
        `;
    }

    function renderCard(entry, group, indexInGroup) {
        return `
            <article class="grammar-card" id="te-aux-${escapeHtml(entry.id)}" data-te-aux-entry="${escapeHtml(entry.id)}" data-study-group="${escapeHtml(group.id)}" tabindex="-1" aria-hidden="true">
                <header class="compound-entry-heading">
                    <span class="compound-entry-sequence">${group.number}-${indexInGroup + 1}</span>
                    <div class="compound-entry-title-line">
                        <h3 class="compound-entry-title" lang="ja">${escapeHtml(entry.title)}</h3>
                        <span class="compound-entry-meaning">${escapeHtml(entry.meaning)}</span>
                    </div>
                    <div class="ml-auto">${statusMarkup(entry.id)}</div>
                </header>
                <div class="compound-entry-body">
                    <aside class="compound-entry-meta">
                        <div class="te-aux-meta-block">
                            <small>接续</small>
                            <div class="te-aux-connection">${renderConnection(entry, group)}</div>
                        </div>
                        <div class="te-aux-meta-block">
                            <small>原本含义</small>
                            <p>${escapeHtml(entry.origin)}</p>
                        </div>
                        <div class="te-aux-meta-block">
                            <small>表达作用</small>
                            <p>${escapeHtml(entry.role)}</p>
                        </div>
                        <div class="te-aux-meta-block">
                            <small>常见形式</small>
                            <p lang="ja"><strong>${escapeHtml(entry.forms)}</strong></p>
                        </div>
                    </aside>
                    <div class="compound-entry-usages">
                        ${renderUsages(entry)}
                        ${renderNote(entry.note)}
                        ${renderContrast(entry.contrast)}
                    </div>
                </div>
            </article>
        `;
    }

    function allEntries() {
        return GROUPS.flatMap((group) => group.entries.map((entry, index) => ({ entry, group, index })));
    }

    function findEntry(id) {
        return allEntries().find((item) => item.entry.id === id) || null;
    }

    function buildCards() {
        const root = document.getElementById("teAuxEntryList");
        if (!root) return;
        root.innerHTML = GROUPS.flatMap((group) =>
            group.entries.map((entry, index) => renderCard(entry, group, index))
        ).join("");
    }

    function buildIndex() {
        const root = document.getElementById("teAuxIndexList");
        if (!root) return;
        root.textContent = "";

        const concept = document.createElement("div");
        concept.className = "compound-index-group";
        concept.dataset.indexGroup = "concept";
        const conceptButton = document.createElement("button");
        conceptButton.className = "compound-index-group-button";
        conceptButton.type = "button";
        conceptButton.innerHTML = `
            <span class="compound-index-group-number">00</span>
            <span class="compound-index-group-label">基础概念</span>
            <span class="compound-index-group-arrow" aria-hidden="true">→</span>
        `;
        conceptButton.addEventListener("click", () => showConcept({ updateHash: true, focus: true }));
        concept.appendChild(conceptButton);
        root.appendChild(concept);

        GROUPS.forEach((group) => {
            const wrapper = document.createElement("div");
            wrapper.className = "compound-index-group";
            wrapper.dataset.indexGroup = group.id;

            const groupButton = document.createElement("button");
            groupButton.className = "compound-index-group-button";
            groupButton.type = "button";
            groupButton.setAttribute("aria-expanded", "false");
            groupButton.setAttribute("aria-label", `${group.label}，${group.entries.length}个补助动词`);
            groupButton.innerHTML = `
                <span class="compound-index-group-number">${group.number}</span>
                <span class="compound-index-group-label">${escapeHtml(group.label)}</span>
                <span class="compound-index-group-arrow" aria-hidden="true">›</span>
            `;
            groupButton.addEventListener("click", () => {
                const isOpen = wrapper.classList.contains("is-open");
                if (!isOpen || state.groupId !== group.id) {
                    selectEntry(group.entries[0].id, { updateHash: true, focus: true });
                } else {
                    wrapper.classList.toggle("is-open");
                    groupButton.setAttribute("aria-expanded", String(wrapper.classList.contains("is-open")));
                }
            });

            const list = document.createElement("ul");
            list.className = "compound-index-entries";
            group.entries.forEach((entry) => {
                const item = document.createElement("li");
                const button = document.createElement("button");
                button.className = "compound-index-entry-button";
                button.type = "button";
                button.dataset.entryId = entry.id;
                button.lang = "ja";
                button.textContent = entry.title;
                button.addEventListener("click", () => selectEntry(entry.id, { updateHash: true, focus: true }));
                item.appendChild(button);
                list.appendChild(item);
            });

            wrapper.append(groupButton, list);
            root.appendChild(wrapper);
        });
    }

    function syncIndex() {
        document.querySelectorAll("[data-index-group]").forEach((wrapper) => {
            const open = !state.concept && wrapper.dataset.indexGroup === state.groupId;
            wrapper.classList.toggle("is-open", open);
            wrapper.querySelector(".compound-index-group-button")?.setAttribute("aria-expanded", String(open));
        });

        document.querySelectorAll(".compound-index-entry-button").forEach((button) => {
            const active = !state.concept && button.dataset.entryId === state.entryId;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });

        const conceptGroup = document.querySelector('[data-index-group="concept"]');
        conceptGroup?.classList.toggle("is-active", state.concept);
    }

    function setHash(hash, replace) {
        const url = `${window.location.pathname}${window.location.search}${hash}`;
        if (replace) window.history.replaceState(null, "", url);
        else window.history.pushState(null, "", url);
    }

    function showConcept(options = {}) {
        state.concept = true;
        state.groupId = null;
        state.entryId = null;

        document.getElementById("teAuxConceptPanel")?.classList.add("is-active");
        document.getElementById("teAuxEntryPanel")?.classList.remove("is-active");
        document.querySelectorAll("[data-te-aux-entry]").forEach((card) => {
            card.classList.remove("compound-card-active");
            card.setAttribute("aria-hidden", "true");
        });
        syncIndex();
        if (options.updateHash) setHash("#concept", options.replace);
        if (options.focus) document.getElementById("teAuxConceptPanel")?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
    }

    function selectEntry(id, options = {}) {
        const found = findEntry(id);
        if (!found) {
            showConcept(options);
            return;
        }

        state.concept = false;
        state.groupId = found.group.id;
        state.entryId = found.entry.id;

        document.getElementById("teAuxConceptPanel")?.classList.remove("is-active");
        document.getElementById("teAuxEntryPanel")?.classList.add("is-active");
        document.querySelectorAll("[data-te-aux-entry]").forEach((card) => {
            const active = card.dataset.teAuxEntry === id;
            card.classList.toggle("compound-card-active", active);
            card.setAttribute("aria-hidden", String(!active));
        });
        syncIndex();
        if (options.updateHash) setHash(`#${id}`, options.replace);

        const card = document.getElementById(`te-aux-${id}`);
        if (options.focus) card?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
    }

    function restoreFromHash() {
        const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
        if (!hash || hash === "concept") {
            showConcept({ replace: true, instant: true });
            return;
        }
        if (findEntry(hash)) {
            selectEntry(hash, { replace: true, instant: true });
            return;
        }
        showConcept({ replace: true, instant: true });
    }

    const GROUP_INTROS = {
        state: "区分动作是正在进行、反复发生，还是已经结束但留下的状态仍在持续。",
        preparation: "说明某件事是为了之后提前做好，还是已经完全结束，并进一步判断有没有遗憾或意外的语气。",
        attempt: "表示亲自试着做一次，或将行动和结果展示给别人，以表达示范、能力或强烈决心。",
        direction: "既可以表示人或事物向远处、向这里移动，也可以表示变化从过去发展到现在，或从现在继续发展到以后。",
        benefactive: "用「あげる・くれる・もらう」说明谁做了动作、谁得到了帮助，以及句子从哪一方来叙述。"
    };

    const COLLOQUIAL_CONTRACTIONS = [
        ["进行与状态", "～ている／～でいる", "～てる／～でる", "何をしている？ → 何をしてる？"],
        ["进行与状态", "～ていた／～でいた", "～てた／～でた", "ずっと待っていた。→ ずっと待ってた。"],
        ["进行与状态", "～ていない／～でいない", "～てない／～でない", "まだ読んでいない。→ まだ読んでない。"],
        ["准备与维持", "～ておく／～でおく", "～とく／～どく", "予約しておく。→ 予約しとく。／ 読んでおく。→ 読んどく。"],
        ["准备与维持", "～ておいた／～でおいた", "～といた／～どいた", "メモしておいた。→ メモしといた。"],
        ["准备与维持", "～ておかない／～でおかない", "～とかない／～どかない", "準備しておかないと。→ 準備しとかないと。"],
        ["完成与感慨", "～てしまう／～でしまう", "～ちゃう／～じゃう", "忘れてしまう。→ 忘れちゃう。／ 飲んでしまう。→ 飲んじゃう。"],
        ["完成与感慨", "～てしまった／～でしまった", "～ちゃった／～じゃった", "なくしてしまった。→ なくしちゃった。／ 読んでしまった。→ 読んじゃった。"],
        ["完成与感慨", "～てしまいます／～でしまいます", "～ちゃいます／～じゃいます", "食べてしまいます。→ 食べちゃいます。"],
        ["方向与发展", "～ていく／～でいく", "～てく／～でく", "持っていく。→ 持ってく。／ 読んでいく。→ 読んでく。"]
    ];

    function renderSystemExamples(examples) {
        return `
            <div class="te-aux-example-list">
                ${examples.map((example, index) => `
                    <div class="te-aux-example">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <div>
                            <p class="te-aux-example-jp" lang="ja">${example[0]}</p>
                            <p class="te-aux-example-cn">${escapeHtml(example[1])}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
    }

    function renderSystemUsages(entry) {
        const nestedFavorites = entry.id === "te-ageru"
            ? {
                1: ["te-sashiageru", "～て差し上げる"],
                2: ["te-yaru", "～てやる"]
            }
            : {};
        return entry.usages.map((usage, index) => `
            <section class="te-aux-usage">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div>
                    <header class="te-aux-usage-heading">
                        <h4>${escapeHtml(usage.title)}</h4>
                        ${nestedFavorites[index]
                            ? `<div class="te-aux-usage-favorite">${statusMarkup(nestedFavorites[index][0], nestedFavorites[index][1])}</div>`
                            : ""}
                    </header>
                    <p class="te-aux-usage-copy">${usage.description}</p>
                    ${renderSystemExamples(usage.examples)}
                </div>
            </section>
        `).join("");
    }

    function renderDoubleBenefactiveTopic(entry, group, indexInGroup) {
        const content = entry.topicContent;
        const dialogue = content.dialogue.map((line, index) => {
            const escaped = escapeHtml(line);
            const highlighted = index === content.dialogue.length - 1
                ? escaped.replace("待ってあげてください", "<strong>待ってあげてください</strong>")
                : escaped;
            return `<p lang="ja">${index === 0 ? "<b>女：</b>" : ""}${highlighted}</p>`;
        }).join("");

        return `
            <article class="te-aux-entry te-aux-entry--topic" id="${escapeHtml(entry.id)}" data-te-aux-entry="${escapeHtml(entry.id)}">
                <header class="te-aux-entry-heading">
                    <span class="te-aux-entry-sequence">${group.number}-${String(indexInGroup + 1).padStart(2, "0")}</span>
                    <div>
                        <div class="te-aux-entry-title-line">
                            <h3 class="te-aux-entry-title">${escapeHtml(entry.title)}</h3>
                            <span class="te-aux-topic-label">专题</span>
                        </div>
                    </div>
                </header>

                <div class="te-aux-topic-content">
                    <div class="te-aux-topic-lead">
                        <p><strong>基本概念：</strong>${escapeHtml(content.concept)}</p>
                        <p><strong>一般形式：</strong>${escapeHtml(content.generalForm)}</p>
                    </div>

                    <figure class="te-aux-topic-scenario">
                        <img src="${escapeHtml(content.image)}" alt="女乘客请求公交车司机等待正在跑来的小孩" loading="lazy">
                        <figcaption class="te-aux-topic-dialogue">
                            ${dialogue}
                        </figcaption>
                    </figure>

                    <section class="te-aux-topic-section">
                        <h4>人物关系：</h4>
                        <dl class="te-aux-topic-people">
                            ${content.people.map((person) => `
                                <div>
                                    <dt>${escapeHtml(person[0])}：</dt>
                                    <dd>${escapeHtml(person[1])}</dd>
                                </div>
                            `).join("")}
                        </dl>
                    </section>

                    <section class="te-aux-topic-section">
                        <h4>动作关系：</h4>
                        <p>${escapeHtml(content.action).replace("说话人在请求听话人为第三方做某事", "<strong>说话人在请求听话人为第三方做某事</strong>")}</p>
                    </section>

                    <section class="te-aux-topic-section">
                        <h4>语言表达结构：</h4>
                        <p>${escapeHtml(content.structure).replace("待ってあげる", "<strong lang=\"ja\">待ってあげる</strong>").replace("待ってあげてください", "<strong lang=\"ja\">待ってあげてください</strong>")}</p>
                    </section>

                    <section class="te-aux-topic-section te-aux-topic-summary">
                        <h4>总结：</h4>
                        <p>${escapeHtml(content.summary).replace("Vてあげる（もらう）＋请求表达", "<strong>Vてあげる（もらう）＋请求表达</strong>")}</p>
                        <p>其表达形式有：</p>
                        <ol>
                            ${content.forms.map((form) => `
                                <li><b>${escapeHtml(form[0])}：</b><strong lang="ja">${escapeHtml(form[1])}</strong></li>
                            `).join("")}
                        </ol>
                    </section>

                    <section class="te-aux-topic-addon">
                        <span>02</span>
                        <div>
                            <p>${escapeHtml(content.requestIntro)
                                .replace("“请求表达”", "<strong>“请求表达”</strong>")
                                .replace("授受搭配疑问表达", "<strong>授受搭配疑问表达</strong>")
                                .replace("「てもらう」「てくれる」", "<strong lang=\"ja\">「てもらう」「てくれる」</strong>")}</p>
                            <p class="te-aux-topic-request-form" lang="ja">${escapeHtml(content.kureruRequests)}</p>
                            <p class="te-aux-topic-request-form" lang="ja">${escapeHtml(content.morauRequests)}</p>
                            <p><strong>${escapeHtml(content.specialRequests)}</strong></p>
                            <p class="te-aux-topic-caution">${escapeHtml(content.requestCaution)}</p>
                        </div>
                    </section>

                    <section class="te-aux-topic-addon">
                        <span>03</span>
                        <div>
                            <p>${escapeHtml(content.formalRequest)
                                .replace("「ご/お＋N/V R＋いただき/ください」", "<strong lang=\"ja\">「ご/お＋N/V R＋いただき/ください」</strong>")
                                .replace("“对对方所进行的行为”", "<strong>“对对方所进行的行为”</strong>")
                                .replace("“敬语”", "<strong>“敬语”</strong>")}</p>
                        </div>
                    </section>
                </div>
            </article>
        `;
    }

    function renderSystemEntry(entry, group, indexInGroup) {
        if (entry.id === "double-benefactive") {
            return renderDoubleBenefactiveTopic(entry, group, indexInGroup);
        }
        const isBenefactive = group.id === "benefactive";
        const isTopic = entry.kind === "topic";
        const overview = isBenefactive
            ? `
                <div class="te-aux-entry-overview te-aux-entry-overview--relation">
                    <div class="te-aux-overview-connection">
                        <small>句式关系</small>
                        ${renderConnection(entry, group)}
                    </div>
                    <div>
                        <small>${isTopic ? "整体判断" : "叙述视角"}</small>
                        <p>${escapeHtml(entry.role)}</p>
                    </div>
                    <div>
                        <small>${isTopic ? "构成原理" : "原本含义"}</small>
                        <p>${escapeHtml(entry.origin)}</p>
                    </div>
                    <div>
                        <small>${isTopic ? "常见结构" : "常见形式"}</small>
                        <p lang="ja">${escapeHtml(entry.forms)}</p>
                    </div>
                </div>
            `
            : `
                <div class="te-aux-entry-overview">
                    <div><small>接续</small><p lang="ja">${escapeHtml(entry.connection)}</p></div>
                    <div><small>原本含义</small><p>${escapeHtml(entry.origin)}</p></div>
                    <div><small>表达作用</small><p>${escapeHtml(entry.role)}</p></div>
                    <div><small>常见形式</small><p lang="ja">${escapeHtml(entry.forms)}</p></div>
                </div>
            `;
        return `
            <article class="te-aux-entry${isTopic ? " te-aux-entry--topic" : ""}" id="${escapeHtml(entry.id)}" data-te-aux-entry="${escapeHtml(entry.id)}">
                <header class="te-aux-entry-heading">
                    <span class="te-aux-entry-sequence">${group.number}-${String(indexInGroup + 1).padStart(2, "0")}</span>
                    <div>
                        <div class="te-aux-entry-title-line">
                            <h3 class="te-aux-entry-title"${isTopic ? "" : ` lang="ja"`}>${escapeHtml(entry.title)}</h3>
                            ${isTopic ? `<span class="te-aux-topic-label">专题</span>` : ""}
                            <span class="te-aux-entry-meaning">${escapeHtml(entry.meaning)}</span>
                        </div>
                        <p class="te-aux-entry-role">${escapeHtml(entry.role)}</p>
                    </div>
                    <div class="te-aux-entry-favorite">${statusMarkup(entry.id, entry.title)}</div>
                </header>

                ${overview}

                <h4 class="te-aux-use-title">具体用法</h4>
                <div class="te-aux-usage-list">
                    ${renderSystemUsages(entry)}
                </div>
                ${renderNote(entry.note)}
                ${renderContrast(entry.contrast)}
            </article>
        `;
    }

    function renderColloquialAppendix() {
        return `
            <section class="te-aux-system-group te-aux-colloquial-appendix" id="colloquial-contractions" aria-labelledby="colloquial-contractions-title">
                <header class="te-aux-group-heading">
                    <span>A1</span>
                    <div>
                        <small>附录</small>
                        <h2 id="colloquial-contractions-title">补助动词的口语缩略</h2>
                        <p>日常会话中，为了缩短发音，部分补助动词会形成固定的缩略形式。缩略后表达作用不变，但语气更加口语化。</p>
                    </div>
                </header>

                <div class="te-aux-colloquial-table-wrap" tabindex="0" aria-label="补助动词口语缩略对应表，可横向滚动">
                    <table class="te-aux-colloquial-table">
                        <thead>
                            <tr>
                                <th scope="col">作用分类</th>
                                <th scope="col">完整形式</th>
                                <th scope="col">口语缩略</th>
                                <th scope="col">对应例子</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${COLLOQUIAL_CONTRACTIONS.map((row) => `
                                <tr>
                                    <th scope="row">${escapeHtml(row[0])}</th>
                                    <td lang="ja">${escapeHtml(row[1])}</td>
                                    <td lang="ja"><strong>${escapeHtml(row[2])}</strong></td>
                                    <td lang="ja">${escapeHtml(row[3])}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>

                <aside class="te-aux-colloquial-note">
                    <b>使用提醒</b>
                    <p>这些形式主要用于日常会话、聊天消息及较随意的书写。正式文章、考试作文或需要保持郑重语气的场景，通常使用完整形式。</p>
                    <p>「～ちゃう／～じゃう」即使接「ます」形成「～ちゃいます／～じゃいます」，仍然带有明显的口语色彩。</p>
                </aside>
            </section>
        `;
    }

    function buildSystemSections() {
        const root = document.getElementById("teAuxSystemSections");
        if (!root) return;
        root.innerHTML = GROUPS.map((group) => `
            <section class="te-aux-system-group" id="group-${escapeHtml(group.id)}" aria-labelledby="group-${escapeHtml(group.id)}-title">
                <header class="te-aux-group-heading">
                    <span>${escapeHtml(group.number)}</span>
                    <div>
                        <small>功能分类</small>
                        <h2 id="group-${escapeHtml(group.id)}-title">${escapeHtml(group.label)}</h2>
                        <p>${escapeHtml(GROUP_INTROS[group.id] || "")}</p>
                    </div>
                </header>
                ${group.entries.map((entry, index) => renderSystemEntry(entry, group, index)).join("")}
            </section>
        `).join("") + renderColloquialAppendix();
    }

    function buildSystemIndex() {
        const root = document.getElementById("teAuxIndexList");
        if (!root) return;
        GROUPS.forEach((group) => {
            const groupLabel = document.createElement("p");
            groupLabel.className = "wc-index-group wc-index-group--major";
            groupLabel.textContent = `${group.number}  ${group.label}`;
            root.appendChild(groupLabel);

            group.entries.forEach((entry, index) => {
                const link = document.createElement("a");
                link.className = "wc-index-link wc-index-link--sub";
                link.href = `#${entry.id}`;
                link.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><b${entry.kind === "topic" ? "" : ` lang="ja"`}>${escapeHtml(entry.title)}</b>`;
                root.appendChild(link);
            });
        });

        const appendixLabel = document.createElement("p");
        appendixLabel.className = "wc-index-group wc-index-group--major";
        appendixLabel.textContent = "附录";
        root.appendChild(appendixLabel);

        const appendixLink = document.createElement("a");
        appendixLink.className = "wc-index-link wc-index-link--sub";
        appendixLink.href = "#colloquial-contractions";
        appendixLink.innerHTML = "<span>A1</span><b>口语缩略表</b>";
        root.appendChild(appendixLink);
    }

    function bindSystemScrollspy() {
        const links = Array.from(document.querySelectorAll('#teAuxIndexList a[href^="#"]'));
        const targets = links
            .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
            .filter(Boolean);
        if (!links.length || !targets.length) return;

        const sync = () => {
            const marker = window.scrollY + Math.min(240, window.innerHeight * 0.32);
            let active = targets[0];
            targets.forEach((target) => {
                if (target.offsetTop <= marker) active = target;
            });
            links.forEach((link) => {
                const current = decodeURIComponent(link.hash.slice(1)) === active.id;
                link.classList.toggle("is-active", current);
                if (current) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        };

        window.addEventListener("scroll", sync, { passive: true });
        window.addEventListener("resize", sync);
        sync();
    }

    function initialize() {
        buildSystemSections();
        buildSystemIndex();
        bindSystemScrollspy();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, { once: true });
    } else {
        initialize();
    }
}());
