"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaBalanceScale,
  FaLeaf,
  FaChevronRight,
  FaArrowRight,
  FaPlusCircle,
} from "react-icons/fa";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { Tag } from "@/components/tag";
import { DocCard } from "@/components/doc-card";
import { SAMPLE_DOCS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  "graduation-cap": <FaGraduationCap className="text-xl" />,
  chalkboard: <FaChalkboardTeacher className="text-xl" />,
  book: <FaBook className="text-xl" />,
  calendar: <FaCalendarAlt className="text-xl" />,
  scale: <FaBalanceScale className="text-xl" />,
  leaf: <FaLeaf className="text-xl" />,
};

const CATEGORIES = [
  { icon: "graduation-cap", label: "Trabalhos Academicos", count: 312, color: "#4A148C", bg: "#EDE7F6" },
  { icon: "chalkboard", label: "Materiais Pedagogicos", count: 134, color: "#1B5E20", bg: "#E8F5E9" },
  { icon: "book", label: "Livros Digitais", count: 89, color: "#B00020", bg: "#FDEAED" },
  { icon: "calendar", label: "Eventos", count: 47, color: "#E65100", bg: "#FBE9E7" },
  { icon: "scale", label: "Aspectos Juridicos", count: 248, color: "#B00020", bg: "#FDEAED" },
  { icon: "leaf", label: "Sustentabilidade e ODS", count: 76, color: "#1B5E20", bg: "#E8F5E9" },
];

const QUICK_TAGS = ["Pregao eletronico", "ODS", "Contratos", "PCA", "TCE-SP", "ENAP"];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (q?: string) => {
    const searchQuery = q ?? query;
    router.push(`/acervo?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <GovBar />
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gov-red-700" />
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gov-red-700/20 border border-gov-red-700/40 rounded-full px-3.5 py-1 mb-6">
            <FaBook className="text-gov-red-500 text-[11px]" />
            <span className="text-[11px] text-[#F8899A] font-semibold tracking-wider">
              BIBLIOTECA DIGITAL DE LOGISTICA PUBLICA
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
            Conhecimento para a<br />
            <span className="text-gov-red-500">Gestao Publica</span>
          </h1>
          <p className="text-base text-white/70 leading-relaxed max-w-[560px] mx-auto mb-8">
            Acervo de trabalhos academicos, materiais pedagogicos, livros e
            documentos sobre logistica publica — organizado conforme a Lei n
            14.133/2021.
          </p>
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={() => handleSearch()}
            size="lg"
          />
          <div className="mt-4 flex gap-2 justify-center flex-wrap">
            {QUICK_TAGS.map((t) => (
              <Tag key={t} onClick={() => handleSearch(t)}>
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gov-red-700 py-3.5 px-6 flex justify-center gap-12">
        {[
          ["783", "Documentos"],
          ["4", "Colecoes"],
          ["12", "Areas Tematicas"],
          ["2001–2025", "Anos cobertos"],
        ].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="text-xl font-bold text-white">{n}</div>
            <div className="text-[11px] text-white/75">{l}</div>
          </div>
        ))}
      </div>

      {/* Colecoes */}
      <div className="bg-off-white py-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[22px] font-bold text-slate-800 mb-6">
            Explorar o Acervo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleSearch(cat.label)}
                className="bg-white border border-slate-100 rounded p-5 cursor-pointer flex items-center gap-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-gov-red-700 text-left w-full"
              >
                <div
                  className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                  style={{ background: cat.bg }}
                >
                  <span style={{ color: cat.color }}>
                    {ICON_MAP[cat.icon]}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {cat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {cat.count} documentos
                  </div>
                </div>
                <FaChevronRight className="text-slate-300 text-xs ml-auto" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Publicacoes em destaque */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-bold text-slate-800">
              Documentos em Destaque
            </h2>
            <button
              onClick={() => router.push("/acervo")}
              className="text-[13px] text-gov-red-700 font-semibold cursor-pointer bg-transparent border-none flex items-center gap-1"
            >
              Ver acervo completo <FaArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_DOCS.slice(0, 3).map((doc) => (
              <DocCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="bg-slate-800 py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
          <div className="text-lg font-bold text-white mb-1">
            Contribua com o acervo
          </div>
          <div className="text-[13px] text-white/65">
            Pesquisadores e gestores publicos podem submeter artigos e documentos.
          </div>
        </div>
        <button className="bg-gov-red-700 text-white border-none rounded px-7 py-3 text-sm font-semibold cursor-pointer font-sans shrink-0 transition-colors hover:bg-gov-red-800 flex items-center gap-2">
          <FaPlusCircle />
          Submeter documento
        </button>
      </div>

      <Footer />
    </div>
  );
}
