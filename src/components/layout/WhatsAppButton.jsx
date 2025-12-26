// src/components/layout/WhatsAppButton.jsx
import { useEffect } from "react";
// REMOVIDO: import whatsappIcon from "../public/whatsapp_icon.png";
import { gsap } from "gsap";

export default function WhatsAppButton() {
  // Animação inicial
  useEffect(() => {
    gsap.fromTo(
      ".whatsapp-btn",
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.5,
      }
    );
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <a
        href="https://wa.me/5521988841154?text=Ol%C3%A1!%20Vi%20o%20site%20e%20preciso%20de%20or%C3%A7amento!"
        target="_blank"
        rel="noopener noreferrer"
        className="
          whatsapp-btn group relative flex items-center justify-center
          w-10 h-10 sm:w-16 sm:h-16
          bg-green-500 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.5)]
          hover:shadow-[0_0_35px_rgba(34,197,94,0.8)]
          hover:scale-125 transition-all duration-300
          animate-bounce
        "
      >
        {/* Aqui o src="/" já aponta diretamente para a pasta public */}
        <img
          src="/whatsapp_icon.png" 
          alt="WhatsApp Icon"
          className="w-10 sm:w-12 group-hover:rotate-12 transition-transform"
        />
      </a>
    </div>
  );
}