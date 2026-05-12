(function() {
    const PET_STATE_KEY = 'kiki_pet_state_v1';
    const PET_SETTINGS_KEY = 'kiki_pet_settings_v1';
    const DEFAULT_SECTION = 'daily';
    const DEFAULT_PET_ID = 'shiba';
    const DEFAULT_UNLOCKED_PET_IDS = ['shiba', 'cat'];
    const HIDDEN_PET_IDS = [];
    const DEFAULT_UNLOCKED_INTERACTION_IDS = [];
    const DEFAULT_FOLLOW_OUTSIDE_HOME = false;
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
        ],
        ballPose: [
            { minLevel: 1, label: '追球中' },
            { minLevel: 8, label: '追球热身' }
        ]
    };
    const CAT_MOOD_LABELS = {
        idle: '踩点守着',
        curious: '竖耳观察',
        cheer: '心情不错',
        cola: '薄荷上头',
        sleep: '蜷尾补眠',
        sleeping: '蜷尾补眠',
        dazed: '眼神发飘',
        headpatGentle: '假装淡定',
        headpatPlayful: '灵巧闪避',
        headpatAnnoyed: '炸毛边缘',
        ballPose: '扑线团'
    };
    const CAT_MOOD_LABEL_VARIANTS = {
        idle: [
            { minLevel: 1, label: '踩点守着' },
            { minLevel: 4, label: '窝在身边' },
            { minLevel: 8, label: '安静陪读' }
        ],
        curious: [
            { minLevel: 1, label: '竖耳观察' },
            { minLevel: 5, label: '眯眼侦查' },
            { minLevel: 9, label: '悄悄盯梢' }
        ],
        cheer: [
            { minLevel: 1, label: '心情不错' },
            { minLevel: 6, label: '呼噜加倍' },
            { minLevel: 10, label: '陪你收尾' }
        ],
        cola: [
            { minLevel: 1, label: '薄荷上头' },
            { minLevel: 9, label: '满地打滚' }
        ],
        sleep: [
            { minLevel: 1, label: '蜷尾补眠' },
            { minLevel: 8, label: '梦里巡窗' }
        ],
        sleeping: [
            { minLevel: 1, label: '蜷尾补眠' },
            { minLevel: 8, label: '梦里巡窗' }
        ],
        dazed: [
            { minLevel: 1, label: '眼神发飘' },
            { minLevel: 7, label: '晕乎打圈' }
        ],
        ballPose: [
            { minLevel: 1, label: '扑线团' },
            { minLevel: 8, label: '追线上头' }
        ]
    };
    const TREAT_COOLDOWN_DIALOGS = {
        shiba: '打咩！肚子已经圆滚滚了，再吃要变成猪犬了🐷',
        cat: '拿走拿走，本喵现在看什么都像猫条，连看你都觉得反胃。'};
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
        cat: '喵？说好的猫薄荷呢？你想拿空气糊弄本喵吗！'};
    const HEADPAT_FALLBACK_DIALOGS = {
        shiba: '略略略~ 你摸不到！快去把专注力放在书本上！',
        cat: '喵呜，扑空了吧？把这股劲头拿去翻书更划算。'};
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
        }};
    const COLA_OVERFLOW_DIALOGS = {
        shiba: '今天的快乐额度快被你灌满啦。',
        cat: '不行了……再吸脑子都要变成毛线球了……喵呜……'};
    const TEXTBOOK_LAST_LABEL_KEY = 'textbook_n2_last_label';
    const TEXTBOOK_LAST_ROUTE_KEY = 'textbook_n2_last_route';
    const TEXTBOOK_MISTAKES_KEY = 'n2_mistakes';
    const PRACTICE_FEEDBACK_COOLDOWN_MS = 1500;
    const PRACTICE_FEEDBACK_DURATION_MS = 1700;
    const PRACTICE_MAJOR_DURATION_MS = 2400;
    const HOMEPAGE_IDLE_ROTATION_MS = 10000;
    const HOMEPAGE_IDLE_PRIMARY_CHANCE = 60;
    const HOMEPAGE_LEARNING_REMINDER_CHANCE = 25;
    const GRAMMAR_REMINDER_LESSON_WEIGHT = 50;
    const GRAMMAR_REMINDER_LEVEL_WEIGHT = 30;
    const GRAMMAR_REMINDER_GLOBAL_WEIGHT = 20;
    const HOMEPAGE_GRAMMAR_REMINDER_CHANCE = 15;
    const FOLLOW_OUTSIDE_HOME_DIALOGS = {
        shiba: '要出去玩啦！{name}已经把牵绳叼好了，我们边逛边学！',
        cat: '要出去玩啦？……那就把{name}也带上吧，别走丢了。'};
    const SECTION_ENTRY_DIALOGS = {
        shiba: {
            daily: [
                '今天先轻轻开始也算赢，{name}已经蹲好陪你啦。',
                '回到日常学习啦，{name}陪你先热热身就好。'
            ],
            examRecent: [
                '上次我们停在【{label}】啦，要不要从这里接着冲？',
                '【{label}】还热乎着呢，{name}建议就从这里续上。'
            ],
            examFallback: [
                '备考模式启动！先把前回停下来的那口气接起来。',
                '来吧，我们先把上次没收住的那段进度接回去。'
            ],
            favorites: [
                '慢慢挑，挑到顺眼的那一个我们就开跑。',
                '收藏页也行，先选一个你想碰的入口。'
            ]
        },
        cat: {
            daily: [
                '既然回到日常学习了，就别磨蹭，随便挑一个开始。',
                '今天先从轻一点的东西下手吧，别一上来就吓自己。'
            ],
            examRecent: [
                '上回做到【{label}】了，还记得吧？别装失忆，接着来。',
                '【{label}】还挂在那儿呢，继续往下，别让我提醒第二次。'
            ],
            examFallback: [
                '备考区可不是发呆的地方，先把前回卡住的位置找回来。',
                '既然都切到备考了，就把上次那点进度接着啃完。'
            ],
            favorites: [
                '收藏页就收藏页，快点挑，别拿犹豫当复习。',
                '你喜欢的入口都在这儿了，挑一个继续就好。'
            ]
        }};
    const LIGHT_STUDY_REMINDER_DIALOGS = {
        shiba: [
            '随便挑一小口开始也好，{name}会陪你慢慢嚼完。',
            '先把今天的第一步踩下去，后面就顺了。',
            '哪怕只看一页，{name}也算你今天认真开机啦。'
        ],
        cat: [
            '别想着一步到位，先做一点也算开始。',
            '随便挑个小任务，别让今天空着过去。',
            '你先动起来，本喵再考虑要不要夸你。'
        ]};
    const LOTTERY_RESULT_DIALOGS = {
        shiba: {
            unlock: [
                '哇！这次还顺手叼回奖励啦，{name}已经开始替你开心了！',
                '这张抽得漂亮，连彩蛋都被你带回家了！'
            ],
            rare: [
                '这手气好香！{name}闻到好运在你身边打转啦！',
                '厉害哦，这次抽出来的感觉明显不一般！'
            ],
            new: [
                '新卡到手！{name}的小图鉴边边又亮了一格。',
                '欸嘿，是没见过的新东西，今天运气不错！'
            ],
            duplicate: [
                '重复也没关系，说明它跟你有缘分呀。',
                '这张老朋友又回来了，当成今天的小回访也不错。'
            ],
            ordinary: [
                '今天这签算稳稳落地，我们接着往前走吧。',
                '平稳的一签也挺好，至少手气没有掉线。'
            ]
        },
        cat: {
            unlock: [
                '哦？还真把奖励抽出来了。看来你今天还算争气。',
                '连额外奖励都带回来了……哼，运气不错嘛。'
            ],
            rare: [
                '这结果一看就不普通。啧，今天倒是有点本事。',
                '运气突然这么好？本喵勉强承认你今天状态不错。'
            ],
            new: [
                '新卡。行吧，图鉴又能多看一眼了。',
                '这张我没见过，收好，别回头又弄丢了。'
            ],
            duplicate: [
                '又见面了？重复也不算坏，至少没空手。',
                '老熟人一张，别失望，抽签又不是次次都要惊天动地。'
            ],
            ordinary: [
                '结果还行，平平稳稳的也没什么不好。',
                '普通一点的结果最耐看，别挑三拣四。'
            ]
        }};
    const HOMEPAGE_GRAMMAR_TEMPLATES = {
        shiba: [
            ({ label }) => [
                { type: 'text', text: '这个「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」好香呀，是什么味道呢？' }
            ],
            ({ label }) => [
                { type: 'text', text: '闻到「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」的味道啦，要不要顺手复习一下？' }
            ],
            ({ label }) => [
                { type: 'text', text: '汪，我总觉得「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」今天会派上用场。' }
            ]
        ],
        cat: [
            ({ label }) => [
                { type: 'text', text: '喵，这个「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」你最好别装作没看见。' }
            ],
            ({ label }) => [
                { type: 'text', text: '这个「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」有点眼熟吧？顺手复习一下。' }
            ],
            ({ label }) => [
                { type: 'text', text: '别只盯着我看，把「' },
                { type: 'grammar-token', grammarId: label.id, label: label.title },
                { type: 'text', text: '」也一起看懂。' }
            ]
        ]};
    const GRAMMAR_PEEK_HINTS = {
        shiba: '汪，先闻闻这条语法的味道，再慢慢看懂它。',
        cat: '喵，先看清楚再下判断，别囫囵吞过去。'};

    function frameBlock(strings, ...values) {
        const raw = String.raw({ raw: strings }, ...values).trim();
        return raw ? raw.split('\n').map((row) => row.trim()) : [];
    }

    function withFrameRows(baseRows, overrides = {}) {
        const nextRows = Array.isArray(baseRows) ? baseRows.slice() : [];
        Object.keys(overrides).forEach((key) => {
            const index = Number(key);
            if (!Number.isInteger(index) || index < 0) {
                return;
            }
            nextRows[index] = String(overrides[key] || '');
        });
        return nextRows;
    }

    function pixelSequence(frames, interval = 140, loop = true) {
        return {
            frames: Array.isArray(frames) ? frames.slice() : [],
            interval,
            loop
        };
    }

    const HOME_PET_SCRIPT_URL = (() => {
        const currentScript = document.currentScript;
        return currentScript && currentScript.src ? currentScript.src : '';
    })();
    const DEFAULT_HOME_PET_ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/Loepickst/n2@main/shared/';

    function escapeHtmlAttribute(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function resolveHomePetAssetUrl(relativePath, assetBaseUrl) {
        const assetPath = String(relativePath || '').replace(/^\/+/, '');
        const preferredBaseUrl = assetBaseUrl === undefined || assetBaseUrl === null ? '' : String(assetBaseUrl).trim();
        if (preferredBaseUrl) {
            try {
                const normalizedBase = preferredBaseUrl.endsWith('/') ? preferredBaseUrl : `${preferredBaseUrl}/`;
                const baseHref = HOME_PET_SCRIPT_URL || (window.location && window.location.href) || '';
                const resolvedBase = baseHref ? new URL(normalizedBase, baseHref).href : normalizedBase;
                return new URL(assetPath, resolvedBase).href;
            } catch (error) {
                return assetPath;
            }
        }
        if (!HOME_PET_SCRIPT_URL) {
            return assetPath;
        }
        try {
            return new URL(assetPath, HOME_PET_SCRIPT_URL).href;
        } catch (error) {
            return assetPath;
        }
    }

    function imageSequence(frames, interval = 140, loop = true) {
        return {
            type: 'image',
            frames: Array.isArray(frames) ? frames.slice() : [],
            interval,
            loop
        };
    }

    function mianmianFrames(action, count) {
        return Array.from({ length: count }, (_, index) => (
            `assets/pets-optimized/mianmian/frames/${action}/frame-${String(index + 1).padStart(2, '0')}.webp`
        ));
    }

    function mumuShibaFrames(action, count) {
        return Array.from({ length: count }, (_, index) => (
            `assets/pets-optimized/mumu-shiba/frames/${action}/frame-${String(index + 1).padStart(2, '0')}.webp`
        ));
    }


    function normalizePixelRows(frameRows) {
        if (!Array.isArray(frameRows) || !frameRows.length) {
            return [['.']];
        }
        const rows = frameRows.map((row) => {
            if (Array.isArray(row)) {
                return row.map((token) => String(token || '.'));
            }
            return [...String(row || '')];
        });
        const width = Math.max(1, ...rows.map((row) => row.length));
        return rows.map((row) => row.concat(Array.from({ length: Math.max(0, width - row.length) }, () => '.')));
    }

    function remapFrameRows(frameRows, tokenMap) {
        if (!tokenMap) {
            return frameRows.slice();
        }

        return frameRows.map((row) => {
            const tokens = Array.isArray(row) ? row : [...String(row || '')];
            const mapped = tokens.map((token) => tokenMap[token] || '.');
            return Array.isArray(row) ? mapped : mapped.join('');
        });
    }

    function trimTransparentFrame(frameRows, padding = 0) {
        if (!Array.isArray(frameRows) || !frameRows.length) {
            return frameRows;
        }

        const normalizedRows = normalizePixelRows(frameRows);
        const width = Math.max(0, ...normalizedRows.map((row) => row.length));
        let minX = width;
        let minY = normalizedRows.length;
        let maxX = -1;
        let maxY = -1;

        normalizedRows.forEach((row, y) => {
            row.forEach((token, x) => {
                if (token === '.' || token === 'H2' || !PIXEL_PALETTE[token]) {
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
        H: '#F6C37B',
        I: '#E95C63',
        J: '#C94550',
        K: '#9ED7FF',
        L: '#5CA6E6',
        A1: '#FFF0C4',
        A7: '#F58F32',
        A10: '#F4A24A',
        A11: '#FFD17F',
        A21: '#F0D37A',
        F10: '#7F3F20',
        F18: '#D97836',
        G1: '#FFF3D7',
        G4: '#D4A46F',
        G5: '#E5964C',
        G6: '#D8873E',
        G8: '#7F3D2F',
        G9: '#F2B577',
        G10: '#BD8A45',
        G12: '#E8C980',
        G15: '#D9D4AD',
        G19: '#C6833D',
        G20: '#9F562E',
        H2: null,
        H5: '#3F4348',
        H6: '#211F22',
        H7: '#050505',
        H20: '#9AA4A6',
        H22: '#CFD2CF',
        M3: '#657B7C',
        M9: '#A08B69',
        M15: '#6E7470',
        R3: '#E57E39',
        A14: '#E55C58',
        F8: '#B74442'
    };

    function createSpecFrame(width, height, fillToken, cells) {
        const rows = Array.from({ length: height }, () => Array.from({ length: width }, () => fillToken));
        cells.forEach(([x, y, token]) => {
            const col = Number(x) - 1;
            const row = Number(y) - 1;
            if (row < 0 || row >= height || col < 0 || col >= width) {
                return;
            }
            rows[row][col] = token;
        });
        return rows;
    }

    const SHIBA_FRAME_OPTIONS = {
        trim: false
    };
    const SHIBA_IDLE_BASE_FRAME = frameBlock`
        ................
        ....AA....AA....
        ...AHH....HHA...
        ..AHHHABBAHHHA..
        ..AHHHHHHHHHHA..
        ..AHCCHHHHCCHA..
        ..AHEHDDDDHEHA..
        ..AHCCDEEDCCHA..
        ...ACCCDDCCCA...
        ...AJIIIIIIJA...
        ..AHHJIJJIJHHA..
        ..AHHHHHHHHHHAA.
        ..AHHHCCFFCHHHAA
        ...AHCF..FCHHBA.
        ...AFA....AFABH.
        ...........AHHA.
    `;
    const SHIBA_IDLE_FRAME_2 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        10: '..AHHJIJJIJHHA..',
        11: '..AHHHHHHHHHBAA.',
        12: '..AHHHCCFFCHHBAA',
        13: '...AHCF..FCHHAA.',
        14: '...AFA....AFAHH.',
        15: '............AHHA'
    });
    const SHIBA_IDLE_FRAME_3 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        11: '...AHHHHHHHHHAA.',
        12: '..AHHHCCFFCHHHBA',
        13: '...AHCF..FCHHGAA',
        15: '...........AHAA.'
    });
    const SHIBA_BLINK_CLOSED_FRAME = withFrameRows(SHIBA_IDLE_FRAME_2, {
        6: '..AHEAAAAAAEHA..'
    });
    const SHIBA_CHEER_FRAME_1 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        7: '..AHCCDEEECCHA..',
        8: '...ACCCEDCCCA...',
        11: '...AHHHHHHHHAA..',
        13: '....AHCF..FCHBA.',
        14: '....FA....AFABH.',
        15: '...........AHHA.'
    });
    const SHIBA_CHEER_FRAME_2 = withFrameRows(SHIBA_IDLE_FRAME_2, {
        7: '..AHCCDEEEDCHA..',
        8: '...ACCCEECCCA...',
        13: '....AHCF..FCHHA.',
        14: '....FA....AFAHH.',
        15: '............AHHA'
    });
    const SHIBA_CHEER_FRAME_3 = withFrameRows(SHIBA_IDLE_FRAME_3, {
        6: '..AHEAAAAAAEHA..',
        7: '..AHCCDEEECCHA..',
        8: '...ACCCEECCCA...',
        13: '....AHCF..FCHAA.',
        14: '....FA....AFABH.',
        15: '...........AHHA.'
    });
    const SHIBA_HOP_FRAME_1 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        11: '...AHHHHHHHHAA..',
        12: '..AHHHCCFFCHHBAA',
        13: '...AHCF..FCHHGAA',
        14: '....FA....AFABH.',
        15: '...........AHHA.'
    });
    const SHIBA_HOP_FRAME_2 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        11: '..AHHHHHHHHHBAA.',
        12: '..AHHHCCFFCHHHAA',
        13: '..AHCF....FCHHAA',
        14: '...AFA....AFAAH.',
        15: '............AHHA'
    });
    const SHIBA_BALL_FRAME_1 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        13: '...AHCF..FCHHBAK',
        14: '...AFA....AFABKL',
        15: '...........AHHKL'
    });
    const SHIBA_BALL_FRAME_2 = withFrameRows(SHIBA_IDLE_FRAME_2, {
        13: '..AHCF....FCHBAK',
        14: '...AFA....AFAAKL',
        15: '............AHKL'
    });
    const SHIBA_BALL_FRAME_3 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        12: '..AHHHCCFFCHHBAK',
        13: '...AHCF..FCHHBL.',
        14: '...AFA....AFAB..',
        15: '...........AHA..'
    });
    const SHIBA_SLEEPY_FRAME_1 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        6: '..AHEAAAAAAEHA..',
        7: '..AHCCDDDDCCHA..',
        11: '..AHHHHHHHHHBAA.',
        12: '..AHHHCCFFCHHBAA',
        13: '...AHCF..FCHHAA.',
        14: '...AFA....AFAAA.',
        15: '............AA..'
    });
    const SHIBA_SLEEPY_FRAME_2 = withFrameRows(SHIBA_IDLE_BASE_FRAME, {
        6: '..AHCCAAAACCHA..',
        7: '..AHCCDDDDCCHA..',
        11: '...AHHHHHHHHAA..',
        12: '..AHHHCCFFCHHHAA',
        13: '...AHCF..FCHHAA.',
        14: '....AA....AFAAA.',
        15: '.............AA.'
    });
    const SHIBA_SLEEP_FRAME_1 = frameBlock`
        ................
        ................
        ................
        .....AAAAA......
        ....AHHHHHA.....
        ...AHCCCCCCHA...
        ..AHCDDDDDCCHA..
        .AHHHHHHHHHHHHA.
        .AJIIIIIIIIIIJA.
        .AHHHHHHHHHHHHA.
        ..AHHHHCCCCHHA..
        ...AHCCFFCCHA...
        ....ABCCCCBA....
        .....AABBAA.....
        ................
        ................
    `;
    const SHIBA_SLEEP_FRAME_2 = frameBlock`
        ................
        ................
        ................
        ......AAAA......
        ....AHHHHHA.....
        ...AHCCCCCCHA...
        ..AHCDDDDDCCHA..
        .AHHHHHHHHHHHHA.
        .AJIIIIIIIIIIJA.
        .AHHHHHHHHHHHHA.
        ...AHHHCCCCHHA..
        ....AHCCFFCCHA..
        .....ABCCCBA....
        ......AABAA.....
        ................
        ................
    `;
    const SHIBA_COLA_FRAME_1 = withFrameRows(SHIBA_CHEER_FRAME_1, {
        8: '...ACCEEECCCA...'
    });
    const SHIBA_COLA_FRAME_2 = withFrameRows(SHIBA_CHEER_FRAME_2, {
        6: '..AHDHDDDDHDHA..',
        7: '..AHCCDEEECCHA..',
        8: '...ACCEEEDCCA...',
        14: '....FA....AFAHH.',
        15: '............AHHA'
    });
    const SHIBA_COLA_FRAME_3 = withFrameRows(SHIBA_CHEER_FRAME_3, {
        6: '..AHCAAAAAACHA..',
        7: '..AHCCDEEECCHA..',
        8: '...ACCEEEDCCA...',
        14: '....FA....AFABH.',
        15: '...........AHAA.'
    });
    const SHIBA_SPEC_IDLE_FRAME = [
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'G20', 'R3', 'R3', 'R3', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'R3', 'R3', 'R3', 'G20', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'G20', 'A1', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'R3', 'R3', 'R3', 'R3', 'A1', 'G20', 'A1', 'A1', 'A1', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'G20', 'G20', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'G20', 'G20', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'H7', 'A1', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'H7', 'A1', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H7', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'H7', 'A1', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'H7', 'A1', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H7', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'A1', 'H7', 'H7', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'A1', 'H7', 'H7', 'A1', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'A1', 'R3', 'R3', 'R3', 'R3', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H7', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'A1', 'A1', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H7', 'G4', 'G4', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'G4', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H7', 'G4', 'G4', 'G4', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'A14', 'A14', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'G4', 'G4', 'R3', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H7', 'G4', 'G4', 'G4', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'A14', 'A14', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'G4', 'G4', 'G4', 'R3', 'H7', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'H7', 'H7', 'G4', 'G4', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'F8', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'G4', 'G4', 'G4', 'H7', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'G20', 'G20', 'G20', 'G20', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G20', 'G20', 'H7', 'R3', 'R3', 'R3', 'G20', 'G20', 'A1', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'R3', 'R3', 'H7', 'G20', 'G20', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G20', 'H7', 'G20', 'G20', 'R3', 'R3', 'R3', 'A1', 'H7', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G20', 'G20', 'H7', 'G20', 'R3', 'R3', 'A1', 'H7', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'G4', 'G4', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G20', 'H7', 'R3', 'R3', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'G20', 'G20', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G20', 'G20', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G20', 'G20', 'H7', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'G4', 'H7', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'R3', 'H7', 'G20', 'R3', 'R3', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'H7', 'A1', 'A1', 'A1', 'A1', 'A1', 'A1', 'H7', 'A1', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'A1', 'A1', 'A1', 'R3', 'A1', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'A1', 'A1', 'R3', 'A1', 'A1', 'H7', 'A1', 'A1', 'A1', 'A1', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'H7', 'H7', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H7', 'H7', 'H7', 'H7', 'H7', 'H2', 'H7', 'H7', 'H7', 'H7', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2'],
        ['H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2', 'H2']
    ];
    const SHIBA_PIXEL_FRAMES = {
        idle: imageSequence(mumuShibaFrames('happy', 1), 0),
        blink: imageSequence(mumuShibaFrames('blink', 4), 150),
        cheer: imageSequence(mumuShibaFrames('happy', 4), 140),
        hop: imageSequence(mumuShibaFrames('run', 6), 110),
        ball: imageSequence(mumuShibaFrames('play', 6), 130),
        eat: imageSequence(mumuShibaFrames('eat', 5), 150),
        sleepy: imageSequence(mumuShibaFrames('sleepy_wake', 6), 170),
        sleep: imageSequence(mumuShibaFrames('sleep', 4), 260),
        cola: imageSequence(mumuShibaFrames('cola', 6), 160),
        sad: imageSequence(mumuShibaFrames('sad', 6), 170),
        headpatAnnoyed: imageSequence(mumuShibaFrames('headpat_annoyed', 6), 170),
        thinking: imageSequence(mumuShibaFrames('thinking', 4), 170),
        reward: imageSequence(mumuShibaFrames('reward', 4), 140),
        leash: imageSequence(mumuShibaFrames('leash', 4), 140)
    };
    const CAT_PIXEL_FRAMES = {
        idle: imageSequence(mianmianFrames('happy', 1), 0),
        blink: imageSequence(mianmianFrames('blink', 4), 150),
        cheer: imageSequence(mianmianFrames('happy', 4), 140),
        hop: imageSequence(mianmianFrames('run', 6), 110),
        ball: imageSequence(mianmianFrames('play', 6), 130),
        eat: imageSequence(mianmianFrames('eat', 5), 150),
        sleepy: imageSequence(mianmianFrames('sleepy_wake', 6), 170),
        sleep: imageSequence(mianmianFrames('sleep', 4), 260),
        cola: imageSequence(mianmianFrames('catnip_dizzy', 6), 160),
        sad: imageSequence(mianmianFrames('sad', 6), 170),
        headpatAnnoyed: imageSequence(mianmianFrames('headpat_annoyed', 6), 170),
        thinking: imageSequence(mianmianFrames('thinking', 4), 170),
        reward: imageSequence(mianmianFrames('reward', 4), 140),
        leash: imageSequence(mianmianFrames('leash', 4), 140)
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
                    { message: '汪！毛都要被你薅秃啦！快去学习，不然 {name} 要咬笔头了！', mode: 'headpatAnnoyed', anim: 'headpatAnnoyed' }
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
                        0: ['吃饱喝足，{name}感觉现在能徒手撕碎 N2 试卷（精神上）。'],
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
            moodLabels: CAT_MOOD_LABELS,
            moodLabelVariants: CAT_MOOD_LABEL_VARIANTS,
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
                    '喵喵喵！本喵现在感觉能一口气爬上窗帘顶端！快，拿N2试卷来，我要撕了它！',
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
                    { message: '够了够了，再摸下去，{name}就要把爪子按在你的书上了。', mode: 'headpatAnnoyed', anim: 'headpatAnnoyed' }
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
        }};

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

    function isPetVisible(petId) {
        return Boolean(PET_PROFILES[petId]) && !HIDDEN_PET_IDS.includes(petId);
    }

    function getVisiblePetIds() {
        return getPetIds().filter(isPetVisible);
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

    function createDefaultPersistentSettingsWrapper() {
        const petProfiles = {};
        getPetIds().forEach((petId) => {
            petProfiles[petId] = createDefaultPersistentPetSettings();
        });

        return {
            activePetId: DEFAULT_PET_ID,
            followOutsideHome: DEFAULT_FOLLOW_OUTSIDE_HOME,
            petProfiles
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
            ])).filter(isPetVisible),
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
        return isPetVisible(settings.activePetId) ? settings.activePetId : DEFAULT_PET_ID;
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

    function pickSeededArrayItem(items, seed) {
        if (!Array.isArray(items) || items.length === 0) {
            return null;
        }
        if (items.length === 1) {
            return items[0] || null;
        }
        const index = hashDialogSeed(seed, items.length) % items.length;
        return items[index] || items[0] || null;
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

    function createPlainDialogPayload(text) {
        return {
            kind: 'plain',
            text: String(text || ''),
            segments: []
        };
    }

    function createRichDialogPayload(segments) {
        const normalizedSegments = Array.isArray(segments)
            ? segments
                .map((segment) => {
                    if (!segment || typeof segment !== 'object') {
                        return null;
                    }
                    if (segment.type === 'grammar-token') {
                        const label = String(segment.label || '').trim();
                        const grammarId = String(segment.grammarId || '').trim();
                        if (!label || !grammarId) {
                            return null;
                        }
                        return {
                            type: 'grammar-token',
                            label,
                            grammarId
                        };
                    }
                    const text = String(segment.text || '');
                    if (!text) {
                        return null;
                    }
                    return {
                        type: 'text',
                        text
                    };
                })
                .filter(Boolean)
            : [];

        return {
            kind: 'rich',
            text: normalizedSegments.map((segment) => segment.type === 'grammar-token' ? segment.label : segment.text).join(''),
            segments: normalizedSegments
        };
    }

    function normalizeDialogPayload(value) {
        if (!value) {
            return createPlainDialogPayload('');
        }
        if (typeof value === 'string') {
            return createPlainDialogPayload(value);
        }
        if (value.kind === 'rich' && Array.isArray(value.segments)) {
            return createRichDialogPayload(value.segments);
        }
        if (typeof value.text === 'string') {
            return createPlainDialogPayload(value.text);
        }
        return createPlainDialogPayload(String(value || ''));
    }

    function pickWelcomeBubble(state, petProfile, petName) {
        const visitSeed = Math.max(0, Number(state && state.totalVisits) || 0);
        return resolveMergedDialogVariants(petProfile, petName, 'welcome', `welcome:${petProfile.id}:${visitSeed}`, {
            levelXp: state && state.bondXp
        });
    }

    function buildPixelSvg(frameRows) {
        const normalizedRows = normalizePixelRows(frameRows);
        const width = Math.max(1, ...normalizedRows.map((row) => row.length));
        const height = Math.max(1, normalizedRows.length);
        let rects = '';
        normalizedRows.forEach((row, y) => {
            row.forEach((token, x) => {
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

    function buildImageFrameHtml(framePath, assetBaseUrl = DEFAULT_HOME_PET_ASSET_BASE_URL) {
        const src = resolveHomePetAssetUrl(framePath, '');
        const fallbackSrc = assetBaseUrl
            ? resolveHomePetAssetUrl(framePath, assetBaseUrl)
            : '';
        const fallbackAttrs = fallbackSrc && src !== fallbackSrc
            ? ` data-pet-fallback-src="${escapeHtmlAttribute(fallbackSrc)}" onerror="if(this.dataset.petFallbackSrc&&this.src!==this.dataset.petFallbackSrc){this.src=this.dataset.petFallbackSrc;delete this.dataset.petFallbackSrc;}"`
            : '';
        return `<img src="${escapeHtmlAttribute(src)}"${fallbackAttrs} alt="" aria-hidden="true" draggable="false" decoding="async" loading="eager" />`;
    }

    function buildPixelFrameEntry(frameSource, options = {}) {
        const isSequence = Boolean(frameSource) && typeof frameSource === 'object' && !Array.isArray(frameSource) && Array.isArray(frameSource.frames);
        if (isSequence && frameSource.type === 'image') {
            const framePaths = frameSource.frames.map((framePath) => String(framePath || '').trim()).filter(Boolean);
            const frames = framePaths.map((framePath) => buildImageFrameHtml(framePath)).filter(Boolean);
            return {
                type: 'image',
                framePaths,
                frames: frames.length ? frames : [''],
                interval: Math.max(80, Number(frameSource.interval) || 120),
                loop: frameSource.loop !== false
            };
        }

        const rawFrames = isSequence ? frameSource.frames : [frameSource];
        const frames = rawFrames.map((nextFrameRows) => {
            let nextRows = Array.isArray(nextFrameRows) ? nextFrameRows.slice() : [];
            nextRows = remapFrameRows(nextRows, options.tokenMap);
            if (options.trim) {
                nextRows = trimTransparentFrame(nextRows, options.padding || 0);
            }
            return buildPixelSvg(nextRows);
        }).filter(Boolean);

        return {
            frames: frames.length ? frames : [buildPixelSvg(['.'])],
            interval: isSequence ? Math.max(80, Number(frameSource.interval) || 120) : 0,
            loop: !isSequence || frameSource.loop !== false
        };
    }

    function createPixelFrameMap(frameSource, options = {}) {
        return Object.keys(frameSource).reduce((accumulator, mood) => {
            accumulator[mood] = buildPixelFrameEntry(frameSource[mood], options);
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
        const wrapper = createDefaultPersistentSettingsWrapper();
        const { petProfiles } = wrapper;

        if (parsed && parsed.petProfiles && typeof parsed.petProfiles === 'object' && !Array.isArray(parsed.petProfiles)) {
            getPetIds().forEach((petId) => {
                petProfiles[petId] = normalizePersistentPetSettings(parsed.petProfiles[petId]);
            });
            return {
                activePetId: isPetVisible(parsed.activePetId) ? parsed.activePetId : DEFAULT_PET_ID,
                followOutsideHome: parsed.followOutsideHome === true,
                petProfiles
            };
        }

        petProfiles.shiba = normalizePersistentPetSettings(parsed);
        return {
            activePetId: DEFAULT_PET_ID,
            followOutsideHome: parsed.followOutsideHome === true,
            petProfiles
        };
    }

    function savePetSettings(settings) {
        storageSetItem(PET_SETTINGS_KEY, JSON.stringify({
            activePetId: getActivePetId(settings),
            followOutsideHome: settings && settings.followOutsideHome === true,
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

    function isFollowOutsideHomeEnabled(settingsWrapper) {
        return Boolean(settingsWrapper && settingsWrapper.followOutsideHome);
    }

    function shouldMountOnSurfaceType(surfaceType) {
        const normalizedSurfaceType = String(surfaceType || 'home').trim() || 'home';
        if (normalizedSurfaceType === 'home') {
            return true;
        }
        return isFollowOutsideHomeEnabled(loadPetSettings());
    }

    function ensureMountRoot(mountSelector = '#home-pet-root') {
        const selector = String(mountSelector || '#home-pet-root').trim() || '#home-pet-root';
        let mount = document.querySelector(selector);
        if (mount) {
            return mount;
        }

        if (selector.startsWith('#')) {
            mount = document.createElement('div');
            mount.id = selector.slice(1);
            document.body.appendChild(mount);
            return mount;
        }

        return null;
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
            isNew: true,
            rarity: 'MAX',
            title: `${getPetProfile(petId).label} 满级奖励`,
            source: 'pet_max_reward'
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
                let rawHref = `exam/grammar/sort/index.html?level=${encodeURIComponent(item.level)}`;
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

    function collectTextbookGrammarSummaries(config) {
        const lastLabel = String(storageGetItem(TEXTBOOK_LAST_LABEL_KEY) || '').trim();
        const lastRoute = String(storageGetItem(TEXTBOOK_LAST_ROUTE_KEY) || '').trim();
        const reviewCount = safeParseJSON(storageGetItem(TEXTBOOK_MISTAKES_KEY), [])
            .map((item) => String(item || '').trim())
            .filter(Boolean)
            .length;

        if (!lastLabel && reviewCount <= 0) {
            return [];
        }

        let rawHref = 'exam/textbook/try-n2.html';
        if (lastRoute.startsWith('lesson:')) {
            rawHref += `?lesson=${encodeURIComponent(lastRoute.split(':')[1] || '')}`;
        }

        return [{
            area: 'exam',
            sectionKey: 'exam',
            label: '教材语法 N2',
            href: createTrackedHref(config, rawHref, 'exam'),
            statusText: reviewCount > 0
                ? `${lastLabel ? `${lastLabel} · ` : ''}待复习 ${reviewCount} 题`
                : `最近练到 ${lastLabel}`,
            reviewCount,
            score: 10 + reviewCount * 4 + (lastLabel ? 3 : 0)
        }];
    }

    function collectVocabularySummaries(config) {
        const tracks = [
            {
                label: 'N2 动词',
                lastDayKey: 'kiki_n2_vocab_n2_verbs_last_day',
                starPrefix: 'kiki_n2_vocab_star::',
                href: 'exam/vocabulary/n2/verbs_n2.html',
                isPractice: false
            },
            {
                label: 'N2 动词练习',
                lastDayKey: 'kiki_n2_vocab_n2_verbs_last_day',
                starPrefix: 'kiki_n2_vocab_star::',
                href: 'exam/vocabulary/n2/practice_n2_verbs.html',
                isPractice: true
            }
        ];

        return tracks
            .map((track) => {
                const lastDay = Number.parseInt(storageGetItem(track.lastDayKey) || '0', 10);
                const starCount = countTrueKeys(track.starPrefix);
                if (!lastDay && !starCount) {
                    return null;
                }

                let rawHref = track.href;
                if (track.isPractice) {
                    if (lastDay > 0) {
                        rawHref += `?day=${encodeURIComponent(lastDay)}`;
                    } else if (starCount > 0) {
                        rawHref += '?day=-1';
                    }
                }

                const parts = [];
                if (lastDay) parts.push(`Day ${lastDay}`);
                if (starCount) parts.push(`收藏 ${starCount}`);

                return {
                    area: 'exam',
                    sectionKey: 'exam',
                    label: track.label,
                    href: createTrackedHref(config, rawHref, 'exam'),
                    statusText: parts.join(' · '),
                    reviewCount: 0,
                    score: 6 + Math.min(lastDay, 20) + Math.min(starCount, 8)
                };
            })
            .filter(Boolean);
    }

    function resolveListeningYearHref(level, rawYearLabel) {
        const normalizedLevel = String(level || '').trim().toLowerCase();
        if (!normalizedLevel) {
            return 'exam/listening/index.html';
        }

        const match = String(rawYearLabel || '').match(/20\d{2}/);
        if (match) {
            const filePrefix = normalizedLevel === 'n2' ? 'j' : normalizedLevel;
            return `exam/listening/immediate-response/${normalizedLevel}/years/${filePrefix}_${match[0]}.html`;
        }

        return `exam/listening/immediate-response/${normalizedLevel}/index.html`;
    }

    function collectListeningSummaries(config) {
        const items = [];
        const responseTracks = [
            {
                level: 'n2',
                label: formatListeningLabel('N2'),
                lastKey: 'last_n2_practice',
                href: 'exam/listening/index.html'
            },
            {
                level: 'n3',
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
                href: createTrackedHref(config, resolveListeningYearHref(track.level, lastExam) || track.href, 'exam'),
                statusText: `最近练到 ${lastExam}`,
                reviewCount: 0,
                score: 7
            });
        });

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
            ...collectTextbookGrammarSummaries(config),
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

    function getGrammarRepo() {
        return window.GrammarDB && window.GrammarDB.repo ? window.GrammarDB.repo : null;
    }

    function isGrammarReminderEnabled(config, petProfile) {
        return Boolean(config && config.enableGrammarIdleCards)
            && petProfile
            && ['shiba', 'cat'].includes(petProfile.id);
    }

    function isGrammarActivityItem(item) {
        if (!item) {
            return false;
        }
        const text = `${item.label || ''} ${item.statusText || ''} ${item.href || ''}`.toLowerCase();
        return /语法|文法|grammar|textbook|教材|sort/.test(text);
    }

    function getGrammarActivityText(item) {
        return `${item && item.label ? item.label : ''} ${item && item.statusText ? item.statusText : ''} ${item && item.href ? item.href : ''}`;
    }

    function extractLevelsFromText(text) {
        const matches = String(text || '').match(/\bN[1-5]\b/g) || [];
        return [...new Set(matches.map((match) => match.trim()))];
    }

    function extractLessonNumbersFromText(text) {
        const matches = String(text || '').match(/第\s*(\d+)\s*[課课]/g) || [];
        return [...new Set(matches.map((match) => {
            const numeric = match.match(/(\d+)/);
            return numeric ? Number(numeric[1]) : NaN;
        }).filter((value) => Number.isFinite(value)))];
    }

    function isLevelScopedGrammarActivityItem(item) {
        return isGrammarActivityItem(item) && extractLevelsFromText(getGrammarActivityText(item)).length > 0;
    }

    function isTextbookGrammarActivityItem(item) {
        if (!isLevelScopedGrammarActivityItem(item)) {
            return false;
        }
        return /教材|textbook/.test(getGrammarActivityText(item).toLowerCase());
    }

    function getPrimaryGrammarLevelFromSignals(signals) {
        const signalList = Array.isArray(signals) ? signals : [];
        for (let index = 0; index < signalList.length; index += 1) {
            const levels = extractLevelsFromText(getGrammarActivityText(signalList[index]));
            if (levels.length) {
                return levels[0];
            }
        }
        return '';
    }

    function getPrimaryGrammarLessonFromSignals(signals) {
        const signalList = Array.isArray(signals) ? signals : [];
        for (let index = 0; index < signalList.length; index += 1) {
            const lessons = extractLessonNumbersFromText(`${signalList[index] && signalList[index].label ? signalList[index].label : ''} ${signalList[index] && signalList[index].statusText ? signalList[index].statusText : ''}`);
            if (lessons.length) {
                return lessons[0];
            }
        }
        return null;
    }

    function finalizeGrammarReminderPool(items) {
        const normalizedItems = Array.isArray(items)
            ? items.filter((item) => item && item.id && item.title)
            : [];
        const conciseItems = normalizedItems.filter((item) => String(item.title || '').trim().length <= 16);
        return conciseItems.length ? conciseItems : normalizedItems;
    }

    function buildGrammarReminderPools(allItems, currentLevel, currentLesson) {
        const globalItems = finalizeGrammarReminderPool(allItems);
        const levelItems = currentLevel
            ? finalizeGrammarReminderPool(allItems.filter((item) => String(item.level || '').trim() === currentLevel))
            : [];
        const lessonItems = currentLevel && Number.isFinite(currentLesson)
            ? finalizeGrammarReminderPool(allItems.filter((item) => (
                String(item.level || '').trim() === currentLevel
                && Number(item.lessonNumber) === Number(currentLesson)
            )))
            : [];

        return {
            lesson: lessonItems,
            level: levelItems,
            global: globalItems
        };
    }

    function getWeightedGrammarReminderPools(pools) {
        const normalizedPools = pools && typeof pools === 'object' ? pools : {};
        let lessonWeight = 0;
        let levelWeight = 0;
        let globalWeight = GRAMMAR_REMINDER_GLOBAL_WEIGHT;

        if (Array.isArray(normalizedPools.level) && normalizedPools.level.length) {
            levelWeight += GRAMMAR_REMINDER_LEVEL_WEIGHT;
        } else {
            globalWeight += GRAMMAR_REMINDER_LEVEL_WEIGHT;
        }

        if (Array.isArray(normalizedPools.lesson) && normalizedPools.lesson.length) {
            lessonWeight += GRAMMAR_REMINDER_LESSON_WEIGHT;
        } else if (Array.isArray(normalizedPools.level) && normalizedPools.level.length) {
            levelWeight += GRAMMAR_REMINDER_LESSON_WEIGHT;
        } else {
            globalWeight += GRAMMAR_REMINDER_LESSON_WEIGHT;
        }

        return [
            { key: 'lesson', weight: lessonWeight, items: normalizedPools.lesson || [] },
            { key: 'level', weight: levelWeight, items: normalizedPools.level || [] },
            { key: 'global', weight: globalWeight, items: normalizedPools.global || [] }
        ].filter((pool) => pool.weight > 0 && Array.isArray(pool.items) && pool.items.length);
    }

    function pickWeightedGrammarReminderPool(pools, seed) {
        const weightedPools = getWeightedGrammarReminderPools(pools);
        if (!weightedPools.length) {
            return null;
        }
        if (weightedPools.length === 1) {
            return weightedPools[0];
        }

        const totalWeight = weightedPools.reduce((sum, pool) => sum + pool.weight, 0);
        if (totalWeight <= 0) {
            return weightedPools[0];
        }

        let gate = hashDialogSeed(seed, totalWeight) % totalWeight;
        for (let index = 0; index < weightedPools.length; index += 1) {
            const pool = weightedPools[index];
            if (gate < pool.weight) {
                return pool;
            }
            gate -= pool.weight;
        }
        return weightedPools[weightedPools.length - 1];
    }

    function pickGrammarReminderItem(items, seed, selectionState, poolKey) {
        if (!Array.isArray(items) || !items.length) {
            return null;
        }

        let candidates = items;
        const lastReminderId = selectionState && selectionState.lastGrammarReminderPoolKey === poolKey
            ? String(selectionState.lastGrammarReminderId || '').trim()
            : '';

        if (lastReminderId && items.length > 1) {
            const filteredItems = items.filter((item) => String(item && item.id ? item.id : '').trim() !== lastReminderId);
            if (filteredItems.length) {
                candidates = filteredItems;
            }
        }

        const nextItem = pickSeededArrayItem(candidates, seed);
        if (nextItem && selectionState) {
            selectionState.lastGrammarReminderPoolKey = poolKey;
            selectionState.lastGrammarReminderId = String(nextItem.id || '').trim();
        }
        return nextItem;
    }

    function getGrammarReminderCandidates(summary, activeSection) {
        const repo = getGrammarRepo();
        if (!repo || typeof repo.getCanonicalGrammar !== 'function') {
            return {
                pools: {
                    lesson: [],
                    level: [],
                    global: []
                },
                currentLevel: '',
                currentLesson: null,
                grammarSignals: []
            };
        }

        const allItems = repo.getCanonicalGrammar({})
            .filter((item) => (
                item
                && ['N2', 'N3'].includes(String(item.level || '').trim())
                && item.id
                && item.title
                && item.meaning
                && item.connection
                && item.desc
                && Array.isArray(item.examples)
                && item.examples.length
            ));

        const signals = [
            summary && summary.recommendedNext,
            ...((summary && Array.isArray(summary.recentActivities)) ? summary.recentActivities : [])
        ].filter(Boolean);
        const grammarSignals = signals.filter(isLevelScopedGrammarActivityItem);
        const textbookGrammarSignals = grammarSignals.filter(isTextbookGrammarActivityItem);
        const currentLevel = getPrimaryGrammarLevelFromSignals(textbookGrammarSignals) || getPrimaryGrammarLevelFromSignals(grammarSignals);
        const currentLesson = getPrimaryGrammarLessonFromSignals(textbookGrammarSignals);

        return {
            pools: buildGrammarReminderPools(allItems, currentLevel, currentLesson),
            currentLevel,
            currentLesson,
            grammarSignals,
            activeSection
        };
    }

    function buildGrammarReminderPayload(summary, activeSection, config, petProfile, options = {}) {
        if (!isGrammarReminderEnabled(config, petProfile)) {
            return null;
        }

        const seedSuffix = options && options.seedSuffix ? `:${options.seedSuffix}` : '';

        const {
            pools,
            grammarSignals,
            currentLevel,
            currentLesson
        } = getGrammarReminderCandidates(summary, activeSection);
        const selectedPool = pickWeightedGrammarReminderPool(
            pools,
            `grammar-pool:${petProfile.id}:${activeSection || 'home'}:${currentLevel || 'all'}:${Number.isFinite(currentLesson) ? currentLesson : 'none'}:${summary && summary.visitStreak}:${grammarSignals.length}${seedSuffix}`
        );
        if (!selectedPool || !selectedPool.items.length) {
            return null;
        }

        const grammarItem = pickGrammarReminderItem(
            selectedPool.items,
            `grammar-item:${petProfile.id}:${selectedPool.key}:${activeSection || 'home'}:${currentLevel || 'all'}:${Number.isFinite(currentLesson) ? currentLesson : 'none'}:${summary && summary.visitStreak}:${summary && summary.reviewPressure && summary.reviewPressure.total}:${grammarSignals.length}${seedSuffix}`,
            options.grammarSelectionState,
            selectedPool.key
        );
        if (!grammarItem) {
            return null;
        }

        const templatePool = HOMEPAGE_GRAMMAR_TEMPLATES[petProfile.id] || HOMEPAGE_GRAMMAR_TEMPLATES.shiba;
        const templateFactory = pickSeededArrayItem(
            templatePool,
            `grammar-template:${grammarItem.id}:${summary && summary.visitStreak}:${summary && summary.reviewPressure && summary.reviewPressure.total}${seedSuffix}`
        );
        if (typeof templateFactory !== 'function') {
            return null;
        }

        return createRichDialogPayload(templateFactory({
            label: {
                id: grammarItem.id,
                title: grammarItem.title
            }
        }));
    }

    function getHomepageIdleChannel(summary, activeSection, config, petProfile, options = {}) {
        if (!isGrammarReminderEnabled(config, petProfile)) {
            return 'fallback';
        }
        if (options && options.forceGrammarIdle) {
            return 'grammar';
        }
        const seedSuffix = options && options.seedSuffix ? `:${options.seedSuffix}` : '';
        const gateSeed = hashDialogSeed(
            'homepage-idle-channel',
            petProfile.id,
            activeSection || 'home',
            summary && summary.visitStreak,
            summary && summary.reviewPressure && summary.reviewPressure.total,
            summary && Array.isArray(summary.recentActivities) ? summary.recentActivities.length : 0,
            seedSuffix
        ) % 100;
        if (gateSeed < HOMEPAGE_IDLE_PRIMARY_CHANCE) {
            return 'idle';
        }
        if (gateSeed < HOMEPAGE_IDLE_PRIMARY_CHANCE + HOMEPAGE_LEARNING_REMINDER_CHANCE) {
            return 'learning';
        }
        return 'grammar';
    }

    function pickSectionEntryBubble(summary, activeSection, petProfile, petName, options = {}) {
        const sectionDialogs = SECTION_ENTRY_DIALOGS[petProfile.id] || SECTION_ENTRY_DIALOGS.shiba;
        const normalizedSection = activeSection || 'daily';
        const seedSuffix = options && options.seedSuffix ? `:${options.seedSuffix}` : '';

        if (normalizedSection === 'exam') {
            const label = summary && summary.recommendedNext && summary.recommendedNext.label
                ? summary.recommendedNext.label
                : (summary && Array.isArray(summary.recentActivities) && summary.recentActivities[0] && summary.recentActivities[0].label) || '';
            const templates = label ? sectionDialogs.examRecent : sectionDialogs.examFallback;
            return resolvePetDialog(templates, petName, {
                label,
                seed: `section-entry:${petProfile.id}:${normalizedSection}:${label}${seedSuffix}`
            });
        }

        const bucketKey = normalizedSection === 'favorites' ? 'favorites' : 'daily';
        return resolvePetDialog(sectionDialogs[bucketKey], petName, {
            seed: `section-entry:${petProfile.id}:${bucketKey}${seedSuffix}`
        });
    }

    function pickLightStudyReminderBubble(summary, activeSection, petProfile, petName, options = {}) {
        const seedSuffix = options && options.seedSuffix ? `:${options.seedSuffix}` : '';
        if (activeSection === 'exam') {
            if (summary.reviewPressure.hasBacklog) {
                return resolveMergedDialogVariants(
                    petProfile,
                    petName,
                    'defaultReview',
                    `learning-review:${petProfile.id}:${summary.recommendedNext.label}:${summary.reviewPressure.total}:${summary.visitStreak}${seedSuffix}`,
                    {
                        label: summary.recommendedNext.label,
                        levelXp: summary.levelXp
                    }
                );
            }

            if (summary.recentActivities.length > 0) {
                return resolveMergedDialogVariants(
                    petProfile,
                    petName,
                    'defaultRecent',
                    `learning-recent:${petProfile.id}:${summary.recentActivities[0].label}:${summary.visitStreak}${seedSuffix}`,
                    {
                        label: summary.recentActivities[0].label,
                        levelXp: summary.levelXp
                    }
                );
            }

            return resolveMergedDialogVariants(
                petProfile,
                petName,
                'defaultExam',
                `learning-exam:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}${seedSuffix}`,
                { levelXp: summary.levelXp }
            );
        }

        const templates = LIGHT_STUDY_REMINDER_DIALOGS[petProfile.id] || LIGHT_STUDY_REMINDER_DIALOGS.shiba;
        return resolvePetDialog(templates, petName, {
            seed: `learning-idle:${petProfile.id}:${activeSection || 'daily'}:${summary.visitStreak}${seedSuffix}`
        });
    }

    function buildLotteryReactionMessage(petId, detail, petName) {
        const dialogPool = LOTTERY_RESULT_DIALOGS[petId] || LOTTERY_RESULT_DIALOGS.shiba;
        const normalizedDetail = detail && typeof detail === 'object' ? detail : {};
        const title = String(normalizedDetail.title || '').trim();
        const rarity = String(normalizedDetail.rarity || '').trim();
        const combinedMeta = `${title} ${rarity}`;
        const isRare = Boolean(normalizedDetail.isRare)
            || /SSR|SP|限定|隐藏|隱藏|稀有|超吉|大吉|レア|rare/i.test(combinedMeta);

        let bucketKey = 'ordinary';
        if (normalizedDetail.didUnlockColaTreat) {
            bucketKey = 'unlock';
        } else if (normalizedDetail.isNew && isRare) {
            bucketKey = 'rare';
        } else if (normalizedDetail.isNew) {
            bucketKey = 'new';
        } else if (isRare) {
            bucketKey = 'rare';
        } else if (normalizedDetail.isDuplicate || normalizedDetail.isNew === false) {
            bucketKey = 'duplicate';
        }

        return resolvePetDialog(dialogPool[bucketKey] || dialogPool.ordinary, petName, {
            title,
            rarity,
            seed: `lottery:${petId}:${bucketKey}:${title}:${rarity}`
        });
    }

    function pickDefaultBubble(summary, activeSection, petProfile, petName, config, options = {}) {
        const seedSuffix = options && options.seedSuffix ? `:${options.seedSuffix}` : '';
        const levelXp = summary && summary.levelXp;
        if (isGrammarReminderEnabled(config, petProfile)) {
            const channel = getHomepageIdleChannel(summary, activeSection, config, petProfile, options);
            if (channel === 'grammar') {
                const grammarReminder = buildGrammarReminderPayload(summary, activeSection, config, petProfile, options);
                if (grammarReminder) {
                    return grammarReminder;
                }
            }
            if (channel === 'learning') {
                return pickLightStudyReminderBubble(summary, activeSection, petProfile, petName, options);
            }
            return resolveMergedDialogVariants(
                petProfile,
                petName,
                'defaultIdle',
                `idle:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}:${activeSection || 'none'}${seedSuffix}`,
                { levelXp }
            );
        }
        if (summary.reviewPressure.hasBacklog) {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultReview', `review:${petProfile.id}:${summary.recommendedNext.label}:${summary.reviewPressure.total}:${summary.visitStreak}${seedSuffix}`, {
                label: summary.recommendedNext.label,
                levelXp
            });
        }
        if (activeSection === 'exam') {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultExam', `exam:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}${seedSuffix}`, {
                levelXp
            });
        }
        if (summary.recentActivities.length > 0) {
            return resolveMergedDialogVariants(petProfile, petName, 'defaultRecent', `recent:${petProfile.id}:${summary.recentActivities[0].label}:${summary.visitStreak}:${summary.recentActivities.length}${seedSuffix}`, {
                label: summary.recentActivities[0].label,
                levelXp
            });
        }
        return resolveMergedDialogVariants(petProfile, petName, 'defaultIdle', `idle:${petProfile.id}:${summary.visitStreak}:${summary.reviewPressure.total}:${activeSection || 'none'}${seedSuffix}`, {
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
                        <button type="button" class="home-pet-action home-pet-action--toggle" data-pet-leash>牵绳</button>
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
            <div class="home-pet-grammar-overlay" data-pet-grammar-overlay hidden>
                <div class="home-pet-grammar-dialog" role="dialog" aria-modal="true" aria-label="语法速查卡">
                    <button type="button" class="home-pet-grammar-close" data-pet-grammar-close aria-label="关闭语法速查卡">&times;</button>
                    <div class="home-pet-grammar-head">
                        <h3 class="home-pet-grammar-title" data-pet-grammar-title></h3>
                        <div class="home-pet-grammar-badges" data-pet-grammar-badges></div>
                        <div class="home-pet-grammar-hint" data-pet-grammar-hint></div>
                    </div>
                    <div class="home-pet-grammar-body">
                        <section class="home-pet-grammar-section">
                            <span class="home-pet-grammar-label">意味</span>
                            <div class="home-pet-grammar-value home-pet-grammar-value--highlight" data-pet-grammar-meaning></div>
                        </section>
                        <section class="home-pet-grammar-section">
                            <span class="home-pet-grammar-label">接续</span>
                            <div class="home-pet-grammar-value home-pet-grammar-value--connection" data-pet-grammar-connection></div>
                        </section>
                        <section class="home-pet-grammar-section">
                            <span class="home-pet-grammar-label">解説</span>
                            <div class="home-pet-grammar-value" data-pet-grammar-desc></div>
                        </section>
                        <section class="home-pet-grammar-section">
                            <span class="home-pet-grammar-label">例句</span>
                            <div class="home-pet-grammar-example" data-pet-grammar-example></div>
                        </section>
                    </div>
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
        if (document && document.body) {
            document.body.classList.add('has-home-pet');
        }
        let state = loadPetState();
        let settings = loadPetSettings();
        const petAssetBaseUrl = Object.prototype.hasOwnProperty.call(config || {}, 'assetBaseUrl')
            ? config.assetBaseUrl
            : DEFAULT_HOME_PET_ASSET_BASE_URL;
        let modalOpen = false;
        let collectionOpen = false;
        let motionTimer = null;
        let spriteFrameTimer = null;
        let activeSpritePetId = '';
        let activeSpriteAnim = '';
        let idleRotationTimer = null;
        let isNameEditing = false;
        let dragState = null;
        let justDragged = false;
        let summary = null;
        let visitMeta = null;
        let activeGrammarPeekId = '';

        function createRuntimeStateForPet(petId) {
            return {
                currentDialog: '',
                currentDialogPayload: createPlainDialogPayload(''),
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
                practiceReactionKey: '',
                practiceReactionAt: 0,
                idleRotationTick: 0,
                lastGrammarReminderId: '',
                lastGrammarReminderPoolKey: '',
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
        const grammarOverlayEl = root.querySelector('[data-pet-grammar-overlay]');
        const grammarCloseEl = root.querySelector('[data-pet-grammar-close]');
        const grammarTitleEl = root.querySelector('[data-pet-grammar-title]');
        const grammarBadgesEl = root.querySelector('[data-pet-grammar-badges]');
        const grammarHintEl = root.querySelector('[data-pet-grammar-hint]');
        const grammarMeaningEl = root.querySelector('[data-pet-grammar-meaning]');
        const grammarConnectionEl = root.querySelector('[data-pet-grammar-connection]');
        const grammarDescEl = root.querySelector('[data-pet-grammar-desc]');
        const grammarExampleEl = root.querySelector('[data-pet-grammar-example]');
        const spriteEl = root.querySelector('[data-pet-sprite]');
        const toggleEl = root.querySelector('[data-pet-toggle]');
        const headpatBtn = root.querySelector('[data-pet-headpat]');
        const treatBtn = root.querySelector('[data-pet-treat]');
        const colaBtn = root.querySelector('[data-pet-cola]');
        const leashBtn = root.querySelector('[data-pet-leash]');

        function clearSpriteFrameTimer() {
            if (spriteFrameTimer) {
                clearTimeout(spriteFrameTimer);
                spriteFrameTimer = null;
            }
            activeSpritePetId = '';
            activeSpriteAnim = '';
        }

        function getPixelFrameEntryForAnim(petProfile, animKey) {
            return petProfile.pixelFrames[animKey] || petProfile.pixelFrames.cheer || petProfile.pixelFrames.idle;
        }

        function renderPetAnimFrame(petProfile, animKey, petId, { forceRestart = false } = {}) {
            if (getCurrentPetId() !== petId) {
                return;
            }

            const frameEntry = getPixelFrameEntryForAnim(petProfile, animKey);
            const frames = frameEntry && Array.isArray(frameEntry.frames) && frameEntry.frames.length ? frameEntry.frames : [''];
            const framePaths = frameEntry && frameEntry.type === 'image' && Array.isArray(frameEntry.framePaths) ? frameEntry.framePaths : [];
            const frameCount = framePaths.length || frames.length;
            const getFrameMarkup = (index) => {
                if (framePaths.length) {
                    return buildImageFrameHtml(framePaths[index] || framePaths[0] || '', petAssetBaseUrl);
                }
                return frames[index] || frames[0] || '';
            };
            const nextFrame = getFrameMarkup(0);
            const shouldKeepSequence = !forceRestart
                && activeSpritePetId === petId
                && activeSpriteAnim === animKey
                && spriteFrameTimer;

            root.dataset.anim = animKey;
            if (shouldKeepSequence) {
                return;
            }

            clearSpriteFrameTimer();
            spriteEl.innerHTML = nextFrame;
            activeSpritePetId = petId;
            activeSpriteAnim = animKey;

            if (frameCount <= 1 || !(Number(frameEntry.interval) > 0)) {
                return;
            }

            let frameIndex = 0;
            const tick = () => {
                const runtime = getPetRuntime(petId);
                if (getCurrentPetId() !== petId || runtime.animState !== animKey) {
                    clearSpriteFrameTimer();
                    return;
                }

                frameIndex += 1;
                if (frameIndex >= frameCount) {
                    if (frameEntry.loop === false) {
                        clearSpriteFrameTimer();
                        return;
                    }
                    frameIndex = 0;
                }

                spriteEl.innerHTML = getFrameMarkup(frameIndex);
                spriteFrameTimer = setTimeout(tick, frameEntry.interval);
            };

            spriteFrameTimer = setTimeout(tick, frameEntry.interval);
        }

        function getSurfaceType() {
            return String(config && config.surfaceType ? config.surfaceType : 'home').trim() || 'home';
        }

        function isHomeSurface() {
            return getSurfaceType() === 'home';
        }

        function isCrossPageSurface() {
            return !isHomeSurface();
        }

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

        function isPracticeQuietSurface() {
            return typeof config.isPracticeQuietSurface === 'function'
                ? Boolean(config.isPracticeQuietSurface())
                : false;
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

        function setFollowOutsideHomeEnabled(nextValue) {
            settings.followOutsideHome = Boolean(nextValue);
            persistSettings();
        }

        function assignRuntimeDialog(petId, value) {
            const runtime = getPetRuntime(petId);
            const payload = normalizeDialogPayload(value);
            runtime.currentDialogPayload = payload;
            runtime.currentDialog = payload.text;
            return payload;
        }

        function renderBubbleContent(payload) {
            const resolved = normalizeDialogPayload(payload);
            bubbleEl.innerHTML = '';
            bubbleEl.dataset.interactive = resolved.kind === 'rich' && resolved.segments.some((segment) => segment.type === 'grammar-token') ? 'true' : 'false';

            if (!resolved.text) {
                return;
            }

            if (resolved.kind !== 'rich' || !resolved.segments.length) {
                bubbleEl.textContent = resolved.text;
                return;
            }

            resolved.segments.forEach((segment) => {
                if (segment.type === 'grammar-token') {
                    const tokenEl = document.createElement('button');
                    tokenEl.type = 'button';
                    tokenEl.className = 'home-pet-bubble-token';
                    tokenEl.textContent = segment.label;
                    tokenEl.setAttribute('data-pet-grammar-token', segment.grammarId);
                    tokenEl.setAttribute('aria-label', `查看语法 ${segment.label}`);
                    bubbleEl.appendChild(tokenEl);
                    return;
                }

                const textEl = document.createElement('span');
                textEl.textContent = segment.text;
                bubbleEl.appendChild(textEl);
            });
        }

        function closeGrammarPeek() {
            activeGrammarPeekId = '';
            if (grammarOverlayEl) {
                grammarOverlayEl.hidden = true;
            }
        }

        function renderGrammarPeek(grammarItem) {
            if (!grammarItem || !grammarOverlayEl) {
                return false;
            }

            const currentPetId = getCurrentPetId();
            grammarTitleEl.textContent = String(grammarItem.title || '').trim();
            const badges = [
                String(grammarItem.level || '').trim(),
                Number.isFinite(Number(grammarItem.lessonNumber)) ? `第${Number(grammarItem.lessonNumber)}课` : '',
                String(grammarItem.bookLabel || '').trim()
            ].filter(Boolean);
            grammarBadgesEl.innerHTML = badges.map((badge) => `<span class="home-pet-grammar-badge">${escapeHtml(badge)}</span>`).join('');
            if (grammarHintEl) {
                grammarHintEl.textContent = GRAMMAR_PEEK_HINTS[currentPetId] || GRAMMAR_PEEK_HINTS.shiba;
            }
            grammarMeaningEl.textContent = String(grammarItem.meaning || '').trim() || '暂无';
            grammarConnectionEl.textContent = String(grammarItem.connection || '').trim() || '暂无';
            grammarDescEl.innerHTML = String(grammarItem.desc || '').trim() || '暂无解説';

            const firstExample = Array.isArray(grammarItem.examples) && grammarItem.examples.length
                ? grammarItem.examples[0]
                : null;
            if (firstExample && (firstExample.jp || firstExample.cn)) {
                grammarExampleEl.innerHTML = '';
                const exampleJpEl = document.createElement('div');
                exampleJpEl.className = 'home-pet-grammar-example-jp';
                exampleJpEl.innerHTML = String(firstExample.jp || '').trim() || '暂无例句';
                grammarExampleEl.appendChild(exampleJpEl);

                if (firstExample.cn) {
                    const exampleCnEl = document.createElement('div');
                    exampleCnEl.className = 'home-pet-grammar-example-cn';
                    exampleCnEl.textContent = String(firstExample.cn || '').trim();
                    grammarExampleEl.appendChild(exampleCnEl);
                }
            } else {
                grammarExampleEl.textContent = '暂无例句';
            }

            collectionOpen = false;
            if (collectionPanelEl) {
                collectionPanelEl.hidden = true;
            }
            if (collectionTriggerEl) {
                collectionTriggerEl.setAttribute('aria-expanded', 'false');
                collectionTriggerEl.classList.remove('is-open');
            }
            grammarOverlayEl.hidden = false;
            activeGrammarPeekId = grammarItem.id;
            return true;
        }

        function openGrammarPeek(grammarId) {
            const repo = getGrammarRepo();
            if (!repo || typeof repo.getGrammarById !== 'function') {
                return false;
            }
            const entry = repo.getGrammarById(grammarId);
            return renderGrammarPeek(entry);
        }

        function isHomepageIdleRotationEnabled(petId = getCurrentPetId()) {
            return Boolean(config && config.enableGrammarIdleCards)
                && ['shiba', 'cat'].includes(petId)
                && !isPracticeQuietSurface();
        }

        function shouldPauseHomepageIdleRotation(petId = getCurrentPetId()) {
            if (!isHomepageIdleRotationEnabled(petId)) {
                return true;
            }
            const runtime = getPetRuntime(petId);
            const petSettings = getPetSettingsById(petId);
            return Boolean(
                modalOpen
                || collectionOpen
                || isNameEditing
                || activeGrammarPeekId
                || !petSettings.collapsed
                || runtime.interactionMode !== 'normal'
                || (
                    runtime.dialogSource
                    && runtime.dialogSource.kind !== 'default'
                    && runtime.dialogSource.kind !== 'welcome'
                )
            );
        }

        function clearIdleRotationTimer() {
            if (idleRotationTimer) {
                clearTimeout(idleRotationTimer);
                idleRotationTimer = null;
            }
        }

        function scheduleHomepageIdleRotation() {
            clearIdleRotationTimer();
            const petId = getCurrentPetId();
            if (shouldPauseHomepageIdleRotation(petId)) {
                return;
            }
            idleRotationTimer = window.setTimeout(() => {
                const runtime = getPetRuntime(petId);
                runtime.idleRotationTick += 1;
                if (getCurrentPetId() === petId) {
                    sync('idle-rotation');
                }
            }, HOMEPAGE_IDLE_ROTATION_MS);
        }

        function collapseInteractivePanel(options = {}) {
            const petId = getCurrentPetId();
            const petSettings = getCurrentPetSettings();
            let didChange = false;

            if (!petSettings.collapsed) {
                petSettings.collapsed = true;
                persistSettings();
                didChange = true;
            }
            if (collectionOpen) {
                collectionOpen = false;
                didChange = true;
            }
            if (options.closeGrammar && activeGrammarPeekId) {
                closeGrammarPeek();
                didChange = true;
            }
            if (isNameEditing) {
                finishNameEdit(true);
                didChange = true;
            }
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'normal') {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, getCurrentSection());
            }
            return didChange;
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
            return '满级纪念语已解锁';
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
            const rewardUnlocked = false;

            if (after.level > before.level) {
                const unlockLabel = getLevelUnlockLabel(petId, after.level);
                const toastMessage = `Lv.${after.level} 达成 · 已解锁：${unlockLabel}`;
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

        function getCollectionPetIcon(petProfile, assetBaseUrl = DEFAULT_HOME_PET_ASSET_BASE_URL) {
            const idleEntry = petProfile && petProfile.pixelFrames && petProfile.pixelFrames.idle;
            if (idleEntry && idleEntry.type === 'image' && Array.isArray(idleEntry.framePaths) && idleEntry.framePaths[0]) {
                return buildImageFrameHtml(idleEntry.framePaths[0], assetBaseUrl);
            }
            if (idleEntry && Array.isArray(idleEntry.frames) && idleEntry.frames[0]) {
                return idleEntry.frames[0];
            }
            return '';
        }

        function renderCollectionCards() {
            const collection = getPetCollection();
            collectionGridEl.innerHTML = getVisiblePetIds().map((petId) => {
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
                            ${getCollectionPetIcon(petProfile, petAssetBaseUrl)}
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

        function resolveDialogSourceForPet(petId, source, summaryOverride, sectionOverride, options = {}) {
            const dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            const petProfile = getPetProfile(petId);
            const petName = getDisplayPetName(settings, petId);
            const activeSummary = summaryOverride || buildSummaryForPet(petId);
            const activeSection = sectionOverride !== undefined ? sectionOverride : getCurrentSection();

            if (petProfile.silentDialogs) {
                return '';
            }

            switch (dialogSource.kind) {
                case 'welcome':
                    return pickWelcomeBubble(getPetStateById(petId), petProfile, petName);
                case 'section-entry':
                    return pickSectionEntryBubble(activeSummary, activeSection, petProfile, petName, options);
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
                    return pickDefaultBubble(activeSummary, activeSection, petProfile, petName, config, {
                        ...options,
                        grammarSelectionState: options.grammarSelectionState || getPetRuntime(petId)
                    });
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

        function setDialogSourceForPet(petId, source, summaryOverride, sectionOverride, options = {}) {
            const runtime = getPetRuntime(petId);
            runtime.dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            return assignRuntimeDialog(
                petId,
                resolveDialogSourceForPet(petId, runtime.dialogSource, summaryOverride, sectionOverride, options)
            );
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
                if (isPracticeQuietSurface()) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                    renderBubbleContent('');
                } else {
                    setDialogSourceForPet(petId, { kind: 'default' }, summary, getCurrentSection());
                    renderBubbleContent(runtime.currentDialogPayload);
                }
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
            const petProfile = getPetProfile(petId);
            const displayMessage = petProfile.silentDialogs ? '' : message;
            runtime.dialogSource = { kind: 'fixed', message };
            assignRuntimeDialog(petId, displayMessage);
            renderBubbleContent(runtime.currentDialogPayload);
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
                return 'hop';
            }
            if (runtime.interactionMode === 'headpatAnnoyed') {
                const petProfile = getPetProfile(petId);
                return petProfile.pixelFrames.headpatAnnoyed ? 'headpatAnnoyed' : 'idle';
            }
            const petProfile = getPetProfile(petId);
            const petState = getPetStateById(petId);
            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);

            if (['shiba', 'cat'].includes(petId) && runtime.interactionMode === 'normal') {
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
            if (runtime.interactionMode === 'ballPose') {
                return getPetMoodLabel(petId, 'ballPose', 'idle', levelInfo.level);
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
            renderBubbleContent(runtime.currentDialogPayload);
            setAnim(picked.anim || 'idle', petId);
            sync('headpat-easter');
            return true;
        }

        function maybeTriggerBallPose(petId, runtime, baseMood) {
            if (!['shiba', 'cat'].includes(petId) || runtime.interactionMode !== 'normal' || baseMood !== 'idle') {
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
                assignRuntimeDialog(petId, '吧唧吧唧');
                setInteractionMode('dazed', DAZED_DURATION_MS, petId);
                renderBubbleContent(runtime.currentDialogPayload);
                setAnim('sleepy', petId);
                sync('sleeping-wake');
                return true;
            }

            setDialogSourceForPet(petId, { kind: 'sleepWake', index: runtime.sessionSleepWakeCount - 1 });
            renderBubbleContent(runtime.currentDialogPayload);
            setAnim('sleep', petId);
            sync('sleeping-interaction');
            return true;
        }

        const TEMPORARY_ANIM_KEYS = new Set([
            'hop',
            'cheer',
            'cola',
            'eat',
            'sad',
            'reward',
            'leash',
            'blink',
            'headpatAnnoyed',
            'thinking'
        ]);

        function pickPetAnim(petId, preferredAnims, fallbackAnim = 'idle') {
            const petProfile = getPetProfile(petId);
            const candidates = Array.isArray(preferredAnims) ? preferredAnims : [preferredAnims];
            const matched = candidates.find((animKey) => animKey && petProfile.pixelFrames[animKey]);
            if (matched) {
                return matched;
            }
            return petProfile.pixelFrames[fallbackAnim] ? fallbackAnim : 'idle';
        }

        function getTemporaryAnimDuration(animKey) {
            if (animKey === 'hop') {
                return 620;
            }
            if (animKey === 'cheer' || animKey === 'reward' || animKey === 'leash') {
                return 820;
            }
            if (animKey === 'cola'
                || animKey === 'eat'
                || animKey === 'sad'
                || animKey === 'blink'
                || animKey === 'headpatAnnoyed'
                || animKey === 'thinking') {
                return 980;
            }
            return 0;
        }

        function setAnim(nextAnim, petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            const petProfile = getPetProfile(petId);
            const resolvedAnim = pickPetAnim(petId, nextAnim || 'idle', 'idle');
            const previousAnim = runtime.animState;
            runtime.animState = resolvedAnim;

            if (getCurrentPetId() === petId) {
                renderPetAnimFrame(petProfile, resolvedAnim, petId, {
                    forceRestart: previousAnim !== resolvedAnim || activeSpritePetId !== petId || activeSpriteAnim !== resolvedAnim
                });
            }

            if (motionTimer) {
                clearTimeout(motionTimer);
                motionTimer = null;
            }

            const duration = getTemporaryAnimDuration(resolvedAnim);
            if (duration > 0) {
                const targetPetId = petId;
                motionTimer = setTimeout(() => {
                    const targetSummary = buildSummaryForPet(targetPetId);
                    const fallbackAnim = getVisualMood(targetPetId, targetSummary.mood);
                    const targetRuntime = getPetRuntime(targetPetId);
                    targetRuntime.animState = fallbackAnim;
                    if (getCurrentPetId() === targetPetId) {
                        const targetProfile = getPetProfile(targetPetId);
                        renderPetAnimFrame(targetProfile, fallbackAnim, targetPetId, { forceRestart: true });
                    }
                    motionTimer = null;
                }, duration);
            }
        }

        function pickPracticeLine(variants, seed) {
            if (!Array.isArray(variants) || !variants.length) {
                return '';
            }
            const numericSeed = Number(seed) || 0;
            return variants[Math.abs(numericSeed) % variants.length];
        }

        function normalizePracticeHintToken(value) {
            return String(value || '').trim().toLowerCase().replace(/[_\s]+/g, '-');
        }

        function collectPracticeHintTokens(detail) {
            const normalized = detail && typeof detail === 'object' ? detail : {};
            const meta = normalized.meta && typeof normalized.meta === 'object' ? normalized.meta : {};
            return [
                normalized.subType,
                normalized.mode,
                meta.subType,
                meta.type,
                meta.readingType,
                meta.articleType,
                meta.listeningType,
                meta.category,
                meta.section,
                meta.stageId
            ]
                .map(normalizePracticeHintToken)
                .filter(Boolean);
        }

        function matchesPracticeHint(tokens, patterns) {
            if (!Array.isArray(tokens) || !tokens.length) {
                return false;
            }
            return patterns.some((pattern) => tokens.some((token) => token.includes(pattern)));
        }

        function resolveReadingPracticeKey(detail) {
            const tokens = collectPracticeHintTokens(detail);
            if (matchesPracticeHint(tokens, ['short', '/s/', '短文', 'short-text'])) {
                return 'reading_short';
            }
            if (matchesPracticeHint(tokens, ['middle', 'medium', '中篇'])) {
                return 'reading_middle';
            }
            if (matchesPracticeHint(tokens, ['long', '长文'])) {
                return 'reading_long';
            }
            if (matchesPracticeHint(tokens, ['info', 'information', '检索'])) {
                return 'reading_info';
            }
            if (matchesPracticeHint(tokens, ['integrated', '综合'])) {
                return 'reading_integrated';
            }
            return 'reading';
        }

        function resolveListeningPracticeKey(detail) {
            const tokens = collectPracticeHintTokens(detail);
            if (matchesPracticeHint(tokens, ['immediate', 'response', '即时'])) {
                return 'listening_immediate';
            }
            if (matchesPracticeHint(tokens, ['task', '課題', '课题'])) {
                return 'listening_task';
            }
            if (matchesPracticeHint(tokens, ['summary', '概要'])) {
                return 'listening_summary';
            }
            if (matchesPracticeHint(tokens, ['point', '重点', 'point-comprehension'])) {
                return 'listening_point';
            }
            if (matchesPracticeHint(tokens, ['integrated', '综合'])) {
                return 'listening_integrated';
            }
            return 'listening';
        }

        function resolveGrammarPracticeKey(detail) {
            const tokens = collectPracticeHintTokens(detail);
            if (matchesPracticeHint(tokens, ['textbook'])) {
                return 'textbook';
            }
            if (matchesPracticeHint(tokens, ['sort', 'order', '排序'])) {
                return 'grammar_sort';
            }
            if (matchesPracticeHint(tokens, ['kakujyo', '格助词', '格助詞', 'case-particle'])) {
                return 'grammar_kakujyo';
            }
            return 'grammar';
        }

        function resolvePracticeModuleKey(detail) {
            if (!detail || typeof detail !== 'object') {
                return 'general';
            }
            if (detail.phase === 'reward_hit') {
                return 'reward';
            }
            if (detail.module === 'vocabulary') {
                return 'vocabulary';
            }
            if (detail.module === 'reading') {
                return resolveReadingPracticeKey(detail);
            }
            if (detail.module === 'listening') {
                return resolveListeningPracticeKey(detail);
            }
            if (detail.module === 'grammar') {
                return resolveGrammarPracticeKey(detail);
            }
            return 'general';
        }

        function buildPracticeMessage(detail) {
            const normalized = detail && typeof detail === 'object' ? detail : {};
            const moduleKey = resolvePracticeModuleKey(normalized);
            const phase = String(normalized.phase || 'enter');
            const seed = Number(normalized.questionIndex || 0) + Number(normalized.streak || 0);
            const petId = getCurrentPetId();

            const practiceDialogMap = {
                shiba: {
                    vocabulary: {
                        enter: ['汪！新的一波单词来啦，{name}帮你叼着词汇本！'],
                        answer_correct: ['啃下这个词啦！真香！', '答对啦！{name}的尾巴为你摇起来！'],
                        answer_wrong: ['哎呀，这个词溜走了，{name}陪你再抓一次！', '唔...这个词好难啃，我们再试着咬一口？'],
                        streak: ['连对啦！{name}跟在你后面跑得好开心！'],
                        near_clear: ['剩下最后几个词啦，一口气啃完！'],
                        clear: ['这轮词汇都被你吃透啦，{name}为你撒花！'],
                        perfect_clear: ['全对！{name}现在想给你一个大大的熊抱！']
                    },
                    grammar: {
                        enter: ['语法就像拼积木，{name}把零件都给你找齐啦！'],
                        answer_correct: ['拼对啦！这句语法稳稳落地！', '接续选对啦，{name}给你点个赞！'],
                        answer_wrong: ['这里的零件好像拼错位置了，再看看？', '汪呜...这题有点坑，我们重新理一下接续好不好？'],
                        streak: ['手感越来越好啦！{name}都看呆了！'],
                        near_clear: ['就差最后几道语法题啦，加油加油！'],
                        clear: ['这轮语法终于通关啦，{name}的爪子都拍红了！'],
                        perfect_clear: ['一题都没错！{name}觉得你现在闪闪发光！']
                    },
                    grammar_sort: {
                        enter: ['要把句子排好队哦，{name}在终点等你！'],
                        answer_correct: ['队伍排得整整齐齐！漂亮！', '这句拼得太顺啦！'],
                        answer_wrong: ['哎呀，句子被排得有点乱，{name}陪你重新排！', '顺序有点小碰壁，别急，再试一次。'],
                        clear: ['排序题通关！{name}觉得你的逻辑超棒！'],
                        perfect_clear: ['行云流水！{name}的眼睛一直跟着你的鼠标转呢！']
                    },
                    grammar_kakujyo: {
                        enter: ['格助词就像小路标，{name}帮你一起找方向！'],
                        answer_correct: ['路标插对啦！方向完全正确！', '这个格助词选得好准！'],
                        answer_wrong: ['路标好像指错方向了，{name}陪你再找找。', '唔，这里的格关系有点复杂，我们再看一眼。'],
                        clear: ['格助词这关走通啦，{name}跑得好过瘾！'],
                        perfect_clear: ['完美踩中每一个路标！{name}对你佩服得五体投地！']
                    },
                    textbook: {
                        enter: ['翻开教材啦！{name}已经趴在书本旁边准备好咯。'],
                        review: ['遇到错题别怕，{name}陪你把坑填平！'],
                        answer_correct: ['这个文法点抓得真牢！', '做对啦！{name}蹭蹭你以示鼓励！'],
                        answer_wrong: ['哎呀，这里绊了一下。没关系，{name}拉你起来再看一遍。', '这个文法点好滑呀，我们再仔细抓一次。'],
                        streak: ['连对节奏超棒！{name}的尾巴摇得停不下来！'],
                        near_clear: ['这课马上就学完啦，冲鸭！'],
                        clear: ['这一课的知识都被你装进脑子里啦，辛苦啦！'],
                        perfect_clear: ['全对通关！今天表现太棒了，{name}要奖励你多摸几下！'],
                        stage_clear: ['这一大段终于学完啦，{name}陪你伸个懒腰~'],
                        stage_perfect_clear: ['完美通关这一段！{name}现在想满屋子跑酷来庆祝！']
                    },
                    reading: {
                        enter: ['文章有点长哦，{name}拿好放大镜陪你一起找线索！'],
                        answer_correct: ['找到线索啦！汪汪！', '这句理解得完全没毛病！'],
                        answer_wrong: ['哎呀，好像看漏了什么，{name}陪你再读一遍这里。', '唔...这里的判断有点偏了，别急，慢慢来。'],
                        streak: ['阅读状态满分！{name}看你看得好入迷。'],
                        near_clear: ['马上就要读完啦，别松懈哦！'],
                        clear: ['长长的文章读完啦！{name}觉得你的耐心超级好！'],
                        perfect_clear: ['全对！这么难的文章都没难倒你，{name}为你骄傲！']
                    },
                    reading_short: {
                        enter: ['短文讲究快准狠，{name}陪你一起抓重点！'],
                        answer_correct: ['短文的线索抓到了。'],
                        answer_wrong: ['是不是读得太快啦？{name}陪你再仔细看看这里。']
                    },
                    reading_middle: {
                        enter: ['中篇要注意段落关系，{name}帮你记着上一段讲了什么！'],
                        answer_correct: ['段落逻辑理得很顺嘛！'],
                        answer_wrong: ['这两段的关系好像没连上，{name}陪你再理一理。']
                    },
                    reading_long: {
                        enter: ['长文别怕！有{name}在，我们顺着主线慢慢走。'],
                        answer_correct: ['主线抓得很紧，不错不错！'],
                        answer_wrong: ['是不是被长句子绕晕啦？来，{name}陪你回到主干看看。']
                    },
                    reading_info: {
                        enter: ['找信息就像玩寻宝游戏！{name}的鼻子最灵了，一起找！'],
                        answer_correct: ['宝藏找到啦！定位超级准！'],
                        answer_wrong: ['好像找错地方了，{name}嗅嗅...再去别处看看吧！']
                    },
                    listening: {
                        enter: ['耳朵竖起来！{name}陪你一起捕捉每一个音节！'],
                        answer_correct: ['听得很清楚嘛！这句稳了！', '这句接住了！{name}的耳朵也跟着动了一下！'],
                        answer_wrong: ['哎呀，这句好像有点含糊，我们再听一次好不好？', '是不是听走神啦？{name}叫醒你，重新听哦！'],
                        streak: ['听力手感极佳！{name}的尾巴都跟着节奏在摇！'],
                        near_clear: ['快听完这组啦，坚持住！'],
                        clear: ['听力闯关成功！{name}的耳朵终于可以休息啦。'],
                        perfect_clear: ['一个都没听漏！你现在的听力简直比{name}还要灵敏！']
                    },
                    listening_immediate: {
                        enter: ['即时应答反应要快哦！{name}已经准备好随时起跳了！'],
                        answer_correct: ['反应超快！接得漂亮！'],
                        answer_wrong: ['这句对话没接上呢，{name}陪你再听听对方的语气。']
                    },
                    listening_task: {
                        enter: ['要听清他们接下来要做什么哦，{name}帮你拿笔记本来记！'],
                        answer_correct: ['任务关系听明白了。'],
                        answer_wrong: ['哎呀，人物或者任务好像弄混了，我们再梳理一遍。']
                    },
                    listening_summary: {
                        enter: ['这题要听整体的大意哦，{name}陪你一起抓核心！'],
                        answer_correct: ['大意抓到了，就是这个意思！'],
                        answer_wrong: ['是不是被细节干扰啦？{name}陪你再听一遍整体方向。']
                    },
                    listening_point: {
                        enter: ['重点词千万别漏掉！{name}的雷达已经开启啦！'],
                        answer_correct: ['重点词捕捉成功！汪！'],
                        answer_wrong: ['重点词好像没听到，{name}陪你再仔细搜寻一遍！']
                    },
                    listening_integrated: {
                        enter: ['这题信息量好大，{name}帮你分摊一点注意力！'],
                        answer_correct: ['几条信息都对上了！真厉害！'],
                        answer_wrong: ['信息有点绕在一起了，{name}陪你把线索重新拆开。']
                    },
                    reward: {
                        reward_hit: ['哇！天空掉奖励啦！{name}跑去帮你捡过来！', '好运降临！{name}开心得原地转圈圈！']
                    },
                    general: {
                        enter: ['准备好了吗？{name}陪你开始咯！'],
                        answer_correct: ['答对啦！{name}开心！'],
                        answer_wrong: ['选错啦，别灰心，{name}陪你再看一次。'],
                        streak: ['连对！{name}为你打call！'],
                        near_clear: ['快结束啦，加油！'],
                        clear: ['这轮做完啦，辛苦辛苦！'],
                        perfect_clear: ['全对通关！{name}觉得你今天超棒！'],
                        reward_hit: ['有奖励！快去看看！']
                    }
                },
                cat: {
                    vocabulary: {
                        enter: ['先把词义认清，笨蛋。别一上来就瞎猜，本喵{name}看着呢。'],
                        answer_correct: ['算你没瞎选。别停下，继续。', '勉强记住了一个，别得意。'],
                        answer_wrong: ['（死亡凝视）这个词又滑走了，你昨天晚上做梦吃掉了吗？', '别死记硬背！本大人{name}都替你着急。'],
                        streak: ['哼，连对了几次，还不算太笨嘛。'],
                        near_clear: ['最后几题了，要是错一个，本喵{name}就把你的笔推下去。'],
                        clear: ['这轮词汇总算完了。本喵{name}的眼睛都看酸了。'],
                        perfect_clear: ['全对？肯定是我今天掉的猫毛给你带来了智慧。']
                    },
                    grammar: {
                        enter: ['语法要看结构，别光看表面。连本喵{name}都懂的道理。'],
                        answer_correct: ['这条语法你算是看懂了，没白费我一番苦心。'],
                        answer_wrong: ['接续这里又滑了！本喵{name}真想用爪子给你脑门来一下。', '这题明明是个坑，你还乐呵呵地往里跳，笨蛋！'],
                        streak: ['语法点开始串起来了，算你开窍了。'],
                        near_clear: ['快结束了，最后几题给我打起精神来！'],
                        clear: ['这轮语法点算是理顺了，本大人{name}要去理理毛了。'],
                        perfect_clear: ['这一轮语法表现很整齐，破例允许你喊我一声“喵主子”。']
                    },
                    grammar_sort: {
                        enter: ['排序题先理句骨架，别瞎塞。塞错了我可咬你哦。'],
                        answer_correct: ['顺序对了，这句总算像个人说的话了。'],
                        answer_wrong: ['句子被你排成什么样了？本喵{name}听了都觉得拗口！'],
                        clear: ['这轮排序题算是被你理顺了。'],
                        perfect_clear: ['顺序感不错，今天脑子还挺在线嘛，笨蛋。']
                    },
                    grammar_kakujyo: {
                        enter: ['格助词别乱蒙，看清前后关系再动手！'],
                        answer_correct: ['这个助词你放对了，勉强夸你一句。'],
                        answer_wrong: ['这里的格关系全乱了！本大人{name}的尾巴都要烦躁地甩起来了。'],
                        clear: ['这轮格助词还算像样。'],
                        perfect_clear: ['格助词踩得挺稳。本喵{name}收回刚才叫你笨蛋的话。']
                    },
                    textbook: {
                        enter: ['教材语法别囫囵吞，本喵{name}在旁边盯着你，老老实实看清楚。'],
                        review: ['既然在补漏洞，就别想着糊弄过去。我的爪子可不长眼。'],
                        answer_correct: ['这个文法点总算接住了，还不算太无药可救。'],
                        answer_wrong: ['这条文法你还没吃透！本喵{name}真想一脚踩在你的错误选项上。'],
                        streak: ['这几题总算连起来了。保持这个节奏。'],
                        near_clear: ['快收尾了，别在最后犯懒惹我生气。'],
                        clear: ['这一课的教材点算是收下来不少，今天放过你了。'],
                        perfect_clear: ['整课都做得很稳，这次我就不挑刺了，干得好。'],
                        stage_clear: ['这一段总算被你啃完了，本喵也歇会儿。'],
                        stage_perfect_clear: ['这一段吃得挺干净，要是考试也能这样，本喵就放心了。']
                    },
                    reading: {
                        enter: ['先抓文章线索，别一头扎进细节出不来，笨蛋。'],
                        answer_correct: ['线索抓对了。算你有长进。'],
                        answer_wrong: ['这处线索被你漏过去了。你的眼睛是摆设吗？'],
                        streak: ['阅读节奏还在，别被本喵{name}打扰了，继续。'],
                        near_clear: ['就剩最后几题，别忽然眼花看错！'],
                        clear: ['这篇算是被你顺过一遍了，辛苦你了（才怪）。'],
                        perfect_clear: ['整篇读得很稳，少见。今天允许你多吸我两下。']
                    },
                    reading_short: {
                        enter: ['短文先抓关键词，别急着脑补，你以为你写小说呢？'],
                        answer_correct: ['短文的关键点抓到了。'],
                        answer_wrong: ['短文这题就是被你看快了。心急吃不了热猫条！']
                    },
                    reading_middle: {
                        enter: ['中篇先看段落关系，别散着读，不然本喵{name}鄙视你。'],
                        answer_correct: ['段落关系抓到了，算你脑子清楚。'],
                        answer_wrong: ['这段逻辑还没理顺吧？本大人{name}一眼就看出来了。']
                    },
                    reading_long: {
                        enter: ['长文先盯主线，别在细枝末节里打转，懂了吗？'],
                        answer_correct: ['主线没丢，这题抓得行。'],
                        answer_wrong: ['主线被你吃了吗？再回去重读一遍笨蛋！']
                    },
                    reading_info: {
                        enter: ['信息检索先找定位，别瞎翻，本喵{name}看着都头晕。'],
                        answer_correct: ['定位对了，信息自然就出来了。'],
                        answer_wrong: ['这条信息还没被你抓到，再换个点找！别发呆！']
                    },
                    listening: {
                        enter: ['先把耳朵打开，别只靠猜。本喵{name}的耳朵都比你灵。'],
                        answer_correct: ['这句听得不错。'],
                        answer_wrong: ['这句又滑过去了，笨蛋，集中注意力重听！'],
                        streak: ['听力节奏还在，别断。'],
                        near_clear: ['快结束了，最后几句给本喵盯紧点。'],
                        clear: ['这组听力总算收下来了，我耳朵都听茧子了。'],
                        perfect_clear: ['整组听得很顺，表现不差。算你今天没白学。']
                    },
                    listening_immediate: {
                        enter: ['即时应答先抓语气和关系，听不懂语气活该你选错。'],
                        answer_correct: ['这句回应接对了。'],
                        answer_wrong: ['这题你听不懂别人的言外之意吗？本喵{name}都替你捉急。']
                    },
                    listening_task: {
                        enter: ['课题理解先理清任务，不然只会越听越乱。'],
                        answer_correct: ['任务关系听明白了。'],
                        answer_wrong: ['这题的人物和任务还没听清吧？重放！']
                    },
                    listening_summary: {
                        enter: ['概要理解先抓大意，别被细节带跑。'],
                        answer_correct: ['大意抓到了，算你机灵。'],
                        answer_wrong: ['概要这题你听得太碎了，抓不住重点的笨蛋。']
                    },
                    listening_point: {
                        enter: ['重点理解盯关键词，重点自己会浮出来。'],
                        answer_correct: ['重点听到了，干得好。'],
                        answer_wrong: ['重点词可能从你耳边溜走了，本大人{name}命令你再听一遍。']
                    },
                    listening_integrated: {
                        enter: ['综合理解先把几条线分清，乱成一团毛线本喵可不帮你解。'],
                        answer_correct: ['这题几条线都接住了，厉害。'],
                        answer_wrong: ['综合这题先把关系重新听清，别凭直觉瞎选！']
                    },
                    reward: {
                        reward_hit: ['奖励来了，去看看你又抽到了什么。本喵才不好奇呢。', '抽签结果到了，别发呆，快点点开！']
                    },
                    general: {
                        enter: ['开始吧，别磨蹭，本大人{name}时间很宝贵的。'],
                        answer_correct: ['这题对了。没辜负我盯着你。'],
                        answer_wrong: ['这题不行，再看。本喵的爪子已经蠢蠢欲动了。'],
                        streak: ['节奏还不错。'],
                        near_clear: ['快结束了。别惹我发脾气。'],
                        clear: ['这一轮做完了。你可以休息一下了。'],
                        perfect_clear: ['这一轮表现还挺整齐。本喵{name}今天就不骂你了。'],
                        reward_hit: ['奖励到了，去看。']
                    }
                }
            };

            const dialogMap = practiceDialogMap[petId] || practiceDialogMap.shiba;
            const phaseKey = moduleKey === 'textbook' && normalized.mode === 'stage' && (phase === 'clear' || phase === 'perfect_clear')
                ? `stage_${phase}`
                : phase;

            const fallbackChain = [];
            if (moduleKey.startsWith('reading_')) {
                fallbackChain.push(moduleKey, 'reading');
            } else if (moduleKey.startsWith('listening_')) {
                fallbackChain.push(moduleKey, 'listening');
            } else if (moduleKey === 'grammar_sort' || moduleKey === 'grammar_kakujyo') {
                fallbackChain.push(moduleKey, 'grammar');
            } else {
                fallbackChain.push(moduleKey);
            }
            fallbackChain.push('general');

            const variants = fallbackChain.reduce((current, key) => {
                if (current && current.length) {
                    return current;
                }
                return (dialogMap[key] && (dialogMap[key][phaseKey] || dialogMap[key][phase])) || [];
            }, []);

            return pickPracticeLine(variants, seed);
        }

        function buildPracticeAnim(detail) {
            const phase = String(detail && detail.phase ? detail.phase : 'enter');
            const petId = getCurrentPetId();
            if (phase === 'answer_wrong') {
                return pickPetAnim(petId, ['sad', 'sleepy'], 'idle');
            }
            if (phase === 'streak' || phase === 'clear' || phase === 'perfect_clear' || phase === 'reward_hit') {
                return pickPetAnim(petId, ['reward', 'cheer'], 'idle');
            }
            if (phase === 'answer_correct') {
                return pickPetAnim(petId, ['cheer', 'hop'], 'idle');
            }
            if (phase === 'review') {
                return pickPetAnim(petId, ['thinking', 'blink'], 'idle');
            }
            return 'idle';
        }

        function reactToPractice(detail) {
            const normalized = detail && typeof detail === 'object' ? detail : {};
            const phase = String(normalized.phase || '');
            if (!phase) {
                return false;
            }

            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            const now = Date.now();
            const key = [
                resolvePracticeModuleKey(normalized),
                normalized.subType || '',
                normalized.mode || '',
                phase,
                normalized.questionIndex || 0,
                normalized.streak || 0,
                normalized.meta && normalized.meta.stageId ? normalized.meta.stageId : ''
            ].join(':');
            const bypassCooldown = phase === 'clear' || phase === 'perfect_clear' || phase === 'reward_hit';

            if (!bypassCooldown && runtime.practiceReactionAt && (now - runtime.practiceReactionAt) < PRACTICE_FEEDBACK_COOLDOWN_MS) {
                return false;
            }
            if (!bypassCooldown && runtime.practiceReactionKey === key && (now - runtime.practiceReactionAt) < PRACTICE_MAJOR_DURATION_MS) {
                return false;
            }

            const message = buildPracticeMessage(normalized);
            if (!message) {
                return false;
            }

            const durationMs = bypassCooldown ? PRACTICE_MAJOR_DURATION_MS : PRACTICE_FEEDBACK_DURATION_MS;
            runtime.practiceReactionAt = now;
            runtime.practiceReactionKey = key;
            clearWelcomeLock({ keepCurrentDialog: true });
            setInteractionMode('normal', durationMs, petId);
            showInteractionDialog(message, buildPracticeAnim(normalized), 'interaction');
            return true;
        }

        function reactToLotteryResult(detail) {
            const normalized = detail && typeof detail === 'object' ? detail : {};
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            const now = Date.now();

            if (runtime.practiceReactionKey === `lottery:${normalized.title || ''}:${normalized.rarity || ''}` && (now - runtime.practiceReactionAt) < PRACTICE_MAJOR_DURATION_MS) {
                return false;
            }

            const message = buildLotteryReactionMessage(petId, normalized, getCurrentPetName());
            if (!message) {
                return false;
            }

            runtime.practiceReactionAt = now;
            runtime.practiceReactionKey = `lottery:${normalized.title || ''}:${normalized.rarity || ''}`;
            clearWelcomeLock({ keepCurrentDialog: true });
            setInteractionMode('normal', PRACTICE_MAJOR_DURATION_MS, petId);
            const petProfile = getPetProfile(petId);
            const shouldCelebrate = normalized.didUnlockColaTreat || normalized.isNew || normalized.isRare;
            showInteractionDialog(
                message,
                shouldCelebrate && petProfile.pixelFrames.reward ? 'reward' : 'blink',
                'lottery'
            );
            return true;
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

            closeGrammarPeek();
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
            const quietPracticeSurface = isPracticeQuietSurface();
            const currentSurfaceType = getSurfaceType();
            const didExpireInteraction = reconcileInteractionMode(petId);
            if (petState.lastOpenedSection !== currentSection) {
                petState.lastOpenedSection = currentSection;
                savePetState(state);
            }

            visitMeta = getVisitMetaSnapshot(petId);
            summary = buildLearningSummary(config, petState, visitMeta);

            if (reason === 'boot' && runtime.welcomePending) {
                if (quietPracticeSurface) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                } else {
                    setDialogSourceForPet(petId, { kind: 'welcome' }, summary, currentSection);
                    petState.lastWelcomedAt = Date.now();
                    runtime.welcomePending = false;
                    runtime.welcomeLocked = true;
                    savePetState(state);
                }
            } else if ((reason === 'interaction-timeout' || didExpireInteraction) && !runtime.welcomeLocked) {
                if (quietPracticeSurface) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                } else {
                    setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
                }
            } else if (
                reason === 'section-change'
                && !runtime.welcomeLocked
                && runtime.interactionMode === 'normal'
            ) {
                if (quietPracticeSurface) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                } else {
                    setDialogSourceForPet(petId, { kind: 'section-entry' }, summary, currentSection);
                }
            } else if (
                (reason === 'boot'
                    || reason === 'toggle'
                    || reason === 'modal'
                    || reason === 'resize'
                    || reason === 'pet-switch'
                    || reason === 'collection'
                    || reason === 'welcome-cleared'
                    || reason === 'leash')
                && !runtime.welcomeLocked
                && runtime.interactionMode === 'normal'
            ) {
                if (quietPracticeSurface) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                } else {
                    setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
                }
            } else if (reason === 'name' || reason === 'interaction' || reason === 'treat' || reason === 'headpat' || reason === 'sleeping-interaction' || reason === 'sleeping-wake' || reason === 'dazed-interaction' || reason === 'treat-cooldown') {
                assignRuntimeDialog(petId, resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection));
            } else if (reason === 'idle-rotation' && runtime.interactionMode === 'normal') {
                runtime.welcomeLocked = false;
                setDialogSourceForPet(
                    petId,
                    { kind: 'default' },
                    summary,
                    currentSection,
                    {
                        seedSuffix: `rotate-${runtime.idleRotationTick}`,
                        forceGrammarIdle: runtime.idleRotationTick === 1
                    }
                );
            } else if (!runtime.currentDialog) {
                if (quietPracticeSurface) {
                    runtime.dialogSource = { kind: 'default' };
                    assignRuntimeDialog(petId, '');
                } else {
                    setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
                }
            } else {
                if (quietPracticeSurface && runtime.interactionMode === 'normal' && runtime.dialogSource.kind === 'default') {
                    assignRuntimeDialog(petId, '');
                } else {
                    assignRuntimeDialog(
                        petId,
                        resolveDialogSourceForPet(
                            petId,
                            runtime.dialogSource,
                            summary,
                            currentSection,
                            runtime.dialogSource.kind === 'default'
                                ? { seedSuffix: `rotate-${runtime.idleRotationTick}` }
                                : {}
                        )
                    );
                }
            }

            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            if (levelInfo.isMax) {
                unlockPetMaxRewardCard(petId);
            }
            const isExpanded = isHomeSurface() && !petSettings.collapsed && !modalOpen;
            if ((!isExpanded || isCrossPageSurface()) && collectionOpen) {
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
            leashBtn.hidden = !isHomeSurface();
            leashBtn.textContent = isFollowOutsideHomeEnabled(settings) ? '牵绳中' : '牵绳';
            leashBtn.classList.toggle('is-active', isFollowOutsideHomeEnabled(settings));
            renderActivities(activitiesEl, summary.recentActivities, summary.recommendedNext);
            root.dataset.expanded = String(isExpanded);
            root.dataset.modalOpen = String(modalOpen);
            root.dataset.collectionOpen = String(collectionOpen);
            root.dataset.mood = visualMood;
            root.dataset.surface = currentSurfaceType;
            root.dataset.draggable = String(isHomeSurface() && petSettings.collapsed && !modalOpen);
            root.dataset.practiceQuiet = String(quietPracticeSurface);
            root.dataset.species = petProfile.species;
            toggleEl.setAttribute('aria-expanded', String(isExpanded));
            toggleEl.setAttribute('aria-label', `${isExpanded ? '收起' : '打开'}${petProfile.label}陪学面板`);
            const bubblePayload = runtime.currentDialogPayload && runtime.currentDialogPayload.text
                ? runtime.currentDialogPayload
                : (!quietPracticeSurface ? normalizeDialogPayload(resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection)) : createPlainDialogPayload(''));
            const shouldShowBubble = Boolean(bubblePayload.text);
            root.dataset.bubbleVisible = String(shouldShowBubble);
            renderBubbleContent(shouldShowBubble ? bubblePayload : createPlainDialogPayload(''));

            const hasGrammarToken = shouldShowBubble
                && Array.isArray(bubblePayload.segments)
                && bubblePayload.segments.some((segment) => segment && segment.type === 'grammar-token');
            const nextVisualMood = hasGrammarToken && petProfile.pixelFrames.thinking && runtime.interactionMode === 'normal'
                ? 'thinking'
                : visualMood;

            if (!TEMPORARY_ANIM_KEYS.has(runtime.animState)) {
                setAnim(nextVisualMood, petId);
            } else {
                renderPetAnimFrame(petProfile, runtime.animState, petId);
            }

            applyAnchorPosition();
            scheduleHomepageIdleRotation();
        }

        function setModalState(isOpen) {
            modalOpen = Boolean(isOpen);
            if (modalOpen) {
                collectionOpen = false;
                closeGrammarPeek();
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
            if (isCrossPageSurface() || !petSettings.collapsed || modalOpen || event.button > 0) {
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

            const passiveControl = event.target.closest('[data-pet-collection-trigger], [data-pet-collection], [data-pet-name-button], [data-pet-name-editor], [data-pet-bubble], [data-pet-grammar-overlay]');
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
            closeGrammarPeek();
            if (isCrossPageSurface()) {
                sync('toggle');
                return;
            }
            const petSettings = getCurrentPetSettings();
            const runtime = getCurrentPetRuntime();
            petSettings.collapsed = !petSettings.collapsed;
            persistSettings();
            if (runtime.interactionMode === 'normal') {
                setDialogSourceForPet(getCurrentPetId(), { kind: 'default' }, summary, getCurrentSection());
            }
            sync('toggle');
        });

        leashBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const nextValue = !isFollowOutsideHomeEnabled(settings);
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            closeGrammarPeek();
            setFollowOutsideHomeEnabled(nextValue);
            if (nextValue) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: FOLLOW_OUTSIDE_HOME_DIALOGS[petId] || FOLLOW_OUTSIDE_HOME_DIALOGS.shiba }, summary, getCurrentSection());
                setInteractionMode('normal', INTERACTION_CHAIN_MS, petId);
                const petProfile = getPetProfile(petId);
                setAnim(petProfile.pixelFrames.leash ? 'leash' : (petId === 'cat' ? 'hop' : 'cheer'), petId);
            } else if (getCurrentPetRuntime().interactionMode === 'normal') {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, getCurrentSection());
                setAnim(getVisualMood(petId, summary.mood), petId);
            }
            sync('leash');
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

            renderBubbleContent(runtime.currentDialogPayload);
            if (!['headpatGentle', 'headpatPlayful', 'headpatAnnoyed'].includes(runtime.interactionMode)) {
                const headpatAnim = runtime.sessionHeadpatChainCount >= 4
                    ? pickPetAnim(petId, ['headpatAnnoyed', 'sad', 'hop'], 'idle')
                    : pickPetAnim(petId, ['blink', 'cheer'], 'idle');
                setAnim(headpatAnim, petId);
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
                showInteractionDialog(
                    getTreatCooldownDialog(petId),
                    pickPetAnim(petId, ['headpatAnnoyed', 'sad'], 'idle'),
                    'treat-cooldown'
                );
                return;
            }

            runtime.sessionTreatCount += 1;

            if (runtime.sessionTreatCount === 1) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 0 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim(pickPetAnim(petId, ['eat', 'cheer'], 'idle'), petId);
            } else if (runtime.sessionTreatCount === 2) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 1 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim(pickPetAnim(petId, ['eat', 'cheer'], 'idle'), petId);
            } else if (runtime.sessionTreatCount === 3) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 2 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim(pickPetAnim(petId, ['eat', 'cheer'], 'idle'), petId);
            } else if (runtime.sessionTreatCount === 4) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 4) }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim(pickPetAnim(petId, ['headpatAnnoyed', 'sad'], 'idle'), petId);
            } else if (runtime.sessionTreatCount === 5) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 5) }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim(pickPetAnim(petId, ['headpatAnnoyed', 'sad'], 'idle'), petId);
            } else {
                setDialogSourceForPet(petId, { kind: 'fixed', message: getTreatOverfeedDialog(petId, 'sleep') }, summary, getCurrentSection());
                petState.lastSleepStartedAt = Date.now();
                savePetState(state);
                setInteractionMode('sleeping', 0, petId);
                setAnim('sleep', petId);
            }

            renderBubbleContent(runtime.currentDialogPayload);
            sync('treat');
        });

        collectionTriggerEl.addEventListener('click', (event) => {
            event.stopPropagation();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            closeGrammarPeek();
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

        bubbleEl.addEventListener('click', (event) => {
            const grammarToken = event.target.closest('[data-pet-grammar-token]');
            if (!grammarToken) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            clearWelcomeLock({ keepCurrentDialog: true });
            collectionOpen = false;
            openGrammarPeek(grammarToken.getAttribute('data-pet-grammar-token'));
        });

        if (grammarCloseEl) {
            grammarCloseEl.addEventListener('click', () => {
                closeGrammarPeek();
            });
        }

        if (grammarOverlayEl) {
            grammarOverlayEl.addEventListener('click', (event) => {
                if (event.target === grammarOverlayEl) {
                    closeGrammarPeek();
                }
            });
        }

        collectionGridEl.addEventListener('click', (event) => {
            const optionButton = event.target.closest('[data-pet-collection-option]');
            if (!optionButton) {
                return;
            }

            const nextPetId = optionButton.getAttribute('data-pet-collection-option');
            const collection = getPetCollection();
            if (!isPetVisible(nextPetId) || !collection.unlockedPetIds.includes(nextPetId) || nextPetId === getCurrentPetId()) {
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

            closeGrammarPeek();
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
                renderBubbleContent(runtime.currentDialogPayload);
                setAnim(pickPetAnim(petId, ['sad', 'blink'], 'idle'), petId);
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
            renderBubbleContent(runtime.currentDialogPayload);
            setAnim('cola', petId);
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
            const homepageEntry = event.target.closest('a.feature-card, [data-favorite-add], [data-favorite-edit]');
            if (sectionSwitch) {
                clearWelcomeLock({ keepCurrentDialog: true });
            }
            if (sectionSwitch || homepageEntry) {
                const didCollapse = collapseInteractivePanel({ closeGrammar: Boolean(sectionSwitch || homepageEntry) });
                if (didCollapse) {
                    sync(sectionSwitch ? 'section-change' : 'collection');
                }
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

        const teardownCrossPageMount = () => {
            if (!isCrossPageSurface()) {
                return;
            }
            root.innerHTML = '';
            if (root.parentNode) {
                root.parentNode.removeChild(root);
            }
        };

        const storageHandler = (event) => {
            if (event && event.key && event.key !== PET_SETTINGS_KEY) {
                return;
            }

            settings = loadPetSettings();
            if (isCrossPageSurface() && !shouldMountOnSurfaceType(getSurfaceType())) {
                controller.destroy();
                teardownCrossPageMount();
                return;
            }

            sync('settings-sync');
        };
        window.addEventListener('storage', storageHandler);

        visitMeta = registerVisit(getCurrentPetState());
        if (visitMeta.isFirstVisitToday) {
            awardVisitXp(getCurrentPetId());
        } else {
            savePetState(state);
        }
        savePetSettings(settings);
        sync('boot');

        const controller = {
            sync,
            setModalState,
            recordStudyLaunch,
            reactToPractice,
            reactToLotteryResult,
            awardLabXp(petId, amount) {
                const targetPetId = typeof petId === 'string' && petId.trim() ? petId.trim() : getCurrentPetId();
                const reward = awardBondXp(targetPetId, amount);
                savePetState(state);
                sync('collection');
                return reward;
            },
            destroy() {
                window.removeEventListener('storage', storageHandler);
                window.removeEventListener('resize', resizeHandler);
                document.removeEventListener('click', handlePageInteraction, true);
                clearIdleRotationTimer();
                clearSpriteFrameTimer();
                if (motionTimer) {
                    clearTimeout(motionTimer);
                }
                getPetIds().forEach((petId) => {
                    clearInteractionTimer(petId);
                    clearLevelToastTimer(petId);
                });
            }
        };

        return controller;
    }

    window.HomePetSystem = {
        shouldMountOnSurface(surfaceType = 'home') {
            return shouldMountOnSurfaceType(surfaceType);
        },
        ensureMountRoot(mountSelector = '#home-pet-root') {
            return ensureMountRoot(mountSelector);
        },
        init(config) {
            const normalizedConfig = config || {};
            const surfaceType = String(normalizedConfig.surfaceType || 'home').trim() || 'home';
            if (!shouldMountOnSurfaceType(surfaceType)) {
                return null;
            }
            const mount = document.querySelector(normalizedConfig.mountSelector ? normalizedConfig.mountSelector : '#home-pet-root');
            if (!mount) {
                return null;
            }
            return createController(mount, normalizedConfig);
        },
        initNonHomeSurface(config = {}) {
            const mergedConfig = {
                mountSelector: '#home-pet-root',
                pageShellSelector: '.page-shell, .page-content, .question-block, .container, main, body',
                getActiveSection: () => String(config.activeSection || 'exam'),
                isPracticeQuietSurface: () => true,
                enableGrammarIdleCards: false,
                surfaceType: config.surfaceType || 'practice',
                ...config
            };
            if (!shouldMountOnSurfaceType(mergedConfig.surfaceType)) {
                return null;
            }
            const mount = ensureMountRoot(mergedConfig.mountSelector);
            if (!mount) {
                return null;
            }
            const controller = this.init(mergedConfig);
            if (controller && config.practiceDetail) {
                controller.reactToPractice({
                    phase: 'enter',
                    ...config.practiceDetail
                });
            }
            return controller;
        }
    };
})();
