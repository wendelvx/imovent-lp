import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle, CheckCircle2, TrendingUp, Globe, LayoutDashboard, ShieldAlert } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative bg-mesh-light min-h-[95vh] flex items-center pt-28 pb-20 px-6 lg:px-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Coluna da Esquerda: Narrativa Painkiller */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start z-10">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100 rounded-full shadow-sm mb-8">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-bold text-rose-900 tracking-tight">Pare de perder leads agora</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-[4rem] font-extrabold text-gradient-premium leading-[1.05] tracking-tight mb-8">
            Pare de perder comissões para a desorganização.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            Atuar sem um site próprio e sem gestão de WhatsApp é deixar dinheiro na mesa todos os dias. O Imovent é a <strong className="text-slate-900">infraestrutura profissional</strong> que injeta ordem no seu caos e autoridade na sua vitrine digital.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="w-full sm:w-auto flex flex-col items-start gap-4">
            <button className="group flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-5 rounded-xl font-bold text-lg w-full sm:w-auto btn-magnetic-solid hover:bg-indigo-700 shadow-solid-premium">
              Estancar Perdas e Escalar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 ml-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> CRM Anti-Esquecimento
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Vitrine Digital com SEO
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita: O "Antídoto" Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
          className="relative w-full h-[580px] hidden lg:block"
        >
          {/* Cérebro da Operação (CRM) */}
          <motion.div variants={floatAnimation} animate="animate" className="absolute top-4 right-12 left-0 bottom-20 bg-white border border-slate-200 rounded-3xl shadow-solid-premium p-8 flex flex-col gap-6 z-10">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3 font-black text-slate-900 tracking-tight text-lg">
                <LayoutDashboard className="w-6 h-6 text-indigo-600" /> Painel de Controle
              </div>
              <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-black rounded-full uppercase tracking-widest">
                Gestão Ativa
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Leads Recuperados</div>
                  <div className="text-2xl font-black text-indigo-600">142</div>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-1">ROI Previsto</div>
                  <div className="text-2xl font-black text-emerald-500">+28%</div>
               </div>
            </div>

            <div className="flex-1 bg-slate-900 rounded-2xl p-4 relative overflow-hidden">
               <div className="flex items-center justify-between mb-4">
                  <div className="h-2 w-24 bg-slate-700 rounded"></div>
                  <div className="h-2 w-12 bg-indigo-500 rounded"></div>
               </div>
               <div className="space-y-2">
                  <div className="h-8 w-full bg-slate-800 rounded-lg"></div>
                  <div className="h-8 w-full bg-slate-800 rounded-lg opacity-50"></div>
               </div>
            </div>
          </motion.div>

          {/* Autoridade Inquestionável (Site Profissional) */}
          <motion.div 
            animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-6 w-72 h-[380px] bg-slate-950 rounded-[2.5rem] shadow-2xl z-20 border-[6px] border-slate-900 overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
               <Globe className="w-4 h-4 text-indigo-400" />
               <div className="h-1.5 w-16 bg-slate-700 rounded-full"></div>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3">
               <div className="w-full h-32 bg-slate-800 rounded-xl"></div>
               <div className="w-full h-4 bg-white/10 rounded"></div>
               <div className="w-2/3 h-4 bg-white/5 rounded"></div>
               <div className="mt-auto py-2 bg-emerald-500 rounded-lg text-[10px] font-black text-center text-white uppercase tracking-tighter">
                  Otimizado para SEO
               </div>
            </div>
          </motion.div>

          {/* O Alívio (WhatsApp Sync) */}
          <motion.div 
            animate={{ x: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-10 bg-white border border-slate-200 p-5 rounded-2xl shadow-2xl z-30 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase">Sincronização em Tempo Real</div>
              <div className="text-base font-bold text-slate-900 tracking-tight">Lead movido para: "Contrato"</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}