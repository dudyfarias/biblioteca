# Metodologia de classificação

A página `/metodologia` explica os seis campos de classificação e distingue a obrigatoriedade da catalogação da escolha livre de filtros na consulta.

## Referências

- `CLASSIFICAÇÃO GERAL BIBLIOTECA.xlsx`, aba `Planilha1`, A2:B7: perguntas dos seis campos; A11:B14: quatro coleções e 25 tipos de informação.
- `Caracterizacao_Assuntos_Taxonomia_BDLP (1).xlsx`, aba `Assuntos`, A2:C15: nomes e definições dos 14 assuntos. A linha de total não é um assunto. A anotação "1 registro" não representa uma contagem deste acervo.
- Confirmação em 11/09/2026: aplicar as novas planilhas à metodologia e ao acervo. Essas fontes prevalecem sobre as listas anteriores do documento de pedidos e do protótipo.
- Orientação explícita do usuário em 10/09/2026: coleção, categoria e assunto obrigatórios; subcategoria, microcategoria e natureza quando couber.
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

A trilha inicia a explicação dos seis campos. Azul institucional indica obrigatório; azul-claro indica quando couber. Os requisitos também estão escritos. Somente categoria, subcategoria e microcategoria estão conectadas por setas de hierarquia. Os demais campos se somam à classificação.

A interface prioriza o desktop. A trilha usa nós compactos e um painel de resumo no fluxo da página, atualizado por mouse, teclado ou clique. A navegação por teclado tem prioridade sobre o hover. No celular, cada item revela a explicação logo abaixo; um segundo toque a recolhe. A animação respeita a preferência de movimento reduzido.

O agrupamento superior diferencia formato, etapa da contratação com seus desdobramentos, tema e objeto. Setas esquerda/direita e Home/End permitem percorrer os campos no desktop. O menu da página acompanha a seção em leitura; o anúncio automático de acessibilidade informa apenas o campo selecionado, sem repetir o painel inteiro. Chevrons indicam a expansão, e estados de foco, seleção e obrigatoriedade não dependem apenas de cores.

A ordem de leitura é conceito, coleções e tipos, hierarquia e exemplos. A trilha usa resumos conceituais; não antecipa a ficha do artigo. A tabela de coleções inicia aberta, enquanto hierarquia e exemplos podem ser expandidos. Não foi recriada a seção textual que duplicava a trilha. A consulta de assuntos mostra seis itens inicialmente e permite expandir os 14. A busca ignora diferenças de caixa e acentos e pesquisa todas as definições.

## Integração

- Aplicação principal: `src/app/metodologia/`.
- Entrega Next.js independente: `frontend/nextjs/src/app/metodologia/`.
- Entrega HTML independente: `frontend/html/metodologia.html`, com CSS e JavaScript próprios.
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

Testes de taxonomia e filtragem: `npm run test:taxonomy`. Conferências adicionais: compilação, análise estática, paridade das cópias e testes visuais/interativos no navegador.

Publicação no GitHub e no endereço principal do Vercel autorizada pelo usuário em 11/09/2026. O envio desta aplicação não altera banco de dados externo nem importa o catálogo completo do portal oficial.
