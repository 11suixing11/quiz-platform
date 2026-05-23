var PERFECTIONISM_TEST = {
    type: 'perfectionism', icon: '💎', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'SO', zh: '我对自己有极高的标准。', en: 'I have extremely high standards for myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SO', zh: '我不能容忍自己犯错。', en: 'I cannot tolerate making mistakes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SO', zh: '我经常花很长时间完成一件事。', en: 'I often spend a long time completing something.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SO', zh: '我对自己不够完美感到沮丧。', en: 'I feel frustrated that I am not perfect enough.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SO', zh: '我总是追求最好，不接受次优。', en: 'I always pursue the best and don\'t accept second-best.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'OO', zh: '我对他人也有很高的期望。', en: 'I also have high expectations for others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'OO', zh: '我对别人的错误很难容忍。', en: 'I find it hard to tolerate others\' mistakes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'OO', zh: '我经常对团队成员的工作感到不满。', en: 'I often feel dissatisfied with team members\' work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'OO', zh: '我认为别人应该达到和我一样的标准。', en: 'I think others should meet the same standards as me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'OO', zh: '我对不遵守规则的人感到愤怒。', en: 'I feel angry at people who don\'t follow rules.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SP', zh: '我觉得别人期望我做到完美。', en: 'I feel others expect me to be perfect.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SP', zh: '我害怕让别人失望。', en: 'I fear letting others down.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SP', zh: '如果我失败了，别人会看不起我。', en: 'If I fail, others will look down on me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SP', zh: '我觉得社会对我的期望很高。', en: 'I feel society has high expectations of me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SP', zh: '我感到压力很大因为要满足所有人的期望。', en: 'I feel great pressure to meet everyone\'s expectations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SO', zh: '我会反复检查自己的工作。', en: 'I repeatedly check my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'SO', zh: '我很难把任务交给别人。', en: 'I find it hard to delegate tasks to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'OO', zh: '我对别人的拖延没有耐心。', en: 'I have no patience for others\' procrastination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'SP', zh: '我在社交媒体上展示完美形象。', en: 'I show a perfect image on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'SP', zh: '我觉得如果不完美就不值得被爱。', en: 'I feel I\'m not worthy of love if I\'m not perfect.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { SO: { total: 0, count: 0 }, OO: { total: 0, count: 0 }, SP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'Self-oriented', zh: '自我导向', score: Math.round((dims.SO.total / (dims.SO.count * 5)) * 100) },
            { name: 'Other-oriented', zh: '他人导向', score: Math.round((dims.OO.total / (dims.OO.count * 5)) * 100) },
            { name: 'Socially Prescribed', zh: '社会期许', score: Math.round((dims.SP.total / (dims.SP.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的完美主义倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Perfectionism Profile', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
