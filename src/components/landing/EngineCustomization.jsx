import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, GitBranch, Layers, CheckSquare, Sparkles } from 'lucide-react';

const ultraSmoothEase = [0.19, 1, 0.22, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: ultraSmoothEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.2 } 
  }
};

// Componente visual de reforço: Linhas de fluxo que "desenham" o processo
const WorkflowVisual = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
      <motion.path
        d="M-50,200 Q200,150 400,300 T800,100 T1200,400"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="10 10"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.path
        d="M-50,800 Q300,700 500,850 T900,600 T1100,800"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    {/* Grid de arquitetura sutil */}
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
  </div>
);

export default function EngineCustomization() {
  const features = [
    { title: "Quantos funis precisar", icon: GitBranch, color: "text-indigo-600" },
    { title: "Etapas do seu jeito", icon: Layers, color: "text-purple-600" },
    { title: "Rastreio em tempo real", icon: Settings2, color: "text-blue-600" },
    { title: "Múltiplas Operações", icon: CheckSquare, color: "text-emerald-600" }
  ];

  return (
    <section className="bg-white py-24 md:py-40 px-6 lg:px-12 border-b border-slate-100 relative overflow-hidden antialiased">
      <WorkflowVisual />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          {/* Badge de Contexto */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full mb-10">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Engenharia de Fluxo</span>
          </motion.div>

          {/* Título com Enfase Máxima */}
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-10 max-w-4xl">
            Seu processo de vendas é único. <br />
            <span className="text-indigo-600">Seu sistema também deve ser.</span>
          </motion.h2>

          {/* Parágrafo com Respiro Visual */}
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-500 mb-20 font-medium leading-relaxed max-w-3xl">
            Esqueça ferramentas engessadas. No Imovent, você desenha o caminho perfeito para o seu cliente. Seja para <span className="text-slate-950 font-bold underline decoration-indigo-500 underline-offset-4">Venda, Locação ou Captação</span>, crie as etapas que fazem sentido para o seu dia a dia.
          </motion.p>

          {/* Grid de Benefícios Expandido (100% de largura) */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {features.map((item, i) => (
              <motion.div 
                variants={fadeInUp} 
                key={i} 
                className="group relative p-8 bg-white border border-slate-200 rounded-[2rem] transition-all duration-500 hover:border-indigo-300 hover:shadow-[0_20px_50px_-15px_rgba(79,70,229,0.1)] overflow-hidden"
              >
                {/* Efeito sutil de gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500 shadow-inner">
                    <item.icon className={`w-7 h-7 ${item.color} group-hover:text-white transition-colors duration-500`} />
                  </div>
                  <span className="text-sm font-black text-slate-900 uppercase tracking-wide group-hover:text-indigo-700 transition-colors">
                    {item.title}
                  </span>
                </div>
                
                {/* Detalhe de design: número da etapa quase invisível */}
                <div className="absolute -bottom-4 -right-2 text-slate-50 font-black text-8xl pointer-events-none group-hover:text-indigo-50/50 transition-colors">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Elemento de Rodapé de Seção: Linha de Continuidade */}
          <motion.div 
            variants={fadeInUp}
            className="mt-24 flex flex-col items-center gap-4"
          >
            <div className="w-px h-20 bg-gradient-to-b from-indigo-500 to-transparent" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Liberdade Total de Desenho</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}