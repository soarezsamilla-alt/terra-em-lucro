import { Card } from "@/components/ui/card";
import { Clock, Compass, MapPinned, Rocket } from "lucide-react";

const CARDS = [
  {
    icone: Compass,
    titulo: "PLANEJE COM VISÃO PROFISSIONAL",
    texto:
      "Pare de tentar adivinhar o que fazer com seu terreno. Agora você segue projetos prontos com divisão estratégica.",
  },
  {
    icone: MapPinned,
    titulo: "SAIBA ONDE COLOCAR CADA COISA",
    texto:
      "Casa, cultivo, animais, irrigação… tudo já posicionado para melhor fluxo e aproveitamento.",
  },
  {
    icone: Clock,
    titulo: "PARE DE PERDER TEMPO",
    texto:
      "Sem erro, sem tentativa, sem desperdício. Projetos com medidas reais para aplicação direta.",
  },
  {
    icone: Rocket,
    titulo: "COMECE EM MINUTOS",
    texto:
      "Abra o projeto e aplique direto no seu terreno. Receba tudo na hora no WhatsApp e e-mail.",
  },
] as const;

export function Beneficios() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl">O que vai mudar na sua propriedade</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Chega de improvisar, aqui você executa com clareza
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CARDS.map(({ icone: Icone, titulo, texto }) => (
            <Card key={titulo} className="flex gap-4 border-border bg-card p-5 shadow-card">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground">
                <Icone className="size-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-extrabold uppercase tracking-tight">
                  {titulo}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{texto}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
