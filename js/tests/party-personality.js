var PARTY_PERSONALITY_TEST = {
    type: 'party-personality', icon: '🎉', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'LP', zh: '我喜欢参加派对。', en: 'I like attending parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LP', zh: '我是派对上的焦点。', en: 'I am the center of attention at parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LP', zh: '我喜欢组织派对活动。', en: 'I like organizing party activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LP', zh: '我喜欢在派对上认识新朋友。', en: 'I like meeting new friends at parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SP', zh: '我喜欢小型聚会。', en: 'I like small gatherings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SP', zh: '我更喜欢深度交流而非热闹。', en: 'I prefer deep conversations over liveliness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SP', zh: '我喜欢和熟悉的人聚会。', en: 'I like gathering with familiar people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SP', zh: '我在安静的环境中更舒适。', en: 'I am more comfortable in quiet environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'OP', zh: '我喜欢观察派对上的人。', en: 'I like observing people at parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'OP', zh: '我更喜欢看别人玩而非自己参与。', en: 'I prefer watching others play rather than participating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'OP', zh: '我在派对上话不多。', en: 'I don\'t talk much at parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'OP', zh: '我喜欢在角落里观察。', en: 'I like observing from the corner.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'HP', zh: '我喜欢在家休息而非参加派对。', en: 'I prefer resting at home over attending parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'HP', zh: '我觉得派对很无聊。', en: 'I find parties boring.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'HP', zh: '我更喜欢独处。', en: 'I prefer being alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'HP', zh: '我很少主动参加派对。', en: 'I rarely proactively attend parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { LP: { total: 0, count: 0 }, SP: { total: 0, count: 0 }, OP: { total: 0, count: 0 }, HP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'LP', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'LP': { zh: { title: '派对灵魂型', name: '派对灵魂型', description: '你是派对灵魂型。你喜欢热闹，是派对上的焦点和组织者。' }, en: { title: 'Party Soul', name: 'Party Soul', description: 'You are a party soul. You like excitement and are the center of attention and organizer at parties.' } },
        'SP': { zh: { title: '小型聚会型', name: '小型聚会型', description: '你是小型聚会型。你更喜欢小规模的深度交流。' }, en: { title: 'Small Gathering Person', name: 'Small Gathering Person', description: 'You are a small gathering person. You prefer small-scale deep conversations.' } },
        'OP': { zh: { title: '安静观察型', name: '安静观察型', description: '你是安静观察型。你喜欢在派对上观察他人，而非积极参与。' }, en: { title: 'Quiet Observer', name: 'Quiet Observer', description: 'You are a quiet observer. You like observing others at parties rather than actively participating.' } },
        'HP': { zh: { title: '居家型', name: '居家型', description: '你是居家型。你更喜欢在家休息，不太喜欢参加派对。' }, en: { title: 'Homebody', name: 'Homebody', description: 'You are a homebody. You prefer resting at home and don\'t like attending parties much.' } }
    },
    uiText: {
        zh: { resultTitle: '你的派对人格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Party Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
