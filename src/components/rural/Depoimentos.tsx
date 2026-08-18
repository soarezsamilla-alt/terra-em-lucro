import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DEPOIMENTOS } from "@/lib/rural-config";
import { Quote, Star } from "lucide-react";

export function Depoimentos() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">QUEM JÁ USOU, APROVOU</h2>

        <Carousel opts={{ align: "start", loop: true }} className="mt-8">
          <CarouselContent>
            {DEPOIMENTOS.map((depoimento) => (
              <CarouselItem key={depoimento.nome} className="sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card">
                  <Quote className="size-5 shrink-0 text-accent" aria-hidden />
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">“{depoimento.texto}”</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-leaf font-display text-sm font-extrabold text-primary-foreground">
                      {depoimento.nome.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-extrabold">
                        {depoimento.nome}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{depoimento.local}</p>
                    </div>
                    <div className="ml-auto flex shrink-0 gap-0.5" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-3 fill-accent text-accent" aria-hidden />
                      ))}
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" aria-label="Depoimento anterior" />
          <CarouselNext className="-right-2" aria-label="Próximo depoimento" />
        </Carousel>
      </div>
    </section>
  );
}
