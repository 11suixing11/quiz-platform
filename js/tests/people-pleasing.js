var PEOPLE_PLEASING_TEST = {
    type: 'people-pleasing', icon: '🙇', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'PP', zh: '我很难拒绝别人的请求。', en: 'I find it hard to refuse others\' requests.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PP', zh: '我经常为了取悦他人而改变自己。', en: 'I often change myself to please others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PP', zh: '我害怕让别人失望。', en: 'I fear disappointing others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PP', zh: '我经常忽略自己的需求来满足他人。', en: 'I often ignore my own needs to satisfy others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PP', zh: '我害怕被别人不喜欢。', en: 'I fear being disliked by others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PP', zh: '我经常道歉即使不是我的错。', en: 'I often apologize even when it\'s not my fault.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PP', zh: '我很难表达不同意见。', en: 'I find it hard to express disagreement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'PP', zh: '我经常说"是"即使我想说"不"。', en: 'I often say "yes" when I want to say "no".', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PP', zh: '我害怕冲突所以选择顺从。', en: 'I choose to comply because I fear conflict.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PP', zh: '我经常感到被他人利用。', en: 'I often feel used by others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PP', zh: '我很难设定个人界限。', en: 'I find it hard to set personal boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PP', zh: '我经常压抑自己的情绪来维持和平。', en: 'I often suppress my emotions to maintain peace.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PP', zh: '我害怕被孤立所以选择迎合。', en: 'I choose to conform because I fear being isolated.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PP', zh: '我经常感到疲惫因为总是照顾他人。', en: 'I often feel exhausted from always caring for others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PP', zh: '我很难接受他人的批评。', en: 'I find it hard to accept criticism.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'PP', zh: '我经常感到内疚即使没有做错什么。', en: 'I often feel guilty even when I haven\'t done anything wrong.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '💪', title: '低讨好倾向', description: '你的讨好倾向很低。你能健康地设定界限，表达自己的需求。', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: '轻度讨好倾向', description: '你有轻度讨好倾向。有时会为了他人牺牲自己，但总体能保持平衡。', color: '#FFC107' },
            { range: [51, 75], icon: '🙇', title: '中度讨好倾向', description: '你有中度讨好倾向。经常为了取悦他人而忽略自己的需求。', color: '#FF9800' },
            { range: [76, 100], icon: '😞', title: '重度讨好倾向', description: '你有重度讨好倾向。强烈建议学习设定界限和表达自己的需求。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '💪', title: 'Low People-Pleasing', description: 'Your people-pleasing tendency is low. You can set healthy boundaries and express your needs.', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: 'Mild People-Pleasing', description: 'You have mild people-pleasing tendency. Sometimes you sacrifice yourself for others but generally maintain balance.', color: '#FFC107' },
            { range: [51, 75], icon: '🙇', title: 'Moderate People-Pleasing', description: 'You have moderate people-pleasing tendency. You often ignore your own needs to please others.', color: '#FF9800' },
            { range: [76, 100], icon: '😞', title: 'Severe People-Pleasing', description: 'You have severe people-pleasing tendency. It\'s strongly recommended to learn setting boundaries and expressing your needs.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的讨好倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your People-Pleasing Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
