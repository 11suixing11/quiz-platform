var STRESS_TOLERANCE_TEST = {
    type: 'stress-tolerance', icon: '💪', color: '#795548',
    questions: [
        { id: 1, dimension: 'ST', zh: '我能在压力下保持冷静�?, en: 'I can stay calm under pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'ST', zh: '我能有效应对紧急情况�?, en: 'I can effectively handle emergencies.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'ST', zh: '我在高压环境下仍能高效工作�?, en: 'I can work efficiently under high pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'ST', zh: '我能快速从压力中恢复�?, en: 'I can recover quickly from stress.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'ST', zh: '我能管理多个压力源�?, en: 'I can manage multiple stressors.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'ST', zh: '我能保持积极的心态面对压力�?, en: 'I can maintain a positive mindset facing pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'ST', zh: '我能设定优先级来应对压力�?, en: 'I can set priorities to cope with pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'ST', zh: '我能寻求支持来应对压力�?, en: 'I can seek support to cope with pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'ST', zh: '我能保持身体健康来应对压力�?, en: 'I can maintain physical health to cope with pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'ST', zh: '我能有效管理时间来减少压力�?, en: 'I can effectively manage time to reduce pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'ST', zh: '我能保持清晰的思维面对压力�?, en: 'I can maintain clear thinking facing pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'ST', zh: '我能从压力中学习和成长�?, en: 'I can learn and grow from pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'ST', zh: '我能保持情绪稳定面对压力�?, en: 'I can maintain emotional stability facing pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'ST', zh: '我能有效解决问题来应对压力�?, en: 'I can effectively solve problems to cope with pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'ST', zh: '我能保持乐观面对压力�?, en: 'I can stay optimistic facing pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'ST', zh: '我能保持专注面对压力�?, en: 'I can stay focused facing pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😰', title: '低抗压能�?, description: '你的抗压能力较低。建议学习压力管理技巧，如放松训练、时间管理等�?, color: '#F44336' },
            { range: [31, 60], icon: '😐', title: '中等抗压能力', description: '你有中等的抗压能力。你能在某些情况下应对压力，但还有提升空间�?, color: '#FFC107' },
            { range: [61, 100], icon: '💪', title: '高抗压能�?, description: '你有很高的抗压能力。你能在压力下保持冷静和高效，这是很宝贵的能力�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😰', title: 'Low Stress Tolerance', description: 'Your stress tolerance is low. Consider learning stress management techniques like relaxation training and time management.', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: 'Moderate Stress Tolerance', description: 'You have moderate stress tolerance. You can handle pressure in some situations but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '💪', title: 'High Stress Tolerance', description: 'You have high stress tolerance. You can stay calm and efficient under pressure, which is a valuable ability.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的抗压能力', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Stress Tolerance', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
