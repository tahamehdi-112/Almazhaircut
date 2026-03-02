'use client';

import { motion } from 'motion/react';

export default function TextSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-full mx-auto px-15 md:px-25   flex flex-col justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white font-bold text-lg md:text-[20px] leading-[37px]  uppercase tracking-wide text-left md:max-w-[680px] md:ml-auto"
        >
          ENTDECKE DIE WELT DER EXKLUSIVEN HAARMODE,<br/> WO QUALITÄT,<br/> STIL UND PERSÖNLICHE BETREUUNG AN ERSTER STELLE STEHEN. VON PROMINENTEN EMPFOHLEN, FÜR JEDEN ERREICHBAR
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-white/60 font-light text-sm md:text-[20px]  uppercase tracking-widest text-right md:max-w-[680px] leading-[37px] mx-auto mt-15"
        >
          BEFREIE DICH VOM STÄNDIGEM RASIEREN UND WAXING – ERLEBE DIE DAUERHAFTE HAARENTFERNUNG EXKLUSIV NUR FÜR MÄNNER IN UNSEREM STUDIO. VEREINBARE NOCH HEUTE EINEN TERMIN UND SCHENKE DIR SELBST DAS GESCHENK GLATTER, HAARFREIER HAUT, DAS DAUERHAFT ANHÄLT
        </motion.p>
      </div>
    </section>
  );
}
