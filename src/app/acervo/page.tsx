"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaSort, FaTimes } from "react-icons/fa";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb } from "@/components/breadcrumb";
import { DocCard } from "@/components/doc-card";
import { Pagination } from "@/components/pagination";
import {
  SAMPLE_DOCS,
  ASSUNTOS,
  CATEGORIAS,
  COMPLEXIDADES,
  COLECOES,
  filterDocuments,
} from "@/lib/data";

const COLECAO_KEYS = ["Todos", ...Object.keys(COLECOES)];
const COMPLEXIDADE_OPTS = ["Todos", ...COMPLEXIDADES];
const ACESSO_OPTS = ["Todos", "Aberto", "Restrito"];

function RadioOpt({
  value,
  current,
  onChange,
  label,
}: {
  value: string;
  current: string;
  onChange: (v: string) => void;
  label?: string;
}) {
  const active = current === value;
  return (
    <button
      onClick={() => onChange(value)}
      className={`flex items-center gap-2 py-[5px] cursor-pointer text-xs bg-transparent border-none text-left w-full font-sans ${
        active ? "text-gov-red-700 font-semibold" : "text-slate-700"
      }`}
    >
      <div
        className={`w-[13px] h-[13px] rounded-full border-2 shrink-0 ${
          active ? "border-gov-red-700 bg-gov-red-700" : "border-slate-300 bg-white"
        }`}
      />
      {label ?? value}
    </button>
  );
}

function SideSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-100 rounded p-3.5 mb-3">
      <div className="text-[10px] font-bold text-gov-red-700 uppercase tracking-wider mb-2.5">
        {label}
      </div>
      {children}
    </div>
  );
}

export default function AcervoPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(1);
  const [filterColecao, setFilterColecao] = useState("Todos");
  const [filterAssunto, setFilterAssunto] = useState("Todos");
  const [filterCategoria, setFilterCategoria] = useState("Todos");
  const [filterComplexidade, setFilterComplexidade] = useState("Todos");
  const [filterAcesso, setFilterAcesso] = useState("Todos");

  const filtered = useMemo(
    () =>
      filterDocuments(SAMPLE_DOCS, {
        query,
        colecao: filterColecao,
        assunto: filterAssunto,
        categoria: filterCategoria,
        complexidade: filterComplexidade,
        acesso: filterAcesso,
      }),
    [query, filterColecao, filterAssunto, filterCategoria, filterComplexidade, filterAcesso],
  );

  const hasFilters =
    filterColecao !== "Todos" ||
    filterAssunto !== "Todos" ||
    filterCategoria !== "Todos" ||
    filterComplexidade !== "Todos" ||
    filterAcesso !== "Todos";

  const clearFilters = () => {
    setFilterColecao("Todos");
    setFilterAssunto("Todos");
    setFilterCategoria("Todos");
    setFilterComplexidade("Todos");
    setFilterAcesso("Todos");
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / 10));
  const paged = filtered.slice((page - 1) * 10, page * 10);

  return (
    <div className="min-h-screen flex flex-col bg-off-white font-sans">
      <GovBar />
      <Header />

      {/* Search header */}
      <div className="bg-slate-800 py-4 px-6">
        <div className="max-w-[1200px] mx-auto">
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

      <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Acervo" }]} />

      <div className="max-w-[1200px] mx-auto py-5 px-6 flex gap-5 items-start w-full">
        {/* Sidebar filtros */}
        <div className="w-[220px] shrink-0 hidden md:block">
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="w-full bg-gov-red-100 text-gov-red-700 border border-[#FBBFC8] rounded py-[7px] text-xs font-semibold cursor-pointer mb-2.5 font-sans flex items-center justify-center gap-1"
            >
              <FaTimes /> Limpar filtros
            </button>
          )}

          <SideSection label="Colecao">
            {COLECAO_KEYS.map((c) => (
              <RadioOpt key={c} value={c} current={filterColecao} onChange={setFilterColecao} />
            ))}
          </SideSection>

          <SideSection label="Assunto">
            {["Todos", ...ASSUNTOS.slice(0, 6)].map((a) => (
              <RadioOpt key={a} value={a} current={filterAssunto} onChange={setFilterAssunto} />
            ))}
          </SideSection>

          <SideSection label="Categoria">
            {["Todos", ...CATEGORIAS.slice(0, 5)].map((c) => (
              <RadioOpt key={c} value={c} current={filterCategoria} onChange={setFilterCategoria} />
            ))}
          </SideSection>

          <SideSection label="Complexidade">
            {COMPLEXIDADE_OPTS.map((c) => (
              <RadioOpt
                key={c}
                value={c}
                current={filterComplexidade}
                onChange={setFilterComplexidade}
              />
            ))}
          </SideSection>

          <SideSection label="Acesso">
            {ACESSO_OPTS.map((a) => (
              <RadioOpt key={a} value={a} current={filterAcesso} onChange={setFilterAcesso} />
            ))}
          </SideSection>
        </div>

        {/* Resultados */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-3.5">
            <div className="text-[13px] text-slate-500">
              <strong className="text-slate-800">{filtered.length}</strong>{" "}
              resultado{filtered.length !== 1 ? "s" : ""}
              {query && (
                <span>
                  {" "}
                  para &quot;<strong>{query}</strong>&quot;
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <FaSort />
              <select className="border border-slate-300 rounded py-1 px-2 text-xs font-sans text-slate-800">
                <option>Mais recente</option>
                <option>Relevancia</option>
                <option>Titulo A–Z</option>
              </select>
            </div>
          </div>

          {paged.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded bg-white">
              <FaSearch className="text-4xl text-slate-300 mx-auto mb-3" />
              <div className="text-sm text-slate-500">
                Nenhum documento encontrado. Tente outros filtros ou termos.
              </div>
            </div>
          ) : (
            <div className="grid gap-2.5">
              {paged.map((doc) => (
                <DocCard key={doc.id} doc={doc} />
              ))}
            </div>
          )}

          <div className="mt-5">
            <Pagination current={page} total={totalPages} onChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
