"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiLayers,
  FiPlusCircle,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { Tag } from "@/components/tag";
import { DocCard } from "@/components/doc-card";
import { SPGeometry } from "@/components/sp-identity";
import { SAMPLE_DOCS } from "@/lib/data";

const CATEGORIES = [
  {
    icon: <FiLayers />,
    label: "Trabalhos Acadêmicos",
    count: 312,
    color: "text-sp-blue",
    bg: "bg-sp-blue/10",
  },
  {
    icon: <FiFileText />,
    label: "Materiais Pedagógicos",
    count: 134,
    color: "text-sp-green",
    bg: "bg-sp-green/10",
  },
  {
    icon: <FiBookOpen />,
    label: "Livros Digitais",
    count: 89,
    color: "text-sp-red",
    bg: "bg-gov-red-100",
  },
  {
    icon: <FiCalendar />,
    label: "Eventos",
    count: 47,
    color: "text-sp-blue-petrol",
    bg: "bg-sp-olive/10",
  },
  {
    icon: <FiShield />,
    label: "Aspectos Jurídicos",
    count: 248,
    color: "text-sp-blue-dark",
    bg: "bg-sp-blue-light/20",
  },
  {
    icon: <FiTrendingUp />,
    label: "Sustentabilidade e ODS",
    count: 76,
    color: "text-sp-green",
    bg: "bg-sp-green/10",
  },
];

const QUICK_TAGS = ["Pregão eletrônico", "ODS", "Contratos", "PCA", "TCE-SP", "ENAP"];

const STATS = [
  ["783", "Documentos catalogados"],
  ["4", "Coleções curatoriais"],
  ["12", "Áreas temáticas"],
  ["2001-2025", "Cobertura temporal"],
];

const TRENDING_DOCS = SAMPLE_DOCS.filter(
  (doc) =>
    doc.type === "artigo" &&
    (doc.assunto === "Sustentabilidade e ODS" || doc.tags.includes("Sustentabilidade")),
).slice(0, 3);

export default function HomePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (q?: string) => {
    const searchQuery = q ?? query;
    router.push(`/acervo?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-sp-white text-sp-black">
      <GovBar />
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-sp-gray-medium/60 bg-sp-gray-light">
          <div className="absolute inset-0 sp-pattern opacity-70" aria-hidden="true" />
          <div className="sp-container relative py-10 lg:py-14">
            <div className="min-w-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-sp-blue/20 bg-sp-white px-3 py-2 text-[12px] text-sp-blue sp-subtitle">
                <FiAward aria-hidden="true" />
                Plataforma oficial de conhecimento e inovação pública
              </div>
              <h1 className="sp-title max-w-[700px] text-[34px] leading-[1.08] text-sp-black md:text-[48px] xl:text-[54px]">
                Biblioteca Digital de Logística Pública
              </h1>
              <p className="mt-6 max-w-[690px] text-[16px] leading-relaxed text-sp-black/72">
                Acervo institucional de trabalhos acadêmicos, materiais pedagógicos,
                livros digitais e documentos técnicos para apoiar contratações públicas,
                governança e gestão de suprimentos no Estado de São Paulo.
              </p>

              <div className="mt-8">
                <SearchBar value={query} onChange={setQuery} onSearch={() => handleSearch()} size="lg" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {QUICK_TAGS.map((tag) => (
                  <Tag key={tag} onClick={() => handleSearch(tag)}>
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="mt-7 flex items-center">
                <SPGeometry interactive className="h-24 w-40 opacity-95" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-sp-gray-medium/60 bg-sp-white py-8">
          <div className="sp-container grid gap-3 md:grid-cols-4">
            {STATS.map(([value, label]) => (
              <div key={label} className="border-l-4 border-sp-red bg-sp-gray-light p-5">
                <div className="sp-title text-[26px] text-sp-black">{value}</div>
                <div className="mt-1 text-[12px] text-sp-black/62">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sp-section bg-sp-white">
          <div className="sp-container">
            <SectionHeading
              eyebrow="Explorar o acervo"
              title="Coleções organizadas para tomada de decisão pública"
              action="Consultar acervo"
              onAction={() => router.push("/acervo")}
            />

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => handleSearch(category.label)}
                  className="sp-card flex min-h-[132px] w-full items-start gap-4 p-5 text-left"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${category.bg} ${category.color}`}>
                    {category.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="sp-subtitle block text-[15px] text-sp-black">{category.label}</span>
                    <span className="mt-2 block text-[12px] text-sp-black/62">
                      {category.count} documentos disponíveis
                    </span>
                  </span>
                  <FiArrowRight className="ml-auto mt-1 text-sp-red" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section bg-sp-gray-light">
          <div className="sp-container">
            <SectionHeading
              eyebrow="Temas em alta"
              title="Sustentabilidade e ODS"
              action="Ver tema no acervo"
              onAction={() => handleSearch("Sustentabilidade e ODS")}
            />
            <p className="mt-3 max-w-[760px] text-[13px] leading-relaxed text-sp-black/66">
              Artigos indicados para apoiar compras públicas sustentáveis,
              desenvolvimento responsável e inovação aplicada à cadeia de suprimentos.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TRENDING_DOCS.map((doc) => (
                <DocCard key={doc.id} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sp-blue-petrol py-10 text-sp-white">
          <div className="sp-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="sp-title text-[26px]">Contribua com o acervo</div>
              <p className="mt-2 max-w-[680px] text-[13px] leading-relaxed text-sp-white/72">
                Pesquisadores e gestores públicos podem submeter artigos e documentos
                para fortalecer a memória técnica da logística pública.
              </p>
            </div>
            <button type="button" className="sp-button-primary h-12 shrink-0 px-6 text-[14px]">
              <FiPlusCircle aria-hidden="true" />
              Submeter documento
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow: string;
  title: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="sp-subtitle text-[12px] uppercase text-sp-red">{eyebrow}</div>
        <h2 className="sp-title mt-2 max-w-[760px] text-[30px] leading-tight text-sp-black md:text-[38px]">
          {title}
        </h2>
      </div>
      <button type="button" onClick={onAction} className="sp-button-secondary h-11 px-5 text-[13px]">
        {action}
        <FiArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
