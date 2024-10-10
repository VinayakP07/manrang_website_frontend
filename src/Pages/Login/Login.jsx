import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css'; // Use the imported styles as an object
import LoginSlider from '../../Components/LoginSlider/LoginSlider'; 
import Navbar from '../../Components/Navbar/Navbar'; 
import Footer from '../../Components/Footer/Footer';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false); // New state for OTP modal
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    console.log('Logging in with:', { email, password });
    onLogin();
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleResetPassword = () => {
    if (resetEmail.trim() === '') {
      alert('Please enter your email address.'); // Alert if email is empty
      return; // Prevent proceeding if email is not provided
    }
    
    // Logic to send OTP would go here
    console.log('Reset password for:', { resetEmail });
    setShowOtpModal(true); // Show OTP modal
    setShowResetModal(false); // Hide reset modal
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP and reset password would go here
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('New password:', newPassword);
    // Proceed with the password reset logic
  };

  return (
    <div className={style.loginPage}>
      <Navbar />
      <div className={style.loginContainer}>
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
              id="email" 
              onKeyDown={(e) => handleKeyDown(e, 'password')} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br/>
            <label className={style.loginLabel}>Password</label><br/><br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              className={style.loginInput} 
              id="password" 
              onKeyDown={(e) => handleKeyDown(e, 'login-button')} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            /><br/>
            <button type="submit" className={style.loginButton} id="login-button">Login</button>
          </form>
          <p className={style.loginOr}>or</p>
          <button className={style.loginGoogleButton} onClick={handleGoogleLogin}>Login via Google</button>
          <p className={style.loginFooter}>
            Don’t have an account? <Link to="/signup">Sign up here</Link>
          </p>
          <p className={style.forgotPassword} onClick={() => setShowResetModal(true)}><u>Forgot Password?</u></p>
        </div>
        <LoginSlider />
      </div>
      <Footer />

      {/* Reset Password Modal */}
      {showResetModal && (
        <div className={style.resetModal}>
          <div className={style.resetModalContent}>
            <span className={style.close} onClick={() => setShowResetModal(false)}>&times;</span>
            <h2>Reset Password</h2>
            <br/><br/>
            <p>Please enter your email address to reset your password.</p><br/>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={resetEmail} 
              className={style.resetInput} 
              onChange={(e) => setResetEmail(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleResetPassword(); // Trigger OTP send on Enter key
                }
              }} 
              required 
            /><br/>
            <button 
              onClick={handleResetPassword} 
              className={style.resetButton}
            >
              Send OTP
            </button>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className={style.resetModal}>
          <div className={style.resetModalContent}>
            <span className={style.close} onClick={() => setShowOtpModal(false)}>&times;</span>
            <h2>Verify OTP</h2>
            <br/><br/>
            <p>Please enter the OTP sent to your email.</p><br/>
            <input 
              type="text" 
              placeholder="Enter OTP" 
              value={otp} 
              className={style.resetInput} 
              onChange={(e) => setOtp(e.target.value)} 
              required 
            /><br/>
            <p>New Password</p>
            <br/>
            <input 
              type="password" 
              placeholder="New Password" 
              value={newPassword} 
              className={style.resetInput} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            /><br/>
            <p>Confirm Password</p>
            <br/>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              className={style.resetInput} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            /><br/>
            <button 
              onClick={handleVerifyOtp} 
              className={style.resetButton}
            >
              Reset Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
