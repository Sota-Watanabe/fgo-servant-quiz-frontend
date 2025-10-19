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
      label: "スキル（フリクエ）",
      href: "/quiz/skill/practice",
      color: "blue",
    },
    {
      label: "スキル（高難易度）",
      href: "/quiz/skill/challenge",
      color: "blue",
    },
    {
      label: "プロフィール（フリクエ）",
      href: "/quiz/profile/practice",
      color: "purple",
    },
    {
      label: "プロフィール（高難易度）",
      href: "/quiz/profile/challenge",
      color: "purple",
    },
  ];

  return (
    <nav className="w-full flex justify-center gap-2 sm:gap-4 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 shadow-sm mb-8 rounded-b-xl">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        const activeClass =
          link.color === "blue"
            ? "bg-blue-600 text-white shadow"
            : "bg-purple-600 text-white shadow";
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-150 border border-transparent hover:border-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              isActive ? activeClass : "bg-white text-gray-700"
            }`}
            prefetch={false}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
