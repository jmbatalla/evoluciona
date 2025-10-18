import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";

const LandingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "Solicitud de información sobre web por 299€"
        }
      });

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderé personalmente en menos de 24h.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="landing-form" className="py-16 sm:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--landing-dark-blue))] mb-4">
            Solicita tu web por 299 €
          </h2>
          <p className="text-lg text-muted-foreground">
            Rellena el formulario y te responderé personalmente en menos de 24h.
          </p>
        </div>
        
        <Card className="p-8 shadow-xl border-none bg-[hsl(var(--landing-light-gray))]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nombre *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white border-gray-300"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white border-gray-300"
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Teléfono *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white border-gray-300"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Mensaje (opcional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-white border-gray-300"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-[hsl(var(--landing-bright-blue))] hover:bg-[hsl(var(--landing-dark-blue))] text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? "Enviando..." : "Quiero mi web por 299 €"}
              <Send className="ml-2" />
            </Button>
            
            <p className="text-center text-sm text-muted-foreground">
              🔒 Tus datos están protegidos y nunca serán compartidos
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default LandingForm;
