'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'How It Works',
    href: '#process',
  },
  {
    label: 'Industries',
    href: '#industries',
  },
  {
    label: 'About',
    href: '#about',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#050D1A]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group"
            >
              <Image
                src="/logo.png"
                alt="Global Workforce Solutions"
                width={320}
                height={70}
                priority
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/[0.06] transition-all duration-150"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+61413566464"
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
              >
                +61 413 566 464
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                Get Started
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050D1A]/98 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-base text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <a
                  href="tel:+61413566464"
                  className="text-center text-sm text-slate-400 font-medium"
                >
                  +61 413 566 464
                </a>
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-3 rounded-xl transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
