const SLEEP_QUALITY_TEST = {
    type: 'sleep-quality', icon: '😴', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'SQ', zh: '我能在30分钟内入睡。', en: 'I can fall asleep within 30 minutes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SQ', zh: '我每晚能睡7-8小时。', en: 'I sleep 7-8 hours every night.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SQ', zh: '我很少在夜间醒来。', en: 'I rarely wake up at night.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SQ', zh: '我早上醒来感到精力充沛。', en: 'I wake up feeling refreshed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SQ', zh: '我有规律的睡眠时间。', en: 'I have a regular sleep schedule.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SQ', zh: '我很少做噩梦。', en: 'I rarely have nightmares.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SQ', zh: '我的睡眠环境很舒适。', en: 'My sleep environment is comfortable.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SQ', zh: '我睡前不使用电子设备。', en: 'I don\'t use electronic devices before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SQ', zh: '我白天不感到困倦。', en: 'I don\'t feel sleepy during the day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SQ', zh: '我睡前能放松下来。', en: 'I can relax before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SQ', zh: '我不需要安眠药入睡。', en: 'I don\'t need sleeping pills to fall asleep.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SQ', zh: '我很少失眠。', en: 'I rarely have insomnia.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SQ', zh: '我醒来后能很快再次入睡。', en: 'I can fall back asleep quickly after waking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SQ', zh: '我白天有足够的精力。', en: 'I have enough energy during the day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SQ', zh: '我不打鼾。', en: 'I don\'t snore.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SQ', zh: '我对自己的睡眠质量满意。', en: 'I am satisfied with my sleep quality.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😫', title: '睡眠质量差', description: '你的睡眠质量很差。建议改善睡眠习惯，必要时咨询医生。', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: '睡眠质量一般', description: '你的睡眠质量一般。有一些方面可以改善。', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: '睡眠质量好', description: '你的睡眠质量很好。继续保持良好的睡眠习惯。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😫', title: 'Poor Sleep Quality', description: 'Your sleep quality is poor. Consider improving sleep habits and consult a doctor if needed.', color: '#F44336' },
            { range: [31, 60], icon: '😐', title: 'Average Sleep Quality', description: 'Your sleep quality is average. There are some areas for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: 'Good Sleep Quality', description: 'Your sleep quality is good. Continue maintaining healthy sleep habits.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的睡眠质量', disclaimer: '本测试仅供参考。如有严重睡眠问题，请咨询医生。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '差', scoreHigh: '好' },
        en: { resultTitle: 'Your Sleep Quality', disclaimer: 'This test is for reference only. If you have serious sleep problems, consult a doctor.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Poor', scoreHigh: 'Good' }
    }
};
