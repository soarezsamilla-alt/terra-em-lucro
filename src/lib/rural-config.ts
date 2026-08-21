/**
 * Configuração central da landing page Rural Planner.
 * Todos os preços, textos de oferta e contadores ficam aqui para edição fácil.
 */

export interface PlanoBullet {
  readonly texto: string;
  /** Quando false, o bullet é exibido como ausente (ex.: "Sem os bônus"). */
  readonly incluso?: boolean;
}

export interface Bonus {
  readonly numero: number;
  readonly titulo: string;
  readonly descricao: string;
  readonly precoOriginal: string;
  readonly selo?: string;
}

export const CHECKOUT_BASICO_URL = "#precos";
export const CHECKOUT_COMPLETO_URL = "#precos";
export const INSTAGRAM_URL =
  "https://www.instagram.com/ruralplanner.oficial?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=";

export const PRECOS = {
  basicoDe: "R$97,90",
  basicoPor: "R$9,90",
  completoDe: "R$197,90",
  completoPor: "R$29,90",
  ctaPrincipal: "QUERO MEU PROJETO POR R$ 9,90",
  bonusTotal: "R$205,50",
} as const;

/** Duração do contador regressivo da oferta, em segundos (24h). */
export const CONTADOR_SEGUNDOS = 24 * 60 * 60;

export const BONUS: readonly Bonus[] = [
  {
    numero: 1,
    titulo: "Pack de Construções Rurais",
    descricao:
      "Plantas detalhadas para galpões, cercas e pequenas pontes para otimizar sua estrutura.",
    precoOriginal: "R$27,90",
    selo: "Bônus Hoje!",
  },
  {
    numero: 2,
    titulo: "Planilha de ROI Produtivo",
    descricao:
      "Ferramenta prática para calcular a viabilidade financeira de cada cultivo no seu terreno.",
    precoOriginal: "R$37,90",
  },
  {
    numero: 3,
    titulo: "Guia de Plantas Companheiras",
    descricao: "Técnicas de consórcio de culturas para maximizar a colheita em espaços reduzidos.",
    precoOriginal: "R$27,90",
  },
  {
    numero: 4,
    titulo: "Manual de Energia Solar Rural",
    descricao:
      "Como implementar soluções simples de energia solar e biodigestores no seu sítio.",
    precoOriginal: "R$47,90",
  },
  {
    numero: 5,
    titulo: "Manual de Criação de Animais",
    descricao:
      "Galinhas, cabras, porcos e peixes: o guia completo de manejo para criar com segurança e gerar renda.",
    precoOriginal: "R$37,90",
  },
  {
    numero: 6,
    titulo: "Guia de Água e Irrigação Rural",
    descricao:
      "Sistemas completos de captação, armazenamento e irrigação. Garanta água para suas plantas e animais durante todo o ano, mesmo na seca.",
    precoOriginal: "R$27,90",
  },
] as const;

export const DEPOIMENTOS = [
  {
    nome: "Mateus D.",
    local: "Altamira, PA",
    texto:
      "Comprei achando que era só um PDF qualquer. Me surpreendi: são plantas com medida certinha. Já dividi meu lote de 2 hectares seguindo o projeto 34.",
  },
  {
    nome: "Cleusa R.",
    local: "Patos de Minas, MG",
    texto:
      "Minha chácara estava parada há 6 anos. Em duas semanas organizei horta, galinheiro e pomar. Hoje já vendo verdura na feira.",
  },
  {
    nome: "João Batista",
    local: "Sinop, MT",
    texto:
      "O que mais me ajudou foi a divisão por produção. Eu misturava tudo e perdia área. Agora cada canto tem função.",
  },
  {
    nome: "Andreia L.",
    local: "Caruaru, PE",
    texto:
      "Recebi no WhatsApp em menos de 1 minuto. O manual de irrigação sozinho já valeu o valor pago.",
  },
  {
    nome: "Sérgio Kowalski",
    local: "Guarapuava, PR",
    texto:
      "Sou aposentado e não entendo de projeto. Consegui aplicar sem ajuda de ninguém. Simples e direto.",
  },
  {
    nome: "Rafaela M.",
    local: "Barreiras, BA",
    texto:
      "A planilha de ROI abriu meu olho. Descobri que meu plano antigo daria prejuízo. Troquei de cultura e agora fecha positivo.",
  },
] as const;

export const FAQ = [
  {
    pergunta: "O que vem incluso no pacote?",
    resposta:
      "Você recebe mais de 100 projetos completos de sítios e chácaras produtivas, com medidas reais, divisões de área e layouts prontos para executar. No Plano Completo você também recebe os 6 bônus exclusivos: Pack de Construções Rurais, Planilha de ROI Produtivo, Guia de Plantas Companheiras, Manual de Energia Solar Rural, Manual de Criação de Animais e Guia de Água e Irrigação Rural.",
  },
  {
    pergunta: "Como vou ter acesso ao material?",
    resposta:
      "Assim que o pagamento é confirmado, o link de acesso é enviado automaticamente para o seu WhatsApp e para o seu e-mail. O processo leva segundos e não depende de aprovação manual.",
  },
  {
    pergunta: "O material é digital ou físico?",
    resposta:
      "É 100% digital, em PDF. Você pode abrir no celular, tablet ou computador, imprimir as plantas que quiser e levar para o campo. Não há frete nem espera pela entrega.",
  },
  {
    pergunta: "Para quem é indicado esse material?",
    resposta:
      "Para quem tem (ou vai comprar) um sítio, chácara, lote rural ou quintal grande e quer transformar a terra em produção e renda. Serve tanto para iniciantes quanto para produtores que já trabalham na terra e querem organizar melhor a propriedade.",
  },
  {
    pergunta: "Preciso de conhecimento prévio para usar?",
    resposta:
      "Não. Os projetos já vêm prontos, com medidas e legendas explicando o que fica em cada área. Você escolhe o projeto compatível com o tamanho do seu terreno e aplica. Nenhuma experiência com agronomia ou arquitetura é necessária.",
  },
  {
    pergunta: "Funciona para quem tem pouco espaço?",
    resposta:
      "Sim. Há projetos a partir de 500 m² até grandes áreas de vários hectares. Boa parte da biblioteca é dedicada justamente ao aproveitamento máximo de espaços pequenos.",
  },
  {
    pergunta: "Qual a diferença entre o Plano Básico e o Completo?",
    resposta:
      "O Plano Básico dá acesso aos mais de 100 projetos. O Plano Completo inclui tudo do Básico mais os 6 bônus exclusivos, atualizações gratuitas semanais, acesso prioritário a novos projetos e suporte prioritário via WhatsApp.",
  },
  {
    pergunta: "Vou precisar investir muito dinheiro para aplicar?",
    resposta:
      "Não. Os projetos são pensados para execução por etapas, começando pelo que dá retorno mais rápido e com baixo custo. Você aplica no ritmo do seu bolso, sem precisar fazer tudo de uma vez.",
  },
  {
    pergunta: "E se eu não gostar do material?",
    resposta:
      "Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso dentro desse prazo e devolvemos 100% do valor pago, sem perguntas e sem burocracia.",
  },
] as const;
