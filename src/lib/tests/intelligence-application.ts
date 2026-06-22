// @ts-nocheck
// Intelligence Application Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const INTELLIGENCE_APPLICATION_TEST: any = {
    type: 'intelligence-application', icon: '🧪', color: '#5C6BC0',
    questions: [
        // Practical Problem Solving (PP) - 4 questions
        { id: 1, dimension: 'PP', zh: '面对日常生活中的实际问题，我通常能够找到有效的解决方案。', en: 'Facing practical everyday problems, I can usually find effective solutions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PP', zh: '我善于将复杂的理论知识转化为实际可操作的步骤。', en: 'I\'m good at translating complex theoretical knowledge into practical actionable steps.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PP', zh: '当遇到新问题时，我能够调动已有的知识和经验来应对。', en: 'When encountering new problems, I can mobilize existing knowledge and experience to respond.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PP', zh: '我能够在资源有限的情况下找到解决问题的方法。', en: 'I can find ways to solve problems even with limited resources.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Creative Application (CA) - 4 questions
        { id: 5, dimension: 'CA', zh: '我能够将不同领域的知识结合起来产生新的想法。', en: 'I can combine knowledge from different fields to generate new ideas.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'CA', zh: '我经常能够用创新的方式解决看似无解的问题。', en: 'I can often solve seemingly unsolvable problems in innovative ways.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'CA', zh: '我喜欢尝试用非常规的方法来完成任务或解决问题。', en: 'I like to try unconventional methods to complete tasks or solve problems.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'CA', zh: '我能够在艺术、设计或写作等创造性活动中运用我的智力。', en: 'I can apply my intelligence in creative activities like art, design, or writing.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Analytical Transfer (AT) - 4 questions
        { id: 9, dimension: 'AT', zh: '我善于从一个领域学到的知识应用到另一个完全不同的领域。', en: 'I\'m good at applying knowledge learned in one domain to a completely different field.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'AT', zh: '我能够在面对新情况时识别出与以往经验的相似之处。', en: 'I can identify similarities with past experiences when facing new situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'AT', zh: '我善于从不同学科或领域中发现共同的模式和原理。', en: 'I\'m good at discovering common patterns and principles across different disciplines or fields.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'AT', zh: '我能够将抽象概念应用到具体的日常情境中。', en: 'I can apply abstract concepts to concrete everyday situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Social Intelligence Use (SI) - 4 questions
        { id: 13, dimension: 'SI', zh: '我能够运用智力来理解和改善人际关系。', en: 'I can use intelligence to understand and improve interpersonal relationships.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'SI', zh: '我善于分析社交情境中不同人的需求和动机。', en: 'I\'m good at analyzing the needs and motivations of different people in social situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'SI', zh: '我能够用理性和智慧来化解人际冲突。', en: 'I can use reason and wisdom to resolve interpersonal conflicts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'SI', zh: '我善于在团队中运用自己的智力为集体做出贡献。', en: 'I\'m good at using my intelligence in teams to contribute to the collective.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        PP: { color: '#7986CB', mood: '务实 · 有效 · 解决', quote_zh: '真正的聪明不在于知道多少，而在于能用知识解决多少问题。', quote_en: 'True intelligence isn\'t about how much you know, but how many problems you can solve with what you know.' },
        CA: { color: '#CE93D8', mood: '创新 · 突破 · 灵感', quote_zh: '创造力是智力最美的表达方式。', quote_en: 'Creativity is the most beautiful expression of intelligence.' },
        AT: { color: '#80CBC4', mood: '迁移 · 贯通 · 融合', quote_zh: '知识的力量在于它能跨越边界，在新的土壤中开花结果。', quote_en: 'The power of knowledge lies in its ability to cross boundaries and flourish in new soil.' },
        SI: { color: '#FFCC80', mood: '智慧 · 共情 · 影响', quote_zh: '最高级的智力运用，是用智慧温暖人心。', quote_en: 'The highest application of intelligence is using wisdom to warm hearts.' }
    },

    types: {
        PP: {
            zh: { title: '务实解题型', name: '实际问题解决', description: '你在将智力应用于实际问题解决方面表现出色。你善于将理论转化为实践，在资源有限的情况下找到有效的解决方案。这种务实的智力应用让你在生活和工作中都能做出实际的成果。' },
            en: { title: 'Practical Problem Solver', name: 'Practical Problem Solving', description: 'You excel at applying intelligence to practical problem-solving. You\'re good at translating theory into practice and finding effective solutions even with limited resources. This practical application of intelligence enables you to achieve tangible results in life and work.' }
        },
        CA: {
            zh: { title: '创意应用型', name: '创造性应用', description: '你在将智力用于创造性应用方面有着出色的表现。你善于跨领域结合知识产生新想法，用创新的方式解决问题。你不喜欢循规蹈矩，总是在寻找更好的、更独特的方法。这种创造力是你智力的重要组成部分。' },
            en: { title: 'Creative Application Type', name: 'Creative Application', description: 'You excel at using intelligence for creative application. You\'re good at combining cross-disciplinary knowledge to generate new ideas and solving problems in innovative ways. You don\'t like following the beaten path, always looking for better and more unique approaches. This creativity is an essential component of your intelligence.' }
        },
        AT: {
            zh: { title: '知识迁移型', name: '分析性迁移', description: '你在跨领域知识迁移方面有着卓越的能力。你善于从不同学科中发现共同的模式和原理，将一个领域的见解应用到另一个领域。这种迁移能力让你的学习效率更高，解决问题的视角更广。你是一个真正的"知识桥梁"建造者。' },
            en: { title: 'Analytical Transfer Type', name: 'Analytical Transfer', description: 'You have a remarkable ability to transfer knowledge across domains. You\'re good at discovering common patterns and principles across different disciplines and applying insights from one field to another. This transfer ability makes your learning more efficient and your problem-solving perspective broader. You\'re a true "knowledge bridge" builder.' }
        },
        SI: {
            zh: { title: '社交智慧型', name: '社交智力运用', description: '你在将智力应用于社交和人际关系方面有着独特的优势。你善于分析社交情境，理解他人的需求和动机，并用智慧化解冲突。你能够在团队中发挥智力优势，为集体做出贡献。你的智力不仅服务于个人，更服务于关系和社群。' },
            en: { title: 'Social Intelligence Type', name: 'Social Intelligence Use', description: 'You have a unique advantage in applying intelligence to social and interpersonal relationships. You\'re good at analyzing social situations, understanding others\' needs and motivations, and resolving conflicts with wisdom. You can leverage your intellectual strengths in teams to contribute to the collective. Your intelligence serves not just yourself but relationships and communities.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { PP: { total: 0, count: 0 }, CA: { total: 0, count: 0 }, AT: { total: 0, count: 0 }, SI: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { PP: dims.PP.total, CA: dims.CA.total, AT: dims.AT.total, SI: dims.SI.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'PP', zh: '实际问题解决', score: percentages.PP },
                { name: 'CA', zh: '创造性应用', score: percentages.CA },
                { name: 'AT', zh: '分析性迁移', score: percentages.AT },
                { name: 'SI', zh: '社交智力运用', score: percentages.SI }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的智力应用画像', disclaimer: '本测试仅供参考，帮助你了解自己在实际问题解决、创造性应用、分析性迁移和社交智力运用方面的应用能力。智力的价值不在于拥有多少，而在于如何运用。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Intelligence Application Profile', disclaimer: 'This test is for reference only, helping you understand your application abilities in practical problem-solving, creative application, analytical transfer, and social intelligence use. The value of intelligence lies not in how much you have, but in how you apply it.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default INTELLIGENCE_APPLICATION_TEST;
