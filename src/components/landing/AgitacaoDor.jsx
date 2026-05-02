import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, EyeOff, AlertTriangle, TrendingDown, Database } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function AgitacaoDor() {
  return (
    <section className="bg-mesh-dark py-32 px-6 lg:px-12 border-y-2 border-slate-900 relative overflow-hidden">
      
      {/* Glow de Fundo (Sanguíneo e denso para representar perda) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-rose-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção: O Diagnóstico Fatal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          className="mb-20 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-950/80 border-2 border-rose-900 mb-6 shadow-[4px_4px_0px_0px_rgba(225,29,72,0.2)]">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span className="text-[11px] font-black text-rose-400 tracking-widest uppercase">Diagnóstico Clínico</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tighter leading-[1.05]">
            Sua operação possui falhas estruturais que destroem seu <span className="text-rose-500">patrimônio</span> diariamente.
          </h2>
          <p className="mt-8 text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            Não se trata apenas de desorganização. Trabalhar sem uma infraestrutura tecnológica AAA é um erro fatal que drena seus leads, sua autoridade e, em última instância, sua receita.
          </p>
        </motion.div>

        {/* Bento Grid: A Anatomia da Perda (Zero Glassmorphism) */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          
          {/* Card 1: Invisibilidade Digital (Site) - GRANDE */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bento-card-dark border-2 border-slate-800 hover:border-rose-900 p-8 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center border-2 border-slate-800 mb-8 group-hover:bg-rose-950/50 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <EyeOff className="w-6 h-6 text-slate-500 group-hover:text-rose-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Invisibilidade Crítica.</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Se você não possui uma vitrine própria otimizada (SEO), você não existe para o lead qualificado. Depender exclusivamente de redes sociais é construir sua base de clientes em um terreno alugado.
              </p>
            </div>
            {/* Visual de Erro 404/Invisibilidade - Blocos Sólidos */}
            <div className="mt-8 flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="h-3 w-24 bg-slate-800 border border-slate-700"></div>
              <div className="h-3 w-12 bg-rose-700 border border-rose-900 shadow-[2px_2px_0px_0px_rgba(225,29,72,0.5)]"></div>
              <div className="h-3 w-32 bg-slate-800 border border-slate-700"></div>
            </div>
          </motion.div>

          {/* Card 2: Caos do WhatsApp (CRM) - MÉDIO */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bento-card-dark border-2 border-slate-800 hover:border-indigo-900/80 p-8 group relative flex flex-col justify-between">
            <div className="absolute top-8 right-8">
               <div className="relative">
                  <MessageCircle className="w-8 h-8 text-slate-700 group-hover:text-indigo-500 transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-[9px] font-black px-1.5 py-0.5 text-white border border-rose-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest">Lost</span>
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">O Abismo do WhatsApp.</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Sem um motor de CRM ditando o ritmo, cada lead é uma aposta cega. O cliente esfria porque se perdeu em meio a 200 conversas não lidas. A ausência de processos mata a conversão.
              </p>
            </div>
            {/* Barra de progresso sólida e brutalista */}
            <div className="mt-8 h-2 w-full bg-slate-900 border border-slate-800 overflow-hidden flex">
              <motion.div 
                className="h-full bg-rose-600 border-r border-rose-800" 
                initial={{ width: "100%" }} 
                whileInView={{ width: "12%" }} 
                transition={{ duration: 2, delay: 0.5, ease: "circOut" }} 
              />
            </div>
          </motion.div>

          {/* Card 3: Refém de Portais - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bento-card-dark border-2 border-slate-800 p-8 group">
            <Globe className="w-10 h-10 text-slate-600 mb-6 group-hover:text-amber-500 transition-colors" />
            <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase">Refém dos Portais.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Pagando caro para ser apenas mais um anúncio genérico. Você compra o clique, mas o portal sequestra a inteligência do dado e a autoridade da marca.
            </p>
          </motion.div>

          {/* Card 4: Dados Perdidos - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bento-card-dark border-2 border-slate-800 p-8 group">
            <Database className="w-10 h-10 text-slate-600 mb-6 group-hover:text-indigo-500 transition-colors" />
            <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase">Patrimônio Zero.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Sua carteira diluída em planilhas e post-its. Quando um corretor vai embora, o ouro da sua imobiliária vai junto com ele. Risco operacional máximo.
            </p>
          </motion.div>

          {/* Card 5: ROI Cego - LARGO INFERIOR */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bg-[#05080f] border-2 border-rose-900 p-8 shadow-[6px_6px_0px_0px_rgba(225,29,72,0.15)] group flex flex-col justify-between">
            <TrendingDown className="w-10 h-10 text-rose-600 mb-6" />
            <div>
              <h3 className="text-lg font-black text-rose-500 mb-2 tracking-tight uppercase">Hemorragia Financeira.</h3>
              <p className="text-slate-400 text-sm font-medium">
                Investimentos em marketing sem rastreabilidade de UTMs ou origens. Todo real alocado sem métricas de conversão é capital destruído.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Frase de Impacto Final da Seção */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-black tracking-[0.2em] uppercase text-xs border-y border-slate-800 py-4 inline-block px-8">
            O Imovent é o único antídoto contra o amadorismo estrutural.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
