import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Zap, Lock, Clock, ShieldCheck, Globe } from 'lucide-react';

export default function FaqCTA() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "O Imovent substitui o meu CRM atual?", 
      a: "O Imovent é um ecossistema completo. Ele oferece CRM de gestão, site próprio e motor de vendas no WhatsApp. Se você já tem um CRM, ele atua como uma injeção de potência no seu WhatsApp e na sua captação de leads via site. Se não tem, ele será a única ferramenta que você precisará para gerenciar 100% da sua operação." 
    },
    { 
      q: "Como o site próprio ajuda a aumentar meu lucro?", 
      a: "Diferente de portais onde você é 'só mais um', seu site Imovent é sua fortaleza digital. Ele é otimizado para SEO (Google), garantindo que os leads cheguem diretamente para você, sem concorrência e sem taxas extras por clique, aumentando sua margem líquida." 
    },
    { 
      q: "Não tenho tempo para configurar nada. Como funciona?", 
      a: "O Imovent foi desenhado para quem precisa de agilidade. O setup da plataforma e a ativação do seu site levam menos de 5 minutos. Nossa interface é intuitiva: se você sabe usar o WhatsApp, você domina o Imovent no primeiro dia." 
    },
    { 
      q: "O teste gratuito realmente me dá acesso a tudo?", 
      a: "Sim. Durante o período de teste, você terá acesso à plataforma completa — CRM, Automação de WhatsApp e sua Vitrine Digital. Queremos que você sinta o lucro entrando no caixa antes de investir um único real." 
    }
  ];

  return (
    <section className="bg-white py-32 px-6 lg:px-12 relative">
      
      {/* FAQ Section: O Reforço da Autoridade */}
      <div className="max-w-3xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-px w-8 bg-indigo-200"></div>
             <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Dúvidas Frequentes</span>
             <div className="h-px w-8 bg-indigo-200"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Tudo o que você precisa saber.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className={`border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-slate-50 border-indigo-200 shadow-sm' : 'bg-white hover:border-slate-300'}`}
            >
              <button 
                onClick={() => toggleFaq(idx)} 
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg font-bold pr-8 transition-colors ${openFaq === idx ? 'text-indigo-600' : 'text-slate-800 group-hover:text-indigo-600'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === idx ? 'bg-indigo-600 rotate-180' : 'bg-slate-100'}`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${openFaq === idx ? 'text-white' : 'text-slate-400'}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 font-medium leading-relaxed border-t border-indigo-100/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mega-Bloco CTA Final: A Transição para o Profissionalismo */}
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-950 bg-dotted-pattern rounded-[3rem] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden border border-slate-800"
        >
          {/* Efeitos de Luz Sólida (Sem Blur em componentes) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg mb-10">
              <Zap className="w-4 h-4 fill-white" />
              <span className="text-xs font-black uppercase tracking-widest">Acesso Imediato</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white mb-8 tracking-tighter leading-[1] max-w-4xl mx-auto">
              Sua nova casa digital <span className="text-indigo-400">está pronta.</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Não perca mais nenhuma venda por falta de estrutura. Ative hoje o seu site, seu CRM e seu motor de WhatsApp em um único lugar.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-white text-indigo-900 px-12 py-6 rounded-2xl font-black text-xl shadow-solid-premium hover:bg-indigo-50 transition-all inline-flex items-center gap-4 btn-magnetic-solid group">
                Ativar Minha Operação Agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" /> Site + CRM + Automação
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-400" /> Ativação em 2 min
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}