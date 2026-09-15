import type { IconType } from "react-icons";
import { FiBookOpen, FiLayers, FiFolder, FiFileText, FiTag, FiGrid, FiSettings, FiUsers, FiTruck, FiLink, FiEye, FiShield, FiMonitor, FiList, FiTrendingUp, FiGlobe } from "react-icons/fi";
import { LuScale, LuBuilding2, LuLeaf, LuChartNoAxesCombined, LuStore, LuGavel, LuGraduationCap, LuPresentation } from "react-icons/lu";

export const FIELD_PRESENTATION = {
  colecao: { Icon: FiBookOpen, caption: "Define a coleção a partir do tipo de informação." },
  categoria: { Icon: FiLayers, caption: "Situa o conteúdo no ciclo da contratação." },
  subcategoria: { Icon: FiFolder, caption: "Detalha um tópico dentro da categoria." },
  microcategoria: { Icon: FiFileText, caption: "Especifica a modalidade, o regime ou a hipótese." },
  assunto: { Icon: FiTag, caption: "Identifica o tema principal do conteúdo." },
  natureza: { Icon: FiGrid, caption: "Identifica o objeto da contratação." },
} as const;

export const COLLECTION_ICONS: Record<string, IconType> = {
  "Jurisprudência": LuGavel,
  "Trabalhos Acadêmicos": LuGraduationCap,
  "Doutrina e Conteúdo Técnico": FiBookOpen,
  "Instrução e Capacitação": LuPresentation,
};

export const SUBJECT_ICONS: Record<string, IconType> = {
  "Aspectos Jurídicos e Regulatórios": LuScale,
  "Governança": LuBuilding2,
  "Inovação e Tecnologia": FiSettings,
  "Sustentabilidade e ODS": LuLeaf,
  "Controle, Auditoria e Combate à Corrupção": LuChartNoAxesCombined,
  "Gestão de Competências": FiUsers,
  "Logística e Gestão de Suprimentos": FiTruck,
  "Compras Centralizadas/compartilhadas": FiLink,
  "Transparência": FiEye,
  "Integridade": FiShield,
  "Micro e Pequenas Empresas": LuStore,
  "Uso de Sistemas": FiMonitor,
  "Sanções Administrativas": LuGavel,
  "Catálogo eletrônico de Padronização": FiList,
  "Gestão Estratégica e Desempenho das Contratações": FiTrendingUp,
  "Logística Pública Internacional": FiGlobe,
};
