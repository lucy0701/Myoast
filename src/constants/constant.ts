// Domain
export const DOMAIN = 'https://mongbit.vercel.app';
export const DOMAIN_BE_DEV = 'https://mongbit-willneiman.koyeb.app';
export const DOMAIN_BE_PROD = 'https://mongbit.site';

// Type of the button
export const TYPE_START_BTN = 'startBtn';
export const TYPE_BOTTOM_BTN = 'bottomBtn';
export const TYPE_ANSWER_BTN = 'answerBtn';
export const TYPE_BACK_BTN = 'backBtn';
export const TYPE_COMMENT_BTN = 'comment';

// count
export const TYPE_ALL_CNT = 'allCnt';
export const TYPE_play_CNT = 'playCnt';
export const TYPE_LIKE_CNT = 'likeCnt';
export const TYPE_COMMENT_CNT = 'commentCnt';

// test card
export const TEST_CARD_SIZE_S = 'small';
export const TEST_CARD_SIZE_M = 'medium';
export const TEST_CARD_SIZE_L = 'large';
export const TYPE_TEST_CARD = 'testCard';
export const TYPE_MY_TEST_CARD = 'myTestCade';

// Storage
export const TOKEN_NAME = 'mongBitToken';
export const USER_INFO = 'mongBit';
export const COUPANG_VISIT = 'mbCoupangVisitDate';

//OG Image url
export const OG_STANDARD_IMAGE = 'https://i.ibb.co/mvVsyTr/Frame-17.png';
export const OG_RANDOM_IMAGE = 'https://i.ibb.co/N9ntw7s/og-random.png';
export const OG_TEST_RESULT = 'https://i.ibb.co/tQWt0dF/image.png';
export const OG_MBTI_TEST_IMAGE = 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png';

// Type of the page
export const TYPE_MYPAGE = 'mypage';
export const TYPE_LOGIN = 'login';

// kakao
export const KAKAO_REDIRECT_URI_DEV = 'http://localhost:3000';
export const KAKAO_REST_API_KEY = '4d714bede2cc5137d16d85362b73db5a';
export const KAKAO_INIT_KEY = '987c3a9f0e1aa3ff5ef1dc94ee19d648';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${DOMAIN}/login/oauth2/kakao/code&response_type=code`;

export const KAKAO_AUTH_URL_DEV = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI_DEV}/login/oauth2/kakao/code&response_type=code`;
