import jwtDecode from 'jwt-decode';

import { DecodedToken } from '@/types/kakao';
import { KAKAO_INIT_KEY, TOKEN_NAME, USER_INFO } from '@/constants/constant';

export function clearSessionStorage() {
  sessionStorage.setItem(TOKEN_NAME, '');
  sessionStorage.setItem(USER_INFO + 'memeberId', '');
  sessionStorage.setItem(USER_INFO + 'thumbnail', '');
  sessionStorage.setItem(USER_INFO + 'registDate', '');
  sessionStorage.setItem(USER_INFO + 'username', '');
}

// export function setSessionStorage(response) {
//   sessionStorage.setItem(TOKEN_NAME, response.headers['authorization']);
//   sessionStorage.setItem(USER_INFO + 'memeberId', response.data.memberId);
//   sessionStorage.setItem(USER_INFO + 'username', response.data.username);
//   sessionStorage.setItem(USER_INFO + 'thumbnail', response.data.thumbnail);
//   sessionStorage.setItem(USER_INFO + 'registDate', response.data.registDate);
// }
// session에 정보가 있을 경우, 토큰저장. 서버에 요청시 함께 전송
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
  const decodeToken = jwtDecode(token) as DecodedToken;
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
      role: decodeToken.sub,
    };
  }
}

export const kakaoInit = () => {
  if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_INIT_KEY);
};
