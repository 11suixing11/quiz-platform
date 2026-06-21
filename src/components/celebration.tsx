"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CelebrationProps {
  color?: string;
  onComplete?: () => void;
}

export function Celebration({ color = "#6B5B95", onComplete }: CelebrationProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; rotation: number; scale: number; delay: number; emoji: string }[]>([]);

  useEffect(() => {
    const emojis = ["✨", "🌙", "⭐", "💫", "🌟", "🎉", "🎊"];
    const newParticles = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      rotation: Math.random() * 720 - 360,
      scale: 0.5 + Math.random() * 0.8,
      delay: Math.random() * 0.5,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => onComplete?.(), 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {/* Background pulse */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ backgroundColor: color }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-2xl"
          style={{ left: `${p.x}%` }}
          initial={{
            y: "-10vh",
            rotate: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: p.rotation,
            scale: [0, p.scale, p.scale, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: p.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
          className="text-center"
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            🎉
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg font-semibold text-[#2C2C2C] dark:text-white"
          >
            测试完成！
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-[#2C2C2C]/60 dark:text-white/60 mt-1"
          >
            正在解读你的答案……
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
