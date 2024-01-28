import { DOMAIN } from '@/constants/constant';
import DevInfo from '@/containers/devInfo';

export async function generateMetadata() {
  const url = `${DOMAIN}/devinfo`;
  const title = '묘스트 [무료 | MBTI 심리테스트]';
  let description = '묘스트와 함께 하는 MBTI 심리테스트';
  let imageUrl = `${DOMAIN}/devinfo/opengraph-image`;

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
  return <DevInfo />;
}
