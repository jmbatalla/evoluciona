import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Moda",
    description: "Tienda online con integración de pago y gestión de inventario",
    category: "Diseño Web",
  },
  {
    title: "App Fitness",
    description: "Aplicación móvil para seguimiento de entrenamientos personalizados",
    category: "App Móvil",
  },
  {
    title: "Restaurante Local",
    description: "Web con reservas online y menú digital interactivo",
    category: "Web + SEO",
  },
  {
    title: "Chatbot IA",
    description: "Asistente virtual para atención al cliente 24/7",
    category: "Automatización IA",
  },
  {
    title: "Startup Tech",
    description: "Landing page con generación de leads automatizada",
    category: "Marketing Digital",
  },
  {
    title: "Clínica Dental",
    description: "Sistema de gestión de citas y recordatorios automáticos",
    category: "Soluciones Integrales",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
            Proyectos que inspiran confianza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hemos trabajado con marcas, negocios locales y startups que buscaban destacar en el mundo digital. 
            Aquí algunos ejemplos de cómo transformamos ideas en resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift cursor-pointer bg-card border-border shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-tech relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
