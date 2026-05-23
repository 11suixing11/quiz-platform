var SOCIAL_SKILLS_TEST = {
    type: 'social-skills', icon: '🎭', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'SS', zh: '我能轻松地与陌生人交谈。', en: 'I can easily talk to strangers.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SS', zh: '我能理解他人的情绪。', en: 'I can understand others\' emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SS', zh: '我能有效地解决冲突。', en: 'I can effectively resolve conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SS', zh: '我能建立良好的人际关系。', en: 'I can build good relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SS', zh: '我能适应不同的社交场合。', en: 'I can adapt to different social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SS', zh: '我能有效地倾听他人。', en: 'I can effectively listen to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SS', zh: '我能清晰地表达自己的想法。', en: 'I can clearly express my thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SS', zh: '我能与不同类型的人相处。', en: 'I can get along with different types of people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SS', zh: '我能给予他人有用的反馈。', en: 'I can give others useful feedback.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SS', zh: '我能与团队有效合作。', en: 'I can collaborate effectively with a team.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SS', zh: '我能处理社交中的尴尬局面。', en: 'I can handle awkward social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SS', zh: '我能与他人建立信任。', en: 'I can build trust with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SS', zh: '我能适当地表达赞美。', en: 'I can appropriately express praise.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SS', zh: '我能尊重他人的界限。', en: 'I can respect others\' boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SS', zh: '我能与他人分享快乐。', en: 'I can share happiness with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SS', zh: '我能与他人建立深度连接。', en: 'I can build deep connections with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😶', title: '低社交技能', description: '你的社交技能较低。建议多练习社交技巧，如倾听、表达和冲突解决。', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: '中等社交技能', description: '你有中等的社交技能。你能在某些社交场合表现良好，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: '高社交技能', description: '你有很高的社交技能。你善于与他人建立关系，能有效沟通和解决冲突。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😶', title: 'Low Social Skills', description: 'Your social skills are low. Consider practicing social skills like listening, expressing, and conflict resolution.', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: 'Moderate Social Skills', description: 'You have moderate social skills. You can perform well in some social situations but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: 'High Social Skills', description: 'You have high social skills. You are good at building relationships, communicating effectively, and resolving conflicts.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的社交技能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Social Skills', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
