var EMOTIONAL_EXHAUSTION_TEST = {
    type: 'emotional-exhaustion', icon: '🔥', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'EE', zh: '我感到情感上被耗尽�?, en: 'I feel emotionally drained.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EE', zh: '我早上起来感到疲惫�?, en: 'I wake up feeling tired.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EE', zh: '我感到筋疲力尽�?, en: 'I feel exhausted.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EE', zh: '我对工作感到厌倦�?, en: 'I feel tired of my work.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EE', zh: '我感到压力很大�?, en: 'I feel a lot of pressure.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EE', zh: '我感到无助�?, en: 'I feel helpless.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EE', zh: '我感到沮丧�?, en: 'I feel frustrated.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EE', zh: '我感到情绪低落�?, en: 'I feel emotionally low.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'EE', zh: '我很难集中注意力�?, en: 'I find it hard to concentrate.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'EE', zh: '我对事情失去兴趣�?, en: 'I lose interest in things.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EE', zh: '我感到孤独�?, en: 'I feel lonely.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EE', zh: '我很难放松�?, en: 'I find it hard to relax.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'EE', zh: '我感到焦虑�?, en: 'I feel anxious.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EE', zh: '我感到脆弱�?, en: 'I feel vulnerable.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'EE', zh: '我感到被掏空�?, en: 'I feel emptied.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'EE', zh: '我感到身心俱疲�?, en: 'I feel physically and mentally exhausted.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '😊', title: '低情绪耗竭', description: '你的情绪能量充足。你能够很好地管理自己的精力�?, color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: '轻度情绪耗竭', description: '你有一些情绪耗竭的迹象。建议关注休息和恢复�?, color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: '中度情绪耗竭', description: '你有中度情绪耗竭。建议减少压力源，增加休息时间�?, color: '#FF9800' },
            { range: [76, 100], icon: '😫', title: '重度情绪耗竭', description: '你的情绪严重耗竭。建议立即采取措施恢复，必要时寻求专业帮助�?, color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '😊', title: 'Low Exhaustion', description: 'Your emotional energy is充足. You manage your energy well.', color: '#4CAF50' },
            { range: [26, 50], icon: '😐', title: 'Mild Exhaustion', description: 'You show signs of emotional exhaustion. Focus on rest and recovery.', color: '#FFC107' },
            { range: [51, 75], icon: '😟', title: 'Moderate Exhaustion', description: 'You have moderate emotional exhaustion. Reduce stressors and increase rest.', color: '#FF9800' },
            { range: [76, 100], icon: '😫', title: 'Severe Exhaustion', description: 'You are severely emotionally exhausted. Take immediate steps to recover and seek professional help if needed.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的情绪耗竭程度', disclaimer: '本测试仅供参考。如感到严重耗竭，请咨询专业人士�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...', scoreLow: '�?, scoreHigh: '�? },
        en: { resultTitle: 'Your Emotional Exhaustion Level', disclaimer: 'This test is for reference only. If you feel severely exhausted, consult a professional.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
