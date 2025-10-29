import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import compramosCasa from "@/assets/portfolio/compramos-casa.png";
import showwise from "@/assets/portfolio/showwise.png";
import estetizar from "@/assets/portfolio/estetizar.png";
import brutalShow from "@/assets/portfolio/brutal-show.png";
import displacetool from "@/assets/portfolio/displacetool.png";
import grupoHermosilla from "@/assets/portfolio/grupo-hermosilla.png";
import diferencialIngenieria from "@/assets/portfolio/diferencial-ingenieria.png";
import pistonCoolant from "@/assets/portfolio/piston-coolant.png";

const projects = [
  {
    title: "Piston Coolant G12+",
    description: "Diseño de marca y etiqueta para anticongelante refrigerante",
    category: "Diseño Gráfico | Branding",
    url: "#",
    image: pistonCoolant,
  },
  {
    title: "Diferencial Ingeniería",
    description: "Web corporativa de ingeniería con proyectos y licencias",
    category: "Página Web",
    url: "https://diferencialingenieria.es/",
    image: diferencialIngenieria,
  },
  {
    title: "ShowWise",
    description: "Web corporativa para agencia consultora de espectáculos",
    category: "Página Web",
    url: "http://showwise.es/",
    image: showwise,
  },
  {
    title: "Compramos Tu Casa en 1 Semana",
    description: "Landing page optimizada para captación de leads inmobiliarios",
    category: "Landing Page",
    url: "https://compramostucasaen1semana.es/",
    image: compramosCasa,
  },
  {
    title: "DisplaceTool",
    description: "Plataforma web y app móvil para accesibilidad urbana",
    category: "Web + App",
    url: "https://displacetool.es/",
    image: displacetool,
  },
  {
    title: "Brutal Show",
    description: "Web de espectáculos con gestión de eventos y roster",
    category: "Página Web",
    url: "https://espectaculosbrutalshow.com/",
    image: brutalShow,
  },
  {
    title: "Estetizar",
    description: "Ecommerce de cosmética y complementos alimenticios",
    category: "Ecommerce",
    url: "https://estetizar.es/",
    image: estetizar,
  },
  {
    title: "Grupo Hermosilla",
    description: "Web corporativa para administración de fincas",
    category: "Página Web",
    url: "https://grupohermosilla.es/",
    image: grupoHermosilla,
  },
];

const PROJECTS_PER_PAGE = 6;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
            Últimos proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hemos trabajado con marcas, negocios locales y startups que buscaban destacar en el mundo digital. 
            Aquí algunos ejemplos de cómo transformamos ideas en resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="group overflow-hidden hover-lift cursor-pointer bg-card border-border shadow-card animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
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
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="hover-lift"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className="w-10 h-10 hover-lift"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="hover-lift"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
