"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { WorldCard } from "@/components/WorldCard";
import { ExploreSection } from "@/components/ExploreSection";
import { WORLDS } from "@/lib/constants";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TestCard } from "@/components/TestCard";
import Link from "next/link";

export default function Home() {
  const [selectedWorld, setSelectedWorld] = useState<string | undefined>();
  const [worldCategories, setWorldCategories] = useState<string[]>([]);

  const handleWorldSelect = useCallback((worldId: string) => {
    const world = WORLDS.find((w) => w.id === worldId);
    if (world) {
      setSelectedWorld(worldId);
      setWorldCategories(world.categories);
      // Scroll to explore section
      const el = document.getElementById("explore");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <HeroSection />

      {/* Four Worlds */}
      <section id="worlds" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-[#2C2C2C] sm:text-3xl">
            四个内在世界
          </h2>
          <p className="mt-2 text-sm text-[#2C2C2C]/60">
            选择一个与你共振的世界，开始探索。
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WORLDS.map((world, i) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <WorldCard world={world} onSelect={handleWorldSelect} />
            </motion.div>
          ))}
        </div>
      </section>


      {/* Featured Tests */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-[#2C2C2C] sm:text-3xl">从这里开始</h2>
          <p className="mt-2 text-sm text-[#2C2C2C]/60">不知道选什么？这几个测试最受欢迎。</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["big-five", "mbti", "enneagram", "love-language", "emotional-intelligence", "anxiety"].map((id, i) => {
            const test = TEST_REGISTRY.find((t) => t.id === id);
            if (!test) return null;
            return <TestCard key={test.id} test={test} index={i} />;
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 text-center">
          <a href="#explore" className="inline-flex h-10 items-center justify-center rounded-full border border-[#2C2C2C]/20 px-6 text-sm font-medium text-[#2C2C2C] transition-colors hover:bg-[#2C2C2C]/5">查看全部 113 个测试 →</a>
        </motion.div>
      </section>

      {/* Explore */}
      <ExploreSection
        selectedWorld={selectedWorld}
        worldCategories={worldCategories}
      />

      {/* Footer */}
      <footer className="border-t border-[#2C2C2C]/8 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="text-3xl mb-4 block">🌙</span>
          <p className="text-sm text-[#2C2C2C]/50 mb-4">这里不是诊断，而是一面帮助你靠近自己的镜子。</p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30">
            <Link href="/compat/" className="hover:text-[#2C2C2C]/60 transition-colors">关系配对</Link>
            <span>·</span>
            <Link href="/quiz/big-five/" className="hover:text-[#2C2C2C]/60 transition-colors">大五人格</Link>
            <span>·</span>
            <Link href="/quiz/mbti/" className="hover:text-[#2C2C2C]/60 transition-colors">MBTI</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
