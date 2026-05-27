"use client";

import { forwardRef } from "react";

interface ShareCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  accentColor?: string;
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  function ShareCard(
    { icon, title, subtitle, description, accentColor = "#6B5B95" },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className="relative overflow-hidden rounded-2xl p-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
          minWidth: 300,
          maxWidth: 400,
        }}
      >
        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full opacity-20"
          style={{ backgroundColor: "white" }}
        />
        <div
          className="pointer-events-none absolute -bottom-6 -left-6 size-24 rounded-full opacity-10"
          style={{ backgroundColor: "white" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <span className="text-5xl">{icon}</span>
          <h3 className="text-xl font-bold">{title}</h3>
          {subtitle && (
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              {subtitle}
            </span>
          )}
          {description && (
            <p className="text-sm leading-relaxed opacity-80 line-clamp-3">
              {description}
            </p>
          )}

          {/* Brand footer */}
          <div className="mt-2 flex items-center gap-1.5 border-t border-white/20 pt-3 text-xs font-medium opacity-70">
            <span>🌙</span>
            <span>认识你自己</span>
          </div>
        </div>
      </div>
    );
  },
);
