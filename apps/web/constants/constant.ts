// Domain
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;
export const DOMAIN_BE_PROD = process.env.NEXT_PUBLIC_BE_URL as string;
export const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY as string;
export const KAKAO_INIT_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY as string;

//OG Image url
export const OG_STANDARD_IMAGE =
  'https://i.ibb.co/Hp16TzN/Screenshot-2024-01-28-20-51-11-60g-Wu-U.png';
export const OG_MBTI_TEST_IMAGE =
  'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png';

// Main page Test
// TODO: 고정 테스트 말고 인기순 등으로 개선
export const MAIN_PAGE_TEST_IMG = '649a7bccaa04db61384808c5';
export const MAIN_PAGE_TEST_TITLE = '신속하고 아마도 정확한 퀵 MBTI!';

// coupang
export const COUPANG_VISIT = 'mbCoupangVisitDate';

// Type of the page
export const TYPE_MYPAGE = 'mypage';
export const TYPE_LOGIN = 'login';

// Latest
export const LATEST_PAGE = 0;
export const LATEST_SIZE = 6;
