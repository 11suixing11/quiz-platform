/**
 * DISC行为风格测试题库
 * DISC Behavioral Style Test
 */

const DISC_TEST = {
    type: 'disc',
    icon: '🔶',
    color: '#FF9800',
    questions: [
        // D - Dominance (支配型)
        {
            id: 1,
            dimension: 'D',
            zh: "面对挑战时，我倾向于直接行动，快速解决问题。",
            en: "When facing challenges, I tend to take direct action and solve problems quickly.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'D',
            zh: "我喜欢在团队中担任领导角色，做重要决定。",
            en: "I like to take on leadership roles in teams and make important decisions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'D',
            zh: "我追求结果和成就，不喜欢拖延。",
            en: "I pursue results and achievements, and don't like to procrastinate.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'D',
            zh: "面对竞争时，我充满斗志，渴望获胜。",
            en: "When facing competition, I am full of fighting spirit and eager to win.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'D',
            zh: "我不害怕表达不同意见，即使可能引起冲突。",
            en: "I'm not afraid to express differing opinions, even if it might cause conflict.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'D',
            zh: "我喜欢接受新的挑战和高难度的任务。",
            en: "I like to accept new challenges and high-difficulty tasks.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'D',
            zh: "我倾向于快速做决定，而不是反复权衡。",
            en: "I tend to make decisions quickly rather than weighing options repeatedly.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // I - Influence (影响型)
        {
            id: 8,
            dimension: 'I',
            zh: "我喜欢与人交往，享受社交活动。",
            en: "I enjoy interacting with people and social activities.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'I',
            zh: "我善于激励和鼓舞他人。",
            en: "I am good at motivating and inspiring others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'I',
            zh: "我在表达想法时充满热情和感染力。",
            en: "I express my ideas with enthusiasm and charisma.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'I',
            zh: "我喜欢成为团队中的焦点，享受被关注。",
            en: "I like to be the center of attention in a team and enjoy being noticed.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'I',
            zh: "我倾向于乐观地看待事物，相信积极的结果。",
            en: "I tend to look at things optimistically and believe in positive outcomes.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'I',
            zh: "我喜欢通过合作和团队协作来完成工作。",
            en: "I like to accomplish work through cooperation and teamwork.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'I',
            zh: "我善于用言语和故事来表达自己的想法。",
            en: "I am good at expressing my ideas through words and stories.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // S - Steadiness (稳健型)
        {
            id: 15,
            dimension: 'S',
            zh: "我更喜欢稳定和可预测的环境。",
            en: "I prefer stable and predictable environments.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'S',
            zh: "我是团队中可靠的支持者，愿意帮助他人。",
            en: "I am a reliable supporter in the team, willing to help others.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'S',
            zh: "我做事有耐心，能够坚持完成长期任务。",
            en: "I am patient and able to persist in completing long-term tasks.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'S',
            zh: "我不喜欢突然的变化，更倾向于循序渐进。",
            en: "I don't like sudden changes and prefer gradual progress.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'S',
            zh: "我善于倾听他人，给予他们情感支持。",
            en: "I am good at listening to others and giving them emotional support.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'S',
            zh: "我更喜欢按照既定的流程和规则工作。",
            en: "I prefer to work according to established processes and rules.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 21,
            dimension: 'S',
            zh: "我与同事和朋友保持着长期稳定的关系。",
            en: "I maintain long-term stable relationships with colleagues and friends.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        // C - Conscientiousness (谨慎型)
        {
            id: 22,
            dimension: 'C',
            zh: "我做事注重细节，追求精确和准确。",
            en: "I pay attention to details and pursue precision and accuracy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 23,
            dimension: 'C',
            zh: "在做决定前，我会仔细分析所有相关的信息和数据。",
            en: "Before making decisions, I carefully analyze all relevant information and data.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 24,
            dimension: 'C',
            zh: "我非常重视规则和标准，坚持按程序办事。",
            en: "I highly value rules and standards, insisting on following procedures.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 25,
            dimension: 'C',
            zh: "我对工作质量有很高的要求，不容许马虎。",
            en: "I have high requirements for work quality and do not tolerate carelessness.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 26,
            dimension: 'C',
            zh: "我更喜欢有计划、有条理地完成任务。",
            en: "I prefer to complete tasks in a planned and organized manner.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 27,
            dimension: 'C',
            zh: "我会反复检查工作成果，确保没有错误。",
            en: "I repeatedly check my work results to ensure there are no errors.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 28,
            dimension: 'C',
            zh: "我倾向于谨慎行事，避免不必要的风险。",
            en: "I tend to act cautiously and avoid unnecessary risks.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // DISC类型描述
    types: {
        D: {
            zh: {
                title: "D型 - 支配型",
                name: "支配型",
                description: "D型人格的人直接、果断、以结果为导向。他们喜欢接受挑战，快速做决定，追求控制和权力。他们天生具有领导力，善于推动变革和克服障碍。在压力下可能变得专横和缺乏耐心。"
            },
            en: {
                title: "D - Dominance",
                name: "Dominance",
                description: "D-type individuals are direct, decisive, and results-oriented. They enjoy taking on challenges, making quick decisions, and pursuing control and power. They are natural leaders who excel at driving change and overcoming obstacles. Under pressure, they may become overbearing and impatient."
            }
        },
        I: {
            zh: {
                title: "I型 - 影响型",
                name: "影响型",
                description: "I型人格的人热情、乐观、善于社交。他们喜欢与人交往，善于激励他人，充满感染力。他们天生具有说服力，善于建立人际关系。在压力下可能变得过于情绪化和缺乏关注细节。"
            },
            en: {
                title: "I - Influence",
                name: "Influence",
                description: "I-type individuals are enthusiastic, optimistic, and socially skilled. They enjoy interacting with people, are good at motivating others, and are full of charisma. They are natural persuaders who excel at building relationships. Under pressure, they may become overly emotional and lack attention to detail."
            }
        },
        S: {
            zh: {
                title: "S型 - 稳健型",
                name: "稳健型",
                description: "S型人格的人耐心、可靠、以关系为导向。他们喜欢稳定的环境，善于倾听和支持他人，是团队中的稳定力量。他们天生具有耐心和忠诚，善于维护和谐。在压力下可能过于被动和抗拒变化。"
            },
            en: {
                title: "S - Steadiness",
                name: "Steadiness",
                description: "S-type individuals are patient, reliable, and relationship-oriented. They prefer stable environments, are good at listening to and supporting others, and are the stabilizing force in teams. They are naturally patient and loyal, excelling at maintaining harmony. Under pressure, they may become overly passive and resistant to change."
            }
        },
        C: {
            zh: {
                title: "C型 - 谨慎型",
                name: "谨慎型",
                description: "C型人格的人注重细节、追求精确、以质量为导向。他们喜欢有条理的环境，善于分析和解决问题，追求高标准。他们天生具有分析能力和系统思维，善于制定计划。在压力下可能过于挑剔和犹豫不决。"
            },
            en: {
                title: "C - Conscientiousness",
                name: "Conscientiousness",
                description: "C-type individuals are detail-oriented, precise, and quality-focused. They prefer organized environments, are good at analyzing and solving problems, and pursue high standards. They naturally have analytical abilities and systems thinking, excelling at planning. Under pressure, they may become overly critical and indecisive."
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { D: 0, I: 0, S: 0, C: 0 };
        let counts = { D: 0, I: 0, S: 0, C: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                scores[dimension] += q.scores[answers[index]];
                counts[dimension]++;
            }
        });

        // Find dominant type
        let maxScore = 0;
        let dominantType = 'D';
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
            title: "DISC行为风格测试",
            subtitle: "了解你的行为风格类型",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。DISC行为风格是理解人际差异的工具，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourType: "你的行为风格",
            typeDescription: "类型描述"
        },
        en: {
            title: "DISC Behavioral Style Test",
            subtitle: "Understand Your Behavioral Style",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. DISC behavioral style is a tool for understanding interpersonal differences. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourType: "Your Behavioral Style",
            typeDescription: "Type Description"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DISC_TEST;
}
