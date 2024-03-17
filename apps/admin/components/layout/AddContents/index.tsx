'use client';

import styles from './index.module.css';
import { Button, Input, Select } from 'antd';
import { getContentsSelectOptions } from '@/utils/getSelectOption';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { testInfoState } from '@/states/testInfoState';
import { CONTENT, TITLE } from '@/constants/addContent';
import TextArea from 'antd/es/input/TextArea';
import { isMbtiAllTestDataState } from '@/states/testDataState';
import { useAddMbti } from '@/hooks/useAddMbti';

type ContentType = 'title' | 'content';

export default function AddContents({ children }: React.PropsWithChildren) {
  const setTestInfo = useSetRecoilState(testInfoState);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [selectedType, setSelectedType] = useState('');
  const isMbtiAllTestData = useRecoilValue(isMbtiAllTestDataState);

  const { postImageUpload } = useAddMbti();


  const router = useRouter();

  // 컨텐츠 추가 시, 배열에 추가
  const selectOptions = [getContentsSelectOptions('mbti', 'MBTI', 3)];

  const onSelectChange = (value: string) => {
    setSelectedType(value);
    const maxPage =
      selectOptions.find((option) => option.value === value)?.page || 0;
    setMaxPage(maxPage);
    router.push(`/contents/add/${value}/${page}`);
  };

  const onChange = (value: string, type: ContentType) => {
    setTestInfo((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const onClickPrevBtn = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      router.push(`/contents/add/${selectedType}/${prevPage}`);
    }
  };

  const onClickNextBtn = () => {
    if (page < maxPage) {
      const nextPage = page + 1;
      setPage(nextPage);
      router.push(`/contents/add/${selectedType}/${nextPage}`);
    }
  };

  const onClickSave = () => {
    postImageUpload();
  };

  return (
    <div className={styles.wrap}>
      <h2 style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>
        Add Content Info
      </h2>
      <div className={styles.testInfo}>
        <div className={styles.inputWarp}>
          <div className={styles.titleWarp}>
            <div className={styles.selection}>
              <Select
                defaultValue={selectedType ? selectedType : '선택'}
                style={{ width: 120 }}
                onChange={onSelectChange}
                options={selectOptions}
              />
            </div>
            <p>Title</p>
            <Input
              placeholder={`Enter ${selectedType} test tilte.`}
              maxLength={500}
              // count={{
              //   show: true,
              //   max: 5,
              // }}
              allowClear
              onChange={(e) => onChange(e.target.value, TITLE)}
            />
          </div>
          <div className={styles.contentsWarp}>
            <TextArea
              placeholder={`Enter ${selectedType} test contents.`}
              maxLength={500}
              // count={{
              //   show: true,
              //   max: 500,
              // }}
              allowClear
              onChange={(e) => onChange(e.target.value, CONTENT)}
            />
          </div>
        </div>
      </div>
      <div className={styles.TestContents}>{children}</div>
      <div className={styles.btnBox}>
        {page > 1 && (
          <Button style={{ marginRight: 15 }} onClick={onClickPrevBtn}>
            이전
          </Button>
        )}
        {page === maxPage ? (
          <Button
            style={{ backgroundColor: '#FF9900' }}
            onClick={onClickSave}
            disabled={!isMbtiAllTestData}>
            저장
          </Button>
        ) : (
          <Button disabled={!selectedType} onClick={onClickNextBtn}>
            다음
          </Button>
        )}
      </div>
    </div>
  );
}
