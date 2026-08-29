import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "测评目录 | Assessments",
  description: "浏览关于性格、情绪、关系与生活的双语自我反思测评。 Browse bilingual self-reflection assessments across personality, emotions, relationships, and life.",
};

export default function AssessmentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
