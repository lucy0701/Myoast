import { DOMAIN } from '@/constants/constant';
import { KAKAO_INIT_KEY } from '@/constants/kakao';

export const shareTokakaotalkTest = (title: string, imageUrl: string, testId: string, likeCnt: number) => {
  if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_INIT_KEY);
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '심리테스트는 몽빗!',
      description: title,
      imageUrl: imageUrl,
      link: {
        mobileWebUrl: `${DOMAIN}/test/main/${testId}`,
        webUrl: `${DOMAIN}/test/main/${testId}`,
      },
    },
    social: {
      likeCount: likeCnt,
    },
    buttons: [
      {
        title: '테스트 하러 가기',
        link: {
          mobileWebUrl: `${DOMAIN}/test/main/${testId}`,
          webUrl: `${DOMAIN}/test/main/${testId}`,
        },
      },
    ],
  });
};

export const shareToKakaotalkResult = (
  title: string,
  imageUrl: string,
  testId: string,
  likeCnt: number,
  resultid: string,
) => {
  if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_INIT_KEY);
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '나의 결과는!',
      description: title,
      imageUrl: imageUrl,
      link: {
        mobileWebUrl: `${DOMAIN}/record/${testId}/${resultid}`,
        webUrl: `${DOMAIN}/record/${testId}/${resultid}`,
      },
    },
    social: {
      likeCount: likeCnt,
    },
    buttons: [
      {
        title: '테스트 하기',
        link: {
          mobileWebUrl: `${DOMAIN}/test/main/${testId}`,
          webUrl: `${DOMAIN}/test/main/${testId}`,
        },
      },
      {
        title: '결과 보기',
        link: {
          mobileWebUrl: `${DOMAIN}/record/${testId}/${resultid}`,
          webUrl: `${DOMAIN}/record/${testId}/${resultid}`,
        },
      },
    ],
  });
};
