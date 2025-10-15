import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="EvolucionaT" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80">
              Transformamos ideas en soluciones digitales innovadoras
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {currentYear} EvolucionaT – Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
