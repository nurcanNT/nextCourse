"use client";

import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchWeather() {
      const apiKey = 'YOUR_ACTUAL_API_KEY'; 
      const city = 'Istanbul';       
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Hava durumu verisi alınamadı:', error);
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return (
    <div className={styles.page}>
      <Header/>

      <div className={styles.mainContent}>
        <h1>Welcome to the Home Page</h1>

        <div className={styles.weatherBanner}>
          {loading ? (
            <p>Hava durumu yükleniyor...</p>
          ) : weather && weather.main ? (
            <div>
              <h2>{weather.name} Hava Durumu</h2>
              <p>Sıcaklık: {weather.main.temp}°C</p>
              <p>Hissedilen: {weather.main.feels_like}°C</p>
              <p>Durum: {weather.weather[0].description}</p>
            </div>
          ) : (
            <p>Hava durumu bilgisi alınamadı.</p>
          )}
        </div>

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
