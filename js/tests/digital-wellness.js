var DIGITAL_WELLNESS_TEST = {
    type: 'digital-wellness', icon: '📱', color: '#2196F3',
    questions: [
        { id: 1, dimension: 'DW', zh: '我能控制使用手机的时间。', en: 'I can control my phone usage time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DW', zh: '我不会在睡前使用手机。', en: 'I don\'t use my phone before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'DW', zh: '我不会在吃饭时使用手机。', en: 'I don\'t use my phone while eating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'DW', zh: '我不会在与人交谈时使用手机。', en: 'I don\'t use my phone when talking to people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DW', zh: '我能专注于当前任务而不看手机。', en: 'I can focus on current tasks without checking my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DW', zh: '我不会因为手机而失眠。', en: 'I don\'t lose sleep because of my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DW', zh: '我有固定的手机使用时间。', en: 'I have fixed phone usage times.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DW', zh: '我不会因为手机而忽略现实生活中的人。', en: 'I don\'t neglect real-life people because of my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'DW', zh: '我不会因为手机而感到焦虑。', en: 'I don\'t feel anxious because of my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DW', zh: '我不会因为手机而影响工作效率。', en: 'I don\'t let my phone affect my work efficiency.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DW', zh: '我有其他的休闲方式。', en: 'I have other leisure activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DW', zh: '我能定期进行数字排毒。', en: 'I can do digital detox regularly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DW', zh: '我不会因为手机而感到压力。', en: 'I don\'t feel stressed because of my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DW', zh: '我能在没有手机时感到舒适。', en: 'I can feel comfortable without my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DW', zh: '我不会因为手机而影响视力。', en: 'I don\'t let my phone affect my eyesight.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DW', zh: '我能在手机和生活之间保持平衡。', en: 'I can maintain balance between phone and life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📵', title: '低数字健康', description: '你的数字健康水平较低。建议减少手机使用时间，培养其他兴趣爱好。', color: '#F44336' },
            { range: [31, 60], icon: '📱', title: '中等数字健康', description: '你有中等的数字健康水平。你能在某些方面控制手机使用，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '✅', title: '高数字健康', description: '你有很高的数字健康水平。你能很好地控制手机使用，保持生活平衡。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '📵', title: 'Low Digital Wellness', description: 'Your digital wellness is low. Consider reducing phone usage and developing other interests.', color: '#F44336' },
            { range: [31, 60], icon: '📱', title: 'Moderate Digital Wellness', description: 'You have moderate digital wellness. You can control phone usage in some areas but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '✅', title: 'High Digital Wellness', description: 'You have high digital wellness. You can control phone usage well and maintain life balance.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的数字健康', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Digital Wellness', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
