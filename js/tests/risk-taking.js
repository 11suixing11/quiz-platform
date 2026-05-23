var RISK_TAKING_TEST = {
    type: 'risk-taking', icon: '🎲', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'RT', zh: '我喜欢尝试新事物。', en: 'I like trying new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RT', zh: '我愿意承担财务风险。', en: 'I am willing to take financial risks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RT', zh: '我喜欢冒险活动。', en: 'I like adventurous activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RT', zh: '我愿意为了更大的回报承担风险。', en: 'I am willing to take risks for greater rewards.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'RT', zh: '我喜欢刺激和兴奋。', en: 'I like excitement and thrill.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RT', zh: '我愿意改变现状。', en: 'I am willing to change the status quo.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'RT', zh: '我能接受失败。', en: 'I can accept failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'RT', zh: '我喜欢挑战自己。', en: 'I like challenging myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'RT', zh: '我愿意探索未知领域。', en: 'I am willing to explore unknown areas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'RT', zh: '我能承受不确定性。', en: 'I can tolerate uncertainty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'RT', zh: '我喜欢竞争。', en: 'I like competition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'RT', zh: '我愿意为了目标冒险。', en: 'I am willing to take risks for my goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RT', zh: '我喜欢户外探险。', en: 'I like outdoor adventures.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'RT', zh: '我愿意尝试新的投资机会。', en: 'I am willing to try new investment opportunities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'RT', zh: '我喜欢极限运动。', en: 'I like extreme sports.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'RT', zh: '我愿意为了梦想放弃稳定。', en: 'I am willing to give up stability for my dreams.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🛡️', title: '低冒险倾向', description: '你的冒险倾向很低。你更喜欢稳定和安全，不太喜欢冒险。', color: '#4CAF50' },
            { range: [31, 60], icon: '⚖️', title: '中等冒险倾向', description: '你有中等的冒险倾向。你能在某些方面接受风险，但也会保持谨慎。', color: '#FFC107' },
            { range: [61, 100], icon: '🎲', title: '高冒险倾向', description: '你有很高的冒险倾向。你喜欢挑战和刺激，愿意为了更大的回报承担风险。', color: '#FF5722' }
        ],
        en: [
            { range: [0, 30], icon: '🛡️', title: 'Low Risk-Taking', description: 'Your risk-taking tendency is low. You prefer stability and safety and don\'t like taking risks.', color: '#4CAF50' },
            { range: [31, 60], icon: '⚖️', title: 'Moderate Risk-Taking', description: 'You have moderate risk-taking tendency. You can accept risks in some areas but also stay cautious.', color: '#FFC107' },
            { range: [61, 100], icon: '🎲', title: 'High Risk-Taking', description: 'You have high risk-taking tendency. You like challenges and excitement and are willing to take risks for greater rewards.', color: '#FF5722' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的冒险倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Risk-Taking Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
