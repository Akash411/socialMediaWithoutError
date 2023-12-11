import React, {useState} from 'react';
import './UserPost.css'
import {useGlobalContext} from '../Context.js'
import FNav from './Tooter.tsx'
import HNav from './NavBar.tsx'
import SiderNav from './SiderNav.tsx';
import { useMediaQuery } from 'react-responsive';
import TableData from './TableData.tsx'
import PostCard from './PostCard.tsx'
import { Layout, theme,Input,Button } from 'antd';
import Meta from 'antd/es/card/Meta';
const { Header, Content } = Layout;




const UserPost: React.FC = () => {

  const {obj,userImg} = useGlobalContext();
  const revObj = obj.slice().reverse();
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState('Akash');

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSave = () => {
    setEditable(false);
  };

  function fun(iit, index){
    if(iit.user){
    return(
    <div key={iit.cardId} style={{maxWidth: 300, marginBottom:10}}>
      <PostCard 
      imgAvatar={userImg}
       date={iit.date} 
       time={iit.time} 
       user={iit.user}
        desc={iit.desc} 
        img={iit.img} 
        id={iit.cardId}
        name={iit.name} 
        bookmarked={iit.bookmarked} 
        liked={iit.liked}/>
      </div>
      )
  
    }
  }

  return (
    <>
    <SiderNav value={4}/>
    {isMobile && (<HNav/>)}
    <Layout style={{marginBottom:40}}>
      

      
      <Layout className="site-layout"  >
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <div style={{marginTop:20, marginBottom:5, fontSize:25,fontWeight:'normal',marginLeft:20,display:'flex' }}>
        <Meta
            avatar={<img  style={{ borderRadius: '10%', width: '30px', marginBottom:-7 }} src={userImg} alt="Profile"  />}
          />
      {editable ? (
        <Input
        style={{fontSize:25}}
          value={inputValue}
          onChange={handleChange}
          onBlur={toggleEditable}
          onPressEnter={handleSave}
          autoFocus
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px',fontSize:25,fontWeight:'bold',marginLeft:20,display:'flex' }}>{inputValue}</div>
          <Button type="primary" onClick={toggleEditable}>
            Edit
          </Button>
        </div>
      )}
    </div>
        <div>
        
        </div>
        
        <Content className='userP' style={{ margin: '24px 16px 0', display:'flex', flexDirection:'column'}}>
        
           <div style={{padding: 24, background: colorBgContainer, display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
            
            {revObj.map(fun)}
          </div>
          {/* <TableData/> */}
        </Content>
      </Layout>
      <FNav/>
    </Layout>
    </>
  );
};

export default UserPost;
