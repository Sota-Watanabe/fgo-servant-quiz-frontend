"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * グローバルナビゲーション
 * 4つのクイズページへのリンク
 */

export default function GlobalNav() {
  const pathname = usePathname();
  const navLinks = [
    {
      label: "スキル",
      href: "/quiz/skill",
      subLabel: "Skill Quiz",
    },
    {
      label: "プロフィール",
      href: "/quiz/profile",
      subLabel: "Profile Quiz",
    },
    {
      label: "宝具",
      href: "/quiz/np",
      subLabel: "Noble Phantasm Quiz",
    },
    {
      label: "宝具ボイス",
      href: "/quiz/np-voice",
      subLabel: "NP Voice Quiz",
    },
  ];

  return (
  <nav className="w-full flex flex-col items-stretch gap-3 pt-6 pb-2 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch={false}
            className="relative"
          >
            <button
              className={`relative w-full min-h-[56px] rounded-[4px] overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.25)] border border-[#b3d1ff] bg-[#f9fbfd] flex flex-col justify-center items-center select-none transition-all hover:brightness-105 active:translate-y-[1px] opacity-95 hover:cursor-pointer sm:w-[280px] sm:min-h-[68px] lg:w-[330px]`}
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #f5f8fb 60%, #e0e6ef 100%)",
              }}
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              type="button"
              disabled={isActive}
            >
              {/* 上部の光沢SVG */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 330 68"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q165,-10 330,8 L330,68 L0,68 Z"
                  fill="url(#shine)"
                />
                <defs>
                  <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              {/* メインテキスト */}
              <div className="z-10 text-[18px] font-bold text-[#222] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] sm:text-[20px]">
                {link.label}
              </div>

              {/* 下部グラデーションバー */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[8px] flex items-center justify-center text-[7px] font-semibold text-white tracking-widest shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] sm:text-[8px]"
                style={{
                  marginBottom: "8px",
                  background: "linear-gradient(90deg, rgba(60,120,255,0) 0%, rgba(60,120,255,0) 12.5%, #2563eb 37.5%, #2563eb 62.5%, rgba(60,120,255,0) 87.5%, rgba(60,120,255,0) 100%)"
                }}
              >
                {link.subLabel}
              </div>
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
