import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, LayoutDashboard, Zap, 
  Users, Flame, Home, Calendar, RefreshCcw, 
  MessageCircle, Target, ArrowUpRight
} from 'lucide-react';

const ultraSmoothEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ultraSmoothEase } }
};

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Hero() {
  return (
    <section className="relative bg-slate-50 min-h-[95vh] flex items-center pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200 overflow-hidden">
      
      {/* Background sutil para não brigar com a interface */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Coluna da Esquerda: A Promessa de Alívio e Organização */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start z-10 pr-4">
          
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border-2 border-indigo-200 rounded-none mb-8 shadow-[2px_2px_0px_0px_rgba(79,70,229,0.2)]">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-[11px] font-[800] text-indigo-900 tracking-widest uppercase">Para Corretores e Imobiliárias</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-950 leading-[1.05] tracking-tighter mb-8">
            Organize sua operação e <span className="text-indigo-600">pare de perder vendas</span> sem perceber.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            <span className="block mb-3">
              Seja estruturando suas primeiras vendas ou gerenciando uma equipe: o WhatsApp sozinho não dá conta. Leads se perdem, respostas atrasam e o cliente esfria.
            </span>
            <span className="block">
              Com o Imovent, cada conversa vira um próximo passo claro. Centralize seu <strong>CRM, site próprio e atendimento</strong> e comece a operar uma máquina previsível.
            </span>
          </motion.p>
          
          <motion.div variants={fadeInUp} className="w-full sm:w-auto flex flex-col items-start gap-5">
           <a 
            href="https://app.imovent.com.br/register"
           
          >
           <button className="group flex items-center justify-center gap-3 bg-indigo-950 text-white px-10 py-5 font-black text-lg w-full sm:w-auto shadow-xl shadow-indigo-900/20 hover:bg-indigo-900 hover:-translate-y-0.5 transition-all rounded-xl">
              Organizar Minhas Vendas Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button></a>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-[800] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> CRM Anti-Esquecimento
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-[800] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Site otimizado (SEO)
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita: Dashboard Premium (Otimizado e Compacto) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.2, ease: ultraSmoothEase }} 
          className="relative w-full h-[600px] hidden lg:block perspective-1000"
        >
          <motion.div 
            variants={floatAnimation} animate="animate" 
            className="absolute top-10 right-[-2%] w-[680px] bg-[#f8fafc] border border-slate-200 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.1)] z-10 flex flex-col overflow-hidden"
          >
            {/* Header do Dashboard */}
            <div className="px-8 py-6 flex items-start justify-between bg-white border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-2">
                   <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                   <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Visão Operacional</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-2">
                  Boa noite, <span className="text-indigo-600 italic font-serif">Marcelo</span>!
                </h3>
                <p className="text-xs text-slate-500 font-medium">Acompanhe suas tarefas e a saúde da sua operação em tempo real.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 shadow-sm">
                  <RefreshCcw className="w-3.5 h-3.5" />
                </div>
                <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-full flex items-center gap-2 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-700">Sincronizado</span>
                </div>
              </div>
            </div>

            {/* Corpo do Dashboard */}
            <div className="px-8 py-8 flex flex-col gap-5">
              
              {/* KPIs (Números Reais, Essenciais e Mais Compactos) */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: Users, label: "Leads Ativos", val: "189", iconColor: "text-slate-600", bg: "bg-slate-100" },
                  { icon: Flame, label: "Leads Quentes", val: "12", iconColor: "text-rose-500", bg: "bg-rose-50" },
                  { icon: CheckCircle2, label: "Negócios Ganhos", val: "5", iconColor: "text-emerald-500", bg: "bg-emerald-50" },
                  { icon: Home, label: "Portfólio", val: "54", iconColor: "text-indigo-500", bg: "bg-indigo-50" }
                ].map((kpi, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex flex-col gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${kpi.bg}`}>
                      <kpi.icon className={`w-4 h-4 ${kpi.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{kpi.label}</div>
                      <div className="text-2xl font-black text-slate-900 tracking-tighter">{kpi.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid Secundário: Agenda e Funis (Mais compactos) */}
              <div className="grid grid-cols-[1.4fr_1fr] gap-4">
                
                {/* Minha Agenda */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col">
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-indigo-500" />
                       <span className="text-xs font-black text-slate-900 uppercase tracking-wide">Minha Agenda</span>
                     </div>
                     <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1 cursor-pointer">
                       Ver Toda <ArrowUpRight className="w-3 h-3" />
                     </span>
                   </div>
                   
                   <div className="flex flex-col gap-3 flex-1">
                      {/* Card Tarefa 1 */}
                      <div className="border border-slate-100 rounded-lg p-3 flex flex-col justify-between hover:border-indigo-200 transition-colors cursor-pointer bg-slate-50/50">
                         <div>
                            <div className="flex items-center gap-2 mb-2">
                               <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center">
                                 <MessageCircle className="w-3 h-3"/>
                               </div>
                               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Beatriz Lima</span>
                            </div>
                            <div className="text-xs font-bold text-slate-800 leading-snug">Falar com a cliente segunda</div>
                         </div>
                         <div className="flex items-center justify-between mt-3">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Marcelo</span>
                            <span className="bg-white border border-slate-200 text-slate-500 text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1">
                               <Calendar className="w-2.5 h-2.5" /> 11 Mai às 08:00
                            </span>
                         </div>
                      </div>

                      {/* Card Tarefa 2 */}
                      <div className="border border-slate-100 rounded-lg p-3 flex flex-col justify-between hover:border-indigo-200 transition-colors cursor-pointer bg-slate-50/50">
                         <div>
                            <div className="flex items-center gap-2 mb-2">
                               <div className="w-6 h-6 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-500 flex items-center justify-center">
                                 <Target className="w-3 h-3"/>
                               </div>
                               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tarefa Interna</span>
                            </div>
                            <div className="text-xs font-bold text-slate-800 leading-snug">Encontro com Carlos Eduardo</div>
                         </div>
                         <div className="flex items-center justify-between mt-3">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Marcelo</span>
                            <span className="bg-white border border-slate-200 text-slate-500 text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1">
                               <Calendar className="w-2.5 h-2.5" /> 13 Mai às 08:00
                            </span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Saúde dos Funis (Mais compacta) */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col">
                   <div className="flex items-center gap-2 mb-1.5">
                     <LayoutDashboard className="w-4 h-4 text-indigo-500" />
                     <span className="text-xs font-black text-slate-900 uppercase tracking-wide">Saúde dos Funis</span>
                   </div>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">Abertos por etapa</p>

                   <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            <span className="text-[11px] font-bold text-slate-700">Novos</span>
                         </div>
                         <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">45</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                            <span className="text-[11px] font-bold text-slate-700">Em Contato</span>
                         </div>
                         <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                            <span className="text-[11px] font-bold text-slate-700">Visita Marcada</span>
                         </div>
                         <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">4</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                            <span className="text-[11px] font-bold text-slate-700">Proposta</span>
                         </div>
                         <span className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">2</span>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}