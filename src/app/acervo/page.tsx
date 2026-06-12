"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiCheck, FiFilter, FiSearch, FiSliders, FiX } from "react-icons/fi";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb } from "@/components/breadcrumb";
import { DocCard } from "@/components/doc-card";
import { Pagination } from "@/components/pagination";
import {
  SAMPLE_DOCS,
  ASSUNTOS,
  CATEGORIAS,
  getMicrocategoriaOptions,
  getSubcategoriaOptions,
  COLECOES,
  TIPOS_INFORMACAO_POR_COLECAO,
  filterDocuments,
} from "@/lib/data";

const COLECAO_KEYS = Object.keys(COLECOES);

function toggleValue(values: string[], value: string): string[] {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

function ToggleOpt({
  value,
  selected,
  onToggle,
  label,
}: {
  value: string;
  selected: boolean;
  onToggle: (value: string) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(value)}
      className={`flex min-h-8 w-full items-center gap-2 rounded-md px-2 text-left text-[12px] transition-colors ${
        selected
          ? "bg-gov-red-100 text-sp-red sp-subtitle"
          : "text-sp-black/70 hover:bg-sp-gray-light hover:text-sp-black"
      }`}
    >
      <span
        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border ${
          selected ? "border-sp-red bg-sp-red text-sp-white" : "border-sp-gray-medium bg-sp-white"
        }`}
        aria-hidden="true"
      >
        {selected && <FiCheck className="text-[10px]" />}
      </span>
      {label ?? value}
    </button>
  );
}

function SideSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-sp-gray-medium/60 py-4 last:border-b-0">
      <h2 className="sp-subtitle mb-2 text-[12px] text-sp-black">{label}</h2>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

function FilterGroup({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      {...(defaultOpen ? { open: true } : {})}
      className="rounded-md border border-sp-gray-medium/70 bg-sp-white"
    >
      <summary className="cursor-pointer px-3 py-2 text-[12px] text-sp-black sp-subtitle">
        {title}
      </summary>
      <div className="space-y-1 border-t border-sp-gray-medium/60 p-2">{children}</div>
    </details>
  );
}

export default function AcervoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-sp-gray-light" />}>
      <AcervoContent />
    </Suspense>
  );
}

function AcervoContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(1);
  const [filterColecoes, setFilterColecoes] = useState<string[]>([]);
  const [filterTiposInfo, setFilterTiposInfo] = useState<string[]>([]);
  const [filterAssuntos, setFilterAssuntos] = useState<string[]>([]);
  const [filterCategorias, setFilterCategorias] = useState<string[]>([]);
  const [filterSubcategorias, setFilterSubcategorias] = useState<string[]>([]);
  const [filterMicrocategorias, setFilterMicrocategorias] = useState<string[]>([]);

  const subcategoriaGroups = useMemo(
    () =>
      filterCategorias.map((categoria) => ({
        categoria,
        subcategorias: getSubcategoriaOptions(categoria),
      })),
    [filterCategorias],
  );

  const microcategoriaGroups = useMemo(
    () =>
      filterCategorias.flatMap((categoria) =>
        filterSubcategorias
          .filter((subcategoria) => getSubcategoriaOptions(categoria).includes(subcategoria))
          .map((subcategoria) => ({
            categoria,
            subcategoria,
            microcategorias: getMicrocategoriaOptions(categoria, subcategoria),
          }))
          .filter((group) => group.microcategorias.length > 0),
      ),
    [filterCategorias, filterSubcategorias],
  );

  const filtered = useMemo(
    () =>
      filterDocuments(SAMPLE_DOCS, {
        query,
        colecao: filterColecoes,
        tipoInfo: filterTiposInfo,
        assunto: filterAssuntos,
        categoria: filterCategorias,
        subcategoria: filterSubcategorias,
        microcategoria: filterMicrocategorias,
      }),
    [
      query,
      filterColecoes,
      filterTiposInfo,
      filterAssuntos,
      filterCategorias,
      filterSubcategorias,
      filterMicrocategorias,
    ],
  );

  const activeFilterCount =
    filterColecoes.length +
    filterTiposInfo.length +
    filterAssuntos.length +
    filterCategorias.length +
    filterSubcategorias.length +
    filterMicrocategorias.length;

  const hasFilters = activeFilterCount > 0;

  const clearFilters = () => {
    setFilterColecoes([]);
    setFilterTiposInfo([]);
    setFilterAssuntos([]);
    setFilterCategorias([]);
    setFilterSubcategorias([]);
    setFilterMicrocategorias([]);
    setPage(1);
  };

  const toggleColecao = (value: string) => {
    setFilterColecoes((current) => toggleValue(current, value));
    setPage(1);
  };

  const toggleTipoInfo = (value: string) => {
    setFilterTiposInfo((current) => toggleValue(current, value));
    setPage(1);
  };

  const toggleAssunto = (value: string) => {
    setFilterAssuntos((current) => toggleValue(current, value));
    setPage(1);
  };

  const toggleCategoria = (value: string) => {
    const removing = filterCategorias.includes(value);
    setFilterCategorias((current) => toggleValue(current, value));

    if (removing) {
      const subcategorias = getSubcategoriaOptions(value);
      const microcategorias = subcategorias.flatMap((subcategoria) =>
        getMicrocategoriaOptions(value, subcategoria),
      );
      setFilterSubcategorias((current) =>
        current.filter((subcategoria) => !subcategorias.includes(subcategoria)),
      );
      setFilterMicrocategorias((current) =>
        current.filter((microcategoria) => !microcategorias.includes(microcategoria)),
      );
    }

    setPage(1);
  };

  const toggleSubcategoria = (value: string) => {
    const removing = filterSubcategorias.includes(value);
    setFilterSubcategorias((current) => toggleValue(current, value));

    if (removing) {
      const microcategorias = filterCategorias.flatMap((categoria) =>
        getMicrocategoriaOptions(categoria, value),
      );
      setFilterMicrocategorias((current) =>
        current.filter((microcategoria) => !microcategorias.includes(microcategoria)),
      );
    }

    setPage(1);
  };

  const toggleMicrocategoria = (value: string) => {
    setFilterMicrocategorias((current) => toggleValue(current, value));
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / 10));
  const paged = filtered.slice((page - 1) * 10, page * 10);

  return (
    <div className="min-h-screen bg-sp-gray-light text-sp-black">
      <GovBar />
      <Header />

      <main>
        <section className="border-b border-sp-gray-medium/60 bg-sp-white">
          <div className="sp-container py-8">
            <BreadcrumbInline />
            <div className="mt-6 max-w-[760px]">
              <div>
                <div className="sp-subtitle mb-2 text-[12px] uppercase text-sp-red">Acervo</div>
                <h1 className="sp-title text-[36px] leading-tight text-sp-black md:text-[46px]">
                  Pesquisa institucional
                </h1>
                <p className="mt-3 max-w-[620px] text-[14px] leading-relaxed text-sp-black/66">
                  Consulte documentos técnicos, acadêmicos e pedagógicos sobre logística
                  pública, licitações e gestão de suprimentos.
                </p>
              </div>
              <div className="mt-6 max-w-[640px]">
                <SearchBar
                  value={query}
                  onChange={(q) => {
                    setQuery(q);
                    setPage(1);
                  }}
                  onSearch={() => setPage(1)}
                />
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Acervo" }]} />

        <section className="sp-container grid gap-6 py-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside className="sp-panel p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiSliders className="text-sp-blue" aria-hidden="true" />
                <h2 className="sp-subtitle text-[14px] text-sp-black">Filtros</h2>
              </div>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 rounded-md border border-sp-red/30 bg-gov-red-100 px-2.5 py-1.5 text-[11px] text-sp-red sp-subtitle"
                >
                  <FiX aria-hidden="true" />
                  Limpar {activeFilterCount}
                </button>
              )}
            </div>

            <SideSection label="Coleção">
              {COLECAO_KEYS.map((colecao) => (
                <ToggleOpt
                  key={colecao}
                  value={colecao}
                  selected={filterColecoes.includes(colecao)}
                  onToggle={toggleColecao}
                />
              ))}
            </SideSection>

            <SideSection label="Tipo de informação">
              <div className="space-y-2">
                {Object.entries(TIPOS_INFORMACAO_POR_COLECAO).map(([colecao, tipos]) => (
                  <FilterGroup key={colecao} title={colecao}>
                    {tipos.map((tipo) => (
                      <ToggleOpt
                        key={tipo}
                        value={tipo}
                        selected={filterTiposInfo.includes(tipo)}
                        onToggle={toggleTipoInfo}
                      />
                    ))}
                  </FilterGroup>
                ))}
              </div>
            </SideSection>

            <SideSection label="Assunto">
              {ASSUNTOS.map((assunto) => (
                <ToggleOpt
                  key={assunto}
                  value={assunto}
                  selected={filterAssuntos.includes(assunto)}
                  onToggle={toggleAssunto}
                />
              ))}
            </SideSection>

            <SideSection label="Categorias">
              {CATEGORIAS.map((categoria) => (
                <ToggleOpt
                  key={categoria}
                  value={categoria}
                  selected={filterCategorias.includes(categoria)}
                  onToggle={toggleCategoria}
                />
              ))}

              {subcategoriaGroups.length > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="sp-subtitle text-[11px] uppercase text-sp-blue">
                    Subcategorias
                  </div>
                  {subcategoriaGroups.map(({ categoria, subcategorias }) => (
                    <FilterGroup key={categoria} title={categoria} defaultOpen>
                      {subcategorias.map((subcategoria) => (
                        <ToggleOpt
                          key={`${categoria}-${subcategoria}`}
                          value={subcategoria}
                          selected={filterSubcategorias.includes(subcategoria)}
                          onToggle={toggleSubcategoria}
                        />
                      ))}
                    </FilterGroup>
                  ))}
                </div>
              )}

              {microcategoriaGroups.length > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="sp-subtitle text-[11px] uppercase text-sp-blue">
                    Microcategorias
                  </div>
                  {microcategoriaGroups.map(({ categoria, subcategoria, microcategorias }) => (
                    <FilterGroup key={`${categoria}-${subcategoria}`} title={subcategoria} defaultOpen>
                      {microcategorias.map((microcategoria) => (
                        <ToggleOpt
                          key={`${categoria}-${subcategoria}-${microcategoria}`}
                          value={microcategoria}
                          selected={filterMicrocategorias.includes(microcategoria)}
                          onToggle={toggleMicrocategoria}
                        />
                      ))}
                    </FilterGroup>
                  ))}
                </div>
              )}
            </SideSection>

          </aside>

          <div className="min-w-0">
            <div className="sp-panel mb-5 flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sp-blue/10 text-sp-blue">
                  <FiFilter aria-hidden="true" />
                </span>
                <div>
                  <div className="text-[13px] text-sp-black/62">Resultados encontrados</div>
                  <div className="sp-title text-[22px] text-sp-black">
                    {filtered.length} {filtered.length === 1 ? "documento" : "documentos"}
                  </div>
                </div>
              </div>
              <label className="flex items-center gap-2 text-[12px] text-sp-black/65">
                Ordenar por
                <select className="h-10 rounded-md border border-sp-gray-medium bg-sp-white px-3 text-[12px] text-sp-black">
                  <option>Mais recente</option>
                  <option>Relevância</option>
                  <option>Título A-Z</option>
                </select>
              </label>
            </div>

            {query && (
              <div className="mb-4 text-[13px] text-sp-black/62">
                Pesquisa por <strong className="text-sp-black">&quot;{query}&quot;</strong>
              </div>
            )}

            {paged.length === 0 ? (
              <div className="sp-panel flex min-h-[280px] flex-col items-center justify-center border-dashed p-8 text-center">
                <FiSearch className="mb-3 text-[42px] text-sp-gray-dark" aria-hidden="true" />
                <div className="sp-subtitle text-[15px] text-sp-black">Nenhum documento encontrado</div>
                <p className="mt-2 max-w-[420px] text-[13px] leading-relaxed text-sp-black/62">
                  Tente outros filtros ou termos de pesquisa para ampliar a busca.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {paged.map((doc) => (
                  <DocCard key={doc.id} doc={doc} />
                ))}
              </div>
            )}

            <div className="mt-8">
              <Pagination current={page} total={totalPages} onChange={setPage} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BreadcrumbInline() {
  return (
    <div className="text-[12px] text-sp-black/55">
      Biblioteca Digital de Logística Pública / Consulta
    </div>
  );
}
