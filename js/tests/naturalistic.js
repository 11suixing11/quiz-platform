const NATURALISTIC_INTELLIGENCE_TEST = {
    type: 'naturalistic-intelligence', icon: '🌿', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'NI', zh: '我喜欢亲近自然。', en: 'I enjoy being close to nature.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'NI', zh: '我能轻松地识别不同的植物。', en: 'I can easily identify different plants.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'NI', zh: '我喜欢户外活动。', en: 'I like outdoor activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'NI', zh: '我能轻松地识别不同的动物。', en: 'I can easily identify different animals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'NI', zh: '我喜欢观察自然现象。', en: 'I like observing natural phenomena.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'NI', zh: '我喜欢园艺和种植。', en: 'I like gardening and planting.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'NI', zh: '我能轻松地识别不同的天气模式。', en: 'I can easily identify different weather patterns.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'NI', zh: '我喜欢收集自然标本。', en: 'I like collecting natural specimens.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'NI', zh: '我能轻松地识别不同的矿物。', en: 'I can easily identify different minerals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'NI', zh: '我喜欢探索自然环境。', en: 'I like exploring natural environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'NI', zh: '我能轻松地识别不同的生态系统。', en: 'I can easily identify different ecosystems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'NI', zh: '我喜欢户外探险。', en: 'I like outdoor adventures.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'NI', zh: '我能轻松地识别不同的地形。', en: 'I can easily identify different terrains.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'NI', zh: '我喜欢研究自然规律。', en: 'I like studying natural laws.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'NI', zh: '我能轻松地识别不同的季节变化。', en: 'I can easily identify different seasonal changes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'NI', zh: '我喜欢环保和可持续发展。', en: 'I like environmental protection and sustainability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🏙️', title: '低自然智能', description: '你的自然智能较低。建议多亲近自然，观察自然现象。', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等自然智能', description: '你有中等的自然智能。你能在某些方面观察和理解自然，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: '高自然智能', description: '你有很高的自然智能。你善于观察、分类和理解自然现象。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🏙️', title: 'Low Naturalistic Intelligence', description: 'Your naturalistic intelligence is low. Consider spending more time in nature and observing natural phenomena.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Naturalistic Intelligence', description: 'You have moderate naturalistic intelligence. You can observe and understand nature in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: 'High Naturalistic Intelligence', description: 'You have high naturalistic intelligence. You excel at observing, classifying, and understanding natural phenomena.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的自然智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Naturalistic Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
