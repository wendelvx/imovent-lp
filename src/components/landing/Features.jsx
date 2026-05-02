import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Wand2, ArrowRight, CheckSquare, Globe, Search, LayoutDashboard, Database, Image as ImageIcon } from 'lucide-react';

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
  return (
    <section className="bg-white py-32 px-6 lg:px-12 relative overflow-hidden border-b border-slate-200">
      
      {/* Título de Comando */}
      <div className="max-w-6xl mx-auto mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[11px] font-[800] text-indigo-700 uppercase tracking-[0.3em] mb-4">A Cura para a Operação Amadora</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter">
            A infraestrutura que <span className="text-indigo-600">estanca as perdas</span> e alavanca o lucro.
          </h3>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-32 lg:gap-40">
        
        {/* Feature 1: CRM & WhatsApp Engine */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border-2 border-indigo-200 shadow-[2px_2px_0px_0px_rgba(79,70,229,0.2)] mb-6">
              <LayoutDashboard className="w-4 h-4 text-indigo-700" />
              <span className="text-[10px] font-black text-indigo-900 tracking-widest uppercase">Gestão Anti-Caos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Não é apenas um chat. É o controle absoluto da sua comissão.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              O WhatsApp manual é um cemitério de leads. O Imovent injeta uma camada de <strong>Governança</strong> diretamente nas suas conversas. Salve contatos e mova leads no funil sem nunca fechar a aba do WhatsApp Web.
            </p>
            <ul className="space-y-4">
              {['Histórico completo blindado na nuvem.', 'Lembretes ativos (Zero esquecimento).', 'Qualificação cirúrgica em tempo real.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-900 font-[800] text-sm tracking-wide">
                  <CheckSquare className="w-5 h-5 text-indigo-600 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="order-1 lg:order-2 bg-slate-50 border-2 border-slate-900 p-8 shadow-solid-premium relative">
            <motion.div variants={abstractUIStagger} className="w-full max-w-sm mx-auto bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6 relative z-10">
              <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 border-2 border-slate-900 flex items-center justify-center relative shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <MessageCircle className="text-white w-6 h-6"/>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-300 border-2 border-slate-900"></div>
                </div>
                <div className="flex-1">
                  <div className="h-4 w-32 bg-slate-900 mb-2"></div>
                  <div className="h-2 w-20 bg-slate-300"></div>
                </div>
              </div>
              <div className="space-y-4">
                <motion.div variants={popIn} className="h-10 w-full bg-slate-100 border border-slate-200"></motion.div>
                <motion.div variants={popIn} className="h-16 w-full bg-indigo-600 border-2 border-indigo-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] relative flex items-center justify-center">
                   <span className="text-white font-black text-[10px] uppercase tracking-widest">Sincronizar Lead</span>
                </motion.div>
                <motion.div variants={popIn} className="absolute -right-6 bottom-10 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3 w-48">
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Ação do Motor</span>
                   <div className="h-2 w-full bg-indigo-500"></div>
                </motion.div>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-dotted-pattern opacity-50"></div>
          </motion.div>
        </motion.div>

        {/* Feature 2: Vitrine Digital & SEO */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center lg:flex-row-reverse">
          <motion.div variants={fadeInUp} className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border-2 border-emerald-200 shadow-[2px_2px_0px_0px_rgba(16,185,129,0.2)] mb-6">
              <Globe className="w-4 h-4 text-emerald-700" />
              <span className="text-[10px] font-black text-emerald-900 tracking-widest uppercase">Presença & Autoridade</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Pare de alugar terreno. Seja dono da sua vitrine no Google.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Ser refém dos portais é pagar para não ter marca. O Imovent entrega uma <strong>Infraestrutura Web AAA</strong>, com SEO otimizado para transformar buscas locais em leads diretos e exclusivos para a sua operação.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border-2 border-slate-200 flex items-center gap-3">
                <Search className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-[800] text-slate-900 uppercase tracking-wide">SEO Ativo</span>
              </div>
              <div className="p-4 bg-slate-50 border-2 border-slate-200 flex items-center gap-3">
                <Database className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-[800] text-slate-900 uppercase tracking-wide">Dados 100% Seus</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="lg:order-1 bg-[#0B0F19] border-2 border-slate-900 p-8 shadow-solid-dark relative overflow-hidden">
            <motion.div variants={abstractUIStagger} className="relative z-10 space-y-4">
               <motion.div variants={popIn} className="w-full bg-[#05080f] border-2 border-slate-800 p-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                     <div className="w-2 h-2 bg-rose-500"></div>
                     <div className="w-2 h-2 bg-amber-500"></div>
                     <div className="w-2 h-2 bg-emerald-500"></div>
                  </div>
                  <div className="h-3 w-48 bg-slate-800 ml-2 flex items-center px-2">
                     <span className="text-[8px] text-slate-500 font-black tracking-widest uppercase">seudominio.com.br</span>
                  </div>
               </motion.div>
               <motion.div variants={popIn} className="aspect-video bg-slate-800 border-2 border-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent z-10"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="h-4 w-3/4 bg-white mb-2"></div>
                    <div className="h-2 w-1/2 bg-slate-400"></div>
                  </div>
               </motion.div>
               <div className="flex gap-4">
                  <motion.div variants={popIn} className="h-10 flex-1 bg-indigo-900/30 border border-indigo-500/50 flex items-center justify-center font-black text-indigo-400 text-[9px] uppercase tracking-widest">Responsivo</motion.div>
                  <motion.div variants={popIn} className="h-10 flex-1 bg-emerald-900/30 border border-emerald-500/50 flex items-center justify-center font-black text-emerald-400 text-[9px] uppercase tracking-widest">Indexado</motion.div>
               </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature 3: Automações Operacionais (Eficiência Cirúrgica) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 border-2 border-rose-200 shadow-[2px_2px_0px_0px_rgba(225,29,72,0.2)] mb-6">
              <Zap className="w-4 h-4 text-rose-600" />
              <span className="text-[10px] font-black text-rose-900 tracking-widest uppercase">Eficiência Cirúrgica</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.1]">
              Membros invisíveis da equipe operando por você.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Trabalho braçal não vende imóvel. O Imovent possui extensões autônomas que ganham o seu tempo real: poste no <strong>Marketplace em massa com 1 clique</strong> e gere artes de luxo para o Instagram no <strong>Studio Integrado</strong> — sem nunca abrir o Canva.
            </p>
            <button className="flex items-center gap-3 text-indigo-700 font-[800] uppercase tracking-wide text-sm group hover:text-indigo-900 transition-colors">
              Ativar Robôs Operacionais <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
                        Postagem em Lote 1-Click
                     </p>
                  </div>
               </motion.div>

               {/* Studio Engine */}
               <motion.div whileHover={{ x: 4 }} className="bg-white border-2 border-slate-900 p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-5 transition-transform">
                  <div className="w-14 h-14 bg-rose-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0">
                     <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">Studio Criativo</h4>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 inline-block"></span>
                        Gerador de Artes Automático
                     </p>
                  </div>
               </motion.div>

               {/* Watermark/Stamp */}
               <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white border-2 border-slate-800 p-3 shadow-solid-dark rotate-[-5deg]">
                 <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block text-center">Engine<br/>Active</span>
               </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
