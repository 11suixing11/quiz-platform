/**
 * MBTI 人格测试题库
 * 16 Personalities Test
 */

const MBTI_TEST = {
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
                en: ["Whose观点 is more correct", "Whether others' feelings are hurt"]
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
                en: ["Stick to decisions once made", "Stay open and adjust随时"]
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
                en: ["Stay objective and neutral", "Express personal立场"]
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
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MBTI_TEST;
}
