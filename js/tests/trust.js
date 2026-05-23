var TRUST_TEST = {
    type: 'trust', icon: '🤝', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'TR', zh: '我通常信任他人。', en: 'I generally trust others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'TR', zh: '我相信大多数人是诚实的。', en: 'I believe most people are honest.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'TR', zh: '我容易向他人敞开心扉。', en: 'I easily open up to others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'TR', zh: '我相信朋友会支持我。', en: 'I believe friends will support me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DT', zh: '我经常怀疑他人的动机。', en: 'I often doubt others\' motives.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DT', zh: '我觉得很难完全信任别人。', en: 'I find it hard to fully trust others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DT', zh: '我担心别人会背叛我。', en: 'I worry others will betray me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'TR', zh: '我相信大多数人是善良的。', en: 'I believe most people are kind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'TR', zh: '我愿意接受他人的帮助。', en: 'I am willing to accept help from others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DT', zh: '我需要很长时间才能信任一个人。', en: 'I need a long time to trust someone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'TR', zh: '我相信团队合作的力量。', en: 'I believe in the power of teamwork.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DT', zh: '我觉得别人经常让我失望。', en: 'I feel others often disappoint me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'TR', zh: '我相信承诺会被兑现。', en: 'I believe promises will be kept.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'TR', zh: '我愿意与他人分享秘密。', en: 'I am willing to share secrets with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DT', zh: '我经常检查别人是否说实话。', en: 'I often check if others are telling the truth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'TR', zh: '我相信大多数人会做正确的事。', en: 'I believe most people will do the right thing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { TR: { total: 0, count: 0 }, DT: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var trAvg = dims.TR.count > 0 ? dims.TR.total / dims.TR.count : 0;
        var dtAvg = dims.DT.count > 0 ? dims.DT.total / dims.DT.count : 0;
        var score = Math.round(((trAvg - dtAvg + 4) / 8) * 100);
        return { score: Math.max(0, Math.min(100, score)) };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔒', title: '低信任水平', description: '你对他人的信任水平较低。你可能需要更多时间来建立信任。', color: '#F44336' },
            { range: [31, 60], icon: '🔑', title: '中等信任水平', description: '你有中等的信任水平。你能在一定程度上信任他人，但也会保持警惕。', color: '#FFC107' },
            { range: [61, 100], icon: '🤝', title: '高信任水平', description: '你有很高的信任水平。你善于建立信任关系，相信他人的善意。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '🔒', title: 'Low Trust Level', description: 'Your trust level is low. You may need more time to build trust.', color: '#F44336' },
            { range: [31, 60], icon: '🔑', title: 'Moderate Trust Level', description: 'You have a moderate trust level. You can trust others to some extent but stay alert.', color: '#FFC107' },
            { range: [61, 100], icon: '🤝', title: 'High Trust Level', description: 'You have a high trust level. You build trust well and believe in others\' good intentions.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的信任水平', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Trust Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
