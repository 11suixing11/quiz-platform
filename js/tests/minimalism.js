var MINIMALISM_TEST = {
    type: 'minimalism', icon: '🧘', color: '#607D8B',
    questions: [
        { id: 1, dimension: 'MI', zh: '我喜欢简单的生活方式。', en: 'I like a simple lifestyle.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'MI', zh: '我定期清理不需要的物品。', en: 'I regularly declutter unnecessary items.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'MI', zh: '我不喜欢囤积物品。', en: 'I don\'t like hoarding items.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'MI', zh: '我更看重体验而非物质。', en: 'I value experiences over material things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'MI', zh: '我会避免冲动消费。', en: 'I avoid impulse buying.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'MI', zh: '我喜欢整洁的环境。', en: 'I like a tidy environment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'MI', zh: '我会选择质量好而非数量多的物品。', en: 'I choose quality over quantity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'MI', zh: '我不需要很多物品就能感到快乐。', en: 'I don\'t need many items to be happy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MI', zh: '我会定期捐赠不需要的物品。', en: 'I regularly donate items I don\'t need.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MI', zh: '我喜欢简约的设计风格。', en: 'I like minimalist design style.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MI', zh: '我会避免购买不必要的东西。', en: 'I avoid buying unnecessary things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MI', zh: '我更喜欢少而精的物品。', en: 'I prefer fewer but better items.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'MI', zh: '我会避免过度装饰。', en: 'I avoid over-decoration.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MI', zh: '我会选择多功能的物品。', en: 'I choose multi-functional items.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'MI', zh: '我会避免重复购买类似的物品。', en: 'I avoid buying similar items repeatedly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'MI', zh: '我喜欢简单而有意义的生活。', en: 'I like a simple and meaningful life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🛍️', title: '低极简倾向', description: '你的极简倾向很低。你可能喜欢收集物品，享受物质带来的快乐。', color: '#FFC107' },
            { range: [31, 60], icon: '⚖️', title: '中等极简倾向', description: '你有中等的极简倾向。你能在某些方面简化生活，但也有享受物质的时候。', color: '#FF9800' },
            { range: [61, 100], icon: '🧘', title: '高极简倾向', description: '你有很高的极简倾向。你喜欢简单的生活方式，更看重体验而非物质。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🛍️', title: 'Low Minimalism', description: 'Your minimalism tendency is low. You may enjoy collecting items and the happiness物质 brings.', color: '#FFC107' },
            { range: [31, 60], icon: '⚖️', title: 'Moderate Minimalism', description: 'You have moderate minimalism tendency. You can simplify life in some areas but also enjoy material things.', color: '#FF9800' },
            { range: [61, 100], icon: '🧘', title: 'High Minimalism', description: 'You have high minimalism tendency. You like a simple lifestyle and value experiences over material things.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的极简主义倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Minimalism Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
