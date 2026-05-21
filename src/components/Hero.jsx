import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../LangContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-toppi-cream" />
      </div>

      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.07]" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M0,200 Q360,100 720,250 T1440,180" stroke="#C82333" strokeWidth="2" fill="none" className="line-draw" />
        <path d="M0,500 Q480,400 960,550 T1440,480" stroke="#C82333" strokeWidth="1.5" fill="none" className="line-draw" style={{ animationDelay: '0.8s' }} />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Main Logo Path */}
        <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <svg width="90" height="100" viewBox="0 0 100 120" fill="none">
            <motion.path d="M 80 100 L 80 20 L 20 20 L 20 100 L 45 100" stroke="#C82333" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }} />
          </svg>
        </motion.div>

        {/* Brand Name Title */}
        <motion.h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-toppi-dark mb-4 flex items-center justify-center flex-wrap gap-x-4 gap-y-2" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
          <span>{t('hero_title_1')}</span>
          <span className="text-toppi-red">{t('hero_title_2')}</span>
        </motion.h1>

        {/* Acronym Explainer / Slogan */}
        <motion.div 
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-neutral-100/80 backdrop-blur-md rounded-full border border-neutral-200/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-xs font-bold text-neutral-600 tracking-wider uppercase">
            Betrouwbaar & Ervaren
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-toppi-red" />
          <span className="text-xs font-bold text-neutral-500">
            Belgium
          </span>
        </motion.div>

        {/* Primary Subtitle */}
        <motion.p className="text-lg sm:text-xl text-toppi-gray-400 max-w-2xl mx-auto mb-3 font-light leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          {t('hero_subtitle')}
        </motion.p>
        
        {/* Core Services Tagline */}
        <motion.p className="text-sm sm:text-base text-toppi-gray-300 max-w-2xl mx-auto mb-10 font-semibold uppercase tracking-wider" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
          {t('hero_services_line')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <a href="#contact" className="px-10 py-4 bg-toppi-red hover:bg-toppi-red-dark text-white text-sm font-bold tracking-wider rounded-full transition-all duration-300 pulse-glow uppercase shadow-lg shadow-toppi-red/20">
            {t('hero_cta')}
          </a>
          <a href="#portfolio" className="px-10 py-4 border-2 border-toppi-gray-200 hover:border-toppi-red text-toppi-gray-600 hover:text-toppi-red text-sm font-bold tracking-wider rounded-full transition-all duration-300 uppercase">
            {t('hero_projects')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-toppi-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">{t('scroll')}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
