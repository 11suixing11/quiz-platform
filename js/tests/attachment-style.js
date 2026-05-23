/**
 * 依恋风格测试题库
 * Attachment Style Test
 */

var ATTACHMENT_STYLE_TEST = {
    type: 'attachment-style',
    icon: '🔗',
    color: '#E91E63',
    questions: [
        // Secure (安全型) - SE
        {
            id: 1,
            dimension: 'SE',
            zh: "我很容易信任我的伴侣。",
            en: "I find it easy to trust my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'SE',
            zh: "我相信伴侣会在我需要时支持我。",
            en: "I believe my partner will support me when I need them.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'SE',
            zh: "我能够舒适地表达自己的情感需求。",
            en: "I can comfortably express my emotional needs.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'SE',
            zh: "我在亲密关系中感到安全和放松。",
            en: "I feel safe and relaxed in close relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'SE',
            zh: "我能够接受伴侣的不完美。",
            en: "I can accept my partner's imperfections.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'SE',
            zh: "我和伴侣分开时不会感到过度焦虑。",
            en: "I do not feel overly anxious when separated from my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'SE',
            zh: "我相信大多数人的本性是善良的。",
            en: "I believe most people are inherently good.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'SE',
            zh: "我能够在关系中保持独立性。",
            en: "I can maintain independence while in a relationship.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Anxious (焦虑型) - AN
        {
            id: 9,
            dimension: 'AN',
            zh: "我经常担心伴侣不再爱我。",
            en: "I often worry that my partner will stop loving me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'AN',
            zh: "我需要频繁地得到伴侣的肯定和保证。",
            en: "I need frequent reassurance from my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'AN',
            zh: "当伴侣没有及时回复我的消息时，我会感到不安。",
            en: "I feel uneasy when my partner does not reply to my messages promptly.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'AN',
            zh: "我害怕被伴侣抛弃。",
            en: "I fear being abandoned by my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'AN',
            zh: "我会过度分析伴侣的行为和言语。",
            en: "I tend to overanalyze my partner's behavior and words.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'AN',
            zh: "我在关系中经常感到嫉妒。",
            en: "I often feel jealous in relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'AN',
            zh: "我担心自己不够好，配不上伴侣。",
            en: "I worry that I am not good enough for my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'AN',
            zh: "当伴侣需要独处空间时，我会感到被拒绝。",
            en: "I feel rejected when my partner needs alone time.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Avoidant (回避型) - AV
        {
            id: 17,
            dimension: 'AV',
            zh: "我觉得亲密关系让我感到窒息。",
            en: "I feel suffocated by close relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'AV',
            zh: "我不喜欢依赖别人，也不喜欢别人依赖我。",
            en: "I do not like depending on others, nor do I like others depending on me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'AV',
            zh: "当关系变得太亲密时，我会想要退缩。",
            en: "I want to withdraw when a relationship becomes too close.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'AV',
            zh: "我更看重独立和自由，而不是亲密关系。",
            en: "I value independence and freedom more than intimate relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 21,
            dimension: 'AV',
            zh: "我很难向他人敞开心扉。",
            en: "I find it difficult to open up to others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'AV',
            zh: "我倾向于隐藏自己的真实感受。",
            en: "I tend to hide my true feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'AV',
            zh: "伴侣的过度关心让我感到不舒服。",
            en: "Excessive care from my partner makes me uncomfortable.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'AV',
            zh: "我在关系中保持情感距离感。",
            en: "I maintain emotional distance in relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Disorganized (混乱型) - DI
        {
            id: 25,
            dimension: 'DI',
            zh: "我既渴望亲密关系，又害怕亲密关系。",
            en: "I both crave and fear intimate relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'DI',
            zh: "我在关系中的情绪变化很大，时冷时热。",
            en: "My emotions in relationships fluctuate greatly, alternating between hot and cold.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'DI',
            zh: "我对伴侣的看法经常在理想化和贬低之间摇摆。",
            en: "My view of my partner swings between idealization and devaluation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'DI',
            zh: "我有时会做出自相矛盾的行为来测试伴侣。",
            en: "I sometimes act in contradictory ways to test my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 29,
            dimension: 'DI',
            zh: "我在关系中经常感到困惑和不确定。",
            en: "I often feel confused and uncertain in relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 30,
            dimension: 'DI',
            zh: "我很难维持稳定的亲密关系。",
            en: "I find it difficult to maintain stable intimate relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 依恋风格类型描述
    types: {
        SE: {
            zh: {
                title: "安全型依恋",
                name: "安全型",
                description: "你拥有安全型依恋风格。你在亲密关系中感到舒适和自信，能够信任伴侣，同时也保持自己的独立性。你能够健康地表达情感需求，并且在关系遇到困难时能够积极应对。安全型依恋者通常拥有更稳定、更满意的亲密关系。"
            },
            en: {
                title: "Secure Attachment",
                name: "Secure",
                description: "You have a secure attachment style. You feel comfortable and confident in intimate relationships, able to trust your partner while maintaining your own independence. You can healthily express emotional needs and actively cope when relationships face difficulties. Secure attachers typically have more stable and satisfying intimate relationships."
            }
        },
        AN: {
            zh: {
                title: "焦虑型依恋",
                name: "焦虑型",
                description: "你拥有焦虑型依恋风格。你非常渴望亲密关系，但常常担心被抛弃或不被爱。你可能需要频繁的肯定和保证，容易过度分析伴侣的行为。理解自己的依恋模式可以帮助你建立更安全的关系。"
            },
            en: {
                title: "Anxious Attachment",
                name: "Anxious",
                description: "You have an anxious attachment style. You deeply desire close relationships but often worry about being abandoned or unloved. You may need frequent reassurance and tend to overanalyze your partner's behavior. Understanding your attachment pattern can help you build more secure relationships."
            }
        },
        AV: {
            zh: {
                title: "回避型依恋",
                name: "回避型",
                description: "你拥有回避型依恋风格。你重视独立和自由，可能对过度亲密感到不舒服。你倾向于保持情感距离，难以完全敞开心扉。认识到这一模式可以帮助你在关系中找到更好的平衡。"
            },
            en: {
                title: "Avoidant Attachment",
                name: "Avoidant",
                description: "You have an avoidant attachment style. You value independence and freedom, and may feel uncomfortable with excessive closeness. You tend to maintain emotional distance and find it difficult to fully open up. Recognizing this pattern can help you find better balance in relationships."
            }
        },
        DI: {
            zh: {
                title: "混乱型依恋",
                name: "混乱型",
                description: "你拥有混乱型依恋风格。你可能同时渴望和害怕亲密关系，在关系中表现出矛盾的行为。这种模式通常源于早期经历中的不一致照顾。寻求专业支持可以帮助你理解和改善这种模式。"
            },
            en: {
                title: "Disorganized Attachment",
                name: "Disorganized",
                description: "You have a disorganized attachment style. You may simultaneously crave and fear intimate relationships, displaying contradictory behavior. This pattern often stems from inconsistent caregiving in early experiences. Seeking professional support can help you understand and improve this pattern."
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { SE: 0, AN: 0, AV: 0, DI: 0 };
        let counts = { SE: 0, AN: 0, AV: 0, DI: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                const score = q.scores[answers[index]];
                scores[dimension] += score;
                counts[dimension]++;
            }
        });

        // Calculate percentages for each type
        const percentages = {
            SE: Math.round((scores.SE / (counts.SE * 5)) * 100),
            AN: Math.round((scores.AN / (counts.AN * 5)) * 100),
            AV: Math.round((scores.AV / (counts.AV * 5)) * 100),
            DI: Math.round((scores.DI / (counts.DI * 5)) * 100)
        };

        // Find dominant type
        const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
        const dominantType = sorted[0][0];

        return {
            scores: scores,
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

    // UI 文本
    uiText: {
        zh: {
            title: "依恋风格测试",
            subtitle: "了解你在亲密关系中的依恋模式",
            startBtn: "开始测试",
            nextBtn: "下一题",
            prevBtn: "上一题",
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。依恋风格是可以改变的，了解自己的模式是改善关系的第一步。如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的依恋风格...",
            yourAttachmentStyle: "你的依恋风格",
            dominantType: "主导类型",
            dimensions: "维度分析"
        },
        en: {
            title: "Attachment Style Test",
            subtitle: "Discover Your Attachment Pattern in Relationships",
            startBtn: "Start Test",
            nextBtn: "Next",
            prevBtn: "Previous",
            submitBtn: "See Results",
            restartBtn: "Retake Test",
            shareBtn: "Share Results",
            homeBtn: "Home",
            progress: "Progress",
            question: "Question",
            of: "of",
            resultTitle: "Test Results",
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Attachment styles can change, and understanding your pattern is the first step to improving relationships. For professional help, please consult a psychologist.",
            loading: "Analyzing your attachment style...",
            yourAttachmentStyle: "Your Attachment Style",
            dominantType: "Dominant Type",
            dimensions: "Dimension Analysis"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ATTACHMENT_STYLE_TEST;
}
