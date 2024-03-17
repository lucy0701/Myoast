import {
  deleteContentAPI,
  getCommentCountAPI,
  getContentAPI,
  getContentListAPI,
  getLinkCountAPI,
  getSharesCountAPI,
} from '@/services/contents';
import { ContentList } from '@/types/test';
import { useState } from 'react';

export const useContents = () => {
  const [contentsList, setContentsList] = useState<ContentList[]>([]);

  const getContentList = async () => {
    try {
      const contentIdList = await getContentListAPI();
      if (contentIdList) {
        const contentPromises = contentIdList.data.map(async (content) => {
          const [contentDetail, sharesCount, linkCount, commentsCount] =
            await Promise.all([
              getContentAPI(content.id),
              getSharesCountAPI(content.id),
              getLinkCountAPI(content.id),
              getCommentCountAPI(content.id),
            ]);
          return {
            id: content.id,
            title: content.title,
            imageUrl: content.imageUrl,
            createDate: contentDetail.data.createDate,
            playCount: content.playCount,
            likeCount: content.likeCount,
            sharesCount: sharesCount.data,
            linkCount: linkCount.data,
            commentsCount: commentsCount.data,
          };
        });
        const newContentsList = await Promise.all(contentPromises);
        setContentsList(newContentsList);
      }
    } catch (error) {
      console.error('리스트 불러오기 실패', error);
    }
  };

  const deleteContent = async (id: string) => {
    try {
      await deleteContentAPI(id);
      getContentList();
    } catch (error) {
      console.error('컨텐츠 삭제 실패', error);
    }
  };

  return {
    getContentList,
    contentsList,
    deleteContent,
  };
};
