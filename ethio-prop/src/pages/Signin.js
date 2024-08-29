import React from 'react';

const Signin = () => {
  return (
    <main className="signin-page">
      <h1>Sign Up</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default Signin;
