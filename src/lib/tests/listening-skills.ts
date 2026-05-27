// @ts-nocheck
// Auto-converted from listening-skills.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const LISTENING_SKILLS_TEST: any = {
    type: 'listening-skills', icon: '👂', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'LS', zh: '我全神贯注地听别人说话。', en: 'I listen attentively to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LS', zh: '我能理解对方的真实意图。', en: 'I can understand the speaker\'s true intention.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LS', zh: '我不打断别人说话。', en: 'I don\'t interrupt others when they speak.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LS', zh: '我能记住别人说过的重要信息。', en: 'I can remember important information others have said.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LS', zh: '我能感受到对方的情绪。', en: 'I can sense the speaker\'s emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LS', zh: '我通过提问来确认理解。', en: 'I ask questions to confirm understanding.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'LS', zh: '我能保持眼神接触。', en: 'I can maintain eye contact.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'LS', zh: '我不分心，专注于对话。', en: 'I stay focused on the conversation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'LS', zh: '我能复述对方的观点。', en: 'I can paraphrase the speaker\'s viewpoint.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'LS', zh: '我给予对方充分的表达时间。', en: 'I give the speaker enough time to express themselves.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'LS', zh: '我能识别对方的非语言信号。', en: 'I can identify the speaker\'s non-verbal signals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'LS', zh: '我避免过早下结论。', en: 'I avoid jumping to conclusions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LS', zh: '我能控制自己的反应。', en: 'I can control my reactions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LS', zh: '我能给对方提供有用的反馈。', en: 'I can provide useful feedback to the speaker.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'LS', zh: '我能耐心倾听长篇大论。', en: 'I can patiently listen to long speeches.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LS', zh: '我能从对方的角度思考问题。', en: 'I can think from the speaker\'s perspective.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔇', title: '低倾听能力', description: '你的倾听能力较低。建议练习专注倾听，避免打断他人。', color: '#F44336' },
            { range: [31, 60], icon: '🔉', title: '中等倾听能力', description: '你有中等的倾听能力。你能在一定程度上理解他人，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '🔊', title: '高倾听能力', description: '你有很强的倾听能力。你善于理解他人，能给对方提供有价值的反馈。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🔇', title: 'Low Listening Skills', description: 'Your listening skills are low. Practice focused listening and avoid interrupting others.', color: '#F44336' },
            { range: [31, 60], icon: '🔉', title: 'Moderate Listening Skills', description: 'You have moderate listening skills. You can understand others to some extent, but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '🔊', title: 'High Listening Skills', description: 'You have strong listening skills. You understand others well and provide valuable feedback.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的倾听能力', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Listening Skills', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default LISTENING_SKILLS_TEST;
