import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, User, MessageCircle, Thermometer, FileText, Lock } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LeadDossier() {
  return (
    <section className="bg-slate-50 py-32 px-6 lg:px-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Coluna da Esquerda: Narrativa de Soberania (Copy) */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border-2 border-slate-950 rounded-none mb-8 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-[800] text-white tracking-widest uppercase">Patrimônio de Dados</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.1] tracking-tighter mb-6">
            A memória institucional da sua operação. <span className="text-indigo-700">O ouro fica em casa.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
            Corretores vêm e vão, mas o histórico do cliente pertence à sua imobiliária. O <strong>Lead Dossier</strong> atua como um cofre digital, registrando cada nota, alteração de temperatura e mensagem de WhatsApp em uma linha do tempo imutável.
          </motion.p>

          <motion.ul variants={staggerContainer} className="space-y-5 w-full">
            {[
              { title: "Timeline Vitalícia", desc: "Histórico completo desde o primeiro 'Olá' até a assinatura do contrato." },
              { title: "Logs de Sistema Imutáveis", desc: "Saiba exatamente quem alterou uma etapa, adicionou uma nota ou exportou um dado." },
              { title: "Módulo de Pessoas Centralizado", desc: "Vínculo inteligente entre cônjuges, fiadores e empresas no mesmo dossiê." }
            ].map((item, i) => (
              <motion.li variants={fadeInUp} key={i} className="flex items-start gap-4 p-4 bg-white border-2 border-slate-200 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.05)]">
                <div className="w-8 h-8 bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-sm font-[800] text-slate-900 uppercase tracking-wide mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Coluna da Direita: Interface do Dossiê (Visual Brutalista/AAA) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="bg-white border-2 border-slate-900 shadow-solid-premium flex flex-col h-[650px] relative z-10">
            
            {/* Header do Dossiê */}
            <div className="p-6 border-b-2 border-slate-200 bg-slate-50 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-200 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <User className="w-6 h-6 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950 tracking-tight">Dr. Carlos Eduardo</h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">+55 11 99999-9999</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 border border-indigo-100">Investidor</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-black uppercase tracking-widest">
                  <Thermometer className="w-3 h-3" /> Quente
                </div>
              </div>
            </div>

            {/* Corpo do Dossiê: Timeline */}
            <div className="flex-1 p-6 bg-white overflow-hidden relative">
              <div className="absolute top-0 left-10 bottom-0 w-[2px] bg-slate-100"></div>

              <div className="space-y-8 relative z-10">
                
                {/* Evento 1: Log de Sistema */}
                <div className="flex gap-6 group">
                  <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    <History className="w-4 h-4" />
                  </div>
                  <div className="pt-1.5 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wide">Mudança de Funil</span>
                      <span className="text-[10px] font-bold text-slate-400">HOJE, 14:32</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium bg-slate-50 p-3 border border-slate-200 mt-2">
                      Corretor <strong className="text-slate-900">João Paulo</strong> moveu este lead de "Visita Agendada" para <strong className="text-indigo-600">"Proposta"</strong>.
                    </p>
                  </div>
                </div>

                {/* Evento 2: Nota Fixada */}
                <div className="flex gap-6 group">
                  <div className="w-8 h-8 bg-amber-400 text-amber-950 flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="pt-1.5 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wide">Nota Adicionada</span>
                      <span className="text-[10px] font-bold text-slate-400">ONTEM, 10:15</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium bg-amber-50 p-3 border border-amber-200 mt-2">
                      Cliente exigiu cláusula de vistoria detalhada. Arquivo PDF anexado ao dossiê.
                    </p>
                  </div>
                </div>

                {/* Evento 3: Sincronização WhatsApp */}
                <div className="flex gap-6 group">
                  <div className="w-8 h-8 bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="pt-1.5 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wide">WhatsApp Sync</span>
                      <span className="text-[10px] font-bold text-slate-400">12/05, 09:00</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium bg-emerald-50 p-3 border border-emerald-200 mt-2">
                      Conversa de 15 minutos sincronizada automaticamente pelo motor. <span className="text-emerald-700 font-bold underline cursor-pointer">Ver transcrição</span>.
                    </p>
                  </div>
                </div>

              </div>

              {/* Fader para simular scroll infinito */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
            </div>
            
          </div>

          {/* Elemento Decorativo: Sêlo de Segurança */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-slate-950 border-2 border-indigo-500 text-white p-4 shadow-solid-dark z-20 flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest">Logs Criptografados</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
