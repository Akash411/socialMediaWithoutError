// CreatePost.tsx
import React from 'react';
import {useGlobalContext} from '../Context.js'
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import { Layout, theme } from 'antd';
import PostForm from './PostForm.tsx';
const { Header, Content } = Layout;

const CreatePost = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <SiderNav value={3}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      
      
      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
        <h1 style={{textAlign:'center'}}>Create your post by adding Image Url</h1>

          <div style={{ padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <PostForm/>
          </div>
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default CreatePost;

