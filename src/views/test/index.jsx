import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
function App() {
  return (
    <>
      <h1>test</h1>
      <Flex gap="small" vertical>
        <Flex wrap="wrap" gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Flex>
        <Flex wrap="wrap" gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
