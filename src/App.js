import React, { useState } from 'react';
import './styles.css';

export default function RestaurantPage() {
  const [showMenuImages, setShowMenuImages] = useState(false);
  const [showAboutInfo, setShowAboutInfo] = useState(false);
  const [showHoursLocation, setShowHoursLocation] = useState(false);

  const handleMenuClick = () => {
    setShowMenuImages(prev => !prev);
    setShowAboutInfo(false); 
    setShowHoursLocation(false); 
  };

  const handleAboutClick = () => {
    setShowAboutInfo(prev => !prev);
    setShowMenuImages(false); 
    setShowHoursLocation(false); 
  };

  const handleHoursLocationClick = () => {
    setShowHoursLocation(prev => !prev);
    setShowMenuImages(false); 
    setShowAboutInfo(false); 
  };

  return (
    <div>
      <header>
        <div className="button-container">
          <button onClick={handleMenuClick}>Menü</button>
          <button onClick={handleAboutClick}>Hakkında</button>
          <button onClick={handleHoursLocationClick}>Saatler & Lokasyon</button>
        </div>
      </header>
      <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        {showAboutInfo && (
          <p className="info-container">
            Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
          </p>
        )}
        {showMenuImages && (
          <div className="image-container">
            <div className="image-wrapper">
              <img className="hot-dog" src="/images/hotdogs.jpg" alt="Hot Dogs" />
            </div>
            <div className="image-wrapper">
              <img src="/images/sandwich.jpg" alt="Sandwich" />
            </div>
            <div className="image-wrapper">
              <img src="/images/hamburger.jpg" alt="Hamburger" />
            </div>
          </div>
        )}
        {showHoursLocation && (
          <div className="hours-location-container">
            <p className="info-container">
              Bursa Gemlik Marine iskele cad. Saat aralığı: Haftaiçi 09:30-23:00  Haftasonu 09:30-01:00
            </p>
          </div>
        )}
      </main>
      <footer>
        <p>
          Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"> Coding Company</a>™.
        </p>
      </footer>
    </div>
  );
}
