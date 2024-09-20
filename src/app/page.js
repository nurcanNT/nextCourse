import * as React from 'react';
import Header from '../components/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* MUI Side Menu */}
      <Header/>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1>Welcome to the Home Page</h1>

        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
