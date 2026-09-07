(function () {
    "use strict";

    const INDEX_COLLAPSE_STORAGE_KEY = "kikiFormalNounIndexCollapse";
    const LEVEL_ORDER = { N3: 1, N2: 2, N1: 3 };
    const GROUP_DEFINITIONS = [
        {
            id: "koto", noun: "こと", meaning: "事情・内容",
            concept: "把动作、状态或整段内容看作一件事情，是日语中最常用的名词化形式之一。",
            uses: ["把句子名词化，作为主语、宾语或判断对象", "表达经历、决定、规定、传闻和评价", "终助词化后表示命令、提醒或感叹"],
            excludeSourceIds: ["n1-050", "mainichi-n1-014"]
        },
        {
            id: "mono", noun: "もの", meaning: "事物・常理",
            concept: "原指人或事物，也可以把前项作为具有某种性质、常理或感情色彩的对象来概括。",
            uses: ["概括事物的性质、常理和应有状态", "表达原因、辩解、感慨或强烈否定", "与条件、逆接等形式结合构成固定表达"],
            excludeSourceIds: ["mainichi-n1-001", "n1-096"]
        },
        {
            id: "tokoro", noun: "ところ", meaning: "阶段・位置",
            concept: "原指场所，作为形式名词时常表示动作所处的时间点、阶段、局面或范围。",
            uses: ["说明动作即将发生、正在发生或刚刚结束", "表示当时的场面、状况和判断范围", "与助词结合表达发现、让步或原因"]
        },
        {
            id: "wake", noun: "わけ", meaning: "理由・道理",
            concept: "表示事情背后的理由、原委或可以推导出的道理，常用于解释判断是怎样成立的。",
            uses: ["说明自然结论或前后关系", "否定某种整体理解或成立可能", "表达因常识、责任或处境而不能行动"]
        },
        {
            id: "hazu", noun: "はず", meaning: "有依据的预期",
            concept: "表示根据计划、知识、记忆或客观情况形成的合理预期，不只是说话人的主观猜测。",
            uses: ["表达按理应该成立的判断", "否定某种可能性", "回顾原本预计成立但实际落空的事情"]
        },
        {
            id: "tame", noun: "ため", meaning: "目的・原因",
            concept: "原指利益或缘由，作为形式名词时主要用于说明行动的目的、受益对象或造成结果的原因。",
            uses: ["表示为了某个目标或对象", "以较正式的语气说明原因和理由"]
        },
        {
            id: "ue",
            noun: "上",
            meaning: "基础・方面",
            concept: "原指上方，进入语法表达后可引申为行动的前提、判断的方面或在既有内容上的追加。",
            uses: ["表示完成某事后再进行后项", "表示既成事实带来的责任或决心", "限定判断的方面，或追加同方向的信息"],
            sourceIds: ["n2-142", "n2-149", "n2-202", "n2-233"]
        },
        {
            id: "tsumori", noun: "つもり", meaning: "意图・认定",
            concept: "表示心中形成的打算、意图或主观认定，重点在说话人如何看待自己的行动或状态。",
            uses: ["说明将要采取的行动计划", "把某件事主观地当作已经成立"]
        },
        {
            id: "mama", noun: "まま", meaning: "状态保持",
            concept: "表示原有状态没有改变，或不加干预地顺从前项的意志、感觉与事态，后项就在这一状态或方向下发生。",
            uses: ["说明状态保持不变", "表达没有进行通常应有的处理就进入后项", "表示任凭前项支配或照前项所示行事"],
            sourceIds: ["n3-047", "supp-formal-noun-002"]
        },
        {
            id: "uchi", noun: "うち", meaning: "期间・范围",
            concept: "原指内部或范围之内，作为形式名词时常把动作限定在某段时间或某种状态持续的范围内。",
            uses: ["趁某种状态持续时采取行动", "表示在一段期间内自然发生变化", "表达前后动作在很短时间内接连发生"]
        },
        {
            id: "sei", noun: "せい", meaning: "负面原因",
            concept: "表示造成不理想结果的原因，并常带有责怪、遗憾或把责任归于前项的语气。",
            uses: ["说明负面结果的原因", "表达说话人的不满或遗憾"]
        },
        {
            id: "okage", noun: "おかげ", meaning: "积极原因",
            concept: "表示带来良好结果的原因，通常含有感谢、庆幸或对帮助者的肯定。",
            uses: ["说明好结果的原因", "表达感谢或庆幸"]
        },
        {
            id: "kawari", noun: "かわり", meaning: "替代・交换",
            concept: "表示某人或某事代替另一对象，也可以表示以一个条件、优点或负担交换另一个方面。",
            uses: ["表示代替别人或其他事物", "说明交换条件、补偿关系或相反的两个方面"],
            sourceIds: ["n3-045"]
        },
        {
            id: "toki", noun: "とき", meaning: "时间・场合",
            concept: "表示事情发生的时间点、时期或场合，可以把前项状态作为后项发生的时间背景。",
            uses: ["说明动作发生的时间", "表示处于某种状态或情况时", "区分动作前、动作中和动作后的时间关系"],
            sourceIds: []
        },
        {
            id: "aida", noun: "あいだ", meaning: "期间・间隔",
            concept: "原指两者之间的空间或范围，作为形式名词时主要表示某种状态持续的期间或其中的某个时间点。",
            uses: ["表示整个期间持续进行的动作", "表示在一段期间内发生一次或完成的动作"],
            sourceIds: ["supp-n1-review-001", "supp-n1-review-002"]
        },
        {
            id: "you", noun: "よう", meaning: "样态・方式",
            concept: "来自「様」，表示事物呈现的样子、状态或方式，也可进一步表示目标、比拟和行为所朝向的结果。",
            uses: ["说明相似的样态或比拟", "表示希望达到的目标状态", "说明方法、条件、指示或祈愿"],
            sourceIds: ["n2-175", "n2-212", "n3-002", "n3-027", "n3-063", "n3-080", "supp-n1-review-031", "supp-n1-review-054", "supp-n1-review-056", "supp-formal-noun-001"]
        },
        {
            id: "no", noun: "の", meaning: "内容的名词化",
            concept: "代替具体名词，把前面的动作、状态或整段内容作为一个对象来处理；口语中也常形成「ん」的形式。",
            uses: ["代替上下文中可以识别的人、事物或选项", "把动作、状态或整段内容名词化"],
            sourceIds: ["n3-031", "n3-064", "n1-050"]
        },
        {
            id: "kagiri", noun: "限り", meaning: "范围・限度",
            concept: "表示边界、限度或能够成立的范围，可用于说明终点、成立期间或感情达到的程度。",
            uses: ["说明事情的终点或界限", "表示某状态持续期间后项成立", "表示感情或评价达到最高程度"],
            sourceIds: ["n1-072", "n1-107", "n2-154"]
        },
    ];

    const CONCEPT_USE_DETAILS = {
        koto: [
            { title: "整句名词化", description: "把前面的动作、状态或内容作为一件事情，充当主语、宾语或判断对象。" },
            { title: "事柄相关表达", description: "用于说明经历、决定、规定、传闻、原因和对某件事的评价。" },
            { title: "句末语气", description: "终助词化后，可以在句末表示命令、提醒、感叹或强调。" }
        ],
        mono: [
            { title: "概括性质与常理", description: "把前项作为具有某种性质、倾向或应有状态的事物来概括。" },
            { title: "表达原因与感情", description: "用于补充理由、辩解、愿望、感慨或强烈否定。" },
            { title: "构成条件与逆接", description: "与其他形式结合，表达假定条件、逆接和未如愿的结果。" }
        ],
        tokoro: [
            { title: "说明动作阶段", description: "表示动作即将发生、正在发生、刚刚结束等时间阶段。" },
            { title: "说明场面与范围", description: "把前项作为当时的局面、状况、程度或判断范围。" },
            { title: "连接前后内容", description: "与助词结合后，可以引出发现、让步、原因或客观判断。" }
        ],
        wake: [
            { title: "说明理由与结论", description: "根据前文事实说明事情的原委，或推出自然成立的结论。" },
            { title: "否定某种理解", description: "用于否定整体判断，或依据道理否定某件事成立的可能。" },
            { title: "表示行动限制", description: "说明因常识、责任、处境或心理原因而不能采取某种行动。" }
        ],
        hazu: [
            { title: "作出合理预期", description: "根据计划、知识、记忆或客观情况判断某件事按理会成立。" },
            { title: "否定成立可能", description: "从已有依据反推某件事按理不可能发生或成立。" },
            { title: "回顾预期落空", description: "说明原本预计应该实现，但实际结果与预期不一致。" }
        ],
        tame: [
            { title: "说明目的或受益对象", description: "表示行动是为了某个目标、对象或利益而进行。" },
            { title: "说明原因或理由", description: "以较正式的语气交代造成后项结果的原因。" }
        ],
        ue: [
            { title: "作为行动前提", description: "表示完成前项以后，再进行后项行动或判断。" },
            { title: "引出责任与决心", description: "以前项已成为事实为依据，说明后项应有的做法。" },
            { title: "限定方面或追加", description: "限定判断所依据的方面，或在前项内容上继续补充信息。" }
        ],
        tsumori: [
            { title: "说明行动打算", description: "表示说话人心中已经形成的计划、意图或行动方向。" },
            { title: "表示主观认定", description: "把某件事主观地当作已经成立，并据此采取后续行动。" }
        ],
        mama: [
            { title: "说明状态保持不变", description: "表示前项状态没有发生改变，后项就在该状态下继续。" },
            { title: "未经通常处理进入后项", description: "表示没有进行一般情况下应有的处理，就直接发生后项。" },
            { title: "任凭或依照前项行事", description: "不对前项加以改变或抵抗，任凭他人、事态支配，或照自己的想法与感受行动。" }
        ],
        uchi: [
            { title: "利用持续期间", description: "趁某种状态仍在持续时完成有意识的行动。" },
            { title: "表示期间内的变化", description: "说明某种变化在一段时间范围内逐渐或自然发生。" },
            { title: "表示紧接发生", description: "把前后动作限定在很短的时间范围内，说明两者接连出现。" }
        ],
        sei: [
            { title: "归因于负面结果", description: "把不理想的结果归于前项原因，并说明二者的因果关系。" },
            { title: "表达责怪或遗憾", description: "在说明原因的同时，带出说话人的不满、责怪或后悔。" }
        ],
        okage: [
            { title: "归功于积极原因", description: "把良好的结果归功于前项的帮助、条件或影响。" },
            { title: "表达感谢或庆幸", description: "在说明原因的同时，表达感谢、安心或庆幸的态度。" }
        ],
        kawari: [
            { title: "表示代替关系", description: "说明某人或某事替代原来的对象承担相应作用。" },
            { title: "表示交换与补偿", description: "以一个条件、优点或负担交换另一个方面，形成对应关系。" }
        ],
        toki: [
            { title: "说明动作发生的时间", description: "把前项作为后项动作发生的具体时间点或时期。" },
            { title: "说明所处状态或场合", description: "表示处于某种状态、情况或特定场合时发生后项。" },
            { title: "区分前中后关系", description: "通过前项形式区分动作发生以前、进行中或完成以后的时间。" }
        ],
        aida: [
            { title: "表示整个持续期间", description: "说明某个动作或状态贯穿前项所表示的整个时间范围。" },
            { title: "表示期间内的时间点", description: "说明一次性动作在前项持续期间内发生或完成。" }
        ],
        you: [
            { title: "说明样态或比拟", description: "把前项作为相似的样子、状态或方式来说明后项。" },
            { title: "表示目标状态", description: "说明希望达到、要求实现或祈愿成立的结果。" },
            { title: "说明方法与条件", description: "用于表示实现方法、依照方式、条件或需要传达的内容。" }
        ],
        no: [
            { title: "指代具体事物", description: "代替上下文中可以识别的人、事物或选项，例如「赤いの」中的「の」。" },
            { title: "把前项内容名词化", description: "把动作、状态或整段内容作为名词性整体，例如「本を読むのが好きだ」。" }
        ],
        kagiri: [
            { title: "说明终点与界限", description: "表示事情到某个时点结束，或明确其能够达到的边界。" },
            { title: "限定成立期间", description: "表示只要前项状态持续，后项就在这一范围内成立。" },
            { title: "表示最高程度", description: "说明感情或评价达到了所能表达的最高程度。" }
        ]
    };

    const ATLAS_RELATIONS = {
        koto: [
            { pos: "名词", posLabel: "事（こと）", label: "总结・解释", summary: "把前项内容作为一件事重新概括，说明它所表示的结论或含义。", ids: ["n3-003"] },
            { pos: "名词", posLabel: "事（こと）", label: "传闻・转述", summary: "把从他人、通知或新闻等处听到的内容作为消息转述给别人。", ids: ["n3-029"] },
            { pos: "名词", posLabel: "事（こと）", label: "核心・本质所在", summary: "把前项名词化，明确指出某事物的目的、本质、问题或关键所在。", ids: ["supp-n1-review-044"] },
            { pos: "名词", posLabel: "事（こと）", label: "发生・规定・主观认定", summary: "把动作或状态当作一件事，说明偶尔发生、客观规定或主观上如何处理。", ids: ["n3-018", "supp-n1-review-014", "n2-249"] },
            { pos: "名词", posLabel: "事（こと）", label: "原因・根据・手段・背景", summary: "以「こと」所指的事实为理由、判断线索、实现方式或说明背景。", ids: ["n1-070", "n2-193", "supp-n1-review-020", "supp-n1-review-021", "supp-n1-review-025", "mainichi-n1-016"] },
            { pos: "名词", posLabel: "事（こと）", label: "否定・条件・不发生", summary: "把前项行为名词化后否定它的必要性、成立可能或发生，也可将它设为后项的前提。", ids: ["n1-064", "n1-084", "n1-126", "n2-151", "n2-180", "n2-185", "n2-241", "mainichi-n1-015"] },
            { pos: "名词", posLabel: "事（こと）", label: "评价・强调・感叹", summary: "把前项状态或感情作为一件事加以突出，表达评价、程度或强烈感受。", ids: ["n1-039", "n2-171", "n2-173", "n3-094"] },
            { pos: "名词", posLabel: "事（こと）", label: "特定对象的性格・情况", summary: "以与特定人物相关的已知情况为根据，推测其后续行为。", ids: ["n3-098"] },
            { pos: "名词", posLabel: "事（こと）", label: "忠告・应采取的行为", summary: "把建议采取或避免的动作作为一项原则，用于给出忠告或教训。", ids: ["n2-218"] },
            { pos: "终助词", posLabel: "こと", label: "命令・注意", summary: "放在句末表示规定、命令或提醒。", ids: ["n2-136"] },
        ],
        mono: [
            { pos: "名词", posLabel: "物・者（もの）", label: "一般的性质・常理", summary: "把前项作为普遍性质、常理、评价或主观感受来概括。", ids: ["n2-141", "n2-183", "n2-223"] },
            { pos: "名词", posLabel: "物・者（もの）", label: "期间・持续的状态", summary: "指从某一契机开始持续的时间或状态。", ids: ["n1-093", "n1-094"] },
            { pos: "名词", posLabel: "物・者（もの）", label: "应有的规范・判断", summary: "依据一般认识否定绝对判断，或说明行为规范。", ids: ["n2-156", "n2-177"] },
            { pos: "终助词", posLabel: "もの・もん", label: "反问・强烈否定", summary: "以反问形式表达不可能、拒绝或强烈否定。", ids: ["n1-051", "n2-182"] },
            { pos: "终助词", posLabel: "もの・もん", label: "愿望・感慨", summary: "表达难以实现的期待、愿望或由衷感慨。", ids: ["n1-063", "supp-n1-review-053"] },
            { pos: "终助词", posLabel: "もの・もん", label: "理由・辩解", summary: "在句末补充带有个人语气的理由或辩解。", ids: ["n2-187"] },
            { pos: "接续助词", posLabel: "もの", label: "假定条件", summary: "把前项作为难以实现或后果严重的假定条件。", ids: ["n1-061", "n2-251"] },
            { pos: "接续助词", posLabel: "もの", label: "逆接・遗憾", summary: "承认前项，同时表示实际结果相反、未如愿或遗憾。", ids: ["n1-077", "n2-170"] },
            { pos: "接续助词", posLabel: "もの", label: "原因・说明", summary: "承接前项，说明带有辩解色彩的原因。", ids: ["n3-065"] }
        ],
        tokoro: [
            { pos: "名词", posLabel: "所（ところ）", label: "动作发生的时间・阶段", summary: "指动作正要发生、正在发生、刚结束或险些发生的阶段。", ids: ["n2-220", "n3-049"] },
            { pos: "名词", posLabel: "所（ところ）", label: "程度・范围", summary: "表示估计、概括或所能达到的大致程度。", ids: ["n1-047"] },
            { pos: "名词", posLabel: "所（ところ）", label: "归着点・主要部分", summary: "指出结果主要归因或落在某个方面。", ids: ["supp-n1-review-026"] },
            { pos: "接续助词", posLabel: "ところ", label: "让步・假定", summary: "即使采取某种行动或站在某种立场，结果仍不改变。", ids: ["n1-079", "n1-088"] },
            { pos: "接续助词", posLabel: "ところ", label: "场面・状况", summary: "承接某人当时所处的场面或状况，常用于礼貌表达。", ids: ["n1-068"] },
            { pos: "接续助词", posLabel: "ところ", label: "契机・发现", summary: "以前项动作作为契机，引出做后发现的结果。", ids: ["supp-n1-review-010"] },
            { pos: "接续助词", posLabel: "ところ", label: "原因・判断依据", summary: "从前项情况说明原因、由来或客观判断依据。", ids: ["supp-n1-review-023", "supp-n1-review-024"] }
        ],
        wake: [
            { pos: "名词", posLabel: "訳（わけ）", label: "事情・理由・道理", summary: "表示事情的理由、原委或由前项可以理解的道理；否定与限制形式属于同一词义形成的句式变化。", ids: ["n2-213", "n2-150", "n3-087", "n2-188"] }
        ],
        hazu: [
            { pos: "名词", posLabel: "筈（はず）", label: "有依据的预期", summary: "根据计划、知识或客观情况形成预期；否定与过去形式只是这一用法的句式变化。", ids: ["n3-061", "n3-114", "supp-n1-review-079"] }
        ],
        tame: [
            { pos: "名词", posLabel: "為（ため）", label: "目的・利益", summary: "表示行动所追求的目的，或行为所服务的对象。", ids: ["n1-103"] },
            { pos: "名词", posLabel: "為（ため）", label: "原因・理由", summary: "以较正式的语气说明造成后项结果的原因。", ids: ["n3-023"] }
        ],
        ue: [
            { pos: "名词", posLabel: "上（うえ）", label: "前提・基础", summary: "把前项作为后项行动的前提、基础或实施过程。", ids: ["n2-142"] },
            { pos: "名词", posLabel: "上（うえ）", label: "既成事实后的责任", summary: "确认既成事实后，表达相应的决心、责任或应有做法。", ids: ["n2-149"] },
            { pos: "名词", posLabel: "上（うえ）", label: "追加・叠加", summary: "在前项性质之上继续叠加同方向的情况。", ids: ["n2-233"] },
            { pos: "接尾词", posLabel: "上（じょう）", label: "方面・立场", summary: "接在名词后，限定观察、评价或判断所依据的方面。", ids: ["n2-202"] }
        ],
        tsumori: [
            { pos: "名词", posLabel: "積もり（つもり）", label: "意图・主观认定", summary: "表示打算、意图，或把某事主观地当作已经成立。", ids: ["n2-190"] }
        ],
        mama: [
            { pos: "名词", posLabel: "儘（まま）", label: "原有状态的保持", summary: "前项状态不发生改变，后项在该状态下继续。", ids: ["n3-047"] },
            { pos: "名词", posLabel: "儘（まま）", label: "任凭・依照", summary: "不加干预地顺从前项的意志、感觉或事态，后项按其所示方向发生。", ids: ["supp-formal-noun-002"] }
        ],
        uchi: [
            { pos: "名词", posLabel: "内（うち）", label: "限定范围内的时间", summary: "都来自“某一范围之内”的时间意义；期间、变化与紧接发生是进入不同句式后的表达差异。", ids: ["n3-068", "n3-081", "n2-227"] }
        ],
        sei: [
            { pos: "名词", posLabel: "所為（せい）", label: "负面结果的原因", summary: "把不理想的结果归咎于前项，并带有责怪或遗憾。", ids: ["n3-097"] }
        ],
        okage: [
            { pos: "名词", posLabel: "御蔭（おかげ）", label: "带来好结果的原因", summary: "把好的结果归功于前项，并带有感谢或庆幸。", ids: ["n3-051"] }
        ],
        kawari: [
            { pos: "名词", posLabel: "代わり（かわり）", label: "替代・交换条件", summary: "说明替代关系，或以一项条件交换另一项条件。", ids: ["n3-045"] }
        ],
        aida: [
            { pos: "名词", posLabel: "間（あいだ）", label: "期间・间隔", summary: "都来自两端之间的时间范围；持续动作和期间内的一次动作是句式上的差异。", ids: ["supp-n1-review-001", "supp-n1-review-002"] }
        ],
        you: [
            { pos: "名词", posLabel: "様（よう）", label: "样态・比拟", summary: "把前项作为相似的样子、状态或方式来说明；「ようでいて」进一步对照表面印象与实际情况。", ids: ["n3-027", "n3-080", "supp-formal-noun-001"] },
            { pos: "名词", posLabel: "様（よう）", label: "目标・指示的内容", summary: "把前项作为希望达到、要求实现或祈愿成立的状态。", ids: ["n2-212", "n3-002", "supp-n1-review-054", "supp-n1-review-056"] },
            { pos: "名词", posLabel: "様（よう）", label: "方法・可能性", summary: "表示实现某事的方法或可采取的方式。", ids: ["n2-175"] },
            { pos: "名词", posLabel: "様（よう）", label: "条件・依照", summary: "把前项状态作为条件，或表示按照某种方式进行。", ids: ["n3-063", "supp-n1-review-031"] }
        ],
        no: [
            { pos: "形式名词", posLabel: "の", label: "前项内容的名词化", summary: "「の」把前项整体作为名词性对象，用于说明、铺垫，或作为「をいいことに」所利用的前提情况。", ids: ["n3-031", "n3-064", "n1-050"] }
        ],
        kagiri: [
            { pos: "名词", posLabel: "限り（かぎり）", label: "终点・界限", summary: "表示某件事到此结束，或以某个时点作为界限。", ids: ["n1-107"] },
            { pos: "名词", posLabel: "限り（かぎり）", label: "成立范围", summary: "表示只要前项状态成立，后项就在这一范围内成立。", ids: ["n2-154"] },
            { pos: "名词", posLabel: "限り（かぎり）", label: "程度的极限", summary: "表示感情或评价达到了所能表达的最高程度。", ids: ["n1-072"] }
        ]
    };

    const grammarRepo = window.GrammarDB?.repo;
    const allGrammar = grammarRepo
        ? grammarRepo.getCanonicalGrammar()
        : (Array.isArray(window.GrammarDB?.core) ? window.GrammarDB.core.slice() : []);
    const extraExamples = window.FormalNounExtraExamples || {};

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function sourceSort(a, b) {
        const levelDiff = (LEVEL_ORDER[a.level] || 9) - (LEVEL_ORDER[b.level] || 9);
        if (levelDiff) return levelDiff;
        const lessonDiff = Number(a.lessonNumber || 999) - Number(b.lessonNumber || 999);
        if (lessonDiff) return lessonDiff;
        return String(a.id).localeCompare(String(b.id));
    }

    function mergeExactTitles(items, group) {
        const byTitle = new Map();
        items.slice().sort(sourceSort).forEach((item) => {
            const key = String(item.title || "").trim();
            if (!byTitle.has(key)) byTitle.set(key, []);
            byTitle.get(key).push(item);
        });

        return Array.from(byTitle.values()).map((variants) => {
            const first = variants[0];
            const uniqueMeanings = [...new Set(variants.map((item) => item.meaning).filter(Boolean))];
            const uniqueConnections = [...new Set(variants.map((item) => item.connection).filter(Boolean))];
            const examples = variants.flatMap((item) => {
                const sourceExamples = (item.examples || []).map((example) =>
                    Object.assign({ sourceId: item.id }, example)
                );
                const addedExamples = (extraExamples[item.id] || []).map((example) =>
                    Object.assign({ sourceId: item.id }, example)
                );
                return sourceExamples.concat(addedExamples);
            });
            return {
                id: `${group.id}__${variants.map((item) => item.id).join("__")}`,
                groupId: group.id,
                noun: group.noun,
                nounMeaning: group.meaning,
                title: first.title,
                meaning: uniqueMeanings.join(" / "),
                connections: uniqueConnections,
                variants,
                examples,
                sourceIds: variants.map((item) => item.id)
            };
        });
    }

    const GROUPS = GROUP_DEFINITIONS.map((definition, index) => {
        const selectedEntries = definition.sourceIds
            ? allGrammar.filter((item) => definition.sourceIds.includes(item.id))
            : allGrammar.filter((item) => String(item.title || "").includes(definition.noun));
        const excludedIds = new Set(definition.excludeSourceIds || []);
        const sourceEntries = selectedEntries.filter((item) => !excludedIds.has(item.id));
        const entries = mergeExactTitles(sourceEntries, definition);
        const conceptEntry = {
            id: `${definition.id}__concept`,
            groupId: definition.id,
            noun: definition.noun,
            nounMeaning: definition.meaning,
            title: `${definition.noun}的概念`,
            meaning: definition.meaning,
            isConcept: true
        };
        return Object.assign({}, definition, {
            number: String(index + 1).padStart(2, "0"),
            entries,
            conceptEntry,
            uses: CONCEPT_USE_DETAILS[definition.id] || definition.uses || []
        });
    });

    const ENTRIES = GROUPS.flatMap((group) => [group.conceptEntry, ...group.entries]);
    const entryMap = new Map(ENTRIES.map((entry) => [entry.id, entry]));
    const entryToGroup = new Map(ENTRIES.map((entry) => [entry.id, entry.groupId]));
    if (window.GrammarLearningCatalog?.updateSourceAnchor) {
        GROUPS.forEach((group) => {
            group.entries.forEach((entry) => {
                entry.variants.forEach((variant) => {
                    window.GrammarLearningCatalog.updateSourceAnchor(
                        variant.id,
                        "formal-nouns",
                        `formal-${entry.id}`
                    );
                });
            });
        });
    }

    const state = {
        mode: "study",
        entryId: null,
        groupId: "concept",
        atlasGroupId: GROUPS[0]?.id || ""
    };
    let indexCollapseState = readIndexCollapseState();

    function groupForEntry(entryId) {
        return GROUPS.find((group) => group.id === entryToGroup.get(entryId)) || GROUPS[0];
    }

    function readIndexCollapseState() {
        try {
            const stored = JSON.parse(window.localStorage.getItem(INDEX_COLLAPSE_STORAGE_KEY) || "{}");
            return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
        } catch (error) {
            return {};
        }
    }

    function writeIndexCollapseState() {
        try {
            window.localStorage.setItem(
                INDEX_COLLAPSE_STORAGE_KEY,
                JSON.stringify(indexCollapseState)
            );
        } catch (error) {
            // The directory remains collapsible when storage is unavailable.
        }
    }

    function setIndexGroupOpen(wrapper, open, persist = true) {
        if (!wrapper || wrapper.dataset.indexGroup === "concept") return;
        const groupId = wrapper.dataset.indexGroup;
        const button = wrapper.querySelector(".compound-index-group-button");
        const list = wrapper.querySelector(".compound-index-entries");
        const group = GROUPS.find((item) => item.id === groupId);

        wrapper.classList.toggle("is-open", open);
        button?.setAttribute("aria-expanded", String(open));
        list?.setAttribute("aria-hidden", String(!open));
        if (button && group) {
            button.setAttribute("aria-label", `${open ? "收起" : "展开"}${group.noun}相关内容`);
        }

        if (persist) {
            indexCollapseState[groupId] = !open;
            writeIndexCollapseState();
        }
    }

    function renderExamples(examples) {
        const formatter = window.FormalNounExampleFormatter;
        return examples.slice(0, 2).map((example) => `
            <div class="compound-example-pair">
                <p class="compound-example-jp font-serif-jp" lang="ja">${formatter ? formatter.format(example.jp || "") : (example.jp || "")}</p>
                <p class="compound-example-cn">${escapeHtml(example.cn || "")}</p>
            </div>
        `).join("");
    }

    function renderUsageDescription(value) {
        const text = String(value || "")
            .replace(/<[^>]*>/g, "")
            .trim();
        if (!text) return "";

        const boundary = Array.from(text.matchAll(/[，。；]/g))
            .find((match) => Number(match.index) >= 12);
        const splitAt = boundary ? Number(boundary.index) + 1 : text.length;
        return `<strong class="compound-key-highlight">${escapeHtml(text.slice(0, splitAt))}</strong>${escapeHtml(text.slice(splitAt))}`;
    }

    function renderUsageBlocks(entry) {
        if (entry.variants.length === 1) {
            return `
                <div>
                    <span class="grammar-label mb-2">用法说明</span>
                    <p class="text-sm text-textMain leading-relaxed font-medium">${renderUsageDescription(entry.variants[0].desc)}</p>
                </div>
                <div class="compound-example-block bg-gray-50 border border-borderDark rounded-md p-4">
                    <span class="grammar-label bg-white mb-2">例句</span>
                    ${renderExamples(entry.examples)}
                </div>
            `;
        }

        return entry.variants.map((variant, index) => {
            const examples = entry.examples.filter((example) => example.sourceId === variant.id);
            return `
                <div class="space-y-3">
                    <div class="flex items-start gap-2">
                        <span class="text-accentRed font-bold font-serif-jp text-lg leading-none mt-0.5">${String.fromCodePoint(0x2460 + index)}</span>
                        <div>
                            <span class="grammar-label mb-1">用法说明</span>
                            <p class="text-sm text-textMain leading-relaxed font-medium">${renderUsageDescription(variant.desc)}</p>
                        </div>
                    </div>
                    <div class="compound-example-block bg-gray-50 border border-borderDark rounded-md p-3 ml-6">
                        <span class="grammar-label bg-white mb-2">例句</span>
                        ${renderExamples(examples)}
                    </div>
                </div>
            `;
        }).join("");
    }

    function renderCard(entry, indexInGroup) {
        const group = groupForEntry(entry.id);
        if (entry.isConcept) {
            return `
                <article class="grammar-card formal-noun-concept-card" id="formal-${entry.id}" data-formal-entry="${entry.id}" data-study-group="${group.id}" tabindex="-1" aria-hidden="true">
                    <header class="formal-noun-concept-heading">
                        <span>${group.number}</span>
                        <div>
                            <small>形式名词</small>
                            <h3 lang="ja">${escapeHtml(group.noun)}</h3>
                        </div>
                    </header>
                    <div class="formal-noun-concept-copy">
                        <h4>实际作用</h4>
                        <p>${escapeHtml(group.concept)}</p>
                        <h4>按实际作用分类</h4>
                        <div class="formal-noun-function-list">
                            ${(group.uses || []).map((usage, usageIndex) => `
                                <article>
                                    <span>${String(usageIndex + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h5>${escapeHtml(usage.title || usage)}</h5>
                                        ${usage.description ? `<p>${escapeHtml(usage.description)}</p>` : ""}
                                    </div>
                                </article>
                            `).join("")}
                        </div>
                    </div>
                </article>
            `;
        }
        const connectionMarkup = entry.connections.map(escapeHtml).join("<br>");
        const favoriteButtons = entry.variants.map((variant) => `
            <button
                class="grammar-learning-favorite"
                type="button"
                data-grammar-favorite="${escapeHtml(variant.id)}"
                data-grammar-title="${escapeHtml(variant.title)}"
            ></button>
        `).join("");

        return `
            <article class="grammar-card sketch-box bg-white p-6 md:p-8" id="formal-${entry.id}" data-formal-entry="${entry.id}" data-study-group="${group.id}" tabindex="-1" aria-hidden="true">
                <header class="compound-entry-heading">
                    <span class="compound-entry-sequence">${group.number}-${indexInGroup + 1}</span>
                    <div class="compound-entry-title-line">
                        <h3 class="compound-entry-title" lang="ja">${escapeHtml(entry.title)}</h3>
                        <span class="compound-entry-meaning">${escapeHtml(entry.meaning)}</span>
                    </div>
                    <div class="ml-auto formal-favorite-actions">${favoriteButtons}</div>
                </header>
                <div class="compound-entry-body">
                    <aside class="compound-entry-meta">
                        <div>
                            <div class="text-xs text-textMuted font-bold mb-1">接续</div>
                            <div class="text-sm font-bold text-textMain sketch-btn inline-block px-3 py-1.5 bg-white" lang="ja">${connectionMarkup}</div>
                        </div>
                    </aside>
                    <div class="compound-entry-usages">
                        ${renderUsageBlocks(entry)}
                    </div>
                </div>
            </article>
        `;
    }

    function buildCards() {
        const root = document.getElementById("formalEntryList");
        if (!root) return;
        root.innerHTML = GROUPS.flatMap((group) =>
            [
                renderCard(group.conceptEntry, 0),
                ...group.entries.map((entry, index) => renderCard(entry, index))
            ]
        ).join("");
    }

    function createGroupButton(group, hasEntries) {
        const button = document.createElement("button");
        button.className = "compound-index-group-button";
        button.type = "button";
        button.innerHTML = `
            <span class="compound-index-group-number">${group.number}</span>
            <span class="compound-index-group-label" lang="ja">${escapeHtml(group.noun)}</span>
            <span class="compound-index-group-arrow" aria-hidden="true">${hasEntries ? "›" : "→"}</span>
        `;
        return button;
    }

    function buildIndex() {
        const root = document.getElementById("formalIndexList");
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

            const groupButton = createGroupButton(group, true);
            const listId = `formal-index-${group.id}`;
            groupButton.setAttribute("aria-controls", listId);

            const list = document.createElement("ul");
            list.className = "compound-index-entries";
            list.id = listId;
            [group.conceptEntry, ...group.entries].forEach((entry) => {
                const item = document.createElement("li");
                const button = document.createElement("button");
                button.className = "compound-index-entry-button";
                button.type = "button";
                button.dataset.entryId = entry.id;
                button.textContent = entry.isConcept ? "概念说明" : entry.title;
                if (!entry.isConcept) button.lang = "ja";
                button.addEventListener("click", () => selectEntry(entry.id, { updateHash: true, focus: true }));
                item.appendChild(button);
                list.appendChild(item);
            });

            wrapper.append(groupButton, list);
            root.appendChild(wrapper);
            setIndexGroupOpen(wrapper, indexCollapseState[group.id] !== true, false);
            groupButton.addEventListener("click", () => {
                setIndexGroupOpen(wrapper, !wrapper.classList.contains("is-open"));
            });
        });

    }

    function atlasParts(group) {
        const assigned = new Set();
        const relations = (ATLAS_RELATIONS[group.id] || []).map((relation) => {
            const sourceRank = new Map(relation.ids.map((id, index) => [id, index]));
            const entries = group.entries.filter((entry) =>
                entry.sourceIds.some((sourceId) => relation.ids.includes(sourceId))
            ).sort((a, b) => {
                const aRank = Math.min(...a.sourceIds.map((sourceId) => sourceRank.get(sourceId) ?? Number.MAX_SAFE_INTEGER));
                const bRank = Math.min(...b.sourceIds.map((sourceId) => sourceRank.get(sourceId) ?? Number.MAX_SAFE_INTEGER));
                return aRank - bRank;
            });
            entries.forEach((entry) => assigned.add(entry.id));
            return Object.assign({}, relation, { entries });
        }).filter((relation) => relation.entries.length);

        const remaining = group.entries.filter((entry) => !assigned.has(entry.id));
        if (remaining.length) {
            relations.push({
                pos: "待核对",
                posLabel: group.noun,
                label: "其他相关表达",
                summary: "尚未对应到字典义项的相关表达。",
                entries: remaining
            });
        }

        const parts = [];
        const partMap = new Map();
        relations.forEach((relation) => {
            const key = `${relation.pos}::${relation.posLabel}`;
            if (!partMap.has(key)) {
                const part = {
                    pos: relation.pos,
                    posLabel: relation.posLabel,
                    usages: []
                };
                partMap.set(key, part);
                parts.push(part);
            }
            partMap.get(key).usages.push(relation);
        });
        return parts;
    }

    function renderAtlasLeaves(entries) {
        return entries.map((entry) => {
            return `
                <div class="formal-mindmap-leaf-wrapper">
                    <button class="formal-atlas-leaf" type="button" data-atlas-entry="${entry.id}">
                        <span class="formal-mindmap-leaf-dot" aria-hidden="true"></span>
                        <span class="formal-mindmap-leaf-copy">
                            <b lang="ja">${escapeHtml(entry.title)}</b>
                            <span>${escapeHtml(entry.meaning)}</span>
                        </span>
                    </button>
                </div>
            `;
        }).join("");
    }

    function renderAtlasUsageBranch(usage, usageIndex) {
        return `
            <section class="formal-mindmap-branch formal-mindmap-usage-branch">
                <div class="formal-mindmap-anchor">
                    <div class="formal-mindmap-anchor-wrapper">
                        <article class="formal-mindmap-usage">
                            <small>用法 ${String(usageIndex + 1).padStart(2, "0")}</small>
                            <strong>${escapeHtml(usage.label)}</strong>
                            <span>${escapeHtml(usage.summary)}</span>
                        </article>
                        <span class="formal-mindmap-connector" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="formal-mindmap-children formal-mindmap-descendants formal-mindmap-leaves${usage.entries.length === 1 ? " is-single" : ""}">
                    ${renderAtlasLeaves(usage.entries)}
                </div>
            </section>
        `;
    }

    function renderAtlasPartBranch(part, partIndex) {
        return `
            <section class="formal-mindmap-branch formal-mindmap-part-branch">
                <div class="formal-mindmap-anchor">
                    <div class="formal-mindmap-anchor-wrapper">
                        <article class="formal-mindmap-pos">
                            <small>词性 ${String(partIndex + 1).padStart(2, "0")}</small>
                            <strong>${escapeHtml(part.pos)}</strong>
                            <span lang="ja">${escapeHtml(part.posLabel)}</span>
                        </article>
                        <span class="formal-mindmap-connector" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="formal-mindmap-children formal-mindmap-descendants formal-mindmap-usages${part.usages.length === 1 ? " is-single" : ""}">
                    ${part.usages.map(renderAtlasUsageBranch).join("")}
                </div>
            </section>
        `;
    }

    function renderAtlasGroup(groupId) {
        const group = GROUPS.find((item) => item.id === groupId) || GROUPS[0];
        const root = document.getElementById("formalAtlasMap");
        if (!group || !root) return;
        state.atlasGroupId = group.id;

        document.querySelectorAll("[data-atlas-group]").forEach((button) => {
            const active = button.dataset.atlasGroup === group.id;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "true");
            else button.removeAttribute("aria-current");
        });

        const parts = atlasParts(group);
        const onlyPart = parts.length === 1 ? parts[0] : null;
        let branchesHtml = "";
        let branchClass = "";

        if (parts.length > 1) {
            branchesHtml = parts.map(renderAtlasPartBranch).join("");
            branchClass = "formal-mindmap-parts";
        } else if (onlyPart?.usages.length) {
            branchesHtml = onlyPart.usages.map(renderAtlasUsageBranch).join("");
            branchClass = "formal-mindmap-direct-usages";
        }

        root.innerHTML = `
            <div class="formal-mindmap-row">
                <div class="formal-mindmap-root-wrapper">
                    <button class="formal-mindmap-root" type="button" data-atlas-concept="${group.conceptEntry.id}" aria-label="查看${escapeHtml(group.noun)}的概念说明">
                        <small>形式名词</small>
                        <strong lang="ja">${escapeHtml(group.noun)}</strong>
                        <span>${escapeHtml(group.meaning)} · ${group.entries.length ? `${group.entries.length} 条语法` : "概念说明"}</span>
                    </button>
                    ${branchesHtml ? '<span class="formal-mindmap-connector" aria-hidden="true"></span>' : ""}
                </div>
                ${branchesHtml ? `
                    <div class="formal-mindmap-children ${branchClass}${parts.length === 1 && onlyPart?.usages.length === 1 && onlyPart.usages[0].entries.length === 1 ? " is-single" : ""}">
                        ${branchesHtml}
                    </div>
                ` : ""}
            </div>
        `;

        root.querySelector("[data-atlas-concept]")?.addEventListener("click", () => {
            selectEntry(group.conceptEntry.id, { updateHash: true, focus: true });
        });
        root.querySelectorAll("[data-atlas-entry]").forEach((button) => {
            button.addEventListener("click", () => selectEntry(button.dataset.atlasEntry, { updateHash: true, focus: true }));
        });
        queueFormalMindmapSync();
    }

    let formalMindmapSyncFrame = null;

    function queueFormalMindmapSync() {
        if (formalMindmapSyncFrame) cancelAnimationFrame(formalMindmapSyncFrame);
        formalMindmapSyncFrame = requestAnimationFrame(() => {
            formalMindmapSyncFrame = null;
            syncFormalMindmapLines();
        });
    }

    function formalMindmapAnchorRect(item) {
        if (item.classList.contains("formal-mindmap-leaf-wrapper")) {
            return item.querySelector(".formal-atlas-leaf")?.getBoundingClientRect() || item.getBoundingClientRect();
        }
        return item.querySelector(":scope > .formal-mindmap-anchor .formal-mindmap-anchor-wrapper")?.getBoundingClientRect()
            || item.getBoundingClientRect();
    }

    function syncFormalMindmapLines() {
        const map = document.getElementById("formalAtlasMap");
        if (!map || map.offsetParent === null) return;

        map.querySelectorAll(".formal-mindmap-branch").forEach((branch) => {
            const anchor = branch.querySelector(":scope > .formal-mindmap-anchor .formal-mindmap-anchor-wrapper");
            if (!anchor) return;
            const branchRect = branch.getBoundingClientRect();
            const anchorRect = anchor.getBoundingClientRect();
            branch.style.setProperty("--formal-anchor-y", `${anchorRect.top - branchRect.top + (anchorRect.height / 2)}px`);
        });

        map.querySelectorAll(".formal-mindmap-children").forEach((children) => {
            const items = Array.from(children.children);
            if (!items.length) return;
            const childrenRect = children.getBoundingClientRect();
            const positions = items.map((item) => {
                const rect = formalMindmapAnchorRect(item);
                return rect.top - childrenRect.top + (rect.height / 2);
            });

            if (children.classList.contains("formal-mindmap-descendants")) {
                const parentBranch = children.closest(".formal-mindmap-branch");
                const parentAnchor = parentBranch?.querySelector(":scope > .formal-mindmap-anchor .formal-mindmap-anchor-wrapper");
                if (parentAnchor) {
                    const parentRect = parentAnchor.getBoundingClientRect();
                    positions.push(parentRect.top - childrenRect.top + (parentRect.height / 2));
                }
            }

            if (positions.length < 2) {
                children.style.setProperty("--formal-line-top", "0px");
                children.style.setProperty("--formal-line-bottom", "0px");
                return;
            }
            children.style.setProperty("--formal-line-top", `${Math.min(...positions)}px`);
            children.style.setProperty("--formal-line-bottom", `${Math.max(...positions)}px`);
        });
    }

    function buildAtlas() {
        const groupsRoot = document.getElementById("formalAtlasGroups");
        if (!groupsRoot) return;
        groupsRoot.innerHTML = GROUPS.map((group) => `
            <button class="formal-atlas-group-button" type="button" data-atlas-group="${group.id}">
                <span>${group.number}</span>
                <b lang="ja">${escapeHtml(group.noun)}</b>
            </button>
        `).join("");

        groupsRoot.querySelectorAll("[data-atlas-group]").forEach((button) => {
            button.addEventListener("click", () => renderAtlasGroup(button.dataset.atlasGroup));
        });
        renderAtlasGroup(state.atlasGroupId);
    }

    function updateModeUI() {
        document.querySelectorAll("[data-formal-mode]").forEach((button) => {
            const active = button.dataset.formalMode === state.mode;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
        document.querySelectorAll("[data-formal-view]").forEach((view) => {
            view.classList.toggle("is-active", view.dataset.formalView === state.mode);
        });
    }

    function syncIndex() {
        if (state.groupId !== "concept") {
            const currentGroup = document.querySelector(
                `[data-index-group="${CSS.escape(state.groupId)}"]`
            );
            setIndexGroupOpen(currentGroup, true, false);
        }
        document.querySelectorAll(".compound-index-entry-button").forEach((button) => {
            const active = button.dataset.entryId === state.entryId;
            button.classList.toggle("is-active", active);
            if (active) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });
    }

    function setHash(hash, replace) {
        const url = `${window.location.pathname}${window.location.search}${hash}`;
        if (replace) window.history.replaceState(null, "", url);
        else window.history.pushState(null, "", url);
    }

    function scrollToContent(target, smooth) {
        const header = document.querySelector(".kiki-unified-header, .compound-topbar");
        const headerBottom = header?.getBoundingClientRect().bottom || 64;
        const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerBottom - 16);
        window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
    }

    function setMode(mode, options = {}) {
        if (!["study", "atlas"].includes(mode)) mode = "study";
        state.mode = mode;
        updateModeUI();
        if (mode === "atlas") buildAtlas();
        if (options.updateHash) {
            setHash(mode === "atlas" ? "#formal-atlas" : "#formal-concept", false);
        }
        if (options.focus) {
            const view = document.querySelector(`[data-formal-view="${mode}"]`);
            if (view) {
                view.focus({ preventScroll: true });
                scrollToContent(view, true);
            }
        }
    }

    function showConcept(options = {}) {
        state.mode = "study";
        state.entryId = null;
        state.groupId = "concept";
        updateModeUI();
        document.getElementById("formalConceptPanel")?.classList.add("is-active");
        document.getElementById("formalEntryPanel")?.classList.remove("is-active");
        document.querySelectorAll(".grammar-card").forEach((card) => {
            card.classList.remove("compound-card-active", "compound-group-active");
            card.setAttribute("aria-hidden", "true");
        });
        syncIndex();
        if (options.updateHash) setHash("#formal-concept", false);
        if (options.focus) document.getElementById("formalConceptPanel")?.focus({ preventScroll: false });
    }

    function selectEntry(entryId, options = {}) {
        const card = document.querySelector(`[data-formal-entry="${CSS.escape(entryId)}"]`);
        if (!card) return;

        state.mode = "study";
        state.entryId = entryId;
        state.groupId = entryToGroup.get(entryId);
        updateModeUI();
        document.getElementById("formalConceptPanel")?.classList.remove("is-active");
        document.getElementById("formalEntryPanel")?.classList.add("is-active");
        document.querySelectorAll(".grammar-card").forEach((item) => {
            const inGroup = item.dataset.studyGroup === state.groupId;
            item.classList.toggle("compound-group-active", inGroup);
            item.classList.remove("compound-card-active");
            if (inGroup) item.removeAttribute("aria-hidden");
            else item.setAttribute("aria-hidden", "true");
        });
        card.classList.add("compound-card-active");
        syncIndex();
        if (options.updateHash !== false) setHash(`#formal-${entryId}`, false);
        if (options.focus) {
            card.focus({ preventScroll: true });
            scrollToContent(card, true);
        }
    }

    function applyHash() {
        const hash = window.location.hash;
        if (hash === "#formal-atlas") {
            setMode("atlas");
            return;
        }
        const entryId = hash.startsWith("#formal-") ? decodeURIComponent(hash.slice("#formal-".length)) : "";
        if (entryMap.has(entryId)) {
            selectEntry(entryId, { updateHash: false });
            return;
        }
        showConcept();
    }

    function init() {
        if (!ENTRIES.length) {
            document.getElementById("formalConceptPanel")?.insertAdjacentHTML(
                "beforeend",
                '<p class="formal-data-error">语法资料暂时无法载入，请稍后重试。</p>'
            );
            return;
        }

        buildCards();
        buildIndex();
        buildAtlas();
        document.querySelectorAll("[data-formal-mode]").forEach((button) => {
            button.addEventListener("click", () => setMode(button.dataset.formalMode, { updateHash: true, focus: true }));
        });

        window.addEventListener("popstate", applyHash);
        window.addEventListener("hashchange", applyHash);
        window.addEventListener("resize", queueFormalMindmapSync);
        window.addEventListener("load", queueFormalMindmapSync);
        applyHash();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
