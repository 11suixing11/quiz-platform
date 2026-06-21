// @ts-nocheck
// Attachment Patterns Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const ATTACHMENT_PATTERNS_TEST: any = {
    type: 'attachment-patterns', icon: '💞', color: '#E91E63',
    questions: [
        // Secure (安全型) - SE - 5 questions
        { id: 1, dimension: 'SE', zh: '当伴侣不在身边时，我仍然感到内心安定。', en: 'I feel emotionally grounded even when my partner is not around.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SE', zh: '我相信冲突是关系中正常的一部分，可以一起解决。', en: 'I believe conflict is a normal part of relationships that can be resolved together.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SE', zh: '我能够自在地向伴侣表达脆弱的情感。', en: 'I can comfortably express vulnerable emotions to my partner.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SE', zh: '当伴侣需要个人空间时，我不会感到被抛弃。', en: 'I do not feel abandoned when my partner needs personal space.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'SE', zh: '我能在保持独立的同时享受亲密关系。', en: 'I can enjoy closeness while maintaining my independence.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Anxious (焦虑型) - AN - 5 questions
        { id: 6, dimension: 'AN', zh: '我常常担心伴侣对我的感情会突然消失。', en: 'I often worry that my partner\'s feelings for me will suddenly vanish.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'AN', zh: '伴侣稍有冷淡，我就会反复思考自己是否做错了什么。', en: 'When my partner seems slightly distant, I replay everything wondering what I did wrong.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'AN', zh: '我需要伴侣经常用言语或行动表达爱意才能安心。', en: 'I need my partner to frequently express love through words or actions to feel secure.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'AN', zh: '当伴侣回复消息变慢时，我会感到强烈的不安。', en: 'I feel intense unease when my partner takes longer than usual to reply.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AN', zh: '我害怕在关系中投入太多最终会受到伤害。', en: 'I fear that investing too much in a relationship will eventually lead to being hurt.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Avoidant (回避型) - AV - 5 questions
        { id: 11, dimension: 'AV', zh: '当伴侣想要更多亲密时，我本能地想要后退。', en: 'I instinctively pull back when my partner wants more closeness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AV', zh: '我觉得过多地分享内心感受是一种软弱的表现。', en: 'I feel that sharing too many inner feelings is a sign of weakness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'AV', zh: '我更习惯自己处理问题，而不是向伴侣求助。', en: 'I prefer handling problems on my own rather than asking my partner for help.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'AV', zh: '长时间的深入情感交流让我感到疲惫。', en: 'Extended deep emotional conversations leave me feeling drained.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'AV', zh: '我有时会觉得伴侣对我期望太多。', en: 'I sometimes feel my partner expects too much from me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Disorganized (混乱型) - DI - 5 questions
        { id: 16, dimension: 'DI', zh: '我在关系中经常在极度渴望亲密和突然想要远离之间摇摆。', en: 'I often swing between desperately wanting closeness and suddenly wanting distance.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'DI', zh: '我有时会无意识地破坏一段进展顺利的关系。', en: 'I sometimes unconsciously sabotage a relationship that is going well.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'DI', zh: '我对伴侣的情绪反应常常让我自己都感到困惑。', en: 'My emotional reactions to my partner often confuse even myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'DI', zh: '我很难确定自己在关系中到底想要什么。', en: 'I find it hard to know what I actually want in a relationship.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'DI', zh: '我经历过一些让我难以完全信任他人的事件。', en: 'I have experienced events that make it hard to fully trust others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        SE: { color: '#4A8B5A', mood: '港湾 · 信任 · 自由', quote_zh: '你懂得爱是一种自由的选择，而非紧握不放。', quote_en: 'You understand love is a free choice, not something to cling to.' },
        AN: { color: '#9C27B0', mood: '潮汐 · 等待 · 渴望', quote_zh: '你的心是一座永远等待归人的灯塔。', quote_en: 'Your heart is a lighthouse forever waiting for someone to come home.' },
        AV: { color: '#3F51B5', mood: '边界 · 独立 · 距离', quote_zh: '你用独立筑起堡垒，却偶尔也望向窗外的温暖。', quote_en: 'You build fortresses of independence, yet occasionally glance at the warmth outside.' },
        DI: { color: '#7B68AE', mood: '矛盾 · 拉扯 · 寻找', quote_zh: '你同时渴望和恐惧亲密，在矛盾中寻找自己的平衡点。', quote_en: 'You crave and fear intimacy simultaneously, searching for your own balance in the contradiction.' }
    },

    types: {
        SE: {
            zh: { title: '安全型依恋模式', name: '安全型', description: '你的主导依恋模式是安全型。你在关系中感到自在和自信，能够平衡亲密与独立。你信任伴侣的善意，也能健康地表达自己的需求。当关系出现问题时，你倾向于用开放和建设性的方式去面对。安全型依恋者通常拥有更稳定和满意的关系，也更容易帮助伴侣建立安全感。' },
            en: { title: 'Secure Attachment Pattern', name: 'Secure', description: 'Your dominant attachment pattern is secure. You feel at ease and confident in relationships, balancing closeness with independence. You trust your partner\'s good intentions and can express your needs healthily. When issues arise, you tend to face them openly and constructively. Secure attachers typically enjoy more stable and satisfying relationships, and are better able to help partners feel secure too.' }
        },
        AN: {
            zh: { title: '焦虑型依恋模式', name: '焦虑型', description: '你的主导依恋模式是焦虑型。你非常珍视亲密关系，但内心深处常常担心失去。你可能需要频繁的确认和保证，对伴侣的微小变化特别敏感。这种模式通常源于早期照顾者的不稳定回应。认识到这一点是成长的开始——你值得被爱，而且你的需求是合理的。练习自我安抚和正念可以帮助你逐步建立内在的安全感。' },
            en: { title: 'Anxious Attachment Pattern', name: 'Anxious', description: 'Your dominant attachment pattern is anxious. You deeply cherish close relationships but often worry about losing them underneath. You may need frequent reassurance and are especially sensitive to subtle changes in your partner. This pattern often stems from inconsistent responses from early caregivers. Recognizing this is the beginning of growth — you are worthy of love, and your needs are valid. Practicing self-soothing and mindfulness can help you gradually build inner security.' }
        },
        AV: {
            zh: { title: '回避型依恋模式', name: '回避型', description: '你的主导依恋模式是回避型。你重视自主和独立，习惯自我依靠。当关系变得过于亲密时，你可能会本能地拉开距离。这并不意味着你不渴望连接——只是表达和接受亲密的方式不同。这种模式可能源于早期被忽视或被鼓励独立的经历。尝试在安全的关系中逐步敞开心扉，可以让你体验到亲密的美好而不失去自我。' },
            en: { title: 'Avoidant Attachment Pattern', name: 'Avoidant', description: 'Your dominant attachment pattern is avoidant. You value autonomy and independence, accustomed to relying on yourself. When relationships become too close, you may instinctively pull away. This doesn\'t mean you don\'t crave connection — you just express and receive closeness differently. This pattern may stem from early experiences of being overlooked or encouraged to be independent. Gradually opening up in safe relationships can let you experience the beauty of closeness without losing yourself.' }
        },
        DI: {
            zh: { title: '混乱型依恋模式', name: '混乱型', description: '你的主导依恋模式是混乱型。你同时渴望和恐惧亲密关系，在关系中表现出看似矛盾的行为——进一步又退一步。这种模式通常源于早期的创伤性或不一致的照顾经历。理解这种模式不需要自我批判，而是需要温柔的自我觉察。寻求专业心理咨询可以帮助你整合内心的矛盾，在关系中找到更稳定的立足点。你值得拥有安全而温暖的关系。' },
            en: { title: 'Disorganized Attachment Pattern', name: 'Disorganized', description: 'Your dominant attachment pattern is disorganized. You simultaneously crave and fear intimate relationships, displaying seemingly contradictory behavior — one step forward, one step back. This pattern often stems from early traumatic or inconsistent caregiving experiences. Understanding this pattern requires not self-criticism but gentle self-awareness. Professional counseling can help you integrate inner contradictions and find a more stable footing in relationships. You deserve safe and warm connections.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { SE: { total: 0, count: 0 }, AN: { total: 0, count: 0 }, AV: { total: 0, count: 0 }, DI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { SE: dims.SE.total, AN: dims.AN.total, AV: dims.AV.total, DI: dims.DI.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'SE', zh: '安全型', score: percentages.SE },
                { name: 'AN', zh: '焦虑型', score: percentages.AN },
                { name: 'AV', zh: '回避型', score: percentages.AV },
                { name: 'DI', zh: '混乱型', score: percentages.DI }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的依恋模式', disclaimer: '本测试仅供参考，帮助你了解自己在亲密关系中的依恋模式。依恋风格是可以改变的，了解自己的模式是改善关系的第一步。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Attachment Pattern', disclaimer: 'This test is for reference only, helping you understand your attachment patterns in relationships. Attachment styles can change — understanding your pattern is the first step to improving relationships.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default ATTACHMENT_PATTERNS_TEST;
