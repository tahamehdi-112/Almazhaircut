'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import saloon1 from '../public/assets/saloon1.png';
import saloon2 from '../public/assets/saloon2.png';
import saloon3 from '../public/assets/saloon3.png';
import saloon4 from '../public/assets/saloon4.png';
import saloon5 from '../public/assets/saloon5.jpeg';

const images = [
  saloon1,
  saloon2,
  saloon3,
  saloon4,
  saloon5,
];

export default function MediaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 > images.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section id="media" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end"
        >
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-4 break-words">
              MEDIA
            </h2>
            <p className="text-white/60 uppercase tracking-widest text-sm font-light">
              EIN BILD SAGT MEHR ALS WORTE
            </p>
          </div>
          
          <div className="flex space-x-8 mt-8 md:mt-0">
            <button 
              onClick={prevSlide}
              className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
            >
              <FaArrowLeft />
              <div className="w-12 h-[1px] bg-white/60" />
            </button>
            <button 
              onClick={nextSlide}
              className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
            >
              <div className="w-12 h-[1px] bg-white/60" />
              <FaArrowRight />
            </button>
          </div>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (32 / itemsToShow)}px)` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="relative h-[500px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                style={{ width: `calc(${100 / itemsToShow}% - ${32 * (itemsToShow - 1) / itemsToShow}px)` }}
              >
                <Image
                  src={src}
                  alt={`Media Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
