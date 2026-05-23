var SOCIAL_NETWORK_TEST = {
    type: 'social-network', icon: '🌐', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'NS', zh: '我有很多朋友。', en: 'I have many friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'NS', zh: '我认识来自不同领域的人。', en: 'I know people from different fields.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'NS', zh: '我的社交圈子很广。', en: 'My social circle is wide.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'NS', zh: '我能轻松扩展人脉。', en: 'I can easily expand my network.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'QS', zh: '我和朋友有深入的交流。', en: 'I have deep conversations with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'QS', zh: '我的朋友都值得信赖。', en: 'My friends are trustworthy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'QS', zh: '我和朋友互相支持。', en: 'My friends and I support each other.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'QS', zh: '我的友谊很持久。', en: 'My friendships are long-lasting.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MA', zh: '我经常维护社交关系。', en: 'I often maintain social relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MA', zh: '我会主动联系朋友。', en: 'I proactively contact friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MA', zh: '我会记住重要的日子。', en: 'I remember important dates.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MA', zh: '我会帮助朋友解决问题。', en: 'I help friends solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'UT', zh: '我能从社交中获得资源。', en: 'I can gain resources from socializing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'UT', zh: '我的人脉对事业有帮助。', en: 'My network helps my career.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'UT', zh: '我能通过社交获取信息。', en: 'I can obtain information through socializing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'UT', zh: '社交帮助我成长。', en: 'Socializing helps me grow.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { NS: { total: 0, count: 0 }, QS: { total: 0, count: 0 }, MA: { total: 0, count: 0 }, UT: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'NS', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'NS': { zh: { title: '广泛社交型', name: '广泛社交型', description: '你是广泛社交型。你的社交圈子很广，认识来自不同领域的人。' }, en: { title: 'Wide Networker', name: 'Wide Networker', description: 'You are a wide networker. Your social circle is wide and you know people from different fields.' } },
        'QS': { zh: { title: '深度社交型', name: '深度社交型', description: '你是深度社交型。你注重友谊质量，与朋友有深入交流。' }, en: { title: 'Deep Connector', name: 'Deep Connector', description: 'You are a deep connector. You value friendship quality and have deep conversations with friends.' } },
        'MA': { zh: { title: '关系维护型', name: '关系维护型', description: '你是关系维护型。你善于维护社交关系，主动联系朋友。' }, en: { title: 'Relationship Maintainer', name: 'Relationship Maintainer', description: 'You are a relationship maintainer. You are good at maintaining social relationships and proactively contacting friends.' } },
        'UT': { zh: { title: '实用社交型', name: '实用社交型', description: '你是实用社交型。你能从社交中获取资源和信息，促进个人成长。' }, en: { title: 'Utility Networker', name: 'Utility Networker', description: 'You are a utility networker. You can gain resources and information from socializing, promoting personal growth.' } }
    },
    uiText: {
        zh: { resultTitle: '你的社交网络风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Social Network Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
