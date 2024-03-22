import { ImageResponse } from 'next/og';
import Image from 'next/image';

import { OG_STANDARD_IMAGE } from '@/constants/constant';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const runtime = 'edge';

export default async function OgImage() {
  try {
    const imgUrl = OG_STANDARD_IMAGE;

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'white',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={imgUrl}
            style={{
              objectFit: 'cover',
            }}
            alt="og_imgage"
          />
        </div>
      ),
      {
        width: 1200,
        height: 600,
      },
    );
  } catch (err) {
    return null;
  }
}
