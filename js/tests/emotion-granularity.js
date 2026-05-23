/**
 * 情绪粒度测试题库
 * Emotion Granularity Test
 */

const EMOTION_GRANULARITY_TEST = {
    type: 'emotion-granularity',
    icon: '🎨',
    color: '#E91E63',
    questions: [
        {
            id: 1,
            dimension: 'EG',
            zh: "我能够区分不同种类的快乐（如满足、兴奋、欣慰）。",
            en: "I can distinguish between different types of happiness (e.g., contentment, excitement, relief).",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'EG',
            zh: "我能够用精确的词语描述自己的情绪状态。",
            en: "I can use precise words to describe my emotional state.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'EG',
            zh: "我能够区分悲伤和失望之间的差异。",
            en: "I can distinguish between sadness and disappointment.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'EG',
            zh: "我能够识别同一情绪的不同强度。",
            en: "I can identify different intensities of the same emotion.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'EG',
            zh: "我能够区分焦虑和恐惧之间的不同。",
            en: "I can distinguish between anxiety and fear.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'EG',
            zh: "我能够同时感受到多种不同的情绪。",
            en: "I can feel multiple different emotions at the same time.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'EG',
            zh: "我能够区分愤怒和恼怒之间的细微差别。",
            en: "I can distinguish the subtle difference between anger and annoyance.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'EG',
            zh: "我的情绪词汇量很丰富，能够精确表达感受。",
            en: "I have a rich emotional vocabulary and can precisely express feelings.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'EG',
            zh: "我能够区分不同类型的压力感（如紧张、压迫、焦虑）。",
            en: "I can distinguish between different types of stress (e.g., tension, pressure, anxiety).",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'EG',
            zh: "我能够识别情绪变化的细微征兆。",
            en: "I can identify subtle signs of emotional changes.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'EG',
            zh: "我能够区分嫉妒和羡慕。",
            en: "I can distinguish between jealousy and envy.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'EG',
            zh: "我能够用具体的语言描述自己复杂的情绪状态。",
            en: "I can use specific language to describe my complex emotional states.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'EG',
            zh: "我能够区分羞耻和内疚之间的差异。",
            en: "I can distinguish between shame and guilt.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'EG',
            zh: "我能够区分不同类型的孤独感（如社交孤独、情感孤独）。",
            en: "I can distinguish between different types of loneliness (e.g., social loneliness, emotional loneliness).",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'EG',
            zh: "我能够察觉自己情绪的混合状态。",
            en: "I can detect mixed states of my emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'EG',
            zh: "我能够区分感动和悲伤。",
            en: "I can distinguish between being moved and being sad.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'EG',
            zh: "我能够区分不同类型的满足感。",
            en: "I can distinguish between different types of satisfaction.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'EG',
            zh: "我能够理解情绪之间的细微过渡。",
            en: "I can understand the subtle transitions between emotions.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'EG',
            zh: "我能够区分情绪反应和情绪触发之间的关系。",
            en: "I can distinguish the relationship between emotional responses and emotional triggers.",
            options: {
                zh: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'EG',
            zh: "我能够精确地表达自己情绪的细微变化。",
            en: "I can precisely express the subtle changes in my emotions.",
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
                title: "低情绪粒度",
                name: "低情绪粒度",
                description: "你的情绪粒度较低。你可能更多地用简单的词语（如好/不好）来描述自己的情绪，而较少区分不同情绪之间的细微差异。提升情绪粒度可以帮助你更好地理解自己和管理情绪。",
                suggestions: ["学习更多的情绪词汇", "尝试用日记记录情绪变化", "练习区分相似情绪之间的差异", "阅读关于情绪心理学的书籍"]
            },
            en: {
                title: "Low Emotion Granularity",
                name: "Low Emotion Granularity",
                description: "Your emotion granularity is relatively low. You may tend to describe your emotions with simple words (like good/bad) rather than distinguishing subtle differences between emotions. Improving emotion granularity can help you better understand yourself and manage emotions.",
                suggestions: ["Learn more emotional vocabulary", "Try journaling emotional changes", "Practice distinguishing between similar emotions", "Read books about emotional psychology"]
            },
            range: [0, 30]
        },
        medium: {
            zh: {
                title: "中等情绪粒度",
                name: "中等情绪粒度",
                description: "你的情绪粒度处于中等水平。你有时能够区分不同的情绪，但还有提升的空间。通过有意识的练习，你可以发展更精细的情绪识别能力。",
                suggestions: ["每天练习识别和命名自己的情绪", "与他人讨论情绪体验", "使用情绪轮盘等工具", "注意身体对不同情绪的反应"],
                range: [31, 60]
            },
            en: {
                title: "Moderate Emotion Granularity",
                name: "Moderate Emotion Granularity",
                description: "Your emotion granularity is moderate. You can sometimes distinguish between different emotions, but there is room for improvement. Through conscious practice, you can develop more refined emotional recognition abilities.",
                suggestions: ["Practice identifying and naming your emotions daily", "Discuss emotional experiences with others", "Use tools like emotion wheels", "Pay attention to physical responses to different emotions"],
                range: [31, 60]
            }
        },
        high: {
            zh: {
                title: "高情绪粒度",
                name: "高情绪粒度",
                description: "你的情绪粒度很高！你能够精确地区分和描述不同的情绪状态，这是情绪智力的重要组成部分。高情绪粒度与更好的情绪调节、更强的心理韧性和更健康的人际关系相关。",
                suggestions: ["继续保持对情绪的精细觉察", "帮助他人提升情绪识别能力", "将情绪觉察应用于日常决策", "继续扩展情绪词汇库"],
                range: [61, 100]
            },
            en: {
                title: "High Emotion Granularity",
                name: "High Emotion Granularity",
                description: "Your emotion granularity is very high! You can precisely distinguish and describe different emotional states, which is an important component of emotional intelligence. High emotion granularity is associated with better emotion regulation, stronger psychological resilience, and healthier relationships.",
                suggestions: ["Continue maintaining fine emotional awareness", "Help others improve emotional recognition", "Apply emotional awareness to daily decisions", "Continue expanding your emotional vocabulary"]
            },
            range: [61, 100]
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
            title: "情绪粒度测试",
            subtitle: "评估你的情绪识别精度",
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。情绪粒度是一种可以培养的能力，通过有意识的练习可以提升。",
            loading: "正在评估你的情绪粒度...",
            yourGranularityScore: "你的情绪粒度指数",
            scoreRange: "分数范围",
            suggestions: "提升建议"
        },
        en: {
            title: "Emotion Granularity Test",
            subtitle: "Assess Your Emotional Recognition Precision",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Emotion granularity is a skill that can be cultivated through conscious practice.",
            loading: "Assessing your emotion granularity...",
            yourGranularityScore: "Your Emotion Granularity Index",
            scoreRange: "Score Range",
            suggestions: "Improvement Suggestions"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMOTION_GRANULARITY_TEST;
}
