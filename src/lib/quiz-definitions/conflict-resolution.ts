import legacy from "../tests/conflict-resolution";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { ScoreBand } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const scoreBands: ScoreBand[] = [
  {
    id: "needs-support",
    min: 20,
    max: 25,
    title: { zh: "冲突中需要更多支持", en: "More Support May Help" },
    description: {
      zh: "面对分歧时，你可能更容易回避、对抗或被情绪带走。先练习一项微小技能，例如在回应前复述对方刚才说的重点。",
      en: "During disagreement, you may be more likely to avoid, confront, or get carried away by emotion. Start with one small skill, such as reflecting the other person's point before responding.",
    },
    suggestions: {
      zh: ["用“我感到……”描述自己的体验", "情绪升高时先暂停，再决定是否继续谈"],
      en: ["Use an “I feel…” statement to describe your experience", "Pause when emotion rises before deciding whether to continue"],
    },
  },
  {
    id: "developing",
    min: 26,
    max: 50,
    title: { zh: "冲突处理正在形成", en: "Conflict Skills Developing" },
    description: {
      zh: "你在一些分歧中能找到处理方式，但复杂或高强度的冲突仍可能让你失去节奏。把注意力放回需求、事实和下一步。",
      en: "You can navigate some disagreements, though complex or intense conflicts may still disrupt your rhythm. Bring attention back to needs, facts, and the next step.",
    },
  },
  {
    id: "constructive",
    min: 51,
    max: 75,
    title: { zh: "冲突处理较有建设性", en: "Constructive Conflict Skills" },
    description: {
      zh: "你通常能倾听、表达并寻找可行的共同方案。继续练习在坚持立场与保持关系之间找到合适的力度。",
      en: "You can usually listen, express yourself, and look for workable shared solutions. Keep practicing the right balance between holding your position and preserving the relationship.",
    },
  },
  {
    id: "well-resourced",
    min: 76,
    max: 100,
    title: { zh: "冲突中拥有较多可用资源", en: "Strong Conflict Resources" },
    description: {
      zh: "你在冲突中较能保持冷静、看见多方需要，并在事后修复关系。也记得不必独自承担每一次解决冲突的责任。",
      en: "You tend to stay calm, notice multiple needs, and repair relationships after conflict. Remember that you do not have to carry responsibility for resolving every disagreement alone.",
    },
  },
];

const definition = defineQuiz({
  id: "conflict-resolution",
  kind: "score",
  category: "relationship",
  duration: "4-7",
  title: { zh: "冲突处理方式测试", en: "Conflict Response Test" },
  description: {
    zh: "回看你在冲突中的倾听、表达、调节和修复习惯。",
    en: "Reflect on how you listen, express yourself, regulate emotion, and repair relationships during conflict.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    scoreBands,
    scoreRange: { min: 20, max: 100 },
  },
  calculate: (answers) => {
    const points = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer]?.score ?? 0), 0);
    return {
      score: answers.length ? Math.round((points / (answers.length * 5)) * 100) : 0,
    };
  },
});

export default definition;
