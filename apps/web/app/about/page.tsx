import { DOMAIN } from '@/constants/constant';
import About from '@/containers/about';

export async function generateMetadata() {
  const url = `${DOMAIN}/about`;
  const title = '묘스트';
  const description = '묘스트를 소개합니다';
  const imageUrl = `${DOMAIN}/about/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      description,
      type: 'website',
      title,
      url,
      images: [
        {
          url: imageUrl,
          alt: 'og_image',
        },
      ],
    },
  };
}

export default function Page() {
  return <About />;
}
