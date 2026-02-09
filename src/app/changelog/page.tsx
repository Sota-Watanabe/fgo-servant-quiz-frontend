import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "更新履歴・お知らせ";
const pageDescription =
  "Fate/Grand Quizの最新情報、機能追加、サイト更新履歴をお知らせします。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageLayout>
      <div className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <section>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            更新履歴・お知らせ
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            サイトの最新情報、機能追加、重要なお知らせをこちらでご案内します。
          </p>

          <div className="mt-8 space-y-8">
            {/* 2026年2月 */}
            <article className="border-l-4 border-indigo-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2026-02-09"
                  className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                >
                  2026/02/09
                </time>
                <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                  機能追加
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                サイトナビゲーション大幅改善
              </h2>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
                <li>ヘッダーにグローバルナビゲーションを追加（デスクトップ版）</li>
                <li>モバイルメニュー（ハンバーガーメニュー）を実装</li>
                <li>全ページにパンくずリストを表示</li>
                <li>サイト構造の可視化により、ユーザビリティが向上しました</li>
              </ul>
            </article>

            {/* 2026年1月 */}
            <article className="border-l-4 border-indigo-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2026-01-25"
                  className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                >
                  2026/01/25
                </time>
                <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  コンテンツ追加
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                著作権・法的ページの整備
              </h2>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
                <li>免責事項ページを新設し、著作権に関する方針を明確化</li>
                <li>利用規約ページを追加</li>
                <li>プライバシーポリシーを全面改訂</li>
                <li>運営者情報ページを大幅に拡充（開発ストーリーや運営方針を追加）</li>
              </ul>
            </article>

            <article className="border-l-4 border-indigo-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2026-01-21"
                  className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                >
                  2026/01/21
                </time>
                <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  コンテンツ追加
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                攻略記事を大幅追加
              </h2>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
                <li>初心者向けFGO完全ガイド（約4,000文字）</li>
                <li>育成優先サーヴァント解説</li>
                <li>クラス相性システム完全解説</li>
                <li>コマンドカード基礎知識</li>
                <li>合計10記事以上の攻略・情報コンテンツを公開</li>
              </ul>
            </article>

            {/* 2025年12月 */}
            <article className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2025-12-20"
                  className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700"
                >
                  2025/12/20
                </time>
                <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                  機能追加
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                宝具ボイスクイズモード追加
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                宝具の発動セリフからサーヴァントを当てる新しいクイズモードを追加しました。
              </p>
            </article>

            <article className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2025-12-15"
                  className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700"
                >
                  2025/12/15
                </time>
                <span className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  コンテンツ追加
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                FAQ・用語集・ガイドページ追加
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                よくある質問、FGO用語集、サイト利用ガイドの3ページを新設し、情報アクセスを改善しました。
              </p>
            </article>

            {/* 2025年11月 */}
            <article className="border-l-4 border-indigo-500 pl-4 sm:pl-6">
              <div className="flex items-center gap-3">
                <time
                  dateTime="2025-11-25"
                  className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                >
                  2025/11/25
                </time>
                <span className="inline-block rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-700">
                  🎉 正式リリース
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                Fate/Grand Quiz 正式公開
              </h2>
              <ul className="mt-2 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
                <li>スキルクイズモード</li>
                <li>プロフィールクイズモード</li>
                <li>宝具クイズモード</li>
                <li>記事コンテンツ6本</li>
                <li>サイト基本機能の実装完了</li>
              </ul>
            </article>
          </div>

          <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              📢 今後の予定
            </h2>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-2">
              <li>難易度別フィルター機能</li>
              <li>クラス・レアリティ別出題モード</li>
              <li>連続正解数の記録機能</li>
              <li>サーヴァント図鑑ページ</li>
              <li>記事コンテンツのさらなる充実</li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              ※ 上記は予定であり、変更になる場合があります
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              💬 ご意見・ご要望をお待ちしています
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              サイトに関するご意見、機能のご要望、不具合の報告などは
              <a
                href="/contact"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                お問い合わせページ
              </a>
              または X（旧Twitter）
              <a
                href="https://x.com/fgqproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                @fgqproject
              </a>
              までお寄せください。
            </p>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            最終更新日: 2026年2月9日
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
