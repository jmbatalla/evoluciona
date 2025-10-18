import { Smartphone, Settings, Zap, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Smartphone,
    title: "Diseño adaptado a móviles y tablets",
    description: "Tu web se verá perfecta en cualquier dispositivo"
  },
  {
    icon: Settings,
    title: "SEO básico incluido",
    description: "Optimizada para aparecer en Google"
  },
  {
    icon: Zap,
    title: "Entrega en menos de 5 días",
    description: "Tu web lista en tiempo récord"
  },
  {
    icon: FileCheck,
    title: "Precio cerrado. Sin cuotas",
    description: "299 € y sin letra pequeña"
  }
];

const LandingBenefits = () => {
  return (
    <section className="py-16 sm:py-20 bg-[hsl(var(--landing-light-gray))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow bg-white border-none"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--landing-bright-blue))]/10 mb-4">
                <benefit.icon className="w-8 h-8 text-[hsl(var(--landing-bright-blue))]" />
              </div>
              <h3 className="font-bold text-[hsl(var(--landing-dark-blue))] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-8 text-[hsl(var(--landing-dark-blue))] font-medium text-lg">
          Tu web lista para atraer clientes desde Murcia y toda España.
        </p>
      </div>
    </section>
  );
};

export default LandingBenefits;
