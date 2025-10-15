import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Fundadora de Boutique Online",
    content: "EvolucionaT transformó nuestra visión en una tienda online increíble. Las ventas aumentaron un 300% en los primeros tres meses. Su equipo es profesional y siempre disponible.",
  },
  {
    name: "Carlos Ramírez",
    role: "Director de Marketing",
    content: "La campaña de SEO y SEM que implementaron nos posicionó en el top 3 de Google para nuestras palabras clave principales. El ROI ha sido espectacular.",
  },
  {
    name: "Laura Martínez",
    role: "CEO Startup Tech",
    content: "Desarrollaron nuestra app móvil desde cero con una calidad excepcional. El proceso fue transparente y los plazos se cumplieron perfectamente. Totalmente recomendables.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
