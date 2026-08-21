import antesDepois from "@/assets/antes-depois.jpg";

import { Check, X } from "lucide-react";

const SEM = [
  "Terra parada sem uso",
  "Não sabe por onde começar",
  "Mistura tudo sem organização",
  "Depende de ideias soltas da internet",
] as const;

const COM = [
  "Terreno dividido com estratégia",
  "Cada área com função clara",
  "Mais produtividade e renda",
  "Planejamento profissional na mão",
] as const;


export function AntesDepois() {
  return (
    <>
      <section className="px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl sm:text-3xl">
            Veja a diferença <span className="text-destructive">SEM OS PROJETOS</span> E{" "}
            <span className="text-primary">COM OS PROJETOS</span>
          </h2>

          <div className="relative mt-7 overflow-hidden rounded-2xl shadow-card">
            <img
              src={antesDepois}
              alt="Comparação entre terreno abandonado e sítio organizado e produtivo"
              width={1200}
              height={675}
              loading="lazy"
              className="w-full"
            />

            <span className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-bold text-foreground shadow-card backdrop-blur sm:text-xs">
              <X className="size-3.5 shrink-0 text-destructive" aria-hidden />
              Sem os Projetos
            </span>

            <span className="absolute right-2 top-2 flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-bold text-foreground shadow-card backdrop-blur sm:text-xs">
              <Check className="size-3.5 shrink-0 text-primary" aria-hidden />
              Com +100 Projetos
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
              <h3 className="font-display text-sm font-extrabold uppercase text-destructive">
                Sem os projetos
              </h3>
              <ul className="mt-3 space-y-2">
                {SEM.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <h3 className="font-display text-sm font-extrabold uppercase text-primary">
                Com os projetos
              </h3>
              <ul className="mt-3 space-y-2">
                {COM.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
