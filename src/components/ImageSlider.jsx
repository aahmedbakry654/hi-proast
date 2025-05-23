import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    {
      src: '/images/2.jpg',
      alt: 'صورة 2',
    
    },
    {
      src: '/images/3.jpg',
      alt: 'صورة 3',
  
    },
    {
      src: '/images/4.jpg',
      alt: 'صورة 4',
      
    },
    {
      src: '/images/5.jpg',
      alt: 'صورة 5',
 
    },
    {
      src: '/images/6.jpg',
      alt: 'صورة 6',

    },
  ];

  // صور وفيديو إضافي
  const additionalImages = [
    {
      src: '/images/some.jpg',
      alt: 'صورة إضافية 1',
    },
    {
      src: '/images/conecct.jpg',
      alt: 'صورة إضافية 2',
    },
  ];

  const video = {
    src: '/vedio/vid.mp4',
    alt: 'فيديو إضافي',
  };

  return (
    <section className="image-slider-section">
      {/* السلايدر الأصلي */}
      <Swiper
        modules={[Autoplay, EffectCreative]}
        loop={true}
        autoplay={{
          delay: 1000, // 1 second per slide
          disableOnInteraction: false,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ['-100%', 0, 0], // Slide out to the left
            rotate: [0, 0, -15], // Subtle tilt for optical illusion
            opacity: 0.3, // Fade out slightly
          },
          next: {
            translate: ['100%', 0, 0], // Slide in from the right
            rotate: [0, 0, 15], // Subtle tilt for optical illusion
            opacity: 0.3, // Fade in slightly
          },
        }}
        speed={600} // Faster, smoother transition for professional effect
        lazy={{ enabled: true }}
        className="image-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={image.src}
                alt={image.alt}
                className="swiper-lazy"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="slide-caption">{image.caption}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* قسم الصور والفيديو الإضافي */}
      <div className="additional-content">
        <div className="additional-images">
          {additionalImages.map((image, index) => (
            <div key={index} className="additional-image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="additional-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="additional-video">
          <video
            src={video.src}
            alt={video.alt}
            controls
            playsInline
            muted
            loop
            className="additional-video-element"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;