import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    setCookiesAccepted(!!consent);

    const handleStorage = () => {
      const consent = localStorage.getItem("cookie-consent");
      setCookiesAccepted(!!consent);
    };

    window.addEventListener("storage", handleStorage);
    
    // También escuchar cambios locales
    const interval = setInterval(() => {
      const consent = localStorage.getItem("cookie-consent");
      setCookiesAccepted(!!consent);
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <a
      href="https://wa.me/34614247275"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 z-[60] bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group ${
        cookiesAccepted ? "bottom-6" : "bottom-24"
      }`}
      aria-label="Escríbeme por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-secondary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Escríbeme por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
