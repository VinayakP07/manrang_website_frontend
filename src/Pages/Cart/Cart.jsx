/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Cart.module.css'
import CartCards from '../../Components/CartCards/CartCards'
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';


function Cart() {
  return (
    <>
      <Navbar/>
      <CartCards/>
      <BottomBanner/>
      <Footer/>
    </>
  )
}

export default Cart;
