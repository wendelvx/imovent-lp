import React from 'react';
import NavBar from './components/landing/NavBar';
import Hero from './components/landing/Hero';
import AgitacaoDor from './components/landing/AgitacaoDor';
import Features from './components/landing/Features';
import Pricing from './components/landing/Pricing';
import FaqCTA from './components/landing/FaqCTA';
import Footer from './components/landing/Footer';

function App() {
  return (
    // O <main> engloba toda a página, aplicando as fontes, cores base 
    // e a cor de seleção premium (texto branco com fundo indigo)
    <main className="font-sans text-slate-900 bg-slate-50 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      {/* NavBar Fixa - O funil permanente que acompanha o scroll */}
      <NavBar />
      
      {/* A Jornada de Conversão */}
      <Hero />
      <AgitacaoDor />
      <Features />
      <Pricing />
      <FaqCTA />
      
      {/* Footer de Autoridade - O fechamento com confiança e segurança */}
      <Footer />
    </main>
  );
}

export default App;