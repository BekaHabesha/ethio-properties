import React from 'react';
import Auth from '../components/Auth';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <Auth type="login" />
    </div>
  );
};

export default Login;
