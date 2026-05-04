"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaFileAlt,
  FaLock,
  FaLockOpen,
  FaUser,
  FaUsers,
  FaExternalLinkAlt,
  FaBookmark,
} from "react-icons/fa";
import { GovBar } from "@/components/gov-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SAMPLE_DOCS, extractYear } from "@/lib/data";

const COLECAO_ICON: Record<string, React.ReactNode> = {
  "Trabalhos Academicos": <FaGraduationCap />,
  "Materiais Pedagogicos": <FaChalkboardTeacher />,
  "Livros Digitais": <FaBook />,
  Eventos: <FaCalendarAlt />,
};

const COLECAO_COLORS: Record<string, { color: string; bg: string }> = {
  "Trabalhos Academicos": { color: "text-[#4A148C]", bg: "bg-[#EDE7F6]" },
  "Materiais Pedagogicos": { color: "text-[#1B5E20]", bg: "bg-[#E8F5E9]" },
  "Livros Digitais": { color: "text-gov-red-700", bg: "bg-gov-red-100" },
  Eventos: { color: "text-[#E65100]", bg: "bg-[#FBE9E7]" },
};

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const doc = SAMPLE_DOCS.find((d) => d.id === Number(id));
  const [bookmarked, setBookmarked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!doc) {
    return (
      <div className="min-h-screen flex flex-col bg-off-white font-sans">
        <GovBar />
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-slate-800 mb-2">Documento nao encontrado</div>
            <Link href="/acervo" className="text-gov-red-700 text-sm">
              Voltar ao acervo
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const cm = COLECAO_COLORS[doc.colecao] ?? { color: "text-gov-red-700", bg: "bg-gov-red-100" };
  const icon = COLECAO_ICON[doc.colecao] ?? <FaFileAlt />;
  const ano = extractYear(doc.imprenta);

  return (
    <div className="min-h-screen flex flex-col bg-off-white font-sans">
      <GovBar />
      <Header />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: doc.colecao, href: "/acervo" },
          { label: doc.title.length > 50 ? doc.title.slice(0, 50) + "..." : doc.title },
        ]}
      />

      <div className="max-w-[1200px] mx-auto py-6 px-6 flex gap-6 items-start w-full">
        {/* Conteudo principal */}
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-slate-100 rounded p-7 mb-4">
            {/* Badges */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-[3px] rounded-sm ${cm.bg} ${cm.color}`}>
                {icon} {doc.tipoInfo || doc.colecao}
              </span>
              {doc.complexidade && (
                <span className="text-[10px] font-bold px-2.5 py-[3px] rounded-sm bg-slate-100 text-slate-700">
                  Complexidade: {doc.complexidade}
                </span>
              )}
              {doc.tipologia && (
                <span className="text-[10px] font-bold px-2.5 py-[3px] rounded-sm bg-slate-100 text-slate-700">
                  {doc.tipologia}
                </span>
              )}
              <span
                className={`text-[10px] font-bold px-2.5 py-[3px] rounded-sm inline-flex items-center gap-1 ${
                  doc.acesso === "Aberto"
                    ? "bg-[#E8F5E9] text-[#1B5E20]"
                    : "bg-off-white text-slate-600"
                }`}
              >
                {doc.acesso === "Aberto" ? <FaLockOpen /> : <FaLock />}
                {doc.acesso}
              </span>
            </div>

            {/* Titulo */}
            <h1 className="text-[22px] font-bold text-slate-900 leading-snug mb-3.5">
              {doc.title}
            </h1>

            {/* Metadados de autoria */}
            <div className="flex flex-wrap gap-4 text-[13px] text-slate-600 mb-5">
              <span className="flex items-center gap-1">
                <FaUser /> {doc.autorPrincipal}
              </span>
              {doc.autoridade && (
                <span className="flex items-center gap-1">
                  <FaUsers /> {doc.autoridade}
                </span>
              )}
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {ano}
              </span>
            </div>

            <hr className="border-slate-100 mb-5" />

            {/* Resumo */}
            <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Resumo
            </div>
            <p className="text-[15px] text-slate-800 leading-relaxed mb-4">
              {doc.resumo}
            </p>

            {/* Aplicabilidade */}
            {doc.aplicabilidade && (
              <div className="bg-off-white border-l-[3px] border-gov-red-700 rounded-r p-4 mb-4">
                <div className="text-[11px] font-bold text-gov-red-700 uppercase tracking-wider mb-1.5">
                  Aplicabilidade
                </div>
                <p className="text-[13px] text-slate-800 leading-relaxed m-0">
                  {doc.aplicabilidade}
                </p>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {doc.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-[3px] rounded-full border border-slate-300 text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Classificacao */}
          <div className="bg-white border border-slate-100 rounded p-[18px]">
            <div className="text-[11px] font-bold text-gov-red-700 uppercase tracking-wider mb-3">
              Classificacao BDLP
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {(
                [
                  ["Assunto", doc.assunto],
                  ["Categoria", doc.categoria],
                  doc.subcategoria ? ["Subcategoria", doc.subcategoria] : null,
                  ["Colecao", doc.colecao],
                  ["Tipo de Informacao", doc.tipoInfo],
                ] as (string[] | null)[]
              )
                .filter(Boolean)
                .map((item) => (
                  <div key={item![0]} className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {item![0]}
                    </span>
                    <span className="text-[13px] text-slate-800 font-medium">
                      {item![1]}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {downloaded && (
            <div className="mt-3 bg-[#D4EDDA] text-[#155724] border-l-[3px] border-[#168821] rounded-r px-4 py-2.5 text-[13px] font-sans">
              Download iniciado com sucesso.
            </div>
          )}
        </div>

        {/* Sidebar acoes */}
        <div className="w-[240px] shrink-0 hidden md:block">
          <div className="bg-white border border-slate-100 rounded p-[18px] mb-3">
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDownloaded(true)}
              className="w-full bg-gov-red-700 text-white border-none rounded py-[11px] text-sm font-semibold cursor-pointer font-sans flex items-center justify-center gap-[7px] mb-2 no-underline transition-colors hover:bg-gov-red-800"
            >
              <FaExternalLinkAlt /> Acessar documento
            </a>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`w-full border rounded py-[9px] text-[13px] font-semibold cursor-pointer font-sans flex items-center justify-center gap-[7px] transition-colors ${
                bookmarked
                  ? "text-gov-red-700 border-gov-red-700 bg-white"
                  : "text-slate-700 border-slate-300 bg-white"
              }`}
            >
              <FaBookmark />
              {bookmarked ? "Salvo" : "Salvar"}
            </button>
          </div>

          {/* Metadados */}
          <div className="bg-white border border-slate-100 rounded p-4">
            <div className="text-[11px] font-bold text-gov-red-700 uppercase tracking-wider mb-3">
              Referencia
            </div>
            {(
              [
                doc.imprenta && ["Imprenta", doc.imprenta],
                doc.doi && ["DOI", doc.doi],
                doc.issn && ["ISSN", doc.issn],
                doc.isbn && ["ISBN", doc.isbn],
                doc.descFisica && ["Descricao", doc.descFisica],
                ["Acesso", doc.acesso],
              ] as (string[] | false)[]
            )
              .filter(Boolean)
              .map((item) => (
                <div
                  key={(item as string[])[0]}
                  className="pb-2 mb-2 border-b border-off-white last:border-none"
                >
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
                    {(item as string[])[0]}
                  </div>
                  <div className="text-[11px] text-slate-800 font-medium break-words">
                    {(item as string[])[1]}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
