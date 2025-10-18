import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Impulsa tu negocio con<br />
          <span className="text-primary">soluciones digitales que venden</span>
        </h1>
        
        <div className="bg-primary/95 backdrop-blur-sm inline-block px-4 py-3 md:px-8 md:py-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 shadow-2xl border-2 md:border-4 border-white/30">
          <p className="text-3xl md:text-5xl lg:text-8xl font-black text-white mb-0">
            ¡Evoluciona Ya!
          </p>
        </div>
        
        <p className="text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-10 max-w-3xl mx-auto font-semibold drop-shadow-lg px-2">
          Diseño web, apps, posicionamiento SEO, automatizaciones con IA y soporte informático.
          <br className="hidden md:block" />
          Todo lo que tu empresa necesita para evolucionar.
        </p>
        
        <Button
          asChild
          size="lg"
          className="text-lg px-8 py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-all bg-white text-primary hover:bg-white/90 font-bold"
        >
          <a href="#contact" className="flex items-center gap-2">
            Solicita tu presupuesto
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
