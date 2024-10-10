import React from 'react';
import './homecards.css';

function HomeCards({ image, description, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} className="product-thumb" alt="Product" />
        <button className="card-btn">Add to wishlist</button>
      </div>
      <div className="product-info">
        <h2 className="product-brand">Brand</h2>
        <p className="product-short-description">{description.slice(0, 15)}...</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default HomeCards;
