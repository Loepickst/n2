window.sortQuestionBanks = window.sortQuestionBanks || {};

window.sortQuestionBanks.N2 = [
    // =========================== 2010年 ===========================
    // ---------------- 2010年7月 ----------------
    {
        id: "n2_1007_1",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 1",
        prefix: "A「<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>、どこまで<ruby>進<rt>すす</rt></ruby>んだ？」<br>B「3<ruby>課<rt>か</rt></ruby>の<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>を",
        suffix: "<ruby>終<rt>お</rt></ruby>わったよ。」",
        options: [
            { id: "1", text: "で" },
            { id: "2", text: "<ruby>解<rt>と</rt></ruby>いた" },
            { id: "3", text: "ところ" },
            { id: "4", text: "まで" }
        ],
        correctOrder: ["2", "3", "4", "1"],
        starIndex: 2, 
        explanation: `
            <p><strong class="text-textMain">第一步：寻找动宾搭配。</strong>前面的宾语是「練習問題を」（练习题），需要接动词。选项中只有动词 2「解いた」（解开/做完）合适。</p>
            <p><strong class="text-textMain">第二步：寻找形式名词。</strong>动词「解いた」可以直接修饰形式名词 3「ところ」，在这里表示“做完题的这个阶段/进度”。</p>
            <p><strong class="text-textMain">第三步：寻找范围与动作的终点。</strong>A问的是「どこまで」（进展到哪里），所以B用 4「まで」回应。最后用格助词 1「で」表示动作（終わった）发生的基准点，合起来就是「解いたところまでで終わった」。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>A“上周的课进展到哪里了？” B“刚好讲到把第3课的语法练习题做完那里就下课了。”
            </p>
        `
    },
    {
        id: "n2_1007_2",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 2",
        prefix: "ひとくちに",
        suffix: "<ruby>材料<rt>ざいりょう</rt></ruby>はさまざまだ。",
        options: [
            { id: "1", text: "それぞれの<ruby>店<rt>みせ</rt></ruby>" },
            { id: "2", text: "といっても" },
            { id: "3", text: "によって" },
            { id: "4", text: "カレーライス" }
        ],
        correctOrder: ["4", "2", "1", "3"],
        starIndex: 1,
        explanation: `
            <p><strong class="text-textMain">第一步：寻找固定句型。</strong>副词「ひとくちに」可以和「～といっても」搭配，表示“虽说统称为...”。中间需要加名词事物，因此 4「カレーライス」接 2「といっても」，构成「ひとくちにカレーライスといっても」。</p>
            <p><strong class="text-textMain">第二步：寻找因果/变化关系。</strong>句尾是「材料はさまざまだ」（材料各不相同），是什么导致不同？必然是“根据...的不同”，对应选项 3「によって」。</p>
            <p><strong class="text-textMain">第三步：确定前接词。</strong>选项中能接在「によって」前面的只有名词 1「それぞれの店」，构成“根据每家店的不同”。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>虽说统称为咖喱饭，但根据每家店的不同，所用的食材也是多种多样的。
            </p>
        `
    },
    {
        id: "n2_1007_3",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 3",
        prefix: "<ruby>田中<rt>たなか</rt></ruby>さんはいつも",
        suffix: "<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何<rt>なに</rt></ruby>もしない。",
        options: [
            { id: "1", text: "<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>う" },
            { id: "2", text: "ばかりで" },
            { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>の" },
            { id: "4", text: "やることに" }
        ],
        correctOrder: ["3", "4", "1", "2"],
        starIndex: 2,
        explanation: `
            <p><strong class="text-textMain">第一步：寻找修饰关系。</strong>3「人の」（别人的）作为定语需要修饰名词，只能接 4「やることに」（做的事情上）。</p>
            <p><strong class="text-textMain">第二步：寻找动作搭配。</strong>对“别人做的事情”能做出什么动作？选项中只有 1「文句を言う」（抱怨/说闲话）合适，即对别人的事指手画脚。</p>
            <p><strong class="text-textMain">第三步：寻找转折逻辑。</strong>后半句是“自己却什么都不做”，所以前面应该表达“光是/净是...”，这正是句型 2「ばかりで」的用法，用来连接前后形成对比转折。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>田中总是光对别人做的事情指手画脚（抱怨），自己却什么都不干。
            </p>
        `
    },
    {
        id: "n2_1007_4",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 4",
        prefix: "ジョン「この『りかい』という<ruby>言葉<rt>ことば</rt></ruby>はどういう<ruby>意味<rt>いみ</rt></ruby>ですか。」<br>アリ　「ああ、<ruby>確<rt>たし</rt></ruby>か『わかる』",
        suffix: "んですけど。」",
        options: [
            { id: "1", text: "<ruby>意味<rt>いみ</rt></ruby>だった" },
            { id: "2", text: "という" },
            { id: "3", text: "ような" },
            { id: "4", text: "と<ruby>思<rt>おも</rt></ruby>う" }
        ],
        correctOrder: ["2", "3", "1", "4"],
        starIndex: 1,
        explanation: `
            <p><strong class="text-textMain">第一步：寻找内容指代。</strong>『わかる』（懂）是一个具体的意思内容，需要用 2「という」引出来进行解释，构成“叫做‘懂’的...”。</p>
            <p><strong class="text-textMain">第二步：寻找连体修饰。</strong>「という」后面接 3「ような」表示“像...一样的”，再去修饰名词 1「意味だった」，构成“大概是‘懂’这类的意思”。</p>
            <p><strong class="text-textMain">第三步：确定句尾语气。</strong>前面都是客观的内容推测，句尾需要表达说话人的主观看法，即接 4「と思う」（我想是/我认为是），最后加上后缀「んですけど」来软化语气，显得不那么绝对。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>约翰：“这个‘りかい’（理解）一词是什么意思呢？” 阿里：“啊，我记得大概是‘懂/明白’这类意思吧。”
            </p>
        `
    },
    {
        id: "n2_1007_5",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 5",
        prefix: "<ruby>毎年<rt>まいとし</rt></ruby>、<ruby>合格者<rt>ごうかくしゃ</rt></ruby>の80パーセントが",
        suffix: "この<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>するのは<ruby>簡単<rt>かんたん</rt></ruby>ではないだろう。",
        options: [
            { id: "1", text: "<ruby>実務経験者<rt>じつむけいけんしゃ</rt></ruby>という" },
            { id: "2", text: "わたしが" },
            { id: "3", text: "ことからすると" },
            { id: "4", text: "<ruby>未経験者<rt>みけいけんしゃ</rt></ruby>の" }
        ],
        correctOrder: ["1", "3", "4", "2"],
        starIndex: 2,
        explanation: `
            <p><strong class="text-textMain">第一步：寻找判断依据句型。</strong>「～からすると」表示“从...来看/判断”，前面需要接名词化的「こと」。因此 1「実務経験者という」直接修饰 3「ことからすると」，表示“从80%都是有实务经验的人这一点来看”。</p>
            <p><strong class="text-textMain">第二步：寻找后半句的主语。</strong>后半句“要合格大概不简单”需要一个执行动作的主语。根据上下文，显然是指缺乏经验的“我”，即选项 2「わたしが」。</p>
            <p><strong class="text-textMain">第三步：完善主语的修饰语。</strong>4「未経験者の」（没有经验的）正好作为定语修饰 2「わたしが」，与前半句的“有实务经验者”形成强烈对比。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>从每年合格者中80%都是有实务经验的人这一点来看，作为没有经验的我，想要通过这个考试大概没那么简单吧。
            </p>
        `
    },
    // ---------------- 2010年12月 ----------------
            {
                id: "n2_1012_1",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 1",
                prefix: "(テレビドラマを<ruby>見<rt>み</rt></ruby>ながら)<br><ruby>弟<rt>おとうと</rt></ruby>「このドラマの<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>う？」<br><ruby>兄<rt>あに</rt></ruby>「",
                suffix: "と<ruby>思<rt>おも</rt></ruby>うんだけど、ほかの<ruby>人<rt>ひと</rt></ruby>もみんな<ruby>怪<rt>あや</rt></ruby>しいんだよなあ。」",
                options: [
                    { id: "1", text: "<ruby>中<rt>なか</rt></ruby>の" },
                    { id: "2", text: "じゃないか" },
                    { id: "3", text: "<ruby>誰<rt>だれ</rt></ruby>か" },
                    { id: "4", text: "<ruby>三<rt>さん</rt></ruby><ruby>姉<rt>し</rt></ruby><ruby>妹<rt>まい</rt></ruby>の" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找连体修饰关系。</strong>选项中 4「三姉妹の」和 1「中の」都带有「の」，需要接名词。而选项中具有名词性质的词是 3「誰か」。</p>
                    <p><strong class="text-textMain">第二步：确立修饰层级（排他法）。</strong>如果让 4 直接修饰 3 变成「三姉妹の誰か」（三姐妹里的某人），语法上虽然说得通，但剩下的 1「中の」就会无处安放（无法说成“中の三姉妹の誰か”）。因此，正确的逻辑是从大范围限定到小范围：4「三姉妹の」先接 1「中の」，然后再去修饰 3「誰か」，构成「三姉妹の中の誰か」（三姐妹之中的某个人）。</p>
                    <p><strong class="text-textMain">第三步：寻找句尾呼应。</strong>题干后面是「と思うんだけど」（我觉得...），前面可以接表示推测或反问的表达，即 2「じゃないか」（难道不是...吗）。整体连起来就是「三姉妹の中の誰かじゃないか」。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>(看电视剧时) <br>弟弟：“你觉得这部剧的犯人是谁？” <br>哥哥：“我觉得大概是三姐妹里的某个人吧，不过其他人看着也都很可疑啊。”
                    </p>
                `
            },
            {
                id: "n2_1012_2",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 2",
                prefix: "<ruby>新<rt>あたら</rt></ruby>しいパソコンが<ruby>欲<rt>ほ</rt></ruby>しいが、",
                suffix: "、しばらく<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>を<ruby>見<rt>み</rt></ruby>ようと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>悔<rt>くや</rt></ruby>しいから" },
                    { id: "2", text: "<ruby>新<rt>あたら</rt></ruby>しいのが<ruby>出<rt>で</rt></ruby>たりしたら" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>あわてて<ruby>買<rt>か</rt></ruby>って" },
                    { id: "4", text: "<ruby>何<rt>なん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>もしないうちに" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：理清时间与动作先后顺序。</strong>首先是现在的动作假设：3「今あわてて買って」（要是现在急急忙忙买了的话）。</p>
                    <p><strong class="text-textMain">第二步：寻找后续发生的假设情况。</strong>买完之后发生了什么？接时间副词 4「何か月もしないうちに」（没过几个月）+ 动词短语 2「新しいのが出たりしたら」（要是出了新款的话）。</p>
                    <p><strong class="text-textMain">第三步：连接情感原因。</strong>“刚买没几个月就出了新款”会导致什么心情？自然是接 1「悔しいから」（因为会很懊恼/后悔），这也解释了句尾“打算暂时再观望一下”的原因。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然很想要新电脑，但如果现在急急忙忙买下，没过几个月就出了新款的话肯定会很后悔，所以我想暂时再观望一下。
                    </p>
                `
            },
           {
                id: "n2_1012_3",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 3",
                prefix: "お<ruby>互<rt>たが</rt></ruby>い<ruby>感<rt>かん</rt></ruby><ruby>情<rt>じょう</rt></ruby><ruby>的<rt>てき</rt></ruby>になっていると、",
                suffix: "ものだ。",
                options: [
                    { id: "1", text: "うまく" },
                    { id: "2", text: "<ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>そう" },
                    { id: "3", text: "いかない" },
                    { id: "4", text: "としても" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找固定语法接续。</strong>选项 4「としても」表示逆接让步“即使...也...”，前面须接续动词的普通体或意向形。选项中唯一的动词是 2「話そう」（意向形），构成「冷静に話そうとしても」（即使打算冷静交谈）。</p>
                    <p><strong class="text-textMain">第二步：寻找惯用搭配。</strong>选项 1「うまく」是副词，常与动词否定形式连用表示“不顺利”。选项 3「いかない」正是否定形式，两者构成固定惯用语「うまくいかない」（进展不顺）。</p>
                    <p><strong class="text-textMain">第三步：确立前后逻辑。</strong>结合题干条件「感情的になっていると」（当双方情绪化的时候），逻辑上必然是“[即使打算冷静交谈] 也 [无法顺利进行]”。因此 2-4 在前，1-3 在后，最后接续句尾表示事物常态的「ものだ」。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>当双方都处于情绪化的时候，即使打算冷静下来交谈，往往也是无法顺利沟通的。
                    </p>
                `
            },
            {
                id: "n2_1012_4",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 4",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>がそんなことをする<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>でないことは、あなたが",
                suffix: "だ。",
                options: [
                    { id: "1", text: "はず" },
                    { id: "2", text: "ご<ruby>存<rt>ぞん</rt></ruby>じ" },
                    { id: "3", text: "いちばん" },
                    { id: "4", text: "の" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确定谓语。</strong>题干后半部分存在主语「あなたが」（你），后方需要接续谓语。选项中能充当谓语的只有含有尊敬意义的名词 2「ご存じ」（了解/知道）。</p>
                    <p><strong class="text-textMain">第二步：确定句尾语法。</strong>句尾是断定助动词「だ」，选项 1 形式名词「はず」（理应）一般接在「だ」前面，构成「はずだ」。</p>
                    <p><strong class="text-textMain">第三步：确立修饰与连接关系。</strong>「ご存じ」在此处作为名词使用，接续形式名词「はず」时，一般用格助词 4「の」连接，构成「ご存じのはず」。剩余的副词 3「いちばん」（最）用于修饰了解的程度，置于「ご存じ」之前。综合顺序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>他不是会做出那种事的人，这一点你应该比谁都清楚。
                    </p>
                `
            },
            {
                id: "n2_1012_5",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 5",
                prefix: "<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>が<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちに<ruby>厳<rt>きび</rt></ruby>しくするのは、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>は<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby>を",
                suffix: "だ。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>させたい" },
                    { id: "3", text: "からこそ" },
                    { id: "4", text: "<ruby>願<rt>ねが</rt></ruby>う" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找句型呼应。</strong>题干前半句为「～するのは」（之所以...），后半句一般接续表示原因的语法。选项 3「からこそ」（正因为）符合此结构，必然位于最后一个空（接在句尾「だ」前）。</p>
                    <p><strong class="text-textMain">第二步：寻找动宾搭配。</strong>题干存在宾语「優勝を」（冠军），选项中能作其谓语的只有动词 2「経験させたい」（想让...体验）。</p>
                    <p><strong class="text-textMain">第三步：确立引语接续。</strong>「経験させたい」表达一种心理意愿，与其他动词相连时需用助词 1「と」作为引用，接续表示心理活动的动词 4「願う」（期望/祈愿），构成「経験させたいと願う」。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中教练之所以对选手们那么严格，正因为他期望能让选手们体验一次夺冠的滋味。
                    </p>
                `
            },
            // ---------------- 2011年7月 ----------------
            {
                id: "n2_1107_1",
                level: "N2",
                year: "2011年7月",
                label: "問題7 - 1",
                prefix: "<ruby>不<rt>ふ</rt></ruby><ruby>調<rt>ちょう</rt></ruby>だった<ruby>山<rt>やま</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>がついにゴールを<ruby>決<rt>き</rt></ruby>めた。<ruby>彼<rt>かれ</rt></ruby>に",
                suffix: "<ruby>相<rt>そう</rt></ruby><ruby>当<rt>とう</rt></ruby>あったはずだ。",
                options: [
                    { id: "1", text: "したら" },
                    { id: "2", text: "という" },
                    { id: "3", text: "プレッシャーは" },
                    { id: "4", text: "「もし、またミスをしたら」" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定接续。</strong>题干前半部分以「彼に」（对他...）结尾，选项中 1「したら」与之构成固定句型「～にしたら」（站在...的立场来看 / 对...来说），即「彼にしたら」（对他来说）。</p>
                    <p><strong class="text-textMain">第二步：寻找引用与被修饰名词。</strong>选项 4「もし、またミスをしたら」（如果又失误了的话）是一个完整的引用句，需要通过助词 2「という」（叫做...的）来修饰名词。选项中唯一的名词是 3「プレッシャーは」（压力），构成「『もし、またミスをしたら』というプレッシャーは」（“如果又失误了该怎么办”的压力）。</p>
                    <p><strong class="text-textMain">第三步：连接句尾谓语。</strong>名词 3 作为主语，顺理成章地接续后半句的谓语「相当あったはずだ」（理应是相当大的）。综合顺序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>状态一直不佳的山中选手终于进球了。对他来说，“如果再次失误该怎么办”的压力想必是相当大的吧。
                    </p>
                `
            },
            {
                id: "n2_1107_2",
                level: "N2",
                year: "2011年7月",
                label: "問題7 - 2",
                prefix: "「これは<ruby>地<rt>じ</rt></ruby><ruby>元<rt>もと</rt></ruby>ではよく<ruby>知<rt>し</rt></ruby>られた<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>で、このすっぱさがおいしい。ただ、",
                suffix: "<ruby>増<rt>ふ</rt></ruby>えていることだね。」と<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんは<ruby>語<rt>かた</rt></ruby>る。",
                options: [
                    { id: "1", text: "なんていう" },
                    { id: "2", text: "<ruby>残<rt>ざん</rt></ruby><ruby>念<rt>ねん</rt></ruby>なのは" },
                    { id: "3", text: "<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby>が<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>" },
                    { id: "4", text: "すっぱいのが<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>だ" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立宏观句型。</strong>题干后半部分出现「ただ、」（只是、不过），句尾为「～増えていることだね」（...在增加这件事）。这构成了一个说明状况的宏观结构，选项 2「残念なのは」（遗憾的是）置于句首，构成「残念なのは、～ことだね」（遗憾的是...这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立动作主体。</strong>句尾谓语是「増えている」（正在增加），选项中能充当该动作主体的只有 3「若者が最近」（最近年轻人）。</p>
                    <p><strong class="text-textMain">第三步：寻找名词修饰语。</strong>什么类型的年轻人增加了？选项 1「なんていう」是「などと言う」的口语形式（说出...这样的话的），用于引出具体内容。它将选项 4「すっぱいのが苦手だ」（吃不惯酸的）连接到 3「若者が」之上，构成「『すっぱいのが苦手だ』なんていう若者が」（说自己吃不惯酸的这类年轻人）。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中先生说：“这是在当地很出名的料理，这种酸味正是它的美味所在。只是，令人遗憾的是，最近说着‘吃不惯酸的’这类话的年轻人在逐渐增多。”
                    </p>
                `
            },
            {
                id: "n2_1107_3",
                level: "N2",
                year: "2011年7月",
                label: "問題7 - 3",
                prefix: "<ruby>忘<rt>わす</rt></ruby>れられないプレゼントは、<ruby>小<rt>しょう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>のときに<ruby>両<rt>りょう</rt></ruby><ruby>親<rt>しん</rt></ruby>が<ruby>買<rt>か</rt></ruby>ってくれた<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>です。<ruby>苦<rt>くる</rt></ruby>しい<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>、",
                suffix: "<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます。",
                options: [
                    { id: "1", text: "それだけで" },
                    { id: "2", text: "どんな<ruby>思<rt>おも</rt></ruby>いで" },
                    { id: "3", text: "<ruby>買<rt>か</rt></ruby>ってくれたのかと" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>うと" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找疑问与引用搭配。</strong>选项 2「どんな思いで」（带着怎样的心情）是包含疑问词的短语，常与表示不确定或引用的「～か」连用。选项 3「買ってくれたのかと」含有「のかと」，两者构成「どんな思いで買ってくれたのかと」（带着怎样的心情为我买的呢）。</p>
                    <p><strong class="text-textMain">第二步：寻找动词接续。</strong>「～かと」作为引用内容，后方需要接续表示思考或言语的动词。选项 4「思うと」（一想到...）符合要求，构成「～かと思うと」（一想到...）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾逻辑。</strong>选项 1「それだけで」（仅凭这一点/单单那样）接在条件表达「思うと」之后，顺接后文的结果「涙が出ます」（眼泪就流出来了）。综合排布顺序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>令我难以忘怀的礼物，是小学生时父母买给我的自行车。在艰苦的生活中，一想到他们是怀着怎样的心情买给我的，单是这样我就不禁流下眼泪。
                    </p>
                `
            },
            {
                id: "n2_1107_4",
                level: "N2",
                year: "2011年7月",
                label: "問題7 - 4",
                prefix: "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>子<rt>こ</rt></ruby>どもがピアノを<ruby>習<rt>なら</rt></ruby>いたいと<ruby>言<rt>い</rt></ruby>いだした。わたしは、<ruby>子<rt>こ</rt></ruby>どもが",
                suffix: "と<ruby>思<rt>おも</rt></ruby>っている。",
                options: [
                    { id: "1", text: "したい" },
                    { id: "2", text: "やりたい" },
                    { id: "3", text: "やらせて" },
                    { id: "4", text: "と<ruby>思<rt>おも</rt></ruby>うことは" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾修饰关系。</strong>题干以「子どもが」（孩子）为主语，后接其愿望。选项 2「やりたい」（想要做）接选项 4「と思うことは」，构成「やりたいと思うことは」（想要做的事情）。</p>
                    <p><strong class="text-textMain">第二步：寻找使役表达与意愿接续。</strong>「やりたいと思うことは」作为后半句的宾语（提示助词「は」替代了「を」），需要接续他动词动作。选项 3「やらせて」（让其去做，使役て形）表示允许或让孩子去做。</p>
                    <p><strong class="text-textMain">第三步：确立最终谓语。</strong>结合句尾「と思っている」（我想...），选项 1「したい」（想做...）接在「やらせて」之后，构成「やらせてしたい」（想要让他去做）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>最近，孩子开始说想学钢琴。我觉得，孩子想做的事情就想让他去做。
                    </p>
                `
            },
            {
                id: "n2_1107_5",
                level: "N2",
                year: "2011年7月",
                label: "問題7 - 5",
                prefix: "<ruby>国<rt>こく</rt></ruby><ruby>民<rt>みん</rt></ruby>の、<ruby>政<rt>せい</rt></ruby><ruby>治<rt>じ</rt></ruby>",
                suffix: "<ruby>政<rt>せい</rt></ruby><ruby>治<rt>じ</rt></ruby><ruby>家<rt>か</rt></ruby>は<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>発<rt>はっ</rt></ruby><ruby>揮<rt>き</rt></ruby>できるのだ。",
                options: [
                    { id: "1", text: "<ruby>初<rt>はじ</rt></ruby>めて" },
                    { id: "2", text: "に<ruby>対<rt>たい</rt></ruby>する" },
                    { id: "3", text: "があって" },
                    { id: "4", text: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找修饰对象。</strong>题干前半部分结尾为「政治」，选项 2「に対する」（对于...）直接接续，构成「政治に対する」（对政治的...）。</p>
                    <p><strong class="text-textMain">第二步：寻找被修饰名词与存在句型。</strong>「に対する」需修饰名词，接续选项 4「信頼」（信任），即「政治に対する信頼」。随后接选项 3「があって」（存在...），构成「政治に対する信頼があって」（存在对政治的信任）。</p>
                    <p><strong class="text-textMain">第三步：确立固定语法。</strong>动词て形搭配「初めて」是固定语法，表示“直到...才 / 只有...才”。将选项 1「初めて」置于「て」之后，构成「～があって初めて」（只有存在...才能够）。顺接后文的「～発揮できるのだ」（才能发挥出）。综合顺序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>只有存在国民对政治的信任，政治家才能够发挥出领导力。
                    </p>
                `
            },
            {
                id: "n2_1112_1",
                level: "N2",
                year: "2011年12月",
                label: "問題7 - 1",
                prefix: "もう<ruby>秋<rt>あき</rt></ruby>になるのに、<ruby>今日<rt>きょう</rt></ruby>の<ruby>暑<rt>あつ</rt></ruby>さは",
                suffix: "エアコンをつけた<ruby>家<rt>いえ</rt></ruby>も<ruby>多<rt>おお</rt></ruby>かったらしい。",
                options: [
                    { id: "1", text: "<ruby>真<rt>ま</rt></ruby><ruby>夏<rt>なつ</rt></ruby>" },
                    { id: "2", text: "のようで" },
                    { id: "3", text: "まるで" },
                    { id: "4", text: "に<ruby>戻<rt>もど</rt></ruby>ったか" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找副词呼应关系。</strong>选项 3「まるで」（宛如/简直）是比喻性副词，通常需要与表示比喻的「～ようだ/みたいだ」相呼应。选项中存在 2「のようで」，两者搭配构成「まるで～のようで」（宛如...一样）。</p>
                    <p><strong class="text-textMain">第二步：确立比喻的核心内容。</strong>题干的主题是「今日の暑さは」（今天的暑热）。选项 1「真夏」（盛夏）接续 4「に戻ったか」（回到了...吗），构成比喻的具体内容「真夏に戻ったか」（是否回到了盛夏）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句型结构。</strong>将比喻内容嵌入呼应结构中，构成「まるで真夏に戻ったかのようで」（简直就像回到了盛夏一般）。置于横线处，顺接后半句「エアコンをつけた家も多かったらしい」（开空调的人家似乎也很多），逻辑成立。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明明都已经到了秋天，今天的暑热却简直就像回到了盛夏一般，似乎有很多家庭都开了空调。
                    </p>
                `
            },
            {
                id: "n2_1112_2",
                level: "N2",
                year: "2011年12月",
                label: "問題7 - 2",
                prefix: "(ホテルで)<br><ruby>支<rt>し</rt></ruby><ruby>配<rt>はい</rt></ruby><ruby>人<rt>にん</rt></ruby>　「お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>を<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>った<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>案<rt>あん</rt></ruby><ruby>内<rt>ない</rt></ruby>してしまったそうだね」<br><ruby>従<rt>じゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>員<rt>いん</rt></ruby>　「はい。<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>にリストをしっかり",
                suffix: "のに<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません」",
                options: [
                    { id: "1", text: "しておけば" },
                    { id: "2", text: "<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>さえ" },
                    { id: "3", text: "ミスでした" },
                    { id: "4", text: "<ruby>防<rt>ふせ</rt></ruby>げる" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找条件接续。</strong>题干提示语为「事前にリストをしっかり」（事先好好地将名单...），后需接续具体的动作。选项 2「確認さえ」（只要确认）和 1「しておけば」（事先做好的话）构成极限界定条件表达「確認さえしておけば」（只要事先确认好）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 4「防げる」（能够防范/避免）是动词的可能态，在此作为连体修饰语，修饰名词 3「ミスでした」（是失误），构成「防げるミスでした」（是能够避免的失误）。</p>
                    <p><strong class="text-textMain">第三步：结合语境完成组合。</strong>将条件与结果相连，构成「確認さえしておけば防げるミスでした」（只要确认好就能避免的失误）。接续在句尾的「のに」（却.../明明...，在此处用于表达遗憾与自责的语气）之前，符合员工道歉的语境。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在酒店里）<br>经理：“听说你把客人带错房间了呀。”<br>员工：“是的。明明只要事先好好确认一下名单就是能够避免的失误，非常抱歉。”
                    </p>
                `
            },
            {
                id: "n2_1112_3",
                level: "N2",
                year: "2011年12月",
                label: "問題7 - 3",
                prefix: "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>した",
                suffix: "<ruby>必<rt>かなら</rt></ruby>ずこの<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>を<ruby>生<rt>い</rt></ruby>かしてほしい。",
                options: [
                    { id: "1", text: "としても" },
                    { id: "2", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>" },
                    { id: "3", text: "ことは" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>方<rt>かた</rt></ruby>ない" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找修饰关系与形式名词。</strong>题干前半部分「今回失敗した」（这次失败了）是连体修饰语，需要接续名词。选项 3「ことは」包含形式名词「こと」，构成「失敗したことは」（关于失败这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立句型与逻辑转折。</strong>接续表示“不可避免”的评价 4「仕方ない」，构成「失敗したことは仕方ない」（失败是没办法的事）。随后接续逆接让步表达 1「としても」（即使...也...），构成「仕方ないとしても」（即使说是没办法的事）。</p>
                    <p><strong class="text-textMain">第三步：确定副词位置。</strong>选项 2「今後」（今后）作为时间副词，修饰后半句的「必ずこの経験を生かしてほしい」（一定要充分利用这次经验），因此置于横线最后。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>即使说这次失败是无可奈何的事，今后也一定要充分利用这次的经验。
                    </p>
                `
            },
            {
                id: "n2_1112_4",
                level: "N2",
                year: "2011年12月",
                label: "問題7 - 4",
                prefix: "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>悔<rt>くや</rt></ruby>しかったので、もっと<ruby>強<rt>つよ</rt></ruby>くなるため",
                suffix: "<ruby>耐<rt>た</rt></ruby>えようと<ruby>思<rt>おも</rt></ruby>います。",
                options: [
                    { id: "1", text: "だって" },
                    { id: "2", text: "なら" },
                    { id: "3", text: "<ruby>厳<rt>きび</rt></ruby>しい<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>に" },
                    { id: "4", text: "どんな" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找条件表达。</strong>题干前半句结尾为「強くなるため」（为了变强），接续选项 2「なら」（如果...的话），构成假定条件「強くなるためなら」（如果是为了变强的话）。</p>
                    <p><strong class="text-textMain">第二步：确定动作对象。</strong>句尾谓语为「耐えよう」（打算忍耐），其动作对象需要用格助词「に」提示。选项 3「厳しい練習に」（对严酷的练习）符合接续，构成「厳しい練習に耐えよう」。</p>
                    <p><strong class="text-textMain">第三步：确立疑问词与助词的呼应。</strong>选项 4「どんな」与选项 1「だって」（相当于「でも」，表示全面肯定“无论...都”）相互呼应。将它们嵌套在名词结构中，构成「どんな厳しい練習にだって」（无论是怎样严酷的练习都...）。综合排布顺序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为输了比赛真的很不甘心，所以如果是为了变得更强，无论是怎样严酷的练习我都打算忍耐。
                    </p>
                `
            },
            {
                id: "n2_1112_5",
                level: "N2",
                year: "2011年12月",
                label: "問題7 - 5",
                prefix: "<ruby>母<rt>はは</rt></ruby>は「<ruby>風邪<rt>かぜ</rt></ruby>をひかないのは、",
                suffix: "」とよく<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "ジョギングの" },
                    { id: "2", text: "している" },
                    { id: "3", text: "おかげだ" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找句型呼应。</strong>题干结构为「～のは、～」（不感冒的原因是...），后文需接续表示原因的句型。选项 3「おかげだ」（多亏了...）符合该结构，置于横线末尾。</p>
                    <p><strong class="text-textMain">第二步：确立名词修饰结构。</strong>选项 1「ジョギングの」（慢跑的...）接续「おかげだ」，构成「ジョギングのおかげだ」。其前方需要连体修饰语来限定“怎样的慢跑”。</p>
                    <p><strong class="text-textMain">第三步：组合动作修饰语。</strong>选项 4「毎朝」作时间状语，修饰动词 2「している」，构成「毎朝している」（每天早上做的）。整体作为定语修饰「ジョギング」，最终组合为「毎朝しているジョギングのおかげだ」（多亏了每天早上做的慢跑）。综合顺序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>母亲常说：“之所以不感冒，多亏了每天早上做的慢跑。”
                    </p>
                `
            },
    // =========================== 2023年 ===========================
    // ---------------- 2023年7月 ----------------
    {
        id: "n2_2307_1",
        level: "N2",
        year: "2023年7月",
        label: "問題7 - 1",
        prefix: "<ruby>先生<rt>せんせい</rt></ruby>に",
        suffix: "<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>感謝<rt>かんしゃ</rt></ruby>しています。",
        options: [
            { id: "1", text: "ここまで" },
            { id: "2", text: "いただいた" },
            { id: "3", text: "おかげで" },
            { id: "4", text: "ご<ruby>指導<rt>しどう</rt></ruby>" }
        ],
        correctOrder: ["1", "4", "2", "3"],
        starIndex: 1, 
        explanation: `
            <p><strong class="text-textMain">第一步：寻找敬语搭配。</strong>「先生に」后面需要接对方对我做出的恩惠动作，选项中 4「ご指導」和 2「いただいた」构成标准敬语搭配「ご指導いただいた」。</p>
            <p><strong class="text-textMain">第二步：确定程度修饰词。</strong>1「ここまで」（到今天这一步/到这种程度）作为副词修饰整个指导的过程，即「ここまでご指導いただいた」。</p>
            <p><strong class="text-textMain">第三步：寻找原因归结。</strong>因为获得了指导，所以“非常感谢”。表示归功于某人/某事的好结果的句型是 3「おかげで」，接在动词过去时后。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>多亏了老师您指导我到今天这一步，我真的非常感谢。
            </p>
        `
    },
    // ---------------- 2023年12月 ----------------
    {
        id: "n2_2312_1",
        level: "N2",
        year: "2023年12月",
        label: "問題7 - 1",
        prefix: "<ruby>数年前<rt>すうねんまえ</rt></ruby>に<ruby>命<rt>いのち</rt></ruby>にかかわるような",
        suffix: "<ruby>注意<rt>ちゅうい</rt></ruby>するようになった。",
        options: [
            { id: "1", text: "<ruby>以来<rt>いらい</rt></ruby>" },
            { id: "2", text: "<ruby>大病<rt>たいびょう</rt></ruby>を" },
            { id: "3", text: "<ruby>健康<rt>けんこう</rt></ruby>に" },
            { id: "4", text: "して" }
        ],
        correctOrder: ["2", "4", "1", "3"],
        starIndex: 2, 
        explanation: `
            <p><strong class="text-textMain">第一步：寻找修饰关系。</strong>「命にかかわるような」（关乎性命的）需要修饰名词事物，选项中只有 2「大病を」符合。</p>
            <p><strong class="text-textMain">第二步：寻找固定搭配。</strong>动词的て形 +「以来」表示“自从...之后”。4「して」+ 1「以来」构成「して以来」。因此 4 紧跟 2，1 紧跟 4。</p>
            <p><strong class="text-textMain">第三步：寻找动作的对象。</strong>剩下的 3「健康に」自然是后方动作「注意する」（注意）的对象。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>自从几年前生了一场大病，在鬼门关走了一遭之后，我就开始格外注重身体健康了。
            </p>
        `
    },
    {
        id: "n2_2312_2",
        level: "N2",
        year: "2023年12月",
        label: "問題7 - 2",
        prefix: "あのレストランは",
        suffix: "いつも<ruby>行列<rt>ぎょうれつ</rt></ruby>ができている。",
        options: [
            { id: "1", text: "おいしい" },
            { id: "2", text: "<ruby>値段<rt>ねだん</rt></ruby>が" },
            { id: "3", text: "だけあって" },
            { id: "4", text: "<ruby>安<rt>やす</rt></ruby>いうえに" }
        ],
        correctOrder: ["2", "4", "1", "3"],
        starIndex: 2,
        explanation: `
            <p><strong class="text-textMain">第一步：寻找并列关系。</strong>句型「～うえに」表示“不仅...而且...”。2「値段が」搭配 4「安いうえに」，构成“价格不仅便宜”。</p>
            <p><strong class="text-textMain">第二步：寻找并列的另一项。</strong>既然便宜，那另一个优点是什么？显然是 1「おいしい」，两部分结合表达“不仅便宜而且美味”。</p>
            <p><strong class="text-textMain">第三步：寻找因果评价。</strong>因为具备上述两个优点，所以“总是排长队”。这里使用句型 3「だけあって」表示“正因为...所以理所当然...”，与后半句呼应。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>那家餐厅正因为不仅价格便宜而且味道好，所以总是排着长队。
            </p>
        `
    }
];
