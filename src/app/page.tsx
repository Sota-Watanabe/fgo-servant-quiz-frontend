import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";
import { generateWebSiteSchema } from "@/utils/structuredData";

export const dynamic = "force-static";

const pageTitle = "FGO攻略・サーヴァント情報データベース | Fate/Grand Quiz";
const pageDescription =
  "Fate/Grand Order の攻略情報、サーヴァント解説、システムガイドを提供する総合情報サイト。初心者向けガイドから上級者向け攻略記事まで、FGOをもっと楽しむための知識が満載。知識テスト機能も搭載。";

export const metadata: Metadata = buildPageMetadata({
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
  const structuredData = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
          {/* ヒーローセクション */}
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
                  FGO攻略・情報の決定版サイト
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
                  「Fate/Grand Order」の攻略法、システム解説、サーヴァント情報を網羅した総合情報サイトです。
                  <br className="hidden sm:inline" />
                  初心者ガイド、育成優先度、クラス相性など、実戦で役立つ知識をお届けします。
                </p>
              </div>
            </div>
          </section>

          {/* 最新記事セクション - 一番上に配置 */}
          <section className="mt-12 rounded-3xl border border-green-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              📚 最新記事・FGO攻略情報
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              FGOをもっと楽しむための攻略法、システム解説、豆知識などを紹介しています。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/articles/beginner-guide"
                className="block rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-green-600">
                  初心者ガイド
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  FGO初心者が知っておきたい基礎知識
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  基本システムとクイズの活用法を詳しく解説
                </p>
                <div className="mt-3 text-xs text-gray-500">約12分で読めます</div>
              </Link>
              <Link
                href="/articles/priority-servants"
                className="block rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-green-600">
                  初心者ガイド
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  初心者が優先すべき育成サーヴァント
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  低レアから始める効率的な攻略法
                </p>
                <div className="mt-3 text-xs text-gray-500">約12分で読めます</div>
              </Link>
              <Link
                href="/articles/class-advantage"
                className="block rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-blue-600">
                  システム解説
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  クラス相性を完全解説
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  三すくみから特殊クラスまで徹底解説
                </p>
                <div className="mt-3 text-xs text-gray-500">約10分で読めます</div>
              </Link>
              <Link
                href="/articles/command-card"
                className="block rounded-2xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-blue-600">
                  システム解説
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  コマンドカードの基礎知識
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  効果的なカード選択のコツを解説
                </p>
                <div className="mt-3 text-xs text-gray-500">約8分で読めます</div>
              </Link>
              <Link
                href="/articles/user-stories"
                className="block rounded-2xl border border-pink-100 bg-gradient-to-br from-white to-pink-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-purple-600">
                  体験談
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  推しサーヴァントの新たな魅力を発見
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  クイズで見つけた意外な一面とは
                </p>
                <div className="mt-3 text-xs text-gray-500">約8分で読めます</div>
              </Link>
              <Link
                href="/articles/noble-phantasm-lore"
                className="block rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-amber-600">
                  設定解説
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  宝具の背景設定と神話・歴史
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  宝具に込められた元ネタを深掘り
                </p>
                <div className="mt-3 text-xs text-gray-500">約10分で読めます</div>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                記事一覧をすべて見る（全10記事）
              </Link>
            </div>
          </section>

          {/* クイズモード選択 - 2番目に配置 */}
          <section className="mt-12 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              🎮 知識確認ツール
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              記事で学んだ知識を実際に確認できる知識テスト機能です。
              スキル・プロフィール・宝具の3種類の問題形式で、あなたのFGO知識をチェックできます。
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

          <section className="mt-12 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Fate/Grand Quiz が提供する価値
            </h2>
            <p className="mt-4 text-sm text-gray-700 sm:text-base leading-relaxed">
              Fate/Grand Quiz
              は、単なるクイズサイトではありません。FGOをプレイする中で自然と蓄積されていく知識を、楽しみながら整理・確認できる学習プラットフォームです。
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30 p-5">
                <h3 className="text-base font-bold text-indigo-900 sm:text-lg">
                  📚 体系的な学習体験
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  スキル・プロフィール・宝具という3つの異なる視点から、サーヴァントの特徴を深く理解できます。各クイズモードは、実戦での活用知識、物語性の理解、象徴的な要素の記憶という、それぞれ異なる学習効果をもたらします。
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900 sm:text-lg">
                  🎮 ゲーミフィケーションによる継続性
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  即座のフィードバック、段階的な情報開示、正誤判定といったゲーム要素により、学習のモチベーションを維持。スキマ時間に1問だけ解くこともできるため、無理なく継続できます。
                </p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50/30 p-5">
                <h3 className="text-base font-bold text-purple-900 sm:text-lg">
                  💡 新しい発見と深い理解
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  「このスキル効果、実はこういう意味だったのか」「このプロフィール文、こんな背景があったんだ」といった新たな気づきを通じて、FGOの世界観をより深く楽しめるようになります。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              こんな方におすすめ
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/20 p-5">
                <div className="text-2xl">🎯</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  FGOをもっと深く楽しみたいマスター
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  キャラクターやストーリーへの理解を深めることで、ゲームプレイがより豊かになります。
                </p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-white to-green-50/20 p-5">
                <div className="text-2xl">📖</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  推しサーヴァントの知識を確認したい方
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  お気に入りのサーヴァントについて、どれだけ詳しく覚えているか試せます。
                </p>
              </div>
              <div className="rounded-2xl border border-pink-100 bg-gradient-to-br from-white to-pink-50/20 p-5">
                <div className="text-2xl">⏰</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  スキマ時間を有効活用したい方
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  通勤・通学中や休憩時間に、1問だけでも楽しめる手軽さが魅力です。
                </p>
              </div>
              <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/20 p-5">
                <div className="text-2xl">🤝</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  FGO仲間と知識を競いたい方
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  友人と一緒にクイズに挑戦して、誰が一番詳しいか確かめられます。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              もっと詳しく知りたい方へ
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              初めての方向けのガイドや、FGO用語の解説、サイトの詳細情報をご用意しています。
            </p>
            <div className="-mx-1 mt-6 sm:-mx-3 sm:flex sm:flex-wrap">
              <div className="mt-4 px-1 sm:mt-0 sm:w-1/4 sm:px-3">
                <Link
                  href="/guide"
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-900">
                    利用ガイド
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    クイズの遊び方や攻略のコツを詳しく解説
                  </p>
                </Link>
              </div>
              <div className="mt-4 px-1 sm:mt-0 sm:w-1/4 sm:px-3">
                <Link
                  href="/glossary"
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-900">
                    FGO用語集
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    サーヴァント、スキル、宝具などの基本用語を解説
                  </p>
                </Link>
              </div>
              <div className="mt-4 px-1 sm:mt-0 sm:w-1/4 sm:px-3">
                <Link
                  href="/faq"
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-900">
                    よくある質問
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    サイトの使い方や仕組みについての質問と回答
                  </p>
                </Link>
              </div>
              <div className="mt-4 px-1 sm:mt-0 sm:w-1/4 sm:px-3">
                <Link
                  href="/about"
                  className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-900">
                    サイトについて
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    サイトのコンセプトと運営の想い
                  </p>
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-green-100 bg-white/80 p-6 shadow-lg sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              クイズ攻略・お役立ち記事
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              クイズをもっと楽しむための攻略法や、FGOの豆知識を紹介しています。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/articles/quiz-tips"
                className="block rounded-2xl border border-green-100 bg-gradient-to-br from-white to-green-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-green-600">攻略</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  高正答率を目指すコツ
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  各クイズモードで正答率を上げるテクニックを解説
                </p>
              </Link>
              <Link
                href="/articles/skill-memorization"
                className="block rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold text-blue-600">学習法</div>
                <h3 className="mt-2 text-base font-bold text-gray-900">
                  スキルを覚える実践的アプローチ
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  効率的なスキル記憶法と学習サイクル
                </p>
              </Link>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 underline underline-offset-4"
              >
                記事一覧をすべて見る →
              </Link>
            </div>
          </section>

          {/* 免責事項の注意 */}
          <section className="mt-12 rounded-2xl border border-gray-300 bg-gray-50 p-6 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>※ 本サイトは非公式のファンサイトです</strong>
              <br />
              「Fate/Grand Order」および関連するすべての権利は TYPE-MOON / FGO PROJECT に帰属します。
              <br />
              本サイトは公式とは一切関係がありません。
              <Link
                href="/disclaimer"
                className="ml-2 text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
              >
                免責事項・著作権について
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
