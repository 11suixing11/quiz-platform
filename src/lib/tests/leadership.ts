// @ts-nocheck
// Auto-converted from leadership.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const LEADERSHIP_TEST: any = {
    type: 'leadership-style', icon: '👑', color: '#FFC107',
    questions: [
        { id: 1, dimension: 'TL', zh: '我激励团队成员追求共同愿景。', en: 'I inspire team members to pursue a shared vision.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DL', zh: '我注重细节和流程。', en: 'I focus on details and processes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SL', zh: '我支持团队成员的个人发展。', en: 'I support team members\' personal development.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'DL', zh: '我设定明确的目标和标准。', en: 'I set clear goals and standards.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SL', zh: '我关心团队成员的福祉。', en: 'I care about team members\' well-being.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'TL', zh: '我鼓励创新和变革。', en: 'I encourage innovation and change.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DL', zh: '我监督任务的完成情况。', en: 'I supervise task completion.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SL', zh: '我创造积极的工作环境。', en: 'I create a positive work environment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'TL', zh: '我以身作则。', en: 'I lead by example.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DL', zh: '我确保工作按时完成。', en: 'I ensure work is completed on time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SL', zh: '我倾听团队成员的意见。', en: 'I listen to team members\' opinions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'TL', zh: '我推动团队实现突破。', en: 'I drive the team to achieve breakthroughs.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'DL', zh: '我注重绩效评估。', en: 'I focus on performance evaluation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SL', zh: '我帮助团队成员解决问题。', en: 'I help team members solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'TL', zh: '我激发团队的潜力。', en: 'I inspire the team\'s potential.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DL', zh: '我确保工作质量。', en: 'I ensure work quality.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { TL: { total: 0, count: 0 }, DL: { total: 0, count: 0 }, SL: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'TL', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'TL': { zh: { title: '变革型领导', name: '变革型领导', description: '你是变革型领导者。你善于激励团队，推动创新，以身作则。你能够激发团队的潜力，实现突破性成果。' }, en: { title: 'Transformational Leader', name: 'Transformational Leader', description: 'You are a transformational leader. You excel at inspiring teams, driving innovation, and leading by example. You can unlock team potential and achieve breakthrough results.' } },
        'DL': { zh: { title: '事务型领导', name: '事务型领导', description: '你是事务型领导者。你注重细节、流程和绩效。你能够确保工作按时完成，质量达标。' }, en: { title: 'Transactional Leader', name: 'Transactional Leader', description: 'You are a transactional leader. You focus on details, processes, and performance. You ensure work is completed on time and meets quality standards.' } },
        'SL': { zh: { title: '服务型领导', name: '服务型领导', description: '你是服务型领导者。你关心团队成员的福祉，支持他们的个人发展。你创造积极的工作环境，帮助团队成长。' }, en: { title: 'Servant Leader', name: 'Servant Leader', description: 'You are a servant leader. You care about team members\' well-being and support their personal development. You create a positive work environment and help the team grow.' } }
    },
    uiText: {
        zh: { resultTitle: '你的领导风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Leadership Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default LEADERSHIP_TEST;
