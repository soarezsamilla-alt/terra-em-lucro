import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

/**
 * Estrutura pronta de popup de exit-intent.
 * Edite CUPOM / OFERTA abaixo para configurar a oferta intermediária.
 */
const CUPOM = "FICA10";
const OFERTA_TEXTO = "Leve o Plano Completo com 10% OFF usando o cupom abaixo no checkout.";

export function ExitIntentPopup() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("rp-exit-intent") === "1") return;

    const onLeave = (event: MouseEvent) => {
      if (event.clientY > 0) return;
      window.sessionStorage.setItem("rp-exit-intent", "1");
      setAberto(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogContent className="max-w-sm text-center">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-extrabold">
            Espera! Não vá embora de mãos vazias
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">{OFERTA_TEXTO}</p>
        <div className="rounded-lg border border-dashed border-accent bg-secondary px-4 py-3 font-display text-xl font-extrabold tracking-widest text-accent">
          {CUPOM}
        </div>
        <Button asChild variant="cta" size="xl" onClick={() => setAberto(false)}>
          <a href="#precos">QUERO APROVEITAR</a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
