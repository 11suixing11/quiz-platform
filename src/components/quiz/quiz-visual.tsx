"use client";

import { useState } from "react";
import Image from "next/image";
import type { Lang, QuizVisual } from "@/core/quiz";
import { cn } from "@/lib/utils";

interface QuizVisualFrameProps {
  visual: QuizVisual;
  lang: Lang;
  className?: string;
  imageClassName?: string;
  sizes: string;
  preload?: boolean;
}

export function QuizVisualFrame({
  visual,
  lang,
  className,
  imageClassName,
  sizes,
  preload = false,
}: QuizVisualFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === visual.src;

  const alt = visual.alt[lang];
  const objectPosition = visual.focus ? `${visual.focus.x}% ${visual.focus.y}%` : "50% 50%";

  return (
    <div
      className={cn("quiz-visual-frame", failed && "quiz-visual-frame--fallback", className)}
      style={{ aspectRatio: `${visual.width} / ${visual.height}` }}
      {...(failed ? { role: "img", "aria-label": alt } : {})}
    >
      {!failed ? (
        <Image
          src={visual.src}
          width={visual.width}
          height={visual.height}
          alt={alt}
          sizes={sizes}
          preload={preload}
          className={cn("quiz-visual-image", imageClassName)}
          style={{ objectPosition }}
          onError={() => setFailedSrc(visual.src)}
        />
      ) : (
        <span className="quiz-visual-fallback" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      )}
    </div>
  );
}
