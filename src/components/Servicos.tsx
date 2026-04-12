'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Componentes para renderizar números com font-sans
const Numero = ({ children }) => (
  <span className="font-sans">{children}</span>
)

const DescricaoCard1 = () => (
  <>
    Criamos seu site personalizada do zero, integrando fotos reais do consultório, textos otimizados e SEO local para ranquear em buscas como 'Dentista no meu bairro' — trazendo leads quentes que iniciam a busca pelo seu serviço (pacientes que já querem agendar!). No smartphone, <Numero>90%</Numero> escolhem os primeiros resultados do Google. Pronto em <Numero>7-10</Numero> dias, com aumento inicial de leads qualificados (baseado em cases reais de <Numero>2025</Numero>). Retorno rápido do investimento com adesão de novos pacientes. Inclui <Numero>1</Numero> ano de hospedagem e domínio grátis, sem custos extras — foco racional em conversões orgânicas sem depender de anúncios caros. Aproveitando o crescimento de <Numero>10%</Numero> ao ano no mercado odontológico no Rio de Janeiro em <Numero>2026</Numero>.
  </>
)

const DescricaoCard2 = () => (
  <>
    Oferecemos um serviço sob medida para sua clínica odontológica, priorizando o crescimento do seu negócio com retorno de seu investimento. Atualize fotos reais do consultório, personalize textos e layouts, lance campanhas sazonais como Black Friday ou Natal, e conte com consultoria de copy especializada para otimizar conversões. Pronto para ajustes mensais, trazendo marketing orgânico contínuo na sua região (baseado em cases <Numero>2025</Numero>/<Numero>2026</Numero>, com foco em leads quentes via SEO local). Trazendo competitividade local perante seus concorrentes.
  </>
)

const DescricaoCard3 = () => (
  <ul className="list-disc pl-5 space-y-2 text-sm">
    <li className="pl-1">Chatbot personalizado para atendimento via site e/ou WhatsApp;</li>
    <li className="pl-1">Integração com APIs de pagamento, CRM ou qualquer sistema utilizado pela clínica.</li>
    <li className="pl-1">Edição de Imagens em Figma: Ajustes profissionais em fotos ou materiais visuais, garantindo estética clean;</li>
    <li className="pl-1">Copywriting Sob Medida: Redação ou revisão de textos para páginas, anúncios ou posts;</li>
    <li className="pl-1">Consultoria Estratégica: análise de marketing digital, com planos acionáveis baseados em dados reais;</li>
    <li className="pl-1">Otimização de Google My Business;</li>
    <li className="pl-1">Setup ou update de perfil para visibilidade em mapas, incluindo reviews e fotos — crucial no RJ, onde <Numero>70%</Numero> das buscas odontológicas são realizadas via smartphone.</li>
  </ul>
)

const servicosData = [
  {
    subtitle: "Mais Procurado",
    title: "Website Profissional",
    description: DescricaoCard1,
    price: "R$ 479,49",
    detail: "CONTRATE AGORA EM FEVEREIRO E PAGUE APENAS R$ 398,80",
    benefit: "Página 100% otimizada para smartphones e pesquisas feitas por seu serviço por clientes em seu bairro — capte leads quentes com ROI comprovado e sem gastos altos em ads.",
    icon: "💻",
    highlight: true 
  },
  {
    subtitle: "Manutenção Inteligente (Opcional)",
    title: "Recorrência Mensal",
    description: DescricaoCard2,
    price: "R$ 87,00/mês",
    detail: "ASSINE AGORA EM FEVEREIRO E GANHE 1 MÊS GRÁTIS — INVISTA NO SEU SUCESSO!",
    benefit: "Adaptação contínua para campanhas e personalizações, com consultoria dedicada — transforme leads em pacientes fiéis e maximize ROI sem custos surpresa.",
    icon: "🔄",
    highlight: false 
  },
  {
    title: "Serviços Sob Demanda",
    subtitle: "Sob Demanda",
    description: DescricaoCard3,
    price: "R$ 82,80/h ",
    detail: "CÁLCULO FEITO POR ESTIMATIVA DE HORAS TRABALHADAS",
    benefit: "Custo do serviço unitário conforme a complexidade.",
    icon: "💎",
    highlight: false
  }
]

export default function Servicos() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    ScrollTrigger.refresh()

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
        )
      }

      const validCards = cardsRef.current.filter((el) => el !== null)
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
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
            <span className="text-[#FFD800]">Converta visualisações em atendimentos!</span>
          </h2>
          <p className="mt-6 text-lg text-[#10195C] leading-relaxed font-dmserif">
            No RJ, com <Numero>+40</Numero> mil dentistas disputando pacientes, <Numero>57%</Numero> dos autônomos perdem leads por falta de presença online efetiva.
            Nossos pacotes são <span className="font-semibold text-gray-800 italic">eficientes</span>: foco em conversão real e custos pré-definidos e transparentes para melhor previsibilidade do retorno do seu investimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicosData.map((item, index) => {
            const DescriptionComponent = item.description as React.ComponentType
            
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
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

                <div className="text-gray-900 text-md font-serif leading-relaxed mb-6 flex-grow">
                  <DescriptionComponent />
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
            )
          })}
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
            Resposta em <Numero>24</Numero>h, personalizada aos seus custos.
          </p>
        </div>

      </div>
    </section>
  )
}