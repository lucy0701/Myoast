import { TOKEN_NAME, USER_INFO } from '@/constants/constant';

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
