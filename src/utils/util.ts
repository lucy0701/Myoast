import jwtDecode from 'jwt-decode';
import { useRecoilState } from 'recoil';

import { DecodedToken } from '@/types/login';
import { MEMBER_ID, REGIST_DATE, THUMBNAIL, TOKEN_NAME, USER_INFO, USER_NAME } from '@/constants/sessionStorage';
import { isLoginState } from '@/states/isLoignState';

import SessionStorage from './SessionStorage';

export function clearSessionStorage() {
  if (typeof window !== 'undefined') {
    SessionStorage.setItem(TOKEN_NAME, '');
    SessionStorage.setItem(USER_INFO + MEMBER_ID, '');
    SessionStorage.setItem(USER_INFO + THUMBNAIL, '');
    SessionStorage.setItem(USER_INFO + REGIST_DATE, '');
    SessionStorage.setItem(USER_INFO + USER_NAME, '');
  }
}

export function getHeaders(): { Authorization?: string } | undefined {
  if (typeof SessionStorage === 'undefined') return;
  const token = SessionStorage.getItem(TOKEN_NAME);
  if (token) {
    return {
      Authorization: token,
    };
  }
  return undefined;
}

export function decodeToken() {
  if (typeof SessionStorage === 'undefined') return { state: false };
  const token = SessionStorage.getItem(TOKEN_NAME);
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
