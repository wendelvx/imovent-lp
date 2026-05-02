import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Plus, CheckSquare, Server } from 'lucide-react';

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
    <section className="bg-slate-50 py-32 px-6 lg:px-12 border-y-2 border-slate-900 relative">
      
      <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border-2 border-indigo-200 shadow-[2px_2px_0px_0px_rgba(79,70,229,0.2)] mb-6">
            <Server className="w-4 h-4 text-indigo-700" />
            <span className="text-[11px] font-black text-indigo-900 tracking-widest uppercase">Ativo Digital vs. Gasto Operacional</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate-950 mb-6 tracking-tighter leading-[1.05]">
            Quanto custa perder uma venda por <span className="text-rose-600">desorganização?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium px-4 max-w-2xl mx-auto leading-relaxed">
            Pare de pagar mensalidades por ferramentas dispersas. Invista em uma infraestrutura unificada que escala exatamente conforme o seu volume de vendas. Sem fidelidade.
          </p>
        </motion.div>
      </div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-12 items-stretch">
        
        {/* Card Solo - Construção de Autoridade */}
        <motion.div variants={fadeInUp} className="bg-white border-2 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col h-full group hover:-translate-y-1 transition-transform">
          <div className="mb-6 border-b-2 border-slate-100 pb-6">
            <h3 className="text-2xl font-black text-slate-950 tracking-tight uppercase mb-2">Solo</h3>
            <p className="text-sm text-slate-600 font-[800] uppercase tracking-wide bg-slate-100 inline-block px-2 py-1 border border-slate-200">
              Construção de Autoridade
            </p>
          </div>
          
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-5xl font-black text-slate-950 tracking-tighter">R$ 97</span>
            <span className="text-sm text-slate-500 font-black uppercase tracking-widest">/mês</span>
          </div>
          <div className="mb-8 text-[11px] font-black text-emerald-700 bg-emerald-50 inline-block px-3 py-1.5 border border-emerald-200 self-start uppercase tracking-wider">
            A infraestrutura se paga na primeira captação.
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: 'Site Imobiliário Próprio (Otimizado SEO)' },
              { text: 'CRM de Gestão Individual Blindado' },
              { text: 'Limiar de 100 Imóveis no Banco de Dados' },
              { text: 'Integração WhatsApp Sync Premium' },
              { text: 'Acesso ao Studio Criativo' },
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-900 font-bold">
                <CheckSquare className="w-5 h-5 text-indigo-600 flex-shrink-0" /> 
                <span className="mt-0.5">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            {/* Bloco de Add-ons Escalonáveis */}
            <div className="p-5 bg-slate-50 border-2 border-slate-200 mb-6 flex flex-col gap-2">
              <span className="uppercase tracking-widest text-[10px] text-indigo-700 mb-1 font-black flex items-center gap-2">
                <Plus className="w-3 h-3" /> Escala sob demanda (Add-ons)
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 pb-2">
                <span>+1 Licença de Usuário</span> <span className="text-slate-950 font-black">R$ 59,90</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 pb-2">
                <span>+50 Slots de Imóveis</span> <span className="text-slate-950 font-black">R$ 39,90</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 pt-1">
                <span>+50 Slots de Fotos</span> <span className="text-slate-950 font-black">R$ 19,90</span>
              </div>
            </div>

            <button className="w-full py-5 bg-white border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors duration-300 text-sm shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-y-1">
              Ativar Autoridade Solo
            </button>
          </div>
        </motion.div>

        {/* Card Team - O QG da Imobiliária */}
        <motion.div variants={fadeInUp} className="bg-slate-950 border-2 border-indigo-500 p-8 shadow-[8px_8px_0px_0px_rgba(79,70,229,1)] flex flex-col h-full relative z-10 transform md:-translate-y-4">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 border-2 border-indigo-400 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2 whitespace-nowrap">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            Infraestrutura de Elite
          </div>

          <div className="mb-6 mt-2 md:mt-0 border-b-2 border-slate-800 pb-6">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-2">Team</h3>
            <p className="text-sm text-indigo-300 font-[800] uppercase tracking-wide bg-indigo-950 border border-indigo-800 inline-block px-2 py-1">
              Centro de Comando e Governança
            </p>
          </div>
          
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-5xl font-black text-white tracking-tighter">R$ 257</span>
            <span className="text-sm text-slate-500 font-black uppercase tracking-widest">/mês</span>
          </div>
          <div className="mb-8 text-[11px] font-black text-emerald-400 bg-emerald-950/50 inline-block px-3 py-1.5 border border-emerald-800 self-start uppercase tracking-wider">
            O fim do roubo de dados na sua imobiliária.
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: 'Site Imobiliário Master (Equipe + SEO)' },
              { text: 'Controle de Acesso Granular (RBAC)' },
              { text: 'Roleta Automática de Leads (SLA)' },
              { text: '5 Licenças de Usuários Inclusas' },
              { text: 'Limiar de 500 Imóveis no Banco de Dados' },
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-bold">
                <CheckSquare className="w-5 h-5 text-indigo-400 flex-shrink-0" /> 
                <span className="mt-0.5">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            {/* Bloco de Add-ons Escalonáveis (Dark Mode) */}
            <div className="p-5 bg-[#0B0F19] border-2 border-slate-800 mb-6 flex flex-col gap-2">
              <span className="uppercase tracking-widest text-[10px] text-indigo-400 mb-1 font-black flex items-center gap-2">
                <Plus className="w-3 h-3" /> Escala sob demanda (Add-ons)
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-b border-slate-800 pb-2">
                <span>+1 Licença de Usuário</span> <span className="text-white font-black">R$ 29,90</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-b border-slate-800 pb-2">
                <span>+100 Slots de Imóveis</span> <span className="text-white font-black">R$ 39,90</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 pt-1">
                <span>+100 Slots de Fotos</span> <span className="text-white font-black">R$ 19,90</span>
              </div>
            </div>

            <button className="w-full py-5 bg-indigo-600 text-white font-black uppercase tracking-widest border-2 border-indigo-400 hover:bg-indigo-700 transition-colors btn-magnetic-solid text-sm">
              Assumir Comando Team
            </button>
          </div>
        </motion.div>

      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-600 font-black uppercase tracking-wide text-xs px-4">
        <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <p>Ambiente em nuvem criptografado. Cancele sua assinatura quando quiser, sem burocracia.</p>
      </motion.div>

    </section>
  );
}
