import * as React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/About" className={styles.link}>
            About
          </Link>
          <Link href="/Blog" className={styles.link}>
            Blog
          </Link>
          <Link href="/Contact" className={styles.link}>
            Contact
          </Link>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
