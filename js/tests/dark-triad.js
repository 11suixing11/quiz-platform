/**
 * 黑暗三联征测试题库
 * Dark Triad Test
 */

var DARK_TRIAD_TEST = {
    type: 'dark-triad',
    icon: '🌑',
    color: '#424242',
    questions: [
        // N - Narcissism (自恋)
        {
            id: 1,
            dimension: 'N',
            zh: "我认为自己是一个特别的人，应该得到特殊对待。",
            en: "I think I am a special person who should receive special treatment.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'N',
            zh: "我喜欢成为众人关注的焦点。",
            en: "I like to be the center of attention.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'N',
            zh: "我经常幻想自己取得伟大的成就。",
            en: "I often fantasize about achieving great things.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'N',
            zh: "我觉得自己比大多数人更优秀。",
            en: "I feel I am superior to most people.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'N',
            zh: "我有权享受最好的东西。",
            en: "I deserve the best of everything.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'N',
            zh: "我喜欢展示自己的成就和才能。",
            en: "I like to show off my achievements and talents.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'N',
            zh: "我对别人的赞美和崇拜有强烈的需求。",
            en: "I have a strong need for admiration and worship from others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'N',
            zh: "我很难接受别人的批评。",
            en: "I find it hard to accept criticism from others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'N',
            zh: "我经常觉得自己被低估了。",
            en: "I often feel that I am underestimated.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // M - Machiavellianism (马基雅维利主义)
        {
            id: 10,
            dimension: 'M',
            zh: "为了达到目的，我可以使用各种手段。",
            en: "I can use various means to achieve my goals.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'M',
            zh: "我善于操纵他人来实现自己的目标。",
            en: "I am good at manipulating others to achieve my goals.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'M',
            zh: "我相信人性本恶，人们本质上是自私的。",
            en: "I believe human nature is inherently evil and people are fundamentally selfish.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'M',
            zh: "我认为在必要时说谎是可以接受的。",
            en: "I think lying is acceptable when necessary.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'M',
            zh: "我更关注实际利益，而不是道德原则。",
            en: "I focus more on practical benefits than moral principles.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'M',
            zh: "我会根据情况灵活调整我的行为和态度。",
            en: "I flexibly adjust my behavior and attitude according to the situation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'M',
            zh: "我认为信任他人是一种弱点。",
            en: "I think trusting others is a weakness.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'M',
            zh: "我善于隐藏自己的真实意图。",
            en: "I am good at hiding my true intentions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'M',
            zh: "我认为成功比诚实更重要。",
            en: "I think success is more important than honesty.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // P - Psychopathy (精神病态)
        {
            id: 19,
            dimension: 'P',
            zh: "我对别人的感受不太关心。",
            en: "I don't care much about others' feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'P',
            zh: "我不容易感到内疚或后悔。",
            en: "I don't easily feel guilt or regret.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 21,
            dimension: 'P',
            zh: "我喜欢寻求刺激和冒险的体验。",
            en: "I enjoy seeking thrills and risky experiences.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 22,
            dimension: 'P',
            zh: "我做事冲动，不考虑后果。",
            en: "I act impulsively without considering the consequences.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'P',
            zh: "我不太在乎社会规范和规则。",
            en: "I don't care much about social norms and rules.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'P',
            zh: "我能够冷静地处理令人不安的情境。",
            en: "I can calmly handle disturbing situations.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 25,
            dimension: 'P',
            zh: "我容易感到无聊，需要不断的新刺激。",
            en: "I get bored easily and need constant new stimulation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'P',
            zh: "我对承诺和责任不太重视。",
            en: "I don't value commitments and responsibilities much.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'P',
            zh: "我在社交场合中表现得很自信和有魅力。",
            en: "I appear confident and charming in social situations.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { N: 0, M: 0, P: 0 };
        let counts = { N: 0, M: 0, P: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                scores[dimension] += q.scores[answers[index]];
                counts[dimension]++;
            }
        });

        // Calculate percentages (each dimension has 9 questions, max 45 points)
        let percentages = {};
        for (let dim in scores) {
            const maxPossible = counts[dim] * 5;
            percentages[dim] = maxPossible > 0 ? Math.round((scores[dim] / maxPossible) * 100) : 0;
        }

        return {
            scores: scores,
            percentages: percentages,
            dimensions: [
                { name: 'Narcissism', zh: '自恋', code: 'N', score: percentages.N },
                { name: 'Machiavellianism', zh: '马基雅维利主义', code: 'M', score: percentages.M },
                { name: 'Psychopathy', zh: '精神病态', code: 'P', score: percentages.P }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "黑暗三联征测试",
            subtitle: "评估你的黑暗人格特质",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。黑暗三联征是心理学研究的概念，测试结果不代表临床诊断。如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourProfile: "你的黑暗人格档案",
            dimensions: "维度分析"
        },
        en: {
            title: "Dark Triad Test",
            subtitle: "Assess Your Dark Personality Traits",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. The Dark Triad is a psychological research concept, and test results do not represent clinical diagnosis. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourProfile: "Your Dark Personality Profile",
            dimensions: "Dimension Analysis"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DARK_TRIAD_TEST;
}
