const KAKAO_REST_API_KEY = '34b648a3e655508c8acf86b0d143c130';
const KAKAO_REDIRECT_URI = 'https://mongbit-fe.vercel.app';
// const KAKAO_REDIRECT_URI_DEV = "http://localhost:3000";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}/login/oauth2/kakao/code&response_type=code`
