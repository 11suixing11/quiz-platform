var MUSIC_PERSONALITY_TEST = {
    type: 'music-personality', icon: '🎵', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'RC', zh: '我喜欢摇滚和重金属音乐。', en: 'I like rock and heavy metal music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RC', zh: '我喜欢节奏感强的音乐。', en: 'I like music with strong rhythm.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RC', zh: '我喜欢有力量的音乐。', en: 'I like powerful music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RC', zh: '音乐让我充满能量。', en: 'Music fills me with energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CL', zh: '我喜欢古典音乐。', en: 'I like classical music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CL', zh: '我喜欢优雅的音乐。', en: 'I like elegant music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CL', zh: '我喜欢有深度的音乐。', en: 'I like music with depth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CL', zh: '音乐能让我平静。', en: 'Music can calm me down.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PO', zh: '我喜欢流行音乐。', en: 'I like pop music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PO', zh: '我喜欢跟着音乐唱歌。', en: 'I like singing along with music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PO', zh: '我喜欢朗朗上口的旋律。', en: 'I like catchy melodies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PO', zh: '音乐让我快乐。', en: 'Music makes me happy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EC', zh: '我喜欢电子音乐。', en: 'I like electronic music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EC', zh: '我喜欢创新的音乐风格。', en: 'I like innovative music styles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EC', zh: '我喜欢前卫的音乐。', en: 'I like avant-garde music.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EC', zh: '音乐让我思考。', en: 'Music makes me think.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { RC: { total: 0, count: 0 }, CL: { total: 0, count: 0 }, PO: { total: 0, count: 0 }, EC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'RC', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'RC': { zh: { title: '摇滚灵魂型', name: '摇滚灵魂型', description: '你是摇滚灵魂型。你喜欢有力量、节奏感强的音乐，音乐让你充满能量。' }, en: { title: 'Rock Soul', name: 'Rock Soul', description: 'You are a rock soul. You like powerful, rhythmic music that fills you with energy.' } },
        'CL': { zh: { title: '古典优雅型', name: '古典优雅型', description: '你是古典优雅型。你喜欢古典、优雅、有深度的音乐，音乐让你平静。' }, en: { title: 'Classical Elegant', name: 'Classical Elegant', description: 'You are a classical elegant. You like classical, elegant, deep music that calms you down.' } },
        'PO': { zh: { title: '流行活力型', name: '流行活力型', description: '你是流行活力型。你喜欢流行音乐，喜欢跟着唱，音乐让你快乐。' }, en: { title: 'Pop Energetic', name: 'Pop Energetic', description: 'You are a pop energetic. You like pop music, singing along, and music makes you happy.' } },
        'EC': { zh: { title: '电子前卫型', name: '电子前卫型', description: '你是电子前卫型。你喜欢电子、创新、前卫的音乐，音乐让你思考。' }, en: { title: 'Electronic Avant-Garde', name: 'Electronic Avant-Garde', description: 'You are an electronic avant-garde. You like electronic, innovative, avant-garde music that makes you think.' } }
    },
    uiText: {
        zh: { resultTitle: '你的音乐性格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Music Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
