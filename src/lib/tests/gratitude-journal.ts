// @ts-nocheck
// Auto-converted from gratitude-journal.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const GRATITUDE_JOURNAL_TEST: any = {
    type: 'gratitude-journal', icon: '📝', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'DG', zh: '我每天都会花时间思考值得感恩的事。', en: 'I spend time each day thinking about things I\'m grateful for.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DG', zh: '我有写感恩日记或记录感恩事项的习惯。', en: 'I have a habit of writing a gratitude journal or recording things I\'m grateful for.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'DG', zh: '入睡前，我会回顾今天发生的好事。', en: 'Before falling asleep, I review the good things that happened today.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AD', zh: '我能从小事中感受到快乐和满足。', en: 'I can feel joy and satisfaction from small things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AD', zh: '我经常注意到生活中被忽视的美好瞬间。', en: 'I often notice beautiful moments in life that others overlook.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AD', zh: '我对自然、艺术或日常生活中的美有深刻感受。', en: 'I have a deep appreciation for beauty in nature, art, or daily life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'GE', zh: '我会直接向身边的人表达感谢。', en: 'I directly express gratitude to people around me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'GE', zh: '我会写感谢信或发消息表达对他人的感激。', en: 'I write thank-you notes or send messages to express appreciation to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'GE', zh: '当别人帮助我时，我会真诚地说谢谢。', en: 'When others help me, I sincerely say thank you.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'GR', zh: '即使在困难时期，我也能找到值得感恩的事情。', en: 'Even during difficult times, I can find things to be grateful for.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'GR', zh: '挫折和失败让我更加珍惜成功的时刻。', en: 'Setbacks and failures make me cherish moments of success even more.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'GR', zh: '感恩的心态帮助我度过了人生中的低谷。', en: 'A grateful mindset has helped me get through low points in life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { DG: { total: 0, count: 0 }, AD: { total: 0, count: 0 }, GE: { total: 0, count: 0 }, GR: { total: 0, count: 0 } };
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
            scores: { DG: dims.DG.total, AD: dims.AD.total, GE: dims.GE.total, GR: dims.GR.total },
            percentages: percentages
        };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😔', title: '感恩初学者', description: '你的感恩意识还在萌芽阶段。生活中可能有很多值得珍惜的事物被你忽略了。建议从每天记录三件小事开始，培养感恩的习惯。', color: '#F44336' },
            { range: [31, 60], icon: '🌱', title: '感恩成长者', description: '你已经开始注意到生活中的美好，并在学习表达感恩。继续保持这种觉察力，感恩的习惯会逐渐加深。', color: '#FFC107' },
            { range: [61, 80], icon: '🌻', title: '感恩践行者', description: '你拥有良好的感恩习惯，能够经常感受到生活的美好。你的感恩之心不仅提升了幸福感，也温暖了身边的人。', color: '#4CAF50' },
            { range: [81, 100], icon: '✨', title: '感恩大师', description: '你已经将感恩融入了生命的每一个角落。无论顺境逆境，你都能找到值得感恩的光芒。你的感恩之心是照亮人生的灯塔。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '😔', title: 'Gratitude Beginner', description: 'Your gratitude awareness is still budding. There may be many things worth cherishing that you\'ve overlooked. Start by recording three small things each day to cultivate gratitude.', color: '#F44336' },
            { range: [31, 60], icon: '🌱', title: 'Gratitude Grower', description: 'You\'ve started noticing life\'s beauty and learning to express gratitude. Keep nurturing this awareness and the habit will deepen naturally.', color: '#FFC107' },
            { range: [61, 80], icon: '🌻', title: 'Gratitude Practitioner', description: 'You have good gratitude habits and can frequently feel life\'s beauty. Your grateful heart not only boosts your happiness but warms those around you.', color: '#4CAF50' },
            { range: [81, 100], icon: '✨', title: 'Gratitude Master', description: 'You\'ve woven gratitude into every corner of your life. Whether in good times or bad, you find light worth appreciating. Your grateful heart is a beacon guiding your life.', color: '#2E7D32' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的感恩指数', disclaimer: '本测试仅供参考，帮助你了解自己的感恩习惯和态度。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Gratitude Index', disclaimer: 'This test is for reference only, helping you understand your gratitude habits and attitudes.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default GRATITUDE_JOURNAL_TEST;
