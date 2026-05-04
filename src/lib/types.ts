export type Assunto =
  | "Aspectos Juridicos e Regulatorios"
  | "Sustentabilidade e ODS"
  | "Governanca"
  | "Logistica e Gestao de Suprimentos"
  | "TIC"
  | "Micro e Pequenas Empresas"
  | "Conteudos Transversais"
  | "Inovacao e Tecnologia"
  | "Servicos"
  | "Obras e Servicos de Engenharia"
  | "Sancoes Administrativas"
  | "Integridade";

export type Categoria =
  | "Contratacao Todas as Fases"
  | "Plano Anual de Contratacoes (PCA)"
  | "Planejamento/Fase Preparatoria"
  | "Selecao do Fornecedor"
  | "Contratacao Direta"
  | "Procedimentos Auxiliares"
  | "Gestao de Contratos"
  | "Conteudos Transversais";

export type Colecao =
  | "Trabalhos Academicos"
  | "Materiais Pedagogicos"
  | "Livros Digitais"
  | "Eventos";

export type Complexidade = "Baixa" | "Media" | "Media-Alta" | "Alta";

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
