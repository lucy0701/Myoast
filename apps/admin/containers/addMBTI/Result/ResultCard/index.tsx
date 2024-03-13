import styles from './index.module.css';
import { Input, Button, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';

interface Props {
    title: string; // title 속성을 문자열로 지정합니다.
  }

export default function ResultCard({ title }: Props) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>{title}</h2>
      <div className={styles.titleWrap}>
        <p>Title</p>
        <Input
          allowClear
          placeholder='Title'
          style={{
            border: 'none',
          }}
        />
      </div>
      <div className={styles.contentsWrap}>
        <p>Contents</p>
        <TextArea
          placeholder='Contents'
          allowClear
          maxLength={100}
          style={{
            minHeight: 200,
            resize: 'none',
            border: 'none',
          }}
        />
      </div>
      <Upload
        action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
        listType='picture' maxCount={1} >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
}
