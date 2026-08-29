import type { Metadata } from "next";
import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";

export const metadata: Metadata = {
  ...PRIVATE_PAGE_METADATA,
  title: "内容治理后台",
};

export default function ModerationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
