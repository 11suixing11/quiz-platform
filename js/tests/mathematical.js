var MATHEMATICAL_TEST = {
    type: 'mathematical', icon: '🔢', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'NP', zh: '我喜欢解决数学问题。', en: 'I enjoy solving math problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'NP', zh: '我能快速进行心算。', en: 'I can do mental arithmetic quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'NP', zh: '我喜欢分析数据。', en: 'I like analyzing data.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'NP', zh: '我能轻松理解统计信息。', en: 'I can easily understand statistical information.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LP', zh: '我喜欢发现规律和模式。', en: 'I like finding patterns and regularities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LP', zh: '我能轻松识别数列的规律。', en: 'I can easily identify patterns in number sequences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LP', zh: '我喜欢逻辑推理。', en: 'I like logical reasoning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LP', zh: '我能从复杂信息中找出规律。', en: 'I can find patterns in complex information.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PS', zh: '我喜欢用数学方法解决实际问题。', en: 'I like using math to solve real-world problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PS', zh: '我能制定有效的解题策略。', en: 'I can develop effective problem-solving strategies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PS', zh: '我喜欢挑战数学难题。', en: 'I enjoy challenging math problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PS', zh: '我能将复杂问题分解为简单步骤。', en: 'I can break complex problems into simple steps.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SA', zh: '我对数字很敏感。', en: 'I am sensitive to numbers.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SA', zh: '我能轻松理解概率和风险。', en: 'I can easily understand probability and risk.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SA', zh: '我喜欢几何和空间问题。', en: 'I like geometry and spatial problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SA', zh: '我能用数学思维分析日常问题。', en: 'I can analyze everyday problems with mathematical thinking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { NP: { total: 0, count: 0 }, LP: { total: 0, count: 0 }, PS: { total: 0, count: 0 }, SA: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'NP', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'NP': { zh: { title: '数值运算型', name: '数值运算型', description: '你是数值运算型。你擅长快速计算、数据分析和统计理解。' }, en: { title: 'Numerical Processor', name: 'Numerical Processor', description: 'You are a numerical processor. You excel at quick calculations, data analysis, and statistical understanding.' } },
        'LP': { zh: { title: '逻辑推理型', name: '逻辑推理型', description: '你是逻辑推理型。你擅长发现规律、识别模式和逻辑推导。' }, en: { title: 'Logical Patternist', name: 'Logical Patternist', description: 'You are a logical patternist. You excel at finding patterns, recognizing regularities, and logical deduction.' } },
        'PS': { zh: { title: '问题解决型', name: '问题解决型', description: '你是问题解决型。你擅长用数学方法解决实际问题，制定策略。' }, en: { title: 'Problem Solver', name: 'Problem Solver', description: 'You are a problem solver. You excel at using mathematical methods to solve real-world problems and develop strategies.' } },
        'SA': { zh: { title: '空间分析型', name: '空间分析型', description: '你是空间分析型。你对数字敏感，擅长概率、几何和空间思维。' }, en: { title: 'Spatial Analyst', name: 'Spatial Analyst', description: 'You are a spatial analyst. You are sensitive to numbers and excel at probability, geometry, and spatial thinking.' } }
    },
    uiText: {
        zh: { resultTitle: '你的数学思维类型', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Mathematical Thinking Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
