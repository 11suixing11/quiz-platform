// @ts-nocheck
// Deep Digital Detox Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const DIGITAL_DETOX_ADVANCED_TEST: any = {
    type: 'digital-detox-advanced', icon: '📴', color: '#607D8B',
    questions: [
        // Phone Addiction (手机成瘾) - PA - 4 questions
        { id: 1, dimension: 'PA', zh: '我每天使用手机的时间超过6小时。', en: 'I use my phone for more than 6 hours a day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 2, dimension: 'PA', zh: '我上厕所时也必须带着手机。', en: 'I must have my phone with me even when using the bathroom.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 3, dimension: 'PA', zh: '即使没有新消息，我也会不自觉地打开手机查看。', en: 'Even without new messages, I unconsciously unlock my phone to check.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 4, dimension: 'PA', zh: '我发现放下手机比想象中困难得多。', en: 'I find putting down my phone much harder than I expected.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },

        // Social Media Habits (社交媒体习惯) - SM - 4 questions
        { id: 5, dimension: 'SM', zh: '我每天花超过2小时刷社交媒体。', en: 'I spend more than 2 hours daily scrolling through social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 6, dimension: 'SM', zh: '我经常在社交媒体上比较自己和他人的生活。', en: 'I often compare my life with others on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'SM', zh: '我会因为社交媒体上的点赞和评论数量而影响心情。', en: 'My mood is affected by the number of likes and comments on social media.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'SM', zh: '我经常在社交媒体上花费的时间超出自己的计划。', en: 'I regularly spend more time on social media than I planned.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },

        // Notification Anxiety (通知焦虑) - NA - 4 questions
        { id: 9, dimension: 'NA', zh: '当手机显示未读消息时，我无法忽略它们。', en: 'When my phone shows unread messages, I cannot ignore them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'NA', zh: '关掉通知提醒会让我感到不安。', en: 'Turning off notification alerts makes me feel uneasy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'NA', zh: '如果很长时间没有收到消息，我会怀疑手机是不是坏了。', en: 'If I don\'t receive messages for a long time, I wonder if my phone is broken.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'NA', zh: '我会因为错过一条通知而感到焦虑。', en: 'I feel anxious about potentially missing a notification.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Digital Boundaries (数字边界) - DB - 4 questions
        { id: 13, dimension: 'DB', zh: '我设定了明确的"无手机时间"并能坚持执行。', en: 'I set clear "phone-free times" and can stick to them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DB', zh: '我能在与人面对面交流时放下手机。', en: 'I can put my phone away during face-to-face conversations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DB', zh: '我能在睡前至少30分钟不使用电子设备。', en: 'I can avoid electronic devices for at least 30 minutes before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DB', zh: '我会主动关闭不需要的应用通知。', en: 'I proactively turn off notifications for apps I don\'t need.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Offline Activities (线下活动) - OA - 4 questions
        { id: 17, dimension: 'OA', zh: '我每周至少有3小时用于不涉及屏幕的活动。', en: 'I spend at least 3 hours per week on screen-free activities.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'OA', zh: '我能享受完全不碰手机的一天。', en: 'I can enjoy an entire day without touching my phone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'OA', zh: '我有丰富的线下爱好，如运动、阅读纸质书、手工等。', en: 'I have rich offline hobbies like exercise, reading physical books, or crafting.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'OA', zh: '面对面的社交互动比线上交流让我感到更充实。', en: 'Face-to-face social interactions leave me more fulfilled than online communication.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { PA: { total: 0, count: 0 }, SM: { total: 0, count: 0 }, NA: { total: 0, count: 0 }, DB: { total: 0, count: 0 }, OA: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        var overallTotal = 0, overallCount = 0;
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
            overallTotal += dims[d].total;
            overallCount += dims[d].count;
        }
        return {
            score: overallCount > 0 ? Math.round((overallTotal / (overallCount * 5)) * 100) : 0,
            scores: { PA: dims.PA.total, SM: dims.SM.total, NA: dims.NA.total, DB: dims.DB.total, OA: dims.OA.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔴', title: '深度数字沉迷', description: '数字设备已经深度渗透到你生活的方方面面。手机成瘾、社交媒体依赖和通知焦虑可能严重影响了你的睡眠质量、注意力和人际关系。建议从最基本的一步开始：设定每天一个30分钟的"无手机时段"，逐步扩大。', color: '#F44336' },
            { range: [31, 50], icon: '🟠', title: '数字依赖者', description: '你对数字设备有明显的依赖，但已经开始意识到问题。社交媒体和手机使用占据了你大量时间。尝试每周进行一次"数字安息日"，用半天时间完全远离屏幕，感受线下的宁静。', color: '#FF9800' },
            { range: [51, 70], icon: '🟡', title: '数字平衡追求者', description: '你在数字生活和现实之间正在寻找平衡。你有一定的数字边界意识，但仍需加强执行力度。继续培养线下兴趣爱好，让现实生活变得更加丰富多彩。', color: '#FFC107' },
            { range: [71, 85], icon: '🟢', title: '数字健康达人', description: '你拥有健康的数字生活习惯！你能够有意识地使用科技，建立了有效的数字边界，并且有丰富的线下活动。继续保持这种平衡的生活方式。', color: '#4CAF50' },
            { range: [86, 100], icon: '🧘', title: '数字自由大师', description: '你已经达到了数字自由的最高境界！你完全掌控了与科技的关系，手机只是工具而不是主人。你的线下生活丰富多彩，数字边界清晰有力。你是一个真正的数字极简主义实践者。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '🔴', title: 'Deep Digital Addiction', description: 'Digital devices have deeply infiltrated every aspect of your life. Phone addiction, social media dependency, and notification anxiety may be seriously affecting your sleep, attention, and relationships. Start with one basic step: set a 30-minute "phone-free window" each day and gradually expand it.', color: '#F44336' },
            { range: [31, 50], icon: '🟠', title: 'Digital Dependent', description: 'You have a noticeable dependence on digital devices, but you\'re starting to become aware of it. Social media and phone use consume significant amounts of your time. Try a weekly "digital sabbath" — spend half a day completely away from screens and feel the calm of the offline world.', color: '#FF9800' },
            { range: [51, 70], icon: '🟡', title: 'Balance Seeker', description: 'You\'re searching for balance between your digital and real life. You have some awareness of digital boundaries but need to strengthen your follow-through. Keep cultivating offline hobbies to make your real life richer and more fulfilling.', color: '#FFC107' },
            { range: [71, 85], icon: '🟢', title: 'Digital Health Enthusiast', description: 'You have healthy digital habits! You use technology intentionally, have established effective digital boundaries, and enjoy rich offline activities. Keep maintaining this balanced lifestyle.', color: '#4CAF50' },
            { range: [86, 100], icon: '🧘', title: 'Digital Freedom Master', description: 'You\'ve reached the highest level of digital freedom! You completely control your relationship with technology — your phone is a tool, not a master. Your offline life is vibrant, and your digital boundaries are clear and strong. You are a true digital minimalist practitioner.', color: '#2E7D32' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的深度数字排毒能力', disclaimer: '本测试仅供参考，帮助你全面了解自己的数字设备使用习惯和成瘾程度。如果你感到数字设备严重影响了生活质量，建议寻求专业帮助。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Deep Digital Detox Level', disclaimer: 'This test is for reference only, helping you comprehensively understand your digital device usage habits and addiction level. If you feel digital devices are seriously affecting your quality of life, please seek professional help.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default DIGITAL_DETOX_ADVANCED_TEST;
