var WORK_VALUES_TEST = {
    type: 'work-values', icon: '💼', color: '#795548',
    questions: [
        { id: 1, dimension: 'AV', zh: '工作中的成就感对我很重要。', en: 'Achievement at work is important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AV', zh: '我追求工作中的卓越表现。', en: 'I pursue excellence at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SV', zh: '我希望工作能帮助他人。', en: 'I want my work to help others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SV', zh: '我希望工作能对社会有贡献。', en: 'I want my work to contribute to society.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'RV', zh: '工作与生活的平衡对我很重要。', en: 'Work-life balance is important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'RV', zh: '我希望有灵活的工作时间。', en: 'I want flexible working hours.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EV', zh: '经济回报对我很重要。', en: 'Financial rewards are important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EV', zh: '我希望有良好的福利待遇。', en: 'I want good benefits and compensation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CV', zh: '工作中的创造力对我很重要。', en: 'Creativity at work is important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CV', zh: '我希望在工作中发挥创意。', en: 'I want to use my creativity at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AV', zh: '我追求职业上的晋升。', en: 'I pursue career advancement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SV', zh: '我希望与同事建立良好关系。', en: 'I want to build good relationships with colleagues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RV', zh: '我希望有稳定的工作环境。', en: 'I want a stable work environment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'EV', zh: '我希望有高薪收入。', en: 'I want a high salary.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CV', zh: '我喜欢解决复杂问题。', en: 'I like solving complex problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'AV', zh: '我希望在工作中获得认可。', en: 'I want to be recognized at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { AV: { total: 0, count: 0 }, SV: { total: 0, count: 0 }, RV: { total: 0, count: 0 }, EV: { total: 0, count: 0 }, CV: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var dimensions = [
            { name: 'Achievement', zh: '成就', score: Math.round(((dims.AV.count > 0 ? dims.AV.total / dims.AV.count : 0) / 5) * 100) },
            { name: 'Social', zh: '社会', score: Math.round(((dims.SV.count > 0 ? dims.SV.total / dims.SV.count : 0) / 5) * 100) },
            { name: 'Relaxation', zh: '生活', score: Math.round(((dims.RV.count > 0 ? dims.RV.total / dims.RV.count : 0) / 5) * 100) },
            { name: 'Economic', zh: '经济', score: Math.round(((dims.EV.count > 0 ? dims.EV.total / dims.EV.count : 0) / 5) * 100) },
            { name: 'Creative', zh: '创造', score: Math.round(((dims.CV.count > 0 ? dims.CV.total / dims.CV.count : 0) / 5) * 100) }
        ];
        var maxDim = dimensions[0];
        dimensions.forEach(function(d) { if (d.score > maxDim.score) maxDim = d; });
        return { type: maxDim.name, dimensions: dimensions };
    },
    types: {
        'Achievement': { zh: { title: '成就导向型', name: '成就导向型', description: '你最看重工作中的成就感和认可。你追求卓越，渴望在职业上取得成功。' }, en: { title: 'Achievement-Oriented', name: 'Achievement-Oriented', description: 'You value achievement and recognition at work most. You pursue excellence andlong for professional success.' } },
        'Social': { zh: { title: '社会导向型', name: '社会导向型', description: '你最看重工作中的社会价值和人际关系。你希望工作能帮助他人，对社会有贡献。' }, en: { title: 'Social-Oriented', name: 'Social-Oriented', description: 'You value social impact and relationships at work most. You want your work to help others and contribute to society.' } },
        'Relaxation': { zh: { title: '生活导向型', name: '生活导向型', description: '你最看重工作与生活的平衡。你希望有灵活的时间和稳定的工作环境。' }, en: { title: 'Relaxation-Oriented', name: 'Relaxation-Oriented', description: 'You value work-life balance most. You want flexible hours and a stable work environment.' } },
        'Economic': { zh: { title: '经济导向型', name: '经济导向型', description: '你最看重经济回报和福利待遇。你希望获得高薪和良好的物质保障。' }, en: { title: 'Economic-Oriented', name: 'Economic-Oriented', description: 'You value financial rewards and benefits most. You want a high salary and good material security.' } },
        'Creative': { zh: { title: '创造导向型', name: '创造导向型', description: '你最看重工作中的创造力和挑战。你喜欢解决复杂问题，发挥创意。' }, en: { title: 'Creative-Oriented', name: 'Creative-Oriented', description: 'You value creativity and challenges at work most. You enjoy solving complex problems and using your creativity.' } }
    },
    uiText: {
        zh: { resultTitle: '你的工作价值观', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Work Values', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
