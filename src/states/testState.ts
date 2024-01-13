import { atom } from 'recoil';

import { Test } from '@/types/test';

export const testState = atom<Test>({
  key: 'testState',
  default:{
    id: '',
    title: '',
    content: '',
    questions: [{
        id: '',
        index: 0,
        question: '',
        answerPlus: '',
        answerMinus: '',
    }],
    results: [{
        id: '',
        result: '',
        title:'',
        content: '',
        imamgeUrl: '',
    }],
    imageUrl: '',
    type: 'test',
    playCount: 0,
},
});
