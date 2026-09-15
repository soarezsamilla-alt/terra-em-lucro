# Teste A/B — Raspadinha Rural Planner

## Objetivo
Adicionar, sem alterar a página atual, um experimento reversível que divide visitantes entre controle e raspadinha por sete dias. O novo checkout ficará bloqueado enquanto o link real com desconto não for configurado.

## Implementação
- Criar um único arquivo de configuração com ativação, tráfego, atraso, gatilho de rolagem, frequência, preços e `DISCOUNTED_COMPLETE_CHECKOUT_URL` inicialmente como placeholder.
- Criar um módulo isolado para atribuição 50/50 persistida por sete dias em `rp_scratch_variant`, controle de frequência em `rp_scratch_last_interaction` e envio seguro das métricas solicitadas.
- Criar o pop-up acessível usando a janela modal já adotada pelo projeto, com fechamento por X/Escape, foco por teclado, bloqueio temporário da rolagem e limites adequados para celular e desktop.
- Implementar a raspadinha em canvas, carregada somente para visitantes elegíveis do grupo B, com mouse/toque, revelação em cerca de 45%, alternativa por botão e tratamento defensivo de falhas.
- Mostrar após 12 segundos ou 35% de rolagem, o que ocorrer primeiro; cancelar após qualquer clique em compra e nunca executar fora da página principal.
- Reutilizar o Meta Pixel existente para eventos personalizados e enviar ao `dataLayer` somente quando disponível, sem reinstalar nem modificar rastreamentos atuais.
- Montar o recurso como um único componente independente ao final da página, permitindo remoção simples sem afetar qualquer seção existente.

## Modo de prévia e segurança
- Enquanto o checkout mantiver o placeholder, mostrar no editor um aviso claro de configuração pendente e desabilitar o botão de desconto.
- Disponibilizar uma forma de pré-visualização local do grupo B sem mudar a divisão real dos visitantes nem a persistência do teste.
- Não publicar automaticamente.

## Validação
- Testar grupo controle, grupo raspadinha, persistência de sete dias, dois gatilhos, fechamento, Escape, botão alternativo, bloqueio após compra e ausência de navegação com checkout pendente.
- Conferir visualmente em desktop e celular, incluindo raspagem por ponteiro/toque e preferência por movimento reduzido.
- Verificar build e ausência de novos erros no navegador.
