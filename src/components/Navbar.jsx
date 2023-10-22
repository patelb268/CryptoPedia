import React, { useState } from 'react';
import { Menu, Typography, Avatar, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../assets/icon.png';

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true); 
  // Define an array of menu items
  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label:<NavLink to="/">Home</NavLink>},
    { key: 'cryptocurrencies', icon: <FundOutlined />,label: <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink> },
    { key: 'news', icon: <BulbOutlined />,label: <NavLink to="/news">News</NavLink>},
  ];

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
          <NavLink to="/">
            <Avatar src={icon} size='large' alt='logo'/>
          </NavLink>         
          {!collapsed && (
            <Typography.Title level={2} className='logo' data-testid="navbar-title">
              <NavLink className='title' to="/">CryptoPedia</NavLink>
            </Typography.Title>
          )}
        </div>

        {/* Menu Items */}
        <Menu className='menu' theme='dark' mode='inline' items={menuItems}>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Navbar;
