/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './SignUp.module.css'; // Importing CSS module
import LoginSlider from '../../Components/LoginSlider/LoginSlider';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedPhoneNo = phoneNo.trim();

    if (!validatePhoneNumber(trimmedPhoneNo)) {
      setErrorMessage('Enter a valid phone number');
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE;
      const response = await axios.post(`${apiBase}/auth/user/createUser`, {
        username,
        email,
        password,
        phone: trimmedPhoneNo, // Ensure the key matches what the server expects
      });

      // console.log('Sign-up successful:', response.data);

      // After sign-up logic, redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error during sign-up:', error.response?.data || error.message);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error[0].msg);
      } else {
        setErrorMessage('Sign-up failed. Please try again.');
      }
    }
  };

  return (
    <div className={style.signupPage}>
      <Navbar />
      <div className={style.signupContainer}>
        <div className={style.signupForm}>
          <h2 className={style.signupTitle}><u>Sign Up</u></h2><br/>
          <br/>
          <p className={style.signupDescription}>Create an account to get started.</p><br/>
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className={style.signupLabel}>Username</label><br /><br />
            <input
              placeholder="Username" 
              value={username} 
              className={style.signupInput} 
              id="username" 
              onKeyDown={(e) => handleKeyDown(e, 'signupButton')} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            /><br/>

            <label className={style.signupLabel}>Email Address</label><br/><br/>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              className={style.signupInput} 
              id="email" 
              onKeyDown={(e) => handleKeyDown(e, 'password')} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br/>
            
            <label className={style.signupLabel}>Password</label><br/><br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              className={style.signupInput} 
              id="password" 
              onKeyDown={(e) => handleKeyDown(e, 'signupButton')} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            /><br/>

            <label className={style.signupLabel}>Phone Number</label><br/><br/>
            <input 
              placeholder="Phone Number" 
              value={phoneNo} 
              className={style.signupInput} 
              id="phoneNo" 
              onKeyDown={(e) => handleKeyDown(e, 'signupButton')} 
              onChange={(e) => {
                // Allow only numbers and limit to 10 digits
                const newValue = e.target.value.replace(/\D/g, '').slice(0, 10); 
                setPhoneNo(newValue);
              }} 
              maxLength={10}  // Limit input to 10 characters
              required 
            /><br/>

            {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}

            <button type="submit" className={style.signupButton} id="signupButton">Sign Up</button>
          </form>
          <p className={style.signupFooter}>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
        <LoginSlider />
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
