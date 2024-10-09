import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginSlider from '../../Components/LoginSlider/LoginSlider'; // Import the slider component
import Navbar from '../../Components/Navbar/Navbar'; // Import Navbar
import Footer from '../../Components/Footer/Footer'; // Import Footer

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleKeyDown = (e, nextInputId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Logging in with:', { email, password });
    onLogin(); // Call this after successful login
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleResetPassword = () => {
    // Implement the password reset logic here
    console.log('Reset password for:', { resetEmail });
    // You could show a success message and close the modal after this
    setShowResetModal(false); // Close modal after handling
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Add Navbar here */}
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <p className="login-description">If you already have an account, login now.</p>
          <form onSubmit={handleSubmit}>
            <label className="login-label">Email Address</label><br/>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              className="login-input" 
              id="email" 
              onKeyDown={(e) => handleKeyDown(e, 'password')} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br/>
            <label className="login-label">Password</label><br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              className="login-input" 
              id="password" 
              onKeyDown={(e) => handleKeyDown(e, 'login-button')} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            /><br/>
            <button type="submit" className="login-button" id="login-button">Login</button>
          </form>
          <p className="login-or">or</p>
          <button className="login-google-button" onClick={handleGoogleLogin}>Login via Google</button>
          <p className="login-footer">Don’t have an account? <Link to="/signup">Sign up here</Link></p>
          <p className="forgot-password" onClick={() => setShowResetModal(true)}>Forgot Password?</p> {/* Forgot Password link */}
        </div>
        <LoginSlider /> {/* Add the slider component here */}
      </div>
      <Footer /> {/* Add Footer here */}

      {/* Reset Password Modal */}
      {showResetModal && (
        <div className="reset-modal">
          <div className="reset-modal-content">
            <span className="close" onClick={() => setShowResetModal(false)}>&times;</span>
            <h2>Reset Password</h2>
            <p>Please enter your email address to reset your password.</p>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={resetEmail} 
              className="reset-input" 
              onChange={(e) => setResetEmail(e.target.value)} 
              required 
            /><br/>
            <button onClick={handleResetPassword} className="reset-button">Reset Password</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
