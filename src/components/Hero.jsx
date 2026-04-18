import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoHero from './VideoHero';
import heroBg from "../assets/hero_img/hero10.jpg";
gsap.registerPlugin(ScrollTrigger);

const imageModules = import.meta.glob('../assets/hero_img/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

const Hero = () => {
  const imageRefs = useRef([]);
  const textContainerRef = useRef(null);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        ctx.revert();
      };
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 "
    >

      {/* BACKGROUND IMAGE  */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* OVERLAY GRADIENT (Tailwind v4) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#FAFAFF]/10 via-[#FAFAFF]/10 to-blue-100/80" />

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div ref={textContainerRef} className="order-1 text-start">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-200 text-blue-700 text-sm font-bold mb-4">
              Foco em Dentistas do Rio de Janeiro 📍
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight bg-linear-to-b from-gray-200/80 via-[#6495ED]/70 to-blue-100/80 rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
              <span className="text-[#FFD800]">Atraia</span> novos clientes de sua região para seu consultório.
              <span className="text-[#FFD800]"> Foco em público do Rio de Janeiro.</span> Na <span className="font-dmserif text-blue-800">MK</span>ODONTO
            </h1>

            <p className="font-playfair mt-6 text-lg sm:text-xl md:text-2xl lg:text-[25px] text-[#010129] leading-relaxed bg-linear-to-b from-gray-200/80 via-[#6495ED]/70 to-blue-100/80 rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
              Como dentista no Rio de Janeiro, você sabe que a concorrência é feroz, e que sem uma presença digital forte, perde leads para quem já investe online.
              <span className="text-[#008000]"> <strong>Implementação rápida</strong></span>, com <span className="font-sans">1</span> ano de hospedagem e <span className="text-[#008000]"><strong>domínio grátis</strong></span> incluso.
            </p>

            <VideoHero />

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-900 transition-all text-center shadow-lg active:scale-95"
              >
                Solicite Proposta Gratuita
              </a>
            </div>
          </div>

          {/* CARROSSEL */}
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