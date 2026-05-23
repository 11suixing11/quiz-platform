const PSYCHOLOGICAL_RESILIENCE_TEST = {
    type: 'psychological-resilience', icon: '🛡️', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'PR', zh: '我能从重大挫折中恢复。', en: 'I can recover from major setbacks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PR', zh: '面对逆境我能保持冷静。', en: 'I stay calm when facing adversity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PR', zh: '我能适应重大生活变化。', en: 'I can adapt to major life changes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PR', zh: '我在困难时期能保持积极。', en: 'I stay positive during difficult times.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PR', zh: '我能从失败中学习。', en: 'I can learn from failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PR', zh: '我能处理多个压力源。', en: 'I can handle multiple stressors.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PR', zh: '我在压力下能做出好决策。', en: 'I make good decisions under pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'PR', zh: '我能从创伤中找到意义。', en: 'I can find meaning in trauma.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PR', zh: '我能保持情绪稳定。', en: 'I can maintain emotional stability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PR', zh: '我有强大的内心力量。', en: 'I have strong inner strength.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PR', zh: '我能从困境中找到出路。', en: 'I can find a way out of difficulties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PR', zh: '我能接受无法改变的事情。', en: 'I can accept things I cannot change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PR', zh: '我在危机中能帮助他人。', en: 'I can help others during crises.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PR', zh: '我相信困难终会过去。', en: 'I believe difficulties will pass.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PR', zh: '我能从痛苦中成长。', en: 'I can grow from pain.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'PR', zh: '我对自己的应对能力有信心。', en: 'I am confident in my coping abilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'PR', zh: '我能保持希望。', en: 'I can maintain hope.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'PR', zh: '我能灵活调整策略。', en: 'I can flexibly adjust strategies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'PR', zh: '我能从他人那里获得支持。', en: 'I can get support from others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'PR', zh: '我相信自己能度过任何困难。', en: 'I believe I can get through any difficulty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🌱', title: '低心理韧性', description: '你的心理韧性较低。建议培养积极的应对策略和寻求社会支持。', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等心理韧性', description: '你有中等的心理韧性。你能在一定程度上应对困难，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: '高心理韧性', description: '你有很强的心理韧性。你善于从逆境中恢复，能够灵活应对各种挑战。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🌱', title: 'Low Resilience', description: 'Your psychological resilience is low. Consider developing positive coping strategies and seeking social support.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Resilience', description: 'You have moderate psychological resilience. You can handle difficulties to some extent, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: 'High Resilience', description: 'You have strong psychological resilience. You recover well from adversity and can flexibly handle various challenges.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的心理韧性', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Psychological Resilience', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
