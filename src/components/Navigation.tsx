import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contacto", href: "#contact" },
  ];

  const aiServices = [
    "Automatización RRSS",
    "Automatización WhatsApp",
    "Facturas automáticas",
    "Scraping Google Maps",
    "Chatbots inteligentes",
    "Análisis de datos con IA",
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="EvolucionaT" className="h-24 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Automatizaciones IA
                  <Badge variant="destructive" className="ml-1 text-xs">NUEVO</Badge>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-background border-2 border-primary/20">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Servicios de IA
                  </h3>
                  <ul className="space-y-2">
                    {aiServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="default" className="w-full mt-4">
                    <a href="#contact">Solicitar información</a>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            <Button asChild variant="default" size="lg" className="shadow-glow">
              <a href="#contact">¡Evoluciona Ya!</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="default" size="lg" className="w-full">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                ¡Evoluciona Ya!
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
