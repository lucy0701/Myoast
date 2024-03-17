import { MbtiTest } from '@/types/test';
import { atom } from 'recoil';

export const mbtiTestDataState = atom<MbtiTest>({
  key: 'testDataState',
  default: {
    // id: '',
    title: '',
    content: '',
    questions: [],
    results: [],
    // createDate: '',
    imageUrl: '',
    // playCount: 0,
    // type: 'MBTI',
  },
});

export const isMbtiAllTestDataState = atom({
  key: 'mbtiImageAllState',
  default: false,
})