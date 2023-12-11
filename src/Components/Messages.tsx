// Navbar.tsx
import React from 'react';
import {useGlobalContext} from '../Context.js'
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import PostCard from './PostCard.tsx'
import { Layout, theme } from 'antd';
const { Header, Content } = Layout;


const Messages: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <SiderNav value={2}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      
      
      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
          <div style={{ padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <h1>Messanger Coming Soon!</h1>
          </div>
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default Messages;
