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
            // ---------------- 2012年7月 (N2) ----------------
            {
                id: "n2_1207_1",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 1",
                prefix: "①、「わたし、<ruby>辛<rt>から</rt></ruby>いものを<ruby>食<rt>た</rt></ruby>べると、",
                suffix: "せきが<ruby>出<rt>で</rt></ruby>るんです。」",
                options: [
                    { id: "1", text: "ほど" },
                    { id: "2", text: "<ruby>必<rt>かなら</rt></ruby>ず" },
                    { id: "3", text: "いい" },
                    { id: "4", text: "といって" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定搭配。</strong>选项 4「といって」与选项 3「いい」和选项 1「ほど」结合，构成表示程度的固定句型「～といっていいほど」（到了可以说……的程度 / 简直可以说是……）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰内容与程度基准。</strong>上述句型前接表示频率的副词选项 2「必ず」（必定 / 肯定），构成「必ずといっていいほど」（几乎可以说是必定 / 必然）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将该副词短语置于题干前后两部分之间，修饰句尾的动作，构成「辛いものを食べると、必ずといっていいほど、せきが出る」（一吃辣的东西，几乎可以说是必然会咳嗽）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“我只要一吃辣的东西，几乎可以说是必然会咳嗽。”
                    </p>
                `
            },
            {
                id: "n2_1207_2",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 2",
                prefix: "②、A「みんないますか。」<br>B「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんがいません。」<br>A「<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>のあと",
                suffix: "のかな。」",
                options: [
                    { id: "1", text: "なっていたのに" },
                    { id: "2", text: "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>行<rt>い</rt></ruby>っちゃった" },
                    { id: "3", text: "ここで<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせて" },
                    { id: "4", text: "<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くことに" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立先后动作。</strong>题干「授業のあと」（下课后）后接最初计划的动作选项 3「ここで待ち合わせて」（在这里碰头/集合），随后接续后续动作选项 4「一緒に行くことに」（一起去……）。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型与逆接。</strong>前述的决定事项接续表示规定或计划的句型「～ことになっている」。加上表示逆接转折的选项 1「なっていたのに」（明明已经定好了……却），构成「一緒に行くことになっていたのに」（明明定好了一起去的）。</p>
                    <p><strong class="text-textMain">第三步：确立意外结果与句尾衔接。</strong>逆接后引出与预期相反的实际行动，即选项 2「一人で行っちゃった」（一个人走掉了），与句尾的推测「のかな」（吧 / 难道是……）相连。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“大家都在吗？” B：“田中不在。” A：“明明定好了下课后在这里集合一起去的，难道他一个人先走掉了吗？”
                    </p>
                `
            },
            {
                id: "n2_1207_3",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 3",
                prefix: "③、A「あ、<ruby>今<rt>いま</rt></ruby>から<ruby>行<rt>い</rt></ruby>く<ruby>博<rt>はく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>館<rt>かん</rt></ruby>、<ruby>一<rt>いっ</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>してないと<ruby>入<rt>はい</rt></ruby>れないってガイドブックに<ruby>書<rt>か</rt></ruby>いてあるよ。」<br>B「え、そうなの？<ruby>困<rt>こま</rt></ruby>ったなあ。」<br>A「<ruby>行<rt>い</rt></ruby>く",
                suffix: "みようか。」",
                options: [
                    { id: "1", text: "<ruby>行<rt>い</rt></ruby>って" },
                    { id: "2", text: "だけ" },
                    { id: "3", text: "<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>して" },
                    { id: "4", text: "<ruby>入<rt>い</rt></ruby>れてもらえないか" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立让步句型。</strong>「動詞辞書形＋だけ＋動詞て形」（姑且先……看看 / 总是要去……一趟的）是日语中常见的固定表达。将其与题干前缀的「行く」结合，接续选项 2「だけ」和选项 1「行って」，构成「行くだけ行って」（姑且先去看看）。</p>
                    <p><strong class="text-textMain">第二步：确立请求与目的。</strong>到了之后做什么？引出具体的询问内容，即选项 4「入れてもらえないか」（能不能让我们进去）。</p>
                    <p><strong class="text-textMain">第三步：确立手段与句尾。</strong>将上述的询问作为交涉的内容，后接表示手段的选项 3「交渉して」（进行交涉），最后与句尾的「みようか」（试试看吧）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“啊，指南上写着，我们现在要去的博物馆如果不提前一周预约是进不去的哦。” B：“诶，是吗？那可难办了。” A：“姑且先去看看，交涉一下看能不能让我们进去试试吧。”
                    </p>
                `
            },
            {
                id: "n2_1207_4",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 4",
                prefix: "④、A「すみません、<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の2<ruby>時<rt>じ</rt></ruby>からの<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>ですが、その<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>、<ruby>別<rt>べつ</rt></ruby>の<ruby>用<rt>よう</rt></ruby><ruby>件<rt>けん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってしまいまして……。もしそちらのご<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>が",
                suffix: "、いかがでしょうか。」<br>B「こちらは<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>ですよ。」",
                options: [
                    { id: "1", text: "ありがたいんですが" },
                    { id: "2", text: "<ruby>変<rt>へん</rt></ruby><ruby>更<rt>こう</rt></ruby>していただけると" },
                    { id: "3", text: "4<ruby>時<rt>じ</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>降<rt>こう</rt></ruby>に" },
                    { id: "4", text: "よろしければ" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件铺垫。</strong>题干「もしそちらのご都合が」（如果您的时间）后接选项 4「よろしければ」（方便的话），构成商务日语中常见的条件寒暄语「もしそちらのご都合がよろしければ」（如果您的时间方便的话）。</p>
                    <p><strong class="text-textMain">第二步：确立核心动作。</strong>提出更改时间的具体请求，接续选项 3「4時以降に」（4点以后），并接续授受动作选项 2「変更していただけると」（如果能请您更改到……的话），构成「4時以降に変更していただけると」。</p>
                    <p><strong class="text-textMain">第三步：确立委婉请求表达。</strong>将上述条件与自身的情感表达相连，接续选项 1「ありがたいんですが」（我会很感激的），最后顺接句尾的询问「いかがでしょうか」（您看如何），构成极其委婉的请求句型。综合排序为 4-3-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“不好意思，关于下周2点开始的会议，那个时间我正好有别的事情……如果您的时间方便的话，能请您将会议更改到4点以后吗，我会非常感激的，您看如何？” B：“我这边没问题哦。”
                    </p>
                `
            },
            {
                id: "n2_1207_5",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 5",
                prefix: "⑤、このコンサートの<ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby>には、<ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby><ruby>員<rt>いん</rt></ruby>",
                suffix: "<ruby>十<rt>じゅう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>です。",
                options: [
                    { id: "1", text: "いれば" },
                    { id: "2", text: "も" },
                    { id: "3", text: "が" },
                    { id: "4", text: "20<ruby>人<rt>にん</rt></ruby>" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语及数量。</strong>题干「警備員」（保安）后接主格助词选项 3「が」，再接续具体的数量词选项 4「20人」，构成「警備員が20人」（20名保安）。</p>
                    <p><strong class="text-textMain">第二步：确立强调助词。</strong>数量词后接副助词选项 2「も」，在此处表示数量之多或对该数量的强调，构成「20人も」（多达20人）。</p>
                    <p><strong class="text-textMain">第三步：确立假定条件与句尾。</strong>接续表示存在动作的假定形选项 1「いれば」（如果有……的话），与句尾的「十分です」（就足够了）相连，构成「20人もいれば十分です」（如果有20人之多就足够了）。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这场演唱会的安保工作，如果有20名保安之多就足够了。
                    </p>
                `
            },
            // ---------------- 2012年12月 (N2) ----------------
            {
                id: "n2_1212_1",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 1",
                prefix: "①、A「あ、<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>がなくなってしまいましたね。」<br>B「じゃあ、<ruby>私<rt>わたし</rt></ruby>がちょっとコンビニに",
                suffix: "いてください。」<br>A「<ruby>私<rt>わたし</rt></ruby>もいっしょに<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>きますよ。」",
                options: [
                    { id: "1", text: "きますから" },
                    { id: "2", text: "<ruby>行<rt>い</rt></ruby>って" },
                    { id: "3", text: "<ruby>待<rt>ま</rt></ruby>って" },
                    { id: "4", text: "<ruby>買<rt>か</rt></ruby>って" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连贯动作。</strong>题干「コンビニに」（去便利店）提示需要接续移动动词。接续选项 2「行って」（去），并接续在便利店发生的动作选项 4「買って」（买），构成「コンビニに行って買って」（去便利店买）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与授受关系。</strong>动作完成后需要返回，接续选项 1「きますから」（因为我会……然后回来），构成「買ってきますから」（因为我会买完回来）。</p>
                    <p><strong class="text-textMain">第三步：确立最终请求。</strong>向对方说明原因后，提出对对方的动作要求。接续选项 3「待って」（等待），与句尾的补助动词「いてください」（请保持……状态）相连，构成「待っていてください」（请在这里等着）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“啊，饮料喝完了呢。” B：“那我稍微去一趟便利店买点回来，请在这里等一下。” A：“我也一起去买吧。”
                    </p>
                `
            },
            {
                id: "n2_1212_2",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 2",
                prefix: "②、この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>をこのまま",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある" },
                    { id: "2", text: "いずれにしても" },
                    { id: "3", text: "<ruby>早<rt>そう</rt></ruby><ruby>急<rt>きゅう</rt></ruby>に<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す" },
                    { id: "4", text: "<ruby>進<rt>すす</rt></ruby>めるかやめるか" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列选项。</strong>题干「このまま」（就这样）后接续针对该计划的两个相反动作，即选项 4「進めるかやめるか」（是推进还是放弃），构成「この計画をこのまま進めるかやめるか」（这个计划是就这样推进还是放弃）。</p>
                    <p><strong class="text-textMain">第二步：确立条件转折。</strong>在前述的两种可能性之后，接续表示让步转折的副词选项 2「いずれにしても」（无论如何 / 不管怎样），引出下文必须采取的行动，构成「進めるかやめるか、いずれにしても」。</p>
                    <p><strong class="text-textMain">第三步：确立必要性与句尾呼应。</strong>选项 3「早急に結論を出す」（尽早得出结论）作为动作短语，必须修饰表示必要性的形式名词选项 1「必要がある」（有必要），最后顺接句尾的推测助动词「だろう」（吧）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这个计划是就这样推进还是放弃，不管怎样，都有必要尽早得出结论吧。
                    </p>
                `
            },
            {
                id: "n2_1212_3",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 3",
                prefix: "③、「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>登<rt>と</rt></ruby><ruby>山<rt>ざん</rt></ruby>の<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>について<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>があります。<ruby>配<rt>くば</rt></ruby>られたプリントに、ビニール<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>持<rt>じ</rt></ruby><ruby>参<rt>さん</rt></ruby>",
                suffix: "<ruby>足<rt>た</rt></ruby>りるのでしょうか。」",
                options: [
                    { id: "1", text: "ありますが" },
                    { id: "2", text: "だいたい<ruby>何<rt>なん</rt></ruby><ruby>枚<rt>まい</rt></ruby>ぐらい" },
                    { id: "3", text: "のことと" },
                    { id: "4", text: "<ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>すれば" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引用与逆接。</strong>题干「持参」（带来）后接表示引用传闻的句型选项 3「のことと」（提及…… / 据说……），再接续表示转折的选项 1「ありますが」（虽然写着……，但），构成「プリントに、ビニール袋を持参のこととありますが」（虽然分发的讲义上写着要自带塑料袋，但……）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问与条件。</strong>转折后提出具体的疑问，接续询问数量的选项 2「だいたい何枚ぐらい」（大概多少个左右），后接表示条件的动词选项 4「用意すれば」（如果准备……的话），构成「だいたい何枚ぐらい用意すれば」（大概准备多少个的话……）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将上述条件句与句尾的疑问「足りるのでしょうか」（够用呢？）相连。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“关于下周登山的随身物品我有个问题。虽然分发的讲义上写着要自带塑料袋，但大概准备多少个才够用呢？”
                    </p>
                `
            },
            {
                id: "n2_1212_4",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>何<rt>なに</rt></ruby>か<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>があって",
                suffix: "ということがよくある。",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか" },
                    { id: "2", text: "<ruby>忘<rt>わす</rt></ruby>れてしまう" },
                    { id: "3", text: "はずなのに" },
                    { id: "4", text: "その<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立修饰与动作。</strong>题干「何か目的があって」（带有某种目的）修饰动作，后接前往某地的具体行为选项 4「その場所に行った」（去了那个地方），构成「何か目的があってその場所に行った」（带有某种目的去了那个地方）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接句型。</strong>在该动作后接续表示转折的 N2 句型选项 3「はずなのに」（明明应该是……却），构成「～その場所に行ったはずなのに」（明明应该是带有某种目的去了那里，却……）。</p>
                    <p><strong class="text-textMain">第三步：确立遗忘对象与句尾。</strong>转折后引出实际发生的意外结果，即把选项 1「何をしに行ったのか」（到底是去做什么的）作为宾语短句，接续谓语选项 2「忘れてしまう」（忘记了），并与句尾的「ということがよくある」（经常有这样的事）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明明应该是带有某种目的才去那个地方的，却把到底是去做什么的给忘记了，经常有这样的事。
                    </p>
                `
            },
            {
                id: "n2_1212_5",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>卓<rt>たく</rt></ruby>に",
                suffix: "<ruby>大<rt>だい</rt></ruby><ruby>豆<rt>ず</rt></ruby>だが、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>国<rt>こく</rt></ruby><ruby>内<rt>ない</rt></ruby>で<ruby>作<rt>つく</rt></ruby>られているものはわずかで、その<ruby>多<rt>おお</rt></ruby>くを<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>からの<ruby>輸<rt>ゆ</rt></ruby><ruby>入<rt>にゅう</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>っているという。",
                options: [
                    { id: "1", text: "<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "2", text: "<ruby>原<rt>げん</rt></ruby><ruby>料<rt>りょう</rt></ruby>となる" },
                    { id: "3", text: "<ruby>調<rt>ちょう</rt></ruby><ruby>味<rt>み</rt></ruby><ruby>料<rt>りょう</rt></ruby>の" },
                    { id: "4", text: "みそやしょうゆといった" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立修饰与举例。</strong>题干「日本の食卓に」（对日本的餐桌而言）后接连体修饰选项 1「欠かせない」（不可或缺的），修饰具体的举例内容选项 4「みそやしょうゆといった」（诸如味噌和酱油等），构成「日本の食卓に欠かせないみそやしょうゆといった」（日本餐桌上不可或缺的诸如味噌和酱油等）。</p>
                    <p><strong class="text-textMain">第二步：确立所属与修饰对象。</strong>该举例内容后接其所属的分类选项 3「調味料の」（调味料的），构成「～みそやしょうゆといった調味料の」。</p>
                    <p><strong class="text-textMain">第三步：确立原料关系。</strong>将上述调味料名词短语接续选项 2「原料となる」（作为原料的），最终修饰后文的核心名词「大豆だが」（虽然是……大豆，但），构成「～調味料の原料となる大豆だが」。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然大豆是日本餐桌上不可或缺的诸如味噌和酱油等调味料的原料，但在日本国内生产的却很少，据说其大部分都依赖于从海外输入。
                    </p>
                `
            },
            // ---------------- 2013年7月 (N2) ----------------
            {
                id: "n2_1307_1",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>国<rt>くに</rt></ruby>でサッカー",
                suffix: "<ruby>野<rt>や</rt></ruby><ruby>球<rt>きゅう</rt></ruby>だ。",
                options: [
                    { id: "1", text: "スポーツ" },
                    { id: "2", text: "に<ruby>次<rt>つ</rt></ruby>いで" },
                    { id: "3", text: "といえば" },
                    { id: "4", text: "<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>のある" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准与固定句型。</strong>题干「サッカー」（足球）后接续表示“仅次于……”的选项 2「に次いで」，构成「サッカーに次いで」（仅次于足球的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该短语后接续修饰语选项 4「人気のある」（受欢迎的），并修饰名词选项 1「スポーツ」（运动），构成「サッカーに次いで人気のあるスポーツ」（仅次于足球的、受欢迎的运动）。</p>
                    <p><strong class="text-textMain">第三步：确立话题提示与句尾呼应。</strong>名词短语后接续提示话题的选项 3「といえば」（说到……），与句尾的「野球だ」（是棒球）相连。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在这个国家，说到仅次于足球受欢迎的运动，那就是棒球了。
                    </p>
                `
            },
            {
                id: "n2_1307_2",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「あれ？<ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>さん、だいぶ<ruby>髪<rt>かみ</rt></ruby>が<ruby>伸<rt>の</rt></ruby>びましたね。」<br><ruby>中<rt>なか</rt></ruby><ruby>村<rt>むら</rt></ruby>「ええ、<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>に",
                suffix: "ないんですよ。」",
                options: [
                    { id: "1", text: "きり" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>も" },
                    { id: "3", text: "<ruby>切<rt>き</rt></ruby>って" },
                    { id: "4", text: "<ruby>切<rt>き</rt></ruby>った" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间节点与固定句型。</strong>题干「半年前に」（半年前）后接续动词过去时选项 4「切った」（剪了），随后接续表示“自那以后再也没有……”的 N2 句型选项 1「きり」，构成「半年前に切ったきり」（自从半年前剪过之后就再也没……）。</p>
                    <p><strong class="text-textMain">第二步：确立频度副词与否定呼应。</strong>选项 2「一度も」（一次也没）作为频度副词，需与后文的否定表达相呼应，置于句型「きり」之后，构成「半年前に切ったきり一度も」（自从半年前剪过之后一次也没有……）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动词与句尾。</strong>频度副词后接续具体动作的动词连用形选项 3「切って」（剪），与句尾的否定状态「ないんですよ」（没有……哦）相连，构成「一度も切ってないんですよ」（一次也没有剪过哦）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中：“咦？木村先生，您的头发长长了不少呢。” 中村：“是啊，自从半年前剪过之后，就一次也没有剪过了哦。”
                    </p>
                `
            },
            {
                id: "n2_1307_3",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>には<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>熱<rt>ねっ</rt></ruby><ruby>心<rt>しん</rt></ruby>な<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いが、<ruby>中<rt>なか</rt></ruby>でも、<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>豊<rt>ほう</rt></ruby><ruby>富<rt>ふ</rt></ruby>な",
                suffix: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>も<ruby>厚<rt>あつ</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>は" },
                    { id: "2", text: "<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は" },
                    { id: "3", text: "もとより" },
                    { id: "4", text: "<ruby>保<rt>ほ</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からの" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「経験豊富な」（经验丰富的）作为连体修饰语，后需接续名词。接续选项 2「山田先生は」（山田老师），构成「経験豊富な山田先生は」（经验丰富的山田老师）。</p>
                    <p><strong class="text-textMain">第二步：确立递进句型。</strong>选项 1「生徒は」（学生）后接续表示“不仅……而且……”的 N2 固定句型选项 3「もとより」，构成「生徒はもとより」（不仅是学生）。</p>
                    <p><strong class="text-textMain">第三步：确立并列对象与句尾搭配。</strong>递进句型后引出另一个对象选项 4「保護者からの」（来自监护人的），与句尾的「信頼も厚い」（也非常受信任）相连，构成「保護者からの信頼も厚い」。综合排序为 2-1-3-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我们的学校里有很多热心指导的老师，其中，经验丰富的山田老师不仅深受学生信任，也非常受学生监护人们的信任。
                    </p>
                `
            },
            {
                id: "n2_1307_4",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>宇<rt>う</rt></ruby><ruby>宙<rt>ちゅう</rt></ruby>にはこれだけ",
                suffix: "としても<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>ではないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>星<rt>ほし</rt></ruby>がある" },
                    { id: "2", text: "<ruby>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>がいた" },
                    { id: "3", text: "のだから" },
                    { id: "4", text: "どこかの<ruby>星<rt>ほし</rt></ruby>に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰与原因。</strong>题干「これだけ」（如此之多）后接续选项 1「多くの星がある」（有许多星球），随后接续表示原因的选项 3「のだから」（因为……），构成「これだけ多くの星があるのだから」（因为有如此之多的星球）。</p>
                    <p><strong class="text-textMain">第二步：确立存在句型。</strong>选项 4「どこかの星に」（在某个星球上）作为地点状语，后接续表示存在动作的选项 2「生物がいた」（存在生物），构成「どこかの星に生物がいた」（在某个星球上存在生物）。</p>
                    <p><strong class="text-textMain">第三步：确立假设与句尾呼应。</strong>将上述存在句接续在题干句尾的假设转折表达「としても不思議ではない」（即使……也不奇怪）之前。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>宇宙中有如此之多的星球，所以我觉得即使在某个星球上存在生物也不足为奇。
                    </p>
                `
            },
            {
                id: "n2_1307_5",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>の",
                suffix: "<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>さんと<ruby>林<rt>はやし</rt></ruby>さんだが、プライベートではとても<ruby>仲<rt>なか</rt></ruby>がいい。",
                options: [
                    { id: "1", text: "<ruby>対<rt>たい</rt></ruby><ruby>立<rt>りつ</rt></ruby>する" },
                    { id: "2", text: "ことの" },
                    { id: "3", text: "<ruby>上<rt>うえ</rt></ruby>では" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>い" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立范围表达。</strong>题干「仕事の」（工作的）后接续选项 3「上では」（在……方面），构成固定表达「仕事の上では」（在工作上 / 在工作方面）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰从句的核心结构。</strong>动词选项 1「対立する」（对立 / 冲突）后接形式名词短语选项 2「ことの」，再接续形容词选项 4「多い」（多的）。这是「対立することが多い」作为连体修饰语时主格助词「が」替换为「の」的用法，构成「対立することの多い」（经常发生冲突的）。</p>
                    <p><strong class="text-textMain">第三步：确立整体修饰关系。</strong>将前述两部分组合，作为连体修饰语修饰后文的主语「山田さんと林さん」（山田先生和林先生）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然山田先生和林先生在工作上经常发生冲突，但在私下里他们的关系却非常好。
                    </p>
                `
            },
            // ---------------- 2013年12月 (N2) ----------------
            {
                id: "n2_1312_1",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 1",
                prefix: "①、A「<ruby>夏<rt>なつ</rt></ruby><ruby>休<rt>やす</rt></ruby>み、あしたで<ruby>終<rt>お</rt></ruby>わりだね」<br>B「そうだね。でもまだ",
                suffix: "<ruby>休<rt>やす</rt></ruby>みたいよね。」",
                options: [
                    { id: "1", text: "ぐらい" },
                    { id: "2", text: "1<ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby>" },
                    { id: "3", text: "あと" },
                    { id: "4", text: "は" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立数量基准。</strong>副词选项 3「あと」（再 / 还有）后需接续具体的时间数量词选项 2「1週間」（一周），构成「あと1週間」（再有一周）。</p>
                    <p><strong class="text-textMain">第二步：确立程度修饰。</strong>时间数量短语后接续表示大概数量的副助词选项 1「ぐらい」（大约 / 左右），构成「あと1週間ぐらい」（大约再有一周）。</p>
                    <p><strong class="text-textMain">第三步：确立强调提示与句尾。</strong>最后接续提示助词选项 4「は」（至少 / 起码），在此表示对该数量的最低期望强调，构成「あと1週間ぐらいは」（起码大约再有一周），直接与句尾的谓语「休みたいよね」（想休息呢）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“暑假明天就结束了呢。” B：“是啊。但是还想至少再休息大约一周左右呢。”
                    </p>
                `
            },
            {
                id: "n2_1312_2",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 2",
                prefix: "②、（<ruby>北<rt>きた</rt></ruby><ruby>川<rt>がわ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>へのメールで）<br><ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby><ruby>無<rt>ぶ</rt></ruby><ruby>事<rt>じ</rt></ruby>に<ruby>帰<rt>き</rt></ruby><ruby>国<rt>こく</rt></ruby>しました。<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>に<ruby>滞<rt>たい</rt></ruby><ruby>在<rt>ざい</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は",
                suffix: "お<ruby>世<rt>せ</rt></ruby><ruby>話<rt>わ</rt></ruby>になり、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にありがとうございます。",
                options: [
                    { id: "1", text: "をはじめ" },
                    { id: "2", text: "<ruby>北<rt>きた</rt></ruby><ruby>川<rt>がわ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "3", text: "に" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>方<rt>かた</rt></ruby><ruby>々<rt>がた</rt></ruby>" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立典型代表。</strong>题干背景提示这是一封写给北川老师的邮件。接续选项 2「北川先生」与 N2 固定句型选项 1「をはじめ」（以……为首 / 包含……在内），构成「北川先生をはじめ」（以北川老师为首）。</p>
                    <p><strong class="text-textMain">第二步：确立扩展范围。</strong>该句型后通常接续表示整体或多数群体的名词，即接续选项 4「多くの方々」（许多人 / 大家），构成「北川先生をはじめ多くの方々」（以北川老师为首的大家）。</p>
                    <p><strong class="text-textMain">第三步：确立动作对象与句尾。</strong>名词短语后接续表示动作来源（施事者）的格助词选项 3「に」，与句尾表示受恩惠的表达「お世話になり」（受到照顾）相连，构成「～多くの方々にお世話になり」（受到了以北川老师为首的许多人的照顾）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在给北川老师的邮件中）昨天我已平安回国。在日本逗留期间，受到了以北川老师您为首的许多人的照顾，真的非常感谢。
                    </p>
                `
            },
            {
                id: "n2_1312_3",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>の<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は、<ruby>風<rt>かぜ</rt></ruby>をひいても、「<ruby>風<rt>かぜ</rt></ruby>のときはあたたかく",
                suffix: "。」と<ruby>言<rt>い</rt></ruby>って<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない。",
                options: [
                    { id: "1", text: "に<ruby>限<rt>かぎ</rt></ruby>る" },
                    { id: "2", text: "<ruby>早<rt>はや</rt></ruby>く" },
                    { id: "3", text: "<ruby>寝<rt>ね</rt></ruby>る" },
                    { id: "4", text: "して" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立状态修饰。</strong>题干「あたたかく」（暖和地）作为连用修饰语，后接动词选项 4「して」，构成「あたたかくして」（保暖 / 弄得暖暖的）。</p>
                    <p><strong class="text-textMain">第二步：确立连贯动作。</strong>在保暖的状态下，接续下一个动作，即副词选项 2「早く」（早早地）修饰动词选项 3「寝る」（睡觉），构成「あたたかくして早く寝る」（保暖并早点睡觉）。</p>
                    <p><strong class="text-textMain">第三步：确立最高级评价句型。</strong>动词原形后接续表示“……是最好的” N2 句型选项 1「に限る」，构成「早く寝るに限る」（早点睡觉是最好的），与句尾的引用「と言って」（这样说着）相连。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我的祖父即使感冒了，也会说“感冒的时候保暖并早点睡觉是最好的”，而不去医院。
                    </p>
                `
            },
            {
                id: "n2_1312_4",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>留<rt>りゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>のことを<ruby>聞<rt>き</rt></ruby>かれて<ruby>初<rt>はじ</rt></ruby>めて、<ruby>今<rt>いま</rt></ruby>まで",
                suffix: "ことが<ruby>多<rt>おお</rt></ruby>いのに<ruby>気<rt>き</rt></ruby>づいた。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "2", text: "<ruby>疑<rt>ぎ</rt></ruby><ruby>問<rt>もん</rt></ruby>にすら" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>っていなかった" },
                    { id: "4", text: "<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だと" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立认知状态。</strong>题干「今まで」（直到现在）后接续一直以来的认知状态，即选项 4「当たり前だと」（理所当然地）加上谓语选项 1「思って」（认为），构成「今まで当たり前だと思って」（直到现在都认为是理所当然的，并且……）。</p>
                    <p><strong class="text-textMain">第二步：确立极端否定。</strong>在理所当然的认知下，引出连怀疑都不曾有过的状态。选项 2「疑問にすら」（甚至连疑问……都）包含强调助词「すら」，后必须接续否定表达选项 3「思っていなかった」（没有想过），构成「疑問にすら思っていなかった」（甚至连怀疑都不曾有过）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将上述两部分顺接，修饰句尾的名词短语「ことが多いのに気づいた」（意识到有许多……样的事）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>留学期间，被问起自己国家的事情时我才第一次意识到，有很多事情我直到现在都认为是理所当然的，甚至连怀疑都不曾有过。
                    </p>
                `
            },
            {
                id: "n2_1312_5",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>彼<rt>かれ</rt></ruby>が<ruby>描<rt>えが</rt></ruby>いたライオンの<ruby>絵<rt>え</rt></ruby>は、",
                suffix: "いる。",
                options: [
                    { id: "1", text: "<ruby>今<rt>いま</rt></ruby>にも<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>して" },
                    { id: "2", text: "<ruby>近<rt>ちか</rt></ruby>づいてきそうなほど" },
                    { id: "3", text: "<ruby>描<rt>えが</rt></ruby>かれて" },
                    { id: "4", text: "<ruby>本<rt>ほん</rt></ruby><ruby>物<rt>もの</rt></ruby>そっくりに" }
                ],
                correctOrder: ["1", "2", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰。</strong>选项 1「今にも動き出して」（仿佛眼看着就要动起来并……）后接连贯的趋向动作及程度表达选项 2「近づいてきそうなほど」（到了好像要靠近过来的地步），构成「今にも動き出して近づいてきそうなほど」（到了仿佛马上就要动起来并靠近过来的地步）。</p>
                    <p><strong class="text-textMain">第二步：确立状态样貌。</strong>在上述极端程度的修饰下，引出具体的样貌选项 4「本物そっくりに」（简直和真的一模一样地），构成「～近づいてきそうなほど本物そっくりに」。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动词与句尾。</strong>最后接续谓语动词的被动态连用形选项 3「描かれて」（被描绘成），与句尾的补助动词「いる」相连，构成「描かれている」（被画成……）。综合排序为 1-2-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>他画的狮子，被画得简直和真的一模一样，到了仿佛眼看着就要动起来并靠近过来的地步。
                    </p>
                `
            },
            // ---------------- 2014年7月 (N2) ----------------
            {
                id: "n2_1407_1",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 1",
                prefix: "①、A「じゃあ、そろそろ<ruby>帰<rt>かえ</rt></ruby>るね。お<ruby>茶<rt>ちゃ</rt></ruby>、ごちそうさまでした。」<br>B「え、もう<ruby>帰<rt>かえ</rt></ruby>るの？せっかく",
                suffix: "いいのに。」",
                options: [
                    { id: "1", text: "もう<ruby>少<rt>すこ</rt></ruby>し" },
                    { id: "2", text: "いけば" },
                    { id: "3", text: "<ruby>来<rt>き</rt></ruby>たんだから" },
                    { id: "4", text: "ゆっくりして" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果关系与固定搭配。</strong>题干副词「せっかく」（难得 / 好不容易）常与表示原因的选项 3「来たんだから」（既然来了）搭配，构成「せっかく来たんだから」（既然难得来一趟）。</p>
                    <p><strong class="text-textMain">第二步：确立动作状语。</strong>选项 1「もう少し」（再稍微）作为程度副词，修饰后续的动作选项 4「ゆっくりして」（慢慢休息 / 放松），构成「もう少しゆっくりして」（再稍微多待一会儿）。</p>
                    <p><strong class="text-textMain">第三步：确立条件句型与句尾。</strong>动作后接续假定条件选项 2「いけば」（去的话 / 继续做某事的话），与句尾的遗憾或建议表达「いいのに」（……就好了）相连，构成「ゆっくりしていけばいいのに」（多待一会儿再走就好了）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“那我差不多该回去了。谢谢你的茶。” B：“诶，这就回去了吗？既然难得来一趟，再稍微多待一会儿就好了。”
                    </p>
                `
            },
            {
                id: "n2_1407_2",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 2",
                prefix: "②、レポートを<ruby>作<rt>さく</rt></ruby><ruby>成<rt>せい</rt></ruby>",
                suffix: "ことは、<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>なのか<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>なのかを<ruby>明<rt>めい</rt></ruby><ruby>確<rt>かく</rt></ruby>にすることだ。",
                options: [
                    { id: "1", text: "<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>" },
                    { id: "2", text: "<ruby>上<rt>うえ</rt></ruby>で" },
                    { id: "3", text: "する" },
                    { id: "4", text: "すべき" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾搭配与句型。</strong>题干「レポートを作成」（制作报告）后需接动词选项 3「する」，再接续 N2 句型选项 2「上で」（在……方面 / 在……的过程中），构成「レポートを作成する上で」（在制作报告的过程中）。</p>
                    <p><strong class="text-textMain">第二步：确立义务与修饰关系。</strong>选项 1「注意」（注意）后接表示义务或理所应当的选项 4「すべき」（应该……的），构成「注意すべき」（应该注意的）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾呼应。</strong>将「注意すべき」作为连体修饰语，直接接续题干后半部分的形式名词「ことは」，充当整句话的主语。与句尾的「明確にすることだ」（是明确……）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在制作报告的过程中，应该注意的事情是，要明确内容究竟是事实还是意见。
                    </p>
                `
            },
            {
                id: "n2_1407_3",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、どんなに",
                suffix: "。",
                options: [
                    { id: "1", text: "つらいことがあっても" },
                    { id: "2", text: "いつもにこにこしている" },
                    { id: "3", text: "<ruby>石<rt>いし</rt></ruby><ruby>川<rt>かわ</rt></ruby>さんを<ruby>尊<rt>そん</rt></ruby><ruby>敬<rt>けい</rt></ruby>している" },
                    { id: "4", text: "そんな<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>を<ruby>全<rt>まった</rt></ruby>く<ruby>見<rt>み</rt></ruby>せず" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立呼应关系与条件句。</strong>题干副词「どんなに」（无论多么）后需接续表示让步条件的「～ても」形式，即选项 1「つらいことがあっても」（即使有痛苦的事情），构成「どんなにつらいことがあっても」（无论遇到多么痛苦的事情）。</p>
                    <p><strong class="text-textMain">第二步：确立动作状语与连贯状态。</strong>在逆接条件后，接续表示实际状态的选项 4「そんな様子を全く見せず」（完全不表露出那种样子），随后接续其连贯的表现选项 2「いつもにこにこしている」（总是笑眯眯的）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾动宾搭配。</strong>将上述表示状态的短语作为连体修饰语，修饰宾语及谓语选项 3「石川さんを尊敬している」（尊敬着石川先生）。结合题干主语「私は」（我），综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我尊敬着石川先生，无论遇到多么痛苦的事情，他都完全不表露出那种样子，总是笑眯眯的。
                    </p>
                `
            },
            {
                id: "n2_1407_4",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 4",
                prefix: "④、A「サラリーマンから<ruby>農<rt>のう</rt></ruby><ruby>家<rt>か</rt></ruby>",
                suffix: "があるんだね。」<br>B「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をどうしてもあきらめきれなくてね。」",
                options: [
                    { id: "1", text: "<ruby>勇<rt>ゆう</rt></ruby><ruby>気<rt>き</rt></ruby>" },
                    { id: "2", text: "とは" },
                    { id: "3", text: "ずいぶん" },
                    { id: "4", text: "になる" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立谓语动词及句型。</strong>题干「サラリーマンから農家」（从上班族到农民）需接续变化动词选项 4「になる」（成为），随后接续表示对该事实感到惊讶或感叹的提示助词选项 2「とは」（竟然……），构成「農家になるとは」（竟然成为了农民）。</p>
                    <p><strong class="text-textMain">第二步：确立程度修饰关系。</strong>副词选项 3「ずいぶん」（相当 / 很）用于修饰后文的内容，即接续名词选项 1「勇気」（勇气），构成「ずいぶん勇気」（相当大的勇气）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构与句尾衔接。</strong>将名词「勇気」与句尾的「があるんだね」（是有……的啊）相连，构成「ずいぶん勇気があるんだね」（是有相当大的勇气的啊）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“从上班族去当农民，竟然有这么大的勇气啊。” B：“因为我无论如何也无法放弃自己的梦想啊。”
                    </p>
                `
            },
            {
                id: "n2_1407_5",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 5",
                prefix: "⑤、A「<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、また<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>で<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>しちゃったんだよね。この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>には<ruby>向<rt>む</rt></ruby>いていないんだろうね。やっぱり<ruby>転<rt>てん</rt></ruby><ruby>職<rt>しょく</rt></ruby>しようかな。」<br>B「<ruby>私<rt>わたし</rt></ruby>は<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>しないよ。<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>向<rt>む</rt></ruby>いていないと",
                suffix: "<ruby>思<rt>おも</rt></ruby>うからね。」",
                options: [
                    { id: "1", text: "こともないと" },
                    { id: "2", text: "<ruby>思<rt>おも</rt></ruby>う" },
                    { id: "3", text: "んだったら" },
                    { id: "4", text: "<ruby>続<rt>つづ</rt></ruby>ける" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引用与条件从句。</strong>题干「本当に向いていないと」（真的不适合的话）作为引用内容，后接续谓语动词选项 2「思う」（觉得 / 认为），并接续表示假定条件的选项 3「んだったら」（如果是……的话），构成「本当に向いていないと思うんだったら」（如果你真的觉得不适合的话）。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型。</strong>动词原形选项 4「続ける」（继续）后接续表示“没有必要……”的 N2 固定句型选项 1「こともないと」（也没有必要……），构成「続けることもないと」（没有必要继续下去）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾衔接。</strong>将前述的否定判断作为思考的内容，直接与句尾的「思うからね」（因为我是这么认为的）相连，综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“昨天工作上又失败了呢。这份工作估计不适合我吧。要不还是跳槽吧。” B：“我不反对哦。因为如果你真的觉得不适合的话，我认为也没有必要勉强继续下去。”
                    </p>
                `
            },
            // ---------------- 2014年12月 (N2) ----------------
            {
                id: "n2_1412_1",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 1",
                prefix: "①、X<ruby>社<rt>しゃ</rt></ruby>から<ruby>新<rt>あたら</rt></ruby>しく<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>される<ruby>腕<rt>うで</rt></ruby><ruby>時<rt>ど</rt></ruby><ruby>計<rt>けい</rt></ruby>は、これまでのどの<ruby>時<rt>と</rt></ruby><ruby>計<rt>けい</rt></ruby>にも",
                suffix: "そうで、<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しみだ。",
                options: [
                    { id: "1", text: "なっている" },
                    { id: "2", text: "デザインに" },
                    { id: "3", text: "なかった" },
                    { id: "4", text: "<ruby>全<rt>まった</rt></ruby>く<ruby>新<rt>あたら</rt></ruby>しい" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立否定呼应。</strong>题干「これまでのどの時計にも」（至今为止的任何手表上都）含有提示助词「も」，后需接续否定表达选项 3「なかった」（没有过），构成「これまでのどの時計にもなかった」（至今为止的任何手表上都不曾有过的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该短语后接续形容词选项 4「全く新しい」（全新的），共同作为修饰语，修饰名词选项 2「デザインに」（设计），构成「～なかった全く新しいデザインに」（不曾有过的全新设计）。</p>
                    <p><strong class="text-textMain">第三步：确立状态搭配与句尾。</strong>名词短语后接状态动词选项 1「なっている」（呈现为…… / 做成了……），与句尾表示传闻的「そうで」（听说……）相连。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说X公司新发售的手表，采用了至今为止任何手表都不曾有过的全新设计，这让我非常期待。
                    </p>
                `
            },
            {
                id: "n2_1412_2",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>姉<rt>あね</rt></ruby>の",
                suffix: "、<ruby>私<rt>わたし</rt></ruby>にはとてもできない。",
                options: [
                    { id: "1", text: "<ruby>欠<rt>か</rt></ruby>かさず" },
                    { id: "2", text: "ように" },
                    { id: "3", text: "10<ruby>年<rt>ねん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>も" },
                    { id: "4", text: "<ruby>日<rt>にっ</rt></ruby><ruby>記<rt>き</rt></ruby>を<ruby>書<rt>か</rt></ruby>くなんて" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比喻对象。</strong>题干「姉の」（姐姐的）后接表示比喻或举例的助动词选项 2「ように」（像……那样），构成「姉のように」（像姐姐那样）。</p>
                    <p><strong class="text-textMain">第二步：确立频度副词与修饰。</strong>选项 3「10年以上一日も」（10年以上哪怕一天也）含有提示助词「も」，后接具有否定含义的副词选项 1「欠かさず」（不遗漏地 / 不间断地），构成「10年以上一日も欠かさず」（10年以上一天也不间断地）。</p>
                    <p><strong class="text-textMain">第三步：确立动作及感叹句型。</strong>副词短语修饰其后的具体动作选项 4「日記を書くなんて」（写日记这种事），并与句尾的「私にはとてもできない」（我是绝对做不到的）相连。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>像姐姐那样，10年以上一天也不间断地写日记这种事，我是绝对做不到的。
                    </p>
                `
            },
            {
                id: "n2_1412_3",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>朝<rt>あさ</rt></ruby>、<ruby>開<rt>かい</rt></ruby><ruby>花<rt>か</rt></ruby>したときには",
                suffix: "<ruby>珍<rt>めずら</rt></ruby>しい<ruby>花<rt>はな</rt></ruby>があります。",
                options: [
                    { id: "1", text: "<ruby>花<rt>はな</rt></ruby>が" },
                    { id: "2", text: "<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>だった" },
                    { id: "3", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>にピンクへと<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>していく" },
                    { id: "4", text: "<ruby>夕<rt>ゆう</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくにつれて" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立状态与主语。</strong>题干「開花したときには」（开花的时候）后接续描述其最初状态的选项 2「真っ白だった」（是纯白的），并修饰主语选项 1「花が」（花），构成「開花したときには真っ白だった花が」（开花时是纯白色的花）。</p>
                    <p><strong class="text-textMain">第二步：确立时间推移与变化。</strong>随着时间推移，接续选项 4「夕方が近づくにつれて」（随着傍晚的临近），引出其后发生的变化状态选项 3「次第にピンクへと変化していく」（逐渐变成粉红色），构成「夕方が近づくにつれて次第にピンクへと変化していく」。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>将前后两部分组合，作为较长的连体修饰语整体修饰句尾的「珍しい花があります」（有一种罕见的花）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>有一种罕见的花，在早晨开花时是纯白色的，随着傍晚的临近会逐渐变成粉红色。
                    </p>
                `
            },
            {
                id: "n2_1412_4",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>の<ruby>作<rt>つく</rt></ruby>った<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>にミスがあるとき、<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>にもう<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>",
                suffix: "<ruby>多<rt>おお</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>させるより" },
                    { id: "2", text: "つい<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>で<ruby>直<rt>なお</rt></ruby>してしまうことも" },
                    { id: "3", text: "<ruby>早<rt>はや</rt></ruby>いと<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でやってしまったほうが" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准。</strong>题干「部下にもう一度」（让部下再次）后接使役动词及比较助词选项 1「書き直させるより」（与其让……重写），构成「部下にもう一度書き直させるより」（与其让部下重新写）。</p>
                    <p><strong class="text-textMain">第二步：确立对比对象与心理。</strong>引出比较的另一方选项 4「自分でやってしまったほうが」（自己来做的话），后接续对其的判断及心理活动选项 3「早いと思って」（觉得更快），构成「自分でやってしまったほうが早いと思って」（觉得还是自己来做更快）。</p>
                    <p><strong class="text-textMain">第三步：确立最终结果。</strong>基于上述想法，导致了最终的动作选项 2「つい自分で直してしまうことも」（往往就不知不觉自己修改了的情况也），与句尾的「多い」（很多）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>部下制作的文件有错误时，与其让部下重写，觉得还是自己来弄更快，从而不知不觉就自己改了的情况有很多。
                    </p>
                `
            },
            {
                id: "n2_1412_5",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>に",
                suffix: "が、やってみたら<ruby>意<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>に<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>くて、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<ruby>向<rt>む</rt></ruby>いていると<ruby>感<rt>かん</rt></ruby>じた。",
                options: [
                    { id: "1", text: "<ruby>塾<rt>じゅく</rt></ruby><ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>だった" },
                    { id: "2", text: "どうしても" },
                    { id: "3", text: "<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた" },
                    { id: "4", text: "と<ruby>頼<rt>たの</rt></ruby>まれて" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立状语与被动关系。</strong>题干「友人に」（被朋友）后接续副词选项 2「どうしても」（无论如何），并接续被动动词选项 4「と頼まれて」（拜托），构成「友人にどうしてもと頼まれて」（被朋友无论如何地拜托）。</p>
                    <p><strong class="text-textMain">第二步：确立承接动作与连体修饰。</strong>在被拜托之后，接续采取的动作选项 3「引き受けた」（接受了），并修饰名词短语选项 1「塾講師の仕事だった」（是补习班讲师的工作），构成「引き受けた塾講師の仕事だった」（接受的补习班讲师的工作）。</p>
                    <p><strong class="text-textMain">第三步：确立逆接与句尾。</strong>将名词短语后的助动词及助词「だったが」（虽然是……但），顺接后文「やってみたら意外に面白くて」（试着做了一下意外地觉得很有趣）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然是被朋友苦苦拜托才接下的补习班讲师的工作，但试着做了一下意外地觉得很有趣，感觉很适合自己。
                    </p>
                `
            },
            // ---------------- 2015年7月 (N2) ----------------
            {
                id: "n2_1507_1",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>優<rt>やさ</rt></ruby>しい<ruby>子<rt>こ</rt></ruby>になってほしい。<ruby>娘<rt>むすめ</rt></ruby>の",
                suffix: "<ruby>込<rt>こ</rt></ruby>めたからだ。",
                options: [
                    { id: "1", text: "「<ruby>優<rt>ゆう</rt></ruby><ruby>子<rt>こ</rt></ruby>」に" },
                    { id: "2", text: "そういった<ruby>願<rt>ねが</rt></ruby>いを" },
                    { id: "3", text: "<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>を" },
                    { id: "4", text: "したのは" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属关系与动宾搭配。</strong>题干「娘の」（女儿的）后接名词选项 3「名前を」（名字），并接续表示结果状态的选项 1「「優子」に」（定为“优子”），构成「娘の名前を「優子」に」（把女儿的名字定为“优子”）。</p>
                    <p><strong class="text-textMain">第二步：确立主语名词化。</strong>动作短语后接续形式名词结构选项 4「したのは」（之所以……），将前面的动作整体作为主语，构成「娘の名前を「優子」にしたのは」（之所以把女儿的名字定为“优子”）。</p>
                    <p><strong class="text-textMain">第三步：确立因果呼应与句尾。</strong>引出这样做的原因，即接续宾语选项 2「そういった願いを」（这样的愿望），与句尾的「込めたからだ」（是因为倾注了……）相连，构成「そういった願いを込めたからだ」。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>希望她能成为一个温柔的孩子。之所以把女儿的名字定为“优子”，是因为在其中倾注了这样的愿望。
                    </p>
                `
            },
            {
                id: "n2_1507_2",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>で<ruby>携<rt>けい</rt></ruby><ruby>帯<rt>たい</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>が<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>されて<ruby>約<rt>やく</rt></ruby>20<ruby>年<rt>ねん</rt></ruby>。いまや<ruby>携<rt>けい</rt></ruby><ruby>帯<rt>たい</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>は",
                suffix: "<ruby>定<rt>てい</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>したといえるのではないか。",
                options: [
                    { id: "1", text: "に<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "2", text: "<ruby>道<rt>どう</rt></ruby><ruby>具<rt>ぐ</rt></ruby>" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立修饰与被修饰关系。</strong>名词选项 4「生活」（生活）后接续格助词及连体修饰短语选项 1「に欠かせない」（中不可或缺的），构成「生活に欠かせない」（生活中不可或缺的）。</p>
                    <p><strong class="text-textMain">第二步：确立核心名词。</strong>该连体修饰语必须修饰名词，接续选项 2「道具」（工具），构成「生活に欠かせない道具」（生活中不可或缺的工具）。</p>
                    <p><strong class="text-textMain">第三步：确立身份资格与句尾。</strong>名词短语后接续表示资格或作为的选项 3「として」（作为……），构成「～道具として」（作为……工具），最后顺接句尾的「定着したといえるのではないか」（可以说已经扎根了吧）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>手机在日本发售大约20年了。如今可以说手机作为生活中不可或缺的工具，已经完全扎根了吧。
                    </p>
                `
            },
            {
                id: "n2_1507_3",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、スケジュール",
                suffix: "<ruby>常<rt>つね</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えながら<ruby>作<rt>さ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>をしている。",
                options: [
                    { id: "1", text: "どうすればいいか" },
                    { id: "2", text: "どおりに" },
                    { id: "3", text: "には" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立基准与动作。</strong>题干「スケジュール」（日程表）后接后缀选项 2「どおりに」（按照……），再接续具体的动作选项 4「仕事を進める」（推进工作），构成「スケジュールどおりに仕事を進める」（按照日程表推进工作）。</p>
                    <p><strong class="text-textMain">第二步：确立目的与疑问。</strong>动词原形后接续表示目的的选项 3「には」（为了……），引出疑问小句选项 1「どうすればいいか」（怎么做才好），构成「仕事を進めるにはどうすればいいか」（为了推进工作该怎么做才好）。</p>
                    <p><strong class="text-textMain">第三步：确立思考内容与句尾。</strong>将上述疑问小句作为思考的宾语，直接与句尾的「常に考えながら作業をしている」（总是边思考边进行作业）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我总是边思考为了能按日程表推进工作该怎么做才好，边进行着作业。
                    </p>
                `
            },
            {
                id: "n2_1507_4",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>筋<rt>きん</rt></ruby><ruby>肉<rt>にく</rt></ruby>トレーニングを",
                suffix: "<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>は<ruby>全<rt>まった</rt></ruby>く<ruby>違<rt>ちが</rt></ruby>います。",
                options: [
                    { id: "1", text: "<ruby>今<rt>いま</rt></ruby><ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>がどこを<ruby>鍛<rt>きた</rt></ruby>えているのか" },
                    { id: "2", text: "しているとき" },
                    { id: "3", text: "しないのでは" },
                    { id: "4", text: "<ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby>するのと" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语。</strong>题干宾语「筋肉トレーニングを」（肌肉训练）后接续谓语及时间名词选项 2「しているとき」（在做……的时候），构成「筋肉トレーニングをしているとき」（在做肌肉训练的时候）。</p>
                    <p><strong class="text-textMain">第二步：确立意识对象。</strong>选项 1「今自分がどこを鍛えているのか」（现在自己正在锻炼哪里）作为疑问小句，充当后续动词选项 4「意識するのと」（意识到……和）的宾语，构成「今自分がどこを鍛えているのか意識するのと」（意识到现在自己正在锻炼哪里和……）。</p>
                    <p><strong class="text-textMain">第三步：确立对比句型与句尾。</strong>前述短语与选项 3「しないのでは」（不意识到……的话，二者之间）构成「～のと～のでは」（做……与不做……之间）的对比句型，顺接句尾的「効果は全く違います」（效果是完全不同的）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在做肌肉训练的时候，意识到现在自己正在锻炼哪里和不意识到这一点，其效果是完全不同的。
                    </p>
                `
            },
            {
                id: "n2_1507_5",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 5",
                prefix: "⑤、「みるく<ruby>屋<rt>や</rt></ruby>」は、A<ruby>市<rt>し</rt></ruby>に",
                suffix: "です。",
                options: [
                    { id: "1", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>な" },
                    { id: "2", text: "<ruby>住<rt>す</rt></ruby>んでいる<ruby>人<rt>ひと</rt></ruby>なら" },
                    { id: "3", text: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>はいないくらい" },
                    { id: "4", text: "お<ruby>菓<rt>か</rt></ruby><ruby>子<rt>し</rt></ruby><ruby>屋<rt>や</rt></ruby>さん" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立范围条件。</strong>题干「A市に」（在A市）后接续居住状态及假设选项 2「住んでいる人なら」（如果是居住在……的人的话），构成「A市に住んでいる人なら」（如果是住在A市的人的话）。</p>
                    <p><strong class="text-textMain">第二步：确立极度比喻。</strong>在上述条件下，接续表示程度的选项 3「知らない人はいないくらい」（到了没有一个人不知道的程度），构成「住んでいる人なら知らない人はいないくらい」（到了只要是住在那里的人就没有人不知道的程度）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰关系与句尾。</strong>将上述程度短语作为修饰语，修饰形容动词选项 1「有名な」（有名的），进而修饰名词选项 4「お菓子屋さん」（点心店），最后与句尾的「です」（是）相连。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“Milk屋”是一家只要是住在A市的人就没有人不知道的、极其有名的点心店。
                    </p>
                `
            },
            // ---------------- 2015年12月 (N2) ----------------
            {
                id: "n2_1512_1",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>狭<rt>せま</rt></ruby>い<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>でもテーブルの<ruby>上<rt>うえ</rt></ruby>に<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かない",
                suffix: "<ruby>本<rt>ほん</rt></ruby>に<ruby>書<rt>か</rt></ruby>いてあった。",
                options: [
                    { id: "1", text: "だけで" },
                    { id: "2", text: "ようになると" },
                    { id: "3", text: "ようにする" },
                    { id: "4", text: "<ruby>広<rt>ひろ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられる" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立习惯性动作。</strong>题干「物を置かない」（不放东西）后接续表示主观努力做到某事的句型选项 3「ようにする」（尽量做到…… / 养成……的习惯），构成「物を置かないようにする」（养成不放东西的习惯）。</p>
                    <p><strong class="text-textMain">第二步：确立限定条件。</strong>该动词短语后接续表示限定条件的选项 1「だけで」（仅仅通过…… / 只要……），构成「物を置かないようにするだけで」（只要养成不在上面放东西的习惯）。</p>
                    <p><strong class="text-textMain">第三步：确立结果变化与引用。</strong>条件后接续产生的结果选项 4「広く感じられる」（能让人感觉宽敞），并接续表示状态变化及引用的选项 2「ようになると」（变得……，这般……），与句尾的「本に書いてあった」（书上写着）相连，构成「広く感じられるようになると本に書いてあった」。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>书上写着，即使是狭窄的房间，只要养成不在桌子上放东西的习惯，就能让人感觉宽敞起来。
                    </p>
                `
            },
            {
                id: "n2_1512_2",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 2",
                prefix: "②、レストランでアルバイトを<ruby>始<rt>はじ</rt></ruby>めてから",
                suffix: "ミスまでしてしまった。",
                options: [
                    { id: "1", text: "<ruby>今日<rt>きょう</rt></ruby>で1<ruby>年<rt>ねん</rt></ruby>たつのに" },
                    { id: "2", text: "<ruby>皿<rt>さら</rt></ruby>を<ruby>割<rt>わ</rt></ruby>るという" },
                    { id: "3", text: "うえに" },
                    { id: "4", text: "<ruby>客<rt>きゃく</rt></ruby>の<ruby>注<rt>ちゅう</rt></ruby><ruby>文<rt>もん</rt></ruby>を<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>えた" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语与逆接。</strong>题干「アルバイトを始めてから」（开始打工之后）后接具体的时间经过与表示转折的选项 1「今日で1年たつのに」（到今天明明已经满一年了，却……），构成「始めてから今日で1年たつのに」。</p>
                    <p><strong class="text-textMain">第二步：确立递进句型。</strong>在转折之后，引出第一个负面动作选项 4「客の注文を間違えた」（弄错了客人的订单），并接续表示递进的 N2 句型选项 3「うえに」（不仅……而且 / 甚至），构成「客の注文を間違えたうえに」（不仅弄错了客人的订单，甚至还……）。</p>
                    <p><strong class="text-textMain">第三步：确立具体事例与句尾呼应。</strong>递进后引出更严重的具体事例选项 2「皿を割るという」（打碎盘子这样的），修饰句尾的「ミスまでしてしまった」（甚至犯了……的错误）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在餐厅开始打工到今天明明已经满一年了，我不仅弄错了客人的订单，甚至还犯了打碎盘子这样的错误。
                    </p>
                `
            },
            {
                id: "n2_1512_3",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>傘<rt>かさ</rt></ruby>を<ruby>差<rt>さ</rt></ruby>さずに",
                suffix: "<ruby>今朝<rt>けさ</rt></ruby>からずっと<ruby>鼻<rt>はな</rt></ruby><ruby>水<rt>みず</rt></ruby>が<ruby>止<rt>と</rt></ruby>まらない。",
                options: [
                    { id: "1", text: "<ruby>風<rt>か</rt></ruby><ruby>邪<rt>ぜ</rt></ruby>が" },
                    { id: "2", text: "<ruby>治<rt>なお</rt></ruby>りかけていた" },
                    { id: "3", text: "またひどくなって" },
                    { id: "4", text: "<ruby>帰<rt>かえ</rt></ruby>ったせいか" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因与动作搭配。</strong>题干「傘を差さずに」（没打伞）后接续具体的动作及表原因的选项 4「帰ったせいか」（可能是因为回去了吧），构成「傘を差さずに帰ったせいか」（可能是因为没打伞就在大雨中回去了吧）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主语。</strong>动词连用形接「かける」表示动作进行到一半或快要发生，选项 2「治りかけていた」（快要痊愈的）修饰名词主语选项 1「風邪が」（感冒），构成「治りかけていた風邪が」（原本快要治好的感冒）。</p>
                    <p><strong class="text-textMain">第三步：确立状态变化与句尾。</strong>主语后接续状态的恶化选项 3「またひどくなって」（又变严重了，从而……），与句尾的「鼻水が止まらない」（流鼻涕不止）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>可能是因为在大雨中没打伞就回去了吧，原本快要治好的感冒又变严重了，从今早开始就一直流鼻涕不止。
                    </p>
                `
            },
            {
                id: "n2_1512_4",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 4",
                prefix: "④、",
                suffix: "ものが<ruby>思<rt>おも</rt></ruby>い<ruby>浮<rt>う</rt></ruby>かぶと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>大<rt>だい</rt></ruby><ruby>豆<rt>ず</rt></ruby>にもたくさん<ruby>含<rt>ふく</rt></ruby>まれています。",
                options: [
                    { id: "1", text: "<ruby>肉<rt>にく</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>や<ruby>卵<rt>たまご</rt></ruby>といった" },
                    { id: "2", text: "たんぱく<ruby>質<rt>しつ</rt></ruby>が" },
                    { id: "3", text: "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>というと" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>く<ruby>含<rt>ふく</rt></ruby>まれる" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓修饰关系。</strong>选项 2「たんぱく質が」（蛋白质）作为主语，后接续谓语选项 4「多く含まれる」（大量包含），构成连体修饰小句「たんぱく質が多く含まれる」（富含蛋白质的）。</p>
                    <p><strong class="text-textMain">第二步：确立话题提示。</strong>该修饰小句接续名词及提示话题的句型选项 3「食べ物というと」（提起……食物的话），构成「たんぱく質が多く含まれる食べ物というと」（提起富含蛋白质的食物的话）。</p>
                    <p><strong class="text-textMain">第三步：确立举例与句尾。</strong>引出具体的代表性例子，即选项 1「肉や魚や卵といった」（肉、鱼、鸡蛋之类的），直接修饰句尾的形式名词「ものが思い浮かぶ」（会浮现出……的东西）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>提起富含蛋白质的食物，我想大家都会浮现出肉、鱼、鸡蛋之类的东西，但其实大豆中也含有非常多。
                    </p>
                `
            },
            {
                id: "n2_1512_5",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 5",
                prefix: "⑤、イベントの<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>には",
                suffix: "スケジュールに<ruby>余<rt>よ</rt></ruby><ruby>裕<rt>ゆう</rt></ruby>ができた。",
                options: [
                    { id: "1", text: "<ruby>二<rt>ふつ</rt></ruby><ruby>日<rt>か</rt></ruby>はかかるだろうと<ruby>思<rt>おも</rt></ruby>われたが" },
                    { id: "2", text: "<ruby>多<rt>おお</rt></ruby>くのボランティアの<ruby>方<rt>かた</rt></ruby>の<ruby>協<rt>きょう</rt></ruby><ruby>力<rt>りょく</rt></ruby>で" },
                    { id: "3", text: "<ruby>最<rt>さい</rt></ruby><ruby>低<rt>てい</rt></ruby>でも" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>で<ruby>終<rt>お</rt></ruby>わったので" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度副词与预估时间。</strong>题干「準備には」（准备工作）后接续表示最低限度的副词选项 3「最低でも」（至少也），并接续预估的时间与逆接选项 1「二日はかかるだろうと思われたが」（原以为要花两天时间，但是），构成「最低でも二日はかかるだろうと思われたが」。</p>
                    <p><strong class="text-textMain">第二步：确立转折原因。</strong>转折后引出实际情况发生改变的原因，即选项 2「多くのボランティアの方の協力で」（在众多志愿者的协助下）。</p>
                    <p><strong class="text-textMain">第三步：确立实际结果与顺接。</strong>在众多志愿者的协助下导致了动作结果选项 4「一日で終わったので」（一天就结束了，因此），顺接句尾的好结果「スケジュールに余裕ができた」（日程上有了空余）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>活动准备工作原以为至少也要花两天时间，但在众多志愿者的协助下一天就结束了，因此日程上有了空余。
                    </p>
                `
            },
            // ---------------- 2016年7月 (N2) ----------------
            {
                id: "n2_1607_1",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby><ruby>暮<rt>ぐ</rt></ruby>らしを<ruby>始<rt>はじ</rt></ruby>めたころは、<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>も<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby>もすべて<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でするのが<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>で、これまでずっと",
                suffix: "。",
                options: [
                    { id: "1", text: "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>にいたか" },
                    { id: "2", text: "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>だった" },
                    { id: "3", text: "どんなに<ruby>恵<rt>めぐ</rt></ruby>まれた" },
                    { id: "4", text: "と<ruby>感<rt>かん</rt></ruby>じさせられる" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰与连体修饰。</strong>题干「これまでずっと」（一直以来）后接续修饰短语选项 3「どんなに恵まれた」（多么优越的），并直接修饰名词短语选项 1「環境にいたか」（待在……的环境中吧），构成「どんなに恵まれた環境にいたか」（待在多么优越的环境中啊）。</p>
                    <p><strong class="text-textMain">第二步：确立引用与使役被动。</strong>将前述的感叹内容作为情感产生的来源，接续表示引用的选项 4「と感じさせられる」（让人深深感受到），构成「～環境にいたかと感じさせられる」（让人深感曾经待在多么优越的环境中）。</p>
                    <p><strong class="text-textMain">第三步：确立名词修饰与句尾。</strong>将该情感状态作为连体修饰语，修饰表示日常频度的名词选项 2「毎日だった」（是这样的每一天），构成句子的主干。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>刚开始一个人生活的时候，做饭洗衣服全都要自己来，非常辛苦，这让我每天都深感自己以前一直以来是待在多么优越的环境中啊。
                    </p>
                `
            },
            {
                id: "n2_1607_2",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 2",
                prefix: "②、このお<ruby>菓<rt>か</rt></ruby><ruby>子<rt>し</rt></ruby>はとても<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>作<rt>つく</rt></ruby>れるから<ruby>初<rt>しょ</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>でも<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する",
                suffix: "<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を聞<rt>き</rt></ruby>いて、<ruby>作<rt>つく</rt></ruby>ってみようと<ruby>思<rt>おも</rt></ruby>った。",
                options: [
                    { id: "1", text: "ことは" },
                    { id: "2", text: "という" },
                    { id: "3", text: "ない" },
                    { id: "4", text: "まず" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立名词化与副词搭配。</strong>题干「失敗する」（失败）作为动词连体形，后接形式名词选项 1「ことは」（……这种事），随后接续常与否定呼应的副词选项 4「まず」（基本上 / 几乎），构成「失敗することはまず」（基本上不可能发生失败这种事）。</p>
                    <p><strong class="text-textMain">第二步：确立否定与内容引用。</strong>副词「まず」后接续否定谓语选项 3「ない」（没有 / 不会），并接续表示内容引用的选项 2「という」（这样的……），构成「まずないという」（几乎不会这样的……）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰对象与句尾。</strong>将上述引用的内容整体作为定语，修饰句尾的「友人の話を聞いて」（听了朋友的这番话），顺接后文「作ってみようと思った」（想着试着做一下吧）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听了朋友说“这个点心做起来非常简单，所以即使是初学者也几乎不会失败”这样的话，我便想着试着做一下。
                    </p>
                `
            },
            {
                id: "n2_1607_3",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>のスーパーの<ruby>隣<rt>となり</rt></ruby>にはクリーニング<ruby>屋<rt>や</rt></ruby>がある。スーパーもクリーニング<ruby>屋<rt>や</rt></ruby>も<ruby>私<rt>わたし</rt></ruby>が",
                suffix: "<ruby>助<rt>たす</rt></ruby>かる。",
                options: [
                    { id: "1", text: "<ruby>開<rt>あ</rt></ruby>いていて" },
                    { id: "2", text: "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>するついでに" },
                    { id: "3", text: "<ruby>預<rt>あず</rt></ruby>けた<ruby>服<rt>ふく</rt></ruby>を<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>けるのが" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>る<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>でも" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语与状态。</strong>题干「私が」（我）后接续时间状语选项 4「仕事から帰る時間でも」（即使是在下班回家的时间），并接续状态动词选项 1「開いていて」（也开着门），构成「私が仕事から帰る時間でも開いていて」（即使在我下班回家的时间也开着门，而且）。</p>
                    <p><strong class="text-textMain">第二步：确立顺带动作。</strong>在店铺开门的状态下，接续表示“顺便……”的句型选项 2「買い物するついでに」（在买东西的顺便），构成「～開いていて、買い物するついでに」。</p>
                    <p><strong class="text-textMain">第三步：确立名词化主语与评价。</strong>接续后续的动作及名词化形式选项 3「預けた服を取りに行けるのが」（能去取寄存的衣服这件事），作为主语与句尾的评价「助かる」（帮了大忙 / 得救了）相连。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>附近的超市旁边有一家干洗店。超市和干洗店即使在我下班回家的时间也都开着门，能够在买东西时顺便去取寄存的衣服，这真是帮了大忙。
                    </p>
                `
            },
            {
                id: "n2_1607_4",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>薬<rt>くすり</rt></ruby>は<ruby>正<rt>ただ</rt></ruby>しく",
                suffix: "<ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>を<ruby>悪<rt>あっ</rt></ruby><ruby>化<rt>か</rt></ruby>させてしまう<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>もある。",
                options: [
                    { id: "1", text: "<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>が" },
                    { id: "2", text: "<ruby>飲<rt>の</rt></ruby>まないと" },
                    { id: "3", text: "<ruby>得<rt>え</rt></ruby>られるはずの" },
                    { id: "4", text: "<ruby>得<rt>え</rt></ruby>られないだけでなく" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件搭配。</strong>题干「正しく」（正确地）修饰动词，接续表示假定条件的选项 2「飲まないと」（如果不服用的话），构成「正しく飲まないと」（如果不正确服用的话）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>动词连体形及预期表达选项 3「得られるはずの」（本应该获得的）修饰名词选项 1「効果が」（效果），构成「得られるはずの効果が」（本应该获得的效果）。</p>
                    <p><strong class="text-textMain">第三步：确立递进句型与结果。</strong>名词后接续否定及递进句型选项 4「得られないだけでなく」（不仅得不到，而且），顺接句尾的负面结果「状態を悪化させてしまう危険もある」（还有导致状态恶化的危险）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>药如果不正确服用的话，不仅得不到本应该获得的效果，甚至还有导致病情恶化的危险。
                    </p>
                `
            },
            {
                id: "n2_1607_5",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 5",
                prefix: "⑤、いつ<ruby>行<rt>い</rt></ruby>っても<ruby>長<rt>なが</rt></ruby>い<ruby>行<rt>ぎょう</rt></ruby><ruby>列<rt>れつ</rt></ruby>ができているラーメン<ruby>屋<rt>や</rt></ruby>なのに",
                suffix: "だ。",
                options: [
                    { id: "1", text: "<ruby>行<rt>い</rt></ruby>ったから" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>ごろがすいているか" },
                    { id: "3", text: "<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>に<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>してから" },
                    { id: "4", text: "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>あまり<ruby>並<rt>なら</rt></ruby>ばないで<ruby>済<rt>す</rt></ruby>んだのは" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果句型主语。</strong>题干以逆接「なのに」（明明……却）结尾，引出与预想不同的事实，即形式名词作主语的选项 4「今回あまり並ばないで済んだのは」（这次没怎么排队就解决了的原因是），构成「～ラーメン屋なのに今回あまり並ばないで済んだのは」。</p>
                    <p><strong class="text-textMain">第二步：确立疑问小句与宾语。</strong>为了解释原因，引出具体的做法，即将疑问小句选项 2「何時ごろがすいているか」（大概几点左右人比较少）作为宾语。</p>
                    <p><strong class="text-textMain">第三步：确立动作先后与因果呼应。</strong>宾语后接续确认动作选项 3「事前に確認してから」（事前确认了之后），再接续最终动作及原因表达选项 1「行ったから」（才去的），与句尾的「だ」（是）相连，构成「～のは、～行ったからだ」（之所以……，是因为……）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明明是一家无论什么时候去都排着长队的拉面店，这次之所以没怎么排队就吃上了，是因为我事前确认了大概几点比较空闲之后才去的。
                    </p>
                `
            },
            // ---------------- 2016年12月 (N2) ----------------
            {
                id: "n2_1612_1",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る",
                suffix: "、<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>への<ruby>思<rt>おも</rt></ruby>いやりの<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちを<ruby>持<rt>も</rt></ruby>つことだと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "うえで" },
                    { id: "2", text: "といえば" },
                    { id: "3", text: "<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>か" },
                    { id: "4", text: "<ruby>何<rt>なに</rt></ruby>が" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定搭配与场景。</strong>题干「結婚生活を送る」（过婚姻生活）后接续表示在某方面或某个过程中的 N2 句型选项 1「うえで」（在……方面 / 在……过程中），构成「結婚生活を送るうえで」（在过婚姻生活的过程中）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问短语。</strong>疑问词选项 4「何が」（什么是）与形容动词选项 3「大切か」（重要的），构成疑问小句「何が大切か」（什么是重要的）。</p>
                    <p><strong class="text-textMain">第三步：确立话题提示与句尾。</strong>将疑问小句接续表示提示话题的固定表达选项 2「といえば」（要说……），构成「何が大切かといえば」（要说什么是重要的话），最后顺接句尾的「相手への思いやりの気持ちを持つことだと思う」（我认为是抱有体谅对方的心情）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在过婚姻生活的过程中，要说什么是重要的话，我认为是抱有体谅对方的心情。
                    </p>
                `
            },
            {
                id: "n2_1612_2",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>就<rt>しゅう</rt></ruby><ruby>職<rt>しょく</rt></ruby>したときに",
                suffix: "とうとう<ruby>壊<rt>こわ</rt></ruby>れたので、<ruby>買<rt>か</rt></ruby>い<ruby>換<rt>か</rt></ruby>えることにした。",
                options: [
                    { id: "1", text: "ずっと" },
                    { id: "2", text: "<ruby>買<rt>か</rt></ruby>って<ruby>以<rt>い</rt></ruby><ruby>来<rt>らい</rt></ruby>" },
                    { id: "3", text: "かばんが" },
                    { id: "4", text: "<ruby>使<rt>つか</rt></ruby>っていた" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间起点。</strong>题干「就職したときに」（就职的时候）作为时间点，后接续动作及表示起点的选项 2「買って以来」（自从买了之后），构成「就職したときに買って以来」（自从就职时买了之后）。</p>
                    <p><strong class="text-textMain">第二步：确立连贯状态。</strong>动作发生后，接续表示状态一直持续的副词选项 1「ずっと」（一直），并修饰过去的持续动作选项 4「使っていた」（在使用着），构成「ずっと使っていた」（一直使用着的）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与主语。</strong>将上述两步结合作为连体修饰语，修饰主语名词选项 3「かばんが」（包），并与句尾的「とうとう壊れたので」（终于坏了，所以）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>自从就职时买了之后就一直在用的包终于坏了，所以我决定买个新的替换。
                    </p>
                `
            },
            {
                id: "n2_1612_3",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>登<rt>と</rt></ruby><ruby>山<rt>ざん</rt></ruby>には<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>な<ruby>魅<rt>み</rt></ruby><ruby>力<rt>りょく</rt></ruby>がある。<ruby>登<rt>のぼ</rt></ruby>っているときはこんなに",
                suffix: "なぜかまた<ruby>登<rt>のぼ</rt></ruby>りたくなる。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>うのに" },
                    { id: "2", text: "<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>としたくないと" },
                    { id: "3", text: "<ruby>苦<rt>くる</rt></ruby>しいことは" },
                    { id: "4", text: "<ruby>山<rt>やま</rt></ruby>を<ruby>下<rt>お</rt></ruby>りて<ruby>何<rt>なん</rt></ruby><ruby>日<rt>にち</rt></ruby>かすると" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰与情感对象。</strong>题干「こんなに」（如此地 / 这么）作为程度副词，修饰带有负面情感的名词短语选项 3「苦しいことは」（痛苦的事情），构成「こんなに苦しいことは」（如此痛苦的事情）。</p>
                    <p><strong class="text-textMain">第二步：确立心理活动及引用。</strong>将前述的痛苦经历作为想法的内容，接续选项 2「二度としたくないと」（不想再做第二次了），并接续谓语及逆接表达选项 1「思うのに」（明明这样想，却），构成「～二度としたくないと思うのに」（明明想着再也不想受这种苦了，却）。</p>
                    <p><strong class="text-textMain">第三步：确立转折发生的时间条件。</strong>逆接之后，引出想法发生改变的具体时间状语选项 4「山を下りて何日かすると」（下山过了几天之后），顺接句尾的「なぜかまた登りたくなる」（不知为何又想去爬了）。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>登山有着不可思议的魅力。爬山的时候，明明想着这么痛苦的事情再也不想做第二次了，但下山过了几天之后，不知为何又想去爬了。
                    </p>
                `
            },
            {
                id: "n2_1612_4",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>彫<rt>ちょう</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>川<rt>かわ</rt></ruby><ruby>村<rt>むら</rt></ruby>たけるが<ruby>作<rt>つく</rt></ruby>る<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>彫<rt>ちょう</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>は、<ruby>形<rt>かたち</rt></ruby>はシンプル",
                suffix: "<ruby>生<rt>せい</rt></ruby><ruby>命<rt>めい</rt></ruby><ruby>力<rt>りょく</rt></ruby>にあふれている。",
                options: [
                    { id: "1", text: "<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>し" },
                    { id: "2", text: "そうな" },
                    { id: "3", text: "ながら" },
                    { id: "4", text: "<ruby>今<rt>いま</rt></ruby>にも" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆接连词。</strong>题干「形はシンプル」（形状很简单）后接续表示转折让步的接续助词选项 3「ながら」（虽然……但是），构成「形はシンプルながら」（虽然形状简单，但是）。</p>
                    <p><strong class="text-textMain">第二步：确立样态修饰与呼应副词。</strong>副词选项 4「今にも」（眼看着马上就要）常与表示样态的「～そうだ」呼应，修饰动词连用形选项 1「動き出し」（动起来），构成「今にも動き出し」（仿佛马上就要动起来）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>动作后接续样态助动词的连体形选项 2「そうな」（的样子 / 似的），整体修饰句尾的名词短语「生命力にあふれている」（充满了生命力）。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>雕刻家川村建制作的动物雕刻作品，虽然形状简单，却充满了仿佛眼看着马上就要动起来一般的生命力。
                    </p>
                `
            },
            {
                id: "n2_1612_5",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 5",
                prefix: "⑤、ビジネスで<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>できる<ruby>人<rt>ひと</rt></ruby>とできない<ruby>人<rt>ひと</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いは、どんなに<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>な<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>でもあきらめずに",
                suffix: "と<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "かどうか" },
                    { id: "2", text: "<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>める" },
                    { id: "3", text: "にある" },
                    { id: "4", text: "<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作状语与动词。</strong>题干「あきらめずに」（不放弃地）后接续表示动作界限的选项 4「最後まで」（到最后），并修饰动词选项 2「取り組める」（能够致力于 / 能够应对），构成「あきらめずに最後まで取り組める」（能够不放弃地应对到最后）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问小句。</strong>动词原形后接续表示是否的选项 1「かどうか」（是否），构成「～最後まで取り組めるかどうか」（是否能够不放弃地坚持到最后）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构。</strong>该疑问小句作为整个句子的核心内容，与前文主语「違いは」（区别在于）相呼应，接续谓语选项 3「にある」（在于……），与句尾的「と思う」（我认为）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我认为，在商业上能够成功的人和不能成功的人的区别，就在于无论在多么艰难的状况下，是否都能不放弃地坚持应对到最后。
                    </p>
                `
            },
            // ---------------- 2017年7月 (N2) ----------------
            {
                id: "n2_1707_1",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>良<rt>よ</rt></ruby>い",
                suffix: "<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>は<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>できない。",
                options: [
                    { id: "1", text: "その<ruby>良<rt>よ</rt></ruby>さが" },
                    { id: "2", text: "<ruby>客<rt>きゃく</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>わらなければ" },
                    { id: "3", text: "<ruby>売<rt>うり</rt></ruby><ruby>上<rt>あげ</rt></ruby>の" },
                    { id: "4", text: "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>やサービスであっても" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与让步条件。</strong>题干「良い」（好的）修饰名词选项 4「商品やサービスであっても」（即使是商品或服务），构成「良い商品やサービスであっても」（即使是好的商品或服务）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓结构与假设条件。</strong>选项 1「その良さが」（其优点）作为主语，后接谓语的否定假设选项 2「客に伝わらなければ」（如果不传达给客人的话），构成「その良さが客に伝わらなければ」（如果其优点不传达给客人的话）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰关系与句尾。</strong>名词短语选项 3「売上の」（销售额的）修饰句尾名词「増加は期待できない」（无法期待……的增加），将前述的条件句顺接至此。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>即使是好的商品或服务，如果其优点不传达给客人的话，也是无法期待销售额的增加的。
                    </p>
                `
            },
            {
                id: "n2_1707_2",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>にはオルガンがある。5<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に",
                suffix: "だと<ruby>言<rt>い</rt></ruby>っていた。",
                options: [
                    { id: "1", text: "もらった<ruby>時<rt>とき</rt></ruby>に" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>弾<rt>ひ</rt></ruby>いたきり" },
                    { id: "3", text: "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>した" },
                    { id: "4", text: "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>からもらったもので" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「5年前に」（5年前）后接动作选项 3「海外に引っ越した」（搬到海外的），修饰名词短语选项 4「友達からもらったもので」（从朋友那里收到的东西，并且），构成「5年前に海外に引っ越した友達からもらったもので」（是从5年前搬到海外的朋友那里收到的东西）。</p>
                    <p><strong class="text-textMain">第二步：确立时间状语。</strong>在交代了物品的来源之后，引出后续动作发生的具体时间，即接续选项 1「もらった時に」（在收到的时候）。</p>
                    <p><strong class="text-textMain">第三步：确立固定句型与句尾。</strong>时间状语后接续表示动作界限的 N2 句型选项 2「一度弾いたきり」（只弹过一次就再也没弹过），与句尾的「だと言っていた」（他曾这么说）相连。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>前辈的家里有一台风琴。他曾说那是从5年前搬到海外的朋友那里收到的，而且收到的时候只弹过一次就再也没弹过了。
                    </p>
                `
            },
            {
                id: "n2_1707_3",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か",
                suffix: "<ruby>人<rt>ひと</rt></ruby>との<ruby>出<rt>で</rt></ruby><ruby>会<rt>あ</rt></ruby>いだとインタビューに<ruby>答<rt>こた</rt></ruby>えていたのを<ruby>見<rt>み</rt></ruby>て、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にそうだなと<ruby>思<rt>おも</rt></ruby>った。",
                options: [
                    { id: "1", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>にとって" },
                    { id: "2", text: "<ruby>何<rt>なに</rt></ruby>かで" },
                    { id: "3", text: "<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>で<ruby>一<rt>いち</rt></ruby><ruby>番<rt>ばん</rt></ruby><ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>なのは" },
                    { id: "4", text: "<ruby>誰<rt>だれ</rt></ruby>かが" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列与处所。</strong>题干「雑誌か」（在杂志或……）后接续表示不确定处所的选项 2「何かで」（什么地方），构成「雑誌か何かで」（在杂志或什么地方）。</p>
                    <p><strong class="text-textMain">第二步：确立引用小句的主语。</strong>引出接受采访的动作主体选项 4「誰かが」（某个人），并引出其回答的具体内容。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>选项 1「自分にとって」（对某人自己来说）修饰选项 3「人生で一番大切なのは」（人生中最重要的是），构成「自分にとって人生で一番大切なのは」，最后顺接句尾的「人との出会いだと」（是与人的相遇）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>看到某个人在杂志或什么地方的采访中回答说，对自己来说人生中最重要的事情是与人的相遇，我觉得真的是这样啊。
                    </p>
                `
            },
            {
                id: "n2_1707_4",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 4",
                prefix: "④、なかなか",
                suffix: "<ruby>行<rt>い</rt></ruby>けることになった。",
                options: [
                    { id: "1", text: "ようやく" },
                    { id: "2", text: "<ruby>行<rt>い</rt></ruby>けなかった" },
                    { id: "3", text: "レストランに" },
                    { id: "4", text: "<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れなくて" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立副词搭配与因果。</strong>题干副词「なかなか」（怎么也……）常与否定或困难情况呼应，后接续选项 4「予約が取れなくて」（订不到预约），并接续产生的结果选项 2「行けなかった」（没能去成），构成「なかなか予約が取れなくて行けなかった」（因为怎么也订不到预约而没能去成）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>将前述动词短语作为定语，修饰地点名词选项 3「レストランに」（的餐厅）。</p>
                    <p><strong class="text-textMain">第三步：确立最终状态。</strong>地点名词后接续表示“终于”的副词选项 1「ようやく」，最后顺接句尾的状态变化「行けることになった」（变得能去了）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>终于能去那家因为怎么也订不到预约而一直没能去成的餐厅了。
                    </p>
                `
            },
            {
                id: "n2_1707_5",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 5",
                prefix: "⑤、なぜときどき<ruby>駅<rt>えき</rt></ruby>ですれ<ruby>違<rt>ちが</rt></ruby>う",
                suffix: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でもよくわからない。",
                options: [
                    { id: "1", text: "だけの" },
                    { id: "2", text: "こんなに<ruby>気<rt>き</rt></ruby>になる" },
                    { id: "3", text: "のか" },
                    { id: "4", text: "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>のことが" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立限定修饰。</strong>题干「すれ違う」（擦肩而过）后接续表示限定的形式名词短语选项 1「だけの」（仅仅是……的），构成「すれ違うだけの」（仅仅是擦肩而过的）。</p>
                    <p><strong class="text-textMain">第二步：确立情感对象与谓语。</strong>该连体修饰语修饰宾语选项 4「彼女のことが」（关于她的事），并接续情感状态谓语选项 2「こんなに気になる」（如此在意），构成「すれ違うだけの彼女のことがこんなに気になる」（对仅仅是擦肩而过的她如此在意）。</p>
                    <p><strong class="text-textMain">第三步：确立疑问呼应与句尾。</strong>题干开头的疑问词「なぜ」（为什么）必须与句末的疑问终助词选项 3「のか」相呼应，构成疑问从句，最后与句尾的「自分でもよくわからない」（我自己也不太清楚）相连。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>为什么我会对仅仅是偶尔在车站擦肩而过的她如此在意呢，连我自己也不太清楚。
                    </p>
                `
            },
            // ---------------- 2017年12月 (N2) ----------------
            {
                id: "n2_1712_1",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 1",
                prefix: "①、（<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>で）<br><ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>「これからご<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>するのは、<ruby>私<rt>わたし</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>単<rt>たん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>える",
                suffix: "<ruby>思<rt>おも</rt></ruby>いついた<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>です。<ruby>皆<rt>みな</rt></ruby>さんも、ぜひ<ruby>試<rt>ため</rt></ruby>してみてください。」",
                options: [
                    { id: "1", text: "のに" },
                    { id: "2", text: "とあれこれ<ruby>考<rt>かんが</rt></ruby>えた" },
                    { id: "3", text: "<ruby>末<rt>すえ</rt></ruby>に" },
                    { id: "4", text: "いい<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>はないか" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立目的与疑问小句。</strong>题干「覚える」（记住）后接续表示目的的选项 1「のに」（为了……），引出为了这个目的而产生的疑问小句选项 4「いい方法はないか」（有没有什么好方法），构成「覚えるのにいい方法はないか」（为了记住新单词有没有什么好方法）。</p>
                    <p><strong class="text-textMain">第二步：确立思考内容与动作。</strong>将上述疑问作为思考的内容，后接续引用助词及动作选项 2「とあれこれ考えた」（这样反反复复思考了），构成「～ないかとあれこれ考えた」（左思右想有没有什么好方法）。</p>
                    <p><strong class="text-textMain">第三步：确立结果句型与句尾。</strong>动词过去时后接续 N2 句型选项 3「末に」（在……之后 / 经过……的最后），表示经过长时间或反复做某事之后的结果，最后顺接句尾的「思いついた方法です」（想出的方法）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在教室里）学生：“我现在要介绍的，是我为了记住新单词，左思右想有没有什么好方法之后，最终想出来的方法。大家也请务必尝试一下。”
                    </p>
                `
            },
            {
                id: "n2_1712_2",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>「<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>けが<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>という<ruby>話<rt>はなし</rt></ruby>をよく<ruby>聞<rt>き</rt></ruby>きますが、それは",
                suffix: "だけなので、やり<ruby>方<rt>かた</rt></ruby>を<ruby>身<rt>み</rt></ruby>につければ<ruby>必<rt>かなら</rt></ruby>ず<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>けられるようになります。」",
                options: [
                    { id: "1", text: "<ruby>決<rt>けっ</rt></ruby>して" },
                    { id: "2", text: "やり<ruby>方<rt>かた</rt></ruby>を<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "3", text: "ではなく" },
                    { id: "4", text: "<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>や<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>の<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立否定呼应。</strong>副词选项 1「決して」（绝对不 / 决不）需与否定表达相呼应，即接续选项 3「ではなく」（而不是），构成「決して～ではなく」（绝不是……而是）。</p>
                    <p><strong class="text-textMain">第二步：确立否定对象。</strong>在「決して」和「ではなく」之间填入被否定的对象，即选项 4「性格や能力の問題」（性格或能力的问题），构成「決して性格や能力の問題ではなく」（绝不是性格或能力的问题，而是）。</p>
                    <p><strong class="text-textMain">第三步：确立肯定内容与句尾。</strong>引出真正的原因选项 2「やり方を知らない」（不知道做法），与句尾的限定及原因表达「だけなので」（只是因为……）相连，构成「～ではなくやり方を知らないだけなので」（不是……而仅仅是因为不知道做法）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>讲师：“我经常听人说自己不擅长收拾整理，但这绝不是性格或能力的问题，而仅仅是因为不知道做法，所以只要掌握了做法，就一定能学会收拾整理的。”
                    </p>
                `
            },
            {
                id: "n2_1712_3",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 3",
                prefix: "③、X<ruby>市<rt>し</rt></ruby>には、<ruby>市<rt>し</rt></ruby><ruby>民<rt>みん</rt></ruby>のための<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby>が",
                suffix: "<ruby>行<rt>おこな</rt></ruby>っている。",
                options: [
                    { id: "1", text: "はじめとした" },
                    { id: "2", text: "<ruby>二<rt>ふた</rt></ruby>つあり" },
                    { id: "3", text: "さまざまな<ruby>催<rt>もよお</rt></ruby>しを" },
                    { id: "4", text: "<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>コンサートを" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语与存在句型。</strong>题干「X<ruby>市<rt>し</rt></ruby>には、<ruby>市<rt>し</rt></ruby><ruby>民<rt>みん</rt></ruby>のための<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby>が」（在X市，为市民而建的文化设施）后接续表示数量和存在的谓语选项 2「<ruby>二<rt>ふた</rt></ruby>つあり」（有两个，并且），构成「<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby>が<ruby>二<rt>ふた</rt></ruby>つあり」（有两个文化设施）。</p>
                    <p><strong class="text-textMain">第二步：确立举例与修饰关系。</strong>选项 4「<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>コンサートを」（音乐会）后接续表示以……为首的选项 1「はじめとした」（以……为首的 / 包括……在内的），构成「<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>コンサートをはじめとした」（以音乐会为首的）。该短语作为连体修饰语，修饰名词短语选项 3「さまざまな<ruby>催<rt>もよお</rt></ruby>しを」（各种各样的活动）。</p>
                    <p><strong class="text-textMain">第三步：确立宾语与句尾谓语。</strong>将前述宾语短语「さまざまな<ruby>催<rt>もよお</rt></ruby>しを」直接与句尾的谓语「<ruby>行<rt>おこな</rt></ruby>っている」（正在举办）相连。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在X市，有两个为市民而建的文化设施，举办着以音乐会为首的各种各样的活动。
                    </p>
                `
            },
            {
                id: "n2_1712_4",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 4",
                prefix: "④、おなかがすいている",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "どうして" },
                    { id: "2", text: "お<ruby>腹<rt>なか</rt></ruby>がなるのは" },
                    { id: "3", text: "でもないのに" },
                    { id: "4", text: "わけ" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立否定句型。</strong>题干「おなかがすいている」（肚子饿）后接续形式名词选项 4「わけ」，再接续逆接表达选项 3「でもないのに」（明明并非……却），构成「おなかがすいているわけでもないのに」（明明并不是肚子饿了）。</p>
                    <p><strong class="text-textMain">第二步：确立主语话题。</strong>在上述逆接之后，引出产生疑问的具体现象作为话题，即接续选项 2「お<ruby>腹<rt>なか</rt></ruby>がなるのは」（肚子咕咕叫这件事），构成「お<ruby>腹<rt>なか</rt></ruby>がなるのは」（肚子之所以会叫）。</p>
                    <p><strong class="text-textMain">第三步：确立疑问与句尾。</strong>主语后接续疑问词选项 1「どうして」（为什么），并与句尾的推测助动词「だろう」（呢）相连，构成「どうしてだろう」（是为什么呢）。综合排序为 4-3-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明明并不是肚子饿了，肚子之所以会咕咕叫是为什么呢。
                    </p>
                `
            },
            {
                id: "n2_1712_5",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 5",
                prefix: "⑤、",
                suffix: "<ruby>先<rt>せん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>から<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>で<ruby>休<rt>きゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>なので、<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>のホテルに<ruby>泊<rt>と</rt></ruby>まることにした。",
                options: [
                    { id: "1", text: "<ruby>泊<rt>と</rt></ruby>まっている" },
                    { id: "2", text: "たびに" },
                    { id: "3", text: "Yホテルが" },
                    { id: "4", text: "<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作与频度。</strong>选项 4「<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く」（去出差）后接续表示频度条件的选项 2「たびに」（每当……时），构成「<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くたびに」（每当去出差时）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>在该条件后接续习惯性动作选项 1「<ruby>泊<rt>と</rt></ruby>まっている」（住宿着），并将这部分整体作为修饰语，修饰名词主语选项 3「Yホテルが」（Y酒店），构成「<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くたびに<ruby>泊<rt>と</rt></ruby>まっているYホテルが」（每次出差都会入住的Y酒店）。</p>
                    <p><strong class="text-textMain">第三步：确立因果关系的主语。</strong>将上述主语部分直接与后文的原因状语「<ruby>先<rt>せん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>から<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>で<ruby>休<rt>きゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>なので」（因为从上周开始因施工而停业，所以）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>每次出差都会入住的Y酒店因为从上周开始因施工而停业，所以这次我决定住在别的酒店。
                    </p>
                `
            },
            // ---------------- 2018年7月 (N2) ----------------
            {
                id: "n2_1807_1",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 1",
                prefix: "①、どんなスポーツでも、<ruby>日<rt>ひ</rt></ruby>々の<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>が",
                suffix: "<ruby>行<rt>おこな</rt></ruby>うと<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>をかけてもなかなか<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>しない。",
                options: [
                    { id: "1", text: "もちろんだが" },
                    { id: "2", text: "<ruby>欠<rt>か</rt></ruby>かせないのは" },
                    { id: "3", text: "<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>に" },
                    { id: "4", text: "<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>った<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>で" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立修饰与评价。</strong>题干「日々の練習が」（每天的练习）后接续目标对象选项 3「上達に」（对于进步），再接续评价短语形式名词化选项 2「欠かせないのは」（不可或缺的这件事），构成「日々の練習が上達に欠かせないのは」（每天的练习对于进步不可或缺这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立转折句型。</strong>在上述评价后接续表示理所当然并带有转折的选项 1「もちろんだが」（当然是……但是），构成「上達に欠かせないのはもちろんだが」（对于进步不可或缺当然是理所当然的，但是）。</p>
                    <p><strong class="text-textMain">第三步：确立条件与句尾。</strong>转折后引出导致不好结果的条件动作，即选项 4「間違った方法で」（用错误的方法）修饰句尾的「行うと」（去做的话），最终与「時間をかけてもなかなか上達しない」（即使花了时间也很难进步）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>无论什么运动，每天的练习对于进步不可或缺当然是理所当然的，但是如果用错误的方法去做，即使花了时间也很难进步。
                    </p>
                `
            },
            {
                id: "n2_1807_2",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>姉<rt>あね</rt></ruby>は<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>の<ruby>赤<rt>あか</rt></ruby><ruby>川<rt>がわ</rt></ruby>ケイの<ruby>大<rt>だい</rt></ruby>ファンで、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の",
                suffix: "<ruby>知<rt>し</rt></ruby>りたいと<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "ことなら" },
                    { id: "2", text: "<ruby>小<rt>ちい</rt></ruby>さな" },
                    { id: "3", text: "ことでも" },
                    { id: "4", text: "どんなに" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立话题。</strong>题干「彼女の」（她的）后接续代词及假设条件选项 1「ことなら」（如果是关于……的事的话），构成「彼女のことなら」（如果是关于她的事的话）。</p>
                    <p><strong class="text-textMain">第二步：确立程度句型。</strong>后文引出极端条件的固定搭配，疑问副词选项 4「どんなに」（无论多么）后需接续修饰语。</p>
                    <p><strong class="text-textMain">第三步：确立极端条件与句尾。</strong>选项 4 后接连体词选项 2「小さな」（微小的），并修饰名词及逆接助词选项 3「ことでも」（事情也都），构成「どんなに小さなことでも」（无论多么微小的事情也都），与句尾的「知りたいと言っている」（说想知道）相连。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>姐姐是歌手赤川圭的超级粉丝，她说如果是关于她的事，无论多么微小的事情她都想知道。
                    </p>
                `
            },
            {
                id: "n2_1807_3",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>の<ruby>夕<rt>ゆう</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りのレポートがまだ<ruby>終<rt>お</rt></ruby>わっていない。<ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>は<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>中<rt>じゅう</rt></ruby><ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>があって<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がとれないので、<ruby>今<rt>こん</rt></ruby><ruby>晩<rt>ばん</rt></ruby>",
                suffix: "いけない。",
                options: [
                    { id: "1", text: "<ruby>終<rt>お</rt></ruby>わらせて" },
                    { id: "2", text: "<ruby>徹<rt>てつ</rt></ruby><ruby>夜<rt>や</rt></ruby>して" },
                    { id: "3", text: "しまわないと" },
                    { id: "4", text: "でも" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立极端条件。</strong>题干「今晩」（今晚）后接续动作及表示让步的极端条件，即选项 2「徹夜して」（熬夜）加选项 4「でも」（即使……也），构成「今晩徹夜してでも」（今晚即使熬夜也）。</p>
                    <p><strong class="text-textMain">第二步：确立动作及完成状态。</strong>在极端条件下必须完成动作，接续动词使役形及表示动作彻底完成的选项 1「終わらせて」（使其结束），再接续表示必须完成的句型前序部分选项 3「しまわないと」（不……完的话），构成「終わらせてしまわないと」（必须使其彻底做完，否则……）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾呼应。</strong>将前述短语与句尾的「いけない」（不行）相连，构成「～しまわないといけない」（必须彻底做完）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明晚截止的报告还没写完。明天一整天都有课抽不出时间，所以今晚即使熬夜也必须把它彻底写完。
                    </p>
                `
            },
            {
                id: "n2_1807_4",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんは",
                suffix: "、<ruby>冬<rt>ふゆ</rt></ruby>はいつもみかんを<ruby>大<rt>たい</rt></ruby><ruby>量<rt>りょう</rt></ruby>に<ruby>買<rt>か</rt></ruby>うそうだ。",
                options: [
                    { id: "1", text: "<ruby>食<rt>た</rt></ruby>べ<ruby>出<rt>だ</rt></ruby>すと" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>" },
                    { id: "3", text: "みかんが<ruby>好<rt>す</rt></ruby>きらしく" },
                    { id: "4", text: "<ruby>止<rt>と</rt></ruby>まらないほど" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立人物特征与原因。</strong>题干「田中さんは」（田中先生）后接续说明其喜好的选项 3「みかんが好きらしく」（似乎很喜欢橘子），并作为后文程度极端的背景原因。</p>
                    <p><strong class="text-textMain">第二步：确立条件触发。</strong>引出极端程度的具体情境，即副词选项 2「一度」（一旦 / 一次）搭配动词条件形选项 1「食べ出すと」（开始吃的话），构成「一度食べ出すと」（一旦开始吃的话）。</p>
                    <p><strong class="text-textMain">第三步：确立程度修饰与句尾。</strong>动作触发后，接续表示程度的选项 4「止まらないほど」（到了停不下来的地步），作为连用修饰语顺接句尾的「冬はいつもみかんを大量に買うそうだ」（听说冬天总是会大量购买橘子）。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说田中先生似乎非常喜欢橘子，到了只要一开始吃就停不下来的地步，冬天总是会大量购买。
                    </p>
                `
            },
            {
                id: "n2_1807_5",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>私<rt>わたし</rt></ruby>は、<ruby>中<rt>ちゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>になったころから",
                suffix: "<ruby>医<rt>い</rt></ruby><ruby>者<rt>しゃ</rt></ruby>になろうと<ruby>決<rt>き</rt></ruby>めていた。",
                options: [
                    { id: "1", text: "<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>" },
                    { id: "2", text: "<ruby>医<rt>い</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>始<rt>はじ</rt></ruby>め" },
                    { id: "3", text: "<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったときには" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>に" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立状态变化与连贯动作。</strong>题干「中学生になったころから」（从成为初中生的时候起）后接续表示渐进变化的副词选项 4「次第に」（逐渐地），修饰动作选项 2「医学に興味を持ち始め」（开始对医学产生兴趣，并且），构成「次第に医学に興味を持ち始め」（逐渐开始对医学产生兴趣）。</p>
                    <p><strong class="text-textMain">第二步：确立时间节点。</strong>在产生兴趣之后，接续下一个阶段的时间节点选项 3「高校に入ったときには」（在进入高中的时候）。</p>
                    <p><strong class="text-textMain">第三步：确立时间状语与句尾搭配。</strong>在该时间节点下，接续表示未来预期的时间名词选项 1「将来」（将来），直接修饰句尾的「医者になろうと決めていた」（决定了要成为医生）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>从成为初中生的时候起，我就逐渐开始对医学产生兴趣，在进入高中的时候，就已经决定将来要成为一名医生了。
                    </p>
                `
            },
            // ---------------- 2018年12月 (N2) ----------------
            {
                id: "n2_1812_1",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>山<rt>やま</rt></ruby>や<ruby>植<rt>しょく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby><ruby>家<rt>か</rt></ruby>",
                suffix: "<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby><ruby>展<rt>てん</rt></ruby>が15<ruby>日<rt>にち</rt></ruby>からABCデパートで<ruby>開<rt>かい</rt></ruby><ruby>催<rt>さい</rt></ruby>される。",
                options: [
                    { id: "1", text: "として" },
                    { id: "2", text: "の" },
                    { id: "3", text: "<ruby>岩<rt>いわ</rt></ruby><ruby>本<rt>もと</rt></ruby>まさき<ruby>氏<rt>し</rt></ruby>" },
                    { id: "4", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>な" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立身份与评价。</strong>题干「写真家」（摄影家）后接续表示作为某种身份的选项 1「として」（作为……），再接续评价形容动词选项 4「有名な」（有名的），构成「写真家として有名な」（作为摄影家而有名的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该短语作为连体修饰语，修饰具体的人物名词选项 3「岩本まさき氏」（岩本正树先生），构成「～有名な岩本まさき氏」。</p>
                    <p><strong class="text-textMain">第三步：确立所属关系与句尾。</strong>人物名词后接续表示所属关系的格助词选项 2「の」（的），修饰句尾的主语「写真展が」（摄影展），构成「岩本まさき氏の写真展が開催される」（岩本正树先生的摄影展将被举办）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>作为山川和植物的摄影家而闻名的岩本正树先生的摄影展，将从15日起在ABC百货商场举办。
                    </p>
                `
            },
            {
                id: "n2_1812_2",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>のころは、<ruby>一<rt>いち</rt></ruby><ruby>年<rt>ねん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられたのに、<ruby>年<rt>とし</rt></ruby>をとる",
                suffix: "だろうか。",
                options: [
                    { id: "1", text: "のは" },
                    { id: "2", text: "につれて" },
                    { id: "3", text: "なぜ" },
                    { id: "4", text: "<ruby>短<rt>みじか</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じるようになる" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立伴随变化句型。</strong>题干「年をとる」（上年纪）后接续表示伴随变化的 N2 句型选项 2「につれて」（随着……），构成「年をとるにつれて」（随着年龄的增长）。</p>
                    <p><strong class="text-textMain">第二步：确立变化结果与名词化。</strong>在伴随条件后引出发生的变化，即选项 4「短く感じるようになる」（变得感觉短暂），随后接续形式名词及提示助词选项 1「のは」（……这件事），将前面的变化内容整体名词化并作为主语。</p>
                    <p><strong class="text-textMain">第三步：确立疑问呼应与句尾。</strong>主语后接续疑问词选项 3「なぜ」（为什么），直接与句尾的推测疑问表达「だろうか」（呢？）相连，构成「～のはなぜだろうか」（……是为什么呢？）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>明明在小的时候感觉一年很漫长，但随着年龄的增长变得感觉短暂了，这是为什么呢？
                    </p>
                `
            },
            {
                id: "n2_1812_3",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>をどのような",
                suffix: "が<ruby>変<rt>か</rt></ruby>わってくるので、<ruby>順<rt>じゅん</rt></ruby><ruby>番<rt>ばん</rt></ruby>を<ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby>して<ruby>話<rt>はな</rt></ruby>す<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある。",
                options: [
                    { id: "1", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>め<ruby>方<rt>かた</rt></ruby>" },
                    { id: "2", text: "<ruby>提<rt>てい</rt></ruby><ruby>示<rt>じ</rt></ruby>するか" },
                    { id: "3", text: "によって" },
                    { id: "4", text: "<ruby>順<rt>じゅん</rt></ruby><ruby>番<rt>ばん</rt></ruby>で" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问修饰关系。</strong>题干连体词「どのような」（怎样的）后需接续名词，此处接续选项 4「順番で」（以……顺序），构成「どのような順番で」（以怎样的顺序）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问从句与条件。</strong>将该短语与动词及疑问助词选项 2「提示するか」（去提示呢）结合构成疑问小句，再接续表示依据或条件的选项 3「によって」（根据…… / 取决于……），构成「どのような順番で提示するかによって」（取决于以怎样的顺序去提示信息）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>条件引出其所影响的动作主体，即接续选项 1「相手の受け止め方」（对方的接受方式），并与句尾的「が変わってくるので」（会发生改变，所以）相连。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为取决于以怎样的顺序去提示信息，对方的接受方式也会随之改变，所以有必要意识到顺序来表达。
                    </p>
                `
            },
            {
                id: "n2_1812_4",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>では、99<ruby>歳<rt>さい</rt></ruby>のお<ruby>祝<rt>いわ</rt></ruby>いを「<ruby>白<rt>はく</rt></ruby><ruby>寿<rt>じゅ</rt></ruby>」と<ruby>言<rt>い</rt></ruby>います。「<ruby>百<rt>ひゃく</rt></ruby>」の<ruby>字<rt>じ</rt></ruby>から「<ruby>一<rt>いち</rt></ruby>」をとる",
                suffix: "そう<ruby>呼<rt>よ</rt></ruby>ばれています。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "<ruby>字<rt>じ</rt></ruby>になる" },
                    { id: "3", text: "ことから" },
                    { id: "4", text: "「<ruby>白<rt>しろ</rt></ruby>」という" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设条件。</strong>题干动词「とる」（去掉）后接续表示恒常条件或假设的接续助词选项 1「と」（一……就 / 如果……的话），构成「「一」をとると」（如果去掉“一”的话）。</p>
                    <p><strong class="text-textMain">第二步：确立结果状态。</strong>在该动作发生后，引出必然产生的结果，即接续选项 4「「白」という」（叫做“白”的）并修饰名词短语选项 2「字になる」（变成……字），构成「「白」という字になる」（变成叫做“白”的字）。</p>
                    <p><strong class="text-textMain">第三步：确立因果句型与句尾。</strong>将上述事实结果作为命名的原因，接续表示由来或原因的 N2 句型选项 3「ことから」（由此 / 因为……的缘故），并与句尾的「そう呼ばれています」（所以被这样称呼）相连。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在日本，99岁的寿辰被称为“白寿”。这是因为从“百”字中去掉“一”的话就会变成“白”字，由此才被这样称呼的。
                    </p>
                `
            },
            {
                id: "n2_1812_5",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>「<ruby>最<rt>さい</rt></ruby><ruby>初<rt>しょ</rt></ruby>は",
                suffix: "<ruby>気<rt>き</rt></ruby>になってくるということはありませんか。このような<ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を『ザイオンス<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>』と<ruby>言<rt>い</rt></ruby>います。」",
                options: [
                    { id: "1", text: "うちに" },
                    { id: "2", text: "<ruby>全<rt>まった</rt></ruby>く<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>がなかった" },
                    { id: "3", text: "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>なのに" },
                    { id: "4", text: "CMなどで<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>か<ruby>見<rt>み</rt></ruby>ている" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间呼应与连体修饰。</strong>题干时间词「最初は」（最初）呼应描述过去状态的谓语选项 2「全く興味がなかった」（完全没有兴趣），并作为连体修饰语修饰名词及逆接选项 3「商品なのに」（明明是……商品，却），构成「最初は全く興味がなかった商品なのに」（明明是最初完全没有兴趣的商品，却）。</p>
                    <p><strong class="text-textMain">第二步：确立状态的持续。</strong>在转折之后，接续表示反复发生或持续的状态选项 4「CMなどで何度か見ている」（在广告里看了几次）。</p>
                    <p><strong class="text-textMain">第三步：确立期间句型与句尾。</strong>动作持续的过程中接续 N2 句型选项 1「うちに」（在……的过程中，不知不觉），并与句尾的状态变化「気になってくる」（变得在意起来）相连。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>讲师：“明明是最初完全没有兴趣的商品，但在看几次广告的过程中，不知不觉就变得在意起来了，大家有过这样的经历吗？这样的心理现象被称为‘多看效应（曝光效应）’。”
                    </p>
                `
            },
            // ---------------- 2019年7月 (N2) ----------------
            {
                id: "n2_1907_1",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>の<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>いところは、<ruby>安<rt>やす</rt></ruby>い<ruby>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>でも",
                suffix: "ができるところです。",
                options: [
                    { id: "1", text: "ごちそう" },
                    { id: "2", text: "<ruby>工<rt>く</rt></ruby><ruby>夫<rt>ふう</rt></ruby>" },
                    { id: "3", text: "<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby>な" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件与固定句型。</strong>题干「<ruby>安<rt>やす</rt></ruby>い<ruby>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>でも」（即使是便宜的材料）后接续名词选项 2「<ruby>工<rt>く</rt></ruby><ruby>夫<rt>ふう</rt></ruby>」（下工夫 / 巧思）与表示“取决于……”的 N2 句型选项 4「<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で」，构成「<ruby>工<rt>く</rt></ruby><ruby>夫<rt>ふう</rt></ruby><ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で」（取决于如何下工夫）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>形容动词选项 3「<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby>な」（豪华的）修饰名词选项 1「ごちそう」（盛宴 / 佳肴），构成「<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby>なごちそう」（豪华的盛宴）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述的条件短语与名词短语顺接，并与句尾的「ができるところです」（是能够做出来的部分）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>料理有趣的地方在于，即使是便宜的材料，取决于如何下工夫，也能做出豪华的盛宴。
                    </p>
                `
            },
            {
                id: "n2_1907_2",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>入<rt>にゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>式<rt>しき</rt></ruby>だったんですよ。」<br><ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんの",
                suffix: "ですか。<ruby>早<rt>はや</rt></ruby>いですね。」",
                options: [
                    { id: "1", text: "もう" },
                    { id: "2", text: "<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>さん" },
                    { id: "3", text: "<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "4", text: "も" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属关系与主语。</strong>题干「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんの」（田中先生的）后接续人物名词选项 2「<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>さん」（儿子），并接续提示助词选项 4「も」（也），构成「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんの<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>さんも」（田中先生的儿子也）。</p>
                    <p><strong class="text-textMain">第二步：确立时间副词与状态。</strong>副词选项 1「もう」（已经）修饰后文的状态名词选项 3「<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>生<rt>せい</rt></ruby>」（高中生），构成「もう<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>生<rt>せい</rt></ruby>」（已经是高中生了）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构与句尾。</strong>将前述主语与谓语部分直接相连，与句尾的「ですか。<ruby>早<rt>はや</rt></ruby>いですね」（了吗。真快啊）构成呼应。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中：“昨天是我儿子高中的入学典礼哦。” 山田：“田中先生的儿子也已经是高中生了吗。时间过得真快啊。”
                    </p>
                `
            },
            {
                id: "n2_1907_3",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>各<rt>かっ</rt></ruby><ruby>国<rt>こく</rt></ruby>の<ruby>国<rt>こっ</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>員<rt>いん</rt></ruby><ruby>選<rt>せん</rt></ruby><ruby>挙<rt>きょ</rt></ruby>における<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>を<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>ごとに<ruby>見<rt>み</rt></ruby>ると、<ruby>若<rt>わか</rt></ruby>い<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>の",
                suffix: "ことがわかる。",
                options: [
                    { id: "1", text: "<ruby>我<rt>わ</rt></ruby>が<ruby>国<rt>くに</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず" },
                    { id: "2", text: "<ruby>傾<rt>けい</rt></ruby><ruby>向<rt>こう</rt></ruby>がある" },
                    { id: "3", text: "<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>は" },
                    { id: "4", text: "<ruby>相<rt>そう</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>低<rt>ひく</rt></ruby>い" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属关系。</strong>题干「<ruby>若<rt>わか</rt></ruby>い<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>の」（年轻一代的）后需接续名词，选项 3「<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>は」（投票率）最为合适，构成「<ruby>若<rt>わか</rt></ruby>い<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>の<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>は」（年轻一代的投票率）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰关系与程度。</strong>后接选项 4「<ruby>相<rt>そう</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>低<rt>ひく</rt></ruby>い」（相对较低的），并修饰选项 2「<ruby>傾<rt>けい</rt></ruby><ruby>向<rt>こう</rt></ruby>がある」（有……的倾向），构成「<ruby>相<rt>そう</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>低<rt>ひく</rt></ruby>い<ruby>傾<rt>けい</rt></ruby><ruby>向<rt>こう</rt></ruby>がある」（有相对较低的倾向）。</p>
                    <p><strong class="text-textMain">第三步：确立范围限定与句尾。</strong>将选项 1「<ruby>我<rt>わ</rt></ruby>が<ruby>国<rt>くに</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず」（不限于我国）插入两者之间，作为限定范围的状语，构成「<ruby>我<rt>わ</rt></ruby>が<ruby>国<rt>くに</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず、<ruby>相<rt>そう</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>低<rt>ひく</rt></ruby>い<ruby>傾<rt>けい</rt></ruby><ruby>向<rt>こう</rt></ruby>がある」（不限于我国，都有相对较低的倾向），最后顺接句尾「ことがわかる」（可以看出……）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>按世代来看世界各国国会议员选举的投票率，可以看出年轻一代的投票率不限于我国，都存在相对较低的倾向。
                    </p>
                `
            },
            {
                id: "n2_1907_4",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 4",
                prefix: "④、5<ruby>歳<rt>さい</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>と同<ruby>おな</rt></ruby>じ<ruby>警<rt>けい</rt></ruby><ruby>察<rt>さつ</rt></ruby><ruby>官<rt>かん</rt></ruby>になりたいと<ruby>言<rt>い</rt></ruby>っている。<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>",
                suffix: "<ruby>感<rt>かん</rt></ruby><ruby>激<rt>げき</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>別<rt>べつ</rt></ruby>として" },
                    { id: "2", text: "そんなことを" },
                    { id: "3", text: "<ruby>言<rt>い</rt></ruby>ってくれたことに" },
                    { id: "4", text: "なるかどうかは" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语与固定句型。</strong>题干「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>」（真的在将来）后接选项 4「なるかどうかは」（是否会成为），并接续固定句型选项 1「<ruby>別<rt>べつ</rt></ruby>として」（暂且不谈 / 另当别论），构成「<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>なるかどうかは<ruby>別<rt>べつ</rt></ruby>として」（将来是否会成为暂且不谈）。</p>
                    <p><strong class="text-textMain">第二步：确立动作对象与授受动词。</strong>选项 2「そんなことを」（那样的话）作为宾语，后接续表示恩惠或感谢的授受动词短语选项 3「<ruby>言<rt>い</rt></ruby>ってくれたことに」（对于她能对我说出……），构成「そんなことを<ruby>言<rt>い</rt></ruby>ってくれたことに」（对于她能对我说出那样的话）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述的条件短语与动作短语顺接，并与句尾的情感状态「<ruby>感<rt>かん</rt></ruby><ruby>激<rt>げき</rt></ruby>した」（感动了）相连。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>5岁的女儿说想成为和我一样的警察。将来是否真的会成为暂且不谈，对于她能对我说出那样的话，我感到非常感动。
                    </p>
                `
            },
            {
                id: "n2_1907_5",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>は",
                suffix: "<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>だったのは、「つらいときこそ<ruby>明<rt>あか</rt></ruby>るく」というのが<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>の<ruby>方<rt>ほう</rt></ruby><ruby>針<rt>しん</rt></ruby>だからだそうだ。",
                options: [
                    { id: "1", text: "<ruby>悔<rt>くや</rt></ruby>しいはずの" },
                    { id: "2", text: "<ruby>明<rt>あか</rt></ruby>るい" },
                    { id: "3", text: "なぜか" },
                    { id: "4", text: "<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちが" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆转设定与修饰关系。</strong>题干「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>は」（本来是 / 实际上）后接续表示理应如此的选项 1「<ruby>悔<rt>くや</rt></ruby>しいはずの」（理应感到不甘心的），作为连体修饰语修饰主语选项 4「<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちが」（选手们），构成「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>は<ruby>悔<rt>くや</rt></ruby>しいはずの<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちが」（本来理应感到不甘心的选手们）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与状态修饰。</strong>主语后接续疑问副词选项 3「なぜか」（不知为何），修饰形容词选项 2「<ruby>明<rt>あか</rt></ruby>るい」（明朗的 / 开朗的），构成「なぜか<ruby>明<rt>あか</rt></ruby>るい」（不知为何却很开朗的）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意与句尾呼应。</strong>将形容词「<ruby>明<rt>あか</rt></ruby>るい」直接与句尾名词「<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>だったのは」（之所以是……表情）相连，构成整个大主语，呼应后文的原因「<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>の<ruby>方<rt>ほう</rt></ruby><ruby>針<rt>しん</rt></ruby>だからだそうだ」（听说是因为教练的方针）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>输了比赛本来理应感到不甘心的选手们，不知为何却是一副开朗的表情，听说这是因为“越是痛苦的时候越要开朗”是教练的方针。
                    </p>
                `
            },
            // ---------------- 2019年12月 (N2) ----------------
            {
                id: "n2_1912_1",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>他<rt>た</rt></ruby><ruby>社<rt>しゃ</rt></ruby>からの<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>や<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせには、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>で",
                suffix: "できないことになっています。",
                options: [
                    { id: "1", text: "<ruby>検<rt>けん</rt></ruby><ruby>討<rt>とう</rt></ruby>" },
                    { id: "2", text: "<ruby>回<rt>かい</rt></ruby><ruby>答<rt>とう</rt></ruby>" },
                    { id: "3", text: "でないと" },
                    { id: "4", text: "してから" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作先后与固定句型。</strong>题干「一度社内で」（先在公司内部）后接续动作名词选项 1「検討」（探讨），再接续动词连用形式选项 4「してから」（做……之后），构成「検討してから」（探讨之后）。</p>
                    <p><strong class="text-textMain">第二步：确立条件句型。</strong>在动作发生之后，接续 N2 句型选项 3「でないと」（如果不……的话），构成「検討してからでないと」（如果不先探讨一下的话）。「～てからでないと」是固定搭配，后项必须接续否定表达。</p>
                    <p><strong class="text-textMain">第三步：确立否定对象与句尾。</strong>该条件句型后接续名词选项 2「回答」（回答），直接与句尾的「できないことになっています」（规定不能……）相连，构成「回答できないことになっています」（规定是不能回答的）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于来自其他公司的提问和咨询，规定如果不先在公司内部探讨一下的话，是不能予以回答的。
                    </p>
                `
            },
            {
                id: "n2_1912_2",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>は、11<ruby>時<rt>じ</rt></ruby>までには",
                suffix: "、<ruby>結<rt>けっ</rt></ruby><ruby>局<rt>きょく</rt></ruby><ruby>寝<rt>ね</rt></ruby>たのは1<ruby>時<rt>じ</rt></ruby>だった。",
                options: [
                    { id: "1", text: "つい" },
                    { id: "2", text: "<ruby>寝<rt>ね</rt></ruby>ようと" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>いつつ" },
                    { id: "4", text: "テレビを<ruby>見<rt>み</rt></ruby><ruby>続<rt>つづ</rt></ruby>けてしまい" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立意向与逆接。</strong>题干「11時までには」（在11点之前）后接续意向形选项 2「寝ようと」（想睡），再接续表示逆接的 N2 句型选项 3「思いつつ」（虽然想着……却），构成「寝ようと思いつつ」（虽然想着要睡，却）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与动作搭配。</strong>在逆接之后，接续表示无意识或控制不住的副词选项 1「つい」（不知不觉地），修饰动作选项 4「テレビを見続けてしまい」（一直看电视了，并且），构成「ついテレビを見続けてしまい」（不知不觉地就一直看电视了）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述短语与句尾的客观事实「結局寝たのは1時だった」（结果睡觉的时候已经是1点了）相连。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天晚上，虽然想着11点之前要睡觉的，却不知不觉地一直看电视，结果睡觉的时候已经是1点了。
                    </p>
                `
            },
            {
                id: "n2_1912_3",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、<ruby>新<rt>あたら</rt></ruby>しいことにチャレンジするときでも<ruby>悩<rt>なや</rt></ruby>まない。",
                suffix: "と<ruby>思<rt>おも</rt></ruby>っているからだ。",
                options: [
                    { id: "1", text: "まずやってみて" },
                    { id: "2", text: "もう<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>考<rt>かんが</rt></ruby>えればいい" },
                    { id: "3", text: "うまくいかなかったら" },
                    { id: "4", text: "そのときにどうしたらいいか" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立先后动作。</strong>副词「まず」（首先）后接续尝试性动作选项 1「やってみて」（试着做一下），再接续表示假设条件的选项 3「うまくいかなかったら」（如果不顺利的话），构成「まずやってみてうまくいかなかったら」（首先试着做一下，如果不顺利的话）。</p>
                    <p><strong class="text-textMain">第二步：确立应对策略。</strong>在不顺利的条件下，引出疑问小句选项 4「そのときにどうしたらいいか」（那时候该怎么做才好），作为后续思考动作的宾语。</p>
                    <p><strong class="text-textMain">第三步：确立思考内容与句尾。</strong>将该疑问小句接续动作选项 2「もう一度考えればいい」（再思考一次就好），并与句尾的「と思っているからだ」（是因为我觉得……）相连。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我在挑战新事物时从不烦恼。是因为我觉得，首先试着去做一下，如果不顺利的话，那时候再考虑该怎么做就好了。
                    </p>
                `
            },
            {
                id: "n2_1912_4",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>家<rt>いえ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くの<ruby>本<rt>ほん</rt></ruby><ruby>屋<rt>や</rt></ruby>では",
                suffix: "<ruby>少<rt>すこ</rt></ruby>し<ruby>遠<rt>とお</rt></ruby>いけど<ruby>行<rt>い</rt></ruby>ってみようと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>買<rt>か</rt></ruby>えなかった<ruby>漫<rt>まん</rt></ruby><ruby>画<rt>が</rt></ruby>の<ruby>最<rt>さい</rt></ruby><ruby>新<rt>しん</rt></ruby><ruby>号<rt>ごう</rt></ruby>が" },
                    { id: "2", text: "まだ<ruby>買<rt>か</rt></ruby>えるらしいので" },
                    { id: "3", text: "もう<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れていて" },
                    { id: "4", text: "<ruby>隣<rt>となり</rt></ruby><ruby>町<rt>まち</rt></ruby>のABC<ruby>書<rt>しょ</rt></ruby><ruby>店<rt>てん</rt></ruby>に<ruby>行<rt>い</rt></ruby>けば" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因与修饰关系。</strong>题干「家の近くの本屋では」（在离家近的书店）后接续状态原因选项 3「もう売り切れていて」（已经卖光了），并修饰后续名词选项 1「買えなかった漫画の最新号が」（没能买到的漫画最新一期），构成「家の近くの本屋ではもう売り切れていて買えなかった漫画の最新号が」（在离家近的书店因为卖光了而没买到的最新一期漫画）。</p>
                    <p><strong class="text-textMain">第二步：确立条件与可能性。</strong>名词主语后接续假设条件选项 4「隣町のABC書店に行けば」（如果去隔壁镇的ABC书店的话），再引出基于此条件传闻的可能性选项 2「まだ買えるらしいので」（似乎还能买到，所以）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述的原因状语顺接句尾的「少し遠いけど行ってみようと思う」（虽然有点远但我想去看看）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在离家近的书店因为卖光了而没买到的最新一期漫画，如果去隔壁镇的ABC书店似乎还能买到，所以虽然有点远但我打算去看看。
                    </p>
                `
            },
            {
                id: "n2_1912_5",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>のカレー<ruby>屋<rt>や</rt></ruby>さんを<ruby>初<rt>はつ</rt></ruby><ruby>訪<rt>ほう</rt></ruby><ruby>問<rt>もん</rt></ruby>。<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>の",
                suffix: "「<ruby>夏<rt>なつ</rt></ruby><ruby>限<rt>げん</rt></ruby><ruby>定<rt>てい</rt></ruby>ベジタブルカレー」。<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>どおりのおいしさだった。",
                options: [
                    { id: "1", text: "<ruby>中<rt>なか</rt></ruby>で" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>が<ruby>選<rt>えら</rt></ruby>んだのは" },
                    { id: "3", text: "<ruby>夏<rt>なつ</rt></ruby>の<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>がたっぷり<ruby>入<rt>はい</rt></ruby>った" },
                    { id: "4", text: "カレーがいくつかある" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属与范围。</strong>题干「野菜の」（蔬菜的）后接名词选项 4「カレーがいくつかある」（有几种咖喱），再接续表示范围的选项 1「中で」（在……之中），构成「野菜のカレーがいくつかある中で」（在有几种蔬菜咖喱的选项之中）。</p>
                    <p><strong class="text-textMain">第二步：确立主语与修饰关系。</strong>引出主语选项 2「私が選んだのは」（我所选择的是），后接修饰语选项 3「夏の野菜がたっぷり入った」（加入了大量夏日蔬菜的）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将上述修饰语直接修饰句尾的专有名词「『夏限定ベジタブルカレー』」（“夏日限定蔬菜咖喱”）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>初次访问话题中的咖喱店。在几种蔬菜咖喱之中，我所选择的是加入了大量夏日蔬菜的“夏日限定蔬菜咖喱”。正如评价一般美味。
                    </p>
                `
            },
            // ---------------- 2020年12月 (N2) ----------------
            {
                id: "n2_2012_1",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>初<rt>はじ</rt></ruby>めてパンを<ruby>作<rt>つく</rt></ruby>ってみた。<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>の",
                suffix: "、うまく<ruby>膨<rt>ふく</rt></ruby>らまなかった。",
                options: [
                    { id: "1", text: "のに" },
                    { id: "2", text: "レシピに<ruby>書<rt>か</rt></ruby>いてある" },
                    { id: "3", text: "とおりに" },
                    { id: "4", text: "<ruby>作<rt>つく</rt></ruby>った" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属与修饰。</strong>题干「<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>の」（料理杂志的）后接续名词短语选项 2「レシピに<ruby>書<rt>か</rt></ruby>いてある」（写在食谱上的），构成「<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>のレシピに<ruby>書<rt>か</rt></ruby>いてある」（写在料理杂志食谱上的）。</p>
                    <p><strong class="text-textMain">第二步：确立基准与动作。</strong>动词连体形后接续表示“按照……”的选项 3「とおりに」，随后接续具体的动作选项 4「<ruby>作<rt>つく</rt></ruby>った」（制作了），构成「～<ruby>書<rt>か</rt></ruby>いてあるとおりに<ruby>作<rt>つく</rt></ruby>った」（按照写着的那样制作了）。</p>
                    <p><strong class="text-textMain">第三步：确立逆接与句尾。</strong>动作后接续表示转折的逆接助词选项 1「のに」（明明……却），与句尾的「うまく<ruby>膨<rt>ふく</rt></ruby>らまなかった」（没有很好地膨胀起来）相连。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天，我第一次试着做了面包。明明是按照料理杂志食谱上写着的那样去做的，却没有很好地膨胀起来。
                    </p>
                `
            },
            {
                id: "n2_2012_2",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 2",
                prefix: "②、「10<ruby>倍<rt>ばい</rt></ruby>がゆ」とは",
                suffix: "おかゆのことです。",
                options: [
                    { id: "1", text: "<ruby>作<rt>つく</rt></ruby>った" },
                    { id: "2", text: "<ruby>水<rt>みず</rt></ruby>で" },
                    { id: "3", text: "10<ruby>倍<rt>ばい</rt></ruby>の" },
                    { id: "4", text: "<ruby>米<rt>こめ</rt></ruby>1に<ruby>対<rt>たい</rt></ruby>して" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比例基准。</strong>选项 4「<ruby>米<rt>こめ</rt></ruby>1に<ruby>対<rt>たい</rt></ruby>して」（对于1份米而言）作为比例的基准条件，放在前列。</p>
                    <p><strong class="text-textMain">第二步：确立数量修饰与动作手段。</strong>基准后接续具体的倍数选项 3「10<ruby>倍<rt>ばい</rt></ruby>の」（10倍的），修饰作为手段或材料的名词及助词选项 2「<ruby>水<rt>みず</rt></ruby>で」（用水），构成「<ruby>米<rt>こめ</rt></ruby>1に<ruby>対<rt>たい</rt></ruby>して10<ruby>倍<rt>ばい</rt></ruby>の<ruby>水<rt>みず</rt></ruby>で」（对于1份米而言用10倍的水）。</p>
                    <p><strong class="text-textMain">第三步：确立动作与句尾。</strong>最后接续谓语动词连体形选项 1「<ruby>作<rt>つく</rt></ruby>った」（制作的），整体作为连体修饰语，修饰句尾的名词短语「おかゆのことです」（是……的粥）。综合排序为 4-3-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>所谓的“10倍粥”，就是对于1份米而言，用10倍的水熬制而成的粥。
                    </p>
                `
            },
            {
                id: "n2_2012_3",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>が<ruby>就<rt>しゅう</rt></ruby><ruby>職<rt>しょく</rt></ruby>した<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>は<ruby>大<rt>おお</rt></ruby><ruby>手<rt>て</rt></ruby>の",
                suffix: "<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>でも<ruby>大<rt>おお</rt></ruby><きな<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>任<rt>まか</rt></ruby>せてもらえるので、やりがいがある。",
                options: [
                    { id: "1", text: "<ruby>決<rt>けっ</rt></ruby>して" },
                    { id: "2", text: "<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると" },
                    { id: "3", text: "やる<ruby>気<rt>き</rt></ruby>があれば" },
                    { id: "4", text: "<ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくないが" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准。</strong>题干「<ruby>大<rt>おお</rt></ruby><ruby>手<rt>て</rt></ruby>の」（大型的）后接续名词及比较基准选项 2「<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると」（与商社相比的话），构成「<ruby>大<rt>おお</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると」（与大型商社相比的话）。</p>
                    <p><strong class="text-textMain">第二步：确立否定呼应与转折。</strong>副词选项 1「<ruby>決<rt>けっ</rt></ruby>して」（绝对不 / 并不）需与否定表达相呼应，接续选项 4「<ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくないが」（虽然规模并不大），构成「<ruby>決<rt>けっ</rt></ruby>して<ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくないが」（虽然规模绝不算大，但是）。</p>
                    <p><strong class="text-textMain">第三步：确立条件与句尾。</strong>在转折后接续积极的假设条件选项 3「やる<ruby>気<rt>き</rt></ruby>があれば」（只要有干劲的话），顺接句尾的「<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>でも<ruby>大<rt>おお</rt></ruby>きな<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>任<rt>まか</rt></ruby>せてもらえるので、やりがいがある」（即使是新人也能被委以重任，所以很有价值）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我就职的商社与大型商社相比，虽然规模绝对算不上大，但只要有干劲，即使是新人也能被委以重任，因此非常值得一做。
                    </p>
                `
            },
            {
                id: "n2_2012_4",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は1970<ruby>年<rt>ねん</rt></ruby><ruby>代<rt>だい</rt></ruby>に<ruby>活<rt>かつ</rt></ruby><ruby>躍<rt>やく</rt></ruby>したジャズピアニストで、この<ruby>人<rt>ひと</rt></ruby>",
                suffix: "<ruby>大<rt>おお</rt></ruby>きな<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>だった。",
                options: [
                    { id: "1", text: "<ruby>語<rt>かた</rt></ruby>れない" },
                    { id: "2", text: "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>のジャズは" },
                    { id: "3", text: "<ruby>抜<rt>ぬ</rt></ruby>きには" },
                    { id: "4", text: "というほど" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立缺一不可句型。</strong>题干「この<ruby>人<rt>ひと</rt></ruby>」（这个人）后接续表示“如果没有……”的 N2 固定句型选项 3「<ruby>抜<rt>ぬ</rt></ruby>きには」（如果没有…… / 抛开……的话），构成「この<ruby>人<rt>ひと</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>きには」（抛开这个人不谈的话）。</p>
                    <p><strong class="text-textMain">第二步：确立动作对象与不可能搭配。</strong>「～抜きには」常与否定表达呼应，引出话题选项 2「<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>のジャズは」（日本的爵士乐），并接续否定可能态选项 1「<ruby>語<rt>かた</rt></ruby>れない」（无法谈论），构成「<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>のジャズは<ruby>語<rt>かた</rt></ruby>れない」（就无法谈论日本的爵士乐）。</p>
                    <p><strong class="text-textMain">第三步：确立程度修饰与句尾。</strong>将前述的极高评价整体作为程度修饰语，接续选项 4「というほど」（到了这般程度），进而修饰句尾的名词短语「<ruby>大<rt>おお</rt></ruby>きな<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>だった」（是如此巨大的存在）。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>她是活跃于1970年代的爵士钢琴家，是一个到了如果不提她就无法谈论日本爵士乐这般地步的巨大存在。
                    </p>
                `
            },
            {
                id: "n2_2012_5",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>するときは、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>な",
                suffix: "、<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby>や<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>をよく<ruby>考<rt>かんが</rt></ruby>えて<ruby>決<rt>き</rt></ruby>めましょう。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みだけで" },
                    { id: "2", text: "<ruby>喜<rt>よろこ</rt></ruby>ばれるどころか" },
                    { id: "3", text: "<ruby>迷<rt>めい</rt></ruby><ruby>惑<rt>わく</rt></ruby>をかけることもあるので" },
                    { id: "4", text: "<ruby>品<rt>しな</rt></ruby><ruby>物<rt>もの</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶと" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰。</strong>题干「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>な」（自己一厢情愿的 / 随便的）后接续名词及限定表达选项 1「<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みだけで」（仅凭主观臆断），构成「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>な<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みだけで」（仅凭自己一厢情愿的主观臆断）。</p>
                    <p><strong class="text-textMain">第二步：确立条件动作。</strong>该状态状语后接续具体的动作及假定条件选项 4「<ruby>品<rt>しな</rt></ruby><ruby>物<rt>もの</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶと」（如果去挑选物品的话），构成「～<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みだけで<ruby>品<rt>しな</rt></ruby><ruby>物<rt>もの</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶと」（如果仅凭主观臆断去挑选物品的话）。</p>
                    <p><strong class="text-textMain">第三步：确立反面结果与句尾呼应。</strong>动作发生后，接续表示与预期相反的 N2 句型选项 2「<ruby>喜<rt>よろこ</rt></ruby>ばれるどころか」（别说被喜欢了，反而），引出负面结果选项 3「<ruby>迷<rt>めい</rt></ruby><ruby>惑<rt>わく</rt></ruby>をかけることもあるので」（有时还会给对方造成困扰，所以），最后顺接句尾的建议「<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby>や<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>をよく<ruby>考<rt>かんが</rt></ruby>えて<ruby>決<rt>き</rt></ruby>めましょう」（仔细考虑对方的喜好和方便与否再做决定吧）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>赠送礼物的时候，如果仅凭自己一厢情愿的主观臆断去挑选物品的话，别说让对方高兴了，有时反而会给对方造成困扰，所以还是仔细考虑对方的喜好和情况再做决定吧。
                    </p>
                `
            }
];
