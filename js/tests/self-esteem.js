var SELF_ESTEEM_TEST = {
    type: 'self-esteem', icon: '👑', color: '#FFC107',
    questions: [
        { id: 1, dimension: 'SE', zh: '我对自己感到满意。', en: 'I feel satisfied with myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SE', zh: '我认为自己是一个有价值的人。', en: 'I think I am a person of value.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SE', zh: '我能和大多数人一样好地做事。', en: 'I can do things as well as most people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SE', zh: '我觉得自己没什么值得骄傲的。', en: 'I feel I have nothing to be proud of.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 5, dimension: 'SE', zh: '我有时觉得自己很没用。', en: 'I sometimes feel useless.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 6, dimension: 'SE', zh: '我对自己的能力有信心。', en: 'I am confident in my abilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SE', zh: '我希望能更尊重自己。', en: 'I wish I could respect myself more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'SE', zh: '我有时觉得自己是个失败者。', en: 'I sometimes feel like a failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 9, dimension: 'SE', zh: '我对自己持积极态度。', en: 'I have a positive attitude toward myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SE', zh: '我总的来说觉得自己不错。', en: 'Overall, I feel good about myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '💔', title: '低自尊', description: '你的自尊水平较低。你可能经常对自己感到不满，建议关注自我肯定和自我接纳。', color: '#F44336' },
            { range: [26, 50], icon: '💛', title: '中等自尊', description: '你有中等的自尊水平。你对自己有一定信心，但有时会自我怀疑。', color: '#FFC107' },
            { range: [51, 75], icon: '💚', title: '较高自尊', description: '你有较高的自尊水平。你通常对自己感到满意，有健康的自我认知。', color: '#4CAF50' },
            { range: [76, 100], icon: '❤️', title: '高自尊', description: '你有很高的自尊水平。你对自己有清晰的认知，能够接纳自己的优点和缺点。', color: '#E91E63' }
        ],
        en: [
            { range: [0, 25], icon: '💔', title: 'Low Self-Esteem', description: 'Your self-esteem is low. You may often feel dissatisfied with yourself. Consider focusing on self-affirmation and self-acceptance.', color: '#F44336' },
            { range: [26, 50], icon: '💛', title: 'Moderate Self-Esteem', description: 'You have moderate self-esteem. You have some confidence but sometimes doubt yourself.', color: '#FFC107' },
            { range: [51, 75], icon: '💚', title: 'High Self-Esteem', description: 'You have high self-esteem. You are usually satisfied with yourself and have healthy self-awareness.', color: '#4CAF50' },
            { range: [76, 100], icon: '❤️', title: 'Very High Self-Esteem', description: 'You have very high self-esteem. You have a clear understanding of yourself and can accept both strengths and weaknesses.', color: '#E91E63' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的自尊水平', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Self-Esteem Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
