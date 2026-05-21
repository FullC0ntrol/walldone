import React from 'react';
import { useRevealOnScroll } from '../hooks';
import { useLang } from '../LangContext';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [ref, visible] = useRevealOnScroll(0.1);
  const { t } = useLang();

  const testimonials = [
    { name: 'Anna K.', location: 'Leuven', textKey: 'review1', rating: 5 },
    { name: 'Marc V.', location: 'Heverlee', textKey: 'review2', rating: 5 },
    { name: 'Sophie D.', location: 'Kessel-Lo', textKey: 'review3', rating: 5 },
  ];

  return (
    <section id="over-ons" className="py-24 sm:py-32 bg-toppi-cream">
      <div className="max-w-6xl mx-auto px-6 lg:pr-24">
        <div ref={ref} className={`reveal-section ${visible ? 'is-visible' : ''} mb-16`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-toppi-red" />
            <span className="text-[12px] font-semibold tracking-[0.2em] text-toppi-red uppercase">{t('testimonials_tag')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-toppi-dark tracking-tight mb-4">{t('testimonials_title')}</h2>
        </div>

        <div className={`stagger-children ${visible ? 'is-visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {testimonials.map((r) => (
            <div key={r.name} className="hover-card bg-white rounded-2xl p-8 border border-toppi-gray-100 relative">
              <div className="absolute top-6 right-6 text-toppi-red/10"><Quote size={40} /></div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-toppi-red text-toppi-red" />
                ))}
              </div>
              <p className="text-toppi-gray-500 leading-relaxed mb-6 text-[15px]">"{t(r.textKey)}"</p>
              <div className="border-t border-toppi-gray-100 pt-4">
                <p className="font-semibold text-toppi-dark text-sm">{r.name}</p>
                <p className="text-[12px] text-toppi-gray-300">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
