(function (global) {
    'use strict';

    const DETAIL_OVERRIDES = Object.freeze({
        '営む': {
            usage: '从事商业活动，也可表示经营生活或举行仪式。',
            collocation: { jp: 'ラーメン屋を営む', cn: '经营拉面店' }
        },
        '据える': {
            collocation: { jp: '防犯カメラを据える', cn: '安装监控摄像头' }
        },
        '留める': {
            collocation: { jp: '被害を最小限に留める', cn: '把损害控制在最低限度' }
        },
        '挑む': {
            collocation: { jp: '世界記録に挑む', cn: '挑战世界纪录' }
        },
        '臨む': {
            collocation: { jp: '試合に臨む', cn: '参加比赛、面对比赛' }
        },
        '香ばしい': {
            usage: '多形容烤制或炒制食物散发出的令人愉快的香味。',
            collocation: { jp: '香ばしい匂い', cn: '焦香的气味' }
        },
        '芳しい': {
            usage: '可形容芬芳的气味；否定形常表示结果或评价不理想。',
            collocation: { jp: '芳しい香り', cn: '芬芳的香气' }
        },
        '目ぼしい': {
            usage: '表示显眼、值得关注，常用于候选对象或有价值的事物。',
            collocation: { jp: '目ぼしい人', cn: '值得注意的人选' }
        },
        '手厚い': {
            usage: '形容待遇、照顾、支援等周到而充分。',
            collocation: { jp: '手厚いもてなし', cn: '周到的招待' }
        }
    });

    const OPTION_DETAIL_FALLBACKS = Object.freeze({
        'もとめる': {
            baseForm: '求める',
            meaning: '想要、追求；要求、请求；寻找、寻求',
            usage: '表示想得到某物、请求对方做事，或寻找需要的人和物。',
            collocation: { jp: '協力を求める', cn: '请求协助' }
        },
        'まとめる': {
            baseForm: '纏める',
            meaning: '总结、整理；汇总；谈妥、达成',
            usage: '把分散的信息、意见或物品归拢整理，也可表示促成事情达成。',
            collocation: { jp: '意見をまとめる', cn: '整理意见' }
        },
        'はげめる': {
            baseForm: '励む',
            meaning: '努力、勤奋；致力于某事',
            usage: '表示为了目标持续努力，常与学习、训练、工作等搭配。',
            collocation: { jp: '勉強に励む', cn: '努力学习' }
        },
        'にがい': {
            baseForm: '苦い',
            meaning: '苦；痛苦、难受',
            usage: '形容味道发苦，也可形容令人不愉快或痛苦的经验。',
            collocation: { jp: '苦い薬', cn: '苦药' }
        },
        'からい': {
            baseForm: '辛い',
            meaning: '辣；严厉、苛刻',
            usage: '形容食物辛辣，也可表示评价、条件等严厉。',
            collocation: { jp: '辛い料理', cn: '辣的料理' }
        },
        'あまい': {
            baseForm: '甘い',
            meaning: '甜；天真；宽松、不严格',
            usage: '形容味道甜，也可表示判断天真或要求不够严格。',
            collocation: { jp: '甘い考え', cn: '天真的想法' }
        },
        'いきいき': {
            baseForm: 'いきいき',
            meaning: '生动、有活力',
            usage: '形容人、表情或描写充满生气和活力。',
            collocation: { jp: 'いきいきと働く', cn: '充满活力地工作' }
        },
        'うじうじ': {
            baseForm: 'うじうじ',
            meaning: '犹豫不决、闷闷纠结',
            usage: '形容迟迟下不了决心，或一直烦恼纠结。',
            collocation: { jp: 'うじうじ悩む', cn: '犹豫纠结地烦恼' }
        },
        'うっかり': {
            baseForm: 'うっかり',
            meaning: '不小心、疏忽',
            usage: '表示因一时大意而忘记或做错事情。',
            collocation: { jp: 'うっかり忘れる', cn: '一不小心忘记' }
        },
        'かちかち': {
            baseForm: 'かちかち',
            meaning: '硬邦邦；紧张僵硬；咔嗒声',
            usage: '形容物体很硬，也可形容人紧张到身体僵硬。',
            collocation: { jp: '体がかちかちになる', cn: '身体变得僵硬' }
        },
        'がっかり': {
            baseForm: 'がっかり',
            meaning: '失望、泄气',
            usage: '表示期待落空后情绪低落。',
            collocation: { jp: '結果にがっかりする', cn: '对结果感到失望' }
        },
        'がっちり': {
            baseForm: 'がっちり',
            meaning: '结实、牢固；紧紧地',
            usage: '形容身体强壮、结构牢靠，或抓得很紧。',
            collocation: { jp: 'がっちりした体格', cn: '结实的体格' }
        },
        'がらがら': {
            baseForm: 'がらがら',
            meaning: '空荡荡；哗啦哗啦；声音沙哑',
            usage: '形容场所很空、物体滚动碰撞声，或嗓子沙哑。',
            collocation: { jp: '電車ががらがらだ', cn: '电车里空荡荡' }
        },
        'がんがん': {
            baseForm: 'がんがん',
            meaning: '剧烈地、响亮地；头痛欲裂',
            usage: '形容声音或动作很强烈，也常用于头痛。',
            collocation: { jp: '頭ががんがんする', cn: '头痛得厉害' }
        },
        'ぎしぎし': {
            baseForm: 'ぎしぎし',
            meaning: '嘎吱嘎吱；紧绷摩擦',
            usage: '形容木板、关节等摩擦发出的刺耳声音。',
            collocation: { jp: '床がぎしぎし鳴る', cn: '地板嘎吱作响' }
        },
        'きびきび': {
            baseForm: 'きびきび',
            meaning: '干脆利落、敏捷',
            usage: '形容动作、态度或工作处理得迅速有条理。',
            collocation: { jp: 'きびきび動く', cn: '动作利落' }
        },
        'ぎょっと': {
            baseForm: 'ぎょっと',
            meaning: '大吃一惊、吓一跳',
            usage: '表示因突然看到或听到意外情况而惊讶。',
            collocation: { jp: 'その知らせにぎょっとする', cn: '听到那个消息吓了一跳' }
        },
        'きょとんと': {
            baseForm: 'きょとんと',
            meaning: '呆然、不明所以',
            usage: '形容因不理解状况而愣住的样子。',
            collocation: { jp: 'きょとんとした顔', cn: '一脸茫然的表情' }
        },
        'きょろきょろ': {
            baseForm: 'きょろきょろ',
            meaning: '东张西望',
            usage: '形容不安或好奇地四处张望。',
            collocation: { jp: '辺りをきょろきょろ見る', cn: '四处张望' }
        },
        'きらきら': {
            baseForm: 'きらきら',
            meaning: '闪闪发光',
            usage: '形容光线、眼睛、饰品等明亮闪耀。',
            collocation: { jp: '星がきらきら光る', cn: '星星闪闪发光' }
        },
        'きりきり': {
            baseForm: 'きりきり',
            meaning: '绞痛；麻利地、紧紧地',
            usage: '常形容胃部等一阵阵刺痛，也可表示动作麻利。',
            collocation: { jp: '胃がきりきり痛む', cn: '胃一阵阵绞痛' }
        },
        'くっきり': {
            baseForm: 'くっきり',
            meaning: '清晰、鲜明',
            usage: '形容轮廓、颜色或差异清楚分明。',
            collocation: { jp: '輪郭がくっきり見える', cn: '轮廓看得很清楚' }
        },
        'ぐっすり': {
            baseForm: 'ぐっすり',
            meaning: '熟睡、酣睡',
            usage: '形容睡得很沉、很安稳。',
            collocation: { jp: 'ぐっすり眠る', cn: '睡得很香' }
        },
        'ぐらっと': {
            baseForm: 'ぐらっと',
            meaning: '摇晃一下；心动动摇',
            usage: '形容物体突然晃动，也可表示心意一时动摇。',
            collocation: { jp: '建物がぐらっと揺れる', cn: '建筑物晃了一下' }
        },
        'げらげら': {
            baseForm: 'げらげら',
            meaning: '哈哈大笑',
            usage: '形容毫不掩饰地大声笑。',
            collocation: { jp: 'げらげら笑う', cn: '哈哈大笑' }
        },
        'けろりと': {
            baseForm: 'けろりと',
            meaning: '若无其事；一下子恢复',
            usage: '形容完全不在意，或病痛等很快消失。',
            collocation: { jp: 'けろりと忘れる', cn: '若无其事地忘掉' }
        },
        'こそこそ': {
            baseForm: 'こそこそ',
            meaning: '偷偷摸摸、鬼鬼祟祟',
            usage: '形容怕人发现而悄悄行动。',
            collocation: { jp: 'こそこそ話す', cn: '偷偷地说话' }
        },
        'ころころ': {
            baseForm: 'ころころ',
            meaning: '滚来滚去；频繁变化',
            usage: '形容小圆物滚动，也可形容想法或态度频繁改变。',
            collocation: { jp: '意見がころころ変わる', cn: '意见变来变去' }
        },
        'さっさと': {
            baseForm: 'さっさと',
            meaning: '赶快、麻利地',
            usage: '催促或描述迅速做完某事。',
            collocation: { jp: 'さっさと片付ける', cn: '麻利地收拾好' }
        },
        'さっぱり': {
            baseForm: 'さっぱり',
            meaning: '清爽；完全不',
            usage: '形容感觉清爽，也常和否定搭配表示完全不明白。',
            collocation: { jp: 'さっぱり分からない', cn: '完全不明白' }
        },
        'しくしく': {
            baseForm: 'しくしく',
            meaning: '抽抽搭搭地哭；隐隐作痛',
            usage: '形容小声哭泣，或身体部位持续轻微疼痛。',
            collocation: { jp: 'しくしく泣く', cn: '抽抽搭搭地哭' }
        },
        'じっと': {
            baseForm: 'じっと',
            meaning: '一动不动；凝视；忍耐',
            usage: '表示保持静止、专注看着，或默默忍耐。',
            collocation: { jp: 'じっと見つめる', cn: '凝视着' }
        },
        'しめじめ': {
            baseForm: 'しめじめ',
            meaning: '潮湿；阴郁',
            usage: '形容空气、场所潮湿，也可形容气氛沉闷。',
            collocation: { jp: 'しめじめした部屋', cn: '潮湿的房间' }
        },
        'じめっと': {
            baseForm: 'じめっと',
            meaning: '潮湿、湿闷',
            usage: '形容空气或触感湿湿的、不清爽。',
            collocation: { jp: 'じめっとした空気', cn: '湿闷的空气' }
        },
        'じゃあじゃあ': {
            baseForm: 'じゃあじゃあ',
            meaning: '哗啦哗啦',
            usage: '形容水大量连续流出的声音。',
            collocation: { jp: '水がじゃあじゃあ流れる', cn: '水哗啦哗啦地流' }
        },
        'しょぼしょぼ': {
            baseForm: 'しょぼしょぼ',
            meaning: '眼睛无神、眨巴；雨势细弱',
            usage: '常形容眼睛疲劳无力，也可形容细雨绵绵。',
            collocation: { jp: '目がしょぼしょぼする', cn: '眼睛疲惫发涩' }
        },
        'じろじろ': {
            baseForm: 'じろじろ',
            meaning: '直盯盯地看',
            usage: '形容毫不客气地盯着别人看，常带失礼感。',
            collocation: { jp: '人の顔をじろじろ見る', cn: '盯着别人的脸看' }
        },
        'しんしん': {
            baseForm: 'しんしん',
            meaning: '静静地、深深地',
            usage: '常形容雪静静地下，或寒意深入身体。',
            collocation: { jp: '雪がしんしん降る', cn: '雪静静地下' }
        },
        'しんみり': {
            baseForm: 'しんみり',
            meaning: '沉静、伤感',
            usage: '形容气氛安静而带有感伤或深情。',
            collocation: { jp: 'しんみり話す', cn: '沉静伤感地交谈' }
        },
        'ずきずき': {
            baseForm: 'ずきずき',
            meaning: '阵阵作痛',
            usage: '形容伤口、头、牙等跳动般疼痛。',
            collocation: { jp: '頭がずきずき痛む', cn: '头一阵阵地疼' }
        },
        'すらすら': {
            baseForm: 'すらすら',
            meaning: '流畅、顺利',
            usage: '形容说话、阅读、书写或解题没有卡顿。',
            collocation: { jp: 'すらすら答える', cn: '流利地回答' }
        },
        'たっぷり': {
            baseForm: 'たっぷり',
            meaning: '充足、大量',
            usage: '表示数量、时间或分量很充足。',
            collocation: { jp: '時間がたっぷりある', cn: '时间很充足' }
        },
        'たらたら': {
            baseForm: 'たらたら',
            meaning: '滴滴答答；磨磨蹭蹭；不停抱怨',
            usage: '形容液体滴落，也可形容拖拉或抱怨不断。',
            collocation: { jp: '汗がたらたら流れる', cn: '汗滴滴答答地流' }
        },
        'つやつや': {
            baseForm: 'つやつや',
            meaning: '有光泽、亮泽',
            usage: '形容头发、肌肤、表面等光滑有光泽。',
            collocation: { jp: 'つやつやした髪', cn: '有光泽的头发' }
        },
        'つるつる': {
            baseForm: 'つるつる',
            meaning: '光滑；滑溜',
            usage: '形容表面光滑，也可形容面条等顺滑入口。',
            collocation: { jp: '床がつるつる滑る', cn: '地板滑溜溜的' }
        },
        'どろっと': {
            baseForm: 'どろっと',
            meaning: '黏稠、浑浊',
            usage: '形容液体浓稠、不清爽。',
            collocation: { jp: 'どろっとしたソース', cn: '浓稠的酱汁' }
        },
        'にこっと': {
            baseForm: 'にこっと',
            meaning: '微微一笑',
            usage: '形容短促、轻轻地露出笑容。',
            collocation: { jp: 'にこっと笑う', cn: '微微一笑' }
        },
        'にこにこ': {
            baseForm: 'にこにこ',
            meaning: '笑眯眯',
            usage: '形容持续带着温和开心的笑容。',
            collocation: { jp: 'にこにこ笑う', cn: '笑眯眯地笑' }
        },
        'ぬっと': {
            baseForm: 'ぬっと',
            meaning: '突然出现、猛地伸出',
            usage: '形容人或物突然无声地出现在眼前。',
            collocation: { jp: '人影がぬっと現れる', cn: '人影突然出现' }
        },
        'のびのび': {
            baseForm: 'のびのび',
            meaning: '无拘无束、舒展自在',
            usage: '形容人自由放松地行动或成长。',
            collocation: { jp: 'のびのび育つ', cn: '自由自在地成长' }
        },
        'ぱさぱさ': {
            baseForm: 'ぱさぱさ',
            meaning: '干巴巴、缺少水分',
            usage: '形容头发、食物等干燥不润泽。',
            collocation: { jp: '髪がぱさぱさする', cn: '头发干枯' }
        },
        'はっと': {
            baseForm: 'はっと',
            meaning: '猛然一惊、忽然意识到',
            usage: '形容突然被惊到或突然想起某事。',
            collocation: { jp: 'はっと気づく', cn: '猛然意识到' }
        },
        'ばりばり': {
            baseForm: 'ばりばり',
            meaning: '精力充沛；咔嚓咔嚓',
            usage: '形容很有干劲地做事，也可形容硬物碎裂声。',
            collocation: { jp: 'ばりばり働く', cn: '干劲十足地工作' }
        },
        'ぴかぴか': {
            baseForm: 'ぴかぴか',
            meaning: '闪闪发亮、崭新',
            usage: '形容物体被擦得发亮，或东西崭新。',
            collocation: { jp: '靴をぴかぴかに磨く', cn: '把鞋擦得锃亮' }
        },
        'びしょびしょ': {
            baseForm: 'びしょびしょ',
            meaning: '湿透',
            usage: '形容被雨、水或汗完全弄湿。',
            collocation: { jp: '雨でびしょびしょになる', cn: '被雨淋得湿透' }
        },
        'ひそひそ': {
            baseForm: 'ひそひそ',
            meaning: '窃窃私语',
            usage: '形容压低声音偷偷说话。',
            collocation: { jp: 'ひそひそ話す', cn: '窃窃私语' }
        },
        'ぴったり': {
            baseForm: 'ぴったり',
            meaning: '正合适、完全吻合；紧贴',
            usage: '形容尺寸、条件、时间或关系完全合适。',
            collocation: { jp: '条件にぴったり合う', cn: '条件完全吻合' }
        },
        'びりびり': {
            baseForm: 'びりびり',
            meaning: '发麻；撕裂声；震动感',
            usage: '形容电流般麻痛、纸张撕裂声或强烈震动。',
            collocation: { jp: '手がびりびりしびれる', cn: '手麻得刺痛' }
        },
        'ぶつぶつ': {
            baseForm: 'ぶつぶつ',
            meaning: '嘟嘟囔囔；小疙瘩',
            usage: '形容低声抱怨，也可形容皮肤或表面起小颗粒。',
            collocation: { jp: 'ぶつぶつ文句を言う', cn: '嘟嘟囔囔地抱怨' }
        },
        'ふわふわ': {
            baseForm: 'ふわふわ',
            meaning: '轻飘飘、松软',
            usage: '形容物体柔软蓬松，也可形容心情或状态不踏实。',
            collocation: { jp: 'ふわふわした雲', cn: '轻飘飘的云' }
        },
        'べたっと': {
            baseForm: 'べたっと',
            meaning: '黏黏地贴住；扁平地贴上',
            usage: '形容黏腻的东西贴住，或整个面贴在一起。',
            collocation: { jp: '服が汗でべたっと張り付く', cn: '衣服因汗水黏在身上' }
        },
        'ぺらぺら': {
            baseForm: 'ぺらぺら',
            meaning: '流利；薄薄的；喋喋不休',
            usage: '形容外语说得流利，也可形容纸张薄或话很多。',
            collocation: { jp: '英語をぺらぺら話す', cn: '流利地说英语' }
        },
        'ぽたぽた': {
            baseForm: 'ぽたぽた',
            meaning: '滴滴答答',
            usage: '形容液体一滴一滴落下。',
            collocation: { jp: '水がぽたぽた落ちる', cn: '水滴答滴答地落下' }
        },
        'ぼろぼろ': {
            baseForm: 'ぼろぼろ',
            meaning: '破破烂烂；泪水不断',
            usage: '形容东西破损严重，也可形容眼泪不停落下。',
            collocation: { jp: '服がぼろぼろになる', cn: '衣服变得破破烂烂' }
        },
        'まじまじ': {
            baseForm: 'まじまじ',
            meaning: '目不转睛地、仔细端详',
            usage: '形容认真盯着看，带有观察意味。',
            collocation: { jp: '顔をまじまじと見る', cn: '仔细端详脸' }
        },
        'もじもじ': {
            baseForm: 'もじもじ',
            meaning: '忸怩、扭扭捏捏',
            usage: '形容害羞或犹豫时身体不自然地动。',
            collocation: { jp: 'もじもじして答えない', cn: '忸怩着不回答' }
        },
        'もりもり': {
            baseForm: 'もりもり',
            meaning: '精力旺盛；大口大口地',
            usage: '形容吃得多、有精神，或干劲不断涌出。',
            collocation: { jp: 'ご飯をもりもり食べる', cn: '大口大口地吃饭' }
        },
        'ゆったり': {
            baseForm: 'ゆったり',
            meaning: '宽松、悠闲',
            usage: '形容空间、衣服宽松，或心情行动从容。',
            collocation: { jp: 'ゆったり過ごす', cn: '悠闲地度过' }
        },
        'よちよち': {
            baseForm: 'よちよち',
            meaning: '摇摇晃晃地走',
            usage: '形容幼儿或脚步不稳的人走路的样子。',
            collocation: { jp: 'よちよち歩く', cn: '摇摇晃晃地走' }
        },
        'わくわく': {
            baseForm: 'わくわく',
            meaning: '兴奋期待',
            usage: '形容因期待好事而心情雀跃。',
            collocation: { jp: '旅行を前にわくわくする', cn: '旅行前兴奋期待' }
        }
    });

    function toHiragana(text) {
        return String(text == null ? '' : text).replace(/[\u30a1-\u30f6]/g, (char) => {
            return String.fromCharCode(char.charCodeAt(0) - 0x60);
        });
    }

    function normalizeValue(value) {
        return toHiragana(String(value == null ? '' : value).replace(/[\s　]/g, '').trim());
    }

    function unique(values) {
        const seen = new Set();
        const result = [];
        values.forEach((value) => {
            const text = String(value == null ? '' : value).trim();
            if (!text || seen.has(text)) return;
            seen.add(text);
            result.push(text);
        });
        return result;
    }

    function stripRubyText(html) {
        return String(html || '')
            .replace(/<rt[^>]*>[\s\S]*?<\/rt>/gi, '')
            .replace(/<rp[^>]*>[\s\S]*?<\/rp>/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getWordLabel(word) {
        return stripRubyText(word && word.word_html) || String(word && word.word || '').trim();
    }

    function getFallbackOptionDetail(optionValue) {
        const key = normalizeValue(optionValue);
        return key ? OPTION_DETAIL_FALLBACKS[key] || null : null;
    }

    function inferFallbackBaseForm(optionValue) {
        const raw = String(optionValue || '').trim();
        const key = normalizeValue(raw);
        if (!key) return raw || '未配置';

        const teMap = {
            'って': 'う',
            'いて': 'く',
            'いで': 'ぐ',
            'して': 'す',
            'んで': 'む',
            'めて': 'める',
            'れて': 'れる',
            'えて': 'える',
            'けて': 'ける',
            'げて': 'げる',
            'せて': 'せる',
            'てて': 'てる',
            'ねて': 'ねる',
            'べて': 'べる'
        };
        const taMap = {
            'った': 'う',
            'いた': 'く',
            'いだ': 'ぐ',
            'した': 'す',
            'んだ': 'む',
            'めた': 'める',
            'れた': 'れる',
            'えた': 'える',
            'けた': 'ける',
            'げた': 'げる',
            'せた': 'せる',
            'てた': 'てる',
            'ねた': 'ねる',
            'べた': 'べる'
        };
        const map = { ...teMap, ...taMap };
        const suffix = Object.keys(map).find((ending) => key.endsWith(ending));
        if (suffix && key.length > suffix.length) {
            return key.slice(0, -suffix.length) + map[suffix];
        }
        if (key.endsWith('く') && key.length > 1) return key.slice(0, -1) + 'い';
        if (key.endsWith('くて') && key.length > 2) return key.slice(0, -2) + 'い';
        if (key.endsWith('かった') && key.length > 3) return key.slice(0, -3) + 'い';
        return raw || key;
    }

    function buildGeneratedFallbackDetail(optionValue) {
        const value = String(optionValue || '').trim();
        const baseForm = inferFallbackBaseForm(value);
        return {
            baseForm,
            meaning: '干扰选项；不是本题语境中最合适的表达。',
            usage: '用于和正确项形成语境对比，复习时重点看题干搭配与语义方向。',
            collocation: ''
        };
    }

    function getBaseFormLabel(word, fallback) {
        if (word) return getWordLabel(word);
        return fallback && fallback.baseForm ? fallback.baseForm : '没有';
    }

    function getWordOverride(word) {
        const label = getWordLabel(word);
        const rawWord = String(word && word.word || '').trim();
        return DETAIL_OVERRIDES[label] || DETAIL_OVERRIDES[rawWord] || null;
    }

    function getPrimaryMeaning(word) {
        return String(word && word.mean ? word.mean : '')
            .split(/[；;]/)
            .map((part) => part.trim())
            .find(Boolean) || '';
    }

    function getPrimaryUsage(word) {
        const override = getWordOverride(word);
        if (override && override.usage) return override.usage;
        if (word && typeof word.usage === 'string' && word.usage.trim()) return word.usage.trim();
        const nuance = String(word && word.nuance ? word.nuance : '')
            .split('\n')
            .map((line) => line.trim().replace(/^\d+\.\s*/, ''))
            .find(Boolean);
        return nuance || getPrimaryMeaning(word);
    }

    function formatCollocation(collocation, cnFallback) {
        if (!collocation) return '';
        if (typeof collocation === 'object') {
            const jp = String(collocation.jp || collocation.phrase || '').trim();
            const cn = String(collocation.cn || cnFallback || '').trim();
            return jp ? (cn ? `${jp}（${cn}）` : jp) : '';
        }
        const jpText = String(collocation || '').replace(/\s+/g, ' ').trim();
        const cn = String(cnFallback || '').trim();
        return jpText ? (cn ? `${jpText}（${cn}）` : jpText) : '';
    }

    function htmlNodeToPlainText(node, options = {}) {
        if (!node) return '';
        const clone = node.cloneNode(true);
        if (options.stripRuby) {
            clone.querySelectorAll('rt, rp').forEach((child) => child.remove());
        }
        return clone.textContent.replace(/\s+/g, ' ').trim();
    }

    function trimPhrase(text) {
        return String(text || '')
            .replace(/^[、。！？\s]+/, '')
            .replace(/[、。！？\s]+$/, '')
            .trim();
    }

    function clipPhrase(text, maxLength = 18) {
        const phrase = trimPhrase(text);
        return phrase.length > maxLength ? phrase.slice(-maxLength) : phrase;
    }

    function extractBeforePhrase(beforeText) {
        const segment = String(beforeText || '').split(/[。！？、]/).pop().trim();
        if (!segment) return '';
        const particlePhrase = segment.match(/([ぁ-んァ-ヶー一-龯々〆ヵヶA-Za-z0-9ー・]{1,12}(?:を|に|で|へ|と|が|の)[ぁ-んァ-ヶー一-龯々〆ヵヶA-Za-z0-9ー・]{0,8}(?:を|に|で|へ|と|が)?)$/);
        if (particlePhrase && particlePhrase[1]) return clipPhrase(particlePhrase[1]);
        return clipPhrase(segment, 12);
    }

    function extractAfterPhrase(afterText) {
        const cleaned = trimPhrase(afterText).replace(/^(は|が|を|に|へ|で|と|も|から|まで|より|の)+/, '');
        const match = cleaned.match(/^[ぁ-んァ-ヶー一-龯々〆ヵヶA-Za-z0-9ー・]{1,8}/);
        return match ? match[0] : '';
    }

    function buildCollocationFromExample(example) {
        if (!(example && example.jp) || typeof document === 'undefined') return '';
        const wrapper = document.createElement('div');
        wrapper.innerHTML = example.jp;
        const plainText = htmlNodeToPlainText(wrapper, { stripRuby: true });
        const highlight = wrapper.querySelector('.ex-highlight');
        const highlightedText = highlight ? htmlNodeToPlainText(highlight, { stripRuby: true }) : '';

        if (highlightedText) {
            const index = plainText.indexOf(highlightedText);
            if (index >= 0) {
                const afterPhrase = extractAfterPhrase(plainText.slice(index + highlightedText.length));
                if (afterPhrase) return formatCollocation(highlightedText + afterPhrase, example.cn);

                const beforePhrase = extractBeforePhrase(plainText.slice(0, index));
                if (beforePhrase) return formatCollocation(beforePhrase + highlightedText, example.cn);
            }
            return formatCollocation(highlightedText, example.cn);
        }

        const firstClause = plainText.split(/[。！？]/).map((part) => trimPhrase(part)).find(Boolean) || '';
        return firstClause ? formatCollocation(clipPhrase(firstClause), example.cn) : '';
    }

    function getCollocation(word) {
        const override = getWordOverride(word);
        if (override && override.collocation) return formatCollocation(override.collocation);
        if (word && word.collocation) return formatCollocation(word.collocation);

        const examples = Array.isArray(word && word.examples) ? word.examples : [];
        const highlightedExample = examples.find((item) => item && item.jp && String(item.jp).includes('ex-highlight'));
        const fallbackExample = examples.find((item) => item && item.jp);
        return buildCollocationFromExample(highlightedExample || fallbackExample);
    }

    function addVerbAliases(values, baseKana, posText) {
        const base = normalizeValue(baseKana);
        if (!base) return;
        values.push(base);

        if (base.endsWith('する') || /サ/.test(posText)) {
            const stem = base.endsWith('する') ? base.slice(0, -2) : base;
            values.push(stem + 'する', stem + 'し', stem + 'して', stem + 'した', stem + 'されて', stem + 'された');
            return;
        }

        if (/一/.test(posText) || (!/五/.test(posText) && /[いえ]る$/.test(base))) {
            const stem = base.endsWith('る') ? base.slice(0, -1) : base;
            values.push(stem, stem + 'る', stem + 'て', stem + 'た', stem + 'ない', stem + 'られて', stem + 'られた');
            return;
        }

        const last = base.slice(-1);
        const root = base.slice(0, -1);
        const godan = {
            'う': ['って', 'った', 'わ', 'い', 'える', 'われて', 'われた'],
            'く': ['いて', 'いた', 'か', 'き', 'ける', 'かれて', 'かれた'],
            'ぐ': ['いで', 'いだ', 'が', 'ぎ', 'げる', 'がれて', 'がれた'],
            'す': ['して', 'した', 'さ', 'し', 'せる', 'されて', 'された'],
            'つ': ['って', 'った', 'た', 'ち', 'てる', 'たれて', 'たれた'],
            'ぬ': ['んで', 'んだ', 'な', 'に', 'ねる', 'なれて', 'なれた'],
            'ぶ': ['んで', 'んだ', 'ば', 'び', 'べる', 'ばれて', 'ばれた'],
            'む': ['んで', 'んだ', 'ま', 'み', 'める', 'まれて', 'まれた'],
            'る': ['って', 'った', 'ら', 'り', 'れる', 'られて', 'られた']
        };
        if (godan[last]) {
            godan[last].forEach((suffix) => values.push(root + suffix));
        }
    }

    function addAdjectiveAliases(values, baseKana) {
        const base = normalizeValue(baseKana);
        if (!base || !base.endsWith('い')) return;
        const stem = base.slice(0, -1);
        values.push(base, stem + 'く', stem + 'くて', stem + 'かった', stem + 'くない', stem + 'ければ');
    }

    function addMimeticAliases(values, baseKana) {
        const base = String(baseKana || '').trim();
        if (!base) return;
        values.push(base);
        if (base.endsWith('っ')) values.push(base + 'と');
        if (base.endsWith('り')) values.push(base + 'と');
        if (base.endsWith('と')) values.push(base.slice(0, -1));
    }

    function getLookupValuesForWord(word, adapters = {}) {
        const values = [
            word && word.word,
            getWordLabel(word),
            adapters.getKanaDisplayText ? adapters.getKanaDisplayText(word) : ''
        ];
        if (typeof adapters.getPracticeItems === 'function') {
            adapters.getPracticeItems(word).forEach((item) => values.push(item && item.answer));
        }

        const kanaBase = adapters.getKanaDisplayText ? adapters.getKanaDisplayText(word) : '';
        const posText = String(word && word.pos || '');
        addVerbAliases(values, kanaBase, posText);
        addAdjectiveAliases(values, kanaBase);
        addMimeticAliases(values, kanaBase);

        return unique(values);
    }

    function buildOptionDetail(config = {}) {
        const word = config.resolvedWord || null;
        const value = config.optionValue;
        const fallback = word ? null : (getFallbackOptionDetail(value) || buildGeneratedFallbackDetail(value));
        const wordLabel = word ? getWordLabel(word) : (fallback && fallback.baseForm ? fallback.baseForm : String(value || '').trim());
        const baseForm = getBaseFormLabel(word, fallback);
        const meaning = word ? getPrimaryMeaning(word) : (fallback && fallback.meaning ? fallback.meaning : '没有');
        const usage = word ? getPrimaryUsage(word) : (fallback && fallback.usage ? fallback.usage : '');
        const collocation = word ? getCollocation(word) : (fallback ? formatCollocation(fallback.collocation) : '');
        return {
            value,
            wordId: word && typeof config.getWordId === 'function' ? config.getWordId(word) : '',
            wordLabel,
            baseForm,
            meaning,
            usage: word ? (usage || meaning) : usage,
            collocation,
            isResolved: Boolean(word || fallback),
            isCorrect: Boolean(config.isCorrect)
        };
    }

    function buildReviewAnalysis(config = {}) {
        const optionDetails = Array.isArray(config.optionDetails) ? config.optionDetails : [];
        const correct = optionDetails.find((item) => item && item.isCorrect) || buildOptionDetail({
            resolvedWord: config.word,
            optionValue: config.correctAnswer || '',
            isCorrect: true,
            getWordId: config.getWordId
        });
        return {
            sentenceTranslation: config.sentenceTranslation || '',
            questionAnalysis: config.questionAnalysis || '',
            correct,
            distractors: optionDetails.filter((item) => item && !item.isCorrect),
            options: optionDetails
        };
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderLine(label, value, esc) {
        const text = String(value || '').trim();
        if (!text) return '';
        return `<div class="challenge-analysis-line"><span class="challenge-analysis-term">${esc(label)}：</span>${esc(text)}</div>`;
    }

    function renderReviewAnalysis(reviewAnalysis, options = {}) {
        const esc = typeof options.escapeHtml === 'function' ? options.escapeHtml : escapeHtml;
        if (!reviewAnalysis) return '';
        const correct = reviewAnalysis.correct || null;
        const blocks = [];

        if (reviewAnalysis.sentenceTranslation) {
            blocks.push(`<div class="challenge-analysis-block"><span class="challenge-analysis-label">句子翻译</span><div class="challenge-analysis-copy">${esc(reviewAnalysis.sentenceTranslation)}</div></div>`);
        }

        if (reviewAnalysis.questionAnalysis) {
            blocks.push(`<div class="challenge-analysis-block"><span class="challenge-analysis-label">题目解析</span><div class="challenge-analysis-copy">${esc(reviewAnalysis.questionAnalysis)}</div></div>`);
        }

        if (correct) {
            const correctLines = [
                renderLine('用法', correct.usage, esc),
                renderLine('常见搭配', correct.collocation, esc)
            ].filter(Boolean).join('');
            const correctLabel = correct.baseForm || correct.wordLabel || correct.value || '正确项';
            blocks.push(`<div class="challenge-analysis-block"><span class="challenge-analysis-label">正确项说明（${esc(correctLabel)}）</span><div class="challenge-analysis-copy">${correctLines}</div></div>`);
        }

        const distractors = Array.isArray(reviewAnalysis.distractors)
            ? reviewAnalysis.distractors
            : (Array.isArray(reviewAnalysis.options) ? reviewAnalysis.options.filter((item) => item && !item.isCorrect) : []);
        if (distractors.length > 0) {
            const optionsHtml = distractors.map((item) => {
                const optionTitle = item.value || item.wordLabel || '';
                const lines = [
                    renderLine('原型', item.baseForm || item.wordLabel, esc),
                    renderLine('用法', item.usage, esc),
                    renderLine('常见搭配', item.collocation, esc)
                ].filter(Boolean).join('');
                return `<div class="challenge-analysis-option"><div class="challenge-analysis-option-head">${esc(optionTitle)}</div><div class="challenge-analysis-option-copy">${lines}</div></div>`;
            }).join('');
            blocks.push(`<div class="challenge-analysis-block"><span class="challenge-analysis-label">选项辨析</span><div class="challenge-analysis-option-list">${optionsHtml}</div></div>`);
        }

        return `<span class="challenge-analysis-title">解析</span>${blocks.join('')}`;
    }

    global.VocabularySentenceAnalysis = {
        normalizeValue,
        getWordLabel,
        getBaseFormLabel,
        getLookupValuesForWord,
        getPrimaryMeaning,
        getPrimaryUsage,
        getCollocation,
        buildOptionDetail,
        buildReviewAnalysis,
        renderReviewAnalysis
    };
})(window);
