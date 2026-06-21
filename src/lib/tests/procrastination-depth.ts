// @ts-nocheck
// Deep Procrastination Test (深度拖延测试)
/* eslint-disable @typescript-eslint/no-explicit-any */

const PROCRASTINATION_DEPTH_TEST: any = {
    type: 'procrastination-depth', icon: '⏳', color: '#FF6B6B',
    questions: [
        // Avoidance Pattern (回避模式) - AP - 5 questions
        { id: 1, dimension: 'AP', zh: '面对一项重要但困难的任务时，我常常找其他事情来忙。', en: 'When facing an important but difficult task, I often find other things to busy myself with.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AP', zh: '我倾向于先做简单的、不太重要的事情，把重要的事情往后推。', en: 'I tend to do simple, less important things first and push important tasks back.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AP', zh: '当我想到要开始一项大任务时，会感到一阵不适并想逃避。', en: 'When I think about starting a big task, I feel discomfort and want to escape.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AP', zh: '我经常通过刷手机、看视频等方式来逃避需要完成的任务。', en: 'I often use phone scrolling, watching videos, etc. to avoid tasks I need to complete.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'AP', zh: '我会故意忽略那些提醒我需要做事的信号或通知。', en: 'I deliberately ignore signals or reminders that tell me I need to get things done.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Deadline Dependency (截止日期依赖) - DD - 5 questions
        { id: 6, dimension: 'DD', zh: '我通常只在截止日期临近时才真正开始认真工作。', en: 'I usually only start working seriously when the deadline is approaching.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DD', zh: '没有截止日期的任务，我可能会无限期地推迟。', en: 'Without a deadline, I might postpone tasks indefinitely.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DD', zh: '截止日期前的压力反而让我感觉更有动力。', en: 'The pressure before a deadline actually makes me feel more motivated.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'DD', zh: '我有过因为拖延而在最后时刻仓促完成任务的经历。', en: 'I have experienced rushing to finish tasks at the last moment due to procrastination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DD', zh: '我经常给自己设定"假截止日期"来试图提前完成任务，但很少奏效。', en: 'I often set "fake deadlines" to try finishing tasks early, but they rarely work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Perfectionism Paralysis (完美主义瘫痪) - PP - 5 questions
        { id: 11, dimension: 'PP', zh: '我经常因为害怕做得不够好而迟迟不愿开始。', en: 'I often delay starting because I fear not doing well enough.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'PP', zh: '我觉得如果不能把一件事做到完美，还不如不做。', en: 'I feel that if I can\'t do something perfectly, I might as well not do it at all.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'PP', zh: '我花很多时间在计划和准备上，却迟迟不采取行动。', en: 'I spend a lot of time planning and preparing but delay taking action.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'PP', zh: '我对自己的作品或表现有过高的期望，导致经常不满意。', en: 'I have excessively high expectations for my work or performance, leading to frequent dissatisfaction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'PP', zh: '我反复修改已经做得不错的东西，总觉得还可以更好。', en: 'I repeatedly revise things that are already good enough, always feeling they could be better.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Task Initiation (任务启动) - TI - 5 questions
        { id: 16, dimension: 'TI', zh: '即使是很小的任务，我也经常觉得"开始"这一步最难。', en: 'Even for small tasks, I often feel that "starting" is the hardest step.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 17, dimension: 'TI', zh: '我需要等到"感觉对了"才会开始做事。', en: 'I need to wait until I "feel right" before I start working.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 18, dimension: 'TI', zh: '我经常告诉自己"明天再开始"。', en: 'I often tell myself "I\'ll start tomorrow."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 19, dimension: 'TI', zh: '开始一项新任务前，我总觉得需要更多信息或更好的条件。', en: 'Before starting a new task, I always feel I need more information or better conditions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 20, dimension: 'TI', zh: '一旦真正开始做某件事，我发现它通常没有我想象的那么难。', en: 'Once I actually start something, I usually find it\'s not as hard as I imagined.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] }
    ],

    calculate: function(answers, questions) {
        var dims = { AP: { total: 0, count: 0 }, DD: { total: 0, count: 0 }, PP: { total: 0, count: 0 }, TI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += answers[i] + 1; dims[q.dimension].count++; } });
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
            scores: { AP: dims.AP.total, DD: dims.DD.total, PP: dims.PP.total, TI: dims.TI.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🚀', title: '行动达人', description: '你几乎没有拖延倾向！你能迅速开始任务，不依赖截止日期的压力，并且能保持高效的执行力。你的自我管理能力令人羡慕。继续保持这种良好的习惯。', color: '#4CAF50' },
            { range: [26, 50], icon: '⏰', title: '轻度拖延者', description: '你偶尔会拖延，但总体上能较好地管理时间。你可能在面对特别困难或无聊的任务时会有所回避。建议为自己设定更明确的小目标，帮助降低启动门槛。', color: '#FFC107' },
            { range: [51, 75], icon: '🕐', title: '习惯性拖延者', description: '拖延已经成为你生活中的一个明显模式。你可能经常依赖截止日期来驱动行动，或因完美主义而难以开始。识别你的拖延触发点，尝试"两分钟规则"：如果一件事两分钟内能完成，立刻做。', color: '#FF9800' },
            { range: [76, 100], icon: '🛑', title: '深度拖延者', description: '拖延严重影响了你的效率和生活质量。回避模式、截止日期依赖和完美主义瘫痪可能交织在一起。建议从最小的一步开始，不要等到"准备好"。如果拖延伴随焦虑或抑郁，考虑寻求专业帮助。', color: '#F44336' }
        ],
        en: [
            { range: [0, 25], icon: '🚀', title: 'Action Master', description: 'You have almost no procrastination tendencies! You start tasks quickly, don\'t rely on deadline pressure, and maintain efficient execution. Your self-management skills are admirable. Keep up these excellent habits.', color: '#4CAF50' },
            { range: [26, 50], icon: '⏰', title: 'Mild Procrastinator', description: 'You procrastinate occasionally but generally manage your time well. You might avoid particularly difficult or boring tasks. Try setting clearer small goals to help lower the barrier to starting.', color: '#FFC107' },
            { range: [51, 75], icon: '🕐', title: 'Habitual Procrastinator', description: 'Procrastination has become a clear pattern in your life. You may often rely on deadlines to drive action, or struggle to start due to perfectionism. Identify your procrastination triggers and try the "two-minute rule" — if something takes two minutes, do it now.', color: '#FF9800' },
            { range: [76, 100], icon: '🛑', title: 'Deep Procrastinator', description: 'Procrastination significantly impacts your efficiency and quality of life. Avoidance patterns, deadline dependency, and perfectionism paralysis may intertwine. Start with the smallest possible step — don\'t wait until you\'re "ready." If procrastination comes with anxiety or depression, consider professional help.', color: '#F44336' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的拖延深度', disclaimer: '本测试仅供参考，帮助你了解自己的拖延模式和成因。拖延是一种常见的行为模式，通过有意识的调整和练习，可以逐步改善。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Procrastination Depth', disclaimer: 'This test is for reference only, helping you understand your procrastination patterns and causes. Procrastination is a common behavioral pattern that can gradually improve with conscious adjustment and practice.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default PROCRASTINATION_DEPTH_TEST;
