/**
 * 情绪调节测试题库
 * Emotion Regulation Test
 */

var EMOTION_REGULATION_TEST = {
    type: 'emotion-regulation',
    icon: '🎛�?,
    color: '#9C27B0',
    questions: [
        // Cognitive Reappraisal (认知重评) - CR
        {
            id: 1,
            dimension: 'CR',
            zh: "当我感到不安时，我会尝试从不同角度看待问题�?,
            en: "When I feel upset, I try to look at the problem from different angles.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'CR',
            zh: "我能够改变对负面事件的看法，从而改变我的情绪�?,
            en: "I can change my perspective on negative events to alter my emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'CR',
            zh: "面对挫折时，我会思考其中可能存在的积极意义�?,
            en: "When facing setbacks, I think about the possible positive meaning within them.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'CR',
            zh: "我会告诉自己情况可能没有想象中那么糟糕�?,
            en: "I tell myself that the situation may not be as bad as it seems.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'CR',
            zh: "我善于从困难中找到学习和成长的机会�?,
            en: "I am good at finding opportunities for learning and growth from difficulties.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'CR',
            zh: "我会重新解读他人的话语，避免过度消极地理解�?,
            en: "I reinterpret others' words to avoid overly negative interpretations.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'CR',
            zh: "面对压力时，我能用理性的思维来平复情绪�?,
            en: "When facing stress, I can use rational thinking to calm my emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Expressive Suppression (表达抑制) - ES
        {
            id: 8,
            dimension: 'ES',
            zh: "当我感到愤怒时，我会努力压制自己的情绪表达�?,
            en: "When I feel angry, I try to suppress my emotional expression.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'ES',
            zh: "在公共场合，我会隐藏自己的负面情绪�?,
            en: "In public, I hide my negative emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'ES',
            zh: "我习惯于把不愉快的情绪藏在心里�?,
            en: "I am used to keeping unpleasant emotions inside.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'ES',
            zh: "即使内心痛苦，我也不会在他人面前表露出来�?,
            en: "Even when in pain, I do not show it in front of others.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'ES',
            zh: "我觉得控制情绪外露是一种成熟的表现�?,
            en: "I think controlling emotional expression is a sign of maturity.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'ES',
            zh: "我会阻止自己表达脆弱的情绪�?,
            en: "I prevent myself from expressing vulnerable emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'ES',
            zh: "我在社交场合中会保持情绪平稳，不让情绪波动显露�?,
            en: "I keep my emotions steady in social situations and do not reveal emotional fluctuations.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },

        // Acceptance (接纳) - AC
        {
            id: 15,
            dimension: 'AC',
            zh: "我接受自己会有负面情绪这一事实�?,
            en: "I accept the fact that I will have negative emotions.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'AC',
            zh: "我认为悲伤和痛苦是人生自然的一部分�?,
            en: "I believe sadness and pain are a natural part of life.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'AC',
            zh: "我允许自己感受各种情绪，而不去评判它们�?,
            en: "I allow myself to feel various emotions without judging them.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'AC',
            zh: "我会给自己时间去经历情绪，而不急于消除它们�?,
            en: "I give myself time to experience emotions without rushing to eliminate them.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'AC',
            zh: "我理解情绪会来也会走，不需要强行控制�?,
            en: "I understand that emotions come and go, and I do not need to force control.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'AC',
            zh: "我相信接纳自己的情绪有助于更好地处理它们�?,
            en: "I believe accepting my emotions helps me deal with them better.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { CR: 0, ES: 0, AC: 0 };
        let counts = { CR: 0, ES: 0, AC: 0 };

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
            CR: Math.round((scores.CR / (counts.CR * 5)) * 100),
            ES: Math.round((scores.ES / (counts.ES * 5)) * 100),
            AC: Math.round((scores.AC / (counts.AC * 5)) * 100)
        };

        // Calculate overall score (average of all dimensions)
        const overallScore = Math.round((percentages.CR + percentages.ES + percentages.AC) / 3);

        return {
            scores: scores,
            percentages: percentages,
            overallScore: overallScore,
            dimensions: [
                { name: 'Cognitive Reappraisal', zh: '认知重评', score: percentages.CR },
                { name: 'Expressive Suppression', zh: '表达抑制', score: percentages.ES },
                { name: 'Acceptance', zh: '接纳', score: percentages.AC }
            ]
        };
    },

    // UI 文本
    uiText: {
        zh: {
            title: "情绪调节测试",
            subtitle: "了解你的情绪调节策略",
            startBtn: "开始测�?,
            nextBtn: "下一�?,
            prevBtn: "上一�?,
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。情绪调节策略因人而异，没有绝对的好坏之分。如需专业帮助，请咨询心理咨询师�?,
            loading: "正在分析你的情绪调节策略...",
            yourEmotionRegulation: "你的情绪调节方式",
            dimensions: "维度分析",
            tips: "提升建议"
        },
        en: {
            title: "Emotion Regulation Test",
            subtitle: "Discover Your Emotion Regulation Strategies",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Emotion regulation strategies vary from person to person, and there is no absolute right or wrong. For professional help, please consult a psychologist.",
            loading: "Analyzing your emotion regulation strategies...",
            yourEmotionRegulation: "Your Emotion Regulation Style",
            dimensions: "Dimension Analysis",
            tips: "Improvement Tips"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMOTION_REGULATION_TEST;
}
