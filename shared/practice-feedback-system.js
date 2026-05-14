(function(global) {
    'use strict';

    const STYLE_ID = 'n2-practice-feedback-system-style';
    const TOAST_ID = 'n2-practice-pet-toast';
    const TOAST_HIDE_MS = 4200;
    let toastTimer = null;
    let lastSignalKey = '';
    let lastSignalAt = 0;
    let practicePetController = null;
    let petAssetsPromise = null;
    let rewardRuntimePromise = null;
    const recentRewardSignals = new Map();

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .n2-feedback-card {
                border: 1px solid rgba(44, 44, 42, 0.14);
                background: rgba(255, 255, 255, 0.94);
                border-radius: 14px;
                padding: 14px 16px;
                box-shadow: 0 10px 24px rgba(44, 44, 42, 0.08);
                color: #343432;
                font-family: "Hiragino Sans", "Noto Sans SC", "Noto Sans JP", "Microsoft YaHei", sans-serif;
            }
            .n2-feedback-card.is-correct {
                border-color: rgba(67, 143, 91, 0.28);
                background: #f7fcf7;
            }
            .n2-feedback-card.is-wrong,
            .n2-feedback-card.is-empty {
                border-color: rgba(190, 73, 64, 0.24);
                background: #fff8f7;
            }
            .n2-feedback-title {
                margin: 0 0 6px;
                font-size: 0.98rem;
                font-weight: 800;
                letter-spacing: 0.02em;
            }
            .n2-feedback-copy {
                margin: 0;
                font-size: 0.9rem;
                line-height: 1.75;
                color: #66625f;
            }
            .n2-practice-pet-toast {
                position: fixed;
                right: 22px;
                bottom: calc(env(safe-area-inset-bottom, 0px) + 88px);
                z-index: 2400;
                max-width: min(330px, calc(100vw - 32px));
                display: flex;
                align-items: flex-start;
                gap: 10px;
                padding: 12px 14px;
                border: 1px solid rgba(44, 44, 42, 0.14);
                border-radius: 18px;
                background: rgba(255, 252, 247, 0.96);
                box-shadow: 0 16px 38px rgba(44, 44, 42, 0.16);
                color: #343432;
                font-family: "Hiragino Sans", "Noto Sans SC", "Noto Sans JP", "Microsoft YaHei", sans-serif;
                opacity: 0;
                transform: translateY(8px);
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s ease;
            }
            .n2-practice-pet-toast.is-visible {
                opacity: 1;
                transform: translateY(0);
            }
            .n2-practice-pet-mark {
                width: 34px;
                height: 34px;
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;
                border: 1px solid rgba(44, 44, 42, 0.12);
                background: #fff;
                font-size: 0.72rem;
                font-weight: 900;
                letter-spacing: 0.08em;
            }
            .n2-practice-pet-body {
                min-width: 0;
            }
            .n2-practice-pet-name {
                display: block;
                margin-bottom: 2px;
                font-size: 0.76rem;
                font-weight: 800;
                color: #8a5a43;
                letter-spacing: 0.08em;
            }
            .n2-practice-pet-message {
                margin: 0;
                font-size: 0.9rem;
                line-height: 1.62;
                color: #3f3c39;
            }
            @media (max-width: 560px) {
                .n2-practice-pet-toast {
                    left: 14px;
                    right: 14px;
                    bottom: calc(env(safe-area-inset-bottom, 0px) + 76px);
                    max-width: none;
                    padding: 10px 12px;
                    border-radius: 16px;
                }
                .n2-practice-pet-mark {
                    width: 30px;
                    height: 30px;
                    border-radius: 10px;
                    font-size: 0.66rem;
                }
                .n2-practice-pet-message {
                    font-size: 0.84rem;
                    line-height: 1.58;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function pick(list, seed) {
        const items = Array.isArray(list) && list.length ? list : ['继续稳稳来。'];
        const text = String(seed || `${Date.now()}`);
        let hash = 0;
        for (let index = 0; index < text.length; index += 1) {
            hash = ((hash << 5) - hash) + text.charCodeAt(index);
            hash |= 0;
        }
        return items[Math.abs(hash) % items.length];
    }

    function safeParseJSON(rawValue, fallbackValue) {
        if (typeof rawValue !== 'string' || !rawValue.trim()) {
            return fallbackValue;
        }
        try {
            return JSON.parse(rawValue);
        } catch (error) {
            return fallbackValue;
        }
    }

    function getPetIdentity() {
        let rawSettings = '';
        try {
            rawSettings = global.localStorage && global.localStorage.getItem('kiki_pet_settings_v1');
        } catch (error) {
            rawSettings = '';
        }
        const settings = safeParseJSON(rawSettings, {});
        const activeId = String(settings.activePetId || settings.currentPetId || 'shiba').trim() || 'shiba';
        const petProfiles = settings.petProfiles && typeof settings.petProfiles === 'object' ? settings.petProfiles : {};
        const profile = petProfiles[activeId] || petProfiles.shiba || {};
        const customName = String(profile.customName || '').trim();
        return {
            id: activeId === 'cat' ? 'cat' : 'shiba',
            name: customName || (activeId === 'cat' ? '咪咪' : '木木')
        };
    }

    function getPetName() {
        return getPetIdentity().name;
    }

    function isFollowOutsideHomeEnabled() {
        let rawSettings = '';
        try {
            rawSettings = global.localStorage && global.localStorage.getItem('kiki_pet_settings_v1');
        } catch (error) {
            rawSettings = '';
        }
        const settings = safeParseJSON(rawSettings, {});
        return Boolean(settings && settings.followOutsideHome);
    }

    function normalizeHintToken(value) {
        return String(value || '').trim().toLowerCase().replace(/[_\s]+/g, '-');
    }

    function collectHintTokens(detail) {
        const source = detail && typeof detail === 'object' ? detail : {};
        const meta = source.meta && typeof source.meta === 'object' ? source.meta : {};
        return [
            source.module,
            source.subType,
            source.mode,
            meta.module,
            meta.subType,
            meta.type,
            meta.category,
            meta.section,
            meta.stageId,
            meta.readingType,
            meta.articleType,
            meta.listeningType
        ].map(normalizeHintToken).filter(Boolean);
    }

    function matchesHint(tokens, patterns) {
        return patterns.some((pattern) => tokens.some((token) => token.includes(pattern)));
    }

    function resolvePracticeModuleKey(detail) {
        const source = detail && typeof detail === 'object' ? detail : {};
        const tokens = collectHintTokens(source);
        const moduleName = normalizeHintToken(source.module);

        if (moduleName.includes('vocabulary') || matchesHint(tokens, ['n2-verbs', 'n2_verbs', 'vocab'])) {
            return 'vocabulary';
        }
        if (matchesHint(tokens, ['textbook', 'lesson-review'])) {
            return 'textbook';
        }
        if (matchesHint(tokens, ['sort', 'order', '排序'])) {
            return 'grammar_sort';
        }
        if (matchesHint(tokens, ['kakujyo', '格助词', '格助詞', 'case-particle'])) {
            return 'grammar_kakujyo';
        }
        if (moduleName.includes('grammar') || moduleName.includes('try-n2') || matchesHint(tokens, ['keigo', '敬语', '敬語', 'choice', 'cloze', 'grammar-search'])) {
            return 'grammar';
        }
        if (matchesHint(tokens, ['immediate', 'response', '即时'])) {
            return 'listening_immediate';
        }
        if (moduleName.includes('listening')) {
            return 'listening';
        }
        if (matchesHint(tokens, ['short', '/s/', '短文', 'short-reading', 'short-text'])) {
            return 'reading_short';
        }
        if (moduleName.includes('reading')) {
            return 'reading';
        }
        return 'general';
    }

    function getSummaryAccuracy(detail) {
        const source = detail && typeof detail === 'object' ? detail : {};
        const total = Math.max(0, Number(source.total ?? source.questionCount ?? source.answeredCount ?? 0));
        const correct = Math.max(0, Number(source.correct ?? source.correctCount ?? 0));
        if (Number.isFinite(Number(source.accuracy))) {
            const accuracy = Number(source.accuracy);
            return accuracy > 1 ? accuracy / 100 : accuracy;
        }
        return total > 0 ? correct / total : 0;
    }

    function normalizePracticePhase(detail) {
        const source = detail && typeof detail === 'object' ? detail : {};
        const rawPhase = String(source.phase || source.type || 'answer');
        if (rawPhase === 'answer') {
            if (source.skipped || source.isEmpty || source.isCorrect === null) {
                return 'answer_wrong';
            }
            return source.isCorrect ? 'answer_correct' : 'answer_wrong';
        }
        if (rawPhase === 'summary') {
            return getSummaryAccuracy(source) >= 0.98 ? 'perfect_clear' : 'clear';
        }
        return rawPhase;
    }

    const PRACTICE_DIALOGS = {
        shiba: {
            vocabulary: {
                enter: ['汪！N2 动词修行开始，{name}帮你叼着词汇本！'],
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
                clear: ['这一课的知识都被你装进脑子里啦，辛苦啦！'],
                perfect_clear: ['全对通关！今天表现太棒了，{name}要奖励你多摸几下！'],
                stage_clear: ['这一大段终于学完啦，{name}陪你伸个懒腰~'],
                stage_perfect_clear: ['完美通关这一段！{name}现在想满屋子跑酷来庆祝！']
            },
            reading: {
                enter: ['文章有点长哦，{name}拿好放大镜陪你一起找线索！'],
                answer_correct: ['找到线索啦！汪汪！', '这句理解得完全没毛病！'],
                answer_wrong: ['哎呀，好像看漏了什么，{name}陪你再读一遍这里。', '唔...这里的判断有点偏了，别急，慢慢来。'],
                clear: ['长长的文章读完啦！{name}觉得你的耐心超级好！'],
                perfect_clear: ['全对！这么难的文章都没难倒你，{name}为你骄傲！']
            },
            reading_short: {
                enter: ['短文讲究快准狠，{name}陪你一起抓重点！'],
                answer_correct: ['短文的线索抓到了。'],
                answer_wrong: ['是不是读得太快啦？{name}陪你再仔细看看这里。']
            },
            listening: {
                enter: ['耳朵竖起来！{name}陪你一起捕捉每一个音节！'],
                answer_correct: ['听得很清楚嘛！这句稳了！', '这句接住了！{name}的耳朵也跟着动了一下！'],
                answer_wrong: ['哎呀，这句好像有点含糊，我们再听一次好不好？', '是不是听走神啦？{name}叫醒你，重新听哦！'],
                clear: ['听力闯关成功！{name}的耳朵终于可以休息啦。'],
                perfect_clear: ['一个都没听漏！你现在的听力简直比{name}还要灵敏！']
            },
            listening_immediate: {
                enter: ['即时应答反应要快哦！{name}已经准备好随时起跳了！'],
                answer_correct: ['反应超快！接得漂亮！'],
                answer_wrong: ['这句对话没接上呢，{name}陪你再听听对方的语气。']
            },
            general: {
                enter: ['准备好了吗？{name}陪你开始咯！'],
                answer_correct: ['答对啦！{name}开心！'],
                answer_wrong: ['选错啦，别灰心，{name}陪你再看一次。'],
                streak: ['连对！{name}为你打call！'],
                clear: ['这轮做完啦，辛苦辛苦！'],
                perfect_clear: ['全对通关！{name}觉得你今天超棒！']
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
                clear: ['这一课的教材点算是收下来不少，今天放过你了。'],
                perfect_clear: ['整课都做得很稳，这次我就不挑刺了，干得好。'],
                stage_clear: ['这一段总算被你啃完了，本喵也歇会儿。'],
                stage_perfect_clear: ['这一段吃得挺干净，要是考试也能这样，本喵就放心了。']
            },
            reading: {
                enter: ['先抓文章线索，别一头扎进细节出不来，笨蛋。'],
                answer_correct: ['线索抓对了。算你有长进。'],
                answer_wrong: ['这处线索被你漏过去了。你的眼睛是摆设吗？'],
                clear: ['这篇算是被你顺过一遍了，辛苦你了（才怪）。'],
                perfect_clear: ['整篇读得很稳，少见。今天允许你多吸我两下。']
            },
            reading_short: {
                enter: ['短文先抓关键词，别急着脑补，你以为你写小说呢？'],
                answer_correct: ['短文的关键点抓到了。'],
                answer_wrong: ['短文这题就是被你看快了。心急吃不了热猫条！']
            },
            listening: {
                enter: ['先把耳朵打开，别只靠猜。本喵{name}的耳朵都比你灵。'],
                answer_correct: ['这句听得不错。'],
                answer_wrong: ['这句又滑过去了，笨蛋，集中注意力重听！'],
                clear: ['这组听力总算收下来了，我耳朵都听茧子了。'],
                perfect_clear: ['整组听得很顺，表现不差。算你今天没白学。']
            },
            listening_immediate: {
                enter: ['即时应答先抓语气和关系，听不懂语气活该你选错。'],
                answer_correct: ['这句回应接对了。'],
                answer_wrong: ['这题你听不懂别人的言外之意吗？本喵{name}都替你捉急。']
            },
            general: {
                enter: ['开始吧，别磨蹭，本大人{name}时间很宝贵的。'],
                answer_correct: ['这题对了。没辜负我盯着你。'],
                answer_wrong: ['这题不行，再看。本喵的爪子已经蠢蠢欲动了。'],
                streak: ['节奏还不错。'],
                clear: ['这一轮做完了。你可以休息一下了。'],
                perfect_clear: ['这一轮表现还挺整齐。本喵{name}今天就不骂你了。']
            }
        }
    };

    function getPracticeMessage(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const identity = getPetIdentity();
        const moduleKey = resolvePracticeModuleKey(source);
        const phase = normalizePracticePhase(source);
        const phaseKey = moduleKey === 'textbook' && String(source.mode || '') === 'stage' && (phase === 'clear' || phase === 'perfect_clear')
            ? `stage_${phase}`
            : phase;
        const dialogMap = PRACTICE_DIALOGS[identity.id] || PRACTICE_DIALOGS.shiba;
        const fallbackChain = [];
        if (moduleKey === 'grammar_sort' || moduleKey === 'grammar_kakujyo') {
            fallbackChain.push(moduleKey, 'grammar');
        } else if (moduleKey === 'reading_short') {
            fallbackChain.push(moduleKey, 'reading');
        } else if (moduleKey === 'listening_immediate') {
            fallbackChain.push(moduleKey, 'listening');
        } else {
            fallbackChain.push(moduleKey);
        }
        fallbackChain.push('general');
        const variants = fallbackChain.reduce((current, key) => {
            if (current && current.length) {
                return current;
            }
            const bucket = dialogMap[key] || {};
            return bucket[phaseKey] || bucket[phase] || [];
        }, []);
        const seed = [
            source.seed,
            source.questionId,
            source.questionIndex,
            source.streak,
            moduleKey,
            phaseKey
        ].filter((item) => item !== undefined && item !== null).join(':');
        return pick(variants, seed).replace(/\{name\}/g, identity.name);
    }

    function getAnswerMessage(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        if (source.skipped || source.isEmpty || source.isCorrect === null) {
            return pick([
                '这一题先记个路标，回头补上也算前进。',
                '空着不丢人，怕的是不回来看。先把它收进复盘篮。',
                '这里先留白，下一轮我们专门来抓它。'
            ], source.seed || source.questionId || source.phase);
        }
        if (source.isCorrect) {
            return pick([
                '不错，这一下很稳。小柴在旁边认真点头。',
                '答对了，语感齿轮正在咔哒咔哒归位。',
                '这一题拿下，继续保持这种节奏。',
                Number(source.streak) >= 3 ? '连对起来了，别急着飘，稳住最帅。' : '判断很漂亮，继续下一题。'
            ], source.seed || source.questionId || source.phase || source.streak);
        }
        return pick([
            '错题不是墙，是路标。先看解析，我们再绕回来。',
            '这里被绊一下很正常，解析看完就会少一个坑。',
            '小柴把这题叼进错题篮了，之后我们重点复盘。',
            '别急，这种细节题就是靠一次次抓出来的。'
        ], source.seed || source.questionId || source.phase);
    }

    function getSummaryMessage(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        const total = Math.max(0, Number(source.total ?? source.questionCount ?? source.answeredCount ?? 0));
        const correct = Math.max(0, Number(source.correct ?? source.correctCount ?? 0));
        const accuracy = Number.isFinite(Number(source.accuracy))
            ? Number(source.accuracy)
            : (total > 0 ? correct / total : 0);
        const percent = accuracy > 1 ? accuracy : accuracy * 100;

        if (percent >= 95) {
            return '这轮几乎无懈可击。小柴已经开始假装自己也会做题。';
        }
        if (percent >= 80) {
            return '状态很好，剩下的错题像小石子，捡掉就更顺了。';
        }
        if (percent >= 60) {
            return '基础已经站住了。把错题复盘一遍，下一轮会明显轻松。';
        }
        if (total > 0) {
            return '这轮像侦察地图，先把坑位标出来，下一次我们逐个拆。';
        }
        return '先热身也没关系，开始本身就是进度。';
    }

    function getTone(payload) {
        const source = payload && typeof payload === 'object' ? payload : {};
        if (source.skipped || source.isEmpty || source.isCorrect === null) return 'empty';
        if (source.isCorrect === true) return 'correct';
        if (source.isCorrect === false) return 'wrong';
        return 'summary';
    }

    function ensureToast() {
        injectStyles();
        let toast = document.getElementById(TOAST_ID);
        if (toast) {
            return toast;
        }
        toast = document.createElement('div');
        toast.id = TOAST_ID;
        toast.className = 'n2-practice-pet-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.innerHTML = `
            <span class="n2-practice-pet-mark" aria-hidden="true">KIKI</span>
            <span class="n2-practice-pet-body">
                <strong class="n2-practice-pet-name"></strong>
                <span class="n2-practice-pet-message"></span>
            </span>
        `;
        document.body.appendChild(toast);
        return toast;
    }

    function shouldThrottle(key) {
        const now = Date.now();
        if (key && key === lastSignalKey && now - lastSignalAt < 700) {
            return true;
        }
        lastSignalKey = key;
        lastSignalAt = now;
        return false;
    }

    function getCurrentScriptUrl() {
        const script = document.currentScript || document.querySelector('script[src$="practice-feedback-system.js"]');
        return script && script.src ? script.src : '';
    }

    function resolveSharedAsset(path) {
        const currentScriptUrl = getCurrentScriptUrl();
        try {
            return new URL(path, currentScriptUrl || document.baseURI).href;
        } catch (error) {
            return path;
        }
    }

    function ensurePetAssets() {
        if (global.HomePetSystem) {
            return Promise.resolve(global.HomePetSystem);
        }
        if (petAssetsPromise) {
            return petAssetsPromise;
        }

        petAssetsPromise = new Promise((resolve) => {
            const cssHref = resolveSharedAsset('home-pet.css');
            if (!document.querySelector(`link[data-n2-pet-css="true"][href="${cssHref}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssHref;
                link.dataset.n2PetCss = 'true';
                document.head.appendChild(link);
            }

            const scriptSrc = resolveSharedAsset('home-pet.js');
            const existingScript = document.querySelector(`script[data-n2-pet-js="true"][src="${scriptSrc}"], script[src="${scriptSrc}"]`);
            if (existingScript) {
                if (global.HomePetSystem) {
                    resolve(global.HomePetSystem);
                } else {
                    existingScript.addEventListener('load', () => resolve(global.HomePetSystem || null), { once: true });
                    existingScript.addEventListener('error', () => resolve(null), { once: true });
                }
                return;
            }

            const script = document.createElement('script');
            script.src = scriptSrc;
            script.dataset.n2PetJs = 'true';
            script.addEventListener('load', () => resolve(global.HomePetSystem || null), { once: true });
            script.addEventListener('error', () => resolve(null), { once: true });
            document.head.appendChild(script);
        });

        return petAssetsPromise;
    }

    function loadSharedScript(path, datasetKey) {
        const scriptSrc = resolveSharedAsset(path);
        const existingScript = Array.from(document.querySelectorAll('script[src]')).find((script) => script.src === scriptSrc);
        if (existingScript) {
            return new Promise((resolve) => {
                if (existingScript.dataset.loaded === 'true') {
                    resolve(true);
                    return;
                }
                existingScript.addEventListener('load', () => resolve(true), { once: true });
                existingScript.addEventListener('error', () => resolve(false), { once: true });
                setTimeout(() => resolve(true), 0);
            });
        }
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = scriptSrc;
            if (datasetKey) {
                script.dataset[datasetKey] = 'true';
            }
            script.addEventListener('load', () => {
                script.dataset.loaded = 'true';
                resolve(true);
            }, { once: true });
            script.addEventListener('error', () => resolve(false), { once: true });
            document.head.appendChild(script);
        });
    }

    function ensureRewardRuntime() {
        if (global.KikiPracticeRewardRuntime) {
            return Promise.resolve(global.KikiPracticeRewardRuntime);
        }
        if (rewardRuntimePromise) {
            return rewardRuntimePromise;
        }
        rewardRuntimePromise = Promise.resolve()
            .then(() => {
                if (global.OmikujiCatalog) {
                    return true;
                }
                return loadSharedScript('omikuji-catalog.js', 'n2OmikujiCatalog');
            })
            .then(() => loadSharedScript('practice-reward-runtime.js', 'n2PracticeRewardRuntime'))
            .then(() => global.KikiPracticeRewardRuntime || null)
            .catch(() => null);
        return rewardRuntimePromise;
    }

    function detectPracticeModule(payload = {}) {
        if (payload.module) return String(payload.module);
        const path = String(global.location && global.location.pathname ? global.location.pathname : '').toLowerCase();
        if (path.includes('/vocabulary/')) return 'vocabulary';
        if (path.includes('/listening/')) return 'listening';
        if (path.includes('/textbook/')) return 'textbook';
        if (path.includes('/jlpt-reading/')) return 'reading';
        if (path.includes('/grammar/') || path.includes('/daily/grammar/') || path.includes('/test/')) return 'grammar';
        return 'practice';
    }

    function detectRewardModule(payload = {}) {
        const moduleName = String(payload.module || '').toLowerCase();
        const subType = String(payload.subType || '').toLowerCase();
        const path = String(global.location && global.location.pathname ? global.location.pathname : '').toLowerCase();
        const tokens = `${moduleName} ${subType} ${path}`;
        if (tokens.includes('vocabulary') || tokens.includes('vocab') || tokens.includes('/vocabulary/')) return 'vocabulary';
        if (tokens.includes('listening') || tokens.includes('immediate') || tokens.includes('/listening/')) return 'listening';
        if (tokens.includes('reading') || tokens.includes('jlpt-reading') || tokens.includes('/jlpt-reading/')) return 'reading';
        if (tokens.includes('grammar') || tokens.includes('textbook') || tokens.includes('try-n2') || tokens.includes('/grammar/') || tokens.includes('/daily/grammar/') || tokens.includes('/textbook/') || tokens.includes('/test/')) return 'grammar';
        return '';
    }

    function detectPracticeSubType(payload = {}) {
        if (payload.subType) return String(payload.subType);
        const path = String(global.location && global.location.pathname ? global.location.pathname : '').toLowerCase();
        if (path.includes('/immediate-response/')) return 'immediate';
        if (path.includes('/sort/')) return 'sort';
        if (path.includes('/cloze/')) return 'cloze';
        if (path.includes('/vocabulary/')) return 'n2_verbs';
        return '';
    }

    function normalizeRewardAccuracy(payload = {}) {
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        if (Number.isFinite(Number(payload.accuracy))) {
            const accuracy = Number(payload.accuracy);
            return accuracy > 1 ? accuracy / 100 : accuracy;
        }
        return total > 0 ? correct / total : 0;
    }

    function shouldSignalPracticeReward(payload = {}) {
        const phase = String(payload.phase || payload.type || '').trim();
        return phase === 'summary' || phase === 'clear' || phase === 'perfect_clear';
    }

    function shouldThrottleRewardSignal(payload = {}) {
        const moduleKey = detectRewardModule(payload);
        if (!moduleKey) return true;
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const key = [
            moduleKey,
            payload.runKey || '',
            payload.phase || '',
            payload.scopeKey || '',
            global.location && global.location.pathname ? global.location.pathname : '',
            correct,
            total
        ].join(':');
        const now = Date.now();
        const previous = recentRewardSignals.get(key) || 0;
        if (previous && now - previous < 3000) {
            return true;
        }
        recentRewardSignals.set(key, now);
        recentRewardSignals.forEach((timestamp, signalKey) => {
            if (now - timestamp > 15000) {
                recentRewardSignals.delete(signalKey);
            }
        });
        return false;
    }

    function trackPracticeReward(payload = {}) {
        if (!shouldSignalPracticeReward(payload) || shouldThrottleRewardSignal(payload)) {
            return;
        }
        const moduleKey = detectRewardModule(payload);
        if (!moduleKey) {
            return;
        }
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const sourcePage = global.location ? `${global.location.pathname}${global.location.search || ''}` : '';
        ensureRewardRuntime().then((runtime) => {
            if (!runtime || typeof runtime.completeRun !== 'function') {
                return;
            }
            const result = runtime.completeRun({
                ...payload,
                module: moduleKey,
                subType: detectPracticeSubType(payload),
                sourcePage,
                scopeKey: payload.scopeKey || sourcePage,
                total,
                questionCount: total,
                answeredCount: Number(payload.answeredCount ?? total),
                correct,
                correctCount: correct,
                accuracy: normalizeRewardAccuracy(payload),
                cleared: payload.cleared !== false,
                finishedAt: payload.finishedAt || new Date().toISOString()
            });
            if (result && result.accepted && result.drawOffer && result.drawOffer.available && typeof runtime.renderDrawOffer === 'function') {
                runtime.renderDrawOffer(result, payload);
            }
        }).catch(() => {});
    }

    function mapFeedbackPhase(payload = {}) {
        const phase = String(payload.phase || payload.type || '');
        if (phase === 'summary') return 'clear';
        if (phase === 'answer_correct' || phase === 'answer_wrong' || phase === 'streak' || phase === 'clear' || phase === 'perfect_clear' || phase === 'review') {
            return phase;
        }
        if (payload.isCorrect === true) return 'answer_correct';
        if (payload.isCorrect === false) return 'answer_wrong';
        return phase || 'enter';
    }

    function notifyHomePet(payload = {}) {
        if (!isFollowOutsideHomeEnabled()) {
            return Promise.resolve(false);
        }

        return ensurePetAssets().then((petSystem) => {
            if (!petSystem || typeof petSystem.initNonHomeSurface !== 'function') {
                return false;
            }
            if (typeof petSystem.shouldMountOnSurface === 'function' && !petSystem.shouldMountOnSurface('practice')) {
                return false;
            }
            if (!practicePetController) {
                practicePetController = petSystem.initNonHomeSurface({
                    mountSelector: '#home-pet-root',
                    pageShellSelector: '.practice-container, .card-shell, .question-block, .container, main, body',
                    surfaceType: 'practice',
                    activeSection: 'exam',
                    practiceDetail: {
                        module: detectPracticeModule(payload),
                        subType: detectPracticeSubType(payload)
                    }
                });
            }
            if (!practicePetController || typeof practicePetController.reactToPractice !== 'function') {
                return false;
            }
            practicePetController.reactToPractice({
                ...payload,
                module: detectPracticeModule(payload),
                subType: detectPracticeSubType(payload),
                phase: mapFeedbackPhase(payload)
            });
            return true;
        }).catch(() => false);
    }

    function showFallbackToast(source, message) {
        if (!isFollowOutsideHomeEnabled()) {
            return;
        }
        const toast = ensureToast();
        toast.querySelector('.n2-practice-pet-name').textContent = `${getPetName()}的陪学反馈`;
        toast.querySelector('.n2-practice-pet-message').textContent = message;
        toast.dataset.tone = getTone(source);
        toast.classList.add('is-visible');

        if (toastTimer) {
            global.clearTimeout(toastTimer);
        }
        toastTimer = global.setTimeout(() => {
            toast.classList.remove('is-visible');
        }, TOAST_HIDE_MS);
    }

    function notifyPet(payload = {}) {
        if (typeof document === 'undefined' || !document.body) {
            return null;
        }
        const source = payload && typeof payload === 'object' ? payload : {};
        const phase = String(source.phase || source.type || 'answer');
        const key = [
            phase,
            source.module || '',
            source.questionId || source.questionIndex || '',
            source.isCorrect === undefined ? '' : String(source.isCorrect)
        ].join(':');
        if (shouldThrottle(key)) {
            return null;
        }

        const message = String(source.message || getPracticeMessage(source) || (
            phase === 'summary' || phase === 'clear' || phase === 'perfect_clear'
                ? getSummaryMessage(source)
                : getAnswerMessage(source)
        )).trim();
        if (!message) {
            return null;
        }

        try {
            global.dispatchEvent(new CustomEvent('n2-practice-feedback', {
                detail: { ...source, message }
            }));
        } catch (error) {}

        if (isFollowOutsideHomeEnabled()) {
            notifyHomePet({ ...source, message }).then((handledByPet) => {
                if (!handledByPet) {
                    showFallbackToast(source, message);
                }
            });
        }
        return message;
    }

    function renderAnswerFeedback(target, payload = {}) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) {
            return null;
        }
        injectStyles();
        const tone = getTone(payload);
        const title = tone === 'correct' ? '答对了' : tone === 'empty' ? '先留作复盘' : '这题要复盘';
        const copy = String(payload.copy || getAnswerMessage(payload));
        element.innerHTML = `
            <div class="n2-feedback-card is-${tone}">
                <p class="n2-feedback-title">${escapeHtml(title)}</p>
                <p class="n2-feedback-copy">${escapeHtml(copy)}</p>
            </div>
        `;
        notifyPet(payload);
        return element;
    }

    function renderSummaryFeedback(target, payload = {}) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) {
            return null;
        }
        injectStyles();
        const total = Math.max(0, Number(payload.total ?? payload.questionCount ?? payload.answeredCount ?? 0));
        const correct = Math.max(0, Number(payload.correct ?? payload.correctCount ?? 0));
        const copy = String(payload.copy || getSummaryMessage(payload));
        element.innerHTML = `
            <div class="n2-feedback-card">
                <p class="n2-feedback-title">练习总结</p>
                <p class="n2-feedback-copy">共完成 ${escapeHtml(total)} 题，答对 ${escapeHtml(correct)} 题。${escapeHtml(copy)}</p>
            </div>
        `;
        notifyPet({ ...payload, phase: 'summary' });
        trackPracticeReward({ ...payload, phase: 'summary' });
        return element;
    }

    function trackAnswer(payload = {}) {
        return notifyPet({
            ...payload,
            phase: payload.phase || 'answer'
        });
    }

    function trackSummary(payload = {}) {
        const message = notifyPet({
            ...payload,
            phase: payload.phase || 'summary'
        });
        trackPracticeReward({
            ...payload,
            phase: payload.phase || 'summary'
        });
        return message;
    }

    function dispatchPracticeState(payload = {}) {
        const phase = String(payload.phase || '').trim();
        if (/answer_(correct|wrong)/.test(phase)) {
            return trackAnswer({
                ...payload,
                isCorrect: payload.isCorrect,
                phase
            });
        }
        if (phase === 'streak') {
            return notifyPet({
                ...payload,
                phase,
                message: `已经连对 ${Math.max(0, Number(payload.streak || 0))} 题，保持呼吸，别让手比脑子快。`
            });
        }
        if (phase === 'clear' || phase === 'perfect_clear') {
            return trackSummary({
                ...payload,
                phase,
                correct: payload.correct ?? payload.correctCount,
                total: payload.total ?? payload.questionCount
            });
        }
        if (phase === 'enter' || phase === 'near_clear' || phase === 'review') {
            return notifyPet({
                ...payload,
                phase
            });
        }
        return null;
    }

    const api = {
        notifyPet,
        showAnswerFeedback: renderAnswerFeedback,
        showSummaryFeedback: renderSummaryFeedback,
        trackAnswer,
        trackSummary,
        dispatchPracticeState
    };

    global.N2PracticeFeedback = api;

    const existingUi = global.StudyQuestTestUi || {};
    const originalDispatch = typeof existingUi.dispatchPracticeState === 'function'
        ? existingUi.dispatchPracticeState.bind(existingUi)
        : null;

    existingUi.dispatchPracticeState = function(payload) {
        if (originalDispatch) {
            try {
                originalDispatch(payload);
            } catch (error) {
                console.warn('StudyQuestTestUi.dispatchPracticeState failed:', error);
            }
        }
        return api.dispatchPracticeState(payload);
    };
    existingUi.mountPracticeTestTools = existingUi.mountPracticeTestTools || function() {};
    existingUi.hidePracticeTestTools = existingUi.hidePracticeTestTools || function() {};
    existingUi.getDrawAffordanceMarkup = existingUi.getDrawAffordanceMarkup || function(runKey) {
        return global.KikiPracticeRewardRuntime && typeof global.KikiPracticeRewardRuntime.getDrawAffordanceMarkup === 'function'
            ? global.KikiPracticeRewardRuntime.getDrawAffordanceMarkup(runKey)
            : '';
    };
    existingUi.canOpenDrawForRunKey = existingUi.canOpenDrawForRunKey || function(runKey) {
        return global.KikiPracticeRewardRuntime && typeof global.KikiPracticeRewardRuntime.canOpenDrawForRunKey === 'function'
            ? global.KikiPracticeRewardRuntime.canOpenDrawForRunKey(runKey)
            : false;
    };
    global.StudyQuestTestUi = existingUi;
})(typeof window !== 'undefined' ? window : globalThis);
