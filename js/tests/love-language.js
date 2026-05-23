/**
 * 爱情语言测试题库
 * Love Languages Test
 */

const LOVE_LANGUAGE_TEST = {
    type: 'love-language',
    icon: '💕',
    color: '#E91E63',
    questions: [
        // Words of Affirmation (肯定言辞)
        {
            id: 1,
            dimension: 'WA',
            zh: "当伴侣对我说'我爱你'时，我感到最被爱。",
            en: "I feel most loved when my partner says 'I love you'.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'WA',
            zh: "我喜欢听到伴侣对我的赞美和肯定。",
            en: "I like to hear compliments and affirmation from my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'WA',
            zh: "伴侣的鼓励话语能让我充满力量。",
            en: "Encouraging words from my partner give me strength.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'WA',
            zh: "我喜欢伴侣给我写情书或发甜蜜的短信。",
            en: "I like when my partner writes me love letters or sends sweet messages.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'WA',
            zh: "当伴侣在别人面前夸奖我时，我感到特别开心。",
            en: "I feel especially happy when my partner praises me in front of others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'WA',
            zh: "伴侣的批评和指责会让我特别受伤。",
            en: "Criticism and blame from my partner hurts me deeply.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Acts of Service (服务行动)
        {
            id: 7,
            dimension: 'AS',
            zh: "当伴侣帮我做家务时，我感到被爱。",
            en: "I feel loved when my partner helps with household chores.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'AS',
            zh: "伴侣为我做饭或准备食物让我感到温暖。",
            en: "My partner cooking or preparing food for me makes me feel warm.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'AS',
            zh: "当伴侣主动帮我解决问题时，我感到被关心。",
            en: "I feel cared for when my partner proactively helps me solve problems.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'AS',
            zh: "伴侣为我跑腿或处理琐事让我感到被重视。",
            en: "My partner running errands or handling chores for me makes me feel valued.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'AS',
            zh: "当伴侣在我忙碌时主动分担工作，我感到被支持。",
            en: "I feel supported when my partner proactively shares my workload when I'm busy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'AS',
            zh: "伴侣的懒惰和不作为会让我感到不被爱。",
            en: "My partner's laziness and inaction makes me feel unloved.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Receiving Gifts (接受礼物)
        {
            id: 13,
            dimension: 'RG',
            zh: "收到伴侣的礼物会让我感到被爱。",
            en: "Receiving gifts from my partner makes me feel loved.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'RG',
            zh: "伴侣记得特殊日子并送我礼物让我感到被重视。",
            en: "My partner remembering special days and giving me gifts makes me feel valued.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'RG',
            zh: "即使是很小的礼物，只要来自伴侣，我都会感到开心。",
            en: "Even small gifts from my partner make me happy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'RG',
            zh: "伴侣的礼物让我感到被思念和珍惜。",
            en: "Gifts from my partner make me feel missed and cherished.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'RG',
            zh: "当伴侣忘记送我生日礼物时，我会感到失落。",
            en: "I feel disappointed when my partner forgets to give me a birthday gift.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'RG',
            zh: "伴侣的礼物代表了他对我的爱和关心。",
            en: "Gifts from my partner represent his love and care for me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Quality Time (高质量时间)
        {
            id: 19,
            dimension: 'QT',
            zh: "我最享受和伴侣一起度过的时光。",
            en: "I enjoy the time spent with my partner the most.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'QT',
            zh: "伴侣全神贯注地陪伴我，让我感到被爱。",
            en: "My partner's undivided attention makes me feel loved.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 21,
            dimension: 'QT',
            zh: "我喜欢和伴侣一起散步、聊天或看电影。",
            en: "I enjoy walking, talking, or watching movies with my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'QT',
            zh: "当伴侣玩手机或分心时，我感到不被重视。",
            en: "I feel unimportant when my partner is on their phone or distracted.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'QT',
            zh: "伴侣主动安排约会让我感到被爱。",
            en: "My partner proactively planning dates makes me feel loved.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'QT',
            zh: "我喜欢和伴侣分享我的想法和感受。",
            en: "I like to share my thoughts and feelings with my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Physical Touch (身体接触)
        {
            id: 25,
            dimension: 'PT',
            zh: "伴侣的拥抱和亲吻让我感到被爱。",
            en: "Hugs and kisses from my partner make me feel loved.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'PT',
            zh: "我喜欢和伴侣牵手或依偎在一起。",
            en: "I like holding hands or cuddling with my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'PT',
            zh: "伴侣的身体接触让我感到安全和温暖。",
            en: "Physical contact from my partner makes me feel safe and warm.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'PT',
            zh: "当伴侣长时间不碰我时，我感到疏远。",
            en: "I feel distant when my partner doesn't touch me for a long time.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 29,
            dimension: 'PT',
            zh: "伴侣轻拍我的背或肩膀能让我感到被支持。",
            en: "My partner patting my back or shoulder makes me feel supported.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 30,
            dimension: 'PT',
            zh: "我喜欢和伴侣有亲密的身体接触。",
            en: "I enjoy intimate physical contact with my partner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 爱情语言描述
    languages: {
        WA: {
            zh: {
                name: "肯定言辞",
                description: "你的主要爱情语言是肯定言辞。对你来说，听到伴侣的赞美、鼓励和爱的表达是最能让你感到被爱的方式。言语的力量对你而言无比强大。",
                tips: ["多对伴侣说'我爱你'", "经常赞美和肯定伴侣", "写情书或发甜蜜短信", "在别人面前夸奖伴侣"]
            },
            en: {
                name: "Words of Affirmation",
                description: "Your primary love language is Words of Affirmation. For you, hearing your partner's praise, encouragement, and expressions of love is the way that makes you feel most loved. The power of words is incredibly strong for you.",
                tips: ["Say 'I love you' often", "Frequently praise and affirm your partner", "Write love letters or sweet messages", "Praise your partner in front of others"]
            }
        },
        AS: {
            zh: {
                name: "服务行动",
                description: "你的主要爱情语言是服务行动。对你来说，伴侣通过实际行动来表达爱意是最能让你感到被爱的方式。'行动胜于言辞'是你的信条。",
                tips: ["主动帮助伴侣做家务", "为伴侣准备食物", "主动解决问题", "分担伴侣的工作"]
            },
            en: {
                name: "Acts of Service",
                description: "Your primary love language is Acts of Service. For you, your partner expressing love through practical actions is the way that makes you feel most loved. 'Actions speak louder than words' is your motto.",
                tips: ["Help with household chores", "Prepare food for your partner", "Proactively solve problems", "Share your partner's workload"]
            }
        },
        RG: {
            zh: {
                name: "接受礼物",
                description: "你的主要爱情语言是接受礼物。对你来说，收到伴侣的礼物是最能让你感到被爱的方式。礼物代表了伴侣的思念和珍惜。",
                tips: ["记住特殊日子并送礼物", "即使是很小的礼物也很重要", "让礼物代表你的思念", "不要忘记重要纪念日"]
            },
            en: {
                name: "Receiving Gifts",
                description: "Your primary love language is Receiving Gifts. For you, receiving gifts from your partner is the way that makes you feel most loved. Gifts represent your partner's thoughts and cherishment.",
                tips: ["Remember special days and give gifts", "Even small gifts are important", "Let gifts represent your thoughts", "Don't forget important anniversaries"]
            }
        },
        QT: {
            zh: {
                name: "高质量时间",
                description: "你的主要爱情语言是高质量时间。对你来说，和伴侣共度专注、有质量的时光是最能让你感到被爱的方式。你重视的是陪伴的质量而非数量。",
                tips: ["安排专属的约会时间", "放下手机，全神贯注陪伴", "一起散步、聊天或看电影", "主动安排有意义的活动"]
            },
            en: {
                name: "Quality Time",
                description: "Your primary love language is Quality Time. For you, spending focused, quality time with your partner is the way that makes you feel most loved. You value the quality of companionship over quantity.",
                tips: ["Schedule dedicated date time", "Put down your phone and be fully present", "Walk, talk, or watch movies together", "Plan meaningful activities"]
            }
        },
        PT: {
            zh: {
                name: "身体接触",
                description: "你的主要爱情语言是身体接触。对你来说，伴侣的身体接触是最能让你感到被爱的方式。拥抱、亲吻和牵手对你而言意义重大。",
                tips: ["多拥抱和亲吻伴侣", "牵手或依偎在一起", "用身体接触表达支持", "保持亲密的身体接触"]
            },
            en: {
                name: "Physical Touch",
                description: "Your primary love language is Physical Touch. For you, physical contact from your partner is the way that makes you feel most loved. Hugs, kisses, and holding hands are incredibly meaningful to you.",
                tips: ["Hug and kiss your partner often", "Hold hands or cuddle together", "Use physical touch to show support", "Maintain intimate physical contact"]
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { WA: 0, AS: 0, RG: 0, QT: 0, PT: 0 };
        let counts = { WA: 0, AS: 0, RG: 0, QT: 0, PT: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                const score = q.scores[answers[index]];
                scores[dimension] += score;
                counts[dimension]++;
            }
        });

        // Calculate percentages (each dimension has 6 questions, max 30 points)
        const percentages = {
            WA: Math.round((scores.WA / (counts.WA * 5)) * 100),
            AS: Math.round((scores.AS / (counts.AS * 5)) * 100),
            RG: Math.round((scores.RG / (counts.RG * 5)) * 100),
            QT: Math.round((scores.QT / (counts.QT * 5)) * 100),
            PT: Math.round((scores.PT / (counts.PT * 5)) * 100)
        };

        // Find primary and secondary love languages
        const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
        const primary = sorted[0][0];
        const secondary = sorted[1][0];

        return {
            scores: scores,
            percentages: percentages,
            primary: primary,
            secondary: secondary,
            dimensions: [
                { name: 'WA', zh: '肯定言辞', score: percentages.WA },
                { name: 'AS', zh: '服务行动', score: percentages.AS },
                { name: 'RG', zh: '接受礼物', score: percentages.RG },
                { name: 'QT', zh: '高质量时间', score: percentages.QT },
                { name: 'PT', zh: '身体接触', score: percentages.PT }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "爱情语言测试",
            subtitle: "了解你的爱情表达方式",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。爱情语言是表达和感受爱的方式，如需专业帮助，请咨询情感咨询师。",
            loading: "正在分析你的答案...",
            yourLoveLanguage: "你的爱情语言",
            primary: "主要爱情语言",
            secondary: "次要爱情语言",
            dimensions: "维度分析"
        },
        en: {
            title: "Love Languages Test",
            subtitle: "Discover How You Express Love",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Love languages are ways of expressing and感受 love. For professional help, please consult a relationship counselor.",
            loading: "Analyzing your answers...",
            yourLoveLanguage: "Your Love Language",
            primary: "Primary Love Language",
            secondary: "Secondary Love Language",
            dimensions: "Dimension Analysis"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOVE_LANGUAGE_TEST;
}
