import Link from "next/link";
import type { ReactNode } from "react";

const LEGAL_NAV = [
  { href: "/tos", label: "이용약관" },
  { href: "/policy/privacy", label: "개인정보 처리방침" },
  { href: "/refund", label: "환불규정" },
] as const;

export default function LegalLayout({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          홈으로 돌아가기
        </Link>

        {children}
      </main>

      <footer className="py-8 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">VC</span>
            </div>
            <span className="text-sm font-semibold text-white">VisaCampus</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              홈
            </Link>
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  currentPath === item.href
                    ? "text-white font-medium"
                    : "hover:text-white transition-colors"
                }
                {...(currentPath === item.href
                  ? { "aria-current": "page" as const }
                  : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
