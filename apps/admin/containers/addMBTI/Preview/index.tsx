'use client';

import styles from './index.module.css';
import { mbtiQuestionsState } from '@/states/questionsState';
import { mbtiResultState } from '@/states/resultState';
import {
  isMbtiAllTestDataState,
  mbtiTestDataState,
} from '@/states/testDataState';
import { testInfoState } from '@/states/testInfoState';
import { MbtiQuestions, MbtiResults } from '@/types/test';
import { Card, Space, Table, TableProps } from 'antd';
import { ChangeEvent, useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import { PaperClipOutlined } from '@ant-design/icons';
import { mbtiImageState } from '@/states/testImageState';
import { DOMAIN_BE_PROD } from '@/constants/constant';
import axios from 'axios';
import { TOKEN_NAME } from '@/constants/sessionStorage';

export default function Preview() {
  const testInfo = useRecoilValue(testInfoState);
  const questions = useRecoilValue(mbtiQuestionsState);
  const results = useRecoilValue(mbtiResultState);

  const setData = useSetRecoilState(mbtiTestDataState);
  const setIsMbtiAllTestData = useSetRecoilState(isMbtiAllTestDataState);
  const [imageUploads, setImageUploads] = useRecoilState(mbtiImageState);

  useEffect(() => {
    setData({
      title: testInfo.title,
      content: testInfo.content,
      questions: questions,
      results: results,
      // createDate: new Date(
      //   new Date().getTime() + 9 * 60 * 60 * 1000,
      // ).toISOString(),
      imageUrl: '',
      // playCount: 0,
      // type: 'MBTI',
    });
  }, [testInfo, questions, results, setData]);

  const isAllDataValid = useMemo(() => {
    const isAllImagesUploaded = imageUploads.every(
      (image) => image !== undefined,
    );
    const isAllQuestionsValid = questions.every(
      (text) =>
        text.question !== '' &&
        text.answerPlus !== '' &&
        text.answerMinus !== '',
    );
    const isAllResultsValid = results.every(
      (text) => text.title !== '' && text.content !== '',
    );

    return isAllImagesUploaded && isAllQuestionsValid && isAllResultsValid;
  }, [imageUploads, questions, results]);

  useEffect(() => {
    if (isAllDataValid && testInfo.title !== '' && testInfo.content !== '') {
      setIsMbtiAllTestData(true);
    } else {
      setIsMbtiAllTestData(false);
    }
  }, [isAllDataValid, setIsMbtiAllTestData, testInfo]);

  const uploadImage = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log(files[0]);
      const file = files[0];
      const formData = new FormData();
      formData.append('image', file);
      setImageUploads((prevUploads) => {
        return prevUploads.map((upload, idx) =>
          idx === index ? file : upload,
        );
      });
    }
  };

  const questionNames = ['E / I', 'N / S', 'F / T', 'J / P'];

  const questionsColumns: TableProps<MbtiQuestions>['columns'] = [
    {
      title: 'Index',
      dataIndex: 'index',
      width: 150,
      render: (text, _, i) => (
        <p>
          [ {questionNames[Math.floor(i / 3)]} ] 질문 {text}
        </p>
      ),
    },
    {
      title: 'Question',
      dataIndex: 'question',
    },
    {
      title: 'AnswerPlus',
      dataIndex: 'answerPlus',
    },
    {
      title: 'AnswerMinus',
      dataIndex: 'answerMinus',
    },
  ];

  const resultsColumns: TableProps<MbtiResults>['columns'] = [
    {
      title: 'Result',
      dataIndex: 'result',
      width: 150,
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
    },
    {
      title: 'Image URL',
      dataIndex: 'imageUrl',
      width: 250,
      render: (text, _, i) => (
        <div>
          {/* <Upload
            action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
            listType='picture'
            maxCount={1}
            onChange={uploadImage(i + 1)}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload> */}
          <input type='file' onChange={(e) => uploadImage(i + 1, e)} />
          {/* <div className={styles.imageFileNameWarp}>
            <PaperClipOutlined />
            <p className={styles.imageFileName}>{imageUploads[i + 1]?.name}</p>
          </div> */}
        </div>
      ),
    },
  ];

  // type HeaderProps = {
  //   'Content-Type': string;
  //   Authorization?: string | null;
  // };

  // const headers: HeaderProps = {
  //   'Content-Type': 'multipart/form-data',
  //   Authorization:
  //     typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_NAME) : null,
  // };

  return (
    <div className={styles.wrap}>
      {/* <input
        type='file'
        onChange={(evt: ChangeEvent<HTMLInputElement>) => {
          const file = evt.target.files![0];
          const formData = new FormData();
          formData.append('file', file);

          const test = axios.post(`${DOMAIN_BE_PROD}/upload`, formData, {
            headers,
          });

          console.log(test)
        }}
      /> */}
      <Space direction='vertical'>
        <Card title={testInfo.title} extra={<p>MBTI</p>} style={{ width: 650 }}>
          <div className={styles.infoWrap}>
            <p style={{ marginBottom: 25 }}>{testInfo.content}</p>
            <div>
              <input type='file' onChange={(e) => uploadImage(0, e)} />
              {/* <Upload
                name='file'
                action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                listType='picture-card'
                onChange={uploadImage(0)}
                maxCount={1}>
                <button style={{ border: 0, background: 'none' }} type='button'>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload> */}
              {/* <p className={styles.imageFileName}>{imageUploads[0]?.name}</p> */}
            </div>
          </div>
        </Card>
      </Space>
      <Table
        columns={questionsColumns}
        dataSource={questions.map((question) => ({
          ...question,
          key: question.index,
        }))}
        bordered
        pagination={false}
        scroll={{ y: 500 }}
        title={() => 'Questions'}
      />
      <Table
        columns={resultsColumns}
        dataSource={results.map((result) => ({
          ...result,
          key: result.result,
        }))}
        bordered
        pagination={false}
        scroll={{ y: 500 }}
        title={() => 'Results'}
      />
    </div>
  );
}
