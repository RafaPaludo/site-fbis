# AGENTS.md

## Visão geral

Este projeto é o site oficial do Fórum Brasileiro de Inovação Sindical (FBIS).

O objetivo principal do site é gerar conversão para o evento presencial FBIS 2027, que acontecerá em Brasília/DF nos dias 25 e 26 de maio de 2027.

O site deve apresentar o evento, gerar interesse, explicar sua proposta, apresentar palestrantes e programação, responder dúvidas e conduzir o usuário para a inscrição/compra do ingresso.

O site deve ter aparência de um evento nacional contemporâneo e institucional, e não de uma landing page genérica de SaaS.

---

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nuxt UI
- @nuxt/content
- @nuxt/fonts
- @nuxt/eslint
- @vueuse/nuxt
- motion-v/nuxt

O servidor é utilizado apenas para funcionalidades relacionadas ao envio de e-mails.

Evite adicionar novas dependências sem necessidade. Antes de instalar uma biblioteca, verifique se a funcionalidade pode ser implementada usando recursos já disponíveis no projeto.

---

## Comandos

Instalar dependências:

```bash
npm install
```

Executar ambiente de desenvolvimento:

```bash
npm run dev
```

Executar lint:

```bash
npm run lint
```

Corrigir problemas de lint automaticamente quando possível:

```bash
npm run lint -- --fix
```

---

## Estrutura 

/app
  /components
  /layouts
  /pages
  /assets
  /composables
  /utils

/content
  arquivos YAML utilizados como fonte de conteúdo

/public
  imagens e arquivos públicos

---

## Responsabilidades

Responsabilidades
/app/pages
- Define as páginas e rotas.
- Deve conter pouca lógica de apresentação.
- Evite colocar grandes blocos reutilizáveis diretamente nas páginas.
/app/components
- Componentes visuais e seções reutilizáveis.
- Componentes devem ter responsabilidade clara.
- Evite componentes excessivamente genéricos sem necessidade.
/content
- Fonte dos conteúdos editoriais do site.
- Textos, informações do evento, programação, palestrantes e outros conteúdos devem ficar no Content quando fizer sentido.
- Evite colocar textos editoriais grandes diretamente dentro dos componentes Vue.

---

## Arquitetura da página

A página principal deve ser composta por seções independentes.

```
Hero
Marquee
Event2025
AboutFbis
WhyParticipate
Speakers
Manifesto
Themes
Schedule
WhatYouTake
Tickets
Organizations
Material
Sponsors
Location
Faq
FinalCta
```

Cada seção deve ser implementada como componente próprio quando possuir complexidade ou identidade visual própria.

A página deve principalmente organizar as seções:

<HeroSection />
<Marquee />
<Event2025 />
<AboutFbis />
...

Evite criar uma única página index.vue com centenas de linhas de markup.

---

## Design system

O visual do FBIS deve ser:
- contemporâneo
- editorial
- institucional
- humano
- confiante
- levemente experimental

Evitar aparência de:
- SaaS
- dashboard
- startup genérica
- template de marketing
- excesso de glassmorphism
- excesso de gradientes
- visual neon
- estética futurista genérica

---

## Cores
Cores principais:

```
FBIS Blue:       #152B50
FBIS Navy:       #0B172A
FBIS Red:        #D93645
FBIS Yellow:     #F2C94C
FBIS Off White:  #FAFAF7
FBIS Black:      #111111
FBIS Gray:       #5F6368
```

Uso semântico:
- Azul: identidade institucional e informação
- Navy: seções de maior impacto e profundidade
- Vermelho: ações e conversão
- Amarelo: destaque e elementos editoriais
- Off-white: fundo principal
- Preto: texto
- Cinza: conteúdo secundário

Evitar utilizar todas as cores saturadas simultaneamente.

---

## Tipografia

A tipografia principal utiliza:
- Space Grotesk para títulos, números e elementos de impacto.
- Inter para textos, navegação, botões e elementos de interface.

Títulos devem possuir presença visual forte, mas sem exagerar no tamanho.
Preferir títulos curtos e objetivos.
Bordas e formas
O projeto utiliza bordas levemente arredondadas.
Padrão aproximado:

```
sm: 4px
md: 6px
lg: 8px
```

Evitar:
- rounded-full em elementos que não sejam circulares ou badges.
- cards excessivamente arredondados.
- aparência de componentes SaaS.

---

## Layout e responsividade

O projeto utiliza abordagem mobile-first.

Sempre escrever primeiro o estilo para telas pequenas e utilizar breakpoints apenas quando houver mudança real de layout.
Preferir:
base → mobile
md → tablet
lg → desktop

Não adicionar sm, xl ou 2xl sem necessidade.
O conteúdo deve respeitar um container consistente:
max-width: aproximadamente 1200–1280px
padding mobile: aproximadamente 20–24px
padding desktop: aproximadamente 32–48px

As seções devem possuir bastante espaço vertical.
Valores de referência:

```
mobile:  py-20
tablet:  py-24
desktop: py-32
```

Esses valores são referências e podem ser ajustados de acordo com o conteúdo.

---

## Composição das seções
As seções não precisam possuir o mesmo layout.
Devem compartilhar o mesmo sistema visual, mas variar a composição para evitar aparência repetitiva.
Layouts permitidos:
- uma coluna
- duas colunas
- grids para palestrantes
- listas editoriais
- manifesto/tipografia de grande escala
- timelines
- blocos de destaque
Um layout 50/50 pode ser utilizado frequentemente, mas não deve ser obrigatório.
Evitar transformar todas as informações em cards.
Sempre que possível, preferir:
- tipografia
- espaçamento
- linhas
- números
- imagens
- composição editorial
em vez de criar cards para cada informação.

---

## Cores das seções
O fundo principal da página deve ser predominantemente: #FAFAF7

Seções com fundo azul devem ser utilizadas para criar ritmo visual e destacar momentos importantes.
Exemplos:
- manifesto
- ingressos
- CTA final
O amarelo deve ser utilizado pontualmente.
O vermelho deve ser prioritariamente utilizado para ações e conversão.
Evitar alternância mecânica de cores entre todas as seções.

---

## Animações
O projeto utiliza motion-v/nuxt.
As animações devem ser discretas e ter função editorial.

Princípio:
O conteúdo deve chamar atenção. A animação deve revelar o conteúdo.

Preferir:
- fade + translate vertical
- reveal de imagens
- clip/mask reveal
- pequenos efeitos de entrada
- marquee contínua
- contadores apenas para números relevantes
Evitar:
- animações excessivas
- parallax exagerado
- elementos girando
- partículas
- glow
- blur animado excessivo
- cards pulando ao entrar na viewport
- animações muito rápidas
Animações não devem prejudicar leitura, acessibilidade ou performance.
Respeitar prefers-reduced-motion quando aplicável.

---

## Conteúdo
O conteúdo editorial deve permanecer separado da apresentação visual sempre que possível.
Evitar:
<h2>Um título muito específico do evento...</h2>

Preferir obter o conteúdo através do @nuxt/content quando esse conteúdo for administrável/editorial.
Componentes devem receber dados e renderizar conteúdo, em vez de conhecer detalhes específicos de uma seção quando isso puder ser evitado.
Não inventar informações sobre:
- palestrantes
- programação
- patrocinadores
- preços
- datas
- estatísticas
- parceiros
Quando uma informação não estiver disponível, sinalizar a necessidade de conteúdo em vez de inventá-la.
Imagens
Priorizar fotografias reais do evento e das pessoas.
A direção visual deve favorecer:
- pessoas
- conversas
- público
- palestrantes
- bastidores
- interação
- momentos espontâneos
Evitar imagens genéricas de banco de imagens relacionadas a tecnologia.
Evitar imagens de:
- robôs
- circuitos
- hologramas
- códigos
- computadores genéricos
- conceitos abstratos de "inovação"

---

## SEO
A página deve possuir:
- title adequado
- meta description
- Open Graph
- imagem OG
- canonical quando necessário
- headings semanticamente organizados
- alt text para imagens relevantes
- estrutura semântica HTML
Title principal:
FBIS 2027 — Fórum Brasileiro de Inovação Sindical

Descrição:
O FBIS 2027 reúne lideranças e organizações sindicais em Brasília para discutir inovação, transformação e os novos desafios do movimento sindical.

Acessibilidade
Priorizar:
- HTML semântico
- navegação por teclado
- foco visível
- contraste adequado
- alt em imagens relevantes
- aria-label apenas quando necessário
- botões para ações
- links para navegação
- não depender apenas de cor para transmitir informação

Não utilizar div clicável quando um button ou a for semanticamente adequado.

---

## Performance
Priorizar:
- imagens otimizadas
- lazy loading quando apropriado
- evitar JavaScript desnecessário
- evitar bibliotecas adicionais sem necessidade
- animações leves
- componentes simples

O site é principalmente uma landing page institucional e deve carregar rapidamente.
Regras para alterações

Antes de alterar uma arquitetura existente:
1. Entenda a implementação atual.
2. Reutilize componentes existentes quando fizer sentido.
3. Não crie abstrações prematuramente.
4. Não substitua uma biblioteca existente por outra sem necessidade.
5. Não altere configurações globais sem verificar o impacto no restante do projeto.
6. Evite alterações não relacionadas à tarefa solicitada.
7. Não remova código existente apenas para "simplificar" sem verificar se ele possui função em outra parte do projeto.

Ao criar um novo componente, prefira uma responsabilidade clara.
Ao alterar estilos, preserve o design system existente.

---

## Processo de desenvolvimento

Para cada tarefa:
1. Analise os arquivos relacionados antes de editar.
2. Identifique componentes e estilos reutilizáveis.
3. Faça a menor alteração necessária.
4. Mantenha o padrão visual existente.
5. Execute lint.
6. Execute build quando a alteração puder afetar compilação, SSR ou produção.
7. Informe brevemente quais arquivos foram alterados e o que foi feito.

Não faça mudanças estruturais grandes sem necessidade.
