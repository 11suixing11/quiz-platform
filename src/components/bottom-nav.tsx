"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Compass, History, Heart, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, label: "首页", labelEn: "Home" },
  { href: "/explore/", icon: Compass, label: "探索", labelEn: "Explore" },
  { href: "/history/", icon: History, label: "记录", labelEn: "History" },
  { href: "/bookmarks/", icon: Heart, label: "收藏", labelEn: "Bookmarks" },
  { href: "/dashboard/", icon: BarChart3, label: "仪表", labelEn: "Dashboard" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-lg border-t border-border/40"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-14">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname === ""
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full relative"
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "size-5 transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/60"
                  )}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] mt-0.5 transition-colors duration-200",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground/50"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
