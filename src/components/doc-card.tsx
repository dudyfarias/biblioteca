import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaFileAlt,
  FaLock,
  FaUser,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import type { Documento } from "@/lib/types";
import { extractYear } from "@/lib/data";

const COLECAO_STYLE: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  "Trabalhos Academicos": {
    icon: <FaGraduationCap />,
    color: "text-[#4A148C]",
    bg: "bg-[#EDE7F6]",
  },
  "Materiais Pedagogicos": {
    icon: <FaChalkboardTeacher />,
    color: "text-[#1B5E20]",
    bg: "bg-[#E8F5E9]",
  },
  "Livros Digitais": {
    icon: <FaBook />,
    color: "text-gov-red-700",
    bg: "bg-gov-red-100",
  },
  Eventos: {
    icon: <FaCalendarAlt />,
    color: "text-[#E65100]",
    bg: "bg-[#FBE9E7]",
  },
};

export function DocCard({ doc }: { doc: Documento }) {
  const style = COLECAO_STYLE[doc.colecao] ?? {
    icon: <FaFileAlt />,
    color: "text-gov-red-700",
    bg: "bg-gov-red-100",
  };
  const ano = extractYear(doc.imprenta);
  const coauthorCount = doc.autoridade
    ? doc.autoridade.split(";").length
    : 0;

  return (
    <Link
      href={`/acervo/${doc.id}`}
      className="bg-white border border-slate-100 rounded p-4 no-underline flex flex-col gap-2 shadow-sm transition-all hover:shadow-md hover:-translate-y-px"
    >
      <div className="flex items-center gap-1.5">
        <span
          className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-sm ${style.bg} ${style.color}`}
        >
          {style.icon}
          {doc.tipoInfo || doc.colecao}
        </span>
        {doc.acesso === "Restrito" && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-off-white text-slate-600">
            <FaLock className="inline mr-0.5 text-[9px]" />
            Restrito
          </span>
        )}
        <span className="ml-auto text-[11px] text-slate-400">{ano}</span>
      </div>

      <div className="text-[13px] font-semibold text-slate-900 leading-snug">
        {doc.title}
      </div>

      <div className="text-[11px] text-slate-600 leading-snug">
        <FaUser className="inline mr-1" />
        {doc.autorPrincipal}
        {coauthorCount > 0 && (
          <span className="text-slate-400">
            {" "}
            + {coauthorCount} autor(es)
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1">
        {doc.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[10px] px-[7px] py-0.5 rounded-full border border-slate-300 text-slate-600 bg-white"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-off-white pt-2 mt-1">
        <span className="text-[10px] text-slate-400">
          <FaTag className="inline mr-0.5" />
          {doc.assunto}
        </span>
        <span className="text-[11px] text-gov-red-700 font-semibold">
          <FaArrowRight className="inline mr-0.5" />
          Ver mais
        </span>
      </div>
    </Link>
  );
}
