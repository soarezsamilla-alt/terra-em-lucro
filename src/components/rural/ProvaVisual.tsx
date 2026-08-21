import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import am01 from "@/assets/amostras/am-01.png";
import am02 from "@/assets/amostras/am-02.png";
import am03 from "@/assets/amostras/am-03.png";
import am04 from "@/assets/amostras/am-04.png";
import am05 from "@/assets/amostras/am-05.png";
import am06 from "@/assets/amostras/am-06.png";
import am07 from "@/assets/amostras/am-07.png";
import am08 from "@/assets/amostras/am-08.png";
import am09 from "@/assets/amostras/am-09.png";
import am10 from "@/assets/amostras/am-10.png";
import am11 from "@/assets/amostras/am-11.png";
import am12 from "@/assets/amostras/am-12.png";
import am13 from "@/assets/amostras/am-13.png";
import am14 from "@/assets/amostras/am-14.png";
import am15 from "@/assets/amostras/am-15.png";
import am16 from "@/assets/amostras/am-16.png";
import am17 from "@/assets/amostras/am-17.png";
import am18 from "@/assets/amostras/am-18.png";
import am19 from "@/assets/amostras/am-19.png";

const AMOSTRAS: readonly string[] = [
  am01,
  am02,
  am03,
  am04,
  am05,
  am06,
  am07,
  am08,
  am09,
  am10,
  am11,
  am12,
  am13,
  am14,
  am15,
  am16,
  am17,
  am18,
  am19,
];

export interface ProvaVisualProps {
  titulo?: string;
  subtitulo?: string;
  /** Rolagem contínua (sem paradas) e sem setas de navegação. */
  fluxoContinuo?: boolean;
  /** Exibe menos slides por vez, deixando as imagens maiores. */
  imagensGrandes?: boolean;
}

export function ProvaVisual({
  titulo = "📖 Veja como são os PROJETOS POR DENTRO",
  subtitulo = "+100 plantas profissionais com medidas reais, prontas para aplicar.",
  fluxoContinuo = false,
  imagensGrandes = false,
}: ProvaVisualProps) {
  const plugin = useRef(
    fluxoContinuo
      ? AutoScroll({ speed: 0.8, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true })
      : Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );


  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">{titulo}</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          {subtitulo}
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="mt-8"
        >
          <CarouselContent>
            {AMOSTRAS.map((src, i) => (
              <CarouselItem
                key={src}
                className={
                  imagensGrandes
                    ? "basis-4/5 sm:basis-1/2 lg:basis-1/3"
                    : "basis-1/2 sm:basis-1/3 lg:basis-1/4"
                }
              >
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <img
                    src={src}
                    alt={`Amostra de projeto rural ${i + 1}`}
                    width={972}
                    height={1459}
                    loading="lazy"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!fluxoContinuo ? (
            <>
              <CarouselPrevious className="-left-2" aria-label="Slide anterior" />
              <CarouselNext className="-right-2" aria-label="Próximo slide" />
            </>
          ) : null}
        </Carousel>
      </div>
    </section>
  );
}
