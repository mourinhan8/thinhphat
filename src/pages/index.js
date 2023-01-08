import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
import { Table } from '../components/table/table';

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Nhân viên',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Hồ sơ',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Unknown',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
              <div className="block text-blue-900 pt-[18px]" href="/">
                <span className="sr-only">Home</span>
              </div>

              <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block"></nav>
                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    {true ? (
                      <>
                        <div
                          className="block rounded-md bg-[#001529] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                          href="/login"
                        >
                          Hello
                        </div>

                        <div>
                          <a
                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#001529] transition hover:text-teal-600/75 sm:block"
                            onClick={() => alert('bạn đã đăng xuất')}
                          >
                            Đăng xuất
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          className="block rounded-md bg-[#001529] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                          href="/login"
                        >
                          Đăng nhập
                        </Link>

                        <Link
                          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#001529] transition hover:text-teal-600/75 sm:block"
                          href="/"
                        >
                          Đăng ký
                        </Link>
                      </>
                    )}
                  </div>

                  <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          <Table />
        </Content>
      </Layout>
    </Layout>
  );
}
