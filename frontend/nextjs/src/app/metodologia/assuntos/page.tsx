import type { Metadata } from "next";
import { FiChevronDown } from "react-icons/fi";
import { MethodologyPage } from "@/components/methodology-page";
import { MethodologySubjects } from "@/components/methodology-subjects";

export const metadata: Metadata = {
  title: "Assuntos | Metodologia | Biblioteca Digital de Logística Pública",
  description: "Conheça os assuntos da biblioteca, os critérios de classificação e como diferenciar temas próximos.",
};

export default function MethodologySubjectsPage() {
  return (
    <MethodologyPage
      title="Assuntos"
      description="Conheça os temas do acervo e os critérios que orientam a classificação de cada material."
      activePath="/metodologia/assuntos"
    >
      <section id="assuntos" className="method-section" aria-labelledby="assuntos-title">
        <div className="method-section-heading">
          <div>
            <p className="method-section-number">Critérios de classificação</p>
            <h2 id="assuntos-title">O tema central do conteúdo</h2>
          </div>
          <p>Assuntos com critérios próprios.<br />Conheça o foco de cada um.</p>
        </div>
        <MethodologySubjects />
        <details className="method-comparisons">
          <summary>Como diferenciar assuntos próximos<FiChevronDown aria-hidden="true" /></summary>
          <dl>
            <div>
              <dt>Inovação e Tecnologia / Uso de Sistemas</dt>
              <dd>O primeiro trata de transformação e novas soluções. O segundo trata da operação de sistemas e plataformas já adotados.</dd>
            </div>
            <div>
              <dt>Governança / Integridade</dt>
              <dd>Governança aborda papéis, decisões e a estrutura de gestão. Integridade aborda conduta ética, conflitos de interesse e compliance.</dd>
            </div>
            <div>
              <dt>Controle, Auditoria e Combate à Corrupção / Sanções Administrativas</dt>
              <dd>O primeiro tem foco em fiscalização e auditoria. Sanções Administrativas tem foco nas penalidades e nos processos sancionatórios.</dd>
            </div>
          </dl>
        </details>
        <p className="method-source">Referência: Caracterização dos Assuntos da Taxonomia BDLP.</p>
      </section>
    </MethodologyPage>
  );
}
