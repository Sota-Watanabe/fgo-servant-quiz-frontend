"use client";

import type { ReactNode } from "react";

import Breadcrumbs from "@/app/components/Breadcrumbs";
import Footer from "@/app/components/Footer";
import GlobalNav from "@/app/components/GlobalNav";
import Header from "@/app/components/Header";

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * クイズページ用のレイアウトコンポーネント
 * 共通ヘッダーとフッターを提供し、コンテンツを中央に配置する
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header />
      <Breadcrumbs />
      <div className="mx-auto mt-4 mb-4 w-full max-w-7xl px-2 sm:mt-6 sm:mb-6 sm:px-4">
        <GlobalNav />
      </div>
      <main className="flex-1 py-4 sm:py-8 px-2 sm:px-4 h-[400px] sm:h-[800px]">
        <div className="max-w-7xl mx-auto">
          <section
            className="max-w-4xl mx-auto"
            aria-label="Fate/Grand Order クイズ"
          >
            {children}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
