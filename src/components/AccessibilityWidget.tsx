import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  UserCircle, 
  Type, 
  Contrast, 
  Palette, 
  Eye, 
  PauseCircle, 
  MousePointer, 
  Link as LinkIcon,
  AlignLeft,
  ImageOff,
  RotateCcw,
  Accessibility
} from "lucide-react";

interface AccessibilitySettings {
  fontSize: "normal" | "large" | "xlarge";
  fontFamily: "normal" | "dyslexia";
  highContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  darkMode: boolean;
  lineHeight: boolean;
  textSpacing: boolean;
  underlineLinks: boolean;
  hideImages: boolean;
  pauseAnimations: boolean;
  bigCursor: boolean;
  textAlign: "normal" | "left" | "center" | "justify";
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: "normal",
    fontFamily: "normal",
    highContrast: false,
    invertColors: false,
    grayscale: false,
    darkMode: false,
    lineHeight: false,
    textSpacing: false,
    underlineLinks: false,
    hideImages: false,
    pauseAnimations: false,
    bigCursor: false,
    textAlign: "normal",
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

    // Font family
    root.classList.remove("accessibility-font-dyslexia");
    if (settings.fontFamily === "dyslexia") root.classList.add("accessibility-font-dyslexia");

    // High contrast
    if (settings.highContrast) {
      root.classList.add("accessibility-high-contrast");
    } else {
      root.classList.remove("accessibility-high-contrast");
    }

    // Invert colors
    if (settings.invertColors) {
      root.classList.add("accessibility-invert-colors");
    } else {
      root.classList.remove("accessibility-invert-colors");
    }

    // Grayscale
    if (settings.grayscale) {
      root.classList.add("accessibility-grayscale");
    } else {
      root.classList.remove("accessibility-grayscale");
    }

    // Dark mode
    if (settings.darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
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

    // Underline links
    if (settings.underlineLinks) {
      root.classList.add("accessibility-underline-links");
    } else {
      root.classList.remove("accessibility-underline-links");
    }

    // Hide images
    if (settings.hideImages) {
      root.classList.add("accessibility-hide-images");
    } else {
      root.classList.remove("accessibility-hide-images");
    }

    // Pause animations
    if (settings.pauseAnimations) {
      root.classList.add("accessibility-pause-animations");
    } else {
      root.classList.remove("accessibility-pause-animations");
    }

    // Big cursor
    if (settings.bigCursor) {
      root.classList.add("accessibility-big-cursor");
    } else {
      root.classList.remove("accessibility-big-cursor");
    }

    // Text align
    root.classList.remove("accessibility-align-left", "accessibility-align-center", "accessibility-align-justify");
    if (settings.textAlign === "left") root.classList.add("accessibility-align-left");
    if (settings.textAlign === "center") root.classList.add("accessibility-align-center");
    if (settings.textAlign === "justify") root.classList.add("accessibility-align-justify");
  };

  const handleReset = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: "normal",
      fontFamily: "normal",
      highContrast: false,
      invertColors: false,
      grayscale: false,
      darkMode: false,
      lineHeight: false,
      textSpacing: false,
      underlineLinks: false,
      hideImages: false,
      pauseAnimations: false,
      bigCursor: false,
      textAlign: "normal",
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 bottom-20 z-40 rounded-full w-14 h-14 shadow-lg hover-lift bg-white hover:bg-white/90 border-2 border-gray-200"
        size="icon"
        aria-label="Opciones de accesibilidad"
        title="Opciones de accesibilidad"
      >
        <Accessibility className="w-8 h-8 text-primary" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <UserCircle className="w-6 h-6" />
              Centro de Accesibilidad
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Personaliza tu experiencia de navegación conforme a la normativa europea
            </p>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(85vh-140px)] pr-4">
            <div className="space-y-6 py-4">
              {/* Tamaño de texto */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Tamaño de texto</Label>
                </div>
                <RadioGroup
                  value={settings.fontSize}
                  onValueChange={(value: any) => setSettings({ ...settings, fontSize: value })}
                  className="grid grid-cols-3 gap-3"
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

              <Separator />

              {/* Tipo de fuente */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Tipo de fuente</Label>
                </div>
                <RadioGroup
                  value={settings.fontFamily}
                  onValueChange={(value: any) => setSettings({ ...settings, fontFamily: value })}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="font-normal-type" />
                    <Label htmlFor="font-normal-type" className="cursor-pointer">Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dyslexia" id="font-dyslexia" />
                    <Label htmlFor="font-dyslexia" className="cursor-pointer">Fuente para dislexia</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Contraste y colores */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Contrast className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Contraste y colores</Label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="high-contrast" className="cursor-pointer">
                      Alto contraste
                    </Label>
                    <Checkbox
                      id="high-contrast"
                      checked={settings.highContrast}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, highContrast: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="invert-colors" className="cursor-pointer">
                      Invertir colores
                    </Label>
                    <Checkbox
                      id="invert-colors"
                      checked={settings.invertColors}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, invertColors: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="grayscale" className="cursor-pointer">
                      Escala de grises
                    </Label>
                    <Checkbox
                      id="grayscale"
                      checked={settings.grayscale}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, grayscale: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode" className="cursor-pointer">
                      Modo oscuro
                    </Label>
                    <Checkbox
                      id="dark-mode"
                      checked={settings.darkMode}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, darkMode: checked as boolean })
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Espaciado */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlignLeft className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Espaciado de texto</Label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="line-height" className="cursor-pointer">
                      Mayor espaciado entre líneas
                    </Label>
                    <Checkbox
                      id="line-height"
                      checked={settings.lineHeight}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, lineHeight: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="text-spacing" className="cursor-pointer">
                      Mayor espaciado de texto
                    </Label>
                    <Checkbox
                      id="text-spacing"
                      checked={settings.textSpacing}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, textSpacing: checked as boolean })
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Alineación de texto */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlignLeft className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Alineación de texto</Label>
                </div>
                <RadioGroup
                  value={settings.textAlign}
                  onValueChange={(value: any) => setSettings({ ...settings, textAlign: value })}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="align-normal" />
                    <Label htmlFor="align-normal" className="cursor-pointer">Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="left" id="align-left" />
                    <Label htmlFor="align-left" className="cursor-pointer">Izquierda</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="center" id="align-center" />
                    <Label htmlFor="align-center" className="cursor-pointer">Centro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="justify" id="align-justify" />
                    <Label htmlFor="align-justify" className="cursor-pointer">Justificado</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              {/* Navegación y visualización */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Navegación y visualización</Label>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="underline-links" className="cursor-pointer">
                      Subrayar enlaces
                    </Label>
                    <Checkbox
                      id="underline-links"
                      checked={settings.underlineLinks}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, underlineLinks: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="big-cursor" className="cursor-pointer">
                      Cursor grande
                    </Label>
                    <Checkbox
                      id="big-cursor"
                      checked={settings.bigCursor}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, bigCursor: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="hide-images" className="cursor-pointer">
                      Ocultar imágenes
                    </Label>
                    <Checkbox
                      id="hide-images"
                      checked={settings.hideImages}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, hideImages: checked as boolean })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="pause-animations" className="cursor-pointer">
                      Pausar animaciones
                    </Label>
                    <Checkbox
                      id="pause-animations"
                      checked={settings.pauseAnimations}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, pauseAnimations: checked as boolean })
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={handleReset}
                className="w-full"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restablecer configuración por defecto
              </Button>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessibilityWidget;
