import produtoMockup from "@/assets/produto-mockup.png.asset.json";
import { Ruler, LayoutGrid, FileCheck2, Infinity as InfinityIcon, RefreshCw } from "lucide-react";

const ITENS = [
  {
    icone: Ruler,
    titulo: "Projetos com Medidas Reais",
    texto: "Layout completo e estratégico do terreno",
  },
  {
    icone: LayoutGrid,
    titulo: "Planos de Divisão por Produção",
    texto: "Para gado, hortas, pomares e agrofloresta",
  },
  {
    icone: FileCheck2,
    titulo: "Plantas Prontas para Aplicar",
    texto: "Leve para o campo e comece a executar",
  },
  {
    icone: InfinityIcon,
    titulo: "Acesso Vitalício e Imediato",
    texto: "Compre uma vez e use para sempre em qualquer terreno",
  },
  {
    icone: RefreshCw,
    titulo: "Atualizações Gratuitas",
    texto: "Sempre novos modelos de projetos inclusos",
  },
] as const;

export function Produto() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase text-secondary-foreground">
          Tudo isso está incluso no seu kit
        </span>
        <span className="ml-2 inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase text-primary-foreground">
          Acesso imediato
        </span>

        <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card">
          <img
            src={produtoMockup.url}
            alt="Kit completo Rural Planner com mais de 100 projetos"
            width={1007}
            height={1260}
            loading="lazy"
            className="mx-auto w-full max-w-[240px] object-contain"
          />
          <div className="px-4 pb-5 pt-1">
            <span className="rounded-md bg-accent px-2 py-0.5 font-display text-[10px] font-extrabold uppercase text-accent-foreground">
              Item 01
            </span>
            <h2 className="mt-2 text-lg sm:text-xl">
              +100 Projetos de Sítios e Chácaras Produtivas
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              O guia prático para transformar sua terra em um negócio lucrativo.
            </p>

            <ul className="mt-4 space-y-2.5">
              {ITENS.map(({ icone: Icone, titulo, texto }) => (
                <li key={titulo} className="flex gap-2.5">
                  <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icone className="size-3.5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xs font-extrabold">{titulo}</p>
                    <p className="text-xs text-muted-foreground">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <p className="mt-8 font-display text-lg font-extrabold uppercase text-accent">
          + 6 bônus exclusivos abaixo 👇
        </p>
      </div>
    </section>
  );
}
