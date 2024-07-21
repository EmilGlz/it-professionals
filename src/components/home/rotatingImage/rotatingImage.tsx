'use client'
import React, { useEffect, useState } from 'react';
import styles from './rotatingImage.module.css';
import Image from 'next/image'

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
      <Image
        src="/scroll-rotate.png"
        width={176}
        height={176}
        className={styles.image}
        style={{ transform: `rotate(${rotate}deg)` }}
        alt="Picture of the author"
      />
    </div>
  );
};

export default RotatingImage;