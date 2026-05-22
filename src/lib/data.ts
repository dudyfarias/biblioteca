import type { Documento, Assunto, Categoria, Colecao, Complexidade } from "./types";

export const ASSUNTOS: Assunto[] = [
  "Aspectos Jurídicos e Regulatórios",
  "Sustentabilidade e ODS",
  "Governança",
  "Logística e Gestão de Suprimentos",
  "TIC",
  "Micro e Pequenas Empresas",
  "Conteúdos Transversais",
  "Inovação e Tecnologia",
  "Serviços",
  "Obras e Serviços de Engenharia",
  "Sanções Administrativas",
  "Integridade",
];

export const CATEGORY_TREE: {
  categoria: Categoria;
  subcategorias: { label: string; microcategorias?: string[] }[];
}[] = [
  {
    categoria: "Plano Anual de Contratações (PCA)",
    subcategorias: [{ label: "Plano Anual de Contratações (PCA)" }],
  },
  {
    categoria: "Contratação Todas as Fases",
    subcategorias: [{ label: "Contratação Todas as Fases" }],
  },
  {
    categoria: "Planejamento/Fase Preparatória",
    subcategorias: [
      { label: "Planejamento/Fase Preparatória" },
      { label: "Fase Preparatória - ETP" },
      { label: "Fase Preparatória - TR" },
      {
        label: "Fase Preparatória - Gestão de Riscos",
        microcategorias: [
          "Fase Preparatória - Gestão de Riscos",
          "Mapa de Riscos",
          "Matriz de Alocação de Riscos",
        ],
      },
      { label: "Fase Preparatória - Pesquisa de Preços" },
    ],
  },
  {
    categoria: "Seleção do Fornecedor",
    subcategorias: [
      { label: "Seleção do Fornecedor" },
      {
        label: "Licitação",
        microcategorias: [
          "Licitação",
          "Concorrência",
          "Pregão",
          "Leilão",
          "Diálogo Competitivo",
        ],
      },
      {
        label: "Contratação Direta",
        microcategorias: [
          "Contratação Direta",
          "Inexigibilidade",
          "Emergência - Inciso VIII",
          "Dispensa por Valor (Art 75)",
          "Contratação Direta outros incisos",
        ],
      },
      {
        label: "Procedimentos Auxiliares",
        microcategorias: [
          "Procedimentos Auxiliares",
          "Credenciamento",
          "Registro de Preços (RP)",
          "Pré-qualificação",
          "PMI",
          "Registro Cadastral",
        ],
      },
    ],
  },
  {
    categoria: "Gestão de Contratos",
    subcategorias: [
      { label: "Gestão de Contratos" },
      { label: "Fiscalização de Contratos" },
    ],
  },
  {
    categoria: "Gestão de RP",
    subcategorias: [{ label: "Gestão de RP" }],
  },
  {
    categoria: "Gestão do Credenciamento",
    subcategorias: [{ label: "Gestão do Credenciamento" }],
  },
  {
    categoria: "Conteúdos Transversais",
    subcategorias: [
      { label: "Catálogo eletrônico de Padronização" },
      { label: "Compras centralizadas/compartilhadas" },
      { label: "Transparência" },
      { label: "Sistema" },
      { label: "Gestão de Competências" },
      { label: "Inovação e Tecnologia" },
      { label: "Sustentabilidade e ODS" },
      { label: "Controle, Auditoria e Combate à Corrupção" },
      { label: "Governança" },
      { label: "Serviços" },
      { label: "Materiais" },
      { label: "Obras e Serviços de Engenharia" },
      { label: "Sanções Administrativas" },
      { label: "Micro e Pequenas empresas" },
      { label: "Logística e Gestão de Suprimentos" },
      { label: "Integridade" },
    ],
  },
];

export const CATEGORIAS: Categoria[] = CATEGORY_TREE.map(({ categoria }) => categoria);

export function getSubcategoriaOptions(categoria: string): string[] {
  return CATEGORY_TREE.find((item) => item.categoria === categoria)?.subcategorias.map(
    (subcategoria) => subcategoria.label,
  ) ?? [];
}

export function getMicrocategoriaOptions(categoria: string, subcategoria: string): string[] {
  return CATEGORY_TREE.find((item) => item.categoria === categoria)?.subcategorias.find(
    (item) => item.label === subcategoria,
  )?.microcategorias ?? [];
}

export const COLECOES: Record<Colecao, string[]> = {
  "Trabalhos Acadêmicos": [
    "Artigos de Periódicos",
    "Dissertações",
    "Teses",
    "TCCs",
    "Monografias",
    "Memoriais Docentes",
  ],
  "Materiais Pedagógicos": [
    "Apostilas",
    "Manuais",
    "Textos de Discussão",
    "Slides",
    "Vídeos",
    "Relatórios",
    "Guias",
    "Notas Técnicas",
    "Cursos",
  ],
  "Livros Digitais": [
    "Livro no Todo",
    "Capítulo de Livro",
    "E-book",
    "Livros Digitalizados",
  ],
  Eventos: [
    "Artigos de Eventos",
    "Apresentações",
    "Resumos",
    "Resumos Expandidos",
  ],
};

export const COMPLEXIDADES: Complexidade[] = [
  "Baixa",
  "Média",
  "Média-Alta",
  "Alta",
];

export const COLECAO_VISUAL: Record<
  string,
  { icon: string; color: string; bg: string }
> = {
  "Trabalhos Acadêmicos": {
    icon: "graduation-cap",
    color: "text-sp-blue",
    bg: "bg-sp-blue/10",
  },
  "Materiais Pedagógicos": {
    icon: "chalkboard",
    color: "text-sp-green",
    bg: "bg-sp-green/10",
  },
  "Livros Digitais": {
    icon: "book",
    color: "text-gov-red-700",
    bg: "bg-gov-red-100",
  },
  Eventos: {
    icon: "calendar",
    color: "text-sp-blue-petrol",
    bg: "bg-sp-olive/10",
  },
};

export const CATEGORIES_HOME = [
  {
    icon: "graduation-cap",
    label: "Trabalhos Acadêmicos",
    count: 312,
    key: "Trabalhos Acadêmicos" as Colecao,
  },
  {
    icon: "chalkboard",
    label: "Materiais Pedagógicos",
    count: 134,
    key: "Materiais Pedagógicos" as Colecao,
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
    label: "Aspectos Jurídicos",
    count: 248,
    key: "Aspectos Jurídicos e Regulatórios" as unknown as Colecao,
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
    colecao: "Materiais Pedagógicos",
    tipoInfo: "Manuais",
    assunto: "Aspectos Jurídicos e Regulatórios",
    categoria: "Conteúdos Transversais",
    subcategoria: "Governança",
    autorPrincipal: "Tribunal de Contas do Estado de São Paulo",
    title: "Boletim de Jurisprudência — Edição 1",
    tags: ["Boletim", "Licitações", "Contratos", "NLLC", "TCE-SP"],
    resumo:
      "Boletim mensal sobre os entendimentos da Corte, alterações e impactos da Nova Lei de Licitações.",
    imprenta: "São Paulo : TCE-SP, 2021",
    url: "https://www.tce.sp.gov.br/boletim-de-jurisprudencia/publicacoes/boletim-jurisprudencia-edicao-01-fevereiro2021",
    complexidade: "Média",
    tipologia: "Jurisprudencial",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a atualização de agentes públicos sobre entendimentos da Corte de Contas relacionados à NLLC.",
  },
  {
    id: 2,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "Sustentabilidade e ODS",
    categoria: "Seleção do Fornecedor",
    subcategoria: "Licitação",
    microcategoria: "Licitação",
    autorPrincipal: "Couto, Hugo Leonnardo Gomides do",
    autoridade: "Francis Lee Ribeiro",
    title:
      "Objetivos e desafios da política de compras públicas sustentáveis no Brasil: a opinião dos especialistas",
    tags: [
      "Compras Sustentáveis",
      "Sustentabilidade",
      "Políticas Públicas",
      "Licitação",
    ],
    resumo:
      "Analisa, a partir da opinião de especialistas, objetivos e desafios da política de compras públicas sustentáveis no Brasil, discutindo obstáculos e possibilidades de implementação na administração pública.",
    imprenta: "Rio de Janeiro : Revista de Administração Pública, 2016",
    doi: "10.1590/0034-7612146561",
    url: "https://www.scielo.br/j/rap/a/X5M39ysNDHK4Bw7rRY4SL7S/",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a formulação de diretrizes e critérios de sustentabilidade em licitações e compras públicas.",
  },
  {
    id: 3,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "Governança",
    categoria: "Seleção do Fornecedor",
    subcategoria: "Licitação",
    microcategoria: "Pregão",
    autorPrincipal: "Almeida, Alessandro Anibal Martins de",
    autoridade: "Hironobu Sano",
    title:
      "Função compras no setor público: desafios para o alcance da celeridade dos pregões eletrônicos",
    tags: [
      "Pregão Eletrônico",
      "Celeridade",
      "Administração Pública Federal",
    ],
    resumo:
      "Analisa prazos e fatores que afetam a celeridade dos processos de compras no âmbito da administração pública federal, com foco em pregões eletrônicos.",
    imprenta: "Rio de Janeiro : Revista de Administração Pública, 2018",
    doi: "10.1590/0034-7612164442",
    url: "https://www.scielo.br/j/rap/a/YQ35TgSsFSq3J8RvVpNMjpB/",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia melhorias de processos, prazos e eficiência operacional em pregões eletrônicos.",
  },
  {
    id: 4,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "Logística e Gestão de Suprimentos",
    categoria: "Conteúdos Transversais",
    subcategoria: "Logística e Gestão de Suprimentos",
    autorPrincipal: "Vaz, José Carlos",
    autoridade: "Gabriela Spanghero Lotta",
    title:
      "A contribuição da logística integrada às decisões de gestão das políticas públicas no Brasil",
    tags: ["Logística Pública", "Políticas Públicas", "Gestão Pública"],
    resumo:
      "Identifica e sistematiza componentes logísticos da gestão de políticas públicas, analisando sua importância para decisões de gestão no setor público brasileiro.",
    imprenta: "Rio de Janeiro : Revista de Administração Pública, 2011",
    url: "https://www.scielo.br/j/rap/a/LR88Jx5RLdWPZyvyBsDYZsk/",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Contribui para estruturar decisões logísticas e integrar gestão de suprimentos às políticas públicas.",
  },
  {
    id: 5,
    type: "livro",
    colecao: "Livros Digitais",
    tipoInfo: "Livro no Todo",
    assunto: "Logística e Gestão de Suprimentos",
    categoria: "Contratação Todas as Fases",
    subcategoria: "Contratação Todas as Fases",
    autorPrincipal: "Thai, Khi V.",
    title: "Public procurement re-examined",
    tags: ["Compras Públicas", "Sistemas de Compras", "Governança"],
    resumo:
      "Obra de referência que reexamina o campo das compras públicas por abordagem sistêmica e discute elementos do sistema de procurement.",
    imprenta: "Boca Raton : CRC Press, 2001",
    doi: "10.1201/9781420041529",
    url: "https://www.taylorfrancis.com/books/mono/10.1201/9781420041529/public-procurement-re-examined-khi-thai",
    complexidade: "Alta",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Serve como base teórica para estruturação conceitual da biblioteca e compreensão sistêmica das compras públicas.",
  },
  {
    id: 6,
    type: "apostila",
    colecao: "Materiais Pedagógicos",
    tipoInfo: "Apostilas",
    assunto: "Logística e Gestão de Suprimentos",
    categoria: "Conteúdos Transversais",
    subcategoria: "Logística e Gestão de Suprimentos",
    autorPrincipal: "Lino, Gustavo",
    title:
      "Fundamentos da gestão da logística pública e teoria geral de licitação e contratos",
    tags: ["Logística Pública", "Licitação", "Contratos", "ENAP"],
    resumo:
      "Apostila da ENAP sobre fundamentos da gestão da logística pública e teoria geral de licitação e contratos.",
    imprenta: "Brasília : ENAP/DDG, 2013",
    descFisica: "1 recurso online (45 p.)",
    url: "https://repositorio.enap.gov.br/bitstream/1/2365/3/Apostila%20Fundamentos%20da%20Gest%C3%A3o%20da%20Log%C3%ADstica%20P%C3%BAblica.pdf",
    complexidade: "Baixa",
    tipologia: "Operacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia capacitação de servidores em logística pública, licitações e contratos.",
  },
  {
    id: 7,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "Sustentabilidade e ODS",
    categoria: "Seleção do Fornecedor",
    subcategoria: "Licitação",
    microcategoria: "Licitação",
    autorPrincipal: "Oliveira, Bernardo Carlos S. C. M. de",
    autoridade: "Luis Miguel Luzio dos Santos",
    title:
      "Compras públicas como política para o desenvolvimento sustentável",
    tags: [
      "Compras Públicas",
      "Desenvolvimento Sustentável",
      "Poder de Compra do Estado",
    ],
    resumo:
      "Estuda como o Estado pode contribuir para o desenvolvimento sustentável por meio de seu poder de compra e das compras públicas.",
    imprenta: "Rio de Janeiro : Revista de Administração Pública, 2015",
    doi: "10.1590/0034-76121833",
    url: "https://www.scielo.br/j/rap/a/rybgWdNfqmncMdXp6rZ4r9g/",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia políticas de compras públicas sustentáveis e o uso estratégico do poder de compra estatal.",
  },
  {
    id: 8,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "TIC",
    categoria: "Contratação Todas as Fases",
    subcategoria: "Contratação Todas as Fases",
    autorPrincipal: "Saberi, Sara",
    autoridade: "Mahtab Kouhizadeh; Joseph Sarkis; Lejia Shen",
    title:
      "Blockchain technology and its relationships to sustainable supply chain management",
    tags: ["Blockchain", "Cadeia de Suprimentos", "Sustentabilidade", "TIC"],
    resumo:
      "Analisa a relação entre tecnologia blockchain e gestão sustentável da cadeia de suprimentos, discutindo barreiras e agenda de pesquisa.",
    imprenta:
      "London : International Journal of Production Research, 2019",
    issn: "0020-7543",
    doi: "10.1080/00207543.2018.1533261",
    url: "https://www.tandfonline.com/doi/full/10.1080/00207543.2018.1533261",
    complexidade: "Alta",
    tipologia: "Informacional",
    acesso: "Restrito",
    aplicabilidade:
      "Apoia estudos sobre rastreabilidade, transparência e inovação tecnológica em cadeias de suprimentos públicas.",
  },
  {
    id: 9,
    type: "artigo",
    colecao: "Trabalhos Acadêmicos",
    tipoInfo: "Artigos de Periódicos",
    assunto: "Aspectos Jurídicos e Regulatórios",
    categoria: "Seleção do Fornecedor",
    subcategoria: "Contratação Direta",
    microcategoria: "Emergência - Inciso VIII",
    autorPrincipal: "Rufino Filho, Edgard Tavares",
    title:
      "Compras públicas na pandemia: experiências estaduais no enfrentamento à Covid-19",
    tags: ["Covid-19", "Contratações Emergenciais", "Saúde Pública"],
    resumo:
      "Compara compras públicas realizadas por entes estaduais em resposta à pandemia de Covid-19 nas áreas da saúde.",
    imprenta: "São Paulo : Cadernos Gestão Pública e Cidadania, 2024",
    url: "https://www.scielo.br/j/cgpc/a/ffvS4W5JVvhFsJvwJ853S7C/",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia análise de contratações emergenciais, transparência e resposta estatal em crises sanitárias.",
  },
  {
    id: 10,
    type: "caplivro",
    colecao: "Livros Digitais",
    tipoInfo: "Capítulo de Livro",
    assunto: "Sustentabilidade e ODS",
    categoria: "Contratação Todas as Fases",
    subcategoria: "Contratação Todas as Fases",
    autorPrincipal: "Rosario, Estefany Laiana Costa do",
    autoridade:
      "Arleson Eduardo Monte Palma Lopes; Ina Camila Ramos Favacho de Miranda",
    title:
      "Compras públicas como indutora do desenvolvimento sustentável",
    tags: ["Compras Públicas", "Sustentabilidade", "ODS"],
    resumo:
      "Discute como as compras públicas podem induzir o desenvolvimento sustentável e contribuir para objetivos de produção, consumo e cidades sustentáveis.",
    imprenta: "São Paulo : Editora Científica Digital, 2023",
    isbn: "978-65-5360-285-4",
    doi: "10.37885/230211959",
    url: "https://downloads.editoracientifica.com.br/articles/230211959.pdf",
    complexidade: "Média",
    tipologia: "Informacional",
    acesso: "Aberto",
    aplicabilidade:
      "Apoia a incorporação de critérios de sustentabilidade e ODS nas contratações públicas.",
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
    colecao?: string | string[];
    assunto?: string | string[];
    categoria?: string | string[];
    subcategoria?: string | string[];
    microcategoria?: string | string[];
    complexidade?: string | string[];
    acesso?: string | string[];
  },
): Documento[] {
  const matchesFilter = (value: string | undefined, filter?: string | string[]) => {
    if (!filter || filter === "Todos") return true;
    if (Array.isArray(filter)) return filter.length === 0 || (!!value && filter.includes(value));
    return value === filter;
  };

  return docs.filter((d) => {
    const q = filters.query?.toLowerCase() ?? "";
    const matchQuery =
      !q ||
      d.title.toLowerCase().includes(q) ||
      d.autorPrincipal.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q)) ||
      d.resumo.toLowerCase().includes(q) ||
      d.categoria.toLowerCase().includes(q) ||
      d.subcategoria?.toLowerCase().includes(q) ||
      d.microcategoria?.toLowerCase().includes(q);
    const matchColecao = matchesFilter(d.colecao, filters.colecao);
    const matchAssunto = matchesFilter(d.assunto, filters.assunto);
    const matchCategoria = matchesFilter(d.categoria, filters.categoria);
    const matchSubcategoria = matchesFilter(d.subcategoria, filters.subcategoria);
    const matchMicrocategoria = matchesFilter(d.microcategoria, filters.microcategoria);
    const matchComplexidade = matchesFilter(d.complexidade, filters.complexidade);
    const matchAcesso = matchesFilter(d.acesso, filters.acesso);
    return (
      matchQuery &&
      matchColecao &&
      matchAssunto &&
      matchCategoria &&
      matchSubcategoria &&
      matchMicrocategoria &&
      matchComplexidade &&
      matchAcesso
    );
  });
}
