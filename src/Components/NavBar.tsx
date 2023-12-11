// Navbar.tsx
import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import './Navbar.css'; // Import CSS file for styling
import LogOut from './LogOut';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Row justify="space-between" align="middle">
        {/* Left section */}
        <Col>
          <span className="logo">Social Media</span>
        </Col>

        {/* Right section */}
        <Col>
          <Input className='search-input' placeholder="Search..." />
        </Col>
        <Button style={{textAlign:'center'}} danger><Link to='/logout'>LogOut</Link></Button>
      </Row>
    </div>
  );
};

export default Navbar;
