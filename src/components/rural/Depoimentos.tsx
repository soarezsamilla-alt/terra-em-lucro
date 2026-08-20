import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dep01 from "@/assets/depoimentos/dep-01.png.asset.json";
import dep02 from "@/assets/depoimentos/dep-02.png.asset.json";
import dep03 from "@/assets/depoimentos/dep-03.png.asset.json";
import dep04 from "@/assets/depoimentos/dep-04.png.asset.json";
import dep05 from "@/assets/depoimentos/dep-05.png.asset.json";

const DEPOIMENTOS_IMG: readonly string[] = [
  dep01.url,
  dep02.url,
  dep03.url,
  dep04.url,
  dep05.url,
];

export function Depoimentos() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">QUEM JÁ USOU, APROVOU</h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mt-8"
        >
          <CarouselContent>
            {DEPOIMENTOS_IMG.map((src, i) => (
              <CarouselItem key={src} className="basis-4/5 sm:basis-1/2 lg:basis-1/3">
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <img
                    src={src}
                    alt={`Depoimento de cliente ${i + 1}`}
                    width={768}
                    height={1376}
                    loading="lazy"
                    className="w-full object-contain"
                  />
                </figure>
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
