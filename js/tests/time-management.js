const TIME_MANAGEMENT_TEST = {
    type: 'time-management', icon: '⏰', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'TM', zh: '我每天都有明确的计划。', en: 'I have a clear plan every day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'TM', zh: '我能区分重要和紧急的任务。', en: 'I can distinguish between important and urgent tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'TM', zh: '我按时完成任务。', en: 'I complete tasks on time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'TM', zh: '我能有效利用碎片时间。', en: 'I effectively use fragmented time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'TM', zh: '我有良好的时间管理习惯。', en: 'I have good time management habits.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'TM', zh: '我能设定优先级。', en: 'I can set priorities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'TM', zh: '我能避免时间浪费。', en: 'I can avoid wasting time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'TM', zh: '我能平衡工作和休息。', en: 'I can balance work and rest.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'TM', zh: '我能专注地完成任务。', en: 'I can focus on completing tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'TM', zh: '我能有效管理多任务。', en: 'I can effectively manage multiple tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'TM', zh: '我能遵守时间承诺。', en: 'I can keep time commitments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'TM', zh: '我能设定现实的目标。', en: 'I can set realistic goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'TM', zh: '我能有效应对干扰。', en: 'I can effectively deal with distractions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'TM', zh: '我能定期回顾和调整计划。', en: 'I can regularly review and adjust plans.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'TM', zh: '我能合理估计任务所需时间。', en: 'I can reasonably estimate task duration.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'TM', zh: '我能有效利用工具来管理时间。', en: 'I can effectively use tools to manage time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '⏰', title: '低时间管理能力', description: '你的时间管理能力较低。建议学习时间管理技巧，如设定优先级、制定计划等。', color: '#F44336' },
            { range: [31, 60], icon: '⏱️', title: '中等时间管理能力', description: '你有中等的时间管理能力。你能在某些方面有效管理时间，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '✅', title: '高时间管理能力', description: '你有很高的时间管理能力。你善于计划、优先排序和执行，能高效利用时间。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '⏰', title: 'Low Time Management', description: 'Your time management skills are low. Consider learning time management techniques like setting priorities and making plans.', color: '#F44336' },
            { range: [31, 60], icon: '⏱️', title: 'Moderate Time Management', description: 'You have moderate time management skills. You can manage time effectively in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '✅', title: 'High Time Management', description: 'You have high time management skills. You excel at planning, prioritizing, and executing, and use time efficiently.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的时间管理能力', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Time Management Skills', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
