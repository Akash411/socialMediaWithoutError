import React, {useContext, useReducer } from 'react';
import reducer from './reducer';
const AppContext = React.createContext();

const links = [
  'https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D',
 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
 'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww',
 'https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww',
 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D',
 'https://images.unsplash.com/photo-1608725131946-c73a151f2f8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbSUyMHBvc3R8ZW58MHx8MHx8fDA%3D',
 'https://images.unsplash.com/photo-1701706473909-8c56341741dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
 'https://images.unsplash.com/photo-1560449606-4d10d5b87c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D'
];
const userImg = 'https://images.unsplash.com/photo-1618042164219-62c820f10723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D';
const initialState = {
    obj: [
      {cardId:1,date:'1/11/2023',time:'3:25', name: 'Gupta',desc:[], liked: true,comment: '', showInput: false, bookmarked: false, user: false,imgAvatar:links[5],img: links[5]},
      {cardId:2,date:'15/10/2023',time:'9:05', name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:userImg,img:links[8],
      children: [
        {
          name: 'Child 1',
          age: 5,
        },
        
      ] },
      {cardId:3, date:'30/11/2023',time:'11:11',name: 'Rupal',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user: false,imgAvatar:links[1],img: links[1]},
      {cardId:4,date:'20/11/2023',time:'1:11', name: 'Ishu',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user: false,imgAvatar:links[2],img: links[2]},
      {cardId:5, date:'20/11/2023',time:'3:25',name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:userImg,img:links[7],
      children: [
        {
          name: 'Child 1',
          age: 5,
        },
        
      ] },
      {cardId:6,date:'15/11/2023',time:'2:25', name: 'sunita',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user: false,imgAvatar:links[3],img: links[3]},
      {cardId:7,date:'20/11/2023',time:'4:25', name: 'mercy',desc:[], liked: false,comment: '', showInput: false, bookmarked: true, user: true,imgAvatar:userImg,img:links[4],
      children: [
        {
          name: 'Child 1',
          age: 5,
        },
        {
          name: 'Child 2',
          age: 8,
        },
      ] },
      {cardId:8,date:'20/10/2023',time:'2:55', name: 'exter',desc:['hell'], liked: false,comment: '', showInput: false, bookmarked: false, user: false,imgAvatar:links[8],img:links[5],
      children: [
        {
          name: 'Child 1',
          age: 5,
        },
      ] },
      {cardId:9, date:'2/01/2022',time:'8:00',name: 'hiii',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:userImg,img:links[6],
      children: [
        
        
      ]  },
      
      
      {cardId:10,date:'13/05/2021',time:'3:05', name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:false,imgAvatar:links[10],img:'https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      children: [] },
      {cardId:11, date:'20/11/2023',time:'3:25',name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:links[6],img:links[6]},
      {cardId:12, date:'20/11/2023',time:'3:25',name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:links[9],img:links[9]},
      {cardId:13, date:'20/11/2023',time:'3:25',name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:links[7],img:links[7]},
      {cardId:14, date:'20/11/2023',time:'3:25',name: 'hello',desc:[], liked: false,comment: '', showInput: false, bookmarked: false, user:true,imgAvatar:links[10],img:links[10]}
    ],
  };


const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLikeClick = (id) => {
      dispatch({
        type:'LIKE',
        payload: id
      })
    }
    const handleBookmarkClick = (id) => {
        dispatch({
          type:'BOOK',
          payload: id
        })
        console.log(...state.obj)
      }

      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    const createUserPost=(values)=>{
      const currentDate = new Date();
      const month = currentDate.getMonth()+1;
      const date = currentDate.getDate() + '/'+ month +'/'+currentDate.getFullYear();
      const time = currentDate.getHours() +':' + currentDate.getMinutes();
      const randomNum = getRandomInt(state.obj.length, 100000);
      const newObj = {
        cardId:randomNum,
        date: date,
        time: time,
        name: values.name,
        desc: [state.obj.desc,values.description],
        liked: false,
        comment: '',
        showInput: false,
        bookmarked: false,
        user: true,
        img: values.url,
        children : [],
      }
      dispatch({type:"ADD_CARDS", payload:newObj})
    console.log('Form akash:', state);

    };
    const addComment = (comment, id)=>{
      dispatch({
        type:'ADD_DESCRIPTION',
        payload: {
          cardId: id,
          comment: comment
      }})
      console.log("akash doing", comment, id, ...state.obj[id-1].desc);
    }
    const DeletePostObj = (id) =>{
      dispatch({type: "DELETE_POST",payload: id})

    }

    return <AppContext.Provider value={{...state,handleLikeClick,handleBookmarkClick,createUserPost,addComment,DeletePostObj,userImg}}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};