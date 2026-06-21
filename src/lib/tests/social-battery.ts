// @ts-nocheck
// Social Battery Test (社交电量测试)
/* eslint-disable @typescript-eslint/no-explicit-any */

const SOCIAL_BATTERY_TEST: any = {
    type: 'social-battery', icon: '🔋', color: '#4FC3F7',
    questions: [
        // Social Drain (社交消耗) - SD - 4 questions
        { id: 1, dimension: 'SD', zh: '参加社交活动后，我通常感到精疲力竭。', en: 'After attending social events, I usually feel exhausted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SD', zh: '长时间的社交互动让我感到烦躁和不安。', en: 'Extended social interactions make me feel irritable and uneasy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SD', zh: '在大型聚会中待了几个小时后，我会想要立刻离开。', en: 'After a few hours at a large gathering, I want to leave immediately.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SD', zh: '连续几天的社交安排会让我感到压力很大。', en: 'Multiple days of social plans in a row stress me out significantly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Recharge Needs (充电需求) - RN - 4 questions
        { id: 5, dimension: 'RN', zh: '我需要大量的独处时间来恢复精力。', en: 'I need a lot of alone time to recharge my energy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RN', zh: '对我来说，一个人待着是最好的休息方式。', en: 'Being alone is the best way for me to rest and recover.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'RN', zh: '社交之后，我喜欢通过安静的活动（如阅读、散步）来恢复。', en: 'After socializing, I prefer to recover through quiet activities like reading or walking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'RN', zh: '如果我没有足够的独处时间，我会变得易怒或情绪低落。', en: 'If I don\'t get enough alone time, I become irritable or emotionally down.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Social Capacity (社交容量) - SC - 4 questions
        { id: 9, dimension: 'SC', zh: '我能舒适地与少数几个亲密朋友长时间相处。', en: 'I can comfortably spend long periods with a few close friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 10, dimension: 'SC', zh: '在小团体中，我的社交能量比在大团体中持久得多。', en: 'My social energy lasts much longer in small groups than in large ones.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SC', zh: '和陌生人交谈对我来说特别消耗精力。', en: 'Talking to strangers is particularly draining for me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SC', zh: '我宁愿和一两个好友深度交流，也不愿参加热闹的派对。', en: 'I prefer deep conversations with one or two close friends over attending a lively party.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Energy Management (能量管理) - EM - 4 questions
        { id: 13, dimension: 'EM', zh: '我能有意识地安排社交活动和独处时间的比例。', en: 'I consciously balance the ratio of social activities to alone time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EM', zh: '我能在社交场合中适时给自己"充电"（如去洗手间独处一会儿）。', en: 'I can give myself "micro-recharges" during social events (like stepping away for a moment alone).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EM', zh: '我知道自己的社交极限，会在电量耗尽之前及时退出。', en: 'I know my social limits and exit before my battery completely drains.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EM', zh: '我能够区分哪些社交活动给我充电，哪些消耗我的能量。', en: 'I can distinguish which social activities energize me and which drain me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { SD: { total: 0, count: 0 }, RN: { total: 0, count: 0 }, SC: { total: 0, count: 0 }, EM: { total: 0, count: 0 } };
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
            scores: { SD: dims.SD.total, RN: dims.RN.total, SC: dims.SC.total, EM: dims.EM.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 25], icon: '⚡', title: '社交永动机', description: '你的社交电量几乎不会耗尽！你享受与人相处的过程，社交活动给你带来能量而非消耗。你可能是典型的外向型人格，在人群中感到自在和充实。', color: '#4CAF50' },
            { range: [26, 50], icon: '🔋', title: '均衡社交者', description: '你的社交电量管理得不错。你享受社交但也懂得适时充电。你能在社交和独处之间找到平衡，这是一种非常健康的状态。', color: '#2196F3' },
            { range: [51, 75], icon: '🪫', title: '低电量社交者', description: '你的社交电量消耗较快。社交活动虽然可以享受，但之后需要较长的恢复时间。建议有选择地参加社交活动，优先那些让你真正开心的场合，并给自己充足的充电时间。', color: '#FF9800' },
            { range: [76, 100], icon: '🪫', title: '社交省电模式', description: '你非常需要独处来维持能量。社交对你来说是高度消耗的活动。这并不是缺陷，而是你的能量特质。关键是学会管理社交节奏，选择深度而非广度的社交方式。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '⚡', title: 'Social Dynamo', description: 'Your social battery almost never drains! You enjoy being with people — social activities energize rather than deplete you. You\'re likely a typical extrovert who feels comfortable and fulfilled in crowds.', color: '#4CAF50' },
            { range: [26, 50], icon: '🔋', title: 'Balanced Socializer', description: 'You manage your social battery well. You enjoy socializing but also know when to recharge. You find a healthy balance between social time and alone time — a very sustainable approach.', color: '#2196F3' },
            { range: [51, 75], icon: '🪫', title: 'Low-Battery Socializer', description: 'Your social battery drains relatively quickly. You can enjoy social events, but need longer recovery time afterward. Be selective about social activities — prioritize the ones that truly bring you joy, and give yourself ample recharge time.', color: '#FF9800' },
            { range: [76, 100], icon: '🪫', title: 'Power-Saver Mode', description: 'You strongly need solitude to maintain your energy. Socializing is a highly draining activity for you. This isn\'t a flaw — it\'s your energy signature. The key is managing your social rhythm and choosing depth over breadth in connections.', color: '#F44336' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的社交电量', disclaimer: '本测试仅供参考，帮助你了解自己的社交能量模式。每个人都有不同的社交需求和能量节奏，了解自己的模式有助于更好地安排生活。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Social Battery', disclaimer: 'This test is for reference only, helping you understand your social energy patterns. Everyone has different social needs and energy rhythms — understanding your patterns helps you better arrange your life.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default SOCIAL_BATTERY_TEST;
