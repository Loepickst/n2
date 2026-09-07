(function () {
    "use strict";

    const particleOrder = ["て／で", "と", "ば", "たら", "から", "ので", "が", "けれど（も）", "のに", "ても／でも", "ながら", "つつ", "し"];

    function grammar(level, title, meaning, connection, explanation, examples) {
        return { level, title, meaning, connection, explanation, examples: examples.map(([text, translation]) => ({ text, translation })) };
    }

    function advancedGrammar(group, level, title, meaning, connection, explanation, examples) {
        return { ...grammar(level, title, meaning, connection, explanation, examples), group };
    }

    const advancedData = {
        "advanced-basic": {
            category: "时间・顺序",
            desc: "说明两件事之间的<strong class='usage-key'>时间距离、持续范围或最终结果</strong>。",
            items: [
                advancedGrammar("紧接发生", "N3", "〜たとたん（に）", "刚一……就……", "动词た形＋とたん（に）", "以前项完成的瞬间为界，后项<strong class='usage-key'>突然发生了没有预先安排的事情</strong>。后项多为意外发现或突发变化。", [
                    ["外へ出<strong class='target-particle'>たとたん</strong>、雨が降り始めました。", "刚一出门就下起了雨。"],
                    ["電気を消し<strong class='target-particle'>たとたんに</strong>、子どもが泣き出しました。", "刚关灯，孩子就哭了起来。"]
                ]),
                advancedGrammar("紧接发生", "N2", "〜かと思うと／〜かと思ったら", "刚以为……就……", "普通形＋かと思うと／かと思ったら", "表示前项刚刚出现，紧接着便发生后项，突出<strong class='usage-key'>变化迅速而出人意料</strong>。通常不用于说话人有意安排的行为。", [
                    ["雨がやんだ<strong class='target-particle'>かと思うと</strong>、また激しく降り始めました。", "刚以为雨停了，又猛烈地下了起来。"],
                    ["子どもは笑った<strong class='target-particle'>かと思ったら</strong>、急に泣き出しました。", "孩子刚才还在笑，转眼就哭了起来。"]
                ]),
                advancedGrammar("紧接发生", "N2", "〜次第", "一……就立即……", "动词第一连用形＋次第", "表示前项完成以后立即进行后项。后项多为说话人或相关人员<strong class='usage-key'>预先决定的行动、通知或处理</strong>。", [
                    ["結果が分かり<strong class='target-particle'>次第</strong>、ご連絡します。", "结果一出来就联系您。"],
                    ["準備が整い<strong class='target-particle'>次第</strong>、受付を開始します。", "准备就绪后立即开始受理。"]
                ]),
                advancedGrammar("紧接发生", "N1", "〜が早いか", "刚一……就……", "动词辞书形／た形＋が早いか", "前项刚刚发生，后项便紧接着出现，强调二者<strong class='usage-key'>几乎没有时间间隔</strong>。多用于书面叙述。", [
                    ["ベルが鳴る<strong class='target-particle'>が早いか</strong>、学生たちは教室を飛び出しました。", "铃声刚响，学生们就冲出了教室。"],
                    ["席に着く<strong class='target-particle'>が早いか</strong>、彼は資料を読み始めました。", "他刚坐下便开始阅读资料。"]
                ]),
                advancedGrammar("紧接发生", "N1", "〜や否や", "刚一……就……", "动词辞书形＋や否や", "表示前项一发生，后项便立即出现。属于<strong class='usage-key'>正式、书面化的紧接表达</strong>，常用于新闻或叙述。", [
                    ["扉が開く<strong class='target-particle'>や否や</strong>、観客は会場へ入っていきました。", "门刚一打开，观众便进入了会场。"],
                    ["知らせを聞く<strong class='target-particle'>や否や</strong>、彼は現場へ向かいました。", "刚一听到消息，他就赶往了现场。"]
                ]),
                advancedGrammar("紧接发生", "N1", "〜なり", "一……就……", "动词辞书形＋なり", "表示前项动作完成后，后项<strong class='usage-key'>几乎立即发生</strong>。前后项通常是同一主体，常用于书面叙述。", [
                    ["彼は部屋に入る<strong class='target-particle'>なり</strong>、窓を開けました。", "他一进房间就打开了窗户。"],
                    ["子どもは家に帰る<strong class='target-particle'>なり</strong>、外へ遊びに行きました。", "孩子一回到家就出去玩了。"]
                ]),
                advancedGrammar("紧接发生", "N1", "〜そばから", "刚……就又……", "动词辞书形／た形＋そばから", "表示前项刚完成，结果很快又被抵消或重新发生。多用于<strong class='usage-key'>同一情况反复出现且令人困扰</strong>的场景。", [
                    ["覚える<strong class='target-particle'>そばから</strong>忘れてしまいます。", "刚记住就忘了。"],
                    ["片づけた<strong class='target-particle'>そばから</strong>、子どもがおもちゃを広げます。", "刚收拾好，孩子又把玩具摊开了。"]
                ]),
                advancedGrammar("期间与反复", "N3", "〜間／〜間に", "在……期间／趁……期间", "普通形＋間／間に（名词＋の間／間に）", "「間」表示某种动作或状态<strong class='usage-key'>贯穿整个期间</strong>；「間に」表示在该期间内的某个时点发生后项。", [
                    ["夏休みの<strong class='target-particle'>間</strong>、毎日泳ぎました。", "暑假期间每天都游泳。"],
                    ["留守の<strong class='target-particle'>間に</strong>、荷物が届きました。", "不在家的时候，包裹送到了。"]
                ]),
                advancedGrammar("期间与反复", "N3", "〜うちに", "趁着……；在……过程中", "普通形＋うちに（名词＋のうちに）", "表示在前项状态尚未改变以前完成后项，或在持续过程中<strong class='usage-key'>自然出现没有明确起点的变化</strong>。", [
                    ["温かい<strong class='target-particle'>うちに</strong>食べてください。", "请趁热吃。"],
                    ["何度も話す<strong class='target-particle'>うちに</strong>、緊張しなくなりました。", "在多次交谈的过程中，逐渐不紧张了。"]
                ]),
                advancedGrammar("期间与反复", "N3", "〜たびに", "每当……都……", "动词辞书形／名词＋の＋たびに", "每次出现前项情况，后项便反复发生，强调<strong class='usage-key'>相同条件下结果的规律性重复</strong>。", [
                    ["この写真を見る<strong class='target-particle'>たびに</strong>、故郷を思い出します。", "每次看到这张照片都会想起故乡。"],
                    ["出張の<strong class='target-particle'>たびに</strong>、家族にお土産を買います。", "每次出差都会给家人买礼物。"]
                ]),
                advancedGrammar("经过与结果", "N2", "〜末（に）", "经过……之后终于……", "动词た形／名词＋の＋末（に）", "表示经过较长时间的考虑、讨论或努力以后，最终得出后项结果。重点是<strong class='usage-key'>过程结束后的结论</strong>。", [
                    ["長く話し合った<strong class='target-particle'>末に</strong>、計画を変更しました。", "经过长时间讨论，最终改变了计划。"],
                    ["検討の<strong class='target-particle'>末</strong>、今回は採用を見送りました。", "经过研究，这次决定暂不采用。"]
                ]),
                advancedGrammar("经过与结果", "N2", "〜あげく（に）", "折腾到最后却……", "动词た形／名词＋の＋あげく（に）", "表示经历较长或反复的过程以后，最终出现某种结果。后项常为<strong class='usage-key'>消极、遗憾或并不理想的结局</strong>。", [
                    ["何時間も迷った<strong class='target-particle'>あげく</strong>、何も買いませんでした。", "犹豫了好几个小时，最后什么也没买。"],
                    ["口論を重ねた<strong class='target-particle'>あげくに</strong>、二人は別れてしまいました。", "反复争吵之后，两人最终分手了。"]
                ])
            ]
        },
        "advanced-condition": {
            category: "假定条件",
            desc: "在普通条件以外，进一步表示<strong class='usage-key'>必要前提、既定责任或实现困难的假设</strong>。",
            items: [
                advancedGrammar("必要前提", "N2", "〜ないことには", "如果不……就不能……", "动词ない形＋ことには", "把前项设为后项判断或行动成立前<strong class='usage-key'>必须先满足的条件</strong>。后项通常使用否定或无法判断的表达。", [
                    ["実物を見<strong class='target-particle'>ないことには</strong>、品質は判断できません。", "不看实物就无法判断质量。"],
                    ["本人に聞いてみ<strong class='target-particle'>ないことには</strong>、理由は分かりません。", "不问本人就不知道原因。"]
                ]),
                advancedGrammar("必要前提", "N1", "〜なくして（は）／〜なしでは", "没有……就不可能……", "名词＋なくして（は）／名词＋なしでは", "表示缺少前项条件，后项目标便无法实现。常用于<strong class='usage-key'>正式说明必要性</strong>，后项多为否定判断。", [
                    ["努力<strong class='target-particle'>なくして</strong>成功はありません。", "没有努力就不会有成功。"],
                    ["皆さんの協力<strong class='target-particle'>なしでは</strong>、完成できませんでした。", "没有大家的协助，就无法完成。"]
                ]),
                advancedGrammar("必要前提", "N2", "〜限り（は）", "只要……就……", "普通形＋限り（は）／名词＋である限り", "表示前项状态持续存在的范围内，<strong class='usage-key'>后项判断始终有效</strong>。当前项改变时，后项也可能随之改变。", [
                    ["健康である<strong class='target-particle'>限り</strong>、働き続けたいです。", "只要身体健康，就想继续工作。"],
                    ["この町に住んでいる<strong class='target-particle'>限りは</strong>、地域のルールを守ります。", "只要住在这座城市，就会遵守当地规则。"]
                ]),
                advancedGrammar("既定条件", "N2", "〜以上（は）", "既然……就……", "普通形＋以上（は）（名词・な形容词＋である以上）", "把前项视为已经成立的事实，并由此提出后项应有的<strong class='usage-key'>责任、决心或必然判断</strong>。", [
                    ["参加する<strong class='target-particle'>以上は</strong>、最後まで責任を持ってください。", "既然参加，就请负责到底。"],
                    ["約束した<strong class='target-particle'>以上</strong>、守るべきです。", "既然答应了，就应该遵守。"]
                ]),
                advancedGrammar("既定条件", "N2", "〜上は", "既然……就……", "动词辞书形／た形＋上は", "以前项作出的决定或已经发生的事实为前提，表示后项应采取<strong class='usage-key'>坚定行动或承担相应责任</strong>。语气较正式。", [
                    ["引き受けた<strong class='target-particle'>上は</strong>、途中で投げ出しません。", "既然接受了，就不会半途而废。"],
                    ["代表に選ばれた<strong class='target-particle'>上は</strong>、全力を尽くします。", "既然被选为代表，就会全力以赴。"]
                ]),
                advancedGrammar("实现困难的假设", "N2", "〜ものなら", "如果能够……的话", "动词可能形＋ものなら", "假设一件实际上<strong class='usage-key'>很难实现或几乎不可能实现</strong>的事情。后项常表示愿望或说话人的选择。", [
                    ["やり直せる<strong class='target-particle'>ものなら</strong>、最初からやり直したいです。", "如果能够重来的话，我想从头重来。"],
                    ["会える<strong class='target-particle'>ものなら</strong>、もう一度会いたいです。", "如果能够见面，我想再见一次。"]
                ]),
                advancedGrammar("实现困难的假设", "N1", "〜ようものなら", "如果一旦……的话", "动词意志形＋ものなら", "假设前项万一发生，并指出随后会产生<strong class='usage-key'>严重、麻烦或不希望出现的结果</strong>。", [
                    ["この秘密を話そう<strong class='target-particle'>ものなら</strong>、大きな問題になります。", "如果把这个秘密说出去，就会引发严重问题。"],
                    ["少しでも遅れよう<strong class='target-particle'>ものなら</strong>、席を失います。", "哪怕稍微迟到，就会失去座位。"]
                ]),
                advancedGrammar("设定与判断", "N2", "〜としたら／〜とすれば／〜とすると", "假如……的话", "普通形＋としたら／とすれば／とすると", "把尚未确定的前项暂时设定为事实，并在此基础上进行<strong class='usage-key'>推测、判断或选择</strong>。", [
                    ["一人で行く<strong class='target-particle'>としたら</strong>、朝早く出発します。", "如果要一个人去，就会一早出发。"],
                    ["この情報が正しい<strong class='target-particle'>とすれば</strong>、計画の見直しが必要です。", "如果这条信息属实，就需要重新审视计划。"]
                ]),
                advancedGrammar("设定与判断", "N1", "〜となると／〜となれば", "一旦到了……；如果真要……", "普通形＋となると／となれば", "表示某种情况真正成为现实以后，问题、判断或态度也会发生变化，突出<strong class='usage-key'>从设想到现实阶段的转换</strong>。", [
                    ["海外で暮らす<strong class='target-particle'>となると</strong>、準備することが多いです。", "如果真要去海外生活，需要准备的事情很多。"],
                    ["一人で担当する<strong class='target-particle'>となれば</strong>、時間が足りません。", "如果要由一个人负责，时间就不够。"]
                ]),
                advancedGrammar("特殊情况", "N1", "〜とあれば／〜とあっては", "如果是为了……；如果处于……", "普通形＋とあれば／とあっては", "「とあれば」表示为了某种特别目的可以采取行动；「とあっては」表示若前项情况成立，后项便产生<strong class='usage-key'>难以避免的判断或后果</strong>。", [
                    ["家族のため<strong class='target-particle'>とあれば</strong>、どんな苦労も惜しみません。", "如果是为了家人，什么辛苦都在所不惜。"],
                    ["安全に関わる<strong class='target-particle'>とあっては</strong>、見過ごせません。", "如果关系到安全，就不能置之不理。"]
                ])
            ]
        },
        "advanced-cause": {
            category: "因果关系",
            desc: "除一般原因外，还区分<strong class='usage-key'>中性原因、评价原因和原因依据</strong>。",
            items: [
                advancedGrammar("中性・正式原因", "N3", "〜ため（に）", "因为……；由于……", "普通形＋ため（に）（名词＋のために／な形容词＋なために）", "客观说明导致后项的原因。原因用法多见于正式说明，后项通常是<strong class='usage-key'>已经发生的事实或自然结果</strong>，不表示目的。", [
                    ["大雪の<strong class='target-particle'>ため</strong>、電車が遅れています。", "由于大雪，电车晚点。"],
                    ["機械が故障した<strong class='target-particle'>ために</strong>、作業を中止しました。", "由于机器故障，停止了作业。"]
                ]),
                advancedGrammar("中性・正式原因", "N1", "〜ゆえ（に）／〜がゆえに", "由于……；正因为……", "普通形＋ゆえ（に）／名词＋の・である＋ゆえ（に）／普通形＋がゆえに", "以书面、郑重的方式提出原因，并由此引出后项。常用于论述、评价和文学表达，突出<strong class='usage-key'>原因与结果之间的必然联系</strong>。", [
                    ["経験が浅い<strong class='target-particle'>ゆえに</strong>、判断を誤ることもあります。", "由于经验尚浅，有时也会判断失误。"],
                    ["責任感が強い<strong class='target-particle'>がゆえに</strong>、一人で抱え込んでしまいました。", "正因为责任感强，才把事情全都一个人扛了下来。"]
                ]),
                advancedGrammar("中性・正式原因", "N1", "〜とあって", "因为是……；由于处于……", "普通形＋とあって", "以前项所示的特别身份、时期或情况为原因，说明后项出现了<strong class='usage-key'>符合这种特殊背景的结果</strong>。", [
                    ["連休初日<strong class='target-particle'>とあって</strong>、駅は大変混雑していました。", "因为是连休第一天，车站非常拥挤。"],
                    ["人気作家の新作<strong class='target-particle'>とあって</strong>、多くの注文が集まりました。", "因为是人气作家的新作，收到了很多订单。"]
                ]),
                advancedGrammar("中性・正式原因", "N1", "〜こととて", "因为……；由于……", "普通形＋こととて（名词＋のこととて）", "较郑重地说明特殊情况或自身条件造成了后项，多用于道歉或请求理解，带有<strong class='usage-key'>请对方体谅原因</strong>的语气。", [
                    ["初めての<strong class='target-particle'>こととて</strong>、不手際がございました。", "因为是第一次，出现了处理不周。"],
                    ["子どものした<strong class='target-particle'>こととて</strong>、どうかお許しください。", "因为是孩子做的，还请原谅。"]
                ]),
                advancedGrammar("带有评价的原因", "N3", "〜おかげで", "多亏……；托……的福", "普通形＋おかげで（名词＋のおかげで）", "把前项评价为带来后项好结果的原因，表达<strong class='usage-key'>感谢或积极评价</strong>。用于不理想结果时常带有反讽。", [
                    ["先生の指導の<strong class='target-particle'>おかげで</strong>、合格できました。", "多亏老师指导，顺利通过了考试。"],
                    ["道が空いていた<strong class='target-particle'>おかげで</strong>、早く着きました。", "多亏道路畅通，很早就到了。"]
                ]),
                advancedGrammar("带有评价的原因", "N3", "〜せいで／〜せいか", "都因为……；也许因为……", "普通形＋せいで／せいか（名词＋のせいで／せいか）", "把前项评价为造成不良结果的原因。「せいで」较明确；「せいか」表示<strong class='usage-key'>原因尚未完全确定</strong>。", [
                    ["寝不足の<strong class='target-particle'>せいで</strong>、集中できません。", "因为睡眠不足，无法集中注意力。"],
                    ["緊張した<strong class='target-particle'>せいか</strong>、うまく話せませんでした。", "也许因为紧张，没能好好说话。"]
                ]),
                advancedGrammar("带有评价的原因", "N2", "〜ばかりに", "只因为……而……", "普通形＋ばかりに（名词・な形容词＋であるばかりに）", "把前项作为导致后项的决定性原因，并强调因此出现了<strong class='usage-key'>不希望发生的结果</strong>。", [
                    ["確認を怠った<strong class='target-particle'>ばかりに</strong>、大きなミスにつながりました。", "只因为疏于确认，结果造成了严重失误。"],
                    ["一言余計なことを言った<strong class='target-particle'>ばかりに</strong>、彼を怒らせました。", "只因为多说了一句话，结果惹他生气了。"]
                ]),
                advancedGrammar("带有评价的原因", "N2", "〜だけに", "正因为……所以更……", "普通形＋だけに（名词・な形容词＋であるだけに）", "以前项作为具有分量的原因，表示后项结果或评价<strong class='usage-key'>正因为这一原因而更加明显</strong>。", [
                    ["期待していた<strong class='target-particle'>だけに</strong>、結果にはがっかりしました。", "正因为一直期待，所以对结果很失望。"],
                    ["経験が豊富な<strong class='target-particle'>だけに</strong>、説明が分かりやすいです。", "正因为经验丰富，说明很容易理解。"]
                ]),
                advancedGrammar("原因依据与由来", "N2", "〜ことから／〜ところから", "因为……；由……可见", "普通形＋ことから／ところから", "以前项的事实、特征或发现为根据，引出名称由来、判断或结论。重点是<strong class='usage-key'>从可观察的依据推出后项</strong>。", [
                    ["形が星に似ている<strong class='target-particle'>ことから</strong>、この名が付けられました。", "因为形状像星星，所以取了这个名字。"],
                    ["多くの古文書が残っている<strong class='target-particle'>ところから</strong>、昔から重要な町だったと考えられています。", "从留存大量古文书这一点来看，这里自古就是重要城镇。"]
                ])
            ]
        },
        "advanced-contrast": {
            category: "转折关系",
            desc: "按照前后事实与说话态度，区分<strong class='usage-key'>保留、反预期、责难与判断修正</strong>。",
            items: [
                advancedGrammar("承认事实后保留", "N2", "〜ものの", "虽然……但是……", "普通形＋ものの（名词・な形容词＋であるものの）", "承认前项事实成立，但后项说明实际情况仍有<strong class='usage-key'>限制、困难或与预期不同之处</strong>。多用于书面语。", [
                    ["計画は立てた<strong class='target-particle'>ものの</strong>、まだ実行できていません。", "虽然制定了计划，但还没有付诸实施。"],
                    ["資格は取った<strong class='target-particle'>ものの</strong>、仕事が見つかりません。", "虽然取得了资格证，但还没找到工作。"]
                ]),
                advancedGrammar("承认事实后保留", "N1", "〜とはいえ", "虽说……但是……", "普通形＋とはいえ（名词＋とはいえ）", "承认前项判断大体成立，同时补充不能忽视的例外或限制，表示<strong class='usage-key'>不能仅凭前项下结论</strong>。", [
                    ["春になった<strong class='target-particle'>とはいえ</strong>、朝晩はまだ寒いです。", "虽说已经到了春天，早晚还是很冷。"],
                    ["専門家<strong class='target-particle'>とはいえ</strong>、間違うことはあります。", "虽说是专家，也会有出错的时候。"]
                ]),
                advancedGrammar("承认事实后保留", "N2", "〜といっても", "虽说……；所谓……其实", "普通形＋といっても", "先提出一种称呼或判断，再说明实际程度没有想象中那么高，用来<strong class='usage-key'>修正对前项的理解</strong>。", [
                    ["料理ができる<strong class='target-particle'>といっても</strong>、簡単な物だけです。", "虽说会做饭，也只会做简单的东西。"],
                    ["休み<strong class='target-particle'>といっても</strong>、午前中は仕事があります。", "虽说是休息日，上午仍有工作。"]
                ]),
                advancedGrammar("与预想相反", "N3", "〜たところが", "做了……，结果却……", "动词た形＋ところが", "叙述实际完成前项以后，出现了<strong class='usage-key'>与原先预想不同的事实</strong>。后项不是说话人事先安排的行为。", [
                    ["薬を飲ん<strong class='target-particle'>だところが</strong>、かえって気分が悪くなりました。", "吃了药以后，反而感觉更不舒服了。"],
                    ["本人に確認し<strong class='target-particle'>たところが</strong>、その話は事実ではありませんでした。", "向本人确认后，发现那件事并非事实。"]
                ]),
                advancedGrammar("与预想相反", "N1", "〜かと思いきや", "原以为……却……", "普通形＋かと思いきや", "先提出自然会产生的预想，后项却出现完全不同的事实，突出<strong class='usage-key'>意外性和较大的反差</strong>。", [
                    ["試合は終わった<strong class='target-particle'>かと思いきや</strong>、再開されました。", "原以为比赛结束了，没想到又重新开始了。"],
                    ["静かな人<strong class='target-particle'>かと思いきや</strong>、話し始めるととても面白いです。", "原以为他很安静，没想到一说起话来非常有趣。"]
                ]),
                advancedGrammar("与预想相反", "N2", "〜にもかかわらず", "尽管……却……", "名词／普通形＋にもかかわらず", "承认本应影响结果的前项条件存在，但后项依然成立，强调<strong class='usage-key'>事实结果与通常预想明显相反</strong>。常用于正式说明。", [
                    ["悪天候<strong class='target-particle'>にもかかわらず</strong>、多くの人が集まりました。", "尽管天气恶劣，仍有很多人到场。"],
                    ["何度も注意された<strong class='target-particle'>にもかかわらず</strong>、同じ間違いを繰り返しました。", "尽管被提醒很多次，还是犯了同样的错误。"]
                ]),
                advancedGrammar("不满・责难・遗憾", "N2", "〜くせに", "明明……却……", "普通形＋くせに（名词＋のくせに／な形容词＋なくせに）", "指出前项事实与后项行为不相称，并表达说话人的<strong class='usage-key'>批评、轻蔑或强烈不满</strong>。不适合用于礼貌场合。", [
                    ["何も知らない<strong class='target-particle'>くせに</strong>、知っているように話します。", "明明什么都不知道，却说得好像自己知道。"],
                    ["自分は遅れた<strong class='target-particle'>くせに</strong>、人には時間を守れと言いました。", "明明自己迟到了，却要求别人守时。"]
                ]),
                advancedGrammar("不满・责难・遗憾", "N1", "〜ものを", "明明……却……", "普通形＋ものを", "表示如果按照前项所说，本来可以得到更合适的结果，然而事实并非如此，常带有<strong class='usage-key'>遗憾、不满或责备</strong>。", [
                    ["早く相談してくれれば手伝えた<strong class='target-particle'>ものを</strong>、一人で無理をしました。", "明明早点商量我就能帮忙，却一个人硬撑。"],
                    ["黙っていれば分からなかった<strong class='target-particle'>ものを</strong>、自分から話してしまいました。", "明明保持沉默就不会被发现，却自己说了出来。"]
                ]),
                advancedGrammar("不满・责难・遗憾", "补充", "〜だろうに／〜でしょうに", "本来会……的；明明应该……", "普通形＋だろうに／でしょうに", "根据前项条件推测本来应出现某种结果，但实际并非如此，表达<strong class='usage-key'>遗憾、不满或对他人的责备</strong>。「でしょうに」较礼貌。", [
                    ["もっと早く知らせてくれれば、手伝えた<strong class='target-particle'>だろうに</strong>。", "要是早点通知我，我本来就能帮忙的。"],
                    ["事前に確認しておけば、問題は起きなかった<strong class='target-particle'>でしょうに</strong>。", "要是事先确认，本来就不会出问题。"]
                ]),
                advancedGrammar("比较与判断修正", "N2", "〜わりに（は）", "虽然……却；与……相比", "普通形＋わりに（は）（名词＋のわりに）", "以后项实际情况同前项所形成的标准进行比较，表示二者<strong class='usage-key'>不符合通常应有的比例或预想</strong>。", [
                    ["この店は安い<strong class='target-particle'>わりに</strong>、料理がおいしいです。", "这家店虽然便宜，菜却很好吃。"],
                    ["彼は経験が少ない<strong class='target-particle'>わりには</strong>、仕事が速いです。", "他经验虽然不多，工作却很快。"]
                ]),
                advancedGrammar("比较与判断修正", "N3", "〜にしては", "作为……来说却……", "名词／普通形＋にしては", "把前项身份、条件或事实作为评价基准，表示后项与该基准下的<strong class='usage-key'>一般预想不一致</strong>。", [
                    ["初めて<strong class='target-particle'>にしては</strong>、上手にできました。", "作为第一次来说，做得很好。"],
                    ["子ども<strong class='target-particle'>にしては</strong>、難しい言葉をよく知っています。", "作为孩子来说，知道很多难词。"]
                ]),
                advancedGrammar("比较与判断修正", "N2", "〜どころか", "岂止不……，反而……", "名词／普通形＋どころか", "先否定前项所代表的判断，再提出差距更大或方向相反的事实，用来<strong class='usage-key'>修正认识并加强后项</strong>。", [
                    ["休む<strong class='target-particle'>どころか</strong>、仕事はさらに増えました。", "别说休息了，工作反而更多了。"],
                    ["彼は謝る<strong class='target-particle'>どころか</strong>、こちらを批判しました。", "他不但没有道歉，反而批评了我们。"]
                ]),
                advancedGrammar("比较与判断修正", "N2", "〜反面／〜半面", "另一方面……", "普通形＋反面／半面（名词・な形容词＋である反面）", "说明同一事物同时具有两种相反或不同的性质，用后项补充前项的<strong class='usage-key'>另一侧面</strong>。", [
                    ["この仕事は自由な<strong class='target-particle'>反面</strong>、責任も重いです。", "这份工作自由，但另一方面责任也很重。"],
                    ["都会は便利な<strong class='target-particle'>半面</strong>、生活費が高いです。", "城市虽然方便，但另一方面生活费很高。"]
                ])
            ]
        },
        "advanced-concession": {
            category: "让步关系",
            desc: "承认或假设前项成立，同时强调后项<strong class='usage-key'>依然不受影响或结论仍不改变</strong>。",
            items: [
                advancedGrammar("结果不会改变", "N2", "〜たところで", "即使……也……", "动词た形＋ところで", "假设前项真的实施，也判断它<strong class='usage-key'>无法带来期待的结果或改变当前状况</strong>。后项多是否定评价。", [
                    ["今から急い<strong class='target-particle'>だところで</strong>、開始時間には間に合いません。", "即使现在赶过去，也赶不上开始时间。"],
                    ["一人で悩ん<strong class='target-particle'>だところで</strong>、問題は解決しません。", "即使一个人烦恼，问题也不会解决。"]
                ]),
                advancedGrammar("结果不会改变", "N1", "〜にしたところで", "即使站在……立场也……", "名词＋にしたところで／普通形＋にしたところで", "即使把前项人物或情况纳入考虑，后项判断仍不改变。常用于说明<strong class='usage-key'>任何一方都无法避免同样的限制</strong>。", [
                    ["専門家<strong class='target-particle'>にしたところで</strong>、すぐには判断できません。", "即使是专家，也无法马上判断。"],
                    ["彼<strong class='target-particle'>にしたところで</strong>、ほかに方法がなかったのでしょう。", "即使是他，大概也没有别的办法。"]
                ]),
                advancedGrammar("正式让步", "N1", "〜とて", "即使……也……", "名词／普通形＋とて", "先承认前项身份、条件或可能性，再说明后项仍然成立。属于<strong class='usage-key'>正式、书面化的让步表达</strong>。", [
                    ["専門家<strong class='target-particle'>とて</strong>、すべてを予測できるわけではありません。", "即使是专家，也不可能预测一切。"],
                    ["どれほど説明した<strong class='target-particle'>とて</strong>、彼は納得しないでしょう。", "无论怎样说明，他大概也不会接受。"]
                ]),
                advancedGrammar("正式让步", "N1", "〜といえども", "虽说……也……；即使……也……", "名词／普通形＋といえども", "先承认前项具有某种身份或事实，再指出后项规则、责任或判断仍适用。多用于<strong class='usage-key'>郑重、正式的论述</strong>。", [
                    ["未成年<strong class='target-particle'>といえども</strong>、規則を守る必要があります。", "虽说是未成年人，也必须遵守规则。"],
                    ["小さなミス<strong class='target-particle'>といえども</strong>、見過ごせません。", "即使是小错误，也不能放过。"]
                ]),
                advancedGrammar("无论哪种情况", "N2", "〜にしろ／〜にせよ", "即使……；无论……", "名词／普通形＋にしろ／にせよ", "暂时承认前项情况，或并列两个选择，表示无论哪一种成立，后项判断都相同。常见形式为<strong class='usage-key'>「AにしろBにしろ」「AにせよBにせよ」</strong>。", [
                    ["参加する<strong class='target-particle'>にしろ</strong>、しないにしろ、連絡してください。", "无论参加与否，请联系我。"],
                    ["誰が担当する<strong class='target-particle'>にせよ</strong>、確認は必要です。", "无论由谁负责，都需要确认。"]
                ]),
                advancedGrammar("无论哪种情况", "N1", "〜であれ〜であれ", "无论是……还是……", "名词＋であれ＋名词＋であれ", "列出具有代表性的两个选择，表示其他同类情况也包括在内，后项结论<strong class='usage-key'>不因选择不同而改变</strong>。", [
                    ["晴れ<strong class='target-particle'>であれ</strong>雨であれ、行事は行います。", "无论晴天还是雨天，活动都会举行。"],
                    ["学生<strong class='target-particle'>であれ</strong>社会人であれ、応募できます。", "无论学生还是社会人士，都可以报名。"]
                ]),
                advancedGrammar("无论哪种情况", "N1", "〜（よ）うが／〜（よ）うと・〜まいが", "无论……都……", "动词意志形＋が／と（＋动词辞书形＋まいが）", "无论前项采取哪种行动或情况发展到何种程度，后项的意志或判断都不改变。常用于<strong class='usage-key'>坚定表态</strong>。", [
                    ["誰に反対され<strong class='target-particle'>ようが</strong>、計画は続けます。", "无论遭到谁反对，计划都会继续。"],
                    ["雨が降ろう<strong class='target-particle'>が降るまいが</strong>、出発します。", "无论下不下雨，都会出发。"]
                ]),
                advancedGrammar("极端条件", "N1", "〜たりとも", "哪怕……也不……", "数量词／名词＋たりとも", "举出最小数量或最低范围，强调即使只有这一点也不允许例外。后项多使用<strong class='usage-key'>否定、禁止或坚定意志</strong>。", [
                    ["一秒<strong class='target-particle'>たりとも</strong>無駄にはできません。", "哪怕一秒也不能浪费。"],
                    ["一人<strong class='target-particle'>たりとも</strong>取り残してはいけません。", "一个人也不能落下。"]
                ])
            ]
        },
        "advanced-parallel": {
            category: "同时・追加",
            desc: "说明两个动作并行、两种性质并存，或在前项基础上<strong class='usage-key'>继续追加相关内容</strong>。",
            items: [
                advancedGrammar("同时进行与并存", "N1", "〜かたわら", "一边……一边……；同时还……", "动词辞书形／名词＋の＋かたわら", "表示在持续从事主要活动的同时，还长期或反复进行另一项活动。与「ながら」相比，更强调<strong class='usage-key'>两项活动在较长期间内并行</strong>。", [
                    ["会社で働く<strong class='target-particle'>かたわら</strong>、夜は大学で学んでいます。", "一边在公司工作，一边晚上在大学学习。"],
                    ["農業の<strong class='target-particle'>かたわら</strong>、地域の子どもたちに野球を教えています。", "从事农业的同时，还教当地孩子打棒球。"]
                ]),
                advancedGrammar("同时进行与并存", "N2", "〜一方（で）", "一方面……另一方面……", "普通形＋一方（で）（名词・な形容词＋である一方）", "说明同一主体或同一情况同时具有两种不同侧面，也可对照两个主体。重点在于<strong class='usage-key'>两项事实并存</strong>。", [
                    ["この仕事はやりがいがある<strong class='target-particle'>一方で</strong>、責任も重いです。", "这份工作有价值，但另一方面责任也很重。"],
                    ["都市では人口が増える<strong class='target-particle'>一方</strong>、地方では減少しています。", "城市人口增加，而地方人口正在减少。"]
                ]),
                advancedGrammar("同时进行与并存", "N2", "〜とともに", "与……同时；随着……", "名词＋とともに／动词辞书形＋とともに", "表示两个主体共同进行动作，或两个变化同时发展。连接分句时，重点是前后项<strong class='usage-key'>同步发生或同步变化</strong>。", [
                    ["年齢を重ねる<strong class='target-particle'>とともに</strong>、考え方も変わりました。", "随着年龄增长，想法也改变了。"],
                    ["制度の開始<strong class='target-particle'>とともに</strong>、新しい窓口が設けられました。", "随着制度开始，设置了新的窗口。"]
                ]),
                advancedGrammar("内容追加", "N3", "〜上（に）", "不但……而且……", "普通形＋上（に）（名词・な形容词＋である上に）", "在前项事实的基础上继续添加同方向的情况，使整体评价进一步加强。前后项通常具有<strong class='usage-key'>相同的积极或消极方向</strong>。", [
                    ["この部屋は広い<strong class='target-particle'>上に</strong>、駅にも近いです。", "这个房间不仅宽敞，而且离车站也近。"],
                    ["道に迷った<strong class='target-particle'>上</strong>、雨まで降ってきました。", "不仅迷了路，还下起了雨。"]
                ]),
                advancedGrammar("内容追加", "N1", "〜もさることながら", "……自不必说，……也……", "名词＋もさることながら", "先承认前项值得注意，再把重点移向后项，表示后项同样重要或更加突出。用于<strong class='usage-key'>正式地追加评价对象</strong>。", [
                    ["価格<strong class='target-particle'>もさることながら</strong>、品質の高さが魅力です。", "价格固然重要，品质之高也很有吸引力。"],
                    ["本人の努力<strong class='target-particle'>もさることながら</strong>、家族の支えも大きかったです。", "本人的努力自不必说，家人的支持也很重要。"]
                ]),
                advancedGrammar("内容追加", "N1", "〜わ〜わ", "又……又……；既……又……", "普通形＋わ＋普通形＋わ", "列举两个以上同方向的事实，强调多种情况集中出现。常用于会话，容易带有<strong class='usage-key'>惊讶、抱怨或强烈评价</strong>。", [
                    ["財布はなくす<strong class='target-particle'>わ</strong>、電車には遅れるわで、大変な一日でした。", "又丢钱包又赶不上电车，真是糟糕的一天。"],
                    ["料理はおいしい<strong class='target-particle'>わ</strong>、景色はきれいだわで、すっかり気に入りました。", "饭菜又好吃，景色又漂亮，我完全喜欢上了这里。"]
                ])
            ]
        }
    };

    const particleData = {
        "て／で": {
            desc: "连接前后动作或状态，表示<strong class='usage-key'>顺序、原因或附带状态</strong>",
            usages: [
                {
                    title: "表示动作的先后顺序",
                    definition: "前项动作完成后继续进行后项动作，表示两个动作按照<strong class='usage-key'>实际发生的顺序</strong>连接起来。",
                    connection: "动词て形＋后项",
                    note: "前后动作通常具有明确的时间先后。若要特别强调“完成前项以后再做后项”，可使用「〜てから」。",
                    examples: [
                        { text: "窓を開け<strong class='target-particle'>て</strong>、部屋を換気します。", translation: "打开窗户，给房间通风。" },
                        { text: "駅で友達に会っ<strong class='target-particle'>て</strong>、一緒に会場へ行きました。", translation: "在车站见到朋友后，一起去了会场。" }
                    ],
                    related: {
                        lead: "明确以前项完成为后项成立的起点时，可以形成更具体的时间与条件表达。",
                        items: [
                            grammar("N3", "〜てからでないと／〜てからでなければ", "不在……之后就不能……", "动词て形＋からでないと／からでなければ", "把前项规定为后项成立前<strong class='usage-key'>必须先完成的步骤</strong>。后项多使用否定形式，表示条件未满足便无法进行。", [
                                ["本人確認をし<strong class='target-particle'>てからでないと</strong>、手続きを進められません。", "不先确认本人身份，就无法继续办理手续。"],
                                ["実物を見<strong class='target-particle'>てからでなければ</strong>、購入するか決められません。", "不先看实物，就无法决定是否购买。"]
                            ]),
                            grammar("N2", "〜て初めて", "直到……才……", "动词て形＋初めて", "表示完成或经历前项以后，<strong class='usage-key'>后项情况才第一次成立或被认识到</strong>。后项常出现「分かる」「気づく」「できる」等。", [
                                ["自分で暮らし<strong class='target-particle'>て初めて</strong>、家事の大変さが分かりました。", "直到自己生活以后，才明白做家务有多辛苦。"],
                                ["現場を見<strong class='target-particle'>て初めて</strong>、問題の深刻さに気づきました。", "直到看过现场，才意识到问题的严重性。"]
                            ]),
                            grammar("N2", "〜て以来", "自从……以后一直……", "动词て形＋以来", "以前项事件为时间起点，表示某种状态或反复进行的行为<strong class='usage-key'>从那以后一直持续到现在</strong>。后项常与「ずっと」「一度も〜ない」「〜続けている」等搭配，一般不用于只发生一次的行为。", [
                                ["日本へ来<strong class='target-particle'>て以来</strong>、毎日日本語で日記を書いています。", "自从来到日本以后，我每天都用日语写日记。"],
                                ["大学を卒業し<strong class='target-particle'>て以来</strong>、彼とは一度も会っていません。", "自从大学毕业以后，我一次也没有见过他。"]
                            ]),
                            grammar("N1", "〜てからというもの", "自从……以后就一直……", "动词て形＋からというもの", "以前项事件为明显的契机，强调此后<strong class='usage-key'>发生了较大的变化，并且变化后的状态一直延续</strong>。与「〜て以来」相比，更突出转变及说话人的感受。", [
                                ["子どもが生まれ<strong class='target-particle'>てからというもの</strong>、生活のリズムがすっかり変わりました。", "自从孩子出生以后，生活节奏完全改变了。"],
                                ["この仕事を任され<strong class='target-particle'>てからというもの</strong>、責任の重さを毎日感じています。", "自从被交付这项工作以后，我每天都感受到责任重大。"]
                            ])
                        ]
                    }
                },
                {
                    title: "表示原因或理由",
                    definition: "前项说明后项产生的原因，后项多是<strong class='usage-key'>自然发生的结果、状态或感情</strong>。",
                    connection: "动词て形／い形容词くて／な形容词・名词＋で",
                    note: "这种原因表达通常不是说话人主动选择的理由，后项一般不使用命令、请求或强烈意志。",
                    examples: [
                        { text: "道が混ん<strong class='target-particle'>で</strong>、約束の時間に遅れました。", translation: "因为道路拥堵，约会迟到了。" },
                        { text: "部屋が静か<strong class='target-particle'>で</strong>、よく眠れました。", translation: "因为房间很安静，睡得很好。" }
                    ]
                },
                {
                    title: "以前项状态进行后项",
                    definition: "前项说明进行后项动作时保持的姿势、方式或附带状态，相当于<strong class='usage-key'>“以……状态”</strong>进行后项。",
                    connection: "动词て形＋后项动作",
                    note: "这里的前项不是先完成的独立动作，而是与后项动作同时存在的状态。",
                    examples: [
                        { text: "眼鏡をかけ<strong class='target-particle'>て</strong>、本を読んでいます。", translation: "戴着眼镜看书。" },
                        { text: "みんなは立っ<strong class='target-particle'>て</strong>話を聞いていました。", translation: "大家站着听讲话。" }
                    ]
                }
            ]
        },
        "と": {
            desc: "以前项为条件，引出<strong class='usage-key'>自然、恒常或自动出现的结果</strong>",
            usages: [
                {
                    title: "表示自然结果或反复规律",
                    definition: "前项一旦成立，后项便自然、恒常或反复出现，强调二者之间具有<strong class='usage-key'>稳定的条件结果关系</strong>。",
                    connection: "普通形＋と",
                    note: "常用于自然现象、习惯和机器操作。后项原则上不使用命令、请求、劝诱或说话人的意志表达。",
                    examples: [
                        { text: "春になる<strong class='target-particle'>と</strong>、この公園の桜が咲きます。", translation: "一到春天，这座公园的樱花就会开放。" },
                        { text: "このボタンを押す<strong class='target-particle'>と</strong>、ドアが開きます。", translation: "一按这个按钮，门就会打开。" }
                    ]
                },
                {
                    title: "表示随后发现的情况",
                    definition: "说话人完成前项动作后，立即发现后项情况，后项是<strong class='usage-key'>当时才注意到的事实</strong>。",
                    connection: "动词辞书形＋と＋过去叙述",
                    note: "前项可以是说话人主动进行的动作，但后项不是预先安排的意志行为，而是实际发现的结果。",
                    examples: [
                        { text: "窓を開ける<strong class='target-particle'>と</strong>、外は雪でした。", translation: "打开窗户一看，外面正在下雪。" },
                        { text: "駅に着く<strong class='target-particle'>と</strong>、電車はもう出たあとでした。", translation: "到车站一看，电车已经开走了。" }
                    ]
                }
            ]
        },
        "ば": {
            desc: "把前项作为后项成立所需的<strong class='usage-key'>条件或判断依据</strong>",
            usages: [
                {
                    title: "表示一般条件或必要条件",
                    definition: "说明只要前项条件得到满足，便可以判断后项成立，重点落在<strong class='usage-key'>后项需要什么条件</strong>。",
                    connection: "动词ば形／い形容词ければ／な形容词・名词＋なら（ば）",
                    note: "适合说明方法、一般法则和必要条件。当前项是人为动作时，后项使用命令、请求或意志会受到限制。",
                    examples: [
                        { text: "気温が下がれ<strong class='target-particle'>ば</strong>、雪になるでしょう。", translation: "如果气温下降，大概会下雪。" },
                        { text: "分からないことがあれ<strong class='target-particle'>ば</strong>、いつでも聞いてください。", translation: "如果有不明白的地方，随时可以问。" }
                    ],
                    related: {
                        lead: "「ば」进一步与限定或程度表达结合，可以突出最低条件或同步变化。",
                        items: [
                            grammar("N3", "〜ば〜ほど", "越……越……", "动词ば形＋同一动词辞书形＋ほど／形容词ば形＋同一形容词＋ほど", "表示前项程度增加时，后项也<strong class='usage-key'>随之向同一方向发生变化</strong>。前后通常具有可以观察到的比例关系。", [
                                ["この本は読め<strong class='target-particle'>ば読むほど</strong>面白くなります。", "这本书越读越有意思。"],
                                ["練習すれ<strong class='target-particle'>ばするほど</strong>、発音が自然になります。", "越练习，发音就越自然。"]
                            ]),
                            grammar("N2", "〜さえ〜ば／〜さえ〜なら", "只要……就……", "名词＋さえ＋条件形／动词第一连用形＋さえすれば", "把前项作为实现后项所需的<strong class='usage-key'>最低条件</strong>，表示其他条件即使不完全具备也没有问题。", [
                                ["時間<strong class='target-particle'>さえあれば</strong>、今日中に完成できます。", "只要有时间，今天之内就能完成。"],
                                ["必要な資料<strong class='target-particle'>さえそろえば</strong>、作業を始められます。", "只要备齐必要资料，就能开始工作。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "たら": {
            desc: "以前项成立或完成为界，引出<strong class='usage-key'>其后发生的具体结果</strong>",
            usages: [
                {
                    title: "表示具体条件或完成后的安排",
                    definition: "假设前项在某个具体场景中成立，或等前项完成以后再进行后项，具有明确的<strong class='usage-key'>前项在先、后项在后</strong>关系。",
                    connection: "普通形过去式＋ら",
                    note: "适用范围较广，后项可以使用意志、命令、请求、邀请和建议。",
                    examples: [
                        { text: "仕事が終わっ<strong class='target-particle'>たら</strong>、電話してください。", translation: "工作结束后，请给我打电话。" },
                        { text: "明日晴れ<strong class='target-particle'>たら</strong>、公園へ行きましょう。", translation: "明天如果天晴，就去公园吧。" }
                    ],
                    related: {
                        lead: "具体条件用于建议或回顾过去时，可以形成劝告与后悔表达。",
                        items: [
                            grammar("N3", "〜たらどうですか", "……怎么样", "动词た形＋らどうですか", "向对方提出一种可考虑的做法，相当于<strong class='usage-key'>温和地给出建议</strong>。根据语气也可能带有责备意味。", [
                                ["少し休ん<strong class='target-particle'>だらどうですか</strong>。", "稍微休息一下怎么样？"],
                                ["分からなければ、先生に聞い<strong class='target-particle'>たらどうですか</strong>。", "不明白的话，问问老师怎么样？"]
                            ]),
                            grammar("N3", "〜ばよかった／〜たらよかった", "要是……就好了／早知道就……", "动词ば形／动词た形＋ら＋よかった", "回顾已经无法改变的情况，表示当时采取前项行动会更好，因而表达<strong class='usage-key'>后悔或遗憾</strong>。", [
                                ["もっと早く相談すれ<strong class='target-particle'>ばよかった</strong>です。", "早知道就早点商量了。"],
                                ["私も一緒に行っ<strong class='target-particle'>たらよかった</strong>です。", "我要是也一起去就好了。"]
                            ])
                        ]
                    }
                },
                {
                    title: "表示实际发生后的发现",
                    definition: "前项动作实际完成以后，出现了事先没有预料到的后项，表示<strong class='usage-key'>做了以后才发现</strong>。",
                    connection: "动词た形＋ら＋过去叙述",
                    note: "这里的「たら」不是单纯假设，而是叙述已经发生的事实。后项通常是过去式。",
                    examples: [
                        { text: "店へ行っ<strong class='target-particle'>たら</strong>、今日は休みでした。", translation: "去了店里才发现今天休息。" },
                        { text: "箱を開け<strong class='target-particle'>たら</strong>、中に手紙が入っていました。", translation: "打开盒子后发现里面放着一封信。" }
                    ],
                    related: {
                        lead: "把某个结果设为决定性界限时，可以表达“一旦发生便失去意义”。",
                        items: [
                            grammar("N1", "〜たらそれまでだ", "一旦……就全完了／就没有意义了", "动词た形＋らそれまでだ", "表示一旦出现前项结果，之前的努力、价值或计划便<strong class='usage-key'>无法继续维持</strong>。常用于提醒风险。", [
                                ["信用を失っ<strong class='target-particle'>たらそれまでです</strong>。", "一旦失去信用，一切就都完了。"],
                                ["データが消え<strong class='target-particle'>たらそれまでなので</strong>、必ず保存してください。", "数据一旦消失就全完了，请务必保存。"]
                            ]),
                            grammar("N1", "〜たら〜たで", "即使……了，也有相应的问题", "动词た形＋ら＋同一动词た形＋で", "先设想前项结果成立，再说明这种结果<strong class='usage-key'>也会带来相应的情况或问题</strong>。常带有两种选择都不轻松的语气。", [
                                ["引っ越し<strong class='target-particle'>たら引っ越したで</strong>、新しい問題が出てきます。", "即使搬了家，也会出现新的问题。"],
                                ["断っ<strong class='target-particle'>たら断ったで</strong>、後悔するかもしれません。", "即使拒绝了，也可能会后悔。"]
                            ]),
                            grammar("N1", "〜たら最後／〜たが最後", "一旦……就无法挽回", "动词た形＋ら最後／动词た形＋が最後", "表示前项一旦发生，后项便会持续下去或造成<strong class='usage-key'>难以阻止、无法恢复的结果</strong>。常用于警告不利后果。", [
                                ["彼は話し始め<strong class='target-particle'>たら最後</strong>、なかなか止まりません。", "他一旦开始说，就很难停下来。"],
                                ["この秘密が知られ<strong class='target-particle'>たが最後</strong>、計画は中止になるでしょう。", "这个秘密一旦被人知道，计划恐怕就会中止。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "から": {
            desc: "明确提出说话人据以作出后项判断或行动的<strong class='usage-key'>原因、理由</strong>",
            usages: [
                {
                    title: "表示原因或理由",
                    definition: "以前项作为后项成立的原因，常用于说明说话人的<strong class='usage-key'>判断、主张、意志或行动理由</strong>。",
                    connection: "普通形＋から／名词・な形容词＋だから",
                    note: "后项可以使用命令、请求、邀请和意志表达。与「ので」相比，更容易表现说话人的主观判断。",
                    examples: [
                        { text: "雨が降っています<strong class='target-particle'>から</strong>、傘を持って行ってください。", translation: "因为正在下雨，请带伞去。" },
                        { text: "今日は休みだ<strong class='target-particle'>から</strong>、家でゆっくりします。", translation: "因为今天休息，所以在家好好放松。" }
                    ],
                    related: {
                        lead: "原因关系被特别强调、限制、解释或转化为责任时，会形成以下常见语法。",
                        items: [
                            grammar("N3", "〜からこそ", "正因为……才……", "普通形＋からこそ", "用「こそ」强调前项是后项成立的<strong class='usage-key'>关键原因</strong>，常用于纠正表面认识或肯定原因的价值。", [
                                ["失敗した<strong class='target-particle'>からこそ</strong>、学べたことがあります。", "正因为失败过，才学到了一些东西。"],
                                ["信頼している<strong class='target-particle'>からこそ</strong>、本当のことを話します。", "正因为信任你，才告诉你实情。"]
                            ]),
                            grammar("N3", "〜からといって", "不能因为……就……", "普通形＋からといって", "先提出一个理由，再否定仅凭这一理由便能得出后项结论，表示<strong class='usage-key'>理由不足以支持判断</strong>。后项常与否定或批评表达搭配。", [
                                ["安い<strong class='target-particle'>からといって</strong>、必要のない物まで買うべきではありません。", "不能因为便宜，就连不需要的东西也买。"],
                                ["経験がある<strong class='target-particle'>からといって</strong>、必ず成功するとは限りません。", "不能因为有经验，就认为一定会成功。"]
                            ]),
                            grammar("N2", "〜からには", "既然……就……", "普通形＋からには", "把前项视为已经确定的事实，并表示既然如此，后项就应当承担相应的<strong class='usage-key'>责任、决心或义务</strong>。", [
                                ["引き受けた<strong class='target-particle'>からには</strong>、最後まで責任を持ちます。", "既然接受了，就会负责到底。"],
                                ["約束した<strong class='target-particle'>からには</strong>、守らなければなりません。", "既然约定了，就必须遵守。"]
                            ]),
                            grammar("N2", "〜もので／〜ものだから", "因为……", "普通形＋もので／ものだから（名词・な形容词＋なもので／なものだから）", "在「ものだ」之后使用原因接续助词「から」，或使用较柔和的「もので」，说明造成后项的具体缘由。常带有<strong class='usage-key'>解释情况或为自己的行为说明理由</strong>的语气。", [
                                ["電車が遅れた<strong class='target-particle'>もので</strong>、到着が遅くなりました。", "因为电车晚点，所以到得晚了。"],
                                ["初めてだった<strong class='target-particle'>ものだから</strong>、手順を間違えてしまいました。", "因为是第一次，所以弄错了步骤。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "ので": {
            desc: "把前项作为后项产生的<strong class='usage-key'>客观背景或较柔和的理由</strong>",
            usages: [
                {
                    title: "说明原因并缓和语气",
                    definition: "把前项作为后项产生的背景或原因，使原因说明显得较为<strong class='usage-key'>客观、自然和委婉</strong>。",
                    connection: "普通形＋ので／名词・な形容词＋なので",
                    note: "常用于解释情况、道歉和礼貌请求。会话中也常以「ので……」结束，让对方推测后续内容。",
                    examples: [
                        { text: "電車が遅れた<strong class='target-particle'>ので</strong>、会議に間に合いませんでした。", translation: "因为电车晚点，没能赶上会议。" },
                        { text: "少し体調が悪い<strong class='target-particle'>ので</strong>、今日は先に失礼します。", translation: "因为身体有些不舒服，今天先告辞了。" }
                    ]
                }
            ]
        },
        "が": {
            desc: "连接前后分句，表示<strong class='usage-key'>转折</strong>，也可作为委婉的开场",
            usages: [
                {
                    title: "表示前后内容相反或不一致",
                    definition: "先承认前项事实，再用后项补充与之相反、不同或受到限制的内容。",
                    connection: "普通形＋が",
                    note: "「が」语气较中性，口语和书面语都可使用。前后不一定完全相反，也可以只是转换说明方向。",
                    examples: [
                        { text: "この部屋は狭いです<strong class='target-particle'>が</strong>、明るくて快適です。", translation: "这个房间虽然小，但明亮舒适。" },
                        { text: "毎日練習しました<strong class='target-particle'>が</strong>、試合には勝てませんでした。", translation: "虽然每天练习，但没能赢得比赛。" }
                    ],
                    related: {
                        lead: "先承认前项本身可以接受，再利用「が」指出现实中的限制时，可以使用「〜はいいが」。",
                        items: [
                            grammar("补充", "〜はいいが", "……是可以，不过……", "名词＋はいいが／动词普通形＋のはいいが", "先承认前项的做法、计划或状态本身可以接受，再在后项指出<strong class='usage-key'>尚未解决的问题、必要条件或需要注意之处</strong>。", [
                                ["新しい設備を導入する<strong class='target-particle'>のはいいが</strong>、使い方の説明が必要です。", "引进新设备是可以，不过需要说明使用方法。"],
                                ["大きな机を買う<strong class='target-particle'>のはいいが</strong>、置く場所がありません。", "买一张大桌子是可以，不过没有地方摆。"]
                            ])
                        ]
                    }
                },
                {
                    title: "委婉提出话题或请求",
                    definition: "先说明背景，再把真正想说的请求、询问或保留意见放在后面，使表达更加委婉。",
                    connection: "前置说明＋が＋后项／前置说明＋が……",
                    note: "会话中后项经常省略。句末保留「が……」可以避免直接提出要求，给对方留下回应空间。",
                    examples: [
                        { text: "少し伺いたいことがあります<strong class='target-particle'>が</strong>、今よろしいですか。", translation: "有件事想请教，现在方便吗？" },
                        { text: "予約を変更したいんです<strong class='target-particle'>が</strong>……。", translation: "我想更改预约……" }
                    ]
                }
            ]
        },
        "けれど（も）": {
            desc: "表示转折或添加保留说明，会话中常缩略为<strong class='usage-key'>「けど」</strong>",
            usages: [
                {
                    title: "表示转折或保留",
                    definition: "前项成立，但后项出现与预期不同的内容，或对前项补充限制与保留意见。",
                    connection: "普通形＋けれど（も）／名词・な形容词＋だけれど（も）",
                    note: "「けれども」较完整，「けれど」中性，「けど」多用于口语。实际会话中前后也可能只是较松散的连接。",
                    examples: [
                        { text: "この仕事は大変だ<strong class='target-particle'>けれど</strong>、やりがいがあります。", translation: "这份工作虽然辛苦，但很有价值。" },
                        { text: "説明を読みました<strong class='target-particle'>けど</strong>、よく分かりませんでした。", translation: "虽然看了说明，但没太明白。" }
                    ]
                },
                {
                    title: "柔和地引出话题",
                    definition: "在真正想说的内容之前加入背景，或在句末省略后项，使请求、拒绝和反对不显得过于直接。",
                    connection: "前置说明＋けれど（も）＋后项／前置说明＋けど……",
                    note: "句末使用「けど……」时，听话人需要从语境补出请求或保留内容。",
                    examples: [
                        { text: "明日の会議のことです<strong class='target-particle'>けれど</strong>、開始時間を確認してもいいですか。", translation: "关于明天的会议，可以确认一下开始时间吗？" },
                        { text: "その日は少し都合が悪いんです<strong class='target-particle'>けど</strong>……。", translation: "那天我有点不方便……" }
                    ]
                }
            ]
        },
        "のに": {
            desc: "表示实际结果与前项形成的<strong class='usage-key'>自然预期相反</strong>",
            usages: [
                {
                    title: "表示与预期相反的结果",
                    definition: "根据前项通常会期待某种结果，但实际后项却与这种期待不同，常带有<strong class='usage-key'>遗憾、不满、惊讶或责备</strong>。",
                    connection: "普通形＋のに／名词・な形容词＋なのに",
                    note: "「のに」不仅连接事实，也表现说话人对预期落空的态度。后项一般不用命令或请求。",
                    examples: [
                        { text: "薬を飲んだ<strong class='target-particle'>のに</strong>、まだ熱が下がりません。", translation: "明明吃了药，烧还是没退。" },
                        { text: "今日は休日な<strong class='target-particle'>のに</strong>、会社へ行かなければなりません。", translation: "明明今天是休息日，却必须去公司。" }
                    ],
                    related: {
                        lead: "期待未实现时，「のに」可以与条件表达结合，形成愿望、遗憾或劝告。",
                        items: [
                            grammar("N3", "〜ばいいのに／〜たらいいのに", "要是……就好了／明明……就好了", "动词ば形／动词た形＋ら＋いいのに", "表示说话人认为前项做法更合适，但现实尚未如此，因而表达<strong class='usage-key'>愿望、遗憾或对他人的委婉劝告</strong>。", [
                                ["もっと早く連絡してくれれ<strong class='target-particle'>ばいいのに</strong>。", "要是能早点联系我就好了。"],
                                ["分からないなら、先生に聞い<strong class='target-particle'>たらいいのに</strong>。", "不明白的话，明明问老师就好了。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "ても／でも": {
            desc: "表示即使前项成立，后项结果仍然<strong class='usage-key'>不会因此改变</strong>",
            usages: [
                {
                    title: "表示让步条件",
                    definition: "承认或假设前项成立，同时说明后项仍然成立，强调前项<strong class='usage-key'>不足以改变后项结果</strong>。",
                    connection: "动词て形／い形容词くて＋も／名词・な形容词＋でも",
                    note: "既可表示尚未发生的假设，也可承认已经存在的事实。与疑问词搭配可形成「誰でも・何をしても」等全面条件。",
                    examples: [
                        { text: "雨が降っ<strong class='target-particle'>ても</strong>、試合は行います。", translation: "即使下雨，也会举行比赛。" },
                        { text: "この仕事は大変<strong class='target-particle'>でも</strong>、最後まで続けたいです。", translation: "即使这项工作辛苦，也想坚持到底。" }
                    ],
                    related: {
                        lead: "「ても／でも」与强调假设或口语缩约结合后，可以形成更明确的让步表达。",
                        items: [
                            grammar("N2", "たとえ〜ても／〜でも", "即使……也……", "たとえ＋普通形＋ても／でも", "用副词「たとえ」明确提示后面是假设让步，强调即便前项成立，后项的<strong class='usage-key'>决定、评价或结果仍不会改变</strong>。", [
                                ["<strong class='target-particle'>たとえ</strong>雨が降っ<strong class='target-particle'>ても</strong>、試合は行います。", "即使下雨，比赛也会举行。"],
                                ["<strong class='target-particle'>たとえ</strong>反対され<strong class='target-particle'>ても</strong>、考えは変えません。", "即使遭到反对，也不会改变想法。"]
                            ]),
                            grammar("N2", "〜としても", "即使……也……／就算……", "普通形＋としても", "暂时把前项当作假设成立，再说明后项判断仍然不改变。常用于<strong class='usage-key'>让步、反驳或保留意见</strong>。", [
                                ["計画を変更する<strong class='target-particle'>としても</strong>、事前の説明が必要です。", "即使变更计划，也需要事先说明。"],
                                ["彼が参加できない<strong class='target-particle'>としても</strong>、会議は予定どおり行います。", "即使他不能参加，会议也会按计划举行。"]
                            ]),
                            grammar("N3", "〜たって／〜だって", "即使……也……", "动词た形＋って／い形容词去い＋くたって／名词・な形容词＋だって", "「ても／でも」在口语中的缩约形式，表示即使前项成立，后项也<strong class='usage-key'>不会因此发生改变</strong>。", [
                                ["今さら謝っ<strong class='target-particle'>たって</strong>、彼は許してくれません。", "即使事到如今道歉，他也不会原谅。"],
                                ["反対<strong class='target-particle'>だって</strong>、必要なことは説明します。", "即使反对，该说明的事情也会说明。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "ながら": {
            desc: "连接两个动作或状态，表示<strong class='usage-key'>同时进行</strong>或形成转折",
            usages: [
                {
                    title: "表示同时进行两个动作",
                    definition: "同一主体在进行前项动作的同时进行后项动作，后项通常是<strong class='usage-key'>主要动作</strong>。",
                    connection: "动词第一连用形＋ながら",
                    note: "前后动作原则上由同一主体完成。句子的时态和礼貌程度由后项谓语决定。",
                    examples: [
                        { text: "音楽を聞き<strong class='target-particle'>ながら</strong>、宿題をしています。", translation: "一边听音乐，一边做作业。" },
                        { text: "地図を見<strong class='target-particle'>ながら</strong>、駅まで歩きました。", translation: "一边看地图，一边走到了车站。" }
                    ],
                    related: {
                        lead: "在同时关系中加入明确的转折时，可以使用「〜ながらも」。",
                        items: [
                            grammar("N2", "〜ながらも", "虽然……但是……", "动词第一连用形／形容词／名词＋ながらも", "承认前项状态存在，同时指出后项与通常预期相反。「も」使<strong class='usage-key'>转折关系更加明确</strong>。", [
                                ["小規模<strong class='target-particle'>ながらも</strong>、充実した設備を備えています。", "虽然规模不大，却配备了完善的设备。"],
                                ["不便を感じ<strong class='target-particle'>ながらも</strong>、この町で暮らし続けています。", "虽然感到不便，但仍继续生活在这座城市。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "つつ": {
            desc: "以较正式、书面的方式连接动作，表示<strong class='usage-key'>同时进行、转折或持续变化</strong>",
            usages: [
                {
                    title: "表示同时进行两个动作",
                    definition: "同一主体在进行前项动作的同时进行后项动作。与「ながら」的基本关系相近，但「つつ」<strong class='usage-key'>更常用于书面语或正式说明</strong>。",
                    connection: "动词第一连用形＋つつ",
                    note: "前后动作原则上由同一主体完成，后项是主要动作。日常会话通常优先使用「ながら」。",
                    examples: [
                        { text: "資料を確認し<strong class='target-particle'>つつ</strong>、報告書をまとめました。", translation: "一边确认资料，一边整理了报告。" },
                        { text: "相手の反応を見<strong class='target-particle'>つつ</strong>、説明の順序を変えました。", translation: "一边观察对方的反应，一边调整了说明顺序。" }
                    ],
                    related: {
                        lead: "「つつ」还可进一步表示与认知相反的行动，或表示变化正在持续。",
                        items: [
                            grammar("N2", "〜つつ（も）", "明知……却……", "动词第一连用形＋つつ（も）", "前项表示说话人已经知道或意识到某事，后项却采取与这种认识相反的行动，常带有<strong class='usage-key'>矛盾、反省或遗憾</strong>。", [
                                ["無理だと分かり<strong class='target-particle'>つつも</strong>、最後まで挑戦しました。", "虽然知道很勉强，仍坚持挑战到了最后。"],
                                ["体に悪いと思い<strong class='target-particle'>つつ</strong>、夜更かしを続けています。", "明知对身体不好，却仍一直熬夜。"]
                            ]),
                            grammar("N2", "〜つつある", "正在逐渐……", "动词第一连用形＋つつある", "表示变化或发展过程<strong class='usage-key'>目前仍在持续推进</strong>，多用于新闻、报告和正式说明。", [
                                ["働き方に対する考え方は変わり<strong class='target-particle'>つつあります</strong>。", "人们对于工作方式的看法正在逐渐改变。"],
                                ["被災地の交通網は回復し<strong class='target-particle'>つつあります</strong>。", "灾区的交通网络正在逐步恢复。"]
                            ])
                        ]
                    }
                }
            ]
        },
        "し": {
            desc: "列举多个情况或理由，并暗示<strong class='usage-key'>除此之外还有其他内容</strong>",
            usages: [
                {
                    title: "列举情况或理由",
                    definition: "把前项作为后项判断的一项情况或理由，也可反复使用「し」列出多个同类依据。",
                    connection: "普通形＋し／名词・な形容词＋だし",
                    note: "只出现一次时也常暗示还有其他理由。后项可以是结论，也可以省略，让列举本身承担说明作用。",
                    examples: [
                        { text: "この店は安い<strong class='target-particle'>し</strong>、味もいいです。", translation: "这家店价格便宜，味道也好。" },
                        { text: "今日は雨だ<strong class='target-particle'>し</strong>、家でゆっくりしましょう。", translation: "今天又下雨，就在家好好休息吧。" }
                    ],
                    related: {
                        lead: "从若干理由中提出一项明显的理由，并据此作出决定或建议时，可以使用「〜ことだし」。",
                        items: [
                            grammar("N1", "〜ことだし", "既然……；又因为……", "动词・い形容词普通形＋ことだし／名词＋の・である＋ことだし／な形容词＋な・である＋ことだし", "从多个可能的理由中举出<strong class='usage-key'>一项具有代表性或显而易见的理由</strong>，作为后项采取行动、提出建议或作出决定的依据。后项常出现「〜ましょう」「〜ことにする」「〜たほうがいい」等。", [
                                ["雨もやんだ<strong class='target-particle'>ことだし</strong>、そろそろ出かけましょう。", "既然雨也停了，我们差不多出门吧。"],
                                ["時間も遅い<strong class='target-particle'>ことだし</strong>、今日はここまでにしましょう。", "时间也不早了，今天就到这里吧。"]
                            ])
                        ]
                    }
                }
            ]
        }
    };

    function usageAnchor(particle, index) {
        return `connection-${encodeURIComponent(particle)}-usage-${index + 1}`;
    }

    function grammarAnchor(particle, usageIndex, grammarIndex) {
        return `${usageAnchor(particle, usageIndex)}-grammar-${grammarIndex + 1}`;
    }

    function renderExamples(examples, related = false) {
        if (related) {
            return examples.map((example) => `<div class="particle-related-example-pair"><p class="particle-related-example-jp" lang="ja">${example.text}</p><p class="particle-related-example-cn">${example.translation}</p></div>`).join("");
        }
        return examples.map((example, index) => `<div class="${index ? "particle-example-secondary" : "particle-example-primary"}"><p class="particle-example-label">例句 ${index + 1}</p><p class="particle-example particle-example-japanese" lang="ja">${example.text}</p><p class="particle-example-translation">${example.translation}</p></div>`).join("");
    }

    function renderRelated(related, particle, usageIndex) {
        if (!related || !related.items.length) return "";
        const items = related.items.map((item, grammarIndex) => `
            <article id="${grammarAnchor(particle, usageIndex, grammarIndex)}" class="particle-related-entry" tabindex="-1">
                <header class="particle-related-entry-heading">
                    <span class="particle-related-number">${String(usageIndex + 1).padStart(2, "0")}-${grammarIndex + 1}</span>
                    <div class="particle-related-title-block">
                        <p class="particle-related-meta"><span>${item.level}</span> 相关语法</p>
                        <div class="particle-related-title-line"><h5 lang="ja">${item.title}</h5><span class="particle-related-heading-meaning">${item.meaning}</span></div>
                    </div>
                </header>
                <div class="particle-related-body">
                    <div class="particle-related-meta-block"><span class="particle-related-label">接续</span><p class="particle-related-connection">${item.connection}</p></div>
                    <div class="particle-related-explanation"><span class="particle-related-label">用法说明</span><p>${item.explanation}</p></div>
                    <div class="particle-related-example-block"><span class="particle-related-label">例句</span>${renderExamples(item.examples, true)}</div>
                </div>
            </article>`).join("");
        return `<section class="particle-related"><header class="particle-related-heading"><p>RELATED GRAMMAR</p><h4>从这一用法形成的相关语法</h4><span>${related.lead}</span></header><div class="particle-related-list">${items}</div></section>`;
    }

    function renderUsage(usage, particle, index) {
        return `<section id="${usageAnchor(particle, index)}" class="particle-usage" tabindex="-1">
            <header class="particle-usage-header"><span class="particle-usage-number">${String(index + 1).padStart(2, "0")}</span><div><p class="particle-usage-kicker">用法</p><h3 class="particle-usage-title">${usage.title}</h3></div></header>
            <div class="particle-usage-body"><div class="particle-usage-guide">
                <div class="particle-guide-row"><span class="particle-guide-label">作用</span><p>${usage.definition}</p></div>
                <div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--connection">接续</span><p><strong>${usage.connection}</strong></p></div>
                <div class="particle-guide-row"><span class="particle-guide-label particle-guide-label--judgment">说明</span><p>${usage.note}</p></div>
            </div><div class="particle-examples">${renderExamples(usage.examples)}</div></div>
            ${renderRelated(usage.related, particle, index)}
        </section>`;
    }

    function renderParticle(particle) {
        const data = particleData[particle];
        const detail = document.getElementById("particle-detail");
        if (!data || !detail) return;
        detail.innerHTML = `<header id="connection-${encodeURIComponent(particle)}-top" class="particle-heading" tabindex="-1"><strong lang="ja">${particle}</strong><div><span>CONJUNCTIVE PARTICLE</span><p>${data.desc}</p></div></header><div class="particle-usages">${data.usages.map((usage, index) => renderUsage(usage, particle, index)).join("")}</div>`;
    }

    function renderAdvanced(section) {
        const data = advancedData[section];
        const detail = document.getElementById("particle-detail");
        if (!data || !detail) return;
        let currentGroup = "";
        const items = data.items.map((item, index) => {
            const groupHeading = item.group && item.group !== currentGroup
                ? `<header class="advanced-expression-group-heading"><span>${String(index + 1).padStart(2, "0")}</span><h3>${item.group}</h3></header>`
                : "";
            currentGroup = item.group || currentGroup;
            return `${groupHeading}<article id="connection-${section}-expression-${index + 1}" class="particle-related-entry advanced-expression-entry" tabindex="-1">
                <header class="particle-related-entry-heading">
                    <span class="particle-related-number">A-${String(index + 1).padStart(2, "0")}</span>
                    <div class="particle-related-title-block">
                        <p class="particle-related-meta"><span>${item.level}</span> 进阶表达</p>
                        <div class="particle-related-title-line"><h5 lang="ja">${item.title}</h5><span class="particle-related-heading-meaning">${item.meaning}</span></div>
                    </div>
                </header>
                <div class="particle-related-body">
                    <div class="particle-related-meta-block"><span class="particle-related-label">接续</span><p class="particle-related-connection">${item.connection}</p></div>
                    <div class="particle-related-explanation"><span class="particle-related-label">用法说明</span><p>${item.explanation}</p></div>
                    <div class="particle-related-example-block"><span class="particle-related-label">例句</span>${renderExamples(item.examples, true)}</div>
                </div>
            </article>`;
        }).join("");
        detail.innerHTML = `
            <header id="connection-${section}-top" class="particle-heading advanced-expression-heading" tabindex="-1">
                <strong>进阶表达</strong>
                <div><span>ADVANCED CONNECTIONS · ${data.category}</span><p>${data.desc}</p></div>
            </header>
            <section class="particle-related advanced-expression-section">
                <div class="particle-related-list">${items}</div>
            </section>`;
    }

    function setActivePanel(id) {
        document.querySelectorAll(".case-panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === id));
    }

    function setActiveIndex(section) {
        document.querySelectorAll(".case-index-button[data-section]").forEach((button) => {
            const active = button.dataset.section === section;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
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

    function showConcept(push = true) { setActivePanel("concept-panel"); setActiveIndex("concept"); setActiveTab("concept"); updateHash("concept", push); }
    function showParticle(particle, push = true, targetId = "") {
        if (!particleData[particle]) return;
        renderParticle(particle);
        setActivePanel("particle-detail");
        setActiveIndex(particle);
        setActiveTab("concept");
        updateHash(targetId ? `detail-${particle}-${targetId}` : `particle-${particle}`, push);
        if (targetId) requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }

    function showAdvanced(section, push = true) {
        if (!advancedData[section]) return;
        renderAdvanced(section);
        setActivePanel("particle-detail");
        setActiveIndex(section);
        setActiveTab("concept");
        updateHash(section, push);
    }

    function countRelated(data) {
        return data.usages.reduce((sum, usage) => sum + (usage.related?.items.length || 0), 0);
    }

    function renderMapNavigation(activeParticle) {
        const nav = document.getElementById("grammar-map-particle-nav");
        nav.innerHTML = particleOrder.map((particle) => {
            const relatedCount = countRelated(particleData[particle]);
            return `<button type="button" class="grammar-map-particle-button${particle === activeParticle ? " is-active" : ""}" data-map-select="${particle}"${particle === activeParticle ? " aria-current='true'" : ""}><strong lang="ja">${particle}</strong><span>${relatedCount ? `${relatedCount} 项关联` : "基础用法"}</span></button>`;
        }).join("");
    }

    function renderGrammarMap(particle) {
        const data = particleData[particle];
        const map = document.getElementById("connection-grammar-map");
        renderMapNavigation(particle);
        const branches = data.usages.map((usage, usageIndex) => {
            const related = usage.related?.items || [];
            const nodes = related.map((item, grammarIndex) => `<button type="button" class="grammar-map-grammar-node" data-particle="${particle}" data-target="${grammarAnchor(particle, usageIndex, grammarIndex)}" aria-label="打开${item.title}的讲解"><span class="grammar-map-node-meta">${item.level}</span><strong lang="ja">${item.title}</strong></button>`).join("");
            const mapTitle = usage.title.replace(/^表示/, "");
            return `<div class="grammar-map-branch${nodes ? "" : " is-basic-only"}"><button type="button" class="grammar-map-usage-node" data-particle="${particle}" data-target="${usageAnchor(particle, usageIndex)}" aria-label="打开${usage.title}的讲解"><span>${String(usageIndex + 1).padStart(2, "0")}</span><strong>${mapTitle}</strong></button>${nodes ? `<span class="grammar-map-connector" aria-hidden="true"><i></i></span><div class="grammar-map-related-nodes">${nodes}</div>` : ""}</div>`;
        }).join("");
        map.innerHTML = `<div class="grammar-map-root-column"><button type="button" class="grammar-map-root" data-particle="${particle}" data-target="connection-${encodeURIComponent(particle)}-top"><span>接续助词</span><strong lang="ja">${particle}</strong><em>完整讲解 →</em></button></div><div class="grammar-map-branches">${branches}</div>`;
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
        else if (advancedData[route]) showAdvanced(route, false);
        else if (route.startsWith("grammar-map-")) showMap(route.slice(12), false);
        else if (route.startsWith("particle-")) showParticle(route.slice(9), false);
        else if (route.startsWith("detail-")) {
            const remainder = route.slice(7);
            const separator = remainder.indexOf("-connection-");
            if (separator > 0) showParticle(remainder.slice(0, separator), false, remainder.slice(separator + 1)); else showConcept(false);
        } else showConcept(false);
    }

    function setupIndexToggle() {
        const button = document.getElementById("connection-index-toggle");
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

        document.querySelectorAll(".case-index-button[data-section]").forEach((button) => button.addEventListener("click", () => {
            const section = button.dataset.section;
            if (section === "concept") showConcept();
            else if (advancedData[section]) showAdvanced(section);
            else showParticle(section);
        }));

        document.querySelectorAll(".case-tab").forEach((tab) => tab.addEventListener("click", () => tab.dataset.view === "atlas" ? showMap() : showConcept()));

        document.getElementById("grammar-map-particle-nav").addEventListener("click", (event) => {
            const button = event.target.closest("[data-map-select]");
            if (button) showMap(button.dataset.mapSelect);
        });

        document.getElementById("connection-grammar-map").addEventListener("click", (event) => {
            const button = event.target.closest("[data-target]");
            if (button) showParticle(button.dataset.particle, true, button.dataset.target);
        });

        window.addEventListener("popstate", openRoute);
        openRoute();
    });
})();
