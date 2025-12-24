import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-black text-white tracking-tighter mb-4 block">
              MK<span className="text-blue-500">DENTAL</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-300">
              Especialistas em transformar consultórios odontológicos no Rio de Janeiro em máquinas de captação de pacientes através de presença digital estratégica.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Templates</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Local */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contato RJ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📍</span> Rio de Janeiro, RJ
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">📧</span> mkdentalrj@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">💬</span> Resposta em até 24h
              </li>
            </ul>
          </div>



        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} MK Dental RJ. Todos os direitos reservados.
          </p>

          <p className="text-xs text-slate-500 flex items-center gap-1">
            Desenvolvido com <span className="text-red-500">❤</span> por
            <a
              href="https://portfolio-react-vite-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors underline decoration-slate-300 underline-offset-2"
            >
              Flávio Antônio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;