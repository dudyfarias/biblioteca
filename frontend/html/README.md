# Versão HTML

Versão estática da Biblioteca Digital de Logística Pública, construída com HTML, CSS e JavaScript sem dependências.

Abra `index.html` diretamente no navegador. A página `acervo.html` inclui busca, seleção múltipla e filtros hierárquicos de categorias.

A página `metodologia.html` apresenta os seis campos de classificação, os 14 assuntos e exemplos ilustrativos, com abertura direta no navegador, sem servidor. As explicações, os conteúdos complementares, os assuntos e as dúvidas usam elementos nativos `details` e `summary`, inicialmente fechados. `metodologia.js` controla o explorador de classificação e a busca de assuntos; os blocos nativos não dependem dele.

O conteúdo foi convertido do elemento `main#conteudo-metodologia` da página Next em `/metodologia`, preservando texto, estrutura e estados. `metodologia.css` é uma cópia do CSS dessa página. A estrutura externa reutiliza a barra institucional, o cabeçalho e o rodapé de `index.html`, além de breadcrumb e link para pular ao conteúdo.

O explorador segue `src/components/classification-trail.tsx`: no desktop, hover com mouse, foco visível e clique selecionam um painel no fluxo da página. As setas esquerda/direita, Home e End movem o foco entre os campos, sem circular nas extremidades. O hover não interfere quando há foco visível nos botões. Até 720 px, clique/toque alterna um resumo junto ao campo. Os seis botões mantêm `aria-pressed`, `aria-expanded` e os dois IDs de `aria-controls` sincronizados. O primeiro campo começa selecionado. Ao voltar ao desktop com todos os resumos recolhidos no mobile, o primeiro campo é selecionado novamente. Um status curto anuncia a seleção ou o recolhimento; o painel de explicação não é uma região de anúncio automático. Não há tooltips, fixação de resumos nem fechamento por Escape ou clique externo.

A navegação interna segue `src/components/methodology-navigation.tsx`: acompanha a rolagem e o redimensionamento, marcando o link da seção atual com `aria-current="location"`. As medidas são atualizadas por quadro de animação para acompanhar a posição da barra de navegação.

A busca segue `src/components/methodology-subjects.tsx` e pesquisa nome, resumo, descrição e foco, ignorando maiúsculas e acentos. Há 14 assuntos completos no HTML, com os oito últimos inicialmente ocultos. O botão `method-subject-more` alterna entre seis e 14 itens e fica oculto durante uma busca. A expansão pelo teclado move o foco para o resumo do sétimo assunto, o primeiro item revelado. O contador anuncia a quantidade visível. Limpar restaura a seleção anterior de seis ou 14 itens e devolve o foco ao campo. A lista inclui estado sem resultados com uma ação de limpeza.

Para sincronizar uma revisão, extraia esse `main` do HTML renderizado, usando um parser HTML, e copie o CSS da página Next. O HTML inicial do servidor contém seis assuntos: complete os oito restantes a partir de `METHODOLOGY_SUBJECTS` em `src/lib/metodologia.ts`, reutilizando a marcação renderizada do componente. Preserve os quatro textos de cada assunto e o foco exato no atributo `data-subject-focus`; o script usa esse atributo para não incluir o rótulo fixo na busca. Mantenha ocultos os oito itens adicionais e os controles condicionais de limpeza e estado vazio. A regra de `[hidden]` em `styles.css` preserva esses estados mesmo quando o CSS de um controle define `display`.

Converta os caminhos internos em atributos de links (`/` para `index.html`, `/acervo` para `acervo.html` e `/metodologia` para `metodologia.html`), preservando parâmetros e âncoras. Não copie scripts Next nem inclua `app.js` na metodologia. Inclua apenas `metodologia.js`, adaptando os comportamentos aos componentes de origem. Mantenha os arquivos originais e os dados e controles dos filtros do acervo.

Os links para Metodologia estão na navegação e no rodapé das três páginas, com um acesso contextual junto aos filtros do acervo. A navegação quebra linha em telas menores sem ocultar links.
