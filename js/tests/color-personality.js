var COLOR_PERSONALITY_TEST = {
    type: 'color-personality', icon: '🎨', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'RE', zh: '我充满激情和活力。', en: 'I am full of passion and energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RE', zh: '我喜欢冒险和刺激。', en: 'I like adventure and excitement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RE', zh: '我做事雷厉风行。', en: 'I act quickly and decisively.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RE', zh: '我喜欢成为焦点。', en: 'I like being the focus.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'BL', zh: '我冷静理性。', en: 'I am calm and rational.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'BL', zh: '我做事有条理。', en: 'I am organized.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'BL', zh: '我值得信赖。', en: 'I am trustworthy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'BL', zh: '我注重细节。', en: 'I value details.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'GR', zh: '我喜欢和谐的环境。', en: 'I like harmonious environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'GR', zh: '我善于调解冲突。', en: 'I am good at mediating conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'GR', zh: '我喜欢自然和户外。', en: 'I like nature and outdoors.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'GR', zh: '我很随和。', en: 'I am easy-going.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'YE', zh: '我乐观开朗。', en: 'I am optimistic and cheerful.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'YE', zh: '我喜欢创新和变化。', en: 'I like innovation and change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'YE', zh: '我充满创意。', en: 'I am full of creativity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'YE', zh: '我喜欢学习新事物。', en: 'I like learning new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { RE: { total: 0, count: 0 }, BL: { total: 0, count: 0 }, GR: { total: 0, count: 0 }, YE: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'RE', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'RE': { zh: { title: '红色性格', name: '红色性格', description: '你是红色性格。你充满激情、活力和冒险精神，喜欢成为焦点。' }, en: { title: 'Red Personality', name: 'Red Personality', description: 'You are a red personality. You are full of passion, energy, and adventurous spirit. You like being the focus.' } },
        'BL': { zh: { title: '蓝色性格', name: '蓝色性格', description: '你是蓝色性格。你冷静、理性、有条理，值得信赖。' }, en: { title: 'Blue Personality', name: 'Blue Personality', description: 'You are a blue personality. You are calm, rational, organized, and trustworthy.' } },
        'GR': { zh: { title: '绿色性格', name: '绿色性格', description: '你是绿色性格。你随和、和谐，善于调解冲突，热爱自然。' }, en: { title: 'Green Personality', name: 'Green Personality', description: 'You are a green personality. You are easy-going, harmonious, good at mediating conflicts, and love nature.' } },
        'YE': { zh: { title: '黄色性格', name: '黄色性格', description: '你是黄色性格。你乐观、开朗、充满创意，喜欢创新和变化。' }, en: { title: 'Yellow Personality', name: 'Yellow Personality', description: 'You are a yellow personality. You are optimistic, cheerful, creative, and like innovation and change.' } }
    },
    uiText: {
        zh: { resultTitle: '你的颜色性格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Color Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
