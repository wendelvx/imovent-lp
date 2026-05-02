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
      
      {/* Glow de Fundo (Mais suave, focando em atenção em vez de "perigo") */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-rose-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção: Empatia e Identificação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          className="mb-20 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-950/40 border border-rose-900 mb-6 rounded-full">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span className="text-[11px] font-bold text-rose-300 tracking-widest uppercase">Diagnóstico Rápido</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tighter leading-[1.05]">
            Veja onde sua operação está <span className="text-rose-500">deixando dinheiro</span> na mesa.
          </h2>
          <p className="mt-8 text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            Muitas vezes, a falta de vendas não é culpa do mercado, mas sim de processos que dependem apenas da memória humana. Veja se você reconhece algum destes cenários:
          </p>
        </motion.div>

        {/* Bento Grid: A Anatomia do Dia a Dia */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          
          {/* Card 1: Invisibilidade Digital (Site) - GRANDE */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bento-card-dark border-2 border-slate-800 hover:border-slate-700 p-8 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center border-2 border-slate-800 mb-8 group-hover:bg-slate-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <EyeOff className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Sem vitrine própria.</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Depender apenas de redes sociais e portais é construir sua casa em terreno alugado. Sem um site com a sua marca, o cliente pesquisa no Google e acaba caindo no colo da concorrência.
              </p>
            </div>
            {/* Visual de Erro 404/Invisibilidade - Blocos Sólidos */}
            <div className="mt-8 flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="h-3 w-24 bg-slate-800 border border-slate-700"></div>
              <div className="h-3 w-12 bg-slate-600 border border-slate-500 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"></div>
              <div className="h-3 w-32 bg-slate-800 border border-slate-700"></div>
            </div>
          </motion.div>

          {/* Card 2: Caos do WhatsApp (CRM) - MÉDIO */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bento-card-dark border-2 border-slate-800 hover:border-indigo-900/80 p-8 group relative flex flex-col justify-between">
            <div className="absolute top-8 right-8">
               <div className="relative">
                  <MessageCircle className="w-8 h-8 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-[9px] font-black px-1.5 py-0.5 text-white border border-rose-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest">Perdido</span>
               </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">O funil furado do WhatsApp.</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Mensagens lidas e esquecidas. O cliente esfria porque você demorou a responder no meio de 200 conversas misturadas. Sem organizar o contato, cada lead vira um risco de venda perdida.
              </p>
            </div>
            {/* Barra de progresso sólida e brutalista */}
            <div className="mt-8 h-2 w-full bg-slate-900 border border-slate-800 overflow-hidden flex">
              <motion.div 
                className="h-full bg-rose-500 border-r border-rose-700" 
                initial={{ width: "100%" }} 
                whileInView={{ width: "12%" }} 
                transition={{ duration: 2, delay: 0.5, ease: "circOut" }} 
              />
            </div>
          </motion.div>

          {/* Card 3: Refém de Portais - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bento-card-dark border-2 border-slate-800 p-8 group">
            <Globe className="w-10 h-10 text-slate-600 mb-6 group-hover:text-amber-400 transition-colors" />
            <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase">Refém de Mensalidades.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Você paga caro para anunciar onde seu imóvel é só mais um. O cliente entra, mas quem fica com os dados e a inteligência do acesso é o portal, não você.
            </p>
          </motion.div>

          {/* Card 4: Dados Perdidos - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bento-card-dark border-2 border-slate-800 p-8 group">
            <Database className="w-10 h-10 text-slate-600 mb-6 group-hover:text-emerald-400 transition-colors" />
            <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase">Carteira Frágil.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Sua base de clientes está espalhada em agendas e celulares. Se um corretor sai da equipe, o histórico inteiro daquele cliente vai embora junto com ele.
            </p>
          </motion.div>

          {/* Card 5: ROI Cego - LARGO INFERIOR */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bg-[#05080f] border-2 border-slate-800 p-8 group flex flex-col justify-between">
            <TrendingDown className="w-10 h-10 text-rose-500 mb-6" />
            <div>
              <h3 className="text-lg font-black text-white mb-2 tracking-tight uppercase">Gasto Cego em Anúncios.</h3>
              <p className="text-slate-400 text-sm font-medium">
                Você investe em marketing, mas não sabe exatamente qual campanha ou outdoor trouxe o cliente que fechou contrato. É impossível crescer o que não se pode medir.
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
          <p className="text-slate-400 font-bold tracking-[0.1em] uppercase text-xs border-y border-slate-800 py-4 inline-block px-8">
            Reconhece algum desses cenários? O Imovent foi criado para resolver exatamente isso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
