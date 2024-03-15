'use client';

import styles from './index.module.css';
import { mbtiQuestionsState } from '@/states/questionsState';
import { mbtiResultState } from '@/states/resultState';
import { mbtiImageAllState, mbtiTestDataState } from '@/states/testDataState';
import { testInfoState } from '@/states/testInfoState';
import { MbtiQuestions, MbtiResults } from '@/types/test';
import {
  Button,
  Card,
  Space,
  Table,
  TableProps,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from 'antd';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

export default function Preview() {
  const testInfo = useRecoilValue(testInfoState);
  const questions = useRecoilValue(mbtiQuestionsState);
  const results = useRecoilValue(mbtiResultState);
  const setIsAllImage = useSetRecoilState(mbtiImageAllState);

  const setData = useSetRecoilState(mbtiTestDataState);

  const [imageUploadStates, setImageUploadStates] = useState(
    new Array(17).fill(false),
  );
  const targetTime = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);

  useEffect(() => {
    setData({
      title: testInfo.title,
      content: testInfo.content,
      questions: questions,
      results: results,
      createDate: targetTime.toISOString(),
      imageUrl: '',
      playCount: 0,
      type: 'MBTI',
    });
  }, [testInfo, questions, results, setData]);

  useEffect(() => {
    const allImagesUploaded = imageUploadStates.every((state) => state);
    if (allImagesUploaded) {
      setIsAllImage(true);
    } else {
      setIsAllImage(false);
    }
  }, [imageUploadStates]);

  const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    maxCount: 1,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
      render: (text, _, i) => (
        <Upload
          action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
          listType='picture'
          maxCount={1}
          onChange={(info) => {
            const index = i + 1;
            const newImageUploadStates = [...imageUploadStates];
            if (info.file.status === 'done') {
              newImageUploadStates[index] = true;
            } else if (
              info.file.status === 'removed' ||
              info.file.status === 'error'
            ) {
              newImageUploadStates[index] = false;
            }
            setImageUploadStates(newImageUploadStates);
          }}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      ),
    },
  ];

  return (
    <div className={styles.wrap}>
      <Space direction='vertical'>
        <Card title={testInfo.title} extra={<p>MBTI</p>} style={{ width: 650 }}>
          <div className={styles.infoWrap}>
            <p style={{ marginBottom: 25 }}>{testInfo.content}</p>
            <div>
              <Upload {...props}>
                <button style={{ border: 0, background: 'none' }} type='button'>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
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
