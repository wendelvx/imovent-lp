import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Garante que o usuário comece no topo da página ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho de Confiança */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Conformidade LGPD 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Política de Privacidade e <br />
            <span className="text-indigo-600">Proteção de Dados</span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            A sua privacidade é uma prioridade para o <strong>Imovent</strong> (de propriedade de <strong>Paulo Wendel Alves Peixoto</strong>, inscrito no CPF sob o nº <strong>018.747.263-70</strong>, com sede em Juazeiro do Norte, Ceará).
          </p>
        </header>

        <div className="space-y-10 text-slate-700 leading-relaxed font-medium">
          
          <section className="prose prose-slate max-w-none">
            <p>
              Este documento foi elaborado em estrita conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)</strong> e com as diretrizes globais de proteção de dados de lojas de aplicativos. Ele descreve como coletamos, utilizamos e protegemos as suas informações e as de seus clientes.
            </p>
          </section>

          {/* Seção 1: Papéis */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-solid-premium border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
                Imovent como Controlador
              </h3>
              <p className="text-sm">Tratamos seus dados de cadastro, faturamento e suporte para gerenciar sua conta e experiência na plataforma.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-solid-premium border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                Imovent como Operador
              </h3>
              <p className="text-sm">Tratamos os dados dos <strong>seus clientes (Leads)</strong> conforme suas instruções. Você, Contratante, é o Controlador exclusivo desses dados.</p>
            </div>
          </section>

          {/* Seção 3: Extensões (Crítico para aprovação na Chrome Store) */}
          <section className="bg-slate-900 text-slate-300 p-8 rounded-3xl shadow-solid-dark">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Privacidade nas Extensões de Navegador</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-indigo-500 pl-6">
                <h4 className="text-white font-bold mb-2">A. Extensão de Atendimento (WhatsApp)</h4>
                <p className="text-sm">
                  Lê estritamente o <strong>"Nome"</strong> e o <strong>"Telefone"</strong> do contato visível no momento do clique manual. 
                  <span className="block mt-2 text-indigo-400 font-bold italic">
                    NÃO lê histórico de conversas, NÃO realiza scraping em massa e NÃO monitora sua digitação.
                  </span>
                </p>
              </div>

              <div className="border-l-2 border-indigo-500 pl-6">
                <h4 className="text-white font-bold mb-2">B. Extensão de Publicação (AutoPost Marketplace)</h4>
                <p className="text-sm">
                  Apenas injeta os dados do imóvel que você já cadastrou no Imovent nos campos do Facebook. Os dados transitam exclusivamente via API segura (HTTPS). 
                  <span className="block mt-2 text-emerald-400 font-bold italic">
                    Nenhum dado é vendido ou compartilhado com terceiros para marketing.
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Seção 6: Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Segurança da Informação
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Criptografia', detail: 'Bcrypt Hashing' },
                { label: 'Autenticação', detail: 'JWT Tokens' },
                { label: 'Tráfego', detail: 'SSL / HTTPS' },
                { label: 'Arquitetura', detail: 'Isolada' }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                  <p className="text-xs font-bold text-slate-900">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Direitos e Retenção */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Seus Direitos (LGPD)</h2>
              <p className="text-sm mb-4">Você tem direito à confirmação, acesso, correção, portabilidade e exclusão de seus dados pessoais. O exercício desses direitos pode ser feito diretamente no painel ou via suporte.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Retenção de Dados</h2>
              <p className="text-sm">
                Em caso de cancelamento, mantemos os dados por até <strong>90 dias</strong>. Após esse período, leads e mídias são excluídos definitivamente, mantendo apenas registros obrigatórios por lei (logs e fiscais).
              </p>
            </section>
          </div>

          {/* Contato Final */}
         
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Imovent • 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;