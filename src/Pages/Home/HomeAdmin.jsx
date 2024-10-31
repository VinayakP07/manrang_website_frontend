/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin.jsx';
import styles from './HomeAdmin.module.css';
import Footer from '../../Components/Footer/Footer.jsx';
import Hero from '../../Sections/Home/Hero/Hero.jsx';
import Slider from '../../Sections/Home/Sliders/Slider.jsx';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner.jsx';

const HomeAdmin = () => {
  const navigate = useNavigate();
  const apiBase = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const checkAdminAccess = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect if token is not present
        navigate('/login');
        return;
      }

      try {
        // Fetch user details
        const response = await axios.get(`${apiBase}/auth/user/fetchUser`, {
          headers: {
            auth_token: token,
          },
        });

        // Check if the user is an admin
        if (!response.data.isAdmin) {
          // Redirect if the user is not an admin
          navigate('/unauthorized'); // Redirect to an unauthorized page or login
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        navigate('/login'); // Redirect to login on error
      }
    };

    checkAdminAccess();
  }, [navigate, apiBase]);

  return (
    <>
      <NavbarAdmin />
      <Hero />
      <Slider />
      <BottomBanner />
      <Footer />
    </>
  );
}

export default HomeAdmin;
