"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-indigo-100 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            aria-label="トップページに戻る"
            className="flex-shrink-0"
          >
            <img
              src="/title-logo.png"
              alt="Fate/Grand Quiz"
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/articles"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              記事一覧
            </Link>
            <Link
              href="/quiz"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              知識テスト
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              ガイド
            </Link>
            <Link
              href="/glossary"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              用語集
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              サイトについて
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="メニューを開く"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/articles"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                📚 記事一覧
              </Link>
              <Link
                href="/quiz"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                🎮 知識テスト
              </Link>
              <Link
                href="/guide"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                📖 ガイド
              </Link>
              <Link
                href="/glossary"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                📝 用語集
              </Link>
              <Link
                href="/faq"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ❓ FAQ
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ℹ️ サイトについて
              </Link>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
