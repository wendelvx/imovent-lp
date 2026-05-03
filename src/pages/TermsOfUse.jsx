import React, { useEffect } from 'react';

const TermsOfUse = () => {
  // Garante que o usuário comece no topo da página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho do Documento */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Termos e Condições <br />
            <span className="text-indigo-600">Gerais de Uso</span>
          </h1>
          <p className="text-slate-500 font-medium">Última atualização: Maio de 2026</p>
        </header>

        {/* Corpo do Texto */}
        <div className="space-y-8 text-slate-700 leading-relaxed font-medium">
          
          <section className="bg-white p-8 rounded-3xl shadow-solid-premium border border-slate-200">
            <p className="mb-4">
              Este documento ("Termos de Uso") estabelece as condições para a utilização do software, da vitrine imobiliária e das extensões para navegadores do <strong>Imovent</strong>, sistema de propriedade de <strong>Paulo Wendel Alves Peixoto</strong>, inscrito no CPF sob o nº <strong>018.747.263-70</strong>, com sede em Juazeiro do Norte, Ceará.
            </p>
            <p>
              Ao realizar o cadastro, acessar o painel ou instalar as extensões do Imovent, o Contratante (Pessoa Física ou Jurídica) e seus respectivos Usuários (Corretores e Administradores) declaram ter lido, compreendido e aceitado expressamente todas as regras aqui descritas.
            </p>
          </section>

          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-sm">1</span>
              Objeto e Descrição dos Serviços
            </h2>
            <p>O Imovent é um ecossistema SaaS (Software as a Service) voltado para o mercado imobiliário. Os serviços licenciados incluem:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li><strong>CRM Multi-funil:</strong> Gestão de Leads, roleta de distribuição e pipeline de vendas.</li>
              <li><strong>Gestão de Inventário:</strong> Cadastro de imóveis e upload de mídia.</li>
              <li><strong>Vitrine Pública:</strong> Página web gerada automaticamente para exibição do portfólio.</li>
              <li><strong>Extensões:</strong> Ferramentas para WhatsApp Web e AutoPost para Facebook Marketplace.</li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-sm">2</span>
              Regras das Extensões (WhatsApp e Marketplace)
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-100 p-5 rounded-2xl border-l-4 border-indigo-500">
                <h3 className="font-bold text-slate-900 mb-2 italic">A. Referente ao WhatsApp:</h3>
                <p className="text-sm">A extensão atua como interface sobreposta. <strong>NÃO</strong> realiza scraping em massa, <strong>NÃO</strong> lê histórico de mensagens e <strong>NÃO</strong> coleta lista geral de contatos. A coleta se restringe a nome e telefone do contato aberto por comando do usuário.</p>
              </div>
              <div className="bg-slate-100 p-5 rounded-2xl border-l-4 border-indigo-500">
                <h3 className="font-bold text-slate-900 mb-2 italic">B. Referente ao AutoPost Marketplace:</h3>
                <p className="text-sm">O uso do AutoPost é de exclusiva responsabilidade do Usuário. O Imovent <strong>não possui vínculo com a Meta Platforms (Facebook)</strong> e isenta-se de responsabilidade sobre eventuais bloqueios ou restrições em contas de terceiros.</p>
              </div>
            </div>
          </section>

          {/* Seção 3 e 4 agrupadas para brevidade no exemplo, mas mantendo o texto original */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">3. Acesso e Cadastro</h3>
              <p className="text-sm text-slate-600">O sistema opera em arquitetura Multi-tenant com isolamento criptográfico de dados. O Usuário Administrador é responsável por gerenciar permissões da equipe.</p>
            </div>
            <div className="border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">4. Assinaturas e Faturamento</h3>
              <p className="text-sm text-slate-600">Modelo pré-pago via Asaas. A inadimplência por mais de 90 dias pode resultar na exclusão definitiva dos dados por segurança e custo de armazenamento.</p>
            </div>
          </section>

          {/* Seção 5 e 6 */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-sm">5</span>
                Obrigações do Usuário
              </h2>
              <p className="text-sm">Garantir a precisão dos dados dos imóveis, deter direitos autorais das imagens enviadas e tratar os dados dos leads em conformidade com a LGPD.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-sm">6</span>
                Limitações de Responsabilidade
              </h2>
              <p className="text-sm italic underline decoration-indigo-200 underline-offset-4">
                O Imovent é uma ferramenta de meio. Não garantimos resultados financeiros ou o funcionamento ininterrupto de integrações que dependem de terceiros (Facebook/WhatsApp).
              </p>
            </div>
          </section>

          {/* Seção 7, 8 e 9 */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-sm">7</span>
                Propriedade Intelectual
              </h2>
              <p className="text-sm">Todos os direitos sobre códigos, algoritmos e design pertencem a <strong>Paulo Wendel Alves Peixoto</strong>. Engenharia reversa ou cópia não autorizada são proibidas.</p>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-solid-dark">
              <h2 className="text-xl font-bold mb-4">9. Foro e Legislação</h2>
              <p className="text-slate-400 text-sm">
                Fica eleito o foro da Comarca de <strong>Juazeiro do Norte, Estado do Ceará</strong>, para dirimir quaisquer dúvidas oriundas deste documento, com renúncia a qualquer outro.
              </p>
            </div>
          </section>

        </div>

        {/* Rodapé Interno da Página */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Imovent • 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfUse;