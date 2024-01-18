import React, { useState } from 'react';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, Button } from 'antd';
import 'dayjs/locale/zh-cn';
import { FolderOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { store } from '@/store';
import { Provider } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
const CustomLayout = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const items = [FolderOutlined].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <React.Suspense fallback={<Loading />}>
          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,
              }}
              trigger={null}
              collapsible
              collapsed={collapsed}
            >
              <div className="demo-logo-vertical"></div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: '#fff',
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0px 5px 5px #ccc',
                }}
              >
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px 0',
                  overflow: 'initial',
                }}
              >
                {children}
              </Content>
              <Footer
                style={{
                  textAlign: 'center',
                }}
              >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </React.Suspense>
      </ConfigProvider>
    </Provider>
  );
};
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
export default CustomLayout;
