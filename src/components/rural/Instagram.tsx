import igPost02 from "@/assets/ig-post-02.jpeg";
import igPost03 from "@/assets/ig-post-03.jpeg";
import igPost01 from "@/assets/ig-post-01.jpeg";
import perfilIg from "@/assets/instagram-perfil.jpeg";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/rural-config";
import { Instagram as InstagramIcon } from "lucide-react";

const NUMEROS = [
  { valor: "+100", rotulo: "Projetos" },
  { valor: "28 mil", rotulo: "Produtores" },
  { valor: "15+", rotulo: "Anos Exp." },
] as const;

const PREVIEWS = [
  { src: igPost01, alt: "Post do Instagram: sítio produtivo organizado" },
  { src: igPost02, alt: "Post do Instagram: planta de projeto rural" },
  { src: igPost03, alt: "Post do Instagram: projeto rural" },
] as const;

export function Instagram() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-earth px-3 py-1 text-[11px] font-bold uppercase text-earth-foreground">
          Acompanhe de perto
        </span>
        <h2 className="mt-4 text-2xl sm:text-3xl">
          Nos siga no Instagram e veja o Rural Planner em ação
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Dicas de planejamento rural, projetos reais e conteúdo exclusivo toda semana. Ficou com
          dúvida? É só chamar por lá.
        </p>

        <div className="mt-7 rounded-2xl border border-border bg-card p-5 text-left shadow-card">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={perfilIg}
              alt="Foto de perfil do Rural Planner"
              width={1254}
              height={1254}
              loading="lazy"
              className="size-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate font-display text-base font-extrabold">Rural Planner</p>
              <p className="truncate text-xs text-primary">@ruralplanner.oficial</p>
              <p className="truncate text-xs text-muted-foreground">
                Planejamento rural que vira renda 🌱
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {NUMEROS.map((numero) => (
              <div key={numero.rotulo} className="rounded-xl bg-secondary px-2 py-3 text-center">
                <p className="font-display text-base font-extrabold text-primary">{numero.valor}</p>
                <p className="text-[11px] text-muted-foreground">{numero.rotulo}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {PREVIEWS.map((preview) => (
              <img
                key={preview.alt}
                src={preview.src}
                alt={preview.alt}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>

          <Button
            asChild
            variant="ctaGreen"
            className="mx-auto mt-5 h-8 w-auto max-w-full px-3 text-[11px] animate-cta-pulse [&_svg]:size-3.5"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <InstagramIcon aria-hidden />
              Ver @ruralplanner.oficial no Instagram
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Ficou com dúvida? Fale com a gente direto no perfil ✓ — Conteúdo novo toda semana • Dicas
          reais de planejamento rural • Sem enrolação
        </p>
      </div>
    </section>
  );
}
