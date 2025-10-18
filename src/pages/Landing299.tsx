import { Helmet } from "react-helmet";
import LandingHero from "@/components/landing299/LandingHero";
import LandingBenefits from "@/components/landing299/LandingBenefits";
import LandingTrust from "@/components/landing299/LandingTrust";
import LandingCTA from "@/components/landing299/LandingCTA";
import LandingForm from "@/components/landing299/LandingForm";
import LandingUrgency from "@/components/landing299/LandingUrgency";
import WhatsAppButton from "@/components/WhatsAppButton";

const Landing299 = () => {
  return (
    <>
      <Helmet>
        <title>Diseño Web por 299 € | EvolucionaT</title>
        <meta 
          name="description" 
          content="Tu web profesional por solo 299 €. Hasta 4 páginas, hosting y dominio 1 año incluidos. Entrega en 48h. EvolucionaT – especialistas en diseño web profesional." 
        />
        <meta name="keywords" content="diseño web, web barata, página web 299 euros, diseño web profesional, evolucionat" />
        <link rel="canonical" href="https://www.evolucionat.es/tu-web-por-299-euros" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <LandingHero />
        <LandingBenefits />
        <LandingTrust />
        <LandingCTA />
        <LandingForm />
        <LandingUrgency />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Landing299;
