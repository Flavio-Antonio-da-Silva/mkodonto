import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Controle da animação GSAP
  useEffect(() => {
    if (isOpen) {
      // Abre o menu
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        display: "block"
      });
    } else {
      // Fecha o menu
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        }
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-50 bg-blue-200/90 backdrop-blur-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-blue-600 tracking-tighter">
              MK<span className="text-slate-800">ODONTO</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#inicio" className="text-slate-700 rounded-full py-1.5 px-3 hover:bg-red-200 hover:text-gray-900 transition-colors">Início</a>
            <a href="#servicos" className="text-slate-700 rounded-full py-1.5 px-3 hover:bg-red-200 hover:text-gray-900 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-slate-700 rounded-full py-1.5 px-3 hover:bg-red-200 hover:text-gray-900 transition-colors">Galeria de Designs</a>
            <a 
              href="#contato" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-500 transition-all shadow-md hover:shadow-blue-200 active:scale-95"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Controlado pelo GSAP */}
      <div 
        ref={menuRef}
        className="md:hidden bg-[#FFDAB9] border-b border-gray-100 text-[#041355] overflow-hidden"
        style={{ height: 0, opacity: 0, display: 'none' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-3 font-medium border-b border-orange-200/50">Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="block py-3 font-medium border-b border-orange-200/50">Serviços</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block py-3 font-medium border-b border-orange-200/50">Galeria de Designs</a>
          <div className="pt-4">
            <a 
              href="https://wa.me/5521988841154?text=Ol%C3%A1!%20Vi%20o%20site%20e%20preciso%20de%20or%C3%A7amento!" 
              onClick={() => setIsOpen(false)} 
              className="block w-full bg-[#006400] text-white text-center py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              Chame agora no WhatsApp!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;