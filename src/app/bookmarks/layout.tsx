import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";

export const metadata = PRIVATE_PAGE_METADATA;

export default function BookmarksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
