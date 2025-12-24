import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { id: 1, imgName: 'case1.png', url: "https://aysha-dental-care.web.app/", nome: "Dental Care Premium" },
  { id: 2, imgName: 'case2.png', url: "https://dental-clinic-ivory.vercel.app/", nome: "Ivory Clinic" },
  { id: 3, imgName: 'case3.png', url: "https://dentics-landing.vercel.app/", nome: "Dentics Modern" },
  { id: 4, imgName: 'case4.png', url: "https://dentalcare-zeta.vercel.app/", nome: "Zeta Odonto" },
  { id: 5, imgName: 'case5.png', url: "https://gray-mafutala.github.io/dental-landing-page/", nome: "Minimalist Dental" },
  { id: 6, imgName: 'case6.png', url: "https://ampedent.atalek.com/", nome: "Ampedent Tech" },
  { id: 7, imgName: 'case7.png', url: "https://dental-odonto-clinical.vercel.app/", nome: "Odonto Clinical" },
  { id: 8, imgName: 'case8.png', url: "https://consultorio-mocha.vercel.app/", nome: "Mocha Consultório" },
];

// O Vite resolve isso em tempo de build
const imageModules = import.meta.glob('../assets/cases/*.{png,jpg,jpeg}', { eager: true });

const Escolha = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    gsap.fromTo(cards, 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Suavizamos a rotação para um efeito mais elegante
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-linear-to-b from-blue-100 via-slate-950 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-[#191970] font-black mb-6 tracking-tight">
            Nossos Templates de <span className="text-[#f8e53b]">Alta Conversão</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Estruturas validadas para o mercado odontológico. Escolha o design que melhor comunica a autoridade do seu consultório no Rio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cases.map((projeto, idx) => {
            // Buscamos a imagem dinamicamente no objeto do Vite
            const imgPath = `../assets/cases/${projeto.imgName}`;
            const imageSrc = imageModules[imgPath]?.default;

            return (
              <a 
                key={projeto.id}
                href={projeto.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={el => cardsRef.current[idx] = el}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                className="group relative block rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Banner de "Ver Site" no hover */}
                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center backdrop-blur-sm">
                  <div className="bg-white text-blue-600 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </div>
                  <span className="mt-4 font-bold text-sm tracking-widest uppercase">Visualizar Modelo</span>
                </div>

                {/* Imagem */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={projeto.nome}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="p-5 border-t border-slate-800 flex justify-between items-center">
                  <h3 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                    {projeto.nome}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Escolha;