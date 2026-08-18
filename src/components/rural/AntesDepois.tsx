import antesDepois from "@/assets/antes-depois.jpg";
import sitio from "@/assets/sitio-produtivo.jpg";
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

const RESULTADOS = [
  "Planeja tudo em poucos dias",
  "Organiza seu sítio com clareza",
  "Cria novas fontes de renda",
  "Para de depender de tentativa e erro",
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

          <img
            src={antesDepois}
            alt="Comparação entre terreno abandonado e sítio organizado e produtivo"
            width={1200}
            height={675}
            loading="lazy"
            className="mt-7 w-full rounded-2xl shadow-card"
          />

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

      <section className="bg-earth px-4 py-14 text-earth-foreground">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase text-accent-foreground">
              Resultado na Hora
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl">Você vai VER RESULTADO NA HORA</h2>
            <p className="mt-3 text-sm opacity-90">
              Imagine olhar seu terreno e saber exatamente o que fazer em cada parte.
            </p>
            <ul className="mt-5 space-y-2.5">
              {RESULTADOS.map((item) => (
                <li key={item} className="flex gap-2 text-sm font-medium">
                  <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={sitio}
            alt="Sítio produtivo organizado com hortas, pomar e criação de animais"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </section>
    </>
  );
}
