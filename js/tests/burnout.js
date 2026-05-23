const BURNOUT_TEST = {
    type: 'burnout', icon: '⚡', color: '#FF5722',
    questions: [
        { id: 1, dimension: 'EE', zh: '工作让我感到身心疲惫。', en: 'Work makes me feel physically and mentally exhausted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EE', zh: '下班后我感到精疲力尽。', en: 'I feel exhausted after work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EE', zh: '早上想到要工作就感到疲惫。', en: 'I feel tired just thinking about work in the morning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EE', zh: '工作让我感到压力很大。', en: 'Work puts a lot of pressure on me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EE', zh: '我感到工作让我快要崩溃了。', en: 'I feel work is about to break me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EE', zh: '我对工作感到厌倦。', en: 'I feel tired of my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EE', zh: '我感到工作让我情感枯竭。', en: 'I feel work drains me emotionally.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DP', zh: '我对工作对象变得冷漠。', en: 'I have become indifferent to my work subjects.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'DP', zh: '我对同事或客户缺乏同情心。', en: 'I lack sympathy for colleagues or clients.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DP', zh: '我只想做好自己的本职工作。', en: 'I just want to do my own job.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DP', zh: '我变得对人不耐烦。', en: 'I have become impatient with people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DP', zh: '我尽量避免与人接触。', en: 'I try to avoid contact with people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DP', zh: '我对他人的感受漠不关心。', en: 'I am indifferent to others\' feelings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DP', zh: '我觉得和人打交道很累。', en: 'I find dealing with people tiring.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PA', zh: '我能有效地解决工作中的问题。', en: 'I can effectively solve problems at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 16, dimension: 'PA', zh: '我觉得自己在做有意义的工作。', en: 'I feel I am doing meaningful work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 17, dimension: 'PA', zh: '我对自己的工作成果感到满意。', en: 'I am satisfied with my work results.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 18, dimension: 'PA', zh: '我觉得自己在工作中有所贡献。', en: 'I feel I contribute something at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 19, dimension: 'PA', zh: '我对工作充满热情。', en: 'I am passionate about my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 20, dimension: 'PA', zh: '我相信自己能做好工作。', en: 'I believe I can do my work well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 21, dimension: 'PA', zh: '我在工作中感到快乐。', en: 'I feel happy at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 22, dimension: 'PA', zh: '我对工作充满活力。', en: 'I feel energetic at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] }
    ],
    calculate: function(answers, questions) {
        var dims = { EE: { total: 0, count: 0 }, DP: { total: 0, count: 0 }, PA: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        return { dimensions: [
            { name: 'Emotional Exhaustion', zh: '情绪耗竭', score: Math.round((dims.EE.total / (dims.EE.count * 5)) * 100) },
            { name: 'Depersonalization', zh: '去人格化', score: Math.round((dims.DP.total / (dims.DP.count * 5)) * 100) },
            { name: 'Personal Accomplishment', zh: '个人成就', score: Math.round((dims.PA.total / (dims.PA.count * 5)) * 100) }
        ]};
    },
    uiText: {
        zh: { resultTitle: '你的职业倦怠程度', disclaimer: '本测试仅供参考。如感到严重倦怠，请咨询专业人士。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '第', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Burnout Level', disclaimer: 'This test is for reference only. If you feel severely burned out, consult a professional.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};
