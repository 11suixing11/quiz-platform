const PERSUASION_TEST = {
    type: 'persuasion', icon: '🗣️', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'LG', zh: '我能用逻辑说服他人。', en: 'I can persuade others with logic.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LG', zh: '我会用事实和数据支持我的观点。', en: 'I use facts and data to support my viewpoints.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LG', zh: '我能清晰地表达复杂的观点。', en: 'I can clearly express complex ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LG', zh: '我能用论证让人信服。', en: 'I can convince people with arguments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EM', zh: '我能用情感打动他人。', en: 'I can move others with emotions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EM', zh: '我能引起他人的共鸣。', en: 'I can resonate with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EM', zh: '我善于讲故事来传达信息。', en: 'I am good at storytelling to convey messages.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EM', zh: '我能激发他人的热情。', en: 'I can inspire enthusiasm in others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AU', zh: '他人认为我是可靠的。', en: 'Others consider me reliable.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AU', zh: '我的专业知识让人信服。', en: 'My expertise convinces people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AU', zh: '我能建立信任感。', en: 'I can build trust.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AU', zh: '他人愿意听取我的建议。', en: 'Others are willing to listen to my advice.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'SC', zh: '我能适应不同的说服对象。', en: 'I can adapt to different persuasion targets.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SC', zh: '我能找到双方的共同点。', en: 'I can find common ground with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SC', zh: '我能灵活调整说服策略。', en: 'I can flexibly adjust persuasion strategies.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SC', zh: '我能把握说服的最佳时机。', en: 'I can grasp the best timing for persuasion.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { LG: { total: 0, count: 0 }, EM: { total: 0, count: 0 }, AU: { total: 0, count: 0 }, SC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'LG', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'LG': { zh: { title: '逻辑说服型', name: '逻辑说服型', description: '你是逻辑说服型。你善于用事实、数据和逻辑论证来说服他人。' }, en: { title: 'Logical Persuader', name: 'Logical Persuader', description: 'You are a logical persuader. You are good at using facts, data, and logical arguments to persuade others.' } },
        'EM': { zh: { title: '情感说服型', name: '情感说服型', description: '你是情感说服型。你善于用情感、故事和热情来打动他人。' }, en: { title: 'Emotional Persuader', name: 'Emotional Persuader', description: 'You are an emotional persuader. You are good at using emotions, stories, and enthusiasm to move others.' } },
        'AU': { zh: { title: '权威说服型', name: '权威说服型', description: '你是权威说服型。你依靠专业能力和信任感来说服他人。' }, en: { title: 'Authority Persuader', name: 'Authority Persuader', description: 'You are an authority persuader. You rely on expertise and trust to persuade others.' } },
        'SC': { zh: { title: '策略说服型', name: '策略说服型', description: '你是策略说服型。你能灵活调整策略，找到共同点，把握时机。' }, en: { title: 'Strategic Persuader', name: 'Strategic Persuader', description: 'You are a strategic persuader. You can flexibly adjust strategies, find common ground, and grasp timing.' } }
    },
    uiText: {
        zh: { resultTitle: '你的说服力风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Persuasion Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
