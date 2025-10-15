import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CookiesPolicyProps {
  children: React.ReactNode;
}

const CookiesPolicy = ({ children }: CookiesPolicyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Cookies</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-bold text-base mb-2">1. ¿QUÉ SON LAS COOKIES?</h3>
              <p className="text-muted-foreground">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que vuelva al sitio o navegue de una página a otra.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. ¿QUÉ TIPOS DE COOKIES UTILIZAMOS?</h3>
              <p className="text-muted-foreground mb-3">
                En <strong>evolucionat.es</strong> utilizamos los siguientes tipos de cookies:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Cookies técnicas (estrictamente necesarias)</h4>
                  <p className="text-muted-foreground">
                    Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Cookies de preferencias</h4>
                  <p className="text-muted-foreground">
                    Permiten recordar información que cambia la forma en que se comporta o se ve el sitio web, como su idioma preferido o la región en la que se encuentra.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. COOKIES QUE NO UTILIZAMOS</h3>
              <p className="text-muted-foreground mb-2">
                En nuestra web <strong>NO utilizamos</strong>:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Cookies analíticas:</strong> No utilizamos Google Analytics ni otras herramientas de análisis que instalen cookies de seguimiento.</li>
                <li><strong>Cookies publicitarias:</strong> No mostramos publicidad ni utilizamos cookies de publicidad comportamental.</li>
                <li><strong>Cookies de redes sociales:</strong> No integramos plugins sociales que instalen cookies de terceros.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. LEGITIMACIÓN PARA EL TRATAMIENTO</h3>
              <p className="text-muted-foreground">
                La base legal para el tratamiento de datos mediante cookies técnicas es el interés legítimo del responsable del sitio web (artículo 6.1.f del RGPD). Para el resto de cookies, la base legal es el consentimiento del usuario.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. CÓMO GESTIONAR LAS COOKIES</h3>
              <p className="text-muted-foreground mb-2">
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Tenga en cuenta que si rechaza o elimina las cookies, es posible que no pueda utilizar todas las funcionalidades del sitio web.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. ACTUALIZACIÓN DE LA POLÍTICA DE COOKIES</h3>
              <p className="text-muted-foreground">
                Podemos actualizar esta Política de Cookies en función de cambios legislativos, reglamentarios, o con la finalidad de adaptarla a las instrucciones dictadas por la Agencia Española de Protección de Datos.
              </p>
              <p className="text-muted-foreground mt-2">
                Le recomendamos que revise esta política periódicamente. Si tiene dudas sobre esta política de cookies, puede contactarnos en <strong>hola@evolucionat.es</strong>.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. DATOS DE CONTACTO</h3>
              <div className="text-muted-foreground space-y-1">
                <p><strong>Responsable:</strong> EvolucionaT</p>
                <p><strong>NIF:</strong> 72999482N</p>
                <p><strong>Domicilio:</strong> Zaragoza</p>
                <p><strong>Correo electrónico:</strong> hola@evolucionat.es</p>
                <p><strong>Teléfono:</strong> 614247275</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesPolicy;
