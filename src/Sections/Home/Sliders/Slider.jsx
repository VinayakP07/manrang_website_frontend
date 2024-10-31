/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import Axios
import HomeCards from '../../../Components/HomeCards/HomeCards';
import styles from './Slider.module.css';

function Slider() {
  // Initially set product data arrays to be empty
  const [productData1, setProductData1] = useState([]);
  const [productData2, setProductData2] = useState([]);
  const [productData3, setProductData3] = useState([]);

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [visibleCards, setVisibleCards] = useState(0);
  const productContainerRef1 = useRef(null);
  const productContainerRef2 = useRef(null);
  const productContainerRef3 = useRef(null);

  // Fetch data from APIs after component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE;
        const response1 = await axios.get(`${apiBase}/clothes/fetchNewArrivals`);
        const response2 = await axios.get(`${apiBase}/clothes/fetchOurRecommendations`);
        const response3 = await axios.get(`${apiBase}/clothes/fetchTopBuys`);
        
        // Check if responses are arrays before updating state
        setProductData1(Array.isArray(response1.data) ? response1.data : []);
        setProductData2(Array.isArray(response2.data) ? response2.data : []);
        setProductData3(Array.isArray(response3.data) ? response3.data : []);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      const containerWidth = productContainerRef1.current?.offsetWidth || 0;
      const cardWidth = 380;
      setVisibleCards(Math.floor(containerWidth / cardWidth));
    };

    window.addEventListener('resize', updateVisibleCards);
    updateVisibleCards();

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const nextSlide = (section) => {
    if (section === 1) {
      setCurrentIndex1((prevIndex) =>
        prevIndex >= productData1.length - visibleCards ? 0 : prevIndex + 1
      );
    } else if (section === 2) {
      setCurrentIndex2((prevIndex) =>
        prevIndex >= productData2.length - visibleCards ? 0 : prevIndex + 1
      );
    } else if (section === 3) {
      setCurrentIndex3((prevIndex) =>
        prevIndex >= productData3.length - visibleCards ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = (section) => {
    if (section === 1) {
      setCurrentIndex1((prevIndex) =>
        prevIndex === 0 ? productData1.length - visibleCards : prevIndex - 1
      );
    } else if (section === 2) {
      setCurrentIndex2((prevIndex) =>
        prevIndex === 0 ? productData2.length - visibleCards : prevIndex - 1
      );
    } else if (section === 3) {
      setCurrentIndex3((prevIndex) =>
        prevIndex === 0 ? productData3.length - visibleCards : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (productContainerRef1.current) {
      productContainerRef1.current.style.transform = `translateX(-${(currentIndex1 * 375)}px)`;
    }
    if (productContainerRef2.current) {
      productContainerRef2.current.style.transform = `translateX(-${(currentIndex2 * 375)}px)`;
    }
    if (productContainerRef3.current) {
      productContainerRef3.current.style.transform = `translateX(-${(currentIndex3 * 375)}px)`;
    }
  }, [currentIndex1, currentIndex2, currentIndex3, visibleCards]);

  return (
    <div>
      {/* New Arrivals Section */}
      <section className={styles.product}>
        <h2 className={styles.productCategory}>New Arrivals</h2>

        <button className={styles.preBtn} onClick={() => prevSlide(1)}>&#8249;</button>
        <button className={styles.nxtBtn} onClick={() => nextSlide(1)}>&#8250;</button>

        <div className={styles.productWrapper}>
          <div className={styles.productContainer} ref={productContainerRef1}>
            {productData1.map((product, index) => (
              <HomeCards
                key={index}
                title={product.name}
                price={product.price}
                description={product.description}
                image={product.images}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Recommendations Section */}
      <section className={styles.product}>
        <h2 className={styles.productCategory}>Our Recommendations</h2>

        <button className={styles.preBtn} onClick={() => prevSlide(2)}>&#8249;</button>
        <button className={styles.nxtBtn} onClick={() => nextSlide(2)}>&#8250;</button>

        <div className={styles.productWrapper}>
          <div className={styles.productContainer} ref={productContainerRef2}>
            {productData2.map((product, index) => (
              <HomeCards
                key={index}
                title={product.name}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Buys Section */}
      <section className={styles.product}>
        <h2 className={styles.productCategory}>Top Buys</h2>

        <button className={styles.preBtn} onClick={() => prevSlide(3)}>&#8249;</button>
        <button className={styles.nxtBtn} onClick={() => nextSlide(3)}>&#8250;</button>

        <div className={styles.productWrapper}>
          <div className={styles.productContainer} ref={productContainerRef3}>
            {productData3.map((product, index) => (
              <HomeCards
                key={index}
                title={product.name}
                price={product.price}
                description={product.description}
                image={product.images}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
