export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-[200px]">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <div className="text-sm">
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
          <div className="mt-2 md:mt-0 md:ml-4 text-xs">
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              プライバシーポリシー
            </a>
            <span className="mx-2 text-gray-500">|</span>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
