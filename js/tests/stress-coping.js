var STRESS_COPING_TEST = {
    type: 'stress-coping', icon: '🎯', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'PS', zh: '面对压力时我会制定计划�?, en: 'I make plans when facing stress.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PS', zh: '我会积极解决问题�?, en: 'I actively solve problems.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PS', zh: '我会寻找解决方案�?, en: 'I look for solutions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PS', zh: '我会把大问题分解成小步骤�?, en: 'I break big problems into small steps.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'ES', zh: '我会找人倾诉�?, en: 'I talk to someone about it.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'ES', zh: '我会寻求情感支持�?, en: 'I seek emotional support.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'ES', zh: '我会和朋友分享感受�?, en: 'I share feelings with friends.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'ES', zh: '我会寻求专业帮助�?, en: 'I seek professional help.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AV', zh: '我会逃避压力源�?, en: 'I avoid the source of stress.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AV', zh: '我会拖延处理问题�?, en: 'I procrastinate dealing with problems.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AV', zh: '我会假装问题不存在�?, en: 'I pretend problems don\'t exist.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AV', zh: '我会用娱乐来分散注意力�?, en: 'I use entertainment to distract myself.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RC', zh: '我会运动来减压�?, en: 'I exercise to relieve stress.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'RC', zh: '我会冥想或深呼吸�?, en: 'I meditate or practice deep breathing.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'RC', zh: '我会保持健康的生活习惯�?, en: 'I maintain healthy lifestyle habits.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'RC', zh: '我会培养兴趣爱好�?, en: 'I cultivate hobbies and interests.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { PS: { total: 0, count: 0 }, ES: { total: 0, count: 0 }, AV: { total: 0, count: 0 }, RC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'PS', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'PS': { zh: { title: '问题解决�?, name: '问题解决�?, description: '你是问题解决型。面对压力时，你会制定计划、积极解决问题�? }, en: { title: 'Problem Solver', name: 'Problem Solver', description: 'You are a problem solver. When facing stress, you make plans and actively solve problems.' } },
        'ES': { zh: { title: '情感支持�?, name: '情感支持�?, description: '你是情感支持型。面对压力时，你会找人倾诉、寻求情感支持�? }, en: { title: 'Emotional Supporter', name: 'Emotional Supporter', description: 'You are an emotional supporter. When facing stress, you talk to someone and seek emotional support.' } },
        'AV': { zh: { title: '回避逃避�?, name: '回避逃避�?, description: '你是回避逃避型。面对压力时，你倾向于逃避、拖延。建议学习更积极的应对方式�? }, en: { title: 'Avoider', name: 'Avoider', description: 'You are an avoider. When facing stress, you tend to avoid and procrastinate. Consider learning more active coping methods.' } },
        'RC': { zh: { title: '自我调节�?, name: '自我调节�?, description: '你是自我调节型。面对压力时，你会运动、冥想、保持健康习惯来调节�? }, en: { title: 'Self-Regulator', name: 'Self-Regulator', description: 'You are a self-regulator. When facing stress, you exercise, meditate, and maintain healthy habits to cope.' } }
    },
    uiText: {
        zh: { resultTitle: '你的压力应对方式', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Stress Coping Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
