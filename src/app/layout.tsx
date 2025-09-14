import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "문화진흥센터 나주 | 지역문화의 미래를 만들어갑니다",
  description: "나주 문화진흥센터는 지역 문화예술의 발전과 시민의 문화적 삶의 질 향상을 위해 노력합니다",
  keywords: "나주, 문화진흥센터, 문화예술, 지역문화, 문화프로그램, NCPC",
  metadataBase: new URL('https://ncpc.co.kr'),
  openGraph: {
    title: "문화진흥센터 나주",
    description: "지역문화의 미래를 만들어갑니다",
    type: "website",
    url: 'https://ncpc.co.kr',
    siteName: '문화진흥센터 나주',
    locale: 'ko_KR',
  },
  alternates: {
    canonical: 'https://ncpc.co.kr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
