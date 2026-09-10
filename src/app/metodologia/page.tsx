import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiChevronDown } from "react-icons/fi";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { ClassificationTrail } from "@/components/classification-trail";
import { MethodologySubjects } from "@/components/methodology-subjects";
import { MethodologyNavigation } from "@/components/methodology-navigation";
import { CLASSIFICATION_EXAMPLES, CLASSIFICATION_FIELDS } from "@/lib/metodologia";
import "./metodologia.css";

export const metadata: Metadata = {
  title: "Metodologia | Biblioteca Digital de Logística Pública",
  description: "Entenda os seis campos da classificação, os três requisitos obrigatórios e os 14 assuntos da Biblioteca Digital de Logística Pública.",
};

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-sp-white text-sp-black">
      <a className="method-skip" href="#conteudo-metodologia">Ir para o conteúdo</a>
      <GovBar /><Header />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Metodologia" }]} />
      <main id="conteudo-metodologia" className="method-page" tabIndex={-1}>
        <section className="method-intro" aria-labelledby="method-title"><div className="method-container">
          <p className="method-eyebrow"><FiBookOpen aria-hidden="true" /> Organização do conhecimento</p>
          <h1 id="method-title">Metodologia de classificação</h1>
          <p className="method-lead">Cada material é organizado pela sua forma, pela etapa da contratação e pelo tema que aborda.</p>
          <p className="method-rule"><strong>Coleção, categoria e assunto são obrigatórios.</strong> Subcategoria, microcategoria e natureza são preenchidas quando couber.</p>
        </div></section>

        <MethodologyNavigation />

        <div className="method-container method-content">
          <ClassificationTrail />

          <div className="method-more">
            <details id="hierarquia"><summary><span><strong>A relação entre os campos</strong><span>Coleções, hierarquia e natureza do objeto</span></span><FiChevronDown aria-hidden="true" /></summary><div className="method-more-body">
              <p>A hierarquia está em <strong>Categoria → Subcategoria → Microcategoria</strong>. Cada desdobramento pertence ao nível anterior. Coleção, assunto e natureza acrescentam informações complementares.</p>
              <ol className="method-tree" aria-label="Exemplo de hierarquia"><li><span>Categoria</span><strong>Seleção do Fornecedor</strong></li><li><span>Subcategoria</span><strong>Licitação</strong></li><li><span>Microcategoria</span><strong>Pregão</strong></li></ol>
              <h3>Coleção: definida pelo tipo de informação</h3><dl className="method-collections"><div><dt>Jurisprudência</dt><dd>Boletins e documentos normativos.</dd></div><div><dt>Trabalhos Acadêmicos</dt><dd>Dissertações, monografias, TCCs e teses.</dd></div><div><dt>Doutrina e Conteúdo Técnico</dt><dd>Artigos, livros digitais, notas técnicas, relatórios, resumos, resumos expandidos e textos de discussão.</dd></div><div><dt>Instrução e Capacitação</dt><dd>Apostilas, cursos, guias, manuais, slides, tutoriais e vídeos.</dd></div></dl>
              <h3>Natureza: o objeto da contratação</h3><p>Material, Serviços, Obras e Serviços de Engenharia ou Tecnologia da Informação e Comunicação (TIC). Um estudo sobre sustentabilidade na aquisição de computadores pode ter <strong>Assunto: Sustentabilidade e ODS</strong> e <strong>Natureza: TIC</strong>.</p>
            </div></details>
            <details id="exemplos"><summary><span><strong>Mais exemplos de classificação</strong><span>Quando todos os campos se aplicam e quando alguns não são necessários</span></span><FiChevronDown aria-hidden="true" /></summary><div className="method-more-body method-examples">
              {CLASSIFICATION_EXAMPLES.map((example, index) => <article className="method-example" key={example.title}><p className="method-section-number">Exemplo 0{index + 1}</p><h3>{example.title}</h3><p>{example.intro}</p><dl>{CLASSIFICATION_FIELDS.map((field, fieldIndex) => <div key={field.id}><dt>{field.name}</dt><dd>{example.values[fieldIndex]}</dd></div>)}</dl><p className="method-example-note">{example.note}</p></article>)}
            </div></details>
          </div>

          <section id="assuntos" className="method-section" aria-labelledby="assuntos-title"><div className="method-section-heading"><div><p className="method-section-number">02 / Assuntos</p><h2 id="assuntos-title">O tema central do conteúdo</h2></div><p>14 assuntos com critérios próprios.<br />Conheça o foco de cada um.</p></div>
            <MethodologySubjects />
            <details className="method-comparisons"><summary>Como diferenciar assuntos próximos<FiChevronDown aria-hidden="true" /></summary><dl><div><dt>Inovação e Tecnologia / Uso de Sistemas</dt><dd>O primeiro trata de transformação e novas soluções. O segundo trata da operação de sistemas e plataformas já adotados.</dd></div><div><dt>Governança / Integridade</dt><dd>Governança aborda papéis, decisões e a estrutura de gestão. Integridade aborda conduta ética, conflitos de interesse e compliance.</dd></div><div><dt>Controle, Auditoria e Combate à Corrupção / Sanções Administrativas</dt><dd>O primeiro tem foco em fiscalização e auditoria. Sanções Administrativas tem foco nas penalidades e nos processos sancionatórios.</dd></div></dl></details>
            <p className="method-source">Referência: Caracterização dos Assuntos da Taxonomia BDLP.</p>
          </section>

          <section id="duvidas" className="method-section method-faq-section" aria-labelledby="duvidas-title"><div><p className="method-section-number">03 / Perguntas frequentes</p><h2 id="duvidas-title">Para facilitar sua consulta</h2></div><div className="method-faq">
            <details><summary>Preciso preencher todos os filtros para pesquisar?<FiChevronDown aria-hidden="true" /></summary><p>Não. A obrigatoriedade se refere à classificação dos documentos na biblioteca. Na consulta, você pode começar com uma palavra ou combinar os filtros úteis à sua pesquisa.</p></details>
            <details><summary>O que significa “quando couber”?<FiChevronDown aria-hidden="true" /></summary><p>O campo é preenchido quando existe um recorte aplicável ao material. Subcategoria e microcategoria dependem da árvore de categorias. Natureza depende do objeto contratado que o conteúdo aborda. Um campo que não se aplica não torna a classificação incompleta.</p></details>
            <details><summary>Categoria e assunto são a mesma coisa?<FiChevronDown aria-hidden="true" /></summary><p>Categoria situa o material no ciclo da contratação. Assunto indica seu tema. Um estudo em Seleção do Fornecedor pode tratar de sustentabilidade, governança ou aspectos jurídicos, por exemplo.</p></details>
            <details><summary>Posso combinar assunto e natureza?<FiChevronDown aria-hidden="true" /></summary><p>Sim. Em uma publicação sobre transparência na contratação de serviços, o assunto é Transparência e a natureza é Serviços.</p></details>
          </div></section>
          <div className="method-next"><div><h2>Encontre o conhecimento que você precisa.</h2><p>Explore as coleções e os temas da biblioteca.</p></div><Link className="method-cta" href="/acervo">Explorar o acervo <FiArrowRight aria-hidden="true" /></Link></div>
        </div>
      </main><Footer />
    </div>
  );
}
