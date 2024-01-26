import { DOMAIN } from '@/constants/constant';

import Main from '../containers/main';

export async function generateMetadata() {
  const url = `${DOMAIN}`;
  const title = '몽빗 [무료 | MBTI 심리테스트]';
  let description = 'MBTI 심리테스트 공작소';
  let imageUrl = `${DOMAIN}/common/opengraph-image`;

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
// 패치
export default function Page() {
  return <Main />;
}
