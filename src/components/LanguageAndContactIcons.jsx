import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './LanguageAndContactIcons.css';

const translations = {
  ar: {
    'هاي بروست ✔': 'Hi Broast ✔', // Keep as is (no translation needed for brand name)
    'أفضل بروست منتقرنش بحد': 'Best Broast Crunch Without Limits',
    'مدينه بدر-شارع الجامعه الروسيه': 'Badr City - Russian University Street',
    'اتصل بنا😘': 'Call Us😘',
    'تواصلوا معنا📞': 'Contact Us📞',
    'من نحن': 'About Us',
    'هاي بروست  خبرةاكتر من 10 سنين في البروست اللي بيشدك من أول قضمة. طعم بيرضيك. ويخليك ترجع تاني.':
      'High Broast Over 10 years of experience in broast that hooks you from the very first bite. A taste that satisfies and keeps you coming back.',
    'موقعنا': 'Our Location',
    'مدينه بدر-شارع الجامعه الروسيه': 'Badr City-Russian University Street',
    'تابعنا': 'Follow Us',
    'بواسطة': 'By',
    'أحمد بكري': 'Ahmed Bakry', // يمكن ترك الاسم كما هو أو ترجمته حسب الحاجة
  
  },
  en: {
    'Hi Broast ✔': 'هاي بروست ✔', 
    'Best Broast Crunch Without Limits': 'أفضل بروست منتقرنش بحد',
    'Badr City - Russian University Street': 'مدينة بدر - شارع الجامعة الروسية',
    'Call Us😘': 'اتصل بنا😘',
    'Contact Us📞': 'تواصلوا معنا📞',
    'About Us': 'من نحن',
    'High Broast Over 10 years of experience in broast that hooks you from the very first bite. A taste that satisfies and keeps you coming back.':
      'هاي بروست  خبرةاكتر من 10 سنين في البروست اللي بيشدك من أول قضمة. طعم بيرضيك. ويخليك ترجع تاني.',
    'Our Location': 'موقعنا',
    'Badr City-Russian University Street': 'مدينه بدر-شارع الجامعه الروسيه',
    'Follow Us': 'تابعنا',
    'By': 'بواسطة',
    'Ahmed Bakry': 'أحمد بكري', // يمكن ترك الاسم كما هو أو ترجمته حسب الحاجة
    // Add more translations for other page content
},
};



function LanguageAndContactIcons() {
  const langIconRef = useRef(null);
  const langTextRef = useRef(null);
  const whatsapp1Ref = useRef(null);
  const whatsapp2Ref = useRef(null);
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);

  const [language, setLanguage] = useState('ar');

  // Function to translate all page content
  const translatePage = (newLang) => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const text = element.textContent.trim();
      const translation = translations[newLang][text] || text;
      element.textContent = translation;
    });
  };

  // Handle language toggle
  const handleLanguageToggle = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    translatePage(newLang);
  };

  useEffect(() => {
    const langIcon = langIconRef.current;
    const contactIcons = [whatsapp1Ref.current, whatsapp2Ref.current, phone1Ref.current, phone2Ref.current];

    // GSAP animation for language icon (simplified for performance)
    gsap.to(langIcon, {
      scale: 1.1,
      rotation: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Animate contact icons (unchanged)
    contactIcons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        scale: 1.05,
        boxShadow: index % 2 === 0
          ? '0 0 12px rgba(37, 211, 102, 0.6)'
          : '0 0 12px rgba(255, 99, 71, 0.6)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.2,
      });
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(langIcon);
      contactIcons.forEach((icon) => gsap.killTweensOf(icon));
    };
  }, [language]);

  return (
    <>
      <div className="language-container">
        <div className="language-icon" ref={langIconRef} onClick={handleLanguageToggle}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1-1v6h2V1h-2zm0 8h2v6h-2zm-6-2h6v2H5v-2zm8 0h6v2h-6v-2z" />
          </svg>
        </div>
        <span className="language-text" ref={langTextRef}>
          {language === 'ar' ? 'AR' : 'EN'}
        </span>
      </div>

      <div className="contact-icons-container">
        <a
          href="https://wa.me/+201505932169"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon whatsapp"
          ref={whatsapp1Ref}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="https://wa.me/+201500280450"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon whatsapp"
          ref={whatsapp2Ref}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+201505932169" className="contact-icon phone" ref={phone1Ref}>
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="tel:+201500280450" className="contact-icon phone" ref={phone2Ref}>
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </>
  );
}

export default LanguageAndContactIcons;