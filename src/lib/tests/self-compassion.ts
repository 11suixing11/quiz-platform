// @ts-nocheck
// Auto-converted from self-compassion.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const SELF_COMPASSION_TEST: any = {
    type: 'self-compassion', icon: '💝', color: '#F44336',
    questions: [
        { id: 1, dimension: 'SK', zh: '当我犯错时，我会善待自己。', en: 'When I make mistakes, I treat myself kindly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SK', zh: '我会给自己温暖和理解。', en: 'I give myself warmth and understanding.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SK', zh: '我对自己很苛刻。', en: 'I am hard on myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 4, dimension: 'SK', zh: '我容忍自己的不完美。', en: 'I tolerate my imperfections.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CH', zh: '我感到自己的困难与他人共享。', en: 'I feel my difficulties are shared with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CH', zh: '我知道其他人也在经历困难。', en: 'I know others are also going through difficulties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CH', zh: '我感到自己并不孤单。', en: 'I feel I am not alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CH', zh: '我认识到痛苦是人类共同的体验。', en: 'I recognize suffering is a shared human experience.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MI', zh: '我能在痛苦中保持平衡。', en: 'I can stay balanced in pain.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MI', zh: '我能觉察到自己的痛苦。', en: 'I can be aware of my suffering.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MI', zh: '我能以开放的态度面对痛苦。', en: 'I can face pain with an open attitude.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MI', zh: '我能不被痛苦所淹没。', en: 'I can not be overwhelmed by pain.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { SK: { total: 0, count: 0 }, CH: { total: 0, count: 0 }, MI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'Self-Kindness', zh: '自我善意', score: Math.round((dims.SK.total / (dims.SK.count * 5)) * 100) },
            { name: 'Common Humanity', zh: '共同人性', score: Math.round((dims.CH.total / (dims.CH.count * 5)) * 100) },
            { name: 'Mindfulness', zh: '正念', score: Math.round((dims.MI.total / (dims.MI.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的自我同情水平', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Self-Compassion Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default SELF_COMPASSION_TEST;
