import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLang } from '../LangContext';
import { languages } from '../i18n';

export default function LangSwitcher({ mobile = false }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (mobile) {
    return (
      <div className="flex flex-wrap gap-2 mt-6">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              lang === l.code
                ? 'bg-toppi-red text-white'
                : 'bg-toppi-cream text-toppi-gray-500 hover:bg-toppi-gray-100'
            }`}
          >
            {l.flag} {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-toppi-gray-500 hover:text-toppi-red hover:bg-toppi-cream/80 transition-all"
      >
        <Globe size={15} />
        <span>{current.flag}</span>
        <span className="hidden xl:inline">{current.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-toppi-gray-100 overflow-hidden min-w-[160px] z-50"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  lang === l.code
                    ? 'bg-toppi-red/5 text-toppi-red font-semibold'
                    : 'text-toppi-gray-600 hover:bg-toppi-cream'
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span>{l.label}</span>
                {lang === l.code && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-toppi-red" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
