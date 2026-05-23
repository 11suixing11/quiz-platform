var ANIMAL_PERSONALITY_TEST = {
    type: 'animal-personality', icon: '🐾', color: '#795548',
    questions: [
        { id: 1, dimension: 'LI', zh: '我喜欢成为领导者�?, en: 'I like being a leader.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'LI', zh: '我做事果断�?, en: 'I am decisive.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'LI', zh: '我喜欢挑战�?, en: 'I like challenges.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'LI', zh: '我有很强的竞争意识�?, en: 'I have a strong competitive awareness.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'DO', zh: '我忠诚可靠�?, en: 'I am loyal and reliable.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DO', zh: '我喜欢团队合作�?, en: 'I like teamwork.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DO', zh: '我善于与人相处�?, en: 'I am good at getting along with people.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DO', zh: '我喜欢帮助他人�?, en: 'I like helping others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CA', zh: '我喜欢独处�?, en: 'I like being alone.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CA', zh: '我独立自主�?, en: 'I am independent.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CA', zh: '我神秘而优雅�?, en: 'I am mysterious and elegant.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CA', zh: '我按自己的节奏生活�?, en: 'I live at my own pace.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'OW', zh: '我很有智慧�?, en: 'I am very wise.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'OW', zh: '我喜欢观察和思考�?, en: 'I like observing and thinking.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'OW', zh: '我能看透事物的本质�?, en: 'I can see the essence of things.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'OW', zh: '我给人沉稳的感觉�?, en: 'I give people a sense of calmness.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { LI: { total: 0, count: 0 }, DO: { total: 0, count: 0 }, CA: { total: 0, count: 0 }, OW: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'LI', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'LI': { zh: { title: '狮子�?, name: '狮子�?, description: '你是狮子型人格。你果断、有领导力、喜欢挑战，天生的领导者�? }, en: { title: 'Lion', name: 'Lion', description: 'You are a lion personality. You are decisive, leadership-oriented, and love challenges. A natural leader.' } },
        'DO': { zh: { title: '狗型', name: '狗型', description: '你是狗型人格。你忠诚、可靠、善于团队合作，是好朋友的典范�? }, en: { title: 'Dog', name: 'Dog', description: 'You are a dog personality. You are loyal, reliable, and good at teamwork. A model friend.' } },
        'CA': { zh: { title: '猫型', name: '猫型', description: '你是猫型人格。你独立、优雅、按自己的节奏生活，享受独处�? }, en: { title: 'Cat', name: 'Cat', description: 'You are a cat personality. You are independent, elegant, and live at your own pace. You enjoy solitude.' } },
        'OW': { zh: { title: '猫头鹰型', name: '猫头鹰型', description: '你是猫头鹰型人格。你智慧、善于观察、能看透事物本质�? }, en: { title: 'Owl', name: 'Owl', description: 'You are an owl personality. You are wise, observant, and can see the essence of things.' } }
    },
    uiText: {
        zh: { resultTitle: '你的动物人格', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Animal Personality', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
