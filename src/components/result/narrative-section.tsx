"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DimensionBar } from "./dimension-bar";
import type { QuizResult, NarrativeResult, TypeData, DimensionData, ArchetypeData, Lang, ScoreBand } from "@/core/quiz";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

interface NarrativeSectionProps {
  pattern: "type" | "dimensions" | "score";
  result: QuizResult;
  narrative?: NarrativeResult;
  typeData?: TypeData;
  dimensions?: Record<string, DimensionData>;
  archetypes?: Record<string, ArchetypeData>;
  scoreBands?: ScoreBand[];
  accentColor?: string;
  lang?: Lang;
}

function NarrativeBlock({ title, text }: { title: string; text?: string }) {
  if (!text) return null;
  return (
    <motion.div variants={item} className="flex flex-col gap-1.5">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </motion.div>
  );
}

function BadgeList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <motion.div variants={item} className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TypeSignals({
  result,
  dimensions,
  accentColor,
  lang,
}: {
  result: QuizResult;
  dimensions?: Record<string, DimensionData>;
  accentColor: string;
  lang: Lang;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (!result.dimensions?.length) return null;
  return (
    <motion.div variants={item} className="flex flex-col gap-5 border-t border-border/60 pt-5">
      <h3 className="text-sm font-semibold text-foreground">{lang === "zh" ? "偏好轮廓" : "Preference profile"}</h3>
      {result.dimensions.map((dimension, index) => {
        const metadata = dimensions?.[dimension.name];
        const label = lang === "zh"
          ? metadata?.zh ?? dimension.zh
          : metadata?.name ?? dimension.en ?? dimension.name;
        if (dimension.left && dimension.right && typeof dimension.leftScore === "number" && typeof dimension.rightScore === "number") {
          const left = Math.max(0, Math.min(100, Math.round(dimension.leftScore)));
          const right = Math.max(0, Math.min(100, Math.round(dimension.rightScore)));
          return (
            <div key={dimension.name} className="flex flex-col gap-2" role="group" aria-label={`${label}: ${dimension.left} ${left}%, ${dimension.right} ${right}%`}>
              <div className="text-sm font-medium text-foreground">{label}</div>
              <div className="flex items-center justify-between text-xs tabular-nums text-muted-foreground">
                <span>{dimension.left} {left}%</span>
                <span>{right}% {dimension.right}</span>
              </div>
              <div className="flex h-2.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                <motion.span
                  className="h-full"
                  style={{ backgroundColor: accentColor }}
                  initial={shouldReduceMotion ? false : { width: "50%" }}
                  animate={{ width: `${left}%` }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.12 * index, duration: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" }}
                />
                <span className="h-full flex-1 bg-foreground/16 dark:bg-white/20" />
              </div>
            </div>
          );
        }
        return <DimensionBar key={dimension.name} name={label} percentage={dimension.score} accentColor={accentColor} index={index} />;
      })}
    </motion.div>
  );
}

export function NarrativeSection({
  pattern,
  result,
  narrative,
  typeData,
  dimensions,
  archetypes,
  scoreBands,
  accentColor = "#6B5B95",
  lang = "zh",
}: NarrativeSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  /* ---------- dimensions pattern ---------- */
  if (pattern === "dimensions" && result.percentages) {
    const entries = Object.entries(result.percentages);
    return (
      <motion.div
        variants={container}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="show"
        className="flex flex-col gap-5"
      >
        {narrative?.description && (
          <motion.p variants={item} className="text-sm leading-relaxed text-muted-foreground">
            {narrative.description}
          </motion.p>
        )}

        {entries.map(([key, pct], i) => {
          const dim = dimensions?.[key];
          const label = dim?.[lang === "zh" ? "zh" : "name"] ?? key;
          return (
            <DimensionBar
              key={key}
              name={label}
              percentage={pct}
              accentColor={accentColor}
              index={i}
            />
          );
        })}
      </motion.div>
    );
  }

  /* ---------- score pattern ---------- */
  if (pattern === "score") {
    const score = result.score ?? result.overallScore ?? result.percentage ?? 0;
    const dominant = result.dominant ?? result.primary ?? result.resultType ?? "";
    const archetype = archetypes?.[dominant];

    const title =
      (lang === "zh" ? archetype?.title_zh : archetype?.title_en) ?? dominant;
    const desc =
      (lang === "zh" ? archetype?.desc_zh : archetype?.desc_en) ??
      narrative?.description ??
      "";
    const high =
      (lang === "zh" ? archetype?.high_zh : archetype?.high_en) ?? "";
    const low =
      (lang === "zh" ? archetype?.low_zh : archetype?.low_en) ?? "";
    const scoreBand = scoreBands?.find((band) => score >= band.min && score <= band.max);
    const bandTitle = scoreBand?.title[lang];
    const bandDescription = scoreBand?.description[lang];
    const bandSuggestions = scoreBand?.suggestions?.[lang];

    return (
      <motion.div
        variants={container}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="show"
        className="flex flex-col gap-5"
      >
        {/* score display */}
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <motion.span
            initial={shouldReduceMotion ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            className="text-5xl font-bold tabular-nums"
            style={{ color: accentColor }}
          >
            {score}
          </motion.span>
          {(bandTitle ?? title) && (
            <span className="text-sm font-medium text-muted-foreground">{bandTitle ?? title}</span>
          )}
        </motion.div>

        {(bandDescription ?? desc) && <NarrativeBlock title={lang === "zh" ? "解读" : "Interpretation"} text={bandDescription ?? desc} />}
        {bandSuggestions?.length ? <BadgeList title={lang === "zh" ? "可以试试" : "Try this"} items={bandSuggestions} /> : null}
        {result.percentages && dimensions ? (
          <motion.div variants={item} className="flex flex-col gap-4 border-t border-border/60 pt-5">
            <h3 className="text-sm font-semibold text-foreground">{lang === "zh" ? "分项线索" : "Supporting signals"}</h3>
            {Object.entries(result.percentages).map(([key, percentage], index) => (
              <DimensionBar
                key={key}
                name={dimensions[key]?.[lang === "zh" ? "zh" : "name"] ?? key}
                percentage={percentage}
                accentColor={accentColor}
                index={index}
              />
            ))}
          </motion.div>
        ) : null}
        {high && <NarrativeBlock title={lang === "zh" ? "高分特征" : "High Score"} text={high} />}
        {low && <NarrativeBlock title={lang === "zh" ? "低分特征" : "Low Score"} text={low} />}

        {narrative?.quote && (
          <motion.blockquote
            variants={item}
            className="atlas-quote"
          >
            &ldquo;{narrative.quote}&rdquo;
          </motion.blockquote>
        )}
      </motion.div>
    );
  }

  /* ---------- type pattern (default) ---------- */
  const td = typeData;
  const sections: { title: string; text?: string }[] = [];

  if (narrative?.description) sections.push({ title: lang === "zh" ? "描述" : "Description", text: narrative.description });
  if (td?.description && td.description !== narrative?.description) sections.push({ title: lang === "zh" ? "类型概述" : "Overview", text: td.description });
  if (narrative?.inRelationship || td?.inRelationship) sections.push({ title: lang === "zh" ? "关系中的你" : "In Relationships", text: narrative?.inRelationship ?? td?.inRelationship });
  if (narrative?.underPressure || td?.underPressure) sections.push({ title: lang === "zh" ? "压力下的你" : "Under Pressure", text: narrative?.underPressure ?? td?.underPressure });
  if (narrative?.atWork || td?.atWork) sections.push({ title: lang === "zh" ? "工作中的你" : "At Work", text: narrative?.atWork ?? td?.atWork });
  if (narrative?.hiddenStrength || td?.hiddenStrength) sections.push({ title: lang === "zh" ? "隐藏力量" : "Hidden Strength", text: narrative?.hiddenStrength ?? td?.hiddenStrength });
  if (narrative?.contradiction) sections.push({ title: lang === "zh" ? "内在矛盾" : "Inner Contradiction", text: narrative.contradiction });

  return (
    <motion.div
      variants={container}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="show"
      className="flex flex-col gap-5"
    >
      {sections.map((s) => (
        <NarrativeBlock key={s.title} title={s.title} text={s.text} />
      ))}

      <BadgeList title={lang === "zh" ? "优势" : "Strengths"} items={narrative?.strengths ?? td?.strengths} />
      <BadgeList title={lang === "zh" ? "劣势" : "Weaknesses"} items={narrative?.weaknesses ?? td?.weaknesses} />
      <TypeSignals result={result} dimensions={dimensions} accentColor={accentColor} lang={lang} />

      {narrative?.quote && (
        <motion.blockquote
          variants={item}
          className="atlas-quote"
        >
          &ldquo;{narrative.quote}&rdquo;
        </motion.blockquote>
      )}
    </motion.div>
  );
}

