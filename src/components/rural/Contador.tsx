import { CONTADOR_SEGUNDOS } from "@/lib/rural-config";
import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

interface UnidadeTempo {
  readonly valor: string;
  readonly rotulo: string;
}

function criarUnidades(total: number): readonly UnidadeTempo[] {
  return [
    { valor: String(Math.floor(total / 3600)).padStart(2, "0"), rotulo: "HORAS" },
    { valor: String(Math.floor((total % 3600) / 60)).padStart(2, "0"), rotulo: "MIN" },
    { valor: String(total % 60).padStart(2, "0"), rotulo: "SEG" },
  ];
}

/** Contador regressivo da oferta. Reinicia a cada sessão. */
export function Contador() {
  const [restante, setRestante] = useState(CONTADOR_SEGUNDOS);
  const unidades = criarUnidades(restante);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRestante((atual) => (atual > 0 ? atual - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="mx-auto mt-3 w-full max-w-[270px] overflow-hidden rounded-lg border border-destructive/30 bg-destructive/10 shadow-sm"
      role="timer"
      aria-label={`A oferta termina em ${unidades[0].valor} horas, ${unidades[1].valor} minutos e ${unidades[2].valor} segundos`}
    >
      <div className="flex items-center justify-center gap-1.5 bg-destructive px-2 py-1 text-destructive-foreground">
        <Clock3 className="size-3 animate-pulse" aria-hidden />
        <span className="font-display text-[9px] font-extrabold uppercase">
          Oferta termina em
        </span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-destructive/20 px-2 py-2">
        {unidades.map((unidade) => (
          <div key={unidade.rotulo} className="flex flex-col items-center">
            <span className="font-display text-xl font-extrabold leading-none tabular-nums text-destructive">
              {unidade.valor}
            </span>
            <span className="mt-1 text-[7px] font-bold text-muted-foreground">
              {unidade.rotulo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
