// @ts-nocheck
// Auto-converted from mbti.js
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * MBTI 人格测试题库
 * 16 Personalities Test
 */

const MBTI_TEST: any = {
    type: 'mbti',
    icon: '🧠',
    color: '#6C63FF',
    questions: [
        // E/I 维度 (外向/内向)
        {
            id: 1,
            dimension: 'EI',
            zh: "在社交场合中，你通常会：",
            en: "In social situations, you usually:",
            options: {
                zh: ["主动与陌生人交谈", "等待别人来找你"],
                en: ["Initiate conversations with strangers", "Wait for others to approach you"]
            },
            scores: [1, 0] // 1 = E, 0 = I
        },
        {
            id: 2,
            dimension: 'EI',
            zh: "周末你更倾向于：",
            en: "On weekends, you prefer to:",
            options: {
                zh: ["参加聚会或社交活动", "在家独处或与少数好友相聚"],
                en: ["Attend parties or social events", "Stay home or meet with a few close friends"]
            },
            scores: [1, 0]
        },
        {
            id: 3,
            dimension: 'EI',
            zh: "当你需要充电时，你会：",
            en: "When you need to recharge, you:",
            options: {
                zh: ["和朋友出去玩", "找一个安静的地方独处"],
                en: ["Go out with friends", "Find a quiet place to be alone"]
            },
            scores: [1, 0]
        },
        {
            id: 4,
            dimension: 'EI',
            zh: "在团队工作中，你更喜欢：",
            en: "In team work, you prefer to:",
            options: {
                zh: ["频繁讨论和头脑风暴", "独立思考后再分享"],
                en: ["Frequent discussions and brainstorming", "Think independently before sharing"]
            },
            scores: [1, 0]
        },
        {
            id: 5,
            dimension: 'EI',
            zh: "你更容易交到朋友的方式是：",
            en: "You make friends more easily by:",
            options: {
                zh: ["在大型社交活动中", "通过共同兴趣的小群体"],
                en: ["At large social events", "Through small groups with shared interests"]
            },
            scores: [1, 0]
        },
        {
            id: 6,
            dimension: 'EI',
            zh: "长时间独处后，你通常会：",
            en: "After being alone for a long time, you usually:",
            options: {
                zh: ["感到无聊，想找人聊天", "感到平静和满足"],
                en: ["Feel bored and want to talk to someone", "Feel calm and satisfied"]
            },
            scores: [1, 0]
        },
        {
            id: 7,
            dimension: 'EI',
            zh: "在会议或课堂上，你倾向于：",
            en: "In meetings or classes, you tend to:",
            options: {
                zh: ["积极发言和参与讨论", "安静倾听和记录"],
                en: ["Actively speak and participate in discussions", "Quietly listen and take notes"]
            },
            scores: [1, 0]
        },
        {
            id: 8,
            dimension: 'EI',
            zh: "你更喜欢的工作环境是：",
            en: "Your preferred work environment is:",
            options: {
                zh: ["开放式办公室，方便交流", "独立空间，减少干扰"],
                en: ["Open office, easy to communicate", "Private space, fewer distractions"]
            },
            scores: [1, 0]
        },
        {
            id: 9,
            dimension: 'EI',
            zh: "别人常说你是：",
            en: "People often say you are:",
            options: {
                zh: ["开朗、外向", "安静、内敛"],
                en: ["Cheerful and outgoing", "Quiet and reserved"]
            },
            scores: [1, 0]
        },
        {
            id: 10,
            dimension: 'EI',
            zh: "你更享受的休闲方式是：",
            en: "Your preferred leisure activity is:",
            options: {
                zh: ["运动、旅行、聚会", "阅读、写作、冥想"],
                en: ["Sports, travel, parties", "Reading, writing, meditation"]
            },
            scores: [1, 0]
        },

        // S/N 维度 (感觉/直觉)
        {
            id: 11,
            dimension: 'SN',
            zh: "你更关注的是：",
            en: "You focus more on:",
            options: {
                zh: ["具体的事实和细节", "整体概念和可能性"],
                en: ["Concrete facts and details", "Overall concepts and possibilities"]
            },
            scores: [0, 1] // 0 = S, 1 = N
        },
        {
            id: 12,
            dimension: 'SN',
            zh: "你更信任的是：",
            en: "You trust more in:",
            options: {
                zh: ["亲身经历和实际经验", "直觉和第六感"],
                en: ["Personal experience and practical experience", "Intuition and sixth sense"]
            },
            scores: [0, 1]
        },
        {
            id: 13,
            dimension: 'SN',
            zh: "解决问题时，你倾向于：",
            en: "When solving problems, you tend to:",
            options: {
                zh: ["按照已验证的方法", "尝试新的创新方法"],
                en: ["Follow proven methods", "Try new innovative approaches"]
            },
            scores: [0, 1]
        },
        {
            id: 14,
            dimension: 'SN',
            zh: "你更喜欢的对话内容是：",
            en: "You prefer conversations about:",
            options: {
                zh: ["实际发生的事情", "未来的可能性和想象"],
                en: ["Things that actually happened", "Future possibilities and imagination"]
            },
            scores: [0, 1]
        },
        {
            id: 15,
            dimension: 'SN',
            zh: "你更擅长的是：",
            en: "You are better at:",
            options: {
                zh: ["处理具体的数据和事实", "发现模式和联系"],
                en: ["Handling concrete data and facts", "Discovering patterns and connections"]
            },
            scores: [0, 1]
        },
        {
            id: 16,
            dimension: 'SN',
            zh: "你更喜欢的学习方式是：",
            en: "Your preferred learning style is:",
            options: {
                zh: ["循序渐进，按步骤学习", "先了解整体框架再深入细节"],
                en: ["Step by step learning", "Understand the big picture first, then dive into details"]
            },
            scores: [0, 1]
        },
        {
            id: 17,
            dimension: 'SN',
            zh: "你更欣赏的艺术作品是：",
            en: "You appreciate art that is:",
            options: {
                zh: ["写实的、具象的", "抽象的、富有想象力的"],
                en: ["Realistic and representational", "Abstract and imaginative"]
            },
            scores: [0, 1]
        },
        {
            id: 18,
            dimension: 'SN',
            zh: "你更关注的是：",
            en: "You pay more attention to:",
            options: {
                zh: ["当下的实际情况", "未来的趋势和可能性"],
                en: ["Current practical situations", "Future trends and possibilities"]
            },
            scores: [0, 1]
        },
        {
            id: 19,
            dimension: 'SN',
            zh: "你更喜欢的老师是：",
            en: "You prefer teachers who:",
            options: {
                zh: ["讲解清晰，举例具体", "启发思考，鼓励创新"],
                en: ["Explain clearly with concrete examples", "Inspire thinking and encourage innovation"]
            },
            scores: [0, 1]
        },
        {
            id: 20,
            dimension: 'SN',
            zh: "你更倾向于相信：",
            en: "You tend to believe in:",
            options: {
                zh: ["眼见为实", "事物背后的深层含义"],
                en: ["Seeing is believing", "Deeper meanings behind things"]
            },
            scores: [0, 1]
        },

        // T/F 维度 (思考/情感)
        {
            id: 21,
            dimension: 'TF',
            zh: "做决定时，你更看重的是：",
            en: "When making decisions, you value more:",
            options: {
                zh: ["逻辑分析和客观事实", "他人感受和价值观念"],
                en: ["Logical analysis and objective facts", "Others' feelings and values"]
            },
            scores: [1, 0] // 1 = T, 0 = F
        },
        {
            id: 22,
            dimension: 'TF',
            zh: "在争论中，你更在意的是：",
            en: "In arguments, you care more about:",
            options: {
                zh: ["谁的观点更正确", "是否伤害了他人的感情"],
                en: ["Whose viewpoint is more correct", "Whether others' feelings are hurt"]
            },
            scores: [1, 0]
        },
        {
            id: 23,
            dimension: 'TF',
            zh: "你更欣赏的品质是：",
            en: "You admire more:",
            options: {
                zh: ["理性、公正", "善良、体贴"],
                en: ["Rationality and fairness", "Kindness and consideration"]
            },
            scores: [1, 0]
        },
        {
            id: 24,
            dimension: 'TF',
            zh: "当朋友向你倾诉问题时，你倾向于：",
            en: "When friends share their problems, you tend to:",
            options: {
                zh: ["分析问题并提供解决方案", "倾听并给予情感支持"],
                en: ["Analyze the problem and offer solutions", "Listen and provide emotional support"]
            },
            scores: [1, 0]
        },
        {
            id: 25,
            dimension: 'TF',
            zh: "你更认同的说法是：",
            en: "You identify more with:",
            options: {
                zh: ["做事要讲原则", "做人要讲感情"],
                en: ["Actions should follow principles", "People should value emotions"]
            },
            scores: [1, 0]
        },
        {
            id: 26,
            dimension: 'TF',
            zh: "在工作中，你更看重的是：",
            en: "At work, you value more:",
            options: {
                zh: ["效率和成果", "团队和谐和人际关系"],
                en: ["Efficiency and results", "Team harmony and interpersonal relationships"]
            },
            scores: [1, 0]
        },
        {
            id: 27,
            dimension: 'TF',
            zh: "你更倾向于批评的是：",
            en: "You tend to criticize more:",
            options: {
                zh: ["逻辑错误和不合理的做法", "不体贴和不尊重他人的行为"],
                en: ["Logical errors and unreasonable practices", "Inconsiderate and disrespectful behavior"]
            },
            scores: [1, 0]
        },
        {
            id: 28,
            dimension: 'TF',
            zh: "你更欣赏的领导风格是：",
            en: "You prefer a leadership style that is:",
            options: {
                zh: ["果断、有原则", "有同理心、关心下属"],
                en: ["Decisive and principled", "Empathetic and caring for subordinates"]
            },
            scores: [1, 0]
        },
        {
            id: 29,
            dimension: 'TF',
            zh: "你更倾向于认为：",
            en: "You tend to think that:",
            options: {
                zh: ["公平比同情更重要", "同情比公平更重要"],
                en: ["Fairness is more important than sympathy", "Sympathy is more important than fairness"]
            },
            scores: [1, 0]
        },
        {
            id: 30,
            dimension: 'TF',
            zh: "你更喜欢的电影类型是：",
            en: "Your preferred movie genre is:",
            options: {
                zh: ["悬疑、科幻、纪录片", "爱情、剧情、喜剧"],
                en: ["Mystery, sci-fi, documentaries", "Romance, drama, comedy"]
            },
            scores: [1, 0]
        },

        // J/P 维度 (判断/知觉)
        {
            id: 31,
            dimension: 'JP',
            zh: "你更喜欢的生活方式是：",
            en: "Your preferred lifestyle is:",
            options: {
                zh: ["有计划、有条理", "灵活、随机应变"],
                en: ["Planned and organized", "Flexible and adaptable"]
            },
            scores: [1, 0] // 1 = J, 0 = P
        },
        {
            id: 32,
            dimension: 'JP',
            zh: "面对截止日期，你通常会：",
            en: "Facing deadlines, you usually:",
            options: {
                zh: ["提前完成，避免最后一刻", "在最后时刻才完成"],
                en: ["Finish early to avoid last minute rush", "Finish at the last moment"]
            },
            scores: [1, 0]
        },
        {
            id: 33,
            dimension: 'JP',
            zh: "你的桌面通常是：",
            en: "Your desk is usually:",
            options: {
                zh: ["整洁有序", "随意但能找到东西"],
                en: ["Neat and organized", "Casual but you can find things"]
            },
            scores: [1, 0]
        },
        {
            id: 34,
            dimension: 'JP',
            zh: "你更喜欢的旅行方式是：",
            en: "Your preferred travel style is:",
            options: {
                zh: ["提前规划好行程", "随性而行，随机探索"],
                en: ["Plan the itinerary in advance", "Go with the flow, explore randomly"]
            },
            scores: [1, 0]
        },
        {
            id: 35,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["做出决定后坚持执行", "保持开放，随时调整"],
                en: ["Stick to decisions once made", "Stay open and adjust at any time"]
            },
            scores: [1, 0]
        },
        {
            id: 36,
            dimension: 'JP',
            zh: "你更喜欢的购物方式是：",
            en: "Your preferred shopping style is:",
            options: {
                zh: ["列好清单，按需购买", "随意逛，看到喜欢的就买"],
                en: ["Make a list and buy as needed", "Browse casually and buy what you like"]
            },
            scores: [1, 0]
        },
        {
            id: 37,
            dimension: 'JP',
            zh: "你更倾向于认为规则是：",
            en: "You tend to think rules are:",
            options: {
                zh: ["必要的，应该遵守", "可以灵活处理的"],
                en: ["Necessary and should be followed", "Can be handled flexibly"]
            },
            scores: [1, 0]
        },
        {
            id: 38,
            dimension: 'JP',
            zh: "你更喜欢的工作方式是：",
            en: "Your preferred work style is:",
            options: {
                zh: ["按计划逐步推进", "根据情况灵活调整"],
                en: ["Follow the plan step by step", "Adjust flexibly according to the situation"]
            },
            scores: [1, 0]
        },
        {
            id: 39,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["尽快做出决定", "推迟决定以获取更多信息"],
                en: ["Make decisions quickly", "Delay decisions to gather more information"]
            },
            scores: [1, 0]
        },
        {
            id: 40,
            dimension: 'JP',
            zh: "你更喜欢的周末安排是：",
            en: "Your preferred weekend plan is:",
            options: {
                zh: ["提前安排好活动", "到时候再决定做什么"],
                en: ["Plan activities in advance", "Decide what to do at the time"]
            },
            scores: [1, 0]
        },

        // Additional questions for better accuracy
        {
            id: 41,
            dimension: 'EI',
            zh: "在派对上，你通常会：",
            en: "At parties, you usually:",
            options: {
                zh: ["和很多人交谈", "和少数几个人深入交流"],
                en: ["Talk to many people", "Have deep conversations with a few"]
            },
            scores: [1, 0]
        },
        {
            id: 42,
            dimension: 'SN',
            zh: "你更喜欢的书籍类型是：",
            en: "Your preferred book genre is:",
            options: {
                zh: ["基于事实的非虚构作品", "富有想象力的小说"],
                en: ["Fact-based non-fiction", "Imaginative fiction"]
            },
            scores: [0, 1]
        },
        {
            id: 43,
            dimension: 'TF',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["直言不讳，即使可能得罪人", "委婉表达，避免冲突"],
                en: ["Speak frankly, even if it might offend", "Express tactfully to avoid conflict"]
            },
            scores: [1, 0]
        },
        {
            id: 44,
            dimension: 'JP',
            zh: "你更喜欢的会议安排是：",
            en: "Your preferred meeting arrangement is:",
            options: {
                zh: ["有明确的议程和时间表", "灵活讨论，不限时间"],
                en: ["Clear agenda and timetable", "Flexible discussion, no time limit"]
            },
            scores: [1, 0]
        },
        {
            id: 45,
            dimension: 'EI',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["先行动后思考", "先思考后行动"],
                en: ["Act first, think later", "Think first, act later"]
            },
            scores: [1, 0]
        },
        {
            id: 46,
            dimension: 'SN',
            zh: "你更关注的是：",
            en: "You focus more on:",
            options: {
                zh: ["眼前的实际问题", "长远的愿景和目标"],
                en: ["Immediate practical problems", "Long-term vision and goals"]
            },
            scores: [0, 1]
        },
        {
            id: 47,
            dimension: 'TF',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["用逻辑说服别人", "用情感打动别人"],
                en: ["Persuade others with logic", "Move others with emotions"]
            },
            scores: [1, 0]
        },
        {
            id: 48,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["完成一件事再开始下一件", "同时进行多件事"],
                en: ["Finish one thing before starting another", "Work on multiple things at once"]
            },
            scores: [1, 0]
        },
        {
            id: 49,
            dimension: 'EI',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["在群体中表达自己", "在私下里表达自己"],
                en: ["Express yourself in groups", "Express yourself in private"]
            },
            scores: [1, 0]
        },
        {
            id: 50,
            dimension: 'SN',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["相信已验证的事实", "相信创新的想法"],
                en: ["Believe in proven facts", "Believe in innovative ideas"]
            },
            scores: [0, 1]
        },
        {
            id: 51,
            dimension: 'TF',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["保持客观中立", "表达个人立场"],
                en: ["Stay objective and neutral", "Express personal stance"]
            },
            scores: [1, 0]
        },
        {
            id: 52,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["制定详细的计划", "保持灵活性"],
                en: ["Make detailed plans", "Stay flexible"]
            },
            scores: [1, 0]
        },
        {
            id: 53,
            dimension: 'EI',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["喜欢成为焦点", "喜欢在幕后工作"],
                en: ["Like being the center of attention", "Like working behind the scenes"]
            },
            scores: [1, 0]
        },
        {
            id: 54,
            dimension: 'SN',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["注重细节", "注重大局"],
                en: ["Focus on details", "Focus on the big picture"]
            },
            scores: [0, 1]
        },
        {
            id: 55,
            dimension: 'TF',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["追求真理", "追求和谐"],
                en: ["Pursue truth", "Pursue harmony"]
            },
            scores: [1, 0]
        },
        {
            id: 56,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["按部就班", "随机应变"],
                en: ["Follow a set routine", "Adapt to circumstances"]
            },
            scores: [1, 0]
        },
        {
            id: 57,
            dimension: 'EI',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["广交朋友", "深交挚友"],
                en: ["Make many friends", "Have a few close friends"]
            },
            scores: [1, 0]
        },
        {
            id: 58,
            dimension: 'SN',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["相信经验", "相信直觉"],
                en: ["Trust experience", "Trust intuition"]
            },
            scores: [0, 1]
        },
        {
            id: 59,
            dimension: 'TF',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["分析利弊", "考虑感受"],
                en: ["Analyze pros and cons", "Consider feelings"]
            },
            scores: [1, 0]
        },
        {
            id: 60,
            dimension: 'JP',
            zh: "你更倾向于：",
            en: "You tend to:",
            options: {
                zh: ["追求确定性", "拥抱不确定性"],
                en: ["Seek certainty", "Embrace uncertainty"]
            },
            scores: [1, 0]
        }
    ],

    // 人格阵营系统 (Personality IP System)
    archetypes: {
        // Dreamers — 情绪感知者 (紫)
        INFP: {
            world: 'dreamers', color: '#6B5B95',
            mood: '深夜 · 海面 · 月光',
            quote_zh: '你习惯在安静中恢复能量，在无人看见的深夜里反复咀嚼一段关系、一句未说出口的话。你的内心是一片海，表面平静，深处暗流涌动。',
            quote_en: 'You recharge in silence, replaying a conversation or an unsaid word long after midnight. Your inner world is an ocean — calm on the surface, deep currents below.',
            traits_zh: '理想主义、深度共情、忠诚、有创造力',
            traits_en: 'Idealistic, deeply empathetic, loyal, creative',
            scenes_zh: '半夜2点，删除又重新编辑一条消息，最后还是没发出去; 戴着耳机坐在海边，听的不是歌，是安静; 在路灯下坐着发呆，路过的人以为你在等人，其实你在等自己想通',
            scenes_en: 'At 2am, deleting and re-editing a message, ultimately not sending it; Sitting by the sea with headphones on, listening not to music but to silence; Sitting under a streetlight, lost in thought — passersby think you are waiting for someone, but you are waiting for yourself to understand',
            contradiction_zh: '你渴望被理解，却会在真正靠近时后退。你害怕的不是孤独，而是被看见后发现"原来不过如此"。',
            contradiction_en: 'You crave to be understood, yet you retreat when someone truly gets close. What you fear is not loneliness — but being seen and found "not enough."',
            growth_cost_zh: '你习惯在心里预演所有对话，久而久之，会忘记真实的声音是什么样的。',
            growth_cost_en: 'You habitually rehearse every conversation in your mind — over time, you forget what a real voice sounds like.',
            core_desire_zh: '被真正理解，而不是被喜欢。',
            core_desire_en: 'To be truly understood — not just liked.',
            core_fear_zh: '自己的内心世界其实是空的。',
            core_fear_en: 'That their inner world is actually empty.',
            love_style_zh: '缓慢而深沉。不会轻易靠近，但一旦爱上，会把对方写进自己所有的故事里。他们的爱是沉默的——用记住细节来表达，用退后来保护。',
            love_style_en: 'Slow and deep. They do not draw close easily, but once in love, they write the other person into every story they hold. Their love is silent — expressed through remembering details, protected by retreating.',
            breakdown_style_zh: '沉默式崩溃。不会大哭大闹，而是突然变得很安静，取消所有计划，一个人待在黑暗里反复回想。表面看起来"没事"，但内心已经塌了很久。',
            breakdown_style_en: 'Silent collapse. No dramatic outburst — just sudden quiet, cancelled plans, sitting alone in the dark replaying everything. They look fine on the surface, but inside has been crumbling for a long time.',
            defense_mechanism_zh: '退缩到幻想世界。当现实太痛时，会在心里建造一个更好的版本，然后躲进去。',
            defense_mechanism_en: 'Retreat into fantasy. When reality hurts too much, they build a better version in their mind and hide inside it.',
            growth_path_zh: '学会在现实中落地，而不是只在心里活着。把内心的感受变成可以被别人看见的东西——文字、行动、声音。',
            growth_path_en: 'Learning to land in reality instead of living only inside their head. Turning inner feelings into something others can see — words, actions, voice.',
            best_relationship_zh: 'ENFJ — 对方能看见你藏起来的光，而且不会被你的深度吓退。他们会在你退缩时主动靠近。',
            best_relationship_en: 'ENFJ — They can see the light you hide and are not frightened by your depth. They move closer when you retreat.',
            worst_relationship_zh: 'ESTJ — 对方的"应该"会让你窒息。他们想要效率，你想要意义。你们会互相觉得对方不可理喻。',
            worst_relationship_en: 'ESTJ — Their "should" will suffocate you. They want efficiency; you want meaning. You will each find the other incomprehensible.',
            symbol_zh: '海',
            symbol_en: 'The sea',
            city_zh: '京都',
            city_en: 'Kyoto',
            weather_zh: '深夜的小雨，没有风，空气里有花的味道。',
            weather_en: 'A light rain late at night, no wind, the scent of flowers in the air.',
            music_mood_zh: '钢琴独奏，有些音符之间留了很长的空白。不是悲伤，是一种很深的安静。',
            music_mood_en: 'A solo piano piece with long silences between notes. Not sadness — a deep quiet.',
            night_state_zh: '最清醒的时候。白天戴的面具全部卸下，开始和自己对话。会突然想写点什么，或者翻出很久以前的聊天记录。',
            night_state_en: 'Their most awake state. The daytime mask comes off entirely, and they begin talking to themselves. They might suddenly want to write something, or dig up old chat logs from years ago.',
            loneliness_state_zh: '不是没有人在身边，而是觉得没有人真正懂。他们会在人群中突然感到很深的孤独，然后微笑着说"我没事"。',
            loneliness_state_en: 'It is not that no one is around — it is that no one truly understands. They can feel a sudden deep loneliness in a crowd, then smile and say "I am fine."'
        },
        INFJ: {
            world: 'dreamers', color: '#7B68AE',
            mood: '星空 · 光 · 解读',
            quote_zh: '你能感受到别人感受不到的细微变化——一个语气的停顿、一个眼神的闪躲。你在沉默中读懂一切，却很少有人真正读懂你。',
            quote_en: 'You sense what others cannot — a pause in tone, a shift in gaze. You read everything in silence, yet few ever truly read you.',
            traits_zh: '洞察力、远见、深度共情、有使命感',
            traits_en: 'Insightful, visionary, deeply empathetic, purpose-driven',
            scenes_zh: '在聚会上突然沉默，因为你感受到了角落里某个人的情绪; 深夜写下没人会看到的日记，里面写满了对别人的理解; 记住别人三个月前随口说的一句话，在合适的时机提起，对方惊讶你居然记得',
            scenes_en: 'Going quiet at a party because you felt someone\'s emotion in the corner; Writing a diary no one will see, filled with understanding of others; Remembering something someone said in passing three months ago, mentioning it at the right moment — they are surprised you remembered',
            contradiction_zh: '你能读懂所有人，却很少有人能读懂你。你不是不想被理解，你只是害怕被理解后，发现自己其实很累。',
            contradiction_en: 'You can read everyone, yet few can read you. It is not that you do not want to be understood — you are afraid that once understood, you will realize how tired you truly are.',
            growth_cost_zh: '你习惯为别人的情绪负责，久而久之，会分不清哪些感受是自己的，哪些是别人的。',
            growth_cost_en: 'You habitually take responsibility for others\' emotions — over time, you can no longer tell which feelings are yours and which belong to others.',
            core_desire_zh: '被看见真实的自己，而不是你为别人扮演的角色。',
            core_desire_en: 'To be seen for who they truly are — not the role they play for others.',
            core_fear_zh: '自己给予的一切最终不被珍惜。',
            core_fear_en: 'That everything they give will ultimately not be cherished.',
            love_style_zh: '全身心投入。他们会记住你说过的每一句话，在你需要之前就准备好了一切。但他们的爱里有一种隐形的期待——希望你也能这样对他们。',
            love_style_en: 'All in. They remember everything you say and prepare what you need before you ask. But their love carries an invisible hope — that you will do the same for them.',
            breakdown_style_zh: '过载式崩溃。先是极度活跃，帮所有人、安排所有事，然后突然断电。不是不想动，是动不了了。像一台一直没关机的电脑，终于蓝屏了。',
            breakdown_style_en: 'Overload crash. First hyperactive — helping everyone, organizing everything — then sudden shutdown. Not unwilling to move, but unable. Like a computer that was never turned off, finally blue-screening.',
            defense_mechanism_zh: '过度照顾别人。当自己的情绪无法承受时，把注意力转移到"帮助别人"上，这样就不用面对自己的问题。',
            defense_mechanism_en: 'Over-caring for others. When their own emotions become unbearable, they redirect attention to "helping others" so they do not have to face their own problems.',
            growth_path_zh: '学会区分"我想帮你"和"我需要被你需要"。承认自己也需要被照顾，不是软弱，是诚实。',
            growth_path_en: 'Learning to distinguish "I want to help you" from "I need to be needed by you." Admitting you need care too is not weakness — it is honesty.',
            best_relationship_zh: 'INFP — 对方不会要求你"正常"。他们理解你的敏感，而且不会试图修复你。',
            best_relationship_en: 'INFP — They will not ask you to be "normal." They understand your sensitivity and will not try to fix you.',
            worst_relationship_zh: 'ESTP — 对方的直接会让你觉得被冒犯，而你的细腻会让对方觉得"想太多"。你们会在不同的频率上永远错过。',
            worst_relationship_en: 'ESTP — Their directness will feel like offense to you, and your subtlety will feel like "overthinking" to them. You will miss each other on different frequencies forever.',
            symbol_zh: '星图',
            symbol_en: 'A star map',
            city_zh: '布拉格',
            city_en: 'Prague',
            weather_zh: '冬天的第一场雪，安静地落下来，整个世界都变慢了。',
            weather_en: 'The first snowfall of winter, falling silently, slowing the entire world down.',
            music_mood_zh: '大提琴独奏，像一个人在空房间里对另一个人说话。旋律不急，但每个音符都在说"我懂你"。',
            music_mood_en: 'A solo cello, like one person speaking to another in an empty room. The melody is unhurried, but every note says "I understand you."',
            night_state_zh: '开始回顾今天所有人说过的话，分析他们的潜台词。会突然想起某个人三个月前的一个表情，然后整晚都在想"他当时是不是在难过"。',
            night_state_en: 'Replaying everything everyone said today, analyzing the subtext. Suddenly remembering someone\'s expression from three months ago, spending the whole night wondering "were they sad then?"',
            loneliness_state_zh: '在人群中感到最孤独。因为你总是在理解别人，但没有人试图理解你。你会在某个深夜突然很想哭，但不知道为什么。',
            loneliness_state_en: 'Most lonely in a crowd. Because you are always understanding others, but no one tries to understand you. On some late nights you suddenly want to cry, without knowing why.'
        },
        ISFP: {
            world: 'dreamers', color: '#8B7BB5',
            mood: '晨光 · 树叶 · 露水',
            quote_zh: '你用感受理解世界，而不是逻辑。风吹过皮肤、阳光落在桌面——这些微小的瞬间对你来说不是背景，而是生活本身。',
            quote_en: 'You understand the world through feeling, not logic. Wind on your skin, sunlight on a table — these small moments are not background to you. They are life itself.',
            traits_zh: '敏感、温和、有艺术感、活在当下',
            traits_en: 'Sensitive, gentle, artistic, present',
            scenes_zh: '一个人在公园里走了很久，不是因为想运动，是因为树影好看; 拍下一张夕阳，没有发给任何人; 在咖啡店角落里画画，旁边的人在开会，你在画杯子里的光',
            scenes_en: 'Walking alone in the park for hours — not for exercise, but because the tree shadows were beautiful; Taking a photo of a sunset and not sending it to anyone; Drawing in the corner of a café while others have meetings nearby — you are drawing the light in your cup',
            contradiction_zh: '你用沉默回应世界，但内心其实有很多话。你不是没有表达欲，你只是觉得真正重要的东西，说出来就变了。',
            contradiction_en: 'You respond to the world in silence, but inside you have much to say. It is not that you have nothing to express — you just feel that what truly matters changes once spoken.',
            growth_cost_zh: '你习惯用"没关系"回应一切，久而久之，连自己都相信了。',
            growth_cost_en: 'You habitually respond with "it\'s fine" — over time, even you start to believe it.',
            core_desire_zh: '自由地感受，不被评判。',
            core_desire_en: 'To feel freely, without judgment.',
            core_fear_zh: '被迫成为不是自己的人。',
            core_fear_en: 'Being forced to become someone they are not.',
            love_style_zh: '用存在来爱。不会说很多甜言蜜语，但会记住你喜欢的那首歌、你害怕的那个影子。他们的爱是一种安静的陪伴——在你需要的时候，他们已经在那里了。',
            love_style_en: 'Loving through presence. No sweet words, but they remember the song you like and the shadow you fear. Their love is quiet companionship — when you need them, they are already there.',
            breakdown_style_zh: '消失式崩溃。不会告诉任何人，只是突然从所有人的视野里消失了。不回消息，不接电话，一个人去一个安静的地方，和自己的情绪待在一起。',
            breakdown_style_en: 'Disappearance collapse. They tell no one — just vanish from everyone\'s sight. No replies, no calls. They go somewhere quiet and sit with their own emotions.',
            defense_mechanism_zh: '沉默。当事情变得太复杂时，他们选择不说。不是没有想法，是觉得说出来也不会改变什么。',
            defense_mechanism_en: 'Silence. When things get too complicated, they choose not to speak. Not because they have nothing to say — they just feel saying it will not change anything.',
            growth_path_zh: '学会让自己的感受被看见。把心里的东西说出来，哪怕声音在发抖。',
            growth_path_en: 'Learning to let their feelings be seen. Speaking what is inside, even if their voice shakes.',
            best_relationship_zh: 'ENFJ — 对方会主动问你"你还好吗"，而且真的想听答案。',
            best_relationship_en: 'ENFJ — They will ask "are you okay" and actually want to hear the answer.',
            worst_relationship_zh: 'ENTJ — 对方会觉得你"太慢了"，你会觉得对方"太硬了"。你们对生活的节奏有完全不同的理解。',
            worst_relationship_en: 'ENTJ — They will think you are "too slow"; you will think they are "too hard." You have completely different understandings of life\'s pace.',
            symbol_zh: '晨露',
            symbol_en: 'Morning dew',
            city_zh: '清迈',
            city_en: 'Chiang Mai',
            weather_zh: '清晨的薄雾，太阳还没完全升起，空气凉凉的，有植物的味道。',
            weather_en: 'Early morning mist before the sun fully rises, cool air with the scent of plants.',
            music_mood_zh: '吉他指弹，旋律简单但温暖。像一个人坐在窗边，看着外面的世界，不说话。',
            music_mood_en: 'Fingerstyle guitar, simple but warm. Like someone sitting by a window, watching the world outside, saying nothing.',
            night_state_zh: '在黑暗中感到最安全。会翻出很久以前的照片，不是因为想念，是因为那些瞬间还在发光。',
            night_state_en: 'Safest in the dark. They scroll through old photos — not out of missing the past, but because those moments still glow.',
            loneliness_state_zh: '不是不想说话，是觉得没有人会真正想听。他们会在一个普通的下午突然觉得世界离自己很远，然后安静地接受这种感觉。',
            loneliness_state_en: 'Not that they do not want to talk — they just feel no one truly wants to listen. On an ordinary afternoon they suddenly feel the world is far away, and quietly accept that feeling.'
        },
        ISFJ: {
            world: 'dreamers', color: '#9B8BBC',
            mood: '毛衣 · 厨房 · 窗台植物',
            quote_zh: '你总是在照顾别人，记得每个人的口味、习惯和生日。但很少有人问你：你今天累不累？你需要什么？',
            quote_en: 'You are always caring for others — remembering everyone\'s preferences, habits, and birthdays. But rarely does anyone ask: Are you tired today? What do you need?',
            traits_zh: '温暖、可靠、细心、忠诚',
            traits_en: 'Warm, reliable, attentive, loyal',
            scenes_zh: '记住所有人的生日，却忘了自己的; 主动帮别人收拾残局，没人知道你也需要帮忙; 深夜里想的是明天要给谁带什么，从来不是自己想要什么',
            scenes_en: 'Remembering everyone\'s birthday but forgetting your own; Cleaning up after others without anyone knowing you need help too; At night, thinking about what to bring for whom tomorrow — never about what you want',
            contradiction_zh: '你总是在照顾别人，却很少有人照顾你。你不是不需要，你只是觉得开口要是一件很丢人的事。',
            contradiction_en: 'You are always caring for others, yet rarely cared for. It is not that you do not need it — you just feel that asking is somehow shameful.',
            growth_cost_zh: '你习惯把自己排在最后，久而久之，会忘记自己也是"需要被照顾的人"。',
            growth_cost_en: 'You habitually put yourself last — over time, you forget that you too are someone who needs to be taken care of.',
            core_desire_zh: '被需要，被看见自己默默做的一切。',
            core_desire_en: 'To be needed, to have everything they do quietly noticed.',
            core_fear_zh: '自己付出的一切最终被当成理所当然。',
            core_fear_en: 'That everything they give will be taken for granted.',
            love_style_zh: '用行动说"我爱你"。会提前帮你准备好你忘了的东西，会在你冷的时候已经带了外套。他们的爱是后勤式的——不浪漫，但永远不会让你缺什么。',
            love_style_en: 'Saying "I love you" through action. They prepare what you forgot before you need it, bring a jacket before you feel cold. Their love is logistical — not romantic, but you will never go without.',
            breakdown_style_zh: '忍耐式崩溃。会一直忍、一直忍，直到某天一件很小的事成为最后一根稻草。崩溃时别人会困惑"这点小事至于吗"，但只有他们自己知道积攒了多久。',
            breakdown_style_en: 'Endurance collapse. They hold and hold until one tiny thing becomes the last straw. When they break, others wonder "is that really worth it?" — only they know how long it has been building.',
            defense_mechanism_zh: '忙碌。当内心不安时，让自己不停做事。手在动，脑子就不用想那些难受的事。',
            defense_mechanism_en: 'Staying busy. When unsettled, they keep doing. If their hands are moving, their mind does not have to dwell on what hurts.',
            growth_path_zh: '学会说"我也想要"。你的需求不是奢侈品，是基本权利。',
            growth_path_en: 'Learning to say "I want it too." Your needs are not a luxury — they are a basic right.',
            best_relationship_zh: 'ISFP — 对方不会要求你做任何事，只是安静地陪在你身边。那种不被要求的陪伴，是你最需要的。',
            best_relationship_en: 'ISFP — They will not ask anything of you, just stay quietly beside you. That unrequested companionship is what you need most.',
            worst_relationship_zh: 'ENTP — 对方会觉得你"太保守"，你会觉得对方"太不可靠"。你需要稳定，对方需要变化。',
            worst_relationship_en: 'ENTP — They will think you are "too cautious"; you will think they are "too unreliable." You need stability; they need change.',
            symbol_zh: '毛衣',
            symbol_en: 'A knitted sweater',
            city_zh: '爱丁堡',
            city_en: 'Edinburgh',
            weather_zh: '秋天的下午，阳光透过窗户照进来，暖暖的，空气里有烘焙的味道。',
            weather_en: 'An autumn afternoon, sunlight through the window, warm, with the scent of baking in the air.',
            music_mood_zh: '民谣，歌词很朴素，但每一句都在说日常生活中那些被忽略的温柔。',
            music_mood_en: 'Folk music with simple lyrics, each line speaking of the tenderness overlooked in everyday life.',
            night_state_zh: '检查明天的日程，确认没有遗漏的事。然后躺在床上想"今天有没有人不开心"，想完才睡得着。',
            night_state_en: 'Checking tomorrow\'s schedule, making sure nothing is missed. Then lying in bed wondering "was anyone unhappy today?" — only falling asleep after they have thought it through.',
            loneliness_state_zh: '在所有人被照顾好之后，发现没有人问过自己需要什么。那种孤独不是"没有人"，而是"没有人注意到我也需要被照顾"。',
            loneliness_state_en: 'After everyone is taken care of, realizing no one asked what they needed. The loneliness is not "no one is here" — it is "no one noticed I need care too."'
        },

        // Analysts — 理性建筑师 (蓝)
        INTJ: {
            world: 'analysts', color: '#4A6FA5',
            mood: '蓝图 · 玻璃 · 深夜台灯',
            quote_zh: '你看到的世界和别人不一样。别人看到混乱，你看到结构。别人看到问题，你看到三步之后的解法。你不是冷漠，你只是在想更远的事。',
            quote_en: 'You see a different world than others. Where they see chaos, you see structure. Where they see problems, you see solutions three steps ahead. You are not cold — you are just thinking further.',
            traits_zh: '战略思维、独立、远见、高效率',
            traits_en: 'Strategic, independent, visionary, efficient',
            scenes_zh: '凌晨3点设计一个没人会看到的系统架构，不是因为要交，是因为想通了; 桌上同时放着三本不同领域的书，你正在找它们之间的联系; 花两小时优化一个别人觉得"已经够好了"的方案',
            scenes_en: 'At 3am designing a system architecture no one will see — not because it is due, but because you figured it out; Three books from different fields on your desk, searching for the connection between them; Spending two hours optimizing a solution others think is "good enough"',
            contradiction_zh: '你习惯提前规划所有事情，但有时候你会忘记——最好的事情，往往是计划之外的。',
            contradiction_en: 'You plan everything in advance, but sometimes you forget — the best things are often unplanned.',
            growth_cost_zh: '你习惯用逻辑解释一切，久而久之，会忘记有些感受不需要"合理"才值得被重视。',
            growth_cost_en: 'You habitually explain everything with logic — over time, you forget that some feelings do not need to be "rational" to matter.',
            core_desire_zh: '理解世界的运作方式，并按照自己的愿景去改造它。',
            core_desire_en: 'To understand how the world works and reshape it according to their vision.',
            core_fear_zh: '自己的能力不够，无法实现脑海中的蓝图。',
            core_fear_en: 'That their abilities are not enough to realize the blueprint in their mind.',
            love_style_zh: '选择式爱你。不会轻易进入一段关系，但一旦选择了你，会用最理性的方式表达最深的感情——帮你解决问题、为你规划未来、在你需要时给出最冷静的建议。',
            love_style_en: 'Love by choice. They do not enter relationships easily, but once they choose you, they express the deepest feelings in the most rational way — solving your problems, planning your future, offering the calmest advice when you need it.',
            breakdown_style_zh: '孤立式崩溃。会切断所有社交，一个人关在房间里想方案。不是不需要帮助，是觉得"没有人能帮到我"。',
            breakdown_style_en: 'Isolation collapse. They cut off all social contact and lock themselves in a room to think. Not because they do not need help — they just feel "no one can help me."',
            defense_mechanism_zh: '理性化。把所有情绪翻译成逻辑问题来分析。"我不难过，我只是需要调整策略。"',
            defense_mechanism_en: 'Rationalization. Translating all emotions into logical problems. "I am not sad — I just need to adjust my strategy."',
            growth_path_zh: '学会接受"我不知道"。不是所有问题都有解法，有些事情只需要被感受，而不是被解决。',
            growth_path_en: 'Learning to accept "I don\'t know." Not every problem has a solution — some things just need to be felt, not fixed.',
            best_relationship_zh: 'ENTP — 对方能跟上你思维的速度，而且不怕挑战你的想法。你们会吵架，但吵完之后会更聪明。',
            best_relationship_en: 'ENTP — They can keep up with the speed of your thinking and are not afraid to challenge your ideas. You will argue, but you will be smarter afterward.',
            worst_relationship_zh: 'ESFP — 对方活在当下，你活在三步之后。你会觉得对方"没有深度"，对方会觉得你"没有乐趣"。',
            worst_relationship_en: 'ESFP — They live in the present; you live three steps ahead. You will think they lack depth; they will think you lack fun.',
            symbol_zh: '蓝图',
            symbol_en: 'A blueprint',
            city_zh: '柏林',
            city_en: 'Berlin',
            weather_zh: '冬天的夜晚，窗外下着雪，房间里只有台灯的光。安静、清晰、有秩序。',
            weather_en: 'A winter night, snow falling outside, only desk lamp light in the room. Quiet, clear, ordered.',
            music_mood_zh: '极简电子乐，有规律的节拍和精确的结构。不是冰冷的，是一种被控制住的美。',
            music_mood_en: 'Minimal electronic music with rhythmic beats and precise structure. Not cold — a beauty that is controlled.',
            night_state_zh: '效率最高的时候。白天的打扰全部消失，终于可以专注在自己真正在意的事情上。会突然进入心流状态，几个小时一眨眼就过去了。',
            night_state_en: 'Their most productive state. Daytime distractions vanish, and they can finally focus on what truly matters. They enter a flow state where hours pass in a blink.',
            loneliness_state_zh: '在人群中感到最疲惫，因为需要不断解释自己的思维方式。真正的孤独不是没有人陪，是没有人能跟上你的思考速度。',
            loneliness_state_en: 'Most exhausted in crowds, constantly having to explain how they think. True loneliness is not the absence of company — it is that no one can keep up with the speed of their thoughts.'
        },
        INTP: {
            world: 'analysts', color: '#5A7FB5',
            mood: '粒子 · 星图 · 书房',
            quote_zh: '你的大脑永远不会停止运转。一个想法引出另一个，像星图一样无限展开。问题比答案更让你兴奋，因为答案意味着结束，而问题意味着还有更多。',
            quote_en: 'Your mind never stops. One idea leads to another, expanding like a star map. Questions excite you more than answers — because answers mean the end, and questions mean there is more.',
            traits_zh: '逻辑分析、创新、独立思考、求知欲强',
            traits_en: 'Logical, innovative, independent, deeply curious',
            scenes_zh: '打开20个浏览器标签页，只是为了追踪一个突然想到的问题; 把一个日常问题变成了一个思想实验，朋友已经不耐烦了你还在推导; 凌晨3点还在读维基百科，从量子物理点到了中世纪历史',
            scenes_en: 'Opening 20 browser tabs just to follow a sudden question; Turning a daily problem into a thought experiment while your friend grows impatient; At 3am still on Wikipedia, having clicked from quantum physics to medieval history',
            contradiction_zh: '你的大脑像一个永不停歇的实验室，但你有时候会希望——有人能帮你关灯。',
            contradiction_en: 'Your mind is a laboratory that never closes, but sometimes you wish someone would turn off the lights for you.',
            growth_cost_zh: '你习惯在脑子里解决所有问题，久而久之，会忘记有些事情需要动手去做，而不是想。',
            growth_cost_en: 'You habitually solve everything in your head — over time, you forget that some things need to be done, not just thought about.',
            core_desire_zh: '理解一切。不是为了控制，是为了"知道"本身带来的满足感。',
            core_desire_en: 'To understand everything. Not for control — for the satisfaction that comes from knowing itself.',
            core_fear_zh: '自己的想法是错的，而且被别人发现了。',
            core_fear_en: 'That their thinking is wrong — and that others will find out.',
            love_style_zh: '用分享思维来爱你。会把自己最在意的知识、想法、发现分享给你。如果他们给你发了一篇长文，那不是啰嗦，那是情书。',
            love_style_en: 'Loving by sharing their mind. They share what they care about most — knowledge, ideas, discoveries. If they send you a long article, that is not rambling — it is a love letter.',
            breakdown_style_zh: '分析瘫痪。脑子里同时运转着太多想法，每个都有道理，但互相矛盾。最后什么决定都做不了，整个人卡住了。',
            breakdown_style_en: 'Analysis paralysis. Too many ideas running simultaneously, each valid but contradictory. They cannot make any decision and freeze completely.',
            defense_mechanism_zh: '理论化。把一切变成抽象问题来讨论，这样就不用面对具体的情感。"这不是我的问题，这是一个有趣的哲学议题。"',
            defense_mechanism_en: 'Theorizing. Turning everything into abstract problems to discuss, so they do not have to face concrete emotions. "This is not my problem — it is an interesting philosophical question."',
            growth_path_zh: '学会把想法变成行动。你已经想得够多了，现在需要的是"做"。哪怕做得不完美。',
            growth_path_en: 'Learning to turn ideas into action. You have thought enough — now you need to do. Even if it is imperfect.',
            best_relationship_zh: 'ENTJ — 对方会把你拉出脑子里，逼你面对现实。虽然你会抗拒，但你需要这种力量。',
            best_relationship_en: 'ENTJ — They will pull you out of your head and force you to face reality. You will resist, but you need that force.',
            worst_relationship_zh: 'ESFJ — 对方需要你表达情感，但你不知道怎么表达。你会觉得对方"太情绪化"，对方会觉得你"太冷漠"。',
            worst_relationship_en: 'ESFJ — They need you to express feelings, but you do not know how. You will think them "too emotional"; they will think you "too cold."',
            symbol_zh: '星图',
            symbol_en: 'A constellation map',
            city_zh: '阿姆斯特丹',
            city_en: 'Amsterdam',
            weather_zh: '多云转晴的下午，光线不断变化，像一个正在被推导的公式。',
            weather_en: 'A cloudy-to-clear afternoon, light constantly shifting, like a formula being derived.',
            music_mood_zh: '数学摇滚，节拍不规则但有内在逻辑。听的时候脑子会自动开始分析结构。',
            music_mood_en: 'Math rock, irregular beats with internal logic. Your mind automatically starts analyzing the structure while listening.',
            night_state_zh: '思维最清晰的时候。白天的噪音消失，所有概念都变得透明。会突然想通一个困扰了自己很久的问题，然后兴奋地写下来。',
            night_state_en: 'Their clearest thinking state. Daytime noise vanishes and all concepts become transparent. They suddenly solve a problem that has bothered them for weeks, then excitedly write it down.',
            loneliness_state_zh: '在社交场合中感到最孤独，因为很难找到能跟上自己思维节奏的人。不是不想连接，是连接的成本太高了。',
            loneliness_state_en: 'Most lonely at social events, because it is hard to find someone who can keep up with their mental pace. Not that they do not want connection — the cost of connecting is just too high.'
        },
        ENTJ: {
            world: 'analysts', color: '#3A5F95',
            mood: '雷电 · 战场 · 蓝图',
            quote_zh: '你看到的不是眼前的混乱，而是三步之后的秩序。你把愿景变成计划，把计划变成现实。你不害怕做决定，因为你知道犹豫比错误更昂贵。',
            quote_en: 'You see not the chaos before you, but the order three steps ahead. You turn vision into plans, and plans into reality. You do not fear decisions — because you know hesitation costs more than mistakes.',
            traits_zh: '领导力、战略眼光、果断、高效',
            traits_en: 'Leadership, strategic vision, decisive, efficient',
            scenes_zh: '在别人还在讨论的时候，你已经开始执行了; 你会自然地承担责任，因为你觉得"等别人做不如自己来"; 你的待办清单永远比别人的长三倍',
            scenes_en: 'While others are still discussing, you are already executing; You naturally take charge because you think "why wait for others when you can do it yourself"; Your to-do list is always three times longer than everyone else\'s',
            contradiction_zh: '你总是知道"正确"的方向，但有时候你会累——因为没有人问你"你想去哪"，他们只问"我们该去哪"。',
            contradiction_en: 'You always know the "right" direction, but sometimes you are tired — because no one asks "where do you want to go," only "where should we go."',
            growth_cost_zh: '你习惯把效率放在第一位，久而久之，会忘记有些关系需要"浪费时间"才能维系。',
            growth_cost_en: 'You habitually put efficiency first — over time, you forget that some relationships need "wasted time" to sustain.',
            core_desire_zh: '掌控自己的命运，创造有意义的影响力。',
            core_desire_en: 'To command their own destiny and create meaningful impact.',
            core_fear_zh: '失去控制，变得无力和无关紧要。',
            core_fear_en: 'Losing control, becoming powerless and irrelevant.',
            love_style_zh: '战略式爱你。会为你规划未来、解决困难、搭建更好的生活。他们的爱是建设性的——"我会让你的生活变得更好"。但有时候你需要的不是方案，是一个拥抱。',
            love_style_en: 'Love as strategy. They plan your future, solve your difficulties, build a better life. Their love is constructive — "I will make your life better." But sometimes you do not need a plan — you need a hug.',
            breakdown_style_zh: '暴走式崩溃。平时控制得很好，但一旦崩溃会非常剧烈——摔东西、大声说话、做出冲动的决定。然后很快恢复，假装什么都没发生。',
            breakdown_style_en: 'Meltdown. Usually well-controlled, but when they break, it is intense — throwing things, speaking harshly, making impulsive decisions. Then they recover quickly, pretending nothing happened.',
            defense_mechanism_zh: '控制。当感到不安时，试图控制周围的一切——人、事、结果。越焦虑，控制欲越强。',
            defense_mechanism_en: 'Control. When unsettled, they try to control everything around them — people, situations, outcomes. The more anxious, the stronger the need to control.',
            growth_path_zh: '学会放手。不是所有事情都需要你来掌控，不是所有人都需要你来拯救。有时候"不做"比"做"需要更大的勇气。',
            growth_path_en: 'Learning to let go. Not everything needs your control, not everyone needs your saving. Sometimes "not doing" takes more courage than doing.',
            best_relationship_zh: 'INTJ — 对方是唯一能在智力上和你平起平坐的人，而且不会被你的强势吓到。你们会互相推动对方变得更好。',
            best_relationship_en: 'INTJ — They are the only one who can match you intellectually and will not be intimidated by your force. You will push each other to be better.',
            worst_relationship_zh: 'ISFP — 对方的安静会让你焦虑，你的强势会让对方退缩。你会想"为什么对方不听我的"，对方会想"为什么对方不能安静一点"。',
            worst_relationship_en: 'ISFP — Their quietness will make you anxious; your force will make them retreat. You will wonder "why won\'t they listen?" — they will wonder "why can\'t they be quiet?"',
            symbol_zh: '棋盘',
            symbol_en: 'A chessboard',
            city_zh: '纽约',
            city_en: 'New York',
            weather_zh: '雷阵雨。来得猛烈，去得干脆。雨过天晴后，空气特别清新。',
            weather_en: 'A thunderstorm. Fierce when it arrives, clean when it leaves. After the rain, the air is especially fresh.',
            music_mood_zh: '交响乐，有明确的主题和强烈的情感起伏。不是背景音乐，是一种"你必须认真听"的力量。',
            music_mood_en: 'A symphony with clear themes and strong emotional rises and falls. Not background music — a force that demands you listen carefully.',
            night_state_zh: '复盘今天做了什么、明天要做什么。会突然想到一个新项目，然后兴奋地打开电脑开始写方案。',
            night_state_en: 'Reviewing what they did today and planning tomorrow. Suddenly thinking of a new project, then excitedly opening their laptop to start writing a proposal.',
            loneliness_state_zh: '在"一切都很成功"的时候感到最孤独。因为成功之后，没有人问你"你还好吗"，他们只问"下一步做什么"。',
            loneliness_state_en: 'Most lonely when "everything is going well." Because after success, no one asks "are you okay?" — they only ask "what\'s next?"'
        },
        ENTP: {
            world: 'analysts', color: '#6A8FC5',
            mood: '迷宫 · 黑板 · 火花',
            quote_zh: '规则对你来说只是起点。你享受找到漏洞、挑战假设、在边界上跳舞。你的大脑是一个永不停歇的辩论场——连你自己都不放过。',
            quote_en: 'Rules are just starting points. You enjoy finding loopholes, challenging assumptions, dancing on the edge. Your mind is a never-ending debate arena — you don\'t even spare yourself.',
            traits_zh: '创新、辩论能力、适应力强、思维敏捷',
            traits_en: 'Innovative, argumentative, adaptable, quick-thinking',
            scenes_zh: '在对话中总是忍不住唱反调，不是因为不同意，是因为你觉得"只有一种声音太无聊了"; 同时开始五个项目，每个都做了一半; 能在三秒内找到任何论点的漏洞，包括你自己的',
            scenes_en: 'Always playing devil\'s advocate in conversations — not because you disagree, but because "one voice is too boring"; Starting five projects at once, each half-finished; Finding the flaw in any argument within three seconds, including your own',
            contradiction_zh: '你享受挑战一切，但有时候你会想——如果有一天，你不再需要证明自己比别人聪明，你会做什么？',
            contradiction_en: 'You enjoy challenging everything, but sometimes you wonder — if one day you no longer needed to prove you are smarter, what would you do?',
            growth_cost_zh: '你习惯用聪明来保护自己，久而久之，会忘记脆弱也是一种力量。',
            growth_cost_en: 'You habitually protect yourself with cleverness — over time, you forget that vulnerability is also a strength.',
            core_desire_zh: '自由地探索一切可能性，不被任何框架限制。',
            core_desire_en: 'To freely explore every possibility, constrained by no framework.',
            core_fear_zh: '被困在一个没有选择的处境里。',
            core_fear_en: 'Being trapped in a situation with no choices.',
            love_style_zh: '辩论式爱你。会和你争论、挑战你的想法、推翻你的论点——这不是不尊重，这是他们表达"我在认真对待你"的方式。',
            love_style_en: 'Love through debate. They argue with you, challenge your ideas, dismantle your points — this is not disrespect, it is their way of saying "I take you seriously."',
            breakdown_style_zh: '逃避式崩溃。不会正面面对问题，而是开始新的项目、新的兴趣、新的人际关系。用"新鲜感"来逃避"不舒服"。',
            breakdown_style_en: 'Escape collapse. They do not face problems directly — instead starting new projects, new interests, new relationships. Using "novelty" to escape "discomfort."',
            defense_mechanism_zh: '幽默。把一切变成笑话，包括自己的痛苦。笑一笑就不用面对了。',
            defense_mechanism_en: 'Humor. Turning everything into a joke, including their own pain. If they laugh, they do not have to face it.',
            growth_path_zh: '学会坚持。不是所有东西都值得被抛弃，有些东西需要你在"无聊"中坚持才能看到它的价值。',
            growth_path_en: 'Learning to persist. Not everything deserves to be abandoned — some things require staying through the "boredom" to see their value.',
            best_relationship_zh: 'INFJ — 对方能看到你玩笑背后的真实想法，而且不会被你的聪明吓到。他们会在你逃跑的时候拉住你。',
            best_relationship_en: 'INFJ — They can see the truth behind your jokes and are not intimidated by your cleverness. They will hold you back when you try to run.',
            worst_relationship_zh: 'ISFJ — 对方需要稳定，你需要变化。你会觉得对方"太无聊"，对方会觉得你"太不靠谱"。',
            worst_relationship_en: 'ISFJ — They need stability; you need change. You will think them "too boring"; they will think you "too unreliable."',
            symbol_zh: '迷宫',
            symbol_en: 'A maze',
            city_zh: '东京',
            city_en: 'Tokyo',
            weather_zh: '变化莫测的四月天。五分钟前还在出太阳，现在已经在下雨了。但你享受这种不确定性。',
            weather_en: 'An unpredictable April day. Sunny five minutes ago, raining now. But you enjoy the uncertainty.',
            music_mood_zh: '前卫摇滚，结构不断变化，永远不知道下一秒会变成什么。听的时候脑子会自动开始解构。',
            music_mood_en: 'Progressive rock, structure constantly shifting, never knowing what comes next. Your mind automatically starts deconstructing while listening.',
            night_state_zh: '最活跃的时候。会同时打开五个浏览器标签页，每个都在追踪一个不同的想法。会觉得"夜晚太短了"。',
            night_state_en: 'Their most active state. Five browser tabs open simultaneously, each tracking a different idea. They feel "the night is too short."',
            loneliness_state_zh: '在"所有人都觉得你很有趣"的时候感到最孤独。因为"有趣"不是"被理解"。你希望有人能看到你无聊的、安静的、不确定的那一面。',
            loneliness_state_en: 'Most lonely when "everyone thinks you are interesting." Because "interesting" is not "understood." You want someone to see your boring, quiet, uncertain side.'
        },

        // Connectors — 关系连接者 (绿)
        ENFJ: {
            world: 'connectors', color: '#4A8B5A',
            mood: '灯塔 · 海岸 · 暖光',
            quote_zh: '你能看到每个人身上的潜力，包括他们自己都看不到的。你用愿景激励别人成长，但有时候你也会累——因为你总是在照亮别人，却忘了自己也需要光。',
            quote_en: 'You see potential in everyone — even what they cannot see in themselves. You inspire growth with your vision, but sometimes you are tired — because you are always lighting the way for others, forgetting you need light too.',
            traits_zh: '领导力、共情、有魅力、善于激励',
            traits_en: 'Leadership, empathetic, charismatic, inspiring',
            scenes_zh: '在聚会中注意到角落里安静的那个人，主动过去聊天; 朋友遇到困难，你放下自己的事情去帮忙; 经常把别人的需求放在自己前面，直到某天突然崩溃',
            scenes_en: 'Noticing the quiet person in the corner at a party, going over to talk; Dropping everything to help a friend in need; Often putting others\' needs before your own until one day you suddenly break down',
            contradiction_zh: '你能看到每个人身上的光，却常常忘了自己也是发光的。你不是不想被关心，你只是习惯了做那个"给予"的人。',
            contradiction_en: 'You see light in everyone, yet often forget that you glow too. It is not that you do not want to be cared for — you are just used to being the one who gives.',
            growth_cost_zh: '你习惯为所有人负责，久而久之，会分不清"我想帮你"和"我需要被你需要"。',
            growth_cost_en: 'You habitually take responsibility for everyone — over time, you can no longer tell "I want to help you" from "I need to be needed by you."',
            core_desire_zh: '帮助别人成为最好的自己，并在这个过程中找到自己的意义。',
            core_desire_en: 'To help others become their best selves, and find meaning in that process.',
            core_fear_zh: '自己对别人来说其实不重要。',
            core_fear_en: 'That they are not actually important to others.',
            love_style_zh: '灯塔式爱你。会照亮你的路，帮你看到自己的潜力。他们的爱是引导性的——"我相信你可以"。但有时候他们也需要有人对他们说这句话。',
            love_style_en: 'Love as a lighthouse. They illuminate your path and help you see your potential. Their love is guiding — "I believe you can." But sometimes they need someone to say that to them too.',
            breakdown_style_zh: '燃烧殆尽式崩溃。先是加倍付出，然后突然什么都不想做了。不是懒了，是心累了。那种累不是身体的，是"我为所有人做了这么多，谁来管我"的疲惫。',
            breakdown_style_en: 'Burnout collapse. First they double their efforts, then suddenly want to do nothing. Not lazy — heart-tired. Not physical exhaustion, but "I have done so much for everyone — who takes care of me?"',
            defense_mechanism_zh: '角色化。把自己固定在"照顾者"的角色里，这样就不用面对自己也需要被照顾的事实。',
            defense_mechanism_en: 'Role-fixing. Locking themselves into the "caregiver" role so they do not have to face the fact that they need care too.',
            growth_path_zh: '学会说"不"。不是所有人都值得你付出，不是所有关系都需要你来维系。你的能量是有限的。',
            growth_path_en: 'Learning to say "no." Not everyone deserves your effort, not every relationship needs you to maintain it. Your energy is finite.',
            best_relationship_zh: 'INFP — 对方不会要求你做任何事。他们只是安静地理解你，这种不被要求的爱，是你最缺的。',
            best_relationship_en: 'INFP — They will not ask anything of you. They simply understand you quietly. This unrequested love is what you lack most.',
            worst_relationship_zh: 'ISTP — 对方的沉默会让你焦虑，你的热情会让对方窒息。你需要语言的确认，对方觉得行动就够了。',
            worst_relationship_en: 'ISTP — Their silence will make you anxious; your enthusiasm will suffocate them. You need verbal confirmation; they feel action is enough.',
            symbol_zh: '灯塔',
            symbol_en: 'A lighthouse',
            city_zh: '巴塞罗那',
            city_en: 'Barcelona',
            weather_zh: '温暖的傍晚，太阳还没落山，街道上有人在笑，空气里有食物的香味。',
            weather_en: 'A warm evening, sun not yet set, laughter in the streets, the scent of food in the air.',
            music_mood_zh: '民谣合唱，有很多人的声音交织在一起。温暖、有力量、让人想加入进去。',
            music_mood_en: 'A folk choir with many voices intertwined. Warm, powerful, making you want to join in.',
            night_state_zh: '在安静中感到不安。会忍不住打开手机看看有没有人需要帮助。如果不回消息，会觉得自己"不负责任"。',
            night_state_en: 'Uneasy in the quiet. They cannot help checking their phone to see if anyone needs help. Not replying to messages makes them feel "irresponsible."',
            loneliness_state_zh: '在被所有人需要之后，发现没有人真正了解自己。那种孤独是"我是所有人的朋友，但我没有朋友"。',
            loneliness_state_en: 'After being needed by everyone, realizing no one truly knows them. The loneliness is "I am everyone\'s friend, but I have no friends."'
        },
        ESFJ: {
            world: 'connectors', color: '#5A9B6A',
            mood: '毛线 · 厨房 · 节日',
            quote_zh: '你用行动表达爱——做一顿饭、记住一个偏好、在别人难过时第一个出现。你的在乎藏在细节里，但你也在等一个人用同样的方式在乎你。',
            quote_en: 'You express love through actions — cooking a meal, remembering a preference, being the first to show up when someone is sad. Your care hides in details, but you are also waiting for someone to care for you the same way.',
            traits_zh: '有同理心、有责任心、善于社交、忠诚',
            traits_en: 'Empathetic, responsible, social, loyal',
            scenes_zh: '记住每个人的口味，点菜时自然地帮大家安排好; 在团队里主动承担杂活，没人知道你其实也想被照顾; 因为别人的一句无心之语难过了一整天，但表现得像什么都没发生',
            scenes_en: 'Remembering everyone\'s preferences, naturally ordering for the group; Taking on the thankless tasks in a team, no one knowing you want to be taken care of too; Being hurt by an offhand remark all day, but acting like nothing happened',
            contradiction_zh: '你用行动表达爱，但你也在等一个人用同样的方式爱你。你不是不值得，你只是不敢说"我也想要"。',
            contradiction_en: 'You express love through actions, but you are waiting for someone to love you the same way. It is not that you are not worthy — you just dare not say "I want it too."',
            growth_cost_zh: '你习惯通过"被需要"来确认自己的价值，久而久之，会忘记你不需要做任何事也值得被爱。',
            growth_cost_en: 'You habitually confirm your worth through being needed — over time, you forget that you deserve love without having to do anything.',
            core_desire_zh: '被爱，被珍惜，被人用心对待。',
            core_desire_en: 'To be loved, cherished, and treated with care.',
            core_fear_zh: '自己付出的爱没有被回应。',
            core_fear_en: 'That the love they give will not be returned.',
            love_style_zh: '服务式爱你。会帮你做饭、收拾、安排一切。他们的爱是具体的——不是说"我爱你"，是"我给你留了饭"。',
            love_style_en: 'Love through service. They cook, clean, arrange everything. Their love is concrete — not "I love you" but "I saved you some food."',
            breakdown_style_zh: '委屈式崩溃。积攒了很久的不满终于爆发，但爆发的方式是哭，不是愤怒。哭完之后会觉得很丢人，然后加倍对别人好来"补偿"。',
            breakdown_style_en: 'Grievance collapse. Long-accumulated dissatisfaction finally erupts, but through tears, not anger. After crying, they feel ashamed and double down on being good to others to "make up for it."',
            defense_mechanism_zh: '讨好。当感到不安全时，会更加努力地对别人好。"如果我对他们足够好，他们就不会离开我。"',
            defense_mechanism_en: 'People-pleasing. When insecure, they try even harder to be good to others. "If I am good enough to them, they will not leave me."',
            growth_path_zh: '学会接受不完美的关系。不是所有人都会用你想要的方式爱你，但这不代表他们不爱你。',
            growth_path_en: 'Learning to accept imperfect relationships. Not everyone will love you the way you want, but that does not mean they do not love you.',
            best_relationship_zh: 'ISFP — 对方的安静会让你感到安全。他们不会用语言说"我爱你"，但他们的存在本身就是答案。',
            best_relationship_en: 'ISFP — Their quietness makes you feel safe. They will not say "I love you" in words, but their presence itself is the answer.',
            worst_relationship_zh: 'ENTP — 对方的不靠谱会让你崩溃。你需要确定性，对方需要自由。你会追，对方会跑。',
            worst_relationship_en: 'ENTP — Their unreliability will break you. You need certainty; they need freedom. You will chase; they will run.',
            symbol_zh: '围巾',
            symbol_en: 'A scarf',
            city_zh: '维也纳',
            city_en: 'Vienna',
            weather_zh: '圣诞节前的傍晚，空气冷但街上很暖，到处都是灯光和人。',
            weather_en: 'A Christmas Eve evening, cold air but warm streets, lights and people everywhere.',
            music_mood_zh: '古典钢琴，旋律优美但有一丝忧伤。像一个人在窗边看着外面的热闹，心里想着一个人。',
            music_mood_en: 'Classical piano, beautiful melody with a hint of sadness. Like someone watching the bustle from a window, thinking of one person.',
            night_state_zh: '最容易感到被忽视。会反复检查手机，看有没有人回消息。如果在意的人没有回复，会开始想"是不是我做错了什么"。',
            night_state_en: 'Most prone to feeling overlooked. They repeatedly check their phone for replies. If someone important has not replied, they start wondering "did I do something wrong?"',
            loneliness_state_zh: '在被忽视的时候感到最深的孤独。不是没有人，是没有人主动来找你。你会想"如果我不主动，是不是就没有人记得我"。',
            loneliness_state_en: 'Most lonely when overlooked. Not that no one is around — no one comes to them first. They wonder "if I don\'t reach out, will anyone remember me?"'
        },
        ENFP: {
            world: 'connectors', color: '#3A7B4A',
            mood: '野火 · 种子 · 黄昏公路',
            quote_zh: '你能在任何地方找到可能性，在任何人身上找到故事。你的热情像野火一样蔓延，但你的注意力也像风一样飘走。你害怕的不是失败，而是被困住。',
            quote_en: 'You find possibility everywhere and stories in everyone. Your enthusiasm spreads like wildfire, but your attention drifts like wind. What you fear is not failure — it is being trapped.',
            traits_zh: '创造力、热情、适应力强、善于激励',
            traits_en: 'Creative, enthusiastic, adaptable, inspiring',
            scenes_zh: '在聊天中突然发现一个新的可能性，眼睛亮了起来; 同时对三个新想法着迷，每个都想做; 在深夜公路上开车，不是因为要去哪，是因为路本身就是目的地',
            scenes_en: 'Suddenly discovering a new possibility in conversation, eyes lighting up; Being fascinated by three new ideas at once, wanting to pursue each; Driving on a highway at dusk — not because you are going somewhere, but because the road itself is the destination',
            contradiction_zh: '你总是在寻找"下一个"，但有时候你会想——如果你停下来，会不会发现其实你已经拥有了很多？',
            contradiction_en: 'You are always seeking "the next thing," but sometimes you wonder — if you stopped, would you realize you already have so much?',
            growth_cost_zh: '你习惯用热情点燃一切，久而久之，会忘记有些火需要慢慢烧才能持久。',
            growth_cost_en: 'You habitually ignite everything with enthusiasm — over time, you forget that some fires need to burn slowly to last.',
            core_desire_zh: '自由地探索，永远不被困住。',
            core_desire_en: 'To explore freely, never to be trapped.',
            core_fear_zh: '失去可能性，被困在一个没有出口的处境里。',
            core_fear_en: 'Losing possibilities, being stuck in a situation with no exit.',
            love_style_zh: '探险式爱你。会带你去从没去过的地方，给你看从没见过的风景。他们的爱是充满惊喜的——但有时候你需要的不是惊喜，是安定。',
            love_style_en: 'Love as adventure. They take you places you have never been, show you sights you have never seen. Their love is full of surprises — but sometimes you need stability, not surprises.',
            breakdown_style_zh: '消失式崩溃。不是大哭大闹，而是突然从所有人的生活里消失。不回消息，不接电话，一个人去一个没人认识的地方重新开始想。',
            breakdown_style_en: 'Vanishing collapse. No dramatic outburst — just sudden disappearance from everyone\'s life. No replies, no calls. They go somewhere no one knows them and start thinking again.',
            defense_mechanism_zh: '转移注意力。当感到痛苦时，立刻开始做别的事情。"我不难过，我只是需要一个新的项目。"',
            defense_mechanism_en: 'Distraction. When in pain, they immediately start something else. "I am not sad — I just need a new project."',
            growth_path_zh: '学会在"无聊"中发现价值。不是所有有意义的事情都是刺激的。有些最好的东西，需要你慢下来才能看到。',
            growth_path_en: 'Learning to find value in "boredom." Not everything meaningful is exciting. Some of the best things require slowing down to see.',
            best_relationship_zh: 'INFJ — 对方能理解你表面快乐下面的不安，而且不会试图"修复"你。他们只是在那里，安静地等你准备好。',
            best_relationship_en: 'INFJ — They understand the unease beneath your surface happiness and will not try to "fix" you. They are just there, quietly waiting until you are ready.',
            worst_relationship_zh: 'ISTJ — 对方的生活方式会让你觉得被囚禁，你的不确定性会让对方焦虑。你需要自由，对方需要计划。',
            worst_relationship_en: 'ISTJ — Their lifestyle will make you feel imprisoned; your uncertainty will make them anxious. You need freedom; they need plans.',
            symbol_zh: '风筝',
            symbol_en: 'A kite',
            city_zh: '墨尔本',
            city_en: 'Melbourne',
            weather_zh: '黄昏的海边，风很大，天空有十种颜色。你不知道接下来会变成什么，但你享受这种不知道。',
            weather_en: 'A seaside at dusk, strong wind, ten colors in the sky. You do not know what comes next, but you enjoy not knowing.',
            music_mood_zh: '独立民谣，歌词像诗，旋律像风。听的时候会觉得"世界很大，我可以去任何地方"。',
            music_mood_en: 'Indie folk, lyrics like poetry, melody like wind. Listening makes you feel "the world is big, I can go anywhere."',
            night_state_zh: '最有灵感的时候。会觉得"今晚可以做点什么不一样的"。可能会突然开始画画、写东西、或者给一个很久没联系的朋友发消息。',
            night_state_en: 'Their most inspired state. They feel "tonight I can do something different." They might suddenly start drawing, writing, or messaging a friend they haven\'t contacted in a long time.',
            loneliness_state_zh: '在"被所有人喜欢但没有人真正了解"的时候感到最深的孤独。你有很多朋友，但你知道真正懂你的人很少。',
            loneliness_state_en: 'Most lonely when "liked by everyone but truly known by no one." You have many friends, but you know few truly understand you.'
        },
        ESFP: {
            world: 'connectors', color: '#6AAB7A',
            mood: '阳光 · 舞台 · 旅行',
            quote_zh: '你是人群中的太阳。你走到哪里，哪里就有笑声和活力。你用行动定义生活，用感受理解世界。你害怕的不是冒险，而是无聊。',
            quote_en: 'You are the sun in any room. Wherever you go, laughter and energy follow. You define life through action and understand the world through feeling. What you fear is not risk — it is boredom.',
            traits_zh: '感染力、社交能力、乐观、热情',
            traits_en: 'Charismatic, social, optimistic, enthusiastic',
            scenes_zh: '在派对上是第一个跳舞的人; 能和出租车司机聊成朋友; 突然决定周末去一个从没去过的地方，不带计划',
            scenes_en: 'Being the first person to dance at a party; Becoming friends with the taxi driver; Suddenly deciding to go somewhere you have never been this weekend, without a plan',
            contradiction_zh: '你是所有人的快乐来源，但有时候你会想——如果有一天你不再笑了，还有人会在你身边吗？',
            contradiction_en: 'You are everyone\'s source of joy, but sometimes you wonder — if one day you stopped laughing, would anyone still be there?',
            growth_cost_zh: '你习惯用快乐回应一切，久而久之，会忘记自己也有权利不开心。',
            growth_cost_en: 'You habitually respond to everything with joy — over time, you forget that you too have the right to be unhappy.',
            core_desire_zh: '充分地活在每一个当下。',
            core_desire_en: 'To fully live in every moment.',
            core_fear_zh: '错过生命中真正重要的体验。',
            core_fear_en: 'Missing the truly important experiences in life.',
            love_style_zh: '体验式爱你。会拉着你去做各种事情——旅行、尝试新餐厅、半夜出去散步。他们的爱是"和你一起经历这个世界"。但有时候你需要的不是经历，是安静的陪伴。',
            love_style_en: 'Love through experience. They pull you into everything — travel, new restaurants, midnight walks. Their love is "experiencing this world with you." But sometimes you need quiet companionship, not experiences.',
            breakdown_style_zh: '表演式崩溃。表面上还在笑，但笑容越来越勉强。直到某个瞬间，面具碎了，所有人都吓到了——"你不是一直很开心吗？"',
            breakdown_style_en: 'Performance collapse. Still smiling on the surface, but the smile grows more forced. Until one moment the mask shatters and everyone is shocked — "weren\'t you always happy?"',
            defense_mechanism_zh: '表演快乐。当内心不安时，更加努力地表现得开心。"如果我还在笑，就说明我没事。"',
            defense_mechanism_en: 'Performing happiness. When unsettled, they try even harder to appear happy. "If I am still laughing, it means I am fine."',
            growth_path_zh: '学会在安静中和自己相处。不需要每时每刻都在做事情。有时候什么都不做，才是最重要的事。',
            growth_path_en: 'Learning to be with themselves in quiet. Not every moment needs to be filled with activity. Sometimes doing nothing is the most important thing.',
            best_relationship_zh: 'ISTP — 对方的安静不会让你觉得无聊，反而会让你感到一种新的平静。你们不需要说话就能在一起。',
            best_relationship_en: 'ISTP — Their quietness will not bore you but will give you a new kind of peace. You can be together without speaking.',
            worst_relationship_zh: 'INTJ — 对方的计划会让你窒息，你的随性会让对方崩溃。你需要空间，对方需要结构。',
            worst_relationship_en: 'INTJ — Their plans will suffocate you; your spontaneity will break them. You need space; they need structure.',
            symbol_zh: '烟火',
            symbol_en: 'Fireworks',
            city_zh: '里约热内卢',
            city_en: 'Rio de Janeiro',
            weather_zh: '夏天的暴雨。来得快去得快，雨停之后空气特别清新，到处都在发光。',
            weather_en: 'A summer downpour. Comes fast, leaves fast. After the rain, the air is especially fresh and everything glows.',
            music_mood_zh: '拉丁流行乐，节奏感强，让人忍不住想动起来。不是背景音乐，是一种"你必须参与"的能量。',
            music_mood_en: 'Latin pop with a strong rhythm that makes you want to move. Not background music — an energy that demands participation.',
            night_state_zh: '在派对结束后感到最空虚。所有人都走了，房间安静下来，突然不知道该做什么。那种空虚不是"不好玩"，是"为什么结束了我会这么难受"。',
            night_state_en: 'Most empty after the party ends. Everyone leaves, the room goes quiet, and they suddenly do not know what to do. The emptiness is not "it wasn\'t fun" — it is "why does the ending hurt so much?"',
            loneliness_state_zh: '在热闹中感到最孤独。因为你总是在让别人开心，但没有人问你"你今天开心吗"。',
            loneliness_state_en: 'Most lonely in the bustle. Because you are always making others happy, but no one asks "are you happy today?"'
        },

        // Explorers — 行动探索者 (橙)
        ISTP: {
            world: 'explorers', color: '#C4783C',
            mood: '雾 · 山径 · 工具箱',
            quote_zh: '你更相信双手和直觉，而不是理论和计划。你喜欢拆开东西看看它们怎么运作，然后用你自己的方式重新组装。你不需要解释，你的作品就是你的语言。',
            quote_en: 'You trust your hands and instincts more than theory and plans. You like to take things apart, see how they work, then reassemble them your own way. You do not need to explain — your work speaks for you.',
            traits_zh: '分析能力、实践能力、适应力强、独立',
            traits_en: 'Analytical, practical, adaptable, independent',
            scenes_zh: '在危机中保持冷静，别人慌了你还在想解决方案; 把一个旧钟拆了，不是要修，是想知道它怎么走的; 一个人在山里走很久，不需要目的地，路本身就是答案',
            scenes_en: 'Staying calm in a crisis while others panic, still thinking of solutions; Taking apart an old clock — not to fix it, but to understand how it ticks; Walking alone in the mountains for hours, needing no destination — the path itself is the answer',
            contradiction_zh: '你用沉默保护自己，但有时候你会想——如果有一天你开口说了，会不会有人真的听？',
            contradiction_en: 'You protect yourself with silence, but sometimes you wonder — if you spoke up one day, would anyone truly listen?',
            growth_cost_zh: '你习惯自己解决所有问题，久而久之，会忘记求助不是软弱，是信任。',
            growth_cost_en: 'You habitually solve everything alone — over time, you forget that asking for help is not weakness, but trust.',
            core_desire_zh: '用自己的方式理解世界，不受外界干扰。',
            core_desire_en: 'To understand the world in their own way, undisturbed by the outside.',
            core_fear_zh: '被束缚，被迫按照别人的方式生活。',
            core_fear_en: 'Being constrained, forced to live by someone else\'s rules.',
            love_style_zh: '在场式爱你。不会说很多话，但会在你修不好的东西时默默修好、在你冷的时候把外套递过来。他们的爱是动手的——不说，做。',
            love_style_en: 'Love through presence. No many words, but they silently fix what you cannot fix and hand you a jacket when you are cold. Their love is hands-on — not spoken, but done.',
            breakdown_style_zh: '关机式崩溃。不会告诉任何人，只是突然停止了一切社交。不回消息，不接电话，一个人去一个没有人的地方，和机器或者自然待在一起。',
            breakdown_style_en: 'Shutdown collapse. They tell no one — just suddenly stop all social activity. No replies, no calls. They go somewhere empty, alone with machines or nature.',
            defense_mechanism_zh: '隔离。把情感和理智完全分开。"我没有生气，我只是在分析情况。"',
            defense_mechanism_en: 'Compartmentalization. Completely separating emotion from reason. "I am not angry — I am just analyzing the situation."',
            growth_path_zh: '学会表达脆弱。你不需要永远是那个"能解决问题的人"。有时候承认"我不知道"比假装"我没事"更需要勇气。',
            growth_path_en: 'Learning to express vulnerability. You do not always have to be the one who "fixes things." Sometimes admitting "I don\'t know" takes more courage than pretending "I\'m fine."',
            best_relationship_zh: 'ESTP — 对方理解你对空间的需求，不会要求你解释自己。你们可以一起做事，不需要说话。',
            best_relationship_en: 'ESTP — They understand your need for space and will not ask you to explain yourself. You can do things together without talking.',
            worst_relationship_zh: 'ENFJ — 对方需要你表达情感，但你觉得行动就是表达。你会觉得对方"太黏人"，对方会觉得你"太冷"。',
            worst_relationship_en: 'ENFJ — They need you to express feelings, but you feel action is expression. You will think them "too clingy"; they will think you "too cold."',
            symbol_zh: '工具箱',
            symbol_en: 'A toolbox',
            city_zh: '雷克雅未克',
            city_en: 'Reykjavik',
            weather_zh: '山里的雾。看不见远处，但你能感受到空气的温度、脚下土地的质感。不需要看见，需要感受。',
            weather_en: 'Mountain fog. You cannot see far, but you feel the air temperature and the texture of the ground beneath your feet. No need to see — need to feel.',
            music_mood_zh: '后摇，没有歌词，旋律像潮水一样缓慢推进。听的时候不需要想任何事情，只需要在。',
            music_mood_en: 'Post-rock, no lyrics, melody advancing slowly like a tide. While listening, you do not need to think about anything — just be.',
            night_state_zh: '最自由的时候。白天的社交面具全部卸下，终于可以做自己想做的事。可能会拆一个旧电器、在阳台上看星星、或者只是坐着发呆。',
            night_state_en: 'Their most free state. The social mask comes off, and they can finally do what they want. They might disassemble an old appliance, stargaze from the balcony, or just sit and stare.',
            loneliness_state_zh: '不是没有人在身边，是没有人理解你需要独处。他们会在被迫社交的时候感到最孤独，因为那种"在场"不是他们选择的。',
            loneliness_state_en: 'Not that no one is around — no one understands they need solitude. They feel most lonely when forced into socializing, because that "presence" was not their choice.'
        },
        ESTP: {
            world: 'explorers', color: '#D4884C',
            mood: '风 · 速度 · 赛道',
            quote_zh: '你活在当下，行动就是你的语言。你不喜欢计划，因为计划会错过路上的风景。你在危机中冷静，在混乱中兴奋——因为那是你真正活着的时刻。',
            quote_en: 'You live in the present — action is your language. You dislike plans because plans miss the scenery along the way. You stay calm in crisis, excited in chaos — because that is when you truly feel alive.',
            traits_zh: '适应能力、实践能力、果断、精力充沛',
            traits_en: 'Adaptable, practical, decisive, energetic',
            scenes_zh: '在紧急情况中反而更冷静，别人越慌你越清醒; 突然决定去跳伞，不是因为勇敢，是因为"没试过"; 能在任何环境中找到乐趣，包括堵车',
            scenes_en: 'Becoming calmer in emergencies — the more others panic, the clearer you think; Suddenly deciding to go skydiving — not out of courage, but because "I haven\'t tried it"; Finding fun in any situation, including traffic jams',
            contradiction_zh: '你活在当下，但有时候你会想——如果你慢下来，会不会发现你一直在逃避什么？',
            contradiction_en: 'You live in the present, but sometimes you wonder — if you slowed down, would you realize you have been running from something?',
            growth_cost_zh: '你习惯用行动代替思考，久而久之，会忘记停下来想一想"我到底要去哪"。',
            growth_cost_en: 'You habitually replace thinking with action — over time, you forget to stop and ask "where am I actually going?"',
            core_desire_zh: '充分体验生命的每一刻，不留遗憾。',
            core_desire_en: 'To fully experience every moment of life, with no regrets.',
            core_fear_zh: '错过真正重要的东西，被无聊和重复困住。',
            core_fear_en: 'Missing what truly matters, being trapped by boredom and routine.',
            love_style_zh: '冒险式爱你。会突然出现在你楼下说"走，我们去看日出"。他们的爱是即兴的——不是不认真，是觉得"现在"就是最好的时机。',
            love_style_en: 'Love as adventure. They suddenly appear at your door and say "come on, let\'s watch the sunrise." Their love is spontaneous — not careless, but they feel "now" is always the best time.',
            breakdown_style_zh: '加速式崩溃。越焦虑越快，越快越容易出错，越出错越焦虑。像一辆刹不住的车，直到撞上什么才会停下来。',
            breakdown_style_en: 'Acceleration collapse. The more anxious, the faster they go. The faster they go, the more mistakes. The more mistakes, the more anxious. Like a car that cannot brake until it hits something.',
            defense_mechanism_zh: '行动。当感到不安时，立刻做点什么。"我不焦虑，我只是需要动起来。"',
            defense_mechanism_en: 'Action. When unsettled, they immediately do something. "I am not anxious — I just need to move."',
            growth_path_zh: '学会停下来。不是所有问题都需要用行动来解决。有时候你需要坐在那里，感受一下不舒服，然后让它过去。',
            growth_path_en: 'Learning to stop. Not every problem needs action to solve. Sometimes you need to sit with discomfort, feel it, and let it pass.',
            best_relationship_zh: 'ISFJ — 对方的稳定会让你感到一种你从未体验过的安全感。你不需要表演，不需要刺激，只需要在那里。',
            best_relationship_en: 'ISFJ — Their stability gives you a security you have never experienced. You do not need to perform, do not need stimulation — just be there.',
            worst_relationship_zh: 'INFJ — 对方的深度会让你不舒服。你不想被分析，你只想活。对方会觉得你"太肤浅"，你会觉得对方"太沉重"。',
            worst_relationship_en: 'INFJ — Their depth will make you uncomfortable. You do not want to be analyzed — you just want to live. They will think you "too shallow"; you will think them "too heavy."',
            symbol_zh: '风',
            symbol_en: 'Wind',
            city_zh: '洛杉矶',
            city_en: 'Los Angeles',
            weather_zh: '晴天，万里无云，风很大。你不知道风会把你吹向哪里，但你不介意。',
            weather_en: 'Clear sky, no clouds, strong wind. You do not know where the wind will take you, but you do not mind.',
            music_mood_zh: '摇滚乐，鼓点强烈，吉他失真。不是为了听旋律，是为了感受那种"活着"的能量。',
            music_mood_en: 'Rock music, strong drums, distorted guitar. Not for the melody — for the feeling of being alive.',
            night_state_zh: '在凌晨感到最自由。街上没有人，整个城市都是你的。可能会突然骑车出去，不带目的地。',
            night_state_en: 'Most free in the early morning hours. The streets are empty, the whole city is yours. They might suddenly go for a ride with no destination.',
            loneliness_state_zh: '在被迫放慢脚步的时候感到最孤独。当周围安静下来，没有事情做的时候，会突然不知道自己是谁。',
            loneliness_state_en: 'Most lonely when forced to slow down. When everything goes quiet and there is nothing to do, they suddenly do not know who they are.'
        },
        ISTJ: {
            world: 'explorers', color: '#B46830',
            mood: '古卷 · 木桌 · 烛光',
            quote_zh: '你是沉默的支柱。世界因为你的稳定而运转，但很少有人注意到。你不需要掌声，你只需要知道事情是"对的"。你的可靠是一种安静的力量。',
            quote_en: 'You are the silent pillar. The world runs because of your steadiness, but few notice. You do not need applause — you just need to know things are right. Your reliability is a quiet strength.',
            traits_zh: '责任感、有条理、可靠、注重细节',
            traits_en: 'Responsible, organized, reliable, detail-oriented',
            scenes_zh: '在截止日期前很久就完成了任务，但不会告诉别人; 做决定前会列一个很长的利弊清单; 有一本记满了重要日期和待办事项的笔记本，从不离身',
            scenes_en: 'Finishing tasks well before the deadline, but not telling anyone; Making a long pros-and-cons list before any decision; Carrying a notebook filled with important dates and to-do lists, never leaving home without it',
            contradiction_zh: '你用稳定支撑着一切，但有时候你会想——如果有一天你不再可靠，还有人会在你身边吗？',
            contradiction_en: 'You hold everything together with your steadiness, but sometimes you wonder — if one day you were no longer reliable, would anyone still be there?',
            growth_cost_zh: '你习惯按部就班地生活，久而久之，会忘记"意外"有时候是礼物。',
            growth_cost_en: 'You habitually live by the book — over time, you forget that surprises are sometimes gifts.',
            core_desire_zh: '做正确的事，成为可靠的人。',
            core_desire_en: 'To do the right thing, to be someone others can count on.',
            core_fear_zh: '失控，事情不按计划进行。',
            core_fear_en: 'Losing control, things not going according to plan.',
            love_style_zh: '忠诚式爱你。不会给你很多惊喜，但会在你需要的时候永远在那里。他们的爱是"我说到做到"——不浪漫，但你可以把人生押在上面。',
            love_style_en: 'Love through loyalty. No many surprises, but always there when you need them. Their love is "I do what I say" — not romantic, but you can stake your life on it.',
            breakdown_style_zh: '秩序崩溃。当他们精心维护的秩序被打破时——计划变更、承诺被打破、规则被忽视——会突然变得非常焦虑和易怒。',
            breakdown_style_en: 'Order collapse. When the order they carefully maintain is broken — plans change, promises break, rules are ignored — they suddenly become very anxious and irritable.',
            defense_mechanism_zh: '规则化。给一切制定规则和流程。"如果有规则，就不会出错。"',
            defense_mechanism_en: 'Rule-making. Creating rules and processes for everything. "If there are rules, nothing will go wrong."',
            growth_path_zh: '学会接受"计划之外"的事情。不是所有意外都是坏事。有些最好的事情，发生在你没有计划的时候。',
            growth_path_en: 'Learning to accept "off-plan" events. Not all surprises are bad. Some of the best things happen when you did not plan for them.',
            best_relationship_zh: 'ESFP — 对方会让你笑，让你放松，让你忘记清单。他们的存在本身就是一种"你不需要那么努力"的提醒。',
            best_relationship_en: 'ESFP — They make you laugh, relax, forget your lists. Their existence is a reminder that "you don\'t have to try so hard."',
            worst_relationship_zh: 'ENFP — 对方的随性会让你崩溃。你需要计划，对方需要自由。你会觉得对方"不靠谱"，对方会觉得你"太死板"。',
            worst_relationship_en: 'ENFP — Their spontaneity will break you. You need plans; they need freedom. You will think them "unreliable"; they will think you "too rigid."',
            symbol_zh: '古卷',
            symbol_en: 'An ancient scroll',
            city_zh: '伦敦',
            city_en: 'London',
            weather_zh: '秋天的清晨，空气凉而干净，天空是灰色的但很安静。有一种"一切都在正确的位置上"的感觉。',
            weather_en: 'An autumn morning, cool and clean air, grey sky but very quiet. A feeling of "everything is in its right place."',
            music_mood_zh: '古典乐，结构清晰，每个音符都在它应该在的位置。不是为了感动你，是为了"正确"。',
            music_mood_en: 'Classical music with clear structure, every note where it should be. Not to move you — to be correct.',
            night_state_zh: '在安静中感到最安全。会整理明天的计划，确认一切就绪。然后躺在床上，感到一种"今天做完了"的满足。',
            night_state_en: 'Safest in the quiet. They organize tomorrow\'s plans, confirm everything is ready. Then lying in bed with the satisfaction of "today is done."',
            loneliness_state_zh: '在"所有人都依赖你但没有人了解你"的时候感到最孤独。你是所有人的支柱，但没有人在你需要的时候成为你的支柱。',
            loneliness_state_en: 'Most lonely when "everyone depends on you but no one knows you." You are everyone\'s pillar, but no one becomes yours when you need one.'
        },
        ESTJ: {
            world: 'explorers', color: '#E4985C',
            mood: '灯塔 · 建筑 · 执行',
            quote_zh: '你把想法变成现实，把混乱变成秩序。你相信结构和纪律，因为你知道没有它们，一切都会散架。你不是控制狂，你只是知道事情"应该"怎么做。',
            quote_en: 'You turn ideas into reality and chaos into order. You believe in structure and discipline, because you know without them, everything falls apart. You are not controlling — you just know how things should be done.',
            traits_zh: '领导能力、组织能力、执行力强、有责任感',
            traits_en: 'Leadership, organizational skills, strong execution, responsible',
            scenes_zh: '自然地组织团队活动，从策划到执行一条龙; 制定了一个完美的旅行计划，结果朋友迟到两小时你差点崩溃; 在工作中是那个"靠谱"的人，但没人知道你也会累',
            scenes_en: 'Naturally organizing team events from planning to execution; Making a perfect travel plan, then nearly breaking down when friends are two hours late; Being the "reliable" person at work, but no one knows you get tired too',
            contradiction_zh: '你总是知道"正确"的方式，但有时候你会想——如果有一天你放手了，世界真的会塌吗？',
            contradiction_en: 'You always know the "right" way, but sometimes you wonder — if you let go one day, would the world really collapse?',
            growth_cost_zh: '你习惯用"应该"来要求自己和别人，久而久之，会忘记"想要"和"应该"不是同一件事。',
            growth_cost_en: 'You habitually use "should" to demand of yourself and others — over time, you forget that "want" and "should" are not the same thing.',
            core_desire_zh: '建立秩序，让一切按照正确的方式运转。',
            core_desire_en: 'To establish order and make everything run the right way.',
            core_fear_zh: '失去对局面的控制，事情变得混乱和低效。',
            core_fear_en: 'Losing control of the situation, things becoming chaotic and inefficient.',
            love_style_zh: '守护式爱你。会为你建立稳定的环境、处理实际问题、确保一切运转正常。他们的爱是"我不会让你操心那些事"。但有时候你需要的不是解决方案，是有人听你说话。',
            love_style_en: 'Love through protection. They build a stable environment, handle practical problems, ensure everything runs smoothly. Their love is "I won\'t let you worry about those things." But sometimes you need someone to listen, not solve.',
            breakdown_style_zh: '控制式崩溃。当事情开始失控时，会变得更加控制——制定更多规则、更高的标准、更严格的要求。直到所有人都受不了了，包括他们自己。',
            breakdown_style_en: 'Control collapse. When things start going out of control, they become more controlling — more rules, higher standards, stricter requirements. Until everyone cannot take it anymore, including themselves.',
            defense_mechanism_zh: '秩序化。当感到不安时，开始整理周围的一切——打扫房间、重新安排日程、制定新规则。外在的秩序可以暂时替代内在的混乱。',
            defense_mechanism_en: 'Ordering. When unsettled, they start organizing everything around them — cleaning, rescheduling, making new rules. External order can temporarily replace internal chaos.',
            growth_path_zh: '学会接受"不完美"。有些事情不需要做得最好，只需要做了。有些关系不需要被优化，只需要被感受。',
            growth_path_en: 'Learning to accept "imperfect." Some things do not need to be done best — just done. Some relationships do not need optimizing — just feeling.',
            best_relationship_zh: 'ISFP — 对方会让你慢下来，让你看到生活中那些你一直忽略的美好。他们的存在本身就是一种"你不需要那么努力"的许可。',
            best_relationship_en: 'ISFP — They slow you down and show you the beauty you have been overlooking. Their presence is permission to not try so hard.',
            worst_relationship_zh: 'INFP — 对方的"不切实际"会让你抓狂，你的"太现实"会让对方窒息。你需要效率，对方需要意义。',
            worst_relationship_en: 'INFP — Their "unrealism" will drive you crazy; your "too practical" will suffocate them. You need efficiency; they need meaning.',
            symbol_zh: '钟楼',
            symbol_en: 'A clock tower',
            city_zh: '苏黎世',
            city_en: 'Zurich',
            weather_zh: '冬天的早晨，一切都被霜覆盖，整整齐齐。空气冷而干净，世界像被清洗过一样。',
            weather_en: 'A winter morning, everything covered in frost, neat and orderly. The air is cold and clean, the world as if freshly washed.',
            music_mood_zh: '进行曲，节奏明确，结构稳定。不是为了感动你，是为了让你知道"一切都在掌控中"。',
            music_mood_en: 'A march, clear rhythm, stable structure. Not to move you — to let you know "everything is under control."',
            night_state_zh: '在确认一切就绪后才能安心入睡。会检查门有没有锁好、明天的闹钟设了没有、日程有没有遗漏。只有在"一切都在正确的位置上"之后，才能放松。',
            night_state_en: 'Can only sleep peacefully after confirming everything is ready. They check if the door is locked, tomorrow\'s alarm is set, the schedule has no gaps. Only when "everything is in its right place" can they relax.',
            loneliness_state_zh: '在"所有人都觉得你很强"的时候感到最孤独。因为"很强"意味着"不需要帮助"。你希望有人能看到你也会累、也会不确定、也需要被抱一下。',
            loneliness_state_en: 'Most lonely when "everyone thinks you are strong." Because "strong" means "doesn\'t need help." You want someone to see that you get tired too, uncertain too, and need a hug too.'
        }
    },

    // MBTI 类型描述
    types: {
        INTJ: {
            zh: {
                name: "建筑师",
                title: "INTJ - 建筑师",
                description: "INTJ是独立思考者，具有强烈的直觉和逻辑分析能力。他们善于制定长期战略，追求效率和完美。INTJ通常安静、有远见，喜欢独自工作，对知识有强烈的渴望。",
                strengths: ["战略思维", "独立自主", "高效率", "有远见"],
                weaknesses: ["过于理性", "不善表达情感", "完美主义", "社交困难"]
            },
            en: {
                name: "Architect",
                title: "INTJ - Architect",
                description: "INTJs are independent thinkers with strong intuition and logical analysis abilities. They excel at developing long-term strategies, pursuing efficiency and perfection. INTJs are typically quiet, visionary, prefer working alone, and have a strong thirst for knowledge.",
                strengths: ["Strategic thinking", "Independent", "Efficient", "Visionary"],
                weaknesses: ["Overly rational", "Poor at expressing emotions", "Perfectionist", "Social difficulties"]
            }
        },
        INTP: {
            zh: {
                name: "逻辑学家",
                title: "INTP - 逻辑学家",
                description: "INTP是创新者和发明家，对理论和抽象概念充满热情。他们善于分析复杂问题，追求知识和理解。INTP通常安静、内向，喜欢独立思考，对常规和限制感到不适。",
                strengths: ["逻辑分析", "创新思维", "独立思考", "求知欲强"],
                weaknesses: ["拖延症", "不善社交", "过于理论化", "忽视细节"]
            },
            en: {
                name: "Logician",
                title: "INTP - Logician",
                description: "INTPs are innovators and inventors, passionate about theories and abstract concepts. They excel at analyzing complex problems, pursuing knowledge and understanding. INTPs are typically quiet, introverted, prefer independent thinking, and feel uncomfortable with routines and restrictions.",
                strengths: ["Logical analysis", "Innovative thinking", "Independent thinking", "Strong curiosity"],
                weaknesses: ["Procrastination", "Poor social skills", "Overly theoretical", "Ignoring details"]
            }
        },
        ENTJ: {
            zh: {
                name: "指挥官",
                title: "ENTJ - 指挥官",
                description: "ENTJ是天生的领导者，具有强大的组织能力和战略眼光。他们善于制定计划并推动执行，追求效率和成果。ENTJ通常自信、果断，喜欢挑战，对低效率感到不耐烦。",
                strengths: ["领导能力", "战略眼光", "果断决策", "高效率"],
                weaknesses: ["过于强势", "缺乏耐心", "忽视他人感受", "工作狂"]
            },
            en: {
                name: "Commander",
                title: "ENTJ - Commander",
                description: "ENTJs are natural leaders with strong organizational skills and strategic vision. They excel at making plans and driving execution, pursuing efficiency and results. ENTJs are typically confident, decisive, enjoy challenges, and feel impatient with inefficiency.",
                strengths: ["Leadership", "Strategic vision", "Decisive decision-making", "High efficiency"],
                weaknesses: ["Overly dominant", "Lack of patience", "Ignoring others' feelings", "Workaholic"]
            }
        },
        ENTP: {
            zh: {
                name: "辩论家",
                title: "ENTP - 辩论家",
                description: "ENTP是创新者和挑战者，喜欢探索新想法和可能性。他们善于辩论，思维敏捷，对传统和常规持怀疑态度。ENTP通常聪明、好奇，喜欢智力挑战，但可能缺乏执行力。",
                strengths: ["创新思维", "辩论能力", "适应力强", "思维敏捷"],
                weaknesses: ["缺乏耐心", "好辩", "忽视细节", "难以坚持"]
            },
            en: {
                name: "Debater",
                title: "ENTP - Debater",
                description: "ENTPs are innovators and challengers who enjoy exploring new ideas and possibilities. They excel at debate, have quick minds, and are skeptical of tradition and convention. ENTPs are typically smart, curious, enjoy intellectual challenges, but may lack execution.",
                strengths: ["Innovative thinking", "Debate skills", "Adaptable", "Quick thinking"],
                weaknesses: ["Lack of patience", "Argumentative", "Ignoring details", "Difficulty sticking to things"]
            }
        },
        INFJ: {
            zh: {
                name: "提倡者",
                title: "INFJ - 提倡者",
                description: "INFJ是理想主义者，具有强烈的直觉和同理心。他们善于理解他人，追求意义和价值。INFJ通常安静、有洞察力，喜欢帮助他人，但可能过于理想化。",
                strengths: ["洞察力", "同理心", "有远见", "有责任感"],
                weaknesses: ["过于理想化", "敏感", "完美主义", "容易疲惫"]
            },
            en: {
                name: "Advocate",
                title: "INFJ - Advocate",
                description: "INFJs are idealists with strong intuition and empathy. They excel at understanding others, pursuing meaning and value. INFJs are typically quiet, insightful, enjoy helping others, but may be overly idealistic.",
                strengths: ["Insight", "Empathy", "Visionary", "Responsible"],
                weaknesses: ["Overly idealistic", "Sensitive", "Perfectionist", "Easily exhausted"]
            }
        },
        INFP: {
            zh: {
                name: "调停者",
                title: "INFP - 调停者",
                description: "INFP是理想主义者，具有丰富的内心世界和强烈的个人价值观。他们善于理解他人，追求真实和意义。INFP通常安静、敏感，喜欢创造性表达，但可能过于内向。",
                strengths: ["创造力", "同理心", "忠诚", "有理想"],
                weaknesses: ["过于理想化", "敏感", "不切实际", "容易自责"]
            },
            en: {
                name: "Mediator",
                title: "INFP - Mediator",
                description: "INFPs are idealists with rich inner worlds and strong personal values. They excel at understanding others, pursuing authenticity and meaning. INFPs are typically quiet, sensitive, enjoy creative expression, but may be overly introverted.",
                strengths: ["Creativity", "Empathy", "Loyal", "Idealistic"],
                weaknesses: ["Overly idealistic", "Sensitive", "Impractical", "Self-critical"]
            }
        },
        ENFJ: {
            zh: {
                name: "主人公",
                title: "ENFJ - 主人公",
                description: "ENFJ是天生的领导者和激励者，具有强大的同理心和组织能力。他们善于理解他人，激励团队，追求和谐和成长。ENFJ通常热情、有魅力，喜欢帮助他人，但可能忽视自己的需求。",
                strengths: ["领导能力", "同理心", "有魅力", "善于激励"],
                weaknesses: ["过于理想化", "忽视自己", "过于敏感", "控制欲"]
            },
            en: {
                name: "Protagonist",
                title: "ENFJ - Protagonist",
                description: "ENFJs are natural leaders and motivators with strong empathy and organizational skills. They excel at understanding others, motivating teams, pursuing harmony and growth. ENFJs are typically charismatic, enjoy helping others, but may neglect their own needs.",
                strengths: ["Leadership", "Empathy", "Charismatic", "Good at motivating"],
                weaknesses: ["Overly idealistic", "Neglecting self", "Overly sensitive", "Controlling"]
            }
        },
        ENFP: {
            zh: {
                name: "竞选者",
                title: "ENFP - 竞选者",
                description: "ENFP是热情洋溢的创新者，具有丰富的想象力和创造力。他们善于激励他人，追求可能性和意义。ENFP通常外向、好奇，喜欢探索新想法，但可能缺乏专注力。",
                strengths: ["创造力", "热情", "适应力强", "善于激励"],
                weaknesses: ["缺乏专注", "过于理想化", "情绪化", "难以坚持"]
            },
            en: {
                name: "Campaigner",
                title: "ENFP - Campaigner",
                description: "ENFPs are enthusiastic innovators with rich imagination and creativity. They excel at inspiring others, pursuing possibilities and meaning. ENFPs are typically extroverted, curious, enjoy exploring new ideas, but may lack focus.",
                strengths: ["Creativity", "Enthusiasm", "Adaptable", "Good at inspiring"],
                weaknesses: ["Lack of focus", "Overly idealistic", "Emotional", "Difficulty sticking to things"]
            }
        },
        ISTJ: {
            zh: {
                name: "物流师",
                title: "ISTJ - 物流师",
                description: "ISTJ是可靠、有条理的执行者，具有强烈的责任感和组织能力。他们善于制定计划并坚持执行，注重细节和传统。ISTJ通常安静、务实，喜欢按部就班，但可能过于死板。",
                strengths: ["责任感", "有条理", "可靠", "注重细节"],
                weaknesses: ["过于死板", "不善变通", "忽视他人感受", "过于传统"]
            },
            en: {
                name: "Logistician",
                title: "ISTJ - Logistician",
                description: "ISTJs are reliable, organized executors with strong sense of responsibility and organizational skills. They excel at making plans and sticking to execution, paying attention to details and tradition. ISTJs are typically quiet, practical, prefer following routines, but may be too rigid.",
                strengths: ["Responsible", "Organized", "Reliable", "Detail-oriented"],
                weaknesses: ["Too rigid", "Inflexible", "Ignoring others' feelings", "Too traditional"]
            }
        },
        ISFJ: {
            zh: {
                name: "守卫者",
                title: "ISFJ - 守卫者",
                description: "ISFJ是温暖、有保护欲的照顾者，具有强烈的责任感和同理心。他们善于照顾他人，注重细节和传统。ISFJ通常安静、可靠，喜欢帮助他人，但可能忽视自己的需求。",
                strengths: ["有责任心", "有同理心", "注重细节", "忠诚"],
                weaknesses: ["过于自我牺牲", "不善拒绝", "过于传统", "容易疲惫"]
            },
            en: {
                name: "Defender",
                title: "ISFJ - Defender",
                description: "ISFJs are warm, protective caregivers with strong sense of responsibility and empathy. They excel at taking care of others, paying attention to details and tradition. ISFJs are typically quiet, reliable, enjoy helping others, but may neglect their own needs.",
                strengths: ["Responsible", "Empathetic", "Detail-oriented", "Loyal"],
                weaknesses: ["Overly self-sacrificing", "Poor at saying no", "Too traditional", "Easily exhausted"]
            }
        },
        ESTJ: {
            zh: {
                name: "总经理",
                title: "ESTJ - 总经理",
                description: "ESTJ是高效的组织者和管理者，具有强大的领导能力和执行力。他们善于制定规则并确保执行，注重秩序和传统。ESTJ通常自信、果断，喜欢掌控局面，但可能过于专制。",
                strengths: ["领导能力", "组织能力", "执行力强", "有责任感"],
                weaknesses: ["过于专制", "不善变通", "忽视他人感受", "过于传统"]
            },
            en: {
                name: "Executive",
                title: "ESTJ - Executive",
                description: "ESTJs are efficient organizers and managers with strong leadership and execution abilities. They excel at making rules and ensuring execution, paying attention to order and tradition. ESTJs are typically confident, decisive, like to be in control, but may be too authoritarian.",
                strengths: ["Leadership", "Organizational skills", "Strong execution", "Responsible"],
                weaknesses: ["Too authoritarian", "Inflexible", "Ignoring others' feelings", "Too traditional"]
            }
        },
        ESFJ: {
            zh: {
                name: "执政官",
                title: "ESFJ - 执政官",
                description: "ESFJ是热情、有爱心的照顾者，具有强大的同理心和组织能力。他们善于照顾他人，维护和谐，注重传统和秩序。ESFJ通常外向、可靠，喜欢帮助他人，但可能过于在意他人看法。",
                strengths: ["有同理心", "有责任心", "善于社交", "忠诚"],
                weaknesses: ["过于在意他人看法", "不善拒绝", "过于传统", "容易受伤"]
            },
            en: {
                name: "Consul",
                title: "ESFJ - Consul",
                description: "ESFJs are warm, caring caregivers with strong empathy and organizational skills. They excel at taking care of others, maintaining harmony, paying attention to tradition and order. ESFJs are typically extroverted, reliable, enjoy helping others, but may care too much about others' opinions.",
                strengths: ["Empathetic", "Responsible", "Social", "Loyal"],
                weaknesses: ["Too concerned about others' opinions", "Poor at saying no", "Too traditional", "Easily hurt"]
            }
        },
        ISTP: {
            zh: {
                name: "鉴赏家",
                title: "ISTP - 鉴赏家",
                description: "ISTP是灵活的问题解决者，具有强大的分析能力和实践能力。他们善于处理实际问题，喜欢探索事物的运作原理。ISTP通常安静、独立，喜欢动手工作，但可能缺乏耐心。",
                strengths: ["分析能力", "实践能力", "适应力强", "独立"],
                weaknesses: ["缺乏耐心", "不善表达情感", "冒险", "难以承诺"]
            },
            en: {
                name: "Virtuoso",
                title: "ISTP - Virtuoso",
                description: "ISTPs are flexible problem solvers with strong analytical and practical abilities. They excel at handling practical problems, enjoy exploring how things work. ISTPs are typically quiet, independent, enjoy hands-on work, but may lack patience.",
                strengths: ["Analytical skills", "Practical skills", "Adaptable", "Independent"],
                weaknesses: ["Lack of patience", "Poor at expressing emotions", "Risk-taking", "Difficulty committing"]
            }
        },
        ISFP: {
            zh: {
                name: "探险家",
                title: "ISFP - 探险家",
                description: "ISFP是温和、敏感的艺术家，具有丰富的内心世界和强烈的个人价值观。他们善于感受美，追求真实和自由。ISFP通常安静、随和，喜欢创造性表达，但可能过于内向。",
                strengths: ["艺术感", "敏感", "有同理心", "忠诚"],
                weaknesses: ["过于内向", "敏感", "不善规划", "容易自责"]
            },
            en: {
                name: "Adventurer",
                title: "ISFP - Adventurer",
                description: "ISFPs are gentle, sensitive artists with rich inner worlds and strong personal values. They excel at感受 beauty, pursuing authenticity and freedom. ISFPs are typically quiet, easy-going, enjoy creative expression, but may be overly introverted.",
                strengths: ["Artistic sense", "Sensitive", "Empathetic", "Loyal"],
                weaknesses: ["Overly introverted", "Sensitive", "Poor at planning", "Self-critical"]
            }
        },
        ESTP: {
            zh: {
                name: "企业家",
                title: "ESTP - 企业家",
                description: "ESTP是精力充沛的行动者，具有强大的适应能力和实践能力。他们善于处理危机，喜欢冒险和刺激。ESTP通常外向、务实，喜欢即时行动，但可能缺乏耐心。",
                strengths: ["适应能力", "实践能力", "果断", "精力充沛"],
                weaknesses: ["缺乏耐心", "冒险", "忽视规则", "难以坚持"]
            },
            en: {
                name: "Entrepreneur",
                title: "ESTP - Entrepreneur",
                description: "ESTPs are energetic doers with strong adaptability and practical abilities. They excel at handling crises, enjoy adventure and excitement. ESTPs are typically extroverted, practical, like immediate action, but may lack patience.",
                strengths: ["Adaptability", "Practical skills", "Decisive", "Energetic"],
                weaknesses: ["Lack of patience", "Risk-taking", "Ignoring rules", "Difficulty sticking to things"]
            }
        },
        ESFP: {
            zh: {
                name: "表演者",
                title: "ESFP - 表演者",
                description: "ESFP是热情洋溢的表演者，具有强大的感染力和社交能力。他们善于享受生活，喜欢成为焦点。ESFP通常外向、乐观，喜欢即时快乐，但可能缺乏长远规划。",
                strengths: ["感染力", "社交能力", "乐观", "热情"],
                weaknesses: ["缺乏规划", "注意力分散", "冲动", "难以坚持"]
            },
            en: {
                name: "Entertainer",
                title: "ESFP - Entertainer",
                description: "ESFPs are enthusiastic performers with strong charisma and social skills. They excel at enjoying life, like being the center of attention. ESFPs are typically extroverted, optimistic, enjoy immediate pleasure, but may lack long-term planning.",
                strengths: ["Charisma", "Social skills", "Optimistic", "Enthusiastic"],
                weaknesses: ["Lack of planning", "Easily distracted", "Impulsive", "Difficulty sticking to things"]
            }
        }
    },

    // 结果计算函数
    calculate: function(answers, questions) {
        let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

        questions.forEach((q, index) => {
            if (answers[index] !== -1) {
                const dimension = q.dimension;
                const score = q.scores[answers[index]];

                if (dimension === 'EI') {
                    if (score === 1) scores.E++;
                    else scores.I++;
                } else if (dimension === 'SN') {
                    if (score === 1) scores.N++;
                    else scores.S++;
                } else if (dimension === 'TF') {
                    if (score === 1) scores.T++;
                    else scores.F++;
                } else if (dimension === 'JP') {
                    if (score === 1) scores.J++;
                    else scores.P++;
                }
            }
        });

        // Calculate percentages
        const eiTotal = scores.E + scores.I;
        const snTotal = scores.S + scores.N;
        const tfTotal = scores.T + scores.F;
        const jpTotal = scores.J + scores.P;

        const percentages = {
            E: eiTotal > 0 ? Math.round((scores.E / eiTotal) * 100) : 50,
            I: eiTotal > 0 ? Math.round((scores.I / eiTotal) * 100) : 50,
            S: snTotal > 0 ? Math.round((scores.S / snTotal) * 100) : 50,
            N: snTotal > 0 ? Math.round((scores.N / snTotal) * 100) : 50,
            T: tfTotal > 0 ? Math.round((scores.T / tfTotal) * 100) : 50,
            F: tfTotal > 0 ? Math.round((scores.F / tfTotal) * 100) : 50,
            J: jpTotal > 0 ? Math.round((scores.J / jpTotal) * 100) : 50,
            P: jpTotal > 0 ? Math.round((scores.P / jpTotal) * 100) : 50
        };

        // Determine type
        const type = (scores.E >= scores.I ? 'E' : 'I') +
                     (scores.S >= scores.N ? 'S' : 'N') +
                     (scores.T >= scores.F ? 'T' : 'F') +
                     (scores.J >= scores.P ? 'J' : 'P');

        return {
            type: type,
            scores: scores,
            percentages: percentages,
            dimensions: [
                { name: 'EI', left: 'E', right: 'I', leftScore: percentages.E, rightScore: percentages.I },
                { name: 'SN', left: 'S', right: 'N', leftScore: percentages.S, rightScore: percentages.N },
                { name: 'TF', left: 'T', right: 'F', leftScore: percentages.T, rightScore: percentages.F },
                { name: 'JP', left: 'J', right: 'P', leftScore: percentages.J, rightScore: percentages.P }
            ]
        };
    },

    // 人格叙事数据
    narrative: {
        INTJ: {
            zh: { archetype: '建筑师', hero: '你是「建筑师」', subtitle: '你习惯用结构化思维理解世界，在复杂中寻找秩序，在安静中积蓄力量。', inRelationship: '你在关系中追求深度而非广度。你倾向于与少数人建立有意义的连接，而不是维持大量浅层社交。你可能不擅长表达情感，但会用行动默默关心在乎的人。', underPressure: '在压力下，你会退回到自己的内心世界，用逻辑分析来处理情绪。你可能会变得更加封闭，但也正是在这种时候，你的战略思维最为清晰。', atWork: '你天生擅长制定长期计划和解决复杂问题。你追求效率，不喜欢重复性工作，更愿意把精力投入到有挑战性的项目中。', hiddenStrength: '你的隐藏优势是「预见力」——你能在别人还没意识到问题时，就已经想好了三套解决方案。' },
            en: { archetype: 'Architect', hero: 'You are "The Architect"', subtitle: 'You understand the world through structured thinking, finding order in complexity and gathering strength in solitude.', inRelationship: 'You seek depth over breadth in relationships. You prefer meaningful connections with a few rather than shallow socializing with many. You may struggle to express emotions verbally, but show care through actions.', underPressure: 'Under stress, you retreat inward and process emotions through logical analysis. You may become more withdrawn, but this is also when your strategic thinking is sharpest.', atWork: 'You naturally excel at long-term planning and solving complex problems. You value efficiency, dislike repetitive work, and prefer investing energy in challenging projects.', hiddenStrength: 'Your hidden strength is foresight — you\'ve already planned three solutions before others even realize there\'s a problem.' }
        },
        INTP: {
            zh: { archetype: '逻辑学家', hero: '你是「逻辑学家」', subtitle: '你是一个安静的思考者，对世界的运行规律充满好奇，总是在探索"为什么"。', inRelationship: '你需要大量的独处时间来充电。在关系中，你更看重智识上的共鸣，而不是情感上的依赖。', underPressure: '压力下你会陷入过度分析，反复思考各种可能性。试着接受"足够好"而不是追求完美。', atWork: '你擅长抽象思维和理论研究，适合需要深度思考的工作。你在创新和解决棘手问题时最为出色。', hiddenStrength: '你的隐藏优势是「原创思维」——你总能从独特的角度看问题，提出别人想不到的解决方案。' },
            en: { archetype: 'Logician', hero: 'You are "The Logician"', subtitle: 'You are a quiet thinker, endlessly curious about how the world works, always exploring the "why."', inRelationship: 'You need significant alone time to recharge. In relationships, you value intellectual resonance over emotional dependency.', underPressure: 'Under stress, you overthink and analyze every possibility. Try accepting "good enough" instead of pursuing perfection.', atWork: 'You excel at abstract thinking and theoretical research, thriving in roles that demand deep thought. You shine brightest when innovating or tackling thorny problems.', hiddenStrength: 'Your hidden strength is original thinking — you always find unique angles that others miss.' }
        },
        ENTJ: {
            zh: { archetype: '指挥官', hero: '你是「指挥官」', subtitle: '你是天生的领导者，善于制定战略、组织资源，带领团队走向目标。', inRelationship: '你在关系中倾向于主导，喜欢规划未来。你需要学会给伴侣留出空间，而不是试图控制一切。', underPressure: '压力下你会变得更加果断和强势，可能会忽视他人的感受。记得停下来倾听。', atWork: '你天生擅长领导和决策，能快速识别问题并制定解决方案。你在管理岗位和创业环境中最为出色。', hiddenStrength: '你的隐藏优势是「决断力」——当别人还在犹豫时，你已经做出了决定并开始行动。' },
            en: { archetype: 'Commander', hero: 'You are "The Commander"', subtitle: 'You are a natural leader, skilled at strategy, organizing resources, and guiding teams toward goals.', inRelationship: 'You tend to take the lead in relationships and enjoy planning the future. Remember to give your partner space instead of trying to control everything.', underPressure: 'Under stress, you become more decisive and assertive, potentially overlooking others\' feelings. Take time to listen.', atWork: 'You naturally excel at leadership and decision-making, quickly identifying problems and crafting solutions. You thrive in management and entrepreneurial environments.', hiddenStrength: 'Your hidden strength is decisiveness — while others hesitate, you\'ve already made the call and started moving.' }
        },
        ENTP: {
            zh: { archetype: '辩论家', hero: '你是「辩论家」', subtitle: '你是一个充满创意的思想家，喜欢挑战传统观念，在辩论中寻找真理。', inRelationship: '你喜欢智力上的碰撞和有趣的对话。你可能会对例行公事感到无聊，需要不断的新鲜感来保持兴趣。', underPressure: '压力下你可能会变得焦躁不安，用更多的想法和项目来逃避问题。试着专注于一件事。', atWork: '你擅长创新和解决复杂问题，适合需要创造力和灵活性的工作。你在创业和咨询领域表现出色。', hiddenStrength: '你的隐藏优势是「适应力」——你能在混乱中找到机会，把挑战变成创新的跳板。' },
            en: { archetype: 'Debater', hero: 'You are "The Debater"', subtitle: 'You are a creative thinker who loves challenging conventional ideas and seeking truth through debate.', inRelationship: 'You enjoy intellectual sparring and stimulating conversations. You may get bored with routine and need novelty to stay engaged.', underPressure: 'Under stress, you may become restless, burying problems under more ideas and projects. Try focusing on one thing at a time.', atWork: 'You excel at innovation and complex problem-solving, thriving in roles that demand creativity and flexibility. You shine in entrepreneurship and consulting.', hiddenStrength: 'Your hidden strength is adaptability — you find opportunities in chaos and turn challenges into springboards for innovation.' }
        },
        INFJ: {
            zh: { archetype: '提倡者', hero: '你是「提倡者」', subtitle: '你是一个理想主义者，有着强烈的直觉和同理心，总是在寻找人生的意义。', inRelationship: '你在关系中追求深度的灵魂连接。你善于理解他人的情感，但也需要学会保护自己的能量。', underPressure: '压力下你可能会变得过度敏感，把别人的问题当成自己的。记得设定健康的边界。', atWork: '你擅长洞察人心和创造有意义的改变。你在咨询、写作和社会工作中最为出色。', hiddenStrength: '你的隐藏优势是「洞察力」——你能看穿表面，理解他人内心深处的需求和动机。' },
            en: { archetype: 'Advocate', hero: 'You are "The Advocate"', subtitle: 'You are an idealist with strong intuition and empathy, always searching for meaning in life.', inRelationship: 'You seek deep soul connections in relationships. You\'re excellent at understanding others\' emotions, but need to protect your own energy.', underPressure: 'Under stress, you may become overly sensitive, absorbing others\' problems as your own. Remember to set healthy boundaries.', atWork: 'You excel at understanding people and creating meaningful change. You thrive in counseling, writing, and social work.', hiddenStrength: 'Your hidden strength is insight — you see through surfaces to understand people\'s deepest needs and motivations.' }
        },
        INFP: {
            zh: { archetype: '调停者', hero: '你是「调停者」', subtitle: '你是一个安静的理想主义者，内心有着丰富的想象力和对美好世界的向往。', inRelationship: '你在关系中追求真实和深度。你善于倾听和理解，但可能会过于理想化伴侣。', underPressure: '压力下你可能会退缩到幻想世界中，逃避现实。试着把你的创意能量用在解决问题上。', atWork: '你擅长创造性工作和帮助他人。你在写作、艺术和心理咨询领域最为出色。', hiddenStrength: '你的隐藏优势是「共情力」——你能感受到他人感受不到的细微情感，并用文字或艺术表达出来。' },
            en: { archetype: 'Mediator', hero: 'You are "The Mediator"', subtitle: 'You are a quiet idealist with a rich imagination and a longing for a better world.', inRelationship: 'You seek authenticity and depth in relationships. You\'re great at listening and understanding, but may idealize your partner.', underPressure: 'Under stress, you may retreat into fantasy to escape reality. Try channeling your creative energy into problem-solving.', atWork: 'You excel at creative work and helping others. You thrive in writing, art, and counseling.', hiddenStrength: 'Your hidden strength is empathy — you sense subtle emotions that others miss and express them through words or art.' }
        },
        ENFJ: {
            zh: { archetype: '主人公', hero: '你是「主人公」', subtitle: '你是一个充满魅力的领导者，善于激励他人，总是在帮助别人成长。', inRelationship: '你在关系中倾向于照顾他人，有时会忽略自己的需求。记得也要关心自己。', underPressure: '压力下你可能会过度承担责任，试图解决所有人的问题。学会说"不"。', atWork: '你擅长团队建设和人才培养。你在教育、人力资源和公益领域最为出色。', hiddenStrength: '你的隐藏优势是「感染力」——你能激发他人的潜力，让身边的人变得更好。' },
            en: { archetype: 'Protagonist', hero: 'You are "The Protagonist"', subtitle: 'You are a charismatic leader who inspires others and always helps people grow.', inRelationship: 'You tend to care for others in relationships, sometimes neglecting your own needs. Remember to take care of yourself too.', underPressure: 'Under stress, you may overcommit, trying to solve everyone\'s problems. Learn to say no.', atWork: 'You excel at team building and developing people. You thrive in education, HR, and nonprofit sectors.', hiddenStrength: 'Your hidden strength is influence — you unlock others\' potential and make everyone around you better.' }
        },
        ENFP: {
            zh: { archetype: '竞选者', hero: '你是「竞选者」', subtitle: '你是一个充满热情的自由灵魂，善于发现生活中的可能性，总是在寻找新的灵感。', inRelationship: '你在关系中追求自由和深度的平衡。你善于营造浪漫和惊喜，但可能会对承诺感到恐惧。', underPressure: '压力下你可能会变得焦虑和分散注意力。试着把精力集中在最重要的事情上。', atWork: '你擅长创新和激励他人。你在创意行业、营销和公关领域最为出色。', hiddenStrength: '你的隐藏优势是「可能性」——你能在平凡中看到不凡，把枯燥变得有趣。' },
            en: { archetype: 'Campaigner', hero: 'You are "The Campaigner"', subtitle: 'You are an enthusiastic free spirit who sees possibilities everywhere and always seeks new inspiration.', inRelationship: 'You seek balance between freedom and depth in relationships. You\'re great at creating romance and surprises, but may fear commitment.', underPressure: 'Under stress, you may become anxious and scattered. Try focusing your energy on what matters most.', atWork: 'You excel at innovation and inspiring others. You thrive in creative industries, marketing, and PR.', hiddenStrength: 'Your hidden strength is possibility — you see the extraordinary in the ordinary and make the dull interesting.' }
        },
        ISTJ: {
            zh: { archetype: '物流师', hero: '你是「物流师」', subtitle: '你是一个可靠务实的人，重视传统和秩序，用实际行动来表达关心。', inRelationship: '你在关系中忠诚可靠，用行动而非言语表达爱意。你可能不善言辞，但会默默守护在乎的人。', underPressure: '压力下你可能会变得更加固执和保守。试着接受变化，灵活应对。', atWork: '你擅长执行和管理细节。你在财务、法律和行政管理领域最为出色。', hiddenStrength: '你的隐藏优势是「可靠性」——当别人放弃时，你依然坚守承诺，把事情做到底。' },
            en: { archetype: 'Logistician', hero: 'You are "The Logistician"', subtitle: 'You are a reliable and practical person who values tradition and order, showing care through actions.', inRelationship: 'You are loyal and dependable in relationships, expressing love through actions rather than words. You may not be eloquent, but you quietly protect those you care about.', underPressure: 'Under stress, you may become more rigid and resistant to change. Try embracing flexibility.', atWork: 'You excel at execution and managing details. You thrive in finance, law, and administration.', hiddenStrength: 'Your hidden strength is reliability — when others give up, you keep your promises and see things through.' }
        },
        ISFJ: {
            zh: { archetype: '守卫者', hero: '你是「守卫者」', subtitle: '你是一个温暖而细心的人，总是在默默照顾身边的人，是团队中最可靠的后盾。', inRelationship: '你在关系中付出很多，善于察觉他人的需求。记得也要表达自己的需求，不要总是默默承受。', underPressure: '压力下你可能会变得过度焦虑，担心自己做得不够好。学会接受自己的不完美。', atWork: '你擅长服务和支持性工作。你在医疗、教育和客户服务领域最为出色。', hiddenStrength: '你的隐藏优势是「守护力」——你总是在别人需要时出现，用细致入微的关怀温暖每一个人。' },
            en: { archetype: 'Defender', hero: 'You are "The Defender"', subtitle: 'You are a warm and attentive person who quietly cares for others, the most reliable support in any team.', inRelationship: 'You give a lot in relationships and are attuned to others\' needs. Remember to express your own needs too — don\'t just silently endure.', underPressure: 'Under stress, you may become overly anxious, worrying you\'re not doing enough. Learn to accept your imperfections.', atWork: 'You excel at service and support roles. You thrive in healthcare, education, and customer service.', hiddenStrength: 'Your hidden strength is protection — you appear exactly when others need you, warming everyone with your thoughtful care.' }
        },
        ESTJ: {
            zh: { archetype: '总经理', hero: '你是「总经理」', subtitle: '你是一个果断务实的组织者，善于建立秩序和推动执行，是团队的中流砥柱。', inRelationship: '你在关系中重视稳定和责任。你可能会过于关注规则和效率，而忽略了情感的表达。', underPressure: '压力下你可能会变得更加控制和独断。试着倾听他人的意见，不要一个人扛所有事。', atWork: '你擅长管理和组织。你在企业管理和政府机构中最为出色。', hiddenStrength: '你的隐藏优势是「执行力」——你能把模糊的想法变成具体的行动，把混乱变成秩序。' },
            en: { archetype: 'Executive', hero: 'You are "The Executive"', subtitle: 'You are a decisive and practical organizer, skilled at building order and driving execution — the backbone of any team.', inRelationship: 'You value stability and responsibility in relationships. You may focus too much on rules and efficiency, overlooking emotional expression.', underPressure: 'Under stress, you may become more controlling and authoritarian. Try listening to others\' input.', atWork: 'You excel at management and organization. You thrive in corporate management and government.', hiddenStrength: 'Your hidden strength is execution — you turn vague ideas into concrete actions and transform chaos into order.' }
        },
        ESFJ: {
            zh: { archetype: '执政官', hero: '你是「执政官」', subtitle: '你是一个热情而有责任心的人，善于维护人际关系，是团队中的粘合剂。', inRelationship: '你在关系中付出很多，善于营造温暖的氛围。你可能会过于在意他人的评价，需要学会为自己而活。', underPressure: '压力下你可能会变得焦虑和敏感，担心被拒绝。记住，你的价值不取决于他人的认可。', atWork: '你擅长团队协作和客户服务。你在教育、医疗和社区服务领域最为出色。', hiddenStrength: '你的隐藏优势是「凝聚力」——你能把一群人变成一个团队，让每个人都感到被重视。' },
            en: { archetype: 'Consul', hero: 'You are "The Consul"', subtitle: 'You are a warm and responsible person who excels at maintaining relationships — the glue that holds teams together.', inRelationship: 'You give generously in relationships and create warm atmospheres. You may worry too much about others\' opinions — learn to live for yourself.', underPressure: 'Under stress, you may become anxious and sensitive, fearing rejection. Remember, your worth doesn\'t depend on others\' approval.', atWork: 'You excel at teamwork and customer service. You thrive in education, healthcare, and community service.', hiddenStrength: 'Your hidden strength is cohesion — you turn a group of people into a team where everyone feels valued.' }
        },
        ISTP: {
            zh: { archetype: '鉴赏家', hero: '你是「鉴赏家」', subtitle: '你是一个冷静的观察者，善于分析和解决实际问题，享受用双手创造的过程。', inRelationship: '你在关系中需要大量的个人空间。你可能不善于表达情感，但会用实际行动来表达关心。', underPressure: '压力下你可能会变得更加沉默和疏离。试着与信任的人分享你的想法。', atWork: '你擅长解决技术问题和手工操作。你在工程、IT和手工艺领域最为出色。', hiddenStrength: '你的隐藏优势是「应变力」——你能在紧急情况下保持冷静，快速找到解决方案。' },
            en: { archetype: 'Virtuoso', hero: 'You are "The Virtuoso"', subtitle: 'You are a calm observer who excels at analyzing and solving practical problems, enjoying the process of creating with your hands.', inRelationship: 'You need plenty of personal space in relationships. You may not be great at expressing emotions, but show care through actions.', underPressure: 'Under stress, you may become more silent and withdrawn. Try sharing your thoughts with someone you trust.', atWork: 'You excel at technical problem-solving and hands-on work. You thrive in engineering, IT, and craftsmanship.', hiddenStrength: 'Your hidden strength is composure — you stay calm in emergencies and quickly find solutions.' }
        },
        ISFP: {
            zh: { archetype: '探险家', hero: '你是「探险家」', subtitle: '你是一个温柔而自由的灵魂，善于感受生活中的美好，用自己独特的方式表达内心。', inRelationship: '你在关系中追求自由和真实。你善于用行动表达爱意，但需要伴侣尊重你的个人空间。', underPressure: '压力下你可能会变得退缩和回避冲突。试着面对问题，而不是逃避。', atWork: '你擅长创造性工作和与自然相关的职业。你在艺术、设计和环保领域最为出色。', hiddenStrength: '你的隐藏优势是「感受力」——你能感受到别人忽略的细微之美，并用自己的方式呈现给世界。' },
            en: { archetype: 'Adventurer', hero: 'You are "The Adventurer"', subtitle: 'You are a gentle free spirit who senses beauty in life and expresses your inner world in your own unique way.', inRelationship: 'You seek freedom and authenticity in relationships. You express love through actions but need a partner who respects your personal space.', underPressure: 'Under stress, you may withdraw and avoid conflict. Try facing problems instead of running from them.', atWork: 'You excel at creative work and nature-related careers. You thrive in art, design, and environmental fields.', hiddenStrength: 'Your hidden strength is sensitivity — you notice subtle beauty that others overlook and share it with the world in your own way.' }
        },
        ESTP: {
            zh: { archetype: '企业家', hero: '你是「企业家」', subtitle: '你是一个充满活力的行动派，善于抓住机会，在混乱中找到乐趣。', inRelationship: '你在关系中追求刺激和新鲜感。你可能会对长期承诺感到不安，需要学会享受稳定的美好。', underPressure: '压力下你可能会变得更加冲动和冒险。试着停下来思考后果。', atWork: '你擅长销售和创业。你在商业、体育和急救领域最为出色。', hiddenStrength: '你的隐藏优势是「行动力」——当别人还在计划时，你已经取得了成果。' },
            en: { archetype: 'Entrepreneur', hero: 'You are "The Entrepreneur"', subtitle: 'You are a dynamic doer who seizes opportunities and finds excitement in chaos.', inRelationship: 'You seek excitement and novelty in relationships. You may feel不安 about long-term commitments — learn to appreciate the beauty of stability.', underPressure: 'Under stress, you may become more impulsive and risk-taking. Try pausing to consider consequences.', atWork: 'You excel at sales and entrepreneurship. You thrive in business, sports, and emergency services.', hiddenStrength: 'Your hidden strength is action — while others are still planning, you\'ve already achieved results.' }
        },
        ESFP: {
            zh: { archetype: '表演者', hero: '你是「表演者」', subtitle: '你是一个热情洋溢的社交达人，善于感染他人，让每刻都充满乐趣。', inRelationship: '你在关系中充满热情和浪漫。你善于营造快乐的氛围，但可能需要学会面对严肃的话题。', underPressure: '压力下你可能会用社交和娱乐来逃避问题。试着面对内心的感受。', atWork: '你擅长与人打交道和表演艺术。你在娱乐、销售和服务行业最为出色。', hiddenStrength: '你的隐藏优势是「感染力」——你能用你的热情点亮任何一个房间，让身边的人感到快乐。' },
            en: { archetype: 'Entertainer', hero: 'You are "The Entertainer"', subtitle: 'You are an enthusiastic social butterfly who infects others with joy and makes every moment fun.', inRelationship: 'You are passionate and romantic in relationships. You create happy atmospheres but may need to learn how to handle serious conversations.', underPressure: 'Under stress, you may use socializing and entertainment to escape. Try facing your inner feelings.', atWork: 'You excel at working with people and performing arts. You thrive in entertainment, sales, and hospitality.', hiddenStrength: 'Your hidden strength is contagious energy — you light up any room and make everyone around you happier.' }
        }
    },

    // UI 文本
    uiText: {
        zh: {
            title: "MBTI 人格测试",
            subtitle: "了解你的16型人格",
            startBtn: "开始测试",
            nextBtn: "下一题",
            prevBtn: "上一题",
            submitBtn: "查看结果",
            restartBtn: "重新测试",
            shareBtn: "分享结果",
            homeBtn: "返回首页",
            progress: "进度",
            question: "问题",
            of: "/",
            resultTitle: "测试结果",
            disclaimer: "本测试仅供娱乐参考，不具有科学权威性。人格类型是复杂的个人特质，如需专业帮助，请咨询心理咨询师。",
            loading: "正在分析你的答案...",
            yourType: "你的人格类型",
            dimensions: "维度分析"
        },
        en: {
            title: "MBTI Personality Test",
            subtitle: "Discover Your 16 Personality Type",
            startBtn: "Start Test",
            nextBtn: "Next",
            prevBtn: "Previous",
            submitBtn: "See Results",
            restartBtn: "Retake Test",
            shareBtn: "Share Results",
            homeBtn: "Home",
            progress: "Progress",
            question: "Question",
            of: "of",
            resultTitle: "Test Results",
            disclaimer: "This test is for entertainment purposes only and is not scientifically authoritative. Personality type is a complex personal trait. For professional help, please consult a psychologist.",
            loading: "Analyzing your answers...",
            yourType: "Your Personality Type",
            dimensions: "Dimension Analysis"
        }
    }
};

// Export

export default MBTI_TEST;
