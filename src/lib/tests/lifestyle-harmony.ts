// @ts-nocheck
// Lifestyle Harmony Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const LIFESTYLE_HARMONY_TEST: any = {
    type: 'lifestyle-harmony', icon: '☯️', color: '#8D6E63',
    questions: [
        // Work-Life Integration (WL) - 4 questions
        { id: 1, dimension: 'WL', zh: '我能够在工作和个人生活之间设定清晰的边界。', en: 'I can set clear boundaries between work and personal life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'WL', zh: '下班后，我能够真正地从工作状态中切换出来。', en: 'After work, I can truly switch out of work mode.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'WL', zh: '我的工作时间和个人时间都能得到应有的尊重。', en: 'Both my work time and personal time receive the respect they deserve.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'WL', zh: '我不会因为工作而经常牺牲与家人朋友相处的时间。', en: 'I don\'t frequently sacrifice time with family and friends because of work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Health Balance (HB) - 4 questions
        { id: 5, dimension: 'HB', zh: '我能够保持规律的运动习惯。', en: 'I can maintain a regular exercise habit.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'HB', zh: '我的饮食习惯总体上是健康和均衡的。', en: 'My eating habits are generally healthy and balanced.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'HB', zh: '我能够保证充足的睡眠时间。', en: 'I can ensure adequate sleep time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'HB', zh: '我会定期关注自己的身心健康状况。', en: 'I regularly pay attention to my physical and mental health.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Social Solitude (SS) - 4 questions
        { id: 9, dimension: 'SS', zh: '我能够在社交活动和独处时间之间保持健康的平衡。', en: 'I can maintain a healthy balance between social activities and alone time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SS', zh: '我在独处时感到充实和自在，而不是孤独和焦虑。', en: 'I feel fulfilled and at ease when alone, rather than lonely and anxious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SS', zh: '我能够在社交中投入精力，但也不会忽视自己独处的需求。', en: 'I can invest energy in socializing without neglecting my need for alone time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SS', zh: '我对自己需要多少社交和多少独处有着清晰的认识。', en: 'I have a clear understanding of how much socializing and alone time I need.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Routine Flexibility (RF) - 4 questions
        { id: 13, dimension: 'RF', zh: '我能够在规律的日常作息和灵活的变化之间找到平衡。', en: 'I can find a balance between a regular daily routine and flexible changes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'RF', zh: '当计划被打乱时，我能够灵活调整而不感到过度焦虑。', en: 'When plans are disrupted, I can flexibly adjust without feeling overly anxious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'RF', zh: '我的生活中既有稳定的习惯，也有足够的新鲜体验。', en: 'My life has both stable habits and enough new experiences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'RF', zh: '我能够享受规律生活带来的安全感，同时也不排斥适度的变化。', en: 'I enjoy the security of a regular lifestyle while not resisting moderate changes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        WL: { color: '#81D4FA', mood: '平衡 · 边界 · 从容', quote_zh: '工作是为了更好地生活，而不是生活只为了工作。', quote_en: 'We work to live better, not live only to work.' },
        HB: { color: '#A5D6A7', mood: '活力 · 自律 · 健康', quote_zh: '健康的身体是和谐生活最坚实的基础。', quote_en: 'A healthy body is the most solid foundation for a harmonious life.' },
        SS: { color: '#CE93D8', mood: '宁静 · 自足 · 平衡', quote_zh: '能在人群中自在，也能在独处中丰盈，这就是和谐。', quote_en: 'Being at ease among others and enriched in solitude — that\'s harmony.' },
        RF: { color: '#FFCC80', mood: '从容 · 稳定 · 灵活', quote_zh: '最好的节奏是，有规律的骨架，有自由的灵魂。', quote_en: 'The best rhythm has a structured framework and a free spirit.' }
    },

    types: {
        WL: {
            zh: { title: '工作生活平衡型', name: '工作生活整合', description: '你在工作和生活之间的整合方面做得很好。你能够设定清晰的边界，在下班后真正切换出来，并且不让工作侵蚀与家人朋友相处的时间。这种平衡感让你在工作和个人生活两个领域都能获得满足。' },
            en: { title: 'Work-Life Balanced Type', name: 'Work-Life Integration', description: 'You\'re doing well at integrating work and life. You can set clear boundaries, truly switch off after work, and don\'t let work encroach on time with family and friends. This sense of balance allows you to find fulfillment in both work and personal life domains.' }
        },
        HB: {
            zh: { title: '健康生活型', name: '健康平衡', description: '你在维护身心健康方面有着出色的习惯。你保持规律的运动、均衡的饮食和充足的睡眠，同时定期关注自己的身心状态。这种对健康的重视为你提供了充沛的能量和良好的生活品质。' },
            en: { title: 'Healthy Living Type', name: 'Health Balance', description: 'You have excellent habits for maintaining physical and mental health. You keep regular exercise, balanced nutrition, and adequate sleep while regularly monitoring your physical and mental state. This attention to health provides you with abundant energy and quality of life.' }
        },
        SS: {
            zh: { title: '社交独处和谐型', name: '社交独处平衡', description: '你在社交和独处之间找到了令人羡慕的平衡。你既能在社交中投入精力、享受人际连接，也能在独处中感到充实和自在。你清楚自己需要多少社交和多少独处，并能够主动地为两者创造空间。' },
            en: { title: 'Socially Harmonious Type', name: 'Social Solitude Balance', description: 'You\'ve found an enviable balance between socializing and solitude. You can invest energy in social activities and enjoy human connections, yet also feel fulfilled and at ease when alone. You clearly know how much socializing and alone time you need and can proactively create space for both.' }
        },
        RF: {
            zh: { title: '节奏灵活型', name: '日常灵活性', description: '你在规律和灵活之间找到了舒适的平衡。你享受日常习惯带来的安全感和效率，同时也能在计划改变时灵活调整。你的生活既有稳定的骨架支撑，也有足够的空间容纳意外和变化。这种灵活性让你的生活既有序又有趣。' },
            en: { title: 'Rhythmically Flexible Type', name: 'Routine Flexibility', description: 'You\'ve found a comfortable balance between routine and flexibility. You enjoy the security and efficiency of daily habits while being able to adjust flexibly when plans change. Your life has both a stable framework and enough room for the unexpected. This flexibility makes your life both orderly and interesting.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { WL: { total: 0, count: 0 }, HB: { total: 0, count: 0 }, SS: { total: 0, count: 0 }, RF: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { WL: dims.WL.total, HB: dims.HB.total, SS: dims.SS.total, RF: dims.RF.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'WL', zh: '工作生活整合', score: percentages.WL },
                { name: 'HB', zh: '健康平衡', score: percentages.HB },
                { name: 'SS', zh: '社交独处平衡', score: percentages.SS },
                { name: 'RF', zh: '日常灵活性', score: percentages.RF }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的生活和谐画像', disclaimer: '本测试仅供参考，帮助你了解自己在工作生活整合、健康平衡、社交独处平衡和日常灵活性方面的和谐程度。生活的和谐不是完美的平衡，而是在不同需求之间找到属于自己的节奏。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Lifestyle Harmony Profile', disclaimer: 'This test is for reference only, helping you understand your harmony in work-life integration, health balance, social-solitude balance, and routine flexibility. Lifestyle harmony isn\'t about perfect balance — it\'s about finding your own rhythm among different needs.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default LIFESTYLE_HARMONY_TEST;
