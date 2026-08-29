import type { Metadata } from "next";
import ReflectionHomePage from "@/components/reflection-home-page";

export const metadata: Metadata = {
  title: { absolute: "认识你自己 | Know Yourself" },
  description: "通过结构化测评或图像札记，记录对性格、情绪、关系与日常生活的观察。 Reflect through structured assessments or image journals.",
};

export default function HomePage() {
  return <ReflectionHomePage />;
}
