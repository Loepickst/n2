window.sortQuestionBanks = window.sortQuestionBanks || {};

window.sortQuestionBanks.N3 = [// ---------------- 2010年7月 (N3) ----------------
            {
                id: "n3_1007_1",
                level: "N3",
                year: "2010年7月",
                label: "問題8 - 1",
                prefix: "①、A「じゃあ、あしたはコンサート<ruby>会<rt>かい</rt></ruby><ruby>場<rt>じょう</rt></ruby>の<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>に5<ruby>時<rt>じ</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まりませんか。」<br>B「コンサートは7<ruby>時<rt>じ</rt></ruby>からですから、そんなに",
                suffix: "と<ruby>思<rt>おも</rt></ruby>いますよ。」",
                options: [
                    { id: "1", text: "<ruby>早<rt>はや</rt></ruby>く" },
                    { id: "2", text: "<ruby>開<rt>あ</rt></ruby>いていない" },
                    { id: "3", text: "まだ" },
                    { id: "4", text: "<ruby>行<rt>い</rt></ruby>っても" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度副词修饰。</strong>题干「そんなに」（那么）后接续副词选项 1「<ruby>早<rt>はや</rt></ruby>く」（早），修饰动词选项 4「<ruby>行<rt>い</rt></ruby>っても」（即使去），构成「そんなに<ruby>早<rt>はや</rt></ruby>く<ruby>行<rt>い</rt></ruby>っても」（即使去那么早）。</p>
                    <p><strong class="text-textMain">第二步：确立状态副词修饰。</strong>副词选项 3「まだ」（还）接续状态否定选项 2「<ruby>開<rt>あ</rt></ruby>いていない」（没开门），构成「まだ<ruby>開<rt>あ</rt></ruby>いていない」（也还没开门）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意与句尾。</strong>将前后两部分相连，顺接句尾的「と<ruby>思<rt>おも</rt></ruby>いますよ」（我认为）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“那么，明天5点在演唱会会场的入口处集合怎么样？” B：“演唱会是7点开始的，所以我觉得即使去那么早也还没开门哦。”
                    </p>
                `
            },
            {
                id: "n3_1007_2",
                level: "N3",
                year: "2010年7月",
                label: "問題8 - 2",
                prefix: "②、（<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby><ruby>室<rt>しつ</rt></ruby>で）<br><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>はいらっしゃいますか。」<br><ruby>秘<rt>ひ</rt></ruby><ruby>書<rt>しょ</rt></ruby>「<ruby>今<rt>いま</rt></ruby>、ほかの<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>と<ruby>話<rt>はな</rt></ruby>して",
                suffix: "ください。」",
                options: [
                    { id: "1", text: "すこし" },
                    { id: "2", text: "から" },
                    { id: "3", text: "<ruby>待<rt>ま</rt></ruby>って" },
                    { id: "4", text: "いらっしゃいます" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立敬语动词连接。</strong>题干「<ruby>話<rt>はな</rt></ruby>して」（正在说）后接续尊他语形式选项 4「いらっしゃいます」，构成「<ruby>話<rt>はな</rt></ruby>していらっしゃいます」（正在交谈）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与顺接。</strong>动词后接续表示原因的助词选项 2「から」，构成「<ruby>話<rt>はな</rt></ruby>していらっしゃいますから」（因为正在交谈，所以）。</p>
                    <p><strong class="text-textMain">第三步：确立副词与请求。</strong>副词选项 1「すこし」（稍微）修饰动作选项 3「<ruby>待<rt>ま</rt></ruby>って」（等），并与句尾的「ください」（请）相连，构成「すこし<ruby>待<rt>ま</rt></ruby>ってください」（请稍等一下）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在田中老师的研究室）学生：“田中老师在吗？” 秘书：“现在正和其他学生交谈着呢，请稍等一下。”
                    </p>
                `
            },
            {
                id: "n3_1007_3",
                level: "N3",
                year: "2010年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>父<rt>ちち</rt></ruby>も<ruby>私<rt>わたし</rt></ruby>も、<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>にち</rt></ruby>はかさがなくても",
                suffix: "が、<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られてしまった。",
                options: [
                    { id: "1", text: "だろう" },
                    { id: "2", text: "と<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "3", text: "<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>" },
                    { id: "4", text: "<ruby>出<rt>で</rt></ruby>かけた" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立推测内容。</strong>题干「かさがなくても」（即使没带伞）后接续选项 3「<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>」（没关系），并接续推测助动词选项 1「だろう」（吧），构成「かさがなくても<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>だろう」（即使没带伞也应该没关系吧）。</p>
                    <p><strong class="text-textMain">第二步：确立思考内容。</strong>推测内容后接续表示思考及引用的选项 2「と<ruby>思<rt>おも</rt></ruby>って」（这样想着），构成「<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>だろうと<ruby>思<rt>おも</rt></ruby>って」（想着应该没关系）。</p>
                    <p><strong class="text-textMain">第三步：确立动作与句尾。</strong>思考后接续实际行动选项 4「<ruby>出<rt>で</rt></ruby>かけた」（出门了），并与句尾的逆接助词「が」相连，构成「～<ruby>出<rt>で</rt></ruby>かけたが」（出门了，但是）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>父亲和我都想着今天即使没带伞应该也没关系便出门了，结果却被雨淋了。
                    </p>
                `
            },
            {
                id: "n3_1007_4",
                level: "N3",
                year: "2010年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったら、<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby>",
                suffix: "<ruby>見<rt>み</rt></ruby>ることができました。",
                options: [
                    { id: "1", text: "<ruby>生<rt>う</rt></ruby>まれた" },
                    { id: "2", text: "ライオンの" },
                    { id: "3", text: "ばかりの" },
                    { id: "4", text: "<ruby>赤<rt>あか</rt></ruby>ちゃんを" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作与时间限定。</strong>题干时间词「<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby>」（上个月）后接续动词选项 1「<ruby>生<rt>う</rt></ruby>まれた」（出生了），并接续表示动作刚刚完成的句型选项 3「ばかりの」（刚刚……的），构成「<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>生<rt>う</rt></ruby>まれたばかりの」（上个月刚出生的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该连体修饰语修饰名词选项 2「ライオンの」（狮子的），构成「<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>生<rt>う</rt></ruby>まれたばかりのライオンの」（上个月刚出生的狮子的）。</p>
                    <p><strong class="text-textMain">第三步：确立宾语与句尾。</strong>进一步修饰名词中心语及宾语助词选项 4「<ruby>赤<rt>あか</rt></ruby>ちゃんを」（婴儿），并与句尾的「<ruby>見<rt>み</rt></ruby>ることができました」（能够看到）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天去了动物园，看到了上个月刚出生的狮子宝宝。
                    </p>
                `
            },
            {
                id: "n3_1007_5",
                level: "N3",
                year: "2010年7月",
                label: "問題8 - 5",
                prefix: "⑤、ジョン「この『りかい』という<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>はどういう<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>ですか。」<br>アリ「ああ、<ruby>確<rt>たし</rt></ruby>か『わかる』",
                suffix: "んですけど。」",
                options: [
                    { id: "1", text: "<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>だった" },
                    { id: "2", text: "という" },
                    { id: "3", text: "と<ruby>思<rt>おも</rt></ruby>う" },
                    { id: "4", text: "ような" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立内容引用与比况。</strong>题干引用内容「『わかる』」后接续选项 2「という」（叫做），并接续比况助动词选项 4「ような」（像……这样的），构成「『わかる』というような」（像“明白”这样的）。</p>
                    <p><strong class="text-textMain">第二步：确立名词修饰与时态。</strong>该连体修饰语修饰名词及过去时态选项 1「<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>だった」（意思是），构成「『わかる』というような<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>だった」（是像“明白”这样的意思）。</p>
                    <p><strong class="text-textMain">第三步：确立思考推测与句尾。</strong>后接表示思考推测的选项 3「と<ruby>思<rt>おも</rt></ruby>う」（我认为），与句尾的「んですけど」（的）相连。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>约翰：“这个‘りかい’（理解）的词是什么意思呢？” 阿里：“啊，我记得应该是像‘明白’这样的意思。”
                    </p>
                `
            },
            // ---------------- 2011年7月 (N3) ----------------
            {
                id: "n3_1107_1",
                level: "N3",
                year: "2011年7月",
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
                    <p><strong class="text-textMain">第一步：确立动作先后关系。</strong>题干「コンビニに」（去便利店）后接续动作选项 2「<ruby>行<rt>い</rt></ruby>って」（去），再接续买东西的动作选项 4「<ruby>買<rt>か</rt></ruby>って」（买），构成「コンビニに<ruby>行<rt>い</rt></ruby>って<ruby>買<rt>か</rt></ruby>って」（去便利店买了之后）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与后续动作。</strong>动作后接续表示回来的选项 1「きますから」（就回来，所以），并接续动作选项 3「<ruby>待<rt>ま</rt></ruby>って」（等），构成「<ruby>買<rt>か</rt></ruby>ってきますから<ruby>待<rt>ま</rt></ruby>って」（买完就回来，所以请等一下）。</p>
                    <p><strong class="text-textMain">第三步：确立补助动词与句尾。</strong>动作后接续句尾的补助动词祈使态「いてください」（请保持……状态），构成「<ruby>待<rt>ま</rt></ruby>っていてください」（请在这里等我）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“啊，饮料没有了呢。” B：“那我稍微去趟便利店买完就回来，请在这里等我。” A：“我也一起去买。”
                    </p>
                `
            },
            {
                id: "n3_1107_2",
                level: "N3",
                year: "2011年7月",
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
                    <p><strong class="text-textMain">第一步：确立动作对象与谓语。</strong>题干「このまま」（就这样）后接续针对计划的动作选项 4「<ruby>進<rt>すす</rt></ruby>めるかやめるか」（是推进还是放弃），构成「この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>をこのまま<ruby>進<rt>すす</rt></ruby>めるかやめるか」（关于这个计划是就这样推进还是放弃）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与后续动作。</strong>接续表示无论如何的副词选项 2「いずれにしても」（无论如何 / 总之），后接续动作选项 3「<ruby>早<rt>そう</rt></ruby><ruby>急<rt>きゅう</rt></ruby>に<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す」（尽早得出结论），构成「いずれにしても<ruby>早<rt>そう</rt></ruby><ruby>急<rt>きゅう</rt></ruby>に<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す」（总之都要尽早得出结论）。</p>
                    <p><strong class="text-textMain">第三步：确立必要性与句尾。</strong>动作后接续表示必要性的名词短语选项 1「<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある」（有……的必要），并与句尾的推测助动词「だろう」（吧）相连。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于这个计划是就这样推进还是放弃，总之都有必要尽早得出结论吧。
                    </p>
                `
            },
            {
                id: "n3_1107_3",
                level: "N3",
                year: "2011年7月",
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
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立书面引用内容。</strong>题干「<ruby>持<rt>じ</rt></ruby><ruby>参<rt>さん</rt></ruby>」（带来）后接续表示书面要求的选项 3「のことと」（带……这件事），再接续存在动词与逆接助词选项 1「ありますが」（虽然写着……，但是），构成「<ruby>持<rt>じ</rt></ruby><ruby>参<rt>さん</rt></ruby>のこととありますが」（虽然写着要自带，但是）。</p>
                    <p><strong class="text-textMain">第二步：确立数量疑问词。</strong>逆接后接续表示数量疑问的选项 2「だいたい<ruby>何<rt>なん</rt></ruby><ruby>枚<rt>まい</rt></ruby>ぐらい」（大概多少张左右）。</p>
                    <p><strong class="text-textMain">第三步：确立条件与句尾。</strong>疑问词后接续假定条件选项 4「<ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>すれば」（如果准备的话），并与句尾的「<ruby>足<rt>た</rt></ruby>りるのでしょうか」（够用吗）相连，构成「だいたい<ruby>何<rt>なん</rt></ruby><ruby>枚<rt>まい</rt></ruby>ぐらい<ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>すれば<ruby>足<rt>た</rt></ruby>りるのでしょうか」（大概准备多少张左右才够用呢）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“关于下周登山的携带物品我有个问题。发下来的讲义上虽然写着要自带塑料袋，但大概准备多少张左右才够用呢？”
                    </p>
                `
            },
            {
                id: "n3_1107_4",
                level: "N3",
                year: "2011年7月",
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
                    <p><strong class="text-textMain">第一步：确立目的与动作。</strong>题干「<ruby>何<rt>なに</rt></ruby>か<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>があって」（带有某种目的）后接续动作选项 4「その<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った」（去了那个地方），构成「<ruby>何<rt>なに</rt></ruby>か<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>があってその<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った」（带着某种目的去了那个地方）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接与疑问。</strong>动作后接续表示转折的逆接助词选项 3「はずなのに」（明明本应该……却），后接续疑问小句选项 1「<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか」（到底是去做什么的），构成「<ruby>行<rt>い</rt></ruby>ったはずなのに<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか」（明明应该是去了，却不知是去做什么的）。</p>
                    <p><strong class="text-textMain">第三步：确立结果状态与句尾。</strong>疑问小句后接续结果选项 2「<ruby>忘<rt>わす</rt></ruby>れてしまう」（忘记了），并与句尾的「ということがよくある」（这种事经常发生）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>带着某种目的去了那个地方，明明应该是去了，却忘记了到底是去做什么的，这种事情经常发生。
                    </p>
                `
            },
            {
                id: "n3_1107_5",
                level: "N3",
                year: "2011年7月",
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
                    <p><strong class="text-textMain">第一步：确立连体修饰与举例。</strong>题干「<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>卓<rt>たく</rt></ruby>に」（在日本的餐桌上）后接续连体修饰语选项 1「<ruby>欠<rt>か</rt></ruby>かせない」（不可或缺的），修饰举例名词选项 4「みそやしょうゆといった」（诸如味增和酱油之类的），构成「<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>卓<rt>たく</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせないみそやしょうゆといった」（日本餐桌上不可或缺的味增和酱油等）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰范围。</strong>举例名词后接续所属类别选项 3「<ruby>調<rt>ちょう</rt></ruby><ruby>味<rt>み</rt></ruby><ruby>料<rt>りょう</rt></ruby>の」（调味料的），构成「みそやしょうゆといった<ruby>調<rt>ちょう</rt></ruby><ruby>味<rt>み</rt></ruby><ruby>料<rt>りょう</rt></ruby>の」（味增和酱油等调味料的）。</p>
                    <p><strong class="text-textMain">第三步：确立原料关系与句尾。</strong>后接续表示构成关系的选项 2「<ruby>原<rt>げん</rt></ruby><ruby>料<rt>りょう</rt></ruby>となる」（作为原料的），修饰句尾名词「<ruby>大<rt>だい</rt></ruby><ruby>豆<rt>ず</rt></ruby>だが」（大豆，但是）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>作为日本餐桌上不可或缺的味增和酱油等调味料的原料的大豆，在日本国内生产的却很少，据说其大部分都依赖于从海外进口。
                    </p>
                `
            },
            // ---------------- 2011年12月 (N3) ----------------
            {
                id: "n3_1112_1",
                level: "N3",
                year: "2011年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>中<rt>なか</rt></ruby><ruby>山<rt>やま</rt></ruby>「<ruby>上<rt>うえ</rt></ruby><ruby>田<rt>だ</rt></ruby>さんは、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にこの<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が<ruby>好<rt>す</rt></ruby>きなんですね。」<br><ruby>上<rt>うえ</rt></ruby><ruby>田<rt>だ</rt></ruby>「はい、わたしは、",
                suffix: "ないと<ruby>思<rt>おも</rt></ruby>っているんです。」",
                options: [
                    { id: "1", text: "ほど" },
                    { id: "2", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>は" },
                    { id: "3", text: "これ" },
                    { id: "4", text: "おもしろい" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度比较。</strong>指示代词选项 3「これ」（这个）后接续表示程度的选项 1「ほど」（像……一样），构成「これほど」（像这般 / 如此）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>程度短语后接续形容词选项 4「おもしろい」（有趣的），修饰名词及提示助词选项 2「<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>は」（工作），构成「これほどおもしろい<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>は」（像这般有趣的工作）。</p>
                    <p><strong class="text-textMain">第三步：确立最上级句型与句尾。</strong>将上述主语短语与句尾的否定表达「ないと<ruby>思<rt>おも</rt></ruby>っているんです」（我认为是没有的）相连，构成「～ほど～はない」（没有比……更……的）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>中山：“上田先生，您真的很喜欢这份工作呢。” 上田：“是的，我认为没有比这更有趣的工作了。”
                    </p>
                `
            },
            {
                id: "n3_1112_2",
                level: "N3",
                year: "2011年12月",
                label: "問題8 - 2",
                prefix: "②、この<ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>には、19<ruby>世<rt>せい</rt></ruby><ruby>紀<rt>き</rt></ruby>の",
                suffix: "たくさんあります。",
                options: [
                    { id: "1", text: "よって" },
                    { id: "2", text: "<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby>たちに" },
                    { id: "3", text: "<ruby>絵<rt>え</rt></ruby>が" },
                    { id: "4", text: "<ruby>描<rt>えが</rt></ruby>かれた" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立被动句的动作主体。</strong>题干「19<ruby>世<rt>せい</rt></ruby><ruby>紀<rt>き</rt></ruby>の」（19世纪的）后接续人物名词选项 2「<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby>たちに」（画家们），再接续表示被动动作主体的复合助词选项 1「よって」（由……），构成「19<ruby>世<rt>せい</rt></ruby><ruby>紀<rt>き</rt></ruby>の<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby>たちによって」（由19世纪的画家们）。</p>
                    <p><strong class="text-textMain">第二步：确立被动动作。</strong>动作主体后接续被动动词连体形选项 4「<ruby>描<rt>えが</rt></ruby>かれた」（被画出的），构成「<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby>たちによって<ruby>描<rt>えが</rt></ruby>かれた」（由画家们画出的）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>该连体修饰语修饰名词主语选项 3「<ruby>絵<rt>え</rt></ruby>が」（画），并与句尾的存在动词「たくさんあります」（有很多）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在这家美术馆里，有很多由19世纪的画家们创作的画。
                    </p>
                `
            },
            {
                id: "n3_1112_3",
                level: "N3",
                year: "2011年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>のパーティーは、<ruby>友<rt>とも</rt></ruby>だちと<ruby>話<rt>はな</rt></ruby>していたら、ほとんど",
                suffix: "、あとでおなかがすいてしまった。",
                options: [
                    { id: "1", text: "<ruby>終<rt>お</rt></ruby>わってしまって" },
                    { id: "2", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "3", text: "うちに" },
                    { id: "4", text: "<ruby>食<rt>た</rt></ruby>べない" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立全面否定。</strong>题干「ほとんど」（几乎）后接续表示全面否定的疑问词加助词选项 2「<ruby>何<rt>なに</rt></ruby>も」（什么也），再接续否定动词选项 4「<ruby>食<rt>た</rt></ruby>べない」（不吃），构成「ほとんど<ruby>何<rt>なに</rt></ruby>も<ruby>食<rt>た</rt></ruby>べない」（几乎什么都没吃）。</p>
                    <p><strong class="text-textMain">第二步：确立期间句型。</strong>否定状态后接续表示期间的 N3 句型选项 3「うちに」（在……状态下 / 趁着还没……），构成「<ruby>食<rt>た</rt></ruby>べないうちに」（在还没吃的时候）。</p>
                    <p><strong class="text-textMain">第三步：确立动作发生与顺接。</strong>期间后接续动作完成及遗憾表达选项 1「<ruby>終<rt>お</rt></ruby>わってしまって」（就结束了，并且），顺接句尾的「あとでおなかがすいてしまった」（后来肚子就饿了）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天的派对，因为一直和朋友聊天，几乎什么都没吃就结束了，后来肚子就饿了。
                    </p>
                `
            },
            {
                id: "n3_1112_4",
                level: "N3",
                year: "2011年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>夏<rt>なつ</rt></ruby><ruby>休<rt>やす</rt></ruby>みに<ruby>行<rt>おこな</rt></ruby>われた<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>での<ruby>実<rt>じっ</rt></ruby><ruby>習<rt>しゅう</rt></ruby>は、わたしにとって、<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>で",
                suffix: "いい<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>になった。",
                options: [
                    { id: "1", text: "<ruby>考<rt>かんが</rt></ruby>える" },
                    { id: "2", text: "というのが" },
                    { id: "3", text: "<ruby>働<rt>はたら</rt></ruby>く" },
                    { id: "4", text: "どういうことか" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作与话题提示。</strong>题干「<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>で」（在企业）后接续动作选项 3「<ruby>働<rt>はたら</rt></ruby>く」（工作），再接续形式名词及提示助词选项 2「というのが」（这件事 / 也就是），构成「<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くというのが」（在企业工作这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问小句。</strong>引出对该话题的疑问，即选项 4「どういうことか」（是怎么一回事），构成「～というのがどういうことか」（所谓……是怎么一回事）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>该疑问小句作为后续思考动作的内容，接续动词连体形选项 1「<ruby>考<rt>かんが</rt></ruby>える」（思考），并修饰句尾的「いい<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>になった」（成为了一个好机会）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>暑假期间在公司进行的实习，对我来说，成为了一个思考所谓在企业工作到底是怎么一回事的好机会。
                    </p>
                `
            },
            {
                id: "n3_1112_5",
                level: "N3",
                year: "2011年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>母<rt>はは</rt></ruby>は「<ruby>風<rt>かぜ</rt></ruby>をひかないのは、",
                suffix: "。」とよく<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "ジョギングを" },
                    { id: "2", text: "している" },
                    { id: "3", text: "おかげだ" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语与宾语。</strong>题干「<ruby>風<rt>かぜ</rt></ruby>をひかないのは、」（不感冒的原因是，）后接续频度副词选项 4「<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>」（每天早晨），修饰宾语选项 1「ジョギングを」（慢跑），构成「<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>ジョギングを」（每天早晨慢跑）。</p>
                    <p><strong class="text-textMain">第二步：确立动作与连体形。</strong>宾语后接续动作连体形选项 2「している」（正在做 / 坚持做），构成「<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>ジョギングをしている」（每天早晨坚持慢跑）。</p>
                    <p><strong class="text-textMain">第三步：确立原因句型与句尾。</strong>连体修饰语后接续表示积极原因的句型选项 3「おかげだ」（多亏了……的福），与句首的形式名词「のは」构成呼应，并与句尾的「。」とよく<ruby>言<rt>い</rt></ruby>っている（经常这么说）相连。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>母亲经常说：“之所以不感冒，多亏了每天早晨坚持慢跑的福。”
                    </p>
                `
            },
            // ---------------- 2012年7月 (N3) ----------------
            {
                id: "n3_1207_1",
                level: "N3",
                year: "2012年7月",
                label: "問題8 - 1",
                prefix: "①、（<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で）<br><ruby>配<rt>はい</rt></ruby><ruby>達<rt>たつ</rt></ruby><ruby>員<rt>いん</rt></ruby>「お<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もつ</rt></ruby>の<ruby>配<rt>はい</rt></ruby><ruby>達<rt>たつ</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>ですが、<ruby>明<rt>あした</rt></ruby><ruby>日<rt></rt></ruby>の<ruby>夜<rt>よる</rt></ruby>8<ruby>時<rt>じ</rt></ruby>ごろでいかがですか。」<br><ruby>客<rt>きゃく</rt></ruby>「その",
                suffix: "ので<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>です。お<ruby>願<rt>ねが</rt></ruby>いします。」",
                options: [
                    { id: "1", text: "と<ruby>思<rt>おも</rt></ruby>う" },
                    { id: "2", text: "<ruby>多<rt>た</rt></ruby><ruby>分<rt>ぶん</rt></ruby>" },
                    { id: "3", text: "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>は" },
                    { id: "4", text: "<ruby>家<rt>いえ</rt></ruby>にいる" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立指示代词接续。</strong>题干「その」（那个）后接续名词选项 3「<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>は」（时间），构成「その<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>は」（那个时间）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与动作状态。</strong>副词选项 2「<ruby>多<rt>た</rt></ruby><ruby>分<rt>ぶん</rt></ruby>」（大概）修饰动作状态选项 4「<ruby>家<rt>いえ</rt></ruby>にいる」（在家），构成「<ruby>多<rt>た</rt></ruby><ruby>分<rt>ぶん</rt></ruby><ruby>家<rt>いえ</rt></ruby>にいる」（大概在家）。</p>
                    <p><strong class="text-textMain">第三步：确立推测与句尾。</strong>将上述状态接续推测表达选项 1「と<ruby>思<rt>おも</rt></ruby>う」（我认为），并与句尾的原因助词「ので」（因为）相连，构成「～<ruby>家<rt>いえ</rt></ruby>にいると<ruby>思<rt>おも</rt></ruby>うので」（我认为大概在家，所以）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在电话里）派送员：“关于您包裹的派送时间，明晚8点左右如何？” 客人：“那个时间我应该大概在家，所以没关系。拜托您了。”
                    </p>
                `
            },
            {
                id: "n3_1207_2",
                level: "N3",
                year: "2012年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>山<rt>やま</rt></ruby><ruby>下<rt>した</rt></ruby>「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さん、ABC<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>のリュウ<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていますか。」<br><ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「",
                suffix: "ありません。」",
                options: [
                    { id: "1", text: "ありますが" },
                    { id: "2", text: "<ruby>会<rt>あ</rt></ruby>ったことは" },
                    { id: "3", text: "<ruby>聞<rt>き</rt></ruby>いたことが" },
                    { id: "4", text: "お<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>は" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立话题与经历。</strong>选项 4「お<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>は」（名字）接续经历表达选项 3「<ruby>聞<rt>き</rt></ruby>いたことが」（听说过），构成「お<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>は<ruby>聞<rt>き</rt></ruby>いたことが」（名字听说过）。</p>
                    <p><strong class="text-textMain">第二步：确立存在与转折。</strong>经历表达后接续存在动词及转折助词选项 1「ありますが」（虽然有，但是），构成「お<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>は<ruby>聞<rt>き</rt></ruby>いたことがありますが」（名字虽然听说过，但是）。</p>
                    <p><strong class="text-textMain">第三步：确立对比与句尾。</strong>转折后接续与“听”相对的经历选项 2「<ruby>会<rt>あ</rt></ruby>ったことは」（见面的事），并与句尾的否定表达「ありません」（没有）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>山下：“田中先生，您认识ABC大学的刘老师吗？” 田中：“名字虽然听说过，但没有见过面。”
                    </p>
                `
            },
            {
                id: "n3_1207_3",
                level: "N3",
                year: "2012年7月",
                label: "問題8 - 3",
                prefix: "③、わたしが",
                suffix: "<ruby>京<rt>きょう</rt></ruby><ruby>都<rt>と</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>山<rt>ざん</rt></ruby><ruby>寺<rt>じ</rt></ruby>がある。",
                options: [
                    { id: "1", text: "<ruby>行<rt>い</rt></ruby>ってみたい" },
                    { id: "2", text: "ひとつに" },
                    { id: "3", text: "もっとも" },
                    { id: "4", text: "<ruby>寺<rt>てら</rt></ruby>の" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立副词与动作。</strong>题干主语「わたしが」（我）后接续程度副词选项 3「もっとも」（最），修饰愿望动作选项 1「<ruby>行<rt>い</rt></ruby>ってみたい」（想去的），构成「わたしがもっとも<ruby>行<rt>い</rt></ruby>ってみたい」（我最想去的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该部分作为定语，修饰地点名词选项 4「<ruby>寺<rt>てら</rt></ruby>の」（寺庙的），构成「～<ruby>行<rt>い</rt></ruby>ってみたい<ruby>寺<rt>てら</rt></ruby>の」（想去的寺庙的）。</p>
                    <p><strong class="text-textMain">第三步：确立范围限定与句尾。</strong>名词后接续表示范围的选项 2「ひとつに」（其中之一是），顺接句尾的存在动词句「<ruby>京<rt>きょう</rt></ruby><ruby>都<rt>と</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>山<rt>ざん</rt></ruby><ruby>寺<rt>じ</rt></ruby>がある」（有京都的高山寺）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在我最想去的寺庙之中，其中之一就是京都的高山寺。
                    </p>
                `
            },
            {
                id: "n3_1207_4",
                level: "N3",
                year: "2012年7月",
                label: "問題8 - 4",
                prefix: "④、『プレゼント』という<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>",
                suffix: "<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>はないと<ruby>思<rt>おも</rt></ruby>った。",
                options: [
                    { id: "1", text: "ほど" },
                    { id: "2", text: "について" },
                    { id: "3", text: "<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "4", text: "<ruby>考<rt>かんが</rt></ruby>えさせられる" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准。</strong>题干「この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>」（这部电影）后接续表示程度的助词选项 1「ほど」（像……这样），构成「この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>ほど」（像这部电影一样）。</p>
                    <p><strong class="text-textMain">第二步：确立思考对象。</strong>选项 3「<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>」（人生）后接续复合助词选项 2「について」（关于），构成「<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>について」（关于人生）。</p>
                    <p><strong class="text-textMain">第三步：确立被役态与句尾。</strong>思考对象后接续使役被动动词选项 4「<ruby>考<rt>かんが</rt></ruby>えさせられる」（让人思考），并整体作为连体修饰语，修饰句尾的名词「<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>はないと<ruby>思<rt>おも</rt></ruby>った」（我认为没有这样的电影了）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>看了名为《礼物》的电影，我认为没有比这部电影更让人思考人生的电影了。
                    </p>
                `
            },
            {
                id: "n3_1207_5",
                level: "N3",
                year: "2012年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>友<rt>とも</rt></ruby>だちからの",
                suffix: "。",
                options: [
                    { id: "1", text: "すっかり<ruby>忘<rt>わす</rt></ruby>れていた" },
                    { id: "2", text: "メールが<ruby>来<rt>く</rt></ruby>るまで" },
                    { id: "3", text: "ということを" },
                    { id: "4", text: "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>にち</rt></ruby>がレポートのしめ<ruby>切<rt>き</rt></ruby>り<ruby>日<rt>ひ</rt></ruby>だった" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间起点。</strong>题干「<ruby>友<rt>とも</rt></ruby>だちからの」（来自朋友的）后接续名词结构选项 2「メールが<ruby>来<rt>く</rt></ruby>るまで」（直到邮件发来为止），构成「<ruby>友<rt>とも</rt></ruby>だちからのメールが<ruby>来<rt>く</rt></ruby>るまで」（直到收到朋友发来的邮件为止）。</p>
                    <p><strong class="text-textMain">第二步：确立宾语内容。</strong>引出忘记的具体事件，即选项 4「<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>にち</rt></ruby>がレポートのしめ<ruby>切<rt>き</rt></ruby>り<ruby>日<rt>ひ</rt></ruby>だった」（今天是报告的截止日期），后接形式名词短语选项 3「ということを」（这件事），构成完整的宾语。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动词。</strong>宾语后接续谓语动词选项 1「すっかり<ruby>忘<rt>わす</rt></ruby>れていた」（完全忘记了），与句尾相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>直到收到朋友发来的邮件为止，我完全忘记了今天是报告的截止日期这件事。
                    </p>
                `
            },
            // ---------------- 2012年12月 (N3) ----------------
            {
                id: "n3_1212_1",
                level: "N3",
                year: "2012年12月",
                label: "問題8 - 1",
                prefix: "①、A「<ruby>片<rt>かた</rt></ruby>づけはあしたにしますか。」<br>B「あしたは<ruby>朝<rt>あさ</rt></ruby>から",
                suffix: "ましょう。」",
                options: [
                    { id: "1", text: "<ruby>忙<rt>いそが</rt></ruby>しくなり" },
                    { id: "2", text: "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>じゅう</rt></ruby>に" },
                    { id: "3", text: "そうですし" },
                    { id: "4", text: "やってしまい" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立推测理由。</strong>题干「あしたは<ruby>朝<rt>あさ</rt></ruby>から」（明天从早上开始）后接动词连用形选项 1「<ruby>忙<rt>いそが</rt></ruby>しくなり」（变忙），再接续样态助动词及理由助词选项 3「そうですし」（看样子会……并且），构成「あしたは<ruby>朝<rt>あさ</rt></ruby>から<ruby>忙<rt>いそが</rt></ruby>しくなりそうですし」（明天从早开始看样子会变忙，所以）。</p>
                    <p><strong class="text-textMain">第二步：确立时间状语与动作。</strong>在交代理由后，接续时间状语选项 2「<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>じゅう</rt></ruby>に」（在今天之内），修饰动作完成的表达选项 4「やってしまい」（彻底做完）。</p>
                    <p><strong class="text-textMain">第三步：确立劝诱句型与句尾。</strong>将上述动作与句尾的劝诱表达「ましょう」（吧）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“收拾整理留到明天做吗？” B：“明天从早开始看样子会变忙，我们就在今天之内把它彻底做完吧。”
                    </p>
                `
            },
            {
                id: "n3_1212_2",
                level: "N3",
                year: "2012年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>って、<ruby>娘<rt>むすめ</rt></ruby>に<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で",
                suffix: "<ruby>幸<rt>しあわ</rt></ruby>せだといつも<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>は<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に" },
                    { id: "2", text: "「おかえり。」と<ruby>言<rt>い</rt></ruby>われると" },
                    { id: "3", text: "<ruby>娘<rt>むすめ</rt></ruby>がいる" },
                    { id: "4", text: "こんなかわいい" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件状语。</strong>题干「<ruby>娘<rt>むすめ</rt></ruby>に<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で」（被女儿微笑着）后接续被动动作及条件选项 2「『おかえり。』と<ruby>言<rt>い</rt></ruby>われると」（对我说“欢迎回家”时），构成「<ruby>娘<rt>むすめ</rt></ruby>に<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で『おかえり。』と<ruby>言<rt>い</rt></ruby>われると」。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰。</strong>指示词连体修饰语选项 4「こんなかわいい」（如此可爱的）修饰存在句选项 3「<ruby>娘<rt>むすめ</rt></ruby>がいる」（有女儿），构成「こんなかわいい<ruby>娘<rt>むすめ</rt></ruby>がいる」（有如此可爱的女儿的）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>将该连体修饰语整体作为定语，修饰主语选项 1「<ruby>私<rt>わたし</rt></ruby>は<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に」（我真的），并与句尾的「<ruby>幸<rt>しあわ</rt></ruby>せだといつも<ruby>思<rt>おも</rt></ruby>う」（总是觉得很幸福）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>下班回家，当被女儿笑着对我说“欢迎回家”时，我总是想，有如此可爱的女儿的我真的很幸福。
                    </p>
                `
            },
            {
                id: "n3_1212_3",
                level: "N3",
                year: "2012年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>川<rt>かわ</rt></ruby><ruby>名<rt>な</rt></ruby><ruby>寺<rt>でら</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>が",
                suffix: "<ruby>秋<rt>あき</rt></ruby>の<ruby>景<rt>け</rt></ruby><ruby>色<rt>しき</rt></ruby>もすばらしいです。",
                options: [
                    { id: "1", text: "<ruby>桜<rt>さくら</rt></ruby>だけでなく" },
                    { id: "2", text: "ことで" },
                    { id: "3", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>ですが" },
                    { id: "4", text: "きれいな" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因连体修饰。</strong>题干「<ruby>桜<rt>さくら</rt></ruby>が」后接形容动词连体形选项 4「きれいな」（漂亮的），修饰形式名词选项 2「ことで」，构成表示原因的「<ruby>桜<rt>さくら</rt></ruby>がきれいなことで」（因为樱花漂亮而）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接关系。</strong>后接评价谓语及逆接助词选项 3「<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>ですが」（虽然很有名，但是），构成「<ruby>桜<rt>さくら</rt></ruby>がきれいなことで<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>ですが」。</p>
                    <p><strong class="text-textMain">第三步：确立递进呼应与句尾。</strong>在转折后接续表示递进的选项 1「<ruby>桜<rt>さくら</rt></ruby>だけでなく」（不仅是樱花），与后文的「<ruby>秋<rt>あき</rt></ruby>の<ruby>景<rt>け</rt></ruby><ruby>色<rt>しき</rt></ruby>も」（秋天的景色也）相呼应，顺接句尾。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>川名寺虽然因为樱花漂亮而闻名，但不仅是樱花，秋天的景色也非常棒。
                    </p>
                `
            },
            {
                id: "n3_1212_4",
                level: "N3",
                year: "2012年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>父<rt>ちち</rt></ruby>はいつも、「<ruby>何<rt>なに</rt></ruby>も",
                suffix: "ほうがいい。」と<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "チャレンジして" },
                    { id: "2", text: "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する" },
                    { id: "3", text: "しないで" },
                    { id: "4", text: "いるより" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准动作。</strong>题干「<ruby>何<rt>なに</rt></ruby>も」（什么也）后接否定动作选项 3「しないで」（不做），再接续状态及比较基准助词选项 4「いるより」（比起保持……的状态），构成「<ruby>何<rt>なに</rt></ruby>もしないでいるより」（比起什么都不做干呆着）。</p>
                    <p><strong class="text-textMain">第二步：确立动作先后。</strong>比较内容的后半部分，先接续动作选项 1「チャレンジして」（去挑战，并且），再接续结果动作选项 2「<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する」（失败），构成「チャレンジして<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する」（去挑战然后失败）。</p>
                    <p><strong class="text-textMain">第三步：确立比较句型与句尾。</strong>将前述比较内容与句尾的建议表达「ほうがいい」相连，构成「～より～ほうがいい」（与其……不如……）的固定搭配。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>父亲总是说：“与其什么都不做干呆着，不如去挑战哪怕失败更好。”
                    </p>
                `
            },
            {
                id: "n3_1212_5",
                level: "N3",
                year: "2012年12月",
                label: "問題8 - 5",
                prefix: "⑤、A「ねえ、<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>日<rt>にち</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>、<ruby>北<rt>きた</rt></ruby><ruby>町<rt>まち</rt></ruby>の<ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない？」<br>B「いいね。あ、<ruby>私<rt>わたし</rt></ruby>、そこの<ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby><ruby>券<rt>けん</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってるよ。その",
                suffix: "になるんだ。」",
                options: [
                    { id: "1", text: "<ruby>三<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>" },
                    { id: "2", text: "<ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby><ruby>券<rt>けん</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby>で" },
                    { id: "3", text: "<ruby>二<rt>に</rt></ruby><ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby>" },
                    { id: "4", text: "まで" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立手段与条件。</strong>题干指示词「その」（那个）后接名词及手段助词选项 2「<ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby><ruby>券<rt>けん</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby>で」（用一张折扣券），构成「その<ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby><ruby>券<rt>けん</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby>で」（用那一张折扣券）。</p>
                    <p><strong class="text-textMain">第二步：确立数量范围限定。</strong>后接数量词选项 1「<ruby>三<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>」，并接续表示界限的助词选项 4「まで」（最多），构成「<ruby>三<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>まで」（最多三个人）。</p>
                    <p><strong class="text-textMain">第三步：确立结果与句尾。</strong>限定范围后接续折扣程度选项 3「<ruby>二<rt>に</rt></ruby><ruby>割<rt>わり</rt></ruby><ruby>引<rt>びき</rt></ruby>」（打八折），直接与句尾的状态变化表达「になるんだ」相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“哎，下周日去北町美术馆吗？” B：“好啊。啊，我有那里的折扣券哦。用那一张折扣券，最多三个人可以打八折呢。”
                    </p>
                `
            },
            // ---------------- 2013年7月 (N3) ----------------
            {
                id: "n3_1307_1",
                level: "N3",
                year: "2013年7月",
                label: "問題8 - 1",
                prefix: "①、（<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>で）<br><ruby>村<rt>むら</rt></ruby><ruby>山<rt>やま</rt></ruby>「すみません。<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>をした<ruby>村<rt>むら</rt></ruby><ruby>山<rt>やま</rt></ruby>ですが。」<br><ruby>受<rt>うけ</rt></ruby><ruby>付<rt>つけ</rt></ruby>「はい、<ruby>村<rt>むら</rt></ruby><ruby>山<rt>やま</rt></ruby>さんですね。では、そちらの",
                suffix: "ください。」",
                options: [
                    { id: "1", text: "お<ruby>待<rt>ま</rt></ruby>ち" },
                    { id: "2", text: "おかけ" },
                    { id: "3", text: "いすに" },
                    { id: "4", text: "になって" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「そちらの」（那边的）后接续名词选项 3「いすに」（在椅子上），构成「そちらのいすに」（在那边的椅子上）。</p>
                    <p><strong class="text-textMain">第二步：确立敬语结构与动作先后。</strong>名词后接续就座的动作，使用尊他语结构「お～になる」，即选项 2「おかけ」加选项 4「になって」，构成「おかけになって」（请坐下，并且）。</p>
                    <p><strong class="text-textMain">第三步：确立后续动作与句尾。</strong>接续后续等待的动作尊他语选项 1「お<ruby>待<rt>ま</rt></ruby>ち」（等待），与句尾的「ください」（请）相连。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在医院里）村山：“不好意思。我是预约过的村山。” 前台：“好的，是村山先生啊。那么，请在那边的椅子上坐下稍等片刻。”
                    </p>
                `
            },
            {
                id: "n3_1307_2",
                level: "N3",
                year: "2013年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>をする",
                suffix: "<ruby>美味<rt>おい</rt></ruby>しく<ruby>作<rt>つく</rt></ruby>れる。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>でも" },
                    { id: "2", text: "ハンバーグだけは" },
                    { id: "3", text: "それほど<ruby>得<rt>とく</rt></ruby><ruby>意<rt>い</rt></ruby>ではない" },
                    { id: "4", text: "のが" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语与评价。</strong>题干动词短语「<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>をする」（做饭）后接形式名词与提示助词选项 4「のが」，作为评价对象，接续否定评价选项 3「それほど<ruby>得<rt>とく</rt></ruby><ruby>意<rt>い</rt></ruby>ではない」（并不是那么擅长）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与让步条件。</strong>该句整体作为连体修饰语，修饰代词及让步助词选项 1「<ruby>私<rt>わたし</rt></ruby>でも」（即便是……的我），构成「<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>をするのがそれほど<ruby>得<rt>とく</rt></ruby><ruby>意<rt>い</rt></ruby>ではない<ruby>私<rt>わたし</rt></ruby>でも」（即便是做饭并不那么擅长的我）。</p>
                    <p><strong class="text-textMain">第三步：确立对比强调与句尾。</strong>人物状语后接续对比限定选项 2「ハンバーグだけは」（唯独汉堡肉），与句尾的「<ruby>美味<rt>おい</rt></ruby>しく<ruby>作<rt>つく</rt></ruby>れる」（能做得好吃）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>即便是做饭并不那么擅长的我，唯独汉堡肉能做得很好吃。
                    </p>
                `
            },
            {
                id: "n3_1307_3",
                level: "N3",
                year: "2013年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>高<rt>たか</rt></ruby><ruby>木<rt>ぎ</rt></ruby>「<ruby>山<rt>やま</rt></ruby><ruby>村<rt>むら</rt></ruby>さんは、いつもポケットにメモ<ruby>帳<rt>ちょう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れているんですか。」<br><ruby>山<rt>やま</rt></ruby><ruby>村<rt>むら</rt></ruby>「はい。<ruby>思<rt>おも</rt></ruby>いついた",
                suffix: "しているんです。」",
                options: [
                    { id: "1", text: "<ruby>忘<rt>わす</rt></ruby>れて" },
                    { id: "2", text: "しまわないように" },
                    { id: "3", text: "<ruby>必<rt>かなら</rt></ruby>ず<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>くように" },
                    { id: "4", text: "アイデアを" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与宾语。</strong>题干动词「<ruby>思<rt>おも</rt></ruby>いついた」（想到的）修饰名词选项 4「アイデアを」（主意 / 想法），构成「<ruby>思<rt>おも</rt></ruby>いついたアイデアを」（想到的主意）。</p>
                    <p><strong class="text-textMain">第二步：确立目的状态。</strong>宾语后接续动作及其否定完成态选项 1「<ruby>忘<rt>わす</rt></ruby>れて」与选项 2「しまわないように」（为了不至于忘记），构成「アイデアを<ruby>忘<rt>わす</rt></ruby>れてしまわないように」（为了不忘记主意）。</p>
                    <p><strong class="text-textMain">第三步：确立习惯动作与句尾。</strong>表示目的的从句后，接续习惯性动作副词及句型前序部分选项 3「<ruby>必<rt>かなら</rt></ruby>ず<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>くように」（一定要随身携带），并与句尾的「しているんです」（保持着……的习惯）相连。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>高木：“山村先生，您总是把备忘录放在口袋里吗？” 山村：“是的。为了不至于忘记想到的主意，我一定会随身携带着。”
                    </p>
                `
            },
            {
                id: "n3_1307_4",
                level: "N3",
                year: "2013年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>も",
                suffix: "<ruby>気<rt>き</rt></ruby>がした。",
                options: [
                    { id: "1", text: "いない" },
                    { id: "2", text: "<ruby>聞<rt>き</rt></ruby>こえた" },
                    { id: "3", text: "<ruby>何<rt>なに</rt></ruby>か<ruby>音<rt>おと</rt></ruby>が" },
                    { id: "4", text: "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>から" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「<ruby>誰<rt>だれ</rt></ruby>も」（谁都）后接续否定存在动词选项 1「いない」（不在），修饰地点名词选项 4「<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>から」（从房间里），构成「<ruby>誰<rt>だれ</rt></ruby>もいない<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>から」（从没人的房间里）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓结构。</strong>从该地点引出主语选项 3「<ruby>何<rt>なに</rt></ruby>か<ruby>音<rt>おと</rt></ruby>が」（某种声音），并接续谓语动词选项 2「<ruby>聞<rt>き</rt></ruby>こえた」（听见了）。</p>
                    <p><strong class="text-textMain">第三步：确立从句与句尾。</strong>将前述的完整小句「～<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>から<ruby>何<rt>なに</rt></ruby>か<ruby>音<rt>おと</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえた」与句尾表示感觉的表达「<ruby>気<rt>き</rt></ruby>がした」（感觉）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天夜里，感觉从没人的房间里听见了某种声音。
                    </p>
                `
            },
            {
                id: "n3_1307_5",
                level: "N3",
                year: "2013年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>現<rt>げん</rt></ruby><ruby>在<rt>ざい</rt></ruby>、<ruby>市<rt>し</rt></ruby><ruby>民<rt>みん</rt></ruby><ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に、<ruby>大<rt>だい</rt></ruby><ruby>小<rt>しょう</rt></ruby>",
                suffix: "<ruby>検<rt>けん</rt></ruby><ruby>討<rt>とう</rt></ruby>されている。",
                options: [
                    { id: "1", text: "<ruby>体<rt>たい</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>館<rt>かん</rt></ruby>を" },
                    { id: "2", text: "<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>する" },
                    { id: "3", text: "<ruby>二<rt>ふた</rt></ruby>つの" },
                    { id: "4", text: "という<ruby>案<rt>あん</rt></ruby>が" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立数量与连体修饰。</strong>题干名词「<ruby>大<rt>だい</rt></ruby><ruby>小<rt>しょう</rt></ruby>」（大小）后接续数量词选项 3「<ruby>二<rt>ふた</rt></ruby>つの」（两个），修饰宾语名词选项 1「<ruby>体<rt>たい</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>館<rt>かん</rt></ruby>を」（体育馆），构成「<ruby>大<rt>だい</rt></ruby><ruby>小<rt>しょう</rt></ruby><ruby>二<rt>ふた</rt></ruby>つの<ruby>体<rt>たい</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>館<rt>かん</rt></ruby>を」（大小两个体育馆）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾结构。</strong>宾语后接续谓语动词选项 2「<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>する」（建设）。</p>
                    <p><strong class="text-textMain">第三步：确立同位语从句与句尾。</strong>将前述动宾短语作为具体内容，接续同位语形式选项 4「という<ruby>案<rt>あん</rt></ruby>が」（……的提案），并与句尾的被动谓语「<ruby>検<rt>けん</rt></ruby><ruby>討<rt>とう</rt></ruby>されている」（正在被探讨）相连。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>目前，在市民运动公园内，建设大小两个体育馆的提案正在被探讨。
                    </p>
                `
            },
            // ---------------- 2013年12月 (N3) ----------------
            {
                id: "n3_1312_1",
                level: "N3",
                year: "2013年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>私<rt>わたし</rt></ruby>は、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>が",
                suffix: "<ruby>見<rt>み</rt></ruby>て、「どうしたの？」と<ruby>声<rt>こえ</rt></ruby>をかけた。",
                options: [
                    { id: "1", text: "<ruby>顔<rt>かお</rt></ruby>を" },
                    { id: "2", text: "<ruby>何<rt>なに</rt></ruby>か" },
                    { id: "3", text: "<ruby>言<rt>い</rt></ruby>いたそうな" },
                    { id: "4", text: "しているのを" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问与连体修饰。</strong>代词选项 2「<ruby>何<rt>なに</rt></ruby>か」（什么）后接续表示样态的连体词选项 3「<ruby>言<rt>い</rt></ruby>いたそうな」（好像想说的），构成「<ruby>何<rt>なに</rt></ruby>か<ruby>言<rt>い</rt></ruby>いたそうな」（好像想说什么的）。</p>
                    <p><strong class="text-textMain">第二步：确立宾语与惯用搭配。</strong>该连体修饰语修饰名词及助词选项 1「<ruby>顔<rt>かお</rt></ruby>を」（脸），并接续构成惯用表达的选项 4「しているのを」（正在做……的表情，并且整体作为宾语），构成「<ruby>何<rt>なに</rt></ruby>か<ruby>言<rt>い</rt></ruby>いたそうな<ruby>顔<rt>かお</rt></ruby>をしているのを」（正在做着好像想说什么的表情）。</p>
                    <p><strong class="text-textMain">第三步：确立主从关系与句尾。</strong>将上述内容作为句尾动作「<ruby>見<rt>み</rt></ruby>て」（看到）的动作对象。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我看到儿子一副好像想说什么的表情，便出声问他：“怎么了？”
                    </p>
                `
            },
            {
                id: "n3_1312_2",
                level: "N3",
                year: "2013年12月",
                label: "問題8 - 2",
                prefix: "②、この<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>は、いろいろな<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きはじめる",
                suffix: "と<ruby>聞<rt>き</rt></ruby>いた。",
                options: [
                    { id: "1", text: "<ruby>最<rt>もっと</rt></ruby>も" },
                    { id: "2", text: "<ruby>時<rt>じ</rt></ruby><ruby>期<rt>き</rt></ruby>が" },
                    { id: "3", text: "<ruby>美<rt>うつく</rt></ruby>しい" },
                    { id: "4", text: "この" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与主语。</strong>题干连体修饰从句「いろいろな<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きはじめる」（各种花开始绽放的）修饰指示代词选项 4「この」及名词主语选项 2「<ruby>時<rt>じ</rt></ruby><ruby>期<rt>き</rt></ruby>が」（时期），构成「<ruby>咲<rt>さ</rt></ruby>きはじめるこの<ruby>時<rt>じ</rt></ruby><ruby>期<rt>き</rt></ruby>が」（开始绽放的这个时期）。</p>
                    <p><strong class="text-textMain">第二步：确立程度副词与谓语。</strong>主语后接续程度副词选项 1「<ruby>最<rt>もっと</rt></ruby>も」（最），修饰形容词谓语选项 3「<ruby>美<rt>うつく</rt></ruby>しい」（美丽的），构成「<ruby>最<rt>もっと</rt></ruby>も<ruby>美<rt>うつく</rt></ruby>しい」（最美丽的）。</p>
                    <p><strong class="text-textMain">第三步：确立传闻句型与句尾。</strong>将前述主谓结构与句尾的传闻表达「と<ruby>聞<rt>き</rt></ruby>いた」（听说是）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说这个公园，各种花开始绽放的这个时期是最美丽的。
                    </p>
                `
            },
            {
                id: "n3_1312_3",
                level: "N3",
                year: "2013年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>がけがで<ruby>入<rt>にゅう</rt></ruby><ruby>院<rt>いん</rt></ruby>したと<ruby>聞<rt>き</rt></ruby>き、あわてて",
                suffix: "<ruby>元<rt>げん</rt></ruby><ruby>気<rt>き</rt></ruby>で<ruby>安<rt>あん</rt></ruby><ruby>心<rt>しん</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>に<ruby>行<rt>い</rt></ruby>って" },
                    { id: "2", text: "<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "3", text: "みると" },
                    { id: "4", text: "いたよりも" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作先后。</strong>题干状语「あわてて」（慌张地）后接续动作选项 1「<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>に<ruby>行<rt>い</rt></ruby>って」（去医院），再接续表示尝试及发现的选项 3「みると」（一看），构成「あわてて<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってみると」（慌张地去医院一看）。</p>
                    <p><strong class="text-textMain">第二步：确立比较基准。</strong>在发现之后，引出预期状态选项 2「<ruby>思<rt>おも</rt></ruby>って」（想着）加选项 4「いたよりも」（比起……状态），构成「<ruby>思<rt>おも</rt></ruby>っていたよりも」（比起原本所想的）。</p>
                    <p><strong class="text-textMain">第三步：确立实际状态与句尾。</strong>将比较基准与句尾的实际状态「<ruby>元<rt>げん</rt></ruby><ruby>気<rt>き</rt></ruby>で<ruby>安<rt>あん</rt></ruby><ruby>心<rt>しん</rt></ruby>した」（很精神所以放心了）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说朋友受伤住院了，慌张地去医院一看，发现他比我原本预想的要精神，于是放心了。
                    </p>
                `
            },
            {
                id: "n3_1312_4",
                level: "N3",
                year: "2013年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>庭<rt>にわ</rt></ruby>に<ruby>植<rt>う</rt></ruby>えたスイカは、これまでなかなか",
                suffix: "<ruby>今<rt>こと</rt></ruby><ruby>年<rt>し</rt></ruby>になっておいしいのができた。",
                options: [
                    { id: "1", text: "あきらめないで" },
                    { id: "2", text: "ようやく" },
                    { id: "3", text: "うまく<ruby>育<rt>そだ</rt></ruby>たなかったが" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>年<rt>とし</rt></ruby>チャレンジしていたら" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立转折关系。</strong>题干「これまでなかなか」（直到现在怎么也）后接续否定结果及转折助词选项 3「うまく<ruby>育<rt>そだ</rt></ruby>たなかったが」（没能顺利培育，但是），构成「これまでなかなかうまく<ruby>育<rt>そだ</rt></ruby>たなかったが」（直到现在怎么也没能顺利培育，但是）。</p>
                    <p><strong class="text-textMain">第二步：确立否定伴随与条件。</strong>转折后引出否定伴随状态选项 1「あきらめないで」（不放弃地），修饰动作及假定条件选项 4「<ruby>毎<rt>まい</rt></ruby><ruby>年<rt>とし</rt></ruby>チャレンジしていたら」（如果每年都挑战的话），构成「あきらめないで<ruby>毎<rt>まい</rt></ruby><ruby>年<rt>とし</rt></ruby>チャレンジしていたら」（如果不放弃地每年坚持挑战的话）。</p>
                    <p><strong class="text-textMain">第三步：确立最终结果与句尾。</strong>条件后接续副词选项 2「ようやく」（终于），直接与句尾的「<ruby>今<rt>こと</rt></ruby><ruby>年<rt>し</rt></ruby>になっておいしいのができた」（到了今年长出了好吃的）相连。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>种在院子里的西瓜，直到现在怎么也没能顺利培育，但如果我不放弃每年都坚持挑战的话，终于到了今年结出了好吃的西瓜。
                    </p>
                `
            },
            {
                id: "n3_1312_5",
                level: "N3",
                year: "2013年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>のころに<ruby>祖<rt>そ</rt></ruby><ruby>母<rt>ぼ</rt></ruby>が<ruby>作<rt>つく</rt></ruby>ってくれたワンピースを、",
                suffix: "いる。",
                options: [
                    { id: "1", text: "<ruby>着<rt>き</rt></ruby>られなくなった" },
                    { id: "2", text: "<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>に<ruby>持<rt>も</rt></ruby>って" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>でも" },
                    { id: "4", text: "<ruby>体<rt>からだ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくなって" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果与状态变化。</strong>选项 4「<ruby>体<rt>からだ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくなって」（身体变大，并且）作为原因，后接续状态变化选项 1「<ruby>着<rt>き</rt></ruby>られなくなった」（变得不能穿了），构成「<ruby>体<rt>からだ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくなって<ruby>着<rt>き</rt></ruby>られなくなった」（因为身体变大变得穿不下了的）。</p>
                    <p><strong class="text-textMain">第二步：确立让步与时间状语。</strong>该连体修饰语后接续名词及让步助词选项 3「<ruby>今<rt>いま</rt></ruby>でも」（即使是现在也），构成「<ruby>着<rt>き</rt></ruby>られなくなった<ruby>今<rt>いま</rt></ruby>でも」（即使是变得穿不下了的现在也）。</p>
                    <p><strong class="text-textMain">第三步：确立持续动作与句尾。</strong>让步时间后接续状态动作选项 2「<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>に<ruby>持<rt>も</rt></ruby>って」（珍惜地拿着），与句尾的辅助动词「いる」（保持……状态）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>小时候祖母为我做的连衣裙，即使是身体变大已经穿不下了的现在，我也依然珍惜地保存着。
                    </p>
                `
            },
            // ---------------- 2014年7月 (N3) ----------------
            {
                id: "n3_1407_1",
                level: "N3",
                year: "2014年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>娘<rt>むすめ</rt></ruby>が<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>になることには<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>でしたが、<ruby>娘<rt>むすめ</rt></ruby>も<ruby>一<rt>いっ</rt></ruby><ruby>生<rt>しょう</rt></ruby>けんめい",
                suffix: "と<ruby>思<rt>おも</rt></ruby>っています。",
                options: [
                    { id: "1", text: "がんばろうとして" },
                    { id: "2", text: "<ruby>応<rt>おう</rt></ruby><ruby>援<rt>えん</rt></ruby>して" },
                    { id: "3", text: "やろうか" },
                    { id: "4", text: "いるので" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作状态与原因。</strong>题干「<ruby>一<rt>いっ</rt></ruby><ruby>生<rt>しょう</rt></ruby>けんめい」（拼命地）后接续意向形加尝试的表达选项 1「がんばろうとして」（正想要努力），再接续表示进行状态及原因的选项 4「いるので」（因为正在），构成「<ruby>一<rt>いっ</rt></ruby><ruby>生<rt>しょう</rt></ruby>けんめいがんばろうとしているので」（因为她正在拼命努力，所以）。</p>
                    <p><strong class="text-textMain">第二步：确立应对动作。</strong>说明原因后，引出父母的应对动作选项 2「<ruby>応<rt>おう</rt></ruby><ruby>援<rt>えん</rt></ruby>して」（支持）。</p>
                    <p><strong class="text-textMain">第三步：确立意向与句尾。</strong>动作后接续授受动词的意向形选项 3「やろうか」（要不我为她做……吧），与句尾的「と<ruby>思<rt>おも</rt></ruby>っています」（正这么想着）相连，构成「<ruby>応<rt>おう</rt></ruby><ruby>援<rt>えん</rt></ruby>してやろうかと<ruby>思<rt>おも</rt></ruby>っています」（正想着要不要支持她）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然本来反对女儿成为歌手，但因为女儿也在拼命努力，所以我正想着要不要支持她。
                    </p>
                `
            },
            {
                id: "n3_1407_2",
                level: "N3",
                year: "2014年7月",
                label: "問題8 - 2",
                prefix: "②、ここにある<ruby>家<rt>か</rt></ruby><ruby>具<rt>ぐ</rt></ruby>は",
                suffix: "<ruby>使<rt>つか</rt></ruby>うかもしれないと<ruby>思<rt>おも</rt></ruby>うと、<ruby>捨<rt>す</rt></ruby>てられない。",
                options: [
                    { id: "1", text: "けれども" },
                    { id: "2", text: "いつかまた" },
                    { id: "3", text: "<ruby>使<rt>つか</rt></ruby>っていない" },
                    { id: "4", text: "<ruby>今<rt>いま</rt></ruby>はどれも" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语的当前状态。</strong>题干主语「ここにある<ruby>家<rt>か</rt></ruby><ruby>具<rt>ぐ</rt></ruby>は」（这里的家具）后接续时间及数量范围选项 4「<ruby>今<rt>いま</rt></ruby>はどれも」（现在全都是），再接续否定状态选项 3「<ruby>使<rt>つか</rt></ruby>っていない」（没有在使用），构成「<ruby>今<rt>いま</rt></ruby>はどれも<ruby>使<rt>つか</rt></ruby>っていない」（现在全都没有在使用）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接关系。</strong>当前状态后接续逆接接续助词选项 1「けれども」（但是），构成「<ruby>使<rt>つか</rt></ruby>っていないけれども」（虽然没在使用，但是）。</p>
                    <p><strong class="text-textMain">第三步：确立将来推测与句尾。</strong>转折后接续表示将来的时间副词选项 2「いつかまた」（总有一天会再次），直接与句尾的推测「<ruby>使<rt>つか</rt></ruby>うかもしれないと<ruby>思<rt>おも</rt></ruby>うと、<ruby>捨<rt>す</rt></ruby>てられない」（一想到可能会用，就扔不掉）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这里的家具虽然现在全都没有在使用，但一想到总有一天可能还会再次用到，就怎么也扔不掉。
                    </p>
                `
            },
            {
                id: "n3_1407_3",
                level: "N3",
                year: "2014年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>書<rt>か</rt></ruby>いた",
                suffix: "<ruby>手<rt>て</rt></ruby><ruby>紙<rt>がみ</rt></ruby>が<ruby>引<rt>ひ</rt></ruby><き<ruby>出<rt>だ</rt></ruby>しにあった。",
                options: [
                    { id: "1", text: "まま" },
                    { id: "2", text: "<ruby>忘<rt>わす</rt></ruby>れていた" },
                    { id: "3", text: "<ruby>出<rt>だ</rt></ruby>すのを" },
                    { id: "4", text: "<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>への" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作残留状态。</strong>题干动词「<ruby>書<rt>か</rt></ruby>いた」（写了的）后接续表示保持原样状态的选项 1「まま」（就那样），构成「<ruby>書<rt>か</rt></ruby>いたまま」（写完之后就一直放着）。</p>
                    <p><strong class="text-textMain">第二步：确立遗忘的具体动作。</strong>接续带有形式名词的动作宾语选项 3「<ruby>出<rt>だ</rt></ruby>すのを」（把寄出这件事），与过去时动词选项 2「<ruby>忘<rt>わす</rt></ruby>れていた」（忘记了的）结合，构成「<ruby>出<rt>だ</rt></ruby>すのを<ruby>忘<rt>わす</rt></ruby>れていた」（忘记寄出去了的）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰关系与句尾。</strong>将前述的整体状态作为修饰语，接续名词定语选项 4「<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>への」（给朋友的），直接修饰句尾的中心名词「<ruby>手<rt>て</rt></ruby><ruby>紙<rt>がみ</rt></ruby>が<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しにあった」（信在抽屉里）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>那封写完后就一直放着、忘记寄出去的给朋友的信，就在抽屉里。
                    </p>
                `
            },
            {
                id: "n3_1407_4",
                level: "N3",
                year: "2014年7月",
                label: "問題8 - 4",
                prefix: "④、A「<ruby>空<rt>そら</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>いですね。」<br>B「そうですね。<ruby>雨<rt>あめ</rt></ruby>が",
                suffix: "ですね。」",
                options: [
                    { id: "1", text: "ない" },
                    { id: "2", text: "いつ" },
                    { id: "3", text: "おかしく" },
                    { id: "4", text: "<ruby>降<rt>ふ</rt></ruby>っても" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设条件。</strong>题干主语「<ruby>雨<rt>あめ</rt></ruby>が」（雨）后接续疑问词选项 2「いつ」（什么时候），再接续假定条件选项 4「<ruby>降<rt>ふ</rt></ruby>っても」（即使下），构成「いつ<ruby>降<rt>ふ</rt></ruby>っても」（无论什么时候下）。</p>
                    <p><strong class="text-textMain">第二步：确立评价修饰。</strong>条件后接续形容词连用形选项 3「おかしく」（奇怪），构成「いつ<ruby>降<rt>ふ</rt></ruby>ってもおかしく」（无论何时下雨都不奇怪的状况）。</p>
                    <p><strong class="text-textMain">第三步：确立否定表达与句尾。</strong>接续否定词选项 1「ない」（不），构成「おかしくない」（不奇怪）的固定表达，并与句尾的「ですね」（呢）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“天空好暗啊。” B：“是啊。这雨无论什么时候下都不奇怪呢。”
                    </p>
                `
            },
            {
                id: "n3_1407_5",
                level: "N3",
                year: "2014年7月",
                label: "問題8 - 5",
                prefix: "⑤、（<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で）<br>A「もしもし、ちょっと<ruby>話<rt>はな</rt></ruby>したいことがあるんだけど、<ruby>今<rt>いま</rt></ruby>、<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>ある？」<br>B「ごめん。ちょうど<ruby>出<rt>で</rt></ruby>かける",
                suffix: "<ruby>私<rt>わたし</rt></ruby>から<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>するね。」",
                options: [
                    { id: "1", text: "ゆっくり<ruby>話<rt>はな</rt></ruby>す" },
                    { id: "2", text: "あとで" },
                    { id: "3", text: "ところで" },
                    { id: "4", text: "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がないから" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立当前动作阶段。</strong>题干「ちょうど<ruby>出<rt>で</rt></ruby>かける」（正要出门）后接续表示动作处于某一阶段的名词加助词选项 3「ところで」（正处于……的时候，并且），构成「ちょうど<ruby>出<rt>で</rt></ruby>かけるところで」（现在正要出门）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与原因。</strong>状态说明后接续动作选项 1「ゆっくり<ruby>話<rt>はな</rt></ruby>す」（慢慢说），修饰名词及原因从句选项 4「<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がないから」（因为没有时间），构成「ゆっくり<ruby>話<rt>はな</rt></ruby>す<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がないから」（因为没有慢慢说话的时间）。</p>
                    <p><strong class="text-textMain">第三步：确立时间状语与句尾。</strong>原因后接续时间副词选项 2「あとで」（稍后），修饰句尾的后续动作「<ruby>私<rt>わたし</rt></ruby>から<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>するね」（我再给你打电话吧）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在电话里）A：“喂喂，我有点事想跟你说，现在有时间吗？” B：“抱歉。我现在正要出门，因为没有时间慢慢说，我晚点再给你打过去吧。”
                    </p>
                `
            },
            // ---------------- 2014年12月 (N3) ----------------
            {
                id: "n3_1412_1",
                level: "N3",
                year: "2014年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>僕<rt>ぼく</rt></ruby>の<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>は、<ruby>両<rt>りょう</rt></ruby><ruby>親<rt>しん</rt></ruby>と<ruby>弟<rt>おとうと</rt></ruby><ruby>三<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>の<ruby>六<rt>ろく</rt></ruby><ruby>人<rt>にん</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>です。<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                suffix: "だけです。",
                options: [
                    { id: "1", text: "は" },
                    { id: "2", text: "<ruby>女<rt>おんな</rt></ruby>" },
                    { id: "3", text: "<ruby>母<rt>はは</rt></ruby>" },
                    { id: "4", text: "で" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立范围限定。</strong>题干「<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>」（家庭）后接续表示范围的助词选项 4「で」（在……之中），构成「<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>で」（在家庭成员之中）。</p>
                    <p><strong class="text-textMain">第二步：确立对比主语。</strong>接续名词选项 2「<ruby>女<rt>おんな</rt></ruby>」（女性），并接续提示助词选项 1「は」（至于），构成「<ruby>女<rt>おんな</rt></ruby>は」（女性的话）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语与句尾。</strong>最后接续名词选项 3「<ruby>母<rt>はは</rt></ruby>」（母亲），与句尾的限定表达「だけです」（只有）相连，构成「<ruby>母<rt>はは</rt></ruby>だけです」（只有母亲）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我的家庭是父母和三个弟弟组成的六口之家。在家庭成员中，女性只有母亲。
                    </p>
                `
            },
            {
                id: "n3_1412_2",
                level: "N3",
                year: "2014年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>必<rt>かなら</rt></ruby>ず",
                suffix: "すっかり<ruby>忘<rt>わす</rt></ruby>れていた。",
                options: [
                    { id: "1", text: "ことを" },
                    { id: "2", text: "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>の<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>の" },
                    { id: "3", text: "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>じゅう</rt></ruby>に" },
                    { id: "4", text: "<ruby>作<rt>つく</rt></ruby>らなくてはいけない" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作与时间限定。</strong>题干副词「<ruby>必<rt>かなら</rt></ruby>ず」（必须 / 一定）后接续时间状语选项 3「<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>じゅう</rt></ruby>に」（在今天之内），再接续表示义务的动词选项 4「<ruby>作<rt>つく</rt></ruby>らなくてはいけない」（必须制作），构成「<ruby>必<rt>かなら</rt></ruby>ず<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>じゅう</rt></ruby>に<ruby>作<rt>つく</rt></ruby>らなくてはいけない」（必须在今天之内制作的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该短语作为连体修饰语，修饰名词选项 2「<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>の<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>の」（会议资料的），构成「～<ruby>作<rt>つく</rt></ruby>らなくてはいけない<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>の<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>の」（必须在今天之内制作的会议资料的）。</p>
                    <p><strong class="text-textMain">第三步：确立宾语与句尾。</strong>名词后接形式名词加宾格助词选项 1「ことを」（关于……的事），整体作为宾语与句尾的「すっかり<ruby>忘<rt>わす</rt></ruby>れていた」（完全忘记了）相连。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我完全忘记了关于必须在今天之内制作的会议资料的事情。
                    </p>
                `
            },
            {
                id: "n3_1412_3",
                level: "N3",
                year: "2014年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>「<ruby>調<rt>しら</rt></ruby>べた<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>を<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>するとき、",
                suffix: "なります。」",
                options: [
                    { id: "1", text: "わかりやすく" },
                    { id: "2", text: "<ruby>示<rt>しめ</rt></ruby>しながら" },
                    { id: "3", text: "<ruby>表<rt>ひょう</rt></ruby>やグラフを" },
                    { id: "4", text: "<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>すると" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作对象与伴随状态。</strong>接续宾语选项 3「<ruby>表<rt>ひょう</rt></ruby>やグラフを」（表格和图表），并接续表示一边……一边的伴随动作选项 2「<ruby>示<rt>しめ</rt></ruby>しながら」（一边展示），构成「<ruby>表<rt>ひょう</rt></ruby>やグラフを<ruby>示<rt>しめ</rt></ruby>しながら」（一边展示表格和图表）。</p>
                    <p><strong class="text-textMain">第二步：确立条件状语。</strong>伴随动作后接续主体动作及条件表达选项 4「<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>すると」（如果进行说明的话），构成「～<ruby>示<rt>しめ</rt></ruby>しながら<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>すると」（如果一边展示……一边说明的话）。</p>
                    <p><strong class="text-textMain">第三步：确立结果变化与句尾。</strong>条件引发的结果是副词形式选项 1「わかりやすく」（易于理解地），与句尾的状态变化动词「なります」（变得）相连，构成「わかりやすくなります」（会变得易于理解）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>老师：“在说明调查结果时，如果一边展示表格和图表一边说明的话，会变得更容易理解。”
                    </p>
                `
            },
            {
                id: "n3_1412_4",
                level: "N3",
                year: "2014年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>に、",
                suffix: "たっていて、<ruby>驚<rt>おどろ</rt></ruby>いた。",
                options: [
                    { id: "1", text: "いつのまにか3<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も" },
                    { id: "2", text: "クラスだった" },
                    { id: "3", text: "<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>と<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>していたら" },
                    { id: "4", text: "ずっと<ruby>同<rt>おな</rt></ruby>じ" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与时间范围。</strong>题干时间状语「<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>に、」（在高中时代）后接续表示一直持续的选项 4「ずっと<ruby>同<rt>おな</rt></ruby>じ」（一直相同的），修饰过去状态选项 2「クラスだった」（是同班的），构成「<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>に、ずっと<ruby>同<rt>おな</rt></ruby>じクラスだった」（高中时代一直同班的）。</p>
                    <p><strong class="text-textMain">第二步：确立动作对象与条件。</strong>该修饰语后接续名词及动作选项 3「<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>と<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>していたら」（和朋友在电话里聊着天，结果），构成「～クラスだった<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>と<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>していたら」（和……的朋友在电话里聊着天，结果）。</p>
                    <p><strong class="text-textMain">第三步：确立意外结果与句尾。</strong>动作后接续表示不知不觉间的时间副词及数量选项 1「いつのまにか3<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も」（不知不觉竟然有3个小时之久），顺接句尾的时间流逝表达「たっていて、<ruby>驚<rt>おどろ</rt></ruby>いた」（过去了，我很惊讶）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天晚上，和高中时代一直同班的朋友在电话里聊着天，不知不觉竟然过去了3个小时，我很惊讶。
                    </p>
                `
            },
            {
                id: "n3_1412_5",
                level: "N3",
                year: "2014年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>私<rt>わたし</rt></ruby>が<ruby>今<rt>いま</rt></ruby><ruby>住<rt>す</rt></ruby>んでいるアパートは<ruby>線<rt>せん</rt></ruby><ruby>路<rt>ろ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くにある。<ruby>住<rt>す</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めたころは、<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>通<rt>とお</rt></ruby>る",
                suffix: "が、すぐ<ruby>気<rt>き</rt></ruby>にならなくなった。",
                options: [
                    { id: "1", text: "うるさいと" },
                    { id: "2", text: "こともあった" },
                    { id: "3", text: "<ruby>音<rt>おと</rt></ruby>がして" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>う" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与主谓结构。</strong>题干连体修饰语「<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>通<rt>とお</rt></ruby>る」（电车通过的）修饰名词及动作选项 3「<ruby>音<rt>おと</rt></ruby>がして」（发出声音，并且），构成「<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>通<rt>とお</rt></ruby>る<ruby>音<rt>おと</rt></ruby>がして」（发出电车通过的声音，并且）。</p>
                    <p><strong class="text-textMain">第二步：确立思考内容与引用。</strong>接续主观感受及引用助词选项 1「うるさいと」（觉得吵），作为后续思考动词选项 4「<ruby>思<rt>おも</rt></ruby>う」（觉得）的宾语，构成「うるさいと<ruby>思<rt>おも</rt></ruby>う」（觉得很吵）。</p>
                    <p><strong class="text-textMain">第三步：确立经历句型与句尾。</strong>最后接续表示过去经历或有时发生情况的句型选项 2「こともあった」（也有过……的时候），与句尾逆接「が、すぐ<ruby>気<rt>き</rt></ruby>にならなくなった」（但是，很快就不在意了）相连。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我现在住的公寓在铁路附近。刚开始住的时候，也有过发出电车通过的声音觉得很吵的时候，但是很快就不在意了。
                    </p>
                `
            },
            // ---------------- 2015年7月 (N3) ----------------
            {
                id: "n3_1507_1",
                level: "N3",
                year: "2015年7月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>家<rt>いえ</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきて、もう",
                suffix: "だけです。",
                options: [
                    { id: "1", text: "まだ" },
                    { id: "2", text: "のに" },
                    { id: "3", text: "<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>になる" },
                    { id: "4", text: "<ruby>住<rt>じゅう</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えていない" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间跨度与逆接。</strong>题干副词「もう」（已经）后接续时间跨度选项 3「<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>になる」（有半年了），再接续逆接助词选项 2「のに」（明明……却），构成「もう<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>になるのに」（明明已经有半年了，却）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与后续动作。</strong>转折后接续状态副词选项 1「まだ」（还没有），修饰否定动作选项 4「<ruby>住<rt>じゅう</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えていない」（记住地址），构成「まだ<ruby>住<rt>じゅう</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えていない」（还没记住地址）。</p>
                    <p><strong class="text-textMain">第三步：确立限定表达与句尾。</strong>将前述未完成的状态动作与句尾的限定表达「だけです」（只是……而已）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>搬到这个家来，明明已经有半年了，却只是还没记住地址而已（其余都已经习惯了）。
                    </p>
                `
            },
            {
                id: "n3_1507_2",
                level: "N3",
                year: "2015年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>毎<rt>まい</rt></ruby><ruby>年<rt>とし</rt></ruby>、X<ruby>社<rt>しゃ</rt></ruby>には<ruby>多<rt>おお</rt></ruby>くの<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>るが、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "あまりに<ruby>忙<rt>いそが</rt></ruby>しくて" },
                    { id: "2", text: "やめてしまう" },
                    { id: "3", text: "<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>が" },
                    { id: "4", text: "3<ruby>年<rt>ねん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>内<rt>ない</rt></ruby>に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因从句。</strong>题干主语「<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が」（工作）后接续原因及状态表达选项 1「あまりに<ruby>忙<rt>いそが</rt></ruby>しくて」（因为过于繁忙），构成原因状语从句「<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>があまりに<ruby>忙<rt>いそが</rt></ruby>しくて」（因为工作过于繁忙）。</p>
                    <p><strong class="text-textMain">第二步：确立主语与时间状语。</strong>在交代原因后，引出后续事件的主语选项 3「<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>が」（员工），并接续时间期限选项 4「3<ruby>年<rt>ねん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>内<rt>ない</rt></ruby>に」（在3年之内）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语与传闻句尾。</strong>时间状语后接续动作选项 2「やめてしまう」（就辞职了），并与句尾的传闻表达「そうだ」（听说）相连。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>每年，X公司虽然有很多新员工加入，但听说因为工作过于繁忙，员工们在3年内就都辞职了。
                    </p>
                `
            },
            {
                id: "n3_1507_3",
                level: "N3",
                year: "2015年7月",
                label: "問題8 - 3",
                prefix: "③、この<ruby>島<rt>しま</rt></ruby>は、<ruby>空<rt>そら</rt></ruby>から",
                suffix: "「<ruby>耳<rt>みみ</rt></ruby><ruby>島<rt>じま</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ばれています。",
                options: [
                    { id: "1", text: "<ruby>形<rt>かたち</rt></ruby>に" },
                    { id: "2", text: "<ruby>見<rt>み</rt></ruby>えることから" },
                    { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような" },
                    { id: "4", text: "<ruby>見<rt>み</rt></ruby>ると" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设条件。</strong>题干「<ruby>空<rt>そら</rt></ruby>から」（从天空中）后接续条件动作选项 4「<ruby>見<rt>み</rt></ruby>ると」（看的话），构成「<ruby>空<rt>そら</rt></ruby>から<ruby>見<rt>み</rt></ruby>ると」（从天空中看的话）。</p>
                    <p><strong class="text-textMain">第二步：确立比况与名词修饰。</strong>条件后接续表示比喻的连体修饰语选项 3「<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような」（像人耳一样的），修饰名词及助词选项 1「<ruby>形<rt>かたち</rt></ruby>に」（形状），构成「<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような<ruby>形<rt>かたち</rt></ruby>に」（像人耳一样的形状）。</p>
                    <p><strong class="text-textMain">第三步：确立原因与句尾。</strong>名词后接续表示由来或原因的选项 2「<ruby>見<rt>み</rt></ruby>えることから」（因为看起来），与句尾的被动表达「『<ruby>耳<rt>みみ</rt></ruby><ruby>島<rt>じま</rt></ruby>』と<ruby>呼<rt>よ</rt></ruby>ばれています」（被称为“耳岛”）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这座岛因为从天空中看的话，看起来像人耳的形状，由此被称为“耳岛”。
                    </p>
                `
            },
            {
                id: "n3_1507_4",
                level: "N3",
                year: "2015年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby><ruby>暮<rt>ぐ</rt></ruby>らしを<ruby>始<rt>はじ</rt></ruby>めて3か月が<ruby>過<rt>す</rt></ruby>ぎたが、<ruby>家<rt>いえ</rt></ruby>に",
                suffix: "といつも<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>誰<rt>だれ</rt></ruby>もいない" },
                    { id: "2", text: "<ruby>話<rt>はな</rt></ruby>し<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が" },
                    { id: "3", text: "<ruby>寂<rt>さび</rt></ruby>しい" },
                    { id: "4", text: "のは" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立存在句的主谓结构。</strong>题干「<ruby>家<rt>いえ</rt></ruby>に」（在家里）后接续主语选项 2「<ruby>話<rt>はな</rt></ruby>し<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が」（说话对象），再接续全面否定的存在动词选项 1「<ruby>誰<rt>だれ</rt></ruby>もいない」（谁也不在），构成「<ruby>家<rt>いえ</rt></ruby>に<ruby>話<rt>はな</rt></ruby>し<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が<ruby>誰<rt>だれ</rt></ruby>もいない」（家里没有任何说话对象）。</p>
                    <p><strong class="text-textMain">第二步：确立名词化主语。</strong>该小句后接续形式名词及提示助词选项 4「のは」（……这件事），将其整体名词化，作为后文评价的对象。</p>
                    <p><strong class="text-textMain">第三步：确立评价形容词与句尾。</strong>评价对象后接续情感形容词选项 3「<ruby>寂<rt>さび</rt></ruby>しい」（寂寞），并与句尾的「といつも<ruby>思<rt>おも</rt></ruby>う」（总是这么认为）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然开始一个人生活已经过去3个月了，但我总觉得家里没有任何说话对象这件事很寂寞。
                    </p>
                `
            },
            {
                id: "n3_1507_5",
                level: "N3",
                year: "2015年7月",
                label: "問題8 - 5",
                prefix: "⑤、30<ruby>日<rt>にち</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>",
                suffix: "が、すぐ<ruby>気<rt>き</rt></ruby>にならなくなった。",
                options: [
                    { id: "1", text: "<ruby>日<rt>ひ</rt></ruby>が" },
                    { id: "2", text: "<ruby>降<rt>ふ</rt></ruby>らない" },
                    { id: "3", text: "<ruby>続<rt>つづ</rt></ruby>いている" },
                    { id: "4", text: "<ruby>雨<rt>あめ</rt></ruby>の" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「30<ruby>日<rt>にち</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>」（30天以上）后引出主语的修饰语，名词选项 4「<ruby>雨<rt>あめ</rt></ruby>の」（雨）修饰否定动词连体形选项 2「<ruby>降<rt>ふ</rt></ruby>らない」（不下的），构成「<ruby>雨<rt>あめ</rt></ruby>の<ruby>降<rt>ふ</rt></ruby>らない」（不下雨的）。</p>
                    <p><strong class="text-textMain">第二步：确立核心主语。</strong>修饰语后接续核心名词选项 1「<ruby>日<rt>ひ</rt></ruby>が」（日子），构成「<ruby>雨<rt>あめ</rt></ruby>の<ruby>降<rt>ふ</rt></ruby>らない<ruby>日<rt>ひ</rt></ruby>が」（不下雨的日子）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动词与句尾。</strong>主语后接续状态谓语选项 3「<ruby>続<rt>つづ</rt></ruby>いている」（持续着），并与句尾带有逆接语气的「が、すぐ<ruby>気<rt>き</rt></ruby>にならなくなった」（但是，很快就不在意了）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然持续了30天以上不下雨的日子，但我很快就不在意了。
                    </p>
                `
            },
            // ---------------- 2015年12月 (N3) ----------------
            {
                id: "n3_1512_1",
                level: "N3",
                year: "2015年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>実<rt>じっ</rt></ruby><ruby>家<rt>か</rt></ruby>にある<ruby>冷<rt>れい</rt></ruby><ruby>蔵<rt>ぞう</rt></ruby><ruby>庫<rt>こ</rt></ruby>は30<ruby>年<rt>ねん</rt></ruby>も",
                suffix: "、<ruby>親<rt>おや</rt></ruby>は「まだ<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えない」と<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "いつ<ruby>壊<rt>こわ</rt></ruby>れてもおかしくない" },
                    { id: "2", text: "<ruby>古<rt>ふる</rt></ruby>いもので" },
                    { id: "3", text: "のに" },
                    { id: "4", text: "<ruby>使<rt>つか</rt></ruby>っている" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间与动作搭配。</strong>题干「30<ruby>年<rt>ねん</rt></ruby>も」（长达30年）后接续持续动作选项 4「<ruby>使<rt>つか</rt></ruby>っている」（一直使用着），构成「30<ruby>年<rt>ねん</rt></ruby>も<ruby>使<rt>つか</rt></ruby>っている」（一直使用了长达30年的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与并列。</strong>该动作修饰名词及接续助词选项 2「<ruby>古<rt>ふる</rt></ruby>いもので」（因为是很旧的东西 / 是很旧的东西，并且），引出后项推测选项 1「いつ<ruby>壊<rt>こわ</rt></ruby>れてもおかしくない」（什么时候坏都不奇怪），构成「<ruby>使<rt>つか</rt></ruby>っている<ruby>古<rt>ふる</rt></ruby>いものでいつ<ruby>壊<rt>こわ</rt></ruby>れてもおかしくない」（是用了30年的老旧物品，什么时候坏都不奇怪）。</p>
                    <p><strong class="text-textMain">第三步：确立逆接与句尾。</strong>推测后接续表示转折的选项 3「のに」（明明……却），与句尾的「<ruby>親<rt>おや</rt></ruby>は『まだ<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えない』と<ruby>言<rt>い</rt></ruby>っている」（父母却说“还不换新的”）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>老家的冰箱明明是已经使用了长达30年之久的旧物，什么时候坏掉都不奇怪，父母却说“还不打算换新的”。
                    </p>
                `
            },
            {
                id: "n3_1512_2",
                level: "N3",
                year: "2015年12月",
                label: "問題8 - 2",
                prefix: "②、",
                suffix: "<ruby>遅<rt>おく</rt></ruby>れているそうだ。",
                options: [
                    { id: "1", text: "<ruby>駅<rt>えき</rt></ruby>ビルの<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>が" },
                    { id: "2", text: "<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>だった" },
                    { id: "3", text: "あと<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>で" },
                    { id: "4", text: "<ruby>終<rt>お</rt></ruby>わる" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间与动作。</strong>时间状语选项 3「あと<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>で」（还有半年）后接续动作选项 4「<ruby>終<rt>お</rt></ruby>わる」（结束），构成「あと<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>で<ruby>終<rt>お</rt></ruby>わる」（还有半年结束）。</p>
                    <p><strong class="text-textMain">第二步：确立计划与连体修饰。</strong>动作后接续表示计划的名词短语选项 2「<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>だった」（原计划是），整体作为连体修饰语，修饰主语选项 1「<ruby>駅<rt>えき</rt></ruby>ビルの<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>が」（车站大楼的建设工程）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>构成完整主语「あと<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby>で<ruby>終<rt>お</rt></ruby>わる<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>だった<ruby>駅<rt>えき</rt></ruby>ビルの<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>が」（原计划还有半年就结束的车站大楼建设工程），并与句尾的谓语「<ruby>遅<rt>おく</rt></ruby>れているそうだ」（听说推迟了）相连。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说原计划还有半年就能完工的车站大楼建设工程推迟了。
                    </p>
                `
            },
            {
                id: "n3_1512_3",
                level: "N3",
                year: "2015年12月",
                label: "問題8 - 3",
                prefix: "③、プレゼントをするときは、<ruby>贈<rt>おく</rt></ruby>る<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の",
                suffix: "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も<ruby>楽<rt>たの</rt></ruby>しい。",
                options: [
                    { id: "1", text: "<ruby>選<rt>えら</rt></ruby>ぶ" },
                    { id: "2", text: "ことを" },
                    { id: "3", text: "どれにするか" },
                    { id: "4", text: "<ruby>考<rt>かんが</rt></ruby>えながら" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立思考对象与伴随动作。</strong>题干「<ruby>贈<rt>おく</rt></ruby>る<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の」（赠送对象的）后接续形式名词与宾语助词选项 2「ことを」（事情），再接续表示伴随动作的选项 4「<ruby>考<rt>かんが</rt></ruby>えながら」（一边思考着），构成「<ruby>贈<rt>おく</rt></ruby>る<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>のことを<ruby>考<rt>かんが</rt></ruby>えながら」（一边思考着赠送对象的事情）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问短语与动作。</strong>伴随动作后接续选择疑问短语选项 3「どれにするか」（选哪一个呢），作为后续动作选项 1「<ruby>選<rt>えら</rt></ruby>ぶ」（挑选）的内容。</p>
                    <p><strong class="text-textMain">第三步：确立修饰关系与句尾。</strong>动作连体形「<ruby>選<rt>えら</rt></ruby>ぶ」直接修饰句尾的主语中心词「<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も<ruby>楽<rt>たの</rt></ruby>しい」（的时间也很快乐）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>送礼物的时候，一边想着收礼人的事情一边挑选该送哪个的时间也是很快乐的。
                    </p>
                `
            },
            {
                id: "n3_1512_4",
                level: "N3",
                year: "2015年12月",
                label: "問題8 - 4",
                prefix: "④、このパソコン<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>にはさまざまなコースがあります。<ruby>基<rt>き</rt></ruby><ruby>礎<rt>そ</rt></ruby>コースは、パソコンの",
                suffix: "ぴったりです。",
                options: [
                    { id: "1", text: "コースなので" },
                    { id: "2", text: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>習<rt>なら</rt></ruby>う<ruby>方<rt>かた</rt></ruby>に" },
                    { id: "3", text: "<ruby>慣<rt>な</rt></ruby>れるための" },
                    { id: "4", text: "<ruby>基<rt>き</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>に" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立对象与动作搭配。</strong>题干「パソコンの」（电脑的）后接续名词与着落点助词选项 4「<ruby>基<rt>き</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>に」（对基本的使用方法），再接续对应的动词短语选项 3「<ruby>慣<rt>な</rt></ruby>れるための」（为了习惯……的），构成「パソコンの<ruby>基<rt>き</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れるための」（为了习惯电脑的基本使用方法的）。</p>
                    <p><strong class="text-textMain">第二步：确立名词修饰与原因。</strong>该定语从句修饰名词及原因表达选项 1「コースなので」（因为是……的课程），构成「～<ruby>慣<rt>な</rt></ruby>れるためのコースなので」（因为是为了习惯基本用法的课程）。</p>
                    <p><strong class="text-textMain">第三步：确立适用对象与句尾。</strong>原因状语后接续适用对象选项 2「<ruby>初<rt>はじ</rt></ruby>めて<ruby>習<rt>なら</rt></ruby>う<ruby>方<rt>かた</rt></ruby>に」（对于第一次学习的人），与句尾的「ぴったりです」（非常合适）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这家电脑教室有各种各样的课程。基础课程是因为为了让人习惯电脑的基本用法而设置的，所以非常适合初学者。
                    </p>
                `
            },
            {
                id: "n3_1512_5",
                level: "N3",
                year: "2015年12月",
                label: "問題8 - 5",
                prefix: "⑤、エアコンから",
                suffix: "かというと、<ruby>冷<rt>つめ</rt></ruby>たい<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>は<ruby>暖<rt>あたた</rt></ruby>かい<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>より<ruby>重<rt>おも</rt></ruby>いからだ。",
                options: [
                    { id: "1", text: "<ruby>冷<rt>つめ</rt></ruby>たい<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>が" },
                    { id: "2", text: "<ruby>出<rt>で</rt></ruby>た" },
                    { id: "3", text: "どうして" },
                    { id: "4", text: "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>下<rt>した</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのは" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立出处与修饰关系。</strong>题干起点「エアコンから」（从空调里）后接续动作连体形选项 2「<ruby>出<rt>で</rt></ruby>た」（出来的），修饰主语名词选项 1「<ruby>冷<rt>つめ</rt></ruby>たい<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>が」（冷空气），构成「エアコンから<ruby>出<rt>で</rt></ruby>た<ruby>冷<rt>つめ</rt></ruby>たい<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>が」（从空调里出来的冷空气）。</p>
                    <p><strong class="text-textMain">第二步：确立动作及名词化主体。</strong>主语后接续动作及形式名词选项 4「<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>下<rt>した</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのは」（去房间下方这件事），将其整体作为大主语。</p>
                    <p><strong class="text-textMain">第三步：确立疑问词与句尾。</strong>大主语后接续疑问副词选项 3「どうして」（为什么），并与句尾的「かというと」（要说是因为什么的话）相连，构成固定句型「～のはどうしてかというと」（之所以……是因为……）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>要问为什么从空调里吹出来的冷空气会往房间的下方走，那是因为冷空气比暖空气重。
                    </p>
                `
            },
            // ---------------- 2016年7月 (N3) ----------------
            {
                id: "n3_1607_1",
                level: "N3",
                year: "2016年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は、<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                suffix: "<ruby>過<rt>す</rt></ruby>ごした。",
                options: [
                    { id: "1", text: "で" },
                    { id: "2", text: "を" },
                    { id: "3", text: "5<ruby>人<rt>にん</rt></ruby>" },
                    { id: "4", text: "<ruby>楽<rt>たの</rt></ruby>しい<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立数量与范围。</strong>题干「<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>」（家庭）后接数量词选项 3「5<ruby>人<rt>にん</rt></ruby>」，再接续表示范围的助词选项 1「で」（以……的人数），构成「<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>5<ruby>人<rt>にん</rt></ruby>で」（以一家五口人）。</p>
                    <p><strong class="text-textMain">第二步：确立宾语。</strong>名词短语选项 4「<ruby>楽<rt>たの</rt></ruby>しい<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>」（快乐的假日）后接宾格助词选项 2「を」，构成宾语「<ruby>楽<rt>たの</rt></ruby>しい<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>を」（快乐的假日）。</p>
                    <p><strong class="text-textMain">第三步：确立动宾结构与句尾。</strong>将前述数量状语与宾语相连，并顺接句尾的动词「<ruby>過<rt>す</rt></ruby>ごした」（度过了）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>今天，久违地一家五口人度过了一个快乐的假日。
                    </p>
                `
            },
            {
                id: "n3_1607_2",
                level: "N3",
                year: "2016年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>のラーメンは、<ruby>濃<rt>こ</rt></ruby>い",
                suffix: "<ruby>私<rt>わたし</rt></ruby>はちょっと<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>味<rt>あじ</rt></ruby>が" },
                    { id: "2", text: "いい" },
                    { id: "3", text: "<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>には" },
                    { id: "4", text: "かもしれないが" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与对象。</strong>题干形容词「<ruby>濃<rt>こ</rt></ruby>い」（浓厚的）修饰名词及助词选项 1「<ruby>味<rt>あじ</rt></ruby>が」（味道），作为后续对象选项 3「<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>には」（对于喜欢……的人来说）的内容，构成「<ruby>濃<rt>こ</rt></ruby>い<ruby>味<rt>あじ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>には」（对于喜欢浓厚味道的人来说）。</p>
                    <p><strong class="text-textMain">第二步：确立评价谓语。</strong>对象后接续评价形容词选项 2「いい」（好的），构成「～<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>にはいい」（对于喜欢的人来说是不错的）。</p>
                    <p><strong class="text-textMain">第三步：确立推测转折与句尾。</strong>评价后接续推测及逆接助词选项 4「かもしれないが」（也许……但是），与句尾的「<ruby>私<rt>わたし</rt></ruby>はちょっと<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>だ」（我有些吃不消）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>车站前那家店的拉面，对于喜欢浓厚味道的人来说也许是不错的，但是我有些吃不消。
                    </p>
                `
            },
            {
                id: "n3_1607_3",
                level: "N3",
                year: "2016年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>久<rt>ひさ</rt></ruby>しぶりにふるさとに<ruby>帰<rt>かえ</rt></ruby>ったが、<ruby>昔<rt>むかし</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もなかった",
                suffix: "<ruby>見<rt>み</rt></ruby>て<ruby>驚<rt>おどろ</rt></ruby>いた。",
                options: [
                    { id: "1", text: "のを" },
                    { id: "2", text: "すっかり" },
                    { id: "3", text: "<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りが" },
                    { id: "4", text: "<ruby>変<rt>か</rt></ruby>わっている" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与主语。</strong>题干修饰语「<ruby>昔<rt>むかし</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もなかった」（过去什么都没有的）修饰名词选项 3「<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りが」（车站周围），构成「<ruby>昔<rt>むかし</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もなかった<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りが」（过去什么都没有的车站周围）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与动作。</strong>主语后接续程度副词选项 2「すっかり」（完全地），修饰状态动词选项 4「<ruby>変<rt>か</rt></ruby>わっている」（变了），构成「～<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りがすっかり<ruby>変<rt>か</rt></ruby>わっている」（车站周围完全变了）。</p>
                    <p><strong class="text-textMain">第三步：确立名词化宾语与句尾。</strong>将该小句整体接续形式名词及宾格助词选项 1「のを」，作为句尾感官及情感动词「<ruby>見<rt>み</rt></ruby>て<ruby>驚<rt>おどろ</rt></ruby>いた」（看到并感到惊讶）的宾语。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>久违地回到了故乡，看到过去什么都没有的车站周围完全变了样，感到很惊讶。
                    </p>
                `
            },
            {
                id: "n3_1607_4",
                level: "N3",
                year: "2016年7月",
                label: "問題8 - 4",
                prefix: "④、これまでの<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で",
                suffix: "<ruby>日<rt>ひ</rt></ruby>はない。",
                options: [
                    { id: "1", text: "<ruby>日<rt>ひ</rt></ruby>ほど" },
                    { id: "2", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が" },
                    { id: "3", text: "うれしかった" },
                    { id: "4", text: "<ruby>生<rt>う</rt></ruby>まれた" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓结构与连体修饰。</strong>主语选项 2「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が」（自己的孩子）接续动作动词选项 4「<ruby>生<rt>う</rt></ruby>まれた」（出生的），修饰名词选项 1「<ruby>日<rt>ひ</rt></ruby>ほど」（像……的日子那样），构成「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれた<ruby>日<rt>ひ</rt></ruby>ほど」（像自己的孩子出生的日子那样）。</p>
                    <p><strong class="text-textMain">第二步：确立比较程度与评价。</strong>比较基准后接续情感形容词选项 3「うれしかった」（高兴的），构成「～<ruby>生<rt>う</rt></ruby>まれた<ruby>日<rt>ひ</rt></ruby>ほどうれしかった」（像出生之日那样高兴的）。</p>
                    <p><strong class="text-textMain">第三步：确立最高级句型与句尾。</strong>该定语与句尾的「<ruby>日<rt>ひ</rt></ruby>はない」（没有这样的日子）相连，构成「～ほど～はない」（没有比……更……的）的最高级表达。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在至今为止的人生中，没有比自己的孩子出生那一天更高兴的日子了。
                    </p>
                `
            },
            {
                id: "n3_1607_5",
                level: "N3",
                year: "2016年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>の<ruby>彼<rt>かれ</rt></ruby>の<ruby>新<rt>しん</rt></ruby><ruby>曲<rt>きょく</rt></ruby>は、<ruby>友<rt>ゆう</rt></ruby><ruby>情<rt>じょう</rt></ruby>がテーマになっている",
                suffix: "<ruby>大<rt>おお</rt></ruby>きく<ruby>違<rt>ちが</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>と" },
                    { id: "2", text: "<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>されてきた" },
                    { id: "3", text: "という<ruby>点<rt>てん</rt></ruby>で" },
                    { id: "4", text: "これまでに" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立说明内容与基准点。</strong>题干从句「<ruby>友<rt>ゆう</rt></ruby><ruby>情<rt>じょう</rt></ruby>がテーマになっている」（以友情为主题）后接续表示说明点的选项 3「という<ruby>点<rt>てん</rt></ruby>で」（在这一方面），构成「<ruby>友<rt>ゆう</rt></ruby><ruby>情<rt>じょう</rt></ruby>がテーマになっているという<ruby>点<rt>てん</rt></ruby>で」（在以友情为主题这一方面）。</p>
                    <p><strong class="text-textMain">第二步：确立时间状语与动作。</strong>接续时间状语选项 4「これまでに」（到目前为止），修饰动作连体形选项 2「<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>されてきた」（被发表出来的），构成「これまでに<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>されてきた」（到目前为止发表出来的）。</p>
                    <p><strong class="text-textMain">第三步：确立比较对象与句尾。</strong>将该连体修饰语直接修饰比较对象选项 1「<ruby>彼<rt>かれ</rt></ruby>の<ruby>曲<rt>きょく</rt></ruby>と」（与他的曲子），并与句尾的谓语「<ruby>大<rt>おお</rt></ruby>きく<ruby>違<rt>ちが</rt></ruby>う」（大不相同）相连。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>他这次的新曲，在以友情为主题这一方面，与到目前为止发表出来的他的曲子大不相同。
                    </p>
                `
            },
            // ---------------- 2016年12月 (N3) ----------------
            {
                id: "n3_1612_1",
                level: "N3",
                year: "2016年12月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby>の<ruby>鳥<rt>とり</rt></ruby>はとても<ruby>珍<rt>めずら</rt></ruby>しくて、この<ruby>鳥<rt>とり</rt></ruby>の",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "<ruby>見<rt>み</rt></ruby>る<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>がない" },
                    { id: "2", text: "<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>でも" },
                    { id: "3", text: "なかなか" },
                    { id: "4", text: "<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>をしている" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「この<ruby>鳥<rt>とり</rt></ruby>の」（这种鸟的）后接续修饰语选项 4「<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>をしている」（正在做研究的），并修饰名词及逆接条件选项 2「<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>でも」（即使是专家），构成「この<ruby>鳥<rt>とり</rt></ruby>の<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>をしている<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>でも」（即便是研究这种鸟的专家）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与否定搭配。</strong>条件之后，接续程度副词选项 3「なかなか」（总是无法 / 很少），与否定表达选项 1「<ruby>見<rt>み</rt></ruby>る<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>がない」（没有见到的机会）搭配，构成「なかなか<ruby>見<rt>み</rt></ruby>る<ruby>機<rt>き</rt></ruby><ruby>会<rt>かい</rt></ruby>がない」（也很少有机会见到）。</p>
                    <p><strong class="text-textMain">第三步：确立完整句意与句尾。</strong>将前述主从结构相连，并顺接句尾的传闻表达「そうだ」（听说）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>照片上的这种鸟非常罕见，听说即便是研究这种鸟的专家也很少有机会能见到。
                    </p>
                `
            },
            {
                id: "n3_1612_2",
                level: "N3",
                year: "2016年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>春<rt>はる</rt></ruby>から<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>になる<ruby>娘<rt>むすめ</rt></ruby>には、",
                suffix: "できない<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>をいろいろしてほしい。",
                options: [
                    { id: "1", text: "にも" },
                    { id: "2", text: "にしか" },
                    { id: "3", text: "<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>" },
                    { id: "4", text: "<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立限定条件与修饰关系。</strong>后文的「できない<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>」（无法得到的经验）前需要限定条件，名词选项 4「<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>」（大学时代）接续限定助词选项 2「にしか」（只有在……才），构成「<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>にしかできない<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>」（只有大学时代才能有的经验）。</p>
                    <p><strong class="text-textMain">第二步：确立递进范围。</strong>在主语之后，先接续表示递进范围的名词选项 3「<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>」（学习之外）及助词选项 1「にも」（也），构成「<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>にも」（除了学习之外也）。</p>
                    <p><strong class="text-textMain">第三步：确立动作与句尾。</strong>将递进状语与前述的条件修饰语相连，并顺接句尾的「いろいろしてほしい」（希望她能多经历）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>对于从春天起就要成为大学生的女儿，我希望她除了学习之外，也能多积累一些只有大学时代才能体验到的经历。
                    </p>
                `
            },
            {
                id: "n3_1612_3",
                level: "N3",
                year: "2016年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>土<rt>ど</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>は<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をしたり<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>と<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をしたりし、<ruby>日<rt>にち</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>は",
                suffix: "<ruby>私<rt>わたし</rt></ruby>の<ruby>好<rt>す</rt></ruby>きな<ruby>週<rt>しゅう</rt></ruby><ruby>末<rt>まつ</rt></ruby>の<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>だ。",
                options: [
                    { id: "1", text: "のが" },
                    { id: "2", text: "という" },
                    { id: "3", text: "<ruby>家<rt>いえ</rt></ruby>で<ruby>過<rt>す</rt></ruby>ごす" },
                    { id: "4", text: "どこにも<ruby>出<rt>で</rt></ruby>かけずに" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列动作与状态。</strong>题干「<ruby>日<rt>にち</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>は」（星期日则）后接续具体的状态描述选项 4「どこにも<ruby>出<rt>で</rt></ruby>かけずに」（哪里也不去），修饰动词选项 3「<ruby>家<rt>いえ</rt></ruby>で<ruby>過<rt>す</rt></ruby>ごす」（在家里度过），构成「どこにも<ruby>出<rt>で</rt></ruby>かけずに<ruby>家<rt>いえ</rt></ruby>で<ruby>過<rt>す</rt></ruby>ごす」（哪儿也不去在家里度过）。</p>
                    <p><strong class="text-textMain">第二步：确立名词化结构。</strong>动词短语后接续形式名词与提示助词选项 2「という」加选项 1「のが」，构成「というのが」（……这样的方式才是），将整个前项内容名词化并作为主语。</p>
                    <p><strong class="text-textMain">第三步：确立谓语与句尾。</strong>直接顺接句尾的名词谓语「<ruby>私<rt>わたし</rt></ruby>の<ruby>好<rt>す</rt></ruby>きな<ruby>週<rt>しゅう</rt></ruby><ruby>末<rt>まつ</rt></ruby>の<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>だ」（我喜欢的周末度过方式）。综合排序为 4-3-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>星期六购物或者和朋友吃饭，星期日则哪儿也不去在家里度过，这才是我喜欢的周末度过方式。
                    </p>
                `
            },
            {
                id: "n3_1612_4",
                level: "N3",
                year: "2016年12月",
                label: "問題8 - 4",
                prefix: "④、（レストランで）<br><ruby>客<rt>きゃく</rt></ruby>「すみません。15<ruby>分<rt>ふん</rt></ruby>ぐらい<ruby>前<rt>まえ</rt></ruby>に<ruby>案<rt>あん</rt></ruby><ruby>内<rt>ない</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いして、しばらくここで<ruby>待<rt>ま</rt></ruby>てって",
                suffix: "まだですか。」<br><ruby>店<rt>てん</rt></ruby><ruby>員<rt>いん</rt></ruby>「<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby><ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません。」",
                options: [
                    { id: "1", text: "<ruby>待<rt>ま</rt></ruby>っているんです" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>われた" },
                    { id: "3", text: "から" },
                    { id: "4", text: "けど" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立被动动作。</strong>题干引用语「<ruby>待<rt>ま</rt></ruby>てって」（说让我等）后接续被动动词选项 2「<ruby>言<rt>い</rt></ruby>われた」（被告知），构成「<ruby>待<rt>ま</rt></ruby>てって<ruby>言<rt>い</rt></ruby>われた」（被告知在这里等）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与当前状态。</strong>动作后接续原因助词选项 3「から」（因为），再接续当前正在持续的动作选项 1「<ruby>待<rt>ま</rt></ruby>っているんです」（所以我一直等着），构成「<ruby>待<rt>ま</rt></ruby>てって<ruby>言<rt>い</rt></ruby>われたから<ruby>待<rt>ま</rt></ruby>っているんです」（因为您让我等所以我一直等着）。</p>
                    <p><strong class="text-textMain">第三步：确立转折与句尾。</strong>状态后接续逆接助词选项 4「けど」（虽然 / 但是），与句尾的质问「まだですか」（还没好吗）相连。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在餐厅）客：“不好意思。我大约15分钟前就请您带位了，因为您说让我在这里等一会儿，所以我就一直等着，还没好吗？” 店员：“非常抱歉。”
                    </p>
                `
            },
            {
                id: "n3_1612_5",
                level: "N3",
                year: "2016年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を",
                suffix: "<ruby>進<rt>しん</rt></ruby><ruby>学<rt>がく</rt></ruby>を<ruby>決<rt>き</rt></ruby>めた。",
                options: [
                    { id: "1", text: "<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>すればするほど" },
                    { id: "2", text: "<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby><ruby>学<rt>がっ</rt></ruby><ruby>科<rt>か</rt></ruby>への" },
                    { id: "3", text: "と<ruby>思<rt>おも</rt></ruby>うようになって" },
                    { id: "4", text: "もっと<ruby>学<rt>まな</rt></ruby>びたい" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件状语。</strong>题干宾语「<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を」（历史）后接续动作及条件表达选项 1「<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>すればするほど」（越学就越……），构成「<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>すればするほど」（历史越学就越）。</p>
                    <p><strong class="text-textMain">第二步：确立心理状态的变化。</strong>条件后接续引发的心理动作选项 4「もっと<ruby>学<rt>まな</rt></ruby>びたい」（想学得更多），并与表示状态变化的选项 3「と<ruby>思<rt>おも</rt></ruby>うようになって」（变得这样认为），构成「もっと<ruby>学<rt>まな</rt></ruby>びたいと<ruby>思<rt>おも</rt></ruby>うようになって」（变得觉得想要学得更多）。</p>
                    <p><strong class="text-textMain">第三步：确立名词修饰与句尾。</strong>状态变化后接续方向及所属名词修饰语选项 2「<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby><ruby>学<rt>がっ</rt></ruby><ruby>科<rt>か</rt></ruby>への」（升入历史学科的），直接修饰句尾名词「<ruby>進<rt>しん</rt></ruby><ruby>学<rt>がく</rt></ruby>を<ruby>決<rt>き</rt></ruby>めた」（决定了升学）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>历史越学越觉得想要学得更多，于是我决定升入历史学科。
                    </p>
                `
            },
            // ---------------- 2017年7月 (N3) ----------------
            {
                id: "n3_1707_1",
                level: "N3",
                year: "2017年7月",
                label: "問題8 - 1",
                prefix: "①、レストランAは",
                suffix: "なかなか<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>がとれない<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>店<rt>てん</rt></ruby>になった。",
                options: [
                    { id: "1", text: "<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か" },
                    { id: "2", text: "で" },
                    { id: "3", text: "<ruby>何<rt>なに</rt></ruby>か" },
                    { id: "4", text: "<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>されてから" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列与不确定指代。</strong>名词选项 1「<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か」（杂志或）接续选项 3「<ruby>何<rt>なに</rt></ruby>か」（什么），构成不确定指代的组合「<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か<ruby>何<rt>なに</rt></ruby>か」（杂志或是什么的）。</p>
                    <p><strong class="text-textMain">第二步：确立动作场所与被动。</strong>后接表示场所或手段的助词选项 2「で」（在），再接续被动动作及时间起点的选项 4「<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>されてから」（被介绍之后），构成「<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か<ruby>何<rt>なに</rt></ruby>かで<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>されてから」（自从在杂志或者什么上面被介绍之后）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将该时间从句直接接续句尾的「なかなか<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>がとれない<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>店<rt>てん</rt></ruby>になった」（变成了很难预约到的人气餐厅）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>餐厅A自从在杂志或者什么上面被介绍之后，就变成了很难预约的人气餐厅。
                    </p>
                `
            },
            {
                id: "n3_1707_2",
                level: "N3",
                year: "2017年7月",
                label: "問題8 - 2",
                prefix: "②、（<ruby>海<rt>かい</rt></ruby><ruby>岸<rt>がん</rt></ruby>で）<br>A「わあ、<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>がきれいですね。」<br>B「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にすばらしいですね。",
                suffix: "ありません。」",
                options: [
                    { id: "1", text: "<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は" },
                    { id: "2", text: "<ruby>見<rt>み</rt></ruby>たことが" },
                    { id: "3", text: "きれいな" },
                    { id: "4", text: "こんなに" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰。</strong>程度副词选项 4「こんなに」（如此地）修饰形容动词连体形选项 3「きれいな」（美丽的），构成「こんなにきれいな」（如此美丽的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主题。</strong>修饰名词及提示助词选项 1「<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は」（夕阳），构成宾语主题「こんなにきれいな<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は」（如此美丽的夕阳）。</p>
                    <p><strong class="text-textMain">第三步：确立经历句型与句尾。</strong>后接经历表达选项 2「<ruby>見<rt>み</rt></ruby>たことが」（见过），与句尾的否定「ありません」（没有）相连，构成固定句型「～<ruby>見<rt>み</rt></ruby>たことがありません」（没有见过）。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在海岸边）A：“哇，夕阳真美啊。” B：“真的很棒呢。我从来没见过如此美丽的夕阳。”
                    </p>
                `
            },
            {
                id: "n3_1707_3",
                level: "N3",
                year: "2017年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、テレビでテニスの<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>を<ruby>見<rt>み</rt></ruby>た。",
                suffix: "、<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にどきどきした。",
                options: [
                    { id: "1", text: "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>で" },
                    { id: "2", text: "どちらが" },
                    { id: "3", text: "おかしくない" },
                    { id: "4", text: "<ruby>勝<rt>か</rt></ruby>っても" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语与逆接假定。</strong>疑问代词选项 2「どちらが」（无论哪一边）接续动词逆接假定条件选项 4「<ruby>勝<rt>か</rt></ruby>っても」（即使赢），构成「どちらが<ruby>勝<rt>か</rt></ruby>っても」（无论哪边赢）。</p>
                    <p><strong class="text-textMain">第二步：确立双重否定与评价。</strong>后接否定形容词选项 3「おかしくない」（都不奇怪），构成「どちらが<ruby>勝<rt>か</rt></ruby>ってもおかしくない」（无论哪边赢都不奇怪的）。</p>
                    <p><strong class="text-textMain">第三步：确立名词修饰与中顿。</strong>该小句作为连体修饰语，修饰名词及助词选项 1「<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>で」（是一场……比赛，且），并顺接句尾。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天在电视上看了网球比赛。这是一场无论哪边赢都不奇怪的比赛，直到最后都让人非常紧张激动。
                    </p>
                `
            },
            {
                id: "n3_1707_4",
                level: "N3",
                year: "2017年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>には、<ruby>親<rt>おや</rt></ruby>の",
                suffix: "<ruby>習<rt>なら</rt></ruby>わせたほうがいいと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>習<rt>なら</rt></ruby>わせるのではなくて" },
                    { id: "2", text: "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の" },
                    { id: "3", text: "<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>があるものを" },
                    { id: "4", text: "<ruby>習<rt>なら</rt></ruby>わせたいものを" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立所属关系与宾语。</strong>题干「<ruby>親<rt>おや</rt></ruby>の」（父母的）后接名词短语选项 4「<ruby>習<rt>なら</rt></ruby>わせたいものを」（想要让其学习的东西），构成「<ruby>親<rt>おや</rt></ruby>の<ruby>習<rt>なら</rt></ruby>わせたいものを」（父母想要让孩子学的东西）。</p>
                    <p><strong class="text-textMain">第二步：确立否定对比动作。</strong>宾语后接续使役动作及否定对比表达选项 1「<ruby>習<rt>なら</rt></ruby>わせるのではなくて」（不是让其学……而是），构成「～<ruby>習<rt>なら</rt></ruby>わせるのではなくて」（不是让孩子学……而是）。</p>
                    <p><strong class="text-textMain">第三步：确立对比对象与句尾。</strong>后接对比的另一方主语选项 2「<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の」及其修饰的宾语选项 3「<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>があるものを」（孩子感兴趣的东西），顺接句尾的「<ruby>習<rt>なら</rt></ruby>わせたほうがいいと<ruby>思<rt>おも</rt></ruby>う」（我认为让其学习……更好）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>对于孩子，我认为与其让他们学父母想让他们学的东西，不如让他们学自己感兴趣的东西更好。
                    </p>
                `
            },
            {
                id: "n3_1707_5",
                level: "N3",
                year: "2017年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby>、<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>のスピーチ<ruby>大<rt>たい</rt></ruby><ruby>会<rt>かい</rt></ruby>に<ruby>出<rt>で</rt></ruby>る。<ruby>全<rt>ぜん</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>える",
                suffix: "つもりだ。",
                options: [
                    { id: "1", text: "ようにする" },
                    { id: "2", text: "たくさん<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>して" },
                    { id: "3", text: "まで" },
                    { id: "4", text: "メモを<ruby>見<rt>み</rt></ruby>ないで<ruby>話<rt>はな</rt></ruby>せる" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间终点。</strong>题干「<ruby>全<rt>ぜん</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>える」（全部记住）后接续表示终点的助词选项 3「まで」（直到），构成「<ruby>全<rt>ぜん</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>えるまで」（直到全部记住为止）。</p>
                    <p><strong class="text-textMain">第二步：确立中间动作。</strong>时间状语后接续具体动作选项 2「たくさん<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>して」（做很多练习，并且），构成「<ruby>全<rt>ぜん</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>えるまでたくさん<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>して」（做很多练习直到全部记住）。</p>
                    <p><strong class="text-textMain">第三步：确立目标状态与句尾。</strong>动作后接续目标状态选项 4「メモを<ruby>見<rt>み</rt></ruby>ないで<ruby>話<rt>はな</rt></ruby>せる」（能不看小抄讲话），以及表示努力达成某状态的表达选项 1「ようにする」（努力做到），最后与句尾「つもりだ」（打算）相连。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>下个月，我要参加大学的演讲比赛。我打算进行大量的练习直到全部记住，努力做到能够不看小抄进行演讲。
                    </p>
                `
            },
            // ---------------- 2017年12月 (N3) ----------------
            {
                id: "n3_1712_1",
                level: "N3",
                year: "2017年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>課<rt>か</rt></ruby><ruby>長<rt>ちょう</rt></ruby>「<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>さん、<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>の<ruby>整<rt>せい</rt></ruby><ruby>理<rt>り</rt></ruby>をやってもらえますか。<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>金<rt>きん</rt></ruby><ruby>曜<rt>よう</rt></ruby>",
                suffix: "、できるときにお<ruby>願<rt>ねが</rt></ruby>いします。」",
                options: [
                    { id: "1", text: "ですから" },
                    { id: "2", text: "で" },
                    { id: "3", text: "いい" },
                    { id: "4", text: "まで" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间限定。</strong>题干「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>金<rt>きん</rt></ruby><ruby>曜<rt>よう</rt></ruby>」（下周五）后接续表示时间期限的助词选项 4「まで」（到……为止），再接续表示范围或状态的助词选项 2「で」（在……之内），构成「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>金<rt>きん</rt></ruby><ruby>曜<rt>よう</rt></ruby>までで」（到下周五为止）。</p>
                    <p><strong class="text-textMain">第二步：确立评价与原因。</strong>状态后接续评价形容词选项 3「いい」（可以 / 行），构成「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>金<rt>きん</rt></ruby><ruby>曜<rt>よう</rt></ruby>まででいい」（到下周五为止就可以）。然后接续表示原因的选项 1「ですから」（因为），构成「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>金<rt>きん</rt></ruby><ruby>曜<rt>よう</rt></ruby>まででいいですから」（因为到下周五为止就可以了）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾。</strong>将上述原因从句与句尾的请求「できるときにお<ruby>願<rt>ねが</rt></ruby>いします」（请在您方便的时候做）相连。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>科长：“山田，能麻烦你整理一下资料吗？因为下周五之前完成就可以，请在你方便的时候做。”
                    </p>
                `
            },
            {
                id: "n3_1712_2",
                level: "N3",
                year: "2017年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>私<rt>わたし</rt></ruby>は、もし<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が",
                suffix: "<ruby>看<rt>かん</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>師<rt>し</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をしています。",
                options: [
                    { id: "1", text: "<ruby>考<rt>かんが</rt></ruby>えながら" },
                    { id: "2", text: "ということを" },
                    { id: "3", text: "<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>だったら" },
                    { id: "4", text: "どうしてほしいか" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设条件。</strong>题干「もし<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が」（如果自己）后接续假设状态选项 3「<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>だったら」（是患者的话），构成「もし<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>だったら」（如果自己是患者的话）。</p>
                    <p><strong class="text-textMain">第二步：确立思考内容。</strong>假设条件后接续疑问短语选项 4「どうしてほしいか」（希望别人怎么做），再接续形式名词与助词选项 2「ということを」（……这件事），构成「<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>だったらどうしてほしいかということを」（关于如果是患者的话希望别人怎么做这件事）。</p>
                    <p><strong class="text-textMain">第三步：确立伴随动作与句尾。</strong>将前述内容作为思考的宾语，接续伴随动作选项 1「<ruby>考<rt>かんが</rt></ruby>えながら」（一边思考着），并修饰句尾的「<ruby>看<rt>かん</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>師<rt>し</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をしています」（正在做着护士的工作）。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我是一边思考着如果自己是患者会希望护士怎么做，一边从事护士工作的。
                    </p>
                `
            },
            {
                id: "n3_1712_3",
                level: "N3",
                year: "2017年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>はエアコンの<ruby>風<rt>かぜ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きではないので、<ruby>夏<rt>なつ</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>、<ruby>暑<rt>あつ</rt></ruby>くて",
                suffix: "、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>ではエアコンを<ruby>使<rt>つか</rt></ruby>いません。",
                options: [
                    { id: "1", text: "どうしても" },
                    { id: "2", text: "とき" },
                    { id: "3", text: "<ruby>寝<rt>ね</rt></ruby>られない" },
                    { id: "4", text: "<ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>は" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立状态与程度。</strong>题干「<ruby>暑<rt>あつ</rt></ruby>くて」（很热，并且）后接续程度副词选项 1「どうしても」（无论如何也），修饰可能态的否定动词选项 3「<ruby>寝<rt>ね</rt></ruby>られない」（无法入睡），构成「<ruby>暑<rt>あつ</rt></ruby>くてどうしても<ruby>寝<rt>ね</rt></ruby>られない」（热得无论如何也睡不着）。</p>
                    <p><strong class="text-textMain">第二步：确立时间与例外。</strong>该连体修饰语修饰形式名词选项 2「とき」（时候），构成「<ruby>寝<rt>ね</rt></ruby>られないとき」（睡不着的时候）。后接表示例外的短语选项 4「<ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>は」（除了……之外），构成「<ruby>寝<rt>ね</rt></ruby>られないとき<ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>は」（除了睡不着的时候之外）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾。</strong>将该例外条件与句尾的「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>ではエアコンを<ruby>使<rt>つか</rt></ruby>いません」（在自己的房间里不用空调）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为我不喜欢空调的风，所以夏天的夜里，除了热得无论如何也睡不着的时候之外，我在自己的房间里是不用空调的。
                    </p>
                `
            },
            {
                id: "n3_1712_4",
                level: "N3",
                year: "2017年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんは<ruby>元<rt>げん</rt></ruby><ruby>気<rt>き</rt></ruby>がない。<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby>だが、<ruby>何<rt>なに</rt></ruby>が",
                suffix: "してあげられない。",
                options: [
                    { id: "1", text: "<ruby>聞<rt>き</rt></ruby>いても" },
                    { id: "2", text: "あったのか" },
                    { id: "3", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "4", text: "<ruby>答<rt>こた</rt></ruby>えてくれないので" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问内容与动作。</strong>题干「<ruby>何<rt>なに</rt></ruby>が」（什么）后接续发生动作选项 2「あったのか」（发生了），构成疑问小句「<ruby>何<rt>なに</rt></ruby>があったのか」（发生了什么）。然后接续逆接条件的动作选项 1「<ruby>聞<rt>き</rt></ruby>いても」（即使问），构成「<ruby>何<rt>なに</rt></ruby>があったのか<ruby>聞<rt>き</rt></ruby>いても」（即使问他发生了什么）。</p>
                    <p><strong class="text-textMain">第二步：确立原因。</strong>动作后接续不作为的选项及原因助词选项 4「<ruby>答<rt>こた</rt></ruby>えてくれないので」（因为不回答我，所以），构成「<ruby>聞<rt>き</rt></ruby>いても<ruby>答<rt>こた</rt></ruby>えてくれないので」（因为即使问了也不回答，所以）。</p>
                    <p><strong class="text-textMain">第三步：确立全面否定与句尾。</strong>接续全面否定的疑问词搭配选项 3「<ruby>何<rt>なに</rt></ruby>も」（什么也），与句尾的否定可能态「してあげられない」（不能为他做）呼应。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>最近田中精神不太好。虽然很担心，但因为即使问他发生了什么他也不回答，所以我什么也帮不了他。
                    </p>
                `
            },
            {
                id: "n3_1712_5",
                level: "N3",
                year: "2017年12月",
                label: "問題8 - 5",
                prefix: "⑤、この<ruby>辺<rt>あた</rt></ruby>りは<ruby>自<rt>し</rt></ruby><ruby>然<rt>ぜん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く、いつかこういうところに<ruby>住<rt>す</rt></ruby>んでみたいと<ruby>思<rt>おも</rt></ruby>うが、<ruby>近<rt>ちか</rt></ruby>くに<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>できる<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>がないので、",
                suffix: "のは<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>そうだ。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>には" },
                    { id: "2", text: "できない" },
                    { id: "3", text: "<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>する" },
                    { id: "4", text: "<ruby>車<rt>くるま</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>が" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>名词选项 4「<ruby>車<rt>くるま</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>が」（开车）接续能力否定动词选项 2「できない」（不会），构成「<ruby>車<rt>くるま</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>ができない」（不会开车的）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰对象与主语。</strong>该定语修饰代词及助词选项 1「<ruby>私<rt>わたし</rt></ruby>には」（对于我来说），构成「<ruby>車<rt>くるま</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>ができない<ruby>私<rt>わたし</rt></ruby>には」（对于不会开车的我来说）。</p>
                    <p><strong class="text-textMain">第三步：确立形式名词主语与句尾。</strong>接续生活动作选项 3「<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>する」（生活），并与句尾的形式名词短语「のは<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>そうだ」（……似乎很困难）相连，构成「<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>するのは<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>そうだ」（生活起来似乎很困难）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这一带大自然很丰富，虽然想着总有一天想试着住在这样的地方，但因为附近没有可以购物的地方，对于不会开车的我来说生活起来似乎会很困难。
                    </p>
                `
            },
            // ---------------- 2018年7月 (N3) ----------------
            {
                id: "n3_1807_1",
                level: "N3",
                year: "2018年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>私<rt>わたし</rt></ruby>",
                suffix: "なのは、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>の<ruby>幸<rt>しあわ</rt></ruby>せだ。",
                options: [
                    { id: "1", text: "で" },
                    { id: "2", text: "<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "3", text: "にとって" },
                    { id: "4", text: "いちばん<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立对象视角。</strong>题干「<ruby>私<rt>わたし</rt></ruby>」（我）后接续表示视角的复合助词选项 3「にとって」（对……来说），构成「<ruby>私<rt>わたし</rt></ruby>にとって」（对我来说）。</p>
                    <p><strong class="text-textMain">第二步：确立范围状语。</strong>后接续名词选项 2「<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>」（人生）及范围助词选项 1「で」（在……之中），构成「<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>で」（在人生中）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰关系与句尾。</strong>将前述状语修饰程度副词与形容动词选项 4「いちばん<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>」（最重要的），与句尾的形式名词短语「なのは、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>の<ruby>幸<rt>しあわ</rt></ruby>せだ」（是家庭的幸福）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>对我来说，在人生中最重要的事情是家庭的幸福。
                    </p>
                `
            },
            {
                id: "n3_1807_2",
                level: "N3",
                year: "2018年7月",
                label: "問題8 - 2",
                prefix: "②、この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>は<ruby>昔<rt>むかし</rt></ruby>から<ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>きで<ruby>今<rt>いま</rt></ruby>まで",
                suffix: "<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>して<ruby>泣<rt>な</rt></ruby>いてしまう。",
                options: [
                    { id: "1", text: "<ruby>見<rt>み</rt></ruby>ても" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も" },
                    { id: "3", text: "<ruby>見<rt>み</rt></ruby>たけれど" },
                    { id: "4", text: "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立过去动作与逆接。</strong>题干「<ruby>今<rt>いま</rt></ruby>まで」（至今为止）后接续频度副词选项 2「<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も」（多次），修饰过去时动作及逆接助词选项 3「<ruby>見<rt>み</rt></ruby>たけれど」（虽然看了，但是），构成「<ruby>今<rt>いま</rt></ruby>まで<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>見<rt>み</rt></ruby>たけれど」（至今为止虽然看过了很多次，但是）。</p>
                    <p><strong class="text-textMain">第二步：确立让步条件。</strong>转折后引出让步条件，疑问词选项 4「<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>」（多少次）接续动词条件形选项 1「<ruby>見<rt>み</rt></ruby>ても」（即使看），构成「<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>見<rt>み</rt></ruby>ても」（无论看多少次）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾。</strong>将条件状语与句尾的结果动作「<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>して<ruby>泣<rt>な</rt></ruby>いてしまう」（都会感动得哭出来）相连。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这部电影我从以前就很喜欢，至今为止虽然已经看过了很多次，但无论看多少次都会感动得哭出来。
                    </p>
                `
            },
            {
                id: "n3_1807_3",
                level: "N3",
                year: "2018年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>は、<ruby>駅<rt>えき</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>くて<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>なのだが、<ruby>窓<rt>まど</rt></ruby>が",
                suffix: "<ruby>聞<rt>き</rt></ruby>こえてきて、うるさいと<ruby>感<rt>かん</rt></ruby>じることがある。",
                options: [
                    { id: "1", text: "ある" },
                    { id: "2", text: "<ruby>大<rt>おお</rt></ruby><ruby>通<rt>どお</rt></ruby>り<ruby>側<rt>がわ</rt></ruby>に" },
                    { id: "3", text: "せいで" },
                    { id: "4", text: "<ruby>車<rt>くるま</rt></ruby>の<ruby>音<rt>おと</rt></ruby>が" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立存在句结构。</strong>题干主语「<ruby>窓<rt>まど</rt></ruby>が」（窗户）后接续地点状语选项 2「<ruby>大<rt>おお</rt></ruby><ruby>通<rt>どお</rt></ruby>り<ruby>側<rt>がわ</rt></ruby>に」（在主干道一侧），再接存在动词选项 1「ある」（在），构成「<ruby>窓<rt>まど</rt></ruby>が<ruby>大<rt>おお</rt></ruby><ruby>通<rt>どお</rt></ruby>り<ruby>側<rt>がわ</rt></ruby>にある」（窗户在主干道一侧）。</p>
                    <p><strong class="text-textMain">第二步：确立消极原因。</strong>存在动作后接续表示消极原因的形式名词选项 3「せいで」（都怪 / 多亏了），构成「<ruby>窓<rt>まど</rt></ruby>が<ruby>大<rt>おお</rt></ruby><ruby>通<rt>どお</rt></ruby>り<ruby>側<rt>がわ</rt></ruby>にあるせいで」（都怪窗户在主干道那一侧）。</p>
                    <p><strong class="text-textMain">第三步：引出结果主语。</strong>原因引出结果句的主语选项 4「<ruby>車<rt>くるま</rt></ruby>の<ruby>音<rt>おと</rt></ruby>が」（车的声音），与句尾的「<ruby>聞<rt>き</rt></ruby>こえてきて」（传过来，并且）相连。综合排序为 2-1-3-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>新家离车站近很方便，但都怪窗户在主干道那一侧，车的声音传过来，有时会觉得很吵。
                    </p>
                `
            },
            {
                id: "n3_1807_4",
                level: "N3",
                year: "2018年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>林<rt>はやし</rt></ruby>さんの<ruby>奥<rt>おく</rt></ruby>さんは<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>がとても<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>で、ハンバーグが<ruby>特<rt>とく</rt></ruby>においしいらしい。<ruby>林<rt>はやし</rt></ruby>さんは<ruby>奥<rt>おく</rt></ruby>さんの",
                suffix: "ものはないとよく<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "<ruby>作<rt>つく</rt></ruby>る" },
                    { id: "2", text: "ほど" },
                    { id: "3", text: "ハンバーグ" },
                    { id: "4", text: "おいしい" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「<ruby>奥<rt>おく</rt></ruby>さんの」（妻子的）后接续动作选项 1「<ruby>作<rt>つく</rt></ruby>る」（制作的），修饰名词选项 3「ハンバーグ」（汉堡肉），构成「<ruby>奥<rt>おく</rt></ruby>さんの<ruby>作<rt>つく</rt></ruby>るハンバーグ」（妻子制作的汉堡肉）。</p>
                    <p><strong class="text-textMain">第二步：确立比较基准与评价。</strong>名词后接续表示比较基准的助词选项 2「ほど」（像……一样），修饰评价形容词选项 4「おいしい」（美味的），构成「ハンバーグほどおいしい」（像汉堡肉一样美味的）。</p>
                    <p><strong class="text-textMain">第三步：确立最高级句型与句尾。</strong>将前述定语修饰语与句尾名词及否定表达「ものはない」（没有这样的东西）相连，构成「～ほど～はない」（没有比……更……的）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>林先生的妻子非常擅长做饭，听说汉堡肉特别好吃。林先生经常说，没有比妻子做的汉堡肉更美味的东西了。
                    </p>
                `
            },
            {
                id: "n3_1807_5",
                level: "N3",
                year: "2018年7月",
                label: "問題8 - 5",
                prefix: "⑤、",
                suffix: "ことを<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す。",
                options: [
                    { id: "1", text: "<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をするたび" },
                    { id: "2", text: "<ruby>妻<rt>つま</rt></ruby>との<ruby>初<rt>はじ</rt></ruby>めてのデートで" },
                    { id: "3", text: "<ruby>来<rt>き</rt></ruby>たとき" },
                    { id: "4", text: "このレストランで" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立地点状语与频度条件。</strong>选项 4「このレストランで」（在这家餐厅）后接动作及频度表达选项 1「<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をするたび」（每次吃饭时），构成「このレストランで<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をするたび」（每次在这家餐厅吃饭时）。</p>
                    <p><strong class="text-textMain">第二步：确立回忆内容的背景与动作。</strong>引出回忆的背景选项 2「<ruby>妻<rt>つま</rt></ruby>との<ruby>初<rt>はじ</rt></ruby>めてのデートで」（在和妻子的第一次约会中），修饰动作选项 3「<ruby>来<rt>き</rt></ruby>たとき」（来的时候），构成「<ruby>妻<rt>つま</rt></ruby>との<ruby>初<rt>はじ</rt></ruby>めてのデートで<ruby>来<rt>き</rt></ruby>たとき」（在和妻子的第一次约会中来的时候）。</p>
                    <p><strong class="text-textMain">第三步：接续名词化句尾。</strong>将回忆的时间节点作为连体修饰语，直接修饰句尾的形式名词「ことを<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す」（想起……的事情）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>每次在这家餐厅吃饭，都会想起和妻子第一次约会时来到这里的事情。
                    </p>
                `
            },
            // ---------------- 2018年12月 (N3) ----------------
            {
                id: "n3_1812_1",
                level: "N3",
                year: "2018年12月",
                label: "問題8 - 1",
                prefix: "①、なかなか<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>単<rt>たん</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>覚<rt>おぼ</rt></ruby>えられないので、<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>得<rt>とく</rt></ruby><ruby>意<rt>い</rt></ruby>な<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>が",
                suffix: "した。",
                options: [
                    { id: "1", text: "ことに" },
                    { id: "2", text: "やっていた" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>書<rt>か</rt></ruby>いてみる" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓关系。</strong>题干主语「<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>が」（朋友）后接续谓语动词选项 2「やっていた」（一直做的），构成「<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>がやっていた」（朋友一直做的）。</p>
                    <p><strong class="text-textMain">第二步：确立比况状语。</strong>动作后接续表示比况的助动词选项 3「ように」（像……那样），构成「<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>がやっていたように」（像朋友所做的那样）。</p>
                    <p><strong class="text-textMain">第三步：确立决定动作与句尾。</strong>该状语修饰后续的尝试动作选项 4「<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>書<rt>か</rt></ruby>いてみる」（试着写很多遍），并接续决定做某事的句型前半部分选项 1「ことに」，与句尾的「した」（决定了）相连，构成「～ことにした」（决定……）。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为怎么也记不住英语单词，所以我决定像英语好的朋友那样，试着写很多遍。
                    </p>
                `
            },
            {
                id: "n3_1812_2",
                level: "N3",
                year: "2018年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>から",
                suffix: "<ruby>終<rt>お</rt></ruby>わってしまった。",
                options: [
                    { id: "1", text: "とうとう" },
                    { id: "2", text: "<ruby>見<rt>み</rt></ruby>ていた" },
                    { id: "3", text: "<ruby>毎<rt>まい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>" },
                    { id: "4", text: "<ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>きなドラマが" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间限定与动作。</strong>题干时间状语「<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>から」（从半年前开始）后接续频度副词选项 3「<ruby>毎<rt>まい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>」（每周），修饰动作连体形选项 2「<ruby>見<rt>み</rt></ruby>ていた」（一直在看的），构成「<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>から<ruby>毎<rt>まい</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>見<rt>み</rt></ruby>ていた」（从半年前开始每周都在看的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主语。</strong>该连体修饰语修饰名词主语选项 4「<ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>きなドラマが」（最喜欢的电视剧），构成大主语「<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>から<ruby>毎<rt>まい</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>見<rt>み</rt></ruby>ていた<ruby>大<rt>だい</rt></ruby><ruby>好<rt>す</rt></ruby>きなドラマが」（从半年前开始每周都在看的最喜欢的电视剧）。</p>
                    <p><strong class="text-textMain">第三步：确立最终结果与句尾。</strong>主语后接续副词选项 1「とうとう」（终于 / 到底），直接修饰句尾的动作结果「<ruby>終<rt>お</rt></ruby>わってしまった」（结束了）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>从半年前开始每周都在看的最喜欢的电视剧，终于结束了。
                    </p>
                `
            },
            {
                id: "n3_1812_3",
                level: "N3",
                year: "2018年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>大<rt>おお</rt></ruby><ruby>川<rt>かわ</rt></ruby><ruby>橋<rt>ばし</rt></ruby>は",
                suffix: "「めがね<ruby>橋<rt>ばし</rt></ruby>」とも<ruby>呼<rt>よ</rt></ruby>ばれている。",
                options: [
                    { id: "1", text: "している" },
                    { id: "2", text: "<ruby>形<rt>かたち</rt></ruby>を" },
                    { id: "3", text: "ことから" },
                    { id: "4", text: "めがねのような" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比况连体修饰。</strong>比况短语选项 4「めがねのような」（像眼镜一样的）修饰名词选项 2「<ruby>形<rt>かたち</rt></ruby>を」（形状），构成「めがねのような<ruby>形<rt>かたち</rt></ruby>を」（像眼镜一样的形状）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾搭配。</strong>宾语后接续状态动词选项 1「している」（具有 / 呈现），构成「めがねのような<ruby>形<rt>かたち</rt></ruby>をしている」（呈现出像眼镜一样的形状）。</p>
                    <p><strong class="text-textMain">第三步：确立原因与句尾。</strong>小句后接续表示原因及由来的句型选项 3「ことから」（因为……的缘故 / 由于），与句尾的被动表达「『めがね<ruby>橋<rt>ばし</rt></ruby>』とも<ruby>呼<rt>よ</rt></ruby>ばれている」（也被称为“眼镜桥”）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>大川桥由于呈现出像眼镜一样的形状，所以也被称为“眼镜桥”。
                    </p>
                `
            },
            {
                id: "n3_1812_4",
                level: "N3",
                year: "2018年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>さん、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>はどうですか。」<br><ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>「<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってまだ<ruby>少<rt>すこ</rt></ruby>ししか",
                suffix: "ですが、<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>楽<rt>たの</rt></ruby>しいです。」",
                options: [
                    { id: "1", text: "ので" },
                    { id: "2", text: "たっていない" },
                    { id: "3", text: "ばかり" },
                    { id: "4", text: "わからないこと" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间限定与否定呼应。</strong>题干限定词「<ruby>少<rt>すこ</rt></ruby>ししか」（只……一点）必须与否定表达呼应，接续动作否定选项 2「たっていない」（还没有经过），构成「<ruby>少<rt>すこ</rt></ruby>ししかたっていない」（才过去没多久）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与结果。</strong>否定状态后接续表示原因的助词选项 1「ので」（因为），引出结果名词选项 4「わからないこと」（不明白的事情）。</p>
                    <p><strong class="text-textMain">第三步：确立全面状态与句尾。</strong>名词后接续表示满是某种状态的副助词选项 3「ばかり」（全是 / 净是），与句尾的转折表达「ですが、<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>楽<rt>たの</rt></ruby>しいです」（虽然……但每天很开心）相连，构成「わからないことばかりですが」（虽然全是些不懂的事情）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中：“木村，工作怎么样？” 木村：“因为进公司才没过多久，虽然净是些不懂的事情，但是每天都很开心。”
                    </p>
                `
            },
            {
                id: "n3_1812_5",
                level: "N3",
                year: "2018年12月",
                label: "問題8 - 5",
                prefix: "⑤、（<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で）<br><ruby>西<rt>にし</rt></ruby><ruby>川<rt>かわ</rt></ruby>「<ruby>林<rt>はやし</rt></ruby>さん、<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>のセミナーのポスター、<ruby>知<rt>し</rt></ruby>りませんか。さっき",
                suffix: "<ruby>入<rt>はい</rt></ruby>ってたんですけど、<ruby>気<rt>き</rt></ruby>づいたら<ruby>箱<rt>はこ</rt></ruby>がなくなってて。」<br><ruby>林<rt>はやし</rt></ruby>「ああ、<ruby>山<rt>やま</rt></ruby><ruby>下<rt>した</rt></ruby>さんがどこかに<ruby>持<rt>も</rt></ruby>っていきましたよ。」",
                options: [
                    { id: "1", text: "まで" },
                    { id: "2", text: "あった" },
                    { id: "3", text: "あそこに" },
                    { id: "4", text: "<ruby>白<rt>しろ</rt></ruby>い<ruby>段<rt>だん</rt></ruby>ボール<ruby>箱<rt>ばこ</rt></ruby>に" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语。</strong>题干时间词「さっき」（刚才）后接续表示时间界限的助词选项 1「まで」（直到），构成「さっきまで」（直到刚才为止）。</p>
                    <p><strong class="text-textMain">第二步：确立地点存在。</strong>时间状语后接续地点指示词选项 3「あそこに」（在那边），以及存在动词连体形选项 2「あった」（在的），构成「さっきまであそこにあった」（直到刚才还在这边的）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>将前述存在状态修饰名词与归着点助词选项 4「<ruby>白<rt>しろ</rt></ruby>い<ruby>段<rt>だん</rt></ruby>ボール<ruby>箱<rt>ばこ</rt></ruby>に」（白色的纸板箱里），并接续句尾的后续状态「<ruby>入<rt>はい</rt></ruby>ってたんですけど」（之前是放在里面的）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在公司）西川：“林先生，下周研讨会的海报，您知道在哪吗？明明直到刚才还放在那边的那个白色纸板箱里的，回过神来发现箱子不见了。” 林：“啊，山下先生拿到哪里去了哦。”
                    </p>
                `
            },
            // ---------------- 2019年7月 (N3) ----------------
            {
                id: "n3_1907_1",
                level: "N3",
                year: "2019年7月",
                label: "問題8 - 1",
                prefix: "①、X<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>とY<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>のバスケットボールの<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>は10<ruby>時<rt>じ</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>始<rt>し</rt></ruby>の<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>だったが、<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>",
                suffix: "になった。",
                options: [
                    { id: "1", text: "のため" },
                    { id: "2", text: "による" },
                    { id: "3", text: "11<ruby>時<rt>じ</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>始<rt>し</rt></ruby>" },
                    { id: "4", text: "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れ" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果连体修饰。</strong>题干「<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>」（大雨）后接续表示原因的复合助词选项 2「による」（由于……的），修饰名词选项 4「<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れ」（电车的延误），构成「<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>による<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れ」（由于大雨导致的电车延误）。</p>
                    <p><strong class="text-textMain">第二步：确立原因状语。</strong>该名词短语后接续表示原因的形式名词选项 1「のため」（因为），构成「<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>による<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れのため」（因为大雨导致的电车延误）。</p>
                    <p><strong class="text-textMain">第三步：确立结果状态与句尾。</strong>原因状语后接续结果状态选项 3「11<ruby>時<rt>じ</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>始<rt>し</rt></ruby>」（11点开始），与句尾的「になった」（变成了）相连。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>X高中和Y高中的篮球比赛原定是10点开始的，但因为大雨导致的电车延误，变成了11点开始。
                    </p>
                `
            },
            {
                id: "n3_1907_2",
                level: "N3",
                year: "2019年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby><ruby>行<rt>い</rt></ruby>ったさくら<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>には、500<ruby>種<rt>しゅ</rt></ruby><ruby>類<rt>るい</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>の<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>がいた。あんなにいろいろな",
                suffix: "ないだろう。",
                options: [
                    { id: "1", text: "<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>が" },
                    { id: "2", text: "なかなか" },
                    { id: "3", text: "<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>は" },
                    { id: "4", text: "<ruby>見<rt>み</rt></ruby>られる" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立对象与可能态动词。</strong>题干连体词「あんなにいろいろな」（那么多各种各样的）修饰名词及助词选项 1「<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>が」（动物），并作为可能态动词选项 4「<ruby>見<rt>み</rt></ruby>られる」（能看到）的对象，构成「あんなにいろいろな<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>が<ruby>見<rt>み</rt></ruby>られる」（能看到那么多各种各样动物的）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主语。</strong>该连体修饰语修饰场所名词及提示助词选项 3「<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>は」（动物园），构成大主语「あんなにいろいろな<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>が<ruby>見<rt>み</rt></ruby>られる<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>は」（能看到那么多各种各样动物的动物园）。</p>
                    <p><strong class="text-textMain">第三步：确立否定呼应与句尾。</strong>主语后接续必须与否定呼应的副词选项 2「なかなか」（很难 / 几乎不），与句尾的推测否定「ないだろう」（应该没有吧）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天去的樱花动物园里，有500种以上的动物。能看到那么多各种各样动物的动物园，应该很难找出第二家吧。
                    </p>
                `
            },
            {
                id: "n3_1907_3",
                level: "N3",
                year: "2019年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>母<rt>はは</rt></ruby>は、<ruby>姉<rt>あね</rt></ruby>が",
                suffix: "<ruby>泣<rt>な</rt></ruby>きそうな<ruby>顔<rt>かお</rt></ruby>をしていた。",
                options: [
                    { id: "1", text: "<ruby>今<rt>いま</rt></ruby>にも" },
                    { id: "2", text: "<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>したという" },
                    { id: "3", text: "<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いて" },
                    { id: "4", text: "いちばん<ruby>行<rt>い</rt></ruby>きたがっていた" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰语。</strong>题干主语「<ruby>姉<rt>あね</rt></ruby>が」（姐姐）接续表示愿望的定语从句选项 4「いちばん<ruby>行<rt>い</rt></ruby>きたがっていた」（最想去的），修饰名词短语选项 2「<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>したという」（考上了……大学的），构成「<ruby>姉<rt>あね</rt></ruby>がいちばん<ruby>行<rt>い</rt></ruby>きたがっていた<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>したという」（考上了姐姐最想去的大学的）。</p>
                    <p><strong class="text-textMain">第二步：确立同位语结构与动作原因。</strong>该同位语从句修饰名词及中顿动作选项 3「<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いて」（听到了……消息，并且），构成原因状语「～<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>したという<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いて」（听到了考上……大学的消息）。</p>
                    <p><strong class="text-textMain">第三步：确立副词修饰与句尾。</strong>动作后接续副词选项 1「<ruby>今<rt>いま</rt></ruby>にも」（眼看就要 / 马上），直接修饰句尾的样态表达「<ruby>泣<rt>な</rt></ruby>きそうな<ruby>顔<rt>かお</rt></ruby>をしていた」（露出了一副快要哭出来的表情）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>母亲听到了姐姐考上了她最想去的大学的消息，露出了一副眼看就要哭出来的表情。
                    </p>
                `
            },
            {
                id: "n3_1907_4",
                level: "N3",
                year: "2019年7月",
                label: "問題8 - 4",
                prefix: "④、20<ruby>階<rt>かい</rt></ruby><ruby>建<rt>だ</rt></ruby>ての<ruby>大<rt>おお</rt></ruby>きいマンションが",
                suffix: "<ruby>昼<rt>ひる</rt></ruby>でも<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>隣<rt>となり</rt></ruby>に" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に" },
                    { id: "3", text: "<ruby>建<rt>た</rt></ruby>ったことで" },
                    { id: "4", text: "<ruby>日<rt>ひ</rt></ruby>が<ruby>当<rt>あ</rt></ruby>たらなくなって" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作场所与原因。</strong>题干主语「20<ruby>階<rt>かい</rt></ruby><ruby>建<rt>だ</rt></ruby>ての<ruby>大<rt>おお</rt></ruby>きいマンションが」（20层高的大型公寓）后接续场所方位词选项 1「<ruby>隣<rt>となり</rt></ruby>に」（在旁边），再接续动作及原因形式名词选项 3「<ruby>建<rt>た</rt></ruby>ったことで」（因为建了），构成「マンションが<ruby>隣<rt>となり</rt></ruby>に<ruby>建<rt>た</rt></ruby>ったことで」（因为旁边建了大型公寓）。</p>
                    <p><strong class="text-textMain">第二步：确立结果事件的着落点。</strong>原因状语引出结果事件的着落点，即选项 2「<ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に」（在我的家里）。</p>
                    <p><strong class="text-textMain">第三步：确立状态变化与句尾。</strong>着落点后接续状态变化动词选项 4「<ruby>日<rt>ひ</rt></ruby>が<ruby>当<rt>あ</rt></ruby>たらなくなって」（变得照不到太阳，并且），顺接句尾的结果「<ruby>昼<rt>ひる</rt></ruby>でも<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>い」（即使是白天房间里也很暗）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为旁边建了一栋20层高的大型公寓，我家变得照不到太阳，即使是白天房间里也很暗。
                    </p>
                `
            },
            {
                id: "n3_1907_5",
                level: "N3",
                year: "2019年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>山<rt>やま</rt></ruby><ruby>下<rt>した</rt></ruby>さんって、パソコンにすごく<ruby>詳<rt>くわ</rt></ruby>しいよね。」<br><ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>「うん。<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>の",
                suffix: "よ。」",
                options: [
                    { id: "1", text: "とき" },
                    { id: "2", text: "アルバイトしていた" },
                    { id: "3", text: "みたいだ" },
                    { id: "4", text: "コンピューターの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语。</strong>题干「<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>の」（大学生的）后接续形式名词选项 1「とき」（时候），构成时间状语「<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>のとき」（大学生的时候）。</p>
                    <p><strong class="text-textMain">第二步：确立地点与动作搭配。</strong>时间状语后接续地点场所选项 4「コンピューターの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で」（在电脑公司），再接续过去的动作选项 2「アルバイトしていた」（做过兼职），构成「コンピューターの<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>でアルバイトしていた」（在电脑公司做过兼职）。</p>
                    <p><strong class="text-textMain">第三步：确立推测助动词与句尾。</strong>动作后接续推测助动词选项 3「みたいだ」（似乎是），并与句尾的语气助词「よ」（哦）相连。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中：“山下对电脑非常了解呢。” 木村：“嗯。似乎是在大学生的时候在电脑公司做过兼职哦。”
                    </p>
                `
            },
            // ---------------- 2019年12月 (N3) ----------------
            {
                id: "n3_1912_1",
                level: "N3",
                year: "2019年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>昨日<rt>きのう</rt></ruby><ruby>父<rt>ちち</rt></ruby>に、<ruby>来週<rt>らいしゅう</rt></ruby><ruby>友<rt>とも</rt></ruby>だちと<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く",
                suffix: "<ruby>頼<rt>たの</rt></ruby>んだが、<ruby>断<rt>ことわ</rt></ruby>られてしまった。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "<ruby>車<rt>くるま</rt></ruby>を" },
                    { id: "3", text: "ので" },
                    { id: "4", text: "<ruby>使<rt>つか</rt></ruby>わせてほしい" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因状语。</strong>题干「<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く」（去旅行）后接续原因助词选项 3「ので」（因为），构成「<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くので」（因为要去旅行）。</p>
                    <p><strong class="text-textMain">第二步：确立请求内容。</strong>宾语选项 2「<ruby>車<rt>くるま</rt></ruby>を」（车）接续使役授受表达选项 4「<ruby>使<rt>つか</rt></ruby>わせてほしい」（希望让我使用），构成「<ruby>車<rt>くるま</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わせてほしい」（希望让我用车）。</p>
                    <p><strong class="text-textMain">第三步：确立引用与句尾。</strong>将请求内容接续引用助词选项 1「と」（说），并与句尾的「<ruby>頼<rt>たの</rt></ruby>んだが」（虽然拜托了）相连。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天向父亲请求说因为下周要和朋友去旅行希望能借车用用，结果被拒绝了。
                    </p>
                `
            },
            {
                id: "n3_1912_2",
                level: "N3",
                year: "2019年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>桜<rt>さくら</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>",
                suffix: "についてアンケート<ruby>調査<rt>ちょうさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>った。",
                options: [
                    { id: "1", text: "に<ruby>対<rt>たい</rt></ruby>する" },
                    { id: "2", text: "の" },
                    { id: "3", text: "<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>" },
                    { id: "4", text: "<ruby>働<rt>はたら</rt></ruby>くこと" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰起点。</strong>题干「<ruby>学生<rt>がくせい</rt></ruby>」（学生）后接续所属助词选项 2「の」（的），修饰名词化动作选项 4「<ruby>働<rt>はたら</rt></ruby>くこと」（工作），构成「<ruby>学生<rt>がくせい</rt></ruby>の<ruby>働<rt>はたら</rt></ruby>くこと」（学生对工作这一行为）。</p>
                    <p><strong class="text-textMain">第二步：确立针对对象。</strong>后接续表示针对的句型选项 1「に<ruby>対<rt>たい</rt></ruby>する」（对于……的），构成「<ruby>学生<rt>がくせい</rt></ruby>の<ruby>働<rt>はたら</rt></ruby>くことに<ruby>対<rt>たい</rt></ruby>する」（学生对于工作的）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰中心词与句尾。</strong>该定语修饰中心名词选项 3「<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>」（看法），并与句尾的「について」（关于）相连。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>樱花大学关于学生对于工作的看法进行了问卷调查。
                    </p>
                `
            },
            {
                id: "n3_1912_3",
                level: "N3",
                year: "2019年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>食事<rt>しょくじ</rt></ruby>の",
                suffix: "を<ruby>汚<rt>よご</rt></ruby>してしまった。",
                options: [
                    { id: "1", text: "ときに" },
                    { id: "2", text: "ばかりの" },
                    { id: "3", text: "<ruby>白<rt>しろ</rt></ruby>いTシャツ" },
                    { id: "4", text: "<ruby>買<rt>か</rt></ruby>った" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语。</strong>题干「<ruby>食事<rt>しょくじ</rt></ruby>の」（吃饭的）后接续形式名词选项 1「ときに」（时候），构成「<ruby>食事<rt>しょくじ</rt></ruby>のときに」（吃饭的时候）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>动作选项 4「<ruby>買<rt>か</rt></ruby>った」（买的）接续表示刚刚完成的句型选项 2「ばかりの」（刚刚……的），构成「<ruby>買<rt>か</rt></ruby>ったばかりの」（刚刚买的）。</p>
                    <p><strong class="text-textMain">第三步：确立宾语与句尾。</strong>该修饰语修饰名词宾语选项 3「<ruby>白<rt>しろ</rt></ruby>いTシャツ」（白T恤），并顺接句尾的「を<ruby>汚<rt>よご</rt></ruby>してしまった」（弄脏了）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>吃饭的时候，把刚买的白T恤给弄脏了。
                    </p>
                `
            },
            {
                id: "n3_1912_4",
                level: "N3",
                year: "2019年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>昨日<rt>きのう</rt></ruby><ruby>初<rt>はじ</rt></ruby>めて<ruby>花川<rt>はなかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>に<ruby>行<rt>い</rt></ruby>った。<ruby>花川<rt>はなかわ</rt></ruby><ruby>駅<rt>えき</rt></ruby>まで",
                suffix: "<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>駅員<rt>えきいん</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いた。",
                options: [
                    { id: "1", text: "わからなくて" },
                    { id: "2", text: "どの<ruby>電車<rt>でんしゃ</rt></ruby>で" },
                    { id: "3", text: "<ruby>一番<rt>いちばん</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>着<rt>つ</rt></ruby>くのか" },
                    { id: "4", text: "<ruby>行<rt>い</rt></ruby>けば" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问内容。</strong>疑问词短语选项 2「どの<ruby>電車<rt>でんしゃ</rt></ruby>で」（坐哪趟电车）接续假定条件选项 4「<ruby>行<rt>い</rt></ruby>けば」（去的话），再引出疑问焦点选项 3「<ruby>一番<rt>いちばん</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>着<rt>つ</rt></ruby>くのか」（能最快到达呢），构成「どの<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>けば<ruby>一番<rt>いちばん</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>着<rt>つ</rt></ruby>くのか」（坐哪趟电车去的话能最快到达呢）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与动作。</strong>该疑问小句作为后续动作的原因，接续状态否定选项 1「わからなくて」（因为不知道，所以）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾。</strong>将原因状语与句尾的「<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>駅員<rt>えきいん</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いた」（在乘电车前问了站务员）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天第一次去花川站。因为不知道坐哪趟电车去能最快到达花川站，所以在乘电车前问了站务员。
                    </p>
                `
            },
            {
                id: "n3_1912_5",
                level: "N3",
                year: "2019年12月",
                label: "問題8 - 5",
                prefix: "⑤、A「ねえ、<ruby>明日<rt>あした</rt></ruby>のパーティーに<ruby>行<rt>い</rt></ruby>く？<ruby>会場<rt>かいじょう</rt></ruby>のレストランが<ruby>駅<rt>えき</rt></ruby>から<ruby>遠<rt>とお</rt></ruby>くてちょっと<ruby>不便<rt>ふべん</rt></ruby>だから<ruby>行<rt>い</rt></ruby>こうか<ruby>迷<rt>まよ</rt></ruby>っているんだけど。」<br>B「<ruby>私<rt>わたし</rt></ruby>、<ruby>車<rt>くるま</rt></ruby>で",
                suffix: "。」",
                options: [
                    { id: "1", text: "もし" },
                    { id: "2", text: "<ruby>乗<rt>の</rt></ruby>せて<ruby>行<rt>い</rt></ruby>ってあげる" },
                    { id: "3", text: "<ruby>行<rt>い</rt></ruby>くんだったら" },
                    { id: "4", text: "<ruby>行<rt>い</rt></ruby>くつもりだから" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作意向。</strong>题干「<ruby>私<rt>わたし</rt></ruby>、<ruby>車<rt>くるま</rt></ruby>で」（我，开车）后接续意向及原因选项 4「<ruby>行<rt>い</rt></ruby>くつもりだから」（因为打算去），构成「<ruby>私<rt>わたし</rt></ruby>、<ruby>車<rt>くるま</rt></ruby>で<ruby>行<rt>い</rt></ruby>くつもりだから」（因为我打算开车去）。</p>
                    <p><strong class="text-textMain">第二步：确立假设条件。</strong>原因说明后，接续副词选项 1「もし」（如果）及假定条件选项 3「<ruby>行<rt>い</rt></ruby>くんだったら」（要去的话），构成「もし<ruby>行<rt>い</rt></ruby>くんだったら」（如果你要去的话）。</p>
                    <p><strong class="text-textMain">第三步：确立后续动作与句尾。</strong>假定条件后接续提议动作选项 2「<ruby>乗<rt>の</rt></ruby>せて<ruby>行<rt>い</rt></ruby>ってあげる」（可以载你一起去），并结束对话。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“哎，明天的派对你去吗？因为会场的餐厅离车站远有点不方便，我正犹豫要不要去呢。” B：“因为我打算开车去，如果你要去的话，我可以载你一起去哦。”
                    </p>
                `
            },
            // ---------------- 2020年12月 (N3) ----------------
            {
                id: "n3_202012_1",
                level: "N3",
                year: "2020年12月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>喫<rt>きっ</rt></ruby><ruby>茶<rt>さ</rt></ruby><ruby>店<rt>てん</rt></ruby>はコーヒー",
                suffix: "<ruby>美味<rt>おい</rt></ruby>しい。",
                options: [
                    { id: "1", text: "などの" },
                    { id: "2", text: "スパゲッティ" },
                    { id: "3", text: "<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>も" },
                    { id: "4", text: "だけでなく" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立递进关系。</strong>题干「コーヒー」（咖啡）后接续表示递进的助词短语选项 4「だけでなく」（不仅），构成「コーヒーだけでなく」（不仅是咖啡）。</p>
                    <p><strong class="text-textMain">第二步：确立举例与名词修饰。</strong>名词选项 2「スパゲッティ」（意大利面）接续表示举例的选项 1「などの」（之类的），修饰名词及助词选项 3「<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>も」（料理也），构成「スパゲッティなどの<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>も」（意大利面等料理也）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前后两部分相连，并顺接句尾的形容词「<ruby>美味<rt>おい</rt></ruby>しい」（美味）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这家咖啡店不仅是咖啡，意大利面等料理也很美味。
                    </p>
                `
            },
            {
                id: "n3_202012_2",
                level: "N3",
                year: "2020年12月",
                label: "問題8 - 2",
                prefix: "②、（<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby><ruby>館<rt>かん</rt></ruby>で）<br><ruby>妻<rt>つま</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>、ちょっとジュース<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>ってくるね。」<br><ruby>夫<rt>おっと</rt></ruby>「うん。あ、でも、<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>が",
                suffix: "よ。<ruby>急<rt>いそ</rt></ruby>いでね。」",
                options: [
                    { id: "1", text: "しかない" },
                    { id: "2", text: "<ruby>始<rt>はじ</rt></ruby>まる" },
                    { id: "3", text: "あと3<ruby>分<rt>ぷん</rt></ruby>" },
                    { id: "4", text: "まで" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间终点。</strong>题干主语「<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>が」（电影）后接续谓语动词选项 2「<ruby>始<rt>はじ</rt></ruby>まる」（开始），再接续表示时间终点的助词选项 4「まで」（直到），构成「<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まるまで」（直到电影开始）。</p>
                    <p><strong class="text-textMain">第二步：确立剩余时间量。</strong>时间终点后接续表示剩余时间的数量词选项 3「あと3<ruby>分<rt>ぷん</rt></ruby>」（还剩3分钟）。</p>
                    <p><strong class="text-textMain">第三步：确立限定表达与句尾。</strong>接续表示限定的助词搭配选项 1「しかない」（只有），与句尾的语气词「よ」（哦）相连，构成「あと3<ruby>分<rt>ぷん</rt></ruby>しかないよ」（只剩3分钟了哦）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在电影院）妻子：“我去买点果汁就回来哦。” 丈夫：“嗯。啊，但是距离电影开始只剩3分钟了哦。快点去吧。”
                    </p>
                `
            },
            {
                id: "n3_202012_3",
                level: "N3",
                year: "2020年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>今<rt>こん</rt></ruby><ruby>度<rt>ど</rt></ruby>の<ruby>日<rt>にち</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>に<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>式<rt>しき</rt></ruby>がある。",
                suffix: "だが。",
                options: [
                    { id: "1", text: "の" },
                    { id: "2", text: "いい" },
                    { id: "3", text: "<ruby>晴<rt>は</rt></ruby>れる" },
                    { id: "4", text: "と" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立愿望条件句型。</strong>题干「ある。」（有。）后另起一句，动作选项 3「<ruby>晴<rt>は</rt></ruby>れる」（晴天）接续假定条件助词选项 4「と」（如果），再接续形容词选项 2「いい」（好），构成「<ruby>晴<rt>は</rt></ruby>れるといい」（如果能放晴就好了）。</p>
                    <p><strong class="text-textMain">第二步：确立形式名词与逆接。</strong>该表达后接续形式名词及语感调节选项 1「の」（起解释说明或强调语气的名词化作用），构成「<ruby>晴<rt>は</rt></ruby>れるといいの」。</p>
                    <p><strong class="text-textMain">第三步：结合句尾转折。</strong>直接与句尾的逆接结尾「だが。」（但是）相连，构成「～といいのだが」（要是……就好了，但是）。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这个星期天有朋友的结婚典礼。要是能放晴就好了，但是（担心天气不好）。
                    </p>
                `
            },
            {
                id: "n3_202012_4",
                level: "N3",
                year: "2020年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>は、サッカークラブの<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>がきついと",
                suffix: "<ruby>好<rt>す</rt></ruby>きだからと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "よく<ruby>言<rt>い</rt></ruby>っているが" },
                    { id: "2", text: "やっぱりサッカーが" },
                    { id: "3", text: "<ruby>続<rt>つづ</rt></ruby>けているのは" },
                    { id: "4", text: "それでもやめずに" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立转折关系。</strong>题干引用内容「きついと」（说很辛苦）后接续频度副词及逆接谓语选项 1「よく<ruby>言<rt>い</rt></ruby>っているが」（虽然经常这么说，但是），构成「きついとよく<ruby>言<rt>い</rt></ruby>っているが」（虽然经常说很辛苦，但是）。</p>
                    <p><strong class="text-textMain">第二步：确立动作状态与名词化主语。</strong>转折后接续逆接连词及伴随状态选项 4「それでもやめずに」（即使如此也不放弃地），修饰动作及形式名词选项 3「<ruby>続<rt>つづ</rt></ruby>けているのは」（一直坚持的理由是），构成后续内容的大主语。</p>
                    <p><strong class="text-textMain">第三步：确立原因与句尾。</strong>引出真正的原因主语选项 2「やっぱりサッカーが」（果然对足球），并顺接句尾的「<ruby>好<rt>す</rt></ruby>きだからと<ruby>思<rt>おも</rt></ruby>う」（我认为是因为喜欢）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>儿子虽然经常说足球俱乐部的练习很辛苦，但即使如此他也没有放弃一直坚持下来，我认为果然还是因为他喜欢足球。
                    </p>
                `
            },
            {
                id: "n3_202012_5",
                level: "N3",
                year: "2020年12月",
                label: "問題8 - 5",
                prefix: "⑤、うちから<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>まで<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で40<ruby>分<rt>ぷん</rt></ruby>かかる。<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>なら20<ruby>分<rt>ぷん</rt></ruby>だが、<ruby>朝<rt>あさ</rt></ruby>の",
                suffix: "<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>通<rt>かよ</rt></ruby>っている。",
                options: [
                    { id: "1", text: "こんでいる<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>は" },
                    { id: "2", text: "よい<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby>になるから" },
                    { id: "3", text: "<ruby>嫌<rt>きら</rt></ruby>いだし" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>けば" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列原因之一。</strong>题干时间词「<ruby>朝<rt>あさ</rt></ruby>の」（早晨的）修饰名词选项 1「こんでいる<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>は」（拥挤的电车），再接续情感评价及原因并列助词选项 3「<ruby>嫌<rt>きら</rt></ruby>いだし」（讨厌，并且），构成「<ruby>朝<rt>あさ</rt></ruby>のこんでいる<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>は<ruby>嫌<rt>きら</rt></ruby>いだし」（早晨拥挤的电车很讨厌，而且）。</p>
                    <p><strong class="text-textMain">第二步：确立并列原因之二。</strong>后接表示假设条件的动作选项 4「<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>けば」（如果骑自行车去的话），再接续结果及原因助词选项 2「よい<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby>になるから」（因为能成为很好的运动），构成第二个原因从句。</p>
                    <p><strong class="text-textMain">第三步：结合句尾结果。</strong>将上述两个并列原因顺接句尾的最终行为「<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>通<rt>かよ</rt></ruby>っている」（骑自行车上学）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>从家到学校骑自行车要花40分钟。坐电车的话只要20分钟，但是早晨拥挤的电车很讨厌，而且骑自行车去的话能锻炼身体，所以我骑自行车上学。
                    </p>
                `
            },
            // ---------------- 2021年7月 (N3) ----------------
            {
                id: "n3_202107_1",
                level: "N3",
                year: "2021年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>先生<rt>せんせい</rt></ruby>「みなさんは、<ruby>一度<rt>いちど</rt></ruby>",
                suffix: "と<ruby>思<rt>おも</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>はいますか。」",
                options: [
                    { id: "1", text: "<ruby>会<rt>あ</rt></ruby>ってみたい" },
                    { id: "2", text: "いい" },
                    { id: "3", text: "で" },
                    { id: "4", text: "から" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立数量与条件限定。</strong>题干「<ruby>一度<rt>いちど</rt></ruby>」（一次）后接续表示范围或限定的助词选项 3「で」（用 / 以），再接续评价形容词选项 2「いい」（好 / 可以），构成「<ruby>一度<rt>いちど</rt></ruby>でいい」（哪怕只有一次也好）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与后续动作。</strong>条件后接续原因助词选项 4「から」（因为 / 所以），构成「<ruby>一度<rt>いちど</rt></ruby>でいいから」（哪怕只有一次也好，所以）。</p>
                    <p><strong class="text-textMain">第三步：确立愿望表达与句尾。</strong>最后接续愿望动词选项 1「<ruby>会<rt>あ</rt></ruby>ってみたい」（想见一见），与句尾的「と<ruby>思<rt>おも</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>はいますか」（有这么想的人吗）相连。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>老师：“大家有没有觉得‘哪怕只有一次也好，想见一见’的人呢？”
                    </p>
                `
            },
            {
                id: "n3_202107_2",
                level: "N3",
                year: "2021年7月",
                label: "問題8 - 2",
                prefix: "②、A「パーティーの<ruby>料理<rt>りょうり</rt></ruby>はどうでしたか。」<br>B「おいしかったです。",
                suffix: "わかりませんが、お<ruby>刺身<rt>さしみ</rt></ruby>がおいしかったです。」",
                options: [
                    { id: "1", text: "という" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby>" },
                    { id: "3", text: "か" },
                    { id: "4", text: "<ruby>魚<rt>さかな</rt></ruby>" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问与称谓。</strong>疑问词选项 2「<ruby>何<rt>なん</rt></ruby>」（什么）接续表示称谓内容的助词选项 1「という」（叫做……的），构成「<ruby>何<rt>なん</rt></ruby>という」（叫做什么的）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问对象。</strong>修饰名词选项 4「<ruby>魚<rt>さかな</rt></ruby>」（鱼），构成「<ruby>何<rt>なん</rt></ruby>という<ruby>魚<rt>さかな</rt></ruby>」（叫做什么的鱼）。</p>
                    <p><strong class="text-textMain">第三步：确立疑问小句与句尾。</strong>名词后接续表示不确定疑问的副助词选项 3「か」，构成疑问小句「<ruby>何<rt>なん</rt></ruby>という<ruby>魚<rt>さかな</rt></ruby>か」（是叫做什么的鱼），并与句尾的「わかりませんが」（虽然不知道）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“派对的菜肴怎么样？” B：“很好吃。虽然不知道那是叫做什么的鱼，但生鱼片很好吃。”
                    </p>
                `
            },
            {
                id: "n3_202107_3",
                level: "N3",
                year: "2021年7月",
                label: "問題8 - 3",
                prefix: "③、A「<ruby>京都<rt>きょうと</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>早<rt>はや</rt></ruby>く<ruby>送<rt>おく</rt></ruby>って。」<br>B「<ruby>送<rt>おく</rt></ruby>る",
                suffix: "から、もう<ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>って。」",
                options: [
                    { id: "1", text: "<ruby>選<rt>えら</rt></ruby>んでいる" },
                    { id: "2", text: "<ruby>写真<rt>しゃしん</rt></ruby>を" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>" },
                    { id: "4", text: "ところだ" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「<ruby>送<rt>おく</rt></ruby>る」（发送的）修饰名词及宾格助词选项 2「<ruby>写真<rt>しゃしん</rt></ruby>を」（照片），构成宾语「<ruby>送<rt>おく</rt></ruby>る<ruby>写真<rt>しゃしん</rt></ruby>を」（要发送的照片）。</p>
                    <p><strong class="text-textMain">第二步：确立时间状语与动作。</strong>接续时间副词选项 3「<ruby>今<rt>いま</rt></ruby>」（现在），以及正在进行的动作选项 1「<ruby>選<rt>えら</rt></ruby>んでいる」（正在挑选），构成「<ruby>今<rt>いま</rt></ruby><ruby>選<rt>えら</rt></ruby>んでいる」（现在正在挑选）。</p>
                    <p><strong class="text-textMain">第三步：确立阶段状态与句尾。</strong>动作后接续表示动作所处阶段的形式名词选项 4「ところだ」（正处于……的时候），与句尾的原因助词「から」（因为）相连，构成「<ruby>今<rt>いま</rt></ruby><ruby>選<rt>えら</rt></ruby>んでいるところだから」（因为现在正处于挑选的时候）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“快把京都旅行的照片发给我。” B：“我这会儿正挑着要发的照片呢，你再稍微等一下。”
                    </p>
                `
            },
            {
                id: "n3_202107_4",
                level: "N3",
                year: "2021年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>私<rt>わたし</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>が",
                suffix: "ほとんどない。",
                options: [
                    { id: "1", text: "<ruby>苦手<rt>にがて</rt></ruby>で" },
                    { id: "2", text: "<ruby>料理<rt>りょうり</rt></ruby>は" },
                    { id: "3", text: "<ruby>作<rt>つく</rt></ruby>れる" },
                    { id: "4", text: "レシピを<ruby>見<rt>み</rt></ruby>ずに" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果状态。</strong>题干主语「<ruby>私<rt>わたし</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>が」（我做饭）后接续状态及中顿选项 1「<ruby>苦手<rt>にがて</rt></ruby>で」（不擅长，因此），构成「<ruby>私<rt>わたし</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>が<ruby>苦手<rt>にがて</rt></ruby>で」（我不擅长做饭，所以）。（注：原图选项1遗漏了中顿助词「で」，此处依标准语法补全为「<ruby>苦手<rt>にがて</rt></ruby>で」）。</p>
                    <p><strong class="text-textMain">第二步：确立伴随状态与动作。</strong>后接否定伴随状态选项 4「レシピを<ruby>見<rt>み</rt></ruby>ずに」（不看菜谱地），修饰可能态动词选项 3「<ruby>作<rt>つく</rt></ruby>れる」（能做的），构成「レシピを<ruby>見<rt>み</rt></ruby>ずに<ruby>作<rt>つく</rt></ruby>れる」（不看菜谱能做的）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>该定语修饰大主语选项 2「<ruby>料理<rt>りょうり</rt></ruby>は」（菜肴），并与句尾的「ほとんどない」（几乎没有）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我很不擅长做饭，不看菜谱就能做出来的菜几乎没有。
                    </p>
                `
            },
            {
                id: "n3_202107_5",
                level: "N3",
                year: "2021年7月",
                label: "問題8 - 5",
                prefix: "⑤、この<ruby>島<rt>しま</rt></ruby>は、<ruby>空<rt>そら</rt></ruby>から",
                suffix: "「<ruby>耳島<rt>みみじま</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ばれています。",
                options: [
                    { id: "1", text: "<ruby>形<rt>かたち</rt></ruby>" },
                    { id: "2", text: "に<ruby>見<rt>み</rt></ruby>えるから" },
                    { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような" },
                    { id: "4", text: "<ruby>見<rt>み</rt></ruby>ると" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设条件。</strong>题干「<ruby>空<rt>そら</rt></ruby>から」（从天空中）后接续条件动作选项 4「<ruby>見<rt>み</rt></ruby>ると」（看的话），构成「<ruby>空<rt>そら</rt></ruby>から<ruby>見<rt>み</rt></ruby>ると」（从天空中看的话）。</p>
                    <p><strong class="text-textMain">第二步：确立比况与名词修饰。</strong>条件后接续表示比喻的连体修饰语选项 3「<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような」（像人耳一样的），修饰名词选项 1「<ruby>形<rt>かたち</rt></ruby>」（形状），构成「<ruby>人<rt>ひと</rt></ruby>の<ruby>耳<rt>みみ</rt></ruby>のような<ruby>形<rt>かたち</rt></ruby>」（像人耳一样的形状）。</p>
                    <p><strong class="text-textMain">第三步：确立原因与句尾。</strong>名词后接续表示状态及原因的选项 2「に<ruby>見<rt>み</rt></ruby>えるから」（因为看起来像），与句尾的被动表达「『<ruby>耳島<rt>みみじま</rt></ruby>』と<ruby>呼<rt>よ</rt></ruby>ばれています」（被称为“耳岛”）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这座岛因为从天空中看的话，看起来像人耳的形状，由此被称为“耳岛”。
                    </p>
                `
            },
            // ---------------- 2021年12月 (N3) ----------------
            {
                id: "n3_202112_1",
                level: "N3",
                year: "2021年12月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>小学生<rt>しょうがくせい</rt></ruby>は",
                suffix: "<ruby>問題<rt>もんだい</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>解<rt>と</rt></ruby>いてしまう。",
                options: [
                    { id: "1", text: "<ruby>大人<rt>おとな</rt></ruby>" },
                    { id: "2", text: "ような" },
                    { id: "3", text: "でも" },
                    { id: "4", text: "<ruby>解<rt>と</rt></ruby>けない" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立让步条件。</strong>名词选项 1「<ruby>大人<rt>おとな</rt></ruby>」（大人）接续表示让步的助词选项 3「でも」（即使是），构成「<ruby>大人<rt>おとな</rt></ruby>でも」（即使是大人）。</p>
                    <p><strong class="text-textMain">第二步：确立能力否定。</strong>让步条件后接续能力否定的动词选项 4「<ruby>解<rt>と</rt></ruby>けない」（解不开），构成「<ruby>大人<rt>おとな</rt></ruby>でも<ruby>解<rt>と</rt></ruby>けない」（即使大人也解不开的）。</p>
                    <p><strong class="text-textMain">第三步：确立比况修饰与句尾。</strong>否定状态后接续比况助动词选项 2「ような」（像……一样的），作为连体修饰语直接修饰句尾的名词「<ruby>問題<rt>もんだい</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>解<rt>と</rt></ruby>いてしまう」（把问题简单地解开了）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这个小学生把即使是大人也解不开的那种问题简单地解开了。
                    </p>
                `
            },
            {
                id: "n3_202112_2",
                level: "N3",
                year: "2021年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>去年<rt>きょねん</rt></ruby>、<ruby>初<rt>はじ</rt></ruby>めて<ruby>一人<rt>ひとり</rt></ruby>で<ruby>海外<rt>かいがい</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>した。<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>は<ruby>心配<rt>しんぱい</rt></ruby>なこともあったが、",
                suffix: "だった。",
                options: [
                    { id: "1", text: "<ruby>楽<rt>たの</rt></ruby>しいこと" },
                    { id: "2", text: "ばかり" },
                    { id: "3", text: "<ruby>旅行<rt>りょこう</rt></ruby>していた" },
                    { id: "4", text: "2<ruby>週間<rt>しゅうかん</rt></ruby>は" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与时间范围。</strong>过去进行的动作选项 3「<ruby>旅行<rt>りょこう</rt></ruby>していた」（正在旅行的）修饰时间名词选项 4「2<ruby>週間<rt>しゅうかん</rt></ruby>は」（这两个星期里），构成主语「<ruby>旅行<rt>りょこう</rt></ruby>していた2<ruby>週間<rt>しゅうかん</rt></ruby>は」（在旅行的那两个星期里）。</p>
                    <p><strong class="text-textMain">第二步：确立名词与程度限定。</strong>名词短语选项 1「<ruby>楽<rt>たの</rt></ruby>しいこと」（快乐的事情）接续表示满是某种状态的副助词选项 2「ばかり」（全是 / 净是），构成「<ruby>楽<rt>たの</rt></ruby>しいことばかり」（全是快乐的事情）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾谓语。</strong>将前述时间状语与评价内容相连，顺接句尾的过去时断定助动词「だった」（是）。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>去年第一次一个人去海外旅行。去之前虽然也有担心的事情，但是在旅行的那两个星期里全都是快乐的事情。
                    </p>
                `
            },
            {
                id: "n3_202112_3",
                level: "N3",
                year: "2021年12月",
                label: "問題8 - 3",
                prefix: "③、A「<ruby>昨日<rt>きのう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>だったから、<ruby>遊園地<rt>ゆうえんち</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>かったでしょう？」<br>B「いや、",
                suffix: "いませんでしたよ。」",
                options: [
                    { id: "1", text: "いた" },
                    { id: "2", text: "<ruby>込<rt>こ</rt></ruby>んで" },
                    { id: "3", text: "ほど" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>って" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立过去持续的心理动作。</strong>动作选项 4「<ruby>思<rt>おも</rt></ruby>って」（想着）接续过去持续状态选项 1「いた」（一直），构成「<ruby>思<rt>おも</rt></ruby>っていた」（之前一直以为的）。</p>
                    <p><strong class="text-textMain">第二步：确立比较基准与否定搭配。</strong>心理动作后接续比较基准助词选项 3「ほど」（如……那般的程度），该助词常与否定呼应，构成「<ruby>思<rt>おも</rt></ruby>っていたほど」（没有想象中那么）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动作与句尾。</strong>比较基准后接续状态谓语连用形选项 2「<ruby>込<rt>こ</rt></ruby>んで」（拥挤），与句尾的否定表达「いませんでしたよ」（并没有）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“昨天是星期天，所以游乐园人很多吧？” B：“不，并没有想象中那么拥挤哦。”
                    </p>
                `
            },
            {
                id: "n3_202112_4",
                level: "N3",
                year: "2021年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>一人暮<rt>ひとりぐ</rt></ruby>らしを<ruby>始<rt>はじ</rt></ruby>めて、<ruby>両親<rt>りょうしん</rt></ruby>が<ruby>毎日仕事<rt>まいにちしごと</rt></ruby>を",
                suffix: "<ruby>大変<rt>たいへん</rt></ruby>なことだったか、よくわかった。",
                options: [
                    { id: "1", text: "どれだけ" },
                    { id: "2", text: "しながら" },
                    { id: "3", text: "<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>や<ruby>洗濯<rt>せんたく</rt></ruby>を" },
                    { id: "4", text: "してくれていたことが" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立伴随动作。</strong>题干宾语「<ruby>毎日仕事<rt>まいにちしごと</rt></ruby>を」（每天工作）后接续伴随状态选项 2「しながら」（一边……一边），构成「<ruby>毎日仕事<rt>まいにちしごと</rt></ruby>をしながら」（一边每天工作一边）。</p>
                    <p><strong class="text-textMain">第二步：确立动作对象与授受表达。</strong>伴随状态后引出主要动作对象选项 3「<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>や<ruby>洗濯<rt>せんたく</rt></ruby>を」（准备饭菜和洗衣服），并接续授受动词及形式名词选项 4「してくれていたことが」（一直为我做……这件事）。</p>
                    <p><strong class="text-textMain">第三步：确立疑问词修饰与句尾。</strong>大主语后接续表示程度的疑问副词选项 1「どれだけ」（多么地），直接修饰句尾的评价「<ruby>大変<rt>たいへん</rt></ruby>なことだったか」（是多么辛苦的事情啊）。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>开始一个人生活后，我深深体会到父母一边每天工作一边为我准备饭菜和洗衣服是多么辛苦的事情。
                    </p>
                `
            },
            {
                id: "n3_202112_5",
                level: "N3",
                year: "2021年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>患者<rt>かんじゃ</rt></ruby>「<ruby>先生<rt>せんせい</rt></ruby>、おふろには<ruby>入<rt>はい</rt></ruby>ってもいいんでしょうか。」<br><ruby>医者<rt>いしゃ</rt></ruby>「",
                suffix: "いいですよ。」",
                options: [
                    { id: "1", text: "なって" },
                    { id: "2", text: "いたら" },
                    { id: "3", text: "<ruby>熱<rt>ねつ</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がって" },
                    { id: "4", text: "あしたに" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间变化。</strong>时间名词选项 4「あしたに」（到了明天）接续变化动词选项 1「なって」（到了……时候，并且），构成「あしたになって」（到了明天）。</p>
                    <p><strong class="text-textMain">第二步：确立前提动作。</strong>时间状语后引出前提状态选项 3「<ruby>熱<rt>ねつ</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がって」（烧退了）。</p>
                    <p><strong class="text-textMain">第三步：确立假定条件与句尾。</strong>动作后接续表示假定条件的状态动词选项 2「いたら」（如果是……的状态的话），并顺接句尾的许可表达「いいですよ」（就可以）。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>患者：“医生，我可以洗澡吗？” 医生：“到了明天，如果烧退了的话就可以哦。”
                    </p>
                `
            },
            // ---------------- 2022年7月 (N3) ----------------
            {
                id: "n3_202207_1",
                level: "N3",
                year: "2022年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>私<rt>わたし</rt></ruby>は、<ruby>森<rt>もり</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けてから<ruby>数学<rt>すうがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きになった。",
                suffix: "いないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>先生<rt>せんせい</rt></ruby>は" },
                    { id: "2", text: "<ruby>先生<rt>せんせい</rt></ruby>ほど" },
                    { id: "3", text: "あの" },
                    { id: "4", text: "わかりやすく<ruby>教<rt>おし</rt></ruby>えてくれる" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>指示词选项 3「あの」（那位）修饰名词及比较基准选项 2「<ruby>先生<rt>せんせい</rt></ruby>ほど」（像老师那样），构成「あの<ruby>先生<rt>せんせい</rt></ruby>ほど」（像那位老师那样）。</p>
                    <p><strong class="text-textMain">第二步：确立动作与比较基准。</strong>比较基准后接续动作连体形选项 4「わかりやすく<ruby>教<rt>おし</rt></ruby>えてくれる」（教得通俗易懂的），构成「あの<ruby>先生<rt>せんせい</rt></ruby>ほどわかりやすく<ruby>教<rt>おし</rt></ruby>えてくれる」（像那位老师那样教得通俗易懂的）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>将该定语修饰语接续主语选项 1「<ruby>先生<rt>せんせい</rt></ruby>は」（老师），并与句尾的否定表达「いないと<ruby>思<rt>おも</rt></ruby>う」（我想是没有的）呼应。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我上了森老师的课之后就喜欢上了数学。我想没有像那位老师那样教得通俗易懂的老师了。
                    </p>
                `
            },
            {
                id: "n3_202207_2",
                level: "N3",
                year: "2022年7月",
                label: "問題8 - 2",
                prefix: "②、「<ruby>今日<rt>きょう</rt></ruby>は、コーラを<ruby>使<rt>つか</rt></ruby>った<ruby>鶏肉<rt>とりにく</rt></ruby>の<ruby>煮物<rt>にもの</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>します。<ruby>鶏肉<rt>とりにく</rt></ruby>は",
                suffix: "<ruby>知<rt>し</rt></ruby>っていますか。」",
                options: [
                    { id: "1", text: "<ruby>煮<rt>に</rt></ruby>ることで" },
                    { id: "2", text: "<ruby>柔<rt>やわ</rt></ruby>らかく" },
                    { id: "3", text: "コーラで" },
                    { id: "4", text: "なるのを" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立手段与动作。</strong>题干主题「<ruby>鶏肉<rt>とりにく</rt></ruby>は」（鸡肉）后，接续表示手段的选项 3「コーラで」（用可乐）和动作名词化选项 1「<ruby>煮<rt>に</rt></ruby>ることで」（通过煮），构成「コーラで<ruby>煮<rt>に</rt></ruby>ることで」（通过用可乐煮）。</p>
                    <p><strong class="text-textMain">第二步：确立状态变化。</strong>动作手段后接续变化结果选项 2「<ruby>柔<rt>やわ</rt></ruby>らかく」（柔软地），修饰动词及形式名词选项 4「なるのを」（变得……这件事），构成「<ruby>柔<rt>やわ</rt></ruby>らかくなるのを」（变得柔软这件事）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾宾语。</strong>将前述的手段与结果相连，整体作为句尾谓语「<ruby>知<rt>し</rt></ruby>っていますか」（你知道吗）的宾语。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“今天为大家介绍一道用可乐制作的炖鸡肉。大家知道鸡肉通过用可乐煮会变得很柔软这件事吗？”
                    </p>
                `
            },
            {
                id: "n3_202207_3",
                level: "N3",
                year: "2022年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>山下<rt>やました</rt></ruby>「<ruby>今度<rt>こんど</rt></ruby>、<ruby>北森町<rt>きたもりちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くんだけど、<ruby>北森町<rt>きたもりちょう</rt></ruby>のレストランでどこかいいところ、<ruby>知<rt>し</rt></ruby>ってる？」<br><ruby>南<rt>みなみ</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>はあまり<ruby>知<rt>し</rt></ruby>らないんだけど、<ruby>田中<rt>たなか</rt></ruby>さん",
                suffix: "どう？」",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "<ruby>聞<rt>き</rt></ruby>いてみたら" },
                    { id: "3", text: "から" },
                    { id: "4", text: "<ruby>北森町<rt>きたもりちょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓关系。</strong>题干「<ruby>田中<rt>たなか</rt></ruby>さん」（田中）后接续主格助词选项 1「が」，再接续谓语动作选项 4「<ruby>北森町<rt>きたもりちょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる」（住在北森町），构成「<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>北森町<rt>きたもりちょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる」（田中住在北森町）。</p>
                    <p><strong class="text-textMain">第二步：确立原因状语。</strong>动作后接续表示原因的助词选项 3「から」（因为），构成原因从句「<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>北森町<rt>きたもりちょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいるから」（因为田中住在北森町）。</p>
                    <p><strong class="text-textMain">第三步：确立建议动作与句尾。</strong>原因从句后接续表示建议的条件动作选项 2「<ruby>聞<rt>き</rt></ruby>いてみたら」（试着问问的话），与句尾的「どう？」（怎么样）相连，构成固定句型「～てみたらどう」（试着……怎么样）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>山下：“下次我要去北森町，你知道北森町的餐厅哪里比较好吗？” 南：“我不太了解，但是因为田中住在北森町，你试着问问他怎么样？”
                    </p>
                `
            },
            {
                id: "n3_202207_4",
                level: "N3",
                year: "2022年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>林<rt>はやし</rt></ruby>「タンさんは、<ruby>夏休<rt>なつやす</rt></ruby>みに<ruby>国<rt>くに</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>りますか。」<br>タン「いいえ、<ruby>今年<rt>ことし</rt></ruby>は<ruby>帰<rt>かえ</rt></ruby>りません。<ruby>日本<rt>にほん</rt></ruby>で",
                suffix: "なので<ruby>楽<rt>たの</rt></ruby>しみです。」",
                options: [
                    { id: "1", text: "<ruby>今年<rt>ことし</rt></ruby>が" },
                    { id: "2", text: "<ruby>過<rt>す</rt></ruby>ごすのは" },
                    { id: "3", text: "<ruby>初<rt>はじ</rt></ruby>めて" },
                    { id: "4", text: "<ruby>夏休<rt>なつやす</rt></ruby>みを" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作宾语与谓语。</strong>题干「<ruby>日本<rt>にほん</rt></ruby>で」（在日本）后接续宾语选项 4「<ruby>夏休<rt>なつやす</rt></ruby>みを」（暑假），再接续动作及其名词化形式选项 2「<ruby>過<rt>す</rt></ruby>ごすのは」（度过……这件事），构成「<ruby>日本<rt>にほん</rt></ruby>で<ruby>夏休<rt>なつやす</rt></ruby>みを<ruby>過<rt>す</rt></ruby>ごすのは」（在日本度过暑假这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立主语与表语。</strong>该名词化小句作为大主语，接续主语选项 1「<ruby>今年<rt>ことし</rt></ruby>が」（今年是），再接续表语选项 3「<ruby>初<rt>はじ</rt></ruby>めて」（第一次），构成「～<ruby>過<rt>す</rt></ruby>ごすのは<ruby>今年<rt>ことし</rt></ruby>が<ruby>初<rt>はじ</rt></ruby>めて」（……度过，今年是第一次）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾原因。</strong>将前述判断句与句尾的「なので<ruby>楽<rt>たの</rt></ruby>しみです」（因此很期待）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>林：“小谭，你暑假回国吗？” 谭：“不，今年不回去。在日本度过暑假今年还是第一次，所以我很期待。”
                    </p>
                `
            },
            {
                id: "n3_202207_5",
                level: "N3",
                year: "2022年7月",
                label: "問題8 - 5",
                prefix: "⑤、さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りには、レストランや<ruby>喫茶店<rt>きっさてん</rt></ruby>などの",
                suffix: "ある。",
                options: [
                    { id: "1", text: "<ruby>中心<rt>ちゅうしん</rt></ruby>に" },
                    { id: "2", text: "<ruby>飲食店<rt>いんしょくてん</rt></ruby>を" },
                    { id: "3", text: "いろいろな<ruby>店<rt>みせ</rt></ruby>が" },
                    { id: "4", text: "<ruby>本屋<rt>ほんや</rt></ruby>や<ruby>美容室<rt>びようしつ</rt></ruby>など" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立中心句型。</strong>题干「レストランや<ruby>喫茶店<rt>きっさてん</rt></ruby>などの」（餐厅和咖啡店等）后接续分类名词选项 2「<ruby>飲食店<rt>いんしょくてん</rt></ruby>を」（饮食店），再接续构成固定搭配的选项 1「<ruby>中心<rt>ちゅうしん</rt></ruby>に」（以……为中心），构成「～<ruby>飲食店<rt>いんしょくてん</rt></ruby>を<ruby>中心<rt>ちゅうしん</rt></ruby>に」（以餐厅和咖啡店等饮食店为中心）。</p>
                    <p><strong class="text-textMain">第二步：确立并列与主语。</strong>该状语后引出其他类型的店铺选项 4「<ruby>本屋<rt>ほんや</rt></ruby>や<ruby>美容室<rt>びようしつ</rt></ruby>など」（书店和美容室等），再接续概括性主语选项 3「いろいろな<ruby>店<rt>みせ</rt></ruby>が」（各种各样的店），构成「<ruby>本屋<rt>ほんや</rt></ruby>や<ruby>美容室<rt>びようしつ</rt></ruby>などいろいろな<ruby>店<rt>みせ</rt></ruby>が」（书店和美容室等各种各样的店）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾谓语。</strong>将前述主语与句尾的存在动词「ある」（有）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>樱花大学的周围，以餐厅和咖啡店等饮食店为中心，有书店和美容室等各种各样的店铺。
                    </p>
                `
            },
            // ---------------- 2022年12月 (N3) ----------------
            {
                id: "n3_202212_1",
                level: "N3",
                year: "2022年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>留学<rt>りゅうがく</rt></ruby>している<ruby>息子<rt>むすこ</rt></ruby>",
                suffix: "<ruby>毎日<rt>まいにち</rt></ruby><ruby>楽<rt>たの</rt></ruby>しく<ruby>過<rt>す</rt></ruby>ごしていると<ruby>書<rt>か</rt></ruby>かれていて<ruby>安心<rt>あんしん</rt></ruby>した。",
                options: [
                    { id: "1", text: "メール" },
                    { id: "2", text: "から" },
                    { id: "3", text: "に" },
                    { id: "4", text: "の" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立起点与连体修饰。</strong>题干名词「<ruby>息子<rt>むすこ</rt></ruby>」（儿子）后接续起点助词选项 2「から」（来自），再接续连体助词选项 4「の」（的），构成「<ruby>息子<rt>むすこ</rt></ruby>からの」（来自儿子的）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰中心语。</strong>该连体修饰语修饰名词选项 1「メール」（邮件），构成「<ruby>息子<rt>むすこ</rt></ruby>からのメール」（来自儿子的邮件）。</p>
                    <p><strong class="text-textMain">第三步：确立存在场所与句尾。</strong>名词后接续表示存在位置或对象的助词选项 3「に」（在……里），与句尾的「<ruby>毎日<rt>まいにち</rt></ruby>～と<ruby>書<rt>か</rt></ruby>かれていて」（写着每天……）相连，构成「メールに～と<ruby>書<rt>か</rt></ruby>かれていて」（邮件里写着……）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>留学中的儿子发来的邮件里写着每天都过得很开心，我放心了。
                    </p>
                `
            },
            {
                id: "n3_202212_2",
                level: "N3",
                year: "2022年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>来週<rt>らいしゅう</rt></ruby>から一か<ruby>月間<rt>げつかん</rt></ruby>、<ruby>出張<rt>しゅっちょう</rt></ruby>で<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く。<ruby>東京<rt>とうきょう</rt></ruby>には",
                suffix: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食事<rt>しょくじ</rt></ruby>でもしたいと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "いるので" },
                    { id: "2", text: "いる<ruby>間<rt>あいだ</rt></ruby>で" },
                    { id: "3", text: "<ruby>友達<rt>ともだち</rt></ruby>が" },
                    { id: "4", text: "<ruby>東京<rt>とうきょう</rt></ruby>に" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立存在句与原因。</strong>题干「<ruby>東京<rt>とうきょう</rt></ruby>には」（在东京）后接续主语选项 3「<ruby>友達<rt>ともだち</rt></ruby>が」（朋友），再接续存在动词与原因助词选项 1「いるので」（因为在），构成「<ruby>東京<rt>とうきょう</rt></ruby>には<ruby>友達<rt>ともだち</rt></ruby>がいるので」（因为东京有朋友）。</p>
                    <p><strong class="text-textMain">第二步：确立状态限定。</strong>原因从句后另起修饰结构，地点选项 4「<ruby>東京<rt>とうきょう</rt></ruby>に」（在东京）接续动词状态及时间范围选项 2「いる<ruby>間<rt>あいだ</rt></ruby>で」（在待着的期间内），构成「<ruby>東京<rt>とうきょう</rt></ruby>にいる<ruby>間<rt>あいだ</rt></ruby>で」（在待在东京的期间内）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾谓语。</strong>将前述时间状语与句尾的「<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食事<rt>しょくじ</rt></ruby>でもしたいと<ruby>思<rt>おも</rt></ruby>う」（想着一起吃个饭什么的）相连。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>下周开始因为出张要去东京一个月。因为东京有朋友，所以想趁着在东京的期间一起吃个饭什么的。
                    </p>
                `
            },
            {
                id: "n3_202212_3",
                level: "N3",
                year: "2022年12月",
                label: "問題8 - 3",
                prefix: "③、バイオリンが",
                suffix: "こんなに<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>楽器<rt>がっき</rt></ruby>はないと<ruby>感<rt>かん</rt></ruby>じる。",
                options: [
                    { id: "1", text: "<ruby>一年<rt>いちねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>習<rt>なら</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めたのだが" },
                    { id: "2", text: "<ruby>弾<rt>ひ</rt></ruby>くほど" },
                    { id: "3", text: "<ruby>弾<rt>ひ</rt></ruby>けば" },
                    { id: "4", text: "<ruby>弾<rt>ひ</rt></ruby>けるようになりたくて" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立愿望对象与连体修饰。</strong>题干主语「バイオリンが」（小提琴）后接续愿望及原因表达选项 4「<ruby>弾<rt>ひ</rt></ruby>けるようになりたくて」（想要变得会弹），构成「バイオリンが<ruby>弾<rt>ひ</rt></ruby>けるようになりたくて」（想要变得会弹小提琴）。</p>
                    <p><strong class="text-textMain">第二步：确立时间状语与逆接。</strong>该动机后接续过去的动作及逆接接续选项 1「<ruby>一年<rt>いちねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>習<rt>なら</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めたのだが」（虽然一年前开始学习了，但是），构成「～なりたくて<ruby>一年<rt>いちねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>習<rt>なら</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>めたのだが」（因为想变得会弹所以一年前开始学习，但是）。</p>
                    <p><strong class="text-textMain">第三步：确立递进比较句型与句尾。</strong>转折后接续条件选项 3「<ruby>弾<rt>ひ</rt></ruby>けば」（如果弹的话）与程度递进选项 2「<ruby>弾<rt>ひ</rt></ruby>くほど」（越弹越），构成固定句型「～ば～ほど」（越……越……），并与句尾的「こんなに<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>楽器<rt>がっき</rt></ruby>はないと<ruby>感<rt>かん</rt></ruby>じる」（觉得没有这么有趣的乐器了）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为想变得会弹小提琴，一年前开始学习了，结果越弹越觉得没有比这更有趣的乐器了。
                    </p>
                `
            },
            {
                id: "n3_202212_4",
                level: "N3",
                year: "2022年12月",
                label: "問題8 - 4",
                prefix: "④、A「お<ruby>誕生日<rt>たんじょうび</rt></ruby>おめでとう。これ、プレゼントだよ。」<br>B「わあ、かばんだ。ちょうど",
                suffix: "んだ。ありがとう。」",
                options: [
                    { id: "1", text: "こういう<ruby>色<rt>いろ</rt></ruby>の" },
                    { id: "2", text: "ほしい" },
                    { id: "3", text: "と<ruby>思<rt>おも</rt></ruby>っていた" },
                    { id: "4", text: "かばんが" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>选项 1「こういう<ruby>色<rt>いろ</rt></ruby>の」（这种颜色的）修饰名词及主格助词选项 4「かばんが」（包），构成「こういう<ruby>色<rt>いろ</rt></ruby>のかばんが」（这种颜色的包）。</p>
                    <p><strong class="text-textMain">第二步：确立愿望谓语。</strong>主语后接续愿望形容词选项 2「ほしい」（想要的），构成「こういう<ruby>色<rt>いろ</rt></ruby>のかばんがほしい」（想要这种颜色的包）。</p>
                    <p><strong class="text-textMain">第三步：确立思考动作与句尾。</strong>愿望表达后接续引用助词及过去持续心理状态选项 3「と<ruby>思<rt>おも</rt></ruby>っていた」（之前一直这样想的），并顺接句尾的解释语气「んだ」（是这样的）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“祝你生日快乐。这是礼物哦。” B：“哇，是包包。我正好一直想要这种颜色的包包呢。谢谢。”
                    </p>
                `
            },
            {
                id: "n3_202212_5",
                level: "N3",
                year: "2022年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>都会<rt>とかい</rt></ruby>と<ruby>田舎<rt>いなか</rt></ruby>には<ruby>違<rt>ちが</rt></ruby>うところも<ruby>多<rt>おお</rt></ruby>いが、どちらも、<ruby>人<rt>ひと</rt></ruby>が<ruby>働<rt>はたら</rt></ruby>き、",
                suffix: "。",
                options: [
                    { id: "1", text: "という<ruby>点<rt>てん</rt></ruby>で" },
                    { id: "2", text: "<ruby>違<rt>ちが</rt></ruby>いは" },
                    { id: "3", text: "<ruby>生活<rt>せいかつ</rt></ruby>している" },
                    { id: "4", text: "ない" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立并列动作。</strong>题干「<ruby>人<rt>ひと</rt></ruby>が<ruby>働<rt>はたら</rt></ruby>き、」（人们工作，并且）后接续并列的动作选项 3「<ruby>生活<rt>せいかつ</rt></ruby>している」（在生活着），构成「<ruby>人<rt>ひと</rt></ruby>が<ruby>働<rt>はたら</rt></ruby>き、<ruby>生活<rt>せいかつ</rt></ruby>している」（人们工作、生活着）。</p>
                    <p><strong class="text-textMain">第二步：确立说明基准。</strong>动作短语后接续表示方面的选项 1「という<ruby>点<rt>てん</rt></ruby>で」（在这一方面），构成「<ruby>人<rt>ひと</rt></ruby>が<ruby>働<rt>はたら</rt></ruby>き、<ruby>生活<rt>せいかつ</rt></ruby>しているという<ruby>点<rt>てん</rt></ruby>で」（在人们工作、生活着这一方面）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓否定与句尾。</strong>该方面后接续主语选项 2「<ruby>違<rt>ちが</rt></ruby>いは」（区别），并与句尾的否定选项 4「ない」（没有）相连。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>城市和乡下虽然有很多不同的地方，但在无论是哪边都是人们在工作和生活这一点上，是没有区别的。
                    </p>
                `
            },
            // ---------------- 2023年7月 (N3) ----------------
            {
                id: "n3_202307_1",
                level: "N3",
                year: "2023年7月",
                label: "問題8 - 1",
                prefix: "①、パソコンや<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>の",
                suffix: "<ruby>原因<rt>げんいん</rt></ruby>で、<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなることもあるそうだ。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "による" },
                    { id: "3", text: "<ruby>見<rt>み</rt></ruby>すぎ" },
                    { id: "4", text: "<ruby>目<rt>め</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れ" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果关系起点。</strong>题干「パソコンや<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>の」（电脑或手机的）后接续名词选项 3「<ruby>見<rt>み</rt></ruby>すぎ」（看太多），构成「パソコンや<ruby>携帯<rt>けいたい</rt></ruby><ruby>電話<rt>でんわ</rt></ruby>の<ruby>見<rt>み</rt></ruby>すぎ」（电脑或手机看太多）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与结果。</strong>动作名词后接续表示原因的复合助词选项 2「による」（由于……引起的），修饰结果名词选项 4「<ruby>目<rt>め</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れ」（眼睛疲劳），构成「<ruby>見<rt>み</rt></ruby>すぎによる<ruby>目<rt>め</rt></ruby>の<ruby>疲<rt>つか</rt></ruby>れ」（由于看太多引起的眼睛疲劳）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构与句尾。</strong>该名词短语后接续主格助词选项 1「が」，与句尾的「<ruby>原因<rt>げんいん</rt></ruby>で」（以……为原因 / 因为）相连。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说因为电脑和手机看太多引起的眼睛疲劳，有时也会导致头痛。
                    </p>
                `
            },
            {
                id: "n3_202307_2",
                level: "N3",
                year: "2023年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>私<rt>わたし</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>のとき、ピアノを<ruby>習<rt>なら</rt></ruby>っていたが、<ruby>三年<rt>さんねん</rt></ruby>でやめてしまった。<ruby>何<rt>なん</rt></ruby><ruby>回<rt>かい</rt></ruby>",
                suffix: "、<ruby>嫌<rt>いや</rt></ruby>になってしまったのだ。",
                options: [
                    { id: "1", text: "<ruby>上手<rt>じょうず</rt></ruby>に<ruby>弾<rt>ひ</rt></ruby>けない" },
                    { id: "2", text: "<ruby>練習<rt>れんしゅう</rt></ruby>しても" },
                    { id: "3", text: "なかなか" },
                    { id: "4", text: "<ruby>曲<rt>きょく</rt></ruby>があって" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件与逆接。</strong>题干「<ruby>何<rt>なん</rt></ruby><ruby>回<rt>かい</rt></ruby>」（多少次）后接续假定逆接选项 2「<ruby>練習<rt>れんしゅう</rt></ruby>しても」（即使练习），构成「<ruby>何<rt>なん</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しても」（无论练习多少次也）。</p>
                    <p><strong class="text-textMain">第二步：确立否定呼应。</strong>条件后接续常与否定搭配的副词选项 3「なかなか」（怎么也……），并接续能力否定选项 1「<ruby>上手<rt>じょうず</rt></ruby>に<ruby>弾<rt>ひ</rt></ruby>けない」（弹不好），构成「なかなか<ruby>上手<rt>じょうず</rt></ruby>に<ruby>弾<rt>ひ</rt></ruby>けない」（怎么也弹不好）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>将该小句整体作为定语，直接修饰句尾名词短语选项 4「<ruby>曲<rt>きょく</rt></ruby>があって」（因为有……的曲子），并顺接最终结果「<ruby>嫌<rt>いや</rt></ruby>になってしまったのだ」（就变得讨厌了）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我小时候学过钢琴，但三年就放弃了。因为有无论练习多少次也怎么都弹不好的曲子，所以就变得讨厌了。
                    </p>
                `
            },
            {
                id: "n3_202307_3",
                level: "N3",
                year: "2023年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>失敗<rt>しっぱい</rt></ruby>をすることは<ruby>誰<rt>だれ</rt></ruby>にでもある。<ruby>大切<rt>たいせつ</rt></ruby>な",
                suffix: "<ruby>考<rt>かんが</rt></ruby>えて、<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>さないようにすることだ。",
                options: [
                    { id: "1", text: "<ruby>失敗<rt>しっぱい</rt></ruby>をしてしまった" },
                    { id: "2", text: "どうして" },
                    { id: "3", text: "のか" },
                    { id: "4", text: "のは" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语结构。</strong>题干连体词「<ruby>大切<rt>たいせつ</rt></ruby>な」（重要的）后接续形式名词及提示助词选项 4「のは」（……这回事/东西是），构成大主语「<ruby>大切<rt>たいせつ</rt></ruby>なのは」（重要的是）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问小句。</strong>疑问词选项 2「どうして」（为什么）接续动作选项 1「<ruby>失敗<rt>しっぱい</rt></ruby>をしてしまった」（导致了失败），再接续表示疑问结尾的选项 3「のか」，构成疑问小句「どうして<ruby>失敗<rt>しっぱい</rt></ruby>をしてしまったのか」（为什么导致了失败）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾。</strong>将疑问小句作为后续思考的宾语，与句尾的中顿动作「<ruby>考<rt>かんが</rt></ruby>えて」（思考，并且）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>任何人都会犯错。重要的是，去思考为什么会导致失败，并努力不再重复同样的错误。
                    </p>
                `
            },
            {
                id: "n3_202307_4",
                level: "N3",
                year: "2023年7月",
                label: "問題8 - 4",
                prefix: "④、（<ruby>教室<rt>きょうしつ</rt></ruby>で）<br><ruby>南<rt>みなみ</rt></ruby>「<ruby>西川<rt>にしかわ</rt></ruby>さんの<ruby>誕生日<rt>たんじょうび</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>かプレゼントをあげない？」<br><ruby>森<rt>もり</rt></ruby>「いいね。スポーツが<ruby>好<rt>す</rt></ruby>きだと<ruby>言<rt>い</rt></ruby>っていた",
                suffix: "？」",
                options: [
                    { id: "1", text: "いいんじゃない" },
                    { id: "2", text: "から" },
                    { id: "3", text: "とか" },
                    { id: "4", text: "タオル" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原因从句。</strong>题干引用内容「スポーツが<ruby>好<rt>す</rt></ruby>きだと<ruby>言<rt>い</rt></ruby>っていた」（说过喜欢运动）后接续表示原因的助词选项 2「から」（因为），构成「スポーツが<ruby>好<rt>す</rt></ruby>きだと<ruby>言<rt>い</rt></ruby>っていたから」（因为他说过喜欢运动）。</p>
                    <p><strong class="text-textMain">第二步：确立举例建议。</strong>原因后引出建议的物品选项 4「タオル」（毛巾），并接续表示不确定举例的副助词选项 3「とか」（之类的），构成「タオルとか」（毛巾之类的）。</p>
                    <p><strong class="text-textMain">第三步：结合句尾评价。</strong>举例后接续评价性反问表达选项 1「いいんじゃない」（不是挺好吗），并与句尾的疑问符「？」相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>南：“西川生日我们送点什么礼物不？” 森：“好啊。因为他说过喜欢运动，送毛巾之类的不是挺好吗？”
                    </p>
                `
            },
            {
                id: "n3_202307_5",
                level: "N3",
                year: "2023年7月",
                label: "問題8 - 5",
                prefix: "⑤、（<ruby>講演会<rt>こうえんかい</rt></ruby>で）<br><ruby>司会者<rt>しかいしゃ</rt></ruby>「<ruby>本日<rt>ほんじつ</rt></ruby>は、<ruby>鳥<rt>とり</rt></ruby>の",
                suffix: "<ruby>見<rt>み</rt></ruby>ることができる<ruby>様々<rt>さまざま</rt></ruby>な<ruby>鳥<rt>とり</rt></ruby>について、お<ruby>話<rt>はな</rt></ruby>ししていただきます。」",
                options: [
                    { id: "1", text: "<ruby>専門家<rt>せんもんか</rt></ruby>で" },
                    { id: "2", text: "<ruby>都会<rt>とかい</rt></ruby>で" },
                    { id: "3", text: "いらっしゃる" },
                    { id: "4", text: "<ruby>山下<rt>やました</rt></ruby><ruby>花子<rt>はなこ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立身份修饰与尊他表达。</strong>题干「<ruby>鳥<rt>とり</rt></ruby>の」（鸟类的）后接续名词及中顿选项 1「<ruby>専門家<rt>せんもんか</rt></ruby>で」（是专家，且），再接续尊他语状态动词选项 3「いらっしゃる」（在 / 是的尊他），构成「<ruby>鳥<rt>とり</rt></ruby>の<ruby>専門家<rt>せんもんか</rt></ruby>でいらっしゃる」（作为鸟类专家的）。</p>
                    <p><strong class="text-textMain">第二步：确立动作执行者。</strong>该修饰语修饰人名及动作对象助词选项 4「<ruby>山下<rt>やました</rt></ruby><ruby>花子<rt>はなこ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に」（由山下花子老师），作为后续整个句子请求动作的发出者。</p>
                    <p><strong class="text-textMain">第三步：确立场所状语与句尾。</strong>最后接续表示场所的选项 2「<ruby>都会<rt>とかい</rt></ruby>で」（在城市里），直接修饰句尾的连体修饰小句「<ruby>見<rt>み</rt></ruby>ることができる」（能够看到的）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>主持人：“今天，我们将请鸟类专家山下花子老师，就城市里能看到的各种各样的鸟类，为大家进行讲解。”
                    </p>
                `
            },
            // ---------------- 2023年12月 (N3) ----------------
            {
                id: "n3_202312_1",
                level: "N3",
                year: "2023年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>私<rt>わたし</rt></ruby>は<ruby>歌手<rt>かしゅ</rt></ruby>の<ruby>石川<rt>いしかわ</rt></ruby>あかりが<ruby>大好<rt>だいす</rt></ruby>きだ。<ruby>彼女<rt>かのじょ</rt></ruby>",
                suffix: "いないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>声<rt>こえ</rt></ruby>がきれいな" },
                    { id: "2", text: "は" },
                    { id: "3", text: "<ruby>歌手<rt>かしゅ</rt></ruby>" },
                    { id: "4", text: "ほど" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较基准。</strong>题干「<ruby>彼女<rt>かのじょ</rt></ruby>」（她）后接续比较基准助词选项 4「ほど」（像……一样/达到……程度），构成「<ruby>彼女<rt>かのじょ</rt></ruby>ほど」（像她那样）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>该比较基准修饰后续的状态描写选项 1「<ruby>声<rt>こえ</rt></ruby>がきれいな」（声音动听的），并共同修饰名词选项 3「<ruby>歌手<rt>かしゅ</rt></ruby>」（歌手），构成「<ruby>彼女<rt>かのじょ</rt></ruby>ほど<ruby>声<rt>こえ</rt></ruby>がきれいな<ruby>歌手<rt>かしゅ</rt></ruby>」（像她那样声音动听的歌手）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>名词后接续提示助词选项 2「は」，作为整个句子的主语，与句尾的最高级否定表达「いないと<ruby>思<rt>おも</rt></ruby>う」（我想是没有的）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我非常喜欢歌手石川明里。我想没有像她那样声音动听的歌手了。
                    </p>
                `
            },
            {
                id: "n3_202312_2",
                level: "N3",
                year: "2023年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>最近<rt>さいきん</rt></ruby>は<ruby>野菜<rt>やさい</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>などの<ruby>食料品<rt>しょくりょうひん</rt></ruby>も",
                suffix: "ニュースで<ruby>知<rt>し</rt></ruby>った。",
                options: [
                    { id: "1", text: "<ruby>人<rt>ひと</rt></ruby>が" },
                    { id: "2", text: "<ruby>増<rt>ふ</rt></ruby>えてきている" },
                    { id: "3", text: "インターネットで<ruby>買<rt>か</rt></ruby>う" },
                    { id: "4", text: "ということを" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾搭配与连体修饰。</strong>题干宾语「<ruby>食料品<rt>しょくりょうひん</rt></ruby>も」（食品也）后接续动作场所及动词选项 3「インターネットで<ruby>買<rt>か</rt></ruby>う」（在网上购买），修饰主语名词选项 1「<ruby>人<rt>ひと</rt></ruby>が」（人），构成「～<ruby>食料品<rt>しょくりょうひん</rt></ruby>もインターネットで<ruby>買<rt>か</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>が」（在网上购买……食品的人）。</p>
                    <p><strong class="text-textMain">第二步：确立谓语动词。</strong>主语后接续表示状态变化的谓语动词选项 2「<ruby>増<rt>ふ</rt></ruby>えてきている」（正在增加），构成「～<ruby>買<rt>か</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えてきている」（在网上购买……的人正在增加）。</p>
                    <p><strong class="text-textMain">第三步：确立名词化宾语与句尾。</strong>该完整小句后接续形式名词及宾格助词选项 4「ということを」（关于……这件事），将其名词化作为句尾动词「ニュースで<ruby>知<rt>し</rt></ruby>った」（在新闻中知道了）的宾语。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我在新闻中得知，最近在网上购买蔬菜和鱼类等食品的人正在增加。
                    </p>
                `
            },
            {
                id: "n3_202312_3",
                level: "N3",
                year: "2023年12月",
                label: "問題8 - 3",
                prefix: "③、（<ruby>大学<rt>だいがく</rt></ruby>で）<br><ruby>中山<rt>なかやま</rt></ruby>「<ruby>林<rt>はやし</rt></ruby><ruby>先輩<rt>せんぱい</rt></ruby>、ゼミの<ruby>発表<rt>はっぴょう</rt></ruby>で<ruby>使<rt>つか</rt></ruby>う<ruby>資料<rt>しりょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ったんですが、",
                suffix: "でしょうか。」",
                options: [
                    { id: "1", text: "もらえない" },
                    { id: "2", text: "ところがあるので" },
                    { id: "3", text: "<ruby>一度<rt>いちど</rt></ruby>チェックして" },
                    { id: "4", text: "<ruby>自信<rt>じしん</rt></ruby>がない" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与原因从句。</strong>选项 4「<ruby>自信<rt>じしん</rt></ruby>がない」（没有自信的）修饰名词及原因表达选项 2「ところがあるので」（因为有……的地方），构成「<ruby>自信<rt>じしん</rt></ruby>がないところがあるので」（因为有没自信的地方）。</p>
                    <p><strong class="text-textMain">第二步：确立请求动作。</strong>原因从句后接续具体的动作请求选项 3「<ruby>一度<rt>いちど</rt></ruby>チェックして」（检查一次，并且）。</p>
                    <p><strong class="text-textMain">第三步：确立授受关系与句尾。</strong>动作后接续表示请求别人为自己做某事的授受动词否定疑问形式选项 1「もらえない」（不能帮我……吗），与句尾的委婉语气「でしょうか」（呢）相连，构成「～チェックしてもらえないでしょうか」（能不能请您帮我检查一次呢）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在大学）中山：“林学长，我做好了研讨会发表要用的资料，因为有些没自信的地方，能不能请您帮我检查一次呢？”
                    </p>
                `
            },
            {
                id: "n3_202312_4",
                level: "N3",
                year: "2023年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>今朝<rt>けさ</rt></ruby>は<ruby>急<rt>いそ</rt></ruby>いでいたから、",
                suffix: "しまった。",
                options: [
                    { id: "1", text: "<ruby>玄関<rt>げんかん</rt></ruby>の<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>すのを" },
                    { id: "2", text: "きて" },
                    { id: "3", text: "<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て" },
                    { id: "4", text: "<ruby>忘<rt>わす</rt></ruby>れて" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾结构。</strong>名词化短语选项 1「<ruby>玄関<rt>げんかん</rt></ruby>の<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>すのを」（把玄关的灯关掉这件事）作为宾语，接续遗忘动词选项 4「<ruby>忘<rt>わす</rt></ruby>れて」（忘记了，并且），构成「<ruby>玄関<rt>げんかん</rt></ruby>の<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>すのを<ruby>忘<rt>わす</rt></ruby>れて」（忘记关玄关的灯）。</p>
                    <p><strong class="text-textMain">第二步：确立连贯动作。</strong>遗忘动作后接续随后的位移动作选项 3「<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て」（离开家），构成「<ruby>忘<rt>わす</rt></ruby>れて<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て」（忘记了然后离开家）。</p>
                    <p><strong class="text-textMain">第三步：结合趋向动词与句尾。</strong>动作后接续趋向动词选项 2「きて」（出来 / 过来），并顺接句尾的遗憾表达「しまった」（不小心……了）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>今早因为走得匆忙，忘记关玄关的灯就出门了。
                    </p>
                `
            },
            {
                id: "n3_202312_5",
                level: "N3",
                year: "2023年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>読書<rt>どくしょ</rt></ruby>が<ruby>趣味<rt>しゅみ</rt></ruby>の<ruby>友人<rt>ゆうじん</rt></ruby>は、いつどんな<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだかを",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "<ruby>必<rt>かなら</rt></ruby>ずノートに<ruby>記録<rt>きろく</rt></ruby>する" },
                    { id: "2", text: "<ruby>忘<rt>わす</rt></ruby>れない" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "ことにしている" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立目的从句。</strong>题干宾语小句「いつどんな<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだかを」（什么时候读了什么样的书）后接续否定动词选项 2「<ruby>忘<rt>わす</rt></ruby>れない」（不忘记），再接续表示目的的助词选项 3「ように」（为了……），构成「～<ruby>読<rt>よ</rt></ruby>んだかを<ruby>忘<rt>わす</rt></ruby>れないように」（为了不忘记什么时候读了什么样的书）。</p>
                    <p><strong class="text-textMain">第二步：确立主要动作。</strong>目的从句后接续采取的具体行动选项 1「<ruby>必<rt>かなら</rt></ruby>ずノートに<ruby>記録<rt>きろく</rt></ruby>する」（一定记录在笔记本上）。</p>
                    <p><strong class="text-textMain">第三步：确立习惯句型与句尾。</strong>动作后接续表示个人主观决定的习惯句型选项 4「ことにしている」（规定自己…… / 养成……的习惯），与句尾的传闻表达「そうだ」（听说）相连。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说爱好读书的朋友，为了不忘记什么时候读了什么样的书，养成了必定记录在笔记本上的习惯。
                    </p>
                `
            }

        ];
