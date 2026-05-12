window.VOCAB_ROLE_CONFIG = Object.freeze({
    verbs: Object.freeze({
        name: 'ウマ先生',
        label: '動詞',
        iconType: 'fa',
        icon: 'fa-horse',
        trainingTitle: '動詞訓練場',
        theme: Object.freeze({
            skyTop: '#ddf3ff',
            skyBottom: '#f7fcff',
            fieldTop: '#dff6dd',
            fieldBottom: '#eff9df',
            accent: '#3da0c5',
            accentSoft: '#ebf8ff',
            accentStrong: '#2a6f8c',
            accentLine: 'rgba(61, 160, 197, 0.24)',
            surface: 'rgba(255, 255, 255, 0.92)',
            surfaceStrong: '#ffffff',
            border: 'rgba(42, 111, 140, 0.14)',
            text: '#26313a',
            muted: '#6f7e86',
            success: '#2f9d6c',
            successSoft: '#e7faf0',
            danger: '#d96d6d',
            dangerSoft: '#fff0f0',
            shadow: '0 20px 40px rgba(61, 160, 197, 0.12)'
        }),
        dialogue: Object.freeze({
            intro: Object.freeze([
                '冷静下来，让我们开始动词的修行。',
                '一步一个脚印，基础最重要。准备好了吗？',
                '心如止水，方能看破词汇的真谛。'
            ]),
            standby: Object.freeze({
                reading: Object.freeze([
                    '「{word}」的节奏要稳，读音别乱。',
                    '先把「{word}」看稳，再下判断。',
                    '静下心来，别被「{word}」的字形带偏。'
                ]),
                meaning: Object.freeze([
                    '先沉住气，再看「{word}」的意思。',
                    '别急着作答，先把「{word}」的分量看清。',
                    '呼吸放稳，再去判断「{word}」的真意。'
                ]),
                sentence: Object.freeze([
                    '先看语境，再决定这一处该落什么动作。',
                    '不要急着出手，先把句子的气息理顺。',
                    '把前后的文脉看稳，这一空自然会清楚。'
                ]),
                fallback: Object.freeze([
                    '呼吸放稳，一题一题来。',
                    '不急，先看清，再作答。',
                    '修行讲究沉着，判断也一样。'
                ])
            }),
            ask_meaning: Object.freeze([
                '告诉我，{word} 的真意是？',
                '沉住气，选出正确的解释：{word}。',
                '{word} ...做出你的选择吧。'
            ]),
            ask_reading: Object.freeze([
                '看清字形，把 {word} 的读音找出来。',
                '{word} 的节奏要稳，读音别乱。',
                '先看汉字，再把 {word} 的读法判断出来。'
            ]),
            ask_sentence: Object.freeze([
                '读完整个语境，再选出空缺处最稳的动词。',
                '别急着出手，先看句子的走向。',
                '这一句的空位，需要你补上最合适的动作。'
            ]),
            correct: Object.freeze([
                '不错，基本功很扎实。',
                '就是这样，保持这个节奏。',
                '很好，继续保持，前进吧。'
            ]),
            wrong: Object.freeze([
                '太心急了。正解是「{correct}」。',
                '步伐乱了哦。记住，应当是「{correct}」。',
                '静心...正确的答案是「{correct}」。'
            ]),
            timeout: Object.freeze([
                '犹豫太久了，答案是「{correct}」。',
                '在战场上迟疑就会失败。是「{correct}」。'
            ])
        }),
        questionWeights: Object.freeze({
            meaning: 0.4,
            reading: 0.35,
            sentence: 0.25
        })
    })
});
