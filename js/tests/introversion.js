const INTROVERSION_TEST = {
    type: 'introversion', icon: '🌙', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'IN', zh: '独处让我感到充电。', en: 'Being alone recharges me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'IN', zh: '大型社交活动让我感到疲惫。', en: 'Large social events drain me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'IN', zh: '我更喜欢深度对话而非闲聊。', en: 'I prefer deep conversations over small talk.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'IN', zh: '我在人群中感到不自在。', en: 'I feel uncomfortable in crowds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'IN', zh: '我喜欢在安静的环境中工作。', en: 'I like working in a quiet environment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'IN', zh: '我更喜欢和少数亲密朋友在一起。', en: 'I prefer being with a few close friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'IN', zh: '我在说话前会先思考。', en: 'I think before I speak.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'IN', zh: '我需要时间独处来处理想法。', en: 'I need alone time to process my thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'IN', zh: '我不喜欢成为注意力的中心。', en: 'I don\'t like being the center of attention.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'IN', zh: '我更喜欢文字沟通而非电话。', en: 'I prefer text communication over phone calls.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'IN', zh: '我在社交场合很快感到疲倦。', en: 'I get tired quickly in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'IN', zh: '我喜欢独自完成任务。', en: 'I like completing tasks alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IN', zh: '我更喜欢观察而非参与。', en: 'I prefer observing rather than participating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IN', zh: '我在派对上倾向于和一个人深入交谈。', en: 'At parties, I tend to have deep conversations with one person.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'IN', zh: '我喜欢有计划而非即兴社交。', en: 'I prefer planned social events over spontaneous ones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IN', zh: '我在嘈杂环境中很难集中注意力。', en: 'I find it hard to concentrate in noisy environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'IN', zh: '我更喜欢听别人说话。', en: 'I prefer listening to others speak.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'IN', zh: '我的朋友圈很小但很亲密。', en: 'My friend circle is small but close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'IN', zh: '我经常需要从社交中恢复。', en: 'I often need to recover from socializing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'IN', zh: '我喜欢在安静的地方度过周末。', en: 'I like spending weekends in quiet places.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '☀️', title: '外向型', description: '你更倾向于外向。你从社交中获取能量，喜欢与人互动。', color: '#FF9800' },
            { range: [31, 60], icon: '🌅', title: '中间型', description: '你在内向和外向之间平衡。你可以在社交和独处之间灵活切换。', color: '#9C27B0' },
            { range: [61, 100], icon: '🌙', title: '内向型', description: '你更倾向于内向。你从独处中获取能量，喜欢深度思考。', color: '#3F51B5' }
        ],
        en: [
            { range: [0, 30], icon: '☀️', title: 'Extrovert', description: 'You lean toward extroversion. You gain energy from socializing and enjoy interacting with people.', color: '#FF9800' },
            { range: [31, 60], icon: '🌅', title: 'Ambivert', description: 'You balance between introversion and extroversion. You can switch flexibly between socializing and being alone.', color: '#9C27B0' },
            { range: [61, 100], icon: '🌙', title: 'Introvert', description: 'You lean toward introversion. You gain energy from being alone and enjoy deep thinking.', color: '#3F51B5' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的内向指数', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '外向', scoreHigh: '内向' },
        en: { resultTitle: 'Your Introversion Index', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Extrovert', scoreHigh: 'Introvert' }
    }
};
