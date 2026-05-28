"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, RefreshCw, Copy, Check } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { ResultHero } from "@/components/result/result-hero";
import { NarrativeSection } from "@/components/result/narrative-section";
import { ShareCard } from "@/components/result/share-card";
import { getTestById, type TestRegistryEntry } from "@/lib/test-registry";
import { loadTestData } from "@/lib/tests";
import { cn } from "@/lib/utils";
import type { TestData, QuizResult, NarrativeResult, TypeData, Lang } from "@/lib/types";

function pickNarrative(
  map: Record<string, { zh: NarrativeResult; en: NarrativeResult }> | undefined,
  key: string,
  lang: Lang,
): NarrativeResult | undefined {
  if (!map) return undefined;
  const entry = map[key] ?? map[Object.keys(map)[0]];
  return entry?.[lang];
}

function pickTypeData(
  map: Record<string, { zh: TypeData; en: TypeData }> | undefined,
  key: string,
  lang: Lang,
): TypeData | undefined {
  if (!map) return undefined;
  const entry = map[key] ?? map[Object.keys(map)[0]];
  return entry?.[lang];
}

interface ResultClientProps {
  testType: string;
}

export default function ResultClient({ testType }: ResultClientProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [testData, setTestData] = useState<TestData | null>(null);
  const [registryEntry, setRegistryEntry] = useState<TestRegistryEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      let stored: { result?: QuizResult; answers?: number[] } | null = null;
      try {
        const raw = localStorage.getItem(`quiz-result-${testType}`);
        if (raw) stored = JSON.parse(raw);
      } catch {}

      const entry = getTestById(testType) ?? null;
      const data = await loadTestData(testType);

      let calcResult: QuizResult | null = stored?.result ?? null;
      if (!calcResult && data && stored?.answers) {
        try {
          calcResult = data.calculate(stored.answers, data.questions as any);
        } catch {}
      }

      if (!cancelled) {
        setRegistryEntry(entry);
        setTestData(data);
        setResult(calcResult);
        setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [testType]);

  const pattern = registryEntry?.pattern ?? testData?.pattern ?? "type";
  const accentColor = testData?.color ?? "#6B5B95";

  const heroTitle = useMemo(() => {
    if (!result) return testType;
    const key = result.type ?? result.dominant ?? result.primary ?? "";
    if (testData?.narrative) {
      const n = pickNarrative(testData.narrative, key, lang);
      if (n?.archetype) return n.archetype;
    }
    if (testData?.archetypes?.[key]) {
      const a = testData.archetypes[key];
      return lang === "zh" ? a.title_zh ?? key : a.title_en ?? key;
    }
    return key || testType;
  }, [result, testData, lang, testType]);

  const heroSubtitle = useMemo(() => {
    if (!result) return undefined;
    const key = result.type ?? result.dominant ?? result.primary ?? "";
    return pickNarrative(testData?.narrative, key, lang)?.subtitle;
  }, [result, testData, lang]);

  const heroDescription = useMemo(() => {
    if (!result) return undefined;
    const key = result.type ?? result.dominant ?? result.primary ?? "";
    const n = pickNarrative(testData?.narrative, key, lang);
    return n?.hero ?? n?.description;
  }, [result, testData, lang]);

  const heroIcon = registryEntry?.icon ?? "🧪";

  const narrative = useMemo(() => {
    if (!result) return undefined;
    const key = result.type ?? result.dominant ?? result.primary ?? "";
    return pickNarrative(testData?.narrative, key, lang);
  }, [result, testData, lang]);

  const typeData = useMemo(() => {
    if (!result) return undefined;
    const key = result.type ?? result.dominant ?? result.primary ?? "";
    return pickTypeData(testData?.types, key, lang);
  }, [result, testData, lang]);

  const handleRetake = useCallback(() => {
    try { localStorage.removeItem(`quiz-result-${testType}`); } catch {}
    router.push(`/quiz/${testType}/`);
  }, [router, testType]);

  const handleCopy = useCallback(async () => {
    const text = lang === "zh"
      ? `我在「认识你自己」完成了${registryEntry?.zh.name ?? testType}测试，结果是：${heroTitle}。来试试吧！`
      : `I completed the ${registryEntry?.en.name ?? testType} test on "Know Yourself" and got: ${heroTitle}. Try it!`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }, [testType, lang, registryEntry, heroTitle]);

  const toggleLang = useCallback(() => {
    setLang((l) => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center min-h-screen bg-[#FAFAF8]">
        <motion.div
          className="h-12 w-12 rounded-full border-3 border-muted border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          style={{ borderColor: accentColor + "40", borderTopColor: "transparent" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          {lang === "zh" ? "正在解读你的结果……" : "Interpreting your results..."}
        </motion.p>
      </div>
    );
  }

  if (!result || !registryEntry) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 min-h-screen px-6 text-center bg-[#FAFAF8]">
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-5xl">🔍</motion.span>
        <h1 className="text-xl font-semibold">{lang === "zh" ? "未找到测试结果" : "No results found"}</h1>
        <p className="text-sm text-muted-foreground max-w-sm">
          {lang === "zh" ? "你可能还没有完成这个测试，或者结果数据已被清除。" : "You may not have completed this test yet, or result data has been cleared."}
        </p>
        <div className="flex gap-3">
          <Link href={`/quiz/${testType}/`} className={cn(buttonVariants({ variant: "default" }), "rounded-xl")}>
            {lang === "zh" ? "去做测试" : "Take the Test"}
          </Link>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "rounded-xl")}>
            {lang === "zh" ? "回到首页" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  const testName = lang === "zh" ? registryEntry.zh.name : registryEntry.en.name;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8]">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 backdrop-blur-md px-6 py-4 border-b border-border/40"
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity">
          <ArrowLeft className="size-4" />
          <span>认识你自己</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{testName}</span>
          <Button variant="ghost" size="icon" onClick={toggleLang} aria-label="Toggle language">
            <Globe className="size-4" />
          </Button>
        </div>
      </motion.header>

      <main className="flex flex-1 flex-col items-center gap-10 px-6 py-12 w-full max-w-2xl mx-auto">
        <ResultHero icon={heroIcon} title={heroTitle} subtitle={heroSubtitle} description={heroDescription} accentColor={accentColor} />

        <section className="w-full">
          <NarrativeSection
            pattern={pattern}
            result={result}
            narrative={narrative}
            typeData={typeData}
            dimensions={testData?.dimensions}
            archetypes={testData?.archetypes}
            accentColor={accentColor}
            lang={lang}
          />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <ShareCard ref={shareRef} icon={heroIcon} title={heroTitle} subtitle={heroSubtitle} description={heroDescription} accentColor={accentColor} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="w-full flex flex-col sm:flex-row gap-3"
        >
          <Button variant="secondary" className="flex-1 h-12 rounded-xl gap-2" onClick={handleRetake}>
            <RefreshCw className="size-4" />
            {lang === "zh" ? "重新测试" : "Retake Test"}
          </Button>
          <Button className="flex-1 h-12 rounded-xl gap-2" style={{ backgroundColor: accentColor }} onClick={handleCopy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? (lang === "zh" ? "已复制" : "Copied") : (lang === "zh" ? "分享结果" : "Share Result")}
          </Button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full flex flex-col sm:flex-row gap-3"
        >
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "flex-1 h-12 rounded-xl justify-center")}>
            {lang === "zh" ? "探索更多测试" : "Explore More Tests"}
          </Link>
        </motion.section>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-xs text-muted-foreground/60 text-center pb-8"
        >
          {lang === "zh" ? "本测试仅供参考，不构成专业心理评估。" : "This test is for reference only and does not constitute a professional psychological assessment."}
        </motion.p>
      </main>
    </div>
  );
}
