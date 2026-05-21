import React from 'react';
import { useRevealOnScroll } from '../hooks';
import { useLang } from '../LangContext';
import { 
  Paintbrush, Layers, ShieldCheck, Sparkles,
  Brush, Hammer, Frame, Settings, Wrench, Grid, Check
} from 'lucide-react';

export default function Services() {
  const [headerRef, headerVisible] = useRevealOnScroll(0.1);
  const [paintRef, paintVisible] = useRevealOnScroll(0.1);
  const [floorRef, floorVisible] = useRevealOnScroll(0.1);
  const [moreRef, moreVisible] = useRevealOnScroll(0.1);
  const [addRef, addVisible] = useRevealOnScroll(0.1);
  const { t } = useLang();

  const extraServices = [
    { icon: Grid, titleKey: 'add_bathrooms', descKey: 'add_bathrooms_d' },
    { icon: Settings, titleKey: 'add_geberit', descKey: 'add_geberit_d' },
    { icon: Brush, titleKey: 'add_furniture', descKey: 'add_furniture_d' },
    { icon: Frame, titleKey: 'add_doors', descKey: 'add_doors_d' },
    { icon: Hammer, titleKey: 'add_wallpaper', descKey: 'add_wallpaper_d' },
    { icon: Wrench, titleKey: 'add_repairs', descKey: 'add_repairs_d' },
  ];

  return (
    <section id="diensten" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:pr-24 relative z-10">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className={`reveal-section ${headerVisible ? 'is-visible' : ''} mb-20`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-toppi-red" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-toppi-red uppercase">{t('services_tag')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-toppi-dark tracking-tight mb-4">
            {t('services_sec_title')}
          </h2>
          <p className="text-toppi-gray-400 text-lg max-w-2xl font-light">
            {t('services_desc')}
          </p>
        </div>

        {/* CORE SPECIALTY 1: PAINTING */}
        <div ref={paintRef} className={`reveal-section ${paintVisible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28 pb-16 border-b border-neutral-100`}>
          {/* Cover image column */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-md border border-neutral-100">
            <img 
              src="/images/painting_detail.png" 
              alt="Schilderwerken" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-100 shadow-xs flex items-center gap-2">
              <Paintbrush className="text-toppi-red" size={14} />
              <span className="text-[11px] font-black text-neutral-800 tracking-wider uppercase">Wall Done Premium</span>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-extrabold text-toppi-dark tracking-tight mb-3">
                {t('services_title')}
              </h3>
              <p className="text-sm text-toppi-gray-400 font-light leading-relaxed">
                {t('services_desc')}
              </p>
            </div>
            
            {/* Elegant, Clean list of steps with vertical progress tracker line */}
            <div className="relative pl-10 space-y-6">
              {/* Vertical connector track */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-toppi-red via-toppi-red/50 to-neutral-200/50" />
              
              {/* Step 1 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('paint_step1_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('paint_step1_d')}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('paint_step2_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('paint_step2_d')}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('paint_step3_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('paint_step3_d')}</p>
                </div>
              </div>
            </div>

            <div className="bg-toppi-cream border border-neutral-100 rounded-2xl p-4 flex items-center gap-3">
              <Sparkles className="text-toppi-red flex-shrink-0" size={16} />
              <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider leading-relaxed">
                {t('paint_footer')}
              </span>
            </div>
          </div>
        </div>

        {/* CORE SPECIALTY 2: FLOORING */}
        <div ref={floorRef} className={`reveal-section ${floorVisible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28`}>
          {/* Content column */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-extrabold text-toppi-dark tracking-tight mb-3">
                {t('flooring_title')}
              </h3>
              <p className="text-sm text-toppi-gray-400 font-light leading-relaxed">
                {t('flooring_desc')}
              </p>
            </div>
            
            {/* Elegant, Clean list of steps with vertical progress tracker line */}
            <div className="relative pl-10 space-y-6">
              {/* Vertical connector track */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-toppi-red via-toppi-red/50 to-neutral-200/50" />
              
              {/* Step 1 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('floor_step1_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('floor_step1_d')}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('floor_step2_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('floor_step2_d')}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-4 items-start group">
                <div className="absolute left-[-40px] w-8 h-8 rounded-full bg-toppi-red flex items-center justify-center text-xs font-black text-white z-10 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 transition-colors duration-300 group-hover:text-toppi-red">{t('floor_step3_t')}</h4>
                  <p className="text-xs text-toppi-gray-400 font-light mt-0.5 leading-relaxed">{t('floor_step3_d')}</p>
                </div>
              </div>
            </div>

            <div className="bg-toppi-cream border border-neutral-100 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck className="text-toppi-red flex-shrink-0" size={16} />
              <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider leading-relaxed">
                {t('floor_footer')}
              </span>
            </div>
          </div>
          
          {/* Cover image column */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative group overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-md border border-neutral-100">
            <img 
              src="/images/flooring_detail.png" 
              alt="Bodenverlegung" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-100 shadow-xs flex items-center gap-2">
              <Layers className="text-toppi-red" size={14} />
              <span className="text-[11px] font-black text-neutral-800 tracking-wider uppercase">Wall Done Craft</span>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE SERVICES (WIĘCEJ NIŻ MALOWANIE) */}
        <div ref={moreRef} className={`reveal-section ${moreVisible ? 'is-visible' : ''} mb-28 pt-12 border-t border-neutral-100`}>
          <div className="text-center mb-16">
            <h4 className="text-[12px] font-bold tracking-[0.2em] text-toppi-red uppercase mb-3">{t('more_title')}</h4>
            <h3 className="font-display text-3xl font-extrabold text-toppi-dark">{t('more_subtitle')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="hover-card bg-toppi-cream/60 border border-neutral-100 rounded-3xl p-8 relative">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-toppi-red rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-toppi-red/10 flex items-center justify-center mb-6">
                <Paintbrush className="text-toppi-red" size={24} />
              </div>
              <h5 className="text-lg font-bold text-toppi-dark mb-3">{t('svc_premium_paint')}</h5>
              <p className="text-sm text-toppi-gray-400 font-light leading-relaxed">{t('svc_premium_paint_d')}</p>
            </div>
            {/* Box 2 */}
            <div className="hover-card bg-toppi-cream/60 border border-neutral-100 rounded-3xl p-8 relative">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-toppi-red rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-toppi-red/10 flex items-center justify-center mb-6">
                <Hammer className="text-toppi-red" size={24} />
              </div>
              <h5 className="text-lg font-bold text-toppi-dark mb-3">{t('svc_gk')}</h5>
              <p className="text-sm text-toppi-gray-400 font-light leading-relaxed">{t('svc_gk_d')}</p>
            </div>
            {/* Box 3 */}
            <div className="hover-card bg-toppi-cream/60 border border-neutral-100 rounded-3xl p-8 relative">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-toppi-red rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-toppi-red/10 flex items-center justify-center mb-6">
                <Sparkles className="text-toppi-red" size={24} />
              </div>
              <h5 className="text-lg font-bold text-toppi-dark mb-3">{t('svc_renovations_all')}</h5>
              <p className="text-sm text-toppi-gray-400 font-light leading-relaxed">{t('svc_renovations_all_d')}</p>
            </div>
          </div>
        </div>

        {/* ADDITIONAL SERVICES */}
        <div ref={addRef} className={`reveal-section ${addVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <h4 className="text-[12px] font-bold tracking-[0.2em] text-toppi-red uppercase mb-3">{t('add_title')}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-neutral-50/50 hover:bg-toppi-cream/50 border border-neutral-100 hover:border-toppi-red/10 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-neutral-200/30 flex items-center justify-center flex-shrink-0 group-hover:bg-toppi-red transition-all">
                    <Icon size={18} className="text-toppi-red group-hover:text-white transition-all" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-toppi-dark mb-1 group-hover:text-toppi-red transition-all">{t(svc.titleKey)}</h5>
                    <p className="text-xs text-toppi-gray-400 leading-relaxed font-light">{t(svc.descKey)}</p>
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
