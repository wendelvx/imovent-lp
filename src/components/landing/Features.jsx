import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Share2, Wand2, ArrowRight, CheckCircle2, Globe, Search, LayoutDashboard } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const abstractUIStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function Features() {
  return (
    <section className="bg-white py-32 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Título de Transição Sutil */}
      <div className="max-w-6xl mx-auto mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">A Cura para a Operação Amadora</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            A infraestrutura que <span className="text-indigo-600">estanca as perdas</span> e acelera o lucro.
          </h3>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-40">
        
        {/* Feature 1: CRM & WhatsApp Engine (O Cérebro) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
              <LayoutDashboard className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-800 tracking-widest uppercase">Gestão Anti-Caos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-[1.1]">
              Não é apenas um chat. É o controle total da sua comissão.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              O WhatsApp manual é um cemitério de leads. O Imovent transforma suas conversas em um CRM organizado. Salve contatos e mova leads no funil sem nunca fechar a aba do WhatsApp Web.
            </p>
            <ul className="space-y-4">
              {['Histórico completo de interações na nuvem.', 'Lembretes ativos de follow-up.', 'Qualificação de leads em tempo real.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="order-1 lg:order-2 bg-slate-50 border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-solid-premium relative">
            <motion.div variants={abstractUIStagger} className="w-full max-w-sm mx-auto bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 relative z-10">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center relative shadow-sm">
                  <MessageCircle className="text-emerald-600 w-6 h-6"/>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="h-4 w-32 bg-slate-900 rounded-md mb-2"></div>
                  <div className="h-3 w-20 bg-slate-200 rounded-md"></div>
                </div>
              </div>
              <div className="space-y-4">
                <motion.div variants={popIn} className="h-10 w-full bg-slate-50 rounded-lg border border-slate-100"></motion.div>
                <motion.div variants={popIn} className="h-16 w-full bg-indigo-600 rounded-xl shadow-lg relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </motion.div>
                <motion.div variants={popIn} className="absolute -right-8 bottom-12 bg-white border border-slate-200 shadow-xl rounded-xl p-4 w-44">
                   <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-2">Mover no Funil</span>
                   <div className="h-2 w-full bg-emerald-500 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-mesh-light opacity-40 rounded-[2.5rem]"></div>
          </motion.div>
        </motion.div>

        {/* Feature 2: Vitrine Digital & SEO (A Fortaleza de Autoridade) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:flex-row-reverse">
          <motion.div variants={fadeInUp} className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">Presença & Autoridade</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-[1.1]">
              Pare de ser invisível. Domine o Google com sua própria vitrine.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Ser refém dos portais é pagar para não ter marca. O Imovent entrega um site imobiliário de alta performance, com SEO otimizado para você aparecer quando o cliente buscar pelo imóvel dos sonhos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                <Search className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-bold text-slate-900">SEO Ativo</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                <Zap className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-bold text-slate-900">Velocidade</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="lg:order-1 bg-slate-950 border border-slate-800 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <motion.div variants={abstractUIStagger} className="relative z-10 space-y-6">
               <motion.div variants={popIn} className="w-full h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center px-4 gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="h-1.5 w-32 bg-slate-700 rounded"></div>
               </motion.div>
               <motion.div variants={popIn} className="aspect-video bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                  </div>
               </motion.div>
               <div className="flex gap-4">
                  <motion.div variants={popIn} className="h-12 flex-1 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center font-bold text-indigo-400 text-[10px] uppercase tracking-widest">Site Responsivo</motion.div>
                  <motion.div variants={popIn} className="h-12 flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center font-bold text-emerald-400 text-[10px] uppercase tracking-widest">Domínio Próprio</motion.div>
               </div>
            </motion.div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Feature 3: Escala Operacional (Postador + Studio) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full mb-6">
              <Wand2 className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-bold text-rose-800 tracking-widest uppercase">Escala Operacional</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-[1.1]">
              Trabalho braçal não vende imóvel. Deixe a automação escalar você.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Poste no Marketplace automaticamente e gere artes de alto padrão para o Instagram em segundos. O Imovent assume a rotina pesada para que você possa focar no que dá lucro: o fechamento.
            </p>
            <button className="flex items-center gap-3 text-indigo-600 font-black group">
              Explorar ferramentas de automação <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-slate-50 border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-solid-premium">
            <div className="grid grid-cols-2 gap-6">
               {[1, 2, 3, 4].map((item) => (
                 <motion.div key={item} whileHover={{ y: -5 }} className="bg-white border border-slate-200 p-2 rounded-2xl shadow-sm">
                    <div className="aspect-square bg-slate-100 rounded-xl mb-3 relative overflow-hidden">
                       <div className="absolute top-2 right-2 w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                          <Zap className="w-3.5 h-3.5 text-white fill-white" />
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-900/5"></div>
                    </div>
                    <div className="px-2 pb-2">
                       <div className="h-2 w-full bg-slate-200 rounded mb-1.5"></div>
                       <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}