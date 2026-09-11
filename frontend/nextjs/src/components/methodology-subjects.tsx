"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FiPlus, FiSearch, FiX } from "react-icons/fi";
import { METHODOLOGY_SUBJECTS } from "@/lib/metodologia";

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();
}

export function MethodologySubjects() {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRevealedRef = useRef<HTMLElement>(null);
  const focusRevealed = useRef(false);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const searchId = `${id}-search`;
  const resultsId = `${id}-results`;
  const countId = `${id}-count`;
  const normalizedQuery = normalizeSearch(query);
  const isSearching = query !== "";
  const subjects = METHODOLOGY_SUBJECTS
    .map((subject, index) => ({ subject, index }))
    .filter(({ subject }) =>
      [subject.name, subject.summary, subject.description, subject.focus].some((value) =>
        normalizeSearch(value).includes(normalizedQuery),
      ),
    );
  const total = METHODOLOGY_SUBJECTS.length;
  const visibleSubjects = isSearching || expanded ? subjects : subjects.slice(0, 6);

  useEffect(() => {
    if (expanded && focusRevealed.current) {
      firstRevealedRef.current?.focus();
      focusRevealed.current = false;
    }
  }, [expanded]);

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div className="method-subject-browser">
      <div className="method-subject-toolbar">
        <div className="method-subject-control">
          <label className="method-subject-label" htmlFor={searchId}>Buscar um assunto</label>
          <div className="method-subject-search">
            <FiSearch className="method-subject-search-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              id={searchId}
              className="method-subject-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-controls={resultsId}
              aria-describedby={countId}
            />
            {query !== "" && (
              <button
                className="method-subject-clear"
                type="button"
                onClick={clearSearch}
                aria-label="Limpar busca"
                title="Limpar busca"
              >
                <FiX className="method-subject-clear-icon" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <p id={countId} className="method-subject-count" role="status" aria-live="polite" aria-atomic="true">
          {isSearching || !expanded ? `${visibleSubjects.length} de ${total} assuntos` : `${total} assuntos`}
        </p>
      </div>

      <div id={resultsId} className="method-subjects">
        {visibleSubjects.map(({ subject, index }) => (
          <details className="method-subject" key={subject.name}>
            <summary ref={index === 6 ? firstRevealedRef : undefined}>
              <span className="method-subject-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="method-subject-heading">
                <strong className="method-subject-name">{subject.name}</strong>
                <span className="method-subject-summary">{subject.summary}</span>
              </span>
              <FiPlus className="method-subject-indicator" aria-hidden="true" />
            </summary>
            <div className="method-subject-body">
              <p>{subject.description}</p>
              <p><strong>Foco da classificação:</strong> {subject.focus}</p>
            </div>
          </details>
        ))}
        {subjects.length === 0 && (
          <div className="method-subject-empty">
            <p>Nenhum assunto encontrado.</p>
            <button className="method-subject-reset" type="button" onClick={clearSearch}>Limpar busca</button>
          </div>
        )}
      </div>
      {!isSearching && total > 6 && (
        <button
          className="method-subject-more"
          type="button"
          aria-expanded={expanded}
          aria-controls={resultsId}
          onClick={(event) => {
            focusRevealed.current = !expanded && event.detail === 0;
            setExpanded((value) => !value);
          }}
        >
          {expanded ? "Mostrar menos" : "Ver todos os assuntos"}
        </button>
      )}
    </div>
  );
}
