var AB_PERSONALITY_TEST = {
    type: 'ab-personality', icon: '⚡', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'AB', zh: '我总是很匆忙，感觉时间不够用。', en: 'I am always in a hurry, feeling there isn\'t enough time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AB', zh: '我对竞争充满热情。', en: 'I am passionate about competition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AB', zh: '我很难放松下来。', en: 'I find it hard to relax.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AB', zh: '我对效率有很高的要求。', en: 'I have high demands for efficiency.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AB', zh: '我对别人的慢节奏感到不耐烦。', en: 'I feel impatient with others\' slow pace.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AB', zh: '我经常同时做多件事。', en: 'I often do multiple things at once.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AB', zh: '我对成功有强烈的渴望。', en: 'I have a strong desire for success.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AB', zh: '我在工作中经常感到压力。', en: 'I often feel stressed at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AB', zh: '我喜欢掌控局面。', en: 'I like to take charge of situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AB', zh: '我对浪费时间感到愤怒。', en: 'I feel angry about wasting time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AB', zh: '我更喜欢享受过程而非追求结果。', en: 'I prefer enjoying the process rather than pursuing results.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 12, dimension: 'AB', zh: '我能轻松地放松和休息。', en: 'I can easily relax and rest.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 13, dimension: 'AB', zh: '我很少感到时间紧迫。', en: 'I rarely feel time pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 14, dimension: 'AB', zh: '我做事从容不迫。', en: 'I do things at a leisurely pace.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 15, dimension: 'AB', zh: '我对胜负不太在意。', en: 'I don\'t care much about winning or losing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 16, dimension: 'AB', zh: '我喜欢在截止日期前冲刺。', en: 'I like to sprint before deadlines.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'AB', zh: '我经常打断别人说话。', en: 'I often interrupt others when they speak.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'AB', zh: '我对排队等待感到烦躁。', en: 'I feel irritated waiting in line.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'AB', zh: '我走路和说话都很快。', en: 'I walk and talk fast.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'AB', zh: '我把工作看得比休闲更重要。', en: 'I value work more than leisure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 35], icon: '🧘', title: 'B型人格', description: '你是典型的B型人格。你放松、有耐心，享受生活的过程。你很少感到时间压力，能够很好地平衡工作和生活。', color: '#4CAF50' },
            { range: [36, 65], icon: '⚖️', title: 'A/B混合型', description: '你兼具A型和B型的特点。你既有一定的竞争意识，也能享受生活的悠闲。', color: '#FFC107' },
            { range: [66, 100], icon: '🔥', title: 'A型人格', description: '你是典型的A型人格。你充满竞争意识，追求成就，经常感到时间紧迫。你精力充沛，但也容易感到压力。', color: '#F44336' }
        ],
        en: [
            { range: [0, 35], icon: '🧘', title: 'Type B Personality', description: 'You are a typical Type B personality. You are relaxed, patient, and enjoy life\'s process. You rarely feel time pressure and can balance work and life well.', color: '#4CAF50' },
            { range: [36, 65], icon: '⚖️', title: 'A/B Mixed Type', description: 'You have both Type A and Type B traits. You have some competitive drive while also enjoying life\'s leisure.', color: '#FFC107' },
            { range: [66, 100], icon: '🔥', title: 'Type A Personality', description: 'You are a typical Type A personality. You are competitive, achievement-oriented, and often feel time pressure. You are energetic but prone to stress.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的A/B型人格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: 'B型', scoreHigh: 'A型' },
        en: { resultTitle: 'Your A/B Personality Type', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Type B', scoreHigh: 'Type A' }
    }
};
