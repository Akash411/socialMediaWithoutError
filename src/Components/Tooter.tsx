import React from 'react';
import { Row, Col } from 'antd';
import { HomeOutlined, BookOutlined, VideoCameraOutlined, UserOutlined,HeartOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'
import './Tooter.css'; 

const Tooter: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>{isMobile && (
    <footer className="footer">
      <Row justify="space-around">
        <Col span={4} className="footer-item">
        <Link to="/Home"><HomeOutlined /></Link>
        </Col>
        <Col span={4} className="footer-item">
        <Link to="/create"><VideoCameraOutlined /></Link>
        </Col>
        <Col span={4} className="footer-item">
        <Link to="/mylikes"><HeartOutlined /></Link>
        </Col>
        <Col span={4} className="footer-item">
        <Link to="/mybookmark"><BookOutlined /></Link>
        </Col>
        <Col span={4} className="footer-item">
        <Link to="/profile"><UserOutlined /></Link>
        </Col>
      </Row>
    </footer>
    )}
    </>
  );
};

export default Tooter;