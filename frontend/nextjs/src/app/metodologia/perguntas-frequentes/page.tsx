import type { Metadata } from "next";
import { FiChevronDown } from "react-icons/fi";
import { MethodologyPage } from "@/components/methodology-page";

export const metadata: Metadata = {
  title: "Perguntas frequentes | Metodologia | Biblioteca Digital de Logística Pública",
  description: "Tire dúvidas sobre os campos obrigatórios, a hierarquia de classificação e a combinação dos filtros da biblioteca.",
};

export default function MethodologyQuestionsPage() {
  return (
    <MethodologyPage
      title="Perguntas frequentes"
      description="Esclareça suas dúvidas sobre a classificação dos materiais e a consulta ao acervo."
      activePath="/metodologia/perguntas-frequentes"
    >
      <section id="duvidas" className="method-section method-faq-section" aria-labelledby="duvidas-title">
        <div>
          <p className="method-section-number">Dúvidas sobre a biblioteca</p>
          <h2 id="duvidas-title">Para facilitar sua consulta</h2>
        </div>
        <div className="method-faq">
          <details>
            <summary>Preciso preencher todos os filtros para pesquisar?<FiChevronDown aria-hidden="true" /></summary>
            <p>Não. A obrigatoriedade se refere à classificação dos documentos na biblioteca. Na consulta, você pode começar com uma palavra ou combinar os filtros úteis à sua pesquisa.</p>
          </details>
          <details>
            <summary>O que significa “se aplicável”?<FiChevronDown aria-hidden="true" /></summary>
            <p>O campo é preenchido quando existe um recorte aplicável ao material. Subcategoria e microcategoria dependem da árvore de categorias. Natureza depende do objeto contratado que o conteúdo aborda. Um campo que não se aplica não torna a classificação incompleta.</p>
          </details>
          <details>
            <summary>Categoria e assunto são a mesma coisa?<FiChevronDown aria-hidden="true" /></summary>
            <p>Categoria situa o material no ciclo da contratação. Assunto indica seu tema. Um estudo em Seleção do Fornecedor pode tratar de sustentabilidade, governança ou aspectos jurídicos, por exemplo.</p>
          </details>
          <details>
            <summary>Posso combinar assunto e natureza?<FiChevronDown aria-hidden="true" /></summary>
            <p>Sim. Em uma publicação sobre transparência na contratação de serviços, o assunto é Transparência e a natureza é Serviços.</p>
          </details>
        </div>
      </section>
    </MethodologyPage>
  );
}
