var DECISION_STYLE_TEST = {
    type: 'decision-style', icon: '🎯', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'RA', zh: '我做决定前会收集大量信息。', en: 'I collect a lot of information before making decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RA', zh: '我用逻辑分析来做决定。', en: 'I use logical analysis to make decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'IN', zh: '我依靠直觉做决定。', en: 'I rely on intuition to make decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'IN', zh: '我凭感觉做决定。', en: 'I make decisions based on feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DP', zh: '我会咨询他人意见后做决定。', en: 'I consult others before making decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DP', zh: '我依赖他人的建议。', en: 'I rely on others\' advice.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AV', zh: '我尽量避免做决定。', en: 'I try to avoid making decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AV', zh: '我把决定推迟到最后一刻。', en: 'I postpone decisions until the last moment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'RA', zh: '我会列出利弊清单。', en: 'I make pros and cons lists.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'IN', zh: '我的第一感觉通常是正确的。', en: 'My first feeling is usually right.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DP', zh: '我喜欢集体讨论后做决定。', en: 'I like making decisions after group discussion.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AV', zh: '我害怕做错决定。', en: 'I fear making wrong decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RA', zh: '我会研究所有可能的选择。', en: 'I research all possible options.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IN', zh: '我能快速做出决定。', en: 'I can make decisions quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DP', zh: '我相信集体智慧。', en: 'I believe in collective wisdom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AV', zh: '我让别人替我做决定。', en: 'I let others make decisions for me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { RA: { total: 0, count: 0 }, IN: { total: 0, count: 0 }, DP: { total: 0, count: 0 }, AV: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'RA', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'RA': { zh: { title: '理性分析型', name: '理性分析型', description: '你是理性分析型决策者。你收集大量信息，用逻辑分析来做决定。你的决定通常基于事实和数据。' }, en: { title: 'Rational Analytical', name: 'Rational Analytical', description: 'You are a rational analytical decision-maker. You collectextensive information and use logical analysis. Your decisions are usually based on facts and data.' } },
        'IN': { zh: { title: '直觉型', name: '直觉型', description: '你是直觉型决策者。你依靠直觉和感觉做决定，能快速做出判断。你的决定通常基于经验和感觉。' }, en: { title: 'Intuitive', name: 'Intuitive', description: 'You are an intuitive decision-maker. You rely on intuition and feelings, and can make quick judgments. Your decisions are usually based on experience and feelings.' } },
        'DP': { zh: { title: '依赖型', name: '依赖型', description: '你是依赖型决策者。你倾向于咨询他人意见，相信集体智慧。你的决定通常考虑他人的建议。' }, en: { title: 'Dependent', name: 'Dependent', description: 'You are a dependent decision-maker. You tend to consult others and believe in collective wisdom. Your decisions usually consider others\' advice.' } },
        'AV': { zh: { title: '回避型', name: '回避型', description: '你是回避型决策者。你尽量避免做决定，害怕犯错。建议学习更积极的决策方式。' }, en: { title: 'Avoidant', name: 'Avoidant', description: 'You are an avoidant decision-maker. You try to avoid making decisions and fear making mistakes. Consider learning more active decision-making approaches.' } }
    },
    uiText: {
        zh: { resultTitle: '你的决策风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Decision Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
