import { apiBe, apiBeImag } from '.';
import { TOKEN_NAME } from '@/constants/sessionStorage';
// import { getHeaders } from '@/utils/util';

type HeaderPorps = {
  'Content-Type': string;
  Authorization?: string | null;
};

//   const headers = getHeaders();

// const headers: HeaderPorps = {
//   'Content-Type': 'multipart/form-data',
//   Authorization:
//     typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_NAME) : null,
// };

export const postImageUplodAPI = (data: FormData) => {
  const headers: HeaderPorps = {
    'Content-Type': 'multipart/form-data',
    Authorization:
      typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_NAME) : null,
  };
  apiBeImag.post(`upload`, data, {
    headers,
  });
};

export const postAddMbtiTestAPI = (data: string) => {
  const headers: HeaderPorps = {
    'Content-Type': 'application/json',
    Authorization:
      typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_NAME) : null,
  };
  apiBe.post(`v1/tests/test`, data, { headers });
};
