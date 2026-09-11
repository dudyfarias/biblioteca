import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { MethodologyNavigation } from "@/components/methodology-navigation";
import "@/app/metodologia/metodologia.css";

export function MethodologyPage({
  title,
  description,
  activePath,
  introduction,
  children,
}: {
  title: string;
  description: string;
  activePath: string;
  introduction?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sp-white text-sp-black">
      <a className="method-skip" href="#conteudo-metodologia">Ir para o conteúdo</a>
      <GovBar />
      <Header />
      <Breadcrumb items={[
        { label: "Início", href: "/" },
        { label: "Metodologia", href: "/metodologia" },
        { label: title },
      ]} />
      <main id="conteudo-metodologia" className="method-page" tabIndex={-1}>
        <section className="method-intro" aria-labelledby="method-title">
          <div className="method-container">
            <p className="method-eyebrow"><FiBookOpen aria-hidden="true" /> Metodologia de classificação</p>
            <h1 id="method-title">{title}</h1>
            <p className="method-lead">{description}</p>
            {introduction}
          </div>
        </section>

        <MethodologyNavigation activePath={activePath} />

        <div className="method-container method-content">
          {children}
          <div className="method-next">
            <div>
              <h2>Encontre o conhecimento que você precisa.</h2>
              <p>Explore as coleções e os temas da biblioteca.</p>
            </div>
            <Link className="method-cta" href="/acervo">Explorar o acervo <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
