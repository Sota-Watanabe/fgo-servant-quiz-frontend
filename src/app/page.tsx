import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  buildPageSeo,
  DEFAULT_KEYWORDS,
  DEFAULT_ROBOTS,
  DEFAULT_SOCIAL_IMAGE_PATH,
} from "@/utils/seo";
import SeoHead from "./components/SeoHead";

export const dynamic = "force-static";

const pageTitle = "FGOサーヴァント愛を試すクイズプラットフォーム";
const pageDescription =
  "Fate/Grand Order をもっと楽しむための非公式クイズサイト。スキル・プロフィール・宝具の問題に挑戦して、推しサーヴァントの知識を磨こう。";

const seo = buildPageSeo({
  title: pageTitle,
  description: pageDescription,
  path: "/",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

const quizRoutes = [
  {
    href: "/quiz/skill",
    title: "スキルクイズ",
    description:
      "スキルの効果だけを手がかりにサーヴァントを当てるクイズ。見覚えのある効果を思い出しながら楽しめます。",
  },
  {
    href: "/quiz/profile",
    title: "プロフィールクイズ",
    description:
      "プロフィール文やステータスをもとにサーヴァントを推理。設定や人物像を気軽に振り返れます。",
  },
  {
    href: "/quiz/np",
    title: "宝具クイズ",
    description:
      "宝具名やランク、種別のヒントから持ち主を当てるクイズ。記憶を頼りに楽しめる定番の問題形式です。",
  },
];

export default function Home() {
  return (
    <>
      <SeoHead
        {...seo}
        keywords={DEFAULT_KEYWORDS}
        robots={DEFAULT_ROBOTS}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
          {/* ヒーローセクション: より印象的なデザインにリファイン */}
          <section className="relative overflow-hidden rounded-[40px] border border-indigo-100 bg-gradient-to-br from-white/95 via-indigo-50/90 to-blue-100/80 p-8 shadow-2xl backdrop-blur-xl sm:p-16">
            {/* 装飾的なグラデーション円 */}
            <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-indigo-300/20 blur-[90px]" />
            <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-amber-200/25 blur-[100px]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-2/3 -translate-x-1/2 bg-gradient-to-r from-indigo-100/60 via-blue-100/40 to-indigo-100/60 blur-2xl" />
            <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:text-left">
              <div className="flex items-center justify-center sm:flex-1">
                <img
                  src="/title-logo-large.png"
                  alt="サイトタイトルロゴ"
                  className="w-full max-w-[360px] h-auto"
                />
              </div>
              <div className="mx-auto max-w-xl sm:mx-0 sm:flex-1">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-indigo-900 drop-shadow-sm sm:text-5xl">
                  記憶に刻まれし英霊たちの軌跡を辿れ
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
                  「Fate/Grand
                  Order」のサーヴァント知識を試せる非公式クイズサイトです。
                  <br className="hidden sm:inline" />
                  スキル・プロフィール・宝具などの問題を通じて、あなたのマスター度を試しましょう。
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                  スキル・プロフィール・宝具の{" "}
                  <span className="font-bold text-indigo-600">3種類</span>{" "}
                  を用意。
                  <br className="hidden sm:inline" />
                  気分に合わせて選んで、推しサーヴァントへの理解度を確かめましょう。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              クイズモードを選ぶ
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              好みの遊び方に合わせて出題タイプを選択。初めての方はスキルクイズで感覚をつかむのがおすすめです。
            </p>
            <div className="-mx-1 sm:-mx-3 sm:flex sm:flex-wrap">
              {quizRoutes.map((route) => (
                <div
                  key={route.href}
                  className="mt-6 px-1 sm:mt-8 sm:w-1/3 sm:px-3"
                >
                  <Link
                    href={route.href}
                    className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-indigo-100 bg-white/95 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-200/30 blur-xl" />
                    <h3 className="mt-4 text-lg font-bold text-gray-900">
                      {route.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                      {route.description}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600">
                      詳しく見る
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5.22 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L8.94 8 5.22 4.53a.75.75 0 0 1 0-1.06z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
