'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import cut1 from '../public/assets/1.png';
import cut2 from '../public/assets/6.png';
import cut3 from '../public/assets/3.png';
import cut4 from '../public/assets/7.png';
import cut5 from '../public/assets/5.png';
import cut6 from '../public/assets/2.png';
import cut7 from '../public/assets/8.png';
import cut8 from '../public/assets/4.png';
import cut9 from '../public/assets/9.png';

const haircuts = [
  { src: cut1, description: 'Klassischer Fade-Schnitt mit präzisen Konturen.' },
  { src: cut2, description: 'Moderner Pompadour für einen eleganten Look.' },
  { src: cut3, description: 'Texturierter Crop mit weichem Übergang.' },
  { src: cut4, description: 'Scharfer Buzz Cut für einen markanten Stil.' },
  { src: cut5, description: 'Voluminöser Quiff mit mattem Finish.' },
  { src: cut6, description: 'Eleganter Seitenscheitel, perfekt gestylt.' },
  { src: cut7, description: 'Lässiger Surfer-Look mit natürlichen Wellen.' },
  { src: cut8, description: 'Präziser Bart- und Haarschnitt in Perfektion.' },
  { src: cut9, description: 'Modernes Undercut-Design für einen trendigen Look.' },
];

export default function PremiumHaircutSection() {
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
      prevIndex + 1 > haircuts.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? haircuts.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section id="premium-haircut" className="py-24 bg-black relative overflow-hidden">
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
              PREMIUM<br />HAIRCUT
            </h2>
            <p className="text-white/60 uppercase tracking-widest text-sm font-light">
              MEISTERHAFTE SCHNITTE FÜR DEN MODERNEN MANN
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
            {haircuts.map((haircut, index) => (
              <div
                key={index}
                className="relative h-[500px] flex-shrink-0 group overflow-hidden cursor-pointer"
                style={{ width: `calc(${100 / itemsToShow}% - ${32 * (itemsToShow - 1) / itemsToShow}px)` }}
              >
                <Image
                  src={haircut.src}
                  alt={`Premium Haircut ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-500 z-10" />
                
                {/* Paragraph at Bottom Center */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <p className="text-white text-center text-sm md:text-base font-light leading-relaxed">
                    {haircut.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
