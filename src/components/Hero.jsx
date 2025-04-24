import styles from '@/styles/Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="./images/hero.png" alt="Hero" className={styles.image} />
      <div className={styles.text}>
        <div className={styles['title-container']}> {/* New container for logo and h1 */}
          <div className={styles['flower-logo']}>
            <div className={styles['flower-logo__center-dot']}></div>
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className={styles['flower-logo__petal']}></div>
            ))}
          </div>
          <h2>LOGO</h2>
        </div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Consectetur adipiscing elit. Etiam eu turpis molestie...</p>
      </div>
    </section>
  );
}