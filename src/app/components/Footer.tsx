export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[200px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-4">
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              サイトについて
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/guide"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              利用ガイド
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/glossary"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FGO用語集
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              よくある質問
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              プライバシーポリシー
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              お問い合わせ
            </a>
          </div>
          <div className="text-sm text-center">
            Created by{" "}
            <a
              href="https://github.com/Sota-Watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Sota-Watanabe
            </a>
          </div>
          <div className="text-xs text-gray-400 mt-2 text-center max-w-2xl">
            本サイトは非公式のファンサイトです。Fate/Grand Order は TYPE-MOON/FGO PROJECT の著作物です。
          </div>
        </div>
      </div>
    </footer>
  );
}
