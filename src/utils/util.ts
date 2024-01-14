import jwtDecode from 'jwt-decode';

import { TOKEN_NAME, USER_INFO } from '@/constants/constant';

export function clearSessionStorage() {
  sessionStorage.setItem(TOKEN_NAME, '');
  sessionStorage.setItem(USER_INFO + 'memeberId', '');
  sessionStorage.setItem(USER_INFO + 'thumbnail', '');
  sessionStorage.setItem(USER_INFO + 'registDate', '');
  sessionStorage.setItem(USER_INFO + 'username', '');
}

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

// 토큰 타입
interface DecodedToken {
  auth: string;
  exp: number;
}
// 토큰 딩 만료시간 계산
export function decodeToken() {
  if (typeof sessionStorage === 'undefined') return;

  const token = sessionStorage.getItem(TOKEN_NAME);
  if (!token) {
    return {
      state: false,
    };
  }
  // 토큰 읽기 :jwtDecode는 검증X, 데이터만 읽음
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
      role: decodeToken.auth,
    };
  }
}
