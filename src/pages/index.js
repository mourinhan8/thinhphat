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
    <>
      <div>Vui lòng đăng nhập để tiếp tục</div>
    </>
  );
}
