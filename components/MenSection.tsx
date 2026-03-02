'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Men from '../public/assets/saloon6.jpeg';

export default function MenSection() {
  return (
    <section id="men" className="py-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-12 lg:mb-16 tracking-tighter break-words"
        >
          MEN
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[600px] lg:h-[800px] w-full overflow-hidden"
          >
            <Image
              src={Men}
              alt="Barber Chair"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center space-y-10"
          >
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light border-b-2  border-white/20 pb-5">

              Prazision. individualitat. Still
              Selbstbewussestin. Earfherene Stylsten.Hochwertif Werkzeug. Klassische Schnitte. Trends. Geniebe Perfekte Haarkunst in unserem Saloon
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-12 py-4 uppercase tracking-widest text-sm font-bold w-max"
            >
              TERMIN ONLINE SICHERN
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
