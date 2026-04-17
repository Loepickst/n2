(function() {
    const PET_STATE_KEY = 'kiki_pet_state_v1';
    const PET_SETTINGS_KEY = 'kiki_pet_settings_v1';
    const DEFAULT_SECTION = 'daily';
    const DEFAULT_PET_ID = 'shiba';
    const DEFAULT_UNLOCKED_PET_IDS = ['shiba', 'cat'];
    const DEFAULT_UNLOCKED_INTERACTION_IDS = [];
    const COLA_TREAT_UNLOCK_ID = 'colaTreat';
    const LOTTERY_COLLECTION_KEY = 'omikujiCollection';
    const LOTTERY_COLLECTION_META_KEY = 'omikujiCollectionMeta_v1';
    const LOTTERY_LAST_OBTAINED_KEY = 'omikujiLastObtained_v1';
    const MAX_NAME_LENGTH = 8;
    const DRAG_THRESHOLD = 8;
    const WELCOME_INTERVAL_MS = 60 * 60 * 1000;
    const FALLBACK_ENTRY = {
        area: 'daily',
        sectionKey: 'daily',
        label: '基础语法',
        href: 'daily/grammar/index.html',
        statusText: '先从基础语法热身一下。',
        reviewCount: 0,
        score: 1
    };
    const READING_TYPE_LABELS = {
        short: '短文理解',
        middle: '中篇理解',
        long: '长文理解',
        info: '信息检索',
        information: '信息检索',
        integrated: '综合理解'
    };
    const LEVEL_XP_THRESHOLDS = [0, 5, 12, 22, 35, 51, 70, 92, 117, 145];
    const SHIBA_LEVEL_TITLES = [
        '散歩初心者',
        '摇尾陪跑生',
        '陪学小柴',
        '词卡巡逻员',
        '专注犬见习',
        '进度小跟班',
        '复习番犬',
        '自律番犬',
        '学习冲刺官',
        '学習守り神'
    ];
    const CAT_LEVEL_TITLES = [
        '午睡见习生',
        '窗边观察员',
        '陪学小猫',
        '纸页巡查员',
        '安静读书猫',
        '笔记踩点师',
        '复习守夜猫',
        '专注陪跑猫',
        '灵感捕手',
        '月影学伴神'
    ];
    const SHIBA_LEVEL_UNLOCK_LABELS = {
        2: '新的欢迎语',
        3: '新的待机闲聊',
        4: '新的摸摸头回应',
        5: '新的复习鼓励语',
        6: '新的喂肉干回应',
        7: '新的备考鼓劲语',
        8: '新的睡前回应',
        9: '新的惊喜陪学语',
        10: '满级纪念语与图鉴奖励'
    };
    const CAT_LEVEL_UNLOCK_LABELS = {
        2: '新的欢迎语',
        3: '新的待机语',
        4: '新的摸摸头回应',
        5: '新的复习提醒',
        6: '新的喂食回应',
        7: '新的备考鼓励语',
        8: '新的睡前回应',
        9: '新的陪学短语',
        10: '满级纪念语与图鉴奖励'
    };
    const PET_MAX_REWARD_IDS = {
        shiba: 'pet_shiba_max',
        cat: 'pet_cat_max'
    };
    const STUDY_LAUNCH_MILESTONES = [
        { count: 10, xp: 1 },
        { count: 25, xp: 2 },
        { count: 50, xp: 3 }
    ];
    const MOOD_LABELS = {
        idle: '安静陪跑',
        curious: '复盘雷达',
        cheer: '状态很好',
        cola: '可乐上头',
        sleep: '慢慢苏醒'
    };
    const SHIBA_MOOD_LABELS = {
        idle: '摇尾待命',
        curious: '嗅嗅雷达',
        cheer: '冲劲满满',
        cola: '汽泡上头',
        sleep: '打盹补能',
        sleeping: '打盹补能',
        dazed: '晕乎乎',
        headpatGentle: '乖巧',
        headpatPlayful: '淘气',
        headpatAnnoyed: '厌烦'
    };
    const SHIBA_MOOD_LABEL_VARIANTS = {
        idle: [
            { minLevel: 1, label: '摇尾待命' },
            { minLevel: 4, label: '守在身旁' },
            { minLevel: 8, label: '前爪预热' }
        ],
        curious: [
            { minLevel: 1, label: '嗅嗅雷达' },
            { minLevel: 5, label: '巡场侦查' },
            { minLevel: 9, label: '寻宝模式' }
        ],
        cheer: [
            { minLevel: 1, label: '冲劲满满' },
            { minLevel: 6, label: '一起冲呀' },
            { minLevel: 10, label: '并肩冲刺' }
        ],
        cola: [
            { minLevel: 1, label: '汽泡上头' },
            { minLevel: 9, label: '快乐过载' }
        ],
        sleep: [
            { minLevel: 1, label: '打盹补能' },
            { minLevel: 8, label: '梦里巡逻' }
        ],
        sleeping: [
            { minLevel: 1, label: '打盹补能' },
            { minLevel: 8, label: '梦里巡逻' }
        ],
        dazed: [
            { minLevel: 1, label: '晕乎乎' },
            { minLevel: 7, label: '晕晕转圈' }
        ]
    };
    const TREAT_COOLDOWN_DIALOGS = {
        shiba: '打咩！肚子已经圆滚滚了，再吃要变成猪犬了🐷',
        cat: '拿走拿走，本喵现在看什么都像猫条，连看你都觉得反胃。'
    };
    const INTERACTION_CHAIN_MS = 8000;
    const DAZED_DURATION_MS = 8000;
    const SLEEP_TREAT_COOLDOWN_MS = 12 * 60 * 60 * 1000;
    const HEADPAT_EASTER_TRIGGER_CHANCE = 0.28;
    const HEADPAT_EASTER_COOLDOWN_MS = 60 * 1000;
    const HEADPAT_EASTER_STATE_DURATION_MS = 7000;
    const BALL_POSE_TRIGGER_CHANCE = 0.18;
    const BALL_POSE_COOLDOWN_MS = 45 * 1000;
    const BALL_POSE_CHECK_INTERVAL_MS = 12 * 1000;
    const BALL_POSE_DURATION_MS = 5200;
    const COLA_TREAT_LOCKED_DIALOGS = {
        shiba: '汪？你还没解锁可乐呢！{name}只能咽咽口水假装喝过了……',
        cat: '喵？说好的猫薄荷呢？你想拿空气糊弄本喵吗！'
    };
    const HEADPAT_FALLBACK_DIALOGS = {
        shiba: '略略略~ 你摸不到！快去把专注力放在书本上！',
        cat: '想得美，今天就先不给你摸。先把那页看完再说。'
    };
    const TREAT_OVERFEED_DIALOGS = {
        shiba: {
            4: '喂喂，再说一次，{name}这叫毛茸茸，不叫胖！不能再吃了！',
            5: '你再喂，{name}连屏幕都挤不下了……（扭头拒绝）',
            sleep: '呼噜……碳水让人犯困……{name}先睡为敬，你加油学……Zzz'
        },
        cat: {
            4: '喂，你是打算把我喂成橘猫那种体型吗？拿走，本喵要保持身材！',
            5: '（用肉垫推开你的手）我说不吃就不吃！你以为这点零食就能掩盖你没背单词的事实吗？',
            sleep: '吃撑了……连骂你的力气都没了。本喵要睡美容觉了，你最好在我醒来前把这两页看完。（闭眼）'
        }
    };
    const COLA_OVERFLOW_DIALOGS = {
        shiba: '今天的快乐额度快被你灌满啦。',
        cat: '不行了……再吸脑子都要变成毛线球了……喵呜……'
    };

    function frameBlock(strings, ...values) {
        const raw = String.raw({ raw: strings }, ...values).trim();
        return raw ? raw.split('\n').map((row) => row.trim()) : [];
    }

    function remapFrameRows(frameRows, tokenMap) {
        if (!tokenMap) {
            return frameRows.slice();
        }

        return frameRows.map((row) => [...row].map((token) => tokenMap[token] || '.').join(''));
    }

    function trimTransparentFrame(frameRows, padding = 0) {
        if (!Array.isArray(frameRows) || !frameRows.length) {
            return frameRows;
        }

        const width = Math.max(0, ...frameRows.map((row) => row.length));
        const normalizedRows = frameRows.map((row) => row.padEnd(width, '.'));
        let minX = width;
        let minY = normalizedRows.length;
        let maxX = -1;
        let maxY = -1;

        normalizedRows.forEach((row, y) => {
            [...row].forEach((token, x) => {
                if (token === '.') {
                    return;
                }
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            });
        });

        if (maxX < minX || maxY < minY) {
            return normalizedRows;
        }

        const safePadding = Math.max(0, Number(padding) || 0);
        minX = Math.max(0, minX - safePadding);
        minY = Math.max(0, minY - safePadding);
        maxX = Math.min(width - 1, maxX + safePadding);
        maxY = Math.min(normalizedRows.length - 1, maxY + safePadding);

        return normalizedRows.slice(minY, maxY + 1).map((row) => row.slice(minX, maxX + 1));
    }

    const PIXEL_PALETTE = {
        A: '#7D4B2A',
        B: '#D69759',
        C: '#F7E6CF',
        D: '#2F241D',
        E: '#F4B596',
        F: '#F9F6F0',
        G: '#B86A4A',
        H: '#F6C37B'
    };
    const SHIBA_SOURCE_TOKEN_MAP = {
        '.': '.',
        A: 'A',
        B: 'B',
        C: 'H',
        D: 'C',
        E: 'D'
    };
    const SHIBA_FRAME_OPTIONS = {
        tokenMap: SHIBA_SOURCE_TOKEN_MAP,
        trim: true,
        padding: 1
    };
    const SHIBA_IDLE_FRAME = frameBlock`
        ................................
        ................................
        ................................
        ..............A..A..............
        .............ABA..ABA...........
        ............ABB.AA.BBA..........
        ...........ABBBBAABBBBA.........
        ..........ABBBBBBBBBBBBA........
        .........ABBCCCCDDCCCCBBA.......
        ........ABCCCDDDDDDDDCCCBA......
        ........ABCCDDDDDDDDDDCCBA......
        .......ABCCDDDAADDAADDDCCBA.....
        .......ABCCDDDDAEADDDDDCCBA.....
        .......ABCCDDDDAAADDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        ........ABCCCDDDDDDDDCCCBA......
        ........ABBCCCCDDCCCCBBA........
        ........ABBCCCDDDDCCCBBA........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABBCDAAADDCBBA.........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ...........AA......AA...........
        ................................
        ................................
        ................................
        ................................
        ................................
    `;
    const SHIBA_BLINK_FRAME = frameBlock`
        ................................
        ................................
        ................................
        ..............A..A..............
        .............ABA..ABA...........
        ............ABB.AA.BBA..........
        ...........ABBBBAABBBBA.........
        ..........ABBBBBBBBBBBBA........
        .........ABBCCCCDDCCCCBBA.......
        ........ABCCCDDDDDDDDCCCBA......
        ........ABCCDDEEDDEEDDCCBA......
        .......ABCCDDDAADDAADDDCCBA.....
        .......ABCCDDDDAEADDDDDCCBA.....
        .......ABCCDDDDAAADDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        ........ABCCCDDDDDDDDCCCBA......
        ........ABBCCCCDDCCCCBBA........
        ........ABBCCCDDDDCCCBBA........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABBCDAAADDCBBA.........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ...........AA......AA...........
        ................................
        ................................
        ................................
        ................................
        ................................
    `;
    const SHIBA_HAPPY_SOFT_FRAME = frameBlock`
        ................................
        ................................
        ................................
        ..............A..A..............
        ............ABA..ABA............
        ...........ABB.AA.BBA...........
        ..........ABBBBAABBBBA..........
        .........ABBBBBBBBBBBBA.........
        ........ABBCCCCDDCCCCBBA........
        .......ABCCCDDDDDDDDCCCBA.......
        ......ABCCDDAADDDDAADDCCBA......
        ......ABCCDDDDDAAADDDDCCBA......
        ......ABCCDDDDAEADDDDDCCBA......
        ......ABCCDDDDDADADDDDCCBA......
        ......ABCCDDDDDDDDDDDDCCBA......
        .......ABCCDDDDDDDDDDCCBA.......
        .......ABCCCDDDDDDDDCCCBA.......
        ........ABBCCCCDDCCCCBBA........
        ........ABBCCCDDDDCCCBBA........
        ........ABBCCDDDDDDCCBBA........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDAAADDCCBA.........
        .........ABBCA....ACBBA.........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ...........AA......AA...........
        ................................
        ................................
        ................................
        ................................
        ................................
    `;
    const SHIBA_BALL_FRAME = frameBlock`
        ................................
        ................................
        ................................
        ..............A..A..............
        .............ABA..ABA...........
        ............ABB.AA.BBA..........
        ...........ABBBBAABBBBA.........
        ..........ABBBBBBBBBBBBA........
        .........ABBCCCCDDCCCCBBA.......
        ........ABCCCDDDDDDDDCCCBA......
        .......ABCCDDDAADDAADDDCCBA.....
        .......ABCCDDDDAEADDDDDCCBA.....
        .......ABCCDDDDAAADDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        .......ABCCDDDDDDDDDDDDCCBA.....
        ........ABCCCDDDDDDDDCCCBA......
        ........ABBCCCCDDCCCCBBA........
        ........ABBCCCDDDDCCCBBA........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABBCDAAADDCBBA.........
        ..........ABBA....ABBA.CCC......
        ..........ABBA....ABBAACCC......
        ..........ABBA....ABBA.CCC......
        ...........AA......AA...........
        ................................
        ................................
        ................................
        ................................
        ................................
    `;
    const SHIBA_SLEEPY_FRAME = frameBlock`
        ................................
        ................................
        ................................
        ..............A..A..............
        ............ABA..ABA............
        ...........ABB.AA.BBA...........
        ..........ABBBBAABBBBA..........
        .........ABBBBBBBBBBBBA.........
        ........ABBCCCCDDCCCCBBA........
        .......ABCCCDDDDDDDDCCCBA.......
        .......ABCCDEEDDDDEEDCCBA.......
        ......ABCCDDDDDDDDDDDDCCBA......
        ......ABCCDDDDAEADDDDDCCBA......
        ......ABCCDDDDDDADDDDDCCBA......
        ......ABCCDDDDDAAADDDDCCBA......
        .......ABCCDDDDDDDDDDCCBA.......
        .......ABCCCDDDDDDDDCCCBA.......
        ........ABBCCCCDDCCCCBBA........
        ........ABBCCCDDDDCCCBBA........
        ........ABBCCDDDDDDCCBBA........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDDDDDDCCBA.........
        .........ABCCDAAADDCCBA.........
        .........ABBCA....ACBBA.........
        ..........ABBA....ABBA..........
        ..........ABBA....ABBA..........
        ...........AA......AA...........
        ................................
        ................................
        ................................
        ................................
        ................................
    `;
    const SHIBA_SLEEP_CURL_FRAME = frameBlock`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ......................AA..AA....................
        .....................ABBAABBA...................
        ....................ABBBAABBBA..................
        ...................ABBCCDDDCCBBA................
        ..................ABCCDDDDDCDDCBA...............
        .................ABCDDDEEDDDDCCBBA..............
        ................ABCCDDDDDDDDDDCCBBA.............
        ................ABCCDDDDDDDDDDCCCBBA............
        ...............ABBCCCDCCCCCCCCCCCCBBA...........
        ...............ABCCCCCCCCCCCCCCCCCCBA...........
        ..............ABCCCCCCCCCCCCCCCCCCCCBA..........
        ..............ABCCCCCCCCCCCCCCCCCCCCBA..........
        ..............ABCCCCCCCCCCCCCCCCCCCCBA..........
        ...............ABCCCCCCCCCCCCCCCCCCBBA..........
        ...............ABBCCCCCCCCCCCCCCCCBBA...........
        ................ABCCCCCCCCCCCCCCCBBA............
        .................ABCCCCCCCCCCCCCCBBA............
        ..................ABCCCCCCCCCCCCCCBBA...........
        ...................ABCCCCCCCCCCCCCCBBBA.........
        ....................ABCCCCCCCCCCCCCCCBBA........
        .....................ABCCCCCCCCCCCCCCCBA........
        ......................ABCCCCCCCCDDCCCCBA........
        .......................ABCCCCCCDDDDCCCBA........
        ........................ABCCCCDDDDDDCCBA........
        .........................ABBCCDDDDDDCCBA........
        ..........................ABBCCCCCCCCCBBA.......
        ...........................ABBBCCCCCCCCBA.......
        ............................AABBCCCCCCBA........
        ..............................ABBBBBBBBA........
        ...............................AABBBBBA.........
        .................................AAAA...........
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
    `;
    const SHIBA_PIXEL_FRAMES = {
        idle: SHIBA_IDLE_FRAME,
        blink: SHIBA_BLINK_FRAME,
        ball: SHIBA_BALL_FRAME,
        hop: SHIBA_HAPPY_SOFT_FRAME,
        sleepy: SHIBA_SLEEPY_FRAME,
        sleep: SHIBA_SLEEP_CURL_FRAME,
        cheer: SHIBA_HAPPY_SOFT_FRAME
    };
    const CAT_PIXEL_FRAMES = {
        idle: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '...ABCCCCCCCCBA.',
            '..ABHHCCCCHHGBA.',
            '..ABHCCCCCCHGBA.',
            '..ABHCCFFCCHGGA.',
            '...ABCF..FCBGAA.',
            '...AFA....AFAA..',
            '............GG..'
        ],
        blink: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AH..CEEC..HA..',
            '...BCCEDDECCB...',
            '...ABCCCCCCCCBA.',
            '..ABHHCCCCHHGBA.',
            '..ABHCCCCCCHGBA.',
            '..ABHCCFFCCHGGA.',
            '...ABCF..FCBGAA.',
            '...AFA....AFAA..',
            '............GG..'
        ],
        hop: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '..ABCCCCCCCCBA..',
            '..ABHHCCCCHGBA..',
            '..ABHCCCCCCHGAA.',
            '...ABHCCFFCHGAA.',
            '...ABCF..FCBGAA.',
            '....AFA..AFAA...',
            '......FFFFFF....'
        ],
        sleep: [
            '................',
            '................',
            '.....A....A.....',
            '....ABH..HBA....',
            '...ABHHHHHHBA...',
            '...AH.CCCC.HA...',
            '..ABCCCEECCBA...',
            '..ABCCDDDDCBA...',
            '..ABCCCCCCCCBA..',
            '...ABHCCCCHGBA..',
            '...ABCCCCCCBA...',
            '....ABHCCGBA....',
            '.....ABBGAA.....',
            '......AAA.......',
            '....F......G....',
            '................'
        ],
        cheer: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '..ABCCCCCCCCBA..',
            '.AABHHCCCCHHGBA.',
            'A..ABHCCCCCHGBA.',
            '...ABHCCFFCHGGA.',
            '...ABCF..FCBGAA.',
            '..AAFA....AFAA..',
            '............GG..'
        ]
    };
    const PET_PROFILES = {
        shiba: {
            id: 'shiba',
            label: '柴犬',
            species: 'shiba',
            defaultName: '木木',
            levelTitles: SHIBA_LEVEL_TITLES,
            levelUnlockLabels: SHIBA_LEVEL_UNLOCK_LABELS,
            moodLabels: SHIBA_MOOD_LABELS,
            moodLabelVariants: SHIBA_MOOD_LABEL_VARIANTS,
            pixelFrames: createPixelFrameMap(SHIBA_PIXEL_FRAMES, SHIBA_FRAME_OPTIONS),
            dialogs: {
                welcome: [
                    '汪！你可算来啦，{name}的尾巴都快摇断了！',
                    '{name}已经霸占了你的屏幕，今天也要一起冲鸭！',
                    '嘿咻，{name}准备就绪！先挑个顺眼的入口热热身？',
                    '只要你一打开网页，{name}就立刻闪现陪你！',
                    '今天也要把日语当零食一样咔嚓咔嚓啃掉！',
                    '放心学，{name}在旁边替你死死盯着进度条呢。'
                ],
                treat: [
                    '啊呜——吧唧吧唧……肉干真香！{name}的电量充满啦！',
                    '还要还要！看在肉干的份上，{name}今天绝对不打瞌睡！',
                    '嗝……吃得有点饱，{name}要化身无情的催学机器了！'
                ],
                colaTreat: [
                    '咕嘟咕嘟——哇！气泡在 {name} 脑子里跳舞！',
                    '嘶哈——好爽！{name}现在强得可怕，快扶我去刷题！',
                    '嗝！（捂嘴）{name}什么都没打，继续干活！',
                    '吨吨吨……可乐能量注入！{name}要在你的桌面上跑酷啦！',
                    '快乐水配日语，{name}觉得你能再学两小时不带喘气的！',
                    '尾巴已经转成螺旋桨了，准备好起飞了吗！'
                ],
                headpat: [
                    '嘿嘿，手感不错吧？那可要多学一会儿当做门票哦。',
                    '嗷呜……耳朵被你rua得好舒服~',
                    '摸了 {name} 的头，今天刷题绝对运气爆棚！'
                ],
                headpatEaster: [
                    { message: '看在你这么喜欢 {name} 的份上，就破例让你多rua两下好啦~', mode: 'headpatGentle', anim: 'blink' },
                    { message: '嘿，摸不到摸不到！{name}可是练过闪避的！', mode: 'headpatPlayful', anim: 'hop' },
                    { message: '汪！毛都要被你薅秃啦！快去学习，不然 {name} 要咬笔头了！', mode: 'headpatAnnoyed', anim: 'idle' }
                ],
                sleepWake: [
                    '唔……{name}只是在梦里帮你背单词，绝对没偷懒……',
                    '吧唧吧唧……梦里的肉干马上就吃到了，别吵……'
                ],
                defaultReview: [
                    '【{label}】在向你招手哦！{name}已经闻到它快要被你遗忘的味道了。',
                    '温故而知新，{name}陪你去【{label}】再踩几个爪印吧！',
                    '要把【{label}】啃得连骨头都不剩，{name}看好你哦！',
                    '嗅嗅……【{label}】那边好像掉落了经验值，快去捡！'
                ],
                defaultExam: [
                    '备考就像啃大骨头，急不得！{name}陪你慢慢啃。',
                    '深呼吸！哪怕只做对一道题，{name}也给你汪汪叫助威！',
                    '冲冲冲！{name}已经准备好为你放满分烟花了！',
                    '这题不难，有 {name} 坐镇，运气加成拉满！'
                ],
                defaultRecent: [
                    '刚刚的【{label}】味道还留着呢，趁热打铁再来一口？',
                    '打卡点【{label}】！{name}的小本本已经记下你的努力啦。',
                    '刚从【{label}】出来，感觉脑子里装满了干货对不对？',
                    '要在【{label}】多停留一会儿吗？{name}随时奉陪！'
                ],
                defaultIdle: [
                    '别发呆啦，{name}的尾巴都快摇不动了，赶紧开始吧！',
                    '随便点个入口，哪怕是抽个签，{name}也算你今天学过了（不是）。',
                    '盯着我看是学不会日语的哦！快去选个任务！',
                    '今天也要做只努力的修勾！啊不对，是努力的主人！',
                    '{name}已经把前爪搭在起跑线上啦，随时准备陪你开跑！'
                ]
            },
            dialogUnlocks: {
                2: {
                    welcome: [
                        '嗅嗅...是熟悉的味道！{name}今天也会贴贴你陪学哦。',
                        '一看到你，{name}的尾巴就忍不住开启自动巡航模式！'
                    ]
                },
                3: {
                    defaultIdle: [
                        '随便点开哪一页都行，只要开始，{name}就给你打call！',
                        '别犹豫啦，先让 {name} 陪你迈出今天的第一只爪子！'
                    ],
                    defaultRecent: [
                        '【{label}】的记忆还热乎着，趁现在给它盖个章！'
                    ]
                },
                4: {
                    headpatExtras: {
                        0: ['{name}舒服地眯起了眼睛，嘴角疯狂上扬。'],
                        1: ['尾巴拍打桌面的声音“啪嗒啪嗒”的，像是被你夸飘了。'],
                        2: ['{name}把下巴搁在你的屏幕边缘，疯狂暗示你继续。']
                    }
                },
                5: {
                    defaultReview: [
                        '复习就像反刍...虽然比喻怪怪的，但 {name} 知道它很有用！',
                        '昨天绊倒你的地方，今天 {name} 陪你直接跨过去！'
                    ]
                },
                6: {
                    treatExtras: {
                        0: ['吃饱喝足，{name}感觉现在能徒手撕碎 N1 试卷（精神上）。'],
                        1: ['嘴角还沾着肉干沫，但眼神已经锁定了你的学习进度。'],
                        2: ['（满足地打了个滚）好耶！今天的打工热情突破天际！']
                    }
                },
                7: {
                    defaultExam: [
                        '题海战术不用怕，{name}就是你的柴犬救生圈！',
                        '这道题如果做对了，晚上能奖励 {name} 多吃一根肉干吗？'
                    ]
                },
                8: {
                    sleepWakeExtras: {
                        0: ['{name}翻了个身，露出软乎乎的肚皮，假装没听见。'],
                        1: ['一只耳朵竖了起来，但眼睛还是闭得紧紧的，企图萌混过关。']
                    }
                },
                9: {
                    defaultIdle: [
                        '{name}今天的心情好到飞起，连你看书的样子都觉得特别帅气！',
                        '能一直这样陪着你，{name}觉得是世界上最棒的工作。'
                    ]
                },
                10: {
                    welcome: [
                        '汪呜！最默契的搭档上线啦！今天 {name} 也要和你天下第一好！',
                        '嘿，无论前面有多少座语法大山，满级 {name} 都会驮着你翻过去！'
                    ],
                    defaultIdle: [
                        '满级不是结束，而是 {name} 可以更从容地趴在你旁边，看你发光。',
                        '能见证你走到这里，{name}觉得比吃了一吨肉干还要开心！'
                    ]
                }
            }
        },
        cat: {
            id: 'cat',
            label: '猫猫',
            species: 'cat',
            defaultName: '咪咪',
            levelTitles: CAT_LEVEL_TITLES,
            levelUnlockLabels: CAT_LEVEL_UNLOCK_LABELS,
            pixelFrames: createPixelFrameMap(CAT_PIXEL_FRAMES),
            dialogs: {
                welcome: [
                    '哼，还知道回来啊？{name}等得胡子都要打结了。还不快开始学习！',
                    '既然你诚心诚意地打开了网页，{name}就勉为其难地监督你一会儿吧。',
                    '盯着我看干嘛？我脸上又没有日语单词。看书去！',
                    '来得真慢。不过……算啦，赶紧挑个任务开始吧。',
                    '今天最好别让我抓到你偷懒，{name}的爪子可是很锋利的！'
                ],
                treat: [
                    '就这点小恩小惠也想收买我？……吧唧吧唧……味道还行，下不为例。',
                    '既然你非要喂，{name}就不客气了。吃饱了才有力气骂你笨。',
                    '哼，算你有良心。今天就多陪你学十分钟吧，就十分钟哦！'
                ],
                colaTreat: [
                    '嗅嗅……等等，这是猫薄荷？！喵呜——本喵才不会被这种东西……（疯狂打滚）',
                    '（眼神迷离）再、再吸一口……就一口……啊，日语是什么，能吃吗？',
                    '喵喵喵！本喵现在感觉能一口气爬上窗帘顶端！快，拿N1试卷来，我要撕了它！',
                    '呼噜噜噜噜……（完全失去高冷形象，抱着你的手指狂蹭）'
                ],
                headpat: [
                    '别乱摸！{name}的发型都乱了……咕噜噜……真是拿你没办法。',
                    '擅自摸本喵的头，是要收利息的。做对十道题才准停下！',
                    '手拿开啦……咳，你想放在那也可以，但我可没觉得舒服哦。',
                    '（嫌弃脸）摸完记得去背单词，别想着用这招偷懒。'
                ],
                headpatEaster: [
                    { message: '……算你手法还不错，{name}就勉强再给你摸一下。', mode: 'headpatGentle', anim: 'blink' },
                    { message: '喵，扑空了吧？{name}可不是随便就能摸到的。', mode: 'headpatPlayful', anim: 'hop' },
                    { message: '够了够了，再摸下去，{name}就要把爪子按在你的书上了。', mode: 'headpatAnnoyed', anim: 'idle' }
                ],
                sleepWake: [
                    '吵死了……{name}才没有在睡觉，只是在闭目养神帮你构思解题思路！',
                    '哈欠……你学你的，别管我，我就在这里趴一小会儿……'
                ],
                defaultReview: [
                    '【{label}】错成那样，还不赶紧去复习？真让人操心。',
                    '喂，别假装没看见【{label}】。错题不看，难道等着过年吗？',
                    '要是连【{label}】都搞不定，以后出去别说是{name}陪你学的！',
                    '去把【{label}】看一遍，别逼我亲自用爪子指给你看。'
                ],
                defaultExam: [
                    '备考又怎样？慌慌张张的真难看。深呼吸，有{name}在这里镇着呢。',
                    '要是敢挂科，就没收你摸我的权利。所以，给我好好做题！',
                    '虽然不觉得你会输，但……还是稍微认真点吧，笨蛋。'
                ],
                defaultRecent: [
                    '刚才那点【{label}】的进度别以为我没看到，还差得远呢，继续。',
                    '【{label}】这就看完了？不会是走马观花吧？再去检查一遍。',
                    '【{label}】的知识点记住了没？要是忘了，{name}可是要咬人的。'
                ],
                defaultIdle: [
                    '发什么呆？时间可不会像{name}一样乖乖停在这里等你。',
                    '你该不会是想借着看我的借口偷懒吧？没门，快去背单词！',
                    '……看在你昨天那么累的份上，允许你发呆一分钟。就一分钟！',
                    '要是不想学，就去做点别的。要是想学，就别盯着我看啦！'
                ]
            },
            dialogUnlocks: {
                2: {
                    welcome: [
                        '哼，今天倒是挺准时。勉强夸你一句吧。'
                    ]
                },
                3: {
                    defaultIdle: [
                        '实在不知道学什么，就随便点一个。反正不管点哪个，你都会错的……开玩笑的，快去吧。'
                    ]
                },
                4: {
                    headpatExtras: {
                        0: ['{name}别过头去，但偷偷把耳朵往你手心凑了凑。'],
                        1: ['虽然嘴上嫌弃，但喉咙里发出的“呼噜噜”声已经出卖了它。']
                    }
                },
                5: {
                    defaultReview: [
                        '重看一遍也是学习。毕竟像你这样的笨脑瓜，多看几遍也是应该的。'
                    ]
                },
                6: {
                    treatExtras: {
                        0: ['吃完肉干舔了舔爪子，眼神似乎柔和了一点点。']
                    }
                },
                7: {
                    defaultExam: [
                        '别给自己太大压力，就算考砸了……咳，我是说，有本喵的保佑，你怎么可能考砸！'
                    ]
                },
                8: {
                    sleepWakeExtras: {
                        0: ['{name}把毛茸茸的尾巴盖在鼻子上，发出了轻微的鼾声。']
                    }
                },
                9: {
                    defaultRecent: [
                        '【{label}】学得不错嘛。偶尔也是能做到的嘛，继续保持。'
                    ],
                    defaultIdle: [
                        '……就算你不说话，这样安安静静待在一起，也不算太坏。'
                    ]
                },
                10: {
                    welcome: [
                        '好啦好啦，我知道你每天都很努力了。今天{name}也特许你坐在我旁边学习哦。',
                        '竟然能坚持到现在……哼，不愧是我看上的人。'
                    ],
                    defaultIdle: [
                        '不知不觉都陪你这么久了……真是的，没有{name}盯着你，你可怎么办呀。',
                        '累的话就靠过来一点。就一点点哦！'
                    ]
                }
            }
        }
    };

    function safeParseJSON(rawValue, fallback) {
        try {
            const parsed = JSON.parse(rawValue);
            return parsed && typeof parsed === 'object' ? parsed : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function getStorage() {
        try {
            return window.localStorage;
        } catch (error) {
            return null;
        }
    }

    function storageGetItem(key) {
        const storage = getStorage();
        if (!storage) {
            return null;
        }

        try {
            return storage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSetItem(key, value) {
        const storage = getStorage();
        if (!storage) {
            return;
        }

        try {
            storage.setItem(key, value);
        } catch (error) {
            // Ignore quota and privacy-mode failures.
        }
    }

    function storageLength() {
        const storage = getStorage();
        if (!storage) {
            return 0;
        }

        try {
            return storage.length;
        } catch (error) {
            return 0;
        }
    }

    function storageKey(index) {
        const storage = getStorage();
        if (!storage) {
            return null;
        }

        try {
            return storage.key(index);
        } catch (error) {
            return null;
        }
    }

    function normalizeHref(rawValue) {
        return String(rawValue || '').trim();
    }

    function getTodayKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getDateGapDays(previousDateKey, currentDateKey) {
        if (!previousDateKey || !currentDateKey) {
            return Number.POSITIVE_INFINITY;
        }

        const previous = new Date(`${previousDateKey}T00:00:00`);
        const current = new Date(`${currentDateKey}T00:00:00`);
        if (Number.isNaN(previous.getTime()) || Number.isNaN(current.getTime())) {
            return Number.POSITIVE_INFINITY;
        }

        return Math.round((current.getTime() - previous.getTime()) / 86400000);
    }

    function parseNumberArray(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || '[]');
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed
                .map((item) => Number.parseInt(item, 10))
                .filter((item) => Number.isInteger(item) && item > 0);
        } catch (error) {
            return [];
        }
    }

    function clamp(value, min, max) {
        if (max < min) {
            return min;
        }
        return Math.min(max, Math.max(min, value));
    }

    function normalizeStoredAnchor(value) {
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) {
            return null;
        }
        return clamp(parsed, 0, 1);
    }

    function getPetIds() {
        return Object.keys(PET_PROFILES);
    }

    function getPetProfile(petId) {
        return PET_PROFILES[petId] || PET_PROFILES[DEFAULT_PET_ID];
    }

    function getPetDefaultName(petId) {
        return getPetProfile(petId).defaultName;
    }

    function sanitizePetName(rawValue, petId = DEFAULT_PET_ID) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return getPetDefaultName(petId);
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('') || getPetDefaultName(petId);
    }

    function normalizeStoredPetName(rawValue) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return '';
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('');
    }

    function createDefaultPersistentPetState() {
        return {
            progressVersion: 2,
            lastVisitDate: '',
            visitStreak: 0,
            bondXp: 0,
            totalVisits: 0,
            totalStudyLaunches: 0,
            lastOpenedSection: '',
            lastClickedHref: '',
            lastClickedLabel: '',
            lastStudyDate: '',
            lastStudyXpDate: '',
            lastInteractionDate: '',
            lastWelcomedAt: 0,
            lastSleepStartedAt: 0,
            claimedMilestoneIds: []
        };
    }

    function createDefaultPersistentPetSettings() {
        return {
            customName: '',
            anchorX: null,
            anchorY: null,
            collapsed: true
        };
    }

    function normalizePersistentPetState(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        const normalized = {
            ...createDefaultPersistentPetState(),
            ...source,
            lastStudyXpDate: typeof source.lastStudyXpDate === 'string' ? source.lastStudyXpDate : '',
            claimedMilestoneIds: Array.from(new Set(normalizeIdList(source.claimedMilestoneIds)))
        };

        if (Number(source.progressVersion) === 2) {
            return normalized;
        }

        return migrateLegacyPersistentPetState(normalized);
    }

    function normalizePersistentPetSettings(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return {
            ...createDefaultPersistentPetSettings(),
            ...source,
            customName: normalizeStoredPetName(source.customName),
            anchorX: normalizeStoredAnchor(source.anchorX),
            anchorY: normalizeStoredAnchor(source.anchorY),
            collapsed: source.collapsed !== false
        };
    }

    function normalizeIdList(rawValue) {
        if (!Array.isArray(rawValue)) {
            return [];
        }
        return rawValue
            .map((item) => String(item || '').trim())
            .filter(Boolean);
    }

    function getVisitMilestoneDaysUpTo(streakDays) {
        const days = Math.max(0, Number(streakDays || 0));
        const milestoneDays = [];
        if (days >= 3) {
            milestoneDays.push(3);
        }
        for (let current = 7; current <= days; current += 7) {
            milestoneDays.push(current);
        }
        return milestoneDays;
    }

    function getStudyMilestonesUpTo(totalLaunches) {
        const launches = Math.max(0, Number(totalLaunches || 0));
        return STUDY_LAUNCH_MILESTONES.filter((milestone) => launches >= milestone.count);
    }

    function migrateLegacyBondXp(oldXp) {
        const normalizedXp = Math.max(0, Number(oldXp || 0));
        if (normalizedXp <= 16) {
            return Math.round((normalizedXp / 16) * 51);
        }
        return Math.min(92, 51 + Math.round((normalizedXp - 16) * 0.5));
    }

    function migrateLegacyPersistentPetState(normalizedState) {
        const migrated = {
            ...createDefaultPersistentPetState(),
            ...normalizedState
        };
        const legacyBondXp = Number(normalizedState.bondXp || 0);
        migrated.bondXp = migrateLegacyBondXp(legacyBondXp);
        migrated.lastStudyXpDate = typeof normalizedState.lastStudyDate === 'string' ? normalizedState.lastStudyDate : '';
        migrated.claimedMilestoneIds = Array.from(new Set([
            ...getVisitMilestoneDaysUpTo(normalizedState.visitStreak).map((days) => `visit-streak-${days}`),
            ...getStudyMilestonesUpTo(normalizedState.totalStudyLaunches).map((milestone) => `study-launch-${milestone.count}`)
        ]));
        migrated.progressVersion = 2;
        return migrated;
    }

    function createDefaultPersistentPetCollection() {
        return {
            unlockedPetIds: DEFAULT_UNLOCKED_PET_IDS.slice(),
            unlockedInteractionIds: DEFAULT_UNLOCKED_INTERACTION_IDS.slice()
        };
    }

    function normalizePersistentPetCollection(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return {
            unlockedPetIds: Array.from(new Set([
                ...DEFAULT_UNLOCKED_PET_IDS,
                ...normalizeIdList(source.unlockedPetIds)
            ])),
            unlockedInteractionIds: Array.from(new Set(normalizeIdList(source.unlockedInteractionIds)))
        };
    }

    function ensurePetStateBucket(wrapper, petId) {
        if (!wrapper.petStates || typeof wrapper.petStates !== 'object' || Array.isArray(wrapper.petStates)) {
            wrapper.petStates = {};
        }
        if (!wrapper.petStates[petId] || typeof wrapper.petStates[petId] !== 'object' || Array.isArray(wrapper.petStates[petId])) {
            wrapper.petStates[petId] = createDefaultPersistentPetState();
        }
        return wrapper.petStates[petId];
    }

    function ensurePetSettingsBucket(wrapper, petId) {
        if (!wrapper.petProfiles || typeof wrapper.petProfiles !== 'object' || Array.isArray(wrapper.petProfiles)) {
            wrapper.petProfiles = {};
        }
        if (!wrapper.petProfiles[petId] || typeof wrapper.petProfiles[petId] !== 'object' || Array.isArray(wrapper.petProfiles[petId])) {
            wrapper.petProfiles[petId] = createDefaultPersistentPetSettings();
        }
        return wrapper.petProfiles[petId];
    }

    function ensurePetCollectionBucket(wrapper) {
        if (!wrapper.petCollection || typeof wrapper.petCollection !== 'object' || Array.isArray(wrapper.petCollection)) {
            wrapper.petCollection = createDefaultPersistentPetCollection();
        }
        wrapper.petCollection = normalizePersistentPetCollection(wrapper.petCollection);
        return wrapper.petCollection;
    }

    function isInteractionUnlocked(wrapper, interactionId) {
        const collection = ensurePetCollectionBucket(wrapper);
        return collection.unlockedInteractionIds.includes(String(interactionId || '').trim());
    }

    function getActivePetId(settings) {
        return PET_PROFILES[settings.activePetId] ? settings.activePetId : DEFAULT_PET_ID;
    }

    function getDisplayPetName(settings, petId = getActivePetId(settings)) {
        const petSettings = ensurePetSettingsBucket(settings, petId);
        return normalizeStoredPetName(petSettings.customName) || getPetDefaultName(petId);
    }

    function shouldShowWelcome(state) {
        const lastWelcomedAt = Number(state && state.lastWelcomedAt);
        if (!Number.isFinite(lastWelcomedAt) || lastWelcomedAt <= 0) {
            return true;
        }
        return Date.now() - lastWelcomedAt >= WELCOME_INTERVAL_MS;
    }

    function hashDialogSeed(...parts) {
        let hash = 0;
        parts.forEach((part) => {
            const text = String(part === undefined || part === null ? '' : part);
            for (let index = 0; index < text.length; index += 1) {
                hash = ((hash * 33) + text.charCodeAt(index)) >>> 0;
            }
        });
        return hash >>> 0;
    }

    function pickSeededDialogItem(variants, seed) {
        if (!Array.isArray(variants) || variants.length === 0) {
            return '';
        }
        if (variants.length === 1) {
            return variants[0] || '';
        }
        const index = hashDialogSeed(seed, variants.length) % variants.length;
        return variants[index] || variants[0] || '';
    }

    function resolvePetDialog(templateOrFactory, petName, extra = {}) {
        const resolvedSource = typeof templateOrFactory === 'function'
            ? templateOrFactory({ name: petName, ...extra })
            : templateOrFactory;
        const rawTemplate = Array.isArray(resolvedSource)
            ? pickSeededDialogItem(resolvedSource, extra.seed || petName)
            : String(resolvedSource || '');

        return rawTemplate.replace(/\{(\w+)\}/g, (match, key) => {
            const value = key === 'name' ? petName : extra[key];
            return value === undefined || value === null ? '' : String(value);
        });
    }

    function pickWelcomeBubble(state, petProfile, petName) {
        const visitSeed = Math.max(0, Number(state && state.totalVisits) || 0);
        return resolveMergedDialogVariants(petProfile, petName, 'welcome', `welcome:${petProfile.id}:${visitSeed}`, {
            levelXp: state && state.bondXp
        });
    }

    function buildPixelSvg(frameRows) {
        const normalizedRows = Array.isArray(frameRows) ? frameRows.map((row) => String(row || '')) : ['.'];
        const width = Math.max(1, ...normalizedRows.map((row) => row.length));
        const height = Math.max(1, normalizedRows.length);
        let rects = '';
        normalizedRows.forEach((row, y) => {
            [...row.padEnd(width, '.')].forEach((token, x) => {
                const fill = PIXEL_PALETTE[token];
                if (!fill) {
                    return;
                }
                rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}" />`;
            });
        });

        return [
            `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`,
            `<rect width="${width}" height="${height}" fill="transparent" />`,
            rects,
            '</svg>'
        ].join('');
    }

    function createPixelFrameMap(frameSource, options = {}) {
        return Object.keys(frameSource).reduce((accumulator, mood) => {
            let nextRows = Array.isArray(frameSource[mood]) ? frameSource[mood].slice() : [];
            nextRows = remapFrameRows(nextRows, options.tokenMap);
            if (options.trim) {
                nextRows = trimTransparentFrame(nextRows, options.padding || 0);
            }
            accumulator[mood] = buildPixelSvg(nextRows);
            return accumulator;
        }, {});
    }

    function loadPetState() {
        const parsed = safeParseJSON(storageGetItem(PET_STATE_KEY), {});
        const petStates = {};

        getPetIds().forEach((petId) => {
            petStates[petId] = createDefaultPersistentPetState();
        });

        if (parsed && parsed.petStates && typeof parsed.petStates === 'object' && !Array.isArray(parsed.petStates)) {
            getPetIds().forEach((petId) => {
                petStates[petId] = normalizePersistentPetState(parsed.petStates[petId]);
            });
            return {
                petStates,
                petCollection: normalizePersistentPetCollection(parsed.petCollection)
            };
        }

        petStates.shiba = normalizePersistentPetState(parsed);
        return {
            petStates,
            petCollection: normalizePersistentPetCollection(parsed.petCollection)
        };
    }

    function savePetState(state) {
        storageSetItem(PET_STATE_KEY, JSON.stringify({
            petStates: getPetIds().reduce((accumulator, petId) => {
                accumulator[petId] = normalizePersistentPetState(ensurePetStateBucket(state, petId));
                return accumulator;
            }, {}),
            petCollection: normalizePersistentPetCollection(ensurePetCollectionBucket(state))
        }));
    }

    function loadPetSettings() {
        const parsed = safeParseJSON(storageGetItem(PET_SETTINGS_KEY), {});
        const petProfiles = {};

        getPetIds().forEach((petId) => {
            petProfiles[petId] = createDefaultPersistentPetSettings();
        });

        if (parsed && parsed.petProfiles && typeof parsed.petProfiles === 'object' && !Array.isArray(parsed.petProfiles)) {
            getPetIds().forEach((petId) => {
                petProfiles[petId] = normalizePersistentPetSettings(parsed.petProfiles[petId]);
            });
            return {
                activePetId: PET_PROFILES[parsed.activePetId] ? parsed.activePetId : DEFAULT_PET_ID,
                petProfiles
            };
        }

        petProfiles.shiba = normalizePersistentPetSettings(parsed);
        return {
            activePetId: DEFAULT_PET_ID,
            petProfiles
        };
    }

    function savePetSettings(settings) {
        storageSetItem(PET_SETTINGS_KEY, JSON.stringify({
            activePetId: getActivePetId(settings),
            petProfiles: getPetIds().reduce((accumulator, petId) => {
                const petSettings = ensurePetSettingsBucket(settings, petId);
                accumulator[petId] = {
                    customName: normalizeStoredPetName(petSettings.customName),
                    anchorX: normalizeStoredAnchor(petSettings.anchorX),
                    anchorY: normalizeStoredAnchor(petSettings.anchorY),
                    collapsed: petSettings.collapsed !== false
                };
                return accumulator;
            }, {})
        }));
    }

    function registerVisit(state) {
        const today = getTodayKey();
        const gap = getDateGapDays(state.lastVisitDate, today);
        const isFirstVisitToday = state.lastVisitDate !== today;

        if (isFirstVisitToday) {
            state.visitStreak = gap === 1 ? Math.max(1, Number(state.visitStreak || 0) + 1) : 1;
            state.lastVisitDate = today;
            state.totalVisits = Number(state.totalVisits || 0) + 1;
        }

        return {
            today,
            gap,
            isFirstVisitToday
        };
    }

    function getLevelInfo(xp, levelTitles = SHIBA_LEVEL_TITLES) {
        const normalizedXp = Math.max(0, Number(xp || 0));
        let level = 1;

        for (let index = 0; index < LEVEL_XP_THRESHOLDS.length; index += 1) {
            if (normalizedXp >= LEVEL_XP_THRESHOLDS[index]) {
                level = index + 1;
            } else {
                break;
            }
        }

        const cappedLevel = Math.min(levelTitles.length, level);
        const title = levelTitles[cappedLevel - 1] || levelTitles[0];
        const currentLevelXp = LEVEL_XP_THRESHOLDS[cappedLevel - 1] || 0;
        const nextLevelXp = LEVEL_XP_THRESHOLDS[cappedLevel] ?? currentLevelXp;
        const isMax = cappedLevel >= levelTitles.length;
        const progressRatio = isMax
            ? 1
            : clamp((normalizedXp - currentLevelXp) / Math.max(1, nextLevelXp - currentLevelXp), 0, 1);

        return {
            level: cappedLevel,
            title,
            xp: normalizedXp,
            currentLevelXp,
            nextLevelXp,
            progressRatio,
            xpIntoLevel: Math.max(0, normalizedXp - currentLevelXp),
            xpNeededForNext: isMax ? 0 : Math.max(0, nextLevelXp - normalizedXp),
            isMax
        };
    }

    function normalizeDialogVariants(rawValue) {
        if (Array.isArray(rawValue)) {
            return rawValue.filter(Boolean);
        }
        if (rawValue === undefined || rawValue === null || rawValue === '') {
            return [];
        }
        return [rawValue];
    }

    function getLevelUnlockLabel(petId, level) {
        const petProfile = getPetProfile(petId);
        const labels = petProfile.levelUnlockLabels || {};
        return labels[level] || '新的陪学称号';
    }

    function getDialogUnlockPool(petProfile, level, kind) {
        const unlocks = petProfile.dialogUnlocks || {};
        const additions = [];
        for (let currentLevel = 2; currentLevel <= level; currentLevel += 1) {
            const entry = unlocks[currentLevel];
            if (!entry || !entry[kind]) {
                continue;
            }
            additions.push(...normalizeDialogVariants(entry[kind]));
        }
        return additions;
    }

    function getIndexedDialogUnlockPool(petProfile, level, kind, index) {
        const unlocks = petProfile.dialogUnlocks || {};
        const additions = [];
        for (let currentLevel = 2; currentLevel <= level; currentLevel += 1) {
            const entry = unlocks[currentLevel];
            if (!entry || !entry[kind] || typeof entry[kind] !== 'object') {
                continue;
            }
            additions.push(...normalizeDialogVariants(entry[kind][index]));
        }
        return additions;
    }

    function resolveMergedDialogVariants(petProfile, petName, kind, seed, extra = {}) {
        const level = getLevelInfo(extra.levelXp || 0, petProfile.levelTitles).level;
        const variants = [
            ...normalizeDialogVariants(petProfile.dialogs[kind]),
            ...getDialogUnlockPool(petProfile, level, kind)
        ];
        return resolvePetDialog(variants, petName, {
            ...extra,
            seed
        });
    }

    function resolveIndexedDialogVariants(petProfile, petName, kind, index, seed, extra = {}) {
        const baseVariants = normalizeDialogVariants(petProfile.dialogs[kind]);
        const baseMessage = resolvePetDialog(baseVariants[index] || baseVariants[0] || '', petName, extra);
        const level = getLevelInfo(extra.levelXp || 0, petProfile.levelTitles).level;
        const additions = getIndexedDialogUnlockPool(petProfile, level, `${kind}Extras`, index);
        if (!additions.length) {
            return baseMessage;
        }
        const extraMessage = resolvePetDialog(additions, petName, {
            ...extra,
            seed: `${seed}:extra`
        });
        return extraMessage ? `${baseMessage} ${extraMessage}`.trim() : baseMessage;
    }

    function normalizeCollectionMeta(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return Object.keys(source).reduce((accumulator, id) => {
            const entry = source[id];
            if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
                return accumulator;
            }
            accumulator[id] = {
                count: Math.max(0, Number(entry.count) || 0),
                firstObtainedAt: Number.isFinite(Number(entry.firstObtainedAt)) && Number(entry.firstObtainedAt) > 0 ? Number(entry.firstObtainedAt) : null,
                lastObtainedAt: Number.isFinite(Number(entry.lastObtainedAt)) && Number(entry.lastObtainedAt) > 0 ? Number(entry.lastObtainedAt) : null,
                isNew: Boolean(entry.isNew)
            };
            return accumulator;
        }, {});
    }

    function getLotteryCollectionMeta() {
        return normalizeCollectionMeta(safeParseJSON(storageGetItem(LOTTERY_COLLECTION_META_KEY), {}));
    }

    function saveLotteryCollectionMeta(meta) {
        storageSetItem(LOTTERY_COLLECTION_META_KEY, JSON.stringify(meta));
    }

    function saveLotteryCollectionIds(meta) {
        const unlockedIds = Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
        storageSetItem(LOTTERY_COLLECTION_KEY, JSON.stringify(unlockedIds));
    }

    function unlockPetMaxRewardCard(petId) {
        const rewardId = PET_MAX_REWARD_IDS[petId];
        if (!rewardId) {
            return false;
        }

        const meta = getLotteryCollectionMeta();
        if (meta[rewardId] && Number(meta[rewardId].count) > 0) {
            return false;
        }

        const now = Date.now();
        meta[rewardId] = {
            count: 1,
            firstObtainedAt: now,
            lastObtainedAt: now,
            isNew: true
        };
        saveLotteryCollectionMeta(meta);
        saveLotteryCollectionIds(meta);
        storageSetItem(LOTTERY_LAST_OBTAINED_KEY, JSON.stringify({ id: rewardId, obtainedAt: now }));
        return true;
    }

    function countTrueKeys(prefix) {
        let count = 0;
        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key || !key.startsWith(prefix)) {
                continue;
            }
            if (storageGetItem(key) === 'true') {
                count += 1;
            }
        }
        return count;
    }

    function sumArrayLengthsByPrefix(prefix) {
        let total = 0;
        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key || !key.startsWith(prefix)) {
                continue;
            }
            total += parseNumberArray(storageGetItem(key)).length;
        }
        return total;
    }

    function formatReadingType(type) {
        return READING_TYPE_LABELS[type] || String(type || '読解');
    }

    function formatListeningLabel(level) {
        return `即時応答 ${level}`;
    }

    function createTrackedHref(config, href, sectionKey) {
        const normalizedHref = normalizeHref(href);
        if (!normalizedHref) {
            return '';
        }

        if (typeof config.buildReturnHref === 'function') {
            return config.buildReturnHref(normalizedHref, sectionKey || DEFAULT_SECTION);
        }

        return normalizedHref;
    }

    function collectKakujyoSummary(config) {
        const parsed = safeParseJSON(storageGetItem('kakujyo-wrong-bank-v1'), { mcq: [], fill: [] });
        const reviewCount = (Array.isArray(parsed.mcq) ? parsed.mcq.length : 0) + (Array.isArray(parsed.fill) ? parsed.fill.length : 0);

        if (reviewCount <= 0) {
            return [];
        }

        return [{
            area: 'daily',
            sectionKey: 'daily',
            label: '格助词题库',
            href: createTrackedHref(config, 'daily/grammar/kakujyo_practice.html', 'daily'),
            statusText: `待复习 ${reviewCount} 题`,
            reviewCount,
            score: 12 + reviewCount * 4
        }];
    }

    function collectReadingSummaries(config) {
        const summaries = new Map();

        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key) {
                continue;
            }

            if (key.startsWith('reading_last_practice::')) {
                const parts = key.split('::');
                const level = parts[1];
                const type = parts[2];
                if (!level || !type) {
                    continue;
                }

                const mapKey = `${level}::${type}`;
                const current = summaries.get(mapKey) || {
                    level,
                    type,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.lastPractice = String(storageGetItem(key) || '').trim();
                summaries.set(mapKey, current);
            }

            if (key.startsWith('reading_marks::')) {
                const parts = key.split('::');
                const level = parts[1];
                const type = parts[2];
                if (!level || !type) {
                    continue;
                }

                const mapKey = `${level}::${type}`;
                const current = summaries.get(mapKey) || {
                    level,
                    type,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.reviewCount += parseNumberArray(storageGetItem(key)).length;
                summaries.set(mapKey, current);
            }
        }

        return Array.from(summaries.values())
            .filter((item) => item.reviewCount > 0 || item.lastPractice)
            .map((item) => ({
                area: 'exam',
                sectionKey: 'exam',
                label: `読解 ${item.level} / ${formatReadingType(item.type)}`,
                href: createTrackedHref(
                    config,
                    `exam/jlpt-reading/index.html?level=${encodeURIComponent(item.level)}&type=${encodeURIComponent(item.type)}&browse=year`,
                    'exam'
                ),
                statusText: item.reviewCount > 0
                    ? `${item.lastPractice ? `${item.lastPractice} · ` : ''}待复习 ${item.reviewCount} 题`
                    : `最近做到 ${item.lastPractice}`,
                reviewCount: item.reviewCount,
                score: 10 + item.reviewCount * 5 + (item.lastPractice ? 2 : 0)
            }));
    }

    function collectGrammarSortSummaries(config) {
        const summaries = new Map();

        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key) {
                continue;
            }

            if (key.startsWith('grammar_sort_last_practice::')) {
                const level = key.split('::')[1];
                if (!level) {
                    continue;
                }

                const current = summaries.get(level) || {
                    level,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.lastPractice = String(storageGetItem(key) || '').trim();
                summaries.set(level, current);
            }

            if (key.startsWith('grammar_sort_marks::')) {
                const parts = key.split('::');
                const level = parts[1];
                if (!level) {
                    continue;
                }

                const current = summaries.get(level) || {
                    level,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.reviewCount += safeParseJSON(storageGetItem(key), []).length || 0;
                summaries.set(level, current);
            }
        }

        return Array.from(summaries.values())
            .filter((item) => item.reviewCount > 0 || item.lastPractice)
            .map((item) => {
                let rawHref = `exam/grammar/排序_fixed.html?level=${encodeURIComponent(item.level)}`;
                if (item.reviewCount > 0 && item.lastPractice) {
                    rawHref += `&year=${encodeURIComponent(item.lastPractice)}&mode=review`;
                } else if (item.lastPractice) {
                    rawHref += `&year=${encodeURIComponent(item.lastPractice)}`;
                }

                return {
                    area: 'exam',
                    sectionKey: 'exam',
                    label: `排序专项 ${item.level}`,
                    href: createTrackedHref(config, rawHref, 'exam'),
                    statusText: item.reviewCount > 0
                        ? `${item.lastPractice ? `${item.lastPractice} · ` : ''}待复习 ${item.reviewCount} 题`
                        : `最近做到 ${item.lastPractice}`,
                    reviewCount: item.reviewCount,
                    score: 9 + item.reviewCount * 4 + (item.lastPractice ? 3 : 0)
                };
            });
    }

    function collectVocabularySummaries(config) {
        const tracks = [
            {
                label: 'N1 动词',
                lastDayKey: 'n1_verbs_last_day',
                starPrefix: 'n1_verbs_star_',
                href: 'exam/vocabulary/verbs_n1.html'
            },
            {
                label: 'N1 形容词',
                lastDayKey: 'n1_adjs_last_day',
                starPrefix: 'n1_adjs_star_',
                href: 'exam/vocabulary/adjectives_n1.html'
            },
            {
                label: 'N1 拟声拟态',
                lastDayKey: 'n1_mimetic_last_day',
                starPrefix: 'n1_mimetic_star_',
                href: 'exam/vocabulary/mimetic_n1.html'
            }
        ];

        return tracks
            .map((track) => {
                const lastDay = Number.parseInt(storageGetItem(track.lastDayKey) || '0', 10);
                const starCount = countTrueKeys(track.starPrefix);
                if (!lastDay && !starCount) {
                    return null;
                }

                const parts = [];
                if (lastDay) parts.push(`Day ${lastDay}`);
                if (starCount) parts.push(`收藏 ${starCount}`);

                return {
                    area: 'exam',
                    sectionKey: 'exam',
                    label: track.label,
                    href: createTrackedHref(config, track.href, 'exam'),
                    statusText: parts.join(' · '),
                    reviewCount: 0,
                    score: 6 + Math.min(lastDay, 20) + Math.min(starCount, 8)
                };
            })
            .filter(Boolean);
    }

    function collectListeningSummaries(config) {
        const items = [];
        const responseTracks = [
            {
                label: formatListeningLabel('N1'),
                lastKey: 'last_n1_practice',
                href: 'exam/listening/immediate-response/n1/index.html'
            },
            {
                label: formatListeningLabel('N2'),
                lastKey: 'last_n2_practice',
                href: 'exam/listening/immediate-response/n2/index.html'
            },
            {
                label: formatListeningLabel('N3'),
                lastKey: 'last_n3_practice',
                href: 'exam/listening/immediate-response/n3/index.html'
            }
        ];

        responseTracks.forEach((track) => {
            const lastExam = String(storageGetItem(track.lastKey) || '').trim();
            if (!lastExam) {
                return;
            }

            items.push({
                area: 'exam',
                sectionKey: 'exam',
                label: track.label,
                href: createTrackedHref(config, track.href, 'exam'),
                statusText: `最近练到 ${lastExam}`,
                reviewCount: 0,
                score: 7
            });
        });

        const listeningTaskReviewCount = sumArrayLengthsByPrefix('jlpt_listen1_marks_');
        const lastListeningTask = String(storageGetItem('last_n2_listening1_practice') || '').trim();
        if (listeningTaskReviewCount > 0 || lastListeningTask) {
            items.push({
                area: 'exam',
                sectionKey: 'exam',
                label: '課題理解 N2',
                href: createTrackedHref(config, 'exam/listening/task-comprehension/n2/index.html', 'exam'),
                statusText: listeningTaskReviewCount > 0
                    ? `${lastListeningTask ? `${lastListeningTask} · ` : ''}待复习 ${listeningTaskReviewCount} 题`
                    : `最近练到 ${lastListeningTask}`,
                reviewCount: listeningTaskReviewCount,
                score: 8 + listeningTaskReviewCount * 3 + (lastListeningTask ? 2 : 0)
            });
        }

        return items;
    }

    function createFallbackEntry(config) {
        return {
            ...FALLBACK_ENTRY,
            href: createTrackedHref(config, FALLBACK_ENTRY.href, 'daily')
        };
    }

    function buildLearningSummary(config, state, visitMeta) {
        const rawItems = [
            ...collectKakujyoSummary(config),
            ...collectReadingSummaries(config),
            ...collectGrammarSortSummaries(config),
            ...collectVocabularySummaries(config),
            ...collectListeningSummaries(config)
        ];
        const fallback = createFallbackEntry(config);
        const currentSection = typeof config.getActiveSection === 'function'
            ? (config.getActiveSection() || '')
            : '';

        const items = rawItems.map((item) => {
            let score = Number(item.score || 0);
            if (currentSection && currentSection === item.sectionKey) {
                score += 1;
            }
            if (state.lastClickedHref && normalizeHref(state.lastClickedHref) === normalizeHref(item.href)) {
                score += 20;
            }
            return { ...item, score };
        });

        const recentActivities = items
            .slice()
            .sort((left, right) => right.score - left.score)
            .slice(0, 3);

        const reviewCandidates = items
            .filter((item) => item.reviewCount > 0)
            .sort((left, right) => {
                if (right.reviewCount !== left.reviewCount) {
                    return right.reviewCount - left.reviewCount;
                }
                return right.score - left.score;
            });

        const recommendedNext = reviewCandidates[0]
            || items.slice().sort((left, right) => right.score - left.score)[0]
            || fallback;

        const totalReviewCount = reviewCandidates.reduce((sum, item) => sum + Number(item.reviewCount || 0), 0);

        let mood = 'idle';
        if (visitMeta.gap >= 4 && items.length <= 1) {
            mood = 'sleep';
        } else if (totalReviewCount >= 8) {
            mood = 'curious';
        } else if (Number(state.visitStreak || 0) >= 3 || items.length >= 3) {
            mood = 'cheer';
        } else if (visitMeta.gap >= 2 && items.length === 0) {
            mood = 'sleep';
        }

        return {
            recentActivities,
            recommendedNext,
            reviewPressure: {
                total: totalReviewCount,
                hasBacklog: totalReviewCount > 0
            },
            visitStreak: Number(state.visitStreak || 1),
            mood,
            levelXp: Number(state.bondXp || 0)
        };
    }

    function pickDefaultBubble(summary, activeSection, petProfile, petName) {
        const levelXp = summary && summary.levelXp;
        if (summary.reviewPressure.hasBacklog) {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultReview', `review:${petProfile.id}:${summary.recommendedNext.label}:${summary.reviewPressure.total}:${summary.visitStreak}`, {
                label: summary.recommendedNext.label,
                levelXp
            });
        }
        if (activeSection === 'exam') {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultExam', `exam:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}`, {
                levelXp
            });
        }
        if (summary.recentActivities.length > 0) {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultRecent', `recent:${petProfile.id}:${summary.recentActivities[0].label}:${summary.visitStreak}:${summary.recentActivities.length}`, {
                label: summary.recentActivities[0].label,
                levelXp
            });
        }
        return resolveMergedDialogVariants(petProfile, petName, 'defaultIdle', `idle:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}:${activeSection || 'none'}`, {
            levelXp
        });
    }

    function getPetMoodLabel(petId, moodKey, fallbackKey = moodKey, level = 1) {
        const petProfile = getPetProfile(petId);
        const petMoodLabels = petProfile && petProfile.moodLabels ? petProfile.moodLabels : null;
        const petMoodVariants = petProfile && petProfile.moodLabelVariants ? petProfile.moodLabelVariants : null;
        if (petMoodVariants && Array.isArray(petMoodVariants[moodKey])) {
            const matchedVariant = petMoodVariants[moodKey]
                .slice()
                .sort((left, right) => Number(left.minLevel || 0) - Number(right.minLevel || 0))
                .reduce((currentMatch, variant) => {
                    if (level >= Number(variant.minLevel || 0)) {
                        return variant;
                    }
                    return currentMatch;
                }, null);
            if (matchedVariant && matchedVariant.label) {
                return matchedVariant.label;
            }
        }
        if (petMoodLabels && petMoodLabels[moodKey]) {
            return petMoodLabels[moodKey];
        }
        return MOOD_LABELS[fallbackKey] || MOOD_LABELS.idle;
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getActivityLimit() {
        return window.innerWidth <= 768 ? 1 : 2;
    }

    function getInset() {
        return window.innerWidth <= 768 ? 16 : 26;
    }

    function getDefaultAnchorPosition(root, config) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || (window.innerWidth <= 768 ? 248 : 288);
        const height = Math.round(rect.height) || (window.innerWidth <= 768 ? 74 : 86);
        const inset = getInset();
        let rightOffset = inset;

        if (window.innerWidth > 768) {
            const pageShell = document.querySelector(config.pageShellSelector || '.page-shell');
            if (pageShell) {
                const shellRect = pageShell.getBoundingClientRect();
                rightOffset = Math.max(inset, Math.round(window.innerWidth - shellRect.right + inset + 8));
            }
        }

        return {
            left: clamp(window.innerWidth - width - rightOffset, inset, Math.max(inset, window.innerWidth - width - inset)),
            top: clamp(window.innerHeight - height - inset, inset, Math.max(inset, window.innerHeight - height - inset))
        };
    }

    function getClampedAnchor(root, left, top) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || 280;
        const height = Math.round(rect.height) || 86;
        const inset = getInset();

        return {
            left: clamp(left, inset, Math.max(inset, window.innerWidth - width - inset)),
            top: clamp(top, inset, Math.max(inset, window.innerHeight - height - inset))
        };
    }

    function persistAnchor(root, settings, left, top) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || 280;
        const height = Math.round(rect.height) || 86;
        const availableX = Math.max(1, window.innerWidth - width);
        const availableY = Math.max(1, window.innerHeight - height);

        settings.anchorX = clamp(left / availableX, 0, 1);
        settings.anchorY = clamp(top / availableY, 0, 1);
        savePetSettings(settings);
    }

    function buildMarkup() {
        return `
            <div class="home-pet">
                <section class="home-pet-panel" aria-live="polite">
                    <div class="home-pet-panel-head">
                        <div class="home-pet-title-row">
                            <button type="button" class="home-pet-name-button" data-pet-name-button aria-label="修改柴犬名字">
                                <span data-pet-name></span>
                            </button>
                            <button
                                type="button"
                                class="home-pet-species-button"
                                data-pet-collection-trigger
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-label="打开宠物收藏"
                                >
                                <span data-pet-species-label></span>
                            </button>
                            <label class="home-pet-name-editor" data-pet-name-editor hidden>
                                <input
                                    class="home-pet-name-input"
                                    data-pet-name-input
                                    type="text"
                                    maxlength="${MAX_NAME_LENGTH}"
                                    aria-label="输入柴犬名字"
                                >
                            </label>
                        </div>
                        <span class="home-pet-pill home-pet-pill--accent" data-pet-mood></span>
                    </div>
                    <div class="home-pet-meta">
                        <button type="button" class="home-pet-action" data-pet-headpat>摸摸头</button>
                        <button type="button" class="home-pet-action" data-pet-treat>喂肉干</button>
                        <button type="button" class="home-pet-action home-pet-action--special" data-pet-cola hidden>喂可乐</button>
                    </div>
                    <ul class="home-pet-activities" data-pet-activities></ul>
                </section>
                <div class="home-pet-dock">
                    <div class="home-pet-bubble" data-pet-bubble></div>
                    <button type="button" class="home-pet-toggle" data-pet-toggle aria-label="打开柴犬陪学面板" aria-expanded="false">
                        <span class="home-pet-sprite" data-pet-sprite></span>
                    </button>
                </div>
            </div>
            <div class="home-pet-collection" data-pet-collection hidden>
                <div class="home-pet-collection-dialog" role="dialog" aria-modal="true" aria-label="宠物收藏">
                    <div class="home-pet-collection-head">
                        <strong class="home-pet-collection-title">宠物图鉴</strong>
                        <button type="button" class="home-pet-collection-close" data-pet-collection-close aria-label="关闭宠物图鉴">&times;</button>
                    </div>
                    <div class="home-pet-collection-grid" data-pet-collection-grid></div>
                </div>
            </div>
        `;
    }

    function renderActivities(target, activities, fallbackItem) {
        const visibleItems = (activities.length ? activities : [fallbackItem]).filter(Boolean).slice(0, getActivityLimit());

        if (!visibleItems.length) {
            target.innerHTML = `
                <li class="home-pet-activity">
                    <strong class="home-pet-activity-title">今天还没开始</strong>
                    <span class="home-pet-activity-text">先挑一个最轻松的入口动起来吧。</span>
                </li>
            `;
            return;
        }

        target.innerHTML = visibleItems.map((item) => `
            <li>
                <a
                    class="home-pet-activity home-pet-activity-link"
                    data-pet-activity-link
                    data-section-key="${escapeHtml(item.sectionKey || DEFAULT_SECTION)}"
                    href="${escapeHtml(item.href || '#')}"
                >
                    <span class="home-pet-activity-kicker">继续学习</span>
                    <strong class="home-pet-activity-title">${escapeHtml(item.label)}</strong>
                    <span class="home-pet-activity-text">${escapeHtml(item.statusText)}</span>
                </a>
            </li>
        `).join('');
    }

    function createController(root, config) {
        let state = loadPetState();
        let settings = loadPetSettings();
        let modalOpen = false;
        let collectionOpen = false;
        let motionTimer = null;
        let isNameEditing = false;
        let dragState = null;
        let justDragged = false;
        let summary = null;
        let visitMeta = null;

        function createRuntimeStateForPet(petId) {
            return {
                currentDialog: '',
                dialogSource: { kind: 'default' },
                animState: 'idle',
                sessionTreatCount: 0,
                sessionColaCount: 0,
                sessionHeadpatChainCount: 0,
                sessionSleepWakeCount: 0,
                lastHeadpatAt: 0,
                headpatEasterCooldownUntil: 0,
                ballPoseCooldownUntil: 0,
                lastBallPoseCheckAt: 0,
                interactionMode: 'normal',
                interactionModeUntil: 0,
                interactionTimer: null,
                levelToastMessage: '',
                levelToastUntil: 0,
                levelToastTimer: null,
                welcomePending: shouldShowWelcome(ensurePetStateBucket(state, petId)),
                welcomeLocked: false
            };
        }

        const petRuntimeStore = getPetIds().reduce((accumulator, petId) => {
            accumulator[petId] = createRuntimeStateForPet(petId);
            return accumulator;
        }, {});

        getPetIds().forEach((petId) => {
            const petSettings = ensurePetSettingsBucket(settings, petId);
            petSettings.anchorX = null;
            petSettings.anchorY = null;
        });

        root.className = 'home-pet-root';
        root.innerHTML = buildMarkup();

        const nameEl = root.querySelector('[data-pet-name]');
        const nameButtonEl = root.querySelector('[data-pet-name-button]');
        const nameEditorEl = root.querySelector('[data-pet-name-editor]');
        const nameInputEl = root.querySelector('[data-pet-name-input]');
        const speciesLabelEl = root.querySelector('[data-pet-species-label]');
        const collectionTriggerEl = root.querySelector('[data-pet-collection-trigger]');
        const collectionPanelEl = root.querySelector('[data-pet-collection]');
        const collectionGridEl = root.querySelector('[data-pet-collection-grid]');
        const collectionCloseEl = root.querySelector('[data-pet-collection-close]');
        const moodEl = root.querySelector('[data-pet-mood]');
        const activitiesEl = root.querySelector('[data-pet-activities]');
        const bubbleEl = root.querySelector('[data-pet-bubble]');
        const spriteEl = root.querySelector('[data-pet-sprite]');
        const toggleEl = root.querySelector('[data-pet-toggle]');
        const headpatBtn = root.querySelector('[data-pet-headpat]');
        const treatBtn = root.querySelector('[data-pet-treat]');
        const colaBtn = root.querySelector('[data-pet-cola]');

        function getPetStateById(petId) {
            return ensurePetStateBucket(state, petId);
        }

        function getPetSettingsById(petId) {
            return ensurePetSettingsBucket(settings, petId);
        }

        function getPetRuntime(petId) {
            if (!petRuntimeStore[petId]) {
                petRuntimeStore[petId] = createRuntimeStateForPet(petId);
            }
            return petRuntimeStore[petId];
        }

        function getCurrentSection() {
            return typeof config.getActiveSection === 'function'
                ? (config.getActiveSection() || '')
                : '';
        }

        function getCurrentPetId() {
            return getActivePetId(settings);
        }

        function getCurrentPetProfile() {
            return getPetProfile(getCurrentPetId());
        }

        function getCurrentPetState() {
            return getPetStateById(getCurrentPetId());
        }

        function getCurrentPetSettings() {
            return getPetSettingsById(getCurrentPetId());
        }

        function getCurrentPetRuntime() {
            return getPetRuntime(getCurrentPetId());
        }

        function getCurrentPetName() {
            return getDisplayPetName(settings, getCurrentPetId());
        }

        function getPetCollection() {
            return ensurePetCollectionBucket(state);
        }

        function clearLevelToastTimer(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            if (runtime.levelToastTimer) {
                clearTimeout(runtime.levelToastTimer);
                runtime.levelToastTimer = null;
            }
        }

        function showLevelToast(petId, message) {
            const runtime = getPetRuntime(petId);
            clearLevelToastTimer(petId);
            runtime.levelToastMessage = String(message || '').trim();
            runtime.levelToastUntil = Date.now() + 3200;
            runtime.levelToastTimer = window.setTimeout(() => {
                const currentRuntime = getPetRuntime(petId);
                currentRuntime.levelToastMessage = '';
                currentRuntime.levelToastUntil = 0;
                currentRuntime.levelToastTimer = null;
                if (getCurrentPetId() === petId) {
                    sync('level-toast-timeout');
                }
            }, 3200);
        }

        function getCurrentLevelUnlockText(petId, levelInfo) {
            if (!levelInfo || !levelInfo.isMax) {
                return '';
            }
            const rewardId = PET_MAX_REWARD_IDS[petId];
            const rewardUnlocked = rewardId
                ? Boolean((getLotteryCollectionMeta()[rewardId] || {}).count)
                : false;
            return rewardUnlocked ? '满级图鉴卡已解锁' : '满级奖励待领取';
        }

        function getNextLevelUnlockText(petId, levelInfo) {
            if (!levelInfo) {
                return '';
            }
            if (levelInfo.isMax) {
                return getCurrentLevelUnlockText(petId, levelInfo);
            }
            return `下一级解锁：${getLevelUnlockLabel(petId, levelInfo.level + 1)}`;
        }

        function awardBondXp(petId, amount) {
            const xpGain = Math.max(0, Number(amount || 0));
            if (xpGain <= 0) {
                return { gained: 0, didLevelUp: false, rewardUnlocked: false };
            }

            const petState = getPetStateById(petId);
            const petProfile = getPetProfile(petId);
            const before = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            petState.bondXp = Math.max(0, Number(petState.bondXp || 0) + xpGain);
            const after = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            const rewardUnlocked = after.isMax ? unlockPetMaxRewardCard(petId) : false;

            if (after.level > before.level) {
                const unlockLabel = getLevelUnlockLabel(petId, after.level);
                const toastMessage = rewardUnlocked
                    ? `Lv.${after.level} 达成 · 已解锁满级图鉴卡`
                    : `Lv.${after.level} 达成 · 已解锁：${unlockLabel}`;
                showLevelToast(petId, toastMessage);
            }

            return {
                gained: xpGain,
                didLevelUp: after.level > before.level,
                rewardUnlocked,
                before,
                after
            };
        }

        function claimMilestoneReward(petId, milestoneId, xpAmount) {
            const petState = getPetStateById(petId);
            if (petState.claimedMilestoneIds.includes(milestoneId)) {
                return false;
            }
            petState.claimedMilestoneIds.push(milestoneId);
            awardBondXp(petId, xpAmount);
            return true;
        }

        function maybeClaimVisitMilestones(petId) {
            const petState = getPetStateById(petId);
            const streak = Math.max(0, Number(petState.visitStreak || 0));
            let didChange = false;

            if (streak >= 3) {
                didChange = claimMilestoneReward(petId, 'visit-streak-3', 1) || didChange;
            }
            for (let days = 7; days <= streak; days += 7) {
                didChange = claimMilestoneReward(petId, `visit-streak-${days}`, 2) || didChange;
            }

            return didChange;
        }

        function maybeClaimStudyMilestones(petId) {
            const petState = getPetStateById(petId);
            const totalLaunches = Math.max(0, Number(petState.totalStudyLaunches || 0));
            let didChange = false;

            STUDY_LAUNCH_MILESTONES.forEach((milestone) => {
                if (totalLaunches < milestone.count) {
                    return;
                }
                didChange = claimMilestoneReward(petId, `study-launch-${milestone.count}`, milestone.xp) || didChange;
            });

            return didChange;
        }

        function awardVisitXp(petId) {
            awardBondXp(petId, 1);
            maybeClaimVisitMilestones(petId);
            savePetState(state);
        }

        function renderCollectionCards() {
            const collection = getPetCollection();
            collectionGridEl.innerHTML = getPetIds().map((petId) => {
                const petProfile = getPetProfile(petId);
                const isActive = petId === getCurrentPetId();
                const isUnlocked = collection.unlockedPetIds.includes(petId);
                const statusText = isActive ? '陪学中' : (isUnlocked ? '已收集' : '未解锁');
                return `
                    <button
                        type="button"
                        class="home-pet-collection-item${isActive ? ' is-active' : ''}${isUnlocked ? '' : ' is-locked'}"
                        data-pet-collection-option="${escapeHtml(petId)}"
                        aria-pressed="${isActive ? 'true' : 'false'}"
                        ${isUnlocked ? '' : 'disabled'}
                    >
                        <span class="home-pet-collection-item-icon" aria-hidden="true">
                            ${petProfile.pixelFrames.idle || ''}
                        </span>
                        <span class="home-pet-collection-item-title">${escapeHtml(petProfile.label)}</span>
                        <span class="home-pet-collection-item-meta">${escapeHtml(statusText)}</span>
                    </button>
                `;
            }).join('');
        }

        function getVisitMetaSnapshot(petId) {
            const petState = getPetStateById(petId);
            const today = getTodayKey();
            return {
                today,
                gap: getDateGapDays(petState.lastVisitDate, today),
                isFirstVisitToday: petState.lastVisitDate !== today
            };
        }

        function getVisitMetaForPet(petId) {
            if (petId === getCurrentPetId() && visitMeta) {
                return visitMeta;
            }
            return getVisitMetaSnapshot(petId);
        }

        function buildSummaryForPet(petId) {
            return buildLearningSummary(config, getPetStateById(petId), getVisitMetaForPet(petId));
        }

        function clearInteractionTimer(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionTimer) {
                clearTimeout(runtime.interactionTimer);
                runtime.interactionTimer = null;
            }
        }

        function closeCollection(options = {}) {
            if (!collectionOpen) {
                return;
            }
            collectionOpen = false;
            if (options.sync !== false) {
                sync('collection');
            }
        }

        function resetHeadpatChain(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            runtime.sessionHeadpatChainCount = 0;
            runtime.lastHeadpatAt = 0;
        }

        function resetSleepWakeChain(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            runtime.sessionSleepWakeCount = 0;
        }

        function resolveDialogSourceForPet(petId, source, summaryOverride, sectionOverride) {
            const dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            const petProfile = getPetProfile(petId);
            const petName = getDisplayPetName(settings, petId);
            const activeSummary = summaryOverride || buildSummaryForPet(petId);
            const activeSection = sectionOverride !== undefined ? sectionOverride : getCurrentSection();

            switch (dialogSource.kind) {
                case 'welcome':
                    return pickWelcomeBubble(getPetStateById(petId), petProfile, petName);
                case 'headpat': {
                    const dialogs = normalizeDialogVariants(petProfile.dialogs.headpat);
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolveIndexedDialogVariants(petProfile, petName, 'headpat', index, `headpat:${petProfile.id}:${index}:${getPetStateById(petId).bondXp}`, {
                        levelXp: getPetStateById(petId).bondXp
                    });
                }
                case 'treat': {
                    const dialogs = normalizeDialogVariants(petProfile.dialogs.treat);
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolveIndexedDialogVariants(petProfile, petName, 'treat', index, `treat:${petProfile.id}:${index}:${getPetStateById(petId).bondXp}`, {
                        levelXp: getPetStateById(petId).bondXp
                    });
                }
                case 'colaTreat': {
                    const dialogs = normalizeDialogVariants(petProfile.dialogs.colaTreat || petProfile.dialogs.treat);
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolveIndexedDialogVariants(petProfile, petName, 'colaTreat', index, `colaTreat:${petProfile.id}:${index}:${getPetStateById(petId).bondXp}`, {
                        levelXp: getPetStateById(petId).bondXp
                    });
                }
                case 'sleepWake': {
                    const dialogs = normalizeDialogVariants(petProfile.dialogs.sleepWake);
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolveIndexedDialogVariants(petProfile, petName, 'sleepWake', index, `sleepWake:${petProfile.id}:${index}:${getPetStateById(petId).bondXp}`, {
                        levelXp: getPetStateById(petId).bondXp
                    });
                }
                case 'fixed':
                    return resolvePetDialog(dialogSource.message, petName);
                case 'default':
                default:
                    return pickDefaultBubble(activeSummary, activeSection, petProfile, petName);
            }
        }

        function getTreatCooldownDialog(petId) {
            return TREAT_COOLDOWN_DIALOGS[petId] || TREAT_COOLDOWN_DIALOGS.shiba;
        }

        function getColaLockedDialog(petId) {
            return COLA_TREAT_LOCKED_DIALOGS[petId] || COLA_TREAT_LOCKED_DIALOGS.shiba;
        }

        function getHeadpatFallbackDialog(petId) {
            return HEADPAT_FALLBACK_DIALOGS[petId] || HEADPAT_FALLBACK_DIALOGS.shiba;
        }

        function getTreatOverfeedDialog(petId, stage) {
            const petDialogs = TREAT_OVERFEED_DIALOGS[petId] || TREAT_OVERFEED_DIALOGS.shiba;
            return petDialogs[stage] || petDialogs.sleep;
        }

        function getColaOverflowDialog(petId) {
            return COLA_OVERFLOW_DIALOGS[petId] || COLA_OVERFLOW_DIALOGS.shiba;
        }

        function setDialogSourceForPet(petId, source, summaryOverride, sectionOverride) {
            const runtime = getPetRuntime(petId);
            runtime.dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summaryOverride, sectionOverride);
            return runtime.currentDialog;
        }

        function clearWelcomeLock(options = {}) {

            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            if (!runtime.welcomeLocked) {
                return false;
            }
            runtime.welcomeLocked = false;
            if (!options.keepCurrentDialog && runtime.interactionMode === 'normal') {
                summary = buildSummaryForPet(petId);
                setDialogSourceForPet(petId, { kind: 'default' }, summary, getCurrentSection());
                bubbleEl.textContent = runtime.currentDialog;
            }
            return true;
        }

        function isTreatCooldownActive(petId = getCurrentPetId()) {
            const lastSleepStartedAt = Number(getPetStateById(petId).lastSleepStartedAt);
            if (!Number.isFinite(lastSleepStartedAt) || lastSleepStartedAt <= 0) {
                return false;
            }
            return Date.now() - lastSleepStartedAt < SLEEP_TREAT_COOLDOWN_MS;
        }

        function showInteractionDialog(message, nextAnim, syncReason) {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            runtime.dialogSource = { kind: 'fixed', message };
            runtime.currentDialog = message;
            bubbleEl.textContent = message;
            if (nextAnim) {
                setAnim(nextAnim, petId);
            }
            sync(syncReason || 'interaction');
        }

        function setInteractionMode(nextMode, durationMs, petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            clearInteractionTimer(petId);
            runtime.interactionMode = nextMode || 'normal';
            runtime.interactionModeUntil = 0;

            if (runtime.interactionMode !== 'sleeping') {
                resetSleepWakeChain(petId);
            }
            if (isNameEditing && petId === getCurrentPetId() && runtime.interactionMode !== 'normal') {
                finishNameEdit(true);
            }

            if (durationMs && durationMs > 0) {
                runtime.interactionModeUntil = Date.now() + durationMs;
                runtime.interactionTimer = window.setTimeout(() => {
                    const currentRuntime = getPetRuntime(petId);
                    currentRuntime.interactionMode = 'normal';
                    currentRuntime.interactionModeUntil = 0;
                    if (getCurrentPetId() === petId) {
                        sync('interaction-timeout');
                    }
                }, durationMs);
            }
        }

        function reconcileInteractionMode(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'normal' || !runtime.interactionModeUntil) {
                return false;
            }

            if (Date.now() < runtime.interactionModeUntil) {
                return false;
            }

            clearInteractionTimer(petId);
            runtime.interactionMode = 'normal';
            runtime.interactionModeUntil = 0;
            return true;
        }

        function getVisualMood(petId, baseMood) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'sleeping') {
                return 'sleep';
            }
            if (runtime.interactionMode === 'dazed') {
                return 'sleepy';
            }
            if (runtime.interactionMode === 'cola') {
                return 'cola';
            }
            if (runtime.interactionMode === 'ballPose') {
                return 'ball';
            }
            if (runtime.interactionMode === 'headpatGentle') {
                return 'blink';
            }
            if (runtime.interactionMode === 'headpatPlayful') {
                return 'cheer';
            }
            if (runtime.interactionMode === 'headpatAnnoyed') {
                return 'idle';
            }
            const petProfile = getPetProfile(petId);
            const petState = getPetStateById(petId);
            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);

            if (petId === 'shiba' && runtime.interactionMode === 'normal') {
                if ((baseMood === 'curious' || baseMood === 'cheer') && levelInfo.level >= 7) {
                    return 'cheer';
                }
            }

            return baseMood;
        }

        function getDisplayedMoodLabel(petId, baseMood) {
            const runtime = getPetRuntime(petId);
            const petProfile = getPetProfile(petId);
            const petState = getPetStateById(petId);
            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            if (runtime.interactionMode === 'sleeping') {
                return getPetMoodLabel(petId, 'sleeping', 'sleep', levelInfo.level);
            }
            if (runtime.interactionMode === 'dazed') {
                return getPetMoodLabel(petId, 'dazed', 'sleep', levelInfo.level);
            }
            if (runtime.interactionMode === 'cola') {
                return getPetMoodLabel(petId, 'cola', 'cola', levelInfo.level);
            }
            if (runtime.interactionMode === 'headpatGentle') {
                return getPetMoodLabel(petId, 'headpatGentle', 'cheer', levelInfo.level);
            }
            if (runtime.interactionMode === 'headpatPlayful') {
                return getPetMoodLabel(petId, 'headpatPlayful', 'cheer', levelInfo.level);
            }
            if (runtime.interactionMode === 'headpatAnnoyed') {
                return getPetMoodLabel(petId, 'headpatAnnoyed', 'idle', levelInfo.level);
            }
            return getPetMoodLabel(petId, baseMood, baseMood, levelInfo.level);
        }

        function maybeTriggerHeadpatEaster(petId, runtime) {
            const now = Date.now();
            if (runtime.headpatEasterCooldownUntil && now < runtime.headpatEasterCooldownUntil) {
                return false;
            }

            if (Math.random() >= HEADPAT_EASTER_TRIGGER_CHANCE) {
                return false;
            }

            const petProfile = getPetProfile(petId);
            const easterPool = Array.isArray(petProfile.dialogs.headpatEaster) ? petProfile.dialogs.headpatEaster : [];
            if (!easterPool.length) {
                return false;
            }

            const picked = easterPool[Math.floor(Math.random() * easterPool.length)];
            if (!picked || !picked.message) {
                return false;
            }

            runtime.headpatEasterCooldownUntil = now + HEADPAT_EASTER_COOLDOWN_MS;
            setDialogSourceForPet(petId, { kind: 'fixed', message: picked.message }, summary, getCurrentSection());
            setInteractionMode(picked.mode || 'normal', HEADPAT_EASTER_STATE_DURATION_MS, petId);
            bubbleEl.textContent = runtime.currentDialog;
            setAnim(picked.anim || 'idle', petId);
            sync('headpat-easter');
            return true;
        }

        function maybeTriggerBallPose(petId, runtime, baseMood) {
            if (petId !== 'shiba' || runtime.interactionMode !== 'normal' || baseMood !== 'idle') {
                return false;
            }

            const now = Date.now();
            if (runtime.ballPoseCooldownUntil && now < runtime.ballPoseCooldownUntil) {
                return false;
            }
            if (runtime.lastBallPoseCheckAt && (now - runtime.lastBallPoseCheckAt) < BALL_POSE_CHECK_INTERVAL_MS) {
                return false;
            }

            runtime.lastBallPoseCheckAt = now;
            if (Math.random() >= BALL_POSE_TRIGGER_CHANCE) {
                return false;
            }

            runtime.ballPoseCooldownUntil = now + BALL_POSE_COOLDOWN_MS;
            setInteractionMode('ballPose', BALL_POSE_DURATION_MS, petId);
            setAnim('ball', petId);
            return true;
        }

        function handleDazedInteraction(event) {
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            clearWelcomeLock({ keepCurrentDialog: true });
            showInteractionDialog('吧唧吧唧', 'sleepy', 'dazed-interaction');
            return true;
        }

        function handleSleepingInteraction(event) {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }

            clearWelcomeLock({ keepCurrentDialog: true });
            runtime.sessionSleepWakeCount += 1;
            if (runtime.sessionSleepWakeCount >= 3) {
                resetSleepWakeChain(petId);
                runtime.sessionHeadpatChainCount = 1;
                runtime.lastHeadpatAt = Date.now();
                runtime.dialogSource = { kind: 'fixed', message: '吧唧吧唧' };
                runtime.currentDialog = '吧唧吧唧';
                setInteractionMode('dazed', DAZED_DURATION_MS, petId);
                bubbleEl.textContent = runtime.currentDialog;
                setAnim('sleepy', petId);
                sync('sleeping-wake');
                return true;
            }

            setDialogSourceForPet(petId, { kind: 'sleepWake', index: runtime.sessionSleepWakeCount - 1 });
            bubbleEl.textContent = runtime.currentDialog;
            setAnim('sleep', petId);
            sync('sleeping-interaction');
            return true;
        }

        function setAnim(nextAnim, petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            const petProfile = getPetProfile(petId);
            runtime.animState = nextAnim;

            if (getCurrentPetId() === petId) {
                root.dataset.anim = nextAnim;
                spriteEl.innerHTML = petProfile.pixelFrames[nextAnim] || petProfile.pixelFrames.cheer || petProfile.pixelFrames.idle;
            }

            if (motionTimer) {
                clearTimeout(motionTimer);
                motionTimer = null;
            }

            if (nextAnim === 'hop' || nextAnim === 'cheer' || nextAnim === 'cola') {
                const duration = nextAnim === 'hop' ? 620 : (nextAnim === 'cola' ? 940 : 820);
                const targetPetId = petId;
                motionTimer = setTimeout(() => {
                    const targetSummary = buildSummaryForPet(targetPetId);
                    const fallbackAnim = getVisualMood(targetPetId, targetSummary.mood);
                    const targetRuntime = getPetRuntime(targetPetId);
                    targetRuntime.animState = fallbackAnim;
                    if (getCurrentPetId() === targetPetId) {
                        const targetProfile = getPetProfile(targetPetId);
                        root.dataset.anim = fallbackAnim;
                        spriteEl.innerHTML = targetProfile.pixelFrames[fallbackAnim] || targetProfile.pixelFrames.cheer || targetProfile.pixelFrames.idle;
                    }
                    motionTimer = null;
                }, duration);
            }
        }

        function persistSettings() {
            savePetSettings(settings);
        }

        function awardInteractionXp(petId = getCurrentPetId()) {
            const petState = getPetStateById(petId);
            const today = getTodayKey();
            if (petState.lastInteractionDate === today) {
                return;
            }
            petState.lastInteractionDate = today;
            awardBondXp(petId, 1);
            savePetState(state);
        }

        function applyAnchorPosition() {
            const petSettings = getCurrentPetSettings();
            let nextPosition = getDefaultAnchorPosition(root, config);

            if (petSettings.anchorX !== null && petSettings.anchorY !== null) {
                const rect = root.getBoundingClientRect();
                const width = Math.round(rect.width) || 280;
                const height = Math.round(rect.height) || 86;
                const availableX = Math.max(1, window.innerWidth - width);
                const availableY = Math.max(1, window.innerHeight - height);

                nextPosition = getClampedAnchor(
                    root,
                    petSettings.anchorX * availableX,
                    petSettings.anchorY * availableY
                );
            }

            root.style.left = `${Math.round(nextPosition.left)}px`;
            root.style.top = `${Math.round(nextPosition.top)}px`;
        }

        function startNameEdit() {
            if (isNameEditing) {
                return;
            }

            collectionOpen = false;
            if (collectionPanelEl) {
                collectionPanelEl.hidden = true;
            }
            const petProfile = getCurrentPetProfile();
            isNameEditing = true;
            root.dataset.nameEditing = 'true';
            nameButtonEl.hidden = true;
            nameEditorEl.hidden = false;
            nameInputEl.value = getCurrentPetName();
            nameInputEl.setAttribute('aria-label', `输入${petProfile.label}名字`);
            requestAnimationFrame(() => {
                nameInputEl.focus();
                nameInputEl.select();
            });
        }

        function finishNameEdit(saveValue) {
            if (!isNameEditing) {
                return;
            }

            if (saveValue) {
                const petId = getCurrentPetId();
                const petSettings = getCurrentPetSettings();
                const nextName = sanitizePetName(nameInputEl.value, petId);
                petSettings.customName = nextName === getPetDefaultName(petId) ? '' : nextName;
                persistSettings();
            }

            isNameEditing = false;
            root.dataset.nameEditing = 'false';
            nameEditorEl.hidden = true;
            nameButtonEl.hidden = false;
            sync('name');
        }

        function sync(reason) {
            const petId = getCurrentPetId();
            const petState = getCurrentPetState();
            const petSettings = getCurrentPetSettings();
            const runtime = getCurrentPetRuntime();
            const petProfile = getCurrentPetProfile();
            const petName = getCurrentPetName();
            const currentSection = getCurrentSection();
            const didExpireInteraction = reconcileInteractionMode(petId);
            if (petState.lastOpenedSection !== currentSection) {
                petState.lastOpenedSection = currentSection;
                savePetState(state);
            }

            visitMeta = getVisitMetaSnapshot(petId);
            summary = buildLearningSummary(config, petState, visitMeta);

            if (reason === 'boot' && runtime.welcomePending) {
                setDialogSourceForPet(petId, { kind: 'welcome' }, summary, currentSection);
                petState.lastWelcomedAt = Date.now();
                runtime.welcomePending = false;
                runtime.welcomeLocked = true;
                savePetState(state);
            } else if ((reason === 'interaction-timeout' || didExpireInteraction) && !runtime.welcomeLocked) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else if (
                (reason === 'boot'
                    || reason === 'section-change'
                    || reason === 'toggle'
                    || reason === 'modal'
                    || reason === 'resize'
                    || reason === 'pet-switch'
                    || reason === 'collection'
                    || reason === 'welcome-cleared')
                && !runtime.welcomeLocked
                && runtime.interactionMode === 'normal'
            ) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else if (reason === 'name' || reason === 'interaction' || reason === 'treat' || reason === 'headpat' || reason === 'sleeping-interaction' || reason === 'sleeping-wake' || reason === 'dazed-interaction' || reason === 'treat-cooldown') {
                runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);
            } else if (!runtime.currentDialog) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else {
                runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);
            }

            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            if (levelInfo.isMax) {
                unlockPetMaxRewardCard(petId);
            }
            const isExpanded = !petSettings.collapsed && !modalOpen;
            if (!isExpanded && collectionOpen) {
                collectionOpen = false;
            }
            maybeTriggerBallPose(petId, runtime, summary.mood);
            const visualMood = getVisualMood(petId, summary.mood);
            nameEl.textContent = petName;
            if (!isNameEditing) {
                nameInputEl.value = petName;
            }
            nameButtonEl.setAttribute('aria-label', `修改${petProfile.label}名字`);
            nameInputEl.setAttribute('aria-label', `输入${petProfile.label}名字`);
            speciesLabelEl.textContent = petProfile.label;
            collectionTriggerEl.setAttribute('aria-label', `打开${petProfile.label}图鉴`);
            collectionTriggerEl.setAttribute('aria-expanded', String(collectionOpen));
            collectionTriggerEl.classList.toggle('is-open', collectionOpen);
            collectionPanelEl.hidden = !collectionOpen;
            renderCollectionCards();
            moodEl.textContent = getDisplayedMoodLabel(petId, summary.mood);
            colaBtn.hidden = !['shiba', 'cat'].includes(petId);
            renderActivities(activitiesEl, summary.recentActivities, summary.recommendedNext);
            root.dataset.expanded = String(isExpanded);
            root.dataset.modalOpen = String(modalOpen);
            root.dataset.collectionOpen = String(collectionOpen);
            root.dataset.mood = visualMood;
            root.dataset.draggable = String(petSettings.collapsed && !modalOpen);
            root.dataset.species = petProfile.species;
            toggleEl.setAttribute('aria-expanded', String(isExpanded));
            toggleEl.setAttribute('aria-label', `${isExpanded ? '收起' : '打开'}${petProfile.label}陪学面板`);
            bubbleEl.textContent = runtime.currentDialog || resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);

            if (runtime.animState !== 'hop' && runtime.animState !== 'cheer' && runtime.animState !== 'cola') {
                setAnim(visualMood, petId);
            } else {
                root.dataset.anim = runtime.animState;
                spriteEl.innerHTML = petProfile.pixelFrames[runtime.animState] || petProfile.pixelFrames.cheer || petProfile.pixelFrames.idle;
            }

            applyAnchorPosition();
        }

        function setModalState(isOpen) {
            modalOpen = Boolean(isOpen);
            if (modalOpen) {
                collectionOpen = false;
            }
            sync('modal');
        }

        function recordStudyLaunch(payload) {
            const nextHref = normalizeHref(payload && payload.href);
            if (!nextHref) {
                return;
            }

            const petState = getCurrentPetState();
            const petId = getCurrentPetId();
            const today = getTodayKey();
            clearWelcomeLock();
            petState.lastClickedHref = nextHref;
            petState.lastClickedLabel = String(payload && payload.label ? payload.label : '').trim();
            petState.lastStudyDate = today;
            petState.totalStudyLaunches = Number(petState.totalStudyLaunches || 0) + 1;
            if (payload && payload.sectionKey) {
                petState.lastOpenedSection = payload.sectionKey;
            }

            maybeClaimStudyMilestones(petId);
            if (petState.lastStudyXpDate !== today) {
                petState.lastStudyXpDate = today;
                awardBondXp(petId, 1);
            }
            savePetState(state);
        }

        function handleDragStart(event) {
            const petSettings = getCurrentPetSettings();
            if (!petSettings.collapsed || modalOpen || event.button > 0) {
                return;
            }

            dragState = {
                pointerId: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                originLeft: Number.parseFloat(root.style.left) || 0,
                originTop: Number.parseFloat(root.style.top) || 0,
                dragging: false
            };

            if (typeof toggleEl.setPointerCapture === 'function') {
                toggleEl.setPointerCapture(event.pointerId);
            }
        }

        function handleDragMove(event) {
            if (!dragState || dragState.pointerId !== event.pointerId) {
                return;
            }

            const deltaX = event.clientX - dragState.startX;
            const deltaY = event.clientY - dragState.startY;

            if (!dragState.dragging) {
                if (Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) {
                    return;
                }
                dragState.dragging = true;
                root.dataset.dragging = 'true';
            }

            event.preventDefault();
            const nextPosition = getClampedAnchor(
                root,
                dragState.originLeft + deltaX,
                dragState.originTop + deltaY
            );

            root.style.left = `${Math.round(nextPosition.left)}px`;
            root.style.top = `${Math.round(nextPosition.top)}px`;
        }

        function clearDragState(pointerId) {
            if (!dragState) {
                return;
            }

            if (typeof toggleEl.releasePointerCapture === 'function' && pointerId !== undefined) {
                try {
                    toggleEl.releasePointerCapture(pointerId);
                } catch (error) {
                    // Ignore release errors when capture was already lost.
                }
            }

            if (dragState.dragging) {
                justDragged = true;
                persistAnchor(
                    root,
                    getCurrentPetSettings(),
                    Number.parseFloat(root.style.left) || 0,
                    Number.parseFloat(root.style.top) || 0
                );
                persistSettings();
                window.setTimeout(() => {
                    justDragged = false;
                }, 280);
            }

            dragState = null;
            root.dataset.dragging = 'false';
        }

        toggleEl.addEventListener('pointerdown', handleDragStart);
        toggleEl.addEventListener('pointermove', handleDragMove);
        toggleEl.addEventListener('pointerup', (event) => clearDragState(event.pointerId));
        toggleEl.addEventListener('pointercancel', (event) => clearDragState(event.pointerId));

        root.addEventListener('click', (event) => {
            if (justDragged) {
                return;
            }

            const clickedInsidePet = event.target.closest('.home-pet');
            if (!clickedInsidePet) {
                return;
            }

            const passiveControl = event.target.closest('[data-pet-collection-trigger], [data-pet-collection], [data-pet-name-button], [data-pet-name-editor]');
            if (passiveControl) {
                return;
            }

            if (getCurrentPetRuntime().interactionMode === 'dazed') {
                awardInteractionXp();
                handleDazedInteraction(event);
                return;
            }

            if (getCurrentPetRuntime().interactionMode === 'sleeping') {
                awardInteractionXp();
                handleSleepingInteraction(event);
            }
        }, true);

        toggleEl.addEventListener('click', (event) => {
            if (justDragged) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }

            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            const petSettings = getCurrentPetSettings();
            const runtime = getCurrentPetRuntime();
            petSettings.collapsed = !petSettings.collapsed;
            persistSettings();
            if (runtime.interactionMode === 'normal') {
                setDialogSourceForPet(getCurrentPetId(), { kind: 'default' }, summary, getCurrentSection());
            }
            sync('toggle');
        });

        nameButtonEl.addEventListener('click', () => {
            awardInteractionXp();
            clearWelcomeLock();
            collectionOpen = false;
            sync('welcome-cleared');
            startNameEdit();
        });

        nameInputEl.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                finishNameEdit(true);
            } else if (event.key === 'Escape') {
                event.preventDefault();
                finishNameEdit(false);
            }
        });

        nameInputEl.addEventListener('blur', () => {
            finishNameEdit(true);
        });

        headpatBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            const now = Date.now();

            if (!runtime.lastHeadpatAt || (now - runtime.lastHeadpatAt) > INTERACTION_CHAIN_MS) {
                runtime.sessionHeadpatChainCount = 1;
            } else {
                runtime.sessionHeadpatChainCount += 1;
            }
            runtime.lastHeadpatAt = now;

            if (runtime.sessionHeadpatChainCount <= 3) {
                setDialogSourceForPet(petId, { kind: 'headpat', index: runtime.sessionHeadpatChainCount - 1 }, summary, getCurrentSection());
            } else {
                const didTriggerEaster = maybeTriggerHeadpatEaster(petId, runtime);
                if (!didTriggerEaster) {
                    if (['headpatGentle', 'headpatPlayful', 'headpatAnnoyed'].includes(runtime.interactionMode)) {
                        setInteractionMode('normal', 0, petId);
                    }
                    setDialogSourceForPet(petId, { kind: 'fixed', message: getHeadpatFallbackDialog(petId) }, summary, getCurrentSection());
                }
            }

            bubbleEl.textContent = runtime.currentDialog;
            if (!['headpatGentle', 'headpatPlayful', 'headpatAnnoyed'].includes(runtime.interactionMode)) {
                setAnim(runtime.sessionHeadpatChainCount >= 4 ? 'hop' : 'cheer', petId);
            }
        });

        treatBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            const petState = getCurrentPetState();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            resetHeadpatChain(petId);

            if (isTreatCooldownActive(petId)) {
                showInteractionDialog(getTreatCooldownDialog(petId), 'idle', 'treat-cooldown');
                return;
            }

            runtime.sessionTreatCount += 1;

            if (runtime.sessionTreatCount === 1) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 0 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 2) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 1 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 3) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 2 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 4) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 4) }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('idle', petId);
            } else if (runtime.sessionTreatCount === 5) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 5) }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('idle', petId);
            } else {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 'sleep') }, summary, getCurrentSection());
                petState.lastSleepStartedAt = Date.now();
                savePetState(state);
                setInteractionMode('sleeping', 0, petId);
                setAnim('sleep', petId);
            }

            bubbleEl.textContent = runtime.currentDialog;
            sync('treat');
        });

        collectionTriggerEl.addEventListener('click', (event) => {
            event.stopPropagation();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            if (isNameEditing) {
                finishNameEdit(true);
            }
            collectionOpen = !collectionOpen;
            sync('collection');
        });

        collectionCloseEl.addEventListener('click', () => {
            closeCollection();
        });

        collectionPanelEl.addEventListener('click', (event) => {
            if (event.target === collectionPanelEl) {
                closeCollection();
            }
        });

        collectionGridEl.addEventListener('click', (event) => {
            const optionButton = event.target.closest('[data-pet-collection-option]');
            if (!optionButton) {
                return;
            }

            const nextPetId = optionButton.getAttribute('data-pet-collection-option');
            const collection = getPetCollection();
            if (!PET_PROFILES[nextPetId] || !collection.unlockedPetIds.includes(nextPetId) || nextPetId === getCurrentPetId()) {
                return;
            }

            const wasExpanded = !getCurrentPetSettings().collapsed;
            awardInteractionXp();
            clearWelcomeLock();
            if (isNameEditing) {
                finishNameEdit(true);
            }
            if (motionTimer) {
                clearTimeout(motionTimer);
                motionTimer = null;
            }

            collectionOpen = false;
            settings.activePetId = nextPetId;
            if (wasExpanded) {
                getCurrentPetSettings().collapsed = false;
            }
            persistSettings();
            visitMeta = registerVisit(getCurrentPetState());
            if (visitMeta.isFirstVisitToday) {
                awardVisitXp(nextPetId);
            } else {
                savePetState(state);
            }
            sync('pet-switch');
        });

        colaBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            if (!['shiba', 'cat'].includes(petId)) {
                return;
            }

            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            resetHeadpatChain(petId);

            if (!isInteractionUnlocked(state, COLA_TREAT_UNLOCK_ID)) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getColaLockedDialog(petId) }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                bubbleEl.textContent = runtime.currentDialog;
                setAnim('idle', petId);
                sync('cola-locked');
                return;
            }

            runtime.sessionColaCount += 1;

            if (runtime.sessionColaCount <= 3) {
                setDialogSourceForPet(petId, { kind: 'colaTreat', index: runtime.sessionColaCount - 1 }, summary, getCurrentSection());
            } else {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getColaOverflowDialog(petId) }, summary, getCurrentSection());
            }

            setInteractionMode('cola', INTERACTION_CHAIN_MS, petId);
            bubbleEl.textContent = runtime.currentDialog;
            setAnim(petId === 'shiba' ? 'cola' : 'hop', petId);
            sync('cola');
        });

        activitiesEl.addEventListener('click', (event) => {
            const activityLink = event.target.closest('[data-pet-activity-link]');
            if (!activityLink) {
                return;
            }

            clearWelcomeLock();
            collectionOpen = false;
            const titleNode = activityLink.querySelector('.home-pet-activity-title');
            recordStudyLaunch({
                href: activityLink.getAttribute('href'),
                label: titleNode ? titleNode.textContent.trim() : summary.recommendedNext.label,
                sectionKey: activityLink.getAttribute('data-section-key') || DEFAULT_SECTION
            });
        });

        const handlePageInteraction = (event) => {
            const sectionSwitch = event.target.closest('.main-chip[data-section]');
            if (sectionSwitch) {
                clearWelcomeLock({ keepCurrentDialog: true });
            }
            if (collectionOpen && !event.target.closest('.home-pet') && !event.target.closest('[data-pet-collection]')) {
                closeCollection();
            }
        };
        document.addEventListener('click', handlePageInteraction, true);

        const resizeHandler = () => {
            sync('resize');
        };
        window.addEventListener('resize', resizeHandler);

        visitMeta = registerVisit(getCurrentPetState());
        if (visitMeta.isFirstVisitToday) {
            awardVisitXp(getCurrentPetId());
        } else {
            savePetState(state);
        }
        savePetSettings(settings);
        sync('boot');

        return {
            sync,
            setModalState,
            recordStudyLaunch,
            destroy() {
                window.removeEventListener('resize', resizeHandler);
                document.removeEventListener('click', handlePageInteraction, true);
                if (motionTimer) {
                    clearTimeout(motionTimer);
                }
                getPetIds().forEach((petId) => {
                    clearInteractionTimer(petId);
                    clearLevelToastTimer(petId);
                });
            }
        };
    }

    window.HomePetSystem = {
        init(config) {
            const mount = document.querySelector(config && config.mountSelector ? config.mountSelector : '#home-pet-root');
            if (!mount) {
                return null;
            }
            return createController(mount, config || {});
        }
    };
})();
