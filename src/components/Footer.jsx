import styles from '@/styles/Footer.module.scss';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoBox}>
          <div className={styles['triangle-top']}></div>
          <div className={styles['triangle-left']}></div>
          <div className={styles['triangle-right']}></div>
          <div className={styles['triangle-bottom']}></div>
        </div>
      </div>

      <nav className={styles.nav}>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
      </nav>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className={styles.copy}>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}
