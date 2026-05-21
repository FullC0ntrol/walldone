import React from 'react';
import { useRevealOnScroll } from '../hooks';
import { useLang } from '../LangContext';
import { ClipboardCheck, Palette, HardHat, ThumbsUp } from 'lucide-react';

export default function Process() {
  const [ref, visible] = useRevealOnScroll(0.1);
  const { t } = useLang();

  const steps = [
    { icon: ClipboardCheck, num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { icon: Palette, num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { icon: HardHat, num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
    { icon: ThumbsUp, num: '04', titleKey: 'step4_title', descKey: 'step4_desc' },
  ];

  return (
    <section id="werkwijze" className="py-24 sm:py-32 bg-toppi-cream">
      <div className="max-w-6xl mx-auto px-6 lg:pr-24">
        <div ref={ref} className={`reveal-section ${visible ? 'is-visible' : ''} mb-16`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-toppi-red" />
            <span className="text-[12px] font-semibold tracking-[0.2em] text-toppi-red uppercase">{t('process_tag')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-toppi-dark tracking-tight mb-4">{t('process_title')}</h2>
          <p className="text-toppi-gray-400 text-lg max-w-2xl font-light">{t('process_desc')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-[39px] top-10 bottom-[110px] w-[2px] bg-toppi-gray-200">
            <div className="w-full bg-toppi-red transition-all duration-1000" style={{ height: visible ? '100%' : '0%' }} />
          </div>

          <div className={`stagger-children ${visible ? 'is-visible' : ''} space-y-8`}>
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="flex gap-6 md:gap-10 items-start group">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-toppi-gray-100 group-hover:border-toppi-red flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon size={28} className="text-toppi-red" />
                    </div>
                  </div>
                  <div className="pt-2 pb-6">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-toppi-red mb-1 uppercase">{t('step')} {s.num}</div>
                    <h3 className="text-xl font-semibold text-toppi-dark mb-2 tracking-tight">{t(s.titleKey)}</h3>
                    <p className="text-toppi-gray-400 leading-relaxed max-w-lg">{t(s.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
