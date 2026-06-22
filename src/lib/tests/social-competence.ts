// @ts-nocheck
// Social Competence Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const SOCIAL_COMPETENCE_TEST: any = {
    type: 'social-competence', icon: '🤝', color: '#29B6F6',
    questions: [
        // Social Initiative (SI) - 4 questions
        { id: 1, dimension: 'SI', zh: '我能够主动与不认识的人开启对话。', en: 'I can initiate conversations with people I don\'t know.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SI', zh: '我在社交场合中不会被动等待，而是积极参与。', en: 'I don\'t passively wait in social situations but actively participate.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SI', zh: '我愿意邀请他人一起参加活动或聚会。', en: 'I\'m willing to invite others to join activities or gatherings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SI', zh: '我能够在新的社交圈中主动建立联系。', en: 'I can proactively build connections in new social circles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Conversation Skills (CS) - 4 questions
        { id: 5, dimension: 'CS', zh: '我善于倾听他人说话，并给予有意义的回应。', en: 'I\'m good at listening to others and giving meaningful responses.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CS', zh: '我能够在对话中提出有深度的问题来推进交流。', en: 'I can ask insightful questions during conversations to advance the exchange.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CS', zh: '我能够根据对方的反应调整自己的表达方式。', en: 'I can adjust my expression based on the other person\'s reactions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CS', zh: '我能够在对话中自然地分享自己的想法和感受。', en: 'I can naturally share my thoughts and feelings during conversations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Empathy Expression (EE) - 4 questions
        { id: 9, dimension: 'EE', zh: '我能够感知到他人的情绪变化并做出适当的回应。', en: 'I can perceive others\' emotional changes and respond appropriately.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EE', zh: '当朋友遇到困难时，我能够表达出真正的理解和支持。', en: 'When friends face difficulties, I can express genuine understanding and support.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EE', zh: '我能够站在他人的角度看问题，即使我不同意他们的观点。', en: 'I can see things from others\' perspectives even when I disagree with them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EE', zh: '我善于用温暖的方式让他人感到被理解和被接纳。', en: 'I\'m good at making others feel understood and accepted in a warm way.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Conflict Navigation (CN) - 4 questions
        { id: 13, dimension: 'CN', zh: '当与他人发生分歧时，我能够保持冷静和尊重。', en: 'When disagreeing with others, I can stay calm and respectful.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CN', zh: '我能够用"我"的陈述来表达不满，而不是指责对方。', en: 'I can use "I" statements to express dissatisfaction rather than blaming the other person.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CN', zh: '我善于在冲突中找到双方都能接受的解决方案。', en: 'I\'m good at finding solutions that both parties can accept during conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CN', zh: '在冲突解决后，我能够修复关系而不留下怨恨。', en: 'After resolving conflicts, I can repair relationships without leaving resentment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        SI: { color: '#81D4FA', mood: '主动 · 勇敢 · 开放', quote_zh: '每一段有意义的连接，都始于一次勇敢的开口。', quote_en: 'Every meaningful connection begins with one brave opening.' },
        CS: { color: '#A5D6A7', mood: '倾听 · 表达 · 流畅', quote_zh: '好的对话是双向的桥梁，而不是单方面的独白。', quote_en: 'A good conversation is a two-way bridge, not a one-way monologue.' },
        EE: { color: '#CE93D8', mood: '共情 · 温暖 · 理解', quote_zh: '让他人感到被看见，是最珍贵的社交礼物。', quote_en: 'Making others feel seen is the most precious social gift.' },
        CN: { color: '#FFCC80', mood: '化解 · 包容 · 修复', quote_zh: '冲突不是关系的终结，而是通向更深理解的门槛。', quote_en: 'Conflict isn\'t the end of a relationship — it\'s a threshold to deeper understanding.' }
    },

    types: {
        SI: {
            zh: { title: '社交发起型', name: '社交主动性', description: '你在社交主动性方面表现出色。你不会被动等待机会，而是主动发起对话、建立联系、邀请他人。这种主动性让你拥有更广阔的社交网络和更多的社交机会。你是社交场合中的"破冰者"，你的主动往往能让其他人也感到更自在。' },
            en: { title: 'Social Initiator Type', name: 'Social Initiative', description: 'You excel in social initiative. You don\'t passively wait for opportunities but actively initiate conversations, build connections, and invite others. This initiative gives you a broader social network and more social opportunities. You\'re the "ice-breaker" in social settings, and your initiative often makes others feel more comfortable too.' }
        },
        CS: {
            zh: { title: '对话高手型', name: '对话技能', description: '你在对话技能方面有着出色的表现。你善于倾听、提出有深度的问题、根据对方调整表达方式，并自然地分享自己。这些技能让你的对话丰富而有意义，让与你交流的人感到被重视和被理解。你是那种让人想要深聊的人。' },
            en: { title: 'Conversation Master Type', name: 'Conversation Skills', description: 'You have excellent conversation skills. You\'re good at listening, asking insightful questions, adjusting your expression based on others, and sharing naturally. These skills make your conversations rich and meaningful, making people feel valued and understood when talking with you. You\'re the kind of person others want to have deep conversations with.' }
        },
        EE: {
            zh: { title: '共情表达型', name: '共情表达', description: '你在共情表达方面有着卓越的能力。你能够敏锐地感知他人的情绪变化，站在他人的角度看问题，并用温暖的方式表达理解和支持。这种共情能力让你成为朋友眼中的"温暖港湾"，人们在你身边感到安全和被接纳。' },
            en: { title: 'Empathic Expression Type', name: 'Empathy Expression', description: 'You have a remarkable ability in empathic expression. You can sensitively perceive others\' emotional changes, see things from their perspective, and express understanding and support in a warm way. This empathic ability makes you a "warm harbor" in friends\' eyes — people feel safe and accepted around you.' }
        },
        CN: {
            zh: { title: '冲突化解型', name: '冲突导航', description: '你在处理人际冲突方面有着出色的技巧。你能够在分歧中保持冷静和尊重，用建设性的方式表达不满，并善于寻找双赢的解决方案。冲突之后，你能够修复关系而不留下怨恨。这种能力让你在面对人际关系的挑战时显得格外成熟和可靠。' },
            en: { title: 'Conflict Navigator Type', name: 'Conflict Navigation', description: 'You have excellent skills in handling interpersonal conflicts. You can stay calm and respectful during disagreements, express dissatisfaction constructively, and be skilled at finding win-win solutions. After conflicts, you can repair relationships without lingering resentment. This ability makes you especially mature and reliable when facing interpersonal challenges.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { SI: { total: 0, count: 0 }, CS: { total: 0, count: 0 }, EE: { total: 0, count: 0 }, CN: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { SI: dims.SI.total, CS: dims.CS.total, EE: dims.EE.total, CN: dims.CN.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'SI', zh: '社交主动性', score: percentages.SI },
                { name: 'CS', zh: '对话技能', score: percentages.CS },
                { name: 'EE', zh: '共情表达', score: percentages.EE },
                { name: 'CN', zh: '冲突导航', score: percentages.CN }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的社交能力画像', disclaimer: '本测试仅供参考，帮助你了解自己在社交主动性、对话技能、共情表达和冲突导航方面的能力。社交能力是可以持续提升的，每一次真诚的交流都是成长的机会。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Social Competence Profile', disclaimer: 'This test is for reference only, helping you understand your abilities in social initiative, conversation skills, empathy expression, and conflict navigation. Social competence can be continuously improved — every genuine exchange is an opportunity for growth.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default SOCIAL_COMPETENCE_TEST;
