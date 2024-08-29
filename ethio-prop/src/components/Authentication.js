import React from 'react';

const Auth = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <h2>Sign In</h2>
      <form>
        <div>
          <label>Username</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Authentication.js;
