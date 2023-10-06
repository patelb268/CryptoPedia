import React, { useState } from 'react';
import { Menu, Typography, Avatar, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../assets/icon.png';

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className='sider nav-container'
      >
        {/* Logo and Title outside the collapsed menu */}
        <div className='logo-container'>
          <Avatar src={icon} size='large' />
          {!collapsed && (<Typography.Title level={2} className='logo'>
            <Link className='title' to="/">CryptoPedia</Link>
          </Typography.Title>)}
        </div>

        {/* Menu Items */}
        <Menu className='menu' theme='dark' mode='inline'>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key='cryptocurrencies' icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item key='news' icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Navbar;
