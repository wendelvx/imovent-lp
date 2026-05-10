import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Wand2, ArrowRight, CheckSquare, Globe, Search, LayoutDashboard, Database, Image as ImageIcon, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const abstractUIStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function Features() {
  // Estado para controlar qual imagem de site está sendo exibida
  const [activeSite, setActiveSite] = useState(0);
  
  // Substitua pelos caminhos reais das suas imagens
  const sites = [
    "/executive-hero.webp",
    "/architect-hero.webp",
    "/visionary-hero.webp"
  ];

  const nextSite = () => setActiveSite((prev) => (prev + 1) % sites.length);
  const prevSite = () => setActiveSite((prev) => (prev - 1 + sites.length) % sites.length);

  return (
    <section className="bg-white py-32 px-6 lg:px-12 relative overflow-hidden border-b border-slate-200">
      
      {/* Título de Comando (Mais leve e convidativo) */}
      <div className="max-w-6xl mx-auto mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[11px] font-[800] text-indigo-700 uppercase tracking-[0.3em] mb-4">Ferramentas que trabalham por você</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter">
            A infraestrutura que <span className="text-indigo-600">organiza a casa</span> e acelera as vendas.
          </h3>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-32 lg:gap-40">
        
        {/* Feature 1: CRM & WhatsApp Engine */}
        <motion.div id="crm-engine" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border-2 border-indigo-200 shadow-[2px_2px_0px_0px_rgba(79,70,229,0.2)] mb-6">
              <LayoutDashboard className="w-4 h-4 text-indigo-700" />
              <span className="text-[10px] font-black text-indigo-900 tracking-widest uppercase">Gestão Simplificada</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Pare de perder vendas no meio das conversas do WhatsApp.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Usar só o WhatsApp é pedir para esquecer de responder alguém. O Imovent transforma suas conversas em um funil organizado. Salve o contato, anotações e agende o próximo passo sem nunca sair da tela do chat.
            </p>
            <ul className="space-y-4">
              {['Histórico salvo para sempre (mesmo se perder o celular).', 'Lembretes automáticos para não esquecer de ninguém.', 'Mova o cliente de etapa com um clique.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-900 font-bold text-sm tracking-wide">
                  <CheckSquare className="w-5 h-5 text-indigo-600 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="order-1 lg:order-2 bg-slate-50 border-2 border-slate-900 p-8 shadow-solid-premium relative">
            <motion.div variants={abstractUIStagger} className="w-full max-w-sm mx-auto bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6 relative z-10">
              
              {/* Contato do WhatsApp */}
              <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 border-2 border-slate-900 flex items-center justify-center relative shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <User className="text-white w-6 h-6"/>
                  <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-emerald-300 border-2 border-slate-900 flex items-center justify-center rounded-full">
                     <MessageCircle className="w-2.5 h-2.5 text-slate-900 fill-slate-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-black text-slate-900 tracking-tight leading-tight mb-0.5">Ricardo Almeida</h4>
                  <p className="text-[10px] font-bold text-slate-500 font-mono tracking-widest">+55 11 99999-9999</p>
                </div>
              </div>
              
              <div className="space-y-4 relative">
                {/* Simulação de mensagem */}
                <motion.div variants={popIn} className="w-full bg-slate-50 border-2 border-slate-200 p-4 relative rounded-r-2xl rounded-bl-2xl">
                   <p className="text-[11px] text-slate-700 font-bold mb-3 leading-relaxed">"Gostei muito daquela casa com 3 suítes, podemos agendar uma visita para sábado à tarde?"</p>
                   <span className="text-[9px] font-black text-slate-400 absolute bottom-2 right-3">14:30</span>
                </motion.div>

                {/* Botão Brutalista de Salvar */}
                <motion.div variants={popIn} className="h-14 w-full bg-indigo-600 border-2 border-indigo-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] relative flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors mt-6">
                   <Zap className="w-4 h-4 text-indigo-200 mr-2" />
                   <span className="text-white font-black text-[10px] uppercase tracking-widest">Extrair para o Imovent</span>
                </motion.div>
                
                {/* Etiqueta Flutuante */}
                <motion.div variants={popIn} className="absolute -right-8 -bottom-10 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3 w-48 rotate-3 z-20">
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Lead Organizado</span>
                   <div className="h-2 w-full bg-indigo-500"></div>
                </motion.div>
              </div>

            </motion.div>
            <div className="absolute inset-0 bg-dotted-pattern opacity-50"></div>
          </motion.div>
        </motion.div>

        {/* Feature 2: Vitrine Digital (Slider com Ajuste Automático de Altura) */}
        <motion.div id="vitrine-digital" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center lg:flex-row-reverse">
          <motion.div variants={fadeInUp} className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border-2 border-amber-200 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)] mb-6">
              <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
              <span className="text-[10px] font-black text-amber-900 tracking-widest uppercase">Vitrine de Alto Padrão</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Deixe de ser só mais um. Torne-se a referência na sua região.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Anunciar em portais é dividir a atenção do seu cliente com dezenas de concorrentes. Ter um site próprio de alto padrão é construir a sua autoridade. Mostre exclusividade, passe credibilidade imediata e feche negócios sem disputar o clique.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border-2 border-slate-200 flex items-center gap-3 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.05)]">
                <Globe className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-[800] text-slate-900 uppercase tracking-wide">Design Exclusivo</span>
              </div>
              <div className="p-4 bg-slate-50 border-2 border-slate-200 flex items-center gap-3 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.05)]">
                <Database className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-[800] text-slate-900 uppercase tracking-wide">Leads Seus</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="lg:order-1 bg-slate-50 border-2 border-slate-900 p-6 md:p-8 shadow-solid-premium relative">
            
            {/* Slider Totalmente Responsivo */}
            <motion.div variants={abstractUIStagger} className="relative z-10 w-full bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] overflow-hidden group flex flex-col">
               
               {/* Barra de Navegador Falsa (Top Bar) */}
               <div className="w-full bg-slate-100 border-b-2 border-slate-900 px-4 py-3 flex items-center justify-between z-20">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-400 border-2 border-slate-900"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Modelo {activeSite + 1} / {sites.length}</span>
                  <div className="w-10"></div>
               </div>

               {/* Container da Imagem com Ajuste de Altura (h-auto) */}
               <div className="relative w-full">
                  <motion.img 
                     key={activeSite}
                     src={sites[activeSite]} 
                     alt={`Template de Site ${activeSite + 1}`} 
                     className="w-full h-auto object-cover block"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.4 }}
                  />

                  {/* Controles do Slider (Chevrons) */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <button onClick={prevSite} className="bg-white border-2 border-slate-900 p-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-100 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
                        <ChevronLeft className="w-6 h-6 text-slate-900" />
                     </button>
                     <button onClick={nextSite} className="bg-white border-2 border-slate-900 p-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-100 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
                        <ChevronRight className="w-6 h-6 text-slate-900" />
                     </button>
                  </div>

                  {/* Indicadores de bolinha na base */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-full border-2 border-slate-900">
                     {sites.map((_, i) => (
                       <button 
                         key={i} 
                         onClick={() => setActiveSite(i)} 
                         className={`w-2.5 h-2.5 border-2 border-slate-900 rounded-full transition-colors ${i === activeSite ? 'bg-amber-400' : 'bg-white'}`} 
                       />
                     ))}
                  </div>
               </div>

            </motion.div>

            {/* Sêlo Decorativo Brutalista */}
            <motion.div variants={popIn} className="absolute -bottom-6 -left-6 bg-emerald-400 border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-[-6deg] z-20 pointer-events-none">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-950 block text-center">Alto<br/>Padrão</span>
            </motion.div>

            <div className="absolute inset-0 bg-dotted-pattern opacity-50 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Feature 3: Automações Operacionais */}
        <motion.div id="automacoes" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 border-2 border-rose-200 shadow-[2px_2px_0px_0px_rgba(225,29,72,0.2)] mb-6">
              <Zap className="w-4 h-4 text-rose-600" />
              <span className="text-[10px] font-black text-rose-900 tracking-widest uppercase">Trabalho no Automático</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Deixe o trabalho braçal e chato com a gente.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Seu tempo deve ser gasto fechando negócios, não fazendo tarefas repetitivas. Use nosso sistema para anunciar no <strong>Facebook Marketplace com um clique</strong> e crie artes prontas para o Instagram direto na plataforma — sem complicação.
            </p>
            <button className="flex items-center gap-3 text-indigo-700 font-[800] uppercase tracking-wide text-sm group hover:text-indigo-900 transition-colors">
              Descobrir as Automações <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-slate-50 border-2 border-slate-900 p-8 shadow-solid-premium relative">
            <div className="grid grid-cols-1 gap-4 relative z-10">
               
               {/* Marketplace Automação */}
               <motion.div whileHover={{ x: 4 }} className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-5 transition-transform">
                  <div className="w-14 h-14 bg-indigo-600 border-2 border-slate-900 flex items-center justify-center flex-shrink-0">
                     <Wand2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">Facebook Marketplace</h4>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 inline-block"></span>
                        Postagem Rápida em Massa
                     </p>
                  </div>
               </motion.div>

               {/* Studio Engine */}
               <motion.div whileHover={{ x: 4 }} className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-5 transition-transform">
                  <div className="w-14 h-14 bg-rose-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0">
                     <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">Criação de Artes</h4>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 inline-block"></span>
                        Templates Prontos para Uso
                     </p>
                  </div>
               </motion.div>

               {/* Watermark/Stamp */}
               <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white border-2 border-slate-800 p-3 shadow-solid-dark rotate-[-5deg]">
                 <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block text-center">Tempo<br/>Livre</span>
               </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}