import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Globais
import NavBar from './components/landing/NavBar';
import Footer from './components/landing/Footer';

// Componentes da Landing Page
import Hero from './components/landing/Hero';
import AgitacaoDor from './components/landing/AgitacaoDor';
import EngineCustomization from './components/landing/EngineCustomization';
import LeadDossier from './components/landing/LeadDossier';
import GovernanceSecurity from './components/landing/GovernanceSecurity';
import Features from './components/landing/Features';
import Pricing from './components/landing/Pricing';
import FaqCTA from './components/landing/FaqCTA';

// Seus novos componentes de página
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

// 1. Criamos um componente para agrupar a estrutura da Landing Page
const LandingPage = () => (
  <>
    {/* ETAPA 1: O Gancho */}
    <Hero />
    
    {/* ETAPA 2: A Identificação */}
    <AgitacaoDor />
    
    {/* ETAPA 3: A Prova de Poder */}
    <div id="solucao">
      <EngineCustomization />
      <LeadDossier />
      <GovernanceSecurity />
    </div>
    
    {/* ETAPA 4: A Escala */}
    <section id="funcionalidades">
      <Features />
    </section>
    
    {/* ETAPA 5: O Valor */}
    <section id="precos">
      <Pricing />
    </section>
    
    {/* ETAPA 6: Quebra de Objeções */}
    <FaqCTA />
  </>
);

function App() {
  return (
    <Router>
      <main className="font-sans text-slate-900 bg-slate-50 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
        
        {/* A NavBar fica fora do Routes para aparecer em todas as páginas */}
        <NavBar />
        
        <Routes>
          {/* Rota Raiz: Carrega toda a estrutura da Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Rotas Jurídicas */}
          <Route path="/termos" element={<TermsOfUse />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
        </Routes>
        
        {/* O Footer também fica fixo na base de qualquer rota selecionada */}
        <Footer />
        
      </main>
    </Router>
  );
}

export default App;