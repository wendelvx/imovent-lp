import React from 'react';
import NavBar from './components/landing/NavBar';
import Hero from './components/landing/Hero';
import AgitacaoDor from './components/landing/AgitacaoDor';
import EngineCustomization from './components/landing/EngineCustomization';
import LeadDossier from './components/landing/LeadDossier';
import GovernanceSecurity from './components/landing/GovernanceSecurity';
import Features from './components/landing/Features';
import Pricing from './components/landing/Pricing';
import FaqCTA from './components/landing/FaqCTA';
import Footer from './components/landing/Footer';

function App() {
  return (
    // O <main> engloba toda a infraestrutura, garantindo a tipografia
    // e a cor de seleção premium (texto branco com fundo indigo)
    <main className="font-sans text-slate-900 bg-slate-50 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      
      {/* NavBar Fixa - O funil permanente que acompanha o scroll */}
      <NavBar />
      
      {/* 1. O Choque de Realidade */}
      <Hero />
      
      {/* 2. O Diagnóstico Clínico (Agitação da Dor) */}
      <AgitacaoDor />
      
      {/* 3. A Infraestrutura AAA (Novos Componentes de Governança e Poder) */}
      <EngineCustomization />
      <LeadDossier />
      <GovernanceSecurity />
      
      {/* 4. Escala e Eficiência Cirúrgica (Automações) */}
      <Features />
      
      {/* 5. A Aquisição do Ativo (Monetização) */}
      <Pricing />
      
      {/* 6. Quebra de Objeções e Fechamento */}
      <FaqCTA />
      
      {/* Footer de Autoridade */}
      <Footer />
      
    </main>
  );
}

export default App;
