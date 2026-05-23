const INTERPERSONAL_ATTRACTION_TEST = {
    type: 'interpersonal-attraction', icon: '✨', color: '#E91E63',
    questions: [
        { id: 1, dimension: 'PA', zh: '外表吸引力对我来说很重要。', en: 'Physical attractiveness is important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SA', zh: '相似的兴趣爱好让我感到亲近。', en: 'Similar interests make me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PA', zh: '幽默感是吸引我的重要因素。', en: 'A sense of humor is an important factor in attraction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SA', zh: '相似的价值观让我感到亲近。', en: 'Similar values make me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PA', zh: '自信的人很吸引我。', en: 'Confident people attract me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SA', zh: '相似的生活目标让我感到亲近。', en: 'Similar life goals make me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PA', zh: '善良和体贴很吸引我。', en: 'Kindness and thoughtfulness attract me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SA', zh: '相似的背景让我感到亲近。', en: 'Similar backgrounds make me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PA', zh: '智慧和才华很吸引我。', en: 'Intelligence and talent attract me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SA', zh: '互补的性格让我感到吸引。', en: 'Complementary personalities attract me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PA', zh: '经济实力是吸引我的因素。', en: 'Financial strength is a factor in attraction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SA', zh: '熟悉感让我感到安全和亲近。', en: 'Familiarity makes me feel safe and close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PA', zh: '社会地位是吸引我的因素。', en: 'Social status is a factor in attraction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SA', zh: '共同的经历让我感到亲近。', en: 'Shared experiences make me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PA', zh: '激情和浪漫是吸引我的因素。', en: 'Passion and romance are factors in attraction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SA', zh: '情感上的共鸣让我感到亲近。', en: 'Emotional resonance makes me feel close.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { PA: { total: 0, count: 0 }, SA: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var paAvg = dims.PA.count > 0 ? dims.PA.total / dims.PA.count : 0;
        var saAvg = dims.SA.count > 0 ? dims.SA.total / dims.SA.count : 0;
        var maxDim = paAvg >= saAvg ? 'PA' : 'SA';
        return { type: maxDim, dimensions: [{ name: 'Physical', zh: '外在吸引', score: Math.round((paAvg / 5) * 100) }, { name: 'Similarity', zh: '相似吸引', score: Math.round((saAvg / 5) * 100) }] };
    },
    types: {
        'PA': { zh: { title: '外在吸引型', name: '外在吸引型', description: '你更容易被外在特质吸引，如外表、幽默感、自信等。你重视第一印象和感官体验。' }, en: { title: 'Physical Attraction Type', name: 'Physical Attraction Type', description: 'You are more attracted to external traits like appearance, humor, and confidence. You value first impressions and sensory experiences.' } },
        'SA': { zh: { title: '相似吸引型', name: '相似吸引型', description: '你更容易被相似性吸引，如共同的价值观、兴趣和背景。你重视深层连接和共鸣。' }, en: { title: 'Similarity Attraction Type', name: 'Similarity Attraction Type', description: 'You are more attracted to similarity like shared values, interests, and backgrounds. You value deep connection and resonance.' } }
    },
    uiText: {
        zh: { resultTitle: '你的人际吸引类型', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Attraction Type', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
