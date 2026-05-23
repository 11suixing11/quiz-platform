var CHARACTER_STRENGTHS_TEST = {
    type: 'character-strengths', icon: '�?, color: '#FFC107',
    questions: [
        { id: 1, dimension: 'WI', zh: '我喜欢思考人生的重大问题�?, en: 'I like thinking about big questions in life.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'WI', zh: '我善于从不同角度看问题�?, en: 'I am good at looking at problems from different angles.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'WI', zh: '我喜欢学习新知识�?, en: 'I love learning new knowledge.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'WI', zh: '我有丰富的创造力�?, en: 'I have rich creativity.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'CO', zh: '我面对困难时不会退缩�?, en: 'I don\'t back down when facing difficulties.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CO', zh: '我勇于表达自己的观点�?, en: 'I am brave enough to express my views.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CO', zh: '我有很强的毅力�?, en: 'I have strong perseverance.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CO', zh: '我对生活充满热情�?, en: 'I am passionate about life.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'HU', zh: '我关心他人的感受�?, en: 'I care about others\' feelings.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'HU', zh: '我善于理解他人�?, en: 'I am good at understanding others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'HU', zh: '我乐于帮助需要帮助的人�?, en: 'I enjoy helping people in need.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'HU', zh: '我对他人有深厚的感情�?, en: 'I have deep affection for others.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'JU', zh: '我相信公平对待每个人�?, en: 'I believe in treating everyone fairly.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'JU', zh: '我在团队中善于合作�?, en: 'I am good at cooperating in teams.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'JU', zh: '我有很强的领导能力�?, en: 'I have strong leadership abilities.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'JU', zh: '我有很强的公民意识�?, en: 'I have a strong sense of civic duty.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'TE', zh: '我能控制自己的冲动�?, en: 'I can control my impulses.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'TE', zh: '我做事有条理�?, en: 'I am organized in my work.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'TE', zh: '我做事谨慎，不轻易冒险�?, en: 'I am cautious and don\'t take risks easily.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'TE', zh: '我能原谅他人的过错�?, en: 'I can forgive others\' mistakes.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 21, dimension: 'TR', zh: '我能欣赏生活中的美好�?, en: 'I can appreciate the beauty in life.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 22, dimension: 'TR', zh: '我对自己拥有的一切心怀感恩�?, en: 'I am grateful for everything I have.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 23, dimension: 'TR', zh: '我对未来充满希望�?, en: 'I am hopeful about the future.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 24, dimension: 'TR', zh: '我经常笑，有幽默感�?, en: 'I laugh often and have a sense of humor.', options: { zh: ['非常不同�?,'不同�?,'中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { WI: { total: 0, count: 0 }, CO: { total: 0, count: 0 }, HU: { total: 0, count: 0 }, JU: { total: 0, count: 0 }, TE: { total: 0, count: 0 }, TR: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'Wisdom', zh: '智慧', score: Math.round((dims.WI.total / (dims.WI.count * 5)) * 100) },
            { name: 'Courage', zh: '勇气', score: Math.round((dims.CO.total / (dims.CO.count * 5)) * 100) },
            { name: 'Humanity', zh: '人�?, score: Math.round((dims.HU.total / (dims.HU.count * 5)) * 100) },
            { name: 'Justice', zh: '正义', score: Math.round((dims.JU.total / (dims.JU.count * 5)) * 100) },
            { name: 'Temperance', zh: '节制', score: Math.round((dims.TE.total / (dims.TE.count * 5)) * 100) },
            { name: 'Transcendence', zh: '超越', score: Math.round((dims.TR.total / (dims.TR.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的性格优势', disclaimer: '本测试仅供参考�?, restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '�?, of: '�?/ �?, nextBtn: '下一�?, prevBtn: '上一�?, submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Character Strengths', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
