const ZODIAC_MATCH_TEST = {
    type: 'zodiac-match', icon: '⭐', color: '#673AB7',
    questions: [
        { id: 1, dimension: 'FI', zh: '你更注重内心感受。', en: 'You focus more on inner feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'FI', zh: '你相信直觉。', en: 'You trust your intuition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'FI', zh: '你很有同情心。', en: 'You are very compassionate.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'FI', zh: '你重视情感连接。', en: 'You value emotional connections.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EL', zh: '你更注重实际行动。', en: 'You focus more on practical actions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EL', zh: '你做事有计划。', en: 'You are planned in your actions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EL', zh: '你注重效率。', en: 'You value efficiency.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EL', zh: '你追求结果。', en: 'You pursue results.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AQ', zh: '你喜欢自由。', en: 'You like freedom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AQ', zh: '你思想开放。', en: 'You are open-minded.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AQ', zh: '你追求创新。', en: 'You pursue innovation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AQ', zh: '你不喜欢被束缚。', en: 'You don\'t like being restricted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EA', zh: '你热情洋溢。', en: 'You are enthusiastic.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EA', zh: '你喜欢冒险。', en: 'You like adventure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EA', zh: '你有领导力。', en: 'You have leadership.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EA', zh: '你充满自信。', en: 'You are full of confidence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { FI: { total: 0, count: 0 }, EL: { total: 0, count: 0 }, AQ: { total: 0, count: 0 }, EA: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'FI', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'FI': { zh: { title: '水象星座型', name: '水象星座型', description: '你是水象星座型。你注重内心感受，相信直觉，有同情心，重视情感连接。' }, en: { title: 'Water Sign', name: 'Water Sign', description: 'You are a water sign type. You focus on inner feelings, trust intuition, are compassionate, and value emotional connections.' } },
        'EL': { zh: { title: '土象星座型', name: '土象星座型', description: '你是土象星座型。你注重实际行动，做事有计划，注重效率，追求结果。' }, en: { title: 'Earth Sign', name: 'Earth Sign', description: 'You are an earth sign type. You focus on practical actions, are planned, value efficiency, and pursue results.' } },
        'AQ': { zh: { title: '风象星座型', name: '风象星座型', description: '你是风象星座型。你喜欢自由，思想开放，追求创新，不喜欢被束缚。' }, en: { title: 'Air Sign', name: 'Air Sign', description: 'You are an air sign type. You like freedom, are open-minded, pursue innovation, and don\'t like being restricted.' } },
        'EA': { zh: { title: '火象星座型', name: '火象星座型', description: '你是火象星座型。你热情洋溢，喜欢冒险，有领导力，充满自信。' }, en: { title: 'Fire Sign', name: 'Fire Sign', description: 'You are a fire sign type. You are enthusiastic, adventurous, have leadership, and full of confidence.' } }
    },
    uiText: {
        zh: { resultTitle: '你的星座元素', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Zodiac Element', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
