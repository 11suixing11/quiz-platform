var INTRAPERSONAL_INTELLIGENCE_TEST = {
    type: 'intrapersonal-intelligence', icon: '🧘', color: '#673AB7',
    questions: [
        { id: 1, dimension: 'II', zh: '我能清楚地了解自己的情绪�?, en: 'I can clearly understand my emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'II', zh: '我知道自己的优点和缺点�?, en: 'I know my strengths and weaknesses.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'II', zh: '我能独立思考�?, en: 'I can think independently.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'II', zh: '我有清晰的人生目标�?, en: 'I have clear life goals.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'II', zh: '我能自我反省�?, en: 'I can self-reflect.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'II', zh: '我了解自己的价值观�?, en: 'I understand my values.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'II', zh: '我能管理自己的情绪�?, en: 'I can manage my emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'II', zh: '我能自我激励�?, en: 'I can self-motivate.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'II', zh: '我能接受自己的不完美�?, en: 'I can accept my imperfections.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'II', zh: '我能独立做出决定�?, en: 'I can make decisions independently.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'II', zh: '我能处理孤独感�?, en: 'I can handle loneliness.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'II', zh: '我能从经验中学习�?, en: 'I can learn from experiences.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'II', zh: '我能保持内心平静�?, en: 'I can maintain inner peace.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'II', zh: '我能设定个人界限�?, en: 'I can set personal boundaries.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'II', zh: '我能处理内心冲突�?, en: 'I can handle internal conflicts.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'II', zh: '我能找到生活的意义�?, en: 'I can find meaning in life.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😶', title: '低内省智�?, description: '你的内省智能较低。建议多花时间自我反省，了解自己的情绪和价值观�?, color: '#F44336' },
            { range: [31, 60], icon: '🧘', title: '中等内省智能', description: '你有中等的内省智能。你能在某些方面了解自己，但还有提升空间�?, color: '#FFC107' },
            { range: [61, 100], icon: '🌟', title: '高内省智�?, description: '你有很高的内省智能。你善于自我反省，了解自己的情绪、价值观和人生目标�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😶', title: 'Low Intrapersonal Intelligence', description: 'Your intrapersonal intelligence is low. Consider spending more time self-reflecting and understanding your emotions and values.', color: '#F44336' },
            { range: [31, 60], icon: '🧘', title: 'Moderate Intrapersonal Intelligence', description: 'You have moderate intrapersonal intelligence. You can understand yourself in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌟', title: 'High Intrapersonal Intelligence', description: 'You have high intrapersonal intelligence. You excel at self-reflection and understanding your emotions, values, and life goals.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的内省智能', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Intrapersonal Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
