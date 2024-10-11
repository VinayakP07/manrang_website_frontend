/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Kurties.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin'; // Import NavbarAdmin
import Footer from '../../Components/Footer/Footer';
import HomeCards from '../../Components/HomeCards/HomeCards';

const Kurties = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  // Function to fetch user details based on token
  const fetchUserDetails = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      // If no token found, set isAdmin to false and stop loading
      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      // If token exists, make the API call with token in headers
      const response = await axios.post('/auth/user/fetchUser', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming the response contains a user object with isAdmin field
      const user = response.data;
      setIsAdmin(user.isAdmin); // Set admin status from the response
    } catch (err) {
      setError('Failed to fetch user details');
      console.error(err);
    } finally {
      setLoading(false); // Stop loading after API call is finished
    }
  };

  // Fetch user details when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading text while the data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if API call fails
  }

  const productData1 = [
    {
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
{
  title: "This is the product title and lets see how much it can accomodate",
  price: "40",
  description:
    "This is a new description to test the length it can accomodate in the card lets see how it goes and what it can do",
  image: "https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg",
},
  ];

  return (
    <>
      {/* Conditionally render Navbar or NavbarAdmin based on isAdmin state */}
      {isAdmin ? <NavbarAdmin /> : <Navbar />}
      
            <HomeCards title={productData1[0].title}/>

      <Footer />
    </>
  );
};

export default Kurties;
