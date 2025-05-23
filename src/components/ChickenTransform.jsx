import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChickenTransform.css';

function ChickenTransformSection() {
  const chickenImageRef = useRef(null);
  const broastImageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const chickenImage = chickenImageRef.current;
    const broastImage = broastImageRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    gsap.set(chickenImage, { opacity: 0, scale: 0.8, x: '-100%', rotateY: 45, filter: 'blur(8px) brightness(1.5)' });
    gsap.set(broastImage, { opacity: 0, scale: 0, x: '100%', rotateY: -45, filter: 'blur(10px) brightness(1.8)' });

    const sequence = () => {
      tl
        .fromTo(
          chickenImage,
          {
            x: '-100%',
            y: '10%',
            opacity: 0,
            scale: 0.8,
            rotateY: 45,
            filter: 'blur(8px) brightness(1.5)',
          },
          {
            x: '0%',
            y: '0%',
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: 'blur(0px) brightness(1.2)',
            duration: 1,
            ease: 'power3.out',
            onUpdate: function () {
              const progress = this.progress();
              gsap.set(chickenImage, {
                y: Math.sin(progress * Math.PI * 4) * 15,
                rotate: Math.sin(progress * Math.PI * 2) * 5,
              });
            },
          }
        )
        .to(
          chickenImage,
          {
            x: '20%',
            scale: 1.1,
            duration: 2.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: 1,
            onUpdate: function () {
              const progress = this.progress();
              gsap.set(chickenImage, {
                y: Math.sin(progress * Math.PI * 8) * 10,
                rotate: Math.sin(progress * Math.PI * 4) * 3,
              });
            },
          }
        )
        .to(
          chickenImage,
          {
            opacity: 0,
            scale: 0.7,
            rotateY: -45,
            filter: 'blur(10px) brightness(1.5)',
            duration: 0.5,
            ease: 'power4.in',
          }
        )
        .fromTo(
          broastImage,
          {
            x: '100%',
            opacity: 0,
            scale: 1.3,
            rotateY: -45,
            filter: 'blur(10px) brightness(1.8)',
          },
          {
            x: '0%',
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: 'blur(0px) brightness(1.3)',
            duration: 1,
            ease: 'back.out(2)',
            onUpdate: function () {
              const progress = this.progress();
              gsap.set(broastImage, {
                scale: 1 + Math.sin(progress * Math.PI * 2) * 0.05,
              });
            },
          },
          '-=0.5'
        )
        .to(
          broastImage,
          {
            scale: 1.1,
            filter: 'brightness(1.4)',
            duration: 2.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: 1,
          }
        )
        .to(
          broastImage,
          {
            opacity: 0,
            scale: 0.7,
            rotateY: 45,
            filter: 'blur(10px) brightness(1.8)',
            duration: 0.5,
            ease: 'power4.in',
          }
        )
        .set(
          chickenImage,
          {
            opacity: 0,
            scale: 0.8,
            x: '-100%',
            rotateY: 45,
            filter: 'blur(8px) brightness(1.5)',
          }
        )
        .set(
          broastImage,
          {
            opacity: 0,
            scale: 0,
            x: '100%',
            rotateY: -45,
            filter: 'blur(10px) brightness(1.8)',
          }
        );
    };

    sequence();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="chicken-transform-container">
      <div className="image-wrapper" ref={wrapperRef}>
        <img
          ref={chickenImageRef}
          src="/images/pngtree-cheerful-cute-cartoon-yellow-chick-mascot-chicken-with-black-sunglasses-isolated-png-image_12969329.png"
          className="chicken"
          alt="Chicken"
        />
        <img
          ref={broastImageRef}
          src="/images/broasted-chicken-7445019_640.png"
          className="broast"
          alt="Broast"
        />
      </div>
    </div>
  );
}

export default ChickenTransformSection;