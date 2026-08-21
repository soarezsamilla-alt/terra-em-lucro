import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import am01 from "@/assets/amostras/am-01.png.asset.json";
import am02 from "@/assets/amostras/am-02.png.asset.json";
import am03 from "@/assets/amostras/am-03.png.asset.json";
import am04 from "@/assets/amostras/am-04.png.asset.json";
import am05 from "@/assets/amostras/am-05.png.asset.json";
import am06 from "@/assets/amostras/am-06.png.asset.json";
import am07 from "@/assets/amostras/am-07.png.asset.json";
import am08 from "@/assets/amostras/am-08.png.asset.json";
import am09 from "@/assets/amostras/am-09.png.asset.json";
import am10 from "@/assets/amostras/am-10.png.asset.json";
import am11 from "@/assets/amostras/am-11.png.asset.json";
import am12 from "@/assets/amostras/am-12.png.asset.json";
import am13 from "@/assets/amostras/am-13.png.asset.json";
import am14 from "@/assets/amostras/am-14.png.asset.json";
import am15 from "@/assets/amostras/am-15.png.asset.json";
import am16 from "@/assets/amostras/am-16.png.asset.json";
import am17 from "@/assets/amostras/am-17.png.asset.json";
import am18 from "@/assets/amostras/am-18.png.asset.json";
import am19 from "@/assets/amostras/am-19.png.asset.json";

const AMOSTRAS: readonly string[] = [
  am01.url,
  am02.url,
  am03.url,
  am04.url,
  am05.url,
  am06.url,
  am07.url,
  am08.url,
  am09.url,
  am10.url,
  am11.url,
  am12.url,
  am13.url,
  am14.url,
  am15.url,
  am16.url,
  am17.url,
  am18.url,
  am19.url,
];

export function ProvaVisual() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">
          📖 Veja como são os PROJETOS POR DENTRO
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          +100 plantas profissionais com medidas reais, prontas para aplicar.
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mt-8"
        >
          <CarouselContent>
            {AMOSTRAS.map((src, i) => (
              <CarouselItem key={src} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
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
          <CarouselPrevious className="-left-2" aria-label="Slide anterior" />
          <CarouselNext className="-right-2" aria-label="Próximo slide" />
        </Carousel>
      </div>
    </section>
  );
}
