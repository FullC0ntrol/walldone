import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRevealOnScroll } from '../hooks';
import { useLang } from '../LangContext';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function Portfolio() {
  const [ref, visible] = useRevealOnScroll(0.05);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLang();

  const projects = [
    {
      id: 1,
      folder: 'realization1',
      picsCount: 12,
      cover: '/realization/realization1/pic (1).png',
      catKey: 'p_item1_c',
      titleKey: 'p_item1_t',
      filter: 'renovation',
      location: 'Leuven'
    },
    {
      id: 2,
      folder: 'realization2',
      picsCount: 4,
      cover: '/realization/realization2/pic (1).png',
      catKey: 'p_item2_c',
      titleKey: 'p_item2_t',
      filter: 'flooring',
      location: 'Heverlee'
    },
    {
      id: 3,
      folder: 'realization3',
      picsCount: 4,
      cover: '/realization/realization3/pic (1).png',
      catKey: 'p_item3_c',
      titleKey: 'p_item3_t',
      filter: 'flooring',
      location: 'Kessel-Lo'
    },
    {
      id: 4,
      folder: 'realization4',
      picsCount: 4,
      cover: '/realization/realization4/pic (1).png',
      catKey: 'p_item4_c',
      titleKey: 'p_item4_t',
      filter: 'renovation',
      location: 'Wilsele'
    },
    {
      id: 5,
      folder: 'realization5',
      picsCount: 4,
      cover: '/realization/realization5/pic (1).png',
      catKey: 'p_item5_c',
      titleKey: 'p_item5_t',
      filter: 'drywall',
      location: 'Herent'
    },
    {
      id: 6,
      folder: 'realization6',
      picsCount: 4,
      cover: '/realization/realization6/pic (1).png',
      catKey: 'p_item6_c',
      titleKey: 'p_item6_t',
      filter: 'flooring',
      location: 'Leuven'
    }
  ];

  const categories = [
    { key: 'all', labelKey: 'filter_all' },
    { key: 'painting', labelKey: 'svc_painting' },
    { key: 'drywall', labelKey: 'svc_gk' },
    { key: 'flooring', labelKey: 'flooring_title' },
    { key: 'renovation', labelKey: 'svc_renovations_all' },
  ];

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.filter === activeFilter);

  const openLightbox = (proj) => {
    setSelectedProject(proj);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.picsCount);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.picsCount) % selectedProject.picsCount);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:pr-24">
        
        {/* SECTION HEADER */}
        <div ref={ref} className={`reveal-section ${visible ? 'is-visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-toppi-red" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-toppi-red uppercase">{t('portfolio_sec_tag')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-toppi-dark tracking-tight mb-4">
            {t('portfolio_sec_title')}
          </h2>
          <p className="text-toppi-gray-400 text-lg max-w-2xl font-light">
            {t('portfolio_sec_desc')}
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveFilter(c.key)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === c.key
                  ? 'bg-toppi-red text-white shadow-md shadow-toppi-red/10'
                  : 'bg-toppi-cream text-toppi-gray-500 hover:bg-toppi-gray-100'
              }`}
            >
              {t(c.labelKey)}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:border-toppi-red/20 shadow-xs hover:shadow-md transition-all duration-300"
                onClick={() => openLightbox(p)}
              >
                {/* Image card portion */}
                <div className="relative overflow-hidden aspect-[4/3] bg-toppi-cream">
                  <img
                    src={p.cover}
                    alt={t(p.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Always-visible elegant count badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-100 shadow-xs flex items-center gap-2 z-20">
                    <span className="text-[10px] font-black text-neutral-800 tracking-wider uppercase flex items-center gap-1.5">
                      📸 {p.picsCount === 4 ? t('pics_count_4') : t('pics_count_12')}
                    </span>
                  </div>

                  {/* Zoom indicator on hover */}
                  <div className="absolute inset-0 bg-toppi-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-toppi-red scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>

                {/* Always-visible clean title & category block below the image */}
                <div className="p-6 bg-white border-t border-neutral-50">
                  <span className="text-[9px] font-black text-toppi-red tracking-[0.2em] uppercase block mb-1">
                    {t(p.catKey)}
                  </span>
                  <h3 className="text-base font-bold text-toppi-dark tracking-tight leading-snug group-hover:text-toppi-red transition-colors duration-300 mb-1">
                    {t(p.titleKey)}
                  </h3>
                  <p className="text-xs text-toppi-gray-400 font-light">
                    {p.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MULTI-IMAGE LIGHTBOX SLIDER */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] bg-toppi-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container with navigation buttons */}
              <div className="relative aspect-[4/3] w-full bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
                <img
                  src={`/realization/${selectedProject.folder}/pic (${currentImageIndex + 1}).png`}
                  alt={`${t(selectedProject.titleKey)} - ${currentImageIndex + 1}`}
                  className="max-h-[70vh] max-w-full object-contain"
                />

                {/* Left arrow */}
                {selectedProject.picsCount > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                {/* Right arrow */}
                {selectedProject.picsCount > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[10px] text-toppi-red-light font-bold tracking-[0.15em] uppercase mb-1">
                    {t(selectedProject.catKey)}
                  </p>
                  <h3 className="text-xl font-bold text-white leading-none mb-1">
                    {t(selectedProject.titleKey)}
                  </h3>
                  <p className="text-xs text-white/50">
                    {selectedProject.location} · Zdjęcie {currentImageIndex + 1} z {selectedProject.picsCount}
                  </p>
                </div>
              </div>

              {/* Dot Indicators */}
              {selectedProject.picsCount > 1 && (
                <div className="flex justify-center gap-1.5 mt-4 max-w-full flex-wrap">
                  {Array.from({ length: selectedProject.picsCount }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'w-6 bg-toppi-red' : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 sm:top-4 -right-2 sm:right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 border border-white/10 flex items-center justify-center text-white text-xl transition-all"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
