import type { Metadata } from "next";
import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";
import "./journal.css";

export const metadata: Metadata = {
  ...PRIVATE_PAGE_METADATA,
  title: "图像札记",
};

export default function JournalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
