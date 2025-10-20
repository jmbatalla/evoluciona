import { useState } from "react";
import { Globe, Smartphone, Search, Share2, Brain, Wrench, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Automatizaciones con IA",
    description: "Optimiza tu negocio con flujos automáticos y asistentes inteligentes personalizados.",
    isNew: true,
    details: [
      "Automatización de Redes Sociales",
      "Automatización de WhatsApp Business",
      "Generación automática de facturas",
      "Scraping y análisis de Google Maps",
      "Chatbots inteligentes personalizados",
      "Análisis predictivo de datos",
      "Generación de contenido con IA",
      "Procesamiento de documentos automático",
    ]
  },
  {
    icon: Globe,
    title: "Diseño web profesional",
    description: "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes.",
    details: [
      "Diseño web responsive y moderno",
      "Landing pages de alta conversión",
      "E-commerce y tiendas online",
      "Páginas corporativas",
      "Portales y aplicaciones web",
      "Optimización de velocidad (Core Web Vitals)",
      "Diseño UX/UI profesional",
      "Integración con sistemas CRM",
    ]
  },
  {
    icon: Smartphone,
    title: "Desarrollo de apps móviles",
    description: "Aplicaciones intuitivas y personalizadas para Android e iOS.",
    details: [
      "Apps nativas iOS y Android",
      "Apps híbridas multiplataforma",
      "Progressive Web Apps (PWA)",
      "Aplicaciones empresariales",
      "Apps de e-commerce móvil",
      "Integración con APIs y servicios",
      "Notificaciones push",
      "Publicación en App Store y Google Play",
    ]
  },
  {
    icon: Search,
    title: "SEO y SEM",
    description: "Mejora tu visibilidad, atrae más tráfico y convierte con campañas inteligentes y posicionamiento natural.",
    details: [
      "Auditoría SEO completa",
      "Optimización on-page y técnica",
      "Estrategia de contenidos SEO",
      "Link building y autoridad de dominio",
      "Google Ads (SEM)",
      "Meta Ads (Facebook e Instagram)",
      "Analítica y reporting mensual",
      "SEO local y Google My Business",
    ]
  },
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description: "Aumenta tu presencia online, conecta con tu audiencia y potencia tu marca en todas las plataformas sociales.",
    details: [
      "Estrategia de contenido personalizada",
      "Gestión de Instagram, Facebook, LinkedIn, TikTok",
      "Creación de contenido visual y copywriting",
      "Community management",
      "Campañas publicitarias en RRSS",
      "Análisis de métricas y KPIs",
      "Gestión de reputación online",
      "Influencer marketing",
    ]
  },
  {
    icon: Wrench,
    title: "Servicios informáticos",
    description: "Mantenimiento, soporte técnico, hosting y soluciones seguras para tu empresa.",
    details: [
      "Soporte técnico IT",
      "Mantenimiento web y hosting",
      "Copias de seguridad automatizadas",
      "Seguridad y certificados SSL",
      "Migración de servidores",
      "Gestión de dominios y correo",
      "Optimización de infraestructura",
      "Consultoría tecnológica",
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card shadow-card group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedService(service)}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors relative">
                  <service.icon className="w-8 h-8 text-primary" />
                  {service.isNew && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs animate-pulse">
                      NUEVO
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
              {selectedService && <selectedService.icon className="w-7 h-7" />}
              {selectedService?.title}
              {selectedService?.isNew && (
                <Badge variant="destructive" className="text-xs">NUEVO</Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground text-lg">{selectedService?.description}</p>
            
            <div className="pt-4">
              <h4 className="font-semibold text-lg mb-4 text-foreground">¿Qué incluye este servicio?</h4>
              <ul className="grid gap-3">
                {selectedService?.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground">
                    <span className="text-primary mt-1 text-xl">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="default" size="lg" className="w-full mt-6">
              <a href="#contact" onClick={() => setSelectedService(null)}>
                Solicitar información
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
