import { DOMAIN } from '@/constants/constant';
import About from '@/containers/about';

export async function generateMetadata() {
  const url = `${DOMAIN}/about`;
  const title = '묘스트 [묘스트 소개]';
  let description = '묘스트를 소개합니다';
  let imageUrl = `${DOMAIN}/about/opengraph-image`;

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
