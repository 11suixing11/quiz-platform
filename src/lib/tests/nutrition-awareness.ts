// @ts-nocheck
// Nutrition Awareness Test
/* eslint-disable @typescript-eslint/no-explicit-any */

const NUTRITION_AWARENESS_TEST: any = {
    type: 'nutrition-awareness', icon: '🥑', color: '#66BB6A',
    questions: [
        // Eating Habits (EH) - 4 questions
        { id: 1, dimension: 'EH', zh: '我每天按时吃三餐，很少跳过。', en: 'I eat three meals a day on time and rarely skip them.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 2, dimension: 'EH', zh: '我吃饭时会细嚼慢咽，而不是匆忙进食。', en: 'I eat slowly and mindfully rather than rushing through meals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 3, dimension: 'EH', zh: '我的饮食种类丰富，涵盖多种食物类别。', en: 'My diet includes a wide variety of food groups.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 4, dimension: 'EH', zh: '我很少吃宵夜或在深夜进食。', en: 'I rarely eat late-night snacks or meals after midnight.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Nutritional Knowledge (NK) - 4 questions
        { id: 5, dimension: 'NK', zh: '我了解蛋白质、碳水化合物和脂肪的基本功能。', en: 'I understand the basic functions of protein, carbohydrates, and fat.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 6, dimension: 'NK', zh: '我会阅读食品包装上的营养标签。', en: 'I read nutrition labels on food packaging.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 7, dimension: 'NK', zh: '我知道每天需要摄入多少蔬菜和水果。', en: 'I know how many servings of vegetables and fruits I need daily.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 8, dimension: 'NK', zh: '我了解哪些食物富含维生素和矿物质。', en: 'I know which foods are rich in vitamins and minerals.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Food Relationship (FR) - 4 questions
        { id: 9, dimension: 'FR', zh: '我不会因为情绪低落而暴饮暴食。', en: 'I don\'t overeat when I feel emotionally down.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 10, dimension: 'FR', zh: '我对食物没有强烈的罪恶感或焦虑感。', en: 'I don\'t feel strong guilt or anxiety about food.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 11, dimension: 'FR', zh: '我能够在社交场合自在地享受美食。', en: 'I can comfortably enjoy food in social settings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 12, dimension: 'FR', zh: '我不会为了减肥而极端限制饮食。', en: 'I don\'t restrict my diet in extreme ways to lose weight.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },

        // Mindful Eating (ME) - 4 questions
        { id: 13, dimension: 'ME', zh: '我能分辨自己是真正饿了还是只是嘴馋。', en: 'I can distinguish between real hunger and cravings.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 14, dimension: 'ME', zh: '我吃饭时专注于食物的味道和口感。', en: 'I focus on the taste and texture of food when eating.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 15, dimension: 'ME', zh: '我能在感到八分饱时停止进食。', en: 'I can stop eating when I feel about 80% full.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] },
        { id: 16, dimension: 'ME', zh: '我享受食物带来的愉悦，而不是只是为了填饱肚子。', en: 'I enjoy the pleasure food brings, not just eating to fill my stomach.', options: { zh: ['非常不同意','不同意','中立','同意','非常同意'], en: ['Strongly Disagree','Disagree','Neutral','Agree','Strongly Agree'] }, scores: [1,2,3,4,5] }
    ],

    archetypes: {
        EH: { color: '#81C784', mood: '节律 · 规律 · 稳定', quote_zh: '好好吃饭，是对生活最朴素的敬意。', quote_en: 'Eating well is the simplest tribute to life.' },
        NK: { color: '#4DB6AC', mood: '明智 · 洞察 · 选择', quote_zh: '知识是最好的调味料，让你的每一餐都充满智慧。', quote_en: 'Knowledge is the best seasoning, infusing every meal with wisdom.' },
        FR: { color: '#FF8A65', mood: '自由 · 和解 · 温柔', quote_zh: '和食物和解，就是和自己和解。', quote_en: 'Making peace with food is making peace with yourself.' },
        ME: { color: '#BA68C8', mood: '觉察 · 当下 · 丰盛', quote_zh: '当你真正品尝每一口食物，生活也变得更加有滋有味。', quote_en: 'When you truly taste each bite, life itself becomes more flavorful.' }
    },

    types: {
        EH: {
            zh: { title: '饮食习惯型', name: '饮食习惯', description: '你在饮食习惯方面表现出色。你有规律的用餐时间，饮食多样，不会匆忙进食。良好的饮食习惯是身体健康的基石，也是对自己最基本的关爱。继续保持这些好习惯，你的身体会感谢你的。' },
            en: { title: 'Eating Habits Type', name: 'Eating Habits', description: 'You excel in eating habits. You have regular mealtimes, diverse food choices, and don\'t rush through meals. Good eating habits are the foundation of physical health and the most basic form of self-care. Keep nurturing these habits — your body will thank you.' }
        },
        NK: {
            zh: { title: '营养知识型', name: '营养知识', description: '你对营养知识有很好的了解。你知道不同食物的营养价值，能够做出明智的饮食选择。知识就是力量——在饮食方面尤其如此。继续学习和运用营养知识，让每一餐都成为滋养身体的机会。' },
            en: { title: 'Nutritional Knowledge Type', name: 'Nutritional Knowledge', description: 'You have a strong understanding of nutrition. You know the nutritional value of different foods and can make informed dietary choices. Knowledge is power — especially when it comes to eating. Keep learning and applying nutritional knowledge to make every meal an opportunity to nourish your body.' }
        },
        FR: {
            zh: { title: '食物关系型', name: '食物关系', description: '你与食物的关系很健康。你不会因为情绪而失控进食，也不会对食物产生过度的焦虑或罪恶感。这种轻松自在的食物关系是非常珍贵的。在食物面前保持自由和平和，是内心丰盈的体现。' },
            en: { title: 'Food Relationship Type', name: 'Food Relationship', description: 'You have a healthy relationship with food. You don\'t lose control around food due to emotions, nor do you develop excessive anxiety or guilt about eating. This relaxed and free relationship with food is truly precious. Staying peaceful around food reflects inner abundance.' }
        },
        ME: {
            zh: { title: '正念饮食型', name: '正念饮食', description: '你在正念饮食方面做得很好。你能够觉察自己的饥饿信号，享受食物的味道，知道何时该停下来。正念饮食不仅让食物更加美味，也让用餐成为一种冥想般的体验。你正在用一种温柔的方式善待自己的身体。' },
            en: { title: 'Mindful Eating Type', name: 'Mindful Eating', description: 'You practice mindful eating well. You can sense your hunger signals, savor the taste of food, and know when to stop. Mindful eating not only makes food more delicious but turns meals into a meditative experience. You\'re treating your body with gentle awareness.' }
        }
    },

    calculate: function(answers, questions) {
        var dims = { EH: { total: 0, count: 0 }, NK: { total: 0, count: 0 }, FR: { total: 0, count: 0 }, ME: { total: 0, count: 0 } };
        questions.forEach(function(q, i) { if (answers[i] >= 0 && dims[q.dimension]) { dims[q.dimension].total += q.scores[answers[i]]; dims[q.dimension].count++; } });
        var percentages = {};
        for (var d in dims) {
            var maxPossible = dims[d].count * 5;
            percentages[d] = maxPossible > 0 ? Math.round((dims[d].total / maxPossible) * 100) : 0;
        }
        var sorted = Object.entries(percentages).sort(function(a, b) { return b[1] - a[1]; });
        var dominantType = sorted[0][0];
        return {
            scores: { EH: dims.EH.total, NK: dims.NK.total, FR: dims.FR.total, ME: dims.ME.total },
            percentages: percentages,
            dominantType: dominantType,
            dimensions: [
                { name: 'EH', zh: '饮食习惯', score: percentages.EH },
                { name: 'NK', zh: '营养知识', score: percentages.NK },
                { name: 'FR', zh: '食物关系', score: percentages.FR },
                { name: 'ME', zh: '正念饮食', score: percentages.ME }
            ]
        };
    },

    uiText: {
        zh: { resultTitle: '你的营养意识', disclaimer: '本测试仅供参考，帮助你了解自己的饮食习惯和营养意识。健康的饮食习惯需要长期培养，如有特殊饮食需求，请咨询营养师。', restartBtn: '重新测试', homeBtn: '返回首页', shareBtn: '分享结果', progress: '进度', question: '问题', of: '题 / 共', nextBtn: '下一题', prevBtn: '上一题', submitBtn: '提交', loading: '正在分析...', scoreLow: '需改善', scoreHigh: '很好' },
        en: { resultTitle: 'Your Nutrition Awareness', disclaimer: 'This test is for reference only, helping you understand your eating habits and nutritional awareness. Healthy eating habits take time to develop. If you have special dietary needs, consult a nutritionist.', restartBtn: 'Retake', homeBtn: 'Home', shareBtn: 'Share', progress: 'Progress', question: 'Question', of: 'of', nextBtn: 'Next', prevBtn: 'Previous', submitBtn: 'Submit', loading: 'Analyzing...', scoreLow: 'Needs Work', scoreHigh: 'Great' }
    }
};

export default NUTRITION_AWARENESS_TEST;
