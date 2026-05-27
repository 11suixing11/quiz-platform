// @ts-nocheck
// Auto-converted from power-dynamics.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const POWER_DYNAMICS_TEST: any = {
    type: 'power-dynamics', icon: '⚖️', color: '#607D8B',
    questions: [
        { id: 1, dimension: 'AS', zh: '我在关系中有主导权。', en: 'I have dominance in relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AS', zh: '我喜欢做决定。', en: 'I like making decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AS', zh: '我能影响他人的决定。', en: 'I can influence others\' decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AS', zh: '我自信地表达自己的观点。', en: 'I confidently express my opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SB', zh: '我经常顺从他人的意愿。', en: 'I often submit to others\' wishes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SB', zh: '我很难坚持自己的立场。', en: 'I find it hard to stand my ground.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SB', zh: '我经常让别人做决定。', en: 'I often let others make decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SB', zh: '我害怕与权威人士对抗。', en: 'I fear confronting authority figures.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EQ', zh: '我与他人有平等的关系。', en: 'I have equal relationships with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EQ', zh: '我尊重他人的自主权。', en: 'I respect others\' autonomy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EQ', zh: '我寻求双赢的解决方案。', en: 'I seek win-win solutions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EQ', zh: '我与他人共同做决定。', en: 'I make decisions together with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AS', zh: '我能设定清晰的界限。', en: 'I can set clear boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SB', zh: '我很难对不合理的要求说不。', en: 'I find it hard to say no to unreasonable demands.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EQ', zh: '我重视关系中的公平。', en: 'I value fairness in relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AS', zh: '我能有效地表达自己的需求。', en: 'I can effectively express my needs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AS: { total: 0, count: 0 }, SB: { total: 0, count: 0 }, EQ: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'EQ', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AS': { zh: { title: '主导型', name: '主导型', description: '你在关系中倾向于主导。你喜欢做决定，能影响他人。注意不要忽视他人的需求。' }, en: { title: 'Assertive', name: 'Assertive', description: 'You tend to be dominant in relationships. You like making decisions and can influence others. Be careful not to neglect others\' needs.' } },
        'SB': { zh: { title: '顺从型', name: '顺从型', description: '你在关系中倾向于顺从。你经常让他人做决定，可能很难坚持自己的立场。建议学习更自信地表达自己。' }, en: { title: 'Submissive', name: 'Submissive', description: 'You tend to be submissive in relationships. You often let others make decisions and may find it hard to stand your ground. Consider learning to express yourself more assertively.' } },
        'EQ': { zh: { title: '平等型', name: '平等型', description: '你在关系中追求平等。你尊重他人的自主权，寻求双赢的解决方案。这是最健康的关系模式。' }, en: { title: 'Equal', name: 'Equal', description: 'You seek equality in relationships. You respect others\' autonomy and seek win-win solutions. This is the healthiest relationship pattern.' } }
    },
    uiText: {
        zh: { resultTitle: '你的权力动态风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Power Dynamics Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default POWER_DYNAMICS_TEST;
