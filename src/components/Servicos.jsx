import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicosData = [
  {
    subtitle: "Mais Procurado",
    title: "Landing Page Profissional",
    description: "Criamos sua landing page personalizada do zero, integrando fotos reais do consultório, textos otimizados e SEO local para ranquear em buscas como 'Dentista no meu bairro' — trazendo leads quentes que iniciam a busca pelo seu serviço (pacientes que já querem agendar!). No smartphone, 90% escolhem os primeiros resultados do Google. Pronto em 7-10 dias, com aumento inicial de leads qualificados (baseado em cases reais de 2025). Retorno rápido do investimento com adesão de novos pacientes. Inclui 1 ano de hospedagem e domínio grátis, sem custos extras — foco racional em conversões orgânicas sem depender de anúncios caros. Aproveitando o crescimento de 10% ao ano no mercado odontológico no Rio de Janeiro em 2026.",
    price: "R$ 1.298",
    detail: "CONTRATE AGORA EM JANEIRO E PAGUE APENAS R$ 1.089",
    benefit: "Página 100% otimizada para smartphones e pesquisas feitas por seu serviço por clientes em seu bairro — capte leads quentes com ROI comprovado e sem gastos altos em ads.",
    icon: "💻",
    highlight: true 
  },
  {
    subtitle: "Manutenção Inteligente",
    title: "Recorrência Mensal",
    description: "Oferecemos um serviço sob medida para sua clínica odontológica, priorizando o crescimento do seu negócio com retorno de seu investimento. Atualize fotos reais do consultório, personalize textos e layouts, lance campanhas sazonais como Black Friday ou Natal, e conte com consultoria de copy especializada para otimizar conversões. Pronto para ajustes mensais, trazendo marketing orgânico contínuo na sua região (baseado em cases 2025/2026, com foco em leads quentes via SEO local). Trazendo competitividade local perante seus concorrentes.",
    price: "R$ 273/mês",
    detail: "ASSINE AGORA EM JANEIRO E GANHE 1 MÊS GRÁTIS — INVISTA NO SEU SUCESSO!",
    benefit: "Adaptação contínua para campanhas e personalizações, com consultoria dedicada — transforme leads em pacientes fiéis e maximize ROI sem custos surpresa.",
    icon: "🔄",
    highlight: false 
  },
  {
    title: "Serviços Sob Demanda",
    subtitle: "Sob Demanda",
    description: [
      "Edição de Imagens em Figma: Ajustes profissionais em fotos ou materiais visuais, garantindo estética clean;",
      "Copywriting Sob Medida: Redação ou revisão de textos para páginas, anúncios ou posts;",
      "Consultoria Estratégica: análise de marketing digital, com planos acionáveis baseados em dados reais;",
      "Otimização de Google My Business;",
      "Setup ou update de perfil para visibilidade em mapas, incluindo reviews e fotos — crucial no RJ, onde 70% das buscas odontológicas são realizadas via smartphone."
    ],
    price: "R$ 82,00/h ",
    detail: "CÁLCULO FEITO POR ESTIMATIVA DE HORAS TRABALHADAS",
    benefit: "Custo do serviço unitário conforme a complexidade.",
    icon: "💎",
    highlight: false
  }
];

const Servicos = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      const validCards = cardsRef.current.filter(el => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: validCards[0],
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="py-24 bg-linear-to-t from-gray-500/10 via-blue-300 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sua Página Sob Medida! Otimizada Para Clientes da Sua Região{" "}
            <span className="text-[#FFFF00]">Conversão de leads Comprovada</span>
          </h2>
          <p className="mt-6 text-lg text-[#252525] leading-relaxed">
            No RJ, com +40 mil dentistas disputando pacientes, 57% dos autônomos perdem leads por falta de presença online efetiva.
            Nossos pacotes são <span className="font-semibold text-gray-800 italic">eficientes</span>: foco em conversão real e custos pré-definidos e transparentes para melhor previsibilidade do retorno do seu investimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicosData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ opacity: 0 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                item.highlight
                  ? "bg-[#F5DEB3] border-blue-500 shadow-2xl scale-105 z-10"
                  : "bg-blue-300 border-blue-500 shadow-md hover:shadow-lg"
              }`}
            >
              {item.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Procurado
                </span>
              )}

              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-blue-900 font-bold text-sm uppercase tracking-wide mb-1">{item.subtitle}</p>

              <div className="text-gray-900 text-md leading-relaxed mb-6 flex-grow">
                {Array.isArray(item.description) ? (
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {item.description.map((li, idx) => (
                      <li key={idx} className="pl-1">{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>

              <div className="pt-6 border-t border-blue-300">
                <div className="text-3xl font-black text-gray-900">{item.price}</div>
                <p className="text-md text-blue-900 font-medium mt-1">{item.detail}</p>
                <div className="mt-4 p-3 bg-green-200 rounded-lg">
                  <p className="text-xs text-green-900 font-semibold">
                    🚀 Benefício: {item.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-block px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all shadow-xl active:scale-95"
          >
            Clique para enviar mensagem e tirar qualquer dúvida
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
