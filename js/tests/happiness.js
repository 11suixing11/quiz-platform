/**
 * 幸福感测试题库
 * Happiness Test
 */

const HAPPINESS_TEST = {
    type: 'happiness',
    icon: '😊',
    color: '#FFC107',
    questions: [
        {
            id: 1,
            dimension: 'HA',
            zh: "总的来说，我对自己的生活感到满意。",
            en: "Overall, I am satisfied with my life.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'HA',
            zh: "我经常感到快乐和愉悦。",
            en: "I often feel happy and joyful.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'HA',
            zh: "我觉得自己的生活充满了意义和目的。",
            en: "I feel my life is full of meaning and purpose.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'HA',
            zh: "我对未来充满期待和希望。",
            en: "I am full of anticipation and hope for the future.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'HA',
            zh: "我与家人和朋友的关系让我感到幸福。",
            en: "My relationships with family and friends make me happy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'HA',
            zh: "我经常体验到感恩和满足的情绪。",
            en: "I frequently experience gratitude and contentment.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'HA',
            zh: "我觉得自己在工作或学习中有所成就。",
            en: "I feel a sense of accomplishment in my work or studies.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'HA',
            zh: "我喜欢尝试新事物和接受新挑战。",
            en: "I enjoy trying new things and accepting new challenges.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'HA',
            zh: "我能够有效地管理自己的压力。",
            en: "I can effectively manage my stress.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'HA',
            zh: "我对自己的身体健康感到满意。",
            en: "I am satisfied with my physical health.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'HA',
            zh: "我有足够的时间做自己喜欢的事情。",
            en: "I have enough time to do things I enjoy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'HA',
            zh: "我觉得自己被周围的人所爱和关心。",
            en: "I feel loved and cared for by the people around me.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'HA',
            zh: "我对自己的经济状况感到基本满意。",
            en: "I am basically satisfied with my financial situation.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'HA',
            zh: "我喜欢我所居住的社区和环境。",
            en: "I like the community and environment where I live.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'HA',
            zh: "我能从日常生活中的小事中获得快乐。",
            en: "I can find joy in small things in everyday life.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'HA',
            zh: "我觉得自己有良好的睡眠质量。",
            en: "I feel I have good quality sleep.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'HA',
            zh: "我经常帮助他人，这让我感到快乐。",
            en: "I often help others, and this makes me happy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'HA',
            zh: "我能够原谅他人的过错，不记恨在心。",
            en: "I can forgive others' mistakes and not hold grudges.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'HA',
            zh: "我觉得自己有追求梦想的能力和勇气。",
            en: "I feel I have the ability and courage to pursue my dreams.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'HA',
            zh: "如果可以重来，我不会改变自己的生活方式。",
            en: "If I could start over, I would not change my lifestyle.",
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
                title: "低幸福感",
                name: "低幸福",
                description: "你的幸福感水平较低。这可能意味着你在生活中的某些方面感到不满足或面临挑战。请记住，幸福是一种可以培养的能力。尝试关注积极的事物，培养感恩的习惯，寻求社会支持，必要时可以寻求专业帮助。",
                suggestions: ["每天记录三件感恩的事情", "增加社交活动", "培养运动习惯", "寻求专业心理咨询"]
            },
            en: {
                title: "Low Happiness",
                name: "Low Happiness",
                description: "Your happiness level is relatively low. This may mean you feel dissatisfied in some aspects of life or are facing challenges. Remember that happiness is a skill that can be cultivated. Try focusing on positive things, cultivating gratitude, seeking social support, and seeking professional help if needed.",
                suggestions: ["Record three things you are grateful for each day", "Increase social activities", "Develop exercise habits", "Seek professional counseling"]
            },
            range: [0, 30]
        },
        medium: {
            zh: {
                title: "中等幸福感",
                name: "中等幸福",
                description: "你的幸福感处于中等水平。你对生活有一定程度的满足感，但还有提升的空间。通过有意识地培养积极习惯和思维方式，你可以进一步提高自己的幸福感。",
                suggestions: ["尝试正念冥想", "培养兴趣爱好", "加强人际关系", "设定并追求有意义的目标"],
                range: [31, 60]
            },
            en: {
                title: "Moderate Happiness",
                name: "Moderate Happiness",
                description: "Your happiness level is moderate. You have a certain degree of satisfaction with life, but there is room for improvement. By consciously cultivating positive habits and mindsets, you can further enhance your happiness.",
                suggestions: ["Try mindfulness meditation", "Cultivate hobbies and interests", "Strengthen relationships", "Set and pursue meaningful goals"],
                range: [31, 60]
            }
        },
        high: {
            zh: {
                title: "高幸福感",
                name: "高幸福",
                description: "你的幸福感水平很高！你对自己的生活感到满意和满足，能够从日常生活中感受到快乐和意义。继续保持积极的生活态度，同时也要注意在困难时期给自己足够的支持和关爱。",
                suggestions: ["分享你的幸福给他人", "继续保持感恩的心态", "帮助他人提升幸福感", "在困难时期给自己足够的耐心"],
                range: [61, 100]
            },
            en: {
                title: "High Happiness",
                name: "High Happiness",
                description: "Your happiness level is very high! You feel satisfied and fulfilled with your life, able to experience joy and meaning from everyday life. Continue maintaining a positive life attitude, while also ensuring you give yourself enough support and care during difficult times.",
                suggestions: ["Share your happiness with others", "Continue maintaining a grateful mindset", "Help others improve their happiness", "Give yourself patience during difficult times"],
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
            title: "幸福感测试",
            subtitle: "评估你当前的幸福水平",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。幸福感是一个动态的概念，会随时间和环境变化。如需专业帮助，请咨询心理咨询师。",
            loading: "正在计算你的幸福感指数...",
            yourHappinessScore: "你的幸福感指数",
            scoreRange: "分数范围",
            suggestions: "提升建议"
        },
        en: {
            title: "Happiness Test",
            subtitle: "Assess Your Current Happiness Level",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Happiness is a dynamic concept that changes with time and environment. For professional help, please consult a psychologist.",
            loading: "Calculating your happiness index...",
            yourHappinessScore: "Your Happiness Index",
            scoreRange: "Score Range",
            suggestions: "Improvement Suggestions"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HAPPINESS_TEST;
}
