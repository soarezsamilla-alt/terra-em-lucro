import heroMockup from "@/assets/hero-mockup.png";
import { Button } from "@/components/ui/button";
import { PRECOS } from "@/lib/rural-config";
import { MessageCircle, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";

/** Data calculada apenas no cliente para evitar divergência de fuso entre SSR e browser. */
function useDataOferta(): string {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(
      new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long" }),
    );
  }, []);

  return data;
}

const MIN_VISITANTES = 6;
const MAX_VISITANTES = 15;

/**
 * Contador de "pessoas na página" simulado.
 * Renderizado apenas no cliente (0 no SSR) para evitar mismatch de hidratação.
 */
function useVisitantesAoVivo(): number {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sortear = () =>
      Math.floor(Math.random() * (MAX_VISITANTES - MIN_VISITANTES + 1)) + MIN_VISITANTES;

    setTotal(sortear());

    let timeoutId: ReturnType<typeof setTimeout>;
    const agendar = () => {
      // Intervalo irregular (3s a 7s) para parecer tráfego real.
      timeoutId = setTimeout(() => {
        setTotal((atual) => {
          const delta = Math.random() < 0.5 ? -1 : 1;
          const proximo = atual + delta;
          if (proximo < MIN_VISITANTES) return MIN_VISITANTES;
          if (proximo > MAX_VISITANTES) return MAX_VISITANTES;
          return proximo;
        });
        agendar();
      }, 3000 + Math.random() * 4000);
    };
    agendar();

    return () => clearTimeout(timeoutId);
  }, []);

  return total;
}

export function Hero() {
  const dataOferta = useDataOferta();
  const visitantes = useVisitantesAoVivo();

  return (
    <>
      {/* 1. Notificação de prova social — visitantes ao vivo */}
      <div className="sticky top-0 z-50 bg-earth px-4 py-2.5 text-earth-foreground shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <Users className="size-3.5 shrink-0" aria-hidden />
          <p
            className="font-display text-[10px] font-extrabold uppercase tracking-wide sm:text-xs"
            aria-live="polite"
          >
            {visitantes > 0 ? (
              <>
                <span className="text-accent">{visitantes} pessoas</span> estão vendo esta página
                agora
              </>
            ) : (
              "Vendo esta página agora"
            )}
          </p>
        </div>
      </div>


      <header className="bg-gradient-to-b from-secondary to-background px-4 pb-10 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* 2. Selo de urgência */}
          <p className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
            Oferta disponível até o dia, {dataOferta}
          </p>

          {/* 3. Hero */}
          <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            +100 Projetos de Sítios e Chácaras Produtivas
            <span className="mt-3 block text-2xl uppercase text-primary sm:text-3xl md:text-4xl">
              que transforma sua terra parada em fonte de renda
            </span>
          </h1>


          <img
            src={heroMockup}
            alt="Mockup do kit digital Rural Planner com projetos de sítios e chácaras"
            width={1536}
            height={1024}
            className="animate-soft-pulse mx-auto mt-7 w-full max-w-xl"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A maior biblioteca de plantas de sítios do Brasil com +100 projetos profissionais com
            medidas reais, divisões estratégicas e layouts prontos para executar, mesmo que você
            nunca tenha planejado nada rural na vida.
          </p>


          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-primary">
            <MessageCircle className="size-3.5 shrink-0" aria-hidden />
            Receba tudo na hora no seu WhatsApp e e-mail
          </p>

          <Button asChild variant="cta" size="xl" className="mt-6 h-10 w-full max-w-xs animate-cta-pulse px-4 text-xs sm:text-sm">
            <a href="#plano-completo">{PRECOS.ctaPrincipal}</a>
          </Button>

          <p className="mt-3 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
            <ShieldCheck className="size-3 shrink-0" aria-hidden />
            Compra segura • 7 dias de garantia incondicional
          </p>
        </div>
      </header>
    </>
  );
}
