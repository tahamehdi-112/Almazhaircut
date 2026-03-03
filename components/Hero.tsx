'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    text: (
      <>
        PREMIUM<br />
        HAIRCUT<br />
        
      </>
    ),
    video: '/assets/IMG_5400.MOV',
  },
  {
    id: 2,
    text: (
      <>
        MODERN<br />
        STYLING<br />
        
      </>
    ),
    video: '/assets/IMG_5399.MOV',
  },
  {
    id: 3,
    text: (
      <>
        CLASSIC<br />
        SHAVES<br />
        
      </>
    ),
    video: '/assets/IMG_5398.MOV',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // automatically advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="start" className="relative h-screen w-full overflow-hidden bg-black flex items-end pb-32 lg:items-center lg:pb-0">
      {/* render a separate video element for each slide so that each one can play independently */}
      <AnimatePresence mode="wait">
        {slides.map((slide, idx) =>
          currentSlide === idx ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="object-cover w-full h-full opacity-40 object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex justify-between items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight break-words">
              {slides[currentSlide].text}
            </h1>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold"
            >
              &rarr; TERMIN ONLINE SICHERN
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute bottom-12 left-6 md:left-12 flex space-x-6 z-20">
        <button 
          onClick={prevSlide}
          className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
        >
          <FaArrowLeft />
          <div className="w-8 h-[1px] bg-white/60" />
        </button>
        <button 
          onClick={nextSlide}
          className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
        >
          <div className="w-8 h-[1px] bg-white/60" />
          <FaArrowRight />
        </button>
      </div>

      {/* Vertical Text on Right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start  space-y-32 z-20">
        <a href="https://www.instagram.com/almaz.haircut?igsh=cG04dWt5eGx2Ymxx" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.3em] text-white/60 hover:text-white transition-colors rotate-90 origin-left   whitespace-nowrap">
          INSTAGRAM
        </a>
        <a href="#contact" className="text-[10px] tracking-[0.3em] text-white/60 hover:text-white transition-colors rotate-90 origin-left mx-[0px] whitespace-nowrap">
          CONTACT
        </a>
      </div>
    </section>
  );
}
