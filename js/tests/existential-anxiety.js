var EXISTENTIAL_ANXIETY_TEST = {
    type: 'existential-anxiety', icon: '🌌', color: '#673AB7',
    questions: [
        { id: 1, dimension: 'EA', zh: '我经常思考人生的意义。', en: 'I often think about the meaning of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EA', zh: '我对自己的存在感到困惑。', en: 'I feel confused about my existence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EA', zh: '我担心自己的人生没有意义。', en: 'I worry my life has no meaning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EA', zh: '我对未来感到迷茫。', en: 'I feel lost about the future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EA', zh: '我感到孤独和无助。', en: 'I feel lonely and helpless.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EA', zh: '我对自己的选择感到不确定。', en: 'I feel uncertain about my choices.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EA', zh: '我担心自己会后悔。', en: 'I worry I will have regrets.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EA', zh: '我对人生的无常感到不安。', en: 'I feel uneasy about life\'s impermanence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EA', zh: '我感到自由带来的焦虑。', en: 'I feel anxiety from freedom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EA', zh: '我对自己的身份感到困惑。', en: 'I feel confused about my identity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EA', zh: '我担心自己会孤独终老。', en: 'I worry I will end up alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EA', zh: '我感到生活缺乏方向。', en: 'I feel life lacks direction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EA', zh: '我对自己的价值观感到不确定。', en: 'I feel uncertain about my values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EA', zh: '我担心时间过得太快。', en: 'I worry time passes too quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EA', zh: '我感到人生充满不确定性。', en: 'I feel life is full of uncertainty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EA', zh: '我对自己的存在感到焦虑。', en: 'I feel anxious about my existence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '☀️', title: '低存在焦虑', description: '你对存在的焦虑很低。你对人生有清晰的理解和方向感。', color: '#4CAF50' },
            { range: [26, 50], icon: '🌤️', title: '轻度存在焦虑', description: '你有一些存在焦虑。偶尔会思考人生意义，但不影响生活。', color: '#FFC107' },
            { range: [51, 75], icon: '🌥️', title: '中度存在焦虑', description: '你有中度存在焦虑。经常思考人生意义，有时感到迷茫。', color: '#FF9800' },
            { range: [76, 100], icon: '🌧️', title: '重度存在焦虑', description: '你有严重存在焦虑。对人生意义感到深度困惑和焦虑。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '☀️', title: 'Low Existential Anxiety', description: 'Your existential anxiety is low. You have a clear understanding and sense of direction in life.', color: '#4CAF50' },
            { range: [26, 50], icon: '🌤️', title: 'Mild Existential Anxiety', description: 'You have some existential anxiety. You occasionally think about life\'s meaning but it doesn\'t affect your life.', color: '#FFC107' },
            { range: [51, 75], icon: '🌥️', title: 'Moderate Existential Anxiety', description: 'You have moderate existential anxiety. You often think about life\'s meaning and sometimes feel lost.', color: '#FF9800' },
            { range: [76, 100], icon: '🌧️', title: 'Severe Existential Anxiety', description: 'You have severe existential anxiety. You feel deep confusion and anxiety about life\'s meaning.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的存在焦虑', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Existential Anxiety', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
