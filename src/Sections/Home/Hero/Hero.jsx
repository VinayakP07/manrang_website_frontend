import React, { useState, useEffect, useCallback } from 'react';
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
  {
    id: 3,
    image: 'https://i.ibb.co/k9y1ctn/Section-1-1.png',
    title: 'Festive Collection',
    subtitle: 'New Arrivals for the Festive Season!',
    description: 'Exclusive Designs with Special Discounts',
    button: 'Explore Now',
  }
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 570);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const moveSlide = useCallback((direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const slideArray = isMobile ? slides2 : slides;
    setCurrentSlide((prevSlide) => 
      (prevSlide + direction + slideArray.length) % slideArray.length
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Changed from 500 to 1000 milliseconds
  }, [isMobile, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [moveSlide]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper}>
        {(isMobile ? slides2 : slides).map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${isTransitioning ? styles.transitioning : ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <img src={slide.image} alt={`slide-${slide.id}`} className={styles.slideImage} />
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

      <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={() => moveSlide(-1)} aria-label="Previous slide">
        &#10094;
      </button>
      <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={() => moveSlide(1)} aria-label="Next slide">
        &#10095;
      </button>

      <div className={styles.indicators}>
        {(isMobile ? slides2 : slides).map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;