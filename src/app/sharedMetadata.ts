import { Metadata } from 'next';

interface Props {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  keywords: string[];
}

export const getMetaData = ({ url, title, description, imageUrl, keywords }: Props): Metadata => ({
  title,
  description,
  keywords,
  openGraph: {
    description,
    type: 'website',
    title,
    url,
    images: [
      {
        type: 'image,jpeg',
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        alt: title, // 이 부분에서 "alt:title"을 "alt: title"로 수정
      },
    ],
  },
});
