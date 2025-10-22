import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CookiesPolicy from "./CookiesPolicy";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostrar el banner después de un pequeño delay para mejor UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-card/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-foreground">
                Utilizamos cookies técnicas necesarias para el funcionamiento del sitio.{" "}
                <CookiesPolicy>
                  <button className="text-primary hover:underline font-medium inline-flex items-center">
                    Ver Política de Cookies
                  </button>
                </CookiesPolicy>
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="text-xs"
              >
                Rechazar
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAccept}
                className="text-xs"
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
