import { useState } from "react";
import basicoMockup from "@/assets/plano-basico-mockup.webp";
import heroMockup from "@/assets/hero-mockup.webp";
import { Button } from "@/components/ui/button";
import { Contador } from "@/components/rural/Contador";
import { UpsellDialog } from "@/components/rural/UpsellDialog";
import { CHECKOUT_COMPLETO_URL, PRECOS } from "@/lib/rural-config";
import { Check, X } from "lucide-react";

const BULLETS_BASICO = [
  { texto: "+100 projetos completos", incluso: true },
  { texto: "Acesso imediato após compra", incluso: true },
  { texto: "Garantia de 7 dias", incluso: true },
  { texto: "Sem os 6 Bônus Exclusivos", incluso: false },
] as const;

const BULLETS_COMPLETO = [
  "Tudo do Plano Básico",
  "Bônus 1 — Pack de Construções Rurais",
  "Bônus 2 — Planilha de ROI Produtivo",
  "Bônus 3 — Guia de Plantas Companheiras",
  "Bônus 4 — Manual de Energia Solar Rural",
  "Bônus 5 — Manual de Criação de Animais",
  "Bônus 6 — Guia de Água e Irrigação Rural",
  "Atualizações gratuitas semanal",
  "Acesso prioritário a novos projetos",
  "Suporte prioritário via WhatsApp",
] as const;

export function Precos() {
  const [upsellAberto, setUpsellAberto] = useState(false);

  return (
    <section id="precos" className="scroll-mt-4 px-4 py-14">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full bg-destructive px-3 py-1 text-[11px] font-bold uppercase text-destructive-foreground">
          Oferta disponível somente hoje
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl">ESCOLHA SEU PLANO E COMECE AGORA</h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {/* Plano Básico */}
          <article className="rounded-2xl border border-border bg-card p-6 text-left shadow-card">
            <div className="text-center">
              <h3 className="font-display text-lg font-extrabold uppercase">Plano Básico</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                de <span className="line-through">{PRECOS.basicoDe}</span> por:
              </p>
              <p className="font-display text-4xl font-extrabold text-primary">
                {PRECOS.basicoPor}
              </p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
            </div>
            <img
              src={basicoMockup}
              alt="Mockup do Plano Básico Rural Planner"
              width={1536}
              height={1024}
              loading="lazy"
              className="mx-auto mt-4 w-full max-w-[280px] rounded-xl"
            />
            <ul className="mt-5 space-y-2">
              {BULLETS_BASICO.map((bullet) => (
                <li key={bullet.texto} className="flex gap-2 text-sm text-muted-foreground">
                  {bullet.incluso ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
                  )}
                  {bullet.texto}
                </li>
              ))}
            </ul>
            <Button
              variant="ctaGreen"
              size="xl"
              className="mt-6 h-10 w-full animate-cta-pulse px-4 text-xs sm:text-sm"
              onClick={() => setUpsellAberto(true)}
            >
              QUERO O BÁSICO
            </Button>
          </article>

          {/* Plano Completo */}
          <article id="plano-completo" className="relative scroll-mt-24 rounded-2xl border-2 border-accent bg-card p-5 text-left shadow-cta">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-sun px-3 py-1 text-[11px] font-bold uppercase text-accent-foreground">
              Mais Vendido
            </span>
            <div className="text-center">
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase">Plano Completo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                de <span className="line-through">{PRECOS.completoDe}</span> por:
              </p>
              <p className="font-display text-4xl font-extrabold text-accent">
                {PRECOS.completoPor}
              </p>
              <p className="mt-1 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold uppercase text-primary">
                Melhor opção — Completo
              </p>
            </div>
            <img
              src={heroMockup}
              alt="Mockup do Plano Completo Rural Planner com todos os bônus"
              width={1536}
              height={1024}
              loading="lazy"
              className="mx-auto mt-3 w-full max-w-[300px] rounded-xl"
            />
            <p className="mx-auto mt-3 block w-fit rounded-full bg-accent px-3 py-1 text-center text-[11px] font-bold uppercase text-accent-foreground">
              Todos os Bônus Inclusos
            </p>

            <ul className="mt-3 space-y-1.5">
              {BULLETS_COMPLETO.map((texto) => (
                <li key={texto} className="flex gap-2 text-xs leading-snug text-muted-foreground">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                  {texto}
                </li>

              ))}
            </ul>
            <Button asChild variant="cta" size="xl" className="mt-5 h-10 w-full animate-cta-pulse px-4 text-xs sm:text-sm">
              <a href={CHECKOUT_COMPLETO_URL}>Quero o Plano Completo</a>
            </Button>

          </article>
        </div>

        <p className="mt-8 font-display text-base font-extrabold uppercase text-accent sm:text-lg">
          🔥 Aproveite agora: você não vai encontrar esse preço depois!
        </p>
        <p className="mt-2 text-xs text-muted-foreground">7 dias de garantia incondicional</p>
      </div>

      <UpsellDialog open={upsellAberto} onOpenChange={setUpsellAberto} />
    </section>
  );
}
