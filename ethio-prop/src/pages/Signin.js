import React from 'react';
import Auth from '../components/Auth';

const Signin = () => {
  return (
    <div className="signin">
      <h1>Sign Up</h1>
      <Auth type="signin" />
    </div>
  );
};

export default Signin;
