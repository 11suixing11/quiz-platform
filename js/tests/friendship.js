var FRIENDSHIP_TEST = {
    type: 'friendship', icon: '👫', color: '#2196F3',
    questions: [
        { id: 1, dimension: 'FQ', zh: '我有可以倾诉的朋友。', en: 'I have friends I can talk to.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'FQ', zh: '我经常与朋友联系。', en: 'I regularly contact my friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'FQ', zh: '我能信任我的朋友。', en: 'I can trust my friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'FQ', zh: '我与朋友有共同的兴趣。', en: 'I share interests with my friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'FQ', zh: '我在困难时能得到朋友的支持。', en: 'I can get support from friends during difficult times.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'FQ', zh: '我能与朋友分享快乐。', en: 'I can share happiness with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'FQ', zh: '我与朋友有深度的对话。', en: 'I have deep conversations with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'FQ', zh: '我能接受朋友的不同意见。', en: 'I can accept friends\' different opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'FQ', zh: '我愿意为朋友付出时间。', en: 'I am willing to spend time for friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'FQ', zh: '我能与朋友一起成长。', en: 'I can grow together with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'FQ', zh: '我感到被朋友理解。', en: 'I feel understood by friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'FQ', zh: '我能与朋友保持长久的关系。', en: 'I can maintain long-term friendships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'FQ', zh: '我与朋友有真诚的互动。', en: 'I have genuine interactions with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'FQ', zh: '我能与朋友分享我的脆弱。', en: 'I can share my vulnerability with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'FQ', zh: '我感到被朋友接纳。', en: 'I feel accepted by friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'FQ', zh: '我对我的友谊感到满意。', en: 'I am satisfied with my friendships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😔', title: '低友谊质量', description: '你的友谊质量较低。建议更多地投入时间和精力来建立和维护友谊。', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: '中等友谊质量', description: '你有中等质量的友谊。你有一些朋友，但可能缺乏深度连接。', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: '高友谊质量', description: '你有高质量的友谊。你与朋友有深度连接，能相互支持和理解。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😔', title: 'Low Friendship Quality', description: 'Your friendship quality is low. Consider investing more time and energy in building and maintaining friendships.', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: 'Moderate Friendship Quality', description: 'You have moderate friendship quality. You have some friends but may lack deep connections.', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: 'High Friendship Quality', description: 'You have high friendship quality. You have deep connections with friends and can support and understand each other.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的友谊质量', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Friendship Quality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
