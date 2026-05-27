// @ts-nocheck
// Auto-converted from humor-style.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const HUMOR_STYLE_TEST: any = {
    type: 'humor-style', icon: '😄', color: '#FFC107',
    questions: [
        { id: 1, dimension: 'AF', zh: '我喜欢讲笑话逗大家开心。', en: 'I like telling jokes to make everyone happy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AF', zh: '我喜欢用幽默化解尴尬。', en: 'I like using humor to resolve awkwardness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AF', zh: '我是朋友中的开心果。', en: 'I am the life of the party among friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AF', zh: '我喜欢让大家笑。', en: 'I like making people laugh.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'BH', zh: '我喜欢自嘲。', en: 'I like self-deprecating humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'BH', zh: '我能拿自己开玩笑。', en: 'I can make fun of myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'BH', zh: '我喜欢用幽默化解自己的困境。', en: 'I like using humor to handle my own difficulties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'BH', zh: '我觉得自嘲是一种智慧。', en: 'I think self-deprecating humor is a kind of wisdom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CH', zh: '我喜欢讽刺的幽默。', en: 'I like sarcastic humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CH', zh: '我喜欢用幽默批评社会现象。', en: 'I like using humor to criticize social phenomena.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CH', zh: '我喜欢黑色幽默。', en: 'I like dark humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CH', zh: '我喜欢犀利的幽默。', en: 'I like sharp humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IH', zh: '我喜欢冷笑话。', en: 'I like dry jokes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IH', zh: '我喜欢文字游戏和双关语。', en: 'I like wordplay and puns.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'IH', zh: '我喜欢观察生活中的趣事。', en: 'I like observing funny things in life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IH', zh: '我喜欢含蓄的幽默。', en: 'I like subtle humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AF: { total: 0, count: 0 }, BH: { total: 0, count: 0 }, CH: { total: 0, count: 0 }, IH: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AF', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AF': { zh: { title: '亲和幽默型', name: '亲和幽默型', description: '你是亲和幽默型。你喜欢用幽默逗大家开心，是朋友圈的开心果。' }, en: { title: 'Affiliative Humorist', name: 'Affiliative Humorist', description: 'You are an affiliative humorist. You like using humor to make everyone happy and are the life of the party.' } },
        'BH': { zh: { title: '自嘲幽默型', name: '自嘲幽默型', description: '你是自嘲幽默型。你能拿自己开玩笑，用幽默化解困境。' }, en: { title: 'Self-Deprecating Humorist', name: 'Self-Deprecating Humorist', description: 'You are a self-deprecating humorist. You can make fun of yourself and use humor to handle difficulties.' } },
        'CH': { zh: { title: '批判幽默型', name: '批判幽默型', description: '你是批判幽默型。你喜欢讽刺和黑色幽默，用幽默批评社会现象。' }, en: { title: 'Critical Humorist', name: 'Critical Humorist', description: 'You are a critical humorist. You like sarcasm and dark humor, using humor to criticize social phenomena.' } },
        'IH': { zh: { title: '智慧幽默型', name: '智慧幽默型', description: '你是智慧幽默型。你喜欢冷笑话、文字游戏和含蓄的幽默。' }, en: { title: 'Intellectual Humorist', name: 'Intellectual Humorist', description: 'You are an intellectual humorist. You like dry jokes, wordplay, and subtle humor.' } }
    },
    uiText: {
        zh: { resultTitle: '你的幽默风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Humor Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default HUMOR_STYLE_TEST;
