"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-indigo-100 bg-white/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:h-20 sm:px-6 py-1">
        <Link
          href="/"
          aria-label="トップページに戻る"
          className="block h-full"
        >
          <img
            src="/title-logo.png"
            alt="Fate/Grand Quiz"
            className="h-full w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
