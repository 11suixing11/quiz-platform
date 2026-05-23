var COMMUNICATION_STYLE_TEST = {
    type: 'communication-style', icon: '💬', color: '#2196F3',
    questions: [
        { id: 1, dimension: 'AS', zh: '我直接表达自己的想法。', en: 'I express my thoughts directly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AS', zh: '我在沟通中很果断。', en: 'I am assertive in communication.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AS', zh: '我能清晰表达自己的需求。', en: 'I can clearly express my needs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PA', zh: '我倾向于避免冲突。', en: 'I tend to avoid conflict.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PA', zh: '我很难说"不"。', en: 'I find it hard to say "no".', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PA', zh: '我更愿意配合他人。', en: 'I prefer to cooperate with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AG', zh: '我经常打断别人说话。', en: 'I often interrupt others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AG', zh: '我喜欢掌控对话。', en: 'I like to control the conversation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AG', zh: '我在争论中很强势。', en: 'I am aggressive in arguments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AN', zh: '我很少主动表达自己的想法。', en: 'I rarely proactively express my thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AN', zh: '我更喜欢倾听而非说话。', en: 'I prefer listening to speaking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AN', zh: '我在沟通中很被动。', en: 'I am passive in communication.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AS', zh: '我能有效表达不同意见。', en: 'I can effectively express disagreement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PA', zh: '我经常妥协来维持和平。', en: 'I often compromise to maintain peace.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AG', zh: '我用批评的方式表达不满。', en: 'I express dissatisfaction through criticism.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AN', zh: '我害怕表达不同意见。', en: 'I fear expressing different opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'AS', zh: '我能尊重地表达不同意见。', en: 'I can express disagreement respectfully.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'PA', zh: '我更愿意让步。', en: 'I prefer to give in.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'AG', zh: '我用命令的方式说话。', en: 'I speak in a commanding way.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'AN', zh: '我在社交场合很少发言。', en: 'I rarely speak in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AS: { total: 0, count: 0 }, PA: { total: 0, count: 0 }, AG: { total: 0, count: 0 }, AN: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AS', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AS': { zh: { title: '果断型', name: '果断型', description: '你是果断型沟通者。你直接、清晰地表达自己的想法和需求，同时尊重他人。你善于设定边界，在沟通中保持自信。' }, en: { title: 'Assertive', name: 'Assertive', description: 'You are an assertive communicator. You express your thoughts and needs directly and clearly while respecting others. You set boundaries well and stay confident in communication.' } },
        'PA': { zh: { title: '被动型', name: '被动型', description: '你是被动型沟通者。你倾向于避免冲突，经常妥协。你可能很难表达自己的需求和想法。' }, en: { title: 'Passive', name: 'Passive', description: 'You are a passive communicator. You tend to avoid conflict and often compromise. You may find it hard to express your needs and thoughts.' } },
        'AG': { zh: { title: '攻击型', name: '攻击型', description: '你是攻击型沟通者。你倾向于强势表达，可能打断他人。你需要学习更尊重他人的沟通方式。' }, en: { title: 'Aggressive', name: 'Aggressive', description: 'You are an aggressive communicator. You tend to be dominant and may interrupt others. Consider learning more respectful communication styles.' } },
        'AN': { zh: { title: '被动攻击型', name: '被动攻击型', description: '你是被动攻击型沟通者。你很少直接表达想法，但内心可能有不满。你需要学习更直接的沟通方式。' }, en: { title: 'Passive-Aggressive', name: 'Passive-Aggressive', description: 'You are a passive-aggressive communicator. You rarely express thoughts directly but may have inner dissatisfaction. Learn more direct communication styles.' } }
    },
    uiText: {
        zh: { resultTitle: '你的沟通风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Communication Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
