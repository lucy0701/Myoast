export interface Test {
  id: string;
  title: string;
  content: string;
  questions: [Questions];
  results: [Results];
  imageUrl: string;
  type: 'test';
  playCount: number;
}

export interface Results {
  id: string;
  result: string;
  title: string;
  content: string;
  imamgeUrl: string;
}

export interface Questions {
  id: string;
  index: number;
  question: string;
  answerPlus: string;
  answerMinus: string;
}

export interface TestAll {
  id: string;
  title: string;
  imageUrl: string;
  playCount: number;
  type: 'MBTI';
  likeCount: number;
  commentCount: number;
}

export interface Latest {
  testCoverDTOList: [{
    id: string;
    title: string;
    imageUrl: string;
    playCount: number;
    type: 'MBTI';
    likeCount: number;
    commentCount: number;
  }];
  hasNextPage: boolean;
}
