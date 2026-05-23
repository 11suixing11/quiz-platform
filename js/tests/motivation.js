const MOTIVATION_TYPE_TEST = {
    type: 'motivation-type', icon: '🔥', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'IM', zh: '我对工作本身充满热情。', en: 'I am passionate about the work itself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'IM', zh: '我享受解决问题的过程。', en: 'I enjoy the process of solving problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'IM', zh: '我追求个人成长和学习。', en: 'I pursue personal growth and learning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'IM', zh: '我有强烈的内在驱动力。', en: 'I have a strong internal drive.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EM', zh: '金钱是激励我的重要因素。', en: 'Money is an important motivator for me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EM', zh: '我追求晋升和更高的职位。', en: 'I pursue promotions and higher positions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EM', zh: '他人的认可激励我。', en: 'Recognition from others motivates me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EM', zh: '我追求社会地位。', en: 'I pursue social status.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AM', zh: '我害怕失败。', en: 'I fear failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AM', zh: '我担心让他人失望。', en: 'I worry about disappointing others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AM', zh: '我为了避免惩罚而努力。', en: 'I work hard to avoid punishment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AM', zh: '我感到有义务完成任务。', en: 'I feel obligated to complete tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IM', zh: '我追求创造性的表达。', en: 'I pursue creative expression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EM', zh: '福利待遇激励我。', en: 'Benefits and compensation motivate me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AM', zh: '我与他人比较来激励自己。', en: 'I compare myself with others to stay motivated.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IM', zh: '我追求自我实现。', en: 'I pursue self-actualization.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { IM: { total: 0, count: 0 }, EM: { total: 0, count: 0 }, AM: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'IM', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'IM': { zh: { title: '内在动机型', name: '内在动机型', description: '你是内在动机型。你被工作本身的乐趣和意义所驱动，追求个人成长和自我实现。这是最可持续的动机类型。' }, en: { title: 'Intrinsic Motivation', name: 'Intrinsic Motivation', description: 'You are intrinsically motivated. You are driven by the joy and meaning of work itself, pursuing personal growth and self-actualization. This is the most sustainable motivation type.' } },
        'EM': { zh: { title: '外在动机型', name: '外在动机型', description: '你是外在动机型。你被金钱、地位、认可等外在奖励所驱动。这些动机能提供短期动力，但可能不够持久。' }, en: { title: 'Extrinsic Motivation', name: 'Extrinsic Motivation', description: 'You are extrinsically motivated. You are driven by external rewards like money, status, and recognition. These provide short-term drive but may not be sustainable.' } },
        'AM': { zh: { title: '回避动机型', name: '回避动机型', description: '你是回避动机型。你被恐惧、义务和比较所驱动。建议寻找更积极的动机来源。' }, en: { title: 'Avoidance Motivation', name: 'Avoidance Motivation', description: 'You are avoidance-motivated. You are driven by fear, obligation, and comparison. Consider finding more positive sources of motivation.' } }
    },
    uiText: {
        zh: { resultTitle: '你的动机类型', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Motivation Type', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
