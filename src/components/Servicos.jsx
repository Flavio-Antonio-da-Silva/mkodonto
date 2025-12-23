import React from 'react';

const servicosData = [
  {
    title: "Implementação de Landing Page",
    subtitle: "Principal Serviço",
    description: "Desenvolvimento rápido de landing page profissional, SEO local para buscas RJ (ex.: 'dentista Botafogo'), design responsivo e integração WhatsApp. Inclui 1 ano de hospedagem e domínio grátis — pronto em 7-10 dias.",
    price: "R$ 1.200",
    detail: "Pagamento único • 25% OFF p/ primeiros 15 clientes",
    benefit: "Capte 30-50% mais leads sem ads caros.",
    icon: "🎯",
    highlight: true // Destaque para o serviço principal
  },
  {
    title: "Recorrência para Escala",
    subtitle: "Opcional Sustentável",
    description: "Campanhas no Google/Meta geolocalizadas no RJ, copy personalizado ético e manutenção pontual (SEO updates). Sem amarras: cancele quando quiser.",
    price: "R$ 350/mês",
    detail: "Trial 1º mês por R$ 200",
    benefit: "Aumente receita anual em 25-40% com automação.",
    icon: "📈",
    highlight: false
  },
  {
    title: "Consultoria e Upgrades",
    subtitle: "Sob Demanda",
    description: "Auditoria digital grátis no onboarding, integrações com Doctoralia ou softwares de gestão e criação de conteúdo educativo com auxílio de IA.",
    price: "R$ 250/h",
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
            Serviços Sob Medida para Dentistas no RJ — <span className="text-blue-600">ROI Comprovado e Sem Surpresas</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            No RJ, com +40 mil dentistas disputando pacientes, 40% dos autônomos perdem leads por falta de presença online efetiva. 
            Nossos pacotes são <span className="font-semibold text-gray-800 italic">lean</span>: foco em conversão real e preços transparentes para lucro imediato.
          </p>
        </div>

        {/* Grid de Cards - Ajustado para 3 colunas para melhor leitura da copy longa */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicosData.map((item, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                item.highlight 
                ? "bg-white border-blue-200 shadow-2xl scale-105 z-10" 
                : "bg-white/60 border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {item.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Procurado
                </span>
              )}
              
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-1">{item.subtitle}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <div className="text-3xl font-black text-gray-900">{item.price}</div>
                <p className="text-xs text-blue-600 font-medium mt-1">{item.detail}</p>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                   <p className="text-xs text-green-700 font-semibold">
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
            Interessado em resultados reais? Peça Sua Proposta Agora
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Resposta em 24h, personalizada aos seus custos.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Servicos;