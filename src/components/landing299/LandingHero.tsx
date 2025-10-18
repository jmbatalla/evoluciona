import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoEvolucionat from "@/assets/logo-evolucionat.png";

const LandingHero = () => {
  const scrollToForm = () => {
    document.getElementById("landing-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--landing-dark-blue))] to-[hsl(var(--landing-bright-blue))]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8">
          <img 
            src={logoEvolucionat} 
            alt="EvolucionaT" 
            className="h-32 sm:h-40 md:h-48 lg:h-56 mx-auto"
          />
        </div>
        
        <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-white text-xs sm:text-sm font-medium">⚡ Promoción limitada para nuevos clientes</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
          Tu página web profesional<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>por solo <span className="text-yellow-300">299 €</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
          Diseñamos webs modernas, rápidas y optimizadas para Google. Entrega en 48h. Hosting y dominio incluidos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-[hsl(var(--landing-dark-blue))] font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Quiero mi web por 299 € <ArrowRight className="ml-2" />
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full"
          >
            <a href="https://wa.me/34614247275" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="mt-8 sm:mt-12 text-white/80 text-xs sm:text-sm px-4">
          ✓ Hasta 4 páginas • ✓ Hosting y dominio 1 año<br />
          ✓ SEO básico incluido • ✓ Entrega en 48h
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default LandingHero;
