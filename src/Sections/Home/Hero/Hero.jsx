import React, { useState } from 'react';
import styles from './Hero.module.css'; // Import the CSS file for styling

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co/tDRGvhG/Section-1.png', 
    title: 'MANRANG',
    subtitle: 'Shop Latest Suit Collections NOW!',
    description: 'Get FLAT 20% off on your first purchase',
    button: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/k9y1ctn/Section-1-1.png', 
    title: 'Festive Collection',
    subtitle: 'New Arrivals for the Festive Season!',
    description: 'Exclusive Designs with Special Discounts',
    button: 'Explore Now'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/hD5dZX2/sale-img.png', // Sale image
    title: 'SALE',
    subtitle: '',
    description: '',
    button: 'Grab the Offer'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveSlide = (direction) => {
    const newIndex = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  return (
    <div className={`${styles.sliderContainer}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? `${styles.active}` : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className={`${styles.slideContent}`}>
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <p>{slide.description}</p>
            <a href="#" className={`${styles.shopBtn}`}>{slide.button}</a>
          </div>
        </div>
      ))}

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
