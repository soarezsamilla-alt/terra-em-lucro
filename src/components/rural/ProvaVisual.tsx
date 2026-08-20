import amostra from "@/assets/projeto-amostra.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AMOSTRAS = [
  "Sítio 5.000 m² — Horta + Pomar",
  "Chácara 1 hectare — Gado leiteiro",
  "Lote 800 m² — Quintal produtivo",
  "Sítio 2 ha — Agrofloresta",
  "Chácara 3.000 m² — Avicultura",
  "Sítio 4 ha — Piscicultura",
  "Lote 1.200 m² — Horta comercial",
  "Chácara 2.500 m² — Pomar cítrico",
  "Sítio 6 ha — Pecuária + lavoura",
  "Chácara 1.800 m² — Suinocultura",
  "Sítio 10 ha — Divisão por piquetes",
  "Lote 600 m² — Micro produção",
  "Sítio 3 ha — Café e banana",
  "Chácara 5.000 m² — Caprinos",
  "Sítio 1,5 ha — Irrigação por gotejo",
  "Chácara 900 m² — Estufa",
  "Sítio 8 ha — Silvicultura",
  "Lote 2.000 m² — Apicultura",
] as const;

export function ProvaVisual() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">
          📖 Veja como são os PROJETOS POR DENTRO
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          +100 plantas profissionais com medidas reais, prontas para aplicar.
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="mt-8">
          <CarouselContent>
            {AMOSTRAS.map((legenda) => (
              <CarouselItem key={legenda} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <img
                    src={amostra}
                    alt={`Amostra de projeto: ${legenda}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" aria-label="Slide anterior" />
          <CarouselNext className="-right-2" aria-label="Próximo slide" />
        </Carousel>
      </div>
    </section>
  );
}
