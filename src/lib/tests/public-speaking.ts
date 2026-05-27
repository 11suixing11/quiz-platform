// @ts-nocheck
// Auto-converted from public-speaking.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const PUBLIC_SPEAKING_TEST: any = {
    type: 'public-speaking', icon: '🎤', color: '#F44336',
    questions: [
        { id: 1, dimension: 'CO', zh: '我喜欢在公众面前演讲。', en: 'I like speaking in public.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CO', zh: '我在演讲时很自信。', en: 'I am confident when giving speeches.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CO', zh: '我不怕被很多人注视。', en: 'I am not afraid of being watched by many people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CO', zh: '我能从容应对演讲中的意外。', en: 'I can handle unexpected situations during speeches.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'ST', zh: '我能清晰地组织演讲内容。', en: 'I can clearly organize speech content.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'ST', zh: '我能用故事吸引听众。', en: 'I can attract the audience with stories.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'ST', zh: '我能用简洁的语言表达复杂观点。', en: 'I can express complex ideas in simple language.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'ST', zh: '我的演讲有逻辑性。', en: 'My speeches are logical.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AE', zh: '我能与听众互动。', en: 'I can interact with the audience.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AE', zh: '我能根据听众反应调整内容。', en: 'I can adjust content based on audience reactions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AE', zh: '我能营造良好的演讲氛围。', en: 'I can create a good speech atmosphere.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AE', zh: '我能激发听众的兴趣。', en: 'I can inspire audience interest.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'NP', zh: '我会认真准备演讲。', en: 'I seriously prepare for speeches.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'NP', zh: '我会练习演讲技巧。', en: 'I practice speech skills.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'NP', zh: '我会研究优秀演讲者。', en: 'I study excellent speakers.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'NP', zh: '我会不断改进演讲能力。', en: 'I continuously improve my speaking ability.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { CO: { total: 0, count: 0 }, ST: { total: 0, count: 0 }, AE: { total: 0, count: 0 }, NP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
        var maxDim = 'CO', maxScore = 0;
        Object.keys(dims).forEach(function(k) { var avg = dims[k].count > 0 ? dims[k].total / dims[k].count : 0; if (avg > maxScore) { maxScore = avg; maxDim = k; } });
        return { type: maxDim };
    },
    types: {
        'CO': { zh: { title: '自信演讲型', name: '自信演讲型', description: '你是自信演讲型。你享受在公众面前演讲，自信从容。' }, en: { title: 'Confident Speaker', name: 'Confident Speaker', description: 'You are a confident speaker. You enjoy speaking in public and are self-assured.' } },
        'ST': { zh: { title: '故事演讲型', name: '故事演讲型', description: '你是故事演讲型。你善于用故事和逻辑组织演讲内容。' }, en: { title: 'Storytelling Speaker', name: 'Storytelling Speaker', description: 'You are a storytelling speaker. You are good at organizing speech content with stories and logic.' } },
        'AE': { zh: { title: '互动演讲型', name: '互动演讲型', description: '你是互动演讲型。你善于与听众互动，营造良好的演讲氛围。' }, en: { title: 'Interactive Speaker', name: 'Interactive Speaker', description: 'You are an interactive speaker. You are good at interacting with the audience and creating a good atmosphere.' } },
        'NP': { zh: { title: '精进演讲型', name: '精进演讲型', description: '你是精进演讲型。你认真准备、不断练习，持续提升演讲能力。' }, en: { title: 'Practice-Oriented Speaker', name: 'Practice-Oriented Speaker', description: 'You are a practice-oriented speaker. You preparediligently, practice continuously, and improve your speaking skills.' } }
    },
    uiText: {
        zh: { resultTitle: '你的公众演讲风格', disclaimer: '本测试仅供参考。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...' },
        en: { resultTitle: 'Your Public Speaking Style', disclaimer: 'This test is for reference only.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...' }
    }
};

export default PUBLIC_SPEAKING_TEST;
