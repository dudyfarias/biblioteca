import type { Metadata } from "next";
import { FiChevronDown } from "react-icons/fi";
import { ClassificationTrail } from "@/components/classification-trail";
import { MethodologyPage } from "@/components/methodology-page";
import { CLASSIFICATION_EXAMPLES, CLASSIFICATION_FIELDS, METHODOLOGY_COLLECTIONS } from "@/lib/metodologia";

export const metadata: Metadata = {
  title: "Conceitos e coleções | Metodologia | Biblioteca Digital de Logística Pública",
  description: "Entenda os seis campos da classificação, as coleções e os tipos de informação da Biblioteca Digital de Logística Pública.",
};

export default function MetodologiaPage() {
  return (
    <MethodologyPage
      title="Conceitos e coleções"
      description="Cada material é organizado pela sua forma, pela etapa da contratação e pelo tema que aborda."
      activePath="/metodologia"
      introduction={<p className="method-rule"><strong>Coleção, categoria e assunto são obrigatórios.</strong> Subcategoria, microcategoria e natureza são preenchidas, se aplicável.</p>}
    >
          <ClassificationTrail />

          <div className="method-more">
            <details id="colecoes" open>
              <summary><span><strong>Coleções e tipos de informação</strong><span>O tipo de informação determina a coleção do material</span></span><FiChevronDown aria-hidden="true" /></summary>
              <div className="method-more-body">
                <dl className="method-collection-types">
                  {METHODOLOGY_COLLECTIONS.map((collection) => (
                    <div key={collection.name}>
                      <dt>{collection.name}</dt>
                      <dd>{collection.types.join(", ")}.</dd>
                    </div>
                  ))}
                </dl>
                <p className="method-collection-note"><strong>Enunciados em Doutrina e Conteúdo Técnico.</strong> Nesta taxonomia, os enunciados de especialistas são conteúdos de interpretação e orientação, não documentos normativos ou decisões de Jurisprudência.</p>
              </div>
            </details>
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
