var CREATIVITY_TEST = {
    type: 'creativity', icon: '🎨', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'CR', zh: '我能从不同角度思考问题。', en: 'I can think about problems from different angles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CR', zh: '我喜欢尝试新方法。', en: 'I like trying new methods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CR', zh: '我能产生很多想法。', en: 'I can generate many ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CR', zh: '我喜欢想象各种可能性。', en: 'I like imagining various possibilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CR', zh: '我能将不同的想法联系起来。', en: 'I can connect different ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CR', zh: '我喜欢挑战传统观念。', en: 'I like challenging traditional ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CR', zh: '我能接受模糊和不确定性。', en: 'I can accept ambiguity and uncertainty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CR', zh: '我喜欢探索未知领域。', en: 'I like exploring unknown areas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CR', zh: '我能从失败中学习。', en: 'I can learn from failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CR', zh: '我喜欢自由表达。', en: 'I like free expression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CR', zh: '我能打破常规思维。', en: 'I can break conventional thinking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CR', zh: '我喜欢创造新的东西。', en: 'I like creating new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'CR', zh: '我能发现别人忽视的联系。', en: 'I can notice connections others overlook.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CR', zh: '我喜欢用比喻来解释事物。', en: 'I like using metaphors to explain things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CR', zh: '我能容忍不同的观点。', en: 'I can tolerate different viewpoints.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CR', zh: '我喜欢独立思考。', en: 'I like thinking independently.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📝', title: '低创造力', description: '你的创造力较低。建议多尝试新事物，培养发散思维。', color: '#F44336' },
            { range: [31, 60], icon: '✏️', title: '中等创造力', description: '你有中等的创造力。你能在某些方面有创意，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🎨', title: '高创造力', description: '你有很高的创造力。你善于产生新想法，从不同角度思考问题。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📝', title: 'Low Creativity', description: 'Your creativity is low. Consider trying new things and developing divergent thinking.', color: '#F44336' },
            { range: [31, 60], icon: '✏️', title: 'Moderate Creativity', description: 'You have moderate creativity. You can be creative in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🎨', title: 'High Creativity', description: 'You have high creativity. You are good at generating new ideas and thinking from different angles.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的创造力', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Creativity', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
