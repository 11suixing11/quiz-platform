var SELF_EFFICACY_TEST = {
    type: 'self-efficacy', icon: '💪', color: '#FF6F00',
    questions: [
        { id: 1, dimension: 'SE', zh: '我能做到我下定决心要做的事。', en: 'I can accomplish what I set my mind to.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SE', zh: '面对困难任务，我有信心完成。', en: 'I am confident I can complete difficult tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SE', zh: '我能坚持到底直到达成目标。', en: 'I can persevere until I reach my goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SE', zh: '我相信自己能应对意外情况。', en: 'I believe I can handle unexpected situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SE', zh: '我能有效地解决生活中的问题。', en: 'I can effectively solve problems in my life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SE', zh: '我在压力下仍能保持高效。', en: 'I stay productive under pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SE', zh: '我能快速学习新事物。', en: 'I can learn new things quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SE', zh: '我相信自己能处理好人际关系。', en: 'I believe I can handle relationships well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SE', zh: '我能克服内心的恐惧和焦虑。', en: 'I can overcome my fears and anxieties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SE', zh: '我对自己的未来充满信心。', en: 'I am confident about my future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🌱', title: '低自我效能感', description: '你的自我效能感较低。你可能对自己的能力缺乏信心，建议从小目标开始逐步建立自信。', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: '中等自我效能感', description: '你有中等的自我效能感。你对自己有一定信心，但在某些领域可能还需要提升。', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: '高自我效能感', description: '你有很强的自我效能感。你相信自己的能力，勇于面对挑战，能够坚持达成目标。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🌱', title: 'Low Self-Efficacy', description: 'Your self-efficacy is low. You may lack confidence in your abilities. Start with small goals to build confidence.', color: '#F44336' },
            { range: [31, 60], icon: '🌿', title: 'Moderate Self-Efficacy', description: 'You have moderate self-efficacy. You have some confidence, but may need improvement in certain areas.', color: '#FFC107' },
            { range: [61, 100], icon: '🌳', title: 'High Self-Efficacy', description: 'You have strong self-efficacy. You believe in your abilities, face challenges bravely, and persevere to reach goals.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的自我效能感', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Self-Efficacy', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
