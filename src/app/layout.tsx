import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VisaCampus — 대학 국제처를 위한 유학생 관리 플랫폼",
  description:
    "FIMS 보고부터 비자 만료 관리까지, 한 곳에서. 8주 무료 파일럿 신청.",
  openGraph: {
    title: "VisaCampus — 대학 국제처를 위한 유학생 관리 플랫폼",
    description:
      "FIMS 보고부터 비자 만료 관리까지, 한 곳에서. 8주 무료 파일럿 신청.",
    siteName: "VisaCampus",
    locale: "ko_KR",
    type: "website",
  },
  other: {
    "theme-color": "#4F46E5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
