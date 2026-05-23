var EMOTIONAL_CONTAGION_TEST = {
    type: 'emotional-contagion', icon: '🌊', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'RS', zh: '我容易被他人的情绪感染�?, en: 'I am easily affected by others\' emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RS', zh: '看到别人哭我也想哭�?, en: 'I want to cry when I see others cry.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RS', zh: '周围人的心情会影响我�?, en: 'The mood of people around me affects me.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RS', zh: '我能感受到他人的情绪变化�?, en: 'I can sense others\' emotional changes.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SP', zh: '我能传播积极情绪�?, en: 'I can spread positive emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SP', zh: '我的快乐能感染他人�?, en: 'My happiness can infect others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SP', zh: '我能带动周围人的情绪�?, en: 'I can influence the mood of people around me.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SP', zh: '我喜欢让气氛变得活跃�?, en: 'I like making the atmosphere lively.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EC', zh: '我能控制自己不受负面情绪影响�?, en: 'I can control myself from being affected by negative emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EC', zh: '我能在情绪传染中保持冷静�?, en: 'I can stay calm during emotional contagion.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EC', zh: '我能区分自己的情绪和他人的情绪�?, en: 'I can distinguish my emotions from others\' emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EC', zh: '我能保护自己不被负面情绪淹没�?, en: 'I can protect myself from being overwhelmed by negative emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AW', zh: '我能察觉群体情绪的变化�?, en: 'I can detect changes in group emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AW', zh: '我能理解情绪传染的机制�?, en: 'I understand the mechanism of emotional contagion.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AW', zh: '我能利用情绪传染改善关系�?, en: 'I can use emotional contagion to improve relationships.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AW', zh: '我能觉察自己的情绪对他人影响�?, en: 'I am aware of how my emotions affect others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { RS: { total: 0, count: 0 }, SP: { total: 0, count: 0 }, EC: { total: 0, count: 0 }, AW: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'RS', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'RS': { zh: { title: '高度敏感�?, name: '高度敏感�?, description: '你是高度敏感型。你容易被他人情绪感染，对情绪变化很敏感�? }, en: { title: 'Highly Receptive', name: 'Highly Receptive', description: 'You are highly receptive. You are easily affected by others\' emotions and sensitive to emotional changes.' } },
        'SP': { zh: { title: '情绪传播�?, name: '情绪传播�?, description: '你是情绪传播型。你能传播积极情绪，带动周围人的心情�? }, en: { title: 'Emotional Spreader', name: 'Emotional Spreader', description: 'You are an emotional spreader. You can spread positive emotions and influence the mood of people around you.' } },
        'EC': { zh: { title: '情绪控制�?, name: '情绪控制�?, description: '你是情绪控制型。你能在情绪传染中保持冷静，区分自己和他人的情绪�? }, en: { title: 'Emotional Controller', name: 'Emotional Controller', description: 'You are an emotional controller. You can stay calm during emotional contagion and distinguish your emotions from others\'.' } },
        'AW': { zh: { title: '情绪觉察�?, name: '情绪觉察�?, description: '你是情绪觉察型。你能察觉群体情绪变化，理解情绪传染机制�? }, en: { title: 'Emotionally Aware', name: 'Emotionally Aware', description: 'You are emotionally aware. You can detect group emotional changes and understand the mechanism of emotional contagion.' } }
    },
    uiText: {
        zh: { resultTitle: '你的情绪传染模式', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Emotional Contagion Pattern', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
