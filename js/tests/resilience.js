const RESILIENCE_TEST = {
    type: 'resilience', icon: '🛡️', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'RE', zh: '我能很快从挫折中恢复。', en: 'I recover quickly from setbacks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RE', zh: '面对困难时我保持乐观。', en: 'I stay optimistic when facing difficulties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RE', zh: '我能适应变化的环境。', en: 'I can adapt to changing environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RE', zh: '压力下我仍能保持冷静。', en: 'I stay calm under pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'RE', zh: '我把失败看作学习机会。', en: 'I see failure as a learning opportunity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RE', zh: '我有强大的支持网络。', en: 'I have a strong support network.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'RE', zh: '我能找到解决问题的方法。', en: 'I can find ways to solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'RE', zh: '我相信自己能度过难关。', en: 'I believe I can get through tough times.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'RE', zh: '我能从逆境中找到意义。', en: 'I can find meaning in adversity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'RE', zh: '我能控制自己的情绪反应。', en: 'I can control my emotional reactions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'RE', zh: '我在困境中仍能保持幽默感。', en: 'I maintain my sense of humor in difficult situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'RE', zh: '我能接受无法改变的事情。', en: 'I can accept things I cannot change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RE', zh: '我在困难时期会照顾好自己。', en: 'I take care of myself during difficult times.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'RE', zh: '我能从创伤中成长。', en: 'I can grow from trauma.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'RE', zh: '我有明确的人生目标。', en: 'I have clear life goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'RE', zh: '我能灵活调整计划。', en: 'I can flexibly adjust my plans.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'RE', zh: '我在危机中能保持清醒思考。', en: 'I can think clearly during crises.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'RE', zh: '我相信困难是暂时的。', en: 'I believe difficulties are temporary.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'RE', zh: '我能从他人的支持中获得力量。', en: 'I gain strength from others\' support.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'RE', zh: '我对自己应对挑战的能力有信心。', en: 'I am confident in my ability to handle challenges.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🌱', title: '低心理弹性', description: '你的心理弹性较低。面对困难时，你可能会感到难以应对。建议培养积极的应对策略。', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等心理弹性', description: '你有中等的心理弹性。你能在一定程度上应对困难，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: '高心理弹性', description: '你有很强的心理弹性。你善于从逆境中恢复，能够灵活应对各种挑战。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🌱', title: 'Low Resilience', description: 'Your resilience is low. You may find it hard to cope with difficulties. Consider developing positive coping strategies.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Resilience', description: 'You have moderate resilience. You can handle difficulties to some extent, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: 'High Resilience', description: 'You have strong resilience. You recover well from adversity and can flexibly handle various challenges.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的心理弹性', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Resilience Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
