// @ts-nocheck
// Sleep Hygiene Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const SLEEP_HYGIENE_TEST: any = {
    type: 'sleep-hygiene', icon: '🛏️', color: '#5C6BC0',
    questions: [
        // Bedtime Routine (BR) - 4 questions
        { id: 1, dimension: 'BR', zh: '我每天在大致相同的时间上床睡觉。', en: 'I go to bed at roughly the same time every day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'BR', zh: '我睡前会进行放松活动（如阅读、冥想）。', en: 'I engage in relaxing activities before bed (e.g., reading, meditation).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'BR', zh: '我在睡前一小时避免使用手机或电脑。', en: 'I avoid using phones or computers in the hour before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'BR', zh: '我有固定的睡前仪式（如泡澡、喝花茶）。', en: 'I have a consistent bedtime ritual (e.g., bath, herbal tea).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Sleep Environment (SE) - 4 questions
        { id: 5, dimension: 'SE', zh: '我的卧室温度适宜（不太热也不太冷）。', en: 'My bedroom temperature is comfortable (not too hot or cold).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SE', zh: '我的卧室足够安静，没有干扰噪音。', en: 'My bedroom is quiet enough without disruptive noise.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SE', zh: '我的卧室足够黑暗，有利于入睡。', en: 'My bedroom is dark enough to support falling asleep.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SE', zh: '我的床和枕头舒适且支撑良好。', en: 'My bed and pillow are comfortable and supportive.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Sleep Timing (ST) - 4 questions
        { id: 9, dimension: 'ST', zh: '我每天大致在同一时间起床（包括周末）。', en: 'I wake up at roughly the same time every day (including weekends).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'ST', zh: '我在下午三点后避免摄入咖啡因。', en: 'I avoid caffeine after 3 PM.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'ST', zh: '我在睡前避免大量进食或饮酒。', en: 'I avoid heavy meals or alcohol before bed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'ST', zh: '我白天的运动不会安排在临睡前。', en: 'I don\'t exercise too close to bedtime.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Sleep Quality (SQ) - 4 questions
        { id: 13, dimension: 'SQ', zh: '我通常能在20分钟内入睡。', en: 'I usually fall asleep within 20 minutes.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SQ', zh: '我夜里很少醒来，或醒来后能很快再次入睡。', en: 'I rarely wake at night, or I fall back asleep quickly when I do.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SQ', zh: '我早上醒来感到精力充沛。', en: 'I wake up feeling rested and energized.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SQ', zh: '我白天不需要依赖咖啡或小睡来保持清醒。', en: 'I don\'t rely on caffeine or naps to stay awake during the day.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        BR: { color: '#7986CB', mood: '仪式 · 安定 · 归零', quote_zh: '每一个安稳的夜晚，都从一个温柔的仪式开始。', quote_en: 'Every restful night begins with a gentle ritual.' },
        SE: { color: '#4FC3F7', mood: '庇护 · 宁静 · 温度', quote_zh: '你的卧室是一座避风港，温柔地接住每一个疲惫的灵魂。', quote_en: 'Your bedroom is a sanctuary that gently catches every weary soul.' },
        ST: { color: '#81C784', mood: '节律 · 一致 · 自律', quote_zh: '规律的节奏是身体最诚实的承诺。', quote_en: 'A steady rhythm is the body\'s most honest promise.' },
        SQ: { color: '#FFB74D', mood: '深眠 · 恢复 · 活力', quote_zh: '好的睡眠不是奢侈，而是你值得拥有的修复时光。', quote_en: 'Good sleep is not a luxury — it\'s the restoration time you deserve.' }
    },

    types: {
        BR: {
            zh: { title: '睡前仪式型', name: '睡前仪式', description: '你在睡前仪式方面做得很好。你有固定的放松习惯，能够帮助身体从白天的忙碌过渡到夜晚的安宁。这种仪式感不仅有助于更快入睡，也是一种善待自己的方式。继续保持这些美好的习惯，它们是你送给自己最好的晚安礼物。' },
            en: { title: 'Bedtime Routine Type', name: 'Bedtime Routine', description: 'You excel at bedtime routines. You have consistent relaxation habits that help your body transition from the day\'s busyness to nighttime calm. This ritual not only helps you fall asleep faster but is also a way of being kind to yourself. Keep nurturing these beautiful habits — they\'re the best goodnight gift you can give yourself.' }
        },
        SE: {
            zh: { title: '睡眠环境型', name: '睡眠环境', description: '你在打造理想睡眠环境方面做得很出色。温度、光线、噪音和床品的舒适度，你都考虑到了。一个好的睡眠环境就像是一个无声的拥抱，让你的身体知道：现在可以安心休息了。你的卧室已经准备好成为你每晚最好的避风港。' },
            en: { title: 'Sleep Environment Type', name: 'Sleep Environment', description: 'You excel at creating an ideal sleep environment. Temperature, light, noise, and bedding comfort — you\'ve thought of everything. A good sleep environment is like a silent embrace that tells your body: it\'s safe to rest now. Your bedroom is ready to be your best sanctuary every night.' }
        },
        ST: {
            zh: { title: '睡眠节律型', name: '睡眠节律', description: '你在维持规律的睡眠节律方面表现出色。你了解咖啡因、运动和饮食对睡眠的影响，并且能够做出明智的选择。规律的作息是送给生物钟最好的礼物，它会用充沛的精力来回报你。' },
            en: { title: 'Sleep Timing Type', name: 'Sleep Timing', description: 'You\'re excellent at maintaining a regular sleep rhythm. You understand how caffeine, exercise, and diet affect sleep and make wise choices accordingly. A consistent schedule is the best gift you can give your circadian rhythm — and it will repay you with abundant energy.' }
        },
        SQ: {
            zh: { title: '睡眠质量型', name: '睡眠质量', description: '你的整体睡眠质量很好。你能够较快入睡，夜间安睡，早上醒来精力充沛。这是良好睡眠卫生的综合体现。享受这份高质量的休息，它会在你清醒时的每一刻都闪闪发光。' },
            en: { title: 'Sleep Quality Type', name: 'Sleep Quality', description: 'Your overall sleep quality is excellent. You fall asleep quickly, sleep soundly through the night, and wake up refreshed. This is the combined result of good sleep hygiene. Enjoy this high-quality rest — it will shine through every moment of your waking hours.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { BR: { total: 0, count: 0 }, SE: { total: 0, count: 0 }, ST: { total: 0, count: 0 }, SQ: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { BR: dims.BR.total, SE: dims.SE.total, ST: dims.ST.total, SQ: dims.SQ.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'BR', zh: '睡前仪式', score: percentages.BR },
                { name: 'SE', zh: '睡眠环境', score: percentages.SE },
                { name: 'ST', zh: '睡眠节律', score: percentages.ST },
                { name: 'SQ', zh: '睡眠质量', score: percentages.SQ }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的睡眠卫生状况', disclaimer: '本测试仅供参考，帮助你了解自己的睡眠卫生习惯。良好的睡眠卫生对身心健康至关重要。如有严重睡眠问题，请咨询医生。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '需改善', scoreHigh: '很好' },
        en: { resultTitle: 'Your Sleep Hygiene Profile', disclaimer: 'This test is for reference only, helping you understand your sleep hygiene habits. Good sleep hygiene is vital for physical and mental well-being. If you have serious sleep problems, consult a doctor.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Needs Work', scoreHigh: 'Great' }
    }
};

export default SLEEP_HYGIENE_TEST;
