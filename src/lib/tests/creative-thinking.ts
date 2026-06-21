// @ts-nocheck
// Auto-converted from creative-thinking.js
/* eslint-disable @typescript-eslint/no-explicit-any */

const CREATIVE_THINKING_TEST: any = {
    type: 'creative-thinking', icon: '💡', color: '#9C27B0',
    questions: [
        { id: 1, dimension: 'DT', zh: '面对问题时，我会从多个角度思考解决方案。', en: 'When facing problems, I think about solutions from multiple angles.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'DT', zh: '我能把看似无关的事物联系在一起产生新想法。', en: 'I can connect seemingly unrelated things to generate new ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'DT', zh: '我喜欢质疑传统做法并寻找替代方案。', en: 'I like to question traditional approaches and find alternatives.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'DT', zh: '我的思维不受常规框架限制。', en: 'My thinking is not limited by conventional frameworks.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 5, dimension: 'IF', zh: '在头脑风暴时，我能快速产生大量想法。', en: 'During brainstorming, I can quickly generate a large number of ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'IF', zh: '遇到困难时，我能想出很多不同的应对方法。', en: 'When encountering difficulties, I can think of many different coping methods.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'IF', zh: '我能为同一个目标制定多种实现路径。', en: 'I can create multiple paths to achieve the same goal.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'IF', zh: '我能轻松地对一个概念进行多方面扩展。', en: 'I can easily expand a concept in multiple directions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 9, dimension: 'CF', zh: '当一种方法行不通时，我很快就能想到其他方法。', en: 'When one approach doesn\'t work, I can quickly think of others.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CF', zh: '我能灵活调整策略来适应变化的情况。', en: 'I can flexibly adjust strategies to adapt to changing situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CF', zh: '我能自如地在不同思维模式之间切换。', en: 'I can switch between different thinking modes with ease.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CF', zh: '面对意外情况，我能迅速找到新的切入点。', en: 'When facing unexpected situations, I can quickly find new entry points.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 13, dimension: 'OR', zh: '我的想法经常被认为是独特和新颖的。', en: 'My ideas are often considered unique and novel.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'OR', zh: '我喜欢提出别人想不到的解决方案。', en: 'I like to propose solutions that others wouldn\'t think of.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'OR', zh: '我敢于表达与众不同的观点。', en: 'I dare to express opinions that differ from the crowd.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'OR', zh: '我善于将平凡的事物赋予新的意义。', en: 'I am good at giving new meaning to ordinary things.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],
    calculate: function(answers, questions) {
        var dims = { DT: { total: 0, count: 0 }, IF: { total: 0, count: 0 }, CF: { total: 0, count: 0 }, OR: { total: 0, count: 0 } };
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
            scores: { DT: dims.DT.total, IF: dims.IF.total, CF: dims.CF.total, OR: dims.OR.total },
            percentages: percentages
        };
    },
    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🔧', title: '逻辑思维者', description: '你的思维方式偏向逻辑和结构化。你善于遵循既定规则和流程，但在发散性思维方面还有很大的提升空间。建议尝试头脑风暴、思维导图等创意思维工具。', color: '#F44336' },
            { range: [31, 60], icon: '💭', title: '潜力创意思考者', description: '你具备一定的创意思维能力，有时能产生新颖的想法。通过有意识的练习，如跨领域学习和创意写作，你可以进一步提升创意水平。', color: '#FFC107' },
            { range: [61, 80], icon: '💡', title: '创意思考者', description: '你拥有出色的创意思维能力。你能灵活运用多种思维方式，善于产生新颖的想法并将其转化为实际方案。', color: '#4CAF50' },
            { range: [81, 100], icon: '🎨', title: '创意大师', description: '你拥有非凡的创意思维能力！你的思维灵活、独特且富有想象力。你善于突破常规，创造出令人耳目一新的想法和解决方案。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '🔧', title: 'Logical Thinker', description: 'Your thinking style leans toward logic and structure. You excel at following established rules and processes, but there\'s great room to improve divergent thinking. Try brainstorming, mind mapping, and other creative thinking tools.', color: '#F44336' },
            { range: [31, 60], icon: '💭', title: 'Emerging Creative Thinker', description: 'You have some creative thinking ability and can sometimes generate novel ideas. Through deliberate practice like cross-disciplinary learning and creative writing, you can further enhance your creativity.', color: '#FFC107' },
            { range: [61, 80], icon: '💡', title: 'Creative Thinker', description: 'You possess excellent creative thinking skills. You flexibly use multiple thinking approaches, excelling at generating novel ideas and turning them into practical solutions.', color: '#4CAF50' },
            { range: [81, 100], icon: '🎨', title: 'Creative Master', description: 'You have extraordinary creative thinking abilities! Your thinking is flexible, unique, and imaginative. You excel at breaking conventions and creating refreshing new ideas and solutions.', color: '#2E7D32' }
        ]
    },
    uiText: {
        zh: { resultTitle: '你的创意思维能力', disclaimer: '本测试仅供参考，帮助你了解自己的创造性思维水平。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Creative Thinking Ability', disclaimer: 'This test is for reference only, helping you understand your creative thinking level.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default CREATIVE_THINKING_TEST;
