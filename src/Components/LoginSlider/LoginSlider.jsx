import React, { useState, useEffect } from 'react';
import style from './LoginSlider.module.css'; // Import CSS module

const LoginSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://i.ibb.co/fXzLgFk/mg.jpg",
    "https://i.ibb.co/nCNGCHY/Whats-App-Image-2024-09-01-at-08-58-26-4757f0e8.jpg",
  ];

  // Timer to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className={style.sliderContainer}>
      <img src={images[currentIndex]} alt="Slider" className={style.sliderImage} />
      <div className={style.dotsContainer}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${style.dot} ${currentIndex === idx ? style.dotActive : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LoginSlider;
