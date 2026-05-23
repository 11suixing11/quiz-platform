var DEPENDENCY_TEST = {
    type: 'dependency', icon: '🔗', color: '#795548',
    questions: [
        { id: 1, dimension: 'DP', zh: '我很难独自做决定。', en: 'I find it hard to make decisions alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DP', zh: '我经常寻求他人的认可。', en: 'I often seek others\' approval.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'DP', zh: '我害怕独处。', en: 'I fear being alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'DP', zh: '我很难独立完成任务。', en: 'I find it hard to complete tasks independently.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DP', zh: '我经常感到无助。', en: 'I often feel helpless.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DP', zh: '我害怕被抛弃。', en: 'I fear being abandoned.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DP', zh: '我经常依赖他人的情感支持。', en: 'I often rely on others for emotional support.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DP', zh: '我很难表达不同意见。', en: 'I find it hard to express disagreement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'DP', zh: '我经常感到焦虑当他人不回应我。', en: 'I often feel anxious when others don\'t respond to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DP', zh: '我很难开始新的关系。', en: 'I find it hard to start new relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DP', zh: '我经常感到不安全。', en: 'I often feel insecure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DP', zh: '我很难独自面对困难。', en: 'I find it hard to face difficulties alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DP', zh: '我经常感到需要被照顾。', en: 'I often feel the need to be taken care of.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DP', zh: '我很难独自享受生活。', en: 'I find it hard to enjoy life alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DP', zh: '我经常感到需要他人的指导。', en: 'I often feel the need for others\' guidance.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DP', zh: '我很难独自做出重要决定。', en: 'I find it hard to make important decisions alone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🦅', title: '低依赖性', description: '你的依赖性很低。你能够独立做决定，享受独处时光。', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: '轻度依赖性', description: '你有轻度依赖性。你能在某些方面独立，但也需要他人的支持。', color: '#FFC107' },
            { range: [51, 75], icon: '🔗', title: '中度依赖性', description: '你有中度依赖性。你经常需要他人的认可和支持来做决定。', color: '#FF9800' },
            { range: [76, 100], icon: '🪢', title: '高度依赖性', description: '你有高度依赖性。建议学习独立思考和自我肯定。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🦅', title: 'Low Dependency', description: 'Your dependency is low. You can make decisions independently and enjoy alone time.', color: '#4CAF50' },
            { range: [26, 50], icon: '🤝', title: 'Mild Dependency', description: 'You have mild dependency. You can be independent in some areas but also need others\' support.', color: '#FFC107' },
            { range: [51, 75], icon: '🔗', title: 'Moderate Dependency', description: 'You have moderate dependency. You often need others\' approval and support to make decisions.', color: '#FF9800' },
            { range: [76, 100], icon: '🪢', title: 'High Dependency', description: 'You have high dependency. Consider learning independent thinking and self-affirmation.', color: '#F44336' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的依赖性', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Dependency Level', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
