import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Inicializar EmailJS con tu Public Key
      emailjs.init("YOUR_PUBLIC_KEY"); // Reemplazar con tu clave pública de EmailJS
      
      await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplazar con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplazar con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "hola@evolucionat.es",
        }
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor, intenta de nuevo o contáctanos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
            Solicita tu presupuesto
          </h2>
          <p className="text-lg text-muted-foreground">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:hola@evolucionat.es" className="hover:text-primary transition-colors">
              hola@evolucionat.es
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="pl-12 h-12"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="pl-12 h-12"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="pl-12 min-h-32"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full text-lg shadow-glow"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Enviar mensaje
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
