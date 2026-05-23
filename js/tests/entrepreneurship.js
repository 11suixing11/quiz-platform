var ENTREPRENEURSHIP_TEST = {
    type: 'entrepreneurship', icon: '🚀', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'EN', zh: '我喜欢冒险。', en: 'I like taking risks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EN', zh: '我善于发现商机。', en: 'I am good at spotting business opportunities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EN', zh: '我喜欢创新。', en: 'I like innovation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EN', zh: '我能承受不确定性。', en: 'I can tolerate uncertainty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EN', zh: '我喜欢自己做决定。', en: 'I like making my own decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EN', zh: '我有强烈的成就动机。', en: 'I have a strong achievement motivation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EN', zh: '我能快速从失败中恢复。', en: 'I can recover quickly from failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EN', zh: '我喜欢创造新事物。', en: 'I like creating new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EN', zh: '我能说服他人支持我的想法。', en: 'I can persuade others to support my ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EN', zh: '我善于资源整合。', en: 'I am good at integrating resources.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EN', zh: '我能承受压力。', en: 'I can withstand pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EN', zh: '我喜欢挑战现状。', en: 'I like challenging the status quo.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EN', zh: '我有强烈的责任感。', en: 'I have a strong sense of responsibility.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EN', zh: '我能有效管理时间。', en: 'I can effectively manage time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EN', zh: '我喜欢学习新技能。', en: 'I like learning new skills.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EN', zh: '我渴望财务自由。', en: 'I long for financial freedom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🏢', title: '低创业倾向', description: '你的创业倾向较低。你更喜欢稳定的工作环境，不太喜欢冒险。这完全没问题。', color: '#4CAF50' },
            { range: [31, 60], icon: '🤔', title: '中等创业倾向', description: '你有中等的创业倾向。你有一些创业特质，但可能还需要更多准备。', color: '#FFC107' },
            { range: [61, 100], icon: '🚀', title: '高创业倾向', description: '你有很高的创业倾向。你具备创业者的特质，如冒险精神、创新能力和成就动机。', color: '#FF5722' }
        ],
        en: [
            { range: [0, 30], icon: '🏢', title: 'Low Entrepreneurial Tendency', description: 'Your entrepreneurial tendency is low. You prefer stable work environments and don\'t like risk much. That\'s perfectly fine.', color: '#4CAF50' },
            { range: [31, 60], icon: '🤔', title: 'Moderate Entrepreneurial Tendency', description: 'You have moderate entrepreneurial tendency. You have some entrepreneurial traits but may need more preparation.', color: '#FFC107' },
            { range: [61, 100], icon: '🚀', title: 'High Entrepreneurial Tendency', description: 'You have high entrepreneurial tendency. You possess entrepreneurial traits like risk-taking, innovation, and achievement motivation.', color: '#FF5722' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的创业倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Entrepreneurial Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
