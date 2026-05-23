/**
 * 共情能力测试题库
 * Empathy Test
 */

var EMPATHY_TEST = {
    type: 'empathy',
    icon: '🫂',
    color: '#4CAF50',
    questions: [
        // Cognitive Empathy (认知共情) - CE
        {
            id: 1,
            dimension: 'CE',
            zh: "我能够理解他人行为背后的动机。",
            en: "I can understand the motivations behind others' behavior.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'CE',
            zh: "我善于从他人的角度看问题。",
            en: "I am good at seeing problems from others' perspectives.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'CE',
            zh: "我能够预测他人在特定情境中的反应。",
            en: "I can predict others' reactions in specific situations.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'CE',
            zh: "我能够理解他人的非语言信号（如表情、肢体语言）。",
            en: "I can understand others' non-verbal signals (e.g., expressions, body language).",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'CE',
            zh: "我能够理解与我不同背景的人的想法。",
            en: "I can understand the thoughts of people from different backgrounds than mine.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'CE',
            zh: "我能够准确地理解他人话语中的真实含义。",
            en: "I can accurately understand the true meaning behind others' words.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'CE',
            zh: "我能够在争论中理解对方的立场。",
            en: "I can understand the other party's position in an argument.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Affective Empathy (情感共情) - AE
        {
            id: 8,
            dimension: 'AE',
            zh: "当他人感到悲伤时，我也会感到难过。",
            en: "When others feel sad, I also feel sad.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'AE',
            zh: "看到他人受苦时，我会感到心疼。",
            en: "When I see others suffering, I feel their pain.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'AE',
            zh: "他人的情绪很容易影响到我。",
            en: "Others' emotions easily affect me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'AE',
            zh: "看到他人开心时，我也会感到快乐。",
            en: "When I see others happy, I also feel happy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'AE',
            zh: "我在观看感人电影时容易流泪。",
            en: "I easily cry when watching touching movies.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'AE',
            zh: "我能够感受到他人的焦虑和紧张。",
            en: "I can feel others' anxiety and tension.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'AE',
            zh: "他人的痛苦会让我感到不安。",
            en: "Others' pain makes me feel uneasy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Behavioral Empathy (行为共情) - BE
        {
            id: 15,
            dimension: 'BE',
            zh: "当我看到他人需要帮助时，我会主动伸出援手。",
            en: "When I see others need help, I proactively offer assistance.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'BE',
            zh: "我会主动安慰情绪低落的朋友。",
            en: "I proactively comfort friends who are feeling down.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'BE',
            zh: "我会花时间倾听他人的烦恼。",
            en: "I spend time listening to others' troubles.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'BE',
            zh: "我会参与慈善活动或志愿服务。",
            en: "I participate in charitable activities or volunteer service.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'BE',
            zh: "我会为他人感到高兴而表达祝贺。",
            en: "I express congratulations when I feel happy for others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'BE',
            zh: "我会在他人遇到困难时提供实际的支持。",
            en: "I provide practical support when others encounter difficulties.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { CE: 0, AE: 0, BE: 0 };
        let counts = { CE: 0, AE: 0, BE: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                const score = q.scores[answers[index]];
                scores[dimension] += score;
                counts[dimension]++;
            }
        });

        // Calculate percentages for each dimension
        const percentages = {
            CE: Math.round((scores.CE / (counts.CE * 5)) * 100),
            AE: Math.round((scores.AE / (counts.AE * 5)) * 100),
            BE: Math.round((scores.BE / (counts.BE * 5)) * 100)
        };

        // Calculate overall empathy score (average of all dimensions)
        const overallScore = Math.round((percentages.CE + percentages.AE + percentages.BE) / 3);

        return {
            scores: scores,
            percentages: percentages,
            overallScore: overallScore,
            dimensions: [
                { name: 'Cognitive Empathy', zh: '认知共情', score: percentages.CE },
                { name: 'Affective Empathy', zh: '情感共情', score: percentages.AE },
                { name: 'Behavioral Empathy', zh: '行为共情', score: percentages.BE }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "共情能力测试",
            subtitle: "评估你的共情能力水平",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。共情能力是可以通过学习和实践提高的，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的共情能力...",
            yourEmpathyScore: "你的共情能力分数",
            dimensions: "维度分析",
            tips: "提升建议"
        },
        en: {
            title: "Empathy Test",
            subtitle: "Assess Your Empathy Level",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Empathy is a skill that can be improved through learning and practice. For professional help, please consult a psychologist.",
            loading: "Analyzing your empathy ability...",
            yourEmpathyScore: "Your Empathy Score",
            dimensions: "Dimension Analysis",
            tips: "Improvement Tips"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMPATHY_TEST;
}
