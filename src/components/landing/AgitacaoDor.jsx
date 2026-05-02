import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, EyeOff, AlertTriangle, TrendingDown, Database } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function AgitacaoDor() {
  return (
    <section className="bg-mesh-dark py-32 px-6 lg:px-12 border-t border-slate-900 relative overflow-hidden">
      
      {/* Glow de Fundo (Sanguíneo para representar perda) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-rose-900/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção: O Diagnóstico Fatal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          className="mb-20 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-950/50 border border-rose-900/50 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold text-rose-300 tracking-wider uppercase">Diagnóstico de Sobrevivência</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Sua operação está <span className="text-rose-500">invisível</span> e seu lucro está vazando.
          </h2>
          <p className="mt-8 text-xl text-slate-400 font-medium max-w-2xl">
            Trabalhar sem infraestrutura profissional não é apenas difícil — é financeiramente perigoso. O amadorismo custa caro.
          </p>
        </motion.div>

        {/* Bento Grid: A Anatomia da Perda */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          
          {/* Card 1: Invisibilidade Digital (Site) - GRANDE */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bg-[#0B0F19] border border-slate-800 hover:border-rose-900/40 rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 mb-8 group-hover:bg-rose-950/30 transition-colors">
              <EyeOff className="w-6 h-6 text-slate-500 group-hover:text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Invisibilidade: Se você não tem site, você não existe.</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Depender apenas de portais e redes sociais é construir sua casa em terreno alugado. Sem uma vitrine própria com SEO, você perde o lead qualificado que busca autoridade no Google.
            </p>
            {/* Visual de Erro 404/Invisibilidade */}
            <div className="mt-8 flex gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
              <div className="h-2 w-24 bg-slate-800 rounded-full"></div>
              <div className="h-2 w-12 bg-rose-900 rounded-full"></div>
              <div className="h-2 w-32 bg-slate-800 rounded-full"></div>
            </div>
          </motion.div>

          {/* Card 2: Caos do WhatsApp (CRM) - MÉDIO */}
          <motion.div variants={cardVariant} className="lg:col-span-3 bg-[#0B0F19] border border-slate-800 hover:border-indigo-900/40 rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-8 right-8">
               <div className="relative">
                  <MessageCircle className="w-8 h-8 text-slate-700 group-hover:text-indigo-500" />
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-[10px] font-black px-1.5 py-0.5 rounded-full text-white">LOST</span>
               </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">O Abismo do WhatsApp.</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Sem um CRM que domine suas conversas, cada lead é uma aposta. O cliente esquece de você porque você esqueceu dele no meio de 200 chats não lidos. A falta de gestão mata a sua conversão.
            </p>
            <div className="mt-8 h-1 w-full bg-slate-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-rose-500" 
                initial={{ width: "100%" }} 
                whileInView={{ width: "15%" }} 
                transition={{ duration: 2, delay: 0.5 }} 
              />
            </div>
          </motion.div>

          {/* Card 3: Refém de Portais - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 group">
            <Globe className="w-10 h-10 text-slate-500 mb-6 group-hover:text-rose-500 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-3">Refém dos Portais.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Pagando caro para anunciar onde seu imóvel é apenas mais um. Você atrai o lead, mas o portal é quem fica com os dados e a inteligência.
            </p>
          </motion.div>

          {/* Card 4: Dados Perdidos - QUADRADO */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 group">
            <Database className="w-10 h-10 text-slate-500 mb-6 group-hover:text-indigo-500 transition-colors" />
            <h3 className="text-xl font-bold text-white mb-3">Patrimônio de Dados Zero.</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Sua carteira de clientes está espalhada em post-its, planilhas e chats. Se você perder seu celular hoje, o seu negócio morre com ele.
            </p>
          </motion.div>

          {/* Card 5: ROI Cego - LARGO INFERIOR */}
          <motion.div variants={cardVariant} className="lg:col-span-2 bg-gradient-to-br from-[#0B0F19] to-rose-950/20 border border-rose-900/30 rounded-3xl p-8 group flex flex-col justify-between">
            <TrendingDown className="w-10 h-10 text-rose-500 mb-6" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Voo Cego Financeiro.</h3>
              <p className="text-slate-400 text-sm font-medium">
                Você gasta em marketing sem saber qual canal realmente fecha contrato. Cada real investido sem rastreio é um real jogado fora.
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
          <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
            O Imovent é o antídoto para a falência silenciosa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}