import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiFileText,
  FiLayers,
  FiLock,
  FiShield,
  FiUser,
} from "react-icons/fi";
import type { Documento } from "@/lib/types";
import { extractYear } from "@/lib/data";

const COLECAO_STYLE: Record<string, { icon: React.ReactNode; className: string }> = {
  Jurisprudência: {
    icon: <FiShield />,
    className: "border-sp-olive/35 bg-sp-olive/10 text-sp-blue-petrol",
  },
  "Trabalhos Acadêmicos": {
    icon: <FiLayers />,
    className: "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  },
  "Instrução e Capacitação": {
    icon: <FiFileText />,
    className: "border-sp-green/25 bg-sp-green/10 text-sp-green",
  },
  "Doutrina e Conteúdo Técnico": {
    icon: <FiBookOpen />,
    className: "border-sp-red/25 bg-gov-red-100 text-sp-red",
  },
};

export function DocCard({ doc }: { doc: Documento }) {
  const style = COLECAO_STYLE[doc.colecao] ?? {
    icon: <FiFileText />,
    className: "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  };
  const ano = extractYear(doc.imprenta);
  const tipoInfo = doc.detalheTipoInfo ? `${doc.tipoInfo} (${doc.detalheTipoInfo})` : doc.tipoInfo;
  const coauthorCount = doc.autoridade ? doc.autoridade.split(";").length : 0;

  return (
    <Link
      href={`/acervo/${doc.id}`}
      className="sp-card group flex h-full min-w-0 flex-col gap-4 p-5 no-underline"
    >
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex min-h-8 min-w-0 items-center gap-2 rounded-md border px-2.5 py-1 text-[11px] sp-subtitle ${style.className}`}
        >
          <span className="shrink-0" aria-hidden="true">{style.icon}</span>
          <span className="min-w-0 [overflow-wrap:anywhere]">{doc.colecao}</span>
        </span>
        <span className="ml-auto shrink-0 rounded-md border border-sp-gray-medium bg-sp-white px-2 py-1 text-[11px] text-sp-black/62">
          {ano}
        </span>
      </div>

      <div className="min-w-0 [overflow-wrap:anywhere]">
        {tipoInfo && <p className="mb-2 text-[11px] text-sp-black/62">{tipoInfo}</p>}
        <h3 className="sp-subtitle text-[15px] leading-snug text-sp-black group-hover:text-sp-blue">
          {doc.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-sp-black/66">
          {doc.resumo}
        </p>
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex min-w-0 items-center gap-2 text-[12px] text-sp-black/62">
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
              className="max-w-full rounded-md border border-sp-gray-medium bg-sp-gray-light px-2 py-1 text-[10px] text-sp-black/70 [overflow-wrap:anywhere]"
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

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-sp-gray-medium/60 pt-3">
          <span className="min-w-0 text-[11px] text-sp-black/55 [overflow-wrap:anywhere]">{doc.assunto}</span>
          <span className="inline-flex shrink-0 items-center gap-1 text-[12px] text-sp-red sp-subtitle">
            Ver documento
            <FiArrowRight aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
