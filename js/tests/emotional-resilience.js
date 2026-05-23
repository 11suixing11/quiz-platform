var EMOTIONAL_RESILIENCE_TEST = {
    type: 'emotional-resilience', icon: '🌱', color: '#8BC34A',
    questions: [
        { id: 1, dimension: 'ER', zh: '我能很快从负面情绪中恢复�?, en: 'I recover quickly from negative emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'ER', zh: '我能识别自己的情绪状态�?, en: 'I can identify my emotional states.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'ER', zh: '我能有效地管理自己的情绪�?, en: 'I can manage my emotions effectively.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'ER', zh: '面对挫折我能保持冷静�?, en: 'I stay calm when facing setbacks.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'ER', zh: '我能从失败中找到积极的一面�?, en: 'I can find positive aspects in failure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'ER', zh: '我能接受自己的不完美�?, en: 'I can accept my imperfections.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'ER', zh: '我能在压力下保持清醒思考�?, en: 'I can think clearly under pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'ER', zh: '我能从困难经历中学到东西�?, en: 'I can learn from difficult experiences.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'ER', zh: '我能控制自己的情绪反应�?, en: 'I can control my emotional reactions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'ER', zh: '我能用健康的方式表达情绪�?, en: 'I can express emotions in healthy ways.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'ER', zh: '我能从他人那里获得情感支持�?, en: 'I can get emotional support from others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'ER', zh: '我能调节自己的负面情绪�?, en: 'I can regulate my negative emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'ER', zh: '我能从痛苦中找到意义�?, en: 'I can find meaning in pain.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'ER', zh: '我能保持情绪稳定�?, en: 'I can maintain emotional stability.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'ER', zh: '我能从困境中走出来�?, en: 'I can get out of difficult situations.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'ER', zh: '我对自己的情绪有信心�?, en: 'I am confident in my emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🌱', title: '低情绪复原力', description: '你的情绪复原力较低。建议学习情绪调节技巧，培养积极的应对策略�?, color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等情绪复原�?, description: '你有中等的情绪复原力。你能在一定程度上管理情绪，但还有提升空间�?, color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: '高情绪复原力', description: '你有很强的情绪复原力。你善于管理情绪，能从负面经历中快速恢复�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🌱', title: 'Low Emotional Resilience', description: 'Your emotional resilience is low. Consider learning emotion regulation techniques and developing positive coping strategies.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Emotional Resilience', description: 'You have moderate emotional resilience. You can manage emotions to some extent, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: 'High Emotional Resilience', description: 'You have strong emotional resilience. You manage emotions well and recover quickly from negative experiences.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的情绪复原�?, disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Emotional Resilience', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
