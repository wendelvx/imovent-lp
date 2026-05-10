import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, User, MessageCircle, Zap, FileText, Lock, Calendar, Home, ArrowRightLeft } from 'lucide-react';

const ultraSmoothEase = [0.19, 1, 0.22, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ultraSmoothEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export default function LeadDossier() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 px-6 lg:px-12 border-b border-slate-200 overflow-hidden relative">
      
      {/* Detalhe de fundo: Grid sutil para passar ideia de organização/dados */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        
        {/* Coluna da Esquerda: Narrativa de Segurança */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="flex flex-col items-start relative z-10 lg:sticky lg:top-32"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-950 rounded-full mb-8 shadow-lg shadow-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Histórico Seguro</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black text-slate-950 leading-[1.05] tracking-tight mb-8">
            Todo o histórico do cliente. <br />
            <span className="text-indigo-600 font-extrabold">Sem depender da memória de ninguém.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 font-medium leading-relaxed max-w-xl">
            Esqueça a preocupação de perder contatos se um celular quebrar ou um membro da equipe sair. O Dossiê do Imovent funciona como um arquivo inteligente, guardando cada interação em uma linha do tempo impecável.
          </motion.p>

          <motion.ul variants={staggerContainer} className="space-y-4 w-full">
            {[
              { title: "Linha do Tempo Completa", icon: History, desc: "Veja tudo o que aconteceu com o lead, do primeiro 'Olá' até a assinatura do contrato." },
              { title: "Registro de Ações", icon: Lock, desc: "Saiba facilmente quem atendeu o cliente, quem adicionou uma nota ou enviou uma proposta." },
              { title: "Visão de Águia", icon: Zap, desc: "Tudo o que importa sobre o interesse do cliente em uma única tela. Sem alternar abas, sem perda de tempo: a informação certa para fechar a venda com agilidade máxima." }
            ].map((item, i) => (
              <motion.li 
                variants={fadeInUp} 
                key={i} 
                className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-indigo-300 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-snug">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Coluna da Direita: Mockup do Lead Dossier (Mimetizando o App Real) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, ease: ultraSmoothEase }}
          className="relative bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col h-[780px] overflow-hidden"
        >
          {/* Header do Mockup (Perfil do Cliente) */}
          <div className="p-8 border-b border-slate-50">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-5">
                 <div className="w-16 h-16 bg-[#0B0F19] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">LA</div>
                 <div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Luis Antonio</h3>
                   <div className="flex items-center gap-3 mt-1.5">
                     <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Base Ativa</span>
                     <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">#BBAAC9E7</span>
                   </div>
                 </div>
               </div>
               <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
                 <Lock className="w-4 h-4" />
               </button>
            </div>
            
            {/* Divisor do Histórico */}
            <div className="flex items-center gap-3 pt-4">
               <MessageCircle className="w-4 h-4 text-slate-300" />
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Histórico Recente</span>
            </div>
          </div>

          {/* Timeline do App (Recriando os eventos do print) */}
          <div className="flex-1 overflow-y-auto p-8 relative space-y-8 scrollbar-hide">
            {/* Linha vertical da timeline */}
            <div className="absolute top-0 left-[50px] bottom-0 w-[1.5px] bg-slate-100" />

            {/* Evento 1: Reunião */}
            <TimelineEvent 
              icon={<Calendar className="w-4 h-4" />} 
              sender="Wendel" 
              time="09/05/2026, 19:21" 
              content="Agendou Reunião: Encontro presencial. (Privada)"
              italic
            />

            {/* Evento 2: Perfil de Compra */}
            <TimelineEvent 
              icon={<MessageCircle className="w-4 h-4" />} 
              sender="Wendel" 
              time="09/05/2026, 19:20" 
              content="Interessado em imóveis até 400.000."
            />

            {/* Evento 3: Sugestão de Imóvel */}
            <TimelineEvent 
              icon={<Home className="w-4 h-4" />} 
              sender="Wendel" 
              time="09/05/2026, 19:20" 
              content="Sugeriu o imóvel: Casa Nova à Venda com 2 Suítes no bairro Aeroporto, Juazeiro do Norte"
              italic
            />

            {/* Evento 4: Termômetro */}
            <TimelineEvent 
              icon={<Zap className="w-4 h-4" />} 
              sender="Wendel" 
              time="09/05/2026, 18:06" 
              content="Termômetro alterado para Quente."
              italic
            />

            {/* Evento 5: Troca de Etapa */}
            <TimelineEvent 
              icon={<ArrowRightLeft className="w-4 h-4" />} 
              sender="Wendel" 
              time="09/05/2026, 18:04" 
              content="Lead movido para a etapa: Visita Marcada."
              highlight
            />

            {/* Fade no final para indicar scroll */}
            <div className="sticky bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          {/* Floating Security Badge */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 right-10 bg-slate-950 text-white px-5 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-800 z-30"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Proteção de Dados Ativa</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

// Subcomponente para os cards da Timeline (Mimetizando o seu print)
function TimelineEvent({ icon, sender, time, content, italic, highlight }) {
  return (
    <div className="flex gap-6 group relative z-10">
      {/* Icon Circle */}
      <div className={`w-11 h-11 rounded-xl border-2 border-white shadow-md flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300 ${highlight ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
        {icon}
      </div>

      {/* Message Card */}
      <div className={`flex-1 p-5 rounded-[1.25rem] border border-slate-100 transition-shadow duration-300 group-hover:shadow-lg ${highlight ? 'bg-indigo-50/20' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">{sender}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{time}</span>
        </div>
        <p className={`text-sm leading-relaxed ${highlight ? 'text-indigo-900 font-semibold' : 'text-slate-700'} ${italic ? 'italic font-medium' : ''}`}>
          {content}
        </p>
      </div>
    </div>
  );
}