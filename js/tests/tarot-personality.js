var TAROT_PERSONALITY_TEST = {
    type: 'tarot-personality', icon: '🔮', color: '#673AB7',
    questions: [
        { id: 1, dimension: 'MA', zh: '你相信命运。', en: 'You believe in destiny.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'MA', zh: '你对神秘事物感兴趣。', en: 'You are interested in mysterious things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'MA', zh: '你喜欢探索未知。', en: 'You like exploring the unknown.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'MA', zh: '你相信直觉。', en: 'You trust your intuition.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'WT', zh: '你善于观察。', en: 'You are good at observing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'WT', zh: '你能看透人心。', en: 'You can see through people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'WT', zh: '你有很强的洞察力。', en: 'You have strong insight.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'WT', zh: '你能理解他人的深层需求。', en: 'You can understand others\' deep needs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'ST', zh: '你有很强的意志力。', en: 'You have strong willpower.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'ST', zh: '你能掌控自己的命运。', en: 'You can control your own destiny.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'ST', zh: '你追求力量。', en: 'You pursue power.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'ST', zh: '你有很强的执行力。', en: 'You have strong execution ability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'ST', zh: '你喜欢帮助他人。', en: 'You like helping others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'ST', zh: '你很有爱心。', en: 'You are very loving.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'ST', zh: '你相信爱能战胜一切。', en: 'You believe love can conquer all.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'ST', zh: '你善于给予。', en: 'You are good at giving.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { MA: { total: 0, count: 0 }, WT: { total: 0, count: 0 }, ST: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'MA', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'MA': { zh: { title: '魔法师', name: '魔法师', description: '你是魔法师型。你相信命运，对神秘事物感兴趣，喜欢探索未知。' }, en: { title: 'The Magician', name: 'The Magician', description: 'You are The Magician. You believe in destiny, are interested in mysteries, and like exploring the unknown.' } },
        'WT': { zh: { title: '女祭司', name: '女祭司', description: '你是女祭司型。你善于观察，有很强的洞察力，能理解他人深层需求。' }, en: { title: 'The High Priestess', name: 'The High Priestess', description: 'You are The High Priestess. You are observant, have strong insight, and can understand others\' deep needs.' } },
        'ST': { zh: { title: '力量', name: '力量', description: '你是力量型。你有很强的意志力和执行力，追求力量，善于给予。' }, en: { title: 'Strength', name: 'Strength', description: 'You are Strength. You have strong willpower and execution ability, pursue power, and are good at giving.' } }
    },
    uiText: {
        zh: { resultTitle: '你的塔罗人格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Tarot Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
