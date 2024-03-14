export type MbtiTest = {
  id?: string;
  title: string;
  content: string;
  questions: MbtiQuestions[];
  results: MbtiResults[];
  createDate?: string;
  imageUrl: string;
  playCount?: number;
  type?: 'MBTI';
};

export type MbtiQuestions = {
  id?: string;
  index: number;
  question: string;
  answerPlus: string;
  answerMinus: string;
};

export type MbtiResults = {
  id?: string;
  result: string;
  title: string;
  content: string;
  imageUrl: string;
};
