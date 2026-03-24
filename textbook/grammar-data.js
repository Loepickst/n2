// ================= 数据库文件 =================
// 请将 search.html 中的数据对象剪切并粘贴到这里。
// 粘贴后，这些变量将成为全局变量，可被 search.html 访问。

// 建议迁移以下变量：
// 1. extraExampleData
// 2. comparisonData
// 3. tryN1Data
// 4. tryN2Data
// 5. grammarData (合并逻辑)

/* 示例结构：
const extraExampleData = { ... };

const comparisonData = { ... };

const tryN1Data = [ ... ];

const tryN2Data = [ ... ];

// 合并所有数据
const grammarData = [
    ...tryN1Data,
    ...tryN2Data
];
*/
        // 语法对比的专属解说数据 (key为两个ID从小到大用短横线连接)
        const comparisonData = {
            "32-33": "<b>「～が早いか」</b>强调的是前后动作几乎<b>同时发生</b>，体现一种<b>瞬间的反应速度</b>，通常不用于自然现象。<br><b>「～そばから」</b>则侧重于<b>反复性</b>，表示“刚做完A，马上就发生B（把A抵消了）”，常含有一种<b>“怎么做也没用”的消极或徒劳感</b>。<br><br>例如：<br>・发令枪一响就跑出去 → 用<b>「が早いか」</b>（瞬间动作）<br>・刚打扫完孩子就弄乱了 → 用<b>「そばから」</b>（反复发生的徒劳）",
            "46-57": "<b>「～といい～といい」</b>列举两个例子来评价<b>整体</b>。重点在于<b>评价</b>（如“颜色也好形状也好，都很完美”）。<br><b>「～といわず～といわず」</b>列举两个代表性的部分，强调<b>没有区分，全部如此</b>。重点在于<b>全面性</b>和<b>状态描述</b>（如“不管是手还是脚，到处都是泥”），常用于<b>负面</b>或令人惊讶的场景。",
            "8-65": "<b>「～といえども」</b>是<b>非常正式的书面语</b>，语气生硬。常用于表示<b>“即使是处于某种（高/特殊）立场的人/物，也不能例外”</b>，后项多接续<b>义务、禁止、命令</b>等表达（如“必须遵守规则”）。<br><b>「～とはいえ」</b>虽然也是书面语，但比前者稍软。它侧重于<b>转折</b>，表示<b>“虽然承认前项的事实，但实际情况并不像预想的那样（还有不足/问题）”</b>。",
            "79-88": "<b>「～たところで」</b>接在<b>动词た形</b>之后，表示<b>“即使做了某事，也无济于事”</b>，后项多为消极结果（如“来不及了”、“没用”）。强调动作的徒劳性。<br><b>「～にしたところで」</b>主要接在<b>名词（人物）</b>之后，表示<b>“即使站在该人物的立场/角度来看，情况也是一样的（通常是消极的、无奈的）”</b>。它强调的是<b>“立场/身份”</b>的无例外性。",
            "150-156": "<b>「～わけではない」</b>侧重于<b>事实的否定</b>或<b>纠正误解</b>。常用于辩解“虽然看起来是这样，但实际上并不是（完全）那样”。<br><b>「～というものではない」</b>侧重于<b>观点的否定</b>。常用于反驳某种<b>普遍被认为正确的定论或价值观</b>，表示“不能一概而论”、“并非绝对如此”。",
            "172-226": "<b>「～にしては」</b><b>直接</b>接在<b>名词</b>之后（名詞＋にしては），表示“虽然是…（特定身份/事实），但结果却出乎意料”。<br><b>「～わりに（は）」</b>接在<b>名词＋の</b>之后（名詞＋の＋わりに），表示“相对于…（程度/基准）来说，结果不相符”。<br>两者意思非常接近，但<b>接续不同</b>是最大的区别。<br>例如：<br>・子供<b>にしては</b>よく知っている。（基于他是孩子这一事实）<br>・値段<b>のわりに</b>おいしい。（相对于价格这一程度）"
        };

        // #region Try! N1 Data
        const tryN1Data = [
            {
    "id": 1,
    "title": "～を皮切りに",
    "romaji": "wokawakirini",
    "kana": "をかわきりに",
    "tags": "起点 契机 扩展",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "以…为开端 / 从…开始",
    "connection": "名词 + を皮切りに（して） / を皮切りとして",
    "desc": "表示<b>以某件事为起点</b>，随后<b>类似的事情接连发生</b>或<b>范围不断扩大</b>。多用于描述事情<b>积极的发展</b>。",
    "examples": [
      {
        "jp": "<b>この<ruby>展<rt>てん</rt></ruby><ruby>覧<rt>らん</rt></ruby><ruby>会<rt>かい</rt></ruby>は、<ruby>東<rt>とう</rt></ruby><ruby>京<rt>きょう</rt></ruby><span style='color:#d64045'>を<ruby>皮<rt>かわ</rt></ruby><ruby>切<rt>き</rt></ruby>りに</span><ruby>全<rt>ぜん</rt></ruby><ruby>国<rt>こく</rt></ruby><ruby>各<rt>かく</rt></ruby><ruby>地<rt>ち</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>われる。</b>",
        "cn": "这次展览会将以东京为第一站，随后在全国各地举办。"
      }
    ],
    "related": []
  },
  {
    "id": 2,
    "title": "～とあって",
    "romaji": "toatte",
    "kana": "とあって",
    "tags": "原因 理由 状况",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "因为… / 由于处于…状况",
    "connection": "名词 / 动词普通形 / い形 / な形 + とあって",
    "desc": "表示由于<b>处于某种特殊的状况</b>，自然会导致某种结果。常用于<b>新闻报道</b>或描述<b>客观情况</b>。",
    "examples": [
      {
        "jp": "<b><ruby>夏<rt>なつ</rt></ruby><ruby>休<rt>やす</rt></ruby>み<span style='color:#d64045'>とあって</span>、プールは<ruby>朝<rt>あさ</rt></ruby>から<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちでいっぱいだ。</b>",
        "cn": "因为是暑假，游泳池从早上开始就挤满了孩子。"
      }
    ],
    "related": []
  },
  {
    "id": 3,
    "title": "～ならでは",
    "romaji": "naradewa",
    "kana": "ならでは",
    "tags": "评价 独特 肯定",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "只有…才有的 / …特有的",
    "connection": "名词 + ならでは",
    "desc": "表示“<b>只有在该处/该人身上才能看到</b>，别处没有”的含义。通常带有<b>高度评价和赞赏</b>的语气。既可以用于句末结束句子，也可以用「<b>～ならではの</b>」的形式修饰后面的名词。",
    "examples": [
      {
        "jp": "<b>この<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしい<ruby>景<rt>け</rt></ruby><ruby>色<rt>しき</rt></ruby>は、<ruby>北<rt>ほっ</rt></ruby><ruby>海<rt>かい</rt></ruby><ruby>道<rt>どう</rt></ruby><span style='color:#d64045'>ならでは</span>だ。</b>",
        "cn": "这绝美的景色，是只有北海道才有的。"
      },
      {
        "jp": "<b><ruby>京<rt>きょう</rt></ruby><ruby>都<rt>と</rt></ruby><span style='color:#d64045'>ならではの</span><ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いた<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>好<rt>す</rt></ruby>きだ。</b>",
        "cn": "我喜欢京都特有的那种沉静氛围。"
      }
    ],
    "related": []
},
  {
    "id": 4,
    "title": "～にもまして",
    "romaji": "nimomashite",
    "kana": "にもまして",
    "tags": "比较 程度 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "比…更… / 超过…",
    "connection": "名词 / 疑问词 + にもまして",
    "desc": "表示通常情况（前项）已经如此，但<b>现在的状况（后项）程度更甚</b>。常搭配「<b>以前にもまして</b>」（比以前更…）使用。",
    "examples": [
      {
        "jp": "<b><ruby>昨<rt>き</rt></ruby><ruby>日<rt>のう</rt></ruby>は<ruby>猛<rt>もう</rt></ruby><ruby>暑<rt>しょ</rt></ruby><ruby>日<rt>び</rt></ruby>だったが、<ruby>今<rt>き</rt></ruby><ruby>日<rt>ょう</rt></ruby>はそれ<span style='color:#d64045'>にもまして</span><ruby>暑<rt>あつ</rt></ruby>い。</b>",
        "cn": "昨天是酷暑日，但今天比昨天还要热。"
      }
    ],
    "related": []
  },
  {
    "id": 5,
    "title": "～に至るまで",
    "romaji": "niitarumade",
    "kana": "にいたるまで",
    "tags": "范围 极端 甚至",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "甚至… / 连…都",
    "connection": "名词 + に至るまで",
    "desc": "表示<b>范围非常广</b>，甚至包括了一些<b>意想不到的、微小的或极端的例子</b>。常强调“一切”、“全部”。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>はスーツから<ruby>靴<rt>くつ</rt></ruby><span style='color:#d64045'>に<ruby>至<rt>いた</rt></ruby>るまで</span>、ブランド<ruby>品<rt>ひん</rt></ruby>で<ruby>固<rt>かた</rt></ruby>めている。</b>",
        "cn": "他从西装到鞋子，全身都是名牌。"
      }
    ],
    "related": [6]
  },
  {
    "id": 6,
    "title": "～からして",
    "romaji": "karashite",
    "kana": "からして",
    "tags": "判断根据 举例 极端",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第1課",
    "meaning": "单从…来看 / 就连…",
    "connection": "名词 + からして",
    "desc": "举出一个<b>极端的例子</b>，暗示其他方面也是如此（通常是<b>消极的评价</b>）；或者仅根据这一个点就做出<b>整体判断</b>。",
    "examples": [
      {
        "jp": "<b>さすがプロの<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>は<ruby>走<rt>はし</rt></ruby>り<ruby>方<rt>かた</rt></ruby><span style='color:#d64045'>からして</span><ruby>違<rt>ちが</rt></ruby>う。</b>",
        "cn": "不愧是职业选手，单从跑步姿势来看就不一样。"
      }
    ],
    "related": [5]
  },
  {
    "id": 7,
    "title": "～に至っては",
    "romaji": "niitattewa",
    "kana": "にいたっては",
    "tags": "话题 极端 举例",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "至于… / 提到…（极端例子）",
    "connection": "名词 + に至っては",
    "desc": "用于列举出一个<b>极端的例子</b>，并以此强调情况的<b>严重性或特殊性</b>。后项通常接续令人感到惊讶或程度过分的描述。",
    "examples": [
      {
        "jp": "<b><ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>の<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>例<rt>れい</rt></ruby><ruby>年<rt>ねん</rt></ruby>になく<ruby>寒<rt>さむ</rt></ruby>いが、<ruby>北<rt>ほっ</rt></ruby><ruby>海<rt>かい</rt></ruby><ruby>道<rt>どう</rt></ruby>の<ruby>一<rt>いち</rt></ruby><ruby>部<rt>ぶ</rt></ruby><span style='color:#d64045'>に<ruby>至<rt>いた</rt></ruby>っては</span>、マイナス30<ruby>度<rt>ど</rt></ruby>を<ruby>下<rt>した</rt></ruby><ruby>回<rt>まわ</rt></ruby>る<ruby>日<rt>ひ</rt></ruby>もある。</b>",
        "cn": "今年的冬天异常寒冷，至于北海道的部分地区，甚至有的日子气温降到了零下30度以下。"
      }
    ],
    "related": []
  },
  {
    "id": 8,
    "title": "～といえども",
    "romaji": "toiedomo",
    "kana": "といえども",
    "tags": "逆接 假设 让步 书面语",
    "compareWith": [65],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "虽说… / 即使是…",
    "connection": "名词 / 动词普通形 + といえども",
    "desc": "表示<b>即使是…也不例外</b>，或者<b>虽然…但是…</b>。常用于说明“某人/某事虽然有某种立场或特点，但也不能……”的语境。",
    "examples": [
      {
        "jp": "<b><ruby>未<rt>み</rt></ruby><ruby>成<rt>せい</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>者<rt>しゃ</rt></ruby><span style='color:#d64045'>といえども</span>、<ruby>公<rt>こう</rt></ruby><ruby>共<rt>きょう</rt></ruby>の<ruby>場<rt>ば</rt></ruby>ではルールを<ruby>守<rt>まも</rt></ruby>らなければならない。</b>",
        "cn": "虽说是未成年人，在公共场合也必须遵守规则。"
      }
    ],
    "related": []
  },
  {
    "id": 9,
    "title": "～を余儀なくされる",
    "romaji": "woyoginakusareru",
    "kana": "をよぎなくされる",
    "tags": "被迫 强制 状况",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "被迫… / 不得不…",
    "connection": "名词 + を余儀なくされる",
    "desc": "表示<b>由于某种客观原因</b>（往往是令人不快的），<b>被迫陷入</b>某种状况或进行某种行动。主语通常是<b>人</b>。",
    "examples": [
      {
        "jp": "<b><ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>のため、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>は<ruby>中<rt>ちゅう</rt></ruby><ruby>止<rt>し</rt></ruby><span style='color:#d64045'>を<ruby>余<rt>よ</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>なくされた</span>。</b>",
        "cn": "由于大雨，比赛被迫中止。"
      }
    ],
    "related": []
  },
  {
    "id": 10,
    "title": "～を余儀なくさせる",
    "romaji": "woyoginakusaseru",
    "kana": "をよぎなくさせる",
    "tags": "被迫 使役 强制",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "迫使… / 使…不得不",
    "connection": "名词 + を余儀なくさせる",
    "desc": "表示<b>某种状况或事情</b>迫使他人采取某种行动。主语通常是<b>无生命的事物</b>（如自然灾害、事故等）。",
    "examples": [
      {
        "jp": "<b><ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>が、<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>の<ruby>変<rt>へん</rt></ruby><ruby>更<rt>こう</rt></ruby><span style='color:#d64045'>を<ruby>余<rt>よ</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>なくさせた</span>。</b>",
        "cn": "资金不足迫使计划不得不进行变更。"
      }
    ],
    "related": []
  },
  {
    "id": 11,
    "title": "～たりとも",
    "romaji": "taritomo",
    "kana": "たりとも",
    "tags": "最小单位 全盘否定 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "哪怕是一…也不…",
    "connection": "1 + 助数词 + たりとも",
    "desc": "接在表示最小单位的数量词后面，表示<b>即使是极小的数量也不能忽视或允许</b>。后面常接否定形式。",
    "examples": [
      {
        "jp": "<b><ruby>受<rt>じゅ</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>にとって、1<ruby>分<rt>ぷん</rt></ruby><span style='color:#d64045'>たりとも</span><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>無<rt>む</rt></ruby><ruby>駄<rt>だ</rt></ruby>にはできない。</b>",
        "cn": "对于作为考生的我来说，哪怕是一分钟的时间也不能浪费。"
      }
    ],
    "related": []
  },
  {
    "id": 12,
    "title": "～きらいがあります",
    "romaji": "kiraigaarimasu",
    "kana": "きらいがあります",
    "tags": "倾向 负面 担忧",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "有…之嫌 / 有…倾向",
    "connection": "名词 + の / 动词辞书形 / ない形 + きらいがある",
    "desc": "表示<b>具有某种不好的倾向</b>，或者<b>容易招致某种消极结果</b>。通常用于由衷的担忧或批评，不用于自然现象。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>物<rt>もの</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>悲<rt>ひ</rt></ruby><ruby>観<rt>かん</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>える<span style='color:#d64045'>きらいがある</span>。</b>",
        "cn": "他有点悲观地看待事物的倾向。"
      }
    ],
    "related": []
  },
  {
    "id": 13,
    "title": "～次第です",
    "romaji": "shidaidesu",
    "kana": "しだいです",
    "tags": "理由 经过 结果 商务",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "是因为… / 全凭…",
    "connection": "名词 / 动词普通形 + 次第だ",
    "desc": "用于说明<b>事情的经过、缘由或结果</b>。常用于<b>正式场合</b>的解释或报告。",
    "examples": [
      {
        "jp": "<b><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>のような<ruby>事<rt>じ</rt></ruby><ruby>情<rt>じょう</rt></ruby>で、<ruby>退<rt>たい</rt></ruby><ruby>職<rt>しょく</rt></ruby>した<span style='color:#d64045'><ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>です</span>。</b>",
        "cn": "因为上述情况，所以我辞职了。"
      }
    ],
    "related": []
  },
  {
    "id": 14,
    "title": "～をもって",
    "romaji": "womotte",
    "kana": "をもって",
    "tags": "手段 期限 结束 正式",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課 / 第6課",
    "meaning": "以… / 用… / 于… / 截至…",
    "connection": "名词 + をもって",
    "desc": "主要有两种用法，均属于<b>正式的书面语</b>：<br>1. 表示<b>手段、方法</b>（以…、用…）。相当于「で」。<br>2. 表示<b>时间节点或界限</b>（于…、截至…）。通常用于宣告某一事项的<b>结束</b>或<b>截止</b>。",
    "examples": [
      {
        "jp": "<b><ruby>選<rt>せん</rt></ruby><ruby>考<rt>こう</rt></ruby><ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>は、<ruby>書<rt>しょ</rt></ruby><ruby>面<rt>めん</rt></ruby><span style='color:#d64045'>をもって</span>ご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>します。</b>",
        "cn": "【手段】选拔结果将以书面形式进行通知。"
      },
      {
        "jp": "<b><ruby>本<rt>ほん</rt></ruby><ruby>日<rt>じつ</rt></ruby><span style='color:#d64045'>をもって</span>、<ruby>当<rt>とう</rt></ruby><ruby>店<rt>てん</rt></ruby>は<ruby>閉<rt>へい</rt></ruby><ruby>店<rt>てん</rt></ruby>いたします。</b>",
        "cn": "【期限】本店将于今日（营业结束后）关门停业。"
      }
    ],
    "related": [107]
},
  {
    "id": 15,
    "title": "～あっての",
    "romaji": "atteno",
    "kana": "あっての",
    "tags": "条件 恩惠 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "正因为有…才有的…",
    "connection": "名词 + あっての + 名词",
    "desc": "表示<b>前项是后项成立的必要条件</b>。强调“如果没有前项，后项就不可能存在”。",
    "examples": [
      {
        "jp": "<b>どんなに<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>でも、ファン<span style='color:#d64045'>あっての</span>プロスポーツ<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>だ。</b>",
        "cn": "无论多有名，职业运动员都是靠粉丝才存在的。"
      }
    ],
    "related": []
  },
  {
    "id": 16,
    "title": "～てやみない",
    "romaji": "teyaminai",
    "kana": "てやみない",
    "tags": "情感 愿望 强烈 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第2課",
    "meaning": "…不已 / 衷心…",
    "connection": "动词て形 + やみない",
    "desc": "表示<b>某种情感非常强烈，一直持续</b>，不会停止。常用于<b>祈祷、祝愿、敬爱</b>等比较拘谨的场合。",
    "examples": [
      {
        "jp": "<b><ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>することを<ruby>願<rt>ねが</rt></ruby>っ<span style='color:#d64045'>てやみない</span>。</b>",
        "cn": "衷心祝愿朋友的病能康复。"
      }
    ],
    "related": []
  },
  {
    "id": 17,
    "title": "～まみれ",
    "romaji": "mamire",
    "kana": "まみれ",
    "tags": "附着 满是 负面 抽象",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "满身… / 沾满… / 全是…",
    "connection": "名词 + まみれ",
    "desc": "表示<b>表面沾满了令人不快的东西</b>（如泥、血、汗），或者<b>完全被负面事物所包围</b>（如借金、嘘、欲）。无论是具体还是抽象，都带有<b>强烈的负面色彩</b>。",
    "examples": [
      {
        "jp": "<b><ruby>泥<rt>どろ</rt></ruby><span style='color:#d64045'>まみれ</span>になってサッカーボールを<ruby>追<rt>お</rt></ruby>いかけた。</b>",
        "cn": "搞得满身是泥地追着足球跑。"
      },
      {
        "jp": "<b><ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby>に<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>し、<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby><span style='color:#d64045'>まみれ</span>になってしまった。</b>",
        "cn": "公司经营失败，变得负债累累。"
      }
    ],
    "related": []
},
  {
    "id": 18,
    "title": "～をよそに",
    "romaji": "woyosoni",
    "kana": "をよそに",
    "tags": "无视 忽略 态度 状况",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "无视… / 不顾… / 与…无关",
    "connection": "名词 + をよそに",
    "desc": "表示<b>对自己周围发生的事情、他人的批评或期待等漠不关心</b>，仍旧按照自己的方式行事。除了表示“无视他人的情感”，也常用于表示“<b>不受周围状况（如不景气、骚动等）的影响</b>”。",
    "examples": [
      {
        "jp": "<b><ruby>親<rt>おや</rt></ruby>の<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby><span style='color:#d64045'>をよそに</span>、<ruby>彼<rt>かれ</rt></ruby>は<ruby>遊<rt>あそ</rt></ruby>んでばかりいる。</b>",
        "cn": "他不顾父母的担心，整天只知道玩。"
      },
      {
        "jp": "<b><ruby>不<rt>ふ</rt></ruby><ruby>況<rt>きょう</rt></ruby><span style='color:#d64045'>をよそに</span>、この<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>は<ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きが<ruby>好<rt>こう</rt></ruby><ruby>調<rt>ちょう</rt></ruby>だ。</b>",
        "cn": "不受经济不景气的影响，这款新产品销路很好。"
      }
    ],
    "related": []
},
  {
    "id": 19,
    "title": "～なりに / ～なりの",
    "romaji": "narini/narino",
    "kana": "なりに / なりの",
    "tags": "相应 独特 尽力",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "以…的方式 / 与…相适应的",
    "connection": "名词 / 动词普通形 / い形 / な形 + なりに / なりの + 名词",
    "desc": "表示<b>“虽然不完美，但尽力达到了某种程度”</b>或<b>“与该立场相符”</b>。修饰动词时用「<b>なりに</b>」，修饰名词时用「<b>なりの</b>」。",
    "examples": [
      {
        "jp": "<b><ruby>私<rt>わたし</rt></ruby><span style='color:#d64045'>なりに</span><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>したが、<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>はダメだった。</b>",
        "cn": "虽然我以自己的方式努力了，但结果还是不行。"
      },
      {
         "jp": "<b><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>には<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby><span style='color:#d64045'>なりの</span><ruby>考<rt>かんが</rt></ruby>えがある。</b>",
         "cn": "孩子也有孩子自己的想法。"
      }
    ],
    "related": [22, 30]
  },
  {
    "id": 20,
    "title": "～ないでもない",
    "romaji": "naidemonai",
    "kana": "ないでもない",
    "tags": "消极肯定 委婉 借口",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "并非不… / 未必不…",
    "connection": "动词ない形 + でもない",
    "desc": "表示<b>消极的肯定</b>。虽然不是很积极，但<b>在某种条件下是有可能的</b>，或者是“如果不那样做的话我也不是不能做”的纠结心情。",
    "examples": [
      {
        "jp": "<b><ruby>条<rt>じょう</rt></ruby><ruby>件<rt>けん</rt></ruby>によっては、<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>け<span style='color:#d64045'>ないでもない</span>。</b>",
        "cn": "根据条件，我也并非不能接受。"
      }
    ],
    "related": []
  },
  {
    "id": 21,
    "title": "～始末だ",
    "romaji": "shimatsuda",
    "kana": "しまつだ",
    "tags": "结局 负面 恶化",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "最终导致… / 落得…下场",
    "connection": "动词辞书形 / この・その・あの + 始末だ",
    "desc": "表示经过一系列不好的情况后，<b>最终落得一个糟糕的结局</b>。通常带有<b>感叹、无奈或批评</b>的语气。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し、ついには<ruby>家<rt>いえ</rt></ruby>出<ruby>を<rt></rt></ruby>する<span style='color:#d64045'><ruby>始<rt>し</rt></ruby><ruby>末<rt>まつ</rt></ruby>だ</span>。</b>",
        "cn": "他反复借钱，最终落得离家出走的下场。"
      }
    ],
    "related": []
  },
  {
    "id": 22,
    "title": "～なり～なり",
    "romaji": "narinari",
    "kana": "なりなり",
    "tags": "列举 建议 任意",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "…也好…也好 / 比如…",
    "connection": "名词（+助词） / 动词辞书形 + なり",
    "desc": "列举两个例子，表示<b>“什么都行，总之做点什么”</b>的含义。通常用于<b>建议、希望或命令</b>。不用于描述已经发生的事情。",
    "examples": [
      {
        "jp": "<b><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby><span style='color:#d64045'>なり</span>メール<span style='color:#d64045'>なり</span>、<ruby>何<rt>なに</rt></ruby>か<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>をください。</b>",
        "cn": "电话也好邮件也好，请给我联络。"
      }
    ],
    "related": [19, 30]
  },
  {
    "id": 23,
    "title": "～ずくめ",
    "romaji": "zukume",
    "kana": "ずくめ",
    "tags": "充满 全是 颜色 喜庆",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "全是… / 净是…",
    "connection": "名词 + ずくめ",
    "desc": "表示<b>“充满了…”</b>或<b>“全都是…”</b>。常用于<b>好事</b>（如「幸せずくめ」）或<b>颜色/装束</b>（如「黒ずくめ」）。和「まみれ」不同，不用于脏东西。",
    "examples": [
      {
        "jp": "<b><ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>は<ruby>我<rt>わ</rt></ruby>が<ruby>家<rt>や</rt></ruby>にとって、いいこと<span style='color:#d64045'>ずくめ</span>の<ruby>一<rt>いち</rt></ruby><ruby>年<rt>ねん</rt></ruby>だった。</b>",
        "cn": "今年对我家来说，是充满了好事的一年。"
      }
    ],
    "related": []
  },
  {
    "id": 24,
    "title": "～にして",
    "romaji": "nishite",
    "kana": "にして",
    "tags": "身份 并存 程度 阶段 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課 / 第8課",
    "meaning": "既是…又是… / 在…（阶段/时间） / 连…",
    "connection": "名词 + にして",
    "desc": "主要有两种用法，均属于<b>书面语</b>：<br>1. 表示<b>同时具备两种身份或性质</b>。相当于「…であり、かつ…」（既是…又是…）。<br>2. 接在表示时间、年龄、数量的词后，表示<b>达到某种特殊的阶段或程度</b>。常含有“到了…这么高的程度才……”、“连…（这样的专家）都……”或“在（短短）…内就……”的语气。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>な<ruby>科<rt>か</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby><span style='color:#d64045'>にして</span>、<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>な<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby><ruby>家<rt>か</rt></ruby>でもある。</b>",
        "cn": "【身份】他既是优秀的科学家，也是有名的小说家。"
      },
      {
        "jp": "<b>この<ruby>歳<rt>とし</rt></ruby><span style='color:#d64045'>にして</span>、<ruby>初<rt>はじ</rt></ruby>めて<ruby>人<rt>ひと</rt></ruby>を<ruby>愛<rt>あい</rt></ruby>する<ruby>喜<rt>よろこ</rt></ruby>びを<ruby>知<rt>し</rt></ruby>った。</b>",
        "cn": "【阶段】到了这把年纪，才第一次体会到爱人的喜悦。"
      }
    ],
    "related": []
},
  {
    "id": 25,
    "title": "～はおろか",
    "romaji": "waoroka",
    "kana": "はおろか",
    "tags": "程度 对比 甚至",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "别说…连… / …不用说…",
    "connection": "名词 + はおろか",
    "desc": "表示<b>前项的程度是理所当然的，不用多说</b>，但连<b>程度更低的后项</b>也做不到或情况不符。常搭配「～も」「～さえ」「～すら」。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は、<ruby>走<rt>はし</rt></ruby>ること<span style='color:#d64045'>はおろか</span>、<ruby>歩<rt>ある</rt></ruby>くことすらできない。</b>",
        "cn": "别说跑了，他连路都走不了。"
      }
    ],
    "related": [26]
  },
  {
    "id": 26,
    "title": "～すら",
    "romaji": "sura",
    "kana": "すら",
    "tags": "极端 甚至 举例",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "甚至… / 连…",
    "connection": "名词（+助词） + すら",
    "desc": "举出一个<b>极端的例子</b>，暗示<b>其他普通的情况更是如此</b>。含义与「さえ」相近，但「すら」语气稍硬。",
    "examples": [
      {
        "jp": "<b><ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をする<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby><span style='color:#d64045'>すら</span>ない。</b>",
        "cn": "忙得连吃饭的时间都没有。"
      }
    ],
    "related": [25]
  },
  {
    "id": 27,
    "title": "～かたがた",
    "romaji": "katagata",
    "kana": "かたがた",
    "tags": "顺便 目的 兼做 正式",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "顺便… / …的同时",
    "connection": "名词 + かたがた",
    "desc": "表示在进行某个主要动作（如问候、探望、散步）的同时，<b>兼带另一个目的</b>。属于<b>非常正式</b>的表达，常用于信函或和长辈上司的交流。",
    "examples": [
      {
        "jp": "<b><ruby>帰<rt>き</rt></ruby><ruby>国<rt>こく</rt></ruby>のご<ruby>挨<rt>あい</rt></ruby><ruby>拶<rt>さつ</rt></ruby><span style='color:#d64045'>かたがた</span>、<ruby>恩<rt>おん</rt></ruby><ruby>師<rt>し</rt></ruby>のお<ruby>宅<rt>たく</rt></ruby>を<ruby>訪<rt>ほう</rt></ruby><ruby>問<rt>もん</rt></ruby>した。</b>",
        "cn": "为了顺便报告回国一事，我拜访了恩师的家。"
      }
    ],
    "related": []
  },
  {
    "id": 28,
    "title": "～がてら",
    "romaji": "gatera",
    "kana": "がてら",
    "tags": "顺便 机会 移动",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "顺便… / 借…的机会",
    "connection": "名词 / 动词ます形（去ます） + がてら",
    "desc": "表示<b>利用做某事（通常是移动）的机会</b>，顺便做另一件事。比「かたがた」<b>更口语化、更日常</b>。",
    "examples": [
      {
        "jp": "<b><ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby><span style='color:#d64045'>がてら</span>、<ruby>新<rt>あたら</rt></ruby>しくできたパン<ruby>屋<rt>や</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってみよう。</b>",
        "cn": "散步顺便去那家新开的面包店看看吧。"
      }
    ],
    "related": []
  },
  {
    "id": 29,
    "title": "～とは",
    "romaji": "towa",
    "kana": "とは",
    "tags": "惊讶 感叹 意外",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "竟然… / 没想到…",
    "connection": "名词 / 动词普通形 + とは",
    "desc": "对某种事实表示<b>强烈的惊讶、震惊或感叹</b>。强调“完全出乎意料”。句末常省略「驚きだ」等词。",
    "examples": [
      {
        "jp": "<b>あの<ruby>温<rt>おん</rt></ruby><ruby>厚<rt>こう</rt></ruby>な<ruby>彼<rt>かれ</rt></ruby>がそんなひどいことを<ruby>言<rt>い</rt></ruby>う<span style='color:#d64045'>とは</span>、<ruby>信<rt>しん</rt></ruby>じられない。</b>",
        "cn": "那个温厚的他竟然会说出这种过分的话，真不敢相信。"
      }
    ],
    "related": []
  },
  {
    "id": 30,
    "title": "～なり",
    "romaji": "nari",
    "kana": "なり",
    "tags": "时间 紧接着 意外",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "一…就…",
    "connection": "动词辞书形 + なり",
    "desc": "表示前一个动作刚结束，<b>紧接着</b>发生了后一个动作。通常带有<b>意外感</b>，后项多为消极内容。主语通常是<b>第三人称</b>。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってくる<span style='color:#d64045'>なり</span>、バッグを<ruby>投<rt>な</rt></ruby>げ<ruby>捨<rt>す</rt></ruby>ててベッドに<ruby>倒<rt>たお</rt></ruby>れ<ruby>込<rt>こ</rt></ruby>んだ。</b>",
        "cn": "他一进房间，就把包扔掉倒在了床上。"
      }
    ],
    "related": [ 19, 22]
  },
  {
    "id": 31,
    "title": "～わ～わ",
    "romaji": "wawa",
    "kana": "わわ",
    "tags": "列举 混乱 夸张",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "…啦…啦（列举原因/状况）",
    "connection": "动词 / い形 / 名词 + わ + … + わ",
    "desc": "列举多个事物或状况（通常是<b>令人困扰或高兴</b>的事情），以强调<b>程度之深</b>或<b>情况之混乱</b>。带有强烈的情感色彩。",
    "examples": [
      {
        "jp": "<b><ruby>雨<rt>あめ</rt></ruby>には<ruby>降<rt>ふ</rt></ruby>られる<span style='color:#d64045'>わ</span>、バスは<ruby>遅<rt>おく</rt></ruby>れる<span style='color:#d64045'>わ</span>で、<ruby>散<rt>さん</rt></ruby><ruby>々<rt>ざん</rt></ruby>な<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>だった。</b>",
        "cn": "又被雨淋，巴士又晚点，真是糟糕的一天。"
      }
    ],
    "related": []
  },
  {
    "id": 32,
    "title": "～が早いか",
    "romaji": "gahayaika",
    "kana": "がはやいか",
    "tags": "时间 瞬间 紧接着",
    "compareWith": [33],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "刚一…就…",
    "connection": "动词辞书形 / た形 + が早いか",
    "desc": "表示前项动作发生的<b>瞬间</b>，后项动作紧接着发生。强调<b>速度之快</b>。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>合<rt>あい</rt></ruby><ruby>図<rt>ず</rt></ruby>のピストルが<ruby>鳴<rt>な</rt></ruby>る<span style='color:#d64045'>が<ruby>早<rt>はや</rt></ruby>いか</span>、<ruby>猛<rt>もう</rt></ruby>スピードで<ruby>駆<rt>か</rt></ruby>け<ruby>出<rt>だ</rt></ruby>した。</b>",
        "cn": "发令枪刚一响，他就全速冲了出去。"
      }
    ],
    "related": [99]
  },
  {
    "id": 33,
    "title": "～そばから",
    "romaji": "sobakara",
    "kana": "そばから",
    "tags": "时间 反复 无效",
    "compareWith": [32],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "刚…就…（反复）",
    "connection": "动词辞书形 / た形 + そばから",
    "desc": "表示<b>反复</b>出现的情况：刚做完某事，立刻又变成原来的样子。通常用于<b>消极</b>的语境，表示<b>徒劳</b>。",
    "examples": [
      {
        "jp": "<b><ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>ける<span style='color:#d64045'>そばから</span>、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>がおもちゃを<ruby>出<rt>だ</rt></ruby>してくる。</b>",
        "cn": "刚收拾好，孩子就把玩具拿出来了。"
      }
    ],
    "related": []
  },
  {
    "id": 34,
    "title": "～ずにはおかない",
    "romaji": "zuniwaokanai",
    "kana": "ずにはおかない",
    "tags": "决心 必然 强制 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "一定… / 必然会… / 不…誓不罢休",
    "connection": "动词ない形 + ずにはおかない",
    "desc": "主要有两种用法：<br>1. 表示<b>强烈的意志</b>（主语通常是人）：表示“<b>不做某事誓不罢休</b>”、“<b>一定要…</b>”的决心。<br>2. 表示<b>必然的结果</b>（主语通常是事物）：表示作用力很强，“<b>必然会引起某种情感或反应</b>”、“<b>让人不得不…</b>”。",
    "examples": [
      {
        "jp": "<b>【<ruby>意<rt>い</rt></ruby><ruby>志<rt>し</rt></ruby>】そんなひどいことをする<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ず<ruby>捕<rt>つか</rt></ruby>まえ<span style='color:#d64045'>ずにはおかない</span>。</b>",
        "cn": "做这种过分事情的犯人，我一定要把他抓起来（不抓到誓不罢休）。"
      },
      {
        "jp": "<b>【<ruby>必<rt>ひつ</rt></ruby><ruby>然<rt>ぜん</rt></ruby>】この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>は、<ruby>見<rt>み</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>を<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>させ<span style='color:#d64045'>ずにはおかない</span>。</b>",
        "cn": "这部电影必然会让观看的人感动。"
      }
    ],
    "related": []
},
  {
    "id": 35,
    "title": "～たが最後 / ～たら最後",
    "romaji": "tagasaigo/tarasaigo",
    "kana": "たがさいご / たらさいご",
    "tags": "条件 绝望 必然",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "一旦…就…",
    "connection": "动词た形 + が最後 / ら最後",
    "desc": "表示<b>一旦发生了前项</b>，就<b>必然会导致</b>后项（通常是<b>无法挽回的坏结果</b>）。",
    "examples": [
      {
        "jp": "<b>パソコンのデータは、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>消<rt>け</rt></ruby>してしまっ<span style='color:#d64045'>たが<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby></span>、<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と<ruby>戻<rt>もど</rt></ruby>らない。</b>",
        "cn": "电脑数据一旦删除，就再也找不回来了。"
      }
    ],
    "related": []
  },
  {
    "id": 36,
    "title": "～てやる",
    "romaji": "teyaru",
    "kana": "てやる",
    "tags": "决心 愤怒 攻击性 口语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第3課",
    "meaning": "（狠狠地）… / 一定要… / …给你看",
    "connection": "动词て形 + やる",
    "desc": "不仅仅是“为别人做”，这里表示<b>向对方发泄强烈的情感（愤怒、憎恨）</b>，或者<b>强烈的决心</b>。常含有<b>“让你尝尝……的滋味”</b>、<b>“给你点颜色看看”</b>这种<b>攻击性或挑战性</b>的语气。",
    "examples": [
      {
        "jp": "<b>あんなやつ、もう<ruby>我<rt>が</rt></ruby><ruby>慢<rt>まん</rt></ruby>できない。<ruby>殴<rt>なぐ</rt></ruby>っ<span style='color:#d64045'>てやる</span>。</b>",
        "cn": "那种家伙，我已经忍无可忍了。我要揍他一顿。"
      },
      {
        "jp": "<b><ruby>今<rt>いま</rt></ruby>に<ruby>見<rt>み</rt></ruby>ていろ。<ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby>に<ruby>見<rt>み</rt></ruby><ruby>返<rt>かえ</rt></ruby>し<span style='color:#d64045'>てやる</span>。</b>",
        "cn": "你给我等着。我一定要让你对我刮目相看。"
      }
    ],
    "related": []
},
  {
    "id": 37,
    "title": "～ともなると",
    "romaji": "tomonaruto",
    "kana": "ともなると",
    "tags": "阶段 立场 变化 必然",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "一旦到了… / 一旦成为…",
    "connection": "名词 + ともなると / ともなれば",
    "desc": "表示<b>一旦达到某种程度、阶段或立场</b>（通常是高级的、特殊的），自然会有相对应的<b>状态变化</b>或<b>被期待的行为</b>。",
    "examples": [
      {
        "jp": "<b><ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>人<rt>じん</rt></ruby><span style='color:#d64045'>ともなると</span>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>言<rt>げん</rt></ruby><ruby>動<rt>どう</rt></ruby>に<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>持<rt>も</rt></ruby>たなくてはいけない。</b>",
        "cn": "一旦成为社会人，就必须对自己的言行负责。"
      }
    ],
    "related": []
  },
  {
    "id": 38,
    "title": "～にひきかえ",
    "romaji": "nihikikae",
    "kana": "にひきかえ",
    "tags": "对比 比较 评价",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "与…相反 / 与…不同",
    "connection": "名词 + （の） + にひきかえ",
    "desc": "表示<b>前后两项形成鲜明的对比</b>。通常带有<b>主观评价</b>（如“哥哥很好，弟弟却…”），表达说话人的感叹或不满。",
    "examples": [
      {
        "jp": "<b><ruby>真<rt>ま</rt></ruby><ruby>面<rt>め</rt></ruby><ruby>目<rt>な</rt></ruby>な<ruby>兄<rt>あに</rt></ruby><span style='color:#d64045'>にひきかえ</span>、<ruby>弟<rt>おとうと</rt></ruby>は<ruby>遊<rt>あそ</rt></ruby>んでばかりいる。</b>",
        "cn": "与认真的哥哥相反，弟弟整天只知道玩。"
      }
    ],
    "related": []
  },
  {
    "id": 39,
    "title": "～もさることながら",
    "romaji": "mosarukotonagara",
    "kana": "もさることながら",
    "tags": "递进 强调 并列",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "…那是当然（不用说）…但也…",
    "connection": "名词 + もさることながら",
    "desc": "表示<b>前项是理所当然的</b>（不用特意强调），但<b>后项更值得一提</b>或更重要。相当于“A当然如此，B也…”。",
    "examples": [
      {
        "jp": "<b>この<ruby>店<rt>みせ</rt></ruby>は、<ruby>味<rt>あじ</rt></ruby><span style='color:#d64045'>もさることながら</span>、<ruby>店<rt>てん</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>も<ruby>素晴<rt>すば</rt></ruby>らしい。</b>",
        "cn": "这家店的味道自不用说，店员的接待也非常棒。"
      }
    ],
    "related": []
  },
  {
    "id": 40,
    "title": "～であれ～であれ",
    "romaji": "dearedeare",
    "kana": "であれであれ",
    "tags": "列举 无论 条件",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "无论是…还是…",
    "connection": "名词 + であれ + 名词 + であれ",
    "desc": "列举两个同类的例子，表示<b>无论哪种情况，结果或结论都一样</b>。相当于「…でも…でも」。",
    "examples": [
      {
        "jp": "<b><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby><span style='color:#d64045'>であれ</span><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby><span style='color:#d64045'>であれ</span>、<ruby>校<rt>こう</rt></ruby><ruby>則<rt>そく</rt></ruby>は<ruby>守<rt>まも</rt></ruby>らなければならない。</b>",
        "cn": "无论是老师还是学生，都必须遵守校规。"
      }
    ],
    "related": []
  },
  {
    "id": 41,
    "title": "～に即した",
    "romaji": "nisokushita",
    "kana": "にそくした",
    "tags": "基准 符合 依据 硬文章",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "根据… / 符合…",
    "connection": "名词 + に即した + 名词 / に即して",
    "desc": "表示<b>依据某种基准、规则或现实情况</b>来行动。常搭配「<ruby>事実<rt>じじつ</rt></ruby>」（事实）、「<ruby>現状<rt>げんじょう</rt></ruby>」（现状）、「<ruby>法律<rt>ほうりつ</rt></ruby>」（法律）等。",
    "examples": [
      {
        "jp": "<b><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>の<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby><span style='color:#d64045'>に<ruby>即<rt>そく</rt></ruby>した</span><ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められている。</b>",
        "cn": "人们要求符合时代变化的教育。"
      }
    ],
    "related": []
  },
  {
    "id": 42,
    "title": "～をおいてほかにない",
    "romaji": "wooitehokaninai",
    "kana": "をおいてほかにない",
    "tags": "唯一 评价 最高 无可替代",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "除了…之外没有… / …是唯一的… / 非…莫属",
    "connection": "名词 + をおいて（ほかに）ない / いない",
    "desc": "表示<b>除此以外，再也找不到能与之相比的人或物</b>。强调该人或物是<b>最适合的、无可替代的</b>。通常用于给予<b>最高级的评价</b>。",
    "examples": [
      {
        "jp": "<b><ruby>次<rt>つぎ</rt></ruby>の<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は、<ruby>彼<rt>かれ</rt></ruby><span style='color:#d64045'>をおいてほかにいない</span>だろう。</b>",
        "cn": "下任社长除了他之外，恐怕没有别人了吧。"
      }
    ],
    "related": []
},
{
    "id": 43,
    "title": "～までもなく",
    "romaji": "mademonaku",
    "kana": "までもなく",
    "tags": "当然 不必 程度",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "用不着… / 没必要…",
    "connection": "动词辞书形 + までもなく",
    "desc": "表示<b>“那种事情是理所当然的，根本没必要特意去做”</b>。常用于「言うまでもなく」（不用说/当然）等惯用表达。",
    "examples": [
      {
        "jp": "<b>そんなことは、<ruby>言<rt>い</rt></ruby>う<span style='color:#d64045'>までもなく</span><ruby>当<rt>とう</rt></ruby><ruby>然<rt>ぜん</rt></ruby>のことだ。</b>",
        "cn": "那种事，不用说也是理所当然的。"
      }
    ],
    "related": []
},
{
    "id": 44,
    "title": "～いかん",
    "romaji": "ikan",
    "kana": "いかん",
    "tags": "依据 条件 决定 硬文章",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "取决于… / 根据…的情况",
    "connection": "名词 + （の） + いかん / いかんだ / いかんでは / いかんによっては",
    "desc": "表示<b>“根据该情况如何而定”</b>。汉字写作「<b>如何</b>」。常用于<b>正式场合</b>。除了结句的「<b>いかんだ</b>」，常使用「<b>いかんでは / いかんによっては</b>」的形式，表示“根据…的情况，也有可能发生某种结果”。",
    "examples": [
      {
        "jp": "<b><ruby>検<rt>けん</rt></ruby><ruby>査<rt>さ</rt></ruby>の<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby><span style='color:#d64045'>いかんでは</span>、<ruby>入<rt>にゅう</rt></ruby><ruby>院<rt>いん</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>かもしれない。</b>",
        "cn": "根据检查的结果，也许需要住院。"
      }
    ],
    "related": [48]
},
{
    "id": 45,
    "title": "～ないまでも",
    "romaji": "naimademo",
    "kana": "ないまでも",
    "tags": "让步 最低限度 程度",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "虽然不至于…但是…",
    "connection": "动词ない形 + までも",
    "desc": "表示<b>“虽然达不到前项那种程度（最高目标），但至少也能达到后项的程度”</b>。是一种<b>让步</b>的表达方式。",
    "examples": [
      {
        "jp": "<b><ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>とは<ruby>言<rt>い</rt></ruby>わ<span style='color:#d64045'>ないまでも</span>、<ruby>週<rt>しゅう</rt></ruby>に1<ruby>回<rt>かい</rt></ruby>ぐらいは<ruby>掃<rt>そう</rt></ruby><ruby>除<rt>じ</rt></ruby>をしてほしい。</b>",
        "cn": "虽然不说每天都要打扫，但希望至少每周打扫一次。"
      }
    ],
    "related": []
},
{
    "id": 46,
    "title": "～といい～といい",
    "romaji": "toiitoii",
    "kana": "といいといい",
    "tags": "列举 评价 强调",
    "compareWith": [57],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "无论是…还是…（都）",
    "connection": "名词 + といい + 名词 + といい",
    "desc": "列举两个例子，表示<b>“不仅限于这两个方面，整体上都…”</b>。通常用于<b>评价</b>（多为正面评价，也可以是负面）。",
    "examples": [
      {
        "jp": "<b><ruby>色<rt>いろ</rt></ruby><span style='color:#d64045'>といい</span><ruby>形<rt>かたち</rt></ruby><span style='color:#d64045'>といい</span>、この<ruby>花<rt>はな</rt></ruby>は<ruby>申<rt>もう</rt></ruby>し<ruby>分<rt>ぶん</rt></ruby>ない<ruby>美<rt>うつく</rt></ruby>しさだ。</b>",
        "cn": "无论是颜色还是形状，这朵花都美得无可挑剔。"
      }
    ],
    "related": []
},
{
    "id": 47,
    "title": "～といったところだ",
    "romaji": "toittatokoroda",
    "kana": "といったところだ",
    "tags": "程度 概算 极限 总结",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課 / 第5課",
    "meaning": "充其量… / 大概… / 也就是…吧",
    "connection": "名词 / 动词辞书形 + といったところだ",
    "desc": "主要有两种用法：<br>1. 表示<b>程度或数量不高</b>（最高限度），“最高也就那个程度”、“充其量…”。常与「せいぜい」搭配。<br>2. 表示<b>大致的说明或总结</b>，“大概就是…的样子”、“可以说基本是…”。",
    "examples": [
      {
        "jp": "<b><ruby>当<rt>とう</rt></ruby><ruby>地<rt>ち</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いといっても、<ruby>最<rt>さい</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>温<rt>おん</rt></ruby>は28<ruby>度<rt>ど</rt></ruby><span style='color:#d64045'>といったところだ</span>。</b>",
        "cn": "【程度不高】当地的夏天虽说很热，但最高气温充其量也就28度左右（没多高）。"
      },
      {
        "jp": "<b>チームでの<ruby>私<rt>わたし</rt></ruby>の<ruby>役<rt>やく</rt></ruby><ruby>割<rt>わり</rt></ruby>は、<ruby>調<rt>ちょう</rt></ruby><ruby>整<rt>せい</rt></ruby><ruby>役<rt>やく</rt></ruby><span style='color:#d64045'>といったところだ</span>。</b>",
        "cn": "【大致说明】我在团队里的角色，大概就是个协调员吧（大致是这种感觉）。"
      }
    ],
    "related": [68, 79]
},
{
    "id": 48,
    "title": "～いかんせん / ～いかんともしがたい",
    "romaji": "ikansen",
    "kana": "いかんせん",
    "tags": "无奈 遗憾 惯用语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第4課",
    "meaning": "很遗憾… / 无奈…",
    "connection": "句首 / 句中",
    "desc": "源自「いかん（如何）」。<br>1. 「<b>いかんせん</b>」：表示“虽然想做，但<b>无奈有客观阻碍（如没钱、没时间）</b>”，含有“遗憾”的心情。<br>2. 「<b>いかんともしがたい</b>」：表示“<b>实在无能为力</b>”、“不论怎么做都无法解决”。",
    "examples": [
      {
        "jp": "<b><ruby>行<rt>い</rt></ruby>きたいのは<ruby>山<rt>やま</rt></ruby><ruby>々<rt>やま</rt></ruby>だが、<span style='color:#d64045'>いかんせん</span><ruby>体<rt>からだ</rt></ruby>の<ruby>調<rt>ちょう</rt></ruby><ruby>子<rt>し</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。</b>",
        "cn": "虽然我很想去，但无奈身体状况不好。"
      },
      {
         "jp": "<b><ruby>彼<rt>かれ</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>では<ruby>助<rt>たす</rt></ruby>けてやりたくても、<span style='color:#d64045'>いかんともしがたい</span>。</b>",
         "cn": "凭他的力量即使想帮忙，也实在是无能为力。"
      }
    ],
    "related": [44]
},
{
    "id": 49,
    "title": "～といおうか / ～というか",
    "romaji": "toiouka / toiuka",
    "kana": "といおうか / というか",
    "tags": "评价 犹豫 不确定",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "是…呢，还是…呢 / 该说是…好，还是…好",
    "connection": "名词 / 动词普通形 / い形 / な形 + といおうか / というか",
    "desc": "表示<b>“很难找到确切的词汇来描述，既像A又像B”</b>。通常列举两个既有共同点又有不同点的词汇，表达说话人<b>犹豫、无法断定</b>的心情。口语中常说「<b>～というか</b>」。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>純<rt>じゅん</rt></ruby><ruby>粋<rt>すい</rt></ruby><span style='color:#d64045'>といおうか</span>（<span style='color:#d64045'>というか</span>）、<ruby>幼<rt>おさな</rt></ruby>い<span style='color:#d64045'>といおうか</span>（<span style='color:#d64045'>というか</span>）、とにかく<ruby>人<rt>ひと</rt></ruby>を<ruby>疑<rt>うたが</rt></ruby>うことを<ruby>知<rt>し</rt></ruby>らない。</b>",
        "cn": "该说他天真，还是说他是幼稚呢，总之他对人毫无防备。"
      }
    ],
    "related": []
},
{
    "id": 50,
    "title": "～のをいいことに",
    "romaji": "nowoiikotoni",
    "kana": "のをいいことに",
    "tags": "利用 趁机 负面",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "利用…的机会（做坏事） / 趁着…",
    "connection": "动词普通形 / い形 / な形 / 名词 + のをいいことに",
    "desc": "表示<b>利用某个有利的状况</b>（通常是由于他人的疏忽或不在场），<b>进行某种不正当或给人添麻烦的行为</b>。后项多为消极内容。",
    "examples": [
      {
        "jp": "<b><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>がいない<span style='color:#d64045'>のをいいことに</span>、<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>たちはゲームをして<ruby>遊<rt>あそ</rt></ruby>んでいる。</b>",
        "cn": "学生们趁着老师不在，肆无忌惮地玩起了游戏。"
      }
    ],
    "related": []
},
{
    "id": 51,
    "title": "～か / ～ものか",
    "romaji": "ka / monoka",
    "kana": "か / ものか",
    "tags": "否定 强烈 反语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "怎么会…呢（绝不…） / 哪能…",
    "connection": "动词辞书形 + か / ものか",
    "desc": "以<b>反问（反语）</b>的形式表示<b>强烈的否定</b>。意思相当于“怎么可能会…呢（绝不可能）”、“我才不会…呢”。",
    "examples": [
      {
        "jp": "<b>あんな<ruby>無<rt>む</rt></ruby><ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>に、<ruby>大<rt>たい</rt></ruby><ruby>事<rt>じ</rt></ruby>な<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が<ruby>任<rt>まか</rt></ruby>せられる<span style='color:#d64045'>か</span>。</b>",
        "cn": "怎么能把重要的工作交给那种不负责任的人呢？"
      }
    ],
    "related": [77]
},
{
    "id": 52,
    "title": "～にもほどがある",
    "romaji": "nimohodogaaru",
    "kana": "にもほどがある",
    "tags": "程度 过分 批评",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "…也该有个限度 / …太过分了",
    "connection": "名词 / 动词辞书形 / い形 / な形 + にもほどがある",
    "desc": "表示某事物的程度<b>过于极端，已经超过了容忍的限度</b>。通常用于<b>批评或指责</b>。",
    "examples": [
      {
        "jp": "<b><ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby><span style='color:#d64045'>にもほどがある</span>。</b>",
        "cn": "开玩笑也该有个限度。"
      }
    ],
    "related": []
},
{
    "id": 53,
    "title": "～ならまだしも",
    "romaji": "naramadashimo",
    "kana": "ならまだしも",
    "tags": "对比 让步 不满",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "如果是…的话还好…",
    "connection": "名词 / 动词普通形 + ならまだしも",
    "desc": "表示<b>“如果是前项的话还可以接受或谅解，但后项的情况实在是无法接受”</b>。常用于表达<b>不满</b>。",
    "examples": [
      {
        "jp": "<b><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby><span style='color:#d64045'>ならまだしも</span>、<ruby>大<rt>おと</rt></ruby><ruby>人<rt>な</rt></ruby>がこんな<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>いをするなんて<ruby>恥<rt>は</rt></ruby>ずかしい。</b>",
        "cn": "如果是小孩子还情有可原，大人犯这种错误未免太丢人了。"
      }
    ],
    "related": [62]
},
{
    "id": 54,
    "title": "～以前",
    "romaji": "izen",
    "kana": "いぜん",
    "tags": "根本 前提 基础",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "在…之前 / …的问题 / 根本谈不上…",
    "connection": "名词 + 以前",
    "desc": "表示<b>在谈论某事之前，还有更基础、更根本的问题</b>。即“根本还没达到谈论A的水平”。常用于批评某人连最基本的条件都不具备。",
    "examples": [
      {
        "jp": "<b>このレポートは<ruby>誤<rt>ご</rt></ruby><ruby>字<rt>じ</rt></ruby>だらけで、<ruby>内<rt>ない</rt></ruby><ruby>容<rt>よう</rt></ruby><span style='color:#d64045'><ruby>以<rt>い</rt></ruby><ruby>前<rt>ぜん</rt></ruby></span>の<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。</b>",
        "cn": "这份报告错字连篇，根本谈不上内容好坏，这是更低级的问题。"
      }
    ],
    "related": []
},
{
    "id": 55,
    "title": "～べくして",
    "romaji": "bekushite",
    "kana": "べくして",
    "tags": "必然 因果 命运",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "必然… / 注定…",
    "connection": "动词辞书形 + べくして + 动词た形",
    "desc": "表示<b>某种结果的发生是理所当然的</b>，是<b>必然的归宿</b>。前后通常使用同一个动词，形式为「VべくしてVた」。",
    "examples": [
      {
        "jp": "<b><ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>は<ruby>起<rt>お</rt></ruby>きる<span style='color:#d64045'>べくして</span><ruby>起<rt>お</rt></ruby>きたのだ。</b>",
        "cn": "这起事故是注定要发生的。"
      }
    ],
    "related": []
},
{
    "id": 56,
    "title": "～が～だけに",
    "romaji": "gatadakeni",
    "kana": "がだけに",
    "tags": "原因 强调 特殊性",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "正因为…是… / 既然是…",
    "connection": "名词 + が + 名词 + だけに",
    "desc": "表示<b>由于该事物的特殊性或重要性</b>，因此<b>更加…</b>，或者<b>理所当然地…</b>。强调原因的特殊性。",
    "examples": [
      {
        "jp": "<b><ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby><span style='color:#d64045'>が</span><ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby><span style='color:#d64045'>だけに</span>、<ruby>十<rt>じゅう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>な<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。</b>",
        "cn": "正因为对手非同一般，我们必须做好充分的准备。"
      }
    ],
    "related": []
},
{
    "id": 57,
    "title": "～といわず～といわず",
    "romaji": "toiwazutoiwazu",
    "kana": "といわずといわず",
    "tags": "列举 全面 强调",
    "compareWith": [46],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "无论…还是…（都） / 不分…",
    "connection": "名词 + といわず + 名词 + といわず",
    "desc": "表示<b>“不分A还是B，全部都…”</b>。列举具有代表性的两个事物（通常是时间、场所、身体部位等），暗示<b>“不仅是这两者，整体上全都是如此”</b>。后项多描写某种状态（往往是负面的或令人惊讶的）。",
    "examples": [
      {
        "jp": "<b><ruby>砂<rt>さ</rt></ruby><ruby>漠<rt>ばく</rt></ruby>の<ruby>旅<rt>たび</rt></ruby>で、<ruby>手<rt>て</rt></ruby><span style='color:#d64045'>といわず</span><ruby>足<rt>あし</rt></ruby><span style='color:#d64045'>といわず</span>、<ruby>体<rt>からだ</rt></ruby><ruby>中<rt>じゅう</rt></ruby><ruby>砂<rt>すな</rt></ruby>だらけだ。</b>",
        "cn": "在沙漠旅行中，无论是手还是脚，全身都沾满了沙子。"
      }
    ],
    "related": []
},
{
    "id": 58,
    "title": "～たら～たで",
    "romaji": "taratade",
    "kana": "たらたで",
    "tags": "假设 现实 纠结",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "（即使）…了也有…的麻烦 / 如果…",
    "connection": "动词た形 + ら + 动词た形 + で / い形 + かったら + い形 + かった + で / な形 + なら + な形 + で",
    "desc": "表示<b>“虽然前项条件实现了（有了A），但随之而来又有新的问题或烦恼”</b>。或者表示“没有A虽然不行，但有了A也有A的难处”。强调现实的两难。",
    "examples": [
      {
        "jp": "<b><ruby>庭<rt>にわ</rt></ruby>があったらいいなと<ruby>思<rt>おも</rt></ruby>っていたが、<ruby>実<rt>じっ</rt></ruby><ruby>際<rt>さい</rt></ruby>にあっ<span style='color:#d64045'>たら</span>あっ<span style='color:#d64045'>たで</span>、<ruby>草<rt>くさ</rt></ruby>むしりが<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>だ。</b>",
        "cn": "以前觉得有院子真好，但实际有了之后，除草又成了大麻烦。"
      }
    ],
    "related": []
},
{
    "id": 59,
    "title": "～ば～で",
    "romaji": "bade",
    "kana": "ばで",
    "tags": "条件 现实 纠结",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "如果…的话，也有…的问题",
    "connection": "动词ば形 + 动词た形 + で / い形 + ければ + い形 + かった + で / な形 + なら（ば） + な形 + で",
    "desc": "用法与「～たら～たで」基本相同，表示<b>“如果某种情况发生，随之也会产生相应的问题”</b>。常用于表达“无论怎样都很为难”的心情。",
    "examples": [
      {
        "jp": "<b><ruby>食<rt>しょく</rt></ruby><ruby>材<rt>ざい</rt></ruby>が<ruby>安<rt>やす</rt></ruby>ければうれしいが、<ruby>安<rt>やす</rt></ruby>け<ruby>れ<rt></rt></ruby><span style='color:#d64045'>ば</span><ruby>安<rt>やす</rt></ruby>かっ<span style='color:#d64045'>たで</span>、<ruby>安<rt>あん</rt></ruby><ruby>全<rt>ぜん</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby>になる。</b>",
        "cn": "食材便宜固然让人高兴，但要是太过便宜，又会担心其安全性。"
      }
    ],
    "related": []
},
{
    "id": 60,
    "title": "～にたえない",
    "romaji": "nitaenai",
    "kana": "にたえない",
    "tags": "评价 情感 否定",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課 / 第6課",
    "meaning": "不忍… / 难以… / 不值得…",
    "connection": "动词辞书形 / 名词 + にたえない",
    "desc": "主要有两种用法：<br>1. 接动词（如見る、聞く）时，表示<b>“情况太糟糕/太悲惨，不忍心看/听”</b>或<b>“没有欣赏的价值”</b>。<br>2. 接名词（如感謝、感激）时，表示<b>“感情非常强烈，难以抑制”</b>。",
    "examples": [
      {
        "jp": "<b><ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>場<rt>じょう</rt></ruby>は、あまりに<ruby>悲<rt>ひ</rt></ruby><ruby>惨<rt>さん</rt></ruby>で<ruby>見<rt>み</rt></ruby>る<span style='color:#d64045'>にたえない</span>。</b>",
        "cn": "事故现场过于悲惨，让人不忍直视。"
      },
      {
        "jp": "<b><ruby>日<rt>ひ</rt></ruby><ruby>頃<rt>ごろ</rt></ruby>のご<ruby>愛<rt>あい</rt></ruby><ruby>顧<rt>こ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>感<rt>かん</rt></ruby><ruby>謝<rt>しゃ</rt></ruby><span style='color:#d64045'>にたえません</span>。</b>",
        "cn": "对于平日的关照，我不胜感激。"
      }
    ],
    "related": []
},
{
    "id": 61,
    "title": "～ようものなら",
    "romaji": "youmononara",
    "kana": "ようものなら",
    "tags": "假设 后果 警告",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "如果真要…的话（后果严重）",
    "connection": "动词意向形 + ものなら",
    "desc": "表示<b>假设条件</b>。暗示<b>“一旦做了那样的事，就会引发非常严重的后果”</b>。后项通常是消极的、可怕的结果。",
    "examples": [
      {
        "jp": "<b><ruby>妻<rt>つま</rt></ruby>に<ruby>口<rt>くち</rt></ruby><ruby>答<rt>ごた</rt></ruby>えし<span style='color:#d64045'>ようものなら</span>、<ruby>一<rt>いっ</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>口<rt>くち</rt></ruby>をきいてもらえないだろう。</b>",
        "cn": "如果我敢跟妻子顶嘴，恐怕她一个星期都不会理我。"
      }
    ],
    "related": []
},
{
    "id": 62,
    "title": "～ならいざしらず",
    "romaji": "naraizashirazu",
    "kana": "ならいざしらず",
    "tags": "对比 让步 例外",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "如果是…还情有可原 / …姑且不论",
    "connection": "名词 / 动词普通形（の） + ならいざしらず",
    "desc": "表示<b>“如果是A的情况或许还可以理解/接受，但B的情况（现状）完全不同，无法接受”</b>。用于引出极端的对比。",
    "examples": [
      {
        "jp": "<b><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby><span style='color:#d64045'>ならいざしらず</span>、<ruby>大<rt>おと</rt></ruby><ruby>人<rt>な</rt></ruby>がこんな<ruby>単<rt>たん</rt></ruby><ruby>純<rt>じゅん</rt></ruby>なことに<ruby>引<rt>ひ</rt></ruby>っかかるなんて。</b>",
        "cn": "如果是小孩子还情有可原，大人竟然会被这么单纯的事情骗到，真是难以置信。"
      }
    ],
    "related": [53]
},
{
    "id": 63,
    "title": "～ないものか",
    "romaji": "naimonoka",
    "kana": "ないものか",
    "tags": "愿望 期待 困难",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "能不能… / 难道就不能…吗",
    "connection": "动词ない形 + もの（だろう）か",
    "desc": "表示<b>强烈的愿望</b>。说话人虽然知道<b>实现起来很困难</b>，但仍然<b>希望能想办法实现</b>。常与「なんとか」「どうにか」搭配使用。",
    "examples": [
      {
        "jp": "<b>この<ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>、なんとかなおせ<span style='color:#d64045'>ないものか</span>。</b>",
        "cn": "这台机器，难道就没办法修好吗？"
      }
    ],
    "related": []
},
{
    "id": 64,
    "title": "～に越したことはない",
    "romaji": "nikoshitakotowanai",
    "kana": "にこしたことはない",
    "tags": "建议 最佳 安全",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "…最好不过了 / 最好是…",
    "connection": "名词 / 动词辞书形 / い形 / な形 + に越したことはない",
    "desc": "表示<b>“那样做是最安全、最理想的”</b>。虽然不是绝对必须，但<b>那样做肯定比不那样做要好</b>。通常用于一般的常识或建议。",
    "examples": [
      {
        "jp": "<b><ruby>用<rt>よう</rt></ruby><ruby>心<rt>じん</rt></ruby>する<span style='color:#d64045'>に越したことはない</span>。</b>",
        "cn": "小心一点总是没错的。"
      }
    ],
    "related": []
},
{
    "id": 65,
    "title": "～とはいえ",
    "romaji": "towaie",
    "kana": "とはいえ",
    "tags": "逆接 让步 转折",
    "compareWith": [8],
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "虽说… / 尽管…",
    "connection": "名词 / 动词普通形 / い形 / な形 + とはいえ",
    "desc": "表示<b>承认前项的事实</b>，但后项的情况<b>并不如前项所预想的那样</b>，或者<b>仍然存在问题</b>。相当于「～といっても」。",
    "examples": [
      {
        "jp": "<b><ruby>春<rt>はる</rt></ruby><span style='color:#d64045'>とはいえ</span>、まだまだ<ruby>寒<rt>さむ</rt></ruby>い<ruby>日<rt>ひ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。</b>",
        "cn": "虽说是春天了，但寒冷的日子还在持续。"
      }
    ],
    "related": []
},
{
    "id": 66,
    "title": "～に～ない",
    "romaji": "ni...nai",
    "kana": "に...ない",
    "tags": "心理 困惑 进退两难",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "想…也…不了 / 没法…",
    "connection": "动词辞书形 + に + 同动词可能形的否定",
    "desc": "表示<b>“虽然心理上很想做，或者按理说该做，但由于某种事情或心理原因而做不到”</b>。前后重复同一个动词。",
    "examples": [
      {
        "jp": "<b><ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けてしまった<ruby>以上<rt>いじょう</rt></ruby>、<ruby>今<rt>いま</rt></ruby>さら<ruby>断<rt>ことわ</rt></ruby>る<span style='color:#d64045'>に<ruby>断<rt>ことわ</rt></ruby>れない</span>。</b>",
        "cn": "既然已经接受了，事到如今真是想拒绝也没法拒绝。"
      }
    ],
    "related": []
},
{
    "id": 67,
    "title": "～にかこつけて",
    "romaji": "nikakotsukete",
    "kana": "にかこつけて",
    "tags": "借口 动机 手段",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第5課",
    "meaning": "托辞… / 借口… / 打着…的幌子",
    "connection": "名词 + にかこつけて",
    "desc": "表示<b>把某事作为表面上的理由（借口）</b>，实际上去<b>做另一件事</b>（通常是自己想做的）。",
    "examples": [
      {
        "jp": "<b><ruby>父<rt>ちち</rt></ruby>の<ruby>退<rt>たい</rt></ruby><ruby>職<rt>しょく</rt></ruby><ruby>祝<rt>いわ</rt></ruby>い<span style='color:#d64045'>にかこつけて</span>、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>みんなで<ruby>高<rt>こう</rt></ruby><ruby>級<rt>きゅう</rt></ruby>レストランへ<ruby>行<rt>い</rt></ruby>った。</b>",
        "cn": "借着庆祝父亲退休的名义，全家人去了高级餐厅。"
      }
    ],
    "related": []
},
{
    "id": 68,
    "title": "～ところを",
    "romaji": "tokorowo",
    "kana": "ところを",
    "tags": "道歉 感谢 寒暄 正式",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第6課",
    "meaning": "在…的时候（却） / …之中",
    "connection": "名词 + の / 动词普通形 / い形 / な形 + ところを",
    "desc": "接在表示某种状态（通常是忙碌、休息、百忙之中）的词后，用于<b>对打扰对方表示歉意或感谢</b>。是商务和正式场合的常用寒暄语。",
    "examples": [
      {
        "jp": "<b>お<ruby>忙<rt>いそが</rt></ruby>しい<span style='color:#d64045'>ところを</span>お<ruby>集<rt>あつ</rt></ruby>まりいただき、ありがとうございます。</b>",
        "cn": "感谢各位在百忙之中抽空聚集于此。"
      }
    ],
    "related": [47, 79]
},
{
    "id": 69,
    "title": "～の至り",
    "romaji": "noitari",
    "kana": "のいたり",
    "tags": "极致 情感 惯用语 硬文章",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第6課",
    "meaning": "…之至 / 无比…",
    "connection": "名词 + の至り",
    "desc": "表示<b>处于某种情感的最高点</b>。常以惯用语的形式出现，如「<b><ruby>光<rt>こう</rt></ruby><ruby>栄<rt>えい</rt></ruby>の<ruby>至<rt>いた</rt></ruby>り</b>」（无比光荣）、「<b><ruby>若<rt>わか</rt></ruby><ruby>気<rt>げ</rt></ruby>の<ruby>至<rt>いた</rt></ruby>り</b>」（年少无知/因为年轻而冲动）。",
    "examples": [
      {
        "jp": "<b>このような<ruby>賞<rt>しょう</rt></ruby>をいただき、<ruby>光<rt>こう</rt></ruby><ruby>栄<rt>えい</rt></ruby><span style='color:#d64045'>の<ruby>至<rt>いた</rt></ruby>り</span>です。</b>",
        "cn": "能获得这样的奖项，我感到无比光荣。"
      }
    ],
    "related": []
},
{
    "id": 70,
    "title": "～こととて",
    "romaji": "kototote",
    "kana": "こととて",
    "tags": "原因 理由 道歉 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第6課",
    "meaning": "因为… / 由于…",
    "connection": "名词 + の / 动词普通形 / い形 / な形 + こととて",
    "desc": "表示<b>“因为…”</b>。常用于<b>为自己的过失或不周全进行辩解、道歉</b>（如：因为不知情、因为不习惯、因为是孩子等）。属于<b>古雅的书面语</b>，不用于日常会话。",
    "examples": [
      {
        "jp": "<b><ruby>慣<rt>な</rt></ruby>れぬ<span style='color:#d64045'>こととて</span>、<ruby>失<rt>しつ</rt></ruby><ruby>礼<rt>れい</rt></ruby>がありましたらお<ruby>許<rt>ゆる</rt></ruby>しください。</b>",
        "cn": "因为我不习惯这些规矩，若有失礼之处，还请见谅。"
      }
    ],
    "related": []
},
{
    "id": 71,
    "title": "～たる",
    "romaji": "taru",
    "kana": "たる",
    "tags": "资格 身份 义务 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第6課",
    "meaning": "作为… / 身为…",
    "connection": "名词 + たる + 名词",
    "desc": "表示<b>作为某种拥有高尚立场或特殊职责的人</b>（如教师、领袖、警察），应该具备某种姿态或资格。后项常接“应该…”、“必须…”等表达。",
    "examples": [
      {
        "jp": "<b><ruby>教<rt>きょう</rt></ruby><ruby>師<rt>し</rt></ruby><span style='color:#d64045'>たる</span><ruby>者<rt>もの</rt></ruby>、<ruby>常<rt>つね</rt></ruby>に<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>手<rt>て</rt></ruby><ruby>本<rt>ほん</rt></ruby>でなければならない。</b>",
        "cn": "身为教师，必须时刻做学生的榜样。"
      }
    ],
    "related": [117]
},
{
    "id": 72,
    "title": "～限りです",
    "romaji": "kagiridesu",
    "kana": "かぎりです",
    "tags": "情感 程度 极致",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第6課",
    "meaning": "…之极 / 无比… / …透了",
    "connection": "い形 / な形 + 限りだ",
    "desc": "接在表示感情的形容词后，表示<b>程度极高</b>。多表达说话人<b>个人的主观情感</b>（如羡慕、高兴、悲伤）。",
    "examples": [
      {
        "jp": "<b><ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>が<ruby>宝<rt>たから</rt></ruby>くじに<ruby>当<rt>あ</rt></ruby>たったなんて、<ruby>羨<rt>うらや</rt></ruby>ましい<span style='color:#d64045'><ruby>限<rt>かぎ</rt></ruby>りです</span>。</b>",
        "cn": "朋友竟然中了彩票，真是羡慕死我了。"
      }
    ],
    "related": [107]
}, 
{
    "id": 73,
    "title": "～じゃあるまいし",
    "romaji": "jaarumaisi",
    "kana": "じゃあるまいし",
    "tags": "原因 理由 批评 口语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "又不是…",
    "connection": "名词 + （の） + じゃあるまいし / 动词辞书形 + の + じゃあるまいし / 动词た形 + の + じゃあるまいし",
    "desc": "表示<b>“又不是……”</b>。常用于批评对方大惊小怪，或者行为不符合其身份（如“又不是小孩子”）。口语中也常说「<b>～ではあるまいし</b>」。",
    "examples": [
      {
        "jp": "<b><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby><span style='color:#d64045'>じゃあるまいし</span>、<ruby>泣<rt>な</rt></ruby>くのはやめなさい。</b>",
        "cn": "又不是小孩子，别哭了。"
      }
    ],
    "related": []
},
{
    "id": 74,
    "title": "～んばかり",
    "romaji": "nbakari",
    "kana": "んばかり",
    "tags": "程度 样态 比喻",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "几乎要… / 眼看就要…",
    "connection": "动词ない形（去掉ない） + んばかり（例：泣き出さんばかり） / *する→せんばかり",
    "desc": "表示<b>“虽然没有真的做，但程度之深几乎就像是那样”</b>。常用于描写<b>神态、动作</b>。形式多为「～んばかりだ / ～んばかりに / ～んばかりの」。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>頭<rt>あたま</rt></ruby>を<ruby>畳<rt>たたみ</rt></ruby>にこすりつけ<span style='color:#d64045'>んばかり</span>にして<ruby>頼<rt>たの</rt></ruby>んだ。</b>",
        "cn": "他苦苦哀求，头低得几乎要贴到榻榻米上。"
      }
    ],
    "related": [75]
},
{
    "id": 75,
    "title": "～とばかり（に）",
    "romaji": "tobakari",
    "kana": "とばかり",
    "tags": "样态 比喻 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "显出…的样子 / 就像在说…",
    "connection": "句子 / 词组 + とばかり（に）",
    "desc": "「と言わんばかり」的口语缩略形态，表示<b>“虽然没开口说，但那个动作/表情就像是在说……”</b>。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>出<rt>で</rt></ruby>て<ruby>行<rt>い</rt></ruby>け<span style='color:#d64045'>とばかりに</span>、ドアを<ruby>開<rt>あ</rt></ruby>けた。</b>",
        "cn": "他打开门，那样子就像是在说“给我滚出去”。"
      }
    ],
    "related": [74]
},
{
    "id": 76,
    "title": "～たらそれまでだ",
    "romaji": "tarasoremadeda",
    "kana": "たらそれまでだ",
    "tags": "结果 极端 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "…就全完了 / …就没有意义了",
    "connection": "动词た形 + ら + それまでだ",
    "desc": "表示<b>“如果发生了那种情况，一切就都完了/没有意义了”</b>。常表达“虽然A很重要，但如果发生了B，那A也没用了”。",
    "examples": [
      {
        "jp": "<b>いくらお<ruby>金<rt>かね</rt></ruby>があっても、<ruby>死<rt>し</rt></ruby>んでしまっ<span style='color:#d64045'>たらそれまでだ</span>。</b>",
        "cn": "就算再有钱，人要是死了，那就什么都没了。"
      }
    ],
    "related": []
},
{
    "id": 77,
    "title": "～ものを",
    "romaji": "monowo",
    "kana": "ものを",
    "tags": "后悔 遗憾 抱怨 逆接",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "本来…可是… / …就好了",
    "connection": "动词 / い形 / な形 + 普 + ものを",
    "desc": "表示<b>“要是……就好了，可是（实际上并非如此，导致了不好的结果）”</b>。带有<b>遗憾、不满、同情</b>的情绪。后项常省略。",
    "examples": [
      {
        "jp": "<b>すぐ<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>けば<ruby>治<rt>なお</rt></ruby>った<span style='color:#d64045'>ものを</span>、<ruby>我<rt>が</rt></ruby><ruby>慢<rt>まん</rt></ruby>してしまった。</b>",
        "cn": "要是马上去医院的话本来能治好的，可他却硬撑着（结果严重了）。"
      }
    ],
    "related": [51]
},
{
    "id": 78,
    "title": "～ときたら",
    "romaji": "tokitara",
    "kana": "ときたら",
    "tags": "话题 批评 不满",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "说起… / 提到…",
    "connection": "名词 + ときたら",
    "desc": "提示话题，后项通常接<b>不满、责难</b>的内容。用于表达对某人或某事（通常是身边亲近的人）的<b>负面评价</b>。",
    "examples": [
      {
        "jp": "<b>うちの<ruby>子<rt>こ</rt></ruby><span style='color:#d64045'>ときたら</span>、<ruby>遊<rt>あそ</rt></ruby>んでばかりいて<ruby>全<rt>ぜん</rt></ruby><ruby>然<rt>ぜん</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しない。</b>",
        "cn": "说起我家孩子，整天光知道玩，根本不学习。"
      }
    ],
    "related": []
},
{
    "id": 79,
    "title": "～たところで",
    "romaji": "tatokorode",
    "kana": "たところで",
    "tags": "逆接 徒劳 假设",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "即使…也（没用）",
    "connection": "动词た形 + ところで",
    "desc": "表示<b>“即使做了前项，也无法达到预期的好结果”</b>。后项多为<b>否定、消极</b>的判断。意思是“再怎么努力也是徒劳”。",
    "examples": [
      {
        "jp": "<b><ruby>今<rt>いま</rt></ruby>さら<ruby>走<rt>はし</rt></ruby>っ<span style='color:#d64045'>たところで</span>、もう<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。</b>",
        "cn": "事到如今即使跑着去，也已经赶不上了。"
      }
    ],
    "related": [47, 68, 88],
    "compareWith": [88]
  }, 
{
    "id": 80,
    "title": "～（よ）うが / ～（よ）うと",
    "romaji": "ouga / outo",
    "kana": "（よ）うが / （よ）うと",
    "tags": "逆接 无论 决心",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "无论…都… / 即使…也…",
    "connection": "动词意志形 / い形（かろう） / な形・名词（だろう） + が / と",
    "desc": "表示<b>“无论前项情况如何，后项都不会改变”</b>。表现出说话人<b>强烈的意志</b>，即“不受外界影响”。",
    "examples": [
      {
        "jp": "<b><ruby>周囲<rt>しゅうい</rt></ruby>が<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby><span style='color:#d64045'>おうが</span>、<ruby>私<rt>わたし</rt></ruby>は<ruby>決<rt>けっ</rt></ruby>して<ruby>諦<rt>あきら</rt></ruby>めない。</b>",
        "cn": "无论周围人说什么，我都绝不放弃。"
      }
    ],
    "related": []
},
{
    "id": 81,
    "title": "～（よ）うが～まいが",
    "romaji": "ougamaiga",
    "kana": "（よ）うが～まいが",
    "tags": "无论 对比 无关",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "无论是否… / 不管…还是不…",
    "connection": "动词意志形 + が + 动词辞书形/まい + が",
    "desc": "列举做某事和不做某事两种情况，表示<b>“不管做还是不做，结果都是一样的”</b>。前后重复同一个动词。",
    "examples": [
      {
        "jp": "<b><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby><span style='color:#d64045'>ろうが降るまいが</span>、<ruby>試合<rt>しあい</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>われる。</b>",
        "cn": "不管下不下雨，比赛都将照常进行。"
      }
    ],
    "related": []
},
{
    "id": 82,
    "title": "～なら～で",
    "romaji": "narade",
    "kana": "ならで",
    "tags": "条件 对应 纠结",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "如果是…那就（按…的样子）…",
    "connection": "名词 / な形 + なら + 名词 / な形 + で",
    "desc": "表示<b>“既然是这种情况，那就按这种情况的方式去处理”</b>。有时也含有“虽然A有A的问题，但B也有B的问题”的语感（与「～たら～たで」类似）。",
    "examples": [
      {
        "jp": "<b><ruby>嫌<rt>いや</rt></ruby><span style='color:#d64045'>なら嫌で</span>、はっきり<ruby>言<rt>い</rt></ruby>ってほしい。</b>",
        "cn": "如果你讨厌的话，就希望你能（直接按讨厌的态度）说清楚。"
      }
    ],
    "related": [58, 59]
},
{
    "id": 83,
    "title": "～にすれば / ～にしてみれば / にしたら",
    "romaji": "nisureba / nishitemireba",
    "kana": "にすれば / にしてみれば / にしたら",
    "tags": "立场 换位思考 观点",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "对…来说 / 站在…的角度",
    "connection": "名词 + にすれば / にしてみれば / にしたら",
    "desc": "表示<b>换位思考</b>，“如果站在那个人的立场来看的话，应该是……的心情吧”。",
    "examples": [
      {
        "jp": "<b><ruby>犬<rt>いぬ</rt></ruby><span style='color:#d64045'>にしてみれば</span>、<ruby>飼<rt>か</rt></ruby>い<ruby>主<rt>ぬし</rt></ruby>が<ruby>神様<rt>かみさま</rt></ruby>のように<ruby>見<rt>み</rt></ruby>えるだろう。</b>",
        "cn": "在狗看来，主人大概就像神一样吧。"
      }
    ],
    "related": []
},
{
    "id": 84,
    "title": "～までのことだ",
    "romaji": "madenokotoda",
    "kana": "までのことだ",
    "tags": "决心 解决方法 轻松",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課 / 第8課",
    "meaning": "只好… / 也没什么大不了的 / 只是…",
    "connection": "动词辞书形 / 动词た形 + までのことだ",
    "desc": "包含两种语感：<br>1. 搭配辞书形，表示<b>“如果方法A不行，顶多就是做B罢了（没什么大不了的）”</b>，表现出做好了某种觉悟。<br>2. 搭配た形，表示<b>“我只是……而已（并没有什么深意）”</b>，用于解释自己的行为。",
    "examples": [
      {
        "jp": "<b><ruby>父<rt>ちち</rt></ruby>が<ruby>反対<rt>はんたい</rt></ruby>するなら、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>る<span style='color:#d64045'>までのことだ</span>。</b>",
        "cn": "如果父亲反对，那我只好离家出走（也没什么大不了的）。"
      },
      {
        "jp": "<b><ruby>聞<rt>き</rt></ruby>かれたから<ruby>答<rt>こた</rt></ruby>えた<span style='color:#d64045'>までのことだ</span>。</b>",
        "cn": "因为你问了，我只是回答而已（没别的意思）。"
      }
    ],
    "related": []
},
{
    "id": 85,
    "title": "～といったらない",
    "romaji": "toittaranai",
    "kana": "といったらない",
    "tags": "程度 极端 难以言喻",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "…得没法说 / …之极 / 极其…",
    "connection": "名词 / い形 / な形 + といったらない",
    "desc": "表示<b>程度极高，无法用语言表达</b>。既可以用于<b>积极</b>的赞美（美极了），也可以用于<b>消极</b>的抱怨（烦透了）。口语中常简略为「～といったら」。",
    "examples": [
      {
        "jp": "<b><ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>山<rt>さん</rt></ruby>の<ruby>頂<rt>ちょう</rt></ruby><ruby>上<rt>じょう</rt></ruby>から<ruby>見<rt>み</rt></ruby>た<ruby>景<rt>け</rt></ruby><ruby>色<rt>しき</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさ<span style='color:#d64045'>といったらない</span>。</b>",
        "cn": "从富士山顶看到的景色，真是美得没法形容。"
      }
    ],
    "related": [73]
},
{
    "id": 86,
    "title": "～（よ）うにも～ない",
    "romaji": "ounimonai",
    "kana": "（よ）うにも～ない",
    "tags": "愿望 困难 无法实现",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "想…也…不了",
    "connection": "动词意志形 + にも + 动词可能形否定 / 动词否定形",
    "desc": "表示<b>“虽然很想做某事，但由于某种客观原因或身体原因而做不到”</b>。前后通常使用同一个动词。",
    "examples": [
      {
        "jp": "<b><ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>し<span style='color:#d64045'>ようにも</span>、<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>がなくて<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>でき<span style='color:#d64045'>ない</span>。</b>",
        "cn": "我就算想联系，因为没有电话也联系不上。"
      }
    ],
    "related": [67]
},
{
    "id": 87,
    "title": "～まくる",
    "romaji": "makuru",
    "kana": "まくる",
    "tags": "反复 猛烈 粗俗",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "拼命… / 一味地… / 胡乱…",
    "connection": "动词ます形（去掉ます） + まくる",
    "desc": "表示<b>“不顾一切地、反复地、猛烈地做某事”</b>。通常带有一种<b>粗鲁、充满活力或失去控制</b>的语感。",
    "examples": [
      {
        "jp": "<b>ストレスがたまって、<ruby>昨<rt>ゆう</rt></ruby><ruby>晩<rt>べ</rt></ruby>は<ruby>食<rt>た</rt></ruby>べ<span style='color:#d64045'>まくった</span>。</b>",
        "cn": "压力积攒太多，昨晚我胡吃海塞了一顿。"
      }
    ],
    "related": []
},
{
    "id": 88,
    "title": "～にしたところで",
    "romaji": "nishitatokorode",
    "kana": "にしたところで",
    "tags": "让步 立场 逆接",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "即使是… / 即使站在…的角度",
    "connection": "名词 + にしたところで",
    "desc": "表示<b>“即使是那个人（通常是立场不同的人或专家），结果也是一样的（无奈、否定）”</b>。相当于“即使站在……的立场上”。",
    "examples": [
      {
        "jp": "<b><ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby><span style='color:#d64045'>にしたところで</span>、この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>を<ruby>解<rt>と</rt></ruby>決するのは<ruby>難<rt>むずか</rt></ruby>しい。</b>",
        "cn": "即使是专家，要解决这个问题也很难。"
      }
    ],
    "related": [79],
    "compareWith": [79]
},
{
    "id": 89,
    "title": "～てみせる",
    "romaji": "temiseru",
    "kana": "てみせる",
    "tags": "决心 意志 示范",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第7課",
    "meaning": "一定要…（给你看） / 做…给…看",
    "connection": "动词て形 + みせる",
    "desc": "主要有两种用法：<br>1. 表示<b>强烈的决心</b>，“一定要做成某事让别人看看（以此证明自己）”。<br>2. 实际做动作给对方看（示范）。",
    "examples": [
      {
        "jp": "<b><ruby>今<rt>こん</rt></ruby><ruby>度<rt>ど</rt></ruby>こそ<ruby>必<rt>かなら</rt></ruby>ず<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>し<span style='color:#d64045'>てみせます</span>。</b>",
        "cn": "下次我一定要合格给你看（以此雪耻/证明）。"
      }
    ],
    "related": []
},
{
    "id": 90,
    "title": "～つ～つ",
    "romaji": "tsutsu",
    "kana": "つつ",
    "tags": "动作 反复 对比 惯用语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "时而…时而… / 一会儿…一会儿…",
    "connection": "动词ます形（去掉ます） + つ + 动词ます形（去掉ます） + つ",
    "desc": "表示<b>两个相反的动作交替进行</b>。多以<b>惯用表达</b>使用，常见搭配有：<br>・「<b><ruby>行<rt>い</rt></ruby>きつ<ruby>戻<rt>もど</rt></ruby>りつ</b>」（走来走去/徘徊）<br>・「<b><ruby>浮<rt>う</rt></ruby>きつ<ruby>沈<rt>しず</rt></ruby>みつ</b>」（浮浮沉沉/起起落落）<br>・「<b><ruby>押<rt>お</rt></ruby>しつ<ruby>押<rt>お</rt></ruby>されつ</b>」（推推搡搡/互不相让）",
    "examples": [
      {
        "jp": "<b>マラソンは、<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<ruby>抜<rt>ぬ</rt></ruby>き<span style='color:#d64045'>つ</span><ruby>抜<rt>ぬ</rt></ruby>かれ<span style='color:#d64045'>つ</span>の<ruby>激<rt>はげ</rt></ruby>しい<ruby>争<rt>あらそ</rt></ruby>いとなった。</b>",
        "cn": "马拉松比赛直到最后都呈现出你追我赶（一会儿超人，一会儿被超）的激烈竞争局面。"
      }
    ],
    "related": []
},
{
    "id": 91,
    "title": "～ともなく",
    "romaji": "tomonaku",
    "kana": "ともなく",
    "tags": "无意识 不确定 模糊",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "无意中… / 不知…",
    "connection": "动词辞书形 + ともなく / 疑问词 + ともなく",
    "desc": "有两种用法：<br>1. 表示<b>无意识地、漫不经心地</b>做某动作（如听、看）。<br>2. 接疑问词（谁、哪里），表示<b>不确定</b>，“不知从哪……”、“不知是谁……”。",
    "examples": [
      {
        "jp": "<b>テレビを<ruby>見<rt>み</rt></ruby>る<span style='color:#d64045'>ともなく</span><ruby>見<rt>み</rt></ruby>ていたら、<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>が<ruby>出<rt>で</rt></ruby>ていてびっくりした。</b>",
        "cn": "我漫不经心地看着电视，忽然发现朋友上电视了，吓了一跳。"
      },
      {
        "jp": "<b>どこから<span style='color:#d64045'>ともなく</span>、いい<ruby>匂<rt>にお</rt></ruby>いがしてきた。</b>",
        "cn": "不知从哪里飘来了一股香味。"
      }
    ],
    "related": []
},
{
    "id": 92,
    "title": "～べく",
    "romaji": "beku",
    "kana": "べく",
    "tags": "目的 意志 硬文章",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "为了… / 想要…",
    "connection": "动词辞书形 + べく （※する→すべく / するべく）",
    "desc": "表示<b>目的</b>。是一种<b>生硬的书面语</b>，意为“为了实现某种强烈的意愿而行动”。前后主语必须一致，后项不能是请求或命令。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>医<rt>い</rt></ruby><ruby>師<rt>し</rt></ruby>になる<span style='color:#d64045'>べく</span>、<ruby>猛<rt>もう</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>している。</b>",
        "cn": "他为了成为医生，正在拼命学习。"
      }
    ],
    "related": []
},
{
    "id": 93,
    "title": "～てからというもの",
    "romaji": "tekaratoiumono",
    "kana": "てからというもの",
    "tags": "变化 契机 持续",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "自从…以后（就一直…）",
    "connection": "动词て形 + からというもの",
    "desc": "表示<b>“自从以此为契机，发生了某种巨大的变化，且该状态一直持续至今”</b>。不用于近期发生的事，强调<b>长期的变化</b>。",
    "examples": [
      {
        "jp": "<b><ruby>娘<rt>むすめ</rt></ruby>が<ruby>帰<rt>かえ</rt></ruby>ってき<span style='color:#d64045'>てからというもの</span>、<ruby>年<rt>とし</rt></ruby><ruby>老<rt>お</rt></ruby>いた<ruby>父<rt>ちち</rt></ruby>は<ruby>見<rt>み</rt></ruby><ruby>違<rt>ちが</rt></ruby>えるほど<ruby>元<rt>げん</rt></ruby><ruby>気<rt>き</rt></ruby>になった。</b>",
        "cn": "自从女儿回来后，年迈的父亲精神焕发，判若两人。"
      }
    ],
    "related": [94]
},
{
    "id": 94,
    "title": "～というもの",
    "romaji": "toiumono",
    "kana": "というもの",
    "tags": "期间 强调 长度",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "长达… / …以来",
    "connection": "名词（时间） + というもの",
    "desc": "接在表示时间的词后，<b>强调该期间很长</b>，或者在这段长期间内<b>一直持续</b>某种状态（多为负面或令人感叹的状态）。",
    "examples": [
      {
        "jp": "<b>ここ1<ruby>ヶ<rt>か</rt></ruby><ruby>月<rt>げつ</rt></ruby><span style='color:#d64045'>というもの</span>、<ruby>忙<rt>いそが</rt></ruby>しくてゆっくり<ruby>休<rt>やす</rt></ruby>む<ruby>暇<rt>ひま</rt></ruby>もない。</b>",
        "cn": "这一个月以来，忙得连休息的时间都没有。"
      }
    ],
    "related": [93]
},
{
    "id": 95,
    "title": "～ながらに / ～ながらの",
    "romaji": "nagarani",
    "kana": "ながらに",
    "tags": "状态 保持 惯用语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "保持…的状态 / 原原本本…",
    "connection": "名词 / 动词ます形（去掉ます） + ながらに（して）",
    "desc": "表示<b>维持某种状态不变</b>。常配合特定词汇使用，如「<b><ruby>生<rt>う</rt></ruby>まれながらに</b>」（天生/生来）、「<b><ruby>居<rt>い</rt></ruby>ながらに</b>」（足不出户）、「<b><ruby>涙<rt>なみだ</rt></ruby>ながらに</b>」（流着泪）。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は、<ruby>生<rt>う</rt></ruby>まれ<span style='color:#d64045'>ながらに</span><ruby>優<rt>すぐ</rt></ruby>れた<ruby>音<rt>おん</rt></ruby><ruby>感<rt>かん</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていた。</b>",
        "cn": "他天生就拥有出色的乐感。"
      }
    ],
    "related": []
},
{
    "id": 96,
    "title": "～をものともせず",
    "romaji": "womonotomosezu",
    "kana": "をものともせず",
    "tags": "克服 勇敢 赞扬",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "不顾… / 无视…（困难）",
    "connection": "名词 + をものともせず（に）",
    "desc": "表示<b>不把困难、危险或障碍当回事</b>，勇敢地行动。带有<b>赞赏、表扬</b>的语气。不用于描述自己的行为。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>らは<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>批判<rt>ひはん</rt></ruby><span style='color:#d64045'>をものともせず</span>、<ruby>愛<rt>あい</rt></ruby>を<ruby>貫<rt>つらぬ</rt></ruby>いた。</b>",
        "cn": "他们不顾周围的批评，坚持了自己的爱情。"
      }
    ],
    "related": []
},
{
    "id": 97,
    "title": "～かたわら",
    "romaji": "katawara",
    "kana": "かたわら",
    "tags": "同时 兼职 副业",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "一边…一边… / 在从事…的同时",
    "connection": "名词 + の / 动词辞书形 + かたわら",
    "desc": "表示<b>在从事本职工作或主要活动的同时，还兼做其他社会活动或副业</b>。强调长期的并存，而不是瞬间的动作（区别于「ながら」）。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>会社<rt>かいしゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>としての<ruby>仕事<rt>しごと</rt></ruby>をする<span style='color:#d64045'>かたわら</span>、<ruby>小説<rt>しょうせつ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いている。</b>",
        "cn": "他一边做着公司职员的工作，一边写小说。"
      }
    ],
    "related": []
},
{
    "id": 98,
    "title": "～めく",
    "romaji": "meku",
    "kana": "めく",
    "tags": "样态 感觉 气息 接尾词",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "带有…气息 / 有…样子",
    "connection": "名词 + めく",
    "desc": "接尾词，接在名词后将其<b>动词化</b>（按五段动词活用）。表示<b>“感觉带有某种气息或倾向”</b>。<br>・修饰名词时用「<b>～めいた</b>」（如：<ruby>春<rt>はる</rt></ruby>めいた<ruby>風<rt>かぜ</rt></ruby>）。<br>・中顿或结句时用「<b>～めいて</b> / <b>～めく</b>」（如：<ruby>秋<rt>あき</rt></ruby>めいてきた）。",
    "examples": [
      {
        "jp": "<b><ruby>日<rt>ひ</rt></ruby><ruby>差<rt>ざ</rt></ruby>しが<ruby>明<rt>あか</rt></ruby>るくなり、<ruby>風<rt>かぜ</rt></ruby>も<ruby>春<rt>はる</rt></ruby><span style='color:#d64045'>めいて</span>きた。</b>",
        "cn": "阳光变明媚了，风也带有了春天的气息。"
      },
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>皮<rt>ひ</rt></ruby><ruby>肉<rt>にく</rt></ruby><span style='color:#d64045'>めいた</span><ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>をした。</b>",
        "cn": "他的说法带有一点讽刺的意味。"
      }
    ],
    "related": []
},
{
    "id": 99,
    "title": "～や否や",
    "romaji": "yainaya",
    "kana": "やいなや",
    "tags": "同时 紧接着 瞬间",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "刚一…就…",
    "connection": "动词辞书形 + や否や",
    "desc": "表示<b>前项动作发生的瞬间，紧接着发生了后项动作</b>。几乎是同时发生。后项多描述<b>突发的事实</b>，不能接意志、命令或请求。",
    "examples": [
      {
        "jp": "<b><ruby>空<rt>そら</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>くなる<span style='color:#d64045'>や否や</span>、<ruby>激<rt>はげ</rt></ruby>しい<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>り<ruby>出<rt>だ</rt></ruby>した。</b>",
        "cn": "天刚一变黑，紧接着就下起了暴雨。"
      }
    ],
    "related": [32]
},
{
    "id": 100,
    "title": "～ごとき",
    "romaji": "gotoki",
    "kana": "ごとき",
    "tags": "蔑视 谦逊 评价 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "…之流 / …这种人 / 像…那样的（身份低微的）",
    "connection": "名词 + ごとき",
    "desc": "接在名词（通常是人称代词或人名）之后，用于强调<b>程度低、价值低</b>。<br>1. 用于<b>自己</b>时，表示<b>自谦</b>（像我这种人、鄙人）。<br>2. 用于<b>他人</b>时，表示<b>轻视、蔑视</b>（你这种家伙、…之流）。",
    "examples": [
      {
        "jp": "<b><ruby>私<rt>わたし</rt></ruby><span style='color:#d64045'>ごとき</span><ruby>若<rt>じゃく</rt></ruby><ruby>輩<rt>はい</rt></ruby><ruby>者<rt>もの</rt></ruby>が、このような<ruby>賞<rt>しょう</rt></ruby>をいただき<ruby>恐<rt>きょう</rt></ruby><ruby>縮<rt>しゅく</rt></ruby>です。</b>",
        "cn": "像我这样的晚辈能获得此奖，实在惶恐。"
      }
    ],
    "related": [101]
},
{
    "id": 101,
    "title": "～ごとし / ～ごとき / ～ごとく",
    "romaji": "gotoshi / gotoki / gotoku",
    "kana": "ごとし / ごとき / ごとく",
    "tags": "比喻 样态 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "像…一样（的/地） / 如同…",
    "connection": "名词 + の + （ごとし/ごとき/ごとく） / 动词普通形 + （が） + （ごとし/ごとき/ごとく）",
    "desc": "比喻用法，相当于「～ようだ」。属于<b>古雅的书面语</b>。根据在句中的位置变形：<br>1. <b>～ごとし</b>：用于<b>结句</b>（＝ようだ）。<br>2. <b>～ごとき</b>：修饰<b>名词</b>（＝ような）。<br>3. <b>～ごとく</b>：修饰<b>动词/形容词</b>（＝のように）。",
    "examples": [
      {
        "jp": "<b><ruby>光<rt>こう</rt></ruby><ruby>陰<rt>いん</rt></ruby><ruby>矢<rt>や</rt></ruby>の<span style='color:#d64045'>ごとし</span>。</b>",
        "cn": "光阴似箭。"
      },
      {
        "jp": "<b><ruby>流<rt>なが</rt></ruby>れる<ruby>水<rt>みず</rt></ruby>の<span style='color:#d64045'>ごとく</span>、<ruby>月<rt>ひ</rt></ruby><ruby>日<rt>ひ</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎ<ruby>去<rt>さ</rt></ruby>った。</b>",
        "cn": "岁月如流水般流逝了。"
      }
    ],
    "related": [100]
},
{
    "id": 102,
    "title": "～かと思いきや",
    "romaji": "katomoikiya",
    "kana": "かとおもいきや",
    "tags": "逆接 意外 惊讶",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "原以为…却… / 没想到…",
    "connection": "名词 / 动词普通形 / い形 / な形 + （だ） + かと思いきや",
    "desc": "表示<b>“原本以为肯定是A，结果却是B”</b>。表达说话人对结果与预期不同感到<b>惊讶、意外</b>。",
    "examples": [
      {
        "jp": "<b><ruby>宝<rt>たから</rt></ruby>くじが<ruby>当<rt>あ</rt></ruby>たった<span style='color:#d64045'>かと思いきや</span>、<ruby>番<rt>ばん</rt></ruby><ruby>号<rt>ごう</rt></ruby>を<ruby>見<rt>み</rt></ruby><ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>えていた。</b>",
        "cn": "原以为中了彩票，结果是看错号码了。"
      }
    ],
    "related": []
},
{
    "id": 103,
    "title": "～んがため（に）",
    "romaji": "ngatame",
    "kana": "んがため",
    "tags": "目的 意志 努力 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "为了…",
    "connection": "动词ない形（去掉ない） + んがため（に） （※する→せんがため）",
    "desc": "表示<b>“为了实现某种重大的目的”</b>而采取行动。属于<b>庄重的书面语</b>。前后主语必须一致。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>信<rt>しん</rt></ruby><ruby>念<rt>ねん</rt></ruby>を<ruby>貫<rt>つらぬ</rt></ruby>か<span style='color:#d64045'>んがため</span>、<ruby>戦<rt>たたか</rt></ruby>い<ruby>続<rt>つづ</rt></ruby>けた。</b>",
        "cn": "他为了贯彻自己的信念，持续战斗着。"
      }
    ],
    "related": [92]
},
{
    "id": 104,
    "title": "～だに",
    "romaji": "dani",
    "kana": "だに",
    "tags": "程度 强调 想象",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "光是…就…",
    "connection": "动词辞书形 / 名词 + だに",
    "desc": "表示<b>“光是做前项（主要指心理活动）就已经很…了”</b>。常与「<b><ruby>想<rt>そう</rt></ruby><ruby>像<rt>ぞう</rt></ruby></b>」（想象）、「<b><ruby>考<rt>かんが</rt></ruby>える</b>」（思考）、「<b><ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す</b>」（回忆）搭配。后项多接“可怕、恐慌、心痛”等表示感情的词。",
    "examples": [
      {
        "jp": "<b>あんな<ruby>高<rt>たか</rt></ruby>い<ruby>所<rt>ところ</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>るなんて、<ruby>想<rt>そう</rt></ruby><ruby>像<rt>ぞう</rt></ruby>する<span style='color:#d64045'>だに</span><ruby>恐<rt>おそ</rt></ruby>ろしい。</b>",
        "cn": "要爬到那么高的地方，光是想想都觉得可怕。"
      }
    ],
    "related": [105]
},
{
    "id": 105,
    "title": "～だにしなかった",
    "romaji": "danishinakatta",
    "kana": "だにしなかった",
    "tags": "否定 程度 强调",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "连…都不… / 甚至没…",
    "connection": "名词 + だに + しない / しなかった",
    "desc": "表示<b>“连……这样最起码的/轻微的动作都没做”</b>。强调完全没有预料到或完全没有反应。常搭配「<b><ruby>夢<rt>ゆめ</rt></ruby>にだに</b>」（连做梦都…）、「<b><ruby>微<rt>び</rt></ruby><ruby>動<rt>どう</rt></ruby>だに</b>」（纹丝不动）。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>が<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>だとは、<ruby>夢<rt>ゆめ</rt></ruby>に<span style='color:#d64045'>だに</span><ruby>思<rt>おも</rt></ruby>わなかった。</b>",
        "cn": "我做梦都没想到他竟然是犯人。"
      }
    ],
    "related": [104]
},
{
    "id": 106,
    "title": "～かねる",
    "romaji": "kaneru",
    "kana": "かねる",
    "tags": "困难 委婉 拒绝 心理",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "难以… / 不便… / 不能…",
    "connection": "动词ます形（去掉ます） + かねる",
    "desc": "表示<b>“因为某种心理抵触、社会立场或客观情势，很难那样做”</b>。常用于<b>委婉的拒绝</b>（难以答应、不知晓）或 表示<b>心理上无法忍受</b>（看不下去）。",
    "examples": [
      {
        "jp": "<b><ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ございませんが、ご<ruby>要<rt>よう</rt></ruby><ruby>望<rt>ぼう</rt></ruby>には<ruby>応<rt>おう</rt></ruby>じ<span style='color:#d64045'>かねます</span>。</b>",
        "cn": "非常抱歉，我们难以满足您的要求。"
      },
      {
        "jp": "<b><ruby>親<rt>おや</rt></ruby>の<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>を<ruby>見<rt>み</rt></ruby><span style='color:#d64045'>かねて</span>、<ruby>口<rt>くち</rt></ruby>を<ruby>出<rt>だ</rt></ruby>した。</b>",
        "cn": "实在看不惯父母的态度，我插嘴了。"
      }
    ],
    "related": []
},
{
    "id": 107,
    "title": "～を限りに / ～限りで",
    "romaji": "wokagirini / kagiride",
    "kana": "をかぎりに / かぎりで",
    "tags": "期限 结束 极限",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第8課",
    "meaning": "以…为界（结束） / 到…为止",
    "connection": "名词（时间） + を限りに / 限りで",
    "desc": "表示<b>时间的截止点</b>。意为“以……为最后一次，结束（不再继续）”。之后通常接“不再……”、“放弃……”、“分手……”等表示结束或决心的内容。",
    "examples": [
      {
        "jp": "<b><ruby>本<rt>ほん</rt></ruby><ruby>日<rt>じつ</rt></ruby><span style='color:#d64045'>を<ruby>限<rt>かぎ</rt></ruby>りに</span>、<ruby>禁<rt>きん</rt></ruby><ruby>煙<rt>えん</rt></ruby>します。</b>",
        "cn": "我决定以今天为界，彻底戒烟。"
      },
      {
        "jp": "<b><ruby>今<rt>こん</rt></ruby><ruby>月<rt>げつ</rt></ruby><span style='color:#d64045'><ruby>限<rt>かぎ</rt></ruby>りで</span>、この<ruby>店<rt>みせ</rt></ruby>は<ruby>閉<rt>へい</rt></ruby><ruby>店<rt>てん</rt></ruby>します。</b>",
        "cn": "本店将于本月底关门停业。"
      }
    ],
    "related": [14,72]
},
{
    "id": 108,
    "title": "～からある / ～からする / ～からいる",
    "romaji": "karaaru / karasuru / kariaru",
    "kana": "からある / からする / からいる",
    "tags": "数量 强调 程度",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第9課",
    "meaning": "足有… / 竟有…之多 / （价格）高达…",
    "connection": "名词（数量词） + からある / からする / からいる",
    "desc": "接在数量词后，<b>强调数量之多、程度之高</b>。<br>1. <b>～からある</b>：用于<b>重量、距离、大小、高度</b>等（如：100キロからある）。<br>2. <b>～からする</b>：用于<b>价格</b>（如：100万円からする）。<br>3. <b>～からいる</b>：用于<b>人数</b>（如：10万人からいる）。",
    "examples": [
      {
        "jp": "<b>ここには、<ruby>100<rt>ひゃっ</rt></ruby><ruby>キ<rt></rt></ruby><ruby>ロ<rt></rt></ruby><span style='color:#d64045'>からある</span><ruby>石<rt>いし</rt></ruby>がゴロゴロしている。</b>",
        "cn": "这里到处都是足有100公斤重的大石头。"
      },
      {
        "jp": "<b>この<ruby>デ<rt></rt></ruby><ruby>モ<rt></rt></ruby>には、<ruby>10<rt>じゅう</rt></ruby><ruby>万<rt>まん</rt></ruby><ruby>人<rt>にん</rt></ruby><span style='color:#d64045'>からいる</span><ruby>人<rt>ひと</rt></ruby>々が<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby>した。</b>",
        "cn": "足有10万人参加了这次示威游行。"
      }
    ],
    "related": []
},
{
    "id": 109,
    "title": "～にかかわる",
    "romaji": "nikakawaru",
    "kana": "にかかわる",
    "tags": "重大 影响 后果",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第9課",
    "meaning": "关系到… / 影响… / 涉及…",
    "connection": "名词 + にかかわる",
    "desc": "表示<b>“对……产生重大影响”</b>。前项通常是表示<b>名誉、生命、存亡</b>等重大内容的名词。意为“这不仅仅是小事，而是关系到……的大事”。",
    "examples": [
      {
        "jp": "<b><ruby>人<rt>ひと</rt></ruby>の<ruby>命<rt>いのち</rt></ruby><span style='color:#d64045'>にかかわる</span><ruby>問題<rt>もんだい</rt></ruby>だから、よく<ruby>考<rt>かんが</rt></ruby>えなければならない。</b>",
        "cn": "这是关系到人命的问题，必须深思熟虑。"
      }
    ],
    "related": []
},
{
    "id": 110,
    "title": "～にあって",
    "romaji": "niatte",
    "kana": "にあって",
    "tags": "状况 处境 逆接 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第9課",
    "meaning": "处于… / 在…情况下",
    "connection": "名词 + にあって",
    "desc": "表示<b>“处于某种特殊的状况、时期或场所”</b>。常用于：<br>1. 描述某人在特殊环境下（如逆境、非常时期）依然表现出色。<br>2. 强调“正因为是在这种情况下”。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>戦<rt>せん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>という<ruby>困難<rt>こんなん</rt></ruby>な<ruby>状況<rt>じょうきょう</rt></ruby><span style='color:#d64045'>にあって</span>、<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けた。</b>",
        "cn": "他身处战争时期的困难状况，依然坚持学习。"
      }
    ],
    "related": []
},
{
    "id": 111,
    "title": "～ようによっては",
    "romaji": "youniyottewa",
    "kana": "ようによっては",
    "tags": "方法 观点 可能性 改变",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第9課",
    "meaning": "取决于… / 根据…的不同而…",
    "connection": "动词ます形（去掉ます） + ようによっては",
    "desc": "表示<b>“做法、想法不同，结果也会随之改变”</b>。意为“全看怎么做/怎么想”。常搭配「<b><ruby>考<rt>かんが</rt></ruby>えようによっては</b>」（看你怎么想）。",
    "examples": [
      {
        "jp": "<b>この<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>も、<ruby>考<rt>かんが</rt></ruby>え<span style='color:#d64045'>ようによっては</span>いい<ruby>経験<rt>けいけん</rt></ruby>になる。</b>",
        "cn": "这次失败，看你怎么想，也可以变成一次宝贵的经验。"
      }
    ],
    "related": []
},
{
    "id": 112,
    "title": "～べからず",
    "romaji": "bekarazu",
    "kana": "べからず",
    "tags": "禁止 告示 正式",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "禁止… / 不许… / …不得…",
    "connection": "动词辞书形 + べからず",
    "desc": "表示<b>“禁止做某事”</b>。是比较古老的书面语，现代日语中主要用于<b>告示牌、标语</b>或注意事项中，语气生硬强烈。",
    "examples": [
      {
        "jp": "<b><ruby>芝<rt>しば</rt></ruby><ruby>生<rt>ふ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る<span style='color:#d64045'>べからず</span>。</b>",
        "cn": "严禁践踏草坪（禁止进入草坪）。"
      }
    ],
    "related": []
},
{
    "id": 113,
    "title": "～のみ",
    "romaji": "nomi",
    "kana": "のみ",
    "tags": "限定 唯一 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "只… / 仅…",
    "connection": "名词 / 动词普通形 / い形 / な形（である） + のみ",
    "desc": "表示<b>限定</b>，相当于「だけ」（仅限限定用法）。属于<b>正式的书面语</b>。",
    "examples": [
      {
        "jp": "<b><ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby><ruby>策<rt>さく</rt></ruby>は、これ<span style='color:#d64045'>のみ</span>です。</b>",
        "cn": "解决办法仅此一个。"
      }
    ],
    "related": []
},
{
    "id": 114,
    "title": "～がゆえ（に）",
    "romaji": "gayue",
    "kana": "がゆえ",
    "tags": "原因 理由 文言",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "因为…所以… / 由于…",
    "connection": "动词普通形 / い形 / な形（である） / 名词（である） + がゆえ（に）",
    "desc": "表示<b>原因、理由</b>。属于<b>古雅的书面语</b>。常用于说明“正因为有某种特殊的理由，才导致了某种结果（通常是消极的或必然的）”。",
    "examples": [
      {
        "jp": "<b><ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby><ruby>人<rt>じん</rt></ruby>であるが<span style='color:#d64045'>ゆえに</span>、<ruby>悩<rt>なや</rt></ruby>みも<ruby>多<rt>おお</rt></ruby>い。</b>",
        "cn": "正因为是名人，烦恼也多。"
      }
    ],
    "related": []
},
{
    "id": 115,
    "title": "～と相まって",
    "romaji": "toaimatte",
    "kana": "とあいまって",
    "tags": "结合 相互作用 效果",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "与…相辅相成 / 加上… / 与…结合",
    "connection": "名词 + と相まって",
    "desc": "表示<b>“A与B相互结合、相互作用”</b>，从而产生了更强烈的（通常是好的）效果。",
    "examples": [
      {
        "jp": "<b><ruby>青<rt>あお</rt></ruby>い<ruby>空<rt>そら</rt></ruby>と<ruby>紅<rt>こう</rt></ruby><ruby>葉<rt>よう</rt></ruby><span style='color:#d64045'>と相まって</span>、<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしい<ruby>眺<rt>なが</rt></ruby>めだ。</b>",
        "cn": "蓝天与红叶相互映衬，景色绝美。"
      }
    ],
    "related": []
},
{
    "id": 116,
    "title": "～にかたくない",
    "romaji": "nikatakunai",
    "kana": "にかたくない",
    "tags": "推测 容易 惯用语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "不难… / 很容易…",
    "connection": "动词辞书形 / 名词（する） + にかたくない",
    "desc": "表示<b>“很容易就能做到”</b>。几乎仅限于与「<b><ruby>想<rt>そう</rt></ruby><ruby>像<rt>ぞう</rt></ruby></b>」（想象）、「<b><ruby>察<rt>さっ</rt></ruby>する</b>」（察觉）等表示心理推测的词搭配使用。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>がどんなに<ruby>悲<rt>かな</rt></ruby>しんでいるか、<ruby>想<rt>そう</rt></ruby><ruby>像<rt>ぞう</rt></ruby><span style='color:#d64045'>にかたくない</span>。</b>",
        "cn": "不难想象他有多么悲伤。"
      }
    ],
    "related": []
},
{
    "id": 117,
    "title": "～（として）あるまじき",
    "romaji": "toshitearumajiki",
    "kana": "としてあるまじき",
    "tags": "批评 资格 应该",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "作为…不该有的 / …不该…",
    "connection": "名词 + （として）あるまじき + 名词",
    "desc": "表示<b>“考虑到其身份、立场或职业，绝不能允许或不该有的（行为/言论）”</b>。修饰后项名词。带有强烈的<b>批评、指责</b>语气。",
    "examples": [
      {
        "jp": "<b>それは、<ruby>教<rt>きょう</rt></ruby><ruby>師<rt>し</rt></ruby><span style='color:#d64045'>としてあるまじき</span><ruby>行<rt>こう</rt></ruby><ruby>為<rt>い</rt></ruby>だ。</b>",
        "cn": "那是作为教师不该有的行为（有失教师体统的行为）。"
      }
    ],
    "related": [71]
},
{
    "id": 118,
    "title": "～ずにはすまない",
    "romaji": "zuniwasumanai",
    "kana": "ずにはすまない",
    "tags": "义务 必然 责任 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "不…不行 / 肯定会… / 不…就完不了",
    "connection": "动词ない形（去掉ない） + ずにはすまない （※する→せず）",
    "desc": "表示<b>“如果不做某事，事情就无法解决/社会常识上过不去/心里过意不去”</b>。",
    "examples": [
      {
        "jp": "<b><ruby>人<rt>ひと</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>を<ruby>傷<rt>きず</rt></ruby>つけてしまったなら、<ruby>謝<rt>あやま</rt></ruby>ら<span style='color:#d64045'>ずにはすまない</span>。</b>",
        "cn": "既然伤害了别人的心，不道歉是过不去的。"
      }
    ],
    "related": []
},
{
    "id": 119,
    "title": "～でなくてなんだろう",
    "romaji": "denakutenandarou",
    "kana": "でなくてなんだろう",
    "tags": "强调 断定 夸张 情感",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "不是…又是什么呢 / 这正是… / 这简直就是…",
    "connection": "名词 + でなくてなんだろう（か）",
    "desc": "以反问的形式表示<b>强烈的断定</b>,常用于<b>夸张地强调</b>某种感情或评价（如：爱、奇迹、宿命等）。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>らの<ruby>再<rt>さい</rt></ruby><ruby>会<rt>かい</rt></ruby>は、<ruby>運<rt>うん</rt></ruby><ruby>命<rt>めい</rt></ruby><span style='color:#d64045'>でなくてなんだろう</span>。</b>",
        "cn": "他们的重逢，不是命运又是什么呢（这简直就是命运的安排）。"
      }
    ],
    "related": []
},
{
    "id": 120,
    "title": "～極まりない / ～極まる",
    "romaji": "kiwamarinai / kiwamaru",
    "kana": "きわまりない / きわまる",
    "tags": "程度 极端 评价 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "极其… / …之极",
    "connection": "な形（去掉な） + 極まりない / 極まる",
    "desc": "表示<b>程度达到了极限</b>,多用于<b>负面评价</b>（如：<ruby>無<rt>ぶ</rt></ruby><ruby>礼<rt>れい</rt></ruby>、<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>、<ruby>残<rt>ざん</rt></ruby><ruby>念<rt>ねん</rt></ruby>）。「極まりない」在现代更常用。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>の<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>は、<ruby>失<rt>しつ</rt></ruby><ruby>礼<rt>れい</rt></ruby><span style='color:#d64045'>極まりない</span>。（＝失礼極まる）</b>",
        "cn": "他的态度极其无礼。"
      }
    ],
    "related": [121]
},
{
    "id": 121,
    "title": "～の極み",
    "romaji": "nokiwami",
    "kana": "のきわみ",
    "tags": "程度 极致 惯用语 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "…之至 / 极其…",
    "connection": "名词 + の極み",
    "desc": "表示<b>处于某种状态的最高点</b>。常与特定的名词搭配，如「<b><ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby></b>」（奢侈）、「<b><ruby>感<rt>かん</rt></ruby><ruby>激<rt>げき</rt></ruby></b>」（感激）、「<b><ruby>痛<rt>つう</rt></ruby><ruby>恨<rt>こん</rt></ruby></b>」（痛恨）。带有感叹的语气。",
    "examples": [
      {
        "jp": "<b><ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>一<rt>いち</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>級<rt>きゅう</rt></ruby>ホテルに<ruby>泊<rt>と</rt></ruby>まるなんて、<ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby><span style='color:#d64045'>の<ruby>極<rt>きわ</rt></ruby>み</span>だ。</b>",
        "cn": "能住进世界第一的高级酒店，真是奢侈之至。"
      }
    ],
    "related": [69, 120]
},
{
    "id": 122,
    "title": "～を禁じ得ない",
    "romaji": "wokinji'enai",
    "kana": "をきんじえない",
    "tags": "情感 抑制不住 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "禁不住… / 无法抑制…",
    "connection": "名词 + を禁じ得ない",
    "desc": "表示<b>“无法抑制某种自然涌现的感情”</b>。常接在「<b><ruby>涙<rt>なみだ</rt></ruby></b>」（眼泪）、「<b><ruby>怒<rt>いか</rt></ruby>り</b>」（愤怒）、「<b><ruby>同<rt>どう</rt></ruby><ruby>情<rt>じょう</rt></ruby></b>」（同情）等表示情感的名词后。属于<b>书面语</b>。",
    "examples": [
      {
        "jp": "<b><ruby>被<rt>ひ</rt></ruby><ruby>災<rt>さい</rt></ruby><ruby>地<rt>ち</rt></ruby>の<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、<ruby>涙<rt>なみだ</rt></ruby><span style='color:#d64045'>を<ruby>禁<rt>きん</rt></ruby>じ<ruby>得<rt>え</rt></ruby>なかった</span>。</b>",
        "cn": "看到灾区的情况，我禁不住流下了眼泪。"
      }
    ],
    "related": []
},
{
    "id": 123,
    "title": "～に足る",
    "romaji": "nitaru",
    "kana": "にたる",
    "tags": "評価 価値 資格 書面語",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "值得… / 足以…",
    "connection": "動詞辞書形 / 名詞 + に足る",
    "desc": "表示<b>“具备做某事的充分价值或资格”</b>。常用于<b>积极的评价</b>，如“值得信赖”、“值得尊敬”。<br>否定形式为「<b>～に<ruby>足<rt>た</rt></ruby>らない</b>」（不值一提/微不足道）。",
    "examples": [
      {
        "jp": "<b><ruby>インターネット<rt></rt></ruby>には、<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>する<span style='color:#d64045'>に足る</span><ruby>情報<rt>じょうほう</rt></ruby>ばかりがあるわけではない。</b>",
        "cn": "互联网上并不全都是值得信赖的信息。"
      }
    ],
    "related": []
},
{
    "id": 124,
    "title": "～べくもない",
    "romaji": "bekumonai",
    "kana": "べくもない",
    "tags": "不可能 否定 绝望 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "根本无法… / …这种事想都别想",
    "connection": "动词辞书形 + べくもない",
    "desc": "由古语助动词「べし」（表示可能/当然）演变而来。表示<b>“根据当前状况来看，想要做某事是绝对不可能的”</b>。它不仅仅是“做不到”，更强调<b>“根本没有做某事的余地或理由”</b>。通常仅限于接在「<b><ruby>知<rt>し</rt></ruby>る</b>」（知晓）、「<b><ruby>望<rt>のぞ</rt></ruby>む</b>」（指望）、「<b><ruby>疑<rt>うたが</rt></ruby>う</b>」（怀疑）等少数表示心理活动的动词之后。",
    "examples": [
      {
        "jp": "<b><ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>の<ruby>病<rt>びょう</rt></ruby><ruby>状<rt>じょう</rt></ruby>は<ruby>悪<rt>わる</rt></ruby>く、<ruby>回復<rt>かいふく</rt></ruby>を<ruby>望<rt>のぞ</rt></ruby>む<span style='color:#d64045'>べくもない</span>。</b>",
        "cn": "祖父病况恶化，想要康复是根本没有指望的。"
      }
    ],
    "related": [92]
},
{
    "id": 125,
    "title": "～なくして（は）",
    "romaji": "nakushite",
    "kana": "なくして",
    "tags": "条件 否定 仮定 書面語",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "如果没有…（就无法）…",
    "connection": "名詞 + なくして（は）",
    "desc": "表示<b>“如果没有前项，后项就不可能实现”</b>。后项接<b>否定</b>或消极的内容（如：できない、無理だ）。属于<b>郑重的书面语</b>。",
    "examples": [
      {
        "jp": "<b><ruby>努力<rt>どりょく</rt></ruby><span style='color:#d64045'>なくして</span>、<ruby>成功<rt>せいこう</rt></ruby>はない。</b>",
        "cn": "没有努力，就没有成功。"
      }
    ],
    "related": [126, 127]
},
{
    "id": 126,
    "title": "～なしに / ～ことなしに",
    "romaji": "nashini / kotonashini",
    "kana": "なしに / ことなしに",
    "tags": "状态 条件 否定 书面语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "没有… / 在不…的情况下",
    "connection": "名词 + なしに / 动词辞书形 + ことなしに",
    "desc": "表示<b>在缺乏前项事物或动作的状态下</b>进行后项行为。属于<b>正式的书面语</b>。主要可分为两种用法：<br>1. <b>样态</b>：描述在某种状态下做某事。<br>2. <b>条件</b>：后项接否定表达，表示前项是后项成立的必要条件。",
    "examples": [
      {
        "jp": "<b><ruby>予告<rt>よこく</rt></ruby><span style='color:#d64045'>なしに</span><ruby>計画<rt>けいかく</rt></ruby>が<ruby>変更<rt>へんこう</rt></ruby>される<ruby>場合<rt>ばあい</rt></ruby>があります。</b>",
        "cn": "计划可能会在没有预先通知的情况下发生变更。"
      },
      {
        "jp": "<b><ruby>過去<rt>かこ</rt></ruby>の<ruby>事例<rt>じれい</rt></ruby>を<ruby>見<rt>み</rt></ruby>る<span style='color:#d64045'>ことなしに</span>、<ruby>未来<rt>みらい</rt></ruby>は<ruby>語<rt>かた</rt></ruby>れない。</b>",
        "cn": "如果不回顾过去的案例，就无法谈论未来。"
      }
    ],
    "related": [125, 127]
},
{
    "id": 127,
    "title": "～なしで / ～なしでは",
    "romaji": "nashide / nashidewa",
    "kana": "なしで / なしでは",
    "tags": "状态 条件 否定 口语",
    "level": "N1",
    "book": "Try! N1 文法",
    "lesson": "第10課",
    "meaning": "没有… / 如果没有…",
    "connection": "名词 + なしで / なしでは",
    "desc": "表示<b>在缺乏前项事物的状态下</b>进行后项行为，或后项无法成立。属于<b>口语或一般用语</b>。<br>1. <b>～なしで</b>：表示单纯的“没有……”（样态）。<br>2. <b>～なしでは</b>：表示<b>必要的条件</b>。后项接<b>否定</b>或消极表达（如：やっていけない、無理だ）。",
    "examples": [
      {
        "jp": "<b><ruby>辞書<rt>じしょ</rt></ruby><span style='color:#d64045'>なしで</span>、<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む。</b>",
        "cn": "不查字典读报纸。"
      },
      {
        "jp": "<b>あなた<span style='color:#d64045'>なしでは</span>、<ruby>生<rt>い</rt></ruby>きていけない。</b>",
        "cn": "如果没有你，我活不下去。"
      }
    ],
    "related": [125, 126]
}
// ... 粘贴你的全部数据 ...
        ];
        // #endregion

        // #region Try! N2 Data
        const tryN2Data = [
        {
    "id": 128,
    "title": "～につき",
    "romaji": "nitsuki",
    "kana": "につき",
    "tags": "原因 理由 お知らせ 硬い表現",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "因… / 由于…",
    "connection": "N＋につき",
    "desc": "主要用于<b>书面告示、通知</b>等正式文体中。常用于解释某种<b>临时性状态</b>（如暂停营业、施工中、禁止入内等）的理由。语气生硬，不用于日常口语说明。",
    "examples": [
      {
        "jp": "<b><ruby>清<rt>せい</rt></ruby><ruby>掃<rt>そう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby><span style='color:#d64045'>につき</span>、<ruby>足<rt>あし</rt></ruby><ruby>元<rt>もと</rt></ruby>にご<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>ください。</b>",
        "cn": "因正在清扫中，请注意脚下。"
      }
    ],
    "related": []
},
{
    "id": 129,
    "title": "～を問わず",
    "romaji": "wotowazu",
    "kana": "をとわず",
    "tags": "无关 包含 全面",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "不问… / 不管… / 无论…",
    "connection": "N＋を問わず",
    "desc": "表示前项的条件（如年龄、性别、国籍等）<b>不会成为后项的限制因素</b>。强调<b>范围的全面性</b>，即“所有情况都包含在内”。前项常接表示对立、范围或种类的词。",
    "examples": [
      {
        "jp": "<b>このスポーツセンターは、<ruby>年<rt>ねん</rt></ruby><ruby>齢<rt>れい</rt></ruby><span style='color:#d64045'>を<ruby>問<rt>と</rt></ruby>わず</span>、どなたでも<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby>できます。</b>",
        "cn": "这家体育中心，无论年龄大小，谁都可以使用。"
      }
    ],
    "related": [132]
},
{
    "id": 130,
    "title": "～に限り / ～に限る",
    "romaji": "nikagiri / nikagiru",
    "kana": "にかぎり / にかぎる",
    "tags": "限定 例外 优待",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "仅限… / 只有…",
    "connection": "N＋に限って／に限り／に限る",
    "desc": "常用于<b>公开告示或宣传语</b>中。强调将前项作为<b>特殊的例外</b>处理，或赋予其<b>某种特权/优待</b>（如打折、免费）。",
    "examples": [
      {
        "jp": "<b><ruby>本<rt>ほん</rt></ruby><ruby>日<rt>じつ</rt></ruby><span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>り</span>、<ruby>全<rt>ぜん</rt></ruby><ruby>品<rt>ぴん</rt></ruby><ruby>半<rt>はん</rt></ruby><ruby>額<rt>がく</rt></ruby>です。</b>",
        "cn": "仅限今天，全场半价。"
      }
    ],
    "related": [113]
},
{
    "id": 131,
    "title": "～に応じ / ～に応じて",
    "romaji": "niooji / nioojite",
    "kana": "におうじ / におうじて",
    "tags": "对应 变化 适应",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "根据… / 按照… / 视…而定",
    "connection": "N＋に応じて／に応じ／に応じたN",
    "desc": "表示后项的行为或状态是<b>为了适应前项的变化而调整的</b>。前项通常是具有幅度的变量（如体力、年龄、预算、情况等），后项则是与之相匹配的对应措施。",
    "examples": [
      {
        "jp": "<b>ご<ruby>予<rt>よ</rt></ruby><ruby>算<rt>さん</rt></ruby><span style='color:#d64045'>に<ruby>応<rt>おう</rt></ruby>じて</span>、メニューをお<ruby>選<rt>えら</rt></ruby>びいただけます。</b>",
        "cn": "您可以根据预算来选择菜单。"
      }
    ],
    "related": []
},
{
    "id": 132,
    "title": "～にかかわらず",
    "romaji": "nikakawarazu",
    "kana": "にかかわらず",
    "tags": "无关 无论 包含",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "不管… / 无论…",
    "connection": "N ／VるVない・Ｖるかどうか＋にかかわらず",
    "desc": "强调<b>后项的成立或执行不受前项条件的左右</b>。前项通常是会对结果产生影响的因素（如天气好坏、距离远近、意愿有无等），表示“即使在这种情况下，结果也不变”。",
    "examples": [
      {
        "jp": "<b><ruby>天<rt>てん</rt></ruby><ruby>候<rt>こう</rt></ruby><span style='color:#d64045'>にかかわらず</span>、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>います。</b>",
        "cn": "不管天气如何，比赛都将进行。"
      }
    ],
    "related": [129]
},
{
    "id": 133,
    "title": "～において / ～における",
    "romaji": "nioite",
    "kana": "において",
    "tags": "场所 时间 领域 书面语",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "在… / 于…",
    "connection": "N＋において／におけるN",
    "desc": "助词「で」的<b>郑重书面语形式</b>。用于在正式场合指出动作发生的<b>背景、舞台、时间或抽象领域</b>。",
    "examples": [
      {
        "jp": "<b><ruby>入学<rt>にゅうがく</rt></ruby><ruby>式<rt>しき</rt></ruby>は、<ruby>講堂<rt>こうどう</rt></ruby><span style='color:#d64045'>において</span><ruby>行<rt>おこな</rt></ruby>われます。</b>",
        "cn": "入学仪式将在礼堂举行。"
      }
    ],
    "related": []
},
{
    "id": 134,
    "title": "～際（に）",
    "romaji": "sai(ni)",
    "kana": "さい（に）",
    "tags": "时间 场合 书面语",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "…的时候 / …之际",
    "connection": "Vる・Vた／Nの＋際（に）",
    "desc": "名词「時（とき）」的<b>郑重书面语</b>。常用于<b>公文、指南、说明书</b>中，提示特定的时间点或场合，后项多接续建议、请求或注意事项。",
    "examples": [
      {
        "jp": "<b>カードを<ruby>紛<rt>ふん</rt></ruby><ruby>失<rt>しつ</rt></ruby>した<span style='color:#d64045'><ruby>際<rt>さい</rt></ruby></span>は、すぐにご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>ください。</b>",
        "cn": "丢失卡片时，请立即联系我们。"
      }
    ],
    "related": [135]
},
{
    "id": 135,
    "title": "～に際して",
    "romaji": "nisaishite",
    "kana": "にさいして",
    "tags": "时间 准备 契机 书面语",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "当…之际 / 在…之前",
    "connection": "N + に際して / Vる + に際して",
    "desc": "用于<b>面临特殊的、重大的或一次性的事项</b>（如开幕、签约、致辞）时。带有“为了这即将发生的大事，做好……”的<b>准备或致辞</b>语感。多指未来的动作。",
    "examples": [
      {
        "jp": "<b>ご<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby><span style='color:#d64045'>に<ruby>際<rt>さい</rt></ruby>して</span>、<ruby>注意<rt>ちゅうい</rt></ruby><ruby>事項<rt>じこう</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。</b>",
        "cn": "在使用之前，请确认注意事项。"
      }
    ],
    "related": [134]
},
{
    "id": 136,
    "title": "～こと",
    "romaji": "koto",
    "kana": "こと",
    "tags": "命令 规则 禁止 书面语",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第1課",
    "meaning": "请… / 必须… / 不得…",
    "connection": "Vる・Vない／Nの＋こと",
    "desc": "<b>终助词</b>，用语句尾，来表示“要求,规定”等语气。常见于<b>学校守则、考试须知、社内规定</b>等正式场景。用于描述必须遵守的事项。",
    "examples": [
      {
        "jp": "<b><ruby>試験<rt>しけん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は<ruby>話<rt>はな</rt></ruby>さない<span style='color:#d64045'>こと</span>。</b>",
        "cn": "考试期间不得交谈。"
      }
    ],
    "related": [112]
},
{
      "id": 137,
      "title": "～以来",
      "romaji": "irai",
      "kana": "いらい",
      "tags": "起点 持续 状态",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "自从…以来（一直…）",
      "connection": "Vて／N＋以来",
      "desc": "指明某个过去的时间点或动作发生后，其引发的状态一直持续至今。后项必须是<b>持续性的状态或动作</b>，不能用于描述只发生过一次的瞬间动作，也不常用于描述不久前发生的事。",
      "examples": [
        {
          "jp": "<b><ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>て<span style='color:#d64045'>以来</span>、<ruby>毎日<rt>まいにち</rt></ruby><ruby>家族<rt>かぞく</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をしている。</b>",
          "cn": "自从来到日本之后，我每天都给家人打电话。"
        }
      ],
      "related": [93]
  },
  {
      "id": 138,
      "title": "～をはじめ（として）",
      "romaji": "wohajime",
      "kana": "をはじめ（として）",
      "tags": "举例 代表 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "以…为首 / 以及…",
      "connection": "N＋をはじめ／をはじめとして／をはじめとするN",
      "desc": "提出一个最具代表性的主要例子，以此暗示“除此之外同类的还有很多”。多用于<b>正式的书面语或公开场合的致辞</b>中。",
      "examples": [
        {
          "jp": "<b><ruby>社長<rt>しゃちょう</rt></ruby><span style='color:#d64045'>をはじめ</span>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>皆様<rt>みなさま</rt></ruby>には<ruby>大変<rt>たいへん</rt></ruby>お<ruby>世話<rt>せわ</rt></ruby>になりました。</b>",
          "cn": "承蒙以社长为首的全体员工的多方关照。"
        }
      ],
      "related": []
  },
  {
      "id": 139,
      "title": "～のもとで / ～のもとに",
      "romaji": "nomotode / nomotoni",
      "kana": "のもとで / のもとに",
      "tags": "环境 指导 影响",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "在…的指导下 / 在…的影响下",
      "connection": "N＋の＋もとで／もとに",
      "desc": "表示动作进行的背景、环境或影响源。<br>1. <b>～のもとで</b>：多接在表示人的名词后，强调在某人的指导、管理或保护下。<br>2. <b>～のもとに</b>：多接在状况、名义、条件等名词后，强调在某种特定情况下。",
      "examples": [
        {
          "jp": "<b><ruby>厳<rt>きび</rt></ruby>しいコーチの<ruby>指導<rt>しどう</rt></ruby><span style='color:#d64045'>のもとで</span>、チームは<ruby>全国<rt>ぜんこく</rt></ruby><ruby>大会<rt>たいかい</rt></ruby>に<ruby>出場<rt>しゅつじょう</rt></ruby>した。</b>",
          "cn": "在严厉教练的指导下，队伍参加了全国大赛。"
        }
      ],
      "related": []
  },
  {
      "id": 140,
      "title": "～はもとより",
      "romaji": "wamotoyori",
      "kana": "はもとより",
      "tags": "理所当然 递进 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "…自不必说 / 不仅…也…",
      "connection": "N＋はもとより",
      "desc": "提示一个<b>理所当然的、基准性的</b>事项，然后引出其他程度更高或范围更广的事项。属于「～はもちろん」的<b>更为郑重的书面语</b>表达，常用于演讲或公文。",
      "examples": [
        {
          "jp": "<b>この<ruby>店<rt>みせ</rt></ruby>は<ruby>味<rt>あじ</rt></ruby><span style='color:#d64045'>はもとより</span>、サービスも<ruby>素晴<rt>すば</rt></ruby>らしい。</b>",
          "cn": "这家店味道好自不必说，服务也非常棒。"
        }
      ],
      "related": []
  },
  {
    "id": 141,
    "title": "～ものだ",
    "romaji": "monoda",
    "kana": "ものだ",
    "tags": "常识 评价 感叹 回忆",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第2課",
    "meaning": "本来就是…的 / 真…啊 / 过去经常…",
    "connection": "Vる・Vない・A１・A２な + ものだ　※回忆用法：Vた + ものだ",
    "desc": "主要有三种核心语感：<br>1. <b>常识/真理</b>：讲述社会普遍认同的道理、人的本性或事物的本来面貌。<br>2. <b>感叹</b>：对某种状态或事物发出发自内心的强烈感慨。<br>3. <b>回忆</b>：怀念过去经常发生的事情或习惯。此用法必须接动词た形，常与「よく」搭配。",
    "examples": [
      {
        "jp": "<b><ruby>地震<rt>じしん</rt></ruby>の<ruby>時<rt>とき</rt></ruby>は、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>慌<rt>あわ</rt></ruby>てる<span style='color:#d64045'>ものだ</span>。</b>",
        "cn": "【常识】发生地震时，任何人都会慌张的。"
      },
      {
        "jp": "<b><ruby>時間<rt>じかん</rt></ruby>の<ruby>経<rt>た</rt></ruby>つのは<ruby>早<rt>はや</rt></ruby>い<span style='color:#d64045'>ものだ</span>。</b>",
        "cn": "【感叹】时间过得真快啊。"
      },
      {
        "jp": "<b><ruby>子<rt>こ</rt></ruby>どもの<ruby>頃<rt>ころ</rt></ruby>、よくこの<ruby>川<rt>かわ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>んだ<span style='color:#d64045'>ものだ</span>。</b>",
        "cn": "【回忆】小时候，我经常在这条河里玩耍。"
      }
    ],
    "related": []
},
  {
      "id": 142,
      "title": "～上で",
      "romaji": "uede",
      "kana": "うえで",
      "tags": "前提 顺序 方面 范围",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課 / 第12課",
      "meaning": "在…之后（再） / 在…方面",
      "connection": "Vる＋上で／上でのN",
      "desc": "根据接续不同，有两种完全不同的用法：<br>1. <b>接た形</b>：表示先后顺序，即“在完成前项动作的基础/前提之上，再谨慎地做后项”。<br>2. <b>接辞书形</b>：表示“在做某事的过程中/范围内”，后项多接需要注意的重点、困难或建议。",
      "examples": [
        {
          "jp": "<b><ruby>家族<rt>かぞく</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>した<span style='color:#d64045'>上で</span>、お<ruby>返事<rt>へんじ</rt></ruby>いたします。</b>",
          "cn": "【先后顺序】在与家人商量之后，再给您回复。"
        },
        {
          "jp": "<b><ruby>家<rt>いえ</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<span style='color:#d64045'>上で</span>、<ruby>立地<rt>りっち</rt></ruby>は<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>条件<rt>じょうけん</rt></ruby>だ。</b>",
          "cn": "【方面范围】在买房方面，地理位置是一个重要条件。"
        }
      ],
      "related": []
  },
  {
      "id": 143,
      "title": "～ながら（も）",
      "romaji": "nagara",
      "kana": "ながら（も）",
      "tags": "逆接 转折 状态",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "虽然…但是… / 尽管…却…",
      "connection": "Vます／イAい／ナA／N＋ながら（も）",
      "desc": "表示逆接。常接在表示状态或心理的词后面，表达“<b>虽然处于某种不足或受限的状态，但实际上却与之相反</b>”的意思。",
      "examples": [
        {
          "jp": "<b><ruby>狭<rt>せま</rt></ruby>い<span style='color:#d64045'>ながらも</span>、<ruby>楽<rt>たの</rt></ruby>しい<ruby>我<rt>わ</rt></ruby>が<ruby>家<rt>や</rt></ruby>だ。</b>",
          "cn": "虽然很小，但却是我快乐的家。"
        }
      ],
      "related": [95]
  },
  {
      "id": 144,
      "title": "～を～として / ～を～とする / ～を～とした",
      "romaji": "wotoshte / wotosuru / wotoshita",
      "kana": "をとして / をとする / をとした",
      "tags": "目的 立场 资格",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "把…作为… / 以…为…",
      "connection": "N1 + を + N2 + として / とする / とした",
      "desc": "表示<b>主观上</b>将前项事物认定、设定或当作后项的身份、资格、目的、中心等来看待和处理。当作为定语修饰后续名词时，主要使用「<b>～を～とした＋名词</b>」的形式。",
      "examples": [
        {
          "jp": "<b><ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby><span style='color:#d64045'>を</span><ruby>主<rt>しゅ</rt></ruby><ruby>題<rt>だい</rt></ruby><span style='color:#d64045'>とした</span><ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く。</b>",
          "cn": "写一部以环境问题为主题的小说。"
        }
      ],
      "related": []
  },
  {
      "id": 145,
      "title": "～をきっかけに（して） / ～をきっかけとして",
      "romaji": "wokikkakeni",
      "kana": "をきっかけに",
      "tags": "契机 转变 动因",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "以…为契机 / 借…的机会",
      "connection": "N + をきっかけに（して） / をきっかけとして",
      "desc": "表示某件<b>偶然的具体事件</b>成为了引发后项新变化、新发展或新行动的<b>直接动因或导火索</b>。后项通常伴随着积极的或方向性的明显改变。",
      "examples": [
        {
          "jp": "<b><ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby><span style='color:#d64045'>をきっかけに</span>、お<ruby>酒<rt>さけ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めた。</b>",
          "cn": "以生病为契机，把酒戒了。"
        }
      ],
      "related": [146]
  },
  {
      "id": 146,
      "title": "～を契機に（して） / ～を契機として",
      "romaji": "wokeikini",
      "kana": "をけいきに",
      "tags": "契机 书面语 转变",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "以…为转机 / 以…为契机",
      "connection": "N + を契機に（して） / を契機として",
      "desc": "属于生硬的<b>正式书面语</b>。表示某件事成为了引发后项新变化或新发展的<b>直接动因或导火索</b>。多用于描述历史事件、社会现象、企业发展等<b>宏大且具有深远意义的转折点</b>，较少用于个人的日常琐事。",
      "examples": [
        {
          "jp": "<b>その<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby><span style='color:#d64045'>を<ruby>契<rt>けい</rt></ruby><ruby>機<rt>き</rt></ruby>に</span>、<ruby>法<rt>ほう</rt></ruby><ruby>律<rt>りつ</rt></ruby>が<ruby>変<rt>か</rt></ruby>えられた。</b>",
          "cn": "以那起事件为转机，法律被修改了。"
        }
      ],
      "related": [145]
  },
  {
      "id": 147,
      "title": "～からには",
      "romaji": "karaniwa",
      "kana": "からには",
      "tags": "觉悟 义务 决心",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "既然…就…",
      "connection": "普通形（ナAである／Nである）＋からには （※动词部分使用た形的情况较多）",
      "desc": "表示在前项已经成为既定事实、或自己已经下定决心的前提下，<b>理所当然地产生了后续的责任或义务</b>。后项常接续表示<b>决心、义务、劝告、命令或强烈推断</b>的表达。",
      "examples": [
        {
          "jp": "<b><ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>した<span style='color:#d64045'>からには</span>、<ruby>守<rt>まも</rt></ruby>らなければならない。</b>",
          "cn": "既然约好了，就必须遵守。"
        }
      ],
      "related": [148, 149]
  },
  {
      "id": 148,
      "title": "～以上（は）",
      "romaji": "ijouwa",
      "kana": "いじょう（は）",
      "tags": "觉悟 义务 决心 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "既然…就…",
      "connection": "普通形（ナAである／Nである）＋以上（は）",
      "desc": "语感偏向<b>正式的书面语</b>。表示在前项条件（多为接受任务、身处某种地位等）已经确立或成为既定事实的基础之上，理所当然地产生了后续的义务。后项常接续表示<b>决心、劝告、不可推卸的责任</b>等表达。",
      "examples": [
        {
          "jp": "<b><ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた<span style='color:#d64045'>以上は</span>、<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>までやり<ruby>遂<rt>と</rt></ruby>げる。</b>",
          "cn": "既然接受了，就要坚持做到最后。"
        }
      ],
      "related": [147, 149]
  },
  {
      "id": 149,
      "title": "～上は",
      "romaji": "uewa",
      "kana": "うえは",
      "tags": "觉悟 义务 决心 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "既然…就…",
      "connection": "Vる／Vた＋上は",
      "desc": "属于<b>极为生硬、严谨的古板书面语</b>表达。强调既然前项已经成了不容更改的重大事实，那么理所当然要采取后续的行动。后项常伴随表示<b>破釜沉舟般的强烈觉悟、义务或决心</b>的表达。",
      "examples": [
        {
          "jp": "<b>こうなった<span style='color:#d64045'>上は</span>、<ruby>戦<rt>たたか</rt></ruby>うしかない。</b>",
          "cn": "既然到了这个地步，就只有战斗了。"
        }
      ],
      "related": [147, 148]
  },
  {
      "id": 150,
      "title": "～わけではない / ～わけではありません",
      "romaji": "wakedehanai",
      "kana": "わけではない / わけではありません",
      "tags": "部分否定 委婉 辩解",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "并不是… / 并非…",
      "connection": "普通形（ナAな／Nの）＋わけではない",
      "desc": "用于对根据常理容易得出的推论、或针对某种极端的说法进行<b>部分否定</b>。强调“虽然呈现出某种倾向，但不能据此得出绝对的结论”。常与「<b>いつも</b>」「<b>全部</b>」「<b>必ずしも</b>」等副词搭配呼应。",
      "examples": [
        {
          "jp": "<b>お<ruby>肉<rt>にく</rt></ruby>が<ruby>嫌<rt>きら</rt></ruby>いな<span style='color:#d64045'>わけではありません</span>が、あまり<ruby>食<rt>た</rt></ruby>べません。</b>",
          "cn": "我并不是讨厌吃肉，只是不太常吃。"
        }
      ],
      "related": [],
      "compareWith": [156]
  },
  {
      "id": 151,
      "title": "～ことなく",
      "romaji": "kotonaku",
      "kana": "ことなく",
      "tags": "状态 否定 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "不…（而）… / 没…就…",
      "connection": "Vる＋ことなく",
      "desc": "表示在理应发生或预期会发生前项动作的状态下，前项并未发生，而<b>直接保持该状态</b>进行了后项动作。属于<b>客观陈述事实的书面语表达</b>。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>休<rt>やす</rt></ruby>む<span style='color:#d64045'>ことなく</span><ruby>働<rt>はたら</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けた。</b>",
          "cn": "他一天都没休息，持续工作着。"
        }
      ],
      "related": []
  },
  {
      "id": 152,
      "title": "～にもかかわらず",
      "romaji": "nimokakawarazu",
      "kana": "にもかかわらず",
      "tags": "逆接 意外 不满",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第2課",
      "meaning": "尽管…却… / 虽然…但是…",
      "connection": "N／普通形（ナAである／Nである）＋にもかかわらず",
      "desc": "表示后项出现了与由前项状况理应预想到的结果<b>完全相反、或不相符</b>的情况。该句型不仅陈述逆接事实，还常带有说话人<b>惊讶、意外、不满或责怪</b>的浓烈感情色彩。",
      "examples": [
        {
          "jp": "<b><ruby>悪<rt>あく</rt></ruby><ruby>天<rt>てん</rt></ruby><ruby>候<rt>こう</rt></ruby><span style='color:#d64045'>にもかかわらず</span>、<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まった。</b>",
          "cn": "尽管天气恶劣，还是聚集了很多人。"
        }
      ],
      "related": []
  },
  {
      "id": 153,
      "title": "～として",
      "romaji": "toshite",
      "kana": "として",
      "tags": "立场 资格 名义",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "作为… / 以…的身份",
      "connection": "N＋として／としてのN",
      "desc": "表示动作主体的<b>立场、资格、身份或名义</b>。强调以何种特定的角度或社会角色来进行后项的动作或判断。",
      "examples": [
        {
          "jp": "<b><ruby>留<rt>りゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby><span style='color:#d64045'>として</span>、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。</b>",
          "cn": "作为留学生来到了日本。"
        }
      ],
      "related": []
  },
  {
      "id": 154,
      "title": "～限り（は）",
      "romaji": "kagiri",
      "kana": "かぎり",
      "tags": "条件 期间 范围",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "只要…就…",
      "connection": "普通形（非过去式）（ナＡな・ナＡである／Ｎである）＋限り（は）",
      "desc": "表示在<b>维持前项状态的期间或范围内</b>，后项的情况也会一直持续。前项通常为某种持续的状态，后项则是不发生变化的某种状况。",
      "examples": [
        {
          "jp": "<b><ruby>働<rt>はたら</rt></ruby>ける<span style='color:#d64045'><ruby>限<rt>かぎ</rt></ruby>り</span>、この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けたい。</b>",
          "cn": "只要还能工作，就想继续做这份工作。"
        }
      ],
      "related": []
  },
  {
      "id": 155,
      "title": "～ざるを得ない",
      "romaji": "zaruwoenai",
      "kana": "ざるをえない",
      "tags": "无奈 强制 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "不得不… / 只好…",
      "connection": "Vない＋ざるを得ない（する→せざるを得ない）",
      "desc": "表示虽然主观上不想这样做，但由于<b>外部状况、客观条件或社会常理的压力</b>，除了这样做之外别无选择。带有强烈的<b>无奈、违心</b>的语感，属于书面语表达。",
      "examples": [
        {
          "jp": "<b><ruby>熱<rt>ねつ</rt></ruby>があるので、<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>は<ruby>欠<rt>けっ</rt></ruby><ruby>席<rt>せき</rt></ruby><span style='color:#d64045'>せざるを<ruby>得<rt>え</rt></ruby>ない</span>。</b>",
          "cn": "因为发烧了，所以酒会不得不缺席。"
        }
      ],
      "related": []
  },
  {
      "id": 156,
      "title": "～というものではない / ～というものでもありません",
      "romaji": "toiumonodehanai",
      "kana": "というものではない",
      "tags": "部分否定 绝对 观点",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "并不是… / 不能说…",
      "connection": "普通形 + というものではない",
      "desc": "用于否定某种被普遍认为理所当然的绝对化观点。强调<b>“虽然可能存在这种倾向，但并不能一概而论地断定就是这样”</b>。常与「<b>必（かなら）ずしも</b>」「<b>だからといって</b>」等副词呼应使用。",
      "examples": [
        {
          "jp": "<b>お<ruby>金<rt>かね</rt></ruby>があれば<ruby>幸<rt>しあわ</rt></ruby>せだ<span style='color:#d64045'>というものではない</span>。</b>",
          "cn": "并不是说有钱就一定幸福。"
        }
      ],
      "related": [],
      "compareWith": [150]
  },
  {
      "id": 157,
      "title": "～はともかく（として）",
      "romaji": "watomokaku",
      "kana": "はともかく",
      "tags": "搁置 优先 对比",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "…暂且不谈 / …姑且不论",
      "connection": "N + はともかく（として）",
      "desc": "表示将前项事物<b>暂时搁置、不予考虑</b>，而将焦点完全集中在认为<b>更重要、更优先</b>的后项事物上。暗示前项并非当下的重点。",
      "examples": [
        {
          "jp": "<b><ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby><span style='color:#d64045'>はともかく</span>、デザインがとても<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>った。</b>",
          "cn": "价格暂且不谈，设计我非常喜欢。"
        }
      ],
      "related": []
  },
  {
      "id": 158,
      "title": "～かねない",
      "romaji": "kanenai",
      "kana": "かねない",
      "tags": "可能性 负面 推测",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "有可能… / 说不定会…",
      "connection": "Vます（去掉ます）＋かねない",
      "desc": "表示如果不加以注意或改变现状，就<b>很有可能导致某种负面的、糟糕的结果</b>。含有说话人强烈的<b>担忧和警告</b>意味。",
      "examples": [
        {
          "jp": "<b>あんなにスピードを<ruby>出<rt>だ</rt></ruby>したら、<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こし<span style='color:#d64045'>かねない</span>。</b>",
          "cn": "开得那么快，有可能会引起事故的。"
        }
      ],
      "related": []
  },
  {
      "id": 159,
      "title": "～というより（か）",
      "romaji": "toiuyori",
      "kana": "というより",
      "tags": "比较 评价 纠正",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "与其说…不如说…",
      "connection": "普通形（ナA／N）＋というより",
      "desc": "用于对某人或某事物的特征进行评价时，认为<b>前项的说法不够准确，而后项的说法更为贴切、合适</b>。常用于修正自己的表达或重新定义某种状况。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>怒<rt>おこ</rt></ruby>っている<span style='color:#d64045'>というより</span>、<ruby>悲<rt>かな</rt></ruby>しんでいるようだ。</b>",
          "cn": "与其说他在生气，不如说他似乎很悲伤。"
        }
      ],
      "related": []
  },
  {
      "id": 160,
      "title": "～てはいられない",
      "romaji": "tehawairarenai",
      "kana": "てはいられない",
      "tags": "心理 紧迫 无法维持",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第3課",
      "meaning": "不能再…了 / 没时间…了",
      "connection": "Vて／Nで＋（は）いられない",
      "desc": "表示由于<b>时间紧迫、心理上的焦急或客观状况的限制</b>，无法再继续维持当前的悠闲状态或动作。暗示必须立刻采取某种积极的行动去改变现状。",
      "examples": [
        {
          "jp": "<b>もうすぐ<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>だから、のんびり<ruby>遊<rt>あそ</rt></ruby>ん<span style='color:#d64045'>ではいられない</span>。</b>",
          "cn": "马上就要考试了，不能再悠闲地玩下去了。"
        }
      ],
      "related": []
  },
  {
      "id": 161,
      "title": "～つつ / ～つつも",
      "romaji": "tsutsu / tsutsumo",
      "kana": "つつ / つつも",
      "tags": "同时 逆接 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課 / 第12課",
      "meaning": "一边…一边… / 明明…却…",
      "connection": "Vます（去ます）＋つつ",
      "desc": "<b>书面语</b>。具体可以分为两种用法：<br>1. <b>表示动作同时进行</b>（一边…一边…）：主要用「<b>～つつ</b>」。表示在做前项动作的期间，同时进行后项的主要动作。<br>2. <b>表示逆接</b>（明明…却…）：通常用「<b>～つつ（も）</b>」。表示心里明明清楚某种状况，实际上却做出了相反的行为。前项多接「<ruby>知<rt>し</rt></ruby>る」「<ruby>思<rt>おも</rt></ruby>う」等表示心理活动的动词。",
      "examples": [
        {
          "jp": "<b><ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>のことを<ruby>考<rt>かんが</rt></ruby>え<span style='color:#d64045'>つつ</span>、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む。</b>",
          "cn": "【同时进行】一边思考着将来的事情，一边看书。"
        },
        {
          "jp": "<b><ruby>体<rt>からだ</rt></ruby>に<ruby>悪<rt>わる</rt></ruby>いと<ruby>知<rt>し</rt></ruby>り<span style='color:#d64045'>つつも</span>、タバコを<ruby>吸<rt>す</rt></ruby>ってしまう。</b>",
          "cn": "【逆接】明明知道对身体不好，却还是抽了烟。"
        }
      ],
      "related": []
  },
  {
      "id": 162,
      "title": "～にわたって / ～にわたり",
      "romaji": "niwatatte / niwatari",
      "kana": "にわたって / にわたり",
      "tags": "范围 期间 空间",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "历经… / 跨越… / 长达…",
      "connection": "N + にわたって / にわたり / にわたる + N",
      "desc": "表示某种状态、动作或影响跨越了<b>整个空间、时间、次数或领域</b>的广阔范围。后项常接续表示持续、重复发生或大范围波及的动作。属于<b>客观、正式的说明用语</b>。",
      "examples": [
        {
          "jp": "<b>３<ruby>日<rt>か</rt></ruby><ruby>間<rt>かん</rt></ruby><span style='color:#d64045'>にわたって</span>、<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>が<ruby>開<rt>ひら</rt></ruby>かれた。</b>",
          "cn": "会议历时三天（长达三天）召开。"
        }
      ],
      "related": []
  },
  {
      "id": 163,
      "title": "～から～にかけて",
      "romaji": "kara~nikakete",
      "kana": "から～にかけて",
      "tags": "范围 模糊 时间 空间",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "从…到…",
      "connection": "N + から + N + にかけて",
      "desc": "表示在<b>粗略的、没有明确界限的起点和终点</b>之间，某种状态或现象一直在断断续续地发生或持续存在。多用于描述天气、季节、地理位置等<b>空间和时间的模糊跨度</b>。",
      "examples": [
        {
          "jp": "<b><ruby>昨<rt>さく</rt></ruby><ruby>夜<rt>や</rt></ruby><span style='color:#d64045'>から</span><ruby>今<rt>け</rt></ruby><ruby>朝<rt>さ</rt></ruby><span style='color:#d64045'>にかけて</span>、<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>った。</b>",
          "cn": "从昨晚到今早，一直断断续续在下大雨。"
        }
      ],
      "related": []
  },
  {
      "id": 164,
      "title": "～にともない / ～にともなって",
      "romaji": "nitomonai / nitomonatte",
      "kana": "にともない / にともなって",
      "tags": "伴随 变化 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "随着… / 伴随…",
      "connection": "N＋にともなって／にともない／にともなうN",
      "desc": "属于<b>正式的书面或新闻报道用语</b>。表示后项事物是作为前项状态发生改变的<b>必然附带结果</b>而产生的。前项必须是表示大规模变化、社会动向或客观规律的词汇。",
      "examples": [
        {
          "jp": "<b><ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>の<ruby>減<rt>げん</rt></ruby><ruby>少<rt>しょう</rt></ruby><span style='color:#d64045'>にともない</span>、<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>が<ruby>閉<rt>へい</rt></ruby><ruby>鎖<rt>さ</rt></ruby>された。</b>",
          "cn": "随着人口的减少，学校被关闭了。"
        }
      ],
      "related": []
  },
  {
      "id": 165,
      "title": "～おそれがある / ～おそれがあります",
      "romaji": "osoregaaru",
      "kana": "おそれがある",
      "tags": "危险 推测 客观",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "恐怕会… / 有…的危险",
      "connection": "Vる・Vない／Nの＋おそれがある",
      "desc": "用于客观地表达某种<b>发生不好结果的可能性或危险性</b>。常用于<b>新闻报道、天气预报、警告说明</b>等郑重、客观传达信息的场合。不用于表达个人的主观担忧或私人性质的推测。",
      "examples": [
        {
          "jp": "<b><ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>による<ruby>土<rt>ど</rt></ruby><ruby>砂<rt>しゃ</rt></ruby><ruby>崩<rt>くず</rt></ruby>れの<span style='color:#d64045'>おそれがあります</span>。</b>",
          "cn": "有因大雨引发山体滑坡的危险。"
        }
      ],
      "related": []
  },
  {
      "id": 166,
      "title": "～とともに",
      "romaji": "totomoni",
      "kana": "とともに",
      "tags": "伴随 共同 同时变化",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "和…一起 / …的同时 / 随着…",
      "connection": "Vる／N＋とともに",
      "desc": "属于<b>书面语</b>。具体分为三种用法：<br>1. <b>共同/伴随</b>（和…一起）：前项多接人或组织，单纯表示共同做某事。<br>2. <b>同时发生/具备</b>（…的同时）：前项发生的同时，后项也立刻发生；或表示一个主体同时具备两种性质。<br>3. <b>按比例共同变化</b>（随着…）：前项必须接续表示“单向变化”的词汇（如：增加、发展、年老），表示随着前项的推进，后项也朝着同一个方向变化。",
      "examples": [
        {
          "jp": "<b><ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby><span style='color:#d64045'>とともに</span>、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>へ<ruby>来<rt>き</rt></ruby>た。</b>",
          "cn": "【共同/伴随】和家人一起去了日本。"
        },
        {
          "jp": "<b><ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>卒<rt>そつ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><span style='color:#d64045'>とともに</span>、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>た。</b>",
          "cn": "【同时发生】大学毕业的同时，离开了家。"
        },
        {
          "jp": "<b><ruby>年<rt>とし</rt></ruby>を<ruby>取<rt>と</rt></ruby>る<span style='color:#d64045'>とともに</span>、<ruby>体<rt>たい</rt></ruby><ruby>力<rt>りょく</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちる。</b>",
          "cn": "【按比例变化】随着年龄的增长，体力随之下降。"
        }
      ],
      "related": []
  },
  {
      "id": 167,
      "title": "～次第",
      "romaji": "shidai",
      "kana": "しだい",
      "tags": "条件 迅速 商务",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第4課",
      "meaning": "一…就…",
      "connection": "Vます（去ます）／N＋次第",
      "desc": "表示在前项动作<b>刚一完成或条件一具备的瞬间</b>，立刻着手进行后项的动作。后项多接续说话人的<b>意志、请求、命令或计划</b>。属于<b>正式的事务性用语</b>，常用于商务联络或正式告知。",
      "examples": [
        {
          "jp": "<b><ruby>詳<rt>しょう</rt></ruby><ruby>細<rt>さい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かり<span style='color:#d64045'><ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby></span>、ご<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>します。</b>",
          "cn": "详细情况一明了，就会马上与您联系。"
        }
      ],
      "related": []
  },
  {
      "id": 168,
      "title": "～きり / ～っきり",
      "romaji": "kiri / kkiri",
      "kana": "きり / っきり",
      "tags": "状态 持续 限定",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "就…（再没…） / 仅仅…",
      "connection": "Vた＋きり／きりのN",
      "desc": "具体含义为两种：<br>1. 做完某件事之后，<b>状态就一直停留在那里，再也没有发生变化</b>。多用于体现“某事没有后续”的含义。<br>2. 接在数量词或代词后面，表示<b>限定</b>，强调“仅限这些”。「っきり」属于<b>口语说法</b>。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>た<span style='color:#d64045'>きり</span>、<ruby>帰<rt>かえ</rt></ruby>ってこない。</b>",
          "cn": "【状态持续】他出了门之后，就再也没回来。"
        },
        {
          "jp": "<b><ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby><span style='color:#d64045'>っきり</span>で<ruby>話<rt>はな</rt></ruby>をしましょう。</b>",
          "cn": "【范围限定】就我们两个人谈谈吧。"
        }
      ],
      "related": []
  },
  {
      "id": 169,
      "title": "～どころじゃない / ～どころではない",
      "romaji": "dokorojanai / dokorodehanai",
      "kana": "どころじゃない / どころではない",
      "tags": "否定 状况 强烈",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "根本不是…的时候 / 哪有余力…",
      "connection": "Vる／N + どころじゃない / どころではない",
      "desc": "表示现在的状况实在太糟（比如太忙、太穷、太烦等），<b>根本没有心情、时间或者条件</b>去做某件事。表达一种“哪有空管那个啊”、“现在根本不是做这个的时候”的<b>强烈情绪</b>。",
      "examples": [
        {
          "jp": "<b><ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>どころじゃない</span>。</b>",
          "cn": "忙得不可开交，根本没空去旅行。"
        }
      ],
      "related": []
  },
  {
      "id": 170,
      "title": "～ものの",
      "romaji": "monono",
      "kana": "ものの",
      "tags": "逆接 事实 落差",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "虽然…但是…",
      "connection": "普通形（ナAな・ナAである／Nである） + ものの",
      "desc": "表示“承认前面的情况是<b>事实</b>，但后面的结果却<b>和想象的不一样</b>”。通常用来表达“虽然做了某件事，但结果并不理想”或者“虽然有这个条件，但并没有什么用”的<b>无奈感</b>。",
      "examples": [
        {
          "jp": "<b><ruby>新<rt>あたら</rt></ruby><ruby>しい</rt></ruby>パソコンを<ruby>買<rt>か</rt></ruby>った<span style='color:#d64045'>ものの</span>、<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がわからない。</b>",
          "cn": "虽然买了新电脑，但是不知道怎么用。"
        }
      ],
      "related": []
  },
  {
      "id": 171,
      "title": "～ことに（は）",
      "romaji": "kotonihwa",
      "kana": "ことに（は）",
      "tags": "情感 评价 前置",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "令人…的是",
      "connection": "Vた／イAい／ナAな＋ことに",
      "desc": "放在<b>句子的最开头</b>，用来强调说话人对接下来要说的事情的<b>强烈感情</b>。前面常接表示心情的词（比如高兴、遗憾、惊讶等）。",
      "examples": [
        {
          "jp": "<b><ruby>残<rt>ざん</rt></ruby><ruby>念<rt>ねん</rt></ruby>な<span style='color:#d64045'>ことに</span>、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けてしまった。</b>",
          "cn": "令人遗憾的是，比赛输了。"
        }
      ],
      "related": []
  },
  {
    "id": 172,
    "title": "～にしては",
    "romaji": "nishitehwa",
    "kana": "にしては",
    "tags": "评价 落差 标准",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第5課",
    "meaning": "就…而言却… / 作为…来说却…",
    "connection": "N／普通形（ナAである／Nである）＋にしては",
    "desc": "表示基于前项所提示的特定标准（如具体的年龄、资历、身份或数值），大众理应得出一个常识性的推论，但实际呈现出来的状态却与之存在<b>显著的落差</b>。多带有<b>意外感</b>或<b>惊讶的情绪</b>。",
    "examples": [
      {
        "jp": "<b><ruby>外<rt>がい</rt></ruby><ruby>国<rt>こく</rt></ruby><ruby>人<rt>じん</rt></ruby><span style='color:#d64045'>にしては</span>、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>だ。</b>",
        "cn": "作为一个外国人而言，日语说得真好。"
      }
    ],
    "related": [],
    "compareWith": [226]
},
  {
      "id": 173,
      "title": "～ことか / ～ことだろう",
      "romaji": "kotoka / kotodarou",
      "kana": "ことか / ことだろう",
      "tags": "感叹 程度 疑问词",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "多么…啊 / 不知…了多少次",
      "connection": "普通形（ナAな・ナAである／Nである）＋ことか / ことだろう",
      "desc": "用来表达非常<b>强烈的感叹</b>。常常和「どんなに（多么）」「どれほど（到底有多）」「何度（多少次）」等词语<b>搭配使用</b>，强调那种心情实在太深，或者次数实在太多，根本没法用言语准确形容。",
      "examples": [
        {
          "jp": "<b><ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>して、どんなにうれしかった<span style='color:#d64045'>ことか</span>。</b>",
          "cn": "考上了大学，这是多么令人高兴的事啊。"
        }
      ],
      "related": []
  },
  {
      "id": 174,
      "title": "～さえ～ば / ～さえ～なら",
      "romaji": "sae~ba / sae~nara",
      "kana": "さえ～ば / さえ～なら",
      "tags": "条件 唯一 充分",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "只要…就…",
      "connection": "N＋さえ＋～ば；Ｎで＋さえ＋あれば／なければ；Vます（去ます）＋さえ＋すれば／しなければ；イAく／ナAで＋さえ＋あれば／なければ",
      "desc": "表示某事物是后项成立的<b>充分条件</b>。强调只要满足了这一个最低限度的条件，后项就一定能成立或解决，除此之外的其他任何条件都不重要了。",
      "examples": [
        {
          "jp": "<b><ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>み<span style='color:#d64045'>さえすれば</span>、<ruby>治<rt>なお</rt></ruby>ります。</b>",
          "cn": "只要吃了药就会好。"
        }
      ],
      "related": []
  },
  {
      "id": 175,
      "title": "～ようがない / ～ようもない",
      "romaji": "youganai / youmonai",
      "kana": "ようがない / ようもない",
      "tags": "不可能 状态 强烈",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "没法… / 无法…",
      "connection": "Vます（去ます）＋ようがない / ようもない",
      "desc": "表示虽然主观上有做某事的意愿，但由于<b>缺乏必要的方法、手段或客观条件</b>，导致实际上根本无法实现。侧重于客观状况导致的<b>绝对不可能性</b>。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>の<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby><ruby>先<rt>さき</rt></ruby>を<ruby>知<rt>し</rt></ruby>らないので、<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>し<span style='color:#d64045'>ようがない</span>。</b>",
          "cn": "因为不知道他的联系方式，所以根本没法联系。"
        }
      ],
      "related": []
  },
  {
      "id": 176,
      "title": "～あげく（に）",
      "romaji": "ageku",
      "kana": "あげく",
      "tags": "结果 经过 负面",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "结果… / 最后…",
      "connection": "Vた / N + の + あげく（に）",
      "desc": "表示经过了<b>漫长时间的折腾、烦恼或某种复杂的过程</b>之后，最终导致了一个结果。后项通常接续<b>不尽如人意的、令人遗憾的负面结局</b>。",
      "examples": [
        {
          "jp": "<b><ruby>散<rt>さん</rt></ruby><ruby>々<rt>ざん</rt></ruby><ruby>悩<rt>なや</rt></ruby>んだ<span style='color:#d64045'>あげく</span>、<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めることにした。</b>",
          "cn": "烦恼了很久之后，最终决定退学。"
        }
      ],
      "related": []
  },
  {
      "id": 177,
      "title": "～もんじゃない / ～ものではない",
      "romaji": "monojanai / monodehanai",
      "kana": "もんじゃない / ものではない",
      "tags": "常识 忠告 训诫",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第5課",
      "meaning": "不该… / 不能…",
      "connection": "Vる + もんじゃない / ものではない",
      "desc": "属于「～ものだ」的否定形式。表示基于<b>社会常识、道德规范或普遍的经验教训</b>，强烈主张“绝对不应该做某事”。带有明显的<b>忠告、训诫或轻微的责备</b>语气。",
      "examples": [
        {
          "jp": "<b><ruby>人<rt>ひと</rt></ruby>の<ruby>悪<rt>わる</rt></ruby><ruby>口<rt>ぐち</rt></ruby>は<ruby>言<rt>い</rt></ruby>う<span style='color:#d64045'>もんじゃない</span>よ。</b>",
          "cn": "不应该说别人的坏话哦。"
        }
      ],
      "related": [141]
  },
  {
    "id": 178,
    "title": "～だけ（尝试）",
    "romaji": "dake",
    "kana": "だけ",
    "tags": "尝试 姑且 妥协",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第5課",
    "meaning": "姑且…试试看 / 反正…也无妨",
    "connection": "Vる + だけ + Vて（みる）",
    "desc": "表示在预想到<b>可能无法达成理想结果或大概率失败</b>的前提下，作为<b>最低限度的妥协去尝试某项动作</b>。前后项必定接续同一动词，且后项多伴随「<b>～てみる</b>」等表示尝试的表达。",
    "examples": [
      {
        "jp": "<b><ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>だけ</span><ruby>行<rt>い</rt></ruby>ってみようよ。</b>",
        "cn": "我们姑且去看看吧。"
      },
      {
        "jp": "<b><ruby>頼<rt>たの</rt></ruby>む<span style='color:#d64045'>だけ</span><ruby>頼<rt>たの</rt></ruby>んでみたら？</b>",
        "cn": "反正也不吃亏，你姑且试着求求他看？"
      }
    ],
    "related": [186]
},
  {
      "id": 179,
      "title": "～ばかりに",
      "romaji": "bakarini",
      "kana": "ばかりに",
      "tags": "原因 懊悔 负面",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "就因为… / 仅仅因为…",
      "connection": "普通形（ナAな・である／Nな・である） + ばかりに （※动词多接续た形）",
      "desc": "表示<b>某种单一的原因或轻微的过失</b>，直接导致了<b>出乎意料的负面结果</b>。后项通常接续不理想、令人遗憾的客观事态。该句型带有较强的感情色彩，常伴随说话人<b>强烈的懊悔、自责或遗憾</b>，暗含“如果当初不那样做就好了”的心理倾向。",
      "examples": [
        {
          "jp": "<b><ruby>油<rt>ゆ</rt></ruby><ruby>断<rt>だん</rt></ruby>した<span style='color:#d64045'>ばかりに</span>、<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてしまった。</b>",
          "cn": "就因为一时的疏忽，引发了事故。"
        }
      ],
      "related": []
  },
  {
      "id": 180,
      "title": "～ことはない",
      "romaji": "kotonai",
      "kana": "ことはない",
      "tags": "建议 忠告 没必要",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "没必要… / 用不着…",
      "connection": "Vる + ことはない",
      "desc": "表示从客观状况或社会常理来看，<b>完全没有必要进行前项动作</b>。常用于对听话人进行<b>劝解、安慰、忠告或鼓励</b>，意在消除对方的不安或多余的顾虑。通常不用于客观事实的绝对否定。",
      "examples": [
        {
          "jp": "<b><ruby>君<rt>きみ</rt></ruby>が<ruby>謝<rt>あやま</rt></ruby>る<span style='color:#d64045'>ことはない</span>よ。</b>",
          "cn": "你没必要道歉哦。"
        }
      ],
      "related": []
  },
  {
      "id": 181,
      "title": "～に比べて",
      "romaji": "nikurabete",
      "kana": "にくらべて",
      "tags": "比较 差异 基准",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "和…相比",
      "connection": "N + に比べて",
      "desc": "表示将两个同类事物并列，<b>以后者作为比较的基准</b>，从而凸显出两者之间在程度、性质或状态上的<b>显著差异</b>。属于客观陈述比较结果的标准句型。",
      "examples": [
        {
          "jp": "<b><ruby>兄<rt>あに</rt></ruby><span style='color:#d64045'>に<ruby>比<rt>くら</rt></ruby>べて</span>、<ruby>弟<rt>おとうと</rt></ruby>はよく<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>する。</b>",
          "cn": "和哥哥相比，弟弟很用功学习。"
        }
      ],
      "related": []
  },
  {
      "id": 182,
      "title": "～ものか / ～もんか",
      "romaji": "monoka / monka",
      "kana": "ものか / もんか",
      "tags": "否定 强烈 意志",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "怎么可能… / 绝对不…",
      "connection": "Vる／イAい／ナAな／Nな + ものか / もんか",
      "desc": "属于带有强烈感情色彩的<b>主观否定表达</b>。表示说话人基于个人经验或强烈情绪，对某事物进行<b>断然否定</b>或表达<b>决不妥协的强烈意志</b>。在口语中常弱化为「～もんか」。",
      "examples": [
        {
          "jp": "<b>あんな<ruby>店<rt>みせ</rt></ruby>、<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>と<ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>ものか</span>。</b>",
          "cn": "那种店，我绝对不会再去第二次了。"
        }
      ],
      "related": []
  },
  {
      "id": 183,
      "title": "～というものだ / ～というものよ",
      "romaji": "toiumonoda / toiumonoyo",
      "kana": "というものだ / というものよ",
      "tags": "断定 常理 感慨",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "也就是… / 这才叫…",
      "connection": "普通形（ナA／ N） + というものだ / というものよ ",
      "desc": "用于陈述说话人认为<b>理所当然的社会常理、普遍真理或事物本质</b>。句尾接续终助词「よ」构成「～というものよ」时，向听话人<b>主张、提醒或感叹的语气更为强烈</b>。",
      "examples": [
        {
          "jp": "<b><ruby>諦<rt>あきら</rt></ruby>めずに<ruby>頑<rt>がん</rt></ruby><ruby>張<rt>ば</rt></ruby>るのが、<ruby>若<rt>わか</rt></ruby>さ<span style='color:#d64045'>というものよ</span>。</b>",
          "cn": "不轻言放弃地努力，这才叫青春啊。"
        }
      ],
      "related": []
  },
  {
      "id": 184,
      "title": "～ばこそ",
      "romaji": "bakoso",
      "kana": "ばこそ",
      "tags": "原因 强调 主观",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "正因为…才…",
      "connection": "Vば／イＡければ／ナAであれば／Nであれば + こそ",
      "desc": "强调<b>前项是导致后项的唯一原因</b>。后项多伴随说话人的积极行为或强烈主张。比「から」带有更强的<b>主观断定语气</b>，属于郑重的书面语。",
      "examples": [
        {
          "jp": "<b><ruby>愛<rt>あい</rt></ruby>していれ<span style='color:#d64045'>ばこそ</span>、<ruby>厳<rt>きび</rt></ruby>しく<ruby>叱<rt>しか</rt></ruby>るのです。</b>",
          "cn": "正因为爱你，才会严厉地批评你。"
        }
      ],
      "related": []
  },
  {
      "id": 185,
      "title": "～ないことはない / ～ないこともない",
      "romaji": "naikotohanai / naikotomonai",
      "kana": "ないことはない / ないこともない",
      "tags": "肯定 保留 委婉",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "也不是不… / 并非不…",
      "connection": "Vない／イAくない／ナAでない + ことはない",
      "desc": "采用双重否定表达<b>有保留的肯定</b>。表示虽然无法无条件赞同，但在特定条件下或勉强尝试时，<b>存在成立的可能性</b>。",
      "examples": [
        {
          "jp": "<b><ruby>納<rt>なっ</rt></ruby><ruby>豆<rt>とう</rt></ruby>は<ruby>食<rt>た</rt></ruby>べられ<span style='color:#d64045'>ないことはない</span>が、<ruby>好<rt>す</rt></ruby>きではない。</b>",
          "cn": "纳豆也不是不能吃，但就是不喜欢。"
        }
      ],
      "related": []
  },
  {
      "id": 186,
      "title": "～だけ（程度）",
      "romaji": "dake",
      "kana": "だけ",
      "tags": "限度 程度 范围",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "尽量… / 尽可能… / 足够…",
      "connection": "V能动态 ＋ だけ；Vたい／ほしい／好きな ＋ だけ",
      "desc": "表示达到<b>能力、条件或愿望的最高限度</b>。常与表示可能性的动词（如「できる」）或表示愿望的词搭配，强调毫无保留地<b>做到某种极致的程度</b>。",
      "examples": [
        {
          "jp": "<b><ruby>食<rt>た</rt></ruby>べられる<span style='color:#d64045'>だけ</span><ruby>食<rt>た</rt></ruby>べてください。</b>",
          "cn": "能吃多少就吃多少（尽量吃）。"
        }
      ],
      "related": []
  },
  {
      "id": 187,
      "title": "～もん / ～もの",
      "romaji": "mon / mono",
      "kana": "もん / もの",
      "tags": "原因 辩解 口语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "因为…嘛 / 毕竟…",
      "connection": "普通形 + もん / もの",
      "desc": "带有<b>辩解或撒娇色彩的口语表达</b>。用于陈述个人情绪化的理由，以<b>主张正当性或寻求理解</b>。多见于女性或儿童的日常对话。",
      "examples": [
        {
          "jp": "<b>だって、まだ<ruby>子<rt>こ</rt></ruby>どもだ<span style='color:#d64045'>もん</span>。</b>",
          "cn": "因为我还是个孩子嘛。"
        }
      ],
      "related": []
  },
  {
      "id": 188,
      "title": "～わけにはいかない / ～わけにもいかない",
      "romaji": "wakeniwaikanai",
      "kana": "わけにはいかない",
      "tags": "不可能 常理 约束",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "不能… / 没法…",
      "connection": "Vる／Vない + わけにはいかない（わけにもいかない）",
      "desc": "表示受制于<b>社会常理、道德规范或心理责任感</b>，认为绝对不能做某事。强调<b>心理或社会约束</b>，而非物理能力上的不可能。",
      "examples": [
        {
          "jp": "<b><ruby>熱<rt>ねつ</rt></ruby>があっても、<ruby>休<rt>やす</rt></ruby>む<span style='color:#d64045'>わけにはいかない</span>。</b>",
          "cn": "即使发烧了，也不能请假。"
        }
      ],
      "related": []
  },
  {
      "id": 189,
      "title": "～のみ",
      "romaji": "nomi",
      "kana": "のみ",
      "tags": "限定 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課",
      "meaning": "仅… / 只…",
      "connection": "Vる／N + のみ",
      "desc": "「だけ」的<b>生硬书面语形式</b>。表示在特定范围内的<b>绝对限定</b>，排除其他一切可能性。常用于公文或严肃报道。",
      "examples": [
        {
          "jp": "<b><ruby>現<rt>げん</rt></ruby><ruby>金<rt>きん</rt></ruby><span style='color:#d64045'>のみ</span>ご<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby>いただけます。</b>",
          "cn": "仅限使用现金。"
        }
      ],
      "related": []
  },
  {
      "id": 190,
      "title": "～つもりだ / ～つもりで",
      "romaji": "tsumorida / tsumoride",
      "kana": "つもり",
      "tags": "主观 假定 心理",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第6課 / 第13課",
      "meaning": "就当作… / 深信…",
      "connection": "Vた／イAい／ナAな／Nの + つもり（だ / で）",
      "desc": "表示动作主体的<b>主观假定或认定</b>。强调无论客观事实如何，当事人内心是<b>以此为前提去行动或深信不疑的</b>。",
      "examples": [
        {
          "jp": "<b><ruby>若<rt>わか</rt></ruby>い<span style='color:#d64045'>つもり</span>で<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>をしたら、<ruby>怪<rt>け</rt></ruby><ruby>我<rt>が</rt></ruby>をした。</b>",
          "cn": "自以为还年轻就勉强去做，结果受了伤。"
        }
      ],
      "related": []
  },
  {
      "id": 191,
      "title": "～から見ると / ～から見れば / ～から見て",
      "romaji": "karamiruto / karamireba / karamite",
      "kana": "からみると / からみれば / からみて",
      "tags": "视角 判断 依据",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "从…来看",
      "connection": "N + から見ると / から見れば / から見て",
      "desc": "1. 表示做出判断或评价的<b>特定人物立场</b>。<br>2. 表示推断某种状态或趋势的<b>客观依据或迹象</b>。",
      "examples": [
        {
          "jp": "<b><ruby>親<rt>おや</rt></ruby>の<ruby>目<rt>め</rt></ruby><span style='color:#d64045'>から<ruby>見<rt>み</rt></ruby>ると</span>、<ruby>彼<rt>かれ</rt></ruby>はまだ<ruby>子<rt>こ</rt></ruby><ruby>どもだ。</b>",
          "cn": "【立场】从父母的眼光来看，他还是个孩子。"
        },
        {
          "jp": "<b><ruby>足<rt>あし</rt></ruby><ruby>跡<rt>あと</rt></ruby><span style='color:#d64045'>から<ruby>見<rt>み</rt></ruby>れば</span>、<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>は<ruby>窓<rt>まど</rt></ruby>から<ruby>逃<rt>に</rt></ruby>格げたようだ。</b>",
          "cn": "【依据】从脚印来看，犯人似乎是从窗户逃走的。"
        }
      ],
      "related": []
  },
  {
      "id": 192,
      "title": "～一方（で）",
      "romaji": "ippou",
      "kana": "いっぽう（で）",
      "tags": "对比 并列 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "另一方面 / 与此同时",
      "connection": "普通形（ナAな・ナAである／Nの・Nである） + 一方（で）",
      "desc": "1. 用于对两个<b>性质不同或相反的事物</b>进行客观对比。<br>2. 用于描述同一个主体<b>同时具备两种不同的特征或职能</b>。",
      "examples": [
        {
          "jp": "<b><ruby>都<rt>と</rt></ruby><ruby>心<rt>しん</rt></ruby>の<ruby>地<rt>ち</rt></ruby><ruby>価<rt>か</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる<span style='color:#d64045'><ruby>一<rt>いっ</rt></ruby><ruby>方<rt>ぽう</rt></ruby>で</span>、<ruby>地<rt>ち</rt></ruby><ruby>方<rt>ほう</rt></ruby>は<ruby>下<rt>さ</rt></ruby>がっている。</b>",
          "cn": "【对比】都市中心地价上涨的同时，地方地价却在下跌。"
        },
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>厳<rt>きび</rt></ruby>しい<ruby>教<rt>きょう</rt></ruby><ruby>師<rt>し</rt></ruby>である<span style='color:#d64045'><ruby>一<rt>いっ</rt></ruby><ruby>方<rt>ぽう</rt></ruby></span>、<ruby>優<rt>やさ</rt></ruby>しい<ruby>父<rt>ちち</rt></ruby><ruby>親<rt>おや</rt></ruby>でもある。</b>",
          "cn": "【兼具】他一方面是严厉的教师，另一方面也是温柔的父亲。"
        }
      ],
      "related": []
  },
  {
    "id": 193,
    "title": "～ことから",
    "romaji": "kotokara",
    "kana": "ことから",
    "tags": "依据 起因 渊源",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第7課",
    "meaning": "因为… / 由此…",
    "connection": "普通形（ナAな・ナAである／Nである） + ことから",
    "desc": "1. 表示得出判断的<b>直接客观证据或判明事实的线索</b>。<br>2. 表示事物<b>名称的来源或某种结果的起因</b>。",
    "examples": [
      {
        "jp": "<b><ruby>声<rt>こえ</rt></ruby>が<ruby>震<rt>ふる</rt></ruby>えている<span style='color:#d64045'><ruby>事<rt>こと</rt></ruby>から</span>、<ruby>彼<rt>かれ</rt></ruby>が<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>しているとわかった。</b>",
        "cn": "【依据】从他声音发抖这点可以看出他很紧张。"
      },
      {
        "jp": "<b><ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>山<rt>さん</rt></ruby>が<ruby>見<rt>み</rt></ruby>える<span style='color:#d64045'><ruby>事<rt>こと</rt></ruby>から</span>、この<ruby>町<rt>まち</rt></ruby>は「<ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>見<rt>み</rt></ruby><ruby>町<rt>まち</rt></ruby>」と<ruby>名<rt>な</rt></ruby><ruby>付<rt>づ</rt></ruby>けられた。</b>",
        "cn": "【由来】因为能看到富士山，这座城镇被命名为“富士见町”。"
      }
    ],
    "related": []
},
  {
      "id": 194,
      "title": "～のみならず",
      "romaji": "nominarazu",
      "kana": "のみならず",
      "tags": "递进 范围 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "不仅…而且…",
      "connection": "普通形（ナAである／N(である)） + のみならず",
      "desc": "属于「だけでなく」的正式的书面语表达。表示事态<b>不仅限于前项的范畴</b>，其影响或程度还进一步波及到后项。",
      "examples": [
        {
          "jp": "<b>この<ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>は<ruby>性<rt>せい</rt></ruby><ruby>能<rt>のう</rt></ruby>がよい<span style='color:#d64045'>のみならず</span>、<ruby>操<rt>そう</rt></ruby><ruby>作<rt>さ</rt></ruby>も<ruby>簡<rt>かん</rt></ruby><ruby>单<rt>たん</rt></ruby>だ。</b>",
          "cn": "这台机器不仅性能好，而且操作简单。"
        }
      ],
      "related": []
  },
  {
      "id": 195,
      "title": "～といった",
      "romaji": "toitta",
      "kana": "といった",
      "tags": "列举 示例 概括",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "…之类的",
      "connection": "N + といった + N",
      "desc": "用于列举具有代表性的同类事物，以此对后项名词进行<b>具体的示例或概括说明</b>。",
      "examples": [
        {
          "jp": "<b><ruby>京<rt>きょう</rt></ruby><ruby>都<rt>と</rt></ruby>や<ruby>奈<rt>な</rt></ruby><ruby>良<rt>ら</rt></ruby><span style='color:#d64045'>といった</span><ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>町<rt>まち</rt></ruby>。</b>",
          "cn": "像京都、奈良这样的历史名城。"
        }
      ],
      "related": []
  },
  {
      "id": 196,
      "title": "～にしたがって / ～にしたがい",
      "romaji": "nishitagatte",
      "kana": "にしたがって",
      "tags": "伴随 变化 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "随着…",
      "connection": "Vる／N + にしたがって",
      "desc": "表示前项事态在<b>朝着一定方向连续改变</b>的同时，后项也随之产生伴随性的演变。多用于描述客观规律。",
      "examples": [
        {
          "jp": "<b><ruby>上<rt>のぼ</rt></ruby>る<span style='color:#d64045'>にしたがって</span>、<ruby>気<rt>き</rt></ruby><ruby>温<rt>おん</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がる。</b>",
          "cn": "随着往上爬，气温随之下降。"
        }
      ],
      "related": [197]
  },
  {
      "id": 197,
      "title": "～につれて / ～につれ",
      "romaji": "nitsurete",
      "kana": "につれて",
      "tags": "伴随 变化 同步",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "随着…",
      "connection": "Vる / N + につれて",
      "desc": "表示随着前项比例、规模或程度的改变，后项也<b>同步产生联动性的客观改变</b>。侧重于同步演进的过程。",
      "examples": [
        {
          "jp": "<b><ruby>年<rt>とし</rt></ruby><ruby>取<rt>と</rt></ruby>る<span style='color:#d64045'>につれて</span>、<ruby>物<rt>もの</rt></ruby><ruby>忘<rt>わす</rt></ruby>れがひどくなった。</b>",
          "cn": "随着年龄的增长，健忘变得严重了。"
        }
      ],
      "related": [196]
  },
  {
      "id": 198,
      "title": "～得（う）る / ～得（え）ない",
      "romaji": "uru / enai",
      "kana": "うる / えない",
      "tags": "可能 推测 客观",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "有发生的可能 / 绝无可能",
      "connection": "Vます（去ます） + 得（う）る / 得（え）ない",
      "desc": "表示在客观条件或常理下，<b>存在发生某事态的可能性</b>。不用于陈述个人的能力或技能。",
      "examples": [
        {
          "jp": "<b>あの<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>が<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby>するなんて、あり<span style='color:#d64045'><ruby>得<rt>え</rt></ruby>ない</span>ことだ。</b>",
          "cn": "那两个人结婚什么的，是绝对不可能发生的事。"
        }
      ],
      "related": []
  },
  {
      "id": 199,
      "title": "～に反して",
      "romaji": "nihanshite",
      "kana": "にはんして",
      "tags": "逆接 对立 违反",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "与…相反 / 违反…",
      "connection": "N＋に反して／に反し／に反するN／に反したN",
      "desc": "1. 表示后项的客观结果与前项的<b>预想、期待或意愿等截然相反</b>。<br>2. 表示某行为<b>违背了客观的规则、法律或道德标准</b>。",
      "examples": [
        {
          "jp": "<b><ruby>親<rt>おや</rt></ruby>の<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby><span style='color:#d64045'>に<ruby>反<rt>はん</rt></ruby>して</span>、<ruby>彼<rt>かれ</rt></ruby>は<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めた。</b>",
          "cn": "【相反】与父母的期待相反，他退学了。"
        },
        {
          "jp": "<b><ruby>法<rt>ほう</rt></ruby><ruby>律<rt>りつ</rt></ruby><span style='color:#d64045'>に<ruby>反<rt>はん</rt></ruby>する</span><ruby>行<rt>こう</rt></ruby><ruby>為<rt>い</rt></ruby>は<ruby>許<rt>ゆる</rt></ruby>されない。</b>",
          "cn": "【违反】违反法律的行为是不被允许的。"
        }
      ],
      "related": []
  },
  {
      "id": 200,
      "title": "～に関して",
      "romaji": "nikanshite",
      "kana": "にかんして",
      "tags": "对象 范围 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "关于…",
      "connection": "N＋に関して／に関するN",
      "desc": "提示后项动作所<b>围绕的具体主题或涉及的对象</b>。属于郑重的书面语，后项常接续表示调查、说明或研究的词汇。",
      "examples": [
        {
          "jp": "<b>この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby><span style='color:#d64045'>に<ruby>関<rt>かん</rt></ruby>して</span>、ご<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>はありませんか。</b>",
          "cn": "关于这个问题，您有什么意见吗？"
        }
      ],
      "related": []
  },
  {
      "id": 201,
      "title": "～反面 / ～半面",
      "romaji": "hanmen",
      "kana": "はんめん",
      "tags": "对比 两面性",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "另一方面 / 相反的一面",
      "connection": "普通形（ナAな・ナAである／Nである） + 反面（半面）",
      "desc": "用于描述同一个事物<b>同时具有完全相反的两个侧面</b>。前项陈述一面，后项陈述性质对立的另一面。",
      "examples": [
        {
          "jp": "<b>インターネットは<ruby>便<rt>べん</rt></ruby><ruby>利<rt>り</rt></ruby>な<span style='color:#d64045'><ruby>反<rt>はん</rt></ruby><ruby>面<rt>めん</rt></ruby></span>、<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>も<ruby>潜<rt>ひそ</rt></ruby>んでいる。</b>",
          "cn": "互联网虽然方便，但另一方面也潜藏着危险。"
        }
      ],
      "related": []
  },
  {
      "id": 202,
      "title": "～上（じょう）",
      "romaji": "jou",
      "kana": "じょう",
      "tags": "角度 领域 范畴",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "在…方面 / 从…角度来看",
      "connection": "N + 上（じょう）",
      "desc": "表示从<b>前项名词所涉及的特定角度、领域或范畴</b>来进行评价或客观陈述。常接续表示性质、关系或社会制度的名词。",
      "examples": [
        {
          "jp": "<b><ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby><span style='color:#d64045'><ruby>上<rt>じょう</rt></ruby>の</span><ruby>理<rt>り</rt></ruby><ruby>由<rt>ゆう</rt></ruby>で<ruby>退<rt>たい</rt></ruby><ruby>職<rt>しょく</rt></ruby>する。</b>",
          "cn": "因为健康方面的理由退职。"
        },
      ],
      "related": []
  },
  {
      "id": 203,
      "title": "～つつある",
      "romaji": "tsutsuaru",
      "kana": "つつある",
      "tags": "变化 过程 持续",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "正在不断…",
      "connection": "Vます（去ます） + つつある",
      "desc": "表示某事态<b>正处于不断单向变化的过程中</b>。强调变化尚未完成，且具有持续演进的客观趋势。多用于郑重的书面语。",
      "examples": [
        {
          "jp": "<b><ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>は<ruby>減<rt>げん</rt></ruby><ruby>少<rt>しょう</rt></ruby>し<span style='color:#d64045'>つつある</span>。</b>",
          "cn": "日本的人口正在不断减少。"
        }
      ],
      "related": []
  },
  {
      "id": 204,
      "title": "～に限らず",
      "romaji": "nikagirazu",
      "kana": "にかぎらず",
      "tags": "递进 范围 包含",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第7課",
      "meaning": "不只限于… / 不仅…",
      "connection": "N + に限らず",
      "desc": "表示<b>不局限于前项提示的单一范围</b>，而是包含前项在内，还有更广泛的其他同类事物也同样适用。",
      "examples": [
        {
          "jp": "<b>この<ruby>店<rt>みせ</rt></ruby>は<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby><span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>らず</span>、お<ruby>年<rt>とし</rt></ruby><ruby>寄<rt>よ</rt></ruby>りにも<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>がある。</b>",
          "cn": "这家店不只限于年轻人，在老年人中也很受欢迎。"
        }
      ],
      "related": []
  },
  {
      "id": 205,
      "title": "ご～願います / お～願います",
      "romaji": "go~negaimasu / o~negaimasu",
      "kana": "ご～ねがいます / お～ねがいます",
      "tags": "敬语 尊他 委托",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第8課",
      "meaning": "请您… / 麻烦您…",
      "connection": "ご + N（する动词的词干） + 願います / お + Vます（去ます） + 願います",
      "desc": "属于<b>尊他语</b>。用于在正式场合向对方提出<b>客观的请求或委托</b>，语气委婉且敬意程度极高。",
      "examples": [
        {
          "jp": "<b><span style='color:#d64045'>ご</span><ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby><span style='color:#d64045'><ruby>願<rt>ねが</rt></ruby>います</span>。</b>",
          "cn": "麻烦您确认一下。"
        }
      ],
      "related": []
  },
  {
      "id": 206,
      "title": "ご～申し上げる / お～申し上げる",
      "romaji": "go~moushiageru / o~moushiageru",
      "kana": "ご～もうしあげる / お～もうしあげる",
      "tags": "敬语 自谦 动作",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第8課",
      "meaning": "（我来）为您… / 致以…",
      "connection": "ご + N（する动词的词干） + 申し上げます / お + Vます（去ます） + 申し上げます",
      "desc": "属于<b>自谦语</b>。表示说话人<b>执行某动作</b>，通过压低自身的动作来抬高对方。常用于致谢、道歉或致辞等客观陈述。",
      "examples": [
        {
          "jp": "<b><ruby>心<rt>こころ</rt></ruby>から<span style='color:#d64045'>お</span><ruby>詫<rt>わ</rt></ruby>び<span style='color:#d64045'><ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます</span>。</b>",
          "cn": "向您致以由衷的歉意。"
        }
      ],
      "related": []
  },
  {
      "id": 207,
      "title": "～ばと思う / ～たらと思う",
      "romaji": "batoomou / taratoomou",
      "kana": "ばとおもう / たらとおもう",
      "tags": "愿望 委婉 提议",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第8課",
      "meaning": "希望… / 如果能…就好了",
      "connection": "Vば／イAければ／ナAであれば + と思う / Vた／イAた／ナAであった + らと思う",
      "desc": "用于表达说话人内心的<b>愿望或期盼</b>。当用于向他人提出建议或请求时，由于没有直接要求对方，能起到<b>柔化语气、避免强加于人</b>的作用，带有一种高度委婉的语感。",
      "examples": [
        {
          "jp": "<b><ruby>早<rt>はや</rt></ruby>く<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>治<rt>なお</rt></ruby>れ<span style='color:#d64045'>ばと<ruby>思<rt>おも</rt></ruby>います</span>。</b>",
          "cn": "希望能早日病愈。"
        },
        {
          "jp": "<b>ぜひご<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby>いただけ<span style='color:#d64045'>たらと<ruby>思<rt>おも</rt></ruby>います</span>。</b>",
          "cn": "要是您能来参加就好了。"
        }
      ],
      "related": []
  },
  {
      "id": 208,
      "title": "～につきまして",
      "romaji": "nitsukimashite",
      "kana": "につきまして",
      "tags": "主题 范围 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第8課",
      "meaning": "关于…",
      "connection": "N + につきまして",
      "desc": "为「について」的<b>郑重语形式</b>。用于提示说明、报告或讨论的<b>具体主题</b>，多出现在商务会谈、致辞等正式客观的场合中。",
      "examples": [
        {
          "jp": "<b>この<ruby>件<rt>けん</rt></ruby><span style='color:#d64045'>につきまして</span>、ご<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>いたします。</b>",
          "cn": "关于这件事，我来进行说明。"
        }
      ],
      "related": []
  },
  {
    "id": 209,
    "title": "～のなんのって",
    "romaji": "nonannotte",
    "kana": "のなんのって",
    "tags": "程度 强调 口语",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第9課",
    "meaning": "别提有多…了 / 非常…",
    "connection": "简体句子（ナAな／（无Nだ）） + のなんのって",
    "desc": "用于强调程度极高，达到了<b>无法用言语充分表达</b>的状态。多用于口语中感叹某种主观感受极其强烈。",
    "examples": [
      {
        "jp": "<b><ruby>痛<rt>いた</rt></ruby>い<span style='color:#d64045'>のなんのって</span>、<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>たよ。</b>",
        "cn": "别提有多疼了，眼泪都掉下来了。"
      }
    ],
    "related": []
},
  {
      "id": 210,
      "title": "～たて",
      "romaji": "tate",
      "kana": "たて",
      "tags": "新鲜 状态 动作",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "刚…完",
      "connection": "Vます（去ます） + たて / たての + 名词",
      "desc": "表示某动作<b>刚刚完成</b>。强调此时该事物还保留着动作刚结束时的<b>新鲜、热乎或极其显著的状态</b>。仅限于部分特定动词。",
      "examples": [
        {
          "jp": "<b>このパンは<ruby>焼<rt>や</rt></ruby>き<span style='color:#d64045'>たて</span>だから、まだ<ruby>温<rt>あたた</rt></ruby>かい。</b>",
          "cn": "这个面包是刚烤好的，所以还很暖和。"
        }
      ],
      "related": []
  },
  {
      "id": 211,
      "title": "～ったら / ～てば",
      "romaji": "ttara / tteba",
      "kana": "ったら / ってば",
      "tags": "主题 责备 强调",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "提起… / 说起…呀",
      "connection": "N + ったら / ってば",
      "desc": "1. 用于提起亲近的人或熟悉的事物作为话题，后项多接续<b>评价、抱怨或责备</b>的内容。<br>2. 用于由于对方不听或不理解，从而带有情绪地<b>重复自己的主张</b>。",
      "examples": [
        {
          "jp": "<b>うちの<ruby>弟<rt>おとうと</rt></ruby><span style='color:#d64045'>ったら</span>、いつも<ruby>宿<rt>しゅく</rt></ruby><ruby>題<rt>だい</rt></ruby>をしないで<ruby>遊<rt>あそ</rt></ruby>んでいる。</b>",
          "cn": "提起我弟弟呀，总是不做作业在玩。"
        },
        {
          "jp": "<b>わかっている<span style='color:#d64045'>ってば</span>！もう<ruby>言<rt>い</rt></ruby>わないで。</b>",
          "cn": "我都说了我知道了！别再说了。"
        }
      ],
      "related": []
  },
  {
      "id": 212,
      "title": "～ようになっている",
      "romaji": "youninatteiru",
      "kana": "ようになっている",
      "tags": "功能 构造 客观",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "（机器等）设计成… / 变得能够…",
      "connection": "Vる／Vない + ようになっている",
      "desc": "用于客观地描述<b>机器的性能、构造或某种社会制度</b>被设计成了具有特定的功能。强调某种自然而然或预设好的客观运作机制。",
      "examples": [
        {
          "jp": "<b>この<ruby>扉<rt>とびら</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくと<ruby>開<rt>あ</rt></ruby>く<span style='color:#d64045'>ようになっている</span>。</b>",
          "cn": "这扇门设计成有人靠近时就会自动打开。"
        }
      ],
      "related": []
  },
  {
    "id": 213,
    "title": "～わけだ，〜というわけだ",
    "romaji": "wakeda",
    "kana": "わけだ",
    "tags": "结论 理由 换言之",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第9課",
    "meaning": "理所当然… / 自然就… / 也就是说…",
    "connection": "普通形（ナAな／Nの） + わけだ / というわけだ",
    "desc": "1. 表示基于某种客观事实，自然而然地得出<b>合乎逻辑的结论或因果关系</b>。<br>2. 用于对前文内容进行<b>同义换言或重新解释</b>。",
    "examples": [
      {
        "jp": "<b><ruby>暑<rt>あつ</rt></ruby>い<span style='color:#d64045'>わけだ</span>。<ruby>窓<rt>まど</rt></ruby>が<ruby>閉<rt>し</rt></ruby>まっている。</b>",
        "cn": "【结论】难怪这么热，原来窗户关着。"
      },
      {
        "jp": "<b>５<ruby>％<rt>パーセント</rt></ruby><ruby>引<rt>び</rt></ruby>きということは、1000<ruby>円<rt>えん</rt></ruby>なら950<ruby>円<rt>えん</rt></ruby>に<ruby>成<rt>な</rt></ruby>る<span style='color:#d64045'>わけだ</span>。</b>",
        "cn": "【换言之】减价5%的话，也就是说1000日元的东西变950日元了。"
      }
    ],
    "related": []
},
  {
      "id": 214,
      "title": "～どころか",
      "romaji": "dorokoka",
      "kana": "どころか",
      "tags": "反差 程度 递进",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "不但不…反而… / 别说…甚至…",
      "connection": "普通形（ナA／N） + どころか",
      "desc": "用于否定前项的程度或预期，并引出<b>反差极大或程度更深</b>的后项。强调事实与预想完全相反或存在显著差距。",
      "examples": [
        {
          "jp": "<b><ruby>独<rt>どく</rt></ruby><ruby>身<rt>しん</rt></ruby><span style='color:#d64045'>どころか</span>、<ruby>子<rt>こ</rt></ruby><ruby>どもが３<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>もいる。</b>",
          "cn": "别说是单身了，连孩子都有三个了。"
        }
      ],
      "related": []
  },
  {
      "id": 215,
      "title": "～ようじゃ / ～ようでは",
      "romaji": "youjya / youdehwa",
      "kana": "ようじゃ / ようでは",
      "tags": "假设 评价 警告",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "如果（保持现状）的话…",
      "connection": "Vる／Vない + ようじゃ / ようでは",
      "desc": "表示对目前的某种负面状态进行评价。暗示如果<b>维持现状而不做出改变</b>，将会导致无法接受或不理想的结果。语感上带有遗憾或批评。",
      "examples": [
        {
          "jp": "<b>こんな<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>な<ruby>漢<rt>かん</rt></ruby><ruby>字<rt>じ</rt></ruby>が<ruby>書<rt>か</rt></ruby>けない<span style='color:#d64045'>ようじゃ</span>、<ruby>困<rt>こま</rt></ruby>るよ。</b>",
          "cn": "要是连这么简单的汉字都不会写的话，那可就麻烦了。"
        }
      ],
      "related": []
  },
  {
      "id": 216,
      "title": "～ぶる / ～ぶって",
      "romaji": "buru / butte",
      "kana": "ぶる / ぶって",
      "tags": "状态 假装 贬义",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "装作… / 摆出…的样子",
      "connection": "N／イA／ナA + ぶる",
      "desc": "带有贬义。表示实际上并非如此，却刻意<b>装出某种样子或摆出某种态度</b>。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>はいつもお<ruby>金<rt>かね</rt></ruby><ruby>持<rt>も</rt></ruby>ち<span style='color:#d64045'>ぶって</span>いる。</b>",
          "cn": "他总是装作很有钱的样子。"
        }
      ],
      "related": []
  },
  {
    "id": 217,
    "title": "～に限って",
    "romaji": "nikagitte",
    "kana": "にかぎって",
    "tags": "倾向 倒霉 信任",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第9課",
    "meaning": "偏偏… / 唯独…",
    "connection": "N + に限って",
    "desc": "具体用法可以分为三种：<br>1. 带有批判的语气，表示<b>特定立场的人往往具有某种负面的倾向</b>。<br>2. 表示平时并非如此，但<b>偏偏在某个特定的时候</b>，运气极差地发生了不凑巧的事态。<br>3. 带着强烈的信任感，强调<b>唯独该特定对象绝对不会</b>做出某种负面行为。",
    "examples": [
      {
        "jp": "<b>よく<ruby>知<rt>し</rt></ruby>らないやつ<span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>って</span>、<ruby>偉<rt>えら</rt></ruby>そうなことを<ruby>言<rt>い</rt></ruby>う。</b>",
        "cn": "【倾向】偏偏是不太懂的人，越喜欢说些自以为是的大话。"
      },
      {
        "jp": "<b>お<ruby>金<rt>かね</rt></ruby>がない<ruby>日<rt>ひ</rt></ruby><span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>って</span>、<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>にお<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みに<ruby>誘<rt>さそ</rt></ruby>われる。</b>",
        "cn": "【倒霉】偏偏在没钱的日子，被朋友叫去喝酒。"
      },
      {
        "jp": "<b>あの<ruby>人<rt>ひと</rt></ruby><span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>って</span>、<ruby>嘘<rt>うそ</rt></ruby>はつかない。</b>",
        "cn": "【绝对不】唯独那个人，绝对不会撒谎。"
      }
    ],
    "related": []
},
  {
      "id": 218,
      "title": "～ことだ",
      "romaji": "kotoda",
      "kana": "ことだ",
      "tags": "建议 忠告 规则",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "应该… / 最好…",
      "connection": "Vる／Vない + ことだ",
      "desc": "用于给出<b>主观的忠告、建议或教训</b>。表示在特定情况下，采取该行动是最佳选择或基本原则。",
      "examples": [
        {
          "jp": "<b><ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>したければ、<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>する<span style='color:#d64045'>ことだ</span>。</b>",
          "cn": "想要进步的话，最好每天练习。"
        }
      ],
      "related": []
  },
  {
    "id": 219,
    "title": "～という（全部）",
    "romaji": "toiu",
    "kana": "という",
    "tags": "全部 强调 范围",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第9課",
    "meaning": "所有的… / 全部的…",
    "connection": "N + という + 同一N",
    "desc": "前后接续同一个名词，用于强调在某个特定范围内，<b>该类事物无一例外，全部包含在内</b>。带有强烈的感叹或夸张的客观语感。",
    "examples": [
      {
        "jp": "<b>この<ruby>辺<rt>あた</rt></ruby>りの<ruby>木<rt>き</rt></ruby><span style='color:#d64045'>という</span><ruby>木<rt>き</rt></ruby>は、１<ruby>本<rt>ほん</rt></ruby><ruby>残<rt>のこ</rt></ruby>らず<ruby>燃<rt>も</rt></ruby>えてしまった。</b>",
        "cn": "这一带所有的树，一棵不剩全烧光了。"
      },
      {
        "jp": "<b><ruby>桜<rt>さくら</rt></ruby>の<ruby>季<rt>き</rt></ruby><ruby>節<rt>せつ</rt></ruby>には、<ruby>道<rt>みち</rt></ruby><span style='color:#d64045'>という</span><ruby>道<rt>みち</rt></ruby>に<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>があふれる。</b>",
        "cn": "到了樱花的季节，所有的路上都挤满了游客。"
      }
    ],
    "related": []
},
  {
      "id": 220,
      "title": "～ところだった",
      "romaji": "tokorodatta",
      "kana": "ところだった",
      "tags": "险些 虚拟 心理",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "险些… / 差点儿…",
      "connection": "Vる／Vない + ところだった",
      "desc": "表示在客观上<b>差一点就陷入了某种（多为消极的）事态</b>，但最终并未发生。常与「もう少しで」等词连用。",
      "examples": [
        {
          "jp": "<b>もう<ruby>少<rt>すこ</rt></ruby>しで<ruby>忘<rt>わす</rt></ruby>れる<span style='color:#d64045'>ところだった</span>。</b>",
          "cn": "差点儿就忘了。"
        }
      ],
      "related": []
  },
  {
      "id": 221,
      "title": "～くらいなら / ～ぐらいなら",
      "romaji": "kurainara",
      "kana": "くらいなら",
      "tags": "比较 否定 极端",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "与其…不如…",
      "connection": "Vる + くらいなら",
      "desc": "提出一个<b>说话人主观认为最坏或最不愿接受的选项</b>，以此来反衬后项的选择在对比之下更为合理。",
      "examples": [
        {
          "jp": "<b>あんな<ruby>男<rt>おとこ</rt></ruby>と<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby>する<span style='color:#d64045'>くらいなら</span>、<ruby>独<rt>どく</rt></ruby><ruby>身<rt>しん</rt></ruby>のほうがいい。</b>",
          "cn": "与其跟那种男人结婚，不如单身。"
        }
      ],
      "related": []
  },
  {
      "id": 222,
      "title": "～ましだ",
      "romaji": "mashida",
      "kana": "ましだ",
      "tags": "比较 让步 评价",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第9課",
      "meaning": "算好的了 / 总比…强",
      "connection": "动词普通形 / い形普通形 / な形+な / 名词+である + ましだ",
      "desc": "表示虽然现状并不完全令人满意，但在与其他更差的情况进行比较后，认为<b>当前的状态还算相对可以接受</b>。",
      "examples": [
        {
          "jp": "<b><ruby>給<rt>きゅう</rt></ruby><ruby>料<rt>りょう</rt></ruby>は<ruby>安<rt>やす</rt></ruby>いけれど、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>があるだけ<span style='color:#d64045'>ましだ</span>。</b>",
          "cn": "工资虽然低，但有工作就算好的了。"
        }
      ],
      "related": []
  },
  {
      "id": 223,
      "title": "～ものがある",
      "romaji": "monogaaru",
      "kana": "ものがある",
      "tags": "感受 评价 倾向",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "确实让人感到… / 有一种…的感觉",
      "connection": "普通形（ナAな／Nだ） + ものがある",
      "desc": "用于表达说话人强烈的客观感受或评价。表示虽然难以具体说明，但<b>确实让人感觉到某种强烈的特征或倾向</b>。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>のスピーチには<ruby>人<rt>ひと</rt></ruby>を<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>させる<span style='color:#d64045'>ものがある</span>。</b>",
          "cn": "他的演讲确实有一种让人感动的力量。"
        }
      ],
      "related": []
  },
  {
      "id": 224,
      "title": "～まい",
      "romaji": "mai",
      "kana": "まい",
      "tags": "否定 意志 推测",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "绝不… / 大概不会…",
      "connection": "Vる + まい（另有：VⅡます（去ます）／ＶⅢます（去ます）＋まい； くる→こまい；する→すまい）",
      "desc": "1. 表示说话人内心强烈的<b>否定意志</b>。<br>2. 表示客观的<b>否定推测</b>。属于偏古风或生硬的书面表达。",
      "examples": [
        {
          "jp": "<b>もう<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>とあの<ruby>店<rt>みせ</rt></ruby>には<ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>まい</span>。</b>",
          "cn": "【意志】绝不再去那家店了。"
        },
        {
          "jp": "<b><ruby>誰<rt>だれ</rt></ruby>も<ruby>私<rt>わたし</rt></ruby>の<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちはわかる<span style='color:#d64045'>まい</span>。</b>",
          "cn": "【推测】大概谁也不会明白我的心情吧。"
        }
      ],
      "related": []
  },
  {
    "id": 225,
    "title": "～につけ / 〜につけて",
    "romaji": "nitsuke",
    "kana": "につけ",
    "tags": "必然 触发 情感",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第10課",
    "meaning": "每当…就…",
    "connection": "Vる + につけ / につけて",
    "desc": "常搭配「見る、聞く」等词汇，表示每当看到或经历某事时，<b>必然会产生某种强烈的情感</b>。后项多接续表示思考或内心情感的词汇。",
    "examples": [
      {
        "jp": "<b>この<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby>を<ruby>見<rt>み</rt></ruby>る<span style='color:#d64045'>につけ</span>、<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す。</b>",
        "cn": "每当看到这张照片，就会想起学生时代。"
      }
    ],
    "related": []
},
  {
      "id": 226,
      "title": "～わりに（は）",
      "romaji": "warini",
      "kana": "わりに（は）",
      "tags": "反差 评价 意外",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "虽然…但是… / 与…相比却…",
      "connection": "普通形（ナAな／Nの） + わりに",
      "desc": "表示后项的实际结果与前项基准所带来的<b>常识预期不相符</b>。多包含意外、评价或轻微批评的客观语感。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>はよく<ruby>食<rt>た</rt></ruby>べる<span style='color:#d64045'>わりに</span>、<ruby>太<rt>ふと</rt></ruby>らない。</b>",
          "cn": "他虽然很能吃，却不胖。"
        }
      ],
      "related": [],
      "compareWith": [172]
  },
  {
      "id": 227,
      "title": "～か～かのうちに",
      "romaji": "ka~kanouchini",
      "kana": "か〜かのうちに",
      "tags": "瞬间 紧接 动作",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "刚…就…",
      "connection": "Vる／Vた + か + Vない + かのうちに",
      "desc": "表示前项动作<b>几乎还未完全结束</b>，后项动作就紧接着发生了。强调两者发生的时间间隔极短。",
      "examples": [
        {
          "jp": "<b><ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わる<span style='color:#d64045'>か</span><ruby>終<rt>お</rt></ruby>わらない<span style='color:#d64045'>かのうちに</span>、<ruby>彼<rt>かれ</rt></ruby>は<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>を<ruby>飛<rt>と</rt></ruby>び<ruby>出<rt>だ</rt></ruby>した。</b>",
          "cn": "刚一下课，他就飞奔出了教室。"
        }
      ],
      "related": []
  },
  {
      "id": 228,
      "title": "～げ",
      "romaji": "ge",
      "kana": "げ",
      "tags": "外观 神态 观察",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "好像… / 显得…",
      "connection": "A词干 + げ",
      "desc": "接在表示情感的词语后，表示从外观上观察到的<b>客观神态或样子</b>。不用于陈述说话人自身的内心情感。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>悲<rt>かな</rt></ruby>し<span style='color:#d64045'>げ</span>にうつむいていた。</b>",
          "cn": "她神情悲伤地低着头。"
        }
      ],
      "related": []
  },
  {
      "id": 229,
      "title": "～やら～やら",
      "romaji": "yara~yara",
      "kana": "やら〜やら",
      "tags": "列举 繁多 杂乱",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "又…又… / 啦…啦…",
      "connection": "Vる／イAい／N + やら",
      "desc": "用于列举两个同类事物，暗示除此之外还有其他类似事物。常带有<b>杂乱、繁多或令人头疼</b>的主观情感色彩。",
      "examples": [
        {
          "jp": "<b><ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>なか</rt></ruby>は<ruby>本<rt>ほん</rt></ruby><span style='color:#d64045'>やら</span><ruby>服<rt>ふく</rt></ruby><span style='color:#d64045'>やら</span>が<ruby>散<rt>ち</rt></ruby>らかっている。</b>",
          "cn": "房间里书啦衣服啦散落一地。"
        }
      ],
      "related": []
  },
  {
      "id": 230,
      "title": "～かと思うと / ～かと思ったら",
      "romaji": "katoomouto / katoomottara",
      "kana": "かとおもうと / かとおもったら",
      "tags": "迅速 意外 变化",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第10課",
      "meaning": "刚一…就… / 以为…却…",
      "connection": "Vた + かと思うと / ～かと思ったら",
      "desc": "1. 表示前项动作刚发生，紧接着发生了令人意外的后项变化，强调<b>变化极其迅速</b>。<br>2. 表示客观事实与原有的<b>预期截然相反</b>。不用于说话人自身的行为。",
      "examples": [
        {
          "jp": "<b><ruby>空<rt>そら</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>くなった<span style='color:#d64045'>かと<ruby>思<rt>おも</rt></ruby>うと</span>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>り<ruby>出<rt>だ</rt></ruby>した。</b>",
          "cn": "【迅速】天空刚一变暗，就下起雨来了。"
        },
        {
          "jp": "<b><ruby>怒<rt>おこ</rt></ruby>っているの<span style='color:#d64045'>かと<ruby>思<rt>おも</rt></ruby>うと</span>、<ruby>急<rt>きゅう</rt></ruby>に<ruby>笑<rt>わら</rt></ruby>い<ruby>出<rt>だ</rt></ruby>した。</b>",
          "cn": "【意外】还以为他在生气，结果突然笑了起来。"
        }
      ],
      "related": []
  },
  {
      "id": 231,
      "title": "～にほかならない",
      "romaji": "nihokanaranai",
      "kana": "にほかならない",
      "tags": "断定 原因 本质",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "无非是… / 正是…",
      "connection": "名词 / 普通形+から + にほかならない",
      "desc": "用于断言某事物的原因或本质，强调<b>绝对是这样，不可能是别的</b>。常接在「～から」之后表示确切的原因。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>は、<ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>の<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby><span style='color:#d64045'>にほかならない</span>。</b>",
          "cn": "他的成功无非是努力的结果。"
        }
      ],
      "related": []
  },
  {
      "id": 232,
      "title": "～にすぎない",
      "romaji": "nisuginai",
      "kana": "にすぎない",
      "tags": "程度 限制 评价",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "只不过是…",
      "connection": "动词普通形 / い形普通形 / な形+である / 名词（+である） + にすぎない",
      "desc": "强调程度低、数量少或事态并不重要，表达<b>只不过是这种程度而已</b>的个人判断。",
      "examples": [
        {
          "jp": "<b>それは<ruby>私<rt>わたし</rt></ruby>の<ruby>個<rt>こ</rt></ruby><ruby>人<rt>じん</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby><span style='color:#d64045'>にすぎない</span>。</b>",
          "cn": "那只不过是我个人的意见。"
        }
      ],
      "related": []
  },
  {
      "id": 233,
      "title": "～上に",
      "romaji": "ueni",
      "kana": "うえに",
      "tags": "叠加 递进 累积",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "而且… / 加上…",
      "connection": "动词普通形 / い形普通形 / な形+な・である / 名词+の・である + 上に",
      "desc": "表示在原有情况的基础之上，又<b>叠加了相同倾向的情况</b>。前后两项通常同为积极或同为消极的评价。",
      "examples": [
        {
          "jp": "<b>この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>美<rt>おい</rt></ruby>味しい<span style='color:#d64045'><ruby>上<rt>うえ</rt></ruby>に</span>、<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>も<ruby>安<rt>やす</rt></ruby>い。</b>",
          "cn": "这道菜不仅好吃，而且价格便宜。"
        }
      ],
      "related": []
  },
  {
      "id": 234,
      "title": "～といっても",
      "romaji": "toittemo",
      "kana": "といっても",
      "tags": "转折 让步 修正",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "虽说…但是…",
      "connection": "动词普通形 / い形普通形 / な形 / 名词 + といっても",
      "desc": "表示实际情况与听到前项时所预想的程度有差距。对前项的基准进行<b>补充说明</b>。",
      "examples": [
        {
          "jp": "<b><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>ができる<span style='color:#d64045'>といっても</span>、<ruby>卵<rt>たまご</rt></ruby><ruby>焼<rt>や</rt></ruby>きくらいだ。</b>",
          "cn": "虽说会做饭，但也就会煎个鸡蛋。"
        }
      ],
      "related": []
  },
  {
      "id": 235,
      "title": "～に限る",
      "romaji": "nikagiru",
      "kana": "にかぎる",
      "tags": "主观 最佳 选择",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "最好… / …是最好的",
      "connection": "动词辞书形 / 动词ない形 / 名词 + に限る",
      "desc": "表达说话人的主观确信，认为在某种情况下，做某事或某事物是<b>最好、最理想的选择</b>。",
      "examples": [
        {
          "jp": "<b><ruby>疲<rt>つか</rt></ruby>れた<ruby>時<rt>とき</rt></ruby>は、<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>る<span style='color:#d64045'>に<ruby>限<rt>かぎ</rt></ruby>る</span>。</b>",
          "cn": "累了的时候，最好早点睡觉。"
        }
      ],
      "related": []
  },
  {
      "id": 236,
      "title": "～だけあって",
      "romaji": "dakeatte",
      "kana": "だけあって",
      "tags": "原因 评价 顺接",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "不愧是… / 正因为…",
      "connection": "动词普通形 / い形普通形 / な形+な / 名词 + だけあって",
      "desc": "表示后项的良好结果或极高评价，完全符合前项的客观条件或地位。带有<b>正因为如此，理所当然</b>的语感。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>はスポーツ<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby><span style='color:#d64045'>だけあって</span>、<ruby>体<rt>たい</rt></ruby><ruby>格<rt>かく</rt></ruby>がいい。</b>",
          "cn": "他不愧是运动员，体格真好。"
        }
      ],
      "related": []
  },
  {
      "id": 237,
      "title": "～にしろ～にしろ / ～にせよ～にせよ",
      "romaji": "nishiro~nishiro",
      "kana": "にしろ〜にしろ",
      "tags": "并列 条件 无论",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第11課",
      "meaning": "无论是…还是…",
      "connection": "动词普通形 / い形普通形 / な形 / 名词 + にしろ + 动词普通形 / い形普通形 / な形 / 名词 + にしろ",
      "desc": "列举两个同类或对立的事物，表示<b>无论是哪种情况</b>，后项的结论、判断或要求都完全成立。",
      "examples": [
        {
          "jp": "<b><ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>にしろ</span><ruby>行<rt>い</rt></ruby>かない<span style='color:#d64045'>にしろ</span>、<ruby>早<rt>はや</rt></ruby>く<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>してください。</b>",
          "cn": "去还是不去，都请早点联系。"
        }
      ],
      "related": []
  },
  {
    "id": 238,
    "title": "～とか / ～とかいう",
    "romaji": "toka / tokaiu",
    "kana": "とか / とかいう",
    "tags": "传闻 不确定 模糊",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第12課",
    "meaning": "听说… / 叫作…的",
    "connection": "普通形 + とか / 名词・普通形 + とかいう + 名词",
    "desc": "具体用法分为两种：<br>1. 「～とか」表示从他人处听来的、<b>不确定的传闻信息</b>。语气比「そうだ」更加模糊。<br>2. 「～とかいう」修饰名词，表示听说过该名称或事态，但<b>记忆不准确或不十分了解</b>。",
    "examples": [
      {
        "jp": "<b><ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby>から<ruby>家<rt>や</rt></ruby><ruby>賃<rt>ちん</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる<span style='color:#d64045'>とか</span>。</b>",
        "cn": "【传闻】听说下个月起房租要涨。"
      },
      {
        "jp": "<b><ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby><span style='color:#d64045'>とかいう</span><ruby>人<rt>ひと</rt></ruby>から<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>がありましたよ。</b>",
        "cn": "【不确定名称】昨天，有个叫山田的人打来过电话。"
      }
    ],
    "related": []
},
  {
      "id": 239,
      "title": "～に沿って / ～に沿い",
      "romaji": "nisotte / nisoi",
      "kana": "にそって / にそい",
      "tags": "基准 顺从 路线",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "沿着… / 按照…",
      "connection": "名词 + に沿って / に沿い / に沿う / に沿った",
      "desc": "具体用法分为两种：<br>1. 表示以某条线状物为基准，<b>不偏离其延伸方向</b>进行动作。<br>2. 表示某事态<b>严格遵照既定的方针、规则或期待</b>推进。",
      "examples": [
        {
          "jp": "<b>この<ruby>川<rt>かわ</rt></ruby><span style='color:#d64045'>に<ruby>沿<rt>そ</rt></ruby>って</span><ruby>歩<rt>ある</rt></ruby>いてください。</b>",
          "cn": "【路线】请沿着这条河走。"
        },
        {
          "jp": "<b>お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>のご<ruby>希<rt>き</rt></ruby><ruby>望<rt>ぼう</rt></ruby><span style='color:#d64045'>に<ruby>沿<rt>そ</rt></ruby>って</span>、<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る。</b>",
          "cn": "【遵照】按照客户的期望制作商品。"
        }
      ],
      "related": []
  },
  {
      "id": 240,
      "title": "～にかけては",
      "romaji": "nikaketehwa",
      "kana": "にかけては",
      "tags": "领域 评价 最强",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "在…方面",
      "connection": "名词 + にかけては",
      "desc": "限定某个特定领域或技能，表示在该范畴内<b>具有最优秀的水平或无人能及的能力</b>。后项多接续客观的最高评价。",
      "examples": [
        {
          "jp": "<b><ruby>足<rt>あし</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ<span style='color:#d64045'>にかけては</span>、<ruby>誰<rt>だれ</rt></ruby>にも<ruby>負<rt>ま</rt></ruby>けない。</b>",
          "cn": "在跑步速度方面，不输给任何人。"
        }
      ],
      "related": []
  },
  {
      "id": 241,
      "title": "～ないことには",
      "romaji": "naikotonihwa",
      "kana": "ないことには",
      "tags": "条件 否定 前提",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "如果不…就（不能）…",
      "connection": "动词ない形 / い形く / な形+で / 名词+で + ないことには",
      "desc": "表示前项动作或状态是后项成立的<b>绝对必要前提</b>。后项常伴随否定、消极的内容。",
      "examples": [
        {
          "jp": "<b><ruby>実<rt>じつ</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>を<ruby>見<rt>み</rt></ruby><span style='color:#d64045'>ないことには</span>、<ruby>買<rt>か</rt></ruby>うかどうか<ruby>決<rt>き</rt></ruby>められない。</b>",
          "cn": "如果不看到实物，就无法决定买不买。"
        }
      ],
      "related": []
  },
  {
      "id": 242,
      "title": "～がち",
      "romaji": "gachi",
      "kana": "がち",
      "tags": "倾向 频率 负面",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "容易… / 往往会…",
      "connection": "动词第一连用形 / 名词 + がちだ / がちな / がちの",
      "desc": "表示在客观上具有<b>反复发生某种负面状态</b>的属性或极易陷入的倾向。多用于批评或陈述不良习惯。",
      "examples": [
        {
          "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>み<span style='color:#d64045'>がちだ</span>。</b>",
          "cn": "他最近经常向公司请假。"
        }
      ],
      "related": []
  },
  {
      "id": 243,
      "title": "～としたら / ～とすれば / ～とすると",
      "romaji": "toshitara",
      "kana": "としたら",
      "tags": "假定 假设 条件",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "如果…的话 / 假设…",
      "connection": "动词普通形 / い形普通形 / な形普通形 / 名词普通形 + としたら",
      "desc": "提出一个<b>纯粹的假定条件或尚未发生的情况</b>。后项多接续说话人的判断、评价、主张或询问。",
      "examples": [
        {
          "jp": "<b>もし<ruby>百<rt>ひゃく</rt></ruby><ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>あった<span style='color:#d64045'>としたら</span>、<ruby>何<rt>なに</rt></ruby>に<ruby>使<rt>つか</rt></ruby>いますか。</b>",
          "cn": "如果有一百万日元的话，你会用来做什么？"
        }
      ],
      "related": []
  },
  {
      "id": 244,
      "title": "～次第だ / ～次第で（は）",
      "romaji": "shidaida / shidaide",
      "kana": "しだいだ / しだいで（は）",
      "tags": "条件 依赖 决定",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "取决于… / 根据…而定",
      "connection": "名词 + 次第だ / 次第で（は）",
      "desc": "表示事态的后续发展或最终结果<b>完全由前项的条件或情况来决定</b>。带有强烈的对应关系。",
      "examples": [
        {
          "jp": "<b><ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>するかどうかは、あなたの<ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby><span style='color:#d64045'><ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>だ</span>。</b>",
          "cn": "能否成功取决于你的努力。"
        }
      ],
      "related": []
  },
  {
      "id": 245,
      "title": "～一方だ",
      "romaji": "ippouda",
      "kana": "いっぽうだ",
      "tags": "变化 趋势 恶化",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "不断… / 一直…",
      "connection": "动词辞书形 + 一方だ",
      "desc": "表示某种状态或事态<b>朝着同一个方向不断发展</b>。多用于描述不受控制的消极或负面趋势。",
      "examples": [
        {
          "jp": "<b><ruby>物<rt>ぶっ</rt></ruby><ruby>価<rt>か</rt></ruby>は<ruby>上<rt>あ</rt></ruby>がる<span style='color:#d64045'><ruby>一<rt>いっ</rt></ruby><ruby>方<rt>ぽう</rt></ruby>だ</span>。</b>",
          "cn": "物价一直在上涨。"
        }
      ],
      "related": [246]
  },
  {
      "id": 246,
      "title": "～ばかりだ",
      "romaji": "bakarida",
      "kana": "ばかりだ",
      "tags": "变化 趋势 恶化",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "不断… / 光是…",
      "connection": "动词辞书形 + ばかりだ",
      "desc": "表示事态<b>朝着某种消极的方向持续恶化</b>。常带有说话人遗憾或无能为力的主观情感。",
      "examples": [
        {
          "jp": "<b><ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>の<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>は<ruby>悪<rt>わる</rt></ruby>くなる<span style='color:#d64045'>ばかりだ</span>。</b>",
          "cn": "祖父的病情不断恶化。"
        }
      ],
      "related": [245]
  },
  {
      "id": 247,
      "title": "～に先立って / ～に先立ち",
      "romaji": "nisakidatte / nisakidachi",
      "kana": "にさきだって / にさきだち",
      "tags": "准备 顺序 书面语",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "在…之前",
      "connection": "名词 / 动词辞书形+の + に先立って",
      "desc": "表示在进行某项重大的或正式的动作之前，<b>事先做好必要的准备工作</b>。多用于公文或郑重的客观报道中。",
      "examples": [
        {
          "jp": "<b><ruby>開<rt>かい</rt></ruby><ruby>店<rt>てん</rt></ruby><span style='color:#d64045'>に<ruby>先<rt>さき</rt></ruby><ruby>立<rt>だ</rt></ruby>って</span>、パーティーが<ruby>開<rt>ひら</rt></ruby>かれた。</b>",
          "cn": "在开店之前，举办了派对。"
        }
      ],
      "related": []
  },
  {
      "id": 248,
      "title": "～にこたえて / ～にこたえる / ～にこたえた",
      "romaji": "nikotaete",
      "kana": "にこたえて / にこたえる / にこたえた",
      "tags": "响应 满足 期待",
      "level": "N2",
      "book": "Try! N2 文法",
      "lesson": "第12課",
      "meaning": "响应… / 满足… / 回报…",
      "connection": "名词 + にこたえて / にこたえる / にこたえた",
      "desc": "表示为了<b>不辜负对方的期待、要求或声援</b>，而做出相应的积极行动或正面回应。常接续期待、要望等名词。",
      "examples": [
        {
          "jp": "<b><ruby>皆<rt>みな</rt></ruby><ruby>様<rt>さま</rt></ruby>のご<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby><span style='color:#d64045'>にこたえて</span>、<ruby>全<rt>ぜん</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>尽<rt>つ</rt></ruby>くします。</b>",
          "cn": "为了不辜负大家的期待，我会全力以赴。"
        }
      ],
      "related": []
  },
  {
    "id": 249,
    "title": "〜たことにする",
    "romaji": "takotonisuru",
    "kana": "〜たことにする",
    "tags": "假装 视作 当作",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "就当作... / 假装...",
    "connection": "动词 た形 / 动词 ない形 + ことにする",
    "desc": "表示<b>将事实上并没有发生或并不存在的情况，在主观上当作事实来对待</b>。",
    "examples": [
      {
        "jp": "<b>その<ruby>話<rt>はなし</rt></ruby>は<ruby>聞<rt>き</rt></ruby>かなかった<span style='color:#d64045'>ことに</span>してください。</b>",
        "cn": "那件事请就当作没听到。"
      }
    ],
    "related": []
  },
  {
    "id": 250,
    "title": "〜てならなかった",
    "romaji": "tenaranakatta",
    "kana": "〜てならなかった",
    "tags": "不由得 极其 非常",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "...得不得了 / 不由得...",
    "connection": "动词 て形 + ならなかった / い形容词 くて + ならなかった / な形容词・名词 で + ならなかった",
    "desc": "表示<b>某种感情、感觉或身体状况自然而然地涌现，且程度非常强烈，无法抑制</b>（过去时态）。",
    "examples": [
      {
        "jp": "<b><ruby>国<rt>くに</rt></ruby>の<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>のことが<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby><span style='color:#d64045'>でならなかった</span>。</b>",
        "cn": "极其担心国内的家人。"
      }
    ],
    "related": []
  },
  {
    "id": 251,
    "title": "〜れるものなら",
    "romaji": "rerumononara",
    "kana": "〜れるものなら",
    "tags": "如果能 万一",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "如果能...的话",
    "connection": "动词 能动态 + ものなら",
    "desc": "接在动词<b>能动态</b>后，表示<b>实现可能性极低的事情，带有“如果真能做到的话”的语感</b>。",
    "examples": [
      {
        "jp": "<b><ruby>帰<rt>かえ</rt></ruby>れる<span style='color:#d64045'>ものなら</span>、<ruby>今<rt>いま</rt></ruby>すぐ<ruby>帰<rt>かえ</rt></ruby>りたい。</b>",
        "cn": "如果能回去的话，真想马上回去。"
      }
    ],
    "related": []
  },
  {
    "id": 252,
    "title": "〜こうか〜まいか",
    "romaji": "koukamaika",
    "kana": "〜こうか〜まいか",
    "tags": "犹豫 烦恼",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "是...还是不...呢",
    "connection": "动词 意志形 + か + 动词基本形 / 第一连用形 + まいか",
    "desc": "表示<b>在两个对立的选项之间犹豫不决，拿不定主意</b>。",
    "examples": [
      {
        "jp": "<b><ruby>行<rt>い</rt></ruby><span style='color:#d64045'>こうか</span><ruby>行<rt>い</rt></ruby>く<span style='color:#d64045'>まいか</span>、まだ<ruby>迷<rt>まよ</rt></ruby>っている。</b>",
        "cn": "是去还是不去，我还在犹豫。"
      }
    ],
    "related": []
  },
  {
    "id": 253,
    "title": "〜末（に）",
    "romaji": "sue",
    "kana": "〜すえ（に）",
    "tags": "结果 最后 经过",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "经过...最后...",
    "connection": "动词 た形 + 末（に）/ 名词 + の + 末（に）",
    "desc": "表示<b>经过了漫长的过程或历经了种种曲折之后，最终得到了某种结果</b>。",
    "examples": [
      {
        "jp": "<b>よく<ruby>考<rt>かんが</rt></ruby>えた<span style='color:#d64045'><ruby>末<rt>すえ</rt></ruby>に</span>、<ruby>決<rt>き</rt></ruby><ruby>定<rt>てい</rt></ruby>しました。</b>",
        "cn": "经过深思熟虑后，做出了决定。"
      }
    ],
    "related": []
  },
  {
    "id": 254,
    "title": "たとえ〜ても",
    "romaji": "tatoetemo",
    "kana": "たとえ〜ても",
    "tags": "即使 哪怕 就算",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "即使...也... / 哪怕...也...",
    "connection": "たとえ + 动词 て形 + も / い形容词 くて + も / な形容词・名词 で + も",
    "desc": "表示<b>让步条件，即假设某种极端的或可能性很低的情况发生，其结果或后项的情况也不会改变</b>。",
    "examples": [
      {
        "jp": "<b><span style='color:#d64045'>たとえ</span><ruby>親<rt>おや</rt></ruby>に<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>され<span style='color:#d64045'>ても</span>、<ruby>彼<rt>かれ</rt></ruby>と<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby>します。</b>",
        "cn": "即使被父母反对，我也要和他结婚。"
      }
    ],
    "related": []
  },
  {
    "id": 255,
    "title": "〜がたい",
    "romaji": "gatai",
    "kana": "〜がたい",
    "tags": "难以 很难 无法",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "难以... / 很难...",
    "connection": "动词 第一连用形 + がたい",
    "desc": "常接在「信じる」「許す」「理解する」等动词之后,表示<b>在心理上或主观上难以做到某事，带有强烈的感情色彩</b>。",
    "examples": [
      {
        "jp": "<b>これは<ruby>信<rt>しん</rt></ruby>じ<span style='color:#d64045'>がたい</span><ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>だ。</b>",
        "cn": "这是一起难以置信的事件。"
      }
    ],
    "related": []
  },
  {
    "id": 256,
    "title": "〜もかまわず",
    "romaji": "mokamawazu",
    "kana": "〜もかまわず",
    "tags": "不顾 不管",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "不顾... / 不管...",
    "connection": "名词 + もかまわず / 动词基本形 + の + もかまわず",
    "desc": "表示<b>不顾及通常应该顾虑的事情（如周围的目光、常识、时间、地点等），就采取某种行动</b>。多带有批评、惊讶的语气。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>人<rt>ひと</rt></ruby><ruby>目<rt>め</rt></ruby><span style='color:#d64045'>もかまわず</span>、<ruby>大<rt>おお</rt></ruby><ruby>声<rt>ごえ</rt></ruby>で<ruby>泣<rt>泣</rt></ruby>いた。</b>",
        "cn": "他不顾别人的眼光，大声哭泣。"
      }
    ],
    "related": []
  },
  {
    "id": 257,
    "title": "〜あまり",
    "romaji": "amari",
    "kana": "〜あまり",
    "tags": "过于 太过 结果",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "过于... / 因为太...而...",
    "connection": "动词基本形 / 动词 た形 + あまり / な形容词 な + あまり / 名词 + の + あまり",
    "desc": "表示<b>某种感情或状态达到了极端的程度，从而导致了不寻常或不好的结果</b>。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>驚<rt>おどろ</rt></ruby>き<span style='color:#d64045'>のあまり</span>、<ruby>声<rt>こえ</rt></ruby>も<ruby>出<rt>で</rt></ruby>なかった。</b>",
        "cn": "他因为太惊讶而说不出话来。"
      }
    ],
    "related": []
  },
  {
    "id": 258,
    "title": "〜を込めて",
    "romaji": "wokomete",
    "kana": "〜をこめて",
    "tags": "倾注 饱含 包含",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "倾注... / 饱含...",
    "connection": "名词 + を込めて",
    "desc": "常接在「愛」「心」「願い」等名词后,表示<b>在某种行为或事物中倾注、包含某种强烈的感情或心意</b>。",
    "examples": [
      {
        "jp": "<b><ruby>愛<rt>あい</rt></ruby><span style='color:#d64045'>を<ruby>込<rt>こ</rt></ruby>めて</span>、この<ruby>手<rt>て</rt></ruby><ruby>紙<rt>がみ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きました。</b>",
        "cn": "饱含爱意写了这封信。"
      }
    ],
    "related": []
  },
  {
    "id": 259,
    "title": "〜も〜ば〜も",
    "romaji": "momobamo",
    "kana": "〜も〜ば〜も",
    "tags": "既又 也有也有",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "既...又... / 既有...也有...",
    "connection": "名词 + も + 动词 ば形 / い形容词 ければ / な形容词 なら + 名词 + も",
    "desc": "表示<b>并列或累加关系，即不仅有前项列举的事物，也有后项列举的事物</b>。",
    "examples": [
      {
        "jp": "<b><ruby>彼<rt>かれ</rt></ruby>は<ruby>酒<rt>さけ</rt></ruby><span style='color:#d64045'>も</span><ruby>饮<rt>の</rt></ruby>め<span style='color:#d64045'>ば</span>、タバコ<span style='color:#d64045'>も</span><ruby>吸<rt>す</rt></ruby>う。</b>",
        "cn": "他既喝酒又抽烟。"
      }
    ],
    "related": []
  },
  {
    "id": 260,
    "title": "〜ぬく",
    "romaji": "nuku",
    "kana": "〜ぬく",
    "tags": "到底 彻底 坚持",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第13課",
    "meaning": "...到底 / 彻底...",
    "connection": "动词 第一连用形 + ぬく",
    "desc": "具体用法分为两种：<br>1. 表示<b>克服困难、忍受痛苦，将某事坚持做到底</b>。2. 表示<b>某种程度达到了极点</b>（如：困りぬく）。",
    "examples": [
      {
        "jp": "<b><ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<ruby>走<rt>はし</rt></ruby>り<span style='color:#d64045'>ぬく</span>ことができました。</b>",
        "cn": "能够坚持跑到了最后。"
      }
    ],
    "related": []
  },
  {
    "id": 261,
    "title": "〜をめぐって / 〜をめぐる",
    "romaji": "omegutte",
    "kana": "〜をめぐって / 〜をめぐる",
    "tags": "围绕 围绕着",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "围绕... / 关于...",
    "connection": "名词 + をめぐって / をめぐる",
    "desc": "表示<b>以某个问题、事件或传闻为中心，多方进行争论、对立或展开后续行动</b>。后接表示对立、讨论、传闻等意义的词。",
    "examples": [
      {
        "jp": "<b>マンションの<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby><span style='color:#d64045'>をめぐって</span>、<ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>たちが<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>している。</b>",
        "cn": "围绕着公寓的建设问题，居民们正在反对。"
      }
    ],
    "related": []
  },
  {
    "id": 262,
    "title": "〜にあたって / 〜に際して",
    "romaji": "niatatte",
    "kana": "〜にあたって / 〜にさいして",
    "tags": "在...之际 值此之际",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "在...之际 / 当...的时候",
    "connection": "名词 / 动词 基本形 + にあたって",
    "desc": "表示<b>在面临某个重要节点、仪式或开始新计划等时刻，应该注意、准备或采取的行动</b>。属于正式用语。",
    "examples": [
      {
        "jp": "<b><ruby>新<rt>あたら</rt></ruby>しい<ruby>事<rt>じ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<span style='color:#d64045'>にあたって</span>、しっかりとした<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。</b>",
        "cn": "在开始新事业之际，周密的计划是必要的。"
      }
    ],
    "related": []
  },
  {
    "id": 263,
    "title": "〜に加えて",
    "romaji": "nikuwaete",
    "kana": "〜にくわえて",
    "tags": "加上 而且",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "再加上... / 而且...",
    "connection": "名词 + に加えて",
    "desc": "表示<b>在已有的事物之上，再加上其他的因素或条件</b>。具有程度的累加感。",
    "examples": [
      {
        "jp": "<b><ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby><span style='color:#d64045'>に加えて</span>、<ruby>風<rt>かぜ</rt></ruby>も<ruby>強<rt>つよ</rt></ruby>くなってきた。</b>",
        "cn": "大雨之外，风也变得强劲起来。"
      }
    ],
    "related": []
  },
  {
    "id": 264,
    "title": "〜としても",
    "romaji": "toshitemo",
    "kana": "〜としても",
    "tags": "即使 哪怕 就算",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "即使...也... / 就算...",
    "connection": "普通形（名词・な形容词 词干 だ可省略） + としても",
    "desc": "表示<b>一种假设性的让步。即便假设前项成立，后项的意志、意见或事态也不会受其影响</b>。",
    "examples": [
      {
        "jp": "<b>たとえ<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>した<span style='color:#d64045'>としても</span>、<ruby>後<rt>こう</rt></ruby><ruby>悔<rt>かい</rt></ruby>はしない。</b>",
        "cn": "即使失败了，我也不会后悔。"
      }
    ],
    "related": []
  },
  {
    "id": 265,
    "title": "〜に基づいて",
    "romaji": "nimotozuite",
    "kana": "〜にもとづいて",
    "tags": "基于 根据",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "根据... / 基于...",
    "connection": "名词 + に基づいて",
    "desc": "表示<b>以某个基础、事实、规则或数据作为动作或判断的依据</b>。",
    "examples": [
      {
        "jp": "<b>アンケートの<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby><span style='color:#d64045'>に基づいて</span>、<ruby>新<rt>あたら</rt></ruby>しいプロジェクトを<ruby>進<rt>すす</rt></ruby>める。</b>",
        "cn": "根据问卷调查的结果，推进新项目。"
      }
    ],
    "related": []
  },
  {
    "id": 266,
    "title": "〜をもとに（して）",
    "romaji": "owotomoni",
    "kana": "〜をもとに（して）",
    "tags": "以此为素材 基于",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "以...为基础 / 以...为素材",
    "connection": "名词 + をもとに（して）",
    "desc": "表示<b>以某物为原始材料、素材或基础，在此之上创造出新的东西或做出行动</b>。常接表示素材、依据的词。",
    "examples": [
      {
        "jp": "<b>この<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby>は<ruby>実<rt>じつ</rt></ruby><ruby>話<rt>わ</rt></ruby><span style='color:#d64045'>をもとに</span><ruby>書<rt>か</rt></ruby>かれている。</b>",
        "cn": "这部小说是以真实故事为原型创作的。"
      }
    ],
    "related": []
  },
  {
    "id": 267,
    "title": "〜てこそ",
    "romaji": "tekoso",
    "kana": "〜てこそ",
    "tags": "只有...才 才是",
    "level": "N2",
    "book": "Try! N2 文法",
    "lesson": "第14課",
    "meaning": "只有...才... / 只有做了...才是...",
    "connection": "动词 て形 + こそ",
    "desc": "表示<b>只有在完成了某事或具备了某种条件之后，才真正具有意义或达到某种状态</b>。强调该条件是必不可少的。",
    "examples": [
      {
        "jp": "<b><ruby>親<rt>おや</rt></ruby>になって<span style='color:#d64045'>こそ</span>、<ruby>親<rt>おや</rt></ruby>の<ruby>苦<rt>く</rt></ruby><ruby>労<rt>ろう</rt></ruby>がわかる。</b>",
        "cn": "只有自己当了父母，才能理解父母的辛劳。"
      }
    ],
    "related": []
  },
    // 在这里添加 N2 数据
        ];
        // #endregion

        // 合并所有数据
        const grammarData = [
            ...tryN1Data,
            ...tryN2Data
        ];