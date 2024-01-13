import axios from "axios";

// 브라우저 -> 백엔드 서버 or 프론트 서버 -> 백엔드 서버
// 프론트엔드 서버에서 사용할 때는 쿠키가 포함될 수있음
export const apiBe = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BE_URL}/api/`,
    timeout: 3_000,
    withCredentials: true,
});

apiBe.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
)