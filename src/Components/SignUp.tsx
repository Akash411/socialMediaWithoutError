// SignUpCard.tsx
import React, { useState } from 'react';
import { Card, Form, Input, Button, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Home from './Home.tsx';

const { Text } = Typography;

const SignUpCard: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    console.log('Signing up with:', formData);
    <link></link>
    
    setFormData({ fullName: '', email: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Row justify="center" align="middle" style={{display:'flex',minHeight: '100vh' }}>
      <Col>
        <Card title="Sign Up" style={{ width: 400 }}>
          <Form onFinish={handleSignUp}>
            <Form.Item label="Full Name">
              <Input name="fullName" value={formData.fullName} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Email">
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password name="password" value={formData.password} onChange={handleChange} />
            </Form.Item>
            <Link to="/home">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
            </Link>
          </Form>
          <Row justify="space-between" style={{ marginTop: '20px' }}>
            <Col>
              <Text type="secondary">Already have an account?</Text>
            </Col>
            <Col>
              <Link to="/login">
                <Button type="primary">Log In</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUpCard;
