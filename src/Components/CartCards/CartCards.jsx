import React, { useState } from 'react';
import styles from './CartCards.module.css';

const CartCards = () => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    image: 'https://i.ibb.co/jTqFCXt/Whats-App-Image-2024-09-01-at-09-13-06-f5dbd9c5.jpg',
    title: 'Demo title',
    description: 'Demo description just to see how much can be accomodated.',
    price: 40,
    size: 'L',
    color: 'some colour',
    stockStatus: 'In stock',
    shippingInfo: 'Eligible for FREE Shipping',
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>
        <h2 className={styles.description}>{product.description}</h2>
        <p className={styles.stockStatus}>{product.stockStatus}</p>
        <p className={styles.shippingInfo}>{product.shippingInfo}</p>
        <div className={styles.giftOption}>
          <input type="checkbox" id="gift" />
          <label htmlFor="gift">This will be a gift</label>
        </div>
        <p className={styles.size}>Size: {product.size}</p>
        <p className={styles.color}>Colour: {product.color}</p>
        <div className={styles.priceAndActions}>
          <div className={styles.quantity}>
            <label htmlFor="quantity">Qty: </label>
            <select id="quantity" value={quantity} onChange={handleQuantityChange}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <p className={styles.price}>{product.price.toFixed(2)}$</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.delete}>Delete</button>
          <button className={styles.moreOptions}>See more like this</button>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
