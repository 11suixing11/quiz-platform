var MINDFULNESS_TEST = {
    type: 'mindfulness', icon: '🧘', color: '#795548',
    questions: [
        { id: 1, dimension: 'MI', zh: '我能专注于当下的体验�?, en: 'I can focus on the present moment experience.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'MI', zh: '我能觉察自己的想法和感受�?, en: 'I can observe my thoughts and feelings.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'MI', zh: '我能不加评判地观察事物�?, en: 'I can observe things without judgment.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'MI', zh: '我能注意到身体的感觉�?, en: 'I can notice physical sensations.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'MI', zh: '我能活在当下而不是过去或未来�?, en: 'I can live in the present rather than past or future.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'MI', zh: '我能接受当前的状况�?, en: 'I can accept the current situation.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'MI', zh: '我能觉察到自己的呼吸�?, en: 'I can be aware of my breathing.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'MI', zh: '我能注意到周围的环境�?, en: 'I can notice my surroundings.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MI', zh: '我能不被情绪所控制�?, en: 'I can not be controlled by emotions.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MI', zh: '我能用好奇的态度对待体验�?, en: 'I can approach experiences with curiosity.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MI', zh: '我能放慢脚步，享受当下�?, en: 'I can slow down and enjoy the moment.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MI', zh: '我能觉察到自己的情绪变化�?, en: 'I can notice my emotional changes.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'MI', zh: '我能以开放的心态面对困难�?, en: 'I can face difficulties with an open mind.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MI', zh: '我能欣赏简单的快乐�?, en: 'I can appreciate simple pleasures.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'MI', zh: '我能与自己的想法保持距离�?, en: 'I can keep distance from my thoughts.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '☁️', title: '低正念水�?, description: '你的正念水平较低。你可能经常被想法和情绪所困扰，难以专注于当下�?, color: '#FF9800' },
            { range: [31, 60], icon: '🌤�?, title: '中等正念水平', description: '你有中等的正念水平。你有时能专注于当下，但还有提升空间�?, color: '#FFC107' },
            { range: [61, 100], icon: '☀�?, title: '高正念水�?, description: '你有很高的正念水平。你能很好地专注于当下，觉察自己的想法和感受�?, color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '☁️', title: 'Low Mindfulness', description: 'Your mindfulness level is low. You may often be troubled by thoughts and emotions, finding it hard to focus on the present.', color: '#FF9800' },
            { range: [31, 60], icon: '🌤�?, title: 'Moderate Mindfulness', description: 'You have moderate mindfulness. You can sometimes focus on the present, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '☀�?, title: 'High Mindfulness', description: 'You have high mindfulness. You focus well on the present and are aware of your thoughts and feelings.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的正念水平', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Mindfulness Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
