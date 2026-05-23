var LIFE_SATISFACTION_TEST = {
    type: 'life-satisfaction', icon: '🌟', color: '#FFC107',
    questions: [
        { id: 1, dimension: 'LS', zh: '我对我的生活感到满意。', en: 'I am satisfied with my life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LS', zh: '我的生活接近我的理想。', en: 'My life is close to my ideal.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LS', zh: '我的生活条件很好。', en: 'My living conditions are good.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LS', zh: '我对生活中重要的事情感到满意。', en: 'I am satisfied with important things in my life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LS', zh: '如果可以重来，我不会改变什么。', en: 'If I could live over, I wouldn\'t change much.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LS', zh: '我对我的健康感到满意。', en: 'I am satisfied with my health.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LS', zh: '我对我的人际关系感到满意。', en: 'I am satisfied with my relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LS', zh: '我对我的工作感到满意。', en: 'I am satisfied with my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'LS', zh: '我对我的经济状况感到满意。', en: 'I am satisfied with my financial situation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'LS', zh: '我对我的个人成长感到满意。', en: 'I am satisfied with my personal growth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'LS', zh: '我对我的休闲生活感到满意。', en: 'I am satisfied with my leisure life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'LS', zh: '我对我的精神生活感到满意。', en: 'I am satisfied with my spiritual life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LS', zh: '我对我的社会贡献感到满意。', en: 'I am satisfied with my social contribution.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LS', zh: '我对我的生活质量感到满意。', en: 'I am satisfied with my quality of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'LS', zh: '我对我的未来感到乐观。', en: 'I am optimistic about my future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LS', zh: '总体来说我对生活感到满意。', en: 'Overall I am satisfied with life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😞', title: '低生活满意度', description: '你的生活满意度较低。建议反思生活中不满意的部分，寻找改善的方法。', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: '中等生活满意度', description: '你有中等的生活满意度。你对某些方面满意，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🌟', title: '高生活满意度', description: '你有很高的生活满意度。你对生活的各方面都感到满意，这是很健康的状态。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😞', title: 'Low Life Satisfaction', description: 'Your life satisfaction is low. Consider reflecting on unsatisfied aspects and finding ways to improve.', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: 'Moderate Life Satisfaction', description: 'You have moderate life satisfaction. You are satisfied with some aspects but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌟', title: 'High Life Satisfaction', description: 'You have high life satisfaction. You are satisfied with all aspects of life, which is a very healthy state.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的生活满意度', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Life Satisfaction', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
