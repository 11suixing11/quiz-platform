"use client";

import { motion } from "framer-motion";

interface RadarChartProps {
  dimensions: { name: string; score: number }[];
  accentColor?: string;
  size?: number;
}

export function RadarChart({ dimensions, accentColor = "#6B5B95", size = 280 }: RadarChartProps) {
  const center = size / 2;
  const radius = size / 2 - 40;
  const count = dimensions.length;
  const angleStep = (2 * Math.PI) / count;
  const startAngle = -Math.PI / 2; // Start from top

  // Calculate point on polygon
  function getPoint(index: number, value: number) {
    const angle = startAngle + index * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  }

  // Grid levels
  const levels = [20, 40, 60, 80, 100];

  // Axis endpoints
  const axes = dimensions.map((_, i) => getPoint(i, 100));

  // Data polygon points
  const dataPoints = dimensions.map((d, i) => getPoint(i, d.score));
  const dataPath = dataPoints.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ") + " Z";

  // Label positions
  const labelPoints = dimensions.map((d, i) => {
    const angle = startAngle + i * angleStep;
    const labelR = radius + 28;
    return {
      x: center + labelR * Math.cos(angle),
      y: center + labelR * Math.sin(angle),
      name: d.name,
      score: d.score,
    };
  });

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid polygons */}
        {levels.map((level, li) => {
          const points = dimensions
            .map((_, i) => getPoint(i, level))
            .map((p) => `${p.x},${p.y}`)
            .join(" ");
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke={accentColor}
              strokeWidth={0.5}
              opacity={0.15 + li * 0.05}
            />
          );
        })}

        {/* Axes */}
        {axes.map((p, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke={accentColor}
            strokeWidth={0.5}
            opacity={0.2}
          />
        ))}

        {/* Data polygon - animated */}
        <motion.polygon
          points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
          fill={accentColor}
          fillOpacity={0.15}
          stroke={accentColor}
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Data points - animated */}
        {dataPoints.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill="white"
            stroke={accentColor}
            strokeWidth={2.5}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
          />
        ))}

        {/* Labels */}
        {labelPoints.map((lp, i) => {
          const isLeft = lp.x < center - 10;
          const isRight = lp.x > center + 10;
          const textAnchor = isLeft ? "end" : isRight ? "start" : "middle";
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <text
                x={lp.x}
                y={lp.y - 6}
                textAnchor={textAnchor}
                className="fill-[#2C2C2C] text-xs font-medium"
              >
                {lp.name}
              </text>
              <text
                x={lp.x}
                y={lp.y + 10}
                textAnchor={textAnchor}
                className="fill-muted-foreground text-[10px] tabular-nums"
                style={{ fill: accentColor }}
              >
                {lp.score}%
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
