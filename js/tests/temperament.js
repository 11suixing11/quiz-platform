/**
 * 气质类型测试题库
 * Temperament Type Test
 */

var TEMPERAMENT_TEST = {
    type: 'temperament',
    icon: '🌡️',
    color: '#E91E63',
    questions: [
        // Sanguine (多血质)
        {
            id: 1,
            dimension: 'SA',
            zh: "我性格开朗，容易与人相处。",
            en: "I am cheerful and easy to get along with.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'SA',
            zh: "我对新事物充满好奇，喜欢尝试不同的体验。",
            en: "I am curious about new things and enjoy trying different experiences.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'SA',
            zh: "我能很快适应新环境和新的人际关系。",
            en: "I can quickly adapt to new environments and relationships.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'SA',
            zh: "我情绪变化快，但通常保持积极乐观。",
            en: "My emotions change quickly, but I generally stay positive and optimistic.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'SA',
            zh: "我喜欢社交活动，享受与人交谈的乐趣。",
            en: "I enjoy social activities and the pleasure of talking with people.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Choleric (胆汁质)
        {
            id: 6,
            dimension: 'CH',
            zh: "我做事果断，行动迅速。",
            en: "I am decisive and quick to act.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'CH',
            zh: "我喜欢接受挑战，面对困难时不会退缩。",
            en: "I like to accept challenges and don't back down when facing difficulties.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'CH',
            zh: "我有强烈的竞争意识，渴望成为最好的。",
            en: "I have a strong competitive spirit and desire to be the best.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'CH',
            zh: "我精力充沛，能够长时间保持高效率。",
            en: "I am energetic and can maintain high efficiency for long periods.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'CH',
            zh: "我性格直率，有话直说，不绕弯子。",
            en: "I am straightforward and say what I mean without beating around the bush.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Melancholic (抑郁质)
        {
            id: 11,
            dimension: 'ME',
            zh: "我做事非常细心，注重每一个细节。",
            en: "I am very careful and pay attention to every detail.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'ME',
            zh: "我有丰富的内心世界，喜欢深度思考。",
            en: "I have a rich inner world and enjoy deep thinking.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'ME',
            zh: "我对艺术和美学有敏锐的感受力。",
            en: "I have a keen sensitivity to art and aesthetics.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'ME',
            zh: "我追求完美，对自己要求很高。",
            en: "I pursue perfection and have high demands on myself.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'ME',
            zh: "我情绪体验深刻，有时会感到忧郁。",
            en: "I experience emotions deeply and sometimes feel melancholic.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // Phlegmatic (粘液质)
        {
            id: 16,
            dimension: 'PH',
            zh: "我性格温和，很少发脾气。",
            en: "I am mild-tempered and rarely lose my temper.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'PH',
            zh: "我做事有耐心，能够长时间专注于一件事。",
            en: "I am patient and can focus on one thing for a long time.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'PH',
            zh: "我喜欢平静有序的生活方式。",
            en: "I prefer a calm and orderly lifestyle.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'PH',
            zh: "我善于倾听，是朋友们信任的倾诉对象。",
            en: "I am a good listener and a trusted confidant for friends.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'PH',
            zh: "我不喜欢冒险，更倾向于稳定和安全的选择。",
            en: "I don't like risks and prefer stable and safe choices.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 气质类型描述
    types: {
        SA: {
            zh: {
                title: "多血质",
                name: "多血质",
                description: "多血质的人活泼好动，善于交际，反应灵敏。他们情绪外露，变化快，但通常保持乐观。他们适应能力强，喜欢新环境和新体验，但可能缺乏耐心和持久力。多血质的人通常善于社交，有感染力，是团队中的活跃分子。"
            },
            en: {
                title: "Sanguine",
                name: "Sanguine",
                description: "Sanguine individuals are lively, sociable, and quick to respond. They express their emotions openly, with quick changes, but generally remain optimistic. They adapt well to new environments and experiences but may lack patience and persistence. Sanguine people are typically good at socializing, charismatic, and active members of their teams."
            }
        },
        CH: {
            zh: {
                title: "胆汁质",
                name: "胆汁质",
                description: "胆汁质的人精力充沛，行动果断，有强烈的竞争意识。他们直率坦诚，有领导才能，喜欢接受挑战。他们目标明确，意志坚定，但可能过于急躁和专横。胆汁质的人通常有很强的执行力，善于推动项目进展。"
            },
            en: {
                title: "Choleric",
                name: "Choleric",
                description: "Choleric individuals are energetic, decisive, and highly competitive. They are straightforward, have leadership abilities, and enjoy taking on challenges. They are goal-oriented and strong-willed but may be too impatient and domineering. Choleric people typically have strong execution abilities and excel at driving projects forward."
            }
        },
        ME: {
            zh: {
                title: "抑郁质",
                name: "抑郁质",
                description: "抑郁质的人敏感细腻，有丰富的内心世界。他们追求完美，注重细节，有深度思考的能力。他们对艺术和美学有敏锐的感受力，情感体验深刻。抑郁质的人通常有创造力，善于分析，但可能过于敏感和自我批评。"
            },
            en: {
                title: "Melancholic",
                name: "Melancholic",
                description: "Melancholic individuals are sensitive and delicate, with rich inner worlds. They pursue perfection, pay attention to details, and have the ability to think deeply. They have keen sensitivity to art and aesthetics, with profound emotional experiences. Melancholic people are typically creative and analytical but may be overly sensitive and self-critical."
            }
        },
        PH: {
            zh: {
                title: "粘液质",
                name: "粘液质",
                description: "粘液质的人温和稳定，有耐心和毅力。他们做事有条不紊，善于倾听，是可靠的朋友和伙伴。他们不喜欢冒险，追求稳定和安全，情绪平稳。粘液质的人通常有很好的自控力，善于维持和谐，但可能缺乏主动性和激情。"
            },
            en: {
                title: "Phlegmatic",
                name: "Phlegmatic",
                description: "Phlegmatic individuals are calm and stable, with patience and perseverance. They work methodically, are good listeners, and are reliable friends and partners. They don't like risks, pursue stability and safety, and maintain emotional equilibrium. Phlegmatic people typically have good self-control and excel at maintaining harmony but may lack initiative and passion."
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { SA: 0, CH: 0, ME: 0, PH: 0 };
        let counts = { SA: 0, CH: 0, ME: 0, PH: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                scores[dimension] += q.scores[answers[index]];
                counts[dimension]++;
            }
        });

        // Find dominant temperament
        let maxScore = 0;
        let dominantType = 'SA';
        for (let type in scores) {
            if (scores[type] > maxScore) {
                maxScore = scores[type];
                dominantType = type;
            }
        }

        // Calculate percentages
        let percentages = {};
        for (let type in scores) {
            const maxPossible = counts[type] * 5;
            percentages[type] = maxPossible > 0 ? Math.round((scores[type] / maxPossible) * 100) : 0;
        }

        return {
            type: dominantType,
            scores: scores,
            percentages: percentages
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "气质类型测试",
            subtitle: "了解你的气质类型",
            startBtn: "开始测试",
            nextBtn: "下一步",
            prevBtn: "上一步",
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。气质类型是理解个体差异的工具，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourType: "你的气质类型",
            typeDescription: "类型描述"
        },
        en: {
            title: "Temperament Type Test",
            subtitle: "Understand Your Temperament Type",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Temperament type is a tool for understanding individual differences. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourType: "Your Temperament Type",
            typeDescription: "Type Description"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TEMPERAMENT_TEST;
}
