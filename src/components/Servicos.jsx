import React from 'react';

const servicosData = [
  {
    subtitle: "Mais Procurado",
    title: "Landing Page Profissional",
    description: "Criamos sua landing page personalizada do zero, integrando fotos reais do consultório, textos otimizados e SEO local para ranquear em buscas como 'dentista Ipanema acessível' ou 'ortodontia Botafogo' — pronto em 7-10 dias, com aumento inicial de 20% em leads qualificados (baseado em cases reais de 2025, evitando métricas infladas). Inclui 1 ano de hospedagem e domínio grátis embutidos, sem custos extras, para foco racional no que importa: conversões sem depender de ads caros logo de cara.",
    price: "R$ 1.199",
    detail: "CONTRATE AINDA EM 2025 E  PAGUE APENAS R$899",
    benefit: "Capte 30-50% mais leads sem ads caros.",
    icon: "💻",
    highlight: true // Destaque para o serviço principal
  },
  {
    title: "Plano de Recorrência",
    subtitle: "Personalização e Consultoria",
    description: "Assine para consultoria mensal personalizada e acompanhamento contínuo, incluindo alterações de copy em seções chave, ajustes técnicos, campanhas sazonais (ex.: Black Friday odontológica ou Dia da Saúde Bucal) e adição de fotos/atualizações para refletir novidades no seu consultório. Mantenha sua página sempre otimizada, reduzindo churn de leads em 20-30% (baseado em tendências 2025 da Ideal Odonto) sem esforço extra seu.",
    price: "R$ 349/mês",
    detail: "ASSINE AINDA EM 2025 E PAGUE APENAS R$299",
    benefit: "Aumente receita anual em 25-40%",
    icon: "📈",
    highlight: false
  },
  {
    title: "Serviços Sob Demanda",
    subtitle: "Sob Demanda",
    description: "Edição de Imagens em Figma: Ajustes profissionais em fotos ou materiais visuais, garantindo estética clean;   Copywriting Sob Medida: Redação ou revisão de textos para páginas, anúncios ou posts; Consultoria Estratégica: análise de marketing digital, com planos acionáveis baseados em dados reais; Otimização de Google My Business; Setup ou update de perfil para visibilidade em mapas, incluindo reviews e fotos — crucial no RJ, onde 70% das buscas odontológicas.",
    price: "R$ 42/h",
    detail: "Ou pacotes sob consulta",
    benefit: "Reduza riscos com estratégias baseadas em dados.",
    icon: "🧠",
    highlight: false
  }
];

const Servicos = () => {
  return (
    <section id="servicos" className="py-24 bg-linear-to-t from-gray-500/10 via-blue-300 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sua Página Sob Medida! Otimizada Para Clientes da Sua Região <span className="text-yellow-400">Conversão de leads Comprovada</span>
          </h2>
          <p className="mt-6 text-lg text-[#252525] leading-relaxed">
            No RJ, com +40 mil dentistas disputando pacientes, 40% dos autônomos perdem leads por falta de presença online efetiva.
            Nossos pacotes são <span className="font-semibold text-gray-800 italic">lean</span>: foco em conversão real e preços transparentes para lucro imediato.
          </p>
        </div>

        {/* Grid de Cards - Ajustado para 3 colunas para melhor leitura da copy longa */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicosData.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${item.highlight
                  ? "bg-[#F5DEB3] border-blue-200 shadow-2xl scale-105 z-10"
                  : "bg-white/60 border-gray-100 shadow-sm hover:shadow-md"
                }`}
            >
              {item.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Procurado
                </span>
              )}

              <div className="text-4xl mb-4">{item.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-1">{item.subtitle}</p>
              <p className="text-gray-900 text-md leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <div className="pt-6 border-t border-gray-100">
                <div className="text-3xl font-black text-gray-900">{item.price}</div>
                <p className="text-md text-blue-600 font-medium mt-1">{item.detail}</p>
                <div className="mt-4 p-3 bg-green-200 rounded-lg">
                  <p className="text-xs text-green-900 font-semibold">
                    🚀 Benefício: {item.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-block px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all shadow-xl active:scale-95"
          >
           Clique para enviar memsagem e tirar qualquer dúvida
          </a>
          <p className="mt-4 text-gray-900 text-sm">
            Resposta em 24h, personalizada aos seus custos.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Servicos;