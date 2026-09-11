import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const pages = [
  { href: "/metodologia", label: "Conceitos e coleções" },
  { href: "/metodologia/assuntos", label: "Assuntos" },
  { href: "/metodologia/perguntas-frequentes", label: "Perguntas frequentes" },
];

export function MethodologyNavigation({ activePath }: { activePath: string }) {
  return (
    <nav className="method-jumpnav" aria-label="Metodologia">
      <div className="method-container">
        {pages.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={activePath === href ? "page" : undefined}>
            {label}
          </Link>
        ))}
        <Link className="method-jump-acervo" href="/acervo">Consultar acervo <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </nav>
  );
}
