/**
 * 压力指数测试题库
 * Stress Index Test
 */

var STRESS_TEST = {
    type: 'stress',
    icon: '\u{1F624}',
    color: '#F44336',
    questions: [
        {
            id: 1,
            dimension: 'ST',
            zh: "我觉得自己的任务和责任压得我喘不过气。",
            en: "I feel overwhelmed by my tasks and responsibilities.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'ST',
            zh: "我感到时间不够用，总是忙碌不堪。",
            en: "I feel there is not enough time and I am always busy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'ST',
            zh: "我难以放松，即使在休息时也是如此。",
            en: "I find it difficult to relax, even during rest.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'ST',
            zh: "我的工作或学习效率明显下降。",
            en: "My work or study efficiency has noticeably declined.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'ST',
            zh: "我经常因为压力而头痛或身体不适。",
            en: "I frequently get headaches or physical discomfort due to stress.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'ST',
            zh: "我感到精力耗尽，不想做任何事。",
            en: "I feel exhausted and do not want to do anything.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'ST',
            zh: "我容易因小事而发脾气。",
            en: "I easily lose my temper over small things.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'ST',
            zh: "我的睡眠质量受到影响，很难入睡或早醒。",
            en: "My sleep quality is affected; I have trouble falling asleep or wake up early.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'ST',
            zh: "我感到对工作或学习失去了热情。",
            en: "I have lost enthusiasm for work or study.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'ST',
            zh: "我的食欲发生了明显变化。",
            en: "My appetite has noticeably changed.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'ST',
            zh: "我感到与他人的关系变得紧张。",
            en: "I feel my relationships with others have become tense.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'ST',
            zh: "我很难做决定，因为怓虑太多。",
            en: "I find it hard to make decisions because I overthink.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'ST',
            zh: "我觉得自己的健康状况在下降。",
            en: "I feel my health condition is declining.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'ST',
            zh: "我经常担心自己无法完成任务。",
            en: "I frequently worry about being unable to complete tasks.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'ST',
            zh: "我感到自己趋于消沉，不想与人交流。",
            en: "I tend to withdraw and do not want to interact with others.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'ST',
            zh: "我感到自己的情绪很难控制。",
            en: "I feel my emotions are hard to control.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'ST',
            zh: "我觉得自己已经失去了对生活的掌控感。",
            en: "I feel I have lost control over my life.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'ST',
            zh: "我依赖咖啡、酒精或其他物质来应对压力。",
            en: "I rely on coffee, alcohol, or other substances to cope with stress.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'ST',
            zh: "我觉得自己应付不了生活中的各种挑战。",
            en: "I feel I cannot handle the various challenges in life.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'ST',
            zh: "我经常感到焦虑不安或心继不宁。",
            en: "I frequently feel anxious or restless.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    resultTypes: {
        low: {
            zh: {
                title: "低压力水平",
                name: "低压力",
                description: "你的压力水平较低，能够较好地应对日常生活中的挑战。请继续保持健康的生活方式。",
                suggestions: ["继续保持健康的生活习惯", "定期进行放松活动"]
            },
            en: {
                title: "Low Stress Level",
                name: "Low Stress",
                description: "Your stress level is relatively low and you are able to cope well with daily challenges. Continue maintaining a healthy lifestyle.",
                suggestions: ["Continue maintaining healthy lifestyle habits", "Engage in regular relaxation activities"]
            },
            range: [0, 25]
        },
        moderate: {
            zh: {
                title: "中等压力水平",
                name: "中等压力",
                description: "你正在经历中等程度的压力。建议学习有效的压力管理技巧。",
                suggestions: ["学习时间管理技巧", "增加运动", "练习冥想"]
            },
            en: {
                title: "Moderate Stress Level",
                name: "Moderate Stress",
                description: "You are experiencing a moderate level of stress. Consider learning effective stress management techniques.",
                suggestions: ["Learn time management techniques", "Increase physical exercise", "Practice meditation"]
            },
            range: [26, 50]
        },
        high: {
            zh: {
                title: "高压力水平",
                name: "高压力",
                description: "你的压力水平较高，可能已经影响到你的身心健康。建议重新审视自己的生活节奏。",
                suggestions: ["重新审视自己的优先级", "寻求社会支持", "考虑寻求专业帮助"]
            },
            en: {
                title: "High Stress Level",
                name: "High Stress",
                description: "Your stress level is high and may be affecting your physical and mental health. Consider re-evaluating your life rhythm.",
                suggestions: ["Re-evaluate your priorities", "Seek social support", "Consider seeking professional help"]
            },
            range: [51, 75]
        },
        severe: {
            zh: {
                title: "极高压力水平",
                name: "极高压力",
                description: "你的压力水平极高，已经严重影响了你的生活质量。强烈建议寻求专业帮助。",
                suggestions: ["立即寻求专业帮助", "考虑调整工作或生活环境"]
            },
            en: {
                title: "Extremely High Stress Level",
                name: "Extreme Stress",
                description: "Your stress level is extremely high and has seriously affected your quality of life. Strongly recommend seeking professional help.",
                suggestions: ["Seek professional help immediately", "Consider adjusting your work or living environment"]
            },
            range: [76, 100]
        }
    },

    calculate: function(answers, questions) {
        var totalScore = 0;
        var answeredCount = 0;

        questions.forEach(function(q, index) {
            if (answers[index] !== -1) {
                totalScore += q.scores[answers[index]];
                answeredCount++;
            }
        });

        var maxPossible = answeredCount * 5;
        var score = answeredCount > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;

        var resultType;
        if (score <= 25) {
            resultType = 'low';
        } else if (score <= 50) {
            resultType = 'moderate';
        } else if (score <= 75) {
            resultType = 'high';
        } else {
            resultType = 'severe';
        }

        return {
            score: score,
            resultType: resultType
        };
    },

    uiText: {
        zh: {
            title: "压力指数测试",
            subtitle: "评估你的压力水平",
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
            disclaimer: "本测试仅供参考，不能代替专业诊断。如果压力严重影响了你的生活，请寻求专业心理健康服务。",
            loading: "正在分析你的压力水平...",
            yourStressScore: "你的压力指数",
            scoreRange: "分数范围",
            suggestions: "建议"
        },
        en: {
            title: "Stress Index Test",
            subtitle: "Assess Your Stress Level",
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
            disclaimer: "This test is for reference only and cannot replace a professional diagnosis. If stress is seriously affecting your life, please seek professional mental health services.",
            loading: "Analyzing your stress level...",
            yourStressScore: "Your Stress Index",
            scoreRange: "Score Range",
            suggestions: "Suggestions"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = STRESS_TEST;
}
