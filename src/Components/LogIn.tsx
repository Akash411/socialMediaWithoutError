import React, { useState } from 'react';
import { Card, Form, Input, Button, Row, Col, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
const { Text } = Typography;

const LoginCard: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Logging in with:', formData);
    setFormData({ email: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    
    <Card title="Social Media" style={{ width: 300}} >
      <Form onFinish={handleLogin}>
        <Form.Item label="Email">
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password name="password" value={formData.password} onChange={handleChange} />
        </Form.Item>
        <Link to="/home">
        <Form.Item>
          <Button type="primary" htmlType="submit" block target="/signup"> 
            Log In
          </Button>
        </Form.Item>
        </Link>
      </Form>
      <Divider/>
      <Row justify="center" style={{display:"Flex", flexDirection:"column", alignItems:"center"}}>
        <Col className="gutter-row">
          <Text type="secondary">You don't have an account?</Text>
        </Col>
        <Col >
          <Link to="/">Sign Up</Link>
        </Col>
      </Row>
    </Card>
    </Row>
  );
};

export default LoginCard;
