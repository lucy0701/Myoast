import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { OG_STANDARD_IMAGE, TOKEN_NAME, USER_INFO } from '@/constants/constant';

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

export const getTestData = async (url: string): Promise<any> => {
  try {
    const headers = getHeaders();
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return OG_STANDARD_IMAGE;
  }
};

export function setUTMParameter(router: AppRouterInstance) {
  const userAgent = navigator.userAgent.toLowerCase();
  let utmSource = '';

  if (userAgent.includes('facebook')) {
    utmSource = 'facebook';
  } else if (userAgent.includes('kakaotalk')) {
    utmSource = 'kakao';
  } else if (userAgent.includes('twitter')) {
    utmSource = 'twitter';
  } else if (userAgent.includes('instagram')) {
    utmSource = 'instagram';
  } else {
    utmSource = 'other';
  }

  function getUtmUrl() {
    const param = `/?utm_source=${utmSource}`;
    // 새로고침 시 UTM 파라미터가 늘어나지 않도록 조치
    if (!window.location.href.includes('utm_')) return window.location.href + param;
    return window.location.href;
  }
  router.push(getUtmUrl());
}
