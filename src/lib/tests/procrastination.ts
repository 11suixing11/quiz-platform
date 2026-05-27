// @ts-nocheck
// Auto-converted from procrastination.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const PROCRASTINATION_TEST: any = {
    type: 'procrastination', icon: '⏳', color: '#9E9E9E',
    questions: [
        { id: 1, dimension: 'PR', zh: '我经常推迟开始任务。', en: 'I often postpone starting tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PR', zh: '我在截止日期前才开始工作。', en: 'I start working just before deadlines.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PR', zh: '我很难开始困难的任务。', en: 'I find it hard to start difficult tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PR', zh: '我经常找借口推迟工作。', en: 'I often make excuses to postpone work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'PR', zh: '我容易被其他事情分心。', en: 'I easily get distracted by other things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PR', zh: '我对自己拖延感到内疚。', en: 'I feel guilty about procrastinating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PR', zh: '我经常在最后一刻才完成任务。', en: 'I often complete tasks at the last moment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'PR', zh: '我很难坚持完成长期任务。', en: 'I find it hard to stick with long-term tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'PR', zh: '我经常感到时间不够用。', en: 'I often feel there isn\'t enough time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'PR', zh: '我经常因为拖延而感到压力。', en: 'I often feel stressed because of procrastination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'PR', zh: '我很难开始新的项目。', en: 'I find it hard to start new projects.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PR', zh: '我经常选择做简单的事而非重要的事。', en: 'I often choose easy tasks over important ones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PR', zh: '我很难克服惰性。', en: 'I find it hard to overcome inertia.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PR', zh: '我经常浪费时间在无关紧要的事情上。', en: 'I often waste time on unimportant things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PR', zh: '我很难在没有外部压力时工作。', en: 'I find it hard to work without external pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'PR', zh: '我经常对自己的拖延感到沮丧。', en: 'I often feel frustrated about my procrastination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🚀', title: '低拖延倾向', description: '你的拖延倾向很低。你善于管理时间，能按时完成任务。', color: '#4CAF50' },
            { range: [26, 50], icon: '⏳', title: '轻度拖延倾向', description: '你有轻度拖延倾向。有时会推迟任务，但总体上能按时完成。', color: '#FFC107' },
            { range: [51, 75], icon: '⏰', title: '中度拖延倾向', description: '你有中度拖延倾向。经常推迟任务，可能影响工作和学习效率。', color: '#FF9800' },
            { range: [76, 100], icon: '😱', title: '重度拖延倾向', description: '你有重度拖延倾向。建议学习时间管理技巧，寻求专业帮助。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🚀', title: 'Low Procrastination', description: 'Your procrastination tendency is low. You manage time well and complete tasks on time.', color: '#4CAF50' },
            { range: [26, 50], icon: '⏳', title: 'Mild Procrastination', description: 'You have mild procrastination tendency. You sometimes postpone tasks but generally complete them on time.', color: '#FFC107' },
            { range: [51, 75], icon: '⏰', title: 'Moderate Procrastination', description: 'You have moderate procrastination tendency. You often postpone tasks, which may affect work and study efficiency.', color: '#FF9800' },
            { range: [76, 100], icon: '😱', title: 'Severe Procrastination', description: 'You have severe procrastination tendency. Consider learning time management techniques and seeking professional help.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的拖延倾向', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Procrastination Tendency', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default PROCRASTINATION_TEST;
