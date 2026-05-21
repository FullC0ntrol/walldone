import React from 'react';
import { useLang } from '../LangContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  const cities = ['Leuven', 'Tienen', 'Herent', 'Heverlee', 'Kessel-Lo', 'Wilsele', 'Kortenberg', 'Lubbeek', 'Boutersem', 'Haacht'];
  const keywords = ['Malowanie', 'Malowanie Premium', 'Zabudowy G-K', 'Kompleksowe Remonty'];

  return (
    <footer className="bg-toppi-dark text-white/50 border-t border-neutral-900 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:pr-24 text-center sm:text-left">
        
        {/* Keywords & Cities inline badge cloud */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 mb-6 text-xs text-white/30 border-b border-white/5 pb-6">
          <span className="font-bold text-toppi-red uppercase tracking-wider text-[10px]">USŁUGI:</span>
          {keywords.map((kw, i) => (
            <React.Fragment key={kw}>
              <span className="text-white/60 font-semibold">{kw}</span>
              {i < keywords.length - 1 && <span className="text-white/10">•</span>}
            </React.Fragment>
          ))}
          
          <span className="font-bold text-toppi-red uppercase tracking-wider text-[10px] ml-0 sm:ml-4">OBSZAR:</span>
          {cities.map((city, i) => (
            <React.Fragment key={city}>
              <span className="text-white/60 font-semibold">{city}</span>
              {i < cities.length - 1 && <span className="text-white/10">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Minimal Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <div className="flex items-center gap-2">
            <svg width="24" height="26" viewBox="0 0 100 120" fill="none" className="opacity-80">
              <path d="M 80 100 L 80 20 L 20 20 L 20 100 L 45 100" stroke="#C82333" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold text-white tracking-tight">
              Wall<span className="text-toppi-red"> Done</span> BE
            </span>
          </div>
          
          <p className="text-white/40">
            © {year} Wall Done BE. {t('footer_rights')}
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-white/30 hover:text-toppi-red transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="text-white/30 hover:text-toppi-red transition-colors">{t('footer_terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
