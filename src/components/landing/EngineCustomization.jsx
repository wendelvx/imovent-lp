import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, GitBranch, Layers, Plus, GripVertical, ChevronDown, CheckSquare } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function EngineCustomization() {
  return (
    <section className="bg-white py-32 px-6 lg:px-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:flex-row-reverse">
        
        {/* Coluna da Esquerda: Narrativa de Flexibilidade e Alívio */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="flex flex-col items-start lg:order-2"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border-2 border-indigo-200 rounded-none mb-8 shadow-[2px_2px_0px_0px_rgba(79,70,229,0.2)]">
            <Settings2 className="w-4 h-4 text-indigo-700" />
            <span className="text-[11px] font-[800] text-indigo-900 tracking-widest uppercase">100% Flexível</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.1] tracking-tighter mb-6">
            Seu processo de vendas é único. <span className="text-indigo-600">Seu sistema também deve ser.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
            Esqueça as ferramentas engessadas que te obrigam a trabalhar do jeito delas. No Imovent, você desenha o caminho perfeito para o seu cliente. Seja para <strong>Venda, Locação, Captação ou Lançamentos</strong>: crie as etapas que fazem sentido para o seu dia a dia.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 w-full">
            {[
              { title: "Quantos funis precisar", icon: GitBranch },
              { title: "Etapas do seu jeito", icon: Layers },
              { title: "Rastreie cada cliente", icon: Settings2 },
              { title: "Múltiplas Operações", icon: CheckSquare }
            ].map((item, i) => (
              <motion.div variants={fadeInUp} key={i} className="flex items-center gap-3 p-4 bg-slate-50 border-2 border-slate-200 shadow-[2px_2px_0px_0px_rgba(15,23,42,0.05)]">
                <item.icon className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-[800] text-slate-900 uppercase tracking-wide">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coluna da Direita: Interface do Construtor de Funil (Ajustada para clareza) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:order-1"
        >
          <div className="bg-slate-950 border-2 border-slate-900 shadow-solid-dark flex flex-col relative z-10 p-6 md:p-8">
            
            {/* Header do Engine (Seletor de Funil) */}
            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Personalizando o Funil</span>
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 cursor-pointer group hover:border-indigo-500 transition-colors">
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Lançamento: Jardins</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-indigo-400" />
                </div>
              </div>
              <button className="bg-indigo-600 text-white p-2 border-2 border-indigo-500 hover:bg-indigo-700 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Corpo do Engine: Editor de Etapas com aspecto "Drag & Drop" */}
            <div className="space-y-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Organize arrastando</div>
              
              {/* Etapa 1 */}
              <div className="flex items-center gap-3 bg-[#0B0F19] border-2 border-slate-800 p-3 group hover:border-indigo-500/50 transition-colors">
                <GripVertical className="w-5 h-5 text-slate-600 cursor-grab active:cursor-grabbing" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-slate-500 rounded-none"></div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Captação Inicial</span>
                  </div>
                  <Settings2 className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 cursor-pointer" />
                </div>
              </div>

              {/* Etapa 2 */}
              <div className="flex items-center gap-3 bg-[#0B0F19] border-2 border-indigo-500 p-3 shadow-[4px_4px_0px_0px_rgba(79,70,229,0.2)] transform -translate-y-1">
                <GripVertical className="w-5 h-5 text-indigo-400 cursor-grab active:cursor-grabbing" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-none animate-pulse"></div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Qualificação de Renda</span>
                  </div>
                  <span className="text-[9px] bg-indigo-900 text-indigo-300 font-black px-2 py-0.5 border border-indigo-700 uppercase tracking-widest">Editando</span>
                </div>
              </div>

              {/* Etapa 3 */}
              <div className="flex items-center gap-3 bg-[#0B0F19] border-2 border-slate-800 p-3 group hover:border-indigo-500/50 transition-colors">
                <GripVertical className="w-5 h-5 text-slate-600 cursor-grab active:cursor-grabbing" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-none"></div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Aguardando Assinatura</span>
                  </div>
                  <Settings2 className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Editor de Origens Flutuante (Linguagem Simplificada) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -bottom-8 bg-slate-50 border-2 border-slate-900 p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] z-20 w-64"
            >
              <div className="text-[10px] font-[800] text-slate-500 uppercase tracking-widest mb-3 border-b-2 border-slate-200 pb-2">De onde vem o lead?</div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-black bg-indigo-100 text-indigo-800 px-2 py-1 border border-indigo-200">INSTAGRAM</span>
                <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-1 border border-emerald-200">PESQUISA GOOGLE</span>
                <span className="text-[10px] font-black bg-rose-100 text-rose-800 px-2 py-1 border border-rose-200">INDICAÇÃO</span>
                <span className="text-[10px] font-black bg-slate-200 text-slate-800 px-2 py-1 border border-slate-300 cursor-pointer hover:bg-slate-300">+ ADD</span>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
