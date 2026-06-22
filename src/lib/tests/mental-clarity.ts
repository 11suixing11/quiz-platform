// @ts-nocheck
// Mental Clarity Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const MENTAL_CLARITY_TEST: any = {
    type: 'mental-clarity', icon: '🔮', color: '#7E57C2',
    questions: [
        // Focus Stability (FS) - 4 questions
        { id: 1, dimension: 'FS', zh: '我能够长时间集中注意力在一项任务上而不分心。', en: 'I can concentrate on a task for a long time without getting distracted.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'FS', zh: '当注意力被分散时，我能够快速将它拉回到原来的任务上。', en: 'When my attention is diverted, I can quickly bring it back to the original task.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'FS', zh: '我能够在嘈杂或干扰较多的环境中保持专注。', en: 'I can stay focused in noisy or highly distracting environments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'FS', zh: '我的思维不容易被无关的念头打断。', en: 'My thinking is not easily interrupted by irrelevant thoughts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Thought Organization (TO) - 4 questions
        { id: 5, dimension: 'TO', zh: '我能够将复杂的想法整理成清晰、有条理的结构。', en: 'I can organize complex ideas into clear, structured frameworks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'TO', zh: '我在表达观点时能够做到逻辑清晰、层次分明。', en: 'I can express my viewpoints with clear logic and distinct layers.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'TO', zh: '我善于用笔记、清单或思维导图来整理思路。', en: 'I\'m good at using notes, lists, or mind maps to organize my thinking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'TO', zh: '面对大量信息时，我能够快速筛选出关键要点。', en: 'When facing a large amount of information, I can quickly identify key points.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Decision Clarity (DC) - 4 questions
        { id: 9, dimension: 'DC', zh: '面对选择时，我能够清楚地了解每个选项的利弊。', en: 'When facing choices, I can clearly understand the pros and cons of each option.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'DC', zh: '我做决定时不会过度犹豫，能够在合理时间内做出选择。', en: 'I don\'t over-hesitate when making decisions and can make choices within a reasonable time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'DC', zh: '我能够区分哪些决定需要深思熟虑，哪些可以快速决定。', en: 'I can distinguish which decisions need careful consideration and which can be made quickly.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'DC', zh: '做出决定后，我通常不会反复纠结或后悔。', en: 'After making a decision, I usually don\'t keep second-guessing or regretting it.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Cognitive Flexibility (CF) - 4 questions
        { id: 13, dimension: 'CF', zh: '当原有思路行不通时，我能够快速转换到新的思考角度。', en: 'When the original approach doesn\'t work, I can quickly switch to a new perspective.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'CF', zh: '我能够同时考虑一个问题的多个方面。', en: 'I can consider multiple aspects of a problem simultaneously.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'CF', zh: '面对新的信息或证据，我能够灵活地更新自己的观点。', en: 'Facing new information or evidence, I can flexibly update my viewpoints.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'CF', zh: '我能够在不同思维方式之间（如创造性思维和分析性思维）灵活切换。', en: 'I can flexibly switch between different thinking modes, such as creative and analytical thinking.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        FS: { color: '#9FA8DA', mood: '稳定 · 持续 · 深入', quote_zh: '真正的专注不是排除一切，而是将一切凝聚于一处。', quote_en: 'True focus isn\'t excluding everything — it\'s converging everything to one point.' },
        TO: { color: '#80CBC4', mood: '条理 · 清晰 · 系统', quote_zh: '清晰的思维是有效行动的起点。', quote_en: 'Clear thinking is the starting point of effective action.' },
        DC: { color: '#FFD54F', mood: '果断 · 清醒 · 自信', quote_zh: '好的决定不是完美的决定，而是在当下做出最清醒的选择。', quote_en: 'A good decision isn\'t a perfect one — it\'s the clearest choice made in the moment.' },
        CF: { color: '#EF9A9A', mood: '灵活 · 开放 · 适应', quote_zh: '思维的灵活性是面对不确定性最强大的武器。', quote_en: 'Cognitive flexibility is the most powerful weapon against uncertainty.' }
    },

    types: {
        FS: {
            zh: { title: '专注稳定型', name: '专注稳定性', description: '你在保持专注方面有着出色的能力。你能够长时间集中注意力，即使在干扰较多的环境中也能保持专注。当注意力被分散时，你能够快速将其拉回。这种专注稳定性是你深度工作和学习的重要基础。' },
            en: { title: 'Focus Stable Type', name: 'Focus Stability', description: 'You have an excellent ability to maintain focus. You can concentrate for extended periods and stay focused even in distracting environments. When your attention drifts, you can quickly bring it back. This focus stability is an important foundation for your deep work and learning.' }
        },
        TO: {
            zh: { title: '思维有序型', name: '思维组织', description: '你在思维组织方面表现出色。你善于将复杂的信息整理成清晰的结构，在表达时做到逻辑分明。你能够快速从大量信息中筛选出关键要点，这让学习和工作都变得更加高效。你的思维就像一座精心整理的图书馆，随时可以找到所需的知识。' },
            en: { title: 'Well-Organized Thinker Type', name: 'Thought Organization', description: 'You excel in thought organization. You\'re good at organizing complex information into clear structures and expressing ideas with distinct logic. You can quickly identify key points from large amounts of information, making learning and work more efficient. Your mind is like a well-organized library where you can always find what you need.' }
        },
        DC: {
            zh: { title: '决策清明型', name: '决策清晰度', description: '你在做决策方面有着清晰的思维。你能够全面评估每个选项的利弊，在合理时间内做出选择，并且不会在事后反复纠结。这种决策清晰度让你在面对重要选择时显得从容不迫。你知道，好的决定不一定是最完美的，但一定是在当下最清醒的。' },
            en: { title: 'Clear Decision-Maker Type', name: 'Decision Clarity', description: 'You have clear thinking when it comes to decision-making. You can comprehensively evaluate the pros and cons of each option, make choices within a reasonable time, and don\'t keep second-guessing afterward. This decision clarity makes you composed when facing important choices. You know that a good decision isn\'t necessarily the most perfect, but it\'s definitely the clearest in the moment.' }
        },
        CF: {
            zh: { title: '认知灵活型', name: '认知灵活性', description: '你在认知灵活性方面有着出色的表现。你能够从多个角度看问题，灵活地更新观点，并在不同思维方式之间自如切换。面对新的信息，你不会固守旧有认知，而是能够开放地接纳和整合。这种灵活性让你在快速变化的环境中总能找到新的可能性。' },
            en: { title: 'Cognitively Flexible Type', name: 'Cognitive Flexibility', description: 'You have excellent cognitive flexibility. You can view problems from multiple angles, flexibly update your viewpoints, and switch between different thinking modes with ease. Facing new information, you don\'t cling to old beliefs but can openly accept and integrate. This flexibility allows you to always find new possibilities in rapidly changing environments.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { FS: { total: 0, count: 0 }, TO: { total: 0, count: 0 }, DC: { total: 0, count: 0 }, CF: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { FS: dims.FS.total, TO: dims.TO.total, DC: dims.DC.total, CF: dims.CF.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'FS', zh: '专注稳定性', score: percentages.FS },
                { name: 'TO', zh: '思维组织', score: percentages.TO },
                { name: 'DC', zh: '决策清晰度', score: percentages.DC },
                { name: 'CF', zh: '认知灵活性', score: percentages.CF }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的心智清晰度画像', disclaimer: '本测试仅供参考，帮助你了解自己在专注稳定性、思维组织、决策清晰度和认知灵活性方面的发展状况。心智清晰度是一种可以通过练习不断提升的能力。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Mental Clarity Profile', disclaimer: 'This test is for reference only, helping you understand your development in focus stability, thought organization, decision clarity, and cognitive flexibility. Mental clarity is an ability that can be continuously improved through practice.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default MENTAL_CLARITY_TEST;
