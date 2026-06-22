// @ts-nocheck
// Personality Adaptation Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const PERSONALITY_ADAPTATION_TEST: any = {
    type: 'personality-adaptation', icon: '🦎', color: '#66BB6A',
    questions: [
        // Context Flexibility (CF) - 4 questions
        { id: 1, dimension: 'CF', zh: '我能够根据不同场合调整自己的行为方式。', en: 'I can adjust my behavior according to different occasions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'CF', zh: '在正式场合和休闲场合之间切换时，我感到自然和舒适。', en: 'I feel natural and comfortable switching between formal and casual settings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'CF', zh: '我能快速读懂新的社交环境并调整自己的表现。', en: 'I can quickly read new social environments and adjust my presentation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'CF', zh: '我认为在不同情境下展现不同面向的自己是正常的，而非虚伪。', en: 'I think it\'s normal to show different aspects of myself in different situations, not hypocrisy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Social Adaptation (SA) - 4 questions
        { id: 5, dimension: 'SA', zh: '我能够与不同类型的人建立良好的关系。', en: 'I can build good relationships with different types of people.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SA', zh: '在新的社交环境中，我能较快地找到融入的方式。', en: 'I can find ways to fit in relatively quickly in new social environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SA', zh: '我能够感知到群体中的社交动态并做出适当回应。', en: 'I can sense social dynamics in a group and respond appropriately.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SA', zh: '我能够在文化或背景不同的人群中感到自在。', en: 'I can feel comfortable among people of different cultures or backgrounds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Authentic Expression (AE) - 4 questions
        { id: 9, dimension: 'AE', zh: '即使在适应不同环境时，我也不会违背自己的核心价值观。', en: 'Even when adapting to different environments, I don\'t compromise my core values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AE', zh: '我能够在社交适应和保持真实之间找到平衡。', en: 'I can find a balance between social adaptation and staying authentic.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AE', zh: '我不会为了迎合他人而完全改变自己的观点。', en: 'I don\'t completely change my opinions just to please others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AE', zh: '在社交场合中，我能够表达真实的想法，即使它可能与主流不同。', en: 'In social situations, I can express my true thoughts even if they differ from the mainstream.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Stress Response (SR) - 4 questions
        { id: 13, dimension: 'SR', zh: '在压力下，我仍然能够灵活地调整自己的策略和方法。', en: 'Under pressure, I can still flexibly adjust my strategies and methods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SR', zh: '面对突发变化，我能够保持冷静并快速适应。', en: 'Facing unexpected changes, I can stay calm and adapt quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SR', zh: '在困难时期，我能够调整期望并找到新的应对方式。', en: 'During difficult times, I can adjust expectations and find new coping approaches.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SR', zh: '压力不会让我变得僵化或固执，反而能激发我的创造性思维。', en: 'Pressure doesn\'t make me rigid or stubborn; instead, it can stimulate my creative thinking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        CF: { color: '#A5D6A7', mood: '灵活 · 场景 · 智慧', quote_zh: '水的智慧在于，它总能找到适合容器的形状。', quote_en: 'The wisdom of water is that it always finds a shape that fits the container.' },
        SA: { color: '#90CAF9', mood: '融入 · 连接 · 和谐', quote_zh: '适应不是失去自我，而是拓展自我的边界。', quote_en: 'Adapting isn\'t losing yourself — it\'s expanding the boundaries of who you are.' },
        AE: { color: '#FFCC80', mood: '真实 · 坚守 · 平衡', quote_zh: '在变化中保持不变的核心，这就是真实的力量。', quote_en: 'Keeping an unchanging core amid change — that\'s the power of authenticity.' },
        SR: { color: '#EF9A9A', mood: '从容 · 韧性 · 创新', quote_zh: '真正的灵活是在风暴中依然能找到新方向。', quote_en: 'True flexibility is finding a new direction even in the storm.' }
    },

    types: {
        CF: {
            zh: { title: '情境灵活型', name: '情境灵活性', description: '你在不同情境间切换的能力出色。你能够根据场合调整自己的行为方式，在正式和休闲环境之间自如转换。这种灵活性让你能够适应多变的生活和工作环境，同时保持内心的舒适感。' },
            en: { title: 'Context Flexible Type', name: 'Context Flexibility', description: 'Your ability to switch between different contexts is excellent. You can adjust your behavior according to situations and move freely between formal and casual environments. This flexibility allows you to adapt to varied life and work environments while maintaining inner comfort.' }
        },
        SA: {
            zh: { title: '社交适应型', name: '社交适应力', description: '你在社交适应方面表现出色。你能够与不同类型的人建立联系，在新环境中快速找到融入方式，并敏锐地感知群体动态。这种社交适应力让你在各种社交场合中都能感到自在和自信。' },
            en: { title: 'Socially Adaptive Type', name: 'Social Adaptation', description: 'You excel in social adaptation. You can connect with different types of people, quickly find ways to integrate in new environments, and sensitively perceive group dynamics. This social adaptability allows you to feel comfortable and confident in various social situations.' }
        },
        AE: {
            zh: { title: '真实平衡型', name: '真实表达', description: '你在社交适应和保持真实之间找到了出色的平衡。你能够灵活地适应不同环境，同时不违背自己的核心价值观。这种能力让你既能在社交中游刃有余，又不会感到自己在"演戏"。真实与灵活的结合是成熟人格的重要标志。' },
            en: { title: 'Authentically Balanced Type', name: 'Authentic Expression', description: 'You\'ve found an excellent balance between social adaptation and staying authentic. You can flexibly adapt to different environments without compromising your core values. This ability lets you navigate social situations with ease without feeling like you\'re "acting." The combination of authenticity and flexibility is a hallmark of a mature personality.' }
        },
        SR: {
            zh: { title: '压力灵活型', name: '压力应对', description: '你在压力下仍能保持灵活性，这是非常宝贵的能力。面对突发变化和困难时期，你不会变得僵化或固执，而是能够调整策略、转变思路。压力反而能激发你的创造性思维，让你在逆境中找到新的可能性。' },
            en: { title: 'Stress-Adaptive Type', name: 'Stress Response', description: 'Your ability to maintain flexibility under pressure is truly valuable. Facing unexpected changes and difficult periods, you don\'t become rigid or stubborn but can adjust strategies and shift perspectives. Pressure actually stimulates your creative thinking, helping you find new possibilities in adversity.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { CF: { total: 0, count: 0 }, SA: { total: 0, count: 0 }, AE: { total: 0, count: 0 }, SR: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { CF: dims.CF.total, SA: dims.SA.total, AE: dims.AE.total, SR: dims.SR.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'CF', zh: '情境灵活性', score: percentages.CF },
                { name: 'SA', zh: '社交适应力', score: percentages.SA },
                { name: 'AE', zh: '真实表达', score: percentages.AE },
                { name: 'SR', zh: '压力应对', score: percentages.SR }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的人格适应画像', disclaimer: '本测试仅供参考，帮助你了解自己在情境灵活性、社交适应力、真实表达和压力应对方面的适应能力。人格适应是一个动态的过程，它反映了你在变化环境中的灵活性和韧性。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Personality Adaptation Profile', disclaimer: 'This test is for reference only, helping you understand your adaptive abilities in context flexibility, social adaptation, authentic expression, and stress response. Personality adaptation is a dynamic process reflecting your flexibility and resilience in changing environments.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default PERSONALITY_ADAPTATION_TEST;
