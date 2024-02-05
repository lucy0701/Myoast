export interface memberTestResultData {
  memberTestResultDTOList: [MemberTestResultDTOList];
  hasNextPage: number;
}

export interface MemberTestResultDTOList {
  testId: string;
  testResultId: string;
  testDate: string;
  title: string;
  content: string;
  imageUrl: string;
}
export interface TestResultFromMyPage {
  testId: string;
  result: string;
  title: string;
  content: string;
  imageUrl: string;
  likeCount: number;
}
