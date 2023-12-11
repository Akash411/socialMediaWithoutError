import React from 'react';
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import './Home.css'
import {
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  MessageOutlined,
  HeartOutlined,
  BookOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { ReactNode } from 'react';
const { Header, Sider } = Layout;

type gm = {
  value: number
}

const SiderNav = (props:gm) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const {
    token: { colorBgContainer },
  } = theme.useToken();

    return(
        <>
        {!isMobile&&(<Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer,
          borderRight: '1px solid lightgray'
        }}
      >
        <div className="demo-logo-vertical" />
        <Header style={{ padding: 0, background: colorBgContainer,textAlign: 'center',fontWeight:'bold', fontSize:20 }} >Social Media</Header>

        
        <Menu
        mode="inline"
        defaultSelectedKeys={[`${props.value}`]}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key={1} icon={<HomeOutlined />}>
        <Link to="/Home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />}>
          <Link to="/messages">Message</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          <Link to="/create">Create</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<HeartOutlined />}>
        <Link to="/mylikes">My Likes</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<BookOutlined />}>
        <Link to="/mybookmark">My Bookmarks</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<LogoutOutlined />}>
          <Link to='/logout'>LogOut</Link>
        </Menu.Item>


      </Menu>
      </Sider>)}
        </>
    )
}
export default SiderNav;


