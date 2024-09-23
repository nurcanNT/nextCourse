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

        {/* Box Container */}
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <h2>En Çok Yorum Alan</h2>
            <p>Bu bölümde en çok yorum alan içerikler yer alacak.</p>
          </div>
          <div className={styles.box}>
            <h2>En Çok Beğenilen Yorum</h2>
            <p>Bu bölümde en çok beğenilen yorumlar gösterilecek.</p>
          </div>
          <div className={styles.box}>
            <h2>En Çok Favori Alan İçerik</h2>
            <p>Bu bölümde en çok favorilere eklenen içerikler yer alacak.</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
