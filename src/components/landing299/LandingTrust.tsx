import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    business: "Restaurante El Jardín",
    text: "Javier hizo mi web en menos de una semana. Rápido, profesional y muy atento. ¡Lo recomiendo!",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    business: "Asesoría CM Consultores",
    text: "Por fin tengo una web que me trae clientes reales. Y a un precio increíble.",
    rating: 5
  }
];

const LandingTrust = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--landing-dark-blue))] mb-4">
            Más de 10 años creando webs que venden
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            En EvolucionaT ayudamos a empresas de Murcia a digitalizarse y ganar visibilidad. 
            Nos encargamos de todo: diseño, optimización y publicación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-[hsl(var(--landing-light-gray))] border-none">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[hsl(var(--landing-dark-blue))] mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-[hsl(var(--landing-dark-blue))]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.business}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTrust;
