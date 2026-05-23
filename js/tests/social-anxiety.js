const SOCIAL_ANXIETY_TEST = {
    type: 'social-anxiety', icon: '😰', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'SA', zh: '我在社交场合感到紧张。', en: 'I feel nervous in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SA', zh: '我害怕被他人评判。', en: 'I fear being judged by others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SA', zh: '我在聚会前感到焦虑。', en: 'I feel anxious before parties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SA', zh: '我害怕在公众面前讲话。', en: 'I fear speaking in public.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SA', zh: '我在陌生人面前感到不自在。', en: 'I feel uncomfortable around strangers.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SA', zh: '我担心自己会出丑。', en: 'I worry about embarrassing myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SA', zh: '我避免成为关注的焦点。', en: 'I avoid being the center of attention.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SA', zh: '我在社交场合会脸红或出汗。', en: 'I blush or sweat in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SA', zh: '我害怕被拒绝。', en: 'I fear being rejected.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SA', zh: '我在社交场合会感到心跳加速。', en: 'My heart races in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SA', zh: '我害怕与权威人士交流。', en: 'I fear communicating with authority figures.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SA', zh: '我会提前准备社交场合要说的话。', en: 'I prepare what to say in advance for social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SA', zh: '我在社交后会反复回想自己的表现。', en: 'I replay my performance after social events.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SA', zh: '我害怕被嘲笑。', en: 'I fear being laughed at.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SA', zh: '我在社交场合会感到不自在。', en: 'I feel uneasy in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SA', zh: '我尽量避免社交活动。', en: 'I try to avoid social events.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '😊', title: '低社交焦虑', description: '你的社交焦虑很低。你在社交场合感到自在和自信。', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: '轻度社交焦虑', description: '你有轻度社交焦虑。在某些场合会感到紧张，但不影响正常社交。', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: '中度社交焦虑', description: '你有中度社交焦虑。社交场合经常让你感到不安，可能影响日常生活。', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: '重度社交焦虑', description: '你有重度社交焦虑。建议寻求专业帮助来改善社交能力。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '😊', title: 'Low Social Anxiety', description: 'Your social anxiety is low. You feel comfortable and confident in social situations.', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: 'Mild Social Anxiety', description: 'You have mild social anxiety. You feel nervous in some situations but it doesn\'t affect normal socializing.', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: 'Moderate Social Anxiety', description: 'You have moderate social anxiety. Social situations often make you uneasy and may affect daily life.', color: '#FF9800' },
            { range: [76, 100], icon: '😨', title: 'Severe Social Anxiety', description: 'You have severe social anxiety. Consider seeking professional help to improve social skills.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的社交焦虑', disclaimer: '本测试仅供参考。如焦虑严重，请咨询专业人士。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Social Anxiety', disclaimer: 'This test is for reference only. If anxiety is severe, consult a professional.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
