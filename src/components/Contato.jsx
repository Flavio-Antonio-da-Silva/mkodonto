import React, { useState } from 'react';

const Contato = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    // Chave inserida conforme fornecido
    formData.append("access_key", "0081b294-8051-4723-9d39-917e4e560c0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Proposta enviada com sucesso! Em breve entraremos em contato.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Ocorreu um erro: " + data.message);
    }
  };

  return (
    <section id="contato" className="py-24 bg-linear-to-t from-blue-600 via-blue-500 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto de Venda */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Pronto para dominar o <span className="text-[#FFD700]">mercado odontológico</span> no RJ?
            </h2>
            <p className="text-lg text-[#F0F8FF] mb-8 leading-relaxed">
              Não deixe sua clínica invisível. Solicite um orçamento personalizado e receba uma análise de concorrência gratuita do seu bairro em até 24h.
            </p>
            
            <div className="space-y-4">

              <div>
                <a 
                href="https://wa.me/21977496651?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20MK%20Dental%20para%20minha%20cl%C3%ADnica." target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-all shadow-md shadow-green-200 active:scale-95">
                 <img src="/src/assets/whatsapp_icon.png" alt="WhatsApp" className="w-8 h-8 mr-2 inline-block" /> Clique para tirar qualquer dúvida via WhatApp
                </a>
              </div>

              
              <p className="mt-4 text-gray-900 text-sm">
                Pronto antendimento em horário comecial ou em até 24h
              </p>
             
            
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Configurações Ocultas para o E-mail chegar perfeito */}
              <input type="hidden" name="subject" value="Novo Lead: Solicitação MK Dental RJ" />
              <input type="hidden" name="from_name" value="MK Dental Web" />
              <input type="hidden" name="replyto" value="%email%" />

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Seu Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Ex: Dr. Marcelo Silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">SEU MELHOR E-MAIL</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="exemplo@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">FALE COMO PODEMOS TE AJUDAR?</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Conte-nos sobre sua clínica ou bairro no RJ (ex: Botafogo, Barra, Centro)..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-200 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-yellow-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98] text-lg uppercase tracking-wider"
              >
               SOLICITAR Orçamento Grátis
              </button>
              
              {result && (
                <div className={`text-center p-3 rounded-lg font-bold animate-pulse ${result.includes("sucesso") ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contato;