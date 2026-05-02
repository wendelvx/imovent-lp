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
    /* 
      Container Principal: 
      Mantemos o bg-slate-50 para suavidade e a seleção premium.
      O overflow-x-hidden evita quebras horizontais em animações de entrada.
    */
    <main className="font-sans text-slate-900 bg-slate-50 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      
      {/* Funil Permanente: NavBar sempre visível para ação imediata */}
      <NavBar />
      
      {/* ETAPA 1: O Gancho (Abertura com Alívio) */}
      <Hero />
      
      {/* ETAPA 2: A Identificação (Empatia com a desorganização real) */}
      <AgitacaoDor />
      
      {/* ETAPA 3: A Prova de Poder (Flexibilidade e Segurança dos Dados) */}
      <div id="solucao">
        <EngineCustomization />
        <LeadDossier />
        <GovernanceSecurity />
      </div>
      
      {/* ETAPA 4: A Escala (Ocupando o tempo com o que importa) */}
      <section id="funcionalidades">
        <Features />
      </section>
      
      {/* ETAPA 5: O Valor (Investimento Inteligente) */}
      <section id="precos">
        <Pricing />
      </section>
      
      {/* ETAPA 6: Quebra de Objeções & Terminal de Entrada */}
      <FaqCTA />
      
      {/* Fechamento de Autoridade */}
      <Footer />
      
    </main>
  );
}

export default App;
