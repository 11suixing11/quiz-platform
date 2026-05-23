var MANIPULATION_TEST = {
    type: 'manipulation', icon: '🎭', color: '#9E9E9E',
    questions: [
        { id: 1, dimension: 'MR', zh: '我能巧妙地影响他人的决定。', en: 'I can subtly influence others\' decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'MR', zh: '我善于说服他人。', en: 'I am good at persuading others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'MR', zh: '我能利用他人的情绪来达到目的。', en: 'I can use others\' emotions to achieve my goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'MR', zh: '我善于隐藏自己的真实意图。', en: 'I am good at hiding my true intentions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'MR', zh: '我能通过奉承来获得好处。', en: 'I can gain benefits through flattery.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'MR', zh: '我善于利用他人的弱点。', en: 'I am good at exploiting others\' weaknesses.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'MR', zh: '我能让他人感到内疚来达到目的。', en: 'I can make others feel guilty to achieve my goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'MR', zh: '我善于制造紧迫感来影响他人。', en: 'I am good at creating urgency to influence others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'MR', zh: '我能通过沉默来惩罚他人。', en: 'I can punish others through silence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MR', zh: '我善于选择性地分享信息。', en: 'I am good at selectively sharing information.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MR', zh: '我能通过威胁来达到目的。', en: 'I can use threats to achieve my goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MR', zh: '我善于利用他人的同情心。', en: 'I am good at exploiting others\' sympathy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'MR', zh: '我能让他人依赖我。', en: 'I can make others depend on me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MR', zh: '我善于利用他人的恐惧。', en: 'I am good at exploiting others\' fears.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'MR', zh: '我能通过比较来影响他人。', en: 'I can influence others through comparison.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'MR', zh: '我善于利用社会压力。', en: 'I am good at using social pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '😇', title: '低操控倾向', description: '你的操控倾向很低。你倾向于直接、诚实的沟通方式。', color: '#4CAF50' },
            { range: [26, 50], icon: '🤔', title: '轻度操控倾向', description: '你有轻度操控倾向。有时会使用一些策略，但总体上保持诚实。', color: '#FFC107' },
            { range: [51, 75], icon: '🎭', title: '中度操控倾向', description: '你有中度操控倾向。你善于影响他人，但可能忽视他人的感受。', color: '#FF9800' },
            { range: [76, 100], icon: '😈', title: '高度操控倾向', description: '你有高度操控倾向。建议反思自己的行为，学习更健康的沟通方式。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '😇', title: 'Low Manipulation Tendency', description: 'Your manipulation tendency is low. You prefer direct and honest communication.', color: '#4CAF50' },
            { range: [26, 50], icon: '🤔', title: 'Mild Manipulation Tendency', description: 'You have mild manipulation tendency. You sometimes use strategies but generally stay honest.', color: '#FFC107' },
            { range: [51, 75], icon: '🎭', title: 'Moderate Manipulation Tendency', description: 'You have moderate manipulation tendency. You are good at influencing others but may忽视 their feelings.', color: '#FF9800' },
            { range: [76, 100], icon: '😈', title: 'High Manipulation Tendency', description: 'You have high manipulation tendency. Consider reflecting on your behavior and learning healthier communication.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的操控倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Manipulation Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
