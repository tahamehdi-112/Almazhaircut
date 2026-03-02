'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../public/assets/logo.png';

const navLinks = [
  { name: 'MEN', href: '#men' },
  { name: 'SOCIAL', href: '#social' },
  { name: 'MEDIA', href: '#media' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-start">
        <a href="#start" className="flex items-center">
          {/* replace with logo image; adjust src to actual logo path */}
          <Image
            src={logo}
            alt="Hochheimers Haarkunst"
            width={80}
            height={10}
            className="object-contain "
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-col items-end space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
