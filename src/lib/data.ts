import type { Documento, Assunto, Categoria, Colecao, Complexidade } from "./types";

export const ASSUNTOS: Assunto[] = [
  "Aspectos Juridicos e Regulatorios",
  "Sustentabilidade e ODS",
  "Governanca",
  "Logistica e Gestao de Suprimentos",
  "TIC",
  "Micro e Pequenas Empresas",
  "Conteudos Transversais",
  "Inovacao e Tecnologia",
  "Servicos",
  "Obras e Servicos de Engenharia",
  "Sancoes Administrativas",
  "Integridade",
];

export const CATEGORIAS: Categoria[] = [
  "Contratacao Todas as Fases",
  "Plano Anual de Contratacoes (PCA)",
  "Planejamento/Fase Preparatoria",
  "Selecao do Fornecedor",
  "Contratacao Direta",
  "Procedimentos Auxiliares",
  "Gestao de Contratos",
  "Conteudos Transversais",
];

export const COLECOES: Record<Colecao, string[]> = {
  "Trabalhos Academicos": [
    "Artigos de Periodicos",
    "Dissertacoes",
    "Teses",
    "TCCs",
    "Monografias",
    "Memoriais Docentes",
  ],
  "Materiais Pedagogicos": [
    "Apostilas",
    "Manuais",
    "Textos de Discussao",
    "Slides",
    "Videos",
    "Relatorios",
    "Guias",
    "Notas Tecnicas",
    "Cursos",
  ],
  "Livros Digitais": [
    "Livro no Todo",
    "Capitulo de Livro",
    "E-book",
    "Livros Digitalizados",
  ],
  Eventos: [
    "Artigos de Eventos",
    "Apresentacoes",
    "Resumos",
    "Resumos Expandidos",
  ],
};

export const COMPLEXIDADES: Complexidade[] = [
  "Baixa",
  "Media",
  "Media-Alta",
  "Alta",
];

export const COLECAO_VISUAL: Record<
  string,
  { icon: string; color: string; bg: string }
> = {
  "Trabalhos Academicos": {
    icon: "graduation-cap",
    color: "text-[#4A148C]",
    bg: "bg-[#EDE7F6]",
  },
  "Materiais Pedagogicos": {
    icon: "chalkboard",
    color: "text-[#1B5E20]",
    bg: "bg-[#E8F5E9]",
  },
  "Livros Digitais": {
    icon: "book",
    color: "text-gov-red-700",
    bg: "bg-gov-red-100",
  },
  Eventos: {
    icon: "calendar",
    color: "text-[#E65100]",
    bg: "bg-[#FBE9E7]",
  },
};

export const CATEGORIES_HOME = [
  {
    icon: "graduation-cap",
    label: "Trabalhos Academicos",
    count: 312,
    key: "Trabalhos Academicos" as Colecao,
  },
  {
    icon: "chalkboard",
    label: "Materiais Pedagogicos",
    count: 134,
    key: "Materiais Pedagogicos" as Colecao,
  },
  {
    icon: "book",
    label: "Livros Digitais",
    count: 89,
    key: "Livros Digitais" as Colecao,
  },
  {
    icon: "calendar",
    label: "Eventos",
    count: 47,
    key: "Eventos" as Colecao,
  },
  {
    icon: "scale",
    label: "Aspectos Juridicos",
    count: 248,
    key: "Aspectos Juridicos e Regulatorios" as unknown as Colecao,
  },
  {
    icon: "leaf",
    label: "Sustentabilidade e ODS",
    count: 76,
    key: "Sustentabilidade e ODS" as unknown as Colecao,
  },
];

export const SAMPLE_DOCS: Documento[] = [
  {
    id: 1,
    type: "boletim",
    colecao: "Materiais Pedagogicos",
    tipoInfo: "Manuais",
    assunto: "Aspectos Juridicos e Regulatorios",
    categoria: "Conteudos Transversais",
    autorPrincipal: "Tribunal de Contas do Estado de Sao Paulo",
    title: "Boletim de Jurisprudencia — Edicao 1",
    tags: ["Boletim", "Licitacoes", "Contratos", "NLCC", "TCE-SP"],
    resumo:
      "Boletim mensal sobre os entendimentos da Corte, alteracoes e impactos da Nova Lei de Licitacoes.",
    imprenta: "Sao Paulo : TCE-SP, 2021",
    url: "https://www.tce.sp.gov.br/boletim-de-jurisprudencia/publicacoes/boletim-jurisprudencia-edicao-01-fevereiro2021",
    complexidade: "Media",
    tipologia: "Jurisprudencial",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a atualizacao de agentes publicos sobre entendimentos da Corte de Contas relacionados a NLCC.",
  },
  {
    id: 2,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "Sustentabilidade e ODS",
    categoria: "Selecao do Fornecedor",
    subcategoria: "Licitacao",
    autorPrincipal: "Couto, Hugo Leonnardo Gomides do",
    autoridade: "Francis Lee Ribeiro",
    title:
      "Objetivos e desafios da politica de compras publicas sustentaveis no Brasil: a opiniao dos especialistas",
    tags: [
      "Compras Sustentaveis",
      "Sustentabilidade",
      "Politicas Publicas",
      "Licitacao",
    ],
    resumo:
      "Analisa, a partir da opiniao de especialistas, objetivos e desafios da politica de compras publicas sustentaveis no Brasil, discutindo obstaculos e possibilidades de implementacao na administracao publica.",
    imprenta: "Rio de Janeiro : Revista de Administracao Publica, 2016",
    doi: "10.1590/0034-7612146561",
    url: "https://www.scielo.br/j/rap/a/X5M39ysNDHK4Bw7rRY4SL7S/",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a formulacao de diretrizes e criterios de sustentabilidade em licitacoes e compras publicas.",
  },
  {
    id: 3,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "Governanca",
    categoria: "Selecao do Fornecedor",
    subcategoria: "Pregao",
    autorPrincipal: "Almeida, Alessandro Anibal Martins de",
    autoridade: "Hironobu Sano",
    title:
      "Funcao compras no setor publico: desafios para o alcance da celeridade dos pregoes eletronicos",
    tags: [
      "Pregao Eletronico",
      "Celeridade",
      "Administracao Publica Federal",
    ],
    resumo:
      "Analisa prazos e fatores que afetam a celeridade dos processos de compras no ambito da administracao publica federal, com foco em pregoes eletronicos.",
    imprenta: "Rio de Janeiro : Revista de Administracao Publica, 2018",
    doi: "10.1590/0034-7612164442",
    url: "https://www.scielo.br/j/rap/a/YQ35TgSsFSq3J8RvVpNMjpB/",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia melhorias de processos, prazos e eficiencia operacional em pregoes eletronicos.",
  },
  {
    id: 4,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "Logistica e Gestao de Suprimentos",
    categoria: "Conteudos Transversais",
    autorPrincipal: "Vaz, Jose Carlos",
    autoridade: "Gabriela Spanghero Lotta",
    title:
      "A contribuicao da logistica integrada as decisoes de gestao das politicas publicas no Brasil",
    tags: ["Logistica Publica", "Politicas Publicas", "Gestao Publica"],
    resumo:
      "Identifica e sistematiza componentes logisticos da gestao de politicas publicas, analisando sua importancia para decisoes de gestao no setor publico brasileiro.",
    imprenta: "Rio de Janeiro : Revista de Administracao Publica, 2011",
    url: "https://www.scielo.br/j/rap/a/LR88Jx5RLdWPZyvyBsDYZsk/",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Contribui para estruturar decisoes logisticas e integrar gestao de suprimentos as politicas publicas.",
  },
  {
    id: 5,
    type: "livro",
    colecao: "Livros Digitais",
    tipoInfo: "Livro no Todo",
    assunto: "Logistica e Gestao de Suprimentos",
    categoria: "Contratacao Todas as Fases",
    autorPrincipal: "Thai, Khi V.",
    title: "Public procurement re-examined",
    tags: ["Compras Publicas", "Sistemas de Compras", "Governanca"],
    resumo:
      "Obra de referencia que reexamina o campo das compras publicas por abordagem sistemica e discute elementos do sistema de procurement.",
    imprenta: "Boca Raton : CRC Press, 2001",
    doi: "10.1201/9781420041529",
    url: "https://www.taylorfrancis.com/books/mono/10.1201/9781420041529/public-procurement-re-examined-khi-thai",
    complexidade: "Alta",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Serve como base teorica para estruturacao conceitual da biblioteca e compreensao sistemica das compras publicas.",
  },
  {
    id: 6,
    type: "apostila",
    colecao: "Materiais Pedagogicos",
    tipoInfo: "Apostilas",
    assunto: "Logistica e Gestao de Suprimentos",
    categoria: "Conteudos Transversais",
    autorPrincipal: "Lino, Gustavo",
    title:
      "Fundamentos da gestao da logistica publica e teoria geral de licitacao e contratos",
    tags: ["Logistica Publica", "Licitacao", "Contratos", "ENAP"],
    resumo:
      "Apostila da ENAP sobre fundamentos da gestao da logistica publica e teoria geral de licitacao e contratos.",
    imprenta: "Brasilia : ENAP/DDG, 2013",
    descFisica: "1 recurso online (45 p.)",
    url: "https://repositorio.enap.gov.br/bitstream/1/2365/3/Apostila%20Fundamentos%20da%20Gest%C3%A3o%20da%20Log%C3%ADstica%20P%C3%BAblica.pdf",
    complexidade: "Baixa",
    tipologia: "Operacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia capacitacao de servidores em logistica publica, licitacoes e contratos.",
  },
  {
    id: 7,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "Sustentabilidade e ODS",
    categoria: "Selecao do Fornecedor",
    subcategoria: "Licitacao",
    autorPrincipal: "Oliveira, Bernardo Carlos S. C. M. de",
    autoridade: "Luis Miguel Luzio dos Santos",
    title:
      "Compras publicas como politica para o desenvolvimento sustentavel",
    tags: [
      "Compras Publicas",
      "Desenvolvimento Sustentavel",
      "Poder de Compra do Estado",
    ],
    resumo:
      "Estuda como o Estado pode contribuir para o desenvolvimento sustentavel por meio de seu poder de compra e das compras publicas.",
    imprenta: "Rio de Janeiro : Revista de Administracao Publica, 2015",
    doi: "10.1590/0034-76121833",
    url: "https://www.scielo.br/j/rap/a/rybgWdNfqmncMdXp6rZ4r9g/",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia politicas de compras publicas sustentaveis e o uso estrategico do poder de compra estatal.",
  },
  {
    id: 8,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "TIC",
    categoria: "Contratacao Todas as Fases",
    autorPrincipal: "Saberi, Sara",
    autoridade: "Mahtab Kouhizadeh; Joseph Sarkis; Lejia Shen",
    title:
      "Blockchain technology and its relationships to sustainable supply chain management",
    tags: ["Blockchain", "Cadeia de Suprimentos", "Sustentabilidade", "TIC"],
    resumo:
      "Analisa a relacao entre tecnologia blockchain e gestao sustentavel da cadeia de suprimentos, discutindo barreiras e agenda de pesquisa.",
    imprenta:
      "London : International Journal of Production Research, 2019",
    issn: "0020-7543",
    doi: "10.1080/00207543.2018.1533261",
    url: "https://www.tandfonline.com/doi/full/10.1080/00207543.2018.1533261",
    complexidade: "Alta",
    tipologia: "Informacional",
    acesso: "Restrito",
    aplicabilidade:
      "Apoia estudos sobre rastreabilidade, transparencia e inovacao tecnologica em cadeias de suprimentos publicas.",
  },
  {
    id: 9,
    type: "artigo",
    colecao: "Trabalhos Academicos",
    tipoInfo: "Artigos de Periodicos",
    assunto: "Aspectos Juridicos e Regulatorios",
    categoria: "Contratacao Direta",
    subcategoria: "Emergencia — Inciso VIII",
    autorPrincipal: "Rufino Filho, Edgard Tavares",
    title:
      "Compras publicas na pandemia: experiencias estaduais no enfrentamento a Covid-19",
    tags: ["Covid-19", "Contratacoes Emergenciais", "Saude Publica"],
    resumo:
      "Compara compras publicas realizadas por entes estaduais em resposta a pandemia de Covid-19 nas areas da saude.",
    imprenta: "Sao Paulo : Cadernos Gestao Publica e Cidadania, 2024",
    url: "https://www.scielo.br/j/cgpc/a/ffvS4W5JVvhFsJvwJ853S7C/",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia analise de contratacoes emergenciais, transparencia e resposta estatal em crises sanitarias.",
  },
  {
    id: 10,
    type: "caplivro",
    colecao: "Livros Digitais",
    tipoInfo: "Capitulo de Livro",
    assunto: "Sustentabilidade e ODS",
    categoria: "Contratacao Todas as Fases",
    autorPrincipal: "Rosario, Estefany Laiana Costa do",
    autoridade:
      "Arleson Eduardo Monte Palma Lopes; Ina Camila Ramos Favacho de Miranda",
    title:
      "Compras publicas como indutora do desenvolvimento sustentavel",
    tags: ["Compras Publicas", "Sustentabilidade", "ODS"],
    resumo:
      "Discute como as compras publicas podem induzir o desenvolvimento sustentavel e contribuir para objetivos de producao, consumo e cidades sustentaveis.",
    imprenta: "Sao Paulo : Editora Cientifica Digital, 2023",
    isbn: "978-65-5360-285-4",
    doi: "10.37885/230211959",
    url: "https://downloads.editoracientifica.com.br/articles/230211959.pdf",
    complexidade: "Media",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a incorporacao de criterios de sustentabilidade e ODS nas contratacoes publicas.",
  },
];

export function extractYear(imprenta: string): string {
  const match = imprenta.match(/\d{4}/);
  return match ? match[0] : "—";
}

export function filterDocuments(
  docs: Documento[],
  filters: {
    query?: string;
    colecao?: string;
    assunto?: string;
    categoria?: string;
    complexidade?: string;
    acesso?: string;
  },
): Documento[] {
  return docs.filter((d) => {
    const q = filters.query?.toLowerCase() ?? "";
    const matchQuery =
      !q ||
      d.title.toLowerCase().includes(q) ||
      d.autorPrincipal.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q)) ||
      d.resumo.toLowerCase().includes(q);
    const matchColecao =
      !filters.colecao ||
      filters.colecao === "Todos" ||
      d.colecao === filters.colecao;
    const matchAssunto =
      !filters.assunto ||
      filters.assunto === "Todos" ||
      d.assunto === filters.assunto;
    const matchCategoria =
      !filters.categoria ||
      filters.categoria === "Todos" ||
      d.categoria === filters.categoria;
    const matchComplexidade =
      !filters.complexidade ||
      filters.complexidade === "Todos" ||
      d.complexidade === filters.complexidade;
    const matchAcesso =
      !filters.acesso ||
      filters.acesso === "Todos" ||
      d.acesso === filters.acesso;
    return (
      matchQuery &&
      matchColecao &&
      matchAssunto &&
      matchCategoria &&
      matchComplexidade &&
      matchAcesso
    );
  });
}
