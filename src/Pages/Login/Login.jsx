/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';
import LoginSlider from '../../Components/LoginSlider/LoginSlider'; 
import Navbar from '../../Components/Navbar/Navbar'; 
import Footer from '../../Components/Footer/Footer';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    onLogin();
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Simulate sending OTP, then show OTP modal
    console.log('Sending OTP to:', resetEmail);
    setShowResetModal(false);
    setShowOtpModal(true); // Open OTP modal after sending OTP
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    // Process OTP and password reset
    console.log('Resetting password with OTP:', otp);
    console.log('New Password:', newPassword);
    setShowOtpModal(false);
  };

  return (
    <div className={style.loginPage}>
      <Navbar />
      <div className={style.loginContainer}>
        {/* Login Form */}
        <div className={style.loginForm}>
          <h2 className={style.loginTitle}><u>Login</u></h2><br/><br/><br/>
          <p className={style.loginDescription}>If you already have an account, login now.</p><br/>
          <form onSubmit={handleSubmit}>
            <label className={style.loginLabel}>Email Address</label><br/><br/>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              className={style.loginInput} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br/><br/>
            <label className={style.loginLabel}>Password</label><br/><br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              className={style.loginInput} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit" className={style.loginButton}>Login</button>
          </form>
          <p className={style.loginOr}>or</p>
          <button className={style.loginGoogleButton}>Login via Google</button>
          <p className={style.loginFooter}>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
          <p className={style.forgotPassword} onClick={() => setShowResetModal(true)}><u>Forgot Password?</u></p>
        </div>

        {/* Login Slider */}
        <div className={style.loginSlider}>
          <LoginSlider />
        </div>
      </div>
      <Footer />

      {/* Reset Password Modal */}
      {showResetModal && (
  <div className={style.resetModal}>
    <div className={style.resetModalContent}>
      <span className={style.close} onClick={() => setShowResetModal(false)}>&times;</span>
      <h2>Reset Password</h2><br /><br />
      <p>Please enter your email address to reset your password.</p><br />
      <form
        onSubmit={(e) => {
          e.preventDefault(); 
          if (resetEmail) {
            setShowOtpModal(true); // Show OTP modal
            setShowResetModal(false); // Close reset modal
          } else {
            alert("Please enter a valid email address");
          }
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          value={resetEmail}
          className={style.resetInput}
          onChange={(e) => setResetEmail(e.target.value)}
          required // Ensure email input is required
        /><br /><br />
        <button type="submit" className={style.resetButton}>
          Send OTP
        </button>
      </form>
    </div>
  </div>
)}


      {/* OTP Modal */}
      {showOtpModal && (
        <div className={style.resetModal}>
          <div className={style.resetModalContent}>
            <span className={style.close} onClick={() => setShowOtpModal(false)}>&times;</span>
            <h2>Enter OTP and New Password</h2><br /><br />
            <input 
              type="text" 
              placeholder="Enter OTP" 
              value={otp} 
              className={style.resetInput} 
              onChange={(e) => setOtp(e.target.value)} 
              required 
            /><br /><br />
            <input 
              type="password" 
              placeholder="New Password" 
              value={newPassword} 
              className={style.resetInput} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            /><br /><br />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              className={style.resetInput} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            /><br /><br />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            <button onClick={handleOtpSubmit} className={style.resetButton}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
