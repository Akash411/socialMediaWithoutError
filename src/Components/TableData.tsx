

import React, { useState } from 'react';
import { Table } from 'antd';
import { useGlobalContext } from '../Context';
export interface CustomData {
  key: React.Key;
  name: string;
  like: number;
  children?: CustomData[];
}


const TableData: React.FC = () => {
  
  const {obj} = useGlobalContext();
  const [dataSource] = useState<CustomData[]>(obj);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'like',
      dataIndex: 'like',
      key: 'like',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
  ];

  const expandedRowRender = (record: CustomData) => {
    if (record.children) {
      return (
        <Table
          columns={columns}
          dataSource={record.children}
          pagination={false}
          rowKey={(record) => record.key}
        />
      );
    }
    return null;
  };
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      expandable={{
        // expandedRowRender,
        rowExpandable: (record) => !!record.children && record.children.length > 0,
      }}
      rowKey={(record) => record.key}
    />
  );
};

export default TableData;
