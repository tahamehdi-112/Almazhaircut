'use client';

import { motion } from 'motion/react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold text-white tracking-tighter leading-none break-words"
        >
          CONTACT US
        </motion.h2>
      </div>
    </section>
  );
}
