import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/rural-config";
import { ShieldCheck } from "lucide-react";

export function Garantia() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-7 text-center">
        <img
          src={garantiaSelo}
          alt="Selo de garantia incondicional de 7 dias"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-full max-w-[150px] object-contain animate-soft-pulse"
        />
        <h2 className="mt-5 text-2xl">Garantia Incondicional de 7 dias</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar o
          reembolso em até 7 dias após a compra e devolveremos 100% do seu investimento. Sem
          perguntas, sem burocracia.
        </p>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-primary">
          <ShieldCheck className="size-4 shrink-0" aria-hidden />
          Risco zero para você
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl sm:text-3xl">PERGUNTAS FREQUENTES</h2>
        <Accordion type="single" collapsible className="mt-7">
          {FAQ.map((item) => (
            <AccordionItem key={item.pergunta} value={item.pergunta}>
              <AccordionTrigger className="text-left font-display text-sm font-extrabold">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="bg-earth px-4 pb-28 pt-12 text-earth-foreground md:pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-lg font-extrabold uppercase">Rural Planner</p>
        <p className="mt-2 text-xs opacity-80">
          © 2026 Rural Planner. Todos os direitos reservados.
        </p>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase">
          <a href="#" className="underline-offset-4 hover:underline">
            Termos de uso
          </a>
          <a href="#" className="underline-offset-4 hover:underline">
            Políticas de privacidade
          </a>
        </nav>
        <p className="mx-auto mt-6 max-w-xl text-[11px] leading-relaxed opacity-70">
          Este site não é afiliado ao Meta, Facebook ou Instagram. Depois que você sair do Instagram
          ou Facebook, a responsabilidade não é deles e sim do nosso site. Trabalhamos para que você
          tenha a melhor experiência possível.
        </p>
      </div>
    </footer>
  );
}
