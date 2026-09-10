"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const sections = [
  { id: "trilha", label: "Exemplo interativo" },
  { id: "assuntos", label: "Os 14 assuntos" },
  { id: "duvidas", label: "Perguntas frequentes" },
];

export function MethodologyNavigation() {
  const [active, setActive] = useState("trilha");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = Math.max(120, (navRef.current?.getBoundingClientRect().bottom ?? 138) + 40);
        let current = sections[0].id;
        for (const section of sections) {
          if ((document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = section.id;
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav ref={navRef} className="method-jumpnav" aria-label="Nesta página">
      <div className="method-container">
        {sections.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}
        <Link className="method-jump-acervo" href="/acervo">Consultar acervo <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </nav>
  );
}
