import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-tech relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/90"></div>
      
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para evolucionar digitalmente?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Hablemos de tu proyecto hoy mismo y descubre cómo podemos ayudarte a crecer
        </p>
        
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 bg-white text-secondary hover:bg-white/90 shadow-glow"
        >
          <a href="#contact" className="flex items-center gap-2">
            Contactar ahora
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
