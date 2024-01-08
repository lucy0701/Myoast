import '../styles/globals.css';
import { Noto_Sans_KR, Roboto_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});
const roboto_mono = Roboto_Mono({
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
      <body className={roboto_mono.className}>{props.children}</body>
    </html>
  );
}
