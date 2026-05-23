const LINGUISTIC_INTELLIGENCE_TEST = {
    type: 'linguistic-intelligence', icon: '📖', color: '#795548',
    questions: [
        { id: 1, dimension: 'LI', zh: '我喜欢阅读。', en: 'I enjoy reading.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LI', zh: '我善于表达自己的想法。', en: 'I am good at expressing my thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LI', zh: '我喜欢写作。', en: 'I enjoy writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LI', zh: '我能轻松地学习新语言。', en: 'I can easily learn new languages.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LI', zh: '我喜欢文字游戏和谜语。', en: 'I like word games and riddles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LI', zh: '我能清晰地讲述故事。', en: 'I can tell stories clearly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LI', zh: '我喜欢诗歌和文学。', en: 'I like poetry and literature.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LI', zh: '我能有效地进行口头沟通。', en: 'I can communicate effectively verbally.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'LI', zh: '我喜欢辩论和讨论。', en: 'I like debates and discussions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'LI', zh: '我能理解复杂的文本。', en: 'I can understand complex texts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'LI', zh: '我喜欢幽默和双关语。', en: 'I like humor and puns.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'LI', zh: '我能有效地进行书面沟通。', en: 'I can communicate effectively in writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LI', zh: '我喜欢学习新词汇。', en: 'I like learning new vocabulary.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LI', zh: '我能进行公开演讲。', en: 'I can do public speaking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'LI', zh: '我喜欢创意写作。', en: 'I like creative writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LI', zh: '我能理解言外之意。', en: 'I can understand implied meanings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📖', title: '低语言智能', description: '你的语言智能较低。建议多阅读、写作和练习口头表达。', color: '#F44336' },
            { range: [31, 60], icon: '📝', title: '中等语言智能', description: '你有中等的语言智能。你能在某些方面进行语言表达，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '✍️', title: '高语言智能', description: '你有很高的语言智能。你善于阅读、写作和口头表达。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📖', title: 'Low Linguistic Intelligence', description: 'Your linguistic intelligence is low. Consider reading more, writing, and practicing verbal expression.', color: '#F44336' },
            { range: [31, 60], icon: '📝', title: 'Moderate Linguistic Intelligence', description: 'You have moderate linguistic intelligence. You can express yourself linguistically in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '✍️', title: 'High Linguistic Intelligence', description: 'You have high linguistic intelligence. You excel at reading, writing, and verbal expression.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的语言智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Linguistic Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
