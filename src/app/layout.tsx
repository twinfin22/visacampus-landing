import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visacampus.org"),
  title: "VisaCampus",
  description:
    "엑셀과 수작업으로 관리하던 유학생 비자 업무, 이제 한 곳에서 해결하세요",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "VisaCampus",
    description:
      "엑셀과 수작업으로 관리하던 유학생 비자 업무, 이제 한 곳에서 해결하세요",
    url: "https://www.visacampus.org",
    siteName: "VisaCampus",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaCampus",
    description:
      "엑셀과 수작업으로 관리하던 유학생 비자 업무, 이제 한 곳에서 해결하세요",
  },
  other: {
    "theme-color": "#1E3A5F",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "VisaCampus",
                  url: "https://www.visacampus.org",
                  logo: "https://www.visacampus.org/logo.png",
                  email: "contact@visacampus.org",
                  description:
                    "대학 국제처를 위한 유학생 비자 관리 플랫폼",
                },
                {
                  "@type": "WebSite",
                  name: "VisaCampus",
                  url: "https://www.visacampus.org",
                  inLanguage: "ko",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
