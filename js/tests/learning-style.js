var LEARNING_STYLE_TEST = {
    type: 'learning-style', icon: '📚', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'VI', zh: '我通过看来学习效果最好。', en: 'I learn best by seeing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'VI', zh: '我喜欢图表和图示。', en: 'I like charts and diagrams.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'VI', zh: '我能记住看过的内容。', en: 'I can remember what I\'ve seen.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'VI', zh: '我喜欢颜色和视觉效果。', en: 'I like colors and visual effects.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AU', zh: '我通过听来学习效果最好。', en: 'I learn best by listening.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AU', zh: '我喜欢讲座和讨论。', en: 'I like lectures and discussions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AU', zh: '我能记住听过的内容。', en: 'I can remember what I\'ve heard.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AU', zh: '我喜欢音乐和声音。', en: 'I like music and sounds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'KI', zh: '我通过做来学习效果最好。', en: 'I learn best by doing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'KI', zh: '我喜欢动手实践。', en: 'I like hands-on practice.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'KI', zh: '我能记住做过的事情。', en: 'I can remember what I\'ve done.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'KI', zh: '我喜欢运动和活动。', en: 'I like movement and activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'VI', zh: '我喜欢阅读和写作。', en: 'I like reading and writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AU', zh: '我喜欢小组讨论。', en: 'I like group discussions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'KI', zh: '我喜欢实验和探索。', en: 'I like experiments and exploration.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'VI', zh: '我喜欢思维导图。', en: 'I like mind maps.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { VI: { total: 0, count: 0 }, AU: { total: 0, count: 0 }, KI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'VI', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim, dimensions: [{ name: 'Visual', zh: '视觉型', score: Math.round(((dims.VI.count > 0 ? dims.VI.total / dims.VI.count : 0) / 5) * 100) }, { name: 'Auditory', zh: '听觉型', score: Math.round(((dims.AU.count > 0 ? dims.AU.total / dims.AU.count : 0) / 5) * 100) }, { name: 'Kinesthetic', zh: '动觉型', score: Math.round(((dims.KI.count > 0 ? dims.KI.total / dims.KI.count : 0) / 5) * 100) }] };
    },
    types: {
        'VI': { zh: { title: '视觉型学习者', name: '视觉型学习者', description: '你是视觉型学习者。你通过看来学习效果最好，喜欢图表、图示和视觉效果。' }, en: { title: 'Visual Learner', name: 'Visual Learner', description: 'You are a visual learner. You learn best by seeing and prefer charts, diagrams, and visual effects.' } },
        'AU': { zh: { title: '听觉型学习者', name: '听觉型学习者', description: '你是听觉型学习者。你通过听来学习效果最好，喜欢讲座、讨论和音乐。' }, en: { title: 'Auditory Learner', name: 'Auditory Learner', description: 'You are an auditory learner. You learn best by listening and prefer lectures, discussions, and music.' } },
        'KI': { zh: { title: '动觉型学习者', name: '动觉型学习者', description: '你是动觉型学习者。你通过做来学习效果最好，喜欢动手实践和运动。' }, en: { title: 'Kinesthetic Learner', name: 'Kinesthetic Learner', description: 'You are a kinesthetic learner. You learn best by doing and prefer hands-on practice and movement.' } }
    },
    uiText: {
        zh: { resultTitle: '你的学习风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Learning Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
