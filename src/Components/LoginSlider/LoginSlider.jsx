import React, { useState } from 'react';
import './LoginSlider.css'; // Ensure this CSS is for the slider

const LoginSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://i.ibb.co/fXzLgFk/mg.jpg",
    "https://i.ibb.co/nCNGCHY/Whats-App-Image-2024-09-01-at-08-58-26-4757f0e8.jpg",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="Slider" className="slider-image" />

      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>

      <div className="dots-container">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LoginSlider;
