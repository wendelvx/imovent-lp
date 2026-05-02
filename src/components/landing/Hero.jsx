import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, Globe, LayoutDashboard, AlertTriangle } from 'lucide-react';

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
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative bg-mesh-light min-h-[95vh] flex items-center pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Coluna da Esquerda: O Choque de Realidade & A Solução de Elite */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start z-10">
          
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border-2 border-rose-200 rounded-none mb-8 shadow-[2px_2px_0px_0px_rgba(225,29,72,0.2)]">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span className="text-[11px] font-[800] text-rose-900 tracking-widest uppercase">Diagnóstico: Lucro Vazando</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-950 leading-[1.05] tracking-tighter mb-8">
            O fim da era do <span className="text-rose-600">amadorismo</span> em vendas.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            Planilhas e WhatsApp desorganizado destroem seu patrimônio diariamente. Assuma o controle com uma <strong className="text-slate-900 font-bold">infraestrutura AAA</strong>: CRM de alta performance, automação de processos e sua própria vitrine de autoridade.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="w-full sm:w-auto flex flex-col items-start gap-5">
            <button className="group flex items-center justify-center gap-3 bg-indigo-950 text-white px-10 py-5 font-black text-lg w-full sm:w-auto btn-magnetic-solid hover:bg-indigo-900 transition-colors">
              Assumir o Controle da Operação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-[800] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Infraestrutura Unificada
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-[800] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Domínio de Dados
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita: A Anatomia do Motor AAA (Zero Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
          className="relative w-full h-[600px] hidden lg:block"
        >
          {/* Cérebro da Operação (CRM / Painel) */}
          <motion.div variants={floatAnimation} animate="animate" className="absolute top-0 right-12 left-0 bottom-24 bg-white border-2 border-slate-900 shadow-solid-premium p-8 flex flex-col gap-6 z-10">
            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6">
              <div className="flex items-center gap-3 font-black text-slate-950 tracking-tight text-xl">
                <LayoutDashboard className="w-6 h-6 text-indigo-700" /> Centro de Comando
              </div>
              <div className="px-3 py-1 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest">
                Motor Ativo
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-4 border-2 border-slate-200">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2">Comissão Preservada</div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">R$ 14.2K</div>
               </div>
               <div className="bg-slate-50 p-4 border-2 border-slate-200">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2">Eficiência Operacional</div>
                  <div className="text-3xl font-black text-emerald-600 tracking-tighter">98.5%</div>
               </div>
            </div>

            {/* Representação de um log de sistema (Dossier Base) */}
            <div className="flex-1 bg-slate-950 p-5 flex flex-col gap-3 relative overflow-hidden">
               <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">System Log / Timeline</div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500"></div>
                  <div className="h-2 w-full bg-slate-800"></div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500"></div>
                  <div className="h-2 w-3/4 bg-slate-800"></div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-600"></div>
                  <div className="h-2 w-1/2 bg-slate-800"></div>
               </div>
            </div>
          </motion.div>

          {/* Autoridade Inquestionável (Site Profissional) */}
          <motion.div 
            animate={{ y: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-72 h-[400px] bg-[#0B0F19] shadow-solid-dark z-20 border-2 border-slate-800 flex flex-col"
          >
            <div className="p-4 border-b-2 border-slate-800 flex items-center justify-between bg-[#05080f]">
               <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-black tracking-widest uppercase">Vitrine.SEO</span>
               </div>
               <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-700"></div>
                  <div className="w-2 h-2 bg-slate-700"></div>
               </div>
            </div>
            <div className="flex-1 p-5 flex flex-col gap-4">
               <div className="w-full h-32 bg-slate-800 border border-slate-700"></div>
               <div className="w-full h-6 bg-slate-800/50"></div>
               <div className="w-2/3 h-4 bg-slate-800/50"></div>
               <div className="mt-auto py-3 bg-indigo-600 text-[10px] font-black text-center text-white uppercase tracking-widest border border-indigo-500">
                  Ativo Digital Protegido
               </div>
            </div>
          </motion.div>

          {/* O Alívio (Integração Direta) */}
          <motion.div 
            animate={{ x: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-8 bg-white border-2 border-slate-900 p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] z-30 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center border-2 border-slate-900">
              <MessageCircle className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <div className="text-[10px] font-[800] text-slate-500 uppercase tracking-widest mb-1">WhatsApp Sync</div>
              <div className="text-sm font-black text-slate-950 tracking-tight">Lead transferido para Governança.</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
