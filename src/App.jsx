import { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap'; // Importação corrigida
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin
gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Escolha from './components/Escolha';
import Faq from './components/Faq';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Seleciona todas as seções que queremos animar
    const sections = document.querySelectorAll('.gsap-section');

    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 40%", // Começa quando o topo da seção atinge 85% da tela
            toggleActions: "play none none reverse", // "reverse" faz sumir ao subir o scroll
          }
        }
      );
    });

    // Limpeza (opcional, mas boa prática)
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Envolvemos os componentes em seções para o GSAP identificar */}
        <section className="gsap-section"><Hero /></section>
        <section className="gsap-section"><Servicos /></section>
        <section className="gsap-section"><Escolha /></section>
        <section className="gsap-section"><Faq /></section>
        <section className="gsap-section"><Contato /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;