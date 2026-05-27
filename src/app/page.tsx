"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { WorldCard } from "@/components/WorldCard";
import { ExploreSection } from "@/components/ExploreSection";
import { WORLDS } from "@/lib/constants";

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

      {/* Explore */}
      <ExploreSection
        selectedWorld={selectedWorld}
        worldCategories={worldCategories}
      />

      {/* Footer */}
      <footer className="border-t border-[#2C2C2C]/8 px-4 py-12 text-center">
        <p className="text-sm text-[#2C2C2C]/50">
          这里不是诊断，而是一面帮助你靠近自己的镜子。
        </p>
      </footer>
    </div>
  );
}
