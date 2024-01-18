import { KAKAO_AUTH_URL_DEV, KAKAO_INIT_KEY } from '@/constants/constant';
// import { KAKAO_AUTH_URL, KAKAO_INIT_KEY } from '@/constants/constant';


declare global {
  interface Window {
    Kakao: any;
  }
}

export default function setKakaoLogin() {
  if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_INIT_KEY);
  window.location.href = KAKAO_AUTH_URL_DEV;
  // window.location.href = KAKAO_AUTH_URL;
}