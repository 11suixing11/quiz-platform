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
        className="relative overflow-hidden rounded-2xl text-white"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
          width: 600,
          height: 315,
          minWidth: 600,
          minHeight: 315,
        }}
      >
        {/* Decorative geometric background pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="geo-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="white" />
              <rect x="20" y="20" width="20" height="20" fill="white" />
            </pattern>
            <pattern id="geo-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo-grid)" />
          <rect width="100%" height="100%" fill="url(#geo-dots)" opacity="0.5" />
        </svg>

        {/* Large decorative shapes */}
        <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full opacity-15" style={{ backgroundColor: "white" }} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 size-36 rounded-full opacity-10" style={{ backgroundColor: "white" }} />
        <div className="pointer-events-none absolute right-24 bottom-10 size-20 rounded-full opacity-[0.06]" style={{ backgroundColor: "white" }} />
        {/* Diamond accent */}
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 size-16 rotate-45 rounded-lg opacity-[0.08]" style={{ backgroundColor: "white" }} />

        <div className="relative z-10 flex h-full w-full items-center gap-6 px-8 py-6">
          {/* Left: test icon */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <span className="text-6xl drop-shadow-lg">{icon}</span>
          </div>

          {/* Center: content */}
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight drop-shadow-sm line-clamp-2">
              {title}
            </h3>
            {subtitle && (
              <span className="mt-2 inline-block self-start rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                {subtitle}
              </span>
            )}
            {description && (
              <p className="mt-2 text-sm leading-relaxed opacity-80 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Right: QR code placeholder */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm size-16">
              <div className="size-12 bg-white/30 rounded grid grid-cols-4 grid-rows-4 gap-px p-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[1px]"
                    style={{
                      backgroundColor:
                        i === 0 || i === 3 || i === 12 || i === 15 || i === 5 || i === 6 || i === 9 || i === 10
                          ? "white"
                          : "transparent",
                    }}
                  />
                ))}
              </div>
            </div>
            <span className="text-[8px] opacity-60 font-medium">Scan to try</span>
          </div>
        </div>

        {/* Bottom brand bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-1.5 border-t border-white/15 bg-black/10 backdrop-blur-sm py-1.5">
          <span className="text-sm">🌙</span>
          <span className="text-[10px] font-semibold tracking-wide opacity-70">认识你自己</span>
        </div>
      </div>
    );
  },
);
