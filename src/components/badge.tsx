const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  artigo: { bg: "bg-gov-red-100", text: "text-gov-red-700" },
  oficial: { bg: "bg-slate-800", text: "text-white" },
  academico: { bg: "bg-[#EDE7F6]", text: "text-[#4A148C]" },
  publicado: { bg: "bg-[#D4EDDA]", text: "text-[#168821]" },
  revisao: { bg: "bg-[#FFF3CD]", text: "text-[#856404]" },
  retirado: { bg: "bg-[#FDECEA]", text: "text-gov-red-500" },
};

interface BadgeProps {
  type?: string;
  children: React.ReactNode;
}

export function Badge({ type = "artigo", children }: BadgeProps) {
  const colors = BADGE_COLORS[type] ?? BADGE_COLORS.artigo;
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap ${colors.bg} ${colors.text}`}
    >
      {children}
    </span>
  );
}
