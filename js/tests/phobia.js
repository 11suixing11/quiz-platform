var PHOBIA_TEST = {
    type: 'phobia', icon: '👻', color: '#795548',
    questions: [
        { id: 1, dimension: 'PH', zh: '我害怕在公众场合说话。', en: 'I fear speaking in public.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PH', zh: '我对高处感到恐惧。', en: 'I fear heights.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PH', zh: '我害怕密闭空间。', en: 'I fear enclosed spaces.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PH', zh: '我对社交场合感到恐惧。', en: 'I fear social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PH', zh: '我害怕失败。', en: 'I fear failure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PH', zh: '我害怕被拒绝。', en: 'I fear rejection.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PH', zh: '我害怕孤独。', en: 'I fear being alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'PH', zh: '我害怕未知的事物。', en: 'I fear the unknown.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PH', zh: '我害怕死亡。', en: 'I fear death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PH', zh: '我害怕失去控制。', en: 'I fear losing control.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PH', zh: '我害怕被评判。', en: 'I fear being judged.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PH', zh: '我害怕改变。', en: 'I fear change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PH', zh: '我害怕亲密关系。', en: 'I fear intimacy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PH', zh: '我害怕冲突。', en: 'I fear conflict.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PH', zh: '我害怕承担责任。', en: 'I fear taking responsibility.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'PH', zh: '我害怕面对真相。', en: 'I fear facing the truth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'PH', zh: '我害怕做出错误决定。', en: 'I fear making wrong decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'PH', zh: '我害怕被抛弃。', en: 'I fear being abandoned.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'PH', zh: '我害怕不被接受。', en: 'I fear not being accepted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'PH', zh: '我害怕面对未来。', en: 'I fear facing the future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '😊', title: '低恐惧水平', description: '你的恐惧水平较低。你能够坦然面对大多数情况，很少被恐惧所困扰。', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: '中等恐惧水平', description: '你有一些恐惧，但能基本控制。某些情况可能会让你感到不安。', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: '较高恐惧水平', description: '你的恐惧水平较高。多种情况可能让你感到恐惧，建议学习应对策略。', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: '高恐惧水平', description: '你的恐惧水平很高。恐惧可能严重影响你的生活，建议寻求专业帮助。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '😊', title: 'Low Fear Level', description: 'Your fear level is low. You can face most situations calmly and are rarely troubled by fear.', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: 'Moderate Fear Level', description: 'You have some fears but can mostly control them. Certain situations may make you uncomfortable.', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: 'High Fear Level', description: 'Your fear level is high. Many situations may frighten you. Consider learning coping strategies.', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: 'Very High Fear Level', description: 'Your fear level is very high. Fear may seriously affect your life. Consider seeking professional help.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的恐惧指数', disclaimer: '本测试仅供参考。如恐惧严重影响生活，请咨询专业人士。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Fear Index', disclaimer: 'This test is for reference only. If fear seriously affects your life, consult a professional.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
