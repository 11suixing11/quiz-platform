// @ts-nocheck
// Auto-converted from coffee-personality.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const COFFEE_PERSONALITY_TEST: any = {
    type: 'coffee-personality', icon: '☕', color: '#795548',
    questions: [
        { id: 1, dimension: 'BK', zh: '我喜欢黑咖啡。', en: 'I like black coffee.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'BK', zh: '我喜欢简单直接的事物。', en: 'I like simple and direct things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'BK', zh: '我做事高效。', en: 'I am efficient.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'BK', zh: '我不喜欢花哨的东西。', en: 'I don\'t like flashy things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LT', zh: '我喜欢拿铁或卡布奇诺。', en: 'I like lattes or cappuccinos.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LT', zh: '我喜欢温和的事物。', en: 'I like mild things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LT', zh: '我善于与人相处。', en: 'I am good at getting along with people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LT', zh: '我喜欢平衡的生活。', en: 'I like a balanced life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SC', zh: '我喜欢花式咖啡。', en: 'I like fancy coffee drinks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SC', zh: '我喜欢甜食。', en: 'I like sweets.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SC', zh: '我喜欢享受生活。', en: 'I like enjoying life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SC', zh: '我注重生活品质。', en: 'I value quality of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SP', zh: '我喜欢尝试新的咖啡口味。', en: 'I like trying new coffee flavors.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SP', zh: '我喜欢探索新事物。', en: 'I like exploring new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SP', zh: '我不喜欢一成不变。', en: 'I don\'t like things that never change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SP', zh: '我喜欢创新。', en: 'I like innovation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { BK: { total: 0, count: 0 }, LT: { total: 0, count: 0 }, SC: { total: 0, count: 0 }, SP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'BK', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'BK': { zh: { title: '黑咖啡型', name: '黑咖啡型', description: '你是黑咖啡型。你简单直接、高效务实，不喜欢花哨的东西。' }, en: { title: 'Black Coffee', name: 'Black Coffee', description: 'You are a black coffee type. You are simple, direct, efficient, and don\'t like flashy things.' } },
        'LT': { zh: { title: '拿铁型', name: '拿铁型', description: '你是拿铁型。你温和、善于与人相处，喜欢平衡的生活。' }, en: { title: 'Latte', name: 'Latte', description: 'You are a latte type. You are mild, good at getting along with people, and like a balanced life.' } },
        'SC': { zh: { title: '花式咖啡型', name: '花式咖啡型', description: '你是花式咖啡型。你享受生活，注重品质，喜欢甜食和花式咖啡。' }, en: { title: 'Fancy Coffee', name: 'Fancy Coffee', description: 'You are a fancy coffee type. You enjoy life,value quality, and like sweets and fancy coffee drinks.' } },
        'SP': { zh: { title: '特调咖啡型', name: '特调咖啡型', description: '你是特调咖啡型。你喜欢探索新事物，创新，不喜欢单调。' }, en: { title: 'Special Brew', name: 'Special Brew', description: 'You are a special brew type. You like exploring new things, innovation, and don\'t like monotony.' } }
    },
    uiText: {
        zh: { resultTitle: '你的咖啡性格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Coffee Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default COFFEE_PERSONALITY_TEST;
