"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SkillQuizTabs() {
  const pathname = usePathname();

  const tabs = [
    {
      href: "/quiz/skill/practice",
      label: "選択問題",
    },
    {
      href: "/quiz/skill/challenge", 
      label: "練習問題",
    }
  ];

  return (
    <div className="mb-6 sm:mb-8">
      <div className="border-b border-gray-200 bg-white rounded-t-lg">
        <nav className="flex -mb-px">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 text-center py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
                  isActive
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-gray-50"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
