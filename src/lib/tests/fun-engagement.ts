// @ts-nocheck
// Fun Engagement Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const FUN_ENGAGEMENT_TEST: any = {
    type: 'fun-engagement', icon: '🎪', color: '#FF7043',
    questions: [
        // Playfulness (PL) - 4 questions
        { id: 1, dimension: 'PL', zh: '我经常在日常生活中找到让自己开心的小乐趣。', en: 'I often find small pleasures in everyday life that make me happy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'PL', zh: '我能够在严肃的场合中适时地加入轻松的元素。', en: 'I can add lighthearted elements at appropriate moments in serious situations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'PL', zh: '我喜欢参与游戏、运动或其他形式的娱乐活动。', en: 'I enjoy participating in games, sports, or other forms of entertainment.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'PL', zh: '我不会因为"太成熟"而拒绝尝试有趣的新事物。', en: 'I wouldn\'t refuse to try fun new things because I\'m "too mature."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Spontaneity (SP) - 4 questions
        { id: 5, dimension: 'SP', zh: '我能够随性地改变计划去做一些有趣的事情。', en: 'I can spontaneously change plans to do something fun.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'SP', zh: '当遇到意外的快乐机会时，我会放下手头的事情去享受。', en: 'When unexpected happy opportunities arise, I put aside what I\'m doing to enjoy them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'SP', zh: '我不需要完美的计划就能享受一段美好时光。', en: 'I don\'t need a perfect plan to enjoy a good time.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'SP', zh: '我能够放下对控制的需求，允许自己"顺其自然"地享受。', en: 'I can let go of the need for control and allow myself to enjoy "going with the flow."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Humor Appreciation (HA) - 4 questions
        { id: 9, dimension: 'HA', zh: '我能够欣赏各种类型的幽默，包括自嘲式的幽默。', en: 'I can appreciate various types of humor, including self-deprecating humor.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'HA', zh: '我经常能在日常生活中发现有趣和好笑的事情。', en: 'I can often find amusing and funny things in daily life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'HA', zh: '笑对我来说是一种重要的减压方式。', en: 'Laughter is an important way for me to relieve stress.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'HA', zh: '我能够用幽默的方式化解尴尬或困难的时刻。', en: 'I can use humor to defuse awkward or difficult moments.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Leisure Prioritization (LP) - 4 questions
        { id: 13, dimension: 'LP', zh: '我在日程安排中会专门为休闲和娱乐留出时间。', en: 'I specifically set aside time for leisure and entertainment in my schedule.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'LP', zh: '我认为休闲娱乐不是浪费时间，而是生活的重要组成部分。', en: 'I believe leisure and entertainment aren\'t a waste of time but an important part of life.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'LP', zh: '我能够在忙碌中保持对生活中美好事物的感知力。', en: 'I can maintain awareness of life\'s beautiful things even when busy.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'LP', zh: '我不会因为有"更重要的事"而总是推迟娱乐和放松。', en: 'I don\'t always postpone entertainment and relaxation because there are "more important things."', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        PL: { color: '#FF8A65', mood: '活泼 · 好奇 · 童真', quote_zh: '保持玩心，是对抗无聊最有效的武器。', quote_en: 'Keeping a playful heart is the most effective weapon against boredom.' },
        SP: { color: '#FFD54F', mood: '自由 · 随性 · 惊喜', quote_zh: '最好的快乐，往往来自计划之外的惊喜。', quote_en: 'The best joys often come from unexpected surprises.' },
        HA: { color: '#A5D6A7', mood: '欢笑 · 智慧 · 释放', quote_zh: '笑声是心灵最自然的呼吸。', quote_en: 'Laughter is the most natural breath of the soul.' },
        LP: { color: '#90CAF9', mood: '重视 · 平衡 · 享受', quote_zh: '给自己放松的许可，这不是懒惰，而是智慧。', quote_en: 'Giving yourself permission to relax isn\'t laziness — it\'s wisdom.' }
    },

    types: {
        PL: {
            zh: { title: '乐玩家', name: '玩乐心', description: '你拥有一颗充满活力的玩乐之心。你能够在日常生活中发现乐趣，喜欢参与各种娱乐活动，也不会因为年龄或身份而拒绝有趣的事情。这种玩乐精神让你的生活充满活力和色彩。你深知，保持童心不是幼稚，而是对生活最深的热爱。' },
            en: { title: 'Playful Spirit Type', name: 'Playfulness', description: 'You have a vibrant playful heart. You can find fun in everyday life, enjoy participating in various entertainment activities, and won\'t refuse interesting things because of age or status. This playful spirit fills your life with vitality and color. You know that keeping a childlike heart isn\'t childish — it\'s the deepest love for life.' }
        },
        SP: {
            zh: { title: '随性享乐型', name: '自发性', description: '你在享受随性和自发的快乐方面有着出色的能力。你不需要完美的计划就能享受美好时光，能够灵活地抓住意外的快乐机会。你懂得放下对控制的需求，让自己"顺其自然"地享受生活。这种随性的态度让你的生活充满惊喜和新鲜感。' },
            en: { title: 'Spontaneous Joy Type', name: 'Spontaneity', description: 'You have an excellent ability to enjoy spontaneous and unplanned happiness. You don\'t need a perfect plan to enjoy good times and can flexibly seize unexpected opportunities for joy. You know how to let go of the need for control and enjoy life "going with the flow." This spontaneous attitude fills your life with surprises and freshness.' }
        },
        HA: {
            zh: { title: '幽默达人型', name: '幽默欣赏', description: '你在幽默欣赏和运用方面有着出色的天赋。你能够欣赏各种类型的幽默，经常在日常生活中发现有趣的事情，并善于用幽默化解尴尬和困难。笑对你来说不仅仅是快乐，更是一种智慧和减压方式。你的幽默感让周围的人也感到轻松和快乐。' },
            en: { title: 'Humor Expert Type', name: 'Humor Appreciation', description: 'You have an excellent talent for appreciating and using humor. You can appreciate various types of humor, often find amusing things in daily life, and are good at using humor to defuse awkward and difficult moments. Laughter for you is not just happiness but also wisdom and stress relief. Your sense of humor makes people around you feel relaxed and happy too.' }
        },
        LP: {
            zh: { title: '休闲优先型', name: '休闲优先化', description: '你在重视休闲和娱乐方面有着健康的态度。你认为休闲不是浪费时间，而是生活的重要组成部分。你主动在日程中为放松和快乐留出时间，不会因为忙碌而总是推迟享受。你明白，持续的高效需要定期的充电，而快乐本身就是生活的目的之一。' },
            en: { title: 'Leisure-First Type', name: 'Leisure Prioritization', description: 'You have a healthy attitude toward valuing leisure and entertainment. You believe leisure isn\'t a waste of time but an important part of life. You proactively set aside time for relaxation and happiness in your schedule and don\'t always postpone enjoyment because of busyness. You understand that sustained productivity requires regular recharging, and happiness itself is one of life\'s purposes.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { PL: { total: 0, count: 0 }, SP: { total: 0, count: 0 }, HA: { total: 0, count: 0 }, LP: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { PL: dims.PL.total, SP: dims.SP.total, HA: dims.HA.total, LP: dims.LP.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'PL', zh: '玩乐心', score: percentages.PL },
                { name: 'SP', zh: '自发性', score: percentages.SP },
                { name: 'HA', zh: '幽默欣赏', score: percentages.HA },
                { name: 'LP', zh: '休闲优先化', score: percentages.LP }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的趣味参与度画像', disclaimer: '本测试仅供参考，帮助你了解自己在玩乐心、自发性、幽默欣赏和休闲优先化方面的参与状况。生活需要认真，也需要有趣——两者都是幸福的重要组成。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '待发展', scoreHigh: '很好' },
        en: { resultTitle: 'Your Fun Engagement Profile', disclaimer: 'This test is for reference only, helping you understand your engagement in playfulness, spontaneity, humor appreciation, and leisure prioritization. Life needs seriousness and fun — both are essential components of happiness.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Developing', scoreHigh: 'Great' }
    }
};

export default FUN_ENGAGEMENT_TEST;
