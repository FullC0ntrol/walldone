import React from 'react';
import { useLang } from '../LangContext';
import { useRevealOnScroll } from '../hooks';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [ref, visible] = useRevealOnScroll(0.02);
  const { t } = useLang();

  return (
    <section id="contact" ref={ref} className={`reveal-section ${visible ? 'is-visible' : ''} py-24 sm:py-32 bg-white relative`}>
      {/* Dynamic Background subtle elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 lg:pr-24 relative z-10">
        
        {/* Outer Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct and clear Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-toppi-red" />
                <span className="text-xs font-black tracking-widest text-toppi-red uppercase">{t('contact_tag')}</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-toppi-dark tracking-tight leading-none mb-6">
                {t('contact_title')}
              </h2>
              <p className="text-toppi-gray-400 text-base font-light leading-relaxed">
                {t('contact_desc')}
              </p>
            </div>

            {/* Direct List of Details */}
            <div className="space-y-6">
              
              {/* Telephone */}
              <a 
                href="tel:+32492858750" 
                className="flex items-center gap-5 group py-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:bg-toppi-red group-hover:border-toppi-red transition-all duration-300">
                  <Phone size={20} className="text-toppi-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block mb-0.5">
                    {t('info_phone')}
                  </span>
                  <span className="text-base font-extrabold text-toppi-dark group-hover:text-toppi-red transition-colors">
                    +32 492 85 87 50
                  </span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:walldonebelgium@gmail.com" 
                className="flex items-center gap-5 group py-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:bg-toppi-red group-hover:border-toppi-red transition-all duration-300">
                  <Mail size={20} className="text-toppi-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block mb-0.5">
                    E-mail
                  </span>
                  <span className="text-base font-extrabold text-toppi-dark group-hover:text-toppi-red transition-colors">
                    walldonebelgium@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick Link */}
              <a 
                href="https://wa.me/32492858750" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 group py-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100/50 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                  <MessageSquare size={20} className="text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase block mb-0.5">
                    WhatsApp Quick Connection
                  </span>
                  <span className="text-base font-extrabold text-toppi-dark group-hover:text-[#25D366] transition-colors">
                    {t('info_whatsapp')}
                  </span>
                </div>
              </a>

              {/* Area */}
              <div className="flex items-center gap-5 py-2">
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100">
                  <MapPin size={20} className="text-toppi-dark" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block mb-0.5">
                    {t('info_location')}
                  </span>
                  <span className="text-base font-extrabold text-toppi-dark">
                    {t('info_location_v')}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-5 py-2">
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100">
                  <Clock size={20} className="text-toppi-dark" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block mb-0.5">
                    {t('info_hours')}
                  </span>
                  <span className="text-base font-extrabold text-toppi-dark">
                    {t('info_hours_v')}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Super Clean, High Contrast Form */}
          <div className="lg:col-span-7 bg-neutral-50 p-8 sm:p-12 rounded-3xl border border-neutral-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-toppi-dark uppercase mb-2">
                    {t('form_name')}
                  </label>
                  <input 
                    type="text" 
                    placeholder={t('form_name_ph')} 
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 bg-white focus:border-toppi-red focus:ring-1 focus:ring-toppi-red outline-none transition-all text-sm font-medium text-toppi-dark" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-toppi-dark uppercase mb-2">
                    {t('form_email')}
                  </label>
                  <input 
                    type="email" 
                    placeholder="info@walldone.be" 
                    className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 bg-white focus:border-toppi-red focus:ring-1 focus:ring-toppi-red outline-none transition-all text-sm font-medium text-toppi-dark" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider text-toppi-dark uppercase mb-2">
                  {t('form_phone')}
                </label>
                <input 
                  type="tel" 
                  placeholder="+32 ..." 
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 bg-white focus:border-toppi-red focus:ring-1 focus:ring-toppi-red outline-none transition-all text-sm font-medium text-toppi-dark" 
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider text-toppi-dark uppercase mb-2">
                  {t('form_message')}
                </label>
                <textarea 
                  rows={5} 
                  placeholder={t('form_message_ph')} 
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-300 bg-white focus:border-toppi-red focus:ring-1 focus:ring-toppi-red outline-none transition-all text-sm font-medium text-toppi-dark resize-none leading-relaxed" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-toppi-red hover:bg-toppi-red-dark text-white text-xs font-black tracking-widest rounded-full transition-all duration-300 uppercase shadow-md shadow-toppi-red/10"
              >
                <span>{t('form_send')}</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
