// @ts-nocheck
// Self-Talk Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const SELF_TALK_TEST: any = {
    type: 'self-talk', icon: '💭', color: '#9C27B0',
    questions: [
        // Positive Self-Talk (积极内心对话) - PS - 4 questions
        { id: 1, dimension: 'PS', zh: '当我犯错时，我会告诉自己这是学习的机会。', en: 'When I make mistakes, I tell myself it\'s a learning opportunity.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PS', zh: '面对困难时，我内心会有一个鼓励自己的声音。', en: 'When facing difficulties, there is an encouraging voice inside me.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PS', zh: '我习惯用积极的语言和自己对话。', en: 'I habitually use positive language when talking to myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PS', zh: '我能客观地看到自己的优点和成就。', en: 'I can objectively recognize my strengths and achievements.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Negative Self-Talk (消极内心对话) - NS - 4 questions
        { id: 5, dimension: 'NS', zh: '我经常在心里批评自己做得不够好。', en: 'I frequently criticize myself internally for not doing well enough.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 6, dimension: 'NS', zh: '失败后，我脑海中会反复出现自我否定的想法。', en: 'After failure, self-deprecating thoughts repeatedly run through my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 7, dimension: 'NS', zh: '我常常拿自己和别人比较，然后觉得自己不如人。', en: 'I often compare myself to others and feel inferior.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },
        { id: 8, dimension: 'NS', zh: '面对新挑战时，我的第一反应是"我做不到"。', en: 'When facing new challenges, my first thought is "I can\'t do this."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [5,4,3,2,1] },

        // Self-Awareness (自我觉察) - SA - 4 questions
        { id: 9, dimension: 'SA', zh: '我能清楚地意识到自己内心正在对自己说什么。', en: 'I am clearly aware of what I am saying to myself internally.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'SA', zh: '我能分辨哪些内心声音是理性的，哪些是情绪化的。', en: 'I can distinguish which inner voices are rational and which are emotional.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'SA', zh: '当消极想法出现时，我能及时察觉并暂停。', en: 'When negative thoughts arise, I can notice and pause in time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'SA', zh: '我了解什么样的情境容易触发我内心的消极对话。', en: 'I understand what situations tend to trigger my inner negative dialogue.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Dialogue Flexibility (对话灵活性) - DF - 4 questions
        { id: 13, dimension: 'DF', zh: '当消极想法出现时，我能够主动转换视角来看待问题。', en: 'When negative thoughts arise, I can actively shift perspective to view the problem.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'DF', zh: '我能根据情境灵活调整自己内心的对话方式。', en: 'I can flexibly adjust my inner dialogue based on the situation.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'DF', zh: '我会用第三人称和自己对话来获得更客观的看法。', en: 'I use third-person self-talk to gain a more objective perspective.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'DF', zh: '我能把内心的批评声音转化为建设性的建议。', en: 'I can transform my inner critical voice into constructive suggestions.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    calculate: function(answers, questions) {
        var dims = { PS: { total: 0, count: 0 }, NS: { total: 0, count: 0 }, SA: { total: 0, count: 0 }, DF: { total: 0, count: 0 } };
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
            scores: { PS: dims.PS.total, NS: dims.NS.total, SA: dims.SA.total, DF: dims.DF.total },
            percentages: percentages
        };
    },

    resultTypes: {
        zh: [
            { range: [0, 30], icon: '🌧️', title: '内心风暴中', description: '你的内心对话目前以消极和自我批评为主。这可能让你感到疲惫和无力。好消息是，意识到这一点就是改变的开始。尝试每天记录三件你做得好的小事，逐步培养内心的友善声音。', color: '#F44336' },
            { range: [31, 60], icon: '🌤️', title: '内心对话者', description: '你的内心对话有积极的一面，但也时常被消极声音干扰。你正在学习如何更好地觉察和管理自己的内心世界。持续练习正念和自我同情，可以帮助你建立更健康的内心对话模式。', color: '#FFC107' },
            { range: [61, 80], icon: '☀️', title: '内心智者', description: '你拥有较为健康的内心对话模式。你能够觉察自己的想法，用积极的方式鼓励自己，也能灵活调整内心的声音。你已经掌握了一项重要的心理技能。', color: '#4CAF50' },
            { range: [81, 100], icon: '🌈', title: '内心对话大师', description: '你拥有卓越的内心对话能力！你能够自如地在积极鼓励和客观反思之间切换，把批评转化为成长的动力。你的内心声音是你最可靠的朋友和导师。', color: '#2E7D32' }
        ],
        en: [
            { range: [0, 30], icon: '🌧️', title: 'Inner Storm', description: 'Your inner dialogue is currently dominated by negativity and self-criticism, which can leave you feeling drained and powerless. The good news is that awareness is the beginning of change. Try noting three small things you did well each day to gradually cultivate a kinder inner voice.', color: '#F44336' },
            { range: [31, 60], icon: '🌤️', title: 'Inner Conversationalist', description: 'Your inner dialogue has positive aspects but is often disrupted by negative voices. You\'re learning to better observe and manage your inner world. Continued practice of mindfulness and self-compassion can help you build healthier dialogue patterns.', color: '#FFC107' },
            { range: [61, 80], icon: '☀️', title: 'Inner Sage', description: 'You have a fairly healthy inner dialogue pattern. You can observe your thoughts, encourage yourself positively, and flexibly adjust your inner voice. You\'ve already mastered an important psychological skill.', color: '#4CAF50' },
            { range: [81, 100], icon: '🌈', title: 'Inner Dialogue Master', description: 'You have exceptional inner dialogue skills! You can fluidly switch between positive encouragement and objective reflection, transforming criticism into fuel for growth. Your inner voice is your most reliable friend and mentor.', color: '#2E7D32' }
        ]
    },

    uiText: {
        zh: { resultTitle: '你的内心对话', disclaimer: '本测试仅供参考，帮助你了解自己的内心对话模式。内心对话是可以训练和改善的，觉察是改变的第一步。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '低', scoreHigh: '高' },
        en: { resultTitle: 'Your Self-Talk', disclaimer: 'This test is for reference only, helping you understand your inner dialogue patterns. Self-talk can be trained and improved — awareness is the first step to change.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Low', scoreHigh: 'High' }
    }
};

export default SELF_TALK_TEST;
