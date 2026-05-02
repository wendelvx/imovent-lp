import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layout } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-slate-100 transition-all duration-300 ${
        isScrolled ? 'shadow-solid-premium py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Imovent: Unidade Visual com o Resto do Sistema */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-indigo-600 border-2 border-indigo-400 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] group-hover:shadow-none group-hover:translate-y-0.5 transition-all">
            <span className="text-white font-black text-xl italic">I</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-950 tracking-tighter leading-none">Imovent</span>
            <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1">Elite Edition</span>
          </div>
        </div>

        {/* Links & Navegação de Alívio */}
        <div className="flex items-center gap-4 md:gap-8">
          <a 
            href="#login" 
            className="hidden sm:block text-slate-500 hover:text-indigo-600 font-bold transition-colors text-sm uppercase tracking-widest"
          >
            Entrar
          </a>
          
          <button className="group flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-xl font-black transition-all btn-magnetic-solid text-xs uppercase tracking-widest">
            <span className="hidden sm:inline">Começar Grátis</span>
            <span className="sm:hidden">Testar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </motion.nav>
  );
}
