import React from 'react';

// SVGs otimizados diretamente no componente para evitar quebras de dependência (Zero-Config)
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-6 lg:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna da Marca (Ocupa 2 colunas no desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-lg">I</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Imovent</span>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
              O motor de vendas definitivo para corretores e imobiliárias. Automatize seu trabalho braçal e escale suas comissões sem sair do WhatsApp.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna de Produto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-100 font-bold uppercase tracking-wider text-sm mb-2">Produto</h4>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Funcionalidades</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Planos e Preços</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Estudos de Caso</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors flex items-center gap-2">
              Atualizações <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">NOVO</span>
            </a>
          </div>

          {/* Coluna de Suporte */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-100 font-bold uppercase tracking-wider text-sm mb-2">Suporte</h4>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Central de Ajuda</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Falar com Especialista</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Tutoriais em Vídeo</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Status do Sistema</a>
          </div>

          {/* Coluna Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-100 font-bold uppercase tracking-wider text-sm mb-2">Legal</h4>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Termos de Uso</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Conformidade LGPD</a>
            <a href="#" className="text-slate-400 font-medium hover:text-indigo-400 transition-colors">Política de Cookies</a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & LGPD Badge */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © {currentYear} Imovent Tecnologia Ltda. Todos os direitos reservados.<br className="hidden sm:block" />
            <span className="text-xs">CNPJ: 00.000.000/0001-00</span>
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-slate-300">Ambiente Seguro & LGPD Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}