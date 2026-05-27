// @ts-nocheck
// Auto-converted from self-worth.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const SELF_WORTH_TEST: any = {
    type: 'self-worth', icon: '💎', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'SW', zh: '我觉得自己值得被爱。', en: 'I feel I am worthy of love.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SW', zh: '我值得拥有好的事物。', en: 'I deserve good things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SW', zh: '我不需要通过成就来证明自己的价值。', en: 'I don\'t need achievements to prove my worth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SW', zh: '我相信自己有独特的价值。', en: 'I believe I have unique value.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SW', zh: '我能接受他人的赞美。', en: 'I can accept compliments from others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SW', zh: '我觉得自己不值得拥有幸福。', en: 'I feel I don\'t deserve happiness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'SW', zh: '我经常和别人比较自己。', en: 'I often compare myself to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'SW', zh: '我觉得自己必须完美才值得被接受。', en: 'I feel I must be perfect to be accepted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 9, dimension: 'SW', zh: '我能为自己的需求发声。', en: 'I can speak up for my needs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SW', zh: '我值得被尊重。', en: 'I deserve to be respected.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SW', zh: '我不需要别人的认可来证明自己。', en: 'I don\'t need others\' approval to prove myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SW', zh: '我能原谅自己的错误。', en: 'I can forgive my own mistakes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SW', zh: '我觉得自己配得上好的关系。', en: 'I feel I deserve good relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SW', zh: '我能接受自己的缺点。', en: 'I can accept my shortcomings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SW', zh: '我相信自己值得成功。', en: 'I believe I deserve success.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SW', zh: '我不需要通过取悦他人来获得价值感。', en: 'I don\'t need to please others to feel worthy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '💔', title: '低自我价值感', description: '你的自我价值感较低。建议关注自我接纳，认识到自己的内在价值。', color: '#F44336' },
            { range: [31, 60], icon: '💛', title: '中等自我价值感', description: '你有中等的自我价值感。你有时能认识到自己的价值，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '💚', title: '高自我价值感', description: '你有很高的自我价值感。你能认识到自己的内在价值，不依赖外部认可。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '💔', title: 'Low Self-Worth', description: 'Your self-worth is low. Focus on self-acceptance and recognizing your intrinsic value.', color: '#F44336' },
            { range: [31, 60], icon: '💛', title: 'Moderate Self-Worth', description: 'You have moderate self-worth. You can sometimes recognize your value, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '💚', title: 'High Self-Worth', description: 'You have high self-worth. You recognize your intrinsic value without depending on external validation.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的自我价值感', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Self-Worth', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default SELF_WORTH_TEST;
