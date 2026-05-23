var CAREER_ANCHOR_TEST = {
    type: 'career-anchor', icon: '⚓', color: '#3F51B5',
    questions: [
        { id: 1, dimension: 'TF', zh: '我追求技术上的精通。', en: 'I pursue technical mastery.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'TF', zh: '我喜欢深入研究专业领域。', en: 'I like to deeply study my field.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'GM', zh: '我希望管理他人。', en: 'I want to manage others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'GM', zh: '我喜欢做决策和领导。', en: 'I like making decisions and leading.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AI', zh: '我渴望创业。', en: 'I long to start my own business.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'AI', zh: '我喜欢创造新事物。', en: 'I like creating new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SA', zh: '我希望工作能服务社会。', en: 'I want my work to serve society.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SA', zh: '我希望帮助他人。', en: 'I want to help others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SC', zh: '我希望工作稳定安全。', en: 'I want stable and secure work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SC', zh: '我重视工作保障。', en: 'I value job security.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AC', zh: '我希望工作有挑战性。', en: 'I want challenging work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AC', zh: '我喜欢解决难题。', en: 'I like solving difficult problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'LF', zh: '我希望工作有灵活性。', en: 'I want flexible work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LF', zh: '我希望自主安排工作。', en: 'I want to arrange my own work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SE', zh: '我希望整合工作和生活。', en: 'I want to integrate work and life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SE', zh: '我希望工作能体现个人价值。', en: 'I want my work to reflect personal values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { TF: { total: 0, count: 0 }, GM: { total: 0, count: 0 }, AI: { total: 0, count: 0 }, SA: { total: 0, count: 0 }, SC: { total: 0, count: 0 }, AC: { total: 0, count: 0 }, LF: { total: 0, count: 0 }, SE: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'TF', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'TF': { zh: { title: '技术/职能型', name: '技术/职能型', description: '你的职业锚是技术/职能型。你追求在专业领域的精通，喜欢深入研究技术问题。' }, en: { title: 'Technical/Functional', name: 'Technical/Functional', description: 'Your career anchor is technical/functional. You pursue mastery in your field and enjoy deep technical research.' } },
        'GM': { zh: { title: '管理型', name: '管理型', description: '你的职业锚是管理型。你喜欢领导他人，做决策，承担更大的责任。' }, en: { title: 'General Management', name: 'General Management', description: 'Your career anchor is general management. You like leading others, making decisions, and taking on greater responsibility.' } },
        'AI': { zh: { title: '自主/独立型', name: '自主/独立型', description: '你的职业锚是自主/独立型。你渴望自由，喜欢创造新事物，可能适合创业。' }, en: { title: 'Autonomy/Independence', name: 'Autonomy/Independence', description: 'Your career anchor is autonomy/independence. Youlong for freedom, like creating new things, and may be suited for entrepreneurship.' } },
        'SA': { zh: { title: '服务/奉献型', name: '服务/奉献型', description: '你的职业锚是服务/奉献型。你希望工作能帮助他人，对社会有贡献。' }, en: { title: 'Service/Dedication', name: 'Service/Dedication', description: 'Your career anchor is service/dedication. You want your work to help others and contribute to society.' } },
        'SC': { zh: { title: '安全/稳定型', name: '安全/稳定型', description: '你的职业锚是安全/稳定型。你重视工作保障和稳定的职业发展。' }, en: { title: 'Security/Stability', name: 'Security/Stability', description: 'Your career anchor is security/stability. You value job security and stable career development.' } },
        'AC': { zh: { title: '挑战型', name: '挑战型', description: '你的职业锚是挑战型。你喜欢解决难题，追求不断超越自我。' }, en: { title: 'Challenge', name: 'Challenge', description: 'Your career anchor is challenge. You like solving difficult problems and constantly surpassing yourself.' } },
        'LF': { zh: { title: '生活方式型', name: '生活方式型', description: '你的职业锚是生活方式型。你希望工作有灵活性，能自主安排时间。' }, en: { title: 'Lifestyle', name: 'Lifestyle', description: 'Your career anchor is lifestyle. You want flexible work and the ability to arrange your own time.' } },
        'SE': { zh: { title: '创业型', name: '创业型', description: '你的职业锚是创业型。你希望创造新事物，建立自己的事业。' }, en: { title: 'Entrepreneurial', name: 'Entrepreneurial', description: 'Your career anchor is entrepreneurial. You want to create new things and build your own business.' } }
    },
    uiText: {
        zh: { resultTitle: '你的职业锚', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Career Anchor', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
