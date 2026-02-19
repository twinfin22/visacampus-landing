import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visacampus.org"),
  title: "VisaCampus - 유학생 비자 관리, 엑셀에서 벗어나세요",
  description:
    "대학 국제처를 위한 유학생 비자 관리 플랫폼. FIMS 정기보고 간소화, 비자 만료 캘린더, IEQAS 이탈률 실시간 모니터링, AI 다국어 상담까지 한 곳에서 관리하세요. 8주 무료 파일럿 신청.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "VisaCampus - 유학생 비자 관리, 엑셀에서 벗어나세요",
    description:
      "대학 국제처를 위한 유학생 비자 관리 플랫폼. FIMS 정기보고 간소화, 비자 만료 캘린더, IEQAS 이탈률 실시간 모니터링까지 한 곳에서.",
    url: "https://www.visacampus.org",
    siteName: "VisaCampus",
    locale: "ko_KR",
    type: "website",
  },
  other: {
    "theme-color": "#4F46E5",
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
