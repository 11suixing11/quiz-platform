// @ts-nocheck
// Personality Integration Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const PERSONALITY_INTEGRATION_TEST: any = {
    type: 'personality-integration', icon: '🧩', color: '#AB47BC',
    questions: [
        // Self Awareness (SA) - 5 questions
        { id: 1, dimension: 'SA', zh: '我清楚地了解自己的性格特点，包括优点和缺点。', en: 'I clearly understand my personality traits, including strengths and weaknesses.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SA', zh: '我能够觉察到自己的情绪触发点和自动化反应模式。', en: 'I can notice my emotional triggers and automatic reaction patterns.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SA', zh: '我了解是什么驱动着我做决定——是理性、情感还是习惯。', en: 'I understand what drives my decisions — reason, emotion, or habit.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SA', zh: '我能够识别自己在不同情境下的人格面具或角色转换。', en: 'I can identify my personality masks or role shifts in different situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SA', zh: '我定期进行自我反思来更好地了解自己。', en: 'I regularly engage in self-reflection to better understand myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Self Acceptance (SV) - 5 questions
        { id: 6, dimension: 'SV', zh: '我接受自己是一个有优点也有缺点的完整的人。', en: 'I accept myself as a complete person with both strengths and flaws.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SV', zh: '我不会因为自己的不完美而过度自责或自我否定。', en: 'I don\'t excessively blame or deny myself because of my imperfections.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SV', zh: '我能够善待自己的脆弱和软弱时刻。', en: 'I can be kind to myself during moments of vulnerability and weakness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'SV', zh: '我接受自己的过去经历，它们构成了今天的我。', en: 'I accept my past experiences — they\'ve shaped who I am today.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SV', zh: '即使在犯错后，我仍然认为自己是一个有价值的人。', en: 'Even after making mistakes, I still consider myself a worthwhile person.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Value Alignment (VA) - 5 questions
        { id: 11, dimension: 'VA', zh: '我的日常行为和选择反映了我真正看重的价值观。', en: 'My daily behaviors and choices reflect the values I truly hold dear.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'VA', zh: '我能够在面临诱惑或压力时坚守自己的核心价值观。', en: 'I can stick to my core values when facing temptation or pressure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'VA', zh: '我对自己真正重要的事情有着清晰的优先排序。', en: 'I have a clear priority ranking for what\'s truly important to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'VA', zh: '我不会因为他人的期望而轻易改变自己的核心价值观。', en: 'I don\'t easily change my core values because of others\' expectations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'VA', zh: '我的生活方式让我感到内心平静，因为它是基于真实价值观的。', en: 'My lifestyle brings me inner peace because it\'s based on authentic values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Behavioral Congruence (BC) - 5 questions
        { id: 16, dimension: 'BC', zh: '我所说的话和我所做的事之间是一致的。', en: 'What I say and what I do are consistent with each other.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'BC', zh: '我在不同的人面前展现的自己基本上是一致的。', en: 'The self I present to different people is basically consistent.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'BC', zh: '我不会在人前一套、人后一套。', en: 'I don\'t act one way in public and another way in private.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'BC', zh: '我的内心感受和外在表达之间没有太大的鸿沟。', en: 'There isn\'t a big gap between my inner feelings and outer expression.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'BC', zh: '当我意识到自己的行为与信念不一致时，我会努力调整。', en: 'When I realize my behavior doesn\'t align with my beliefs, I make an effort to adjust.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        SA: { color: '#9FA8DA', mood: '自知 · 觉察 · 清醒', quote_zh: '认识自己，是一切智慧的开始。', quote_en: 'Knowing yourself is the beginning of all wisdom.' },
        SV: { color: '#A5D6A7', mood: '温柔 · 包容 · 接纳', quote_zh: '接纳不是放弃改变，而是给自己改变的力量。', quote_en: 'Acceptance isn\'t giving up on change — it\'s giving yourself the power to change.' },
        VA: { color: '#FFD54F', mood: '坚定 · 清晰 · 真实', quote_zh: '当你的生活与价值观一致，内心便不再有撕裂感。', quote_en: 'When your life aligns with your values, the tearing feeling inside dissolves.' },
        BC: { color: '#FFAB91', mood: '一致 · 真诚 · 整合', quote_zh: '表里如一，是人格整合最美丽的状态。', quote_en: 'Being consistent inside and out is the most beautiful state of personality integration.' }
    },

    types: {
        SA: {
            zh: { title: '深度自知型', name: '自我觉察', description: '你对自己有着深入而全面的了解。你清楚自己的性格特点、情绪触发点、决策驱动力和角色转换模式。这种深度的自我觉察是人格整合的基础——只有看清了自己，才能有意识地选择成长方向。继续保持定期的自我反思习惯，它会不断加深你对自己的理解。' },
            en: { title: 'Deeply Self-Aware Type', name: 'Self Awareness', description: 'You have a thorough and comprehensive understanding of yourself. You know your personality traits, emotional triggers, decision-making drivers, and role-switching patterns. This deep self-awareness is the foundation of personality integration — only by seeing yourself clearly can you consciously choose your growth direction. Continue your regular self-reflection practice; it will keep deepening your understanding of yourself.' }
        },
        SV: {
            zh: { title: '自我接纳型', name: '自我接纳', description: '你在自我接纳方面有着出色的能力。你接受自己是一个有优点也有缺点的完整的人，能够善待自己的脆弱和过去。这种接纳不是放纵，而是一种深刻的自我理解——当你停止与自己对抗，你就释放出了巨大的能量用于成长。你是自己最好的朋友。' },
            en: { title: 'Self-Accepting Type', name: 'Self Acceptance', description: 'You have an excellent ability in self-acceptance. You accept yourself as a complete person with both strengths and flaws, and can be kind to your vulnerabilities and past. This acceptance isn\'t indulgence but a profound self-understanding — when you stop fighting yourself, you release enormous energy for growth. You are your own best friend.' }
        },
        VA: {
            zh: { title: '价值一致型', name: '价值一致', description: '你在价值观与行为的一致性方面表现卓越。你的日常选择反映了你真正看重的东西，你能够在压力下坚守核心价值观，不会因为他人的期望而轻易动摇。这种价值一致性给你带来了内心的平静和方向感。你的人生是有主线的，这条主线就是你深深认同的价值观。' },
            en: { title: 'Value-Aligned Type', name: 'Value Alignment', description: 'You excel in aligning values with behavior. Your daily choices reflect what you truly care about, and you can stick to your core values under pressure without being easily swayed by others\' expectations. This value alignment brings you inner peace and a sense of direction. Your life has a main thread — that thread is the values you deeply identify with.' }
        },
        BC: {
            zh: { title: '表里如一型', name: '行为一致性', description: '你在言行一致和表里如一方面做得非常出色。你所说的话和所做的事之间没有太大的鸿沟，你在不同人面前展现的自己基本上是一致的。这种行为一致性让你的人际关系建立在真实的基础上，也让你对自己感到安心。你不需要记住"对谁说了什么"，因为你说的始终是真实的自己。' },
            en: { title: 'Congruent Type', name: 'Behavioral Congruence', description: 'You\'re excellent at being consistent in words and actions. There isn\'t a big gap between what you say and what you do, and the self you present to different people is basically the same. This behavioral congruence builds your relationships on a foundation of authenticity and gives you peace of mind about yourself. You don\'t need to remember "what you told whom" because what you say is always the real you.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { SA: { total: 0, count: 0 }, SV: { total: 0, count: 0 }, VA: { total: 0, count: 0 }, BC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { SA: dims.SA.total, SV: dims.SV.total, VA: dims.VA.total, BC: dims.BC.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'SA', zh: '自我觉察', score: percentages.SA },
                { name: 'SV', zh: '自我接纳', score: percentages.SV },
                { name: 'VA', zh: '价值一致', score: percentages.VA },
                { name: 'BC', zh: '行为一致性', score: percentages.BC }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的人格整合画像', disclaimer: '本测试仅供参考，帮助你了解自己在自我觉察、自我接纳、价值一致和行为一致性方面的发展状况。人格整合是一段终身的旅程，每一个维度都可以持续深化。在成为更完整的自己的路上，你已经走出了重要的一步。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Personality Integration Profile', disclaimer: 'This test is for reference only, helping you understand your development in self-awareness, self-acceptance, value alignment, and behavioral congruence. Personality integration is a lifelong journey, and each dimension can be continually deepened. On the path to becoming a more whole person, you\'ve already taken an important step.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default PERSONALITY_INTEGRATION_TEST;
