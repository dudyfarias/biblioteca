import type { METHODOLOGY_COLLECTIONS, METHODOLOGY_SUBJECTS } from "./metodologia";

export type Assunto = (typeof METHODOLOGY_SUBJECTS)[number]["name"];

export type Categoria =
  | "Contratação Todas as Fases"
  | "Plano Anual de Contratações (PCA)"
  | "Planejamento/Fase Preparatória"
  | "Seleção do Fornecedor"
  | "Procedimentos Auxiliares"
  | "Gestão de Contratos"
  | "Gestão de RP"
  | "Gestão do Credenciamento"
  | "Conteúdos Transversais";

export type Colecao = (typeof METHODOLOGY_COLLECTIONS)[number]["name"];
export type TipoInformacao = (typeof METHODOLOGY_COLLECTIONS)[number]["types"][number];
export type Natureza = "Material" | "Serviços" | "Obras e Serviços de Engenharia" | "TIC";

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
  tipoInfo: TipoInformacao;
  detalheTipoInfo?: string;
  assunto: Assunto;
  categoria: Categoria;
  subcategoria?: string;
  microcategoria?: string;
  natureza?: Natureza;
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
