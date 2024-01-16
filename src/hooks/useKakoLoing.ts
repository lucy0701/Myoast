import axios from 'axios';
import { useState } from 'react';

import { DOMAIN_FE_DEV, KAKAO_REST_API_KEY } from '@/constants/constant';

const useKakaoLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = async (code: string | string[]) => {
    const options = {
      method: 'POST',
      url: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${DOMAIN_FE_DEV}/login/oauth2/kakao/code&code=${code}`,
      data: code,
    };

    const response = await axios(options).catch((err) => {
      alert(err);
      setIsLoading(false);
    });
    if (response?.status !== 200) {
      setIsLoading(false);
      return;
    }
    window.Kakao.Auth.setAccessToken(response?.data?.access_token);
  };
  return { isLoading, handleLogin };
};
export default useKakaoLogin;
