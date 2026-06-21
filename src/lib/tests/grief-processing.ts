// @ts-nocheck
// Grief Processing Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const GRIEF_PROCESSING_TEST: any = {
    type: 'grief-processing', icon: '🕊️', color: '#78909C',
    questions: [
        // Grief Awareness (GA) - 4 questions
        { id: 1, dimension: 'GA', zh: '我能够承认和面对自己正在经历悲伤。', en: 'I can acknowledge and face the grief I\'m experiencing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'GA', zh: '我理解悲伤不仅仅是失去亲人，也包括失去关系、梦想或身份。', en: 'I understand that grief isn\'t just about losing a loved one — it includes loss of relationships, dreams, or identity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'GA', zh: '我知道悲伤没有固定的时间表，每个人的经历都不同。', en: 'I know grief has no fixed timeline and everyone\'s experience is different.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'GA', zh: '我允许自己在需要的时候哭泣或表达悲伤。', en: 'I allow myself to cry or express grief when I need to.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Coping Mechanisms (CM) - 4 questions
        { id: 5, dimension: 'CM', zh: '我有健康的方式来处理悲伤（如运动、写日记、与人倾诉）。', en: 'I have healthy ways to process grief (e.g., exercise, journaling, talking to someone).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CM', zh: '我不会用酒精、过度工作或其他方式来逃避悲伤。', en: 'I don\'t use alcohol, overwork, or other means to escape grief.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CM', zh: '我能够在感到悲伤时寻求他人的支持。', en: 'I can seek support from others when I feel grief.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CM', zh: '我能够区分健康的悲伤表达和自我毁灭性的行为。', en: 'I can distinguish between healthy grief expression and self-destructive behavior.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Meaning Making (MM) - 4 questions
        { id: 9, dimension: 'MM', zh: '我能够从失去的经历中找到某种意义或教训。', en: 'I can find some meaning or lesson from experiences of loss.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MM', zh: '失去某人或某事让我更珍惜当下拥有的。', en: 'Losing someone or something has made me more grateful for what I have now.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MM', zh: '我能够将对逝者的思念转化为积极的行动或纪念。', en: 'I can channel my longing for what\'s been lost into positive action or tribute.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MM', zh: '我相信即使经历了巨大的失去，生活仍然可以有意义。', en: 'I believe life can still have meaning even after great loss.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Growth Integration (GI) - 4 questions
        { id: 13, dimension: 'GI', zh: '经历悲伤后，我对他人有了更多的同理心。', en: 'After experiencing grief, I have more empathy for others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'GI', zh: '我能够在继续前行的同时保留对逝者的美好回忆。', en: 'I can move forward while preserving beautiful memories of what\'s been lost.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'GI', zh: '悲伤的经历让我更清楚什么对我真正重要。', en: 'Grief has made me clearer about what truly matters to me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'GI', zh: '我感到自己在经历悲伤后变得更加坚强和有深度。', en: 'I feel I\'ve become stronger and deeper after experiencing grief.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        GA: { color: '#90A4AE', mood: '承认 · 允许 · 面对', quote_zh: '悲伤不是软弱的表现，而是你深深爱过的证明。', quote_en: 'Grief is not weakness — it\'s proof that you loved deeply.' },
        CM: { color: '#80CBC4', mood: '承载 · 倾诉 · 释放', quote_zh: '你不必独自承受所有重量，分享悲伤也是一种力量。', quote_en: 'You don\'t have to carry all the weight alone — sharing grief is also strength.' },
        MM: { color: '#A5D6A7', mood: '寻觅 · 理解 · 重构', quote_zh: '在废墟中寻找意义，不是为了否定痛苦，而是为了给痛苦一个归处。', quote_en: 'Finding meaning in ruins isn\'t about denying pain — it\'s about giving pain a home.' },
        GI: { color: '#CE93D8', mood: '融合 · 成长 · 新生', quote_zh: '你带着失去的一切继续前行，那些爱已经成为了你的一部分。', quote_en: 'You carry everything you\'ve lost as you move forward — that love has become part of you.' }
    },

    types: {
        GA: {
            zh: { title: '悲伤觉察型', name: '悲伤觉察', description: '你在悲伤觉察方面表现出色。你能够承认和面对自己的悲伤，理解悲伤的多种形式，并且允许自己在需要时表达情感。这种觉察是悲伤处理的基础——只有当悲伤被看见、被承认，它才能被真正地承载和转化。你不需要假装坚强，承认悲伤本身就是一种勇敢。' },
            en: { title: 'Grief Awareness Type', name: 'Grief Awareness', description: 'You excel in grief awareness. You can acknowledge and face your grief, understand its many forms, and allow yourself to express emotions when needed. This awareness is the foundation of grief processing — only when grief is seen and acknowledged can it truly be held and transformed. You don\'t need to pretend to be strong; acknowledging grief itself is an act of courage.' }
        },
        CM: {
            zh: { title: '健康应对型', name: '应对机制', description: '你在悲伤应对方面做得很好。你有健康的方式来处理悲伤，能够在需要时寻求支持，也能够区分健康的情感表达和自我毁灭性的行为。这些应对能力是你在风暴中的锚——它们不会让风暴消失，但能让你在风浪中保持方向。继续使用这些健康的方式，它们是你的内在力量。' },
            en: { title: 'Healthy Coping Type', name: 'Coping Mechanisms', description: 'You\'re doing well with grief coping. You have healthy ways to process grief, can seek support when needed, and can distinguish between healthy emotional expression and self-destructive behavior. These coping skills are your anchor in the storm — they won\'t make the storm disappear, but they\'ll keep you oriented through the waves. Keep using these healthy approaches; they are your inner strength.' }
        },
        MM: {
            zh: { title: '意义重建型', name: '意义建构', description: '你在意义建构方面做得很好。你能够从失去的经历中找到意义，将思念转化为积极的行动，并且相信生活仍然可以有深刻的意义。意义建构不是为痛苦找借口，而是在痛苦中找到活下去的理由。你正在做的是最深沉的内在工作之一。' },
            en: { title: 'Meaning Reconstruction Type', name: 'Meaning Making', description: 'You\'re doing well with meaning-making. You can find meaning in loss, channel longing into positive action, and believe that life can still hold deep significance. Meaning-making isn\'t about making excuses for pain — it\'s about finding reasons to keep going through the pain. What you\'re doing is one of the deepest forms of inner work.' }
        },
        GI: {
            zh: { title: '成长整合型', name: '成长整合', description: '你在悲伤后的成长整合方面做得很好。你能够带着失去的一切继续前行，在悲伤中变得更加有同理心，更加清楚什么对你真正重要。悲伤整合不意味着遗忘——而是让失去成为你生命故事中有意义的一章。你正在将悲伤转化为深度、智慧和更宽广的心。' },
            en: { title: 'Growth Integration Type', name: 'Growth Integration', description: 'You\'re doing well with post-grief growth integration. You can move forward carrying everything you\'ve lost, becoming more empathetic through grief, and gaining clarity about what truly matters. Integrating grief doesn\'t mean forgetting — it means making loss a meaningful chapter in your life story. You\'re transforming grief into depth, wisdom, and a wider heart.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { GA: { total: 0, count: 0 }, CM: { total: 0, count: 0 }, MM: { total: 0, count: 0 }, GI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { GA: dims.GA.total, CM: dims.CM.total, MM: dims.MM.total, GI: dims.GI.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'GA', zh: '悲伤觉察', score: percentages.GA },
                { name: 'CM', zh: '应对机制', score: percentages.CM },
                { name: 'MM', zh: '意义建构', score: percentages.MM },
                { name: 'GI', zh: '成长整合', score: percentages.GI }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的悲伤处理方式', disclaimer: '本测试仅供参考，帮助你了解自己在悲伤处理方面的状态。悲伤是人类最深层的情感之一，处理悲伤需要时间和耐心。如果你正在经历深度悲伤，请不要犹豫寻求专业心理咨询的帮助。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Grief Processing Style', disclaimer: 'This test is for reference only, helping you understand your grief processing patterns. Grief is one of the deepest human emotions, and processing it takes time and patience. If you\'re experiencing deep grief, please don\'t hesitate to seek professional counseling support.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default GRIEF_PROCESSING_TEST;
