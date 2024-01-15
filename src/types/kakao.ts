declare global {
  interface Window {
    Kakao: any;
  }
}

// 토큰 타입
export interface DecodedToken {
  iss: string; //인증기관
  aud: string; //앱키
  sub: string; //사용자 번호
  iat: string; //토큰 발급& 갱신 시각
  exp: number; // 토큰 만료
  auth_time: number; // 사용자 카카오 로그인 인증 완료 시간
  nonce: string; //인가 코드 받기 요청시 전달한 nonce 동일값 (ID 토큰 유효성 검증 시 사용)
  nickname: string;
  picture: string;
}
