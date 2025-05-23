import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';

import LanguageAndContactIcons from './components/LanguageAndContactIcons';
import Hero from './components/Hero';
import ChickenTransform from './components/ChickenTransform';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // مدة التحميل 3 ثواني كمثال
    setTimeout(() => {
      setLoading(false);
      setShowHero(true);
    }, 3000);
  }, []);

  return (
    <div className="app">
     <Navbar />
  
      <LanguageAndContactIcons />
      {showHero && <Hero />}
      <ChickenTransform />
      <ImageSlider />
      <Footer />
     
    </div>
  );
}

export default App;