"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  FiBookmark,
  FiBookOpen,
  FiCalendar,
  FiExternalLink,
  FiFileText,
  FiLayers,
  FiLock,
  FiUnlock,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SAMPLE_DOCS, extractYear } from "@/lib/data";

const COLECAO_ICON: Record<string, React.ReactNode> = {
  "Trabalhos Acadêmicos": <FiLayers />,
  "Materiais Pedagógicos": <FiFileText />,
  "Livros Digitais": <FiBookOpen />,
  Eventos: <FiCalendar />,
};

const COLECAO_CLASS: Record<string, string> = {
  "Trabalhos Acadêmicos": "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  "Materiais Pedagógicos": "border-sp-green/25 bg-sp-green/10 text-sp-green",
  "Livros Digitais": "border-sp-red/25 bg-gov-red-100 text-sp-red",
  Eventos: "border-sp-olive/35 bg-sp-olive/10 text-sp-blue-petrol",
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const doc = SAMPLE_DOCS.find((d) => d.id === Number(id));
  const [bookmarked, setBookmarked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!doc) {
    return (
      <div className="min-h-screen bg-sp-gray-light text-sp-black">
        <GovBar />
        <Header />
        <main className="sp-container flex min-h-[420px] items-center justify-center py-10">
          <div className="sp-panel max-w-[460px] p-8 text-center">
            <h1 className="sp-title text-[26px] text-sp-black">Documento não encontrado</h1>
            <Link href="/acervo" className="mt-4 inline-flex text-sp-blue no-underline hover:underline">
              Voltar ao acervo
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const badgeClass = COLECAO_CLASS[doc.colecao] ?? "border-sp-blue/25 bg-sp-blue/10 text-sp-blue";
  const icon = COLECAO_ICON[doc.colecao] ?? <FiFileText />;
  const ano = extractYear(doc.imprenta);

  return (
    <div className="min-h-screen bg-sp-gray-light text-sp-black">
      <GovBar />
      <Header />

      <main>
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Acervo", href: "/acervo" },
            { label: doc.title.length > 52 ? `${doc.title.slice(0, 52)}...` : doc.title },
          ]}
        />

        <section className="border-b border-sp-gray-medium/60 bg-sp-white">
          <div className="sp-container py-9">
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex min-h-8 items-center gap-2 rounded-md border px-3 text-[11px] sp-subtitle ${badgeClass}`}>
                {icon}
                {doc.tipoInfo || doc.colecao}
              </span>
              <span className="inline-flex min-h-8 items-center rounded-md border border-sp-gray-medium bg-sp-white px-3 text-[11px] text-sp-black/70 sp-subtitle">
                Complexidade: {doc.complexidade}
              </span>
              <span
                className={`inline-flex min-h-8 items-center gap-2 rounded-md border px-3 text-[11px] sp-subtitle ${
                  doc.acesso === "Aberto"
                    ? "border-sp-green/30 bg-sp-green/10 text-sp-green"
                    : "border-sp-gray-medium bg-sp-white text-sp-black/62"
                }`}
              >
                {doc.acesso === "Aberto" ? <FiUnlock /> : <FiLock />}
                {doc.acesso}
              </span>
            </div>

            <h1 className="sp-title mt-5 max-w-[940px] text-[34px] leading-tight text-sp-black md:text-[46px]">
              {doc.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-4 text-[13px] text-sp-black/66">
              <span className="flex items-center gap-2">
                <FiUser className="text-sp-blue" aria-hidden="true" />
                {doc.autorPrincipal}
              </span>
              {doc.autoridade && (
                <span className="flex items-center gap-2">
                  <FiUsers className="text-sp-blue" aria-hidden="true" />
                  {doc.autoridade}
                </span>
              )}
              <span className="flex items-center gap-2">
                <FiCalendar className="text-sp-blue" aria-hidden="true" />
                {ano}
              </span>
            </div>
          </div>
        </section>

        <section className="sp-container grid gap-6 py-8 lg:grid-cols-[1fr_300px] lg:items-start">
          <div className="space-y-5">
            <article className="sp-panel p-6 md:p-8">
              <SectionTitle>Resumo</SectionTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-sp-black/76">{doc.resumo}</p>

              {doc.aplicabilidade && (
                <div className="mt-6 rounded-lg border-l-4 border-sp-red bg-sp-gray-light p-5">
                  <SectionTitle>Aplicabilidade</SectionTitle>
                  <p className="mt-2 text-[13px] leading-relaxed text-sp-black/72">
                    {doc.aplicabilidade}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-sp-gray-medium bg-sp-white px-3 py-1.5 text-[11px] text-sp-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <section className="sp-panel p-6 md:p-8">
              <SectionTitle>Classificação BDLP</SectionTitle>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {(
                  [
                    ["Assunto", doc.assunto],
                    ["Categoria", doc.categoria],
                    doc.subcategoria ? ["Subcategoria", doc.subcategoria] : null,
                    ["Coleção", doc.colecao],
                    ["Tipo de Informação", doc.tipoInfo],
                  ] as (string[] | null)[]
                )
                  .filter(Boolean)
                  .map((item) => (
                    <MetaItem key={item![0]} label={item![0]} value={item![1]} />
                  ))}
              </div>
            </section>

            {downloaded && (
              <div className="rounded-lg border border-sp-green/30 bg-sp-green/10 px-4 py-3 text-[13px] text-sp-green sp-subtitle">
                Download iniciado com sucesso.
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="sp-panel p-5">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDownloaded(true)}
                className="sp-button-primary h-12 w-full px-4 text-[13px] no-underline"
              >
                <FiExternalLink aria-hidden="true" />
                Acessar documento
              </a>
              <button
                type="button"
                onClick={() => setBookmarked(!bookmarked)}
                className={`mt-3 h-11 w-full rounded-md border px-4 text-[13px] sp-subtitle transition-colors ${
                  bookmarked
                    ? "border-sp-red bg-gov-red-100 text-sp-red"
                    : "border-sp-gray-medium bg-sp-white text-sp-black/72 hover:border-sp-blue hover:text-sp-blue"
                }`}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <FiBookmark aria-hidden="true" />
                  {bookmarked ? "Salvo" : "Salvar"}
                </span>
              </button>
            </div>

            <div className="sp-panel p-5">
              <SectionTitle>Referência</SectionTitle>
              <div className="mt-4 space-y-3">
                {(
                  [
                    doc.imprenta && ["Imprenta", doc.imprenta],
                    doc.doi && ["DOI", doc.doi],
                    doc.issn && ["ISSN", doc.issn],
                    doc.isbn && ["ISBN", doc.isbn],
                    doc.descFisica && ["Descrição", doc.descFisica],
                    ["Acesso", doc.acesso],
                  ] as (string[] | false)[]
                )
                  .filter(Boolean)
                  .map((item) => (
                    <MetaItem
                      key={(item as string[])[0]}
                      label={(item as string[])[0]}
                      value={(item as string[])[1]}
                    />
                  ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="sp-subtitle text-[13px] uppercase text-sp-red">{children}</h2>;
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-sp-gray-medium/60 pb-3 last:border-b-0 last:pb-0">
      <div className="mb-1 text-[11px] text-sp-black/45">{label}</div>
      <div className="break-words text-[13px] leading-relaxed text-sp-black/78">{value}</div>
    </div>
  );
}
