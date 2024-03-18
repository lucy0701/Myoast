'use client';

import styles from './index.module.css';

import React, { useEffect } from 'react';
import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import Selection from '@/components/lib/antd/AntdSelect';
import SearchInput from '@/components/lib/antd/SearchInput';
import { useRouter } from 'next/navigation';
import { getContentsSelectOptions } from '@/utils/getSelectOption';
import { useContents } from '@/hooks/useContents';

export default function ContentList() {
  const router = useRouter();

  const { getContentList, contentsList, deleteContent } = useContents();

  useEffect(() => {
    getContentList();
  }, []);

  const onClickDeletBtn = (testId: string) => {
    deleteContent(testId);
  };
  const onClickUpdateBtn = (testId: string) => {
    // 테스트 정보를 먼저 가저옴
    // 테스트 수정 후 patch 전송
    console.log(testId);
  }

  const onClickAddButton = () => {
    router.push('/contents/add');
  };

  // 임시
  const selectOptions = [getContentsSelectOptions('mbti', 'MBTI', 3)];

  const columns: TableProps['columns'] = [
    {
      title: 'Thumbnail',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text) => (
        <Image
          src={text}
          alt='testImage'
          width={120}
          height={80}
          style={{ width: 120, height: 'auto' }}
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Plays',
      dataIndex: 'playCount',
      key: 'playCount',
    },
    {
      title: 'Link Copies',
      dataIndex: 'linkCount',
      key: 'linkCount',
    },
    {
      title: 'Shares',
      dataIndex: 'sharesCount',
      key: 'sharesCount',
    },
    {
      title: 'Likes',
      dataIndex: 'likeCount',
      key: 'likeCount',
    },
    {
      title: 'Comments',
      dataIndex: 'commentsCount',
      key: 'commentsCount',
    },
    {
      title: 'Created Date',
      dataIndex: 'createDate',
      key: 'createDate',
    },
    {
      title: '아ㅋ 제발',
      dataIndex: 'id',
      key: 'id',
      render: (test) => (
        <div className={styles.btnWarp}>
          <button onClick={()=>onClickUpdateBtn(test)}>수정</button>
          <button onClick={() => onClickDeletBtn(test)}>삭제</button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.topBox}>
        <div className={styles.searchBox}>
          <Selection selectOptions={selectOptions} />
          <p>Member ID</p>
          <SearchInput />
        </div>
        <Button onClick={onClickAddButton}>Add Contens</Button>
      </div>
      <Table
        columns={columns}
        dataSource={contentsList.map((content) => ({
          ...content,
          key: content.id,
        }))}
      />
    </div>
  );
}
