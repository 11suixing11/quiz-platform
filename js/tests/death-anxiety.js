var DEATH_ANXIETY_TEST = {
    type: 'death-anxiety', icon: '💀', color: '#424242',
    questions: [
        { id: 1, dimension: 'DA', zh: '我害怕死亡。', en: 'I fear death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DA', zh: '想到死亡让我感到焦虑。', en: 'Thinking about death makes me anxious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'DA', zh: '我担心死后会发生什么。', en: 'I worry about what happens after death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'DA', zh: '我害怕失去亲人。', en: 'I fear losing loved ones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DA', zh: '我害怕疼痛和痛苦。', en: 'I fear pain and suffering.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DA', zh: '我担心自己会早逝。', en: 'I worry I will die young.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DA', zh: '我害怕被遗忘。', en: 'I fear being forgotten.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DA', zh: '我担心死亡的过程。', en: 'I worry about the process of dying.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'DA', zh: '我害怕面对死亡的不确定性。', en: 'I fear the uncertainty of death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DA', zh: '我担心死后会孤独。', en: 'I worry about being alone after death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DA', zh: '我害怕死亡会打断我的计划。', en: 'I fear death will interrupt my plans.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DA', zh: '我担心死后无法照顾家人。', en: 'I worry I can\'t take care of my family after death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DA', zh: '我害怕面对死亡的现实。', en: 'I fear facing the reality of death.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DA', zh: '我担心死亡会带来痛苦。', en: 'I worry death will bring suffering.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DA', zh: '我害怕死亡会让我失去一切。', en: 'I fear death will make me lose everything.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DA', zh: '我担心死亡会让我无法完成心愿。', en: 'I worry death will prevent me from fulfilling my wishes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🕊️', title: '低死亡焦虑', description: '你对死亡的焦虑很低。你能够坦然面对生命的有限性。', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: '轻度死亡焦虑', description: '你有一些死亡焦虑，但不影响正常生活。', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: '中度死亡焦虑', description: '你有中度死亡焦虑。死亡的想法有时会让你感到不安。', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: '重度死亡焦虑', description: '你有严重死亡焦虑。建议寻求专业帮助来处理这些感受。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🕊️', title: 'Low Death Anxiety', description: 'Your death anxiety is low. You can face the finiteness of life calmly.', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: 'Mild Death Anxiety', description: 'You have some death anxiety, but it doesn\'t affect normal life.', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: 'Moderate Death Anxiety', description: 'You have moderate death anxiety. Thoughts of death sometimes make you uneasy.', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: 'Severe Death Anxiety', description: 'You have severe death anxiety. Consider seeking professional help to process these feelings.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的死亡焦虑', disclaimer: '本测试仅供参考。如焦虑严重，请咨询专业人士。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Death Anxiety', disclaimer: 'This test is for reference only. If anxiety is severe, consult a professional.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
