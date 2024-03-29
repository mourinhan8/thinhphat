import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, FolderOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useState, useContext } from 'react';
const { Header, Sider, Content } = Layout;
import { useRouter } from 'next/router';
import Image from 'next/image';
import AppContext from '../components/AppContext';

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex justify-center m-2">
          <div className="flex">
            <Image src={'/img/logo.jpeg'} alt="logo" width={50} height={50} />
          </div>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/employee']}
          onClick={({ key }) => {
            router.push(key);
          }}
          items={[
            {
              key: '/employee',
              icon: <UserOutlined />,
              label: 'Nhân viên',
            },
            {
              key: '/document',
              icon: <FolderOutlined />,
              label: 'Hồ sơ',
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
          {/*  */}
          <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
              <div className="block text-blue-900" href="/">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}
              </div>

              <div></div>

              <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block"></nav>
                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    {true ? (
                      <>
                        <div
                          className="block rounded-md bg-[#001529] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                          href=""
                        >
                          {`Xin chào ${state.user?.full_name}`}
                        </div>

                        <div>
                          <a
                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#001529] transition hover:text-teal-600/75 sm:block"
                            onClick={(e) => {
                              e.preventDefault();
                              sessionStorage.removeItem('access_token');
                              sessionStorage.removeItem('user');
                              router.push('/');
                              alert('bạn đã đăng xuất');
                            }}
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
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </Header>
        <Content
          className="site-layout-background overflow-scroll"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
