// @ts-nocheck
// Focus Capacity Test (专注力测试)
/* eslint-disable @typescript-eslint/no-explicit-any */

const FOCUS_CAPACITY_TEST: any = {
    type: 'focus-capacity', icon: '🎯', color: '#7E57C2',
    questions: [
        // Sustained Attention (持续注意力) - SA - 4 questions
        { id: 1, dimension: 'SA', zh: '我能连续专注工作超过一小时而不走神。', en: 'I can focus on work for over an hour without my mind wandering.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'SA', zh: '在听长篇演讲或课程时，我能全程保持注意力。', en: 'During long lectures or courses, I can maintain attention throughout.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'SA', zh: '做同一件事时间长了，我会感到无聊和坐立不安。', en: 'After doing the same thing for a while, I feel bored and restless.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'SA', zh: '我能在一个任务上持续工作，直到完成为止。', en: 'I can work on a single task continuously until it\'s finished.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Distraction Resistance (抗干扰力) - DR - 4 questions
        { id: 5, dimension: 'DR', zh: '即使周围很吵闹，我也能保持专注。', en: 'I can stay focused even in noisy surroundings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'DR', zh: '手机通知响起时，我能忍住不看。', en: 'When my phone notification goes off, I can resist checking it.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'DR', zh: '别人打断我后，我能很快回到之前的工作状态。', en: 'After being interrupted, I can quickly return to my previous work state.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'DR', zh: '我需要完全安静的环境才能集中注意力。', en: 'I need a completely quiet environment to concentrate.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Deep Work (深度工作) - DW - 4 questions
        { id: 9, dimension: 'DW', zh: '我能进入一种完全沉浸的工作状态，忘记时间的流逝。', en: 'I can enter a completely immersed work state, forgetting the passage of time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DW', zh: '我会主动为自己安排不受打扰的深度工作时间。', en: 'I proactively schedule uninterrupted deep work time for myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 11, dimension: 'DW', zh: '在需要深度思考的任务上，我能保持高质量的产出。', en: 'On tasks requiring deep thinking, I can maintain high-quality output.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DW', zh: '复杂问题让我感到兴奋而非焦虑。', en: 'Complex problems excite me rather than make me anxious.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },

        // Multitasking Awareness (多任务意识) - MA - 4 questions
        { id: 13, dimension: 'MA', zh: '我经常同时进行多项任务（如边工作边看手机）。', en: 'I often work on multiple tasks simultaneously (like working while checking my phone).', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'MA', zh: '我了解多任务处理实际上会降低效率。', en: 'I understand that multitasking actually reduces efficiency.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 15, dimension: 'MA', zh: '我能够一次只做一件事，而不感到焦虑或不安。', en: 'I can do one thing at a time without feeling anxious or uneasy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 16, dimension: 'MA', zh: '我发现自己经常在不同任务之间频繁切换。', en: 'I find myself frequently switching between different tasks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { SA: { total: 0, count: 0 }, DR: { total: 0, count: 0 }, DW: { total: 0, count: 0 }, MA: { total: 0, count: 0 } };
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
            scores: { SA: dims.SA.total, DR: dims.DR.total, DW: dims.DW.total, MA: dims.MA.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 25], icon: '🌊', title: '注意力漂移者', description: '你的专注力容易分散，可能经常在任务间切换，难以进入深度工作状态。这在数字时代很常见。建议从小步骤开始：设定5分钟专注计时器，逐步延长。关闭不必要的通知，创造专注环境。', color: '#F44336' },
            { range: [26, 50], icon: '🔍', title: '专注探索者', description: '你有一定的专注能力，但还不够稳定。你能在感兴趣的领域保持注意力，但面对枯燥任务时容易分心。建议练习正念冥想，培养"专注肌肉"。使用番茄工作法等工具辅助。', color: '#FF9800' },
            { range: [51, 75], icon: '🎯', title: '专注力高手', description: '你拥有不错的专注力！你能在多数情况下保持注意力，抵抗干扰，并进入深度工作状态。你已经掌握了专注的核心技能。继续优化你的工作环境和习惯，你的专注力还有提升空间。', color: '#4CAF50' },
            { range: [76, 100], icon: '🧘', title: '专注大师', description: '你拥有卓越的专注力！你能够长时间深度工作，有效抵抗干扰，在复杂任务中保持高质量产出。这种能力在信息过载的时代极为珍贵。继续保护和培养你的专注力。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 25], icon: '🌊', title: 'Attention Drifter', description: 'Your focus tends to scatter easily — you may frequently switch between tasks and struggle to enter deep work states. This is very common in the digital age. Start small: set a 5-minute focus timer and gradually extend it. Turn off unnecessary notifications and create a focus-friendly environment.', color: '#F44336' },
            { range: [26, 50], icon: '🔍', title: 'Focus Explorer', description: 'You have some focus ability, but it\'s not yet stable. You can maintain attention in areas that interest you, but get easily distracted by boring tasks. Try mindfulness meditation to build your "focus muscle." Use tools like the Pomodoro Technique to help.', color: '#FF9800' },
            { range: [51, 75], icon: '🎯', title: 'Focus Expert', description: 'You have solid focus ability! You can maintain attention in most situations, resist distractions, and enter deep work states. You\'ve already mastered the core skills of concentration. Keep optimizing your work environment and habits — there\'s still room to grow.', color: '#4CAF50' },
            { range: [76, 100], icon: '🧘', title: 'Focus Master', description: 'You have exceptional focus ability! You can engage in deep work for extended periods, effectively resist distractions, and maintain high-quality output on complex tasks. This ability is incredibly precious in an age of information overload. Continue protecting and nurturing your focus.', color: '#2E7D32' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的专注力水平', disclaimer: '本测试仅供参考，帮助你了解自己的专注力特点和薄弱环节。专注力是一种可以训练的能力，通过有意识的练习和环境调整，每个人都能提升自己的专注水平。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Focus Capacity', disclaimer: 'This test is for reference only, helping you understand your focus characteristics and weak areas. Focus is a trainable ability — through conscious practice and environmental adjustments, everyone can improve their concentration level.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default FOCUS_CAPACITY_TEST;
