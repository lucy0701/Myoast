import jwtDecode from 'jwt-decode';

import { DecodedToken } from '@/types/login';
import { KAKAO_INIT_KEY, TOKEN_NAME, USER_INFO } from '@/constants/constant';

export function clearSessionStorage() {
  sessionStorage.setItem(TOKEN_NAME, '');
  sessionStorage.setItem(USER_INFO + 'memeberId', '');
  sessionStorage.setItem(USER_INFO + 'thumbnail', '');
  sessionStorage.setItem(USER_INFO + 'registDate', '');
  sessionStorage.setItem(USER_INFO + 'username', '');
}

export function getHeaders(): { Authorization?: string } | undefined {
  if (typeof sessionStorage === 'undefined') return;
  const token = sessionStorage.getItem(TOKEN_NAME);
  if (token) {
    return {
      Authorization: token,
    };
  }
  return undefined;
}

export function decodeToken() {
  if (typeof sessionStorage === 'undefined') return { state: false };
  const token = sessionStorage.getItem(TOKEN_NAME);
  if (!token) {
    return {
      state: false,
    };
  }
  const decodeToken: DecodedToken = jwtDecode(token);
  const expiration = decodeToken.exp;
  const expirationTime = new Date(expiration * 1000);
  const currentTime = new Date();

  if (expirationTime < currentTime) {
    return {
      state: false,
    };
  } else {
    return {
      state: true,
      role: decodeToken.auth,
    };
  }
}

export const kakaoInit = () => {
  if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_INIT_KEY);
};
