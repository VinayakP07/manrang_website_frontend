import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Kurties/Kurties.module.css'; // Importing CSS module
import Navbar from '../../Components/Navbar/Navbar';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin'; // Import NavbarAdmin
import Footer from '../../Components/Footer/Footer';
import HomeCards from '../../Components/HomeCards/HomeCards';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner';

const PantSet = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  // Function to fetch user details based on token
  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const response = await axios.post('/auth/user/fetchUser', {
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

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const productData1 = [
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
    {
      title: "This is the product title",
      price: "40",
      description: "This is a new description to test the length...",
      image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
    },
  ];

  return (
    <>
      {isAdmin ? <NavbarAdmin /> : <Navbar />}
      <h2 className={styles.heading}>Pant Sets</h2>
      <div className={styles.kurtiesGrid}>
        {productData1.map((ele, index) => (
          <HomeCards 
            key={index} 
            image={ele.image} 
            title={ele.title} 
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

export default PantSet;
