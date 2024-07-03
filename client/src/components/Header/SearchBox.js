import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchBox = () => {

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        style={{
          width: '250px',
          margin: '10px'
        }}
      />
    </Space>
  )

}
export default SearchBox;