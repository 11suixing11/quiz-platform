"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CircleHelp, Compass, Sparkles, Waves } from "lucide-react";

import { getNextCoreTests } from "@/lib/core-tests";
import type { QuizCatalogEntry } from "@/core/quiz";
import type { DimensionData, Lang, NarrativeResult, QuizResult, TypeData } from "@/lib/types";

interface ReflectionGuideProps {
  testId: string;
  entry: Pick<QuizCatalogEntry, "category">;
  pattern: "type" | "dimensions" | "score";
  result: QuizResult;
  narrative?: NarrativeResult;
  typeData?: TypeData;
  dimensions?: Record<string, DimensionData>;
  accentColor: string;
  lang: Lang;
}

const categoryCopy: Record<string, {
  impactZh: string;
  impactEn: string;
  questionZh: string;
  questionEn: string;
  actionZh: string;
  actionEn: string;
}> = {
  personality: {
    impactZh: "这种倾向会影响你如何做决定、恢复能量，以及在熟悉与陌生环境里展现自己。它不是限制，而是你更常走的一条路。",
    impactEn: "This tendency can shape how you decide, recharge, and show up in familiar or unfamiliar settings. It is a familiar route, not a limit.",
    questionZh: "最近一次你觉得“这很像我”的时刻，发生了什么？",
    questionEn: "When did you most recently think, “this is very me,” and what was happening?",
    actionZh: "接下来一周，留意一次你顺着惯性行动的瞬间，再试一次不同的小选择。",
    actionEn: "This week, notice one moment when you act on autopilot, then try one small alternative.",
  },
  emotion: {
    impactZh: "这个模式可能出现在情绪升高、需要表达感受，或你试图让自己恢复平静的时候。先识别，往往比立刻改变更有用。",
    impactEn: "This pattern may appear when emotions rise, when you need to express yourself, or when you try to settle. Recognition often helps before change.",
    questionZh: "当这种感受出现时，你通常最先注意到身体、想法，还是行为？",
    questionEn: "When this feeling appears, what do you notice first: your body, thoughts, or behavior?",
    actionZh: "给下一次明显情绪起一个更准确的名字，并记录它出现前的一件小事。",
    actionEn: "Give your next strong emotion a precise name and note one small thing that happened before it.",
  },
  mental: {
    impactZh: "它可能影响你在压力下的恢复速度、注意力和自我对话。分数不是能力判定，而是此刻可用资源的一张快照。",
    impactEn: "It may shape recovery, focus, and self-talk under pressure. The score is a snapshot of available resources, not a verdict on ability.",
    questionZh: "最近哪些情境最消耗你？又有什么让你恢复得比预想更快？",
    questionEn: "What has drained you most lately, and what helped you recover faster than expected?",
    actionZh: "选一个最容易执行的恢复动作，把它缩小到十分钟以内。",
    actionEn: "Choose one restorative action and make it small enough to do in under ten minutes.",
  },
  relationship: {
    impactZh: "这种模式可能在靠近、冲突、表达需要或设立边界时出现。不同关系会触发你不同的一面，因此它不是固定剧本。",
    impactEn: "This pattern may appear around closeness, conflict, asking for needs, or setting boundaries. Different relationships can bring out different parts of you.",
    questionZh: "在重要关系里，你最希望对方理解、却最少直接说出口的是什么？",
    questionEn: "In an important relationship, what do you most want understood but least often say directly?",
    actionZh: "把一个含蓄期待改写成一句具体、可回应的表达。",
    actionEn: "Turn one unspoken expectation into a specific request the other person can respond to.",
  },
  career: {
    impactZh: "它可能影响你对任务、协作、成就感和工作环境的偏好。真正合适的选择，通常来自价值观与日常行为的共同验证。",
    impactEn: "It may shape your preferences for tasks, collaboration, achievement, and work environments. Fit is best tested through values and daily behavior together.",
    questionZh: "哪类工作即使很累，完成后仍会让你觉得值得？",
    questionEn: "What kind of work still feels worthwhile even when it is tiring?",
    actionZh: "从结果里选一个重要偏好，在本周的安排里为它腾出一个具体位置。",
    actionEn: "Pick one important preference from the result and give it a concrete place in this week’s schedule.",
  },
  lifestyle: {
    impactZh: "这个结果可能反映你的日常安排与真实价值之间有多一致。它更适合帮助你发现摩擦点，而不是评价生活是否“正确”。",
    impactEn: "This result may reflect how closely daily life matches your values. Use it to spot friction, not to judge whether your life is ‘right.’",
    questionZh: "如果只调整一个日常习惯，什么最可能让生活更像你想要的样子？",
    questionEn: "If you changed one daily habit, which would make life feel more like the one you want?",
    actionZh: "把那个改变缩小成今天就能完成的一步。",
    actionEn: "Shrink that change into one step you can complete today.",
  },
};

const fallbackCopy = categoryCopy.personality;

function getPatternText(
  pattern: ReflectionGuideProps["pattern"],
  result: QuizResult,
  dimensions: Record<string, DimensionData> | undefined,
  lang: Lang,
) {
  if (pattern === "dimensions" && result.percentages) {
    const top = Object.entries(result.percentages).sort((a, b) => b[1] - a[1]).slice(0, 2);
    const labels = top.map(([key]) => {
      const dimension = dimensions?.[key];
      return lang === "zh" ? dimension?.zh ?? key : dimension?.name ?? key;
    });
    if (labels.length) {
      return lang === "zh"
        ? `你的画像不是单一标签。此刻更突出的方向是${labels.join("、")}，其他维度则构成了它的背景。`
        : `Your profile is not a single label. ${labels.join(" and ")} stand out now, while the other dimensions form the context.`;
    }
  }
  if (pattern === "score") {
    return lang === "zh"
      ? "这个分数是你当下状态的一次快照。比起追求高低，更值得关注的是哪些题让你停顿，以及最近发生了什么。"
      : "This score is a snapshot of your current state. More than high or low, notice which questions made you pause and what has been happening lately.";
  }
  return lang === "zh"
    ? "这个类型描述的是你更常使用的偏好组合，不是固定身份。情境、经验和关系都会让你展现不同的一面。"
    : "This type describes a combination of preferences you use often, not a fixed identity. Context, experience, and relationships can bring out other sides.";
}

export function ReflectionGuide({
  testId,
  entry,
  pattern,
  result,
  narrative,
  typeData,
  dimensions,
  accentColor,
  lang,
}: ReflectionGuideProps) {
  const shouldReduceMotion = useReducedMotion();
  const copy = categoryCopy[entry.category] ?? fallbackCopy;
  const impact = narrative?.inRelationship ?? narrative?.underPressure ?? narrative?.atWork ?? typeData?.inRelationship ?? typeData?.underPressure ?? typeData?.atWork;
  const recommendations = getNextCoreTests(testId, 3);
  const blocks = [
    {
      icon: Waves,
      title: lang === "zh" ? "看懂这个模式" : "Understand the pattern",
      text: getPatternText(pattern, result, dimensions, lang),
    },
    {
      icon: Sparkles,
      title: lang === "zh" ? "它可能带来的影响" : "How it may show up",
      text: impact ?? (lang === "zh" ? copy.impactZh : copy.impactEn),
    },
    {
      icon: CircleHelp,
      title: lang === "zh" ? "留给自己的问题" : "A question to keep",
      text: lang === "zh" ? copy.questionZh : copy.questionEn,
    },
    {
      icon: Compass,
      title: lang === "zh" ? "一个小小的下一步" : "One small next step",
      text: lang === "zh" ? copy.actionZh : copy.actionEn,
    },
  ];

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.55, duration: shouldReduceMotion ? 0 : 0.5 }}
      className="w-full overflow-hidden rounded-2xl border border-border/60 bg-white dark:bg-[#141414]"
    >
      <div className="px-5 py-6 sm:px-7">
        <h2 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
          {lang === "zh" ? "把结果带回真实生活" : "Bring the result into real life"}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {lang === "zh"
            ? "不急着给自己下结论。先把它当作一个观察角度，看看哪些部分真的发生在你的生活里。"
            : "There is no need to reach a verdict. Treat this as one lens and notice what is actually true in your life."}
        </p>
      </div>

      <div className="border-t border-border/60">
        {blocks.map(({ icon: Icon, title, text }) => (
          <div key={title} className="grid gap-3 border-b border-border/50 px-5 py-5 last:border-b-0 sm:grid-cols-[2.25rem_1fr] sm:px-7">
            <div
              className="flex size-9 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${accentColor}14`, color: accentColor }}
            >
              <Icon className="size-4" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {recommendations.length > 0 && (
        <div className="border-t border-border/60 bg-[#F6F3EE] px-5 py-5 dark:bg-white/[0.035] sm:px-7">
          <p className="text-xs font-medium text-muted-foreground">
            {lang === "zh" ? "想从另一个角度继续" : "Continue from another angle"}
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {recommendations.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.id}/`}
                className="group flex min-h-20 items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white/[0.06]"
              >
                <span>{lang === "zh" ? test.zh.name : test.en.name}</span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}
