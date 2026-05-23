/**
 * 孤独感测试题库
 * Loneliness Test
 */

var LONELINESS_TEST = {
    type: 'loneliness',
    icon: '🌧️',
    color: '#607D8B',
    questions: [
        {
            id: 1,
            dimension: 'LO',
            zh: "我经常感到与周围的人格格不入。",
            en: "I often feel out of place among the people around me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'LO',
            zh: "我觉得没有人真正了解我。",
            en: "I feel that no one truly understands me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'LO',
            zh: "我渴望有更多的社交互动。",
            en: "I long for more social interaction.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'LO',
            zh: "我感到自己缺乏亲密的朋友。",
            en: "I feel I lack close friends.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'LO',
            zh: "我经常独自一人度过空闲时间。",
            en: "I often spend my free time alone.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'LO',
            zh: "我觉得自己在需要帮助时没有人可以依靠。",
            en: "I feel I have no one to rely on when I need help.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'LO',
            zh: "我在人群中也常常感到孤独。",
            en: "I often feel lonely even when surrounded by people.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'LO',
            zh: "我觉得自己的社交生活不够充实。",
            en: "I feel my social life is not fulfilling enough.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'LO',
            zh: "我很少收到朋友的邀约或问候。",
            en: "I rarely receive invitations or greetings from friends.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'LO',
            zh: "我觉得与他人建立深层次的关系很困难。",
            en: "I find it difficult to build deep relationships with others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'LO',
            zh: "我经常感到被他人忽视或遗忘。",
            en: "I often feel ignored or forgotten by others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'LO',
            zh: "我觉得自己不属于任何社交圈子。",
            en: "I feel I do not belong to any social circle.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'LO',
            zh: "我觉得分享自己的感受时没有人会认真倾听。",
            en: "I feel no one will listen attentively when I share my feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'LO',
            zh: "我在节假日或特殊日子经常感到格外孤独。",
            en: "I often feel especially lonely during holidays or special occasions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'LO',
            zh: "我常常羡慕那些拥有亲密朋友圈的人。",
            en: "I often envy people who have close friend groups.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'LO',
            zh: "我觉得自己很难融入新的社交环境。",
            en: "I find it hard to fit into new social environments.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'LO',
            zh: "我经常感到内心空虚。",
            en: "I often feel an inner emptiness.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'LO',
            zh: "我觉得自己的存在对他人来说不重要。",
            en: "I feel my existence is not important to others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'LO',
            zh: "我宁愿待在家里也不愿意参加社交活动。",
            en: "I would rather stay at home than attend social activities.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'LO',
            zh: "我觉得孤独已经影响了我的身心健康。",
            en: "I feel loneliness has affected my physical and mental health.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果类型
    resultTypes: {
        low: {
            zh: {
                title: "低孤独感",
                name: "低孤独",
                description: "你的孤独感水平较低。你拥有良好的社交关系和支持网络，能够在日常生活中获得足够的社交满足感。继续保持与他人的联系，珍惜你的人际关系。",
                suggestions: ["继续保持现有的社交关系", "定期与朋友和家人联系", "拓展新的社交圈", "帮助他人建立社交联系"]
            },
            en: {
                title: "Low Loneliness",
                name: "Low Loneliness",
                description: "Your loneliness level is relatively low. You have good social relationships and a support network, able to obtain enough social satisfaction in daily life. Continue maintaining connections with others and cherish your relationships.",
                suggestions: ["Continue maintaining existing social relationships", "Regularly contact friends and family", "Expand new social circles", "Help others build social connections"]
            },
            range: [0, 30]
        },
        medium: {
            zh: {
                title: "中等孤独感",
                name: "中等孤独",
                description: "你的孤独感处于中等水平。你有时会感到孤独，但并非持续不断。尝试主动参与更多的社交活动，培养新的兴趣爱好，可能会帮助你改善这种情况。",
                suggestions: ["主动参加社交活动", "培养新的兴趣爱好", "加入社区或志愿者组织", "尝试与老朋友重新建立联系"],
                range: [31, 60]
            },
            en: {
                title: "Moderate Loneliness",
                name: "Moderate Loneliness",
                description: "Your loneliness level is moderate. You sometimes feel lonely, but not continuously. Try actively participating in more social activities and cultivating new hobbies, which may help improve your situation.",
                suggestions: ["Actively participate in social activities", "Cultivate new hobbies and interests", "Join community or volunteer organizations", "Try reconnecting with old friends"],
                range: [31, 60]
            }
        },
        high: {
            zh: {
                title: "高孤独感",
                name: "高孤独",
                description: "你的孤独感水平较高。你可能经常感到与他人疏离和不被理解。孤独感是人类普遍的体验，但长期的孤独感可能影响身心健康。建议你寻求专业帮助，并尝试逐步建立社交联系。",
                suggestions: ["寻求专业心理咨询", "从小的社交互动开始", "参加支持小组", "考虑养宠物作为陪伴", "学习社交技巧"],
                range: [61, 100]
            },
            en: {
                title: "High Loneliness",
                name: "High Loneliness",
                description: "Your loneliness level is relatively high. You may often feel disconnected from others and misunderstood. Loneliness is a universal human experience, but prolonged loneliness can affect physical and mental health. Consider seeking professional help and try gradually building social connections.",
                suggestions: ["Seek professional counseling", "Start with small social interactions", "Join support groups", "Consider getting a pet for companionship", "Learn social skills"],
                range: [61, 100]
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let totalScore = 0;
        let answeredCount = 0;

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                totalScore += q.scores[answers[index]];
                answeredCount++;
            }
        });

        // Calculate score (0-100)
        const maxPossible = answeredCount * 5;
        const score = answeredCount > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;

        // Determine result type
        let resultType;
        if (score <= 30) {
            resultType = 'low';
        } else if (score <= 60) {
            resultType = 'medium';
        } else {
            resultType = 'high';
        }

        return {
            score: score,
            resultType: resultType
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "孤独感测试",
            subtitle: "评估你的社交孤独程度",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。孤独感是一种常见的心理体验，如果长期感到孤独并影响生活，建议寻求专业帮助。",
            loading: "正在评估你的孤独感水平...",
            yourLonelinessScore: "你的孤独感指数",
            scoreRange: "分数范围",
            suggestions: "改善建议"
        },
        en: {
            title: "Loneliness Test",
            subtitle: "Assess Your Social Loneliness Level",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Loneliness is a common psychological experience. If you feel persistently lonely and it affects your life, consider seeking professional help.",
            loading: "Assessing your loneliness level...",
            yourLonelinessScore: "Your Loneliness Index",
            scoreRange: "Score Range",
            suggestions: "Improvement Suggestions"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LONELINESS_TEST;
}
