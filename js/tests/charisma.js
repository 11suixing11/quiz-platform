var CHARISMA_TEST = {
    type: 'charisma', icon: '✨', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'PR', zh: '我能吸引他人的注意。', en: 'I can attract others\' attention.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PR', zh: '我在人群中很突出。', en: 'I stand out in a crowd.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PR', zh: '我能给人留下深刻印象。', en: 'I can leave a deep impression on people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PR', zh: '我有独特的个人魅力。', en: 'I have unique personal charm.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'WP', zh: '我能温暖他人的心。', en: 'I can warm others\' hearts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'WP', zh: '他人喜欢和我在一起。', en: 'Others like being with me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'WP', zh: '我能让人感到舒适。', en: 'I can make people feel comfortable.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'WP', zh: '我善于表达关心。', en: 'I am good at expressing care.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CP', zh: '我能自信地表达自己。', en: 'I can express myself confidently.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CP', zh: '我在压力下能保持镇定。', en: 'I can stay composed under pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CP', zh: '我能掌控局面。', en: 'I can take control of situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CP', zh: '我有领导气质。', en: 'I have leadership presence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IN', zh: '我能激励他人。', en: 'I can inspire others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IN', zh: '我有远见和愿景。', en: 'I have vision and foresight.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'IN', zh: '我能激发他人的潜力。', en: 'I can inspire others\' potential.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IN', zh: '我能传递正能量。', en: 'I can convey positive energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { PR: { total: 0, count: 0 }, WP: { total: 0, count: 0 }, CP: { total: 0, count: 0 }, IN: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'PR', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'PR': { zh: { title: '存在魅力型', name: '存在魅力型', description: '你是存在魅力型。你有强烈的个人存在感，能吸引他人注意。' }, en: { title: 'Presence Charisma', name: 'Presence Charisma', description: 'You have presence charisma. You have a strong personal presence that attracts others\' attention.' } },
        'WP': { zh: { title: '温暖魅力型', name: '温暖魅力型', description: '你是温暖魅力型。你能温暖他人，让人感到舒适和被关心。' }, en: { title: 'Warmth Charisma', name: 'Warmth Charisma', description: 'You have warmth charisma. You can warm others and make them feel comfortable and cared for.' } },
        'CP': { zh: { title: '自信魅力型', name: '自信魅力型', description: '你是自信魅力型。你自信、镇定，有领导气质。' }, en: { title: 'Confidence Charisma', name: 'Confidence Charisma', description: 'You have confidence charisma. You are confident, composed, and have leadership presence.' } },
        'IN': { zh: { title: '激励魅力型', name: '激励魅力型', description: '你是激励魅力型。你能激励他人，有远见，传递正能量。' }, en: { title: 'Inspirational Charisma', name: 'Inspirational Charisma', description: 'You have inspirational charisma. You can inspire others, have vision, andconvey positive energy.' } }
    },
    uiText: {
        zh: { resultTitle: '你的魅力指数', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Charisma Index', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
