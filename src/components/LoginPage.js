// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../styles.css';  // Correct path to styles.css

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login check
    if (userId === 'user' && password === 'password') {
      navigate('/home'); // Use navigate to redirect
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="user-name"
        placeholder="username"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        aria-label="Email Address"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        aria-label="Password"
      />
      <div className="login-remember">
        <label>
          <input type="checkbox" id="rememberMe" aria-label="Remember password" />
          Remember password
        </label>
        <button
          className="forget-password"
          onClick={() => alert('Password recovery not implemented')}
        >
          Forget password?
        </button>
      </div>
      <button onClick={handleLogin}>Login</button>
      <div className="social-login">
        <button className="social-button facebook" aria-label="Login with Facebook">f</button>
        <button className="social-button instagram" aria-label="Login with Instagram">IG</button>
        <button className="social-button pinterest" aria-label="Login with Pinterest">P</button>
        <button className="social-button linkedin" aria-label="Login with LinkedIn">Li</button>
      </div>
      <div className="login-register">
        <p>Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
