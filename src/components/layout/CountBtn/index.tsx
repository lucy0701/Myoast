import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import { useLike } from '@/hooks/useLike';
import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';
import { useShare } from '@/hooks/useShare';
import { shareToKakaotalkResult, shareTokakaotalkTest } from '@/utils/kakaoShare';
import { Test, TestResultData } from '@/types/test';
import { TYPE_BOTTOM_BTN } from '@/constants/commonType';
import { isLoginState } from '@/states/isLoignState';
import { decodeToken } from '@/utils/util';

import styles from './index.module.css';
import Button from '@/components/common/Button';

interface Props {
  testId: string;
  testData: Test | TestResultData;
  type: 'testMain' | 'tsetResult';
}

export default function CountBtn(props: Props) {
  const { testData, testId, type } = props;
  const { likeCountData, isLikeCount, getLikeCountData, getIsLikeCountData, postLikeCountData, deleteLikeCountData } =
    useLike();
  const { postShareData } = useShare();
  const [linkCopyCommand, setLinkCopyCommand] = useState('링크 복사');
  const [copyLink, setCopyLink] = useState('');

  const router = useRouter();
  const memberId = SessionStorage.getItem(USER_INFO + MEMBER_ID);

  useEffect(() => {
    getLikeCountData(testId);
    setCopyLink(window.location.href);
  }, []);

  useEffect(() => {
    if (memberId) {
      getIsLikeCountData(testId, memberId);
    }
  }, [memberId]);

  const handleLikeBtn = () => {
    if (memberId && !isLikeCount) {
      postLikeCountData(testId, memberId);
    } else if (memberId && isLikeCount) {
      deleteLikeCountData(testId, memberId);
    } else if (!memberId) {
      router.push('/login');
    }
  };

  const onClickcoptURLClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyLink);
      setLinkCopyCommand('복사 완료');
      if (memberId) postShareData(testId, memberId, 'LINK');
      setTimeout(() => {
        setLinkCopyCommand('링크 복사');
      }, 3000);
    } catch (err) {
      alert('복사 실패');
    }
  };

  const onClickTestShareBtn = () => {
    if (!decodeToken().state) router.push('/login');
    if (decodeToken().state && memberId) {
      shareTokakaotalkTest(testData.title, testData.imageUrl, testId, likeCountData);
      postShareData(testId, memberId, 'KAKAO');
    }
  };

  const onClickResultShareBtn = () => {
    if (!decodeToken().state) router.push('/login');
    if (decodeToken().state && memberId) {
      shareToKakaotalkResult(testData.title, testData.imageUrl, testId, likeCountData, testData.id);
      postShareData(testId, memberId, 'KAKAO');
    }
  };

  const onClickReplay = () => {
    router.push(`/test/main/${testId}`);
  };

  if (type === 'testMain')
    return (
      <div className={styles.wrap}>
        <div className={styles.btnWarp}>
          <div className={styles.btnBox}>
            <button className={styles.linkCopyBtn} onClick={onClickcoptURLClipboard} />
            <p>{linkCopyCommand}</p>
          </div>
          <div className={styles.btnBox}>
            <button className={isLikeCount ? styles.onLikeBtn : styles.offLikeBtn} onClick={() => handleLikeBtn()} />
            <p>추천</p>
            <p className={styles.likeCnt}>{likeCountData}</p>
          </div>
          <div className={styles.btnBox}>
            <button className={styles.shareBtn} onClick={onClickTestShareBtn} />
            <p>공유 하기</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className={styles.wrap}>
      <div className={styles.btnWarp}>
        <div className={styles.btnBox}>
          <button className={styles.linkCopyBtn} onClick={onClickcoptURLClipboard} />
          <p>{linkCopyCommand}</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.replayBtn} onClick={onClickReplay} />
          <p>다시 하기</p>
        </div>
        <div className={styles.btnBox}>
          <button className={isLikeCount ? styles.onLikeBtn : styles.offLikeBtn} onClick={() => handleLikeBtn()} />
          <p>추천</p>
          <p className={styles.likeCnt}>{likeCountData}</p>
        </div>
      </div>
      <div className={styles.buttonBtnWarp}>
        <Button skin={TYPE_BOTTOM_BTN} onClick={onClickResultShareBtn}>
          결과 공유 하기
        </Button>
      </div>
    </div>
  );
}
