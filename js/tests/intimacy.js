var INTIMACY_TEST = {
    type: 'intimacy', icon: '💑', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'EI', zh: '我能向伴侣表达深层感受�?, en: 'I can express deep feelings to my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EI', zh: '我能与伴侣分享内心秘密�?, en: 'I can share inner secrets with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PI', zh: '我喜欢与伴侣有身体接触�?, en: 'I like physical contact with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PI', zh: '我能与伴侣保持眼神接触�?, en: 'I can maintain eye contact with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EI', zh: '我能与伴侣讨论未来的计划�?, en: 'I can discuss future plans with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EI', zh: '我能向伴侣表达脆弱的一面�?, en: 'I can show my vulnerable side to my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PI', zh: '我喜欢拥抱和亲吻�?, en: 'I like hugging and kissing.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EI', zh: '我能与伴侣分享我的恐惧�?, en: 'I can share my fears with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AI', zh: '我们有共同的兴趣爱好�?, en: 'We have shared interests and hobbies.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AI', zh: '我们一起参加活动�?, en: 'We participate in activities together.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EI', zh: '我能与伴侣讨论困难话题�?, en: 'I can discuss difficult topics with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PI', zh: '我喜欢牵手和依偎�?, en: 'I like holding hands and cuddling.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AI', zh: '我们有共同的朋友圈�?, en: 'We have a shared circle of friends.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EI', zh: '我能与伴侣分享我的梦想�?, en: 'I can share my dreams with my partner.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AI', zh: '我们有共同的生活目标�?, en: 'We have shared life goals.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'PI', zh: '身体亲密对我们关系很重要�?, en: 'Physical intimacy is important to our relationship.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { EI: { total: 0, count: 0 }, PI: { total: 0, count: 0 }, AI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var dimensions = [
            { name: 'Emotional', zh: '情感亲密', score: Math.round(((dims.EI.count > 0 ? dims.EI.total / dims.EI.count : 0) / 5) * 100) },
            { name: 'Physical', zh: '身体亲密', score: Math.round(((dims.PI.count > 0 ? dims.PI.total / dims.PI.count : 0) / 5) * 100) },
            { name: 'Activity', zh: '活动亲密', score: Math.round(((dims.AI.count > 0 ? dims.AI.total / dims.AI.count : 0) / 5) * 100) }
        ];
        var total = 0; dimensions.forEach(function(d) { total += d.score; });
        return { score: Math.round(total / 3), dimensions: dimensions };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '💔', title: '低亲密水�?, description: '你的亲密水平较低。建议更多地与伴侣分享感受和经历�?, color: '#F44336' },
            { range: [31, 60], icon: '💕', title: '中等亲密水平', description: '你有中等的亲密水平。你能在某些方面与伴侣建立连接�?, color: '#FFC107' },
            { range: [61, 100], icon: '❤️', title: '高亲密水�?, description: '你有很高的亲密水平。你与伴侣在情感、身体和活动上都有深度连接�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '💔', title: 'Low Intimacy', description: 'Your intimacy level is low. Consider sharing more feelings and experiences with your partner.', color: '#F44336' },
            { range: [31, 60], icon: '💕', title: 'Moderate Intimacy', description: 'You have moderate intimacy. You can connect with your partner in some areas.', color: '#FFC107' },
            { range: [61, 100], icon: '❤️', title: 'High Intimacy', description: 'You have high intimacy. You have deep connections with your partner emotionally, physically, and in activities.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的亲密水平', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Intimacy Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
