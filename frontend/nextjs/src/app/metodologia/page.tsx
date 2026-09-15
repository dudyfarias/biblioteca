import type { Metadata } from "next";
import Link from "next/link";
import { FiChevronDown, FiArrowRight, FiBookOpen, FiFileText } from "react-icons/fi";
import { ClassificationTrail } from "@/components/classification-trail";
import { MethodologyPage } from "@/components/methodology-page";
import { COLLECTION_ICONS } from "@/components/methodology-icons";
import { CLASSIFICATION_EXAMPLES, CLASSIFICATION_FIELDS, METHODOLOGY_COLLECTIONS } from "@/lib/metodologia";

export const metadata: Metadata = {
  title: "Conceitos e coleções | Metodologia | Biblioteca Digital de Logística Pública",
  description: "Entenda a taxonomia multidimensional da biblioteca e como pesquisar por qualquer palavra, com ou sem filtros.",
};

export default function MetodologiaPage() {
  return (
    <MethodologyPage
      title="Estrutura da classificação"
      description="A classificação de cada documento combina estes campos:"
      activePath="/metodologia"
      introduction={
        <>
          <ol className="method-structure" aria-label="Estrutura da classificação">
            {CLASSIFICATION_FIELDS.map((field) => (
              <li key={field.id} className={field.required ? "is-required" : "is-conditional"}>
                <strong>{field.name}</strong>
                <span>{field.required ? "Obrigatório" : "Se aplicável"}</span>
              </li>
            ))}
          </ol>
          <p className="method-rule"><strong>A taxonomia é multidimensional.</strong> Os campos se complementam: identificam a forma do material, a etapa da contratação, o tema e, se aplicável, o objeto contratado.</p>
          <p className="method-rule"><strong>Na pesquisa, todos os filtros são opcionais.</strong> Assunto é um filtro temático para facilitar a consulta. Você pode buscar no acervo por qualquer palavra, sem selecionar filtros.</p>
        </>
      }
    >
          <ClassificationTrail />

          <section className="method-practical" aria-labelledby="practical-title">
            <div className="method-practical-heading"><FiFileText aria-hidden="true" /><h2 id="practical-title">Exemplo prático</h2><p>Artigo sobre aspectos normativos do Registro de Preços para aquisição de cadeiras de escritório.</p></div>
            <dl className="method-practical-fields">
              {CLASSIFICATION_FIELDS.map((field, index) => <div key={field.id}><dt>{field.name}</dt><dd>{CLASSIFICATION_EXAMPLES[0].values[index]}</dd></div>)}
            </dl>
          </section>

          <section id="colecoes" className="method-section method-collections" aria-labelledby="collections-title">
            <div className="method-section-heading"><div><h2 id="collections-title">Coleções e tipos de informação</h2><p className="method-section-intro">O tipo de informação determina a coleção do material.</p></div></div>
            <div className="method-collection-grid">
              {METHODOLOGY_COLLECTIONS.map((collection) => {
                const Icon = COLLECTION_ICONS[collection.name] ?? FiBookOpen;
                return <article className="method-collection" key={collection.name} data-collection={collection.name}>
                  <Icon className="method-collection-icon" aria-hidden="true" />
                  <h3>{collection.name}</h3>
                  <p>{collection.types.join(", ")}.</p>
                  <Link href={`/acervo?${new URLSearchParams({ colecao: collection.name })}`} aria-label={`Consultar coleção: ${collection.name}`}>Consultar coleção <FiArrowRight aria-hidden="true" /></Link>
                </article>;
              })}
            </div>
            <p className="method-collection-note"><FiFileText aria-hidden="true" /><span><strong>Enunciados fazem parte de Doutrina e Conteúdo Técnico.</strong> Nesta taxonomia, os enunciados de especialistas são conteúdos de interpretação e orientação, não documentos normativos ou decisões de Jurisprudência.</span></p>
          </section>

          <div className="method-more">
            <details id="hierarquia"><summary><span><strong>A relação entre os campos</strong><span>Categoria, desdobramentos e natureza do objeto</span></span><FiChevronDown aria-hidden="true" /></summary><div className="method-more-body">
              <p>A hierarquia está em <strong>Categoria → Subcategoria → Microcategoria</strong>. Cada desdobramento pertence ao nível anterior. Coleção, assunto e natureza acrescentam informações complementares.</p>
              <ol className="method-tree" aria-label="Relação entre os níveis"><li><span>Categoria</span><strong>Etapa da contratação</strong></li><li><span>Subcategoria</span><strong>Tópico específico</strong></li><li><span>Microcategoria</span><strong>Modalidade, regime ou hipótese</strong></li></ol>
              <h3>Natureza: o objeto da contratação</h3><p>Material, Serviços, Obras e Serviços de Engenharia ou Tecnologia da Informação e Comunicação (TIC). A natureza identifica o objeto contratado, enquanto o assunto identifica o tema do conteúdo.</p>
            </div></details>
            <details id="exemplos"><summary><span><strong>Exemplos de classificação</strong><span>Aplicação dos conceitos a materiais ilustrativos</span></span><FiChevronDown aria-hidden="true" /></summary><div className="method-more-body method-examples">
              {CLASSIFICATION_EXAMPLES.map((example, index) => <article className="method-example" key={example.title}><p className="method-section-number">Exemplo 0{index + 1}</p><h3>{example.title}</h3><p>{example.intro}</p><dl>{CLASSIFICATION_FIELDS.map((field, fieldIndex) => <div key={field.id}><dt>{field.name}</dt><dd>{example.values[fieldIndex]}</dd></div>)}</dl><p className="method-example-note">{example.note}</p></article>)}
            </div></details>
          </div>

    </MethodologyPage>
  );
}
