import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    images: [
      {
        url: 'https://ncpc.co.kr/og-image.png',
        width: 1200,
        height: 630,
        alt: '문화진흥센터 나주',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '문화진흥센터 나주',
    description: '지역문화의 미래를 만들어갑니다',
    images: ['https://ncpc.co.kr/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://ncpc.co.kr',
  },
  robots: 'index, follow',
  verification: {
    other: {
      'naver-site-verification': 'naver-site-verification.html',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "문화진흥센터 나주",
    "alternateName": "NCPC",
    "url": "https://ncpc.co.kr",
    "logo": "https://ncpc.co.kr/logo.png",
    "description": "나주 문화진흥센터는 지역 문화예술의 발전과 시민의 문화적 삶의 질 향상을 위해 노력합니다",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "나주시",
      "addressRegion": "전라남도",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@ncpc.co.kr",
      "contactType": "customer service",
      "availableLanguage": "Korean"
    },
    "openingHours": "Mo-Fr 09:00-22:00, Sa-Su 09:00-17:00"
  };

  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <link rel="canonical" href="https://ncpc.co.kr" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
