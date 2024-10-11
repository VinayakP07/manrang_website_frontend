import React, { useEffect, useState, useCallback } from 'react';
import styles from './BottomBanner.module.css';

const BottomBanner = () => {
  const itemsData = [
    {
      iconClass: "fa-solid fa-shield",
      heading: "SECURE PAYMENT",
      para: "Shop with confidence at Manarang Boutique, where we guarantee a secure and trustworthy online shopping experience for all customers.",
    },
    {
      iconClass: "fa-solid fa-truck",
      heading: "ALL OVER INDIA DELIVERY",
      para: "Discover our elegant designs delivered reliably across India, bringing happiness to your doorstep with exceptional delivery service everywhere.",
    },
    {
      iconClass: "fa-solid fa-user",
      heading: "PRIORITY CUSTOMER SERVICE",
      para: "Enjoy dedicated customer support for a seamless shopping experience, ensuring your needs are prioritized and met at every stage.",
    },
    {
      iconClass: "fa-solid fa-face-smile",
      heading: "CUSTOMER SATISFACTION",
      para: "We are committed to delivering 100% customer satisfaction by consistently exceeding expectations with our quality products and exceptional service.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1050);
    if (window.innerWidth >= 1050) {
      setCurrentIndex(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!isMobile) return;

    const intervalId = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData.length);
        setTimeout(() => setIsTransitioning(false), 500); // Match this with your CSS transition time
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isMobile, isTransitioning, itemsData.length]);

  return (
    <div className={`${styles.bottomBannerBox}`}>
      {isMobile ? (
        <div className={styles.slider}>
          {itemsData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className={styles.item}>
                <div>
                  <i className={`${styles.icons} ${item.iconClass}`}></i>
                </div>
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        itemsData.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>
              <i className={`${styles.icons} ${item.iconClass}`}></i>
            </div>
            <h3>{item.heading}</h3>
            <p>{item.para}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BottomBanner;