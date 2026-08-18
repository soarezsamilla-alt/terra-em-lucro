import { Button } from "@/components/ui/button";
import { PRECOS } from "@/lib/rural-config";
import { cn } from "@/lib/utils";
import { useEffect, useState, type ComponentProps } from "react";

export interface StickyCtaProps extends ComponentProps<"div"> {}

/** CTA fixo no rodapé em mobile. Aparece após o usuário rolar a primeira dobra. */
export function StickyCta({ className, ...props }: StickyCtaProps) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur transition-transform duration-300 md:hidden",
        visivel ? "translate-y-0" : "translate-y-full",
        className,
      )}
      {...props}
    >
      <Button asChild variant="cta" size="xl" className="w-full text-sm">
        <a href="#precos">{PRECOS.ctaPrincipal}</a>
      </Button>
      <p className="mt-1 text-center text-[11px] text-muted-foreground">
        Acesso imediato • 7 dias de garantia
      </p>
    </div>
  );
}
