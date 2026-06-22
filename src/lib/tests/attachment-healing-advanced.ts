// @ts-nocheck
// Advanced Attachment Healing Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const ATTACHMENT_HEALING_ADVANCED_TEST: any = {
    type: 'attachment-healing-advanced', icon: '🩹', color: '#EC407A',
    questions: [
        // Wound Recognition (WR) - 5 questions
        { id: 1, dimension: 'WR', zh: '我能清楚地识别出自己的依恋创伤来自哪些具体经历。', en: 'I can clearly identify which specific experiences caused my attachment wounds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'WR', zh: '我理解自己的回避或焦虑反应是对早期创伤的合理适应。', en: 'I understand that my avoidance or anxiety reactions are reasonable adaptations to early trauma.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'WR', zh: '我能够在关系冲突中识别出哪些反应来自旧伤，而非当下的现实。', en: 'I can recognize during relationship conflicts which reactions come from old wounds rather than current reality.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'WR', zh: '我能够觉察到自己在亲密关系中的重复模式。', en: 'I can notice my recurring patterns in intimate relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'WR', zh: '我理解自己的身体反应（如心跳加速、肌肉紧张）可能与依恋创伤有关。', en: 'I understand that my body reactions (like racing heart, muscle tension) may relate to attachment wounds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Healing Strategies (HS) - 5 questions
        { id: 6, dimension: 'HS', zh: '我已经发展出有效的自我安抚策略来应对依恋焦虑。', en: 'I have developed effective self-soothing strategies to cope with attachment anxiety.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'HS', zh: '我能够通过正念或冥想来调节自己的情绪反应。', en: 'I can use mindfulness or meditation to regulate my emotional responses.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'HS', zh: '我能够主动寻求专业帮助来处理深层的依恋问题。', en: 'I can proactively seek professional help to address deep attachment issues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'HS', zh: '我能够在感到被触发时，选择健康的应对方式而非旧有的防御模式。', en: 'I can choose healthy coping methods instead of old defense patterns when triggered.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'HS', zh: '我能够通过写日记、艺术表达等方式处理复杂的情感体验。', en: 'I can process complex emotional experiences through journaling, art expression, or similar methods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Relationship Patterns (RP) - 5 questions
        { id: 11, dimension: 'RP', zh: '我能够在亲密关系中维持健康的独立性与亲密感的平衡。', en: 'I can maintain a healthy balance between independence and intimacy in close relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'RP', zh: '我能够识别并选择安全型的伴侣或朋友。', en: 'I can identify and choose secure attachment-type partners or friends.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'RP', zh: '我能够在关系中设定健康的边界而不感到内疚。', en: 'I can set healthy boundaries in relationships without feeling guilty.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'RP', zh: '我能够在冲突中进行建设性的对话而不是退缩或攻击。', en: 'I can engage in constructive dialogue during conflicts rather than withdrawing or attacking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'RP', zh: '我的关系质量比过去有了明显的改善。', en: 'The quality of my relationships has noticeably improved compared to the past.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Growth Integration (GI) - 5 questions
        { id: 16, dimension: 'GI', zh: '我能够将过去的痛苦经历转化为个人成长的资源。', en: 'I can transform past painful experiences into resources for personal growth.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'GI', zh: '我对自己的依恋经历感到感恩，因为它们让我更加了解自己。', en: 'I feel gratitude for my attachment experiences because they helped me understand myself better.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'GI', zh: '我相信自己有能力创造安全、稳定的关系。', en: 'I believe I have the ability to create safe, stable relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'GI', zh: '我能够在帮助他人处理依恋问题时保持自己的情绪稳定。', en: 'I can maintain emotional stability when helping others with their attachment issues.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'GI', zh: '我对自己的未来关系充满希望和信心。', en: 'I feel hopeful and confident about my future relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        WR: { color: '#7986CB', mood: '觉察 · 识别 · 清醒', quote_zh: '深度的觉察不是停留在伤口，而是看清伤口的全貌。', quote_en: 'Deep awareness isn\'t dwelling on wounds — it\'s seeing the full picture of them.' },
        HS: { color: '#4DB6AC', mood: '策略 · 工具 · 成长', quote_zh: '你已经拥有了疗愈所需的工具，只需勇敢地使用它们。', quote_en: 'You already have the tools for healing — you just need the courage to use them.' },
        RP: { color: '#FFB74D', mood: '连接 · 平衡 · 转变', quote_zh: '新的关系模式正在你的生命中生根发芽。', quote_en: 'New relationship patterns are taking root in your life.' },
        GI: { color: '#F48FB1', mood: '整合 · 感恩 · 希望', quote_zh: '你不仅是伤痛的幸存者，更是成长的见证者。', quote_en: 'You are not just a survivor of pain — you are a witness to growth.' }
    },

    types: {
        WR: {
            zh: { title: '深度觉察型', name: '伤痛识别', description: '你在依恋伤痛的深度识别方面表现出色。你能够精确地定位创伤来源，区分旧伤与当下现实，并理解身体反应与依恋创伤的关联。这种深度觉察让你能够在关系中做出更有意识的选择，而不是被无意识的模式所驱动。继续深化这种觉察，它是深度疗愈的基石。' },
            en: { title: 'Deep Awareness Type', name: 'Wound Recognition', description: 'You excel in deep recognition of attachment wounds. You can precisely locate trauma sources, distinguish between old wounds and present reality, and understand the connection between body reactions and attachment trauma. This deep awareness allows you to make more conscious choices in relationships rather than being driven by unconscious patterns. Continue deepening this awareness — it\'s the cornerstone of profound healing.' }
        },
        HS: {
            zh: { title: '策略丰富型', name: '疗愈策略', description: '你已经发展出丰富的疗愈策略来处理依恋创伤。从自我安抚到正念练习，从主动求助到创造性表达，你拥有多样化的工具来应对依恋挑战。这种策略的多样性意味着你不会过度依赖单一方法，而是能够灵活地选择最适合当下情境的方式。继续保持这种开放和实验的态度。' },
            en: { title: 'Strategy-Rich Type', name: 'Healing Strategies', description: 'You\'ve developed rich healing strategies for addressing attachment wounds. From self-soothing to mindfulness practice, from proactive help-seeking to creative expression, you have diverse tools for attachment challenges. This variety means you won\'t over-rely on any single method but can flexibly choose what best fits the moment. Keep maintaining this openness and experimental attitude.' }
        },
        RP: {
            zh: { title: '关系重塑型', name: '关系模式', description: '你在重塑关系模式方面取得了显著的进步。你能够在亲密关系中保持健康的平衡，识别安全型关系，并且在冲突中进行建设性的对话。这些新的关系技能正在逐步替代旧有的不安全模式，为你创造更令人满足的关系体验。每一次成功的互动都在加强这些新的神经通路。' },
            en: { title: 'Pattern Reshaping Type', name: 'Relationship Patterns', description: 'You\'ve made remarkable progress in reshaping your relationship patterns. You can maintain healthy balance in intimate relationships, identify secure connections, and engage in constructive dialogue during conflicts. These new relationship skills are gradually replacing old insecure patterns, creating more fulfilling relational experiences. Each successful interaction strengthens these new neural pathways.' }
        },
        GI: {
            zh: { title: '整合成长型', name: '成长整合', description: '你在将依恋经历转化为成长资源方面表现卓越。你不仅从过去的痛苦中学习，还能将其转化为帮助他人的智慧。你对未来关系充满希望和信心，这种积极的展望本身就是深度疗愈的标志。你正在成为一个既能自我疗愈又能支持他人的人。' },
            en: { title: 'Integration Growth Type', name: 'Growth Integration', description: 'You excel at transforming attachment experiences into growth resources. You not only learn from past pain but can convert it into wisdom that helps others. You feel hopeful and confident about future relationships — this positive outlook itself is a sign of deep healing. You\'re becoming someone who can both self-heal and support others on their journey.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { WR: { total: 0, count: 0 }, HS: { total: 0, count: 0 }, RP: { total: 0, count: 0 }, GI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { WR: dims.WR.total, HS: dims.HS.total, RP: dims.RP.total, GI: dims.GI.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'WR', zh: '伤痛识别', score: percentages.WR },
                { name: 'HS', zh: '疗愈策略', score: percentages.HS },
                { name: 'RP', zh: '关系模式', score: percentages.RP },
                { name: 'GI', zh: '成长整合', score: percentages.GI }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的深度依恋疗愈状况', disclaimer: '本测试仅供参考，帮助你了解自己在伤痛识别、疗愈策略、关系模式和成长整合方面的深度疗愈状况。依恋疗愈是一段需要耐心和勇气的旅程，如有需要，请寻求专业心理咨询的帮助。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Advanced Attachment Healing Profile', disclaimer: 'This test is for reference only, helping you understand your deep healing journey across wound recognition, healing strategies, relationship patterns, and growth integration. Attachment healing requires patience and courage. If needed, please seek professional counseling support.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default ATTACHMENT_HEALING_ADVANCED_TEST;
