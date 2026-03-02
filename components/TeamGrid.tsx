'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Team1 from '../public/assets/team1.jpeg';
import Team2 from '../public/assets/team2.jpeg';
import Team3 from '../public/assets/team3.jpeg';
import Team4 from '../public/assets/team4.jpeg';
import Team5 from '../public/assets/team5.jpeg';
import Team6 from '../public/assets/team6.jpeg';


const teamMembers = [
  {
    name: 'ALEXANDER',
    image: Team1,
  },
  {
    name: 'DAVID',
    image: Team2,
  },
  {
    name: 'MICHAEL',
    image: Team3,
  },
  {
    name: 'JULIAN',
    image: Team4,
  },
  {
    name: 'THOMAS',
    image: Team5,
  },
  {
    name: 'LUKAS',
    image: Team6,
  },
];

export default function TeamGrid() {
  return (
    <section className="pb-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="relative h-[450px] w-full overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500" />
              
              {/* Name at Bottom Center */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white tracking-widest uppercase text-sm font-bold">
                  {member.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
