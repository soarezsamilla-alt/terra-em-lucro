import { CreditCard, Smartphone, FileDown, Sprout } from "lucide-react";

const PASSOS = [
  {
    icone: CreditCard,
    titulo: "Realize o Pagamento",
    texto: "Acesso liberado imediatamente após a confirmação da compra, de forma 100% segura.",
  },
  {
    icone: Smartphone,
    titulo: "Receba no WhatsApp e E-mail",
    texto: "Seu link de acesso chega em segundos, direto no seu celular.",
  },
  {
    icone: FileDown,
    titulo: "Abra os Projetos",
    texto: "Baixe os PDFs pelo celular, tablet ou computador, onde for melhor pra você.",
  },
  {
    icone: Sprout,
    titulo: "Aplique na Sua Terra",
    texto:
      "Escolha o projeto certo pro seu tamanho de terreno e comece a transformar sua propriedade.",
  },
] as const;

export function ComoFunciona() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl">Comece a organizar sua terra em minutos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Veja como é simples ter acesso ao seu planejamento completo
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
          {PASSOS.map(({ icone: Icone, titulo, texto }, index) => (
            <li key={titulo} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="grid size-20 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icone className="size-8" aria-hidden />
                </div>
                <span className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-gradient-sun font-display text-sm font-extrabold text-accent-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-extrabold">{titulo}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
