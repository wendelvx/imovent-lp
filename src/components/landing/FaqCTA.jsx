import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Zap, ShieldCheck, Clock, Terminal } from 'lucide-react';

export default function FaqCTA() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "O Imovent substitui o meu CRM atual?", 
      a: "O Imovent é um ecossistema estrutural completo. Ele oferece o motor de gestão, site próprio e automação de WhatsApp. Se você já tem um CRM, ele atua como uma injeção de potência na sua captação. Se não tem, ele será a única infraestrutura que você precisará para dominar 100% da sua operação." 
    },
    { 
      q: "Como a Vitrine Digital ajuda a aumentar minha margem?", 
      a: "Diferente de portais onde você compra cliques e aluga terreno, seu site Imovent é um Ativo Digital proprietário. Otimizado para SEO de alta performance, ele garante que os leads cheguem diretamente à sua operação, sem dividir atenção com a concorrência e blindando sua margem de lucro." 
    },
    { 
      q: "A implementação é demorada? Vai parar minha operação?", 
      a: "O Imovent foi construído para deploy instantâneo. A ativação do seu motor de gestão e do seu site leva literalmente 2 minutos. A arquitetura é complexa nos bastidores, mas a interface é soberana e intuitiva: se a sua equipe usa o WhatsApp, ela domina o Imovent hoje." 
    },
    { 
      q: "O acesso de teste é limitado?", 
      a: "Não. Durante o período de teste, você recebe as chaves completas do motor: CRM, Roleta de Leads, Automações e Vitrine. Acreditamos em provar o ROI antes de você comprometer o seu caixa." 
    }
  ];

  return (
    <section className="bg-white py-32 px-6 lg:px-12 relative border-b-2 border-slate-900">
      
      {/* FAQ Section: O Reforço da Autoridade */}
      <div className="max-w-3xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
             <Terminal className="w-5 h-5 text-indigo-700" />
             <span className="text-[11px] font-black text-indigo-700 uppercase tracking-[0.2em] bg-indigo-50 border border-indigo-200 px-3 py-1">FAQ / Base de Conhecimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tighter leading-[1.1]">
            Respostas definitivas para sua <span className="text-indigo-600">operação.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className={`border-2 transition-all duration-200 ${
                openFaq === idx 
                  ? 'bg-slate-50 border-indigo-900 shadow-[4px_4px_0px_0px_rgba(49,46,129,1)]' 
                  : 'bg-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]'
              }`}
            >
              <button 
                onClick={() => toggleFaq(idx)} 
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg font-black pr-8 uppercase tracking-wide transition-colors ${openFaq === idx ? 'text-indigo-800' : 'text-slate-950 group-hover:text-indigo-600'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 border-2 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  openFaq === idx 
                    ? 'bg-indigo-600 border-indigo-900 rotate-180 text-white' 
                    : 'bg-slate-100 border-slate-900 text-slate-950 group-hover:bg-slate-200'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 text-slate-700 font-medium leading-relaxed border-t-2 border-indigo-900/10 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mega-Bloco CTA Final: O Terminal de Acesso */}
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-[#0B0F19] bg-dotted-pattern border-2 border-slate-900 p-10 md:p-20 text-center shadow-solid-dark relative overflow-hidden"
        >
          {/* Efeitos de Luz Sólida (Overlay para profundidade) */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500 border-2 border-emerald-900 text-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10 transform -rotate-1">
              <Zap className="w-4 h-4 fill-slate-950" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Deploy Imediato</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-8 tracking-tighter leading-[1.05] max-w-4xl mx-auto">
              A infraestrutura definitiva da sua <span className="text-indigo-500">operação.</span>
            </h2>
            
            <p className="text-lg text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Feche a porta para o amadorismo hoje. Ative sua vitrine de autoridade, blinde seus dados e ligue o motor do seu CRM em um único ambiente.
            </p>

            <div className="flex flex-col items-center gap-8">
              <button className="bg-indigo-600 text-white border-2 border-indigo-400 px-10 py-6 font-black text-lg uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:bg-indigo-500 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center gap-4 group w-full sm:w-auto justify-center">
                Ativar Motor Imovent
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[11px] font-black text-slate-500 uppercase tracking-widest bg-slate-900/50 px-6 py-3 border border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Governança Total
                </div>
                <div className="hidden md:block w-1 h-1 bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" /> Setup em 2 min
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
