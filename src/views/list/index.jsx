import React, { useEffect, useState } from 'react';
import './style.less';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/features/counter';
function App() {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <Flex gap="small" vertical>
      <Flex wrap="wrap" gap="small">
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => {
            dispatch(increment());
          }}
        >
          Search
        </Button>
        <Button>{count}</Button>
        <Button
          icon={<SearchOutlined />}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
