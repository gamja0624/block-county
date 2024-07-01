import React from 'react';
import { Pagination } from 'antd';
const showTotal = (total) => `Total ${total} items`;
const PaginationIndex = () => (
  <>
    <Pagination size="small" total={1} />
    <Pagination size="small" total={1} showSizeChanger showQuickJumper />
    <Pagination size="small" total={1} showTotal={showTotal} />
    <Pagination
      size="small"
      total={1}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);
export default PaginationIndex;