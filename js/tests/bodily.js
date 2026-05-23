var BODILY_INTELLIGENCE_TEST = {
    type: 'bodily-intelligence', icon: '🏃', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'BI', zh: '我喜欢运动和体育活动。', en: 'I enjoy sports and physical activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'BI', zh: '我能轻松地学习新的身体技能。', en: 'I can easily learn new physical skills.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'BI', zh: '我有良好的身体协调性。', en: 'I have good body coordination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'BI', zh: '我喜欢动手制作东西。', en: 'I like making things with my hands.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'BI', zh: '我能通过身体表达情感。', en: 'I can express emotions through my body.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'BI', zh: '我喜欢舞蹈和表演。', en: 'I like dance and performance.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'BI', zh: '我有良好的平衡感。', en: 'I have good balance.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'BI', zh: '我喜欢户外活动。', en: 'I like outdoor activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'BI', zh: '我能快速反应。', en: 'I can react quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'BI', zh: '我喜欢手工艺。', en: 'I like handicrafts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'BI', zh: '我能很好地控制身体。', en: 'I can control my body well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'BI', zh: '我喜欢烹饪和烘焙。', en: 'I like cooking and baking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'BI', zh: '我喜欢园艺。', en: 'I like gardening.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'BI', zh: '我喜欢机械操作。', en: 'I like operating machinery.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'BI', zh: '我能通过身体语言沟通。', en: 'I can communicate through body language.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'BI', zh: '我喜欢冒险和刺激的活动。', en: 'I like adventurous and exciting activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📚', title: '低身体智能', description: '你的身体智能较低。建议多参加体育活动和动手实践。', color: '#F44336' },
            { range: [31, 60], icon: '🏃', title: '中等身体智能', description: '你有中等的身体智能。你能在某些方面进行身体活动，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '💪', title: '高身体智能', description: '你有很高的身体智能。你善于运动、动手制作和身体表达。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📚', title: 'Low Bodily Intelligence', description: 'Your bodily intelligence is low. Consider participating in more sports and hands-on activities.', color: '#F44336' },
            { range: [31, 60], icon: '🏃', title: 'Moderate Bodily Intelligence', description: 'You have moderate bodily intelligence. You can engage in physical activities in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '💪', title: 'High Bodily Intelligence', description: 'You have high bodily intelligence. You excel at sports, hands-on creation, and physical expression.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的身体智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Bodily Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
