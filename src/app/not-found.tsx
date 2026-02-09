import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-8 sm:p-12 text-center">
        <div className="mx-auto max-w-md">
          <div className="text-6xl sm:text-7xl font-extrabold text-indigo-200 mb-4">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ページが見つかりません
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            お探しのページは削除されたか、URLが間違っている可能性があります。
            <br className="hidden sm:inline" />
            下記のリンクからサイト内の他のページをご覧ください。
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              🏠 トップページに戻る
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/articles"
                className="block rounded-lg border-2 border-indigo-200 px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                📚 記事一覧
              </Link>
              <Link
                href="/quiz"
                className="block rounded-lg border-2 border-indigo-200 px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                🎮 クイズ一覧
              </Link>
              <Link
                href="/guide"
                className="block rounded-lg border-2 border-indigo-200 px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                📖 利用ガイド
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg border-2 border-indigo-200 px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                📧 お問い合わせ
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              リンク切れを発見された場合は、
              <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2">
                お問い合わせ
              </Link>
              からご報告いただけますと幸いです。
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
