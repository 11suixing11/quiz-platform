const FOOD_PERSONALITY_TEST = {
    type: 'food-personality', icon: '🍕', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'AD', zh: '我喜欢尝试新食物。', en: 'I like trying new foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AD', zh: '我喜欢异国料理。', en: 'I like exotic cuisine.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AD', zh: '我不怕吃奇怪的食物。', en: 'I\'m not afraid of eating strange foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AD', zh: '我喜欢探索新的餐厅。', en: 'I like exploring new restaurants.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CO', zh: '我喜欢家常菜。', en: 'I like home-cooked meals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CO', zh: '我喜欢传统的食物。', en: 'I like traditional foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CO', zh: '我对食物有自己的坚持。', en: 'I have my own food preferences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CO', zh: '我喜欢熟悉的味道。', en: 'I like familiar tastes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'HE', zh: '我注重食物的营养。', en: 'I value the nutrition of food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'HE', zh: '我会选择健康的食物。', en: 'I choose healthy foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'HE', zh: '我会避免不健康的食物。', en: 'I avoid unhealthy foods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'HE', zh: '我会注意食物的成分。', en: 'I pay attention to food ingredients.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SO', zh: '我喜欢和朋友一起吃饭。', en: 'I like eating with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SO', zh: '我喜欢分享食物。', en: 'I like sharing food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SO', zh: '食物是社交的重要部分。', en: 'Food is an important part of socializing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SO', zh: '我喜欢聚餐的氛围。', en: 'I like the atmosphere of dinner parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AD: { total: 0, count: 0 }, CO: { total: 0, count: 0 }, HE: { total: 0, count: 0 }, SO: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AD', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AD': { zh: { title: '美食探险型', name: '美食探险型', description: '你是美食探险型。你喜欢尝试新食物、异国料理，探索新餐厅。' }, en: { title: 'Food Adventurer', name: 'Food Adventurer', description: 'You are a food adventurer. You like trying new foods, exotic cuisine, and exploring new restaurants.' } },
        'CO': { zh: { title: '传统美食型', name: '传统美食型', description: '你是传统美食型。你喜欢家常菜、传统食物，对食物有自己的坚持。' }, en: { title: 'Comfort Food Lover', name: 'Comfort Food Lover', description: 'You are a comfort food lover. You like home-cooked meals, traditional foods, and have your own food preferences.' } },
        'HE': { zh: { title: '健康饮食型', name: '健康饮食型', description: '你是健康饮食型。你注重食物营养，选择健康食物，注意食物成分。' }, en: { title: 'Health-Conscious Eater', name: 'Health-Conscious Eater', description: 'You are a health-conscious eater. Youvalue nutrition, choose healthy foods, and pay attention to ingredients.' } },
        'SO': { zh: { title: '社交美食型', name: '社交美食型', description: '你是社交美食型。你喜欢和朋友一起吃饭，分享食物，享受聚餐氛围。' }, en: { title: 'Social Eater', name: 'Social Eater', description: 'You are a social eater. You like eating with friends, sharing food, and enjoying dinner party atmosphere.' } }
    },
    uiText: {
        zh: { resultTitle: '你的食物人格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Food Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
