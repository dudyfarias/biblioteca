"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronDown, FiPlus } from "react-icons/fi";
import { CLASSIFICATION_FIELDS } from "@/lib/metodologia";
import { FIELD_PRESENTATION } from "@/components/methodology-icons";

export function ClassificationTrail() {
  const [selected, setSelected] = useState<number | null>(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 721px)");
    const restoreSelection = (event: MediaQueryListEvent) => {
      if (event.matches) setSelected((current) => current ?? 0);
    };
    desktop.addEventListener("change", restoreSelection);
    return () => desktop.removeEventListener("change", restoreSelection);
  }, []);

  return (
    <section id="trilha" className="method-section" aria-labelledby="trilha-title">
      <div className="method-section-heading"><div><p className="method-section-number">Os seis campos</p><h2 id="trilha-title">Campos que se completam</h2></div><ul className="classification-legend" aria-label="Legenda da classificação"><li><span className="classification-dot required" aria-hidden="true" />Obrigatório</li><li><span className="classification-dot conditional" aria-hidden="true" />Se aplicável</li></ul></div>
      <p className="classification-intro">Cada campo responde a uma pergunta e acrescenta uma dimensão à classificação.</p>
      <div className="classification-explorer" data-classification-trail>
        <ol className="classification-steps" aria-label="Campos da classificação">
          {CLASSIFICATION_FIELDS.map((field, index) => {
            const { Icon, caption } = FIELD_PRESENTATION[field.id];
            return (
            <li key={field.id} data-trail-field={field.id} className={`classification-step ${index === selected ? "is-selected" : ""}`}>
              {index > 0 && <span className="classification-connector" aria-hidden="true">{index === 2 || index === 3 ? <FiArrowRight /> : <FiPlus />}</span>}
              <button type="button" className={`classification-node ${field.required ? "is-required" : "is-conditional"}`} aria-pressed={index === selected} aria-expanded={index === selected} aria-controls={`classificacao-${field.id} classificacao-mobile-${field.id}`} onPointerEnter={(event) => { if (event.pointerType === "mouse" && window.matchMedia("(min-width: 721px)").matches && !event.currentTarget.closest("ol")?.querySelector(":focus-visible")) setSelected(index); }} onFocus={(event) => { if (window.matchMedia("(min-width: 721px)").matches && event.currentTarget.matches(":focus-visible")) setSelected(index); }} onClick={() => { if (window.matchMedia("(max-width: 720px)").matches) setSelected((current) => current === index ? null : index); else setSelected(index); }} onKeyDown={(event) => {
                if (!window.matchMedia("(min-width: 721px)").matches) return;
                const last = CLASSIFICATION_FIELDS.length - 1;
                const next = event.key === "ArrowRight" ? Math.min(index + 1, last) : event.key === "ArrowLeft" ? Math.max(index - 1, 0) : event.key === "Home" ? 0 : event.key === "End" ? last : null;
                if (next === null) return;
                event.preventDefault();
                event.currentTarget.closest("ol")?.querySelectorAll<HTMLButtonElement>(".classification-node")[next]?.focus();
              }}>
                <span className="classification-node-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon className="classification-icon" aria-hidden="true" /></span>
                <strong>{field.name}</strong><span className="classification-value">{field.summary}</span><span className="classification-caption">{caption}</span><span className="classification-requirement">{field.required ? "Obrigatório" : "Se aplicável"}</span><FiChevronDown className="classification-disclosure" aria-hidden="true" />
              </button>
              <div id={`classificacao-mobile-${field.id}`} className="classification-mobile-detail" hidden={index !== selected}><p className="classification-question">{field.question}</p><p>{field.description}</p></div>
            </li>
          ); })}
        </ol>
        <p className="method-sr-only" role="status">{selected === null ? "Explicação recolhida" : `Campo selecionado: ${CLASSIFICATION_FIELDS[selected].name}`}</p>
        <div className="classification-inspector">
          {CLASSIFICATION_FIELDS.map((field, index) => (
            <div key={field.id} id={`classificacao-${field.id}`} className="classification-detail" hidden={index !== (selected ?? 0)}>
              <div className="classification-detail-heading"><span className="classification-detail-label">0{index + 1} / {field.name}</span><h3>{field.question}</h3><span className="classification-detail-status"><span className={`classification-dot ${field.required ? "required" : "conditional"}`} aria-hidden="true" />{field.required ? "Obrigatório" : "Se aplicável"}</span></div>
              <div className="classification-detail-copy"><p>{field.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
