import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mantido apenas o SVG do Instagram conforme solicitado
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Função para rolagem suave ao clicar nos links do Ecossistema
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Se não estiver na Home, redireciona para a Home com o hash
    if (location.pathname !== '/') {
      navigate(`/${sectionId}`);
      return;
    }

    // Se já estiver na Home, faz a rolagem suave
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 100; // Espaço do menu fixo no topo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Atualiza a URL sem pular
      window.history.pushState(null, '', sectionId);
    }
  };

  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-6 lg:px-12 border-t-2 border-slate-900 relative">
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12 mb-20">
          
          {/* Coluna da Marca */}
          <div className="lg:col-span-2 flex flex-col items-start">
            
            {/* Logo Imovent em Imagem (.webp) */}
            <div className="flex items-center mb-8 cursor-pointer group" onClick={(e) => scrollToSection(e, '#topo')}>
              <img 
                src="/logo.webp" 
                alt="Imovent" 
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 brightness-0 invert" 
                // A classe "brightness-0 invert" deixa a logo branca caso a original seja escura. Remova se sua logo já for clara/branca.
              />
            </div>
            
            <p className="text-slate-400 font-medium leading-relaxed mb-10 max-w-sm">
              Criamos o Imovent para devolver aos corretores o que eles mais precisam: <strong>tempo e organização</strong>. Transformamos a confusão do WhatsApp em uma máquina de vendas previsível.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-slate-900 border-2 border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/10 transition-all duration-300 group shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-0.5"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna de Produto */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-2 border-l-2 border-indigo-600 pl-3">Ecossistema</h4>
            {/* Lembre-se de adicionar ids correspondentes (ex: id="crm-engine") nas divs da seção Features */}
            <a href="#crm-engine" onClick={(e) => scrollToSection(e, '#crm-engine')} className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors">Motor de Gestão</a>
            <a href="#vitrine-digital" onClick={(e) => scrollToSection(e, '#vitrine-digital')} className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors">Vitrine de Autoridade</a>
            <a href="#automacoes" onClick={(e) => scrollToSection(e, '#automacoes')} className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors flex items-center gap-2 group">
              Studio Criativo <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-black px-2 py-0.5 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">NEW</span>
            </a>
          </div>

          {/* Coluna de Suporte */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-2 border-l-2 border-indigo-600 pl-3">Apoio</h4>
            {/* Links apontando para o WhatsApp */}
            <a href="https://wa.me/5588921811204" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors">
              Central de Ajuda
            </a>
            <a href="https://wa.me/5588921811204" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors font-black text-indigo-400 flex items-center gap-2">
              Falar com Especialista <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Coluna Legal */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-2 border-l-2 border-indigo-600 pl-3">Privacidade</h4>
            <Link to="/termos" className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="text-slate-400 font-bold text-sm hover:text-indigo-400 transition-colors">
              Política de Privacidade
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Badge de Segurança */}
        <div className="pt-10 border-t-2 border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              © {currentYear} Paulo Wendel Alves Peixoto. <br className="md:hidden" />
              Desenvolvido para alta performance imobiliária.
            </p>
            <span className="text-[10px] text-slate-700 font-black mt-2 block tracking-tighter">CNPJ / CPF Protegido</span>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-3 bg-[#0B0F19] border-2 border-slate-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] cursor-default">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Servidores Criptografados</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Conformidade LGPD {currentYear}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}