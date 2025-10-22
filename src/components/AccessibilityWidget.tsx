import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accessibility, X } from "lucide-react";

interface AccessibilitySettings {
  fontSize: "normal" | "large" | "xlarge";
  highContrast: boolean;
  grayscale: boolean;
  lineHeight: boolean;
  textSpacing: boolean;
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: "normal",
    highContrast: false,
    grayscale: false,
    lineHeight: false,
    textSpacing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("accessibility-settings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement;

    // Font size
    root.classList.remove("accessibility-font-large", "accessibility-font-xlarge");
    if (settings.fontSize === "large") root.classList.add("accessibility-font-large");
    if (settings.fontSize === "xlarge") root.classList.add("accessibility-font-xlarge");

    // High contrast
    if (settings.highContrast) {
      root.classList.add("accessibility-high-contrast");
    } else {
      root.classList.remove("accessibility-high-contrast");
    }

    // Grayscale
    if (settings.grayscale) {
      root.classList.add("accessibility-grayscale");
    } else {
      root.classList.remove("accessibility-grayscale");
    }

    // Line height
    if (settings.lineHeight) {
      root.classList.add("accessibility-line-height");
    } else {
      root.classList.remove("accessibility-line-height");
    }

    // Text spacing
    if (settings.textSpacing) {
      root.classList.add("accessibility-text-spacing");
    } else {
      root.classList.remove("accessibility-text-spacing");
    }
  };

  const handleReset = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: "normal",
      highContrast: false,
      grayscale: false,
      lineHeight: false,
      textSpacing: false,
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 bottom-20 z-40 rounded-full w-14 h-14 shadow-lg hover-lift"
        size="icon"
        aria-label="Opciones de accesibilidad"
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Opciones de Accesibilidad
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Font Size */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Tamaño de texto</Label>
              <RadioGroup
                value={settings.fontSize}
                onValueChange={(value: any) => setSettings({ ...settings, fontSize: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="font-normal" />
                  <Label htmlFor="font-normal" className="cursor-pointer">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="font-large" />
                  <Label htmlFor="font-large" className="cursor-pointer">Grande</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="xlarge" id="font-xlarge" />
                  <Label htmlFor="font-xlarge" className="cursor-pointer">Muy grande</Label>
                </div>
              </RadioGroup>
            </div>

            {/* High Contrast */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, highContrast: checked as boolean })
                }
              />
              <Label htmlFor="high-contrast" className="cursor-pointer">
                Alto contraste
              </Label>
            </div>

            {/* Grayscale */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="grayscale"
                checked={settings.grayscale}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, grayscale: checked as boolean })
                }
              />
              <Label htmlFor="grayscale" className="cursor-pointer">
                Escala de grises
              </Label>
            </div>

            {/* Line Height */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="line-height"
                checked={settings.lineHeight}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, lineHeight: checked as boolean })
                }
              />
              <Label htmlFor="line-height" className="cursor-pointer">
                Mayor espaciado entre líneas
              </Label>
            </div>

            {/* Text Spacing */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="text-spacing"
                checked={settings.textSpacing}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, textSpacing: checked as boolean })
                }
              />
              <Label htmlFor="text-spacing" className="cursor-pointer">
                Mayor espaciado de texto
              </Label>
            </div>

            {/* Reset Button */}
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-full"
            >
              Restablecer configuración
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessibilityWidget;
