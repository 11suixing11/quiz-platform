// @ts-nocheck
// Flow State Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const FLOW_STATE_TEST: any = {
    type: 'flow-state', icon: '🌊', color: '#00BCD4',
    questions: [
        // Absorption (专注沉浸) - AB - 4 questions
        { id: 1, dimension: 'AB', zh: '当我专注于一项任务时，周围的世界仿佛消失了。', en: 'When I focus on a task, the world around me seems to disappear.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'AB', zh: '我能长时间专注于一件事而不感到时间流逝。', en: 'I can focus on something for a long time without noticing the passage of time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'AB', zh: '我在做喜欢的事情时，会完全忘记自我意识。', en: 'When doing something I enjoy, I completely lose self-consciousness.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'AB', zh: '我经常在深度专注中体验到一种"合一"的感觉。', en: 'I often experience a sense of "oneness" during deep concentration.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Challenge-Skill Balance (挑战-技能平衡) - CB - 4 questions
        { id: 5, dimension: 'CB', zh: '我在面对略高于自己能力的挑战时感到最兴奋。', en: 'I feel most excited when facing challenges slightly above my skill level.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CB', zh: '我能很好地判断一项任务是否适合自己当前的能力水平。', en: 'I can accurately judge whether a task matches my current skill level.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CB', zh: '当任务太简单时，我会主动增加难度来保持投入感。', en: 'When tasks are too easy, I actively increase difficulty to stay engaged.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CB', zh: '我在感到略微超出舒适区时工作效率最高。', en: 'I am most productive when I feel slightly outside my comfort zone.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Autotelic (自成目的) - AU - 4 questions
        { id: 9, dimension: 'AU', zh: '我做很多事情是因为过程本身带来的快乐，而非结果。', en: 'I do many things for the joy of the process itself, not just the outcome.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AU', zh: '即使没有外在奖励，我也会因为内在满足感而投入某项活动。', en: 'Even without external rewards, I engage in activities for inner satisfaction.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AU', zh: '我经常主动寻求能够让我全身心投入的机会。', en: 'I actively seek opportunities that allow me to be fully immersed.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AU', zh: '对我来说，享受过程比达成目标更重要。', en: 'For me, enjoying the process is more important than reaching the goal.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Transformation (体验转化) - TF - 4 questions
        { id: 13, dimension: 'TF', zh: '深度投入的体验过后，我感觉自己成长了不少。', en: 'After deeply immersive experiences, I feel I have grown significantly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'TF', zh: '心流体验让我对自己有了全新的认识。', en: 'Flow experiences have given me new insights about myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'TF', zh: '沉浸在某件事中时，我常常获得创造性的灵感。', en: 'When immersed in something, I often gain creative inspiration.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'TF', zh: '深度投入的经历帮助我突破了自己的能力边界。', en: 'Deeply immersive experiences have helped me push beyond my ability boundaries.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { AB: { total: 0, count: 0 }, CB: { total: 0, count: 0 }, AU: { total: 0, count: 0 }, TF: { total: 0, count: 0 } };
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
            scores: { AB: dims.AB.total, CB: dims.CB.total, AU: dims.AU.total, TF: dims.TF.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 30], icon: '😴', title: '心流低频体验者', description: '你很少进入心流状态。日常生活中的干扰可能阻碍了你的深度专注。建议尝试减少多任务处理，创造不被打扰的时间段，从一项你真正感兴趣的活动开始练习专注。', color: '#F44336' },
            { range: [31, 60], icon: '🔍', title: '心流探索者', description: '你偶尔能体验到心流，但还不够稳定。你已经在某些活动中感受到了全身心投入的快乐。继续识别那些让你忘记时间的活动，有意识地为自己创造进入心流的条件。', color: '#FFC107' },
            { range: [61, 80], icon: '🌊', title: '心流实践者', description: '你能够较为频繁地进入心流状态。你对挑战和技能的平衡有不错的直觉，也懂得享受过程本身。继续培养这种能力，你可以让更多的日常活动变成心流体验。', color: '#4CAF50' },
            { range: [81, 100], icon: '✨', title: '心流大师', description: '你拥有卓越的心流体验能力！你能够在各种情境中找到投入感和沉浸感。专注、挑战、享受、成长在你身上和谐统一。这种能力是创造力和幸福感的重要来源。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '😴', title: 'Flow Novice', description: 'You rarely enter flow states. Daily distractions may be blocking your deep focus. Try reducing multitasking, creating uninterrupted time blocks, and starting with an activity you\'re genuinely interested in to practice concentration.', color: '#F44336' },
            { range: [31, 60], icon: '🔍', title: 'Flow Explorer', description: 'You occasionally experience flow, but it\'s not yet consistent. You\'ve already felt the joy of full engagement in some activities. Keep identifying those activities where you lose track of time and consciously create conditions for flow.', color: '#FFC107' },
            { range: [61, 80], icon: '🌊', title: 'Flow Practitioner', description: 'You enter flow states fairly regularly. You have good intuition for balancing challenge and skill, and you know how to enjoy the process itself. Keep developing this ability — you can turn more everyday activities into flow experiences.', color: '#4CAF50' },
            { range: [81, 100], icon: '✨', title: 'Flow Master', description: 'You have an exceptional ability to experience flow! You can find engagement and immersion in various situations. Focus, challenge, enjoyment, and growth are harmoniously unified in you. This ability is a vital source of creativity and happiness.', color: '#2E7D32' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的心流状态', disclaimer: '本测试仅供参考，帮助你了解自己进入心流状态的能力。心流是一种可以培养的技能，通过有意识的练习可以逐步提升。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Flow State', disclaimer: 'This test is for reference only, helping you understand your ability to enter flow states. Flow is a skill that can be cultivated and improved through intentional practice.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default FLOW_STATE_TEST;
