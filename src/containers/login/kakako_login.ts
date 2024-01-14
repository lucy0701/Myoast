const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;
// const KAKAO_REDIRECT_URI_DEV = "http://localhost:3000";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}/login/oauth2/kakao/code&response_type=code`