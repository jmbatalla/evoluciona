import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Privacidad</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-bold text-base mb-2">1. INFORMACIÓN AL USUARIO</h3>
              <p className="text-muted-foreground">
                <strong>EvolucionaT</strong>, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD), y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
              </p>
              <p className="text-muted-foreground mt-2">
                En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. DATOS DE CONTACTO</h3>
              <div className="text-muted-foreground space-y-1">
                <p><strong>Responsable:</strong> EvolucionaT</p>
                <p><strong>NIF:</strong> 72999482N</p>
                <p><strong>Domicilio:</strong> Zaragoza</p>
                <p><strong>Correo electrónico:</strong> hola@evolucionat.es</p>
                <p><strong>Teléfono:</strong> 614247275</p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. PRINCIPIOS CLAVE</h3>
              <p className="text-muted-foreground">
                Siempre hemos estado comprometidos con prestar nuestros servicios con el más alto grado de calidad, lo que incluye tratar sus datos con seguridad y transparencia. Nuestros principios son:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li><strong>Licitud:</strong> Solo recopilamos datos cuando usted nos los facilita voluntariamente.</li>
                <li><strong>Minimización:</strong> Solo pedimos los datos estrictamente necesarios.</li>
                <li><strong>Limitación:</strong> Solo usaremos sus datos para los fines que le informamos.</li>
                <li><strong>Precisión:</strong> Los datos que tratamos deben ser exactos.</li>
                <li><strong>Conservación:</strong> Los datos se conservan de forma segura y solo el tiempo necesario.</li>
                <li><strong>Confidencialidad:</strong> Sus datos se tratarán de manera confidencial.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALES</h3>
              <p className="text-muted-foreground mb-2">
                Las tipos de datos que podemos solicitar y tratar son:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Datos de contacto: nombre, teléfono, correo electrónico.</li>
                <li>Datos comerciales: información sobre proyectos o servicios solicitados.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                <strong>Finalidad:</strong> Los datos personales que nos proporcione se utilizarán para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li>Responder a sus consultas y solicitudes de información.</li>
                <li>Gestionar la prestación de servicios contratados.</li>
                <li>Enviarle información comercial si ha dado su consentimiento.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. LEGITIMACIÓN</h3>
              <p className="text-muted-foreground">
                El tratamiento de sus datos se basa en las siguientes bases jurídicas:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li>El consentimiento del interesado al facilitarnos sus datos.</li>
                <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
                <li>El interés legítimo del responsable.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. CONSERVACIÓN DE SUS DATOS</h3>
              <p className="text-muted-foreground">
                Sus datos personales serán conservados mientras sean necesarios para la finalidad que motivó su recogida, o mientras existan obligaciones legales que nos obliguen a conservarlos.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. DESTINATARIOS</h3>
              <p className="text-muted-foreground">
                Sus datos no serán cedidos a terceros, salvo obligación legal. No realizamos transferencias internacionales de datos.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">8. SUS DERECHOS</h3>
              <p className="text-muted-foreground mb-2">
                Cualquier persona tiene derecho a obtener información sobre si en EvolucionaT estamos tratando datos personales que le conciernen o no. Las personas interesadas tienen derecho a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Acceso:</strong> Saber si estamos tratando sus datos y obtener copia de los mismos.</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Puede ejercer estos derechos enviando un correo a <strong>hola@evolucionat.es</strong> o por correo postal a nuestra dirección, adjuntando copia de su DNI.
              </p>
              <p className="text-muted-foreground mt-2">
                También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">9. SEGURIDAD DE SUS DATOS</h3>
              <p className="text-muted-foreground">
                Hemos implementado medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción de su información.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
