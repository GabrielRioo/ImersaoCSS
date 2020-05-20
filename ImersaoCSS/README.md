### IMERSÃO CSS
* Algumas anotações de informações que eu não conhecia ou usava pouco.
* Segurar alt sobre uma tag no **VS Code** + setinha para cima ou para baixo, movimenta a tag toda :exploding_head::scream:
* **Mobile-First** - Sempre começar a fazer a pagina como se fosse pra Movel, depois ir aumentando.
* Quando usar o `display:` - `flex` & `grid`
   * `flex`: Quando não importa a quantidade certa de colunas.
   * `grid`: Quando sabe quantas colunas irão ter.
* Os testes geralmente são feitos no DEV Tools (F12)
* https://fontawesome.com/ - Icones Gratuitos
   * Icons -> Free -> Copy `<i class="fab...">`
   * Perfil -> Kits -> CLica no numero -> Copy Script
* Formas Geometricas - Clip Path - https://bennettfeely.com/clippy/
* https://css-doodle.com/
---
#### Treinamento com Jogos:
* https://flukeout.github.io/ - Seletores
* https://flexboxfroggy.com/#pt-br - Flexbox
* https://cssgridgarden.com/ - Grid



AULA | LINK | ANOTAÇÕES
:---:|:---:|:---
01 | [Imersão CSS Aula 1 - Página pessoal](https://www.youtube.com/watch?time_continue=467&v=jf_JVto07qg&feature=emb_logo) | - Para o `Display: Flex;` - Faz todo mundo virar coluna.<br> Usar em conjunto: <br> `justify-content: space-between;` - espaço nas do meio <br> `justify-content: space-around;` - espaço na coluna inteira <br> `font-style: italic` <br> **Unidade de Medida:** <br> VW - Viewport Width = 100% do total da tela <br> VH - Viewport Height = 100% do total da tela <br> Melhor que usar o % <br> **Assistir aulas:** <br> [Box-model e box-shadow no CSS sem segredos #AluraMais](https://www.youtube.com/watch?v=pZrAG27KZSg) <br> [Box-sizing no CSS sem segredos #AluraMais](https://www.youtube.com/watch?v=Q33ojlocKc0) <br> `filter: blur(10px)` - desfoca texto/ imagens...
02 | [#ImersaoCSS Aula 2 - Sites Responsivos](https://www.youtube.com/watch?time_continue=1&v=eGezltWKCbE&feature=emb_logo) | `* {}` - Reset do CSS. Resetar os padroes do CSS , controla todo css. <br> Ex: `* {margin: 0; padding: 0;}` <br> **`header {height: 100vh; display: flex;}`**- deixa o header da altura da tela do PC <br> `justify-content: center;` - Alinha horizontalmente <br> **`align-items: center;`** - Alinha verticalmente <br> `position: fixed;` - Position mexe no eixo Z <br> `top, left, right, bottom` - Só funciona se o position tiver declarado. <br> `top: 0` - Cola o container no topo <br> `<a>` - é um elemento **inline**, nao quebra linha, e nao é um bloco <br> Elementos que não são blocos o padding nao funciona <br> `display: block` - tranforma em bloco. <br> `<meta name="viewport"...` - Se torna responsivo para dispositivos móveis. <br> **BreackPoint:** <br> `@media(min-width: 400px) {` - Condição, como se fosse um `IF` <br> `body {` <br> `font-size: 14pt; } }` <br> **Unidade de Medida:** <br> EM - Unidade relativa. Ajuda a fazer fontes responsivas <br> Exemplo: 2em = 2 vezes o valor padrao. <br> _Deixar as fontes fixas so para o Body, e usar no restante, as relativas._
03 | [Imersão CSS Aula03 - Colunas e Linhas](https://www.youtube.com/watch?time_continue=3&v=mHC1k-18lQI&feature=emb_logo) | Google Fontes.<br> **`display: grid;`** - Grade <br> Propriedades do Grid: <br> `gap` - define o espaçamento entre qualquer linha ou coluna. <br> `grid-template-columns: 200px 300px 200px` - Quantidade de colunas, e seus respectivos tamanhos <br> `grid-template-columns: repeat(3, 240px)` - Função para repetiçao de colunas <br> `justify-content: center` - Centralizar <br> `height: calc(100vh - 3em - 48px);` <br> `object-fit: contain;` - Deixa as imagens no tamanho padrao, desrespeitando qualquer modificação css <br> `object-fit: cover;` - Ocupam o mesmo espaço e nao deformam as imagens
04 | [Alura ImersaoCSS Aula04 v1](https://www.youtube.com/watch?v=FQt4WK0U4pM&feature=emb_logo) | `min-height: 100vh` - Altura minima <br> `transition: background 2s, color 1s` - Pode passar mais de um parametro e tempo. <br> Não recomendavel por transition `all` <br> `:active` - Momento que o usuario clica em cima do elemento <br> `transform: scale(1.2) rotateX(30deg);` - Escala do elemento. 1 é o padrao <br> `translateY(50vh)` <br> _Para Animação:_ Usar o **Transform.**<br>  `animation: linear 2s animacaoTitulo forwards;` - Para fazer a Animação. Por dentro da classe CSS. <br> `forwards` - Quando a animação acabar, fica fixo na tela <br> `animacaoTitulo` - Nome da Função <br> **Função** - Fora da classe CSS <br> `@keyframes animacaoTitulo{` <br>   `from { }` ou `0% { }` - Estado inicial <br> `to { }` ou `100% { transform: scale(1) translateY(0); opacity: 1; } }` - Estado final <br> **ID** - Mais usada na tag `a href="#portfolio"` serve de ancora.
05 | [#ImersaoCSS Aula 5 - Efeitos Visuais](https://www.youtube.com/watch?time_continue=931&v=LwdXpJPixFo&feature=emb_logo) | `text-indent` - Recuo do Paragrafo <br> `float` - Mais usado para textos e imagens <br> `border-radius: 50%` - Fazer uma bola <br> `clip-path: polygon()` - Corta e faz formas geometricas <br> `position:` - O `relative` sempre vai ser a class mãe. <br> `backface-visibility: hidden` <br> `transform: rotateY(180deg)` <br> 
      
PROPRIEDADES | PARAMETROS
:---:|:---
`justify-content` | `flex-start`(default) -  Itens se alinham à esquerda do container. <br> `flex-end` - Itens se alinham à direita do container.<br> `center` - Itens se alinham no centro do container. <br> `space-between` -  Itens se alinham com distância igual entre eles. <br> `space-around` - Itens se alinham com distância igual em torno deles.
`align-items` | `flex-start` -  Itens se alinham na parte de cima do container. <br> `flex-end` -  Itens se alinham na parte de baixo do container. <br> `center` -  Itens se alinham no centro vertical do container.<br> `baseline` - Items se alinham na linha da base do container. <br> `stretch`(default) -  Itens se esticam para preencher o container.
`flex-direction` | `row`(default) - : Itens são posicionados na mesma direção do texto. <br> `row-reverse` - Itens são posicionados na direção oposta à do texto. <br> `column` -  Itens são posicionados de cima para baixo. <br> `column-reverse` -Itens são posicionados de baixo para cima.
`oder` | inteiros -1 0 1 ... - _Posição individual_
`align-self`| _Posição Individual Vertical_. ex: `.yellow{align-self}` - Mesmos parametros de Align-items
`flex-wrap` | `nowrap` - Todos os itens são apertados em uma unica linha <br> `wrap` - Itens se separam em linhas adicionais <br> `wrap-reverse` - itens se separam em linhas adicionais em reversos.
`flex-flow` | `flex-direction` e `flex-wrap` são usadas quase sempre juntas, entao foi criado esta, para junção delas duas. <br> ex: `flex-flow: row wrap;`
`align-content` | `flex-start` - Linhas agrupadas no topo do container <br> `flex-end` - Linhas são agrupadas no fundo do container  <br> `center` - Linhas agrupadas no centro vertical do container <br> `space-between` - linhas posicionadas com espaços iguais entre elas. <br> `space-around` - Linhas são posicionadas com espaço igual em torno delas <br> `stretch` - linhas se esticam para preencher o container
`display: grid` | Cria grids (grades)
`grid-template-columns` | `20% 20% 20%` - Cria colunas com 20%
`grid-template-rows` | `20% 20% 20%` - Cria linhas com 20%
`grid-column-start` | `inteiro` - Posição do grid inicial. Exemplo: 3 grids. inteiro: 3. Começa no grid 3
`grid-column-end` | `inteiro` - Preeche ate o final 
`grid-column-start` | `span inteiro` - Completa a coluna e so aceita numeros inteiros
`grid-column` | `2 / 4` = posição 2 e terminar na linha 4 - Junção do `start` com `end` 
`grid-row-start:` | Posição inicial na linha.
`grid-row:` | `2 / 6` - Junção do `start` com `end`
`grid-area:` | `1 / 2 / 3 / 4` <br> Primeiro: Linha. <br> Segundo: Coluna. <br> Terceiro: Completar por coluna. <br> Quarto: Completar por linha
`order` | `inteiro(negativo ou positivo)` - Ordem de tal classe ou ID
`grid-template-columns:` | `repeat(8, 12.5%)` <br> `tamanho` <br> `porcentagem` <br> `flex` <br> `max-content` <br> `min-content` <Br> Exemplo: `grid-template-columns: repeat(3, 100px 3em 40%)` <br> `grid-template-columns: 1fr 5fr` - fracionario: 1/6 e 5/6
``

18:54
