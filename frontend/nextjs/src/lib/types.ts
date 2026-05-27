export type Assunto =
  | "Aspectos Jurídicos e Regulatórios"
  | "Controle, Auditoria e Combate à Corrupção"
  | "Gestão de Competências"
  | "Governança"
  | "Inovação e Tecnologia"
  | "Materiais"
  | "Obras e Serviços de Engenharia"
  | "Sanções Administrativas"
  | "Serviços"
  | "Sistemas"
  | "Sustentabilidade e ODS"
  | "TIC"
  | "Transparência";

export type Categoria =
  | "Contratação Todas as Fases"
  | "Plano Anual de Contratações (PCA)"
  | "Planejamento/Fase Preparatória"
  | "Seleção do Fornecedor"
  | "Gestão de Contratos"
  | "Gestão de RP"
  | "Gestão do Credenciamento"
  | "Conteúdos Transversais";

export type Colecao =
  | "Trabalhos Acadêmicos"
  | "Materiais Pedagógicos"
  | "Livros Digitais"
  | "Eventos";

export type Complexidade = "Baixa" | "Média" | "Média-Alta" | "Alta";

export type Tipologia =
  | "Administrativo"
  | "Informacional"
  | "Jurisprudencial"
  | "Normativo"
  | "Operacional";

export type Acesso = "Aberto" | "Restrito";

export interface Documento {
  id: number;
  type: string;
  colecao: Colecao;
  tipoInfo: string;
  assunto: Assunto;
  categoria: Categoria;
  subcategoria?: string;
  microcategoria?: string;
  autorPrincipal: string;
  autoridade?: string;
  title: string;
  tags: string[];
  resumo: string;
  imprenta: string;
  url: string;
  doi?: string;
  issn?: string;
  isbn?: string;
  descFisica?: string;
  complexidade: Complexidade;
  tipologia: Tipologia;
  acesso: Acesso;
  aplicabilidade: string;
}

export interface ColecaoVisual {
  icon: string;
  color: string;
  bg: string;
}
