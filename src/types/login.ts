export interface DecodedToken {
  auth: string;
  exp: number;
  sub: string;
}

export interface KakaoLoigin {
  memberId: string;
  username: string;
  thumbnail: string;
  registDate: string;
}

export interface LoginTracker {
  id: string;
  memberId: string;
  loginDate: string;
}
