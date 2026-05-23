const PSYCHOLOGICAL_CAPITAL_TEST = {
    type: 'psychological-capital', icon: '🏦', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'SE', zh: '我相信自己能分析问题并找到解决方案。', en: 'I believe I can analyze problems and find solutions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SE', zh: '我对自己的工作能力有信心。', en: 'I am confident in my work abilities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SE', zh: '我相信自己能设定并达成目标。', en: 'I believe I can set and achieve goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SE', zh: '我能应对工作中的各种挑战。', en: 'I can handle various challenges at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'HO', zh: '我能想出多种方法达成目标。', en: 'I can think of multiple ways to achieve goals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'HO', zh: '我总能找到解决问题的方法。', en: 'I always find ways to solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'HO', zh: '我对未来充满希望。', en: 'I am hopeful about the future.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'HO', zh: '我相信事情会朝着好的方向发展。', en: 'I believe things will turn out well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'RE', zh: '我能从困境中快速恢复。', en: 'I can recover quickly from difficulties.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'RE', zh: '我能应对工作中的压力。', en: 'I can handle stress at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'RE', zh: '我能从挫折中学习。', en: 'I can learn from setbacks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'RE', zh: '我能适应变化的环境。', en: 'I can adapt to changing environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'OP', zh: '我对工作中的事情持积极态度。', en: 'I have a positive attitude toward work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'OP', zh: '我相信好事会发生在我身上。', en: 'I believe good things will happen to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'OP', zh: '我对未来的工作前景感到乐观。', en: 'I am optimistic about my future work prospects.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'OP', zh: '我相信努力会有回报。', en: 'I believe effort will be rewarded.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { SE: { total: 0, count: 0 }, HO: { total: 0, count: 0 }, RE: { total: 0, count: 0 }, OP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'Self-Efficacy', zh: '自我效能', score: Math.round((dims.SE.total / (dims.SE.count * 5)) * 100) },
            { name: 'Hope', zh: '希望', score: Math.round((dims.HO.total / (dims.HO.count * 5)) * 100) },
            { name: 'Resilience', zh: '韧性', score: Math.round((dims.RE.total / (dims.RE.count * 5)) * 100) },
            { name: 'Optimism', zh: '乐观', score: Math.round((dims.OP.total / (dims.OP.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的心理资本', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Psychological Capital', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
