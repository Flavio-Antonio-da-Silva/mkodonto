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
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto de Venda */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Pronto para dominar o <span className="text-blue-600">mercado odontológico</span> no RJ?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Não deixe sua clínica invisível. Solicite um orçamento personalizado e receba uma análise de concorrência gratuita do seu bairro em até 24h.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-slate-700 font-bold">contato@mkodonto.com.br</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-slate-700 font-bold">Rio de Janeiro, RJ</span>
              </div>
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
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Seu Nome Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Ex: Dr. Marcelo Silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">E-mail Profissional</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="exemplo@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Como podemos ajudar?</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Conte-nos sobre sua clínica ou bairro no RJ (ex: Botafogo, Barra, Centro)..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98] text-lg uppercase tracking-wider"
              >
                Enviar Solicitação
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