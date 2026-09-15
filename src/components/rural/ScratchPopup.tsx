import { useCallback, useEffect, useRef, useState } from "react";
import { Gift, ShieldCheck } from "lucide-react";
import { ScratchCard } from "@/components/rural/ScratchCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DISCOUNTED_COMPLETE_CHECKOUT_URL,
  discountAmount,
  discountedPrice,
  isDiscountCheckoutConfigured,
  originalPrice,
} from "@/lib/scratch-config";
import {
  saveScratchInteraction,
  trackScratchEvent,
  type ScratchVariant,
} from "@/lib/scratch-experiment";

export interface ScratchPopupProps {
  readonly open: boolean;
  readonly variant: ScratchVariant;
  readonly onDismiss: () => void;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ScratchPopup({ open, variant, onDismiss }: ScratchPopupProps) {
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);
  const startedRef = useRef(false);

  const reveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setRevealed(true);
    saveScratchInteraction();
    trackScratchEvent("rp_scratch_revealed", variant);
  }, [variant]);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackScratchEvent("rp_scratch_started", variant);
  }, [variant]);

  const close = useCallback(() => {
    saveScratchInteraction();
    trackScratchEvent("rp_scratch_closed", variant);
    onDismiss();
  }, [onDismiss, variant]);

  useEffect(() => {
    if (!open) return;
    trackScratchEvent("rp_scratch_shown", variant);
  }, [open, variant]);

  const handleDiscountClick = () => {
    if (!isDiscountCheckoutConfigured) return;
    saveScratchInteraction();
    trackScratchEvent("rp_scratch_cta_clicked", variant);
    window.location.assign(DISCOUNTED_COMPLETE_CHECKOUT_URL);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) close();
      }}
    >
      <DialogContent
        aria-describedby="scratch-popup-description"
        className="max-h-[80vh] w-[90vw] max-w-[430px] gap-0 overflow-y-auto rounded-xl border-scratch-gold bg-cream p-5 text-center shadow-card sm:p-6 [&>button]:right-3 [&>button]:top-3 [&>button]:grid [&>button]:size-10 [&>button]:place-items-center [&>button_svg]:size-6"
      >
        <DialogHeader className="space-y-2 text-center">
          <span className="mx-auto grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <Gift className="size-5" aria-hidden />
          </span>
          <DialogTitle className="px-7 text-center font-display text-xl font-extrabold leading-tight text-earth">
            {revealed ? "Você ganhou R$5 de desconto!" : "VOCÊ DESBLOQUEOU UM PRESENTE"}
          </DialogTitle>
          <DialogDescription
            id="scratch-popup-description"
            className="text-center text-xs leading-relaxed text-muted-foreground sm:text-sm"
          >
            {revealed
              ? "Aproveite o Rural Planner Completo com mais de 100 projetos prontos para planejar sua propriedade."
              : "Raspe o cartão abaixo e revele sua condição especial para acessar o Rural Planner."}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {!revealed ? (
            <ScratchCard revealed={revealed} onStart={start} onReveal={reveal} />
          ) : (
            <div className="animate-fade-in">
              <span className="inline-flex rounded-full bg-scratch-gold-soft px-3 py-1 text-[10px] font-bold uppercase text-earth">
                Condição desbloqueada
              </span>
              <p className="mt-3 text-xs text-muted-foreground">
                De <span className="line-through">{formatCurrency(originalPrice)}</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase text-earth">Por apenas</p>
              <p className="font-display text-4xl font-extrabold text-primary">
                {formatCurrency(discountedPrice)}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Economia de {formatCurrency(discountAmount)} no Plano Completo
              </p>
              <Button
                variant="ctaGreen"
                size="xl"
                className="mt-4 h-11 w-full whitespace-normal px-3 text-xs"
                disabled={!isDiscountCheckoutConfigured}
                onClick={handleDiscountClick}
              >
                APLICAR MEU DESCONTO AGORA
              </Button>
              <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
                <ShieldCheck className="size-3" aria-hidden />
                Compra protegida por 7 dias de garantia.
              </p>
            </div>
          )}
        </div>

        {!isDiscountCheckoutConfigured ? (
          <div
            role="status"
            className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-left text-[11px] leading-relaxed text-destructive"
          >
            Prévia: falta configurar o checkout real de R$24,90. O botão permanecerá bloqueado e
            esta versão não deve ser publicada.
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
