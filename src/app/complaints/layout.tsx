import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "隐私与版权投诉 | Know Yourself",
  description: "提交与公开内容有关的隐私或版权投诉。",
  alternates: { canonical: siteUrl("/complaints/") },
  robots: { index: true, follow: true },
};

export default function ComplaintsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
