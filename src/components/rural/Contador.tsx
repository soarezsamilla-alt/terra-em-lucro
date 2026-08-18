import { CONTADOR_SEGUNDOS } from "@/lib/rural-config";
import { useEffect, useState } from "react";

function formatar(total: number): string {
  const horas = Math.floor(total / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const segundos = total % 60;
  return [horas, minutos, segundos].map((n) => String(n).padStart(2, "0")).join(":");
}

/** Contador regressivo da oferta. Reinicia a cada sessão. */
export function Contador() {
  const [restante, setRestante] = useState(CONTADOR_SEGUNDOS);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRestante((atual) => (atual > 0 ? atual - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="rounded-lg bg-destructive px-3 py-2 text-center font-display text-sm font-extrabold tabular-nums text-destructive-foreground">
      ⏰ Oferta expira em: {formatar(restante)}
    </p>
  );
}
