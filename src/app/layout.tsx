import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VisaCampus - 유학생 비자 관리, 엑셀에서 벗어나세요",
  description:
    "FIMS 보고부터 비자 만료 관리까지, 한 곳에서. 8주 무료 파일럿 신청.",
  openGraph: {
    title: "VisaCampus - 유학생 비자 관리, 엑셀에서 벗어나세요",
    description:
      "FIMS 보고부터 비자 만료 관리까지, 한 곳에서. 8주 무료 파일럿 신청.",
    url: "https://visacampus.org",
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
