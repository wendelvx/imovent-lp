import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Lock, Unlock, Clock, MousePointer2, Settings, Database, Home } from 'lucide-react';

const ultraSmoothEase = [0.19, 1, 0.22, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: ultraSmoothEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.2 } 
  }
};

// Componente de Toggle (Mimetizando sua imagem)
const PermissionToggle = ({ label, active }) => (
  <div className="flex items-center justify-between p-3 bg-slate-900/40 border border-slate-800/50 rounded-xl group hover:border-indigo-500/30 transition-all duration-300">
    <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 uppercase tracking-tight transition-colors">
      {label}
    </span>
    <div className={`w-9 h-5 rounded-full relative transition-colors duration-500 ${active ? 'bg-indigo-600' : 'bg-slate-700'}`}>
      <motion.div 
        initial={false}
        animate={{ x: active ? 18 : 2 }}
        className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  </div>
);

export default function GovernanceSecurity() {
  return (
    <section className="bg-[#020408] py-24 md:py-32 px-6 lg:px-12 border-b border-slate-900 relative overflow-hidden antialiased">
      
      {/* Elementos de fundo abstratos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-950/30 border border-indigo-900/50 rounded-full mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-black text-indigo-300 tracking-[0.2em] uppercase">Segurança & Controle</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tighter mb-8">
            Proteja sua carteira e nunca mais deixe um cliente <span className="text-indigo-500">esfriar.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
            Seu maior patrimônio é a sua lista de clientes. Com o Imovent, você decide exatamente quem pode baixar ou apagar seus contatos. E se um corretor demorar muito para atender? O sistema libera o lead para que outro membro da equipe assuma. Simples, seguro e justo.
          </motion.p>
        </motion.div>

        {/* Bento Grid de Governança */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Card 1: Permissões Granulares */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: ultraSmoothEase }}
            className="lg:col-span-3 bg-[#05080f] rounded-[2.5rem] border border-slate-800 overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="p-8 border-b border-slate-800/50 bg-[#070A12]/50 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase">Gestão de Acessos</h3>
                <p className="text-xs text-slate-500 font-bold tracking-widest mt-1 uppercase">Blindagem de dados por nível de cargo</p>
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                <Users className="w-5 h-5 text-indigo-500" />
              </div>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Categoria 1: Imóveis */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                  <Home className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Catálogo de Imóveis</span>
                </div>
                <PermissionToggle label="Cadastrar Imóveis" active={true} />
                <PermissionToggle label="Editar Imóveis" active={true} />
                <PermissionToggle label="Excluir Imóveis" active={false} />
              </div>

              {/* Categoria 2: Leads */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                  <Database className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Leads e Clientes</span>
                </div>
                <PermissionToggle label="Ver Todos os Leads" active={false} />
                <PermissionToggle label="Exportar Dados" active={false} />
                <PermissionToggle label="Gerenciar Contatos" active={true} />
              </div>

              <motion.div 
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1/4 bottom-1/4 opacity-20 pointer-events-none"
              >
                <MousePointer2 className="w-6 h-6 text-white fill-indigo-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Vitrine de Leads */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: ultraSmoothEase }}
            className="lg:col-span-2 bg-[#05080f] rounded-[2.5rem] border border-slate-800 overflow-hidden flex flex-col group hover:border-indigo-900/50 transition-colors"
          >
            <div className="p-8 border-b border-slate-800/50 bg-[#070A12]/50">
              <h3 className="text-xl font-black text-white tracking-tight uppercase">Disponibilidade Dinâmica</h3>
              <p className="text-xs text-slate-500 font-bold tracking-widest mt-1 uppercase">Meritocracia e Agilidade</p>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group-hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider">Lead Sem Atendimento</span>
                    <Clock className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-3">
                    <motion.div 
                      className="h-full bg-amber-500" 
                      animate={{ width: ["100%", "0%"] }} 
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <p className="text-sm font-bold text-slate-200">Lead: Ricardo Almeida</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-px h-8 bg-gradient-to-b from-amber-500 to-indigo-500 opacity-30" />
                  <Unlock className="w-5 h-5 text-indigo-400" />
                </div>

                <div className="bg-indigo-950/20 border border-indigo-500/30 p-5 rounded-2xl">
                   <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Liberado para a Equipe</span>
                    <Users className="w-4 h-4 text-indigo-400" />
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    O lead retornou à vitrine para garantir que o cliente seja atendido com rapidez.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.2)_0%,transparent_70%)] group-hover:opacity-20 transition-opacity" />
            </div>
          </motion.div>

        </div>

        {/* Rodapé da Seção */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6 opacity-40">
             <div className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest">
                <Lock className="w-3 h-3" /> Criptografia Ponta a Ponta
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3" /> Conformidade LGPD
             </div>
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            Controle total. Sem atritos. Foco em vendas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}