import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        
        {/* Logo Imovent em Imagem (.webp) - Tamanho Ampliado */}
        <a href="/" className="flex items-center cursor-pointer group">
          <img 
            src="/logo.webp" 
            alt="Imovent" 
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Links & Navegação para a Aplicação */}
        <div className="flex items-center gap-4 md:gap-8">
          <a 
            href="https://app.imovent.com.br/login" 
            className="hidden sm:block text-slate-500 hover:text-indigo-600 font-bold transition-colors text-sm uppercase tracking-widest"
          >
            Entrar
          </a>
          
          <a 
            href="https://app.imovent.com.br/register"
            className="group flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-xl font-black transition-all btn-magnetic-solid text-xs uppercase tracking-widest"
          >
            <span className="hidden sm:inline">Começar Grátis</span>
            <span className="sm:hidden">Testar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </motion.nav>
  );
}