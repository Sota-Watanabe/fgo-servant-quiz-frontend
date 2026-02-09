import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[200px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                クイズ
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/quiz/skill" className="text-gray-300 hover:text-white transition-colors">
                    スキルクイズ
                  </a>
                </li>
                <li>
                  <a href="/quiz/profile" className="text-gray-300 hover:text-white transition-colors">
                    プロフィールクイズ
                  </a>
                </li>
                <li>
                  <a href="/quiz/np" className="text-gray-300 hover:text-white transition-colors">
                    宝具クイズ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                情報
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/articles" className="text-gray-300 hover:text-white transition-colors">
                    記事一覧
                  </a>
                </li>
                <li>
                  <a href="/guide" className="text-gray-300 hover:text-white transition-colors">
                    利用ガイド
                  </a>
                </li>
                <li>
                  <a href="/glossary" className="text-gray-300 hover:text-white transition-colors">
                    FGO用語集
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    よくある質問
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                サイト情報
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                    サイトについて
                  </a>
                </li>
                <li>
                  <a href="/operator" className="text-gray-300 hover:text-white transition-colors">
                    運営者情報
                  </a>
                </li>
                <li>
                  <a href="/changelog" className="text-gray-300 hover:text-white transition-colors">
                    更新履歴
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                法的情報
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                    免責事項・著作権
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 w-full max-w-4xl pt-6 mt-6">
            <div className="text-sm text-center mb-3">
              運営者:{" "}
              <a
                href="/operator"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sota Watanabe
              </a>
              {" "}|{" "}
              <a
                href="https://github.com/Sota-Watanabe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="text-xs text-gray-400 text-center max-w-2xl mx-auto">
              本サイトは非公式のファンサイトです。「Fate/Grand Order」は TYPE-MOON / FGO PROJECT の著作物です。
              サイト内で使用している画像・テキスト等の著作権は各権利者に帰属します。
              <Link href="/disclaimer" className="block mt-2 text-blue-400 hover:text-blue-300 underline underline-offset-2">
                免責事項・著作権について
              </Link>
            </div>
            <div className="text-xs text-gray-500 text-center mt-3">
              © 2026 Fate/Grand Quiz. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
