import { DOMAIN } from '@/constants/constant';
import { getTestListAPI } from '@/services/test';

export const GET = async () => {
  const tests = await getTestListAPI().then((res) => res.data);

  return new Response(
    `<?xml version="1.0"?>
        <rss version="2.0">
           <channel>
              <title> 묘스트 [무료 | MBTI 심리테스트 ]</title>
              <link>${DOMAIN}</link>
              <description> 묘스트와 함께 하는 MBTI 심리테스트 </description>
              <language>ko-KR</language>
              <pubDate>${new Date().toString()}</pubDate>
              <lastBuildDate>${new Date().toString()}</lastBuildDate>
              ${tests
                .map(
                  (test) =>
                    `<item>
                    <title>${test.title}</title>
                    <link>${`https://myoast.vercel.app/test/main/${test.id}`}</link>
                  </item>`,
                )
                .join('')}
           </channel>
        </rss>`,
  );
};
