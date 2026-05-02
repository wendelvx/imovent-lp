import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck, Plus } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-32 px-6 lg:px-12 border-y border-slate-200 relative">
      
      <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-[1.1]">
            Quanto custa perder uma venda por <span className="text-rose-500">esquecimento?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium px-4">
            Escolha a infraestrutura ideal para escalar sua marca. Sem fidelidade.
          </p>
        </motion.div>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-8 items-stretch">
        
        {/* Card Solo - O Corretor Autoridade */}
        <motion.div variants={fadeInUp} className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-8 shadow-solid-premium flex flex-col h-full transition-colors duration-300">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-1">Plano SOLO</h3>
            <p className="text-sm text-slate-500 font-medium">Sua vitrine e gestão individual.</p>
          </div>
          
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-4xl font-black text-slate-950 tracking-tighter">R$ 97</span>
            <span className="text-sm text-slate-500 font-bold">/mês</span>
          </div>
          <div className="mb-8 text-xs font-bold text-emerald-700 bg-emerald-50 inline-block px-3 py-1.5 rounded-md border border-emerald-100 self-start">
            O sistema que se paga na primeira venda.
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: 'Site Imobiliário Próprio (SEO)', icon: CheckCircle2 },
              { text: 'CRM de Gestão Individual', icon: CheckCircle2 },
              { text: '100 Imóveis no Portfólio', icon: CheckCircle2 },
              { text: 'WhatsApp Sync Premium', icon: CheckCircle2 },
              { text: 'Studio Criativo Integrado', icon: CheckCircle2 },
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                <feature.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                <span className="mt-0.5">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="text-[11px] font-bold text-slate-500 p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-6 flex flex-col gap-1.5">
              <span className="uppercase tracking-wider text-[9px] text-slate-400 mb-0.5 font-black">Add-ons estratégicos</span>
              <div className="flex justify-between items-center"><span>+1 Usuário</span> <span className="text-slate-900">R$ 59,90</span></div>
              <div className="flex justify-between items-center"><span>+50 Imóveis</span> <span className="text-slate-900">R$ 39,90</span></div>
              <div className="flex justify-between items-center font-bold text-indigo-600">
                <span className="flex items-center gap-1"><Plus className="w-3 h-3" /> 50 Fotos extras</span> 
                <span>R$ 19,90</span>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl border border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors duration-300 text-sm">
              Começar Plano Solo
            </button>
          </div>
        </motion.div>

        {/* Card Team - O QG da Imobiliária */}
        <motion.div variants={fadeInUp} className="bg-slate-950 border border-indigo-900 rounded-3xl p-8 shadow-2xl flex flex-col h-full relative z-10 transform md:-translate-y-2">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Zap className="w-3 h-3 fill-amber-950" />
            Infraestrutura de Elite
          </div>

          <div className="mb-6 mt-2 md:mt-0">
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">Plano TEAM</h3>
            <p className="text-sm text-slate-400 font-medium">Gestão, autoridade e escala de time.</p>
          </div>
          
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-4xl font-black text-white tracking-tighter">R$ 257</span>
            <span className="text-sm text-slate-400 font-bold">/mês</span>
          </div>
          <div className="mb-8 text-xs font-bold text-emerald-400 bg-emerald-500/10 inline-block px-3 py-1.5 rounded-md border border-emerald-500/20 self-start">
            A solução para times de alta performance.
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: 'Site Imobiliário (Equipe + SEO)', icon: CheckCircle2 },
              { text: 'Painel de Gestão e Roleta de Leads', icon: CheckCircle2 },
              { text: '5 Usuários Conectados', icon: CheckCircle2 },
              { text: '500 Imóveis no Portfólio', icon: CheckCircle2 },
              { text: 'Dashboard Anti-Esquecimento', icon: CheckCircle2 },
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-semibold">
                <feature.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" /> 
                <span className="mt-0.5">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="text-[11px] font-bold text-slate-300 p-4 bg-slate-900 border border-slate-800 rounded-2xl mb-6 flex flex-col gap-1.5">
              <span className="uppercase tracking-wider text-[9px] text-slate-500 mb-0.5 font-black">Add-ons estratégicos</span>
              <div className="flex justify-between items-center"><span>+1 Usuário</span> <span className="text-white">R$ 29,90</span></div>
              <div className="flex justify-between items-center"><span>+100 Imóveis</span> <span className="text-white">R$ 39,90</span></div>
              <div className="flex justify-between items-center font-bold text-amber-400">
                <span className="flex items-center gap-1"><Plus className="w-3 h-3" /> 100 Fotos extras</span> 
                <span>R$ 19,90</span>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-sm btn-magnetic-solid hover:bg-indigo-700 transition-colors">
              Acelerar com Plano Team
            </button>
          </div>
        </motion.div>

      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-2.5 text-slate-500 font-medium px-4">
        <ShieldCheck className="w-5 h-5 text-slate-400 flex-shrink-0" />
        <p className="text-sm leading-relaxed max-w-sm sm:max-w-none">Ambiente criptografado. Cancele sua assinatura a qualquer momento.</p>
      </motion.div>

    </section>
  );
}