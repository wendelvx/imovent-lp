import React from 'react';
import Hero from '../components/landing/Hero';
import AgitacaoDor from '../components/landing/AgitacaoDor';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import FaqCTA from '../components/landing/FaqCTA';

export default function LandingImovent() {
  return (
    <main className="font-sans text-slate-900 bg-slate-50 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      <Hero />
      <AgitacaoDor />
      <Features />
      <Pricing />
      <FaqCTA />
    </main>
  );
}