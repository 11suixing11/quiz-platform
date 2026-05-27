// @ts-nocheck
// Auto-converted from emotional-intelligence.js
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 情绪智力深度测试题库
 * Emotional Intelligence (Deep) Test
 */

const EMOTIONAL_INTELLIGENCE_TEST: any = {
    type: 'emotional-intelligence',
    icon: '🧩',
    color: '#3F51B5',
    questions: [
        // Self-awareness (自我意识) - SA
        {
            id: 1,
            dimension: 'SA',
            zh: "我能够准确识别自己当下的情绪状态。",
            en: "I can accurately identify my current emotional state.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'SA',
            zh: "我了解是什么触发了我的情绪变化。",
            en: "I understand what triggers my emotional changes.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'SA',
            zh: "我清楚自己的情绪如何影响我的思维和行为。",
            en: "I clearly understand how my emotions affect my thinking and behavior.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'SA',
            zh: "我能够觉察到自己情绪的细微变化。",
            en: "I can detect subtle changes in my emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'SA',
            zh: "我能够区分不同种类的负面情绪（如悲伤、愤怒、失望）。",
            en: "I can distinguish between different types of negative emotions (e.g., sadness, anger, disappointment).",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'SA',
            zh: "我了解自己在压力下的情绪反应模式。",
            en: "I understand my emotional response patterns under pressure.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'SA',
            zh: "我知道自己的情绪弱点在哪里。",
            en: "I know where my emotional vulnerabilities lie.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'SA',
            zh: "我能够诚实地面对自己不愿承认的情绪。",
            en: "I can honestly face emotions I am reluctant to admit.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Self-regulation (自我调节) - SR
        {
            id: 9,
            dimension: 'SR',
            zh: "当我感到愤怒时，我能够在冲动行事之前冷静下来。",
            en: "When I feel angry, I can calm down before acting impulsively.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'SR',
            zh: "我能够控制自己的情绪爆发。",
            en: "I can control my emotional outbursts.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'SR',
            zh: "面对挫折时，我能够保持积极的心态。",
            en: "When facing setbacks, I can maintain a positive attitude.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'SR',
            zh: "我能够从负面情绪中快速恢复。",
            en: "I can quickly recover from negative emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'SR',
            zh: "我能够在紧张的环境中保持冷静。",
            en: "I can remain calm in tense environments.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'SR',
            zh: "我能够有效地处理焦虑情绪。",
            en: "I can effectively deal with anxious emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'SR',
            zh: "我能够适应情绪上的变化而不失去平衡。",
            en: "I can adapt to emotional changes without losing balance.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'SR',
            zh: "我能够在情绪激动时暂停，理性思考后再做决定。",
            en: "When emotionally charged, I can pause and think rationally before making decisions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Motivation (动机) - MO
        {
            id: 17,
            dimension: 'MO',
            zh: "即使面对困难，我也能保持前进的动力。",
            en: "Even when facing difficulties, I can maintain the motivation to move forward.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'MO',
            zh: "我能够为了长远目标而延迟满足。",
            en: "I can delay gratification for long-term goals.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'MO',
            zh: "我对自己热爱的事情充满热情和能量。",
            en: "I am full of passion and energy for things I love.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'MO',
            zh: "我相信自己有能力实现目标。",
            en: "I believe I have the ability to achieve my goals.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 21,
            dimension: 'MO',
            zh: "我能够从失败中恢复并继续努力。",
            en: "I can recover from failure and continue striving.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'MO',
            zh: "我做事有明确的目标和计划。",
            en: "I have clear goals and plans for what I do.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'MO',
            zh: "我能够在面对困难时不轻易放弃。",
            en: "I can persevere in the face of difficulties without giving up easily.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Social Skills (社交技能) - SS
        {
            id: 24,
            dimension: 'SS',
            zh: "我能够有效地倾听他人的想法和感受。",
            en: "I can effectively listen to others' thoughts and feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 25,
            dimension: 'SS',
            zh: "我能够清晰地表达自己的观点而不冒犯他人。",
            en: "I can clearly express my views without offending others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'SS',
            zh: "我能够有效地解决人际冲突。",
            en: "I can effectively resolve interpersonal conflicts.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'SS',
            zh: "我能够与不同类型的人建立良好的关系。",
            en: "I can build good relationships with different types of people.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'SS',
            zh: "我能够在团队中发挥积极作用。",
            en: "I can play an active role in a team.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 29,
            dimension: 'SS',
            zh: "我能够理解并回应他人的非语言信号。",
            en: "I can understand and respond to others' non-verbal cues.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 30,
            dimension: 'SS',
            zh: "我善于合作，能够与他人达成共识。",
            en: "I am good at cooperating and can reach consensus with others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { SA: 0, SR: 0, MO: 0, SS: 0 };
        let counts = { SA: 0, SR: 0, MO: 0, SS: 0 };

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
            SA: Math.round((scores.SA / (counts.SA * 5)) * 100),
            SR: Math.round((scores.SR / (counts.SR * 5)) * 100),
            MO: Math.round((scores.MO / (counts.MO * 5)) * 100),
            SS: Math.round((scores.SS / (counts.SS * 5)) * 100)
        };

        // Calculate overall EQ score (average of all dimensions)
        const overallScore = Math.round((percentages.SA + percentages.SR + percentages.MO + percentages.SS) / 4);

        return {
            scores: scores,
            percentages: percentages,
            overallScore: overallScore,
            dimensions: [
                { name: 'Self-awareness', zh: '自我意识', score: percentages.SA },
                { name: 'Self-regulation', zh: '自我调节', score: percentages.SR },
                { name: 'Motivation', zh: '动机', score: percentages.MO },
                { name: 'Social Skills', zh: '社交技能', score: percentages.SS }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "情绪智力深度测试",
            subtitle: "全面评估你的情绪智力水平",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。情绪智力是可以通过学习和实践提高的能力，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的情绪智力...",
            yourEIScore: "你的情绪智力分数",
            dimensions: "维度分析",
            tips: "提升建议"
        },
        en: {
            title: "Emotional Intelligence Deep Test",
            subtitle: "Comprehensively Assess Your Emotional Intelligence",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Emotional intelligence is a skill that can be improved through learning and practice. For professional help, please consult a psychologist.",
            loading: "Analyzing your emotional intelligence...",
            yourEIScore: "Your Emotional Intelligence Score",
            dimensions: "Dimension Analysis",
            tips: "Improvement Tips"
        }
    }
};

// Export

export default EMOTIONAL_INTELLIGENCE_TEST;
