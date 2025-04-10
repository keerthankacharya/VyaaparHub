import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login_wrapper">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="logo_container">
          <img 
            src="https://github.com/keerthankacharya/vyaaparhub/blob/main/Images/logo-h.png?raw=true" 
            alt="Logo" 
            className="logo"
          />
        </div>  
        
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the experience.
          </span>
        </div>

        <div className="input_container">
          <label className="input_label" htmlFor="email_field">Email</label>
          <input
            placeholder="Enter your email"
            type="text"
            className="input_field"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label" htmlFor="password_field">Password</label>
          <div className="password_wrapper">
            <input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              className="input_field password_input"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show_password_btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="forgot_password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" className="sign_in_btn">
          Sign In
        </button>
      </form>
    </div>
  );    
};

export default Login;
