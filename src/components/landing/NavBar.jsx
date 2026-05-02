import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitora o scroll para aplicar a sombra sólida
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? 'shadow-solid-premium py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo Imovent */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-lg">I</span>
          </div>
          <span className="text-2xl font-black text-slate-950 tracking-tight">Imovent</span>
        </div>

        {/* Links & CTAs (O Funil Permanente) */}
        <div className="flex items-center gap-6">
          <a 
            href="#login" 
            className="hidden sm:block text-slate-500 hover:text-indigo-600 font-bold transition-colors text-sm tracking-wide"
          >
            Fazer Login
          </a>
          
          <button className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold transition-colors btn-magnetic-solid text-sm shadow-md">
            Testar Grátis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </motion.nav>
  );
}