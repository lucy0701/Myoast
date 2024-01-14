import '../styles/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';

import Header from '@/components/layout/Header';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: '몽빗(MongBit)',
  description: 'MBTI 심리테스트 공작소',
  keywords: ['MBTI'],
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
        />
      </head>
      <body className={notoSansKr.className}>
        <Header />
        {props.children}
      </body>
    </html>
  );
}
