import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from './i18n';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('walldone-lang') || 'pl'; }
    catch { return 'pl'; }
  });

  const changeLang = useCallback((code) => {
    setLang(code);
    try { localStorage.setItem('walldone-lang', code); } catch {}
  }, []);

  const t = useCallback((key) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry['pl'] || key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
