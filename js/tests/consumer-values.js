var CONSUMER_VALUES_TEST = {
    type: 'consumer-values', icon: '🛒', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'QV', zh: '我注重产品质量�?, en: 'I value product quality.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'QV', zh: '我愿意为高质量支付更多�?, en: 'I am willing to pay more for quality.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PV', zh: '我注重价格�?, en: 'I focus on price.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PV', zh: '我喜欢寻找优惠和折扣�?, en: 'I like finding deals and discounts.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'BV', zh: '我注重品牌�?, en: 'I focus on brands.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'BV', zh: '我更喜欢知名品牌�?, en: 'I prefer well-known brands.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EV', zh: '我注重环保�?, en: 'I focus on environmental protection.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EV', zh: '我更喜欢环保产品�?, en: 'I prefer eco-friendly products.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'QV', zh: '我注重实用性�?, en: 'I value practicality.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'QV', zh: '我注重耐用性�?, en: 'I value durability.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PV', zh: '我会比较多家店铺的价格�?, en: 'I compare prices from multiple stores.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PV', zh: '我喜欢在打折时购物�?, en: 'I like shopping during sales.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'BV', zh: '品牌代表我的身份�?, en: 'Brands represent my identity.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'BV', zh: '我愿意为品牌溢价支付�?, en: 'I am willing to pay a premium for brands.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EV', zh: '我会避免不环保的产品�?, en: 'I avoid non-eco-friendly products.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EV', zh: '我会选择可持续的产品�?, en: 'I choose sustainable products.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { QV: { total: 0, count: 0 }, PV: { total: 0, count: 0 }, BV: { total: 0, count: 0 }, EV: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'QV', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'QV': { zh: { title: '质量导向�?, name: '质量导向�?, description: '你是质量导向型消费者。你注重产品质量、实用性和耐用性，愿意为高质量支付更多�? }, en: { title: 'Quality-Oriented', name: 'Quality-Oriented', description: 'You are a quality-oriented consumer. You focus on product quality, practicality, and durability, and are willing to pay more for quality.' } },
        'PV': { zh: { title: '价格导向�?, name: '价格导向�?, description: '你是价格导向型消费者。你注重价格，喜欢寻找优惠和折扣，会比较多家店铺的价格�? }, en: { title: 'Price-Oriented', name: 'Price-Oriented', description: 'You are a price-oriented consumer. You focus on price, like finding deals and discounts, and compare prices from multiple stores.' } },
        'BV': { zh: { title: '品牌导向�?, name: '品牌导向�?, description: '你是品牌导向型消费者。你注重品牌，更喜欢知名品牌，愿意为品牌溢价支付�? }, en: { title: 'Brand-Oriented', name: 'Brand-Oriented', description: 'You are a brand-oriented consumer. You focus on brands, prefer well-known brands, and are willing to pay a premium for brands.' } },
        'EV': { zh: { title: '环保导向�?, name: '环保导向�?, description: '你是环保导向型消费者。你注重环保，更喜欢环保产品，会选择可持续的产品�? }, en: { title: 'Eco-Oriented', name: 'Eco-Oriented', description: 'You are an eco-oriented consumer. You focus on environmental protection, prefer eco-friendly products, and choose sustainable products.' } }
    },
    uiText: {
        zh: { resultTitle: '你的消费�?, disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Consumer Values', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
