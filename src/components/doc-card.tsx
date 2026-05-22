import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiLayers,
  FiLock,
  FiUser,
} from "react-icons/fi";
import type { Documento } from "@/lib/types";
import { extractYear } from "@/lib/data";

const COLECAO_STYLE: Record<string, { icon: React.ReactNode; className: string }> = {
  "Trabalhos Acadêmicos": {
    icon: <FiLayers />,
    className: "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  },
  "Materiais Pedagógicos": {
    icon: <FiFileText />,
    className: "border-sp-green/25 bg-sp-green/10 text-sp-green",
  },
  "Livros Digitais": {
    icon: <FiBookOpen />,
    className: "border-sp-red/25 bg-gov-red-100 text-sp-red",
  },
  Eventos: {
    icon: <FiCalendar />,
    className: "border-sp-olive/35 bg-sp-olive/10 text-sp-blue-petrol",
  },
};

export function DocCard({ doc }: { doc: Documento }) {
  const style = COLECAO_STYLE[doc.colecao] ?? {
    icon: <FiFileText />,
    className: "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  };
  const ano = extractYear(doc.imprenta);
  const coauthorCount = doc.autoridade ? doc.autoridade.split(";").length : 0;

  return (
    <Link
      href={`/acervo/${doc.id}`}
      className="sp-card group flex h-full flex-col gap-4 p-5 no-underline"
    >
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex min-h-8 shrink-0 items-center gap-2 rounded-md border px-2.5 text-[11px] sp-subtitle ${style.className}`}
        >
          {style.icon}
          {doc.tipoInfo || doc.colecao}
        </span>
        <span className="ml-auto rounded-md border border-sp-gray-medium bg-sp-white px-2 py-1 text-[11px] text-sp-black/62">
          {ano}
        </span>
      </div>

      <div>
        <h3 className="sp-subtitle text-[15px] leading-snug text-sp-black group-hover:text-sp-blue">
          {doc.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-sp-black/66">
          {doc.resumo}
        </p>
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-center gap-2 text-[12px] text-sp-black/62">
          <FiUser className="shrink-0 text-sp-blue" aria-hidden="true" />
          <span className="truncate">
            {doc.autorPrincipal}
            {coauthorCount > 0 && (
              <span className="text-sp-black/45"> + {coauthorCount} autor(es)</span>
            )}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {doc.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-sp-gray-medium bg-sp-gray-light px-2 py-1 text-[10px] text-sp-black/70"
            >
              {tag}
            </span>
          ))}
          {doc.acesso === "Restrito" && (
            <span className="inline-flex items-center gap-1 rounded-md border border-sp-gray-medium bg-sp-white px-2 py-1 text-[10px] text-sp-black/62">
              <FiLock aria-hidden="true" />
              Restrito
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-sp-gray-medium/60 pt-3">
          <span className="text-[11px] text-sp-black/55">{doc.assunto}</span>
          <span className="inline-flex items-center gap-1 text-[12px] text-sp-red sp-subtitle">
            Ver documento
            <FiArrowRight aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
