import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingUrgency = () => {
  const scrollToForm = () => {
    document.getElementById("landing-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[hsl(var(--landing-dark-blue))] to-[hsl(var(--landing-bright-blue))]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-[hsl(var(--landing-dark-blue))] rounded-full font-bold mb-6">
            ⚡ Solo 3 plazas disponibles esta semana
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Más de 100 empresas ya han confiado en EvolucionaT
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Aprovecha la promoción antes de que se agoten las plazas.
          </p>
        </div>
        
        <div className="space-y-4 text-white/90 text-lg mb-8">
          <p>✓ Tu negocio en Internet en menos de una semana</p>
          <p>✓ Diseño profesional, SEO básico y dominio incluidos</p>
          <p>✓ Perfecta para autónomos, tiendas, restaurantes y profesionales</p>
          <p>✓ No pagues de más: consigue tu web profesional por solo 299 €</p>
          <p className="font-bold text-yellow-300">✓ Ayudando a empresas a crecer en el mundo digital</p>
        </div>
        
        <Button 
          onClick={scrollToForm}
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-[hsl(var(--landing-dark-blue))] font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          Solicitar mi web ahora <ArrowRight className="ml-2" />
        </Button>
        
        <p className="mt-6 text-white/80 text-sm">
          Respuesta en menos de 24 horas • Sin compromiso
        </p>
      </div>
    </section>
  );
};

export default LandingUrgency;
