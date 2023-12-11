import React from 'react';
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import { Layout, theme } from 'antd';
const { Header, Content } = Layout;


const Setting: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <SiderNav value={1}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      
      
      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
          <div style={{ padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <h1>Coming Soon!</h1>
          </div>
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default Setting;
