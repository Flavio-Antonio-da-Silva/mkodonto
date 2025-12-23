import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Escolha from './components/Escolha';
import Faq from './components/Faq';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Servicos />
        <Escolha />
        <Faq />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}

export default App;