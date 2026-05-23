var CONFLICT_RESOLUTION_TEST = {
    type: 'conflict-resolution', icon: '🕊️', color: '#4CAF50',
    questions: [
        { id: 1, dimension: 'CO', zh: '面对冲突时我寻求双赢方案。', en: 'I seek win-win solutions when facing conflict.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CO', zh: '我能倾听对方的观点。', en: 'I can listen to the other party\'s viewpoint.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CO', zh: '我在冲突中保持冷静。', en: 'I stay calm during conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CO', zh: '我寻求共同点。', en: 'I seek common ground.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AV', zh: '我倾向于回避冲突。', en: 'I tend to avoid conflict.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AV', zh: '我害怕冲突会破坏关系。', en: 'I fear conflict will damage relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AV', zh: '我尽量避免讨论敏感话题。', en: 'I try to avoid discussing sensitive topics.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CO', zh: '我用"我"语句表达感受。', en: 'I use "I" statements to express feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CO', zh: '我愿意妥协来解决冲突。', en: 'I am willing to compromise to resolve conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CO', zh: '我能控制自己的情绪。', en: 'I can control my emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CO', zh: '我寻求建设性解决方案。', en: 'I seek constructive solutions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AV', zh: '我在冲突中保持沉默。', en: 'I stay silent during conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'CO', zh: '我能承认自己的错误。', en: 'I can admit my mistakes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CO', zh: '我尊重对方的感受。', en: 'I respect the other party\'s feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AV', zh: '我让时间来解决问题。', en: 'I let time solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CO', zh: '我专注于问题而非人身攻击。', en: 'I focus on the problem, not personal attacks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'CO', zh: '我能换位思考。', en: 'I can put myself in others\' shoes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'AV', zh: '我害怕表达不同意见。', en: 'I fear expressing different opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'CO', zh: '我能有效管理冲突。', en: 'I can manage conflicts effectively.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'CO', zh: '我从冲突中学习和成长。', en: 'I learn and grow from conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { CO: { total: 0, count: 0 }, AV: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'CO', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'CO': { zh: { title: '合作型', name: '合作型', description: '你是合作型冲突解决者。你寻求双赢方案，善于倾听和理解他人，能有效管理冲突。' }, en: { title: 'Collaborative', name: 'Collaborative', description: 'You are a collaborative conflict resolver. You seek win-win solutions, listen well, and manage conflicts effectively.' } },
        'AV': { zh: { title: '回避型', name: '回避型', description: '你是回避型冲突解决者。你倾向于避免冲突，可能让问题积累。建议学习更积极的冲突解决方式。' }, en: { title: 'Avoidant', name: 'Avoidant', description: 'You are an avoidant conflict resolver. You tend to avoid conflict, which may let problems accumulate. Consider learning more active conflict resolution styles.' } }
    },
    uiText: {
        zh: { resultTitle: '你的冲突处理风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Conflict Resolution Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
