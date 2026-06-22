// @ts-nocheck
// Career Identity Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const CAREER_IDENTITY_TEST: any = {
    type: 'career-identity', icon: '🪪', color: '#26A69A',
    questions: [
        // Role Clarity (RC) - 4 questions
        { id: 1, dimension: 'RC', zh: '我能够清楚地描述自己在工作中扮演的角色和职责。', en: 'I can clearly describe the roles and responsibilities I play at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'RC', zh: '我对自己的职业定位有清晰的认识。', en: 'I have a clear understanding of my professional positioning.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'RC', zh: '我能够区分自己在工作中的真实表现和理想表现之间的差距。', en: 'I can distinguish the gap between my actual and ideal performance at work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'RC', zh: '我了解自己的专业优势和需要提升的领域。', en: 'I understand my professional strengths and areas needing improvement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Professional Values (PV) - 4 questions
        { id: 5, dimension: 'PV', zh: '我的工作选择反映了我内心深处的价值观。', en: 'My career choices reflect my deep inner values.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'PV', zh: '我能够拒绝与自己价值观不符的工作机会，即使报酬很高。', en: 'I can decline work opportunities that conflict with my values, even if the pay is high.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'PV', zh: '我在工作中追求的目标与我对"有意义的生活"的理解一致。', en: 'The goals I pursue at work align with my understanding of a "meaningful life."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'PV', zh: '我认为职业成功不仅仅是收入和地位，还包括个人成长和社会贡献。', en: 'I believe career success includes not just income and status but also personal growth and social contribution.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Career Commitment (CC) - 4 questions
        { id: 9, dimension: 'CC', zh: '我对自己选择的职业道路感到坚定和投入。', en: 'I feel committed and dedicated to the career path I\'ve chosen.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'CC', zh: '即使遇到挫折，我仍然愿意在自己的专业领域继续深耕。', en: 'Even when facing setbacks, I\'m still willing to continue deepening my expertise in my field.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'CC', zh: '我愿意为职业发展投入额外的时间和精力。', en: 'I\'m willing to invest extra time and energy in professional development.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'CC', zh: '我经常主动学习与职业相关的新知识和技能。', en: 'I regularly and proactively learn new knowledge and skills related to my profession.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Work Meaning (WM) - 4 questions
        { id: 13, dimension: 'WM', zh: '我的工作让我感到自己在为某种更大的目标做出贡献。', en: 'My work makes me feel I\'m contributing to something larger than myself.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'WM', zh: '我在工作中体验到内在的满足感和成就感。', en: 'I experience inner satisfaction and a sense of achievement in my work.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'WM', zh: '我认为我的工作与我的人生使命或人生目标有紧密联系。', en: 'I believe my work is closely connected to my life mission or purpose.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'WM', zh: '即使没有外在奖励，我仍然觉得自己的工作是有意义的。', en: 'Even without external rewards, I still find my work meaningful.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        RC: { color: '#80CBC4', mood: '清晰 · 自知 · 定位', quote_zh: '认识自己的角色，才能在职业舞台上找到最佳位置。', quote_en: 'Know your role to find your best position on the career stage.' },
        PV: { color: '#81D4FA', mood: '一致 · 坚守 · 价值', quote_zh: '当价值观与职业统一，工作便成为一种使命。', quote_en: 'When values and career align, work becomes a calling.' },
        CC: { color: '#FFD54F', mood: '投入 · 坚持 · 成长', quote_zh: '职业认同不是一天建成的，而是日复一日的投入。', quote_en: 'Career identity isn\'t built in a day — it\'s forged through daily commitment.' },
        WM: { color: '#F48FB1', mood: '意义 · 贡献 · 超越', quote_zh: '有意义的工作让你在平凡中看到不平凡。', quote_en: 'Meaningful work helps you see the extraordinary within the ordinary.' }
    },

    types: {
        RC: {
            zh: { title: '角色清晰型', name: '角色清晰度', description: '你对自己的职业角色有着清晰的认识。你能够准确描述自己的职责，理解自己的专业定位，并清楚地知道自己的优势和成长空间。这种角色清晰度让你在工作中更加自信和从容，也为你未来的职业发展提供了明确的方向。' },
            en: { title: 'Role Clarity Type', name: 'Role Clarity', description: 'You have a clear understanding of your professional role. You can accurately describe your responsibilities, understand your professional positioning, and clearly know your strengths and areas for growth. This role clarity gives you more confidence and ease at work, and provides clear direction for your future career development.' }
        },
        PV: {
            zh: { title: '价值一致型', name: '职业价值观', description: '你的职业选择与内心价值观高度一致。你追求的不仅仅是外在的成功，更注重工作的内在价值和社会意义。这种价值一致性让你在职业道路上更加坚定，不容易被短期利益所动摇。你的工作不仅是一份职业，更是你价值观的延伸。' },
            en: { title: 'Value-Aligned Type', name: 'Professional Values', description: 'Your career choices are highly aligned with your inner values. You pursue not just external success but also the intrinsic value and social significance of your work. This value alignment makes you more steadfast in your career path, less swayed by short-term gains. Your work isn\'t just a job — it\'s an extension of your values.' }
        },
        CC: {
            zh: { title: '深耕投入型', name: '职业承诺', description: '你对自己的职业道路有着深厚的承诺感。面对困难和挫折，你选择坚持而非逃避。你愿意为专业成长投入持续的努力，主动学习新知识新技能。这种深度投入正在为你积累宝贵的专业资本，让你在领域内越来越不可替代。' },
            en: { title: 'Deep Commitment Type', name: 'Career Commitment', description: 'You have a deep sense of commitment to your career path. Facing difficulties and setbacks, you choose persistence over avoidance. You\'re willing to invest sustained effort in professional growth, proactively learning new knowledge and skills. This deep commitment is accumulating valuable professional capital, making you increasingly irreplaceable in your field.' }
        },
        WM: {
            zh: { title: '意义驱动型', name: '工作意义感', description: '你在工作中体验到了深刻的意义感。你看到自己的工作与更大的目标之间的联系，从中获得内在的满足。即使没有外在奖励，你仍然觉得自己的工作是有价值的。这种意义感是职业幸福的最深层来源，它让你的工作不仅仅是谋生手段，更是自我实现的途径。' },
            en: { title: 'Meaning-Driven Type', name: 'Work Meaning', description: 'You experience a deep sense of meaning in your work. You see the connection between your work and a larger purpose, gaining inner satisfaction from it. Even without external rewards, you still find your work valuable. This sense of meaning is the deepest source of career happiness — it makes your work not just a means of livelihood but a path to self-actualization.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { RC: { total: 0, count: 0 }, PV: { total: 0, count: 0 }, CC: { total: 0, count: 0 }, WM: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { RC: dims.RC.total, PV: dims.PV.total, CC: dims.CC.total, WM: dims.WM.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'RC', zh: '角色清晰度', score: percentages.RC },
                { name: 'PV', zh: '职业价值观', score: percentages.PV },
                { name: 'CC', zh: '职业承诺', score: percentages.CC },
                { name: 'WM', zh: '工作意义感', score: percentages.WM }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的职业认同画像', disclaimer: '本测试仅供参考，帮助你了解自己在角色清晰度、职业价值观、职业承诺和工作意义感方面的发展状况。职业认同是一个持续发展的过程，它会随着你的成长和经历而不断深化。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Career Identity Profile', disclaimer: 'This test is for reference only, helping you understand your development in role clarity, professional values, career commitment, and work meaning. Career identity is an ongoing process that deepens with your growth and experiences.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default CAREER_IDENTITY_TEST;
