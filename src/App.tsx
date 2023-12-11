import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import SignUp from './Components/SignUp.tsx';
import LogIn from './Components/LogIn.tsx'; 
import LogOut from './Components/LogOut.tsx';
import Home from './Components/Home.tsx';
import CreatePost from './Components/CreatePost.tsx';
import MyLikes from './Components/MyLikes.tsx'
import MyBookmark from './Components/MyBookmarks.tsx'
import Messages from './Components/Messages.tsx'
import Setting from './Components/setting.tsx';
import UserPost from './Components/UserPost.tsx'
import TableData from './Components/TableData.tsx'
import PostForm from './Components/PostForm.tsx'
import {FloatButton} from 'antd'

const App: React.FC = () => {
  return (
    <>
     {/* <FloatButton onClick={() => console.log('onClick')} />; */}
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='/mylikes' element={<MyLikes/>}/>
          <Route path='/mybookmark' element={<MyBookmark/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/profile' element={<UserPost/>}/>
          <Route path='/table' element={<TableData/>}/>
          <Route path='/PostForm' element={<PostForm/>}/>
        </Routes>
      </div>
      <div>
        {window.location.pathname.includes('/logout') && <LogOut />}
      </div>
    </Router>
    <FloatButton.BackTop />

    </>
  );
};

export default App;
