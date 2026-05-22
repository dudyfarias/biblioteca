const BADGE_COLORS: Record<string, string> = {
  artigo: "border-sp-blue/25 bg-sp-blue/10 text-sp-blue",
  oficial: "border-sp-black bg-sp-black text-sp-white",
  academico: "border-sp-blue-medium/30 bg-sp-blue-medium/10 text-sp-blue-dark",
  publicado: "border-sp-green/30 bg-sp-green/10 text-sp-green",
  revisao: "border-sp-olive/35 bg-sp-olive/10 text-sp-blue-petrol",
  retirado: "border-sp-red/30 bg-gov-red-100 text-sp-red",
};

interface BadgeProps {
  type?: string;
  children: React.ReactNode;
}

export function Badge({ type = "artigo", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-md border px-2.5 text-[11px] sp-subtitle ${
        BADGE_COLORS[type] ?? BADGE_COLORS.artigo
      }`}
    >
      {children}
    </span>
  );
}
