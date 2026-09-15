// Colecoes transcritas de CLASSIFICACAO GERAL BIBLIOTECA.xlsx, Planilha1!A11:B14.
export const METHODOLOGY_COLLECTIONS = [
  {
    name: "Jurisprudência",
    types: ["Súmulas", "Boletins", "Acórdãos", "Deliberações"],
  },
  {
    name: "Trabalhos Acadêmicos",
    types: ["Teses", "Dissertações", "Monografias", "TCCs", "Memoriais Docentes"],
  },
  {
    name: "Doutrina e Conteúdo Técnico",
    types: ["Livros digitais", "Artigos", "Notas Técnicas", "Relatórios", "Textos de Discussão", "Resumos", "Resumos expandidos", "Enunciados", "Pareceres"],
  },
  {
    name: "Instrução e Capacitação",
    types: ["Manuais", "Guias", "Tutoriais", "Apostilas", "Aulas", "Cursos", "Slides"],
  },
] as const satisfies readonly { name: string; types: readonly string[] }[];

// Assuntos transcritos de Caracterizacao_Assuntos_Taxonomia_BDLP (2).xlsx, Assuntos!A2:C17.
export const METHODOLOGY_SUBJECTS = [
  {
    name: "Aspectos Jurídicos e Regulatórios",
    summary: "Sobre a base normativa e legal das contratações públicas.",
    description: "Reúne publicações sobre a legislação aplicável às compras públicas, com destaque para a Lei nº 14.133/2021, pareceres jurídicos e interpretações normativas. Quando o foco for como o assunto é tratado na norma.",
    focus: "Como o assunto é tratado na norma.",
  },
  {
    name: "Governança",
    summary: "Estruturas, princípios e práticas de gestão pública.",
    description: "Implementação de mecanismos e instrumentos que permitam planejar, executar e monitorar as contratações. Abrange modelos de governança aplicados à logística e às contratações, incluindo definição de papéis, tomada de decisão, accountability e alinhamento estratégico das compras aos objetivos institucionais. Estrutura de gestão como um todo.",
    focus: "A estrutura de gestão como um todo.",
  },
  {
    name: "Inovação e Tecnologia",
    summary: "Novas soluções, ferramentas e transformação digital.",
    description: "Trata de inovação nos processos de compras, adoção de novas tecnologias, digitalização, inteligência artificial, automação, modernização e melhoria dos processos da gestão pública. Foco é a inovação e a transformação em si e as novas soluções.",
    focus: "A inovação e a transformação em si e as novas soluções.",
  },
  {
    name: "Sustentabilidade e ODS",
    summary: "Compras sustentáveis e agenda ambiental/social.",
    description: "Aborda critérios de sustentabilidade nas contratações, licitações sustentáveis, os Objetivos de Desenvolvimento Sustentável (ODS), impacto ambiental e responsabilidade social nos processos de compra.",
    focus: "Os critérios ambientais e sociais das contratações.",
  },
  {
    name: "Controle, Auditoria e Combate à Corrupção",
    summary: "Fiscalização, auditoria e prevenção de irregularidades.",
    description: "Reúne conteúdo sobre controle interno e externo, auditoria de contratações, prevenção e combate à corrupção, responsabilização e mecanismos de fiscalização dos atos administrativos. Quando o foco for o ato de fiscalizar, auditar ou responsabilizar.",
    focus: "O ato de fiscalizar, auditar ou responsabilizar.",
  },
  {
    name: "Gestão de Competências",
    summary: "Desenvolvimento de pessoas e capacidades da equipe.",
    description: "Trata das competências necessárias aos agentes públicos envolvidos em contratações, capacitação, desenvolvimento de habilidades e gestão do conhecimento organizacional.",
    focus: "As pessoas, suas habilidades e sua formação.",
  },
  {
    name: "Logística e Gestão de Suprimentos",
    summary: "Operação logística e cadeia de suprimentos.",
    description: "Aborda armazenagem, distribuição, transporte, gestão de estoques e a cadeia de suprimentos no setor público. Foco é a operação.",
    focus: "A operação logística.",
  },
  {
    name: "Compras Centralizadas/compartilhadas",
    summary: "Modelos de aquisição conjunta e centralizada.",
    description: "Trata de compras compartilhadas, centrais de compras, consórcios públicos e modelos de aquisição centralizada entre órgãos. Foco no modelo de aquisição.",
    focus: "O modelo de aquisição.",
  },
  {
    name: "Transparência",
    summary: "Publicidade e acesso à informação.",
    description: "Aborda divulgação de dados de contratações, portais da transparência, Lei de Acesso à Informação e publicidade dos atos administrativos. Controle social. Foco na divulgação e acesso à informação.",
    focus: "A divulgação e o acesso à informação.",
  },
  {
    name: "Integridade",
    summary: "Ética, prevenção de conflitos e compliance.",
    description: "Trata de programas de integridade, prevenção de conflitos de interesse, compliance e conduta ética dos agentes públicos. Foco na conduta ética e o compliance.",
    focus: "A conduta ética e o compliance.",
  },
  {
    name: "Micro e Pequenas Empresas",
    summary: "Tratamento diferenciado a MPEs nas compras.",
    description: "Aborda o tratamento favorecido a micro e pequenas empresas nas licitações, reserva de mercado, simplificação de exigências e estímulo à participação.",
    focus: "A participação e o tratamento favorecido às MPEs.",
  },
  {
    name: "Uso de Sistemas",
    summary: "Sistemas operacionais e plataformas de compras.",
    description: "Trata do uso de sistemas informatizados de compras, plataformas eletrônicas, sistemas de registro de preços e ferramentas operacionais já adotadas. Específico sobre sistemas em uso.",
    focus: "Os sistemas que já estão em uso.",
  },
  {
    name: "Sanções Administrativas",
    summary: "Penalidades e responsabilização de fornecedores e agentes públicos.",
    description: "Aborda sanções aplicáveis a fornecedores e contratados, impedimentos de licitar, declaração de inidoneidade e processos sancionatórios. Responsabilização dos agentes públicos. Foca na penalização.",
    focus: "A penalização.",
  },
  {
    name: "Catálogo eletrônico de Padronização",
    summary: "Instrumento de padronização de itens de compra.",
    description: "Trata do catálogo eletrônico de padronização de materiais e serviços, instrumento previsto na Lei nº 14.133/2021 para uniformizar especificações.",
    focus: "A padronização das especificações de materiais e serviços.",
  },
  {
    name: "Gestão Estratégica e Desempenho das Contratações",
    summary: "Operação e resultados.",
    description: "Trata da operação e resultados dos processos: prazos, economicidade, produtividade, indicadores, qualidade.",
    focus: "A operação e os resultados dos processos de contratação.",
  },
  {
    name: "Logística Pública Internacional",
    summary: "Compras Internacionais e Cooperação.",
    description: "Marcos, comparações e cooperação internacional em contratações públicas.",
    focus: "Os marcos, as comparações e a cooperação internacional em contratações públicas.",
  },
] as const;

export const CLASSIFICATION_FIELDS = [
  {
    id: "colecao", name: "Coleção", required: true,
    summary: "Tipo de informação",
    question: "Em que forma/tipo o material se apresenta?",
    description: "É definida pelo tipo de informação do material. Um artigo, uma dissertação e um manual podem tratar do mesmo tema e pertencer a coleções diferentes.",
    example: "O artigo sobre Registro de Preços pertence à coleção Doutrina e Conteúdo Técnico.",
  },
  {
    id: "categoria", name: "Categoria", required: true,
    summary: "Etapa da contratação",
    question: "A que fase do ciclo da contratação o conteúdo se refere?",
    description: "Situa o conteúdo no ciclo da contratação pública, do planejamento à gestão. Procedimentos Auxiliares é uma categoria própria, destacada separadamente. É o ponto de partida para identificar uma subcategoria e, quando existir, uma microcategoria.",
    example: "O artigo aborda o Registro de Preços na categoria Procedimentos Auxiliares.",
  },
  {
    id: "subcategoria", name: "Subcategoria", required: false,
    summary: "Tópico da etapa",
    question: "Qual tópico específico daquela fase?",
    description: "Detalha um tópico dentro da categoria escolhida. É preenchida quando esse desdobramento existe na árvore e corresponde ao conteúdo do material.",
    example: "Nesse artigo, Registro de Preços é a subcategoria de Procedimentos Auxiliares.",
  },
  {
    id: "microcategoria", name: "Microcategoria", required: false,
    summary: "Modalidade, regime ou hipótese",
    question: "Qual modalidade/regime/hipótese?",
    description: "Especifica o recorte previsto dentro da subcategoria, como uma modalidade de licitação ou uma hipótese de contratação direta. Depende da categoria e da subcategoria selecionadas.",
    example: "Não se aplica ao artigo: Registro de Preços já identifica a subcategoria, sem um desdobramento adicional.",
  },
  {
    id: "assunto", name: "Assunto", required: true,
    summary: "Tema central",
    question: "Sobre qual tema o conteúdo trata?",
    description: "Identifica o foco temático do material entre os assuntos da biblioteca. O assunto pode aparecer em diferentes coleções e etapas da contratação.",
    example: "O foco em normas, limitações e cuidados define o assunto Aspectos Jurídicos e Regulatórios.",
  },
  {
    id: "natureza", name: "Natureza", required: false,
    summary: "Objeto da contratação",
    question: "Qual o objeto da contratação?",
    description: "Identifica o objeto da contratação: material, serviços, obras e serviços de engenharia ou Tecnologia da Informação e Comunicação (TIC). É informada quando esse recorte se aplica ao conteúdo.",
    example: "O objeto é a aquisição de cadeiras de escritório. A natureza é Material.",
  },
] as const;

export const CLASSIFICATION_EXAMPLES = [
  {
    title: "Artigo sobre Registro de Preços para aquisição de cadeiras de escritório",
    intro: "Um artigo que discute aspectos normativos, procedimentos, limitações e cuidados sobre Registro de Preços para aquisição de cadeiras de escritório.",
    values: ["Doutrina e Conteúdo Técnico", "Procedimentos Auxiliares", "Registro de Preços", "Não se aplica", "Aspectos Jurídicos e Regulatórios", "Material"],
    note: "Coleção, categoria e assunto são obrigatórios. Neste artigo, subcategoria e natureza também se aplicam. Procedimentos Auxiliares é a categoria, Registro de Preços é a subcategoria e a microcategoria não se aplica. Aspectos Jurídicos e Regulatórios identifica o foco do artigo, e Material identifica as cadeiras de escritório que serão adquiridas.",
  },
  {
    title: "Manual de elaboração do Estudo Técnico Preliminar para serviços",
    intro: "O manual orienta a aplicação das normas na elaboração de um ETP para a contratação de serviços.",
    values: ["Instrução e Capacitação", "Planejamento/Fase Preparatória", "Fase Preparatória - ETP", "Não se aplica", "Aspectos Jurídicos e Regulatórios", "Serviços"],
    note: "A subcategoria já identifica o tópico. Sem um desdobramento aplicável, a microcategoria não precisa ser preenchida.",
  },
  {
    title: "Artigo sobre governança ao longo do ciclo da contratação",
    intro: "O artigo discute papéis e tomada de decisão em todo o ciclo, sem se restringir a uma fase ou a um objeto contratado.",
    values: ["Doutrina e Conteúdo Técnico", "Contratação Todas as Fases", "Não se aplica", "Não se aplica", "Governança", "Não se aplica"],
    note: "Coleção, categoria e assunto continuam presentes. Os demais campos não se aplicam ao recorte deste exemplo.",
  },
] as const;
