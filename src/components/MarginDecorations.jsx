import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MarginDecorations() {
  const containerRef = useRef(null);
  
  // Track scroll position of the entire page
  const { scrollYProgress } = useScroll();
  
  // Fade out extremely fast so the decorations vanish by 15% scroll
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const boxRotate = useTransform(scrollYProgress, [0, 0.15], [0, 180]);

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 right-0 h-[45vh] z-[-1] overflow-hidden hidden xl:block"
    >
      {/* ─── LEFT MARGIN: SMALL COMPACT RED WAVY RIBBON ─── */}
      <motion.div 
        className="absolute left-6 top-8 w-12 flex flex-col items-center gap-6"
        style={{ opacity, y: yOffset }}
      >
        {/* Compact red ribbon SVG */}
        <svg 
          width="24" 
          height="160" 
          viewBox="0 0 24 160" 
          fill="none" 
          className="text-toppi-red"
        >
          <path 
            d="M 12 0 Q 20 40 12 80 T 12 160" 
            stroke="#C82333" 
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Small floating geometric box */}
        <motion.div 
          className="w-5 h-5 border border-toppi-red/30 rounded-md"
          style={{ rotate: boxRotate }}
        />
      </motion.div>

      {/* ─── RIGHT MARGIN: SMALL COMPACT RED WAVY RIBBON ─── */}
      <motion.div 
        className="absolute right-6 top-8 w-12 flex flex-col items-center gap-6"
        style={{ opacity, y: yOffset }}
      >
        {/* Compact mirrored red ribbon SVG */}
        <svg 
          width="24" 
          height="160" 
          viewBox="0 0 24 160" 
          fill="none" 
          className="text-toppi-red"
        >
          <path 
            d="M 12 0 Q 4 40 12 80 T 12 160" 
            stroke="#C82333" 
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Small rotating circle */}
        <motion.div 
          className="w-6 h-6 border border-toppi-red/25 rounded-full flex items-center justify-center"
          style={{ rotate: boxRotate }}
        >
          <div className="w-1.5 h-1.5 bg-toppi-red/30 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
