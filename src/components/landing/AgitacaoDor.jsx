import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, EyeOff, AlertTriangle, TrendingDown, Database, Search, UserMinus } from 'lucide-react';

// --- CONFIGURAÇÕES DE ANIMAÇÃO GLOBAIS ---
const ultraSmoothEase = [0.19, 1, 0.22, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const textVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ultraSmoothEase } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: ultraSmoothEase } }
};

// --- COMPONENTES VISUAIS ---

const VisualInvisibilidade = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" className="absolute top-4 md:top-8 left-4 md:left-8 w-full h-full">
        <rect x="0" y="0" width="300" height="150" rx="8" stroke="#334155" strokeWidth="2" fill="#020408" />
        <circle cx="20" cy="20" r="4" fill="#334155" />
        <circle cx="35" cy="20" r="4" fill="#334155" />
        <rect x="55" y="15" width="200" height="10" rx="4" fill="#1e293b" />
        
        <motion.g 
          animate={{ x: [0, 50, 100, 150, 0], opacity: [0.5, 1, 1, 0, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="80" cy="80" r="15" stroke="#e11d48" strokeWidth="3" />
          <path d="M90 90 L105 105" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
          <motion.path 
            d="M75 75 L85 85 M85 75 L75 85" 
            stroke="#e11d48" 
            strokeWidth="2"
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.8] }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

const VisualWhatsappCaos = () => {
  return (
    <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${Math.random() * 60 + 20}%`, top: '-20%' }}
          animate={{
            top: ['-10%', '120%'],
            opacity: [0, 1, 0],
            rotate: [0, Math.random() * 30 - 15],
            scale: [0.8, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeIn"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#e11d48" fillOpacity="0.2"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const VisualRefemPortais = () => {
  return (
    <div className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-40 h-40 md:w-48 md:h-48 opacity-[0.08] group-hover:opacity-30 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
      <Globe className="w-full h-full text-indigo-500 absolute" strokeWidth={0.5} />
    </div>
  );
};

const VisualCarteiraFragil = () => {
  return (
    <div className="absolute inset-0 p-6 opacity-[0.15] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        <Database className="w-8 h-8 text-slate-700 absolute" />
        {[...Array(3)].map((_, i) => {
          const angle = (i * 120) * (Math.PI / 180);
          return (
            <motion.div key={i} className="absolute flex flex-col items-center">
              <motion.div 
                animate={{ 
                  x: [Math.cos(angle) * 30, Math.cos(angle) * 80], 
                  y: [Math.sin(angle) * 30, Math.sin(angle) * 80],
                  opacity: [1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
                className="bg-emerald-900/30 p-2 rounded-full border border-emerald-800"
              >
                <UserMinus className="w-4 h-4 text-emerald-500" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Efeito 3D sutil
const TiltWrapper = ({ children }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) - bounds.width / 2;
    const y = (e.clientY - bounds.top) - bounds.height / 2;
    setRotate({ x: -y / 40, y: x / 40 }); 
  };

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      className="h-full w-full"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function AgitacaoDorPremium() {
  return (
    <section className="bg-[#020408] py-24 md:py-32 px-6 lg:px-12 border-y border-slate-900 relative overflow-hidden antialiased">
      
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle fill="#ffffff" cx="1" cy="1" r="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-rose-900/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer} className="mb-16 md:mb-24 max-w-4xl"
        >
          <motion.div variants={textVariant} className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-950/20 border border-rose-900/30 mb-6 rounded-full">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] font-bold text-rose-300 tracking-[0.2em] uppercase">Diagnóstico Rápido</span>
          </motion.div>
          
          <motion.h2 variants={textVariant} className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white tracking-tighter leading-[1.05] group">
            Veja onde sua operação está <span className="text-rose-500 relative inline-block">deixando dinheiro<span className="absolute bottom-2 left-0 w-full h-1 bg-rose-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span></span> na mesa.
          </motion.h2>
          
          <motion.p variants={textVariant} className="mt-8 text-lg md:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            Muitas vezes, a falta de vendas não é culpa do mercado, mas sim de processos que dependem apenas da memória humana. Veja se você reconhece algum destes cenários:
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          
          {/* Card 1: Invisibilidade Digital */}
          <motion.div variants={cardVariant} className="lg:col-span-3 group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#05080f] hover:border-slate-700 transition-all duration-500 h-[380px] md:h-[400px]">
            <TiltWrapper>
              <VisualInvisibilidade />
              <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                <div className="w-12 h-12 bg-slate-900/50 flex items-center justify-center rounded-xl border border-slate-800 mb-8 group-hover:border-slate-700 transition-all duration-500">
                  <EyeOff className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Sem vitrine própria.</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-md mb-6">
                    Depender apenas de redes sociais e portais é construir sua casa em terreno alugado. Sem um site com a sua marca, o cliente pesquisa no Google e acaba caindo no colo da concorrência.
                  </p>
                  <div className="pt-5 border-t border-slate-800/50 flex items-center gap-3 text-slate-600 group-hover:text-rose-400/80 transition-colors">
                      <Search className="w-4 h-4"/>
                      <span className="text-xs font-mono tracking-wider">Resultado: Empresa não encontrada</span>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>

          {/* Card 2: Caos do WhatsApp */}
          <motion.div variants={cardVariant} className="lg:col-span-3 group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#05080f] hover:border-indigo-900/50 transition-all duration-500 h-[380px] md:h-[400px]">
            <TiltWrapper>
              <VisualWhatsappCaos />
              <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-slate-900/50 flex items-center justify-center rounded-xl border border-slate-800 group-hover:border-indigo-500/30 transition-all duration-500">
                     <MessageCircle className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors duration-300" />
                  </div>
                  <motion.span 
                    animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="bg-rose-500/10 text-rose-500 border border-rose-500/20 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest">
                    Esquecido
                  </motion.span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">O funil furado do WhatsApp.</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-md mb-6">
                    Mensagens lidas e esquecidas. O cliente esfria porque você demorou a responder no meio de 200 conversas misturadas. Sem organizar o contato, cada lead vira um risco de venda perdida.
                  </p>
                  <div className="pt-5 border-t border-slate-800/50 flex flex-col gap-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Taxa de Perda por desorganização</span>
                    <div className="h-1.5 w-full max-w-[200px] bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-rose-500 rounded-full" 
                        initial={{ width: "10%" }} whileInView={{ width: "87%" }} viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: ultraSmoothEase }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>

          {/* Card 3: Refém de Portais */}
          <motion.div variants={cardVariant} className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#05080f] hover:border-indigo-900/30 transition-all duration-500 h-[300px]">
            <TiltWrapper>
              <VisualRefemPortais />
              <div className="p-8 h-full flex flex-col relative z-10">
                <Globe className="w-8 h-8 text-slate-600 mb-6 group-hover:text-indigo-400 transition-colors duration-500" />
                
                <div className="mt-auto">
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Sem Marca Própria.</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Você paga caro para anunciar onde seu imóvel é só mais um. Você gera o acesso, mas toda a autoridade visual e credibilidade ficam para o portal, não para a sua empresa.
                  </p>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>

          {/* Card 4: Carteira Frágil */}
          <motion.div variants={cardVariant} className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#05080f] hover:border-emerald-900/30 transition-all duration-500 h-[300px]">
            <TiltWrapper>
              <VisualCarteiraFragil />
              <div className="p-8 h-full flex flex-col relative z-10">
                <Database className="w-8 h-8 text-slate-600 mb-6 group-hover:text-emerald-500 transition-colors duration-500" />
                
                <div className="mt-auto">
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Carteira Frágil.</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Sua base de clientes está espalhada em agendas e celulares. Se um corretor sai da equipe, o histórico inteiro daquele cliente vai embora junto com ele.
                  </p>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>

          {/* Card 5: Gasto Cego */}
          <motion.div variants={cardVariant} className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#05080f] hover:border-rose-900/30 transition-all duration-500 h-[300px]">
            <div className="p-8 h-full flex flex-col relative z-10">
              <TrendingDown className="w-8 h-8 text-slate-600 mb-6 group-hover:text-rose-500 transition-colors duration-500" />
              
              <div className="mt-auto">
                <h3 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Gasto Cego.</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Você investe em marketing, mas não sabe exatamente qual campanha ou placa trouxe o cliente que fechou contrato. É impossível escalar o que não se mede.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: ultraSmoothEase }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border border-slate-800 bg-slate-900/30 backdrop-blur-sm shadow-sm">
            <p className="text-slate-400 font-bold tracking-[0.15em] uppercase text-xs">
              Reconhece algum desses cenários? O Imovent foi criado para resolver isso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}