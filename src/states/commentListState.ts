import { atom } from 'recoil';

import { CommentDTO, } from '@/types/comment';

export const commentListState = atom<CommentDTO[]>({
  key: 'commentListState',
  default: [],
});
