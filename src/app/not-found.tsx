import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FAFAF8] px-6 text-center">
      <span className="text-6xl">🌙</span>
      <h1 className="text-3xl font-bold text-[#2C2C2C]">迷路了？</h1>
      <p className="max-w-md text-sm text-[#2C2C2C]/60 leading-relaxed">
        这个页面不存在。也许你想要探索的，不在这个方向。
        <br />
        没关系，回去看看还有哪些世界在等你。
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#2C2C2C] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2C2C2C]/80"
        >
          回到首页
        </Link>
        <Link
          href="/compat/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#2C2C2C]/20 px-6 text-sm font-medium text-[#2C2C2C] transition-colors hover:bg-[#2C2C2C]/5"
        >
          探索关系
        </Link>
      </div>
    </div>
  );
}
