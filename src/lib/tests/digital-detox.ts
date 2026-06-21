// @ts-nocheck
// Auto-converted from digital-detox.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const DIGITAL_DETOX_TEST: any = {
    type: 'digital-detox', icon: '📵', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'SD', zh: '我醒来后第一件事就是看手机。', en: 'The first thing I do after waking up is check my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 2, dimension: 'SD', zh: '我很难连续一小时不看手机。', en: 'I find it hard to go an hour without checking my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 3, dimension: 'SD', zh: '我经常在无意识中拿起手机刷屏。', en: 'I often pick up my phone and scroll mindlessly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 4, dimension: 'SD', zh: '我在工作或学习时经常被手机分散注意力。', en: 'I am often distracted by my phone while working or studying.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 5, dimension: 'NA', zh: '如果手机没电了，我会感到焦虑不安。', en: 'I feel anxious when my phone runs out of battery.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 6, dimension: 'NA', zh: '我会因为没有及时回复消息而感到内疚。', en: 'I feel guilty for not replying to messages promptly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'NA', zh: '我总觉得有未读消息或通知需要查看。', en: 'I always feel like there are unread messages or notifications to check.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'NA', zh: '听到通知提示音时，我会立刻想查看。', en: 'I immediately want to check when I hear a notification sound.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 9, dimension: 'OE', zh: '我经常参加不需要电子设备的户外活动。', en: 'I regularly participate in outdoor activities that don\'t require electronic devices.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'OE', zh: '我能享受没有网络的休闲时光。', en: 'I can enjoy leisure time without the internet.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'OE', zh: '我喜欢阅读纸质书籍或进行手工活动。', en: 'I enjoy reading physical books or doing handcraft activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'OE', zh: '面对面交流比线上聊天让我更愉悦。', en: 'Face-to-face communication is more enjoyable for me than online chatting.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DB', zh: '我有明确的手机使用时间规划。', en: 'I have a clear schedule for phone usage.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DB', zh: '我能主动关闭不必要的通知。', en: 'I can proactively turn off unnecessary notifications.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DB', zh: '我会定期进行数字排毒，完全远离电子设备。', en: 'I regularly do digital detox by staying completely away from electronic devices.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DB', zh: '我能在睡前一小时不使用电子屏幕。', en: 'I can avoid electronic screens for an hour before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { SD: { total: 0, count: 0 }, NA: { total: 0, count: 0 }, OE: { total: 0, count: 0 }, DB: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var percentages = {};
        var overallTotal = 0, overallCount = 0;
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
            overallTotal += dims[d].total;
            overallCount += dims[d].count;
        }
        return {
            score: overallCount > 0 ? Math.round((overallTotal / (overallCount * 5)) * 100) : 0,
            scores: { SD: dims.SD.total, NA: dims.NA.total, OE: dims.OE.total, DB: dims.DB.total },
            percentages: percentages
        };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '📵', title: '深度数字依赖', description: '你对数字设备有很强的依赖。手机和电子设备占据了你大量的时间和注意力。建议从每天设置一段无手机时间开始，逐步建立健康的数字习惯。', color: '#F44336' },
            { range: [31, 60], icon: '📱', title: '轻度数字依赖', description: '你已经意识到数字设备对生活的影响，并在某些方面做出了调整。你可以尝试更多线下活动，减少被动刷屏时间，培养有意识的数字使用习惯。', color: '#FFC107' },
            { range: [61, 80], icon: '🌿', title: '健康数字习惯', description: '你拥有较为健康的数字习惯。你能在数字生活和现实生活之间保持不错的平衡。继续保持这种有意识的使用方式。', color: '#4CAF50' },
            { range: [81, 100], icon: '🧘', title: '数字自由达人', description: '你已经实现了数字自由！你完全掌控了与科技的关系，能够自由选择何时使用电子设备，何时享受线下生活。你是一个真正的数字极简主义者。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '📵', title: 'Deep Digital Dependency', description: 'You have strong dependence on digital devices. Phones and electronics consume much of your time and attention. Start by setting phone-free periods each day to build healthy digital habits.', color: '#F44336' },
            { range: [31, 60], icon: '📱', title: 'Mild Digital Dependency', description: 'You\'re aware of digital devices\' impact on your life and have made some adjustments. Try more offline activities, reduce mindless scrolling, and cultivate intentional digital usage.', color: '#FFC107' },
            { range: [61, 80], icon: '🌿', title: 'Healthy Digital Habits', description: 'You maintain fairly healthy digital habits. You balance digital life and real life well. Keep up this intentional approach to technology use.', color: '#4CAF50' },
            { range: [81, 100], icon: '🧘', title: 'Digital Freedom Master', description: 'You\'ve achieved digital freedom! You fully control your relationship with technology, freely choosing when to use devices and when to enjoy offline life. You\'re a true digital minimalist.', color: '#2E7D32' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的数字排毒能力', disclaimer: '本测试仅供参考，帮助你了解自己的数字设备使用习惯。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Digital Detox Level', disclaimer: 'This test is for reference only, helping you understand your digital device usage habits.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default DIGITAL_DETOX_TEST;
