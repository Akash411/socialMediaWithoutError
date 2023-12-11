import React from 'react';
import {useGlobalContext} from '../Context.js'
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import PostCard from './PostCard.tsx'
import { Layout, theme } from 'antd';
const { Header, Content } = Layout;


function fun(iit,index){
  if(iit.bookmarked){
  return(
    <div key={iit.card}>
      console.log('bookmark', {iit.cardId})
    <PostCard imgAvatar={iit.imgAvatar} date={iit.date} time={iit.time} user={iit.user} desc={iit.desc} img={iit.img} id={iit.cardId} name={iit.name} bookmarked={iit.bookmarked} liked={iit.liked}/>
    </div>
  )
  }
}

const MyLikes: React.FC = () => {
  const {obj} = useGlobalContext();
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <SiderNav value={6}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      
      
      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        
        <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
          <div style={{ padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>

            {obj.map(fun)}
          </div>
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default MyLikes;
