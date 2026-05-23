const FAMILY_RELATIONS_TEST = {
    type: 'family-relations', icon: '👨‍👩‍👧‍👦', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'FR', zh: '我与家人有良好的沟通。', en: 'I have good communication with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'FR', zh: '我感到被家人理解和支持。', en: 'I feel understood and supported by my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'FR', zh: '我与家人共度美好时光。', en: 'I spend quality time with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'FR', zh: '我能向家人表达真实感受。', en: 'I can express true feelings to my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'FR', zh: '我尊重家人的个人空间。', en: 'I respect my family\'s personal space.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'FR', zh: '我与家人有共同的传统和仪式。', en: 'I share traditions and rituals with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'FR', zh: '我能在家庭冲突中找到解决方案。', en: 'I can find solutions in family conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'FR', zh: '我感到家庭是安全的港湾。', en: 'I feel home is a safe haven.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'FR', zh: '我与家人相互信任。', en: 'I trust my family and they trust me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'FR', zh: '我能接受家人的不完美。', en: 'I can accept my family\'s imperfections.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'FR', zh: '我感到被家人接纳。', en: 'I feel accepted by my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'FR', zh: '我与家人有情感上的连接。', en: 'I have emotional connection with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'FR', zh: '我能与家人分享我的成就。', en: 'I can share my achievements with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'FR', zh: '我感到家人关心我的幸福。', en: 'I feel my family cares about my happiness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'FR', zh: '我能与家人一起庆祝重要时刻。', en: 'I can celebrate important moments with my family.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'FR', zh: '我对家庭关系感到满意。', en: 'I am satisfied with my family relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var total = 0, count = 0;
        questions.forEach(function(q, i) { if (answers[i] >= 0) { total += answers[i] + 1; count++; } });
        return { score: count > 0 ? Math.round((total / (count * 5)) * 100) : 0 };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😔', title: '低家庭关系质量', description: '你的家庭关系质量较低。建议改善与家人的沟通和互动。', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: '中等家庭关系质量', description: '你有中等质量的家庭关系。你与家人有一定的连接，但还有提升空间。', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: '高家庭关系质量', description: '你有高质量的家庭关系。你与家人有深度连接，相互支持和理解。', color: '#4CAF50' }
        ],
        en: [
            { range: [0, 30], icon: '😔', title: 'Low Family Relations Quality', description: 'Your family relations quality is low. Consider improving communication and interaction with family.', color: '#F44336' },
            { range: [31, 60], icon: '🙂', title: 'Moderate Family Relations Quality', description: 'You have moderate family relations quality. You have some connection with family but there\'s room for improvement.', color: '#FFC107' },
            { range: [61, 100], icon: '😊', title: 'High Family Relations Quality', description: 'You have high family relations quality. You have deep connections with family, supporting and understanding each other.', color: '#4CAF50' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的家庭关系质量', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Family Relations Quality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};
