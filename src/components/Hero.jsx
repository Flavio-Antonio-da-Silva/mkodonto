import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Com JSX, o import de imagens funciona direto sem erros de "módulo"
const imageModules = import.meta.glob('../assets/hero_img/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

const Hero = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    if (images.length === 0) return;

    // Garante que todas comecem invisíveis e a primeira visível
    gsap.set(imageRefs.current, { opacity: 0 });
    gsap.set(imageRefs.current[0], { opacity: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((_, index) => {
      const nextIndex = (index + 1) % images.length;

      tl.to(imageRefs.current[index], {
        opacity: 0,
        duration: 0.8,
        delay: 1 // 1 segundo aparecendo, como você pediu
      })
        .to(imageRefs.current[nextIndex], {
          opacity: 1,
          duration: 0.8
        }, "<");
    });

    return () => tl.kill(); // Limpa a animação se o componente desmontar
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-b from-gray-200 via-[#6495ED] to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Lado Esquerdo: Texto */}
          <div className="order-1 text-start">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-200 text-blue-700 text-sm font-bold mb-4">
              Foco em Dentistas do Rio de Janeiro 📍
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="text-[#8A2BE2]">Aumente</span> sua carteira de pacientes ampliando sua presença digital no RJ com landing pages que <span className="text-[#FFFF00]">convertem de verdade</span> na MK Dental
            </h1>
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Como dentista no Rio de Janeiro, você sabe que a concorrência é feroz, e que sem uma presença digital forte, perde leads para quem já investe online.
              <span className="text-[#DAA520]"> <strong>Implementação rápida</strong></span>, com 1 ano de hospedagem e <span className="text-[#008000]"><strong>domínio grátis</strong> </span>incluso.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-900 transition-all text-center shadow-lg active:scale-95">
                Solicite Proposta Gratuita
              </a>
             
            </div>
          </div>

          {/* Lado Direito: Carrossel GSAP */}
          <div className="order-2 relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  ref={(el) => (imageRefs.current[idx] = el)}
                  src={img}
                  alt={`Exemplo ${idx}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;