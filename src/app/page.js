import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>

      <div className={styles.mainContent}>
        <h1>Welcome to the Home Page</h1>

        <Footer />
      </div>
    </div>
  );
}
