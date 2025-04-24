'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/Carousel.module.scss';

const images = ['/images/hero.png', '/images/hero1.png', '/images/hero2.png'];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Increased delay to 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carousel}>
      {images.map((src, i) => (
        <div key={i} className={`${styles.slide} ${i === index ? styles.active : ''}`}>
          <img src={src} alt={`Slide ${i}`} className={styles.image} />
          <div className={styles.overlay}>
            <h2>Slide {i + 1}</h2>
            <p>This is content for slide {i + 1}...</p>
          </div>
        </div>
      ))}
    </section>
  );
}
