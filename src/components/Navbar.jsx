import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Alterado para white/90 para melhor legibilidade com o gradiente da Hero
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-blue-600 tracking-tighter">
              MK<span className="text-slate-800">DENTAL</span>
            </span>
          </div>

          {/* Menu Desktop */}
          {/* Adicionado o link para #portfolio (Escolha.jsx) */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#inicio" className="text-slate-600 hover:text-blue-600 transition-colors">Início</a>
            <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Modelos</a>
            <a 
              href="#contato" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200 active:scale-95"
            >
              Solicitar Proposta
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-3 text-slate-600 font-medium border-b border-gray-50">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block py-3 text-slate-600 font-medium border-b border-gray-50">Serviços</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block py-3 text-slate-600 font-medium border-b border-gray-50">Modelos</a>
            <div className="pt-4">
              <a href="#contato" onClick={() => setIsOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold">
                Solicitar Proposta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;