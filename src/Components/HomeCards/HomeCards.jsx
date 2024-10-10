/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './HomeCards.module.css';

function HomeCards({title, image, description, price }) {
  return (
    <div className={styles.productCard}>

      <div className={styles.productImage}>
        <img src={image} className={styles.productThumb} alt="Product" />
      </div>

      <div className={styles.productInfo}>
        <h2 className={styles.productBrand}>
          {title ? `${title.slice(0, 50)}...` : 'No Title'}
          </h2>
          
        <p className={styles.productShortDescription}>
          {description ? `${description.slice(0, 80)}...` : 'No description available'}
        </p>

        <span className={styles.price}>${price}</span>
      </div>

    </div>
  );
}

export default HomeCards;
