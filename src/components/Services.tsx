import { Globe, Smartphone, Search, Share2, Brain, Wrench, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Automatizaciones con IA",
    description: "Optimiza tu negocio con flujos automáticos y asistentes inteligentes personalizados.",
    isNew: true,
  },
  {
    icon: Globe,
    title: "Diseño web profesional",
    description: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo de apps móviles",
    description: "Aplicaciones intuitivas y personalizadas para Android e iOS.",
  },
  {
    icon: Search,
    title: "SEO y SEM",
    description: "Mejora tu visibilidad, atrae más tráfico y convierte con campañas inteligentes y posicionamiento natural.",
  },
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description: "Aumenta tu presencia online, conecta con tu audiencia y potencia tu marca en todas las plataformas sociales.",
  },
  {
    icon: Wrench,
    title: "Servicios informáticos",
    description: "Mantenimiento, soporte técnico, hosting y soluciones seguras para tu empresa.",
  },
];

const Services = () => {
  const aiServices = [
    "Automatización RRSS",
    "Automatización WhatsApp",
    "Facturas automáticas",
    "Scraping Google Maps",
    "Chatbots inteligentes",
    "Análisis de datos con IA",
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
            Servicios principales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales completas para impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            if (service.isNew) {
              return (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <Card
                      className="hover-lift border-border bg-card shadow-card group animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors relative">
                          <service.icon className="w-8 h-8 text-primary" />
                          <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs animate-pulse">
                            NUEVO
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 bg-background border-2 border-primary/20">
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Servicios de IA
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.map((aiService, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-foreground">{aiService}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="default" className="w-full mt-4">
                        <a href="#contact">Solicitar información</a>
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }
            
            return (
              <Card
                key={index}
                className="hover-lift border-border bg-card shadow-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors relative">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
