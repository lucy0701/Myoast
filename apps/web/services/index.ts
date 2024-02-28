import axios, { AxiosAdapter } from 'axios';
import { setupCache } from 'axios-cache-adapter';


const cache = setupCache ({
  maxAge: 15 * 60 * 1000,
})

export const apiBe = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api/`,
  timeout: 3_000,
  withCredentials: true,
});

// 캐시 사용
export const apiBeWithCache = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api/`,
  timeout: 3_000,
  withCredentials: true,
  adapter: cache.adapter as AxiosAdapter,
});

apiBe.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
 