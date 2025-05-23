import React from 'react';
import './Hero.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title" data-translate>هاي بروست ✔ </h1>
        <h1 className="hero-title" data-translate>افضل بروست منتقرنش بحد</h1>
        <p className="hero-subtitle" data-translate>مدينه بدر-شارع الجامعه الروسيه </p>
        <div className="hero-buttons">
          <a href="tel:+201019077075" className="hero-button phone" data-translate>اتصل بنا😘</a>
          <a href="https://wa.me/+201019077075" className="hero-button whatsapp" target="_blank" rel="noopener noreferrer" data-translate>تواصلوا معنا📞</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;