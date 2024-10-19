/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './SignUp.module.css'; // Importing CSS module
import LoginSlider from '../../Components/LoginSlider/LoginSlider';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [username, setUsername] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., API call to create an account)
    console.log('Signing up with:', { email, password });

    // After sign-up logic, redirect to the login page
    navigate('/login');
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
            minLength={10}
            required 
/><br/>
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
