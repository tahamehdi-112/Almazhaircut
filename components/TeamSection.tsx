'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Team from '../public/assets/whole team.jpeg';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Description Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col  justify-center space-y-10 order-2 lg:order-1  "
          >
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light border-b-2  border-white/20 pb-5">
              Unser Team besteht aus leidenschaftlichen und erfahrenen Stylisten, die ihr Handwerk verstehen. Wir legen großen Wert auf kontinuierliche Weiterbildung, um Ihnen stets die neuesten Trends und Techniken bieten zu können. Bei uns sind Sie in den besten Händen.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-12 py-4 uppercase tracking-widest text-sm font-bold w-max"
            >
              LERNEN SIE UNS KENNEN
            </motion.a>
          </motion.div>

          {/* Right Side: Heading, Short Sentence, and Image */}
          <div className="flex flex-col order-1 lg:order-2 items-end ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-12 text-right w-full"
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-4 break-words">
                UNSER<br />TEAM
              </h2>
              <p className="text-white/60 uppercase tracking-widest text-sm font-light">
                Meister ihres Fachs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative h-[600px] lg:h-[800px] w-full overflow-hidden"
            >
              <Image
                src={Team}
                alt="Our Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
