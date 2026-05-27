// @ts-nocheck
// Auto-converted from org-commitment.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const ORG_COMMITMENT_TEST: any = {
    type: 'organizational-commitment', icon: '🏢', color: '#607D8B',
    questions: [
        { id: 1, dimension: 'AC', zh: '我愿意为组织付出额外努力。', en: 'I am willing to put in extra effort for the organization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AC', zh: '我关心组织的未来。', en: 'I care about the organization\'s future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AC', zh: '我感到与组织有情感联系。', en: 'I feel emotionally connected to the organization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AC', zh: '我为在组织工作感到自豪。', en: 'I am proud to work in this organization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'NC', zh: '我留在组织主要是因为经济原因。', en: 'I stay mainly for economic reasons.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'NC', zh: '离开组织会让我损失很多。', en: 'Leaving would cost me a lot.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'NC', zh: '我很难找到同样好的工作。', en: 'I can\'t easily find an equally good job.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'NC', zh: '我留下来是因为没有更好的选择。', en: 'I stay because there are no better options.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CC', zh: '我觉得有义务留在组织。', en: 'I feel obligated to stay.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CC', zh: '我感到对组织有道德责任。', en: 'I feel a moral responsibility to the organization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CC', zh: '我认为忠诚很重要。', en: 'I believe loyalty is important.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CC', zh: '我不应该轻易离开组织。', en: 'I shouldn\'t leave the organization easily.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AC', zh: '我认同组织的价值观。', en: 'I identify with the organization\'s values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AC', zh: '我愿意长期留在组织。', en: 'I am willing to stay long-term.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'NC', zh: '我担心离开后的经济压力。', en: 'I worry about financial pressure after leaving.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CC', zh: '我认为应该对组织忠诚。', en: 'I believe one should be loyal to the organization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AC: { total: 0, count: 0 }, NC: { total: 0, count: 0 }, CC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AC', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AC': { zh: { title: '情感承诺型', name: '情感承诺型', description: '你对组织有情感承诺。你认同组织的价值观，关心组织的未来，愿意为组织付出。这是最积极的承诺类型。' }, en: { title: 'Affective Commitment', name: 'Affective Commitment', description: 'You have affective commitment to the organization. You identify with its values, care about its future, and are willing to contribute. This is the most positive commitment type.' } },
        'NC': { zh: { title: '持续承诺型', name: '持续承诺型', description: '你对组织有持续承诺。你留下来主要是因为经济原因和缺乏更好的选择。建议思考是否有更好的职业发展机会。' }, en: { title: 'Continuance Commitment', name: 'Continuance Commitment', description: 'You have continuance commitment. You stay mainly for economic reasons and lack of better options. Consider whether there are better career opportunities.' } },
        'CC': { zh: { title: '规范承诺型', name: '规范承诺型', description: '你对组织有规范承诺。你留下来是因为道德责任和忠诚感。建议思考这是否是你真正想要的。' }, en: { title: 'Normative Commitment', name: 'Normative Commitment', description: 'You have normative commitment. You stay because of moral responsibility and loyalty. Consider whether this is what you truly want.' } }
    },
    uiText: {
        zh: { resultTitle: '你的组织承诺', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Organizational Commitment', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default ORG_COMMITMENT_TEST;
