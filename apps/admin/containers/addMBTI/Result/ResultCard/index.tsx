'use client';

import styles from './index.module.css';
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { mbtiResultState } from '@/states/resultState';
import { useRecoilState } from 'recoil';
import { CONTENT, TITLE } from '@/constants/addContent';

interface Props {
  resultName: string;
}

export default function ResultCard({ resultName }: Props) {
  const [results, setResults] = useRecoilState(mbtiResultState);

  const existingResult = results.find((result) => result.result === resultName);

  const onChange = (value: string, type: string): void => {
    setResults((prevResults) =>
      prevResults.map((result) =>
        result.result === resultName ? { ...result, [type]: value } : result,
      ),
    );
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>{resultName}</h2>
      <div className={styles.titleWrap}>
        <p>Title</p>
        <Input
          value={existingResult?.title || ''}
          maxLength={500}
          allowClear
          placeholder={TITLE}
          onChange={(e) => onChange(e.target.value, TITLE)}
        />
      </div>
      <div className={styles.contentsWrap}>
        <p>Contents</p>
        <TextArea
          value={existingResult?.content || ''}
          placeholder={CONTENT}
          onChange={(e) => onChange(e.target.value, CONTENT)}
          allowClear
          maxLength={500}
          style={{
            height: 200,
            resize: 'none',
          }}
        />
      </div>
    </div>
  );
}
