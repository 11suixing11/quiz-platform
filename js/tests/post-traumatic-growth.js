var POST_TRAUMATIC_GROWTH_TEST = {
    type: 'post-traumatic-growth', icon: '🌸', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'NP', zh: '困难经历让我发现了新的可能性。', en: 'Difficult experiences helped me discover new possibilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'NP', zh: '我改变了对人生优先事项的看法。', en: 'I changed my view on life priorities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'NP', zh: '我找到了新的人生目标。', en: 'I found new life goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'NP', zh: '我对生活有了新的兴趣。', en: 'I developed new interests in life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'RO', zh: '我和他人的关系变得更加亲密。', en: 'My relationships with others became closer.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RO', zh: '我更能理解他人的感受。', en: 'I understand others\' feelings better.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'RO', zh: '我更珍惜和家人朋友的关系。', en: 'I cherish relationships with family and friends more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'RO', zh: '我更愿意向他人寻求帮助。', en: 'I am more willing to seek help from others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PS', zh: '我发现自己比想象中更坚强。', en: 'I found I am stronger than I imagined.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PS', zh: '我对自己的能力更有信心。', en: 'I am more confident in my abilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PS', zh: '我知道自己能应对任何困难。', en: 'I know I can handle any difficulty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PS', zh: '我更清楚自己的优势和劣势。', en: 'I am more aware of my strengths and weaknesses.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AL', zh: '我更珍惜生命中的每一天。', en: 'I cherish every day of life more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AL', zh: '我更能欣赏生活中的小事。', en: 'I appreciate small things in life more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AL', zh: '我对生活充满感恩。', en: 'I am grateful for life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AL', zh: '我更懂得活在当下。', en: 'I better understand living in the present.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'SC', zh: '我对人生的意义有了更深的理解。', en: 'I have a deeper understanding of life\'s meaning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'SC', zh: '我的精神信仰变得更强大。', en: 'My spiritual beliefs became stronger.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'SC', zh: '我对世界有了新的理解。', en: 'I have a new understanding of the world.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'SC', zh: '我更能接受人生的不确定性。', en: 'I better accept life\'s uncertainty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { NP: { total: 0, count: 0 }, RO: { total: 0, count: 0 }, PS: { total: 0, count: 0 }, AL: { total: 0, count: 0 }, SC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'New Possibilities', zh: '新可能', score: Math.round((dims.NP.total / (dims.NP.count * 5)) * 100) },
            { name: 'Relating to Others', zh: '人际关系', score: Math.round((dims.RO.total / (dims.RO.count * 5)) * 100) },
            { name: 'Personal Strength', zh: '个人力量', score: Math.round((dims.PS.total / (dims.PS.count * 5)) * 100) },
            { name: 'Appreciation of Life', zh: '生命欣赏', score: Math.round((dims.AL.total / (dims.AL.count * 5)) * 100) },
            { name: 'Spiritual Change', zh: '精神变化', score: Math.round((dims.SC.total / (dims.SC.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的创伤后成长', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Post-Traumatic Growth', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
