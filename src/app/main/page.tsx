import Main from '@/containers/main';

export async function generateMetadata() {
  const url = `/main`;
  const title = '몽빗(MongBit)';
  let description = 'MBTI 심리테스트 공작소';
  let imageUrl = `/main/opengraph-image`;

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
  return <Main />;
}