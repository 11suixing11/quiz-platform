"use client";

import { motion } from "framer-motion";

interface ResultHeroProps {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  accentColor?: string;
}

export function ResultHero({
  icon,
  title,
  subtitle,
  description,
  accentColor = "#6B5B95",
}: ResultHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-5 text-center"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
        className="flex items-center justify-center rounded-full size-24 text-5xl"
        style={{ backgroundColor: `${accentColor}18` }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h1>

      {/* Subtitle badge */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{
            backgroundColor: `${accentColor}14`,
            color: accentColor,
          }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-md text-base text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Colored divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="h-1 w-20 rounded-full"
        style={{ backgroundColor: accentColor }}
      />
    </motion.section>
  );
}
