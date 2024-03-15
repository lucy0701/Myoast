'use client';

import styles from './index.module.css';

import React from 'react';
import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import Image from 'next/image';
import Selection from '@/components/common/Selection';
import SearchInput from '@/components/common/SearchInput';
import { useRouter } from 'next/navigation';
import { getContentsSelectOptions } from '@/utils/getSelectOption';

interface DataType {
  key: string;
  thumbnail: string;
  title: string;
  plays: number;
  linkCopies: number;
  shares: number;
  likes: number;
  comments: number;
  createdDate: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
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
    dataIndex: 'plays',
    key: 'plays',
  },
  {
    title: 'Link Copies',
    dataIndex: 'linkCopies',
    key: 'linkCopies',
  },
  {
    title: 'Shares',
    dataIndex: 'shares',
    key: 'shares',
  },
  {
    title: 'Likes',
    dataIndex: 'likes',
    key: 'likes',
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
  },
  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
];

const data: DataType[] = [
  {
    key: '1',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '의자 나사가 풀렸는데 고치기 귀찮다',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
  {
    key: '2',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '의자가 먼저 박살 날까? 내가 먼저 박살날까?',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
  {
    key: '3',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '컴퓨터가 먼저 박살날듯',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
  {
    key: '4',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '아니다 내가 빨랐다. 박살정',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
  {
    key: '5',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '외출 해야하네',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
  {
    key: '6',
    thumbnail: 'https://i.ibb.co/GJ08BC3/quick-mbti-cover.png',
    title: '호랑이와 토끼가 가위바위보를 했는데 토끼가 이겼다면 때릴 수 있을까',
    plays: 32,
    linkCopies: 30,
    shares: 22,
    likes: 2,
    comments: 22,
    createdDate: '2007-22-21',
  },
];

export default function ContentList() {
  const router = useRouter();
  const onClickAddButton = () => {
    router.push('/contents/add');
  };
  // 임시
  const selectOptions = [getContentsSelectOptions('mbti', 'MBTI',3)];

  return (
    <div className={styles.wrap}>
      <div className={styles.topBox}>
        <div className={styles.searchBox}>
          <Selection selectOptions = {selectOptions} />
          <p>Member ID</p>
          <SearchInput />
        </div>
        <Button onClick={onClickAddButton}>Add Contens</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
