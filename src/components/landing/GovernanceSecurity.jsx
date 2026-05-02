import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Lock, Unlock, Clock, ArrowRightCircle, RotateCw } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function GovernanceSecurity() {
  return (
    <section className="bg-mesh-dark py-32 px-6 lg:px-12 border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção: O Discurso de Segurança e Alívio */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-3xl mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-950/50 border-2 border-indigo-900 rounded-none mb-6 shadow-solid-dark">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-[11px] font-[800] text-indigo-300 tracking-widest uppercase">Segurança & Controle</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
            Proteja sua carteira e nunca mais deixe um cliente <span className="text-indigo-400">esfriar.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 font-medium leading-relaxed">
            Seu maior patrimônio é a sua lista de clientes. Com o Imovent, você decide exatamente quem pode baixar ou apagar seus contatos. E se um corretor demorar muito para atender? O sistema repassa o lead automaticamente. Simples, seguro e justo.
          </motion.p>
        </motion.div>

        {/* Bento Grid: O Painel de Governança */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 (Maior): Permissões Granulares (Aliviado) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bento-card-dark flex flex-col"
          >
            <div className="p-6 border-b-2 border-slate-800 bg-[#070A12] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-white tracking-tight uppercase">Controle de Permissões</h3>
                <p className="text-xs text-slate-500 font-bold tracking-wide mt-1">Seus dados não saem da imobiliária sem sua autorização.</p>
              </div>
              <Users className="w-6 h-6 text-slate-600" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4 bg-[#0B0F19]">
              {/* Cabeçalho da Tabela */}
              <div className="grid grid-cols-12 gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest pb-2 border-b border-slate-800/50">
                <div className="col-span-4">Membro da Equipe</div>
                <div className="col-span-3 text-center">Baixar Planilha</div>
                <div className="col-span-3 text-center">Apagar Leads</div>
                <div className="col-span-2 text-center">Status</div>
              </div>

              {/* Linha 1: Dono (Acesso Total) */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-900/50 border border-slate-800 p-3">
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <span className="text-[10px] text-indigo-400 font-black">G</span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Gestor</span>
                </div>
                <div className="col-span-3 flex justify-center"><Unlock className="w-4 h-4 text-emerald-500" /></div>
                <div className="col-span-3 flex justify-center"><Unlock className="w-4 h-4 text-emerald-500" /></div>
                <div className="col-span-2 flex justify-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-none shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                </div>
              </div>

              {/* Linha 2: Corretor (Acesso Restrito) */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-900/50 border border-slate-800 p-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 border-2 border-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-[10px] text-slate-400 font-black">C</span>
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">Corretor</span>
                </div>
                <div className="col-span-3 flex justify-center"><Lock className="w-4 h-4 text-rose-500" /></div>
                <div className="col-span-3 flex justify-center"><Lock className="w-4 h-4 text-rose-500" /></div>
                <div className="col-span-2 flex justify-center">
                  <span className="text-[9px] font-black bg-slate-800 text-slate-400 px-2 py-0.5 border border-slate-700 uppercase">Protegido</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Card 2: Roleta de Leads (Mais amigável) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card-dark flex flex-col"
          >
            <div className="p-6 border-b-2 border-slate-800 bg-[#070A12] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-white tracking-tight uppercase">Repasse Automático</h3>
                <p className="text-[10px] text-slate-500 font-bold tracking-wide mt-1 uppercase">O fim do lead esquecido</p>
              </div>
              <RotateCw className="w-5 h-5 text-indigo-500 animate-[spin_4s_linear_infinite]" />
            </div>
            
            <div className="p-6 flex-1 bg-[#0B0F19] flex flex-col justify-center">
              
              {/* Lead Esquecido */}
              <div className="border-2 border-slate-800 bg-slate-900 p-4 mb-4 relative">
                <div className="absolute -top-3 -right-2 bg-amber-500 text-amber-950 text-[9px] font-black uppercase px-2 py-0.5 tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Parado: 48h
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">Lead: Marcos V.</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  Sem resposta de: <span className="line-through text-slate-500">Corretor A</span>
                </p>
              </div>

              {/* Seta de Transição */}
              <div className="flex justify-center my-2">
                <ArrowRightCircle className="w-6 h-6 text-indigo-500 rotate-90" />
              </div>

              {/* Lead Reatribuído */}
              <div className="border-2 border-emerald-900/50 bg-emerald-950/20 p-4 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-900/30 px-2 py-0.5">Lead Salvo</span>
                </div>
                <p className="text-xs text-emerald-100 font-bold uppercase tracking-wide">
                  Passado para: <span className="text-white">Corretor B</span>
                </p>
                <div className="h-1 w-full bg-slate-800 mt-3">
                  <div className="h-1 bg-emerald-500 w-1/4 animate-pulse"></div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
