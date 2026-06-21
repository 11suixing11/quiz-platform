// @ts-nocheck
// Attachment Healing Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const ATTACHMENT_HEALING_TEST: any = {
    type: 'attachment-healing', icon: '🩹', color: '#EC407A',
    questions: [
        // Wound Awareness (WA) - 5 questions
        { id: 1, dimension: 'WA', zh: '我能识别出童年经历对我当前关系模式的影响。', en: 'I can recognize how childhood experiences influence my current relationship patterns.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'WA', zh: '我了解自己的依恋风格以及它的来源。', en: 'I understand my attachment style and where it comes from.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'WA', zh: '我能够在关系中觉察到自己的自动化反应模式。', en: 'I can notice my automatic reaction patterns in relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'WA', zh: '我能够不带评判地观察自己的恐惧和不安全感。', en: 'I can observe my fears and insecurities without judgment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'WA', zh: '我理解自己的某些防御机制曾经是保护我的方式。', en: 'I understand that some of my defense mechanisms once served to protect me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Healing Progress (HP) - 5 questions
        { id: 6, dimension: 'HP', zh: '我正在积极处理过去的创伤经历。', en: 'I am actively processing past traumatic experiences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'HP', zh: '我能够在感到受伤时选择暂停而不是立即反应。', en: 'I can choose to pause instead of reacting immediately when I feel hurt.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'HP', zh: '我的关系模式正在变得越来越健康。', en: 'My relationship patterns are becoming healthier over time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'HP', zh: '我能够从过去的失败关系中学到有价值的东西。', en: 'I can learn valuable lessons from past failed relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'HP', zh: '我已经学会了放下对某些人或经历的执念。', en: 'I have learned to let go of obsessions about certain people or experiences.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Trust Building (TB) - 5 questions
        { id: 11, dimension: 'TB', zh: '我能够在新关系中逐步建立信任，而不是一上来就全盘托出或完全封闭。', en: 'I can build trust gradually in new relationships rather than oversharing or shutting down completely.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'TB', zh: '我能够在感到不安时向伴侣表达我的需求。', en: 'I can express my needs to my partner when I feel insecure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'TB', zh: '我相信值得信赖的人是存在的。', en: 'I believe trustworthy people exist.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'TB', zh: '我能够在关系中适当地展现脆弱。', en: 'I can show appropriate vulnerability in relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'TB', zh: '我能够在冲突中保持连接，而不是逃跑或攻击。', en: 'I can stay connected during conflict rather than fleeing or attacking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Self-Compassion (SC) - 5 questions
        { id: 16, dimension: 'SC', zh: '当我在关系中犯错时，我能善待自己而不是严厉自责。', en: 'When I make mistakes in relationships, I can be kind to myself instead of harshly self-critical.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'SC', zh: '我能够接受自己在亲密关系中的不完美。', en: 'I can accept my imperfections in intimate relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'SC', zh: '我理解自己的依恋创伤不是我的错。', en: 'I understand that my attachment wounds are not my fault.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'SC', zh: '我在感到孤独时能够给予自己温暖和安慰。', en: 'I can offer myself warmth and comfort when I feel lonely.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'SC', zh: '我相信自己值得被爱和被善待。', en: 'I believe I deserve to be loved and treated well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        WA: { color: '#7986CB', mood: '觉察 · 理解 · 清醒', quote_zh: '看见伤口，是疗愈的第一道光。', quote_en: 'Seeing the wound is the first light of healing.' },
        HP: { color: '#4DB6AC', mood: '蜕变 · 成长 · 重建', quote_zh: '你正在一点一点地重建自己，每一次进步都值得庆祝。', quote_en: 'You\'re rebuilding yourself bit by bit — every step forward is worth celebrating.' },
        TB: { color: '#FFB74D', mood: '勇气 · 连接 · 敞开', quote_zh: '重新信任需要巨大的勇气，而你正在拥有这份勇气。', quote_en: 'Trusting again takes tremendous courage, and you\'re finding it.' },
        SC: { color: '#F48FB1', mood: '温柔 · 包容 · 拥抱', quote_zh: '你不必完美才值得被爱，你本身就已经足够。', quote_en: 'You don\'t have to be perfect to be loved — you are already enough.' }
    },

    types: {
        WA: {
            zh: { title: '觉察成长型', name: '伤痛觉察', description: '你在依恋伤痛的觉察方面表现出色。你能够识别自己的依恋模式，理解它们的来源，并且不带评判地观察自己的自动化反应。这种觉察是疗愈的基础——当你能够看清伤痛的形状，它就不再是一个无形的阴影。继续培养这种觉察力，它是你走向更健康关系的指南针。' },
            en: { title: 'Awareness Growth Type', name: 'Wound Awareness', description: 'You excel in attachment wound awareness. You can identify your attachment patterns, understand their origins, and observe your automatic reactions without judgment. This awareness is the foundation of healing — when you can see the shape of pain, it ceases to be an invisible shadow. Continue cultivating this awareness; it\'s your compass toward healthier relationships.' }
        },
        HP: {
            zh: { title: '疗愈进行型', name: '疗愈进程', description: '你在疗愈进程中取得了显著的进步。你正在积极处理过去的经历，能够在受伤时选择暂停，并且从失败的关系中学到了宝贵的功课。疗愈不是一条直线，有时会进两步退一步，但你整体上在向前走。每一次选择暂停而非冲动反应，都是你神经通路的重新铺设。' },
            en: { title: 'Healing in Progress Type', name: 'Healing Progress', description: 'You\'ve made remarkable progress in your healing journey. You\'re actively processing past experiences, able to pause when hurt, and have learned valuable lessons from difficult relationships. Healing isn\'t a straight line — sometimes it\'s two steps forward and one step back — but you\'re moving forward overall. Every time you choose to pause instead of react impulsively, you\'re rewiring your neural pathways.' }
        },
        TB: {
            zh: { title: '信任重建型', name: '信任重建', description: '你在重建信任方面做得很好。你能够在新关系中逐步建立信任，能够在不安时表达需求，也能够在冲突中保持连接。信任的重建是依恋疗愈中最勇敢的篇章——它意味着你愿意再次冒险，愿意相信这一次可能不同。你的勇气正在为你打开新的可能性。' },
            en: { title: 'Trust Rebuilding Type', name: 'Trust Building', description: 'You\'re doing well at rebuilding trust. You can build trust gradually in new relationships, express needs when feeling insecure, and stay connected during conflicts. Rebuilding trust is the bravest chapter in attachment healing — it means you\'re willing to take risks again, willing to believe this time might be different. Your courage is opening new possibilities for you.' }
        },
        SC: {
            zh: { title: '自我关怀型', name: '自我关怀', description: '你在自我关怀方面做得很好。你能够善待自己的不完美，理解自己的伤痛不是自己的错，并且在孤独时给予自己温暖。自我关怀是依恋疗愈的根基——当你成为自己安全的港湾，你就能在关系中更加从容。你正在学会成为自己一直需要的那个人。' },
            en: { title: 'Self-Compassion Type', name: 'Self-Compassion', description: 'You\'re doing well with self-compassion. You can be kind to your imperfections, understand your wounds aren\'t your fault, and offer yourself warmth when lonely. Self-compassion is the foundation of attachment healing — when you become your own safe harbor, you can be more at ease in relationships. You\'re learning to become the person you\'ve always needed.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { WA: { total: 0, count: 0 }, HP: { total: 0, count: 0 }, TB: { total: 0, count: 0 }, SC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { WA: dims.WA.total, HP: dims.HP.total, TB: dims.TB.total, SC: dims.SC.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'WA', zh: '伤痛觉察', score: percentages.WA },
                { name: 'HP', zh: '疗愈进程', score: percentages.HP },
                { name: 'TB', zh: '信任重建', score: percentages.TB },
                { name: 'SC', zh: '自我关怀', score: percentages.SC }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的依恋疗愈状况', disclaimer: '本测试仅供参考，帮助你了解自己在依恋伤痛觉察、疗愈进程、信任重建和自我关怀方面的状况。依恋疗愈是一个温柔而漫长的过程，如有需要，请寻求专业心理咨询的帮助。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Attachment Healing Profile', disclaimer: 'This test is for reference only, helping you understand your attachment wound awareness, healing progress, trust building, and self-compassion. Attachment healing is a gentle and gradual process. If needed, please seek professional counseling support.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default ATTACHMENT_HEALING_TEST;
