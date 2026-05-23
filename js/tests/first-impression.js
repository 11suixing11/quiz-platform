var FIRST_IMPRESSION_TEST = {
    type: 'first-impression', icon: '👋', color: '#00BCD4',
    questions: [
        { id: 1, dimension: 'AP', zh: '我注重初次见面的仪表。', en: 'I value my appearance when meeting someone for the first time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AP', zh: '我会根据场合选择合适的着装。', en: 'I choose appropriate clothing for different occasions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AP', zh: '我给人的第一印象通常很好。', en: 'I usually make a good first impression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AP', zh: '我会注意自己的肢体语言。', en: 'I pay attention to my body language.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'VC', zh: '我说话清晰有条理。', en: 'I speak clearly and logically.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'VC', zh: '我能用简洁的语言介绍自己。', en: 'I can introduce myself concisely.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'VC', zh: '我的声音给人留下好印象。', en: 'My voice leaves a good impression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'VC', zh: '我能自然地开启对话。', en: 'I can naturally start a conversation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CF', zh: '我在初次见面时很自信。', en: 'I am confident when meeting someone for the first time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CF', zh: '我能从容应对社交场合。', en: 'I can handle social situations with ease.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CF', zh: '我不怕被拒绝。', en: 'I am not afraid of rejection.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CF', zh: '我相信自己能给人好印象。', en: 'I believe I can make a good impression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AW', zh: '我能察觉他人对我的看法。', en: 'I can sense how others perceive me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AW', zh: '我会根据反馈调整自己的表现。', en: 'I adjust my performance based on feedback.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AW', zh: '我能读懂初次见面时的氛围。', en: 'I can read the atmosphere during first meetings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AW', zh: '我知道如何给人留下好印象。', en: 'I know how to leave a good impression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AP: { total: 0, count: 0 }, VC: { total: 0, count: 0 }, CF: { total: 0, count: 0 }, AW: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'AP', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'AP': { zh: { title: '形象优先型', name: '形象优先型', description: '你是形象优先型。你注重仪表和外在形象，给人留下良好第一印象。' }, en: { title: 'Appearance-Focused', name: 'Appearance-Focused', description: 'You are appearance-focused. Youvalue appearance and image, making a good first impression.' } },
        'VC': { zh: { title: '沟通优先型', name: '沟通优先型', description: '你是沟通优先型。你善于用语言和表达给人留下好印象。' }, en: { title: 'Communication-Focused', name: 'Communication-Focused', description: 'You are communication-focused. You are good at using language and expression to make a good impression.' } },
        'CF': { zh: { title: '自信优先型', name: '自信优先型', description: '你是自信优先型。你的自信和从容给人留下深刻印象。' }, en: { title: 'Confidence-Focused', name: 'Confidence-Focused', description: 'You are confidence-focused. Your confidence and composure leave a deep impression.' } },
        'AW': { zh: { title: '感知优先型', name: '感知优先型', description: '你是感知优先型。你能敏锐感知他人看法，灵活调整表现。' }, en: { title: 'Awareness-Focused', name: 'Awareness-Focused', description: 'You are awareness-focused. You can sensitively perceive others\' views and flexibly adjust your performance.' } }
    },
    uiText: {
        zh: { resultTitle: '你的第一印象风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your First Impression Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
