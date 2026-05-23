var MUSICAL_INTELLIGENCE_TEST = {
    type: 'musical-intelligence', icon: '🎵', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'MI', zh: '我能轻松地识别旋律。', en: 'I can easily identify melodies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'MI', zh: '我喜欢音乐。', en: 'I enjoy music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'MI', zh: '我能分辨不同的音调。', en: 'I can distinguish different tones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'MI', zh: '我喜欢演奏乐器。', en: 'I like playing musical instruments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'MI', zh: '我能轻松地记住歌曲。', en: 'I can easily remember songs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'MI', zh: '我喜欢唱歌。', en: 'I like singing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'MI', zh: '我能识别不同的节奏。', en: 'I can identify different rhythms.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'MI', zh: '我喜欢音乐创作。', en: 'I like music composition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MI', zh: '我能感受音乐中的情感。', en: 'I can feel emotions in music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MI', zh: '我喜欢音乐表演。', en: 'I like musical performances.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MI', zh: '我能轻松地学习新乐器。', en: 'I can easily learn new instruments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MI', zh: '我喜欢音乐理论。', en: 'I like music theory.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'MI', zh: '我能识别不同的和声。', en: 'I can identify different harmonies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MI', zh: '我喜欢音乐欣赏。', en: 'I like music appreciation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'MI', zh: '我能轻松地进行音乐即兴创作。', en: 'I can easily improvise musically.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'MI', zh: '我喜欢探索不同的音乐风格。', en: 'I like exploring different music styles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔇', title: '低音乐智能', description: '你的音乐智能较低。建议多听音乐、学习乐器或参加音乐活动。', color: '#F44336' },
            { range: [31, 60], icon: '🎵', title: '中等音乐智能', description: '你有中等的音乐智能。你能在某些方面欣赏和理解音乐，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🎶', title: '高音乐智能', description: '你有很高的音乐智能。你善于欣赏、理解和创作音乐。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🔇', title: 'Low Musical Intelligence', description: 'Your musical intelligence is low. Consider listening to more music, learning instruments, or participating in musical activities.', color: '#F44336' },
            { range: [31, 60], icon: '🎵', title: 'Moderate Musical Intelligence', description: 'You have moderate musical intelligence. You can appreciate and understand music in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🎶', title: 'High Musical Intelligence', description: 'You have high musical intelligence. You excel at appreciating, understanding, and creating music.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的音乐智能', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Musical Intelligence', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
