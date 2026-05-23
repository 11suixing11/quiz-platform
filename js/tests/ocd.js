const OCD_TEST = {
    type: 'ocd', icon: '🔄', color: '#009688',
    questions: [
        { id: 1, dimension: 'OC', zh: '我经常反复检查事情。', en: 'I often check things repeatedly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'OC', zh: '我有必须遵循的固定仪式或习惯。', en: 'I have fixed rituals or habits I must follow.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'OC', zh: '我对清洁和整齐有很高的要求。', en: 'I have high demands for cleanliness and order.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'OC', zh: '我脑中会反复出现不想要的想法。', en: 'Unwanted thoughts repeatedly appear in my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'OC', zh: '我很难控制自己的担忧。', en: 'I find it hard to control my worries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'OC', zh: '我会反复确认门是否锁好。', en: 'I repeatedly check if the door is locked.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'OC', zh: '我会反复洗手。', en: 'I wash my hands repeatedly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'OC', zh: '我对称和对齐有强烈需求。', en: 'I have a strong need for symmetry and alignment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'OC', zh: '我害怕伤害自己或他人。', en: 'I fear harming myself or others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'OC', zh: '我需要事情按特定方式完成。', en: 'I need things done in a specific way.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'OC', zh: '我花很长时间做决定。', en: 'I spend a long time making decisions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'OC', zh: '我害怕犯错。', en: 'I fear making mistakes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'OC', zh: '我会收集或囤积不需要的东西。', en: 'I collect or hoard things I don\'t need.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'OC', zh: '我很难放手或丢弃东西。', en: 'I find it hard to let go or discard things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'OC', zh: '我会反复回想过去的事件。', en: 'I repeatedly replay past events in my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'OC', zh: '我害怕污染或感染。', en: 'I fear contamination or infection.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '✅', title: '低强迫倾向', description: '你的强迫倾向很低。你没有明显的强迫思维或行为。', color: '#4CAF50' },
            { range: [26, 50], icon: '⚠️', title: '轻度强迫倾向', description: '你有一些强迫倾向，但不影响正常生活。', color: '#FFC107' },
            { range: [51, 75], icon: '🔔', title: '中度强迫倾向', description: '你有中度强迫倾向。建议关注并学习应对策略。', color: '#FF9800' },
            { range: [76, 100], icon: '🚨', title: '重度强迫倾向', description: '你有重度强迫倾向。建议寻求专业心理帮助。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '✅', title: 'Low OCD Tendencies', description: 'Your OCD tendencies are very low. You don\'t have significant obsessive thoughts or compulsive behaviors.', color: '#4CAF50' },
            { range: [26, 50], icon: '⚠️', title: 'Mild OCD Tendencies', description: 'You have some OCD tendencies, but they don\'t affect normal life.', color: '#FFC107' },
            { range: [51, 75], icon: '🔔', title: 'Moderate OCD Tendencies', description: 'You have moderate OCD tendencies. Consider monitoring and learning coping strategies.', color: '#FF9800' },
            { range: [76, 100], icon: '🚨', title: 'Severe OCD Tendencies', description: 'You have severe OCD tendencies. Consider seeking professional psychological help.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的强迫倾向', disclaimer: '本测试仅供参考，不构成专业诊断。如症状严重，请咨询心理医生。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your OCD Tendencies', disclaimer: 'This test is for reference only and does not constitute a professional diagnosis.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
