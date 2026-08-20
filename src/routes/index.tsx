import { createFileRoute } from "@tanstack/react-router";

import { AntesDepois } from "@/components/rural/AntesDepois";
import { Beneficios } from "@/components/rural/Beneficios";
import { Bonus } from "@/components/rural/Bonus";
import { ComoFunciona } from "@/components/rural/ComoFunciona";
import { Depoimentos } from "@/components/rural/Depoimentos";

import { Faq, Garantia, Rodape } from "@/components/rural/GarantiaFaqRodape";
import { Hero } from "@/components/rural/Hero";
import { Instagram } from "@/components/rural/Instagram";
import { Precos } from "@/components/rural/Precos";
import { Produto } from "@/components/rural/Produto";
import { ProvaVisual } from "@/components/rural/ProvaVisual";

const TITULO = "Rural Planner — +100 Projetos de Sítios e Chácaras Produtivas";
const DESCRICAO =
  "+100 projetos profissionais de sítios e chácaras com medidas reais e layouts prontos para executar. Acesso imediato no WhatsApp por R$ 9,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Beneficios />
      <ProvaVisual />
      <AntesDepois />
      <Produto />
      <Bonus />
      <ComoFunciona />
      <Depoimentos />
      <Precos />
      <Instagram />
      <Garantia />
      <Faq />
      <Rodape />
      
    </main>
  );
}
