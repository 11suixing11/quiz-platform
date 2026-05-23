var ONLINE_SOCIAL_TEST = {
    type: 'online-social', icon: '💬', color: '#2196F3',
    questions: [
        { id: 1, dimension: 'OP', zh: '我喜欢在网上社交。', en: 'I like socializing online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'OP', zh: '我在网上比现实中更健谈。', en: 'I am more talkative online than in real life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'OP', zh: '我更容易在网上表达自己。', en: 'It\'s easier for me to express myself online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'OP', zh: '我在网上有很多朋友。', en: 'I have many friends online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'RL', zh: '我更喜欢面对面交流。', en: 'I prefer face-to-face communication.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RL', zh: '我觉得网上交流不够真实。', en: 'I think online communication is not real enough.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'RL', zh: '我更信任线下认识的朋友。', en: 'I trust friends I met offline more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'RL', zh: '我觉得网上的关系很浅。', en: 'I think online relationships are shallow.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'BD', zh: '我在网上能保持良好的界限。', en: 'I can maintain good boundaries online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'BD', zh: '我不会在网上分享过多个人信息。', en: 'I don\'t share too much personal information online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'BD', zh: '我能区分网上和现实的界限。', en: 'I can distinguish between online and offline boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'BD', zh: '我会保护自己的网络隐私。', en: 'I protect my online privacy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IN', zh: '我能在网上建立有意义的关系。', en: 'I can build meaningful relationships online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IN', zh: '我能通过网络找到志同道合的人。', en: 'I can find like-minded people through the internet.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'IN', zh: '网络帮助我拓展了视野。', en: 'The internet has broadened my horizons.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IN', zh: '我能在网上获得有价值的信息。', en: 'I can gain valuable information online.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { OP: { total: 0, count: 0 }, RL: { total: 0, count: 0 }, BD: { total: 0, count: 0 }, IN: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'OP', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'OP': { zh: { title: '网络社交型', name: '网络社交型', description: '你是网络社交型。你在网上比现实中更活跃，喜欢在线社交。' }, en: { title: 'Online Socializer', name: 'Online Socializer', description: 'You are an online socializer. You are more active online than in real life and enjoy online socializing.' } },
        'RL': { zh: { title: '现实社交型', name: '现实社交型', description: '你是现实社交型。你更喜欢面对面交流，觉得网上关系不够真实。' }, en: { title: 'Real-Life Socializer', name: 'Real-Life Socializer', description: 'You are a real-life socializer. You prefer face-to-face communication and find online relationships not real.' } },
        'BD': { zh: { title: '边界意识型', name: '边界意识型', description: '你是边界意识型。你在网上保持良好界限，保护隐私。' }, en: { title: 'Boundary-Aware', name: 'Boundary-Aware', description: 'You are boundary-aware. You maintain good boundaries online and protect your privacy.' } },
        'IN': { zh: { title: '网络探索型', name: '网络探索型', description: '你是网络探索型。你能通过网络找到志同道合的人，拓展视野。' }, en: { title: 'Online Explorer', name: 'Online Explorer', description: 'You are an online explorer. You can find like-minded people and broaden your horizons through the internet.' } }
    },
    uiText: {
        zh: { resultTitle: '你的网络社交风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Online Social Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
