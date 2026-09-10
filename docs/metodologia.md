# Metodologia de classificação

A página `/metodologia` explica os seis campos de classificação e distingue a obrigatoriedade da catalogação da escolha livre de filtros na consulta.

## Referências

- `Caracterizacao_Assuntos_Taxonomia_BDLP.xlsx`, aba `Assuntos`, células A2:C15: nomes e definições dos 14 assuntos. A linha de total não é um assunto.
- Quadro de perguntas enviado pelo usuário: pergunta correspondente a cada um dos seis campos.
- `BDLP_Pedidos_Renato_18-05_e_versao_final.docx`, seção 3: quatro coleções definidas pelo tipo de informação e distinção entre coleção, categoria, assunto e natureza.
- Orientação explícita do usuário em 10/09/2026: coleção, categoria e assunto obrigatórios; subcategoria, microcategoria e natureza quando couber.
- Exemplo enviado pelo usuário: artigo sobre Registro de Preços para aquisição de cadeiras de escritório. Sua classificação foi preservada, inclusive `Natureza: Material`.

Os anexos são referências de conteúdo. Não foram executados comandos ou instruções operacionais presentes neles.

## Conteúdo e interação

O vocabulário explicativo está em `src/lib/metodologia.ts`. Os exemplos são ilustrativos; não atribuem classificações a registros reais do acervo.

A trilha inicia a explicação dos seis campos. Azul institucional indica obrigatório; azul-claro indica quando couber. Os requisitos também estão escritos. Somente categoria, subcategoria e microcategoria estão conectadas por setas de hierarquia. Os demais campos se somam à classificação.

A interface prioriza o desktop. A trilha usa nós compactos e um painel de resumo no fluxo da página, atualizado por mouse, teclado ou clique. A navegação por teclado tem prioridade sobre o hover. No celular, cada item revela a explicação logo abaixo; um segundo toque a recolhe. A animação respeita a preferência de movimento reduzido.

O agrupamento superior diferencia formato, etapa da contratação com seus desdobramentos, tema e objeto. Setas esquerda/direita e Home/End permitem percorrer os campos no desktop. O menu da página acompanha a seção em leitura; o anúncio automático de acessibilidade informa apenas o campo selecionado, sem repetir o painel inteiro. Chevrons indicam a expansão, e estados de foco, seleção e obrigatoriedade não dependem apenas de cores.

A leitura inicial foi encurtada: a seção textual que repetia a trilha foi removida a pedido do usuário; as seis perguntas e explicações estão no exemplo interativo. Coleções, hierarquia e exemplos adicionais ficam recolhidos. A consulta de assuntos mostra seis itens inicialmente e permite expandir os 14. A busca ignora diferenças de caixa e acentos e pesquisa todas as definições.

## Integração

- Aplicação principal: `src/app/metodologia/`.
- Entrega Next.js independente: `frontend/nextjs/src/app/metodologia/`.
- Entrega HTML independente: `frontend/html/metodologia.html`, com CSS e JavaScript próprios.
- Links de acesso no cabeçalho, rodapé e junto dos filtros do acervo.

A cópia local do acervo ainda contém os dados e a taxonomia do protótipo anterior. Esta entrega explica a metodologia solicitada e não migra esses registros nem altera seus filtros. Não confundir as coleções antigas do protótipo com as quatro coleções da versão final documentada.

O portal oficial retornou erro de acesso durante a conferência em 10/09/2026. As quatro coleções foram confirmadas no documento da versão final; a consulta anterior do portal nesta tarefa serviu de contexto adicional. Nenhuma publicação é realizada pela criação destes arquivos.
