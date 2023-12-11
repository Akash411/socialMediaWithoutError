import React from 'react';
import {useState} from 'react'
import { Card, Row, Col, Button, Input ,List  } from 'antd';
import { HeartOutlined, MessageOutlined, BookOutlined,HeartFilled,BookFilled,DeleteOutlined   } from '@ant-design/icons';
import { useGlobalContext } from '../Context';
const { Meta } = Card;


type gm = {
  name: string
  liked: boolean
  bookmarked: boolean
  id: number
  img: string
  imgAvatar: string
  desc: string[]
  user: boolean
  date: string
  time: string
}


const PostCard = (props:gm) => {
  const {handleLikeClick,handleBookmarkClick,addComment,DeletePostObj} = useGlobalContext();
  const [comment, setComment] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [commentValue, setCommentValue] = useState(2);
  const [expandedItem, setExpandedItem] = useState(null);
  
  
  const DeletePost =()=>{
    DeletePostObj(props.id);
  }
  const handleCommentClick = () => {
    setShowInput(true);
  };
  const handleSendComment = () => {
    if(comment != "")
    {
    addComment(comment, props.id);
    console.log('Comment sent:', comment);

    
    }
    setComment('');
    setShowInput(false);
  }
  const handleExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };
 
  function fun(item,index){
    if(index <= commentValue)
    return (
      <List.Item onClick={() => handleExpand(item)}>
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <span style={{ cursor: 'pointer' }}>
              {expandedItem === item ? item : `${item.slice(0, 50)}...`}
            </span>
            {expandedItem === item && (
              <span>{item}</span>
            )}
          </div>
        </List.Item>
      );
  }
  const toggleContent = () => {
    if(!showMore)
    setCommentValue(100);
  else setCommentValue(2);
    setShowMore(!showMore);
  };
  
  
  return (
    <>
    <Card actions={[
      <Button
          type="text"
          onClick={()=>handleLikeClick(props.id)}
          icon={props.liked ? <HeartFilled value='4' style={{ color: 'red' }} /> : <HeartOutlined />}
        />,
        <Button
        type="text"
        onClick={handleCommentClick}
        icon={<MessageOutlined />}
      />,
      <Button
          type="text"
          onClick={()=>handleBookmarkClick(props.id)}
          icon={props.bookmarked ? <BookFilled style={{ color: 'blue' }} /> : <BookOutlined />}
        />,
        props.user&&(
          <Button
          type="text"
          onClick={DeletePost}
          icon={<DeleteOutlined  />}
        />),
        
        ].filter(Boolean)} style={{ marginLeft: 10, marginRight:10,maxWidth: 400, display:'flex', justifyContent:'center',flexDirection:'column', marginTop:5}}
        >
      <Row style={{ marginBottom: '10px', display:'flex',flexDirection:'row' }}>
        <Col span={24}>
          <Meta
            avatar={<img  style={{ borderRadius: '60%', width: '30px', marginBottom:-7 }} src={props.imgAvatar} alt="Profile"  />}
            title={props.name} description={<div>{props.date} || {props.time} </div>}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img alt="example" style={{ width: '100%' }} src={props.img}/>
          </Col>
      </Row>
      <h3>{props.liked?1:0} Likes</h3>
      {/* <div><ul style={{border:'1px solid blue', display:'flex',flexDirection:'column'}}>{props.desc.map(fun)} </ul></div> */}
      {props.desc.length>0 ? 
      <List
      bordered
      dataSource={props.desc}
    renderItem={fun}
    />
    :
    <></>
    }
      {props.desc.length==0?<></>:<Button onClick={toggleContent}>{showMore ? 'Show less' : 'Show more'}</Button>} 
      {showInput && (
        <Row style={{ marginBottom: 0, display: 'flex', flexDirection: 'row' }}>
          <Col span={18}>
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment"
            />
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={handleSendComment}>
              Send
            </Button>
          </Col>
        </Row>
      )}
      
    </Card>
    
    </>
  );
};

export default PostCard;
