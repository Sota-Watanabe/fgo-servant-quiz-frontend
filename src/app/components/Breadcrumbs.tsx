"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * パンくずリストコンポーネント
 * 現在のページの階層構造を表示し、ナビゲーションとSEOを改善します
 */
export default function Breadcrumbs() {
  const pathname = usePathname();

  // ホームページではパンくずリストを表示しない
  if (pathname === "/") {
    return null;
  }

  // パスを分割してパンくずリストの項目を生成
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // パスセグメントを日本語名にマッピング
  const segmentNames: Record<string, string> = {
    articles: "記事一覧",
    quiz: "知識テスト",
    skill: "スキルクイズ",
    profile: "プロフィールクイズ",
    np: "宝具クイズ",
    "np-voice": "宝具ボイスクイズ",
    description: "説明",
    guide: "ガイド",
    glossary: "用語集",
    faq: "FAQ",
    about: "サイトについて",
    operator: "運営者情報",
    contact: "お問い合わせ",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    disclaimer: "免責事項",
    "fgo-trivia": "FGO雑学・豆知識",
    "noble-phantasm-lore": "宝具の元ネタと設定",
    "profile-reading": "プロフィール解読法",
    "quiz-tips": "クイズ攻略のコツ",
    "skill-memorization": "スキル名の覚え方",
    "user-stories": "FGO実体験談",
    "beginner-guide": "初心者向けFGO完全ガイド",
    "priority-servants": "育成優先サーヴァント",
    "class-advantage": "クラス相性システム",
    "command-card": "コマンドカード完全解説",
  };

  // パンくずリストの項目を構築
  const breadcrumbs = [
    { name: "ホーム", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      const name = segmentNames[segment] || segment;
      return { name, path };
    }),
  ];

  return (
    <nav aria-label="パンくずリスト" className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="h-4 w-4 text-gray-400 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.path}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
