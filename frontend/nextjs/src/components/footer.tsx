import { GovernmentLogo, LibraryMark } from "@/components/sp-identity";

const GOV_LINKS = ["Ouvidoria", "Transparência", "SIC", "Acesso à Informação"];
const LIBRARY_LINKS = [
  { label: "Metodologia de classificação", href: "/metodologia" },
  "Portal de Compras SP",
  "Laboratório de Logística",
  "Legislação NLLC",
  "Capacitação",
];

const INSTITUTIONAL_TEXT = {
  title: "Biblioteca Digital de Logística Pública do Governo do Estado de São Paulo",
  organization:
    "Laboratório de Inovação em Logística Pública (LILP), Secretaria de Gestão e Governo Digital (SGGD).",
  partnership: "Parceria SBU/Unicamp.",
};

export function Footer() {
  return (
    <footer className="mt-auto bg-sp-black text-sp-white">
      <div className="h-1 bg-sp-white" />
      <div className="sp-container py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="rounded-lg border border-sp-white/15 bg-sp-white/5 p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div>
                  <GovernmentLogo tone="white" orientation="vertical" />
                </div>
                <div className="hidden h-12 w-px bg-sp-white/16 sm:block" />
                <div className="text-sp-white [&_*]:text-sp-white">
                  <LibraryMark />
                </div>
              </div>
            </div>
          </div>

          <FooterColumn title="Biblioteca" items={LIBRARY_LINKS} />
          <FooterColumn title="Governo SP" items={GOV_LINKS} />
        </div>

        <div className="mt-8 border-y border-sp-white/12 py-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-[920px]">
              <p className="sp-subtitle text-[13px] leading-relaxed text-sp-white">
                {INSTITUTIONAL_TEXT.title}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-sp-white/68">
                {INSTITUTIONAL_TEXT.organization}
              </p>
            </div>
            <div className="rounded-md border border-sp-white/16 bg-sp-white/5 px-4 py-3 text-[12px] leading-relaxed text-sp-white/78">
              {INSTITUTIONAL_TEXT.partnership}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-[11px] text-sp-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Governo do Estado de São Paulo - SGGD</span>
          <span>Desenvolvido por Prodesp</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: (string | { label: string; href: string })[] }) {
  return (
    <div>
      <h2 className="sp-subtitle mb-4 text-[13px] text-sp-white">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={typeof item === "string" ? item : item.label}>
            <a
              href={typeof item === "string" ? "#" : item.href}
              className="text-[12px] text-sp-white/70 no-underline transition-colors hover:text-sp-white"
            >
              {typeof item === "string" ? item : item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
