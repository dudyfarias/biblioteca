"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
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
import { ASSUNTOS, COLECOES, SAMPLE_DOCS, extractYear } from "@/lib/data";

const COLECAO_STYLE: Record<
  string,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  Jurisprudência: {
    icon: <FiShield />,
    color: "text-sp-blue-petrol",
    bg: "bg-sp-olive/10",
  },
  "Trabalhos Acadêmicos": {
    icon: <FiLayers />,
    color: "text-sp-blue",
    bg: "bg-sp-blue/10",
  },
  "Doutrina e Conteúdo Técnico": {
    icon: <FiBookOpen />,
    color: "text-sp-red",
    bg: "bg-gov-red-100",
  },
  "Instrução e Capacitação": {
    icon: <FiFileText />,
    color: "text-sp-green",
    bg: "bg-sp-green/10",
  },
};

const ASSUNTO_ODS = "Sustentabilidade e ODS";
const ODS_HREF = `/acervo?${new URLSearchParams({ assunto: ASSUNTO_ODS })}`;

const CATEGORIES = [
  ...Object.keys(COLECOES).map((colecao) => ({
    ...COLECAO_STYLE[colecao],
    label: colecao,
    count: SAMPLE_DOCS.filter((doc) => doc.colecao === colecao).length,
    href: `/acervo?${new URLSearchParams({ colecao })}`,
  })),
  {
    icon: <FiShield />,
    label: "Aspectos Jurídicos e Regulatórios",
    count: SAMPLE_DOCS.filter((doc) => doc.assunto === "Aspectos Jurídicos e Regulatórios").length,
    href: `/acervo?${new URLSearchParams({ assunto: "Aspectos Jurídicos e Regulatórios" })}`,
    color: "text-sp-blue-dark",
    bg: "bg-sp-blue-light/20",
  },
  {
    icon: <FiTrendingUp />,
    label: ASSUNTO_ODS,
    count: SAMPLE_DOCS.filter((doc) => doc.assunto === ASSUNTO_ODS).length,
    href: ODS_HREF,
    color: "text-sp-green",
    bg: "bg-sp-green/10",
  },
];

const QUICK_TAGS = ["Contratação Direta", "Pregão", "Registro de Preços", "ODS", "TCE"];

const YEARS = SAMPLE_DOCS.map((doc) => Number(extractYear(doc.imprenta))).filter(Number.isFinite);
const FIRST_YEAR = Math.min(...YEARS);
const LAST_YEAR = Math.max(...YEARS);
const STATS = [
  [SAMPLE_DOCS.length.toLocaleString("pt-BR"), "Documentos catalogados"],
  [Object.keys(COLECOES).length.toLocaleString("pt-BR"), "Coleções curatoriais"],
  [ASSUNTOS.length.toLocaleString("pt-BR"), "Assuntos"],
  [
    YEARS.length === 0 ? "Não informada" : FIRST_YEAR === LAST_YEAR ? String(FIRST_YEAR) : `${FIRST_YEAR}-${LAST_YEAR}`,
    "Cobertura temporal",
  ],
];

const TRENDING_DOCS = SAMPLE_DOCS.filter(
  (doc) =>
    doc.type === "artigo" &&
    (doc.assunto === ASSUNTO_ODS || doc.tags.includes("Sustentabilidade")),
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
                Acervo institucional de jurisprudência, trabalhos acadêmicos, doutrina,
                conteúdo técnico e materiais de instrução e capacitação para apoiar contratações públicas,
                governança e gestão de suprimentos no Estado de São Paulo.
              </p>

              <div className="mt-8">
                <SearchBar value={query} onChange={setQuery} onSearch={() => handleSearch()} size="lg" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {QUICK_TAGS.map((tag) => (
                  <Tag key={tag} onClick={() => tag === "ODS" ? router.push(ODS_HREF) : handleSearch(tag)}>
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
              href="/acervo"
            />

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className="sp-card flex min-h-[132px] w-full min-w-0 items-start gap-4 p-5 text-left no-underline"
                >
                  <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${category.bg} ${category.color}`}>
                    {category.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="sp-subtitle block text-[15px] text-sp-black [overflow-wrap:anywhere]">{category.label}</span>
                    <span className="mt-2 block text-[12px] text-sp-black/62">
                      {category.count} {category.count === 1 ? "documento disponível" : "documentos disponíveis"}
                    </span>
                  </span>
                  <FiArrowRight className="ml-auto mt-1 shrink-0 text-sp-red" aria-hidden="true" />
                </Link>
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
              href={ODS_HREF}
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
  href,
}: {
  eyebrow: string;
  title: string;
  action: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="sp-subtitle text-[12px] uppercase text-sp-red">{eyebrow}</div>
        <h2 className="sp-title mt-2 max-w-[760px] text-[30px] leading-tight text-sp-black md:text-[38px]">
          {title}
        </h2>
      </div>
      <Link href={href} className="sp-button-secondary min-h-11 shrink-0 px-5 py-2 text-[13px] no-underline">
        {action}
        <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}
