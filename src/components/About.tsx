import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-secondary">
              Más de 5 años ayudando a empresas a crecer en el mundo digital
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              En <span className="font-semibold text-primary">EvolucionaT</span> somos un equipo apasionado por la innovación tecnológica. Durante más de una década hemos acompañado a empresas, emprendedores y marcas personales a digitalizarse, crecer y destacar en internet.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nos mueve una filosofía simple: <span className="font-semibold text-foreground">evolucionar contigo</span>, entendiendo tu negocio como si fuera el nuestro.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra experiencia combina diseño, desarrollo, automatización y estrategia digital para que cada proyecto sea un salto hacia el futuro.
            </p>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-tech opacity-20 blur-2xl rounded-lg"></div>
            <img
              src={teamImage}
              alt="Equipo EvolucionaT"
              className="relative rounded-lg shadow-card w-full hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
