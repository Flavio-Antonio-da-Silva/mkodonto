import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoHero from './VideoHero';


gsap.registerPlugin(ScrollTrigger);

const imageModules = import.meta.glob('../assets/hero_img/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

const Hero = () => {
  const imageRefs = useRef([]);
  const textContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    // 1. ANIMAÇÃO DE ENTRADA (ScrollTrigger)
    const ctx = gsap.context(() => {
      // Animação do bloco de texto (Lado esquerdo)
      gsap.from(textContainerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 60%",
        }
      });

      // Animação do Carrossel (Lado direito)
      gsap.from(carouselContainerRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: carouselContainerRef.current,
          start: "top 80%",
        }
      });
    });

    // 2. ANIMAÇÃO DO CARROSSEL (Loop Infinito)
    if (images.length > 0) {
      gsap.set(imageRefs.current, { opacity: 0 });
      gsap.set(imageRefs.current[0], { opacity: 1 });

      const tl = gsap.timeline({ repeat: -1 });
      images.forEach((_, index) => {
        const nextIndex = (index + 1) % images.length;
        tl.to(imageRefs.current[index], {
          opacity: 0,
          duration: 0.8,
          delay: 1.5
        })
        .to(imageRefs.current[nextIndex], {
          opacity: 1,
          duration: 0.8
        }, "<");
      });

      return () => {
        tl.kill();
        ctx.revert(); // Limpa ScrollTriggers ao desmontar
      };
    }
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-b from-gray-200 via-[#6495ED] to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Lado Esquerdo: Texto (Com Ref para ScrollTrigger) */}
          <div ref={textContainerRef} className="order-1 text-start">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-200 text-blue-700 text-sm font-bold mb-4">
              Foco em Dentistas do Rio de Janeiro 📍
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="text-[#FFD800]">Atraia</span> novos clientes de sua região para seu consultório.
              <span className="text-[#FFD800]"> Foco em público do Rio de Janeiro.</span> Na <span className="font-dmserif text-blue-800">MK</span>ODONTO
            </h1>
            <p className="font-playfair mt-6 text-lg text-[#1E3636] font- leading-relaxed">
              Como dentista no Rio de Janeiro, você sabe que a concorrência é feroz, e que sem uma presença digital forte, perde leads para quem já investe online.
              <span className="text-[#008000]"> <strong>Implementação rápida</strong></span>, com <span className="font-sans">1</span> ano de hospedagem e <span className="text-[#008000]"><strong>domínio grátis</strong> </span>incluso.
            </p>

            {/* VÍDEO INSERIDO AQUI */}
            <VideoHero />

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-900 transition-all text-center shadow-lg active:scale-95">
                Solicite Proposta Gratuita
              </a>
            </div>
          </div>

          {/* Lado Direito: Carrossel GSAP (Com Ref para ScrollTrigger) */}
          <div ref={carouselContainerRef} className="order-2 relative w-full aspect-square max-w-[500px] mx-auto">
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