import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34614247275"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform group"
      aria-label="Escríbeme por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-secondary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Escríbeme por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
