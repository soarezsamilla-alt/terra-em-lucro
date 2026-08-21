import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroMockup from "@/assets/hero-mockup.png.asset.json";
import {
  CHECKOUT_BASICO_URL,
  CHECKOUT_UPSELL_URL,
  PRECOS,
  UPSELL_DURACAO_SEGUNDOS,
} from "@/lib/rural-config";
import { Check, Clock, Flame } from "lucide-react";

export interface UpsellDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
}

const VANTAGENS = [
  "Os 6 Bônus Exclusivos (valor acima de R$ 300)",
  "Atualizações gratuitas toda semana",
  "Acesso prioritário aos novos projetos",
  "Suporte prioritário no WhatsApp",
] as const;

function formatarTempo(totalSegundos: number): string {
  const seguro = Math.max(0, totalSegundos);
  const minutos = Math.floor(seguro / 60);
  const segundos = seguro % 60;
  return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

/** Upsell exibido ao clicar no Plano Básico, com desconto e cronômetro de 15 min. */
export function UpsellDialog({ open, onOpenChange }: UpsellDialogProps) {
  const [restante, setRestante] = useState(UPSELL_DURACAO_SEGUNDOS);

  useEffect(() => {
    if (!open) return;
    setRestante(UPSELL_DURACAO_SEGUNDOS);
    const id = window.setInterval(() => {
      setRestante((atual) => (atual <= 1 ? 0 : atual - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm gap-0 overflow-y-auto p-5 text-center max-h-[90vh]">
        <DialogHeader className="space-y-2">
          <span className="mx-auto flex w-fit items-center gap-1 rounded-full bg-destructive px-3 py-1 text-[10px] font-bold uppercase text-destructive-foreground">
            <Flame className="size-3" aria-hidden />
            Espere! Oferta única nesta página
          </span>
          <DialogTitle className="text-center font-display text-lg font-extrabold uppercase leading-tight">
            Leve o Plano Completo com{" "}
            <span className="text-primary">33% de desconto</span>
          </DialogTitle>
          <DialogDescription className="text-center text-xs">
            Por menos de R$ 10 a mais você desbloqueia os 6 bônus que ensinam a
            executar os projetos — quem leva só o básico acaba comprando depois
            pelo preço cheio.
          </DialogDescription>
        </DialogHeader>

        <img
          src={heroMockup.url}
          alt="Mockup do Plano Completo Rural Planner com todos os bônus"
          width={1536}
          height={1024}
          loading="lazy"
          className="mx-auto mt-3 w-full max-w-[190px] animate-soft-pulse"
        />

        <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-destructive">
          <Clock className="size-4" aria-hidden />
          <span className="text-[11px] font-bold uppercase">
            Expira em {formatarTempo(restante)}
          </span>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          de <span className="line-through">{PRECOS.completoPor}</span> por apenas:
        </p>
        <p className="font-display text-4xl font-extrabold text-accent">
          {PRECOS.upsellPor}
        </p>
        <p className="text-[11px] text-muted-foreground">pagamento único</p>

        <ul className="mx-auto mt-3 w-fit space-y-1.5 text-left">
          {VANTAGENS.map((texto) => (
            <li key={texto} className="flex gap-2 text-xs leading-snug text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
              {texto}
            </li>
          ))}
        </ul>

        <Button
          asChild
          variant="cta"
          size="xl"
          className="mt-4 h-10 w-full animate-cta-pulse px-4 text-xs sm:text-sm"
        >
          <a href={CHECKOUT_UPSELL_URL}>SIM! QUERO O COMPLETO POR {PRECOS.upsellPor}</a>
        </Button>

        <a
          href={CHECKOUT_BASICO_URL}
          className="mt-3 block text-[11px] text-muted-foreground underline underline-offset-2"
        >
          Não, prefiro continuar sem os bônus
        </a>
      </DialogContent>
    </Dialog>
  );
}
