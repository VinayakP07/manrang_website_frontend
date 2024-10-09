/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co/tDRGvhG/Section-1.png',
    title: 'MANRANG',
    subtitle: 'Shop Latest Suit Collections NOW!',
    description: 'Get FLAT 20% off on your first purchase',
    button: 'Shop Now',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/k9y1ctn/Section-1-1.png',
    title: 'Festive Collection',
    subtitle: 'New Arrivals for the Festive Season!',
    description: 'Exclusive Designs with Special Discounts',
    button: 'Explore Now',
  },
  // {
  //   id: 3,
  //   image: 'https://i.ibb.co/hD5dZX2/sale-img.png',
  //   title: 'SALE',
  //   subtitle: '',
  //   description: '',
  //   button: 'Grab the Offer',
  // },
];

const slides2 = [
  {
    id: 1,
    image: 'https://i.ibb.co/tsSCPCq/IMG-20240830-WA0014.jpg',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/17mXQBd/Whats-App-Image-2024-09-01-at-08-58-24-e7b63485.jpg',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/sgRQ2Ks/Whats-App-Image-2024-09-01-at-08-58-24-0b5dd1b5.jpg',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state based on window width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 570);
  };

  // UseEffect to handle window resize events
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Change slide automatically every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  const moveSlide = (direction) => {
    const newIndex = (currentSlide + direction + (isMobile ? slides2.length : slides.length)) % (isMobile ? slides2.length : slides.length);
    setCurrentSlide(newIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper}>
        {(isMobile ? slides2 : slides).map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <img src={slide.image} alt={`slide-${slide.id}`} className={styles.slideImage} />
            {/* Only render text content if screen width is >= 570px */}
            {!isMobile && (
              <div className={styles.slideContent}>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
                <p>{slide.description}</p>
                <a href="#" className={styles.shopBtn}>
                  {slide.button}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
