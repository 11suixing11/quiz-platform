"use client";

import { motion } from "framer-motion";
import { DimensionBar } from "./dimension-bar";
import { RadarChart } from "./radar-chart";
import type { QuizResult, NarrativeResult, TypeData, DimensionData, ArchetypeData } from "@/lib/types";

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
  accentColor?: string;
  lang?: "zh" | "en" | "ja";
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

export function NarrativeSection({
  pattern,
  result,
  narrative,
  typeData,
  dimensions,
  archetypes,
  accentColor = "#6B5B95",
  lang = "zh",
}: NarrativeSectionProps) {
  /* ---------- dimensions pattern ---------- */
  if (pattern === "dimensions" && result.percentages) {
    const entries = Object.entries(result.percentages);
    return (
      <motion.div
        variants={container}
        initial="hidden"
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
    const score = result.score ?? result.overallScore ?? 0;
    const dominant = result.dominant ?? result.primary ?? "";
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

    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-5"
      >
        {/* score display */}
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            className="text-5xl font-bold tabular-nums"
            style={{ color: accentColor }}
          >
            {score}
          </motion.span>
          {title && (
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
          )}
        </motion.div>

        {desc && <NarrativeBlock title={lang === "zh" ? "解读" : "Interpretation"} text={desc} />}
        {high && <NarrativeBlock title={lang === "zh" ? "高分特征" : "High Score"} text={high} />}
        {low && <NarrativeBlock title={lang === "zh" ? "低分特征" : "Low Score"} text={low} />}

        {narrative?.quote && (
          <motion.blockquote
            variants={item}
            className="border-l-2 pl-4 text-sm italic text-muted-foreground"
            style={{ borderColor: accentColor }}
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
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5"
    >
      {sections.map((s) => (
        <NarrativeBlock key={s.title} title={s.title} text={s.text} />
      ))}

      <BadgeList title={lang === "zh" ? "优势" : "Strengths"} items={narrative?.strengths ?? td?.strengths} />
      <BadgeList title={lang === "zh" ? "劣势" : "Weaknesses"} items={narrative?.weaknesses ?? td?.weaknesses} />

      {narrative?.quote && (
        <motion.blockquote
          variants={item}
          className="border-l-2 pl-4 text-sm italic text-muted-foreground"
          style={{ borderColor: accentColor }}
        >
          &ldquo;{narrative.quote}&rdquo;
        </motion.blockquote>
      )}
    </motion.div>
  );
}

