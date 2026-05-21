import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useScrollProgress } from '../hooks';
import { useLang } from '../LangContext';
import LangSwitcher from './LangSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const { t } = useLang();

  const navItems = [
    { label: t('nav_about'), href: '#over-ons' },
    { label: t('nav_services'), href: '#diensten' },
    { label: t('nav_process'), href: '#werkwijze' },
    { label: t('nav_portfolio'), href: '#portfolio' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-neutral-100' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <svg width="42" height="42" viewBox="0 0 100 120" fill="none">
                <path d="M 80 100 L 80 20 L 20 20 L 20 100 L 45 100" stroke="#C82333" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Subtle Belgian flag indicator overlay on logo */}
              <div className="absolute -bottom-1 -right-1 flex gap-[2px] bg-white p-[2px] rounded border border-neutral-100 shadow-xs">
                <span className="w-1 h-2 bg-black" />
                <span className="w-1 h-2 bg-[#FFE135]" />
                <span className="w-1 h-2 bg-[#C82333]" />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-lg font-bold tracking-tight text-toppi-dark">
                  Wall<span className="text-toppi-red"> Done</span>
                </span>
                <span className="inline-flex items-center gap-[2px] ml-2 bg-neutral-50 border border-neutral-200/60 rounded px-1.5 py-0.5">
                  <span className="w-[5px] h-2.5 bg-black" />
                  <span className="w-[5px] h-2.5 bg-[#FFE135]" />
                  <span className="w-[5px] h-2.5 bg-[#C82333]" />
                  <span className="text-[9px] font-black text-neutral-800 ml-1 leading-none">BE</span>
                </span>
              </div>
              <span className="block text-[8.5px] font-bold tracking-[0.1em] text-neutral-400 uppercase leading-none mt-1">
                {t('nav_subtitle')}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[13px] font-semibold tracking-wide text-toppi-gray-500 hover:text-toppi-red transition-colors duration-300 uppercase">
                {item.label}
              </a>
            ))}
            <LangSwitcher />
            <a href="tel:+32492858750" className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-toppi-red hover:bg-toppi-red-dark text-white text-[13px] font-bold tracking-wider rounded-full transition-all duration-300 uppercase shadow-md shadow-toppi-red/10">
              <PhoneCall size={14} />
              {t('nav_quote')}
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-100">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 100 120" fill="none">
              <path d="M 80 100 L 80 20 L 20 20 L 20 100 L 45 100" stroke="#C82333" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center">
              <span className="text-base font-bold tracking-tight text-toppi-dark">
                Wall<span className="text-toppi-red"> Done</span>
              </span>
              <span className="inline-flex items-center gap-[2px] ml-1.5 bg-neutral-50 border border-neutral-200/60 rounded p-[3px]">
                <span className="w-1 h-2 bg-black" />
                <span className="w-1 h-2 bg-[#FFE135]" />
                <span className="w-1 h-2 bg-[#C82333]" />
                <span className="text-[8px] font-black text-neutral-800 ml-1 leading-none">BE</span>
              </span>
            </div>
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-toppi-gray-600" aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="h-[2px] bg-toppi-gray-100">
          <div className="h-full bg-toppi-red transition-all duration-150" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col pt-20 px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-5 text-xl font-medium text-toppi-gray-700 border-b border-toppi-gray-100 flex items-center justify-between group"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
                <span className="text-toppi-red opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
            ))}
            <LangSwitcher mobile />
            <a href="tel:+32492858750" onClick={() => setMobileOpen(false)} className="mt-8 py-4 px-8 bg-toppi-red text-white text-center text-base font-bold rounded-full shadow-lg shadow-toppi-red/10">
              {t('nav_quote')} (+32 492 85 87 50)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
