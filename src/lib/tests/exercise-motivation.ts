// @ts-nocheck
// Auto-converted from exercise-motivation.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const EXERCISE_MOTIVATION_TEST: any = {
    type: 'exercise-motivation', icon: '🏃', color: '#FF9800',
    questions: [
        { id: 1, dimension: 'HM', zh: '我运动是为了健康。', en: 'I exercise for health.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'HM', zh: '我运动是为了预防疾病。', en: 'I exercise to prevent diseases.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'HM', zh: '我运动是为了保持身材。', en: 'I exercise to maintain fitness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'HM', zh: '我运动是为了增强体质。', en: 'I exercise to strengthen my body.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'EM', zh: '我运动是为了减压。', en: 'I exercise to relieve stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'EM', zh: '我运动是为了改善心情。', en: 'I exercise to improve my mood.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'EM', zh: '我运动是为了增加自信。', en: 'I exercise to increase confidence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'EM', zh: '我运动是为了改善睡眠。', en: 'I exercise to improve sleep.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SM', zh: '我运动是为了社交。', en: 'I exercise for socializing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SM', zh: '我喜欢和朋友一起运动。', en: 'I like exercising with friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SM', zh: '我喜欢参加运动团队。', en: 'I like joining sports teams.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SM', zh: '我喜欢运动中的竞争。', en: 'I like competition in sports.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'IM', zh: '我运动是因为享受运动本身。', en: 'I exercise because I enjoy it.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'IM', zh: '我喜欢挑战自己的极限。', en: 'I like challenging my limits.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'IM', zh: '我喜欢学习新的运动技能。', en: 'I like learning new sports skills.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'IM', zh: '我喜欢运动带来的成就感。', en: 'I like the sense of achievement from exercise.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { HM: { total: 0, count: 0 }, EM: { total: 0, count: 0 }, SM: { total: 0, count: 0 }, IM: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'HM', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'HM': { zh: { title: '健康驱动型', name: '健康驱动型', description: '你是健康驱动型运动者。你运动主要是为了健康、预防疾病和保持身材。' }, en: { title: 'Health-Motivated', name: 'Health-Motivated', description: 'You are a health-motivated exerciser. You exercise mainly for health, disease prevention, and fitness.' } },
        'EM': { zh: { title: '情绪驱动型', name: '情绪驱动型', description: '你是情绪驱动型运动者。你运动主要是为了减压、改善心情和增加自信。' }, en: { title: 'Emotion-Motivated', name: 'Emotion-Motivated', description: 'You are an emotion-motivated exerciser. You exercise mainly for stress relief, mood improvement, and confidence.' } },
        'SM': { zh: { title: '社交驱动型', name: '社交驱动型', description: '你是社交驱动型运动者。你运动主要是为了社交、与朋友互动和竞争。' }, en: { title: 'Social-Motivated', name: 'Social-Motivated', description: 'You are a social-motivated exerciser. You exercise mainly for socializing, interacting with friends, and competition.' } },
        'IM': { zh: { title: '内在驱动型', name: '内在驱动型', description: '你是内在驱动型运动者。你运动是因为享受运动本身，喜欢挑战和学习新技能。' }, en: { title: 'Intrinsically-Motivated', name: 'Intrinsically-Motivated', description: 'You are an intrinsically-motivated exerciser. You exercise because you enjoy it and like challenges and learning new skills.' } }
    },
    uiText: {
        zh: { resultTitle: '你的运动动机', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Exercise Motivation', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default EXERCISE_MOTIVATION_TEST;
