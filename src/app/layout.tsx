import '../styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';

import RecoilRootProvider from '../components/layout/RecoilRootProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '몽빗(MongBit)',
  description: 'MBTI 심리테스트 공작소',
  keywords: [
    'MBTI',
    'MBTI 연애',
    'MBTI 궁합',
    'MBTI 심리테스트',
    '무료 심테',
    'MBTI 검사',
    'MBTI 무료',
    '심리테스트',
    '연애 심테',
    '연애 심리테스트',
    'MongBit',
    '몽빗',
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
      <body className={notoSansKr.className}>
        <RecoilRootProvider>
          <Header />
          {children}
          <Footer />
        </RecoilRootProvider>
        <script
          async
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.js"
          integrity="sha384-9Fs/wd1UNwjbBTnEsUvebAW7kzBWEOjRAXJvbaV+w+5kG1WXNXOui+4QV1KcRixH"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
