(function () {
    "use strict";

    const groups = [
        { label: "基础", items: [{ key: "concept", number: "00", label: "基础概念" }] },
        { label: "传达与确认", items: [
            { key: "yo", number: "01", label: "よ" },
            { key: "ne", number: "02", label: "ね／ねえ" },
            { key: "yone", number: "03", label: "よね" },
            { key: "sa", number: "04", label: "さ" }
        ] },
        { label: "疑问与自问", items: [
            { key: "ka", number: "05", label: "か" },
            { key: "no", number: "06", label: "の" },
            { key: "kai_dai", number: "07", label: "かい／だい" },
            { key: "kana", number: "08", label: "かな" },
            { key: "kashira", number: "09", label: "かしら" },
            { key: "kke", number: "10", label: "っけ" }
        ] },
        { label: "感叹与主张", items: [
            { key: "naa", number: "11", label: "な／なあ" },
            { key: "zo", number: "12", label: "ぞ" },
            { key: "ze", number: "13", label: "ぜ" },
            { key: "wa", number: "14", label: "わ" },
            { key: "tomo", number: "15", label: "とも" }
        ] },
        { label: "理由与催促", items: [
            { key: "mono", number: "16", label: "もの／もん" },
            { key: "kara", number: "17", label: "から" },
            { key: "tteba", number: "18", label: "ってば" },
            { key: "ttara", number: "19", label: "ったら" }
        ] },
        { label: "禁止", items: [{ key: "na_prohibition", number: "20", label: "な" }] },
        { label: "整理", items: [
            { key: "comparison", number: "21", label: "语气对照" },
            { key: "register", number: "22", label: "使用场合" }
        ] }
    ];

    const data = {
        yo: entry("よ", "把信息明确传达给对方，或提醒对方注意说话人认为重要的内容", [
            usage("告知对方尚未掌握的信息", "说话人把自己掌握的信息交给对方，强调<strong class='usage-key'>“这一点请你知道”</strong>。", "句子＋よ；名词／な形容词的普通体通常使用「だよ」", "当双方的信息量不同时最自然。若对方已经知道，连续使用「よ」容易显得在纠正或压过对方。", [
                ["この店は日曜日も開いています<strong class='target-particle'>よ</strong>。", "这家店星期日也营业哦。"],
                ["田中さんなら、もう会場に着いています<strong class='target-particle'>よ</strong>。", "田中已经到会场了。"]
            ]),
            usage("加强提醒、请求或邀请", "把说话人的希望更直接地送到对方，常用于<strong class='usage-key'>提醒、催促、劝说或邀请</strong>。", "请求／邀请表达＋よ", "语气取决于场合。「〜ましょうよ」可表达热情邀请；「〜てくださいよ」在不满语境中也可能显得催促较强。", [
                ["一緒に昼ご飯を食べましょう<strong class='target-particle'>よ</strong>。", "一起吃午饭吧。"],
                ["大事なことですから、忘れないでください<strong class='target-particle'>よ</strong>。", "这很重要，请别忘了啊。"]
            ])
        ]),
        ne: entry("ね／ねえ", "与对方确认认识、邀请对方产生共鸣，也可表现说话人自己的感受", [
            usage("寻求确认或共同认识", "把当前判断作为双方可以共享的内容提出，期待对方表示<strong class='usage-key'>同意、确认或共鸣</strong>。", "句子＋ね", "「ね」不是单纯问事实，而是询问“我们是不是可以这样理解”。正式场合也可使用，但应避免在每句话后重复。", [
                ["今日はずいぶん寒いです<strong class='target-particle'>ね</strong>。", "今天真冷啊。"],
                ["集合は九時でした<strong class='target-particle'>ね</strong>。", "集合时间是九点，对吧。"]
            ]),
            usage("表现感叹或轻声招呼", "拉长为「ねえ」时，常用于<strong class='usage-key'>加强感叹、柔和地呼唤对方</strong>，或争取对方注意。", "句子＋ねえ；呼唤语＋ねえ", "「ねえ」的长音和语调会改变印象：柔和时表示感叹或招呼，反复使用时也可能带有催促。", [
                ["この景色、本当にきれいです<strong class='target-particle'>ねえ</strong>。", "这景色真美啊。"],
                ["<strong class='target-particle'>ねえ</strong>、少し相談してもいい？", "喂，我可以和你商量一下吗？"]
            ])
        ]),
        yone: entry("よね", "先表明自己的判断，再向对方确认该判断是否能够共享", [
            usage("带着判断寻求认同", "「よ」负责提出说话人的认识，「ね」负责寻求对方认同，整体表示<strong class='usage-key'>“我是这样认为的，你也同意吧”</strong>。", "句子＋よね", "比单独的「よ」更照顾对方反应，比单独的「ね」更能表现说话人已有明确判断。", [
                ["この道をまっすぐ行けば、駅に着きます<strong class='target-particle'>よね</strong>。", "沿这条路一直走就到车站，对吧。"],
                ["初めての発表は緊張します<strong class='target-particle'>よね</strong>。", "第一次发表都会紧张，对吧。"]
            ])
        ]),
        sa: entry("さ", "以轻松、随意的语气作出说明或断定", [
            usage("轻松地断定或安慰", "在关系亲近的会话中，把判断说得较为轻快，常带有<strong class='usage-key'>“没关系”“就是这样”</strong>的感觉。", "普通形／名词／な形容词词干＋さ", "属于随意口语，传统上常被描述为男性用语，但现实使用受年龄、地区和个人说话风格影响。正式场合通常不用。", [
                ["心配しなくても、きっとうまくいく<strong class='target-particle'>さ</strong>。", "不用担心，一定会顺利的。"],
                ["そんな日もある<strong class='target-particle'>さ</strong>。", "也会有那样的日子嘛。"]
            ])
        ]),
        ka: entry("か", "构成疑问，并可根据句型和语调表示邀请、请求、催促、理解、惊讶、决意或反问", [
            usage("询问事实或具体信息", "向对方提出问题，要求对方提供<strong class='usage-key'>事实、选择、意向或判断</strong>。", "丁寧体＋か；普通形＋か；疑问词＋句子＋か", "「ですか／ますか」是最中性的礼貌提问。名词和な形容词使用普通体疑问时通常去掉「だ」，如「学生か」「静かか」。普通体直接接「か」语气较直接，对关系不亲近的人可能显得生硬或像在质问。", [
                ["明日の会議に参加します<strong class='target-particle'>か</strong>。", "你参加明天的会议吗？"],
                ["どの資料を先に確認します<strong class='target-particle'>か</strong>。", "先确认哪份资料？"]
            ]),
            usage("提出邀请、建议或请求", "把希望对方参与或实施的行为写成疑问形式，使<strong class='usage-key'>邀请、建议或请求</strong>不以命令形式直接提出。", "动词ません＋か／意志形＋か／请求表达＋か", "「〜ませんか」常用于邀请；「〜ましょうか」常用于主动提出帮助；「〜ていただけませんか」用于礼貌请求。虽然都以「か」结尾，实际目的并不是单纯询问事实。", [
                ["休憩時間に一緒に昼ご飯を食べません<strong class='target-particle'>か</strong>。", "休息时间要不要一起吃午饭？"],
                ["この資料をもう一度確認していただけません<strong class='target-particle'>か</strong>。", "能否请您再确认一次这份资料？"]
            ]),
            usage("以否定疑问进行催促或命令", "使用「〜ないか」要求对方采取行动，语气相当于<strong class='usage-key'>“还不……吗”“快……”</strong>。", "动词ない形＋か", "同样的形式也可表示较随意的邀请，如「一緒に行かないか」。当句中出现「早く」「いいかげん」等词，或使用强烈语调时，通常表示催促甚至命令。", [
                ["いつまで話しているんだ。早く始めない<strong class='target-particle'>か</strong>。", "还要说到什么时候？还不快开始。"],
                ["もう遅いから、そろそろ帰らない<strong class='target-particle'>か</strong>。", "已经很晚了，差不多该回去了吧。"]
            ]),
            usage("接受新信息或表现惊讶", "在听到、发现或重新注意到某个事实时，表示说话人<strong class='usage-key'>已经理解、刚刚察觉或感到意外</strong>。", "普通形＋か；そうか／そうですか", "此时通常使用下降语调，不要求对方回答。「そうですか」若用升调，可以是真正的确认问题；用下降调时则常表示“原来如此”。", [
                ["そうです<strong class='target-particle'>か</strong>。では、来週また連絡します。", "原来如此。那么我下周再联系。"],
                ["もうこんな時間<strong class='target-particle'>か</strong>。話に夢中で気づかなかった。", "已经这个时间了啊。我聊得太投入，没注意到。"]
            ]),
            usage("自问并作出决定", "说话人把问题说给自己听，并借此确认接下来要采取的行动，表示<strong class='usage-key'>思考后的决定或自我催促</strong>。", "动词辞书形＋か", "这种「か」主要面向说话人自己，并不真正要求听话人回答。常与「さあ」「そろそろ」「では」等表示行动转换的词一起使用。", [
                ["少し疲れたな。そろそろ帰る<strong class='target-particle'>か</strong>。", "有点累了。差不多回去吧。"],
                ["失敗したけれど、もう一度やってみる<strong class='target-particle'>か</strong>。", "虽然失败了，不过再试一次吧。"]
            ]),
            usage("表示反问、反驳或强烈否定", "形式上是疑问，实际上说话人已经持有否定判断，用来表示<strong class='usage-key'>“怎么可能……”“绝不会……”</strong>。", "疑问词＋句子＋か／可能表达＋か／普通形＋か", "反问句不期待回答。普通体配合强烈语调时，可表现反驳、拒绝或责问，因此对听话人有较强冲击。", [
                ["そんな説明で、誰が納得する<strong class='target-particle'>か</strong>。", "那种解释，谁会接受呢？"],
                ["大切な仲間を一人で行かせられる<strong class='target-particle'>か</strong>。", "我怎么可能让重要的伙伴一个人去呢？"]
            ])
        ]),
        no: entry("の", "以说明的语气提问，或柔和地说明当前情况", [
            usage("要求对方说明情况", "在普通体会话中询问原因、经过或当前状态，带有<strong class='usage-key'>想听对方解释</strong>的语气。", "普通形＋の；名词／な形容词＋なの", "常见于亲近关系。礼貌表达通常使用「んですか／のですか」。只用升调即可形成疑问。", [
                ["どうしてそんなに急いでいる<strong class='target-particle'>の</strong>？", "为什么那么着急？"],
                ["明日は学校が休みな<strong class='target-particle'>の</strong>？", "明天学校放假吗？"]
            ]),
            usage("柔和地作出说明", "把前面的事实作为需要说明的背景提出，使断定带有<strong class='usage-key'>解释、告知或情绪色彩</strong>。", "普通形＋の；名词／な形容词＋なの", "句末陈述的「の」在传统教材中常被标为女性或儿童用语；现代实际使用仍受语调、地区和人物风格影响，不能作为绝对性别规则。", [
                ["今日は用事があるから、先に帰る<strong class='target-particle'>の</strong>。", "因为今天有事，所以我要先回去。"],
                ["これは私がずっと探していた本な<strong class='target-particle'>の</strong>。", "这就是我一直在找的书。"]
            ])
        ]),
        kai_dai: entry("かい／だい", "在亲近关系中以带有说话风格的方式提问", [
            usage("用「かい」询问是否", "主要用于可以用“是／不是”回答的问题，表现<strong class='usage-key'>直接而随意的询问</strong>。", "普通形＋かい；名词／な形容词常用「〜かい」", "传统上常与男性、年长者或人物台词联系，现代日常使用较有角色感，不宜机械模仿到正式会话。", [
                ["もう準備はできた<strong class='target-particle'>かい</strong>？", "已经准备好了吗？"],
                ["少し休んでいく<strong class='target-particle'>かい</strong>？", "要不要休息一下再走？"]
            ]),
            usage("用「だい」询问具体内容", "常与疑问词一起使用，询问<strong class='usage-key'>人物、事物、原因或方式</strong>等具体信息。", "疑问词＋普通形＋んだい／疑问词＋だい", "「何だい」「どうしたんだい」等固定说法较常见，也带有明显的随意和人物语气。", [
                ["今日はどこへ行くん<strong class='target-particle'>だい</strong>？", "今天要去哪里？"],
                ["さっきから何を探しているん<strong class='target-particle'>だい</strong>？", "你从刚才起一直在找什么？"]
            ])
        ]),
        kana: entry("かな", "表现说话人自己的疑问、犹豫或不确定判断", [
            usage("自问或表示不确定", "把疑问保留在说话人一方，相当于<strong class='usage-key'>“不知道是不是……”</strong>，通常不强求对方立即回答。", "普通形＋かな；名词／な形容词＋かな／なのかな", "可用于独白，也可让对方听见而形成间接询问。拉长为「かなあ」时，犹豫或感叹更明显。", [
                ["明日は雨が降る<strong class='target-particle'>かな</strong>。", "明天会下雨吗。"],
                ["この説明でみんなに伝わる<strong class='target-particle'>かなあ</strong>。", "这样说明大家能听懂吗。"]
            ]),
            usage("柔和地提出请求或希望", "把请求说成自己的疑问，以减轻直接命令感，表示<strong class='usage-key'>希望对方能够这样做</strong>。", "〜てくれるかな／〜てもらえるかな", "虽然形式柔和，但仍是随意表达；对上级或陌生人应改用更正式的请求形式。", [
                ["この資料、今日中に確認してくれる<strong class='target-particle'>かな</strong>。", "这份资料能在今天之内确认一下吗？"],
                ["少し静かにしてもらえる<strong class='target-particle'>かな</strong>。", "可以稍微安静一点吗？"]
            ])
        ]),
        kashira: entry("かしら", "以较柔和的语气表现自问、不确定或愿望", [
            usage("柔和地自问", "表达说话人不知道结果、正在思考或心中抱有期待，接近<strong class='usage-key'>“会不会……呢”</strong>。", "普通形＋かしら；名词／な形容词＋かしら", "传统上多作为成年女性用语讲解，现代使用带有明显的说话风格；男性在自言自语时也可能使用。正式中性表达可用「でしょうか」。", [
                ["この服、少し派手<strong class='target-particle'>かしら</strong>。", "这件衣服是不是有点花哨呢。"],
                ["みんな無事に着いた<strong class='target-particle'>かしら</strong>。", "大家是不是都平安到了呢。"]
            ])
        ]),
        kke: entry("っけ", "回想一时忘记的事实，并向自己或对方确认记忆", [
            usage("确认记忆中的信息", "说话人知道自己以前接触过该信息，但眼下记不清，因此重新确认<strong class='usage-key'>日期、名称、地点或过去事实</strong>。", "普通形＋っけ；名词／な形容词＋だっけ；丁寧体＋っけ", "属于口语。它不是第一次询问信息，而是表现“我记得听过，只是现在想不起来”。", [
                ["会議は何時からだ<strong class='target-particle'>っけ</strong>？", "会议是几点开始来着？"],
                ["この店、前にも来ました<strong class='target-particle'>っけ</strong>？", "这家店我们以前也来过吧？"]
            ])
        ]),
        naa: entry("な／なあ", "表现说话人的感叹、自我确认或对当前情况的感受", [
            usage("自言自语式的感叹", "把眼前或心中的感受自然说出来，主要面向说话人自己，不一定要求对方回应。", "普通形＋な／なあ；名词／な形容词＋だな／だなあ", "拉长的「なあ」感情色彩更强。此处的「な」和“动词辞书形＋な”的禁止用法完全不同。", [
                ["この町もずいぶん変わった<strong class='target-particle'>なあ</strong>。", "这座城市也变化很大啊。"],
                ["もう春なんだ<strong class='target-particle'>な</strong>。", "已经是春天了啊。"]
            ]),
            usage("轻松地寻求共鸣", "面对听话人说出感受，并隐含地期待对方接受或共享，近似<strong class='usage-key'>“是吧”“可真……”</strong>。", "句子＋な", "传统上常被说明为男性化口语，但现代使用仍受地区、年龄和个人风格影响。中性表达可用「ね」。", [
                ["今日は本当に暑い<strong class='target-particle'>な</strong>。", "今天可真热啊。"],
                ["あの人の話は面白い<strong class='target-particle'>な</strong>。", "那个人说话真有意思啊。"]
            ])
        ]),
        zo: entry("ぞ", "以很强的语气作出断定、提醒、警告或自我鼓舞", [
            usage("强烈声明或提醒", "明确提高语势，表示说话人要让自己或对方<strong class='usage-key'>认真注意接下来的行动或判断</strong>。", "普通形＋ぞ；名词／な形容词＋だぞ", "语气粗犷，传统上有明显男性用语和人物台词色彩。正式场合及关系不亲近时应避免。", [
                ["もうすぐ電車が出る<strong class='target-particle'>ぞ</strong>。", "电车马上要开了！"],
                ["今度こそ最後までやり抜く<strong class='target-particle'>ぞ</strong>。", "这次一定要坚持到底！"]
            ])
        ]),
        ze: entry("ぜ", "以强烈而随意的语气作出主张或邀请", [
            usage("强调主张或号召对方", "比普通陈述更有气势，常用于同伴间的<strong class='usage-key'>断定、邀请或鼓动</strong>。", "普通形＋ぜ；名词／な形容词＋だぜ", "同样带有粗犷、男性化或人物台词色彩。与「ぞ」相比，「ぜ」常更面向听话人，带有拉对方一起行动的感觉。", [
                ["今日は思い切り楽しもう<strong class='target-particle'>ぜ</strong>。", "今天痛痛快快地玩吧！"],
                ["この勝負、まだ終わっていない<strong class='target-particle'>ぜ</strong>。", "这场较量还没结束呢！"]
            ])
        ]),
        wa: entry("わ", "在句末附加感叹、轻柔断定或地区性的语气", [
            usage("柔和地表达判断或感情", "使句末带上情绪色彩，可表现<strong class='usage-key'>感叹、安心、决意或轻柔的断定</strong>。", "普通形＋わ；名词／な形容词＋だわ", "传统标准语中升调「わ」常被视为女性用语；降调「わ」也见于男性和方言。现实差异较大，必须结合语调、地区和人物风格理解。", [
                ["この花、本当にきれいだ<strong class='target-particle'>わ</strong>。", "这花真漂亮啊。"],
                ["それなら、私も一緒に行く<strong class='target-particle'>わ</strong>。", "那样的话，我也一起去。"]
            ])
        ]),
        tomo: entry("とも", "强烈肯定对方的话，表示答案当然如此", [
            usage("表示当然的肯定", "对疑问或判断作出毫不犹豫的肯定，相当于<strong class='usage-key'>“当然”“当然是这样”</strong>。", "普通形＋とも；名词／な形容词＋だとも", "现代会话中带有郑重、老派或人物化色彩，常见于「もちろんだとも」「そうだとも」等固定回答。", [
                ["もちろん、君のことを信じている<strong class='target-particle'>とも</strong>。", "当然，我相信你。"],
                ["必要なら、何度でも説明する<strong class='target-particle'>とも</strong>。", "有需要的话，我当然会说明多少次都行。"]
            ])
        ]),
        mono: entry("もの／もん", "把前项作为理由说出，常带有辩解、撒娇或不满", [
            usage("说明理由或为自己辩解", "在句末补充自己采取某种态度的理由，含有<strong class='usage-key'>“因为事实就是这样”</strong>的语气。", "普通形＋もの／もん；名词／な形容词＋だもの／だもん", "「もの」相对完整，「もん」更口语，常带儿童式、亲昵或撒娇的感觉。成年人也会在随意会话中使用。", [
                ["今日は行きたくない。少し疲れているんだ<strong class='target-particle'>もの</strong>。", "今天不想去，因为我有点累了嘛。"],
                ["知らなかったんだ<strong class='target-particle'>もん</strong>。仕方ないでしょう。", "我又不知道嘛，也没办法吧。"]
            ])
        ]),
        kara: entry("から", "把理由留在句末，让听话人根据语境理解省略的结论或要求", [
            usage("在句末补充理由", "先说出结论或当前态度，再用句末的「から」补充其<strong class='usage-key'>原因或判断依据</strong>。", "普通形＋から；名词／な形容词＋だから；丁寧体＋から", "这种「から」原本用于连接理由和后项。出现在句末时，后项已经在前文出现，或可由语境推知，因此不再明说。", [
                ["今日は先に帰ります。明日も朝が早いです<strong class='target-particle'>から</strong>。", "我今天先回去，因为明天早上也要早起。"],
                ["この薬は食後に飲んでください。胃に負担がかかります<strong class='target-particle'>から</strong>。", "这种药请饭后服用，因为会给胃造成负担。"]
            ]),
            usage("表示强烈的主张或决心", "用于句末，强调说话人的<strong class='usage-key'>主张、决心或态度</strong>。根据具体语境，也可以向对方传达安慰、关照或警告。", "句子＋から（ね）", "「から」本来表示原因或理由。用于句末时，作为理由之后本应出现的结论不再明说，而由听话人根据语境理解。「いいから」常用于表示<strong class='usage-key'>当前事情已经足够、不必继续</strong>，并据此制止对方的解释或催促对方行动。", [
                ["心配しなくていい。私が最後まで責任を持つ<strong class='target-particle'>から</strong>。", "不用担心，我会负责到底的。"],
                ["もういい<strong class='target-particle'>から</strong>。これ以上、説明しなくてもいいよ。", "行了，不用再解释了。"]
            ])
        ]),
        tteba: entry("ってば", "重复已经说过却未被理解的内容，带有催促或不耐烦", [
            usage("强调反复说过的内容", "表示自己已经说过或正在呼唤，但对方没有听进去，因此再次强调<strong class='usage-key'>“我都说了……”</strong>。", "名词／句子＋ってば", "常用于亲近关系，容易带抱怨或急躁。对不熟悉的人使用可能显得无礼。", [
                ["違う<strong class='target-particle'>ってば</strong>。私が言ったのは明日のことだよ。", "都说不是了。我说的是明天的事。"],
                ["お母さん<strong class='target-particle'>ってば</strong>、ちょっと待ってよ。", "妈妈，等一下嘛。"]
            ])
        ]),
        ttara: entry("ったら", "把人或事物作为抱怨、惊讶或无奈的对象提出", [
            usage("带着情绪提出话题", "提起某人或某事，并对其表现<strong class='usage-key'>责怪、无奈、惊讶或亲昵的感叹</strong>。", "名词＋ったら；句子＋ったら", "常可理解为口语化的「といったら」。它与表示条件的「たら」不同，判断时要看前项是否只是被拿来评论的话题。", [
                ["弟<strong class='target-particle'>ったら</strong>、また部屋を散らかしている。", "弟弟真是的，又把房间弄乱了。"],
                ["もう、あなた<strong class='target-particle'>ったら</strong>、冗談ばかり言って。", "真是的，你净开玩笑。"]
            ])
        ]),
        na_prohibition: entry("な", "直接禁止对方实施某个动作", [
            usage("表示强烈禁止", "要求听话人不要做前项动作，相当于直接说<strong class='usage-key'>“不许……”</strong>。", "动词辞书形＋な", "语气很强，常见于警告、规定、紧急制止或上对下命令。日常礼貌表达应改用「〜ないでください」。不要与感叹的「な／なあ」混淆。", [
                ["危ないから、ここに入る<strong class='target-particle'>な</strong>。", "危险，不许进这里。"],
                ["大事な書類に触る<strong class='target-particle'>な</strong>。", "不要碰重要文件。"]
            ])
        ])
    };

    function entry(label, desc, usages) { return { label, desc, usages }; }
    function usage(title, definition, connection, note, examples) {
        return { title, definition, connection, note, examples: examples.map(([text, translation]) => ({ text, translation })) };
    }

    function renderIndex() {
        const root = document.getElementById("final-index-list");
        root.innerHTML = groups.map((group) => `<section class="case-index-group"><p class="case-index-group-label">${group.label}</p>${group.items.map((item) => `<button type="button" class="case-index-button${item.key === "concept" ? " is-active" : ""}" data-section="${item.key}"><span class="case-index-number">${item.number}</span><span${data[item.key] ? " lang='ja'" : ""}>${item.label}</span></button>`).join("")}</section>`).join("");
    }

    function renderExamples(examples) {
        return examples.map((example, index) => `<div class="${index ? "particle-example-secondary" : "particle-example-primary"}"><p class="particle-example-label">例句 ${index + 1}</p><p class="particle-example particle-example-japanese" lang="ja">${example.text}</p><p class="particle-example-translation">${example.translation}</p></div>`).join("");
    }

    function renderUsage(item, index) {
        return `<section class="particle-usage"><header class="particle-usage-header"><span class="particle-usage-number">${String(index + 1).padStart(2, "0")}</span><div><p class="particle-usage-kicker">用法</p><h3 class="particle-usage-title">${item.title}</h3></div></header><div class="particle-usage-body"><div class="particle-usage-guide"><div class="particle-guide-row"><span class="particle-guide-label">作用</span><p>${item.definition}</p></div><div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--connection">接续</span><p><strong>${item.connection}</strong></p></div><div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--judgment">说明</span><p>${item.note}</p></div></div><div class="particle-examples">${renderExamples(item.examples)}</div></div></section>`;
    }

    function renderParticle(key) {
        const item = data[key];
        const panel = document.getElementById("particle-detail");
        panel.innerHTML = `<header class="particle-heading"><strong lang="ja">${item.label}</strong><div><span>FINAL PARTICLE</span><p>${item.desc}</p></div></header><div class="particle-usages">${item.usages.map(renderUsage).join("")}</div>`;
    }

    function renderComparison() {
        document.getElementById("comparison-panel").innerHTML = `<p class="case-eyebrow">TONE COMPARISON</p><h2 class="case-title">相近终助词的语气差异</h2><p class="case-lead">选择终助词时，先确认说话人是在<strong class="case-emphasis">传递信息、寻求认同，还是表现自己的疑问和感受</strong>。</p><div class="final-comparison-grid">
            ${comparison("信息方向", "よ", "说话人把信息明确交给对方。", "ね", "说话人把判断拿来与对方确认或共享。")}
            ${comparison("疑问对象", "か", "直接向对方提问，通常期待回答。", "かな", "主要是说话人自己不确定，不一定要求回答。")}
            ${comparison("说明语气", "の", "带解释背景的提问或柔和说明。", "もの／もん", "把前项当作理由，常带辩解或撒娇。")}
            ${comparison("句末理由", "から", "提出较明确的原因，并把结论、请求或反应交给语境补足。", "もの／もん", "从说话人立场说明理由，较容易带辩解、不满或撒娇语气。")}
            ${comparison("强势主张", "ぞ", "强调警告、决心或强烈提醒。", "ぜ", "强调主张、号召或同伴式邀请。")}
            ${comparison("两个「な」", "な／なあ", "表达感叹或自我确认，接在完整叙述后。", "动词辞书形＋な", "表示强烈禁止，要求对方不要做该动作。")}
            ${comparison("记忆与自问", "っけ", "回想自己本来知道却一时忘记的事实。", "かしら", "柔和地表达当前的不确定、担心或期待。")}
        </div>`;
    }

    function comparison(label, formA, textA, formB, textB) {
        return `<section class="final-comparison-row"><strong>${label}</strong><div><h3 lang="ja">${formA}</h3><p>${textA}</p></div><div><h3 lang="ja">${formB}</h3><p>${textB}</p></div></section>`;
    }

    function renderRegister() {
        document.getElementById("register-panel").innerHTML = `<p class="case-eyebrow">REGISTER & INTONATION</p><h2 class="case-title">终助词的使用场合</h2><p class="case-lead">终助词直接表现说话人的态度，因此比一般词汇更容易受到<strong class="case-emphasis">关系、场合、语调、地区和人物风格</strong>的影响。</p>
            <section class="final-register-section"><h3>正式场合优先使用中性形式</h3><p>礼貌会话中，以「ですか／ますか」「ですよ」「ですね」「ですよね」最为稳妥。与上级、顾客或陌生人交流时，不宜直接照搬「ぞ・ぜ・かい・だい・ってば」等强烈口语形式。</p></section>
            <section class="final-register-section"><h3>“男性用语／女性用语”不是绝对规则</h3><p>教材常把「ぞ・ぜ・かい・だい」标为男性化，把升调「わ・かしら・句末の」标为女性化。这些说明反映传统标准语倾向，但现代使用还会受到<strong class="case-emphasis">年龄、地区、角色塑造和个人说话方式</strong>影响。学习时应理解语气，不要只按性别机械套用。</p></section>
            <section class="final-register-section"><h3>语调会改变句末形式的作用</h3><ul><li>升调常使「か・の・ね」更明显地要求对方回应。</li><li>降调常使「ね・な・わ」更接近自我确认、感叹或断定。</li><li>拖长为「ねえ・なあ・かなあ」时，感情、犹豫或呼唤感通常更强。</li></ul></section>
            <section class="final-register-section"><h3>终助词可以按固定顺序组合</h3><p>常见组合包括「よね」「のよ」「のね」「わよ」「かなあ」等。组合后的作用来自各成分的叠加，例如「のよ」先作解释，再用「よ」把说明传达给对方；「よね」先提出判断，再寻求认同。</p></section>
            <section class="final-register-section"><h3>句末的「けど・が・のに」另作理解</h3><p>「ちょっとお願いがあるんですけど」「早く言ってくれればよかったのに」等句子常把后续内容省略，因而具有委婉、遗憾等<strong class="case-emphasis">终助词式作用</strong>。它们本来属于连接前后内容的形式，不作为本页的核心终助词单列。</p></section>`;
    }

    function setPanel(id) {
        document.querySelectorAll(".case-panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === id));
    }

    function setActive(key) {
        document.querySelectorAll(".case-index-button").forEach((button) => {
            const active = button.dataset.section === key;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
        });
        document.querySelectorAll(".case-tab").forEach((tab) => {
            const active = tab.dataset.view === (key === "comparison" ? "comparison" : "concept");
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
        });
    }

    function show(key, push = true) {
        if (key === "concept") setPanel("concept-panel");
        else if (key === "comparison") { renderComparison(); setPanel("comparison-panel"); }
        else if (key === "register") { renderRegister(); setPanel("register-panel"); }
        else if (data[key]) { renderParticle(key); setPanel("particle-detail"); }
        else { key = "concept"; setPanel("concept-panel"); }
        setActive(key);
        const url = `${location.pathname}${location.search}#${encodeURIComponent(key)}`;
        history[push ? "pushState" : "replaceState"]({}, "", url);
        window.scrollTo({ top: 0, behavior: push ? "smooth" : "auto" });
    }

    function bindToggle() {
        const layout = document.querySelector(".case-study-layout");
        const toggle = document.getElementById("final-index-toggle");
        toggle.addEventListener("click", () => {
            const collapsed = layout.classList.toggle("is-index-collapsed");
            toggle.setAttribute("aria-expanded", String(!collapsed));
            toggle.setAttribute("aria-label", collapsed ? "向右展开学习目录" : "向左收起学习目录");
            toggle.querySelector(".adverbial-index-toggle-label").textContent = collapsed ? "展开" : "收起";
            toggle.querySelector(".adverbial-index-toggle-icon").textContent = collapsed ? "→" : "←";
        });
    }

    renderIndex();
    bindToggle();
    document.getElementById("final-index-list").addEventListener("click", (event) => {
        const button = event.target.closest("[data-section]");
        if (button) show(button.dataset.section);
    });
    document.querySelectorAll(".case-tab").forEach((tab) => tab.addEventListener("click", () => show(tab.dataset.view === "comparison" ? "comparison" : "concept")));
    window.addEventListener("popstate", () => show(decodeURIComponent(location.hash.slice(1) || "concept"), false));

    if (window.bindHierarchicalBack) {
        window.bindHierarchicalBack({ selector: ".header-back-control", fallback: "particle-concept.html" });
    }
    show(decodeURIComponent(location.hash.slice(1) || "concept"), false);
}());
