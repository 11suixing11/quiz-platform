const SOCIAL_INTELLIGENCE_TEST = {
    type: 'social-intelligence', icon: '🧠', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'SA', zh: '我能准确理解他人的情绪。', en: 'I can accurately understand others\' emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SA', zh: '我能读懂他人的肢体语言。', en: 'I can read others\' body language.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SA', zh: '我能察觉他人的真实意图。', en: 'I can detect others\' true intentions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SA', zh: '我能理解他人的言外之意。', en: 'I understand what others imply beyond their words.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SN', zh: '我能轻松融入新的社交场合。', en: 'I can easily fit into new social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SN', zh: '我能与不同类型的人相处。', en: 'I can get along with different types of people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SN', zh: '我能有效地化解社交冲突。', en: 'I can effectively resolve social conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SN', zh: '我能在社交场合中表现得体。', en: 'I can behave appropriately in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EI', zh: '我能影响他人的想法。', en: 'I can influence others\' thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EI', zh: '我能激励他人采取行动。', en: 'I can motivate others to take action.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EI', zh: '我能建立广泛的人际网络。', en: 'I can build a wide social network.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EI', zh: '我能说服他人接受我的观点。', en: 'I can persuade others to accept my viewpoint.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SC', zh: '我能控制自己的社交情绪。', en: 'I can control my social emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SC', zh: '我能在社交压力下保持冷静。', en: 'I can stay calm under social pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SC', zh: '我能适应不同的社交规则。', en: 'I can adapt to different social rules.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SC', zh: '我能妥善处理社交尴尬。', en: 'I can handle social awkwardness well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { SA: { total: 0, count: 0 }, SN: { total: 0, count: 0 }, EI: { total: 0, count: 0 }, SC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'SA', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'SA': { zh: { title: '社交感知型', name: '社交感知型', description: '你是社交感知型。你擅长理解他人情绪、读懂肢体语言和察觉真实意图。' }, en: { title: 'Social Perceiver', name: 'Social Perceiver', description: 'You are a social perceiver. You excel at understanding others\' emotions, reading body language, and detecting true intentions.' } },
        'SN': { zh: { title: '社交导航型', name: '社交导航型', description: '你是社交导航型。你能轻松融入新环境，与不同人相处，化解冲突。' }, en: { title: 'Social Navigator', name: 'Social Navigator', description: 'You are a social navigator. You can easily fit into new environments, get along with different people, and resolve conflicts.' } },
        'EI': { zh: { title: '社交影响型', name: '社交影响型', description: '你是社交影响型。你能影响他人、激励行动、建立广泛人脉。' }, en: { title: 'Social Influencer', name: 'Social Influencer', description: 'You are a social influencer. You can influence others, motivate action, and build wide networks.' } },
        'SC': { zh: { title: '社交控制型', name: '社交控制型', description: '你是社交控制型。你能控制情绪、适应规则、妥善处理社交尴尬。' }, en: { title: 'Social Controller', name: 'Social Controller', description: 'You are a social controller. You can control emotions, adapt to rules, and handle social awkwardness well.' } }
    },
    uiText: {
        zh: { resultTitle: '你的社交智力', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Social Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
