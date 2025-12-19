import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGOクイズ攻略記事とお役立ち情報";
const pageDescription =
  "Fate/Grand Orderのクイズをもっと楽しむための攻略記事、サーヴァント知識、FGOの豆知識などをまとめています。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

const articles = [
  {
    href: "/articles/quiz-tips",
    title: "FGOクイズで高正答率を目指すコツ",
    category: "攻略",
    date: "2025-12-19",
    description:
      "各クイズモードで正答率を上げるための具体的なテクニックと、記憶を定着させる効果的な学習方法を紹介します。",
    readTime: "約5分",
  },
  {
    href: "/articles/skill-memorization",
    title: "サーヴァントのスキルを覚えるための実践的アプローチ",
    category: "学習法",
    date: "2025-12-19",
    description:
      "スキル効果を効率的に記憶するための方法論と、実戦で役立つスキル知識の整理術を解説します。",
    readTime: "約7分",
  },
  {
    href: "/articles/profile-reading",
    title: "プロフィール文から読み解くサーヴァントの深層",
    category: "考察",
    date: "2025-12-19",
    description:
      "プロフィール文に隠された設定やストーリーの伏線、キャラクター性の読み解き方を深掘りします。",
    readTime: "約8分",
  },
  {
    href: "/articles/noble-phantasm-lore",
    title: "宝具の背景設定と神話・歴史との関係性",
    category: "設定解説",
    date: "2025-12-19",
    description:
      "各サーヴァントの宝具が持つ歴史的・神話的背景と、それがFGOでどのように表現されているかを解説します。",
    readTime: "約10分",
  },
  {
    href: "/articles/fgo-trivia",
    title: "知っておくと楽しい！FGOの豆知識20選",
    category: "豆知識",
    date: "2025-12-19",
    description:
      "クイズには直接関係ないけれど、知っているとFGOがもっと楽しくなる小ネタや裏設定を紹介します。",
    readTime: "約6分",
  },
];

export default function ArticlesPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            ARTICLES
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGOクイズをもっと楽しむための記事集
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            攻略のコツ、学習方法、設定解説など、クイズを遊びながら知識を深めるためのお役立ち情報をお届けします。
          </p>
        </header>

        <section className="mt-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Link
                key={article.href}
                href={article.href}
                className="block rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="mt-3 text-lg sm:text-xl font-bold text-gray-900">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-indigo-600"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.22 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L8.94 8 5.22 4.53a.75.75 0 0 1 0-1.06z" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            記事を読んで実践しよう
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
            各記事で紹介しているテクニックや知識は、すぐにクイズで実践できます。読んだ後はぜひクイズに挑戦して、学んだことを活かしてみてください。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズを始める
            </Link>
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              プロフィールクイズを始める
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              宝具クイズを始める
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
