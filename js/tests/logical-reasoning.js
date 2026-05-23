const LOGICAL_REASONING_TEST = {
    type: 'logical-reasoning', icon: '🔢', color: '#607D8B',
    questions: [
        { id: 1, dimension: 'LR', zh: '我能快速识别模式和规律。', en: 'I can quickly identify patterns and rules.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LR', zh: '我喜欢解决数学问题。', en: 'I enjoy solving math problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LR', zh: '我能进行逻辑推理。', en: 'I can perform logical reasoning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LR', zh: '我喜欢分析数据。', en: 'I like analyzing data.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LR', zh: '我能理解因果关系。', en: 'I understand cause and effect.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LR', zh: '我喜欢策略性游戏。', en: 'I like strategic games.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LR', zh: '我能进行系统性思考。', en: 'I can think systematically.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LR', zh: '我能发现论证中的逻辑漏洞。', en: 'I can find logical flaws in arguments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'LR', zh: '我喜欢科学实验。', en: 'I like science experiments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'LR', zh: '我能进行量化分析。', en: 'I can perform quantitative analysis.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'LR', zh: '我喜欢解决谜题。', en: 'I like solving puzzles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'LR', zh: '我能进行假设推理。', en: 'I can reason hypothetically.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LR', zh: '我喜欢编程和技术。', en: 'I like programming and technology.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LR', zh: '我能进行统计分析。', en: 'I can perform statistical analysis.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'LR', zh: '我喜欢探索算法。', en: 'I like exploring algorithms.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LR', zh: '我能进行抽象思考。', en: 'I can think abstractly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📝', title: '低逻辑推理能力', description: '你的逻辑推理能力较低。建议多练习数学问题和逻辑谜题。', color: '#F44336' },
            { range: [31, 60], icon: '🤔', title: '中等逻辑推理能力', description: '你有中等的逻辑推理能力。你能在某些方面进行逻辑思考，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🔢', title: '高逻辑推理能力', description: '你有很高的逻辑推理能力。你善于识别模式、分析数据和解决复杂问题。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📝', title: 'Low Logical Reasoning', description: 'Your logical reasoning is low. Consider practicing math problems and logic puzzles more.', color: '#F44336' },
            { range: [31, 60], icon: '🤔', title: 'Moderate Logical Reasoning', description: 'You have moderate logical reasoning. You can think logically in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🔢', title: 'High Logical Reasoning', description: 'You have high logical reasoning. You excel at identifying patterns, analyzing data, and solving complex problems.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的逻辑推理能力', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Logical Reasoning', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
