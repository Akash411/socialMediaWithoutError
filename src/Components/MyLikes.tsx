import React from 'react';
import {useGlobalContext} from '../Context.js'
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import PostCard from './PostCard.tsx'
import { Layout, theme } from 'antd';
const { Header, Content } = Layout;




const MyLikes: React.FC = () => {
  const {obj,userImg} = useGlobalContext();
  const revObj = obj.slice().reverse();
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function fun(iit, index){
    if(iit.liked){
    return(
      <div key={iit.cardId} style={{maxWidth: 300, marginBottom:10}}>
        console.log('Likes', {iit.cardId})
      <PostCard imgAvatar={userImg} date={iit.date} time={iit.time} user={iit.user} desc={iit.desc} img={iit.img} id={iit.cardId} name={iit.name} bookmarked={iit.bookmarked} liked={iit.liked}/>
      </div>
    )
    }
  }
  return (
    <>
    <SiderNav value={5}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      
      
      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <h1 style={{textAlign:'center'}}>My Liked Post</h1>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
          <div style={{ padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>

            {revObj.map(fun)}
          </div>
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default MyLikes;
