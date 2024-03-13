'use client';

import styles from './index.module.css';
import { Button, Input, Select } from 'antd';
import { getContentsSelectOptions } from '@/utils/getSelectOption';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { TextArea } = Input;

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  console.log(e);
};

export default function AddContents({ children }: React.PropsWithChildren) {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const router = useRouter();

  const handleChange = (value: string) => {
    setSelectedValue(value);
    router.push(`/contents/add/${value}/question`);
  };

  const onClickNextBtn = (value: string) => {
    router.push(`/contents/add/${value}/result`);
  };

  // const onClickPrevBtn = (value: string) => {
  //   router.push(`/contents/add/${value}/question`)
  // }

  const selectOptions = [getContentsSelectOptions('mbti', 'MBTI')];

  return (
    <div className={styles.wrap}>
      <div className={styles.testInpo}>
        <h2 style={{ marginBottom: 15 }} className={styles.contentInpoTitle}>
          Contents Inpo
        </h2>
        <div className={styles.titleWarp}>
          <div className={styles.selection}>
            <Select
              defaultValue='선택'
              style={{ width: 120 }}
              onChange={handleChange}
              options={selectOptions}
            />
          </div>
          <p>Title</p>
          <Input
            placeholder='Title'
            allowClear
            onChange={onChange}
            style={{ border: 'none' }}
          />
        </div>
        <div className={styles.contentsBox}>
          <TextArea
            placeholder='Contents'
            allowClear
            onChange={onChange}
            style={{ border: 'none' }}
          />
        </div>
      </div>
      {children}
      <Button
        style={{ margin: 'auto' }}
        onClick={() => onClickNextBtn(selectedValue)}>
        다음
      </Button>
    </div>
  );
}
