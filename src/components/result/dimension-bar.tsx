"use client";

import { motion } from "framer-motion";

interface DimensionBarProps {
  name: string;
  percentage: number;
  accentColor?: string;
  index?: number;
}

export function DimensionBar({
  name,
  percentage,
  accentColor = "#6B5B95",
  index = 0,
}: DimensionBarProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(percentage)));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="tabular-nums text-muted-foreground">{clamped}%</span>
      </div>

      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{
            delay: 0.2 + 0.1 * index,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}
