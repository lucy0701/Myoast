'use client';

import styles from './index.module.css';
import { Button, Input, Select, Upload } from 'antd';
import { getContentsSelectOptions } from '@/utils/getSelectOption';
import { PlusOutlined } from '@ant-design/icons';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { testInfoState, testTypeState } from '@/states/testInfoState';

const { TextArea } = Input;

export default function AddContents({ children }: React.PropsWithChildren) {
  const setTestInfo = useSetRecoilState(testInfoState);
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useRecoilState<{ type: string }>(
    testTypeState,
  );
  const router = useRouter();

  const handleChange = (value: string) => {
    setSelectedType({ type: value });
    router.push(`/contents/add/${value}/${page}`);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'title' | 'content',
  ) => {
    const { value } = e.target;
    setTestInfo((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const onClickPrevBtn = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      router.push(`/contents/add/${selectedType.type}/${prevPage}`);
    }
  };

  const onClickNextBtn = () => {
    if (page < 2) {
      const nextPage = page + 1;
      setPage(nextPage);
      router.push(`/contents/add/${selectedType.type}/${nextPage}`);
    }
  };

  // 컨텐츠 추가 시, 배열에 추가
  const selectOptions = [getContentsSelectOptions('mbti', 'MBTI')];

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
                defaultValue={selectedType.type ? selectedType.type : '선택'}
                style={{ width: 120 }}
                onChange={handleChange}
                options={selectOptions}
              />
            </div>
            <p>Title</p>
            <Input
              placeholder={`Enter ${selectedType.type} test tilte.`}
              allowClear
              onChange={(e) => onChange(e, 'title')}
            />
          </div>
          <div className={styles.contentsWarp}>
            <TextArea
              placeholder={`Enter ${selectedType.type} test contents.`}
              allowClear
              onChange={(e) => onChange(e, 'content')}
            />
          </div>
        </div>
        <div>
          <Upload
            action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
            listType='picture-card'
            maxCount={1}>
            <button style={{ border: 0, background: 'none' }} type='button'>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </div>
      </div>
      <div className={styles.TestContents}>{children}</div>
      <div className={styles.btnBox}>
        {page > 1 && (
          <Button style={{ marginRight: 15 }} onClick={onClickPrevBtn}>
            이전
          </Button>
        )}
        {page === 2 ? (
          <Button
            style={{ backgroundColor: '#FF9900' }}
            onClick={onClickNextBtn}>
            저장
          </Button>
        ) : (
          <Button disabled={!selectedType.type} onClick={onClickNextBtn}>
            다음
          </Button>
        )}
      </div>
    </div>
  );
}
