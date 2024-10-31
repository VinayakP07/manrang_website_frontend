/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Kurties/Kurties.module.css'; // Importing CSS module
import Navbar from '../../Components/Navbar/Navbar';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin'; // Import NavbarAdmin
import Footer from '../../Components/Footer/Footer';
import HomeCards from '../../Components/HomeCards/HomeCards';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner';

const Pants = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [productData, setProductData] = useState([]);
  const apiBase = import.meta.env.VITE_API_BASE;

  // Function to fetch user details based on token
  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const response = await axios.post(`${apiBase}/auth/user/fetchUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data;
      setIsAdmin(user.isAdmin);
    } catch (err) {
      setError('Failed to fetch user details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

    // Function to fetch product data
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${apiBase}/clothes/fetchClothes`);
        const allProducts = response.data;
  
        // Filter products for Kurties section
        const kurtiesProducts = allProducts.filter(product => product.section === 'Pants');
  
        // Update state with filtered data
        setProductData(kurtiesProducts);
      } catch (err) {
        setError('Failed to fetch product data');
        console.error(err);
      }
    };
  

  useEffect(() => {
    fetchUserDetails();
    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <>
      {isAdmin ? <NavbarAdmin /> : <Navbar />}
      <h2 className={styles.heading}>Pants</h2>
      <div className={styles.kurtiesGrid}>
        {productData.map((ele, index) => (
          <HomeCards 
            key={index} 
            image={ele.images[0]} 
            title={ele.name} 
            price={ele.price}
            description={ele.description}
          />
        ))}
      </div>
      <BottomBanner/> 
      <Footer />
    </>
  );
};

export default Pants;
