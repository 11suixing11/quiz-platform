const WORK_LIFE_BALANCE_TEST = {
    type: 'work-life-balance', icon: '⚖️', color: '#795548',
    questions: [
        { id: 1, dimension: 'WB', zh: '我能平衡工作和生活。', en: 'I can balance work and life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'WB', zh: '我下班后能完全放松。', en: 'I can fully relax after work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'WB', zh: '我有足够的时间陪伴家人。', en: 'I have enough time to spend with family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'WB', zh: '我能坚持自己的兴趣爱好。', en: 'I can maintain my hobbies and interests.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'WS', zh: '工作压力影响我的生活质量。', en: 'Work stress affects my quality of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'WS', zh: '我经常加班到很晚。', en: 'I often work overtime until late.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'WS', zh: '我很难在工作时间断开联系。', en: 'I find it hard to disconnect during off-hours.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'WS', zh: '工作让我感到疲惫不堪。', en: 'Work makes me feel exhausted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SB', zh: '我能设定清晰的工作边界。', en: 'I can set clear work boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SB', zh: '我会拒绝不合理的工作要求。', en: 'I reject unreasonable work demands.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SB', zh: '我不会把工作带回家。', en: 'I don\'t bring work home.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SB', zh: '我能在工作中保护自己的时间。', en: 'I can protect my time at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SR', zh: '我能从工作压力中恢复。', en: 'I can recover from work stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SR', zh: '我有有效的减压方式。', en: 'I have effective ways to relieve stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SR', zh: '我能保持良好的睡眠质量。', en: 'I can maintain good sleep quality.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SR', zh: '我在假期能真正休息。', en: 'I can truly rest during holidays.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { WB: { total: 0, count: 0 }, WS: { total: 0, count: 0 }, SB: { total: 0, count: 0 }, SR: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'WB', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'WB': { zh: { title: '平衡型', name: '平衡型', description: '你是平衡型。你能够很好地平衡工作和生活，享受两者带来的满足感。' }, en: { title: 'Balanced', name: 'Balanced', description: 'You are balanced. You can balance work and life well, enjoying satisfaction from both.' } },
        'WS': { zh: { title: '工作压力型', name: '工作压力型', description: '你是工作压力型。工作压力较大，影响了生活质量。建议学习压力管理技巧。' }, en: { title: 'Work-Stressed', name: 'Work-Stressed', description: 'You are work-stressed. Work pressure is high and affects quality of life. Consider learning stress management techniques.' } },
        'SB': { zh: { title: '边界清晰型', name: '边界清晰型', description: '你是边界清晰型。你善于设定工作边界，保护个人时间和空间。' }, en: { title: 'Boundary-Setter', name: 'Boundary-Setter', description: 'You are a boundary-setter. You are good at setting work boundaries and protecting personal time and space.' } },
        'SR': { zh: { title: '恢复力强型', name: '恢复力强型', description: '你是恢复力强型。你能有效从工作压力中恢复，保持身心健康。' }, en: { title: 'Resilient', name: 'Resilient', description: 'You are resilient. You can effectively recover from work stress and maintain physical and mental health.' } }
    },
    uiText: {
        zh: { resultTitle: '你的工作生活平衡', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Work-Life Balance', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
