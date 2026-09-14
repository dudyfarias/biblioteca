# Metodologia de classificação

A metodologia está organizada em três páginas independentes. O menu mantém o visual institucional, mas cada item abre uma URL própria em vez de rolar para uma seção.

| Página | Endereço | Conteúdo |
| --- | --- | --- |
| Conceitos e coleções | `/metodologia` | Seis campos, coleções e tipos, hierarquia e exemplos. |
| Assuntos | `/metodologia/assuntos` | Busca de assuntos, definições e comparação de temas próximos. |
| Perguntas frequentes | `/metodologia/perguntas-frequentes` | Dúvidas sobre classificação e consulta ao acervo. |

Cada página tem título, descrição e breadcrumb próprios. Apenas seu conteúdo é renderizado; não são painéis ocultos de uma página única. O item ativo usa `aria-current="page"`, com o mesmo sublinhado vermelho do menu anterior. URLs diretas, recarregamento e histórico do navegador funcionam pela navegação normal do Next.js.

## Referências

- `CLASSIFICAÇÃO GERAL BIBLIOTECA.xlsx`, aba `Planilha1`, A2:B7: perguntas dos seis campos; A11:B14: quatro coleções e 25 tipos de informação.
- `Caracterizacao_Assuntos_Taxonomia_BDLP (1).xlsx`, aba `Assuntos`, A2:C15: nomes e definições dos 14 assuntos. A linha de total não é um assunto. A anotação "1 registro" não representa uma contagem deste acervo.
- Confirmação em 11/09/2026: aplicar as novas planilhas à metodologia e ao acervo. Essas fontes prevalecem sobre as listas anteriores do documento de pedidos e do protótipo.
- Orientação explícita do usuário em 10/09/2026: coleção, categoria e assunto obrigatórios; subcategoria, microcategoria e natureza se aplicável.
- Exemplo enviado pelo usuário: artigo sobre Registro de Preços para aquisição de cadeiras de escritório, agora ajustado à separação de Procedimentos Auxiliares. Natureza continua Material.

Os anexos são referências de conteúdo. Não foram executados comandos ou instruções operacionais presentes neles.

## Conteúdo e interação

O vocabulário está em `src/lib/metodologia.ts`. Os tipos do sistema e as opções dos filtros derivam dessas listas. Os exemplos são ilustrativos; não são registros novos do acervo.

- Jurisprudência: Súmulas, Boletins, Acórdãos, Deliberações.
- Trabalhos Acadêmicos: Teses, Dissertações, Monografias, TCCs, Memoriais Docentes.
- Doutrina e Conteúdo Técnico: Livros digitais, Artigos, Notas Técnicas, Relatórios, Textos de Discussão, Resumos, Resumos expandidos, Enunciados, Pareceres.
- Instrução e Capacitação: Manuais, Guias, Tutoriais, Apostilas, Aulas, Cursos, Slides.

Enunciados de especialistas estão em Doutrina e Conteúdo Técnico, não em Jurisprudência. A explicação se refere à taxonomia da biblioteca, não a uma afirmação universal sobre a força jurídica de todo documento denominado enunciado.

A célula B3 da classificação geral destaca os procedimentos auxiliares em separado na categoria. Aplicação adotada: Procedimentos Auxiliares é uma categoria própria, com Credenciamento, Registro de Preços, Pré-qualificação, PMI e Registro Cadastral como subcategorias. Não foram criadas microcategorias para esses itens. A planilha não contém uma nova árvore completa; os demais ramos foram preservados da referência anterior.

Natureza mantém os quatro valores já usados na metodologia: Material, Serviços, Obras e Serviços de Engenharia e TIC. A nova planilha confirma a pergunta do campo, mas não enumera seus valores. Natureza identifica o objeto contratado, não qualquer menção ao tema correspondente.

A trilha inicia a explicação dos seis campos. Azul institucional indica obrigatório; azul-claro indica se aplicável. Os requisitos também estão escritos. Somente categoria, subcategoria e microcategoria estão conectadas por setas de hierarquia. Os demais campos se somam à classificação.

A introdução explicita que a taxonomia é multidimensional e distingue classificação de pesquisa: os campos obrigatórios pertencem à catalogação dos documentos. Na consulta, todos os filtros são opcionais; Assunto é um filtro temático, e a busca aceita qualquer palavra sem exigir a seleção de filtros. Esse esclarecimento também aparece na página de Assuntos e nas perguntas frequentes.

A interface prioriza o desktop. A trilha usa nós compactos e um painel de resumo no fluxo da página, atualizado por mouse, teclado ou clique. A navegação por teclado tem prioridade sobre o hover. No celular, cada item revela a explicação logo abaixo; um segundo toque a recolhe. A animação respeita a preferência de movimento reduzido.

O agrupamento superior diferencia formato, etapa da contratação com seus desdobramentos, tema e objeto. Setas esquerda/direita e Home/End permitem percorrer os campos no desktop. O anúncio automático de acessibilidade informa apenas o campo selecionado, sem repetir o painel inteiro. Chevrons indicam a expansão, e estados de foco, seleção e obrigatoriedade não dependem apenas de cores. O menu da metodologia identifica a página atual e não muda com a rolagem.

Na página de conceitos, a ordem de leitura é conceito, coleções e tipos, hierarquia e exemplos. A trilha usa resumos conceituais; não antecipa a ficha do artigo. A tabela de coleções inicia aberta, enquanto hierarquia e exemplos podem ser expandidos. Não foi recriada a seção textual que duplicava a trilha. Na página de assuntos, a consulta mostra seis itens inicialmente e permite expandir os 14. A busca ignora diferenças de caixa e acentos e pesquisa todas as definições.

## Integração

- Aplicação principal: `src/app/metodologia/`.
- Entrega Next.js independente: `frontend/nextjs/src/app/metodologia/`.
- Estrutura compartilhada: `src/components/methodology-page.tsx`, com cabeçalho, navegação, título, breadcrumb, acesso ao acervo e rodapé.
- Entrega HTML independente: `frontend/html/metodologia.html`, `metodologia-assuntos.html` e `metodologia-perguntas-frequentes.html`, com CSS e JavaScript compartilhados.
- Links de acesso no cabeçalho, rodapé e junto dos filtros do acervo.

## Adequação dos registros locais

O catálogo desta aplicação contém 10 registros em `SAMPLE_DOCS`, não o catálogo completo do portal institucional. A atualização preserva IDs, títulos, autores, resumos, links e identificadores bibliográficos.

| IDs | Adequação |
| --- | --- |
| 1 | Boletim passa a Jurisprudência / Boletins; o tipo anterior Manuais era incompatível com o próprio registro. |
| 2, 3, 4, 7, 8, 9 | Artigos passam a Doutrina e Conteúdo Técnico / Artigos. |
| 5, 10 | Livro e capítulo passam a Doutrina e Conteúdo Técnico / Livros digitais, preservando o detalhe bibliográfico em `detalheTipoInfo`. |
| 6 | Apostila passa a Instrução e Capacitação / Apostilas. |
| 4, 6 | Assunto anterior Materiais passa a Logística e Gestão de Suprimentos, com base nos títulos e resumos sobre logística, estoques e suprimentos. |
| 5 | Assunto anterior Materiais passa a Governança, por interpretação editorial do resumo sobre gestão das compras. Requer confirmação da curadoria antes de uma migração do catálogo completo. |
| 8 | Assunto anterior TIC passa a Inovação e Tecnologia, conforme o foco em blockchain e novas soluções descrito no resumo. Não se presume Natureza TIC. |

Não foram criados acórdãos, deliberações, enunciados ou trabalhos acadêmicos para preencher coleções vazias. Os 10 registros atuais não permitem determinar com segurança um objeto contratado específico; Natureza permanece ausente neles. O filtro admite o campo quando houver registros catalogados com esse dado.

Filtros aceitam várias opções: alternativas dentro de um campo e combinação entre campos. A remoção de categorias/subcategorias limpa seleções filhas; limpar filtros também limpa Natureza. Links da home usam parâmetros próprios de coleção e assunto. Os números de coleções, assuntos e documentos são calculados a partir dos dados desta aplicação.

## Verificação e publicação

Testes de taxonomia e filtragem: `npm run test:taxonomy`. Conferências adicionais: compilação, análise estática, paridade das cópias e testes visuais/interativos no navegador. Para o menu, verificar URL e título por item, ausência do conteúdo das demais páginas, seleção ativa, acesso direto, recarregamento, voltar/avançar, navegação por teclado e layout desktop/móvel.

Publicação no GitHub e no endereço principal do Vercel autorizada pelo usuário em 11/09/2026. O envio desta aplicação não altera banco de dados externo nem importa o catálogo completo do portal oficial.
