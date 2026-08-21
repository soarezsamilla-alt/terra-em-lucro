import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

/** Compradores fictícios exibidos na prova social flutuante. */
const COMPRADORES: readonly { nome: string; cidade: string }[] = [
  { nome: "João P.", cidade: "Uberlândia, MG" },
  { nome: "Maria S.", cidade: "Goiânia, GO" },
  { nome: "Carlos A.", cidade: "Londrina, PR" },
  { nome: "Ana Luiza", cidade: "Petrolina, PE" },
  { nome: "Roberto M.", cidade: "Sinop, MT" },
  { nome: "Fernanda R.", cidade: "Campinas, SP" },
  { nome: "José Carlos", cidade: "Feira de Santana, BA" },
  { nome: "Patrícia L.", cidade: "Caxias do Sul, RS" },
  { nome: "Marcos V.", cidade: "Anápolis, GO" },
  { nome: "Luciana F.", cidade: "Juiz de Fora, MG" },
  { nome: "Eduardo T.", cidade: "Chapecó, SC" },
  { nome: "Rita de C.", cidade: "Teresina, PI" },
];

const TEMPO_VISIVEL_MS = 5000;
const TEMPO_OCULTO_MS = 5000;

export function NotificacaoCompras() {
  const [indice, setIndice] = useState(0);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const mostrar = () => {
      setVisivel(true);
      timeout = setTimeout(() => {
        setVisivel(false);
        setIndice((atual) => (atual + 1) % COMPRADORES.length);
        timeout = setTimeout(mostrar, TEMPO_OCULTO_MS);
      }, TEMPO_VISIVEL_MS);
    };

    timeout = setTimeout(mostrar, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const comprador = COMPRADORES[indice];
  const minutos = (indice % 7) + 1;

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-3 left-3 z-50 max-w-[240px] transition-all duration-500 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card/95 px-2.5 py-2 shadow-lg backdrop-blur">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <div className="leading-tight">
          <p className="text-[11px] font-bold text-foreground">
            {comprador.nome} acabou de adquirir!
          </p>
          <p className="text-[10px] text-muted-foreground">
            {comprador.cidade} · há {minutos} min
          </p>
        </div>
      </div>
    </div>
  );
}
