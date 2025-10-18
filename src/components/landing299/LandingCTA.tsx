import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const LandingCTA = () => {
  const scrollToForm = () => {
    document.getElementById("landing-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[hsl(var(--landing-dark-blue))] to-[hsl(var(--landing-bright-blue))]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Haz despegar tu negocio por solo 299 €
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Oferta exclusiva para Murcia. Plazas limitadas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-white hover:bg-gray-100 text-[hsl(var(--landing-bright-blue))] font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Solicitar información <ArrowRight className="ml-2" />
          </Button>
          
          <Button 
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <a href="https://wa.me/34614247275" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" /> Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
