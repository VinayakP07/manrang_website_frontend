import React, { useEffect } from 'react';
import HomeCards from '../../../Components/HomeCards/HomeCards';
import './Slider.module.css';

function Slider() {
  useEffect(() => {
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });
  }, []);

  return (
    <section className="product">
      <h2 className="product-category">Best Selling</h2>
      <button className="pre-btn">
        <img src="https://i.ibb.co/tHQHdJc/arrow.png" alt="previous" />
      </button>
      <button className="nxt-btn">
        <img src="https://i.ibb.co/tHQHdJc/arrow.png" alt="next" />
      </button>
      <div className="product-container">
        <HomeCards
          price="$40"
          description="A wonderful product"
          image="https://i.ibb.co/y6dLtfp/Whats-App-Image-2024-09-01-at-08-58-29-71542614-1.jpg"
        />
        <HomeCards
          price="$50"
          description="Another great product"
          image="https://i.ibb.co/y6dLtfp/Whats-App-Image-2024-09-01-at-08-58-29-71542614-1.jpg"
        />
      </div>
    </section>
  );
}

export default Slider;
