'use client'
import React, { useEffect, useState } from 'react';
import styles from './RotatingImage.module.css';

const RotatingImage = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotate(scrollY * 0.5); // Adjust rotation speed by changing the multiplier
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="/scroll-rotate.png"
        alt="Rotating"
        className={styles.image}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    </div>
  );
};

export default RotatingImage;