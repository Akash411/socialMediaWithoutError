// LogOut.tsx
import React from 'react';

const LogOut = () => {
  const handleLogOut = () => {
    console.log('Logging out...');
  };

  return (
    <h1 style={{textAlign:'center'}}>Successfully Logged Out! </h1>
  );
};

export default LogOut;
