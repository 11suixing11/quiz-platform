var DIET_ATTITUDE_TEST = {
    type: 'diet-attitude', icon: '🥗', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'HE', zh: '我注重健康饮食。', en: 'I value healthy eating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'HE', zh: '我会选择营养均衡的食物。', en: 'I choose nutritionally balanced food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'HE', zh: '我会避免垃圾食品。', en: 'I avoid junk food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'HE', zh: '我会按时吃饭。', en: 'I eat meals on time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EM', zh: '我会因为情绪而吃东西。', en: 'I eat because of emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EM', zh: '我会通过吃东西来缓解压力。', en: 'I eat to relieve stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EM', zh: '我会因为无聊而吃东西。', en: 'I eat because of boredom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EM', zh: '我会因为焦虑而吃东西。', en: 'I eat because of anxiety.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SC', zh: '我会严格控制饮食。', en: 'I strictly control my diet.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SC', zh: '我会计算卡路里。', en: 'I count calories.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SC', zh: '我会避免某些食物。', en: 'I avoid certain foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SC', zh: '我会因为吃多了而感到内疚。', en: 'I feel guilty when I overeat.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EN', zh: '我享受美食。', en: 'I enjoy good food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EN', zh: '我喜欢尝试新食物。', en: 'I like trying new foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EN', zh: '我喜欢与朋友一起吃饭。', en: 'I like eating with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EN', zh: '我喜欢烹饪。', en: 'I like cooking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { HE: { total: 0, count: 0 }, EM: { total: 0, count: 0 }, SC: { total: 0, count: 0 }, EN: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'HE', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'HE': { zh: { title: '健康饮食型', name: '健康饮食型', description: '你是健康饮食型。你注重营养均衡，按时吃饭，避免垃圾食品。' }, en: { title: 'Healthy Eater', name: 'Healthy Eater', description: 'You are a healthy eater. You focus on nutritional balance, eat on time, and avoid junk food.' } },
        'EM': { zh: { title: '情绪饮食型', name: '情绪饮食型', description: '你是情绪饮食型。你会因为情绪、压力或无聊而吃东西。建议寻找其他方式来处理情绪。' }, en: { title: 'Emotional Eater', name: 'Emotional Eater', description: 'You are an emotional eater. You eat because of emotions, stress, or boredom. Consider finding other ways to handle emotions.' } },
        'SC': { zh: { title: '严格控制型', name: '严格控制型', description: '你是严格控制型。你严格控制饮食，计算卡路里，避免某些食物。注意不要过度控制。' }, en: { title: 'Strict Controller', name: 'Strict Controller', description: 'You are a strict controller. You strictly control your diet, count calories, and avoid certain foods. Be careful not to over-control.' } },
        'EN': { zh: { title: '享受美食型', name: '享受美食型', description: '你是享受美食型。你享受美食，喜欢尝试新食物，喜欢与朋友一起吃饭。' }, en: { title: 'Food Enjoyer', name: 'Food Enjoyer', description: 'You are a food enjoyer. You enjoy good food, like trying new foods, and like eating with friends.' } }
    },
    uiText: {
        zh: { resultTitle: '你的饮食态度', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Diet Attitude', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
