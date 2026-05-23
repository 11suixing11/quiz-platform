/**
 * 心流体验测试题库
 * Flow Experience Test
 */

var FLOW_TEST = {
    type: 'flow',
    icon: '🌊',
    color: '#00BCD4',
    questions: [
        {
            id: 1,
            dimension: 'FL',
            zh: "我在做某些事情时会完全沉浸其中，忘记时间�?,
            en: "When doing certain things, I become completely immersed and lose track of time.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'FL',
            zh: "我在做喜欢的事情时，会感到高度专注�?,
            en: "When doing things I enjoy, I feel highly focused.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'FL',
            zh: "我在专注于某项任务时，会感到愉悦和满足�?,
            en: "When focusing on a task, I feel pleasure and satisfaction.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'FL',
            zh: "我在做某些事情时，行动和意识会融为一体�?,
            en: "When doing certain things, my actions and awareness merge into one.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'FL',
            zh: "我在挑战与能力匹配的任务中表现最好�?,
            en: "I perform best in tasks where challenge matches my ability.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'FL',
            zh: "我在做事情时有明确的目标感�?,
            en: "I have a clear sense of goals when doing things.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'FL',
            zh: "我在专注做事时，会忽略周围环境的干扰�?,
            en: "When focused on a task, I ignore distractions from the surrounding environment.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'FL',
            zh: "我在做事情时，能够即时获得反馈并调整�?,
            en: "When doing things, I can receive immediate feedback and adjust accordingly.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'FL',
            zh: "我在做某件事情时，会感到自我意识消失�?,
            en: "When doing something, I feel my self-consciousness disappears.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'FL',
            zh: "我在专注于某项活动时，会感到时间飞逝�?,
            en: "When focusing on an activity, I feel time flies.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'FL',
            zh: "我在做有挑战性的事情时感到兴奋而非焦虑�?,
            en: "When doing challenging things, I feel excited rather than anxious.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'FL',
            zh: "我在完成心流状态的任务后会感到充实和满足�?,
            en: "After completing tasks in a flow state, I feel fulfilled and satisfied.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'FL',
            zh: "我能够找到让自己进入专注状态的活动�?,
            en: "I can find activities that help me enter a focused state.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'FL',
            zh: "我在做事时不需要外部奖励来保持动力�?,
            en: "I do not need external rewards to stay motivated when doing things.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'FL',
            zh: "我在做热爱的事情时，会忘记所有烦恼�?,
            en: "When doing things I am passionate about, I forget all worries.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'FL',
            zh: "我经常体验到心流状态�?,
            en: "I frequently experience flow states.",
            options: {
                zh: ["非常不同�?, "不同�?, "中立", "同意", "非常同意"],
                en: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    // 结果类型
    resultTypes: {
        low: {
            zh: {
                title: "低心流体�?,
                name: "低心�?,
                description: "你的心流体验水平较低。你可能较少进入完全专注和沉浸的状态。尝试寻找那些挑战与能力相匹配的活动，设定明确的目标，并创造一个减少干扰的环境，可能会帮助你更容易进入心流状态�?,
                suggestions: ["寻找挑战与能力匹配的活动", "创造减少干扰的环境", "设定明确的短期目�?, "培养专注的习�?]
            },
            en: {
                title: "Low Flow Experience",
                name: "Low Flow",
                description: "Your flow experience level is relatively low. You may rarely enter a state of complete focus and immersion. Try finding activities where challenge matches ability, set clear goals, and create an environment with fewer distractions to help you enter flow states more easily.",
                suggestions: ["Find activities with matching challenge and ability", "Create an environment with fewer distractions", "Set clear short-term goals", "Cultivate habits of focus"]
            },
            range: [0, 30]
        },
        medium: {
            zh: {
                title: "中等心流体验",
                name: "中等心流",
                description: "你的心流体验处于中等水平。你有时能够进入专注和沉浸的状态，但并不频繁。通过更有意识地选择活动和创造条件，你可以增加心流体验的频率�?,
                suggestions: ["记录哪些活动让你感到专注", "逐步增加活动的挑战�?, "学习正念冥想提升专注�?, "建立固定的工作仪�?],
                range: [31, 60]
            },
            en: {
                title: "Moderate Flow Experience",
                name: "Moderate Flow",
                description: "Your flow experience is at a moderate level. You can sometimes enter a state of focus and immersion, but not frequently. By more consciously choosing activities and creating conditions, you can increase the frequency of flow experiences.",
                suggestions: ["Record which activities make you feel focused", "Gradually increase the challenge level", "Learn mindfulness meditation to improve focus", "Establish fixed work rituals"],
                range: [31, 60]
            }
        },
        high: {
            zh: {
                title: "高心流体�?,
                name: "高心�?,
                description: "你的心流体验水平很高！你能够经常进入完全专注和沉浸的状态，享受活动本身的乐趣。心流状态与更高的创造力、生产力和生活满意度相关。继续保持那些能让你进入心流状态的活动�?,
                suggestions: ["继续保持能带来心流的活动", "尝试将心流体验扩展到新领�?, "帮助他人发现他们的心流活�?, "在工作和生活中创造更多心流机�?],
                range: [61, 100]
            },
            en: {
                title: "High Flow Experience",
                name: "High Flow",
                description: "Your flow experience level is very high! You can frequently enter a state of complete focus and immersion, enjoying the pleasure of the activity itself. Flow states are associated with higher creativity, productivity, and life satisfaction. Continue the activities that bring you into flow states.",
                suggestions: ["Continue activities that bring flow", "Try extending flow experiences to new areas", "Help others discover their flow activities", "Create more flow opportunities in work and life"]
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
            title: "心流体验测试",
            subtitle: "评估你的专注和沉浸体�?,
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
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。心流是一种积极的心理状态，可以通过有意识的练习来培养�?,
            loading: "正在评估你的心流体验...",
            yourFlowScore: "你的心流体验指数",
            scoreRange: "分数范围",
            suggestions: "提升建议"
        },
        en: {
            title: "Flow Experience Test",
            subtitle: "Assess Your Focus and Immersion Experience",
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
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Flow is a positive psychological state that can be cultivated through conscious practice.",
            loading: "Assessing your flow experience...",
            yourFlowScore: "Your Flow Experience Index",
            scoreRange: "Score Range",
            suggestions: "Improvement Suggestions"
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FLOW_TEST;
}
