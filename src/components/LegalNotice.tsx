import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalNoticeProps {
  children: React.ReactNode;
}

const LegalNotice = ({ children }: LegalNoticeProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Aviso Legal</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-bold text-base mb-2">1. DATOS IDENTIFICATIVOS</h3>
              <p className="text-muted-foreground mb-2">
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web le informa de lo siguiente:
              </p>
              <div className="text-muted-foreground space-y-1">
                <p><strong>Titular:</strong> EvolucionaT</p>
                <p><strong>NIF:</strong> 72999482N</p>
                <p><strong>Domicilio:</strong> Zaragoza, España</p>
                <p><strong>Correo electrónico:</strong> hola@evolucionat.es</p>
                <p><strong>Teléfono:</strong> 614247275</p>
                <p><strong>Sitio web:</strong> evolucionat.es</p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. OBJETO</h3>
              <p className="text-muted-foreground">
                El presente aviso legal regula el uso del sitio web <strong>evolucionat.es</strong> (en adelante, LA WEB), del que es titular EvolucionaT.
              </p>
              <p className="text-muted-foreground mt-2">
                La navegación por LA WEB atribuye la condición de usuario de la misma e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. CONDICIONES DE USO</h3>
              <p className="text-muted-foreground mb-2">
                El uso de LA WEB se regula por las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>El usuario se compromete a hacer un uso correcto de LA WEB de conformidad con la ley y el presente Aviso Legal.</li>
                <li>El usuario responderá frente a EvolucionaT o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.</li>
                <li>Queda expresamente prohibido el uso de LA WEB con fines lesivos de bienes o intereses de EvolucionaT o de terceros.</li>
                <li>El usuario se compromete a no transmitir, difundir o poner a disposición de terceros cualquier tipo de material contenido en LA WEB.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
              <p className="text-muted-foreground">
                EvolucionaT es titular de todos los derechos de propiedad intelectual e industrial de LA WEB, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
              </p>
              <p className="text-muted-foreground mt-2">
                Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de EvolucionaT.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
              <p className="text-muted-foreground mb-2">
                EvolucionaT no se hace responsable, en ningún caso, de los siguientes aspectos:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>La disponibilidad del funcionamiento de LA WEB, sus servicios y contenidos.</li>
                <li>La ausencia de errores en dichos servicios y contenidos ni que éstos se encuentren actualizados.</li>
                <li>La ausencia de virus y/o demás componentes dañinos en LA WEB o en el servidor que lo suministra.</li>
                <li>La invulnerabilidad de LA WEB y/o la inexpugnabilidad de las medidas de seguridad que se adopten en la misma.</li>
                <li>Los daños o perjuicios que cause, a sí mismo o a un tercero, cualquier persona que infringiera las condiciones, normas e instrucciones que EvolucionaT establece en LA WEB.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. ENLACES</h3>
              <p className="text-muted-foreground">
                En el caso de que en LA WEB se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, EvolucionaT no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso EvolucionaT asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. PROCEDIMIENTO EN CASO DE ACTIVIDADES ILÍCITAS</h3>
              <p className="text-muted-foreground">
                En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, deberá enviar una notificación a <strong>hola@evolucionat.es</strong> indicándolo expresamente.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">8. LEY APLICABLE Y JURISDICCIÓN</h3>
              <p className="text-muted-foreground">
                Las presentes Condiciones Generales se rigen por la legislación española. Para la resolución de cualquier conflicto relativo a su interpretación o aplicación, el usuario se somete expresamente a la jurisdicción de los Juzgados y Tribunales de Zaragoza.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">9. CONTACTO</h3>
              <p className="text-muted-foreground">
                Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros a través de:
              </p>
              <div className="text-muted-foreground space-y-1 mt-2">
                <p><strong>Email:</strong> hola@evolucionat.es</p>
                <p><strong>Teléfono:</strong> 614247275</p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalNotice;
