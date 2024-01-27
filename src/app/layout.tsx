import '../styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import React, { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import RecoilRootProvider from '../components/layout/RecoilRootProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Loading = dynamic(() => import('./loading'), { ssr: false });

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mongbit-fe.vercel.app/'),
  title: '묘스트(MYOAST)',
  description: '묘스트와 함께하는 MBTI 심리테스트',
  verification: {
    google: 'iIuHEzQvMG-caxyWhHVcaDcqhg8C9SoFiLg5JFTQHJM',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'MBTI',
    'MBTI 연애',
    'MBTI 궁합',
    'MBTI 심리테스트',
    '무료 심테',
    'MBTI 검사',
    'mbti검사하기',
    'MBTI 무료',
    '심리테스트',
    '심테',
    '심심',
    '심심하다',
    '뭐하지',
    '연애 심테',
    '연애 심리테스트',
    '연애',
    '짝사랑',
    '궁합',
    'myoast',
    '묘스트',
    'INFP',
    'ISFP',
    'INFJ',
    'INTJ',
    'INTP',
    'ISTP',
    'ISTJ',
    'ISFJ',
    'ENFP',
    'ESFP',
    'ENFJ',
    'ENTJ',
    'ENTP',
    'ESTP',
    'ESTJ',
    'ESFJ',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="naver-site-verification" content="bd173df828ca4bb546689bea2053b978afda8110" />
        <script
          async
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.js"
          integrity="sha384-9Fs/wd1UNwjbBTnEsUvebAW7kzBWEOjRAXJvbaV+w+5kG1WXNXOui+4QV1KcRixH"
          crossOrigin="anonymous"
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_GA_ID});
  `,
          }}
        />
      </head>
      <body className={notoSansKr.className}>
        <RecoilRootProvider>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
