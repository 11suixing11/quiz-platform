// @ts-nocheck
// Emotional Vocabulary Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const EMOTIONAL_VOCABULARY_TEST: any = {
    type: 'emotional-vocabulary', icon: '📖', color: '#AB47BC',
    questions: [
        // Granularity (GR) - 4 questions
        { id: 1, dimension: 'GR', zh: '我能够区分"不开心"和"失望"、"沮丧"、"悲伤"之间的不同。', en: 'I can distinguish between "unhappy" and "disappointed," "frustrated," or "sad."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'GR', zh: '我能用精确的词语描述自己当下的情绪状态，而不是笼统地说"还好"或"不好"。', en: 'I can use precise words to describe my current emotional state rather than vaguely saying "fine" or "not good."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'GR', zh: '我能识别出同一种情绪在不同情境下的细微差别。', en: 'I can identify subtle differences in the same emotion across different situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'GR', zh: '当我感到不舒服时，我能准确说出那是焦虑、愤怒、羞耻还是其他情绪。', en: 'When I feel uncomfortable, I can accurately name whether it\'s anxiety, anger, shame, or something else.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Differentiation (DI) - 4 questions
        { id: 5, dimension: 'DI', zh: '我能够同时感受到并识别出两种以上不同的情绪。', en: 'I can feel and identify two or more different emotions simultaneously.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DI', zh: '我能区分身体感受和情绪体验之间的差异。', en: 'I can distinguish between physical sensations and emotional experiences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DI', zh: '我能够区分相似情绪之间的微妙差异，如嫉妒与羡慕、内疚与羞耻。', en: 'I can distinguish subtle differences between similar emotions, like envy vs. jealousy, guilt vs. shame.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DI', zh: '我能够识别出情绪在时间和强度上的变化。', en: 'I can identify changes in emotions over time and in intensity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Complexity (CO) - 4 questions
        { id: 9, dimension: 'CO', zh: '我能够理解苦乐参半这种复杂的情感体验。', en: 'I can understand complex emotional experiences like bittersweetness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CO', zh: '我能够理解自己在面对好消息和坏消息同时出现时的复杂情绪。', en: 'I can understand my complex emotions when good and bad news arrive simultaneously.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CO', zh: '我认识到情绪可以有层次，比如在愤怒之下可能隐藏着受伤或恐惧。', en: 'I recognize that emotions can have layers, such as hurt or fear hidden beneath anger.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CO', zh: '我能够理解矛盾情绪，比如对同一个人既爱又气。', en: 'I can understand mixed emotions, like feeling both love and anger toward the same person.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Articulation (AR) - 4 questions
        { id: 13, dimension: 'AR', zh: '我能够向他人清楚地表达自己的情绪感受。', en: 'I can clearly express my emotional feelings to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AR', zh: '我能够使用比喻或类比来描述自己的情绪体验。', en: 'I can use metaphors or analogies to describe my emotional experiences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AR', zh: '我能够在日记或文字中准确地表达自己的情绪状态。', en: 'I can accurately express my emotional state in journaling or writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AR', zh: '当别人问我"你怎么了"时，我能给出具体而非笼统的回答。', en: 'When someone asks "what\'s wrong," I can give a specific rather than vague answer.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        GR: { color: '#CE93D8', mood: '细腻 · 精确 · 微妙', quote_zh: '情绪的语言越丰富，你对内心世界的理解就越深刻。', quote_en: 'The richer your emotional language, the deeper your understanding of your inner world.' },
        DI: { color: '#90CAF9', mood: '分辨 · 清晰 · 层次', quote_zh: '能够分辨情绪的细微差别，是情商的重要基础。', quote_en: 'Being able to distinguish subtle emotional differences is a crucial foundation of EQ.' },
        CO: { color: '#A5D6A7', mood: '深度 · 多维 · 包容', quote_zh: '拥抱情绪的复杂性，而不是急于简化它。', quote_en: 'Embrace the complexity of emotions rather than rushing to simplify them.' },
        AR: { color: '#FFCC80', mood: '表达 · 沟通 · 连接', quote_zh: '当你能说出感受，你就不再被感受所困。', quote_en: 'When you can name what you feel, you\'re no longer trapped by it.' }
    },

    types: {
        GR: {
            zh: { title: '情绪细腻型', name: '情绪颗粒度', description: '你在情绪的精细识别方面表现突出。你能够用准确的词语区分不同的情绪状态，而不是笼统地概括。这种高颗粒度的情绪识别能力帮助你更好地理解自己的内心世界，也让你在与他人沟通时更加精准。' },
            en: { title: 'Emotional Nuance Type', name: 'Emotional Granularity', description: 'You excel at fine-grained emotional identification. You can distinguish different emotional states with precise words rather than lumping them together. This high-granularity emotion recognition helps you better understand your inner world and communicate more precisely with others.' }
        },
        DI: {
            zh: { title: '情绪辨别型', name: '情绪辨别力', description: '你在区分相似情绪方面有着出色的敏感度。你能够察觉情绪之间的微妙差异，也能同时识别多种并存的情绪。这种辨别力让你不会被表面的情绪所迷惑，而是能够触及其背后更深层的体验。' },
            en: { title: 'Emotional Discrimination Type', name: 'Emotional Differentiation', description: 'You have excellent sensitivity in distinguishing similar emotions. You can detect subtle differences between emotions and identify multiple coexisting feelings simultaneously. This discrimination prevents you from being misled by surface emotions, allowing you to reach deeper experiences beneath.' }
        },
        CO: {
            zh: { title: '情绪深度型', name: '情绪复杂性', description: '你对情绪的复杂性有着深刻的理解。你能够接受矛盾情绪的存在，理解情绪的层次结构，并拥抱苦乐参半这种混合体验。这种对复杂性的包容能力让你的情感世界更加丰富和真实。' },
            en: { title: 'Emotional Depth Type', name: 'Emotional Complexity', description: 'You have a deep understanding of emotional complexity. You can accept the existence of contradictory emotions, understand the layered structure of feelings, and embrace mixed experiences like bittersweetness. This tolerance for complexity makes your emotional world richer and more authentic.' }
        },
        AR: {
            zh: { title: '情绪表达型', name: '情绪表达力', description: '你在情绪的言语表达方面有着出色的能力。你能够用清晰、具体甚至富有诗意的方式向他人传达自己的内心感受。这种表达能力不仅帮助你获得他人的理解和支持，也是情绪整合的重要途径。' },
            en: { title: 'Emotional Articulation Type', name: 'Emotional Articulation', description: 'You have an outstanding ability to verbally express emotions. You can convey your inner feelings to others in clear, specific, and even poetic ways. This articulation ability not only helps you gain understanding and support from others but also serves as an important pathway for emotional integration.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { GR: { total: 0, count: 0 }, DI: { total: 0, count: 0 }, CO: { total: 0, count: 0 }, AR: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { GR: dims.GR.total, DI: dims.DI.total, CO: dims.CO.total, AR: dims.AR.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'GR', zh: '情绪颗粒度', score: percentages.GR },
                { name: 'DI', zh: '情绪辨别力', score: percentages.DI },
                { name: 'CO', zh: '情绪复杂性', score: percentages.CO },
                { name: 'AR', zh: '情绪表达力', score: percentages.AR }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的情感词汇画像', disclaimer: '本测试仅供参考，帮助你了解自己在情绪颗粒度、辨别力、复杂性理解和表达能力方面的发展状况。丰富的内心语言是情商发展的重要基础。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Emotional Vocabulary Profile', disclaimer: 'This test is for reference only, helping you understand your development in emotional granularity, differentiation, complexity understanding, and articulation ability. A rich inner language is a crucial foundation for emotional intelligence development.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default EMOTIONAL_VOCABULARY_TEST;
