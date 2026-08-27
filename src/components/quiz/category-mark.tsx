import {
  Brain,
  BriefcaseBusiness,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MessageCircleHeart,
  Palette,
  Sparkles,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  self: Brain,
  personality: Brain,
  emotion: Waves,
  mental: Leaf,
  relationship: HeartHandshake,
  career: BriefcaseBusiness,
  life: BriefcaseBusiness,
  intelligence: Lightbulb,
  lifestyle: Sparkles,
  social: MessageCircleHeart,
  fun: Palette,
};

export function CategoryMark({ category, className }: { category: string; className?: string }) {
  const Icon = icons[category as keyof typeof icons] ?? Brain;
  return (
    <span className={cn("inline-flex size-10 items-center justify-center rounded-full border border-current/15", className)}>
      <Icon className="size-4" strokeWidth={1.7} />
    </span>
  );
}
