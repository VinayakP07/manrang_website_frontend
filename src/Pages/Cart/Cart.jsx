/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css'
import CartCards from '../../Components/CartCards/CartCards'
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';


function Cart() {

  const navigate = useNavigate();

  const product = [{
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  },
  {
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  },
  {
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  },
  {
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  },
  {
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  },
];

const handleShopMoreClick = () => {
  navigate('/'); // Redirect to the Home page
};

return (
  <>
    <Navbar />
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <button className={styles.deleteAll}>Delete All</button>
      {product.map((product, index) => (
        <CartCards key={index} product={product} />
      ))}
     <button className={styles.shopMore} onClick={handleShopMoreClick}>Shop More</button>

    </div>
    <BottomBanner />
    <Footer />
  </>
);
}

export default Cart;