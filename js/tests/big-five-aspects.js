var BIG_FIVE_ASPECTS_TEST = {
    type: 'big-five-aspects', icon: '🌈', color: '#673AB7',
    questions: [
        { id: 1, dimension: 'O', zh: '我对抽象概念很感兴趣。', en: 'I am interested in abstract concepts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'O', zh: '我喜欢尝试新事物。', en: 'I like trying new things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'I', zh: '我喜欢解决复杂问题。', en: 'I like solving complex problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'I', zh: '我思考问题很深入。', en: 'I think deeply about problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'C', zh: '我做事很有计划性。', en: 'I am very planned in my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'C', zh: '我能按时完成任务。', en: 'I can complete tasks on time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'O2', zh: '我喜欢把事情安排得井井有条。', en: 'I like to keep things well organized.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'O2', zh: '我注重细节。', en: 'I pay attention to details.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'E', zh: '我喜欢和别人在一起。', en: 'I like being with others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'E', zh: '我在社交场合感到自在。', en: 'I feel comfortable in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'EN', zh: '我对生活充满热情。', en: 'I am enthusiastic about life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'EN', zh: '我经常感到快乐。', en: 'I often feel happy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'A', zh: '我信任他人。', en: 'I trust others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'A', zh: '我乐于合作。', en: 'I am cooperative.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CO', zh: '我关心他人的幸福。', en: 'I care about others\' well-being.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CO', zh: '我对他人有同情心。', en: 'I have sympathy for others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'N', zh: '我经常感到焦虑。', en: 'I often feel anxious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'N', zh: '我情绪波动较大。', en: 'I have large mood swings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'V', zh: '我容易感到愤怒。', en: 'I easily feel angry.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'V', zh: '我对压力很敏感。', en: 'I am sensitive to stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = {};
        questions.forEach(function(q, i) { if (!dims[q.dimension]) dims[q.dimension] = { total: 0, count: 0 }; if (answers[i] >= 0) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var names = { O: { name: 'Openness', zh: '开放性' }, I: { name: 'Intellect', zh: '智力' }, C: { name: 'Conscientiousness', zh: '尽责性' }, O2: { name: 'Orderliness', zh: '秩序' }, E: { name: 'Extraversion', zh: '外向' }, EN: { name: 'Enthusiasm', zh: '热情' }, A: { name: 'Agreeableness', zh: '宜人性' }, CO: { name: 'Compassion', zh: '同情' }, N: { name: 'Neuroticism', zh: '神经质' }, V: { name: 'Volatility', zh: '波动性' } };
        return { dimensions: Object.keys(dims).map(function(k) { return { name: names[k].name, zh: names[k].zh, score: Math.round((dims[k].total / (dims[k].count * 5)) * 100) }; }) };
    },
    uiText: {
        zh: { resultTitle: '大五人格细分', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Big Five Aspects', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
