var BOUNDARIES_TEST = {
    type: 'boundaries', icon: '🛡�?, color: '#FF9800',
    questions: [
        { id: 1, dimension: 'HB', zh: '我能清楚表达自己的界限�?, en: 'I can clearly express my boundaries.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'HB', zh: '我能在需要时�?�?�?, en: 'I can say "no" when needed.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'HB', zh: '我保护自己的个人空间�?, en: 'I protect my personal space.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'HB', zh: '我尊重他人的界限�?, en: 'I respect others\' boundaries.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PB', zh: '我很难拒绝别人的请求�?, en: 'I find it hard to refuse others\' requests.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PB', zh: '我经常为了别人牺牲自己的需求�?, en: 'I often sacrifice my needs for others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PB', zh: '我害怕设置界限会伤害关系�?, en: 'I fear setting boundaries will harm relationships.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'HB', zh: '我能平衡自己的需求和他人的需求�?, en: 'I can balance my needs with others\' needs.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'HB', zh: '我能在被侵犯界限时表达不满�?, en: 'I can express dissatisfaction when my boundaries are crossed.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PB', zh: '我经常感到被他人利用�?, en: 'I often feel used by others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'HB', zh: '我能设定健康的情感界限�?, en: 'I can set healthy emotional boundaries.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PB', zh: '我害怕被拒绝所以不敢拒绝别人�?, en: 'I fear rejection so I don\'t dare refuse others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'HB', zh: '我能保护自己的隐私�?, en: 'I can protect my privacy.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'HB', zh: '我能在亲密关系中保持独立�?, en: 'I can maintain independence in intimate relationships.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PB', zh: '我很难对不合理的要求说不�?, en: 'I find it hard to say no to unreasonable demands.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'HB', zh: '我能设定合理的时间界限�?, en: 'I can set reasonable time boundaries.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { HB: { total: 0, count: 0 }, PB: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var hbAvg = dims.HB.count > 0 ? dims.HB.total / dims.HB.count : 0;
        var pbAvg = dims.PB.count > 0 ? dims.PB.total / dims.PB.count : 0;
        var score = Math.round(((hbAvg - pbAvg + 4) / 8) * 100);
        return { score: Math.max(0, Math.min(100, score)) };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🚫', title: '界限薄弱', description: '你的界限感薄弱。你可能很难拒绝他人，容易被利用。建议学习设定健康界限�?, color: '#F44336' },
            { range: [31, 60], icon: '🛡�?, title: '中等界限', description: '你有中等的界限感。你能在某些情况下设定界限，但还有提升空间�?, color: '#FFC107' },
            { range: [61, 100], icon: '🏰', title: '健康界限', description: '你有健康的界限感。你能保护自己的需求，同时尊重他人�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🚫', title: 'Weak Boundaries', description: 'Your boundaries are weak. You may find it hard to refuse others and get used easily. Consider learning to set healthy boundaries.', color: '#F44336' },
            { range: [31, 60], icon: '🛡�?, title: 'Moderate Boundaries', description: 'You have moderate boundaries. You can set limits in some situations but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🏰', title: 'Healthy Boundaries', description: 'You have healthy boundaries. You protect your needs while respecting others.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的界限�?, disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Boundaries', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Weak', scoreHigh: 'Strong' }
    }
};
