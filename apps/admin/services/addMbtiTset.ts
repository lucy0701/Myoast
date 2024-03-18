import { getTokenFromSessionStorage } from '@/utils/util';
import { apiBe, apiBeImag } from '.';

const creatHeaders = (contnetType: string) => {
  const token = getTokenFromSessionStorage();
  return {
    'Content-Type': contnetType,
    Authorization: token,
  };
};

export const postImageUplodAPI = (data: FormData) => {
  const headers = creatHeaders('multipart/form-data');
  apiBeImag.post(`upload`, data, { headers });
};

export const postAddMbtiTestAPI = (data: string) => {
  const headers = creatHeaders('application/json');
  apiBe.post(`v1/tests/test`, data, { headers });
};
