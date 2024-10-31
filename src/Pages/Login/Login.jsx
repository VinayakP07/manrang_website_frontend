/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import style from './Login.module.css';
import LoginSlider from '../../Components/LoginSlider/LoginSlider'; 
import Navbar from '../../Components/Navbar/Navbar'; 
import Footer from '../../Components/Footer/Footer';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const apiBase = import.meta.env.VITE_API_BASE;


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${apiBase}/auth/user/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const authToken = response.data.authtoken;
        localStorage.setItem('token', authToken);

        const userResponse = await axios.get(`${apiBase}/auth/user/fetchUser`, {
          headers: {
            auth_token: authToken,
          },
        });

        if (userResponse.status === 200) {
          const isAdmin = userResponse.data.isAdmin;
          if (isAdmin) {
            navigate('/adminHome');
          } else {
            navigate('/');
          }

          if (onLogin) {
            onLogin();
          }
        } else {
          setErrorMessage(userResponse.data.message || 'Failed to fetch user details.');
        }
      } else {
        setErrorMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  // Function to handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    // Check if the email is provided
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    
    try {
      const response = await axios.post(`${apiBase}/forgotPassword/`, { email });
      if (response.status===200) {
        setOtpSent(true);  // Move to the next form
        setErrorMessage('OTP sent to your email.');
      } else {
        setErrorMessage(response.data.message || 'Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error.response?.data || error.message);
      setErrorMessage('Error sending OTP. Please try again.');
    }
  };

  // Function to handle resetting password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post(`${apiBase}/forgotPassword/verify-otp`, {
        email,
        otp,
        newPassword,
        confirmPassword
      });
      if (response.status===200) {
        setErrorMessage('Password reset successful. You can now log in.');
        setShowForgotPassword(false); 
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
        navigate('/login');
      } else {
        setErrorMessage(response.data.message || 'Failed to reset password.');
      }
    } catch (error) {
      console.error('Error resetting password:', error.response?.data || error.message);
      setErrorMessage('Error resetting password. Please try again.');
    }
  };

  return (
    <div className={style.loginPage}>
      <Navbar />
      <div className={style.loginContainer}>
        {/* Login Form */}
        <div className={style.loginForm}>
          <h2 className={style.loginTitle}><u>Login</u></h2><br/><br/><br/>
          <p className={style.loginDescription}>If you already have an account, login now.</p><br/>
          {!showForgotPassword ? (
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
              /><br/><br/>
              {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
              <button type="submit" className={style.loginButton}>Login</button>
              <p className={style.loginFooter}>
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
              <p className={style.forgotPassword} onClick={() => setShowForgotPassword(true)}><u>Forgot Password?</u></p>
            </form>
          ) : (
            <form onSubmit={otpSent ? handleResetPassword : handleSendOtp}>
              {!otpSent ? (
                <>
                  <label className={style.loginLabel}>Enter your email to receive OTP:</label><br/><br/>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    className={style.loginInput} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  /><br/><br/>
                  {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                  <button type="submit" className={style.loginButton}>Send OTP</button>
                </>
              ) : (
                <>
                  <label className={style.loginLabel}>Enter OTP:</label><br/><br/>
                  <input 
                    type="text" 
                    placeholder="OTP" 
                    value={otp} 
                    className={style.loginInput} 
                    onChange={(e) => setOtp(e.target.value)} 
                    required 
                  /><br/><br/>
                  <label className={style.loginLabel}>New Password:</label><br/><br/>
                  <input 
                    type="password" 
                    placeholder="New Password" 
                    value={newPassword} 
                    className={style.loginInput} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                  /><br/><br/>
                  <label className={style.loginLabel}>Confirm Password:</label><br/><br/>
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    className={style.loginInput} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                  /><br/><br/>
                  {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                  <button type="submit" className={style.loginButton}>Reset Password</button>
                </>
              )}
            </form>
          )}
        </div>
  
        {/* Login Slider */}
        <div className={style.loginSlider}>
          <LoginSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
