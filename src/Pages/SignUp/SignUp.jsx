import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css'; // Ensure you have this CSS file
import Navbar from '../../Components/Navbar/Navbar'; // Import Navbar
import Footer from '../../Components/Footer/Footer'; // Import Footer

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

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
    <div className="signup-page">
      <Navbar /> {/* Add Navbar here */}
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-description">Create an account to get started.</p>
          <form onSubmit={handleSubmit}>
            <label className="signup-label">Email Address</label><br/>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              className="signup-input" 
              id="email" 
              onKeyDown={(e) => handleKeyDown(e, 'password')} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            /><br/>
            <label className="signup-label">Password</label><br/>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              className="signup-input" 
              id="password" 
              onKeyDown={(e) => handleKeyDown(e, 'signup-button')} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            /><br/>
            <button type="submit" className="signup-button" id="signup-button">Sign Up</button>
          </form>
          <p className="signup-footer">Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default SignUp;
