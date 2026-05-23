const LOCUS_CONTROL_TEST = {
    type: 'locus-control', icon: '🎯', color: '#795548',
    questions: [
        { id: 1, dimension: 'LC', zh: '我的成功主要靠自己的努力。', en: 'My success mainly depends on my own efforts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LC', zh: '我能控制自己的命运。', en: 'I can control my own destiny.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LC', zh: '我的失败是因为自己不够努力。', en: 'My failures are due to not working hard enough.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LC', zh: '我相信付出就有回报。', en: 'I believe effort leads to rewards.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'LC', zh: '我能影响周围发生的事情。', en: 'I can influence what happens around me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'LC', zh: '我的成功很大程度上取决于运气。', en: 'My success largely depends on luck.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'LC', zh: '我很难改变别人对我的看法。', en: 'I can hardly change others\' opinions of me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'LC', zh: '我的人生由命运决定。', en: 'My life is determined by fate.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 9, dimension: 'LC', zh: '政府和大企业控制着我的生活。', en: 'The government and big corporations control my life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 10, dimension: 'LC', zh: '我的计划经常被意外事件打乱。', en: 'My plans are often disrupted by unexpected events.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 11, dimension: 'LC', zh: '我设定的目标大多能实现。', en: 'Most of the goals I set can be achieved.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'LC', zh: '我通过努力可以学到任何技能。', en: 'I can learn any skill through effort.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LC', zh: '升职主要靠关系而非能力。', en: 'Promotion mainly depends on connections, not ability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 14, dimension: 'LC', zh: '我相信好人有好报。', en: 'I believe good people get good rewards.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 15, dimension: 'LC', zh: '我能通过沟通解决大多数问题。', en: 'I can solve most problems through communication.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LC', zh: '我的健康状况主要由基因决定。', en: 'My health is mainly determined by genetics.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 17, dimension: 'LC', zh: '我能通过行动改变不满意的现状。', en: 'I can change unsatisfactory situations through action.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'LC', zh: '我经常感到无力改变现状。', en: 'I often feel powerless to change the situation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 19, dimension: 'LC', zh: '我相信只要足够努力就能成功。', en: 'I believe success comes with enough effort.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'LC', zh: '我的人生掌握在自己手中。', en: 'My life is in my own hands.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 35], icon: '🌍', title: '外控型', description: '你倾向于认为外部因素决定了你的人生。你可能觉得运气、命运或他人对你的成功影响更大。', color: '#FF9800' },
            { range: [36, 65], icon: '⚖️', title: '平衡型', description: '你在内控和外控之间保持平衡。你既认识到自己的力量，也理解外部因素的影响。', color: '#9C27B0' },
            { range: [66, 100], icon: '💪', title: '内控型', description: '你相信自己能掌控人生。你认为努力和能力是成功的关键，愿意为结果承担责任。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 35], icon: '🌍', title: 'External Locus', description: 'You tend to believe external factors determine your life. You may feel luck, fate, or others have more influence on your success.', color: '#FF9800' },
            { range: [36, 65], icon: '⚖️', title: 'Balanced', description: 'You balance between internal and external control. You recognize both your own power and the influence of external factors.', color: '#9C27B0' },
            { range: [66, 100], icon: '💪', title: 'Internal Locus', description: 'You believe you control your own life. You see effort and ability as keys to success and take responsibility for outcomes.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的控制点类型', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '外控', scoreHigh: '内控' },
        en: { resultTitle: 'Your Locus of Control', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'External', scoreHigh: 'Internal' }
    }
};
