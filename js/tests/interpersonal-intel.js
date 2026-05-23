const INTERPERSONAL_INTELLIGENCE_TEST = {
    type: 'interpersonal-intelligence', icon: '👥', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'II', zh: '我能轻松地理解他人的感受。', en: 'I can easily understand others\' feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'II', zh: '我能有效地与他人沟通。', en: 'I can communicate effectively with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'II', zh: '我能建立良好的人际关系。', en: 'I can build good relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'II', zh: '我能有效地解决冲突。', en: 'I can effectively resolve conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'II', zh: '我能与不同类型的人相处。', en: 'I can get along with different types of people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'II', zh: '我能感知他人的情绪变化。', en: 'I can sense others\' emotional changes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'II', zh: '我能有效地倾听他人。', en: 'I can effectively listen to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'II', zh: '我能给予他人有效的反馈。', en: 'I can give others effective feedback.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'II', zh: '我能与团队有效合作。', en: 'I can collaborate effectively with a team.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'II', zh: '我能理解他人的观点。', en: 'I can understand others\' perspectives.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'II', zh: '我能影响和激励他人。', en: 'I can influence and motivate others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'II', zh: '我能处理人际关系中的困难。', en: 'I can handle difficulties in relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'II', zh: '我能与他人建立信任。', en: 'I can build trust with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'II', zh: '我能适当地表达赞美和批评。', en: 'I can appropriately express praise and criticism.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'II', zh: '我能适应不同的社交场合。', en: 'I can adapt to different social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'II', zh: '我能与他人分享快乐和悲伤。', en: 'I can share happiness and sadness with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😶', title: '低人际智能', description: '你的人际智能较低。建议多练习社交技巧，学习倾听和理解他人。', color: '#F44336' },
            { range: [31, 60], icon: '👥', title: '中等人际智能', description: '你有中等的人际智能。你能在某些方面与他人建立关系，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🤝', title: '高人际智能', description: '你有很高的人际智能。你善于理解他人、建立关系和解决冲突。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😶', title: 'Low Interpersonal Intelligence', description: 'Your interpersonal intelligence is low. Consider practicing social skills, learning to listen and understand others.', color: '#F44336' },
            { range: [31, 60], icon: '👥', title: 'Moderate Interpersonal Intelligence', description: 'You have moderate interpersonal intelligence. You can build relationships in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🤝', title: 'High Interpersonal Intelligence', description: 'You have high interpersonal intelligence. You excel at understanding others, building relationships, and resolving conflicts.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的人际智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Interpersonal Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
