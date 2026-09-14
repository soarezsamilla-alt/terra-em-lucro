import { CONTADOR_SEGUNDOS } from "@/lib/rural-config";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

function criarUnidades(total: number) {
  return [
    { valor: String(Math.floor(total / 3600)).padStart(2, "0"), rotulo: "HORAS" },
    { valor: String(Math.floor((total % 3600) / 60)).padStart(2, "0"), rotulo: "MIN" },
    { valor: String(total % 60).padStart(2, "0"), rotulo: "SEG" },
  ] as const;
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
      className="relative mx-auto mt-3 w-full max-w-[270px] overflow-hidden rounded-lg border border-timer-digit/35 bg-timer-panel shadow-timer"
      role="timer"
      aria-label={`A oferta termina em ${unidades[0].valor} horas, ${unidades[1].valor} minutos e ${unidades[2].valor} segundos`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-sun" aria-hidden />
      <div className="flex items-center justify-between border-b border-timer-digit/15 px-3 py-1.5">
        <span className="flex items-center gap-1.5 text-[8px] font-extrabold uppercase text-timer-muted">
          <Zap className="size-3 text-timer-digit" fill="currentColor" aria-hidden />
          Oferta limitada
        </span>
        <span className="flex items-center gap-1 text-[8px] font-bold uppercase text-timer-digit">
          <span className="size-1.5 animate-pulse rounded-full bg-timer-digit" aria-hidden />
          Ao vivo
        </span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center px-3 py-2.5">
        {unidades.map((unidade, indice) => (
          <div key={unidade.rotulo} className="contents">
            <div className="flex flex-col items-center rounded-md border border-timer-digit/10 bg-timer-panel-soft/70 py-1.5">
            <span className="font-mono text-2xl font-bold leading-none tabular-nums text-timer-digit drop-shadow-[0_0_7px_var(--timer-digit)]">
              {unidade.valor}
            </span>
            <span className="mt-1 text-[7px] font-bold uppercase text-timer-muted">
              {unidade.rotulo}
            </span>
            </div>
            {indice < unidades.length - 1 ? (
              <span className="px-1 font-mono text-base font-bold text-timer-digit/55" aria-hidden>
                :
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-sun" aria-hidden />
    </div>
  );
}
