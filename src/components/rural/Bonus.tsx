import { Button } from "@/components/ui/button";
import { BONUS, PRECOS } from "@/lib/rural-config";
import { Gift } from "lucide-react";

export function Bonus() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase text-accent-foreground">
          + 6 Bônus Exclusivos
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl">E NÃO PARA POR AÍ… TEM MAIS!</h2>
        <p className="mt-2 text-sm text-muted-foreground">Você também vai receber…</p>

        <div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
          {BONUS.map((bonus) => (
            <article
              key={bonus.numero}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              {bonus.selo ? (
                <span className="absolute -top-2.5 right-4 rounded-full bg-destructive px-2.5 py-0.5 text-[10px] font-bold uppercase text-destructive-foreground">
                  {bonus.selo}
                </span>
              ) : null}
              <div className="flex items-center gap-2">
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-sun text-accent-foreground">
                  <Gift className="size-4" aria-hidden />
                </div>
                <p className="font-display text-xs font-extrabold uppercase text-muted-foreground">
                  Bônus #{bonus.numero}
                </p>
              </div>
              <h3 className="mt-3 font-display text-base font-extrabold">{bonus.titulo}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{bonus.descricao}</p>
              <p className="mt-4 flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  {bonus.precoOriginal}
                </span>
                <span className="rounded-md bg-primary px-2 py-0.5 font-display text-sm font-extrabold uppercase text-primary-foreground">
                  Grátis
                </span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-primary bg-primary/5 p-5">
          <p className="font-display text-base font-extrabold sm:text-lg">
            Valor total dos bônus:{" "}
            <span className="text-muted-foreground line-through">{PRECOS.bonusTotal}</span> — Hoje:{" "}
            <span className="text-primary">GRÁTIS no Plano Completo</span>
          </p>
        </div>

        <Button asChild variant="cta" size="xl" className="mt-6 h-12 w-full max-w-md animate-cta-pulse px-5 text-sm sm:text-base">
          <a href="#precos">{PRECOS.ctaPrincipal}</a>
        </Button>
      </div>
    </section>
  );
}
