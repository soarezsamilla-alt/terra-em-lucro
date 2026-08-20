import heroMockup from "@/assets/hero-mockup.png.asset.json";
import { Button } from "@/components/ui/button";
import { PRECOS } from "@/lib/rural-config";
import { BellRing, MessageCircle, ShieldCheck } from "lucide-react";

function dataOferta(): string {
  const hoje = new Date();
  return hoje.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });
}

export function Hero() {
  return (
    <>
      {/* 1. Notificação de prova social */}
      <div className="bg-earth px-4 py-2 text-earth-foreground">
        <div className="mx-auto flex max-w-3xl items-center gap-2">
          <BellRing className="size-3.5 shrink-0" aria-hidden />
          <p className="min-w-0 truncate text-[11px] sm:text-xs">
            <strong className="font-semibold">Mateus D.</strong> garantiu o Plano Completo —
            Altamira, PA · Há 1 min
          </p>
        </div>
      </div>

      <header className="bg-gradient-to-b from-secondary to-background px-4 pb-10 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* 2. Selo de urgência */}
          <p className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
            Oferta disponível até o dia, {dataOferta()}
          </p>

          {/* 3. Hero */}
          <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            +100 Projetos de Sítios e Chácaras Produtivas que transforma sua{" "}
            <span className="text-primary">terra parada em fonte de renda</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A maior biblioteca de plantas de sítios do Brasil com +100 projetos profissionais com
            medidas reais, divisões estratégicas e layouts prontos para executar, mesmo que você
            nunca tenha planejado nada rural na vida.
          </p>

          <img
            src={heroMockup.url}
            alt="Mockup do kit digital Rural Planner com projetos de sítios e chácaras"
            width={1536}
            height={1024}
            className="animate-soft-pulse mx-auto mt-7 w-full max-w-xl"
          />

          <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <MessageCircle className="size-4 shrink-0" aria-hidden />
            Receba tudo na hora no seu WhatsApp e e-mail
          </p>

          <Button asChild variant="cta" size="xl" className="mt-6 h-10 w-full max-w-xs animate-cta-pulse px-4 text-xs sm:text-sm">
            <a href="#precos">{PRECOS.ctaPrincipal}</a>
          </Button>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden />
            Compra segura • 7 dias de garantia incondicional
          </p>
        </div>
      </header>
    </>
  );
}
