import React from 'react';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import SpineLine from './components/SpineLine';
import MarginDecorations from './components/MarginDecorations';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-toppi-white text-toppi-gray-700 overflow-x-hidden relative">
        <MarginDecorations />
        <Navbar />
        <SpineLine />
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}