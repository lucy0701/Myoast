export interface Test {
  id: string;
  title: string;
  content: string;
  questions: [Question];
  results: [TestResultData];
  imageUrl: string;
  playCount: number;
  type: ['MBTI', 'PCL_R'];
}

export interface TestResultData {
  id: string;
  result: string;
  title: string;
  content: string;
  imageUrl: string;
}

export interface Question {
  id: string;
  index: number;
  question: string;
  answerPlus: string;
  answerMinus: string;
}

export interface TestCover {
  id: string;
  title: string;
  imageUrl: string;
  playCount: number;
  type: ['MBTI', 'PCL_R'];
  likeCount: number;
  commentCount: number;
}

export interface TestCoverResponse {
  testCoverDTOList: [TestCover];
  hasNextPage: boolean;
}