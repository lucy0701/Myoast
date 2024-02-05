import { DOMAIN, DOMAIN_FE_DEV } from "./constant";

export const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
export const KAKAO_INIT_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${DOMAIN}/login/oauth2/kakao/code&response_type=code`;
export const KAKAO_AUTH_URL_DEV = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${DOMAIN_FE_DEV}/login/oauth2/kakao/code&response_type=code`;