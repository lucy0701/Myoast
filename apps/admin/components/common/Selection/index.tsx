'use client';

import React from 'react';
import { Select, Space } from 'antd';
import { ContentsSelectOptions } from '@/types/selectOptions';

interface Props {
  selectOptions: ContentsSelectOptions[];
}

export default function Selection({ selectOptions }: Props) {
  const handleChange = (value: string) => {
    console.log(`${value}`);
  };

  return (
    <Space wrap>
      <Select
        defaultValue='선택하기'
        style={{ width: 120 }}
        onChange={handleChange}
        options={selectOptions}
      />
    </Space>
  );
}
