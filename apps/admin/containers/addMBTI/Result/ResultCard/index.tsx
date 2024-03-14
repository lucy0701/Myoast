'use client';

import styles from './index.module.css';
import { Button, Input, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { mbtiResultState } from '@/states/resultState';
import { useRecoilState } from 'recoil';
import { UploadOutlined } from '@ant-design/icons';

interface Props {
  resultName: string;
}

export default function ResultCard({ resultName }: Props) {
  const [results, setResults] = useRecoilState(mbtiResultState);

  const existingResult = results.find((result) => result.result === resultName);

  const onChangeValue = (result: string, type: string, value: string) => {
    setResults((prevResults) => {
      if (existingResult) {
        return prevResults.map((result) =>
          result.result === resultName
            ? {
                ...result,
                [type]: value,
              }
            : result,
        );
      } else {
        return [
          ...prevResults,
          {
            result,
            title: type === 'title' ? value : '',
            content: type === 'content' ? value : '',
            imageUrl: type === 'imageUrl' ? value : '',
          },
        ];
      }
    });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string,
  ) => {
    const { value } = e.target;
    onChangeValue(resultName, type, value);
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>{resultName}</h2>
      <div className={styles.titleWrap}>
        <p>Title</p>
        <Input
          value={
            existingResult && existingResult.title ? existingResult.title : ''
          }
          allowClear
          placeholder='Title'
          onChange={(e) => onChange(e, 'title')}
          style={{
            border: 'none',
          }}
        />
      </div>
      <div className={styles.contentsWrap}>
        <p>Contents</p>
        <TextArea
          value={
            existingResult && existingResult.content
              ? existingResult.content
              : ''
          }
          placeholder='Contents'
          onChange={(e) => onChange(e, 'content')}
          allowClear
          maxLength={100}
          style={{
            height: 200,
            resize: 'none',
            border: 'none',
          }}
        />
      </div>
      <div>
        <Upload
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          listType='picture'
          maxCount={1}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
    </div>
  );
}
