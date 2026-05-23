/**
 * 抑郁筛查测试题库
 * Depression Screening Test
 */

var DEPRESSION_TEST = {
    type: 'depression',
    icon: '\u{1F614}',
    color: '#607D8B',
    questions: [
        {
            id: 1,
            dimension: 'DP',
            zh: "我感到悲伤或恋不开心�?,
            en: "I feel sad or unhappy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 2,
            dimension: 'DP',
            zh: "我对以前喜欢的事物失去了兴趣�?,
            en: "I have lost interest in things I used to enjoy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 3,
            dimension: 'DP',
            zh: "我感到疑惨和无望，觉得未来不会有好转�?,
            en: "I feel hopeless and believe things will not improve.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 4,
            dimension: 'DP',
            zh: "我的食欲明显增加或减少了�?,
            en: "My appetite has noticeably increased or decreased.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 5,
            dimension: 'DP',
            zh: "我的睡眠质量明显下降，很难入睡或早醒�?,
            en: "My sleep quality has noticeably declined; I have trouble falling asleep or wake up early.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 6,
            dimension: 'DP',
            zh: "我感到精力不济，容易疲劳�?,
            en: "I feel fatigued and lack energy.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 7,
            dimension: 'DP',
            zh: "我觉得自己没用或是失败者�?,
            en: "I feel worthless or like a failure.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 8,
            dimension: 'DP',
            zh: "我注意力难以集中，做决定很困难�?,
            en: "I have difficulty concentrating and making decisions.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 9,
            dimension: 'DP',
            zh: "我说话或动作变得比平时缓慢�?,
            en: "My speech or movements have become slower than usual.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 10,
            dimension: 'DP',
            zh: "我经常感到焦虑或坐立不安�?,
            en: "I frequently feel restless or agitated.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 11,
            dimension: 'DP',
            zh: "我想要远离社交活动和他人�?,
            en: "I want to withdraw from social activities and other people.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 12,
            dimension: 'DP',
            zh: "我经常感到内疚或自责�?,
            en: "I frequently feel guilty or self-blame.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 13,
            dimension: 'DP',
            zh: "我对自己的外表和能力缺乏信心�?,
            en: "I lack confidence in my appearance and abilities.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 14,
            dimension: 'DP',
            zh: "我感到孤独，即使身边有人也是如此�?,
            en: "I feel lonely, even when surrounded by people.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 15,
            dimension: 'DP',
            zh: "我对自己的未来不抱希望�?,
            en: "I have no hope for my future.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 16,
            dimension: 'DP',
            zh: "我很难从日常生活中找到乐趣�?,
            en: "I find it hard to find enjoyment in everyday life.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 17,
            dimension: 'DP',
            zh: "我容易发怒或情绪波动很大�?,
            en: "I am easily angered or have significant mood swings.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 18,
            dimension: 'DP',
            zh: "我的性欲或性兴趣明显减退�?,
            en: "My sexual desire or interest has noticeably decreased.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 19,
            dimension: 'DP',
            zh: "我感到无法应付日常生活中的任务�?,
            en: "I feel unable to cope with the tasks of everyday life.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        },
        {
            id: 20,
            dimension: 'DP',
            zh: "我有过伤害自己或结束生命的念头�?,
            en: "I have had thoughts of harming myself or ending my life.",
            options: {
                zh: ["从不", "偶尔", "有时", "经常", "总是"],
                en: ["Never", "Rarely", "Sometimes", "Often", "Always"]
            },
            scores: [1, 2, 3, 4, 5]
        }
    ],

    resultTypes: {
        none: {
            zh: {
                title: "无或轻微症状",
                name: "�?轻微",
                description: "你的回答显示你目前没有显著的抑郁症状。请继续保持积极的生活方式，关注自己的心理健康�?,
                suggestions: ["继续保持健康的生活习�?, "定期进行自我反�?, "保持社交活动"]
            },
            en: {
                title: "No or Minimal Symptoms",
                name: "None/Minimal",
                description: "Your responses indicate no significant depressive symptoms. Continue maintaining a positive lifestyle and paying attention to your mental health.",
                suggestions: ["Continue maintaining healthy lifestyle habits", "Practice regular self-reflection", "Stay socially active"]
            },
            range: [0, 25]
        },
        mild: {
            zh: {
                title: "轻度抑郁症状",
                name: "轻度",
                description: "你可能正在经历一些轻度的抑郁情绪。这是很常见的，但值得关注。尝试增加运动、改善睡眠�?,
                suggestions: ["增加日常运动�?, "保证充足的睡�?, "与亲友倾诉"]
            },
            en: {
                title: "Mild Depressive Symptoms",
                name: "Mild",
                description: "You may be experiencing some mild depressive emotions. This is very common but worth paying attention to. Try increasing exercise and improving sleep.",
                suggestions: ["Increase daily exercise", "Ensure adequate sleep", "Talk to friends and family"]
            },
            range: [26, 50]
        },
        moderate: {
            zh: {
                title: "中度抑郁症状",
                name: "中度",
                description: "你的回答显示中度的抑郁症状。强烈建议寻求专业帮助，同时调整生活方式�?,
                suggestions: ["尽快寻求专业心理咨询", "避免独处，多与他人交�?, "规律作息"]
            },
            en: {
                title: "Moderate Depressive Symptoms",
                name: "Moderate",
                description: "Your responses indicate moderate depressive symptoms. Strongly recommend seeking professional help while adjusting your lifestyle.",
                suggestions: ["Seek professional counseling as soon as possible", "Avoid being alone, interact more with others", "Maintain regular routines"]
            },
            range: [51, 75]
        },
        severe: {
            zh: {
                title: "严重抑郁症状",
                name: "严重",
                description: "你的回答显示较为严重的抑郁症状。请立即寻求专业医疗帮助，你不一个人�?,
                suggestions: ["立即寻求专业精神科医生帮�?, "告诉信任的人你的感受", "拨打心理危机热线"]
            },
            en: {
                title: "Severe Depressive Symptoms",
                name: "Severe",
                description: "Your responses indicate significant depressive symptoms. Please seek professional medical help immediately. You are not alone.",
                suggestions: ["Seek professional psychiatrist help immediately", "Tell someone you trust how you feel", "Call a mental health crisis hotline"]
            },
            range: [76, 100]
        }
    },

    calculate: function(answers, questions) {
        let totalScore = 0;
        let answeredCount = 0;

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
            resultType = 'none';
        } else if (score <= 50) {
            resultType = 'mild';
        } else if (score <= 75) {
            resultType = 'moderate';
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
            title: "抑郁筛查测试",
            subtitle: "评估你的情绪状�?,
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
            disclaimer: "本测试仅供参考，不能代替专业诊断。如果你正在经历情绪困扰，请务必寻求专业心理健康服务。如有自杀念头，请拨打心理危机热线�?,
            loading: "正在分析你的情绪状�?..",
            yourDepressionScore: "你的抑郁指数",
            scoreRange: "分数范围",
            suggestions: "建议"
        },
        en: {
            title: "Depression Screening",
            subtitle: "Assess Your Emotional State",
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
            disclaimer: "This test is for reference only and cannot replace a professional diagnosis. If you are experiencing emotional distress, please seek professional mental health services. If you have suicidal thoughts, please call a crisis hotline immediately.",
            loading: "Analyzing your emotional state...",
            yourDepressionScore: "Your Depression Index",
            scoreRange: "Score Range",
            suggestions: "Suggestions"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEPRESSION_TEST;
}
