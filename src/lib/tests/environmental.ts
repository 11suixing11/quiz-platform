// @ts-nocheck
// Auto-converted from environmental.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const ENVIRONMENTAL_TEST: any = {
    type: 'environmental', icon: '♻️', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'EA', zh: '我关心环境问题。', en: 'I care about environmental issues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EA', zh: '我会进行垃圾分类。', en: 'I do waste sorting.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EA', zh: '我会节约用水。', en: 'I save water.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EA', zh: '我会节约用电。', en: 'I save electricity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EA', zh: '我会减少使用一次性产品。', en: 'I reduce single-use products.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EA', zh: '我会选择环保产品。', en: 'I choose eco-friendly products.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EA', zh: '我会绿色出行。', en: 'I use green transportation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EA', zh: '我会减少碳排放。', en: 'I reduce carbon emissions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EA', zh: '我会支持环保组织。', en: 'I support environmental organizations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EA', zh: '我会参与环保活动。', en: 'I participate in environmental activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EA', zh: '我会减少食物浪费。', en: 'I reduce food waste.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EA', zh: '我会使用可再生能源。', en: 'I use renewable energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EA', zh: '我会购买本地产品。', en: 'I buy local products.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EA', zh: '我会减少塑料使用。', en: 'I reduce plastic use.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EA', zh: '我会种植植物。', en: 'I plant trees and plants.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EA', zh: '我会宣传环保知识。', en: 'I promote environmental knowledge.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🏭', title: '低环保意识', description: '你的环保意识较低。建议了解更多环保知识，从小事做起保护环境。', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等环保意识', description: '你有中等的环保意识。你能在某些方面保护环境，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '♻️', title: '高环保意识', description: '你有很高的环保意识。你积极保护环境，践行绿色生活方式。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🏭', title: 'Low Environmental Awareness', description: 'Your environmental awareness is low. Consider learning more about environmental protection and starting with small actions.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Environmental Awareness', description: 'You have moderate environmental awareness. You can protect the environment in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '♻️', title: 'High Environmental Awareness', description: 'You have high environmental awareness. You actively protect the environment and practice green living.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的环保意识', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Environmental Awareness', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default ENVIRONMENTAL_TEST;
