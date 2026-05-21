import React from 'react';
import { useRevealOnScroll } from '../hooks';
import { useLang } from '../LangContext';
import { ShieldCheck, Sparkles, Award } from 'lucide-react';

export default function Stats() {
  const [ref, visible] = useRevealOnScroll(0.1);
  const { t } = useLang();

  const values = [
    {
      icon: Award,
      titleKey: 'promise_quality_t',
      descKey: 'promise_quality_d'
    },
    {
      icon: ShieldCheck,
      titleKey: 'promise_clean_t',
      descKey: 'promise_clean_d'
    },
    {
      icon: Sparkles,
      titleKey: 'promise_local_t',
      descKey: 'promise_local_d'
    }
  ];

  return (
    <section className="py-20 bg-toppi-cream/60 border-y border-toppi-gray-100 relative overflow-hidden">
      {/* Background soft ambient dots */}
      <div className="absolute top-0 left-10 w-4 h-4 bg-toppi-red/5 rounded-full blur-xs" />
      <div className="absolute bottom-10 right-20 w-8 h-8 bg-toppi-red/[0.03] rounded-full blur-sm" />

      <div className="max-w-6xl mx-auto px-6 lg:pr-24 relative z-10">
        <div 
          ref={ref} 
          className={`stagger-children ${visible ? 'is-visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12`}
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div 
                key={i} 
                className="hover-card bg-white p-8 rounded-3xl border border-neutral-200/50 shadow-xs flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-toppi-red/5 flex items-center justify-center mb-6 group-hover:bg-toppi-red transition-all duration-300">
                  <Icon size={24} className="text-toppi-red group-hover:text-white transition-all duration-300" />
                </div>
                <h4 className="text-base font-bold text-toppi-dark mb-3 tracking-tight group-hover:text-toppi-red transition-colors">
                  {t(v.titleKey)}
                </h4>
                <p className="text-xs sm:text-sm text-toppi-gray-400 font-light leading-relaxed">
                  {t(v.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
