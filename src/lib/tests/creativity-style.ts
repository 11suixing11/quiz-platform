// @ts-nocheck
// Creativity Style Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const CREATIVITY_STYLE_TEST: any = {
    type: 'creativity-style', icon: '🎨', color: '#AB47BC',
    questions: [
        // Visual Creative (VC) - 4 questions
        { id: 1, dimension: 'VC', zh: '我善于用图像、颜色和视觉元素来表达想法。', en: 'I\'m good at expressing ideas through images, colors, and visual elements.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'VC', zh: '我在设计、绘画或摄影方面有浓厚的兴趣。', en: 'I have a strong interest in design, painting, or photography.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'VC', zh: '我在脑海中能轻松构建和操作视觉画面。', en: 'I can easily construct and manipulate visual images in my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'VC', zh: '我对空间布局和色彩搭配很敏感。', en: 'I\'m sensitive to spatial layout and color coordination.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Verbal Creative (VR) - 4 questions
        { id: 5, dimension: 'VR', zh: '我善于用文字讲故事或表达复杂的想法。', en: 'I\'m good at storytelling or expressing complex ideas with words.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'VR', zh: '我喜欢写日记、博客或创作诗歌。', en: 'I enjoy writing journals, blogs, or poetry.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'VR', zh: '我在辩论或演讲中能够即兴发挥。', en: 'I can improvise during debates or presentations.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'VR', zh: '我能用巧妙的比喻或幽默来让别人理解我的意思。', en: 'I can use clever metaphors or humor to make others understand my point.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Musical Creative (MC) - 4 questions
        { id: 9, dimension: 'MC', zh: '我经常在脑海中听到旋律或节奏。', en: 'I often hear melodies or rhythms in my mind.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'MC', zh: '音乐能激发我的创作灵感。', en: 'Music inspires my creative process.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'MC', zh: '我能够轻易地识别不同声音中的情绪。', en: 'I can easily identify emotions in different sounds.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'MC', zh: '我喜欢通过音乐、声音或节奏来表达自己。', en: 'I like to express myself through music, sound, or rhythm.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Kinesthetic Creative (KC) - 4 questions
        { id: 13, dimension: 'KC', zh: '我通过动手操作来学习比通过阅读更有效。', en: 'I learn more effectively through hands-on activities than through reading.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'KC', zh: '我喜欢手工制作、烹饪或DIY项目。', en: 'I enjoy crafts, cooking, or DIY projects.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'KC', zh: '我善于用肢体语言和动作来表达创意。', en: 'I\'m good at expressing creativity through body language and movement.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'KC', zh: '我在运动、舞蹈或表演艺术中感到自在。', en: 'I feel at ease in sports, dance, or performing arts.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        VC: { color: '#EF5350', mood: '色彩 · 构图 · 视觉', quote_zh: '你用眼睛看世界，用画笔描绘灵魂。', quote_en: 'You see the world through your eyes and paint with your soul.' },
        VR: { color: '#42A5F5', mood: '叙述 · 隐喻 · 文字', quote_zh: '文字是你的画笔，每一个句子都是一幅画。', quote_en: 'Words are your brush, and every sentence is a painting.' },
        MC: { color: '#66BB6A', mood: '旋律 · 节奏 · 共鸣', quote_zh: '你的心跳自带节拍，世界在你耳中是一首未完成的歌。', quote_en: 'Your heartbeat has its own rhythm, and the world is an unfinished song in your ears.' },
        KC: { color: '#FFA726', mood: '触感 · 运动 · 体验', quote_zh: '你的双手比语言更懂得创造，每一个动作都是一次表达。', quote_en: 'Your hands create better than words — every movement is an expression.' }
    },

    types: {
        VC: {
            zh: { title: '视觉创意型', name: '视觉创意', description: '你是天生的视觉创作者。你善于用图像、颜色和空间来思考和表达。无论是摄影、设计还是简单的涂鸦，视觉世界是你的创意舞台。你可能发现自己更容易记住看到的东西，喜欢用图表或思维导图来整理思绪。善用你的视觉天赋，让世界看到你眼中的美丽。' },
            en: { title: 'Visual Creative Type', name: 'Visual Creative', description: 'You\'re a natural visual creator. You think and express through images, colors, and space. Whether it\'s photography, design, or simple doodles, the visual world is your creative stage. You may find it easier to remember things you see and prefer using charts or mind maps to organize thoughts. Harness your visual gift and let the world see the beauty through your eyes.' }
        },
        VR: {
            zh: { title: '语言创意型', name: '语言创意', description: '你是天生的语言艺术家。文字是你的画笔，故事是你的画布。你善于用语言编织想法，用隐喻和故事打动人心。写作、演讲和对话都是你展现创意的舞台。你的语言天赋让你能够将抽象的想法转化为别人能够理解和感受的文字。' },
            en: { title: 'Verbal Creative Type', name: 'Verbal Creative', description: 'You\'re a natural verbal artist. Words are your brush and stories are your canvas. You excel at weaving ideas with language and moving people with metaphors and narratives. Writing, speaking, and conversation are all stages for your creativity. Your verbal gift allows you to transform abstract ideas into words others can understand and feel.' }
        },
        MC: {
            zh: { title: '音乐创意型', name: '音乐创意', description: '你是天生的音乐灵魂。你对声音、旋律和节奏有着敏锐的感知力。音乐不仅是你的娱乐，更是你思考和感受世界的方式。你可能善于发现环境中的声音之美，能够通过音乐表达那些语言无法描述的情感。让音乐成为你创意的翅膀。' },
            en: { title: 'Musical Creative Type', name: 'Musical Creative', description: 'You\'re a natural musical soul. You have a keen perception of sound, melody, and rhythm. Music isn\'t just entertainment for you — it\'s how you think and feel the world. You may be skilled at finding beauty in environmental sounds and expressing emotions through music that words cannot capture. Let music be the wings of your creativity.' }
        },
        KC: {
            zh: { title: '动觉创意型', name: '动觉创意', description: '你是天生的身体创造者。你通过触摸、运动和身体体验来创造和理解世界。手工、烹饪、舞蹈或运动都是你展现创意的方式。你的双手是你最好的工具，身体是你最忠实的表达伙伴。在动中生智，在做中创造，这就是你独特的创意之路。' },
            en: { title: 'Kinesthetic Creative Type', name: 'Kinesthetic Creative', description: 'You\'re a natural body creator. You create and understand the world through touch, movement, and physical experience. Crafts, cooking, dance, or sports are all ways you express creativity. Your hands are your best tools, and your body is your most faithful partner in expression. Creating through movement and doing — that\'s your unique creative path.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { VC: { total: 0, count: 0 }, VR: { total: 0, count: 0 }, MC: { total: 0, count: 0 }, KC: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { VC: dims.VC.total, VR: dims.VR.total, MC: dims.MC.total, KC: dims.KC.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'VC', zh: '视觉创意', score: percentages.VC },
                { name: 'VR', zh: '语言创意', score: percentages.VR },
                { name: 'MC', zh: '音乐创意', score: percentages.MC },
                { name: 'KC', zh: '动觉创意', score: percentages.KC }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的创意风格', disclaimer: '本测试仅供参考，帮助你了解自己的创意表达偏好。每个人的创造力都是独特的，找到适合自己的创意方式是自我表达的重要一步。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '较低', scoreHigh: '很高' },
        en: { resultTitle: 'Your Creativity Style', disclaimer: 'This test is for reference only, helping you understand your creative expression preferences. Everyone\'s creativity is unique — finding the creative style that suits you is an important step in self-expression.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Lower', scoreHigh: 'Higher' }
    }
};

export default CREATIVITY_STYLE_TEST;
