import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import locationImg from '/images/footer.jpg'; // استبدل هذا بمسار صورة الوكيشن الخاصة بك

const translations = {
  ar: {
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
    'About Us': 'من نحن',
    'High Broast Over 10 years of experience in broast that hooks you from the very first bite. A taste that satisfies and keeps you coming back.':
      'هاي بروست  خبرةاكتر من 10 سنين في البروست اللي بيشدك من أول قضمة. طعم بيرضيك. ويخليك ترجع تاني.',
    'Our Location': 'موقعنا',
    'Badr City-Russian University Street': 'مدينه بدر-شارع الجامعه الروسيه',
    'Follow Us': 'تابعنا',
    'By': 'بواسطة',
    'Ahmed Bakry': 'أحمد بكري', // يمكن ترك الاسم كما هو أو ترجمته حسب الحاجة
  },
};

const Footer = () => {
  const [language, setLanguage] = useState('ar');

  // دالة لترجمة النصوص
  const translatePage = (newLang) => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const text = element.textContent.trim();
      const translation = translations[newLang][text] || text;
      element.textContent = translation;
    });
  };

  // التعامل مع تغيير اللغة
  const handleLanguageToggle = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    translatePage(newLang);
  };

  // تنفيذ الترجمة عند تحميل المكون
  useEffect(() => {
    translatePage(language);
  }, [language]);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* قسم الشعار ومعلومات من نحن */}
        <div className="footer-section about">
          <h3 className="footer-title" data-translate>
            من نحن
          </h3>
          <p data-translate>هاي بروست  خبرةاكتر من 10 سنين في البروست اللي بيشدك من أول قضمة. طعم بيرضيك. ويخليك ترجع تاني.
          </p>
        </div>

        {/* قسم الوكيشن */}
        <div className="footer-section location">
          <h3 className="footer-title" data-translate>
            موقعنا
          </h3>
          <div className="location-img-container">
            <a
              href="https://maps.app.goo.gl/GT6fG3u9a9mYNHpt5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={locationImg} alt="موقعنا" className="location-img" />
              <div className="location-overlay">
                <p data-translate>مدينه بدر-شارع الجامعه الروسيه</p>
              </div>
            </a>
          </div>
        </div>

        {/* قسم التواصل الاجتماعي */}
        <div className="footer-section social">
          <h3 className="footer-title" data-translate>
            تابعنا
          </h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* قسم المصمم */}
      <div className="footer-bottom">
        <p>
          <span data-translate>بواسطة</span>{' '}
          <span className="designer" data-translate>
            أحمد بكري
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;